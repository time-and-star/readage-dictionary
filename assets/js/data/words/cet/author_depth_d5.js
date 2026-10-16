/* data/words/cet/author_depth_d5.js
 * 手敲深度补丁：badly–big（200）.
 * 不改释义正文。派生关系只写英语内部清楚的构词，不臆测拉丁或希腊词源。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('badly', {
    etymology: {
      origin: '英语派生：bad + -ly',
      prefix: null,
      root: { text: 'bad', gloss: '坏的、差的、严重的' },
      suffix: { text: '-ly', gloss: '副词后缀' },
      history: [
        { label: 'bad', text: '坏的、差的、严重的，是后来派生的基础。' },
        { label: 'badly', text: '糟糕地；严重地；非常' },
      ],
      mnemonic: 'badly 修饰动作或程度；bad 修饰名词或感受。',
      note: 'want badly 是非常想要，不是坏心眼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She wanted the scholarship badly and rewrote the essay twice.', chinese: '她非常想拿到奖学金，把文章改了两遍。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'badly.s1', en: 'The tent leaked badly when the wind drove rain under the flap.', zh: '风把雨吹进篷布时，帐篷漏得很厉害。', structure: 'The tent leaked  / badly /  when the wind drove rain under the flap.', grammar: 'badly 放在动词后，表示方式差或程度重。', rationale: '这里 badly 表示漏得严重，不是恶意。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He plays the violin bad.', right: 'He plays the violin badly.', reason: '修饰动词要用副词 badly，不能用形容词 bad。', rule: '方式或程度用 badly；feel bad 里 bad 是形容词。', special: '比较级常用 worse，不要生造 more badlier。' },
    ],
    quiz: [
      { id: 'badly.q1', senseId: 'badly.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: In a bad way; very much.', options: ['badly', 'badminton', 'bake'], answer: 'badly', explain: 'badly：糟糕地；严重地；非常' },
      { id: 'badly.q2', senseId: 'badly.s1', errorType: 'meaning', type: '词义', prompt: 'She wanted the scholarship _____ and rewrote the essay twice.', options: ['badly', 'badminton', 'bake'], answer: 'badly', explain: '空格需要 badly。' },
      { id: 'badly.q3', senseId: 'badly.s1', errorType: 'grammar', type: '易错', prompt: '糟糕地；严重地；非常 应选哪一句？', options: ['He plays the violin badly.', 'He plays the violin bad.', '词形或搭配不对。'], answer: 'He plays the violin badly.', explain: '修饰动词要用副词 badly，不能用形容词 bad。' },
      { id: 'badly.q4', senseId: 'badly.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：糟糕地；严重地；非常', options: ['badly', 'badminton', 'bake'], answer: 'badly', explain: '中文义对应 badly。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '可表程度', commonConfusion: ['bad'] },
  });

  D('badminton', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'badminton', text: '现行词形，词性：noun。' },
        { label: 'badminton', text: '羽毛球运动' },
      ],
      mnemonic: '记住球拍加羽毛球，不是网球。',
      note: '可数的是一场比赛 a game of badminton，运动本身常不可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We booked a court and played badminton until the lights dimmed.', chinese: '我们订了场地，打羽毛球一直打到灯光转暗。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'badminton.s1', en: 'Badminton needs a shuttlecock, not a large ball.', zh: '羽毛球用的是球，不是大皮球。', structure: 'Badminton needs a shuttlecock, not a large ball.', grammar: '不可数运动名词，作 play 的宾语。', rationale: '本句讲这项运动本身。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They play the badminton.', right: 'They play badminton.', reason: '运动名称前通常不加 the。', rule: 'play badminton，不加冠词。', special: '场地是 court，不是 pitch。' },
    ],
    quiz: [
      { id: 'badminton.q1', senseId: 'badminton.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A game with rackets and a shuttlecock.', options: ['badminton', 'baffle', 'baked'], answer: 'badminton', explain: 'badminton：羽毛球运动' },
      { id: 'badminton.q2', senseId: 'badminton.s1', errorType: 'meaning', type: '词义', prompt: 'We booked a court and played _____ until the lights dimmed.', options: ['badminton', 'baffle', 'baked'], answer: 'badminton', explain: '空格需要 badminton。' },
      { id: 'badminton.q3', senseId: 'badminton.s1', errorType: 'collocation', type: '易错', prompt: '羽毛球运动 应选哪一句？', options: ['They play badminton.', 'They play the badminton.', '词形或搭配不对。'], answer: 'They play badminton.', explain: '运动名称前通常不加 the。' },
      { id: 'badminton.q4', senseId: 'badminton.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：羽毛球运动', options: ['badminton', 'baffle', 'baked'], answer: 'badminton', explain: '中文义对应 badminton。' },
    ],
    usage: { domains: ['体育', '考试'], tone: '中性', commonConfusion: ['tennis'] },
  });

  D('baffle', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'baffle', text: '现行词形，词性：verb。' },
        { label: 'baffle', text: '使困惑；难住' },
      ],
      mnemonic: 'baffle 的结果是人愣住，想不出下一步。',
      note: '名词 bafflement 是困惑，本条先记动词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The extra lock seemed to baffle every visitor who tried the door.', chinese: '那把额外的锁似乎难住了每一个想开门的客人。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'baffle.s1', en: 'A missing page can baffle readers who expect a clear ending.', zh: '缺了一页，会让期待清楚结局的读者完全摸不着头脑。', structure: 'A missing page can  / baffle /  readers who expect a clear ending.', grammar: '及物动词，宾语是被难住的人。', rationale: 'visitor 是被弄糊涂的对象。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The map baffled to us.', right: 'The map baffled us.', reason: 'baffle 直接接人，不加 to。', rule: 'baffle somebody。被动：be baffled by。', special: '语气比 confuse 更彻底。' },
    ],
    quiz: [
      { id: 'baffle.q1', senseId: 'baffle.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To confuse someone completely.', options: ['baffle', 'bag', 'balance'], answer: 'baffle', explain: 'baffle：使困惑；难住' },
      { id: 'baffle.q2', senseId: 'baffle.s1', errorType: 'meaning', type: '词义', prompt: 'The extra lock seemed to _____ every visitor who tried the door.', options: ['baffle', 'bag', 'balance'], answer: 'baffle', explain: '空格需要 baffle。' },
      { id: 'baffle.q3', senseId: 'baffle.s1', errorType: 'grammar', type: '易错', prompt: '使困惑；难住 应选哪一句？', options: ['The map baffled us.', 'The map baffled to us.', '词形或搭配不对。'], answer: 'The map baffled us.', explain: 'baffle 直接接人，不加 to。' },
      { id: 'baffle.q4', senseId: 'baffle.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：使困惑；难住', options: ['baffle', 'bag', 'balance'], answer: 'baffle', explain: '中文义对应 baffle。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['puzzle'] },
  });

  D('bag', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bag', text: '现行词形，词性：noun。' },
        { label: 'bag', text: '袋子；一袋之量' },
      ],
      mnemonic: 'bag 是容器，of 后面才是装的东西。',
      note: '也可说一袋之量：a bag of rice。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Please put the apples in a paper bag, not a plastic one.', chinese: '请把苹果放进纸袋，不要塑料袋。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bag.s1', en: 'She carried a heavy bag of books up three flights of stairs.', zh: '她提着一袋很重的书爬了三层楼梯。', structure: 'She carried a heavy  / bag /  of books up three flights of stairs.', grammar: '可数名词，常用 a bag of。', rationale: '这里 bag 是装书的袋子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I bought a bag apple.', right: 'I bought a bag of apples.', reason: '一袋东西要用 a bag of。', rule: 'a bag of + 名词。', special: 'baggage 是行李总称，不是一只袋子。' },
    ],
    quiz: [
      { id: 'bag.q1', senseId: 'bag.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A container made of paper or plastic.', options: ['bag', 'baggage', 'balanced'], answer: 'bag', explain: 'bag：袋子；一袋之量' },
      { id: 'bag.q2', senseId: 'bag.s1', errorType: 'meaning', type: '词义', prompt: 'Please put the apples in a paper _____, not a plastic one.', options: ['bag', 'baggage', 'balanced'], answer: 'bag', explain: '空格需要 bag。' },
      { id: 'bag.q3', senseId: 'bag.s1', errorType: 'collocation', type: '易错', prompt: '袋子；一袋之量 应选哪一句？', options: ['I bought a bag of apples.', 'I bought a bag apple.', '词形或搭配不对。'], answer: 'I bought a bag of apples.', explain: '一袋东西要用 a bag of。' },
      { id: 'bag.q4', senseId: 'bag.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：袋子；一袋之量', options: ['bag', 'baggage', 'balanced'], answer: 'bag', explain: '中文义对应 bag。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['baggage'] },
  });

  D('baggage', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'baggage', text: '现行词形，词性：noun。' },
        { label: 'baggage', text: '行李' },
      ],
      mnemonic: 'baggage 是旅行时全部行李的总称。',
      note: '英式也说 luggage，意思接近。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The airline lost his baggage and sent it to the hotel the next day.', chinese: '航空公司弄丢了他的行李，第二天才送到旅馆。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'baggage.s1', en: 'Please keep your baggage with you while you wait for the train.', zh: '等火车时请把行李放在身边。', structure: 'Please keep your  / baggage /  with you while you wait for the train.', grammar: '不可数名词，作宾语。', rationale: '指旅途中携带的行李整体。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She has three baggages.', right: 'She has three pieces of baggage.', reason: 'baggage 不可数，件数用 piece of baggage。', rule: '不可数：much baggage；a piece of baggage。', special: '不要用 baggages。' },
    ],
    quiz: [
      { id: 'baggage.q1', senseId: 'baggage.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The bags you take when travelling.', options: ['baggage', 'bags', 'balcony'], answer: 'baggage', explain: 'baggage：行李' },
      { id: 'baggage.q2', senseId: 'baggage.s1', errorType: 'meaning', type: '词义', prompt: 'The airline lost his _____ and sent it to the hotel the next day.', options: ['baggage', 'bags', 'balcony'], answer: 'baggage', explain: '空格需要 baggage。' },
      { id: 'baggage.q3', senseId: 'baggage.s1', errorType: 'grammar', type: '易错', prompt: '行李 应选哪一句？', options: ['She has three pieces of baggage.', 'She has three baggages.', '词形或搭配不对。'], answer: 'She has three pieces of baggage.', explain: 'baggage 不可数，件数用 piece of baggage。' },
      { id: 'baggage.q4', senseId: 'baggage.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：行李', options: ['baggage', 'bags', 'balcony'], answer: 'baggage', explain: '中文义对应 baggage。' },
    ],
    usage: { domains: ['旅行', '考试'], tone: '中性', commonConfusion: ['bag'] },
  });

  D('bags', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bags', text: '现行词形，词性：noun。' },
        { label: 'bags', text: '包袋；大量（复数）' },
      ],
      mnemonic: 'bags 可以是真的袋子，也可以是口语里的大量。',
      note: 'bags of 表示很多，偏口语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The students left their bags under the desk before the test.', chinese: '学生们考试前把书包放在桌子下面。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bags.s1', en: 'There were bags of time, so nobody rushed the last question.', zh: '时间还很多，所以没有人赶最后一题。', structure: 'There were  / bags /  of time, so nobody rushed the last question.', grammar: '名词复数，或 bags of 表示大量。', rationale: '第一义是学生的书包。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'I have many bag.', right: 'I have many bags.', reason: '两个以上的袋子用复数 bags。', rule: '复数加 -s；大量是 bags of。', special: 'baggage 仍然不可数。' },
    ],
    quiz: [
      { id: 'bags.q1', senseId: 'bags.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Containers for carrying things, or a lot of something.', options: ['bags', 'bail', 'bald'], answer: 'bags', explain: 'bags：包袋；大量（复数）' },
      { id: 'bags.q2', senseId: 'bags.s1', errorType: 'meaning', type: '词义', prompt: 'The students left their _____ under the desk before the test.', options: ['bags', 'bail', 'bald'], answer: 'bags', explain: '空格需要 bags。' },
      { id: 'bags.q3', senseId: 'bags.s1', errorType: 'grammar', type: '易错', prompt: '包袋；大量（复数） 应选哪一句？', options: ['I have many bags.', 'I have many bag.', '词形或搭配不对。'], answer: 'I have many bags.', explain: '两个以上的袋子用复数 bags。' },
      { id: 'bags.q4', senseId: 'bags.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：包袋；大量（复数）', options: ['bags', 'bail', 'bald'], answer: 'bags', explain: '中文义对应 bags。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bag'] },
  });

  D('bail', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bail', text: '现行词形，词性：noun。' },
        { label: 'bail', text: '保释；保释金' },
      ],
      mnemonic: 'bail 是交给法院的钱，用来换暂时的自由。',
      note: '也可作动词：保释某人。本条按名词记。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The court set bail at a sum his family could not raise.', chinese: '法院定的保释金高到他家凑不出来。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'bail.s1', en: 'She was released on bail and told to return for the hearing.', zh: '她获得保释，并被要求开庭时回来。', structure: 'She was released on  / bail /  and told to return for the hearing.', grammar: '名词，常与 on bail 连用。', rationale: '指法院允许暂时离押所要求的钱。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He paid the bail money for free the prisoner.', right: 'He was released on bail.', reason: '保释的常见搭配是 on bail，不是 for free。', rule: 'release somebody on bail；grant bail。', special: '不要和 bait（诱饵）搞混。' },
    ],
    quiz: [
      { id: 'bail.q1', senseId: 'bail.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Money left with a court so an accused person can go free.', options: ['bail', 'bait', 'ball'], answer: 'bail', explain: 'bail：保释；保释金' },
      { id: 'bail.q2', senseId: 'bail.s1', errorType: 'meaning', type: '词义', prompt: 'The court set _____ at a sum his family could not raise.', options: ['bail', 'bait', 'ball'], answer: 'bail', explain: '空格需要 bail。' },
      { id: 'bail.q3', senseId: 'bail.s1', errorType: 'collocation', type: '易错', prompt: '保释；保释金 应选哪一句？', options: ['He was released on bail.', 'He paid the bail money for free the prisoner.', '词形或搭配不对。'], answer: 'He was released on bail.', explain: '保释的常见搭配是 on bail，不是 for free。' },
      { id: 'bail.q4', senseId: 'bail.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：保释；保释金', options: ['bail', 'bait', 'ball'], answer: 'bail', explain: '中文义对应 bail。' },
    ],
    usage: { domains: ['法律', '考试'], tone: '中性', commonConfusion: ['bait'] },
  });

  D('bait', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bait', text: '现行词形，词性：noun。' },
        { label: 'bait', text: '饵；诱饵；引诱' },
      ],
      mnemonic: 'bait 先想到鱼饵，再想到引人上当的东西。',
      note: '作动词时是用饵引诱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The angler put fresh bait on the hook and waited in silence.', chinese: '钓鱼的人把新鲜的饵装上钩，安静地等着。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bait.s1', en: 'A very low price can be bait for people who do not read the terms.', zh: '极低的价格会引诱那些不看条款的人。', structure: 'A very low price can be  / bait /  for people who do not read the terms.', grammar: '名词作 put 的宾语。', rationale: '钩上的 bait 是鱼饵。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They used a bait for catch fish.', right: 'They used bait to catch fish.', reason: '目的用 to do，不用 for catch。', rule: 'bait 可不可数；use bait to do。', special: 'bail 是保释，拼写只差一个字母。' },
    ],
    quiz: [
      { id: 'bait.q1', senseId: 'bait.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Food used to catch fish or animals; to tempt.', options: ['bait', 'bake', 'ballet'], answer: 'bait', explain: 'bait：饵；诱饵；引诱' },
      { id: 'bait.q2', senseId: 'bait.s1', errorType: 'meaning', type: '词义', prompt: 'The angler put fresh _____ on the hook and waited in silence.', options: ['bait', 'bake', 'ballet'], answer: 'bait', explain: '空格需要 bait。' },
      { id: 'bait.q3', senseId: 'bait.s1', errorType: 'grammar', type: '易错', prompt: '饵；诱饵；引诱 应选哪一句？', options: ['They used bait to catch fish.', 'They used a bait for catch fish.', '词形或搭配不对。'], answer: 'They used bait to catch fish.', explain: '目的用 to do，不用 for catch。' },
      { id: 'bait.q4', senseId: 'bait.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：饵；诱饵；引诱', options: ['bait', 'bake', 'ballet'], answer: 'bait', explain: '中文义对应 bait。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['bail'] },
  });

  D('bake', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bake', text: '现行词形，词性：verb。' },
        { label: 'bake', text: '烤；焙；烘' },
      ],
      mnemonic: '烤箱里做熟就是 bake。',
      note: '烤好的面包是 baked bread。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We will bake the bread early so it is cool by noon.', chinese: '我们会早点烤面包，好让它中午之前凉下来。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'bake.s1', en: 'Do not bake the cake any longer, or the top will burn.', zh: '蛋糕不要再烤了，否则表面会焦。', structure: 'Do not  / bake /  the cake any longer, or the top will burn.', grammar: '及物动词，宾语是食物。', rationale: '面包在烤箱里烤。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She baked the fish on the pan in oil.', right: 'She baked the fish in the oven.', reason: 'bake 是用烤箱的干热，油锅里炒不是 bake。', rule: 'bake + 食物 + in the oven。', special: '在明火上烤常用 grill 或 roast，看具体做法。' },
    ],
    quiz: [
      { id: 'bake.q1', senseId: 'bake.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To cook in an oven.', options: ['bake', 'baked', 'balloon'], answer: 'bake', explain: 'bake：烤；焙；烘' },
      { id: 'bake.q2', senseId: 'bake.s1', errorType: 'meaning', type: '词义', prompt: 'We will _____ the bread early so it is cool by noon.', options: ['bake', 'baked', 'balloon'], answer: 'bake', explain: '空格需要 bake。' },
      { id: 'bake.q3', senseId: 'bake.s1', errorType: 'collocation', type: '易错', prompt: '烤；焙；烘 应选哪一句？', options: ['She baked the fish in the oven.', 'She baked the fish on the pan in oil.', '词形或搭配不对。'], answer: 'She baked the fish in the oven.', explain: 'bake 是用烤箱的干热，油锅里炒不是 bake。' },
      { id: 'bake.q4', senseId: 'bake.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：烤；焙；烘', options: ['bake', 'baked', 'balloon'], answer: 'bake', explain: '中文义对应 bake。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['boil'] },
  });

  D('baked', {
    etymology: {
      origin: '英语派生：bake + -ed',
      prefix: null,
      root: { text: 'bake', gloss: '烘烤' },
      suffix: { text: '-ed', gloss: '构成形容词或过去分词' },
      history: [
        { label: 'bake', text: '烘烤，是后来派生的基础。' },
        { label: 'baked', text: '烤的；烘焙的' },
      ],
      mnemonic: 'baked 说明已经用烤箱做过。',
      note: '放在名词前：baked beans。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The baked potatoes were still hot when they reached the table.', chinese: '烤土豆端上桌时还是热的。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'baked.s1', en: 'She prefers baked apples to raw ones in winter.', zh: '冬天她更喜欢烤苹果，而不是生的。', structure: 'She prefers  / baked /  apples to raw ones in winter.', grammar: '形容词修饰 potatoes。', rationale: '土豆是烤熟的。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'This is a bake potato.', right: 'This is a baked potato.', reason: '形容词要用 baked，不是动词原形 bake。', rule: 'baked + 名词。', special: '动词过去式也拼 baked，要看位置。' },
    ],
    quiz: [
      { id: 'baked.q1', senseId: 'baked.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Cooked using dry heat in an oven.', options: ['baked', 'balance', 'ballot'], answer: 'baked', explain: 'baked：烤的；烘焙的' },
      { id: 'baked.q2', senseId: 'baked.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ potatoes were still hot when they reached the table.', options: ['baked', 'balance', 'ballot'], answer: 'baked', explain: '空格需要 baked。' },
      { id: 'baked.q3', senseId: 'baked.s1', errorType: 'grammar', type: '易错', prompt: '烤的；烘焙的 应选哪一句？', options: ['This is a baked potato.', 'This is a bake potato.', '词形或搭配不对。'], answer: 'This is a baked potato.', explain: '形容词要用 baked，不是动词原形 bake。' },
      { id: 'baked.q4', senseId: 'baked.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：烤的；烘焙的', options: ['baked', 'balance', 'ballot'], answer: 'baked', explain: '中文义对应 baked。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['bake'] },
  });

  D('balance', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'balance', text: '现行词形，词性：noun。' },
        { label: 'balance', text: '平衡；余额；使平衡' },
      ],
      mnemonic: 'balance 可以是身体不倒，也可以是账上剩下的钱。',
      note: '动词义是使平衡。本句先用名词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She lost her balance on the wet step and caught the rail.', chinese: '她在湿台阶上失去平衡，抓住了栏杆。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'balance.s1', en: 'The account balance was lower than he expected after the rent.', zh: '付完房租后，账户余额比他预料的更低。', structure: 'The account  / balance /  was lower than he expected after the rent.', grammar: '不可数或可数视义项；本句是不可数的平衡。', rationale: '指身体重心不稳。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He lost the balance of the bike.', right: 'He lost his balance on the bike.', reason: '身体平衡用 lose your balance 这类说法，不要说 lose the balance of the bike。', rule: 'lose your balance；account balance。', special: 'on balance 表示总的看来。' },
    ],
    quiz: [
      { id: 'balance.q1', senseId: 'balance.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: An even distribution; the money left in an account.', options: ['balance', 'balanced', 'bamboo'], answer: 'balance', explain: 'balance：平衡；余额；使平衡' },
      { id: 'balance.q2', senseId: 'balance.s1', errorType: 'meaning', type: '词义', prompt: 'She lost her _____ on the wet step and caught the rail.', options: ['balance', 'balanced', 'bamboo'], answer: 'balance', explain: '空格需要 balance。' },
      { id: 'balance.q3', senseId: 'balance.s1', errorType: 'collocation', type: '易错', prompt: '平衡；余额；使平衡 应选哪一句？', options: ['He lost his balance on the bike.', 'He lost the balance of the bike.', '词形或搭配不对。'], answer: 'He lost his balance on the bike.', explain: '身体平衡用 lose your balance 这类说法，不要说 lose the balance of the bike。' },
      { id: 'balance.q4', senseId: 'balance.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：平衡；余额；使平衡', options: ['balance', 'balanced', 'bamboo'], answer: 'balance', explain: '中文义对应 balance。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['scale'] },
  });

  D('balanced', {
    etymology: {
      origin: '英语派生：balance + -ed',
      prefix: null,
      root: { text: 'balance', gloss: '平衡' },
      suffix: { text: '-ed', gloss: '形容词后缀' },
      history: [
        { label: 'balance', text: '平衡，是后来派生的基础。' },
        { label: 'balanced', text: '平衡的；均衡的' },
      ],
      mnemonic: '各部分比例合适，就是 balanced。',
      note: 'a balanced diet 是常见搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A balanced meal includes vegetables, not only bread and sugar.', chinese: '均衡的一餐要有蔬菜，不能只有面包和糖。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'balanced.s1', en: 'The report gave a balanced view and listed both risks and gains.', zh: '报告给出了均衡的看法，既写风险也写收益。', structure: 'The report gave a  / balanced /  view and listed both risks and gains.', grammar: '形容词作定语。', rationale: '餐食各部分比例得当。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'You should eat balance food.', right: 'You should eat balanced food.', reason: '修饰名词用形容词 balanced。', rule: 'balanced diet / view / report。', special: '动词过去式也是 balanced。' },
    ],
    quiz: [
      { id: 'balanced.q1', senseId: 'balanced.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Keeping a good proportion between different parts.', options: ['balanced', 'balcony', 'ban'], answer: 'balanced', explain: 'balanced：平衡的；均衡的' },
      { id: 'balanced.q2', senseId: 'balanced.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ meal includes vegetables, not only bread and sugar.', options: ['balanced', 'balcony', 'ban'], answer: 'balanced', explain: '空格需要 balanced。' },
      { id: 'balanced.q3', senseId: 'balanced.s1', errorType: 'grammar', type: '易错', prompt: '平衡的；均衡的 应选哪一句？', options: ['You should eat balanced food.', 'You should eat balance food.', '词形或搭配不对。'], answer: 'You should eat balanced food.', explain: '修饰名词用形容词 balanced。' },
      { id: 'balanced.q4', senseId: 'balanced.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：平衡的；均衡的', options: ['balanced', 'balcony', 'ban'], answer: 'balanced', explain: '中文义对应 balanced。' },
    ],
    usage: { domains: ['健康', '考试'], tone: '中性', commonConfusion: ['balance'] },
  });

  D('balcony', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'balcony', text: '现行词形，词性：noun。' },
        { label: 'balcony', text: '阳台；楼座' },
      ],
      mnemonic: '阳台在室外，介词常用 on。',
      note: '剧院楼座也叫 balcony，介词可用 in。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They drank tea on the balcony and watched the street below.', chinese: '他们在阳台上喝茶，看着下面的街道。' },
    ],
    contexts: [
      { domain: '居住', senseId: 'balcony.s1', en: 'We sat in the balcony because the lower seats were sold out.', zh: '楼下的位子卖完了，我们坐在楼座。', structure: 'We sat in the  / balcony /  because the lower seats were sold out.', grammar: '可数名词，介词短语作地点。', rationale: '指窗外的平台。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She stood in the balcony of the flat.', right: 'She stood on the balcony of the flat.', reason: '房子的阳台用 on the balcony。', rule: 'on the balcony（住所）；in the balcony（剧场楼座）。', special: '不是走廊 corridor。' },
    ],
    quiz: [
      { id: 'balcony.q1', senseId: 'balcony.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A platform outside an upstairs window.', options: ['balcony', 'bald', 'banana'], answer: 'balcony', explain: 'balcony：阳台；楼座' },
      { id: 'balcony.q2', senseId: 'balcony.s1', errorType: 'meaning', type: '词义', prompt: 'They drank tea on the _____ and watched the street below.', options: ['balcony', 'bald', 'banana'], answer: 'balcony', explain: '空格需要 balcony。' },
      { id: 'balcony.q3', senseId: 'balcony.s1', errorType: 'collocation', type: '易错', prompt: '阳台；楼座 应选哪一句？', options: ['She stood on the balcony of the flat.', 'She stood in the balcony of the flat.', '词形或搭配不对。'], answer: 'She stood on the balcony of the flat.', explain: '房子的阳台用 on the balcony。' },
      { id: 'balcony.q4', senseId: 'balcony.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：阳台；楼座', options: ['balcony', 'bald', 'banana'], answer: 'balcony', explain: '中文义对应 balcony。' },
    ],
    usage: { domains: ['居住', '考试'], tone: '中性', commonConfusion: ['gallery'] },
  });

  D('bald', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bald', text: '现行词形，词性：adjective。' },
        { label: 'bald', text: '秃头的；光秃的' },
      ],
      mnemonic: 'bald 是头发或植被很少。',
      note: 'go bald 表示变秃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'My uncle is bald, so he wears a hat in strong sun.', chinese: '我舅舅是秃头，大太阳下会戴帽子。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bald.s1', en: 'The hill was bald of trees after the fire.', zh: '火灾之后，那座山光秃秃的，没有树。', structure: 'The hill was  / bald /  of trees after the fire.', grammar: '形容词作表语。', rationale: '描述头发很少。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He has a bald of head.', right: 'He has a bald head.', reason: 'bald 直接修饰 head，不加 of。', rule: 'a bald head；go bald。', special: 'bold 是大胆的，元音不同。' },
    ],
    quiz: [
      { id: 'bald.q1', senseId: 'bald.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Having little or no hair.', options: ['bald', 'ball', 'band'], answer: 'bald', explain: 'bald：秃头的；光秃的' },
      { id: 'bald.q2', senseId: 'bald.s1', errorType: 'meaning', type: '词义', prompt: 'My uncle is _____, so he wears a hat in strong sun.', options: ['bald', 'ball', 'band'], answer: 'bald', explain: '空格需要 bald。' },
      { id: 'bald.q3', senseId: 'bald.s1', errorType: 'collocation', type: '易错', prompt: '秃头的；光秃的 应选哪一句？', options: ['He has a bald head.', 'He has a bald of head.', '词形或搭配不对。'], answer: 'He has a bald head.', explain: 'bald 直接修饰 head，不加 of。' },
      { id: 'bald.q4', senseId: 'bald.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：秃头的；光秃的', options: ['bald', 'ball', 'band'], answer: 'bald', explain: '中文义对应 bald。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bold'] },
  });

  D('ball', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'ball', text: '现行词形，词性：noun。' },
        { label: 'ball', text: '球；球状物；舞会' },
      ],
      mnemonic: '圆的东西或正式舞会，看上下文。',
      note: 'have a ball 口语可表示玩得很开心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The ball rolled under the sofa and nobody wanted to fetch it.', chinese: '球滚到沙发底下，没人想去捡。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'ball.s1', en: 'They met at a summer ball and danced until midnight.', zh: '他们在一场夏日舞会上相识，一直跳到午夜。', structure: 'They met at a summer  / ball /  and danced until midnight.', grammar: '可数名词。', rationale: '这里是运动用的球。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He kicked the ball to goal with a dance.', right: 'He kicked the ball toward the goal.', reason: '运动用球和舞会是两个义项，不要混在一句里硬凑。', rule: '球：kick a ball；舞会：a ball。', special: 'bowling 的球是 bowling ball。' },
    ],
    quiz: [
      { id: 'ball.q1', senseId: 'ball.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A round object used in games; a formal dance.', options: ['ball', 'ballet', 'bandage'], answer: 'ball', explain: 'ball：球；球状物；舞会' },
      { id: 'ball.q2', senseId: 'ball.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ rolled under the sofa and nobody wanted to fetch it.', options: ['ball', 'ballet', 'bandage'], answer: 'ball', explain: '空格需要 ball。' },
      { id: 'ball.q3', senseId: 'ball.s1', errorType: 'meaning', type: '易错', prompt: '球；球状物；舞会 应选哪一句？', options: ['He kicked the ball toward the goal.', 'He kicked the ball to goal with a dance.', '词形或搭配不对。'], answer: 'He kicked the ball toward the goal.', explain: '运动用球和舞会是两个义项，不要混在一句里硬凑。' },
      { id: 'ball.q4', senseId: 'ball.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：球；球状物；舞会', options: ['ball', 'ballet', 'bandage'], answer: 'ball', explain: '中文义对应 ball。' },
    ],
    usage: { domains: ['体育', '考试'], tone: '中性', commonConfusion: ['bowl'] },
  });

  D('ballet', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'ballet', text: '现行词形，词性：noun。' },
        { label: 'ballet', text: '芭蕾舞' },
      ],
      mnemonic: '芭蕾强调步法和姿态。',
      note: 'ballet 里的 t 常不发音，读音要单独记。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She has studied ballet for six years and still practises daily.', chinese: '她学芭蕾已经六年，仍然每天练习。' },
    ],
    contexts: [
      { domain: '艺术', senseId: 'ballet.s1', en: 'The school ballet told a short story without any spoken lines.', zh: '学校的芭蕾用一段短故事来演，没有台词。', structure: 'The school  / ballet /  told a short story without any spoken lines.', grammar: '名词，可作 study 的宾语。', rationale: '指这种舞蹈训练。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She made a ballet dance class.', right: 'She took a ballet class.', reason: '上课用 take a class，不要 make a dance。', rule: 'study ballet；a ballet class。', special: '不要写成 balle。' },
    ],
    quiz: [
      { id: 'ballet.q1', senseId: 'ballet.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A type of dance with graceful movements.', options: ['ballet', 'balloon', 'bandit'], answer: 'ballet', explain: 'ballet：芭蕾舞' },
      { id: 'ballet.q2', senseId: 'ballet.s1', errorType: 'meaning', type: '词义', prompt: 'She has studied _____ for six years and still practises daily.', options: ['ballet', 'balloon', 'bandit'], answer: 'ballet', explain: '空格需要 ballet。' },
      { id: 'ballet.q3', senseId: 'ballet.s1', errorType: 'collocation', type: '易错', prompt: '芭蕾舞 应选哪一句？', options: ['She took a ballet class.', 'She made a ballet dance class.', '词形或搭配不对。'], answer: 'She took a ballet class.', explain: '上课用 take a class，不要 make a dance。' },
      { id: 'ballet.q4', senseId: 'ballet.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：芭蕾舞', options: ['ballet', 'balloon', 'bandit'], answer: 'ballet', explain: '中文义对应 ballet。' },
    ],
    usage: { domains: ['艺术', '考试'], tone: '中性', commonConfusion: ['dance'] },
  });

  D('balloon', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'balloon', text: '现行词形，词性：noun。' },
        { label: 'balloon', text: '气球；激增' },
      ],
      mnemonic: '气球会鼓起来，价格激增也像被吹大。',
      note: '动词义是激增。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A red balloon escaped and rose above the playground.', chinese: '一只红气球跑了，升到操场上空。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'balloon.s1', en: 'Food prices can balloon when the harvest fails.', zh: '收成不好时，食品价格会迅速上涨。', structure: 'Food prices can  / balloon /  when the harvest fails.', grammar: '可数名词。', rationale: '指充满气的橡胶袋。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He flew a balloon air in the room.', right: 'He blew up a balloon in the room.', reason: '吹气球是 blow up a balloon。', rule: 'blow up a balloon。', special: '热气球是 hot-air balloon。' },
    ],
    quiz: [
      { id: 'balloon.q1', senseId: 'balloon.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A rubber bag filled with air or gas; to increase quickly.', options: ['balloon', 'ballot', 'bang'], answer: 'balloon', explain: 'balloon：气球；激增' },
      { id: 'balloon.q2', senseId: 'balloon.s1', errorType: 'meaning', type: '词义', prompt: 'A red _____ escaped and rose above the playground.', options: ['balloon', 'ballot', 'bang'], answer: 'balloon', explain: '空格需要 balloon。' },
      { id: 'balloon.q3', senseId: 'balloon.s1', errorType: 'collocation', type: '易错', prompt: '气球；激增 应选哪一句？', options: ['He blew up a balloon in the room.', 'He flew a balloon air in the room.', '词形或搭配不对。'], answer: 'He blew up a balloon in the room.', explain: '吹气球是 blow up a balloon。' },
      { id: 'balloon.q4', senseId: 'balloon.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：气球；激增', options: ['balloon', 'ballot', 'bang'], answer: 'balloon', explain: '中文义对应 balloon。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['ball'] },
  });

  D('ballot', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'ballot', text: '现行词形，词性：noun。' },
        { label: 'ballot', text: '选票；投票' },
      ],
      mnemonic: 'ballot 是用来秘密表决的纸或制度。',
      note: 'cast a ballot 是投票。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Each member received a ballot and marked one name.', chinese: '每位成员拿到一张选票，勾了一个名字。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'ballot.s1', en: 'The club chose its leader by secret ballot.', zh: '俱乐部用无记名投票选负责人。', structure: 'The club chose its leader by secret  / ballot / .', grammar: '可数名词。', rationale: '指发给投票人的那张纸。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They wrote a ballot paper on the wall.', right: 'They marked a ballot and put it in the box.', reason: '选票是填了投进箱子，不是贴在墙上。', rule: 'secret ballot；cast a ballot。', special: 'ticket 可以是票券，不一定是选票。' },
    ],
    quiz: [
      { id: 'ballot.q1', senseId: 'ballot.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A system or piece of paper for secret voting.', options: ['ballot', 'bamboo', 'bangs'], answer: 'ballot', explain: 'ballot：选票；投票' },
      { id: 'ballot.q2', senseId: 'ballot.s1', errorType: 'meaning', type: '词义', prompt: 'Each member received a _____ and marked one name.', options: ['ballot', 'bamboo', 'bangs'], answer: 'ballot', explain: '空格需要 ballot。' },
      { id: 'ballot.q3', senseId: 'ballot.s1', errorType: 'collocation', type: '易错', prompt: '选票；投票 应选哪一句？', options: ['They marked a ballot and put it in the box.', 'They wrote a ballot paper on the wall.', '词形或搭配不对。'], answer: 'They marked a ballot and put it in the box.', explain: '选票是填了投进箱子，不是贴在墙上。' },
      { id: 'ballot.q4', senseId: 'ballot.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：选票；投票', options: ['ballot', 'bamboo', 'bangs'], answer: 'ballot', explain: '中文义对应 ballot。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['ticket'] },
  });

  D('bamboo', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bamboo', text: '现行词形，词性：noun。' },
        { label: 'bamboo', text: '竹；竹子' },
      ],
      mnemonic: '中空的高秆植物就是竹子。',
      note: '材料义不可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The fence was made of bamboo and moved a little in the wind.', chinese: '篱笆是竹子做的，风一吹会轻轻动。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'bamboo.s1', en: 'Pandas in the film spent the day eating bamboo.', zh: '片子里的熊猫整天在吃竹子。', structure: 'Pandas in the film spent the day eating  / bamboo / .', grammar: '不可数名词作 of 的宾语。', rationale: '指做篱笆的竹材。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They cut many bamboos tree.', right: 'They cut many bamboo stems.', reason: 'bamboo 常不可数；一根可说 a bamboo stem 或 a stick of bamboo。', rule: 'bamboo 作材料时常不可数。', special: '不要说 bamboos tree。' },
    ],
    quiz: [
      { id: 'bamboo.q1', senseId: 'bamboo.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A tall plant with hollow stems.', options: ['bamboo', 'ban', 'banish'], answer: 'bamboo', explain: 'bamboo：竹；竹子' },
      { id: 'bamboo.q2', senseId: 'bamboo.s1', errorType: 'meaning', type: '词义', prompt: 'The fence was made of _____ and moved a little in the wind.', options: ['bamboo', 'ban', 'banish'], answer: 'bamboo', explain: '空格需要 bamboo。' },
      { id: 'bamboo.q3', senseId: 'bamboo.s1', errorType: 'grammar', type: '易错', prompt: '竹；竹子 应选哪一句？', options: ['They cut many bamboo stems.', 'They cut many bamboos tree.', '词形或搭配不对。'], answer: 'They cut many bamboo stems.', explain: 'bamboo 常不可数；一根可说 a bamboo stem 或 a stick of bamboo。' },
      { id: 'bamboo.q4', senseId: 'bamboo.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：竹；竹子', options: ['bamboo', 'ban', 'banish'], answer: 'bamboo', explain: '中文义对应 bamboo。' },
    ],
    usage: { domains: ['自然', '考试'], tone: '中性', commonConfusion: ['wood'] },
  });

  D('ban', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'ban', text: '现行词形，词性：verb。' },
        { label: 'ban', text: '禁止；禁令' },
      ],
      mnemonic: 'ban 是官方或规则说不许。',
      note: '名词 a ban on something 也很常见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The library will ban food near the computers.', chinese: '图书馆将禁止在电脑附近吃东西。' },
    ],
    contexts: [
      { domain: '规则', senseId: 'ban.s1', en: 'A ban on loud music starts at ten every night.', zh: '每晚十点开始禁止大声放音乐。', structure: 'A  / ban /  on loud music starts at ten every night.', grammar: '及物动词，宾语是被禁止的事。', rationale: '食物在特定区域不被允许。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They banned to smoke here.', right: 'They banned smoking here.', reason: 'ban 接名词或 -ing，不接 to do。', rule: 'ban + 名词 / -ing；a ban on。', special: 'forbid 后可接 somebody to do，ban 的句型不同。' },
    ],
    quiz: [
      { id: 'ban.q1', senseId: 'ban.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To say something is not allowed; an official order stopping it.', options: ['ban', 'banana', 'banishment'], answer: 'ban', explain: 'ban：禁止；禁令' },
      { id: 'ban.q2', senseId: 'ban.s1', errorType: 'meaning', type: '词义', prompt: 'The library will _____ food near the computers.', options: ['ban', 'banana', 'banishment'], answer: 'ban', explain: '空格需要 ban。' },
      { id: 'ban.q3', senseId: 'ban.s1', errorType: 'grammar', type: '易错', prompt: '禁止；禁令 应选哪一句？', options: ['They banned smoking here.', 'They banned to smoke here.', '词形或搭配不对。'], answer: 'They banned smoking here.', explain: 'ban 接名词或 -ing，不接 to do。' },
      { id: 'ban.q4', senseId: 'ban.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：禁止；禁令', options: ['ban', 'banana', 'banishment'], answer: 'ban', explain: '中文义对应 ban。' },
    ],
    usage: { domains: ['规则', '考试'], tone: '中性', commonConfusion: ['bar'] },
  });

  D('banana', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'banana', text: '现行词形，词性：noun。' },
        { label: 'banana', text: '香蕉' },
      ],
      mnemonic: '弯弯的黄色水果。',
      note: 'a bunch of bananas 是一串。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He slipped on a banana skin and laughed at himself.', chinese: '他踩到香蕉皮滑了一下，自己也笑了。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'banana.s1', en: 'This banana is too green to eat today.', zh: '这根香蕉还太青，今天不能吃。', structure: 'This  / banana /  is too green to eat today.', grammar: '可数名词。', rationale: '指这种水果的皮。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I ate a banana fruit yellow.', right: 'I ate a yellow banana.', reason: '直接说 a banana，不必再加 fruit。', rule: 'a banana；bananas。', special: '皮是 banana skin 或 banana peel。' },
    ],
    quiz: [
      { id: 'banana.q1', senseId: 'banana.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A long curved yellow fruit.', options: ['banana', 'band', 'bank'], answer: 'banana', explain: 'banana：香蕉' },
      { id: 'banana.q2', senseId: 'banana.s1', errorType: 'meaning', type: '词义', prompt: 'He slipped on a _____ skin and laughed at himself.', options: ['banana', 'band', 'bank'], answer: 'banana', explain: '空格需要 banana。' },
      { id: 'banana.q3', senseId: 'banana.s1', errorType: 'collocation', type: '易错', prompt: '香蕉 应选哪一句？', options: ['I ate a yellow banana.', 'I ate a banana fruit yellow.', '词形或搭配不对。'], answer: 'I ate a yellow banana.', explain: '直接说 a banana，不必再加 fruit。' },
      { id: 'banana.q4', senseId: 'banana.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：香蕉', options: ['banana', 'band', 'bank'], answer: 'banana', explain: '中文义对应 banana。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['plantain'] },
  });

  D('band', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'band', text: '现行词形，词性：noun。' },
        { label: 'band', text: '乐队；带子；一伙' },
      ],
      mnemonic: 'band 看上下文：一伙乐手，或一条窄带子。',
      note: 'a band of 也可指一伙人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The band played three songs and then left the stage.', chinese: '乐队唱了三首歌就下了台。' },
    ],
    contexts: [
      { domain: '文艺', senseId: 'band.s1', en: 'She tied her hair with a soft band of cloth.', zh: '她用一条软布带把头发扎起来。', structure: 'She tied her hair with a soft  / band /  of cloth.', grammar: '可数名词。', rationale: '这里是一组音乐家。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'A music band of rubber held the cards.', right: 'A rubber band held the cards.', reason: '橡皮筋是 rubber band，不要说 music band of rubber。', rule: 'a rock band；a rubber band。', special: 'bandage 是绷带，用来包伤口。' },
    ],
    quiz: [
      { id: 'band.q1', senseId: 'band.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A group of musicians; a thin strip.', options: ['band', 'bandage', 'banking'], answer: 'band', explain: 'band：乐队；带子；一伙' },
      { id: 'band.q2', senseId: 'band.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ played three songs and then left the stage.', options: ['band', 'bandage', 'banking'], answer: 'band', explain: '空格需要 band。' },
      { id: 'band.q3', senseId: 'band.s1', errorType: 'collocation', type: '易错', prompt: '乐队；带子；一伙 应选哪一句？', options: ['A rubber band held the cards.', 'A music band of rubber held the cards.', '词形或搭配不对。'], answer: 'A rubber band held the cards.', explain: '橡皮筋是 rubber band，不要说 music band of rubber。' },
      { id: 'band.q4', senseId: 'band.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：乐队；带子；一伙', options: ['band', 'bandage', 'banking'], answer: 'band', explain: '中文义对应 band。' },
    ],
    usage: { domains: ['文艺', '考试'], tone: '中性', commonConfusion: ['bandage'] },
  });

  D('bandage', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bandage', text: '现行词形，词性：noun。' },
        { label: 'bandage', text: '绷带；用绷带包扎' },
      ],
      mnemonic: '绷带是包伤口的布条。',
      note: '也可作动词：bandage a wound。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The nurse put a clean bandage around his wrist.', chinese: '护士在他手腕上缠了一条干净的绷带。' },
    ],
    contexts: [
      { domain: '医疗', senseId: 'bandage.s1', en: 'You should change the bandage if it gets wet.', zh: '绷带湿了就该换。', structure: 'You should change the  / bandage /  if it gets wet.', grammar: '可数名词。', rationale: '裹在伤口上的布条。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She bandaged a band on the cut.', right: 'She put a bandage on the cut.', reason: '名词用法是 put a bandage on。', rule: 'put a bandage on / around。', special: 'band 不一定是医用的。' },
    ],
    quiz: [
      { id: 'bandage.q1', senseId: 'bandage.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A strip of cloth tied around a wound.', options: ['bandage', 'bandit', 'banknote'], answer: 'bandage', explain: 'bandage：绷带；用绷带包扎' },
      { id: 'bandage.q2', senseId: 'bandage.s1', errorType: 'meaning', type: '词义', prompt: 'The nurse put a clean _____ around his wrist.', options: ['bandage', 'bandit', 'banknote'], answer: 'bandage', explain: '空格需要 bandage。' },
      { id: 'bandage.q3', senseId: 'bandage.s1', errorType: 'collocation', type: '易错', prompt: '绷带；用绷带包扎 应选哪一句？', options: ['She put a bandage on the cut.', 'She bandaged a band on the cut.', '词形或搭配不对。'], answer: 'She put a bandage on the cut.', explain: '名词用法是 put a bandage on。' },
      { id: 'bandage.q4', senseId: 'bandage.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：绷带；用绷带包扎', options: ['bandage', 'bandit', 'banknote'], answer: 'bandage', explain: '中文义对应 bandage。' },
    ],
    usage: { domains: ['医疗', '考试'], tone: '中性', commonConfusion: ['band'] },
  });

  D('bandit', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bandit', text: '现行词形，词性：noun。' },
        { label: 'bandit', text: '强盗；土匪' },
      ],
      mnemonic: '路上抢人的强盗。',
      note: '现代新闻里有时也指武装劫匪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The story tells of a bandit who stopped coaches on the hill road.', chinese: '故事讲一个强盗在山路上拦截马车。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'bandit.s1', en: 'Travellers feared a bandit more than the rain.', zh: '旅人怕强盗胜过怕下雨。', structure: 'Travellers feared a  / bandit /  more than the rain.', grammar: '可数名词。', rationale: '指拦路抢劫的人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bandit robbed to the bank with a form.', right: 'The bandit robbed travellers on the road.', reason: 'bandit 的典型对象是路上的行人，不是填表。', rule: 'a bandit；复数 bandits。', special: 'thief 偏偷窃，bandit 偏公然抢劫。' },
    ],
    quiz: [
      { id: 'bandit.q1', senseId: 'bandit.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A robber, especially one who attacks travellers.', options: ['bandit', 'bang', 'bankrupt'], answer: 'bandit', explain: 'bandit：强盗；土匪' },
      { id: 'bandit.q2', senseId: 'bandit.s1', errorType: 'meaning', type: '词义', prompt: 'The story tells of a _____ who stopped coaches on the hill road.', options: ['bandit', 'bang', 'bankrupt'], answer: 'bandit', explain: '空格需要 bandit。' },
      { id: 'bandit.q3', senseId: 'bandit.s1', errorType: 'meaning', type: '易错', prompt: '强盗；土匪 应选哪一句？', options: ['The bandit robbed travellers on the road.', 'The bandit robbed to the bank with a form.', '词形或搭配不对。'], answer: 'The bandit robbed travellers on the road.', explain: 'bandit 的典型对象是路上的行人，不是填表。' },
      { id: 'bandit.q4', senseId: 'bandit.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：强盗；土匪', options: ['bandit', 'bang', 'bankrupt'], answer: 'bandit', explain: '中文义对应 bandit。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['thief'] },
  });

  D('bang', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bang', text: '现行词形，词性：noun。' },
        { label: 'bang', text: '砰；猛击；猛撞' },
      ],
      mnemonic: '短促的一声巨响。',
      note: '动词是猛地关上或撞上。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bang from the kitchen made the cat jump off the chair.', chinese: '厨房里砰的一声，猫从椅子上跳了下去。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bang.s1', en: 'He shut the gate with a bang and woke the neighbours.', zh: '他砰地关上大门，把邻居吵醒了。', structure: 'He shut the gate with a  / bang /  and woke the neighbours.', grammar: '可数名词。', rationale: '突然的响声。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'There was a bang noise of silent.', right: 'There was a loud bang.', reason: 'bang 本身就是响声，不必再加 noise of silent。', rule: 'with a bang；a loud bang。', special: 'ring 多指铃声，持续时间更长。' },
    ],
    quiz: [
      { id: 'bang.q1', senseId: 'bang.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A sudden loud noise; to hit hard.', options: ['bang', 'bangs', 'banned'], answer: 'bang', explain: 'bang：砰；猛击；猛撞' },
      { id: 'bang.q2', senseId: 'bang.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ from the kitchen made the cat jump off the chair.', options: ['bang', 'bangs', 'banned'], answer: 'bang', explain: '空格需要 bang。' },
      { id: 'bang.q3', senseId: 'bang.s1', errorType: 'collocation', type: '易错', prompt: '砰；猛击；猛撞 应选哪一句？', options: ['There was a loud bang.', 'There was a bang noise of silent.', '词形或搭配不对。'], answer: 'There was a loud bang.', explain: 'bang 本身就是响声，不必再加 noise of silent。' },
      { id: 'bang.q4', senseId: 'bang.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：砰；猛击；猛撞', options: ['bang', 'bangs', 'banned'], answer: 'bang', explain: '中文义对应 bang。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['ring'] },
  });

  D('bangs', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bangs', text: '现行词形，词性：noun。' },
        { label: 'bangs', text: '刘海；额前发' },
      ],
      mnemonic: '贴着额头剪齐的一排头发。',
      note: '这是美式说法，英式常用 fringe。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She cut her bangs so they would not cover her eyes.', chinese: '她把刘海剪短，免得挡住眼睛。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bangs.s1', en: 'Her bangs were uneven after she trimmed them at home.', zh: '她在家自己修刘海，结果不齐。', structure: 'Her  / bangs /  were uneven after she trimmed them at home.', grammar: '复数名词。', rationale: '指额前的头发。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He has a bang on the forehead hair.', right: 'He has bangs across his forehead.', reason: '额前发通常用复数 bangs。', rule: 'bangs 表刘海时常作复数。', special: 'a bang 是一声巨响，不是刘海。' },
    ],
    quiz: [
      { id: 'bangs.q1', senseId: 'bangs.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The hair cut straight across the forehead.', options: ['bangs', 'banish', 'banner'], answer: 'bangs', explain: 'bangs：刘海；额前发' },
      { id: 'bangs.q2', senseId: 'bangs.s1', errorType: 'meaning', type: '词义', prompt: 'She cut her _____ so they would not cover her eyes.', options: ['bangs', 'banish', 'banner'], answer: 'bangs', explain: '空格需要 bangs。' },
      { id: 'bangs.q3', senseId: 'bangs.s1', errorType: 'grammar', type: '易错', prompt: '刘海；额前发 应选哪一句？', options: ['He has bangs across his forehead.', 'He has a bang on the forehead hair.', '词形或搭配不对。'], answer: 'He has bangs across his forehead.', explain: '额前发通常用复数 bangs。' },
      { id: 'bangs.q4', senseId: 'bangs.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：刘海；额前发', options: ['bangs', 'banish', 'banner'], answer: 'bangs', explain: '中文义对应 bangs。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bang'] },
  });

  D('banish', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'banish', text: '现行词形，词性：verb。' },
        { label: 'banish', text: '放逐；驱逐；消除' },
      ],
      mnemonic: 'banish 是打发走，人或念头都可以。',
      note: 'from 接离开的地方。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The king decided to banish the poet from the court.', chinese: '国王决定把那位诗人逐出宫廷。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'banish.s1', en: 'She tried to banish fear before she walked onto the stage.', zh: '上台前她努力把恐惧赶出去。', structure: 'She tried to  / banish /  fear before she walked onto the stage.', grammar: '及物动词，from 表示离开之处。', rationale: '诗人被赶出宫廷。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They banished him to away.', right: 'They banished him from the city.', reason: '离开某地用 from，不用 to away。', rule: 'banish somebody from a place。', special: 'ban 是禁止某事，banish 是赶走某人。' },
    ],
    quiz: [
      { id: 'banish.q1', senseId: 'banish.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To send someone away forever, or to get rid of something completely.', options: ['banish', 'banishment', 'banquet'], answer: 'banish', explain: 'banish：放逐；驱逐；消除' },
      { id: 'banish.q2', senseId: 'banish.s1', errorType: 'meaning', type: '词义', prompt: 'The king decided to _____ the poet from the court.', options: ['banish', 'banishment', 'banquet'], answer: 'banish', explain: '空格需要 banish。' },
      { id: 'banish.q3', senseId: 'banish.s1', errorType: 'collocation', type: '易错', prompt: '放逐；驱逐；消除 应选哪一句？', options: ['They banished him from the city.', 'They banished him to away.', '词形或搭配不对。'], answer: 'They banished him from the city.', explain: '离开某地用 from，不用 to away。' },
      { id: 'banish.q4', senseId: 'banish.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：放逐；驱逐；消除', options: ['banish', 'banishment', 'banquet'], answer: 'banish', explain: '中文义对应 banish。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['ban'] },
  });

  D('banishment', {
    etymology: {
      origin: '英语派生：banish + -ment',
      prefix: null,
      root: { text: 'banish', gloss: '放逐' },
      suffix: { text: '-ment', gloss: '把动词变成名词' },
      history: [
        { label: 'banish', text: '放逐，是后来派生的基础。' },
        { label: 'banishment', text: '放逐；流放' },
      ],
      mnemonic: '-ment 把赶走这个动作变成一种惩罚。',
      note: '正式用语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Years of banishment did not make him forget the river at home.', chinese: '多年流放也没让他忘记家乡的河。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'banishment.s1', en: 'The judge spoke of banishment, not of a short fine.', zh: '法官说的是流放，不是一笔小额罚款。', structure: 'The judge spoke of  / banishment / , not of a short fine.', grammar: '不可数名词居多。', rationale: '指被送走的那种惩罚。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'His banishment to from the country ended.', right: 'His banishment from the country ended.', reason: 'from 前不要再加 to。', rule: 'banishment from。', special: '是名词，不能直接当动词用。' },
    ],
    quiz: [
      { id: 'banishment.q1', senseId: 'banishment.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The act of sending someone away as a punishment.', options: ['banishment', 'bank', 'bar'], answer: 'banishment', explain: 'banishment：放逐；流放' },
      { id: 'banishment.q2', senseId: 'banishment.s1', errorType: 'meaning', type: '词义', prompt: 'Years of _____ did not make him forget the river at home.', options: ['banishment', 'bank', 'bar'], answer: 'banishment', explain: '空格需要 banishment。' },
      { id: 'banishment.q3', senseId: 'banishment.s1', errorType: 'collocation', type: '易错', prompt: '放逐；流放 应选哪一句？', options: ['His banishment from the country ended.', 'His banishment to from the country ended.', '词形或搭配不对。'], answer: 'His banishment from the country ended.', explain: 'from 前不要再加 to。' },
      { id: 'banishment.q4', senseId: 'banishment.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：放逐；流放', options: ['banishment', 'bank', 'bar'], answer: 'banishment', explain: '中文义对应 banishment。' },
    ],
    usage: { domains: ['历史', '考试'], tone: '中性', commonConfusion: ['banish'] },
  });

  D('bank', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bank', text: '现行词形，词性：noun。' },
        { label: 'bank', text: '银行；岸；堤' },
      ],
      mnemonic: '同一词形：存钱的地方，或河岸。',
      note: '介词：in the bank；on the bank of a river。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She walked into the bank and asked about a student account.', chinese: '她走进银行，询问学生账户。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bank.s1', en: 'They sat on the bank and watched the boats turn.', zh: '他们坐在岸边看船转弯。', structure: 'They sat on the  / bank /  and watched the boats turn.', grammar: '可数名词。', rationale: '这里是办理账户的银行。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He put money in the river bank office.', right: 'He put money in the bank.', reason: '存钱的 bank 是银行，河边要用 on the bank。', rule: '存钱 in the bank；河边 on the bank。', special: 'bank 不是长凳 bench。' },
    ],
    quiz: [
      { id: 'bank.q1', senseId: 'bank.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A place that keeps money; the land beside a river.', options: ['bank', 'banking', 'barb'], answer: 'bank', explain: 'bank：银行；岸；堤' },
      { id: 'bank.q2', senseId: 'bank.s1', errorType: 'meaning', type: '词义', prompt: 'She walked into the _____ and asked about a student account.', options: ['bank', 'banking', 'barb'], answer: 'bank', explain: '空格需要 bank。' },
      { id: 'bank.q3', senseId: 'bank.s1', errorType: 'meaning', type: '易错', prompt: '银行；岸；堤 应选哪一句？', options: ['He put money in the bank.', 'He put money in the river bank office.', '词形或搭配不对。'], answer: 'He put money in the bank.', explain: '存钱的 bank 是银行，河边要用 on the bank。' },
      { id: 'bank.q4', senseId: 'bank.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：银行；岸；堤', options: ['bank', 'banking', 'barb'], answer: 'bank', explain: '中文义对应 bank。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['bench'] },
  });

  D('banking', {
    etymology: {
      origin: '英语派生：bank + -ing',
      prefix: null,
      root: { text: 'bank', gloss: '银行' },
      suffix: { text: '-ing', gloss: '构成行业或活动名词' },
      history: [
        { label: 'bank', text: '银行，是后来派生的基础。' },
        { label: 'banking', text: '银行业；金融' },
      ],
      mnemonic: 'banking 是银行这件事，不是一次走路。',
      note: 'online banking 是固定搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Online banking lets her pay the rent without leaving home.', chinese: '网上银行让她不用出门就能付房租。' },
    ],
    contexts: [
      { domain: '金融', senseId: 'banking.s1', en: 'He hopes to work in banking after he finishes the course.', zh: '他希望读完这门课后从事银行业。', structure: 'He hopes to work in  / banking /  after he finishes the course.', grammar: '不可数名词。', rationale: '指使用银行服务。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She is banking the river with money.', right: 'She uses online banking to move money.', reason: 'banking 作名词时是银行业务，不是给河岸堆钱。', rule: 'online banking；work in banking。', special: '不要和河岸的 bank 混用。' },
    ],
    quiz: [
      { id: 'banking.q1', senseId: 'banking.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The business of a bank, or the activity of using banks.', options: ['banking', 'banknote', 'barbecue'], answer: 'banking', explain: 'banking：银行业；金融' },
      { id: 'banking.q2', senseId: 'banking.s1', errorType: 'meaning', type: '词义', prompt: 'Online _____ lets her pay the rent without leaving home.', options: ['banking', 'banknote', 'barbecue'], answer: 'banking', explain: '空格需要 banking。' },
      { id: 'banking.q3', senseId: 'banking.s1', errorType: 'meaning', type: '易错', prompt: '银行业；金融 应选哪一句？', options: ['She uses online banking to move money.', 'She is banking the river with money.', '词形或搭配不对。'], answer: 'She uses online banking to move money.', explain: 'banking 作名词时是银行业务，不是给河岸堆钱。' },
      { id: 'banking.q4', senseId: 'banking.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：银行业；金融', options: ['banking', 'banknote', 'barbecue'], answer: 'banking', explain: '中文义对应 banking。' },
    ],
    usage: { domains: ['金融', '考试'], tone: '中性', commonConfusion: ['bank'] },
  });

  D('banknote', {
    etymology: {
      origin: '英语派生：bank + note',
      prefix: null,
      root: { text: 'note', gloss: '票据、纸据' },
      suffix: null,
      history: [
        { label: 'note', text: '票据、纸据，是后来派生的基础。' },
        { label: 'banknote', text: '钞票；纸币' },
      ],
      mnemonic: '银行发出的纸质货币。',
      note: '也可分写 bank note，本词条用连写。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He found an old banknote in the pages of a library book.', chinese: '他在图书馆一本书的书页里发现一张旧钞票。' },
    ],
    contexts: [
      { domain: '金融', senseId: 'banknote.s1', en: 'The clerk held the banknote up to the light.', zh: '职员把钞票对着光看。', structure: 'The clerk held the  / banknote /  up to the light.', grammar: '可数名词。', rationale: '指一张纸币。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She paid with a bank note coin.', right: 'She paid with a banknote.', reason: '纸币是 banknote，硬币是 coin。', rule: 'a banknote；复数 banknotes。', special: 'coin 是硬币。' },
    ],
    quiz: [
      { id: 'banknote.q1', senseId: 'banknote.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A piece of paper money.', options: ['banknote', 'bankrupt', 'barber'], answer: 'banknote', explain: 'banknote：钞票；纸币' },
      { id: 'banknote.q2', senseId: 'banknote.s1', errorType: 'meaning', type: '词义', prompt: 'He found an old _____ in the pages of a library book.', options: ['banknote', 'bankrupt', 'barber'], answer: 'banknote', explain: '空格需要 banknote。' },
      { id: 'banknote.q3', senseId: 'banknote.s1', errorType: 'meaning', type: '易错', prompt: '钞票；纸币 应选哪一句？', options: ['She paid with a banknote.', 'She paid with a bank note coin.', '词形或搭配不对。'], answer: 'She paid with a banknote.', explain: '纸币是 banknote，硬币是 coin。' },
      { id: 'banknote.q4', senseId: 'banknote.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：钞票；纸币', options: ['banknote', 'bankrupt', 'barber'], answer: 'banknote', explain: '中文义对应 banknote。' },
    ],
    usage: { domains: ['金融', '考试'], tone: '中性', commonConfusion: ['coin'] },
  });

  D('bankrupt', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bankrupt', text: '现行词形，词性：adjective。' },
        { label: 'bankrupt', text: '破产的；使破产' },
      ],
      mnemonic: '还不起债，就是 bankrupt。',
      note: 'go bankrupt 是常见搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The shop went bankrupt after the street was closed for a year.', chinese: '街道封闭一年后，那家店破产了。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bankrupt.s1', en: 'A bankrupt firm cannot pay its workers on time.', zh: '破产的公司无法按时付工资。', structure: 'A  / bankrupt /  firm cannot pay its workers on time.', grammar: '形容词作表语，与 go 连用。', rationale: '商店无力偿债。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The company was bankruptcy last May.', right: 'The company went bankrupt last May.', reason: '形容词是 bankrupt；名词才是 bankruptcy。', rule: 'go bankrupt；a bankrupt company。', special: '名词 bankruptcy。' },
    ],
    quiz: [
      { id: 'bankrupt.q1', senseId: 'bankrupt.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Unable to pay debts.', options: ['bankrupt', 'banned', 'bard'], answer: 'bankrupt', explain: 'bankrupt：破产的；使破产' },
      { id: 'bankrupt.q2', senseId: 'bankrupt.s1', errorType: 'meaning', type: '词义', prompt: 'The shop went _____ after the street was closed for a year.', options: ['bankrupt', 'banned', 'bard'], answer: 'bankrupt', explain: '空格需要 bankrupt。' },
      { id: 'bankrupt.q3', senseId: 'bankrupt.s1', errorType: 'collocation', type: '易错', prompt: '破产的；使破产 应选哪一句？', options: ['The company went bankrupt last May.', 'The company was bankruptcy last May.', '词形或搭配不对。'], answer: 'The company went bankrupt last May.', explain: '形容词是 bankrupt；名词才是 bankruptcy。' },
      { id: 'bankrupt.q4', senseId: 'bankrupt.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：破产的；使破产', options: ['bankrupt', 'banned', 'bard'], answer: 'bankrupt', explain: '中文义对应 bankrupt。' },
    ],
    usage: { domains: ['商业', '考试'], tone: '中性', commonConfusion: ['bank'] },
  });

  D('banned', {
    etymology: {
      origin: '英语派生：ban + -ed',
      prefix: null,
      root: { text: 'ban', gloss: '禁止' },
      suffix: { text: '-ed', gloss: '过去分词作形容词' },
      history: [
        { label: 'ban', text: '禁止，是后来派生的基础。' },
        { label: 'banned', text: '被禁止的' },
      ],
      mnemonic: '已经被禁令挡住。',
      note: 'a banned substance 是违禁物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'That dye is banned in food sold to children.', chinese: '那种色素在卖给儿童的食品里是被禁止的。' },
    ],
    contexts: [
      { domain: '规则', senseId: 'banned.s1', en: 'He tried to bring a banned book through the gate.', zh: '他试图把一本禁书带过大门。', structure: 'He tried to bring a  / banned /  book through the gate.', grammar: '形容词或被动分词作表语。', rationale: '规则不允许这种色素。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Smoking is ban in this hall.', right: 'Smoking is banned in this hall.', reason: '被动意义的形容词用 banned。', rule: 'be banned；a banned + 名词。', special: '动词原形是 ban。' },
    ],
    quiz: [
      { id: 'banned.q1', senseId: 'banned.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Forbidden by an official rule or law.', options: ['banned', 'banner', 'bare'], answer: 'banned', explain: 'banned：被禁止的' },
      { id: 'banned.q2', senseId: 'banned.s1', errorType: 'meaning', type: '词义', prompt: 'That dye is _____ in food sold to children.', options: ['banned', 'banner', 'bare'], answer: 'banned', explain: '空格需要 banned。' },
      { id: 'banned.q3', senseId: 'banned.s1', errorType: 'grammar', type: '易错', prompt: '被禁止的 应选哪一句？', options: ['Smoking is banned in this hall.', 'Smoking is ban in this hall.', '词形或搭配不对。'], answer: 'Smoking is banned in this hall.', explain: '被动意义的形容词用 banned。' },
      { id: 'banned.q4', senseId: 'banned.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：被禁止的', options: ['banned', 'banner', 'bare'], answer: 'banned', explain: '中文义对应 banned。' },
    ],
    usage: { domains: ['规则', '考试'], tone: '中性', commonConfusion: ['ban'] },
  });

  D('banner', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'banner', text: '现行词形，词性：noun。' },
        { label: 'banner', text: '横幅；标语' },
      ],
      mnemonic: '带字的长布条。',
      note: '网页顶部大图也常叫 banner，那是引申。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Students hung a banner above the door to welcome the guests.', chinese: '学生们在门上挂了一条横幅欢迎来宾。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'banner.s1', en: 'The banner asked drivers to slow down near the school.', zh: '横幅要求司机在学校附近减速。', structure: 'The  / banner /  asked drivers to slow down near the school.', grammar: '可数名词。', rationale: '门上的长条布标。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They wrote a banner on a small card.', right: 'They painted a banner and hung it over the street.', reason: '横幅是挂起来的长条，不是小卡片。', rule: 'hang a banner。', special: 'flag 是旗，不一定有长句标语。' },
    ],
    quiz: [
      { id: 'banner.q1', senseId: 'banner.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A long strip of cloth with a message.', options: ['banner', 'banquet', 'barely'], answer: 'banner', explain: 'banner：横幅；标语' },
      { id: 'banner.q2', senseId: 'banner.s1', errorType: 'meaning', type: '词义', prompt: 'Students hung a _____ above the door to welcome the guests.', options: ['banner', 'banquet', 'barely'], answer: 'banner', explain: '空格需要 banner。' },
      { id: 'banner.q3', senseId: 'banner.s1', errorType: 'meaning', type: '易错', prompt: '横幅；标语 应选哪一句？', options: ['They painted a banner and hung it over the street.', 'They wrote a banner on a small card.', '词形或搭配不对。'], answer: 'They painted a banner and hung it over the street.', explain: '横幅是挂起来的长条，不是小卡片。' },
      { id: 'banner.q4', senseId: 'banner.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：横幅；标语', options: ['banner', 'banquet', 'barely'], answer: 'banner', explain: '中文义对应 banner。' },
    ],
    usage: { domains: ['校园', '考试'], tone: '中性', commonConfusion: ['flag'] },
  });

  D('banquet', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'banquet', text: '现行词形，词性：noun。' },
        { label: 'banquet', text: '宴会；盛宴' },
      ],
      mnemonic: '人多、菜多、场合正式。',
      note: 'attend a banquet。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The banquet lasted three hours and ended with a short speech.', chinese: '宴会持续了三小时，以一段简短致辞结束。' },
    ],
    contexts: [
      { domain: '社交', senseId: 'banquet.s1', en: 'Nobody left the banquet until the host stood up.', zh: '主人起立之前，没有人离开宴会。', structure: 'Nobody left the  / banquet /  until the host stood up.', grammar: '可数名词。', rationale: '正式的多人宴席。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'We had a banquet of a quick sandwich.', right: 'We had a sandwich, not a banquet.', reason: 'banquet 是盛大正式的宴席，不是随便一个三明治。', rule: 'a banquet；hold a banquet。', special: 'dinner 可以很家常。' },
    ],
    quiz: [
      { id: 'banquet.q1', senseId: 'banquet.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A large formal meal for many people.', options: ['banquet', 'bar', 'bargain'], answer: 'banquet', explain: 'banquet：宴会；盛宴' },
      { id: 'banquet.q2', senseId: 'banquet.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ lasted three hours and ended with a short speech.', options: ['banquet', 'bar', 'bargain'], answer: 'banquet', explain: '空格需要 banquet。' },
      { id: 'banquet.q3', senseId: 'banquet.s1', errorType: 'meaning', type: '易错', prompt: '宴会；盛宴 应选哪一句？', options: ['We had a sandwich, not a banquet.', 'We had a banquet of a quick sandwich.', '词形或搭配不对。'], answer: 'We had a sandwich, not a banquet.', explain: 'banquet 是盛大正式的宴席，不是随便一个三明治。' },
      { id: 'banquet.q4', senseId: 'banquet.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：宴会；盛宴', options: ['banquet', 'bar', 'bargain'], answer: 'banquet', explain: '中文义对应 banquet。' },
    ],
    usage: { domains: ['社交', '考试'], tone: '中性', commonConfusion: ['dinner'] },
  });

  D('bar', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bar', text: '现行词形，词性：noun。' },
        { label: 'bar', text: '条；棒；酒吧；障碍' },
      ],
      mnemonic: '长条的固体，或卖酒的地方。',
      note: 'a bar of chocolate；behind bars 是在押。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He snapped a bar of chocolate and shared it with his sister.', chinese: '他掰开一条巧克力，分给了妹妹。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bar.s1', en: 'They met at a quiet bar and talked for an hour.', zh: '他们在一家安静的酒吧见面，谈了一个小时。', structure: 'They met at a quiet  / bar /  and talked for an hour.', grammar: '可数名词。', rationale: '一条巧克力。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A bar of the prison was a cafe only.', right: 'Prison bars are not a cafe.', reason: '监狱的铁条和酒吧不是一回事，要看搭配。', rule: 'a bar of；at a bar。', special: 'ban 是禁止，拼写更短。' },
    ],
    quiz: [
      { id: 'bar.q1', senseId: 'bar.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A long solid piece; a place serving drinks.', options: ['bar', 'barb', 'barge'], answer: 'bar', explain: 'bar：条；棒；酒吧；障碍' },
      { id: 'bar.q2', senseId: 'bar.s1', errorType: 'meaning', type: '词义', prompt: 'He snapped a _____ of chocolate and shared it with his sister.', options: ['bar', 'barb', 'barge'], answer: 'bar', explain: '空格需要 bar。' },
      { id: 'bar.q3', senseId: 'bar.s1', errorType: 'meaning', type: '易错', prompt: '条；棒；酒吧；障碍 应选哪一句？', options: ['Prison bars are not a cafe.', 'A bar of the prison was a cafe only.', '词形或搭配不对。'], answer: 'Prison bars are not a cafe.', explain: '监狱的铁条和酒吧不是一回事，要看搭配。' },
      { id: 'bar.q4', senseId: 'bar.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：条；棒；酒吧；障碍', options: ['bar', 'barb', 'barge'], answer: 'bar', explain: '中文义对应 bar。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['ban'] },
  });

  D('barb', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barb', text: '现行词形，词性：noun。' },
        { label: 'barb', text: '倒钩；尖刻的话' },
      ],
      mnemonic: '倒钩往回刺，话也可以刺人。',
      note: 'barbed wire 是带刺铁丝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The hook has a barb so the fish cannot slip off easily.', chinese: '鱼钩上有倒钩，鱼不容易脱落。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'barb.s1', en: 'She ignored the barb and finished her answer calmly.', zh: '她没理会那句尖刻的话，平静地把回答说完。', structure: 'She ignored the  / barb /  and finished her answer calmly.', grammar: '可数名词。', rationale: '钩上往后的尖。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He made a barb wire of a kind sentence.', right: 'The fence uses wire with barbs.', reason: '倒钩是尖刺，不是一句客气话。', rule: 'a barb on a hook；a barb 也可指刻薄话。', special: 'beard 是胡须。' },
    ],
    quiz: [
      { id: 'barb.q1', senseId: 'barb.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A sharp point that faces backwards, or a cruel remark.', options: ['barb', 'barbecue', 'bark'], answer: 'barb', explain: 'barb：倒钩；尖刻的话' },
      { id: 'barb.q2', senseId: 'barb.s1', errorType: 'meaning', type: '词义', prompt: 'The hook has a _____ so the fish cannot slip off easily.', options: ['barb', 'barbecue', 'bark'], answer: 'barb', explain: '空格需要 barb。' },
      { id: 'barb.q3', senseId: 'barb.s1', errorType: 'meaning', type: '易错', prompt: '倒钩；尖刻的话 应选哪一句？', options: ['The fence uses wire with barbs.', 'He made a barb wire of a kind sentence.', '词形或搭配不对。'], answer: 'The fence uses wire with barbs.', explain: '倒钩是尖刺，不是一句客气话。' },
      { id: 'barb.q4', senseId: 'barb.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：倒钩；尖刻的话', options: ['barb', 'barbecue', 'bark'], answer: 'barb', explain: '中文义对应 barb。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['beard'] },
  });

  D('barbecue', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barbecue', text: '现行词形，词性：noun。' },
        { label: 'barbecue', text: '烧烤；烤肉野餐' },
      ],
      mnemonic: '户外炭火上做食物。',
      note: '也可作动词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We planned a barbecue in the yard if the rain stayed away.', chinese: '如果不下雨，我们打算在院子里烧烤。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'barbecue.s1', en: 'The barbecue filled the street with the smell of corn and meat.', zh: '烧烤让整条街都是玉米和肉的气味。', structure: 'The  / barbecue /  filled the street with the smell of corn and meat.', grammar: '可数名词。', rationale: '院子里的户外聚餐。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They did a barbecue in the oven only.', right: 'They cooked on a barbecue in the yard.', reason: 'barbecue 的典型场景是户外炭火，不是只在烤箱里。', rule: 'have a barbecue。', special: 'bake 是烤箱。' },
    ],
    quiz: [
      { id: 'barbecue.q1', senseId: 'barbecue.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Cooking food over hot coals outdoors.', options: ['barbecue', 'barber', 'barn'], answer: 'barbecue', explain: 'barbecue：烧烤；烤肉野餐' },
      { id: 'barbecue.q2', senseId: 'barbecue.s1', errorType: 'meaning', type: '词义', prompt: 'We planned a _____ in the yard if the rain stayed away.', options: ['barbecue', 'barber', 'barn'], answer: 'barbecue', explain: '空格需要 barbecue。' },
      { id: 'barbecue.q3', senseId: 'barbecue.s1', errorType: 'meaning', type: '易错', prompt: '烧烤；烤肉野餐 应选哪一句？', options: ['They cooked on a barbecue in the yard.', 'They did a barbecue in the oven only.', '词形或搭配不对。'], answer: 'They cooked on a barbecue in the yard.', explain: 'barbecue 的典型场景是户外炭火，不是只在烤箱里。' },
      { id: 'barbecue.q4', senseId: 'barbecue.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：烧烤；烤肉野餐', options: ['barbecue', 'barber', 'barn'], answer: 'barbecue', explain: '中文义对应 barbecue。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['bake'] },
  });

  D('barber', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barber', text: '现行词形，词性：noun。' },
        { label: 'barber', text: '理发师' },
      ],
      mnemonic: '给人剪头发、修胡子的人。',
      note: '理发店是 a barbers 或 barber shop。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The barber trimmed his hair and swept the floor.', chinese: '理发师给他剪了头发，又扫了地。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'barber.s1', en: 'He has gone to the same barber for ten years.', zh: '他十年来一直找同一位理发师。', structure: 'He has gone to the same  / barber /  for ten years.', grammar: '可数名词，指人。', rationale: '提供理发服务的人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The barber cut the womens salon dress.', right: 'The barber cut his hair.', reason: 'barber 传统上给男士理发，不要和女装沙龙混成一句。', rule: 'go to the barber。', special: 'butcher 是肉贩。' },
    ],
    quiz: [
      { id: 'barber.q1', senseId: 'barber.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A person who cuts mens hair.', options: ['barber', 'bard', 'barometer'], answer: 'barber', explain: 'barber：理发师' },
      { id: 'barber.q2', senseId: 'barber.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ trimmed his hair and swept the floor.', options: ['barber', 'bard', 'barometer'], answer: 'barber', explain: '空格需要 barber。' },
      { id: 'barber.q3', senseId: 'barber.s1', errorType: 'meaning', type: '易错', prompt: '理发师 应选哪一句？', options: ['The barber cut his hair.', 'The barber cut the womens salon dress.', '词形或搭配不对。'], answer: 'The barber cut his hair.', explain: 'barber 传统上给男士理发，不要和女装沙龙混成一句。' },
      { id: 'barber.q4', senseId: 'barber.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：理发师', options: ['barber', 'bard', 'barometer'], answer: 'barber', explain: '中文义对应 barber。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['butcher'] },
  });

  D('bard', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bard', text: '现行词形，词性：noun。' },
        { label: 'bard', text: '吟游诗人；诗人' },
      ],
      mnemonic: '用诗和歌唱故事的人。',
      note: '文学阅读词，口语少用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bard sang an old story while the guests ate.', chinese: '诗人在客人用饭时唱了一个古老的故事。' },
    ],
    contexts: [
      { domain: '文学', senseId: 'bard.s1', en: 'Students read a poem by a famous bard of that age.', zh: '学生们读了那个时代一位著名诗人的诗。', structure: 'Students read a poem by a famous  / bard /  of that age.', grammar: '可数名词。', rationale: '在席间吟唱的诗人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bard fixed the car engine.', right: 'The bard recited a poem.', reason: 'bard 是诗人，不是修理工。', rule: 'a bard；the bard 有时特指著名诗人。', special: '与 bar 只有拼写接近。' },
    ],
    quiz: [
      { id: 'bard.q1', senseId: 'bard.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A poet, especially one celebrated as a great poet.', options: ['bard', 'bare', 'barrack'], answer: 'bard', explain: 'bard：吟游诗人；诗人' },
      { id: 'bard.q2', senseId: 'bard.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ sang an old story while the guests ate.', options: ['bard', 'bare', 'barrack'], answer: 'bard', explain: '空格需要 bard。' },
      { id: 'bard.q3', senseId: 'bard.s1', errorType: 'meaning', type: '易错', prompt: '吟游诗人；诗人 应选哪一句？', options: ['The bard recited a poem.', 'The bard fixed the car engine.', '词形或搭配不对。'], answer: 'The bard recited a poem.', explain: 'bard 是诗人，不是修理工。' },
      { id: 'bard.q4', senseId: 'bard.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：吟游诗人；诗人', options: ['bard', 'bare', 'barrack'], answer: 'bard', explain: '中文义对应 bard。' },
    ],
    usage: { domains: ['文学', '考试'], tone: '中性', commonConfusion: ['poet'] },
  });

  D('bare', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bare', text: '现行词形，词性：adjective。' },
        { label: 'bare', text: '赤裸的；空的；露出' },
      ],
      mnemonic: '没有覆盖，或里面没有通常有的东西。',
      note: 'bare feet，with ones bare hands。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The room was bare except for a chair by the window.', chinese: '房间是空的，只有窗边一把椅子。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bare.s1', en: 'She walked on the beach in bare feet.', zh: '她赤脚走在沙滩上。', structure: 'She walked on the beach in  / bare /  feet.', grammar: '形容词作表语。', rationale: '房间里几乎没有家具。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The cupboard was barely of food meaning empty.', right: 'The cupboard was bare of food.', reason: '空无所有用 bare of，不要换成 barely。', rule: 'bare feet；bare of。', special: 'barely 是副词，几乎不。' },
    ],
    quiz: [
      { id: 'bare.q1', senseId: 'bare.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Not covered; without the usual contents.', options: ['bare', 'barely', 'barracks'], answer: 'bare', explain: 'bare：赤裸的；空的；露出' },
      { id: 'bare.q2', senseId: 'bare.s1', errorType: 'meaning', type: '词义', prompt: 'The room was _____ except for a chair by the window.', options: ['bare', 'barely', 'barracks'], answer: 'bare', explain: '空格需要 bare。' },
      { id: 'bare.q3', senseId: 'bare.s1', errorType: 'confusable', type: '易错', prompt: '赤裸的；空的；露出 应选哪一句？', options: ['The cupboard was bare of food.', 'The cupboard was barely of food meaning empty.', '词形或搭配不对。'], answer: 'The cupboard was bare of food.', explain: '空无所有用 bare of，不要换成 barely。' },
      { id: 'bare.q4', senseId: 'bare.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：赤裸的；空的；露出', options: ['bare', 'barely', 'barracks'], answer: 'bare', explain: '中文义对应 bare。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['barely'] },
  });

  D('barely', {
    etymology: {
      origin: '英语派生：bare + -ly',
      prefix: null,
      root: { text: 'bare', gloss: '仅仅、光光的' },
      suffix: { text: '-ly', gloss: '副词后缀' },
      history: [
        { label: 'bare', text: '仅仅、光光的，是后来派生的基础。' },
        { label: 'barely', text: '几乎不；勉强' },
      ],
      mnemonic: 'barely 表示差一点就没有。',
      note: '放在主要动词前：barely had。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He barely caught the bus and had no time to buy a ticket first.', chinese: '他勉强赶上公交，来不及先买票。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'barely.s1', en: 'We barely had enough light to read the map.', zh: '光线勉强够我们看地图。', structure: 'We  / barely /  had enough light to read the map.', grammar: '程度副词，靠近动词。', rationale: '刚好赶上，几乎错过。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She bare caught the train.', right: 'She barely caught the train.', reason: '几乎不、刚刚够，用副词 barely。', rule: 'barely + 动词。', special: 'bare 是形容词。' },
    ],
    quiz: [
      { id: 'barely.q1', senseId: 'barely.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Only just; almost not.', options: ['barely', 'bargain', 'barrel'], answer: 'barely', explain: 'barely：几乎不；勉强' },
      { id: 'barely.q2', senseId: 'barely.s1', errorType: 'meaning', type: '词义', prompt: 'He _____ caught the bus and had no time to buy a ticket first.', options: ['barely', 'bargain', 'barrel'], answer: 'barely', explain: '空格需要 barely。' },
      { id: 'barely.q3', senseId: 'barely.s1', errorType: 'confusable', type: '易错', prompt: '几乎不；勉强 应选哪一句？', options: ['She barely caught the train.', 'She bare caught the train.', '词形或搭配不对。'], answer: 'She barely caught the train.', explain: '几乎不、刚刚够，用副词 barely。' },
      { id: 'barely.q4', senseId: 'barely.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：几乎不；勉强', options: ['barely', 'bargain', 'barrel'], answer: 'barely', explain: '中文义对应 barely。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bare'] },
  });

  D('bargain', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bargain', text: '现行词形，词性：noun。' },
        { label: 'bargain', text: '便宜货；交易；讨价还价' },
      ],
      mnemonic: '便宜，或双方谈妥的条件。',
      note: 'a bargain 是划算的东西；动词是讨价还价。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This coat was a bargain because the shop was closing.', chinese: '这家店要关门，这件外套成了便宜货。' },
    ],
    contexts: [
      { domain: '购物', senseId: 'bargain.s1', en: 'They struck a bargain and shared the cost of the taxi.', zh: '他们达成交易，出租车费平摊。', structure: 'They struck a  / bargain /  and shared the cost of the taxi.', grammar: '可数名词。', rationale: '价格低到值得买。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He did a bargain the price with shouting only.', right: 'He tried to bargain over the price.', reason: '讲价用 bargain over the price，或动词 bargain。', rule: 'a bargain；bargain over a price。', special: 'into the bargain 表示另外还。' },
    ],
    quiz: [
      { id: 'bargain.q1', senseId: 'bargain.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Something bought cheaply; to agree a price.', options: ['bargain', 'barge', 'barren'], answer: 'bargain', explain: 'bargain：便宜货；交易；讨价还价' },
      { id: 'bargain.q2', senseId: 'bargain.s1', errorType: 'meaning', type: '词义', prompt: 'This coat was a _____ because the shop was closing.', options: ['bargain', 'barge', 'barren'], answer: 'bargain', explain: '空格需要 bargain。' },
      { id: 'bargain.q3', senseId: 'bargain.s1', errorType: 'collocation', type: '易错', prompt: '便宜货；交易；讨价还价 应选哪一句？', options: ['He tried to bargain over the price.', 'He did a bargain the price with shouting only.', '词形或搭配不对。'], answer: 'He tried to bargain over the price.', explain: '讲价用 bargain over the price，或动词 bargain。' },
      { id: 'bargain.q4', senseId: 'bargain.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：便宜货；交易；讨价还价', options: ['bargain', 'barge', 'barren'], answer: 'bargain', explain: '中文义对应 bargain。' },
    ],
    usage: { domains: ['购物', '考试'], tone: '中性', commonConfusion: ['sale'] },
  });

  D('barge', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barge', text: '现行词形，词性：noun。' },
        { label: 'barge', text: '驳船；闯入' },
      ],
      mnemonic: '平底货船，或很没礼貌地冲进去。',
      note: '动词 barge in / into。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A barge moved slowly down the canal with a load of sand.', chinese: '一艘驳船载着沙子沿运河慢慢走。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'barge.s1', en: 'Do not barge into the room while the exam is still going.', zh: '考试还在进行时不要闯进屋。', structure: 'Do not  / barge /  into the room while the exam is still going.', grammar: '可数名词。', rationale: '运河上运货的船。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He barged the boat into the library shelves.', right: 'He barged into the meeting.', reason: '闯入用 barge into，驳船才是水上的船。', rule: 'barge into a room。', special: '船义是平底货船。' },
    ],
    quiz: [
      { id: 'barge.q1', senseId: 'barge.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A flat boat for heavy goods; to push in rudely.', options: ['barge', 'bark', 'barrier'], answer: 'barge', explain: 'barge：驳船；闯入' },
      { id: 'barge.q2', senseId: 'barge.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ moved slowly down the canal with a load of sand.', options: ['barge', 'bark', 'barrier'], answer: 'barge', explain: '空格需要 barge。' },
      { id: 'barge.q3', senseId: 'barge.s1', errorType: 'collocation', type: '易错', prompt: '驳船；闯入 应选哪一句？', options: ['He barged into the meeting.', 'He barged the boat into the library shelves.', '词形或搭配不对。'], answer: 'He barged into the meeting.', explain: '闯入用 barge into，驳船才是水上的船。' },
      { id: 'barge.q4', senseId: 'barge.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：驳船；闯入', options: ['barge', 'bark', 'barrier'], answer: 'barge', explain: '中文义对应 barge。' },
    ],
    usage: { domains: ['交通', '考试'], tone: '中性', commonConfusion: ['boat'] },
  });

  D('bark', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bark', text: '现行词形，词性：noun。' },
        { label: 'bark', text: '狗叫；吠声；树皮' },
      ],
      mnemonic: '狗的声音，或树的外皮。',
      note: '动词：The dog barked.',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The dogs bark woke the whole camp before sunrise.', chinese: '狗叫声在日出前把整个营地吵醒了。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'bark.s1', en: 'The bark of the birch is pale and peels in thin strips.', zh: '桦树的树皮颜色浅，会成薄片剥落。', structure: 'The  / bark /  of the birch is pale and peels in thin strips.', grammar: '名词，狗叫可不可数。', rationale: '把人吵醒的狗吠。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He heard the bark of a cat singing.', right: 'He heard the bark of a dog.', reason: 'bark 作动物叫声时是狗叫，不是猫唱歌。', rule: 'the bark of a dog / a tree。', special: '树皮不是 skin。' },
    ],
    quiz: [
      { id: 'bark.q1', senseId: 'bark.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The sound a dog makes; the outer cover of a tree.', options: ['bark', 'barn', 'barrow'], answer: 'bark', explain: 'bark：狗叫；吠声；树皮' },
      { id: 'bark.q2', senseId: 'bark.s1', errorType: 'meaning', type: '词义', prompt: 'The dogs _____ woke the whole camp before sunrise.', options: ['bark', 'barn', 'barrow'], answer: 'bark', explain: '空格需要 bark。' },
      { id: 'bark.q3', senseId: 'bark.s1', errorType: 'meaning', type: '易错', prompt: '狗叫；吠声；树皮 应选哪一句？', options: ['He heard the bark of a dog.', 'He heard the bark of a cat singing.', '词形或搭配不对。'], answer: 'He heard the bark of a dog.', explain: 'bark 作动物叫声时是狗叫，不是猫唱歌。' },
      { id: 'bark.q4', senseId: 'bark.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：狗叫；吠声；树皮', options: ['bark', 'barn', 'barrow'], answer: 'bark', explain: '中文义对应 bark。' },
    ],
    usage: { domains: ['自然', '考试'], tone: '中性', commonConfusion: ['skin'] },
  });

  D('barn', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barn', text: '现行词形，词性：noun。' },
        { label: 'barn', text: '谷仓；牲口棚' },
      ],
      mnemonic: '农场上放庄稼或关牲口的大房子。',
      note: '可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They stored the dry hay in the barn before the rain.', chinese: '下雨前他们把干草收进谷仓。' },
    ],
    contexts: [
      { domain: '农业', senseId: 'barn.s1', en: 'A lamp in the barn stayed on all night for the calves.', zh: '谷仓里的灯为了小牛整夜亮着。', structure: 'A lamp in the  / barn /  stayed on all night for the calves.', grammar: '可数名词，地点状语。', rationale: '存放干草的农舍。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The barn was a city bank.', right: 'The barn stood beside the field.', reason: 'barn 是农场建筑，不是银行。', rule: 'in the barn。', special: '不是住宅 house。' },
    ],
    quiz: [
      { id: 'barn.q1', senseId: 'barn.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A farm building for storing crops or keeping animals.', options: ['barn', 'barometer', 'base'], answer: 'barn', explain: 'barn：谷仓；牲口棚' },
      { id: 'barn.q2', senseId: 'barn.s1', errorType: 'meaning', type: '词义', prompt: 'They stored the dry hay in the _____ before the rain.', options: ['barn', 'barometer', 'base'], answer: 'barn', explain: '空格需要 barn。' },
      { id: 'barn.q3', senseId: 'barn.s1', errorType: 'meaning', type: '易错', prompt: '谷仓；牲口棚 应选哪一句？', options: ['The barn stood beside the field.', 'The barn was a city bank.', '词形或搭配不对。'], answer: 'The barn stood beside the field.', explain: 'barn 是农场建筑，不是银行。' },
      { id: 'barn.q4', senseId: 'barn.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：谷仓；牲口棚', options: ['barn', 'barometer', 'base'], answer: 'barn', explain: '中文义对应 barn。' },
    ],
    usage: { domains: ['农业', '考试'], tone: '中性', commonConfusion: ['house'] },
  });

  D('barometer', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barometer', text: '现行词形，词性：noun。' },
        { label: 'barometer', text: '气压计；晴雨表' },
      ],
      mnemonic: '测气压，也可比喻形势指标。',
      note: '阅读里两种意思都常见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The barometer fell, and the sailors prepared for a storm.', chinese: '气压计下降，水手们准备迎接风暴。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'barometer.s1', en: 'Ticket sales are a barometer of how the team is playing.', zh: '票房是球队状态的晴雨表。', structure: 'Ticket sales are a  / barometer /  of how the team is playing.', grammar: '可数名词。', rationale: '仪器显示风暴将至。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A barometer cooks the soup.', right: 'A barometer measures air pressure.', reason: '它是测量仪器，不是厨具。', rule: 'a barometer of + 所反映的情况。', special: '温度计是 thermometer。' },
    ],
    quiz: [
      { id: 'barometer.q1', senseId: 'barometer.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: An instrument that measures air pressure; a sign of change.', options: ['barometer', 'barrack', 'baseball'], answer: 'barometer', explain: 'barometer：气压计；晴雨表' },
      { id: 'barometer.q2', senseId: 'barometer.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ fell, and the sailors prepared for a storm.', options: ['barometer', 'barrack', 'baseball'], answer: 'barometer', explain: '空格需要 barometer。' },
      { id: 'barometer.q3', senseId: 'barometer.s1', errorType: 'meaning', type: '易错', prompt: '气压计；晴雨表 应选哪一句？', options: ['A barometer measures air pressure.', 'A barometer cooks the soup.', '词形或搭配不对。'], answer: 'A barometer measures air pressure.', explain: '它是测量仪器，不是厨具。' },
      { id: 'barometer.q4', senseId: 'barometer.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：气压计；晴雨表', options: ['barometer', 'barrack', 'baseball'], answer: 'barometer', explain: '中文义对应 barometer。' },
    ],
    usage: { domains: ['科学', '考试'], tone: '中性', commonConfusion: ['thermometer'] },
  });

  D('barrack', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barrack', text: '现行词形，词性：noun。' },
        { label: 'barrack', text: '兵营；喝倒彩' },
      ],
      mnemonic: '士兵住的房子；动词是起哄喝倒彩。',
      note: '复数 barracks 更常指营区。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The old barrack is now a museum with narrow beds.', chinese: '旧兵营现在是博物馆，里面有窄床。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'barrack.s1', en: 'A few people began to barrack the speaker before he finished.', zh: '他还没说完，就有几个人开始喝倒彩。', structure: 'A few people began to  / barrack /  the speaker before he finished.', grammar: '名词。', rationale: '过去士兵居住的建筑。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They barrack a house for tourists only as a hotel chain.', right: 'Soldiers once lived in that barrack.', reason: '名词义是营房，不要理解成连锁酒店。', rule: 'barrack 可作营房或喝倒彩。', special: '营区常用复数 barracks。' },
    ],
    quiz: [
      { id: 'barrack.q1', senseId: 'barrack.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A building for soldiers, or to shout against a speaker.', options: ['barrack', 'barracks', 'basement'], answer: 'barrack', explain: 'barrack：兵营；喝倒彩' },
      { id: 'barrack.q2', senseId: 'barrack.s1', errorType: 'meaning', type: '词义', prompt: 'The old _____ is now a museum with narrow beds.', options: ['barrack', 'barracks', 'basement'], answer: 'barrack', explain: '空格需要 barrack。' },
      { id: 'barrack.q3', senseId: 'barrack.s1', errorType: 'meaning', type: '易错', prompt: '兵营；喝倒彩 应选哪一句？', options: ['Soldiers once lived in that barrack.', 'They barrack a house for tourists only as a hotel chain.', '词形或搭配不对。'], answer: 'Soldiers once lived in that barrack.', explain: '名词义是营房，不要理解成连锁酒店。' },
      { id: 'barrack.q4', senseId: 'barrack.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：兵营；喝倒彩', options: ['barrack', 'barracks', 'basement'], answer: 'barrack', explain: '中文义对应 barrack。' },
    ],
    usage: { domains: ['历史', '考试'], tone: '中性', commonConfusion: ['barracks'] },
  });

  D('barracks', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barracks', text: '现行词形，词性：noun。' },
        { label: 'barracks', text: '兵营；营房' },
      ],
      mnemonic: '士兵集体住的那片房子。',
      note: '形式是复数，指地点时动词可用单数或复数，考试里记住它是营房。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The soldiers returned to the barracks after the long march.', chinese: '长途行军后，士兵们回到营房。' },
    ],
    contexts: [
      { domain: '军事', senseId: 'barracks.s1', en: 'Lights in the barracks went out at the same hour.', zh: '营房的灯在同一时刻熄灭。', structure: 'Lights in the  / barracks /  went out at the same hour.', grammar: '名词，表示营区。', rationale: '行军结束后住的地方。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'A barracks are one small tent only always.', right: 'The barracks house many soldiers.', reason: 'barracks 常指一群营房，形式虽以 s 结尾，意思是营区。', rule: 'in the barracks。', special: '不要当成一只帐篷。' },
    ],
    quiz: [
      { id: 'barracks.q1', senseId: 'barracks.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Buildings where soldiers live.', options: ['barracks', 'barrel', 'bashful'], answer: 'barracks', explain: 'barracks：兵营；营房' },
      { id: 'barracks.q2', senseId: 'barracks.s1', errorType: 'meaning', type: '词义', prompt: 'The soldiers returned to the _____ after the long march.', options: ['barracks', 'barrel', 'bashful'], answer: 'barracks', explain: '空格需要 barracks。' },
      { id: 'barracks.q3', senseId: 'barracks.s1', errorType: 'grammar', type: '易错', prompt: '兵营；营房 应选哪一句？', options: ['The barracks house many soldiers.', 'A barracks are one small tent only always.', '词形或搭配不对。'], answer: 'The barracks house many soldiers.', explain: 'barracks 常指一群营房，形式虽以 s 结尾，意思是营区。' },
      { id: 'barracks.q4', senseId: 'barracks.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：兵营；营房', options: ['barracks', 'barrel', 'bashful'], answer: 'barracks', explain: '中文义对应 barracks。' },
    ],
    usage: { domains: ['军事', '考试'], tone: '中性', commonConfusion: ['barrack'] },
  });

  D('barrel', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barrel', text: '现行词形，词性：noun。' },
        { label: 'barrel', text: '桶；一桶之量；高速冲' },
      ],
      mnemonic: '圆桶，或速度快得像冲出去。',
      note: 'a barrel of 表一桶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They rolled a barrel of water to the dry field.', chinese: '他们把一桶水滚到干旱的田边。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'barrel.s1', en: 'The truck seemed to barrel down the empty road.', zh: '卡车好像沿着空路飞驰。', structure: 'The truck seemed to  / barrel /  down the empty road.', grammar: '可数名词。', rationale: '装水的大圆桶。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A barrel of news was a small cup.', right: 'A barrel of water is a large amount.', reason: 'barrel 是大桶，不是小杯子。', rule: 'a barrel of。', special: 'bottle 通常更小。' },
    ],
    quiz: [
      { id: 'barrel.q1', senseId: 'barrel.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A large round container; to move very fast.', options: ['barrel', 'barren', 'basic'], answer: 'barrel', explain: 'barrel：桶；一桶之量；高速冲' },
      { id: 'barrel.q2', senseId: 'barrel.s1', errorType: 'meaning', type: '词义', prompt: 'They rolled a _____ of water to the dry field.', options: ['barrel', 'barren', 'basic'], answer: 'barrel', explain: '空格需要 barrel。' },
      { id: 'barrel.q3', senseId: 'barrel.s1', errorType: 'meaning', type: '易错', prompt: '桶；一桶之量；高速冲 应选哪一句？', options: ['A barrel of water is a large amount.', 'A barrel of news was a small cup.', '词形或搭配不对。'], answer: 'A barrel of water is a large amount.', explain: 'barrel 是大桶，不是小杯子。' },
      { id: 'barrel.q4', senseId: 'barrel.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：桶；一桶之量；高速冲', options: ['barrel', 'barren', 'basic'], answer: 'barrel', explain: '中文义对应 barrel。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['bottle'] },
  });

  D('barren', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barren', text: '现行词形，词性：adjective。' },
        { label: 'barren', text: '贫瘠的；不结果的；无益的' },
      ],
      mnemonic: '长不出东西，或做了也没有结果。',
      note: 'barren land；a barren discussion。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The barren field grew stones and almost no grass.', chinese: '那片贫瘠的地里多是石头，几乎不长草。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'barren.s1', en: 'A barren argument wastes the hour and settles nothing.', zh: '无益的争论浪费时间，什么也解决不了。', structure: 'A  / barren /  argument wastes the hour and settles nothing.', grammar: '形容词修饰 field。', rationale: '土地几乎不长植物。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The barren land was full of thick rice.', right: 'The barren land produced almost nothing.', reason: '贫瘠就不会长出茂盛的庄稼。', rule: 'barren land / discussion。', special: 'empty 只是空，不一定贫瘠。' },
    ],
    quiz: [
      { id: 'barren.q1', senseId: 'barren.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Land that cannot grow plants; producing nothing useful.', options: ['barren', 'barrier', 'basic colour'], answer: 'barren', explain: 'barren：贫瘠的；不结果的；无益的' },
      { id: 'barren.q2', senseId: 'barren.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ field grew stones and almost no grass.', options: ['barren', 'barrier', 'basic colour'], answer: 'barren', explain: '空格需要 barren。' },
      { id: 'barren.q3', senseId: 'barren.s1', errorType: 'meaning', type: '易错', prompt: '贫瘠的；不结果的；无益的 应选哪一句？', options: ['The barren land produced almost nothing.', 'The barren land was full of thick rice.', '词形或搭配不对。'], answer: 'The barren land produced almost nothing.', explain: '贫瘠就不会长出茂盛的庄稼。' },
      { id: 'barren.q4', senseId: 'barren.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：贫瘠的；不结果的；无益的', options: ['barren', 'barrier', 'basic colour'], answer: 'barren', explain: '中文义对应 barren。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['empty'] },
  });

  D('barrier', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barrier', text: '现行词形，词性：noun。' },
        { label: 'barrier', text: '障碍；屏障；关卡' },
      ],
      mnemonic: '拦住路或拦住进展。',
      note: 'a barrier to progress。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A fallen tree became a barrier across the path.', chinese: '一棵倒下的树挡住了小路。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'barrier.s1', en: 'Language can be a barrier when nobody shares a common word.', zh: '如果没有共同的词语，语言就会成为障碍。', structure: 'Language can be a  / barrier /  when nobody shares a common word.', grammar: '可数名词。', rationale: '树横在路上，人过不去。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They built a barrier for help people pass faster.', right: 'They removed the barrier so people could pass.', reason: 'barrier 是挡住去路的东西，不是用来加快通过的。', rule: 'a barrier to + 名词。', special: 'fence 多指具体围栏。' },
    ],
    quiz: [
      { id: 'barrier.q1', senseId: 'barrier.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A thing that blocks the way or prevents progress.', options: ['barrier', 'barrow', 'basically'], answer: 'barrier', explain: 'barrier：障碍；屏障；关卡' },
      { id: 'barrier.q2', senseId: 'barrier.s1', errorType: 'meaning', type: '词义', prompt: 'A fallen tree became a _____ across the path.', options: ['barrier', 'barrow', 'basically'], answer: 'barrier', explain: '空格需要 barrier。' },
      { id: 'barrier.q3', senseId: 'barrier.s1', errorType: 'collocation', type: '易错', prompt: '障碍；屏障；关卡 应选哪一句？', options: ['They removed the barrier so people could pass.', 'They built a barrier for help people pass faster.', '词形或搭配不对。'], answer: 'They removed the barrier so people could pass.', explain: 'barrier 是挡住去路的东西，不是用来加快通过的。' },
      { id: 'barrier.q4', senseId: 'barrier.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：障碍；屏障；关卡', options: ['barrier', 'barrow', 'basically'], answer: 'barrier', explain: '中文义对应 barrier。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['fence'] },
  });

  D('barrow', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'barrow', text: '现行词形，词性：noun。' },
        { label: 'barrow', text: '手推车；摊贩车' },
      ],
      mnemonic: '用手推的小车。',
      note: '也可指货摊车。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He pushed a barrow of cabbages to the morning market.', chinese: '他推着一车卷心菜去早市。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'barrow.s1', en: 'The barrow wheel stuck in the mud near the gate.', zh: '手推车的轮子在门口的泥里卡住了。', structure: 'The  / barrow /  wheel stuck in the mud near the gate.', grammar: '可数名词。', rationale: '用来运菜的小车。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She drove a barrow on the motorway at high speed.', right: 'She pushed a barrow along the path.', reason: 'barrow 是手推的小车，不是上高速的汽车。', rule: 'push a barrow。', special: '不要当汽车用。' },
    ],
    quiz: [
      { id: 'barrow.q1', senseId: 'barrow.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A small cart with wheels that you push.', options: ['barrow', 'base', 'basics'], answer: 'barrow', explain: 'barrow：手推车；摊贩车' },
      { id: 'barrow.q2', senseId: 'barrow.s1', errorType: 'meaning', type: '词义', prompt: 'He pushed a _____ of cabbages to the morning market.', options: ['barrow', 'base', 'basics'], answer: 'barrow', explain: '空格需要 barrow。' },
      { id: 'barrow.q3', senseId: 'barrow.s1', errorType: 'meaning', type: '易错', prompt: '手推车；摊贩车 应选哪一句？', options: ['She pushed a barrow along the path.', 'She drove a barrow on the motorway at high speed.', '词形或搭配不对。'], answer: 'She pushed a barrow along the path.', explain: 'barrow 是手推的小车，不是上高速的汽车。' },
      { id: 'barrow.q4', senseId: 'barrow.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：手推车；摊贩车', options: ['barrow', 'base', 'basics'], answer: 'barrow', explain: '中文义对应 barrow。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['car'] },
  });

  D('base', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'base', text: '现行词形，词性：noun。' },
        { label: 'base', text: '基底；基地；以……为基础' },
      ],
      mnemonic: '最底下的部分，或活动的大本营。',
      note: '动词 base on 是以……为根据。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The statue stands on a stone base in the square.', chinese: '雕像立在广场的石座上。' },
    ],
    contexts: [
      { domain: '通用', senseId: 'base.s1', en: 'The team flew back to base after the storm warning.', zh: '风暴警报之后，队伍飞回基地。', structure: 'The team flew back to  / base /  after the storm warning.', grammar: '可数名词。', rationale: '雕像下面的底座。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'They based the house on a cloud with no support.', right: 'The house rests on a firm base.', reason: 'base 是底下的支撑或活动据点。', rule: 'a base；base something on。', special: 'basis 更抽象，是根据、基础。' },
    ],
    quiz: [
      { id: 'base.q1', senseId: 'base.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The lowest part; the main place of activity.', options: ['base', 'baseball', 'basin'], answer: 'base', explain: 'base：基底；基地；以……为基础' },
      { id: 'base.q2', senseId: 'base.s1', errorType: 'meaning', type: '词义', prompt: 'The statue stands on a stone _____ in the square.', options: ['base', 'baseball', 'basin'], answer: 'base', explain: '空格需要 base。' },
      { id: 'base.q3', senseId: 'base.s1', errorType: 'confusable', type: '易错', prompt: '基底；基地；以……为基础 应选哪一句？', options: ['The house rests on a firm base.', 'They based the house on a cloud with no support.', '词形或搭配不对。'], answer: 'The house rests on a firm base.', explain: 'base 是底下的支撑或活动据点。' },
      { id: 'base.q4', senseId: 'base.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：基底；基地；以……为基础', options: ['base', 'baseball', 'basin'], answer: 'base', explain: '中文义对应 base。' },
    ],
    usage: { domains: ['通用', '考试'], tone: '中性', commonConfusion: ['basis'] },
  });

  D('baseball', {
    etymology: {
      origin: '英语派生：base + ball',
      prefix: null,
      root: { text: 'ball', gloss: '球' },
      suffix: null,
      history: [
        { label: 'ball', text: '球，是后来派生的基础。' },
        { label: 'baseball', text: '棒球；棒球运动' },
      ],
      mnemonic: '用棒击球的运动。',
      note: 'play baseball 不加 the。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They played baseball until the field grew dark.', chinese: '他们打棒球直到场地暗下来。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'baseball.s1', en: 'The baseball flew over the fence and into the street.', zh: '棒球飞过围栏，落到街上。', structure: 'The  / baseball /  flew over the fence and into the street.', grammar: '运动名常不可数；球本身可数。', rationale: '指这项运动。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He kicked the baseball into a goal.', right: 'He hit the baseball with a bat.', reason: '棒球是用球棒打，不是用脚踢进球门。', rule: 'play baseball。', special: '篮筐的运动是 basketball。' },
    ],
    quiz: [
      { id: 'baseball.q1', senseId: 'baseball.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A game with a bat and ball; the ball itself.', options: ['baseball', 'basement', 'basis'], answer: 'baseball', explain: 'baseball：棒球；棒球运动' },
      { id: 'baseball.q2', senseId: 'baseball.s1', errorType: 'meaning', type: '词义', prompt: 'They played _____ until the field grew dark.', options: ['baseball', 'basement', 'basis'], answer: 'baseball', explain: '空格需要 baseball。' },
      { id: 'baseball.q3', senseId: 'baseball.s1', errorType: 'collocation', type: '易错', prompt: '棒球；棒球运动 应选哪一句？', options: ['He hit the baseball with a bat.', 'He kicked the baseball into a goal.', '词形或搭配不对。'], answer: 'He hit the baseball with a bat.', explain: '棒球是用球棒打，不是用脚踢进球门。' },
      { id: 'baseball.q4', senseId: 'baseball.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：棒球；棒球运动', options: ['baseball', 'basement', 'basis'], answer: 'baseball', explain: '中文义对应 baseball。' },
    ],
    usage: { domains: ['体育', '考试'], tone: '中性', commonConfusion: ['basketball'] },
  });

  D('basement', {
    etymology: {
      origin: '英语派生：base + -ment',
      prefix: null,
      root: { text: 'base', gloss: '底部' },
      suffix: { text: '-ment', gloss: '名词后缀' },
      history: [
        { label: 'base', text: '底部，是后来派生的基础。' },
        { label: 'basement', text: '地下室' },
      ],
      mnemonic: '在底座那一层下面的房间。',
      note: 'in the basement。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The family keeps old chairs in the basement.', chinese: '这家人把旧椅子放在地下室。' },
    ],
    contexts: [
      { domain: '居住', senseId: 'basement.s1', en: 'Water entered the basement after the heavy rain.', zh: '大雨之后水进了地下室。', structure: 'Water entered the  / basement /  after the heavy rain.', grammar: '可数名词。', rationale: '地面以下的储物空间。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They slept in the basement on the roof.', right: 'They stored boxes in the basement.', reason: '地下室在地面以下，不在屋顶。', rule: 'in the basement。', special: 'attic 是阁楼，在上面。' },
    ],
    quiz: [
      { id: 'basement.q1', senseId: 'basement.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A room below ground level.', options: ['basement', 'bashful', 'basket'], answer: 'basement', explain: 'basement：地下室' },
      { id: 'basement.q2', senseId: 'basement.s1', errorType: 'meaning', type: '词义', prompt: 'The family keeps old chairs in the _____.', options: ['basement', 'bashful', 'basket'], answer: 'basement', explain: '空格需要 basement。' },
      { id: 'basement.q3', senseId: 'basement.s1', errorType: 'meaning', type: '易错', prompt: '地下室 应选哪一句？', options: ['They stored boxes in the basement.', 'They slept in the basement on the roof.', '词形或搭配不对。'], answer: 'They stored boxes in the basement.', explain: '地下室在地面以下，不在屋顶。' },
      { id: 'basement.q4', senseId: 'basement.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：地下室', options: ['basement', 'bashful', 'basket'], answer: 'basement', explain: '中文义对应 basement。' },
    ],
    usage: { domains: ['居住', '考试'], tone: '中性', commonConfusion: ['attic'] },
  });

  D('bashful', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bashful', text: '现行词形，词性：adjective。' },
        { label: 'bashful', text: '害羞的；腼腆的' },
      ],
      mnemonic: '容易不好意思。',
      note: '近义词 shy，bashful 更文一点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bashful child hid behind his mother when guests arrived.', chinese: '客人来时，腼腆的孩子躲到母亲身后。' },
    ],
    contexts: [
      { domain: '性格', senseId: 'bashful.s1', en: 'She gave a bashful smile and did not speak at first.', zh: '她羞怯地笑了笑，一开始没有说话。', structure: 'She gave a  / bashful /  smile and did not speak at first.', grammar: '形容词作定语。', rationale: '孩子因为害羞而躲开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A bashful person shouted at every stranger.', right: 'A bashful person may avoid strangers.', reason: '害羞的人通常不会对每个陌生人大喊。', rule: 'a bashful smile / child。', special: 'bold 是大胆。' },
    ],
    quiz: [
      { id: 'bashful.q1', senseId: 'bashful.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Shy and easily embarrassed.', options: ['bashful', 'basic', 'basketball'], answer: 'bashful', explain: 'bashful：害羞的；腼腆的' },
      { id: 'bashful.q2', senseId: 'bashful.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ child hid behind his mother when guests arrived.', options: ['bashful', 'basic', 'basketball'], answer: 'bashful', explain: '空格需要 bashful。' },
      { id: 'bashful.q3', senseId: 'bashful.s1', errorType: 'meaning', type: '易错', prompt: '害羞的；腼腆的 应选哪一句？', options: ['A bashful person may avoid strangers.', 'A bashful person shouted at every stranger.', '词形或搭配不对。'], answer: 'A bashful person may avoid strangers.', explain: '害羞的人通常不会对每个陌生人大喊。' },
      { id: 'bashful.q4', senseId: 'bashful.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：害羞的；腼腆的', options: ['bashful', 'basic', 'basketball'], answer: 'bashful', explain: '中文义对应 bashful。' },
    ],
    usage: { domains: ['性格', '考试'], tone: '中性', commonConfusion: ['bold'] },
  });

  D('basic', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'basic', text: '现行词形，词性：adjective。' },
        { label: 'basic', text: '基本的；基础的；初步的' },
      ],
      mnemonic: '最必要的那一层。',
      note: 'basic 修饰名词；basically 是副词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The course starts with basic rules before harder texts.', chinese: '课程先讲基本规则，再读更难的文章。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'basic.s1', en: 'Clean water is a basic need, not a luxury.', zh: '干净的水是基本需要，不是奢侈。', structure: 'Clean water is a  / basic /  need, not a luxury.', grammar: '形容词作定语。', rationale: '规则是后面内容的必要起点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He skipped the basic and began with the final only.', right: 'He learned the basic rules first.', reason: 'basic 是起步必须的部分。', rule: 'basic + 名词。', special: '副词用 basically。' },
    ],
    quiz: [
      { id: 'basic.q1', senseId: 'basic.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Forming the most necessary part.', options: ['basic', 'basic colour', 'bass'], answer: 'basic', explain: 'basic：基本的；基础的；初步的' },
      { id: 'basic.q2', senseId: 'basic.s1', errorType: 'meaning', type: '词义', prompt: 'The course starts with _____ rules before harder texts.', options: ['basic', 'basic colour', 'bass'], answer: 'basic', explain: '空格需要 basic。' },
      { id: 'basic.q3', senseId: 'basic.s1', errorType: 'grammar', type: '易错', prompt: '基本的；基础的；初步的 应选哪一句？', options: ['He learned the basic rules first.', 'He skipped the basic and began with the final only.', '词形或搭配不对。'], answer: 'He learned the basic rules first.', explain: 'basic 是起步必须的部分。' },
      { id: 'basic.q4', senseId: 'basic.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：基本的；基础的；初步的', options: ['basic', 'basic colour', 'bass'], answer: 'basic', explain: '中文义对应 basic。' },
    ],
    usage: { domains: ['学习', '考试'], tone: '中性', commonConfusion: ['basically'] },
  });

  D('basic colour', {
    etymology: {
      origin: '英语派生：basic + colour',
      prefix: null,
      root: { text: 'colour', gloss: '颜色（英式拼写）' },
      suffix: null,
      history: [
        { label: 'colour', text: '颜色（英式拼写），是后来派生的基础。' },
        { label: 'basic colour', text: '基本色；基础色' },
      ],
      mnemonic: '词条用英式 colour。',
      note: '美式拼写是 color，本词条保持 colour。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Red is a basic colour on this simple chart.', chinese: '在这张简单图表上，红色是一种基本色。' },
    ],
    contexts: [
      { domain: '艺术', senseId: 'basic colour.s1', en: 'Children learn each basic colour before they mix paints.', zh: '孩子们先学每一种基本色，再调颜料。', structure: 'Children learn each  / basic colour /  before they mix paints.', grammar: '名词短语。', rationale: '图表上的主要颜色。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A basic colour is always invisible.', right: 'A basic colour is a main colour you can name.', reason: '基本色是能叫出名字的主要颜色，不是看不见。', rule: 'a basic colour。', special: '不要写成 basic color，除非另立词条。' },
    ],
    quiz: [
      { id: 'basic colour.q1', senseId: 'basic colour.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A main colour used to compare or mix others.', options: ['basic colour', 'basically', 'bassinet'], answer: 'basic colour', explain: 'basic colour：基本色；基础色' },
      { id: 'basic colour.q2', senseId: 'basic colour.s1', errorType: 'meaning', type: '词义', prompt: 'Red is a _____ on this simple chart.', options: ['basic colour', 'basically', 'bassinet'], answer: 'basic colour', explain: '空格需要 basic colour。' },
      { id: 'basic colour.q3', senseId: 'basic colour.s1', errorType: 'meaning', type: '易错', prompt: '基本色；基础色 应选哪一句？', options: ['A basic colour is a main colour you can name.', 'A basic colour is always invisible.', '词形或搭配不对。'], answer: 'A basic colour is a main colour you can name.', explain: '基本色是能叫出名字的主要颜色，不是看不见。' },
      { id: 'basic colour.q4', senseId: 'basic colour.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：基本色；基础色', options: ['basic colour', 'basically', 'bassinet'], answer: 'basic colour', explain: '中文义对应 basic colour。' },
    ],
    usage: { domains: ['艺术', '考试'], tone: '中性', commonConfusion: ['basic'] },
  });

  D('basically', {
    etymology: {
      origin: '英语派生：basic + -ally',
      prefix: null,
      root: { text: 'basic', gloss: '基本的' },
      suffix: { text: '-ally', gloss: '副词后缀（-ic 形容词常用）' },
      history: [
        { label: 'basic', text: '基本的，是后来派生的基础。' },
        { label: 'basically', text: '基本上；大体上' },
      ],
      mnemonic: '大体上如此，细节可以例外。',
      note: '口语里也用来起头，表示说重点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The plan is basically ready, though two dates may change.', chinese: '计划基本上准备好了，不过有两个日期可能改。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'basically.s1', en: 'She basically agreed, but she asked for a quieter room.', zh: '她大体上同意了，但要求一间更安静的房间。', structure: 'She  / basically /  agreed, but she asked for a quieter room.', grammar: '句子副词，可放在动词前。', rationale: '整体就绪，允许小改动。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He basic agreed with the idea.', right: 'He basically agreed with the idea.', reason: '修饰动词用 basically。', rule: 'basically + 动词或句子。', special: 'basic 是形容词。' },
    ],
    quiz: [
      { id: 'basically.q1', senseId: 'basically.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: In general, though not in every detail.', options: ['basically', 'basics', 'bat'], answer: 'basically', explain: 'basically：基本上；大体上' },
      { id: 'basically.q2', senseId: 'basically.s1', errorType: 'meaning', type: '词义', prompt: 'The plan is _____ ready, though two dates may change.', options: ['basically', 'basics', 'bat'], answer: 'basically', explain: '空格需要 basically。' },
      { id: 'basically.q3', senseId: 'basically.s1', errorType: 'grammar', type: '易错', prompt: '基本上；大体上 应选哪一句？', options: ['He basically agreed with the idea.', 'He basic agreed with the idea.', '词形或搭配不对。'], answer: 'He basically agreed with the idea.', explain: '修饰动词用 basically。' },
      { id: 'basically.q4', senseId: 'basically.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：基本上；大体上', options: ['basically', 'basics', 'bat'], answer: 'basically', explain: '中文义对应 basically。' },
    ],
    usage: { domains: ['口语', '考试'], tone: '中性', commonConfusion: ['basic'] },
  });

  D('basics', {
    etymology: {
      origin: '英语派生：basic + -s',
      prefix: null,
      root: { text: 'basic', gloss: '基本的' },
      suffix: { text: '-s', gloss: '名词复数' },
      history: [
        { label: 'basic', text: '基本的，是后来派生的基础。' },
        { label: 'basics', text: '基础；基本要领' },
      ],
      mnemonic: 'the basics 就是入门那一套。',
      note: 'the basics of something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Learn the basics of the software before you try the tricks.', chinese: '先学会软件的基本要领，再试那些技巧。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'basics.s1', en: 'The coach spent a week on the basics of passing.', zh: '教练花了一周讲传球的基础。', structure: 'The coach spent a week on the  / basics /  of passing.', grammar: '复数名词。', rationale: '使用软件前必须会的要点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He knew every basics detail without the start.', right: 'He still needs the basics.', reason: 'basics 是入门要点，不是跳过起点。', rule: 'the basics of。', special: '单数形容词是 basic。' },
    ],
    quiz: [
      { id: 'basics.q1', senseId: 'basics.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The most important facts or skills of a subject.', options: ['basics', 'basin', 'batch'], answer: 'basics', explain: 'basics：基础；基本要领' },
      { id: 'basics.q2', senseId: 'basics.s1', errorType: 'meaning', type: '词义', prompt: 'Learn the _____ of the software before you try the tricks.', options: ['basics', 'basin', 'batch'], answer: 'basics', explain: '空格需要 basics。' },
      { id: 'basics.q3', senseId: 'basics.s1', errorType: 'collocation', type: '易错', prompt: '基础；基本要领 应选哪一句？', options: ['He still needs the basics.', 'He knew every basics detail without the start.', '词形或搭配不对。'], answer: 'He still needs the basics.', explain: 'basics 是入门要点，不是跳过起点。' },
      { id: 'basics.q4', senseId: 'basics.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：基础；基本要领', options: ['basics', 'basin', 'batch'], answer: 'basics', explain: '中文义对应 basics。' },
    ],
    usage: { domains: ['学习', '考试'], tone: '中性', commonConfusion: ['basic'] },
  });

  D('basin', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'basin', text: '现行词形，词性：noun。' },
        { label: 'basin', text: '盆；盆地；流域' },
      ],
      mnemonic: '敞口的盆，或河流汇集的一片地。',
      note: 'washbasin 是洗手盆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She filled the basin with warm water and washed the cups.', chinese: '她在盆里倒上温水，洗了杯子。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'basin.s1', en: 'Farms in the river basin depend on the spring flood.', zh: '流域里的农场靠春汛。', structure: 'Farms in the river  / basin /  depend on the spring flood.', grammar: '可数名词。', rationale: '用来洗杯子的盆。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He cooked soup in a basin of the ocean shore only.', right: 'He washed the cups in a basin.', reason: '本句的 basin 是洗脸或洗涤用的盆。', rule: 'a basin of water；a river basin。', special: 'bucket 通常更深、有提手。' },
    ],
    quiz: [
      { id: 'basin.q1', senseId: 'basin.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A round open container; land drained by a river.', options: ['basin', 'basis', 'bath'], answer: 'basin', explain: 'basin：盆；盆地；流域' },
      { id: 'basin.q2', senseId: 'basin.s1', errorType: 'meaning', type: '词义', prompt: 'She filled the _____ with warm water and washed the cups.', options: ['basin', 'basis', 'bath'], answer: 'basin', explain: '空格需要 basin。' },
      { id: 'basin.q3', senseId: 'basin.s1', errorType: 'meaning', type: '易错', prompt: '盆；盆地；流域 应选哪一句？', options: ['He washed the cups in a basin.', 'He cooked soup in a basin of the ocean shore only.', '词形或搭配不对。'], answer: 'He washed the cups in a basin.', explain: '本句的 basin 是洗脸或洗涤用的盆。' },
      { id: 'basin.q4', senseId: 'basin.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：盆；盆地；流域', options: ['basin', 'basis', 'bath'], answer: 'basin', explain: '中文义对应 basin。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['bucket'] },
  });

  D('basis', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'basis', text: '现行词形，词性：noun。' },
        { label: 'basis', text: '基础；根据；基准' },
      ],
      mnemonic: '抽象的根据用 basis。',
      note: 'on the basis of 是高频搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Trust was the basis of their long partnership.', chinese: '信任是他们长期合作的基础。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'basis.s1', en: 'Staff are hired on the basis of a written test.', zh: '职员按笔试结果聘用。', structure: 'Staff are hired on the  / basis /  of a written test.', grammar: '名词，常不可数或作单数 basis。', rationale: '合作赖以成立的东西。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They chose him on the base of a coin.', right: 'They chose him on the basis of the test.', reason: '表示根据时用 on the basis of，不要用 on the base of。', rule: 'on the basis of。', special: 'base 更具体，是底座或基地。' },
    ],
    quiz: [
      { id: 'basis.q1', senseId: 'basis.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The facts or ideas that support something.', options: ['basis', 'basket', 'bathe'], answer: 'basis', explain: 'basis：基础；根据；基准' },
      { id: 'basis.q2', senseId: 'basis.s1', errorType: 'meaning', type: '词义', prompt: 'Trust was the _____ of their long partnership.', options: ['basis', 'basket', 'bathe'], answer: 'basis', explain: '空格需要 basis。' },
      { id: 'basis.q3', senseId: 'basis.s1', errorType: 'collocation', type: '易错', prompt: '基础；根据；基准 应选哪一句？', options: ['They chose him on the basis of the test.', 'They chose him on the base of a coin.', '词形或搭配不对。'], answer: 'They chose him on the basis of the test.', explain: '表示根据时用 on the basis of，不要用 on the base of。' },
      { id: 'basis.q4', senseId: 'basis.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：基础；根据；基准', options: ['basis', 'basket', 'bathe'], answer: 'basis', explain: '中文义对应 basis。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['base'] },
  });

  D('basket', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'basket', text: '现行词形，词性：noun。' },
        { label: 'basket', text: '篮子；筐' },
      ],
      mnemonic: '编织的轻容器。',
      note: 'a basket of。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She carried a basket of eggs from the market.', chinese: '她从市场提回一篮鸡蛋。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'basket.s1', en: 'The picnic basket was heavier than it looked.', zh: '野餐篮比看上去更重。', structure: 'The picnic  / basket /  was heavier than it looked.', grammar: '可数名词。', rationale: '装鸡蛋的筐。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He wore a basket on his foot.', right: 'He carried a basket in his hand.', reason: '篮子是手提的容器，不是穿在脚上的。', rule: 'a basket of。', special: 'bin 常指垃圾箱或储物箱。' },
    ],
    quiz: [
      { id: 'basket.q1', senseId: 'basket.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A light container woven from thin material.', options: ['basket', 'basketball', 'bathroom'], answer: 'basket', explain: 'basket：篮子；筐' },
      { id: 'basket.q2', senseId: 'basket.s1', errorType: 'meaning', type: '词义', prompt: 'She carried a _____ of eggs from the market.', options: ['basket', 'basketball', 'bathroom'], answer: 'basket', explain: '空格需要 basket。' },
      { id: 'basket.q3', senseId: 'basket.s1', errorType: 'collocation', type: '易错', prompt: '篮子；筐 应选哪一句？', options: ['He carried a basket in his hand.', 'He wore a basket on his foot.', '词形或搭配不对。'], answer: 'He carried a basket in his hand.', explain: '篮子是手提的容器，不是穿在脚上的。' },
      { id: 'basket.q4', senseId: 'basket.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：篮子；筐', options: ['basket', 'basketball', 'bathroom'], answer: 'basket', explain: '中文义对应 basket。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bin'] },
  });

  D('basketball', {
    etymology: {
      origin: '英语派生：basket + ball',
      prefix: null,
      root: { text: 'ball', gloss: '球' },
      suffix: null,
      history: [
        { label: 'ball', text: '球，是后来派生的基础。' },
        { label: 'basketball', text: '篮球；篮球运动' },
      ],
      mnemonic: '把球投进篮筐。',
      note: 'play basketball。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They play basketball every Thursday in the school gym.', chinese: '他们每周四在学校体育馆打篮球。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'basketball.s1', en: 'The basketball bounced off the rim and into her hands.', zh: '篮球撞到篮筐，弹进她手里。', structure: 'The  / basketball /  bounced off the rim and into her hands.', grammar: '运动名常不可数。', rationale: '体育馆里的这项运动。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He played the basketball with a bat.', right: 'He played basketball and shot at the hoop.', reason: '篮球不用球棒，运动名通常不加 the。', rule: 'play basketball。', special: 'baseball 用棒击球。' },
    ],
    quiz: [
      { id: 'basketball.q1', senseId: 'basketball.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A game in which teams throw a ball through a hoop.', options: ['basketball', 'bass', 'bathtub'], answer: 'basketball', explain: 'basketball：篮球；篮球运动' },
      { id: 'basketball.q2', senseId: 'basketball.s1', errorType: 'meaning', type: '词义', prompt: 'They play _____ every Thursday in the school gym.', options: ['basketball', 'bass', 'bathtub'], answer: 'basketball', explain: '空格需要 basketball。' },
      { id: 'basketball.q3', senseId: 'basketball.s1', errorType: 'collocation', type: '易错', prompt: '篮球；篮球运动 应选哪一句？', options: ['He played basketball and shot at the hoop.', 'He played the basketball with a bat.', '词形或搭配不对。'], answer: 'He played basketball and shot at the hoop.', explain: '篮球不用球棒，运动名通常不加 the。' },
      { id: 'basketball.q4', senseId: 'basketball.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：篮球；篮球运动', options: ['basketball', 'bass', 'bathtub'], answer: 'basketball', explain: '中文义对应 basketball。' },
    ],
    usage: { domains: ['体育', '考试'], tone: '中性', commonConfusion: ['baseball'] },
  });

  D('bass', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bass', text: '现行词形，词性：noun。' },
        { label: 'bass', text: '低音；低音歌手；鲈鱼' },
      ],
      mnemonic: '音乐里是低音，餐桌上可以是鲈鱼。',
      note: '读音有两种，音乐和鱼不要想当然。考试先看语境。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He sang the bass part while she took the higher line.', chinese: '他唱低音声部，她唱更高的旋律。' },
    ],
    contexts: [
      { domain: '音乐', senseId: 'bass.s1', en: 'The cook grilled a bass and served it with lemon.', zh: '厨师烤了一条鲈鱼，配柠檬端上来。', structure: 'The cook grilled a  / bass /  and served it with lemon.', grammar: '名词。', rationale: '声部里最低的那一路。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bass voice was the highest note in the song.', right: 'The bass singer took the lowest notes.', reason: 'bass 作为声部是低音，不是最高音。', rule: 'sing bass；a bass 可以是鱼。', special: 'base 是基础，拼写少一个 s。' },
    ],
    quiz: [
      { id: 'bass.q1', senseId: 'bass.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The lowest range of musical sound; also a food fish.', options: ['bass', 'bassinet', 'battalion'], answer: 'bass', explain: 'bass：低音；低音歌手；鲈鱼' },
      { id: 'bass.q2', senseId: 'bass.s1', errorType: 'meaning', type: '词义', prompt: 'He sang the _____ part while she took the higher line.', options: ['bass', 'bassinet', 'battalion'], answer: 'bass', explain: '空格需要 bass。' },
      { id: 'bass.q3', senseId: 'bass.s1', errorType: 'meaning', type: '易错', prompt: '低音；低音歌手；鲈鱼 应选哪一句？', options: ['The bass singer took the lowest notes.', 'The bass voice was the highest note in the song.', '词形或搭配不对。'], answer: 'The bass singer took the lowest notes.', explain: 'bass 作为声部是低音，不是最高音。' },
      { id: 'bass.q4', senseId: 'bass.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：低音；低音歌手；鲈鱼', options: ['bass', 'bassinet', 'battalion'], answer: 'bass', explain: '中文义对应 bass。' },
    ],
    usage: { domains: ['音乐', '考试'], tone: '中性', commonConfusion: ['base'] },
  });

  D('bassinet', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bassinet', text: '现行词形，词性：noun。' },
        { label: 'bassinet', text: '婴儿摇篮；带篷小床' },
      ],
      mnemonic: '给很小的婴儿睡的带篷小床。',
      note: '比 crib 更小、更轻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The baby slept in a bassinet beside the bed.', chinese: '婴儿睡在床边的小摇篮里。' },
    ],
    contexts: [
      { domain: '家庭', senseId: 'bassinet.s1', en: 'They wheeled the bassinet into a quieter room.', zh: '他们把婴儿小床推进更安静的房间。', structure: 'They wheeled the  / bassinet /  into a quieter room.', grammar: '可数名词。', rationale: '放在大床旁边的婴儿床。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bassinet was a desk for adults.', right: 'The bassinet was a small bed for the baby.', reason: '这是婴儿的小床，不是成人书桌。', rule: 'in a bassinet。', special: '普通床是 bed。' },
    ],
    quiz: [
      { id: 'bassinet.q1', senseId: 'bassinet.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A small bed for a baby.', options: ['bassinet', 'bat', 'batter'], answer: 'bassinet', explain: 'bassinet：婴儿摇篮；带篷小床' },
      { id: 'bassinet.q2', senseId: 'bassinet.s1', errorType: 'meaning', type: '词义', prompt: 'The baby slept in a _____ beside the bed.', options: ['bassinet', 'bat', 'batter'], answer: 'bassinet', explain: '空格需要 bassinet。' },
      { id: 'bassinet.q3', senseId: 'bassinet.s1', errorType: 'meaning', type: '易错', prompt: '婴儿摇篮；带篷小床 应选哪一句？', options: ['The bassinet was a small bed for the baby.', 'The bassinet was a desk for adults.', '词形或搭配不对。'], answer: 'The bassinet was a small bed for the baby.', explain: '这是婴儿的小床，不是成人书桌。' },
      { id: 'bassinet.q4', senseId: 'bassinet.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：婴儿摇篮；带篷小床', options: ['bassinet', 'bat', 'batter'], answer: 'bassinet', explain: '中文义对应 bassinet。' },
    ],
    usage: { domains: ['家庭', '考试'], tone: '中性', commonConfusion: ['bed'] },
  });

  D('bat', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bat', text: '现行词形，词性：noun。' },
        { label: 'bat', text: '蝙蝠；球棒；击球' },
      ],
      mnemonic: '夜里飞的动物，或打球的棒。',
      note: '动词 bat 是用棒击球。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bat flew out of the barn at dusk.', chinese: '黄昏时一只蝙蝠飞出谷仓。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'bat.s1', en: 'He gripped the bat and waited for the pitch.', zh: '他握紧球棒，等着投球。', structure: 'He gripped the  / bat /  and waited for the pitch.', grammar: '可数名词。', rationale: '黄昏飞出的动物。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bat sang like a bird in the nest all day.', right: 'A bat hunts insects and is not a songbird.', reason: '蝙蝠不是白天在巢里唱歌的鸟。', rule: 'a bat；swing a bat。', special: '看语境区分动物和球棒。' },
    ],
    quiz: [
      { id: 'bat.q1', senseId: 'bat.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A small flying animal; a stick for hitting a ball.', options: ['bat', 'batch', 'battery'], answer: 'bat', explain: 'bat：蝙蝠；球棒；击球' },
      { id: 'bat.q2', senseId: 'bat.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ flew out of the barn at dusk.', options: ['bat', 'batch', 'battery'], answer: 'bat', explain: '空格需要 bat。' },
      { id: 'bat.q3', senseId: 'bat.s1', errorType: 'meaning', type: '易错', prompt: '蝙蝠；球棒；击球 应选哪一句？', options: ['A bat hunts insects and is not a songbird.', 'The bat sang like a bird in the nest all day.', '词形或搭配不对。'], answer: 'A bat hunts insects and is not a songbird.', explain: '蝙蝠不是白天在巢里唱歌的鸟。' },
      { id: 'bat.q4', senseId: 'bat.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：蝙蝠；球棒；击球', options: ['bat', 'batch', 'battery'], answer: 'bat', explain: '中文义对应 bat。' },
    ],
    usage: { domains: ['体育', '考试'], tone: '中性', commonConfusion: ['bird'] },
  });

  D('batch', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'batch', text: '现行词形，词性：noun。' },
        { label: 'batch', text: '一批；一组；一炉' },
      ],
      mnemonic: '同一拨做出来或一起处理的东西。',
      note: 'a batch of。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The baker took the first batch of rolls out of the oven.', chinese: '面包师从烤箱里取出第一炉小面包。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'batch.s1', en: 'This batch of forms has three missing names.', zh: '这一批表格里有三个名字空着。', structure: 'This  / batch /  of forms has three missing names.', grammar: '可数名词。', rationale: '同一炉烤出来的面包。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He ate a batch one single crumb.', right: 'He baked a fresh batch of rolls.', reason: 'batch 是一整批，不是一粒碎屑。', rule: 'a batch of。', special: 'group 更宽，batch 强调同一轮。' },
    ],
    quiz: [
      { id: 'batch.q1', senseId: 'batch.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A group of things made or handled together.', options: ['batch', 'bath', 'battle'], answer: 'batch', explain: 'batch：一批；一组；一炉' },
      { id: 'batch.q2', senseId: 'batch.s1', errorType: 'meaning', type: '词义', prompt: 'The baker took the first _____ of rolls out of the oven.', options: ['batch', 'bath', 'battle'], answer: 'batch', explain: '空格需要 batch。' },
      { id: 'batch.q3', senseId: 'batch.s1', errorType: 'collocation', type: '易错', prompt: '一批；一组；一炉 应选哪一句？', options: ['He baked a fresh batch of rolls.', 'He ate a batch one single crumb.', '词形或搭配不对。'], answer: 'He baked a fresh batch of rolls.', explain: 'batch 是一整批，不是一粒碎屑。' },
      { id: 'batch.q4', senseId: 'batch.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：一批；一组；一炉', options: ['batch', 'bath', 'battle'], answer: 'batch', explain: '中文义对应 batch。' },
    ],
    usage: { domains: ['工作', '考试'], tone: '中性', commonConfusion: ['group'] },
  });

  D('bath', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bath', text: '现行词形，词性：noun。' },
        { label: 'bath', text: '洗浴；浴缸；洗澡水' },
      ],
      mnemonic: '在浴缸里洗。',
      note: '英式常用 have a bath。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The child had a bath and went to bed early.', chinese: '孩子洗了澡，很早就上了床。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bath.s1', en: 'She filled the bath with warm water.', zh: '她把浴缸放满温水。', structure: 'She filled the  / bath /  with warm water.', grammar: '可数名词，have a bath。', rationale: '睡前的洗浴。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He took a bath in the library.', right: 'He took a bath at home.', reason: 'have / take a bath 是洗澡。', rule: 'have a bath；run a bath。', special: 'bathe 是动词。' },
    ],
    quiz: [
      { id: 'bath.q1', senseId: 'bath.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Washing in a tub, or the tub itself.', options: ['bath', 'bathe', 'battlefield'], answer: 'bath', explain: 'bath：洗浴；浴缸；洗澡水' },
      { id: 'bath.q2', senseId: 'bath.s1', errorType: 'meaning', type: '词义', prompt: 'The child had a _____ and went to bed early.', options: ['bath', 'bathe', 'battlefield'], answer: 'bath', explain: '空格需要 bath。' },
      { id: 'bath.q3', senseId: 'bath.s1', errorType: 'collocation', type: '易错', prompt: '洗浴；浴缸；洗澡水 应选哪一句？', options: ['He took a bath at home.', 'He took a bath in the library.', '词形或搭配不对。'], answer: 'He took a bath at home.', explain: 'have / take a bath 是洗澡。' },
      { id: 'bath.q4', senseId: 'bath.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：洗浴；浴缸；洗澡水', options: ['bath', 'bathe', 'battlefield'], answer: 'bath', explain: '中文义对应 bath。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bathe'] },
  });

  D('bathe', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bathe', text: '现行词形，词性：verb。' },
        { label: 'bathe', text: '洗浴；游泳；（光）沐浴' },
      ],
      mnemonic: '用水洗，或让光铺满。',
      note: '英式也可表示游泳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They bathe the cut before they cover it.', chinese: '他们先清洗伤口，再包上。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bathe.s1', en: 'Moonlight seemed to bathe the empty square.', zh: '月光仿佛沐浴着空旷的广场。', structure: 'Moonlight seemed to  / bathe /  the empty square.', grammar: '及物动词。', rationale: '清洗伤口。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Please bathe a book in the sink for fun.', right: 'Please bathe the cut in clean water.', reason: 'bathe 的对象可以是伤口或身体，不是把书拿去洗着玩。', rule: 'bathe a wound；be bathed in light。', special: '名词洗澡常用 have a bath。' },
    ],
    quiz: [
      { id: 'bathe.q1', senseId: 'bathe.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To wash, or to swim.', options: ['bathe', 'bathroom', 'bay'], answer: 'bathe', explain: 'bathe：洗浴；游泳；（光）沐浴' },
      { id: 'bathe.q2', senseId: 'bathe.s1', errorType: 'meaning', type: '词义', prompt: 'They _____ the cut before they cover it.', options: ['bathe', 'bathroom', 'bay'], answer: 'bathe', explain: '空格需要 bathe。' },
      { id: 'bathe.q3', senseId: 'bathe.s1', errorType: 'meaning', type: '易错', prompt: '洗浴；游泳；（光）沐浴 应选哪一句？', options: ['Please bathe the cut in clean water.', 'Please bathe a book in the sink for fun.', '词形或搭配不对。'], answer: 'Please bathe the cut in clean water.', explain: 'bathe 的对象可以是伤口或身体，不是把书拿去洗着玩。' },
      { id: 'bathe.q4', senseId: 'bathe.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：洗浴；游泳；（光）沐浴', options: ['bathe', 'bathroom', 'bay'], answer: 'bathe', explain: '中文义对应 bathe。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['bath'] },
  });

  D('bathroom', {
    etymology: {
      origin: '英语派生：bath + room',
      prefix: null,
      root: { text: 'bath', gloss: '洗浴' },
      suffix: null,
      history: [
        { label: 'bath', text: '洗浴，是后来派生的基础。' },
        { label: 'bathroom', text: '浴室；卫生间' },
      ],
      mnemonic: '洗澡的那个房间。',
      note: '美式常指带厕所的卫生间。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bathroom is at the end of the hall.', chinese: '卫生间在走廊尽头。' },
    ],
    contexts: [
      { domain: '居住', senseId: 'bathroom.s1', en: 'He left his watch in the bathroom.', zh: '他把表忘在浴室里了。', structure: 'He left his watch in the  / bathroom / .', grammar: '可数名词。', rationale: '房子里的卫生间。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They cooked dinner in the bathroom.', right: 'They washed their hands in the bathroom.', reason: 'bathroom 是洗漱或如厕的房间，不是厨房。', rule: 'in the bathroom。', special: 'bedroom 是睡觉的房间。' },
    ],
    quiz: [
      { id: 'bathroom.q1', senseId: 'bathroom.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A room with a bath or toilet.', options: ['bathroom', 'bathtub', 'bazaar'], answer: 'bathroom', explain: 'bathroom：浴室；卫生间' },
      { id: 'bathroom.q2', senseId: 'bathroom.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ is at the end of the hall.', options: ['bathroom', 'bathtub', 'bazaar'], answer: 'bathroom', explain: '空格需要 bathroom。' },
      { id: 'bathroom.q3', senseId: 'bathroom.s1', errorType: 'meaning', type: '易错', prompt: '浴室；卫生间 应选哪一句？', options: ['They washed their hands in the bathroom.', 'They cooked dinner in the bathroom.', '词形或搭配不对。'], answer: 'They washed their hands in the bathroom.', explain: 'bathroom 是洗漱或如厕的房间，不是厨房。' },
      { id: 'bathroom.q4', senseId: 'bathroom.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：浴室；卫生间', options: ['bathroom', 'bathtub', 'bazaar'], answer: 'bathroom', explain: '中文义对应 bathroom。' },
    ],
    usage: { domains: ['居住', '考试'], tone: '中性', commonConfusion: ['bedroom'] },
  });

  D('bathtub', {
    etymology: {
      origin: '英语派生：bath + tub',
      prefix: null,
      root: { text: 'tub', gloss: '盆、缸' },
      suffix: null,
      history: [
        { label: 'tub', text: '盆、缸，是后来派生的基础。' },
        { label: 'bathtub', text: '浴缸；浴盆' },
      ],
      mnemonic: '用来洗澡的长盆。',
      note: '英式也说 bath。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bathtub was too small for two people.', chinese: '这只浴缸太小，坐不下两个人。' },
    ],
    contexts: [
      { domain: '居住', senseId: 'bathtub.s1', en: 'She cleaned the bathtub after the children left.', zh: '孩子们离开后她把浴缸擦干净。', structure: 'She cleaned the  / bathtub /  after the children left.', grammar: '可数名词。', rationale: '洗澡用的容器。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He sat in the bathtub on the dining table.', right: 'He sat in the bathtub.', reason: '浴缸是洗澡的容器，不放在餐桌上用。', rule: 'in the bathtub。', special: 'basin 通常更浅。' },
    ],
    quiz: [
      { id: 'bathtub.q1', senseId: 'bathtub.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A long container you fill with water for a bath.', options: ['bathtub', 'battalion', 'be'], answer: 'bathtub', explain: 'bathtub：浴缸；浴盆' },
      { id: 'bathtub.q2', senseId: 'bathtub.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ was too small for two people.', options: ['bathtub', 'battalion', 'be'], answer: 'bathtub', explain: '空格需要 bathtub。' },
      { id: 'bathtub.q3', senseId: 'bathtub.s1', errorType: 'meaning', type: '易错', prompt: '浴缸；浴盆 应选哪一句？', options: ['He sat in the bathtub.', 'He sat in the bathtub on the dining table.', '词形或搭配不对。'], answer: 'He sat in the bathtub.', explain: '浴缸是洗澡的容器，不放在餐桌上用。' },
      { id: 'bathtub.q4', senseId: 'bathtub.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：浴缸；浴盆', options: ['bathtub', 'battalion', 'be'], answer: 'bathtub', explain: '中文义对应 bathtub。' },
    ],
    usage: { domains: ['居住', '考试'], tone: '中性', commonConfusion: ['basin'] },
  });

  D('battalion', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'battalion', text: '现行词形，词性：noun。' },
        { label: 'battalion', text: '营；营部；一大群' },
      ],
      mnemonic: '军队编制里的营，也可比喻一大群。',
      note: '阅读词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The battalion moved at dawn and kept to the side road.', chinese: '这支营在黎明出发，沿着边路走。' },
    ],
    contexts: [
      { domain: '军事', senseId: 'battalion.s1', en: 'A battalion of questions met the new teacher.', zh: '新老师一来就碰上了一大堆问题。', structure: 'A  / battalion /  of questions met the new teacher.', grammar: '可数名词。', rationale: '一支部队单位。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'One battalion was a single child.', right: 'A battalion is a large body of soldiers.', reason: '营是很大的军队单位，不是一个孩子。', rule: 'a battalion of。', special: 'army 可以更大。' },
    ],
    quiz: [
      { id: 'battalion.q1', senseId: 'battalion.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A large group of soldiers.', options: ['battalion', 'batter', 'be able to'], answer: 'battalion', explain: 'battalion：营；营部；一大群' },
      { id: 'battalion.q2', senseId: 'battalion.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ moved at dawn and kept to the side road.', options: ['battalion', 'batter', 'be able to'], answer: 'battalion', explain: '空格需要 battalion。' },
      { id: 'battalion.q3', senseId: 'battalion.s1', errorType: 'meaning', type: '易错', prompt: '营；营部；一大群 应选哪一句？', options: ['A battalion is a large body of soldiers.', 'One battalion was a single child.', '词形或搭配不对。'], answer: 'A battalion is a large body of soldiers.', explain: '营是很大的军队单位，不是一个孩子。' },
      { id: 'battalion.q4', senseId: 'battalion.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：营；营部；一大群', options: ['battalion', 'batter', 'be able to'], answer: 'battalion', explain: '中文义对应 battalion。' },
    ],
    usage: { domains: ['军事', '考试'], tone: '中性', commonConfusion: ['army'] },
  });

  D('batter', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'batter', text: '现行词形，词性：verb。' },
        { label: 'batter', text: '连续猛击；击球手；面糊' },
      ],
      mnemonic: '一下一下地打；也可以是面糊或击球员。',
      note: '三个义项差很远，必须看搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Waves batter the old wall every winter.', chinese: '每年冬天海浪都连续冲击那堵旧墙。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'batter.s1', en: 'Stir the batter until it is smooth, then bake it.', zh: '把面糊搅匀再烤。', structure: 'Stir the  / batter /  until it is smooth, then bake it.', grammar: '动词，宾语是被击打的东西。', rationale: '海浪反复打在墙上。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He battered the cake with gentle whispers.', right: 'Waves batter the sea wall.', reason: 'batter 作动词是反复猛击，不是轻声细语。', rule: 'batter 连续打击；butter 是黄油。', special: '拼写只差一个字母。' },
    ],
    quiz: [
      { id: 'batter.q1', senseId: 'batter.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To hit again and again.', options: ['batter', 'battery', 'be apt'], answer: 'batter', explain: 'batter：连续猛击；击球手；面糊' },
      { id: 'batter.q2', senseId: 'batter.s1', errorType: 'meaning', type: '词义', prompt: 'Waves _____ the old wall every winter.', options: ['batter', 'battery', 'be apt'], answer: 'batter', explain: '空格需要 batter。' },
      { id: 'batter.q3', senseId: 'batter.s1', errorType: 'confusable', type: '易错', prompt: '连续猛击；击球手；面糊 应选哪一句？', options: ['Waves batter the sea wall.', 'He battered the cake with gentle whispers.', '词形或搭配不对。'], answer: 'Waves batter the sea wall.', explain: 'batter 作动词是反复猛击，不是轻声细语。' },
      { id: 'batter.q4', senseId: 'batter.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：连续猛击；击球手；面糊', options: ['batter', 'battery', 'be apt'], answer: 'batter', explain: '中文义对应 batter。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['butter'] },
  });

  D('battery', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'battery', text: '现行词形，词性：noun。' },
        { label: 'battery', text: '电池；一组；炮兵连' },
      ],
      mnemonic: '储存电的小装置。',
      note: 'a battery of tests 是一整套测试。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The clock stopped because the battery was flat.', chinese: '钟停了，因为电池没电了。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'battery.s1', en: 'She keeps a spare battery in the desk.', zh: '她在书桌里放着一块备用电池。', structure: 'She keeps a spare  / battery /  in the desk.', grammar: '可数名词。', rationale: '钟里的供电装置没电了。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The battery drank a cup of tea.', right: 'The battery ran out.', reason: '电池会耗尽，不会喝茶。', rule: 'a flat battery；change the battery。', special: 'battle 是战斗。' },
    ],
    quiz: [
      { id: 'battery.q1', senseId: 'battery.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A device that stores electricity.', options: ['battery', 'battle', 'be awful'], answer: 'battery', explain: 'battery：电池；一组；炮兵连' },
      { id: 'battery.q2', senseId: 'battery.s1', errorType: 'meaning', type: '词义', prompt: 'The clock stopped because the _____ was flat.', options: ['battery', 'battle', 'be awful'], answer: 'battery', explain: '空格需要 battery。' },
      { id: 'battery.q3', senseId: 'battery.s1', errorType: 'meaning', type: '易错', prompt: '电池；一组；炮兵连 应选哪一句？', options: ['The battery ran out.', 'The battery drank a cup of tea.', '词形或搭配不对。'], answer: 'The battery ran out.', explain: '电池会耗尽，不会喝茶。' },
      { id: 'battery.q4', senseId: 'battery.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：电池；一组；炮兵连', options: ['battery', 'battle', 'be awful'], answer: 'battery', explain: '中文义对应 battery。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['battle'] },
  });

  D('battle', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'battle', text: '现行词形，词性：noun。' },
        { label: 'battle', text: '战斗；斗争；搏斗' },
      ],
      mnemonic: '军队交火，或和个人困难搏斗。',
      note: 'a battle with / against。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The battle ended when both sides ran out of supplies.', chinese: '双方补给耗尽后，战斗结束了。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'battle.s1', en: 'She won a long battle with fear of speaking.', zh: '她打赢了与发言恐惧的长期斗争。', structure: 'She won a long  / battle /  with fear of speaking.', grammar: '可数名词。', rationale: '两军之间的战斗。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They had a battle of a quiet nap.', right: 'They fought a hard battle.', reason: 'battle 是激烈对抗，不是午睡。', rule: 'fight a battle；a battle against。', special: 'war 通常规模更大、时间更长。' },
    ],
    quiz: [
      { id: 'battle.q1', senseId: 'battle.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A fight between armies, or a struggle.', options: ['battle', 'battlefield', 'be born with'], answer: 'battle', explain: 'battle：战斗；斗争；搏斗' },
      { id: 'battle.q2', senseId: 'battle.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ ended when both sides ran out of supplies.', options: ['battle', 'battlefield', 'be born with'], answer: 'battle', explain: '空格需要 battle。' },
      { id: 'battle.q3', senseId: 'battle.s1', errorType: 'collocation', type: '易错', prompt: '战斗；斗争；搏斗 应选哪一句？', options: ['They fought a hard battle.', 'They had a battle of a quiet nap.', '词形或搭配不对。'], answer: 'They fought a hard battle.', explain: 'battle 是激烈对抗，不是午睡。' },
      { id: 'battle.q4', senseId: 'battle.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：战斗；斗争；搏斗', options: ['battle', 'battlefield', 'be born with'], answer: 'battle', explain: '中文义对应 battle。' },
    ],
    usage: { domains: ['历史', '考试'], tone: '中性', commonConfusion: ['war'] },
  });

  D('battlefield', {
    etymology: {
      origin: '英语派生：battle + field',
      prefix: null,
      root: { text: 'battle', gloss: '战斗' },
      suffix: null,
      history: [
        { label: 'battle', text: '战斗，是后来派生的基础。' },
        { label: 'battlefield', text: '战场；斗争领域' },
      ],
      mnemonic: '战斗的那片地。',
      note: '也可比喻竞争激烈的领域。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The old battlefield is quiet grass now.', chinese: '昔日的战场现在是安静的草地。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'battlefield.s1', en: 'The report called the market a battlefield for small shops.', zh: '报告把市场称作小店的战场。', structure: 'The report called the market a  / battlefield /  for small shops.', grammar: '可数名词。', rationale: '曾经交战的地点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They picnicked on the battlefield during the gunfire.', right: 'Visitors walk the old battlefield in peace.', reason: '作为词义，battlefield 是战斗发生的地方。', rule: 'on the battlefield。', special: 'battle 是战斗本身。' },
    ],
    quiz: [
      { id: 'battlefield.q1', senseId: 'battlefield.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The place where a battle is fought.', options: ['battlefield', 'bay', 'be enough'], answer: 'battlefield', explain: 'battlefield：战场；斗争领域' },
      { id: 'battlefield.q2', senseId: 'battlefield.s1', errorType: 'meaning', type: '词义', prompt: 'The old _____ is quiet grass now.', options: ['battlefield', 'bay', 'be enough'], answer: 'battlefield', explain: '空格需要 battlefield。' },
      { id: 'battlefield.q3', senseId: 'battlefield.s1', errorType: 'meaning', type: '易错', prompt: '战场；斗争领域 应选哪一句？', options: ['Visitors walk the old battlefield in peace.', 'They picnicked on the battlefield during the gunfire.', '词形或搭配不对。'], answer: 'Visitors walk the old battlefield in peace.', explain: '作为词义，battlefield 是战斗发生的地方。' },
      { id: 'battlefield.q4', senseId: 'battlefield.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：战场；斗争领域', options: ['battlefield', 'bay', 'be enough'], answer: 'battlefield', explain: '中文义对应 battlefield。' },
    ],
    usage: { domains: ['历史', '考试'], tone: '中性', commonConfusion: ['battle'] },
  });

  D('bay', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bay', text: '现行词形，词性：noun。' },
        { label: 'bay', text: '海湾；（常作）分隔间' },
      ],
      mnemonic: '海凹进去的一块。',
      note: '也可指建筑里的隔间，如 a loading bay。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Fishing boats rested in the bay until the wind dropped.', chinese: '渔船停在海湾里，直到风小下来。' },
    ],
    contexts: [
      { domain: '地理', senseId: 'bay.s1', en: 'From the cliff we could see the whole bay.', zh: '从悬崖上能看见整个海湾。', structure: 'From the cliff we could see the whole  / bay / .', grammar: '可数名词。', rationale: '三面环陆的海域。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bay was a mountain with no water.', right: 'The bay is a curve of the sea.', reason: '海湾三面是陆地，中间是海。', rule: 'in the bay。', special: 'beach 是岸边的沙滩。' },
    ],
    quiz: [
      { id: 'bay.q1', senseId: 'bay.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A part of the sea with land on three sides.', options: ['bay', 'bazaar', 'be familiar with'], answer: 'bay', explain: 'bay：海湾；（常作）分隔间' },
      { id: 'bay.q2', senseId: 'bay.s1', errorType: 'meaning', type: '词义', prompt: 'Fishing boats rested in the _____ until the wind dropped.', options: ['bay', 'bazaar', 'be familiar with'], answer: 'bay', explain: '空格需要 bay。' },
      { id: 'bay.q3', senseId: 'bay.s1', errorType: 'meaning', type: '易错', prompt: '海湾；（常作）分隔间 应选哪一句？', options: ['The bay is a curve of the sea.', 'The bay was a mountain with no water.', '词形或搭配不对。'], answer: 'The bay is a curve of the sea.', explain: '海湾三面是陆地，中间是海。' },
      { id: 'bay.q4', senseId: 'bay.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：海湾；（常作）分隔间', options: ['bay', 'bazaar', 'be familiar with'], answer: 'bay', explain: '中文义对应 bay。' },
    ],
    usage: { domains: ['地理', '考试'], tone: '中性', commonConfusion: ['beach'] },
  });

  D('bazaar', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bazaar', text: '现行词形，词性：noun。' },
        { label: 'bazaar', text: '集市；义卖市场' },
      ],
      mnemonic: '有许多摊位的市场，或慈善义卖。',
      note: 'charity bazaar。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The school bazaar sold cakes to raise money for books.', chinese: '学校义卖卖蛋糕，为买书筹款。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'bazaar.s1', en: 'Lamps and rugs filled the evening bazaar.', zh: '夜市里满是灯和地毯。', structure: 'Lamps and rugs filled the evening  / bazaar / .', grammar: '可数名词。', rationale: '为筹款办的售卖活动。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bazaar was a silent empty office.', right: 'The bazaar was crowded with stalls.', reason: '集市有摊位和人，不是空办公室。', rule: 'a school bazaar。', special: 'market 更一般。' },
    ],
    quiz: [
      { id: 'bazaar.q1', senseId: 'bazaar.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A market, or a sale held to raise money.', options: ['bazaar', 'be', 'be going to'], answer: 'bazaar', explain: 'bazaar：集市；义卖市场' },
      { id: 'bazaar.q2', senseId: 'bazaar.s1', errorType: 'meaning', type: '词义', prompt: 'The school _____ sold cakes to raise money for books.', options: ['bazaar', 'be', 'be going to'], answer: 'bazaar', explain: '空格需要 bazaar。' },
      { id: 'bazaar.q3', senseId: 'bazaar.s1', errorType: 'meaning', type: '易错', prompt: '集市；义卖市场 应选哪一句？', options: ['The bazaar was crowded with stalls.', 'The bazaar was a silent empty office.', '词形或搭配不对。'], answer: 'The bazaar was crowded with stalls.', explain: '集市有摊位和人，不是空办公室。' },
      { id: 'bazaar.q4', senseId: 'bazaar.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：集市；义卖市场', options: ['bazaar', 'be', 'be going to'], answer: 'bazaar', explain: '中文义对应 bazaar。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['market'] },
  });

  D('be', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'be', text: '现行词形，词性：verb。' },
        { label: 'be', text: '是；在；成为' },
      ],
      mnemonic: 'be 是最基本的系动词。',
      note: '原形出现在 to be、祈使句或情态动词后。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Please be quiet while the baby is asleep.', chinese: '宝宝睡着时请保持安静。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'be.s1', en: 'The facts may be hard, but they are still the facts.', zh: '事实也许难以接受，但它们仍然是事实。', structure: 'The facts may  / be /  hard, but they are still the facts.', grammar: '系动词，后面接表语。', rationale: '祈使句要求保持安静。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He be a teacher yesterday all day.', right: 'He was a teacher.', reason: 'be 有时态变化，过去是 was 或 were，不能用原形硬套过去。', rule: 'am / is / are / was / were / be / been。', special: '祈使句用原形：Be careful.' },
    ],
    quiz: [
      { id: 'be.q1', senseId: 'be.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To exist, or to have a quality.', options: ['be', 'be able to', 'be grateful'], answer: 'be', explain: 'be：是；在；成为' },
      { id: 'be.q2', senseId: 'be.s1', errorType: 'meaning', type: '词义', prompt: 'Please _____ quiet while the baby is asleep.', options: ['be', 'be able to', 'be grateful'], answer: 'be', explain: '空格需要 be。' },
      { id: 'be.q3', senseId: 'be.s1', errorType: 'grammar', type: '易错', prompt: '是；在；成为 应选哪一句？', options: ['He was a teacher.', 'He be a teacher yesterday all day.', '词形或搭配不对。'], answer: 'He was a teacher.', explain: 'be 有时态变化，过去是 was 或 were，不能用原形硬套过去。' },
      { id: 'be.q4', senseId: 'be.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：是；在；成为', options: ['be', 'be able to', 'be grateful'], answer: 'be', explain: '中文义对应 be。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['been'] },
  });

  D('be able to', {
    etymology: {
      origin: '英语短语：be + able + to',
      prefix: null,
      root: { text: 'able', gloss: '有能力的' },
      suffix: null,
      history: [
        { label: 'able', text: '有能力的，是后来派生的基础。' },
        { label: 'be able to', text: '能够；有能力做' },
      ],
      mnemonic: 'be able to 加动词原形。',
      note: '与 can 近义，但有更多时态。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She will be able to leave once the form is signed.', chinese: '表格签完字她就能离开。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'be able to.s1', en: 'Not every student will be able to finish in one hour.', zh: '并不是每个学生都能在一小时内完成。', structure: 'Not every student will  / be able to /  finish in one hour.', grammar: '半助动词结构，后接不定式。', rationale: '签字是离开的条件。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He can be able to swim.', right: 'He is able to swim.', reason: 'can 和 be able to 不要叠用。', rule: 'be able to + 原形。', special: '不要说 can be able to。' },
    ],
    quiz: [
      { id: 'be able to.q1', senseId: 'be able to.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To have the ability or chance to do something.', options: ['be able to', 'be apt', 'be in debt'], answer: 'be able to', explain: 'be able to：能够；有能力做' },
      { id: 'be able to.q2', senseId: 'be able to.s1', errorType: 'meaning', type: '词义', prompt: 'She will _____ leave once the form is signed.', options: ['be able to', 'be apt', 'be in debt'], answer: 'be able to', explain: '空格需要 be able to。' },
      { id: 'be able to.q3', senseId: 'be able to.s1', errorType: 'grammar', type: '易错', prompt: '能够；有能力做 应选哪一句？', options: ['He is able to swim.', 'He can be able to swim.', '词形或搭配不对。'], answer: 'He is able to swim.', explain: 'can 和 be able to 不要叠用。' },
      { id: 'be able to.q4', senseId: 'be able to.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：能够；有能力做', options: ['be able to', 'be apt', 'be in debt'], answer: 'be able to', explain: '中文义对应 be able to。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['can'] },
  });

  D('be apt', {
    etymology: {
      origin: '英语短语：be + apt',
      prefix: null,
      root: { text: 'apt', gloss: '易于、恰当' },
      suffix: null,
      history: [
        { label: 'apt', text: '易于、恰当，是后来派生的基础。' },
        { label: 'be apt', text: '易于……的；往往' },
      ],
      mnemonic: 'be apt to 表示容易发生。',
      note: 'to 后面是动词原形。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'New users may be apt to skip the long instructions.', chinese: '新用户往往容易跳过很长的说明。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'be apt.s1', en: 'Tired drivers can be apt to miss a small sign.', zh: '疲劳的司机容易错过小标志。', structure: 'Tired drivers can  / be apt /  to miss a small sign.', grammar: '形容词短语作表语。', rationale: '容易跳过说明。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They be apt of forgetting everything always.', right: 'They are apt to forget names.', reason: 'be apt to do，不用 of forgetting。', rule: 'be apt to + 原形。', special: 'be likely to 更常见。' },
    ],
    quiz: [
      { id: 'be apt.q1', senseId: 'be apt.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be likely to do something.', options: ['be apt', 'be awful', 'be inclined'], answer: 'be apt', explain: 'be apt：易于……的；往往' },
      { id: 'be apt.q2', senseId: 'be apt.s1', errorType: 'meaning', type: '词义', prompt: 'New users may _____ to skip the long instructions.', options: ['be apt', 'be awful', 'be inclined'], answer: 'be apt', explain: '空格需要 be apt。' },
      { id: 'be apt.q3', senseId: 'be apt.s1', errorType: 'grammar', type: '易错', prompt: '易于……的；往往 应选哪一句？', options: ['They are apt to forget names.', 'They be apt of forgetting everything always.', '词形或搭配不对。'], answer: 'They are apt to forget names.', explain: 'be apt to do，不用 of forgetting。' },
      { id: 'be apt.q4', senseId: 'be apt.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：易于……的；往往', options: ['be apt', 'be awful', 'be inclined'], answer: 'be apt', explain: '中文义对应 be apt。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['likely'] },
  });

  D('be awful', {
    etymology: {
      origin: '英语短语：be + awful',
      prefix: null,
      root: { text: 'awful', gloss: '极坏的' },
      suffix: null,
      history: [
        { label: 'awful', text: '极坏的，是后来派生的基础。' },
        { label: 'be awful', text: '糟透了；真差劲' },
      ],
      mnemonic: 'be awful 就是情况很差。',
      note: '口语感强。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Do not be awful to the new student on the first day.', chinese: '第一天不要对新同学很刻薄。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'be awful.s1', en: 'The road may be awful after the ice storm.', zh: '冰暴之后路况可能很糟。', structure: 'The road may  / be awful /  after the ice storm.', grammar: '系动词加形容词。', rationale: '待人态度很坏。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'It will be awful good if we miss the bus.', right: 'It will be awful if we miss the bus.', reason: 'awful 本身就是很糟，不要再加 good。', rule: 'be awful to somebody 表示待人很差。', special: 'awesome 在口语里常是极好，意思相反。' },
    ],
    quiz: [
      { id: 'be awful.q1', senseId: 'be awful.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be very bad or unpleasant.', options: ['be awful', 'be born with', 'be left'], answer: 'be awful', explain: 'be awful：糟透了；真差劲' },
      { id: 'be awful.q2', senseId: 'be awful.s1', errorType: 'meaning', type: '词义', prompt: 'Do not _____ to the new student on the first day.', options: ['be awful', 'be born with', 'be left'], answer: 'be awful', explain: '空格需要 be awful。' },
      { id: 'be awful.q3', senseId: 'be awful.s1', errorType: 'confusable', type: '易错', prompt: '糟透了；真差劲 应选哪一句？', options: ['It will be awful if we miss the bus.', 'It will be awful good if we miss the bus.', '词形或搭配不对。'], answer: 'It will be awful if we miss the bus.', explain: 'awful 本身就是很糟，不要再加 good。' },
      { id: 'be awful.q4', senseId: 'be awful.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：糟透了；真差劲', options: ['be awful', 'be born with', 'be left'], answer: 'be awful', explain: '中文义对应 be awful。' },
    ],
    usage: { domains: ['口语', '考试'], tone: '中性', commonConfusion: ['awesome'] },
  });

  D('be born with', {
    etymology: {
      origin: '英语短语：be born + with',
      prefix: null,
      root: { text: 'born', gloss: '出生' },
      suffix: null,
      history: [
        { label: 'born', text: '出生，是后来派生的基础。' },
        { label: 'be born with', text: '生来就有；天生具有' },
      ],
      mnemonic: '出生时就已经带着。',
      note: 'was / were born with。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Some babies may be born with a quiet nature.', chinese: '有些婴儿可能生来性情就安静。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'be born with.s1', en: 'A person may not be born with the skill and still learn it.', zh: '一个人也许并非生来就有这门手艺，但仍然可以学会。', structure: 'A person may not  / be born with /  the skill and still learn it.', grammar: '被动结构，with 接与生俱来的东西。', rationale: '性格从出生就有。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She born with a book in class yesterday.', right: 'She was born with a gift for music.', reason: '被动结构是 be born with，过去时要 was born。', rule: 'be born with + 名词。', special: '不要丢掉 be 的时态。' },
    ],
    quiz: [
      { id: 'be born with.q1', senseId: 'be born with.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To have a quality from birth.', options: ['be born with', 'be enough', 'be likely to'], answer: 'be born with', explain: 'be born with：生来就有；天生具有' },
      { id: 'be born with.q2', senseId: 'be born with.s1', errorType: 'meaning', type: '词义', prompt: 'Some babies may _____ a quiet nature.', options: ['be born with', 'be enough', 'be likely to'], answer: 'be born with', explain: '空格需要 be born with。' },
      { id: 'be born with.q3', senseId: 'be born with.s1', errorType: 'grammar', type: '易错', prompt: '生来就有；天生具有 应选哪一句？', options: ['She was born with a gift for music.', 'She born with a book in class yesterday.', '词形或搭配不对。'], answer: 'She was born with a gift for music.', explain: '被动结构是 be born with，过去时要 was born。' },
      { id: 'be born with.q4', senseId: 'be born with.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：生来就有；天生具有', options: ['be born with', 'be enough', 'be likely to'], answer: 'be born with', explain: '中文义对应 be born with。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['born'] },
  });

  D('be enough', {
    etymology: {
      origin: '英语短语：be + enough',
      prefix: null,
      root: { text: 'enough', gloss: '足够' },
      suffix: null,
      history: [
        { label: 'enough', text: '足够，是后来派生的基础。' },
        { label: 'be enough', text: '足够；够了' },
      ],
      mnemonic: '数量或程度达到需要。',
      note: 'enough for somebody / to do。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This soup should be enough for three people.', chinese: '这汤应该够三个人喝。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'be enough.s1', en: 'One example may be enough to show the rule.', zh: '一个例子也许就足以说明规则。', structure: 'One example may  / be enough /  to show the rule.', grammar: '系动词加 enough。', rationale: '份量满足三个人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Two pens be enough of to write.', right: 'Two pens will be enough.', reason: '用 will be enough，不要加 of to。', rule: 'be enough for / to。', special: 'enough 放在 be 后面。' },
    ],
    quiz: [
      { id: 'be enough.q1', senseId: 'be enough.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be as much as is needed.', options: ['be enough', 'be familiar with', 'be present at'], answer: 'be enough', explain: 'be enough：足够；够了' },
      { id: 'be enough.q2', senseId: 'be enough.s1', errorType: 'meaning', type: '词义', prompt: 'This soup should _____ for three people.', options: ['be enough', 'be familiar with', 'be present at'], answer: 'be enough', explain: '空格需要 be enough。' },
      { id: 'be enough.q3', senseId: 'be enough.s1', errorType: 'grammar', type: '易错', prompt: '足够；够了 应选哪一句？', options: ['Two pens will be enough.', 'Two pens be enough of to write.', '词形或搭配不对。'], answer: 'Two pens will be enough.', explain: '用 will be enough，不要加 of to。' },
      { id: 'be enough.q4', senseId: 'be enough.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：足够；够了', options: ['be enough', 'be familiar with', 'be present at'], answer: 'be enough', explain: '中文义对应 be enough。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['adequate'] },
  });

  D('be familiar with', {
    etymology: {
      origin: '英语短语：be familiar + with',
      prefix: null,
      root: { text: 'familiar', gloss: '熟悉的' },
      suffix: null,
      history: [
        { label: 'familiar', text: '熟悉的，是后来派生的基础。' },
        { label: 'be familiar with', text: '熟悉；了解' },
      ],
      mnemonic: 'with 后面是你了解的对象。',
      note: '物作主语可用 be familiar to somebody。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'You should be familiar with the map before the hike.', chinese: '徒步前你应该先熟悉地图。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'be familiar with.s1', en: 'A tutor should be familiar with this software before teaching it.', zh: '辅导者在教这套软件之前应该熟悉它。', structure: 'A tutor should  / be familiar with /  this software before teaching it.', grammar: '形容词短语，with 接对象。', rationale: '地图是需要事先了解的对象。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I am familiar to the rules of this lab.', right: 'I am familiar with the rules of this lab.', reason: '人作主语时用 familiar with，不是 familiar to。', rule: 'somebody is familiar with something。', special: 'family 是家庭，拼写不同。' },
    ],
    quiz: [
      { id: 'be familiar with.q1', senseId: 'be familiar with.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To know something well from experience.', options: ['be familiar with', 'be going to', 'be priced'], answer: 'be familiar with', explain: 'be familiar with：熟悉；了解' },
      { id: 'be familiar with.q2', senseId: 'be familiar with.s1', errorType: 'meaning', type: '词义', prompt: 'You should _____ the map before the hike.', options: ['be familiar with', 'be going to', 'be priced'], answer: 'be familiar with', explain: '空格需要 be familiar with。' },
      { id: 'be familiar with.q3', senseId: 'be familiar with.s1', errorType: 'collocation', type: '易错', prompt: '熟悉；了解 应选哪一句？', options: ['I am familiar with the rules of this lab.', 'I am familiar to the rules of this lab.', '词形或搭配不对。'], answer: 'I am familiar with the rules of this lab.', explain: '人作主语时用 familiar with，不是 familiar to。' },
      { id: 'be familiar with.q4', senseId: 'be familiar with.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：熟悉；了解', options: ['be familiar with', 'be going to', 'be priced'], answer: 'be familiar with', explain: '中文义对应 be familiar with。' },
    ],
    usage: { domains: ['学习', '考试'], tone: '中性', commonConfusion: ['family'] },
  });

  D('be going to', {
    etymology: {
      origin: '英语短语：be going to + 动词',
      prefix: null,
      root: { text: 'go', gloss: '前往，这里帮助表示将来' },
      suffix: null,
      history: [
        { label: 'go', text: '前往，这里帮助表示将来，是后来派生的基础。' },
        { label: 'be going to', text: '将要；打算' },
      ],
      mnemonic: '表示计划或眼看要发生。',
      note: 'to 后用原形。否定是 be not going to。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'You must be going to tell her tonight, or she will hear it from others.', chinese: '你今晚得打算告诉她，不然她会从别人那里听到。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'be going to.s1', en: 'She claims to be going to finish the form tonight.', zh: '她说她打算今晚把表格做完。', structure: 'She claims to  / be going to /  finish the form tonight.', grammar: '将来结构。', rationale: '今晚告知是已有的打算。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He be going to went home.', right: 'He is going to go home.', reason: 'be going to 后面接动词原形。', rule: 'be going to + 原形。', special: 'will 也可表将来，事先计划更常用 be going to。' },
    ],
    quiz: [
      { id: 'be going to.q1', senseId: 'be going to.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Used for a future plan or something about to happen.', options: ['be going to', 'be grateful', 'be seated'], answer: 'be going to', explain: 'be going to：将要；打算' },
      { id: 'be going to.q2', senseId: 'be going to.s1', errorType: 'meaning', type: '词义', prompt: 'You must _____ tell her tonight, or she will hear it from others.', options: ['be going to', 'be grateful', 'be seated'], answer: 'be going to', explain: '空格需要 be going to。' },
      { id: 'be going to.q3', senseId: 'be going to.s1', errorType: 'grammar', type: '易错', prompt: '将要；打算 应选哪一句？', options: ['He is going to go home.', 'He be going to went home.', '词形或搭配不对。'], answer: 'He is going to go home.', explain: 'be going to 后面接动词原形。' },
      { id: 'be going to.q4', senseId: 'be going to.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：将要；打算', options: ['be going to', 'be grateful', 'be seated'], answer: 'be going to', explain: '中文义对应 be going to。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['will'] },
  });

  D('be grateful', {
    etymology: {
      origin: '英语短语：be + grateful',
      prefix: null,
      root: { text: 'grateful', gloss: '感激的' },
      suffix: null,
      history: [
        { label: 'grateful', text: '感激的，是后来派生的基础。' },
        { label: 'be grateful', text: '感激；感谢' },
      ],
      mnemonic: 'be grateful for 事情，to 人。',
      note: '不要和 great 搞混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We should be grateful for clear instructions.', chinese: '我们应该感激清楚的说明。' },
    ],
    contexts: [
      { domain: '交际', senseId: 'be grateful.s1', en: 'We ought to be grateful to the neighbour who watched the dog.', zh: '我们应该感谢帮忙看狗的邻居。', structure: 'We ought to  / be grateful /  to the neighbour who watched the dog.', grammar: '系动词加形容词。', rationale: '因为说明清楚而感谢。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He is grateful with the gift money.', right: 'He is grateful for the gift.', reason: '原因用 for，对人用 to，不用 with。', rule: 'grateful for something；grateful to somebody。', special: 'great 是很棒。' },
    ],
    quiz: [
      { id: 'be grateful.q1', senseId: 'be grateful.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To feel or show thanks.', options: ['be grateful', 'be in debt', 'be told'], answer: 'be grateful', explain: 'be grateful：感激；感谢' },
      { id: 'be grateful.q2', senseId: 'be grateful.s1', errorType: 'meaning', type: '词义', prompt: 'We should _____ for clear instructions.', options: ['be grateful', 'be in debt', 'be told'], answer: 'be grateful', explain: '空格需要 be grateful。' },
      { id: 'be grateful.q3', senseId: 'be grateful.s1', errorType: 'collocation', type: '易错', prompt: '感激；感谢 应选哪一句？', options: ['He is grateful for the gift.', 'He is grateful with the gift money.', '词形或搭配不对。'], answer: 'He is grateful for the gift.', explain: '原因用 for，对人用 to，不用 with。' },
      { id: 'be grateful.q4', senseId: 'be grateful.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：感激；感谢', options: ['be grateful', 'be in debt', 'be told'], answer: 'be grateful', explain: '中文义对应 be grateful。' },
    ],
    usage: { domains: ['交际', '考试'], tone: '中性', commonConfusion: ['great'] },
  });

  D('be in debt', {
    etymology: {
      origin: '英语短语：be in + debt',
      prefix: null,
      root: { text: 'debt', gloss: '债务' },
      suffix: null,
      history: [
        { label: 'debt', text: '债务，是后来派生的基础。' },
        { label: 'be in debt', text: '负债；欠债' },
      ],
      mnemonic: '人在债务里面，就是欠钱。',
      note: 'debt 里的 b 不发音。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He does not want to be in debt after university.', chinese: '他不想大学毕业后还欠着债。' },
    ],
    contexts: [
      { domain: '金融', senseId: 'be in debt.s1', en: 'A new shop can be in debt if sales stay this low.', zh: '新店如果销售额一直这么低，就可能负债。', structure: 'A new shop can  / be in debt /  if sales stay this low.', grammar: '介词短语作表语。', rationale: '毕业后仍欠钱。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They are in debt with a free gift.', right: 'They are in debt to the bank.', reason: '欠某人用 in debt to，不是收到赠品。', rule: 'be in debt；in debt to somebody。', special: 'doubt 是怀疑。' },
    ],
    quiz: [
      { id: 'be in debt.q1', senseId: 'be in debt.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To owe money.', options: ['be in debt', 'be inclined', 'be willing'], answer: 'be in debt', explain: 'be in debt：负债；欠债' },
      { id: 'be in debt.q2', senseId: 'be in debt.s1', errorType: 'meaning', type: '词义', prompt: 'He does not want to _____ after university.', options: ['be in debt', 'be inclined', 'be willing'], answer: 'be in debt', explain: '空格需要 be in debt。' },
      { id: 'be in debt.q3', senseId: 'be in debt.s1', errorType: 'collocation', type: '易错', prompt: '负债；欠债 应选哪一句？', options: ['They are in debt to the bank.', 'They are in debt with a free gift.', '词形或搭配不对。'], answer: 'They are in debt to the bank.', explain: '欠某人用 in debt to，不是收到赠品。' },
      { id: 'be in debt.q4', senseId: 'be in debt.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：负债；欠债', options: ['be in debt', 'be inclined', 'be willing'], answer: 'be in debt', explain: '中文义对应 be in debt。' },
    ],
    usage: { domains: ['金融', '考试'], tone: '中性', commonConfusion: ['doubt'] },
  });

  D('be inclined', {
    etymology: {
      origin: '英语短语：be + inclined',
      prefix: null,
      root: { text: 'incline', gloss: '倾斜、倾向' },
      suffix: null,
      history: [
        { label: 'incline', text: '倾斜、倾向，是后来派生的基础。' },
        { label: 'be inclined', text: '倾向于；想要' },
      ],
      mnemonic: '心里朝那个做法倾斜。',
      note: 'to 后接原形。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I would be inclined to wait until morning.', chinese: '我倾向于等到早上。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'be inclined.s1', en: 'She may be inclined to trust people too quickly.', zh: '她也许会过快地信任别人。', structure: 'She may  / be inclined /  to trust people too quickly.', grammar: '形容词短语加不定式。', rationale: '更想选择等待。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They are inclined of waiting here.', right: 'They are inclined to wait here.', reason: 'be inclined to do，不用 of waiting。', rule: 'be inclined to + 原形。', special: 'decline 是下降或婉拒。' },
    ],
    quiz: [
      { id: 'be inclined.q1', senseId: 'be inclined.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To want to do something, or to be likely to.', options: ['be inclined', 'be left', 'beach'], answer: 'be inclined', explain: 'be inclined：倾向于；想要' },
      { id: 'be inclined.q2', senseId: 'be inclined.s1', errorType: 'meaning', type: '词义', prompt: 'I would _____ to wait until morning.', options: ['be inclined', 'be left', 'beach'], answer: 'be inclined', explain: '空格需要 be inclined。' },
      { id: 'be inclined.q3', senseId: 'be inclined.s1', errorType: 'grammar', type: '易错', prompt: '倾向于；想要 应选哪一句？', options: ['They are inclined to wait here.', 'They are inclined of waiting here.', '词形或搭配不对。'], answer: 'They are inclined to wait here.', explain: 'be inclined to do，不用 of waiting。' },
      { id: 'be inclined.q4', senseId: 'be inclined.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：倾向于；想要', options: ['be inclined', 'be left', 'beach'], answer: 'be inclined', explain: '中文义对应 be inclined。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['decline'] },
  });

  D('be left', {
    etymology: {
      origin: '英语短语：be + left',
      prefix: null,
      root: { text: 'leave', gloss: '留下' },
      suffix: null,
      history: [
        { label: 'leave', text: '留下，是后来派生的基础。' },
        { label: 'be left', text: '剩下；被留下' },
      ],
      mnemonic: '别人拿走之后还在的部分。',
      note: 'there is some food left 是近义结构。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Only two seats will be left after this sale.', chinese: '这次售出之后只剩两个位子。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'be left.s1', en: 'Nothing will be left in the pot if you are late.', zh: '你要是来晚了，锅里就什么也不剩了。', structure: 'Nothing will  / be left /  in the pot if you are late.', grammar: '被动结构，表示剩余。', rationale: '卖掉之后仍在的座位。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Three cakes left be on the plate yesterday.', right: 'Three cakes will be left on the plate.', reason: '剩下用 be left，时态要放在 be 上。', rule: 'will be left；there is … left。', special: 'leave 是动词原形。' },
    ],
    quiz: [
      { id: 'be left.q1', senseId: 'be left.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To remain after others are taken.', options: ['be left', 'be likely to', 'beacon'], answer: 'be left', explain: 'be left：剩下；被留下' },
      { id: 'be left.q2', senseId: 'be left.s1', errorType: 'meaning', type: '词义', prompt: 'Only two seats will _____ after this sale.', options: ['be left', 'be likely to', 'beacon'], answer: 'be left', explain: '空格需要 be left。' },
      { id: 'be left.q3', senseId: 'be left.s1', errorType: 'grammar', type: '易错', prompt: '剩下；被留下 应选哪一句？', options: ['Three cakes will be left on the plate.', 'Three cakes left be on the plate yesterday.', '词形或搭配不对。'], answer: 'Three cakes will be left on the plate.', explain: '剩下用 be left，时态要放在 be 上。' },
      { id: 'be left.q4', senseId: 'be left.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：剩下；被留下', options: ['be left', 'be likely to', 'beacon'], answer: 'be left', explain: '中文义对应 be left。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['leave'] },
  });

  D('be likely to', {
    etymology: {
      origin: '英语短语：be likely + to',
      prefix: null,
      root: { text: 'likely', gloss: '可能的' },
      suffix: null,
      history: [
        { label: 'likely', text: '可能的，是后来派生的基础。' },
        { label: 'be likely to', text: '很可能会' },
      ],
      mnemonic: '很可能发生。',
      note: 'it is likely that 是另一句型。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The road may be likely to flood after such rain.', chinese: '下这么大的雨，这条路很可能会积水。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'be likely to.s1', en: 'A late bus would be likely to arrive after noon.', zh: '晚到的公交很可能会过了中午才到。', structure: 'A late bus would  / be likely to /  arrive after noon.', grammar: '形容词短语加不定式。', rationale: '积水是很可能的结果。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He is likely of arriving soon.', right: 'He is likely to arrive soon.', reason: 'be likely to do，不用 of arriving。', rule: 'be likely to + 原形。', special: 'like 是喜欢或像。' },
    ],
    quiz: [
      { id: 'be likely to.q1', senseId: 'be likely to.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be probable.', options: ['be likely to', 'be present at', 'bead'], answer: 'be likely to', explain: 'be likely to：很可能会' },
      { id: 'be likely to.q2', senseId: 'be likely to.s1', errorType: 'meaning', type: '词义', prompt: 'The road may _____ flood after such rain.', options: ['be likely to', 'be present at', 'bead'], answer: 'be likely to', explain: '空格需要 be likely to。' },
      { id: 'be likely to.q3', senseId: 'be likely to.s1', errorType: 'grammar', type: '易错', prompt: '很可能会 应选哪一句？', options: ['He is likely to arrive soon.', 'He is likely of arriving soon.', '词形或搭配不对。'], answer: 'He is likely to arrive soon.', explain: 'be likely to do，不用 of arriving。' },
      { id: 'be likely to.q4', senseId: 'be likely to.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：很可能会', options: ['be likely to', 'be present at', 'bead'], answer: 'be likely to', explain: '中文义对应 be likely to。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['like'] },
  });

  D('be present at', {
    etymology: {
      origin: '英语短语：be present + at',
      prefix: null,
      root: { text: 'present', gloss: '在场的' },
      suffix: null,
      history: [
        { label: 'present', text: '在场的，是后来派生的基础。' },
        { label: 'be present at', text: '出席；在场' },
      ],
      mnemonic: '人在那个场合里。',
      note: 'present 还有礼物、现在的，要看搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'All members must be present at the vote.', chinese: '全体成员必须出席表决。' },
    ],
    contexts: [
      { domain: '正式', senseId: 'be present at.s1', en: 'Every speaker must be present at the meeting.', zh: '每位发言者都必须出席会议。', structure: 'Every speaker must  / be present at /  the meeting.', grammar: '形容词短语，at 接场合。', rationale: '表决时人必须在场。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He was present in the vote by phone only as absent.', right: 'He was present at the meeting.', reason: '出席用 present at，不要和 absent 拧在一起。', rule: 'be present at an event。', special: '礼物是 another meaning of present。' },
    ],
    quiz: [
      { id: 'be present at.q1', senseId: 'be present at.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be at an event.', options: ['be present at', 'be priced', 'beagle'], answer: 'be present at', explain: 'be present at：出席；在场' },
      { id: 'be present at.q2', senseId: 'be present at.s1', errorType: 'meaning', type: '词义', prompt: 'All members must _____ the vote.', options: ['be present at', 'be priced', 'beagle'], answer: 'be present at', explain: '空格需要 be present at。' },
      { id: 'be present at.q3', senseId: 'be present at.s1', errorType: 'collocation', type: '易错', prompt: '出席；在场 应选哪一句？', options: ['He was present at the meeting.', 'He was present in the vote by phone only as absent.', '词形或搭配不对。'], answer: 'He was present at the meeting.', explain: '出席用 present at，不要和 absent 拧在一起。' },
      { id: 'be present at.q4', senseId: 'be present at.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：出席；在场', options: ['be present at', 'be priced', 'beagle'], answer: 'be present at', explain: '中文义对应 be present at。' },
    ],
    usage: { domains: ['正式', '考试'], tone: '中性', commonConfusion: ['gift'] },
  });

  D('be priced', {
    etymology: {
      origin: '英语短语：be priced + at',
      prefix: null,
      root: { text: 'price', gloss: '价格' },
      suffix: null,
      history: [
        { label: 'price', text: '价格，是后来派生的基础。' },
        { label: 'be priced', text: '定价为；标价' },
      ],
      mnemonic: '标签上的数字用 priced at。',
      note: 'at 后面接数额。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The coat will be priced at fifty dollars.', chinese: '这件外套将定价为五十美元。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'be priced.s1', en: 'Student tickets will be priced at ten dollars.', zh: '学生票将定价为十美元。', structure: 'Student tickets will  / be priced /  at ten dollars.', grammar: '被动语态，at 接价格。', rationale: '商品被标上具体价钱。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The book is priced to fifty.', right: 'The book is priced at fifty dollars.', reason: '价格点用 at，不用 to。', rule: 'be priced at + 金额。', special: 'prize 是奖品。' },
    ],
    quiz: [
      { id: 'be priced.q1', senseId: 'be priced.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be given a particular price.', options: ['be priced', 'be seated', 'beak'], answer: 'be priced', explain: 'be priced：定价为；标价' },
      { id: 'be priced.q2', senseId: 'be priced.s1', errorType: 'meaning', type: '词义', prompt: 'The coat will _____ at fifty dollars.', options: ['be priced', 'be seated', 'beak'], answer: 'be priced', explain: '空格需要 be priced。' },
      { id: 'be priced.q3', senseId: 'be priced.s1', errorType: 'collocation', type: '易错', prompt: '定价为；标价 应选哪一句？', options: ['The book is priced at fifty dollars.', 'The book is priced to fifty.', '词形或搭配不对。'], answer: 'The book is priced at fifty dollars.', explain: '价格点用 at，不用 to。' },
      { id: 'be priced.q4', senseId: 'be priced.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：定价为；标价', options: ['be priced', 'be seated', 'beak'], answer: 'be priced', explain: '中文义对应 be priced。' },
    ],
    usage: { domains: ['商业', '考试'], tone: '中性', commonConfusion: ['prize'] },
  });

  D('be seated', {
    etymology: {
      origin: '英语短语：be + seated',
      prefix: null,
      root: { text: 'seat', gloss: '座位' },
      suffix: null,
      history: [
        { label: 'seat', text: '座位，是后来派生的基础。' },
        { label: 'be seated', text: '请坐；就座' },
      ],
      mnemonic: '正式的请坐。',
      note: '比 sit down 更正式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Please be seated before the talk begins.', chinese: '讲话开始前请就座。' },
    ],
    contexts: [
      { domain: '礼仪', senseId: 'be seated.s1', en: 'Guests should be seated near the window.', zh: '客人应就座于窗边。', structure: 'Guests should  / be seated /  near the window.', grammar: '被动形式表示就座。', rationale: '请听众坐下。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Be seated down on the floor now jump.', right: 'Please be seated.', reason: '就座说 be seated，不必再加 down 再加 jump。', rule: 'Please be seated.', special: '比 sit down 更正式。' },
    ],
    quiz: [
      { id: 'be seated.q1', senseId: 'be seated.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To sit down.', options: ['be seated', 'be told', 'beaker'], answer: 'be seated', explain: 'be seated：请坐；就座' },
      { id: 'be seated.q2', senseId: 'be seated.s1', errorType: 'meaning', type: '词义', prompt: 'Please _____ before the talk begins.', options: ['be seated', 'be told', 'beaker'], answer: 'be seated', explain: '空格需要 be seated。' },
      { id: 'be seated.q3', senseId: 'be seated.s1', errorType: 'meaning', type: '易错', prompt: '请坐；就座 应选哪一句？', options: ['Please be seated.', 'Be seated down on the floor now jump.', '词形或搭配不对。'], answer: 'Please be seated.', explain: '就座说 be seated，不必再加 down 再加 jump。' },
      { id: 'be seated.q4', senseId: 'be seated.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：请坐；就座', options: ['be seated', 'be told', 'beaker'], answer: 'be seated', explain: '中文义对应 be seated。' },
    ],
    usage: { domains: ['礼仪', '考试'], tone: '中性', commonConfusion: ['sit'] },
  });

  D('be told', {
    etymology: {
      origin: '英语短语：be + told',
      prefix: null,
      root: { text: 'tell', gloss: '告诉' },
      suffix: null,
      history: [
        { label: 'tell', text: '告诉，是后来派生的基础。' },
        { label: 'be told', text: '被告知；得知' },
      ],
      mnemonic: '别人把消息给你。',
      note: 'be told to do 是被吩咐去做。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Students will be told the result on Friday.', chinese: '学生将在星期五得知结果。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'be told.s1', en: 'Visitors will be told to wait outside the office.', zh: '来访者将被告知在办公室外等候。', structure: 'Visitors will  / be told /  to wait outside the office.', grammar: '被动语态。', rationale: '结果由别人告知学生。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He told be the news to himself only.', right: 'He was told the news.', reason: '被告知是 be told，不是把 be 放在 told 后面。', rule: 'be told + 名词 / to do。', special: '主动是 tell somebody。' },
    ],
    quiz: [
      { id: 'be told.q1', senseId: 'be told.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To receive information from someone.', options: ['be told', 'be willing', 'beam'], answer: 'be told', explain: 'be told：被告知；得知' },
      { id: 'be told.q2', senseId: 'be told.s1', errorType: 'meaning', type: '词义', prompt: 'Students will _____ the result on Friday.', options: ['be told', 'be willing', 'beam'], answer: 'be told', explain: '空格需要 be told。' },
      { id: 'be told.q3', senseId: 'be told.s1', errorType: 'grammar', type: '易错', prompt: '被告知；得知 应选哪一句？', options: ['He was told the news.', 'He told be the news to himself only.', '词形或搭配不对。'], answer: 'He was told the news.', explain: '被告知是 be told，不是把 be 放在 told 后面。' },
      { id: 'be told.q4', senseId: 'be told.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：被告知；得知', options: ['be told', 'be willing', 'beam'], answer: 'be told', explain: '中文义对应 be told。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['tell'] },
  });

  D('be willing', {
    etymology: {
      origin: '英语短语：be + willing',
      prefix: null,
      root: { text: 'willing', gloss: '愿意的' },
      suffix: null,
      history: [
        { label: 'willing', text: '愿意的，是后来派生的基础。' },
        { label: 'be willing', text: '愿意；乐意' },
      ],
      mnemonic: '心里答应去做。',
      note: 'to 后接原形。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She may be willing to share her notes.', chinese: '她也许愿意把笔记借你看。' },
    ],
    contexts: [
      { domain: '交际', senseId: 'be willing.s1', en: 'Few people would be willing to work on the holiday.', zh: '很少有人会愿意在假日上班。', structure: 'Few people would  / be willing /  to work on the holiday.', grammar: '形容词加不定式。', rationale: '愿意分享笔记。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'I am willing of helping if I must not.', right: 'I am willing to help.', reason: 'be willing to do，不用 of helping。', rule: 'be willing to + 原形。', special: 'will 是将来或意愿助动词，句型不同。' },
    ],
    quiz: [
      { id: 'be willing.q1', senseId: 'be willing.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be ready to do something.', options: ['be willing', 'beach', 'bean'], answer: 'be willing', explain: 'be willing：愿意；乐意' },
      { id: 'be willing.q2', senseId: 'be willing.s1', errorType: 'meaning', type: '词义', prompt: 'She may _____ to share her notes.', options: ['be willing', 'beach', 'bean'], answer: 'be willing', explain: '空格需要 be willing。' },
      { id: 'be willing.q3', senseId: 'be willing.s1', errorType: 'grammar', type: '易错', prompt: '愿意；乐意 应选哪一句？', options: ['I am willing to help.', 'I am willing of helping if I must not.', '词形或搭配不对。'], answer: 'I am willing to help.', explain: 'be willing to do，不用 of helping。' },
      { id: 'be willing.q4', senseId: 'be willing.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：愿意；乐意', options: ['be willing', 'beach', 'bean'], answer: 'be willing', explain: '中文义对应 be willing。' },
    ],
    usage: { domains: ['交际', '考试'], tone: '中性', commonConfusion: ['will'] },
  });

  D('beach', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beach', text: '现行词形，词性：noun。' },
        { label: 'beach', text: '海滩；沙滩' },
      ],
      mnemonic: '海旁边的沙或石岸。',
      note: 'on the beach。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We walked along the beach until the sun set.', chinese: '我们沿着海滩一直走到日落。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'beach.s1', en: 'The beach was covered with shells after the storm.', zh: '风暴过后海滩上满是贝壳。', structure: 'The  / beach /  was covered with shells after the storm.', grammar: '可数名词。', rationale: '海边可走的岸。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They swam on the beach in the sand only.', right: 'They swam near the beach.', reason: '海滩是岸，游泳在海边的水里。', rule: 'on the beach。', special: 'bay 是海湾的水面。' },
    ],
    quiz: [
      { id: 'beach.q1', senseId: 'beach.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: An area of sand or stones beside the sea.', options: ['beach', 'beacon', 'bear'], answer: 'beach', explain: 'beach：海滩；沙滩' },
      { id: 'beach.q2', senseId: 'beach.s1', errorType: 'meaning', type: '词义', prompt: 'We walked along the _____ until the sun set.', options: ['beach', 'beacon', 'bear'], answer: 'beach', explain: '空格需要 beach。' },
      { id: 'beach.q3', senseId: 'beach.s1', errorType: 'collocation', type: '易错', prompt: '海滩；沙滩 应选哪一句？', options: ['They swam near the beach.', 'They swam on the beach in the sand only.', '词形或搭配不对。'], answer: 'They swam near the beach.', explain: '海滩是岸，游泳在海边的水里。' },
      { id: 'beach.q4', senseId: 'beach.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：海滩；沙滩', options: ['beach', 'beacon', 'bear'], answer: 'beach', explain: '中文义对应 beach。' },
    ],
    usage: { domains: ['旅行', '考试'], tone: '中性', commonConfusion: ['bay'] },
  });

  D('beacon', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beacon', text: '现行词形，词性：noun。' },
        { label: 'beacon', text: '信标；灯塔；指路明灯' },
      ],
      mnemonic: '给人指路的光。',
      note: '可比喻榜样或希望。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The beacon on the cliff warned ships away from the rocks.', chinese: '悬崖上的信标警告船只远离礁石。' },
    ],
    contexts: [
      { domain: '航海', senseId: 'beacon.s1', en: 'Her clinic became a beacon for families who needed help.', zh: '她的诊所成了需要帮助的家庭的一盏明灯。', structure: 'Her clinic became a  / beacon /  for families who needed help.', grammar: '可数名词。', rationale: '给船警告和方向。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The beacon hid the road so nobody could see.', right: 'The beacon guided ships at night.', reason: '信标是用来指引的，不是把路藏起来。', rule: 'a beacon for。', special: '普通的 light 不一定有指引作用。' },
    ],
    quiz: [
      { id: 'beacon.q1', senseId: 'beacon.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A light or signal that guides people.', options: ['beacon', 'bead', 'beard'], answer: 'beacon', explain: 'beacon：信标；灯塔；指路明灯' },
      { id: 'beacon.q2', senseId: 'beacon.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ on the cliff warned ships away from the rocks.', options: ['beacon', 'bead', 'beard'], answer: 'beacon', explain: '空格需要 beacon。' },
      { id: 'beacon.q3', senseId: 'beacon.s1', errorType: 'meaning', type: '易错', prompt: '信标；灯塔；指路明灯 应选哪一句？', options: ['The beacon guided ships at night.', 'The beacon hid the road so nobody could see.', '词形或搭配不对。'], answer: 'The beacon guided ships at night.', explain: '信标是用来指引的，不是把路藏起来。' },
      { id: 'beacon.q4', senseId: 'beacon.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：信标；灯塔；指路明灯', options: ['beacon', 'bead', 'beard'], answer: 'beacon', explain: '中文义对应 beacon。' },
    ],
    usage: { domains: ['航海', '考试'], tone: '中性', commonConfusion: ['light'] },
  });

  D('bead', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bead', text: '现行词形，词性：noun。' },
        { label: 'bead', text: '珠子；（液）滴' },
      ],
      mnemonic: '小圆粒，汗也可以是一滴 bead。',
      note: 'a bead of sweat。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bead of sweat ran down his face in the heat.', chinese: '热得他脸上滚下一滴汗。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bead.s1', en: 'She threaded each bead onto a string.', zh: '她把每一颗珠子串到线上。', structure: 'She threaded each  / bead /  onto a string.', grammar: '可数名词。', rationale: '汗形成的一小滴。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'A bead was a large boat.', right: 'A bead is a small ball or a drop.', reason: 'bead 是小珠或液滴，不是船。', rule: 'a bead of。', special: 'bean 是豆子。' },
    ],
    quiz: [
      { id: 'bead.q1', senseId: 'bead.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A small ball of glass, or a drop of liquid.', options: ['bead', 'beagle', 'bearing'], answer: 'bead', explain: 'bead：珠子；（液）滴' },
      { id: 'bead.q2', senseId: 'bead.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ of sweat ran down his face in the heat.', options: ['bead', 'beagle', 'bearing'], answer: 'bead', explain: '空格需要 bead。' },
      { id: 'bead.q3', senseId: 'bead.s1', errorType: 'collocation', type: '易错', prompt: '珠子；（液）滴 应选哪一句？', options: ['A bead is a small ball or a drop.', 'A bead was a large boat.', '词形或搭配不对。'], answer: 'A bead is a small ball or a drop.', explain: 'bead 是小珠或液滴，不是船。' },
      { id: 'bead.q4', senseId: 'bead.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：珠子；（液）滴', options: ['bead', 'beagle', 'bearing'], answer: 'bead', explain: '中文义对应 bead。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bean'] },
  });

  D('beagle', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beagle', text: '现行词形，词性：noun。' },
        { label: 'beagle', text: '小猎犬；比格犬' },
      ],
      mnemonic: '短腿长耳的猎犬。',
      note: '可数，动物名词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Their beagle followed the scent across the yard.', chinese: '他们的比格犬跟着气味穿过院子。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'beagle.s1', en: 'The beagle slept with its long ears on the rug.', zh: '这只小猎犬把长耳朵摊在地毯上睡觉。', structure: 'The  / beagle /  slept with its long ears on the rug.', grammar: '可数名词。', rationale: '一种具体的犬。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A beagle is a kind of fish with long ears.', right: 'A beagle is a small hunting dog.', reason: '比格是狗，不是鱼。', rule: 'a beagle。', special: 'dog 是狗的总称。' },
    ],
    quiz: [
      { id: 'beagle.q1', senseId: 'beagle.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A small dog with short legs and long ears.', options: ['beagle', 'beak', 'beast'], answer: 'beagle', explain: 'beagle：小猎犬；比格犬' },
      { id: 'beagle.q2', senseId: 'beagle.s1', errorType: 'meaning', type: '词义', prompt: 'Their _____ followed the scent across the yard.', options: ['beagle', 'beak', 'beast'], answer: 'beagle', explain: '空格需要 beagle。' },
      { id: 'beagle.q3', senseId: 'beagle.s1', errorType: 'meaning', type: '易错', prompt: '小猎犬；比格犬 应选哪一句？', options: ['A beagle is a small hunting dog.', 'A beagle is a kind of fish with long ears.', '词形或搭配不对。'], answer: 'A beagle is a small hunting dog.', explain: '比格是狗，不是鱼。' },
      { id: 'beagle.q4', senseId: 'beagle.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：小猎犬；比格犬', options: ['beagle', 'beak', 'beast'], answer: 'beagle', explain: '中文义对应 beagle。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['dog'] },
  });

  D('beak', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beak', text: '现行词形，词性：noun。' },
        { label: 'beak', text: '鸟喙；鹰钩鼻' },
      ],
      mnemonic: '鸟的嘴。',
      note: '也可比喻钩状的鼻子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bird held a seed in its beak.', chinese: '鸟用喙衔着一粒种子。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'beak.s1', en: 'He joked about his own beak of a nose.', zh: '他拿自己的鹰钩鼻开玩笑。', structure: 'He joked about his own  / beak /  of a nose.', grammar: '可数名词。', rationale: '鸟用来衔种子的部分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The beak sang a song with lips.', right: 'The bird cracked the seed with its beak.', reason: '喙是鸟嘴的硬部分。', rule: 'in its beak。', special: '人的嘴通常说 mouth。' },
    ],
    quiz: [
      { id: 'beak.q1', senseId: 'beak.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A birds hard mouth.', options: ['beak', 'beaker', 'beat'], answer: 'beak', explain: 'beak：鸟喙；鹰钩鼻' },
      { id: 'beak.q2', senseId: 'beak.s1', errorType: 'meaning', type: '词义', prompt: 'The bird held a seed in its _____.', options: ['beak', 'beaker', 'beat'], answer: 'beak', explain: '空格需要 beak。' },
      { id: 'beak.q3', senseId: 'beak.s1', errorType: 'meaning', type: '易错', prompt: '鸟喙；鹰钩鼻 应选哪一句？', options: ['The bird cracked the seed with its beak.', 'The beak sang a song with lips.', '词形或搭配不对。'], answer: 'The bird cracked the seed with its beak.', explain: '喙是鸟嘴的硬部分。' },
      { id: 'beak.q4', senseId: 'beak.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：鸟喙；鹰钩鼻', options: ['beak', 'beaker', 'beat'], answer: 'beak', explain: '中文义对应 beak。' },
    ],
    usage: { domains: ['自然', '考试'], tone: '中性', commonConfusion: ['mouth'] },
  });

  D('beaker', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beaker', text: '现行词形，词性：noun。' },
        { label: 'beaker', text: '烧杯；大杯子' },
      ],
      mnemonic: '实验室里的大口杯。',
      note: '也可以是喝水的大杯。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The student poured the liquid into a beaker.', chinese: '学生把液体倒进烧杯。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'beaker.s1', en: 'He drank tea from a large beaker on the hike.', zh: '徒步时他用一只大杯子喝茶。', structure: 'He drank tea from a large  / beaker /  on the hike.', grammar: '可数名词。', rationale: '实验中盛液体的容器。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She wrote notes on a beaker of paper.', right: 'She measured the liquid in a beaker.', reason: '烧杯用来装液体，不是纸。', rule: 'in a beaker。', special: 'cup 更日常。' },
    ],
    quiz: [
      { id: 'beaker.q1', senseId: 'beaker.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A glass container used in a lab, or a large cup.', options: ['beaker', 'beam', 'beautiful'], answer: 'beaker', explain: 'beaker：烧杯；大杯子' },
      { id: 'beaker.q2', senseId: 'beaker.s1', errorType: 'meaning', type: '词义', prompt: 'The student poured the liquid into a _____.', options: ['beaker', 'beam', 'beautiful'], answer: 'beaker', explain: '空格需要 beaker。' },
      { id: 'beaker.q3', senseId: 'beaker.s1', errorType: 'meaning', type: '易错', prompt: '烧杯；大杯子 应选哪一句？', options: ['She measured the liquid in a beaker.', 'She wrote notes on a beaker of paper.', '词形或搭配不对。'], answer: 'She measured the liquid in a beaker.', explain: '烧杯用来装液体，不是纸。' },
      { id: 'beaker.q4', senseId: 'beaker.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：烧杯；大杯子', options: ['beaker', 'beam', 'beautiful'], answer: 'beaker', explain: '中文义对应 beaker。' },
    ],
    usage: { domains: ['科学', '考试'], tone: '中性', commonConfusion: ['cup'] },
  });

  D('beam', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beam', text: '现行词形，词性：noun。' },
        { label: 'beam', text: '横梁；光束；微笑；播送' },
      ],
      mnemonic: '梁、光、或灿烂一笑，都是一条亮或一条支撑。',
      note: '动词 beam 可以是微笑或播送。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A beam of light fell through the dusty window.', chinese: '一道光束穿过满是灰尘的窗户。' },
    ],
    contexts: [
      { domain: '建筑', senseId: 'beam.s1', en: 'The wooden beam above the door began to crack.', zh: '门上方的木梁开始开裂。', structure: 'The wooden  / beam /  above the door began to crack.', grammar: '可数名词。', rationale: '从窗户进来的一束光。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She beam a soup for dinner only.', right: 'A beam of light crossed the room.', reason: '作名词时 a beam of light 是光束。', rule: 'a beam of light；a wooden beam。', special: 'bean 是豆子，词尾是 n。' },
    ],
    quiz: [
      { id: 'beam.q1', senseId: 'beam.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A long supporting bar; a line of light.', options: ['beam', 'bean', 'beauty'], answer: 'beam', explain: 'beam：横梁；光束；微笑；播送' },
      { id: 'beam.q2', senseId: 'beam.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ of light fell through the dusty window.', options: ['beam', 'bean', 'beauty'], answer: 'beam', explain: '空格需要 beam。' },
      { id: 'beam.q3', senseId: 'beam.s1', errorType: 'confusable', type: '易错', prompt: '横梁；光束；微笑；播送 应选哪一句？', options: ['A beam of light crossed the room.', 'She beam a soup for dinner only.', '词形或搭配不对。'], answer: 'A beam of light crossed the room.', explain: '作名词时 a beam of light 是光束。' },
      { id: 'beam.q4', senseId: 'beam.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：横梁；光束；微笑；播送', options: ['beam', 'bean', 'beauty'], answer: 'beam', explain: '中文义对应 beam。' },
    ],
    usage: { domains: ['建筑', '考试'], tone: '中性', commonConfusion: ['bean'] },
  });

  D('bean', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bean', text: '现行词形，词性：noun。' },
        { label: 'bean', text: '豆；豆形果实' },
      ],
      mnemonic: '可以吃的种子。',
      note: 'coffee beans 是咖啡豆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She added one more bean to the soup and tasted it.', chinese: '她往汤里又加了一颗豆子，然后尝了尝。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'bean.s1', en: 'This bean needs to soak before you cook it.', zh: '这豆子煮之前要泡一泡。', structure: 'This  / bean /  needs to soak before you cook it.', grammar: '可数名词。', rationale: '放进汤里的豆子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He planted a bean in the computer.', right: 'He planted a bean in the garden.', reason: '豆子种在土里。', rule: 'a bean；beans。', special: 'beam 是梁或光束。' },
    ],
    quiz: [
      { id: 'bean.q1', senseId: 'bean.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A seed eaten as a vegetable.', options: ['bean', 'bear', 'because'], answer: 'bean', explain: 'bean：豆；豆形果实' },
      { id: 'bean.q2', senseId: 'bean.s1', errorType: 'meaning', type: '词义', prompt: 'She added one more _____ to the soup and tasted it.', options: ['bean', 'bear', 'because'], answer: 'bean', explain: '空格需要 bean。' },
      { id: 'bean.q3', senseId: 'bean.s1', errorType: 'confusable', type: '易错', prompt: '豆；豆形果实 应选哪一句？', options: ['He planted a bean in the garden.', 'He planted a bean in the computer.', '词形或搭配不对。'], answer: 'He planted a bean in the garden.', explain: '豆子种在土里。' },
      { id: 'bean.q4', senseId: 'bean.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：豆；豆形果实', options: ['bean', 'bear', 'because'], answer: 'bean', explain: '中文义对应 bean。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['beam'] },
  });

  D('bear', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bear', text: '现行词形，词性：noun。' },
        { label: 'bear', text: '熊；承受；生育；携带' },
      ],
      mnemonic: '动物是熊；动词是扛住或忍受。',
      note: '过去式是 bore，过去分词是 borne 或 born。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bear crossed the road and vanished into the trees.', chinese: '一只熊穿过公路，消失在树丛里。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'bear.s1', en: 'She could not bear the noise for another hour.', zh: '这噪音她再也忍受不了一个小时。', structure: 'She could not  / bear /  the noise for another hour.', grammar: '本句名词，指动物。', rationale: '路上出现的大型野生动物。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He bear the gift yesterday with no verb change.', right: 'She cannot bear the noise.', reason: '忍受用 can 或 could 加原形 bear，过去不能把 bear 当过去式。', rule: 'cannot bear + 名词 / to do。', special: 'beard 是胡须。' },
    ],
    quiz: [
      { id: 'bear.q1', senseId: 'bear.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A large wild animal; also to carry or endure.', options: ['bear', 'beard', 'because of'], answer: 'bear', explain: 'bear：熊；承受；生育；携带' },
      { id: 'bear.q2', senseId: 'bear.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ crossed the road and vanished into the trees.', options: ['bear', 'beard', 'because of'], answer: 'bear', explain: '空格需要 bear。' },
      { id: 'bear.q3', senseId: 'bear.s1', errorType: 'grammar', type: '易错', prompt: '熊；承受；生育；携带 应选哪一句？', options: ['She cannot bear the noise.', 'He bear the gift yesterday with no verb change.', '词形或搭配不对。'], answer: 'She cannot bear the noise.', explain: '忍受用 can 或 could 加原形 bear，过去不能把 bear 当过去式。' },
      { id: 'bear.q4', senseId: 'bear.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：熊；承受；生育；携带', options: ['bear', 'beard', 'because of'], answer: 'bear', explain: '中文义对应 bear。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['beard'] },
  });

  D('beard', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beard', text: '现行词形，词性：noun。' },
        { label: 'beard', text: '胡须（下巴上的）' },
      ],
      mnemonic: '下巴和两颊的毛。',
      note: '与 bear 只差一个字母。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He trimmed his beard before the photo.', chinese: '拍照前他修剪了胡须。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'beard.s1', en: 'A long beard made him look older than he was.', zh: '长胡须让他看起来比实际年龄更老。', structure: 'A long  / beard /  made him look older than he was.', grammar: '可数名词，常用单数指一个人的胡须。', rationale: '拍照前整理面部的毛发。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She combed her beard of the elbow.', right: 'He combed his beard.', reason: 'beard 是脸上的胡须。', rule: 'grow a beard；trim a beard。', special: 'bear 是熊或忍受。' },
    ],
    quiz: [
      { id: 'beard.q1', senseId: 'beard.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Hair growing on the chin and cheeks.', options: ['beard', 'bearing', 'beckon'], answer: 'beard', explain: 'beard：胡须（下巴上的）' },
      { id: 'beard.q2', senseId: 'beard.s1', errorType: 'meaning', type: '词义', prompt: 'He trimmed his _____ before the photo.', options: ['beard', 'bearing', 'beckon'], answer: 'beard', explain: '空格需要 beard。' },
      { id: 'beard.q3', senseId: 'beard.s1', errorType: 'confusable', type: '易错', prompt: '胡须（下巴上的） 应选哪一句？', options: ['He combed his beard.', 'She combed her beard of the elbow.', '词形或搭配不对。'], answer: 'He combed his beard.', explain: 'beard 是脸上的胡须。' },
      { id: 'beard.q4', senseId: 'beard.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：胡须（下巴上的）', options: ['beard', 'bearing', 'beckon'], answer: 'beard', explain: '中文义对应 beard。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bear'] },
  });

  D('bearing', {
    etymology: {
      origin: '英语派生：bear + -ing',
      prefix: null,
      root: { text: 'bear', gloss: '携带、承受，引申为举止或方位' },
      suffix: { text: '-ing', gloss: '名词后缀' },
      history: [
        { label: 'bear', text: '携带、承受，引申为举止或方位，是后来派生的基础。' },
        { label: 'bearing', text: '方位；轴承；举止' },
      ],
      mnemonic: 'bearing 可以是方向，也可以是给人的样子。',
      note: 'get your bearings 是辨明方向。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The scouts lost their bearing in the fog.', chinese: '侦察队员在雾里迷失了方位。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'bearing.s1', en: 'She has a calm bearing even when the room is noisy.', zh: '即使房间很吵，她的举止仍然平静。', structure: 'She has a calm  / bearing /  even when the room is noisy.', grammar: '名词。', rationale: '雾中无法判断方向。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bearing ate the map.', right: 'They checked their bearing with a compass.', reason: '方位不会吃地图。', rule: 'lose your bearing；a calm bearing。', special: '机械里 bearing 也指轴承。' },
    ],
    quiz: [
      { id: 'bearing.q1', senseId: 'bearing.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Direction or position; also manner.', options: ['bearing', 'beast', 'become'], answer: 'bearing', explain: 'bearing：方位；轴承；举止' },
      { id: 'bearing.q2', senseId: 'bearing.s1', errorType: 'meaning', type: '词义', prompt: 'The scouts lost their _____ in the fog.', options: ['bearing', 'beast', 'become'], answer: 'bearing', explain: '空格需要 bearing。' },
      { id: 'bearing.q3', senseId: 'bearing.s1', errorType: 'meaning', type: '易错', prompt: '方位；轴承；举止 应选哪一句？', options: ['They checked their bearing with a compass.', 'The bearing ate the map.', '词形或搭配不对。'], answer: 'They checked their bearing with a compass.', explain: '方位不会吃地图。' },
      { id: 'bearing.q4', senseId: 'bearing.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：方位；轴承；举止', options: ['bearing', 'beast', 'become'], answer: 'bearing', explain: '中文义对应 bearing。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['beard'] },
  });

  D('beast', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beast', text: '现行词形，词性：noun。' },
        { label: 'beast', text: '野兽；凶残的人' },
      ],
      mnemonic: '野生动物，或很残忍的人。',
      note: '语气比 animal 更重。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The story describes a beast that guards the cave.', chinese: '故事写一头守卫洞穴的野兽。' },
    ],
    contexts: [
      { domain: '文学', senseId: 'beast.s1', en: 'Calling him a beast was unfair and unkind.', zh: '叫他野兽是不公平也不厚道的。', structure: 'Calling him a  / beast /  was unfair and unkind.', grammar: '可数名词。', rationale: '故事里的野兽。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A beast is always a gentle teacup.', right: 'A beast in the tale is a wild animal.', reason: 'beast 不是茶杯。', rule: 'a beast。', special: 'animal 是中性词。' },
    ],
    quiz: [
      { id: 'beast.q1', senseId: 'beast.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A wild animal, or a cruel person.', options: ['beast', 'beat', 'bed'], answer: 'beast', explain: 'beast：野兽；凶残的人' },
      { id: 'beast.q2', senseId: 'beast.s1', errorType: 'meaning', type: '词义', prompt: 'The story describes a _____ that guards the cave.', options: ['beast', 'beat', 'bed'], answer: 'beast', explain: '空格需要 beast。' },
      { id: 'beast.q3', senseId: 'beast.s1', errorType: 'meaning', type: '易错', prompt: '野兽；凶残的人 应选哪一句？', options: ['A beast in the tale is a wild animal.', 'A beast is always a gentle teacup.', '词形或搭配不对。'], answer: 'A beast in the tale is a wild animal.', explain: 'beast 不是茶杯。' },
      { id: 'beast.q4', senseId: 'beast.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：野兽；凶残的人', options: ['beast', 'beat', 'bed'], answer: 'beast', explain: '中文义对应 beast。' },
    ],
    usage: { domains: ['文学', '考试'], tone: '中性', commonConfusion: ['animal'] },
  });

  D('beat', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beat', text: '现行词形，词性：verb。' },
        { label: 'beat', text: '打；跳动；击败；节拍' },
      ],
      mnemonic: '打、心跳、赢，都有一下一下的意思。',
      note: '过去式 beat，过去分词 beaten。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her heart began to beat faster as she waited for the result.', chinese: '等结果时她的心跳开始加快。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'beat.s1', en: 'Our team can beat them if we keep possession.', zh: '如果我们能控球，就能击败他们。', structure: 'Our team can  / beat /  them if we keep possession.', grammar: '动词，主语是 heart。', rationale: '心跳变快。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He beat the team to a drum of sleep.', right: 'He beat the drum in time.', reason: 'beat 可以是打拍子或打败，不要混成睡觉。', rule: 'beat somebody；a heart beats。', special: 'win 接比赛：win a match；beat 接对手。' },
    ],
    quiz: [
      { id: 'beat.q1', senseId: 'beat.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To hit; to defeat; a rhythm.', options: ['beat', 'beautiful', 'bedding'], answer: 'beat', explain: 'beat：打；跳动；击败；节拍' },
      { id: 'beat.q2', senseId: 'beat.s1', errorType: 'meaning', type: '词义', prompt: 'Her heart began to _____ faster as she waited for the result.', options: ['beat', 'beautiful', 'bedding'], answer: 'beat', explain: '空格需要 beat。' },
      { id: 'beat.q3', senseId: 'beat.s1', errorType: 'collocation', type: '易错', prompt: '打；跳动；击败；节拍 应选哪一句？', options: ['He beat the drum in time.', 'He beat the team to a drum of sleep.', '词形或搭配不对。'], answer: 'He beat the drum in time.', explain: 'beat 可以是打拍子或打败，不要混成睡觉。' },
      { id: 'beat.q4', senseId: 'beat.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：打；跳动；击败；节拍', options: ['beat', 'beautiful', 'bedding'], answer: 'beat', explain: '中文义对应 beat。' },
    ],
    usage: { domains: ['体育', '考试'], tone: '中性', commonConfusion: ['win'] },
  });

  D('beautiful', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beautiful', text: '现行词形，词性：adjective。' },
        { label: 'beautiful', text: '美丽的；美好的' },
      ],
      mnemonic: '看起来、听起来或经历起来令人愉悦。',
      note: '副词 beautifully。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The beautiful song made the noisy room go quiet.', chinese: '那首好听的歌让吵闹的房间安静下来。' },
    ],
    contexts: [
      { domain: '描写', senseId: 'beautiful.s1', en: 'They walked through a beautiful garden after the rain.', zh: '雨后他们走过一座美丽的花园。', structure: 'They walked through a  / beautiful /  garden after the rain.', grammar: '形容词作定语。', rationale: '歌曲好听。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'It was beautiful ugly and nobody looked.', right: 'The garden was beautiful after the rain.', reason: 'beautiful 是美，不能同时说 ugly 来定义它。', rule: 'beautiful + 名词。', special: 'pretty 程度往往 lighter。' },
    ],
    quiz: [
      { id: 'beautiful.q1', senseId: 'beautiful.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Very pleasing to see, hear, or experience.', options: ['beautiful', 'beauty', 'bedroom'], answer: 'beautiful', explain: 'beautiful：美丽的；美好的' },
      { id: 'beautiful.q2', senseId: 'beautiful.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ song made the noisy room go quiet.', options: ['beautiful', 'beauty', 'bedroom'], answer: 'beautiful', explain: '空格需要 beautiful。' },
      { id: 'beautiful.q3', senseId: 'beautiful.s1', errorType: 'meaning', type: '易错', prompt: '美丽的；美好的 应选哪一句？', options: ['The garden was beautiful after the rain.', 'It was beautiful ugly and nobody looked.', '词形或搭配不对。'], answer: 'The garden was beautiful after the rain.', explain: 'beautiful 是美，不能同时说 ugly 来定义它。' },
      { id: 'beautiful.q4', senseId: 'beautiful.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：美丽的；美好的', options: ['beautiful', 'beauty', 'bedroom'], answer: 'beautiful', explain: '中文义对应 beautiful。' },
    ],
    usage: { domains: ['描写', '考试'], tone: '中性', commonConfusion: ['pretty'] },
  });

  D('beauty', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beauty', text: '现行词形，词性：noun。' },
        { label: 'beauty', text: '美；美丽；美人' },
      ],
      mnemonic: '美这个品质，也可以指美人。',
      note: 'the beauty of something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The beauty of the lake is clearest at dawn.', chinese: '湖的美在黎明时最清楚。' },
    ],
    contexts: [
      { domain: '描写', senseId: 'beauty.s1', en: 'She talked about the beauty of a simple plan.', zh: '她谈到一个简单计划的妙处。', structure: 'She talked about the  / beauty /  of a simple plan.', grammar: '不可数名词居多。', rationale: '湖具有的美感。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He bought a beauty of noise and smoke.', right: 'He admired the beauty of the lake.', reason: 'beauty 是美，不是噪声。', rule: '名词 beauty；形容词 beautiful。', special: '不要用 beauty 直接修饰名词当形容词。' },
    ],
    quiz: [
      { id: 'beauty.q1', senseId: 'beauty.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The quality of being pleasing to look at.', options: ['beauty', 'because', 'bee'], answer: 'beauty', explain: 'beauty：美；美丽；美人' },
      { id: 'beauty.q2', senseId: 'beauty.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ of the lake is clearest at dawn.', options: ['beauty', 'because', 'bee'], answer: 'beauty', explain: '空格需要 beauty。' },
      { id: 'beauty.q3', senseId: 'beauty.s1', errorType: 'grammar', type: '易错', prompt: '美；美丽；美人 应选哪一句？', options: ['He admired the beauty of the lake.', 'He bought a beauty of noise and smoke.', '词形或搭配不对。'], answer: 'He admired the beauty of the lake.', explain: 'beauty 是美，不是噪声。' },
      { id: 'beauty.q4', senseId: 'beauty.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：美；美丽；美人', options: ['beauty', 'because', 'bee'], answer: 'beauty', explain: '中文义对应 beauty。' },
    ],
    usage: { domains: ['描写', '考试'], tone: '中性', commonConfusion: ['beautiful'] },
  });

  D('because', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'because', text: '现行词形，词性：conjunction。' },
        { label: 'because', text: '因为' },
      ],
      mnemonic: 'because 后面是一个完整原因句。',
      note: '不要和 because of 互换。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We stayed inside because the road was icy.', chinese: '因为路结了冰，我们留在室内。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'because.s1', en: 'She left early because the last bus was at nine.', zh: '她早走，因为末班车是九点。', structure: 'She left early  / because /  the last bus was at nine.', grammar: '从属连词。', rationale: '结冰是留在室内的原因。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Because of he was tired, he slept.', right: 'He slept because he was tired.', reason: 'because 接从句；because of 接名词。', rule: 'because + 从句。', special: 'because of + 名词。' },
    ],
    quiz: [
      { id: 'because.q1', senseId: 'because.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: For the reason that.', options: ['because', 'because of', 'beef'], answer: 'because', explain: 'because：因为' },
      { id: 'because.q2', senseId: 'because.s1', errorType: 'meaning', type: '词义', prompt: 'We stayed inside _____ the road was icy.', options: ['because', 'because of', 'beef'], answer: 'because', explain: '空格需要 because。' },
      { id: 'because.q3', senseId: 'because.s1', errorType: 'grammar', type: '易错', prompt: '因为 应选哪一句？', options: ['He slept because he was tired.', 'Because of he was tired, he slept.', '词形或搭配不对。'], answer: 'He slept because he was tired.', explain: 'because 接从句；because of 接名词。' },
      { id: 'because.q4', senseId: 'because.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：因为', options: ['because', 'because of', 'beef'], answer: 'because', explain: '中文义对应 because。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['because of'] },
  });

  D('because of', {
    etymology: {
      origin: '英语派生：because + of',
      prefix: null,
      root: { text: 'because', gloss: '因为' },
      suffix: null,
      history: [
        { label: 'because', text: '因为，是后来派生的基础。' },
        { label: 'because of', text: '因为；由于' },
      ],
      mnemonic: 'of 后面是名词性原因。',
      note: '与 because 的分工是考试重点。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The match stopped because of the rain.', chinese: '比赛因为下雨停了。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'because of.s1', en: 'The road is closed because of the flood.', zh: '道路由于洪水封闭。', structure: 'The road is closed  / because of /  the flood.', grammar: '介词短语表原因。', rationale: '雨是名词原因。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'We waited because of it rained.', right: 'We waited because of the rain.', reason: 'because of 后面接名词，不接完整从句。', rule: 'because of + 名词。', special: 'because + 主语 + 动词。' },
    ],
    quiz: [
      { id: 'because of.q1', senseId: 'because of.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: As a result of something.', options: ['because of', 'beckon', 'beehive'], answer: 'because of', explain: 'because of：因为；由于' },
      { id: 'because of.q2', senseId: 'because of.s1', errorType: 'meaning', type: '词义', prompt: 'The match stopped _____ the rain.', options: ['because of', 'beckon', 'beehive'], answer: 'because of', explain: '空格需要 because of。' },
      { id: 'because of.q3', senseId: 'because of.s1', errorType: 'grammar', type: '易错', prompt: '因为；由于 应选哪一句？', options: ['We waited because of the rain.', 'We waited because of it rained.', '词形或搭配不对。'], answer: 'We waited because of the rain.', explain: 'because of 后面接名词，不接完整从句。' },
      { id: 'because of.q4', senseId: 'because of.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：因为；由于', options: ['because of', 'beckon', 'beehive'], answer: 'because of', explain: '中文义对应 because of。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['because'] },
  });

  D('beckon', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beckon', text: '现行词形，词性：verb。' },
        { label: 'beckon', text: '招手示意；吸引' },
      ],
      mnemonic: '用手把人叫近。',
      note: 'beckon to somebody 也可以。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The guide began to beckon us toward the gate.', chinese: '向导开始招手，让我们走向大门。' },
    ],
    contexts: [
      { domain: '动作', senseId: 'beckon.s1', en: 'Warm light seemed to beckon from the window.', zh: '温暖的灯光仿佛从窗口招引人过去。', structure: 'Warm light seemed to  / beckon /  from the window.', grammar: '动词，宾语是被招呼的人。', rationale: '手势让人靠近大门。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He beckoned them away by pushing them down.', right: 'He beckoned them to come closer.', reason: 'beckon 是招呼过来，不是推倒。', rule: 'beckon somebody to do。', special: 'call 可以是喊，不一定用手。' },
    ],
    quiz: [
      { id: 'beckon.q1', senseId: 'beckon.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To signal with the hand to come nearer.', options: ['beckon', 'become', 'beer'], answer: 'beckon', explain: 'beckon：招手示意；吸引' },
      { id: 'beckon.q2', senseId: 'beckon.s1', errorType: 'meaning', type: '词义', prompt: 'The guide began to _____ us toward the gate.', options: ['beckon', 'become', 'beer'], answer: 'beckon', explain: '空格需要 beckon。' },
      { id: 'beckon.q3', senseId: 'beckon.s1', errorType: 'meaning', type: '易错', prompt: '招手示意；吸引 应选哪一句？', options: ['He beckoned them to come closer.', 'He beckoned them away by pushing them down.', '词形或搭配不对。'], answer: 'He beckoned them to come closer.', explain: 'beckon 是招呼过来，不是推倒。' },
      { id: 'beckon.q4', senseId: 'beckon.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：招手示意；吸引', options: ['beckon', 'become', 'beer'], answer: 'beckon', explain: '中文义对应 beckon。' },
    ],
    usage: { domains: ['动作', '考试'], tone: '中性', commonConfusion: ['call'] },
  });

  D('become', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'become', text: '现行词形，词性：verb。' },
        { label: 'become', text: '变成；成为；适合' },
      ],
      mnemonic: '从一种状态进入另一种。',
      note: 'become of 表示发生了什么，是另一搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The sky began to become dark before we reached home.', chinese: '我们到家之前，天开始变暗。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'become.s1', en: 'She wants to become a nurse after this course.', zh: '这门课之后她想成为护士。', structure: 'She wants to  / become /  a nurse after this course.', grammar: '系动词。', rationale: '天空转变成暗。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He became to a doctor yesterday.', right: 'He became a doctor.', reason: 'become 直接接名词，不加 to。', rule: 'become + 形容词或名词。', special: '不要说 become to。' },
    ],
    quiz: [
      { id: 'become.q1', senseId: 'become.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To change into, or to grow to be.', options: ['become', 'bed', 'beetle'], answer: 'become', explain: 'become：变成；成为；适合' },
      { id: 'become.q2', senseId: 'become.s1', errorType: 'meaning', type: '词义', prompt: 'The sky began to _____ dark before we reached home.', options: ['become', 'bed', 'beetle'], answer: 'become', explain: '空格需要 become。' },
      { id: 'become.q3', senseId: 'become.s1', errorType: 'grammar', type: '易错', prompt: '变成；成为；适合 应选哪一句？', options: ['He became a doctor.', 'He became to a doctor yesterday.', '词形或搭配不对。'], answer: 'He became a doctor.', explain: 'become 直接接名词，不加 to。' },
      { id: 'become.q4', senseId: 'become.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：变成；成为；适合', options: ['become', 'bed', 'beetle'], answer: 'become', explain: '中文义对应 become。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['get'] },
  });

  D('bed', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bed', text: '现行词形，词性：noun。' },
        { label: 'bed', text: '床；河床；花坛' },
      ],
      mnemonic: '睡觉的床，或河的底部。',
      note: 'in bed 常不带 the；on the bed 强调在床这个物体上。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He sat on the bed and took off his shoes.', chinese: '他坐在床上，脱掉鞋子。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bed.s1', en: 'The river bed was dry after months without rain.', zh: '几个月不下雨，河床干了。', structure: 'The river  / bed /  was dry after months without rain.', grammar: '可数名词。', rationale: '可以坐的那张床。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She slept on the bedroom only.', right: 'She slept in the bed.', reason: '睡觉的家具是 bed；in bed 表示躺在床上休息。', rule: 'in bed；go to bed。', special: 'bedroom 是房间。' },
    ],
    quiz: [
      { id: 'bed.q1', senseId: 'bed.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Furniture for sleeping; the bottom of a river.', options: ['bed', 'bedding', 'befall'], answer: 'bed', explain: 'bed：床；河床；花坛' },
      { id: 'bed.q2', senseId: 'bed.s1', errorType: 'meaning', type: '词义', prompt: 'He sat on the _____ and took off his shoes.', options: ['bed', 'bedding', 'befall'], answer: 'bed', explain: '空格需要 bed。' },
      { id: 'bed.q3', senseId: 'bed.s1', errorType: 'collocation', type: '易错', prompt: '床；河床；花坛 应选哪一句？', options: ['She slept in the bed.', 'She slept on the bedroom only.', '词形或搭配不对。'], answer: 'She slept in the bed.', explain: '睡觉的家具是 bed；in bed 表示躺在床上休息。' },
      { id: 'bed.q4', senseId: 'bed.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：床；河床；花坛', options: ['bed', 'bedding', 'befall'], answer: 'bed', explain: '中文义对应 bed。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bedroom'] },
  });

  D('bedding', {
    etymology: {
      origin: '英语派生：bed + -ing',
      prefix: null,
      root: { text: 'bed', gloss: '床' },
      suffix: { text: '-ing', gloss: '构成集合名词' },
      history: [
        { label: 'bed', text: '床，是后来派生的基础。' },
        { label: 'bedding', text: '床上用品；寝具' },
      ],
      mnemonic: '床上用的那一套。',
      note: '通常不可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They aired the bedding in the sun after the guests left.', chinese: '客人走后，他们把寝具拿去太阳下晾。' },
    ],
    contexts: [
      { domain: '居住', senseId: 'bedding.s1', en: 'Clean bedding makes a small room feel cared for.', zh: '干净的床上用品会让小屋显得有人打理。', structure: 'Clean  / bedding /  makes a small room feel cared for.', grammar: '不可数名词。', rationale: '晒的是床单被褥。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He bought a bedding of one shoe.', right: 'He bought new bedding for the bed.', reason: 'bedding 是床单被褥这一类。', rule: 'bedding 不可数。', special: 'bed 是床本身。' },
    ],
    quiz: [
      { id: 'bedding.q1', senseId: 'bedding.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Sheets, blankets, and covers for a bed.', options: ['bedding', 'bedroom', 'before'], answer: 'bedding', explain: 'bedding：床上用品；寝具' },
      { id: 'bedding.q2', senseId: 'bedding.s1', errorType: 'meaning', type: '词义', prompt: 'They aired the _____ in the sun after the guests left.', options: ['bedding', 'bedroom', 'before'], answer: 'bedding', explain: '空格需要 bedding。' },
      { id: 'bedding.q3', senseId: 'bedding.s1', errorType: 'meaning', type: '易错', prompt: '床上用品；寝具 应选哪一句？', options: ['He bought new bedding for the bed.', 'He bought a bedding of one shoe.', '词形或搭配不对。'], answer: 'He bought new bedding for the bed.', explain: 'bedding 是床单被褥这一类。' },
      { id: 'bedding.q4', senseId: 'bedding.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：床上用品；寝具', options: ['bedding', 'bedroom', 'before'], answer: 'bedding', explain: '中文义对应 bedding。' },
    ],
    usage: { domains: ['居住', '考试'], tone: '中性', commonConfusion: ['bed'] },
  });

  D('bedroom', {
    etymology: {
      origin: '英语派生：bed + room',
      prefix: null,
      root: { text: 'bed', gloss: '床' },
      suffix: null,
      history: [
        { label: 'bed', text: '床，是后来派生的基础。' },
        { label: 'bedroom', text: '卧室；睡房' },
      ],
      mnemonic: '放床的房间。',
      note: 'in the bedroom。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bedroom faces the garden and stays cool.', chinese: '卧室对着花园，比较凉快。' },
    ],
    contexts: [
      { domain: '居住', senseId: 'bedroom.s1', en: 'She reads in the bedroom before she sleeps.', zh: '她睡觉前在卧室里看书。', structure: 'She reads in the  / bedroom /  before she sleeps.', grammar: '可数名词。', rationale: '房子里用来睡的房间。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They cooked in the bedroom on the stove.', right: 'They sleep in the bedroom.', reason: '卧室是睡觉的房间。', rule: 'in the bedroom。', special: 'bathroom 是卫生间。' },
    ],
    quiz: [
      { id: 'bedroom.q1', senseId: 'bedroom.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A room where people sleep.', options: ['bedroom', 'bee', 'beforehand'], answer: 'bedroom', explain: 'bedroom：卧室；睡房' },
      { id: 'bedroom.q2', senseId: 'bedroom.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ faces the garden and stays cool.', options: ['bedroom', 'bee', 'beforehand'], answer: 'bedroom', explain: '空格需要 bedroom。' },
      { id: 'bedroom.q3', senseId: 'bedroom.s1', errorType: 'meaning', type: '易错', prompt: '卧室；睡房 应选哪一句？', options: ['They sleep in the bedroom.', 'They cooked in the bedroom on the stove.', '词形或搭配不对。'], answer: 'They sleep in the bedroom.', explain: '卧室是睡觉的房间。' },
      { id: 'bedroom.q4', senseId: 'bedroom.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：卧室；睡房', options: ['bedroom', 'bee', 'beforehand'], answer: 'bedroom', explain: '中文义对应 bedroom。' },
    ],
    usage: { domains: ['居住', '考试'], tone: '中性', commonConfusion: ['bathroom'] },
  });

  D('bee', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bee', text: '现行词形，词性：noun。' },
        { label: 'bee', text: '蜜蜂' },
      ],
      mnemonic: '会采蜜的昆虫。',
      note: '可数。as busy as a bee 是成语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bee landed on the flower and then flew to the hive.', chinese: '一只蜜蜂落在花上，又飞向蜂箱。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'bee.s1', en: 'She is not afraid of a bee if it is left alone.', zh: '如果不去招惹，她并不怕蜜蜂。', structure: 'She is not afraid of a  / bee /  if it is left alone.', grammar: '可数名词。', rationale: '飞向蜂箱的昆虫。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bee gave her a book.', right: 'A bee may sting if you hit it.', reason: '蜜蜂会蜇人，不会送书。', rule: 'a bee；bees。', special: 'beetle 是甲虫。' },
    ],
    quiz: [
      { id: 'bee.q1', senseId: 'bee.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A flying insect that makes honey.', options: ['bee', 'beef', 'beg'], answer: 'bee', explain: 'bee：蜜蜂' },
      { id: 'bee.q2', senseId: 'bee.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ landed on the flower and then flew to the hive.', options: ['bee', 'beef', 'beg'], answer: 'bee', explain: '空格需要 bee。' },
      { id: 'bee.q3', senseId: 'bee.s1', errorType: 'meaning', type: '易错', prompt: '蜜蜂 应选哪一句？', options: ['A bee may sting if you hit it.', 'The bee gave her a book.', '词形或搭配不对。'], answer: 'A bee may sting if you hit it.', explain: '蜜蜂会蜇人，不会送书。' },
      { id: 'bee.q4', senseId: 'bee.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：蜜蜂', options: ['bee', 'beef', 'beg'], answer: 'bee', explain: '中文义对应 bee。' },
    ],
    usage: { domains: ['自然', '考试'], tone: '中性', commonConfusion: ['beetle'] },
  });

  D('beef', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beef', text: '现行词形，词性：noun。' },
        { label: 'beef', text: '牛肉；抱怨' },
      ],
      mnemonic: '牛肉；口语里也可以是牢骚。',
      note: '不可数的肉；a beef 可以是一条抱怨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They cooked the beef slowly with onions.', chinese: '他们把牛肉和洋葱一起慢慢煮。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'beef.s1', en: 'His only beef was that the room had no lamp.', zh: '他唯一的抱怨是房间里没有灯。', structure: 'His only  / beef /  was that the room had no lamp.', grammar: '不可数名词。', rationale: '煮的是牛肉。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She ate a beef of paper.', right: 'She ate beef with rice.', reason: 'beef 作食物是牛肉。', rule: 'beef 作肉类不可数。', special: 'meat 是肉的总称。' },
    ],
    quiz: [
      { id: 'beef.q1', senseId: 'beef.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Meat from a cow; a complaint in informal use.', options: ['beef', 'beehive', 'begin'], answer: 'beef', explain: 'beef：牛肉；抱怨' },
      { id: 'beef.q2', senseId: 'beef.s1', errorType: 'meaning', type: '词义', prompt: 'They cooked the _____ slowly with onions.', options: ['beef', 'beehive', 'begin'], answer: 'beef', explain: '空格需要 beef。' },
      { id: 'beef.q3', senseId: 'beef.s1', errorType: 'meaning', type: '易错', prompt: '牛肉；抱怨 应选哪一句？', options: ['She ate beef with rice.', 'She ate a beef of paper.', '词形或搭配不对。'], answer: 'She ate beef with rice.', explain: 'beef 作食物是牛肉。' },
      { id: 'beef.q4', senseId: 'beef.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：牛肉；抱怨', options: ['beef', 'beehive', 'begin'], answer: 'beef', explain: '中文义对应 beef。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['meat'] },
  });

  D('beehive', {
    etymology: {
      origin: '英语派生：bee + hive',
      prefix: null,
      root: { text: 'hive', gloss: '蜂巢、蜂箱' },
      suffix: null,
      history: [
        { label: 'hive', text: '蜂巢、蜂箱，是后来派生的基础。' },
        { label: 'beehive', text: '蜂箱；蜂窝' },
      ],
      mnemonic: '蜜蜂的箱子。',
      note: '也可比喻拥挤热闹的地方。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Smoke calmed the bees when he opened the beehive.', chinese: '他打开蜂箱时，烟让蜜蜂安静下来。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'beehive.s1', en: 'Do not stand in front of the beehive.', zh: '不要站在蜂箱前面。', structure: 'Do not stand in front of the  / beehive / .', grammar: '可数名词。', rationale: '养蜂用的箱子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The beehive was a library desk.', right: 'The beehive houses the bees.', reason: '蜂箱是蜜蜂的住处。', rule: 'a beehive。', special: 'bee 是单只蜜蜂。' },
    ],
    quiz: [
      { id: 'beehive.q1', senseId: 'beehive.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A box where bees are kept.', options: ['beehive', 'beer', 'beginner'], answer: 'beehive', explain: 'beehive：蜂箱；蜂窝' },
      { id: 'beehive.q2', senseId: 'beehive.s1', errorType: 'meaning', type: '词义', prompt: 'Smoke calmed the bees when he opened the _____.', options: ['beehive', 'beer', 'beginner'], answer: 'beehive', explain: '空格需要 beehive。' },
      { id: 'beehive.q3', senseId: 'beehive.s1', errorType: 'meaning', type: '易错', prompt: '蜂箱；蜂窝 应选哪一句？', options: ['The beehive houses the bees.', 'The beehive was a library desk.', '词形或搭配不对。'], answer: 'The beehive houses the bees.', explain: '蜂箱是蜜蜂的住处。' },
      { id: 'beehive.q4', senseId: 'beehive.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：蜂箱；蜂窝', options: ['beehive', 'beer', 'beginner'], answer: 'beehive', explain: '中文义对应 beehive。' },
    ],
    usage: { domains: ['自然', '考试'], tone: '中性', commonConfusion: ['bee'] },
  });

  D('beer', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beer', text: '现行词形，词性：noun。' },
        { label: 'beer', text: '啤酒' },
      ],
      mnemonic: '用粮食酿的酒。',
      note: 'a beer 可以指一杯。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He ordered a small beer and a bowl of soup.', chinese: '他要了一小杯啤酒和一碗汤。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'beer.s1', en: 'This beer tastes bitter if it is too warm.', zh: '这啤酒太暖的话会发苦。', structure: 'This  / beer /  tastes bitter if it is too warm.', grammar: '名词，常不可数，一杯可数。', rationale: '点的饮品。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She drank a beer of milk.', right: 'She drank a glass of beer.', reason: 'beer 不是牛奶。', rule: 'a glass of beer。', special: 'wine 是葡萄酒。' },
    ],
    quiz: [
      { id: 'beer.q1', senseId: 'beer.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: An alcoholic drink made from grain.', options: ['beer', 'beetle', 'beginning'], answer: 'beer', explain: 'beer：啤酒' },
      { id: 'beer.q2', senseId: 'beer.s1', errorType: 'meaning', type: '词义', prompt: 'He ordered a small _____ and a bowl of soup.', options: ['beer', 'beetle', 'beginning'], answer: 'beer', explain: '空格需要 beer。' },
      { id: 'beer.q3', senseId: 'beer.s1', errorType: 'meaning', type: '易错', prompt: '啤酒 应选哪一句？', options: ['She drank a glass of beer.', 'She drank a beer of milk.', '词形或搭配不对。'], answer: 'She drank a glass of beer.', explain: 'beer 不是牛奶。' },
      { id: 'beer.q4', senseId: 'beer.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：啤酒', options: ['beer', 'beetle', 'beginning'], answer: 'beer', explain: '中文义对应 beer。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['wine'] },
  });

  D('beetle', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beetle', text: '现行词形，词性：noun。' },
        { label: 'beetle', text: '甲虫' },
      ],
      mnemonic: '背上有硬壳的昆虫。',
      note: '与 bee 不同。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A black beetle crossed the path and hid under a leaf.', chinese: '一只黑甲虫爬过小路，躲到叶子下面。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'beetle.s1', en: 'The child watched the beetle but did not touch it.', zh: '孩子看着甲虫，但没有去碰。', structure: 'The child watched the  / beetle /  but did not touch it.', grammar: '可数名词。', rationale: '爬过小路的昆虫。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The beetle made honey in a hive.', right: 'The beetle has a hard back.', reason: '酿蜜的是蜜蜂，不是甲虫。', rule: 'a beetle。', special: 'bee 会酿蜜。' },
    ],
    quiz: [
      { id: 'beetle.q1', senseId: 'beetle.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: An insect with a hard shell-like back.', options: ['beetle', 'befall', 'begrudge'], answer: 'beetle', explain: 'beetle：甲虫' },
      { id: 'beetle.q2', senseId: 'beetle.s1', errorType: 'meaning', type: '词义', prompt: 'A black _____ crossed the path and hid under a leaf.', options: ['beetle', 'befall', 'begrudge'], answer: 'beetle', explain: '空格需要 beetle。' },
      { id: 'beetle.q3', senseId: 'beetle.s1', errorType: 'meaning', type: '易错', prompt: '甲虫 应选哪一句？', options: ['The beetle has a hard back.', 'The beetle made honey in a hive.', '词形或搭配不对。'], answer: 'The beetle has a hard back.', explain: '酿蜜的是蜜蜂，不是甲虫。' },
      { id: 'beetle.q4', senseId: 'beetle.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：甲虫', options: ['beetle', 'befall', 'begrudge'], answer: 'beetle', explain: '中文义对应 beetle。' },
    ],
    usage: { domains: ['自然', '考试'], tone: '中性', commonConfusion: ['bee'] },
  });

  D('befall', {
    etymology: {
      origin: '英语派生：be- + fall',
      prefix: null,
      root: { text: 'fall', gloss: '落下、发生' },
      suffix: null,
      history: [
        { label: 'fall', text: '落下、发生，是后来派生的基础。' },
        { label: 'befall', text: '（不幸）降临；落到……头上' },
      ],
      mnemonic: '灾祸落下来。',
      note: '过去式 befell，分词 befallen。文学语体。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They feared what might befall the village if the river rose.', chinese: '他们担心河水上涨会给村子带来什么不幸。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'befall.s1', en: 'A sudden loss may befall the family in winter.', zh: '冬天一场突然的损失可能降临到这家人头上。', structure: 'A sudden loss may  / befall /  the family in winter.', grammar: '动词，主语常是不幸的事。', rationale: '河水上涨可能带来的坏事。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Good candy will befall the exam.', right: 'A storm may befall travellers.', reason: 'befall 多指不好的事发生在某人身上。', rule: 'befall somebody。', special: 'happen 更中性、更常用。' },
    ],
    quiz: [
      { id: 'befall.q1', senseId: 'befall.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To happen to someone, especially something bad.', options: ['befall', 'before', 'behalf'], answer: 'befall', explain: 'befall：（不幸）降临；落到……头上' },
      { id: 'befall.q2', senseId: 'befall.s1', errorType: 'meaning', type: '词义', prompt: 'They feared what might _____ the village if the river rose.', options: ['befall', 'before', 'behalf'], answer: 'befall', explain: '空格需要 befall。' },
      { id: 'befall.q3', senseId: 'befall.s1', errorType: 'meaning', type: '易错', prompt: '（不幸）降临；落到……头上 应选哪一句？', options: ['A storm may befall travellers.', 'Good candy will befall the exam.', '词形或搭配不对。'], answer: 'A storm may befall travellers.', explain: 'befall 多指不好的事发生在某人身上。' },
      { id: 'befall.q4', senseId: 'befall.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：（不幸）降临；落到……头上', options: ['befall', 'before', 'behalf'], answer: 'befall', explain: '中文义对应 befall。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['happen'] },
  });

  D('before', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'before', text: '现行词形，词性：preposition。' },
        { label: 'before', text: '在……之前；以前' },
      ],
      mnemonic: '时间或位置在前面。',
      note: '也可作连词接从句。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Please wash your hands before dinner.', chinese: '晚饭前请洗手。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'before.s1', en: 'She had left before the letter arrived.', zh: '信到之前她已经离开了。', structure: 'She had left  / before /  the letter arrived.', grammar: '介词。', rationale: '晚饭这个时间点之前。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He arrived before of the class.', right: 'He arrived before the class.', reason: 'before 直接接名词，不要加 of。', rule: 'before + 名词或从句。', special: 'ago 放在时间段后面：two days ago。' },
    ],
    quiz: [
      { id: 'before.q1', senseId: 'before.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Earlier than something.', options: ['before', 'beforehand', 'behave'], answer: 'before', explain: 'before：在……之前；以前' },
      { id: 'before.q2', senseId: 'before.s1', errorType: 'meaning', type: '词义', prompt: 'Please wash your hands _____ dinner.', options: ['before', 'beforehand', 'behave'], answer: 'before', explain: '空格需要 before。' },
      { id: 'before.q3', senseId: 'before.s1', errorType: 'grammar', type: '易错', prompt: '在……之前；以前 应选哪一句？', options: ['He arrived before the class.', 'He arrived before of the class.', '词形或搭配不对。'], answer: 'He arrived before the class.', explain: 'before 直接接名词，不要加 of。' },
      { id: 'before.q4', senseId: 'before.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：在……之前；以前', options: ['before', 'beforehand', 'behave'], answer: 'before', explain: '中文义对应 before。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['ago'] },
  });

  D('beforehand', {
    etymology: {
      origin: '英语派生：before + hand',
      prefix: null,
      root: { text: 'before', gloss: '在前' },
      suffix: null,
      history: [
        { label: 'before', text: '在前，是后来派生的基础。' },
        { label: 'beforehand', text: '预先；事先' },
      ],
      mnemonic: '提前把手头的事做好。',
      note: '放在句末很常见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Tell me beforehand if you cannot come.', chinese: '如果你不能来，请事先告诉我。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'beforehand.s1', en: 'She packed beforehand so the morning would be calm.', zh: '她事先收拾好，好让早晨从容。', structure: 'She packed  / beforehand /  so the morning would be calm.', grammar: '副词作状语。', rationale: '在不能来之前就通知。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He beforehanded the tickets.', right: 'He bought the tickets beforehand.', reason: 'beforehand 是副词，不能加 -ed 当动词。', rule: '副词 beforehand，不接宾语。', special: 'before 可以接宾语。' },
    ],
    quiz: [
      { id: 'beforehand.q1', senseId: 'beforehand.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Earlier than an event.', options: ['beforehand', 'beg', 'behaviour'], answer: 'beforehand', explain: 'beforehand：预先；事先' },
      { id: 'beforehand.q2', senseId: 'beforehand.s1', errorType: 'meaning', type: '词义', prompt: 'Tell me _____ if you cannot come.', options: ['beforehand', 'beg', 'behaviour'], answer: 'beforehand', explain: '空格需要 beforehand。' },
      { id: 'beforehand.q3', senseId: 'beforehand.s1', errorType: 'grammar', type: '易错', prompt: '预先；事先 应选哪一句？', options: ['He bought the tickets beforehand.', 'He beforehanded the tickets.', '词形或搭配不对。'], answer: 'He bought the tickets beforehand.', explain: 'beforehand 是副词，不能加 -ed 当动词。' },
      { id: 'beforehand.q4', senseId: 'beforehand.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：预先；事先', options: ['beforehand', 'beg', 'behaviour'], answer: 'beforehand', explain: '中文义对应 beforehand。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['before'] },
  });

  D('beg', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beg', text: '现行词形，词性：verb。' },
        { label: 'beg', text: '乞讨；恳求' },
      ],
      mnemonic: '低下去要，或非常恳切地请求。',
      note: 'beg for something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The man had to beg for food after he lost his job.', chinese: '失业后他只好乞讨食物。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'beg.s1', en: 'I beg you to listen before you decide.', zh: '我求你决定之前先听我说。', structure: 'I  / beg /  you to listen before you decide.', grammar: '动词，for 接所要的东西。', rationale: '要的是食物。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She begged for to a coin of silence.', right: 'She begged for a coin.', reason: 'beg for + 名词；beg somebody to do。', rule: 'beg for；beg somebody to do。', special: 'ask 语气更轻。' },
    ],
    quiz: [
      { id: 'beg.q1', senseId: 'beg.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To ask for money or food, or to ask earnestly.', options: ['beg', 'begin', 'behind'], answer: 'beg', explain: 'beg：乞讨；恳求' },
      { id: 'beg.q2', senseId: 'beg.s1', errorType: 'meaning', type: '词义', prompt: 'The man had to _____ for food after he lost his job.', options: ['beg', 'begin', 'behind'], answer: 'beg', explain: '空格需要 beg。' },
      { id: 'beg.q3', senseId: 'beg.s1', errorType: 'collocation', type: '易错', prompt: '乞讨；恳求 应选哪一句？', options: ['She begged for a coin.', 'She begged for to a coin of silence.', '词形或搭配不对。'], answer: 'She begged for a coin.', explain: 'beg for + 名词；beg somebody to do。' },
      { id: 'beg.q4', senseId: 'beg.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：乞讨；恳求', options: ['beg', 'begin', 'behind'], answer: 'beg', explain: '中文义对应 beg。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['ask'] },
  });

  D('begin', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'begin', text: '现行词形，词性：verb。' },
        { label: 'begin', text: '开始' },
      ],
      mnemonic: '一件事的起点。',
      note: 'begin to do 或 begin doing。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We will begin the lesson when everyone is seated.', chinese: '大家都坐下后我们就开始上课。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'begin.s1', en: 'Clouds began to gather, and then the rain would begin to fall.', zh: '云开始聚集，接着雨就要开始下了。', structure: 'Clouds began to gather, and then the rain would  / begin /  to fall.', grammar: '及物动词。', rationale: '课程从大家坐定开始。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They begin to started the work.', right: 'They began the work.', reason: 'begin 的过去式是 began，不要 begin to started。', rule: 'begin to do / doing。过去 began。', special: 'start 词义接近。' },
    ],
    quiz: [
      { id: 'begin.q1', senseId: 'begin.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To start doing something.', options: ['begin', 'beginner', 'beige'], answer: 'begin', explain: 'begin：开始' },
      { id: 'begin.q2', senseId: 'begin.s1', errorType: 'meaning', type: '词义', prompt: 'We will _____ the lesson when everyone is seated.', options: ['begin', 'beginner', 'beige'], answer: 'begin', explain: '空格需要 begin。' },
      { id: 'begin.q3', senseId: 'begin.s1', errorType: 'grammar', type: '易错', prompt: '开始 应选哪一句？', options: ['They began the work.', 'They begin to started the work.', '词形或搭配不对。'], answer: 'They began the work.', explain: 'begin 的过去式是 began，不要 begin to started。' },
      { id: 'begin.q4', senseId: 'begin.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：开始', options: ['begin', 'beginner', 'beige'], answer: 'begin', explain: '中文义对应 begin。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['start'] },
  });

  D('beginner', {
    etymology: {
      origin: '英语派生：begin + -er',
      prefix: null,
      root: { text: 'begin', gloss: '开始' },
      suffix: { text: '-er', gloss: '表示人' },
      history: [
        { label: 'begin', text: '开始，是后来派生的基础。' },
        { label: 'beginner', text: '初学者；新手' },
      ],
      mnemonic: '刚刚开始的人。',
      note: 'beginner class。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This class is for a beginner who has never played before.', chinese: '这个班是给从没打过的初学者的。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'beginner.s1', en: 'Every beginner needs a patient teacher.', zh: '每个新手都需要有耐心的老师。', structure: 'Every  / beginner /  needs a patient teacher.', grammar: '可数名词。', rationale: '没有基础的学习者。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'A beginner taught the advanced course alone.', right: 'A beginner still needs the basic steps.', reason: '初学者还在学基础。', rule: 'a beginner。', special: 'beginning 是开始这件事。' },
    ],
    quiz: [
      { id: 'beginner.q1', senseId: 'beginner.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A person just starting to learn.', options: ['beginner', 'beginning', 'being'], answer: 'beginner', explain: 'beginner：初学者；新手' },
      { id: 'beginner.q2', senseId: 'beginner.s1', errorType: 'meaning', type: '词义', prompt: 'This class is for a _____ who has never played before.', options: ['beginner', 'beginning', 'being'], answer: 'beginner', explain: '空格需要 beginner。' },
      { id: 'beginner.q3', senseId: 'beginner.s1', errorType: 'confusable', type: '易错', prompt: '初学者；新手 应选哪一句？', options: ['A beginner still needs the basic steps.', 'A beginner taught the advanced course alone.', '词形或搭配不对。'], answer: 'A beginner still needs the basic steps.', explain: '初学者还在学基础。' },
      { id: 'beginner.q4', senseId: 'beginner.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：初学者；新手', options: ['beginner', 'beginning', 'being'], answer: 'beginner', explain: '中文义对应 beginner。' },
    ],
    usage: { domains: ['学习', '考试'], tone: '中性', commonConfusion: ['beginning'] },
  });

  D('beginning', {
    etymology: {
      origin: '英语派生：begin + -ing',
      prefix: null,
      root: { text: 'begin', gloss: '开始' },
      suffix: { text: '-ing', gloss: '名词后缀' },
      history: [
        { label: 'begin', text: '开始，是后来派生的基础。' },
        { label: 'beginning', text: '开始；开端' },
      ],
      mnemonic: '时间线最前面的一段。',
      note: 'in the beginning 与 at the beginning 都常见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The beginning of the film explains who the sisters are.', chinese: '电影的开头说明这对姐妹是谁。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'beginning.s1', en: 'At the beginning, nobody knew the rule.', zh: '一开始没有人知道规则。', structure: 'At the  / beginning / , nobody knew the rule.', grammar: '名词，常加 the。', rationale: '影片最初的部分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'In the beginning of he left.', right: 'At the beginning he was nervous.', reason: 'at the beginning 或 at the beginning of + 名词。', rule: 'at the beginning of。', special: 'beginner 是人。' },
    ],
    quiz: [
      { id: 'beginning.q1', senseId: 'beginning.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The first part of something.', options: ['beginning', 'begrudge', 'belated'], answer: 'beginning', explain: 'beginning：开始；开端' },
      { id: 'beginning.q2', senseId: 'beginning.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ of the film explains who the sisters are.', options: ['beginning', 'begrudge', 'belated'], answer: 'beginning', explain: '空格需要 beginning。' },
      { id: 'beginning.q3', senseId: 'beginning.s1', errorType: 'collocation', type: '易错', prompt: '开始；开端 应选哪一句？', options: ['At the beginning he was nervous.', 'In the beginning of he left.', '词形或搭配不对。'], answer: 'At the beginning he was nervous.', explain: 'at the beginning 或 at the beginning of + 名词。' },
      { id: 'beginning.q4', senseId: 'beginning.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：开始；开端', options: ['beginning', 'begrudge', 'belated'], answer: 'beginning', explain: '中文义对应 beginning。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['beginner'] },
  });

  D('begrudge', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'begrudge', text: '现行词形，词性：verb。' },
        { label: 'begrudge', text: '吝惜；嫉妒' },
      ],
      mnemonic: '舍不得给，或见不得别人好。',
      note: '正式一些的动词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Do not begrudge them a short rest after such a long walk.', chinese: '走了这么远，不要吝惜给他们一段短休息。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'begrudge.s1', en: 'She does not begrudge him his prize.', zh: '她并不嫉妒他得奖。', structure: 'She does not  / begrudge /  him his prize.', grammar: '及物动词，可接双宾语。', rationale: '舍不得把休息给他们。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He begrudged to a rest for them of no.', right: 'Do not begrudge them a rest.', reason: 'begrudge somebody something。', rule: 'begrudge somebody something。', special: 'envy 是嫉妒，句型不同。' },
    ],
    quiz: [
      { id: 'begrudge.q1', senseId: 'begrudge.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be unwilling to give, or to feel unhappy about anothers success.', options: ['begrudge', 'behalf', 'belatedly'], answer: 'begrudge', explain: 'begrudge：吝惜；嫉妒' },
      { id: 'begrudge.q2', senseId: 'begrudge.s1', errorType: 'meaning', type: '词义', prompt: 'Do not _____ them a short rest after such a long walk.', options: ['begrudge', 'behalf', 'belatedly'], answer: 'begrudge', explain: '空格需要 begrudge。' },
      { id: 'begrudge.q3', senseId: 'begrudge.s1', errorType: 'collocation', type: '易错', prompt: '吝惜；嫉妒 应选哪一句？', options: ['Do not begrudge them a rest.', 'He begrudged to a rest for them of no.', '词形或搭配不对。'], answer: 'Do not begrudge them a rest.', explain: 'begrudge somebody something。' },
      { id: 'begrudge.q4', senseId: 'begrudge.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：吝惜；嫉妒', options: ['begrudge', 'behalf', 'belatedly'], answer: 'begrudge', explain: '中文义对应 begrudge。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['envy'] },
  });

  D('behalf', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'behalf', text: '现行词形，词性：noun。' },
        { label: 'behalf', text: '代表；利益' },
      ],
      mnemonic: '站在别人那一边说话或办事。',
      note: '美式也说 on somebodys behalf，本条用 on behalf of 以免所有格。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She spoke on behalf of the students who could not attend.', chinese: '她代表不能出席的学生发言。' },
    ],
    contexts: [
      { domain: '正式', senseId: 'behalf.s1', en: 'They collected money on behalf of the hospital.', zh: '他们为医院募款。', structure: 'They collected money on  / behalf /  of the hospital.', grammar: '名词，几乎总在 on behalf of 里。', rationale: '替不能来的人说话。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He went behalf the team without on.', right: 'He spoke on behalf of the team.', reason: '固定搭配是 on behalf of。', rule: 'on behalf of somebody。', special: 'half 是一半。' },
    ],
    quiz: [
      { id: 'behalf.q1', senseId: 'behalf.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: In the interest of someone, or as their representative.', options: ['behalf', 'behave', 'belief'], answer: 'behalf', explain: 'behalf：代表；利益' },
      { id: 'behalf.q2', senseId: 'behalf.s1', errorType: 'meaning', type: '词义', prompt: 'She spoke on _____ of the students who could not attend.', options: ['behalf', 'behave', 'belief'], answer: 'behalf', explain: '空格需要 behalf。' },
      { id: 'behalf.q3', senseId: 'behalf.s1', errorType: 'collocation', type: '易错', prompt: '代表；利益 应选哪一句？', options: ['He spoke on behalf of the team.', 'He went behalf the team without on.', '词形或搭配不对。'], answer: 'He spoke on behalf of the team.', explain: '固定搭配是 on behalf of。' },
      { id: 'behalf.q4', senseId: 'behalf.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：代表；利益', options: ['behalf', 'behave', 'belief'], answer: 'behalf', explain: '中文义对应 behalf。' },
    ],
    usage: { domains: ['正式', '考试'], tone: '中性', commonConfusion: ['half'] },
  });

  D('behave', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'behave', text: '现行词形，词性：verb。' },
        { label: 'behave', text: '表现；举止；守规矩' },
      ],
      mnemonic: '人怎么行动。',
      note: 'behave well / badly。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The children behave well when the story is short.', chinese: '故事不长时，孩子们表现得很好。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'behave.s1', en: 'Please behave yourself in the library.', zh: '在图书馆请守规矩。', structure: 'Please  / behave /  yourself in the library.', grammar: '动词，可用副词修饰。', rationale: '表现好。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They behaved him a cake.', right: 'They behaved well at the table.', reason: 'behave 不接双宾语。behave yourself 是规矩一点。', rule: 'behave well；behave yourself。', special: '名词是 behaviour（英式）。' },
    ],
    quiz: [
      { id: 'behave.q1', senseId: 'behave.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To act in a particular way.', options: ['behave', 'behaviour', 'belief system'], answer: 'behave', explain: 'behave：表现；举止；守规矩' },
      { id: 'behave.q2', senseId: 'behave.s1', errorType: 'meaning', type: '词义', prompt: 'The children _____ well when the story is short.', options: ['behave', 'behaviour', 'belief system'], answer: 'behave', explain: '空格需要 behave。' },
      { id: 'behave.q3', senseId: 'behave.s1', errorType: 'grammar', type: '易错', prompt: '表现；举止；守规矩 应选哪一句？', options: ['They behaved well at the table.', 'They behaved him a cake.', '词形或搭配不对。'], answer: 'They behaved well at the table.', explain: 'behave 不接双宾语。behave yourself 是规矩一点。' },
      { id: 'behave.q4', senseId: 'behave.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：表现；举止；守规矩', options: ['behave', 'behaviour', 'belief system'], answer: 'behave', explain: '中文义对应 behave。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['behaviour'] },
  });

  D('behaviour', {
    etymology: {
      origin: '英语派生：behave + -our（英式拼写）',
      prefix: null,
      root: { text: 'behave', gloss: '表现' },
      suffix: { text: '-our', gloss: '英式名词后缀' },
      history: [
        { label: 'behave', text: '表现，是后来派生的基础。' },
        { label: 'behaviour', text: '行为；举止' },
      ],
      mnemonic: '英式拼写带 our。美式是 behavior。',
      note: '本词条用 behaviour。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'His behaviour in class improved after the talk.', chinese: '谈话之后，他在课堂上的行为有了改进。' },
    ],
    contexts: [
      { domain: '教育', senseId: 'behaviour.s1', en: 'Such behaviour is not allowed in the lab.', zh: '实验室里不允许这样的行为。', structure: 'Such  / behaviour /  is not allowed in the lab.', grammar: '不可数名词。', rationale: '课堂上的表现。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She behavioured the door.', right: 'Her behaviour at the door was rude.', reason: 'behaviour 是名词，不能加 -ed 当动词。动词是 behave。', rule: '名词 behaviour；动词 behave。', special: '不要写成 behaviour 当动词。' },
    ],
    quiz: [
      { id: 'behaviour.q1', senseId: 'behaviour.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The way a person acts.', options: ['behaviour', 'behind', 'beliefs'], answer: 'behaviour', explain: 'behaviour：行为；举止' },
      { id: 'behaviour.q2', senseId: 'behaviour.s1', errorType: 'meaning', type: '词义', prompt: 'His _____ in class improved after the talk.', options: ['behaviour', 'behind', 'beliefs'], answer: 'behaviour', explain: '空格需要 behaviour。' },
      { id: 'behaviour.q3', senseId: 'behaviour.s1', errorType: 'grammar', type: '易错', prompt: '行为；举止 应选哪一句？', options: ['Her behaviour at the door was rude.', 'She behavioured the door.', '词形或搭配不对。'], answer: 'Her behaviour at the door was rude.', explain: 'behaviour 是名词，不能加 -ed 当动词。动词是 behave。' },
      { id: 'behaviour.q4', senseId: 'behaviour.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：行为；举止', options: ['behaviour', 'behind', 'beliefs'], answer: 'behaviour', explain: '中文义对应 behaviour。' },
    ],
    usage: { domains: ['教育', '考试'], tone: '中性', commonConfusion: ['behave'] },
  });

  D('behind', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'behind', text: '现行词形，词性：preposition。' },
        { label: 'behind', text: '在……后面；落后' },
      ],
      mnemonic: '位置在后，或进度落后。',
      note: 'fall behind。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The cat hid behind the door.', chinese: '猫躲在门后。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'behind.s1', en: 'He is behind the others in reading.', zh: '他的阅读落后于其他人。', structure: 'He is  / behind /  the others in reading.', grammar: '介词。', rationale: '门的背面。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She stood behind of the tree.', right: 'She stood behind the tree.', reason: 'behind 直接接名词，不加 of。', rule: 'behind + 名词。', special: 'after 更常表时间顺序。' },
    ],
    quiz: [
      { id: 'behind.q1', senseId: 'behind.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: At the back of; less advanced than.', options: ['behind', 'beige', 'believable'], answer: 'behind', explain: 'behind：在……后面；落后' },
      { id: 'behind.q2', senseId: 'behind.s1', errorType: 'meaning', type: '词义', prompt: 'The cat hid _____ the door.', options: ['behind', 'beige', 'believable'], answer: 'behind', explain: '空格需要 behind。' },
      { id: 'behind.q3', senseId: 'behind.s1', errorType: 'grammar', type: '易错', prompt: '在……后面；落后 应选哪一句？', options: ['She stood behind the tree.', 'She stood behind of the tree.', '词形或搭配不对。'], answer: 'She stood behind the tree.', explain: 'behind 直接接名词，不加 of。' },
      { id: 'behind.q4', senseId: 'behind.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：在……后面；落后', options: ['behind', 'beige', 'believable'], answer: 'behind', explain: '中文义对应 behind。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['after'] },
  });

  D('beige', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beige', text: '现行词形，词性：noun。' },
        { label: 'beige', text: '米色；米色的' },
      ],
      mnemonic: '淡淡的黄棕色。',
      note: '可作名词或形容词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She chose beige for the walls because it felt calm.', chinese: '她把墙选成米色，因为看起来平静。' },
    ],
    contexts: [
      { domain: '颜色', senseId: 'beige.s1', en: 'The beige coat did not show the dust.', zh: '米色外套不大显灰。', structure: 'The  / beige /  coat did not show the dust.', grammar: '颜色词。', rationale: '墙的颜色。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Beige is a loud red.', right: 'Beige is a pale brown-yellow.', reason: '米色不是鲜红色。', rule: 'beige 可直接修饰名词：a beige coat。', special: 'brown 通常更深。' },
    ],
    quiz: [
      { id: 'beige.q1', senseId: 'beige.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A pale brown-yellow colour.', options: ['beige', 'being', 'believe'], answer: 'beige', explain: 'beige：米色；米色的' },
      { id: 'beige.q2', senseId: 'beige.s1', errorType: 'meaning', type: '词义', prompt: 'She chose _____ for the walls because it felt calm.', options: ['beige', 'being', 'believe'], answer: 'beige', explain: '空格需要 beige。' },
      { id: 'beige.q3', senseId: 'beige.s1', errorType: 'meaning', type: '易错', prompt: '米色；米色的 应选哪一句？', options: ['Beige is a pale brown-yellow.', 'Beige is a loud red.', '词形或搭配不对。'], answer: 'Beige is a pale brown-yellow.', explain: '米色不是鲜红色。' },
      { id: 'beige.q4', senseId: 'beige.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：米色；米色的', options: ['beige', 'being', 'believe'], answer: 'beige', explain: '中文义对应 beige。' },
    ],
    usage: { domains: ['颜色', '考试'], tone: '中性', commonConfusion: ['brown'] },
  });

  D('being', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'being', text: '现行词形，词性：noun。' },
        { label: 'being', text: '存在；生物；生命' },
      ],
      mnemonic: '活着的个体，或存在本身。',
      note: 'human being 是人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Every living being in the tank needs clean water.', chinese: '缸里每个生物都需要干净的水。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'being.s1', en: 'The story asks what a human being owes to others.', zh: '故事问一个人应对别人承担什么。', structure: 'The story asks what a human  / being /  owes to others.', grammar: '可数名词。', rationale: '水族箱里的生命。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A being was a stone with no life in this sentence wrong.', right: 'A human being needs water.', reason: '这里的 being 是生物。', rule: 'a human being；living beings。', special: 'bean 是豆子。' },
    ],
    quiz: [
      { id: 'being.q1', senseId: 'being.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Existence; a living creature.', options: ['being', 'belated', 'believed'], answer: 'being', explain: 'being：存在；生物；生命' },
      { id: 'being.q2', senseId: 'being.s1', errorType: 'meaning', type: '词义', prompt: 'Every living _____ in the tank needs clean water.', options: ['being', 'belated', 'believed'], answer: 'being', explain: '空格需要 being。' },
      { id: 'being.q3', senseId: 'being.s1', errorType: 'meaning', type: '易错', prompt: '存在；生物；生命 应选哪一句？', options: ['A human being needs water.', 'A being was a stone with no life in this sentence wrong.', '词形或搭配不对。'], answer: 'A human being needs water.', explain: '这里的 being 是生物。' },
      { id: 'being.q4', senseId: 'being.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：存在；生物；生命', options: ['being', 'belated', 'believed'], answer: 'being', explain: '中文义对应 being。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['bean'] },
  });

  D('belated', {
    etymology: {
      origin: '英语派生：与 late 相关，前加 be-，后加 -ed',
      prefix: null,
      root: { text: 'late', gloss: '晚的' },
      suffix: { text: '-ed', gloss: '形容词后缀' },
      history: [
        { label: 'late', text: '晚的，是后来派生的基础。' },
        { label: 'belated', text: '迟来的；迟到的' },
      ],
      mnemonic: '该到的时候已经过了。',
      note: 'a belated apology。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He sent a belated gift a week after her birthday.', chinese: '他在她生日一周后送了一份迟来的礼物。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'belated.s1', en: 'The belated train finally entered the station.', zh: '晚点的火车终于进站了。', structure: 'The  / belated /  train finally entered the station.', grammar: '形容词作定语。', rationale: '礼物晚于生日。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A belated reply arrived before the question.', right: 'A belated reply came after the meeting.', reason: '迟来就是晚于预期。', rule: 'belated + 名词。', special: 'late 更口语。' },
    ],
    quiz: [
      { id: 'belated.q1', senseId: 'belated.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Coming later than expected.', options: ['belated', 'belatedly', 'believer'], answer: 'belated', explain: 'belated：迟来的；迟到的' },
      { id: 'belated.q2', senseId: 'belated.s1', errorType: 'meaning', type: '词义', prompt: 'He sent a _____ gift a week after her birthday.', options: ['belated', 'belatedly', 'believer'], answer: 'belated', explain: '空格需要 belated。' },
      { id: 'belated.q3', senseId: 'belated.s1', errorType: 'meaning', type: '易错', prompt: '迟来的；迟到的 应选哪一句？', options: ['A belated reply came after the meeting.', 'A belated reply arrived before the question.', '词形或搭配不对。'], answer: 'A belated reply came after the meeting.', explain: '迟来就是晚于预期。' },
      { id: 'belated.q4', senseId: 'belated.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：迟来的；迟到的', options: ['belated', 'belatedly', 'believer'], answer: 'belated', explain: '中文义对应 belated。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['late'] },
  });

  D('belatedly', {
    etymology: {
      origin: '英语派生：belated + -ly',
      prefix: null,
      root: { text: 'belated', gloss: '迟来的' },
      suffix: { text: '-ly', gloss: '副词后缀' },
      history: [
        { label: 'belated', text: '迟来的，是后来派生的基础。' },
        { label: 'belatedly', text: '迟晚地；迟迟地' },
      ],
      mnemonic: '事情做晚了。',
      note: '常放在动词前。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She belatedly realised the door was still open.', chinese: '她迟迟才发现门还开着。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'belatedly.s1', en: 'The school belatedly warned parents about the change.', zh: '学校很晚才提醒家长这项变动。', structure: 'The school  / belatedly /  warned parents about the change.', grammar: '副词。', rationale: '意识到得太晚。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He belated the warning.', right: 'He belatedly sent the warning.', reason: '要用副词 belatedly，不是把 belated 当动词。', rule: '副词 belatedly 修饰动词。', special: 'belated 是形容词。' },
    ],
    quiz: [
      { id: 'belatedly.q1', senseId: 'belatedly.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Later than it should have been.', options: ['belatedly', 'belief', 'belittle'], answer: 'belatedly', explain: 'belatedly：迟晚地；迟迟地' },
      { id: 'belatedly.q2', senseId: 'belatedly.s1', errorType: 'meaning', type: '词义', prompt: 'She _____ realised the door was still open.', options: ['belatedly', 'belief', 'belittle'], answer: 'belatedly', explain: '空格需要 belatedly。' },
      { id: 'belatedly.q3', senseId: 'belatedly.s1', errorType: 'grammar', type: '易错', prompt: '迟晚地；迟迟地 应选哪一句？', options: ['He belatedly sent the warning.', 'He belated the warning.', '词形或搭配不对。'], answer: 'He belatedly sent the warning.', explain: '要用副词 belatedly，不是把 belated 当动词。' },
      { id: 'belatedly.q4', senseId: 'belatedly.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：迟晚地；迟迟地', options: ['belatedly', 'belief', 'belittle'], answer: 'belatedly', explain: '中文义对应 belatedly。' },
    ],
    usage: { domains: ['新闻', '考试'], tone: '中性', commonConfusion: ['belated'] },
  });

  D('belief', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'belief', text: '现行词形，词性：noun。' },
        { label: 'belief', text: '信念；相信；信仰' },
      ],
      mnemonic: '心里认定是真的。',
      note: 'belief in；belief that。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her belief in fair rules kept the team together.', chinese: '她对公平规则的信念把队伍聚在一起。' },
    ],
    contexts: [
      { domain: '思想', senseId: 'belief.s1', en: 'The belief that he was right made him stubborn.', zh: '他认为自己正确，这让他固执。', structure: 'The  / belief /  that he was right made him stubborn.', grammar: '名词。', rationale: '对规则的信任。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'His belief of the team was a shoe.', right: 'He has a strong belief in the team.', reason: 'belief in something。', rule: 'belief in + 名词；belief that + 从句。', special: 'believe 是动词。' },
    ],
    quiz: [
      { id: 'belief.q1', senseId: 'belief.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A feeling that something is true.', options: ['belief', 'belief system', 'bell'], answer: 'belief', explain: 'belief：信念；相信；信仰' },
      { id: 'belief.q2', senseId: 'belief.s1', errorType: 'meaning', type: '词义', prompt: 'Her _____ in fair rules kept the team together.', options: ['belief', 'belief system', 'bell'], answer: 'belief', explain: '空格需要 belief。' },
      { id: 'belief.q3', senseId: 'belief.s1', errorType: 'collocation', type: '易错', prompt: '信念；相信；信仰 应选哪一句？', options: ['He has a strong belief in the team.', 'His belief of the team was a shoe.', '词形或搭配不对。'], answer: 'He has a strong belief in the team.', explain: 'belief in something。' },
      { id: 'belief.q4', senseId: 'belief.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：信念；相信；信仰', options: ['belief', 'belief system', 'bell'], answer: 'belief', explain: '中文义对应 belief。' },
    ],
    usage: { domains: ['思想', '考试'], tone: '中性', commonConfusion: ['believe'] },
  });

  D('belief system', {
    etymology: {
      origin: '英语派生：belief + system',
      prefix: null,
      root: { text: 'belief', gloss: '信念' },
      suffix: null,
      history: [
        { label: 'belief', text: '信念，是后来派生的基础。' },
        { label: 'belief system', text: '信仰体系；信念系统' },
      ],
      mnemonic: '许多信念组成的系统。',
      note: '两个词都要出现。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A belief system can guide daily choices.', chinese: '一套信念体系可以指导日常选择。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'belief system.s1', en: 'The book compares one belief system with another.', zh: '这本书比较两种信仰体系。', structure: 'The book compares one  / belief system /  with another.', grammar: '可数名词短语。', rationale: '指导选择的整套想法。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A belief system was a single shoe size.', right: 'A belief system is a set of ideas.', reason: '它是一整套看法，不是鞋码。', rule: 'a belief system。', special: '单个信念用 belief。' },
    ],
    quiz: [
      { id: 'belief system.q1', senseId: 'belief system.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A set of ideas someone accepts as true.', options: ['belief system', 'beliefs', 'bell-bottoms'], answer: 'belief system', explain: 'belief system：信仰体系；信念系统' },
      { id: 'belief system.q2', senseId: 'belief system.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ can guide daily choices.', options: ['belief system', 'beliefs', 'bell-bottoms'], answer: 'belief system', explain: '空格需要 belief system。' },
      { id: 'belief system.q3', senseId: 'belief system.s1', errorType: 'meaning', type: '易错', prompt: '信仰体系；信念系统 应选哪一句？', options: ['A belief system is a set of ideas.', 'A belief system was a single shoe size.', '词形或搭配不对。'], answer: 'A belief system is a set of ideas.', explain: '它是一整套看法，不是鞋码。' },
      { id: 'belief system.q4', senseId: 'belief system.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：信仰体系；信念系统', options: ['belief system', 'beliefs', 'bell-bottoms'], answer: 'belief system', explain: '中文义对应 belief system。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['belief'] },
  });

  D('beliefs', {
    etymology: {
      origin: '英语派生：belief + -s',
      prefix: null,
      root: { text: 'belief', gloss: '信念' },
      suffix: { text: '-s', gloss: '复数' },
      history: [
        { label: 'belief', text: '信念，是后来派生的基础。' },
        { label: 'beliefs', text: '信念；信仰' },
      ],
      mnemonic: '不止一条信念。',
      note: '这些信念用复数动词或 these。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Their beliefs about food are strict but clear.', chinese: '他们对食物的信念严格但清楚。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'beliefs.s1', en: 'The class discussed different beliefs without mocking anyone.', zh: '课堂上讨论了不同信仰，没有嘲笑任何人。', structure: 'The class discussed different  / beliefs /  without mocking anyone.', grammar: '复数名词。', rationale: '关于食物的多条看法。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'One beliefs is a verb.', right: 'These beliefs shape his choices.', reason: 'beliefs 是名词复数。', rule: 'beliefs 是复数。', special: '单数是 belief。' },
    ],
    quiz: [
      { id: 'beliefs.q1', senseId: 'beliefs.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Ideas someone accepts as true.', options: ['beliefs', 'believable', 'bellow'], answer: 'beliefs', explain: 'beliefs：信念；信仰' },
      { id: 'beliefs.q2', senseId: 'beliefs.s1', errorType: 'meaning', type: '词义', prompt: 'Their _____ about food are strict but clear.', options: ['beliefs', 'believable', 'bellow'], answer: 'beliefs', explain: '空格需要 beliefs。' },
      { id: 'beliefs.q3', senseId: 'beliefs.s1', errorType: 'grammar', type: '易错', prompt: '信念；信仰 应选哪一句？', options: ['These beliefs shape his choices.', 'One beliefs is a verb.', '词形或搭配不对。'], answer: 'These beliefs shape his choices.', explain: 'beliefs 是名词复数。' },
      { id: 'beliefs.q4', senseId: 'beliefs.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：信念；信仰', options: ['beliefs', 'believable', 'bellow'], answer: 'beliefs', explain: '中文义对应 beliefs。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['belief'] },
  });

  D('believable', {
    etymology: {
      origin: '英语派生：believe + -able',
      prefix: null,
      root: { text: 'believe', gloss: '相信' },
      suffix: { text: '-able', gloss: '可以……的' },
      history: [
        { label: 'believe', text: '相信，是后来派生的基础。' },
        { label: 'believable', text: '可信的；看似真实的' },
      ],
      mnemonic: '能够被相信。',
      note: '反义 unbelievable。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The excuse was believable because the train really had stopped.', chinese: '火车确实停了，所以这个借口可信。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'believable.s1', en: 'A believable story still needs a few clear facts.', zh: '一个可信的故事仍然需要几件清楚的事实。', structure: 'A  / believable /  story still needs a few clear facts.', grammar: '形容词作表语。', rationale: '借口与事实相符。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The tale was believable to lying on purpose.', right: 'The tale was believable.', reason: '可信就是听起来像真的。', rule: '形容词 believable 修饰故事或借口。', special: 'believe 是动词。' },
    ],
    quiz: [
      { id: 'believable.q1', senseId: 'believable.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Possible to believe.', options: ['believable', 'believe', 'belly'], answer: 'believable', explain: 'believable：可信的；看似真实的' },
      { id: 'believable.q2', senseId: 'believable.s1', errorType: 'meaning', type: '词义', prompt: 'The excuse was _____ because the train really had stopped.', options: ['believable', 'believe', 'belly'], answer: 'believable', explain: '空格需要 believable。' },
      { id: 'believable.q3', senseId: 'believable.s1', errorType: 'grammar', type: '易错', prompt: '可信的；看似真实的 应选哪一句？', options: ['The tale was believable.', 'The tale was believable to lying on purpose.', '词形或搭配不对。'], answer: 'The tale was believable.', explain: '可信就是听起来像真的。' },
      { id: 'believable.q4', senseId: 'believable.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：可信的；看似真实的', options: ['believable', 'believe', 'belly'], answer: 'believable', explain: '中文义对应 believable。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['believe'] },
  });

  D('believe', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'believe', text: '现行词形，词性：verb。' },
        { label: 'believe', text: '相信；认为' },
      ],
      mnemonic: '心里把它当作真的。',
      note: 'believe in 是信任或信仰。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I believe the report because the numbers match.', chinese: '数字对得上，所以我相信这份报告。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'believe.s1', en: 'Do you believe that the door was locked?', zh: '你认为门当时是锁着的吗？', structure: 'Do you  / believe /  that the door was locked?', grammar: '及物动词。', rationale: '认为报告是真的。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She believes to the story of no reason.', right: 'She believes the story.', reason: 'believe 直接接内容，或 believe that，不说 believe to。', rule: 'believe something；believe that；believe in。', special: 'belief 是名词。' },
    ],
    quiz: [
      { id: 'believe.q1', senseId: 'believe.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To think that something is true.', options: ['believe', 'believed', 'belong'], answer: 'believe', explain: 'believe：相信；认为' },
      { id: 'believe.q2', senseId: 'believe.s1', errorType: 'meaning', type: '词义', prompt: 'I _____ the report because the numbers match.', options: ['believe', 'believed', 'belong'], answer: 'believe', explain: '空格需要 believe。' },
      { id: 'believe.q3', senseId: 'believe.s1', errorType: 'collocation', type: '易错', prompt: '相信；认为 应选哪一句？', options: ['She believes the story.', 'She believes to the story of no reason.', '词形或搭配不对。'], answer: 'She believes the story.', explain: 'believe 直接接内容，或 believe that，不说 believe to。' },
      { id: 'believe.q4', senseId: 'believe.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：相信；认为', options: ['believe', 'believed', 'belong'], answer: 'believe', explain: '中文义对应 believe。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['belief'] },
  });

  D('believed', {
    etymology: {
      origin: '英语派生：believe + -ed',
      prefix: null,
      root: { text: 'believe', gloss: '相信' },
      suffix: { text: '-ed', gloss: '过去式或过去分词' },
      history: [
        { label: 'believe', text: '相信，是后来派生的基础。' },
        { label: 'believed', text: '被相信的；believe 的过去式' },
      ],
      mnemonic: '已经被当作真的。',
      note: 'it is believed that 是常见句型。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The island was believed to be empty.', chinese: '人们认为那座岛是空的。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'believed.s1', en: 'Few believed the rumour after the letter appeared.', zh: '信出现之后，很少还有人相信那个传闻。', structure: 'Few  / believed /  the rumour after the letter appeared.', grammar: '过去分词用于被动。', rationale: '人们持有岛上无人的看法。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'It is believed to true.', right: 'It is believed to be true.', reason: 'be believed to be，不要丢掉 be。', rule: 'be believed to be。', special: '原形是 believe。' },
    ],
    quiz: [
      { id: 'believed.q1', senseId: 'believed.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Accepted as true, or the past of believe.', options: ['believed', 'believer', 'belonging'], answer: 'believed', explain: 'believed：被相信的；believe 的过去式' },
      { id: 'believed.q2', senseId: 'believed.s1', errorType: 'meaning', type: '词义', prompt: 'The island was _____ to be empty.', options: ['believed', 'believer', 'belonging'], answer: 'believed', explain: '空格需要 believed。' },
      { id: 'believed.q3', senseId: 'believed.s1', errorType: 'grammar', type: '易错', prompt: '被相信的；believe 的过去式 应选哪一句？', options: ['It is believed to be true.', 'It is believed to true.', '词形或搭配不对。'], answer: 'It is believed to be true.', explain: 'be believed to be，不要丢掉 be。' },
      { id: 'believed.q4', senseId: 'believed.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：被相信的；believe 的过去式', options: ['believed', 'believer', 'belonging'], answer: 'believed', explain: '中文义对应 believed。' },
    ],
    usage: { domains: ['新闻', '考试'], tone: '中性', commonConfusion: ['believe'] },
  });

  D('believer', {
    etymology: {
      origin: '英语派生：believe + -er',
      prefix: null,
      root: { text: 'believe', gloss: '相信' },
      suffix: { text: '-er', gloss: '表示人' },
      history: [
        { label: 'believe', text: '相信，是后来派生的基础。' },
        { label: 'believer', text: '信徒；信奉者' },
      ],
      mnemonic: '把某事当真的人。',
      note: 'a believer in。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She is a believer in early sleep and quiet mornings.', chinese: '她信奉早睡和安静的早晨。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'believer.s1', en: 'Every believer in the plan stayed to help.', zh: '每个信奉这个计划的人都留下帮忙。', structure: 'Every  / believer /  in the plan stayed to help.', grammar: '可数名词。', rationale: '信奉早睡的人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'A believer ate the idea with a spoon.', right: 'A believer in the plan supports it.', reason: 'believer in 表示信奉某想法的人。', rule: 'a believer in。', special: 'belief 不是人。' },
    ],
    quiz: [
      { id: 'believer.q1', senseId: 'believer.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A person who accepts an idea or a religion.', options: ['believer', 'belittle', 'belonging to'], answer: 'believer', explain: 'believer：信徒；信奉者' },
      { id: 'believer.q2', senseId: 'believer.s1', errorType: 'meaning', type: '词义', prompt: 'She is a _____ in early sleep and quiet mornings.', options: ['believer', 'belittle', 'belonging to'], answer: 'believer', explain: '空格需要 believer。' },
      { id: 'believer.q3', senseId: 'believer.s1', errorType: 'collocation', type: '易错', prompt: '信徒；信奉者 应选哪一句？', options: ['A believer in the plan supports it.', 'A believer ate the idea with a spoon.', '词形或搭配不对。'], answer: 'A believer in the plan supports it.', explain: 'believer in 表示信奉某想法的人。' },
      { id: 'believer.q4', senseId: 'believer.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：信徒；信奉者', options: ['believer', 'belittle', 'belonging to'], answer: 'believer', explain: '中文义对应 believer。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['belief'] },
  });

  D('belittle', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'belittle', text: '现行词形，词性：verb。' },
        { label: 'belittle', text: '贬低；小看' },
      ],
      mnemonic: '把别人的成绩说小。',
      note: '及物动词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Do not belittle her work just because it looks simple.', chinese: '不要因为她的工作看着简单就贬低它。' },
    ],
    contexts: [
      { domain: '交际', senseId: 'belittle.s1', en: 'Do not belittle an idea before you understand it.', zh: '还没弄懂一个想法之前不要小看它。', structure: 'Do not  / belittle /  an idea before you understand it.', grammar: '及物动词。', rationale: '把工作说得无足轻重。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They belittled her up to a hero.', right: 'They should not belittle her success.', reason: 'belittle 是说得比实际更不重要。', rule: 'belittle somebody / something。', special: 'praise 是表扬，方向相反。' },
    ],
    quiz: [
      { id: 'belittle.q1', senseId: 'belittle.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To make someone or something seem less important.', options: ['belittle', 'bell', 'belongings'], answer: 'belittle', explain: 'belittle：贬低；小看' },
      { id: 'belittle.q2', senseId: 'belittle.s1', errorType: 'meaning', type: '词义', prompt: 'Do not _____ her work just because it looks simple.', options: ['belittle', 'bell', 'belongings'], answer: 'belittle', explain: '空格需要 belittle。' },
      { id: 'belittle.q3', senseId: 'belittle.s1', errorType: 'meaning', type: '易错', prompt: '贬低；小看 应选哪一句？', options: ['They should not belittle her success.', 'They belittled her up to a hero.', '词形或搭配不对。'], answer: 'They should not belittle her success.', explain: 'belittle 是说得比实际更不重要。' },
      { id: 'belittle.q4', senseId: 'belittle.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：贬低；小看', options: ['belittle', 'bell', 'belongings'], answer: 'belittle', explain: '中文义对应 belittle。' },
    ],
    usage: { domains: ['交际', '考试'], tone: '中性', commonConfusion: ['praise'] },
  });

  D('bell', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bell', text: '现行词形，词性：noun。' },
        { label: 'bell', text: '钟；铃；铃声' },
      ],
      mnemonic: '敲击或摇动会响的金属器物。',
      note: 'ring a bell 还可表示听着耳熟。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bell rang at noon and the class stood up.', chinese: '铃在中午响起，全班站了起来。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'bell.s1', en: 'She shook a small bell to call the dog.', zh: '她摇了一下小铃来叫狗。', structure: 'She shook a small  / bell /  to call the dog.', grammar: '可数名词。', rationale: '学校的铃声。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bell whispered a book.', right: 'The bell rang loudly.', reason: '铃会响，不会低声读书。', rule: 'the bell rang。', special: 'bellow 是吼叫。' },
    ],
    quiz: [
      { id: 'bell.q1', senseId: 'bell.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A metal object that rings when hit.', options: ['bell', 'bell-bottoms', 'beloved'], answer: 'bell', explain: 'bell：钟；铃；铃声' },
      { id: 'bell.q2', senseId: 'bell.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ rang at noon and the class stood up.', options: ['bell', 'bell-bottoms', 'beloved'], answer: 'bell', explain: '空格需要 bell。' },
      { id: 'bell.q3', senseId: 'bell.s1', errorType: 'confusable', type: '易错', prompt: '钟；铃；铃声 应选哪一句？', options: ['The bell rang loudly.', 'The bell whispered a book.', '词形或搭配不对。'], answer: 'The bell rang loudly.', explain: '铃会响，不会低声读书。' },
      { id: 'bell.q4', senseId: 'bell.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：钟；铃；铃声', options: ['bell', 'bell-bottoms', 'beloved'], answer: 'bell', explain: '中文义对应 bell。' },
    ],
    usage: { domains: ['校园', '考试'], tone: '中性', commonConfusion: ['bellow'] },
  });

  D('bell-bottoms', {
    etymology: {
      origin: '英语派生：bell + bottoms',
      prefix: null,
      root: { text: 'bottom', gloss: '裤脚、底部' },
      suffix: null,
      history: [
        { label: 'bottom', text: '裤脚、底部，是后来派生的基础。' },
        { label: 'bell-bottoms', text: '喇叭裤' },
      ],
      mnemonic: '裤脚像钟一样张开。',
      note: '常作复数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He wore bell-bottoms to the party and danced all night.', chinese: '他穿着喇叭裤去聚会，跳了一整夜。' },
    ],
    contexts: [
      { domain: '服饰', senseId: 'bell-bottoms.s1', en: 'Those bell-bottoms are too long for these shoes.', zh: '那条喇叭裤配这双鞋太长了。', structure: 'Those  / bell-bottoms /  are too long for these shoes.', grammar: '复数名词。', rationale: '裤脚宽大的裤子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Bell-bottoms are a kind of hat.', right: 'Bell-bottoms are trousers with wide legs.', reason: '喇叭裤是裤子。', rule: 'a pair of bell-bottoms。', special: 'bell 是铃。' },
    ],
    quiz: [
      { id: 'bell-bottoms.q1', senseId: 'bell-bottoms.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Trousers that flare out at the bottom.', options: ['bell-bottoms', 'bellow', 'below'], answer: 'bell-bottoms', explain: 'bell-bottoms：喇叭裤' },
      { id: 'bell-bottoms.q2', senseId: 'bell-bottoms.s1', errorType: 'meaning', type: '词义', prompt: 'He wore _____ to the party and danced all night.', options: ['bell-bottoms', 'bellow', 'below'], answer: 'bell-bottoms', explain: '空格需要 bell-bottoms。' },
      { id: 'bell-bottoms.q3', senseId: 'bell-bottoms.s1', errorType: 'meaning', type: '易错', prompt: '喇叭裤 应选哪一句？', options: ['Bell-bottoms are trousers with wide legs.', 'Bell-bottoms are a kind of hat.', '词形或搭配不对。'], answer: 'Bell-bottoms are trousers with wide legs.', explain: '喇叭裤是裤子。' },
      { id: 'bell-bottoms.q4', senseId: 'bell-bottoms.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：喇叭裤', options: ['bell-bottoms', 'bellow', 'below'], answer: 'bell-bottoms', explain: '中文义对应 bell-bottoms。' },
    ],
    usage: { domains: ['服饰', '考试'], tone: '中性', commonConfusion: ['bell'] },
  });

  D('bellow', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bellow', text: '现行词形，词性：verb。' },
        { label: 'bellow', text: '吼叫；（牛等的）吼声' },
      ],
      mnemonic: '低沉地大声吼。',
      note: '也可作名词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The coach began to bellow instructions across the field.', chinese: '教练开始对着球场吼口令。' },
    ],
    contexts: [
      { domain: '动作', senseId: 'bellow.s1', en: 'We heard the cattle bellow near the barn.', zh: '我们听见牛在谷仓附近吼叫。', structure: 'We heard the cattle  / bellow /  near the barn.', grammar: '动词。', rationale: '为了让远处听见而大声喊。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She bellowed a whisper.', right: 'She had to bellow so the back row could hear.', reason: 'bellow 是又低又响的喊，不是耳语。', rule: 'bellow at somebody；bellow something。', special: 'bell 是铃。' },
    ],
    quiz: [
      { id: 'bellow.q1', senseId: 'bellow.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To shout in a loud deep voice.', options: ['bellow', 'belly', 'below ground'], answer: 'bellow', explain: 'bellow：吼叫；（牛等的）吼声' },
      { id: 'bellow.q2', senseId: 'bellow.s1', errorType: 'meaning', type: '词义', prompt: 'The coach began to _____ instructions across the field.', options: ['bellow', 'belly', 'below ground'], answer: 'bellow', explain: '空格需要 bellow。' },
      { id: 'bellow.q3', senseId: 'bellow.s1', errorType: 'meaning', type: '易错', prompt: '吼叫；（牛等的）吼声 应选哪一句？', options: ['She had to bellow so the back row could hear.', 'She bellowed a whisper.', '词形或搭配不对。'], answer: 'She had to bellow so the back row could hear.', explain: 'bellow 是又低又响的喊，不是耳语。' },
      { id: 'bellow.q4', senseId: 'bellow.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：吼叫；（牛等的）吼声', options: ['bellow', 'belly', 'below ground'], answer: 'bellow', explain: '中文义对应 bellow。' },
    ],
    usage: { domains: ['动作', '考试'], tone: '中性', commonConfusion: ['bell'] },
  });

  D('belly', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'belly', text: '现行词形，词性：noun。' },
        { label: 'belly', text: '肚子；腹部' },
      ],
      mnemonic: '胸口下面的那一块。',
      note: '口语比 abdomen 随便。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The dog rolled over and showed its belly.', chinese: '狗翻过身，露出肚子。' },
    ],
    contexts: [
      { domain: '身体', senseId: 'belly.s1', en: 'He laughed until his belly hurt.', zh: '他笑到肚子疼。', structure: 'He laughed until his  / belly /  hurt.', grammar: '可数名词。', rationale: '狗露出的腹部。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She wore a hat on her belly only as a shoe.', right: 'The child rubbed his belly.', reason: 'belly 是腹部。', rule: 'a full belly；belly hurt 口语常见。', special: 'stomach 也可指胃。' },
    ],
    quiz: [
      { id: 'belly.q1', senseId: 'belly.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The front of the body below the chest.', options: ['belly', 'belong', 'belt'], answer: 'belly', explain: 'belly：肚子；腹部' },
      { id: 'belly.q2', senseId: 'belly.s1', errorType: 'meaning', type: '词义', prompt: 'The dog rolled over and showed its _____.', options: ['belly', 'belong', 'belt'], answer: 'belly', explain: '空格需要 belly。' },
      { id: 'belly.q3', senseId: 'belly.s1', errorType: 'meaning', type: '易错', prompt: '肚子；腹部 应选哪一句？', options: ['The child rubbed his belly.', 'She wore a hat on her belly only as a shoe.', '词形或搭配不对。'], answer: 'The child rubbed his belly.', explain: 'belly 是腹部。' },
      { id: 'belly.q4', senseId: 'belly.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：肚子；腹部', options: ['belly', 'belong', 'belt'], answer: 'belly', explain: '中文义对应 belly。' },
    ],
    usage: { domains: ['身体', '考试'], tone: '中性', commonConfusion: ['stomach'] },
  });

  D('belong', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'belong', text: '现行词形，词性：verb。' },
        { label: 'belong', text: '属于；适合；有归属' },
      ],
      mnemonic: '归属用 to。',
      note: 'belong 没有进行时的常规用法。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'These keys belong to the office on the second floor.', chinese: '这些钥匙属于二楼的办公室。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'belong.s1', en: 'The book does not belong on the floor.', zh: '书不该放在地板上。', structure: 'The book does not  / belong /  on the floor.', grammar: '不及物动词，to 接所有者。', rationale: '钥匙的主人是那间办公室。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The bag belongs with to him.', right: 'The bag belongs to him.', reason: '属于某人用 belong to，不要叠 with to。', rule: 'belong to somebody；belong in a place。', special: '名词归属感是 belonging。' },
    ],
    quiz: [
      { id: 'belong.q1', senseId: 'belong.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be owned by someone, or to fit in a place.', options: ['belong', 'belonging', 'bench'], answer: 'belong', explain: 'belong：属于；适合；有归属' },
      { id: 'belong.q2', senseId: 'belong.s1', errorType: 'meaning', type: '词义', prompt: 'These keys _____ to the office on the second floor.', options: ['belong', 'belonging', 'bench'], answer: 'belong', explain: '空格需要 belong。' },
      { id: 'belong.q3', senseId: 'belong.s1', errorType: 'collocation', type: '易错', prompt: '属于；适合；有归属 应选哪一句？', options: ['The bag belongs to him.', 'The bag belongs with to him.', '词形或搭配不对。'], answer: 'The bag belongs to him.', explain: '属于某人用 belong to，不要叠 with to。' },
      { id: 'belong.q4', senseId: 'belong.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：属于；适合；有归属', options: ['belong', 'belonging', 'bench'], answer: 'belong', explain: '中文义对应 belong。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['belonging'] },
  });

  D('belonging', {
    etymology: {
      origin: '英语派生：belong + -ing',
      prefix: null,
      root: { text: 'belong', gloss: '归属' },
      suffix: { text: '-ing', gloss: '名词后缀' },
      history: [
        { label: 'belong', text: '归属，是后来派生的基础。' },
        { label: 'belonging', text: '归属感' },
      ],
      mnemonic: '觉得自己是这个群体的一员。',
      note: 'a sense of belonging。物品是 belongings。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A sense of belonging grew after she joined the choir.', chinese: '加入合唱团之后，她的归属感慢慢长出来。' },
    ],
    contexts: [
      { domain: '心理', senseId: 'belonging.s1', en: 'The club tries to give every new member a feeling of belonging.', zh: '俱乐部想让每个新成员都有归属感。', structure: 'The club tries to give every new member a feeling of  / belonging / .', grammar: '不可数名词。', rationale: '被群体接纳的感觉。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'His belonging were three bags only in this sense wrong.', right: 'The talk was about belonging, not about bags.', reason: '本词条的 belonging 是归属感，物品要用 belongings。', rule: 'a sense of belonging。', special: 'belongings 是随身物品。' },
    ],
    quiz: [
      { id: 'belonging.q1', senseId: 'belonging.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The feeling of being accepted in a group.', options: ['belonging', 'belonging to', 'bend'], answer: 'belonging', explain: 'belonging：归属感' },
      { id: 'belonging.q2', senseId: 'belonging.s1', errorType: 'meaning', type: '词义', prompt: 'A sense of _____ grew after she joined the choir.', options: ['belonging', 'belonging to', 'bend'], answer: 'belonging', explain: '空格需要 belonging。' },
      { id: 'belonging.q3', senseId: 'belonging.s1', errorType: 'confusable', type: '易错', prompt: '归属感 应选哪一句？', options: ['The talk was about belonging, not about bags.', 'His belonging were three bags only in this sense wrong.', '词形或搭配不对。'], answer: 'The talk was about belonging, not about bags.', explain: '本词条的 belonging 是归属感，物品要用 belongings。' },
      { id: 'belonging.q4', senseId: 'belonging.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：归属感', options: ['belonging', 'belonging to', 'bend'], answer: 'belonging', explain: '中文义对应 belonging。' },
    ],
    usage: { domains: ['心理', '考试'], tone: '中性', commonConfusion: ['belongings'] },
  });

  D('belonging to', {
    etymology: {
      origin: '英语派生：belonging + to',
      prefix: null,
      root: { text: 'belong', gloss: '属于' },
      suffix: null,
      history: [
        { label: 'belong', text: '属于，是后来派生的基础。' },
        { label: 'belonging to', text: '属于；归……所有' },
      ],
      mnemonic: '分词短语，相当于 which belongs to。',
      note: '用来修饰名词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bag belonging to the driver was still on the seat.', chinese: '属于司机的那个包还在座位上。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'belonging to.s1', en: 'Any book belonging to the library must be returned.', zh: '凡是属于图书馆的书都必须归还。', structure: 'Any book  / belonging to /  the library must be returned.', grammar: '后置定语。', rationale: '包的所有者是司机。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The coat belonging to of him.', right: 'The coat belonging to him is grey.', reason: 'belonging to 后面直接接人，不加 of。', rule: '名词 + belonging to + 所有者。', special: '动词原形结构是 belong to。' },
    ],
    quiz: [
      { id: 'belonging to.q1', senseId: 'belonging to.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Owned by someone.', options: ['belonging to', 'belongings', 'beneath'], answer: 'belonging to', explain: 'belonging to：属于；归……所有' },
      { id: 'belonging to.q2', senseId: 'belonging to.s1', errorType: 'meaning', type: '词义', prompt: 'The bag _____ the driver was still on the seat.', options: ['belonging to', 'belongings', 'beneath'], answer: 'belonging to', explain: '空格需要 belonging to。' },
      { id: 'belonging to.q3', senseId: 'belonging to.s1', errorType: 'grammar', type: '易错', prompt: '属于；归……所有 应选哪一句？', options: ['The coat belonging to him is grey.', 'The coat belonging to of him.', '词形或搭配不对。'], answer: 'The coat belonging to him is grey.', explain: 'belonging to 后面直接接人，不加 of。' },
      { id: 'belonging to.q4', senseId: 'belonging to.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：属于；归……所有', options: ['belonging to', 'belongings', 'beneath'], answer: 'belonging to', explain: '中文义对应 belonging to。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['belong'] },
  });

  D('belongings', {
    etymology: {
      origin: '英语派生：belonging + -s',
      prefix: null,
      root: { text: 'belong', gloss: '属于' },
      suffix: { text: '-s', gloss: '复数' },
      history: [
        { label: 'belong', text: '属于，是后来派生的基础。' },
        { label: 'belongings', text: '随身物品；私人物品' },
      ],
      mnemonic: '属于你、带着走的那些东西。',
      note: '与不可数的 belonging（归属感）不同。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Please check your belongings before you leave the train.', chinese: '下火车前请检查随身物品。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'belongings.s1', en: 'His belongings fit into one small case.', zh: '他的物品装进一只小箱子就够了。', structure: 'His  / belongings /  fit into one small case.', grammar: '复数名词。', rationale: '人随身带的东西。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'A belongings was left on the seat.', right: 'Her belongings were left on the seat.', reason: 'belongings 是复数，动词用 were。', rule: '复数 belongings。', special: '归属感不加 -s 的用法见 belonging。' },
    ],
    quiz: [
      { id: 'belongings.q1', senseId: 'belongings.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Things you own, especially those you carry.', options: ['belongings', 'beloved', 'benefactor'], answer: 'belongings', explain: 'belongings：随身物品；私人物品' },
      { id: 'belongings.q2', senseId: 'belongings.s1', errorType: 'meaning', type: '词义', prompt: 'Please check your _____ before you leave the train.', options: ['belongings', 'beloved', 'benefactor'], answer: 'belongings', explain: '空格需要 belongings。' },
      { id: 'belongings.q3', senseId: 'belongings.s1', errorType: 'grammar', type: '易错', prompt: '随身物品；私人物品 应选哪一句？', options: ['Her belongings were left on the seat.', 'A belongings was left on the seat.', '词形或搭配不对。'], answer: 'Her belongings were left on the seat.', explain: 'belongings 是复数，动词用 were。' },
      { id: 'belongings.q4', senseId: 'belongings.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：随身物品；私人物品', options: ['belongings', 'beloved', 'benefactor'], answer: 'belongings', explain: '中文义对应 belongings。' },
    ],
    usage: { domains: ['旅行', '考试'], tone: '中性', commonConfusion: ['belonging'] },
  });

  D('beloved', {
    etymology: {
      origin: '英语派生：love 的形容词形式 beloved',
      prefix: null,
      root: { text: 'love', gloss: '爱' },
      suffix: null,
      history: [
        { label: 'love', text: '爱，是后来派生的基础。' },
        { label: 'beloved', text: '心爱的；挚爱的' },
      ],
      mnemonic: '被深深爱着的。',
      note: '可放在名词前。文学语体也常见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She returned to her beloved city after many years.', chinese: '许多年后她回到心爱的城市。' },
    ],
    contexts: [
      { domain: '文学', senseId: 'beloved.s1', en: 'The beloved teacher received a long letter.', zh: '那位深受喜爱的老师收到一封长信。', structure: 'The  / beloved /  teacher received a long letter.', grammar: '形容词作定语。', rationale: '她深爱的城市。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A beloved enemy destroyed the gift on purpose in this wrong line.', right: 'They visited their beloved teacher.', reason: 'beloved 表示非常爱，不是敌人。', rule: 'beloved + 名词。', special: '动词是 love。' },
    ],
    quiz: [
      { id: 'beloved.q1', senseId: 'beloved.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Loved very much.', options: ['beloved', 'below', 'beneficial'], answer: 'beloved', explain: 'beloved：心爱的；挚爱的' },
      { id: 'beloved.q2', senseId: 'beloved.s1', errorType: 'meaning', type: '词义', prompt: 'She returned to her _____ city after many years.', options: ['beloved', 'below', 'beneficial'], answer: 'beloved', explain: '空格需要 beloved。' },
      { id: 'beloved.q3', senseId: 'beloved.s1', errorType: 'meaning', type: '易错', prompt: '心爱的；挚爱的 应选哪一句？', options: ['They visited their beloved teacher.', 'A beloved enemy destroyed the gift on purpose in this wrong line.', '词形或搭配不对。'], answer: 'They visited their beloved teacher.', explain: 'beloved 表示非常爱，不是敌人。' },
      { id: 'beloved.q4', senseId: 'beloved.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：心爱的；挚爱的', options: ['beloved', 'below', 'beneficial'], answer: 'beloved', explain: '中文义对应 beloved。' },
    ],
    usage: { domains: ['文学', '考试'], tone: '中性', commonConfusion: ['love'] },
  });

  D('below', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'below', text: '现行词形，词性：preposition。' },
        { label: 'below', text: '在……下面；低于' },
      ],
      mnemonic: '位置或数字更低。',
      note: '反义 above。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The temperature fell below zero before dawn.', chinese: '黎明前气温降到零度以下。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'below.s1', en: 'Her name is below mine on the list.', zh: '名单上她的名字在我下面。', structure: 'Her name is  / below /  mine on the list.', grammar: '介词。', rationale: '气温比零度更低。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The village is below of the hill.', right: 'The village is below the hill.', reason: 'below 直接接名词，不加 of。', rule: 'below + 名词。', special: 'under 也表在下，below 更常用于水位、温度、名单。' },
    ],
    quiz: [
      { id: 'below.q1', senseId: 'below.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Lower than something.', options: ['below', 'below ground', 'benefit'], answer: 'below', explain: 'below：在……下面；低于' },
      { id: 'below.q2', senseId: 'below.s1', errorType: 'meaning', type: '词义', prompt: 'The temperature fell _____ zero before dawn.', options: ['below', 'below ground', 'benefit'], answer: 'below', explain: '空格需要 below。' },
      { id: 'below.q3', senseId: 'below.s1', errorType: 'grammar', type: '易错', prompt: '在……下面；低于 应选哪一句？', options: ['The village is below the hill.', 'The village is below of the hill.', '词形或搭配不对。'], answer: 'The village is below the hill.', explain: 'below 直接接名词，不加 of。' },
      { id: 'below.q4', senseId: 'below.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：在……下面；低于', options: ['below', 'below ground', 'benefit'], answer: 'below', explain: '中文义对应 below。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['under'] },
  });

  D('below ground', {
    etymology: {
      origin: '英语派生：below + ground',
      prefix: null,
      root: { text: 'ground', gloss: '地面' },
      suffix: null,
      history: [
        { label: 'ground', text: '地面，是后来派生的基础。' },
        { label: 'below ground', text: '在地下；地面以下' },
      ],
      mnemonic: '地面那条线的下面。',
      note: '也可说 underground。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The pipes stay below ground all winter.', chinese: '这些管子整个冬天都在地下。' },
    ],
    contexts: [
      { domain: '工程', senseId: 'below ground.s1', en: 'They store the wine below ground where it is cool.', zh: '他们把酒存在凉爽的地下。', structure: 'They store the wine  / below ground /  where it is cool.', grammar: '副词性短语。', rationale: '管子埋在土里。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The flags flew below ground in the sky.', right: 'The cables run below ground.', reason: 'below ground 是地面以下，不是天空。', rule: 'below ground 作地点状语。', special: '只说 below 时后面还要接对象。' },
    ],
    quiz: [
      { id: 'below ground.q1', senseId: 'below ground.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Under the surface of the ground.', options: ['below ground', 'belt', 'benefits'], answer: 'below ground', explain: 'below ground：在地下；地面以下' },
      { id: 'below ground.q2', senseId: 'below ground.s1', errorType: 'meaning', type: '词义', prompt: 'The pipes stay _____ all winter.', options: ['below ground', 'belt', 'benefits'], answer: 'below ground', explain: '空格需要 below ground。' },
      { id: 'below ground.q3', senseId: 'below ground.s1', errorType: 'meaning', type: '易错', prompt: '在地下；地面以下 应选哪一句？', options: ['The cables run below ground.', 'The flags flew below ground in the sky.', '词形或搭配不对。'], answer: 'The cables run below ground.', explain: 'below ground 是地面以下，不是天空。' },
      { id: 'below ground.q4', senseId: 'below ground.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：在地下；地面以下', options: ['below ground', 'belt', 'benefits'], answer: 'below ground', explain: '中文义对应 below ground。' },
    ],
    usage: { domains: ['工程', '考试'], tone: '中性', commonConfusion: ['below'] },
  });

  D('belt', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'belt', text: '现行词形，词性：noun。' },
        { label: 'belt', text: '腰带；皮带；地带' },
      ],
      mnemonic: '腰上的带子，或一条状区域。',
      note: 'a belt of rain 是一条雨带。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He tightened his belt before the hike.', chinese: '徒步前他系紧了腰带。' },
    ],
    contexts: [
      { domain: '服饰', senseId: 'belt.s1', en: 'The city sits in a belt of heavy industry.', zh: '这座城市位于重工业地带。', structure: 'The city sits in a  / belt /  of heavy industry.', grammar: '可数名词。', rationale: '系在腰上的带子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She ate a belt for breakfast.', right: 'She wore a belt with her coat.', reason: 'belt 是带子或地带，不是早餐。', rule: 'wear a belt；a belt of。', special: 'strip 更一般。' },
    ],
    quiz: [
      { id: 'belt.q1', senseId: 'belt.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A strip worn round the waist, or a region.', options: ['belt', 'bench', 'benevolent'], answer: 'belt', explain: 'belt：腰带；皮带；地带' },
      { id: 'belt.q2', senseId: 'belt.s1', errorType: 'meaning', type: '词义', prompt: 'He tightened his _____ before the hike.', options: ['belt', 'bench', 'benevolent'], answer: 'belt', explain: '空格需要 belt。' },
      { id: 'belt.q3', senseId: 'belt.s1', errorType: 'meaning', type: '易错', prompt: '腰带；皮带；地带 应选哪一句？', options: ['She wore a belt with her coat.', 'She ate a belt for breakfast.', '词形或搭配不对。'], answer: 'She wore a belt with her coat.', explain: 'belt 是带子或地带，不是早餐。' },
      { id: 'belt.q4', senseId: 'belt.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：腰带；皮带；地带', options: ['belt', 'bench', 'benevolent'], answer: 'belt', explain: '中文义对应 belt。' },
    ],
    usage: { domains: ['服饰', '考试'], tone: '中性', commonConfusion: ['strip'] },
  });

  D('bench', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bench', text: '现行词形，词性：noun。' },
        { label: 'bench', text: '长凳；工作台；法官席' },
      ],
      mnemonic: '长座位，或工作的台面。',
      note: 'on the bench。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They sat on a bench and shared the bread.', chinese: '他们坐在长凳上分面包。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bench.s1', en: 'Tools covered the bench in the workshop.', zh: '工作台上摆满了工具。', structure: 'Tools covered the  / bench /  in the workshop.', grammar: '可数名词。', rationale: '可以坐的长椅。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The judge left the bench to go swimming in court shoes only wrong.', right: 'The judge returned to the bench.', reason: 'bench 可以是法官席，但不是去游泳。', rule: 'on a bench。', special: 'bank 是银行或河岸。' },
    ],
    quiz: [
      { id: 'bench.q1', senseId: 'bench.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A long seat; a work table.', options: ['bench', 'bend', 'benign'], answer: 'bench', explain: 'bench：长凳；工作台；法官席' },
      { id: 'bench.q2', senseId: 'bench.s1', errorType: 'meaning', type: '词义', prompt: 'They sat on a _____ and shared the bread.', options: ['bench', 'bend', 'benign'], answer: 'bench', explain: '空格需要 bench。' },
      { id: 'bench.q3', senseId: 'bench.s1', errorType: 'confusable', type: '易错', prompt: '长凳；工作台；法官席 应选哪一句？', options: ['The judge returned to the bench.', 'The judge left the bench to go swimming in court shoes only wrong.', '词形或搭配不对。'], answer: 'The judge returned to the bench.', explain: 'bench 可以是法官席，但不是去游泳。' },
      { id: 'bench.q4', senseId: 'bench.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：长凳；工作台；法官席', options: ['bench', 'bend', 'benign'], answer: 'bench', explain: '中文义对应 bench。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['bank'] },
  });

  D('bend', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bend', text: '现行词形，词性：verb。' },
        { label: 'bend', text: '弯曲；弯腰；弯道' },
      ],
      mnemonic: '从直变成弯。',
      note: '过去式 bent。名词 a bend 是弯道。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Bend your knees when you lift the box.', chinese: '搬箱子时要弯曲膝盖。' },
    ],
    contexts: [
      { domain: '动作', senseId: 'bend.s1', en: 'The road has a sharp bend near the river.', zh: '路在河边有一个急弯。', structure: 'The road has a sharp  / bend /  near the river.', grammar: '动词，祈使句。', rationale: '膝盖需要弯。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He bent the water into a square stone.', right: 'The road bends to the left.', reason: 'bend 是变弯，不是把水变成石头。', rule: 'bend something；a sharp bend。', special: '过去式是 bent 不是 bended。' },
    ],
    quiz: [
      { id: 'bend.q1', senseId: 'bend.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To make something curved; a curve.', options: ['bend', 'beneath', 'bequeath'], answer: 'bend', explain: 'bend：弯曲；弯腰；弯道' },
      { id: 'bend.q2', senseId: 'bend.s1', errorType: 'meaning', type: '词义', prompt: '_____ your knees when you lift the box.', options: ['bend', 'beneath', 'bequeath'], answer: 'bend', explain: '空格需要 bend。' },
      { id: 'bend.q3', senseId: 'bend.s1', errorType: 'grammar', type: '易错', prompt: '弯曲；弯腰；弯道 应选哪一句？', options: ['The road bends to the left.', 'He bent the water into a square stone.', '词形或搭配不对。'], answer: 'The road bends to the left.', explain: 'bend 是变弯，不是把水变成石头。' },
      { id: 'bend.q4', senseId: 'bend.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：弯曲；弯腰；弯道', options: ['bend', 'beneath', 'bequeath'], answer: 'bend', explain: '中文义对应 bend。' },
    ],
    usage: { domains: ['动作', '考试'], tone: '中性', commonConfusion: ['curve'] },
  });

  D('beneath', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beneath', text: '现行词形，词性：preposition。' },
        { label: 'beneath', text: '在……下面；在……之下' },
      ],
      mnemonic: '在底下，也可比喻不屑于。',
      note: '比 under 更书面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The key was beneath the mat.', chinese: '钥匙在垫子下面。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'beneath.s1', en: 'He thinks such work is beneath him.', zh: '他觉得这种工作有失身份。', structure: 'He thinks such work is  / beneath /  him.', grammar: '介词。', rationale: '钥匙的位置在垫子下。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The letter lay beneath of the book.', right: 'The letter lay beneath the book.', reason: 'beneath 不接 of。', rule: 'beneath + 名词。', special: 'below 更常用于数字。' },
    ],
    quiz: [
      { id: 'beneath.q1', senseId: 'beneath.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Under; below.', options: ['beneath', 'benefactor', 'bequest'], answer: 'beneath', explain: 'beneath：在……下面；在……之下' },
      { id: 'beneath.q2', senseId: 'beneath.s1', errorType: 'meaning', type: '词义', prompt: 'The key was _____ the mat.', options: ['beneath', 'benefactor', 'bequest'], answer: 'beneath', explain: '空格需要 beneath。' },
      { id: 'beneath.q3', senseId: 'beneath.s1', errorType: 'grammar', type: '易错', prompt: '在……下面；在……之下 应选哪一句？', options: ['The letter lay beneath the book.', 'The letter lay beneath of the book.', '词形或搭配不对。'], answer: 'The letter lay beneath the book.', explain: 'beneath 不接 of。' },
      { id: 'beneath.q4', senseId: 'beneath.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：在……下面；在……之下', options: ['beneath', 'benefactor', 'bequest'], answer: 'beneath', explain: '中文义对应 beneath。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['below'] },
  });

  D('benefactor', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'benefactor', text: '现行词形，词性：noun。' },
        { label: 'benefactor', text: '捐赠人；恩人' },
      ],
      mnemonic: '把好处送给一项事业的人。',
      note: '正式用词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A benefactor paid for the new books in the library.', chinese: '一位捐赠人出钱买了图书馆的新书。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'benefactor.s1', en: 'The school wrote to thank its benefactor.', zh: '学校写信感谢捐赠人。', structure: 'The school wrote to thank its  / benefactor / .', grammar: '可数名词，指人。', rationale: '出钱买书的人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The benefactor stole the books at night.', right: 'The benefactor gave money for the books.', reason: 'benefactor 是给予帮助的人。', rule: 'a benefactor。', special: 'benefit 是好处或福利，不一定是人。' },
    ],
    quiz: [
      { id: 'benefactor.q1', senseId: 'benefactor.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A person who gives money or help to a good cause.', options: ['benefactor', 'beneficial', 'berate'], answer: 'benefactor', explain: 'benefactor：捐赠人；恩人' },
      { id: 'benefactor.q2', senseId: 'benefactor.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ paid for the new books in the library.', options: ['benefactor', 'beneficial', 'berate'], answer: 'benefactor', explain: '空格需要 benefactor。' },
      { id: 'benefactor.q3', senseId: 'benefactor.s1', errorType: 'meaning', type: '易错', prompt: '捐赠人；恩人 应选哪一句？', options: ['The benefactor gave money for the books.', 'The benefactor stole the books at night.', '词形或搭配不对。'], answer: 'The benefactor gave money for the books.', explain: 'benefactor 是给予帮助的人。' },
      { id: 'benefactor.q4', senseId: 'benefactor.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：捐赠人；恩人', options: ['benefactor', 'beneficial', 'berate'], answer: 'benefactor', explain: '中文义对应 benefactor。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['benefit'] },
  });

  D('beneficial', {
    etymology: {
      origin: '英语派生：与 benefit 同族的形容词',
      prefix: null,
      root: { text: 'benefit', gloss: '好处' },
      suffix: null,
      history: [
        { label: 'benefit', text: '好处，是后来派生的基础。' },
        { label: 'beneficial', text: '有益的；有利的' },
      ],
      mnemonic: '带来好处的。',
      note: 'beneficial to somebody。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A short walk is beneficial after a long meeting.', chinese: '长会之后走一小段路是有益的。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'beneficial.s1', en: 'The change was beneficial to younger students.', zh: '这项改变对较年幼的学生有利。', structure: 'The change was  / beneficial /  to younger students.', grammar: '形容词作表语。', rationale: '散步产生好的效果。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Noise is beneficial to sleep in this wrong example.', right: 'Quiet is beneficial to sleep.', reason: '有益用 beneficial to。', rule: 'beneficial to。', special: 'benefit 可作名词或动词。' },
    ],
    quiz: [
      { id: 'beneficial.q1', senseId: 'beneficial.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Helpful; producing a good result.', options: ['beneficial', 'benefit', 'bereave'], answer: 'beneficial', explain: 'beneficial：有益的；有利的' },
      { id: 'beneficial.q2', senseId: 'beneficial.s1', errorType: 'meaning', type: '词义', prompt: 'A short walk is _____ after a long meeting.', options: ['beneficial', 'benefit', 'bereave'], answer: 'beneficial', explain: '空格需要 beneficial。' },
      { id: 'beneficial.q3', senseId: 'beneficial.s1', errorType: 'collocation', type: '易错', prompt: '有益的；有利的 应选哪一句？', options: ['Quiet is beneficial to sleep.', 'Noise is beneficial to sleep in this wrong example.', '词形或搭配不对。'], answer: 'Quiet is beneficial to sleep.', explain: '有益用 beneficial to。' },
      { id: 'beneficial.q4', senseId: 'beneficial.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：有益的；有利的', options: ['beneficial', 'benefit', 'bereave'], answer: 'beneficial', explain: '中文义对应 beneficial。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['benefit'] },
  });

  D('benefit', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'benefit', text: '现行词形，词性：noun。' },
        { label: 'benefit', text: '好处；福利；受益' },
      ],
      mnemonic: '得到的好处。',
      note: '名词 a benefit of；动词 benefit from。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The main benefit of the plan is cleaner air.', chinese: '这个计划的主要好处是空气更干净。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'benefit.s1', en: 'Students benefit from a quiet reading hour.', zh: '学生从一个安静的阅读小时里受益。', structure: 'Students  / benefit /  from a quiet reading hour.', grammar: '名词。', rationale: '计划带来的优点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They benefit of the plan with no from.', right: 'They benefit from the plan.', reason: '动词用法是 benefit from。', rule: 'benefit from something。', special: '形容词是 beneficial。' },
    ],
    quiz: [
      { id: 'benefit.q1', senseId: 'benefit.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: An advantage; money or help; to gain.', options: ['benefit', 'benefits', 'berry'], answer: 'benefit', explain: 'benefit：好处；福利；受益' },
      { id: 'benefit.q2', senseId: 'benefit.s1', errorType: 'meaning', type: '词义', prompt: 'The main _____ of the plan is cleaner air.', options: ['benefit', 'benefits', 'berry'], answer: 'benefit', explain: '空格需要 benefit。' },
      { id: 'benefit.q3', senseId: 'benefit.s1', errorType: 'collocation', type: '易错', prompt: '好处；福利；受益 应选哪一句？', options: ['They benefit from the plan.', 'They benefit of the plan with no from.', '词形或搭配不对。'], answer: 'They benefit from the plan.', explain: '动词用法是 benefit from。' },
      { id: 'benefit.q4', senseId: 'benefit.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：好处；福利；受益', options: ['benefit', 'benefits', 'berry'], answer: 'benefit', explain: '中文义对应 benefit。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['beneficial'] },
  });

  D('benefits', {
    etymology: {
      origin: '英语派生：benefit + -s',
      prefix: null,
      root: { text: 'benefit', gloss: '好处' },
      suffix: { text: '-s', gloss: '复数' },
      history: [
        { label: 'benefit', text: '好处，是后来派生的基础。' },
        { label: 'benefits', text: '福利；好处' },
      ],
      mnemonic: '多项好处或员工福利。',
      note: 'employee benefits。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The job offers benefits such as a free health check.', chinese: '这份工作提供免费体检之类的福利。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'benefits.s1', en: 'The benefits of sleep are easy to notice.', zh: '睡眠的好处很容易察觉。', structure: 'The  / benefits /  of sleep are easy to notice.', grammar: '复数名词。', rationale: '工作附带的多项待遇。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'One benefits is a verb here.', right: 'The benefits include a health check.', reason: 'benefits 在本句是名词复数。', rule: '复数 benefits。', special: '单数是 benefit。' },
    ],
    quiz: [
      { id: 'benefits.q1', senseId: 'benefits.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Extra advantages, or good effects.', options: ['benefits', 'benevolent', 'berth'], answer: 'benefits', explain: 'benefits：福利；好处' },
      { id: 'benefits.q2', senseId: 'benefits.s1', errorType: 'meaning', type: '词义', prompt: 'The job offers _____ such as a free health check.', options: ['benefits', 'benevolent', 'berth'], answer: 'benefits', explain: '空格需要 benefits。' },
      { id: 'benefits.q3', senseId: 'benefits.s1', errorType: 'grammar', type: '易错', prompt: '福利；好处 应选哪一句？', options: ['The benefits include a health check.', 'One benefits is a verb here.', '词形或搭配不对。'], answer: 'The benefits include a health check.', explain: 'benefits 在本句是名词复数。' },
      { id: 'benefits.q4', senseId: 'benefits.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：福利；好处', options: ['benefits', 'benevolent', 'berth'], answer: 'benefits', explain: '中文义对应 benefits。' },
    ],
    usage: { domains: ['工作', '考试'], tone: '中性', commonConfusion: ['benefit'] },
  });

  D('benevolent', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'benevolent', text: '现行词形，词性：adjective。' },
        { label: 'benevolent', text: '仁慈的；慈善的' },
      ],
      mnemonic: '心里想着对人好。',
      note: '语气正式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A benevolent neighbour brought soup to the sick family.', chinese: '一位仁慈的邻居给生病的那家人送了汤。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'benevolent.s1', en: 'The fund has a benevolent aim.', zh: '这笔基金有慈善的目的。', structure: 'The fund has a  / benevolent /  aim.', grammar: '形容词。', rationale: '邻居的好意。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A benevolent plan was to harm the guests.', right: 'A benevolent plan aims to help.', reason: '仁慈的计划是要帮助人。', rule: 'benevolent + 名词。', special: 'beneficial 是有益，不一定强调心意善良。' },
    ],
    quiz: [
      { id: 'benevolent.q1', senseId: 'benevolent.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Kind and wishing to help others.', options: ['benevolent', 'benign', 'beset'], answer: 'benevolent', explain: 'benevolent：仁慈的；慈善的' },
      { id: 'benevolent.q2', senseId: 'benevolent.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ neighbour brought soup to the sick family.', options: ['benevolent', 'benign', 'beset'], answer: 'benevolent', explain: '空格需要 benevolent。' },
      { id: 'benevolent.q3', senseId: 'benevolent.s1', errorType: 'meaning', type: '易错', prompt: '仁慈的；慈善的 应选哪一句？', options: ['A benevolent plan aims to help.', 'A benevolent plan was to harm the guests.', '词形或搭配不对。'], answer: 'A benevolent plan aims to help.', explain: '仁慈的计划是要帮助人。' },
      { id: 'benevolent.q4', senseId: 'benevolent.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：仁慈的；慈善的', options: ['benevolent', 'benign', 'beset'], answer: 'benevolent', explain: '中文义对应 benevolent。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['beneficial'] },
  });

  D('benign', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'benign', text: '现行词形，词性：adjective。' },
        { label: 'benign', text: '良性的；和蔼的；温和的' },
      ],
      mnemonic: '不危险，或态度温和。',
      note: '医学反义常用 malignant，本条不展开治疗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The doctor said the growth was benign.', chinese: '医生说那处增生是良性的。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'benign.s1', en: 'He gave a benign smile and let the child finish.', zh: '他和蔼地笑了笑，让孩子把话说完。', structure: 'He gave a  / benign /  smile and let the child finish.', grammar: '形容词作表语。', rationale: '医生判断危险性低。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A benign tumour is always a storm at sea.', right: 'A benign result is not dangerous.', reason: 'benign 在医学里是良性，不是海上的风暴。', rule: 'a benign tumour；a benign smile。', special: 'kind 只表善良，没有医学义。' },
    ],
    quiz: [
      { id: 'benign.q1', senseId: 'benign.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Not dangerous; kind; mild.', options: ['benign', 'bequeath', 'beside'], answer: 'benign', explain: 'benign：良性的；和蔼的；温和的' },
      { id: 'benign.q2', senseId: 'benign.s1', errorType: 'meaning', type: '词义', prompt: 'The doctor said the growth was _____.', options: ['benign', 'bequeath', 'beside'], answer: 'benign', explain: '空格需要 benign。' },
      { id: 'benign.q3', senseId: 'benign.s1', errorType: 'meaning', type: '易错', prompt: '良性的；和蔼的；温和的 应选哪一句？', options: ['A benign result is not dangerous.', 'A benign tumour is always a storm at sea.', '词形或搭配不对。'], answer: 'A benign result is not dangerous.', explain: 'benign 在医学里是良性，不是海上的风暴。' },
      { id: 'benign.q4', senseId: 'benign.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：良性的；和蔼的；温和的', options: ['benign', 'bequeath', 'beside'], answer: 'benign', explain: '中文义对应 benign。' },
    ],
    usage: { domains: ['医学', '考试'], tone: '中性', commonConfusion: ['kind'] },
  });

  D('bequeath', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bequeath', text: '现行词形，词性：verb。' },
        { label: 'bequeath', text: '遗赠；传下' },
      ],
      mnemonic: '通过遗嘱把东西交给某人。',
      note: 'bequeath something to somebody。正式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She will bequeath the piano to her niece.', chinese: '她将把钢琴遗赠给侄女。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'bequeath.s1', en: 'An artist may bequeath sketches to a museum.', zh: '艺术家可以把素描遗赠给博物馆。', structure: 'An artist may  / bequeath /  sketches to a museum.', grammar: '及物动词，to 接接受人。', rationale: '钢琴在遗嘱中给侄女。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He bequeathed the lunch to the bin as a will.', right: 'He bequeathed the books to the school.', reason: '遗赠的是遗嘱里留下的财物。', rule: 'bequeath something to somebody。', special: '日常给予用 give。' },
    ],
    quiz: [
      { id: 'bequeath.q1', senseId: 'bequeath.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To leave money or property in a will.', options: ['bequeath', 'bequest', 'besides'], answer: 'bequeath', explain: 'bequeath：遗赠；传下' },
      { id: 'bequeath.q2', senseId: 'bequeath.s1', errorType: 'meaning', type: '词义', prompt: 'She will _____ the piano to her niece.', options: ['bequeath', 'bequest', 'besides'], answer: 'bequeath', explain: '空格需要 bequeath。' },
      { id: 'bequeath.q3', senseId: 'bequeath.s1', errorType: 'collocation', type: '易错', prompt: '遗赠；传下 应选哪一句？', options: ['He bequeathed the books to the school.', 'He bequeathed the lunch to the bin as a will.', '词形或搭配不对。'], answer: 'He bequeathed the books to the school.', explain: '遗赠的是遗嘱里留下的财物。' },
      { id: 'bequeath.q4', senseId: 'bequeath.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：遗赠；传下', options: ['bequeath', 'bequest', 'besides'], answer: 'bequeath', explain: '中文义对应 bequeath。' },
    ],
    usage: { domains: ['法律', '考试'], tone: '中性', commonConfusion: ['give'] },
  });

  D('bequest', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bequest', text: '现行词形，词性：noun。' },
        { label: 'bequest', text: '遗赠物；遗产' },
      ],
      mnemonic: '遗嘱里留下的那一份。',
      note: 'a bequest of。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The library received a bequest of rare maps.', chinese: '图书馆收到一批作为遗赠的珍稀地图。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'bequest.s1', en: 'A small bequest paid for the childrens books.', zh: '一小笔遗赠支付了儿童书籍的费用。', structure: 'A small  / bequest /  paid for the childrens books.', grammar: '可数名词。', rationale: '死后留下给图书馆的地图。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bequest was eaten at lunch.', right: 'The bequest paid for new books.', reason: 'bequest 是遗嘱留下的财物。', rule: 'a bequest of something。', special: 'gift 不一定来自遗嘱。' },
    ],
    quiz: [
      { id: 'bequest.q1', senseId: 'bequest.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Money or property given in a will.', options: ['bequest', 'berate', 'besiege'], answer: 'bequest', explain: 'bequest：遗赠物；遗产' },
      { id: 'bequest.q2', senseId: 'bequest.s1', errorType: 'meaning', type: '词义', prompt: 'The library received a _____ of rare maps.', options: ['bequest', 'berate', 'besiege'], answer: 'bequest', explain: '空格需要 bequest。' },
      { id: 'bequest.q3', senseId: 'bequest.s1', errorType: 'meaning', type: '易错', prompt: '遗赠物；遗产 应选哪一句？', options: ['The bequest paid for new books.', 'The bequest was eaten at lunch.', '词形或搭配不对。'], answer: 'The bequest paid for new books.', explain: 'bequest 是遗嘱留下的财物。' },
      { id: 'bequest.q4', senseId: 'bequest.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：遗赠物；遗产', options: ['bequest', 'berate', 'besiege'], answer: 'bequest', explain: '中文义对应 bequest。' },
    ],
    usage: { domains: ['法律', '考试'], tone: '中性', commonConfusion: ['gift'] },
  });

  D('berate', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'berate', text: '现行词形，词性：verb。' },
        { label: 'berate', text: '严斥；痛骂' },
      ],
      mnemonic: '言辞又长又凶。',
      note: 'berate somebody for something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The manager began to berate the staff in front of customers.', chinese: '经理开始当着顾客的面痛骂员工。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'berate.s1', en: 'Do not berate a child for a small mistake.', zh: '不要为了一点小错痛骂孩子。', structure: 'Do not  / berate /  a child for a small mistake.', grammar: '及物动词。', rationale: '当众严厉责骂。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She berated him with a quiet prize.', right: 'She berated him for being late.', reason: 'berate 是长时间严厉责备。', rule: 'berate somebody for。', special: 'praise 是夸奖。' },
    ],
    quiz: [
      { id: 'berate.q1', senseId: 'berate.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To scold someone angrily for a long time.', options: ['berate', 'bereave', 'bespoke'], answer: 'berate', explain: 'berate：严斥；痛骂' },
      { id: 'berate.q2', senseId: 'berate.s1', errorType: 'meaning', type: '词义', prompt: 'The manager began to _____ the staff in front of customers.', options: ['berate', 'bereave', 'bespoke'], answer: 'berate', explain: '空格需要 berate。' },
      { id: 'berate.q3', senseId: 'berate.s1', errorType: 'collocation', type: '易错', prompt: '严斥；痛骂 应选哪一句？', options: ['She berated him for being late.', 'She berated him with a quiet prize.', '词形或搭配不对。'], answer: 'She berated him for being late.', explain: 'berate 是长时间严厉责备。' },
      { id: 'berate.q4', senseId: 'berate.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：严斥；痛骂', options: ['berate', 'bereave', 'bespoke'], answer: 'berate', explain: '中文义对应 berate。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['praise'] },
  });

  D('bereave', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bereave', text: '现行词形，词性：verb。' },
        { label: 'bereave', text: '使丧失（亲人）' },
      ],
      mnemonic: '把亲近的人从某人身边夺走。',
      note: '更常见的是形容词 bereaved。动词较正式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The war will bereave many families of their sons.', chinese: '战争会使许多家庭失去儿子。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'bereave.s1', en: 'Nothing can bereave her of those memories.', zh: '没有什么能夺走她那些记忆。', structure: 'Nothing can  / bereave /  her of those memories.', grammar: '及物动词，of 接失去的人。', rationale: '家庭失去儿子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The holiday will bereave them of a picnic basket only as death wrong.', right: 'The illness bereaved them of their father.', reason: 'bereave somebody of 常与死亡带来的丧失有关。', rule: 'bereave somebody of somebody。', special: '日常说 lose。' },
    ],
    quiz: [
      { id: 'bereave.q1', senseId: 'bereave.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To take a loved person away by death.', options: ['bereave', 'berry', 'best'], answer: 'bereave', explain: 'bereave：使丧失（亲人）' },
      { id: 'bereave.q2', senseId: 'bereave.s1', errorType: 'meaning', type: '词义', prompt: 'The war will _____ many families of their sons.', options: ['bereave', 'berry', 'best'], answer: 'bereave', explain: '空格需要 bereave。' },
      { id: 'bereave.q3', senseId: 'bereave.s1', errorType: 'collocation', type: '易错', prompt: '使丧失（亲人） 应选哪一句？', options: ['The illness bereaved them of their father.', 'The holiday will bereave them of a picnic basket only as death wrong.', '词形或搭配不对。'], answer: 'The illness bereaved them of their father.', explain: 'bereave somebody of 常与死亡带来的丧失有关。' },
      { id: 'bereave.q4', senseId: 'bereave.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：使丧失（亲人）', options: ['bereave', 'berry', 'best'], answer: 'bereave', explain: '中文义对应 bereave。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['lose'] },
  });

  D('berry', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'berry', text: '现行词形，词性：noun。' },
        { label: 'berry', text: '浆果' },
      ],
      mnemonic: '小软水果，复数 berries。',
      note: '单数 berry，复数要变 y 为 ies。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She picked a berry and found it was still sour.', chinese: '她摘了一颗浆果，发现还是酸的。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'berry.s1', en: 'The birds ate every berry on the bush.', zh: '鸟把灌木上的浆果吃光了。', structure: 'The birds ate every  / berry /  on the bush.', grammar: '可数名词。', rationale: '从植株上摘的小果。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He baked a berry of stone.', right: 'He ate a ripe berry.', reason: 'berry 是小而软的果实。', rule: 'a berry；berries。', special: 'cherry 是樱桃，也是一种小果。' },
    ],
    quiz: [
      { id: 'berry.q1', senseId: 'berry.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A small soft fruit.', options: ['berry', 'berth', 'best-seller'], answer: 'berry', explain: 'berry：浆果' },
      { id: 'berry.q2', senseId: 'berry.s1', errorType: 'meaning', type: '词义', prompt: 'She picked a _____ and found it was still sour.', options: ['berry', 'berth', 'best-seller'], answer: 'berry', explain: '空格需要 berry。' },
      { id: 'berry.q3', senseId: 'berry.s1', errorType: 'grammar', type: '易错', prompt: '浆果 应选哪一句？', options: ['He ate a ripe berry.', 'He baked a berry of stone.', '词形或搭配不对。'], answer: 'He ate a ripe berry.', explain: 'berry 是小而软的果实。' },
      { id: 'berry.q4', senseId: 'berry.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：浆果', options: ['berry', 'berth', 'best-seller'], answer: 'berry', explain: '中文义对应 berry。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['cherry'] },
  });

  D('berth', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'berth', text: '现行词形，词性：noun。' },
        { label: 'berth', text: '泊位；卧铺' },
      ],
      mnemonic: '船停的位子，或车上的床。',
      note: 'give somebody a wide berth 是躲开某人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The ship waited for a berth in the crowded harbour.', chinese: '船在拥挤的港口等候一个泊位。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'berth.s1', en: 'She slept in the upper berth on the night train.', zh: '她睡在夜车的上铺。', structure: 'She slept in the upper  / berth /  on the night train.', grammar: '可数名词。', rationale: '港口里供船停靠的位置。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He parked a berth in the sky.', right: 'The ship found a berth at the dock.', reason: 'berth 是船的停靠位置或铺位。', rule: 'a berth；an upper berth。', special: '普通床是 bed。' },
    ],
    quiz: [
      { id: 'berth.q1', senseId: 'berth.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A place for a ship to stop, or a bed on a train or ship.', options: ['berth', 'beset', 'bet'], answer: 'berth', explain: 'berth：泊位；卧铺' },
      { id: 'berth.q2', senseId: 'berth.s1', errorType: 'meaning', type: '词义', prompt: 'The ship waited for a _____ in the crowded harbour.', options: ['berth', 'beset', 'bet'], answer: 'berth', explain: '空格需要 berth。' },
      { id: 'berth.q3', senseId: 'berth.s1', errorType: 'meaning', type: '易错', prompt: '泊位；卧铺 应选哪一句？', options: ['The ship found a berth at the dock.', 'He parked a berth in the sky.', '词形或搭配不对。'], answer: 'The ship found a berth at the dock.', explain: 'berth 是船的停靠位置或铺位。' },
      { id: 'berth.q4', senseId: 'berth.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：泊位；卧铺', options: ['berth', 'beset', 'bet'], answer: 'berth', explain: '中文义对应 berth。' },
    ],
    usage: { domains: ['交通', '考试'], tone: '中性', commonConfusion: ['bed'] },
  });

  D('beset', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beset', text: '现行词形，词性：verb。' },
        { label: 'beset', text: '困扰；围攻' },
      ],
      mnemonic: '从四周逼上来。',
      note: 'be beset by。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Doubts beset her the night before the exam.', chinese: '考试前一夜，疑虑困扰着她。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'beset.s1', en: 'The town was beset by storms for a week.', zh: '小镇被风暴困扰了一周。', structure: 'The town was  / beset /  by storms for a week.', grammar: '及物动词，主语可以是困扰。', rationale: '疑虑围着她。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Friends beset her with a quiet empty room of joy only wrong.', right: 'Problems beset the new plan.', reason: 'beset 是四面而来的麻烦或攻击。', rule: 'be beset by something。', special: 'set 是放置或一套。' },
    ],
    quiz: [
      { id: 'beset.q1', senseId: 'beset.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To trouble or attack from all sides.', options: ['beset', 'beside', 'betray'], answer: 'beset', explain: 'beset：困扰；围攻' },
      { id: 'beset.q2', senseId: 'beset.s1', errorType: 'meaning', type: '词义', prompt: 'Doubts _____ her the night before the exam.', options: ['beset', 'beside', 'betray'], answer: 'beset', explain: '空格需要 beset。' },
      { id: 'beset.q3', senseId: 'beset.s1', errorType: 'collocation', type: '易错', prompt: '困扰；围攻 应选哪一句？', options: ['Problems beset the new plan.', 'Friends beset her with a quiet empty room of joy only wrong.', '词形或搭配不对。'], answer: 'Problems beset the new plan.', explain: 'beset 是四面而来的麻烦或攻击。' },
      { id: 'beset.q4', senseId: 'beset.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：困扰；围攻', options: ['beset', 'beside', 'betray'], answer: 'beset', explain: '中文义对应 beset。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['set'] },
  });

  D('beside', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beside', text: '现行词形，词性：preposition。' },
        { label: 'beside', text: '在……旁边；与……相比' },
      ],
      mnemonic: '在旁边；也有相比的用法。',
      note: '不要和 besides 混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The lamp stood beside the bed.', chinese: '灯立在床边。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'beside.s1', en: 'Your work looks strong beside his first draft.', zh: '比起他的初稿，你的作业显得扎实。', structure: 'Your work looks strong  / beside /  his first draft.', grammar: '介词。', rationale: '灯的位置在床侧。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She sat beside of the window.', right: 'She sat beside the window.', reason: 'beside 不加 of。', rule: 'beside + 名词，表示在旁或相比。', special: 'besides 是除此之外、而且。' },
    ],
    quiz: [
      { id: 'beside.q1', senseId: 'beside.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Next to; compared with.', options: ['beside', 'besides', 'better'], answer: 'beside', explain: 'beside：在……旁边；与……相比' },
      { id: 'beside.q2', senseId: 'beside.s1', errorType: 'meaning', type: '词义', prompt: 'The lamp stood _____ the bed.', options: ['beside', 'besides', 'better'], answer: 'beside', explain: '空格需要 beside。' },
      { id: 'beside.q3', senseId: 'beside.s1', errorType: 'confusable', type: '易错', prompt: '在……旁边；与……相比 应选哪一句？', options: ['She sat beside the window.', 'She sat beside of the window.', '词形或搭配不对。'], answer: 'She sat beside the window.', explain: 'beside 不加 of。' },
      { id: 'beside.q4', senseId: 'beside.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：在……旁边；与……相比', options: ['beside', 'besides', 'better'], answer: 'beside', explain: '中文义对应 beside。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['besides'] },
  });

  D('besides', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'besides', text: '现行词形，词性：preposition。' },
        { label: 'besides', text: '除……之外（还）；而且' },
      ],
      mnemonic: 'besides 多一个 s，多一层还有。',
      note: '可作介词或副词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Besides the map, we need water and a lamp.', chinese: '除了地图，我们还需要水和灯。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'besides.s1', en: 'I do not want to go; besides, it is too late.', zh: '我不想去；而且也太晚了。', structure: 'I do not want to go;  / besides / , it is too late.', grammar: '介词。', rationale: '地图之外还有别的必需品。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He stood besides the door.', right: 'He stood beside the door. Besides the key, take a lamp.', reason: '在旁边用 beside；除此之外用 besides。', rule: 'besides + 名词表示除了还有。', special: 'beside 是在旁边。' },
    ],
    quiz: [
      { id: 'besides.q1', senseId: 'besides.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: In addition to; also.', options: ['besides', 'besiege', 'between'], answer: 'besides', explain: 'besides：除……之外（还）；而且' },
      { id: 'besides.q2', senseId: 'besides.s1', errorType: 'meaning', type: '词义', prompt: '_____ the map, we need water and a lamp.', options: ['besides', 'besiege', 'between'], answer: 'besides', explain: '空格需要 besides。' },
      { id: 'besides.q3', senseId: 'besides.s1', errorType: 'confusable', type: '易错', prompt: '除……之外（还）；而且 应选哪一句？', options: ['He stood beside the door. Besides the key, take a lamp.', 'He stood besides the door.', '词形或搭配不对。'], answer: 'He stood beside the door. Besides the key, take a lamp.', explain: '在旁边用 beside；除此之外用 besides。' },
      { id: 'besides.q4', senseId: 'besides.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：除……之外（还）；而且', options: ['besides', 'besiege', 'between'], answer: 'besides', explain: '中文义对应 besides。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['beside'] },
  });

  D('besiege', {
    etymology: {
      origin: '英语派生：与 siege 相关，前加 be-',
      prefix: null,
      root: { text: 'siege', gloss: '围困' },
      suffix: null,
      history: [
        { label: 'siege', text: '围困，是后来派生的基础。' },
        { label: 'besiege', text: '围攻；包围；纷纷要求' },
      ],
      mnemonic: '像围城一样团团围住。',
      note: 'besiege somebody with questions。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Readers began to besiege the author with questions.', chinese: '读者开始用问题把作者围住。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'besiege.s1', en: 'Troops moved to besiege the town before winter.', zh: '部队在冬天之前进发去围城。', structure: 'Troops moved to  / besiege /  the town before winter.', grammar: '及物动词。', rationale: '问题从四面八方来。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They besieged the cake with silence and left it.', right: 'Fans besieged the stage door.', reason: 'besiege 是围住或不断要求。', rule: 'besiege somebody with something。', special: 'surround 不一定带攻打或追问。' },
    ],
    quiz: [
      { id: 'besiege.q1', senseId: 'besiege.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To surround a place, or to press someone with requests.', options: ['besiege', 'bespoke', 'beverage'], answer: 'besiege', explain: 'besiege：围攻；包围；纷纷要求' },
      { id: 'besiege.q2', senseId: 'besiege.s1', errorType: 'meaning', type: '词义', prompt: 'Readers began to _____ the author with questions.', options: ['besiege', 'bespoke', 'beverage'], answer: 'besiege', explain: '空格需要 besiege。' },
      { id: 'besiege.q3', senseId: 'besiege.s1', errorType: 'collocation', type: '易错', prompt: '围攻；包围；纷纷要求 应选哪一句？', options: ['Fans besieged the stage door.', 'They besieged the cake with silence and left it.', '词形或搭配不对。'], answer: 'Fans besieged the stage door.', explain: 'besiege 是围住或不断要求。' },
      { id: 'besiege.q4', senseId: 'besiege.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：围攻；包围；纷纷要求', options: ['besiege', 'bespoke', 'beverage'], answer: 'besiege', explain: '中文义对应 besiege。' },
    ],
    usage: { domains: ['新闻', '考试'], tone: '中性', commonConfusion: ['surround'] },
  });

  D('bespoke', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bespoke', text: '现行词形，词性：adjective。' },
        { label: 'bespoke', text: '定制的；待议的' },
      ],
      mnemonic: '按一个人的要求做。',
      note: '英式也有仍在讨论中的意思，本条先记定制。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He ordered a bespoke suit for the wedding.', chinese: '他为婚礼定做了一套西装。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bespoke.s1', en: 'The shop sells bespoke shoes, not ready-made ones.', zh: '这家店卖定制鞋，不卖成衣码。', structure: 'The shop sells  / bespoke /  shoes, not ready-made ones.', grammar: '形容词作定语。', rationale: '西装按婚礼需要单做。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A bespoke suit is made for nobody and everybody the same.', right: 'A bespoke suit is made for one customer.', reason: '定制是为特定的人做的。', rule: 'bespoke + 名词。', special: 'spoken 是说出口的。' },
    ],
    quiz: [
      { id: 'bespoke.q1', senseId: 'bespoke.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Made specially for one person.', options: ['bespoke', 'best', 'beware'], answer: 'bespoke', explain: 'bespoke：定制的；待议的' },
      { id: 'bespoke.q2', senseId: 'bespoke.s1', errorType: 'meaning', type: '词义', prompt: 'He ordered a _____ suit for the wedding.', options: ['bespoke', 'best', 'beware'], answer: 'bespoke', explain: '空格需要 bespoke。' },
      { id: 'bespoke.q3', senseId: 'bespoke.s1', errorType: 'meaning', type: '易错', prompt: '定制的；待议的 应选哪一句？', options: ['A bespoke suit is made for one customer.', 'A bespoke suit is made for nobody and everybody the same.', '词形或搭配不对。'], answer: 'A bespoke suit is made for one customer.', explain: '定制是为特定的人做的。' },
      { id: 'bespoke.q4', senseId: 'bespoke.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：定制的；待议的', options: ['bespoke', 'best', 'beware'], answer: 'bespoke', explain: '中文义对应 bespoke。' },
    ],
    usage: { domains: ['商业', '考试'], tone: '中性', commonConfusion: ['spoken'] },
  });

  D('best', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'best', text: '现行词形，词性：adjective。' },
        { label: 'best', text: '最好的；最好地；最佳者' },
      ],
      mnemonic: 'good 的最高级。',
      note: 'the best；do your best。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This is the best answer in the whole set.', chinese: '这是整套题里最好的答案。' },
    ],
    contexts: [
      { domain: '评价', senseId: 'best.s1', en: 'She did her best and then stopped worrying.', zh: '她尽了最大努力，然后就不再焦虑。', structure: 'She did her  / best /  and then stopped worrying.', grammar: '最高级形容词。', rationale: '一组中质量最高。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He is the best of the worst choice here wrong.', right: 'She gave the best answer.', reason: 'best 是最高程度的好。', rule: 'the best + 名词。', special: '两者之间用 better。' },
    ],
    quiz: [
      { id: 'best.q1', senseId: 'best.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Of the highest quality.', options: ['best', 'best-seller', 'bewilder'], answer: 'best', explain: 'best：最好的；最好地；最佳者' },
      { id: 'best.q2', senseId: 'best.s1', errorType: 'meaning', type: '词义', prompt: 'This is the _____ answer in the whole set.', options: ['best', 'best-seller', 'bewilder'], answer: 'best', explain: '空格需要 best。' },
      { id: 'best.q3', senseId: 'best.s1', errorType: 'grammar', type: '易错', prompt: '最好的；最好地；最佳者 应选哪一句？', options: ['She gave the best answer.', 'He is the best of the worst choice here wrong.', '词形或搭配不对。'], answer: 'She gave the best answer.', explain: 'best 是最高程度的好。' },
      { id: 'best.q4', senseId: 'best.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：最好的；最好地；最佳者', options: ['best', 'best-seller', 'bewilder'], answer: 'best', explain: '中文义对应 best。' },
    ],
    usage: { domains: ['评价', '考试'], tone: '中性', commonConfusion: ['better'] },
  });

  D('best-seller', {
    etymology: {
      origin: '英语派生：best + seller',
      prefix: null,
      root: { text: 'sell', gloss: '出售' },
      suffix: null,
      history: [
        { label: 'sell', text: '出售，是后来派生的基础。' },
        { label: 'best-seller', text: '畅销书；畅销品' },
      ],
      mnemonic: '卖得最好的那一本。',
      note: '连字符形式与词条一致。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her novel became a best-seller in May.', chinese: '她的小说在五月成了畅销书。' },
    ],
    contexts: [
      { domain: '出版', senseId: 'best-seller.s1', en: 'The shop put the best-seller near the door.', zh: '书店把畅销书放在门口。', structure: 'The shop put the  / best-seller /  near the door.', grammar: '可数名词。', rationale: '销量很大的小说。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A best-seller is a book that nobody buys.', right: 'A best-seller is bought by very many people.', reason: '畅销就是卖得很多。', rule: 'a best-seller。', special: 'best 只是最好，不一定在卖。' },
    ],
    quiz: [
      { id: 'best-seller.q1', senseId: 'best-seller.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A book or product that sells in very large numbers.', options: ['best-seller', 'bet', 'beyond'], answer: 'best-seller', explain: 'best-seller：畅销书；畅销品' },
      { id: 'best-seller.q2', senseId: 'best-seller.s1', errorType: 'meaning', type: '词义', prompt: 'Her novel became a _____ in May.', options: ['best-seller', 'bet', 'beyond'], answer: 'best-seller', explain: '空格需要 best-seller。' },
      { id: 'best-seller.q3', senseId: 'best-seller.s1', errorType: 'meaning', type: '易错', prompt: '畅销书；畅销品 应选哪一句？', options: ['A best-seller is bought by very many people.', 'A best-seller is a book that nobody buys.', '词形或搭配不对。'], answer: 'A best-seller is bought by very many people.', explain: '畅销就是卖得很多。' },
      { id: 'best-seller.q4', senseId: 'best-seller.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：畅销书；畅销品', options: ['best-seller', 'bet', 'beyond'], answer: 'best-seller', explain: '中文义对应 best-seller。' },
    ],
    usage: { domains: ['出版', '考试'], tone: '中性', commonConfusion: ['best'] },
  });

  D('bet', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bet', text: '现行词形，词性：verb。' },
        { label: 'bet', text: '打赌；赌注；肯定' },
      ],
      mnemonic: '拿结果冒险，或口语里表示很有把握。',
      note: 'bet on something。过去式 bet 或 betted。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I would not bet money on such an uncertain race.', chinese: '这么没准的比赛，我不会拿钱去赌。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'bet.s1', en: 'I bet she is already on the train.', zh: '我敢说她已经在火车上了。', structure: 'I  / bet /  she is already on the train.', grammar: '动词。', rationale: '不愿把钱押在没把握的比赛上。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He bet the sun to fall upward.', right: 'He bet a small sum on the game.', reason: 'bet on 表示押在某个结果上。', rule: 'bet on；I bet + 从句。', special: 'bid 是出价或投标。' },
    ],
    quiz: [
      { id: 'bet.q1', senseId: 'bet.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To risk money on a result; to be sure.', options: ['bet', 'betray', 'bias'], answer: 'bet', explain: 'bet：打赌；赌注；肯定' },
      { id: 'bet.q2', senseId: 'bet.s1', errorType: 'meaning', type: '词义', prompt: 'I would not _____ money on such an uncertain race.', options: ['bet', 'betray', 'bias'], answer: 'bet', explain: '空格需要 bet。' },
      { id: 'bet.q3', senseId: 'bet.s1', errorType: 'collocation', type: '易错', prompt: '打赌；赌注；肯定 应选哪一句？', options: ['He bet a small sum on the game.', 'He bet the sun to fall upward.', '词形或搭配不对。'], answer: 'He bet a small sum on the game.', explain: 'bet on 表示押在某个结果上。' },
      { id: 'bet.q4', senseId: 'bet.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：打赌；赌注；肯定', options: ['bet', 'betray', 'bias'], answer: 'bet', explain: '中文义对应 bet。' },
    ],
    usage: { domains: ['口语', '考试'], tone: '中性', commonConfusion: ['bid'] },
  });

  D('betray', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'betray', text: '现行词形，词性：verb。' },
        { label: 'betray', text: '背叛；出卖；流露' },
      ],
      mnemonic: '背弃信任，或情绪自己露出来。',
      note: 'betray somebody；betray a feeling。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He would not betray a friend to save himself.', chinese: '他不会为了自保而背叛朋友。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'betray.s1', en: 'Her shaking hands betray her fear.', zh: '她发抖的手流露出恐惧。', structure: 'Her shaking hands  / betray /  her fear.', grammar: '及物动词。', rationale: '不肯把朋友交出去。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They betray the secret by hiding it forever in this wrong line.', right: 'His face betrayed his worry.', reason: 'betray 可以是故意出卖，也可以是不自觉流露。', rule: 'betray somebody；betray fear。', special: 'show 是有意展示时更中性。' },
    ],
    quiz: [
      { id: 'betray.q1', senseId: 'betray.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To be disloyal, or to show a feeling without meaning to.', options: ['betray', 'better', 'biased'], answer: 'betray', explain: 'betray：背叛；出卖；流露' },
      { id: 'betray.q2', senseId: 'betray.s1', errorType: 'meaning', type: '词义', prompt: 'He would not _____ a friend to save himself.', options: ['betray', 'better', 'biased'], answer: 'betray', explain: '空格需要 betray。' },
      { id: 'betray.q3', senseId: 'betray.s1', errorType: 'meaning', type: '易错', prompt: '背叛；出卖；流露 应选哪一句？', options: ['His face betrayed his worry.', 'They betray the secret by hiding it forever in this wrong line.', '词形或搭配不对。'], answer: 'His face betrayed his worry.', explain: 'betray 可以是故意出卖，也可以是不自觉流露。' },
      { id: 'betray.q4', senseId: 'betray.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：背叛；出卖；流露', options: ['betray', 'better', 'biased'], answer: 'betray', explain: '中文义对应 betray。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['show'] },
  });

  D('better', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'better', text: '现行词形，词性：adjective。' },
        { label: 'better', text: '更好的；更好；好转' },
      ],
      mnemonic: 'good 或 well 的比较级。',
      note: 'better than；feel better。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This draft is better than the first one.', chinese: '这一稿比第一稿更好。' },
    ],
    contexts: [
      { domain: '评价', senseId: 'better.s1', en: 'She feels better after a night of sleep.', zh: '睡了一夜，她感觉好转了。', structure: 'She feels  / better /  after a night of sleep.', grammar: '比较级。', rationale: '第二稿质量更高。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He is better of the two than all three.', right: 'This plan is better than that one.', reason: '两者比较用 better than。', rule: 'better than。三者以上最高用 best。', special: 'best 是最高级。' },
    ],
    quiz: [
      { id: 'better.q1', senseId: 'better.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Of higher quality; improved.', options: ['better', 'between', 'Bible'], answer: 'better', explain: 'better：更好的；更好；好转' },
      { id: 'better.q2', senseId: 'better.s1', errorType: 'meaning', type: '词义', prompt: 'This draft is _____ than the first one.', options: ['better', 'between', 'Bible'], answer: 'better', explain: '空格需要 better。' },
      { id: 'better.q3', senseId: 'better.s1', errorType: 'grammar', type: '易错', prompt: '更好的；更好；好转 应选哪一句？', options: ['This plan is better than that one.', 'He is better of the two than all three.', '词形或搭配不对。'], answer: 'This plan is better than that one.', explain: '两者比较用 better than。' },
      { id: 'better.q4', senseId: 'better.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：更好的；更好；好转', options: ['better', 'between', 'Bible'], answer: 'better', explain: '中文义对应 better。' },
    ],
    usage: { domains: ['评价', '考试'], tone: '中性', commonConfusion: ['best'] },
  });

  D('between', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'between', text: '现行词形，词性：preposition。' },
        { label: 'between', text: '在……之间' },
      ],
      mnemonic: '两者中间。',
      note: 'between A and B。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The shop is between the bank and the post office.', chinese: '商店在银行和邮局之间。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'between.s1', en: 'Please choose between these two dates.', zh: '请在这两个日期里选。', structure: 'Please choose  / between /  these two dates.', grammar: '介词。', rationale: '位置在两家店铺中间。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She sat between of the two chairs.', right: 'She sat between the two chairs.', reason: 'between 不加 of。两者用 between，多者分散常用 among。', rule: 'between A and B。', special: 'among 用于三者及以上的一群之中。' },
    ],
    quiz: [
      { id: 'between.q1', senseId: 'between.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: In the space or time separating two things.', options: ['between', 'beverage', 'bibliography'], answer: 'between', explain: 'between：在……之间' },
      { id: 'between.q2', senseId: 'between.s1', errorType: 'meaning', type: '词义', prompt: 'The shop is _____ the bank and the post office.', options: ['between', 'beverage', 'bibliography'], answer: 'between', explain: '空格需要 between。' },
      { id: 'between.q3', senseId: 'between.s1', errorType: 'grammar', type: '易错', prompt: '在……之间 应选哪一句？', options: ['She sat between the two chairs.', 'She sat between of the two chairs.', '词形或搭配不对。'], answer: 'She sat between the two chairs.', explain: 'between 不加 of。两者用 between，多者分散常用 among。' },
      { id: 'between.q4', senseId: 'between.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：在……之间', options: ['between', 'beverage', 'bibliography'], answer: 'between', explain: '中文义对应 between。' },
    ],
    usage: { domains: ['语法', '考试'], tone: '中性', commonConfusion: ['among'] },
  });

  D('beverage', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beverage', text: '现行词形，词性：noun。' },
        { label: 'beverage', text: '饮料' },
      ],
      mnemonic: '正式说法的饮料。',
      note: '比 drink 更书面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The menu lists a hot beverage and a cold one.', chinese: '菜单上有一种热饮和一种冷饮。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'beverage.s1', en: 'Water is the only beverage served at the meeting.', zh: '会上只提供水这种饮料。', structure: 'Water is the only  / beverage /  served at the meeting.', grammar: '可数名词。', rationale: '菜单上的饮品。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They ate a beverage with a fork.', right: 'They ordered a cold beverage.', reason: 'beverage 是喝的，不是用叉子吃的。', rule: 'a beverage。', special: '日常更多说 a drink。' },
    ],
    quiz: [
      { id: 'beverage.q1', senseId: 'beverage.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A drink of any kind.', options: ['beverage', 'beware', 'bicarbonate'], answer: 'beverage', explain: 'beverage：饮料' },
      { id: 'beverage.q2', senseId: 'beverage.s1', errorType: 'meaning', type: '词义', prompt: 'The menu lists a hot _____ and a cold one.', options: ['beverage', 'beware', 'bicarbonate'], answer: 'beverage', explain: '空格需要 beverage。' },
      { id: 'beverage.q3', senseId: 'beverage.s1', errorType: 'meaning', type: '易错', prompt: '饮料 应选哪一句？', options: ['They ordered a cold beverage.', 'They ate a beverage with a fork.', '词形或搭配不对。'], answer: 'They ordered a cold beverage.', explain: 'beverage 是喝的，不是用叉子吃的。' },
      { id: 'beverage.q4', senseId: 'beverage.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：饮料', options: ['beverage', 'beware', 'bicarbonate'], answer: 'beverage', explain: '中文义对应 beverage。' },
    ],
    usage: { domains: ['饮食', '考试'], tone: '中性', commonConfusion: ['drink'] },
  });

  D('beware', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beware', text: '现行词形，词性：verb。' },
        { label: 'beware', text: '当心；谨防' },
      ],
      mnemonic: '看见危险先停一下。',
      note: '常用于祈使句，后面 of。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Beware of the wet floor near the door.', chinese: '当心门口的湿地板。' },
    ],
    contexts: [
      { domain: '安全', senseId: 'beware.s1', en: 'Hikers should beware of sudden fog.', zh: '徒步者要谨防突然起雾。', structure: 'Hikers should  / beware /  of sudden fog.', grammar: '祈使动词，of 接危险。', rationale: '湿地板会让人滑倒。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Beware to the dog of no of.', right: 'Beware of the dog.', reason: '警告用 beware of。', rule: 'beware of + 名词。', special: 'be careful of 是近义普通说法。' },
    ],
    quiz: [
      { id: 'beware.q1', senseId: 'beware.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Used to warn someone of danger.', options: ['beware', 'bewilder', 'bicker'], answer: 'beware', explain: 'beware：当心；谨防' },
      { id: 'beware.q2', senseId: 'beware.s1', errorType: 'meaning', type: '词义', prompt: '_____ of the wet floor near the door.', options: ['beware', 'bewilder', 'bicker'], answer: 'beware', explain: '空格需要 beware。' },
      { id: 'beware.q3', senseId: 'beware.s1', errorType: 'collocation', type: '易错', prompt: '当心；谨防 应选哪一句？', options: ['Beware of the dog.', 'Beware to the dog of no of.', '词形或搭配不对。'], answer: 'Beware of the dog.', explain: '警告用 beware of。' },
      { id: 'beware.q4', senseId: 'beware.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：当心；谨防', options: ['beware', 'bewilder', 'bicker'], answer: 'beware', explain: '中文义对应 beware。' },
    ],
    usage: { domains: ['安全', '考试'], tone: '中性', commonConfusion: ['careful'] },
  });

  D('bewilder', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bewilder', text: '现行词形，词性：verb。' },
        { label: 'bewilder', text: '使迷惑；使不知所措' },
      ],
      mnemonic: '完全搞不清方向。',
      note: '形容词 bewildered / bewildering。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The many signs bewilder visitors who are new to the station.', chinese: '这么多指示牌让初次到车站的人不知所措。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'bewilder.s1', en: 'A sudden change of plan can bewilder the whole group.', zh: '计划突然改变会让整组人茫然。', structure: 'A sudden change of plan can  / bewilder /  the whole group.', grammar: '及物动词。', rationale: '标志太多让人迷糊。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The map bewildered them into perfect understanding.', right: 'The map bewildered them.', reason: 'bewilder 的结果是更糊涂，不是立刻全懂。', rule: 'bewilder somebody。', special: 'baffle 也是难住，词义接近。' },
    ],
    quiz: [
      { id: 'bewilder.q1', senseId: 'bewilder.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To confuse someone completely.', options: ['bewilder', 'beyond', 'bicycle'], answer: 'bewilder', explain: 'bewilder：使迷惑；使不知所措' },
      { id: 'bewilder.q2', senseId: 'bewilder.s1', errorType: 'meaning', type: '词义', prompt: 'The many signs _____ visitors who are new to the station.', options: ['bewilder', 'beyond', 'bicycle'], answer: 'bewilder', explain: '空格需要 bewilder。' },
      { id: 'bewilder.q3', senseId: 'bewilder.s1', errorType: 'meaning', type: '易错', prompt: '使迷惑；使不知所措 应选哪一句？', options: ['The map bewildered them.', 'The map bewildered them into perfect understanding.', '词形或搭配不对。'], answer: 'The map bewildered them.', explain: 'bewilder 的结果是更糊涂，不是立刻全懂。' },
      { id: 'bewilder.q4', senseId: 'bewilder.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：使迷惑；使不知所措', options: ['bewilder', 'beyond', 'bicycle'], answer: 'bewilder', explain: '中文义对应 bewilder。' },
    ],
    usage: { domains: ['阅读', '考试'], tone: '中性', commonConfusion: ['baffle'] },
  });

  D('beyond', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'beyond', text: '现行词形，词性：preposition。' },
        { label: 'beyond', text: '超出；在……那边；此外' },
      ],
      mnemonic: '越过某个界限。',
      note: 'beyond repair 表示无法修理。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The village lies beyond the river.', chinese: '村子在河的那一边。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'beyond.s1', en: 'The cost is beyond what we can pay.', zh: '费用超出了我们能付的范围。', structure: 'The cost is  / beyond /  what we can pay.', grammar: '介词。', rationale: '位置在河对面更远处。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They live beyond of the hill.', right: 'They live beyond the hill.', reason: 'beyond 不加 of。', rule: 'beyond + 名词。', special: 'behind 是在后面，不是超出限度。' },
    ],
    quiz: [
      { id: 'beyond.q1', senseId: 'beyond.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: On the far side of; more than.', options: ['beyond', 'bias', 'bid'], answer: 'beyond', explain: 'beyond：超出；在……那边；此外' },
      { id: 'beyond.q2', senseId: 'beyond.s1', errorType: 'meaning', type: '词义', prompt: 'The village lies _____ the river.', options: ['beyond', 'bias', 'bid'], answer: 'beyond', explain: '空格需要 beyond。' },
      { id: 'beyond.q3', senseId: 'beyond.s1', errorType: 'grammar', type: '易错', prompt: '超出；在……那边；此外 应选哪一句？', options: ['They live beyond the hill.', 'They live beyond of the hill.', '词形或搭配不对。'], answer: 'They live beyond the hill.', explain: 'beyond 不加 of。' },
      { id: 'beyond.q4', senseId: 'beyond.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：超出；在……那边；此外', options: ['beyond', 'bias', 'bid'], answer: 'beyond', explain: '中文义对应 beyond。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['behind'] },
  });

  D('bias', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bias', text: '现行词形，词性：noun。' },
        { label: 'bias', text: '偏见；偏向；使有偏见' },
      ],
      mnemonic: '天平事先歪了。',
      note: 'bias against / toward。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The test tried to avoid bias against left-handed students.', chinese: '这项测试尽量避免对左撇子学生的偏见。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'bias.s1', en: 'A bias toward familiar names can affect hiring.', zh: '偏向熟悉的名字会影响招聘。', structure: 'A  / bias /  toward familiar names can affect hiring.', grammar: '名词，常不可数。', rationale: '测试不想亏待某一类学生。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The bias was a fair equal rule.', right: 'Bias is an unfair leaning.', reason: 'bias 是不公平的倾向。', rule: 'bias against somebody。', special: 'opinion 可以是看法，不一定不公。' },
    ],
    quiz: [
      { id: 'bias.q1', senseId: 'bias.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: An unfair preference for or against someone.', options: ['bias', 'biased', 'big'], answer: 'bias', explain: 'bias：偏见；偏向；使有偏见' },
      { id: 'bias.q2', senseId: 'bias.s1', errorType: 'meaning', type: '词义', prompt: 'The test tried to avoid _____ against left-handed students.', options: ['bias', 'biased', 'big'], answer: 'bias', explain: '空格需要 bias。' },
      { id: 'bias.q3', senseId: 'bias.s1', errorType: 'collocation', type: '易错', prompt: '偏见；偏向；使有偏见 应选哪一句？', options: ['Bias is an unfair leaning.', 'The bias was a fair equal rule.', '词形或搭配不对。'], answer: 'Bias is an unfair leaning.', explain: 'bias 是不公平的倾向。' },
      { id: 'bias.q4', senseId: 'bias.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：偏见；偏向；使有偏见', options: ['bias', 'biased', 'big'], answer: 'bias', explain: '中文义对应 bias。' },
    ],
    usage: { domains: ['社会', '考试'], tone: '中性', commonConfusion: ['opinion'] },
  });

  D('biased', {
    etymology: {
      origin: '英语派生：bias + -ed',
      prefix: null,
      root: { text: 'bias', gloss: '偏见' },
      suffix: { text: '-ed', gloss: '形容词后缀' },
      history: [
        { label: 'bias', text: '偏见，是后来派生的基础。' },
        { label: 'biased', text: '有偏见的；偏袒的' },
      ],
      mnemonic: '已经被偏见影响了。',
      note: 'biased toward / against。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A biased report left out the other sides evidence.', chinese: '一篇有偏见的报告略去了另一方的证据。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'biased.s1', en: 'The judge refused to hear the case because he was biased.', zh: '法官拒绝审理此案，因为他有偏见。', structure: 'The judge refused to hear the case because he was  / biased / .', grammar: '形容词。', rationale: '报告不公正。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'A biased review treats every side the same.', right: 'A biased review favours one side.', reason: '有偏见就不会对各方一视同仁。', rule: '形容词 biased；名词 bias。', special: '不要把 biased 写成 bias 来修饰名词。' },
    ],
    quiz: [
      { id: 'biased.q1', senseId: 'biased.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Unfair because personal opinion affects a decision.', options: ['biased', 'Bible', 'badly'], answer: 'biased', explain: 'biased：有偏见的；偏袒的' },
      { id: 'biased.q2', senseId: 'biased.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ report left out the other sides evidence.', options: ['biased', 'Bible', 'badly'], answer: 'biased', explain: '空格需要 biased。' },
      { id: 'biased.q3', senseId: 'biased.s1', errorType: 'grammar', type: '易错', prompt: '有偏见的；偏袒的 应选哪一句？', options: ['A biased review favours one side.', 'A biased review treats every side the same.', '词形或搭配不对。'], answer: 'A biased review favours one side.', explain: '有偏见就不会对各方一视同仁。' },
      { id: 'biased.q4', senseId: 'biased.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：有偏见的；偏袒的', options: ['biased', 'Bible', 'badly'], answer: 'biased', explain: '中文义对应 biased。' },
    ],
    usage: { domains: ['写作', '考试'], tone: '中性', commonConfusion: ['bias'] },
  });

  D('Bible', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'Bible', text: '现行词形，词性：noun。' },
        { label: 'Bible', text: '《圣经》；权威书籍' },
      ],
      mnemonic: '大写时常指《圣经》，小写比喻权威书，本词条用 Bible。',
      note: 'the Bible。比喻义仍可大写，视语境。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She read a story from the Bible to her grandmother.', chinese: '她给祖母读了《圣经》里的一个故事。' },
    ],
    contexts: [
      { domain: '文化', senseId: 'Bible.s1', en: 'This handbook is the Bible of the workshop.', zh: '这本手册是车间里的权威指南。', structure: 'This handbook is the  / Bible /  of the workshop.', grammar: '专有名词，常加 the。', rationale: '宗教经典中的故事。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The Bible is a sports shoe.', right: 'The Bible is a religious book.', reason: '首义是基督教经典。', rule: 'the Bible。', special: 'book 是一般的书。' },
    ],
    quiz: [
      { id: 'Bible.q1', senseId: 'Bible.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: The holy book of the Christian religion; an authoritative book.', options: ['Bible', 'bibliography', 'badminton'], answer: 'Bible', explain: 'Bible：《圣经》；权威书籍' },
      { id: 'Bible.q2', senseId: 'Bible.s1', errorType: 'meaning', type: '词义', prompt: 'She read a story from the _____ to her grandmother.', options: ['Bible', 'bibliography', 'badminton'], answer: 'Bible', explain: '空格需要 Bible。' },
      { id: 'Bible.q3', senseId: 'Bible.s1', errorType: 'meaning', type: '易错', prompt: '《圣经》；权威书籍 应选哪一句？', options: ['The Bible is a religious book.', 'The Bible is a sports shoe.', '词形或搭配不对。'], answer: 'The Bible is a religious book.', explain: '首义是基督教经典。' },
      { id: 'Bible.q4', senseId: 'Bible.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：《圣经》；权威书籍', options: ['Bible', 'bibliography', 'badminton'], answer: 'Bible', explain: '中文义对应 Bible。' },
    ],
    usage: { domains: ['文化', '考试'], tone: '中性', commonConfusion: ['book'] },
  });

  D('bibliography', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bibliography', text: '现行词形，词性：noun。' },
        { label: 'bibliography', text: '参考书目；文献目录' },
      ],
      mnemonic: '文章末尾列出用过的书。',
      note: '学术写作词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The essay ends with a bibliography of twelve books.', chinese: '文章以十二本书的参考书目结束。' },
    ],
    contexts: [
      { domain: '学术', senseId: 'bibliography.s1', en: 'Check the bibliography before you say a source is missing.', zh: '先核对参考文献，再称来源缺失。', structure: 'Check the  / bibliography /  before you say a source is missing.', grammar: '可数名词。', rationale: '文后的书单。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'A bibliography is the story itself with no list.', right: 'A bibliography is a list of works.', reason: '它是书目清单，不是故事正文。', rule: 'a bibliography of。', special: 'biography 是传记。' },
    ],
    quiz: [
      { id: 'bibliography.q1', senseId: 'bibliography.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A list of books used or referred to.', options: ['bibliography', 'bicarbonate', 'baffle'], answer: 'bibliography', explain: 'bibliography：参考书目；文献目录' },
      { id: 'bibliography.q2', senseId: 'bibliography.s1', errorType: 'meaning', type: '词义', prompt: 'The essay ends with a _____ of twelve books.', options: ['bibliography', 'bicarbonate', 'baffle'], answer: 'bibliography', explain: '空格需要 bibliography。' },
      { id: 'bibliography.q3', senseId: 'bibliography.s1', errorType: 'confusable', type: '易错', prompt: '参考书目；文献目录 应选哪一句？', options: ['A bibliography is a list of works.', 'A bibliography is the story itself with no list.', '词形或搭配不对。'], answer: 'A bibliography is a list of works.', explain: '它是书目清单，不是故事正文。' },
      { id: 'bibliography.q4', senseId: 'bibliography.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：参考书目；文献目录', options: ['bibliography', 'bicarbonate', 'baffle'], answer: 'bibliography', explain: '中文义对应 bibliography。' },
    ],
    usage: { domains: ['学术', '考试'], tone: '中性', commonConfusion: ['biography'] },
  });

  D('bicarbonate', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bicarbonate', text: '现行词形，词性：noun。' },
        { label: 'bicarbonate', text: '碳酸氢盐；小苏打' },
      ],
      mnemonic: '烘焙里的小苏打一类物质。',
      note: '日常也说 baking soda，化学名更长。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A little bicarbonate can help the dough rise.', chinese: '少许小苏打能帮助面团发起来。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bicarbonate.s1', en: 'She used bicarbonate to clean the dull pan.', zh: '她用小苏打把发暗的锅擦干净。', structure: 'She used  / bicarbonate /  to clean the dull pan.', grammar: '不可数名词。', rationale: '让面团膨胀的添加剂。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Bicarbonate is a kind of loud music.', right: 'Bicarbonate is a white powder used in cooking.', reason: '它是烹饪和清洁用的白色粉末。', rule: 'bicarbonate 作物质名常不可数。', special: '不要把它当成食物本身。' },
    ],
    quiz: [
      { id: 'bicarbonate.q1', senseId: 'bicarbonate.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A white chemical used in baking and cleaning.', options: ['bicarbonate', 'bicker', 'bag'], answer: 'bicarbonate', explain: 'bicarbonate：碳酸氢盐；小苏打' },
      { id: 'bicarbonate.q2', senseId: 'bicarbonate.s1', errorType: 'meaning', type: '词义', prompt: 'A little _____ can help the dough rise.', options: ['bicarbonate', 'bicker', 'bag'], answer: 'bicarbonate', explain: '空格需要 bicarbonate。' },
      { id: 'bicarbonate.q3', senseId: 'bicarbonate.s1', errorType: 'meaning', type: '易错', prompt: '碳酸氢盐；小苏打 应选哪一句？', options: ['Bicarbonate is a white powder used in cooking.', 'Bicarbonate is a kind of loud music.', '词形或搭配不对。'], answer: 'Bicarbonate is a white powder used in cooking.', explain: '它是烹饪和清洁用的白色粉末。' },
      { id: 'bicarbonate.q4', senseId: 'bicarbonate.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：碳酸氢盐；小苏打', options: ['bicarbonate', 'bicker', 'bag'], answer: 'bicarbonate', explain: '中文义对应 bicarbonate。' },
    ],
    usage: { domains: ['生活', '考试'], tone: '中性', commonConfusion: ['carbon'] },
  });

  D('bicker', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bicker', text: '现行词形，词性：verb。' },
        { label: 'bicker', text: '争吵；口角' },
      ],
      mnemonic: '鸡毛蒜皮的吵。',
      note: 'bicker about / over。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The brothers bicker about the cups, and they still bicker after dinner.', chinese: '兄弟俩为杯子拌嘴，晚饭后还在吵。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bicker.s1', en: 'Do not bicker over a seat when the film is starting.', zh: '电影要开始了，别为座位争吵。', structure: 'Do not  / bicker /  over a seat when the film is starting.', grammar: '动词，about 接话题。', rationale: '争论洗碗这种小事。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They bicker a peace treaty in one calm minute.', right: 'They bicker over small things.', reason: 'bicker 是为小事反复争。', rule: 'bicker about something。', special: 'fight 可以更严重。' },
    ],
    quiz: [
      { id: 'bicker.q1', senseId: 'bicker.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To argue again and again about small things.', options: ['bicker', 'bicycle', 'baggage'], answer: 'bicker', explain: 'bicker：争吵；口角' },
      { id: 'bicker.q2', senseId: 'bicker.s1', errorType: 'meaning', type: '词义', prompt: 'The brothers _____ about the cups, and they still bicker after dinner.', options: ['bicker', 'bicycle', 'baggage'], answer: 'bicker', explain: '空格需要 bicker。' },
      { id: 'bicker.q3', senseId: 'bicker.s1', errorType: 'collocation', type: '易错', prompt: '争吵；口角 应选哪一句？', options: ['They bicker over small things.', 'They bicker a peace treaty in one calm minute.', '词形或搭配不对。'], answer: 'They bicker over small things.', explain: 'bicker 是为小事反复争。' },
      { id: 'bicker.q4', senseId: 'bicker.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：争吵；口角', options: ['bicker', 'bicycle', 'baggage'], answer: 'bicker', explain: '中文义对应 bicker。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['fight'] },
  });

  D('bicycle', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bicycle', text: '现行词形，词性：noun。' },
        { label: 'bicycle', text: '自行车' },
      ],
      mnemonic: '两个轮子，用脚驱动。',
      note: 'ride a bicycle；by bicycle。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She rides a bicycle to school when the weather is dry.', chinese: '天气干燥时她骑自行车上学。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'bicycle.s1', en: 'The bicycle needs a new light before night rides.', zh: '这辆自行车在夜骑前需要一只新灯。', structure: 'The  / bicycle /  needs a new light before night rides.', grammar: '可数名词。', rationale: '上学的交通工具。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He sailed a bicycle across the sea.', right: 'He rides a bicycle to work.', reason: '自行车是脚踩的两轮车。', rule: 'ride a bicycle。', special: 'bike 是口语简称。' },
    ],
    quiz: [
      { id: 'bicycle.q1', senseId: 'bicycle.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: A vehicle with two wheels that you pedal.', options: ['bicycle', 'bid', 'bags'], answer: 'bicycle', explain: 'bicycle：自行车' },
      { id: 'bicycle.q2', senseId: 'bicycle.s1', errorType: 'meaning', type: '词义', prompt: 'She rides a _____ to school when the weather is dry.', options: ['bicycle', 'bid', 'bags'], answer: 'bicycle', explain: '空格需要 bicycle。' },
      { id: 'bicycle.q3', senseId: 'bicycle.s1', errorType: 'collocation', type: '易错', prompt: '自行车 应选哪一句？', options: ['He rides a bicycle to work.', 'He sailed a bicycle across the sea.', '词形或搭配不对。'], answer: 'He rides a bicycle to work.', explain: '自行车是脚踩的两轮车。' },
      { id: 'bicycle.q4', senseId: 'bicycle.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：自行车', options: ['bicycle', 'bid', 'bags'], answer: 'bicycle', explain: '中文义对应 bicycle。' },
    ],
    usage: { domains: ['交通', '考试'], tone: '中性', commonConfusion: ['bike'] },
  });

  D('bid', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'bid', text: '现行词形，词性：verb。' },
        { label: 'bid', text: '出价；投标；努力争取' },
      ],
      mnemonic: '说出你愿付的价，或做出一次争取。',
      note: '名词 a bid for。过去式 bid。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They bid a higher price for the small painting.', chinese: '他们为那幅小画出了更高的价。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bid.s1', en: 'Her bid to join the team failed by one vote.', zh: '她争取加入队伍的努力以一票之差失败。', structure: 'Her  / bid /  to join the team failed by one vote.', grammar: '动词。', rationale: '在拍卖或交易中提高价格。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He bid the door to become a song.', right: 'Several buyers bid for the chair.', reason: 'bid for 是为得到某物而出价或争取。', rule: 'bid for something。', special: 'bet 是打赌。' },
    ],
    quiz: [
      { id: 'bid.q1', senseId: 'bid.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: To offer a price; an attempt to get something.', options: ['bid', 'big', 'bail'], answer: 'bid', explain: 'bid：出价；投标；努力争取' },
      { id: 'bid.q2', senseId: 'bid.s1', errorType: 'meaning', type: '词义', prompt: 'They _____ a higher price for the small painting.', options: ['bid', 'big', 'bail'], answer: 'bid', explain: '空格需要 bid。' },
      { id: 'bid.q3', senseId: 'bid.s1', errorType: 'collocation', type: '易错', prompt: '出价；投标；努力争取 应选哪一句？', options: ['Several buyers bid for the chair.', 'He bid the door to become a song.', '词形或搭配不对。'], answer: 'Several buyers bid for the chair.', explain: 'bid for 是为得到某物而出价或争取。' },
      { id: 'bid.q4', senseId: 'bid.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：出价；投标；努力争取', options: ['bid', 'big', 'bail'], answer: 'bid', explain: '中文义对应 bid。' },
    ],
    usage: { domains: ['商业', '考试'], tone: '中性', commonConfusion: ['bet'] },
  });

  D('big', {
    etymology: {
      origin: '现代英语常用词，本条只记现行义，不臆测古代词源。',
      prefix: null,
      root: null,
      suffix: null,
      history: [
        { label: 'big', text: '现行词形，词性：adjective。' },
        { label: 'big', text: '大的；重要的；年长的' },
      ],
      mnemonic: '尺寸、重要性或年龄上更大。',
      note: 'big sister 是姐姐。比较级通常用 bigger。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They moved the big table so everyone could sit.', chinese: '他们挪开大桌子，好让大家都能坐下。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'big.s1', en: 'Her big sister walked her to school.', zh: '她姐姐步行送她去学校。', structure: 'Her  / big /  sister walked her to school.', grammar: '形容词作定语。', rationale: '桌子尺寸大。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A big problem is always tiny and unimportant.', right: 'A big problem needs time.', reason: 'big 可以指尺寸大，也可以指事情重要。', rule: 'a big + 名词；bigger than。', special: 'large 更中性，big 更口语，也可表年长。' },
    ],
    quiz: [
      { id: 'big.q1', senseId: 'big.s1', errorType: 'meaning', type: '词义', prompt: 'Which word matches this meaning: Large in size, importance, or age.', options: ['big', 'badly', 'bait'], answer: 'big', explain: 'big：大的；重要的；年长的' },
      { id: 'big.q2', senseId: 'big.s1', errorType: 'meaning', type: '词义', prompt: 'They moved the _____ table so everyone could sit.', options: ['big', 'badly', 'bait'], answer: 'big', explain: '空格需要 big。' },
      { id: 'big.q3', senseId: 'big.s1', errorType: 'meaning', type: '易错', prompt: '大的；重要的；年长的 应选哪一句？', options: ['A big problem needs time.', 'A big problem is always tiny and unimportant.', '词形或搭配不对。'], answer: 'A big problem needs time.', explain: 'big 可以指尺寸大，也可以指事情重要。' },
      { id: 'big.q4', senseId: 'big.s1', errorType: 'meaning', type: '词义', prompt: '选出与这个中文义对应的词：大的；重要的；年长的', options: ['big', 'badly', 'bait'], answer: 'big', explain: '中文义对应 big。' },
    ],
    usage: { domains: ['日常', '考试'], tone: '中性', commonConfusion: ['large'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
