/* data/words/cet/author_depth_d2.js
 * 手敲深度补丁：advocacy–analogue（200）。不改释义正文，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写出处方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('advocacy', {
    etymology: {
      origin: '现代英语常用词「advocacy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'advocacy', gloss: '倡导' },
      suffix: null,
      history: [
        { label: 'advocacy', text: '现代英语常用词「advocacy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：倡导。' },
      ],
      formationLogic: '核心义：倡导。',
      mnemonic: '看到 advocacy，先说出「倡导」，再放进一句自己的话。',
      note: '核心义：倡导。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one advocacy.', chinese: '这一章反复回到同一个点：倡导。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advocacy.s1', en: 'Without that advocacy, the story would be hard to follow.', zh: '没有这个倡导，故事会很难读下去。', structure: 'advocacy / 在句中表示 / 倡导', grammar: 'noun 用法，围绕「倡导」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the advocacy.', right: 'He gave me a lot of advice about the advocacy.', reason: 'advice 不可数。名词 advocacy 的单复数也要按词典词形来，不要自造。', rule: '先确定 advocacy 是noun，再套「倡导」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advocacy.q1', senseId: 'advocacy.s1', errorType: 'meaning', type: '词义选择', prompt: '「advocacy」在本条的核心意思是：', options: ['倡导', '完全相反的意思', '与本词无关的语法术语'], answer: '倡导', explain: 'advocacy：倡导。' },
      { id: 'advocacy.q2', senseId: 'advocacy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advocacy?', options: ['倡导', 'a kind of ancient coin', 'the past tense of be'], answer: '倡导', explain: '对的是「倡导」。' },
      { id: 'advocacy.q3', senseId: 'advocacy.s1', errorType: 'grammar', type: '词义选择', prompt: 'advocacy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'advocacy.q4', senseId: 'advocacy.s1', errorType: 'meaning', type: '词源', prompt: '记 advocacy 时，下面哪句更稳妥？', options: ['先锁住「倡导」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「倡导」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['倡导'] },
  });

  D('advocate', {
    etymology: {
      origin: '拉丁语 advocatus「请来帮忙说话的人」，vocare「呼唤」。',
      prefix: null,
      root: { text: 'advocate', gloss: '提倡' },
      suffix: null,
      history: [
        { label: 'advocate', text: '拉丁语 advocatus「请来帮忙说话的人」，vocare「呼唤」。' },
        { label: '现在', text: '核心用法是：提倡。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：提倡。',
      mnemonic: '看到 advocate，先说出「提倡」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：提倡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to advocate before the office closed.', chinese: '小组得在办公室关门前完成这件事：提倡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'advocate.s1', en: 'Nobody wanted to advocate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 advocate 是「提倡」。', structure: 'advocate / 在句中表示 / 提倡', grammar: 'verb 用法，围绕「提倡」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She advocateed the form yesterday without checking the real past form.', right: 'Look up the past form of "advocate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 advocate 是verb，再套「提倡」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'advocate.q1', senseId: 'advocate.s1', errorType: 'meaning', type: '词义选择', prompt: '「advocate」在本条的核心意思是：', options: ['提倡', '完全相反的意思', '与本词无关的语法术语'], answer: '提倡', explain: 'advocate：提倡。' },
      { id: 'advocate.q2', senseId: 'advocate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches advocate?', options: ['提倡', 'a kind of ancient coin', 'the past tense of be'], answer: '提倡', explain: '对的是「提倡」。' },
      { id: 'advocate.q3', senseId: 'advocate.s1', errorType: 'grammar', type: '词义选择', prompt: 'advocate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'advocate.q4', senseId: 'advocate.s1', errorType: 'meaning', type: '词源', prompt: '记 advocate 时，下面哪句更稳妥？', options: ['先锁住「提倡」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「提倡」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['提倡'] },
  });

  D('aerial', {
    etymology: {
      origin: '拉丁语 aerius，希腊语 aer「空气」。',
      prefix: null,
      root: { text: 'aerial', gloss: '空中的' },
      suffix: null,
      history: [
        { label: 'aerial', text: '拉丁语 aerius，希腊语 aer「空气」。' },
        { label: '现在', text: '核心用法是：空中的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：空中的。',
      mnemonic: '看到 aerial，先说出「空中的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：空中的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aerial even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得空中的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aerial.s1', en: 'They needed a aerial answer, not a long speech.', zh: '他们要的是空中的的答复，不是长篇发言。', structure: 'aerial / 在句中表示 / 空中的', grammar: 'adjective 用法，围绕「空中的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aerial.', right: 'The news is aerial.', reason: 'news 作主语时动词用单数。形容词 aerial 放在系动词后面。', rule: '先确定 aerial 是adjective，再套「空中的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aerial.q1', senseId: 'aerial.s1', errorType: 'meaning', type: '词义选择', prompt: '「aerial」在本条的核心意思是：', options: ['空中的', '完全相反的意思', '与本词无关的语法术语'], answer: '空中的', explain: 'aerial：空中的。' },
      { id: 'aerial.q2', senseId: 'aerial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aerial?', options: ['空中的', 'a kind of ancient coin', 'the past tense of be'], answer: '空中的', explain: '对的是「空中的」。' },
      { id: 'aerial.q3', senseId: 'aerial.s1', errorType: 'grammar', type: '词义选择', prompt: 'aerial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aerial.q4', senseId: 'aerial.s1', errorType: 'meaning', type: '词源', prompt: '记 aerial 时，下面哪句更稳妥？', options: ['先锁住「空中的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「空中的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空中的'] },
  });

  D('aerosol', {
    etymology: {
      origin: '现代英语常用词「aerosol」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aerosol', gloss: '气雾剂' },
      suffix: null,
      history: [
        { label: 'aerosol', text: '现代英语常用词「aerosol」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：气雾剂。' },
      ],
      formationLogic: '核心义：气雾剂。',
      mnemonic: '看到 aerosol，先说出「气雾剂」，再放进一句自己的话。',
      note: '核心义：气雾剂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aerosol.', chinese: '这一章反复回到同一个点：气雾剂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aerosol.s1', en: 'Without that aerosol, the story would be hard to follow.', zh: '没有这个气雾剂，故事会很难读下去。', structure: 'aerosol / 在句中表示 / 气雾剂', grammar: 'noun 用法，围绕「气雾剂」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aerosol.', right: 'He gave me a lot of advice about the aerosol.', reason: 'advice 不可数。名词 aerosol 的单复数也要按词典词形来，不要自造。', rule: '先确定 aerosol 是noun，再套「气雾剂」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aerosol.q1', senseId: 'aerosol.s1', errorType: 'meaning', type: '词义选择', prompt: '「aerosol」在本条的核心意思是：', options: ['气雾剂', '完全相反的意思', '与本词无关的语法术语'], answer: '气雾剂', explain: 'aerosol：气雾剂。' },
      { id: 'aerosol.q2', senseId: 'aerosol.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aerosol?', options: ['气雾剂', 'a kind of ancient coin', 'the past tense of be'], answer: '气雾剂', explain: '对的是「气雾剂」。' },
      { id: 'aerosol.q3', senseId: 'aerosol.s1', errorType: 'grammar', type: '词义选择', prompt: 'aerosol 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aerosol.q4', senseId: 'aerosol.s1', errorType: 'meaning', type: '词源', prompt: '记 aerosol 时，下面哪句更稳妥？', options: ['先锁住「气雾剂」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「气雾剂」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['气雾剂'] },
  });

  D('aesthetic', {
    etymology: {
      origin: '希腊语 aisthetikos「与感觉有关的」。',
      prefix: null,
      root: { text: 'aesthetic', gloss: '美学的' },
      suffix: null,
      history: [
        { label: 'aesthetic', text: '希腊语 aisthetikos「与感觉有关的」。' },
        { label: '现在', text: '核心用法是：美学的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：美学的。',
      mnemonic: '看到 aesthetic，先说出「美学的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：美学的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aesthetic even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得美学的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aesthetic.s1', en: 'They needed a aesthetic answer, not a long speech.', zh: '他们要的是美学的的答复，不是长篇发言。', structure: 'aesthetic / 在句中表示 / 美学的', grammar: 'adjective 用法，围绕「美学的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aesthetic.', right: 'The news is aesthetic.', reason: 'news 作主语时动词用单数。形容词 aesthetic 放在系动词后面。', rule: '先确定 aesthetic 是adjective，再套「美学的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aesthetic.q1', senseId: 'aesthetic.s1', errorType: 'meaning', type: '词义选择', prompt: '「aesthetic」在本条的核心意思是：', options: ['美学的', '完全相反的意思', '与本词无关的语法术语'], answer: '美学的', explain: 'aesthetic：美学的。' },
      { id: 'aesthetic.q2', senseId: 'aesthetic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aesthetic?', options: ['美学的', 'a kind of ancient coin', 'the past tense of be'], answer: '美学的', explain: '对的是「美学的」。' },
      { id: 'aesthetic.q3', senseId: 'aesthetic.s1', errorType: 'grammar', type: '词义选择', prompt: 'aesthetic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aesthetic.q4', senseId: 'aesthetic.s1', errorType: 'meaning', type: '词源', prompt: '记 aesthetic 时，下面哪句更稳妥？', options: ['先锁住「美学的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「美学的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['美学的'] },
  });

  D('aesthetics', {
    etymology: {
      origin: '现代英语常用词「aesthetics」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aesthetics', gloss: '美学' },
      suffix: null,
      history: [
        { label: 'aesthetics', text: '现代英语常用词「aesthetics」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：美学。' },
      ],
      formationLogic: '核心义：美学。',
      mnemonic: '看到 aesthetics，先说出「美学」，再放进一句自己的话。',
      note: '核心义：美学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aesthetics.', chinese: '这一章反复回到同一个点：美学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aesthetics.s1', en: 'Without that aesthetics, the story would be hard to follow.', zh: '没有这个美学，故事会很难读下去。', structure: 'aesthetics / 在句中表示 / 美学', grammar: 'noun 用法，围绕「美学」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aesthetics.', right: 'He gave me a lot of advice about the aesthetics.', reason: 'advice 不可数。名词 aesthetics 的单复数也要按词典词形来，不要自造。', rule: '先确定 aesthetics 是noun，再套「美学」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aesthetics.q1', senseId: 'aesthetics.s1', errorType: 'meaning', type: '词义选择', prompt: '「aesthetics」在本条的核心意思是：', options: ['美学', '完全相反的意思', '与本词无关的语法术语'], answer: '美学', explain: 'aesthetics：美学。' },
      { id: 'aesthetics.q2', senseId: 'aesthetics.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aesthetics?', options: ['美学', 'a kind of ancient coin', 'the past tense of be'], answer: '美学', explain: '对的是「美学」。' },
      { id: 'aesthetics.q3', senseId: 'aesthetics.s1', errorType: 'grammar', type: '词义选择', prompt: 'aesthetics 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aesthetics.q4', senseId: 'aesthetics.s1', errorType: 'meaning', type: '词源', prompt: '记 aesthetics 时，下面哪句更稳妥？', options: ['先锁住「美学」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「美学」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['美学'] },
  });

  D('affair', {
    etymology: {
      origin: '古法语 afaire：a + faire「要做的事」。',
      prefix: null,
      root: { text: 'affair', gloss: '事务' },
      suffix: null,
      history: [
        { label: 'affair', text: '古法语 afaire：a + faire「要做的事」。' },
        { label: '现在', text: '核心用法是：事务。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：事务。',
      mnemonic: '看到 affair，先说出「事务」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：事务。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one affair.', chinese: '这一章反复回到同一个点：事务。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affair.s1', en: 'Without that affair, the story would be hard to follow.', zh: '没有这个事务，故事会很难读下去。', structure: 'affair / 在句中表示 / 事务', grammar: 'noun 用法，围绕「事务」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the affair.', right: 'He gave me a lot of advice about the affair.', reason: 'advice 不可数。名词 affair 的单复数也要按词典词形来，不要自造。', rule: '先确定 affair 是noun，再套「事务」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affair.q1', senseId: 'affair.s1', errorType: 'meaning', type: '词义选择', prompt: '「affair」在本条的核心意思是：', options: ['事务', '完全相反的意思', '与本词无关的语法术语'], answer: '事务', explain: 'affair：事务。' },
      { id: 'affair.q2', senseId: 'affair.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affair?', options: ['事务', 'a kind of ancient coin', 'the past tense of be'], answer: '事务', explain: '对的是「事务」。' },
      { id: 'affair.q3', senseId: 'affair.s1', errorType: 'grammar', type: '词义选择', prompt: 'affair 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'affair.q4', senseId: 'affair.s1', errorType: 'meaning', type: '词源', prompt: '记 affair 时，下面哪句更稳妥？', options: ['先锁住「事务」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「事务」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['事务'] },
  });

  D('affairs', {
    etymology: {
      origin: '现代英语常用词「affairs」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affairs', gloss: '事务' },
      suffix: null,
      history: [
        { label: 'affairs', text: '现代英语常用词「affairs」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：事务。' },
      ],
      formationLogic: '核心义：事务。',
      mnemonic: '看到 affairs，先说出「事务」，再放进一句自己的话。',
      note: '核心义：事务。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one affairs.', chinese: '这一章反复回到同一个点：事务。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affairs.s1', en: 'Without that affairs, the story would be hard to follow.', zh: '没有这个事务，故事会很难读下去。', structure: 'affairs / 在句中表示 / 事务', grammar: 'noun 用法，围绕「事务」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the affairs.', right: 'He gave me a lot of advice about the affairs.', reason: 'advice 不可数。名词 affairs 的单复数也要按词典词形来，不要自造。', rule: '先确定 affairs 是noun，再套「事务」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affairs.q1', senseId: 'affairs.s1', errorType: 'meaning', type: '词义选择', prompt: '「affairs」在本条的核心意思是：', options: ['事务', '完全相反的意思', '与本词无关的语法术语'], answer: '事务', explain: 'affairs：事务。' },
      { id: 'affairs.q2', senseId: 'affairs.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affairs?', options: ['事务', 'a kind of ancient coin', 'the past tense of be'], answer: '事务', explain: '对的是「事务」。' },
      { id: 'affairs.q3', senseId: 'affairs.s1', errorType: 'grammar', type: '词义选择', prompt: 'affairs 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'affairs.q4', senseId: 'affairs.s1', errorType: 'meaning', type: '词源', prompt: '记 affairs 时，下面哪句更稳妥？', options: ['先锁住「事务」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「事务」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['事务'] },
  });

  D('affected', {
    etymology: {
      origin: '现代英语常用词「affected」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affected', gloss: '受影响的' },
      suffix: null,
      history: [
        { label: 'affected', text: '现代英语常用词「affected」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：受影响的。' },
      ],
      formationLogic: '核心义：受影响的。',
      mnemonic: '看到 affected，先说出「受影响的」，再放进一句自己的话。',
      note: '核心义：受影响的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked affected even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得受影响的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affected.s1', en: 'They needed a affected answer, not a long speech.', zh: '他们要的是受影响的的答复，不是长篇发言。', structure: 'affected / 在句中表示 / 受影响的', grammar: 'adjective 用法，围绕「受影响的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are affected.', right: 'The news is affected.', reason: 'news 作主语时动词用单数。形容词 affected 放在系动词后面。', rule: '先确定 affected 是adjective，再套「受影响的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affected.q1', senseId: 'affected.s1', errorType: 'meaning', type: '词义选择', prompt: '「affected」在本条的核心意思是：', options: ['受影响的', '完全相反的意思', '与本词无关的语法术语'], answer: '受影响的', explain: 'affected：受影响的。' },
      { id: 'affected.q2', senseId: 'affected.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affected?', options: ['受影响的', 'a kind of ancient coin', 'the past tense of be'], answer: '受影响的', explain: '对的是「受影响的」。' },
      { id: 'affected.q3', senseId: 'affected.s1', errorType: 'grammar', type: '词义选择', prompt: 'affected 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'affected.q4', senseId: 'affected.s1', errorType: 'meaning', type: '词源', prompt: '记 affected 时，下面哪句更稳妥？', options: ['先锁住「受影响的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「受影响的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['受影响的'] },
  });

  D('affection', {
    etymology: {
      origin: '拉丁语 affectio「受到影响的状态」，后专指感情。',
      prefix: null,
      root: { text: 'affection', gloss: '喜爱' },
      suffix: null,
      history: [
        { label: 'affection', text: '拉丁语 affectio「受到影响的状态」，后专指感情。' },
        { label: '现在', text: '核心用法是：喜爱。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：喜爱。',
      mnemonic: '看到 affection，先说出「喜爱」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：喜爱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one affection.', chinese: '这一章反复回到同一个点：喜爱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affection.s1', en: 'Without that affection, the story would be hard to follow.', zh: '没有这个喜爱，故事会很难读下去。', structure: 'affection / 在句中表示 / 喜爱', grammar: 'noun 用法，围绕「喜爱」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the affection.', right: 'He gave me a lot of advice about the affection.', reason: 'advice 不可数。名词 affection 的单复数也要按词典词形来，不要自造。', rule: '先确定 affection 是noun，再套「喜爱」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affection.q1', senseId: 'affection.s1', errorType: 'meaning', type: '词义选择', prompt: '「affection」在本条的核心意思是：', options: ['喜爱', '完全相反的意思', '与本词无关的语法术语'], answer: '喜爱', explain: 'affection：喜爱。' },
      { id: 'affection.q2', senseId: 'affection.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affection?', options: ['喜爱', 'a kind of ancient coin', 'the past tense of be'], answer: '喜爱', explain: '对的是「喜爱」。' },
      { id: 'affection.q3', senseId: 'affection.s1', errorType: 'grammar', type: '词义选择', prompt: 'affection 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'affection.q4', senseId: 'affection.s1', errorType: 'meaning', type: '词源', prompt: '记 affection 时，下面哪句更稳妥？', options: ['先锁住「喜爱」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「喜爱」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喜爱'] },
  });

  D('affectionate', {
    etymology: {
      origin: '现代英语常用词「affectionate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affectionate', gloss: '深情的' },
      suffix: null,
      history: [
        { label: 'affectionate', text: '现代英语常用词「affectionate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：深情的。' },
      ],
      formationLogic: '核心义：深情的。',
      mnemonic: '看到 affectionate，先说出「深情的」，再放进一句自己的话。',
      note: '核心义：深情的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked affectionate even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得深情的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affectionate.s1', en: 'They needed a affectionate answer, not a long speech.', zh: '他们要的是深情的的答复，不是长篇发言。', structure: 'affectionate / 在句中表示 / 深情的', grammar: 'adjective 用法，围绕「深情的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are affectionate.', right: 'The news is affectionate.', reason: 'news 作主语时动词用单数。形容词 affectionate 放在系动词后面。', rule: '先确定 affectionate 是adjective，再套「深情的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affectionate.q1', senseId: 'affectionate.s1', errorType: 'meaning', type: '词义选择', prompt: '「affectionate」在本条的核心意思是：', options: ['深情的', '完全相反的意思', '与本词无关的语法术语'], answer: '深情的', explain: 'affectionate：深情的。' },
      { id: 'affectionate.q2', senseId: 'affectionate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affectionate?', options: ['深情的', 'a kind of ancient coin', 'the past tense of be'], answer: '深情的', explain: '对的是「深情的」。' },
      { id: 'affectionate.q3', senseId: 'affectionate.s1', errorType: 'grammar', type: '词义选择', prompt: 'affectionate 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'affectionate.q4', senseId: 'affectionate.s1', errorType: 'meaning', type: '词源', prompt: '记 affectionate 时，下面哪句更稳妥？', options: ['先锁住「深情的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「深情的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深情的'] },
  });

  D('affiliate', {
    etymology: {
      origin: '现代英语常用词「affiliate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affiliate', gloss: '使隶属' },
      suffix: null,
      history: [
        { label: 'affiliate', text: '现代英语常用词「affiliate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：使隶属。' },
      ],
      formationLogic: '核心义：使隶属。',
      mnemonic: '看到 affiliate，先说出「使隶属」，再放进一句自己的话。',
      note: '核心义：使隶属。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to affiliate before the office closed.', chinese: '小组得在办公室关门前完成这件事：使隶属。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affiliate.s1', en: 'Nobody wanted to affiliate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 affiliate 是「使隶属」。', structure: 'affiliate / 在句中表示 / 使隶属', grammar: 'verb 用法，围绕「使隶属」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She affiliateed the form yesterday without checking the real past form.', right: 'Look up the past form of "affiliate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 affiliate 是verb，再套「使隶属」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affiliate.q1', senseId: 'affiliate.s1', errorType: 'meaning', type: '词义选择', prompt: '「affiliate」在本条的核心意思是：', options: ['使隶属', '完全相反的意思', '与本词无关的语法术语'], answer: '使隶属', explain: 'affiliate：使隶属。' },
      { id: 'affiliate.q2', senseId: 'affiliate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affiliate?', options: ['使隶属', 'a kind of ancient coin', 'the past tense of be'], answer: '使隶属', explain: '对的是「使隶属」。' },
      { id: 'affiliate.q3', senseId: 'affiliate.s1', errorType: 'grammar', type: '词义选择', prompt: 'affiliate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'affiliate.q4', senseId: 'affiliate.s1', errorType: 'meaning', type: '词源', prompt: '记 affiliate 时，下面哪句更稳妥？', options: ['先锁住「使隶属」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「使隶属」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使隶属'] },
  });

  D('affiliation', {
    etymology: {
      origin: '英语派生：affilia 加上词尾，构成与「隶属关系」相应的词类。',
      prefix: null,
      root: { text: 'affilia', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'affiliation', text: '英语派生：affilia 加上词尾，构成与「隶属关系」相应的词类。' },
        { label: '现在', text: '核心用法是：隶属关系。' },
      ],
      formationLogic: '先认词干 affilia，再看词尾决定词性。',
      mnemonic: '看到 affiliation，先说出「隶属关系」，再放进一句自己的话。',
      note: '先认词干 affilia，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one affiliation.', chinese: '这一章反复回到同一个点：隶属关系。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affiliation.s1', en: 'Without that affiliation, the story would be hard to follow.', zh: '没有这个隶属关系，故事会很难读下去。', structure: 'affiliation / 在句中表示 / 隶属关系', grammar: 'noun 用法，围绕「隶属关系」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the affiliation.', right: 'He gave me a lot of advice about the affiliation.', reason: 'advice 不可数。名词 affiliation 的单复数也要按词典词形来，不要自造。', rule: '先确定 affiliation 是noun，再套「隶属关系」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affiliation.q1', senseId: 'affiliation.s1', errorType: 'meaning', type: '词义选择', prompt: '「affiliation」在本条的核心意思是：', options: ['隶属关系', '完全相反的意思', '与本词无关的语法术语'], answer: '隶属关系', explain: 'affiliation：隶属关系。' },
      { id: 'affiliation.q2', senseId: 'affiliation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affiliation?', options: ['隶属关系', 'a kind of ancient coin', 'the past tense of be'], answer: '隶属关系', explain: '对的是「隶属关系」。' },
      { id: 'affiliation.q3', senseId: 'affiliation.s1', errorType: 'grammar', type: '词义选择', prompt: 'affiliation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'affiliation.q4', senseId: 'affiliation.s1', errorType: 'meaning', type: '词源', prompt: '记 affiliation 时，下面哪句更稳妥？', options: ['先锁住「隶属关系」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「隶属关系」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['隶属关系'] },
  });

  D('affirm', {
    etymology: {
      origin: '现代英语常用词「affirm」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affirm', gloss: '确认' },
      suffix: null,
      history: [
        { label: 'affirm', text: '现代英语常用词「affirm」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：确认。' },
      ],
      formationLogic: '核心义：确认。',
      mnemonic: '看到 affirm，先说出「确认」，再放进一句自己的话。',
      note: '核心义：确认。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to affirm before the office closed.', chinese: '小组得在办公室关门前完成这件事：确认。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affirm.s1', en: 'Nobody wanted to affirm, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 affirm 是「确认」。', structure: 'affirm / 在句中表示 / 确认', grammar: 'verb 用法，围绕「确认」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She affirmed the form yesterday without checking the real past form.', right: 'Look up the past form of "affirm" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 affirm 是verb，再套「确认」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affirm.q1', senseId: 'affirm.s1', errorType: 'meaning', type: '词义选择', prompt: '「affirm」在本条的核心意思是：', options: ['确认', '完全相反的意思', '与本词无关的语法术语'], answer: '确认', explain: 'affirm：确认。' },
      { id: 'affirm.q2', senseId: 'affirm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affirm?', options: ['确认', 'a kind of ancient coin', 'the past tense of be'], answer: '确认', explain: '对的是「确认」。' },
      { id: 'affirm.q3', senseId: 'affirm.s1', errorType: 'grammar', type: '词义选择', prompt: 'affirm 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'affirm.q4', senseId: 'affirm.s1', errorType: 'meaning', type: '词源', prompt: '记 affirm 时，下面哪句更稳妥？', options: ['先锁住「确认」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「确认」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['确认'] },
  });

  D('affirmation', {
    etymology: {
      origin: '英语派生：affirma 加上词尾，构成与「肯定」相应的词类。',
      prefix: null,
      root: { text: 'affirma', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'affirmation', text: '英语派生：affirma 加上词尾，构成与「肯定」相应的词类。' },
        { label: '现在', text: '核心用法是：肯定。' },
      ],
      formationLogic: '先认词干 affirma，再看词尾决定词性。',
      mnemonic: '看到 affirmation，先说出「肯定」，再放进一句自己的话。',
      note: '先认词干 affirma，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one affirmation.', chinese: '这一章反复回到同一个点：肯定。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affirmation.s1', en: 'Without that affirmation, the story would be hard to follow.', zh: '没有这个肯定，故事会很难读下去。', structure: 'affirmation / 在句中表示 / 肯定', grammar: 'noun 用法，围绕「肯定」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the affirmation.', right: 'He gave me a lot of advice about the affirmation.', reason: 'advice 不可数。名词 affirmation 的单复数也要按词典词形来，不要自造。', rule: '先确定 affirmation 是noun，再套「肯定」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affirmation.q1', senseId: 'affirmation.s1', errorType: 'meaning', type: '词义选择', prompt: '「affirmation」在本条的核心意思是：', options: ['肯定', '完全相反的意思', '与本词无关的语法术语'], answer: '肯定', explain: 'affirmation：肯定。' },
      { id: 'affirmation.q2', senseId: 'affirmation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affirmation?', options: ['肯定', 'a kind of ancient coin', 'the past tense of be'], answer: '肯定', explain: '对的是「肯定」。' },
      { id: 'affirmation.q3', senseId: 'affirmation.s1', errorType: 'grammar', type: '词义选择', prompt: 'affirmation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'affirmation.q4', senseId: 'affirmation.s1', errorType: 'meaning', type: '词源', prompt: '记 affirmation 时，下面哪句更稳妥？', options: ['先锁住「肯定」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「肯定」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肯定'] },
  });

  D('affirmative', {
    etymology: {
      origin: '英语派生：affirmat 加上词尾，构成与「肯定的」相应的词类。',
      prefix: null,
      root: { text: 'affirmat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'affirmative', text: '英语派生：affirmat 加上词尾，构成与「肯定的」相应的词类。' },
        { label: '现在', text: '核心用法是：肯定的。' },
      ],
      formationLogic: '先认词干 affirmat，再看词尾决定词性。',
      mnemonic: '看到 affirmative，先说出「肯定的」，再放进一句自己的话。',
      note: '先认词干 affirmat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked affirmative even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得肯定的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affirmative.s1', en: 'They needed a affirmative answer, not a long speech.', zh: '他们要的是肯定的的答复，不是长篇发言。', structure: 'affirmative / 在句中表示 / 肯定的', grammar: 'adjective 用法，围绕「肯定的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are affirmative.', right: 'The news is affirmative.', reason: 'news 作主语时动词用单数。形容词 affirmative 放在系动词后面。', rule: '先确定 affirmative 是adjective，再套「肯定的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affirmative.q1', senseId: 'affirmative.s1', errorType: 'meaning', type: '词义选择', prompt: '「affirmative」在本条的核心意思是：', options: ['肯定的', '完全相反的意思', '与本词无关的语法术语'], answer: '肯定的', explain: 'affirmative：肯定的。' },
      { id: 'affirmative.q2', senseId: 'affirmative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affirmative?', options: ['肯定的', 'a kind of ancient coin', 'the past tense of be'], answer: '肯定的', explain: '对的是「肯定的」。' },
      { id: 'affirmative.q3', senseId: 'affirmative.s1', errorType: 'grammar', type: '词义选择', prompt: 'affirmative 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'affirmative.q4', senseId: 'affirmative.s1', errorType: 'meaning', type: '词源', prompt: '记 affirmative 时，下面哪句更稳妥？', options: ['先锁住「肯定的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「肯定的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['肯定的'] },
  });

  D('affix', {
    etymology: {
      origin: '现代英语常用词「affix」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affix', gloss: '贴上' },
      suffix: null,
      history: [
        { label: 'affix', text: '现代英语常用词「affix」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：贴上。' },
      ],
      formationLogic: '核心义：贴上。',
      mnemonic: '看到 affix，先说出「贴上」，再放进一句自己的话。',
      note: '核心义：贴上。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to affix before the office closed.', chinese: '小组得在办公室关门前完成这件事：贴上。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affix.s1', en: 'Nobody wanted to affix, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 affix 是「贴上」。', structure: 'affix / 在句中表示 / 贴上', grammar: 'verb 用法，围绕「贴上」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She affixed the form yesterday without checking the real past form.', right: 'Look up the past form of "affix" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 affix 是verb，再套「贴上」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affix.q1', senseId: 'affix.s1', errorType: 'meaning', type: '词义选择', prompt: '「affix」在本条的核心意思是：', options: ['贴上', '完全相反的意思', '与本词无关的语法术语'], answer: '贴上', explain: 'affix：贴上。' },
      { id: 'affix.q2', senseId: 'affix.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affix?', options: ['贴上', 'a kind of ancient coin', 'the past tense of be'], answer: '贴上', explain: '对的是「贴上」。' },
      { id: 'affix.q3', senseId: 'affix.s1', errorType: 'grammar', type: '词义选择', prompt: 'affix 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'affix.q4', senseId: 'affix.s1', errorType: 'meaning', type: '词源', prompt: '记 affix 时，下面哪句更稳妥？', options: ['先锁住「贴上」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「贴上」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['贴上'] },
  });

  D('afflict', {
    etymology: {
      origin: '现代英语常用词「afflict」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'afflict', gloss: '折磨' },
      suffix: null,
      history: [
        { label: 'afflict', text: '现代英语常用词「afflict」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：折磨。' },
      ],
      formationLogic: '核心义：折磨。',
      mnemonic: '看到 afflict，先说出「折磨」，再放进一句自己的话。',
      note: '核心义：折磨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to afflict before the office closed.', chinese: '小组得在办公室关门前完成这件事：折磨。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afflict.s1', en: 'Nobody wanted to afflict, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 afflict 是「折磨」。', structure: 'afflict / 在句中表示 / 折磨', grammar: 'verb 用法，围绕「折磨」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She afflicted the form yesterday without checking the real past form.', right: 'Look up the past form of "afflict" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 afflict 是verb，再套「折磨」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afflict.q1', senseId: 'afflict.s1', errorType: 'meaning', type: '词义选择', prompt: '「afflict」在本条的核心意思是：', options: ['折磨', '完全相反的意思', '与本词无关的语法术语'], answer: '折磨', explain: 'afflict：折磨。' },
      { id: 'afflict.q2', senseId: 'afflict.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afflict?', options: ['折磨', 'a kind of ancient coin', 'the past tense of be'], answer: '折磨', explain: '对的是「折磨」。' },
      { id: 'afflict.q3', senseId: 'afflict.s1', errorType: 'grammar', type: '词义选择', prompt: 'afflict 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'afflict.q4', senseId: 'afflict.s1', errorType: 'meaning', type: '词源', prompt: '记 afflict 时，下面哪句更稳妥？', options: ['先锁住「折磨」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「折磨」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['折磨'] },
  });

  D('affluence', {
    etymology: {
      origin: '英语派生：afflu 加上词尾，构成与「富裕」相应的词类。',
      prefix: null,
      root: { text: 'afflu', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'affluence', text: '英语派生：afflu 加上词尾，构成与「富裕」相应的词类。' },
        { label: '现在', text: '核心用法是：富裕。' },
      ],
      formationLogic: '先认词干 afflu，再看词尾决定词性。',
      mnemonic: '看到 affluence，先说出「富裕」，再放进一句自己的话。',
      note: '先认词干 afflu，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one affluence.', chinese: '这一章反复回到同一个点：富裕。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affluence.s1', en: 'Without that affluence, the story would be hard to follow.', zh: '没有这个富裕，故事会很难读下去。', structure: 'affluence / 在句中表示 / 富裕', grammar: 'noun 用法，围绕「富裕」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the affluence.', right: 'He gave me a lot of advice about the affluence.', reason: 'advice 不可数。名词 affluence 的单复数也要按词典词形来，不要自造。', rule: '先确定 affluence 是noun，再套「富裕」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affluence.q1', senseId: 'affluence.s1', errorType: 'meaning', type: '词义选择', prompt: '「affluence」在本条的核心意思是：', options: ['富裕', '完全相反的意思', '与本词无关的语法术语'], answer: '富裕', explain: 'affluence：富裕。' },
      { id: 'affluence.q2', senseId: 'affluence.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affluence?', options: ['富裕', 'a kind of ancient coin', 'the past tense of be'], answer: '富裕', explain: '对的是「富裕」。' },
      { id: 'affluence.q3', senseId: 'affluence.s1', errorType: 'grammar', type: '词义选择', prompt: 'affluence 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'affluence.q4', senseId: 'affluence.s1', errorType: 'meaning', type: '词源', prompt: '记 affluence 时，下面哪句更稳妥？', options: ['先锁住「富裕」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「富裕」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['富裕'] },
  });

  D('affluent', {
    etymology: {
      origin: '现代英语常用词「affluent」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affluent', gloss: '富裕的' },
      suffix: null,
      history: [
        { label: 'affluent', text: '现代英语常用词「affluent」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：富裕的。' },
      ],
      formationLogic: '核心义：富裕的。',
      mnemonic: '看到 affluent，先说出「富裕的」，再放进一句自己的话。',
      note: '核心义：富裕的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked affluent even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得富裕的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affluent.s1', en: 'They needed a affluent answer, not a long speech.', zh: '他们要的是富裕的的答复，不是长篇发言。', structure: 'affluent / 在句中表示 / 富裕的', grammar: 'adjective 用法，围绕「富裕的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are affluent.', right: 'The news is affluent.', reason: 'news 作主语时动词用单数。形容词 affluent 放在系动词后面。', rule: '先确定 affluent 是adjective，再套「富裕的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affluent.q1', senseId: 'affluent.s1', errorType: 'meaning', type: '词义选择', prompt: '「affluent」在本条的核心意思是：', options: ['富裕的', '完全相反的意思', '与本词无关的语法术语'], answer: '富裕的', explain: 'affluent：富裕的。' },
      { id: 'affluent.q2', senseId: 'affluent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affluent?', options: ['富裕的', 'a kind of ancient coin', 'the past tense of be'], answer: '富裕的', explain: '对的是「富裕的」。' },
      { id: 'affluent.q3', senseId: 'affluent.s1', errorType: 'grammar', type: '词义选择', prompt: 'affluent 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'affluent.q4', senseId: 'affluent.s1', errorType: 'meaning', type: '词源', prompt: '记 affluent 时，下面哪句更稳妥？', options: ['先锁住「富裕的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「富裕的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['富裕的'] },
  });

  D('afford', {
    etymology: {
      origin: '古英语 geforthian「推进、提供」。',
      prefix: null,
      root: { text: 'afford', gloss: '买得起' },
      suffix: null,
      history: [
        { label: 'afford', text: '古英语 geforthian「推进、提供」。' },
        { label: '现在', text: '核心用法是：买得起。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：买得起。',
      mnemonic: '看到 afford，先说出「买得起」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：买得起。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to afford before the office closed.', chinese: '小组得在办公室关门前完成这件事：买得起。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afford.s1', en: 'Nobody wanted to afford, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 afford 是「买得起」。', structure: 'afford / 在句中表示 / 买得起', grammar: 'verb 用法，围绕「买得起」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She afforded the form yesterday without checking the real past form.', right: 'Look up the past form of "afford" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 afford 是verb，再套「买得起」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afford.q1', senseId: 'afford.s1', errorType: 'meaning', type: '词义选择', prompt: '「afford」在本条的核心意思是：', options: ['买得起', '完全相反的意思', '与本词无关的语法术语'], answer: '买得起', explain: 'afford：买得起。' },
      { id: 'afford.q2', senseId: 'afford.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afford?', options: ['买得起', 'a kind of ancient coin', 'the past tense of be'], answer: '买得起', explain: '对的是「买得起」。' },
      { id: 'afford.q3', senseId: 'afford.s1', errorType: 'grammar', type: '词义选择', prompt: 'afford 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'afford.q4', senseId: 'afford.s1', errorType: 'meaning', type: '词源', prompt: '记 afford 时，下面哪句更稳妥？', options: ['先锁住「买得起」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「买得起」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['买得起'] },
  });

  D('affordable', {
    etymology: {
      origin: '英语派生：afford 加上词尾，构成与「不太贵的」相应的词类。',
      prefix: null,
      root: { text: 'afford', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'affordable', text: '英语派生：afford 加上词尾，构成与「不太贵的」相应的词类。' },
        { label: '现在', text: '核心用法是：不太贵的。' },
      ],
      formationLogic: '先认词干 afford，再看词尾决定词性。',
      mnemonic: '看到 affordable，先说出「不太贵的」，再放进一句自己的话。',
      note: '先认词干 afford，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked affordable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得不太贵的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affordable.s1', en: 'They needed a affordable answer, not a long speech.', zh: '他们要的是不太贵的的答复，不是长篇发言。', structure: 'affordable / 在句中表示 / 不太贵的', grammar: 'adjective 用法，围绕「不太贵的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are affordable.', right: 'The news is affordable.', reason: 'news 作主语时动词用单数。形容词 affordable 放在系动词后面。', rule: '先确定 affordable 是adjective，再套「不太贵的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affordable.q1', senseId: 'affordable.s1', errorType: 'meaning', type: '词义选择', prompt: '「affordable」在本条的核心意思是：', options: ['不太贵的', '完全相反的意思', '与本词无关的语法术语'], answer: '不太贵的', explain: 'affordable：不太贵的。' },
      { id: 'affordable.q2', senseId: 'affordable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affordable?', options: ['不太贵的', 'a kind of ancient coin', 'the past tense of be'], answer: '不太贵的', explain: '对的是「不太贵的」。' },
      { id: 'affordable.q3', senseId: 'affordable.s1', errorType: 'grammar', type: '词义选择', prompt: 'affordable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'affordable.q4', senseId: 'affordable.s1', errorType: 'meaning', type: '词源', prompt: '记 affordable 时，下面哪句更稳妥？', options: ['先锁住「不太贵的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「不太贵的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不太贵的'] },
  });

  D('afforest', {
    etymology: {
      origin: '现代英语常用词「afforest」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'afforest', gloss: '造林' },
      suffix: null,
      history: [
        { label: 'afforest', text: '现代英语常用词「afforest」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：造林。' },
      ],
      formationLogic: '核心义：造林。',
      mnemonic: '看到 afforest，先说出「造林」，再放进一句自己的话。',
      note: '核心义：造林。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to afforest before the office closed.', chinese: '小组得在办公室关门前完成这件事：造林。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afforest.s1', en: 'Nobody wanted to afforest, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 afforest 是「造林」。', structure: 'afforest / 在句中表示 / 造林', grammar: 'verb 用法，围绕「造林」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She afforested the form yesterday without checking the real past form.', right: 'Look up the past form of "afforest" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 afforest 是verb，再套「造林」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afforest.q1', senseId: 'afforest.s1', errorType: 'meaning', type: '词义选择', prompt: '「afforest」在本条的核心意思是：', options: ['造林', '完全相反的意思', '与本词无关的语法术语'], answer: '造林', explain: 'afforest：造林。' },
      { id: 'afforest.q2', senseId: 'afforest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afforest?', options: ['造林', 'a kind of ancient coin', 'the past tense of be'], answer: '造林', explain: '对的是「造林」。' },
      { id: 'afforest.q3', senseId: 'afforest.s1', errorType: 'grammar', type: '词义选择', prompt: 'afforest 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'afforest.q4', senseId: 'afforest.s1', errorType: 'meaning', type: '词源', prompt: '记 afforest 时，下面哪句更稳妥？', options: ['先锁住「造林」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「造林」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['造林'] },
  });

  D('affront', {
    etymology: {
      origin: '现代英语常用词「affront」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'affront', gloss: '侮辱' },
      suffix: null,
      history: [
        { label: 'affront', text: '现代英语常用词「affront」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：侮辱。' },
      ],
      formationLogic: '核心义：侮辱。',
      mnemonic: '看到 affront，先说出「侮辱」，再放进一句自己的话。',
      note: '核心义：侮辱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one affront.', chinese: '这一章反复回到同一个点：侮辱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'affront.s1', en: 'Without that affront, the story would be hard to follow.', zh: '没有这个侮辱，故事会很难读下去。', structure: 'affront / 在句中表示 / 侮辱', grammar: 'noun 用法，围绕「侮辱」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the affront.', right: 'He gave me a lot of advice about the affront.', reason: 'advice 不可数。名词 affront 的单复数也要按词典词形来，不要自造。', rule: '先确定 affront 是noun，再套「侮辱」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'affront.q1', senseId: 'affront.s1', errorType: 'meaning', type: '词义选择', prompt: '「affront」在本条的核心意思是：', options: ['侮辱', '完全相反的意思', '与本词无关的语法术语'], answer: '侮辱', explain: 'affront：侮辱。' },
      { id: 'affront.q2', senseId: 'affront.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches affront?', options: ['侮辱', 'a kind of ancient coin', 'the past tense of be'], answer: '侮辱', explain: '对的是「侮辱」。' },
      { id: 'affront.q3', senseId: 'affront.s1', errorType: 'grammar', type: '词义选择', prompt: 'affront 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'affront.q4', senseId: 'affront.s1', errorType: 'meaning', type: '词源', prompt: '记 affront 时，下面哪句更稳妥？', options: ['先锁住「侮辱」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「侮辱」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侮辱'] },
  });

  D('afloat', {
    etymology: {
      origin: '现代英语常用词「afloat」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'afloat', gloss: '漂浮着' },
      suffix: null,
      history: [
        { label: 'afloat', text: '现代英语常用词「afloat」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：漂浮着。' },
      ],
      formationLogic: '核心义：漂浮着。',
      mnemonic: '看到 afloat，先说出「漂浮着」，再放进一句自己的话。',
      note: '核心义：漂浮着。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked afloat even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得漂浮着。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afloat.s1', en: 'They needed a afloat answer, not a long speech.', zh: '他们要的是漂浮着的答复，不是长篇发言。', structure: 'afloat / 在句中表示 / 漂浮着', grammar: 'adjective 用法，围绕「漂浮着」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are afloat.', right: 'The news is afloat.', reason: 'news 作主语时动词用单数。形容词 afloat 放在系动词后面。', rule: '先确定 afloat 是adjective，再套「漂浮着」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afloat.q1', senseId: 'afloat.s1', errorType: 'meaning', type: '词义选择', prompt: '「afloat」在本条的核心意思是：', options: ['漂浮着', '完全相反的意思', '与本词无关的语法术语'], answer: '漂浮着', explain: 'afloat：漂浮着。' },
      { id: 'afloat.q2', senseId: 'afloat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afloat?', options: ['漂浮着', 'a kind of ancient coin', 'the past tense of be'], answer: '漂浮着', explain: '对的是「漂浮着」。' },
      { id: 'afloat.q3', senseId: 'afloat.s1', errorType: 'grammar', type: '词义选择', prompt: 'afloat 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'afloat.q4', senseId: 'afloat.s1', errorType: 'meaning', type: '词源', prompt: '记 afloat 时，下面哪句更稳妥？', options: ['先锁住「漂浮着」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「漂浮着」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['漂浮着'] },
  });

  D('afraid', {
    etymology: {
      origin: '中古英语 affraied，古法语 esfreer「惊吓」。',
      prefix: null,
      root: { text: 'afraid', gloss: '害怕的' },
      suffix: null,
      history: [
        { label: 'afraid', text: '中古英语 affraied，古法语 esfreer「惊吓」。' },
        { label: '现在', text: '核心用法是：害怕的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：害怕的。',
      mnemonic: '看到 afraid，先说出「害怕的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：害怕的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked afraid even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得害怕的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afraid.s1', en: 'They needed a afraid answer, not a long speech.', zh: '他们要的是害怕的的答复，不是长篇发言。', structure: 'afraid / 在句中表示 / 害怕的', grammar: 'adjective 用法，围绕「害怕的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are afraid.', right: 'The news is afraid.', reason: 'news 作主语时动词用单数。形容词 afraid 放在系动词后面。', rule: '先确定 afraid 是adjective，再套「害怕的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afraid.q1', senseId: 'afraid.s1', errorType: 'meaning', type: '词义选择', prompt: '「afraid」在本条的核心意思是：', options: ['害怕的', '完全相反的意思', '与本词无关的语法术语'], answer: '害怕的', explain: 'afraid：害怕的。' },
      { id: 'afraid.q2', senseId: 'afraid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afraid?', options: ['害怕的', 'a kind of ancient coin', 'the past tense of be'], answer: '害怕的', explain: '对的是「害怕的」。' },
      { id: 'afraid.q3', senseId: 'afraid.s1', errorType: 'grammar', type: '词义选择', prompt: 'afraid 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'afraid.q4', senseId: 'afraid.s1', errorType: 'meaning', type: '词源', prompt: '记 afraid 时，下面哪句更稳妥？', options: ['先锁住「害怕的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「害怕的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['害怕的'] },
  });

  D('after', {
    etymology: {
      origin: '古英语 æfter「更后、在后」。',
      prefix: null,
      root: { text: 'after', gloss: '在……之后' },
      suffix: null,
      history: [
        { label: 'after', text: '古英语 æfter「更后、在后」。' },
        { label: '现在', text: '核心用法是：在……之后。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：在……之后。',
      mnemonic: '看到 after，先说出「在……之后」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：在……之后。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "after" and asked what it does in the sentence.', chinese: '老师在「after」下面划了线，问它在句中起什么作用。它表示在……之后。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'after.s1', en: 'In the margin she wrote "after" so the reader would not miss that phrase.', zh: '她在页边写下「after」，免得读者漏掉这个说法。意思是在……之后。', structure: 'after / 在句中表示 / 在……之后', grammar: 'preposition 用法，围绕「在……之后」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated after word by word and lost the meaning.', right: 'He kept "after" as one phrase meaning 在……之后.', reason: '「after」是固定说法，拆开容易翻错。', rule: '先确定 after 是preposition，再套「在……之后」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'after.q1', senseId: 'after.s1', errorType: 'meaning', type: '词义选择', prompt: '「after」在本条的核心意思是：', options: ['在……之后', '完全相反的意思', '与本词无关的语法术语'], answer: '在……之后', explain: 'after：在……之后。' },
      { id: 'after.q2', senseId: 'after.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches after?', options: ['在……之后', 'a kind of ancient coin', 'the past tense of be'], answer: '在……之后', explain: '对的是「在……之后」。' },
      { id: 'after.q3', senseId: 'after.s1', errorType: 'grammar', type: '词义选择', prompt: 'after 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'after.q4', senseId: 'after.s1', errorType: 'meaning', type: '词源', prompt: '记 after 时，下面哪句更稳妥？', options: ['先锁住「在……之后」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在……之后」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在……之后'] },
  });

  D('aftermath', {
    etymology: {
      origin: '现代英语常用词「aftermath」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aftermath', gloss: '后果' },
      suffix: null,
      history: [
        { label: 'aftermath', text: '现代英语常用词「aftermath」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：后果。' },
      ],
      formationLogic: '核心义：后果。',
      mnemonic: '看到 aftermath，先说出「后果」，再放进一句自己的话。',
      note: '核心义：后果。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aftermath.', chinese: '这一章反复回到同一个点：后果。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aftermath.s1', en: 'Without that aftermath, the story would be hard to follow.', zh: '没有这个后果，故事会很难读下去。', structure: 'aftermath / 在句中表示 / 后果', grammar: 'noun 用法，围绕「后果」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aftermath.', right: 'He gave me a lot of advice about the aftermath.', reason: 'advice 不可数。名词 aftermath 的单复数也要按词典词形来，不要自造。', rule: '先确定 aftermath 是noun，再套「后果」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aftermath.q1', senseId: 'aftermath.s1', errorType: 'meaning', type: '词义选择', prompt: '「aftermath」在本条的核心意思是：', options: ['后果', '完全相反的意思', '与本词无关的语法术语'], answer: '后果', explain: 'aftermath：后果。' },
      { id: 'aftermath.q2', senseId: 'aftermath.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aftermath?', options: ['后果', 'a kind of ancient coin', 'the past tense of be'], answer: '后果', explain: '对的是「后果」。' },
      { id: 'aftermath.q3', senseId: 'aftermath.s1', errorType: 'grammar', type: '词义选择', prompt: 'aftermath 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aftermath.q4', senseId: 'aftermath.s1', errorType: 'meaning', type: '词源', prompt: '记 aftermath 时，下面哪句更稳妥？', options: ['先锁住「后果」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「后果」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['后果'] },
  });

  D('afternoon', {
    etymology: {
      origin: '现代英语常用词「afternoon」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'afternoon', gloss: '下午' },
      suffix: null,
      history: [
        { label: 'afternoon', text: '现代英语常用词「afternoon」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：下午。' },
      ],
      formationLogic: '核心义：下午。',
      mnemonic: '看到 afternoon，先说出「下午」，再放进一句自己的话。',
      note: '核心义：下午。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one afternoon.', chinese: '这一章反复回到同一个点：下午。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afternoon.s1', en: 'Without that afternoon, the story would be hard to follow.', zh: '没有这个下午，故事会很难读下去。', structure: 'afternoon / 在句中表示 / 下午', grammar: 'noun 用法，围绕「下午」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the afternoon.', right: 'He gave me a lot of advice about the afternoon.', reason: 'advice 不可数。名词 afternoon 的单复数也要按词典词形来，不要自造。', rule: '先确定 afternoon 是noun，再套「下午」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afternoon.q1', senseId: 'afternoon.s1', errorType: 'meaning', type: '词义选择', prompt: '「afternoon」在本条的核心意思是：', options: ['下午', '完全相反的意思', '与本词无关的语法术语'], answer: '下午', explain: 'afternoon：下午。' },
      { id: 'afternoon.q2', senseId: 'afternoon.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afternoon?', options: ['下午', 'a kind of ancient coin', 'the past tense of be'], answer: '下午', explain: '对的是「下午」。' },
      { id: 'afternoon.q3', senseId: 'afternoon.s1', errorType: 'grammar', type: '词义选择', prompt: 'afternoon 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'afternoon.q4', senseId: 'afternoon.s1', errorType: 'meaning', type: '词源', prompt: '记 afternoon 时，下面哪句更稳妥？', options: ['先锁住「下午」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「下午」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下午'] },
  });

  D('afters', {
    etymology: {
      origin: '现代英语常用词「afters」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'afters', gloss: '（英式口语）甜点' },
      suffix: null,
      history: [
        { label: 'afters', text: '现代英语常用词「afters」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（英式口语）甜点。' },
      ],
      formationLogic: '核心义：（英式口语）甜点。',
      mnemonic: '看到 afters，先说出「（英式口语）甜点」，再放进一句自己的话。',
      note: '核心义：（英式口语）甜点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one afters.', chinese: '这一章反复回到同一个点：（英式口语）甜点。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afters.s1', en: 'Without that afters, the story would be hard to follow.', zh: '没有这个（英式口语）甜点，故事会很难读下去。', structure: 'afters / 在句中表示 / （英式口语）甜点', grammar: 'noun 用法，围绕「（英式口语）甜点」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the afters.', right: 'He gave me a lot of advice about the afters.', reason: 'advice 不可数。名词 afters 的单复数也要按词典词形来，不要自造。', rule: '先确定 afters 是noun，再套「（英式口语）甜点」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afters.q1', senseId: 'afters.s1', errorType: 'meaning', type: '词义选择', prompt: '「afters」在本条的核心意思是：', options: ['（英式口语）甜点', '完全相反的意思', '与本词无关的语法术语'], answer: '（英式口语）甜点', explain: 'afters：（英式口语）甜点。' },
      { id: 'afters.q2', senseId: 'afters.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afters?', options: ['（英式口语）甜点', 'a kind of ancient coin', 'the past tense of be'], answer: '（英式口语）甜点', explain: '对的是「（英式口语）甜点」。' },
      { id: 'afters.q3', senseId: 'afters.s1', errorType: 'grammar', type: '词义选择', prompt: 'afters 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'afters.q4', senseId: 'afters.s1', errorType: 'meaning', type: '词源', prompt: '记 afters 时，下面哪句更稳妥？', options: ['先锁住「（英式口语）甜点」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（英式口语）甜点」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（英式口语）甜点'] },
  });

  D('afterward', {
    etymology: {
      origin: '现代英语常用词「afterward」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'afterward', gloss: '以后' },
      suffix: null,
      history: [
        { label: 'afterward', text: '现代英语常用词「afterward」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：以后。' },
      ],
      formationLogic: '核心义：以后。',
      mnemonic: '看到 afterward，先说出「以后」，再放进一句自己的话。',
      note: '核心义：以后。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule afterward, and the class finally followed it.', chinese: '她把规则讲得让人明白（以后），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'afterward.s1', en: 'He nodded afterward and went back to his notes.', zh: '他以后地点了点头，又回去看笔记。', structure: 'afterward / 在句中表示 / 以后', grammar: 'adverb 用法，围绕「以后」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very afterwardly.', right: 'She spoke afterward.', reason: 'afterward 已经是副词，不要再加 -ly。', rule: '先确定 afterward 是adverb，再套「以后」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'afterward.q1', senseId: 'afterward.s1', errorType: 'meaning', type: '词义选择', prompt: '「afterward」在本条的核心意思是：', options: ['以后', '完全相反的意思', '与本词无关的语法术语'], answer: '以后', explain: 'afterward：以后。' },
      { id: 'afterward.q2', senseId: 'afterward.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches afterward?', options: ['以后', 'a kind of ancient coin', 'the past tense of be'], answer: '以后', explain: '对的是「以后」。' },
      { id: 'afterward.q3', senseId: 'afterward.s1', errorType: 'grammar', type: '词义选择', prompt: 'afterward 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'afterward.q4', senseId: 'afterward.s1', errorType: 'meaning', type: '词源', prompt: '记 afterward 时，下面哪句更稳妥？', options: ['先锁住「以后」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「以后」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['以后'] },
  });

  D('again', {
    etymology: {
      origin: '古英语 ongean「对着、再一次」。',
      prefix: null,
      root: { text: 'again', gloss: '再' },
      suffix: null,
      history: [
        { label: 'again', text: '古英语 ongean「对着、再一次」。' },
        { label: '现在', text: '核心用法是：再。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：再。',
      mnemonic: '看到 again，先说出「再」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：再。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule again, and the class finally followed it.', chinese: '她把规则讲得让人明白（再），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'again.s1', en: 'He nodded again and went back to his notes.', zh: '他再地点了点头，又回去看笔记。', structure: 'again / 在句中表示 / 再', grammar: 'adverb 用法，围绕「再」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very againly.', right: 'She spoke again.', reason: 'again 已经是副词，不要再加 -ly。', rule: '先确定 again 是adverb，再套「再」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'again.q1', senseId: 'again.s1', errorType: 'meaning', type: '词义选择', prompt: '「again」在本条的核心意思是：', options: ['再', '完全相反的意思', '与本词无关的语法术语'], answer: '再', explain: 'again：再。' },
      { id: 'again.q2', senseId: 'again.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches again?', options: ['再', 'a kind of ancient coin', 'the past tense of be'], answer: '再', explain: '对的是「再」。' },
      { id: 'again.q3', senseId: 'again.s1', errorType: 'grammar', type: '词义选择', prompt: 'again 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'again.q4', senseId: 'again.s1', errorType: 'meaning', type: '词源', prompt: '记 again 时，下面哪句更稳妥？', options: ['先锁住「再」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「再」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['再'] },
  });

  D('against', {
    etymology: {
      origin: '古英语 ongean + 属格，表示「对着」。',
      prefix: null,
      root: { text: 'against', gloss: '反对' },
      suffix: null,
      history: [
        { label: 'against', text: '古英语 ongean + 属格，表示「对着」。' },
        { label: '现在', text: '核心用法是：反对。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：反对。',
      mnemonic: '看到 against，先说出「反对」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：反对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "against" and asked what it does in the sentence.', chinese: '老师在「against」下面划了线，问它在句中起什么作用。它表示反对。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'against.s1', en: 'In the margin she wrote "against" so the reader would not miss that phrase.', zh: '她在页边写下「against」，免得读者漏掉这个说法。意思是反对。', structure: 'against / 在句中表示 / 反对', grammar: 'preposition 用法，围绕「反对」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated against word by word and lost the meaning.', right: 'He kept "against" as one phrase meaning 反对.', reason: '「against」是固定说法，拆开容易翻错。', rule: '先确定 against 是preposition，再套「反对」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'against.q1', senseId: 'against.s1', errorType: 'meaning', type: '词义选择', prompt: '「against」在本条的核心意思是：', options: ['反对', '完全相反的意思', '与本词无关的语法术语'], answer: '反对', explain: 'against：反对。' },
      { id: 'against.q2', senseId: 'against.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches against?', options: ['反对', 'a kind of ancient coin', 'the past tense of be'], answer: '反对', explain: '对的是「反对」。' },
      { id: 'against.q3', senseId: 'against.s1', errorType: 'grammar', type: '词义选择', prompt: 'against 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'against.q4', senseId: 'against.s1', errorType: 'meaning', type: '词源', prompt: '记 against 时，下面哪句更稳妥？', options: ['先锁住「反对」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「反对」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['反对'] },
  });

  D('age', {
    etymology: {
      origin: '古法语 aage，拉丁语 aetaticum，aetas「年龄、时代」。',
      prefix: null,
      root: { text: 'age', gloss: '年龄' },
      suffix: null,
      history: [
        { label: 'age', text: '古法语 aage，拉丁语 aetaticum，aetas「年龄、时代」。' },
        { label: '现在', text: '核心用法是：年龄。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：年龄。',
      mnemonic: '看到 age，先说出「年龄」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：年龄。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one age.', chinese: '这一章反复回到同一个点：年龄。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'age.s1', en: 'Without that age, the story would be hard to follow.', zh: '没有这个年龄，故事会很难读下去。', structure: 'age / 在句中表示 / 年龄', grammar: 'noun 用法，围绕「年龄」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the age.', right: 'He gave me a lot of advice about the age.', reason: 'advice 不可数。名词 age 的单复数也要按词典词形来，不要自造。', rule: '先确定 age 是noun，再套「年龄」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'age.q1', senseId: 'age.s1', errorType: 'meaning', type: '词义选择', prompt: '「age」在本条的核心意思是：', options: ['年龄', '完全相反的意思', '与本词无关的语法术语'], answer: '年龄', explain: 'age：年龄。' },
      { id: 'age.q2', senseId: 'age.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches age?', options: ['年龄', 'a kind of ancient coin', 'the past tense of be'], answer: '年龄', explain: '对的是「年龄」。' },
      { id: 'age.q3', senseId: 'age.s1', errorType: 'grammar', type: '词义选择', prompt: 'age 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'age.q4', senseId: 'age.s1', errorType: 'meaning', type: '词源', prompt: '记 age 时，下面哪句更稳妥？', options: ['先锁住「年龄」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「年龄」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['年龄'] },
  });

  D('age group', {
    etymology: {
      origin: '现代英语固定说法「age group」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'age group', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'age group', text: '现代英语固定说法「age group」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：年龄段。' },
      ],
      formationLogic: '常见义：年龄段。',
      mnemonic: '看到 age group，先说出「年龄段」，再放进一句自己的话。',
      note: '常见义：年龄段。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "age group" and asked what it does in the sentence.', chinese: '老师在「age group」下面划了线，问它在句中起什么作用。它表示年龄段。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'age group.s1', en: 'In the margin she wrote "age group" so the reader would not miss that phrase.', zh: '她在页边写下「age group」，免得读者漏掉这个说法。意思是年龄段。', structure: 'age group / 在句中表示 / 年龄段', grammar: 'noun 用法，围绕「年龄段」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated age group word by word and lost the meaning.', right: 'He kept "age group" as one phrase meaning 年龄段.', reason: '「age group」是固定说法，拆开容易翻错。', rule: '先确定 age group 是noun，再套「年龄段」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'age group.q1', senseId: 'age group.s1', errorType: 'meaning', type: '词义选择', prompt: '「age group」在本条的核心意思是：', options: ['年龄段', '完全相反的意思', '与本词无关的语法术语'], answer: '年龄段', explain: 'age group：年龄段。' },
      { id: 'age group.q2', senseId: 'age group.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches age group?', options: ['年龄段', 'a kind of ancient coin', 'the past tense of be'], answer: '年龄段', explain: '对的是「年龄段」。' },
      { id: 'age group.q3', senseId: 'age group.s1', errorType: 'grammar', type: '词义选择', prompt: 'age group 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'age group.q4', senseId: 'age group.s1', errorType: 'meaning', type: '词源', prompt: '记 age group 时，下面哪句更稳妥？', options: ['先锁住「年龄段」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「年龄段」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['年龄段'] },
  });

  D('aged', {
    etymology: {
      origin: '现代英语常用词「aged」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aged', gloss: '年老的' },
      suffix: null,
      history: [
        { label: 'aged', text: '现代英语常用词「aged」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：年老的。' },
      ],
      formationLogic: '核心义：年老的。',
      mnemonic: '看到 aged，先说出「年老的」，再放进一句自己的话。',
      note: '核心义：年老的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aged even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得年老的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aged.s1', en: 'They needed a aged answer, not a long speech.', zh: '他们要的是年老的的答复，不是长篇发言。', structure: 'aged / 在句中表示 / 年老的', grammar: 'adjective 用法，围绕「年老的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aged.', right: 'The news is aged.', reason: 'news 作主语时动词用单数。形容词 aged 放在系动词后面。', rule: '先确定 aged 是adjective，再套「年老的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aged.q1', senseId: 'aged.s1', errorType: 'meaning', type: '词义选择', prompt: '「aged」在本条的核心意思是：', options: ['年老的', '完全相反的意思', '与本词无关的语法术语'], answer: '年老的', explain: 'aged：年老的。' },
      { id: 'aged.q2', senseId: 'aged.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aged?', options: ['年老的', 'a kind of ancient coin', 'the past tense of be'], answer: '年老的', explain: '对的是「年老的」。' },
      { id: 'aged.q3', senseId: 'aged.s1', errorType: 'grammar', type: '词义选择', prompt: 'aged 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aged.q4', senseId: 'aged.s1', errorType: 'meaning', type: '词源', prompt: '记 aged 时，下面哪句更稳妥？', options: ['先锁住「年老的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「年老的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['年老的'] },
  });

  D('ageing', {
    etymology: {
      origin: '现代英语常用词「ageing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ageing', gloss: '老化' },
      suffix: null,
      history: [
        { label: 'ageing', text: '现代英语常用词「ageing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：老化。' },
      ],
      formationLogic: '核心义：老化。',
      mnemonic: '看到 ageing，先说出「老化」，再放进一句自己的话。',
      note: '核心义：老化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ageing.', chinese: '这一章反复回到同一个点：老化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ageing.s1', en: 'Without that ageing, the story would be hard to follow.', zh: '没有这个老化，故事会很难读下去。', structure: 'ageing / 在句中表示 / 老化', grammar: 'noun 用法，围绕「老化」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ageing.', right: 'He gave me a lot of advice about the ageing.', reason: 'advice 不可数。名词 ageing 的单复数也要按词典词形来，不要自造。', rule: '先确定 ageing 是noun，再套「老化」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ageing.q1', senseId: 'ageing.s1', errorType: 'meaning', type: '词义选择', prompt: '「ageing」在本条的核心意思是：', options: ['老化', '完全相反的意思', '与本词无关的语法术语'], answer: '老化', explain: 'ageing：老化。' },
      { id: 'ageing.q2', senseId: 'ageing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ageing?', options: ['老化', 'a kind of ancient coin', 'the past tense of be'], answer: '老化', explain: '对的是「老化」。' },
      { id: 'ageing.q3', senseId: 'ageing.s1', errorType: 'grammar', type: '词义选择', prompt: 'ageing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ageing.q4', senseId: 'ageing.s1', errorType: 'meaning', type: '词源', prompt: '记 ageing 时，下面哪句更稳妥？', options: ['先锁住「老化」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「老化」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['老化'] },
  });

  D('agency', {
    etymology: {
      origin: '拉丁语 agentia，agere「做、代理」。',
      prefix: null,
      root: { text: 'agency', gloss: '代理机构' },
      suffix: null,
      history: [
        { label: 'agency', text: '拉丁语 agentia，agere「做、代理」。' },
        { label: '现在', text: '核心用法是：代理机构。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：代理机构。',
      mnemonic: '看到 agency，先说出「代理机构」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：代理机构。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agency.', chinese: '这一章反复回到同一个点：代理机构。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agency.s1', en: 'Without that agency, the story would be hard to follow.', zh: '没有这个代理机构，故事会很难读下去。', structure: 'agency / 在句中表示 / 代理机构', grammar: 'noun 用法，围绕「代理机构」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agency.', right: 'He gave me a lot of advice about the agency.', reason: 'advice 不可数。名词 agency 的单复数也要按词典词形来，不要自造。', rule: '先确定 agency 是noun，再套「代理机构」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agency.q1', senseId: 'agency.s1', errorType: 'meaning', type: '词义选择', prompt: '「agency」在本条的核心意思是：', options: ['代理机构', '完全相反的意思', '与本词无关的语法术语'], answer: '代理机构', explain: 'agency：代理机构。' },
      { id: 'agency.q2', senseId: 'agency.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agency?', options: ['代理机构', 'a kind of ancient coin', 'the past tense of be'], answer: '代理机构', explain: '对的是「代理机构」。' },
      { id: 'agency.q3', senseId: 'agency.s1', errorType: 'grammar', type: '词义选择', prompt: 'agency 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agency.q4', senseId: 'agency.s1', errorType: 'meaning', type: '词源', prompt: '记 agency 时，下面哪句更稳妥？', options: ['先锁住「代理机构」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「代理机构」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['代理机构'] },
  });

  D('agenda', {
    etymology: {
      origin: '现代英语常用词「agenda」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'agenda', gloss: '议程' },
      suffix: null,
      history: [
        { label: 'agenda', text: '现代英语常用词「agenda」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：议程。' },
      ],
      formationLogic: '核心义：议程。',
      mnemonic: '看到 agenda，先说出「议程」，再放进一句自己的话。',
      note: '核心义：议程。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agenda.', chinese: '这一章反复回到同一个点：议程。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agenda.s1', en: 'Without that agenda, the story would be hard to follow.', zh: '没有这个议程，故事会很难读下去。', structure: 'agenda / 在句中表示 / 议程', grammar: 'noun 用法，围绕「议程」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agenda.', right: 'He gave me a lot of advice about the agenda.', reason: 'advice 不可数。名词 agenda 的单复数也要按词典词形来，不要自造。', rule: '先确定 agenda 是noun，再套「议程」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agenda.q1', senseId: 'agenda.s1', errorType: 'meaning', type: '词义选择', prompt: '「agenda」在本条的核心意思是：', options: ['议程', '完全相反的意思', '与本词无关的语法术语'], answer: '议程', explain: 'agenda：议程。' },
      { id: 'agenda.q2', senseId: 'agenda.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agenda?', options: ['议程', 'a kind of ancient coin', 'the past tense of be'], answer: '议程', explain: '对的是「议程」。' },
      { id: 'agenda.q3', senseId: 'agenda.s1', errorType: 'grammar', type: '词义选择', prompt: 'agenda 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agenda.q4', senseId: 'agenda.s1', errorType: 'meaning', type: '词源', prompt: '记 agenda 时，下面哪句更稳妥？', options: ['先锁住「议程」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「议程」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['议程'] },
  });

  D('agent', {
    etymology: {
      origin: '拉丁语 agens「正在做的人」。',
      prefix: null,
      root: { text: 'agent', gloss: '代理人' },
      suffix: null,
      history: [
        { label: 'agent', text: '拉丁语 agens「正在做的人」。' },
        { label: '现在', text: '核心用法是：代理人。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：代理人。',
      mnemonic: '看到 agent，先说出「代理人」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：代理人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agent.', chinese: '这一章反复回到同一个点：代理人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agent.s1', en: 'Without that agent, the story would be hard to follow.', zh: '没有这个代理人，故事会很难读下去。', structure: 'agent / 在句中表示 / 代理人', grammar: 'noun 用法，围绕「代理人」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agent.', right: 'He gave me a lot of advice about the agent.', reason: 'advice 不可数。名词 agent 的单复数也要按词典词形来，不要自造。', rule: '先确定 agent 是noun，再套「代理人」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agent.q1', senseId: 'agent.s1', errorType: 'meaning', type: '词义选择', prompt: '「agent」在本条的核心意思是：', options: ['代理人', '完全相反的意思', '与本词无关的语法术语'], answer: '代理人', explain: 'agent：代理人。' },
      { id: 'agent.q2', senseId: 'agent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agent?', options: ['代理人', 'a kind of ancient coin', 'the past tense of be'], answer: '代理人', explain: '对的是「代理人」。' },
      { id: 'agent.q3', senseId: 'agent.s1', errorType: 'grammar', type: '词义选择', prompt: 'agent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agent.q4', senseId: 'agent.s1', errorType: 'meaning', type: '词源', prompt: '记 agent 时，下面哪句更稳妥？', options: ['先锁住「代理人」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「代理人」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['代理人'] },
  });

  D('ages', {
    etymology: {
      origin: '现代英语常用词「ages」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ages', gloss: '很久' },
      suffix: null,
      history: [
        { label: 'ages', text: '现代英语常用词「ages」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：很久。' },
      ],
      formationLogic: '核心义：很久。',
      mnemonic: '看到 ages，先说出「很久」，再放进一句自己的话。',
      note: '核心义：很久。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ages.', chinese: '这一章反复回到同一个点：很久。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ages.s1', en: 'Without that ages, the story would be hard to follow.', zh: '没有这个很久，故事会很难读下去。', structure: 'ages / 在句中表示 / 很久', grammar: 'noun 用法，围绕「很久」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ages.', right: 'He gave me a lot of advice about the ages.', reason: 'advice 不可数。名词 ages 的单复数也要按词典词形来，不要自造。', rule: '先确定 ages 是noun，再套「很久」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ages.q1', senseId: 'ages.s1', errorType: 'meaning', type: '词义选择', prompt: '「ages」在本条的核心意思是：', options: ['很久', '完全相反的意思', '与本词无关的语法术语'], answer: '很久', explain: 'ages：很久。' },
      { id: 'ages.q2', senseId: 'ages.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ages?', options: ['很久', 'a kind of ancient coin', 'the past tense of be'], answer: '很久', explain: '对的是「很久」。' },
      { id: 'ages.q3', senseId: 'ages.s1', errorType: 'grammar', type: '词义选择', prompt: 'ages 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ages.q4', senseId: 'ages.s1', errorType: 'meaning', type: '词源', prompt: '记 ages 时，下面哪句更稳妥？', options: ['先锁住「很久」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「很久」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['很久'] },
  });

  D('aggravate', {
    etymology: {
      origin: '拉丁语 aggravare「使变重」，gravis「重」。',
      prefix: null,
      root: { text: 'aggravate', gloss: '加重' },
      suffix: null,
      history: [
        { label: 'aggravate', text: '拉丁语 aggravare「使变重」，gravis「重」。' },
        { label: '现在', text: '核心用法是：加重。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：加重。',
      mnemonic: '看到 aggravate，先说出「加重」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：加重。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to aggravate before the office closed.', chinese: '小组得在办公室关门前完成这件事：加重。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aggravate.s1', en: 'Nobody wanted to aggravate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 aggravate 是「加重」。', structure: 'aggravate / 在句中表示 / 加重', grammar: 'verb 用法，围绕「加重」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She aggravateed the form yesterday without checking the real past form.', right: 'Look up the past form of "aggravate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 aggravate 是verb，再套「加重」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aggravate.q1', senseId: 'aggravate.s1', errorType: 'meaning', type: '词义选择', prompt: '「aggravate」在本条的核心意思是：', options: ['加重', '完全相反的意思', '与本词无关的语法术语'], answer: '加重', explain: 'aggravate：加重。' },
      { id: 'aggravate.q2', senseId: 'aggravate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aggravate?', options: ['加重', 'a kind of ancient coin', 'the past tense of be'], answer: '加重', explain: '对的是「加重」。' },
      { id: 'aggravate.q3', senseId: 'aggravate.s1', errorType: 'grammar', type: '词义选择', prompt: 'aggravate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'aggravate.q4', senseId: 'aggravate.s1', errorType: 'meaning', type: '词源', prompt: '记 aggravate 时，下面哪句更稳妥？', options: ['先锁住「加重」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「加重」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['加重'] },
  });

  D('aggravation', {
    etymology: {
      origin: '英语派生：aggrava 加上词尾，构成与「激化」相应的词类。',
      prefix: null,
      root: { text: 'aggrava', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'aggravation', text: '英语派生：aggrava 加上词尾，构成与「激化」相应的词类。' },
        { label: '现在', text: '核心用法是：激化。' },
      ],
      formationLogic: '先认词干 aggrava，再看词尾决定词性。',
      mnemonic: '看到 aggravation，先说出「激化」，再放进一句自己的话。',
      note: '先认词干 aggrava，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aggravation.', chinese: '这一章反复回到同一个点：激化。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aggravation.s1', en: 'Without that aggravation, the story would be hard to follow.', zh: '没有这个激化，故事会很难读下去。', structure: 'aggravation / 在句中表示 / 激化', grammar: 'noun 用法，围绕「激化」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aggravation.', right: 'He gave me a lot of advice about the aggravation.', reason: 'advice 不可数。名词 aggravation 的单复数也要按词典词形来，不要自造。', rule: '先确定 aggravation 是noun，再套「激化」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aggravation.q1', senseId: 'aggravation.s1', errorType: 'meaning', type: '词义选择', prompt: '「aggravation」在本条的核心意思是：', options: ['激化', '完全相反的意思', '与本词无关的语法术语'], answer: '激化', explain: 'aggravation：激化。' },
      { id: 'aggravation.q2', senseId: 'aggravation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aggravation?', options: ['激化', 'a kind of ancient coin', 'the past tense of be'], answer: '激化', explain: '对的是「激化」。' },
      { id: 'aggravation.q3', senseId: 'aggravation.s1', errorType: 'grammar', type: '词义选择', prompt: 'aggravation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aggravation.q4', senseId: 'aggravation.s1', errorType: 'meaning', type: '词源', prompt: '记 aggravation 时，下面哪句更稳妥？', options: ['先锁住「激化」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「激化」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['激化'] },
  });

  D('aggregate', {
    etymology: {
      origin: '现代英语常用词「aggregate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aggregate', gloss: '总计' },
      suffix: null,
      history: [
        { label: 'aggregate', text: '现代英语常用词「aggregate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：总计。' },
      ],
      formationLogic: '核心义：总计。',
      mnemonic: '看到 aggregate，先说出「总计」，再放进一句自己的话。',
      note: '核心义：总计。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aggregate.', chinese: '这一章反复回到同一个点：总计。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aggregate.s1', en: 'Without that aggregate, the story would be hard to follow.', zh: '没有这个总计，故事会很难读下去。', structure: 'aggregate / 在句中表示 / 总计', grammar: 'noun 用法，围绕「总计」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aggregate.', right: 'He gave me a lot of advice about the aggregate.', reason: 'advice 不可数。名词 aggregate 的单复数也要按词典词形来，不要自造。', rule: '先确定 aggregate 是noun，再套「总计」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aggregate.q1', senseId: 'aggregate.s1', errorType: 'meaning', type: '词义选择', prompt: '「aggregate」在本条的核心意思是：', options: ['总计', '完全相反的意思', '与本词无关的语法术语'], answer: '总计', explain: 'aggregate：总计。' },
      { id: 'aggregate.q2', senseId: 'aggregate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aggregate?', options: ['总计', 'a kind of ancient coin', 'the past tense of be'], answer: '总计', explain: '对的是「总计」。' },
      { id: 'aggregate.q3', senseId: 'aggregate.s1', errorType: 'grammar', type: '词义选择', prompt: 'aggregate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aggregate.q4', senseId: 'aggregate.s1', errorType: 'meaning', type: '词源', prompt: '记 aggregate 时，下面哪句更稳妥？', options: ['先锁住「总计」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「总计」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['总计'] },
  });

  D('aggregation', {
    etymology: {
      origin: '英语派生：aggrega 加上词尾，构成与「聚合」相应的词类。',
      prefix: null,
      root: { text: 'aggrega', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'aggregation', text: '英语派生：aggrega 加上词尾，构成与「聚合」相应的词类。' },
        { label: '现在', text: '核心用法是：聚合。' },
      ],
      formationLogic: '先认词干 aggrega，再看词尾决定词性。',
      mnemonic: '看到 aggregation，先说出「聚合」，再放进一句自己的话。',
      note: '先认词干 aggrega，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aggregation.', chinese: '这一章反复回到同一个点：聚合。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aggregation.s1', en: 'Without that aggregation, the story would be hard to follow.', zh: '没有这个聚合，故事会很难读下去。', structure: 'aggregation / 在句中表示 / 聚合', grammar: 'noun 用法，围绕「聚合」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aggregation.', right: 'He gave me a lot of advice about the aggregation.', reason: 'advice 不可数。名词 aggregation 的单复数也要按词典词形来，不要自造。', rule: '先确定 aggregation 是noun，再套「聚合」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aggregation.q1', senseId: 'aggregation.s1', errorType: 'meaning', type: '词义选择', prompt: '「aggregation」在本条的核心意思是：', options: ['聚合', '完全相反的意思', '与本词无关的语法术语'], answer: '聚合', explain: 'aggregation：聚合。' },
      { id: 'aggregation.q2', senseId: 'aggregation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aggregation?', options: ['聚合', 'a kind of ancient coin', 'the past tense of be'], answer: '聚合', explain: '对的是「聚合」。' },
      { id: 'aggregation.q3', senseId: 'aggregation.s1', errorType: 'grammar', type: '词义选择', prompt: 'aggregation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aggregation.q4', senseId: 'aggregation.s1', errorType: 'meaning', type: '词源', prompt: '记 aggregation 时，下面哪句更稳妥？', options: ['先锁住「聚合」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「聚合」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聚合'] },
  });

  D('aggression', {
    etymology: {
      origin: '拉丁语 aggredi「走向前去攻击」，gradi「走」。',
      prefix: null,
      root: { text: 'aggression', gloss: '侵略' },
      suffix: null,
      history: [
        { label: 'aggression', text: '拉丁语 aggredi「走向前去攻击」，gradi「走」。' },
        { label: '现在', text: '核心用法是：侵略。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：侵略。',
      mnemonic: '看到 aggression，先说出「侵略」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：侵略。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aggression.', chinese: '这一章反复回到同一个点：侵略。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aggression.s1', en: 'Without that aggression, the story would be hard to follow.', zh: '没有这个侵略，故事会很难读下去。', structure: 'aggression / 在句中表示 / 侵略', grammar: 'noun 用法，围绕「侵略」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aggression.', right: 'He gave me a lot of advice about the aggression.', reason: 'advice 不可数。名词 aggression 的单复数也要按词典词形来，不要自造。', rule: '先确定 aggression 是noun，再套「侵略」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aggression.q1', senseId: 'aggression.s1', errorType: 'meaning', type: '词义选择', prompt: '「aggression」在本条的核心意思是：', options: ['侵略', '完全相反的意思', '与本词无关的语法术语'], answer: '侵略', explain: 'aggression：侵略。' },
      { id: 'aggression.q2', senseId: 'aggression.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aggression?', options: ['侵略', 'a kind of ancient coin', 'the past tense of be'], answer: '侵略', explain: '对的是「侵略」。' },
      { id: 'aggression.q3', senseId: 'aggression.s1', errorType: 'grammar', type: '词义选择', prompt: 'aggression 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aggression.q4', senseId: 'aggression.s1', errorType: 'meaning', type: '词源', prompt: '记 aggression 时，下面哪句更稳妥？', options: ['先锁住「侵略」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「侵略」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['侵略'] },
  });

  D('aggressive', {
    etymology: {
      origin: '英语派生：aggress 加上词尾，构成与「好斗的」相应的词类。',
      prefix: null,
      root: { text: 'aggress', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'aggressive', text: '英语派生：aggress 加上词尾，构成与「好斗的」相应的词类。' },
        { label: '现在', text: '核心用法是：好斗的。' },
      ],
      formationLogic: '先认词干 aggress，再看词尾决定词性。',
      mnemonic: '看到 aggressive，先说出「好斗的」，再放进一句自己的话。',
      note: '先认词干 aggress，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aggressive even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得好斗的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aggressive.s1', en: 'They needed a aggressive answer, not a long speech.', zh: '他们要的是好斗的的答复，不是长篇发言。', structure: 'aggressive / 在句中表示 / 好斗的', grammar: 'adjective 用法，围绕「好斗的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aggressive.', right: 'The news is aggressive.', reason: 'news 作主语时动词用单数。形容词 aggressive 放在系动词后面。', rule: '先确定 aggressive 是adjective，再套「好斗的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aggressive.q1', senseId: 'aggressive.s1', errorType: 'meaning', type: '词义选择', prompt: '「aggressive」在本条的核心意思是：', options: ['好斗的', '完全相反的意思', '与本词无关的语法术语'], answer: '好斗的', explain: 'aggressive：好斗的。' },
      { id: 'aggressive.q2', senseId: 'aggressive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aggressive?', options: ['好斗的', 'a kind of ancient coin', 'the past tense of be'], answer: '好斗的', explain: '对的是「好斗的」。' },
      { id: 'aggressive.q3', senseId: 'aggressive.s1', errorType: 'grammar', type: '词义选择', prompt: 'aggressive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aggressive.q4', senseId: 'aggressive.s1', errorType: 'meaning', type: '词源', prompt: '记 aggressive 时，下面哪句更稳妥？', options: ['先锁住「好斗的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「好斗的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好斗的'] },
  });

  D('aggressively', {
    etymology: {
      origin: '英语派生：aggressive 加上词尾，构成与「好斗地」相应的词类。',
      prefix: null,
      root: { text: 'aggressive', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'aggressively', text: '英语派生：aggressive 加上词尾，构成与「好斗地」相应的词类。' },
        { label: '现在', text: '核心用法是：好斗地。' },
      ],
      formationLogic: '先认词干 aggressive，再看词尾决定词性。',
      mnemonic: '看到 aggressively，先说出「好斗地」，再放进一句自己的话。',
      note: '先认词干 aggressive，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule aggressively, and the class finally followed it.', chinese: '她把规则讲得让人明白（好斗地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aggressively.s1', en: 'He nodded aggressively and went back to his notes.', zh: '他好斗地地点了点头，又回去看笔记。', structure: 'aggressively / 在句中表示 / 好斗地', grammar: 'adverb 用法，围绕「好斗地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very aggressivelyly.', right: 'She spoke aggressively.', reason: 'aggressively 已经是副词，不要再加 -ly。', rule: '先确定 aggressively 是adverb，再套「好斗地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aggressively.q1', senseId: 'aggressively.s1', errorType: 'meaning', type: '词义选择', prompt: '「aggressively」在本条的核心意思是：', options: ['好斗地', '完全相反的意思', '与本词无关的语法术语'], answer: '好斗地', explain: 'aggressively：好斗地。' },
      { id: 'aggressively.q2', senseId: 'aggressively.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aggressively?', options: ['好斗地', 'a kind of ancient coin', 'the past tense of be'], answer: '好斗地', explain: '对的是「好斗地」。' },
      { id: 'aggressively.q3', senseId: 'aggressively.s1', errorType: 'grammar', type: '词义选择', prompt: 'aggressively 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'aggressively.q4', senseId: 'aggressively.s1', errorType: 'meaning', type: '词源', prompt: '记 aggressively 时，下面哪句更稳妥？', options: ['先锁住「好斗地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「好斗地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好斗地'] },
  });

  D('agitate', {
    etymology: {
      origin: '现代英语常用词「agitate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'agitate', gloss: '使焦虑' },
      suffix: null,
      history: [
        { label: 'agitate', text: '现代英语常用词「agitate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：使焦虑。' },
      ],
      formationLogic: '核心义：使焦虑。',
      mnemonic: '看到 agitate，先说出「使焦虑」，再放进一句自己的话。',
      note: '核心义：使焦虑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to agitate before the office closed.', chinese: '小组得在办公室关门前完成这件事：使焦虑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agitate.s1', en: 'Nobody wanted to agitate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 agitate 是「使焦虑」。', structure: 'agitate / 在句中表示 / 使焦虑', grammar: 'verb 用法，围绕「使焦虑」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She agitateed the form yesterday without checking the real past form.', right: 'Look up the past form of "agitate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 agitate 是verb，再套「使焦虑」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agitate.q1', senseId: 'agitate.s1', errorType: 'meaning', type: '词义选择', prompt: '「agitate」在本条的核心意思是：', options: ['使焦虑', '完全相反的意思', '与本词无关的语法术语'], answer: '使焦虑', explain: 'agitate：使焦虑。' },
      { id: 'agitate.q2', senseId: 'agitate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agitate?', options: ['使焦虑', 'a kind of ancient coin', 'the past tense of be'], answer: '使焦虑', explain: '对的是「使焦虑」。' },
      { id: 'agitate.q3', senseId: 'agitate.s1', errorType: 'grammar', type: '词义选择', prompt: 'agitate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'agitate.q4', senseId: 'agitate.s1', errorType: 'meaning', type: '词源', prompt: '记 agitate 时，下面哪句更稳妥？', options: ['先锁住「使焦虑」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「使焦虑」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使焦虑'] },
  });

  D('agitation', {
    etymology: {
      origin: '英语派生：agita 加上词尾，构成与「焦虑不安」相应的词类。',
      prefix: null,
      root: { text: 'agita', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'agitation', text: '英语派生：agita 加上词尾，构成与「焦虑不安」相应的词类。' },
        { label: '现在', text: '核心用法是：焦虑不安。' },
      ],
      formationLogic: '先认词干 agita，再看词尾决定词性。',
      mnemonic: '看到 agitation，先说出「焦虑不安」，再放进一句自己的话。',
      note: '先认词干 agita，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agitation.', chinese: '这一章反复回到同一个点：焦虑不安。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agitation.s1', en: 'Without that agitation, the story would be hard to follow.', zh: '没有这个焦虑不安，故事会很难读下去。', structure: 'agitation / 在句中表示 / 焦虑不安', grammar: 'noun 用法，围绕「焦虑不安」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agitation.', right: 'He gave me a lot of advice about the agitation.', reason: 'advice 不可数。名词 agitation 的单复数也要按词典词形来，不要自造。', rule: '先确定 agitation 是noun，再套「焦虑不安」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agitation.q1', senseId: 'agitation.s1', errorType: 'meaning', type: '词义选择', prompt: '「agitation」在本条的核心意思是：', options: ['焦虑不安', '完全相反的意思', '与本词无关的语法术语'], answer: '焦虑不安', explain: 'agitation：焦虑不安。' },
      { id: 'agitation.q2', senseId: 'agitation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agitation?', options: ['焦虑不安', 'a kind of ancient coin', 'the past tense of be'], answer: '焦虑不安', explain: '对的是「焦虑不安」。' },
      { id: 'agitation.q3', senseId: 'agitation.s1', errorType: 'grammar', type: '词义选择', prompt: 'agitation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agitation.q4', senseId: 'agitation.s1', errorType: 'meaning', type: '词源', prompt: '记 agitation 时，下面哪句更稳妥？', options: ['先锁住「焦虑不安」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「焦虑不安」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['焦虑不安'] },
  });

  D('agitator', {
    etymology: {
      origin: '英语派生：agitat 加上词尾，构成与「煽动者」相应的词类。',
      prefix: null,
      root: { text: 'agitat', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'agitator', text: '英语派生：agitat 加上词尾，构成与「煽动者」相应的词类。' },
        { label: '现在', text: '核心用法是：煽动者。' },
      ],
      formationLogic: '先认词干 agitat，再看词尾决定词性。',
      mnemonic: '看到 agitator，先说出「煽动者」，再放进一句自己的话。',
      note: '先认词干 agitat，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agitator.', chinese: '这一章反复回到同一个点：煽动者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agitator.s1', en: 'Without that agitator, the story would be hard to follow.', zh: '没有这个煽动者，故事会很难读下去。', structure: 'agitator / 在句中表示 / 煽动者', grammar: 'noun 用法，围绕「煽动者」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agitator.', right: 'He gave me a lot of advice about the agitator.', reason: 'advice 不可数。名词 agitator 的单复数也要按词典词形来，不要自造。', rule: '先确定 agitator 是noun，再套「煽动者」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agitator.q1', senseId: 'agitator.s1', errorType: 'meaning', type: '词义选择', prompt: '「agitator」在本条的核心意思是：', options: ['煽动者', '完全相反的意思', '与本词无关的语法术语'], answer: '煽动者', explain: 'agitator：煽动者。' },
      { id: 'agitator.q2', senseId: 'agitator.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agitator?', options: ['煽动者', 'a kind of ancient coin', 'the past tense of be'], answer: '煽动者', explain: '对的是「煽动者」。' },
      { id: 'agitator.q3', senseId: 'agitator.s1', errorType: 'grammar', type: '词义选择', prompt: 'agitator 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agitator.q4', senseId: 'agitator.s1', errorType: 'meaning', type: '词源', prompt: '记 agitator 时，下面哪句更稳妥？', options: ['先锁住「煽动者」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「煽动者」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['煽动者'] },
  });

  D('ago', {
    etymology: {
      origin: '古英语 agan「离开、过去」。',
      prefix: null,
      root: { text: 'ago', gloss: '以前' },
      suffix: null,
      history: [
        { label: 'ago', text: '古英语 agan「离开、过去」。' },
        { label: '现在', text: '核心用法是：以前。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：以前。',
      mnemonic: '看到 ago，先说出「以前」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：以前。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule ago, and the class finally followed it.', chinese: '她把规则讲得让人明白（以前），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ago.s1', en: 'He nodded ago and went back to his notes.', zh: '他以前地点了点头，又回去看笔记。', structure: 'ago / 在句中表示 / 以前', grammar: 'adverb 用法，围绕「以前」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very agoly.', right: 'She spoke ago.', reason: 'ago 已经是副词，不要再加 -ly。', rule: '先确定 ago 是adverb，再套「以前」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ago.q1', senseId: 'ago.s1', errorType: 'meaning', type: '词义选择', prompt: '「ago」在本条的核心意思是：', options: ['以前', '完全相反的意思', '与本词无关的语法术语'], answer: '以前', explain: 'ago：以前。' },
      { id: 'ago.q2', senseId: 'ago.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ago?', options: ['以前', 'a kind of ancient coin', 'the past tense of be'], answer: '以前', explain: '对的是「以前」。' },
      { id: 'ago.q3', senseId: 'ago.s1', errorType: 'grammar', type: '词义选择', prompt: 'ago 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'ago.q4', senseId: 'ago.s1', errorType: 'meaning', type: '词源', prompt: '记 ago 时，下面哪句更稳妥？', options: ['先锁住「以前」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「以前」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['以前'] },
  });

  D('agonizing', {
    etymology: {
      origin: '现代英语常用词「agonizing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'agonizing', gloss: '痛苦难忍的' },
      suffix: null,
      history: [
        { label: 'agonizing', text: '现代英语常用词「agonizing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：痛苦难忍的。' },
      ],
      formationLogic: '核心义：痛苦难忍的。',
      mnemonic: '看到 agonizing，先说出「痛苦难忍的」，再放进一句自己的话。',
      note: '核心义：痛苦难忍的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked agonizing even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得痛苦难忍的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agonizing.s1', en: 'They needed a agonizing answer, not a long speech.', zh: '他们要的是痛苦难忍的的答复，不是长篇发言。', structure: 'agonizing / 在句中表示 / 痛苦难忍的', grammar: 'adjective 用法，围绕「痛苦难忍的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are agonizing.', right: 'The news is agonizing.', reason: 'news 作主语时动词用单数。形容词 agonizing 放在系动词后面。', rule: '先确定 agonizing 是adjective，再套「痛苦难忍的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agonizing.q1', senseId: 'agonizing.s1', errorType: 'meaning', type: '词义选择', prompt: '「agonizing」在本条的核心意思是：', options: ['痛苦难忍的', '完全相反的意思', '与本词无关的语法术语'], answer: '痛苦难忍的', explain: 'agonizing：痛苦难忍的。' },
      { id: 'agonizing.q2', senseId: 'agonizing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agonizing?', options: ['痛苦难忍的', 'a kind of ancient coin', 'the past tense of be'], answer: '痛苦难忍的', explain: '对的是「痛苦难忍的」。' },
      { id: 'agonizing.q3', senseId: 'agonizing.s1', errorType: 'grammar', type: '词义选择', prompt: 'agonizing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'agonizing.q4', senseId: 'agonizing.s1', errorType: 'meaning', type: '词源', prompt: '记 agonizing 时，下面哪句更稳妥？', options: ['先锁住「痛苦难忍的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「痛苦难忍的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['痛苦难忍的'] },
  });

  D('agony', {
    etymology: {
      origin: '希腊语 agonia「斗争、极度痛苦」。',
      prefix: null,
      root: { text: 'agony', gloss: '极度痛苦' },
      suffix: null,
      history: [
        { label: 'agony', text: '希腊语 agonia「斗争、极度痛苦」。' },
        { label: '现在', text: '核心用法是：极度痛苦。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：极度痛苦。',
      mnemonic: '看到 agony，先说出「极度痛苦」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：极度痛苦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agony.', chinese: '这一章反复回到同一个点：极度痛苦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agony.s1', en: 'Without that agony, the story would be hard to follow.', zh: '没有这个极度痛苦，故事会很难读下去。', structure: 'agony / 在句中表示 / 极度痛苦', grammar: 'noun 用法，围绕「极度痛苦」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agony.', right: 'He gave me a lot of advice about the agony.', reason: 'advice 不可数。名词 agony 的单复数也要按词典词形来，不要自造。', rule: '先确定 agony 是noun，再套「极度痛苦」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agony.q1', senseId: 'agony.s1', errorType: 'meaning', type: '词义选择', prompt: '「agony」在本条的核心意思是：', options: ['极度痛苦', '完全相反的意思', '与本词无关的语法术语'], answer: '极度痛苦', explain: 'agony：极度痛苦。' },
      { id: 'agony.q2', senseId: 'agony.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agony?', options: ['极度痛苦', 'a kind of ancient coin', 'the past tense of be'], answer: '极度痛苦', explain: '对的是「极度痛苦」。' },
      { id: 'agony.q3', senseId: 'agony.s1', errorType: 'grammar', type: '词义选择', prompt: 'agony 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agony.q4', senseId: 'agony.s1', errorType: 'meaning', type: '词源', prompt: '记 agony 时，下面哪句更稳妥？', options: ['先锁住「极度痛苦」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「极度痛苦」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['极度痛苦'] },
  });

  D('agree', {
    etymology: {
      origin: '古法语 agreer「使愉快、同意」，拉丁语 gratus「令人高兴的」。',
      prefix: null,
      root: { text: 'agree', gloss: '同意' },
      suffix: null,
      history: [
        { label: 'agree', text: '古法语 agreer「使愉快、同意」，拉丁语 gratus「令人高兴的」。' },
        { label: '现在', text: '核心用法是：同意。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：同意。',
      mnemonic: '看到 agree，先说出「同意」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：同意。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to agree before the office closed.', chinese: '小组得在办公室关门前完成这件事：同意。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agree.s1', en: 'Nobody wanted to agree, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 agree 是「同意」。', structure: 'agree / 在句中表示 / 同意', grammar: 'verb 用法，围绕「同意」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She agreeed the form yesterday without checking the real past form.', right: 'Look up the past form of "agree" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 agree 是verb，再套「同意」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agree.q1', senseId: 'agree.s1', errorType: 'meaning', type: '词义选择', prompt: '「agree」在本条的核心意思是：', options: ['同意', '完全相反的意思', '与本词无关的语法术语'], answer: '同意', explain: 'agree：同意。' },
      { id: 'agree.q2', senseId: 'agree.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agree?', options: ['同意', 'a kind of ancient coin', 'the past tense of be'], answer: '同意', explain: '对的是「同意」。' },
      { id: 'agree.q3', senseId: 'agree.s1', errorType: 'grammar', type: '词义选择', prompt: 'agree 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'agree.q4', senseId: 'agree.s1', errorType: 'meaning', type: '词源', prompt: '记 agree 时，下面哪句更稳妥？', options: ['先锁住「同意」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「同意」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同意'] },
  });

  D('agreed', {
    etymology: {
      origin: '现代英语常用词「agreed」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'agreed', gloss: '（意见）一致的' },
      suffix: null,
      history: [
        { label: 'agreed', text: '现代英语常用词「agreed」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（意见）一致的。' },
      ],
      formationLogic: '核心义：（意见）一致的。',
      mnemonic: '看到 agreed，先说出「（意见）一致的」，再放进一句自己的话。',
      note: '核心义：（意见）一致的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked agreed even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得（意见）一致的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agreed.s1', en: 'They needed a agreed answer, not a long speech.', zh: '他们要的是（意见）一致的的答复，不是长篇发言。', structure: 'agreed / 在句中表示 / （意见）一致的', grammar: 'adjective 用法，围绕「（意见）一致的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are agreed.', right: 'The news is agreed.', reason: 'news 作主语时动词用单数。形容词 agreed 放在系动词后面。', rule: '先确定 agreed 是adjective，再套「（意见）一致的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agreed.q1', senseId: 'agreed.s1', errorType: 'meaning', type: '词义选择', prompt: '「agreed」在本条的核心意思是：', options: ['（意见）一致的', '完全相反的意思', '与本词无关的语法术语'], answer: '（意见）一致的', explain: 'agreed：（意见）一致的。' },
      { id: 'agreed.q2', senseId: 'agreed.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agreed?', options: ['（意见）一致的', 'a kind of ancient coin', 'the past tense of be'], answer: '（意见）一致的', explain: '对的是「（意见）一致的」。' },
      { id: 'agreed.q3', senseId: 'agreed.s1', errorType: 'grammar', type: '词义选择', prompt: 'agreed 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'agreed.q4', senseId: 'agreed.s1', errorType: 'meaning', type: '词源', prompt: '记 agreed 时，下面哪句更稳妥？', options: ['先锁住「（意见）一致的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（意见）一致的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（意见）一致的'] },
  });

  D('agreement', {
    etymology: {
      origin: '英语派生：agree 加上词尾，构成与「协议」相应的词类。',
      prefix: null,
      root: { text: 'agree', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'agreement', text: '英语派生：agree 加上词尾，构成与「协议」相应的词类。' },
        { label: '现在', text: '核心用法是：协议。' },
      ],
      formationLogic: '先认词干 agree，再看词尾决定词性。',
      mnemonic: '看到 agreement，先说出「协议」，再放进一句自己的话。',
      note: '先认词干 agree，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agreement.', chinese: '这一章反复回到同一个点：协议。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agreement.s1', en: 'Without that agreement, the story would be hard to follow.', zh: '没有这个协议，故事会很难读下去。', structure: 'agreement / 在句中表示 / 协议', grammar: 'noun 用法，围绕「协议」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agreement.', right: 'He gave me a lot of advice about the agreement.', reason: 'advice 不可数。名词 agreement 的单复数也要按词典词形来，不要自造。', rule: '先确定 agreement 是noun，再套「协议」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agreement.q1', senseId: 'agreement.s1', errorType: 'meaning', type: '词义选择', prompt: '「agreement」在本条的核心意思是：', options: ['协议', '完全相反的意思', '与本词无关的语法术语'], answer: '协议', explain: 'agreement：协议。' },
      { id: 'agreement.q2', senseId: 'agreement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agreement?', options: ['协议', 'a kind of ancient coin', 'the past tense of be'], answer: '协议', explain: '对的是「协议」。' },
      { id: 'agreement.q3', senseId: 'agreement.s1', errorType: 'grammar', type: '词义选择', prompt: 'agreement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agreement.q4', senseId: 'agreement.s1', errorType: 'meaning', type: '词源', prompt: '记 agreement 时，下面哪句更稳妥？', options: ['先锁住「协议」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「协议」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['协议'] },
  });

  D('agricultural', {
    etymology: {
      origin: '英语派生：agricultur 加上词尾，构成与「农业的」相应的词类。',
      prefix: null,
      root: { text: 'agricultur', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'agricultural', text: '英语派生：agricultur 加上词尾，构成与「农业的」相应的词类。' },
        { label: '现在', text: '核心用法是：农业的。' },
      ],
      formationLogic: '先认词干 agricultur，再看词尾决定词性。',
      mnemonic: '看到 agricultural，先说出「农业的」，再放进一句自己的话。',
      note: '先认词干 agricultur，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked agricultural even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得农业的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agricultural.s1', en: 'They needed a agricultural answer, not a long speech.', zh: '他们要的是农业的的答复，不是长篇发言。', structure: 'agricultural / 在句中表示 / 农业的', grammar: 'adjective 用法，围绕「农业的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are agricultural.', right: 'The news is agricultural.', reason: 'news 作主语时动词用单数。形容词 agricultural 放在系动词后面。', rule: '先确定 agricultural 是adjective，再套「农业的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agricultural.q1', senseId: 'agricultural.s1', errorType: 'meaning', type: '词义选择', prompt: '「agricultural」在本条的核心意思是：', options: ['农业的', '完全相反的意思', '与本词无关的语法术语'], answer: '农业的', explain: 'agricultural：农业的。' },
      { id: 'agricultural.q2', senseId: 'agricultural.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agricultural?', options: ['农业的', 'a kind of ancient coin', 'the past tense of be'], answer: '农业的', explain: '对的是「农业的」。' },
      { id: 'agricultural.q3', senseId: 'agricultural.s1', errorType: 'grammar', type: '词义选择', prompt: 'agricultural 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'agricultural.q4', senseId: 'agricultural.s1', errorType: 'meaning', type: '词源', prompt: '记 agricultural 时，下面哪句更稳妥？', options: ['先锁住「农业的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「农业的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['农业的'] },
  });

  D('agriculture', {
    etymology: {
      origin: '拉丁语 agri cultura「耕种田地」，ager「田」。',
      prefix: null,
      root: { text: 'agriculture', gloss: '农业' },
      suffix: null,
      history: [
        { label: 'agriculture', text: '拉丁语 agri cultura「耕种田地」，ager「田」。' },
        { label: '现在', text: '核心用法是：农业。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：农业。',
      mnemonic: '看到 agriculture，先说出「农业」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：农业。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agriculture.', chinese: '这一章反复回到同一个点：农业。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agriculture.s1', en: 'Without that agriculture, the story would be hard to follow.', zh: '没有这个农业，故事会很难读下去。', structure: 'agriculture / 在句中表示 / 农业', grammar: 'noun 用法，围绕「农业」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agriculture.', right: 'He gave me a lot of advice about the agriculture.', reason: 'advice 不可数。名词 agriculture 的单复数也要按词典词形来，不要自造。', rule: '先确定 agriculture 是noun，再套「农业」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agriculture.q1', senseId: 'agriculture.s1', errorType: 'meaning', type: '词义选择', prompt: '「agriculture」在本条的核心意思是：', options: ['农业', '完全相反的意思', '与本词无关的语法术语'], answer: '农业', explain: 'agriculture：农业。' },
      { id: 'agriculture.q2', senseId: 'agriculture.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agriculture?', options: ['农业', 'a kind of ancient coin', 'the past tense of be'], answer: '农业', explain: '对的是「农业」。' },
      { id: 'agriculture.q3', senseId: 'agriculture.s1', errorType: 'grammar', type: '词义选择', prompt: 'agriculture 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agriculture.q4', senseId: 'agriculture.s1', errorType: 'meaning', type: '词源', prompt: '记 agriculture 时，下面哪句更稳妥？', options: ['先锁住「农业」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「农业」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['农业'] },
  });

  D('agrochemical', {
    etymology: {
      origin: '英语派生：agrochemic 加上词尾，构成与「农用化学品」相应的词类。',
      prefix: null,
      root: { text: 'agrochemic', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'agrochemical', text: '英语派生：agrochemic 加上词尾，构成与「农用化学品」相应的词类。' },
        { label: '现在', text: '核心用法是：农用化学品。' },
      ],
      formationLogic: '先认词干 agrochemic，再看词尾决定词性。',
      mnemonic: '看到 agrochemical，先说出「农用化学品」，再放进一句自己的话。',
      note: '先认词干 agrochemic，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one agrochemical.', chinese: '这一章反复回到同一个点：农用化学品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'agrochemical.s1', en: 'Without that agrochemical, the story would be hard to follow.', zh: '没有这个农用化学品，故事会很难读下去。', structure: 'agrochemical / 在句中表示 / 农用化学品', grammar: 'noun 用法，围绕「农用化学品」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the agrochemical.', right: 'He gave me a lot of advice about the agrochemical.', reason: 'advice 不可数。名词 agrochemical 的单复数也要按词典词形来，不要自造。', rule: '先确定 agrochemical 是noun，再套「农用化学品」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'agrochemical.q1', senseId: 'agrochemical.s1', errorType: 'meaning', type: '词义选择', prompt: '「agrochemical」在本条的核心意思是：', options: ['农用化学品', '完全相反的意思', '与本词无关的语法术语'], answer: '农用化学品', explain: 'agrochemical：农用化学品。' },
      { id: 'agrochemical.q2', senseId: 'agrochemical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches agrochemical?', options: ['农用化学品', 'a kind of ancient coin', 'the past tense of be'], answer: '农用化学品', explain: '对的是「农用化学品」。' },
      { id: 'agrochemical.q3', senseId: 'agrochemical.s1', errorType: 'grammar', type: '词义选择', prompt: 'agrochemical 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'agrochemical.q4', senseId: 'agrochemical.s1', errorType: 'meaning', type: '词源', prompt: '记 agrochemical 时，下面哪句更稳妥？', options: ['先锁住「农用化学品」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「农用化学品」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['农用化学品'] },
  });

  D('ahead', {
    etymology: {
      origin: '英语 a-「在」+ head。在头的前方。',
      prefix: null,
      root: { text: 'ahead', gloss: '在前面' },
      suffix: null,
      history: [
        { label: 'ahead', text: '英语 a-「在」+ head。在头的前方。' },
        { label: '现在', text: '核心用法是：在前面。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：在前面。',
      mnemonic: '看到 ahead，先说出「在前面」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：在前面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule ahead, and the class finally followed it.', chinese: '她把规则讲得让人明白（在前面），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ahead.s1', en: 'He nodded ahead and went back to his notes.', zh: '他在前面地点了点头，又回去看笔记。', structure: 'ahead / 在句中表示 / 在前面', grammar: 'adverb 用法，围绕「在前面」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very aheadly.', right: 'She spoke ahead.', reason: 'ahead 已经是副词，不要再加 -ly。', rule: '先确定 ahead 是adverb，再套「在前面」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ahead.q1', senseId: 'ahead.s1', errorType: 'meaning', type: '词义选择', prompt: '「ahead」在本条的核心意思是：', options: ['在前面', '完全相反的意思', '与本词无关的语法术语'], answer: '在前面', explain: 'ahead：在前面。' },
      { id: 'ahead.q2', senseId: 'ahead.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ahead?', options: ['在前面', 'a kind of ancient coin', 'the past tense of be'], answer: '在前面', explain: '对的是「在前面」。' },
      { id: 'ahead.q3', senseId: 'ahead.s1', errorType: 'grammar', type: '词义选择', prompt: 'ahead 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'ahead.q4', senseId: 'ahead.s1', errorType: 'meaning', type: '词源', prompt: '记 ahead 时，下面哪句更稳妥？', options: ['先锁住「在前面」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在前面」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在前面'] },
  });

  D('aid', {
    etymology: {
      origin: '古法语 aide，拉丁语 adiutare「帮助」。',
      prefix: null,
      root: { text: 'aid', gloss: '援助' },
      suffix: null,
      history: [
        { label: 'aid', text: '古法语 aide，拉丁语 adiutare「帮助」。' },
        { label: '现在', text: '核心用法是：援助。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：援助。',
      mnemonic: '看到 aid，先说出「援助」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：援助。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aid.', chinese: '这一章反复回到同一个点：援助。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aid.s1', en: 'Without that aid, the story would be hard to follow.', zh: '没有这个援助，故事会很难读下去。', structure: 'aid / 在句中表示 / 援助', grammar: 'noun 用法，围绕「援助」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aid.', right: 'He gave me a lot of advice about the aid.', reason: 'advice 不可数。名词 aid 的单复数也要按词典词形来，不要自造。', rule: '先确定 aid 是noun，再套「援助」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aid.q1', senseId: 'aid.s1', errorType: 'meaning', type: '词义选择', prompt: '「aid」在本条的核心意思是：', options: ['援助', '完全相反的意思', '与本词无关的语法术语'], answer: '援助', explain: 'aid：援助。' },
      { id: 'aid.q2', senseId: 'aid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aid?', options: ['援助', 'a kind of ancient coin', 'the past tense of be'], answer: '援助', explain: '对的是「援助」。' },
      { id: 'aid.q3', senseId: 'aid.s1', errorType: 'grammar', type: '词义选择', prompt: 'aid 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aid.q4', senseId: 'aid.s1', errorType: 'meaning', type: '词源', prompt: '记 aid 时，下面哪句更稳妥？', options: ['先锁住「援助」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「援助」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['援助'] },
  });

  D('aide', {
    etymology: {
      origin: '现代英语常用词「aide」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aide', gloss: '助手' },
      suffix: null,
      history: [
        { label: 'aide', text: '现代英语常用词「aide」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：助手。' },
      ],
      formationLogic: '核心义：助手。',
      mnemonic: '看到 aide，先说出「助手」，再放进一句自己的话。',
      note: '核心义：助手。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aide.', chinese: '这一章反复回到同一个点：助手。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aide.s1', en: 'Without that aide, the story would be hard to follow.', zh: '没有这个助手，故事会很难读下去。', structure: 'aide / 在句中表示 / 助手', grammar: 'noun 用法，围绕「助手」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aide.', right: 'He gave me a lot of advice about the aide.', reason: 'advice 不可数。名词 aide 的单复数也要按词典词形来，不要自造。', rule: '先确定 aide 是noun，再套「助手」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aide.q1', senseId: 'aide.s1', errorType: 'meaning', type: '词义选择', prompt: '「aide」在本条的核心意思是：', options: ['助手', '完全相反的意思', '与本词无关的语法术语'], answer: '助手', explain: 'aide：助手。' },
      { id: 'aide.q2', senseId: 'aide.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aide?', options: ['助手', 'a kind of ancient coin', 'the past tense of be'], answer: '助手', explain: '对的是「助手」。' },
      { id: 'aide.q3', senseId: 'aide.s1', errorType: 'grammar', type: '词义选择', prompt: 'aide 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aide.q4', senseId: 'aide.s1', errorType: 'meaning', type: '词源', prompt: '记 aide 时，下面哪句更稳妥？', options: ['先锁住「助手」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「助手」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['助手'] },
  });

  D('AIDS', {
    etymology: {
      origin: '现代英语常用词「AIDS」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'AIDS', gloss: '艾滋病' },
      suffix: null,
      history: [
        { label: 'AIDS', text: '现代英语常用词「AIDS」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：艾滋病。' },
      ],
      formationLogic: '核心义：艾滋病。',
      mnemonic: '看到 AIDS，先说出「艾滋病」，再放进一句自己的话。',
      note: '核心义：艾滋病。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one AIDS.', chinese: '这一章反复回到同一个点：艾滋病。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'AIDS.s1', en: 'Without that AIDS, the story would be hard to follow.', zh: '没有这个艾滋病，故事会很难读下去。', structure: 'AIDS / 在句中表示 / 艾滋病', grammar: 'noun 用法，围绕「艾滋病」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the AIDS.', right: 'He gave me a lot of advice about the AIDS.', reason: 'advice 不可数。名词 AIDS 的单复数也要按词典词形来，不要自造。', rule: '先确定 AIDS 是noun，再套「艾滋病」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'AIDS.q1', senseId: 'AIDS.s1', errorType: 'meaning', type: '词义选择', prompt: '「AIDS」在本条的核心意思是：', options: ['艾滋病', '完全相反的意思', '与本词无关的语法术语'], answer: '艾滋病', explain: 'AIDS：艾滋病。' },
      { id: 'AIDS.q2', senseId: 'AIDS.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches AIDS?', options: ['艾滋病', 'a kind of ancient coin', 'the past tense of be'], answer: '艾滋病', explain: '对的是「艾滋病」。' },
      { id: 'AIDS.q3', senseId: 'AIDS.s1', errorType: 'grammar', type: '词义选择', prompt: 'AIDS 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'AIDS.q4', senseId: 'AIDS.s1', errorType: 'meaning', type: '词源', prompt: '记 AIDS 时，下面哪句更稳妥？', options: ['先锁住「艾滋病」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「艾滋病」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['艾滋病'] },
  });

  D('ail', {
    etymology: {
      origin: '现代英语常用词「ail」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ail', gloss: '困扰' },
      suffix: null,
      history: [
        { label: 'ail', text: '现代英语常用词「ail」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：困扰。' },
      ],
      formationLogic: '核心义：困扰。',
      mnemonic: '看到 ail，先说出「困扰」，再放进一句自己的话。',
      note: '核心义：困扰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to ail before the office closed.', chinese: '小组得在办公室关门前完成这件事：困扰。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ail.s1', en: 'Nobody wanted to ail, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 ail 是「困扰」。', structure: 'ail / 在句中表示 / 困扰', grammar: 'verb 用法，围绕「困扰」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She ailed the form yesterday without checking the real past form.', right: 'Look up the past form of "ail" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 ail 是verb，再套「困扰」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ail.q1', senseId: 'ail.s1', errorType: 'meaning', type: '词义选择', prompt: '「ail」在本条的核心意思是：', options: ['困扰', '完全相反的意思', '与本词无关的语法术语'], answer: '困扰', explain: 'ail：困扰。' },
      { id: 'ail.q2', senseId: 'ail.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ail?', options: ['困扰', 'a kind of ancient coin', 'the past tense of be'], answer: '困扰', explain: '对的是「困扰」。' },
      { id: 'ail.q3', senseId: 'ail.s1', errorType: 'grammar', type: '词义选择', prompt: 'ail 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'ail.q4', senseId: 'ail.s1', errorType: 'meaning', type: '词源', prompt: '记 ail 时，下面哪句更稳妥？', options: ['先锁住「困扰」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「困扰」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['困扰'] },
  });

  D('ailing', {
    etymology: {
      origin: '现代英语常用词「ailing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ailing', gloss: '病弱的' },
      suffix: null,
      history: [
        { label: 'ailing', text: '现代英语常用词「ailing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：病弱的。' },
      ],
      formationLogic: '核心义：病弱的。',
      mnemonic: '看到 ailing，先说出「病弱的」，再放进一句自己的话。',
      note: '核心义：病弱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked ailing even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得病弱的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ailing.s1', en: 'They needed a ailing answer, not a long speech.', zh: '他们要的是病弱的的答复，不是长篇发言。', structure: 'ailing / 在句中表示 / 病弱的', grammar: 'adjective 用法，围绕「病弱的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ailing.', right: 'The news is ailing.', reason: 'news 作主语时动词用单数。形容词 ailing 放在系动词后面。', rule: '先确定 ailing 是adjective，再套「病弱的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ailing.q1', senseId: 'ailing.s1', errorType: 'meaning', type: '词义选择', prompt: '「ailing」在本条的核心意思是：', options: ['病弱的', '完全相反的意思', '与本词无关的语法术语'], answer: '病弱的', explain: 'ailing：病弱的。' },
      { id: 'ailing.q2', senseId: 'ailing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ailing?', options: ['病弱的', 'a kind of ancient coin', 'the past tense of be'], answer: '病弱的', explain: '对的是「病弱的」。' },
      { id: 'ailing.q3', senseId: 'ailing.s1', errorType: 'grammar', type: '词义选择', prompt: 'ailing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ailing.q4', senseId: 'ailing.s1', errorType: 'meaning', type: '词源', prompt: '记 ailing 时，下面哪句更稳妥？', options: ['先锁住「病弱的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「病弱的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['病弱的'] },
  });

  D('aim', {
    etymology: {
      origin: '古法语 aesmer「估计、对准」，拉丁语 aestimare。',
      prefix: null,
      root: { text: 'aim', gloss: '目标' },
      suffix: null,
      history: [
        { label: 'aim', text: '古法语 aesmer「估计、对准」，拉丁语 aestimare。' },
        { label: '现在', text: '核心用法是：目标。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：目标。',
      mnemonic: '看到 aim，先说出「目标」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：目标。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aim.', chinese: '这一章反复回到同一个点：目标。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aim.s1', en: 'Without that aim, the story would be hard to follow.', zh: '没有这个目标，故事会很难读下去。', structure: 'aim / 在句中表示 / 目标', grammar: 'noun 用法，围绕「目标」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aim.', right: 'He gave me a lot of advice about the aim.', reason: 'advice 不可数。名词 aim 的单复数也要按词典词形来，不要自造。', rule: '先确定 aim 是noun，再套「目标」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aim.q1', senseId: 'aim.s1', errorType: 'meaning', type: '词义选择', prompt: '「aim」在本条的核心意思是：', options: ['目标', '完全相反的意思', '与本词无关的语法术语'], answer: '目标', explain: 'aim：目标。' },
      { id: 'aim.q2', senseId: 'aim.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aim?', options: ['目标', 'a kind of ancient coin', 'the past tense of be'], answer: '目标', explain: '对的是「目标」。' },
      { id: 'aim.q3', senseId: 'aim.s1', errorType: 'grammar', type: '词义选择', prompt: 'aim 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aim.q4', senseId: 'aim.s1', errorType: 'meaning', type: '词源', prompt: '记 aim 时，下面哪句更稳妥？', options: ['先锁住「目标」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「目标」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['目标'] },
  });

  D('aimless', {
    etymology: {
      origin: '英语派生：aim 加上词尾，构成与「无目标的」相应的词类。',
      prefix: null,
      root: { text: 'aim', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'aimless', text: '英语派生：aim 加上词尾，构成与「无目标的」相应的词类。' },
        { label: '现在', text: '核心用法是：无目标的。' },
      ],
      formationLogic: '先认词干 aim，再看词尾决定词性。',
      mnemonic: '看到 aimless，先说出「无目标的」，再放进一句自己的话。',
      note: '先认词干 aim，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aimless even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得无目标的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aimless.s1', en: 'They needed a aimless answer, not a long speech.', zh: '他们要的是无目标的的答复，不是长篇发言。', structure: 'aimless / 在句中表示 / 无目标的', grammar: 'adjective 用法，围绕「无目标的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aimless.', right: 'The news is aimless.', reason: 'news 作主语时动词用单数。形容词 aimless 放在系动词后面。', rule: '先确定 aimless 是adjective，再套「无目标的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aimless.q1', senseId: 'aimless.s1', errorType: 'meaning', type: '词义选择', prompt: '「aimless」在本条的核心意思是：', options: ['无目标的', '完全相反的意思', '与本词无关的语法术语'], answer: '无目标的', explain: 'aimless：无目标的。' },
      { id: 'aimless.q2', senseId: 'aimless.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aimless?', options: ['无目标的', 'a kind of ancient coin', 'the past tense of be'], answer: '无目标的', explain: '对的是「无目标的」。' },
      { id: 'aimless.q3', senseId: 'aimless.s1', errorType: 'grammar', type: '词义选择', prompt: 'aimless 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aimless.q4', senseId: 'aimless.s1', errorType: 'meaning', type: '词源', prompt: '记 aimless 时，下面哪句更稳妥？', options: ['先锁住「无目标的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「无目标的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['无目标的'] },
  });

  D('air', {
    etymology: {
      origin: '希腊语 aer，经拉丁语、法语进入英语。',
      prefix: null,
      root: { text: 'air', gloss: '空气' },
      suffix: null,
      history: [
        { label: 'air', text: '希腊语 aer，经拉丁语、法语进入英语。' },
        { label: '现在', text: '核心用法是：空气。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：空气。',
      mnemonic: '看到 air，先说出「空气」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：空气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one air.', chinese: '这一章反复回到同一个点：空气。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'air.s1', en: 'Without that air, the story would be hard to follow.', zh: '没有这个空气，故事会很难读下去。', structure: 'air / 在句中表示 / 空气', grammar: 'noun 用法，围绕「空气」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the air.', right: 'He gave me a lot of advice about the air.', reason: 'advice 不可数。名词 air 的单复数也要按词典词形来，不要自造。', rule: '先确定 air 是noun，再套「空气」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'air.q1', senseId: 'air.s1', errorType: 'meaning', type: '词义选择', prompt: '「air」在本条的核心意思是：', options: ['空气', '完全相反的意思', '与本词无关的语法术语'], answer: '空气', explain: 'air：空气。' },
      { id: 'air.q2', senseId: 'air.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches air?', options: ['空气', 'a kind of ancient coin', 'the past tense of be'], answer: '空气', explain: '对的是「空气」。' },
      { id: 'air.q3', senseId: 'air.s1', errorType: 'grammar', type: '词义选择', prompt: 'air 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'air.q4', senseId: 'air.s1', errorType: 'meaning', type: '词源', prompt: '记 air 时，下面哪句更稳妥？', options: ['先锁住「空气」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「空气」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空气'] },
  });

  D('air conditioner', {
    etymology: {
      origin: '现代英语固定说法「air conditioner」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'air conditioner', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'air conditioner', text: '现代英语固定说法「air conditioner」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：空调（机）。' },
      ],
      formationLogic: '常见义：空调（机）。',
      mnemonic: '看到 air conditioner，先说出「空调（机）」，再放进一句自己的话。',
      note: '常见义：空调（机）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "air conditioner" and asked what it does in the sentence.', chinese: '老师在「air conditioner」下面划了线，问它在句中起什么作用。它表示空调（机）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'air conditioner.s1', en: 'In the margin she wrote "air conditioner" so the reader would not miss that phrase.', zh: '她在页边写下「air conditioner」，免得读者漏掉这个说法。意思是空调（机）。', structure: 'air conditioner / 在句中表示 / 空调（机）', grammar: 'noun 用法，围绕「空调（机）」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated air conditioner word by word and lost the meaning.', right: 'He kept "air conditioner" as one phrase meaning 空调（机）.', reason: '「air conditioner」是固定说法，拆开容易翻错。', rule: '先确定 air conditioner 是noun，再套「空调（机）」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'air conditioner.q1', senseId: 'air conditioner.s1', errorType: 'meaning', type: '词义选择', prompt: '「air conditioner」在本条的核心意思是：', options: ['空调（机）', '完全相反的意思', '与本词无关的语法术语'], answer: '空调（机）', explain: 'air conditioner：空调（机）。' },
      { id: 'air conditioner.q2', senseId: 'air conditioner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches air conditioner?', options: ['空调（机）', 'a kind of ancient coin', 'the past tense of be'], answer: '空调（机）', explain: '对的是「空调（机）」。' },
      { id: 'air conditioner.q3', senseId: 'air conditioner.s1', errorType: 'grammar', type: '词义选择', prompt: 'air conditioner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'air conditioner.q4', senseId: 'air conditioner.s1', errorType: 'meaning', type: '词源', prompt: '记 air conditioner 时，下面哪句更稳妥？', options: ['先锁住「空调（机）」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「空调（机）」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空调（机）'] },
  });

  D('air-conditioning', {
    etymology: {
      origin: '现代英语常用词「air-conditioning」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'air-conditioning', gloss: '空调' },
      suffix: null,
      history: [
        { label: 'air-conditioning', text: '现代英语常用词「air-conditioning」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：空调。' },
      ],
      formationLogic: '核心义：空调。',
      mnemonic: '看到 air-conditioning，先说出「空调」，再放进一句自己的话。',
      note: '核心义：空调。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one air-conditioning.', chinese: '这一章反复回到同一个点：空调。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'air-conditioning.s1', en: 'Without that air-conditioning, the story would be hard to follow.', zh: '没有这个空调，故事会很难读下去。', structure: 'air-conditioning / 在句中表示 / 空调', grammar: 'noun 用法，围绕「空调」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the air-conditioning.', right: 'He gave me a lot of advice about the air-conditioning.', reason: 'advice 不可数。名词 air-conditioning 的单复数也要按词典词形来，不要自造。', rule: '先确定 air-conditioning 是noun，再套「空调」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'air-conditioning.q1', senseId: 'air-conditioning.s1', errorType: 'meaning', type: '词义选择', prompt: '「air-conditioning」在本条的核心意思是：', options: ['空调', '完全相反的意思', '与本词无关的语法术语'], answer: '空调', explain: 'air-conditioning：空调。' },
      { id: 'air-conditioning.q2', senseId: 'air-conditioning.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches air-conditioning?', options: ['空调', 'a kind of ancient coin', 'the past tense of be'], answer: '空调', explain: '对的是「空调」。' },
      { id: 'air-conditioning.q3', senseId: 'air-conditioning.s1', errorType: 'grammar', type: '词义选择', prompt: 'air-conditioning 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'air-conditioning.q4', senseId: 'air-conditioning.s1', errorType: 'meaning', type: '词源', prompt: '记 air-conditioning 时，下面哪句更稳妥？', options: ['先锁住「空调」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「空调」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空调'] },
  });

  D('airborne', {
    etymology: {
      origin: '现代英语常用词「airborne」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airborne', gloss: '空运的' },
      suffix: null,
      history: [
        { label: 'airborne', text: '现代英语常用词「airborne」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：空运的。' },
      ],
      formationLogic: '核心义：空运的。',
      mnemonic: '看到 airborne，先说出「空运的」，再放进一句自己的话。',
      note: '核心义：空运的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked airborne even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得空运的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airborne.s1', en: 'They needed a airborne answer, not a long speech.', zh: '他们要的是空运的的答复，不是长篇发言。', structure: 'airborne / 在句中表示 / 空运的', grammar: 'adjective 用法，围绕「空运的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are airborne.', right: 'The news is airborne.', reason: 'news 作主语时动词用单数。形容词 airborne 放在系动词后面。', rule: '先确定 airborne 是adjective，再套「空运的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airborne.q1', senseId: 'airborne.s1', errorType: 'meaning', type: '词义选择', prompt: '「airborne」在本条的核心意思是：', options: ['空运的', '完全相反的意思', '与本词无关的语法术语'], answer: '空运的', explain: 'airborne：空运的。' },
      { id: 'airborne.q2', senseId: 'airborne.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airborne?', options: ['空运的', 'a kind of ancient coin', 'the past tense of be'], answer: '空运的', explain: '对的是「空运的」。' },
      { id: 'airborne.q3', senseId: 'airborne.s1', errorType: 'grammar', type: '词义选择', prompt: 'airborne 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'airborne.q4', senseId: 'airborne.s1', errorType: 'meaning', type: '词源', prompt: '记 airborne 时，下面哪句更稳妥？', options: ['先锁住「空运的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「空运的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空运的'] },
  });

  D('aircraft', {
    etymology: {
      origin: '现代英语常用词「aircraft」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aircraft', gloss: '飞机' },
      suffix: null,
      history: [
        { label: 'aircraft', text: '现代英语常用词「aircraft」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：飞机。' },
      ],
      formationLogic: '核心义：飞机。',
      mnemonic: '看到 aircraft，先说出「飞机」，再放进一句自己的话。',
      note: '核心义：飞机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aircraft.', chinese: '这一章反复回到同一个点：飞机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aircraft.s1', en: 'Without that aircraft, the story would be hard to follow.', zh: '没有这个飞机，故事会很难读下去。', structure: 'aircraft / 在句中表示 / 飞机', grammar: 'noun 用法，围绕「飞机」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aircraft.', right: 'He gave me a lot of advice about the aircraft.', reason: 'advice 不可数。名词 aircraft 的单复数也要按词典词形来，不要自造。', rule: '先确定 aircraft 是noun，再套「飞机」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aircraft.q1', senseId: 'aircraft.s1', errorType: 'meaning', type: '词义选择', prompt: '「aircraft」在本条的核心意思是：', options: ['飞机', '完全相反的意思', '与本词无关的语法术语'], answer: '飞机', explain: 'aircraft：飞机。' },
      { id: 'aircraft.q2', senseId: 'aircraft.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aircraft?', options: ['飞机', 'a kind of ancient coin', 'the past tense of be'], answer: '飞机', explain: '对的是「飞机」。' },
      { id: 'aircraft.q3', senseId: 'aircraft.s1', errorType: 'grammar', type: '词义选择', prompt: 'aircraft 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aircraft.q4', senseId: 'aircraft.s1', errorType: 'meaning', type: '词源', prompt: '记 aircraft 时，下面哪句更稳妥？', options: ['先锁住「飞机」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「飞机」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['飞机'] },
  });

  D('airdrop', {
    etymology: {
      origin: '现代英语常用词「airdrop」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airdrop', gloss: '空投' },
      suffix: null,
      history: [
        { label: 'airdrop', text: '现代英语常用词「airdrop」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：空投。' },
      ],
      formationLogic: '核心义：空投。',
      mnemonic: '看到 airdrop，先说出「空投」，再放进一句自己的话。',
      note: '核心义：空投。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airdrop.', chinese: '这一章反复回到同一个点：空投。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airdrop.s1', en: 'Without that airdrop, the story would be hard to follow.', zh: '没有这个空投，故事会很难读下去。', structure: 'airdrop / 在句中表示 / 空投', grammar: 'noun 用法，围绕「空投」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airdrop.', right: 'He gave me a lot of advice about the airdrop.', reason: 'advice 不可数。名词 airdrop 的单复数也要按词典词形来，不要自造。', rule: '先确定 airdrop 是noun，再套「空投」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airdrop.q1', senseId: 'airdrop.s1', errorType: 'meaning', type: '词义选择', prompt: '「airdrop」在本条的核心意思是：', options: ['空投', '完全相反的意思', '与本词无关的语法术语'], answer: '空投', explain: 'airdrop：空投。' },
      { id: 'airdrop.q2', senseId: 'airdrop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airdrop?', options: ['空投', 'a kind of ancient coin', 'the past tense of be'], answer: '空投', explain: '对的是「空投」。' },
      { id: 'airdrop.q3', senseId: 'airdrop.s1', errorType: 'grammar', type: '词义选择', prompt: 'airdrop 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airdrop.q4', senseId: 'airdrop.s1', errorType: 'meaning', type: '词源', prompt: '记 airdrop 时，下面哪句更稳妥？', options: ['先锁住「空投」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「空投」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空投'] },
  });

  D('airfoil', {
    etymology: {
      origin: '现代英语常用词「airfoil」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airfoil', gloss: '翼型' },
      suffix: null,
      history: [
        { label: 'airfoil', text: '现代英语常用词「airfoil」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：翼型。' },
      ],
      formationLogic: '核心义：翼型。',
      mnemonic: '看到 airfoil，先说出「翼型」，再放进一句自己的话。',
      note: '核心义：翼型。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airfoil.', chinese: '这一章反复回到同一个点：翼型。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airfoil.s1', en: 'Without that airfoil, the story would be hard to follow.', zh: '没有这个翼型，故事会很难读下去。', structure: 'airfoil / 在句中表示 / 翼型', grammar: 'noun 用法，围绕「翼型」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airfoil.', right: 'He gave me a lot of advice about the airfoil.', reason: 'advice 不可数。名词 airfoil 的单复数也要按词典词形来，不要自造。', rule: '先确定 airfoil 是noun，再套「翼型」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airfoil.q1', senseId: 'airfoil.s1', errorType: 'meaning', type: '词义选择', prompt: '「airfoil」在本条的核心意思是：', options: ['翼型', '完全相反的意思', '与本词无关的语法术语'], answer: '翼型', explain: 'airfoil：翼型。' },
      { id: 'airfoil.q2', senseId: 'airfoil.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airfoil?', options: ['翼型', 'a kind of ancient coin', 'the past tense of be'], answer: '翼型', explain: '对的是「翼型」。' },
      { id: 'airfoil.q3', senseId: 'airfoil.s1', errorType: 'grammar', type: '词义选择', prompt: 'airfoil 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airfoil.q4', senseId: 'airfoil.s1', errorType: 'meaning', type: '词源', prompt: '记 airfoil 时，下面哪句更稳妥？', options: ['先锁住「翼型」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「翼型」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['翼型'] },
  });

  D('airlift', {
    etymology: {
      origin: '现代英语常用词「airlift」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airlift', gloss: '空运' },
      suffix: null,
      history: [
        { label: 'airlift', text: '现代英语常用词「airlift」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：空运。' },
      ],
      formationLogic: '核心义：空运。',
      mnemonic: '看到 airlift，先说出「空运」，再放进一句自己的话。',
      note: '核心义：空运。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airlift.', chinese: '这一章反复回到同一个点：空运。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airlift.s1', en: 'Without that airlift, the story would be hard to follow.', zh: '没有这个空运，故事会很难读下去。', structure: 'airlift / 在句中表示 / 空运', grammar: 'noun 用法，围绕「空运」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airlift.', right: 'He gave me a lot of advice about the airlift.', reason: 'advice 不可数。名词 airlift 的单复数也要按词典词形来，不要自造。', rule: '先确定 airlift 是noun，再套「空运」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airlift.q1', senseId: 'airlift.s1', errorType: 'meaning', type: '词义选择', prompt: '「airlift」在本条的核心意思是：', options: ['空运', '完全相反的意思', '与本词无关的语法术语'], answer: '空运', explain: 'airlift：空运。' },
      { id: 'airlift.q2', senseId: 'airlift.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airlift?', options: ['空运', 'a kind of ancient coin', 'the past tense of be'], answer: '空运', explain: '对的是「空运」。' },
      { id: 'airlift.q3', senseId: 'airlift.s1', errorType: 'grammar', type: '词义选择', prompt: 'airlift 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airlift.q4', senseId: 'airlift.s1', errorType: 'meaning', type: '词源', prompt: '记 airlift 时，下面哪句更稳妥？', options: ['先锁住「空运」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「空运」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['空运'] },
  });

  D('airline', {
    etymology: {
      origin: '现代英语常用词「airline」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airline', gloss: '航空公司' },
      suffix: null,
      history: [
        { label: 'airline', text: '现代英语常用词「airline」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：航空公司。' },
      ],
      formationLogic: '核心义：航空公司。',
      mnemonic: '看到 airline，先说出「航空公司」，再放进一句自己的话。',
      note: '核心义：航空公司。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airline.', chinese: '这一章反复回到同一个点：航空公司。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airline.s1', en: 'Without that airline, the story would be hard to follow.', zh: '没有这个航空公司，故事会很难读下去。', structure: 'airline / 在句中表示 / 航空公司', grammar: 'noun 用法，围绕「航空公司」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airline.', right: 'He gave me a lot of advice about the airline.', reason: 'advice 不可数。名词 airline 的单复数也要按词典词形来，不要自造。', rule: '先确定 airline 是noun，再套「航空公司」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airline.q1', senseId: 'airline.s1', errorType: 'meaning', type: '词义选择', prompt: '「airline」在本条的核心意思是：', options: ['航空公司', '完全相反的意思', '与本词无关的语法术语'], answer: '航空公司', explain: 'airline：航空公司。' },
      { id: 'airline.q2', senseId: 'airline.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airline?', options: ['航空公司', 'a kind of ancient coin', 'the past tense of be'], answer: '航空公司', explain: '对的是「航空公司」。' },
      { id: 'airline.q3', senseId: 'airline.s1', errorType: 'grammar', type: '词义选择', prompt: 'airline 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airline.q4', senseId: 'airline.s1', errorType: 'meaning', type: '词源', prompt: '记 airline 时，下面哪句更稳妥？', options: ['先锁住「航空公司」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「航空公司」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['航空公司'] },
  });

  D('airliner', {
    etymology: {
      origin: '英语派生：airlin 加上词尾，构成与「大型客机」相应的词类。',
      prefix: null,
      root: { text: 'airlin', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'airliner', text: '英语派生：airlin 加上词尾，构成与「大型客机」相应的词类。' },
        { label: '现在', text: '核心用法是：大型客机。' },
      ],
      formationLogic: '先认词干 airlin，再看词尾决定词性。',
      mnemonic: '看到 airliner，先说出「大型客机」，再放进一句自己的话。',
      note: '先认词干 airlin，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airliner.', chinese: '这一章反复回到同一个点：大型客机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airliner.s1', en: 'Without that airliner, the story would be hard to follow.', zh: '没有这个大型客机，故事会很难读下去。', structure: 'airliner / 在句中表示 / 大型客机', grammar: 'noun 用法，围绕「大型客机」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airliner.', right: 'He gave me a lot of advice about the airliner.', reason: 'advice 不可数。名词 airliner 的单复数也要按词典词形来，不要自造。', rule: '先确定 airliner 是noun，再套「大型客机」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airliner.q1', senseId: 'airliner.s1', errorType: 'meaning', type: '词义选择', prompt: '「airliner」在本条的核心意思是：', options: ['大型客机', '完全相反的意思', '与本词无关的语法术语'], answer: '大型客机', explain: 'airliner：大型客机。' },
      { id: 'airliner.q2', senseId: 'airliner.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airliner?', options: ['大型客机', 'a kind of ancient coin', 'the past tense of be'], answer: '大型客机', explain: '对的是「大型客机」。' },
      { id: 'airliner.q3', senseId: 'airliner.s1', errorType: 'grammar', type: '词义选择', prompt: 'airliner 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airliner.q4', senseId: 'airliner.s1', errorType: 'meaning', type: '词源', prompt: '记 airliner 时，下面哪句更稳妥？', options: ['先锁住「大型客机」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「大型客机」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大型客机'] },
  });

  D('airplane', {
    etymology: {
      origin: '现代英语常用词「airplane」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airplane', gloss: '飞机' },
      suffix: null,
      history: [
        { label: 'airplane', text: '现代英语常用词「airplane」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：飞机。' },
      ],
      formationLogic: '核心义：飞机。',
      mnemonic: '看到 airplane，先说出「飞机」，再放进一句自己的话。',
      note: '核心义：飞机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airplane.', chinese: '这一章反复回到同一个点：飞机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airplane.s1', en: 'Without that airplane, the story would be hard to follow.', zh: '没有这个飞机，故事会很难读下去。', structure: 'airplane / 在句中表示 / 飞机', grammar: 'noun 用法，围绕「飞机」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airplane.', right: 'He gave me a lot of advice about the airplane.', reason: 'advice 不可数。名词 airplane 的单复数也要按词典词形来，不要自造。', rule: '先确定 airplane 是noun，再套「飞机」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airplane.q1', senseId: 'airplane.s1', errorType: 'meaning', type: '词义选择', prompt: '「airplane」在本条的核心意思是：', options: ['飞机', '完全相反的意思', '与本词无关的语法术语'], answer: '飞机', explain: 'airplane：飞机。' },
      { id: 'airplane.q2', senseId: 'airplane.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airplane?', options: ['飞机', 'a kind of ancient coin', 'the past tense of be'], answer: '飞机', explain: '对的是「飞机」。' },
      { id: 'airplane.q3', senseId: 'airplane.s1', errorType: 'grammar', type: '词义选择', prompt: 'airplane 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airplane.q4', senseId: 'airplane.s1', errorType: 'meaning', type: '词源', prompt: '记 airplane 时，下面哪句更稳妥？', options: ['先锁住「飞机」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「飞机」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['飞机'] },
  });

  D('airport', {
    etymology: {
      origin: '现代英语常用词「airport」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airport', gloss: '机场' },
      suffix: null,
      history: [
        { label: 'airport', text: '现代英语常用词「airport」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：机场。' },
      ],
      formationLogic: '核心义：机场。',
      mnemonic: '看到 airport，先说出「机场」，再放进一句自己的话。',
      note: '核心义：机场。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airport.', chinese: '这一章反复回到同一个点：机场。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airport.s1', en: 'Without that airport, the story would be hard to follow.', zh: '没有这个机场，故事会很难读下去。', structure: 'airport / 在句中表示 / 机场', grammar: 'noun 用法，围绕「机场」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airport.', right: 'He gave me a lot of advice about the airport.', reason: 'advice 不可数。名词 airport 的单复数也要按词典词形来，不要自造。', rule: '先确定 airport 是noun，再套「机场」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airport.q1', senseId: 'airport.s1', errorType: 'meaning', type: '词义选择', prompt: '「airport」在本条的核心意思是：', options: ['机场', '完全相反的意思', '与本词无关的语法术语'], answer: '机场', explain: 'airport：机场。' },
      { id: 'airport.q2', senseId: 'airport.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airport?', options: ['机场', 'a kind of ancient coin', 'the past tense of be'], answer: '机场', explain: '对的是「机场」。' },
      { id: 'airport.q3', senseId: 'airport.s1', errorType: 'grammar', type: '词义选择', prompt: 'airport 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airport.q4', senseId: 'airport.s1', errorType: 'meaning', type: '词源', prompt: '记 airport 时，下面哪句更稳妥？', options: ['先锁住「机场」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「机场」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['机场'] },
  });

  D('airstrip', {
    etymology: {
      origin: '现代英语常用词「airstrip」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airstrip', gloss: '简易跑道' },
      suffix: null,
      history: [
        { label: 'airstrip', text: '现代英语常用词「airstrip」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：简易跑道。' },
      ],
      formationLogic: '核心义：简易跑道。',
      mnemonic: '看到 airstrip，先说出「简易跑道」，再放进一句自己的话。',
      note: '核心义：简易跑道。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airstrip.', chinese: '这一章反复回到同一个点：简易跑道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airstrip.s1', en: 'Without that airstrip, the story would be hard to follow.', zh: '没有这个简易跑道，故事会很难读下去。', structure: 'airstrip / 在句中表示 / 简易跑道', grammar: 'noun 用法，围绕「简易跑道」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airstrip.', right: 'He gave me a lot of advice about the airstrip.', reason: 'advice 不可数。名词 airstrip 的单复数也要按词典词形来，不要自造。', rule: '先确定 airstrip 是noun，再套「简易跑道」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airstrip.q1', senseId: 'airstrip.s1', errorType: 'meaning', type: '词义选择', prompt: '「airstrip」在本条的核心意思是：', options: ['简易跑道', '完全相反的意思', '与本词无关的语法术语'], answer: '简易跑道', explain: 'airstrip：简易跑道。' },
      { id: 'airstrip.q2', senseId: 'airstrip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airstrip?', options: ['简易跑道', 'a kind of ancient coin', 'the past tense of be'], answer: '简易跑道', explain: '对的是「简易跑道」。' },
      { id: 'airstrip.q3', senseId: 'airstrip.s1', errorType: 'grammar', type: '词义选择', prompt: 'airstrip 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airstrip.q4', senseId: 'airstrip.s1', errorType: 'meaning', type: '词源', prompt: '记 airstrip 时，下面哪句更稳妥？', options: ['先锁住「简易跑道」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「简易跑道」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['简易跑道'] },
  });

  D('airways', {
    etymology: {
      origin: '现代英语常用词「airways」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airways', gloss: '航路' },
      suffix: null,
      history: [
        { label: 'airways', text: '现代英语常用词「airways」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：航路。' },
      ],
      formationLogic: '核心义：航路。',
      mnemonic: '看到 airways，先说出「航路」，再放进一句自己的话。',
      note: '核心义：航路。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one airways.', chinese: '这一章反复回到同一个点：航路。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airways.s1', en: 'Without that airways, the story would be hard to follow.', zh: '没有这个航路，故事会很难读下去。', structure: 'airways / 在句中表示 / 航路', grammar: 'noun 用法，围绕「航路」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the airways.', right: 'He gave me a lot of advice about the airways.', reason: 'advice 不可数。名词 airways 的单复数也要按词典词形来，不要自造。', rule: '先确定 airways 是noun，再套「航路」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airways.q1', senseId: 'airways.s1', errorType: 'meaning', type: '词义选择', prompt: '「airways」在本条的核心意思是：', options: ['航路', '完全相反的意思', '与本词无关的语法术语'], answer: '航路', explain: 'airways：航路。' },
      { id: 'airways.q2', senseId: 'airways.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airways?', options: ['航路', 'a kind of ancient coin', 'the past tense of be'], answer: '航路', explain: '对的是「航路」。' },
      { id: 'airways.q3', senseId: 'airways.s1', errorType: 'grammar', type: '词义选择', prompt: 'airways 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'airways.q4', senseId: 'airways.s1', errorType: 'meaning', type: '词源', prompt: '记 airways 时，下面哪句更稳妥？', options: ['先锁住「航路」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「航路」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['航路'] },
  });

  D('airy', {
    etymology: {
      origin: '现代英语常用词「airy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'airy', gloss: '通风的' },
      suffix: null,
      history: [
        { label: 'airy', text: '现代英语常用词「airy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：通风的。' },
      ],
      formationLogic: '核心义：通风的。',
      mnemonic: '看到 airy，先说出「通风的」，再放进一句自己的话。',
      note: '核心义：通风的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked airy even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得通风的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'airy.s1', en: 'They needed a airy answer, not a long speech.', zh: '他们要的是通风的的答复，不是长篇发言。', structure: 'airy / 在句中表示 / 通风的', grammar: 'adjective 用法，围绕「通风的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are airy.', right: 'The news is airy.', reason: 'news 作主语时动词用单数。形容词 airy 放在系动词后面。', rule: '先确定 airy 是adjective，再套「通风的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'airy.q1', senseId: 'airy.s1', errorType: 'meaning', type: '词义选择', prompt: '「airy」在本条的核心意思是：', options: ['通风的', '完全相反的意思', '与本词无关的语法术语'], answer: '通风的', explain: 'airy：通风的。' },
      { id: 'airy.q2', senseId: 'airy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches airy?', options: ['通风的', 'a kind of ancient coin', 'the past tense of be'], answer: '通风的', explain: '对的是「通风的」。' },
      { id: 'airy.q3', senseId: 'airy.s1', errorType: 'grammar', type: '词义选择', prompt: 'airy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'airy.q4', senseId: 'airy.s1', errorType: 'meaning', type: '词源', prompt: '记 airy 时，下面哪句更稳妥？', options: ['先锁住「通风的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「通风的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['通风的'] },
  });

  D('aisle', {
    etymology: {
      origin: '现代英语常用词「aisle」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aisle', gloss: '过道' },
      suffix: null,
      history: [
        { label: 'aisle', text: '现代英语常用词「aisle」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：过道。' },
      ],
      formationLogic: '核心义：过道。',
      mnemonic: '看到 aisle，先说出「过道」，再放进一句自己的话。',
      note: '核心义：过道。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aisle.', chinese: '这一章反复回到同一个点：过道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aisle.s1', en: 'Without that aisle, the story would be hard to follow.', zh: '没有这个过道，故事会很难读下去。', structure: 'aisle / 在句中表示 / 过道', grammar: 'noun 用法，围绕「过道」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aisle.', right: 'He gave me a lot of advice about the aisle.', reason: 'advice 不可数。名词 aisle 的单复数也要按词典词形来，不要自造。', rule: '先确定 aisle 是noun，再套「过道」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aisle.q1', senseId: 'aisle.s1', errorType: 'meaning', type: '词义选择', prompt: '「aisle」在本条的核心意思是：', options: ['过道', '完全相反的意思', '与本词无关的语法术语'], answer: '过道', explain: 'aisle：过道。' },
      { id: 'aisle.q2', senseId: 'aisle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aisle?', options: ['过道', 'a kind of ancient coin', 'the past tense of be'], answer: '过道', explain: '对的是「过道」。' },
      { id: 'aisle.q3', senseId: 'aisle.s1', errorType: 'grammar', type: '词义选择', prompt: 'aisle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aisle.q4', senseId: 'aisle.s1', errorType: 'meaning', type: '词源', prompt: '记 aisle 时，下面哪句更稳妥？', options: ['先锁住「过道」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「过道」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过道'] },
  });

  D('ajar', {
    etymology: {
      origin: '现代英语常用词「ajar」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ajar', gloss: '（门）半开的' },
      suffix: null,
      history: [
        { label: 'ajar', text: '现代英语常用词「ajar」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（门）半开的。' },
      ],
      formationLogic: '核心义：（门）半开的。',
      mnemonic: '看到 ajar，先说出「（门）半开的」，再放进一句自己的话。',
      note: '核心义：（门）半开的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked ajar even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得（门）半开的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ajar.s1', en: 'They needed a ajar answer, not a long speech.', zh: '他们要的是（门）半开的的答复，不是长篇发言。', structure: 'ajar / 在句中表示 / （门）半开的', grammar: 'adjective 用法，围绕「（门）半开的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ajar.', right: 'The news is ajar.', reason: 'news 作主语时动词用单数。形容词 ajar 放在系动词后面。', rule: '先确定 ajar 是adjective，再套「（门）半开的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ajar.q1', senseId: 'ajar.s1', errorType: 'meaning', type: '词义选择', prompt: '「ajar」在本条的核心意思是：', options: ['（门）半开的', '完全相反的意思', '与本词无关的语法术语'], answer: '（门）半开的', explain: 'ajar：（门）半开的。' },
      { id: 'ajar.q2', senseId: 'ajar.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ajar?', options: ['（门）半开的', 'a kind of ancient coin', 'the past tense of be'], answer: '（门）半开的', explain: '对的是「（门）半开的」。' },
      { id: 'ajar.q3', senseId: 'ajar.s1', errorType: 'grammar', type: '词义选择', prompt: 'ajar 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ajar.q4', senseId: 'ajar.s1', errorType: 'meaning', type: '词源', prompt: '记 ajar 时，下面哪句更稳妥？', options: ['先锁住「（门）半开的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（门）半开的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（门）半开的'] },
  });

  D('akin', {
    etymology: {
      origin: '现代英语常用词「akin」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'akin', gloss: '相似的' },
      suffix: null,
      history: [
        { label: 'akin', text: '现代英语常用词「akin」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：相似的。' },
      ],
      formationLogic: '核心义：相似的。',
      mnemonic: '看到 akin，先说出「相似的」，再放进一句自己的话。',
      note: '核心义：相似的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked akin even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得相似的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'akin.s1', en: 'They needed a akin answer, not a long speech.', zh: '他们要的是相似的的答复，不是长篇发言。', structure: 'akin / 在句中表示 / 相似的', grammar: 'adjective 用法，围绕「相似的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are akin.', right: 'The news is akin.', reason: 'news 作主语时动词用单数。形容词 akin 放在系动词后面。', rule: '先确定 akin 是adjective，再套「相似的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'akin.q1', senseId: 'akin.s1', errorType: 'meaning', type: '词义选择', prompt: '「akin」在本条的核心意思是：', options: ['相似的', '完全相反的意思', '与本词无关的语法术语'], answer: '相似的', explain: 'akin：相似的。' },
      { id: 'akin.q2', senseId: 'akin.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches akin?', options: ['相似的', 'a kind of ancient coin', 'the past tense of be'], answer: '相似的', explain: '对的是「相似的」。' },
      { id: 'akin.q3', senseId: 'akin.s1', errorType: 'grammar', type: '词义选择', prompt: 'akin 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'akin.q4', senseId: 'akin.s1', errorType: 'meaning', type: '词源', prompt: '记 akin 时，下面哪句更稳妥？', options: ['先锁住「相似的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「相似的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相似的'] },
  });

  D('alarm', {
    etymology: {
      origin: '意大利语 all\'arme「到武器那儿去」。',
      prefix: null,
      root: { text: 'alarm', gloss: '警报' },
      suffix: null,
      history: [
        { label: 'alarm', text: '意大利语 all\'arme「到武器那儿去」。' },
        { label: '现在', text: '核心用法是：警报。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：警报。',
      mnemonic: '看到 alarm，先说出「警报」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：警报。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alarm.', chinese: '这一章反复回到同一个点：警报。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alarm.s1', en: 'Without that alarm, the story would be hard to follow.', zh: '没有这个警报，故事会很难读下去。', structure: 'alarm / 在句中表示 / 警报', grammar: 'noun 用法，围绕「警报」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alarm.', right: 'He gave me a lot of advice about the alarm.', reason: 'advice 不可数。名词 alarm 的单复数也要按词典词形来，不要自造。', rule: '先确定 alarm 是noun，再套「警报」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alarm.q1', senseId: 'alarm.s1', errorType: 'meaning', type: '词义选择', prompt: '「alarm」在本条的核心意思是：', options: ['警报', '完全相反的意思', '与本词无关的语法术语'], answer: '警报', explain: 'alarm：警报。' },
      { id: 'alarm.q2', senseId: 'alarm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alarm?', options: ['警报', 'a kind of ancient coin', 'the past tense of be'], answer: '警报', explain: '对的是「警报」。' },
      { id: 'alarm.q3', senseId: 'alarm.s1', errorType: 'grammar', type: '词义选择', prompt: 'alarm 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alarm.q4', senseId: 'alarm.s1', errorType: 'meaning', type: '词源', prompt: '记 alarm 时，下面哪句更稳妥？', options: ['先锁住「警报」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「警报」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['警报'] },
  });

  D('alarming', {
    etymology: {
      origin: '现代英语常用词「alarming」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alarming', gloss: '令人担忧的' },
      suffix: null,
      history: [
        { label: 'alarming', text: '现代英语常用词「alarming」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：令人担忧的。' },
      ],
      formationLogic: '核心义：令人担忧的。',
      mnemonic: '看到 alarming，先说出「令人担忧的」，再放进一句自己的话。',
      note: '核心义：令人担忧的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alarming even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得令人担忧的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alarming.s1', en: 'They needed a alarming answer, not a long speech.', zh: '他们要的是令人担忧的的答复，不是长篇发言。', structure: 'alarming / 在句中表示 / 令人担忧的', grammar: 'adjective 用法，围绕「令人担忧的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alarming.', right: 'The news is alarming.', reason: 'news 作主语时动词用单数。形容词 alarming 放在系动词后面。', rule: '先确定 alarming 是adjective，再套「令人担忧的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alarming.q1', senseId: 'alarming.s1', errorType: 'meaning', type: '词义选择', prompt: '「alarming」在本条的核心意思是：', options: ['令人担忧的', '完全相反的意思', '与本词无关的语法术语'], answer: '令人担忧的', explain: 'alarming：令人担忧的。' },
      { id: 'alarming.q2', senseId: 'alarming.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alarming?', options: ['令人担忧的', 'a kind of ancient coin', 'the past tense of be'], answer: '令人担忧的', explain: '对的是「令人担忧的」。' },
      { id: 'alarming.q3', senseId: 'alarming.s1', errorType: 'grammar', type: '词义选择', prompt: 'alarming 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alarming.q4', senseId: 'alarming.s1', errorType: 'meaning', type: '词源', prompt: '记 alarming 时，下面哪句更稳妥？', options: ['先锁住「令人担忧的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「令人担忧的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['令人担忧的'] },
  });

  D('alas', {
    etymology: {
      origin: '现代英语常用词「alas」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alas', gloss: '（表示悲伤或遗憾）唉' },
      suffix: null,
      history: [
        { label: 'alas', text: '现代英语常用词「alas」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（表示悲伤或遗憾）唉。' },
      ],
      formationLogic: '核心义：（表示悲伤或遗憾）唉。',
      mnemonic: '看到 alas，先说出「（表示悲伤或遗憾）唉」，再放进一句自己的话。',
      note: '核心义：（表示悲伤或遗憾）唉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alas.', chinese: '这一章反复回到同一个点：（表示悲伤或遗憾）唉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alas.s1', en: 'Without that alas, the story would be hard to follow.', zh: '没有这个（表示悲伤或遗憾）唉，故事会很难读下去。', structure: 'alas / 在句中表示 / （表示悲伤或遗憾）唉', grammar: 'interjection 用法，围绕「（表示悲伤或遗憾）唉」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alas.', right: 'He gave me a lot of advice about the alas.', reason: 'advice 不可数。名词 alas 的单复数也要按词典词形来，不要自造。', rule: '先确定 alas 是interjection，再套「（表示悲伤或遗憾）唉」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alas.q1', senseId: 'alas.s1', errorType: 'meaning', type: '词义选择', prompt: '「alas」在本条的核心意思是：', options: ['（表示悲伤或遗憾）唉', '完全相反的意思', '与本词无关的语法术语'], answer: '（表示悲伤或遗憾）唉', explain: 'alas：（表示悲伤或遗憾）唉。' },
      { id: 'alas.q2', senseId: 'alas.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alas?', options: ['（表示悲伤或遗憾）唉', 'a kind of ancient coin', 'the past tense of be'], answer: '（表示悲伤或遗憾）唉', explain: '对的是「（表示悲伤或遗憾）唉」。' },
      { id: 'alas.q3', senseId: 'alas.s1', errorType: 'grammar', type: '词义选择', prompt: 'alas 的词性（本条）更接近：', options: ['interjection', '只能作感叹词', '只能作数词'], answer: 'interjection', explain: '本条按 interjection 来用。' },
      { id: 'alas.q4', senseId: 'alas.s1', errorType: 'meaning', type: '词源', prompt: '记 alas 时，下面哪句更稳妥？', options: ['先锁住「（表示悲伤或遗憾）唉」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（表示悲伤或遗憾）唉」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（表示悲伤或遗憾）唉'] },
  });

  D('album', {
    etymology: {
      origin: '拉丁语 album「白色的板」，用来记名单。',
      prefix: null,
      root: { text: 'album', gloss: '专辑' },
      suffix: null,
      history: [
        { label: 'album', text: '拉丁语 album「白色的板」，用来记名单。' },
        { label: '现在', text: '核心用法是：专辑。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：专辑。',
      mnemonic: '看到 album，先说出「专辑」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：专辑。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one album.', chinese: '这一章反复回到同一个点：专辑。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'album.s1', en: 'Without that album, the story would be hard to follow.', zh: '没有这个专辑，故事会很难读下去。', structure: 'album / 在句中表示 / 专辑', grammar: 'noun 用法，围绕「专辑」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the album.', right: 'He gave me a lot of advice about the album.', reason: 'advice 不可数。名词 album 的单复数也要按词典词形来，不要自造。', rule: '先确定 album 是noun，再套「专辑」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'album.q1', senseId: 'album.s1', errorType: 'meaning', type: '词义选择', prompt: '「album」在本条的核心意思是：', options: ['专辑', '完全相反的意思', '与本词无关的语法术语'], answer: '专辑', explain: 'album：专辑。' },
      { id: 'album.q2', senseId: 'album.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches album?', options: ['专辑', 'a kind of ancient coin', 'the past tense of be'], answer: '专辑', explain: '对的是「专辑」。' },
      { id: 'album.q3', senseId: 'album.s1', errorType: 'grammar', type: '词义选择', prompt: 'album 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'album.q4', senseId: 'album.s1', errorType: 'meaning', type: '词源', prompt: '记 album 时，下面哪句更稳妥？', options: ['先锁住「专辑」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「专辑」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['专辑'] },
  });

  D('albumen', {
    etymology: {
      origin: '现代英语常用词「albumen」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'albumen', gloss: '蛋白' },
      suffix: null,
      history: [
        { label: 'albumen', text: '现代英语常用词「albumen」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：蛋白。' },
      ],
      formationLogic: '核心义：蛋白。',
      mnemonic: '看到 albumen，先说出「蛋白」，再放进一句自己的话。',
      note: '核心义：蛋白。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one albumen.', chinese: '这一章反复回到同一个点：蛋白。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'albumen.s1', en: 'Without that albumen, the story would be hard to follow.', zh: '没有这个蛋白，故事会很难读下去。', structure: 'albumen / 在句中表示 / 蛋白', grammar: 'noun 用法，围绕「蛋白」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the albumen.', right: 'He gave me a lot of advice about the albumen.', reason: 'advice 不可数。名词 albumen 的单复数也要按词典词形来，不要自造。', rule: '先确定 albumen 是noun，再套「蛋白」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'albumen.q1', senseId: 'albumen.s1', errorType: 'meaning', type: '词义选择', prompt: '「albumen」在本条的核心意思是：', options: ['蛋白', '完全相反的意思', '与本词无关的语法术语'], answer: '蛋白', explain: 'albumen：蛋白。' },
      { id: 'albumen.q2', senseId: 'albumen.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches albumen?', options: ['蛋白', 'a kind of ancient coin', 'the past tense of be'], answer: '蛋白', explain: '对的是「蛋白」。' },
      { id: 'albumen.q3', senseId: 'albumen.s1', errorType: 'grammar', type: '词义选择', prompt: 'albumen 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'albumen.q4', senseId: 'albumen.s1', errorType: 'meaning', type: '词源', prompt: '记 albumen 时，下面哪句更稳妥？', options: ['先锁住「蛋白」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「蛋白」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['蛋白'] },
  });

  D('alcohol', {
    etymology: {
      origin: '阿拉伯语 al-kuhl，原指眼部细粉，后指蒸馏精华。',
      prefix: null,
      root: { text: 'alcohol', gloss: '酒精' },
      suffix: null,
      history: [
        { label: 'alcohol', text: '阿拉伯语 al-kuhl，原指眼部细粉，后指蒸馏精华。' },
        { label: '现在', text: '核心用法是：酒精。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：酒精。',
      mnemonic: '看到 alcohol，先说出「酒精」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：酒精。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alcohol.', chinese: '这一章反复回到同一个点：酒精。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alcohol.s1', en: 'Without that alcohol, the story would be hard to follow.', zh: '没有这个酒精，故事会很难读下去。', structure: 'alcohol / 在句中表示 / 酒精', grammar: 'noun 用法，围绕「酒精」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alcohol.', right: 'He gave me a lot of advice about the alcohol.', reason: 'advice 不可数。名词 alcohol 的单复数也要按词典词形来，不要自造。', rule: '先确定 alcohol 是noun，再套「酒精」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alcohol.q1', senseId: 'alcohol.s1', errorType: 'meaning', type: '词义选择', prompt: '「alcohol」在本条的核心意思是：', options: ['酒精', '完全相反的意思', '与本词无关的语法术语'], answer: '酒精', explain: 'alcohol：酒精。' },
      { id: 'alcohol.q2', senseId: 'alcohol.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alcohol?', options: ['酒精', 'a kind of ancient coin', 'the past tense of be'], answer: '酒精', explain: '对的是「酒精」。' },
      { id: 'alcohol.q3', senseId: 'alcohol.s1', errorType: 'grammar', type: '词义选择', prompt: 'alcohol 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alcohol.q4', senseId: 'alcohol.s1', errorType: 'meaning', type: '词源', prompt: '记 alcohol 时，下面哪句更稳妥？', options: ['先锁住「酒精」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「酒精」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['酒精'] },
  });

  D('alcoholic', {
    etymology: {
      origin: '英语派生：alcohol 加上词尾，构成与「酗酒者」相应的词类。',
      prefix: null,
      root: { text: 'alcohol', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alcoholic', text: '英语派生：alcohol 加上词尾，构成与「酗酒者」相应的词类。' },
        { label: '现在', text: '核心用法是：酗酒者。' },
      ],
      formationLogic: '先认词干 alcohol，再看词尾决定词性。',
      mnemonic: '看到 alcoholic，先说出「酗酒者」，再放进一句自己的话。',
      note: '先认词干 alcohol，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alcoholic.', chinese: '这一章反复回到同一个点：酗酒者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alcoholic.s1', en: 'Without that alcoholic, the story would be hard to follow.', zh: '没有这个酗酒者，故事会很难读下去。', structure: 'alcoholic / 在句中表示 / 酗酒者', grammar: 'noun 用法，围绕「酗酒者」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alcoholic.', right: 'He gave me a lot of advice about the alcoholic.', reason: 'advice 不可数。名词 alcoholic 的单复数也要按词典词形来，不要自造。', rule: '先确定 alcoholic 是noun，再套「酗酒者」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alcoholic.q1', senseId: 'alcoholic.s1', errorType: 'meaning', type: '词义选择', prompt: '「alcoholic」在本条的核心意思是：', options: ['酗酒者', '完全相反的意思', '与本词无关的语法术语'], answer: '酗酒者', explain: 'alcoholic：酗酒者。' },
      { id: 'alcoholic.q2', senseId: 'alcoholic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alcoholic?', options: ['酗酒者', 'a kind of ancient coin', 'the past tense of be'], answer: '酗酒者', explain: '对的是「酗酒者」。' },
      { id: 'alcoholic.q3', senseId: 'alcoholic.s1', errorType: 'grammar', type: '词义选择', prompt: 'alcoholic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alcoholic.q4', senseId: 'alcoholic.s1', errorType: 'meaning', type: '词源', prompt: '记 alcoholic 时，下面哪句更稳妥？', options: ['先锁住「酗酒者」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「酗酒者」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['酗酒者'] },
  });

  D('alcoholism', {
    etymology: {
      origin: '英语派生：alcohol 加上词尾，构成与「酗酒」相应的词类。',
      prefix: null,
      root: { text: 'alcohol', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alcoholism', text: '英语派生：alcohol 加上词尾，构成与「酗酒」相应的词类。' },
        { label: '现在', text: '核心用法是：酗酒。' },
      ],
      formationLogic: '先认词干 alcohol，再看词尾决定词性。',
      mnemonic: '看到 alcoholism，先说出「酗酒」，再放进一句自己的话。',
      note: '先认词干 alcohol，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alcoholism.', chinese: '这一章反复回到同一个点：酗酒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alcoholism.s1', en: 'Without that alcoholism, the story would be hard to follow.', zh: '没有这个酗酒，故事会很难读下去。', structure: 'alcoholism / 在句中表示 / 酗酒', grammar: 'noun 用法，围绕「酗酒」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alcoholism.', right: 'He gave me a lot of advice about the alcoholism.', reason: 'advice 不可数。名词 alcoholism 的单复数也要按词典词形来，不要自造。', rule: '先确定 alcoholism 是noun，再套「酗酒」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alcoholism.q1', senseId: 'alcoholism.s1', errorType: 'meaning', type: '词义选择', prompt: '「alcoholism」在本条的核心意思是：', options: ['酗酒', '完全相反的意思', '与本词无关的语法术语'], answer: '酗酒', explain: 'alcoholism：酗酒。' },
      { id: 'alcoholism.q2', senseId: 'alcoholism.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alcoholism?', options: ['酗酒', 'a kind of ancient coin', 'the past tense of be'], answer: '酗酒', explain: '对的是「酗酒」。' },
      { id: 'alcoholism.q3', senseId: 'alcoholism.s1', errorType: 'grammar', type: '词义选择', prompt: 'alcoholism 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alcoholism.q4', senseId: 'alcoholism.s1', errorType: 'meaning', type: '词源', prompt: '记 alcoholism 时，下面哪句更稳妥？', options: ['先锁住「酗酒」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「酗酒」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['酗酒'] },
  });

  D('ale', {
    etymology: {
      origin: '现代英语常用词「ale」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ale', gloss: '麦芽啤酒' },
      suffix: null,
      history: [
        { label: 'ale', text: '现代英语常用词「ale」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：麦芽啤酒。' },
      ],
      formationLogic: '核心义：麦芽啤酒。',
      mnemonic: '看到 ale，先说出「麦芽啤酒」，再放进一句自己的话。',
      note: '核心义：麦芽啤酒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ale.', chinese: '这一章反复回到同一个点：麦芽啤酒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ale.s1', en: 'Without that ale, the story would be hard to follow.', zh: '没有这个麦芽啤酒，故事会很难读下去。', structure: 'ale / 在句中表示 / 麦芽啤酒', grammar: 'noun 用法，围绕「麦芽啤酒」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ale.', right: 'He gave me a lot of advice about the ale.', reason: 'advice 不可数。名词 ale 的单复数也要按词典词形来，不要自造。', rule: '先确定 ale 是noun，再套「麦芽啤酒」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ale.q1', senseId: 'ale.s1', errorType: 'meaning', type: '词义选择', prompt: '「ale」在本条的核心意思是：', options: ['麦芽啤酒', '完全相反的意思', '与本词无关的语法术语'], answer: '麦芽啤酒', explain: 'ale：麦芽啤酒。' },
      { id: 'ale.q2', senseId: 'ale.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ale?', options: ['麦芽啤酒', 'a kind of ancient coin', 'the past tense of be'], answer: '麦芽啤酒', explain: '对的是「麦芽啤酒」。' },
      { id: 'ale.q3', senseId: 'ale.s1', errorType: 'grammar', type: '词义选择', prompt: 'ale 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ale.q4', senseId: 'ale.s1', errorType: 'meaning', type: '词源', prompt: '记 ale 时，下面哪句更稳妥？', options: ['先锁住「麦芽啤酒」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「麦芽啤酒」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['麦芽啤酒'] },
  });

  D('alert', {
    etymology: {
      origin: '意大利语 all\'erta「到高处去」，即保持警觉。',
      prefix: null,
      root: { text: 'alert', gloss: '警觉的' },
      suffix: null,
      history: [
        { label: 'alert', text: '意大利语 all\'erta「到高处去」，即保持警觉。' },
        { label: '现在', text: '核心用法是：警觉的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：警觉的。',
      mnemonic: '看到 alert，先说出「警觉的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：警觉的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alert even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得警觉的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alert.s1', en: 'They needed a alert answer, not a long speech.', zh: '他们要的是警觉的的答复，不是长篇发言。', structure: 'alert / 在句中表示 / 警觉的', grammar: 'adjective 用法，围绕「警觉的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alert.', right: 'The news is alert.', reason: 'news 作主语时动词用单数。形容词 alert 放在系动词后面。', rule: '先确定 alert 是adjective，再套「警觉的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alert.q1', senseId: 'alert.s1', errorType: 'meaning', type: '词义选择', prompt: '「alert」在本条的核心意思是：', options: ['警觉的', '完全相反的意思', '与本词无关的语法术语'], answer: '警觉的', explain: 'alert：警觉的。' },
      { id: 'alert.q2', senseId: 'alert.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alert?', options: ['警觉的', 'a kind of ancient coin', 'the past tense of be'], answer: '警觉的', explain: '对的是「警觉的」。' },
      { id: 'alert.q3', senseId: 'alert.s1', errorType: 'grammar', type: '词义选择', prompt: 'alert 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alert.q4', senseId: 'alert.s1', errorType: 'meaning', type: '词源', prompt: '记 alert 时，下面哪句更稳妥？', options: ['先锁住「警觉的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「警觉的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['警觉的'] },
  });

  D('alertness', {
    etymology: {
      origin: '英语派生：alert 加上词尾，构成与「警觉」相应的词类。',
      prefix: null,
      root: { text: 'alert', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alertness', text: '英语派生：alert 加上词尾，构成与「警觉」相应的词类。' },
        { label: '现在', text: '核心用法是：警觉。' },
      ],
      formationLogic: '先认词干 alert，再看词尾决定词性。',
      mnemonic: '看到 alertness，先说出「警觉」，再放进一句自己的话。',
      note: '先认词干 alert，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alertness.', chinese: '这一章反复回到同一个点：警觉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alertness.s1', en: 'Without that alertness, the story would be hard to follow.', zh: '没有这个警觉，故事会很难读下去。', structure: 'alertness / 在句中表示 / 警觉', grammar: 'noun 用法，围绕「警觉」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alertness.', right: 'He gave me a lot of advice about the alertness.', reason: 'advice 不可数。名词 alertness 的单复数也要按词典词形来，不要自造。', rule: '先确定 alertness 是noun，再套「警觉」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alertness.q1', senseId: 'alertness.s1', errorType: 'meaning', type: '词义选择', prompt: '「alertness」在本条的核心意思是：', options: ['警觉', '完全相反的意思', '与本词无关的语法术语'], answer: '警觉', explain: 'alertness：警觉。' },
      { id: 'alertness.q2', senseId: 'alertness.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alertness?', options: ['警觉', 'a kind of ancient coin', 'the past tense of be'], answer: '警觉', explain: '对的是「警觉」。' },
      { id: 'alertness.q3', senseId: 'alertness.s1', errorType: 'grammar', type: '词义选择', prompt: 'alertness 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alertness.q4', senseId: 'alertness.s1', errorType: 'meaning', type: '词源', prompt: '记 alertness 时，下面哪句更稳妥？', options: ['先锁住「警觉」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「警觉」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['警觉'] },
  });

  D('algebra', {
    etymology: {
      origin: '阿拉伯语 al-jabr「接合复位」，原是数学书名里的词。',
      prefix: null,
      root: { text: 'algebra', gloss: '代数' },
      suffix: null,
      history: [
        { label: 'algebra', text: '阿拉伯语 al-jabr「接合复位」，原是数学书名里的词。' },
        { label: '现在', text: '核心用法是：代数。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：代数。',
      mnemonic: '看到 algebra，先说出「代数」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：代数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one algebra.', chinese: '这一章反复回到同一个点：代数。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'algebra.s1', en: 'Without that algebra, the story would be hard to follow.', zh: '没有这个代数，故事会很难读下去。', structure: 'algebra / 在句中表示 / 代数', grammar: 'noun 用法，围绕「代数」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the algebra.', right: 'He gave me a lot of advice about the algebra.', reason: 'advice 不可数。名词 algebra 的单复数也要按词典词形来，不要自造。', rule: '先确定 algebra 是noun，再套「代数」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'algebra.q1', senseId: 'algebra.s1', errorType: 'meaning', type: '词义选择', prompt: '「algebra」在本条的核心意思是：', options: ['代数', '完全相反的意思', '与本词无关的语法术语'], answer: '代数', explain: 'algebra：代数。' },
      { id: 'algebra.q2', senseId: 'algebra.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches algebra?', options: ['代数', 'a kind of ancient coin', 'the past tense of be'], answer: '代数', explain: '对的是「代数」。' },
      { id: 'algebra.q3', senseId: 'algebra.s1', errorType: 'grammar', type: '词义选择', prompt: 'algebra 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'algebra.q4', senseId: 'algebra.s1', errorType: 'meaning', type: '词源', prompt: '记 algebra 时，下面哪句更稳妥？', options: ['先锁住「代数」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「代数」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['代数'] },
  });

  D('alias', {
    etymology: {
      origin: '现代英语常用词「alias」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alias', gloss: '化名' },
      suffix: null,
      history: [
        { label: 'alias', text: '现代英语常用词「alias」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：化名。' },
      ],
      formationLogic: '核心义：化名。',
      mnemonic: '看到 alias，先说出「化名」，再放进一句自己的话。',
      note: '核心义：化名。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alias.', chinese: '这一章反复回到同一个点：化名。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alias.s1', en: 'Without that alias, the story would be hard to follow.', zh: '没有这个化名，故事会很难读下去。', structure: 'alias / 在句中表示 / 化名', grammar: 'noun 用法，围绕「化名」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alias.', right: 'He gave me a lot of advice about the alias.', reason: 'advice 不可数。名词 alias 的单复数也要按词典词形来，不要自造。', rule: '先确定 alias 是noun，再套「化名」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alias.q1', senseId: 'alias.s1', errorType: 'meaning', type: '词义选择', prompt: '「alias」在本条的核心意思是：', options: ['化名', '完全相反的意思', '与本词无关的语法术语'], answer: '化名', explain: 'alias：化名。' },
      { id: 'alias.q2', senseId: 'alias.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alias?', options: ['化名', 'a kind of ancient coin', 'the past tense of be'], answer: '化名', explain: '对的是「化名」。' },
      { id: 'alias.q3', senseId: 'alias.s1', errorType: 'grammar', type: '词义选择', prompt: 'alias 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alias.q4', senseId: 'alias.s1', errorType: 'meaning', type: '词源', prompt: '记 alias 时，下面哪句更稳妥？', options: ['先锁住「化名」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「化名」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化名'] },
  });

  D('alien', {
    etymology: {
      origin: '拉丁语 alienus「属于别人的」。',
      prefix: null,
      root: { text: 'alien', gloss: '外星人' },
      suffix: null,
      history: [
        { label: 'alien', text: '拉丁语 alienus「属于别人的」。' },
        { label: '现在', text: '核心用法是：外星人。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：外星人。',
      mnemonic: '看到 alien，先说出「外星人」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：外星人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alien.', chinese: '这一章反复回到同一个点：外星人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alien.s1', en: 'Without that alien, the story would be hard to follow.', zh: '没有这个外星人，故事会很难读下去。', structure: 'alien / 在句中表示 / 外星人', grammar: 'noun 用法，围绕「外星人」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alien.', right: 'He gave me a lot of advice about the alien.', reason: 'advice 不可数。名词 alien 的单复数也要按词典词形来，不要自造。', rule: '先确定 alien 是noun，再套「外星人」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alien.q1', senseId: 'alien.s1', errorType: 'meaning', type: '词义选择', prompt: '「alien」在本条的核心意思是：', options: ['外星人', '完全相反的意思', '与本词无关的语法术语'], answer: '外星人', explain: 'alien：外星人。' },
      { id: 'alien.q2', senseId: 'alien.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alien?', options: ['外星人', 'a kind of ancient coin', 'the past tense of be'], answer: '外星人', explain: '对的是「外星人」。' },
      { id: 'alien.q3', senseId: 'alien.s1', errorType: 'grammar', type: '词义选择', prompt: 'alien 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alien.q4', senseId: 'alien.s1', errorType: 'meaning', type: '词源', prompt: '记 alien 时，下面哪句更稳妥？', options: ['先锁住「外星人」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「外星人」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外星人'] },
  });

  D('alienate', {
    etymology: {
      origin: '现代英语常用词「alienate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alienate', gloss: '使疏远' },
      suffix: null,
      history: [
        { label: 'alienate', text: '现代英语常用词「alienate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：使疏远。' },
      ],
      formationLogic: '核心义：使疏远。',
      mnemonic: '看到 alienate，先说出「使疏远」，再放进一句自己的话。',
      note: '核心义：使疏远。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to alienate before the office closed.', chinese: '小组得在办公室关门前完成这件事：使疏远。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alienate.s1', en: 'Nobody wanted to alienate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 alienate 是「使疏远」。', structure: 'alienate / 在句中表示 / 使疏远', grammar: 'verb 用法，围绕「使疏远」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She alienateed the form yesterday without checking the real past form.', right: 'Look up the past form of "alienate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 alienate 是verb，再套「使疏远」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alienate.q1', senseId: 'alienate.s1', errorType: 'meaning', type: '词义选择', prompt: '「alienate」在本条的核心意思是：', options: ['使疏远', '完全相反的意思', '与本词无关的语法术语'], answer: '使疏远', explain: 'alienate：使疏远。' },
      { id: 'alienate.q2', senseId: 'alienate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alienate?', options: ['使疏远', 'a kind of ancient coin', 'the past tense of be'], answer: '使疏远', explain: '对的是「使疏远」。' },
      { id: 'alienate.q3', senseId: 'alienate.s1', errorType: 'grammar', type: '词义选择', prompt: 'alienate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'alienate.q4', senseId: 'alienate.s1', errorType: 'meaning', type: '词源', prompt: '记 alienate 时，下面哪句更稳妥？', options: ['先锁住「使疏远」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「使疏远」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使疏远'] },
  });

  D('alight', {
    etymology: {
      origin: '现代英语常用词「alight」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alight', gloss: '下车' },
      suffix: null,
      history: [
        { label: 'alight', text: '现代英语常用词「alight」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：下车。' },
      ],
      formationLogic: '核心义：下车。',
      mnemonic: '看到 alight，先说出「下车」，再放进一句自己的话。',
      note: '核心义：下车。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to alight before the office closed.', chinese: '小组得在办公室关门前完成这件事：下车。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alight.s1', en: 'Nobody wanted to alight, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 alight 是「下车」。', structure: 'alight / 在句中表示 / 下车', grammar: 'verb 用法，围绕「下车」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She alighted the form yesterday without checking the real past form.', right: 'Look up the past form of "alight" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 alight 是verb，再套「下车」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alight.q1', senseId: 'alight.s1', errorType: 'meaning', type: '词义选择', prompt: '「alight」在本条的核心意思是：', options: ['下车', '完全相反的意思', '与本词无关的语法术语'], answer: '下车', explain: 'alight：下车。' },
      { id: 'alight.q2', senseId: 'alight.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alight?', options: ['下车', 'a kind of ancient coin', 'the past tense of be'], answer: '下车', explain: '对的是「下车」。' },
      { id: 'alight.q3', senseId: 'alight.s1', errorType: 'grammar', type: '词义选择', prompt: 'alight 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'alight.q4', senseId: 'alight.s1', errorType: 'meaning', type: '词源', prompt: '记 alight 时，下面哪句更稳妥？', options: ['先锁住「下车」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「下车」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下车'] },
  });

  D('align', {
    etymology: {
      origin: '现代英语常用词「align」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'align', gloss: '对齐' },
      suffix: null,
      history: [
        { label: 'align', text: '现代英语常用词「align」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：对齐。' },
      ],
      formationLogic: '核心义：对齐。',
      mnemonic: '看到 align，先说出「对齐」，再放进一句自己的话。',
      note: '核心义：对齐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to align before the office closed.', chinese: '小组得在办公室关门前完成这件事：对齐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'align.s1', en: 'Nobody wanted to align, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 align 是「对齐」。', structure: 'align / 在句中表示 / 对齐', grammar: 'verb 用法，围绕「对齐」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She aligned the form yesterday without checking the real past form.', right: 'Look up the past form of "align" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 align 是verb，再套「对齐」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'align.q1', senseId: 'align.s1', errorType: 'meaning', type: '词义选择', prompt: '「align」在本条的核心意思是：', options: ['对齐', '完全相反的意思', '与本词无关的语法术语'], answer: '对齐', explain: 'align：对齐。' },
      { id: 'align.q2', senseId: 'align.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches align?', options: ['对齐', 'a kind of ancient coin', 'the past tense of be'], answer: '对齐', explain: '对的是「对齐」。' },
      { id: 'align.q3', senseId: 'align.s1', errorType: 'grammar', type: '词义选择', prompt: 'align 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'align.q4', senseId: 'align.s1', errorType: 'meaning', type: '词源', prompt: '记 align 时，下面哪句更稳妥？', options: ['先锁住「对齐」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「对齐」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对齐'] },
  });

  D('aligned', {
    etymology: {
      origin: '现代英语常用词「aligned」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aligned', gloss: '对齐的' },
      suffix: null,
      history: [
        { label: 'aligned', text: '现代英语常用词「aligned」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：对齐的。' },
      ],
      formationLogic: '核心义：对齐的。',
      mnemonic: '看到 aligned，先说出「对齐的」，再放进一句自己的话。',
      note: '核心义：对齐的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aligned even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得对齐的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aligned.s1', en: 'They needed a aligned answer, not a long speech.', zh: '他们要的是对齐的的答复，不是长篇发言。', structure: 'aligned / 在句中表示 / 对齐的', grammar: 'adjective 用法，围绕「对齐的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aligned.', right: 'The news is aligned.', reason: 'news 作主语时动词用单数。形容词 aligned 放在系动词后面。', rule: '先确定 aligned 是adjective，再套「对齐的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aligned.q1', senseId: 'aligned.s1', errorType: 'meaning', type: '词义选择', prompt: '「aligned」在本条的核心意思是：', options: ['对齐的', '完全相反的意思', '与本词无关的语法术语'], answer: '对齐的', explain: 'aligned：对齐的。' },
      { id: 'aligned.q2', senseId: 'aligned.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aligned?', options: ['对齐的', 'a kind of ancient coin', 'the past tense of be'], answer: '对齐的', explain: '对的是「对齐的」。' },
      { id: 'aligned.q3', senseId: 'aligned.s1', errorType: 'grammar', type: '词义选择', prompt: 'aligned 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aligned.q4', senseId: 'aligned.s1', errorType: 'meaning', type: '词源', prompt: '记 aligned 时，下面哪句更稳妥？', options: ['先锁住「对齐的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「对齐的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对齐的'] },
  });

  D('alignment', {
    etymology: {
      origin: '英语派生：align 加上词尾，构成与「对准」相应的词类。',
      prefix: null,
      root: { text: 'align', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alignment', text: '英语派生：align 加上词尾，构成与「对准」相应的词类。' },
        { label: '现在', text: '核心用法是：对准。' },
      ],
      formationLogic: '先认词干 align，再看词尾决定词性。',
      mnemonic: '看到 alignment，先说出「对准」，再放进一句自己的话。',
      note: '先认词干 align，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alignment.', chinese: '这一章反复回到同一个点：对准。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alignment.s1', en: 'Without that alignment, the story would be hard to follow.', zh: '没有这个对准，故事会很难读下去。', structure: 'alignment / 在句中表示 / 对准', grammar: 'noun 用法，围绕「对准」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alignment.', right: 'He gave me a lot of advice about the alignment.', reason: 'advice 不可数。名词 alignment 的单复数也要按词典词形来，不要自造。', rule: '先确定 alignment 是noun，再套「对准」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alignment.q1', senseId: 'alignment.s1', errorType: 'meaning', type: '词义选择', prompt: '「alignment」在本条的核心意思是：', options: ['对准', '完全相反的意思', '与本词无关的语法术语'], answer: '对准', explain: 'alignment：对准。' },
      { id: 'alignment.q2', senseId: 'alignment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alignment?', options: ['对准', 'a kind of ancient coin', 'the past tense of be'], answer: '对准', explain: '对的是「对准」。' },
      { id: 'alignment.q3', senseId: 'alignment.s1', errorType: 'grammar', type: '词义选择', prompt: 'alignment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alignment.q4', senseId: 'alignment.s1', errorType: 'meaning', type: '词源', prompt: '记 alignment 时，下面哪句更稳妥？', options: ['先锁住「对准」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「对准」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['对准'] },
  });

  D('alike', {
    etymology: {
      origin: '古英语 onlic「相似的」。',
      prefix: null,
      root: { text: 'alike', gloss: '相似的' },
      suffix: null,
      history: [
        { label: 'alike', text: '古英语 onlic「相似的」。' },
        { label: '现在', text: '核心用法是：相似的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：相似的。',
      mnemonic: '看到 alike，先说出「相似的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：相似的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alike even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得相似的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alike.s1', en: 'They needed a alike answer, not a long speech.', zh: '他们要的是相似的的答复，不是长篇发言。', structure: 'alike / 在句中表示 / 相似的', grammar: 'adjective 用法，围绕「相似的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alike.', right: 'The news is alike.', reason: 'news 作主语时动词用单数。形容词 alike 放在系动词后面。', rule: '先确定 alike 是adjective，再套「相似的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alike.q1', senseId: 'alike.s1', errorType: 'meaning', type: '词义选择', prompt: '「alike」在本条的核心意思是：', options: ['相似的', '完全相反的意思', '与本词无关的语法术语'], answer: '相似的', explain: 'alike：相似的。' },
      { id: 'alike.q2', senseId: 'alike.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alike?', options: ['相似的', 'a kind of ancient coin', 'the past tense of be'], answer: '相似的', explain: '对的是「相似的」。' },
      { id: 'alike.q3', senseId: 'alike.s1', errorType: 'grammar', type: '词义选择', prompt: 'alike 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alike.q4', senseId: 'alike.s1', errorType: 'meaning', type: '词源', prompt: '记 alike 时，下面哪句更稳妥？', options: ['先锁住「相似的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「相似的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['相似的'] },
  });

  D('alive', {
    etymology: {
      origin: '古英语 on life「在生命之中」。',
      prefix: null,
      root: { text: 'alive', gloss: '活着的' },
      suffix: null,
      history: [
        { label: 'alive', text: '古英语 on life「在生命之中」。' },
        { label: '现在', text: '核心用法是：活着的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：活着的。',
      mnemonic: '看到 alive，先说出「活着的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：活着的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alive even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得活着的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alive.s1', en: 'They needed a alive answer, not a long speech.', zh: '他们要的是活着的的答复，不是长篇发言。', structure: 'alive / 在句中表示 / 活着的', grammar: 'adjective 用法，围绕「活着的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alive.', right: 'The news is alive.', reason: 'news 作主语时动词用单数。形容词 alive 放在系动词后面。', rule: '先确定 alive 是adjective，再套「活着的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alive.q1', senseId: 'alive.s1', errorType: 'meaning', type: '词义选择', prompt: '「alive」在本条的核心意思是：', options: ['活着的', '完全相反的意思', '与本词无关的语法术语'], answer: '活着的', explain: 'alive：活着的。' },
      { id: 'alive.q2', senseId: 'alive.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alive?', options: ['活着的', 'a kind of ancient coin', 'the past tense of be'], answer: '活着的', explain: '对的是「活着的」。' },
      { id: 'alive.q3', senseId: 'alive.s1', errorType: 'grammar', type: '词义选择', prompt: 'alive 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alive.q4', senseId: 'alive.s1', errorType: 'meaning', type: '词源', prompt: '记 alive 时，下面哪句更稳妥？', options: ['先锁住「活着的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「活着的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['活着的'] },
  });

  D('all', {
    etymology: {
      origin: '古英语 eall「全部」。',
      prefix: null,
      root: { text: 'all', gloss: '全部' },
      suffix: null,
      history: [
        { label: 'all', text: '古英语 eall「全部」。' },
        { label: '现在', text: '核心用法是：全部。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：全部。',
      mnemonic: '看到 all，先说出「全部」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：全部。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "all" and asked what it does in the sentence.', chinese: '老师在「all」下面划了线，问它在句中起什么作用。它表示全部。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'all.s1', en: 'In the margin she wrote "all" so the reader would not miss that phrase.', zh: '她在页边写下「all」，免得读者漏掉这个说法。意思是全部。', structure: 'all / 在句中表示 / 全部', grammar: 'determiner 用法，围绕「全部」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated all word by word and lost the meaning.', right: 'He kept "all" as one phrase meaning 全部.', reason: '「all」是固定说法，拆开容易翻错。', rule: '先确定 all 是determiner，再套「全部」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'all.q1', senseId: 'all.s1', errorType: 'meaning', type: '词义选择', prompt: '「all」在本条的核心意思是：', options: ['全部', '完全相反的意思', '与本词无关的语法术语'], answer: '全部', explain: 'all：全部。' },
      { id: 'all.q2', senseId: 'all.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches all?', options: ['全部', 'a kind of ancient coin', 'the past tense of be'], answer: '全部', explain: '对的是「全部」。' },
      { id: 'all.q3', senseId: 'all.s1', errorType: 'grammar', type: '词义选择', prompt: 'all 的词性（本条）更接近：', options: ['determiner', '只能作感叹词', '只能作数词'], answer: 'determiner', explain: '本条按 determiner 来用。' },
      { id: 'all.q4', senseId: 'all.s1', errorType: 'meaning', type: '词源', prompt: '记 all 时，下面哪句更稳妥？', options: ['先锁住「全部」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「全部」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全部'] },
  });

  D('all over', {
    etymology: {
      origin: '现代英语固定说法「all over」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'all over', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'all over', text: '现代英语固定说法「all over」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：到处。' },
      ],
      formationLogic: '常见义：到处。',
      mnemonic: '看到 all over，先说出「到处」，再放进一句自己的话。',
      note: '常见义：到处。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "all over" and asked what it does in the sentence.', chinese: '老师在「all over」下面划了线，问它在句中起什么作用。它表示到处。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'all over.s1', en: 'In the margin she wrote "all over" so the reader would not miss that phrase.', zh: '她在页边写下「all over」，免得读者漏掉这个说法。意思是到处。', structure: 'all over / 在句中表示 / 到处', grammar: 'adverb 用法，围绕「到处」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated all over word by word and lost the meaning.', right: 'He kept "all over" as one phrase meaning 到处.', reason: '「all over」是固定说法，拆开容易翻错。', rule: '先确定 all over 是adverb，再套「到处」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'all over.q1', senseId: 'all over.s1', errorType: 'meaning', type: '词义选择', prompt: '「all over」在本条的核心意思是：', options: ['到处', '完全相反的意思', '与本词无关的语法术语'], answer: '到处', explain: 'all over：到处。' },
      { id: 'all over.q2', senseId: 'all over.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches all over?', options: ['到处', 'a kind of ancient coin', 'the past tense of be'], answer: '到处', explain: '对的是「到处」。' },
      { id: 'all over.q3', senseId: 'all over.s1', errorType: 'grammar', type: '词义选择', prompt: 'all over 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'all over.q4', senseId: 'all over.s1', errorType: 'meaning', type: '词源', prompt: '记 all over 时，下面哪句更稳妥？', options: ['先锁住「到处」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「到处」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['到处'] },
  });

  D('all right', {
    etymology: {
      origin: '现代英语固定说法「all right」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'all right', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'all right', text: '现代英语固定说法「all right」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：还好。' },
      ],
      formationLogic: '常见义：还好。',
      mnemonic: '看到 all right，先说出「还好」，再放进一句自己的话。',
      note: '常见义：还好。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "all right" and asked what it does in the sentence.', chinese: '老师在「all right」下面划了线，问它在句中起什么作用。它表示还好。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'all right.s1', en: 'In the margin she wrote "all right" so the reader would not miss that phrase.', zh: '她在页边写下「all right」，免得读者漏掉这个说法。意思是还好。', structure: 'all right / 在句中表示 / 还好', grammar: 'adjective 用法，围绕「还好」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated all right word by word and lost the meaning.', right: 'He kept "all right" as one phrase meaning 还好.', reason: '「all right」是固定说法，拆开容易翻错。', rule: '先确定 all right 是adjective，再套「还好」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'all right.q1', senseId: 'all right.s1', errorType: 'meaning', type: '词义选择', prompt: '「all right」在本条的核心意思是：', options: ['还好', '完全相反的意思', '与本词无关的语法术语'], answer: '还好', explain: 'all right：还好。' },
      { id: 'all right.q2', senseId: 'all right.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches all right?', options: ['还好', 'a kind of ancient coin', 'the past tense of be'], answer: '还好', explain: '对的是「还好」。' },
      { id: 'all right.q3', senseId: 'all right.s1', errorType: 'grammar', type: '词义选择', prompt: 'all right 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'all right.q4', senseId: 'all right.s1', errorType: 'meaning', type: '词源', prompt: '记 all right 时，下面哪句更稳妥？', options: ['先锁住「还好」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「还好」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['还好'] },
  });

  D('all through', {
    etymology: {
      origin: '现代英语固定说法「all through」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'all through', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'all through', text: '现代英语固定说法「all through」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：在整个……期间。' },
      ],
      formationLogic: '常见义：在整个……期间。',
      mnemonic: '看到 all through，先说出「在整个……期间」，再放进一句自己的话。',
      note: '常见义：在整个……期间。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "all through" and asked what it does in the sentence.', chinese: '老师在「all through」下面划了线，问它在句中起什么作用。它表示在整个……期间。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'all through.s1', en: 'In the margin she wrote "all through" so the reader would not miss that phrase.', zh: '她在页边写下「all through」，免得读者漏掉这个说法。意思是在整个……期间。', structure: 'all through / 在句中表示 / 在整个……期间', grammar: 'preposition 用法，围绕「在整个……期间」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated all through word by word and lost the meaning.', right: 'He kept "all through" as one phrase meaning 在整个……期间.', reason: '「all through」是固定说法，拆开容易翻错。', rule: '先确定 all through 是preposition，再套「在整个……期间」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'all through.q1', senseId: 'all through.s1', errorType: 'meaning', type: '词义选择', prompt: '「all through」在本条的核心意思是：', options: ['在整个……期间', '完全相反的意思', '与本词无关的语法术语'], answer: '在整个……期间', explain: 'all through：在整个……期间。' },
      { id: 'all through.q2', senseId: 'all through.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches all through?', options: ['在整个……期间', 'a kind of ancient coin', 'the past tense of be'], answer: '在整个……期间', explain: '对的是「在整个……期间」。' },
      { id: 'all through.q3', senseId: 'all through.s1', errorType: 'grammar', type: '词义选择', prompt: 'all through 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'all through.q4', senseId: 'all through.s1', errorType: 'meaning', type: '词源', prompt: '记 all through 时，下面哪句更稳妥？', options: ['先锁住「在整个……期间」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在整个……期间」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在整个……期间'] },
  });

  D('all-round', {
    etymology: {
      origin: '现代英语常用词「all-round」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'all-round', gloss: '全面的' },
      suffix: null,
      history: [
        { label: 'all-round', text: '现代英语常用词「all-round」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：全面的。' },
      ],
      formationLogic: '核心义：全面的。',
      mnemonic: '看到 all-round，先说出「全面的」，再放进一句自己的话。',
      note: '核心义：全面的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked all-round even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得全面的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'all-round.s1', en: 'They needed a all-round answer, not a long speech.', zh: '他们要的是全面的的答复，不是长篇发言。', structure: 'all-round / 在句中表示 / 全面的', grammar: 'adjective 用法，围绕「全面的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are all-round.', right: 'The news is all-round.', reason: 'news 作主语时动词用单数。形容词 all-round 放在系动词后面。', rule: '先确定 all-round 是adjective，再套「全面的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'all-round.q1', senseId: 'all-round.s1', errorType: 'meaning', type: '词义选择', prompt: '「all-round」在本条的核心意思是：', options: ['全面的', '完全相反的意思', '与本词无关的语法术语'], answer: '全面的', explain: 'all-round：全面的。' },
      { id: 'all-round.q2', senseId: 'all-round.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches all-round?', options: ['全面的', 'a kind of ancient coin', 'the past tense of be'], answer: '全面的', explain: '对的是「全面的」。' },
      { id: 'all-round.q3', senseId: 'all-round.s1', errorType: 'grammar', type: '词义选择', prompt: 'all-round 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'all-round.q4', senseId: 'all-round.s1', errorType: 'meaning', type: '词源', prompt: '记 all-round 时，下面哪句更稳妥？', options: ['先锁住「全面的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「全面的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全面的'] },
  });

  D('allegation', {
    etymology: {
      origin: '英语派生：allega 加上词尾，构成与「（未证实的）指控」相应的词类。',
      prefix: null,
      root: { text: 'allega', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'allegation', text: '英语派生：allega 加上词尾，构成与「（未证实的）指控」相应的词类。' },
        { label: '现在', text: '核心用法是：（未证实的）指控。' },
      ],
      formationLogic: '先认词干 allega，再看词尾决定词性。',
      mnemonic: '看到 allegation，先说出「（未证实的）指控」，再放进一句自己的话。',
      note: '先认词干 allega，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one allegation.', chinese: '这一章反复回到同一个点：（未证实的）指控。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allegation.s1', en: 'Without that allegation, the story would be hard to follow.', zh: '没有这个（未证实的）指控，故事会很难读下去。', structure: 'allegation / 在句中表示 / （未证实的）指控', grammar: 'noun 用法，围绕「（未证实的）指控」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the allegation.', right: 'He gave me a lot of advice about the allegation.', reason: 'advice 不可数。名词 allegation 的单复数也要按词典词形来，不要自造。', rule: '先确定 allegation 是noun，再套「（未证实的）指控」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allegation.q1', senseId: 'allegation.s1', errorType: 'meaning', type: '词义选择', prompt: '「allegation」在本条的核心意思是：', options: ['（未证实的）指控', '完全相反的意思', '与本词无关的语法术语'], answer: '（未证实的）指控', explain: 'allegation：（未证实的）指控。' },
      { id: 'allegation.q2', senseId: 'allegation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allegation?', options: ['（未证实的）指控', 'a kind of ancient coin', 'the past tense of be'], answer: '（未证实的）指控', explain: '对的是「（未证实的）指控」。' },
      { id: 'allegation.q3', senseId: 'allegation.s1', errorType: 'grammar', type: '词义选择', prompt: 'allegation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'allegation.q4', senseId: 'allegation.s1', errorType: 'meaning', type: '词源', prompt: '记 allegation 时，下面哪句更稳妥？', options: ['先锁住「（未证实的）指控」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（未证实的）指控」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（未证实的）指控'] },
  });

  D('allege', {
    etymology: {
      origin: '现代英语常用词「allege」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'allege', gloss: '（未经证实）宣称' },
      suffix: null,
      history: [
        { label: 'allege', text: '现代英语常用词「allege」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（未经证实）宣称。' },
      ],
      formationLogic: '核心义：（未经证实）宣称。',
      mnemonic: '看到 allege，先说出「（未经证实）宣称」，再放进一句自己的话。',
      note: '核心义：（未经证实）宣称。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to allege before the office closed.', chinese: '小组得在办公室关门前完成这件事：（未经证实）宣称。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allege.s1', en: 'Nobody wanted to allege, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 allege 是「（未经证实）宣称」。', structure: 'allege / 在句中表示 / （未经证实）宣称', grammar: 'verb 用法，围绕「（未经证实）宣称」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She allegeed the form yesterday without checking the real past form.', right: 'Look up the past form of "allege" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 allege 是verb，再套「（未经证实）宣称」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allege.q1', senseId: 'allege.s1', errorType: 'meaning', type: '词义选择', prompt: '「allege」在本条的核心意思是：', options: ['（未经证实）宣称', '完全相反的意思', '与本词无关的语法术语'], answer: '（未经证实）宣称', explain: 'allege：（未经证实）宣称。' },
      { id: 'allege.q2', senseId: 'allege.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allege?', options: ['（未经证实）宣称', 'a kind of ancient coin', 'the past tense of be'], answer: '（未经证实）宣称', explain: '对的是「（未经证实）宣称」。' },
      { id: 'allege.q3', senseId: 'allege.s1', errorType: 'grammar', type: '词义选择', prompt: 'allege 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'allege.q4', senseId: 'allege.s1', errorType: 'meaning', type: '词源', prompt: '记 allege 时，下面哪句更稳妥？', options: ['先锁住「（未经证实）宣称」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（未经证实）宣称」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（未经证实）宣称'] },
  });

  D('alleged', {
    etymology: {
      origin: '现代英语常用词「alleged」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alleged', gloss: '所谓的' },
      suffix: null,
      history: [
        { label: 'alleged', text: '现代英语常用词「alleged」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：所谓的。' },
      ],
      formationLogic: '核心义：所谓的。',
      mnemonic: '看到 alleged，先说出「所谓的」，再放进一句自己的话。',
      note: '核心义：所谓的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alleged even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得所谓的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alleged.s1', en: 'They needed a alleged answer, not a long speech.', zh: '他们要的是所谓的的答复，不是长篇发言。', structure: 'alleged / 在句中表示 / 所谓的', grammar: 'adjective 用法，围绕「所谓的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alleged.', right: 'The news is alleged.', reason: 'news 作主语时动词用单数。形容词 alleged 放在系动词后面。', rule: '先确定 alleged 是adjective，再套「所谓的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alleged.q1', senseId: 'alleged.s1', errorType: 'meaning', type: '词义选择', prompt: '「alleged」在本条的核心意思是：', options: ['所谓的', '完全相反的意思', '与本词无关的语法术语'], answer: '所谓的', explain: 'alleged：所谓的。' },
      { id: 'alleged.q2', senseId: 'alleged.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alleged?', options: ['所谓的', 'a kind of ancient coin', 'the past tense of be'], answer: '所谓的', explain: '对的是「所谓的」。' },
      { id: 'alleged.q3', senseId: 'alleged.s1', errorType: 'grammar', type: '词义选择', prompt: 'alleged 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alleged.q4', senseId: 'alleged.s1', errorType: 'meaning', type: '词源', prompt: '记 alleged 时，下面哪句更稳妥？', options: ['先锁住「所谓的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「所谓的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['所谓的'] },
  });

  D('allegedly', {
    etymology: {
      origin: '英语派生：alleged 加上词尾，构成与「据说」相应的词类。',
      prefix: null,
      root: { text: 'alleged', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'allegedly', text: '英语派生：alleged 加上词尾，构成与「据说」相应的词类。' },
        { label: '现在', text: '核心用法是：据说。' },
      ],
      formationLogic: '先认词干 alleged，再看词尾决定词性。',
      mnemonic: '看到 allegedly，先说出「据说」，再放进一句自己的话。',
      note: '先认词干 alleged，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule allegedly, and the class finally followed it.', chinese: '她把规则讲得让人明白（据说），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allegedly.s1', en: 'He nodded allegedly and went back to his notes.', zh: '他据说地点了点头，又回去看笔记。', structure: 'allegedly / 在句中表示 / 据说', grammar: 'adverb 用法，围绕「据说」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very allegedlyly.', right: 'She spoke allegedly.', reason: 'allegedly 已经是副词，不要再加 -ly。', rule: '先确定 allegedly 是adverb，再套「据说」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allegedly.q1', senseId: 'allegedly.s1', errorType: 'meaning', type: '词义选择', prompt: '「allegedly」在本条的核心意思是：', options: ['据说', '完全相反的意思', '与本词无关的语法术语'], answer: '据说', explain: 'allegedly：据说。' },
      { id: 'allegedly.q2', senseId: 'allegedly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allegedly?', options: ['据说', 'a kind of ancient coin', 'the past tense of be'], answer: '据说', explain: '对的是「据说」。' },
      { id: 'allegedly.q3', senseId: 'allegedly.s1', errorType: 'grammar', type: '词义选择', prompt: 'allegedly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'allegedly.q4', senseId: 'allegedly.s1', errorType: 'meaning', type: '词源', prompt: '记 allegedly 时，下面哪句更稳妥？', options: ['先锁住「据说」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「据说」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['据说'] },
  });

  D('allergic', {
    etymology: {
      origin: '英语派生：allerg 加上词尾，构成与「过敏的」相应的词类。',
      prefix: null,
      root: { text: 'allerg', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'allergic', text: '英语派生：allerg 加上词尾，构成与「过敏的」相应的词类。' },
        { label: '现在', text: '核心用法是：过敏的。' },
      ],
      formationLogic: '先认词干 allerg，再看词尾决定词性。',
      mnemonic: '看到 allergic，先说出「过敏的」，再放进一句自己的话。',
      note: '先认词干 allerg，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked allergic even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得过敏的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allergic.s1', en: 'They needed a allergic answer, not a long speech.', zh: '他们要的是过敏的的答复，不是长篇发言。', structure: 'allergic / 在句中表示 / 过敏的', grammar: 'adjective 用法，围绕「过敏的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are allergic.', right: 'The news is allergic.', reason: 'news 作主语时动词用单数。形容词 allergic 放在系动词后面。', rule: '先确定 allergic 是adjective，再套「过敏的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allergic.q1', senseId: 'allergic.s1', errorType: 'meaning', type: '词义选择', prompt: '「allergic」在本条的核心意思是：', options: ['过敏的', '完全相反的意思', '与本词无关的语法术语'], answer: '过敏的', explain: 'allergic：过敏的。' },
      { id: 'allergic.q2', senseId: 'allergic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allergic?', options: ['过敏的', 'a kind of ancient coin', 'the past tense of be'], answer: '过敏的', explain: '对的是「过敏的」。' },
      { id: 'allergic.q3', senseId: 'allergic.s1', errorType: 'grammar', type: '词义选择', prompt: 'allergic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'allergic.q4', senseId: 'allergic.s1', errorType: 'meaning', type: '词源', prompt: '记 allergic 时，下面哪句更稳妥？', options: ['先锁住「过敏的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「过敏的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过敏的'] },
  });

  D('allergy', {
    etymology: {
      origin: '现代英语常用词「allergy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'allergy', gloss: '过敏（反应）' },
      suffix: null,
      history: [
        { label: 'allergy', text: '现代英语常用词「allergy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：过敏（反应）。' },
      ],
      formationLogic: '核心义：过敏（反应）。',
      mnemonic: '看到 allergy，先说出「过敏（反应）」，再放进一句自己的话。',
      note: '核心义：过敏（反应）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one allergy.', chinese: '这一章反复回到同一个点：过敏（反应）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allergy.s1', en: 'Without that allergy, the story would be hard to follow.', zh: '没有这个过敏（反应），故事会很难读下去。', structure: 'allergy / 在句中表示 / 过敏（反应）', grammar: 'noun 用法，围绕「过敏（反应）」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the allergy.', right: 'He gave me a lot of advice about the allergy.', reason: 'advice 不可数。名词 allergy 的单复数也要按词典词形来，不要自造。', rule: '先确定 allergy 是noun，再套「过敏（反应）」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allergy.q1', senseId: 'allergy.s1', errorType: 'meaning', type: '词义选择', prompt: '「allergy」在本条的核心意思是：', options: ['过敏（反应）', '完全相反的意思', '与本词无关的语法术语'], answer: '过敏（反应）', explain: 'allergy：过敏（反应）。' },
      { id: 'allergy.q2', senseId: 'allergy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allergy?', options: ['过敏（反应）', 'a kind of ancient coin', 'the past tense of be'], answer: '过敏（反应）', explain: '对的是「过敏（反应）」。' },
      { id: 'allergy.q3', senseId: 'allergy.s1', errorType: 'grammar', type: '词义选择', prompt: 'allergy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'allergy.q4', senseId: 'allergy.s1', errorType: 'meaning', type: '词源', prompt: '记 allergy 时，下面哪句更稳妥？', options: ['先锁住「过敏（反应）」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「过敏（反应）」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['过敏（反应）'] },
  });

  D('alleviate', {
    etymology: {
      origin: '现代英语常用词「alleviate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alleviate', gloss: '减轻' },
      suffix: null,
      history: [
        { label: 'alleviate', text: '现代英语常用词「alleviate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：减轻。' },
      ],
      formationLogic: '核心义：减轻。',
      mnemonic: '看到 alleviate，先说出「减轻」，再放进一句自己的话。',
      note: '核心义：减轻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to alleviate before the office closed.', chinese: '小组得在办公室关门前完成这件事：减轻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alleviate.s1', en: 'Nobody wanted to alleviate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 alleviate 是「减轻」。', structure: 'alleviate / 在句中表示 / 减轻', grammar: 'verb 用法，围绕「减轻」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She alleviateed the form yesterday without checking the real past form.', right: 'Look up the past form of "alleviate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 alleviate 是verb，再套「减轻」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alleviate.q1', senseId: 'alleviate.s1', errorType: 'meaning', type: '词义选择', prompt: '「alleviate」在本条的核心意思是：', options: ['减轻', '完全相反的意思', '与本词无关的语法术语'], answer: '减轻', explain: 'alleviate：减轻。' },
      { id: 'alleviate.q2', senseId: 'alleviate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alleviate?', options: ['减轻', 'a kind of ancient coin', 'the past tense of be'], answer: '减轻', explain: '对的是「减轻」。' },
      { id: 'alleviate.q3', senseId: 'alleviate.s1', errorType: 'grammar', type: '词义选择', prompt: 'alleviate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'alleviate.q4', senseId: 'alleviate.s1', errorType: 'meaning', type: '词源', prompt: '记 alleviate 时，下面哪句更稳妥？', options: ['先锁住「减轻」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「减轻」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['减轻'] },
  });

  D('alleviation', {
    etymology: {
      origin: '英语派生：allevia 加上词尾，构成与「减轻」相应的词类。',
      prefix: null,
      root: { text: 'allevia', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alleviation', text: '英语派生：allevia 加上词尾，构成与「减轻」相应的词类。' },
        { label: '现在', text: '核心用法是：减轻。' },
      ],
      formationLogic: '先认词干 allevia，再看词尾决定词性。',
      mnemonic: '看到 alleviation，先说出「减轻」，再放进一句自己的话。',
      note: '先认词干 allevia，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alleviation.', chinese: '这一章反复回到同一个点：减轻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alleviation.s1', en: 'Without that alleviation, the story would be hard to follow.', zh: '没有这个减轻，故事会很难读下去。', structure: 'alleviation / 在句中表示 / 减轻', grammar: 'noun 用法，围绕「减轻」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alleviation.', right: 'He gave me a lot of advice about the alleviation.', reason: 'advice 不可数。名词 alleviation 的单复数也要按词典词形来，不要自造。', rule: '先确定 alleviation 是noun，再套「减轻」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alleviation.q1', senseId: 'alleviation.s1', errorType: 'meaning', type: '词义选择', prompt: '「alleviation」在本条的核心意思是：', options: ['减轻', '完全相反的意思', '与本词无关的语法术语'], answer: '减轻', explain: 'alleviation：减轻。' },
      { id: 'alleviation.q2', senseId: 'alleviation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alleviation?', options: ['减轻', 'a kind of ancient coin', 'the past tense of be'], answer: '减轻', explain: '对的是「减轻」。' },
      { id: 'alleviation.q3', senseId: 'alleviation.s1', errorType: 'grammar', type: '词义选择', prompt: 'alleviation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alleviation.q4', senseId: 'alleviation.s1', errorType: 'meaning', type: '词源', prompt: '记 alleviation 时，下面哪句更稳妥？', options: ['先锁住「减轻」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「减轻」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['减轻'] },
  });

  D('alley', {
    etymology: {
      origin: '古法语 alee「走道」，aller「走」。',
      prefix: null,
      root: { text: 'alley', gloss: '小巷' },
      suffix: null,
      history: [
        { label: 'alley', text: '古法语 alee「走道」，aller「走」。' },
        { label: '现在', text: '核心用法是：小巷。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：小巷。',
      mnemonic: '看到 alley，先说出「小巷」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：小巷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alley.', chinese: '这一章反复回到同一个点：小巷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alley.s1', en: 'Without that alley, the story would be hard to follow.', zh: '没有这个小巷，故事会很难读下去。', structure: 'alley / 在句中表示 / 小巷', grammar: 'noun 用法，围绕「小巷」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alley.', right: 'He gave me a lot of advice about the alley.', reason: 'advice 不可数。名词 alley 的单复数也要按词典词形来，不要自造。', rule: '先确定 alley 是noun，再套「小巷」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alley.q1', senseId: 'alley.s1', errorType: 'meaning', type: '词义选择', prompt: '「alley」在本条的核心意思是：', options: ['小巷', '完全相反的意思', '与本词无关的语法术语'], answer: '小巷', explain: 'alley：小巷。' },
      { id: 'alley.q2', senseId: 'alley.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alley?', options: ['小巷', 'a kind of ancient coin', 'the past tense of be'], answer: '小巷', explain: '对的是「小巷」。' },
      { id: 'alley.q3', senseId: 'alley.s1', errorType: 'grammar', type: '词义选择', prompt: 'alley 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alley.q4', senseId: 'alley.s1', errorType: 'meaning', type: '词源', prompt: '记 alley 时，下面哪句更稳妥？', options: ['先锁住「小巷」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「小巷」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小巷'] },
  });

  D('alliance', {
    etymology: {
      origin: '英语派生：alli 加上词尾，构成与「联盟」相应的词类。',
      prefix: null,
      root: { text: 'alli', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alliance', text: '英语派生：alli 加上词尾，构成与「联盟」相应的词类。' },
        { label: '现在', text: '核心用法是：联盟。' },
      ],
      formationLogic: '先认词干 alli，再看词尾决定词性。',
      mnemonic: '看到 alliance，先说出「联盟」，再放进一句自己的话。',
      note: '先认词干 alli，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alliance.', chinese: '这一章反复回到同一个点：联盟。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alliance.s1', en: 'Without that alliance, the story would be hard to follow.', zh: '没有这个联盟，故事会很难读下去。', structure: 'alliance / 在句中表示 / 联盟', grammar: 'noun 用法，围绕「联盟」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alliance.', right: 'He gave me a lot of advice about the alliance.', reason: 'advice 不可数。名词 alliance 的单复数也要按词典词形来，不要自造。', rule: '先确定 alliance 是noun，再套「联盟」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alliance.q1', senseId: 'alliance.s1', errorType: 'meaning', type: '词义选择', prompt: '「alliance」在本条的核心意思是：', options: ['联盟', '完全相反的意思', '与本词无关的语法术语'], answer: '联盟', explain: 'alliance：联盟。' },
      { id: 'alliance.q2', senseId: 'alliance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alliance?', options: ['联盟', 'a kind of ancient coin', 'the past tense of be'], answer: '联盟', explain: '对的是「联盟」。' },
      { id: 'alliance.q3', senseId: 'alliance.s1', errorType: 'grammar', type: '词义选择', prompt: 'alliance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alliance.q4', senseId: 'alliance.s1', errorType: 'meaning', type: '词源', prompt: '记 alliance 时，下面哪句更稳妥？', options: ['先锁住「联盟」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「联盟」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['联盟'] },
  });

  D('allied', {
    etymology: {
      origin: '现代英语常用词「allied」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'allied', gloss: '同盟的' },
      suffix: null,
      history: [
        { label: 'allied', text: '现代英语常用词「allied」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：同盟的。' },
      ],
      formationLogic: '核心义：同盟的。',
      mnemonic: '看到 allied，先说出「同盟的」，再放进一句自己的话。',
      note: '核心义：同盟的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked allied even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得同盟的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allied.s1', en: 'They needed a allied answer, not a long speech.', zh: '他们要的是同盟的的答复，不是长篇发言。', structure: 'allied / 在句中表示 / 同盟的', grammar: 'adjective 用法，围绕「同盟的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are allied.', right: 'The news is allied.', reason: 'news 作主语时动词用单数。形容词 allied 放在系动词后面。', rule: '先确定 allied 是adjective，再套「同盟的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allied.q1', senseId: 'allied.s1', errorType: 'meaning', type: '词义选择', prompt: '「allied」在本条的核心意思是：', options: ['同盟的', '完全相反的意思', '与本词无关的语法术语'], answer: '同盟的', explain: 'allied：同盟的。' },
      { id: 'allied.q2', senseId: 'allied.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allied?', options: ['同盟的', 'a kind of ancient coin', 'the past tense of be'], answer: '同盟的', explain: '对的是「同盟的」。' },
      { id: 'allied.q3', senseId: 'allied.s1', errorType: 'grammar', type: '词义选择', prompt: 'allied 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'allied.q4', senseId: 'allied.s1', errorType: 'meaning', type: '词源', prompt: '记 allied 时，下面哪句更稳妥？', options: ['先锁住「同盟的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「同盟的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['同盟的'] },
  });

  D('allocate', {
    etymology: {
      origin: '现代英语常用词「allocate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'allocate', gloss: '分配' },
      suffix: null,
      history: [
        { label: 'allocate', text: '现代英语常用词「allocate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：分配。' },
      ],
      formationLogic: '核心义：分配。',
      mnemonic: '看到 allocate，先说出「分配」，再放进一句自己的话。',
      note: '核心义：分配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to allocate before the office closed.', chinese: '小组得在办公室关门前完成这件事：分配。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allocate.s1', en: 'Nobody wanted to allocate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 allocate 是「分配」。', structure: 'allocate / 在句中表示 / 分配', grammar: 'verb 用法，围绕「分配」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She allocateed the form yesterday without checking the real past form.', right: 'Look up the past form of "allocate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 allocate 是verb，再套「分配」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allocate.q1', senseId: 'allocate.s1', errorType: 'meaning', type: '词义选择', prompt: '「allocate」在本条的核心意思是：', options: ['分配', '完全相反的意思', '与本词无关的语法术语'], answer: '分配', explain: 'allocate：分配。' },
      { id: 'allocate.q2', senseId: 'allocate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allocate?', options: ['分配', 'a kind of ancient coin', 'the past tense of be'], answer: '分配', explain: '对的是「分配」。' },
      { id: 'allocate.q3', senseId: 'allocate.s1', errorType: 'grammar', type: '词义选择', prompt: 'allocate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'allocate.q4', senseId: 'allocate.s1', errorType: 'meaning', type: '词源', prompt: '记 allocate 时，下面哪句更稳妥？', options: ['先锁住「分配」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「分配」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分配'] },
  });

  D('allocation', {
    etymology: {
      origin: '英语派生：alloca 加上词尾，构成与「分配」相应的词类。',
      prefix: null,
      root: { text: 'alloca', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'allocation', text: '英语派生：alloca 加上词尾，构成与「分配」相应的词类。' },
        { label: '现在', text: '核心用法是：分配。' },
      ],
      formationLogic: '先认词干 alloca，再看词尾决定词性。',
      mnemonic: '看到 allocation，先说出「分配」，再放进一句自己的话。',
      note: '先认词干 alloca，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one allocation.', chinese: '这一章反复回到同一个点：分配。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allocation.s1', en: 'Without that allocation, the story would be hard to follow.', zh: '没有这个分配，故事会很难读下去。', structure: 'allocation / 在句中表示 / 分配', grammar: 'noun 用法，围绕「分配」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the allocation.', right: 'He gave me a lot of advice about the allocation.', reason: 'advice 不可数。名词 allocation 的单复数也要按词典词形来，不要自造。', rule: '先确定 allocation 是noun，再套「分配」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allocation.q1', senseId: 'allocation.s1', errorType: 'meaning', type: '词义选择', prompt: '「allocation」在本条的核心意思是：', options: ['分配', '完全相反的意思', '与本词无关的语法术语'], answer: '分配', explain: 'allocation：分配。' },
      { id: 'allocation.q2', senseId: 'allocation.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allocation?', options: ['分配', 'a kind of ancient coin', 'the past tense of be'], answer: '分配', explain: '对的是「分配」。' },
      { id: 'allocation.q3', senseId: 'allocation.s1', errorType: 'grammar', type: '词义选择', prompt: 'allocation 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'allocation.q4', senseId: 'allocation.s1', errorType: 'meaning', type: '词源', prompt: '记 allocation 时，下面哪句更稳妥？', options: ['先锁住「分配」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「分配」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分配'] },
  });

  D('allot', {
    etymology: {
      origin: '现代英语常用词「allot」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'allot', gloss: '分配' },
      suffix: null,
      history: [
        { label: 'allot', text: '现代英语常用词「allot」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：分配。' },
      ],
      formationLogic: '核心义：分配。',
      mnemonic: '看到 allot，先说出「分配」，再放进一句自己的话。',
      note: '核心义：分配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to allot before the office closed.', chinese: '小组得在办公室关门前完成这件事：分配。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allot.s1', en: 'Nobody wanted to allot, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 allot 是「分配」。', structure: 'allot / 在句中表示 / 分配', grammar: 'verb 用法，围绕「分配」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She alloted the form yesterday without checking the real past form.', right: 'Look up the past form of "allot" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 allot 是verb，再套「分配」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allot.q1', senseId: 'allot.s1', errorType: 'meaning', type: '词义选择', prompt: '「allot」在本条的核心意思是：', options: ['分配', '完全相反的意思', '与本词无关的语法术语'], answer: '分配', explain: 'allot：分配。' },
      { id: 'allot.q2', senseId: 'allot.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allot?', options: ['分配', 'a kind of ancient coin', 'the past tense of be'], answer: '分配', explain: '对的是「分配」。' },
      { id: 'allot.q3', senseId: 'allot.s1', errorType: 'grammar', type: '词义选择', prompt: 'allot 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'allot.q4', senseId: 'allot.s1', errorType: 'meaning', type: '词源', prompt: '记 allot 时，下面哪句更稳妥？', options: ['先锁住「分配」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「分配」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分配'] },
  });

  D('allotment', {
    etymology: {
      origin: '英语派生：allot 加上词尾，构成与「分配」相应的词类。',
      prefix: null,
      root: { text: 'allot', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'allotment', text: '英语派生：allot 加上词尾，构成与「分配」相应的词类。' },
        { label: '现在', text: '核心用法是：分配。' },
      ],
      formationLogic: '先认词干 allot，再看词尾决定词性。',
      mnemonic: '看到 allotment，先说出「分配」，再放进一句自己的话。',
      note: '先认词干 allot，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one allotment.', chinese: '这一章反复回到同一个点：分配。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allotment.s1', en: 'Without that allotment, the story would be hard to follow.', zh: '没有这个分配，故事会很难读下去。', structure: 'allotment / 在句中表示 / 分配', grammar: 'noun 用法，围绕「分配」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the allotment.', right: 'He gave me a lot of advice about the allotment.', reason: 'advice 不可数。名词 allotment 的单复数也要按词典词形来，不要自造。', rule: '先确定 allotment 是noun，再套「分配」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allotment.q1', senseId: 'allotment.s1', errorType: 'meaning', type: '词义选择', prompt: '「allotment」在本条的核心意思是：', options: ['分配', '完全相反的意思', '与本词无关的语法术语'], answer: '分配', explain: 'allotment：分配。' },
      { id: 'allotment.q2', senseId: 'allotment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allotment?', options: ['分配', 'a kind of ancient coin', 'the past tense of be'], answer: '分配', explain: '对的是「分配」。' },
      { id: 'allotment.q3', senseId: 'allotment.s1', errorType: 'grammar', type: '词义选择', prompt: 'allotment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'allotment.q4', senseId: 'allotment.s1', errorType: 'meaning', type: '词源', prompt: '记 allotment 时，下面哪句更稳妥？', options: ['先锁住「分配」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「分配」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分配'] },
  });

  D('allow', {
    etymology: {
      origin: '古法语 allouer，与拉丁语 allaudare「称赞」及 allocare「分配」都有关。现代义是允许。',
      prefix: null,
      root: { text: 'allow', gloss: '允许' },
      suffix: null,
      history: [
        { label: 'allow', text: '古法语 allouer，与拉丁语 allaudare「称赞」及 allocare「分配」都有关。现代义是允许。' },
        { label: '现在', text: '核心用法是：允许。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：允许。',
      mnemonic: '看到 allow，先说出「允许」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：允许。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to allow before the office closed.', chinese: '小组得在办公室关门前完成这件事：允许。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allow.s1', en: 'Nobody wanted to allow, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 allow 是「允许」。', structure: 'allow / 在句中表示 / 允许', grammar: 'verb 用法，围绕「允许」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She allowed the form yesterday without checking the real past form.', right: 'Look up the past form of "allow" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 allow 是verb，再套「允许」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allow.q1', senseId: 'allow.s1', errorType: 'meaning', type: '词义选择', prompt: '「allow」在本条的核心意思是：', options: ['允许', '完全相反的意思', '与本词无关的语法术语'], answer: '允许', explain: 'allow：允许。' },
      { id: 'allow.q2', senseId: 'allow.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allow?', options: ['允许', 'a kind of ancient coin', 'the past tense of be'], answer: '允许', explain: '对的是「允许」。' },
      { id: 'allow.q3', senseId: 'allow.s1', errorType: 'grammar', type: '词义选择', prompt: 'allow 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'allow.q4', senseId: 'allow.s1', errorType: 'meaning', type: '词源', prompt: '记 allow 时，下面哪句更稳妥？', options: ['先锁住「允许」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「允许」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['允许'] },
  });

  D('allow for', {
    etymology: {
      origin: '现代英语固定说法「allow for」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'allow for', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'allow for', text: '现代英语固定说法「allow for」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：考虑到。' },
      ],
      formationLogic: '常见义：考虑到。',
      mnemonic: '看到 allow for，先说出「考虑到」，再放进一句自己的话。',
      note: '常见义：考虑到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "allow for" and asked what it does in the sentence.', chinese: '老师在「allow for」下面划了线，问它在句中起什么作用。它表示考虑到。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allow for.s1', en: 'In the margin she wrote "allow for" so the reader would not miss that phrase.', zh: '她在页边写下「allow for」，免得读者漏掉这个说法。意思是考虑到。', structure: 'allow for / 在句中表示 / 考虑到', grammar: 'verb 用法，围绕「考虑到」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated allow for word by word and lost the meaning.', right: 'He kept "allow for" as one phrase meaning 考虑到.', reason: '「allow for」是固定说法，拆开容易翻错。', rule: '先确定 allow for 是verb，再套「考虑到」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allow for.q1', senseId: 'allow for.s1', errorType: 'meaning', type: '词义选择', prompt: '「allow for」在本条的核心意思是：', options: ['考虑到', '完全相反的意思', '与本词无关的语法术语'], answer: '考虑到', explain: 'allow for：考虑到。' },
      { id: 'allow for.q2', senseId: 'allow for.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allow for?', options: ['考虑到', 'a kind of ancient coin', 'the past tense of be'], answer: '考虑到', explain: '对的是「考虑到」。' },
      { id: 'allow for.q3', senseId: 'allow for.s1', errorType: 'grammar', type: '词义选择', prompt: 'allow for 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'allow for.q4', senseId: 'allow for.s1', errorType: 'meaning', type: '词源', prompt: '记 allow for 时，下面哪句更稳妥？', options: ['先锁住「考虑到」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「考虑到」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['考虑到'] },
  });

  D('allowance', {
    etymology: {
      origin: '英语派生：allow 加上词尾，构成与「津贴」相应的词类。',
      prefix: null,
      root: { text: 'allow', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'allowance', text: '英语派生：allow 加上词尾，构成与「津贴」相应的词类。' },
        { label: '现在', text: '核心用法是：津贴。' },
      ],
      formationLogic: '先认词干 allow，再看词尾决定词性。',
      mnemonic: '看到 allowance，先说出「津贴」，再放进一句自己的话。',
      note: '先认词干 allow，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one allowance.', chinese: '这一章反复回到同一个点：津贴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allowance.s1', en: 'Without that allowance, the story would be hard to follow.', zh: '没有这个津贴，故事会很难读下去。', structure: 'allowance / 在句中表示 / 津贴', grammar: 'noun 用法，围绕「津贴」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the allowance.', right: 'He gave me a lot of advice about the allowance.', reason: 'advice 不可数。名词 allowance 的单复数也要按词典词形来，不要自造。', rule: '先确定 allowance 是noun，再套「津贴」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allowance.q1', senseId: 'allowance.s1', errorType: 'meaning', type: '词义选择', prompt: '「allowance」在本条的核心意思是：', options: ['津贴', '完全相反的意思', '与本词无关的语法术语'], answer: '津贴', explain: 'allowance：津贴。' },
      { id: 'allowance.q2', senseId: 'allowance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allowance?', options: ['津贴', 'a kind of ancient coin', 'the past tense of be'], answer: '津贴', explain: '对的是「津贴」。' },
      { id: 'allowance.q3', senseId: 'allowance.s1', errorType: 'grammar', type: '词义选择', prompt: 'allowance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'allowance.q4', senseId: 'allowance.s1', errorType: 'meaning', type: '词源', prompt: '记 allowance 时，下面哪句更稳妥？', options: ['先锁住「津贴」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「津贴」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['津贴'] },
  });

  D('alloy', {
    etymology: {
      origin: '现代英语常用词「alloy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alloy', gloss: '合金' },
      suffix: null,
      history: [
        { label: 'alloy', text: '现代英语常用词「alloy」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：合金。' },
      ],
      formationLogic: '核心义：合金。',
      mnemonic: '看到 alloy，先说出「合金」，再放进一句自己的话。',
      note: '核心义：合金。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alloy.', chinese: '这一章反复回到同一个点：合金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alloy.s1', en: 'Without that alloy, the story would be hard to follow.', zh: '没有这个合金，故事会很难读下去。', structure: 'alloy / 在句中表示 / 合金', grammar: 'noun 用法，围绕「合金」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alloy.', right: 'He gave me a lot of advice about the alloy.', reason: 'advice 不可数。名词 alloy 的单复数也要按词典词形来，不要自造。', rule: '先确定 alloy 是noun，再套「合金」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alloy.q1', senseId: 'alloy.s1', errorType: 'meaning', type: '词义选择', prompt: '「alloy」在本条的核心意思是：', options: ['合金', '完全相反的意思', '与本词无关的语法术语'], answer: '合金', explain: 'alloy：合金。' },
      { id: 'alloy.q2', senseId: 'alloy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alloy?', options: ['合金', 'a kind of ancient coin', 'the past tense of be'], answer: '合金', explain: '对的是「合金」。' },
      { id: 'alloy.q3', senseId: 'alloy.s1', errorType: 'grammar', type: '词义选择', prompt: 'alloy 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alloy.q4', senseId: 'alloy.s1', errorType: 'meaning', type: '词源', prompt: '记 alloy 时，下面哪句更稳妥？', options: ['先锁住「合金」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「合金」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['合金'] },
  });

  D('allude', {
    etymology: {
      origin: '现代英语常用词「allude」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'allude', gloss: '暗指' },
      suffix: null,
      history: [
        { label: 'allude', text: '现代英语常用词「allude」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：暗指。' },
      ],
      formationLogic: '核心义：暗指。',
      mnemonic: '看到 allude，先说出「暗指」，再放进一句自己的话。',
      note: '核心义：暗指。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to allude before the office closed.', chinese: '小组得在办公室关门前完成这件事：暗指。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allude.s1', en: 'Nobody wanted to allude, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 allude 是「暗指」。', structure: 'allude / 在句中表示 / 暗指', grammar: 'verb 用法，围绕「暗指」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She alludeed the form yesterday without checking the real past form.', right: 'Look up the past form of "allude" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 allude 是verb，再套「暗指」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allude.q1', senseId: 'allude.s1', errorType: 'meaning', type: '词义选择', prompt: '「allude」在本条的核心意思是：', options: ['暗指', '完全相反的意思', '与本词无关的语法术语'], answer: '暗指', explain: 'allude：暗指。' },
      { id: 'allude.q2', senseId: 'allude.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allude?', options: ['暗指', 'a kind of ancient coin', 'the past tense of be'], answer: '暗指', explain: '对的是「暗指」。' },
      { id: 'allude.q3', senseId: 'allude.s1', errorType: 'grammar', type: '词义选择', prompt: 'allude 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'allude.q4', senseId: 'allude.s1', errorType: 'meaning', type: '词源', prompt: '记 allude 时，下面哪句更稳妥？', options: ['先锁住「暗指」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「暗指」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暗指'] },
  });

  D('allure', {
    etymology: {
      origin: '现代英语常用词「allure」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'allure', gloss: '诱惑力' },
      suffix: null,
      history: [
        { label: 'allure', text: '现代英语常用词「allure」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：诱惑力。' },
      ],
      formationLogic: '核心义：诱惑力。',
      mnemonic: '看到 allure，先说出「诱惑力」，再放进一句自己的话。',
      note: '核心义：诱惑力。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one allure.', chinese: '这一章反复回到同一个点：诱惑力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allure.s1', en: 'Without that allure, the story would be hard to follow.', zh: '没有这个诱惑力，故事会很难读下去。', structure: 'allure / 在句中表示 / 诱惑力', grammar: 'noun 用法，围绕「诱惑力」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the allure.', right: 'He gave me a lot of advice about the allure.', reason: 'advice 不可数。名词 allure 的单复数也要按词典词形来，不要自造。', rule: '先确定 allure 是noun，再套「诱惑力」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allure.q1', senseId: 'allure.s1', errorType: 'meaning', type: '词义选择', prompt: '「allure」在本条的核心意思是：', options: ['诱惑力', '完全相反的意思', '与本词无关的语法术语'], answer: '诱惑力', explain: 'allure：诱惑力。' },
      { id: 'allure.q2', senseId: 'allure.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allure?', options: ['诱惑力', 'a kind of ancient coin', 'the past tense of be'], answer: '诱惑力', explain: '对的是「诱惑力」。' },
      { id: 'allure.q3', senseId: 'allure.s1', errorType: 'grammar', type: '词义选择', prompt: 'allure 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'allure.q4', senseId: 'allure.s1', errorType: 'meaning', type: '词源', prompt: '记 allure 时，下面哪句更稳妥？', options: ['先锁住「诱惑力」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「诱惑力」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['诱惑力'] },
  });

  D('alluring', {
    etymology: {
      origin: '现代英语常用词「alluring」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alluring', gloss: '诱人的' },
      suffix: null,
      history: [
        { label: 'alluring', text: '现代英语常用词「alluring」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：诱人的。' },
      ],
      formationLogic: '核心义：诱人的。',
      mnemonic: '看到 alluring，先说出「诱人的」，再放进一句自己的话。',
      note: '核心义：诱人的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alluring even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得诱人的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alluring.s1', en: 'They needed a alluring answer, not a long speech.', zh: '他们要的是诱人的的答复，不是长篇发言。', structure: 'alluring / 在句中表示 / 诱人的', grammar: 'adjective 用法，围绕「诱人的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alluring.', right: 'The news is alluring.', reason: 'news 作主语时动词用单数。形容词 alluring 放在系动词后面。', rule: '先确定 alluring 是adjective，再套「诱人的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alluring.q1', senseId: 'alluring.s1', errorType: 'meaning', type: '词义选择', prompt: '「alluring」在本条的核心意思是：', options: ['诱人的', '完全相反的意思', '与本词无关的语法术语'], answer: '诱人的', explain: 'alluring：诱人的。' },
      { id: 'alluring.q2', senseId: 'alluring.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alluring?', options: ['诱人的', 'a kind of ancient coin', 'the past tense of be'], answer: '诱人的', explain: '对的是「诱人的」。' },
      { id: 'alluring.q3', senseId: 'alluring.s1', errorType: 'grammar', type: '词义选择', prompt: 'alluring 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alluring.q4', senseId: 'alluring.s1', errorType: 'meaning', type: '词源', prompt: '记 alluring 时，下面哪句更稳妥？', options: ['先锁住「诱人的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「诱人的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['诱人的'] },
  });

  D('allusion', {
    etymology: {
      origin: '英语派生：allu 加上词尾，构成与「暗指」相应的词类。',
      prefix: null,
      root: { text: 'allu', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'allusion', text: '英语派生：allu 加上词尾，构成与「暗指」相应的词类。' },
        { label: '现在', text: '核心用法是：暗指。' },
      ],
      formationLogic: '先认词干 allu，再看词尾决定词性。',
      mnemonic: '看到 allusion，先说出「暗指」，再放进一句自己的话。',
      note: '先认词干 allu，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one allusion.', chinese: '这一章反复回到同一个点：暗指。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'allusion.s1', en: 'Without that allusion, the story would be hard to follow.', zh: '没有这个暗指，故事会很难读下去。', structure: 'allusion / 在句中表示 / 暗指', grammar: 'noun 用法，围绕「暗指」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the allusion.', right: 'He gave me a lot of advice about the allusion.', reason: 'advice 不可数。名词 allusion 的单复数也要按词典词形来，不要自造。', rule: '先确定 allusion 是noun，再套「暗指」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'allusion.q1', senseId: 'allusion.s1', errorType: 'meaning', type: '词义选择', prompt: '「allusion」在本条的核心意思是：', options: ['暗指', '完全相反的意思', '与本词无关的语法术语'], answer: '暗指', explain: 'allusion：暗指。' },
      { id: 'allusion.q2', senseId: 'allusion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches allusion?', options: ['暗指', 'a kind of ancient coin', 'the past tense of be'], answer: '暗指', explain: '对的是「暗指」。' },
      { id: 'allusion.q3', senseId: 'allusion.s1', errorType: 'grammar', type: '词义选择', prompt: 'allusion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'allusion.q4', senseId: 'allusion.s1', errorType: 'meaning', type: '词源', prompt: '记 allusion 时，下面哪句更稳妥？', options: ['先锁住「暗指」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「暗指」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['暗指'] },
  });

  D('ally', {
    etymology: {
      origin: '现代英语常用词「ally」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'ally', gloss: '盟友' },
      suffix: null,
      history: [
        { label: 'ally', text: '现代英语常用词「ally」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：盟友。' },
      ],
      formationLogic: '核心义：盟友。',
      mnemonic: '看到 ally，先说出「盟友」，再放进一句自己的话。',
      note: '核心义：盟友。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ally.', chinese: '这一章反复回到同一个点：盟友。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ally.s1', en: 'Without that ally, the story would be hard to follow.', zh: '没有这个盟友，故事会很难读下去。', structure: 'ally / 在句中表示 / 盟友', grammar: 'noun 用法，围绕「盟友」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ally.', right: 'He gave me a lot of advice about the ally.', reason: 'advice 不可数。名词 ally 的单复数也要按词典词形来，不要自造。', rule: '先确定 ally 是noun，再套「盟友」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ally.q1', senseId: 'ally.s1', errorType: 'meaning', type: '词义选择', prompt: '「ally」在本条的核心意思是：', options: ['盟友', '完全相反的意思', '与本词无关的语法术语'], answer: '盟友', explain: 'ally：盟友。' },
      { id: 'ally.q2', senseId: 'ally.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ally?', options: ['盟友', 'a kind of ancient coin', 'the past tense of be'], answer: '盟友', explain: '对的是「盟友」。' },
      { id: 'ally.q3', senseId: 'ally.s1', errorType: 'grammar', type: '词义选择', prompt: 'ally 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ally.q4', senseId: 'ally.s1', errorType: 'meaning', type: '词源', prompt: '记 ally 时，下面哪句更稳妥？', options: ['先锁住「盟友」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「盟友」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['盟友'] },
  });

  D('almighty', {
    etymology: {
      origin: '现代英语常用词「almighty」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'almighty', gloss: '全能的' },
      suffix: null,
      history: [
        { label: 'almighty', text: '现代英语常用词「almighty」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：全能的。' },
      ],
      formationLogic: '核心义：全能的。',
      mnemonic: '看到 almighty，先说出「全能的」，再放进一句自己的话。',
      note: '核心义：全能的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked almighty even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得全能的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'almighty.s1', en: 'They needed a almighty answer, not a long speech.', zh: '他们要的是全能的的答复，不是长篇发言。', structure: 'almighty / 在句中表示 / 全能的', grammar: 'adjective 用法，围绕「全能的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are almighty.', right: 'The news is almighty.', reason: 'news 作主语时动词用单数。形容词 almighty 放在系动词后面。', rule: '先确定 almighty 是adjective，再套「全能的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'almighty.q1', senseId: 'almighty.s1', errorType: 'meaning', type: '词义选择', prompt: '「almighty」在本条的核心意思是：', options: ['全能的', '完全相反的意思', '与本词无关的语法术语'], answer: '全能的', explain: 'almighty：全能的。' },
      { id: 'almighty.q2', senseId: 'almighty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches almighty?', options: ['全能的', 'a kind of ancient coin', 'the past tense of be'], answer: '全能的', explain: '对的是「全能的」。' },
      { id: 'almighty.q3', senseId: 'almighty.s1', errorType: 'grammar', type: '词义选择', prompt: 'almighty 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'almighty.q4', senseId: 'almighty.s1', errorType: 'meaning', type: '词源', prompt: '记 almighty 时，下面哪句更稳妥？', options: ['先锁住「全能的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「全能的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['全能的'] },
  });

  D('almost', {
    etymology: {
      origin: '古英语 eall + mæst「最」。几乎是全部。',
      prefix: null,
      root: { text: 'almost', gloss: '几乎' },
      suffix: null,
      history: [
        { label: 'almost', text: '古英语 eall + mæst「最」。几乎是全部。' },
        { label: '现在', text: '核心用法是：几乎。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：几乎。',
      mnemonic: '看到 almost，先说出「几乎」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：几乎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule almost, and the class finally followed it.', chinese: '她把规则讲得让人明白（几乎），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'almost.s1', en: 'He nodded almost and went back to his notes.', zh: '他几乎地点了点头，又回去看笔记。', structure: 'almost / 在句中表示 / 几乎', grammar: 'adverb 用法，围绕「几乎」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very almostly.', right: 'She spoke almost.', reason: 'almost 已经是副词，不要再加 -ly。', rule: '先确定 almost 是adverb，再套「几乎」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'almost.q1', senseId: 'almost.s1', errorType: 'meaning', type: '词义选择', prompt: '「almost」在本条的核心意思是：', options: ['几乎', '完全相反的意思', '与本词无关的语法术语'], answer: '几乎', explain: 'almost：几乎。' },
      { id: 'almost.q2', senseId: 'almost.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches almost?', options: ['几乎', 'a kind of ancient coin', 'the past tense of be'], answer: '几乎', explain: '对的是「几乎」。' },
      { id: 'almost.q3', senseId: 'almost.s1', errorType: 'grammar', type: '词义选择', prompt: 'almost 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'almost.q4', senseId: 'almost.s1', errorType: 'meaning', type: '词源', prompt: '记 almost 时，下面哪句更稳妥？', options: ['先锁住「几乎」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「几乎」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['几乎'] },
  });

  D('aloft', {
    etymology: {
      origin: '现代英语常用词「aloft」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aloft', gloss: '在高处' },
      suffix: null,
      history: [
        { label: 'aloft', text: '现代英语常用词「aloft」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：在高处。' },
      ],
      formationLogic: '核心义：在高处。',
      mnemonic: '看到 aloft，先说出「在高处」，再放进一句自己的话。',
      note: '核心义：在高处。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule aloft, and the class finally followed it.', chinese: '她把规则讲得让人明白（在高处），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aloft.s1', en: 'He nodded aloft and went back to his notes.', zh: '他在高处地点了点头，又回去看笔记。', structure: 'aloft / 在句中表示 / 在高处', grammar: 'adverb 用法，围绕「在高处」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very aloftly.', right: 'She spoke aloft.', reason: 'aloft 已经是副词，不要再加 -ly。', rule: '先确定 aloft 是adverb，再套「在高处」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aloft.q1', senseId: 'aloft.s1', errorType: 'meaning', type: '词义选择', prompt: '「aloft」在本条的核心意思是：', options: ['在高处', '完全相反的意思', '与本词无关的语法术语'], answer: '在高处', explain: 'aloft：在高处。' },
      { id: 'aloft.q2', senseId: 'aloft.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aloft?', options: ['在高处', 'a kind of ancient coin', 'the past tense of be'], answer: '在高处', explain: '对的是「在高处」。' },
      { id: 'aloft.q3', senseId: 'aloft.s1', errorType: 'grammar', type: '词义选择', prompt: 'aloft 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'aloft.q4', senseId: 'aloft.s1', errorType: 'meaning', type: '词源', prompt: '记 aloft 时，下面哪句更稳妥？', options: ['先锁住「在高处」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在高处」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在高处'] },
  });

  D('alone', {
    etymology: {
      origin: 'all + one。只剩一个。',
      prefix: null,
      root: { text: 'alone', gloss: '单独的' },
      suffix: null,
      history: [
        { label: 'alone', text: 'all + one。只剩一个。' },
        { label: '现在', text: '核心用法是：单独的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：单独的。',
      mnemonic: '看到 alone，先说出「单独的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：单独的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alone even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得单独的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alone.s1', en: 'They needed a alone answer, not a long speech.', zh: '他们要的是单独的的答复，不是长篇发言。', structure: 'alone / 在句中表示 / 单独的', grammar: 'adjective 用法，围绕「单独的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alone.', right: 'The news is alone.', reason: 'news 作主语时动词用单数。形容词 alone 放在系动词后面。', rule: '先确定 alone 是adjective，再套「单独的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alone.q1', senseId: 'alone.s1', errorType: 'meaning', type: '词义选择', prompt: '「alone」在本条的核心意思是：', options: ['单独的', '完全相反的意思', '与本词无关的语法术语'], answer: '单独的', explain: 'alone：单独的。' },
      { id: 'alone.q2', senseId: 'alone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alone?', options: ['单独的', 'a kind of ancient coin', 'the past tense of be'], answer: '单独的', explain: '对的是「单独的」。' },
      { id: 'alone.q3', senseId: 'alone.s1', errorType: 'grammar', type: '词义选择', prompt: 'alone 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alone.q4', senseId: 'alone.s1', errorType: 'meaning', type: '词源', prompt: '记 alone 时，下面哪句更稳妥？', options: ['先锁住「单独的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「单独的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['单独的'] },
  });

  D('along', {
    etymology: {
      origin: '古英语 andlang「顺着长度」。',
      prefix: null,
      root: { text: 'along', gloss: '沿着' },
      suffix: null,
      history: [
        { label: 'along', text: '古英语 andlang「顺着长度」。' },
        { label: '现在', text: '核心用法是：沿着。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：沿着。',
      mnemonic: '看到 along，先说出「沿着」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：沿着。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "along" and asked what it does in the sentence.', chinese: '老师在「along」下面划了线，问它在句中起什么作用。它表示沿着。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'along.s1', en: 'In the margin she wrote "along" so the reader would not miss that phrase.', zh: '她在页边写下「along」，免得读者漏掉这个说法。意思是沿着。', structure: 'along / 在句中表示 / 沿着', grammar: 'preposition 用法，围绕「沿着」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated along word by word and lost the meaning.', right: 'He kept "along" as one phrase meaning 沿着.', reason: '「along」是固定说法，拆开容易翻错。', rule: '先确定 along 是preposition，再套「沿着」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'along.q1', senseId: 'along.s1', errorType: 'meaning', type: '词义选择', prompt: '「along」在本条的核心意思是：', options: ['沿着', '完全相反的意思', '与本词无关的语法术语'], answer: '沿着', explain: 'along：沿着。' },
      { id: 'along.q2', senseId: 'along.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches along?', options: ['沿着', 'a kind of ancient coin', 'the past tense of be'], answer: '沿着', explain: '对的是「沿着」。' },
      { id: 'along.q3', senseId: 'along.s1', errorType: 'grammar', type: '词义选择', prompt: 'along 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'along.q4', senseId: 'along.s1', errorType: 'meaning', type: '词源', prompt: '记 along 时，下面哪句更稳妥？', options: ['先锁住「沿着」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「沿着」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['沿着'] },
  });

  D('alongside', {
    etymology: {
      origin: '现代英语常用词「alongside」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alongside', gloss: '在……旁边' },
      suffix: null,
      history: [
        { label: 'alongside', text: '现代英语常用词「alongside」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：在……旁边。' },
      ],
      formationLogic: '核心义：在……旁边。',
      mnemonic: '看到 alongside，先说出「在……旁边」，再放进一句自己的话。',
      note: '核心义：在……旁边。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "alongside" and asked what it does in the sentence.', chinese: '老师在「alongside」下面划了线，问它在句中起什么作用。它表示在……旁边。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alongside.s1', en: 'In the margin she wrote "alongside" so the reader would not miss that phrase.', zh: '她在页边写下「alongside」，免得读者漏掉这个说法。意思是在……旁边。', structure: 'alongside / 在句中表示 / 在……旁边', grammar: 'preposition 用法，围绕「在……旁边」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated alongside word by word and lost the meaning.', right: 'He kept "alongside" as one phrase meaning 在……旁边.', reason: '「alongside」是固定说法，拆开容易翻错。', rule: '先确定 alongside 是preposition，再套「在……旁边」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alongside.q1', senseId: 'alongside.s1', errorType: 'meaning', type: '词义选择', prompt: '「alongside」在本条的核心意思是：', options: ['在……旁边', '完全相反的意思', '与本词无关的语法术语'], answer: '在……旁边', explain: 'alongside：在……旁边。' },
      { id: 'alongside.q2', senseId: 'alongside.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alongside?', options: ['在……旁边', 'a kind of ancient coin', 'the past tense of be'], answer: '在……旁边', explain: '对的是「在……旁边」。' },
      { id: 'alongside.q3', senseId: 'alongside.s1', errorType: 'grammar', type: '词义选择', prompt: 'alongside 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'alongside.q4', senseId: 'alongside.s1', errorType: 'meaning', type: '词源', prompt: '记 alongside 时，下面哪句更稳妥？', options: ['先锁住「在……旁边」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在……旁边」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在……旁边'] },
  });

  D('aloof', {
    etymology: {
      origin: '现代英语常用词「aloof」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aloof', gloss: '冷淡的' },
      suffix: null,
      history: [
        { label: 'aloof', text: '现代英语常用词「aloof」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：冷淡的。' },
      ],
      formationLogic: '核心义：冷淡的。',
      mnemonic: '看到 aloof，先说出「冷淡的」，再放进一句自己的话。',
      note: '核心义：冷淡的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked aloof even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得冷淡的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aloof.s1', en: 'They needed a aloof answer, not a long speech.', zh: '他们要的是冷淡的的答复，不是长篇发言。', structure: 'aloof / 在句中表示 / 冷淡的', grammar: 'adjective 用法，围绕「冷淡的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are aloof.', right: 'The news is aloof.', reason: 'news 作主语时动词用单数。形容词 aloof 放在系动词后面。', rule: '先确定 aloof 是adjective，再套「冷淡的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aloof.q1', senseId: 'aloof.s1', errorType: 'meaning', type: '词义选择', prompt: '「aloof」在本条的核心意思是：', options: ['冷淡的', '完全相反的意思', '与本词无关的语法术语'], answer: '冷淡的', explain: 'aloof：冷淡的。' },
      { id: 'aloof.q2', senseId: 'aloof.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aloof?', options: ['冷淡的', 'a kind of ancient coin', 'the past tense of be'], answer: '冷淡的', explain: '对的是「冷淡的」。' },
      { id: 'aloof.q3', senseId: 'aloof.s1', errorType: 'grammar', type: '词义选择', prompt: 'aloof 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'aloof.q4', senseId: 'aloof.s1', errorType: 'meaning', type: '词源', prompt: '记 aloof 时，下面哪句更稳妥？', options: ['先锁住「冷淡的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「冷淡的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冷淡的'] },
  });

  D('aloud', {
    etymology: {
      origin: 'a- + loud。出声，不是默读。',
      prefix: null,
      root: { text: 'aloud', gloss: '出声地' },
      suffix: null,
      history: [
        { label: 'aloud', text: 'a- + loud。出声，不是默读。' },
        { label: '现在', text: '核心用法是：出声地。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：出声地。',
      mnemonic: '看到 aloud，先说出「出声地」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：出声地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule aloud, and the class finally followed it.', chinese: '她把规则讲得让人明白（出声地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aloud.s1', en: 'He nodded aloud and went back to his notes.', zh: '他出声地地点了点头，又回去看笔记。', structure: 'aloud / 在句中表示 / 出声地', grammar: 'adverb 用法，围绕「出声地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very aloudly.', right: 'She spoke aloud.', reason: 'aloud 已经是副词，不要再加 -ly。', rule: '先确定 aloud 是adverb，再套「出声地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aloud.q1', senseId: 'aloud.s1', errorType: 'meaning', type: '词义选择', prompt: '「aloud」在本条的核心意思是：', options: ['出声地', '完全相反的意思', '与本词无关的语法术语'], answer: '出声地', explain: 'aloud：出声地。' },
      { id: 'aloud.q2', senseId: 'aloud.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aloud?', options: ['出声地', 'a kind of ancient coin', 'the past tense of be'], answer: '出声地', explain: '对的是「出声地」。' },
      { id: 'aloud.q3', senseId: 'aloud.s1', errorType: 'grammar', type: '词义选择', prompt: 'aloud 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'aloud.q4', senseId: 'aloud.s1', errorType: 'meaning', type: '词源', prompt: '记 aloud 时，下面哪句更稳妥？', options: ['先锁住「出声地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「出声地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['出声地'] },
  });

  D('alphabet', {
    etymology: {
      origin: '希腊语 alpha + beta，字母表的前两个字母。',
      prefix: null,
      root: { text: 'alphabet', gloss: '字母表' },
      suffix: null,
      history: [
        { label: 'alphabet', text: '希腊语 alpha + beta，字母表的前两个字母。' },
        { label: '现在', text: '核心用法是：字母表。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：字母表。',
      mnemonic: '看到 alphabet，先说出「字母表」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：字母表。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alphabet.', chinese: '这一章反复回到同一个点：字母表。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alphabet.s1', en: 'Without that alphabet, the story would be hard to follow.', zh: '没有这个字母表，故事会很难读下去。', structure: 'alphabet / 在句中表示 / 字母表', grammar: 'noun 用法，围绕「字母表」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alphabet.', right: 'He gave me a lot of advice about the alphabet.', reason: 'advice 不可数。名词 alphabet 的单复数也要按词典词形来，不要自造。', rule: '先确定 alphabet 是noun，再套「字母表」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alphabet.q1', senseId: 'alphabet.s1', errorType: 'meaning', type: '词义选择', prompt: '「alphabet」在本条的核心意思是：', options: ['字母表', '完全相反的意思', '与本词无关的语法术语'], answer: '字母表', explain: 'alphabet：字母表。' },
      { id: 'alphabet.q2', senseId: 'alphabet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alphabet?', options: ['字母表', 'a kind of ancient coin', 'the past tense of be'], answer: '字母表', explain: '对的是「字母表」。' },
      { id: 'alphabet.q3', senseId: 'alphabet.s1', errorType: 'grammar', type: '词义选择', prompt: 'alphabet 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alphabet.q4', senseId: 'alphabet.s1', errorType: 'meaning', type: '词源', prompt: '记 alphabet 时，下面哪句更稳妥？', options: ['先锁住「字母表」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「字母表」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['字母表'] },
  });

  D('alphabetical', {
    etymology: {
      origin: '英语派生：alphabetic 加上词尾，构成与「按字母顺序的」相应的词类。',
      prefix: null,
      root: { text: 'alphabetic', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alphabetical', text: '英语派生：alphabetic 加上词尾，构成与「按字母顺序的」相应的词类。' },
        { label: '现在', text: '核心用法是：按字母顺序的。' },
      ],
      formationLogic: '先认词干 alphabetic，再看词尾决定词性。',
      mnemonic: '看到 alphabetical，先说出「按字母顺序的」，再放进一句自己的话。',
      note: '先认词干 alphabetic，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked alphabetical even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得按字母顺序的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alphabetical.s1', en: 'They needed a alphabetical answer, not a long speech.', zh: '他们要的是按字母顺序的的答复，不是长篇发言。', structure: 'alphabetical / 在句中表示 / 按字母顺序的', grammar: 'adjective 用法，围绕「按字母顺序的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are alphabetical.', right: 'The news is alphabetical.', reason: 'news 作主语时动词用单数。形容词 alphabetical 放在系动词后面。', rule: '先确定 alphabetical 是adjective，再套「按字母顺序的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alphabetical.q1', senseId: 'alphabetical.s1', errorType: 'meaning', type: '词义选择', prompt: '「alphabetical」在本条的核心意思是：', options: ['按字母顺序的', '完全相反的意思', '与本词无关的语法术语'], answer: '按字母顺序的', explain: 'alphabetical：按字母顺序的。' },
      { id: 'alphabetical.q2', senseId: 'alphabetical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alphabetical?', options: ['按字母顺序的', 'a kind of ancient coin', 'the past tense of be'], answer: '按字母顺序的', explain: '对的是「按字母顺序的」。' },
      { id: 'alphabetical.q3', senseId: 'alphabetical.s1', errorType: 'grammar', type: '词义选择', prompt: 'alphabetical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'alphabetical.q4', senseId: 'alphabetical.s1', errorType: 'meaning', type: '词源', prompt: '记 alphabetical 时，下面哪句更稳妥？', options: ['先锁住「按字母顺序的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「按字母顺序的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['按字母顺序的'] },
  });

  D('alphabetically', {
    etymology: {
      origin: '英语派生：alphabetical 加上词尾，构成与「按字母顺序地」相应的词类。',
      prefix: null,
      root: { text: 'alphabetical', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alphabetically', text: '英语派生：alphabetical 加上词尾，构成与「按字母顺序地」相应的词类。' },
        { label: '现在', text: '核心用法是：按字母顺序地。' },
      ],
      formationLogic: '先认词干 alphabetical，再看词尾决定词性。',
      mnemonic: '看到 alphabetically，先说出「按字母顺序地」，再放进一句自己的话。',
      note: '先认词干 alphabetical，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule alphabetically, and the class finally followed it.', chinese: '她把规则讲得让人明白（按字母顺序地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alphabetically.s1', en: 'He nodded alphabetically and went back to his notes.', zh: '他按字母顺序地地点了点头，又回去看笔记。', structure: 'alphabetically / 在句中表示 / 按字母顺序地', grammar: 'adverb 用法，围绕「按字母顺序地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very alphabeticallyly.', right: 'She spoke alphabetically.', reason: 'alphabetically 已经是副词，不要再加 -ly。', rule: '先确定 alphabetically 是adverb，再套「按字母顺序地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alphabetically.q1', senseId: 'alphabetically.s1', errorType: 'meaning', type: '词义选择', prompt: '「alphabetically」在本条的核心意思是：', options: ['按字母顺序地', '完全相反的意思', '与本词无关的语法术语'], answer: '按字母顺序地', explain: 'alphabetically：按字母顺序地。' },
      { id: 'alphabetically.q2', senseId: 'alphabetically.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alphabetically?', options: ['按字母顺序地', 'a kind of ancient coin', 'the past tense of be'], answer: '按字母顺序地', explain: '对的是「按字母顺序地」。' },
      { id: 'alphabetically.q3', senseId: 'alphabetically.s1', errorType: 'grammar', type: '词义选择', prompt: 'alphabetically 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'alphabetically.q4', senseId: 'alphabetically.s1', errorType: 'meaning', type: '词源', prompt: '记 alphabetically 时，下面哪句更稳妥？', options: ['先锁住「按字母顺序地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「按字母顺序地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['按字母顺序地'] },
  });

  D('already', {
    etymology: {
      origin: 'all + ready。早就准备好了。',
      prefix: null,
      root: { text: 'already', gloss: '已经' },
      suffix: null,
      history: [
        { label: 'already', text: 'all + ready。早就准备好了。' },
        { label: '现在', text: '核心用法是：已经。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：已经。',
      mnemonic: '看到 already，先说出「已经」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：已经。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule already, and the class finally followed it.', chinese: '她把规则讲得让人明白（已经），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'already.s1', en: 'He nodded already and went back to his notes.', zh: '他已经地点了点头，又回去看笔记。', structure: 'already / 在句中表示 / 已经', grammar: 'adverb 用法，围绕「已经」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very alreadyly.', right: 'She spoke already.', reason: 'already 已经是副词，不要再加 -ly。', rule: '先确定 already 是adverb，再套「已经」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'already.q1', senseId: 'already.s1', errorType: 'meaning', type: '词义选择', prompt: '「already」在本条的核心意思是：', options: ['已经', '完全相反的意思', '与本词无关的语法术语'], answer: '已经', explain: 'already：已经。' },
      { id: 'already.q2', senseId: 'already.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches already?', options: ['已经', 'a kind of ancient coin', 'the past tense of be'], answer: '已经', explain: '对的是「已经」。' },
      { id: 'already.q3', senseId: 'already.s1', errorType: 'grammar', type: '词义选择', prompt: 'already 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'already.q4', senseId: 'already.s1', errorType: 'meaning', type: '词源', prompt: '记 already 时，下面哪句更稳妥？', options: ['先锁住「已经」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「已经」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['已经'] },
  });

  D('also', {
    etymology: {
      origin: '古英语 eallswa「完全如此、也」。',
      prefix: null,
      root: { text: 'also', gloss: '也' },
      suffix: null,
      history: [
        { label: 'also', text: '古英语 eallswa「完全如此、也」。' },
        { label: '现在', text: '核心用法是：也。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：也。',
      mnemonic: '看到 also，先说出「也」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：也。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule also, and the class finally followed it.', chinese: '她把规则讲得让人明白（也），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'also.s1', en: 'He nodded also and went back to his notes.', zh: '他也地点了点头，又回去看笔记。', structure: 'also / 在句中表示 / 也', grammar: 'adverb 用法，围绕「也」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very alsoly.', right: 'She spoke also.', reason: 'also 已经是副词，不要再加 -ly。', rule: '先确定 also 是adverb，再套「也」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'also.q1', senseId: 'also.s1', errorType: 'meaning', type: '词义选择', prompt: '「also」在本条的核心意思是：', options: ['也', '完全相反的意思', '与本词无关的语法术语'], answer: '也', explain: 'also：也。' },
      { id: 'also.q2', senseId: 'also.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches also?', options: ['也', 'a kind of ancient coin', 'the past tense of be'], answer: '也', explain: '对的是「也」。' },
      { id: 'also.q3', senseId: 'also.s1', errorType: 'grammar', type: '词义选择', prompt: 'also 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'also.q4', senseId: 'also.s1', errorType: 'meaning', type: '词源', prompt: '记 also 时，下面哪句更稳妥？', options: ['先锁住「也」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「也」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['也'] },
  });

  D('alter', {
    etymology: {
      origin: '拉丁语 alterare，alter「另一个」。变成另一个样子。',
      prefix: null,
      root: { text: 'alter', gloss: '改变' },
      suffix: null,
      history: [
        { label: 'alter', text: '拉丁语 alterare，alter「另一个」。变成另一个样子。' },
        { label: '现在', text: '核心用法是：改变。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：改变。',
      mnemonic: '看到 alter，先说出「改变」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：改变。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to alter before the office closed.', chinese: '小组得在办公室关门前完成这件事：改变。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alter.s1', en: 'Nobody wanted to alter, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 alter 是「改变」。', structure: 'alter / 在句中表示 / 改变', grammar: 'verb 用法，围绕「改变」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She altered the form yesterday without checking the real past form.', right: 'Look up the past form of "alter" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 alter 是verb，再套「改变」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alter.q1', senseId: 'alter.s1', errorType: 'meaning', type: '词义选择', prompt: '「alter」在本条的核心意思是：', options: ['改变', '完全相反的意思', '与本词无关的语法术语'], answer: '改变', explain: 'alter：改变。' },
      { id: 'alter.q2', senseId: 'alter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alter?', options: ['改变', 'a kind of ancient coin', 'the past tense of be'], answer: '改变', explain: '对的是「改变」。' },
      { id: 'alter.q3', senseId: 'alter.s1', errorType: 'grammar', type: '词义选择', prompt: 'alter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'alter.q4', senseId: 'alter.s1', errorType: 'meaning', type: '词源', prompt: '记 alter 时，下面哪句更稳妥？', options: ['先锁住「改变」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「改变」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['改变'] },
  });

  D('alteration', {
    etymology: {
      origin: '英语派生：altera 加上词尾，构成与「改变」相应的词类。',
      prefix: null,
      root: { text: 'altera', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alteration', text: '英语派生：altera 加上词尾，构成与「改变」相应的词类。' },
        { label: '现在', text: '核心用法是：改变。' },
      ],
      formationLogic: '先认词干 altera，再看词尾决定词性。',
      mnemonic: '看到 alteration，先说出「改变」，再放进一句自己的话。',
      note: '先认词干 altera，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alteration.', chinese: '这一章反复回到同一个点：改变。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alteration.s1', en: 'Without that alteration, the story would be hard to follow.', zh: '没有这个改变，故事会很难读下去。', structure: 'alteration / 在句中表示 / 改变', grammar: 'noun 用法，围绕「改变」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alteration.', right: 'He gave me a lot of advice about the alteration.', reason: 'advice 不可数。名词 alteration 的单复数也要按词典词形来，不要自造。', rule: '先确定 alteration 是noun，再套「改变」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alteration.q1', senseId: 'alteration.s1', errorType: 'meaning', type: '词义选择', prompt: '「alteration」在本条的核心意思是：', options: ['改变', '完全相反的意思', '与本词无关的语法术语'], answer: '改变', explain: 'alteration：改变。' },
      { id: 'alteration.q2', senseId: 'alteration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alteration?', options: ['改变', 'a kind of ancient coin', 'the past tense of be'], answer: '改变', explain: '对的是「改变」。' },
      { id: 'alteration.q3', senseId: 'alteration.s1', errorType: 'grammar', type: '词义选择', prompt: 'alteration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alteration.q4', senseId: 'alteration.s1', errorType: 'meaning', type: '词源', prompt: '记 alteration 时，下面哪句更稳妥？', options: ['先锁住「改变」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「改变」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['改变'] },
  });

  D('alternate', {
    etymology: {
      origin: '现代英语常用词「alternate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alternate', gloss: '交替' },
      suffix: null,
      history: [
        { label: 'alternate', text: '现代英语常用词「alternate」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：交替。' },
      ],
      formationLogic: '核心义：交替。',
      mnemonic: '看到 alternate，先说出「交替」，再放进一句自己的话。',
      note: '核心义：交替。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to alternate before the office closed.', chinese: '小组得在办公室关门前完成这件事：交替。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alternate.s1', en: 'Nobody wanted to alternate, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 alternate 是「交替」。', structure: 'alternate / 在句中表示 / 交替', grammar: 'verb 用法，围绕「交替」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She alternateed the form yesterday without checking the real past form.', right: 'Look up the past form of "alternate" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 alternate 是verb，再套「交替」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alternate.q1', senseId: 'alternate.s1', errorType: 'meaning', type: '词义选择', prompt: '「alternate」在本条的核心意思是：', options: ['交替', '完全相反的意思', '与本词无关的语法术语'], answer: '交替', explain: 'alternate：交替。' },
      { id: 'alternate.q2', senseId: 'alternate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alternate?', options: ['交替', 'a kind of ancient coin', 'the past tense of be'], answer: '交替', explain: '对的是「交替」。' },
      { id: 'alternate.q3', senseId: 'alternate.s1', errorType: 'grammar', type: '词义选择', prompt: 'alternate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'alternate.q4', senseId: 'alternate.s1', errorType: 'meaning', type: '词源', prompt: '记 alternate 时，下面哪句更稳妥？', options: ['先锁住「交替」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「交替」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['交替'] },
  });

  D('alternative', {
    etymology: {
      origin: '拉丁语 alternare「轮流」，alter「另一」。',
      prefix: null,
      root: { text: 'alternative', gloss: '替代方案' },
      suffix: null,
      history: [
        { label: 'alternative', text: '拉丁语 alternare「轮流」，alter「另一」。' },
        { label: '现在', text: '核心用法是：替代方案。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：替代方案。',
      mnemonic: '看到 alternative，先说出「替代方案」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：替代方案。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alternative.', chinese: '这一章反复回到同一个点：替代方案。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alternative.s1', en: 'Without that alternative, the story would be hard to follow.', zh: '没有这个替代方案，故事会很难读下去。', structure: 'alternative / 在句中表示 / 替代方案', grammar: 'noun 用法，围绕「替代方案」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alternative.', right: 'He gave me a lot of advice about the alternative.', reason: 'advice 不可数。名词 alternative 的单复数也要按词典词形来，不要自造。', rule: '先确定 alternative 是noun，再套「替代方案」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alternative.q1', senseId: 'alternative.s1', errorType: 'meaning', type: '词义选择', prompt: '「alternative」在本条的核心意思是：', options: ['替代方案', '完全相反的意思', '与本词无关的语法术语'], answer: '替代方案', explain: 'alternative：替代方案。' },
      { id: 'alternative.q2', senseId: 'alternative.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alternative?', options: ['替代方案', 'a kind of ancient coin', 'the past tense of be'], answer: '替代方案', explain: '对的是「替代方案」。' },
      { id: 'alternative.q3', senseId: 'alternative.s1', errorType: 'grammar', type: '词义选择', prompt: 'alternative 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alternative.q4', senseId: 'alternative.s1', errorType: 'meaning', type: '词源', prompt: '记 alternative 时，下面哪句更稳妥？', options: ['先锁住「替代方案」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「替代方案」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['替代方案'] },
  });

  D('alternatively', {
    etymology: {
      origin: '英语派生：alternative 加上词尾，构成与「或者」相应的词类。',
      prefix: null,
      root: { text: 'alternative', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'alternatively', text: '英语派生：alternative 加上词尾，构成与「或者」相应的词类。' },
        { label: '现在', text: '核心用法是：或者。' },
      ],
      formationLogic: '先认词干 alternative，再看词尾决定词性。',
      mnemonic: '看到 alternatively，先说出「或者」，再放进一句自己的话。',
      note: '先认词干 alternative，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule alternatively, and the class finally followed it.', chinese: '她把规则讲得让人明白（或者），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alternatively.s1', en: 'He nodded alternatively and went back to his notes.', zh: '他或者地点了点头，又回去看笔记。', structure: 'alternatively / 在句中表示 / 或者', grammar: 'adverb 用法，围绕「或者」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very alternativelyly.', right: 'She spoke alternatively.', reason: 'alternatively 已经是副词，不要再加 -ly。', rule: '先确定 alternatively 是adverb，再套「或者」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alternatively.q1', senseId: 'alternatively.s1', errorType: 'meaning', type: '词义选择', prompt: '「alternatively」在本条的核心意思是：', options: ['或者', '完全相反的意思', '与本词无关的语法术语'], answer: '或者', explain: 'alternatively：或者。' },
      { id: 'alternatively.q2', senseId: 'alternatively.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alternatively?', options: ['或者', 'a kind of ancient coin', 'the past tense of be'], answer: '或者', explain: '对的是「或者」。' },
      { id: 'alternatively.q3', senseId: 'alternatively.s1', errorType: 'grammar', type: '词义选择', prompt: 'alternatively 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'alternatively.q4', senseId: 'alternatively.s1', errorType: 'meaning', type: '词源', prompt: '记 alternatively 时，下面哪句更稳妥？', options: ['先锁住「或者」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「或者」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['或者'] },
  });

  D('although', {
    etymology: {
      origin: 'all + though。虽然。',
      prefix: null,
      root: { text: 'although', gloss: '虽然' },
      suffix: null,
      history: [
        { label: 'although', text: 'all + though。虽然。' },
        { label: '现在', text: '核心用法是：虽然。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：虽然。',
      mnemonic: '看到 although，先说出「虽然」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：虽然。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "although" and asked what it does in the sentence.', chinese: '老师在「although」下面划了线，问它在句中起什么作用。它表示虽然。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'although.s1', en: 'In the margin she wrote "although" so the reader would not miss that phrase.', zh: '她在页边写下「although」，免得读者漏掉这个说法。意思是虽然。', structure: 'although / 在句中表示 / 虽然', grammar: 'conjunction 用法，围绕「虽然」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated although word by word and lost the meaning.', right: 'He kept "although" as one phrase meaning 虽然.', reason: '「although」是固定说法，拆开容易翻错。', rule: '先确定 although 是conjunction，再套「虽然」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'although.q1', senseId: 'although.s1', errorType: 'meaning', type: '词义选择', prompt: '「although」在本条的核心意思是：', options: ['虽然', '完全相反的意思', '与本词无关的语法术语'], answer: '虽然', explain: 'although：虽然。' },
      { id: 'although.q2', senseId: 'although.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches although?', options: ['虽然', 'a kind of ancient coin', 'the past tense of be'], answer: '虽然', explain: '对的是「虽然」。' },
      { id: 'although.q3', senseId: 'although.s1', errorType: 'grammar', type: '词义选择', prompt: 'although 的词性（本条）更接近：', options: ['conjunction', '只能作感叹词', '只能作数词'], answer: 'conjunction', explain: '本条按 conjunction 来用。' },
      { id: 'although.q4', senseId: 'although.s1', errorType: 'meaning', type: '词源', prompt: '记 although 时，下面哪句更稳妥？', options: ['先锁住「虽然」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「虽然」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['虽然'] },
  });

  D('altitude', {
    etymology: {
      origin: '拉丁语 altitudo，altus「高」。',
      prefix: null,
      root: { text: 'altitude', gloss: '高度' },
      suffix: null,
      history: [
        { label: 'altitude', text: '拉丁语 altitudo，altus「高」。' },
        { label: '现在', text: '核心用法是：高度。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：高度。',
      mnemonic: '看到 altitude，先说出「高度」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：高度。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one altitude.', chinese: '这一章反复回到同一个点：高度。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'altitude.s1', en: 'Without that altitude, the story would be hard to follow.', zh: '没有这个高度，故事会很难读下去。', structure: 'altitude / 在句中表示 / 高度', grammar: 'noun 用法，围绕「高度」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the altitude.', right: 'He gave me a lot of advice about the altitude.', reason: 'advice 不可数。名词 altitude 的单复数也要按词典词形来，不要自造。', rule: '先确定 altitude 是noun，再套「高度」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'altitude.q1', senseId: 'altitude.s1', errorType: 'meaning', type: '词义选择', prompt: '「altitude」在本条的核心意思是：', options: ['高度', '完全相反的意思', '与本词无关的语法术语'], answer: '高度', explain: 'altitude：高度。' },
      { id: 'altitude.q2', senseId: 'altitude.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches altitude?', options: ['高度', 'a kind of ancient coin', 'the past tense of be'], answer: '高度', explain: '对的是「高度」。' },
      { id: 'altitude.q3', senseId: 'altitude.s1', errorType: 'grammar', type: '词义选择', prompt: 'altitude 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'altitude.q4', senseId: 'altitude.s1', errorType: 'meaning', type: '词源', prompt: '记 altitude 时，下面哪句更稳妥？', options: ['先锁住「高度」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「高度」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['高度'] },
  });

  D('altogether', {
    etymology: {
      origin: 'all + together。全部在一起，所以是「完全」。',
      prefix: null,
      root: { text: 'altogether', gloss: '总共' },
      suffix: null,
      history: [
        { label: 'altogether', text: 'all + together。全部在一起，所以是「完全」。' },
        { label: '现在', text: '核心用法是：总共。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：总共。',
      mnemonic: '看到 altogether，先说出「总共」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：总共。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule altogether, and the class finally followed it.', chinese: '她把规则讲得让人明白（总共），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'altogether.s1', en: 'He nodded altogether and went back to his notes.', zh: '他总共地点了点头，又回去看笔记。', structure: 'altogether / 在句中表示 / 总共', grammar: 'adverb 用法，围绕「总共」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very altogetherly.', right: 'She spoke altogether.', reason: 'altogether 已经是副词，不要再加 -ly。', rule: '先确定 altogether 是adverb，再套「总共」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'altogether.q1', senseId: 'altogether.s1', errorType: 'meaning', type: '词义选择', prompt: '「altogether」在本条的核心意思是：', options: ['总共', '完全相反的意思', '与本词无关的语法术语'], answer: '总共', explain: 'altogether：总共。' },
      { id: 'altogether.q2', senseId: 'altogether.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches altogether?', options: ['总共', 'a kind of ancient coin', 'the past tense of be'], answer: '总共', explain: '对的是「总共」。' },
      { id: 'altogether.q3', senseId: 'altogether.s1', errorType: 'grammar', type: '词义选择', prompt: 'altogether 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'altogether.q4', senseId: 'altogether.s1', errorType: 'meaning', type: '词源', prompt: '记 altogether 时，下面哪句更稳妥？', options: ['先锁住「总共」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「总共」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['总共'] },
  });

  D('aluminum', {
    etymology: {
      origin: '现代英语常用词「aluminum」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'aluminum', gloss: '铝' },
      suffix: null,
      history: [
        { label: 'aluminum', text: '现代英语常用词「aluminum」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：铝。' },
      ],
      formationLogic: '核心义：铝。',
      mnemonic: '看到 aluminum，先说出「铝」，再放进一句自己的话。',
      note: '核心义：铝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one aluminum.', chinese: '这一章反复回到同一个点：铝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'aluminum.s1', en: 'Without that aluminum, the story would be hard to follow.', zh: '没有这个铝，故事会很难读下去。', structure: 'aluminum / 在句中表示 / 铝', grammar: 'noun 用法，围绕「铝」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the aluminum.', right: 'He gave me a lot of advice about the aluminum.', reason: 'advice 不可数。名词 aluminum 的单复数也要按词典词形来，不要自造。', rule: '先确定 aluminum 是noun，再套「铝」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'aluminum.q1', senseId: 'aluminum.s1', errorType: 'meaning', type: '词义选择', prompt: '「aluminum」在本条的核心意思是：', options: ['铝', '完全相反的意思', '与本词无关的语法术语'], answer: '铝', explain: 'aluminum：铝。' },
      { id: 'aluminum.q2', senseId: 'aluminum.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches aluminum?', options: ['铝', 'a kind of ancient coin', 'the past tense of be'], answer: '铝', explain: '对的是「铝」。' },
      { id: 'aluminum.q3', senseId: 'aluminum.s1', errorType: 'grammar', type: '词义选择', prompt: 'aluminum 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'aluminum.q4', senseId: 'aluminum.s1', errorType: 'meaning', type: '词源', prompt: '记 aluminum 时，下面哪句更稳妥？', options: ['先锁住「铝」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「铝」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['铝'] },
  });

  D('alumnus', {
    etymology: {
      origin: '现代英语常用词「alumnus」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'alumnus', gloss: '（男）校友' },
      suffix: null,
      history: [
        { label: 'alumnus', text: '现代英语常用词「alumnus」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：（男）校友。' },
      ],
      formationLogic: '核心义：（男）校友。',
      mnemonic: '看到 alumnus，先说出「（男）校友」，再放进一句自己的话。',
      note: '核心义：（男）校友。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one alumnus.', chinese: '这一章反复回到同一个点：（男）校友。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'alumnus.s1', en: 'Without that alumnus, the story would be hard to follow.', zh: '没有这个（男）校友，故事会很难读下去。', structure: 'alumnus / 在句中表示 / （男）校友', grammar: 'noun 用法，围绕「（男）校友」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the alumnus.', right: 'He gave me a lot of advice about the alumnus.', reason: 'advice 不可数。名词 alumnus 的单复数也要按词典词形来，不要自造。', rule: '先确定 alumnus 是noun，再套「（男）校友」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'alumnus.q1', senseId: 'alumnus.s1', errorType: 'meaning', type: '词义选择', prompt: '「alumnus」在本条的核心意思是：', options: ['（男）校友', '完全相反的意思', '与本词无关的语法术语'], answer: '（男）校友', explain: 'alumnus：（男）校友。' },
      { id: 'alumnus.q2', senseId: 'alumnus.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches alumnus?', options: ['（男）校友', 'a kind of ancient coin', 'the past tense of be'], answer: '（男）校友', explain: '对的是「（男）校友」。' },
      { id: 'alumnus.q3', senseId: 'alumnus.s1', errorType: 'grammar', type: '词义选择', prompt: 'alumnus 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'alumnus.q4', senseId: 'alumnus.s1', errorType: 'meaning', type: '词源', prompt: '记 alumnus 时，下面哪句更稳妥？', options: ['先锁住「（男）校友」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「（男）校友」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（男）校友'] },
  });

  D('always', {
    etymology: {
      origin: '古英语 ealne weg「全程、一直」。',
      prefix: null,
      root: { text: 'always', gloss: '总是' },
      suffix: null,
      history: [
        { label: 'always', text: '古英语 ealne weg「全程、一直」。' },
        { label: '现在', text: '核心用法是：总是。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：总是。',
      mnemonic: '看到 always，先说出「总是」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：总是。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule always, and the class finally followed it.', chinese: '她把规则讲得让人明白（总是），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'always.s1', en: 'He nodded always and went back to his notes.', zh: '他总是地点了点头，又回去看笔记。', structure: 'always / 在句中表示 / 总是', grammar: 'adverb 用法，围绕「总是」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very alwaysly.', right: 'She spoke always.', reason: 'always 已经是副词，不要再加 -ly。', rule: '先确定 always 是adverb，再套「总是」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'always.q1', senseId: 'always.s1', errorType: 'meaning', type: '词义选择', prompt: '「always」在本条的核心意思是：', options: ['总是', '完全相反的意思', '与本词无关的语法术语'], answer: '总是', explain: 'always：总是。' },
      { id: 'always.q2', senseId: 'always.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches always?', options: ['总是', 'a kind of ancient coin', 'the past tense of be'], answer: '总是', explain: '对的是「总是」。' },
      { id: 'always.q3', senseId: 'always.s1', errorType: 'grammar', type: '词义选择', prompt: 'always 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'always.q4', senseId: 'always.s1', errorType: 'meaning', type: '词源', prompt: '记 always 时，下面哪句更稳妥？', options: ['先锁住「总是」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「总是」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['总是'] },
  });

  D('am', {
    etymology: {
      origin: '现代英语常用词「am」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'am', gloss: '是（be 的第一人称单数）' },
      suffix: null,
      history: [
        { label: 'am', text: '现代英语常用词「am」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：是（be 的第一人称单数）。' },
      ],
      formationLogic: '核心义：是（be 的第一人称单数）。',
      mnemonic: '看到 am，先说出「是（be 的第一人称单数）」，再放进一句自己的话。',
      note: '核心义：是（be 的第一人称单数）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to am before the office closed.', chinese: '小组得在办公室关门前完成这件事：是（be 的第一人称单数）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'am.s1', en: 'Nobody wanted to am, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 am 是「是（be 的第一人称单数）」。', structure: 'am / 在句中表示 / 是（be 的第一人称单数）', grammar: 'verb 用法，围绕「是（be 的第一人称单数）」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She amed the form yesterday without checking the real past form.', right: 'Look up the past form of "am" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 am 是verb，再套「是（be 的第一人称单数）」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'am.q1', senseId: 'am.s1', errorType: 'meaning', type: '词义选择', prompt: '「am」在本条的核心意思是：', options: ['是（be 的第一人称单数）', '完全相反的意思', '与本词无关的语法术语'], answer: '是（be 的第一人称单数）', explain: 'am：是（be 的第一人称单数）。' },
      { id: 'am.q2', senseId: 'am.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches am?', options: ['是（be 的第一人称单数）', 'a kind of ancient coin', 'the past tense of be'], answer: '是（be 的第一人称单数）', explain: '对的是「是（be 的第一人称单数）」。' },
      { id: 'am.q3', senseId: 'am.s1', errorType: 'grammar', type: '词义选择', prompt: 'am 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'am.q4', senseId: 'am.s1', errorType: 'meaning', type: '词源', prompt: '记 am 时，下面哪句更稳妥？', options: ['先锁住「是（be 的第一人称单数）」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「是（be 的第一人称单数）」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['是（be 的第一人称单数）'] },
  });

  D('amass', {
    etymology: {
      origin: '现代英语常用词「amass」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amass', gloss: '积聚' },
      suffix: null,
      history: [
        { label: 'amass', text: '现代英语常用词「amass」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：积聚。' },
      ],
      formationLogic: '核心义：积聚。',
      mnemonic: '看到 amass，先说出「积聚」，再放进一句自己的话。',
      note: '核心义：积聚。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to amass before the office closed.', chinese: '小组得在办公室关门前完成这件事：积聚。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amass.s1', en: 'Nobody wanted to amass, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 amass 是「积聚」。', structure: 'amass / 在句中表示 / 积聚', grammar: 'verb 用法，围绕「积聚」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She amassed the form yesterday without checking the real past form.', right: 'Look up the past form of "amass" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 amass 是verb，再套「积聚」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amass.q1', senseId: 'amass.s1', errorType: 'meaning', type: '词义选择', prompt: '「amass」在本条的核心意思是：', options: ['积聚', '完全相反的意思', '与本词无关的语法术语'], answer: '积聚', explain: 'amass：积聚。' },
      { id: 'amass.q2', senseId: 'amass.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amass?', options: ['积聚', 'a kind of ancient coin', 'the past tense of be'], answer: '积聚', explain: '对的是「积聚」。' },
      { id: 'amass.q3', senseId: 'amass.s1', errorType: 'grammar', type: '词义选择', prompt: 'amass 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amass.q4', senseId: 'amass.s1', errorType: 'meaning', type: '词源', prompt: '记 amass 时，下面哪句更稳妥？', options: ['先锁住「积聚」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「积聚」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['积聚'] },
  });

  D('amateur', {
    etymology: {
      origin: '法语 amateur「爱好者」，拉丁语 amator，amare「爱」。',
      prefix: null,
      root: { text: 'amateur', gloss: '业余爱好者' },
      suffix: null,
      history: [
        { label: 'amateur', text: '法语 amateur「爱好者」，拉丁语 amator，amare「爱」。' },
        { label: '现在', text: '核心用法是：业余爱好者。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：业余爱好者。',
      mnemonic: '看到 amateur，先说出「业余爱好者」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：业余爱好者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amateur.', chinese: '这一章反复回到同一个点：业余爱好者。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amateur.s1', en: 'Without that amateur, the story would be hard to follow.', zh: '没有这个业余爱好者，故事会很难读下去。', structure: 'amateur / 在句中表示 / 业余爱好者', grammar: 'noun 用法，围绕「业余爱好者」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amateur.', right: 'He gave me a lot of advice about the amateur.', reason: 'advice 不可数。名词 amateur 的单复数也要按词典词形来，不要自造。', rule: '先确定 amateur 是noun，再套「业余爱好者」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amateur.q1', senseId: 'amateur.s1', errorType: 'meaning', type: '词义选择', prompt: '「amateur」在本条的核心意思是：', options: ['业余爱好者', '完全相反的意思', '与本词无关的语法术语'], answer: '业余爱好者', explain: 'amateur：业余爱好者。' },
      { id: 'amateur.q2', senseId: 'amateur.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amateur?', options: ['业余爱好者', 'a kind of ancient coin', 'the past tense of be'], answer: '业余爱好者', explain: '对的是「业余爱好者」。' },
      { id: 'amateur.q3', senseId: 'amateur.s1', errorType: 'grammar', type: '词义选择', prompt: 'amateur 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amateur.q4', senseId: 'amateur.s1', errorType: 'meaning', type: '词源', prompt: '记 amateur 时，下面哪句更稳妥？', options: ['先锁住「业余爱好者」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「业余爱好者」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['业余爱好者'] },
  });

  D('amateurish', {
    etymology: {
      origin: '现代英语常用词「amateurish」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amateurish', gloss: '外行的' },
      suffix: null,
      history: [
        { label: 'amateurish', text: '现代英语常用词「amateurish」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：外行的。' },
      ],
      formationLogic: '核心义：外行的。',
      mnemonic: '看到 amateurish，先说出「外行的」，再放进一句自己的话。',
      note: '核心义：外行的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked amateurish even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得外行的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amateurish.s1', en: 'They needed a amateurish answer, not a long speech.', zh: '他们要的是外行的的答复，不是长篇发言。', structure: 'amateurish / 在句中表示 / 外行的', grammar: 'adjective 用法，围绕「外行的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are amateurish.', right: 'The news is amateurish.', reason: 'news 作主语时动词用单数。形容词 amateurish 放在系动词后面。', rule: '先确定 amateurish 是adjective，再套「外行的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amateurish.q1', senseId: 'amateurish.s1', errorType: 'meaning', type: '词义选择', prompt: '「amateurish」在本条的核心意思是：', options: ['外行的', '完全相反的意思', '与本词无关的语法术语'], answer: '外行的', explain: 'amateurish：外行的。' },
      { id: 'amateurish.q2', senseId: 'amateurish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amateurish?', options: ['外行的', 'a kind of ancient coin', 'the past tense of be'], answer: '外行的', explain: '对的是「外行的」。' },
      { id: 'amateurish.q3', senseId: 'amateurish.s1', errorType: 'grammar', type: '词义选择', prompt: 'amateurish 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'amateurish.q4', senseId: 'amateurish.s1', errorType: 'meaning', type: '词源', prompt: '记 amateurish 时，下面哪句更稳妥？', options: ['先锁住「外行的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「外行的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外行的'] },
  });

  D('amaze', {
    etymology: {
      origin: '古英语 amasian「使困惑」。',
      prefix: null,
      root: { text: 'amaze', gloss: '使惊奇' },
      suffix: null,
      history: [
        { label: 'amaze', text: '古英语 amasian「使困惑」。' },
        { label: '现在', text: '核心用法是：使惊奇。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：使惊奇。',
      mnemonic: '看到 amaze，先说出「使惊奇」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：使惊奇。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to amaze before the office closed.', chinese: '小组得在办公室关门前完成这件事：使惊奇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amaze.s1', en: 'Nobody wanted to amaze, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 amaze 是「使惊奇」。', structure: 'amaze / 在句中表示 / 使惊奇', grammar: 'verb 用法，围绕「使惊奇」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She amazeed the form yesterday without checking the real past form.', right: 'Look up the past form of "amaze" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 amaze 是verb，再套「使惊奇」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amaze.q1', senseId: 'amaze.s1', errorType: 'meaning', type: '词义选择', prompt: '「amaze」在本条的核心意思是：', options: ['使惊奇', '完全相反的意思', '与本词无关的语法术语'], answer: '使惊奇', explain: 'amaze：使惊奇。' },
      { id: 'amaze.q2', senseId: 'amaze.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amaze?', options: ['使惊奇', 'a kind of ancient coin', 'the past tense of be'], answer: '使惊奇', explain: '对的是「使惊奇」。' },
      { id: 'amaze.q3', senseId: 'amaze.s1', errorType: 'grammar', type: '词义选择', prompt: 'amaze 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amaze.q4', senseId: 'amaze.s1', errorType: 'meaning', type: '词源', prompt: '记 amaze 时，下面哪句更稳妥？', options: ['先锁住「使惊奇」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「使惊奇」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['使惊奇'] },
  });

  D('amazement', {
    etymology: {
      origin: '英语派生：amaze 加上词尾，构成与「惊奇」相应的词类。',
      prefix: null,
      root: { text: 'amaze', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amazement', text: '英语派生：amaze 加上词尾，构成与「惊奇」相应的词类。' },
        { label: '现在', text: '核心用法是：惊奇。' },
      ],
      formationLogic: '先认词干 amaze，再看词尾决定词性。',
      mnemonic: '看到 amazement，先说出「惊奇」，再放进一句自己的话。',
      note: '先认词干 amaze，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amazement.', chinese: '这一章反复回到同一个点：惊奇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amazement.s1', en: 'Without that amazement, the story would be hard to follow.', zh: '没有这个惊奇，故事会很难读下去。', structure: 'amazement / 在句中表示 / 惊奇', grammar: 'noun 用法，围绕「惊奇」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amazement.', right: 'He gave me a lot of advice about the amazement.', reason: 'advice 不可数。名词 amazement 的单复数也要按词典词形来，不要自造。', rule: '先确定 amazement 是noun，再套「惊奇」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amazement.q1', senseId: 'amazement.s1', errorType: 'meaning', type: '词义选择', prompt: '「amazement」在本条的核心意思是：', options: ['惊奇', '完全相反的意思', '与本词无关的语法术语'], answer: '惊奇', explain: 'amazement：惊奇。' },
      { id: 'amazement.q2', senseId: 'amazement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amazement?', options: ['惊奇', 'a kind of ancient coin', 'the past tense of be'], answer: '惊奇', explain: '对的是「惊奇」。' },
      { id: 'amazement.q3', senseId: 'amazement.s1', errorType: 'grammar', type: '词义选择', prompt: 'amazement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amazement.q4', senseId: 'amazement.s1', errorType: 'meaning', type: '词源', prompt: '记 amazement 时，下面哪句更稳妥？', options: ['先锁住「惊奇」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「惊奇」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['惊奇'] },
  });

  D('amazing', {
    etymology: {
      origin: '现代英语常用词「amazing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amazing', gloss: '令人惊异的' },
      suffix: null,
      history: [
        { label: 'amazing', text: '现代英语常用词「amazing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：令人惊异的。' },
      ],
      formationLogic: '核心义：令人惊异的。',
      mnemonic: '看到 amazing，先说出「令人惊异的」，再放进一句自己的话。',
      note: '核心义：令人惊异的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked amazing even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得令人惊异的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amazing.s1', en: 'They needed a amazing answer, not a long speech.', zh: '他们要的是令人惊异的的答复，不是长篇发言。', structure: 'amazing / 在句中表示 / 令人惊异的', grammar: 'adjective 用法，围绕「令人惊异的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are amazing.', right: 'The news is amazing.', reason: 'news 作主语时动词用单数。形容词 amazing 放在系动词后面。', rule: '先确定 amazing 是adjective，再套「令人惊异的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amazing.q1', senseId: 'amazing.s1', errorType: 'meaning', type: '词义选择', prompt: '「amazing」在本条的核心意思是：', options: ['令人惊异的', '完全相反的意思', '与本词无关的语法术语'], answer: '令人惊异的', explain: 'amazing：令人惊异的。' },
      { id: 'amazing.q2', senseId: 'amazing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amazing?', options: ['令人惊异的', 'a kind of ancient coin', 'the past tense of be'], answer: '令人惊异的', explain: '对的是「令人惊异的」。' },
      { id: 'amazing.q3', senseId: 'amazing.s1', errorType: 'grammar', type: '词义选择', prompt: 'amazing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'amazing.q4', senseId: 'amazing.s1', errorType: 'meaning', type: '词源', prompt: '记 amazing 时，下面哪句更稳妥？', options: ['先锁住「令人惊异的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「令人惊异的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['令人惊异的'] },
  });

  D('ambassador', {
    etymology: {
      origin: '意大利语 ambasciatore「使者」。',
      prefix: null,
      root: { text: 'ambassador', gloss: '大使' },
      suffix: null,
      history: [
        { label: 'ambassador', text: '意大利语 ambasciatore「使者」。' },
        { label: '现在', text: '核心用法是：大使。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：大使。',
      mnemonic: '看到 ambassador，先说出「大使」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：大使。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ambassador.', chinese: '这一章反复回到同一个点：大使。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ambassador.s1', en: 'Without that ambassador, the story would be hard to follow.', zh: '没有这个大使，故事会很难读下去。', structure: 'ambassador / 在句中表示 / 大使', grammar: 'noun 用法，围绕「大使」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ambassador.', right: 'He gave me a lot of advice about the ambassador.', reason: 'advice 不可数。名词 ambassador 的单复数也要按词典词形来，不要自造。', rule: '先确定 ambassador 是noun，再套「大使」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ambassador.q1', senseId: 'ambassador.s1', errorType: 'meaning', type: '词义选择', prompt: '「ambassador」在本条的核心意思是：', options: ['大使', '完全相反的意思', '与本词无关的语法术语'], answer: '大使', explain: 'ambassador：大使。' },
      { id: 'ambassador.q2', senseId: 'ambassador.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ambassador?', options: ['大使', 'a kind of ancient coin', 'the past tense of be'], answer: '大使', explain: '对的是「大使」。' },
      { id: 'ambassador.q3', senseId: 'ambassador.s1', errorType: 'grammar', type: '词义选择', prompt: 'ambassador 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ambassador.q4', senseId: 'ambassador.s1', errorType: 'meaning', type: '词源', prompt: '记 ambassador 时，下面哪句更稳妥？', options: ['先锁住「大使」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「大使」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大使'] },
  });

  D('amber', {
    etymology: {
      origin: '英语派生：amb 加上词尾，构成与「琥珀」相应的词类。',
      prefix: null,
      root: { text: 'amb', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amber', text: '英语派生：amb 加上词尾，构成与「琥珀」相应的词类。' },
        { label: '现在', text: '核心用法是：琥珀。' },
      ],
      formationLogic: '先认词干 amb，再看词尾决定词性。',
      mnemonic: '看到 amber，先说出「琥珀」，再放进一句自己的话。',
      note: '先认词干 amb，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amber.', chinese: '这一章反复回到同一个点：琥珀。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amber.s1', en: 'Without that amber, the story would be hard to follow.', zh: '没有这个琥珀，故事会很难读下去。', structure: 'amber / 在句中表示 / 琥珀', grammar: 'noun 用法，围绕「琥珀」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amber.', right: 'He gave me a lot of advice about the amber.', reason: 'advice 不可数。名词 amber 的单复数也要按词典词形来，不要自造。', rule: '先确定 amber 是noun，再套「琥珀」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amber.q1', senseId: 'amber.s1', errorType: 'meaning', type: '词义选择', prompt: '「amber」在本条的核心意思是：', options: ['琥珀', '完全相反的意思', '与本词无关的语法术语'], answer: '琥珀', explain: 'amber：琥珀。' },
      { id: 'amber.q2', senseId: 'amber.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amber?', options: ['琥珀', 'a kind of ancient coin', 'the past tense of be'], answer: '琥珀', explain: '对的是「琥珀」。' },
      { id: 'amber.q3', senseId: 'amber.s1', errorType: 'grammar', type: '词义选择', prompt: 'amber 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amber.q4', senseId: 'amber.s1', errorType: 'meaning', type: '词源', prompt: '记 amber 时，下面哪句更稳妥？', options: ['先锁住「琥珀」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「琥珀」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['琥珀'] },
  });

  D('ambience', {
    etymology: {
      origin: '英语派生：ambi 加上词尾，构成与「气氛」相应的词类。',
      prefix: null,
      root: { text: 'ambi', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'ambience', text: '英语派生：ambi 加上词尾，构成与「气氛」相应的词类。' },
        { label: '现在', text: '核心用法是：气氛。' },
      ],
      formationLogic: '先认词干 ambi，再看词尾决定词性。',
      mnemonic: '看到 ambience，先说出「气氛」，再放进一句自己的话。',
      note: '先认词干 ambi，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ambience.', chinese: '这一章反复回到同一个点：气氛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ambience.s1', en: 'Without that ambience, the story would be hard to follow.', zh: '没有这个气氛，故事会很难读下去。', structure: 'ambience / 在句中表示 / 气氛', grammar: 'noun 用法，围绕「气氛」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ambience.', right: 'He gave me a lot of advice about the ambience.', reason: 'advice 不可数。名词 ambience 的单复数也要按词典词形来，不要自造。', rule: '先确定 ambience 是noun，再套「气氛」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ambience.q1', senseId: 'ambience.s1', errorType: 'meaning', type: '词义选择', prompt: '「ambience」在本条的核心意思是：', options: ['气氛', '完全相反的意思', '与本词无关的语法术语'], answer: '气氛', explain: 'ambience：气氛。' },
      { id: 'ambience.q2', senseId: 'ambience.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ambience?', options: ['气氛', 'a kind of ancient coin', 'the past tense of be'], answer: '气氛', explain: '对的是「气氛」。' },
      { id: 'ambience.q3', senseId: 'ambience.s1', errorType: 'grammar', type: '词义选择', prompt: 'ambience 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ambience.q4', senseId: 'ambience.s1', errorType: 'meaning', type: '词源', prompt: '记 ambience 时，下面哪句更稳妥？', options: ['先锁住「气氛」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「气氛」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['气氛'] },
  });

  D('ambiguity', {
    etymology: {
      origin: '英语派生：ambigu 加上词尾，构成与「含糊」相应的词类。',
      prefix: null,
      root: { text: 'ambigu', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'ambiguity', text: '英语派生：ambigu 加上词尾，构成与「含糊」相应的词类。' },
        { label: '现在', text: '核心用法是：含糊。' },
      ],
      formationLogic: '先认词干 ambigu，再看词尾决定词性。',
      mnemonic: '看到 ambiguity，先说出「含糊」，再放进一句自己的话。',
      note: '先认词干 ambigu，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ambiguity.', chinese: '这一章反复回到同一个点：含糊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ambiguity.s1', en: 'Without that ambiguity, the story would be hard to follow.', zh: '没有这个含糊，故事会很难读下去。', structure: 'ambiguity / 在句中表示 / 含糊', grammar: 'noun 用法，围绕「含糊」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ambiguity.', right: 'He gave me a lot of advice about the ambiguity.', reason: 'advice 不可数。名词 ambiguity 的单复数也要按词典词形来，不要自造。', rule: '先确定 ambiguity 是noun，再套「含糊」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ambiguity.q1', senseId: 'ambiguity.s1', errorType: 'meaning', type: '词义选择', prompt: '「ambiguity」在本条的核心意思是：', options: ['含糊', '完全相反的意思', '与本词无关的语法术语'], answer: '含糊', explain: 'ambiguity：含糊。' },
      { id: 'ambiguity.q2', senseId: 'ambiguity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ambiguity?', options: ['含糊', 'a kind of ancient coin', 'the past tense of be'], answer: '含糊', explain: '对的是「含糊」。' },
      { id: 'ambiguity.q3', senseId: 'ambiguity.s1', errorType: 'grammar', type: '词义选择', prompt: 'ambiguity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ambiguity.q4', senseId: 'ambiguity.s1', errorType: 'meaning', type: '词源', prompt: '记 ambiguity 时，下面哪句更稳妥？', options: ['先锁住「含糊」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「含糊」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['含糊'] },
  });

  D('ambiguous', {
    etymology: {
      origin: '拉丁语 ambiguus「两边都走」，ambigere。',
      prefix: null,
      root: { text: 'ambiguous', gloss: '模棱两可的' },
      suffix: null,
      history: [
        { label: 'ambiguous', text: '拉丁语 ambiguus「两边都走」，ambigere。' },
        { label: '现在', text: '核心用法是：模棱两可的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：模棱两可的。',
      mnemonic: '看到 ambiguous，先说出「模棱两可的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：模棱两可的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked ambiguous even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得模棱两可的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ambiguous.s1', en: 'They needed a ambiguous answer, not a long speech.', zh: '他们要的是模棱两可的的答复，不是长篇发言。', structure: 'ambiguous / 在句中表示 / 模棱两可的', grammar: 'adjective 用法，围绕「模棱两可的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ambiguous.', right: 'The news is ambiguous.', reason: 'news 作主语时动词用单数。形容词 ambiguous 放在系动词后面。', rule: '先确定 ambiguous 是adjective，再套「模棱两可的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ambiguous.q1', senseId: 'ambiguous.s1', errorType: 'meaning', type: '词义选择', prompt: '「ambiguous」在本条的核心意思是：', options: ['模棱两可的', '完全相反的意思', '与本词无关的语法术语'], answer: '模棱两可的', explain: 'ambiguous：模棱两可的。' },
      { id: 'ambiguous.q2', senseId: 'ambiguous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ambiguous?', options: ['模棱两可的', 'a kind of ancient coin', 'the past tense of be'], answer: '模棱两可的', explain: '对的是「模棱两可的」。' },
      { id: 'ambiguous.q3', senseId: 'ambiguous.s1', errorType: 'grammar', type: '词义选择', prompt: 'ambiguous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ambiguous.q4', senseId: 'ambiguous.s1', errorType: 'meaning', type: '词源', prompt: '记 ambiguous 时，下面哪句更稳妥？', options: ['先锁住「模棱两可的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「模棱两可的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['模棱两可的'] },
  });

  D('ambition', {
    etymology: {
      origin: '拉丁语 ambitio「四处拉票」，ambire「绕着走」。',
      prefix: null,
      root: { text: 'ambition', gloss: '雄心' },
      suffix: null,
      history: [
        { label: 'ambition', text: '拉丁语 ambitio「四处拉票」，ambire「绕着走」。' },
        { label: '现在', text: '核心用法是：雄心。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：雄心。',
      mnemonic: '看到 ambition，先说出「雄心」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：雄心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ambition.', chinese: '这一章反复回到同一个点：雄心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ambition.s1', en: 'Without that ambition, the story would be hard to follow.', zh: '没有这个雄心，故事会很难读下去。', structure: 'ambition / 在句中表示 / 雄心', grammar: 'noun 用法，围绕「雄心」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ambition.', right: 'He gave me a lot of advice about the ambition.', reason: 'advice 不可数。名词 ambition 的单复数也要按词典词形来，不要自造。', rule: '先确定 ambition 是noun，再套「雄心」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ambition.q1', senseId: 'ambition.s1', errorType: 'meaning', type: '词义选择', prompt: '「ambition」在本条的核心意思是：', options: ['雄心', '完全相反的意思', '与本词无关的语法术语'], answer: '雄心', explain: 'ambition：雄心。' },
      { id: 'ambition.q2', senseId: 'ambition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ambition?', options: ['雄心', 'a kind of ancient coin', 'the past tense of be'], answer: '雄心', explain: '对的是「雄心」。' },
      { id: 'ambition.q3', senseId: 'ambition.s1', errorType: 'grammar', type: '词义选择', prompt: 'ambition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ambition.q4', senseId: 'ambition.s1', errorType: 'meaning', type: '词源', prompt: '记 ambition 时，下面哪句更稳妥？', options: ['先锁住「雄心」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「雄心」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雄心'] },
  });

  D('ambitious', {
    etymology: {
      origin: '英语派生：ambiti 加上词尾，构成与「有雄心的」相应的词类。',
      prefix: null,
      root: { text: 'ambiti', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'ambitious', text: '英语派生：ambiti 加上词尾，构成与「有雄心的」相应的词类。' },
        { label: '现在', text: '核心用法是：有雄心的。' },
      ],
      formationLogic: '先认词干 ambiti，再看词尾决定词性。',
      mnemonic: '看到 ambitious，先说出「有雄心的」，再放进一句自己的话。',
      note: '先认词干 ambiti，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked ambitious even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得有雄心的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ambitious.s1', en: 'They needed a ambitious answer, not a long speech.', zh: '他们要的是有雄心的的答复，不是长篇发言。', structure: 'ambitious / 在句中表示 / 有雄心的', grammar: 'adjective 用法，围绕「有雄心的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ambitious.', right: 'The news is ambitious.', reason: 'news 作主语时动词用单数。形容词 ambitious 放在系动词后面。', rule: '先确定 ambitious 是adjective，再套「有雄心的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ambitious.q1', senseId: 'ambitious.s1', errorType: 'meaning', type: '词义选择', prompt: '「ambitious」在本条的核心意思是：', options: ['有雄心的', '完全相反的意思', '与本词无关的语法术语'], answer: '有雄心的', explain: 'ambitious：有雄心的。' },
      { id: 'ambitious.q2', senseId: 'ambitious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ambitious?', options: ['有雄心的', 'a kind of ancient coin', 'the past tense of be'], answer: '有雄心的', explain: '对的是「有雄心的」。' },
      { id: 'ambitious.q3', senseId: 'ambitious.s1', errorType: 'grammar', type: '词义选择', prompt: 'ambitious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ambitious.q4', senseId: 'ambitious.s1', errorType: 'meaning', type: '词源', prompt: '记 ambitious 时，下面哪句更稳妥？', options: ['先锁住「有雄心的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「有雄心的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有雄心的'] },
  });

  D('amble', {
    etymology: {
      origin: '现代英语常用词「amble」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amble', gloss: '漫步' },
      suffix: null,
      history: [
        { label: 'amble', text: '现代英语常用词「amble」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：漫步。' },
      ],
      formationLogic: '核心义：漫步。',
      mnemonic: '看到 amble，先说出「漫步」，再放进一句自己的话。',
      note: '核心义：漫步。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to amble before the office closed.', chinese: '小组得在办公室关门前完成这件事：漫步。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amble.s1', en: 'Nobody wanted to amble, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 amble 是「漫步」。', structure: 'amble / 在句中表示 / 漫步', grammar: 'verb 用法，围绕「漫步」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She ambleed the form yesterday without checking the real past form.', right: 'Look up the past form of "amble" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 amble 是verb，再套「漫步」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amble.q1', senseId: 'amble.s1', errorType: 'meaning', type: '词义选择', prompt: '「amble」在本条的核心意思是：', options: ['漫步', '完全相反的意思', '与本词无关的语法术语'], answer: '漫步', explain: 'amble：漫步。' },
      { id: 'amble.q2', senseId: 'amble.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amble?', options: ['漫步', 'a kind of ancient coin', 'the past tense of be'], answer: '漫步', explain: '对的是「漫步」。' },
      { id: 'amble.q3', senseId: 'amble.s1', errorType: 'grammar', type: '词义选择', prompt: 'amble 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amble.q4', senseId: 'amble.s1', errorType: 'meaning', type: '词源', prompt: '记 amble 时，下面哪句更稳妥？', options: ['先锁住「漫步」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「漫步」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['漫步'] },
  });

  D('ambulance', {
    etymology: {
      origin: '法语 hopital ambulant「移动医院」，ambulare「走」。',
      prefix: null,
      root: { text: 'ambulance', gloss: '救护车' },
      suffix: null,
      history: [
        { label: 'ambulance', text: '法语 hopital ambulant「移动医院」，ambulare「走」。' },
        { label: '现在', text: '核心用法是：救护车。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：救护车。',
      mnemonic: '看到 ambulance，先说出「救护车」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：救护车。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ambulance.', chinese: '这一章反复回到同一个点：救护车。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ambulance.s1', en: 'Without that ambulance, the story would be hard to follow.', zh: '没有这个救护车，故事会很难读下去。', structure: 'ambulance / 在句中表示 / 救护车', grammar: 'noun 用法，围绕「救护车」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ambulance.', right: 'He gave me a lot of advice about the ambulance.', reason: 'advice 不可数。名词 ambulance 的单复数也要按词典词形来，不要自造。', rule: '先确定 ambulance 是noun，再套「救护车」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ambulance.q1', senseId: 'ambulance.s1', errorType: 'meaning', type: '词义选择', prompt: '「ambulance」在本条的核心意思是：', options: ['救护车', '完全相反的意思', '与本词无关的语法术语'], answer: '救护车', explain: 'ambulance：救护车。' },
      { id: 'ambulance.q2', senseId: 'ambulance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ambulance?', options: ['救护车', 'a kind of ancient coin', 'the past tense of be'], answer: '救护车', explain: '对的是「救护车」。' },
      { id: 'ambulance.q3', senseId: 'ambulance.s1', errorType: 'grammar', type: '词义选择', prompt: 'ambulance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ambulance.q4', senseId: 'ambulance.s1', errorType: 'meaning', type: '词源', prompt: '记 ambulance 时，下面哪句更稳妥？', options: ['先锁住「救护车」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「救护车」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['救护车'] },
  });

  D('amend', {
    etymology: {
      origin: '拉丁语 emendare「去掉毛病」，menda「过错」。',
      prefix: null,
      root: { text: 'amend', gloss: '修改' },
      suffix: null,
      history: [
        { label: 'amend', text: '拉丁语 emendare「去掉毛病」，menda「过错」。' },
        { label: '现在', text: '核心用法是：修改。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：修改。',
      mnemonic: '看到 amend，先说出「修改」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：修改。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to amend before the office closed.', chinese: '小组得在办公室关门前完成这件事：修改。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amend.s1', en: 'Nobody wanted to amend, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 amend 是「修改」。', structure: 'amend / 在句中表示 / 修改', grammar: 'verb 用法，围绕「修改」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She amended the form yesterday without checking the real past form.', right: 'Look up the past form of "amend" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 amend 是verb，再套「修改」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amend.q1', senseId: 'amend.s1', errorType: 'meaning', type: '词义选择', prompt: '「amend」在本条的核心意思是：', options: ['修改', '完全相反的意思', '与本词无关的语法术语'], answer: '修改', explain: 'amend：修改。' },
      { id: 'amend.q2', senseId: 'amend.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amend?', options: ['修改', 'a kind of ancient coin', 'the past tense of be'], answer: '修改', explain: '对的是「修改」。' },
      { id: 'amend.q3', senseId: 'amend.s1', errorType: 'grammar', type: '词义选择', prompt: 'amend 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amend.q4', senseId: 'amend.s1', errorType: 'meaning', type: '词源', prompt: '记 amend 时，下面哪句更稳妥？', options: ['先锁住「修改」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「修改」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['修改'] },
  });

  D('amendment', {
    etymology: {
      origin: '英语派生：amend 加上词尾，构成与「修正」相应的词类。',
      prefix: null,
      root: { text: 'amend', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amendment', text: '英语派生：amend 加上词尾，构成与「修正」相应的词类。' },
        { label: '现在', text: '核心用法是：修正。' },
      ],
      formationLogic: '先认词干 amend，再看词尾决定词性。',
      mnemonic: '看到 amendment，先说出「修正」，再放进一句自己的话。',
      note: '先认词干 amend，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amendment.', chinese: '这一章反复回到同一个点：修正。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amendment.s1', en: 'Without that amendment, the story would be hard to follow.', zh: '没有这个修正，故事会很难读下去。', structure: 'amendment / 在句中表示 / 修正', grammar: 'noun 用法，围绕「修正」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amendment.', right: 'He gave me a lot of advice about the amendment.', reason: 'advice 不可数。名词 amendment 的单复数也要按词典词形来，不要自造。', rule: '先确定 amendment 是noun，再套「修正」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amendment.q1', senseId: 'amendment.s1', errorType: 'meaning', type: '词义选择', prompt: '「amendment」在本条的核心意思是：', options: ['修正', '完全相反的意思', '与本词无关的语法术语'], answer: '修正', explain: 'amendment：修正。' },
      { id: 'amendment.q2', senseId: 'amendment.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amendment?', options: ['修正', 'a kind of ancient coin', 'the past tense of be'], answer: '修正', explain: '对的是「修正」。' },
      { id: 'amendment.q3', senseId: 'amendment.s1', errorType: 'grammar', type: '词义选择', prompt: 'amendment 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amendment.q4', senseId: 'amendment.s1', errorType: 'meaning', type: '词源', prompt: '记 amendment 时，下面哪句更稳妥？', options: ['先锁住「修正」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「修正」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['修正'] },
  });

  D('amenity', {
    etymology: {
      origin: '英语派生：amen 加上词尾，构成与「便利设施」相应的词类。',
      prefix: null,
      root: { text: 'amen', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amenity', text: '英语派生：amen 加上词尾，构成与「便利设施」相应的词类。' },
        { label: '现在', text: '核心用法是：便利设施。' },
      ],
      formationLogic: '先认词干 amen，再看词尾决定词性。',
      mnemonic: '看到 amenity，先说出「便利设施」，再放进一句自己的话。',
      note: '先认词干 amen，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amenity.', chinese: '这一章反复回到同一个点：便利设施。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amenity.s1', en: 'Without that amenity, the story would be hard to follow.', zh: '没有这个便利设施，故事会很难读下去。', structure: 'amenity / 在句中表示 / 便利设施', grammar: 'noun 用法，围绕「便利设施」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amenity.', right: 'He gave me a lot of advice about the amenity.', reason: 'advice 不可数。名词 amenity 的单复数也要按词典词形来，不要自造。', rule: '先确定 amenity 是noun，再套「便利设施」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amenity.q1', senseId: 'amenity.s1', errorType: 'meaning', type: '词义选择', prompt: '「amenity」在本条的核心意思是：', options: ['便利设施', '完全相反的意思', '与本词无关的语法术语'], answer: '便利设施', explain: 'amenity：便利设施。' },
      { id: 'amenity.q2', senseId: 'amenity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amenity?', options: ['便利设施', 'a kind of ancient coin', 'the past tense of be'], answer: '便利设施', explain: '对的是「便利设施」。' },
      { id: 'amenity.q3', senseId: 'amenity.s1', errorType: 'grammar', type: '词义选择', prompt: 'amenity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amenity.q4', senseId: 'amenity.s1', errorType: 'meaning', type: '词源', prompt: '记 amenity 时，下面哪句更稳妥？', options: ['先锁住「便利设施」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「便利设施」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['便利设施'] },
  });

  D('amiable', {
    etymology: {
      origin: '英语派生：ami 加上词尾，构成与「和蔼可亲的」相应的词类。',
      prefix: null,
      root: { text: 'ami', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amiable', text: '英语派生：ami 加上词尾，构成与「和蔼可亲的」相应的词类。' },
        { label: '现在', text: '核心用法是：和蔼可亲的。' },
      ],
      formationLogic: '先认词干 ami，再看词尾决定词性。',
      mnemonic: '看到 amiable，先说出「和蔼可亲的」，再放进一句自己的话。',
      note: '先认词干 ami，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked amiable even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得和蔼可亲的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amiable.s1', en: 'They needed a amiable answer, not a long speech.', zh: '他们要的是和蔼可亲的的答复，不是长篇发言。', structure: 'amiable / 在句中表示 / 和蔼可亲的', grammar: 'adjective 用法，围绕「和蔼可亲的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are amiable.', right: 'The news is amiable.', reason: 'news 作主语时动词用单数。形容词 amiable 放在系动词后面。', rule: '先确定 amiable 是adjective，再套「和蔼可亲的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amiable.q1', senseId: 'amiable.s1', errorType: 'meaning', type: '词义选择', prompt: '「amiable」在本条的核心意思是：', options: ['和蔼可亲的', '完全相反的意思', '与本词无关的语法术语'], answer: '和蔼可亲的', explain: 'amiable：和蔼可亲的。' },
      { id: 'amiable.q2', senseId: 'amiable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amiable?', options: ['和蔼可亲的', 'a kind of ancient coin', 'the past tense of be'], answer: '和蔼可亲的', explain: '对的是「和蔼可亲的」。' },
      { id: 'amiable.q3', senseId: 'amiable.s1', errorType: 'grammar', type: '词义选择', prompt: 'amiable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'amiable.q4', senseId: 'amiable.s1', errorType: 'meaning', type: '词源', prompt: '记 amiable 时，下面哪句更稳妥？', options: ['先锁住「和蔼可亲的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「和蔼可亲的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['和蔼可亲的'] },
  });

  D('amid', {
    etymology: {
      origin: '古英语 on middan「在中间」。',
      prefix: null,
      root: { text: 'amid', gloss: '在……之中' },
      suffix: null,
      history: [
        { label: 'amid', text: '古英语 on middan「在中间」。' },
        { label: '现在', text: '核心用法是：在……之中。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：在……之中。',
      mnemonic: '看到 amid，先说出「在……之中」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：在……之中。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "amid" and asked what it does in the sentence.', chinese: '老师在「amid」下面划了线，问它在句中起什么作用。它表示在……之中。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amid.s1', en: 'In the margin she wrote "amid" so the reader would not miss that phrase.', zh: '她在页边写下「amid」，免得读者漏掉这个说法。意思是在……之中。', structure: 'amid / 在句中表示 / 在……之中', grammar: 'preposition 用法，围绕「在……之中」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated amid word by word and lost the meaning.', right: 'He kept "amid" as one phrase meaning 在……之中.', reason: '「amid」是固定说法，拆开容易翻错。', rule: '先确定 amid 是preposition，再套「在……之中」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amid.q1', senseId: 'amid.s1', errorType: 'meaning', type: '词义选择', prompt: '「amid」在本条的核心意思是：', options: ['在……之中', '完全相反的意思', '与本词无关的语法术语'], answer: '在……之中', explain: 'amid：在……之中。' },
      { id: 'amid.q2', senseId: 'amid.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amid?', options: ['在……之中', 'a kind of ancient coin', 'the past tense of be'], answer: '在……之中', explain: '对的是「在……之中」。' },
      { id: 'amid.q3', senseId: 'amid.s1', errorType: 'grammar', type: '词义选择', prompt: 'amid 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'amid.q4', senseId: 'amid.s1', errorType: 'meaning', type: '词源', prompt: '记 amid 时，下面哪句更稳妥？', options: ['先锁住「在……之中」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在……之中」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在……之中'] },
  });

  D('amiss', {
    etymology: {
      origin: '现代英语常用词「amiss」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amiss', gloss: '有问题的' },
      suffix: null,
      history: [
        { label: 'amiss', text: '现代英语常用词「amiss」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：有问题的。' },
      ],
      formationLogic: '核心义：有问题的。',
      mnemonic: '看到 amiss，先说出「有问题的」，再放进一句自己的话。',
      note: '核心义：有问题的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked amiss even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得有问题的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amiss.s1', en: 'They needed a amiss answer, not a long speech.', zh: '他们要的是有问题的的答复，不是长篇发言。', structure: 'amiss / 在句中表示 / 有问题的', grammar: 'adjective 用法，围绕「有问题的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are amiss.', right: 'The news is amiss.', reason: 'news 作主语时动词用单数。形容词 amiss 放在系动词后面。', rule: '先确定 amiss 是adjective，再套「有问题的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amiss.q1', senseId: 'amiss.s1', errorType: 'meaning', type: '词义选择', prompt: '「amiss」在本条的核心意思是：', options: ['有问题的', '完全相反的意思', '与本词无关的语法术语'], answer: '有问题的', explain: 'amiss：有问题的。' },
      { id: 'amiss.q2', senseId: 'amiss.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amiss?', options: ['有问题的', 'a kind of ancient coin', 'the past tense of be'], answer: '有问题的', explain: '对的是「有问题的」。' },
      { id: 'amiss.q3', senseId: 'amiss.s1', errorType: 'grammar', type: '词义选择', prompt: 'amiss 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'amiss.q4', senseId: 'amiss.s1', errorType: 'meaning', type: '词源', prompt: '记 amiss 时，下面哪句更稳妥？', options: ['先锁住「有问题的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「有问题的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有问题的'] },
  });

  D('ammunition', {
    etymology: {
      origin: '英语派生：ammuni 加上词尾，构成与「弹药」相应的词类。',
      prefix: null,
      root: { text: 'ammuni', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'ammunition', text: '英语派生：ammuni 加上词尾，构成与「弹药」相应的词类。' },
        { label: '现在', text: '核心用法是：弹药。' },
      ],
      formationLogic: '先认词干 ammuni，再看词尾决定词性。',
      mnemonic: '看到 ammunition，先说出「弹药」，再放进一句自己的话。',
      note: '先认词干 ammuni，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one ammunition.', chinese: '这一章反复回到同一个点：弹药。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ammunition.s1', en: 'Without that ammunition, the story would be hard to follow.', zh: '没有这个弹药，故事会很难读下去。', structure: 'ammunition / 在句中表示 / 弹药', grammar: 'noun 用法，围绕「弹药」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ammunition.', right: 'He gave me a lot of advice about the ammunition.', reason: 'advice 不可数。名词 ammunition 的单复数也要按词典词形来，不要自造。', rule: '先确定 ammunition 是noun，再套「弹药」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ammunition.q1', senseId: 'ammunition.s1', errorType: 'meaning', type: '词义选择', prompt: '「ammunition」在本条的核心意思是：', options: ['弹药', '完全相反的意思', '与本词无关的语法术语'], answer: '弹药', explain: 'ammunition：弹药。' },
      { id: 'ammunition.q2', senseId: 'ammunition.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ammunition?', options: ['弹药', 'a kind of ancient coin', 'the past tense of be'], answer: '弹药', explain: '对的是「弹药」。' },
      { id: 'ammunition.q3', senseId: 'ammunition.s1', errorType: 'grammar', type: '词义选择', prompt: 'ammunition 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ammunition.q4', senseId: 'ammunition.s1', errorType: 'meaning', type: '词源', prompt: '记 ammunition 时，下面哪句更稳妥？', options: ['先锁住「弹药」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「弹药」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['弹药'] },
  });

  D('amnesty', {
    etymology: {
      origin: '现代英语常用词「amnesty」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amnesty', gloss: '大赦' },
      suffix: null,
      history: [
        { label: 'amnesty', text: '现代英语常用词「amnesty」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：大赦。' },
      ],
      formationLogic: '核心义：大赦。',
      mnemonic: '看到 amnesty，先说出「大赦」，再放进一句自己的话。',
      note: '核心义：大赦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amnesty.', chinese: '这一章反复回到同一个点：大赦。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amnesty.s1', en: 'Without that amnesty, the story would be hard to follow.', zh: '没有这个大赦，故事会很难读下去。', structure: 'amnesty / 在句中表示 / 大赦', grammar: 'noun 用法，围绕「大赦」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amnesty.', right: 'He gave me a lot of advice about the amnesty.', reason: 'advice 不可数。名词 amnesty 的单复数也要按词典词形来，不要自造。', rule: '先确定 amnesty 是noun，再套「大赦」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amnesty.q1', senseId: 'amnesty.s1', errorType: 'meaning', type: '词义选择', prompt: '「amnesty」在本条的核心意思是：', options: ['大赦', '完全相反的意思', '与本词无关的语法术语'], answer: '大赦', explain: 'amnesty：大赦。' },
      { id: 'amnesty.q2', senseId: 'amnesty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amnesty?', options: ['大赦', 'a kind of ancient coin', 'the past tense of be'], answer: '大赦', explain: '对的是「大赦」。' },
      { id: 'amnesty.q3', senseId: 'amnesty.s1', errorType: 'grammar', type: '词义选择', prompt: 'amnesty 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amnesty.q4', senseId: 'amnesty.s1', errorType: 'meaning', type: '词源', prompt: '记 amnesty 时，下面哪句更稳妥？', options: ['先锁住「大赦」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「大赦」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大赦'] },
  });

  D('among', {
    etymology: {
      origin: '现代英语常用词「among」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'among', gloss: '在……之中' },
      suffix: null,
      history: [
        { label: 'among', text: '现代英语常用词「among」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：在……之中。' },
      ],
      formationLogic: '核心义：在……之中。',
      mnemonic: '看到 among，先说出「在……之中」，再放进一句自己的话。',
      note: '核心义：在……之中。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "among" and asked what it does in the sentence.', chinese: '老师在「among」下面划了线，问它在句中起什么作用。它表示在……之中。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'among.s1', en: 'In the margin she wrote "among" so the reader would not miss that phrase.', zh: '她在页边写下「among」，免得读者漏掉这个说法。意思是在……之中。', structure: 'among / 在句中表示 / 在……之中', grammar: 'preposition 用法，围绕「在……之中」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated among word by word and lost the meaning.', right: 'He kept "among" as one phrase meaning 在……之中.', reason: '「among」是固定说法，拆开容易翻错。', rule: '先确定 among 是preposition，再套「在……之中」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'among.q1', senseId: 'among.s1', errorType: 'meaning', type: '词义选择', prompt: '「among」在本条的核心意思是：', options: ['在……之中', '完全相反的意思', '与本词无关的语法术语'], answer: '在……之中', explain: 'among：在……之中。' },
      { id: 'among.q2', senseId: 'among.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches among?', options: ['在……之中', 'a kind of ancient coin', 'the past tense of be'], answer: '在……之中', explain: '对的是「在……之中」。' },
      { id: 'among.q3', senseId: 'among.s1', errorType: 'grammar', type: '词义选择', prompt: 'among 的词性（本条）更接近：', options: ['preposition', '只能作感叹词', '只能作数词'], answer: 'preposition', explain: '本条按 preposition 来用。' },
      { id: 'among.q4', senseId: 'among.s1', errorType: 'meaning', type: '词源', prompt: '记 among 时，下面哪句更稳妥？', options: ['先锁住「在……之中」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「在……之中」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['在……之中'] },
  });

  D('amount', {
    etymology: {
      origin: '古法语 amonter「向上升、合计」。',
      prefix: null,
      root: { text: 'amount', gloss: '数量' },
      suffix: null,
      history: [
        { label: 'amount', text: '古法语 amonter「向上升、合计」。' },
        { label: '现在', text: '核心用法是：数量。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：数量。',
      mnemonic: '看到 amount，先说出「数量」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：数量。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amount.', chinese: '这一章反复回到同一个点：数量。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amount.s1', en: 'Without that amount, the story would be hard to follow.', zh: '没有这个数量，故事会很难读下去。', structure: 'amount / 在句中表示 / 数量', grammar: 'noun 用法，围绕「数量」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amount.', right: 'He gave me a lot of advice about the amount.', reason: 'advice 不可数。名词 amount 的单复数也要按词典词形来，不要自造。', rule: '先确定 amount 是noun，再套「数量」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amount.q1', senseId: 'amount.s1', errorType: 'meaning', type: '词义选择', prompt: '「amount」在本条的核心意思是：', options: ['数量', '完全相反的意思', '与本词无关的语法术语'], answer: '数量', explain: 'amount：数量。' },
      { id: 'amount.q2', senseId: 'amount.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amount?', options: ['数量', 'a kind of ancient coin', 'the past tense of be'], answer: '数量', explain: '对的是「数量」。' },
      { id: 'amount.q3', senseId: 'amount.s1', errorType: 'grammar', type: '词义选择', prompt: 'amount 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amount.q4', senseId: 'amount.s1', errorType: 'meaning', type: '词源', prompt: '记 amount 时，下面哪句更稳妥？', options: ['先锁住「数量」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「数量」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['数量'] },
  });

  D('amount to', {
    etymology: {
      origin: '现代英语固定说法「amount to」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'amount to', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'amount to', text: '现代英语固定说法「amount to」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：总计达。' },
      ],
      formationLogic: '常见义：总计达。',
      mnemonic: '看到 amount to，先说出「总计达」，再放进一句自己的话。',
      note: '常见义：总计达。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "amount to" and asked what it does in the sentence.', chinese: '老师在「amount to」下面划了线，问它在句中起什么作用。它表示总计达。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amount to.s1', en: 'In the margin she wrote "amount to" so the reader would not miss that phrase.', zh: '她在页边写下「amount to」，免得读者漏掉这个说法。意思是总计达。', structure: 'amount to / 在句中表示 / 总计达', grammar: 'verb 用法，围绕「总计达」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated amount to word by word and lost the meaning.', right: 'He kept "amount to" as one phrase meaning 总计达.', reason: '「amount to」是固定说法，拆开容易翻错。', rule: '先确定 amount to 是verb，再套「总计达」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amount to.q1', senseId: 'amount to.s1', errorType: 'meaning', type: '词义选择', prompt: '「amount to」在本条的核心意思是：', options: ['总计达', '完全相反的意思', '与本词无关的语法术语'], answer: '总计达', explain: 'amount to：总计达。' },
      { id: 'amount to.q2', senseId: 'amount to.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amount to?', options: ['总计达', 'a kind of ancient coin', 'the past tense of be'], answer: '总计达', explain: '对的是「总计达」。' },
      { id: 'amount to.q3', senseId: 'amount to.s1', errorType: 'grammar', type: '词义选择', prompt: 'amount to 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amount to.q4', senseId: 'amount to.s1', errorType: 'meaning', type: '词源', prompt: '记 amount to 时，下面哪句更稳妥？', options: ['先锁住「总计达」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「总计达」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['总计达'] },
  });

  D('amphibian', {
    etymology: {
      origin: '现代英语常用词「amphibian」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amphibian', gloss: '两栖动物' },
      suffix: null,
      history: [
        { label: 'amphibian', text: '现代英语常用词「amphibian」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：两栖动物。' },
      ],
      formationLogic: '核心义：两栖动物。',
      mnemonic: '看到 amphibian，先说出「两栖动物」，再放进一句自己的话。',
      note: '核心义：两栖动物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amphibian.', chinese: '这一章反复回到同一个点：两栖动物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amphibian.s1', en: 'Without that amphibian, the story would be hard to follow.', zh: '没有这个两栖动物，故事会很难读下去。', structure: 'amphibian / 在句中表示 / 两栖动物', grammar: 'noun 用法，围绕「两栖动物」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amphibian.', right: 'He gave me a lot of advice about the amphibian.', reason: 'advice 不可数。名词 amphibian 的单复数也要按词典词形来，不要自造。', rule: '先确定 amphibian 是noun，再套「两栖动物」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amphibian.q1', senseId: 'amphibian.s1', errorType: 'meaning', type: '词义选择', prompt: '「amphibian」在本条的核心意思是：', options: ['两栖动物', '完全相反的意思', '与本词无关的语法术语'], answer: '两栖动物', explain: 'amphibian：两栖动物。' },
      { id: 'amphibian.q2', senseId: 'amphibian.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amphibian?', options: ['两栖动物', 'a kind of ancient coin', 'the past tense of be'], answer: '两栖动物', explain: '对的是「两栖动物」。' },
      { id: 'amphibian.q3', senseId: 'amphibian.s1', errorType: 'grammar', type: '词义选择', prompt: 'amphibian 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amphibian.q4', senseId: 'amphibian.s1', errorType: 'meaning', type: '词源', prompt: '记 amphibian 时，下面哪句更稳妥？', options: ['先锁住「两栖动物」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「两栖动物」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['两栖动物'] },
  });

  D('ample', {
    etymology: {
      origin: '拉丁语 amplus「宽、大、够」。',
      prefix: null,
      root: { text: 'ample', gloss: '充足的' },
      suffix: null,
      history: [
        { label: 'ample', text: '拉丁语 amplus「宽、大、够」。' },
        { label: '现在', text: '核心用法是：充足的。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：充足的。',
      mnemonic: '看到 ample，先说出「充足的」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：充足的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked ample even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得充足的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ample.s1', en: 'They needed a ample answer, not a long speech.', zh: '他们要的是充足的的答复，不是长篇发言。', structure: 'ample / 在句中表示 / 充足的', grammar: 'adjective 用法，围绕「充足的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ample.', right: 'The news is ample.', reason: 'news 作主语时动词用单数。形容词 ample 放在系动词后面。', rule: '先确定 ample 是adjective，再套「充足的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'ample.q1', senseId: 'ample.s1', errorType: 'meaning', type: '词义选择', prompt: '「ample」在本条的核心意思是：', options: ['充足的', '完全相反的意思', '与本词无关的语法术语'], answer: '充足的', explain: 'ample：充足的。' },
      { id: 'ample.q2', senseId: 'ample.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ample?', options: ['充足的', 'a kind of ancient coin', 'the past tense of be'], answer: '充足的', explain: '对的是「充足的」。' },
      { id: 'ample.q3', senseId: 'ample.s1', errorType: 'grammar', type: '词义选择', prompt: 'ample 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ample.q4', senseId: 'ample.s1', errorType: 'meaning', type: '词源', prompt: '记 ample 时，下面哪句更稳妥？', options: ['先锁住「充足的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「充足的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['充足的'] },
  });

  D('amplification', {
    etymology: {
      origin: '英语派生：amplifica 加上词尾，构成与「放大」相应的词类。',
      prefix: null,
      root: { text: 'amplifica', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amplification', text: '英语派生：amplifica 加上词尾，构成与「放大」相应的词类。' },
        { label: '现在', text: '核心用法是：放大。' },
      ],
      formationLogic: '先认词干 amplifica，再看词尾决定词性。',
      mnemonic: '看到 amplification，先说出「放大」，再放进一句自己的话。',
      note: '先认词干 amplifica，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amplification.', chinese: '这一章反复回到同一个点：放大。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amplification.s1', en: 'Without that amplification, the story would be hard to follow.', zh: '没有这个放大，故事会很难读下去。', structure: 'amplification / 在句中表示 / 放大', grammar: 'noun 用法，围绕「放大」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amplification.', right: 'He gave me a lot of advice about the amplification.', reason: 'advice 不可数。名词 amplification 的单复数也要按词典词形来，不要自造。', rule: '先确定 amplification 是noun，再套「放大」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amplification.q1', senseId: 'amplification.s1', errorType: 'meaning', type: '词义选择', prompt: '「amplification」在本条的核心意思是：', options: ['放大', '完全相反的意思', '与本词无关的语法术语'], answer: '放大', explain: 'amplification：放大。' },
      { id: 'amplification.q2', senseId: 'amplification.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amplification?', options: ['放大', 'a kind of ancient coin', 'the past tense of be'], answer: '放大', explain: '对的是「放大」。' },
      { id: 'amplification.q3', senseId: 'amplification.s1', errorType: 'grammar', type: '词义选择', prompt: 'amplification 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amplification.q4', senseId: 'amplification.s1', errorType: 'meaning', type: '词源', prompt: '记 amplification 时，下面哪句更稳妥？', options: ['先锁住「放大」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「放大」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['放大'] },
  });

  D('amplifier', {
    etymology: {
      origin: '英语派生：amplifi 加上词尾，构成与「放大器」相应的词类。',
      prefix: null,
      root: { text: 'amplifi', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amplifier', text: '英语派生：amplifi 加上词尾，构成与「放大器」相应的词类。' },
        { label: '现在', text: '核心用法是：放大器。' },
      ],
      formationLogic: '先认词干 amplifi，再看词尾决定词性。',
      mnemonic: '看到 amplifier，先说出「放大器」，再放进一句自己的话。',
      note: '先认词干 amplifi，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amplifier.', chinese: '这一章反复回到同一个点：放大器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amplifier.s1', en: 'Without that amplifier, the story would be hard to follow.', zh: '没有这个放大器，故事会很难读下去。', structure: 'amplifier / 在句中表示 / 放大器', grammar: 'noun 用法，围绕「放大器」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amplifier.', right: 'He gave me a lot of advice about the amplifier.', reason: 'advice 不可数。名词 amplifier 的单复数也要按词典词形来，不要自造。', rule: '先确定 amplifier 是noun，再套「放大器」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amplifier.q1', senseId: 'amplifier.s1', errorType: 'meaning', type: '词义选择', prompt: '「amplifier」在本条的核心意思是：', options: ['放大器', '完全相反的意思', '与本词无关的语法术语'], answer: '放大器', explain: 'amplifier：放大器。' },
      { id: 'amplifier.q2', senseId: 'amplifier.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amplifier?', options: ['放大器', 'a kind of ancient coin', 'the past tense of be'], answer: '放大器', explain: '对的是「放大器」。' },
      { id: 'amplifier.q3', senseId: 'amplifier.s1', errorType: 'grammar', type: '词义选择', prompt: 'amplifier 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amplifier.q4', senseId: 'amplifier.s1', errorType: 'meaning', type: '词源', prompt: '记 amplifier 时，下面哪句更稳妥？', options: ['先锁住「放大器」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「放大器」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['放大器'] },
  });

  D('amplify', {
    etymology: {
      origin: '现代英语常用词「amplify」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amplify', gloss: '放大' },
      suffix: null,
      history: [
        { label: 'amplify', text: '现代英语常用词「amplify」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：放大。' },
      ],
      formationLogic: '核心义：放大。',
      mnemonic: '看到 amplify，先说出「放大」，再放进一句自己的话。',
      note: '核心义：放大。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to amplify before the office closed.', chinese: '小组得在办公室关门前完成这件事：放大。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amplify.s1', en: 'Nobody wanted to amplify, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 amplify 是「放大」。', structure: 'amplify / 在句中表示 / 放大', grammar: 'verb 用法，围绕「放大」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She amplifyed the form yesterday without checking the real past form.', right: 'Look up the past form of "amplify" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 amplify 是verb，再套「放大」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amplify.q1', senseId: 'amplify.s1', errorType: 'meaning', type: '词义选择', prompt: '「amplify」在本条的核心意思是：', options: ['放大', '完全相反的意思', '与本词无关的语法术语'], answer: '放大', explain: 'amplify：放大。' },
      { id: 'amplify.q2', senseId: 'amplify.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amplify?', options: ['放大', 'a kind of ancient coin', 'the past tense of be'], answer: '放大', explain: '对的是「放大」。' },
      { id: 'amplify.q3', senseId: 'amplify.s1', errorType: 'grammar', type: '词义选择', prompt: 'amplify 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amplify.q4', senseId: 'amplify.s1', errorType: 'meaning', type: '词源', prompt: '记 amplify 时，下面哪句更稳妥？', options: ['先锁住「放大」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「放大」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['放大'] },
  });

  D('amply', {
    etymology: {
      origin: '英语派生：amp 加上词尾，构成与「充足地」相应的词类。',
      prefix: null,
      root: { text: 'amp', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amply', text: '英语派生：amp 加上词尾，构成与「充足地」相应的词类。' },
        { label: '现在', text: '核心用法是：充足地。' },
      ],
      formationLogic: '先认词干 amp，再看词尾决定词性。',
      mnemonic: '看到 amply，先说出「充足地」，再放进一句自己的话。',
      note: '先认词干 amp，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule amply, and the class finally followed it.', chinese: '她把规则讲得让人明白（充足地），全班终于跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amply.s1', en: 'He nodded amply and went back to his notes.', zh: '他充足地地点了点头，又回去看笔记。', structure: 'amply / 在句中表示 / 充足地', grammar: 'adverb 用法，围绕「充足地」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very amplyly.', right: 'She spoke amply.', reason: 'amply 已经是副词，不要再加 -ly。', rule: '先确定 amply 是adverb，再套「充足地」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amply.q1', senseId: 'amply.s1', errorType: 'meaning', type: '词义选择', prompt: '「amply」在本条的核心意思是：', options: ['充足地', '完全相反的意思', '与本词无关的语法术语'], answer: '充足地', explain: 'amply：充足地。' },
      { id: 'amply.q2', senseId: 'amply.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amply?', options: ['充足地', 'a kind of ancient coin', 'the past tense of be'], answer: '充足地', explain: '对的是「充足地」。' },
      { id: 'amply.q3', senseId: 'amply.s1', errorType: 'grammar', type: '词义选择', prompt: 'amply 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'amply.q4', senseId: 'amply.s1', errorType: 'meaning', type: '词源', prompt: '记 amply 时，下面哪句更稳妥？', options: ['先锁住「充足地」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「充足地」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['充足地'] },
  });

  D('amuse', {
    etymology: {
      origin: '古法语 amuser「使发呆」，后变为逗乐。',
      prefix: null,
      root: { text: 'amuse', gloss: '逗乐' },
      suffix: null,
      history: [
        { label: 'amuse', text: '古法语 amuser「使发呆」，后变为逗乐。' },
        { label: '现在', text: '核心用法是：逗乐。' },
      ],
      formationLogic: '词源只帮助记形。考试以现在的用法为准：逗乐。',
      mnemonic: '看到 amuse，先说出「逗乐」，再放进一句自己的话。',
      note: '词源只帮助记形。考试以现在的用法为准：逗乐。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The group had to amuse before the office closed.', chinese: '小组得在办公室关门前完成这件事：逗乐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amuse.s1', en: 'Nobody wanted to amuse, but the deadline left them no choice.', zh: '没人想做，但截止日期不等人。这里 amuse 是「逗乐」。', structure: 'amuse / 在句中表示 / 逗乐', grammar: 'verb 用法，围绕「逗乐」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She amuseed the form yesterday without checking the real past form.', right: 'Look up the past form of "amuse" before you write it.', reason: '动词过去式不一定是直接加 -ed，不规则变化要单独记。', rule: '先确定 amuse 是verb，再套「逗乐」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amuse.q1', senseId: 'amuse.s1', errorType: 'meaning', type: '词义选择', prompt: '「amuse」在本条的核心意思是：', options: ['逗乐', '完全相反的意思', '与本词无关的语法术语'], answer: '逗乐', explain: 'amuse：逗乐。' },
      { id: 'amuse.q2', senseId: 'amuse.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amuse?', options: ['逗乐', 'a kind of ancient coin', 'the past tense of be'], answer: '逗乐', explain: '对的是「逗乐」。' },
      { id: 'amuse.q3', senseId: 'amuse.s1', errorType: 'grammar', type: '词义选择', prompt: 'amuse 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amuse.q4', senseId: 'amuse.s1', errorType: 'meaning', type: '词源', prompt: '记 amuse 时，下面哪句更稳妥？', options: ['先锁住「逗乐」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「逗乐」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['逗乐'] },
  });

  D('amuse oneself', {
    etymology: {
      origin: '现代英语固定说法「amuse oneself」，要整块记，不要按字面逐词硬译。',
      prefix: null,
      root: { text: 'amuse oneself', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'amuse oneself', text: '现代英语固定说法「amuse oneself」，要整块记，不要按字面逐词硬译。' },
        { label: '现在', text: '核心用法是：自娱。' },
      ],
      formationLogic: '常见义：自娱。',
      mnemonic: '看到 amuse oneself，先说出「自娱」，再放进一句自己的话。',
      note: '常见义：自娱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher underlined "amuse oneself" and asked what it does in the sentence.', chinese: '老师在「amuse oneself」下面划了线，问它在句中起什么作用。它表示自娱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amuse oneself.s1', en: 'In the margin she wrote "amuse oneself" so the reader would not miss that phrase.', zh: '她在页边写下「amuse oneself」，免得读者漏掉这个说法。意思是自娱。', structure: 'amuse oneself / 在句中表示 / 自娱', grammar: 'verb 用法，围绕「自娱」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He translated amuse oneself word by word and lost the meaning.', right: 'He kept "amuse oneself" as one phrase meaning 自娱.', reason: '「amuse oneself」是固定说法，拆开容易翻错。', rule: '先确定 amuse oneself 是verb，再套「自娱」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amuse oneself.q1', senseId: 'amuse oneself.s1', errorType: 'meaning', type: '词义选择', prompt: '「amuse oneself」在本条的核心意思是：', options: ['自娱', '完全相反的意思', '与本词无关的语法术语'], answer: '自娱', explain: 'amuse oneself：自娱。' },
      { id: 'amuse oneself.q2', senseId: 'amuse oneself.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amuse oneself?', options: ['自娱', 'a kind of ancient coin', 'the past tense of be'], answer: '自娱', explain: '对的是「自娱」。' },
      { id: 'amuse oneself.q3', senseId: 'amuse oneself.s1', errorType: 'grammar', type: '词义选择', prompt: 'amuse oneself 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'amuse oneself.q4', senseId: 'amuse oneself.s1', errorType: 'meaning', type: '词源', prompt: '记 amuse oneself 时，下面哪句更稳妥？', options: ['先锁住「自娱」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「自娱」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['自娱'] },
  });

  D('amusement', {
    etymology: {
      origin: '英语派生：amuse 加上词尾，构成与「娱乐」相应的词类。',
      prefix: null,
      root: { text: 'amuse', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'amusement', text: '英语派生：amuse 加上词尾，构成与「娱乐」相应的词类。' },
        { label: '现在', text: '核心用法是：娱乐。' },
      ],
      formationLogic: '先认词干 amuse，再看词尾决定词性。',
      mnemonic: '看到 amusement，先说出「娱乐」，再放进一句自己的话。',
      note: '先认词干 amuse，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one amusement.', chinese: '这一章反复回到同一个点：娱乐。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amusement.s1', en: 'Without that amusement, the story would be hard to follow.', zh: '没有这个娱乐，故事会很难读下去。', structure: 'amusement / 在句中表示 / 娱乐', grammar: 'noun 用法，围绕「娱乐」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the amusement.', right: 'He gave me a lot of advice about the amusement.', reason: 'advice 不可数。名词 amusement 的单复数也要按词典词形来，不要自造。', rule: '先确定 amusement 是noun，再套「娱乐」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amusement.q1', senseId: 'amusement.s1', errorType: 'meaning', type: '词义选择', prompt: '「amusement」在本条的核心意思是：', options: ['娱乐', '完全相反的意思', '与本词无关的语法术语'], answer: '娱乐', explain: 'amusement：娱乐。' },
      { id: 'amusement.q2', senseId: 'amusement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amusement?', options: ['娱乐', 'a kind of ancient coin', 'the past tense of be'], answer: '娱乐', explain: '对的是「娱乐」。' },
      { id: 'amusement.q3', senseId: 'amusement.s1', errorType: 'grammar', type: '词义选择', prompt: 'amusement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'amusement.q4', senseId: 'amusement.s1', errorType: 'meaning', type: '词源', prompt: '记 amusement 时，下面哪句更稳妥？', options: ['先锁住「娱乐」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「娱乐」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['娱乐'] },
  });

  D('amusing', {
    etymology: {
      origin: '现代英语常用词「amusing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'amusing', gloss: '好笑的' },
      suffix: null,
      history: [
        { label: 'amusing', text: '现代英语常用词「amusing」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：好笑的。' },
      ],
      formationLogic: '核心义：好笑的。',
      mnemonic: '看到 amusing，先说出「好笑的」，再放进一句自己的话。',
      note: '核心义：好笑的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked amusing even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得好笑的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'amusing.s1', en: 'They needed a amusing answer, not a long speech.', zh: '他们要的是好笑的的答复，不是长篇发言。', structure: 'amusing / 在句中表示 / 好笑的', grammar: 'adjective 用法，围绕「好笑的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are amusing.', right: 'The news is amusing.', reason: 'news 作主语时动词用单数。形容词 amusing 放在系动词后面。', rule: '先确定 amusing 是adjective，再套「好笑的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'amusing.q1', senseId: 'amusing.s1', errorType: 'meaning', type: '词义选择', prompt: '「amusing」在本条的核心意思是：', options: ['好笑的', '完全相反的意思', '与本词无关的语法术语'], answer: '好笑的', explain: 'amusing：好笑的。' },
      { id: 'amusing.q2', senseId: 'amusing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches amusing?', options: ['好笑的', 'a kind of ancient coin', 'the past tense of be'], answer: '好笑的', explain: '对的是「好笑的」。' },
      { id: 'amusing.q3', senseId: 'amusing.s1', errorType: 'grammar', type: '词义选择', prompt: 'amusing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'amusing.q4', senseId: 'amusing.s1', errorType: 'meaning', type: '词源', prompt: '记 amusing 时，下面哪句更稳妥？', options: ['先锁住「好笑的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「好笑的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['好笑的'] },
  });

  D('analog', {
    etymology: {
      origin: '现代英语常用词「analog」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'analog', gloss: '模拟的' },
      suffix: null,
      history: [
        { label: 'analog', text: '现代英语常用词「analog」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：模拟的。' },
      ],
      formationLogic: '核心义：模拟的。',
      mnemonic: '看到 analog，先说出「模拟的」，再放进一句自己的话。',
      note: '核心义：模拟的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one analog.', chinese: '这一章反复回到同一个点：模拟的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'analog.s1', en: 'Without that analog, the story would be hard to follow.', zh: '没有这个模拟的，故事会很难读下去。', structure: 'analog / 在句中表示 / 模拟的', grammar: 'noun 用法，围绕「模拟的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the analog.', right: 'He gave me a lot of advice about the analog.', reason: 'advice 不可数。名词 analog 的单复数也要按词典词形来，不要自造。', rule: '先确定 analog 是noun，再套「模拟的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'analog.q1', senseId: 'analog.s1', errorType: 'meaning', type: '词义选择', prompt: '「analog」在本条的核心意思是：', options: ['模拟的', '完全相反的意思', '与本词无关的语法术语'], answer: '模拟的', explain: 'analog：模拟的。' },
      { id: 'analog.q2', senseId: 'analog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches analog?', options: ['模拟的', 'a kind of ancient coin', 'the past tense of be'], answer: '模拟的', explain: '对的是「模拟的」。' },
      { id: 'analog.q3', senseId: 'analog.s1', errorType: 'grammar', type: '词义选择', prompt: 'analog 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'analog.q4', senseId: 'analog.s1', errorType: 'meaning', type: '词源', prompt: '记 analog 时，下面哪句更稳妥？', options: ['先锁住「模拟的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「模拟的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['模拟的'] },
  });

  D('analogous', {
    etymology: {
      origin: '英语派生：analog 加上词尾，构成与「类似的」相应的词类。',
      prefix: null,
      root: { text: 'analog', gloss: '词干，再加英语词尾' },
      suffix: null,
      history: [
        { label: 'analogous', text: '英语派生：analog 加上词尾，构成与「类似的」相应的词类。' },
        { label: '现在', text: '核心用法是：类似的。' },
      ],
      formationLogic: '先认词干 analog，再看词尾决定词性。',
      mnemonic: '看到 analogous，先说出「类似的」，再放进一句自己的话。',
      note: '先认词干 analog，再看词尾决定词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The result looked analogous even to a new reader.', chinese: '即使是初读者，也觉得这个结果显得类似的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'analogous.s1', en: 'They needed a analogous answer, not a long speech.', zh: '他们要的是类似的的答复，不是长篇发言。', structure: 'analogous / 在句中表示 / 类似的', grammar: 'adjective 用法，围绕「类似的」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are analogous.', right: 'The news is analogous.', reason: 'news 作主语时动词用单数。形容词 analogous 放在系动词后面。', rule: '先确定 analogous 是adjective，再套「类似的」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'analogous.q1', senseId: 'analogous.s1', errorType: 'meaning', type: '词义选择', prompt: '「analogous」在本条的核心意思是：', options: ['类似的', '完全相反的意思', '与本词无关的语法术语'], answer: '类似的', explain: 'analogous：类似的。' },
      { id: 'analogous.q2', senseId: 'analogous.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches analogous?', options: ['类似的', 'a kind of ancient coin', 'the past tense of be'], answer: '类似的', explain: '对的是「类似的」。' },
      { id: 'analogous.q3', senseId: 'analogous.s1', errorType: 'grammar', type: '词义选择', prompt: 'analogous 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'analogous.q4', senseId: 'analogous.s1', errorType: 'meaning', type: '词源', prompt: '记 analogous 时，下面哪句更稳妥？', options: ['先锁住「类似的」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「类似的」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['类似的'] },
  });

  D('analogue', {
    etymology: {
      origin: '现代英语常用词「analogue」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。',
      prefix: null,
      root: { text: 'analogue', gloss: '类似物' },
      suffix: null,
      history: [
        { label: 'analogue', text: '现代英语常用词「analogue」。这里不臆造未经核对的拉丁或希腊词根，只锁住现在的意思。' },
        { label: '现在', text: '核心用法是：类似物。' },
      ],
      formationLogic: '核心义：类似物。',
      mnemonic: '看到 analogue，先说出「类似物」，再放进一句自己的话。',
      note: '核心义：类似物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps returning to one analogue.', chinese: '这一章反复回到同一个点：类似物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'analogue.s1', en: 'Without that analogue, the story would be hard to follow.', zh: '没有这个类似物，故事会很难读下去。', structure: 'analogue / 在句中表示 / 类似物', grammar: 'noun 用法，围绕「类似物」。', rationale: '例句锁的是这个义项，不另造冷僻义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the analogue.', right: 'He gave me a lot of advice about the analogue.', reason: 'advice 不可数。名词 analogue 的单复数也要按词典词形来，不要自造。', rule: '先确定 analogue 是noun，再套「类似物」。', special: '多义词只取本条核心义，不要把其他词性的句子硬套过来。' },
    ],
    quiz: [
      { id: 'analogue.q1', senseId: 'analogue.s1', errorType: 'meaning', type: '词义选择', prompt: '「analogue」在本条的核心意思是：', options: ['类似物', '完全相反的意思', '与本词无关的语法术语'], answer: '类似物', explain: 'analogue：类似物。' },
      { id: 'analogue.q2', senseId: 'analogue.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches analogue?', options: ['类似物', 'a kind of ancient coin', 'the past tense of be'], answer: '类似物', explain: '对的是「类似物」。' },
      { id: 'analogue.q3', senseId: 'analogue.s1', errorType: 'grammar', type: '词义选择', prompt: 'analogue 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'analogue.q4', senseId: 'analogue.s1', errorType: 'meaning', type: '词源', prompt: '记 analogue 时，下面哪句更稳妥？', options: ['先锁住「类似物」，再核对词源', '随便造一个希腊词根', '把它当成另一个拼写相近的词'], answer: '先锁住「类似物」，再核对词源', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['类似物'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
