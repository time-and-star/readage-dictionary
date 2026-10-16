/* data/words/cet/author_depth_c2.js
 * 手敲深度补丁（C 批二）：accept/except、quiet/quite、principal/principle 三组经典易混。
 * 不改释义正文，只补词源、补充例句、语境长句、常见错误、即时检测。
 * 词源按公开词源史转写（Etymonline 供核对），历史分析与助记分开。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('except', {
    etymology: {
      origin: '拉丁语 exceptus，excipere「拿出去、排除」的过去分词',
      prefix: { text: 'ex-', gloss: '向外、排除' },
      root: { text: 'capere', gloss: '抓、拿（同 accept、capture）' },
      suffix: null,
      history: [
        { label: 'ex + capere', text: '拉丁语：向外拿' },
        { label: 'excipere → exceptus', text: '拉丁语：被挑出去的' },
        { label: 'except', text: '现代英语：除……之外（介词/连词为主）' },
      ],
      formationLogic: '从整体里拿出去，就是例外。accept 是拿进来，except 是拿出去。',
      mnemonic: 'accept（ac- 朝自己）是收下；except（ex- 向外）是排除。首字母 a/e 不同。',
      note: '动词 except（把……除外）较少见，考试以介词 except / except for 为主。',
      source: 'Etymonline — except',
    },
    extraExamples: [
      { sense: 1, english: 'The shop is open every day except Sunday.', chinese: '这家店除周日外每天都开门。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'except.s1', en: 'Everyone passed the check except one bag, which had to be opened by hand.', zh: '除了一只包需要手工开包检查，其他行李都通过了。', structure: 'Everyone passed the check / except one bag / which had to be opened.', grammar: 'except + 被排除的名词；which 从句补充说明那只包。', rationale: '不要写成 accept one bag。accept 是接受，except 是排除。', sourceType: 'authored' },
      { domain: '考试 · 语法', senseId: 'except.s1', en: 'She answered every question except the last one, which she left blank.', zh: '除最后一题空着没写，她每道题都答了。', structure: 'She answered every question / except the last one.', grammar: 'except 后直接接例外；except for 常用于先肯定整体再补例外。', rationale: '与 accept my apology（接受道歉）对照记。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'I accept Tom, nobody came.', right: 'Except Tom, nobody came. / Everyone came except Tom.', reason: '「除 Tom 之外」用 except，不是 accept。', rule: 'accept + 接受的对象；except + 被排除的对象。', special: 'expect（期待）又是一个词：I expect Tom tomorrow。' },
      { errorType: 'collocation', wrong: 'Everyone accept for Tom agreed.', right: 'Everyone except for Tom agreed. / Everyone except Tom agreed.', reason: '固定搭配是 except for，不是 accept for。', rule: 'except / except for + 例外。', special: 'accept an offer（接受提议）不能换成 except。' },
    ],
    quiz: [
      { id: 'except.q1', senseId: 'except.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Everyone is ready _____ John.', options: ['except', 'accept', 'expect'], answer: 'except', explain: '除约翰之外，用 except。' },
      { id: 'except.q2', senseId: 'except.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Please _____ my apology for being late.', options: ['accept', 'except', 'expect'], answer: 'accept', explain: '接受道歉用 accept。' },
      { id: 'except.q3', senseId: 'except.s1', errorType: 'meaning', type: '词义选择', prompt: 'I am _____ you to arrive at eight tomorrow.', options: ['expecting', 'excepting', 'accepting'], answer: 'expecting', explain: '期待某人做某事用 expect。' },
      { id: 'except.q4', senseId: 'except.s1', errorType: 'collocation', type: '介词搭配', prompt: 'The park is open daily _____ Monday.', options: ['except', 'accept', 'besides to'], answer: 'except', explain: '除周一外，用 except Monday。' },
      { id: 'except.q5', senseId: 'except.s1', errorType: 'grammar', type: '语法填空', prompt: '_____ for rain, we had a fine trip.', options: ['Except', 'Accept', 'Expect'], answer: 'Except', explain: '句首 Except for + 例外。' },
    ],
    usage: { domains: ['日常', '考试语法'], tone: '中性', commonConfusion: ['accept', 'expect'] },
  });

  D('quiet', {
    etymology: {
      origin: '拉丁语 quietus「静止的、平息的」，来自 quies「休息、安静」',
      prefix: null,
      root: { text: 'quies', gloss: '休息、安宁（同 quit 停止、quite 相当）' },
      suffix: null,
      history: [
        { label: 'quies', text: '拉丁语：休息、安静' },
        { label: 'quietus', text: '拉丁语：平静下来的' },
        { label: 'quiet', text: '现代英语：安静的；安静（形容词/名词）' },
      ],
      formationLogic: '躁动停下来，就是安静。',
      mnemonic: 'quiet 有两个音节 qui-et；quite 只有一个音节。quiet 结尾是 -et，quite 结尾是 -te，字母顺序不同。',
      note: '副词是 quietly。不要把 quiet 写成 quite。',
      source: 'Etymonline — quiet',
    },
    extraExamples: [
      { sense: 1, english: 'The reading room stays quiet even at noon.', chinese: '阅览室即使在中午也保持安静。' },
    ],
    contexts: [
      { domain: '学校 · 生活', senseId: 'quiet.s1', en: 'The teacher asked the back row to stay quiet because the class next door was taking a test.', zh: '老师请后排保持安静，因为隔壁班正在考试。', structure: 'The teacher / asked the back row / to stay quiet / because ...', grammar: 'stay / keep / be quiet。because 从句说明原因。', rationale: '描述声音小，不是程度副词 quite。', sourceType: 'authored' },
      { domain: '日常', senseId: 'quiet.s1', en: 'We found a quiet corner in the park and finished the whole plan there.', zh: '我们在公园找了个安静的角落，在那里把整个计划写完了。', structure: 'We / found / a quiet corner / and finished the plan.', grammar: 'quiet 作定语修饰 corner。', rationale: 'a quiet room / a quiet street 都是「安静的」义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The library is quite today.', right: 'The library is quiet today.', reason: '图书馆安静用 quiet；quite 是程度副词，不能单独作表语表示安静。', rule: 'be quiet / keep quiet；quite + 形容词 / 副词。', special: 'quite good（相当好）vs a quiet room（安静的房间）。' },
      { errorType: 'collocation', wrong: 'Please quite down.', right: 'Please quiet down. / Please keep quiet.', reason: '安静下来用 quiet down；quite 没有动词用法。', rule: 'quiet down / keep quiet / stay quiet。', special: 'quiet 也有名词用法 a moment of quiet，quite 没有。' },
    ],
    quiz: [
      { id: 'quiet.q1', senseId: 'quiet.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Please keep _____ in the hall.', options: ['quiet', 'quite', 'quit'], answer: 'quiet', explain: '保持安静用 keep quiet。' },
      { id: 'quiet.q2', senseId: 'quiet.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The exam was _____ hard this time.', options: ['quite', 'quiet', 'quit'], answer: 'quite', explain: '相当难用 quite hard。' },
      { id: 'quiet.q3', senseId: 'quiet.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which word is an adjective meaning silent?', options: ['quiet', 'quite', 'quit'], answer: 'quiet', explain: 'quiet 是形容词安静的；quit 是动词停止。' },
      { id: 'quiet.q4', senseId: 'quiet.s1', errorType: 'collocation', type: '介词搭配', prompt: 'The baby finally went _____.', options: ['quiet', 'quite', 'quitely'], answer: 'quiet', explain: 'go quiet 安静下来；副词是 quietly。' },
      { id: 'quiet.q5', senseId: 'quiet.s1', errorType: 'grammar', type: '语法填空', prompt: 'She spoke in a _____ voice so as not to wake him.', options: ['quiet', 'quite', 'quilt'], answer: 'quiet', explain: 'a quiet voice 轻声。' },
    ],
    usage: { domains: ['日常', '学校'], tone: '中性', commonConfusion: ['quite', 'quit'] },
  });

  D('quite', {
    etymology: {
      origin: '中古英语 quite，经古法语 quite「了结的、完全解除的」，源自拉丁语 quietus',
      prefix: null,
      root: { text: 'quietus', gloss: '已平息、已了结（同 quiet）' },
      suffix: null,
      history: [
        { label: 'quietus', text: '拉丁语：平息的、了结的' },
        { label: 'quite', text: '古法语：完全解除、不欠什么' },
        { label: 'quite', text: '现代英语：相当、颇；完全（依语境）' },
      ],
      formationLogic: '事情彻底了结，就是「完全」；程度很足，就是「相当」。',
      mnemonic: 'quiet 与 quite 同源。quiet 是状态安静；quite 是程度。quite 后面一定跟形容词或副词，不单独结句。',
      note: '英式 quite good 常只表示还算好，美式常接近相当好，具体强度看语境。',
      source: 'Etymonline — quite',
    },
    extraExamples: [
      { sense: 1, english: 'The hill is quite steep, so take the cable car if your knees hurt.', chinese: '这座山相当陡，如果膝盖不好就坐缆车。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'quite.s1', en: 'The soup is quite good, but it needs a little more salt.', zh: '这汤还算好，但还得再加点盐。', structure: 'The soup / is quite good / but it needs more salt.', grammar: 'quite + 形容词。but 转折说明只是还算好。', rationale: 'quite 修饰 good，不是安静的房间（a quiet room）。', sourceType: 'authored' },
      { domain: '考试 · 语法', senseId: 'quite.s1', en: 'The two answers look alike, but their meanings are quite different.', zh: '两个答案看起来像，但意思很不一样。', structure: 'The two answers / look alike / but their meanings are quite different.', grammar: 'quite + different。look alike 看起来相像。', rationale: 'quite different = 很不一样；a quiet street = 安静的街道。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'It was a quite evening.', right: 'It was a quiet evening. / The evening was quite calm.', reason: '安静的夜晚用 quiet；quite 不能直接修饰名词 evening。', rule: 'a quiet + 名词；quite + 形容词 / 副词。', special: 'quite a night（好一个夜晚）是感叹结构，不是安静。' },
      { errorType: 'grammar', wrong: 'She is quite tiredly today.', right: 'She is quite tired today.', reason: 'quite 后接形容词 tired，不接副词 tiredly。', rule: 'quite + 形容词 / 副词原级；very 也一样。', special: 'quite + a + 形容词 + 名词：quite a good film。' },
    ],
    quiz: [
      { id: 'quite.q1', senseId: 'quite.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The street was _____ at midnight.', options: ['quiet', 'quite', 'quit'], answer: 'quiet', explain: '午夜街道安静，用 quiet。' },
      { id: 'quite.q2', senseId: 'quite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Her English is _____ fluent now.', options: ['quite', 'quiet', 'quit'], answer: 'quite', explain: '相当流利用 quite fluent。' },
      { id: 'quite.q3', senseId: 'quite.s1', errorType: 'grammar', type: '语法填空', prompt: 'It was _____ a difficult test.', options: ['quite', 'quiet', 'quilt'], answer: 'quite', explain: 'quite a + 形容词 + 名词。' },
      { id: 'quite.q4', senseId: 'quite.s1', errorType: 'collocation', type: '介词搭配', prompt: 'They are _____ different in character.', options: ['quite', 'quiet', 'quit'], answer: 'quite', explain: '很不一样用 quite different。' },
      { id: 'quite.q5', senseId: 'quite.s1', errorType: 'meaning', type: '词义选择', prompt: 'Quiet is to silent as quite is to _____.', options: ['rather', 'quit', 'quilt'], answer: 'rather', explain: 'quite 近义 rather（相当）。' },
    ],
    usage: { domains: ['日常', '口语'], tone: '中性，强度依语境', commonConfusion: ['quiet', 'quit'] },
  });

  D('principal', {
    etymology: {
      origin: '拉丁语 principalis，来自 princeps「首领、第一人」',
      prefix: { text: 'prim-', gloss: '第一（同 prime、primary）' },
      root: { text: 'capere', gloss: '拿、占据（princeps = 占第一位的人）' },
      suffix: { text: '-al', gloss: '形容词后缀；作名词指人' },
      history: [
        { label: 'primus + capere', text: '拉丁语：占第一位' },
        { label: 'princeps → principalis', text: '拉丁语：首领的、主要的' },
        { label: 'principal', text: '现代英语：校长；负责人；主要的（结尾 -al）' },
      ],
      formationLogic: '排第一的人就是负责人；排第一的性质就是主要的。',
      mnemonic: 'principal 结尾是 -al（可联想 all：校长管所有人）。principle 结尾是 -le（可联想 rule：原则）。',
      note: '金融里 principal 还有「本金」义，本词条先记校长和主要的。',
      source: 'Etymonline — principal',
    },
    extraExamples: [
      { sense: 1, english: 'The new principal changed the lunch rules in her first month.', chinese: '新校长上任第一个月就改了午餐规定。' },
      { sense: 2, english: 'Cost is the principal reason we delayed the trip.', chinese: '费用是我们推迟这趟出行的主要原因。' },
    ],
    contexts: [
      { domain: '教育', senseId: 'principal.s1', en: 'Parents waited outside while the principal explained why the school day would start later.', zh: '家长们在外面等着，校长解释为什么上学时间要推迟。', structure: 'Parents waited outside / while the principal explained why ...', grammar: 'principal 作名词校长；why 从句作 explained 的宾语。', rationale: '主语是人（校长），不是原则（principle）。', sourceType: 'authored' },
      { domain: '正式 · 学术', senseId: 'principal.s2', en: 'The principal difference between the two plans is who pays for repairs.', zh: '两个计划的主要区别在于谁出维修费。', structure: 'The principal difference / is / who pays for repairs.', grammar: 'principal 作形容词主要的，修饰 difference。', rationale: 'principal aim / principal reason 都是「主要的」义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He follows strict principals in life.', right: 'He follows strict principles in life.', reason: '生活原则用 principle；principal 是校长或主要的。', rule: 'a moral principle；the school principal；the principal reason。', special: 'principal 结尾 -pal 可联想 pal（朋友）：校长是你的朋友；principle 结尾 -ple 可联想 rule。' },
      { errorType: 'collocation', wrong: 'Our principle goal is lower cost.', right: 'Our principal goal is lower cost.', reason: '主要目标用形容词 principal；principle 是名词原则。', rule: 'principal + 名词；a matter of principle（原则问题）。', special: 'in principle（原则上）vs the principal（校长/负责人）。' },
    ],
    quiz: [
      { id: 'principal.q1', senseId: 'principal.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The _____ gave a speech on the first day.', options: ['principal', 'principle', 'pal'], answer: 'principal', explain: '开学致辞的是校长 principal。' },
      { id: 'principal.q2', senseId: 'principal.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Honesty is a good _____.', options: ['principle', 'principal', 'pal'], answer: 'principle', explain: '诚实是一项原则，用 principle。' },
      { id: 'principal.q3', senseId: 'principal.s2', errorType: 'meaning', type: '词义选择', prompt: 'Our _____ concern is safety.', options: ['principal', 'principle', 'discipline'], answer: 'principal', explain: '主要关切用形容词 principal。' },
      { id: 'principal.q4', senseId: 'principal.s1', errorType: 'collocation', type: '介词搭配', prompt: 'As a matter of _____, we do not take gifts.', options: ['principle', 'principal', 'discipline'], answer: 'principle', explain: 'as a matter of principle 出于原则。' },
      { id: 'principal.q5', senseId: 'principal.s2', errorType: 'meaning', type: '词义选择', prompt: 'Which ending signals -person or -main?', options: ['-pal as in principal', '-ple as in principle', '-ble as in table'], answer: '-pal as in principal', explain: 'principal 结尾 -pal，对应人或主要的。' },
    ],
    usage: { domains: ['教育', '正式'], tone: '中性', commonConfusion: ['principle'] },
  });

  D('principle', {
    etymology: {
      origin: '拉丁语 principium「开端、基础」，来自 princeps（第一）',
      prefix: { text: 'prim-', gloss: '第一' },
      root: { text: 'capere', gloss: '拿、取（principium = 最先拿住的东西）' },
      suffix: { text: '-ium', gloss: '名词后缀，表示事物' },
      history: [
        { label: 'primus + capere', text: '拉丁语：最先抓住的' },
        { label: 'principium', text: '拉丁语：开端、基础、原则' },
        { label: 'principle', text: '现代英语：原则；原理（结尾 -le）' },
      ],
      formationLogic: '最根本、最先立住的东西，就是原则和原理。',
      mnemonic: 'principle 以 -ple 结尾，可对照 rule 记「规则」。principal 以 -pal 结尾，对照 pal（朋友）记「校长」。',
      note: '科学语境 the principles of physics（物理学原理）也是同一词。',
      source: 'Etymonline — principle',
    },
    extraExamples: [
      { sense: 1, english: 'The club runs on a simple principle: everyone cleans up after themselves.', chinese: '这个社团靠一条简单的原则运转：每个人用完自己收拾。' },
    ],
    contexts: [
      { domain: '通用 · 学术', senseId: 'principle.s1', en: 'The report lists three principles for fair testing, then shows how each school followed them.', zh: '报告列出公平测试的三项原则，然后说明各校是如何遵守的。', structure: 'The report / lists three principles / then shows how each school followed them.', grammar: 'principle 可数；follow / break a principle。', rationale: 'principles 在此是准则，不是校长。', sourceType: 'authored' },
      { domain: '伦理', senseId: 'principle.s1', en: 'She refused the gift as a matter of principle, not because she disliked the giver.', zh: '她谢绝礼物是出于原则，不是因为不喜欢送礼的人。', structure: 'She refused the gift / as a matter of principle / not because ...', grammar: 'as a matter of principle 出于原则（固定短语）。', rationale: 'in principle（原则上）也是同一词，不要换成 principal。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The school principle is kind.', right: 'The school principal is kind.', reason: '学校的校长用 principal；principle 是原则。', rule: 'the school principal；a moral principle。', special: '发音相同，靠 -pal / -ple 区分。' },
      { errorType: 'collocation', wrong: 'On principle, the match starts at nine.', right: 'In principle, the match starts at nine. / The principal announced the match at nine.', reason: '原则上 fixed 是 in principle；on 开头的是 on time / on schedule。', rule: 'in principle（原则上）；the principal announces（校长宣布）。', special: 'principled（有原则的）是形容词：a principled decision。' },
    ],
    quiz: [
      { id: 'principle.q1', senseId: 'principle.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The _____ welcomed new students.', options: ['principal', 'principle', 'discipline'], answer: 'principal', explain: '迎新的是校长 principal。' },
      { id: 'principle.q2', senseId: 'principle.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Fairness is our guiding _____.', options: ['principle', 'principal', 'discipline'], answer: 'principle', explain: '指导原则用 principle。' },
      { id: 'principle.q3', senseId: 'principle.s1', errorType: 'collocation', type: '介词搭配', prompt: '_____, I agree with the plan.', options: ['In principle', 'On principle', 'At principle'], answer: 'In principle', explain: '原则上用 in principle。' },
      { id: 'principle.q4', senseId: 'principle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Newton’s _____ of motion are taught in physics.', options: ['principles', 'principals', 'disciples'], answer: 'principles', explain: '运动原理用 principles。' },
      { id: 'principle.q5', senseId: 'principle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which pair is correct?', options: ['principal: head; principle: rule', 'principal: rule; principle: head', 'principal: rain; principle: reign'], answer: 'principal: head; principle: rule', explain: 'principal 对人/主要的，principle 对规则。' },
    ],
    usage: { domains: ['通用', '学术', '伦理'], tone: '中性偏正式', commonConfusion: ['principal'] },
  });
})(typeof window !== 'undefined' ? window : globalThis);
