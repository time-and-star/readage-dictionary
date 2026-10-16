/* data/words/cet/author_depth_e4.js
 * 手敲深度补丁：chopstick–comma（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('chopstick', {
    etymology: {
      origin: '现代英语常用词「chopstick」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chopstick', gloss: '筷子' },
      suffix: null,
      history: [
        { label: 'chopstick', text: '现代英语常用词「chopstick」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：筷子。' },
      ],
      formationLogic: '核心义：筷子。',
      mnemonic: '看到 chopstick，先说出「筷子」。',
      note: '核心义：筷子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chopstick.', chinese: '这一章反复回到同一个点：筷子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chopstick.s1', en: 'Without that chopstick, the next paragraph is hard to follow.', zh: '没有这个筷子，下一段会很难读。', structure: 'chopstick / 表示 / 筷子', grammar: 'noun，围绕「筷子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chopstick.', right: 'He gave me some advice about the chopstick.', reason: 'advice 不可数。名词 chopstick 的单复数按词典词形记。', rule: '先确定 chopstick 是noun，再套「筷子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chopstick.q1', senseId: 'chopstick.s1', errorType: 'meaning', type: '词义选择', prompt: '「chopstick」在本条的核心意思是：', options: ['筷子', '完全相反的意思', '一种古代钱币'], answer: '筷子', explain: 'chopstick：筷子。' },
      { id: 'chopstick.q2', senseId: 'chopstick.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chopstick?', options: ['筷子', 'a kind of ancient coin', 'the past tense of be'], answer: '筷子', explain: '对的是「筷子」。' },
      { id: 'chopstick.q3', senseId: 'chopstick.s1', errorType: 'grammar', type: '词义选择', prompt: 'chopstick 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chopstick.q4', senseId: 'chopstick.s1', errorType: 'meaning', type: '词源', prompt: '记 chopstick 时，哪句更稳妥？', options: ['先锁住「筷子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「筷子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['筷子'] },
  });

  D('chord', {
    etymology: {
      origin: '现代英语常用词「chord」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chord', gloss: '和弦' },
      suffix: null,
      history: [
        { label: 'chord', text: '现代英语常用词「chord」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：和弦。' },
      ],
      formationLogic: '核心义：和弦。',
      mnemonic: '看到 chord，先说出「和弦」。',
      note: '核心义：和弦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chord.', chinese: '这一章反复回到同一个点：和弦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chord.s1', en: 'Without that chord, the next paragraph is hard to follow.', zh: '没有这个和弦，下一段会很难读。', structure: 'chord / 表示 / 和弦', grammar: 'noun，围绕「和弦」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chord.', right: 'He gave me some advice about the chord.', reason: 'advice 不可数。名词 chord 的单复数按词典词形记。', rule: '先确定 chord 是noun，再套「和弦」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chord.q1', senseId: 'chord.s1', errorType: 'meaning', type: '词义选择', prompt: '「chord」在本条的核心意思是：', options: ['和弦', '完全相反的意思', '一种古代钱币'], answer: '和弦', explain: 'chord：和弦。' },
      { id: 'chord.q2', senseId: 'chord.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chord?', options: ['和弦', 'a kind of ancient coin', 'the past tense of be'], answer: '和弦', explain: '对的是「和弦」。' },
      { id: 'chord.q3', senseId: 'chord.s1', errorType: 'grammar', type: '词义选择', prompt: 'chord 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chord.q4', senseId: 'chord.s1', errorType: 'meaning', type: '词源', prompt: '记 chord 时，哪句更稳妥？', options: ['先锁住「和弦」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「和弦」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['和弦'] },
  });

  D('chore', {
    etymology: {
      origin: '现代英语常用词「chore」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chore', gloss: '家务活' },
      suffix: null,
      history: [
        { label: 'chore', text: '现代英语常用词「chore」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：家务活。' },
      ],
      formationLogic: '核心义：家务活。',
      mnemonic: '看到 chore，先说出「家务活」。',
      note: '核心义：家务活。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chore.', chinese: '这一章反复回到同一个点：家务活。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chore.s1', en: 'Without that chore, the next paragraph is hard to follow.', zh: '没有这个家务活，下一段会很难读。', structure: 'chore / 表示 / 家务活', grammar: 'noun，围绕「家务活」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chore.', right: 'He gave me some advice about the chore.', reason: 'advice 不可数。名词 chore 的单复数按词典词形记。', rule: '先确定 chore 是noun，再套「家务活」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chore.q1', senseId: 'chore.s1', errorType: 'meaning', type: '词义选择', prompt: '「chore」在本条的核心意思是：', options: ['家务活', '完全相反的意思', '一种古代钱币'], answer: '家务活', explain: 'chore：家务活。' },
      { id: 'chore.q2', senseId: 'chore.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chore?', options: ['家务活', 'a kind of ancient coin', 'the past tense of be'], answer: '家务活', explain: '对的是「家务活」。' },
      { id: 'chore.q3', senseId: 'chore.s1', errorType: 'grammar', type: '词义选择', prompt: 'chore 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chore.q4', senseId: 'chore.s1', errorType: 'meaning', type: '词源', prompt: '记 chore 时，哪句更稳妥？', options: ['先锁住「家务活」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家务活」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家务活'] },
  });

  D('chores', {
    etymology: {
      origin: '现代英语常用词「chores」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chores', gloss: '家务杂事（复数）' },
      suffix: null,
      history: [
        { label: 'chores', text: '现代英语常用词「chores」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：家务杂事（复数）。' },
      ],
      formationLogic: '核心义：家务杂事（复数）。',
      mnemonic: '看到 chores，先说出「家务杂事（复数）」。',
      note: '核心义：家务杂事（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chores.', chinese: '这一章反复回到同一个点：家务杂事（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chores.s1', en: 'Without that chores, the next paragraph is hard to follow.', zh: '没有这个家务杂事（复数），下一段会很难读。', structure: 'chores / 表示 / 家务杂事（复数）', grammar: 'noun，围绕「家务杂事（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chores.', right: 'He gave me some advice about the chores.', reason: 'advice 不可数。名词 chores 的单复数按词典词形记。', rule: '先确定 chores 是noun，再套「家务杂事（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chores.q1', senseId: 'chores.s1', errorType: 'meaning', type: '词义选择', prompt: '「chores」在本条的核心意思是：', options: ['家务杂事（复数）', '完全相反的意思', '一种古代钱币'], answer: '家务杂事（复数）', explain: 'chores：家务杂事（复数）。' },
      { id: 'chores.q2', senseId: 'chores.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chores?', options: ['家务杂事（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '家务杂事（复数）', explain: '对的是「家务杂事（复数）」。' },
      { id: 'chores.q3', senseId: 'chores.s1', errorType: 'grammar', type: '词义选择', prompt: 'chores 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chores.q4', senseId: 'chores.s1', errorType: 'meaning', type: '词源', prompt: '记 chores 时，哪句更稳妥？', options: ['先锁住「家务杂事（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家务杂事（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家务杂事（复数）'] },
  });

  D('chorus', {
    etymology: {
      origin: '现代英语常用词「chorus」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chorus', gloss: '合唱团' },
      suffix: null,
      history: [
        { label: 'chorus', text: '现代英语常用词「chorus」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：合唱团。' },
      ],
      formationLogic: '核心义：合唱团。',
      mnemonic: '看到 chorus，先说出「合唱团」。',
      note: '核心义：合唱团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chorus.', chinese: '这一章反复回到同一个点：合唱团。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chorus.s1', en: 'Without that chorus, the next paragraph is hard to follow.', zh: '没有这个合唱团，下一段会很难读。', structure: 'chorus / 表示 / 合唱团', grammar: 'noun，围绕「合唱团」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chorus.', right: 'He gave me some advice about the chorus.', reason: 'advice 不可数。名词 chorus 的单复数按词典词形记。', rule: '先确定 chorus 是noun，再套「合唱团」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chorus.q1', senseId: 'chorus.s1', errorType: 'meaning', type: '词义选择', prompt: '「chorus」在本条的核心意思是：', options: ['合唱团', '完全相反的意思', '一种古代钱币'], answer: '合唱团', explain: 'chorus：合唱团。' },
      { id: 'chorus.q2', senseId: 'chorus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chorus?', options: ['合唱团', 'a kind of ancient coin', 'the past tense of be'], answer: '合唱团', explain: '对的是「合唱团」。' },
      { id: 'chorus.q3', senseId: 'chorus.s1', errorType: 'grammar', type: '词义选择', prompt: 'chorus 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chorus.q4', senseId: 'chorus.s1', errorType: 'meaning', type: '词源', prompt: '记 chorus 时，哪句更稳妥？', options: ['先锁住「合唱团」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合唱团」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合唱团'] },
  });

  D('Christ', {
    etymology: {
      origin: '英语派生：Chr + -ist，词性转到「基督」。',
      prefix: null,
      root: { text: 'Chr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'Christ', text: '英语派生：Chr + -ist，词性转到「基督」。' },
        { label: '现在', text: '核心用法是：基督。' },
      ],
      formationLogic: '先认词干 Chr，再看词尾。',
      mnemonic: '看到 Christ，先说出「基督」。',
      note: '先认词干 Chr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one Christ.', chinese: '这一章反复回到同一个点：基督。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'Christ.s1', en: 'Without that Christ, the next paragraph is hard to follow.', zh: '没有这个基督，下一段会很难读。', structure: 'Christ / 表示 / 基督', grammar: 'noun，围绕「基督」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the Christ.', right: 'He gave me some advice about the Christ.', reason: 'advice 不可数。名词 Christ 的单复数按词典词形记。', rule: '先确定 Christ 是noun，再套「基督」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'Christ.q1', senseId: 'Christ.s1', errorType: 'meaning', type: '词义选择', prompt: '「Christ」在本条的核心意思是：', options: ['基督', '完全相反的意思', '一种古代钱币'], answer: '基督', explain: 'Christ：基督。' },
      { id: 'Christ.q2', senseId: 'Christ.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches Christ?', options: ['基督', 'a kind of ancient coin', 'the past tense of be'], answer: '基督', explain: '对的是「基督」。' },
      { id: 'Christ.q3', senseId: 'Christ.s1', errorType: 'grammar', type: '词义选择', prompt: 'Christ 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'Christ.q4', senseId: 'Christ.s1', errorType: 'meaning', type: '词源', prompt: '记 Christ 时，哪句更稳妥？', options: ['先锁住「基督」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「基督」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['基督'] },
  });

  D('christen', {
    etymology: {
      origin: '现代英语常用词「christen」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'christen', gloss: '为……施洗命名' },
      suffix: null,
      history: [
        { label: 'christen', text: '现代英语常用词「christen」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：为……施洗命名。' },
      ],
      formationLogic: '核心义：为……施洗命名。',
      mnemonic: '看到 christen，先说出「为……施洗命名」。',
      note: '核心义：为……施洗命名。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to christen before the office closed.', chinese: '他们同意在办公室关门前做这件事：为……施洗命名。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'christen.s1', en: 'The deadline forced the team to christen that afternoon.', zh: '截止日期逼着小组在那天下午为……施洗命名。', structure: 'christen / 表示 / 为……施洗命名', grammar: 'verb，围绕「为……施洗命名」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She christened it yesterday without checking the real past form.', right: 'Check the past form of "christen" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 christen 是verb，再套「为……施洗命名」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'christen.q1', senseId: 'christen.s1', errorType: 'meaning', type: '词义选择', prompt: '「christen」在本条的核心意思是：', options: ['为……施洗命名', '完全相反的意思', '一种古代钱币'], answer: '为……施洗命名', explain: 'christen：为……施洗命名。' },
      { id: 'christen.q2', senseId: 'christen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches christen?', options: ['为……施洗命名', 'a kind of ancient coin', 'the past tense of be'], answer: '为……施洗命名', explain: '对的是「为……施洗命名」。' },
      { id: 'christen.q3', senseId: 'christen.s1', errorType: 'grammar', type: '词义选择', prompt: 'christen 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'christen.q4', senseId: 'christen.s1', errorType: 'meaning', type: '词源', prompt: '记 christen 时，哪句更稳妥？', options: ['先锁住「为……施洗命名」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「为……施洗命名」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['为……施洗命名'] },
  });

  D('chromosome', {
    etymology: {
      origin: '现代英语常用词「chromosome」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chromosome', gloss: '染色体' },
      suffix: null,
      history: [
        { label: 'chromosome', text: '现代英语常用词「chromosome」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：染色体。' },
      ],
      formationLogic: '核心义：染色体。',
      mnemonic: '看到 chromosome，先说出「染色体」。',
      note: '核心义：染色体。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chromosome.', chinese: '这一章反复回到同一个点：染色体。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chromosome.s1', en: 'Without that chromosome, the next paragraph is hard to follow.', zh: '没有这个染色体，下一段会很难读。', structure: 'chromosome / 表示 / 染色体', grammar: 'noun，围绕「染色体」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chromosome.', right: 'He gave me some advice about the chromosome.', reason: 'advice 不可数。名词 chromosome 的单复数按词典词形记。', rule: '先确定 chromosome 是noun，再套「染色体」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chromosome.q1', senseId: 'chromosome.s1', errorType: 'meaning', type: '词义选择', prompt: '「chromosome」在本条的核心意思是：', options: ['染色体', '完全相反的意思', '一种古代钱币'], answer: '染色体', explain: 'chromosome：染色体。' },
      { id: 'chromosome.q2', senseId: 'chromosome.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chromosome?', options: ['染色体', 'a kind of ancient coin', 'the past tense of be'], answer: '染色体', explain: '对的是「染色体」。' },
      { id: 'chromosome.q3', senseId: 'chromosome.s1', errorType: 'grammar', type: '词义选择', prompt: 'chromosome 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chromosome.q4', senseId: 'chromosome.s1', errorType: 'meaning', type: '词源', prompt: '记 chromosome 时，哪句更稳妥？', options: ['先锁住「染色体」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「染色体」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['染色体'] },
  });

  D('chronic', {
    etymology: {
      origin: '英语派生：chron + -ic，词性转到「慢性的」。',
      prefix: null,
      root: { text: 'chron', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chronic', text: '英语派生：chron + -ic，词性转到「慢性的」。' },
        { label: '现在', text: '核心用法是：慢性的。' },
      ],
      formationLogic: '先认词干 chron，再看词尾。',
      mnemonic: '看到 chronic，先说出「慢性的」。',
      note: '先认词干 chron，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was chronic.', chinese: '即使是初读者也能看出，这个结果是慢性的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chronic.s1', en: 'They wanted a chronic answer, not a long speech.', zh: '他们要一个慢性的的答复，不要长篇发言。', structure: 'chronic / 表示 / 慢性的', grammar: 'adjective，围绕「慢性的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are chronic.', right: 'The news is chronic.', reason: 'news 作主语时动词用单数。', rule: '先确定 chronic 是adjective，再套「慢性的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chronic.q1', senseId: 'chronic.s1', errorType: 'meaning', type: '词义选择', prompt: '「chronic」在本条的核心意思是：', options: ['慢性的', '完全相反的意思', '一种古代钱币'], answer: '慢性的', explain: 'chronic：慢性的。' },
      { id: 'chronic.q2', senseId: 'chronic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chronic?', options: ['慢性的', 'a kind of ancient coin', 'the past tense of be'], answer: '慢性的', explain: '对的是「慢性的」。' },
      { id: 'chronic.q3', senseId: 'chronic.s1', errorType: 'grammar', type: '词义选择', prompt: 'chronic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'chronic.q4', senseId: 'chronic.s1', errorType: 'meaning', type: '词源', prompt: '记 chronic 时，哪句更稳妥？', options: ['先锁住「慢性的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「慢性的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['慢性的'] },
  });

  D('chronicle', {
    etymology: {
      origin: '现代英语常用词「chronicle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chronicle', gloss: '编年史' },
      suffix: null,
      history: [
        { label: 'chronicle', text: '现代英语常用词「chronicle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：编年史。' },
      ],
      formationLogic: '核心义：编年史。',
      mnemonic: '看到 chronicle，先说出「编年史」。',
      note: '核心义：编年史。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chronicle.', chinese: '这一章反复回到同一个点：编年史。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chronicle.s1', en: 'Without that chronicle, the next paragraph is hard to follow.', zh: '没有这个编年史，下一段会很难读。', structure: 'chronicle / 表示 / 编年史', grammar: 'noun，围绕「编年史」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chronicle.', right: 'He gave me some advice about the chronicle.', reason: 'advice 不可数。名词 chronicle 的单复数按词典词形记。', rule: '先确定 chronicle 是noun，再套「编年史」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chronicle.q1', senseId: 'chronicle.s1', errorType: 'meaning', type: '词义选择', prompt: '「chronicle」在本条的核心意思是：', options: ['编年史', '完全相反的意思', '一种古代钱币'], answer: '编年史', explain: 'chronicle：编年史。' },
      { id: 'chronicle.q2', senseId: 'chronicle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chronicle?', options: ['编年史', 'a kind of ancient coin', 'the past tense of be'], answer: '编年史', explain: '对的是「编年史」。' },
      { id: 'chronicle.q3', senseId: 'chronicle.s1', errorType: 'grammar', type: '词义选择', prompt: 'chronicle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chronicle.q4', senseId: 'chronicle.s1', errorType: 'meaning', type: '词源', prompt: '记 chronicle 时，哪句更稳妥？', options: ['先锁住「编年史」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「编年史」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['编年史'] },
  });

  D('chronological', {
    etymology: {
      origin: '英语派生：chronologic + -al，词性转到「按时间顺序的」。',
      prefix: null,
      root: { text: 'chronologic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chronological', text: '英语派生：chronologic + -al，词性转到「按时间顺序的」。' },
        { label: '现在', text: '核心用法是：按时间顺序的。' },
      ],
      formationLogic: '先认词干 chronologic，再看词尾。',
      mnemonic: '看到 chronological，先说出「按时间顺序的」。',
      note: '先认词干 chronologic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was chronological.', chinese: '即使是初读者也能看出，这个结果是按时间顺序的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chronological.s1', en: 'They wanted a chronological answer, not a long speech.', zh: '他们要一个按时间顺序的的答复，不要长篇发言。', structure: 'chronological / 表示 / 按时间顺序的', grammar: 'adjective，围绕「按时间顺序的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are chronological.', right: 'The news is chronological.', reason: 'news 作主语时动词用单数。', rule: '先确定 chronological 是adjective，再套「按时间顺序的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chronological.q1', senseId: 'chronological.s1', errorType: 'meaning', type: '词义选择', prompt: '「chronological」在本条的核心意思是：', options: ['按时间顺序的', '完全相反的意思', '一种古代钱币'], answer: '按时间顺序的', explain: 'chronological：按时间顺序的。' },
      { id: 'chronological.q2', senseId: 'chronological.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chronological?', options: ['按时间顺序的', 'a kind of ancient coin', 'the past tense of be'], answer: '按时间顺序的', explain: '对的是「按时间顺序的」。' },
      { id: 'chronological.q3', senseId: 'chronological.s1', errorType: 'grammar', type: '词义选择', prompt: 'chronological 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'chronological.q4', senseId: 'chronological.s1', errorType: 'meaning', type: '词源', prompt: '记 chronological 时，哪句更稳妥？', options: ['先锁住「按时间顺序的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「按时间顺序的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['按时间顺序的'] },
  });

  D('chuckle', {
    etymology: {
      origin: '现代英语常用词「chuckle」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chuckle', gloss: '轻笑' },
      suffix: null,
      history: [
        { label: 'chuckle', text: '现代英语常用词「chuckle」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：轻笑。' },
      ],
      formationLogic: '核心义：轻笑。',
      mnemonic: '看到 chuckle，先说出「轻笑」。',
      note: '核心义：轻笑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chuckle before the office closed.', chinese: '他们同意在办公室关门前做这件事：轻笑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chuckle.s1', en: 'The deadline forced the team to chuckle that afternoon.', zh: '截止日期逼着小组在那天下午轻笑。', structure: 'chuckle / 表示 / 轻笑', grammar: 'verb，围绕「轻笑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chuckleed it yesterday without checking the real past form.', right: 'Check the past form of "chuckle" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chuckle 是verb，再套「轻笑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chuckle.q1', senseId: 'chuckle.s1', errorType: 'meaning', type: '词义选择', prompt: '「chuckle」在本条的核心意思是：', options: ['轻笑', '完全相反的意思', '一种古代钱币'], answer: '轻笑', explain: 'chuckle：轻笑。' },
      { id: 'chuckle.q2', senseId: 'chuckle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chuckle?', options: ['轻笑', 'a kind of ancient coin', 'the past tense of be'], answer: '轻笑', explain: '对的是「轻笑」。' },
      { id: 'chuckle.q3', senseId: 'chuckle.s1', errorType: 'grammar', type: '词义选择', prompt: 'chuckle 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chuckle.q4', senseId: 'chuckle.s1', errorType: 'meaning', type: '词源', prompt: '记 chuckle 时，哪句更稳妥？', options: ['先锁住「轻笑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「轻笑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['轻笑'] },
  });

  D('chunk', {
    etymology: {
      origin: '现代英语常用词「chunk」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chunk', gloss: '大块' },
      suffix: null,
      history: [
        { label: 'chunk', text: '现代英语常用词「chunk」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大块。' },
      ],
      formationLogic: '核心义：大块。',
      mnemonic: '看到 chunk，先说出「大块」。',
      note: '核心义：大块。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chunk.', chinese: '这一章反复回到同一个点：大块。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chunk.s1', en: 'Without that chunk, the next paragraph is hard to follow.', zh: '没有这个大块，下一段会很难读。', structure: 'chunk / 表示 / 大块', grammar: 'noun，围绕「大块」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chunk.', right: 'He gave me some advice about the chunk.', reason: 'advice 不可数。名词 chunk 的单复数按词典词形记。', rule: '先确定 chunk 是noun，再套「大块」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chunk.q1', senseId: 'chunk.s1', errorType: 'meaning', type: '词义选择', prompt: '「chunk」在本条的核心意思是：', options: ['大块', '完全相反的意思', '一种古代钱币'], answer: '大块', explain: 'chunk：大块。' },
      { id: 'chunk.q2', senseId: 'chunk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chunk?', options: ['大块', 'a kind of ancient coin', 'the past tense of be'], answer: '大块', explain: '对的是「大块」。' },
      { id: 'chunk.q3', senseId: 'chunk.s1', errorType: 'grammar', type: '词义选择', prompt: 'chunk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chunk.q4', senseId: 'chunk.s1', errorType: 'meaning', type: '词源', prompt: '记 chunk 时，哪句更稳妥？', options: ['先锁住「大块」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大块」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大块'] },
  });

  D('church', {
    etymology: {
      origin: '希腊语 kyriakon「主的房子」。',
      prefix: null,
      root: { text: 'church', gloss: '教堂' },
      suffix: null,
      history: [
        { label: 'church', text: '希腊语 kyriakon「主的房子」。' },
        { label: '现在', text: '核心用法是：教堂。' },
      ],
      formationLogic: '考试认现在的用法：教堂。',
      mnemonic: '看到 church，先说出「教堂」。',
      note: '考试认现在的用法：教堂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one church.', chinese: '这一章反复回到同一个点：教堂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'church.s1', en: 'Without that church, the next paragraph is hard to follow.', zh: '没有这个教堂，下一段会很难读。', structure: 'church / 表示 / 教堂', grammar: 'noun，围绕「教堂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the church.', right: 'He gave me some advice about the church.', reason: 'advice 不可数。名词 church 的单复数按词典词形记。', rule: '先确定 church 是noun，再套「教堂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'church.q1', senseId: 'church.s1', errorType: 'meaning', type: '词义选择', prompt: '「church」在本条的核心意思是：', options: ['教堂', '完全相反的意思', '一种古代钱币'], answer: '教堂', explain: 'church：教堂。' },
      { id: 'church.q2', senseId: 'church.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches church?', options: ['教堂', 'a kind of ancient coin', 'the past tense of be'], answer: '教堂', explain: '对的是「教堂」。' },
      { id: 'church.q3', senseId: 'church.s1', errorType: 'grammar', type: '词义选择', prompt: 'church 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'church.q4', senseId: 'church.s1', errorType: 'meaning', type: '词源', prompt: '记 church 时，哪句更稳妥？', options: ['先锁住「教堂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「教堂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['教堂'] },
  });

  D('chute', {
    etymology: {
      origin: '现代英语常用词「chute」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chute', gloss: '降落伞' },
      suffix: null,
      history: [
        { label: 'chute', text: '现代英语常用词「chute」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：降落伞。' },
      ],
      formationLogic: '核心义：降落伞。',
      mnemonic: '看到 chute，先说出「降落伞」。',
      note: '核心义：降落伞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chute.', chinese: '这一章反复回到同一个点：降落伞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chute.s1', en: 'Without that chute, the next paragraph is hard to follow.', zh: '没有这个降落伞，下一段会很难读。', structure: 'chute / 表示 / 降落伞', grammar: 'noun，围绕「降落伞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chute.', right: 'He gave me some advice about the chute.', reason: 'advice 不可数。名词 chute 的单复数按词典词形记。', rule: '先确定 chute 是noun，再套「降落伞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chute.q1', senseId: 'chute.s1', errorType: 'meaning', type: '词义选择', prompt: '「chute」在本条的核心意思是：', options: ['降落伞', '完全相反的意思', '一种古代钱币'], answer: '降落伞', explain: 'chute：降落伞。' },
      { id: 'chute.q2', senseId: 'chute.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chute?', options: ['降落伞', 'a kind of ancient coin', 'the past tense of be'], answer: '降落伞', explain: '对的是「降落伞」。' },
      { id: 'chute.q3', senseId: 'chute.s1', errorType: 'grammar', type: '词义选择', prompt: 'chute 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chute.q4', senseId: 'chute.s1', errorType: 'meaning', type: '词源', prompt: '记 chute 时，哪句更稳妥？', options: ['先锁住「降落伞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「降落伞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['降落伞'] },
  });

  D('cigar', {
    etymology: {
      origin: '现代英语常用词「cigar」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cigar', gloss: '雪茄烟' },
      suffix: null,
      history: [
        { label: 'cigar', text: '现代英语常用词「cigar」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：雪茄烟。' },
      ],
      formationLogic: '核心义：雪茄烟。',
      mnemonic: '看到 cigar，先说出「雪茄烟」。',
      note: '核心义：雪茄烟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cigar.', chinese: '这一章反复回到同一个点：雪茄烟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cigar.s1', en: 'Without that cigar, the next paragraph is hard to follow.', zh: '没有这个雪茄烟，下一段会很难读。', structure: 'cigar / 表示 / 雪茄烟', grammar: 'noun，围绕「雪茄烟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cigar.', right: 'He gave me some advice about the cigar.', reason: 'advice 不可数。名词 cigar 的单复数按词典词形记。', rule: '先确定 cigar 是noun，再套「雪茄烟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cigar.q1', senseId: 'cigar.s1', errorType: 'meaning', type: '词义选择', prompt: '「cigar」在本条的核心意思是：', options: ['雪茄烟', '完全相反的意思', '一种古代钱币'], answer: '雪茄烟', explain: 'cigar：雪茄烟。' },
      { id: 'cigar.q2', senseId: 'cigar.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cigar?', options: ['雪茄烟', 'a kind of ancient coin', 'the past tense of be'], answer: '雪茄烟', explain: '对的是「雪茄烟」。' },
      { id: 'cigar.q3', senseId: 'cigar.s1', errorType: 'grammar', type: '词义选择', prompt: 'cigar 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cigar.q4', senseId: 'cigar.s1', errorType: 'meaning', type: '词源', prompt: '记 cigar 时，哪句更稳妥？', options: ['先锁住「雪茄烟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雪茄烟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雪茄烟'] },
  });

  D('cigaret', {
    etymology: {
      origin: '现代英语常用词「cigaret」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cigaret', gloss: '香烟' },
      suffix: null,
      history: [
        { label: 'cigaret', text: '现代英语常用词「cigaret」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：香烟。' },
      ],
      formationLogic: '核心义：香烟。',
      mnemonic: '看到 cigaret，先说出「香烟」。',
      note: '核心义：香烟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cigaret.', chinese: '这一章反复回到同一个点：香烟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cigaret.s1', en: 'Without that cigaret, the next paragraph is hard to follow.', zh: '没有这个香烟，下一段会很难读。', structure: 'cigaret / 表示 / 香烟', grammar: 'noun，围绕「香烟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cigaret.', right: 'He gave me some advice about the cigaret.', reason: 'advice 不可数。名词 cigaret 的单复数按词典词形记。', rule: '先确定 cigaret 是noun，再套「香烟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cigaret.q1', senseId: 'cigaret.s1', errorType: 'meaning', type: '词义选择', prompt: '「cigaret」在本条的核心意思是：', options: ['香烟', '完全相反的意思', '一种古代钱币'], answer: '香烟', explain: 'cigaret：香烟。' },
      { id: 'cigaret.q2', senseId: 'cigaret.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cigaret?', options: ['香烟', 'a kind of ancient coin', 'the past tense of be'], answer: '香烟', explain: '对的是「香烟」。' },
      { id: 'cigaret.q3', senseId: 'cigaret.s1', errorType: 'grammar', type: '词义选择', prompt: 'cigaret 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cigaret.q4', senseId: 'cigaret.s1', errorType: 'meaning', type: '词源', prompt: '记 cigaret 时，哪句更稳妥？', options: ['先锁住「香烟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「香烟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['香烟'] },
  });

  D('cigarettes', {
    etymology: {
      origin: '现代英语常用词「cigarettes」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cigarettes', gloss: '香烟（复数）' },
      suffix: null,
      history: [
        { label: 'cigarettes', text: '现代英语常用词「cigarettes」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：香烟（复数）。' },
      ],
      formationLogic: '核心义：香烟（复数）。',
      mnemonic: '看到 cigarettes，先说出「香烟（复数）」。',
      note: '核心义：香烟（复数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cigarettes.', chinese: '这一章反复回到同一个点：香烟（复数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cigarettes.s1', en: 'Without that cigarettes, the next paragraph is hard to follow.', zh: '没有这个香烟（复数），下一段会很难读。', structure: 'cigarettes / 表示 / 香烟（复数）', grammar: 'noun，围绕「香烟（复数）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cigarettes.', right: 'He gave me some advice about the cigarettes.', reason: 'advice 不可数。名词 cigarettes 的单复数按词典词形记。', rule: '先确定 cigarettes 是noun，再套「香烟（复数）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cigarettes.q1', senseId: 'cigarettes.s1', errorType: 'meaning', type: '词义选择', prompt: '「cigarettes」在本条的核心意思是：', options: ['香烟（复数）', '完全相反的意思', '一种古代钱币'], answer: '香烟（复数）', explain: 'cigarettes：香烟（复数）。' },
      { id: 'cigarettes.q2', senseId: 'cigarettes.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cigarettes?', options: ['香烟（复数）', 'a kind of ancient coin', 'the past tense of be'], answer: '香烟（复数）', explain: '对的是「香烟（复数）」。' },
      { id: 'cigarettes.q3', senseId: 'cigarettes.s1', errorType: 'grammar', type: '词义选择', prompt: 'cigarettes 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cigarettes.q4', senseId: 'cigarettes.s1', errorType: 'meaning', type: '词源', prompt: '记 cigarettes 时，哪句更稳妥？', options: ['先锁住「香烟（复数）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「香烟（复数）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['香烟（复数）'] },
  });

  D('cinema', {
    etymology: {
      origin: '希腊语 kinēma「运动」。',
      prefix: null,
      root: { text: 'cinema', gloss: '电影院' },
      suffix: null,
      history: [
        { label: 'cinema', text: '希腊语 kinēma「运动」。' },
        { label: '现在', text: '核心用法是：电影院。' },
      ],
      formationLogic: '考试认现在的用法：电影院。',
      mnemonic: '看到 cinema，先说出「电影院」。',
      note: '考试认现在的用法：电影院。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cinema.', chinese: '这一章反复回到同一个点：电影院。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cinema.s1', en: 'Without that cinema, the next paragraph is hard to follow.', zh: '没有这个电影院，下一段会很难读。', structure: 'cinema / 表示 / 电影院', grammar: 'noun，围绕「电影院」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cinema.', right: 'He gave me some advice about the cinema.', reason: 'advice 不可数。名词 cinema 的单复数按词典词形记。', rule: '先确定 cinema 是noun，再套「电影院」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cinema.q1', senseId: 'cinema.s1', errorType: 'meaning', type: '词义选择', prompt: '「cinema」在本条的核心意思是：', options: ['电影院', '完全相反的意思', '一种古代钱币'], answer: '电影院', explain: 'cinema：电影院。' },
      { id: 'cinema.q2', senseId: 'cinema.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cinema?', options: ['电影院', 'a kind of ancient coin', 'the past tense of be'], answer: '电影院', explain: '对的是「电影院」。' },
      { id: 'cinema.q3', senseId: 'cinema.s1', errorType: 'grammar', type: '词义选择', prompt: 'cinema 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cinema.q4', senseId: 'cinema.s1', errorType: 'meaning', type: '词源', prompt: '记 cinema 时，哪句更稳妥？', options: ['先锁住「电影院」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「电影院」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['电影院'] },
  });

  D('cipher', {
    etymology: {
      origin: '英语派生：ciph + -er，词性转到「密码」。',
      prefix: null,
      root: { text: 'ciph', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cipher', text: '英语派生：ciph + -er，词性转到「密码」。' },
        { label: '现在', text: '核心用法是：密码。' },
      ],
      formationLogic: '先认词干 ciph，再看词尾。',
      mnemonic: '看到 cipher，先说出「密码」。',
      note: '先认词干 ciph，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cipher.', chinese: '这一章反复回到同一个点：密码。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cipher.s1', en: 'Without that cipher, the next paragraph is hard to follow.', zh: '没有这个密码，下一段会很难读。', structure: 'cipher / 表示 / 密码', grammar: 'noun，围绕「密码」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cipher.', right: 'He gave me some advice about the cipher.', reason: 'advice 不可数。名词 cipher 的单复数按词典词形记。', rule: '先确定 cipher 是noun，再套「密码」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cipher.q1', senseId: 'cipher.s1', errorType: 'meaning', type: '词义选择', prompt: '「cipher」在本条的核心意思是：', options: ['密码', '完全相反的意思', '一种古代钱币'], answer: '密码', explain: 'cipher：密码。' },
      { id: 'cipher.q2', senseId: 'cipher.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cipher?', options: ['密码', 'a kind of ancient coin', 'the past tense of be'], answer: '密码', explain: '对的是「密码」。' },
      { id: 'cipher.q3', senseId: 'cipher.s1', errorType: 'grammar', type: '词义选择', prompt: 'cipher 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cipher.q4', senseId: 'cipher.s1', errorType: 'meaning', type: '词源', prompt: '记 cipher 时，哪句更稳妥？', options: ['先锁住「密码」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「密码」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['密码'] },
  });

  D('circle', {
    etymology: {
      origin: '拉丁语 circulus「小环」。',
      prefix: null,
      root: { text: 'circle', gloss: '圆' },
      suffix: null,
      history: [
        { label: 'circle', text: '拉丁语 circulus「小环」。' },
        { label: '现在', text: '核心用法是：圆。' },
      ],
      formationLogic: '考试认现在的用法：圆。',
      mnemonic: '看到 circle，先说出「圆」。',
      note: '考试认现在的用法：圆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one circle.', chinese: '这一章反复回到同一个点：圆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circle.s1', en: 'Without that circle, the next paragraph is hard to follow.', zh: '没有这个圆，下一段会很难读。', structure: 'circle / 表示 / 圆', grammar: 'noun，围绕「圆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the circle.', right: 'He gave me some advice about the circle.', reason: 'advice 不可数。名词 circle 的单复数按词典词形记。', rule: '先确定 circle 是noun，再套「圆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circle.q1', senseId: 'circle.s1', errorType: 'meaning', type: '词义选择', prompt: '「circle」在本条的核心意思是：', options: ['圆', '完全相反的意思', '一种古代钱币'], answer: '圆', explain: 'circle：圆。' },
      { id: 'circle.q2', senseId: 'circle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circle?', options: ['圆', 'a kind of ancient coin', 'the past tense of be'], answer: '圆', explain: '对的是「圆」。' },
      { id: 'circle.q3', senseId: 'circle.s1', errorType: 'grammar', type: '词义选择', prompt: 'circle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'circle.q4', senseId: 'circle.s1', errorType: 'meaning', type: '词源', prompt: '记 circle 时，哪句更稳妥？', options: ['先锁住「圆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「圆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['圆'] },
  });

  D('circuit', {
    etymology: {
      origin: '拉丁语 circuire「绕着走」。',
      prefix: null,
      root: { text: 'circuit', gloss: '电路' },
      suffix: null,
      history: [
        { label: 'circuit', text: '拉丁语 circuire「绕着走」。' },
        { label: '现在', text: '核心用法是：电路。' },
      ],
      formationLogic: '考试认现在的用法：电路。',
      mnemonic: '看到 circuit，先说出「电路」。',
      note: '考试认现在的用法：电路。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one circuit.', chinese: '这一章反复回到同一个点：电路。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circuit.s1', en: 'Without that circuit, the next paragraph is hard to follow.', zh: '没有这个电路，下一段会很难读。', structure: 'circuit / 表示 / 电路', grammar: 'noun，围绕「电路」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the circuit.', right: 'He gave me some advice about the circuit.', reason: 'advice 不可数。名词 circuit 的单复数按词典词形记。', rule: '先确定 circuit 是noun，再套「电路」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circuit.q1', senseId: 'circuit.s1', errorType: 'meaning', type: '词义选择', prompt: '「circuit」在本条的核心意思是：', options: ['电路', '完全相反的意思', '一种古代钱币'], answer: '电路', explain: 'circuit：电路。' },
      { id: 'circuit.q2', senseId: 'circuit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circuit?', options: ['电路', 'a kind of ancient coin', 'the past tense of be'], answer: '电路', explain: '对的是「电路」。' },
      { id: 'circuit.q3', senseId: 'circuit.s1', errorType: 'grammar', type: '词义选择', prompt: 'circuit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'circuit.q4', senseId: 'circuit.s1', errorType: 'meaning', type: '词源', prompt: '记 circuit 时，哪句更稳妥？', options: ['先锁住「电路」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「电路」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['电路'] },
  });

  D('circuit breaker', {
    etymology: {
      origin: '现代英语固定说法「circuit breaker」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'circuit breaker', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'circuit breaker', text: '现代英语固定说法「circuit breaker」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：断路器。' },
      ],
      formationLogic: '核心义：断路器。',
      mnemonic: '看到 circuit breaker，先说出「断路器」。',
      note: '核心义：断路器。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "circuit breaker" and asked the class to keep it as one unit.', chinese: '老师把「circuit breaker」圈出来，让全班把它当成一个整体。它表示断路器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circuit breaker.s1', en: 'In the margin she wrote "circuit breaker" so nobody would split the phrase.', zh: '她在页边写下「circuit breaker」，免得有人把这个说法拆开。意思是断路器。', structure: 'circuit breaker / 表示 / 断路器', grammar: 'noun，围绕「断路器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of circuit breaker and lost the point.', right: 'Keep "circuit breaker" together: it means 断路器.', reason: '「circuit breaker」要整块理解。', rule: '先确定 circuit breaker 是noun，再套「断路器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circuit breaker.q1', senseId: 'circuit breaker.s1', errorType: 'meaning', type: '词义选择', prompt: '「circuit breaker」在本条的核心意思是：', options: ['断路器', '完全相反的意思', '一种古代钱币'], answer: '断路器', explain: 'circuit breaker：断路器。' },
      { id: 'circuit breaker.q2', senseId: 'circuit breaker.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circuit breaker?', options: ['断路器', 'a kind of ancient coin', 'the past tense of be'], answer: '断路器', explain: '对的是「断路器」。' },
      { id: 'circuit breaker.q3', senseId: 'circuit breaker.s1', errorType: 'grammar', type: '词义选择', prompt: 'circuit breaker 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'circuit breaker.q4', senseId: 'circuit breaker.s1', errorType: 'meaning', type: '词源', prompt: '记 circuit breaker 时，哪句更稳妥？', options: ['先锁住「断路器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「断路器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['断路器'] },
  });

  D('circular', {
    etymology: {
      origin: '现代英语常用词「circular」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'circular', gloss: '圆形的' },
      suffix: null,
      history: [
        { label: 'circular', text: '现代英语常用词「circular」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：圆形的。' },
      ],
      formationLogic: '核心义：圆形的。',
      mnemonic: '看到 circular，先说出「圆形的」。',
      note: '核心义：圆形的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was circular.', chinese: '即使是初读者也能看出，这个结果是圆形的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circular.s1', en: 'They wanted a circular answer, not a long speech.', zh: '他们要一个圆形的的答复，不要长篇发言。', structure: 'circular / 表示 / 圆形的', grammar: 'adjective，围绕「圆形的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are circular.', right: 'The news is circular.', reason: 'news 作主语时动词用单数。', rule: '先确定 circular 是adjective，再套「圆形的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circular.q1', senseId: 'circular.s1', errorType: 'meaning', type: '词义选择', prompt: '「circular」在本条的核心意思是：', options: ['圆形的', '完全相反的意思', '一种古代钱币'], answer: '圆形的', explain: 'circular：圆形的。' },
      { id: 'circular.q2', senseId: 'circular.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circular?', options: ['圆形的', 'a kind of ancient coin', 'the past tense of be'], answer: '圆形的', explain: '对的是「圆形的」。' },
      { id: 'circular.q3', senseId: 'circular.s1', errorType: 'grammar', type: '词义选择', prompt: 'circular 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'circular.q4', senseId: 'circular.s1', errorType: 'meaning', type: '词源', prompt: '记 circular 时，哪句更稳妥？', options: ['先锁住「圆形的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「圆形的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['圆形的'] },
  });

  D('circulate', {
    etymology: {
      origin: '拉丁语 circulare「绕圈走」。',
      prefix: null,
      root: { text: 'circulate', gloss: '循环' },
      suffix: null,
      history: [
        { label: 'circulate', text: '拉丁语 circulare「绕圈走」。' },
        { label: '现在', text: '核心用法是：循环。' },
      ],
      formationLogic: '考试认现在的用法：循环。',
      mnemonic: '看到 circulate，先说出「循环」。',
      note: '考试认现在的用法：循环。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to circulate before the office closed.', chinese: '他们同意在办公室关门前做这件事：循环。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circulate.s1', en: 'The deadline forced the team to circulate that afternoon.', zh: '截止日期逼着小组在那天下午循环。', structure: 'circulate / 表示 / 循环', grammar: 'verb，围绕「循环」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She circulateed it yesterday without checking the real past form.', right: 'Check the past form of "circulate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 circulate 是verb，再套「循环」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circulate.q1', senseId: 'circulate.s1', errorType: 'meaning', type: '词义选择', prompt: '「circulate」在本条的核心意思是：', options: ['循环', '完全相反的意思', '一种古代钱币'], answer: '循环', explain: 'circulate：循环。' },
      { id: 'circulate.q2', senseId: 'circulate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circulate?', options: ['循环', 'a kind of ancient coin', 'the past tense of be'], answer: '循环', explain: '对的是「循环」。' },
      { id: 'circulate.q3', senseId: 'circulate.s1', errorType: 'grammar', type: '词义选择', prompt: 'circulate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'circulate.q4', senseId: 'circulate.s1', errorType: 'meaning', type: '词源', prompt: '记 circulate 时，哪句更稳妥？', options: ['先锁住「循环」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「循环」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['循环'] },
  });

  D('circulation', {
    etymology: {
      origin: '英语派生：circula + -tion，词性转到「血液循环」。',
      prefix: null,
      root: { text: 'circula', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'circulation', text: '英语派生：circula + -tion，词性转到「血液循环」。' },
        { label: '现在', text: '核心用法是：血液循环。' },
      ],
      formationLogic: '先认词干 circula，再看词尾。',
      mnemonic: '看到 circulation，先说出「血液循环」。',
      note: '先认词干 circula，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one circulation.', chinese: '这一章反复回到同一个点：血液循环。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circulation.s1', en: 'Without that circulation, the next paragraph is hard to follow.', zh: '没有这个血液循环，下一段会很难读。', structure: 'circulation / 表示 / 血液循环', grammar: 'noun，围绕「血液循环」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the circulation.', right: 'He gave me some advice about the circulation.', reason: 'advice 不可数。名词 circulation 的单复数按词典词形记。', rule: '先确定 circulation 是noun，再套「血液循环」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circulation.q1', senseId: 'circulation.s1', errorType: 'meaning', type: '词义选择', prompt: '「circulation」在本条的核心意思是：', options: ['血液循环', '完全相反的意思', '一种古代钱币'], answer: '血液循环', explain: 'circulation：血液循环。' },
      { id: 'circulation.q2', senseId: 'circulation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circulation?', options: ['血液循环', 'a kind of ancient coin', 'the past tense of be'], answer: '血液循环', explain: '对的是「血液循环」。' },
      { id: 'circulation.q3', senseId: 'circulation.s1', errorType: 'grammar', type: '词义选择', prompt: 'circulation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'circulation.q4', senseId: 'circulation.s1', errorType: 'meaning', type: '词源', prompt: '记 circulation 时，哪句更稳妥？', options: ['先锁住「血液循环」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「血液循环」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['血液循环'] },
  });

  D('circumstance', {
    etymology: {
      origin: '拉丁语 circumstare「站在周围」。周围的情况。',
      prefix: null,
      root: { text: 'circumstance', gloss: '情况' },
      suffix: null,
      history: [
        { label: 'circumstance', text: '拉丁语 circumstare「站在周围」。周围的情况。' },
        { label: '现在', text: '核心用法是：情况。' },
      ],
      formationLogic: '考试认现在的用法：情况。',
      mnemonic: '看到 circumstance，先说出「情况」。',
      note: '考试认现在的用法：情况。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one circumstance.', chinese: '这一章反复回到同一个点：情况。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circumstance.s1', en: 'Without that circumstance, the next paragraph is hard to follow.', zh: '没有这个情况，下一段会很难读。', structure: 'circumstance / 表示 / 情况', grammar: 'noun，围绕「情况」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the circumstance.', right: 'He gave me some advice about the circumstance.', reason: 'advice 不可数。名词 circumstance 的单复数按词典词形记。', rule: '先确定 circumstance 是noun，再套「情况」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circumstance.q1', senseId: 'circumstance.s1', errorType: 'meaning', type: '词义选择', prompt: '「circumstance」在本条的核心意思是：', options: ['情况', '完全相反的意思', '一种古代钱币'], answer: '情况', explain: 'circumstance：情况。' },
      { id: 'circumstance.q2', senseId: 'circumstance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circumstance?', options: ['情况', 'a kind of ancient coin', 'the past tense of be'], answer: '情况', explain: '对的是「情况」。' },
      { id: 'circumstance.q3', senseId: 'circumstance.s1', errorType: 'grammar', type: '词义选择', prompt: 'circumstance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'circumstance.q4', senseId: 'circumstance.s1', errorType: 'meaning', type: '词源', prompt: '记 circumstance 时，哪句更稳妥？', options: ['先锁住「情况」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「情况」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['情况'] },
  });

  D('circumstances', {
    etymology: {
      origin: '现代英语常用词「circumstances」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'circumstances', gloss: '情况' },
      suffix: null,
      history: [
        { label: 'circumstances', text: '现代英语常用词「circumstances」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：情况。' },
      ],
      formationLogic: '核心义：情况。',
      mnemonic: '看到 circumstances，先说出「情况」。',
      note: '核心义：情况。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one circumstances.', chinese: '这一章反复回到同一个点：情况。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circumstances.s1', en: 'Without that circumstances, the next paragraph is hard to follow.', zh: '没有这个情况，下一段会很难读。', structure: 'circumstances / 表示 / 情况', grammar: 'noun，围绕「情况」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the circumstances.', right: 'He gave me some advice about the circumstances.', reason: 'advice 不可数。名词 circumstances 的单复数按词典词形记。', rule: '先确定 circumstances 是noun，再套「情况」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circumstances.q1', senseId: 'circumstances.s1', errorType: 'meaning', type: '词义选择', prompt: '「circumstances」在本条的核心意思是：', options: ['情况', '完全相反的意思', '一种古代钱币'], answer: '情况', explain: 'circumstances：情况。' },
      { id: 'circumstances.q2', senseId: 'circumstances.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circumstances?', options: ['情况', 'a kind of ancient coin', 'the past tense of be'], answer: '情况', explain: '对的是「情况」。' },
      { id: 'circumstances.q3', senseId: 'circumstances.s1', errorType: 'grammar', type: '词义选择', prompt: 'circumstances 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'circumstances.q4', senseId: 'circumstances.s1', errorType: 'meaning', type: '词源', prompt: '记 circumstances 时，哪句更稳妥？', options: ['先锁住「情况」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「情况」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['情况'] },
  });

  D('circus', {
    etymology: {
      origin: '拉丁语 circus「圆场」。',
      prefix: null,
      root: { text: 'circus', gloss: '马戏团' },
      suffix: null,
      history: [
        { label: 'circus', text: '拉丁语 circus「圆场」。' },
        { label: '现在', text: '核心用法是：马戏团。' },
      ],
      formationLogic: '考试认现在的用法：马戏团。',
      mnemonic: '看到 circus，先说出「马戏团」。',
      note: '考试认现在的用法：马戏团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one circus.', chinese: '这一章反复回到同一个点：马戏团。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'circus.s1', en: 'Without that circus, the next paragraph is hard to follow.', zh: '没有这个马戏团，下一段会很难读。', structure: 'circus / 表示 / 马戏团', grammar: 'noun，围绕「马戏团」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the circus.', right: 'He gave me some advice about the circus.', reason: 'advice 不可数。名词 circus 的单复数按词典词形记。', rule: '先确定 circus 是noun，再套「马戏团」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'circus.q1', senseId: 'circus.s1', errorType: 'meaning', type: '词义选择', prompt: '「circus」在本条的核心意思是：', options: ['马戏团', '完全相反的意思', '一种古代钱币'], answer: '马戏团', explain: 'circus：马戏团。' },
      { id: 'circus.q2', senseId: 'circus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches circus?', options: ['马戏团', 'a kind of ancient coin', 'the past tense of be'], answer: '马戏团', explain: '对的是「马戏团」。' },
      { id: 'circus.q3', senseId: 'circus.s1', errorType: 'grammar', type: '词义选择', prompt: 'circus 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'circus.q4', senseId: 'circus.s1', errorType: 'meaning', type: '词源', prompt: '记 circus 时，哪句更稳妥？', options: ['先锁住「马戏团」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「马戏团」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['马戏团'] },
  });

  D('cistern', {
    etymology: {
      origin: '现代英语常用词「cistern」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cistern', gloss: '水箱' },
      suffix: null,
      history: [
        { label: 'cistern', text: '现代英语常用词「cistern」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：水箱。' },
      ],
      formationLogic: '核心义：水箱。',
      mnemonic: '看到 cistern，先说出「水箱」。',
      note: '核心义：水箱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cistern.', chinese: '这一章反复回到同一个点：水箱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cistern.s1', en: 'Without that cistern, the next paragraph is hard to follow.', zh: '没有这个水箱，下一段会很难读。', structure: 'cistern / 表示 / 水箱', grammar: 'noun，围绕「水箱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cistern.', right: 'He gave me some advice about the cistern.', reason: 'advice 不可数。名词 cistern 的单复数按词典词形记。', rule: '先确定 cistern 是noun，再套「水箱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cistern.q1', senseId: 'cistern.s1', errorType: 'meaning', type: '词义选择', prompt: '「cistern」在本条的核心意思是：', options: ['水箱', '完全相反的意思', '一种古代钱币'], answer: '水箱', explain: 'cistern：水箱。' },
      { id: 'cistern.q2', senseId: 'cistern.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cistern?', options: ['水箱', 'a kind of ancient coin', 'the past tense of be'], answer: '水箱', explain: '对的是「水箱」。' },
      { id: 'cistern.q3', senseId: 'cistern.s1', errorType: 'grammar', type: '词义选择', prompt: 'cistern 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cistern.q4', senseId: 'cistern.s1', errorType: 'meaning', type: '词源', prompt: '记 cistern 时，哪句更稳妥？', options: ['先锁住「水箱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「水箱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['水箱'] },
  });

  D('cite', {
    etymology: {
      origin: '现代英语常用词「cite」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cite', gloss: '引用' },
      suffix: null,
      history: [
        { label: 'cite', text: '现代英语常用词「cite」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：引用。' },
      ],
      formationLogic: '核心义：引用。',
      mnemonic: '看到 cite，先说出「引用」。',
      note: '核心义：引用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cite before the office closed.', chinese: '他们同意在办公室关门前做这件事：引用。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cite.s1', en: 'The deadline forced the team to cite that afternoon.', zh: '截止日期逼着小组在那天下午引用。', structure: 'cite / 表示 / 引用', grammar: 'verb，围绕「引用」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She citeed it yesterday without checking the real past form.', right: 'Check the past form of "cite" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cite 是verb，再套「引用」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cite.q1', senseId: 'cite.s1', errorType: 'meaning', type: '词义选择', prompt: '「cite」在本条的核心意思是：', options: ['引用', '完全相反的意思', '一种古代钱币'], answer: '引用', explain: 'cite：引用。' },
      { id: 'cite.q2', senseId: 'cite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cite?', options: ['引用', 'a kind of ancient coin', 'the past tense of be'], answer: '引用', explain: '对的是「引用」。' },
      { id: 'cite.q3', senseId: 'cite.s1', errorType: 'grammar', type: '词义选择', prompt: 'cite 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cite.q4', senseId: 'cite.s1', errorType: 'meaning', type: '词源', prompt: '记 cite 时，哪句更稳妥？', options: ['先锁住「引用」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「引用」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['引用'] },
  });

  D('citizen', {
    etymology: {
      origin: '古法语 citeain，与 city 同源。',
      prefix: null,
      root: { text: 'citizen', gloss: '公民' },
      suffix: null,
      history: [
        { label: 'citizen', text: '古法语 citeain，与 city 同源。' },
        { label: '现在', text: '核心用法是：公民。' },
      ],
      formationLogic: '考试认现在的用法：公民。',
      mnemonic: '看到 citizen，先说出「公民」。',
      note: '考试认现在的用法：公民。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one citizen.', chinese: '这一章反复回到同一个点：公民。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'citizen.s1', en: 'Without that citizen, the next paragraph is hard to follow.', zh: '没有这个公民，下一段会很难读。', structure: 'citizen / 表示 / 公民', grammar: 'noun，围绕「公民」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the citizen.', right: 'He gave me some advice about the citizen.', reason: 'advice 不可数。名词 citizen 的单复数按词典词形记。', rule: '先确定 citizen 是noun，再套「公民」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'citizen.q1', senseId: 'citizen.s1', errorType: 'meaning', type: '词义选择', prompt: '「citizen」在本条的核心意思是：', options: ['公民', '完全相反的意思', '一种古代钱币'], answer: '公民', explain: 'citizen：公民。' },
      { id: 'citizen.q2', senseId: 'citizen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches citizen?', options: ['公民', 'a kind of ancient coin', 'the past tense of be'], answer: '公民', explain: '对的是「公民」。' },
      { id: 'citizen.q3', senseId: 'citizen.s1', errorType: 'grammar', type: '词义选择', prompt: 'citizen 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'citizen.q4', senseId: 'citizen.s1', errorType: 'meaning', type: '词源', prompt: '记 citizen 时，哪句更稳妥？', options: ['先锁住「公民」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公民」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公民'] },
  });

  D('citizen of the world', {
    etymology: {
      origin: '现代英语固定说法「citizen of the world」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'citizen of the world', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'citizen of the world', text: '现代英语固定说法「citizen of the world」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：世界公民。' },
      ],
      formationLogic: '核心义：世界公民。',
      mnemonic: '看到 citizen of the world，先说出「世界公民」。',
      note: '核心义：世界公民。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "citizen of the world" and asked the class to keep it as one unit.', chinese: '老师把「citizen of the world」圈出来，让全班把它当成一个整体。它表示世界公民。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'citizen of the world.s1', en: 'In the margin she wrote "citizen of the world" so nobody would split the phrase.', zh: '她在页边写下「citizen of the world」，免得有人把这个说法拆开。意思是世界公民。', structure: 'citizen of the world / 表示 / 世界公民', grammar: 'noun，围绕「世界公民」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of citizen of the world and lost the point.', right: 'Keep "citizen of the world" together: it means 世界公民.', reason: '「citizen of the world」要整块理解。', rule: '先确定 citizen of the world 是noun，再套「世界公民」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'citizen of the world.q1', senseId: 'citizen of the world.s1', errorType: 'meaning', type: '词义选择', prompt: '「citizen of the world」在本条的核心意思是：', options: ['世界公民', '完全相反的意思', '一种古代钱币'], answer: '世界公民', explain: 'citizen of the world：世界公民。' },
      { id: 'citizen of the world.q2', senseId: 'citizen of the world.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches citizen of the world?', options: ['世界公民', 'a kind of ancient coin', 'the past tense of be'], answer: '世界公民', explain: '对的是「世界公民」。' },
      { id: 'citizen of the world.q3', senseId: 'citizen of the world.s1', errorType: 'grammar', type: '词义选择', prompt: 'citizen of the world 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'citizen of the world.q4', senseId: 'citizen of the world.s1', errorType: 'meaning', type: '词源', prompt: '记 citizen of the world 时，哪句更稳妥？', options: ['先锁住「世界公民」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「世界公民」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['世界公民'] },
  });

  D('citizens', {
    etymology: {
      origin: '现代英语常用词「citizens」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'citizens', gloss: '市民' },
      suffix: null,
      history: [
        { label: 'citizens', text: '现代英语常用词「citizens」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：市民。' },
      ],
      formationLogic: '核心义：市民。',
      mnemonic: '看到 citizens，先说出「市民」。',
      note: '核心义：市民。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one citizens.', chinese: '这一章反复回到同一个点：市民。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'citizens.s1', en: 'Without that citizens, the next paragraph is hard to follow.', zh: '没有这个市民，下一段会很难读。', structure: 'citizens / 表示 / 市民', grammar: 'noun，围绕「市民」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the citizens.', right: 'He gave me some advice about the citizens.', reason: 'advice 不可数。名词 citizens 的单复数按词典词形记。', rule: '先确定 citizens 是noun，再套「市民」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'citizens.q1', senseId: 'citizens.s1', errorType: 'meaning', type: '词义选择', prompt: '「citizens」在本条的核心意思是：', options: ['市民', '完全相反的意思', '一种古代钱币'], answer: '市民', explain: 'citizens：市民。' },
      { id: 'citizens.q2', senseId: 'citizens.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches citizens?', options: ['市民', 'a kind of ancient coin', 'the past tense of be'], answer: '市民', explain: '对的是「市民」。' },
      { id: 'citizens.q3', senseId: 'citizens.s1', errorType: 'grammar', type: '词义选择', prompt: 'citizens 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'citizens.q4', senseId: 'citizens.s1', errorType: 'meaning', type: '词源', prompt: '记 citizens 时，哪句更稳妥？', options: ['先锁住「市民」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「市民」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['市民'] },
  });

  D('citrus', {
    etymology: {
      origin: '现代英语常用词「citrus」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'citrus', gloss: '柑橘类（植物、果实）' },
      suffix: null,
      history: [
        { label: 'citrus', text: '现代英语常用词「citrus」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：柑橘类（植物、果实）。' },
      ],
      formationLogic: '核心义：柑橘类（植物、果实）。',
      mnemonic: '看到 citrus，先说出「柑橘类（植物、果实）」。',
      note: '核心义：柑橘类（植物、果实）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one citrus.', chinese: '这一章反复回到同一个点：柑橘类（植物、果实）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'citrus.s1', en: 'Without that citrus, the next paragraph is hard to follow.', zh: '没有这个柑橘类（植物、果实），下一段会很难读。', structure: 'citrus / 表示 / 柑橘类（植物、果实）', grammar: 'noun，围绕「柑橘类（植物、果实）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the citrus.', right: 'He gave me some advice about the citrus.', reason: 'advice 不可数。名词 citrus 的单复数按词典词形记。', rule: '先确定 citrus 是noun，再套「柑橘类（植物、果实）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'citrus.q1', senseId: 'citrus.s1', errorType: 'meaning', type: '词义选择', prompt: '「citrus」在本条的核心意思是：', options: ['柑橘类（植物、果实）', '完全相反的意思', '一种古代钱币'], answer: '柑橘类（植物、果实）', explain: 'citrus：柑橘类（植物、果实）。' },
      { id: 'citrus.q2', senseId: 'citrus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches citrus?', options: ['柑橘类（植物、果实）', 'a kind of ancient coin', 'the past tense of be'], answer: '柑橘类（植物、果实）', explain: '对的是「柑橘类（植物、果实）」。' },
      { id: 'citrus.q3', senseId: 'citrus.s1', errorType: 'grammar', type: '词义选择', prompt: 'citrus 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'citrus.q4', senseId: 'citrus.s1', errorType: 'meaning', type: '词源', prompt: '记 citrus 时，哪句更稳妥？', options: ['先锁住「柑橘类（植物、果实）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「柑橘类（植物、果实）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['柑橘类（植物、果实）'] },
  });

  D('city', {
    etymology: {
      origin: '拉丁语 civitas「市民共同体」。',
      prefix: null,
      root: { text: 'city', gloss: '城市' },
      suffix: null,
      history: [
        { label: 'city', text: '拉丁语 civitas「市民共同体」。' },
        { label: '现在', text: '核心用法是：城市。' },
      ],
      formationLogic: '考试认现在的用法：城市。',
      mnemonic: '看到 city，先说出「城市」。',
      note: '考试认现在的用法：城市。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one city.', chinese: '这一章反复回到同一个点：城市。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'city.s1', en: 'Without that city, the next paragraph is hard to follow.', zh: '没有这个城市，下一段会很难读。', structure: 'city / 表示 / 城市', grammar: 'noun，围绕「城市」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the city.', right: 'He gave me some advice about the city.', reason: 'advice 不可数。名词 city 的单复数按词典词形记。', rule: '先确定 city 是noun，再套「城市」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'city.q1', senseId: 'city.s1', errorType: 'meaning', type: '词义选择', prompt: '「city」在本条的核心意思是：', options: ['城市', '完全相反的意思', '一种古代钱币'], answer: '城市', explain: 'city：城市。' },
      { id: 'city.q2', senseId: 'city.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches city?', options: ['城市', 'a kind of ancient coin', 'the past tense of be'], answer: '城市', explain: '对的是「城市」。' },
      { id: 'city.q3', senseId: 'city.s1', errorType: 'grammar', type: '词义选择', prompt: 'city 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'city.q4', senseId: 'city.s1', errorType: 'meaning', type: '词源', prompt: '记 city 时，哪句更稳妥？', options: ['先锁住「城市」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「城市」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['城市'] },
  });

  D('city centre', {
    etymology: {
      origin: '现代英语固定说法「city centre」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'city centre', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'city centre', text: '现代英语固定说法「city centre」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：市中心（英式）。' },
      ],
      formationLogic: '核心义：市中心（英式）。',
      mnemonic: '看到 city centre，先说出「市中心（英式）」。',
      note: '核心义：市中心（英式）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "city centre" and asked the class to keep it as one unit.', chinese: '老师把「city centre」圈出来，让全班把它当成一个整体。它表示市中心（英式）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'city centre.s1', en: 'In the margin she wrote "city centre" so nobody would split the phrase.', zh: '她在页边写下「city centre」，免得有人把这个说法拆开。意思是市中心（英式）。', structure: 'city centre / 表示 / 市中心（英式）', grammar: 'noun，围绕「市中心（英式）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of city centre and lost the point.', right: 'Keep "city centre" together: it means 市中心（英式）.', reason: '「city centre」要整块理解。', rule: '先确定 city centre 是noun，再套「市中心（英式）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'city centre.q1', senseId: 'city centre.s1', errorType: 'meaning', type: '词义选择', prompt: '「city centre」在本条的核心意思是：', options: ['市中心（英式）', '完全相反的意思', '一种古代钱币'], answer: '市中心（英式）', explain: 'city centre：市中心（英式）。' },
      { id: 'city centre.q2', senseId: 'city centre.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches city centre?', options: ['市中心（英式）', 'a kind of ancient coin', 'the past tense of be'], answer: '市中心（英式）', explain: '对的是「市中心（英式）」。' },
      { id: 'city centre.q3', senseId: 'city centre.s1', errorType: 'grammar', type: '词义选择', prompt: 'city centre 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'city centre.q4', senseId: 'city centre.s1', errorType: 'meaning', type: '词源', prompt: '记 city centre 时，哪句更稳妥？', options: ['先锁住「市中心（英式）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「市中心（英式）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['市中心（英式）'] },
  });

  D('city dweller', {
    etymology: {
      origin: '现代英语固定说法「city dweller」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'city dweller', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'city dweller', text: '现代英语固定说法「city dweller」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：城市居民。' },
      ],
      formationLogic: '核心义：城市居民。',
      mnemonic: '看到 city dweller，先说出「城市居民」。',
      note: '核心义：城市居民。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "city dweller" and asked the class to keep it as one unit.', chinese: '老师把「city dweller」圈出来，让全班把它当成一个整体。它表示城市居民。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'city dweller.s1', en: 'In the margin she wrote "city dweller" so nobody would split the phrase.', zh: '她在页边写下「city dweller」，免得有人把这个说法拆开。意思是城市居民。', structure: 'city dweller / 表示 / 城市居民', grammar: 'noun，围绕「城市居民」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of city dweller and lost the point.', right: 'Keep "city dweller" together: it means 城市居民.', reason: '「city dweller」要整块理解。', rule: '先确定 city dweller 是noun，再套「城市居民」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'city dweller.q1', senseId: 'city dweller.s1', errorType: 'meaning', type: '词义选择', prompt: '「city dweller」在本条的核心意思是：', options: ['城市居民', '完全相反的意思', '一种古代钱币'], answer: '城市居民', explain: 'city dweller：城市居民。' },
      { id: 'city dweller.q2', senseId: 'city dweller.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches city dweller?', options: ['城市居民', 'a kind of ancient coin', 'the past tense of be'], answer: '城市居民', explain: '对的是「城市居民」。' },
      { id: 'city dweller.q3', senseId: 'city dweller.s1', errorType: 'grammar', type: '词义选择', prompt: 'city dweller 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'city dweller.q4', senseId: 'city dweller.s1', errorType: 'meaning', type: '词源', prompt: '记 city dweller 时，哪句更稳妥？', options: ['先锁住「城市居民」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「城市居民」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['城市居民'] },
  });

  D('civic', {
    etymology: {
      origin: '英语派生：civ + -ic，词性转到「市民的」。',
      prefix: null,
      root: { text: 'civ', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'civic', text: '英语派生：civ + -ic，词性转到「市民的」。' },
        { label: '现在', text: '核心用法是：市民的。' },
      ],
      formationLogic: '先认词干 civ，再看词尾。',
      mnemonic: '看到 civic，先说出「市民的」。',
      note: '先认词干 civ，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was civic.', chinese: '即使是初读者也能看出，这个结果是市民的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'civic.s1', en: 'They wanted a civic answer, not a long speech.', zh: '他们要一个市民的的答复，不要长篇发言。', structure: 'civic / 表示 / 市民的', grammar: 'adjective，围绕「市民的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are civic.', right: 'The news is civic.', reason: 'news 作主语时动词用单数。', rule: '先确定 civic 是adjective，再套「市民的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'civic.q1', senseId: 'civic.s1', errorType: 'meaning', type: '词义选择', prompt: '「civic」在本条的核心意思是：', options: ['市民的', '完全相反的意思', '一种古代钱币'], answer: '市民的', explain: 'civic：市民的。' },
      { id: 'civic.q2', senseId: 'civic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches civic?', options: ['市民的', 'a kind of ancient coin', 'the past tense of be'], answer: '市民的', explain: '对的是「市民的」。' },
      { id: 'civic.q3', senseId: 'civic.s1', errorType: 'grammar', type: '词义选择', prompt: 'civic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'civic.q4', senseId: 'civic.s1', errorType: 'meaning', type: '词源', prompt: '记 civic 时，哪句更稳妥？', options: ['先锁住「市民的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「市民的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['市民的'] },
  });

  D('civil', {
    etymology: {
      origin: '拉丁语 civilis，civis「市民」。',
      prefix: null,
      root: { text: 'civil', gloss: '公民的' },
      suffix: null,
      history: [
        { label: 'civil', text: '拉丁语 civilis，civis「市民」。' },
        { label: '现在', text: '核心用法是：公民的。' },
      ],
      formationLogic: '考试认现在的用法：公民的。',
      mnemonic: '看到 civil，先说出「公民的」。',
      note: '考试认现在的用法：公民的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was civil.', chinese: '即使是初读者也能看出，这个结果是公民的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'civil.s1', en: 'They wanted a civil answer, not a long speech.', zh: '他们要一个公民的的答复，不要长篇发言。', structure: 'civil / 表示 / 公民的', grammar: 'adjective，围绕「公民的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are civil.', right: 'The news is civil.', reason: 'news 作主语时动词用单数。', rule: '先确定 civil 是adjective，再套「公民的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'civil.q1', senseId: 'civil.s1', errorType: 'meaning', type: '词义选择', prompt: '「civil」在本条的核心意思是：', options: ['公民的', '完全相反的意思', '一种古代钱币'], answer: '公民的', explain: 'civil：公民的。' },
      { id: 'civil.q2', senseId: 'civil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches civil?', options: ['公民的', 'a kind of ancient coin', 'the past tense of be'], answer: '公民的', explain: '对的是「公民的」。' },
      { id: 'civil.q3', senseId: 'civil.s1', errorType: 'grammar', type: '词义选择', prompt: 'civil 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'civil.q4', senseId: 'civil.s1', errorType: 'meaning', type: '词源', prompt: '记 civil 时，哪句更稳妥？', options: ['先锁住「公民的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公民的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公民的'] },
  });

  D('civilian', {
    etymology: {
      origin: '现代英语常用词「civilian」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'civilian', gloss: '平民' },
      suffix: null,
      history: [
        { label: 'civilian', text: '现代英语常用词「civilian」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：平民。' },
      ],
      formationLogic: '核心义：平民。',
      mnemonic: '看到 civilian，先说出「平民」。',
      note: '核心义：平民。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one civilian.', chinese: '这一章反复回到同一个点：平民。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'civilian.s1', en: 'Without that civilian, the next paragraph is hard to follow.', zh: '没有这个平民，下一段会很难读。', structure: 'civilian / 表示 / 平民', grammar: 'noun，围绕「平民」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the civilian.', right: 'He gave me some advice about the civilian.', reason: 'advice 不可数。名词 civilian 的单复数按词典词形记。', rule: '先确定 civilian 是noun，再套「平民」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'civilian.q1', senseId: 'civilian.s1', errorType: 'meaning', type: '词义选择', prompt: '「civilian」在本条的核心意思是：', options: ['平民', '完全相反的意思', '一种古代钱币'], answer: '平民', explain: 'civilian：平民。' },
      { id: 'civilian.q2', senseId: 'civilian.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches civilian?', options: ['平民', 'a kind of ancient coin', 'the past tense of be'], answer: '平民', explain: '对的是「平民」。' },
      { id: 'civilian.q3', senseId: 'civilian.s1', errorType: 'grammar', type: '词义选择', prompt: 'civilian 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'civilian.q4', senseId: 'civilian.s1', errorType: 'meaning', type: '词源', prompt: '记 civilian 时，哪句更稳妥？', options: ['先锁住「平民」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「平民」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['平民'] },
  });

  D('civilisation', {
    etymology: {
      origin: '英语派生：civilisa + -tion，词性转到「文明」。',
      prefix: null,
      root: { text: 'civilisa', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'civilisation', text: '英语派生：civilisa + -tion，词性转到「文明」。' },
        { label: '现在', text: '核心用法是：文明。' },
      ],
      formationLogic: '先认词干 civilisa，再看词尾。',
      mnemonic: '看到 civilisation，先说出「文明」。',
      note: '先认词干 civilisa，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one civilisation.', chinese: '这一章反复回到同一个点：文明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'civilisation.s1', en: 'Without that civilisation, the next paragraph is hard to follow.', zh: '没有这个文明，下一段会很难读。', structure: 'civilisation / 表示 / 文明', grammar: 'noun，围绕「文明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the civilisation.', right: 'He gave me some advice about the civilisation.', reason: 'advice 不可数。名词 civilisation 的单复数按词典词形记。', rule: '先确定 civilisation 是noun，再套「文明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'civilisation.q1', senseId: 'civilisation.s1', errorType: 'meaning', type: '词义选择', prompt: '「civilisation」在本条的核心意思是：', options: ['文明', '完全相反的意思', '一种古代钱币'], answer: '文明', explain: 'civilisation：文明。' },
      { id: 'civilisation.q2', senseId: 'civilisation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches civilisation?', options: ['文明', 'a kind of ancient coin', 'the past tense of be'], answer: '文明', explain: '对的是「文明」。' },
      { id: 'civilisation.q3', senseId: 'civilisation.s1', errorType: 'grammar', type: '词义选择', prompt: 'civilisation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'civilisation.q4', senseId: 'civilisation.s1', errorType: 'meaning', type: '词源', prompt: '记 civilisation 时，哪句更稳妥？', options: ['先锁住「文明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「文明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['文明'] },
  });

  D('claim', {
    etymology: {
      origin: '拉丁语 clamare「呼喊」。大声主张。',
      prefix: null,
      root: { text: 'claim', gloss: '声称' },
      suffix: null,
      history: [
        { label: 'claim', text: '拉丁语 clamare「呼喊」。大声主张。' },
        { label: '现在', text: '核心用法是：声称。' },
      ],
      formationLogic: '考试认现在的用法：声称。',
      mnemonic: '看到 claim，先说出「声称」。',
      note: '考试认现在的用法：声称。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to claim before the office closed.', chinese: '他们同意在办公室关门前做这件事：声称。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'claim.s1', en: 'The deadline forced the team to claim that afternoon.', zh: '截止日期逼着小组在那天下午声称。', structure: 'claim / 表示 / 声称', grammar: 'verb，围绕「声称」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She claimed it yesterday without checking the real past form.', right: 'Check the past form of "claim" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 claim 是verb，再套「声称」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'claim.q1', senseId: 'claim.s1', errorType: 'meaning', type: '词义选择', prompt: '「claim」在本条的核心意思是：', options: ['声称', '完全相反的意思', '一种古代钱币'], answer: '声称', explain: 'claim：声称。' },
      { id: 'claim.q2', senseId: 'claim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches claim?', options: ['声称', 'a kind of ancient coin', 'the past tense of be'], answer: '声称', explain: '对的是「声称」。' },
      { id: 'claim.q3', senseId: 'claim.s1', errorType: 'grammar', type: '词义选择', prompt: 'claim 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'claim.q4', senseId: 'claim.s1', errorType: 'meaning', type: '词源', prompt: '记 claim 时，哪句更稳妥？', options: ['先锁住「声称」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「声称」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['声称'] },
  });

  D('claimant', {
    etymology: {
      origin: '现代英语常用词「claimant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'claimant', gloss: '索赔者' },
      suffix: null,
      history: [
        { label: 'claimant', text: '现代英语常用词「claimant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：索赔者。' },
      ],
      formationLogic: '核心义：索赔者。',
      mnemonic: '看到 claimant，先说出「索赔者」。',
      note: '核心义：索赔者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one claimant.', chinese: '这一章反复回到同一个点：索赔者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'claimant.s1', en: 'Without that claimant, the next paragraph is hard to follow.', zh: '没有这个索赔者，下一段会很难读。', structure: 'claimant / 表示 / 索赔者', grammar: 'noun，围绕「索赔者」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the claimant.', right: 'He gave me some advice about the claimant.', reason: 'advice 不可数。名词 claimant 的单复数按词典词形记。', rule: '先确定 claimant 是noun，再套「索赔者」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'claimant.q1', senseId: 'claimant.s1', errorType: 'meaning', type: '词义选择', prompt: '「claimant」在本条的核心意思是：', options: ['索赔者', '完全相反的意思', '一种古代钱币'], answer: '索赔者', explain: 'claimant：索赔者。' },
      { id: 'claimant.q2', senseId: 'claimant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches claimant?', options: ['索赔者', 'a kind of ancient coin', 'the past tense of be'], answer: '索赔者', explain: '对的是「索赔者」。' },
      { id: 'claimant.q3', senseId: 'claimant.s1', errorType: 'grammar', type: '词义选择', prompt: 'claimant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'claimant.q4', senseId: 'claimant.s1', errorType: 'meaning', type: '词源', prompt: '记 claimant 时，哪句更稳妥？', options: ['先锁住「索赔者」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「索赔者」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['索赔者'] },
  });

  D('clamber', {
    etymology: {
      origin: '英语派生：clamb + -er，词性转到「攀爬」。',
      prefix: null,
      root: { text: 'clamb', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clamber', text: '英语派生：clamb + -er，词性转到「攀爬」。' },
        { label: '现在', text: '核心用法是：攀爬。' },
      ],
      formationLogic: '先认词干 clamb，再看词尾。',
      mnemonic: '看到 clamber，先说出「攀爬」。',
      note: '先认词干 clamb，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clamber before the office closed.', chinese: '他们同意在办公室关门前做这件事：攀爬。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clamber.s1', en: 'The deadline forced the team to clamber that afternoon.', zh: '截止日期逼着小组在那天下午攀爬。', structure: 'clamber / 表示 / 攀爬', grammar: 'verb，围绕「攀爬」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clambered it yesterday without checking the real past form.', right: 'Check the past form of "clamber" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clamber 是verb，再套「攀爬」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clamber.q1', senseId: 'clamber.s1', errorType: 'meaning', type: '词义选择', prompt: '「clamber」在本条的核心意思是：', options: ['攀爬', '完全相反的意思', '一种古代钱币'], answer: '攀爬', explain: 'clamber：攀爬。' },
      { id: 'clamber.q2', senseId: 'clamber.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clamber?', options: ['攀爬', 'a kind of ancient coin', 'the past tense of be'], answer: '攀爬', explain: '对的是「攀爬」。' },
      { id: 'clamber.q3', senseId: 'clamber.s1', errorType: 'grammar', type: '词义选择', prompt: 'clamber 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clamber.q4', senseId: 'clamber.s1', errorType: 'meaning', type: '词源', prompt: '记 clamber 时，哪句更稳妥？', options: ['先锁住「攀爬」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「攀爬」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['攀爬'] },
  });

  D('clamp', {
    etymology: {
      origin: '现代英语常用词「clamp」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clamp', gloss: '夹紧' },
      suffix: null,
      history: [
        { label: 'clamp', text: '现代英语常用词「clamp」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：夹紧。' },
      ],
      formationLogic: '核心义：夹紧。',
      mnemonic: '看到 clamp，先说出「夹紧」。',
      note: '核心义：夹紧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clamp before the office closed.', chinese: '他们同意在办公室关门前做这件事：夹紧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clamp.s1', en: 'The deadline forced the team to clamp that afternoon.', zh: '截止日期逼着小组在那天下午夹紧。', structure: 'clamp / 表示 / 夹紧', grammar: 'verb，围绕「夹紧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clamped it yesterday without checking the real past form.', right: 'Check the past form of "clamp" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clamp 是verb，再套「夹紧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clamp.q1', senseId: 'clamp.s1', errorType: 'meaning', type: '词义选择', prompt: '「clamp」在本条的核心意思是：', options: ['夹紧', '完全相反的意思', '一种古代钱币'], answer: '夹紧', explain: 'clamp：夹紧。' },
      { id: 'clamp.q2', senseId: 'clamp.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clamp?', options: ['夹紧', 'a kind of ancient coin', 'the past tense of be'], answer: '夹紧', explain: '对的是「夹紧」。' },
      { id: 'clamp.q3', senseId: 'clamp.s1', errorType: 'grammar', type: '词义选择', prompt: 'clamp 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clamp.q4', senseId: 'clamp.s1', errorType: 'meaning', type: '词源', prompt: '记 clamp 时，哪句更稳妥？', options: ['先锁住「夹紧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「夹紧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['夹紧'] },
  });

  D('clan', {
    etymology: {
      origin: '现代英语常用词「clan」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clan', gloss: '家族' },
      suffix: null,
      history: [
        { label: 'clan', text: '现代英语常用词「clan」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：家族。' },
      ],
      formationLogic: '核心义：家族。',
      mnemonic: '看到 clan，先说出「家族」。',
      note: '核心义：家族。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clan.', chinese: '这一章反复回到同一个点：家族。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clan.s1', en: 'Without that clan, the next paragraph is hard to follow.', zh: '没有这个家族，下一段会很难读。', structure: 'clan / 表示 / 家族', grammar: 'noun，围绕「家族」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clan.', right: 'He gave me some advice about the clan.', reason: 'advice 不可数。名词 clan 的单复数按词典词形记。', rule: '先确定 clan 是noun，再套「家族」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clan.q1', senseId: 'clan.s1', errorType: 'meaning', type: '词义选择', prompt: '「clan」在本条的核心意思是：', options: ['家族', '完全相反的意思', '一种古代钱币'], answer: '家族', explain: 'clan：家族。' },
      { id: 'clan.q2', senseId: 'clan.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clan?', options: ['家族', 'a kind of ancient coin', 'the past tense of be'], answer: '家族', explain: '对的是「家族」。' },
      { id: 'clan.q3', senseId: 'clan.s1', errorType: 'grammar', type: '词义选择', prompt: 'clan 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clan.q4', senseId: 'clan.s1', errorType: 'meaning', type: '词源', prompt: '记 clan 时，哪句更稳妥？', options: ['先锁住「家族」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家族」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家族'] },
  });

  D('clandestine', {
    etymology: {
      origin: '现代英语常用词「clandestine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clandestine', gloss: '秘密的' },
      suffix: null,
      history: [
        { label: 'clandestine', text: '现代英语常用词「clandestine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：秘密的。' },
      ],
      formationLogic: '核心义：秘密的。',
      mnemonic: '看到 clandestine，先说出「秘密的」。',
      note: '核心义：秘密的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clandestine.', chinese: '即使是初读者也能看出，这个结果是秘密的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clandestine.s1', en: 'They wanted a clandestine answer, not a long speech.', zh: '他们要一个秘密的的答复，不要长篇发言。', structure: 'clandestine / 表示 / 秘密的', grammar: 'adjective，围绕「秘密的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clandestine.', right: 'The news is clandestine.', reason: 'news 作主语时动词用单数。', rule: '先确定 clandestine 是adjective，再套「秘密的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clandestine.q1', senseId: 'clandestine.s1', errorType: 'meaning', type: '词义选择', prompt: '「clandestine」在本条的核心意思是：', options: ['秘密的', '完全相反的意思', '一种古代钱币'], answer: '秘密的', explain: 'clandestine：秘密的。' },
      { id: 'clandestine.q2', senseId: 'clandestine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clandestine?', options: ['秘密的', 'a kind of ancient coin', 'the past tense of be'], answer: '秘密的', explain: '对的是「秘密的」。' },
      { id: 'clandestine.q3', senseId: 'clandestine.s1', errorType: 'grammar', type: '词义选择', prompt: 'clandestine 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clandestine.q4', senseId: 'clandestine.s1', errorType: 'meaning', type: '词源', prompt: '记 clandestine 时，哪句更稳妥？', options: ['先锁住「秘密的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「秘密的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['秘密的'] },
  });

  D('clap', {
    etymology: {
      origin: '拟声。拍手。',
      prefix: null,
      root: { text: 'clap', gloss: '拍手' },
      suffix: null,
      history: [
        { label: 'clap', text: '拟声。拍手。' },
        { label: '现在', text: '核心用法是：拍手。' },
      ],
      formationLogic: '考试认现在的用法：拍手。',
      mnemonic: '看到 clap，先说出「拍手」。',
      note: '考试认现在的用法：拍手。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clap before the office closed.', chinese: '他们同意在办公室关门前做这件事：拍手。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clap.s1', en: 'The deadline forced the team to clap that afternoon.', zh: '截止日期逼着小组在那天下午拍手。', structure: 'clap / 表示 / 拍手', grammar: 'verb，围绕「拍手」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She claped it yesterday without checking the real past form.', right: 'Check the past form of "clap" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clap 是verb，再套「拍手」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clap.q1', senseId: 'clap.s1', errorType: 'meaning', type: '词义选择', prompt: '「clap」在本条的核心意思是：', options: ['拍手', '完全相反的意思', '一种古代钱币'], answer: '拍手', explain: 'clap：拍手。' },
      { id: 'clap.q2', senseId: 'clap.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clap?', options: ['拍手', 'a kind of ancient coin', 'the past tense of be'], answer: '拍手', explain: '对的是「拍手」。' },
      { id: 'clap.q3', senseId: 'clap.s1', errorType: 'grammar', type: '词义选择', prompt: 'clap 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clap.q4', senseId: 'clap.s1', errorType: 'meaning', type: '词源', prompt: '记 clap 时，哪句更稳妥？', options: ['先锁住「拍手」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「拍手」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['拍手'] },
  });

  D('clarify', {
    etymology: {
      origin: '拉丁语 clarus「清楚」+ facere「做」。',
      prefix: null,
      root: { text: 'clarify', gloss: '澄清' },
      suffix: null,
      history: [
        { label: 'clarify', text: '拉丁语 clarus「清楚」+ facere「做」。' },
        { label: '现在', text: '核心用法是：澄清。' },
      ],
      formationLogic: '考试认现在的用法：澄清。',
      mnemonic: '看到 clarify，先说出「澄清」。',
      note: '考试认现在的用法：澄清。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clarify before the office closed.', chinese: '他们同意在办公室关门前做这件事：澄清。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clarify.s1', en: 'The deadline forced the team to clarify that afternoon.', zh: '截止日期逼着小组在那天下午澄清。', structure: 'clarify / 表示 / 澄清', grammar: 'verb，围绕「澄清」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clarifyed it yesterday without checking the real past form.', right: 'Check the past form of "clarify" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clarify 是verb，再套「澄清」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clarify.q1', senseId: 'clarify.s1', errorType: 'meaning', type: '词义选择', prompt: '「clarify」在本条的核心意思是：', options: ['澄清', '完全相反的意思', '一种古代钱币'], answer: '澄清', explain: 'clarify：澄清。' },
      { id: 'clarify.q2', senseId: 'clarify.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clarify?', options: ['澄清', 'a kind of ancient coin', 'the past tense of be'], answer: '澄清', explain: '对的是「澄清」。' },
      { id: 'clarify.q3', senseId: 'clarify.s1', errorType: 'grammar', type: '词义选择', prompt: 'clarify 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clarify.q4', senseId: 'clarify.s1', errorType: 'meaning', type: '词源', prompt: '记 clarify 时，哪句更稳妥？', options: ['先锁住「澄清」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「澄清」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['澄清'] },
  });

  D('clarity', {
    etymology: {
      origin: '英语派生：clar + -ity，词性转到「清晰」。',
      prefix: null,
      root: { text: 'clar', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clarity', text: '英语派生：clar + -ity，词性转到「清晰」。' },
        { label: '现在', text: '核心用法是：清晰。' },
      ],
      formationLogic: '先认词干 clar，再看词尾。',
      mnemonic: '看到 clarity，先说出「清晰」。',
      note: '先认词干 clar，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clarity.', chinese: '这一章反复回到同一个点：清晰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clarity.s1', en: 'Without that clarity, the next paragraph is hard to follow.', zh: '没有这个清晰，下一段会很难读。', structure: 'clarity / 表示 / 清晰', grammar: 'noun，围绕「清晰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clarity.', right: 'He gave me some advice about the clarity.', reason: 'advice 不可数。名词 clarity 的单复数按词典词形记。', rule: '先确定 clarity 是noun，再套「清晰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clarity.q1', senseId: 'clarity.s1', errorType: 'meaning', type: '词义选择', prompt: '「clarity」在本条的核心意思是：', options: ['清晰', '完全相反的意思', '一种古代钱币'], answer: '清晰', explain: 'clarity：清晰。' },
      { id: 'clarity.q2', senseId: 'clarity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clarity?', options: ['清晰', 'a kind of ancient coin', 'the past tense of be'], answer: '清晰', explain: '对的是「清晰」。' },
      { id: 'clarity.q3', senseId: 'clarity.s1', errorType: 'grammar', type: '词义选择', prompt: 'clarity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clarity.q4', senseId: 'clarity.s1', errorType: 'meaning', type: '词源', prompt: '记 clarity 时，哪句更稳妥？', options: ['先锁住「清晰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「清晰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['清晰'] },
  });

  D('clash', {
    etymology: {
      origin: '现代英语常用词「clash」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clash', gloss: '冲突' },
      suffix: null,
      history: [
        { label: 'clash', text: '现代英语常用词「clash」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：冲突。' },
      ],
      formationLogic: '核心义：冲突。',
      mnemonic: '看到 clash，先说出「冲突」。',
      note: '核心义：冲突。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clash before the office closed.', chinese: '他们同意在办公室关门前做这件事：冲突。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clash.s1', en: 'The deadline forced the team to clash that afternoon.', zh: '截止日期逼着小组在那天下午冲突。', structure: 'clash / 表示 / 冲突', grammar: 'verb，围绕「冲突」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clashed it yesterday without checking the real past form.', right: 'Check the past form of "clash" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clash 是verb，再套「冲突」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clash.q1', senseId: 'clash.s1', errorType: 'meaning', type: '词义选择', prompt: '「clash」在本条的核心意思是：', options: ['冲突', '完全相反的意思', '一种古代钱币'], answer: '冲突', explain: 'clash：冲突。' },
      { id: 'clash.q2', senseId: 'clash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clash?', options: ['冲突', 'a kind of ancient coin', 'the past tense of be'], answer: '冲突', explain: '对的是「冲突」。' },
      { id: 'clash.q3', senseId: 'clash.s1', errorType: 'grammar', type: '词义选择', prompt: 'clash 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clash.q4', senseId: 'clash.s1', errorType: 'meaning', type: '词源', prompt: '记 clash 时，哪句更稳妥？', options: ['先锁住「冲突」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冲突」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冲突'] },
  });

  D('clasp', {
    etymology: {
      origin: '现代英语常用词「clasp」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clasp', gloss: '紧握' },
      suffix: null,
      history: [
        { label: 'clasp', text: '现代英语常用词「clasp」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：紧握。' },
      ],
      formationLogic: '核心义：紧握。',
      mnemonic: '看到 clasp，先说出「紧握」。',
      note: '核心义：紧握。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clasp before the office closed.', chinese: '他们同意在办公室关门前做这件事：紧握。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clasp.s1', en: 'The deadline forced the team to clasp that afternoon.', zh: '截止日期逼着小组在那天下午紧握。', structure: 'clasp / 表示 / 紧握', grammar: 'verb，围绕「紧握」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clasped it yesterday without checking the real past form.', right: 'Check the past form of "clasp" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clasp 是verb，再套「紧握」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clasp.q1', senseId: 'clasp.s1', errorType: 'meaning', type: '词义选择', prompt: '「clasp」在本条的核心意思是：', options: ['紧握', '完全相反的意思', '一种古代钱币'], answer: '紧握', explain: 'clasp：紧握。' },
      { id: 'clasp.q2', senseId: 'clasp.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clasp?', options: ['紧握', 'a kind of ancient coin', 'the past tense of be'], answer: '紧握', explain: '对的是「紧握」。' },
      { id: 'clasp.q3', senseId: 'clasp.s1', errorType: 'grammar', type: '词义选择', prompt: 'clasp 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clasp.q4', senseId: 'clasp.s1', errorType: 'meaning', type: '词源', prompt: '记 clasp 时，哪句更稳妥？', options: ['先锁住「紧握」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「紧握」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['紧握'] },
  });

  D('class', {
    etymology: {
      origin: '拉丁语 classis「召集的一组人」。',
      prefix: null,
      root: { text: 'class', gloss: '班级' },
      suffix: null,
      history: [
        { label: 'class', text: '拉丁语 classis「召集的一组人」。' },
        { label: '现在', text: '核心用法是：班级。' },
      ],
      formationLogic: '考试认现在的用法：班级。',
      mnemonic: '看到 class，先说出「班级」。',
      note: '考试认现在的用法：班级。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one class.', chinese: '这一章反复回到同一个点：班级。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'class.s1', en: 'Without that class, the next paragraph is hard to follow.', zh: '没有这个班级，下一段会很难读。', structure: 'class / 表示 / 班级', grammar: 'noun，围绕「班级」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the class.', right: 'He gave me some advice about the class.', reason: 'advice 不可数。名词 class 的单复数按词典词形记。', rule: '先确定 class 是noun，再套「班级」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'class.q1', senseId: 'class.s1', errorType: 'meaning', type: '词义选择', prompt: '「class」在本条的核心意思是：', options: ['班级', '完全相反的意思', '一种古代钱币'], answer: '班级', explain: 'class：班级。' },
      { id: 'class.q2', senseId: 'class.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches class?', options: ['班级', 'a kind of ancient coin', 'the past tense of be'], answer: '班级', explain: '对的是「班级」。' },
      { id: 'class.q3', senseId: 'class.s1', errorType: 'grammar', type: '词义选择', prompt: 'class 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'class.q4', senseId: 'class.s1', errorType: 'meaning', type: '词源', prompt: '记 class 时，哪句更稳妥？', options: ['先锁住「班级」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「班级」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['班级'] },
  });

  D('classic', {
    etymology: {
      origin: '拉丁语 classicus「第一流的」。',
      prefix: null,
      root: { text: 'classic', gloss: '经典的' },
      suffix: null,
      history: [
        { label: 'classic', text: '拉丁语 classicus「第一流的」。' },
        { label: '现在', text: '核心用法是：经典的。' },
      ],
      formationLogic: '考试认现在的用法：经典的。',
      mnemonic: '看到 classic，先说出「经典的」。',
      note: '考试认现在的用法：经典的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was classic.', chinese: '即使是初读者也能看出，这个结果是经典的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'classic.s1', en: 'They wanted a classic answer, not a long speech.', zh: '他们要一个经典的的答复，不要长篇发言。', structure: 'classic / 表示 / 经典的', grammar: 'adjective，围绕「经典的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are classic.', right: 'The news is classic.', reason: 'news 作主语时动词用单数。', rule: '先确定 classic 是adjective，再套「经典的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'classic.q1', senseId: 'classic.s1', errorType: 'meaning', type: '词义选择', prompt: '「classic」在本条的核心意思是：', options: ['经典的', '完全相反的意思', '一种古代钱币'], answer: '经典的', explain: 'classic：经典的。' },
      { id: 'classic.q2', senseId: 'classic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches classic?', options: ['经典的', 'a kind of ancient coin', 'the past tense of be'], answer: '经典的', explain: '对的是「经典的」。' },
      { id: 'classic.q3', senseId: 'classic.s1', errorType: 'grammar', type: '词义选择', prompt: 'classic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'classic.q4', senseId: 'classic.s1', errorType: 'meaning', type: '词源', prompt: '记 classic 时，哪句更稳妥？', options: ['先锁住「经典的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「经典的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['经典的'] },
  });

  D('classify', {
    etymology: {
      origin: '现代英语常用词「classify」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'classify', gloss: '分类' },
      suffix: null,
      history: [
        { label: 'classify', text: '现代英语常用词「classify」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：分类。' },
      ],
      formationLogic: '核心义：分类。',
      mnemonic: '看到 classify，先说出「分类」。',
      note: '核心义：分类。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to classify before the office closed.', chinese: '他们同意在办公室关门前做这件事：分类。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'classify.s1', en: 'The deadline forced the team to classify that afternoon.', zh: '截止日期逼着小组在那天下午分类。', structure: 'classify / 表示 / 分类', grammar: 'verb，围绕「分类」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She classifyed it yesterday without checking the real past form.', right: 'Check the past form of "classify" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 classify 是verb，再套「分类」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'classify.q1', senseId: 'classify.s1', errorType: 'meaning', type: '词义选择', prompt: '「classify」在本条的核心意思是：', options: ['分类', '完全相反的意思', '一种古代钱币'], answer: '分类', explain: 'classify：分类。' },
      { id: 'classify.q2', senseId: 'classify.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches classify?', options: ['分类', 'a kind of ancient coin', 'the past tense of be'], answer: '分类', explain: '对的是「分类」。' },
      { id: 'classify.q3', senseId: 'classify.s1', errorType: 'grammar', type: '词义选择', prompt: 'classify 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'classify.q4', senseId: 'classify.s1', errorType: 'meaning', type: '词源', prompt: '记 classify 时，哪句更稳妥？', options: ['先锁住「分类」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分类」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分类'] },
  });

  D('classmate', {
    etymology: {
      origin: '现代英语常用词「classmate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'classmate', gloss: '同班同学' },
      suffix: null,
      history: [
        { label: 'classmate', text: '现代英语常用词「classmate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同班同学。' },
      ],
      formationLogic: '核心义：同班同学。',
      mnemonic: '看到 classmate，先说出「同班同学」。',
      note: '核心义：同班同学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one classmate.', chinese: '这一章反复回到同一个点：同班同学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'classmate.s1', en: 'Without that classmate, the next paragraph is hard to follow.', zh: '没有这个同班同学，下一段会很难读。', structure: 'classmate / 表示 / 同班同学', grammar: 'noun，围绕「同班同学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the classmate.', right: 'He gave me some advice about the classmate.', reason: 'advice 不可数。名词 classmate 的单复数按词典词形记。', rule: '先确定 classmate 是noun，再套「同班同学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'classmate.q1', senseId: 'classmate.s1', errorType: 'meaning', type: '词义选择', prompt: '「classmate」在本条的核心意思是：', options: ['同班同学', '完全相反的意思', '一种古代钱币'], answer: '同班同学', explain: 'classmate：同班同学。' },
      { id: 'classmate.q2', senseId: 'classmate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches classmate?', options: ['同班同学', 'a kind of ancient coin', 'the past tense of be'], answer: '同班同学', explain: '对的是「同班同学」。' },
      { id: 'classmate.q3', senseId: 'classmate.s1', errorType: 'grammar', type: '词义选择', prompt: 'classmate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'classmate.q4', senseId: 'classmate.s1', errorType: 'meaning', type: '词源', prompt: '记 classmate 时，哪句更稳妥？', options: ['先锁住「同班同学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同班同学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同班同学'] },
  });

  D('classroom', {
    etymology: {
      origin: '现代英语常用词「classroom」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'classroom', gloss: '教室' },
      suffix: null,
      history: [
        { label: 'classroom', text: '现代英语常用词「classroom」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：教室。' },
      ],
      formationLogic: '核心义：教室。',
      mnemonic: '看到 classroom，先说出「教室」。',
      note: '核心义：教室。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one classroom.', chinese: '这一章反复回到同一个点：教室。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'classroom.s1', en: 'Without that classroom, the next paragraph is hard to follow.', zh: '没有这个教室，下一段会很难读。', structure: 'classroom / 表示 / 教室', grammar: 'noun，围绕「教室」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the classroom.', right: 'He gave me some advice about the classroom.', reason: 'advice 不可数。名词 classroom 的单复数按词典词形记。', rule: '先确定 classroom 是noun，再套「教室」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'classroom.q1', senseId: 'classroom.s1', errorType: 'meaning', type: '词义选择', prompt: '「classroom」在本条的核心意思是：', options: ['教室', '完全相反的意思', '一种古代钱币'], answer: '教室', explain: 'classroom：教室。' },
      { id: 'classroom.q2', senseId: 'classroom.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches classroom?', options: ['教室', 'a kind of ancient coin', 'the past tense of be'], answer: '教室', explain: '对的是「教室」。' },
      { id: 'classroom.q3', senseId: 'classroom.s1', errorType: 'grammar', type: '词义选择', prompt: 'classroom 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'classroom.q4', senseId: 'classroom.s1', errorType: 'meaning', type: '词源', prompt: '记 classroom 时，哪句更稳妥？', options: ['先锁住「教室」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「教室」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['教室'] },
  });

  D('clatter', {
    etymology: {
      origin: '英语派生：clatt + -er，词性转到「哐当声」。',
      prefix: null,
      root: { text: 'clatt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clatter', text: '英语派生：clatt + -er，词性转到「哐当声」。' },
        { label: '现在', text: '核心用法是：哐当声。' },
      ],
      formationLogic: '先认词干 clatt，再看词尾。',
      mnemonic: '看到 clatter，先说出「哐当声」。',
      note: '先认词干 clatt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clatter.', chinese: '这一章反复回到同一个点：哐当声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clatter.s1', en: 'Without that clatter, the next paragraph is hard to follow.', zh: '没有这个哐当声，下一段会很难读。', structure: 'clatter / 表示 / 哐当声', grammar: 'noun，围绕「哐当声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clatter.', right: 'He gave me some advice about the clatter.', reason: 'advice 不可数。名词 clatter 的单复数按词典词形记。', rule: '先确定 clatter 是noun，再套「哐当声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clatter.q1', senseId: 'clatter.s1', errorType: 'meaning', type: '词义选择', prompt: '「clatter」在本条的核心意思是：', options: ['哐当声', '完全相反的意思', '一种古代钱币'], answer: '哐当声', explain: 'clatter：哐当声。' },
      { id: 'clatter.q2', senseId: 'clatter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clatter?', options: ['哐当声', 'a kind of ancient coin', 'the past tense of be'], answer: '哐当声', explain: '对的是「哐当声」。' },
      { id: 'clatter.q3', senseId: 'clatter.s1', errorType: 'grammar', type: '词义选择', prompt: 'clatter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clatter.q4', senseId: 'clatter.s1', errorType: 'meaning', type: '词源', prompt: '记 clatter 时，哪句更稳妥？', options: ['先锁住「哐当声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「哐当声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['哐当声'] },
  });

  D('clause', {
    etymology: {
      origin: '拉丁语 claudere「关闭」。把意思关在一个分句里。',
      prefix: null,
      root: { text: 'clause', gloss: '从句' },
      suffix: null,
      history: [
        { label: 'clause', text: '拉丁语 claudere「关闭」。把意思关在一个分句里。' },
        { label: '现在', text: '核心用法是：从句。' },
      ],
      formationLogic: '考试认现在的用法：从句。',
      mnemonic: '看到 clause，先说出「从句」。',
      note: '考试认现在的用法：从句。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clause.', chinese: '这一章反复回到同一个点：从句。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clause.s1', en: 'Without that clause, the next paragraph is hard to follow.', zh: '没有这个从句，下一段会很难读。', structure: 'clause / 表示 / 从句', grammar: 'noun，围绕「从句」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clause.', right: 'He gave me some advice about the clause.', reason: 'advice 不可数。名词 clause 的单复数按词典词形记。', rule: '先确定 clause 是noun，再套「从句」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clause.q1', senseId: 'clause.s1', errorType: 'meaning', type: '词义选择', prompt: '「clause」在本条的核心意思是：', options: ['从句', '完全相反的意思', '一种古代钱币'], answer: '从句', explain: 'clause：从句。' },
      { id: 'clause.q2', senseId: 'clause.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clause?', options: ['从句', 'a kind of ancient coin', 'the past tense of be'], answer: '从句', explain: '对的是「从句」。' },
      { id: 'clause.q3', senseId: 'clause.s1', errorType: 'grammar', type: '词义选择', prompt: 'clause 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clause.q4', senseId: 'clause.s1', errorType: 'meaning', type: '词源', prompt: '记 clause 时，哪句更稳妥？', options: ['先锁住「从句」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「从句」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['从句'] },
  });

  D('claw', {
    etymology: {
      origin: '现代英语常用词「claw」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'claw', gloss: '爪' },
      suffix: null,
      history: [
        { label: 'claw', text: '现代英语常用词「claw」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：爪。' },
      ],
      formationLogic: '核心义：爪。',
      mnemonic: '看到 claw，先说出「爪」。',
      note: '核心义：爪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one claw.', chinese: '这一章反复回到同一个点：爪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'claw.s1', en: 'Without that claw, the next paragraph is hard to follow.', zh: '没有这个爪，下一段会很难读。', structure: 'claw / 表示 / 爪', grammar: 'noun，围绕「爪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the claw.', right: 'He gave me some advice about the claw.', reason: 'advice 不可数。名词 claw 的单复数按词典词形记。', rule: '先确定 claw 是noun，再套「爪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'claw.q1', senseId: 'claw.s1', errorType: 'meaning', type: '词义选择', prompt: '「claw」在本条的核心意思是：', options: ['爪', '完全相反的意思', '一种古代钱币'], answer: '爪', explain: 'claw：爪。' },
      { id: 'claw.q2', senseId: 'claw.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches claw?', options: ['爪', 'a kind of ancient coin', 'the past tense of be'], answer: '爪', explain: '对的是「爪」。' },
      { id: 'claw.q3', senseId: 'claw.s1', errorType: 'grammar', type: '词义选择', prompt: 'claw 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'claw.q4', senseId: 'claw.s1', errorType: 'meaning', type: '词源', prompt: '记 claw 时，哪句更稳妥？', options: ['先锁住「爪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「爪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['爪'] },
  });

  D('clay', {
    etymology: {
      origin: '古英语 clæg。',
      prefix: null,
      root: { text: 'clay', gloss: '黏土' },
      suffix: null,
      history: [
        { label: 'clay', text: '古英语 clæg。' },
        { label: '现在', text: '核心用法是：黏土。' },
      ],
      formationLogic: '考试认现在的用法：黏土。',
      mnemonic: '看到 clay，先说出「黏土」。',
      note: '考试认现在的用法：黏土。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clay.', chinese: '这一章反复回到同一个点：黏土。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clay.s1', en: 'Without that clay, the next paragraph is hard to follow.', zh: '没有这个黏土，下一段会很难读。', structure: 'clay / 表示 / 黏土', grammar: 'noun，围绕「黏土」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clay.', right: 'He gave me some advice about the clay.', reason: 'advice 不可数。名词 clay 的单复数按词典词形记。', rule: '先确定 clay 是noun，再套「黏土」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clay.q1', senseId: 'clay.s1', errorType: 'meaning', type: '词义选择', prompt: '「clay」在本条的核心意思是：', options: ['黏土', '完全相反的意思', '一种古代钱币'], answer: '黏土', explain: 'clay：黏土。' },
      { id: 'clay.q2', senseId: 'clay.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clay?', options: ['黏土', 'a kind of ancient coin', 'the past tense of be'], answer: '黏土', explain: '对的是「黏土」。' },
      { id: 'clay.q3', senseId: 'clay.s1', errorType: 'grammar', type: '词义选择', prompt: 'clay 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clay.q4', senseId: 'clay.s1', errorType: 'meaning', type: '词源', prompt: '记 clay 时，哪句更稳妥？', options: ['先锁住「黏土」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黏土」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黏土'] },
  });

  D('clean', {
    etymology: {
      origin: '古英语 clæne。',
      prefix: null,
      root: { text: 'clean', gloss: '干净的' },
      suffix: null,
      history: [
        { label: 'clean', text: '古英语 clæne。' },
        { label: '现在', text: '核心用法是：干净的。' },
      ],
      formationLogic: '考试认现在的用法：干净的。',
      mnemonic: '看到 clean，先说出「干净的」。',
      note: '考试认现在的用法：干净的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clean.', chinese: '即使是初读者也能看出，这个结果是干净的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clean.s1', en: 'They wanted a clean answer, not a long speech.', zh: '他们要一个干净的的答复，不要长篇发言。', structure: 'clean / 表示 / 干净的', grammar: 'adjective，围绕「干净的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clean.', right: 'The news is clean.', reason: 'news 作主语时动词用单数。', rule: '先确定 clean 是adjective，再套「干净的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clean.q1', senseId: 'clean.s1', errorType: 'meaning', type: '词义选择', prompt: '「clean」在本条的核心意思是：', options: ['干净的', '完全相反的意思', '一种古代钱币'], answer: '干净的', explain: 'clean：干净的。' },
      { id: 'clean.q2', senseId: 'clean.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clean?', options: ['干净的', 'a kind of ancient coin', 'the past tense of be'], answer: '干净的', explain: '对的是「干净的」。' },
      { id: 'clean.q3', senseId: 'clean.s1', errorType: 'grammar', type: '词义选择', prompt: 'clean 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clean.q4', senseId: 'clean.s1', errorType: 'meaning', type: '词源', prompt: '记 clean 时，哪句更稳妥？', options: ['先锁住「干净的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「干净的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['干净的'] },
  });

  D('cleaner', {
    etymology: {
      origin: '英语派生：clean + -er，词性转到「清洁工」。',
      prefix: null,
      root: { text: 'clean', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cleaner', text: '英语派生：clean + -er，词性转到「清洁工」。' },
        { label: '现在', text: '核心用法是：清洁工。' },
      ],
      formationLogic: '先认词干 clean，再看词尾。',
      mnemonic: '看到 cleaner，先说出「清洁工」。',
      note: '先认词干 clean，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cleaner.', chinese: '这一章反复回到同一个点：清洁工。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cleaner.s1', en: 'Without that cleaner, the next paragraph is hard to follow.', zh: '没有这个清洁工，下一段会很难读。', structure: 'cleaner / 表示 / 清洁工', grammar: 'noun，围绕「清洁工」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cleaner.', right: 'He gave me some advice about the cleaner.', reason: 'advice 不可数。名词 cleaner 的单复数按词典词形记。', rule: '先确定 cleaner 是noun，再套「清洁工」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cleaner.q1', senseId: 'cleaner.s1', errorType: 'meaning', type: '词义选择', prompt: '「cleaner」在本条的核心意思是：', options: ['清洁工', '完全相反的意思', '一种古代钱币'], answer: '清洁工', explain: 'cleaner：清洁工。' },
      { id: 'cleaner.q2', senseId: 'cleaner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cleaner?', options: ['清洁工', 'a kind of ancient coin', 'the past tense of be'], answer: '清洁工', explain: '对的是「清洁工」。' },
      { id: 'cleaner.q3', senseId: 'cleaner.s1', errorType: 'grammar', type: '词义选择', prompt: 'cleaner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cleaner.q4', senseId: 'cleaner.s1', errorType: 'meaning', type: '词源', prompt: '记 cleaner 时，哪句更稳妥？', options: ['先锁住「清洁工」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「清洁工」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['清洁工'] },
  });

  D('cleaners', {
    etymology: {
      origin: '现代英语常用词「cleaners」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cleaners', gloss: '洗衣店' },
      suffix: null,
      history: [
        { label: 'cleaners', text: '现代英语常用词「cleaners」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：洗衣店。' },
      ],
      formationLogic: '核心义：洗衣店。',
      mnemonic: '看到 cleaners，先说出「洗衣店」。',
      note: '核心义：洗衣店。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cleaners.', chinese: '这一章反复回到同一个点：洗衣店。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cleaners.s1', en: 'Without that cleaners, the next paragraph is hard to follow.', zh: '没有这个洗衣店，下一段会很难读。', structure: 'cleaners / 表示 / 洗衣店', grammar: 'noun，围绕「洗衣店」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cleaners.', right: 'He gave me some advice about the cleaners.', reason: 'advice 不可数。名词 cleaners 的单复数按词典词形记。', rule: '先确定 cleaners 是noun，再套「洗衣店」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cleaners.q1', senseId: 'cleaners.s1', errorType: 'meaning', type: '词义选择', prompt: '「cleaners」在本条的核心意思是：', options: ['洗衣店', '完全相反的意思', '一种古代钱币'], answer: '洗衣店', explain: 'cleaners：洗衣店。' },
      { id: 'cleaners.q2', senseId: 'cleaners.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cleaners?', options: ['洗衣店', 'a kind of ancient coin', 'the past tense of be'], answer: '洗衣店', explain: '对的是「洗衣店」。' },
      { id: 'cleaners.q3', senseId: 'cleaners.s1', errorType: 'grammar', type: '词义选择', prompt: 'cleaners 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cleaners.q4', senseId: 'cleaners.s1', errorType: 'meaning', type: '词源', prompt: '记 cleaners 时，哪句更稳妥？', options: ['先锁住「洗衣店」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「洗衣店」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['洗衣店'] },
  });

  D('cleaning', {
    etymology: {
      origin: '英语派生：clean + -ing，词性转到「打扫」。',
      prefix: null,
      root: { text: 'clean', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cleaning', text: '英语派生：clean + -ing，词性转到「打扫」。' },
        { label: '现在', text: '核心用法是：打扫。' },
      ],
      formationLogic: '先认词干 clean，再看词尾。',
      mnemonic: '看到 cleaning，先说出「打扫」。',
      note: '先认词干 clean，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cleaning.', chinese: '这一章反复回到同一个点：打扫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cleaning.s1', en: 'Without that cleaning, the next paragraph is hard to follow.', zh: '没有这个打扫，下一段会很难读。', structure: 'cleaning / 表示 / 打扫', grammar: 'noun，围绕「打扫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cleaning.', right: 'He gave me some advice about the cleaning.', reason: 'advice 不可数。名词 cleaning 的单复数按词典词形记。', rule: '先确定 cleaning 是noun，再套「打扫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cleaning.q1', senseId: 'cleaning.s1', errorType: 'meaning', type: '词义选择', prompt: '「cleaning」在本条的核心意思是：', options: ['打扫', '完全相反的意思', '一种古代钱币'], answer: '打扫', explain: 'cleaning：打扫。' },
      { id: 'cleaning.q2', senseId: 'cleaning.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cleaning?', options: ['打扫', 'a kind of ancient coin', 'the past tense of be'], answer: '打扫', explain: '对的是「打扫」。' },
      { id: 'cleaning.q3', senseId: 'cleaning.s1', errorType: 'grammar', type: '词义选择', prompt: 'cleaning 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cleaning.q4', senseId: 'cleaning.s1', errorType: 'meaning', type: '词源', prompt: '记 cleaning 时，哪句更稳妥？', options: ['先锁住「打扫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「打扫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['打扫'] },
  });

  D('cleanliness', {
    etymology: {
      origin: '英语派生：cleanli + -ness，词性转到「卫生」。',
      prefix: null,
      root: { text: 'cleanli', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cleanliness', text: '英语派生：cleanli + -ness，词性转到「卫生」。' },
        { label: '现在', text: '核心用法是：卫生。' },
      ],
      formationLogic: '先认词干 cleanli，再看词尾。',
      mnemonic: '看到 cleanliness，先说出「卫生」。',
      note: '先认词干 cleanli，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cleanliness.', chinese: '这一章反复回到同一个点：卫生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cleanliness.s1', en: 'Without that cleanliness, the next paragraph is hard to follow.', zh: '没有这个卫生，下一段会很难读。', structure: 'cleanliness / 表示 / 卫生', grammar: 'noun，围绕「卫生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cleanliness.', right: 'He gave me some advice about the cleanliness.', reason: 'advice 不可数。名词 cleanliness 的单复数按词典词形记。', rule: '先确定 cleanliness 是noun，再套「卫生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cleanliness.q1', senseId: 'cleanliness.s1', errorType: 'meaning', type: '词义选择', prompt: '「cleanliness」在本条的核心意思是：', options: ['卫生', '完全相反的意思', '一种古代钱币'], answer: '卫生', explain: 'cleanliness：卫生。' },
      { id: 'cleanliness.q2', senseId: 'cleanliness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cleanliness?', options: ['卫生', 'a kind of ancient coin', 'the past tense of be'], answer: '卫生', explain: '对的是「卫生」。' },
      { id: 'cleanliness.q3', senseId: 'cleanliness.s1', errorType: 'grammar', type: '词义选择', prompt: 'cleanliness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cleanliness.q4', senseId: 'cleanliness.s1', errorType: 'meaning', type: '词源', prompt: '记 cleanliness 时，哪句更稳妥？', options: ['先锁住「卫生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「卫生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['卫生'] },
  });

  D('cleanse', {
    etymology: {
      origin: '现代英语常用词「cleanse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cleanse', gloss: '清洁' },
      suffix: null,
      history: [
        { label: 'cleanse', text: '现代英语常用词「cleanse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：清洁。' },
      ],
      formationLogic: '核心义：清洁。',
      mnemonic: '看到 cleanse，先说出「清洁」。',
      note: '核心义：清洁。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cleanse before the office closed.', chinese: '他们同意在办公室关门前做这件事：清洁。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cleanse.s1', en: 'The deadline forced the team to cleanse that afternoon.', zh: '截止日期逼着小组在那天下午清洁。', structure: 'cleanse / 表示 / 清洁', grammar: 'verb，围绕「清洁」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cleanseed it yesterday without checking the real past form.', right: 'Check the past form of "cleanse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cleanse 是verb，再套「清洁」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cleanse.q1', senseId: 'cleanse.s1', errorType: 'meaning', type: '词义选择', prompt: '「cleanse」在本条的核心意思是：', options: ['清洁', '完全相反的意思', '一种古代钱币'], answer: '清洁', explain: 'cleanse：清洁。' },
      { id: 'cleanse.q2', senseId: 'cleanse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cleanse?', options: ['清洁', 'a kind of ancient coin', 'the past tense of be'], answer: '清洁', explain: '对的是「清洁」。' },
      { id: 'cleanse.q3', senseId: 'cleanse.s1', errorType: 'grammar', type: '词义选择', prompt: 'cleanse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cleanse.q4', senseId: 'cleanse.s1', errorType: 'meaning', type: '词源', prompt: '记 cleanse 时，哪句更稳妥？', options: ['先锁住「清洁」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「清洁」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['清洁'] },
  });

  D('clear', {
    etymology: {
      origin: '拉丁语 clarus「明亮、清楚」。',
      prefix: null,
      root: { text: 'clear', gloss: '清楚的' },
      suffix: null,
      history: [
        { label: 'clear', text: '拉丁语 clarus「明亮、清楚」。' },
        { label: '现在', text: '核心用法是：清楚的。' },
      ],
      formationLogic: '考试认现在的用法：清楚的。',
      mnemonic: '看到 clear，先说出「清楚的」。',
      note: '考试认现在的用法：清楚的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clear.', chinese: '即使是初读者也能看出，这个结果是清楚的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clear.s1', en: 'They wanted a clear answer, not a long speech.', zh: '他们要一个清楚的的答复，不要长篇发言。', structure: 'clear / 表示 / 清楚的', grammar: 'adjective，围绕「清楚的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clear.', right: 'The news is clear.', reason: 'news 作主语时动词用单数。', rule: '先确定 clear 是adjective，再套「清楚的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clear.q1', senseId: 'clear.s1', errorType: 'meaning', type: '词义选择', prompt: '「clear」在本条的核心意思是：', options: ['清楚的', '完全相反的意思', '一种古代钱币'], answer: '清楚的', explain: 'clear：清楚的。' },
      { id: 'clear.q2', senseId: 'clear.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clear?', options: ['清楚的', 'a kind of ancient coin', 'the past tense of be'], answer: '清楚的', explain: '对的是「清楚的」。' },
      { id: 'clear.q3', senseId: 'clear.s1', errorType: 'grammar', type: '词义选择', prompt: 'clear 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clear.q4', senseId: 'clear.s1', errorType: 'meaning', type: '词源', prompt: '记 clear 时，哪句更稳妥？', options: ['先锁住「清楚的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「清楚的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['清楚的'] },
  });

  D('clear one\'s throat', {
    etymology: {
      origin: '现代英语固定说法「clear one\'s throat」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'clear one\'s throat', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'clear one\'s throat', text: '现代英语固定说法「clear one\'s throat」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：清嗓子。' },
      ],
      formationLogic: '核心义：清嗓子。',
      mnemonic: '看到 clear one\'s throat，先说出「清嗓子」。',
      note: '核心义：清嗓子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "clear one\'s throat" and asked the class to keep it as one unit.', chinese: '老师把「clear one\'s throat」圈出来，让全班把它当成一个整体。它表示清嗓子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clear one\'s throat.s1', en: 'In the margin she wrote "clear one\'s throat" so nobody would split the phrase.', zh: '她在页边写下「clear one\'s throat」，免得有人把这个说法拆开。意思是清嗓子。', structure: 'clear one\'s throat / 表示 / 清嗓子', grammar: 'verb，围绕「清嗓子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of clear one\'s throat and lost the point.', right: 'Keep "clear one\'s throat" together: it means 清嗓子.', reason: '「clear one\'s throat」要整块理解。', rule: '先确定 clear one\'s throat 是verb，再套「清嗓子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clear one\'s throat.q1', senseId: 'clear one\'s throat.s1', errorType: 'meaning', type: '词义选择', prompt: '「clear one\'s throat」在本条的核心意思是：', options: ['清嗓子', '完全相反的意思', '一种古代钱币'], answer: '清嗓子', explain: 'clear one\'s throat：清嗓子。' },
      { id: 'clear one\'s throat.q2', senseId: 'clear one\'s throat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clear one\'s throat?', options: ['清嗓子', 'a kind of ancient coin', 'the past tense of be'], answer: '清嗓子', explain: '对的是「清嗓子」。' },
      { id: 'clear one\'s throat.q3', senseId: 'clear one\'s throat.s1', errorType: 'grammar', type: '词义选择', prompt: 'clear one\'s throat 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clear one\'s throat.q4', senseId: 'clear one\'s throat.s1', errorType: 'meaning', type: '词源', prompt: '记 clear one\'s throat 时，哪句更稳妥？', options: ['先锁住「清嗓子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「清嗓子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['清嗓子'] },
  });

  D('clear-cut', {
    etymology: {
      origin: '现代英语常用词「clear-cut」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clear-cut', gloss: '明确的' },
      suffix: null,
      history: [
        { label: 'clear-cut', text: '现代英语常用词「clear-cut」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：明确的。' },
      ],
      formationLogic: '核心义：明确的。',
      mnemonic: '看到 clear-cut，先说出「明确的」。',
      note: '核心义：明确的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clear-cut.', chinese: '即使是初读者也能看出，这个结果是明确的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clear-cut.s1', en: 'They wanted a clear-cut answer, not a long speech.', zh: '他们要一个明确的的答复，不要长篇发言。', structure: 'clear-cut / 表示 / 明确的', grammar: 'adjective，围绕「明确的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clear-cut.', right: 'The news is clear-cut.', reason: 'news 作主语时动词用单数。', rule: '先确定 clear-cut 是adjective，再套「明确的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clear-cut.q1', senseId: 'clear-cut.s1', errorType: 'meaning', type: '词义选择', prompt: '「clear-cut」在本条的核心意思是：', options: ['明确的', '完全相反的意思', '一种古代钱币'], answer: '明确的', explain: 'clear-cut：明确的。' },
      { id: 'clear-cut.q2', senseId: 'clear-cut.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clear-cut?', options: ['明确的', 'a kind of ancient coin', 'the past tense of be'], answer: '明确的', explain: '对的是「明确的」。' },
      { id: 'clear-cut.q3', senseId: 'clear-cut.s1', errorType: 'grammar', type: '词义选择', prompt: 'clear-cut 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clear-cut.q4', senseId: 'clear-cut.s1', errorType: 'meaning', type: '词源', prompt: '记 clear-cut 时，哪句更稳妥？', options: ['先锁住「明确的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「明确的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['明确的'] },
  });

  D('clear-headed', {
    etymology: {
      origin: '现代英语常用词「clear-headed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clear-headed', gloss: '头脑清醒的' },
      suffix: null,
      history: [
        { label: 'clear-headed', text: '现代英语常用词「clear-headed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：头脑清醒的。' },
      ],
      formationLogic: '核心义：头脑清醒的。',
      mnemonic: '看到 clear-headed，先说出「头脑清醒的」。',
      note: '核心义：头脑清醒的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clear-headed.', chinese: '即使是初读者也能看出，这个结果是头脑清醒的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clear-headed.s1', en: 'They wanted a clear-headed answer, not a long speech.', zh: '他们要一个头脑清醒的的答复，不要长篇发言。', structure: 'clear-headed / 表示 / 头脑清醒的', grammar: 'adjective，围绕「头脑清醒的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clear-headed.', right: 'The news is clear-headed.', reason: 'news 作主语时动词用单数。', rule: '先确定 clear-headed 是adjective，再套「头脑清醒的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clear-headed.q1', senseId: 'clear-headed.s1', errorType: 'meaning', type: '词义选择', prompt: '「clear-headed」在本条的核心意思是：', options: ['头脑清醒的', '完全相反的意思', '一种古代钱币'], answer: '头脑清醒的', explain: 'clear-headed：头脑清醒的。' },
      { id: 'clear-headed.q2', senseId: 'clear-headed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clear-headed?', options: ['头脑清醒的', 'a kind of ancient coin', 'the past tense of be'], answer: '头脑清醒的', explain: '对的是「头脑清醒的」。' },
      { id: 'clear-headed.q3', senseId: 'clear-headed.s1', errorType: 'grammar', type: '词义选择', prompt: 'clear-headed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clear-headed.q4', senseId: 'clear-headed.s1', errorType: 'meaning', type: '词源', prompt: '记 clear-headed 时，哪句更稳妥？', options: ['先锁住「头脑清醒的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「头脑清醒的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['头脑清醒的'] },
  });

  D('clearance', {
    etymology: {
      origin: '英语派生：clear + -ance，词性转到「清除」。',
      prefix: null,
      root: { text: 'clear', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clearance', text: '英语派生：clear + -ance，词性转到「清除」。' },
        { label: '现在', text: '核心用法是：清除。' },
      ],
      formationLogic: '先认词干 clear，再看词尾。',
      mnemonic: '看到 clearance，先说出「清除」。',
      note: '先认词干 clear，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clearance.', chinese: '这一章反复回到同一个点：清除。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clearance.s1', en: 'Without that clearance, the next paragraph is hard to follow.', zh: '没有这个清除，下一段会很难读。', structure: 'clearance / 表示 / 清除', grammar: 'noun，围绕「清除」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clearance.', right: 'He gave me some advice about the clearance.', reason: 'advice 不可数。名词 clearance 的单复数按词典词形记。', rule: '先确定 clearance 是noun，再套「清除」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clearance.q1', senseId: 'clearance.s1', errorType: 'meaning', type: '词义选择', prompt: '「clearance」在本条的核心意思是：', options: ['清除', '完全相反的意思', '一种古代钱币'], answer: '清除', explain: 'clearance：清除。' },
      { id: 'clearance.q2', senseId: 'clearance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clearance?', options: ['清除', 'a kind of ancient coin', 'the past tense of be'], answer: '清除', explain: '对的是「清除」。' },
      { id: 'clearance.q3', senseId: 'clearance.s1', errorType: 'grammar', type: '词义选择', prompt: 'clearance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clearance.q4', senseId: 'clearance.s1', errorType: 'meaning', type: '词源', prompt: '记 clearance 时，哪句更稳妥？', options: ['先锁住「清除」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「清除」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['清除'] },
  });

  D('clearing', {
    etymology: {
      origin: '英语派生：clear + -ing，词性转到「林中空地」。',
      prefix: null,
      root: { text: 'clear', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clearing', text: '英语派生：clear + -ing，词性转到「林中空地」。' },
        { label: '现在', text: '核心用法是：林中空地。' },
      ],
      formationLogic: '先认词干 clear，再看词尾。',
      mnemonic: '看到 clearing，先说出「林中空地」。',
      note: '先认词干 clear，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clearing.', chinese: '这一章反复回到同一个点：林中空地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clearing.s1', en: 'Without that clearing, the next paragraph is hard to follow.', zh: '没有这个林中空地，下一段会很难读。', structure: 'clearing / 表示 / 林中空地', grammar: 'noun，围绕「林中空地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clearing.', right: 'He gave me some advice about the clearing.', reason: 'advice 不可数。名词 clearing 的单复数按词典词形记。', rule: '先确定 clearing 是noun，再套「林中空地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clearing.q1', senseId: 'clearing.s1', errorType: 'meaning', type: '词义选择', prompt: '「clearing」在本条的核心意思是：', options: ['林中空地', '完全相反的意思', '一种古代钱币'], answer: '林中空地', explain: 'clearing：林中空地。' },
      { id: 'clearing.q2', senseId: 'clearing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clearing?', options: ['林中空地', 'a kind of ancient coin', 'the past tense of be'], answer: '林中空地', explain: '对的是「林中空地」。' },
      { id: 'clearing.q3', senseId: 'clearing.s1', errorType: 'grammar', type: '词义选择', prompt: 'clearing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clearing.q4', senseId: 'clearing.s1', errorType: 'meaning', type: '词源', prompt: '记 clearing 时，哪句更稳妥？', options: ['先锁住「林中空地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「林中空地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['林中空地'] },
  });

  D('clearness', {
    etymology: {
      origin: '英语派生：clear + -ness，词性转到「清晰」。',
      prefix: null,
      root: { text: 'clear', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clearness', text: '英语派生：clear + -ness，词性转到「清晰」。' },
        { label: '现在', text: '核心用法是：清晰。' },
      ],
      formationLogic: '先认词干 clear，再看词尾。',
      mnemonic: '看到 clearness，先说出「清晰」。',
      note: '先认词干 clear，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clearness.', chinese: '这一章反复回到同一个点：清晰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clearness.s1', en: 'Without that clearness, the next paragraph is hard to follow.', zh: '没有这个清晰，下一段会很难读。', structure: 'clearness / 表示 / 清晰', grammar: 'noun，围绕「清晰」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clearness.', right: 'He gave me some advice about the clearness.', reason: 'advice 不可数。名词 clearness 的单复数按词典词形记。', rule: '先确定 clearness 是noun，再套「清晰」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clearness.q1', senseId: 'clearness.s1', errorType: 'meaning', type: '词义选择', prompt: '「clearness」在本条的核心意思是：', options: ['清晰', '完全相反的意思', '一种古代钱币'], answer: '清晰', explain: 'clearness：清晰。' },
      { id: 'clearness.q2', senseId: 'clearness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clearness?', options: ['清晰', 'a kind of ancient coin', 'the past tense of be'], answer: '清晰', explain: '对的是「清晰」。' },
      { id: 'clearness.q3', senseId: 'clearness.s1', errorType: 'grammar', type: '词义选择', prompt: 'clearness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clearness.q4', senseId: 'clearness.s1', errorType: 'meaning', type: '词源', prompt: '记 clearness 时，哪句更稳妥？', options: ['先锁住「清晰」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「清晰」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['清晰'] },
  });

  D('clemency', {
    etymology: {
      origin: '现代英语常用词「clemency」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clemency', gloss: '仁慈' },
      suffix: null,
      history: [
        { label: 'clemency', text: '现代英语常用词「clemency」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：仁慈。' },
      ],
      formationLogic: '核心义：仁慈。',
      mnemonic: '看到 clemency，先说出「仁慈」。',
      note: '核心义：仁慈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clemency.', chinese: '这一章反复回到同一个点：仁慈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clemency.s1', en: 'Without that clemency, the next paragraph is hard to follow.', zh: '没有这个仁慈，下一段会很难读。', structure: 'clemency / 表示 / 仁慈', grammar: 'noun，围绕「仁慈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clemency.', right: 'He gave me some advice about the clemency.', reason: 'advice 不可数。名词 clemency 的单复数按词典词形记。', rule: '先确定 clemency 是noun，再套「仁慈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clemency.q1', senseId: 'clemency.s1', errorType: 'meaning', type: '词义选择', prompt: '「clemency」在本条的核心意思是：', options: ['仁慈', '完全相反的意思', '一种古代钱币'], answer: '仁慈', explain: 'clemency：仁慈。' },
      { id: 'clemency.q2', senseId: 'clemency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clemency?', options: ['仁慈', 'a kind of ancient coin', 'the past tense of be'], answer: '仁慈', explain: '对的是「仁慈」。' },
      { id: 'clemency.q3', senseId: 'clemency.s1', errorType: 'grammar', type: '词义选择', prompt: 'clemency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clemency.q4', senseId: 'clemency.s1', errorType: 'meaning', type: '词源', prompt: '记 clemency 时，哪句更稳妥？', options: ['先锁住「仁慈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「仁慈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['仁慈'] },
  });

  D('clench', {
    etymology: {
      origin: '现代英语常用词「clench」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clench', gloss: '握紧' },
      suffix: null,
      history: [
        { label: 'clench', text: '现代英语常用词「clench」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：握紧。' },
      ],
      formationLogic: '核心义：握紧。',
      mnemonic: '看到 clench，先说出「握紧」。',
      note: '核心义：握紧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clench before the office closed.', chinese: '他们同意在办公室关门前做这件事：握紧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clench.s1', en: 'The deadline forced the team to clench that afternoon.', zh: '截止日期逼着小组在那天下午握紧。', structure: 'clench / 表示 / 握紧', grammar: 'verb，围绕「握紧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clenched it yesterday without checking the real past form.', right: 'Check the past form of "clench" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clench 是verb，再套「握紧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clench.q1', senseId: 'clench.s1', errorType: 'meaning', type: '词义选择', prompt: '「clench」在本条的核心意思是：', options: ['握紧', '完全相反的意思', '一种古代钱币'], answer: '握紧', explain: 'clench：握紧。' },
      { id: 'clench.q2', senseId: 'clench.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clench?', options: ['握紧', 'a kind of ancient coin', 'the past tense of be'], answer: '握紧', explain: '对的是「握紧」。' },
      { id: 'clench.q3', senseId: 'clench.s1', errorType: 'grammar', type: '词义选择', prompt: 'clench 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clench.q4', senseId: 'clench.s1', errorType: 'meaning', type: '词源', prompt: '记 clench 时，哪句更稳妥？', options: ['先锁住「握紧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「握紧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['握紧'] },
  });

  D('clergy', {
    etymology: {
      origin: '现代英语常用词「clergy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clergy', gloss: '神职人员' },
      suffix: null,
      history: [
        { label: 'clergy', text: '现代英语常用词「clergy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：神职人员。' },
      ],
      formationLogic: '核心义：神职人员。',
      mnemonic: '看到 clergy，先说出「神职人员」。',
      note: '核心义：神职人员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clergy.', chinese: '这一章反复回到同一个点：神职人员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clergy.s1', en: 'Without that clergy, the next paragraph is hard to follow.', zh: '没有这个神职人员，下一段会很难读。', structure: 'clergy / 表示 / 神职人员', grammar: 'noun，围绕「神职人员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clergy.', right: 'He gave me some advice about the clergy.', reason: 'advice 不可数。名词 clergy 的单复数按词典词形记。', rule: '先确定 clergy 是noun，再套「神职人员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clergy.q1', senseId: 'clergy.s1', errorType: 'meaning', type: '词义选择', prompt: '「clergy」在本条的核心意思是：', options: ['神职人员', '完全相反的意思', '一种古代钱币'], answer: '神职人员', explain: 'clergy：神职人员。' },
      { id: 'clergy.q2', senseId: 'clergy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clergy?', options: ['神职人员', 'a kind of ancient coin', 'the past tense of be'], answer: '神职人员', explain: '对的是「神职人员」。' },
      { id: 'clergy.q3', senseId: 'clergy.s1', errorType: 'grammar', type: '词义选择', prompt: 'clergy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clergy.q4', senseId: 'clergy.s1', errorType: 'meaning', type: '词源', prompt: '记 clergy 时，哪句更稳妥？', options: ['先锁住「神职人员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「神职人员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['神职人员'] },
  });

  D('clergyman', {
    etymology: {
      origin: '现代英语常用词「clergyman」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clergyman', gloss: '牧师' },
      suffix: null,
      history: [
        { label: 'clergyman', text: '现代英语常用词「clergyman」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：牧师。' },
      ],
      formationLogic: '核心义：牧师。',
      mnemonic: '看到 clergyman，先说出「牧师」。',
      note: '核心义：牧师。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clergyman.', chinese: '这一章反复回到同一个点：牧师。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clergyman.s1', en: 'Without that clergyman, the next paragraph is hard to follow.', zh: '没有这个牧师，下一段会很难读。', structure: 'clergyman / 表示 / 牧师', grammar: 'noun，围绕「牧师」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clergyman.', right: 'He gave me some advice about the clergyman.', reason: 'advice 不可数。名词 clergyman 的单复数按词典词形记。', rule: '先确定 clergyman 是noun，再套「牧师」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clergyman.q1', senseId: 'clergyman.s1', errorType: 'meaning', type: '词义选择', prompt: '「clergyman」在本条的核心意思是：', options: ['牧师', '完全相反的意思', '一种古代钱币'], answer: '牧师', explain: 'clergyman：牧师。' },
      { id: 'clergyman.q2', senseId: 'clergyman.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clergyman?', options: ['牧师', 'a kind of ancient coin', 'the past tense of be'], answer: '牧师', explain: '对的是「牧师」。' },
      { id: 'clergyman.q3', senseId: 'clergyman.s1', errorType: 'grammar', type: '词义选择', prompt: 'clergyman 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clergyman.q4', senseId: 'clergyman.s1', errorType: 'meaning', type: '词源', prompt: '记 clergyman 时，哪句更稳妥？', options: ['先锁住「牧师」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牧师」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牧师'] },
  });

  D('cleric', {
    etymology: {
      origin: '英语派生：cler + -ic，词性转到「神职人员」。',
      prefix: null,
      root: { text: 'cler', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cleric', text: '英语派生：cler + -ic，词性转到「神职人员」。' },
        { label: '现在', text: '核心用法是：神职人员。' },
      ],
      formationLogic: '先认词干 cler，再看词尾。',
      mnemonic: '看到 cleric，先说出「神职人员」。',
      note: '先认词干 cler，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cleric.', chinese: '这一章反复回到同一个点：神职人员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cleric.s1', en: 'Without that cleric, the next paragraph is hard to follow.', zh: '没有这个神职人员，下一段会很难读。', structure: 'cleric / 表示 / 神职人员', grammar: 'noun，围绕「神职人员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cleric.', right: 'He gave me some advice about the cleric.', reason: 'advice 不可数。名词 cleric 的单复数按词典词形记。', rule: '先确定 cleric 是noun，再套「神职人员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cleric.q1', senseId: 'cleric.s1', errorType: 'meaning', type: '词义选择', prompt: '「cleric」在本条的核心意思是：', options: ['神职人员', '完全相反的意思', '一种古代钱币'], answer: '神职人员', explain: 'cleric：神职人员。' },
      { id: 'cleric.q2', senseId: 'cleric.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cleric?', options: ['神职人员', 'a kind of ancient coin', 'the past tense of be'], answer: '神职人员', explain: '对的是「神职人员」。' },
      { id: 'cleric.q3', senseId: 'cleric.s1', errorType: 'grammar', type: '词义选择', prompt: 'cleric 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cleric.q4', senseId: 'cleric.s1', errorType: 'meaning', type: '词源', prompt: '记 cleric 时，哪句更稳妥？', options: ['先锁住「神职人员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「神职人员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['神职人员'] },
  });

  D('clerk', {
    etymology: {
      origin: '拉丁语 clericus「教士」。教士会书写，后指办事员。',
      prefix: null,
      root: { text: 'clerk', gloss: '职员' },
      suffix: null,
      history: [
        { label: 'clerk', text: '拉丁语 clericus「教士」。教士会书写，后指办事员。' },
        { label: '现在', text: '核心用法是：职员。' },
      ],
      formationLogic: '考试认现在的用法：职员。',
      mnemonic: '看到 clerk，先说出「职员」。',
      note: '考试认现在的用法：职员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clerk.', chinese: '这一章反复回到同一个点：职员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clerk.s1', en: 'Without that clerk, the next paragraph is hard to follow.', zh: '没有这个职员，下一段会很难读。', structure: 'clerk / 表示 / 职员', grammar: 'noun，围绕「职员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clerk.', right: 'He gave me some advice about the clerk.', reason: 'advice 不可数。名词 clerk 的单复数按词典词形记。', rule: '先确定 clerk 是noun，再套「职员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clerk.q1', senseId: 'clerk.s1', errorType: 'meaning', type: '词义选择', prompt: '「clerk」在本条的核心意思是：', options: ['职员', '完全相反的意思', '一种古代钱币'], answer: '职员', explain: 'clerk：职员。' },
      { id: 'clerk.q2', senseId: 'clerk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clerk?', options: ['职员', 'a kind of ancient coin', 'the past tense of be'], answer: '职员', explain: '对的是「职员」。' },
      { id: 'clerk.q3', senseId: 'clerk.s1', errorType: 'grammar', type: '词义选择', prompt: 'clerk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clerk.q4', senseId: 'clerk.s1', errorType: 'meaning', type: '词源', prompt: '记 clerk 时，哪句更稳妥？', options: ['先锁住「职员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「职员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['职员'] },
  });

  D('clever', {
    etymology: {
      origin: '中古英语。',
      prefix: null,
      root: { text: 'clever', gloss: '聪明的' },
      suffix: null,
      history: [
        { label: 'clever', text: '中古英语。' },
        { label: '现在', text: '核心用法是：聪明的。' },
      ],
      formationLogic: '考试认现在的用法：聪明的。',
      mnemonic: '看到 clever，先说出「聪明的」。',
      note: '考试认现在的用法：聪明的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clever.', chinese: '即使是初读者也能看出，这个结果是聪明的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clever.s1', en: 'They wanted a clever answer, not a long speech.', zh: '他们要一个聪明的的答复，不要长篇发言。', structure: 'clever / 表示 / 聪明的', grammar: 'adjective，围绕「聪明的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clever.', right: 'The news is clever.', reason: 'news 作主语时动词用单数。', rule: '先确定 clever 是adjective，再套「聪明的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clever.q1', senseId: 'clever.s1', errorType: 'meaning', type: '词义选择', prompt: '「clever」在本条的核心意思是：', options: ['聪明的', '完全相反的意思', '一种古代钱币'], answer: '聪明的', explain: 'clever：聪明的。' },
      { id: 'clever.q2', senseId: 'clever.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clever?', options: ['聪明的', 'a kind of ancient coin', 'the past tense of be'], answer: '聪明的', explain: '对的是「聪明的」。' },
      { id: 'clever.q3', senseId: 'clever.s1', errorType: 'grammar', type: '词义选择', prompt: 'clever 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clever.q4', senseId: 'clever.s1', errorType: 'meaning', type: '词源', prompt: '记 clever 时，哪句更稳妥？', options: ['先锁住「聪明的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聪明的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聪明的'] },
  });

  D('cleverness', {
    etymology: {
      origin: '英语派生：clever + -ness，词性转到「聪明」。',
      prefix: null,
      root: { text: 'clever', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cleverness', text: '英语派生：clever + -ness，词性转到「聪明」。' },
        { label: '现在', text: '核心用法是：聪明。' },
      ],
      formationLogic: '先认词干 clever，再看词尾。',
      mnemonic: '看到 cleverness，先说出「聪明」。',
      note: '先认词干 clever，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cleverness.', chinese: '这一章反复回到同一个点：聪明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cleverness.s1', en: 'Without that cleverness, the next paragraph is hard to follow.', zh: '没有这个聪明，下一段会很难读。', structure: 'cleverness / 表示 / 聪明', grammar: 'noun，围绕「聪明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cleverness.', right: 'He gave me some advice about the cleverness.', reason: 'advice 不可数。名词 cleverness 的单复数按词典词形记。', rule: '先确定 cleverness 是noun，再套「聪明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cleverness.q1', senseId: 'cleverness.s1', errorType: 'meaning', type: '词义选择', prompt: '「cleverness」在本条的核心意思是：', options: ['聪明', '完全相反的意思', '一种古代钱币'], answer: '聪明', explain: 'cleverness：聪明。' },
      { id: 'cleverness.q2', senseId: 'cleverness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cleverness?', options: ['聪明', 'a kind of ancient coin', 'the past tense of be'], answer: '聪明', explain: '对的是「聪明」。' },
      { id: 'cleverness.q3', senseId: 'cleverness.s1', errorType: 'grammar', type: '词义选择', prompt: 'cleverness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cleverness.q4', senseId: 'cleverness.s1', errorType: 'meaning', type: '词源', prompt: '记 cleverness 时，哪句更稳妥？', options: ['先锁住「聪明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聪明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聪明'] },
  });

  D('cliché', {
    etymology: {
      origin: '现代英语常用词「cliché」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cliché', gloss: '陈词滥调' },
      suffix: null,
      history: [
        { label: 'cliché', text: '现代英语常用词「cliché」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：陈词滥调。' },
      ],
      formationLogic: '核心义：陈词滥调。',
      mnemonic: '看到 cliché，先说出「陈词滥调」。',
      note: '核心义：陈词滥调。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cliché.', chinese: '这一章反复回到同一个点：陈词滥调。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cliché.s1', en: 'Without that cliché, the next paragraph is hard to follow.', zh: '没有这个陈词滥调，下一段会很难读。', structure: 'cliché / 表示 / 陈词滥调', grammar: 'noun，围绕「陈词滥调」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cliché.', right: 'He gave me some advice about the cliché.', reason: 'advice 不可数。名词 cliché 的单复数按词典词形记。', rule: '先确定 cliché 是noun，再套「陈词滥调」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cliché.q1', senseId: 'cliché.s1', errorType: 'meaning', type: '词义选择', prompt: '「cliché」在本条的核心意思是：', options: ['陈词滥调', '完全相反的意思', '一种古代钱币'], answer: '陈词滥调', explain: 'cliché：陈词滥调。' },
      { id: 'cliché.q2', senseId: 'cliché.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cliché?', options: ['陈词滥调', 'a kind of ancient coin', 'the past tense of be'], answer: '陈词滥调', explain: '对的是「陈词滥调」。' },
      { id: 'cliché.q3', senseId: 'cliché.s1', errorType: 'grammar', type: '词义选择', prompt: 'cliché 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cliché.q4', senseId: 'cliché.s1', errorType: 'meaning', type: '词源', prompt: '记 cliché 时，哪句更稳妥？', options: ['先锁住「陈词滥调」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「陈词滥调」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陈词滥调'] },
  });

  D('cliche', {
    etymology: {
      origin: '现代英语常用词「cliche」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cliche', gloss: '陈词滥调' },
      suffix: null,
      history: [
        { label: 'cliche', text: '现代英语常用词「cliche」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：陈词滥调。' },
      ],
      formationLogic: '核心义：陈词滥调。',
      mnemonic: '看到 cliche，先说出「陈词滥调」。',
      note: '核心义：陈词滥调。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cliche.', chinese: '这一章反复回到同一个点：陈词滥调。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cliche.s1', en: 'Without that cliche, the next paragraph is hard to follow.', zh: '没有这个陈词滥调，下一段会很难读。', structure: 'cliche / 表示 / 陈词滥调', grammar: 'noun，围绕「陈词滥调」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cliche.', right: 'He gave me some advice about the cliche.', reason: 'advice 不可数。名词 cliche 的单复数按词典词形记。', rule: '先确定 cliche 是noun，再套「陈词滥调」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cliche.q1', senseId: 'cliche.s1', errorType: 'meaning', type: '词义选择', prompt: '「cliche」在本条的核心意思是：', options: ['陈词滥调', '完全相反的意思', '一种古代钱币'], answer: '陈词滥调', explain: 'cliche：陈词滥调。' },
      { id: 'cliche.q2', senseId: 'cliche.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cliche?', options: ['陈词滥调', 'a kind of ancient coin', 'the past tense of be'], answer: '陈词滥调', explain: '对的是「陈词滥调」。' },
      { id: 'cliche.q3', senseId: 'cliche.s1', errorType: 'grammar', type: '词义选择', prompt: 'cliche 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cliche.q4', senseId: 'cliche.s1', errorType: 'meaning', type: '词源', prompt: '记 cliche 时，哪句更稳妥？', options: ['先锁住「陈词滥调」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「陈词滥调」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陈词滥调'] },
  });

  D('click', {
    etymology: {
      origin: '拟声。',
      prefix: null,
      root: { text: 'click', gloss: '点击' },
      suffix: null,
      history: [
        { label: 'click', text: '拟声。' },
        { label: '现在', text: '核心用法是：点击。' },
      ],
      formationLogic: '考试认现在的用法：点击。',
      mnemonic: '看到 click，先说出「点击」。',
      note: '考试认现在的用法：点击。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to click before the office closed.', chinese: '他们同意在办公室关门前做这件事：点击。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'click.s1', en: 'The deadline forced the team to click that afternoon.', zh: '截止日期逼着小组在那天下午点击。', structure: 'click / 表示 / 点击', grammar: 'verb，围绕「点击」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clicked it yesterday without checking the real past form.', right: 'Check the past form of "click" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 click 是verb，再套「点击」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'click.q1', senseId: 'click.s1', errorType: 'meaning', type: '词义选择', prompt: '「click」在本条的核心意思是：', options: ['点击', '完全相反的意思', '一种古代钱币'], answer: '点击', explain: 'click：点击。' },
      { id: 'click.q2', senseId: 'click.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches click?', options: ['点击', 'a kind of ancient coin', 'the past tense of be'], answer: '点击', explain: '对的是「点击」。' },
      { id: 'click.q3', senseId: 'click.s1', errorType: 'grammar', type: '词义选择', prompt: 'click 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'click.q4', senseId: 'click.s1', errorType: 'meaning', type: '词源', prompt: '记 click 时，哪句更稳妥？', options: ['先锁住「点击」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「点击」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['点击'] },
  });

  D('client', {
    etymology: {
      origin: '拉丁语 cliens「受保护的人」。',
      prefix: null,
      root: { text: 'client', gloss: '客户' },
      suffix: null,
      history: [
        { label: 'client', text: '拉丁语 cliens「受保护的人」。' },
        { label: '现在', text: '核心用法是：客户。' },
      ],
      formationLogic: '考试认现在的用法：客户。',
      mnemonic: '看到 client，先说出「客户」。',
      note: '考试认现在的用法：客户。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one client.', chinese: '这一章反复回到同一个点：客户。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'client.s1', en: 'Without that client, the next paragraph is hard to follow.', zh: '没有这个客户，下一段会很难读。', structure: 'client / 表示 / 客户', grammar: 'noun，围绕「客户」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the client.', right: 'He gave me some advice about the client.', reason: 'advice 不可数。名词 client 的单复数按词典词形记。', rule: '先确定 client 是noun，再套「客户」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'client.q1', senseId: 'client.s1', errorType: 'meaning', type: '词义选择', prompt: '「client」在本条的核心意思是：', options: ['客户', '完全相反的意思', '一种古代钱币'], answer: '客户', explain: 'client：客户。' },
      { id: 'client.q2', senseId: 'client.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches client?', options: ['客户', 'a kind of ancient coin', 'the past tense of be'], answer: '客户', explain: '对的是「客户」。' },
      { id: 'client.q3', senseId: 'client.s1', errorType: 'grammar', type: '词义选择', prompt: 'client 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'client.q4', senseId: 'client.s1', errorType: 'meaning', type: '词源', prompt: '记 client 时，哪句更稳妥？', options: ['先锁住「客户」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「客户」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['客户'] },
  });

  D('cliff', {
    etymology: {
      origin: '现代英语常用词「cliff」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cliff', gloss: '悬崖' },
      suffix: null,
      history: [
        { label: 'cliff', text: '现代英语常用词「cliff」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：悬崖。' },
      ],
      formationLogic: '核心义：悬崖。',
      mnemonic: '看到 cliff，先说出「悬崖」。',
      note: '核心义：悬崖。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cliff.', chinese: '这一章反复回到同一个点：悬崖。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cliff.s1', en: 'Without that cliff, the next paragraph is hard to follow.', zh: '没有这个悬崖，下一段会很难读。', structure: 'cliff / 表示 / 悬崖', grammar: 'noun，围绕「悬崖」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cliff.', right: 'He gave me some advice about the cliff.', reason: 'advice 不可数。名词 cliff 的单复数按词典词形记。', rule: '先确定 cliff 是noun，再套「悬崖」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cliff.q1', senseId: 'cliff.s1', errorType: 'meaning', type: '词义选择', prompt: '「cliff」在本条的核心意思是：', options: ['悬崖', '完全相反的意思', '一种古代钱币'], answer: '悬崖', explain: 'cliff：悬崖。' },
      { id: 'cliff.q2', senseId: 'cliff.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cliff?', options: ['悬崖', 'a kind of ancient coin', 'the past tense of be'], answer: '悬崖', explain: '对的是「悬崖」。' },
      { id: 'cliff.q3', senseId: 'cliff.s1', errorType: 'grammar', type: '词义选择', prompt: 'cliff 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cliff.q4', senseId: 'cliff.s1', errorType: 'meaning', type: '词源', prompt: '记 cliff 时，哪句更稳妥？', options: ['先锁住「悬崖」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「悬崖」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['悬崖'] },
  });

  D('climate', {
    etymology: {
      origin: '希腊语 klima「倾斜、地带」。',
      prefix: null,
      root: { text: 'climate', gloss: '气候' },
      suffix: null,
      history: [
        { label: 'climate', text: '希腊语 klima「倾斜、地带」。' },
        { label: '现在', text: '核心用法是：气候。' },
      ],
      formationLogic: '考试认现在的用法：气候。',
      mnemonic: '看到 climate，先说出「气候」。',
      note: '考试认现在的用法：气候。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one climate.', chinese: '这一章反复回到同一个点：气候。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'climate.s1', en: 'Without that climate, the next paragraph is hard to follow.', zh: '没有这个气候，下一段会很难读。', structure: 'climate / 表示 / 气候', grammar: 'noun，围绕「气候」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the climate.', right: 'He gave me some advice about the climate.', reason: 'advice 不可数。名词 climate 的单复数按词典词形记。', rule: '先确定 climate 是noun，再套「气候」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'climate.q1', senseId: 'climate.s1', errorType: 'meaning', type: '词义选择', prompt: '「climate」在本条的核心意思是：', options: ['气候', '完全相反的意思', '一种古代钱币'], answer: '气候', explain: 'climate：气候。' },
      { id: 'climate.q2', senseId: 'climate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches climate?', options: ['气候', 'a kind of ancient coin', 'the past tense of be'], answer: '气候', explain: '对的是「气候」。' },
      { id: 'climate.q3', senseId: 'climate.s1', errorType: 'grammar', type: '词义选择', prompt: 'climate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'climate.q4', senseId: 'climate.s1', errorType: 'meaning', type: '词源', prompt: '记 climate 时，哪句更稳妥？', options: ['先锁住「气候」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「气候」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['气候'] },
  });

  D('climax', {
    etymology: {
      origin: '现代英语常用词「climax」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'climax', gloss: '高潮' },
      suffix: null,
      history: [
        { label: 'climax', text: '现代英语常用词「climax」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：高潮。' },
      ],
      formationLogic: '核心义：高潮。',
      mnemonic: '看到 climax，先说出「高潮」。',
      note: '核心义：高潮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one climax.', chinese: '这一章反复回到同一个点：高潮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'climax.s1', en: 'Without that climax, the next paragraph is hard to follow.', zh: '没有这个高潮，下一段会很难读。', structure: 'climax / 表示 / 高潮', grammar: 'noun，围绕「高潮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the climax.', right: 'He gave me some advice about the climax.', reason: 'advice 不可数。名词 climax 的单复数按词典词形记。', rule: '先确定 climax 是noun，再套「高潮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'climax.q1', senseId: 'climax.s1', errorType: 'meaning', type: '词义选择', prompt: '「climax」在本条的核心意思是：', options: ['高潮', '完全相反的意思', '一种古代钱币'], answer: '高潮', explain: 'climax：高潮。' },
      { id: 'climax.q2', senseId: 'climax.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches climax?', options: ['高潮', 'a kind of ancient coin', 'the past tense of be'], answer: '高潮', explain: '对的是「高潮」。' },
      { id: 'climax.q3', senseId: 'climax.s1', errorType: 'grammar', type: '词义选择', prompt: 'climax 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'climax.q4', senseId: 'climax.s1', errorType: 'meaning', type: '词源', prompt: '记 climax 时，哪句更稳妥？', options: ['先锁住「高潮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「高潮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高潮'] },
  });

  D('climb', {
    etymology: {
      origin: '古英语 climban。',
      prefix: null,
      root: { text: 'climb', gloss: '攀登' },
      suffix: null,
      history: [
        { label: 'climb', text: '古英语 climban。' },
        { label: '现在', text: '核心用法是：攀登。' },
      ],
      formationLogic: '考试认现在的用法：攀登。',
      mnemonic: '看到 climb，先说出「攀登」。',
      note: '考试认现在的用法：攀登。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to climb before the office closed.', chinese: '他们同意在办公室关门前做这件事：攀登。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'climb.s1', en: 'The deadline forced the team to climb that afternoon.', zh: '截止日期逼着小组在那天下午攀登。', structure: 'climb / 表示 / 攀登', grammar: 'verb，围绕「攀登」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She climbed it yesterday without checking the real past form.', right: 'Check the past form of "climb" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 climb 是verb，再套「攀登」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'climb.q1', senseId: 'climb.s1', errorType: 'meaning', type: '词义选择', prompt: '「climb」在本条的核心意思是：', options: ['攀登', '完全相反的意思', '一种古代钱币'], answer: '攀登', explain: 'climb：攀登。' },
      { id: 'climb.q2', senseId: 'climb.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches climb?', options: ['攀登', 'a kind of ancient coin', 'the past tense of be'], answer: '攀登', explain: '对的是「攀登」。' },
      { id: 'climb.q3', senseId: 'climb.s1', errorType: 'grammar', type: '词义选择', prompt: 'climb 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'climb.q4', senseId: 'climb.s1', errorType: 'meaning', type: '词源', prompt: '记 climb 时，哪句更稳妥？', options: ['先锁住「攀登」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「攀登」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['攀登'] },
  });

  D('cling', {
    etymology: {
      origin: '现代英语常用词「cling」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cling', gloss: '紧握' },
      suffix: null,
      history: [
        { label: 'cling', text: '现代英语常用词「cling」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：紧握。' },
      ],
      formationLogic: '核心义：紧握。',
      mnemonic: '看到 cling，先说出「紧握」。',
      note: '核心义：紧握。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cling before the office closed.', chinese: '他们同意在办公室关门前做这件事：紧握。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cling.s1', en: 'The deadline forced the team to cling that afternoon.', zh: '截止日期逼着小组在那天下午紧握。', structure: 'cling / 表示 / 紧握', grammar: 'verb，围绕「紧握」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clinged it yesterday without checking the real past form.', right: 'Check the past form of "cling" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cling 是verb，再套「紧握」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cling.q1', senseId: 'cling.s1', errorType: 'meaning', type: '词义选择', prompt: '「cling」在本条的核心意思是：', options: ['紧握', '完全相反的意思', '一种古代钱币'], answer: '紧握', explain: 'cling：紧握。' },
      { id: 'cling.q2', senseId: 'cling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cling?', options: ['紧握', 'a kind of ancient coin', 'the past tense of be'], answer: '紧握', explain: '对的是「紧握」。' },
      { id: 'cling.q3', senseId: 'cling.s1', errorType: 'grammar', type: '词义选择', prompt: 'cling 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cling.q4', senseId: 'cling.s1', errorType: 'meaning', type: '词源', prompt: '记 cling 时，哪句更稳妥？', options: ['先锁住「紧握」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「紧握」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['紧握'] },
  });

  D('cling to', {
    etymology: {
      origin: '现代英语固定说法「cling to」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cling to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cling to', text: '现代英语固定说法「cling to」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：紧紧抓住。' },
      ],
      formationLogic: '核心义：紧紧抓住。',
      mnemonic: '看到 cling to，先说出「紧紧抓住」。',
      note: '核心义：紧紧抓住。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cling to" and asked the class to keep it as one unit.', chinese: '老师把「cling to」圈出来，让全班把它当成一个整体。它表示紧紧抓住。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cling to.s1', en: 'In the margin she wrote "cling to" so nobody would split the phrase.', zh: '她在页边写下「cling to」，免得有人把这个说法拆开。意思是紧紧抓住。', structure: 'cling to / 表示 / 紧紧抓住', grammar: 'verb，围绕「紧紧抓住」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cling to and lost the point.', right: 'Keep "cling to" together: it means 紧紧抓住.', reason: '「cling to」要整块理解。', rule: '先确定 cling to 是verb，再套「紧紧抓住」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cling to.q1', senseId: 'cling to.s1', errorType: 'meaning', type: '词义选择', prompt: '「cling to」在本条的核心意思是：', options: ['紧紧抓住', '完全相反的意思', '一种古代钱币'], answer: '紧紧抓住', explain: 'cling to：紧紧抓住。' },
      { id: 'cling to.q2', senseId: 'cling to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cling to?', options: ['紧紧抓住', 'a kind of ancient coin', 'the past tense of be'], answer: '紧紧抓住', explain: '对的是「紧紧抓住」。' },
      { id: 'cling to.q3', senseId: 'cling to.s1', errorType: 'grammar', type: '词义选择', prompt: 'cling to 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cling to.q4', senseId: 'cling to.s1', errorType: 'meaning', type: '词源', prompt: '记 cling to 时，哪句更稳妥？', options: ['先锁住「紧紧抓住」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「紧紧抓住」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['紧紧抓住'] },
  });

  D('clinic', {
    etymology: {
      origin: '希腊语 klinikē「床边的医术」。',
      prefix: null,
      root: { text: 'clinic', gloss: '诊所' },
      suffix: null,
      history: [
        { label: 'clinic', text: '希腊语 klinikē「床边的医术」。' },
        { label: '现在', text: '核心用法是：诊所。' },
      ],
      formationLogic: '考试认现在的用法：诊所。',
      mnemonic: '看到 clinic，先说出「诊所」。',
      note: '考试认现在的用法：诊所。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clinic.', chinese: '这一章反复回到同一个点：诊所。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clinic.s1', en: 'Without that clinic, the next paragraph is hard to follow.', zh: '没有这个诊所，下一段会很难读。', structure: 'clinic / 表示 / 诊所', grammar: 'noun，围绕「诊所」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clinic.', right: 'He gave me some advice about the clinic.', reason: 'advice 不可数。名词 clinic 的单复数按词典词形记。', rule: '先确定 clinic 是noun，再套「诊所」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clinic.q1', senseId: 'clinic.s1', errorType: 'meaning', type: '词义选择', prompt: '「clinic」在本条的核心意思是：', options: ['诊所', '完全相反的意思', '一种古代钱币'], answer: '诊所', explain: 'clinic：诊所。' },
      { id: 'clinic.q2', senseId: 'clinic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clinic?', options: ['诊所', 'a kind of ancient coin', 'the past tense of be'], answer: '诊所', explain: '对的是「诊所」。' },
      { id: 'clinic.q3', senseId: 'clinic.s1', errorType: 'grammar', type: '词义选择', prompt: 'clinic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clinic.q4', senseId: 'clinic.s1', errorType: 'meaning', type: '词源', prompt: '记 clinic 时，哪句更稳妥？', options: ['先锁住「诊所」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「诊所」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['诊所'] },
  });

  D('clinical', {
    etymology: {
      origin: '英语派生：clinic + -al，词性转到「临床的」。',
      prefix: null,
      root: { text: 'clinic', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clinical', text: '英语派生：clinic + -al，词性转到「临床的」。' },
        { label: '现在', text: '核心用法是：临床的。' },
      ],
      formationLogic: '先认词干 clinic，再看词尾。',
      mnemonic: '看到 clinical，先说出「临床的」。',
      note: '先认词干 clinic，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clinical.', chinese: '即使是初读者也能看出，这个结果是临床的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clinical.s1', en: 'They wanted a clinical answer, not a long speech.', zh: '他们要一个临床的的答复，不要长篇发言。', structure: 'clinical / 表示 / 临床的', grammar: 'adjective，围绕「临床的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clinical.', right: 'The news is clinical.', reason: 'news 作主语时动词用单数。', rule: '先确定 clinical 是adjective，再套「临床的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clinical.q1', senseId: 'clinical.s1', errorType: 'meaning', type: '词义选择', prompt: '「clinical」在本条的核心意思是：', options: ['临床的', '完全相反的意思', '一种古代钱币'], answer: '临床的', explain: 'clinical：临床的。' },
      { id: 'clinical.q2', senseId: 'clinical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clinical?', options: ['临床的', 'a kind of ancient coin', 'the past tense of be'], answer: '临床的', explain: '对的是「临床的」。' },
      { id: 'clinical.q3', senseId: 'clinical.s1', errorType: 'grammar', type: '词义选择', prompt: 'clinical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clinical.q4', senseId: 'clinical.s1', errorType: 'meaning', type: '词源', prompt: '记 clinical 时，哪句更稳妥？', options: ['先锁住「临床的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「临床的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['临床的'] },
  });

  D('clinician', {
    etymology: {
      origin: '现代英语常用词「clinician」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clinician', gloss: '临床医生' },
      suffix: null,
      history: [
        { label: 'clinician', text: '现代英语常用词「clinician」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：临床医生。' },
      ],
      formationLogic: '核心义：临床医生。',
      mnemonic: '看到 clinician，先说出「临床医生」。',
      note: '核心义：临床医生。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clinician.', chinese: '这一章反复回到同一个点：临床医生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clinician.s1', en: 'Without that clinician, the next paragraph is hard to follow.', zh: '没有这个临床医生，下一段会很难读。', structure: 'clinician / 表示 / 临床医生', grammar: 'noun，围绕「临床医生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clinician.', right: 'He gave me some advice about the clinician.', reason: 'advice 不可数。名词 clinician 的单复数按词典词形记。', rule: '先确定 clinician 是noun，再套「临床医生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clinician.q1', senseId: 'clinician.s1', errorType: 'meaning', type: '词义选择', prompt: '「clinician」在本条的核心意思是：', options: ['临床医生', '完全相反的意思', '一种古代钱币'], answer: '临床医生', explain: 'clinician：临床医生。' },
      { id: 'clinician.q2', senseId: 'clinician.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clinician?', options: ['临床医生', 'a kind of ancient coin', 'the past tense of be'], answer: '临床医生', explain: '对的是「临床医生」。' },
      { id: 'clinician.q3', senseId: 'clinician.s1', errorType: 'grammar', type: '词义选择', prompt: 'clinician 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clinician.q4', senseId: 'clinician.s1', errorType: 'meaning', type: '词源', prompt: '记 clinician 时，哪句更稳妥？', options: ['先锁住「临床医生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「临床医生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['临床医生'] },
  });

  D('clink', {
    etymology: {
      origin: '现代英语常用词「clink」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clink', gloss: '叮当声' },
      suffix: null,
      history: [
        { label: 'clink', text: '现代英语常用词「clink」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：叮当声。' },
      ],
      formationLogic: '核心义：叮当声。',
      mnemonic: '看到 clink，先说出「叮当声」。',
      note: '核心义：叮当声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clink.', chinese: '这一章反复回到同一个点：叮当声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clink.s1', en: 'Without that clink, the next paragraph is hard to follow.', zh: '没有这个叮当声，下一段会很难读。', structure: 'clink / 表示 / 叮当声', grammar: 'noun，围绕「叮当声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clink.', right: 'He gave me some advice about the clink.', reason: 'advice 不可数。名词 clink 的单复数按词典词形记。', rule: '先确定 clink 是noun，再套「叮当声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clink.q1', senseId: 'clink.s1', errorType: 'meaning', type: '词义选择', prompt: '「clink」在本条的核心意思是：', options: ['叮当声', '完全相反的意思', '一种古代钱币'], answer: '叮当声', explain: 'clink：叮当声。' },
      { id: 'clink.q2', senseId: 'clink.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clink?', options: ['叮当声', 'a kind of ancient coin', 'the past tense of be'], answer: '叮当声', explain: '对的是「叮当声」。' },
      { id: 'clink.q3', senseId: 'clink.s1', errorType: 'grammar', type: '词义选择', prompt: 'clink 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clink.q4', senseId: 'clink.s1', errorType: 'meaning', type: '词源', prompt: '记 clink 时，哪句更稳妥？', options: ['先锁住「叮当声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「叮当声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['叮当声'] },
  });

  D('clip', {
    etymology: {
      origin: '现代英语常用词「clip」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clip', gloss: '夹子' },
      suffix: null,
      history: [
        { label: 'clip', text: '现代英语常用词「clip」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：夹子。' },
      ],
      formationLogic: '核心义：夹子。',
      mnemonic: '看到 clip，先说出「夹子」。',
      note: '核心义：夹子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clip.', chinese: '这一章反复回到同一个点：夹子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clip.s1', en: 'Without that clip, the next paragraph is hard to follow.', zh: '没有这个夹子，下一段会很难读。', structure: 'clip / 表示 / 夹子', grammar: 'noun，围绕「夹子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clip.', right: 'He gave me some advice about the clip.', reason: 'advice 不可数。名词 clip 的单复数按词典词形记。', rule: '先确定 clip 是noun，再套「夹子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clip.q1', senseId: 'clip.s1', errorType: 'meaning', type: '词义选择', prompt: '「clip」在本条的核心意思是：', options: ['夹子', '完全相反的意思', '一种古代钱币'], answer: '夹子', explain: 'clip：夹子。' },
      { id: 'clip.q2', senseId: 'clip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clip?', options: ['夹子', 'a kind of ancient coin', 'the past tense of be'], answer: '夹子', explain: '对的是「夹子」。' },
      { id: 'clip.q3', senseId: 'clip.s1', errorType: 'grammar', type: '词义选择', prompt: 'clip 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clip.q4', senseId: 'clip.s1', errorType: 'meaning', type: '词源', prompt: '记 clip 时，哪句更稳妥？', options: ['先锁住「夹子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「夹子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['夹子'] },
  });

  D('clique', {
    etymology: {
      origin: '现代英语常用词「clique」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clique', gloss: '小圈子' },
      suffix: null,
      history: [
        { label: 'clique', text: '现代英语常用词「clique」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小圈子。' },
      ],
      formationLogic: '核心义：小圈子。',
      mnemonic: '看到 clique，先说出「小圈子」。',
      note: '核心义：小圈子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clique.', chinese: '这一章反复回到同一个点：小圈子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clique.s1', en: 'Without that clique, the next paragraph is hard to follow.', zh: '没有这个小圈子，下一段会很难读。', structure: 'clique / 表示 / 小圈子', grammar: 'noun，围绕「小圈子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clique.', right: 'He gave me some advice about the clique.', reason: 'advice 不可数。名词 clique 的单复数按词典词形记。', rule: '先确定 clique 是noun，再套「小圈子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clique.q1', senseId: 'clique.s1', errorType: 'meaning', type: '词义选择', prompt: '「clique」在本条的核心意思是：', options: ['小圈子', '完全相反的意思', '一种古代钱币'], answer: '小圈子', explain: 'clique：小圈子。' },
      { id: 'clique.q2', senseId: 'clique.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clique?', options: ['小圈子', 'a kind of ancient coin', 'the past tense of be'], answer: '小圈子', explain: '对的是「小圈子」。' },
      { id: 'clique.q3', senseId: 'clique.s1', errorType: 'grammar', type: '词义选择', prompt: 'clique 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clique.q4', senseId: 'clique.s1', errorType: 'meaning', type: '词源', prompt: '记 clique 时，哪句更稳妥？', options: ['先锁住「小圈子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小圈子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小圈子'] },
  });

  D('cloak', {
    etymology: {
      origin: '现代英语常用词「cloak」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cloak', gloss: '斗篷' },
      suffix: null,
      history: [
        { label: 'cloak', text: '现代英语常用词「cloak」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：斗篷。' },
      ],
      formationLogic: '核心义：斗篷。',
      mnemonic: '看到 cloak，先说出「斗篷」。',
      note: '核心义：斗篷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cloak.', chinese: '这一章反复回到同一个点：斗篷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cloak.s1', en: 'Without that cloak, the next paragraph is hard to follow.', zh: '没有这个斗篷，下一段会很难读。', structure: 'cloak / 表示 / 斗篷', grammar: 'noun，围绕「斗篷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cloak.', right: 'He gave me some advice about the cloak.', reason: 'advice 不可数。名词 cloak 的单复数按词典词形记。', rule: '先确定 cloak 是noun，再套「斗篷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cloak.q1', senseId: 'cloak.s1', errorType: 'meaning', type: '词义选择', prompt: '「cloak」在本条的核心意思是：', options: ['斗篷', '完全相反的意思', '一种古代钱币'], answer: '斗篷', explain: 'cloak：斗篷。' },
      { id: 'cloak.q2', senseId: 'cloak.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cloak?', options: ['斗篷', 'a kind of ancient coin', 'the past tense of be'], answer: '斗篷', explain: '对的是「斗篷」。' },
      { id: 'cloak.q3', senseId: 'cloak.s1', errorType: 'grammar', type: '词义选择', prompt: 'cloak 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cloak.q4', senseId: 'cloak.s1', errorType: 'meaning', type: '词源', prompt: '记 cloak 时，哪句更稳妥？', options: ['先锁住「斗篷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「斗篷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['斗篷'] },
  });

  D('clock', {
    etymology: {
      origin: '拉丁语 clocca「钟」。',
      prefix: null,
      root: { text: 'clock', gloss: '时钟' },
      suffix: null,
      history: [
        { label: 'clock', text: '拉丁语 clocca「钟」。' },
        { label: '现在', text: '核心用法是：时钟。' },
      ],
      formationLogic: '考试认现在的用法：时钟。',
      mnemonic: '看到 clock，先说出「时钟」。',
      note: '考试认现在的用法：时钟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clock.', chinese: '这一章反复回到同一个点：时钟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clock.s1', en: 'Without that clock, the next paragraph is hard to follow.', zh: '没有这个时钟，下一段会很难读。', structure: 'clock / 表示 / 时钟', grammar: 'noun，围绕「时钟」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clock.', right: 'He gave me some advice about the clock.', reason: 'advice 不可数。名词 clock 的单复数按词典词形记。', rule: '先确定 clock 是noun，再套「时钟」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clock.q1', senseId: 'clock.s1', errorType: 'meaning', type: '词义选择', prompt: '「clock」在本条的核心意思是：', options: ['时钟', '完全相反的意思', '一种古代钱币'], answer: '时钟', explain: 'clock：时钟。' },
      { id: 'clock.q2', senseId: 'clock.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clock?', options: ['时钟', 'a kind of ancient coin', 'the past tense of be'], answer: '时钟', explain: '对的是「时钟」。' },
      { id: 'clock.q3', senseId: 'clock.s1', errorType: 'grammar', type: '词义选择', prompt: 'clock 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clock.q4', senseId: 'clock.s1', errorType: 'meaning', type: '词源', prompt: '记 clock 时，哪句更稳妥？', options: ['先锁住「时钟」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「时钟」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['时钟'] },
  });

  D('clockwise', {
    etymology: {
      origin: '现代英语常用词「clockwise」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clockwise', gloss: '顺时针方向（的）' },
      suffix: null,
      history: [
        { label: 'clockwise', text: '现代英语常用词「clockwise」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：顺时针方向（的）。' },
      ],
      formationLogic: '核心义：顺时针方向（的）。',
      mnemonic: '看到 clockwise，先说出「顺时针方向（的）」。',
      note: '核心义：顺时针方向（的）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule clockwise, and the class followed.', chinese: '她把规则讲清楚了（顺时针方向（的）），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clockwise.s1', en: 'He nodded clockwise and returned to the notes.', zh: '他顺时针方向（的）地点了点头，又回去看笔记。', structure: 'clockwise / 表示 / 顺时针方向（的）', grammar: 'adverb，围绕「顺时针方向（的）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very clockwisely in the meeting.', right: 'She spoke clockwise in the meeting.', reason: 'clockwise 已经是副词，不要再加 -ly。', rule: '先确定 clockwise 是adverb，再套「顺时针方向（的）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clockwise.q1', senseId: 'clockwise.s1', errorType: 'meaning', type: '词义选择', prompt: '「clockwise」在本条的核心意思是：', options: ['顺时针方向（的）', '完全相反的意思', '一种古代钱币'], answer: '顺时针方向（的）', explain: 'clockwise：顺时针方向（的）。' },
      { id: 'clockwise.q2', senseId: 'clockwise.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clockwise?', options: ['顺时针方向（的）', 'a kind of ancient coin', 'the past tense of be'], answer: '顺时针方向（的）', explain: '对的是「顺时针方向（的）」。' },
      { id: 'clockwise.q3', senseId: 'clockwise.s1', errorType: 'grammar', type: '词义选择', prompt: 'clockwise 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'clockwise.q4', senseId: 'clockwise.s1', errorType: 'meaning', type: '词源', prompt: '记 clockwise 时，哪句更稳妥？', options: ['先锁住「顺时针方向（的）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「顺时针方向（的）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['顺时针方向（的）'] },
  });

  D('clog', {
    etymology: {
      origin: '现代英语常用词「clog」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clog', gloss: '堵塞' },
      suffix: null,
      history: [
        { label: 'clog', text: '现代英语常用词「clog」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：堵塞。' },
      ],
      formationLogic: '核心义：堵塞。',
      mnemonic: '看到 clog，先说出「堵塞」。',
      note: '核心义：堵塞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clog before the office closed.', chinese: '他们同意在办公室关门前做这件事：堵塞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clog.s1', en: 'The deadline forced the team to clog that afternoon.', zh: '截止日期逼着小组在那天下午堵塞。', structure: 'clog / 表示 / 堵塞', grammar: 'verb，围绕「堵塞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cloged it yesterday without checking the real past form.', right: 'Check the past form of "clog" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clog 是verb，再套「堵塞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clog.q1', senseId: 'clog.s1', errorType: 'meaning', type: '词义选择', prompt: '「clog」在本条的核心意思是：', options: ['堵塞', '完全相反的意思', '一种古代钱币'], answer: '堵塞', explain: 'clog：堵塞。' },
      { id: 'clog.q2', senseId: 'clog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clog?', options: ['堵塞', 'a kind of ancient coin', 'the past tense of be'], answer: '堵塞', explain: '对的是「堵塞」。' },
      { id: 'clog.q3', senseId: 'clog.s1', errorType: 'grammar', type: '词义选择', prompt: 'clog 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clog.q4', senseId: 'clog.s1', errorType: 'meaning', type: '词源', prompt: '记 clog 时，哪句更稳妥？', options: ['先锁住「堵塞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「堵塞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['堵塞'] },
  });

  D('clone', {
    etymology: {
      origin: '现代英语常用词「clone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clone', gloss: '克隆' },
      suffix: null,
      history: [
        { label: 'clone', text: '现代英语常用词「clone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：克隆。' },
      ],
      formationLogic: '核心义：克隆。',
      mnemonic: '看到 clone，先说出「克隆」。',
      note: '核心义：克隆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clone.', chinese: '这一章反复回到同一个点：克隆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clone.s1', en: 'Without that clone, the next paragraph is hard to follow.', zh: '没有这个克隆，下一段会很难读。', structure: 'clone / 表示 / 克隆', grammar: 'noun，围绕「克隆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clone.', right: 'He gave me some advice about the clone.', reason: 'advice 不可数。名词 clone 的单复数按词典词形记。', rule: '先确定 clone 是noun，再套「克隆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clone.q1', senseId: 'clone.s1', errorType: 'meaning', type: '词义选择', prompt: '「clone」在本条的核心意思是：', options: ['克隆', '完全相反的意思', '一种古代钱币'], answer: '克隆', explain: 'clone：克隆。' },
      { id: 'clone.q2', senseId: 'clone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clone?', options: ['克隆', 'a kind of ancient coin', 'the past tense of be'], answer: '克隆', explain: '对的是「克隆」。' },
      { id: 'clone.q3', senseId: 'clone.s1', errorType: 'grammar', type: '词义选择', prompt: 'clone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clone.q4', senseId: 'clone.s1', errorType: 'meaning', type: '词源', prompt: '记 clone 时，哪句更稳妥？', options: ['先锁住「克隆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「克隆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['克隆'] },
  });

  D('close', {
    etymology: {
      origin: '拉丁语 claudere「关」。近是另一义，来自 clausus「关紧所以靠近」。',
      prefix: null,
      root: { text: 'close', gloss: '关闭' },
      suffix: null,
      history: [
        { label: 'close', text: '拉丁语 claudere「关」。近是另一义，来自 clausus「关紧所以靠近」。' },
        { label: '现在', text: '核心用法是：关闭。' },
      ],
      formationLogic: '考试认现在的用法：关闭。',
      mnemonic: '看到 close，先说出「关闭」。',
      note: '考试认现在的用法：关闭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to close before the office closed.', chinese: '他们同意在办公室关门前做这件事：关闭。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'close.s1', en: 'The deadline forced the team to close that afternoon.', zh: '截止日期逼着小组在那天下午关闭。', structure: 'close / 表示 / 关闭', grammar: 'verb，围绕「关闭」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She closeed it yesterday without checking the real past form.', right: 'Check the past form of "close" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 close 是verb，再套「关闭」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'close.q1', senseId: 'close.s1', errorType: 'meaning', type: '词义选择', prompt: '「close」在本条的核心意思是：', options: ['关闭', '完全相反的意思', '一种古代钱币'], answer: '关闭', explain: 'close：关闭。' },
      { id: 'close.q2', senseId: 'close.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches close?', options: ['关闭', 'a kind of ancient coin', 'the past tense of be'], answer: '关闭', explain: '对的是「关闭」。' },
      { id: 'close.q3', senseId: 'close.s1', errorType: 'grammar', type: '词义选择', prompt: 'close 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'close.q4', senseId: 'close.s1', errorType: 'meaning', type: '词源', prompt: '记 close 时，哪句更稳妥？', options: ['先锁住「关闭」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「关闭」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['关闭'] },
  });

  D('close by', {
    etymology: {
      origin: '现代英语固定说法「close by」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'close by', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'close by', text: '现代英语固定说法「close by」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：附近。' },
      ],
      formationLogic: '核心义：附近。',
      mnemonic: '看到 close by，先说出「附近」。',
      note: '核心义：附近。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "close by" and asked the class to keep it as one unit.', chinese: '老师把「close by」圈出来，让全班把它当成一个整体。它表示附近。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'close by.s1', en: 'In the margin she wrote "close by" so nobody would split the phrase.', zh: '她在页边写下「close by」，免得有人把这个说法拆开。意思是附近。', structure: 'close by / 表示 / 附近', grammar: 'adverb，围绕「附近」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of close by and lost the point.', right: 'Keep "close by" together: it means 附近.', reason: '「close by」要整块理解。', rule: '先确定 close by 是adverb，再套「附近」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'close by.q1', senseId: 'close by.s1', errorType: 'meaning', type: '词义选择', prompt: '「close by」在本条的核心意思是：', options: ['附近', '完全相反的意思', '一种古代钱币'], answer: '附近', explain: 'close by：附近。' },
      { id: 'close by.q2', senseId: 'close by.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches close by?', options: ['附近', 'a kind of ancient coin', 'the past tense of be'], answer: '附近', explain: '对的是「附近」。' },
      { id: 'close by.q3', senseId: 'close by.s1', errorType: 'grammar', type: '词义选择', prompt: 'close by 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'close by.q4', senseId: 'close by.s1', errorType: 'meaning', type: '词源', prompt: '记 close by 时，哪句更稳妥？', options: ['先锁住「附近」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「附近」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['附近'] },
  });

  D('close to', {
    etymology: {
      origin: '现代英语固定说法「close to」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'close to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'close to', text: '现代英语固定说法「close to」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：接近。' },
      ],
      formationLogic: '核心义：接近。',
      mnemonic: '看到 close to，先说出「接近」。',
      note: '核心义：接近。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "close to" and asked the class to keep it as one unit.', chinese: '老师把「close to」圈出来，让全班把它当成一个整体。它表示接近。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'close to.s1', en: 'In the margin she wrote "close to" so nobody would split the phrase.', zh: '她在页边写下「close to」，免得有人把这个说法拆开。意思是接近。', structure: 'close to / 表示 / 接近', grammar: 'preposition，围绕「接近」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of close to and lost the point.', right: 'Keep "close to" together: it means 接近.', reason: '「close to」要整块理解。', rule: '先确定 close to 是preposition，再套「接近」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'close to.q1', senseId: 'close to.s1', errorType: 'meaning', type: '词义选择', prompt: '「close to」在本条的核心意思是：', options: ['接近', '完全相反的意思', '一种古代钱币'], answer: '接近', explain: 'close to：接近。' },
      { id: 'close to.q2', senseId: 'close to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches close to?', options: ['接近', 'a kind of ancient coin', 'the past tense of be'], answer: '接近', explain: '对的是「接近」。' },
      { id: 'close to.q3', senseId: 'close to.s1', errorType: 'grammar', type: '词义选择', prompt: 'close to 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'close to.q4', senseId: 'close to.s1', errorType: 'meaning', type: '词源', prompt: '记 close to 时，哪句更稳妥？', options: ['先锁住「接近」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「接近」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['接近'] },
  });

  D('closed', {
    etymology: {
      origin: '现代英语常用词「closed」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'closed', gloss: '关闭的' },
      suffix: null,
      history: [
        { label: 'closed', text: '现代英语常用词「closed」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：关闭的。' },
      ],
      formationLogic: '核心义：关闭的。',
      mnemonic: '看到 closed，先说出「关闭的」。',
      note: '核心义：关闭的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was closed.', chinese: '即使是初读者也能看出，这个结果是关闭的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'closed.s1', en: 'They wanted a closed answer, not a long speech.', zh: '他们要一个关闭的的答复，不要长篇发言。', structure: 'closed / 表示 / 关闭的', grammar: 'adjective，围绕「关闭的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are closed.', right: 'The news is closed.', reason: 'news 作主语时动词用单数。', rule: '先确定 closed 是adjective，再套「关闭的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'closed.q1', senseId: 'closed.s1', errorType: 'meaning', type: '词义选择', prompt: '「closed」在本条的核心意思是：', options: ['关闭的', '完全相反的意思', '一种古代钱币'], answer: '关闭的', explain: 'closed：关闭的。' },
      { id: 'closed.q2', senseId: 'closed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches closed?', options: ['关闭的', 'a kind of ancient coin', 'the past tense of be'], answer: '关闭的', explain: '对的是「关闭的」。' },
      { id: 'closed.q3', senseId: 'closed.s1', errorType: 'grammar', type: '词义选择', prompt: 'closed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'closed.q4', senseId: 'closed.s1', errorType: 'meaning', type: '词源', prompt: '记 closed 时，哪句更稳妥？', options: ['先锁住「关闭的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「关闭的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['关闭的'] },
  });

  D('closest', {
    etymology: {
      origin: '现代英语常用词「closest」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'closest', gloss: '最近的' },
      suffix: null,
      history: [
        { label: 'closest', text: '现代英语常用词「closest」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：最近的。' },
      ],
      formationLogic: '核心义：最近的。',
      mnemonic: '看到 closest，先说出「最近的」。',
      note: '核心义：最近的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was closest.', chinese: '即使是初读者也能看出，这个结果是最近的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'closest.s1', en: 'They wanted a closest answer, not a long speech.', zh: '他们要一个最近的的答复，不要长篇发言。', structure: 'closest / 表示 / 最近的', grammar: 'adjective，围绕「最近的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are closest.', right: 'The news is closest.', reason: 'news 作主语时动词用单数。', rule: '先确定 closest 是adjective，再套「最近的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'closest.q1', senseId: 'closest.s1', errorType: 'meaning', type: '词义选择', prompt: '「closest」在本条的核心意思是：', options: ['最近的', '完全相反的意思', '一种古代钱币'], answer: '最近的', explain: 'closest：最近的。' },
      { id: 'closest.q2', senseId: 'closest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches closest?', options: ['最近的', 'a kind of ancient coin', 'the past tense of be'], answer: '最近的', explain: '对的是「最近的」。' },
      { id: 'closest.q3', senseId: 'closest.s1', errorType: 'grammar', type: '词义选择', prompt: 'closest 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'closest.q4', senseId: 'closest.s1', errorType: 'meaning', type: '词源', prompt: '记 closest 时，哪句更稳妥？', options: ['先锁住「最近的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「最近的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['最近的'] },
  });

  D('closet', {
    etymology: {
      origin: '现代英语常用词「closet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'closet', gloss: '壁橱' },
      suffix: null,
      history: [
        { label: 'closet', text: '现代英语常用词「closet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：壁橱。' },
      ],
      formationLogic: '核心义：壁橱。',
      mnemonic: '看到 closet，先说出「壁橱」。',
      note: '核心义：壁橱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one closet.', chinese: '这一章反复回到同一个点：壁橱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'closet.s1', en: 'Without that closet, the next paragraph is hard to follow.', zh: '没有这个壁橱，下一段会很难读。', structure: 'closet / 表示 / 壁橱', grammar: 'noun，围绕「壁橱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the closet.', right: 'He gave me some advice about the closet.', reason: 'advice 不可数。名词 closet 的单复数按词典词形记。', rule: '先确定 closet 是noun，再套「壁橱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'closet.q1', senseId: 'closet.s1', errorType: 'meaning', type: '词义选择', prompt: '「closet」在本条的核心意思是：', options: ['壁橱', '完全相反的意思', '一种古代钱币'], answer: '壁橱', explain: 'closet：壁橱。' },
      { id: 'closet.q2', senseId: 'closet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches closet?', options: ['壁橱', 'a kind of ancient coin', 'the past tense of be'], answer: '壁橱', explain: '对的是「壁橱」。' },
      { id: 'closet.q3', senseId: 'closet.s1', errorType: 'grammar', type: '词义选择', prompt: 'closet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'closet.q4', senseId: 'closet.s1', errorType: 'meaning', type: '词源', prompt: '记 closet 时，哪句更稳妥？', options: ['先锁住「壁橱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「壁橱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['壁橱'] },
  });

  D('closing', {
    etymology: {
      origin: '英语派生：clos + -ing，词性转到「结束的」。',
      prefix: null,
      root: { text: 'clos', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'closing', text: '英语派生：clos + -ing，词性转到「结束的」。' },
        { label: '现在', text: '核心用法是：结束的。' },
      ],
      formationLogic: '先认词干 clos，再看词尾。',
      mnemonic: '看到 closing，先说出「结束的」。',
      note: '先认词干 clos，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was closing.', chinese: '即使是初读者也能看出，这个结果是结束的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'closing.s1', en: 'They wanted a closing answer, not a long speech.', zh: '他们要一个结束的的答复，不要长篇发言。', structure: 'closing / 表示 / 结束的', grammar: 'adjective，围绕「结束的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are closing.', right: 'The news is closing.', reason: 'news 作主语时动词用单数。', rule: '先确定 closing 是adjective，再套「结束的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'closing.q1', senseId: 'closing.s1', errorType: 'meaning', type: '词义选择', prompt: '「closing」在本条的核心意思是：', options: ['结束的', '完全相反的意思', '一种古代钱币'], answer: '结束的', explain: 'closing：结束的。' },
      { id: 'closing.q2', senseId: 'closing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches closing?', options: ['结束的', 'a kind of ancient coin', 'the past tense of be'], answer: '结束的', explain: '对的是「结束的」。' },
      { id: 'closing.q3', senseId: 'closing.s1', errorType: 'grammar', type: '词义选择', prompt: 'closing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'closing.q4', senseId: 'closing.s1', errorType: 'meaning', type: '词源', prompt: '记 closing 时，哪句更稳妥？', options: ['先锁住「结束的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结束的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结束的'] },
  });

  D('cloth', {
    etymology: {
      origin: '古英语 claþ。',
      prefix: null,
      root: { text: 'cloth', gloss: '布' },
      suffix: null,
      history: [
        { label: 'cloth', text: '古英语 claþ。' },
        { label: '现在', text: '核心用法是：布。' },
      ],
      formationLogic: '考试认现在的用法：布。',
      mnemonic: '看到 cloth，先说出「布」。',
      note: '考试认现在的用法：布。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cloth.', chinese: '这一章反复回到同一个点：布。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cloth.s1', en: 'Without that cloth, the next paragraph is hard to follow.', zh: '没有这个布，下一段会很难读。', structure: 'cloth / 表示 / 布', grammar: 'noun，围绕「布」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cloth.', right: 'He gave me some advice about the cloth.', reason: 'advice 不可数。名词 cloth 的单复数按词典词形记。', rule: '先确定 cloth 是noun，再套「布」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cloth.q1', senseId: 'cloth.s1', errorType: 'meaning', type: '词义选择', prompt: '「cloth」在本条的核心意思是：', options: ['布', '完全相反的意思', '一种古代钱币'], answer: '布', explain: 'cloth：布。' },
      { id: 'cloth.q2', senseId: 'cloth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cloth?', options: ['布', 'a kind of ancient coin', 'the past tense of be'], answer: '布', explain: '对的是「布」。' },
      { id: 'cloth.q3', senseId: 'cloth.s1', errorType: 'grammar', type: '词义选择', prompt: 'cloth 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cloth.q4', senseId: 'cloth.s1', errorType: 'meaning', type: '词源', prompt: '记 cloth 时，哪句更稳妥？', options: ['先锁住「布」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「布」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['布'] },
  });

  D('clothe', {
    etymology: {
      origin: '现代英语常用词「clothe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clothe', gloss: '给…穿衣' },
      suffix: null,
      history: [
        { label: 'clothe', text: '现代英语常用词「clothe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：给…穿衣。' },
      ],
      formationLogic: '核心义：给…穿衣。',
      mnemonic: '看到 clothe，先说出「给…穿衣」。',
      note: '核心义：给…穿衣。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clothe before the office closed.', chinese: '他们同意在办公室关门前做这件事：给…穿衣。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clothe.s1', en: 'The deadline forced the team to clothe that afternoon.', zh: '截止日期逼着小组在那天下午给…穿衣。', structure: 'clothe / 表示 / 给…穿衣', grammar: 'verb，围绕「给…穿衣」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clotheed it yesterday without checking the real past form.', right: 'Check the past form of "clothe" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clothe 是verb，再套「给…穿衣」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clothe.q1', senseId: 'clothe.s1', errorType: 'meaning', type: '词义选择', prompt: '「clothe」在本条的核心意思是：', options: ['给…穿衣', '完全相反的意思', '一种古代钱币'], answer: '给…穿衣', explain: 'clothe：给…穿衣。' },
      { id: 'clothe.q2', senseId: 'clothe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clothe?', options: ['给…穿衣', 'a kind of ancient coin', 'the past tense of be'], answer: '给…穿衣', explain: '对的是「给…穿衣」。' },
      { id: 'clothe.q3', senseId: 'clothe.s1', errorType: 'grammar', type: '词义选择', prompt: 'clothe 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clothe.q4', senseId: 'clothe.s1', errorType: 'meaning', type: '词源', prompt: '记 clothe 时，哪句更稳妥？', options: ['先锁住「给…穿衣」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「给…穿衣」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['给…穿衣'] },
  });

  D('clothes', {
    etymology: {
      origin: 'cloth 的复数用法固定成「衣服」。',
      prefix: null,
      root: { text: 'clothes', gloss: '衣服' },
      suffix: null,
      history: [
        { label: 'clothes', text: 'cloth 的复数用法固定成「衣服」。' },
        { label: '现在', text: '核心用法是：衣服。' },
      ],
      formationLogic: '考试认现在的用法：衣服。',
      mnemonic: '看到 clothes，先说出「衣服」。',
      note: '考试认现在的用法：衣服。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clothes.', chinese: '这一章反复回到同一个点：衣服。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clothes.s1', en: 'Without that clothes, the next paragraph is hard to follow.', zh: '没有这个衣服，下一段会很难读。', structure: 'clothes / 表示 / 衣服', grammar: 'noun，围绕「衣服」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clothes.', right: 'He gave me some advice about the clothes.', reason: 'advice 不可数。名词 clothes 的单复数按词典词形记。', rule: '先确定 clothes 是noun，再套「衣服」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clothes.q1', senseId: 'clothes.s1', errorType: 'meaning', type: '词义选择', prompt: '「clothes」在本条的核心意思是：', options: ['衣服', '完全相反的意思', '一种古代钱币'], answer: '衣服', explain: 'clothes：衣服。' },
      { id: 'clothes.q2', senseId: 'clothes.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clothes?', options: ['衣服', 'a kind of ancient coin', 'the past tense of be'], answer: '衣服', explain: '对的是「衣服」。' },
      { id: 'clothes.q3', senseId: 'clothes.s1', errorType: 'grammar', type: '词义选择', prompt: 'clothes 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clothes.q4', senseId: 'clothes.s1', errorType: 'meaning', type: '词源', prompt: '记 clothes 时，哪句更稳妥？', options: ['先锁住「衣服」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「衣服」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['衣服'] },
  });

  D('clothing', {
    etymology: {
      origin: '英语派生：cloth + -ing，词性转到「服装」。',
      prefix: null,
      root: { text: 'cloth', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clothing', text: '英语派生：cloth + -ing，词性转到「服装」。' },
        { label: '现在', text: '核心用法是：服装。' },
      ],
      formationLogic: '先认词干 cloth，再看词尾。',
      mnemonic: '看到 clothing，先说出「服装」。',
      note: '先认词干 cloth，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clothing.', chinese: '这一章反复回到同一个点：服装。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clothing.s1', en: 'Without that clothing, the next paragraph is hard to follow.', zh: '没有这个服装，下一段会很难读。', structure: 'clothing / 表示 / 服装', grammar: 'noun，围绕「服装」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clothing.', right: 'He gave me some advice about the clothing.', reason: 'advice 不可数。名词 clothing 的单复数按词典词形记。', rule: '先确定 clothing 是noun，再套「服装」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clothing.q1', senseId: 'clothing.s1', errorType: 'meaning', type: '词义选择', prompt: '「clothing」在本条的核心意思是：', options: ['服装', '完全相反的意思', '一种古代钱币'], answer: '服装', explain: 'clothing：服装。' },
      { id: 'clothing.q2', senseId: 'clothing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clothing?', options: ['服装', 'a kind of ancient coin', 'the past tense of be'], answer: '服装', explain: '对的是「服装」。' },
      { id: 'clothing.q3', senseId: 'clothing.s1', errorType: 'grammar', type: '词义选择', prompt: 'clothing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clothing.q4', senseId: 'clothing.s1', errorType: 'meaning', type: '词源', prompt: '记 clothing 时，哪句更稳妥？', options: ['先锁住「服装」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「服装」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['服装'] },
  });

  D('cloud', {
    etymology: {
      origin: '古英语 clud，原义是岩石，后指云团。',
      prefix: null,
      root: { text: 'cloud', gloss: '云' },
      suffix: null,
      history: [
        { label: 'cloud', text: '古英语 clud，原义是岩石，后指云团。' },
        { label: '现在', text: '核心用法是：云。' },
      ],
      formationLogic: '考试认现在的用法：云。',
      mnemonic: '看到 cloud，先说出「云」。',
      note: '考试认现在的用法：云。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cloud.', chinese: '这一章反复回到同一个点：云。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cloud.s1', en: 'Without that cloud, the next paragraph is hard to follow.', zh: '没有这个云，下一段会很难读。', structure: 'cloud / 表示 / 云', grammar: 'noun，围绕「云」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cloud.', right: 'He gave me some advice about the cloud.', reason: 'advice 不可数。名词 cloud 的单复数按词典词形记。', rule: '先确定 cloud 是noun，再套「云」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cloud.q1', senseId: 'cloud.s1', errorType: 'meaning', type: '词义选择', prompt: '「cloud」在本条的核心意思是：', options: ['云', '完全相反的意思', '一种古代钱币'], answer: '云', explain: 'cloud：云。' },
      { id: 'cloud.q2', senseId: 'cloud.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cloud?', options: ['云', 'a kind of ancient coin', 'the past tense of be'], answer: '云', explain: '对的是「云」。' },
      { id: 'cloud.q3', senseId: 'cloud.s1', errorType: 'grammar', type: '词义选择', prompt: 'cloud 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cloud.q4', senseId: 'cloud.s1', errorType: 'meaning', type: '词源', prompt: '记 cloud 时，哪句更稳妥？', options: ['先锁住「云」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「云」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['云'] },
  });

  D('cloudy', {
    etymology: {
      origin: '现代英语常用词「cloudy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cloudy', gloss: '多云的' },
      suffix: null,
      history: [
        { label: 'cloudy', text: '现代英语常用词「cloudy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：多云的。' },
      ],
      formationLogic: '核心义：多云的。',
      mnemonic: '看到 cloudy，先说出「多云的」。',
      note: '核心义：多云的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cloudy.', chinese: '即使是初读者也能看出，这个结果是多云的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cloudy.s1', en: 'They wanted a cloudy answer, not a long speech.', zh: '他们要一个多云的的答复，不要长篇发言。', structure: 'cloudy / 表示 / 多云的', grammar: 'adjective，围绕「多云的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cloudy.', right: 'The news is cloudy.', reason: 'news 作主语时动词用单数。', rule: '先确定 cloudy 是adjective，再套「多云的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cloudy.q1', senseId: 'cloudy.s1', errorType: 'meaning', type: '词义选择', prompt: '「cloudy」在本条的核心意思是：', options: ['多云的', '完全相反的意思', '一种古代钱币'], answer: '多云的', explain: 'cloudy：多云的。' },
      { id: 'cloudy.q2', senseId: 'cloudy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cloudy?', options: ['多云的', 'a kind of ancient coin', 'the past tense of be'], answer: '多云的', explain: '对的是「多云的」。' },
      { id: 'cloudy.q3', senseId: 'cloudy.s1', errorType: 'grammar', type: '词义选择', prompt: 'cloudy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cloudy.q4', senseId: 'cloudy.s1', errorType: 'meaning', type: '词源', prompt: '记 cloudy 时，哪句更稳妥？', options: ['先锁住「多云的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「多云的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['多云的'] },
  });

  D('clown', {
    etymology: {
      origin: '现代英语常用词「clown」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clown', gloss: '小丑' },
      suffix: null,
      history: [
        { label: 'clown', text: '现代英语常用词「clown」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小丑。' },
      ],
      formationLogic: '核心义：小丑。',
      mnemonic: '看到 clown，先说出「小丑」。',
      note: '核心义：小丑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clown.', chinese: '这一章反复回到同一个点：小丑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clown.s1', en: 'Without that clown, the next paragraph is hard to follow.', zh: '没有这个小丑，下一段会很难读。', structure: 'clown / 表示 / 小丑', grammar: 'noun，围绕「小丑」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clown.', right: 'He gave me some advice about the clown.', reason: 'advice 不可数。名词 clown 的单复数按词典词形记。', rule: '先确定 clown 是noun，再套「小丑」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clown.q1', senseId: 'clown.s1', errorType: 'meaning', type: '词义选择', prompt: '「clown」在本条的核心意思是：', options: ['小丑', '完全相反的意思', '一种古代钱币'], answer: '小丑', explain: 'clown：小丑。' },
      { id: 'clown.q2', senseId: 'clown.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clown?', options: ['小丑', 'a kind of ancient coin', 'the past tense of be'], answer: '小丑', explain: '对的是「小丑」。' },
      { id: 'clown.q3', senseId: 'clown.s1', errorType: 'grammar', type: '词义选择', prompt: 'clown 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clown.q4', senseId: 'clown.s1', errorType: 'meaning', type: '词源', prompt: '记 clown 时，哪句更稳妥？', options: ['先锁住「小丑」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小丑」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小丑'] },
  });

  D('club', {
    etymology: {
      origin: '古诺斯语 klubba「棍棒」。俱乐部是另一发展。',
      prefix: null,
      root: { text: 'club', gloss: '俱乐部' },
      suffix: null,
      history: [
        { label: 'club', text: '古诺斯语 klubba「棍棒」。俱乐部是另一发展。' },
        { label: '现在', text: '核心用法是：俱乐部。' },
      ],
      formationLogic: '考试认现在的用法：俱乐部。',
      mnemonic: '看到 club，先说出「俱乐部」。',
      note: '考试认现在的用法：俱乐部。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one club.', chinese: '这一章反复回到同一个点：俱乐部。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'club.s1', en: 'Without that club, the next paragraph is hard to follow.', zh: '没有这个俱乐部，下一段会很难读。', structure: 'club / 表示 / 俱乐部', grammar: 'noun，围绕「俱乐部」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the club.', right: 'He gave me some advice about the club.', reason: 'advice 不可数。名词 club 的单复数按词典词形记。', rule: '先确定 club 是noun，再套「俱乐部」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'club.q1', senseId: 'club.s1', errorType: 'meaning', type: '词义选择', prompt: '「club」在本条的核心意思是：', options: ['俱乐部', '完全相反的意思', '一种古代钱币'], answer: '俱乐部', explain: 'club：俱乐部。' },
      { id: 'club.q2', senseId: 'club.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches club?', options: ['俱乐部', 'a kind of ancient coin', 'the past tense of be'], answer: '俱乐部', explain: '对的是「俱乐部」。' },
      { id: 'club.q3', senseId: 'club.s1', errorType: 'grammar', type: '词义选择', prompt: 'club 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'club.q4', senseId: 'club.s1', errorType: 'meaning', type: '词源', prompt: '记 club 时，哪句更稳妥？', options: ['先锁住「俱乐部」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「俱乐部」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['俱乐部'] },
  });

  D('clue', {
    etymology: {
      origin: '古英语 cliwen「线团」。用线团走出迷宫，所以是线索。',
      prefix: null,
      root: { text: 'clue', gloss: '线索' },
      suffix: null,
      history: [
        { label: 'clue', text: '古英语 cliwen「线团」。用线团走出迷宫，所以是线索。' },
        { label: '现在', text: '核心用法是：线索。' },
      ],
      formationLogic: '考试认现在的用法：线索。',
      mnemonic: '看到 clue，先说出「线索」。',
      note: '考试认现在的用法：线索。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clue.', chinese: '这一章反复回到同一个点：线索。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clue.s1', en: 'Without that clue, the next paragraph is hard to follow.', zh: '没有这个线索，下一段会很难读。', structure: 'clue / 表示 / 线索', grammar: 'noun，围绕「线索」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clue.', right: 'He gave me some advice about the clue.', reason: 'advice 不可数。名词 clue 的单复数按词典词形记。', rule: '先确定 clue 是noun，再套「线索」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clue.q1', senseId: 'clue.s1', errorType: 'meaning', type: '词义选择', prompt: '「clue」在本条的核心意思是：', options: ['线索', '完全相反的意思', '一种古代钱币'], answer: '线索', explain: 'clue：线索。' },
      { id: 'clue.q2', senseId: 'clue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clue?', options: ['线索', 'a kind of ancient coin', 'the past tense of be'], answer: '线索', explain: '对的是「线索」。' },
      { id: 'clue.q3', senseId: 'clue.s1', errorType: 'grammar', type: '词义选择', prompt: 'clue 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clue.q4', senseId: 'clue.s1', errorType: 'meaning', type: '词源', prompt: '记 clue 时，哪句更稳妥？', options: ['先锁住「线索」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「线索」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['线索'] },
  });

  D('clumsy', {
    etymology: {
      origin: '现代英语常用词「clumsy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clumsy', gloss: '笨拙的' },
      suffix: null,
      history: [
        { label: 'clumsy', text: '现代英语常用词「clumsy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：笨拙的。' },
      ],
      formationLogic: '核心义：笨拙的。',
      mnemonic: '看到 clumsy，先说出「笨拙的」。',
      note: '核心义：笨拙的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was clumsy.', chinese: '即使是初读者也能看出，这个结果是笨拙的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clumsy.s1', en: 'They wanted a clumsy answer, not a long speech.', zh: '他们要一个笨拙的的答复，不要长篇发言。', structure: 'clumsy / 表示 / 笨拙的', grammar: 'adjective，围绕「笨拙的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are clumsy.', right: 'The news is clumsy.', reason: 'news 作主语时动词用单数。', rule: '先确定 clumsy 是adjective，再套「笨拙的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clumsy.q1', senseId: 'clumsy.s1', errorType: 'meaning', type: '词义选择', prompt: '「clumsy」在本条的核心意思是：', options: ['笨拙的', '完全相反的意思', '一种古代钱币'], answer: '笨拙的', explain: 'clumsy：笨拙的。' },
      { id: 'clumsy.q2', senseId: 'clumsy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clumsy?', options: ['笨拙的', 'a kind of ancient coin', 'the past tense of be'], answer: '笨拙的', explain: '对的是「笨拙的」。' },
      { id: 'clumsy.q3', senseId: 'clumsy.s1', errorType: 'grammar', type: '词义选择', prompt: 'clumsy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'clumsy.q4', senseId: 'clumsy.s1', errorType: 'meaning', type: '词源', prompt: '记 clumsy 时，哪句更稳妥？', options: ['先锁住「笨拙的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「笨拙的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['笨拙的'] },
  });

  D('cluster', {
    etymology: {
      origin: '英语派生：clust + -er，词性转到「串」。',
      prefix: null,
      root: { text: 'clust', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cluster', text: '英语派生：clust + -er，词性转到「串」。' },
        { label: '现在', text: '核心用法是：串。' },
      ],
      formationLogic: '先认词干 clust，再看词尾。',
      mnemonic: '看到 cluster，先说出「串」。',
      note: '先认词干 clust，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cluster.', chinese: '这一章反复回到同一个点：串。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cluster.s1', en: 'Without that cluster, the next paragraph is hard to follow.', zh: '没有这个串，下一段会很难读。', structure: 'cluster / 表示 / 串', grammar: 'noun，围绕「串」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cluster.', right: 'He gave me some advice about the cluster.', reason: 'advice 不可数。名词 cluster 的单复数按词典词形记。', rule: '先确定 cluster 是noun，再套「串」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cluster.q1', senseId: 'cluster.s1', errorType: 'meaning', type: '词义选择', prompt: '「cluster」在本条的核心意思是：', options: ['串', '完全相反的意思', '一种古代钱币'], answer: '串', explain: 'cluster：串。' },
      { id: 'cluster.q2', senseId: 'cluster.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cluster?', options: ['串', 'a kind of ancient coin', 'the past tense of be'], answer: '串', explain: '对的是「串」。' },
      { id: 'cluster.q3', senseId: 'cluster.s1', errorType: 'grammar', type: '词义选择', prompt: 'cluster 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cluster.q4', senseId: 'cluster.s1', errorType: 'meaning', type: '词源', prompt: '记 cluster 时，哪句更稳妥？', options: ['先锁住「串」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「串」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['串'] },
  });

  D('clutch', {
    etymology: {
      origin: '现代英语常用词「clutch」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'clutch', gloss: '紧抓' },
      suffix: null,
      history: [
        { label: 'clutch', text: '现代英语常用词「clutch」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：紧抓。' },
      ],
      formationLogic: '核心义：紧抓。',
      mnemonic: '看到 clutch，先说出「紧抓」。',
      note: '核心义：紧抓。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to clutch before the office closed.', chinese: '他们同意在办公室关门前做这件事：紧抓。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clutch.s1', en: 'The deadline forced the team to clutch that afternoon.', zh: '截止日期逼着小组在那天下午紧抓。', structure: 'clutch / 表示 / 紧抓', grammar: 'verb，围绕「紧抓」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She clutched it yesterday without checking the real past form.', right: 'Check the past form of "clutch" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 clutch 是verb，再套「紧抓」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clutch.q1', senseId: 'clutch.s1', errorType: 'meaning', type: '词义选择', prompt: '「clutch」在本条的核心意思是：', options: ['紧抓', '完全相反的意思', '一种古代钱币'], answer: '紧抓', explain: 'clutch：紧抓。' },
      { id: 'clutch.q2', senseId: 'clutch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clutch?', options: ['紧抓', 'a kind of ancient coin', 'the past tense of be'], answer: '紧抓', explain: '对的是「紧抓」。' },
      { id: 'clutch.q3', senseId: 'clutch.s1', errorType: 'grammar', type: '词义选择', prompt: 'clutch 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'clutch.q4', senseId: 'clutch.s1', errorType: 'meaning', type: '词源', prompt: '记 clutch 时，哪句更稳妥？', options: ['先锁住「紧抓」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「紧抓」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['紧抓'] },
  });

  D('clutter', {
    etymology: {
      origin: '英语派生：clutt + -er，词性转到「杂乱」。',
      prefix: null,
      root: { text: 'clutt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'clutter', text: '英语派生：clutt + -er，词性转到「杂乱」。' },
        { label: '现在', text: '核心用法是：杂乱。' },
      ],
      formationLogic: '先认词干 clutt，再看词尾。',
      mnemonic: '看到 clutter，先说出「杂乱」。',
      note: '先认词干 clutt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one clutter.', chinese: '这一章反复回到同一个点：杂乱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'clutter.s1', en: 'Without that clutter, the next paragraph is hard to follow.', zh: '没有这个杂乱，下一段会很难读。', structure: 'clutter / 表示 / 杂乱', grammar: 'noun，围绕「杂乱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the clutter.', right: 'He gave me some advice about the clutter.', reason: 'advice 不可数。名词 clutter 的单复数按词典词形记。', rule: '先确定 clutter 是noun，再套「杂乱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'clutter.q1', senseId: 'clutter.s1', errorType: 'meaning', type: '词义选择', prompt: '「clutter」在本条的核心意思是：', options: ['杂乱', '完全相反的意思', '一种古代钱币'], answer: '杂乱', explain: 'clutter：杂乱。' },
      { id: 'clutter.q2', senseId: 'clutter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches clutter?', options: ['杂乱', 'a kind of ancient coin', 'the past tense of be'], answer: '杂乱', explain: '对的是「杂乱」。' },
      { id: 'clutter.q3', senseId: 'clutter.s1', errorType: 'grammar', type: '词义选择', prompt: 'clutter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'clutter.q4', senseId: 'clutter.s1', errorType: 'meaning', type: '词源', prompt: '记 clutter 时，哪句更稳妥？', options: ['先锁住「杂乱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「杂乱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['杂乱'] },
  });

  D('coach', {
    etymology: {
      origin: '匈牙利地名 Kocs 的马车。教练是后来的比喻。',
      prefix: null,
      root: { text: 'coach', gloss: '教练' },
      suffix: null,
      history: [
        { label: 'coach', text: '匈牙利地名 Kocs 的马车。教练是后来的比喻。' },
        { label: '现在', text: '核心用法是：教练。' },
      ],
      formationLogic: '考试认现在的用法：教练。',
      mnemonic: '看到 coach，先说出「教练」。',
      note: '考试认现在的用法：教练。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coach.', chinese: '这一章反复回到同一个点：教练。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coach.s1', en: 'Without that coach, the next paragraph is hard to follow.', zh: '没有这个教练，下一段会很难读。', structure: 'coach / 表示 / 教练', grammar: 'noun，围绕「教练」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coach.', right: 'He gave me some advice about the coach.', reason: 'advice 不可数。名词 coach 的单复数按词典词形记。', rule: '先确定 coach 是noun，再套「教练」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coach.q1', senseId: 'coach.s1', errorType: 'meaning', type: '词义选择', prompt: '「coach」在本条的核心意思是：', options: ['教练', '完全相反的意思', '一种古代钱币'], answer: '教练', explain: 'coach：教练。' },
      { id: 'coach.q2', senseId: 'coach.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coach?', options: ['教练', 'a kind of ancient coin', 'the past tense of be'], answer: '教练', explain: '对的是「教练」。' },
      { id: 'coach.q3', senseId: 'coach.s1', errorType: 'grammar', type: '词义选择', prompt: 'coach 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coach.q4', senseId: 'coach.s1', errorType: 'meaning', type: '词源', prompt: '记 coach 时，哪句更稳妥？', options: ['先锁住「教练」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「教练」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['教练'] },
  });

  D('coal', {
    etymology: {
      origin: '古英语 col。',
      prefix: null,
      root: { text: 'coal', gloss: '煤' },
      suffix: null,
      history: [
        { label: 'coal', text: '古英语 col。' },
        { label: '现在', text: '核心用法是：煤。' },
      ],
      formationLogic: '考试认现在的用法：煤。',
      mnemonic: '看到 coal，先说出「煤」。',
      note: '考试认现在的用法：煤。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coal.', chinese: '这一章反复回到同一个点：煤。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coal.s1', en: 'Without that coal, the next paragraph is hard to follow.', zh: '没有这个煤，下一段会很难读。', structure: 'coal / 表示 / 煤', grammar: 'noun，围绕「煤」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coal.', right: 'He gave me some advice about the coal.', reason: 'advice 不可数。名词 coal 的单复数按词典词形记。', rule: '先确定 coal 是noun，再套「煤」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coal.q1', senseId: 'coal.s1', errorType: 'meaning', type: '词义选择', prompt: '「coal」在本条的核心意思是：', options: ['煤', '完全相反的意思', '一种古代钱币'], answer: '煤', explain: 'coal：煤。' },
      { id: 'coal.q2', senseId: 'coal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coal?', options: ['煤', 'a kind of ancient coin', 'the past tense of be'], answer: '煤', explain: '对的是「煤」。' },
      { id: 'coal.q3', senseId: 'coal.s1', errorType: 'grammar', type: '词义选择', prompt: 'coal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coal.q4', senseId: 'coal.s1', errorType: 'meaning', type: '词源', prompt: '记 coal 时，哪句更稳妥？', options: ['先锁住「煤」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「煤」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['煤'] },
  });

  D('coalition', {
    etymology: {
      origin: '英语派生：coali + -tion，词性转到「联合政府」。',
      prefix: null,
      root: { text: 'coali', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coalition', text: '英语派生：coali + -tion，词性转到「联合政府」。' },
        { label: '现在', text: '核心用法是：联合政府。' },
      ],
      formationLogic: '先认词干 coali，再看词尾。',
      mnemonic: '看到 coalition，先说出「联合政府」。',
      note: '先认词干 coali，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coalition.', chinese: '这一章反复回到同一个点：联合政府。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coalition.s1', en: 'Without that coalition, the next paragraph is hard to follow.', zh: '没有这个联合政府，下一段会很难读。', structure: 'coalition / 表示 / 联合政府', grammar: 'noun，围绕「联合政府」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coalition.', right: 'He gave me some advice about the coalition.', reason: 'advice 不可数。名词 coalition 的单复数按词典词形记。', rule: '先确定 coalition 是noun，再套「联合政府」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coalition.q1', senseId: 'coalition.s1', errorType: 'meaning', type: '词义选择', prompt: '「coalition」在本条的核心意思是：', options: ['联合政府', '完全相反的意思', '一种古代钱币'], answer: '联合政府', explain: 'coalition：联合政府。' },
      { id: 'coalition.q2', senseId: 'coalition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coalition?', options: ['联合政府', 'a kind of ancient coin', 'the past tense of be'], answer: '联合政府', explain: '对的是「联合政府」。' },
      { id: 'coalition.q3', senseId: 'coalition.s1', errorType: 'grammar', type: '词义选择', prompt: 'coalition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coalition.q4', senseId: 'coalition.s1', errorType: 'meaning', type: '词源', prompt: '记 coalition 时，哪句更稳妥？', options: ['先锁住「联合政府」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「联合政府」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联合政府'] },
  });

  D('coarse', {
    etymology: {
      origin: '现代英语常用词「coarse」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coarse', gloss: '粗糙的' },
      suffix: null,
      history: [
        { label: 'coarse', text: '现代英语常用词「coarse」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：粗糙的。' },
      ],
      formationLogic: '核心义：粗糙的。',
      mnemonic: '看到 coarse，先说出「粗糙的」。',
      note: '核心义：粗糙的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was coarse.', chinese: '即使是初读者也能看出，这个结果是粗糙的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coarse.s1', en: 'They wanted a coarse answer, not a long speech.', zh: '他们要一个粗糙的的答复，不要长篇发言。', structure: 'coarse / 表示 / 粗糙的', grammar: 'adjective，围绕「粗糙的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are coarse.', right: 'The news is coarse.', reason: 'news 作主语时动词用单数。', rule: '先确定 coarse 是adjective，再套「粗糙的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coarse.q1', senseId: 'coarse.s1', errorType: 'meaning', type: '词义选择', prompt: '「coarse」在本条的核心意思是：', options: ['粗糙的', '完全相反的意思', '一种古代钱币'], answer: '粗糙的', explain: 'coarse：粗糙的。' },
      { id: 'coarse.q2', senseId: 'coarse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coarse?', options: ['粗糙的', 'a kind of ancient coin', 'the past tense of be'], answer: '粗糙的', explain: '对的是「粗糙的」。' },
      { id: 'coarse.q3', senseId: 'coarse.s1', errorType: 'grammar', type: '词义选择', prompt: 'coarse 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'coarse.q4', senseId: 'coarse.s1', errorType: 'meaning', type: '词源', prompt: '记 coarse 时，哪句更稳妥？', options: ['先锁住「粗糙的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「粗糙的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['粗糙的'] },
  });

  D('coast', {
    etymology: {
      origin: '拉丁语 costa「肋骨、边」。海岸是陆地的边。',
      prefix: null,
      root: { text: 'coast', gloss: '海岸' },
      suffix: null,
      history: [
        { label: 'coast', text: '拉丁语 costa「肋骨、边」。海岸是陆地的边。' },
        { label: '现在', text: '核心用法是：海岸。' },
      ],
      formationLogic: '考试认现在的用法：海岸。',
      mnemonic: '看到 coast，先说出「海岸」。',
      note: '考试认现在的用法：海岸。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coast.', chinese: '这一章反复回到同一个点：海岸。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coast.s1', en: 'Without that coast, the next paragraph is hard to follow.', zh: '没有这个海岸，下一段会很难读。', structure: 'coast / 表示 / 海岸', grammar: 'noun，围绕「海岸」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coast.', right: 'He gave me some advice about the coast.', reason: 'advice 不可数。名词 coast 的单复数按词典词形记。', rule: '先确定 coast 是noun，再套「海岸」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coast.q1', senseId: 'coast.s1', errorType: 'meaning', type: '词义选择', prompt: '「coast」在本条的核心意思是：', options: ['海岸', '完全相反的意思', '一种古代钱币'], answer: '海岸', explain: 'coast：海岸。' },
      { id: 'coast.q2', senseId: 'coast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coast?', options: ['海岸', 'a kind of ancient coin', 'the past tense of be'], answer: '海岸', explain: '对的是「海岸」。' },
      { id: 'coast.q3', senseId: 'coast.s1', errorType: 'grammar', type: '词义选择', prompt: 'coast 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coast.q4', senseId: 'coast.s1', errorType: 'meaning', type: '词源', prompt: '记 coast 时，哪句更稳妥？', options: ['先锁住「海岸」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「海岸」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['海岸'] },
  });

  D('coastal', {
    etymology: {
      origin: '英语派生：coast + -al，词性转到「沿海的」。',
      prefix: null,
      root: { text: 'coast', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coastal', text: '英语派生：coast + -al，词性转到「沿海的」。' },
        { label: '现在', text: '核心用法是：沿海的。' },
      ],
      formationLogic: '先认词干 coast，再看词尾。',
      mnemonic: '看到 coastal，先说出「沿海的」。',
      note: '先认词干 coast，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was coastal.', chinese: '即使是初读者也能看出，这个结果是沿海的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coastal.s1', en: 'They wanted a coastal answer, not a long speech.', zh: '他们要一个沿海的的答复，不要长篇发言。', structure: 'coastal / 表示 / 沿海的', grammar: 'adjective，围绕「沿海的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are coastal.', right: 'The news is coastal.', reason: 'news 作主语时动词用单数。', rule: '先确定 coastal 是adjective，再套「沿海的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coastal.q1', senseId: 'coastal.s1', errorType: 'meaning', type: '词义选择', prompt: '「coastal」在本条的核心意思是：', options: ['沿海的', '完全相反的意思', '一种古代钱币'], answer: '沿海的', explain: 'coastal：沿海的。' },
      { id: 'coastal.q2', senseId: 'coastal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coastal?', options: ['沿海的', 'a kind of ancient coin', 'the past tense of be'], answer: '沿海的', explain: '对的是「沿海的」。' },
      { id: 'coastal.q3', senseId: 'coastal.s1', errorType: 'grammar', type: '词义选择', prompt: 'coastal 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'coastal.q4', senseId: 'coastal.s1', errorType: 'meaning', type: '词源', prompt: '记 coastal 时，哪句更稳妥？', options: ['先锁住「沿海的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「沿海的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沿海的'] },
  });

  D('coaster', {
    etymology: {
      origin: '英语派生：coast + -er，词性转到「杯垫」。',
      prefix: null,
      root: { text: 'coast', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coaster', text: '英语派生：coast + -er，词性转到「杯垫」。' },
        { label: '现在', text: '核心用法是：杯垫。' },
      ],
      formationLogic: '先认词干 coast，再看词尾。',
      mnemonic: '看到 coaster，先说出「杯垫」。',
      note: '先认词干 coast，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coaster.', chinese: '这一章反复回到同一个点：杯垫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coaster.s1', en: 'Without that coaster, the next paragraph is hard to follow.', zh: '没有这个杯垫，下一段会很难读。', structure: 'coaster / 表示 / 杯垫', grammar: 'noun，围绕「杯垫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coaster.', right: 'He gave me some advice about the coaster.', reason: 'advice 不可数。名词 coaster 的单复数按词典词形记。', rule: '先确定 coaster 是noun，再套「杯垫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coaster.q1', senseId: 'coaster.s1', errorType: 'meaning', type: '词义选择', prompt: '「coaster」在本条的核心意思是：', options: ['杯垫', '完全相反的意思', '一种古代钱币'], answer: '杯垫', explain: 'coaster：杯垫。' },
      { id: 'coaster.q2', senseId: 'coaster.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coaster?', options: ['杯垫', 'a kind of ancient coin', 'the past tense of be'], answer: '杯垫', explain: '对的是「杯垫」。' },
      { id: 'coaster.q3', senseId: 'coaster.s1', errorType: 'grammar', type: '词义选择', prompt: 'coaster 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coaster.q4', senseId: 'coaster.s1', errorType: 'meaning', type: '词源', prompt: '记 coaster 时，哪句更稳妥？', options: ['先锁住「杯垫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「杯垫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['杯垫'] },
  });

  D('coat', {
    etymology: {
      origin: '古法语 cote。',
      prefix: null,
      root: { text: 'coat', gloss: '外套' },
      suffix: null,
      history: [
        { label: 'coat', text: '古法语 cote。' },
        { label: '现在', text: '核心用法是：外套。' },
      ],
      formationLogic: '考试认现在的用法：外套。',
      mnemonic: '看到 coat，先说出「外套」。',
      note: '考试认现在的用法：外套。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coat.', chinese: '这一章反复回到同一个点：外套。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coat.s1', en: 'Without that coat, the next paragraph is hard to follow.', zh: '没有这个外套，下一段会很难读。', structure: 'coat / 表示 / 外套', grammar: 'noun，围绕「外套」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coat.', right: 'He gave me some advice about the coat.', reason: 'advice 不可数。名词 coat 的单复数按词典词形记。', rule: '先确定 coat 是noun，再套「外套」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coat.q1', senseId: 'coat.s1', errorType: 'meaning', type: '词义选择', prompt: '「coat」在本条的核心意思是：', options: ['外套', '完全相反的意思', '一种古代钱币'], answer: '外套', explain: 'coat：外套。' },
      { id: 'coat.q2', senseId: 'coat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coat?', options: ['外套', 'a kind of ancient coin', 'the past tense of be'], answer: '外套', explain: '对的是「外套」。' },
      { id: 'coat.q3', senseId: 'coat.s1', errorType: 'grammar', type: '词义选择', prompt: 'coat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coat.q4', senseId: 'coat.s1', errorType: 'meaning', type: '词源', prompt: '记 coat 时，哪句更稳妥？', options: ['先锁住「外套」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外套」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外套'] },
  });

  D('coating', {
    etymology: {
      origin: '英语派生：coat + -ing，词性转到「涂层」。',
      prefix: null,
      root: { text: 'coat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coating', text: '英语派生：coat + -ing，词性转到「涂层」。' },
        { label: '现在', text: '核心用法是：涂层。' },
      ],
      formationLogic: '先认词干 coat，再看词尾。',
      mnemonic: '看到 coating，先说出「涂层」。',
      note: '先认词干 coat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coating.', chinese: '这一章反复回到同一个点：涂层。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coating.s1', en: 'Without that coating, the next paragraph is hard to follow.', zh: '没有这个涂层，下一段会很难读。', structure: 'coating / 表示 / 涂层', grammar: 'noun，围绕「涂层」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coating.', right: 'He gave me some advice about the coating.', reason: 'advice 不可数。名词 coating 的单复数按词典词形记。', rule: '先确定 coating 是noun，再套「涂层」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coating.q1', senseId: 'coating.s1', errorType: 'meaning', type: '词义选择', prompt: '「coating」在本条的核心意思是：', options: ['涂层', '完全相反的意思', '一种古代钱币'], answer: '涂层', explain: 'coating：涂层。' },
      { id: 'coating.q2', senseId: 'coating.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coating?', options: ['涂层', 'a kind of ancient coin', 'the past tense of be'], answer: '涂层', explain: '对的是「涂层」。' },
      { id: 'coating.q3', senseId: 'coating.s1', errorType: 'grammar', type: '词义选择', prompt: 'coating 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coating.q4', senseId: 'coating.s1', errorType: 'meaning', type: '词源', prompt: '记 coating 时，哪句更稳妥？', options: ['先锁住「涂层」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「涂层」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['涂层'] },
  });

  D('coax', {
    etymology: {
      origin: '现代英语常用词「coax」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coax', gloss: '哄劝' },
      suffix: null,
      history: [
        { label: 'coax', text: '现代英语常用词「coax」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：哄劝。' },
      ],
      formationLogic: '核心义：哄劝。',
      mnemonic: '看到 coax，先说出「哄劝」。',
      note: '核心义：哄劝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to coax before the office closed.', chinese: '他们同意在办公室关门前做这件事：哄劝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coax.s1', en: 'The deadline forced the team to coax that afternoon.', zh: '截止日期逼着小组在那天下午哄劝。', structure: 'coax / 表示 / 哄劝', grammar: 'verb，围绕「哄劝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She coaxed it yesterday without checking the real past form.', right: 'Check the past form of "coax" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 coax 是verb，再套「哄劝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coax.q1', senseId: 'coax.s1', errorType: 'meaning', type: '词义选择', prompt: '「coax」在本条的核心意思是：', options: ['哄劝', '完全相反的意思', '一种古代钱币'], answer: '哄劝', explain: 'coax：哄劝。' },
      { id: 'coax.q2', senseId: 'coax.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coax?', options: ['哄劝', 'a kind of ancient coin', 'the past tense of be'], answer: '哄劝', explain: '对的是「哄劝」。' },
      { id: 'coax.q3', senseId: 'coax.s1', errorType: 'grammar', type: '词义选择', prompt: 'coax 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'coax.q4', senseId: 'coax.s1', errorType: 'meaning', type: '词源', prompt: '记 coax 时，哪句更稳妥？', options: ['先锁住「哄劝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「哄劝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['哄劝'] },
  });

  D('cocaine', {
    etymology: {
      origin: '现代英语常用词「cocaine」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cocaine', gloss: '可卡因' },
      suffix: null,
      history: [
        { label: 'cocaine', text: '现代英语常用词「cocaine」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：可卡因。' },
      ],
      formationLogic: '核心义：可卡因。',
      mnemonic: '看到 cocaine，先说出「可卡因」。',
      note: '核心义：可卡因。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cocaine.', chinese: '这一章反复回到同一个点：可卡因。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cocaine.s1', en: 'Without that cocaine, the next paragraph is hard to follow.', zh: '没有这个可卡因，下一段会很难读。', structure: 'cocaine / 表示 / 可卡因', grammar: 'noun，围绕「可卡因」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cocaine.', right: 'He gave me some advice about the cocaine.', reason: 'advice 不可数。名词 cocaine 的单复数按词典词形记。', rule: '先确定 cocaine 是noun，再套「可卡因」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cocaine.q1', senseId: 'cocaine.s1', errorType: 'meaning', type: '词义选择', prompt: '「cocaine」在本条的核心意思是：', options: ['可卡因', '完全相反的意思', '一种古代钱币'], answer: '可卡因', explain: 'cocaine：可卡因。' },
      { id: 'cocaine.q2', senseId: 'cocaine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cocaine?', options: ['可卡因', 'a kind of ancient coin', 'the past tense of be'], answer: '可卡因', explain: '对的是「可卡因」。' },
      { id: 'cocaine.q3', senseId: 'cocaine.s1', errorType: 'grammar', type: '词义选择', prompt: 'cocaine 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cocaine.q4', senseId: 'cocaine.s1', errorType: 'meaning', type: '词源', prompt: '记 cocaine 时，哪句更稳妥？', options: ['先锁住「可卡因」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「可卡因」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['可卡因'] },
  });

  D('cock', {
    etymology: {
      origin: '现代英语常用词「cock」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cock', gloss: '公鸡' },
      suffix: null,
      history: [
        { label: 'cock', text: '现代英语常用词「cock」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：公鸡。' },
      ],
      formationLogic: '核心义：公鸡。',
      mnemonic: '看到 cock，先说出「公鸡」。',
      note: '核心义：公鸡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cock.', chinese: '这一章反复回到同一个点：公鸡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cock.s1', en: 'Without that cock, the next paragraph is hard to follow.', zh: '没有这个公鸡，下一段会很难读。', structure: 'cock / 表示 / 公鸡', grammar: 'noun，围绕「公鸡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cock.', right: 'He gave me some advice about the cock.', reason: 'advice 不可数。名词 cock 的单复数按词典词形记。', rule: '先确定 cock 是noun，再套「公鸡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cock.q1', senseId: 'cock.s1', errorType: 'meaning', type: '词义选择', prompt: '「cock」在本条的核心意思是：', options: ['公鸡', '完全相反的意思', '一种古代钱币'], answer: '公鸡', explain: 'cock：公鸡。' },
      { id: 'cock.q2', senseId: 'cock.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cock?', options: ['公鸡', 'a kind of ancient coin', 'the past tense of be'], answer: '公鸡', explain: '对的是「公鸡」。' },
      { id: 'cock.q3', senseId: 'cock.s1', errorType: 'grammar', type: '词义选择', prompt: 'cock 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cock.q4', senseId: 'cock.s1', errorType: 'meaning', type: '词源', prompt: '记 cock 时，哪句更稳妥？', options: ['先锁住「公鸡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「公鸡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['公鸡'] },
  });

  D('cockpit', {
    etymology: {
      origin: '现代英语常用词「cockpit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cockpit', gloss: '（飞机）驾驶舱' },
      suffix: null,
      history: [
        { label: 'cockpit', text: '现代英语常用词「cockpit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（飞机）驾驶舱。' },
      ],
      formationLogic: '核心义：（飞机）驾驶舱。',
      mnemonic: '看到 cockpit，先说出「（飞机）驾驶舱」。',
      note: '核心义：（飞机）驾驶舱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cockpit.', chinese: '这一章反复回到同一个点：（飞机）驾驶舱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cockpit.s1', en: 'Without that cockpit, the next paragraph is hard to follow.', zh: '没有这个（飞机）驾驶舱，下一段会很难读。', structure: 'cockpit / 表示 / （飞机）驾驶舱', grammar: 'noun，围绕「（飞机）驾驶舱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cockpit.', right: 'He gave me some advice about the cockpit.', reason: 'advice 不可数。名词 cockpit 的单复数按词典词形记。', rule: '先确定 cockpit 是noun，再套「（飞机）驾驶舱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cockpit.q1', senseId: 'cockpit.s1', errorType: 'meaning', type: '词义选择', prompt: '「cockpit」在本条的核心意思是：', options: ['（飞机）驾驶舱', '完全相反的意思', '一种古代钱币'], answer: '（飞机）驾驶舱', explain: 'cockpit：（飞机）驾驶舱。' },
      { id: 'cockpit.q2', senseId: 'cockpit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cockpit?', options: ['（飞机）驾驶舱', 'a kind of ancient coin', 'the past tense of be'], answer: '（飞机）驾驶舱', explain: '对的是「（飞机）驾驶舱」。' },
      { id: 'cockpit.q3', senseId: 'cockpit.s1', errorType: 'grammar', type: '词义选择', prompt: 'cockpit 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cockpit.q4', senseId: 'cockpit.s1', errorType: 'meaning', type: '词源', prompt: '记 cockpit 时，哪句更稳妥？', options: ['先锁住「（飞机）驾驶舱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（飞机）驾驶舱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（飞机）驾驶舱'] },
  });

  D('cocktail', {
    etymology: {
      origin: '现代英语常用词「cocktail」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cocktail', gloss: '鸡尾酒' },
      suffix: null,
      history: [
        { label: 'cocktail', text: '现代英语常用词「cocktail」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鸡尾酒。' },
      ],
      formationLogic: '核心义：鸡尾酒。',
      mnemonic: '看到 cocktail，先说出「鸡尾酒」。',
      note: '核心义：鸡尾酒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cocktail.', chinese: '这一章反复回到同一个点：鸡尾酒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cocktail.s1', en: 'Without that cocktail, the next paragraph is hard to follow.', zh: '没有这个鸡尾酒，下一段会很难读。', structure: 'cocktail / 表示 / 鸡尾酒', grammar: 'noun，围绕「鸡尾酒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cocktail.', right: 'He gave me some advice about the cocktail.', reason: 'advice 不可数。名词 cocktail 的单复数按词典词形记。', rule: '先确定 cocktail 是noun，再套「鸡尾酒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cocktail.q1', senseId: 'cocktail.s1', errorType: 'meaning', type: '词义选择', prompt: '「cocktail」在本条的核心意思是：', options: ['鸡尾酒', '完全相反的意思', '一种古代钱币'], answer: '鸡尾酒', explain: 'cocktail：鸡尾酒。' },
      { id: 'cocktail.q2', senseId: 'cocktail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cocktail?', options: ['鸡尾酒', 'a kind of ancient coin', 'the past tense of be'], answer: '鸡尾酒', explain: '对的是「鸡尾酒」。' },
      { id: 'cocktail.q3', senseId: 'cocktail.s1', errorType: 'grammar', type: '词义选择', prompt: 'cocktail 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cocktail.q4', senseId: 'cocktail.s1', errorType: 'meaning', type: '词源', prompt: '记 cocktail 时，哪句更稳妥？', options: ['先锁住「鸡尾酒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鸡尾酒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鸡尾酒'] },
  });

  D('coconut', {
    etymology: {
      origin: '现代英语常用词「coconut」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coconut', gloss: '椰子' },
      suffix: null,
      history: [
        { label: 'coconut', text: '现代英语常用词「coconut」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：椰子。' },
      ],
      formationLogic: '核心义：椰子。',
      mnemonic: '看到 coconut，先说出「椰子」。',
      note: '核心义：椰子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coconut.', chinese: '这一章反复回到同一个点：椰子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coconut.s1', en: 'Without that coconut, the next paragraph is hard to follow.', zh: '没有这个椰子，下一段会很难读。', structure: 'coconut / 表示 / 椰子', grammar: 'noun，围绕「椰子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coconut.', right: 'He gave me some advice about the coconut.', reason: 'advice 不可数。名词 coconut 的单复数按词典词形记。', rule: '先确定 coconut 是noun，再套「椰子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coconut.q1', senseId: 'coconut.s1', errorType: 'meaning', type: '词义选择', prompt: '「coconut」在本条的核心意思是：', options: ['椰子', '完全相反的意思', '一种古代钱币'], answer: '椰子', explain: 'coconut：椰子。' },
      { id: 'coconut.q2', senseId: 'coconut.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coconut?', options: ['椰子', 'a kind of ancient coin', 'the past tense of be'], answer: '椰子', explain: '对的是「椰子」。' },
      { id: 'coconut.q3', senseId: 'coconut.s1', errorType: 'grammar', type: '词义选择', prompt: 'coconut 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coconut.q4', senseId: 'coconut.s1', errorType: 'meaning', type: '词源', prompt: '记 coconut 时，哪句更稳妥？', options: ['先锁住「椰子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「椰子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['椰子'] },
  });

  D('code', {
    etymology: {
      origin: '拉丁语 codex「书、木片」。',
      prefix: null,
      root: { text: 'code', gloss: '代码' },
      suffix: null,
      history: [
        { label: 'code', text: '拉丁语 codex「书、木片」。' },
        { label: '现在', text: '核心用法是：代码。' },
      ],
      formationLogic: '考试认现在的用法：代码。',
      mnemonic: '看到 code，先说出「代码」。',
      note: '考试认现在的用法：代码。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one code.', chinese: '这一章反复回到同一个点：代码。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'code.s1', en: 'Without that code, the next paragraph is hard to follow.', zh: '没有这个代码，下一段会很难读。', structure: 'code / 表示 / 代码', grammar: 'noun，围绕「代码」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the code.', right: 'He gave me some advice about the code.', reason: 'advice 不可数。名词 code 的单复数按词典词形记。', rule: '先确定 code 是noun，再套「代码」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'code.q1', senseId: 'code.s1', errorType: 'meaning', type: '词义选择', prompt: '「code」在本条的核心意思是：', options: ['代码', '完全相反的意思', '一种古代钱币'], answer: '代码', explain: 'code：代码。' },
      { id: 'code.q2', senseId: 'code.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches code?', options: ['代码', 'a kind of ancient coin', 'the past tense of be'], answer: '代码', explain: '对的是「代码」。' },
      { id: 'code.q3', senseId: 'code.s1', errorType: 'grammar', type: '词义选择', prompt: 'code 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'code.q4', senseId: 'code.s1', errorType: 'meaning', type: '词源', prompt: '记 code 时，哪句更稳妥？', options: ['先锁住「代码」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「代码」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['代码'] },
  });

  D('code word', {
    etymology: {
      origin: '现代英语固定说法「code word」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'code word', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'code word', text: '现代英语固定说法「code word」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：暗语。' },
      ],
      formationLogic: '核心义：暗语。',
      mnemonic: '看到 code word，先说出「暗语」。',
      note: '核心义：暗语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "code word" and asked the class to keep it as one unit.', chinese: '老师把「code word」圈出来，让全班把它当成一个整体。它表示暗语。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'code word.s1', en: 'In the margin she wrote "code word" so nobody would split the phrase.', zh: '她在页边写下「code word」，免得有人把这个说法拆开。意思是暗语。', structure: 'code word / 表示 / 暗语', grammar: 'noun，围绕「暗语」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of code word and lost the point.', right: 'Keep "code word" together: it means 暗语.', reason: '「code word」要整块理解。', rule: '先确定 code word 是noun，再套「暗语」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'code word.q1', senseId: 'code word.s1', errorType: 'meaning', type: '词义选择', prompt: '「code word」在本条的核心意思是：', options: ['暗语', '完全相反的意思', '一种古代钱币'], answer: '暗语', explain: 'code word：暗语。' },
      { id: 'code word.q2', senseId: 'code word.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches code word?', options: ['暗语', 'a kind of ancient coin', 'the past tense of be'], answer: '暗语', explain: '对的是「暗语」。' },
      { id: 'code word.q3', senseId: 'code word.s1', errorType: 'grammar', type: '词义选择', prompt: 'code word 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'code word.q4', senseId: 'code word.s1', errorType: 'meaning', type: '词源', prompt: '记 code word 时，哪句更稳妥？', options: ['先锁住「暗语」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「暗语」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暗语'] },
  });

  D('coexist', {
    etymology: {
      origin: '英语派生：coex + -ist，词性转到「共存」。',
      prefix: null,
      root: { text: 'coex', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coexist', text: '英语派生：coex + -ist，词性转到「共存」。' },
        { label: '现在', text: '核心用法是：共存。' },
      ],
      formationLogic: '先认词干 coex，再看词尾。',
      mnemonic: '看到 coexist，先说出「共存」。',
      note: '先认词干 coex，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to coexist before the office closed.', chinese: '他们同意在办公室关门前做这件事：共存。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coexist.s1', en: 'The deadline forced the team to coexist that afternoon.', zh: '截止日期逼着小组在那天下午共存。', structure: 'coexist / 表示 / 共存', grammar: 'verb，围绕「共存」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She coexisted it yesterday without checking the real past form.', right: 'Check the past form of "coexist" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 coexist 是verb，再套「共存」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coexist.q1', senseId: 'coexist.s1', errorType: 'meaning', type: '词义选择', prompt: '「coexist」在本条的核心意思是：', options: ['共存', '完全相反的意思', '一种古代钱币'], answer: '共存', explain: 'coexist：共存。' },
      { id: 'coexist.q2', senseId: 'coexist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coexist?', options: ['共存', 'a kind of ancient coin', 'the past tense of be'], answer: '共存', explain: '对的是「共存」。' },
      { id: 'coexist.q3', senseId: 'coexist.s1', errorType: 'grammar', type: '词义选择', prompt: 'coexist 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'coexist.q4', senseId: 'coexist.s1', errorType: 'meaning', type: '词源', prompt: '记 coexist 时，哪句更稳妥？', options: ['先锁住「共存」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「共存」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['共存'] },
  });

  D('coexisting', {
    etymology: {
      origin: '英语派生：coexist + -ing，词性转到「共存的」。',
      prefix: null,
      root: { text: 'coexist', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coexisting', text: '英语派生：coexist + -ing，词性转到「共存的」。' },
        { label: '现在', text: '核心用法是：共存的。' },
      ],
      formationLogic: '先认词干 coexist，再看词尾。',
      mnemonic: '看到 coexisting，先说出「共存的」。',
      note: '先认词干 coexist，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was coexisting.', chinese: '即使是初读者也能看出，这个结果是共存的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coexisting.s1', en: 'They wanted a coexisting answer, not a long speech.', zh: '他们要一个共存的的答复，不要长篇发言。', structure: 'coexisting / 表示 / 共存的', grammar: 'adjective，围绕「共存的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are coexisting.', right: 'The news is coexisting.', reason: 'news 作主语时动词用单数。', rule: '先确定 coexisting 是adjective，再套「共存的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coexisting.q1', senseId: 'coexisting.s1', errorType: 'meaning', type: '词义选择', prompt: '「coexisting」在本条的核心意思是：', options: ['共存的', '完全相反的意思', '一种古代钱币'], answer: '共存的', explain: 'coexisting：共存的。' },
      { id: 'coexisting.q2', senseId: 'coexisting.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coexisting?', options: ['共存的', 'a kind of ancient coin', 'the past tense of be'], answer: '共存的', explain: '对的是「共存的」。' },
      { id: 'coexisting.q3', senseId: 'coexisting.s1', errorType: 'grammar', type: '词义选择', prompt: 'coexisting 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'coexisting.q4', senseId: 'coexisting.s1', errorType: 'meaning', type: '词源', prompt: '记 coexisting 时，哪句更稳妥？', options: ['先锁住「共存的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「共存的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['共存的'] },
  });

  D('coffee', {
    etymology: {
      origin: '阿拉伯语 qahwa，经土耳其语。',
      prefix: null,
      root: { text: 'coffee', gloss: '咖啡' },
      suffix: null,
      history: [
        { label: 'coffee', text: '阿拉伯语 qahwa，经土耳其语。' },
        { label: '现在', text: '核心用法是：咖啡。' },
      ],
      formationLogic: '考试认现在的用法：咖啡。',
      mnemonic: '看到 coffee，先说出「咖啡」。',
      note: '考试认现在的用法：咖啡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coffee.', chinese: '这一章反复回到同一个点：咖啡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coffee.s1', en: 'Without that coffee, the next paragraph is hard to follow.', zh: '没有这个咖啡，下一段会很难读。', structure: 'coffee / 表示 / 咖啡', grammar: 'noun，围绕「咖啡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coffee.', right: 'He gave me some advice about the coffee.', reason: 'advice 不可数。名词 coffee 的单复数按词典词形记。', rule: '先确定 coffee 是noun，再套「咖啡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coffee.q1', senseId: 'coffee.s1', errorType: 'meaning', type: '词义选择', prompt: '「coffee」在本条的核心意思是：', options: ['咖啡', '完全相反的意思', '一种古代钱币'], answer: '咖啡', explain: 'coffee：咖啡。' },
      { id: 'coffee.q2', senseId: 'coffee.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coffee?', options: ['咖啡', 'a kind of ancient coin', 'the past tense of be'], answer: '咖啡', explain: '对的是「咖啡」。' },
      { id: 'coffee.q3', senseId: 'coffee.s1', errorType: 'grammar', type: '词义选择', prompt: 'coffee 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coffee.q4', senseId: 'coffee.s1', errorType: 'meaning', type: '词源', prompt: '记 coffee 时，哪句更稳妥？', options: ['先锁住「咖啡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咖啡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咖啡'] },
  });

  D('coffee shop', {
    etymology: {
      origin: '现代英语固定说法「coffee shop」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'coffee shop', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'coffee shop', text: '现代英语固定说法「coffee shop」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：咖啡馆。' },
      ],
      formationLogic: '核心义：咖啡馆。',
      mnemonic: '看到 coffee shop，先说出「咖啡馆」。',
      note: '核心义：咖啡馆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "coffee shop" and asked the class to keep it as one unit.', chinese: '老师把「coffee shop」圈出来，让全班把它当成一个整体。它表示咖啡馆。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coffee shop.s1', en: 'In the margin she wrote "coffee shop" so nobody would split the phrase.', zh: '她在页边写下「coffee shop」，免得有人把这个说法拆开。意思是咖啡馆。', structure: 'coffee shop / 表示 / 咖啡馆', grammar: 'noun，围绕「咖啡馆」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of coffee shop and lost the point.', right: 'Keep "coffee shop" together: it means 咖啡馆.', reason: '「coffee shop」要整块理解。', rule: '先确定 coffee shop 是noun，再套「咖啡馆」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coffee shop.q1', senseId: 'coffee shop.s1', errorType: 'meaning', type: '词义选择', prompt: '「coffee shop」在本条的核心意思是：', options: ['咖啡馆', '完全相反的意思', '一种古代钱币'], answer: '咖啡馆', explain: 'coffee shop：咖啡馆。' },
      { id: 'coffee shop.q2', senseId: 'coffee shop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coffee shop?', options: ['咖啡馆', 'a kind of ancient coin', 'the past tense of be'], answer: '咖啡馆', explain: '对的是「咖啡馆」。' },
      { id: 'coffee shop.q3', senseId: 'coffee shop.s1', errorType: 'grammar', type: '词义选择', prompt: 'coffee shop 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coffee shop.q4', senseId: 'coffee shop.s1', errorType: 'meaning', type: '词源', prompt: '记 coffee shop 时，哪句更稳妥？', options: ['先锁住「咖啡馆」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咖啡馆」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咖啡馆'] },
  });

  D('cog', {
    etymology: {
      origin: '现代英语常用词「cog」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cog', gloss: '齿轮' },
      suffix: null,
      history: [
        { label: 'cog', text: '现代英语常用词「cog」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：齿轮。' },
      ],
      formationLogic: '核心义：齿轮。',
      mnemonic: '看到 cog，先说出「齿轮」。',
      note: '核心义：齿轮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cog.', chinese: '这一章反复回到同一个点：齿轮。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cog.s1', en: 'Without that cog, the next paragraph is hard to follow.', zh: '没有这个齿轮，下一段会很难读。', structure: 'cog / 表示 / 齿轮', grammar: 'noun，围绕「齿轮」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cog.', right: 'He gave me some advice about the cog.', reason: 'advice 不可数。名词 cog 的单复数按词典词形记。', rule: '先确定 cog 是noun，再套「齿轮」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cog.q1', senseId: 'cog.s1', errorType: 'meaning', type: '词义选择', prompt: '「cog」在本条的核心意思是：', options: ['齿轮', '完全相反的意思', '一种古代钱币'], answer: '齿轮', explain: 'cog：齿轮。' },
      { id: 'cog.q2', senseId: 'cog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cog?', options: ['齿轮', 'a kind of ancient coin', 'the past tense of be'], answer: '齿轮', explain: '对的是「齿轮」。' },
      { id: 'cog.q3', senseId: 'cog.s1', errorType: 'grammar', type: '词义选择', prompt: 'cog 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cog.q4', senseId: 'cog.s1', errorType: 'meaning', type: '词源', prompt: '记 cog 时，哪句更稳妥？', options: ['先锁住「齿轮」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「齿轮」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['齿轮'] },
  });

  D('cognitive', {
    etymology: {
      origin: '英语派生：cognit + -ive，词性转到「认知的」。',
      prefix: null,
      root: { text: 'cognit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cognitive', text: '英语派生：cognit + -ive，词性转到「认知的」。' },
        { label: '现在', text: '核心用法是：认知的。' },
      ],
      formationLogic: '先认词干 cognit，再看词尾。',
      mnemonic: '看到 cognitive，先说出「认知的」。',
      note: '先认词干 cognit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cognitive.', chinese: '即使是初读者也能看出，这个结果是认知的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cognitive.s1', en: 'They wanted a cognitive answer, not a long speech.', zh: '他们要一个认知的的答复，不要长篇发言。', structure: 'cognitive / 表示 / 认知的', grammar: 'adjective，围绕「认知的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cognitive.', right: 'The news is cognitive.', reason: 'news 作主语时动词用单数。', rule: '先确定 cognitive 是adjective，再套「认知的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cognitive.q1', senseId: 'cognitive.s1', errorType: 'meaning', type: '词义选择', prompt: '「cognitive」在本条的核心意思是：', options: ['认知的', '完全相反的意思', '一种古代钱币'], answer: '认知的', explain: 'cognitive：认知的。' },
      { id: 'cognitive.q2', senseId: 'cognitive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cognitive?', options: ['认知的', 'a kind of ancient coin', 'the past tense of be'], answer: '认知的', explain: '对的是「认知的」。' },
      { id: 'cognitive.q3', senseId: 'cognitive.s1', errorType: 'grammar', type: '词义选择', prompt: 'cognitive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cognitive.q4', senseId: 'cognitive.s1', errorType: 'meaning', type: '词源', prompt: '记 cognitive 时，哪句更稳妥？', options: ['先锁住「认知的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「认知的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['认知的'] },
  });

  D('cohabit', {
    etymology: {
      origin: '现代英语常用词「cohabit」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cohabit', gloss: '同居' },
      suffix: null,
      history: [
        { label: 'cohabit', text: '现代英语常用词「cohabit」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同居。' },
      ],
      formationLogic: '核心义：同居。',
      mnemonic: '看到 cohabit，先说出「同居」。',
      note: '核心义：同居。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cohabit before the office closed.', chinese: '他们同意在办公室关门前做这件事：同居。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cohabit.s1', en: 'The deadline forced the team to cohabit that afternoon.', zh: '截止日期逼着小组在那天下午同居。', structure: 'cohabit / 表示 / 同居', grammar: 'verb，围绕「同居」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cohabited it yesterday without checking the real past form.', right: 'Check the past form of "cohabit" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cohabit 是verb，再套「同居」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cohabit.q1', senseId: 'cohabit.s1', errorType: 'meaning', type: '词义选择', prompt: '「cohabit」在本条的核心意思是：', options: ['同居', '完全相反的意思', '一种古代钱币'], answer: '同居', explain: 'cohabit：同居。' },
      { id: 'cohabit.q2', senseId: 'cohabit.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cohabit?', options: ['同居', 'a kind of ancient coin', 'the past tense of be'], answer: '同居', explain: '对的是「同居」。' },
      { id: 'cohabit.q3', senseId: 'cohabit.s1', errorType: 'grammar', type: '词义选择', prompt: 'cohabit 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cohabit.q4', senseId: 'cohabit.s1', errorType: 'meaning', type: '词源', prompt: '记 cohabit 时，哪句更稳妥？', options: ['先锁住「同居」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同居」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同居'] },
  });

  D('coherent', {
    etymology: {
      origin: '现代英语常用词「coherent」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coherent', gloss: '连贯的' },
      suffix: null,
      history: [
        { label: 'coherent', text: '现代英语常用词「coherent」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：连贯的。' },
      ],
      formationLogic: '核心义：连贯的。',
      mnemonic: '看到 coherent，先说出「连贯的」。',
      note: '核心义：连贯的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was coherent.', chinese: '即使是初读者也能看出，这个结果是连贯的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coherent.s1', en: 'They wanted a coherent answer, not a long speech.', zh: '他们要一个连贯的的答复，不要长篇发言。', structure: 'coherent / 表示 / 连贯的', grammar: 'adjective，围绕「连贯的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are coherent.', right: 'The news is coherent.', reason: 'news 作主语时动词用单数。', rule: '先确定 coherent 是adjective，再套「连贯的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coherent.q1', senseId: 'coherent.s1', errorType: 'meaning', type: '词义选择', prompt: '「coherent」在本条的核心意思是：', options: ['连贯的', '完全相反的意思', '一种古代钱币'], answer: '连贯的', explain: 'coherent：连贯的。' },
      { id: 'coherent.q2', senseId: 'coherent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coherent?', options: ['连贯的', 'a kind of ancient coin', 'the past tense of be'], answer: '连贯的', explain: '对的是「连贯的」。' },
      { id: 'coherent.q3', senseId: 'coherent.s1', errorType: 'grammar', type: '词义选择', prompt: 'coherent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'coherent.q4', senseId: 'coherent.s1', errorType: 'meaning', type: '词源', prompt: '记 coherent 时，哪句更稳妥？', options: ['先锁住「连贯的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连贯的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连贯的'] },
  });

  D('cohesion', {
    etymology: {
      origin: '英语派生：cohe + -sion，词性转到「凝聚力」。',
      prefix: null,
      root: { text: 'cohe', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cohesion', text: '英语派生：cohe + -sion，词性转到「凝聚力」。' },
        { label: '现在', text: '核心用法是：凝聚力。' },
      ],
      formationLogic: '先认词干 cohe，再看词尾。',
      mnemonic: '看到 cohesion，先说出「凝聚力」。',
      note: '先认词干 cohe，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cohesion.', chinese: '这一章反复回到同一个点：凝聚力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cohesion.s1', en: 'Without that cohesion, the next paragraph is hard to follow.', zh: '没有这个凝聚力，下一段会很难读。', structure: 'cohesion / 表示 / 凝聚力', grammar: 'noun，围绕「凝聚力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cohesion.', right: 'He gave me some advice about the cohesion.', reason: 'advice 不可数。名词 cohesion 的单复数按词典词形记。', rule: '先确定 cohesion 是noun，再套「凝聚力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cohesion.q1', senseId: 'cohesion.s1', errorType: 'meaning', type: '词义选择', prompt: '「cohesion」在本条的核心意思是：', options: ['凝聚力', '完全相反的意思', '一种古代钱币'], answer: '凝聚力', explain: 'cohesion：凝聚力。' },
      { id: 'cohesion.q2', senseId: 'cohesion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cohesion?', options: ['凝聚力', 'a kind of ancient coin', 'the past tense of be'], answer: '凝聚力', explain: '对的是「凝聚力」。' },
      { id: 'cohesion.q3', senseId: 'cohesion.s1', errorType: 'grammar', type: '词义选择', prompt: 'cohesion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cohesion.q4', senseId: 'cohesion.s1', errorType: 'meaning', type: '词源', prompt: '记 cohesion 时，哪句更稳妥？', options: ['先锁住「凝聚力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「凝聚力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['凝聚力'] },
  });

  D('coil', {
    etymology: {
      origin: '现代英语常用词「coil」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coil', gloss: '线圈' },
      suffix: null,
      history: [
        { label: 'coil', text: '现代英语常用词「coil」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：线圈。' },
      ],
      formationLogic: '核心义：线圈。',
      mnemonic: '看到 coil，先说出「线圈」。',
      note: '核心义：线圈。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coil.', chinese: '这一章反复回到同一个点：线圈。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coil.s1', en: 'Without that coil, the next paragraph is hard to follow.', zh: '没有这个线圈，下一段会很难读。', structure: 'coil / 表示 / 线圈', grammar: 'noun，围绕「线圈」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coil.', right: 'He gave me some advice about the coil.', reason: 'advice 不可数。名词 coil 的单复数按词典词形记。', rule: '先确定 coil 是noun，再套「线圈」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coil.q1', senseId: 'coil.s1', errorType: 'meaning', type: '词义选择', prompt: '「coil」在本条的核心意思是：', options: ['线圈', '完全相反的意思', '一种古代钱币'], answer: '线圈', explain: 'coil：线圈。' },
      { id: 'coil.q2', senseId: 'coil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coil?', options: ['线圈', 'a kind of ancient coin', 'the past tense of be'], answer: '线圈', explain: '对的是「线圈」。' },
      { id: 'coil.q3', senseId: 'coil.s1', errorType: 'grammar', type: '词义选择', prompt: 'coil 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coil.q4', senseId: 'coil.s1', errorType: 'meaning', type: '词源', prompt: '记 coil 时，哪句更稳妥？', options: ['先锁住「线圈」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「线圈」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['线圈'] },
  });

  D('coiled', {
    etymology: {
      origin: '现代英语常用词「coiled」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coiled', gloss: '盘绕的' },
      suffix: null,
      history: [
        { label: 'coiled', text: '现代英语常用词「coiled」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：盘绕的。' },
      ],
      formationLogic: '核心义：盘绕的。',
      mnemonic: '看到 coiled，先说出「盘绕的」。',
      note: '核心义：盘绕的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was coiled.', chinese: '即使是初读者也能看出，这个结果是盘绕的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coiled.s1', en: 'They wanted a coiled answer, not a long speech.', zh: '他们要一个盘绕的的答复，不要长篇发言。', structure: 'coiled / 表示 / 盘绕的', grammar: 'adjective，围绕「盘绕的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are coiled.', right: 'The news is coiled.', reason: 'news 作主语时动词用单数。', rule: '先确定 coiled 是adjective，再套「盘绕的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coiled.q1', senseId: 'coiled.s1', errorType: 'meaning', type: '词义选择', prompt: '「coiled」在本条的核心意思是：', options: ['盘绕的', '完全相反的意思', '一种古代钱币'], answer: '盘绕的', explain: 'coiled：盘绕的。' },
      { id: 'coiled.q2', senseId: 'coiled.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coiled?', options: ['盘绕的', 'a kind of ancient coin', 'the past tense of be'], answer: '盘绕的', explain: '对的是「盘绕的」。' },
      { id: 'coiled.q3', senseId: 'coiled.s1', errorType: 'grammar', type: '词义选择', prompt: 'coiled 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'coiled.q4', senseId: 'coiled.s1', errorType: 'meaning', type: '词源', prompt: '记 coiled 时，哪句更稳妥？', options: ['先锁住「盘绕的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「盘绕的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['盘绕的'] },
  });

  D('coin', {
    etymology: {
      origin: '拉丁语 cuneus「楔子」。早期用楔形印戳打钱。',
      prefix: null,
      root: { text: 'coin', gloss: '硬币' },
      suffix: null,
      history: [
        { label: 'coin', text: '拉丁语 cuneus「楔子」。早期用楔形印戳打钱。' },
        { label: '现在', text: '核心用法是：硬币。' },
      ],
      formationLogic: '考试认现在的用法：硬币。',
      mnemonic: '看到 coin，先说出「硬币」。',
      note: '考试认现在的用法：硬币。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coin.', chinese: '这一章反复回到同一个点：硬币。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coin.s1', en: 'Without that coin, the next paragraph is hard to follow.', zh: '没有这个硬币，下一段会很难读。', structure: 'coin / 表示 / 硬币', grammar: 'noun，围绕「硬币」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coin.', right: 'He gave me some advice about the coin.', reason: 'advice 不可数。名词 coin 的单复数按词典词形记。', rule: '先确定 coin 是noun，再套「硬币」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coin.q1', senseId: 'coin.s1', errorType: 'meaning', type: '词义选择', prompt: '「coin」在本条的核心意思是：', options: ['硬币', '完全相反的意思', '一种古代钱币'], answer: '硬币', explain: 'coin：硬币。' },
      { id: 'coin.q2', senseId: 'coin.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coin?', options: ['硬币', 'a kind of ancient coin', 'the past tense of be'], answer: '硬币', explain: '对的是「硬币」。' },
      { id: 'coin.q3', senseId: 'coin.s1', errorType: 'grammar', type: '词义选择', prompt: 'coin 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coin.q4', senseId: 'coin.s1', errorType: 'meaning', type: '词源', prompt: '记 coin 时，哪句更稳妥？', options: ['先锁住「硬币」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「硬币」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['硬币'] },
  });

  D('coincide', {
    etymology: {
      origin: '现代英语常用词「coincide」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coincide', gloss: '同时发生' },
      suffix: null,
      history: [
        { label: 'coincide', text: '现代英语常用词「coincide」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同时发生。' },
      ],
      formationLogic: '核心义：同时发生。',
      mnemonic: '看到 coincide，先说出「同时发生」。',
      note: '核心义：同时发生。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to coincide before the office closed.', chinese: '他们同意在办公室关门前做这件事：同时发生。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coincide.s1', en: 'The deadline forced the team to coincide that afternoon.', zh: '截止日期逼着小组在那天下午同时发生。', structure: 'coincide / 表示 / 同时发生', grammar: 'verb，围绕「同时发生」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She coincideed it yesterday without checking the real past form.', right: 'Check the past form of "coincide" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 coincide 是verb，再套「同时发生」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coincide.q1', senseId: 'coincide.s1', errorType: 'meaning', type: '词义选择', prompt: '「coincide」在本条的核心意思是：', options: ['同时发生', '完全相反的意思', '一种古代钱币'], answer: '同时发生', explain: 'coincide：同时发生。' },
      { id: 'coincide.q2', senseId: 'coincide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coincide?', options: ['同时发生', 'a kind of ancient coin', 'the past tense of be'], answer: '同时发生', explain: '对的是「同时发生」。' },
      { id: 'coincide.q3', senseId: 'coincide.s1', errorType: 'grammar', type: '词义选择', prompt: 'coincide 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'coincide.q4', senseId: 'coincide.s1', errorType: 'meaning', type: '词源', prompt: '记 coincide 时，哪句更稳妥？', options: ['先锁住「同时发生」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同时发生」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同时发生'] },
  });

  D('coincident', {
    etymology: {
      origin: '现代英语常用词「coincident」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coincident', gloss: '同时发生的' },
      suffix: null,
      history: [
        { label: 'coincident', text: '现代英语常用词「coincident」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：同时发生的。' },
      ],
      formationLogic: '核心义：同时发生的。',
      mnemonic: '看到 coincident，先说出「同时发生的」。',
      note: '核心义：同时发生的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was coincident.', chinese: '即使是初读者也能看出，这个结果是同时发生的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coincident.s1', en: 'They wanted a coincident answer, not a long speech.', zh: '他们要一个同时发生的的答复，不要长篇发言。', structure: 'coincident / 表示 / 同时发生的', grammar: 'adjective，围绕「同时发生的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are coincident.', right: 'The news is coincident.', reason: 'news 作主语时动词用单数。', rule: '先确定 coincident 是adjective，再套「同时发生的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coincident.q1', senseId: 'coincident.s1', errorType: 'meaning', type: '词义选择', prompt: '「coincident」在本条的核心意思是：', options: ['同时发生的', '完全相反的意思', '一种古代钱币'], answer: '同时发生的', explain: 'coincident：同时发生的。' },
      { id: 'coincident.q2', senseId: 'coincident.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coincident?', options: ['同时发生的', 'a kind of ancient coin', 'the past tense of be'], answer: '同时发生的', explain: '对的是「同时发生的」。' },
      { id: 'coincident.q3', senseId: 'coincident.s1', errorType: 'grammar', type: '词义选择', prompt: 'coincident 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'coincident.q4', senseId: 'coincident.s1', errorType: 'meaning', type: '词源', prompt: '记 coincident 时，哪句更稳妥？', options: ['先锁住「同时发生的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同时发生的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同时发生的'] },
  });

  D('coins', {
    etymology: {
      origin: '现代英语常用词「coins」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'coins', gloss: '硬币' },
      suffix: null,
      history: [
        { label: 'coins', text: '现代英语常用词「coins」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：硬币。' },
      ],
      formationLogic: '核心义：硬币。',
      mnemonic: '看到 coins，先说出「硬币」。',
      note: '核心义：硬币。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one coins.', chinese: '这一章反复回到同一个点：硬币。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coins.s1', en: 'Without that coins, the next paragraph is hard to follow.', zh: '没有这个硬币，下一段会很难读。', structure: 'coins / 表示 / 硬币', grammar: 'noun，围绕「硬币」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the coins.', right: 'He gave me some advice about the coins.', reason: 'advice 不可数。名词 coins 的单复数按词典词形记。', rule: '先确定 coins 是noun，再套「硬币」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coins.q1', senseId: 'coins.s1', errorType: 'meaning', type: '词义选择', prompt: '「coins」在本条的核心意思是：', options: ['硬币', '完全相反的意思', '一种古代钱币'], answer: '硬币', explain: 'coins：硬币。' },
      { id: 'coins.q2', senseId: 'coins.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coins?', options: ['硬币', 'a kind of ancient coin', 'the past tense of be'], answer: '硬币', explain: '对的是「硬币」。' },
      { id: 'coins.q3', senseId: 'coins.s1', errorType: 'grammar', type: '词义选择', prompt: 'coins 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'coins.q4', senseId: 'coins.s1', errorType: 'meaning', type: '词源', prompt: '记 coins 时，哪句更稳妥？', options: ['先锁住「硬币」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「硬币」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['硬币'] },
  });

  D('cold', {
    etymology: {
      origin: '古英语 cald。',
      prefix: null,
      root: { text: 'cold', gloss: '冷的' },
      suffix: null,
      history: [
        { label: 'cold', text: '古英语 cald。' },
        { label: '现在', text: '核心用法是：冷的。' },
      ],
      formationLogic: '考试认现在的用法：冷的。',
      mnemonic: '看到 cold，先说出「冷的」。',
      note: '考试认现在的用法：冷的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cold.', chinese: '即使是初读者也能看出，这个结果是冷的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cold.s1', en: 'They wanted a cold answer, not a long speech.', zh: '他们要一个冷的的答复，不要长篇发言。', structure: 'cold / 表示 / 冷的', grammar: 'adjective，围绕「冷的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cold.', right: 'The news is cold.', reason: 'news 作主语时动词用单数。', rule: '先确定 cold 是adjective，再套「冷的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cold.q1', senseId: 'cold.s1', errorType: 'meaning', type: '词义选择', prompt: '「cold」在本条的核心意思是：', options: ['冷的', '完全相反的意思', '一种古代钱币'], answer: '冷的', explain: 'cold：冷的。' },
      { id: 'cold.q2', senseId: 'cold.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cold?', options: ['冷的', 'a kind of ancient coin', 'the past tense of be'], answer: '冷的', explain: '对的是「冷的」。' },
      { id: 'cold.q3', senseId: 'cold.s1', errorType: 'grammar', type: '词义选择', prompt: 'cold 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cold.q4', senseId: 'cold.s1', errorType: 'meaning', type: '词源', prompt: '记 cold 时，哪句更稳妥？', options: ['先锁住「冷的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冷的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冷的'] },
  });

  D('collaborate', {
    etymology: {
      origin: '现代英语常用词「collaborate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'collaborate', gloss: '合作' },
      suffix: null,
      history: [
        { label: 'collaborate', text: '现代英语常用词「collaborate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：合作。' },
      ],
      formationLogic: '核心义：合作。',
      mnemonic: '看到 collaborate，先说出「合作」。',
      note: '核心义：合作。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to collaborate before the office closed.', chinese: '他们同意在办公室关门前做这件事：合作。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collaborate.s1', en: 'The deadline forced the team to collaborate that afternoon.', zh: '截止日期逼着小组在那天下午合作。', structure: 'collaborate / 表示 / 合作', grammar: 'verb，围绕「合作」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She collaborateed it yesterday without checking the real past form.', right: 'Check the past form of "collaborate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 collaborate 是verb，再套「合作」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collaborate.q1', senseId: 'collaborate.s1', errorType: 'meaning', type: '词义选择', prompt: '「collaborate」在本条的核心意思是：', options: ['合作', '完全相反的意思', '一种古代钱币'], answer: '合作', explain: 'collaborate：合作。' },
      { id: 'collaborate.q2', senseId: 'collaborate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collaborate?', options: ['合作', 'a kind of ancient coin', 'the past tense of be'], answer: '合作', explain: '对的是「合作」。' },
      { id: 'collaborate.q3', senseId: 'collaborate.s1', errorType: 'grammar', type: '词义选择', prompt: 'collaborate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'collaborate.q4', senseId: 'collaborate.s1', errorType: 'meaning', type: '词源', prompt: '记 collaborate 时，哪句更稳妥？', options: ['先锁住「合作」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「合作」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合作'] },
  });

  D('collapse', {
    etymology: {
      origin: '拉丁语 collabi「倒在一起」。',
      prefix: null,
      root: { text: 'collapse', gloss: '倒塌' },
      suffix: null,
      history: [
        { label: 'collapse', text: '拉丁语 collabi「倒在一起」。' },
        { label: '现在', text: '核心用法是：倒塌。' },
      ],
      formationLogic: '考试认现在的用法：倒塌。',
      mnemonic: '看到 collapse，先说出「倒塌」。',
      note: '考试认现在的用法：倒塌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to collapse before the office closed.', chinese: '他们同意在办公室关门前做这件事：倒塌。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collapse.s1', en: 'The deadline forced the team to collapse that afternoon.', zh: '截止日期逼着小组在那天下午倒塌。', structure: 'collapse / 表示 / 倒塌', grammar: 'verb，围绕「倒塌」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She collapseed it yesterday without checking the real past form.', right: 'Check the past form of "collapse" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 collapse 是verb，再套「倒塌」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collapse.q1', senseId: 'collapse.s1', errorType: 'meaning', type: '词义选择', prompt: '「collapse」在本条的核心意思是：', options: ['倒塌', '完全相反的意思', '一种古代钱币'], answer: '倒塌', explain: 'collapse：倒塌。' },
      { id: 'collapse.q2', senseId: 'collapse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collapse?', options: ['倒塌', 'a kind of ancient coin', 'the past tense of be'], answer: '倒塌', explain: '对的是「倒塌」。' },
      { id: 'collapse.q3', senseId: 'collapse.s1', errorType: 'grammar', type: '词义选择', prompt: 'collapse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'collapse.q4', senseId: 'collapse.s1', errorType: 'meaning', type: '词源', prompt: '记 collapse 时，哪句更稳妥？', options: ['先锁住「倒塌」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「倒塌」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倒塌'] },
  });

  D('collar', {
    etymology: {
      origin: '拉丁语 collum「脖子」。',
      prefix: null,
      root: { text: 'collar', gloss: '衣领' },
      suffix: null,
      history: [
        { label: 'collar', text: '拉丁语 collum「脖子」。' },
        { label: '现在', text: '核心用法是：衣领。' },
      ],
      formationLogic: '考试认现在的用法：衣领。',
      mnemonic: '看到 collar，先说出「衣领」。',
      note: '考试认现在的用法：衣领。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one collar.', chinese: '这一章反复回到同一个点：衣领。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collar.s1', en: 'Without that collar, the next paragraph is hard to follow.', zh: '没有这个衣领，下一段会很难读。', structure: 'collar / 表示 / 衣领', grammar: 'noun，围绕「衣领」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the collar.', right: 'He gave me some advice about the collar.', reason: 'advice 不可数。名词 collar 的单复数按词典词形记。', rule: '先确定 collar 是noun，再套「衣领」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collar.q1', senseId: 'collar.s1', errorType: 'meaning', type: '词义选择', prompt: '「collar」在本条的核心意思是：', options: ['衣领', '完全相反的意思', '一种古代钱币'], answer: '衣领', explain: 'collar：衣领。' },
      { id: 'collar.q2', senseId: 'collar.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collar?', options: ['衣领', 'a kind of ancient coin', 'the past tense of be'], answer: '衣领', explain: '对的是「衣领」。' },
      { id: 'collar.q3', senseId: 'collar.s1', errorType: 'grammar', type: '词义选择', prompt: 'collar 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'collar.q4', senseId: 'collar.s1', errorType: 'meaning', type: '词源', prompt: '记 collar 时，哪句更稳妥？', options: ['先锁住「衣领」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「衣领」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['衣领'] },
  });

  D('colleague', {
    etymology: {
      origin: '拉丁语 collega「一起被选出的人」，legare。',
      prefix: null,
      root: { text: 'colleague', gloss: '同事' },
      suffix: null,
      history: [
        { label: 'colleague', text: '拉丁语 collega「一起被选出的人」，legare。' },
        { label: '现在', text: '核心用法是：同事。' },
      ],
      formationLogic: '考试认现在的用法：同事。',
      mnemonic: '看到 colleague，先说出「同事」。',
      note: '考试认现在的用法：同事。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one colleague.', chinese: '这一章反复回到同一个点：同事。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'colleague.s1', en: 'Without that colleague, the next paragraph is hard to follow.', zh: '没有这个同事，下一段会很难读。', structure: 'colleague / 表示 / 同事', grammar: 'noun，围绕「同事」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the colleague.', right: 'He gave me some advice about the colleague.', reason: 'advice 不可数。名词 colleague 的单复数按词典词形记。', rule: '先确定 colleague 是noun，再套「同事」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'colleague.q1', senseId: 'colleague.s1', errorType: 'meaning', type: '词义选择', prompt: '「colleague」在本条的核心意思是：', options: ['同事', '完全相反的意思', '一种古代钱币'], answer: '同事', explain: 'colleague：同事。' },
      { id: 'colleague.q2', senseId: 'colleague.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches colleague?', options: ['同事', 'a kind of ancient coin', 'the past tense of be'], answer: '同事', explain: '对的是「同事」。' },
      { id: 'colleague.q3', senseId: 'colleague.s1', errorType: 'grammar', type: '词义选择', prompt: 'colleague 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'colleague.q4', senseId: 'colleague.s1', errorType: 'meaning', type: '词源', prompt: '记 colleague 时，哪句更稳妥？', options: ['先锁住「同事」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「同事」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同事'] },
  });

  D('collect', {
    etymology: {
      origin: '拉丁语 colligere「收到一起」，legere「收集、读」。',
      prefix: null,
      root: { text: 'collect', gloss: '收集' },
      suffix: null,
      history: [
        { label: 'collect', text: '拉丁语 colligere「收到一起」，legere「收集、读」。' },
        { label: '现在', text: '核心用法是：收集。' },
      ],
      formationLogic: '考试认现在的用法：收集。',
      mnemonic: '看到 collect，先说出「收集」。',
      note: '考试认现在的用法：收集。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to collect before the office closed.', chinese: '他们同意在办公室关门前做这件事：收集。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collect.s1', en: 'The deadline forced the team to collect that afternoon.', zh: '截止日期逼着小组在那天下午收集。', structure: 'collect / 表示 / 收集', grammar: 'verb，围绕「收集」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She collected it yesterday without checking the real past form.', right: 'Check the past form of "collect" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 collect 是verb，再套「收集」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collect.q1', senseId: 'collect.s1', errorType: 'meaning', type: '词义选择', prompt: '「collect」在本条的核心意思是：', options: ['收集', '完全相反的意思', '一种古代钱币'], answer: '收集', explain: 'collect：收集。' },
      { id: 'collect.q2', senseId: 'collect.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collect?', options: ['收集', 'a kind of ancient coin', 'the past tense of be'], answer: '收集', explain: '对的是「收集」。' },
      { id: 'collect.q3', senseId: 'collect.s1', errorType: 'grammar', type: '词义选择', prompt: 'collect 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'collect.q4', senseId: 'collect.s1', errorType: 'meaning', type: '词源', prompt: '记 collect 时，哪句更稳妥？', options: ['先锁住「收集」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「收集」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['收集'] },
  });

  D('collection', {
    etymology: {
      origin: '英语派生：collec + -tion，词性转到「收藏品」。',
      prefix: null,
      root: { text: 'collec', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'collection', text: '英语派生：collec + -tion，词性转到「收藏品」。' },
        { label: '现在', text: '核心用法是：收藏品。' },
      ],
      formationLogic: '先认词干 collec，再看词尾。',
      mnemonic: '看到 collection，先说出「收藏品」。',
      note: '先认词干 collec，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one collection.', chinese: '这一章反复回到同一个点：收藏品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collection.s1', en: 'Without that collection, the next paragraph is hard to follow.', zh: '没有这个收藏品，下一段会很难读。', structure: 'collection / 表示 / 收藏品', grammar: 'noun，围绕「收藏品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the collection.', right: 'He gave me some advice about the collection.', reason: 'advice 不可数。名词 collection 的单复数按词典词形记。', rule: '先确定 collection 是noun，再套「收藏品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collection.q1', senseId: 'collection.s1', errorType: 'meaning', type: '词义选择', prompt: '「collection」在本条的核心意思是：', options: ['收藏品', '完全相反的意思', '一种古代钱币'], answer: '收藏品', explain: 'collection：收藏品。' },
      { id: 'collection.q2', senseId: 'collection.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collection?', options: ['收藏品', 'a kind of ancient coin', 'the past tense of be'], answer: '收藏品', explain: '对的是「收藏品」。' },
      { id: 'collection.q3', senseId: 'collection.s1', errorType: 'grammar', type: '词义选择', prompt: 'collection 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'collection.q4', senseId: 'collection.s1', errorType: 'meaning', type: '词源', prompt: '记 collection 时，哪句更稳妥？', options: ['先锁住「收藏品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「收藏品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['收藏品'] },
  });

  D('collective', {
    etymology: {
      origin: '英语派生：collect + -ive，词性转到「集体的」。',
      prefix: null,
      root: { text: 'collect', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'collective', text: '英语派生：collect + -ive，词性转到「集体的」。' },
        { label: '现在', text: '核心用法是：集体的。' },
      ],
      formationLogic: '先认词干 collect，再看词尾。',
      mnemonic: '看到 collective，先说出「集体的」。',
      note: '先认词干 collect，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was collective.', chinese: '即使是初读者也能看出，这个结果是集体的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collective.s1', en: 'They wanted a collective answer, not a long speech.', zh: '他们要一个集体的的答复，不要长篇发言。', structure: 'collective / 表示 / 集体的', grammar: 'adjective，围绕「集体的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are collective.', right: 'The news is collective.', reason: 'news 作主语时动词用单数。', rule: '先确定 collective 是adjective，再套「集体的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collective.q1', senseId: 'collective.s1', errorType: 'meaning', type: '词义选择', prompt: '「collective」在本条的核心意思是：', options: ['集体的', '完全相反的意思', '一种古代钱币'], answer: '集体的', explain: 'collective：集体的。' },
      { id: 'collective.q2', senseId: 'collective.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collective?', options: ['集体的', 'a kind of ancient coin', 'the past tense of be'], answer: '集体的', explain: '对的是「集体的」。' },
      { id: 'collective.q3', senseId: 'collective.s1', errorType: 'grammar', type: '词义选择', prompt: 'collective 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'collective.q4', senseId: 'collective.s1', errorType: 'meaning', type: '词源', prompt: '记 collective 时，哪句更稳妥？', options: ['先锁住「集体的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「集体的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['集体的'] },
  });

  D('collectively', {
    etymology: {
      origin: '英语派生：collective + -ly，词性转到「共同地」。',
      prefix: null,
      root: { text: 'collective', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'collectively', text: '英语派生：collective + -ly，词性转到「共同地」。' },
        { label: '现在', text: '核心用法是：共同地。' },
      ],
      formationLogic: '先认词干 collective，再看词尾。',
      mnemonic: '看到 collectively，先说出「共同地」。',
      note: '先认词干 collective，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule collectively, and the class followed.', chinese: '她把规则讲清楚了（共同地），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collectively.s1', en: 'He nodded collectively and returned to the notes.', zh: '他共同地地点了点头，又回去看笔记。', structure: 'collectively / 表示 / 共同地', grammar: 'adverb，围绕「共同地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very collectivelyly in the meeting.', right: 'She spoke collectively in the meeting.', reason: 'collectively 已经是副词，不要再加 -ly。', rule: '先确定 collectively 是adverb，再套「共同地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collectively.q1', senseId: 'collectively.s1', errorType: 'meaning', type: '词义选择', prompt: '「collectively」在本条的核心意思是：', options: ['共同地', '完全相反的意思', '一种古代钱币'], answer: '共同地', explain: 'collectively：共同地。' },
      { id: 'collectively.q2', senseId: 'collectively.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collectively?', options: ['共同地', 'a kind of ancient coin', 'the past tense of be'], answer: '共同地', explain: '对的是「共同地」。' },
      { id: 'collectively.q3', senseId: 'collectively.s1', errorType: 'grammar', type: '词义选择', prompt: 'collectively 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'collectively.q4', senseId: 'collectively.s1', errorType: 'meaning', type: '词源', prompt: '记 collectively 时，哪句更稳妥？', options: ['先锁住「共同地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「共同地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['共同地'] },
  });

  D('collectivism', {
    etymology: {
      origin: '英语派生：collectiv + -ism，词性转到「集体主义」。',
      prefix: null,
      root: { text: 'collectiv', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'collectivism', text: '英语派生：collectiv + -ism，词性转到「集体主义」。' },
        { label: '现在', text: '核心用法是：集体主义。' },
      ],
      formationLogic: '先认词干 collectiv，再看词尾。',
      mnemonic: '看到 collectivism，先说出「集体主义」。',
      note: '先认词干 collectiv，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one collectivism.', chinese: '这一章反复回到同一个点：集体主义。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collectivism.s1', en: 'Without that collectivism, the next paragraph is hard to follow.', zh: '没有这个集体主义，下一段会很难读。', structure: 'collectivism / 表示 / 集体主义', grammar: 'noun，围绕「集体主义」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the collectivism.', right: 'He gave me some advice about the collectivism.', reason: 'advice 不可数。名词 collectivism 的单复数按词典词形记。', rule: '先确定 collectivism 是noun，再套「集体主义」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collectivism.q1', senseId: 'collectivism.s1', errorType: 'meaning', type: '词义选择', prompt: '「collectivism」在本条的核心意思是：', options: ['集体主义', '完全相反的意思', '一种古代钱币'], answer: '集体主义', explain: 'collectivism：集体主义。' },
      { id: 'collectivism.q2', senseId: 'collectivism.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collectivism?', options: ['集体主义', 'a kind of ancient coin', 'the past tense of be'], answer: '集体主义', explain: '对的是「集体主义」。' },
      { id: 'collectivism.q3', senseId: 'collectivism.s1', errorType: 'grammar', type: '词义选择', prompt: 'collectivism 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'collectivism.q4', senseId: 'collectivism.s1', errorType: 'meaning', type: '词源', prompt: '记 collectivism 时，哪句更稳妥？', options: ['先锁住「集体主义」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「集体主义」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['集体主义'] },
  });

  D('college', {
    etymology: {
      origin: '拉丁语 collegium「同事团体」。',
      prefix: null,
      root: { text: 'college', gloss: '学院' },
      suffix: null,
      history: [
        { label: 'college', text: '拉丁语 collegium「同事团体」。' },
        { label: '现在', text: '核心用法是：学院。' },
      ],
      formationLogic: '考试认现在的用法：学院。',
      mnemonic: '看到 college，先说出「学院」。',
      note: '考试认现在的用法：学院。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one college.', chinese: '这一章反复回到同一个点：学院。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'college.s1', en: 'Without that college, the next paragraph is hard to follow.', zh: '没有这个学院，下一段会很难读。', structure: 'college / 表示 / 学院', grammar: 'noun，围绕「学院」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the college.', right: 'He gave me some advice about the college.', reason: 'advice 不可数。名词 college 的单复数按词典词形记。', rule: '先确定 college 是noun，再套「学院」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'college.q1', senseId: 'college.s1', errorType: 'meaning', type: '词义选择', prompt: '「college」在本条的核心意思是：', options: ['学院', '完全相反的意思', '一种古代钱币'], answer: '学院', explain: 'college：学院。' },
      { id: 'college.q2', senseId: 'college.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches college?', options: ['学院', 'a kind of ancient coin', 'the past tense of be'], answer: '学院', explain: '对的是「学院」。' },
      { id: 'college.q3', senseId: 'college.s1', errorType: 'grammar', type: '词义选择', prompt: 'college 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'college.q4', senseId: 'college.s1', errorType: 'meaning', type: '词源', prompt: '记 college 时，哪句更稳妥？', options: ['先锁住「学院」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「学院」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['学院'] },
  });

  D('collide', {
    etymology: {
      origin: '现代英语常用词「collide」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'collide', gloss: '碰撞' },
      suffix: null,
      history: [
        { label: 'collide', text: '现代英语常用词「collide」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：碰撞。' },
      ],
      formationLogic: '核心义：碰撞。',
      mnemonic: '看到 collide，先说出「碰撞」。',
      note: '核心义：碰撞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to collide before the office closed.', chinese: '他们同意在办公室关门前做这件事：碰撞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collide.s1', en: 'The deadline forced the team to collide that afternoon.', zh: '截止日期逼着小组在那天下午碰撞。', structure: 'collide / 表示 / 碰撞', grammar: 'verb，围绕「碰撞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She collideed it yesterday without checking the real past form.', right: 'Check the past form of "collide" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 collide 是verb，再套「碰撞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collide.q1', senseId: 'collide.s1', errorType: 'meaning', type: '词义选择', prompt: '「collide」在本条的核心意思是：', options: ['碰撞', '完全相反的意思', '一种古代钱币'], answer: '碰撞', explain: 'collide：碰撞。' },
      { id: 'collide.q2', senseId: 'collide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collide?', options: ['碰撞', 'a kind of ancient coin', 'the past tense of be'], answer: '碰撞', explain: '对的是「碰撞」。' },
      { id: 'collide.q3', senseId: 'collide.s1', errorType: 'grammar', type: '词义选择', prompt: 'collide 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'collide.q4', senseId: 'collide.s1', errorType: 'meaning', type: '词源', prompt: '记 collide 时，哪句更稳妥？', options: ['先锁住「碰撞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「碰撞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['碰撞'] },
  });

  D('collision', {
    etymology: {
      origin: '英语派生：colli + -sion，词性转到「碰撞」。',
      prefix: null,
      root: { text: 'colli', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'collision', text: '英语派生：colli + -sion，词性转到「碰撞」。' },
        { label: '现在', text: '核心用法是：碰撞。' },
      ],
      formationLogic: '先认词干 colli，再看词尾。',
      mnemonic: '看到 collision，先说出「碰撞」。',
      note: '先认词干 colli，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one collision.', chinese: '这一章反复回到同一个点：碰撞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collision.s1', en: 'Without that collision, the next paragraph is hard to follow.', zh: '没有这个碰撞，下一段会很难读。', structure: 'collision / 表示 / 碰撞', grammar: 'noun，围绕「碰撞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the collision.', right: 'He gave me some advice about the collision.', reason: 'advice 不可数。名词 collision 的单复数按词典词形记。', rule: '先确定 collision 是noun，再套「碰撞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collision.q1', senseId: 'collision.s1', errorType: 'meaning', type: '词义选择', prompt: '「collision」在本条的核心意思是：', options: ['碰撞', '完全相反的意思', '一种古代钱币'], answer: '碰撞', explain: 'collision：碰撞。' },
      { id: 'collision.q2', senseId: 'collision.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collision?', options: ['碰撞', 'a kind of ancient coin', 'the past tense of be'], answer: '碰撞', explain: '对的是「碰撞」。' },
      { id: 'collision.q3', senseId: 'collision.s1', errorType: 'grammar', type: '词义选择', prompt: 'collision 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'collision.q4', senseId: 'collision.s1', errorType: 'meaning', type: '词源', prompt: '记 collision 时，哪句更稳妥？', options: ['先锁住「碰撞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「碰撞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['碰撞'] },
  });

  D('collude', {
    etymology: {
      origin: '现代英语常用词「collude」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'collude', gloss: '勾结' },
      suffix: null,
      history: [
        { label: 'collude', text: '现代英语常用词「collude」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：勾结。' },
      ],
      formationLogic: '核心义：勾结。',
      mnemonic: '看到 collude，先说出「勾结」。',
      note: '核心义：勾结。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to collude before the office closed.', chinese: '他们同意在办公室关门前做这件事：勾结。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'collude.s1', en: 'The deadline forced the team to collude that afternoon.', zh: '截止日期逼着小组在那天下午勾结。', structure: 'collude / 表示 / 勾结', grammar: 'verb，围绕「勾结」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She colludeed it yesterday without checking the real past form.', right: 'Check the past form of "collude" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 collude 是verb，再套「勾结」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'collude.q1', senseId: 'collude.s1', errorType: 'meaning', type: '词义选择', prompt: '「collude」在本条的核心意思是：', options: ['勾结', '完全相反的意思', '一种古代钱币'], answer: '勾结', explain: 'collude：勾结。' },
      { id: 'collude.q2', senseId: 'collude.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches collude?', options: ['勾结', 'a kind of ancient coin', 'the past tense of be'], answer: '勾结', explain: '对的是「勾结」。' },
      { id: 'collude.q3', senseId: 'collude.s1', errorType: 'grammar', type: '词义选择', prompt: 'collude 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'collude.q4', senseId: 'collude.s1', errorType: 'meaning', type: '词源', prompt: '记 collude 时，哪句更稳妥？', options: ['先锁住「勾结」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「勾结」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['勾结'] },
  });

  D('colon', {
    etymology: {
      origin: '现代英语常用词「colon」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'colon', gloss: '冒号' },
      suffix: null,
      history: [
        { label: 'colon', text: '现代英语常用词「colon」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：冒号。' },
      ],
      formationLogic: '核心义：冒号。',
      mnemonic: '看到 colon，先说出「冒号」。',
      note: '核心义：冒号。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one colon.', chinese: '这一章反复回到同一个点：冒号。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'colon.s1', en: 'Without that colon, the next paragraph is hard to follow.', zh: '没有这个冒号，下一段会很难读。', structure: 'colon / 表示 / 冒号', grammar: 'noun，围绕「冒号」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the colon.', right: 'He gave me some advice about the colon.', reason: 'advice 不可数。名词 colon 的单复数按词典词形记。', rule: '先确定 colon 是noun，再套「冒号」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'colon.q1', senseId: 'colon.s1', errorType: 'meaning', type: '词义选择', prompt: '「colon」在本条的核心意思是：', options: ['冒号', '完全相反的意思', '一种古代钱币'], answer: '冒号', explain: 'colon：冒号。' },
      { id: 'colon.q2', senseId: 'colon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches colon?', options: ['冒号', 'a kind of ancient coin', 'the past tense of be'], answer: '冒号', explain: '对的是「冒号」。' },
      { id: 'colon.q3', senseId: 'colon.s1', errorType: 'grammar', type: '词义选择', prompt: 'colon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'colon.q4', senseId: 'colon.s1', errorType: 'meaning', type: '词源', prompt: '记 colon 时，哪句更稳妥？', options: ['先锁住「冒号」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冒号」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冒号'] },
  });

  D('colonel', {
    etymology: {
      origin: '现代英语常用词「colonel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'colonel', gloss: '上校' },
      suffix: null,
      history: [
        { label: 'colonel', text: '现代英语常用词「colonel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：上校。' },
      ],
      formationLogic: '核心义：上校。',
      mnemonic: '看到 colonel，先说出「上校」。',
      note: '核心义：上校。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one colonel.', chinese: '这一章反复回到同一个点：上校。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'colonel.s1', en: 'Without that colonel, the next paragraph is hard to follow.', zh: '没有这个上校，下一段会很难读。', structure: 'colonel / 表示 / 上校', grammar: 'noun，围绕「上校」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the colonel.', right: 'He gave me some advice about the colonel.', reason: 'advice 不可数。名词 colonel 的单复数按词典词形记。', rule: '先确定 colonel 是noun，再套「上校」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'colonel.q1', senseId: 'colonel.s1', errorType: 'meaning', type: '词义选择', prompt: '「colonel」在本条的核心意思是：', options: ['上校', '完全相反的意思', '一种古代钱币'], answer: '上校', explain: 'colonel：上校。' },
      { id: 'colonel.q2', senseId: 'colonel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches colonel?', options: ['上校', 'a kind of ancient coin', 'the past tense of be'], answer: '上校', explain: '对的是「上校」。' },
      { id: 'colonel.q3', senseId: 'colonel.s1', errorType: 'grammar', type: '词义选择', prompt: 'colonel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'colonel.q4', senseId: 'colonel.s1', errorType: 'meaning', type: '词源', prompt: '记 colonel 时，哪句更稳妥？', options: ['先锁住「上校」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「上校」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['上校'] },
  });

  D('colony', {
    etymology: {
      origin: '拉丁语 colonia「定居地」。',
      prefix: null,
      root: { text: 'colony', gloss: '殖民地' },
      suffix: null,
      history: [
        { label: 'colony', text: '拉丁语 colonia「定居地」。' },
        { label: '现在', text: '核心用法是：殖民地。' },
      ],
      formationLogic: '考试认现在的用法：殖民地。',
      mnemonic: '看到 colony，先说出「殖民地」。',
      note: '考试认现在的用法：殖民地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one colony.', chinese: '这一章反复回到同一个点：殖民地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'colony.s1', en: 'Without that colony, the next paragraph is hard to follow.', zh: '没有这个殖民地，下一段会很难读。', structure: 'colony / 表示 / 殖民地', grammar: 'noun，围绕「殖民地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the colony.', right: 'He gave me some advice about the colony.', reason: 'advice 不可数。名词 colony 的单复数按词典词形记。', rule: '先确定 colony 是noun，再套「殖民地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'colony.q1', senseId: 'colony.s1', errorType: 'meaning', type: '词义选择', prompt: '「colony」在本条的核心意思是：', options: ['殖民地', '完全相反的意思', '一种古代钱币'], answer: '殖民地', explain: 'colony：殖民地。' },
      { id: 'colony.q2', senseId: 'colony.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches colony?', options: ['殖民地', 'a kind of ancient coin', 'the past tense of be'], answer: '殖民地', explain: '对的是「殖民地」。' },
      { id: 'colony.q3', senseId: 'colony.s1', errorType: 'grammar', type: '词义选择', prompt: 'colony 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'colony.q4', senseId: 'colony.s1', errorType: 'meaning', type: '词源', prompt: '记 colony 时，哪句更稳妥？', options: ['先锁住「殖民地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「殖民地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['殖民地'] },
  });

  D('color', {
    etymology: {
      origin: '拉丁语 color。美国拼写。',
      prefix: null,
      root: { text: 'color', gloss: '颜色' },
      suffix: null,
      history: [
        { label: 'color', text: '拉丁语 color。美国拼写。' },
        { label: '现在', text: '核心用法是：颜色。' },
      ],
      formationLogic: '考试认现在的用法：颜色。',
      mnemonic: '看到 color，先说出「颜色」。',
      note: '考试认现在的用法：颜色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one color.', chinese: '这一章反复回到同一个点：颜色。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'color.s1', en: 'Without that color, the next paragraph is hard to follow.', zh: '没有这个颜色，下一段会很难读。', structure: 'color / 表示 / 颜色', grammar: 'noun，围绕「颜色」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the color.', right: 'He gave me some advice about the color.', reason: 'advice 不可数。名词 color 的单复数按词典词形记。', rule: '先确定 color 是noun，再套「颜色」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'color.q1', senseId: 'color.s1', errorType: 'meaning', type: '词义选择', prompt: '「color」在本条的核心意思是：', options: ['颜色', '完全相反的意思', '一种古代钱币'], answer: '颜色', explain: 'color：颜色。' },
      { id: 'color.q2', senseId: 'color.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches color?', options: ['颜色', 'a kind of ancient coin', 'the past tense of be'], answer: '颜色', explain: '对的是「颜色」。' },
      { id: 'color.q3', senseId: 'color.s1', errorType: 'grammar', type: '词义选择', prompt: 'color 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'color.q4', senseId: 'color.s1', errorType: 'meaning', type: '词源', prompt: '记 color 时，哪句更稳妥？', options: ['先锁住「颜色」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「颜色」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['颜色'] },
  });

  D('colourant', {
    etymology: {
      origin: '现代英语常用词「colourant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'colourant', gloss: '着色剂' },
      suffix: null,
      history: [
        { label: 'colourant', text: '现代英语常用词「colourant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：着色剂。' },
      ],
      formationLogic: '核心义：着色剂。',
      mnemonic: '看到 colourant，先说出「着色剂」。',
      note: '核心义：着色剂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one colourant.', chinese: '这一章反复回到同一个点：着色剂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'colourant.s1', en: 'Without that colourant, the next paragraph is hard to follow.', zh: '没有这个着色剂，下一段会很难读。', structure: 'colourant / 表示 / 着色剂', grammar: 'noun，围绕「着色剂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the colourant.', right: 'He gave me some advice about the colourant.', reason: 'advice 不可数。名词 colourant 的单复数按词典词形记。', rule: '先确定 colourant 是noun，再套「着色剂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'colourant.q1', senseId: 'colourant.s1', errorType: 'meaning', type: '词义选择', prompt: '「colourant」在本条的核心意思是：', options: ['着色剂', '完全相反的意思', '一种古代钱币'], answer: '着色剂', explain: 'colourant：着色剂。' },
      { id: 'colourant.q2', senseId: 'colourant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches colourant?', options: ['着色剂', 'a kind of ancient coin', 'the past tense of be'], answer: '着色剂', explain: '对的是「着色剂」。' },
      { id: 'colourant.q3', senseId: 'colourant.s1', errorType: 'grammar', type: '词义选择', prompt: 'colourant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'colourant.q4', senseId: 'colourant.s1', errorType: 'meaning', type: '词源', prompt: '记 colourant 时，哪句更稳妥？', options: ['先锁住「着色剂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「着色剂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['着色剂'] },
  });

  D('colourful', {
    etymology: {
      origin: '英语派生：colour + -ful，词性转到「色彩鲜艳的」。',
      prefix: null,
      root: { text: 'colour', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'colourful', text: '英语派生：colour + -ful，词性转到「色彩鲜艳的」。' },
        { label: '现在', text: '核心用法是：色彩鲜艳的。' },
      ],
      formationLogic: '先认词干 colour，再看词尾。',
      mnemonic: '看到 colourful，先说出「色彩鲜艳的」。',
      note: '先认词干 colour，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was colourful.', chinese: '即使是初读者也能看出，这个结果是色彩鲜艳的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'colourful.s1', en: 'They wanted a colourful answer, not a long speech.', zh: '他们要一个色彩鲜艳的的答复，不要长篇发言。', structure: 'colourful / 表示 / 色彩鲜艳的', grammar: 'adjective，围绕「色彩鲜艳的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are colourful.', right: 'The news is colourful.', reason: 'news 作主语时动词用单数。', rule: '先确定 colourful 是adjective，再套「色彩鲜艳的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'colourful.q1', senseId: 'colourful.s1', errorType: 'meaning', type: '词义选择', prompt: '「colourful」在本条的核心意思是：', options: ['色彩鲜艳的', '完全相反的意思', '一种古代钱币'], answer: '色彩鲜艳的', explain: 'colourful：色彩鲜艳的。' },
      { id: 'colourful.q2', senseId: 'colourful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches colourful?', options: ['色彩鲜艳的', 'a kind of ancient coin', 'the past tense of be'], answer: '色彩鲜艳的', explain: '对的是「色彩鲜艳的」。' },
      { id: 'colourful.q3', senseId: 'colourful.s1', errorType: 'grammar', type: '词义选择', prompt: 'colourful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'colourful.q4', senseId: 'colourful.s1', errorType: 'meaning', type: '词源', prompt: '记 colourful 时，哪句更稳妥？', options: ['先锁住「色彩鲜艳的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「色彩鲜艳的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['色彩鲜艳的'] },
  });

  D('column', {
    etymology: {
      origin: '拉丁语 columna「柱子」。',
      prefix: null,
      root: { text: 'column', gloss: '柱' },
      suffix: null,
      history: [
        { label: 'column', text: '拉丁语 columna「柱子」。' },
        { label: '现在', text: '核心用法是：柱。' },
      ],
      formationLogic: '考试认现在的用法：柱。',
      mnemonic: '看到 column，先说出「柱」。',
      note: '考试认现在的用法：柱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one column.', chinese: '这一章反复回到同一个点：柱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'column.s1', en: 'Without that column, the next paragraph is hard to follow.', zh: '没有这个柱，下一段会很难读。', structure: 'column / 表示 / 柱', grammar: 'noun，围绕「柱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the column.', right: 'He gave me some advice about the column.', reason: 'advice 不可数。名词 column 的单复数按词典词形记。', rule: '先确定 column 是noun，再套「柱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'column.q1', senseId: 'column.s1', errorType: 'meaning', type: '词义选择', prompt: '「column」在本条的核心意思是：', options: ['柱', '完全相反的意思', '一种古代钱币'], answer: '柱', explain: 'column：柱。' },
      { id: 'column.q2', senseId: 'column.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches column?', options: ['柱', 'a kind of ancient coin', 'the past tense of be'], answer: '柱', explain: '对的是「柱」。' },
      { id: 'column.q3', senseId: 'column.s1', errorType: 'grammar', type: '词义选择', prompt: 'column 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'column.q4', senseId: 'column.s1', errorType: 'meaning', type: '词源', prompt: '记 column 时，哪句更稳妥？', options: ['先锁住「柱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「柱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['柱'] },
  });

  D('comb', {
    etymology: {
      origin: '古英语 camb。',
      prefix: null,
      root: { text: 'comb', gloss: '梳子' },
      suffix: null,
      history: [
        { label: 'comb', text: '古英语 camb。' },
        { label: '现在', text: '核心用法是：梳子。' },
      ],
      formationLogic: '考试认现在的用法：梳子。',
      mnemonic: '看到 comb，先说出「梳子」。',
      note: '考试认现在的用法：梳子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comb.', chinese: '这一章反复回到同一个点：梳子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comb.s1', en: 'Without that comb, the next paragraph is hard to follow.', zh: '没有这个梳子，下一段会很难读。', structure: 'comb / 表示 / 梳子', grammar: 'noun，围绕「梳子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comb.', right: 'He gave me some advice about the comb.', reason: 'advice 不可数。名词 comb 的单复数按词典词形记。', rule: '先确定 comb 是noun，再套「梳子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comb.q1', senseId: 'comb.s1', errorType: 'meaning', type: '词义选择', prompt: '「comb」在本条的核心意思是：', options: ['梳子', '完全相反的意思', '一种古代钱币'], answer: '梳子', explain: 'comb：梳子。' },
      { id: 'comb.q2', senseId: 'comb.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comb?', options: ['梳子', 'a kind of ancient coin', 'the past tense of be'], answer: '梳子', explain: '对的是「梳子」。' },
      { id: 'comb.q3', senseId: 'comb.s1', errorType: 'grammar', type: '词义选择', prompt: 'comb 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comb.q4', senseId: 'comb.s1', errorType: 'meaning', type: '词源', prompt: '记 comb 时，哪句更稳妥？', options: ['先锁住「梳子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「梳子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['梳子'] },
  });

  D('combat', {
    etymology: {
      origin: '现代英语常用词「combat」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'combat', gloss: '战斗' },
      suffix: null,
      history: [
        { label: 'combat', text: '现代英语常用词「combat」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：战斗。' },
      ],
      formationLogic: '核心义：战斗。',
      mnemonic: '看到 combat，先说出「战斗」。',
      note: '核心义：战斗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one combat.', chinese: '这一章反复回到同一个点：战斗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'combat.s1', en: 'Without that combat, the next paragraph is hard to follow.', zh: '没有这个战斗，下一段会很难读。', structure: 'combat / 表示 / 战斗', grammar: 'noun，围绕「战斗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the combat.', right: 'He gave me some advice about the combat.', reason: 'advice 不可数。名词 combat 的单复数按词典词形记。', rule: '先确定 combat 是noun，再套「战斗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'combat.q1', senseId: 'combat.s1', errorType: 'meaning', type: '词义选择', prompt: '「combat」在本条的核心意思是：', options: ['战斗', '完全相反的意思', '一种古代钱币'], answer: '战斗', explain: 'combat：战斗。' },
      { id: 'combat.q2', senseId: 'combat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches combat?', options: ['战斗', 'a kind of ancient coin', 'the past tense of be'], answer: '战斗', explain: '对的是「战斗」。' },
      { id: 'combat.q3', senseId: 'combat.s1', errorType: 'grammar', type: '词义选择', prompt: 'combat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'combat.q4', senseId: 'combat.s1', errorType: 'meaning', type: '词源', prompt: '记 combat 时，哪句更稳妥？', options: ['先锁住「战斗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「战斗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['战斗'] },
  });

  D('combination', {
    etymology: {
      origin: '英语派生：combina + -tion，词性转到「结合」。',
      prefix: null,
      root: { text: 'combina', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'combination', text: '英语派生：combina + -tion，词性转到「结合」。' },
        { label: '现在', text: '核心用法是：结合。' },
      ],
      formationLogic: '先认词干 combina，再看词尾。',
      mnemonic: '看到 combination，先说出「结合」。',
      note: '先认词干 combina，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one combination.', chinese: '这一章反复回到同一个点：结合。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'combination.s1', en: 'Without that combination, the next paragraph is hard to follow.', zh: '没有这个结合，下一段会很难读。', structure: 'combination / 表示 / 结合', grammar: 'noun，围绕「结合」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the combination.', right: 'He gave me some advice about the combination.', reason: 'advice 不可数。名词 combination 的单复数按词典词形记。', rule: '先确定 combination 是noun，再套「结合」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'combination.q1', senseId: 'combination.s1', errorType: 'meaning', type: '词义选择', prompt: '「combination」在本条的核心意思是：', options: ['结合', '完全相反的意思', '一种古代钱币'], answer: '结合', explain: 'combination：结合。' },
      { id: 'combination.q2', senseId: 'combination.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches combination?', options: ['结合', 'a kind of ancient coin', 'the past tense of be'], answer: '结合', explain: '对的是「结合」。' },
      { id: 'combination.q3', senseId: 'combination.s1', errorType: 'grammar', type: '词义选择', prompt: 'combination 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'combination.q4', senseId: 'combination.s1', errorType: 'meaning', type: '词源', prompt: '记 combination 时，哪句更稳妥？', options: ['先锁住「结合」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结合」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结合'] },
  });

  D('combine', {
    etymology: {
      origin: '拉丁语 combinare「两两配在一起」，bini「两个」。',
      prefix: null,
      root: { text: 'combine', gloss: '结合' },
      suffix: null,
      history: [
        { label: 'combine', text: '拉丁语 combinare「两两配在一起」，bini「两个」。' },
        { label: '现在', text: '核心用法是：结合。' },
      ],
      formationLogic: '考试认现在的用法：结合。',
      mnemonic: '看到 combine，先说出「结合」。',
      note: '考试认现在的用法：结合。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to combine before the office closed.', chinese: '他们同意在办公室关门前做这件事：结合。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'combine.s1', en: 'The deadline forced the team to combine that afternoon.', zh: '截止日期逼着小组在那天下午结合。', structure: 'combine / 表示 / 结合', grammar: 'verb，围绕「结合」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She combineed it yesterday without checking the real past form.', right: 'Check the past form of "combine" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 combine 是verb，再套「结合」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'combine.q1', senseId: 'combine.s1', errorType: 'meaning', type: '词义选择', prompt: '「combine」在本条的核心意思是：', options: ['结合', '完全相反的意思', '一种古代钱币'], answer: '结合', explain: 'combine：结合。' },
      { id: 'combine.q2', senseId: 'combine.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches combine?', options: ['结合', 'a kind of ancient coin', 'the past tense of be'], answer: '结合', explain: '对的是「结合」。' },
      { id: 'combine.q3', senseId: 'combine.s1', errorType: 'grammar', type: '词义选择', prompt: 'combine 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'combine.q4', senseId: 'combine.s1', errorType: 'meaning', type: '词源', prompt: '记 combine 时，哪句更稳妥？', options: ['先锁住「结合」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「结合」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['结合'] },
  });

  D('combined', {
    etymology: {
      origin: '现代英语常用词「combined」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'combined', gloss: '联合的' },
      suffix: null,
      history: [
        { label: 'combined', text: '现代英语常用词「combined」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：联合的。' },
      ],
      formationLogic: '核心义：联合的。',
      mnemonic: '看到 combined，先说出「联合的」。',
      note: '核心义：联合的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was combined.', chinese: '即使是初读者也能看出，这个结果是联合的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'combined.s1', en: 'They wanted a combined answer, not a long speech.', zh: '他们要一个联合的的答复，不要长篇发言。', structure: 'combined / 表示 / 联合的', grammar: 'adjective，围绕「联合的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are combined.', right: 'The news is combined.', reason: 'news 作主语时动词用单数。', rule: '先确定 combined 是adjective，再套「联合的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'combined.q1', senseId: 'combined.s1', errorType: 'meaning', type: '词义选择', prompt: '「combined」在本条的核心意思是：', options: ['联合的', '完全相反的意思', '一种古代钱币'], answer: '联合的', explain: 'combined：联合的。' },
      { id: 'combined.q2', senseId: 'combined.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches combined?', options: ['联合的', 'a kind of ancient coin', 'the past tense of be'], answer: '联合的', explain: '对的是「联合的」。' },
      { id: 'combined.q3', senseId: 'combined.s1', errorType: 'grammar', type: '词义选择', prompt: 'combined 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'combined.q4', senseId: 'combined.s1', errorType: 'meaning', type: '词源', prompt: '记 combined 时，哪句更稳妥？', options: ['先锁住「联合的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「联合的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联合的'] },
  });

  D('come', {
    etymology: {
      origin: '古英语 cuman。',
      prefix: null,
      root: { text: 'come', gloss: '来' },
      suffix: null,
      history: [
        { label: 'come', text: '古英语 cuman。' },
        { label: '现在', text: '核心用法是：来。' },
      ],
      formationLogic: '考试认现在的用法：来。',
      mnemonic: '看到 come，先说出「来」。',
      note: '考试认现在的用法：来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to come before the office closed.', chinese: '他们同意在办公室关门前做这件事：来。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come.s1', en: 'The deadline forced the team to come that afternoon.', zh: '截止日期逼着小组在那天下午来。', structure: 'come / 表示 / 来', grammar: 'verb，围绕「来」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She comeed it yesterday without checking the real past form.', right: 'Check the past form of "come" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 come 是verb，再套「来」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come.q1', senseId: 'come.s1', errorType: 'meaning', type: '词义选择', prompt: '「come」在本条的核心意思是：', options: ['来', '完全相反的意思', '一种古代钱币'], answer: '来', explain: 'come：来。' },
      { id: 'come.q2', senseId: 'come.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come?', options: ['来', 'a kind of ancient coin', 'the past tense of be'], answer: '来', explain: '对的是「来」。' },
      { id: 'come.q3', senseId: 'come.s1', errorType: 'grammar', type: '词义选择', prompt: 'come 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come.q4', senseId: 'come.s1', errorType: 'meaning', type: '词源', prompt: '记 come 时，哪句更稳妥？', options: ['先锁住「来」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「来」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['来'] },
  });

  D('come across', {
    etymology: {
      origin: '现代英语固定说法「come across」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come across', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come across', text: '现代英语固定说法「come across」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：偶然遇到。' },
      ],
      formationLogic: '核心义：偶然遇到。',
      mnemonic: '看到 come across，先说出「偶然遇到」。',
      note: '核心义：偶然遇到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come across" and asked the class to keep it as one unit.', chinese: '老师把「come across」圈出来，让全班把它当成一个整体。它表示偶然遇到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come across.s1', en: 'In the margin she wrote "come across" so nobody would split the phrase.', zh: '她在页边写下「come across」，免得有人把这个说法拆开。意思是偶然遇到。', structure: 'come across / 表示 / 偶然遇到', grammar: 'verb，围绕「偶然遇到」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come across and lost the point.', right: 'Keep "come across" together: it means 偶然遇到.', reason: '「come across」要整块理解。', rule: '先确定 come across 是verb，再套「偶然遇到」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come across.q1', senseId: 'come across.s1', errorType: 'meaning', type: '词义选择', prompt: '「come across」在本条的核心意思是：', options: ['偶然遇到', '完全相反的意思', '一种古代钱币'], answer: '偶然遇到', explain: 'come across：偶然遇到。' },
      { id: 'come across.q2', senseId: 'come across.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come across?', options: ['偶然遇到', 'a kind of ancient coin', 'the past tense of be'], answer: '偶然遇到', explain: '对的是「偶然遇到」。' },
      { id: 'come across.q3', senseId: 'come across.s1', errorType: 'grammar', type: '词义选择', prompt: 'come across 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come across.q4', senseId: 'come across.s1', errorType: 'meaning', type: '词源', prompt: '记 come across 时，哪句更稳妥？', options: ['先锁住「偶然遇到」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「偶然遇到」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['偶然遇到'] },
  });

  D('come back', {
    etymology: {
      origin: '现代英语固定说法「come back」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come back', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come back', text: '现代英语固定说法「come back」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：回来。' },
      ],
      formationLogic: '核心义：回来。',
      mnemonic: '看到 come back，先说出「回来」。',
      note: '核心义：回来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come back" and asked the class to keep it as one unit.', chinese: '老师把「come back」圈出来，让全班把它当成一个整体。它表示回来。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come back.s1', en: 'In the margin she wrote "come back" so nobody would split the phrase.', zh: '她在页边写下「come back」，免得有人把这个说法拆开。意思是回来。', structure: 'come back / 表示 / 回来', grammar: 'verb，围绕「回来」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come back and lost the point.', right: 'Keep "come back" together: it means 回来.', reason: '「come back」要整块理解。', rule: '先确定 come back 是verb，再套「回来」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come back.q1', senseId: 'come back.s1', errorType: 'meaning', type: '词义选择', prompt: '「come back」在本条的核心意思是：', options: ['回来', '完全相反的意思', '一种古代钱币'], answer: '回来', explain: 'come back：回来。' },
      { id: 'come back.q2', senseId: 'come back.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come back?', options: ['回来', 'a kind of ancient coin', 'the past tense of be'], answer: '回来', explain: '对的是「回来」。' },
      { id: 'come back.q3', senseId: 'come back.s1', errorType: 'grammar', type: '词义选择', prompt: 'come back 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come back.q4', senseId: 'come back.s1', errorType: 'meaning', type: '词源', prompt: '记 come back 时，哪句更稳妥？', options: ['先锁住「回来」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「回来」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['回来'] },
  });

  D('come before', {
    etymology: {
      origin: '现代英语固定说法「come before」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come before', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come before', text: '现代英语固定说法「come before」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：先于。' },
      ],
      formationLogic: '核心义：先于。',
      mnemonic: '看到 come before，先说出「先于」。',
      note: '核心义：先于。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come before" and asked the class to keep it as one unit.', chinese: '老师把「come before」圈出来，让全班把它当成一个整体。它表示先于。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come before.s1', en: 'In the margin she wrote "come before" so nobody would split the phrase.', zh: '她在页边写下「come before」，免得有人把这个说法拆开。意思是先于。', structure: 'come before / 表示 / 先于', grammar: 'verb，围绕「先于」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come before and lost the point.', right: 'Keep "come before" together: it means 先于.', reason: '「come before」要整块理解。', rule: '先确定 come before 是verb，再套「先于」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come before.q1', senseId: 'come before.s1', errorType: 'meaning', type: '词义选择', prompt: '「come before」在本条的核心意思是：', options: ['先于', '完全相反的意思', '一种古代钱币'], answer: '先于', explain: 'come before：先于。' },
      { id: 'come before.q2', senseId: 'come before.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come before?', options: ['先于', 'a kind of ancient coin', 'the past tense of be'], answer: '先于', explain: '对的是「先于」。' },
      { id: 'come before.q3', senseId: 'come before.s1', errorType: 'grammar', type: '词义选择', prompt: 'come before 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come before.q4', senseId: 'come before.s1', errorType: 'meaning', type: '词源', prompt: '记 come before 时，哪句更稳妥？', options: ['先锁住「先于」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「先于」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['先于'] },
  });

  D('come from', {
    etymology: {
      origin: '现代英语固定说法「come from」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come from', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come from', text: '现代英语固定说法「come from」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：来自。' },
      ],
      formationLogic: '核心义：来自。',
      mnemonic: '看到 come from，先说出「来自」。',
      note: '核心义：来自。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come from" and asked the class to keep it as one unit.', chinese: '老师把「come from」圈出来，让全班把它当成一个整体。它表示来自。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come from.s1', en: 'In the margin she wrote "come from" so nobody would split the phrase.', zh: '她在页边写下「come from」，免得有人把这个说法拆开。意思是来自。', structure: 'come from / 表示 / 来自', grammar: 'verb，围绕「来自」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come from and lost the point.', right: 'Keep "come from" together: it means 来自.', reason: '「come from」要整块理解。', rule: '先确定 come from 是verb，再套「来自」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come from.q1', senseId: 'come from.s1', errorType: 'meaning', type: '词义选择', prompt: '「come from」在本条的核心意思是：', options: ['来自', '完全相反的意思', '一种古代钱币'], answer: '来自', explain: 'come from：来自。' },
      { id: 'come from.q2', senseId: 'come from.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come from?', options: ['来自', 'a kind of ancient coin', 'the past tense of be'], answer: '来自', explain: '对的是「来自」。' },
      { id: 'come from.q3', senseId: 'come from.s1', errorType: 'grammar', type: '词义选择', prompt: 'come from 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come from.q4', senseId: 'come from.s1', errorType: 'meaning', type: '词源', prompt: '记 come from 时，哪句更稳妥？', options: ['先锁住「来自」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「来自」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['来自'] },
  });

  D('come in', {
    etymology: {
      origin: '现代英语固定说法「come in」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come in', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come in', text: '现代英语固定说法「come in」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：进入。' },
      ],
      formationLogic: '核心义：进入。',
      mnemonic: '看到 come in，先说出「进入」。',
      note: '核心义：进入。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come in" and asked the class to keep it as one unit.', chinese: '老师把「come in」圈出来，让全班把它当成一个整体。它表示进入。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come in.s1', en: 'In the margin she wrote "come in" so nobody would split the phrase.', zh: '她在页边写下「come in」，免得有人把这个说法拆开。意思是进入。', structure: 'come in / 表示 / 进入', grammar: 'verb，围绕「进入」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come in and lost the point.', right: 'Keep "come in" together: it means 进入.', reason: '「come in」要整块理解。', rule: '先确定 come in 是verb，再套「进入」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come in.q1', senseId: 'come in.s1', errorType: 'meaning', type: '词义选择', prompt: '「come in」在本条的核心意思是：', options: ['进入', '完全相反的意思', '一种古代钱币'], answer: '进入', explain: 'come in：进入。' },
      { id: 'come in.q2', senseId: 'come in.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come in?', options: ['进入', 'a kind of ancient coin', 'the past tense of be'], answer: '进入', explain: '对的是「进入」。' },
      { id: 'come in.q3', senseId: 'come in.s1', errorType: 'grammar', type: '词义选择', prompt: 'come in 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come in.q4', senseId: 'come in.s1', errorType: 'meaning', type: '词源', prompt: '记 come in 时，哪句更稳妥？', options: ['先锁住「进入」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「进入」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['进入'] },
  });

  D('come to', {
    etymology: {
      origin: '现代英语固定说法「come to」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come to', text: '现代英语固定说法「come to」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：总计。' },
      ],
      formationLogic: '核心义：总计。',
      mnemonic: '看到 come to，先说出「总计」。',
      note: '核心义：总计。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come to" and asked the class to keep it as one unit.', chinese: '老师把「come to」圈出来，让全班把它当成一个整体。它表示总计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come to.s1', en: 'In the margin she wrote "come to" so nobody would split the phrase.', zh: '她在页边写下「come to」，免得有人把这个说法拆开。意思是总计。', structure: 'come to / 表示 / 总计', grammar: 'verb，围绕「总计」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come to and lost the point.', right: 'Keep "come to" together: it means 总计.', reason: '「come to」要整块理解。', rule: '先确定 come to 是verb，再套「总计」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come to.q1', senseId: 'come to.s1', errorType: 'meaning', type: '词义选择', prompt: '「come to」在本条的核心意思是：', options: ['总计', '完全相反的意思', '一种古代钱币'], answer: '总计', explain: 'come to：总计。' },
      { id: 'come to.q2', senseId: 'come to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come to?', options: ['总计', 'a kind of ancient coin', 'the past tense of be'], answer: '总计', explain: '对的是「总计」。' },
      { id: 'come to.q3', senseId: 'come to.s1', errorType: 'grammar', type: '词义选择', prompt: 'come to 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come to.q4', senseId: 'come to.s1', errorType: 'meaning', type: '词源', prompt: '记 come to 时，哪句更稳妥？', options: ['先锁住「总计」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「总计」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['总计'] },
  });

  D('come to mind', {
    etymology: {
      origin: '现代英语固定说法「come to mind」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come to mind', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come to mind', text: '现代英语固定说法「come to mind」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：想起。' },
      ],
      formationLogic: '核心义：想起。',
      mnemonic: '看到 come to mind，先说出「想起」。',
      note: '核心义：想起。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come to mind" and asked the class to keep it as one unit.', chinese: '老师把「come to mind」圈出来，让全班把它当成一个整体。它表示想起。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come to mind.s1', en: 'In the margin she wrote "come to mind" so nobody would split the phrase.', zh: '她在页边写下「come to mind」，免得有人把这个说法拆开。意思是想起。', structure: 'come to mind / 表示 / 想起', grammar: 'verb，围绕「想起」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come to mind and lost the point.', right: 'Keep "come to mind" together: it means 想起.', reason: '「come to mind」要整块理解。', rule: '先确定 come to mind 是verb，再套「想起」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come to mind.q1', senseId: 'come to mind.s1', errorType: 'meaning', type: '词义选择', prompt: '「come to mind」在本条的核心意思是：', options: ['想起', '完全相反的意思', '一种古代钱币'], answer: '想起', explain: 'come to mind：想起。' },
      { id: 'come to mind.q2', senseId: 'come to mind.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come to mind?', options: ['想起', 'a kind of ancient coin', 'the past tense of be'], answer: '想起', explain: '对的是「想起」。' },
      { id: 'come to mind.q3', senseId: 'come to mind.s1', errorType: 'grammar', type: '词义选择', prompt: 'come to mind 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come to mind.q4', senseId: 'come to mind.s1', errorType: 'meaning', type: '词源', prompt: '记 come to mind 时，哪句更稳妥？', options: ['先锁住「想起」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「想起」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['想起'] },
  });

  D('come together', {
    etymology: {
      origin: '现代英语固定说法「come together」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'come together', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'come together', text: '现代英语固定说法「come together」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：团聚。' },
      ],
      formationLogic: '核心义：团聚。',
      mnemonic: '看到 come together，先说出「团聚」。',
      note: '核心义：团聚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "come together" and asked the class to keep it as one unit.', chinese: '老师把「come together」圈出来，让全班把它当成一个整体。它表示团聚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'come together.s1', en: 'In the margin she wrote "come together" so nobody would split the phrase.', zh: '她在页边写下「come together」，免得有人把这个说法拆开。意思是团聚。', structure: 'come together / 表示 / 团聚', grammar: 'verb，围绕「团聚」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of come together and lost the point.', right: 'Keep "come together" together: it means 团聚.', reason: '「come together」要整块理解。', rule: '先确定 come together 是verb，再套「团聚」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'come together.q1', senseId: 'come together.s1', errorType: 'meaning', type: '词义选择', prompt: '「come together」在本条的核心意思是：', options: ['团聚', '完全相反的意思', '一种古代钱币'], answer: '团聚', explain: 'come together：团聚。' },
      { id: 'come together.q2', senseId: 'come together.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches come together?', options: ['团聚', 'a kind of ancient coin', 'the past tense of be'], answer: '团聚', explain: '对的是「团聚」。' },
      { id: 'come together.q3', senseId: 'come together.s1', errorType: 'grammar', type: '词义选择', prompt: 'come together 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'come together.q4', senseId: 'come together.s1', errorType: 'meaning', type: '词源', prompt: '记 come together 时，哪句更稳妥？', options: ['先锁住「团聚」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「团聚」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['团聚'] },
  });

  D('comeback', {
    etymology: {
      origin: '现代英语常用词「comeback」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'comeback', gloss: '复出' },
      suffix: null,
      history: [
        { label: 'comeback', text: '现代英语常用词「comeback」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：复出。' },
      ],
      formationLogic: '核心义：复出。',
      mnemonic: '看到 comeback，先说出「复出」。',
      note: '核心义：复出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comeback.', chinese: '这一章反复回到同一个点：复出。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comeback.s1', en: 'Without that comeback, the next paragraph is hard to follow.', zh: '没有这个复出，下一段会很难读。', structure: 'comeback / 表示 / 复出', grammar: 'noun，围绕「复出」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comeback.', right: 'He gave me some advice about the comeback.', reason: 'advice 不可数。名词 comeback 的单复数按词典词形记。', rule: '先确定 comeback 是noun，再套「复出」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comeback.q1', senseId: 'comeback.s1', errorType: 'meaning', type: '词义选择', prompt: '「comeback」在本条的核心意思是：', options: ['复出', '完全相反的意思', '一种古代钱币'], answer: '复出', explain: 'comeback：复出。' },
      { id: 'comeback.q2', senseId: 'comeback.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comeback?', options: ['复出', 'a kind of ancient coin', 'the past tense of be'], answer: '复出', explain: '对的是「复出」。' },
      { id: 'comeback.q3', senseId: 'comeback.s1', errorType: 'grammar', type: '词义选择', prompt: 'comeback 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comeback.q4', senseId: 'comeback.s1', errorType: 'meaning', type: '词源', prompt: '记 comeback 时，哪句更稳妥？', options: ['先锁住「复出」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「复出」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['复出'] },
  });

  D('comedy', {
    etymology: {
      origin: '现代英语常用词「comedy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'comedy', gloss: '喜剧' },
      suffix: null,
      history: [
        { label: 'comedy', text: '现代英语常用词「comedy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：喜剧。' },
      ],
      formationLogic: '核心义：喜剧。',
      mnemonic: '看到 comedy，先说出「喜剧」。',
      note: '核心义：喜剧。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comedy.', chinese: '这一章反复回到同一个点：喜剧。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comedy.s1', en: 'Without that comedy, the next paragraph is hard to follow.', zh: '没有这个喜剧，下一段会很难读。', structure: 'comedy / 表示 / 喜剧', grammar: 'noun，围绕「喜剧」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comedy.', right: 'He gave me some advice about the comedy.', reason: 'advice 不可数。名词 comedy 的单复数按词典词形记。', rule: '先确定 comedy 是noun，再套「喜剧」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comedy.q1', senseId: 'comedy.s1', errorType: 'meaning', type: '词义选择', prompt: '「comedy」在本条的核心意思是：', options: ['喜剧', '完全相反的意思', '一种古代钱币'], answer: '喜剧', explain: 'comedy：喜剧。' },
      { id: 'comedy.q2', senseId: 'comedy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comedy?', options: ['喜剧', 'a kind of ancient coin', 'the past tense of be'], answer: '喜剧', explain: '对的是「喜剧」。' },
      { id: 'comedy.q3', senseId: 'comedy.s1', errorType: 'grammar', type: '词义选择', prompt: 'comedy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comedy.q4', senseId: 'comedy.s1', errorType: 'meaning', type: '词源', prompt: '记 comedy 时，哪句更稳妥？', options: ['先锁住「喜剧」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喜剧」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喜剧'] },
  });

  D('comet', {
    etymology: {
      origin: '现代英语常用词「comet」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'comet', gloss: '彗星' },
      suffix: null,
      history: [
        { label: 'comet', text: '现代英语常用词「comet」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：彗星。' },
      ],
      formationLogic: '核心义：彗星。',
      mnemonic: '看到 comet，先说出「彗星」。',
      note: '核心义：彗星。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comet.', chinese: '这一章反复回到同一个点：彗星。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comet.s1', en: 'Without that comet, the next paragraph is hard to follow.', zh: '没有这个彗星，下一段会很难读。', structure: 'comet / 表示 / 彗星', grammar: 'noun，围绕「彗星」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comet.', right: 'He gave me some advice about the comet.', reason: 'advice 不可数。名词 comet 的单复数按词典词形记。', rule: '先确定 comet 是noun，再套「彗星」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comet.q1', senseId: 'comet.s1', errorType: 'meaning', type: '词义选择', prompt: '「comet」在本条的核心意思是：', options: ['彗星', '完全相反的意思', '一种古代钱币'], answer: '彗星', explain: 'comet：彗星。' },
      { id: 'comet.q2', senseId: 'comet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comet?', options: ['彗星', 'a kind of ancient coin', 'the past tense of be'], answer: '彗星', explain: '对的是「彗星」。' },
      { id: 'comet.q3', senseId: 'comet.s1', errorType: 'grammar', type: '词义选择', prompt: 'comet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comet.q4', senseId: 'comet.s1', errorType: 'meaning', type: '词源', prompt: '记 comet 时，哪句更稳妥？', options: ['先锁住「彗星」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「彗星」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['彗星'] },
  });

  D('comfort', {
    etymology: {
      origin: '拉丁语 confortare「使强壮」。',
      prefix: null,
      root: { text: 'comfort', gloss: '舒适' },
      suffix: null,
      history: [
        { label: 'comfort', text: '拉丁语 confortare「使强壮」。' },
        { label: '现在', text: '核心用法是：舒适。' },
      ],
      formationLogic: '考试认现在的用法：舒适。',
      mnemonic: '看到 comfort，先说出「舒适」。',
      note: '考试认现在的用法：舒适。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comfort.', chinese: '这一章反复回到同一个点：舒适。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comfort.s1', en: 'Without that comfort, the next paragraph is hard to follow.', zh: '没有这个舒适，下一段会很难读。', structure: 'comfort / 表示 / 舒适', grammar: 'noun，围绕「舒适」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comfort.', right: 'He gave me some advice about the comfort.', reason: 'advice 不可数。名词 comfort 的单复数按词典词形记。', rule: '先确定 comfort 是noun，再套「舒适」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comfort.q1', senseId: 'comfort.s1', errorType: 'meaning', type: '词义选择', prompt: '「comfort」在本条的核心意思是：', options: ['舒适', '完全相反的意思', '一种古代钱币'], answer: '舒适', explain: 'comfort：舒适。' },
      { id: 'comfort.q2', senseId: 'comfort.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comfort?', options: ['舒适', 'a kind of ancient coin', 'the past tense of be'], answer: '舒适', explain: '对的是「舒适」。' },
      { id: 'comfort.q3', senseId: 'comfort.s1', errorType: 'grammar', type: '词义选择', prompt: 'comfort 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comfort.q4', senseId: 'comfort.s1', errorType: 'meaning', type: '词源', prompt: '记 comfort 时，哪句更稳妥？', options: ['先锁住「舒适」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「舒适」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['舒适'] },
  });

  D('comfortable', {
    etymology: {
      origin: '英语派生：comfort + -able，词性转到「舒适的」。',
      prefix: null,
      root: { text: 'comfort', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'comfortable', text: '英语派生：comfort + -able，词性转到「舒适的」。' },
        { label: '现在', text: '核心用法是：舒适的。' },
      ],
      formationLogic: '先认词干 comfort，再看词尾。',
      mnemonic: '看到 comfortable，先说出「舒适的」。',
      note: '先认词干 comfort，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was comfortable.', chinese: '即使是初读者也能看出，这个结果是舒适的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comfortable.s1', en: 'They wanted a comfortable answer, not a long speech.', zh: '他们要一个舒适的的答复，不要长篇发言。', structure: 'comfortable / 表示 / 舒适的', grammar: 'adjective，围绕「舒适的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are comfortable.', right: 'The news is comfortable.', reason: 'news 作主语时动词用单数。', rule: '先确定 comfortable 是adjective，再套「舒适的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comfortable.q1', senseId: 'comfortable.s1', errorType: 'meaning', type: '词义选择', prompt: '「comfortable」在本条的核心意思是：', options: ['舒适的', '完全相反的意思', '一种古代钱币'], answer: '舒适的', explain: 'comfortable：舒适的。' },
      { id: 'comfortable.q2', senseId: 'comfortable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comfortable?', options: ['舒适的', 'a kind of ancient coin', 'the past tense of be'], answer: '舒适的', explain: '对的是「舒适的」。' },
      { id: 'comfortable.q3', senseId: 'comfortable.s1', errorType: 'grammar', type: '词义选择', prompt: 'comfortable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'comfortable.q4', senseId: 'comfortable.s1', errorType: 'meaning', type: '词源', prompt: '记 comfortable 时，哪句更稳妥？', options: ['先锁住「舒适的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「舒适的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['舒适的'] },
  });

  D('comic', {
    etymology: {
      origin: '英语派生：com + -ic，词性转到「连环漫画」。',
      prefix: null,
      root: { text: 'com', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'comic', text: '英语派生：com + -ic，词性转到「连环漫画」。' },
        { label: '现在', text: '核心用法是：连环漫画。' },
      ],
      formationLogic: '先认词干 com，再看词尾。',
      mnemonic: '看到 comic，先说出「连环漫画」。',
      note: '先认词干 com，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comic.', chinese: '这一章反复回到同一个点：连环漫画。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comic.s1', en: 'Without that comic, the next paragraph is hard to follow.', zh: '没有这个连环漫画，下一段会很难读。', structure: 'comic / 表示 / 连环漫画', grammar: 'noun，围绕「连环漫画」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comic.', right: 'He gave me some advice about the comic.', reason: 'advice 不可数。名词 comic 的单复数按词典词形记。', rule: '先确定 comic 是noun，再套「连环漫画」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comic.q1', senseId: 'comic.s1', errorType: 'meaning', type: '词义选择', prompt: '「comic」在本条的核心意思是：', options: ['连环漫画', '完全相反的意思', '一种古代钱币'], answer: '连环漫画', explain: 'comic：连环漫画。' },
      { id: 'comic.q2', senseId: 'comic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comic?', options: ['连环漫画', 'a kind of ancient coin', 'the past tense of be'], answer: '连环漫画', explain: '对的是「连环漫画」。' },
      { id: 'comic.q3', senseId: 'comic.s1', errorType: 'grammar', type: '词义选择', prompt: 'comic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comic.q4', senseId: 'comic.s1', errorType: 'meaning', type: '词源', prompt: '记 comic 时，哪句更稳妥？', options: ['先锁住「连环漫画」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「连环漫画」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['连环漫画'] },
  });

  D('coming', {
    etymology: {
      origin: '英语派生：com + -ing，词性转到「即将到来的」。',
      prefix: null,
      root: { text: 'com', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'coming', text: '英语派生：com + -ing，词性转到「即将到来的」。' },
        { label: '现在', text: '核心用法是：即将到来的。' },
      ],
      formationLogic: '先认词干 com，再看词尾。',
      mnemonic: '看到 coming，先说出「即将到来的」。',
      note: '先认词干 com，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was coming.', chinese: '即使是初读者也能看出，这个结果是即将到来的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coming.s1', en: 'They wanted a coming answer, not a long speech.', zh: '他们要一个即将到来的的答复，不要长篇发言。', structure: 'coming / 表示 / 即将到来的', grammar: 'adjective，围绕「即将到来的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are coming.', right: 'The news is coming.', reason: 'news 作主语时动词用单数。', rule: '先确定 coming 是adjective，再套「即将到来的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coming.q1', senseId: 'coming.s1', errorType: 'meaning', type: '词义选择', prompt: '「coming」在本条的核心意思是：', options: ['即将到来的', '完全相反的意思', '一种古代钱币'], answer: '即将到来的', explain: 'coming：即将到来的。' },
      { id: 'coming.q2', senseId: 'coming.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coming?', options: ['即将到来的', 'a kind of ancient coin', 'the past tense of be'], answer: '即将到来的', explain: '对的是「即将到来的」。' },
      { id: 'coming.q3', senseId: 'coming.s1', errorType: 'grammar', type: '词义选择', prompt: 'coming 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'coming.q4', senseId: 'coming.s1', errorType: 'meaning', type: '词源', prompt: '记 coming 时，哪句更稳妥？', options: ['先锁住「即将到来的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「即将到来的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['即将到来的'] },
  });

  D('coming back', {
    etymology: {
      origin: '现代英语固定说法「coming back」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'coming back', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'coming back', text: '现代英语固定说法「coming back」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：回来。' },
      ],
      formationLogic: '核心义：回来。',
      mnemonic: '看到 coming back，先说出「回来」。',
      note: '核心义：回来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "coming back" and asked the class to keep it as one unit.', chinese: '老师把「coming back」圈出来，让全班把它当成一个整体。它表示回来。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'coming back.s1', en: 'In the margin she wrote "coming back" so nobody would split the phrase.', zh: '她在页边写下「coming back」，免得有人把这个说法拆开。意思是回来。', structure: 'coming back / 表示 / 回来', grammar: 'verb，围绕「回来」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of coming back and lost the point.', right: 'Keep "coming back" together: it means 回来.', reason: '「coming back」要整块理解。', rule: '先确定 coming back 是verb，再套「回来」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'coming back.q1', senseId: 'coming back.s1', errorType: 'meaning', type: '词义选择', prompt: '「coming back」在本条的核心意思是：', options: ['回来', '完全相反的意思', '一种古代钱币'], answer: '回来', explain: 'coming back：回来。' },
      { id: 'coming back.q2', senseId: 'coming back.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches coming back?', options: ['回来', 'a kind of ancient coin', 'the past tense of be'], answer: '回来', explain: '对的是「回来」。' },
      { id: 'coming back.q3', senseId: 'coming back.s1', errorType: 'grammar', type: '词义选择', prompt: 'coming back 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'coming back.q4', senseId: 'coming back.s1', errorType: 'meaning', type: '词源', prompt: '记 coming back 时，哪句更稳妥？', options: ['先锁住「回来」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「回来」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['回来'] },
  });

  D('comma', {
    etymology: {
      origin: '现代英语常用词「comma」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'comma', gloss: '逗号' },
      suffix: null,
      history: [
        { label: 'comma', text: '现代英语常用词「comma」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：逗号。' },
      ],
      formationLogic: '核心义：逗号。',
      mnemonic: '看到 comma，先说出「逗号」。',
      note: '核心义：逗号。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one comma.', chinese: '这一章反复回到同一个点：逗号。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'comma.s1', en: 'Without that comma, the next paragraph is hard to follow.', zh: '没有这个逗号，下一段会很难读。', structure: 'comma / 表示 / 逗号', grammar: 'noun，围绕「逗号」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the comma.', right: 'He gave me some advice about the comma.', reason: 'advice 不可数。名词 comma 的单复数按词典词形记。', rule: '先确定 comma 是noun，再套「逗号」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'comma.q1', senseId: 'comma.s1', errorType: 'meaning', type: '词义选择', prompt: '「comma」在本条的核心意思是：', options: ['逗号', '完全相反的意思', '一种古代钱币'], answer: '逗号', explain: 'comma：逗号。' },
      { id: 'comma.q2', senseId: 'comma.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches comma?', options: ['逗号', 'a kind of ancient coin', 'the past tense of be'], answer: '逗号', explain: '对的是「逗号」。' },
      { id: 'comma.q3', senseId: 'comma.s1', errorType: 'grammar', type: '词义选择', prompt: 'comma 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'comma.q4', senseId: 'comma.s1', errorType: 'meaning', type: '词源', prompt: '记 comma 时，哪句更稳妥？', options: ['先锁住「逗号」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「逗号」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逗号'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
