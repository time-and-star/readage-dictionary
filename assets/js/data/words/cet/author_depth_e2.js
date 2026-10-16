/* data/words/cet/author_depth_e2.js
 * 手敲深度补丁：bride–caption（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('bride', {
    etymology: {
      origin: '古英语 bryd，专指举行婚礼的女子，比 wife 窄',
      prefix: null,
      root: { text: 'bride', gloss: '新娘' },
      suffix: null,
      history: [
        { label: 'bryd', text: '古英语：即将或正在出嫁的女子' },
        { label: 'bride', text: '现代英语仍限婚礼当天或新婚语境，不是所有已婚妇女' },
      ],
      formationLogic: '身份跟婚礼绑在一起，所以 bridal 是婚礼的，不是妻子的。',
      mnemonic: 'bride 在婚礼上，wife 在婚后日常。',
      note: '新娘的父亲是 the bride father 不自然，说 the bride\'s father。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bride walked in with her father.', chinese: '新娘由父亲陪着走进来。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bride.s1', en: 'The bride chose a simple dress and no long train.', zh: '新娘选了一件简单的礼服，不要长拖尾。', structure: 'The bride / chose a simple dress', grammar: '可数，一场婚礼通常一位 the bride。', rationale: '指婚礼角色，不是泛指女性。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She has been his bride for twenty years.', right: 'She has been his wife for twenty years.', reason: '婚后多年说 wife。bride 指婚礼时的新娘。', rule: '婚礼用 bride；婚姻关系用 wife。', special: '新婚不久口语可说 a new bride，仍带婚礼色彩。' },
    ],
    quiz: [
      { id: 'bride.q1', senseId: 'bride.s1', errorType: 'meaning', type: '词义', prompt: 'bride 是：', options: ['婚礼上的新娘', '婚礼上的新郎', '证婚人'], answer: '婚礼上的新娘', explain: '女性一方。' },
      { id: 'bride.q2', senseId: 'bride.s1', errorType: 'confusable', type: '易混', prompt: '结婚二十年更常说：', options: ['his wife', 'his bride of that morning only', 'his bridal'], answer: 'his wife', explain: '长期婚姻用 wife。选项里第二项把 bride 限在当天，不能覆盖二十年。' },
      { id: 'bride.q3', senseId: 'bride.s1', errorType: 'grammar', type: '语法', prompt: '新娘的父亲：', options: ['the bride\'s father', 'the bride father', 'the brides father'], answer: 'the bride\'s father', explain: '需要所有格。' },
      { id: 'bride.q4', senseId: 'bride.s1', errorType: 'collocation', type: '搭配', prompt: '新娘礼服常说 the bride\'s _____.', options: ['dress', 'groom', 'brick'], answer: 'dress', explain: 'dress 是礼服。groom 是新郎。' },
    ],
    usage: { domains: ['生活', '新闻'], tone: '中性', commonConfusion: ['wife', 'bridegroom'] },
  });

  D('bridegroom', {
    etymology: {
      origin: '古英语 brydguma：bryd「新娘」+ guma「男人」。后来 guma 不再单独使用，被人听成 groom「马夫」，写成 bridegroom',
      prefix: null,
      root: { text: 'bride', gloss: '新娘一方' },
      suffix: null,
      history: [
        { label: 'brydguma', text: '古英语：婚礼上的男子，guma 就是男人' },
        { label: 'bridegroom', text: '民间把后半截理解成 groom，词形因此固定' },
      ],
      formationLogic: '和 bride 成对。口语常只说 the groom。',
      mnemonic: 'groom 单独可以是马夫，前面加 bride 才是新郎。',
      note: '现代婚礼请柬里 bridegroom 和 groom 都对，groom 更短。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bridegroom waited at the front of the hall.', chinese: '新郎在大厅前面等候。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bridegroom.s1', en: 'The bridegroom forgot the rings and sent his brother back to the car.', zh: '新郎忘了戒指，让弟弟回车上拿。', structure: 'The bridegroom / forgot the rings', grammar: '可数名词，与 the bride 对照。', rationale: '角色是婚礼上的男子，不是马夫。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The stable hired a bridegroom to feed the horses.', right: 'The stable hired a groom to feed the horses.', reason: '马夫是 groom。bridegroom 只用于婚礼。', rule: '有 bride- 就是新郎。', special: '请柬上 groom 也可指新郎，要看是不是婚礼。' },
    ],
    quiz: [
      { id: 'bridegroom.q1', senseId: 'bridegroom.s1', errorType: 'meaning', type: '词义', prompt: 'bridegroom 是：', options: ['新郎', '伴娘', '马厩管理员'], answer: '新郎', explain: '婚礼上的男子。' },
      { id: 'bridegroom.q2', senseId: 'bridegroom.s1', errorType: 'confusable', type: '易混', prompt: '只喂马、不参加婚礼的人更可能是：', options: ['a groom', 'a bridegroom', 'a bride'], answer: 'a groom', explain: 'groom 才有马夫义。' },
      { id: 'bridegroom.q3', senseId: 'bridegroom.s1', errorType: 'meaning', type: '词源', prompt: '词尾 groom 多半是后来被听成：', options: ['马夫那个词', '石头', '桥梁'], answer: '马夫那个词', explain: '原先是 guma「男人」。' },
      { id: 'bridegroom.q4', senseId: 'bridegroom.s1', errorType: 'collocation', type: '搭配', prompt: '和 bride 成对的短说法是 the _____.', options: ['groom', 'brick', 'broom'], answer: 'groom', explain: '婚礼语境里 the groom 就是新郎。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['groom', 'bride'] },
  });

  D('bridge', {
    etymology: {
      origin: '古英语 brycg，本指跨过河流的桥。动词「弥合」是从这座桥引申的',
      prefix: null,
      root: { text: 'bridge', gloss: '桥；把两边接上' },
      suffix: null,
      history: [
        { label: 'brycg', text: '古英语：河上的桥' },
        { label: 'bridge', text: '现代英语：建筑物；也说 bridge a gap，把分歧接上' },
      ],
      formationLogic: '两边原本断开，桥让人走过去，所以也能说弥合分歧。',
      mnemonic: '先看见河，再看见人和人之间的缺口。',
      note: '牌戏 bridge 是另一种说法，来源不同，不要和河桥混在一张卷子的唯一义里。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The new bridge cut the journey by twenty minutes.', chinese: '新桥把路程缩短了二十分钟。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bridge.s1', en: 'Talks were meant to bridge the gap between the two unions.', zh: '会谈本意是弥合两个工会之间的分歧。', structure: 'were meant to bridge the gap / between...', grammar: '动词 bridge 后常接 the gap / the divide。', rationale: '这里不是水泥桥，是把两边接上。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They tried to bridge the river with a speech.', right: 'A steel bridge crosses the river.', reason: '河上用名词桥；弥合的宾语是 gap、difference，不是 river。', rule: 'bridge a gap / a bridge over a river。', special: 'over the bridge 是从桥上过。' },
    ],
    quiz: [
      { id: 'bridge.q1', senseId: 'bridge.s1', errorType: 'meaning', type: '词义', prompt: 'bridge the gap 是：', options: ['弥合差距', '拆掉桥梁', '测量河宽'], answer: '弥合差距', explain: '动词义，把缺口接上。' },
      { id: 'bridge.q2', senseId: 'bridge.s1', errorType: 'collocation', type: '搭配', prompt: '河上的桥：a bridge _____ the river.', options: ['over', 'through', 'among'], answer: 'over', explain: '桥在河上方，用 over。' },
      { id: 'bridge.q3', senseId: 'bridge.s1', errorType: 'grammar', type: '语法', prompt: 'Which uses bridge as a verb?', options: ['The deal may bridge their differences.', 'The deal may a bridge.', 'The deal may bridges.'], answer: 'The deal may bridge their differences.', explain: '情态动词后用原形。' },
      { id: 'bridge.q4', senseId: 'bridge.s1', errorType: 'meaning', type: '词义', prompt: '古英语 brycg 最初指：', options: ['河上的桥', '马笼头', '公文包'], answer: '河上的桥', explain: '本义是建筑物。' },
    ],
    usage: { domains: ['交通', '新闻'], tone: '中性', commonConfusion: ['overpass'] },
  });

  D('bridle', {
    etymology: {
      origin: '古英语 bridel，套在马头上用来控制方向的笼头。动词「抑制」由勒住马引申',
      prefix: null,
      root: { text: 'bridle', gloss: '笼头；勒住' },
      suffix: null,
      history: [
        { label: 'bridel', text: '古英语：马笼头' },
        { label: 'bridle', text: '现代英语：笼头；bridle one\'s anger 是压住怒气' },
      ],
      formationLogic: '笼头让马不能乱跑，所以也能说把情绪勒住。',
      mnemonic: '马头上的带子是名词；勒住脾气是动词。',
      note: '不要写成 bridle path 以外的「桥」。bridle path 是马道，和 bridge 无关。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She slipped the bridle over the horse\'s head.', chinese: '她把笼头套上马头。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'bridle.s1', en: 'He tried to bridle his temper during the meeting.', zh: '开会时他努力压住脾气。', structure: 'tried to bridle his temper', grammar: '动词，宾语常是 anger、tongue、impulse。', rationale: '抑制义来自勒马，不是桥梁。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We crossed the bridle before dark.', right: 'We crossed the bridge before dark.', reason: '过河用 bridge。bridle 是笼头或抑制。', rule: 'bridge 桥；bridle 勒。', special: 'bridle at a remark 是对一句话感到不快。' },
    ],
    quiz: [
      { id: 'bridle.q1', senseId: 'bridle.s1', errorType: 'meaning', type: '词义', prompt: 'a bridle 套在：', options: ['马头上', '河面上', '公文包里'], answer: '马头上', explain: '马笼头。' },
      { id: 'bridle.q2', senseId: 'bridle.s1', errorType: 'confusable', type: '易混', prompt: '过河应选：', options: ['bridge', 'bridle', 'brief'], answer: 'bridge', explain: '桥才是 bridge。' },
      { id: 'bridle.q3', senseId: 'bridle.s1', errorType: 'collocation', type: '搭配', prompt: 'bridle one\'s _____ 是压住脾气。', options: ['anger', 'horse-shoe only', 'bridge'], answer: 'anger', explain: 'anger / temper 是常见宾语。' },
      { id: 'bridle.q4', senseId: 'bridle.s1', errorType: 'meaning', type: '词义', prompt: 'bridle path 是：', options: ['马道', '高速公路桥', '法律摘要'], answer: '马道', explain: '给马走的小路。' },
    ],
    usage: { domains: ['生活', '写作'], tone: '中性偏书面', commonConfusion: ['bridge'] },
  });

  D('brief', {
    etymology: {
      origin: '拉丁语 brevis「短」，经古法语 bref 进入英语。法律里的 brief 是写给律师的案情摘要，所以有动词「向……介绍情况」',
      prefix: null,
      root: { text: 'brev-', gloss: '短（同 brevity）' },
      suffix: null,
      history: [
        { label: 'brevis', text: '拉丁语：时间或篇幅短' },
        { label: 'brief', text: '形容词「简短」；名词「摘要」；动词 brief sb. on sth.「介绍情况」' },
      ],
      formationLogic: '短，所以说话短、文件短，也指用短材料给人交代任务。',
      mnemonic: 'brief 短；把任务用几句话交代，就是 brief someone。',
      note: 'in brief 是「简言之」。for a brief moment 是一小会儿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The manager gave a brief account of the delay.', chinese: '经理简要说明了延误的原因。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'brief.s1', en: 'Please brief the night team on the new safety rule.', zh: '请向夜班组介绍这条新的安全规定。', structure: 'brief + 人 + on + 话题', grammar: '动词后先接人，再接 on。', rationale: '这里是介绍情况，不是「简短的」形容词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She briefed on the plan the staff.', right: 'She briefed the staff on the plan.', reason: '人作宾语，话题用 on。', rule: 'brief sb. on sth.', special: '形容词要放名词前：a brief meeting。' },
    ],
    quiz: [
      { id: 'brief.q1', senseId: 'brief.s1', errorType: 'meaning', type: '词义', prompt: 'a brief talk 是：', options: ['简短的谈话', '很长的报告', '一份公文包'], answer: '简短的谈话', explain: 'brief 作形容词是短。' },
      { id: 'brief.q2', senseId: 'brief.s1', errorType: 'grammar', type: '语法', prompt: '向队员介绍计划：', options: ['brief the team on the plan', 'brief on the team the plan', 'brief the plan'], answer: 'brief the team on the plan', explain: 'brief sb. on sth.' },
      { id: 'brief.q3', senseId: 'brief.s1', errorType: 'collocation', type: '搭配', prompt: '简言之：_____ brief.', options: ['in', 'on', 'by'], answer: 'in', explain: '固定说法 in brief。' },
      { id: 'brief.q4', senseId: 'brief.s1', errorType: 'meaning', type: '词源', prompt: 'brevis 的意思是：', options: ['短', '明亮', '新郎'], answer: '短', explain: '拉丁语「短」。' },
    ],
    usage: { domains: ['职场', '法律', '写作'], tone: '中性', commonConfusion: ['short'] },
  });

  D('briefcase', {
    etymology: {
      origin: '英语复合词：brief「案情文件、公文」+ case「箱子」。原指律师装文件的扁平箱子',
      prefix: null,
      root: { text: 'brief', gloss: '文件、摘要' },
      suffix: null,
      history: [
        { label: 'brief', text: '法律文件，不是「短暂」在这个复合词里的重点' },
        { label: 'briefcase', text: '现代英语：装纸质文件的公文包' },
      ],
      formationLogic: '装 brief 的 case，所以是公文包，不是旅行箱。',
      mnemonic: '文件加盒子。厚旅行箱叫 suitcase。',
      note: '复数为 briefcases。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He left his briefcase on the train.', chinese: '他把公文包落在火车上了。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'briefcase.s1', en: 'The contract was still in her briefcase when the meeting started.', zh: '会议开始时，合同还在她的公文包里。', structure: 'was still in her briefcase', grammar: '可数名词，用 in 表示在包内。', rationale: '装文件的包，不是书包的统称。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We packed clothes for a week in one briefcase.', right: 'We packed clothes for a week in one suitcase.', reason: '换洗衣物用 suitcase。briefcase 是薄而装纸的包。', rule: '文件 briefcase；旅行 suitcase。', special: '电脑包更常说 laptop bag。' },
    ],
    quiz: [
      { id: 'briefcase.q1', senseId: 'briefcase.s1', errorType: 'meaning', type: '词义', prompt: 'briefcase 用来装：', options: ['文件', '一周的衣服', '砖块'], answer: '文件', explain: '公文包。' },
      { id: 'briefcase.q2', senseId: 'briefcase.s1', errorType: 'confusable', type: '易混', prompt: '装旅行衣物更常说：', options: ['suitcase', 'briefcase', 'brief'], answer: 'suitcase', explain: '旅行箱是 suitcase。' },
      { id: 'briefcase.q3', senseId: 'briefcase.s1', errorType: 'grammar', type: '语法', prompt: '两个公文包：', options: ['two briefcases', 'two briefcase', 'two briefses'], answer: 'two briefcases', explain: '以 s 结尾的词加 -es 不适用于此；case 的复数是 cases，故 briefcases。' },
      { id: 'briefcase.q4', senseId: 'briefcase.s1', errorType: 'meaning', type: '词源', prompt: '复合词前半 brief 在这里指：', options: ['文件', '很短的时间', '明亮'], answer: '文件', explain: '法律文件那个 brief。' },
    ],
    usage: { domains: ['职场', '生活'], tone: '中性', commonConfusion: ['suitcase'] },
  });

  D('briefly', {
    etymology: {
      origin: '英语派生：形容词 brief「短」加副词后缀 -ly',
      prefix: null,
      root: { text: 'brief', gloss: '短' },
      suffix: { text: '-ly', gloss: '构成副词' },
      history: [
        { label: 'brief', text: '短的时间或短的篇幅' },
        { label: 'briefly', text: '简短地；短暂地' },
      ],
      formationLogic: '修饰动词：说得短，或停留得短。',
      mnemonic: 'brief 加 -ly，问的是「怎么说 / 多久」。',
      note: '句首 Briefly, 用来收束长话题，等于 in short。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She briefly explained why the train was late.', chinese: '她简短说明了火车晚点的原因。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'briefly.s1', en: 'The sun appeared briefly and then the rain returned.', zh: '太阳短暂出现，随后雨又下了起来。', structure: 'appeared briefly', grammar: '副词放在动词后，表示时间很短。', rationale: '这里是持续时间，不是说话多少。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave a briefly speech.', right: 'He spoke briefly.', reason: 'briefly 是副词，不能修饰名词 speech。', rule: 'a brief speech；speak briefly。', special: 'Briefly, 放句首是话语标记。' },
    ],
    quiz: [
      { id: 'briefly.q1', senseId: 'briefly.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['He spoke briefly.', 'He gave a briefly talk.', 'He briefly a talk.'], answer: 'He spoke briefly.', explain: '副词修饰动词。' },
      { id: 'briefly.q2', senseId: 'briefly.s1', errorType: 'meaning', type: '词义', prompt: 'The light flashed briefly. briefly 是：', options: ['短暂地', '明亮地', '正式地'], answer: '短暂地', explain: '时间短。' },
      { id: 'briefly.q3', senseId: 'briefly.s1', errorType: 'collocation', type: '搭配', prompt: '简短的演讲应说 a _____ speech.', options: ['brief', 'briefly', 'briefness'], answer: 'brief', explain: '名词前用形容词。' },
      { id: 'briefly.q4', senseId: 'briefly.s1', errorType: 'meaning', type: '词源', prompt: '-ly 的作用是：', options: ['把形容词变成副词', '表示复数', '表示新娘'], answer: '把形容词变成副词', explain: 'brief + -ly。' },
    ],
    usage: { domains: ['写作', '口语'], tone: '中性', commonConfusion: ['brief'] },
  });

  D('briefs', {
    etymology: {
      origin: 'brief 的复数。二十世纪起指贴身短内裤；法律里 briefs 是交给出庭律师的案情摘要',
      prefix: null,
      root: { text: 'brief', gloss: '短的东西；摘要' },
      suffix: null,
      history: [
        { label: 'brief', text: '短；一份案情材料' },
        { label: 'briefs', text: '两条路：内裤，或法律摘要的复数' },
      ],
      formationLogic: '都取「短、精简」。内裤比长衬裤短；摘要比全卷宗短。',
      mnemonic: '看搭配：a pair of briefs 是内裤；legal briefs 是案情材料。',
      note: '内裤常与 a pair of 连用，谓语用复数或 pair 的单数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The clerk filed two briefs before noon.', chinese: '书记员中午之前提交了两份案情摘要。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'briefs.s1', en: 'Pack a pair of briefs and two shirts.', zh: '装一条内裤和两件衬衫。', structure: 'a pair of briefs', grammar: '服装义几乎总带 pair。', rationale: '没有 pair 或 legal，句子会含糊。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The judge read a pair of briefs about the contract.', right: 'The judge read the briefs about the contract.', reason: 'a pair of 把词推进服装义。法律材料直接用 briefs。', rule: '内裤 a pair of briefs；法律 the briefs。', special: '男式内裤是这个词的常义，女式更多说 knickers 或 panties。' },
    ],
    quiz: [
      { id: 'briefs.q1', senseId: 'briefs.s1', errorType: 'context', type: '语境', prompt: 'a pair of briefs 最可能是：', options: ['一条内裤', '两座桥', '两块砖'], answer: '一条内裤', explain: 'pair 锁定服装。' },
      { id: 'briefs.q2', senseId: 'briefs.s1', errorType: 'meaning', type: '词义', prompt: '律师提交的 briefs 是：', options: ['案情摘要', '内裤', '公文包'], answer: '案情摘要', explain: '法律义。' },
      { id: 'briefs.q3', senseId: 'briefs.s1', errorType: 'collocation', type: '搭配', prompt: '内裤最自然的量词是：', options: ['a pair of', 'a sheet of', 'a cup of'], answer: 'a pair of', explain: '成对穿着的衣物用 pair。' },
      { id: 'briefs.q4', senseId: 'briefs.s1', errorType: 'confusable', type: '易混', prompt: '和 briefs 词根相同、表示「短」的形容词是：', options: ['brief', 'bright', 'broad'], answer: 'brief', explain: 'brief 是形容词。' },
    ],
    usage: { domains: ['生活', '法律'], tone: '中性', commonConfusion: ['brief', 'pants'] },
  });

  D('brigade', {
    etymology: {
      origin: '法语 brigade，意大利语 brigata「一伙人」，与 brigare「争吵、忙碌」有关。英语先用于军队的旅',
      prefix: null,
      root: { text: 'brigade', gloss: '成建制的一队人' },
      suffix: null,
      history: [
        { label: 'brigata', text: '意大利语：聚在一起行动的一群人' },
        { label: 'brigade', text: '英语：陆军的旅；也用于消防队等有组织的队伍' },
      ],
      formationLogic: '不是乌合之众，而是编成单位，所以消防、志愿者也能叫 brigade。',
      mnemonic: '旅比营大。生活里记住 fire brigade。',
      note: '英国消防队常用 fire brigade，美国更常说 fire department。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A fire brigade reached the warehouse in six minutes.', chinese: '消防队六分钟内赶到仓库。' },
    ],
    contexts: [
      { domain: '军事', senseId: 'brigade.s1', en: 'The brigade moved at dawn and left the valley road clear.', zh: '这支旅黎明时开拔，把山谷公路让了出来。', structure: 'The brigade / moved at dawn', grammar: '集体名词，可作单数。', rationale: '军队编制，不是临时三个路人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Two classmates formed a brigade to buy coffee.', right: 'Two classmates formed a small group to buy coffee.', reason: 'brigade 暗示正式编制或有组织的队伍。', rule: '军队的旅，或 fire brigade 这类固定队伍。', special: '比喻 the sandwich brigade 带幽默，仍暗示成群结队。' },
    ],
    quiz: [
      { id: 'brigade.q1', senseId: 'brigade.s1', errorType: 'meaning', type: '词义', prompt: '军队里 brigade 常译为：', options: ['旅', '一颗子弹', '一座桥'], answer: '旅', explain: '编制单位。' },
      { id: 'brigade.q2', senseId: 'brigade.s1', errorType: 'collocation', type: '搭配', prompt: '英国英语消防队：the fire _____.', options: ['brigade', 'bride', 'brief'], answer: 'brigade', explain: 'fire brigade。' },
      { id: 'brigade.q3', senseId: 'brigade.s1', errorType: 'meaning', type: '词义', prompt: 'brigade 强调的是：', options: ['有组织的队伍', '一个人的行李', '一段很短的话'], answer: '有组织的队伍', explain: '成建制。' },
      { id: 'brigade.q4', senseId: 'brigade.s1', errorType: 'confusable', type: '易混', prompt: '和军队无关、只表示「简短」的是：', options: ['brief', 'brigade', 'bridle'], answer: 'brief', explain: 'brief 才是短。' },
    ],
    usage: { domains: ['军事', '新闻'], tone: '中性', commonConfusion: ['battalion', 'squad'] },
  });

  D('bright', {
    etymology: {
      origin: '古英语 beorht，指发光、鲜明。聪明义是从「脑子亮」引申的',
      prefix: null,
      root: { text: 'bright', gloss: '亮' },
      suffix: null,
      history: [
        { label: 'beorht', text: '古英语：光亮、显眼' },
        { label: 'bright', text: '现代英语：光线强、颜色鲜、人或主意聪明' },
      ],
      formationLogic: '看得见的亮，转到颜色，再转到智力。',
      mnemonic: '灯是 bright，红颜色是 bright，学生也可以 bright。',
      note: 'bright red 是鲜亮的红，不是「聪明的红」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The kitchen looks bright after the new windows were fitted.', chinese: '装上新窗户后，厨房显得很亮。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'bright.s1', en: 'She is bright, but she still needs time to check the figures.', zh: '她很聪明，但核对数字仍需要时间。', structure: 'She is bright, but...', grammar: '形容词作表语，指智力。', rationale: '没有光和颜色时，bright 往往是聪明。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'Please wear a bright student to the interview.', right: 'Please wear a bright colour to the interview.', reason: '衣服搭配的是颜色，不是学生。', rule: '光线、颜色、人才三条线，宾语要配得上。', special: 'a bright idea 是好主意。' },
    ],
    quiz: [
      { id: 'bright.q1', senseId: 'bright.s1', errorType: 'meaning', type: '词义', prompt: 'a bright child 是：', options: ['聪明的孩子', '穿砖红色的孩子', '很短暂的孩子'], answer: '聪明的孩子', explain: '智力义。' },
      { id: 'bright.q2', senseId: 'bright.s1', errorType: 'meaning', type: '词义', prompt: 'a bright room 是：', options: ['明亮的房间', '很宽的法律摘要', '新郎的房间'], answer: '明亮的房间', explain: '光线。' },
      { id: 'bright.q3', senseId: 'bright.s1', errorType: 'collocation', type: '搭配', prompt: '鲜红色：bright _____.', options: ['red', 'briefly', 'brickly'], answer: 'red', explain: 'bright + 颜色。' },
      { id: 'bright.q4', senseId: 'bright.s1', errorType: 'collocation', type: '搭配', prompt: '好主意：a bright _____.', options: ['idea', 'bridle', 'bulk'], answer: 'idea', explain: '固定搭配 a bright idea。' },
    ],
    usage: { domains: ['生活', '校园'], tone: '中性偏褒', commonConfusion: ['light', 'clever'] },
  });

  D('brighten', {
    etymology: {
      origin: '英语派生：bright 加动词后缀 -en，表示变亮或使变亮',
      prefix: null,
      root: { text: 'bright', gloss: '亮' },
      suffix: { text: '-en', gloss: '变成、使变成' },
      history: [
        { label: 'bright', text: '明亮、愉快' },
        { label: 'brighten', text: '灯光变亮，或脸色、心情变好' },
      ],
      formationLogic: '-en 让形容词变成变化动词，所以可及物也可不及物。',
      mnemonic: 'bright 是状态，brighten 是亮起来或让人高兴起来。',
      note: 'brighten up 口语里很常见，尤其指天色或心情。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A letter from home brightened her week.', chinese: '一封家书让她这一周愉快起来。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'brighten.s1', en: 'The sky brightened after lunch, so we walked to the bridge.', zh: '午饭后天色亮了，于是我们步行到桥边。', structure: 'The sky brightened', grammar: '不及物，主语自己变亮。', rationale: '天气变化，不是智力。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news brightened up she.', right: 'The news brightened her up.', reason: '代词要用宾格，并放在 up 前，或说 brightened her。', rule: 'brighten sb. up / brighten sth.', special: '不要把 brighten 写成形容词去修饰名词。' },
    ],
    quiz: [
      { id: 'brighten.q1', senseId: 'brighten.s1', errorType: 'meaning', type: '词义', prompt: 'brighten 是：', options: ['使变亮或使愉快', '使变短', '给马套笼头'], answer: '使变亮或使愉快', explain: '由 bright 变来的动词。' },
      { id: 'brighten.q2', senseId: 'brighten.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['The lamp brightened the room.', 'The lamp bright the room.', 'The lamp brightly the room.'], answer: 'The lamp brightened the room.', explain: '需要动词过去式。' },
      { id: 'brighten.q3', senseId: 'brighten.s1', errorType: 'collocation', type: '搭配', prompt: '心情好转口语常说 brighten _____.', options: ['up', 'on', 'of'], answer: 'up', explain: 'brighten up。' },
      { id: 'brighten.q4', senseId: 'brighten.s1', errorType: 'meaning', type: '词源', prompt: '-en 在这里表示：', options: ['变成或使变成', '名词复数', '副词'], answer: '变成或使变成', explain: '形容词加 -en 构成动词。' },
    ],
    usage: { domains: ['生活', '写作'], tone: '中性偏褒', commonConfusion: ['bright'] },
  });

  D('brightness', {
    etymology: {
      origin: '英语派生：bright 加名词后缀 -ness，表示亮的程度',
      prefix: null,
      root: { text: 'bright', gloss: '亮' },
      suffix: { text: '-ness', gloss: '性质、程度' },
      history: [
        { label: 'bright', text: '明亮这一性质' },
        { label: 'brightness', text: '亮度；也可指聪明，但科技语境几乎总是光度' },
      ],
      formationLogic: '把形容词收成可测量或可谈论的名词。',
      mnemonic: '屏幕上的 brightness 是亮度旋钮，不是智商。',
      note: '一般不可数。a brightness in her eyes 是文学里的一次闪光。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Turn down the brightness if your eyes hurt.', chinese: '如果眼睛不舒服，就把亮度调低。' },
    ],
    contexts: [
      { domain: '科技', senseId: 'brightness.s1', en: 'The monitor brightness was set too high for a dark room.', zh: '这间暗室里，显示器亮度设得太高。', structure: 'monitor brightness / was set too high', grammar: '不可数名词作主语。', rationale: '设备语境就是光度。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The screen has many brightnesses.', right: 'The screen brightness is too high.', reason: '亮度通常不可数，不说 many brightnesses。', rule: 'brightness 表程度。', special: '聪明更常说 intelligence，少用 brightness 当考试名词。' },
    ],
    quiz: [
      { id: 'brightness.q1', senseId: 'brightness.s1', errorType: 'meaning', type: '词义', prompt: '屏幕上的 brightness 是：', options: ['亮度', '音量', '防火墙'], answer: '亮度', explain: '光度。' },
      { id: 'brightness.q2', senseId: 'brightness.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['The brightness is too high.', 'Many brightnesses are too high.', 'The brightnessly is high.'], answer: 'The brightness is too high.', explain: '不可数，用 is。' },
      { id: 'brightness.q3', senseId: 'brightness.s1', errorType: 'meaning', type: '词源', prompt: '-ness 的作用是：', options: ['构成名词', '构成过去式', '表示两位'], answer: '构成名词', explain: 'bright + -ness。' },
      { id: 'brightness.q4', senseId: 'brightness.s1', errorType: 'collocation', type: '搭配', prompt: '调低亮度：turn _____ the brightness.', options: ['down', 'into', 'bride'], answer: 'down', explain: 'turn down 是调低。' },
    ],
    usage: { domains: ['科技', '生活'], tone: '中性', commonConfusion: ['light'] },
  });

  D('brilliance', {
    etymology: {
      origin: '来自 brilliant。法语 briller「发光」，名词用 -ance 表示发光或才智极高的状态',
      prefix: null,
      root: { text: 'brill-', gloss: '发光' },
      suffix: { text: '-ance', gloss: '名词，表状态' },
      history: [
        { label: 'briller', text: '法语：发亮、闪耀' },
        { label: 'brilliance', text: '英语：才华出众，或强光' },
      ],
      formationLogic: '能发光的那种出色，用在人和表演上就是才华。',
      mnemonic: 'brilliant 是形容词，brilliance 是那份才华或强光本身。',
      note: '不可数居多。a brilliance of colour 是文气说法。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The novel was praised for the brilliance of its dialogue.', chinese: '这部小说因对白精彩而受到称赞。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'brilliance.s1', en: 'Critics spoke of her brilliance, not merely of a lucky performance.', zh: '评论谈到的是她的才华，而不只是一场走运的演出。', structure: 'spoke of her brilliance', grammar: '不可数名词，her brilliance。', rationale: '指稳定的出色，不是一次偶然。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He is a brilliance student.', right: 'He is a brilliant student.', reason: '修饰名词要用形容词 brilliant。', rule: 'brilliance 是名词；brilliant 是形容词。', special: '光线义：the brilliance of the sun。' },
    ],
    quiz: [
      { id: 'brilliance.q1', senseId: 'brilliance.s1', errorType: 'meaning', type: '词义', prompt: 'brilliance 最接近：', options: ['才华或辉煌', '一份公文', '一头小公牛'], answer: '才华或辉煌', explain: '出色或强光。' },
      { id: 'brilliance.q2', senseId: 'brilliance.s1', errorType: 'confusable', type: '易混', prompt: '修饰 student 应选：', options: ['brilliant', 'brilliance', 'briefly'], answer: 'brilliant', explain: '形容词才能作定语。' },
      { id: 'brilliance.q3', senseId: 'brilliance.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['Her brilliance is obvious.', 'Her brilliance are two.', 'She brilliance spoke.'], answer: 'Her brilliance is obvious.', explain: '抽象名词用 is。' },
      { id: 'brilliance.q4', senseId: 'brilliance.s1', errorType: 'meaning', type: '词源', prompt: 'briller 的核心意思是：', options: ['发光', '搬运', '结婚'], answer: '发光', explain: '法语「闪耀」。' },
    ],
    usage: { domains: ['评论', '写作'], tone: '褒义', commonConfusion: ['brilliant'] },
  });

  D('brilliant', {
    etymology: {
      origin: '法语 brillant，来自 briller「发光」。英语里从强光扩展到「极好、才华出众」',
      prefix: null,
      root: { text: 'brill-', gloss: '发光' },
      suffix: { text: '-ant', gloss: '形容词' },
      history: [
        { label: 'briller', text: '法语动词：闪耀' },
        { label: 'brilliant', text: '现代口语几乎等于 excellent，书面仍可指光线或才智' },
      ],
      formationLogic: '亮到刺眼，所以夸人或主意时语气很强。',
      mnemonic: '比 bright 更满，比 good 更用力。',
      note: '英式口语 brilliant 可以只是「太好了」，不一定真的才华横溢。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'That was a brilliant solution to a dull problem.', chinese: '对一个乏味的问题来说，这是个极好的解决办法。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'brilliant.s1', en: 'The exam result was brilliant, and even the strict marker smiled.', zh: '考试成绩好极了，连严格的阅卷人也笑了。', structure: 'The exam result was brilliant', grammar: '形容词作表语。', rationale: '这里是「极好」，不是灯泡瓦数。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She played the piano very brilliant.', right: 'She played the piano brilliantly.', reason: '修饰动词要用副词 brilliantly。', rule: 'a brilliant player；play brilliantly。', special: 'a brilliant light 仍是强光。' },
    ],
    quiz: [
      { id: 'brilliant.q1', senseId: 'brilliant.s1', errorType: 'meaning', type: '词义', prompt: '口语里 That is brilliant 多半是：', options: ['太好了', '太短了', '太宽了'], answer: '太好了', explain: '强烈的肯定。' },
      { id: 'brilliant.q2', senseId: 'brilliant.s1', errorType: 'grammar', type: '语法', prompt: '她弹得极好：She played _____.', options: ['brilliantly', 'brilliant', 'brilliance'], answer: 'brilliantly', explain: '副词修饰 played。' },
      { id: 'brilliant.q3', senseId: 'brilliant.s1', errorType: 'confusable', type: '易混', prompt: '名词「才华」是：', options: ['brilliance', 'brighten', 'bridle'], answer: 'brilliance', explain: 'brilliant 的名词。' },
      { id: 'brilliant.q4', senseId: 'brilliant.s1', errorType: 'meaning', type: '词义', prompt: 'a brilliant diamond 强调：', options: ['光泽极亮', '体积像砖', '可以食用'], answer: '光泽极亮', explain: '本义仍是闪耀。' },
    ],
    usage: { domains: ['口语', '评论'], tone: '褒义', commonConfusion: ['bright', 'excellent'] },
  });

  D('brim', {
    etymology: {
      origin: '中古英语 brimme，指杯沿、帽檐这类边缘。动词「满到边上」由名词来',
      prefix: null,
      root: { text: 'brim', gloss: '边沿' },
      suffix: null,
      history: [
        { label: 'brim', text: '杯口或帽檐的那一圈' },
        { label: 'brim over', text: '满到漫出来；也比喻情绪装不住' },
      ],
      formationLogic: '边是名词；水到了边上就是动词。',
      mnemonic: '帽檐和杯沿都是一圈外缘。满过这圈就 brim over。',
      note: 'brim with 是盛满某种情绪或内容。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Rain dripped from the brim of his hat.', chinese: '雨水从他的帽檐滴下来。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'brim.s1', en: 'She filled the cup to the brim and carried it slowly.', zh: '她把杯子倒满到杯沿，然后慢慢端着。', structure: 'filled the cup to the brim', grammar: 'to the brim 是固定介词短语。', rationale: '边沿，不是河岸的普通词 bank。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The glass was full at the brim.', right: 'The glass was full to the brim.', reason: '「满到边」用 to the brim。', rule: 'to the brim / brim over with。', special: '帽檐是 the brim of a hat。' },
    ],
    quiz: [
      { id: 'brim.q1', senseId: 'brim.s1', errorType: 'meaning', type: '词义', prompt: 'the brim of a hat 是：', options: ['帽檐', '帽顶的商标', '帽带的别针'], answer: '帽檐', explain: '帽子的外缘。' },
      { id: 'brim.q2', senseId: 'brim.s1', errorType: 'collocation', type: '搭配', prompt: '倒满到边：full _____ the brim.', options: ['to', 'on', 'by'], answer: 'to', explain: 'to the brim。' },
      { id: 'brim.q3', senseId: 'brim.s1', errorType: 'meaning', type: '词义', prompt: 'brim over with joy 是：', options: ['喜不自禁', '把帽子扔掉', '把桥拆了'], answer: '喜不自禁', explain: '满到溢出，比喻情绪。' },
      { id: 'brim.q4', senseId: 'brim.s1', errorType: 'confusable', type: '易混', prompt: '河岸更常用：', options: ['bank', 'brim', 'brief'], answer: 'bank', explain: 'brim 是杯沿帽檐，不是河岸。' },
    ],
    usage: { domains: ['生活', '写作'], tone: '中性', commonConfusion: ['rim', 'edge'] },
  });

  D('brimstone', {
    etymology: {
      origin: '古英语 brynstān，字面是 burn-stone「燃烧的石头」，指硫磺。宗教英语里 fire and brimstone 是地狱之火',
      prefix: null,
      root: { text: 'brimstone', gloss: '硫磺；地狱之火' },
      suffix: null,
      history: [
        { label: 'brynstān', text: '古英语：会烧的石头，即硫磺' },
        { label: 'brimstone', text: '现代日常几乎不用，留在圣经体和固定短语里' },
      ],
      formationLogic: '石头能烧，所以叫燃烧之石；布道里就成了惩罚之火。',
      mnemonic: 'fire and brimstone 一起记，不要单独当化学课的唯一术语。化学课说 sulfur 或 sulphur。',
      note: '拼写不是 brim stone 两词，尽管来源是两个词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The sermon threatened fire and brimstone.', chinese: '这篇布道用地狱之火来警告听众。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'brimstone.s1', en: 'Older texts call sulphur brimstone when they describe divine punishment.', zh: '较古的文本在描写天罚时把硫磺称为 brimstone。', structure: 'call sulphur brimstone', grammar: '不可数物质名词。', rationale: '文学和宗教用词，不是现代实验报告的首选。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The lab report listed brimstone as the reagent.', right: 'The lab report listed sulphur as the reagent.', reason: '实验报告用 sulphur / sulfur。brimstone 是旧称和宗教用语。', rule: '化学用 sulphur；火与惩罚用 brimstone。', special: 'fire and brimstone 不要拆开乱配。' },
    ],
    quiz: [
      { id: 'brimstone.q1', senseId: 'brimstone.s1', errorType: 'meaning', type: '词义', prompt: 'brimstone 的旧义是：', options: ['硫磺', '帽檐', '青铜'], answer: '硫磺', explain: 'burn-stone。' },
      { id: 'brimstone.q2', senseId: 'brimstone.s1', errorType: 'collocation', type: '搭配', prompt: '固定短语是 fire and _____.', options: ['brimstone', 'brim', 'bridge'], answer: 'brimstone', explain: '地狱之火的套语。' },
      { id: 'brimstone.q3', senseId: 'brimstone.s1', errorType: 'context', type: '语境', prompt: '化学试卷上更应写：', options: ['sulphur', 'brimstone', 'bride'], answer: 'sulphur', explain: 'brimstone 是旧称。' },
      { id: 'brimstone.q4', senseId: 'brimstone.s1', errorType: 'meaning', type: '词源', prompt: 'brynstān 字面是：', options: ['燃烧的石头', '短的石头', '宽的石头'], answer: '燃烧的石头', explain: 'burn + stone。' },
    ],
    usage: { domains: ['阅读', '宗教文本'], tone: '古语、严厉', commonConfusion: ['sulphur'] },
  });

  D('bring', {
    etymology: {
      origin: '古英语 bringan，方向是朝说话人或目的地过来，和 take 相反',
      prefix: null,
      root: { text: 'bring', gloss: '带来' },
      suffix: null,
      history: [
        { label: 'bringan', text: '古英语：携带前来' },
        { label: 'bring', text: '现代英语：带到这儿或带到双方约定的地点；也可表示引起' },
      ],
      formationLogic: '人移动，东西跟着到目标点。结果义是 bring trouble 这类搭配。',
      mnemonic: '朝向「来」用 bring，朝向「去」用 take。',
      note: '过去式和过去分词都是 brought，不是 bringed。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Bring a pencil and your identity card tomorrow.', chinese: '明天带一支铅笔和身份证件来。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'bring.s1', en: 'The new rule may bring long queues at the gate.', zh: '新规定可能在门口引起长时间排队。', structure: 'may bring long queues', grammar: 'bring 加结果宾语，表示导致。', rationale: '不是用手拿来一把队，而是造成这种结果。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She bringed the books yesterday.', right: 'She brought the books yesterday.', reason: 'bring 是不规则动词，过去式 brought。', rule: 'bring, brought, brought。', special: 'bring 的方向要对着说话场景，去对方那儿用 take。' },
    ],
    quiz: [
      { id: 'bring.q1', senseId: 'bring.s1', errorType: 'meaning', type: '词义', prompt: 'Bring your book 的方向是：', options: ['拿到说话人这边或约定地点', '从这儿拿走', '把书写完'], answer: '拿到说话人这边或约定地点', explain: '带来。' },
      { id: 'bring.q2', senseId: 'bring.s1', errorType: 'grammar', type: '语法', prompt: '昨天带来：She _____ it yesterday.', options: ['brought', 'bringed', 'brung'], answer: 'brought', explain: '过去式 brought。brung 非标准。' },
      { id: 'bring.q3', senseId: 'bring.s1', errorType: 'confusable', type: '易混', prompt: '把文件送到他办公室、你留在原地，更常说：', options: ['take', 'bring to me here only', 'brighten'], answer: 'take', explain: '离开说话人用 take。' },
      { id: 'bring.q4', senseId: 'bring.s1', errorType: 'collocation', type: '搭配', prompt: '引起麻烦：bring _____.', options: ['trouble', 'briefly', 'brim'], answer: 'trouble', explain: 'bring trouble。' },
    ],
    usage: { domains: ['生活', '写作'], tone: '中性', commonConfusion: ['take', 'fetch'] },
  });

  D('bring back', {
    etymology: {
      origin: '现代英语短语动词：bring「带来」+ back「返回」。人、物、习俗、记忆都能作宾语',
      prefix: null,
      root: { text: 'bring', gloss: '带来' },
      suffix: null,
      history: [
        { label: 'bring', text: '把某物带到说话的方向' },
        { label: 'bring back', text: '再带回来；使恢复；唤起回忆' },
      ],
      formationLogic: 'back 标出「回到原处或原样」。',
      mnemonic: '东西回来、旧规矩回来、往事回来，都是 bring back。',
      note: '代词放中间：bring it back，不说 bring back it。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The smell of rain brought back his school days.', chinese: '雨的气味唤起了他的学生时代。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bring back.s1', en: 'The town voted to bring back the Sunday market.', zh: '镇上投票决定恢复周日集市。', structure: 'voted to bring back + 名词', grammar: '短语动词，宾语为被恢复的事物。', rationale: '恢复习俗，不是从商店退货的唯一意思。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Please bring back it before Friday.', right: 'Please bring it back before Friday.', reason: '宾语是代词时必须放在 bring 和 back 之间。', rule: 'bring it back；bring the book back 或 bring back the book。', special: '记忆义常无意识：The song brought it all back。' },
    ],
    quiz: [
      { id: 'bring back.q1', senseId: 'bring back.s1', errorType: 'meaning', type: '词义', prompt: 'bring back a custom 是：', options: ['恢复一种习俗', '把习俗写成摘要', '禁止这种习俗'], answer: '恢复一种习俗', explain: '使重新出现。' },
      { id: 'bring back.q2', senseId: 'bring back.s1', errorType: 'grammar', type: '语法', prompt: '代词宾语应说：', options: ['bring it back', 'bring back it', 'back it bring'], answer: 'bring it back', explain: '代词在中间。' },
      { id: 'bring back.q3', senseId: 'bring back.s1', errorType: 'meaning', type: '词义', prompt: 'The photo brought back her childhood. 意思是：', options: ['照片唤起童年', '照片被退回商店', '照片变得更亮'], answer: '照片唤起童年', explain: '记忆义。' },
      { id: 'bring back.q4', senseId: 'bring back.s1', errorType: 'collocation', type: '搭配', prompt: '和 bring back 最近的「返回」副词是：', options: ['back', 'down', 'off'], answer: 'back', explain: '短语本身用 back。' },
    ],
    usage: { domains: ['生活', '新闻'], tone: '中性', commonConfusion: ['take back', 'recall'] },
  });

  D('bring in', {
    etymology: {
      origin: '现代英语短语动词：bring + in。in 表示进入某个范围：国家、制度、讨论或账上',
      prefix: null,
      root: { text: 'bring', gloss: '带来' },
      suffix: null,
      history: [
        { label: 'bring', text: '带至某处' },
        { label: 'bring in', text: '引进、进口，也可指赚钱或请人发表意见' },
      ],
      formationLogic: '从外面进到里面，所以货物是进口，新法是引进。',
      mnemonic: 'in 是进来。人、货、规矩从外部进入。',
      note: 'bring in a law 是提出并使法律进入讨论或实施，不是把法条物理搬进屋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The company brings in coffee from three countries.', chinese: '这家公司从三个国家进口咖啡。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bring in.s1', en: 'They brought in an outside lawyer before signing.', zh: '签字前他们请了一位外部律师进来。', structure: 'brought in an outside lawyer', grammar: '名词宾语可放在 in 后。', rationale: '引进人员，不是 bring 的普通「带来一支笔」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The reform brought in it last year.', right: 'The reform brought it in last year.', reason: '代词要放在 bring 与 in 之间。', rule: 'bring sth. in / bring it in。', special: '赚钱：The shop brings in about two thousand a week。' },
    ],
    quiz: [
      { id: 'bring in.q1', senseId: 'bring in.s1', errorType: 'meaning', type: '词义', prompt: 'bring in goods 是：', options: ['进口货物', '把货物销毁', '把货物写进摘要'], answer: '进口货物', explain: '从国外引进。' },
      { id: 'bring in.q2', senseId: 'bring in.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['They brought her in.', 'They brought in she.', 'They in brought her.'], answer: 'They brought her in.', explain: '代词宾格放中间。' },
      { id: 'bring in.q3', senseId: 'bring in.s1', errorType: 'meaning', type: '词义', prompt: 'The tour brought in a large profit. profit 指：', options: ['赚来的利润', '进口的砖', '一场婚礼'], answer: '赚来的利润', explain: 'bring in 可指产生收入。' },
      { id: 'bring in.q4', senseId: 'bring in.s1', errorType: 'collocation', type: '搭配', prompt: '引进新规定常说 bring _____ a new rule.', options: ['in', 'up only as a child', 'round a fainted person'], answer: 'in', explain: '引进用 in。抚养是 bring up。' },
    ],
    usage: { domains: ['商业', '新闻'], tone: '中性', commonConfusion: ['import', 'introduce'] },
  });

  D('bring on', {
    etymology: {
      origin: '现代英语短语动词：bring + on。on 这里不是「在上面」，而是「随之发生」',
      prefix: null,
      root: { text: 'bring', gloss: '导致' },
      suffix: null,
      history: [
        { label: 'bring', text: '使出现' },
        { label: 'bring on', text: '引起疾病、麻烦或突然的发作' },
      ],
      formationLogic: '把不好的状况「带上场」。',
      mnemonic: 'bring on 后面多半是头疼、感冒、危机，不是礼物。',
      note: '也可以是教练把队员派上场：bring on a substitute。语境决定。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Stress can bring on a headache.', chinese: '压力会引发头痛。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'bring on.s1', en: 'The sudden cold brought on his asthma.', zh: '突如其来的寒冷引发了他的哮喘。', structure: 'brought on his asthma', grammar: '宾语是被引起的病症。', rationale: '因果关系，不是把哮喘拿来。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Kind words brought on a birthday gift.', right: 'The long walk brought on a blister.', reason: 'bring on 通常接不好的或突然出现的结果。礼物用 bring。', rule: 'bring on illness / an attack / trouble。', special: '体育里 bring on a player 是换上队员。' },
    ],
    quiz: [
      { id: 'bring on.q1', senseId: 'bring on.s1', errorType: 'meaning', type: '词义', prompt: 'bring on a cold 是：', options: ['引起感冒', '治好感冒', '把感冒写成新闻'], answer: '引起感冒', explain: '导致。' },
      { id: 'bring on.q2', senseId: 'bring on.s1', errorType: 'collocation', type: '搭配', prompt: '哪一项最适合接在 bring on 后面？', options: ['a fever', 'a briefcase', 'a bride'], answer: 'a fever', explain: '病症是典型宾语。' },
      { id: 'bring on.q3', senseId: 'bring on.s1', errorType: 'meaning', type: '词义', prompt: '教练 bring on a substitute 是：', options: ['换上替补', '引起替补生病', '解雇替补'], answer: '换上替补', explain: '体育语境是派上场。' },
      { id: 'bring on.q4', senseId: 'bring on.s1', errorType: 'confusable', type: '易混', prompt: '恢复旧习俗更常说：', options: ['bring back', 'bring on', 'brighten'], answer: 'bring back', explain: '恢复用 back。' },
    ],
    usage: { domains: ['健康', '新闻', '体育'], tone: '中性', commonConfusion: ['cause', 'bring back'] },
  });

  D('bring round', {
    etymology: {
      origin: '现代英语短语动词，英式拼写用 round。让人转回到意识，或把意见转过来',
      prefix: null,
      root: { text: 'bring', gloss: '使到达某种状态' },
      suffix: null,
      history: [
        { label: 'round', text: '转一圈，回到原有状态' },
        { label: 'bring round', text: '使苏醒；说服某人改变看法' },
      ],
      formationLogic: 'round 是转回。昏迷者转回清醒，反对者转回同意。',
      mnemonic: '英式 bring round，美式常作 bring around，意思相同。',
      note: '代词放中间：bring her round。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Cold water helped bring him round after he fainted.', chinese: '他昏过去后，冷水帮助他苏醒过来。' },
    ],
    contexts: [
      { domain: '讨论', senseId: 'bring round.s1', en: 'It took an hour to bring the committee round to the cheaper plan.', zh: '花了一个小时才说服委员会接受那个更便宜的方案。', structure: 'bring sb. round to + 方案', grammar: '人在中间，to 引出新立场。', rationale: '说服，不是把委员会搬到圆形房间。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The nurse brought the patient up after surgery.', right: 'The nurse brought the patient round after surgery.', reason: '苏醒用 bring round。bring up 是抚养或提出话题。', rule: 'bring sb. round = 使苏醒或说服。', special: '美式 around 可接受，但词条形式是 round。' },
    ],
    quiz: [
      { id: 'bring round.q1', senseId: 'bring round.s1', errorType: 'meaning', type: '词义', prompt: 'bring someone round after fainting 是：', options: ['使某人苏醒', '抚养某人', '进口某人'], answer: '使某人苏醒', explain: '恢复意识。' },
      { id: 'bring round.q2', senseId: 'bring round.s1', errorType: 'collocation', type: '搭配', prompt: '说服某人接受计划：bring her round _____ the plan.', options: ['to', 'on', 'of'], answer: 'to', explain: 'bring sb. round to sth.' },
      { id: 'bring round.q3', senseId: 'bring round.s1', errorType: 'confusable', type: '易混', prompt: '提出一个话题应说：', options: ['bring up', 'bring round', 'bring on a fever'], answer: 'bring up', explain: '提出用 bring up。' },
      { id: 'bring round.q4', senseId: 'bring round.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['They brought her round.', 'They brought round she.', 'They round brought her.'], answer: 'They brought her round.', explain: '代词放在中间。' },
    ],
    usage: { domains: ['生活', '新闻'], tone: '英式中性', commonConfusion: ['bring up', 'come round'] },
  });

  D('bring up', {
    etymology: {
      origin: '现代英语短语动词。up 既表示把孩子拉扯大，也表示把话题抬到桌面上',
      prefix: null,
      root: { text: 'bring', gloss: '使出现、使成长' },
      suffix: null,
      history: [
        { label: 'bring up a child', text: '从幼年养到成年' },
        { label: 'bring up a subject', text: '在谈话中提出' },
      ],
      formationLogic: '同一个 up：往上养，或往上提到大家面前。',
      mnemonic: '孩子用 raise 的近义；话题用 mention 的近义。看宾语。',
      note: '呕吐义 bring up one\'s dinner 也存在，考试要看宾语是不是食物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She was brought up by her grandparents in a small town.', chinese: '她在小镇由祖父母抚养长大。' },
    ],
    contexts: [
      { domain: '会议', senseId: 'bring up.s1', en: 'Nobody wanted to bring up the missing invoice.', zh: '没有人愿意提起那张不见了的发票。', structure: 'bring up + 话题', grammar: '话题名词放在 up 后，代词则说 bring it up。', rationale: '提出问题，不是抚养发票。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'Please bring up the baby in the meeting.', right: 'Please bring up the budget in the meeting.', reason: '会议上 bring up 的自然宾语是议题。抚养孩子不用会议这个场景硬配。', rule: 'bring up a child / bring up a topic。', special: 'be brought up to do 表示家教养成的习惯。' },
    ],
    quiz: [
      { id: 'bring up.q1', senseId: 'bring up.s1', errorType: 'meaning', type: '词义', prompt: 'bring up children 是：', options: ['抚养孩子', '把孩子进口', '使孩子苏醒'], answer: '抚养孩子', explain: '养大。' },
      { id: 'bring up.q2', senseId: 'bring up.s1', errorType: 'meaning', type: '词义', prompt: 'bring up a question 是：', options: ['提出一个问题', '把问题养大', '取消问题'], answer: '提出一个问题', explain: '在谈话中提起。' },
      { id: 'bring up.q3', senseId: 'bring up.s1', errorType: 'grammar', type: '语法', prompt: '代词应说：', options: ['bring it up', 'bring up it', 'up it bring'], answer: 'bring it up', explain: '代词放中间。' },
      { id: 'bring up.q4', senseId: 'bring up.s1', errorType: 'confusable', type: '易混', prompt: '引发头痛更常说：', options: ['bring on', 'bring up', 'bring in goods'], answer: 'bring on', explain: '疾病用 bring on。' },
    ],
    usage: { domains: ['生活', '会议'], tone: '中性', commonConfusion: ['raise', 'mention'] },
  });

  D('brink', {
    etymology: {
      origin: '中古英语，与斯堪的纳维亚语里「边缘、陡岸」有关。现在几乎总是比喻：坏事或新局面一触即发',
      prefix: null,
      root: { text: 'brink', gloss: '边缘' },
      suffix: null,
      history: [
        { label: 'brink', text: '原可指陡边' },
        { label: 'on the brink of', text: '现代英语固定为「濒于」' },
      ],
      formationLogic: '人站在边上，下一步就是掉下去或跨过去。',
      mnemonic: '搭配锁死：on the brink of。',
      note: '物理杯沿用 brim 或 rim，悬崖边可用 edge 或 brink，但 brink 更文学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The firm was on the brink of collapse.', chinese: '这家公司濒临倒闭。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'brink.s1', en: 'Talks pulled the two sides back from the brink of a strike.', zh: '谈判把双方从罢工边缘拉了回来。', structure: 'from the brink of a strike', grammar: 'the brink of + 名词或动名词。', rationale: '将要发生，还没发生。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They stood in the brink of an agreement.', right: 'They stood on the brink of an agreement.', reason: '介词是 on，不是 in。', rule: 'on the brink of sth.', special: 'brink 后面通常是重大变化，不说 on the brink of a pencil。' },
    ],
    quiz: [
      { id: 'brink.q1', senseId: 'brink.s1', errorType: 'meaning', type: '词义', prompt: 'on the brink of war 是：', options: ['濒于战争', '已经停战', '在桥下'], answer: '濒于战争', explain: '战争一触即发。' },
      { id: 'brink.q2', senseId: 'brink.s1', errorType: 'collocation', type: '搭配', prompt: '介词应选 on the brink _____ change.', options: ['of', 'to', 'by'], answer: 'of', explain: 'of 接后面的局面。' },
      { id: 'brink.q3', senseId: 'brink.s1', errorType: 'collocation', type: '搭配', prompt: '完整介词是 _____ the brink.', options: ['on', 'in', 'at'], answer: 'on', explain: 'on the brink。' },
      { id: 'brink.q4', senseId: 'brink.s1', errorType: 'confusable', type: '易混', prompt: '杯沿更常说：', options: ['brim', 'brink', 'brief'], answer: 'brim', explain: '杯子用 brim。' },
    ],
    usage: { domains: ['新闻', '写作'], tone: '书面、紧张', commonConfusion: ['edge', 'brim'] },
  });

  D('brisk', {
    etymology: {
      origin: '十六世纪英语，可能与法语 brusque「唐突、利落」有关。现在主要指动作轻快或生意兴旺',
      prefix: null,
      root: { text: 'brisk', gloss: '轻快' },
      suffix: null,
      history: [
        { label: 'brisk', text: '步子或风：快而有精神' },
        { label: 'brisk trade', text: '生意好，顾客来得勤' },
      ],
      formationLogic: '快，但不一定粗鲁。生意好是因为周转快。',
      mnemonic: 'a brisk walk 是快步走。a brisk wind 是清劲的风。',
      note: '副词 briskly。不要和 brick 看混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We took a brisk walk before breakfast.', chinese: '早饭前我们快步走了一段。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'brisk.s1', en: 'Trade was brisk in the first week of the holiday.', zh: '假期第一周生意很兴隆。', structure: 'Trade was brisk', grammar: '形容词作表语，主语常是 trade 或 business。', rationale: '兴旺，不是砖块。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He did a brisk of the report.', right: 'He gave the report a brisk reading.', reason: 'brisk 是形容词，不能当动词「快速做完」。', rule: 'a brisk walk / brisk trade。', special: '语气利落可用 a brisk manner，略带不客气。' },
    ],
    quiz: [
      { id: 'brisk.q1', senseId: 'brisk.s1', errorType: 'meaning', type: '词义', prompt: 'a brisk walk 是：', options: ['轻快的步行', '很慢的爬行', '在桥上停留'], answer: '轻快的步行', explain: '步速快。' },
      { id: 'brisk.q2', senseId: 'brisk.s1', errorType: 'collocation', type: '搭配', prompt: '生意兴隆：_____ trade.', options: ['brisk', 'brick', 'brief'], answer: 'brisk', explain: 'brisk trade。' },
      { id: 'brisk.q3', senseId: 'brisk.s1', errorType: 'grammar', type: '语法', prompt: '副词形式是：', options: ['briskly', 'brisknessly', 'brisked'], answer: 'briskly', explain: '形容词加 -ly。' },
      { id: 'brisk.q4', senseId: 'brisk.s1', errorType: 'confusable', type: '易混', prompt: '砌墙的材料是：', options: ['brick', 'brisk', 'brim'], answer: 'brick', explain: '砖是 brick。' },
    ],
    usage: { domains: ['生活', '商业'], tone: '中性偏积极', commonConfusion: ['quick', 'brusque'] },
  });

  D('british', {
    etymology: {
      origin: '古英语 Brettisc，与不列颠人 Britons 有关，指联合王国及其人民、制度',
      prefix: null,
      root: { text: 'Brit-', gloss: '不列颠' },
      suffix: { text: '-ish', gloss: '属于某民族或地方' },
      history: [
        { label: 'Brettisc', text: '古英语：属于不列颠人的' },
        { label: 'British', text: '现代英语：英国的。词条常以小写 british 入库，句子里作专名形容词要大写' },
      ],
      formationLogic: '地名形容词，不是「宽的」也不是「明亮的」。',
      mnemonic: 'British 对国家，English 对英格兰语言和民族，二者不完全相等。',
      note: 'Scotland、Wales 的人可能说 British 但不说 English。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She showed a British passport at the desk.', chinese: '她在柜台出示了英国护照。' },
    ],
    contexts: [
      { domain: '文化', senseId: 'british.s1', en: 'British spelling keeps the u in colour.', zh: '英式拼写在 colour 里保留 u。', structure: 'British spelling / keeps the u', grammar: '形容词修饰 spelling。', rationale: '指英国规范，不是「宽拼写」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He is British, so his first language must be written English only if he is from England — calling every British person English is the slip.', right: 'He is British; say English only if you mean England.', reason: 'British 覆盖联合王国，English 侧重英格兰。', rule: '国家用 British；英格兰民族或语言用 English。', special: 'the British 可作集体名词指英国人。' },
    ],
    quiz: [
      { id: 'british.q1', senseId: 'british.s1', errorType: 'meaning', type: '词义', prompt: 'British 最稳的范围是：', options: ['与英国相关', '只与一块砖相关', '只与新郎相关'], answer: '与英国相关', explain: '联合王国。' },
      { id: 'british.q2', senseId: 'british.s1', errorType: 'confusable', type: '易混', prompt: '语言名称「英语」更常说：', options: ['English', 'British passport', 'Bright'], answer: 'English', explain: '语言用 English。' },
      { id: 'british.q3', senseId: 'british.s1', errorType: 'grammar', type: '语法', prompt: '句子中作形容词通常写作：', options: ['British', 'britishly', 'the britishness'], answer: 'British', explain: '专名形容词大写。' },
      { id: 'british.q4', senseId: 'british.s1', errorType: 'meaning', type: '词源', prompt: '-ish 在国籍词里表示：', options: ['属于该地或该民族', '使变成动词', '过去式'], answer: '属于该地或该民族', explain: '如 British、Spanish。' },
    ],
    usage: { domains: ['文化', '新闻'], tone: '中性', commonConfusion: ['English'] },
  });

  D('broad', {
    etymology: {
      origin: '古英语 brad，指两边之间距离大。引申为范围广、说法粗略',
      prefix: null,
      root: { text: 'broad', gloss: '宽' },
      suffix: null,
      history: [
        { label: 'brad', text: '古英语：物理上的宽' },
        { label: 'broad', text: '现代英语：宽阔的；广泛的；broadly 表示大体上' },
      ],
      formationLogic: '从路面的宽，到兴趣和定义的宽。',
      mnemonic: 'broad 偏书面的「宽」，wide 更通用。broad shoulders、broad smile 是习惯搭配。',
      note: 'in broad daylight 是光天化日，不是「宽的日光」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The path grew broad as it left the wood.', chinese: '小路离开树林后变宽了。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'broad.s1', en: 'In broad terms, the plan saves money but costs time.', zh: '大体而言，这个计划省钱但费时间。', structure: 'In broad terms', grammar: '固定介词短语，terms 用复数。', rationale: '大概，不是测量路宽。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The thief escaped in wide daylight.', right: 'The thief escaped in broad daylight.', reason: '光天化日用 broad，不用 wide。', rule: 'in broad daylight；a wide road 与 a broad street 都可以，但习语不能换。', special: 'a broad accent 是很重的口音。' },
    ],
    quiz: [
      { id: 'broad.q1', senseId: 'broad.s1', errorType: 'meaning', type: '词义', prompt: 'a broad street 是：', options: ['宽阔的街道', '很短的街道', '只有新娘能走的街道'], answer: '宽阔的街道', explain: '宽。' },
      { id: 'broad.q2', senseId: 'broad.s1', errorType: 'collocation', type: '搭配', prompt: '光天化日：in _____ daylight.', options: ['broad', 'wide', 'brighten'], answer: 'broad', explain: '习语用 broad。' },
      { id: 'broad.q3', senseId: 'broad.s1', errorType: 'collocation', type: '搭配', prompt: '大体上：in broad _____.', options: ['terms', 'term', 'bricks'], answer: 'terms', explain: 'terms 复数。' },
      { id: 'broad.q4', senseId: 'broad.s1', errorType: 'meaning', type: '词义', prompt: 'a broad education 强调：', options: ['涉及面广', '只有一门课', '时间极短'], answer: '涉及面广', explain: '广泛。' },
    ],
    usage: { domains: ['写作', '生活'], tone: '中性', commonConfusion: ['wide'] },
  });

  D('broadcast', {
    etymology: {
      origin: '英语复合词：broad「广」+ cast「抛撒」。原指播种时大面积撒种，二十世纪起指无线电和电视播送',
      prefix: null,
      root: { text: 'cast', gloss: '抛、撒' },
      suffix: null,
      history: [
        { label: 'broadcast seed', text: '把种子撒开，而不是成行点种' },
        { label: 'broadcast', text: '广播节目或播送这个动作。过去式可以是 broadcast 或 broadcasted' },
      ],
      formationLogic: '向四面撒开，所以信号也是向大众发出。',
      mnemonic: '不是 narrow 的点对点。广播是给许多人。',
      note: 'live broadcast 是现场直播。名词和动词同形。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The match will be broadcast live tonight.', chinese: '这场比赛今晚将现场直播。' },
    ],
    contexts: [
      { domain: '媒体', senseId: 'broadcast.s1', en: 'The speech was broadcast on radio and television at noon.', zh: '这篇演说中午在广播和电视上播出。', structure: 'was broadcast on radio and television', grammar: '过去分词与原形同形，被动用 was broadcast。', rationale: '媒体播送，不是撒种子，除非主语是 farmer。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They broadcast the news in a sealed envelope.', right: 'They broadcast the news on the evening programme.', reason: '信封是点对点。broadcast 是对公众播送。', rule: 'broadcast on radio / TV；a news broadcast。', special: '播种旧义只在农业史里出现。' },
    ],
    quiz: [
      { id: 'broadcast.q1', senseId: 'broadcast.s1', errorType: 'meaning', type: '词义', prompt: 'broadcast a programme 是：', options: ['播出节目', '把节目锁进箱子', '把节目写得很短'], answer: '播出节目', explain: '向公众发送。' },
      { id: 'broadcast.q2', senseId: 'broadcast.s1', errorType: 'meaning', type: '词源', prompt: '最早和 cast 相关的意思接近：', options: ['大面积撒种', '砌砖', '系皮带扣'], answer: '大面积撒种', explain: 'broad + cast。' },
      { id: 'broadcast.q3', senseId: 'broadcast.s1', errorType: 'collocation', type: '搭配', prompt: '现场直播：a _____ broadcast.', options: ['live', 'alive', 'living'], answer: 'live', explain: '直播用 live，读音不同。' },
      { id: 'broadcast.q4', senseId: 'broadcast.s1', errorType: 'grammar', type: '语法', prompt: '被动句哪句自然？', options: ['The news was broadcast at six.', 'The news was broadcasted at six by force of a fake past.', 'The news was broadcasting at six as the news itself.'], answer: 'The news was broadcast at six.', explain: '过去分词可用 broadcast。broadcasted 也有人用，但最稳是 broadcast。' },
    ],
    usage: { domains: ['媒体'], tone: '中性', commonConfusion: ['announce'] },
  });

  D('broadcaster', {
    etymology: {
      origin: '英语派生：broadcast 加 -er，表示进行播送的人或机构',
      prefix: null,
      root: { text: 'broadcast', gloss: '播送' },
      suffix: { text: '-er', gloss: '人或机构' },
      history: [
        { label: 'broadcast', text: '播出节目' },
        { label: 'broadcaster', text: '播音员，或广播公司' },
      ],
      formationLogic: '-er 既可指人也可指机构，看冠词和上下文。',
      mnemonic: 'the broadcaster 可能是坐在话筒前的人，也可能是 BBC 那样的台。',
      note: '不要用它代替 microphone。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The broadcaster apologised for the wrong score.', chinese: '播音员为错误的比分道了歉。' },
    ],
    contexts: [
      { domain: '媒体', senseId: 'broadcaster.s1', en: 'A national broadcaster must serve regions, not only the capital.', zh: '全国性广播公司必须服务各地区，而不能只服务首都。', structure: 'A national broadcaster / must serve', grammar: '这里 broadcaster 是机构，谓语用单数。', rationale: '公司义，不是某一个主持人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Please turn the broadcaster louder.', right: 'Please turn the radio louder.', reason: '音量属于设备。broadcaster 是人或公司。', rule: '人/机构 broadcaster；设备 radio、television。', special: '复数 broadcasters 可指多家媒体。' },
    ],
    quiz: [
      { id: 'broadcaster.q1', senseId: 'broadcaster.s1', errorType: 'meaning', type: '词义', prompt: 'broadcaster 可以是：', options: ['播音员或广播公司', '一颗子弹', '一桶水'], answer: '播音员或广播公司', explain: '-er 指行为者。' },
      { id: 'broadcaster.q2', senseId: 'broadcaster.s1', errorType: 'meaning', type: '词义', prompt: '调大音量不该把对象说成：', options: ['broadcaster', 'radio', 'television set'], answer: 'broadcaster', explain: '它不是旋钮所在的机器。题目问不该选的对象，答案是 broadcaster。' },
      { id: 'broadcaster.q3', senseId: 'broadcaster.s1', errorType: 'grammar', type: '语法', prompt: '两家广播公司：', options: ['two broadcasters', 'two broadcaster', 'two broadcast'], answer: 'two broadcasters', explain: '可数复数。' },
      { id: 'broadcaster.q4', senseId: 'broadcaster.s1', errorType: 'meaning', type: '词源', prompt: '-er 加在 broadcast 后表示：', options: ['做这件事的人或机构', '更宽', '过去式'], answer: '做这件事的人或机构', explain: '行为者后缀。' },
    ],
    usage: { domains: ['媒体'], tone: '中性', commonConfusion: ['presenter', 'station'] },
  });

  D('broadcasting', {
    etymology: {
      origin: 'broadcast 的 -ing 名词，指播送这一行业或活动，不是一次具体节目时也可指整个事业',
      prefix: null,
      root: { text: 'broadcast', gloss: '播送' },
      suffix: { text: '-ing', gloss: '活动、行业' },
      history: [
        { label: 'broadcast', text: '向外播送' },
        { label: 'broadcasting', text: '广播事业；也是动词的进行时' },
      ],
      formationLogic: '行业名常不可数：work in broadcasting。',
      mnemonic: 'a broadcast 是一次播出；broadcasting 是这件事本身。',
      note: '进行时 They are broadcasting 与名词要靠冠词和动词区分。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She hopes to work in broadcasting after university.', chinese: '她希望大学毕业后从事广播工作。' },
    ],
    contexts: [
      { domain: '职业', senseId: 'broadcasting.s1', en: 'Public broadcasting relies on a licence fee in that country.', zh: '在那个国家，公共广播靠执照费维持。', structure: 'Public broadcasting / relies on', grammar: '不可数行业名词。', rationale: '事业，不是某一集节目。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He listened to three broadcastings tonight.', right: 'He listened to three broadcasts tonight.', reason: '一次节目用 a broadcast。broadcasting 是行业或活动。', rule: '可数节目 broadcast；行业 broadcasting。', special: '进行时除外：The station is broadcasting now。' },
    ],
    quiz: [
      { id: 'broadcasting.q1', senseId: 'broadcasting.s1', errorType: 'meaning', type: '词义', prompt: 'work in broadcasting 是：', options: ['从事广播行业', '砌三块砖', '养一头牛'], answer: '从事广播行业', explain: '行业。' },
      { id: 'broadcasting.q2', senseId: 'broadcasting.s1', errorType: 'grammar', type: '语法', prompt: '今晚的三档节目应说 three _____.', options: ['broadcasts', 'broadcastings', 'broadcaster'], answer: 'broadcasts', explain: '可数的是 broadcast。' },
      { id: 'broadcasting.q3', senseId: 'broadcasting.s1', errorType: 'grammar', type: '语法', prompt: 'Which is a progressive verb?', options: ['They are broadcasting the final.', 'Broadcasting is her career.', 'The broadcasting of rules is a noun phrase here.'], answer: 'They are broadcasting the final.', explain: 'are broadcasting 是进行时。' },
      { id: 'broadcasting.q4', senseId: 'broadcasting.s1', errorType: 'collocation', type: '搭配', prompt: '公共广播：_____ broadcasting.', options: ['public', 'publically a person', 'bride'], answer: 'public', explain: 'public broadcasting。' },
    ],
    usage: { domains: ['媒体', '职业'], tone: '中性', commonConfusion: ['broadcast'] },
  });

  D('broaden', {
    etymology: {
      origin: '英语派生：broad 加 -en，表示变宽或使范围变大',
      prefix: null,
      root: { text: 'broad', gloss: '宽' },
      suffix: { text: '-en', gloss: '变成、使变成' },
      history: [
        { label: 'broad', text: '宽、广泛' },
        { label: 'broaden', text: '拓宽道路，或拓宽眼界、定义' },
      ],
      formationLogic: '和 brighten 同一套 -en，只是词根换成宽。',
      mnemonic: '路可以 broaden，兴趣也可以 broaden。',
      note: 'broaden out 强调渐渐展开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Travel broadened her view of the job market.', chinese: '旅行拓宽了她对就业市场的看法。' },
    ],
    contexts: [
      { domain: '教育', senseId: 'broaden.s1', en: 'The course is meant to broaden students interests beyond exams.', zh: '这门课意在把学生的兴趣扩到考试之外。', structure: 'meant to broaden + 名词', grammar: '及物动词。', rationale: '扩大范围，不是物理上把学生拉宽。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The road broadens students.', right: 'The road broadens near the river.', reason: '道路自己变宽，不接学生作这种宾语。扩大眼界的主语通常是经历。', rule: '道路不及物；broaden one\'s horizons 及物。', special: 'horizons、outlook、base 是高频宾语。' },
    ],
    quiz: [
      { id: 'broaden.q1', senseId: 'broaden.s1', errorType: 'meaning', type: '词义', prompt: 'broaden one\'s horizons 是：', options: ['开阔眼界', '降低亮度', '广播新闻'], answer: '开阔眼界', explain: '使范围变大。' },
      { id: 'broaden.q2', senseId: 'broaden.s1', errorType: 'grammar', type: '语法', prompt: '路变宽：The road _____.', options: ['broadens', 'broad', 'broadcast'], answer: 'broadens', explain: '动词第三人称。' },
      { id: 'broaden.q3', senseId: 'broaden.s1', errorType: 'meaning', type: '词源', prompt: '-en 的作用是：', options: ['构成动词', '构成国籍', '表示硫磺'], answer: '构成动词', explain: '形容词加 -en。' },
      { id: 'broaden.q4', senseId: 'broaden.s1', errorType: 'collocation', type: '搭配', prompt: '常与 broaden 连用的是：', options: ['horizons', 'bricks as a verb', 'brides'], answer: 'horizons', explain: 'broaden horizons。' },
    ],
    usage: { domains: ['教育', '新闻'], tone: '中性', commonConfusion: ['widen'] },
  });

  D('brochure', {
    etymology: {
      origin: '法语 brochure，来自 brocher「用针缝订」。本指缝起来的薄册子',
      prefix: null,
      root: { text: 'brochure', gloss: '装订成的薄册' },
      suffix: null,
      history: [
        { label: 'brocher', text: '法语：缝、订' },
        { label: 'brochure', text: '现代英语：带图的宣传小册子' },
      ],
      formationLogic: '薄、订在一起、用来介绍，所以不是精装书。',
      mnemonic: '旅游柜台和产品发布会上拿的那本薄册。',
      note: '读音重音常在第二音节。拼写是 ch，不是 sh。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The hotel brochure shows the lake but not the building works.', chinese: '酒店宣传册展示了湖，却没展示正在施工的地方。' },
    ],
    contexts: [
      { domain: '旅游', senseId: 'brochure.s1', en: 'Pick up a brochure at the desk if you want the winter prices.', zh: '如果想知道冬季价格，就在服务台拿一本小册子。', structure: 'Pick up a brochure', grammar: '可数名词。', rationale: '宣传品，不是合同全文。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She published her brochure as a 400-page novel.', right: 'She published a thin brochure about the tours.', reason: 'brochure 是薄册子。长篇是 book。', rule: '宣传、说明用 brochure。', special: 'leaflet 更单页，brochure 通常有几页装订。' },
    ],
    quiz: [
      { id: 'brochure.q1', senseId: 'brochure.s1', errorType: 'meaning', type: '词义', prompt: 'brochure 是：', options: ['宣传小册子', '广播公司', '新郎'], answer: '宣传小册子', explain: '薄册。' },
      { id: 'brochure.q2', senseId: 'brochure.s1', errorType: 'confusable', type: '易混', prompt: '只有一页、常免费散发的更接近：', options: ['a leaflet', 'a novel', 'a bridge'], answer: 'a leaflet', explain: '单页传单是 leaflet。' },
      { id: 'brochure.q3', senseId: 'brochure.s1', errorType: 'meaning', type: '词源', prompt: '法语 brocher 与什么动作有关？', options: ['缝订', '播种', '发亮'], answer: '缝订', explain: '小册子被订起来。' },
      { id: 'brochure.q4', senseId: 'brochure.s1', errorType: 'grammar', type: '语法', prompt: '两本小册子：', options: ['two brochures', 'two brochure', 'two brochur'], answer: 'two brochures', explain: '可数复数。' },
    ],
    usage: { domains: ['旅游', '商业'], tone: '中性', commonConfusion: ['leaflet', 'booklet'] },
  });

  D('broke', {
    etymology: {
      origin: 'break 的过去式 broke。形容词「身无分文」从 broken「破裂、破产」缩成口语，十八世纪已有',
      prefix: null,
      root: { text: 'break', gloss: '破裂' },
      suffix: null,
      history: [
        { label: 'broke', text: '动词 break 的过去式：打破、打破纪录的 broke' },
        { label: 'broke', text: '形容词：没钱。go broke 是破产、钱花光' },
      ],
      formationLogic: '财务「破了」，所以人是 broke，公司也可 go broke。',
      mnemonic: 'I broke the cup 是动词；I am broke 是没钱。',
      note: 'flat broke 和 stony broke 都是穷得彻底，非正式。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He was broke after paying the repair bill.', chinese: '付完修理费后他身无分文。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'broke.s1', en: 'We cannot eat out this month because we are broke.', zh: '这个月不能下馆子，因为我们没钱了。', structure: 'we are broke', grammar: '形容词作表语，前面是 be，不是 have。', rationale: '财务状态，不是打破杯子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She has broke after the trip.', right: 'She is broke after the trip.', reason: '没钱用 be broke，不用 have。', rule: 'be broke；go broke。', special: '动词过去式才是 broke a window。' },
    ],
    quiz: [
      { id: 'broke.q1', senseId: 'broke.s1', errorType: 'meaning', type: '词义', prompt: 'I am broke 是：', options: ['我没钱了', '我把杯子打破了', '我很明亮'], answer: '我没钱了', explain: '形容词义。' },
      { id: 'broke.q2', senseId: 'broke.s1', errorType: 'grammar', type: '语法', prompt: '哪句表示破产？', options: ['The shop went broke.', 'The shop went break.', 'The shop is break.'], answer: 'The shop went broke.', explain: 'go broke。' },
      { id: 'broke.q3', senseId: 'broke.s1', errorType: 'confusable', type: '易混', prompt: 'She broke the plate 里 broke 是：', options: ['break 的过去式', '形容词没钱', '一种汤'], answer: 'break 的过去式', explain: '后面有宾语 plate。' },
      { id: 'broke.q4', senseId: 'broke.s1', errorType: 'collocation', type: '搭配', prompt: '穷得一个子儿不剩，非正式可说 _____ broke.', options: ['flat', 'bright', 'broad'], answer: 'flat', explain: 'flat broke。' },
    ],
    usage: { domains: ['口语'], tone: '非正式', commonConfusion: ['broken', 'bankrupt'] },
  });

  D('broker', {
    etymology: {
      origin: '中古英语，来自盎格鲁-诺曼语 brocour，原指卖酒的中间人，后来泛指替别人买卖的人',
      prefix: null,
      root: { text: 'broker', gloss: '中间人' },
      suffix: null,
      history: [
        { label: 'brocour', text: '零售酒类的中间商' },
        { label: 'broker', text: '现代英语：股票、保险、房地产经纪人；动词指居中促成' },
      ],
      formationLogic: '本人不一定拥有货物，而是撮合买卖。',
      mnemonic: 'broker 站在买卖双方中间。broker a deal 是促成协议。',
      note: 'stockbroker 是股票经纪人。不要和 broken 听混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'An insurance broker compared four policies for us.', chinese: '一位保险经纪人替我们比较了四份保单。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'broker.s1', en: 'The envoy tried to broker a ceasefire before winter.', zh: '特使试图在冬天之前促成停火。', structure: 'broker a ceasefire', grammar: '动词，宾语是 deal、agreement、ceasefire。', rationale: '居中促成，不是自己打破停火。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The broker means the window is broker.', right: 'The broker sold the shares. The window is broken.', reason: 'broker 是经纪人。破碎是 broken。', rule: '中间人 broker；破的 broken。', special: 'power broker 指有能力撮合政治交易的人。' },
    ],
    quiz: [
      { id: 'broker.q1', senseId: 'broker.s1', errorType: 'meaning', type: '词义', prompt: 'a broker 主要是：', options: ['替人买卖的中间人', '一块砖', '没钱的人'], answer: '替人买卖的中间人', explain: '经纪人。' },
      { id: 'broker.q2', senseId: 'broker.s1', errorType: 'collocation', type: '搭配', prompt: '促成协议：broker a _____.', options: ['deal', 'brick', 'brightness'], answer: 'deal', explain: 'broker a deal。' },
      { id: 'broker.q3', senseId: 'broker.s1', errorType: 'confusable', type: '易混', prompt: '窗户碎了应说：', options: ['broken', 'broker', 'brochure'], answer: 'broken', explain: 'broken 才是破损。' },
      { id: 'broker.q4', senseId: 'broker.s1', errorType: 'meaning', type: '词义', prompt: 'stockbroker 买卖的是：', options: ['股票', '砖', '马'], answer: '股票', explain: '证券经纪人。' },
    ],
    usage: { domains: ['商业', '新闻'], tone: '中性', commonConfusion: ['agent', 'broken'] },
  });

  D('brolly', {
    etymology: {
      origin: '现代英语口语：umbrella 截短后加亲昵后缀 -y，主要在英国英语',
      prefix: null,
      root: { text: 'umbrella', gloss: '伞，被截成 broll- 这一截的口语形式' },
      suffix: { text: '-y', gloss: '口语、亲昵' },
      history: [
        { label: 'umbrella', text: '正式词：雨伞' },
        { label: 'brolly', text: '英式口语：同一把伞，语气随意' },
      ],
      formationLogic: '不是新工具，只是 umbrella 的口语缩略。',
      mnemonic: '听到 brolly 就换算成 umbrella，别去找拉丁词根。',
      note: '美国英语很少说。书面说明文用 umbrella。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Take a brolly. The forecast says rain after four.', chinese: '带把伞。预报说四点以后有雨。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'brolly.s1', en: 'He left his brolly on the bus and arrived soaked.', zh: '他把伞落在公交车上，到的时候湿透了。', structure: 'left his brolly on the bus', grammar: '可数名词，与 umbrella 用法相同。', rationale: '英式口语词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The legal brief defines a brolly as a financial instrument.', right: 'The legal brief defines an umbrella fund, not a brolly.', reason: 'brolly 只是雨伞的口语，不能进正式定义。', rule: '非正式英式英语 = umbrella。', special: '复数 brollies。' },
    ],
    quiz: [
      { id: 'brolly.q1', senseId: 'brolly.s1', errorType: 'meaning', type: '词义', prompt: 'brolly 等于：', options: ['雨伞', '经纪人', '小册子'], answer: '雨伞', explain: 'umbrella 的英式口语。' },
      { id: 'brolly.q2', senseId: 'brolly.s1', errorType: 'context', type: '语境', prompt: '正式合同里应写：', options: ['umbrella', 'brolly', 'broke'], answer: 'umbrella', explain: 'brolly 太口语。' },
      { id: 'brolly.q3', senseId: 'brolly.s1', errorType: 'grammar', type: '语法', prompt: '复数是：', options: ['brollies', 'brollys', 'brolles'], answer: 'brollies', explain: '以辅音 + y 结尾，变 i 加 es。' },
      { id: 'brolly.q4', senseId: 'brolly.s1', errorType: 'meaning', type: '词源', prompt: '这个词主要属于：', options: ['英国口语', '法律拉丁语', '军事编制'], answer: '英国口语', explain: '截短加 -y。' },
    ],
    usage: { domains: ['口语'], tone: '英式非正式', commonConfusion: ['umbrella'] },
  });

  D('bronze', {
    etymology: {
      origin: '意大利语 bronzo，经法语 bronze 进入英语，指铜与锡一类的合金。奖牌义来自第三名的铜牌',
      prefix: null,
      root: { text: 'bronze', gloss: '青铜' },
      suffix: null,
      history: [
        { label: 'bronzo', text: '意大利语：这种褐色合金' },
        { label: 'bronze', text: '英语：金属、铜牌、青铜色' },
      ],
      formationLogic: '材料在先，颜色和名次在后。',
      mnemonic: '金牌 gold，银牌 silver，铜牌 bronze。',
      note: 'Bronze Age 是青铜时代。动词 bronze 可指晒成古铜色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She won a bronze in the relay.', chinese: '她在接力赛中获得铜牌。' },
    ],
    contexts: [
      { domain: '艺术', senseId: 'bronze.s1', en: 'The statue is cast in bronze and stands in the square.', zh: '塑像用青铜铸成，立在广场上。', structure: 'cast in bronze', grammar: '材料不可数，in bronze。', rationale: '金属，不是名次。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He won a gold bronze.', right: 'He won a bronze medal.', reason: '铜牌是 bronze medal，不和 gold 叠在一起。', rule: 'gold / silver / bronze medal。', special: '颜色：a bronze dress。' },
    ],
    quiz: [
      { id: 'bronze.q1', senseId: 'bronze.s1', errorType: 'meaning', type: '词义', prompt: '运动会上的 bronze 是：', options: ['铜牌', '金牌', '裁判哨'], answer: '铜牌', explain: '第三名。' },
      { id: 'bronze.q2', senseId: 'bronze.s1', errorType: 'collocation', type: '搭配', prompt: '铜牌完整说法：a bronze _____.', options: ['medal', 'bridge', 'bride'], answer: 'medal', explain: 'medal 是奖牌。' },
      { id: 'bronze.q3', senseId: 'bronze.s1', errorType: 'meaning', type: '词义', prompt: 'cast in bronze 的 bronze 是：', options: ['青铜这种金属', '第三名的人', '褐色油漆品牌'], answer: '青铜这种金属', explain: '铸造材料。' },
      { id: 'bronze.q4', senseId: 'bronze.s1', errorType: 'confusable', type: '易混', prompt: '第一名是：', options: ['gold', 'bronze', 'brass as a medal name'], answer: 'gold', explain: '金牌 gold。铜牌才是 bronze。' },
    ],
    usage: { domains: ['艺术', '体育'], tone: '中性', commonConfusion: ['brass', 'copper'] },
  });

  D('brooch', {
    etymology: {
      origin: '与 broach 同源，古法语 broche「尖针、烤肉叉」。别在衣服上的装饰针因此得名',
      prefix: null,
      root: { text: 'brooch', gloss: '饰针' },
      suffix: null,
      history: [
        { label: 'broche', text: '古法语：尖的针或叉' },
        { label: 'brooch', text: '英语拼写改成 brooch，读音仍像 broach，指胸针' },
      ],
      formationLogic: '用来别住披肩或作装饰的针。',
      mnemonic: '看起来像 broach，读音也接近，意思是胸针。不要按 school 的 oo 去读。',
      note: '复数 brooches。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She pinned a silver brooch to her coat.', chinese: '她在外套上别了一枚银胸针。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'brooch.s1', en: 'The brooch had belonged to her grandmother and was worn only on Sundays.', zh: '这枚胸针原属她祖母，只在星期日佩戴。', structure: 'The brooch / had belonged to', grammar: '可数名词。', rationale: '首饰，不是扫帚。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He swept the floor with a brooch.', right: 'He swept the floor with a broom.', reason: '扫帚是 broom。brooch 是胸针。', rule: '看词尾：och 是针，om 是扫帚。', special: '动词 broach a subject 是提出话题，拼写不同。' },
    ],
    quiz: [
      { id: 'brooch.q1', senseId: 'brooch.s1', errorType: 'meaning', type: '词义', prompt: 'brooch 是：', options: ['胸针', '扫帚', '肉汤'], answer: '胸针', explain: '别在衣服上。' },
      { id: 'brooch.q2', senseId: 'brooch.s1', errorType: 'confusable', type: '易混', prompt: '扫地用：', options: ['broom', 'brooch', 'broth'], answer: 'broom', explain: '扫帚。' },
      { id: 'brooch.q3', senseId: 'brooch.s1', errorType: 'grammar', type: '语法', prompt: '复数：', options: ['brooches', 'broochs', 'brooch'], answer: 'brooches', explain: '加 -es。' },
      { id: 'brooch.q4', senseId: 'brooch.s1', errorType: 'meaning', type: '词源', prompt: '古法语 broche 的形象是：', options: ['尖针', '一座桥', '一块砖'], answer: '尖针', explain: '所以能别在衣服上。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['broom', 'broach'] },
  });

  D('brood', {
    etymology: {
      origin: '古英语 brod，指一窝孵出的幼鸟。动词「郁闷地想」由母鸟长时伏在窝上引申',
      prefix: null,
      root: { text: 'brood', gloss: '一窝；久想' },
      suffix: null,
      history: [
        { label: 'brod', text: '古英语：同窝的幼雏' },
        { label: 'brood', text: '动词：闷闷地反复想。brood over / on 接烦恼' },
      ],
      formationLogic: '孵蛋要久坐，想心事也久坐，英语用了同一个词。',
      mnemonic: '看见 over a mistake，就是钻牛角尖，不是在数小鸡。',
      note: 'a brood of chickens 仍是一窝鸡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He brooded over the lost contract all weekend.', chinese: '整个周末他都为丢掉的合同闷闷不乐。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'brood.s1', en: 'The hen kept her brood close when the dog entered the yard.', zh: '狗进院子时，母鸡把一窝小鸡拢在身边。', structure: 'kept her brood close', grammar: '名词，一窝可作集体。', rationale: '本义是幼鸟，不是情绪。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She brooded the bad news without a preposition.', right: 'She brooded over the bad news.', reason: '想心事要有 over 或 on。', rule: 'brood over / on a problem。', special: '名词 a brood 不需要这些介词。' },
    ],
    quiz: [
      { id: 'brood.q1', senseId: 'brood.s1', errorType: 'meaning', type: '词义', prompt: 'brood over a failure 是：', options: ['为失败闷想', '把失败广播出去', '孵出一只失败'], answer: '为失败闷想', explain: '动词义。' },
      { id: 'brood.q2', senseId: 'brood.s1', errorType: 'collocation', type: '搭配', prompt: '介词常用 brood _____ the past.', options: ['over', 'into', 'as'], answer: 'over', explain: 'brood over。' },
      { id: 'brood.q3', senseId: 'brood.s1', errorType: 'meaning', type: '词义', prompt: 'a brood of chicks 是：', options: ['一窝小鸡', '一只胸针', '一则新闻'], answer: '一窝小鸡', explain: '名词本义。' },
      { id: 'brood.q4', senseId: 'brood.s1', errorType: 'confusable', type: '易混', prompt: '和「宽」有关的是：', options: ['broad', 'brood', 'brooch'], answer: 'broad', explain: 'broad 才是宽。' },
    ],
    usage: { domains: ['写作', '自然'], tone: '动词偏阴沉', commonConfusion: ['think', 'breed'] },
  });

  D('brook', {
    etymology: {
      origin: '名词「小溪」是古英语 broc。动词「忍受」来自另一词，古英语 brucan「使用、享受」，现只用于否定：brook no delay',
      prefix: null,
      root: { text: 'brook', gloss: '小溪；忍受' },
      suffix: null,
      history: [
        { label: 'broc', text: '古英语：小水流' },
        { label: 'brook', text: '书面动词：容忍，几乎总是否定' },
      ],
      formationLogic: '两条词源不要合成一个故事。看是地形还是 tolerate。',
      mnemonic: '能走进去的多半是小溪；前面有 will not 就是忍受。',
      note: '动词比 put up with 正式得多。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Children paddled in the shallow brook.', chinese: '孩子们在浅浅的小溪里玩水。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'brook.s1', en: 'The captain would brook no argument once the order was given.', zh: '命令一旦下达，船长就容不得争辩。', structure: 'would brook no argument', grammar: '动词后接 no + 名词，正式。', rationale: '忍受义，不是一条溪。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She brooked the noise happily.', right: 'She would not brook the noise.', reason: '这个动词现在几乎只用于否定或带 no 的宾语。', rule: 'brook no delay / not brook opposition。', special: '小溪是可数名词：a mountain brook。' },
    ],
    quiz: [
      { id: 'brook.q1', senseId: 'brook.s1', errorType: 'meaning', type: '词义', prompt: 'a mountain brook 是：', options: ['山间小溪', '山间经纪人', '山间胸针'], answer: '山间小溪', explain: '名词义。' },
      { id: 'brook.q2', senseId: 'brook.s1', errorType: 'meaning', type: '词义', prompt: 'brook no delay 是：', options: ['不容拖延', '没有小溪', '把拖延广播出去'], answer: '不容拖延', explain: '动词否定。' },
      { id: 'brook.q3', senseId: 'brook.s1', errorType: 'grammar', type: '语法', prompt: '哪句符合动词习惯？', options: ['He will brook no excuse.', 'He brooks excuses with joy.', 'He brook no excuse yesterday without tense.'], answer: 'He will brook no excuse.', explain: '否定或 no 宾语。' },
      { id: 'brook.q4', senseId: 'brook.s1', errorType: 'confusable', type: '易混', prompt: '河上的建筑物是：', options: ['bridge', 'brook', 'broom'], answer: 'bridge', explain: '桥是 bridge。' },
    ],
    usage: { domains: ['自然', '书面语'], tone: '名词中性，动词正式', commonConfusion: ['stream', 'tolerate'] },
  });

  D('broom', {
    etymology: {
      origin: '古英语 brom，先指金雀花这类灌木。人们用这种枝条扎扫把，词义才转到扫帚',
      prefix: null,
      root: { text: 'broom', gloss: '金雀花；扫帚' },
      suffix: null,
      history: [
        { label: 'brom', text: '古英语：一种开黄花的灌木' },
        { label: 'broom', text: '现代日常义几乎总是长柄扫帚' },
      ],
      formationLogic: '植物名留给了工具，因为工具就是用这种枝条做的。',
      mnemonic: 'broom 扫地；brooch 别在衣服上。',
      note: 'a new broom 可比喻新上任就大刀阔斧的人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Leave the broom in the cupboard after you sweep.', chinese: '扫完后把扫帚放回柜子。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'broom.s1', en: 'A stiff broom moved the dry leaves but not the mud.', zh: '硬扫帚能清干树叶，却清不了泥。', structure: 'A stiff broom / moved the dry leaves', grammar: '可数工具名词。', rationale: '清洁工具。植物义只在园艺旧文里。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She wore a diamond broom on her collar.', right: 'She wore a diamond brooch on her collar.', reason: '胸针是 brooch。', rule: 'broom 扫把；brooch 胸针。', special: '短语 a new broom sweeps clean。' },
    ],
    quiz: [
      { id: 'broom.q1', senseId: 'broom.s1', errorType: 'meaning', type: '词义', prompt: '日常英语里 broom 是：', options: ['扫帚', '胸针', '小溪'], answer: '扫帚', explain: '扫地工具。' },
      { id: 'broom.q2', senseId: 'broom.s1', errorType: 'meaning', type: '词源', prompt: '更早的意思是：', options: ['一种灌木', '一种汤', '一种子弹'], answer: '一种灌木', explain: '金雀花。' },
      { id: 'broom.q3', senseId: 'broom.s1', errorType: 'confusable', type: '易混', prompt: '胸针是：', options: ['brooch', 'broom', 'brook'], answer: 'brooch', explain: '不要看混。' },
      { id: 'broom.q4', senseId: 'broom.s1', errorType: 'collocation', type: '搭配', prompt: '习语 a new broom sweeps _____.', options: ['clean', 'bright', 'broke'], answer: 'clean', explain: '新官上任三把火。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['brooch', 'brush'] },
  });

  D('broth', {
    etymology: {
      origin: '古英语 broþ，与 brew「煮、酿」同族，指肉或菜煮出的清汤',
      prefix: null,
      root: { text: 'broth', gloss: '煮出来的汤' },
      suffix: null,
      history: [
        { label: 'broþ', text: '古英语：煮肉得到的液体' },
        { label: 'broth', text: '现代英语：清汤。太稠的炖菜更常说 stew 或 soup' },
      ],
      formationLogic: '煮出来的汁，所以比奶油浓汤稀。',
      mnemonic: 'bone broth 是骨汤，这是现在最常见的搭配。',
      note: '一般不可数。a broth 偶尔指一份。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She sipped chicken broth until her voice returned.', chinese: '她喝鸡汤，直到嗓子恢复。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'broth.s1', en: 'The recipe starts with a clear broth, not a thick sauce.', zh: '菜谱从清汤开始，而不是浓酱。', structure: 'starts with a clear broth', grammar: '物质名词，这里 a clear broth 指一种汤。', rationale: '汤，不是扫帚。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Sweep the kitchen with broth.', right: 'Sweep the kitchen with a broom.', reason: '汤是 broth，扫帚是 broom。', rule: '喝的 broth；扫的 broom。', special: 'too many cooks spoil the broth 是习语。' },
    ],
    quiz: [
      { id: 'broth.q1', senseId: 'broth.s1', errorType: 'meaning', type: '词义', prompt: 'broth 是：', options: ['清汤', '扫帚', '胸针'], answer: '清汤', explain: '可以喝。' },
      { id: 'broth.q2', senseId: 'broth.s1', errorType: 'collocation', type: '搭配', prompt: '骨汤：_____ broth.', options: ['bone', 'broom', 'brick'], answer: 'bone', explain: 'bone broth。' },
      { id: 'broth.q3', senseId: 'broth.s1', errorType: 'confusable', type: '易混', prompt: '扫地工具是：', options: ['broom', 'broth', 'brooch'], answer: 'broom', explain: '只差一个字母。' },
      { id: 'broth.q4', senseId: 'broth.s1', errorType: 'meaning', type: '词源', prompt: '它和哪个英语词同族？', options: ['brew', 'bright', 'bridge'], answer: 'brew', explain: '都和煮有关。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['soup', 'broom'] },
  });

  D('brother', {
    etymology: {
      origin: '古英语 broþor，与德语 Bruder、拉丁语 frater 是同一套亲属词的不同分支。英语形式来自古英语，不必再套拉丁拼写',
      prefix: null,
      root: { text: 'brother', gloss: '兄弟' },
      suffix: null,
      history: [
        { label: 'broþor', text: '古英语：同胞兄弟' },
        { label: 'brother', text: '也可用于教友、工会兄弟，表示同一团体' },
      ],
      formationLogic: '血缘在先，团体里的「兄弟」是延伸。',
      mnemonic: 'brother 男，sister 女。brother-in-law 是姻亲。',
      note: '复数 brothers。旧式 brethren 用于教会或社团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her younger brother starts school in September.', chinese: '她弟弟九月开学。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'brother.s1', en: 'My brother and I shared a room until he left for college.', zh: '弟弟上大学之前，我和他合住一间。', structure: 'My brother and I', grammar: '可数，I 在 and 后仍用主格 I。', rationale: '亲属。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He has two brother.', right: 'He has two brothers.', reason: '多于一个要用复数。', rule: 'a brother；two brothers。', special: 'Brother 加大写可作修士头衔。' },
    ],
    quiz: [
      { id: 'brother.q1', senseId: 'brother.s1', errorType: 'meaning', type: '词义', prompt: 'brother 最基本的意思是：', options: ['兄弟', '新娘', '桥梁'], answer: '兄弟', explain: '男性同胞。' },
      { id: 'brother.q2', senseId: 'brother.s1', errorType: 'grammar', type: '语法', prompt: '两个兄弟：', options: ['two brothers', 'two brother', 'two brethren as the only modern plural'], answer: 'two brothers', explain: '现代复数 brothers。' },
      { id: 'brother.q3', senseId: 'brother.s1', errorType: 'meaning', type: '词义', prompt: '工会里称 brother 是：', options: ['同一团体的男性同伴', '亲生弟弟的唯一意思', '一种汤'], answer: '同一团体的男性同伴', explain: '引申义。' },
      { id: 'brother.q4', senseId: 'brother.s1', errorType: 'collocation', type: '搭配', prompt: '姐夫、妹夫一类：brother-_____-law.', options: ['in', 'on', 'of'], answer: 'in', explain: 'brother-in-law。' },
    ],
    usage: { domains: ['生活', '宗教'], tone: '中性', commonConfusion: ['sibling'] },
  });

  D('brow', {
    etymology: {
      origin: '古英语 bru，最早偏眉毛、眼睑。后来也指额头，以及山脊、坡顶',
      prefix: null,
      root: { text: 'brow', gloss: '眉；额；脊' },
      suffix: null,
      history: [
        { label: 'bru', text: '古英语：眼睛上方的毛或缘' },
        { label: 'brow', text: '现代英语：eyebrow 的短说法、额头，或山的眉脊' },
      ],
      formationLogic: '脸的上缘和山的上缘被看成同类线条。',
      mnemonic: 'knit one\'s brows 是皱眉。the brow of the hill 是坡顶。',
      note: '眉毛更明确是 eyebrow。单独 brow 在现代常靠搭配定意思。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Sweat stood on his brow after the climb.', chinese: '爬完后他额头上全是汗。' },
    ],
    contexts: [
      { domain: '地理', senseId: 'brow.s1', en: 'We rested on the brow of the hill before the wind rose.', zh: '起风前我们在山脊处休息。', structure: 'on the brow of the hill', grammar: 'the brow of + 地形。', rationale: '地形义，不是额头。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She raised her browses in surprise.', right: 'She raised her eyebrows in surprise.', reason: '眉毛的复数是 eyebrows。brow 的复数 brows 可以，但不是 browses。', rule: 'eyebrow(s)；knit one\'s brows。', special: 'by the sweat of one\'s brow 指出力干活。' },
    ],
    quiz: [
      { id: 'brow.q1', senseId: 'brow.s1', errorType: 'meaning', type: '词义', prompt: 'sweat on his brow 的 brow 是：', options: ['额头', '扫帚', '兄弟'], answer: '额头', explain: '脸上的部位。' },
      { id: 'brow.q2', senseId: 'brow.s1', errorType: 'collocation', type: '搭配', prompt: '山坡顶部：the brow of the _____.', options: ['hill', 'soup', 'radio'], answer: 'hill', explain: 'the brow of the hill。' },
      { id: 'brow.q3', senseId: 'brow.s1', errorType: 'meaning', type: '词义', prompt: 'knit one\'s brows 是：', options: ['皱眉', '织一顶帽子', '广播新闻'], answer: '皱眉', explain: '眉头皱起。' },
      { id: 'brow.q4', senseId: 'brow.s1', errorType: 'confusable', type: '易混', prompt: '更明确表示眉毛的词是：', options: ['eyebrow', 'brownie as a cake', 'brown'], answer: 'eyebrow', explain: 'eyebrow 不歧义。' },
    ],
    usage: { domains: ['身体', '地理'], tone: '中性偏书面', commonConfusion: ['eyebrow', 'forehead'] },
  });

  D('brown', {
    etymology: {
      origin: '古英语 brun，指褐色，与德语 braun 同族',
      prefix: null,
      root: { text: 'brown', gloss: '褐色' },
      suffix: null,
      history: [
        { label: 'brun', text: '古英语颜色词' },
        { label: 'brown', text: '形容词、名词，也可作动词：把食物煎至变褐' },
      ],
      formationLogic: '颜色稳定后，烹饪里用它表示表面上色。',
      mnemonic: 'brown bread 是褐色面包。brown the onions 是把洋葱炒黄。',
      note: '比较级 browner，最高级 brownest。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The leaves turned brown after the dry week.', chinese: '干旱的一周之后，叶子变成了褐色。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'brown.s1', en: 'Brown the meat in oil before you add the broth.', zh: '加油把肉煎上色，然后再放清汤。', structure: 'Brown the meat / before you add', grammar: '祈使句里 brown 是动词。', rationale: '烹饪动作，不是仅仅描写颜色。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The coat is very brownly.', right: 'The coat is very brown.', reason: '颜色形容词作表语，不要加 -ly。', rule: 'be brown；brown sth. 是动词。', special: 'brown paper 是牛皮纸那种包装纸。' },
    ],
    quiz: [
      { id: 'brown.q1', senseId: 'brown.s1', errorType: 'meaning', type: '词义', prompt: 'brown 作为颜色是：', options: ['褐色', '亮蓝色', '透明'], answer: '褐色', explain: '棕色。' },
      { id: 'brown.q2', senseId: 'brown.s1', errorType: 'grammar', type: '语法', prompt: '把洋葱炒至变色：_____ the onions.', options: ['Brown', 'Brownly', 'Browness'], answer: 'Brown', explain: '动词原形，祈使句。' },
      { id: 'brown.q3', senseId: 'brown.s1', errorType: 'collocation', type: '搭配', prompt: '牛皮纸包装：brown _____.', options: ['paper', 'broadcast', 'brother'], answer: 'paper', explain: 'brown paper。' },
      { id: 'brown.q4', senseId: 'brown.s1', errorType: 'confusable', type: '易混', prompt: '额头是：', options: ['brow', 'brown', 'brew'], answer: 'brow', explain: '只差一个字母。' },
    ],
    usage: { domains: ['生活', '饮食'], tone: '中性', commonConfusion: ['brow'] },
  });

  D('browse', {
    etymology: {
      origin: '古法语 brouter「啃嫩芽」。英语先指牲畜吃嫩叶，再指人随便翻看',
      prefix: null,
      root: { text: 'browse', gloss: '随意翻看；啃食' },
      suffix: null,
      history: [
        { label: 'brouter', text: '法语：吃嫩枝叶' },
        { label: 'browse', text: '现代英语：逛商店、翻书、浏览网页，没有明确购买或阅读目标' },
      ],
      formationLogic: '这儿咬一口、那儿咬一口，所以浏览也是东看一眼西看一眼。',
      mnemonic: 'browse 不必买。search 才是有目标地找。',
      note: 'browse through a magazine。网上 browse a site。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I browsed the shelves and left without a book.', chinese: '我随手翻了翻书架，一本也没买就走了。' },
    ],
    contexts: [
      { domain: '网络', senseId: 'browse.s1', en: 'Students may browse the catalogue, but borrowing needs a card.', zh: '学生可以浏览目录，但借书需要借书证。', structure: 'browse the catalogue', grammar: '及物动词，也可 browse through。', rationale: '随意看，不是已经选定。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She browsed the exact file name in one jump.', right: 'She searched for the exact file name.', reason: '精确查找用 search。browse 是漫无目标地看。', rule: 'browse 随意；search for 有目标。', special: '牲畜义现在较少，多在农牧文本。' },
    ],
    quiz: [
      { id: 'browse.q1', senseId: 'browse.s1', errorType: 'meaning', type: '词义', prompt: 'browse in a shop 是：', options: ['随便看看', '一定买下', '把店广播出去'], answer: '随便看看', explain: '不一定购买。' },
      { id: 'browse.q2', senseId: 'browse.s1', errorType: 'confusable', type: '易混', prompt: '按准确文件名查找应说：', options: ['search', 'browse as a casual look only', 'brown'], answer: 'search', explain: '有目标用 search。' },
      { id: 'browse.q3', senseId: 'browse.s1', errorType: 'meaning', type: '词源', prompt: '最早的形象接近：', options: ['牲畜啃嫩叶', '砌砖', '播种'], answer: '牲畜啃嫩叶', explain: '法语 brouter。' },
      { id: 'browse.q4', senseId: 'browse.s1', errorType: 'collocation', type: '搭配', prompt: '翻杂志：browse _____ a magazine.', options: ['through', 'into a verb ending', 'off'], answer: 'through', explain: 'browse through。' },
    ],
    usage: { domains: ['生活', '网络'], tone: '中性', commonConfusion: ['search', 'scan'] },
  });

  D('bruise', {
    etymology: {
      origin: '古英语 brysan「压碎、损伤」。名词是皮肤下出血形成的青紫伤痕',
      prefix: null,
      root: { text: 'bruise', gloss: '挫伤' },
      suffix: null,
      history: [
        { label: 'brysan', text: '古英语：挤压使受伤' },
        { label: 'bruise', text: '名词瘀伤；动词把水果或人碰出伤痕，也可比喻感情受伤' },
      ],
      formationLogic: '外力压到软组织，表面变色，所以水果碰伤也叫 bruise。',
      mnemonic: '青一块是 bruise。破了皮流血的口子更接近 cut。',
      note: 'bruise easily 是容易青紫。过去式 bruised。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The fall left a dark bruise on her knee.', chinese: '这一跤让她膝盖上留下一块深色瘀伤。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'bruise.s1', en: 'A ripe pear bruises if you pack it under the books.', zh: '熟梨如果压在书下面，就会碰伤。', structure: 'A ripe pear bruises', grammar: '不及物，表示容易出现伤迹。', rationale: '水果，不是皮肤，但同一个词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The knife left a long bruise that kept bleeding.', right: 'The knife left a long cut that kept bleeding.', reason: '流血的开口是 cut 或 wound。bruise 通常皮不破。', rule: '变色瘀伤 bruise；开口 cut。', special: 'bruise sb.\'s ego 是伤自尊。' },
    ],
    quiz: [
      { id: 'bruise.q1', senseId: 'bruise.s1', errorType: 'meaning', type: '词义', prompt: 'a bruise 通常是：', options: ['青紫的瘀伤', '很深的刀口', '一种清汤'], answer: '青紫的瘀伤', explain: '皮下出血。' },
      { id: 'bruise.q2', senseId: 'bruise.s1', errorType: 'confusable', type: '易混', prompt: '一直流血的伤口更应叫：', options: ['a cut', 'a bruise', 'a brow'], answer: 'a cut', explain: '开口用 cut。' },
      { id: 'bruise.q3', senseId: 'bruise.s1', errorType: 'grammar', type: '语法', prompt: '她碰伤了胳膊：She _____ her arm.', options: ['bruised', 'bruise', 'bruisely'], answer: 'bruised', explain: '过去式。' },
      { id: 'bruise.q4', senseId: 'bruise.s1', errorType: 'collocation', type: '搭配', prompt: '容易青紫：bruise _____.', options: ['easily', 'brightly', 'broadly'], answer: 'easily', explain: 'bruise easily。' },
    ],
    usage: { domains: ['健康', '生活'], tone: '中性', commonConfusion: ['wound', 'cut'] },
  });

  D('brunch', {
    etymology: {
      origin: '十九世纪末英语混成词：breakfast 的 br- 加 lunch 的 -unch。大学里把早午餐并成一顿',
      prefix: null,
      root: { text: 'brunch', gloss: '早午餐' },
      suffix: null,
      history: [
        { label: 'breakfast + lunch', text: '两个餐名各取一段' },
        { label: 'brunch', text: '上午晚些时候吃的一顿，代替早餐和午餐' },
      ],
      formationLogic: '时间卡在两餐之间，食物也常混合早点与正餐。',
      mnemonic: 'br 来自 breakfast，unch 来自 lunch。',
      note: '可数：a late brunch。不是 brunchfast。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We met for brunch at eleven on Sunday.', chinese: '我们周日十一点见面吃早午餐。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'brunch.s1', en: 'The cafe serves brunch until two, then switches to cake.', zh: '这家咖啡馆的早午餐供应到两点，之后只卖蛋糕。', structure: 'serves brunch until two', grammar: '餐名常不可数，也可 a brunch。', rationale: '一顿饭的名称。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'They ate brunch at seven in the evening.', right: 'They ate dinner at seven in the evening.', reason: 'brunch 在上午晚段到午后早段，不是晚饭。', rule: '晚间是 dinner 或 supper。', special: '菜单上 eggs 和 salad 常同时出现。' },
    ],
    quiz: [
      { id: 'brunch.q1', senseId: 'brunch.s1', errorType: 'meaning', type: '词义', prompt: 'brunch 是：', options: ['早午餐', '宵夜', '下午茶的正式名称'], answer: '早午餐', explain: '两餐合成。' },
      { id: 'brunch.q2', senseId: 'brunch.s1', errorType: 'meaning', type: '词源', prompt: '这个词由哪两餐合成？', options: ['breakfast 和 lunch', 'lunch 和 dinner', 'bread 和 lunch'], answer: 'breakfast 和 lunch', explain: '混成词。' },
      { id: 'brunch.q3', senseId: 'brunch.s1', errorType: 'context', type: '语境', prompt: '晚上七点的一顿应叫：', options: ['dinner', 'brunch', 'breakfast'], answer: 'dinner', explain: 'brunch 不是晚饭。' },
      { id: 'brunch.q4', senseId: 'brunch.s1', errorType: 'collocation', type: '搭配', prompt: '周日晚些的早午餐：a _____ brunch.', options: ['late', 'midnight', 'brown'], answer: 'late', explain: 'late brunch 仍在白天。' },
    ],
    usage: { domains: ['生活'], tone: '非正式', commonConfusion: ['lunch', 'breakfast'] },
  });

  D('brush', {
    etymology: {
      origin: '古法语 broisse，一束毛或枝固定在柄上。动词由工具而来：刷，或轻轻擦过',
      prefix: null,
      root: { text: 'brush', gloss: '刷子；轻擦' },
      suffix: null,
      history: [
        { label: 'broisse', text: '古法语：刷具' },
        { label: 'brush', text: '英语：牙刷、画笔、刷尘；brush past 是擦身而过' },
      ],
      formationLogic: '工具名可以直接作动词。',
      mnemonic: 'brush your teeth 刷牙。brush the dirt off 把灰刷掉。',
      note: 'a brush with danger 是一次短暂的遭遇，危险擦身而过。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Brush the mud off your shoes before you come in.', chinese: '进门前把鞋上的泥刷掉。' },
    ],
    contexts: [
      { domain: '艺术', senseId: 'brush.s1', en: 'She cleaned the brush before the paint dried on it.', zh: '她在颜料干在笔上之前把画笔洗净。', structure: 'cleaned the brush', grammar: '可数名词。', rationale: '画笔，不是牙刷，但同词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He brushed his teeth by a soap.', right: 'He brushed his teeth with a toothbrush.', reason: '工具用 with。牙膏才是 apply paste，不是 by a soap 这种搭配。', rule: 'brush sth. with a brush；brush teeth。', special: 'brush up on French 是复习法语。' },
    ],
    quiz: [
      { id: 'brush.q1', senseId: 'brush.s1', errorType: 'meaning', type: '词义', prompt: 'a paint brush 是：', options: ['画笔', '扫帚的唯一词', '早午餐'], answer: '画笔', explain: '绘画工具。' },
      { id: 'brush.q2', senseId: 'brush.s1', errorType: 'collocation', type: '搭配', prompt: '刷牙：brush your _____.', options: ['teeth', 'tooths', 'brow'], answer: 'teeth', explain: 'teeth 是复数。' },
      { id: 'brush.q3', senseId: 'brush.s1', errorType: 'meaning', type: '词义', prompt: 'brush past someone 是：', options: ['与某人擦身而过', '给某人画像', '把某人刷成褐色'], answer: '与某人擦身而过', explain: '轻触而过。' },
      { id: 'brush.q4', senseId: 'brush.s1', errorType: 'collocation', type: '搭配', prompt: '复习西班牙语：brush _____ on Spanish.', options: ['up', 'down', 'off'], answer: 'up', explain: 'brush up on。' },
    ],
    usage: { domains: ['生活', '艺术'], tone: '中性', commonConfusion: ['broom', 'sweep'] },
  });

  D('brutal', {
    etymology: {
      origin: '拉丁语 brutus「迟钝、粗重」，经法语 brutal 进入英语，指像野兽一样残忍，或严酷得不留情',
      prefix: null,
      root: { text: 'brut-', gloss: '野兽般、粗暴' },
      suffix: { text: '-al', gloss: '形容词' },
      history: [
        { label: 'brutus', text: '拉丁语：笨重、无理性，与 brute 同根' },
        { label: 'brutal', text: '现代英语：暴力残忍，或诚实到刻薄，如 brutal honesty' },
      ],
      formationLogic: '没有人情的力度，所以暴力和严酷都能用。',
      mnemonic: 'brutal 比 strict 狠，比 frank 更会伤人。',
      note: '副词 brutally。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The film shows the brutal side of the war without music.', chinese: '这部影片不用配乐，展示战争残忍的一面。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'brutal.s1', en: 'Her review was brutal but accurate about the weak ending.', zh: '她的评论很不留情，但对软弱的结尾说得准确。', structure: 'was brutal but accurate', grammar: '形容词作表语。', rationale: '严酷坦率，不一定有肢体暴力。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He spoke very brutal.', right: 'He spoke very brutally.', reason: '修饰动词用副词。', rule: 'a brutal remark；speak brutally。', special: 'brutalist 是建筑风格，不要当成「更残忍」。' },
    ],
    quiz: [
      { id: 'brutal.q1', senseId: 'brutal.s1', errorType: 'meaning', type: '词义', prompt: 'a brutal attack 是：', options: ['残忍的袭击', '很短的袭击', '很亮的袭击'], answer: '残忍的袭击', explain: '暴力。' },
      { id: 'brutal.q2', senseId: 'brutal.s1', errorType: 'meaning', type: '词义', prompt: 'brutal honesty 是：', options: ['不留情面的诚实', '温柔的撒谎', '广播里的诚实'], answer: '不留情面的诚实', explain: '严酷义。' },
      { id: 'brutal.q3', senseId: 'brutal.s1', errorType: 'grammar', type: '语法', prompt: '副词是：', options: ['brutally', 'brutal', 'brutaly'], answer: 'brutally', explain: 'brutal 的词尾 l 后加 -ly，习惯拼作 brutally。' },
      { id: 'brutal.q4', senseId: 'brutal.s1', errorType: 'confusable', type: '易混', prompt: '名词「残暴的人或畜」更接近：', options: ['brute', 'broom', 'brochure'], answer: 'brute', explain: '同词根的名词。' },
    ],
    usage: { domains: ['新闻', '评论'], tone: '贬义或强烈', commonConfusion: ['cruel', 'harsh'] },
  });

  D('brute', {
    etymology: {
      origin: '拉丁语 brutus「无理性的」，经法语进入英语。名词指残暴的人或畜，形容词 brute force 指蛮力',
      prefix: null,
      root: { text: 'brute', gloss: '野兽般的' },
      suffix: null,
      history: [
        { label: 'brutus', text: '拉丁语：迟钝、不靠理性' },
        { label: 'brute', text: '英语：畜生般的人；brute strength 是不用技巧的力气' },
      ],
      formationLogic: '缺少技巧和同情，只剩蛮。',
      mnemonic: 'brute force 不是聪明办法，是硬来。',
      note: '称呼人时侮辱性强。写作优先用 cruel person，除非要这个语气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They opened the case by brute force and broke the lock.', chinese: '他们靠蛮力打开箱子，把锁弄坏了。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'brute.s1', en: 'Calling him a brute ended the conversation at once.', zh: '称他为畜生立刻让谈话结束了。', structure: 'Calling him a brute', grammar: '可数名词，侮辱语。', rationale: '指人的残忍，不是物理学的力。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The engineer used a brute to calculate the load.', right: 'The engineer avoided brute force and calculated the load.', reason: '计算不靠一头 brute。蛮力是 brute force 这个搭配。', rule: 'brute force / brute strength。', special: '形容词 brute 通常只出现在这些固定搭配里。' },
    ],
    quiz: [
      { id: 'brute.q1', senseId: 'brute.s1', errorType: 'meaning', type: '词义', prompt: 'brute force 是：', options: ['蛮力', '精确计算', '轻微的擦碰'], answer: '蛮力', explain: '不讲技巧的力。' },
      { id: 'brute.q2', senseId: 'brute.s1', errorType: 'meaning', type: '词义', prompt: '称呼人 a brute 是：', options: ['骂他残暴', '夸他聪明', '说他是新郎'], answer: '骂他残暴', explain: '侮辱。' },
      { id: 'brute.q3', senseId: 'brute.s1', errorType: 'confusable', type: '易混', prompt: '形容词「残忍的」是：', options: ['brutal', 'broom', 'brow'], answer: 'brutal', explain: 'brute 的形容词。' },
      { id: 'brute.q4', senseId: 'brute.s1', errorType: 'collocation', type: '搭配', prompt: '蛮力搬箱子：by brute _____.', options: ['force', 'brush', 'broth'], answer: 'force', explain: 'brute force。' },
    ],
    usage: { domains: ['写作', '口语'], tone: '贬义', commonConfusion: ['brutal'] },
  });

  D('bubble', {
    etymology: {
      origin: '中古英语，模仿咕嘟声的词。名词是液体里的气泡，动词是起泡',
      prefix: null,
      root: { text: 'bubble', gloss: '气泡；冒泡' },
      suffix: null,
      history: [
        { label: 'bubble', text: '拟声：沸腾或吹气的声音' },
        { label: 'bubble', text: '也可比喻短暂的繁荣，如经济泡沫，那是后来的用法' },
      ],
      formationLogic: '声音像泡破裂或水滚，所以名动同形。',
      mnemonic: 'soap bubble 是肥皂泡。bubble up 是冒上来。',
      note: '经济义 a housing bubble 要有语境，不要当成每一句的默认义。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A single bubble rose and burst on the soup.', chinese: '一个气泡升上来，在汤面上破了。' },
    ],
    contexts: [
      { domain: '经济', senseId: 'bubble.s1', en: 'Prices formed a bubble and then fell within a month.', zh: '价格形成泡沫，然后在一个月内下跌。', structure: 'formed a bubble', grammar: '可数名词，比喻虚高。', rationale: '不是锅里的水泡，是价格脱离基本面。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The water bubble up loudly as a noun without a verb.', right: 'The water bubbled up loudly.', reason: '「冒上来」要用动词形式 bubbled。', rule: 'bubble up；a bubble。', special: 'on the bubble 在美式口语可指处于淘汰边缘。' },
    ],
    quiz: [
      { id: 'bubble.q1', senseId: 'bubble.s1', errorType: 'meaning', type: '词义', prompt: 'a soap bubble 是：', options: ['肥皂泡', '一块肥皂砖', '一种汤'], answer: '肥皂泡', explain: '空气被薄膜包住。' },
      { id: 'bubble.q2', senseId: 'bubble.s1', errorType: 'meaning', type: '词义', prompt: 'a price bubble 是：', options: ['价格泡沫', '价格里的真气泡', '降价公告'], answer: '价格泡沫', explain: '比喻虚高。' },
      { id: 'bubble.q3', senseId: 'bubble.s1', errorType: 'grammar', type: '语法', prompt: '水冒着泡：The water _____.', options: ['bubbled', 'bubble as an adjective only', 'brochure'], answer: 'bubbled', explain: '动词过去式。' },
      { id: 'bubble.q4', senseId: 'bubble.s1', errorType: 'collocation', type: '搭配', prompt: '冒上来：bubble _____.', options: ['up', 'off', 'bride'], answer: 'up', explain: 'bubble up。' },
    ],
    usage: { domains: ['生活', '经济'], tone: '中性', commonConfusion: ['foam'] },
  });

  D('bubbles', {
    etymology: {
      origin: 'bubble 的复数。指许多球状气泡，也作口语里泡沫饮料或泡泡本身',
      prefix: null,
      root: { text: 'bubble', gloss: '气泡' },
      suffix: null,
      history: [
        { label: 'bubble', text: '单个气泡' },
        { label: 'bubbles', text: '成片的泡；儿童语言里也叫吹出来的泡泡' },
      ],
      formationLogic: '复数就是不止一个泡。',
      mnemonic: 'blow bubbles 是吹泡泡。champagne bubbles 是酒里的气泡。',
      note: '作主语时谓语用复数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The children blew bubbles on the steps.', chinese: '孩子们在台阶上吹泡泡。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bubbles.s1', en: 'Tiny bubbles clung to the side of the glass.', zh: '细小的气泡贴在杯壁上。', structure: 'Tiny bubbles / clung to', grammar: '复数名词作主语，动词 clung。', rationale: '多个气泡，不是抽象泡沫经济，除非前面有 market。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The bubbles was huge.', right: 'The bubbles were huge.', reason: '复数主语用 were。若是一个大泡，说 The bubble was huge。', rule: 'bubbles + 复数动词。', special: '专名 Bubbles 作绰号时动词随这个人。' },
    ],
    quiz: [
      { id: 'bubbles.q1', senseId: 'bubbles.s1', errorType: 'meaning', type: '词义', prompt: 'blow bubbles 是：', options: ['吹泡泡', '吹灭蜡烛', '吹响军号'], answer: '吹泡泡', explain: '儿童游戏。' },
      { id: 'bubbles.q2', senseId: 'bubbles.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['The bubbles were rising.', 'The bubbles was rising.', 'The bubbles is rising.'], answer: 'The bubbles were rising.', explain: '复数。' },
      { id: 'bubbles.q3', senseId: 'bubbles.s1', errorType: 'confusable', type: '易混', prompt: '只有一个泡应说：', options: ['a bubble', 'a bubbles', 'a bubbly as the only noun'], answer: 'a bubble', explain: '单数 bubble。' },
      { id: 'bubbles.q4', senseId: 'bubbles.s1', errorType: 'collocation', type: '搭配', prompt: '酒杯里的气泡：champagne _____.', options: ['bubbles', 'brooms', 'broths'], answer: 'bubbles', explain: '复数气泡。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['bubble'] },
  });

  D('buccaneer', {
    etymology: {
      origin: '法语 boucanier。加勒比猎人用 boucan 熏肉，boucan 来自当地语言里的熏架。这些人后来成为加勒比海盗，英语才有冒险家一义',
      prefix: null,
      root: { text: 'buccaneer', gloss: '海盗；冒险家' },
      suffix: null,
      history: [
        { label: 'boucan', text: '熏烤肉的木架' },
        { label: 'buccaneer', text: '十七世纪加勒比海盗；今也比喻商业上大胆冒险的人' },
      ],
      formationLogic: '从熏肉的人到海上抢劫的人，再变成比喻。',
      mnemonic: '比 pirate 更带历史和传奇色彩，现代商战里带一点冒险。',
      note: '不要当成普通水手的中性词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The novel paints him as a buccaneer rather than a merchant.', chinese: '小说把他写成冒险海盗，而不是商人。' },
    ],
    contexts: [
      { domain: '商业评论', senseId: 'buccaneer.s1', en: 'Investors called her a buccaneer after the risky takeover.', zh: '冒险收购之后，投资者称她为商界冒险家。', structure: 'called her a buccaneer', grammar: '可数名词。', rationale: '比喻敢冒险的商人，不是船上的职务名称。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The navy listed him as a buccaneer on the official crew roll.', right: 'Historians describe him as a buccaneer who raided ships.', reason: 'buccaneer 是历史或比喻称呼，不是现代海军军衔。', rule: '海盗史或大胆冒险者。', special: '动词 buccaneer 很少用，表示干海盗式的冒险。' },
    ],
    quiz: [
      { id: 'buccaneer.q1', senseId: 'buccaneer.s1', errorType: 'meaning', type: '词义', prompt: '历史上 buccaneer 是：', options: ['加勒比海盗', '英国广播员', '新郎'], answer: '加勒比海盗', explain: '十七世纪海上冒险者。' },
      { id: 'buccaneer.q2', senseId: 'buccaneer.s1', errorType: 'meaning', type: '词义', prompt: '商界比喻义是：', options: ['大胆冒险的人', '保守的会计', '扫地的人'], answer: '大胆冒险的人', explain: '风险很大的经营者。' },
      { id: 'buccaneer.q3', senseId: 'buccaneer.s1', errorType: 'meaning', type: '词源', prompt: 'boucan 原先是：', options: ['熏肉的架子', '一种桥', '一种扣子'], answer: '熏肉的架子', explain: '猎人用它加工肉。' },
      { id: 'buccaneer.q4', senseId: 'buccaneer.s1', errorType: 'context', type: '语境', prompt: '现代海军正式军衔不应写成：', options: ['buccaneer', 'captain', 'sailor'], answer: 'buccaneer', explain: '它不是现行军衔。' },
    ],
    usage: { domains: ['历史', '评论'], tone: '文学或夸张', commonConfusion: ['pirate'] },
  });

  D('buck', {
    etymology: {
      origin: '古英语 buc 与古诺尔斯语 bukkr 指雄鹿。美元义来自美洲皮毛贸易里的 buckskin，口语里一张一元钞票叫 a buck',
      prefix: null,
      root: { text: 'buck', gloss: '雄鹿；一美元' },
      suffix: null,
      history: [
        { label: 'buc', text: '古英语：雄鹿' },
        { label: 'buck', text: '美式口语：一美元。动词 buck the trend 是逆势而行' },
      ],
      formationLogic: '鹿皮曾当交易单位，钱义因此留下。动词「拱起、反抗」与鹿跳跃有关。',
      mnemonic: 'ten bucks 是十美元。a buck 在森林里才是雄鹿。',
      note: 'pass the buck 是推卸责任，来自纸牌里的 buck 标记。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The ticket costs ten bucks if you buy it online.', chinese: '网上买票要十美元。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'buck.s1', en: 'A buck with full antlers crossed the road at dusk.', zh: '一头长着完整鹿角的雄鹿在黄昏穿过公路。', structure: 'A buck with full antlers', grammar: '可数动物名词。', rationale: '动物义，不是钱。鹿角帮助锁定。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The museum price was one buck with antlers.', right: 'The museum price was one buck.', reason: '鹿角会把 buck 拉回动物。价格句里不要加动物特征。', rule: '钱：数词 + bucks。鹿：a buck。', special: 'buck the system 是反抗体制。' },
    ],
    quiz: [
      { id: 'buck.q1', senseId: 'buck.s1', errorType: 'meaning', type: '词义', prompt: '美式口语 ten bucks 是：', options: ['十美元', '十头鹿', '十块砖'], answer: '十美元', explain: '非正式货币。' },
      { id: 'buck.q2', senseId: 'buck.s1', errorType: 'meaning', type: '词义', prompt: '森林里的 a buck 是：', options: ['雄鹿', '一美元纸币的唯一可能', '小溪'], answer: '雄鹿', explain: '动物本义。' },
      { id: 'buck.q3', senseId: 'buck.s1', errorType: 'collocation', type: '搭配', prompt: '推卸责任：pass the _____.', options: ['buck', 'brick', 'broth'], answer: 'buck', explain: '习语 pass the buck。' },
      { id: 'buck.q4', senseId: 'buck.s1', errorType: 'meaning', type: '词义', prompt: 'buck the trend 是：', options: ['逆着趋势走', '跟随所有人', '把趋势广播出去'], answer: '逆着趋势走', explain: '反抗、对冲趋势。' },
    ],
    usage: { domains: ['口语', '自然'], tone: '钱义非正式', commonConfusion: ['dollar', 'deer'] },
  });

  D('bucket', {
    etymology: {
      origin: '中古英语，可能来自古法语 buket「桶、提桶」。英语里是有提手的敞口桶',
      prefix: null,
      root: { text: 'bucket', gloss: '桶' },
      suffix: null,
      history: [
        { label: 'bucket', text: '提水、装沙的容器' },
        { label: 'bucket', text: 'a bucket of 表一桶的量；俚语 kick the bucket 指死亡' },
      ],
      formationLogic: '容器和它的容量用同一个词。',
      mnemonic: 'bucket 有手柄，cup 没有那么大。',
      note: 'rain buckets down 是倾盆大雨，动词用复数形作状语习惯见 bucket down。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She carried a bucket of water to the garden.', chinese: '她提了一桶水到花园。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bucket.s1', en: 'Leave the mop in the bucket when you finish.', zh: '干完后把拖把留在桶里。', structure: 'in the bucket', grammar: '可数名词。', rationale: '容器。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'A bucket rain fell all night as a noun stack.', right: 'Rain bucketed down all night.', reason: '倾盆大雨用 bucket down，不把 bucket 硬放在 rain 前当形容词。', rule: 'a bucket of water；bucket down。', special: 'bucket list 是想在生前完成的清单，来自 kick the bucket。' },
    ],
    quiz: [
      { id: 'bucket.q1', senseId: 'bucket.s1', errorType: 'meaning', type: '词义', prompt: 'a bucket 是：', options: ['有提手的桶', '一只雄鹿', '一美元'], answer: '有提手的桶', explain: '容器。' },
      { id: 'bucket.q2', senseId: 'bucket.s1', errorType: 'collocation', type: '搭配', prompt: '一桶水：a bucket _____ water.', options: ['of', 'on', 'by'], answer: 'of', explain: 'of 表容量。' },
      { id: 'bucket.q3', senseId: 'bucket.s1', errorType: 'meaning', type: '词义', prompt: 'bucket list 是：', options: ['希望完成的事清单', '买桶的购物单', '水桶的零件表'], answer: '希望完成的事清单', explain: '人生愿望清单。' },
      { id: 'bucket.q4', senseId: 'bucket.s1', errorType: 'collocation', type: '搭配', prompt: '大雨倾盆：It bucketed _____.', options: ['down', 'up', 'off'], answer: 'down', explain: 'bucket down。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['pail'] },
  });

  D('buckle', {
    etymology: {
      origin: '古法语 bocle，拉丁语 buccula「头盔颊带上的小扣」，bucca 是脸颊。英语指导皮带扣；动词还可表示弯曲变形',
      prefix: null,
      root: { text: 'buckle', gloss: '搭扣；弯曲' },
      suffix: null,
      history: [
        { label: 'buccula', text: '拉丁语：面颊上的小带扣' },
        { label: 'buckle', text: '名词扣子；buckle up 系好；压力下 buckle 是弯折或垮掉' },
      ],
      formationLogic: '扣子把带子固定。金属受压弯曲用了同一动词。',
      mnemonic: 'buckle a belt 是扣上。knees buckle 是腿发软。',
      note: 'buckle down 是开始苦干，和扣子的「扣紧」形象有关。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The belt buckle was too stiff to open.', chinese: '皮带扣太紧，打不开。' },
    ],
    contexts: [
      { domain: '工程', senseId: 'buckle.s1', en: 'The shelf buckled under the weight of the books.', zh: '书架在书的重量下弯曲变形了。', structure: 'buckled under the weight', grammar: '不及物动词，under 引出压力。', rationale: '变形，不是扣皮带。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Please buckle down your seat belt as two idioms mixed.', right: 'Please buckle up your seat belt.', reason: '安全带是 buckle up。buckle down 是埋头干活。', rule: 'buckle up 系上；buckle down to work 苦干。', special: '名词前用 a silver buckle。' },
    ],
    quiz: [
      { id: 'buckle.q1', senseId: 'buckle.s1', errorType: 'meaning', type: '词义', prompt: 'a belt buckle 是：', options: ['皮带扣', '水桶', '雄鹿'], answer: '皮带扣', explain: '搭扣。' },
      { id: 'buckle.q2', senseId: 'buckle.s1', errorType: 'collocation', type: '搭配', prompt: '系好安全带：buckle _____.', options: ['up', 'down to a holiday', 'off the deer'], answer: 'up', explain: 'buckle up。' },
      { id: 'buckle.q3', senseId: 'buckle.s1', errorType: 'meaning', type: '词义', prompt: 'The wheel buckled 是：', options: ['轮子变形了', '轮子被扣上了', '轮子很亮'], answer: '轮子变形了', explain: '受力弯曲。' },
      { id: 'buckle.q4', senseId: 'buckle.s1', errorType: 'collocation', type: '搭配', prompt: '开始努力工作：buckle _____ to work.', options: ['down', 'up the deer', 'over'], answer: 'down', explain: 'buckle down。' },
    ],
    usage: { domains: ['生活', '工程'], tone: '中性', commonConfusion: ['fasten', 'bend'] },
  });

  D('buckler', {
    etymology: {
      origin: '古法语 bocler，与 buckle 同源，原指有凸饰的小圆盾，用手握持',
      prefix: null,
      root: { text: 'buckler', gloss: '小圆盾' },
      suffix: null,
      history: [
        { label: 'bocler', text: '法语：带 buckle 状凸起的盾' },
        { label: 'buckler', text: '英语史：左手小盾。现代几乎只见于历史和习语 sword and buckler' },
      ],
      formationLogic: '盾上的凸扣给它名字，功能是格挡。',
      mnemonic: '比 shield 更具体，是旧时小圆盾。',
      note: '不要写成日常「扣子」。扣子是 buckle。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The museum shield is a buckler no larger than a plate.', chinese: '博物馆里的那面盾是小圆盾，还没有盘子大。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'buckler.s1', en: 'Sword and buckler fighting needed a free left hand.', zh: '剑与小圆盾的打法需要腾出左手。', structure: 'Sword and buckler fighting', grammar: '名词，历史器具。', rationale: '武器，不是皮带零件。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Fasten the buckler on your belt before the exam.', right: 'Fasten the buckle on your belt before the exam.', reason: '考试日系皮带用 buckle。buckler 是盾。', rule: '扣 buckle；盾 buckler。', special: '比喻 a buckler of faith 只在古译文里。' },
    ],
    quiz: [
      { id: 'buckler.q1', senseId: 'buckler.s1', errorType: 'meaning', type: '词义', prompt: 'buckler 是：', options: ['小圆盾', '皮带扣', '水桶'], answer: '小圆盾', explain: '手持盾牌。' },
      { id: 'buckler.q2', senseId: 'buckler.s1', errorType: 'confusable', type: '易混', prompt: '皮带上的扣是：', options: ['buckle', 'buckler', 'bucket'], answer: 'buckle', explain: '少一个 r 往往是扣。' },
      { id: 'buckler.q3', senseId: 'buckler.s1', errorType: 'collocation', type: '搭配', prompt: '历史搭配：sword and _____.', options: ['buckler', 'brochure', 'broth'], answer: 'buckler', explain: '剑与小盾。' },
      { id: 'buckler.q4', senseId: 'buckler.s1', errorType: 'context', type: '语境', prompt: '这个词最常见于：', options: ['历史与旧文献', '今天的电脑菜单', '菜谱'], answer: '历史与旧文献', explain: '日常很少用。' },
    ],
    usage: { domains: ['历史'], tone: '古语或专业', commonConfusion: ['buckle', 'shield'] },
  });

  D('bud', {
    etymology: {
      origin: '中古英语 budde，来源不算完全清楚，指植物上将长成叶或花的小芽',
      prefix: null,
      root: { text: 'bud', gloss: '芽；花蕾' },
      suffix: null,
      history: [
        { label: 'budde', text: '中古英语：植物的芽' },
        { label: 'bud', text: '动词发芽。in bud 是含苞。比喻 nip in the bud 是消灭在萌芽状态' },
      ],
      formationLogic: '芽是还没打开的花或叶，所以比喻早早制止。',
      mnemonic: 'bud 小，flower 是打开以后。',
      note: 'taste buds 是味蕾，借用了「小突起」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The roses are still in bud because of the cold.', chinese: '因为天冷，玫瑰还是花蕾。' },
    ],
    contexts: [
      { domain: '园艺', senseId: 'bud.s1', en: 'New buds appeared on the branch after the rain.', zh: '雨后枝条上冒出新芽。', structure: 'New buds / appeared on the branch', grammar: '可数复数。', rationale: '植物芽，不是伙伴 buddy。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They stopped the plan in the flower.', right: 'They nipped the plan in the bud.', reason: '消灭于萌芽是固定习语 nip in the bud。', rule: 'in bud；nip sth. in the bud。', special: 'buddy 才是朋友，多一个 dy 的感觉不要混。' },
    ],
    quiz: [
      { id: 'bud.q1', senseId: 'bud.s1', errorType: 'meaning', type: '词义', prompt: 'a flower bud 是：', options: ['花蕾', '已凋的花', '花瓶'], answer: '花蕾', explain: '还没开放。' },
      { id: 'bud.q2', senseId: 'bud.s1', errorType: 'collocation', type: '搭配', prompt: '含苞：in _____.', options: ['bud', 'broom', 'buck'], answer: 'bud', explain: 'in bud。' },
      { id: 'bud.q3', senseId: 'bud.s1', errorType: 'collocation', type: '搭配', prompt: '防患于未然：nip it in the _____.', options: ['bud', 'bubble', 'bridge'], answer: 'bud', explain: '习语。' },
      { id: 'bud.q4', senseId: 'bud.s1', errorType: 'confusable', type: '易混', prompt: '口语「哥们儿」是：', options: ['buddy', 'bud as the only friend word', 'bronze'], answer: 'buddy', explain: '朋友是 buddy。bud 也可作称呼缩略，但词条义是芽。' },
    ],
    usage: { domains: ['自然', '写作'], tone: '中性', commonConfusion: ['sprout', 'buddy'] },
  });

  D('Buddhism', {
    etymology: {
      origin: 'Buddha 来自梵语，意为觉悟者，加上英语名词后缀 -ism 表示这一宗教与其教导',
      prefix: null,
      root: { text: 'Buddha', gloss: '觉悟者，乔达摩悉达多的尊称' },
      suffix: { text: '-ism', gloss: '学说、宗教体系' },
      history: [
        { label: 'Buddha', text: '尊称，不是普通英语形容词' },
        { label: 'Buddhism', text: '英语对佛教的名称，大写' },
      ],
      formationLogic: '人名式尊称加 -ism，和 Confucianism 一类命名相同。',
      mnemonic: 'Buddhism 是宗教，Buddhist 是信徒或形容词。',
      note: '拼写里 Buddha 的双 d 与 h 都要保留。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He studied Buddhism at university but did not join a temple.', chinese: '他在大学学过佛教，但没有加入寺院。' },
    ],
    contexts: [
      { domain: '文化', senseId: 'Buddhism.s1', en: 'The course compares Buddhism with local folk practice.', zh: '这门课把佛教和当地民间习俗作比较。', structure: 'compares Buddhism with', grammar: '专有名词，通常不加冠词。', rationale: '宗教名称。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She follows the Buddhism.', right: 'She follows Buddhism.', reason: '宗教名称一般不用 the。', rule: 'Buddhism 无冠词；a Buddhist temple 里 Buddhist 是形容词。', special: 'the Buddha 指佛陀本人，要加 the。' },
    ],
    quiz: [
      { id: 'Buddhism.q1', senseId: 'Buddhism.s1', errorType: 'meaning', type: '词义', prompt: 'Buddhism 是：', options: ['佛教', '一位僧人', '一座桥'], answer: '佛教', explain: '宗教名。' },
      { id: 'Buddhism.q2', senseId: 'Buddhism.s1', errorType: 'grammar', type: '语法', prompt: '哪句自然？', options: ['She practises Buddhism.', 'She practises the Buddhism.', 'She practises a Buddhism temple.'], answer: 'She practises Buddhism.', explain: '宗教名不加 the。' },
      { id: 'Buddhism.q3', senseId: 'Buddhism.s1', errorType: 'meaning', type: '词源', prompt: '-ism 在这里表示：', options: ['一套信仰或体系', '复数', '过去式'], answer: '一套信仰或体系', explain: '主义、宗教后缀。' },
      { id: 'Buddhism.q4', senseId: 'Buddhism.s1', errorType: 'confusable', type: '易混', prompt: '信徒应叫：', options: ['a Buddhist', 'a Buddhism', 'a bud as a person'], answer: 'a Buddhist', explain: '人用 -ist。' },
    ],
    usage: { domains: ['文化', '宗教'], tone: '中性', commonConfusion: ['Buddhist'] },
  });

  D('buddhist', {
    etymology: {
      origin: '英语派生：Buddha 加 -ist，表示追随者；也可作形容词，修饰寺院、思想和艺术',
      prefix: null,
      root: { text: 'Buddha', gloss: '觉悟者' },
      suffix: { text: '-ist', gloss: '信奉者；形容词' },
      history: [
        { label: 'Buddha', text: '宗教尊称' },
        { label: 'Buddhist', text: '佛教徒，或佛教的。词条以小写入库时，句首和专名仍常大写' },
      ],
      formationLogic: '-ist 指人，-ism 指体系。',
      mnemonic: 'Buddhist monk 是僧人。Buddhism 不能直接修饰 monk。',
      note: '大小写：a Buddhist，Buddhism。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The Buddhist temple opens its garden to visitors.', chinese: '这座佛教寺院的花园对访客开放。' },
    ],
    contexts: [
      { domain: '文化', senseId: 'buddhist.s1', en: 'She has been a Buddhist since her twenties.', zh: '她从二十多岁起就是佛教徒。', structure: 'has been a Buddhist', grammar: '可数名词，前面用 a。', rationale: '人，不是宗教体系名。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He is a Buddhism.', right: 'He is a Buddhist.', reason: '人用 Buddhist。Buddhism 是宗教。', rule: 'a Buddhist；practise Buddhism。', special: '形容词小写或大写都可见，修饰专名建筑时常大写 Buddhist。' },
    ],
    quiz: [
      { id: 'buddhist.q1', senseId: 'buddhist.s1', errorType: 'meaning', type: '词义', prompt: 'a Buddhist 是：', options: ['佛教徒', '佛教这门宗教', '花蕾'], answer: '佛教徒', explain: '人。' },
      { id: 'buddhist.q2', senseId: 'buddhist.s1', errorType: 'grammar', type: '语法', prompt: '佛教寺院：a _____ temple.', options: ['Buddhist', 'Buddhism', 'Buddhaism'], answer: 'Buddhist', explain: '形容词用 Buddhist。' },
      { id: 'buddhist.q3', senseId: 'buddhist.s1', errorType: 'confusable', type: '易混', prompt: '宗教名称是：', options: ['Buddhism', 'Buddhist', 'buddy'], answer: 'Buddhism', explain: '-ism。' },
      { id: 'buddhist.q4', senseId: 'buddhist.s1', errorType: 'meaning', type: '词源', prompt: '-ist 表示：', options: ['信奉者', '相反', '地点'], answer: '信奉者', explain: '人的后缀。' },
    ],
    usage: { domains: ['文化', '宗教'], tone: '中性', commonConfusion: ['Buddhism'] },
  });

  D('buddy', {
    etymology: {
      origin: '美国英语，十九世纪出现，多半是 brother 的口语变体，专指朋友、哥们儿',
      prefix: null,
      root: { text: 'buddy', gloss: '伙伴' },
      suffix: null,
      history: [
        { label: 'brother', text: '可能的口语来源' },
        { label: 'buddy', text: '非正式：朋友。也用作称呼，有时略带警告口气' },
      ],
      formationLogic: '把兄弟一词说滑，就变成同伴。',
      mnemonic: 'buddy 不是 bud。芽是 bud，朋友是 buddy。',
      note: '复数 buddies。工作搭档可说 a study buddy。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He asked his buddy to keep the spare key.', chinese: '他请哥们儿保管备用钥匙。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'buddy.s1', en: 'Listen, buddy, that seat is taken.', zh: '听着，伙计，那个座位有人了。', structure: 'Listen, buddy', grammar: '称呼语，非正式，可能不友好。', rationale: '称呼，不是植物的芽。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The formal letter began: Dear Buddy Minister.', right: 'The formal letter began: Dear Minister.', reason: 'buddy 不能进入正式头衔。', rule: '朋友或随意称呼。正式书信用姓名或职衔。', special: '电影里的 buddy movie 是伙伴片。' },
    ],
    quiz: [
      { id: 'buddy.q1', senseId: 'buddy.s1', errorType: 'meaning', type: '词义', prompt: 'buddy 在美式口语里是：', options: ['朋友', '花蕾', '水桶'], answer: '朋友', explain: '非正式伙伴。' },
      { id: 'buddy.q2', senseId: 'buddy.s1', errorType: 'grammar', type: '语法', prompt: '复数：', options: ['buddies', 'buddys', 'buddyes'], answer: 'buddies', explain: 'y 变 i 加 es。' },
      { id: 'buddy.q3', senseId: 'buddy.s1', errorType: 'context', type: '语境', prompt: '给部长的正式信应避免：', options: ['buddy', 'Minister', 'Dear'], answer: 'buddy', explain: '太随便。' },
      { id: 'buddy.q4', senseId: 'buddy.s1', errorType: 'confusable', type: '易混', prompt: '植物的芽是：', options: ['bud', 'buddy', 'buck'], answer: 'bud', explain: 'buddy 多了成朋友。' },
    ],
    usage: { domains: ['口语'], tone: '非正式', commonConfusion: ['friend', 'bud'] },
  });

  D('budget', {
    etymology: {
      origin: '古法语 bougette「小皮袋」，拉丁语 bulga「袋子」。英国曾用小袋装财政说明，词义才变成收支计划',
      prefix: null,
      root: { text: 'budget', gloss: '预算' },
      suffix: null,
      history: [
        { label: 'bougette', text: '法语：小口袋' },
        { label: 'budget', text: '英语：预算；动词是编预算；形容词 budget 表示廉价' },
      ],
      formationLogic: '钱袋里有多少，决定能花多少，于是袋子变成计划。',
      mnemonic: 'a family budget 是家庭预算。budget hotels 是便宜旅馆。',
      note: 'on a budget 是钱紧。动词搭配 budget for。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The club has no budget for new shirts this year.', chinese: '俱乐部今年没有买新球衣的预算。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'budget.s1', en: 'We chose a budget flight and paid for seats separately.', zh: '我们选了廉价航班，座位另外付费。', structure: 'a budget flight', grammar: '形容词，表示低价档。', rationale: '廉价，不是政府预算演讲。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'We must budget on new computers.', right: 'We must budget for new computers.', reason: '为某项开支做预算用 for。', rule: 'budget for sth.；on a budget。', special: 'the Budget 在英国可指政府年度预算案，大写。' },
    ],
    quiz: [
      { id: 'budget.q1', senseId: 'budget.s1', errorType: 'meaning', type: '词义', prompt: 'a family budget 是：', options: ['家庭收支计划', '家庭用的小皮袋原物', '家庭广播'], answer: '家庭收支计划', explain: '预算。' },
      { id: 'budget.q2', senseId: 'budget.s1', errorType: 'collocation', type: '搭配', prompt: '为旅行做预算：budget _____ the trip.', options: ['for', 'on', 'into'], answer: 'for', explain: 'budget for。' },
      { id: 'budget.q3', senseId: 'budget.s1', errorType: 'meaning', type: '词义', prompt: 'a budget hotel 强调：', options: ['价钱便宜', '有很多预算可以乱花', '只接待新郎'], answer: '价钱便宜', explain: '形容词义。' },
      { id: 'budget.q4', senseId: 'budget.s1', errorType: 'meaning', type: '词源', prompt: 'bougette 原是：', options: ['小袋子', '小盾', '小溪'], answer: '小袋子', explain: '钱袋形象。' },
    ],
    usage: { domains: ['财经', '生活'], tone: '中性', commonConfusion: ['estimate'] },
  });

  D('budgetary', {
    etymology: {
      origin: '英语派生：budget 加形容词后缀 -ary，表示与预算有关',
      prefix: null,
      root: { text: 'budget', gloss: '预算' },
      suffix: { text: '-ary', gloss: '与……有关的形容词' },
      history: [
        { label: 'budget', text: '收支计划' },
        { label: 'budgetary', text: '正式形容词，多见于政策和会计，如 budgetary control' },
      ],
      formationLogic: '比 budget 作定语更正式。budget airline 口语化，budgetary policy 是公文。',
      mnemonic: '看到 -ary 就知道不是动词，也不能说 cheap。',
      note: '不要造 budgetary 的比较级。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Budgetary limits stopped the library from buying the database.', chinese: '预算限制使图书馆无法购买这个数据库。' },
    ],
    contexts: [
      { domain: '财经', senseId: 'budgetary.s1', en: 'The minister faces budgetary pressure before the new year.', zh: '新年之前部长面临预算压力。', structure: 'faces budgetary pressure', grammar: '形容词只作定语，后面要有名词。', rationale: '财政语境。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'This hotel is budgetary.', right: 'This hotel is a budget hotel.', reason: '便宜要用 budget。budgetary 不能单独作「便宜的」表语。', rule: 'budgetary + 政策名词；budget + 商品。', special: 'budgetary constraints / control / policy。' },
    ],
    quiz: [
      { id: 'budgetary.q1', senseId: 'budgetary.s1', errorType: 'meaning', type: '词义', prompt: 'budgetary control 是：', options: ['预算控制', '廉价遥控器', '广播控制'], answer: '预算控制', explain: '财政管理。' },
      { id: 'budgetary.q2', senseId: 'budgetary.s1', errorType: 'grammar', type: '语法', prompt: '廉价航空应说：', options: ['a budget airline', 'a budgetary airline', 'an airline budgetary'], answer: 'a budget airline', explain: '商品档次用 budget。' },
      { id: 'budgetary.q3', senseId: 'budgetary.s1', errorType: 'meaning', type: '词源', prompt: '-ary 的作用是：', options: ['构成形容词', '构成过去式', '表示两个人'], answer: '构成形容词', explain: 'budget + -ary。' },
      { id: 'budgetary.q4', senseId: 'budgetary.s1', errorType: 'collocation', type: '搭配', prompt: '常与 budgetary 连用的是：', options: ['constraints', 'bubbles in soup', 'brides'], answer: 'constraints', explain: 'budgetary constraints 预算约束。' },
    ],
    usage: { domains: ['财经', '政策'], tone: '正式', commonConfusion: ['budget'] },
  });

  D('buff', {
    etymology: {
      origin: '颜色和皮革义来自 buffalo 皮的浅黄。动词「擦亮」因为用这种软皮抛光。爱好者义来自纽约志愿消防队的浅黄大衣，爱看救火的人被叫 buff',
      prefix: null,
      root: { text: 'buff', gloss: '软皮；擦亮；爱好者' },
      suffix: null,
      history: [
        { label: 'buffalo leather', text: '浅黄柔软的皮' },
        { label: 'buff', text: '抛光；浅黄色；a film buff 是影迷' },
      ],
      formationLogic: '皮的手感给了动词，皮的颜色给了形容词，穿这种颜色的旁观者给了「迷」。',
      mnemonic: '先看搭配：buff the floor 是擦地；a history buff 是历史迷。',
      note: 'in the buff 是光着身子，非正式，来自皮肤像皮革本色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Buff the table until you can see your face in it.', chinese: '把桌子擦到能照见人脸。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'buff.s1', en: 'My uncle is a train buff and knows every local timetable.', zh: '我叔叔是火车迷，当地时刻表都记得。', structure: 'a train buff', grammar: '名词，前面常用领域词。', rationale: '爱好者，不是抛光动作。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'Please buff the movie before Friday.', right: 'Please buff the floor before Friday.', reason: '电影不能擦亮。擦的是表面。影迷才说 a film buff。', rule: 'buff + 表面；a + 领域 + buff。', special: 'buff 作形容词是浅黄色，如 a buff envelope。' },
    ],
    quiz: [
      { id: 'buff.q1', senseId: 'buff.s1', errorType: 'meaning', type: '词义', prompt: 'buff the shoes 是：', options: ['把鞋擦亮', '把鞋变成爱好者', '把鞋藏进桶里'], answer: '把鞋擦亮', explain: '抛光。' },
      { id: 'buff.q2', senseId: 'buff.s1', errorType: 'meaning', type: '词义', prompt: 'a film buff 是：', options: ['影迷', '擦电影的布', '浅黄色电影'], answer: '影迷', explain: '爱好者。' },
      { id: 'buff.q3', senseId: 'buff.s1', errorType: 'collocation', type: '搭配', prompt: '浅黄信封：a _____ envelope.', options: ['buff', 'brutal', 'brief'], answer: 'buff', explain: '颜色义。' },
      { id: 'buff.q4', senseId: 'buff.s1', errorType: 'meaning', type: '词源', prompt: '爱好者义与什么有关？', options: ['浅黄制服的围观者', '拉丁语短', '马笼头'], answer: '浅黄制服的围观者', explain: '纽约消防志愿者的大衣。' },
    ],
    usage: { domains: ['生活', '口语'], tone: '爱好者义非正式', commonConfusion: ['polish', 'fan'] },
  });

  D('buffalo', {
    etymology: {
      origin: '经葡萄牙语或西班牙语 búfalo 进入英语，指水牛或外形相近的大牛。北美 bison 在英语里也常被叫 buffalo',
      prefix: null,
      root: { text: 'buffalo', gloss: '水牛；野牛' },
      suffix: null,
      history: [
        { label: 'búfalo', text: '葡语、西语里的大牛' },
        { label: 'buffalo', text: '英语：亚洲水牛，或美洲野牛的俗称' },
      ],
      formationLogic: '俗名覆盖了两种动物，考试里接受水牛和野牛。',
      mnemonic: '水牛角大、爱水；American buffalo 常指 bison。',
      note: '复数 buffalo 或 buffaloes 都可以。动词 to buffalo 在美式口语是把人搞糊涂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A buffalo stood in the river with only its head showing.', chinese: '一头水牛站在河里，只露出头。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'buffalo.s1', en: 'The herd of buffalo moved north when the grass failed.', zh: '草没了之后，这群野牛向北移动。', structure: 'The herd of buffalo', grammar: '复数可用不变的 buffalo。', rationale: '动物集体。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She buffaloed the shoes until they shone.', right: 'She buffed the shoes until they shone.', reason: '擦亮是 buff。buffalo 是动物。', rule: '动物 buffalo；抛光 buff。', special: 'Buffalo 大写是美国城市。' },
    ],
    quiz: [
      { id: 'buffalo.q1', senseId: 'buffalo.s1', errorType: 'meaning', type: '词义', prompt: 'buffalo 可以指：', options: ['水牛或美洲野牛', '皮带扣', '小册子'], answer: '水牛或美洲野牛', explain: '大型牛类。' },
      { id: 'buffalo.q2', senseId: 'buffalo.s1', errorType: 'confusable', type: '易混', prompt: '擦亮皮鞋的动词是：', options: ['buff', 'buffalo', 'buffer'], answer: 'buff', explain: '不要多写 alo。' },
      { id: 'buffalo.q3', senseId: 'buffalo.s1', errorType: 'grammar', type: '语法', prompt: '一群可以写成 a herd of _____.', options: ['buffalo', 'buffalos only if the other forms were banned', 'buffala'], answer: 'buffalo', explain: '复数可与单数同形。' },
      { id: 'buffalo.q4', senseId: 'buffalo.s1', errorType: 'meaning', type: '词义', prompt: '北美口语里的 buffalo 常等于：', options: ['bison', 'a small deer', 'a goat'], answer: 'bison', explain: '美洲野牛的俗称。' },
    ],
    usage: { domains: ['自然'], tone: '中性', commonConfusion: ['bison', 'buff'] },
  });

  D('buffer', {
    etymology: {
      origin: '英语：先指缓和冲击的人或物，与 buff「减轻打击」有关。技术里的缓冲区是后来的比喻',
      prefix: null,
      root: { text: 'buffer', gloss: '缓冲' },
      suffix: null,
      history: [
        { label: 'buffer', text: '火车缓冲器、保护垫，用来吸收冲击' },
        { label: 'buffer', text: '抽象：缓冲时间、缓冲区、缓冲国' },
      ],
      formationLogic: '放在两股力量中间，让冲击变小。',
      mnemonic: 'a buffer zone 是缓冲区。电脑里的 buffer 暂时存放数据。',
      note: '动词 buffer against 表示减轻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Leave a buffer of ten minutes between the trains.', chinese: '两班火车之间留出十分钟缓冲。' },
    ],
    contexts: [
      { domain: '科技', senseId: 'buffer.s1', en: 'The video paused while the buffer filled.', zh: '缓冲区填充时，视频暂停了。', structure: 'while the buffer filled', grammar: '可数名词，电脑里常默认数据缓冲。', rationale: '不是擦地，也不是水牛。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'A buffer crossed the grassland in a herd.', right: 'A buffalo crossed the grassland in a herd.', reason: '成群的动物是 buffalo。buffer 是缓冲物。', rule: 'buffer 减冲击；buffalo 是牛。', special: 'buffer state 是缓冲国。' },
    ],
    quiz: [
      { id: 'buffer.q1', senseId: 'buffer.s1', errorType: 'meaning', type: '词义', prompt: 'a buffer zone 是：', options: ['缓冲区', '野生牛群', '抛光区'], answer: '缓冲区', explain: '中间隔离带。' },
      { id: 'buffer.q2', senseId: 'buffer.s1', errorType: 'meaning', type: '词义', prompt: '视频加载时的 buffer 是：', options: ['临时存放数据的区', '一种动物', '皮带扣'], answer: '临时存放数据的区', explain: '计算机术语。' },
      { id: 'buffer.q3', senseId: 'buffer.s1', errorType: 'confusable', type: '易混', prompt: '水牛是：', options: ['buffalo', 'buffer', 'buff'], answer: 'buffalo', explain: '三个词不要看混。' },
      { id: 'buffer.q4', senseId: 'buffer.s1', errorType: 'collocation', type: '搭配', prompt: '减轻冲击：a buffer _____ shocks.', options: ['against', 'into', 'off'], answer: 'against', explain: 'buffer against。' },
    ],
    usage: { domains: ['科技', '新闻'], tone: '中性', commonConfusion: ['cushion', 'buffalo'] },
  });

  D('buffet', {
    etymology: {
      origin: '名词来自法语 buffet，原为餐具柜，食物摆在柜上让人自取，才有自助餐。另有一动词表示反复拍打，来源不同',
      prefix: null,
      root: { text: 'buffet', gloss: '餐柜；自助餐' },
      suffix: null,
      history: [
        { label: 'buffet', text: '法语：边柜' },
        { label: 'buffet', text: '英语：自助餐。读音在餐名义上接近 BOO-fay' },
      ],
      formationLogic: '柜子变成供餐方式。拍打义不要和菜单读音混用。',
      mnemonic: 'a buffet lunch 自己取食。winds buffet the coast 是风击打海岸，动词重音常在前。',
      note: '拼写一样，读音和词性帮助区分。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Breakfast is a buffet between seven and ten.', chinese: '早餐是自助餐，时间从七点到十点。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'buffet.s1', en: 'Guests complained that the buffet ran out of fruit by eight.', zh: '客人抱怨自助餐的水果八点就没了。', structure: 'the buffet ran out of fruit', grammar: '名词，可数，常与 the 连用指这场餐。', rationale: '供餐方式。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We ate a buffer in the hotel.', right: 'We ate at the buffet in the hotel.', reason: '自助餐是 buffet。buffer 是缓冲。', rule: 'eat at a buffet。', special: 'all-you-can-eat buffet 是吃到饱。' },
    ],
    quiz: [
      { id: 'buffet.q1', senseId: 'buffet.s1', errorType: 'meaning', type: '词义', prompt: 'a buffet lunch 是：', options: ['自助午餐', '缓冲午餐', '水牛午餐'], answer: '自助午餐', explain: '自己取食。' },
      { id: 'buffet.q2', senseId: 'buffet.s1', errorType: 'confusable', type: '易混', prompt: '数据缓冲是：', options: ['buffer', 'buffet', 'buffalo'], answer: 'buffer', explain: '少一个字母音不同。' },
      { id: 'buffet.q3', senseId: 'buffet.s1', errorType: 'meaning', type: '词源', prompt: '餐名义原先和什么家具有关？', options: ['餐具柜', '小圆盾', '公文包'], answer: '餐具柜', explain: '法语 buffet。' },
      { id: 'buffet.q4', senseId: 'buffet.s1', errorType: 'collocation', type: '搭配', prompt: '在自助餐用膳：eat _____ the buffet.', options: ['at', 'on', 'by force'], answer: 'at', explain: 'at the buffet。' },
    ],
    usage: { domains: ['饮食', '旅行'], tone: '中性', commonConfusion: ['buffer'] },
  });

  D('bug', {
    etymology: {
      origin: '十六、十七世纪英语里出现，指小虫，更早来源不清楚。机器故障义在计算机之前就有；窃听和惹恼是进一步的口语引申',
      prefix: null,
      root: { text: 'bug', gloss: '虫；故障' },
      suffix: null,
      history: [
        { label: 'bug', text: '小虫' },
        { label: 'bug', text: '程序错误、窃听器，动词 bug sb. 是烦扰' },
      ],
      formationLogic: '小而讨厌的东西钻进系统，所以故障和窃听都说得通。',
      mnemonic: '软件里的 bug 用 fix。人被烦用 stop bugging me。',
      note: '不要把每一只虫都叫 bug。生物学上 beetle 等更精确，日常则很宽。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bug in the code deleted the last line.', chinese: '代码里的一个错误把最后一行删掉了。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'bug.s1', en: 'Stop bugging your sister while she is reading.', zh: '妹妹在读书，别再去烦她。', structure: 'Stop bugging your sister', grammar: '动词，口语。', rationale: '烦扰，不是昆虫。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Please bug the error into the software.', right: 'Please fix the bug in the software.', reason: '排除故障用 fix a bug，不是 bug the error。', rule: 'a bug in the code；bug sb. 烦某人。', special: 'a listening bug 是窃听器。' },
    ],
    quiz: [
      { id: 'bug.q1', senseId: 'bug.s1', errorType: 'meaning', type: '词义', prompt: 'a bug in the program 是：', options: ['程序错误', '程序里的预算', '程序的新郎'], answer: '程序错误', explain: '故障。' },
      { id: 'bug.q2', senseId: 'bug.s1', errorType: 'meaning', type: '词义', prompt: 'Stop bugging me 是：', options: ['别烦我', '别给我捉虫', '别给我预算'], answer: '别烦我', explain: '动词烦扰。' },
      { id: 'bug.q3', senseId: 'bug.s1', errorType: 'collocation', type: '搭配', prompt: '修好故障：_____ the bug.', options: ['fix', 'buffet', 'broaden'], answer: 'fix', explain: 'fix a bug。' },
      { id: 'bug.q4', senseId: 'bug.s1', errorType: 'meaning', type: '词义', prompt: 'a listening bug 是：', options: ['窃听器', '听得见的蜜蜂', '广播公司'], answer: '窃听器', explain: '隐蔽的监听装置。' },
    ],
    usage: { domains: ['科技', '口语'], tone: '故障中性，动词非正式', commonConfusion: ['insect', 'error'] },
  });

  D('bugle', {
    etymology: {
      origin: '古法语 bugle，拉丁语 buculus「小公牛」。最初是牛角做的号，后来成为军队用的铜管小号',
      prefix: null,
      root: { text: 'bugle', gloss: '军号' },
      suffix: null,
      history: [
        { label: 'buculus', text: '拉丁语：小牛，角可做成号' },
        { label: 'bugle', text: '现代英语：无键的铜管军号，用来发信号' },
      ],
      formationLogic: '从兽角到金属号，功能仍是传令，不是管弦乐队的主奏。',
      mnemonic: 'bugle call 是军号声。不要和 bug 看混。',
      note: '吹号的人是 bugler。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bugle call woke the camp at dawn.', chinese: '黎明时军号声唤醒了营地。' },
    ],
    contexts: [
      { domain: '军事', senseId: 'bugle.s1', en: 'The bugle sounded retreat long before the rain.', zh: '下雨前很久，军号就吹响了撤退。', structure: 'The bugle sounded retreat', grammar: '器具作主语，sounded 是发出信号。', rationale: '信号乐器。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'There is a bugle in the software.', right: 'There is a bug in the software.', reason: '程序错误是 bug。bugle 是号。', rule: '军号 bugle；故障 bug。', special: '动词 bugle 是吹军号。' },
    ],
    quiz: [
      { id: 'bugle.q1', senseId: 'bugle.s1', errorType: 'meaning', type: '词义', prompt: 'bugle 是：', options: ['军号', '小虫', '气泡'], answer: '军号', explain: '军队信号乐器。' },
      { id: 'bugle.q2', senseId: 'bugle.s1', errorType: 'collocation', type: '搭配', prompt: '军号声：a bugle _____.', options: ['call', 'bug', 'broth'], answer: 'call', explain: 'bugle call。' },
      { id: 'bugle.q3', senseId: 'bugle.s1', errorType: 'confusable', type: '易混', prompt: '程序错误是：', options: ['bug', 'bugle', 'buggy as the only noun'], answer: 'bug', explain: 'bugle 多了乐器义。' },
      { id: 'bugle.q4', senseId: 'bugle.s1', errorType: 'meaning', type: '词源', prompt: 'buculus 指：', options: ['小公牛', '小袋子', '短'], answer: '小公牛', explain: '号角最初用牛角。' },
    ],
    usage: { domains: ['军事', '音乐'], tone: '中性', commonConfusion: ['trumpet', 'bug'] },
  });

  D('build', {
    etymology: {
      origin: '古英语 byldan，与 bold 的古义「住所」有关，指把住处造起来。名词 build 后来指体格',
      prefix: null,
      root: { text: 'build', gloss: '建造' },
      suffix: null,
      history: [
        { label: 'byldan', text: '古英语：建造' },
        { label: 'build', text: '动词建造、建立关系或信心；名词 a man of heavy build 是体格' },
      ],
      formationLogic: '把部分组成整体。身体的「搭建方式」就成了体格。',
      mnemonic: 'build a house 是盖房。build trust 是建立信任。of medium build 是中等身材。',
      note: '过去式 built，不是 builded。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They plan to build a clinic beside the school.', chinese: '他们计划在学校旁边建一所诊所。' },
    ],
    contexts: [
      { domain: '描述', senseId: 'build.s1', en: 'The suspect is of slim build and wore a grey coat.', zh: '嫌疑人身材瘦削，穿灰色外套。', structure: 'of slim build', grammar: '名词 build 前用 of，不说 a slim build person。', rationale: '体格，不是施工。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The bridge was build in 1990.', right: 'The bridge was built in 1990.', reason: '过去分词是 built。', rule: 'build, built, built。', special: 'build on earlier work 是在已有基础上发展。' },
    ],
    quiz: [
      { id: 'build.q1', senseId: 'build.s1', errorType: 'meaning', type: '词义', prompt: 'build a hospital 是：', options: ['建造医院', '浏览医院', '给医院编号'], answer: '建造医院', explain: '施工。' },
      { id: 'build.q2', senseId: 'build.s1', errorType: 'grammar', type: '语法', prompt: '被动式：was _____.', options: ['built', 'build', 'builded'], answer: 'built', explain: '过去分词 built。' },
      { id: 'build.q3', senseId: 'build.s1', errorType: 'collocation', type: '搭配', prompt: '中等身材：of medium _____.', options: ['build', 'brick', 'bud'], answer: 'build', explain: '名词体格。' },
      { id: 'build.q4', senseId: 'build.s1', errorType: 'collocation', type: '搭配', prompt: '建立信任：build _____.', options: ['trust', 'a trustly', 'trustness'], answer: 'trust', explain: '抽象宾语可以用 build。' },
    ],
    usage: { domains: ['建筑', '生活'], tone: '中性', commonConfusion: ['construct'] },
  });

  D('building', {
    etymology: {
      origin: '英语派生：build 加 -ing。既是建造这件事，也是造好的楼房',
      prefix: null,
      root: { text: 'build', gloss: '建造' },
      suffix: { text: '-ing', gloss: '动作或动作的结果' },
      history: [
        { label: 'build', text: '把结构做起来' },
        { label: 'building', text: '有墙有顶的建筑物；也可指建造过程' },
      ],
      formationLogic: '动作名词和结果名词同形，靠冠词区分。',
      mnemonic: 'a building 是一栋楼。building work 是施工。',
      note: '复数 buildings。学校、医院都是 buildings，不限于高楼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The oldest building in the town is the library.', chinese: '镇上最老的建筑是图书馆。' },
    ],
    contexts: [
      { domain: '建筑', senseId: 'building.s1', en: 'No one may enter the building while the roof is being repaired.', zh: '屋顶整修期间任何人不得进入这栋楼。', structure: 'enter the building', grammar: '可数名词。', rationale: '结果：建筑物。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They are building a new building site as if site were the house.', right: 'They are building a new library on the site.', reason: 'building 可作进行时。若指楼，要说 a new building，不要和 site 缠在一起含糊。', rule: 'a building 是楼；a building site 是工地。', special: 'body building 是健身，另作复合词。' },
    ],
    quiz: [
      { id: 'building.q1', senseId: 'building.s1', errorType: 'meaning', type: '词义', prompt: 'a tall building 是：', options: ['高楼', '一个高个子的体格', '一把高刷子'], answer: '高楼', explain: '建筑物。' },
      { id: 'building.q2', senseId: 'building.s1', errorType: 'collocation', type: '搭配', prompt: '工地：a building _____.', options: ['site', 'bud', 'bugle'], answer: 'site', explain: 'building site。' },
      { id: 'building.q3', senseId: 'building.s1', errorType: 'grammar', type: '语法', prompt: '三栋楼：', options: ['three buildings', 'three building', 'three builds'], answer: 'three buildings', explain: '可数复数。' },
      { id: 'building.q4', senseId: 'building.s1', errorType: 'meaning', type: '词源', prompt: '-ing 可以表示：', options: ['动作或其结果', '相反的意思', '雌性'], answer: '动作或其结果', explain: '建造过程或楼房。' },
    ],
    usage: { domains: ['建筑', '生活'], tone: '中性', commonConfusion: ['construction'] },
  });

  D('buildup', {
    etymology: {
      origin: '现代英语复合词：build + up，写成 buildup 或 build-up，指逐步增加或事前的集结',
      prefix: null,
      root: { text: 'build up', gloss: '逐步积累' },
      suffix: null,
      history: [
        { label: 'build up', text: '短语动词：增强、积累' },
        { label: 'buildup', text: '名词：军力集结、压力积累、宣传预热' },
      ],
      formationLogic: '动词短语收成一个名词，重音在 build。',
      mnemonic: 'a buildup of troops 是集结。a buildup of pressure 是压力升高。',
      note: '带连字符 build-up 同样常见。代词仍说 build it up。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The buildup of traffic started before sunrise.', chinese: '车流在日出前就开始增多。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'buildup.s1', en: 'Reporters watched a military buildup along the border.', zh: '记者观察到边境上的军事集结。', structure: 'a military buildup', grammar: '可数名词，一次集结用 a。', rationale: '集结，不是一栋楼。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The army builduped on the border.', right: 'There was a buildup of troops on the border.', reason: 'buildup 是名词。动词要用 build up。', rule: 'a buildup of；build up forces。', special: '广告里的 buildup 是事前热炒。' },
    ],
    quiz: [
      { id: 'buildup.q1', senseId: 'buildup.s1', errorType: 'meaning', type: '词义', prompt: 'a military buildup 是：', options: ['军事集结', '军事建筑物的图纸', '军号'], answer: '军事集结', explain: '力量逐渐增加。' },
      { id: 'buildup.q2', senseId: 'buildup.s1', errorType: 'grammar', type: '语法', prompt: '动词应说：', options: ['build up supplies', 'buildup supplies as a verb', 'builtup supplies today without a verb'], answer: 'build up supplies', explain: '短语动词分开或按动词变化。' },
      { id: 'buildup.q3', senseId: 'buildup.s1', errorType: 'collocation', type: '搭配', prompt: '压力积累：a buildup of _____.', options: ['pressure', 'brides', 'brooches'], answer: 'pressure', explain: 'buildup of pressure。' },
      { id: 'buildup.q4', senseId: 'buildup.s1', errorType: 'confusable', type: '易混', prompt: '一栋楼是：', options: ['a building', 'a buildup', 'a bud'], answer: 'a building', explain: '建筑物不是 buildup。' },
    ],
    usage: { domains: ['新闻', '科技'], tone: '中性', commonConfusion: ['increase', 'building'] },
  });

  D('bulb', {
    etymology: {
      origin: '拉丁语 bulbus「洋葱、球根」。植物球茎在先，电灯泡因玻璃泡形状相似而得名',
      prefix: null,
      root: { text: 'bulb', gloss: '球根；灯泡' },
      suffix: null,
      history: [
        { label: 'bulbus', text: '拉丁语：洋葱状的根' },
        { label: 'bulb', text: '英语：植物球茎，或电灯泡' },
      ],
      formationLogic: '形状都是一头圆。技术义没有换词根。',
      mnemonic: 'tulip bulb 是郁金香球茎。light bulb 是灯泡。',
      note: 'change a bulb 在家里几乎总是换灯泡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The lamp needs a new bulb.', chinese: '这盏灯需要换一个新灯泡。' },
    ],
    contexts: [
      { domain: '园艺', senseId: 'bulb.s1', en: 'Plant the bulbs in autumn if you want spring flowers.', zh: '如果想春天开花，就在秋天把球茎种下。', structure: 'Plant the bulbs', grammar: '可数复数。', rationale: '植物，不是电灯。autumn 帮助锁定。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The electrician planted a light bulb in the flower bed.', right: 'The electrician fitted a light bulb in the lamp.', reason: '种植的是球茎。电灯泡用 fit、change、replace。', rule: 'light bulb 照明；plant a bulb 园艺。', special: 'bulbous 是球根状的、圆鼓鼓的。' },
    ],
    quiz: [
      { id: 'bulb.q1', senseId: 'bulb.s1', errorType: 'meaning', type: '词义', prompt: 'a light bulb 是：', options: ['灯泡', '灯的开关', '灯罩'], answer: '灯泡', explain: '发光的玻璃泡。' },
      { id: 'bulb.q2', senseId: 'bulb.s1', errorType: 'meaning', type: '词义', prompt: 'a tulip bulb 是：', options: ['郁金香球茎', '郁金香颜色的灯泡', '郁金香画笔'], answer: '郁金香球茎', explain: '植物义。' },
      { id: 'bulb.q3', senseId: 'bulb.s1', errorType: 'meaning', type: '词源', prompt: '拉丁语 bulbus 指：', options: ['洋葱或球根', '桥梁', '短文'], answer: '洋葱或球根', explain: '形状来源。' },
      { id: 'bulb.q4', senseId: 'bulb.s1', errorType: 'collocation', type: '搭配', prompt: '换灯泡：_____ the bulb.', options: ['change', 'plant if it is electric', 'broadcast'], answer: 'change', explain: 'change a bulb。' },
    ],
    usage: { domains: ['生活', '园艺'], tone: '中性', commonConfusion: ['lamp'] },
  });

  D('bulk', {
    etymology: {
      origin: '古诺尔斯语 bulki「船货、堆」。英语指体积、大部分，或大宗',
      prefix: null,
      root: { text: 'bulk', gloss: '大批；体积' },
      suffix: null,
      history: [
        { label: 'bulki', text: '古诺尔斯语：船上的货堆' },
        { label: 'bulk', text: 'the bulk of 是大部分。in bulk 是大宗、散装' },
      ],
      formationLogic: '一大堆货，所以既是体积也是「其中的大头」。',
      mnemonic: 'the bulk of the work 是大部分工作。buy in bulk 是批量买。',
      note: 'bulk 一般不可数。a bulk 少见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bulk of the money went to the new roof.', chinese: '大部分钱都花在新屋顶上了。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bulk.s1', en: 'Restaurants buy rice in bulk and store it in tubs.', zh: '餐馆大宗购买大米，并存放在桶里。', structure: 'buy rice in bulk', grammar: 'in bulk 是固定状语。', rationale: '批发量，不是某个人的块头，虽然 bulk 也可指魁梧。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The bulk of students was one boy.', right: 'The bulk of the students were late.', reason: 'the bulk of 后面是整体中的大部分，不能等于一个男孩。动词可用复数，因为学生是多数。', rule: 'the bulk of + 不可数/复数；in bulk。', special: 'his bulk 可以指他魁梧的身躯。' },
    ],
    quiz: [
      { id: 'bulk.q1', senseId: 'bulk.s1', errorType: 'meaning', type: '词义', prompt: 'the bulk of the day 是：', options: ['一天中的大部分', '一天的开始几分钟', '一天的亮度'], answer: '一天中的大部分', explain: '大头。' },
      { id: 'bulk.q2', senseId: 'bulk.s1', errorType: 'collocation', type: '搭配', prompt: '批量购买：buy in _____.', options: ['bulk', 'bulb', 'buck'], answer: 'bulk', explain: 'in bulk。' },
      { id: 'bulk.q3', senseId: 'bulk.s1', errorType: 'meaning', type: '词源', prompt: '古诺尔斯语 bulki 与什么有关？', options: ['船货', '军号', '新娘'], answer: '船货', explain: '一堆货。' },
      { id: 'bulk.q4', senseId: 'bulk.s1', errorType: 'confusable', type: '易混', prompt: '灯泡是：', options: ['bulb', 'bulk', 'bull'], answer: 'bulb', explain: '只差一个字母。' },
    ],
    usage: { domains: ['商业', '写作'], tone: '中性', commonConfusion: ['most', 'volume'] },
  });

  D('bulk trade', {
    etymology: {
      origin: '现代英语搭配：bulk「大宗」+ trade「贸易」。不是历史合成的一个不可拆词，而是批发量级的买卖',
      prefix: null,
      root: { text: 'bulk', gloss: '大宗' },
      suffix: null,
      history: [
        { label: 'in bulk', text: '按大批数量，而不是零售一件' },
        { label: 'bulk trade', text: '大宗交易、批发贸易' },
      ],
      formationLogic: '数量大、单价通常更低，对象常是原料和大宗商品。',
      mnemonic: '零售是 retail。bulk trade 对面是一船一仓的货。',
      note: '中间有空格，不要写成一个单词 bulktrade。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The port handles bulk trade in grain and ore.', chinese: '这个港口经营粮食和矿石的大宗贸易。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bulk trade.s1', en: 'Bulk trade keeps unit prices lower than shop prices.', zh: '大宗交易使单价低于商店价格。', structure: 'Bulk trade / keeps unit prices lower', grammar: '名词短语作主语，trade 不可数。', rationale: '贸易类型。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She opened a bulk trade to sell one scarf.', right: 'She sold one scarf at retail.', reason: '一件围巾是零售。bulk trade 数量大。', rule: '大宗 bulk；单件 retail。', special: 'commodity trade 常与大宗原料重叠。' },
    ],
    quiz: [
      { id: 'bulk trade.q1', senseId: 'bulk trade.s1', errorType: 'meaning', type: '词义', prompt: 'bulk trade 是：', options: ['大宗交易', '一件商品的零售', '建筑物交易'], answer: '大宗交易', explain: '批发量级。' },
      { id: 'bulk trade.q2', senseId: 'bulk trade.s1', errorType: 'confusable', type: '易混', prompt: '单件卖给顾客更接近：', options: ['retail', 'bulk trade', 'buildup'], answer: 'retail', explain: '零售。' },
      { id: 'bulk trade.q3', senseId: 'bulk trade.s1', errorType: 'grammar', type: '语法', prompt: '写法应是：', options: ['bulk trade', 'bulktrade', 'bulk-trades as a verb here'], answer: 'bulk trade', explain: '两词。' },
      { id: 'bulk trade.q4', senseId: 'bulk trade.s1', errorType: 'collocation', type: '搭配', prompt: '港口常处理的对象是 grain and _____.', options: ['ore', 'brides', 'bugles'], answer: 'ore', explain: '矿石是典型大宗货物。' },
    ],
    usage: { domains: ['商业'], tone: '中性正式', commonConfusion: ['retail', 'wholesale'] },
  });

  D('bull', {
    etymology: {
      origin: '古英语 bula 或与古诺尔斯语 boli 有关，指未阉的公牛。市场里的 bull 是看涨者，来自牛用角向上顶的形象',
      prefix: null,
      root: { text: 'bull', gloss: '公牛；看涨' },
      suffix: null,
      history: [
        { label: 'bula', text: '古英语：公牛' },
        { label: 'bull market', text: '价格上升的市场；bull 是预期上涨的人' },
      ],
      formationLogic: '角向上抵，所以价格往上叫牛。向下拍的熊是 bear。',
      mnemonic: 'bull 向上，bear 向下。农场里则只是公畜。',
      note: 'a bull in a china shop 是闯祸的莽撞者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bull would not let strangers cross the field.', chinese: '那头公牛不让陌生人穿过田地。' },
    ],
    contexts: [
      { domain: '财经', senseId: 'bull.s1', en: 'Every bull on the desk expected shares to rise.', zh: '交易台前每个看涨的人都预期股价上涨。', structure: 'Every bull / expected shares to rise', grammar: '可数名词，指投资人。', rationale: '市场态度，不是农场。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'A bull market is one in which prices keep falling.', right: 'A bull market is one in which prices keep rising.', reason: '下跌是 bear market。', rule: 'bull 涨；bear 跌。', special: '公牛的复数是 bulls。' },
    ],
    quiz: [
      { id: 'bull.q1', senseId: 'bull.s1', errorType: 'meaning', type: '词义', prompt: '农场里的 bull 是：', options: ['公牛', '母牛', '阉牛的唯一词'], answer: '公牛', explain: '雄性牛。' },
      { id: 'bull.q2', senseId: 'bull.s1', errorType: 'meaning', type: '词义', prompt: 'a bull market 是：', options: ['上涨行情', '下跌行情', '没有交易的市场'], answer: '上涨行情', explain: '看涨。' },
      { id: 'bull.q3', senseId: 'bull.s1', errorType: 'confusable', type: '易混', prompt: '看跌者是：', options: ['a bear', 'a bull', 'a bulb'], answer: 'a bear', explain: '熊市对应 bear。' },
      { id: 'bull.q4', senseId: 'bull.s1', errorType: 'collocation', type: '搭配', prompt: '瓷器店里的莽撞者：a bull in a _____ shop.', options: ['china', 'bronze', 'brick'], answer: 'china', explain: 'china shop，china 这里是瓷器。' },
    ],
    usage: { domains: ['农业', '财经'], tone: '中性', commonConfusion: ['bear', 'ox'] },
  });

  D('bullet', {
    etymology: {
      origin: '法语 boulette「小球」，boule 的指小形式。早期枪弹是小圆球，名称留下了',
      prefix: null,
      root: { text: 'bullet', gloss: '子弹' },
      suffix: null,
      history: [
        { label: 'boulette', text: '法语：小球' },
        { label: 'bullet', text: '英语：枪弹。bullet point 是项目符号，形状像小点' },
      ],
      formationLogic: '小而可发射。文件里的圆点借用了这个「小圆」。',
      mnemonic: 'bite the bullet 是硬着头皮承受。来自旧时手术咬住子弹忍痛的说法。',
      note: '枪是 gun，弹是 bullet。不要互换。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bullet missed the tree and hit the fence.', chinese: '子弹没打中树，打在了篱笆上。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'bullet.s1', en: 'Put each rule in a bullet so the list is easy to scan.', zh: '每条规则用一个项目符号，方便扫读。', structure: 'in a bullet', grammar: '这里 bullet 是排版符号。', rationale: '不是枪弹。scan 和 list 锁定文档。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He fired a bulletin at the target.', right: 'He fired a bullet at the target.', reason: '射出的是 bullet。bulletin 是公告。', rule: '弹头 bullet；简报 bulletin。', special: 'bulletproof 是防弹。' },
    ],
    quiz: [
      { id: 'bullet.q1', senseId: 'bullet.s1', errorType: 'meaning', type: '词义', prompt: 'fired from a gun 的是：', options: ['a bullet', 'a bulletin', 'a buffet'], answer: 'a bullet', explain: '子弹。' },
      { id: 'bullet.q2', senseId: 'bullet.s1', errorType: 'meaning', type: '词义', prompt: '文档里的 bullet 是：', options: ['项目符号', '一颗真子弹', '一段广播'], answer: '项目符号', explain: '排版。' },
      { id: 'bullet.q3', senseId: 'bullet.s1', errorType: 'meaning', type: '词源', prompt: 'boulette 的意思接近：', options: ['小球', '小盾', '小溪'], answer: '小球', explain: '早期弹丸是圆的。' },
      { id: 'bullet.q4', senseId: 'bullet.s1', errorType: 'collocation', type: '搭配', prompt: '硬着头皮干：bite the _____.', options: ['bullet', 'bull', 'bulb'], answer: 'bullet', explain: '习语 bite the bullet。' },
    ],
    usage: { domains: ['新闻', '写作'], tone: '中性', commonConfusion: ['bulletin', 'shell'] },
  });

  D('bulletin', {
    etymology: {
      origin: '意大利语 bulletino，法语 bulletin，是「小字条」的指小形式，与 bullet 的「小球」同源不同义',
      prefix: null,
      root: { text: 'bulletin', gloss: '简报' },
      suffix: null,
      history: [
        { label: 'bulletin', text: '法语：官方短讯' },
        { label: 'bulletin', text: '英语：公告、新闻快报、学报简报' },
      ],
      formationLogic: '短、正式、向一群人发布。',
      mnemonic: 'news bulletin 是新闻简报。bulletin board 是布告栏。',
      note: '比 bullet 长，多一个 in。内容是文字不是金属。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A weather bulletin warned of ice on the roads.', chinese: '一则天气快报警告路面结冰。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'bulletin.s1', en: 'The exam times are on the bulletin board outside the office.', zh: '考试时间贴在办公室外的布告栏上。', structure: 'on the bulletin board', grammar: '名词作定语。美式布告栏常用这个说法。', rationale: '公告，不是子弹。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The soldier loaded a bulletin into the rifle.', right: 'The soldier loaded a bullet into the rifle.', reason: '步枪装的是 bullet。', rule: 'bulletin 是文字公告。', special: 'medical bulletin 是病情公告。' },
    ],
    quiz: [
      { id: 'bulletin.q1', senseId: 'bulletin.s1', errorType: 'meaning', type: '词义', prompt: 'a news bulletin 是：', options: ['新闻简报', '一颗新闻子弹', '新闻用的水桶'], answer: '新闻简报', explain: '短新闻。' },
      { id: 'bulletin.q2', senseId: 'bulletin.s1', errorType: 'collocation', type: '搭配', prompt: '布告栏：bulletin _____.', options: ['board', 'bullet', 'bull'], answer: 'board', explain: 'bulletin board。' },
      { id: 'bulletin.q3', senseId: 'bulletin.s1', errorType: 'confusable', type: '易混', prompt: '枪里发射的是：', options: ['bullet', 'bulletin', 'buffer'], answer: 'bullet', explain: '金属弹丸。' },
      { id: 'bulletin.q4', senseId: 'bulletin.s1', errorType: 'meaning', type: '词义', prompt: 'bulletin 的篇幅特点是：', options: ['短而正式', '必须是一本书', '只用于诗歌'], answer: '短而正式', explain: '快报、公告。' },
    ],
    usage: { domains: ['新闻', '校园'], tone: '较正式', commonConfusion: ['bullet', 'notice'] },
  });

  D('bullion', {
    etymology: {
      origin: '盎格鲁-法语，与古法语 bouillon「煮、熔化」有关，指熔化后铸成的金或银，而不是硬币上的图案',
      prefix: null,
      root: { text: 'bullion', gloss: '金银条块' },
      suffix: null,
      history: [
        { label: 'bouillon', text: '法语：煮开，引申到熔化金属' },
        { label: 'bullion', text: '英语：金条、银锭，按重量计价' },
      ],
      formationLogic: '价值在金属重量，不在铸成哪国钱币。',
      mnemonic: 'bullion 是条块。coin 是硬币。不要和 bullet、bulletin 串记忆成枪。',
      note: '一般不可数。a bar of bullion 才可数的是 bar。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bank stores gold bullion in a vault below the street.', chinese: '银行把金条存在街面下的金库里。' },
    ],
    contexts: [
      { domain: '财经', senseId: 'bullion.s1', en: 'Dealers priced the bullion by weight, not by face value.', zh: '交易商按重量给这些金条定价，而不是按面值。', structure: 'priced the bullion by weight', grammar: '不可数物质名词。', rationale: '贵金属条块。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He fired the bullion from a gun.', right: 'He stored the bullion in a vault.', reason: '能发射的是 bullet。bullion 很重，是储备金属。', rule: '金条 bullion；子弹 bullet；公告 bulletin。', special: 'bullion market 是金银市场。' },
    ],
    quiz: [
      { id: 'bullion.q1', senseId: 'bullion.s1', errorType: 'meaning', type: '词义', prompt: 'gold bullion 是：', options: ['金条', '金币上的图案', '金子弹'], answer: '金条', explain: '条块金银。' },
      { id: 'bullion.q2', senseId: 'bullion.s1', errorType: 'collocation', type: '搭配', prompt: '计价方式常是 by _____.', options: ['weight', 'rhyme', 'colour only'], answer: 'weight', explain: '按重量。' },
      { id: 'bullion.q3', senseId: 'bullion.s1', errorType: 'confusable', type: '易混', prompt: '新闻简报是：', options: ['bulletin', 'bullion', 'bullet'], answer: 'bulletin', explain: '三个词都要分开。' },
      { id: 'bullion.q4', senseId: 'bullion.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['The bullion is stored downstairs.', 'The bullions is stored downstairs.', 'A bullion are stored downstairs.'], answer: 'The bullion is stored downstairs.', explain: '不可数用 is。' },
    ],
    usage: { domains: ['财经'], tone: '正式', commonConfusion: ['coin', 'bullet'] },
  });

  D('bullock', {
    etymology: {
      origin: '古英语 bulluc，是 bull 的指小形式，后来专指阉过的小公牛，常作役畜',
      prefix: null,
      root: { text: 'bull', gloss: '公牛' },
      suffix: { text: '-ock', gloss: '古英语指小，如 hillock' },
      history: [
        { label: 'bulluc', text: '古英语：小公牛' },
        { label: 'bullock', text: '现代英语：阉牛，比 bull 温顺，用来拉车或育肥' },
      ],
      formationLogic: '词尾表示年幼，农牧实践里又加上去势这一层。',
      mnemonic: 'bull 能顶人，bullock 是阉过的小公牛。',
      note: '不要和 bullion 混。一个是牲畜，一个是金条。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bullock pulled the cart along the muddy lane.', chinese: '一头阉牛拉着车子走过泥泞的小路。' },
    ],
    contexts: [
      { domain: '农业', senseId: 'bullock.s1', en: 'The farmer kept the bullock for ploughing, not for breeding.', zh: '农夫养这头阉牛是为了耕地，不是为了配种。', structure: 'kept the bullock for ploughing', grammar: '可数名词。', rationale: '役畜，所以强调不能配种。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bank bought a bullock of gold.', right: 'The bank bought gold bullion.', reason: '金条是 bullion。bullock 是牛。', rule: '牛 bullock；金属 bullion。', special: '未阉的成年公畜仍叫 bull。' },
    ],
    quiz: [
      { id: 'bullock.q1', senseId: 'bullock.s1', errorType: 'meaning', type: '词义', prompt: 'bullock 是：', options: ['阉过的小公牛', '金条', '母牛'], answer: '阉过的小公牛', explain: '役用或育肥的牛。' },
      { id: 'bullock.q2', senseId: 'bullock.s1', errorType: 'confusable', type: '易混', prompt: '金库里的金属条是：', options: ['bullion', 'bullock', 'bullet'], answer: 'bullion', explain: '金银条块。' },
      { id: 'bullock.q3', senseId: 'bullock.s1', errorType: 'meaning', type: '词源', prompt: '-ock 在古英语里常表示：', options: ['指小', '否定', '过去式'], answer: '指小', explain: 'bull 的小称。' },
      { id: 'bullock.q4', senseId: 'bullock.s1', errorType: 'confusable', type: '易混', prompt: '未阉、可顶人的成年公畜是：', options: ['a bull', 'a bullock', 'a bud'], answer: 'a bull', explain: 'bull 与 bullock 的差别在去势和用途。' },
    ],
    usage: { domains: ['农业'], tone: '中性', commonConfusion: ['bull', 'ox', 'bullion'] },
  });

  D('bully', {
    etymology: {
      origin: '早期英语 bully 可以指亲爱的人或好汉，后来词义翻转到仗着自己强、去吓唬弱者的人。更早是否来自荷兰语，课堂不必当成定论。',
      prefix: null,
      root: { text: 'bully', gloss: '由「好汉」转到「欺凌者」' },
      suffix: null,
      history: [
        { label: '早期', text: '可作亲热的称呼，也可指爱吹牛的人' },
        { label: '现在', text: '动词：恐吓、欺负比自己弱的人；名词：欺凌者' },
      ],
      formationLogic: '同一个词兼动词和名词。考试里动词更常考「欺负」，名词指人。',
      mnemonic: 'bully 不是 bull「公牛」。公牛顶人不是这个词的本义。',
      note: '校园语境里 bully 比 tease 重，含有力量不对等。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Older pupils bullied him for wearing the wrong shoes.', chinese: '高年级学生因为他穿了不合群的鞋而欺负他。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'bully.s1', en: 'The school asked witnesses who had seen the group bully the new student.', zh: '学校询问目击那群人欺负新生的人。', structure: 'bully + somebody', grammar: 'bully 是及物动词，人直接作宾语。', rationale: '锁住「强者压弱者」，不是一般争吵。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They bullied to the smaller boy.', right: 'They bullied the smaller boy.', reason: '欺负某人时，人是宾语，中间不加 to。', rule: 'bully somebody (into doing something)。', special: 'bully somebody into signing 是「逼某人签字」。' },
    ],
    quiz: [
      { id: 'bully.q1', senseId: 'bully.s1', errorType: 'meaning', type: '词义', prompt: 'bully 作动词时最接近：', options: ['欺负更弱的人', '温柔地夸奖', '公牛耕地'], answer: '欺负更弱的人', explain: '核心是恃强凌弱。' },
      { id: 'bully.q2', senseId: 'bully.s1', errorType: 'collocation', type: '搭配', prompt: 'She bullied him _____ handing over the money.', options: ['into', 'onto', 'by to'], answer: 'into', explain: 'bully somebody into doing。' },
      { id: 'bully.q3', senseId: 'bully.s1', errorType: 'confusable', type: '易混', prompt: '「校园欺凌者」是：', options: ['a bully', 'a bulletin', 'a bull'], answer: 'a bully', explain: 'bulletin 是公告，bull 是公牛。' },
      { id: 'bully.q4', senseId: 'bully.s1', errorType: 'grammar', type: '语法', prompt: '哪句自然？', options: ['They bullied the new boy.', 'They bullied to the new boy.', 'They bullyment the boy.'], answer: 'They bullied the new boy.', explain: '及物，不加 to，也没有 bullyment 这个词形。' },
    ],
    usage: { domains: ['校园', '新闻'], tone: '负面', commonConfusion: ['bull', 'tease'] },
  });

  D('bump', {
    etymology: {
      origin: 'bump 模仿沉闷的一撞发出的声音，所以既指撞上，也指撞出来的肿块。',
      prefix: null,
      root: { text: 'bump', gloss: '拟声：撞一下' },
      suffix: null,
      history: [
        { label: '拟声', text: '短促的撞击声' },
        { label: '现在', text: '动词：碰、颠；名词：肿块或路面隆起' },
      ],
      formationLogic: '声音先变成动作，再变成撞出来的那个包。',
      mnemonic: 'bump 比 bang 闷、比 crash 轻。',
      note: 'bump into somebody 是碰巧遇见，不是把人撞伤的唯一说法。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The trolley bumped the door frame and left a dent.', chinese: '手推车撞上门框，留下一个凹痕。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bump.s1', en: 'I bumped into my old coach outside the station.', zh: '我在车站外碰见了以前的教练。', structure: 'bump into + 人', grammar: 'into 后面是意外相遇的对象。', rationale: '同一动词，有「撞」和「偶遇」两层。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I bumped to my neighbour in the lift.', right: 'I bumped into my neighbour in the lift.', reason: '偶遇用 into，不用 to。', rule: 'bump into somebody；bump against a wall 才是撞到墙上。', special: 'a bump on the head 是头上的包。' },
    ],
    quiz: [
      { id: 'bump.q1', senseId: 'bump.s1', errorType: 'meaning', type: '词义', prompt: 'a bump on the forehead 是：', options: ['额头上的肿块', '一次正式会议', '一盏灯'], answer: '额头上的肿块', explain: '撞出来的隆起。' },
      { id: 'bump.q2', senseId: 'bump.s1', errorType: 'collocation', type: '搭配', prompt: 'She bumped _____ an old classmate.', options: ['into', 'onto', 'for'], answer: 'into', explain: '偶遇是 bump into。' },
      { id: 'bump.q3', senseId: 'bump.s1', errorType: 'confusable', type: '易混', prompt: '很响的爆炸更接近：', options: ['a bang', 'a bump', 'a bun'], answer: 'a bang', explain: 'bump 是闷撞。' },
      { id: 'bump.q4', senseId: 'bump.s1', errorType: 'grammar', type: '语法', prompt: 'The cart _____ the table.', options: ['bumped', 'bumping to', 'was bump'], answer: 'bumped', explain: '及物过去式直接加宾语。' },
    ],
    usage: { domains: ['日常', '交通'], tone: '中性', commonConfusion: ['bang', 'bump into'] },
  });

  D('bumper', {
    etymology: {
      origin: '汽车的 bumper 是承受 bump「碰撞」的那根杠。bumper crop 里的 bumper 原指倒得满满的一大杯，再转成「特别多」。',
      prefix: null,
      root: { text: 'bump', gloss: '撞' },
      suffix: { text: '-er', gloss: '承受碰撞的物件，或「满满的」' },
      history: [
        { label: '满杯', text: 'bumper 曾指盛得冒尖的一杯' },
        { label: '现在', text: '车头车尾的保险杠；也指异常丰盛' },
      ],
      formationLogic: '都和「顶满、撞上」有关，但一个是零件，一个是程度。',
      mnemonic: '看到车先想保险杠；看到 harvest 先想大丰收。',
      note: 'a bumper year 不是「装了保险杠的一年」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The taxi bumper scraped the kerb but the door was fine.', chinese: '出租车保险杠蹭到路缘，车门没事。' },
    ],
    contexts: [
      { domain: '农业', senseId: 'bumper.s1', en: 'Wet spring rain brought a bumper crop of strawberries.', zh: '春天的雨水带来了草莓大丰收。', structure: 'a bumper crop of', grammar: 'bumper 在这里是形容词，直接修饰 crop。', rationale: '和汽车零件不是同一个使用场景。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The farm fitted a bumper on the wheat.', right: 'The farm had a bumper wheat crop.', reason: '丰收不是给庄稼装保险杠。', rule: '零件用 a bumper；丰收用 a bumper crop / year。', special: 'front bumper 和 rear bumper 才是车。' },
    ],
    quiz: [
      { id: 'bumper.q1', senseId: 'bumper.s1', errorType: 'meaning', type: '词义', prompt: 'a bumper harvest 是：', options: ['特大丰收', '撞坏的谷仓', '很小的收成'], answer: '特大丰收', explain: 'bumper 修饰产量时是「异常多」。' },
      { id: 'bumper.q2', senseId: 'bumper.s1', errorType: 'confusable', type: '易混', prompt: '车尾那根杠叫：', options: ['a rear bumper', 'a rear bun', 'a rear bumpkin'], answer: 'a rear bumper', explain: '保险杠是 bumper。' },
      { id: 'bumper.q3', senseId: 'bumper.s1', errorType: 'collocation', type: '搭配', prompt: 'We had a bumper _____ of apples.', options: ['crop', 'crash', 'cup only'], answer: 'crop', explain: 'bumper crop。' },
      { id: 'bumper.q4', senseId: 'bumper.s1', errorType: 'grammar', type: '语法', prompt: 'bumper 修饰 crop 时词性是：', options: ['形容词', '介词', '过去分词必须'], answer: '形容词', explain: '直接放在名词前。' },
    ],
    usage: { domains: ['交通', '农业'], tone: '中性', commonConfusion: ['bump'] },
  });

  D('bun', {
    etymology: {
      origin: 'bun 指小圆面包，词源没有把握，不要硬安一个古典词根。头发盘成的圆髻用的是同一个「圆团」形象。',
      prefix: null,
      root: { text: 'bun', gloss: '小圆团' },
      suffix: null,
      history: [
        { label: '食物', text: '小而圆的甜面包或软面包' },
        { label: '发型', text: '把头发挽成一个圆髻' },
      ],
      formationLogic: '形状相同，所以一个词覆盖面包和发髻。',
      mnemonic: 'bun 比 bread 小、比 cake 更像一团。',
      note: 'hamburger bun 是汉堡胚，不是头发。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She tied her hair in a bun before the lab class.', chinese: '实验课前她把头发盘成一个髻。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'bun.s1', en: 'The burger fell apart because the bun was still warm and soft.', zh: '汉堡散了，因为小圆面包还又热又软。', structure: 'the bun', grammar: '可数名词，一个面包是 a bun。', rationale: '这里只能是食物，不是发型。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She wore a bread on her head.', right: 'She wore her hair in a bun.', reason: '发髻是 bun，不是 bread。', rule: '食物 a bun；发型 hair in a bun。', special: 'sticky bun 是粘糖面包。' },
    ],
    quiz: [
      { id: 'bun.q1', senseId: 'bun.s1', errorType: 'meaning', type: '词义', prompt: 'hair in a bun 是：', options: ['盘成圆髻', '涂满黄油', '剪成平头'], answer: '盘成圆髻', explain: '圆团形象用在头发上。' },
      { id: 'bun.q2', senseId: 'bun.s1', errorType: 'confusable', type: '易混', prompt: '汉堡的那层面包叫：', options: ['a bun', 'a bung', 'a bunny'], answer: 'a bun', explain: 'bung 是塞子，bunny 是兔子。' },
      { id: 'bun.q3', senseId: 'bun.s1', errorType: 'grammar', type: '语法', prompt: '两个小圆面包：', options: ['two buns', 'two bun', 'two bunnes'], answer: 'two buns', explain: '可数，规则复数。' },
      { id: 'bun.q4', senseId: 'bun.s1', errorType: 'meaning', type: '词义', prompt: 'a sticky bun 最可能是：', options: ['带糖的小面包', '一只粘糊的兔子', '一个瓶塞'], answer: '带糖的小面包', explain: '食物义。' },
    ],
    usage: { domains: ['饮食', '日常'], tone: '中性', commonConfusion: ['bread', 'bung'] },
  });

  D('bunch', {
    etymology: {
      origin: 'bunch 指扎在一起或自然长成一簇的东西。词源不够清楚，就记「一把、一群」，不要另造拉丁词根。',
      prefix: null,
      root: { text: 'bunch', gloss: '一束、一群' },
      suffix: null,
      history: [
        { label: '一束', text: '花、钥匙、香蕉这类被放在一起的东西' },
        { label: '一群', text: '口语里也可指一群人' },
      ],
      formationLogic: '名词是那一束；动词 bunch up 是挤成一团。',
      mnemonic: 'a bunch of keys 是串在一起，不是每一把单独算。',
      note: 'a bunch of 在口语里很宽，书面写「一群专家」有时显得太随便。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He left a bunch of keys on the counter.', chinese: '他把一串钥匙落在柜台上。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bunch.s1', en: 'The grapes were sold by the bunch, not by the kilo.', zh: '葡萄按串卖，不按公斤卖。', structure: 'by the bunch', grammar: 'bunch 是可数的「一束」。', rationale: '强调成束这个单位。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a bunch keys', right: 'a bunch of keys', reason: '中间要 of。', rule: 'a bunch of + 复数名词或不可数名词。', special: 'banana 常用 a bunch；花也可用 a bunch。' },
    ],
    quiz: [
      { id: 'bunch.q1', senseId: 'bunch.s1', errorType: 'collocation', type: '搭配', prompt: 'a bunch _____ flowers', options: ['of', 'by', 'to'], answer: 'of', explain: 'a bunch of。' },
      { id: 'bunch.q2', senseId: 'bunch.s1', errorType: 'meaning', type: '词义', prompt: 'a bunch of grapes 是：', options: ['一串葡萄', '一粒葡萄', '葡萄汁'], answer: '一串葡萄', explain: '成簇的单位。' },
      { id: 'bunch.q3', senseId: 'bunch.s1', errorType: 'confusable', type: '易混', prompt: '扎成一捆、更强调「捆住」的是：', options: ['a bundle', 'a bunch always of people', 'a bung'], answer: 'a bundle', explain: 'bundle 常是捆好的包裹。' },
      { id: 'bunch.q4', senseId: 'bunch.s1', errorType: 'grammar', type: '语法', prompt: 'The children bunched _____ near the door.', options: ['up', 'of', 'keys'], answer: 'up', explain: 'bunch up 是挤成一团。' },
    ],
    usage: { domains: ['日常'], tone: '口语', commonConfusion: ['bundle'] },
  });

  D('bundle', {
    etymology: {
      origin: 'bundle 和 bind「捆」同族，指已经扎住的一包东西。这是日耳曼语里的「绑」，不是自造的拉丁词根。',
      prefix: null,
      root: { text: 'bund-', gloss: '与 bind 同族，捆' },
      suffix: null,
      history: [
        { label: 'bind', text: '把东西绑在一起' },
        { label: 'bundle', text: '绑好的那一捆；也可作动词' },
      ],
      formationLogic: '名词是捆好的结果，动词是去捆。',
      mnemonic: 'bundle 里面有 bind 的 b-und 感觉：已经绑上了。',
      note: 'a bundle of nerves 是「紧张得要命」，不是真的一捆神经。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She tied the letters into a bundle with string.', chinese: '她用绳子把信扎成一捆。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bundle.s1', en: 'Please bundle the old newspapers before the truck arrives.', zh: '卡车来之前请把旧报纸捆好。', structure: 'bundle + 名词', grammar: '动词时直接接要捆的东西。', rationale: '动作和成品用同一个词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a bundle keys and string', right: 'a bundle of keys tied with string', reason: '和 bunch 一样，名词短语要 of。', rule: 'a bundle of something。', special: 'bundle somebody into a car 是匆忙塞进车里。' },
    ],
    quiz: [
      { id: 'bundle.q1', senseId: 'bundle.s1', errorType: 'meaning', type: '词义', prompt: 'bundle 和哪个动作最近？', options: ['bind 捆', 'burn 烧', 'buy 买'], answer: 'bind 捆', explain: '同族，核心是扎住。' },
      { id: 'bundle.q2', senseId: 'bundle.s1', errorType: 'collocation', type: '搭配', prompt: 'a bundle _____ clothes', options: ['of', 'to', 'on'], answer: 'of', explain: 'a bundle of。' },
      { id: 'bundle.q3', senseId: 'bundle.s1', errorType: 'meaning', type: '词义', prompt: 'a bundle of nerves 指人：', options: ['紧张不安', '神经被捆住住院', '非常勇敢'], answer: '紧张不安', explain: '固定形象说法。' },
      { id: 'bundle.q4', senseId: 'bundle.s1', errorType: 'confusable', type: '易混', prompt: '松散的一串钥匙更常说：', options: ['a bunch of keys', 'a bundle nerve', 'a bung of keys'], answer: 'a bunch of keys', explain: 'bunch 可以是串，bundle 更像扎好的包。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['bunch', 'bind'] },
  });

  D('bung', {
    etymology: {
      origin: 'bung 是桶孔上的塞子，一般认为来自荷兰语里表示塞子的词。它和 bump「碰撞」只是长得像。',
      prefix: null,
      root: { text: 'bung', gloss: '塞子' },
      suffix: null,
      history: [
        { label: '塞子', text: '堵住桶或罐的孔' },
        { label: '动词', text: '把孔堵住；英式口语里也可指把东西随手扔进' },
      ],
      formationLogic: '名词是那只塞，动词是塞上。',
      mnemonic: '桶上短短的塞子，不是小圆面包 bun。',
      note: '英式口语 bung it in the bin 是「扔进垃圾桶」，和塞子的形象仍有关。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He pulled the bung and the barrel began to drain.', chinese: '他拔掉塞子，桶里的东西开始往外流。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bung.s1', en: 'Leaves had bunged up the drain behind the kitchen.', zh: '树叶把厨房后面的下水道堵住了。', structure: 'bung up + 通道', grammar: 'bung up 是短语动词，表示堵死。', rationale: '从「塞子」延伸到「堵塞」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Use a bun to stop the barrel.', right: 'Use a bung to stop the barrel.', reason: '面包堵不住桶，塞子才是 bung。', rule: 'bun 食物或发髻；bung 塞子或堵塞。', special: 'bunged up 也可说鼻子堵住。' },
    ],
    quiz: [
      { id: 'bung.q1', senseId: 'bung.s1', errorType: 'meaning', type: '词义', prompt: 'a bung in a barrel 是：', options: ['塞子', '小面包', '保险杠'], answer: '塞子', explain: '用来堵孔。' },
      { id: 'bung.q2', senseId: 'bung.s1', errorType: 'collocation', type: '搭配', prompt: 'The sink is bunged _____.', options: ['up', 'of', 'into keys'], answer: 'up', explain: 'bung up 表示堵住。' },
      { id: 'bung.q3', senseId: 'bung.s1', errorType: 'confusable', type: '易混', prompt: '头发盘成的圆髻是：', options: ['a bun', 'a bung', 'a bundle'], answer: 'a bun', explain: '少一个 g。' },
      { id: 'bung.q4', senseId: 'bung.s1', errorType: 'grammar', type: '语法', prompt: '哪句表示「把洞堵住」？', options: ['Bung the hole.', 'Bun the hole.', 'Bully the hole.'], answer: 'Bung the hole.', explain: '动词 bung。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['bun'] },
  });

  D('bunny', {
    etymology: {
      origin: 'bunny 是兔子的昵称，由 bun 加上亲昵的 -y。bun 为什么能指兔子，说法不稳定，不要再往古典词根上编。',
      prefix: null,
      root: { text: 'bun', gloss: '兔子的爱称词干' },
      suffix: { text: '-y', gloss: '亲昵' },
      history: [
        { label: 'bun', text: '方言里可指兔子' },
        { label: 'bunny', text: '儿语和小名：小兔子' },
      ],
      formationLogic: '成人写作里的物种名仍是 rabbit；bunny 更娇、更儿童。',
      mnemonic: 'bunny 比 rabbit 软，适合绘本，不适合生物报告的学名位置。',
      note: 'dust bunny 是床下的灰尘团，不是一只兔子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The child drew a bunny with long ears and a small tail.', chinese: '孩子画了一只长耳朵、短尾巴的小兔子。' },
    ],
    contexts: [
      { domain: '儿童', senseId: 'bunny.s1', en: 'Bedtime stories in this house always include a brave bunny.', zh: '这家的睡前故事总有一只勇敢的小兔子。', structure: 'a brave bunny', grammar: '可数名词，复数 bunnies。', rationale: '语气是亲昵，不是动物学分类。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Three bunnys lived in the hutch.', right: 'Three bunnies lived in the hutch.', reason: '以 y 结尾、前面是辅音时，复数变 i 再加 es。', rule: 'bunny, bunnies。', special: '正式物种名用 rabbit。' },
    ],
    quiz: [
      { id: 'bunny.q1', senseId: 'bunny.s1', errorType: 'meaning', type: '词义', prompt: 'bunny 最常指：', options: ['小兔子', '小面包店', '塞子'], answer: '小兔子', explain: '亲昵说法。' },
      { id: 'bunny.q2', senseId: 'bunny.s1', errorType: 'grammar', type: '语法', prompt: 'bunny 的复数是：', options: ['bunnies', 'bunnys', 'bunnyes'], answer: 'bunnies', explain: 'y 变 ies。' },
      { id: 'bunny.q3', senseId: 'bunny.s1', errorType: 'confusable', type: '易混', prompt: '生物课上的普通词是：', options: ['rabbit', 'bung', 'bun'], answer: 'rabbit', explain: 'bunny 偏儿语。' },
      { id: 'bunny.q4', senseId: 'bunny.s1', errorType: 'meaning', type: '词义', prompt: 'a dust bunny 是：', options: ['一团灰尘', '会吃灰的兔子品种', '面包屑'], answer: '一团灰尘', explain: '家务里的形象说法。' },
    ],
    usage: { domains: ['儿童', '日常'], tone: '亲昵', commonConfusion: ['rabbit'] },
  });

  D('buoy', {
    etymology: {
      origin: 'buoy 是水上的浮标。它来自法语或荷兰语里「浮体」那一支，和 boy「男孩」只是有些口音里读音接近。',
      prefix: null,
      root: { text: 'buoy', gloss: '浮标' },
      suffix: null,
      history: [
        { label: '浮标', text: '标出航道或危险的漂浮物' },
        { label: '动词', text: 'buoy up：使浮起，或使精神振作' },
      ],
      formationLogic: '名词是那个浮体；动词沿用「往上托」的形象。',
      mnemonic: '看见水道里的颜色标记，写 buoy，不要写成 boy。',
      note: 'buoyant 是同源形容词，但拼写仍保留 uoy。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A red buoy marked the rocks at the harbour mouth.', chinese: '一只红色浮标标出港口入口的礁石。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'buoy.s1', en: 'Early sales figures buoyed the team after a weak winter.', zh: '年初的销售数字让团队在低迷的冬天之后振作起来。', structure: 'buoy + 人/情绪', grammar: '动词 buoy 可直接接被鼓舞的对象。', rationale: '从水面托起延伸到情绪。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The boy in the channel warned the ships.', right: 'The buoy in the channel warned the ships.', reason: '航道里示警的是浮标 buoy，不是男孩 boy。', rule: 'buoy 名词浮标，动词使浮起或鼓舞。', special: 'buoy up one hopes 也可说，hopes 作宾语。' },
    ],
    quiz: [
      { id: 'buoy.q1', senseId: 'buoy.s1', errorType: 'meaning', type: '词义', prompt: '航道里的 buoy 是：', options: ['浮标', '男孩', '船锚'], answer: '浮标', explain: '漂在水面做标记。' },
      { id: 'buoy.q2', senseId: 'buoy.s1', errorType: 'confusable', type: '易混', prompt: '和 buoy 拼写最易混的是：', options: ['boy', 'buy', 'bay'], answer: 'boy', explain: '只差一个 u 的位置和字母。' },
      { id: 'buoy.q3', senseId: 'buoy.s1', errorType: 'meaning', type: '词义', prompt: 'Good news buoyed the staff. 意思是：', options: ['消息让员工振作', '消息把员工按进水里', '消息解雇了员工'], answer: '消息让员工振作', explain: '动词引申为鼓舞。' },
      { id: 'buoy.q4', senseId: 'buoy.s1', errorType: 'collocation', type: '搭配', prompt: 'The float is there to buoy the net _____.', options: ['up', 'boy', 'of'], answer: 'up', explain: 'buoy up 使浮起。' },
    ],
    usage: { domains: ['航海', '新闻'], tone: '中性', commonConfusion: ['boy'] },
  });

  D('burden', {
    etymology: {
      origin: 'burden 是古英语里「所背的东西」，和 bear「承载」同族。先是具体的重物，再是责任、费用、痛苦。',
      prefix: null,
      root: { text: 'burden', gloss: '与 bear 同族，负荷' },
      suffix: null,
      history: [
        { label: '重物', text: '牲口或人背上的担子' },
        { label: '现在', text: '负担、重任；动词是把负担加到某人身上' },
      ],
      formationLogic: '能扛的叫 bear，扛着的那份叫 burden。',
      mnemonic: 'burden 不是 bird。鸟不会自动变成负担，除非语境另说。',
      note: 'the burden of proof 是举证责任，法律写作里的固定搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Caring for both parents became a heavy burden.', chinese: '同时照顾父母成了沉重的负担。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'burden.s1', en: 'The burden of proof lies with the person who brings the claim.', zh: '举证责任在提出主张的一方。', structure: 'the burden of proof', grammar: 'of 后面是被承担的那种责任。', rationale: '抽象负担，不是背上的袋子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The burden of prove is on the company.', right: 'The burden of proof is on the company.', reason: '固定名词是 proof，不是动词 prove。', rule: 'the burden of something；burden somebody with something。', special: 'beast of burden 是役畜。' },
    ],
    quiz: [
      { id: 'burden.q1', senseId: 'burden.s1', errorType: 'meaning', type: '词义', prompt: 'a heavy burden 最常指：', options: ['沉重负担', '一只很重的鸟', '轻快的歌曲'], answer: '沉重负担', explain: '具体或抽象的重担。' },
      { id: 'burden.q2', senseId: 'burden.s1', errorType: 'collocation', type: '搭配', prompt: 'the burden of _____', options: ['proof', 'prove', 'provingly'], answer: 'proof', explain: '举证责任。' },
      { id: 'burden.q3', senseId: 'burden.s1', errorType: 'grammar', type: '语法', prompt: 'Don\'t burden her _____ your complaints.', options: ['with', 'of', 'proof'], answer: 'with', explain: 'burden somebody with something。' },
      { id: 'burden.q4', senseId: 'burden.s1', errorType: 'confusable', type: '易混', prompt: '和 burden 同族、表示「承载」的动词是：', options: ['bear', 'burn', 'bury'], answer: 'bear', explain: 'bear a burden。' },
    ],
    usage: { domains: ['法律', '书面'], tone: '偏正式', commonConfusion: ['bear'] },
  });

  D('burdensome', {
    etymology: {
      origin: '英语派生：burden「负担」+ -some「引起某种感觉的」。意思是造成负担的、累赘的。',
      prefix: null,
      root: { text: 'burden', gloss: '负担' },
      suffix: { text: '-some', gloss: '引起……的，如 troublesome' },
      history: [
        { label: 'burden', text: '重担' },
        { label: 'burdensome', text: '让人觉得沉重、费事' },
      ],
      formationLogic: '名词加 -some 变成形容词，和 quarrelsome、troublesome 同一套。',
      mnemonic: '看见 -some 就问：它给人带来什么感觉？这里是负担感。',
      note: '不要写成 burdenly。英语用 burdensome。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The weekly reports became burdensome for a team of three.', chinese: '每周报告对一个三人小组来说变得很繁重。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'burdensome.s1', en: 'Managers cut the burdensome form from twelve pages to two.', zh: '经理们把那份累赘的表格从十二页减到两页。', structure: 'burdensome + 名词', grammar: '形容词作定语或表语都可以。', rationale: '强调手续本身给人添负。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The rules are very burden.', right: 'The rules are very burdensome.', reason: 'burden 是名词或动词，作表语形容事物要用形容词 burdensome。', rule: 'burdensome task / rules。', special: 'a burden 才用名词：The rules are a burden.' },
    ],
    quiz: [
      { id: 'burdensome.q1', senseId: 'burdensome.s1', errorType: 'meaning', type: '词义', prompt: 'burdensome 是：', options: ['繁重累赘的', '轻松的', '已经埋葬的'], answer: '繁重累赘的', explain: '带来 burden。' },
      { id: 'burdensome.q2', senseId: 'burdensome.s1', errorType: 'grammar', type: '语法', prompt: 'The process is _____.', options: ['burdensome', 'burden', 'burdens'], answer: 'burdensome', explain: '表语要用形容词。' },
      { id: 'burdensome.q3', senseId: 'burdensome.s1', errorType: 'confusable', type: '易混', prompt: '-some 在这里类似：', options: ['troublesome 里的 -some', 'handsome 必须表示手', 'lonesome 的复数'], answer: 'troublesome 里的 -some', explain: '都是「引起某种感觉」。' },
      { id: 'burdensome.q4', senseId: 'burdensome.s1', errorType: 'collocation', type: '搭配', prompt: '哪句自然？', options: ['a burdensome duty', 'a burden duty', 'a duty burdensome of'], answer: 'a burdensome duty', explain: '形容词放在 duty 前。' },
    ],
    usage: { domains: ['工作', '书面'], tone: '负面', commonConfusion: ['burden'] },
  });

  D('bureau', {
    etymology: {
      origin: '法语 bureau 原指铺了粗毛呢的写字桌，后来指使用这种桌子的办公室，再指政府里的局、处。',
      prefix: null,
      root: { text: 'bureau', gloss: '书桌，转指办事处' },
      suffix: null,
      history: [
        { label: '法语', text: '铺呢面的桌子' },
        { label: '现在', text: '局、处、办事处；美式英语里也可指带抽屉的柜子' },
      ],
      formationLogic: '地点从家具转移到在家具前办公的机构。',
      mnemonic: 'bureau 不是 bus。局是办公的地方，不是车。',
      note: '复数常见 bureaus 或 bureaux，考试认前者即可。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She sent the complaint to the housing bureau.', chinese: '她把投诉寄到了住房局。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bureau.s1', en: 'The travel bureau posted the storm warning on its door.', zh: '旅行办事处把风暴警报贴在门上。', structure: 'the ... bureau', grammar: '可数名词，前面常加机构名。', rationale: '机构义，不是那张旧书桌。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He works at the weather bureaucrat.', right: 'He works at the weather bureau.', reason: '机构是 bureau，在里面按章办事的人是 bureaucrat。', rule: 'bureau 地方或机构；bureaucrat 人。', special: 'FBI 的全称里就有 Bureau。' },
    ],
    quiz: [
      { id: 'bureau.q1', senseId: 'bureau.s1', errorType: 'meaning', type: '词义', prompt: 'a news bureau 最可能是：', options: ['新闻分社', '一张旧书桌的学名', '气象气球'], answer: '新闻分社', explain: '办事处、分社。' },
      { id: 'bureau.q2', senseId: 'bureau.s1', errorType: 'confusable', type: '易混', prompt: '刻板执行规章的官员叫：', options: ['a bureaucrat', 'a bureau', 'a burglar'], answer: 'a bureaucrat', explain: 'bureau 是机构。' },
      { id: 'bureau.q3', senseId: 'bureau.s1', errorType: 'meaning', type: '词源', prompt: 'bureau 较早的具体所指是：', options: ['铺了呢的写字桌', '一艘公共汽车', '一只浮标'], answer: '铺了呢的写字桌', explain: '家具义在先。' },
      { id: 'bureau.q4', senseId: 'bureau.s1', errorType: 'grammar', type: '语法', prompt: '两个局可以写成：', options: ['two bureaus', 'two bureau', 'two burea'], answer: 'two bureaus', explain: '英语复数常用 bureaus。' },
    ],
    usage: { domains: ['新闻', '政府'], tone: '正式', commonConfusion: ['bureaucrat'] },
  });

  D('bureaucrat', {
    etymology: {
      origin: '英语把 bureau「局、办公机构」和 -crat「掌权、统治的人」接在一起。指靠规章办事的官员，常带贬义。',
      prefix: null,
      root: { text: 'bureau', gloss: '局、办事处' },
      suffix: { text: '-crat', gloss: '某类掌权者，如 democrat 里的成分' },
      history: [
        { label: 'bureau', text: '办公机构' },
        { label: 'bureaucrat', text: '机构里按程序行使权力的人' },
      ],
      formationLogic: '地方加上「掌权的人」，就从办公室变成了官。',
      mnemonic: 'crat 在 aristocrat、democrat 里都是某一类掌权者。',
      note: '中性地说官员可用 official；bureaucrat 常暗示僵化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bureaucrat returned the form because one date was missing.', chinese: '一名官员因为少了一个日期把表格退了回来。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'bureaucrat.s1', en: 'Residents called the delay the work of cautious bureaucrats.', zh: '居民把拖延称作谨慎官僚的手笔。', structure: 'cautious bureaucrats', grammar: '可数，一个人 a bureaucrat。', rationale: '贬义在「只认程序」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bureaucrat is the name of the office building.', right: 'The bureau is the office; a bureaucrat is an official.', reason: '人和机构被对调了。', rule: '-crat 指人。', special: '形容词 bureaucratic，名词 bureaucracy。' },
    ],
    quiz: [
      { id: 'bureaucrat.q1', senseId: 'bureaucrat.s1', errorType: 'meaning', type: '词义', prompt: 'bureaucrat 是：', options: ['官员', '办公楼', '入室窃贼'], answer: '官员', explain: '人，不是楼。' },
      { id: 'bureaucrat.q2', senseId: 'bureaucrat.s1', errorType: 'confusable', type: '易混', prompt: '机构本身更应叫：', options: ['a bureau', 'a bureaucrat', 'a burglary'], answer: 'a bureau', explain: 'bureau 是处、局。' },
      { id: 'bureaucrat.q3', senseId: 'bureaucrat.s1', errorType: 'grammar', type: '语法', prompt: '僵化的作风是：', options: ['bureaucracy', 'bureaucrat as a building', 'bureauing'], answer: 'bureaucracy', explain: '制度或作风用 bureaucracy。' },
      { id: 'bureaucrat.q4', senseId: 'bureaucrat.s1', errorType: 'meaning', type: '词义', prompt: '-crat 提示这个词指：', options: ['某一类人', '过去时', '一座家具'], answer: '某一类人', explain: '和 democrat 一样指人。' },
    ],
    usage: { domains: ['评论', '政府'], tone: '常贬义', commonConfusion: ['bureau'] },
  });

  D('burglar', {
    etymology: {
      origin: 'burglar 在中古英语里专指闯进房子偷东西的人。词形里的 burg- 不要读成 hamburger。更早的拉丁拼法不必当必背词根。',
      prefix: null,
      root: { text: 'burglar', gloss: '入室窃贼' },
      suffix: null,
      history: [
        { label: '中古英语', text: '破门进入住处行窃的人' },
        { label: '现在', text: '仍强调「进入建筑物」，不是路上抢包' },
      ],
      formationLogic: '人和罪行分开：人是 burglar，罪行是 burglary，动词英式用 burgle。',
      mnemonic: 'burglar 里有个 lar，可只当作「那个人」，不要拆成 burger。',
      note: '持械当面抢是 robber，不是 burglar。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A burglar entered through the unlocked kitchen window.', chinese: '窃贼从没有锁上的厨房窗户进来。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'burglar.s1', en: 'Police say the burglar left before the family woke.', zh: '警方说窃贼在这家人醒来前就离开了。', structure: 'the burglar', grammar: '可数名词，指人。', rationale: '场景是进屋偷窃。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The burglar snatched her bag in the street.', right: 'The robber snatched her bag in the street.', reason: '街上抢包不是入室盗窃。', rule: 'burglar 入室；robber 抢劫；thief 笼统的贼。', special: '商店行窃常说 shoplifter。' },
    ],
    quiz: [
      { id: 'burglar.q1', senseId: 'burglar.s1', errorType: 'meaning', type: '词义', prompt: 'burglar 是：', options: ['入室窃贼', '汉堡师傅', '街头抢劫犯'], answer: '入室窃贼', explain: '要进入建筑物。' },
      { id: 'burglar.q2', senseId: 'burglar.s1', errorType: 'confusable', type: '易混', prompt: '当面抢走钱包的人更应叫：', options: ['a robber', 'a burglar', 'a bureau'], answer: 'a robber', explain: 'robber 强调抢劫。' },
      { id: 'burglar.q3', senseId: 'burglar.s1', errorType: 'meaning', type: '词义', prompt: '这种人犯下的罪是：', options: ['burglary', 'bureaucracy', 'burial'], answer: 'burglary', explain: 'burglary 是罪名。' },
      { id: 'burglar.q4', senseId: 'burglar.s1', errorType: 'grammar', type: '语法', prompt: '两名窃贼：', options: ['two burglars', 'two burglar', 'two burgla'], answer: 'two burglars', explain: '规则复数。' },
    ],
    usage: { domains: ['新闻', '法律'], tone: '负面', commonConfusion: ['robber', 'thief'] },
  });

  D('burglary', {
    etymology: {
      origin: '英语派生：burglar「入室窃贼」+ -y，把人变成那一类罪行。重音和拼写都保留 burglar 的词干。',
      prefix: null,
      root: { text: 'burglar', gloss: '入室窃贼' },
      suffix: { text: '-y', gloss: '行为或罪行名词' },
      history: [
        { label: 'burglar', text: '人' },
        { label: 'burglary', text: '入室盗窃这个罪名或案件' },
      ],
      formationLogic: '指人的词加名词尾，变成事件。',
      mnemonic: '有 -y 的是案子，没有的是人。',
      note: '一次案件 a burglary，多起 burglaries。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The burglary was discovered when the safe stood open.', chinese: '保险箱敞着，入室盗窃才被发现。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'burglary.s1', en: 'Reported burglary fell after the street lights were repaired.', zh: '路灯修好后，报案的入室盗窃下降了。', structure: 'reported burglary', grammar: '不可数可指这类犯罪，具体案件也可数。', rationale: '统计里常作一类罪行。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He was charged with burglar.', right: 'He was charged with burglary.', reason: '罪名是 burglary，burglar 是人，不能作 charge 的罪名宾语。', rule: 'charged with burglary；the burglar was charged。', special: 'attempted burglary 是未遂。' },
    ],
    quiz: [
      { id: 'burglary.q1', senseId: 'burglary.s1', errorType: 'meaning', type: '词义', prompt: 'burglary 是：', options: ['入室盗窃罪', '窃贼本人', '葬礼'], answer: '入室盗窃罪', explain: '事件或罪名。' },
      { id: 'burglary.q2', senseId: 'burglary.s1', errorType: 'grammar', type: '语法', prompt: 'He was charged with _____.', options: ['burglary', 'burglar', 'burgle'], answer: 'burglary', explain: 'with 后面接罪名。' },
      { id: 'burglary.q3', senseId: 'burglary.s1', errorType: 'grammar', type: '语法', prompt: '三起案件：', options: ['three burglaries', 'three burglarys', 'three burglar'], answer: 'three burglaries', explain: 'y 变 ies。' },
      { id: 'burglary.q4', senseId: 'burglary.s1', errorType: 'confusable', type: '易混', prompt: '商店里偷东西不叫 burglary，更常是：', options: ['shoplifting', 'burial', 'bureaucracy'], answer: 'shoplifting', explain: '没有「破门进入住所」这个要素。' },
    ],
    usage: { domains: ['法律', '新闻'], tone: '负面', commonConfusion: ['burglar'] },
  });

  D('burgle', {
    etymology: {
      origin: 'burgle 是从 burglar 反向造出来的动词：英语里先有「贼」，再补一个「去偷」的动作。这是逆成词，不是先有拉丁动词。',
      prefix: null,
      root: { text: 'burglar', gloss: '先有名词' },
      suffix: null,
      history: [
        { label: 'burglar', text: '人' },
        { label: 'burgle', text: '英式动词：入室偷窃' },
      ],
      formationLogic: '去掉名词尾，当成动词来用。美式口语更常说 burglarize。',
      mnemonic: 'burgle 只有一小节，是动词；burglar 才是人。',
      note: '美式考试若只出现 burglarize，意思同样是入室盗窃。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Thieves burgled three flats on the same stair.', chinese: '小偷在同一楼梯间偷了三套公寓。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'burgle.s1', en: 'The shop was burgled while the owner was at the market.', zh: '店主去市场时，店被撬了。', structure: 'was burgled', grammar: '及物动词，房屋可以作宾语，也常用于被动。', rationale: '英式动词，动作落在场所上。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'They burglar the house last night.', right: 'They burgled the house last night.', reason: '人是 burglar，过去式动词是 burgled。', rule: 'burgle, burgled；美式 burglarize, burglarized。', special: '不要写成 burgledly。' },
    ],
    quiz: [
      { id: 'burgle.q1', senseId: 'burgle.s1', errorType: 'meaning', type: '词义', prompt: 'burgle 是：', options: ['入室偷窃', '安葬', '担任官员'], answer: '入室偷窃', explain: '动词。' },
      { id: 'burgle.q2', senseId: 'burgle.s1', errorType: 'grammar', type: '语法', prompt: '英式过去式是：', options: ['burgled', 'burglar', 'burgleed'], answer: 'burgled', explain: '规则过去式。' },
      { id: 'burgle.q3', senseId: 'burgle.s1', errorType: 'confusable', type: '易混', prompt: '美式更常见的动词是：', options: ['burglarize', 'bureaucrat', 'burial'], answer: 'burglarize', explain: '同样指入室盗窃。' },
      { id: 'burgle.q4', senseId: 'burgle.s1', errorType: 'grammar', type: '语法', prompt: 'The flat was _____ overnight.', options: ['burgled', 'burglar', 'burglary'], answer: 'burgled', explain: '被动用过去分词。' },
    ],
    usage: { domains: ['新闻'], tone: '负面', commonConfusion: ['burglar', 'burglarize'] },
  });

  D('burial', {
    etymology: {
      origin: 'burial 来自 bury「埋葬」加上名词尾，古英语里就已经有「葬」这个名词形式。它是仪式或埋的行为，不是形容词 buried。',
      prefix: null,
      root: { text: 'bury', gloss: '埋葬' },
      suffix: { text: '-al', gloss: '行为名词，拼写里 y 的变化要整词记' },
      history: [
        { label: 'bury', text: '把遗体放入土中或安放' },
        { label: 'burial', text: '埋葬这件事或葬礼中的下葬' },
      ],
      formationLogic: '动词变事件名词。拼写不是 buryal。',
      mnemonic: 'burial 里有 buri，不要把 y 留在名词里。',
      note: 'burial ground 是墓地。葬礼的全套仪式更常说 funeral。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The burial took place on a windy Monday morning.', chinese: '下葬在一个起风的星期一上午举行。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'burial.s1', en: 'The family asked for a simple burial rather than a large ceremony.', zh: '家人要求简单下葬，不要大型仪式。', structure: 'a simple burial', grammar: '可数名词，一次下葬 a burial。', rationale: '和 funeral 相比，burial 更侧重埋本身。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The buried will be on Friday.', right: 'The burial will be on Friday.', reason: 'buried 是形容词或过去分词，不能当「葬礼」这个名词。', rule: 'burial 名词；bury 动词；buried 已埋葬的。', special: 'funeral 可以包含追悼，不限于下葬。' },
    ],
    quiz: [
      { id: 'burial.q1', senseId: 'burial.s1', errorType: 'meaning', type: '词义', prompt: 'burial 是：', options: ['埋葬', '已经埋好的形容词', '窃贼'], answer: '埋葬', explain: '名词。' },
      { id: 'burial.q2', senseId: 'burial.s1', errorType: 'confusable', type: '易混', prompt: '整场追悼仪式更常叫：', options: ['a funeral', 'a burglar', 'a bureau'], answer: 'a funeral', explain: 'burial 侧重下葬。' },
      { id: 'burial.q3', senseId: 'burial.s1', errorType: 'grammar', type: '语法', prompt: '名词拼写是：', options: ['burial', 'buryal', 'buried'], answer: 'burial', explain: '不要保留 y。' },
      { id: 'burial.q4', senseId: 'burial.s1', errorType: 'collocation', type: '搭配', prompt: 'a burial _____', options: ['ground', 'burgle', 'proof'], answer: 'ground', explain: 'burial ground 墓地。' },
    ],
    usage: { domains: ['生活', '新闻'], tone: '庄重', commonConfusion: ['funeral', 'buried'] },
  });

  D('buried', {
    etymology: {
      origin: 'buried 是 bury 的过去式和过去分词，也可作形容词：已经埋进土里，或被盖住、被藏住。',
      prefix: null,
      root: { text: 'bury', gloss: '埋' },
      suffix: { text: '-ed', gloss: '过去式、过去分词或形容词；y 变 i' },
      history: [
        { label: 'bury', text: '埋葬或掩藏' },
        { label: 'buried', text: '埋了；buried in 可指埋头于' },
      ],
      formationLogic: 'y 变 i 再加 ed，和 carried 一样。',
      mnemonic: 'buried 不是 burried，也不要写成 buryed。',
      note: 'buried in a book 是埋头读书，人并没有被埋起来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The old coins were buried under the garden wall.', chinese: '旧硬币埋在园墙下面。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'buried.s1', en: 'She stayed buried in the map until the train stopped.', zh: '她一直埋头看地图，直到火车停下。', structure: 'buried in + 事物', grammar: '形容词短语，表示完全投入或被覆盖。', rationale: '引申义在考试里很常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The treasure was buryed near the tree.', right: 'The treasure was buried near the tree.', reason: 'bury 的过去分词要变 y 为 i。', rule: 'bury, buried, buried。', special: '不要双写 r。' },
    ],
    quiz: [
      { id: 'buried.q1', senseId: 'buried.s1', errorType: 'grammar', type: '词形', prompt: 'bury 的过去式是：', options: ['buried', 'buryed', 'burried'], answer: 'buried', explain: 'y 变 i 加 ed。' },
      { id: 'buried.q2', senseId: 'buried.s1', errorType: 'meaning', type: '词义', prompt: 'buried in her notes 是：', options: ['埋头于笔记', '被笔记埋葬在土里', '把笔记卖了'], answer: '埋头于笔记', explain: '引申为专心。' },
      { id: 'buried.q3', senseId: 'buried.s1', errorType: 'confusable', type: '易混', prompt: '「下葬这场事」是：', options: ['burial', 'buried', 'burgle'], answer: 'burial', explain: 'burial 才是名词事件。' },
      { id: 'buried.q4', senseId: 'buried.s1', errorType: 'collocation', type: '搭配', prompt: 'The village was buried _____ snow.', options: ['in', 'on', 'of'], answer: 'in', explain: 'buried in snow。也说 under snow，但 in 最稳。' },
    ],
    usage: { domains: ['日常', '新闻'], tone: '中性', commonConfusion: ['burial'] },
  });

  D('burn', {
    etymology: {
      origin: 'burn 是古英语里就有的「燃烧」。它既指自己烧着，也指用热或火把东西烧伤、烧掉。',
      prefix: null,
      root: { text: 'burn', gloss: '燃烧' },
      suffix: null,
      history: [
        { label: '古英语', text: '燃烧' },
        { label: '现在', text: '动词多种过去式 burnt / burned；名词是烧伤处' },
      ],
      formationLogic: '不及物是火在烧，及物是把某物烧坏。名词是烧出来的痕迹。',
      mnemonic: '英式过去式常用 burnt，美式书面常用 burned，考试两种都认。',
      note: 'burn the midnight oil 是熬夜用功，不是真把灯油点着玩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The pan burned because nobody stirred the sauce.', chinese: '没人搅拌酱汁，锅烧糊了。' },
    ],
    contexts: [
      { domain: '安全', senseId: 'burn.s1', en: 'Dry grass can burn fast once a spark lands in it.', zh: '火星落进干草，火会烧得很快。', structure: 'can burn', grammar: '不及物，主语是燃料。', rationale: '先掌握「着火」这个核心。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She burned the finger on the kettle.', right: 'She burned her finger on the kettle.', reason: '烧伤自己的身体部位要用物主代词。', rule: 'burn one\'s hand / finger on something。', special: 'be burned 强调被火伤到。' },
    ],
    quiz: [
      { id: 'burn.q1', senseId: 'burn.s1', errorType: 'meaning', type: '词义', prompt: 'The toast burned. 是：', options: ['面包烤糊了', '面包买到了', '面包埋起来了'], answer: '面包烤糊了', explain: '不及物，自己烧过了。' },
      { id: 'burn.q2', senseId: 'burn.s1', errorType: 'grammar', type: '语法', prompt: '哪种过去式可以接受？', options: ['burned 或 burnt', 'burnen', 'born'], answer: 'burned 或 burnt', explain: '两种都常见。' },
      { id: 'burn.q3', senseId: 'burn.s1', errorType: 'collocation', type: '搭配', prompt: 'He burned _____ hand on the stove.', options: ['his', 'a', 'of'], answer: 'his', explain: '身体部位加物主代词。' },
      { id: 'burn.q4', senseId: 'burn.s1', errorType: 'confusable', type: '易混', prompt: '埋进土里是：', options: ['bury', 'burn', 'bear'], answer: 'bury', explain: 'burn 是火。' },
    ],
    usage: { domains: ['日常', '安全'], tone: '中性', commonConfusion: ['bury'] },
  });

  D('burn out', {
    etymology: {
      origin: '短语动词：burn「燃烧」+ out「到尽头、熄灭」。火烧完了叫 burn out；人被工作耗尽也用同一个形象。',
      prefix: null,
      root: { text: 'burn', gloss: '燃烧' },
      suffix: null,
      history: [
        { label: '火', text: '燃料用尽，火熄灭' },
        { label: '人', text: '长期过劳后精力耗尽' },
      ],
      formationLogic: '副词 out 表示「彻底、尽了」。对象可以是火、灯泡或人。',
      mnemonic: 'out 不是「出去上班」，而是「烧到没有了」。',
      note: '名词 burnout 常写成一个词，动词短语仍分开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The campfire burned out before midnight.', chinese: '营火在午夜前燃尽了。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'burn out.s1', en: 'Junior doctors burned out after months of night shifts.', zh: '初级医生上了几个月夜班后累垮了。', structure: 'burned out', grammar: '人作主语，短语动词不需要宾语。', rationale: '现代英语里人的义项非常常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She burned out the job.', right: 'She burned out from the job.', reason: '累垮的是人，不是把工作烧掉。工作要用 from 或 because of。', rule: 'somebody burns out；a fire burns out。', special: 'burn out a bulb 才是把灯泡烧坏，这时灯泡是宾语。' },
    ],
    quiz: [
      { id: 'burn out.q1', senseId: 'burn out.s1', errorType: 'meaning', type: '词义', prompt: 'A nurse burned out. 是：', options: ['护士累垮了', '护士把医院点燃了', '护士下班外出'], answer: '护士累垮了', explain: '精力耗尽。' },
      { id: 'burn out.q2', senseId: 'burn out.s1', errorType: 'meaning', type: '词义', prompt: 'The candle burned out. 是：', options: ['蜡烛燃尽', '蜡烛突然爆炸', '蜡烛被埋起来'], answer: '蜡烛燃尽', explain: '燃料没有了。' },
      { id: 'burn out.q3', senseId: 'burn out.s1', errorType: 'grammar', type: '语法', prompt: '名词「职业倦怠」常写成：', options: ['burnout', 'burn outed', 'outburn'], answer: 'burnout', explain: '名词可连写。' },
      { id: 'burn out.q4', senseId: 'burn out.s1', errorType: 'collocation', type: '搭配', prompt: 'They burned themselves out _____ overtime.', options: ['from', 'the job as object without from', 'into candle'], answer: 'from', explain: '原因用 from overtime 一类说法。选项中 from 才是可用介词。' },
    ],
    usage: { domains: ['工作', '日常'], tone: '负面', commonConfusion: ['burn'] },
  });

  D('burrow', {
    etymology: {
      origin: 'burrow 和表示「遮蔽处、町」的古词同路，指动物在地下挖出的藏身洞。它不是 bureau「局」，也不是 borrow「借入」。',
      prefix: null,
      root: { text: 'burrow', gloss: '地洞' },
      suffix: null,
      history: [
        { label: '遮蔽处', text: '可以藏身的地方' },
        { label: '现在', text: '名词洞穴；动词挖掘或拱进' },
      ],
      formationLogic: '洞和挖洞用同一个词。',
      mnemonic: '两个 r，像兔子在土里来回拱。',
      note: 'burrow into a blanket 也可比喻人钻进毯子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Rabbits had dug a burrow under the hedge.', chinese: '兔子在树篱下挖了一个洞。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'burrow.s1', en: 'The fox burrowed into the soft bank and disappeared.', zh: '狐狸拱进松软的土坡，不见了。', structure: 'burrow into', grammar: '动词后常用 into 加地点。', rationale: '动作和洞穴名词互相支撑。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Can I burrow your pen?', right: 'Can I borrow your pen?', reason: '借入是 borrow，挖洞是 burrow。', rule: 'burrow 洞或钻；borrow 借。', special: 'bureau 才是局。' },
    ],
    quiz: [
      { id: 'burrow.q1', senseId: 'burrow.s1', errorType: 'meaning', type: '词义', prompt: 'a rabbit burrow 是：', options: ['兔洞', '兔子借来的笔', '兔子办公室'], answer: '兔洞', explain: '地下洞穴。' },
      { id: 'burrow.q2', senseId: 'burrow.s1', errorType: 'confusable', type: '易混', prompt: '「借书」用：', options: ['borrow', 'burrow', 'bureau'], answer: 'borrow', explain: '一个 r。' },
      { id: 'burrow.q3', senseId: 'burrow.s1', errorType: 'collocation', type: '搭配', prompt: 'The mole burrowed _____ the soil.', options: ['into', 'from', 'of proof'], answer: 'into', explain: 'burrow into。' },
      { id: 'burrow.q4', senseId: 'burrow.s1', errorType: 'grammar', type: '语法', prompt: '两个洞：', options: ['two burrows', 'two burrow', 'two borrows'], answer: 'two burrows', explain: '名词复数加 s。' },
    ],
    usage: { domains: ['自然'], tone: '中性', commonConfusion: ['borrow', 'bureau'] },
  });

  D('bursar', {
    etymology: {
      origin: 'bursar 经中古拉丁语来自「钱袋」bursa，所以是管钱袋的人：学校里的财务主管。奖学金生这一义是从「领到那笔钱的人」来的。',
      prefix: null,
      root: { text: 'burs-', gloss: '钱袋，同 purse 那一支' },
      suffix: { text: '-ar', gloss: '做这件事的人' },
      history: [
        { label: '钱袋', text: '掌管公共的钱' },
        { label: '现在', text: '大学财务主管；也可指拿奖学金的学生' },
      ],
      formationLogic: '和 purse 同源的「袋」加上指人的尾。',
      mnemonic: 'bursar 管 bursary「奖学金、财务处」，不是 burglar。',
      note: '读音里的 s 发 z 的感觉，不要读成 burglar。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bursar explained why the hall fees had risen.', chinese: '财务主管解释了宿舍费用为什么上涨。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'bursar.s1', en: 'Students collect grant forms from the bursar before term starts.', zh: '开学前学生到财务主管那里领助学金表格。', structure: 'the bursar', grammar: '头衔可数，通常加 the。', rationale: '学校财务这个具体职务。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The burglar of the college signed the cheque.', right: 'The bursar of the college signed the cheque.', reason: '签字管钱的是 bursar，burglar 是窃贼。', rule: 'bursar 财务；burglar 窃贼。', special: 'a bursar 也可指奖学金生，要看学校用法。' },
    ],
    quiz: [
      { id: 'bursar.q1', senseId: 'bursar.s1', errorType: 'meaning', type: '词义', prompt: '大学里的 bursar 最常是：', options: ['财务主管', '入室窃贼', '浮标'], answer: '财务主管', explain: '管钱的人。' },
      { id: 'bursar.q2', senseId: 'bursar.s1', errorType: 'confusable', type: '易混', prompt: '和 bursar 最易看混的是：', options: ['burglar', 'bureau only as a car', 'bunny'], answer: 'burglar', explain: '中间字母不同，意思差很远。' },
      { id: 'bursar.q3', senseId: 'bursar.s1', errorType: 'meaning', type: '词源', prompt: 'burs- 和哪件东西最近？', options: ['钱袋', '火焰', '灌木'], answer: '钱袋', explain: '同源的是 purse 那一支。' },
      { id: 'bursar.q4', senseId: 'bursar.s1', errorType: 'grammar', type: '语法', prompt: '两位财务主管：', options: ['two bursars', 'two bursar', 'two bursa'], answer: 'two bursars', explain: '规则复数。' },
    ],
    usage: { domains: ['校园'], tone: '正式', commonConfusion: ['burglar'] },
  });

  D('burst', {
    etymology: {
      origin: 'burst 是古英语里「突然裂开」。东西从内部撑破，或一种动作突然爆发，都用它。',
      prefix: null,
      root: { text: 'burst', gloss: '突然爆开' },
      suffix: null,
      history: [
        { label: '古英语', text: '破裂' },
        { label: '现在', text: '动词过去式仍是 burst；名词是一阵突发' },
      ],
      formationLogic: '过去式和过去分词与原形同形，不要加 ed。',
      mnemonic: 'burst 已经有 t，再加 ed 就错了。',
      note: 'a burst of applause 是一阵掌声，不是气球本身。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The pipe burst and water covered the basement floor.', chinese: '管子爆了，水漫过地下室的地面。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'burst.s1', en: 'There was a burst of laughter when the hat fell off.', zh: '帽子掉下来时爆发一阵笑声。', structure: 'a burst of + 名词', grammar: '名词 burst 后常用 of。', rationale: '短而突然。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The balloon bursted.', right: 'The balloon burst.', reason: 'burst 是不规则动词，过去式不变。', rule: 'burst, burst, burst。', special: 'bust 在口语里也可表示打破，但考试过去式仍优先 burst。' },
    ],
    quiz: [
      { id: 'burst.q1', senseId: 'burst.s1', errorType: 'grammar', type: '语法', prompt: '昨天管子爆了：', options: ['The pipe burst.', 'The pipe bursted.', 'The pipe was bursted.'], answer: 'The pipe burst.', explain: '过去式同形。' },
      { id: 'burst.q2', senseId: 'burst.s1', errorType: 'collocation', type: '搭配', prompt: 'a burst _____ anger', options: ['of', 'to', 'on'], answer: 'of', explain: 'a burst of。' },
      { id: 'burst.q3', senseId: 'burst.s1', errorType: 'meaning', type: '词义', prompt: 'burst 强调：', options: ['突然裂开或爆发', '慢慢漏气', '仔细计算'], answer: '突然裂开或爆发', explain: '短促有力。' },
      { id: 'burst.q4', senseId: 'burst.s1', errorType: 'confusable', type: '易混', prompt: '口语里「弄坏」也可能说：', options: ['bust', 'bursar', 'burial'], answer: 'bust', explain: 'bust 与 burst 有关，但更口语。' },
    ],
    usage: { domains: ['日常', '新闻'], tone: '中性', commonConfusion: ['bust'] },
  });

  D('burst out', {
    etymology: {
      origin: '短语动词：burst「突然爆开」+ out「向外」。情绪或话语一下子冒出来，人也可以突然冲出去。',
      prefix: null,
      root: { text: 'burst', gloss: '突发' },
      suffix: null,
      history: [
        { label: 'burst', text: '内部突然打开' },
        { label: 'burst out', text: '突然哭、笑、说，或冲出' },
      ],
      formationLogic: 'out 标出方向：从里面一下子到外面。',
      mnemonic: '后面常接 crying、laughing 或 of，而不是随意加 to。',
      note: 'burst out laughing 是突然大笑。burst into laughter 也通，介词不同。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She burst out crying when she heard the score.', chinese: '听到分数时她突然哭了出来。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'burst out.s1', en: 'He burst out of the room before anyone could stop him.', zh: '没人来得及拦，他就冲出了房间。', structure: 'burst out of + 地点', grammar: 'of 表示离开那个空间。', rationale: '和「突然说」是同一个短语的两条用法。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She burst out to cry.', right: 'She burst out crying.', reason: '后面接动词 ing，不接 to do。', rule: 'burst out crying / laughing；burst out of a place。', special: 'burst into tears 是另一条正确搭配。' },
    ],
    quiz: [
      { id: 'burst out.q1', senseId: 'burst out.s1', errorType: 'collocation', type: '搭配', prompt: 'He burst out _____.', options: ['laughing', 'to laugh', 'laugh'], answer: 'laughing', explain: 'burst out + -ing。' },
      { id: 'burst out.q2', senseId: 'burst out.s1', errorType: 'collocation', type: '搭配', prompt: 'They burst out _____ the hall.', options: ['of', 'to cry', 'on'], answer: 'of', explain: '冲出某地用 of。' },
      { id: 'burst out.q3', senseId: 'burst out.s1', errorType: 'confusable', type: '易混', prompt: '「突然大哭」也可以说：', options: ['burst into tears', 'burst up tears', 'burn out tears'], answer: 'burst into tears', explain: 'into + 名词。' },
      { id: 'burst out.q4', senseId: 'burst out.s1', errorType: 'meaning', type: '词义', prompt: 'burst out 强调：', options: ['突然开始或冲出', '慢慢计划', '把火熄灭'], answer: '突然开始或冲出', explain: '突发。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['burst into'] },
  });

  D('bury', {
    etymology: {
      origin: 'bury 是古英语动词，把遗体或物件放进土里，也可只是盖住、藏起来。名词形式是 burial，过去式是 buried。',
      prefix: null,
      root: { text: 'bury', gloss: '埋、藏' },
      suffix: null,
      history: [
        { label: '古英语', text: '埋葬' },
        { label: '现在', text: '埋；bury one\'s face 把脸埋进；bury the hatchet 和解' },
      ],
      formationLogic: '及物动词，被埋的东西直接作宾语。',
      mnemonic: 'bury 对 burn：一个用土，一个用火。',
      note: 'bury the hatchet 来自埋掉战斧，表示停止争斗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They buried the time capsule beside the old gate.', chinese: '他们把时光胶囊埋在旧大门旁边。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bury.s1', en: 'The two neighbours finally buried the hatchet after the flood.', zh: '洪水过后两家邻居终于和解了。', structure: 'bury the hatchet', grammar: '固定宾语 the hatchet，不随意更换。', rationale: '习语义和字面埋葬都要会。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She buried her face to her hands.', right: 'She buried her face in her hands.', reason: '埋进双手用 in，不用 to。', rule: 'bury something in / under something。', special: 'be buried in work 是埋头工作。' },
    ],
    quiz: [
      { id: 'bury.q1', senseId: 'bury.s1', errorType: 'meaning', type: '词义', prompt: 'bury the hatchet 是：', options: ['和解', '把帽子烧掉', '买一把斧头'], answer: '和解', explain: '停止争斗的习语。' },
      { id: 'bury.q2', senseId: 'bury.s1', errorType: 'collocation', type: '搭配', prompt: 'He buried the box _____ the sand.', options: ['in', 'to', 'of'], answer: 'in', explain: 'bury in。' },
      { id: 'bury.q3', senseId: 'bury.s1', errorType: 'confusable', type: '易混', prompt: '火烧是：', options: ['burn', 'bury', 'burst'], answer: 'burn', explain: 'bury 不用火。' },
      { id: 'bury.q4', senseId: 'bury.s1', errorType: 'grammar', type: '语法', prompt: '过去式拼写：', options: ['buried', 'buryed', 'burry'], answer: 'buried', explain: 'y 变 i。' },
    ],
    usage: { domains: ['生活', '新闻'], tone: '中性', commonConfusion: ['burn'] },
  });

  D('bus', {
    etymology: {
      origin: 'bus 是 omnibus 的截短。omnibus 来自拉丁语「为所有人的」，因为这种车谁都可以上。现在只剩 bus 这个尾巴。',
      prefix: null,
      root: { text: 'bus', gloss: '从 omnibus 截下来的「公共车辆」' },
      suffix: null,
      history: [
        { label: 'omnibus', text: '十九世纪的公共马车，意为给大家坐的' },
        { label: 'bus', text: '现代公共汽车；动词可指用校车接送' },
      ],
      formationLogic: '截短后独立成词。复数 buses 或 busses，前者更常见。',
      mnemonic: 'omni 是「全部」，截掉以后不要把 bus 理解成商务 business。',
      note: 'by bus 是交通方式，中间没有 the。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We caught the last bus back to the campus.', chinese: '我们赶上了回校园的末班车。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'bus.s1', en: 'School buses leave from the north gate at four.', zh: '校车四点从北门出发。', structure: 'school buses', grammar: '可数；交通方式用 by bus。', rationale: '交通工具这个本义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She goes to work by the bus every day.', right: 'She goes to work by bus every day.', reason: 'by 加交通工具不加 the。', rule: 'by bus / by train；on the bus 才加 the，表示在那辆车上。', special: 'take a bus 要用 a。' },
    ],
    quiz: [
      { id: 'bus.q1', senseId: 'bus.s1', errorType: 'meaning', type: '词义', prompt: 'bus 截自哪个意思？', options: ['给所有人乘的车', '商业公司', '灌木'], answer: '给所有人乘的车', explain: 'omnibus。' },
      { id: 'bus.q2', senseId: 'bus.s1', errorType: 'collocation', type: '搭配', prompt: '出行方式：go _____ bus', options: ['by', 'by the', 'with a'], answer: 'by', explain: 'by bus。' },
      { id: 'bus.q3', senseId: 'bus.s1', errorType: 'grammar', type: '语法', prompt: '更常见的复数是：', options: ['buses', 'bus', 'buss'], answer: 'buses', explain: 'buses 最稳。' },
      { id: 'bus.q4', senseId: 'bus.s1', errorType: 'confusable', type: '易混', prompt: '在那辆车里面：', options: ['on the bus', 'by the bus always', 'in bus'], answer: 'on the bus', explain: '在车上用 on the bus。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['omnibus'] },
  });

  D('bush', {
    etymology: {
      origin: 'bush 指比树矮、从根部就分出许多枝的灌木。它和 brush「刷子、灌丛」有过往来，但现在不要互相替换。',
      prefix: null,
      root: { text: 'bush', gloss: '灌木' },
      suffix: null,
      history: [
        { label: '植物', text: '灌木' },
        { label: '引申', text: 'the bush 在一些地区指未开垦的荒野' },
      ],
      formationLogic: '一株是 a bush，一片荒野可以用 the bush。',
      mnemonic: 'bush 不是 brush。刷牙的是 brush。',
      note: 'beat about the bush 是绕圈子，不直说。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A rose bush blocked the lower window.', chinese: '一丛玫瑰挡住了下面那扇窗。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bush.s1', en: 'Stop beating about the bush and tell us the cost.', zh: '别再绕圈子了，告诉我们费用。', structure: 'beat about the bush', grammar: '固定介词 about，美式也见 around。', rationale: '习语比植物义更常考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He cleaned his teeth with a bush.', right: 'He cleaned his teeth with a brush.', reason: '牙刷是 brush，灌木是 bush。', rule: 'bush 植物；brush 刷子，也可指矮丛 brush。', special: 'a bush of hair 可指浓密的头发。' },
    ],
    quiz: [
      { id: 'bush.q1', senseId: 'bush.s1', errorType: 'meaning', type: '词义', prompt: 'a rose bush 是：', options: ['玫瑰丛', '玫瑰刷', '玫瑰面包'], answer: '玫瑰丛', explain: '灌木。' },
      { id: 'bush.q2', senseId: 'bush.s1', errorType: 'collocation', type: '搭配', prompt: 'beat about the _____', options: ['bush', 'brush', 'bus'], answer: 'bush', explain: '绕圈子。' },
      { id: 'bush.q3', senseId: 'bush.s1', errorType: 'confusable', type: '易混', prompt: '牙刷是：', options: ['a brush', 'a bush', 'a bursar'], answer: 'a brush', explain: '多一个 r。' },
      { id: 'bush.q4', senseId: 'bush.s1', errorType: 'meaning', type: '词义', prompt: 'the bush 在澳洲英语等里还可指：', options: ['荒野林地', '公共汽车总站', '内阁'], answer: '荒野林地', explain: '未开垦的乡野。' },
    ],
    usage: { domains: ['自然', '日常'], tone: '中性', commonConfusion: ['brush'] },
  });

  D('busiest', {
    etymology: {
      origin: '英语派生：busy「忙的」的最高级。y 变 i 再加 -est，表示三者或以上当中最忙。',
      prefix: null,
      root: { text: 'busy', gloss: '忙' },
      suffix: { text: '-est', gloss: '最高级' },
      history: [
        { label: 'busy', text: '事情多' },
        { label: 'busiest', text: '最忙的' },
      ],
      formationLogic: '比较级 busier，最高级 busiest。前面常加 the。',
      mnemonic: 'busy 的 y 在比较级和最高级里都变成 i。',
      note: 'the busiest street 不一定是 the noisiest street。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Saturday is the busiest day at the clinic.', chinese: '星期六是诊所最忙的一天。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'busiest.s1', en: 'Even the busiest nurse stopped to check the child\'s name.', zh: '连最忙的护士也停下来核对了孩子的名字。', structure: 'the busiest + 名词', grammar: '最高级前通常加 the。', rationale: '语法形式就是考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'This is the busyest month of the year.', right: 'This is the busiest month of the year.', reason: 'y 要变成 i，不能写成 busyest。', rule: 'busy, busier, busiest。', special: 'most busy 不自然。' },
    ],
    quiz: [
      { id: 'busiest.q1', senseId: 'busiest.s1', errorType: 'grammar', type: '语法', prompt: 'busy 的最高级：', options: ['busiest', 'busyest', 'most busy always'], answer: 'busiest', explain: 'y 变 i 加 est。' },
      { id: 'busiest.q2', senseId: 'busiest.s1', errorType: 'grammar', type: '语法', prompt: '比较级是：', options: ['busier', 'more busyest', 'busyer'], answer: 'busier', explain: '同样变 i。' },
      { id: 'busiest.q3', senseId: 'busiest.s1', errorType: 'collocation', type: '搭配', prompt: '_____ busiest platform is platform 4.', options: ['The', 'A', 'An'], answer: 'The', explain: '最高级通常用 the。' },
      { id: 'busiest.q4', senseId: 'busiest.s1', errorType: 'meaning', type: '词义', prompt: 'busiest 比较的是：', options: ['忙的程度', '灌木的高度', '公共汽车的速度'], answer: '忙的程度', explain: '来自 busy。' },
    ],
    usage: { domains: ['日常', '工作'], tone: '中性', commonConfusion: ['busy'] },
  });

  D('business', {
    etymology: {
      origin: 'business 是 busy + -ness，本来是「忙着的状态」。因为人们忙的常常是买卖，词义才落到生意、公司和该办的事上。',
      prefix: null,
      root: { text: 'busy', gloss: '忙' },
      suffix: { text: '-ness', gloss: '状态名词；拼写里 y 变为 i' },
      history: [
        { label: '忙碌', text: '忙的状态' },
        { label: '现在', text: '商业、公司、事务；none of your business 是不关你的事' },
      ],
      formationLogic: '拼写是 business，只有一个 i 在 s 前，不要写成 busyness，除非故意表示「忙碌」。',
      mnemonic: 'busyness 才是「忙碌」；business 多半是「生意、事情」。',
      note: 'do business with 是与某人做生意。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The family business sells maps and walking sticks.', chinese: '这家家族企业卖地图和手杖。' },
    ],
    contexts: [
      { domain: '商务', senseId: 'business.s1', en: 'It is none of my business how they spend the prize money.', zh: '他们怎么花奖金不关我的事。', structure: 'none of one\'s business', grammar: 'business 在这里不可数，指私事。', rationale: '事务义和公司义要分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She runs a busy businesss online.', right: 'She runs an online business.', reason: '拼写只有一个 s 在词尾前的那组里：busi-ness，不能多加 s，也不能照 busy 直接加 ness 却不改 y。', rule: 'business 表示生意；若要说「忙碌」可用 busyness，那是另一个词。', special: '复数 businesses 是多家公司。' },
    ],
    quiz: [
      { id: 'business.q1', senseId: 'business.s1', errorType: 'meaning', type: '词义', prompt: 'mind your own business 是：', options: ['少管闲事', '去开一家公司', '赶上公共汽车'], answer: '少管闲事', explain: 'business 这里是私事。' },
      { id: 'business.q2', senseId: 'business.s1', errorType: 'grammar', type: '语法', prompt: '正确拼写是：', options: ['business', 'bussiness', 'busyness for a shop'], answer: 'business', explain: '生意是 business。' },
      { id: 'business.q3', senseId: 'business.s1', errorType: 'collocation', type: '搭配', prompt: 'do business _____ a partner', options: ['with', 'to', 'on'], answer: 'with', explain: 'do business with。' },
      { id: 'business.q4', senseId: 'business.s1', errorType: 'confusable', type: '易混', prompt: '「很忙碌」这个状态若要单独说，更贴的词是：', options: ['busyness', 'bus', 'bush'], answer: 'busyness', explain: 'business 已经偏向事务和买卖。' },
    ],
    usage: { domains: ['商务', '日常'], tone: '中性', commonConfusion: ['busyness'] },
  });

  D('businessman', {
    etymology: {
      origin: '英语复合词：business「生意」+ man「男人」。指从事商业的男人。说全体商家时，现代英语常用 business people，避免只说男人。',
      prefix: null,
      root: { text: 'business', gloss: '生意' },
      suffix: null,
      history: [
        { label: 'business', text: '买卖' },
        { label: 'businessman', text: '商人、企业家（男性）' },
      ],
      formationLogic: '两个名词相加，人在后面。',
      mnemonic: '对应的女性词是 businesswoman，复数 businessmen。',
      note: '中性头衔可用 businessperson 或 entrepreneur，看语境。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The businessman opened a second shop near the station.', chinese: '这位商人在车站附近又开了一家店。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'businessman.s1', en: 'Local businessmen funded the new clinic roof.', zh: '当地商人出资修了诊所的新屋顶。', structure: 'businessmen', grammar: '复数把 man 改成 men。', rationale: '复合词复数在第二个成分上变。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Three businessmans attended the fair.', right: 'Three businessmen attended the fair.', reason: 'man 的复数是 men，不是加 s。', rule: 'businessman, businessmen；businesswoman, businesswomen。', special: '不要写成 business\'s man。' },
    ],
    quiz: [
      { id: 'businessman.q1', senseId: 'businessman.s1', errorType: 'meaning', type: '词义', prompt: 'businessman 是：', options: ['男商人', '公共汽车司机', '最忙的一天'], answer: '男商人', explain: 'business + man。' },
      { id: 'businessman.q2', senseId: 'businessman.s1', errorType: 'grammar', type: '语法', prompt: '复数是：', options: ['businessmen', 'businessmans', 'businessmanes'], answer: 'businessmen', explain: 'man 变 men。' },
      { id: 'businessman.q3', senseId: 'businessman.s1', errorType: 'confusable', type: '易混', prompt: '女性对应词是：', options: ['businesswoman', 'busybody', 'bursar'], answer: 'businesswoman', explain: 'woman 替换 man。' },
      { id: 'businessman.q4', senseId: 'businessman.s1', errorType: 'context', type: '语境', prompt: '想同时包括男女商家，更稳妥的是：', options: ['business people', 'only businessmen for a mixed group', 'busiest'], answer: 'business people', explain: 'businessmen 字面上是男性。' },
    ],
    usage: { domains: ['新闻', '商务'], tone: '中性', commonConfusion: ['businesswoman'] },
  });

  D('bust', {
    etymology: {
      origin: 'bust 有两条路，不要合成一个词根。表示打破时，它是 burst 的口语缩短；表示半身像时，它来自意大利语 busto「上半身雕塑」。',
      prefix: null,
      root: { text: 'bust', gloss: '打破，或半身像' },
      suffix: null,
      history: [
        { label: 'burst', text: '口语里变成 bust：弄坏、失败' },
        { label: 'busto', text: '头和肩的雕像；也可指胸部' },
      ],
      formationLogic: '同形不同源。看后面是雕像、警察搜捕，还是东西坏了。',
      mnemonic: '美术馆里的 bust 是雕塑；机器 go bust 是破产、垮了。',
      note: 'a drug bust 是警方突击查抄，口语色彩重。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The marble bust of the founder stands in the lobby.', chinese: '创始人的大理石半身像立在门厅里。' },
    ],
    contexts: [
      { domain: '经济', senseId: 'bust.s1', en: 'Two small airlines went bust after the fare war.', zh: '票价大战之后两家小航空公司破产了。', structure: 'go bust', grammar: 'go 加形容词性的 bust，表示垮掉。', rationale: '和雕塑义差得很远，必须靠语境。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The company went bust, so they bought a statue.', right: 'The company went bust, so it stopped trading.', reason: 'go bust 不是去买半身像，而是破产。', rule: 'go bust 垮台；a bust of somebody 某人的半身像。', special: 'bust a pipe 是把管子弄破。' },
    ],
    quiz: [
      { id: 'bust.q1', senseId: 'bust.s1', errorType: 'meaning', type: '词义', prompt: 'a bust of a poet 是：', options: ['诗人半身像', '诗人破产', '诗人被逮捕'], answer: '诗人半身像', explain: '雕塑义。' },
      { id: 'bust.q2', senseId: 'bust.s1', errorType: 'meaning', type: '词义', prompt: 'The shop went bust. 是：', options: ['商店破产了', '商店竖起雕像', '商店开始繁荣'], answer: '商店破产了', explain: 'go bust。' },
      { id: 'bust.q3', senseId: 'bust.s1', errorType: 'confusable', type: '易混', prompt: '更正式的「爆裂」是：', options: ['burst', 'bursar', 'bush'], answer: 'burst', explain: 'bust 是口语缩短。' },
      { id: 'bust.q4', senseId: 'bust.s1', errorType: 'context', type: '语境', prompt: 'a police bust 最可能是：', options: ['突击查抄', '半身像展览', '丰收'], answer: '突击查抄', explain: '执法口语。' },
    ],
    usage: { domains: ['艺术', '口语'], tone: '视语境', commonConfusion: ['burst'] },
  });

  D('bustle', {
    etymology: {
      origin: 'bustle 表示忙乱喧闹，带有动作发出来的那种声音感。不要把它拆成 bust「打碎」加一个尾巴就当词源已经清楚。',
      prefix: null,
      root: { text: 'bustle', gloss: '忙乱' },
      suffix: null,
      history: [
        { label: '动作', text: '匆忙来回' },
        { label: '名词', text: '喧闹而忙碌的场面' },
      ],
      formationLogic: '动词是人在忙，名词是那种场面。',
      mnemonic: 'bustle 比 busy 更有画面：人在穿来穿去。',
      note: 'hustle and bustle 是熙熙攘攘的固定搭配。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Market bustle faded once the rain started.', chinese: '一开始下雨，市场的喧闹就淡下去了。' },
    ],
    contexts: [
      { domain: '城市', senseId: 'bustle.s1', en: 'She loved the hustle and bustle of the port at dawn.', zh: '她喜欢港口黎明时的熙熙攘攘。', structure: 'hustle and bustle', grammar: '两个名词绑在一起，常不可数。', rationale: '搭配比单独一个词更常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'the bustle and hustle of the port', right: 'the hustle and bustle of the port', reason: '顺序习惯是 hustle and bustle，对调后不像成语。', rule: 'hustle and bustle；bustle with activity。', special: 'bustle 也可作动词：bustle about。' },
    ],
    quiz: [
      { id: 'bustle.q1', senseId: 'bustle.s1', errorType: 'meaning', type: '词义', prompt: 'bustle 是：', options: ['喧闹忙乱', '半身像', '破产'], answer: '喧闹忙乱', explain: '忙碌的场面。' },
      { id: 'bustle.q2', senseId: 'bustle.s1', errorType: 'collocation', type: '搭配', prompt: 'hustle and _____', options: ['bustle', 'burst', 'bus'], answer: 'bustle', explain: '固定顺序。' },
      { id: 'bustle.q3', senseId: 'bustle.s1', errorType: 'confusable', type: '易混', prompt: 'go bust 里的 bust 是：', options: ['破产', '忙乱场面', '浮标'], answer: '破产', explain: '不要和 bustle 混。' },
      { id: 'bustle.q4', senseId: 'bustle.s1', errorType: 'grammar', type: '语法', prompt: 'The kitchen bustled _____ cooks.', options: ['with', 'of and', 'bust'], answer: 'with', explain: 'bustle with。' },
    ],
    usage: { domains: ['城市', '书面'], tone: '中性', commonConfusion: ['bust'] },
  });

  D('busy', {
    etymology: {
      origin: 'busy 来自古英语，表示有事在身、不得空。它可以形容人、日子、电话线路，也可以作动词 busy oneself with。',
      prefix: null,
      root: { text: 'busy', gloss: '忙' },
      suffix: null,
      history: [
        { label: '古英语', text: '专心、占用' },
        { label: '现在', text: '忙碌；线路忙；图案太花也可说 busy' },
      ],
      formationLogic: '形容词为主。比较级 busier，名词生意是 business。',
      mnemonic: '电话里 the line is busy 不是人很忙，而是占线。',
      note: 'busy with something，或 busy doing something，不用 busy to do。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The mechanic was busy replacing the brake pads.', chinese: '机修工正忙着换刹车片。' },
    ],
    contexts: [
      { domain: '电话', senseId: 'busy.s1', en: 'I kept calling, but the line was busy.', zh: '我一直打，可是线路忙。', structure: 'the line is busy', grammar: '形容词作表语。', rationale: '占线是独立搭配。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She is busy to finish the report.', right: 'She is busy finishing the report.', reason: '忙着做某事用 -ing，不用 to do。', rule: 'busy doing；busy with + 名词。', special: 'get busy 是开始加紧做。' },
    ],
    quiz: [
      { id: 'busy.q1', senseId: 'busy.s1', errorType: 'grammar', type: '语法', prompt: 'She is busy _____ the data.', options: ['checking', 'to check', 'check'], answer: 'checking', explain: 'busy doing。' },
      { id: 'busy.q2', senseId: 'busy.s1', errorType: 'collocation', type: '搭配', prompt: 'busy _____ a project', options: ['with', 'to', 'est'], answer: 'with', explain: 'busy with + 名词。' },
      { id: 'busy.q3', senseId: 'busy.s1', errorType: 'meaning', type: '词义', prompt: 'The line is busy. 是：', options: ['占线', '线路很勤劳', '电话线着火'], answer: '占线', explain: '电话用语。' },
      { id: 'busy.q4', senseId: 'busy.s1', errorType: 'confusable', type: '易混', prompt: '「生意」是：', options: ['business', 'busiest', 'bustle'], answer: 'business', explain: 'busy 的名词派生，但意思已转。' },
    ],
    usage: { domains: ['日常', '电话'], tone: '中性', commonConfusion: ['business'] },
  });

  D('busybody', {
    etymology: {
      origin: '英语复合词：busy「忙」+ body「人」。忙的不是自己的事，而是去管别人，所以是爱管闲事的人。',
      prefix: null,
      root: { text: 'body', gloss: '人' },
      suffix: null,
      history: [
        { label: 'busy', text: '不停地忙' },
        { label: 'busybody', text: '专管别人私事的人' },
      ],
      formationLogic: 'body 在复合词里表示「一个人」，不是身体部位。',
      mnemonic: '忙着别人的 body 的事，就是多管闲事。',
      note: '贬义。复数 busybodies。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A busybody next door reported every visitor.', chinese: '隔壁一个爱管闲事的人报告了每一位来客。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'busybody.s1', en: 'Nobody asked the busybody to join the family meeting.', zh: '没有人请那个爱管闲事的人参加家庭会议。', structure: 'the busybody', grammar: '可数名词，指人。', rationale: '贬义人物，不是褒奖勤快。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The hospital needs another busybody to treat patients.', right: 'The hospital needs another doctor to treat patients.', reason: 'busybody 不是忙碌的工作人员，而是多管闲事的人。', rule: '勤快的人用 a hard worker；管闲事用 a busybody。', special: 'mind your own business 就是对 busybody 说的。' },
    ],
    quiz: [
      { id: 'busybody.q1', senseId: 'busybody.s1', errorType: 'meaning', type: '词义', prompt: 'busybody 是：', options: ['爱管闲事的人', '勤劳的医生', '商人'], answer: '爱管闲事的人', explain: '贬义。' },
      { id: 'busybody.q2', senseId: 'busybody.s1', errorType: 'grammar', type: '语法', prompt: '复数是：', options: ['busybodies', 'busybodys', 'busymens'], answer: 'busybodies', explain: 'y 变 ies。' },
      { id: 'busybody.q3', senseId: 'busybody.s1', errorType: 'confusable', type: '易混', prompt: 'body 在这个词里是：', options: ['人', '身体很忙', '尸体'], answer: '人', explain: '复合词里的旧用法。' },
      { id: 'busybody.q4', senseId: 'busybody.s1', errorType: 'context', type: '语境', prompt: '哪句是在批评？', options: ['Stop being a busybody.', 'She is the busiest nurse.', 'He is a calm clerk.'], answer: 'Stop being a busybody.', explain: 'busybody 含贬义。' },
    ],
    usage: { domains: ['日常'], tone: '贬义', commonConfusion: ['hard worker'] },
  });

  D('but', {
    etymology: {
      origin: 'but 在古英语里是 butan，表示「在外面、除了」。后来它主要用来把话锋转开，引出相反的部分。',
      prefix: null,
      root: { text: 'but', gloss: '除了、但是' },
      suffix: null,
      history: [
        { label: 'butan', text: '在外、除去' },
        { label: '现在', text: '连词：但是；介词：除……之外' },
      ],
      formationLogic: '「除了这个」自然变成「但是还有相反的一点」。',
      mnemonic: 'but 后面的信息和前面唱反调，或把一部分排除。',
      note: 'nothing but 是「只有，只不过」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The room is small but bright.', chinese: '房间虽小，但是明亮。' },
    ],
    contexts: [
      { domain: '书面', senseId: 'but.s1', en: 'Everyone was invited but the two witnesses.', zh: '除了两名证人，大家都受到了邀请。', structure: 'everyone ... but', grammar: 'but 在这里是介词，表示除外。', rationale: '连词义和介词义都要认得。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Although it was late, but we stayed.', right: 'Although it was late, we stayed.', reason: 'although 和 but 不要在同一层转折里叠用。', rule: '用 although 就不用 but，用 but 就不用 although。', special: 'not only ... but also 是另一套相关结构。' },
    ],
    quiz: [
      { id: 'but.q1', senseId: 'but.s1', errorType: 'meaning', type: '词义', prompt: 'small but bright 里的 but 是：', options: ['但是', '因为', '在旁边'], answer: '但是', explain: '转折。' },
      { id: 'but.q2', senseId: 'but.s1', errorType: 'grammar', type: '语法', prompt: '哪句正确？', options: ['Although it rained, we left.', 'Although it rained, but we left.', 'But although it rained we.'], answer: 'Although it rained, we left.', explain: 'although 与 but 不叠用。' },
      { id: 'but.q3', senseId: 'but.s1', errorType: 'meaning', type: '词义', prompt: 'nothing but water 是：', options: ['只有水', '完全没有水', '水和别的都很多'], answer: '只有水', explain: '除了水什么都没有。' },
      { id: 'but.q4', senseId: 'but.s1', errorType: 'confusable', type: '易混', prompt: '「在……旁边」更应是：', options: ['by', 'but', 'buy'], answer: 'by', explain: 'but 不是旁边。' },
    ],
    usage: { domains: ['日常', '书面'], tone: '中性', commonConfusion: ['although'] },
  });

  D('butcher', {
    etymology: {
      origin: 'butcher 来自古法语里「宰山羊、卖肉的人」。本义是肉铺师傅，引申后才有「屠杀」这种残酷义。',
      prefix: null,
      root: { text: 'butcher', gloss: '卖肉的人，后指屠杀' },
      suffix: null,
      history: [
        { label: '法语', text: '屠宰并卖肉的人' },
        { label: '现在', text: '屠夫、肉贩；动词可指残杀或把事情做得很糟' },
      ],
      formationLogic: '职业名词可以直接作动词。',
      mnemonic: 'butcher 不是 butter。肉和黄油不要看混。',
      note: 'butcher a speech 是把发言讲砸，不是真的用刀。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The butcher recommended a lean cut of lamb.', chinese: '肉贩推荐了一块瘦羊肉。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'butcher.s1', en: 'The actor butchered the famous speech in the last act.', zh: '这位演员在最后一幕把那段名台词演砸了。', structure: 'butcher + 作品', grammar: '动词，宾语是被弄糟的东西。', rationale: '引申义在评论里很活。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Buy butter at the butcher if you want bread.', right: 'Buy meat at the butcher.', reason: 'butcher 卖肉，黄油是 butter，面包店才卖面包。', rule: 'butcher 肉；butter 黄油。', special: 'the butcher\'s 可以指肉铺。' },
    ],
    quiz: [
      { id: 'butcher.q1', senseId: 'butcher.s1', errorType: 'meaning', type: '词义', prompt: 'a butcher 本职是：', options: ['卖肉的人', '卖黄油的人', '修保险杠的人'], answer: '卖肉的人', explain: '肉贩。' },
      { id: 'butcher.q2', senseId: 'butcher.s1', errorType: 'meaning', type: '词义', prompt: 'butcher a song 是：', options: ['把歌唱砸', '把歌卖给肉铺', '给歌涂黄油'], answer: '把歌唱砸', explain: '引申为弄糟。' },
      { id: 'butcher.q3', senseId: 'butcher.s1', errorType: 'confusable', type: '易混', prompt: '黄油是：', options: ['butter', 'butcher', 'button'], answer: 'butter', explain: '少了 ch 这一截。' },
      { id: 'butcher.q4', senseId: 'butcher.s1', errorType: 'collocation', type: '搭配', prompt: '肉铺可以说：', options: ['the butcher\'s', 'the butter\'s', 'the bustle'], answer: 'the butcher\'s', explain: '店名常用所有格。' },
    ],
    usage: { domains: ['日常', '评论'], tone: '中性或贬义', commonConfusion: ['butter'] },
  });

  D('butt', {
    etymology: {
      origin: 'butt 不止一个来源。粗的一端、烟蒂和臀部走「末端、厚端」这一支；用头撞则来自法语里「推、顶」的动词。看语境，不要合成一个故事。',
      prefix: null,
      root: { text: 'butt', gloss: '末端，或用头顶' },
      suffix: null,
      history: [
        { label: '末端', text: '烟蒂、枪托、屁股' },
        { label: '顶撞', text: '动词：用头或角撞' },
      ],
      formationLogic: '名词多指末端，动词多指撞。',
      mnemonic: 'a cigarette butt 是掐灭后剩下的一截。',
      note: 'butt 作屁股是口语，正式场合用 buttocks 或 bottom。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The goat butted the gate until the latch jumped.', chinese: '山羊用头撞门，直到门闩跳开。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'butt.s1', en: 'Please pick up the cigarette butt beside the bench.', zh: '请把长椅旁的烟蒂捡起来。', structure: 'cigarette butt', grammar: '名词，可数。', rationale: '末端义，不是撞击。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She cut a butter of bread.', right: 'She cut a butt of bread is still odd; the thick end of a loaf is the heel, while a cigarette butt is the stub.', reason: '不要把 butt 写成 butter。烟蒂才是 cigarette butt。', rule: 'butt 末端或顶撞；butter 黄油。', special: '动词 butt 后面可接人：butt somebody。' },
    ],
    quiz: [
      { id: 'butt.q1', senseId: 'butt.s1', errorType: 'meaning', type: '词义', prompt: 'a cigarette butt 是：', options: ['烟蒂', '一块黄油', '一扇门'], answer: '烟蒂', explain: '剩下的那一截。' },
      { id: 'butt.q2', senseId: 'butt.s1', errorType: 'meaning', type: '词义', prompt: 'The ram butted the fence. 是：', options: ['公羊用头撞篱笆', '公羊买下篱笆', '公羊绕过篱笆'], answer: '公羊用头撞篱笆', explain: '动词是顶撞。' },
      { id: 'butt.q3', senseId: 'butt.s1', errorType: 'confusable', type: '易混', prompt: '涂面包的黄色油脂是：', options: ['butter', 'butt', 'button'], answer: 'butter', explain: 'butter 才是黄油。' },
      { id: 'butt.q4', senseId: 'butt.s1', errorType: 'context', type: '语境', prompt: '正式文体里少用 butt 表示：', options: ['屁股', '水桶的塞子', '日历'], answer: '屁股', explain: '这一义太口语。' },
    ],
    usage: { domains: ['日常', '口语'], tone: '口语', commonConfusion: ['butter'] },
  });

  D('butt in', {
    etymology: {
      origin: '短语动词：butt「用头顶进去」+ in「进入」。人没有被邀请，却把脑袋伸进谈话或事情里。',
      prefix: null,
      root: { text: 'butt', gloss: '顶、插' },
      suffix: null,
      history: [
        { label: '顶', text: '山羊用头撞入' },
        { label: 'butt in', text: '插嘴、插手' },
      ],
      formationLogic: 'in 表示闯进正在进行的谈话。',
      mnemonic: '和 burst in 不同：butt in 多指多嘴，不一定是冲进房间。',
      note: 'butt out 是「别插手」，语气很冲。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He butted in before she could finish the question.', chinese: '她还没问完，他就插嘴了。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'butt in.s1', en: 'Please do not butt in when the witness is speaking.', zh: '证人说话时请不要插嘴。', structure: 'butt in', grammar: '不及物短语，后面可用 on a conversation。', rationale: '礼貌问题，不是身体撞击。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Don\'t butt into when I am talking.', right: 'Don\'t butt in when I am talking.', reason: '单独说插嘴是 butt in；若要接谈话，用 butt into the conversation。', rule: 'butt in；butt into something。', special: 'interrupt 比 butt in 正式。' },
    ],
    quiz: [
      { id: 'butt in.q1', senseId: 'butt in.s1', errorType: 'meaning', type: '词义', prompt: 'butt in 是：', options: ['插嘴', '把烟蒂捡走', '涂黄油'], answer: '插嘴', explain: '打断谈话。' },
      { id: 'butt in.q2', senseId: 'butt in.s1', errorType: 'collocation', type: '搭配', prompt: 'She butted _____ our talk.', options: ['into', 'onto', 'of'], answer: 'into', explain: 'butt into something。' },
      { id: 'butt in.q3', senseId: 'butt in.s1', errorType: 'confusable', type: '易混', prompt: '更正式的「打断」是：', options: ['interrupt', 'bury', 'burst out of a pipe'], answer: 'interrupt', explain: 'butt in 偏口语、不礼貌。' },
      { id: 'butt in.q4', senseId: 'butt in.s1', errorType: 'meaning', type: '词义', prompt: 'Butt out! 大致是：', options: ['别插手', '请继续插嘴', '把塞子拔掉'], answer: '别插手', explain: '反义口语。' },
    ],
    usage: { domains: ['日常'], tone: '不礼貌', commonConfusion: ['interrupt'] },
  });

  D('butter', {
    etymology: {
      origin: 'butter 来自古英语，更早是拉丁语和希腊语里「奶油制成的油脂」。它是食物，不是屠夫 butcher。',
      prefix: null,
      root: { text: 'butter', gloss: '黄油' },
      suffix: null,
      history: [
        { label: '乳脂', text: '从奶油搅出来的黄色油脂' },
        { label: '动词', text: '涂黄油；butter somebody up 是奉承' },
      ],
      formationLogic: '名词可作动词，表示在表面涂上。',
      mnemonic: 'bread and butter 既是抹了黄油的面包，也可指生计。',
      note: 'peanut butter 是花生酱，尽管名字里有 butter。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She spread butter on the warm toast.', chinese: '她在热吐司上抹了黄油。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'butter.s1', en: 'He buttered up the client before mentioning the higher fee.', zh: '他先奉承客户，然后才提起更高的费用。', structure: 'butter somebody up', grammar: '短语动词，up 不能丢。', rationale: '习语义比涂抹更常设陷阱。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Stop buttering the boss.', right: 'Stop buttering up the boss.', reason: '奉承必须有 up。没有 up 时，butter 更像真的涂黄油。', rule: 'butter up somebody。', special: 'bread and butter 可作不可数的生计。' },
    ],
    quiz: [
      { id: 'butter.q1', senseId: 'butter.s1', errorType: 'meaning', type: '词义', prompt: 'butter 是：', options: ['黄油', '屠夫', '纽扣'], answer: '黄油', explain: '乳制品。' },
      { id: 'butter.q2', senseId: 'butter.s1', errorType: 'collocation', type: '搭配', prompt: '奉承是 butter somebody _____.', options: ['up', 'in', 'off'], answer: 'up', explain: 'butter up。' },
      { id: 'butter.q3', senseId: 'butter.s1', errorType: 'confusable', type: '易混', prompt: '卖肉的人是：', options: ['a butcher', 'a butter', 'a butt'], answer: 'a butcher', explain: 'butcher 才是人。' },
      { id: 'butter.q4', senseId: 'butter.s1', errorType: 'meaning', type: '词义', prompt: 'know which side your bread is buttered 暗示：', options: ['知道自己的利益在哪', '会做烤面包考试', '讨厌黄油'], answer: '知道自己的利益在哪', explain: '生计形象。' },
    ],
    usage: { domains: ['饮食', '口语'], tone: '中性', commonConfusion: ['butcher'] },
  });

  D('butterfly', {
    etymology: {
      origin: '英语复合词：butter「黄油」+ fly「飞虫」。为什么蝴蝶和黄油连在一起，旧说法很多，没有一条应该当成定论。现在就记这个复合词本身。',
      prefix: null,
      root: { text: 'fly', gloss: '飞的昆虫' },
      suffix: null,
      history: [
        { label: 'butter + fly', text: '古英语里已经这样叫这种昆虫' },
        { label: '现在', text: '蝴蝶；蝶泳；胃里发慌也可说 butterflies' },
      ],
      formationLogic: '两个普通名词合成一个动物名。复数 butterflies。',
      mnemonic: 'have butterflies in one\'s stomach 是紧张，肚子里没有真的蝴蝶。',
      note: 'butterfly stroke 是蝶泳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A yellow butterfly landed on the cabbage leaf.', chinese: '一只黄色蝴蝶落在卷心菜叶上。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'butterfly.s1', en: 'She had butterflies before the oral exam.', zh: '口试前她心里发慌。', structure: 'have butterflies', grammar: '复数，常加 in her stomach，也可省略。', rationale: '习语是高频考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Several butterflys crossed the path.', right: 'Several butterflies crossed the path.', reason: '以 y 结尾要变 ies。', rule: 'butterfly, butterflies。', special: 'a butterfly 才是单数。' },
    ],
    quiz: [
      { id: 'butterfly.q1', senseId: 'butterfly.s1', errorType: 'meaning', type: '词义', prompt: 'butterfly 是：', options: ['蝴蝶', '黄油罐', '苍蝇拍'], answer: '蝴蝶', explain: '复合词已经固定成昆虫。' },
      { id: 'butterfly.q2', senseId: 'butterfly.s1', errorType: 'meaning', type: '词义', prompt: 'butterflies in the stomach 是：', options: ['紧张', '饥饿想吃黄油', '真的生病长虫'], answer: '紧张', explain: '考前那种发慌。' },
      { id: 'butterfly.q3', senseId: 'butterfly.s1', errorType: 'grammar', type: '语法', prompt: '复数：', options: ['butterflies', 'butterflys', 'butterflieses'], answer: 'butterflies', explain: 'y 变 ies。' },
      { id: 'butterfly.q4', senseId: 'butterfly.s1', errorType: 'collocation', type: '搭配', prompt: '蝶泳是 the butterfly _____.', options: ['stroke', 'bus', 'button'], answer: 'stroke', explain: 'butterfly stroke。' },
    ],
    usage: { domains: ['自然', '体育'], tone: '中性', commonConfusion: ['butter'] },
  });

  D('button', {
    etymology: {
      origin: 'button 来自古法语里「芽、圆扣」一类的词，所以本义是一个小圆块。衣服上用来扣住，机器上用来按。',
      prefix: null,
      root: { text: 'button', gloss: '小圆扣、按钮' },
      suffix: null,
      history: [
        { label: '圆块', text: '如芽一样凸起的小件' },
        { label: '现在', text: '纽扣；按钮；动词扣上' },
      ],
      formationLogic: '名词是那个小件，动词是用它扣住。',
      mnemonic: 'button up 是扣上，也可指把话说死、保密。',
      note: 'at the push of a button 是一按按钮。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'One button on the cuff had come loose.', chinese: '袖口有一颗纽扣松了。' },
    ],
    contexts: [
      { domain: '技术', senseId: 'button.s1', en: 'Press the green button and wait for the door to open.', zh: '按下绿色按钮，等门打开。', structure: 'press the button', grammar: '按钮是可数名词。', rationale: '和衣服纽扣同形。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Button your coat up to the cold.', right: 'Button up your coat against the cold.', reason: '扣衣服是 button up，抵御寒冷用 against。', rule: 'button up something。', special: 'a button nose 是小圆鼻子，不是一颗真正的扣子。' },
    ],
    quiz: [
      { id: 'button.q1', senseId: 'button.s1', errorType: 'meaning', type: '词义', prompt: 'press a button 里的 button 是：', options: ['按钮', '黄油', '烟蒂'], answer: '按钮', explain: '按下去的小件。' },
      { id: 'button.q2', senseId: 'button.s1', errorType: 'collocation', type: '搭配', prompt: '扣上外套：_____ your coat', options: ['Button up', 'Butt in', 'Bury'], answer: 'Button up', explain: 'button up。' },
      { id: 'button.q3', senseId: 'button.s1', errorType: 'confusable', type: '易混', prompt: '羊肉贩是：', options: ['butcher', 'button', 'butter'], answer: 'butcher', explain: 'button 不是人。' },
      { id: 'button.q4', senseId: 'button.s1', errorType: 'grammar', type: '语法', prompt: '两颗扣子：', options: ['two buttons', 'two button', 'two buttones'], answer: 'two buttons', explain: '可数。' },
    ],
    usage: { domains: ['日常', '技术'], tone: '中性', commonConfusion: ['button up'] },
  });

  D('buy', {
    etymology: {
      origin: 'buy 是古英语动词，用钱换东西。过去式和过去分词都是 bought，不能写成 buyed。',
      prefix: null,
      root: { text: 'buy', gloss: '购买' },
      suffix: null,
      history: [
        { label: '古英语', text: '购得' },
        { label: '现在', text: '买；a good buy 是划算的货' },
      ],
      formationLogic: '及物动词，商品是宾语，钱用 for 引出。',
      mnemonic: 'buy 对 sell，bought 对 sold。',
      note: 'buy somebody something 是双宾语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They bought the tickets online the night before.', chinese: '他们前一天晚上在网上买了票。' },
    ],
    contexts: [
      { domain: '购物', senseId: 'buy.s1', en: 'I will buy you a map if this one is out of date.', zh: '如果这一张过时了，我给你买一张地图。', structure: 'buy + 人 + 物', grammar: '也可说 buy something for somebody。', rationale: '双宾语是语法考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She buyed a new lamp yesterday.', right: 'She bought a new lamp yesterday.', reason: 'buy 是不规则动词。', rule: 'buy, bought, bought。', special: 'by 是介词，音同但意思完全不同。' },
    ],
    quiz: [
      { id: 'buy.q1', senseId: 'buy.s1', errorType: 'grammar', type: '语法', prompt: 'buy 的过去式：', options: ['bought', 'buyed', 'brought'], answer: 'bought', explain: '不规则。brought 是 bring。' },
      { id: 'buy.q2', senseId: 'buy.s1', errorType: 'collocation', type: '搭配', prompt: 'buy a gift _____ a friend', options: ['for', 'to', 'by'], answer: 'for', explain: 'buy something for somebody。' },
      { id: 'buy.q3', senseId: 'buy.s1', errorType: 'confusable', type: '易混', prompt: '「在旁边、由」是：', options: ['by', 'buy', 'bye'], answer: 'by', explain: '介词 by。' },
      { id: 'buy.q4', senseId: 'buy.s1', errorType: 'meaning', type: '词义', prompt: 'a good buy 是：', options: ['划算的商品', '一次告别', '一个买家的名字'], answer: '划算的商品', explain: '名词化。' },
    ],
    usage: { domains: ['购物'], tone: '中性', commonConfusion: ['by', 'bring'] },
  });

  D('buyer', {
    etymology: {
      origin: '英语派生：buy「买」+ -er「做这件事的人」。可以是一次交易里的买方，也可以是公司里的采购员。',
      prefix: null,
      root: { text: 'buy', gloss: '买' },
      suffix: { text: '-er', gloss: '施事者' },
      history: [
        { label: 'buy', text: '购买' },
        { label: 'buyer', text: '买主、采购' },
      ],
      formationLogic: '动词加人尾。卖的一方是 seller。',
      mnemonic: 'buyer 对 seller，和 employer 对 employee 不是同一套前后缀。',
      note: 'a buyer\'s market 是买方市场，货多价弱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The buyer asked for a written warranty.', chinese: '买方要求书面保修。' },
    ],
    contexts: [
      { domain: '商务', senseId: 'buyer.s1', en: 'Our buyer visits the mills twice a year.', zh: '我们的采购员每年去工厂两次。', structure: 'our buyer', grammar: '可数名词，指职位或交易中的人。', rationale: '公司职务不是随便一个顾客。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The seller is the person who buys.', right: 'The buyer is the person who buys.', reason: '买和卖方向相反。', rule: 'buyer 买；seller 卖。', special: 'buy 的过去式 bought 不能换成 buyer。' },
    ],
    quiz: [
      { id: 'buyer.q1', senseId: 'buyer.s1', errorType: 'meaning', type: '词义', prompt: 'buyer 是：', options: ['买方', '卖方', '商品本身'], answer: '买方', explain: '买的人。' },
      { id: 'buyer.q2', senseId: 'buyer.s1', errorType: 'confusable', type: '易混', prompt: '卖方是：', options: ['seller', 'buyer', 'bursar'], answer: 'seller', explain: 'sell + er。' },
      { id: 'buyer.q3', senseId: 'buyer.s1', errorType: 'meaning', type: '词义', prompt: 'a buyer\'s market 是：', options: ['对买家有利的市场', '只许卖家讲话的市场', '黑市'], answer: '对买家有利的市场', explain: '货多，买家强。' },
      { id: 'buyer.q4', senseId: 'buyer.s1', errorType: 'grammar', type: '语法', prompt: '-er 在这里表示：', options: ['做该动作的人', '最高级', '过去式'], answer: '做该动作的人', explain: 'buy 加 -er。' },
    ],
    usage: { domains: ['商务'], tone: '中性', commonConfusion: ['seller'] },
  });

  D('buzz', {
    etymology: {
      origin: 'buzz 模仿蜜蜂那种持续的低鸣。声音变成名词和动词，后来也指现场的兴奋劲。',
      prefix: null,
      root: { text: 'buzz', gloss: '拟声：嗡嗡' },
      suffix: null,
      history: [
        { label: '拟声', text: '蜜蜂或机器的低响' },
        { label: '引申', text: '热闹的议论和兴奋' },
      ],
      formationLogic: '拟声词可以直接作动词。',
      mnemonic: '两个 z 像声音拖着不绝。',
      note: 'a buzz of conversation 是一片低声交谈。give somebody a buzz 是给某人打个电话，口语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Bees buzzed around the open jam jar.', chinese: '蜜蜂在打开的果酱罐周围嗡嗡叫。' },
    ],
    contexts: [
      { domain: '媒体', senseId: 'buzz.s1', en: 'There was a buzz about the film before anyone had seen it.', zh: '电影还没人看，就已经有一阵议论。', structure: 'a buzz about', grammar: '名词 buzz 常不可数或加 a，表示一阵。', rationale: '兴奋义来自声音。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Give me a buzz to the office by letter.', right: 'Give me a buzz when you reach the office.', reason: 'give somebody a buzz 是打电话，不是写信。', rule: 'buzz 电话或嗡嗡声；letter 才是信。', special: 'buzzer 是蜂鸣器。' },
    ],
    quiz: [
      { id: 'buzz.q1', senseId: 'buzz.s1', errorType: 'meaning', type: '词义', prompt: '蜜蜂的 buzz 是：', options: ['嗡嗡声', '一次购买', '一个纽扣'], answer: '嗡嗡声', explain: '拟声。' },
      { id: 'buzz.q2', senseId: 'buzz.s1', errorType: 'meaning', type: '词义', prompt: 'give me a buzz 口语里是：', options: ['给我打个电话', '给我一只蜜蜂', '让我兴奋到晕'], answer: '给我打个电话', explain: '电话口语。' },
      { id: 'buzz.q3', senseId: 'buzz.s1', errorType: 'confusable', type: '易混', prompt: '蜂鸣器是：', options: ['a buzzer', 'a buyer', 'a bureau'], answer: 'a buzzer', explain: 'buzz 加器具尾。' },
      { id: 'buzz.q4', senseId: 'buzz.s1', errorType: 'grammar', type: '语法', prompt: '过去式：', options: ['buzzed', 'buzz', 'bought'], answer: 'buzzed', explain: '规则动词。' },
    ],
    usage: { domains: ['日常', '媒体'], tone: '中性', commonConfusion: ['buzzer'] },
  });

  D('by', {
    etymology: {
      origin: 'by 是古英语里的「在旁边」。从「靠着」扩展到「经由谁、用什么方法、不迟于某个时间」。',
      prefix: null,
      root: { text: 'by', gloss: '旁边，引申为经由、被、不晚于' },
      suffix: null,
      history: [
        { label: '旁边', text: 'stand by the door' },
        { label: '现在', text: '被动的施事、方式、截止时间' },
      ],
      formationLogic: '同一个介词靠后面的名词决定是地点、手段还是期限。',
      mnemonic: 'by Friday 是不晚于周五，on Friday 是就在周五。',
      note: '被动句里 by 引出施事：written by her。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The note was left by the night guard.', chinese: '条子是夜班警卫留下的。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'by.s1', en: 'Please send the draft by noon, not after lunch.', zh: '请在中午前交草稿，不要午饭以后。', structure: 'by + 时间点', grammar: '期限介词，包含那个时间点之前。', rationale: '和 on、at 的时间区别是考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The book was written from her.', right: 'The book was written by her.', reason: '被动句的施事用 by，不用 from。', rule: 'be done by somebody。', special: 'by bus 是方式，beside 才专指「在旁边」而较少引申。' },
    ],
    quiz: [
      { id: 'by.q1', senseId: 'by.s1', errorType: 'grammar', type: '语法', prompt: '被动施事：The song was written _____ Ada.', options: ['by', 'from', 'of'], answer: 'by', explain: 'be written by。' },
      { id: 'by.q2', senseId: 'by.s1', errorType: 'grammar', type: '语法', prompt: 'by Monday 是：', options: ['不迟于星期一', '必须正好星期一中午以后', '在星期一旁边的人'], answer: '不迟于星期一', explain: '截止。' },
      { id: 'by.q3', senseId: 'by.s1', errorType: 'confusable', type: '易混', prompt: '用钱换货是：', options: ['buy', 'by', 'bye'], answer: 'buy', explain: '动词 buy。' },
      { id: 'by.q4', senseId: 'by.s1', errorType: 'collocation', type: '搭配', prompt: '出行：_____ train', options: ['by', 'on the always without article wrong', 'buy'], answer: 'by', explain: 'by train。' },
    ],
    usage: { domains: ['语法', '日常'], tone: '中性', commonConfusion: ['buy', 'beside'] },
  });

  D('by accident', {
    etymology: {
      origin: '英语短语：by「经由、出于」+ accident「偶然发生的事」。合起来是并非有意，碰巧。',
      prefix: null,
      root: { text: 'accident', gloss: '意外、偶然事件' },
      suffix: null,
      history: [
        { label: 'accident', text: '没有计划到的事' },
        { label: 'by accident', text: '偶然地、意外地' },
      ],
      formationLogic: '介词短语当方式副词用。反义是 on purpose。',
      mnemonic: 'accident 不一定是车祸，by accident 常常只是「不小心」。',
      note: '也可以说 accidentally，但 by accident 更像完整短语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I opened her letter by accident.', chinese: '我无意中拆了她的信。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'by accident.s1', en: 'They met by accident in a queue for tickets.', zh: '他们排队买票时偶然遇见。', structure: 'met by accident', grammar: '短语放在动词后作方式状语。', rationale: '不是交通事故，尽管 accident 也能指事故。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I deleted the file on accident purpose.', right: 'I deleted the file by accident.', reason: '偶然是 by accident，故意是 on purpose，不能焊在一起。', rule: 'by accident = accidentally；on purpose = deliberately。', special: 'by mistake 和 by accident 接近，mistake 更强调弄错。' },
    ],
    quiz: [
      { id: 'by accident.q1', senseId: 'by accident.s1', errorType: 'meaning', type: '词义', prompt: 'by accident 是：', options: ['偶然地', '故意地', '准时地'], answer: '偶然地', explain: '不是有意。' },
      { id: 'by accident.q2', senseId: 'by accident.s1', errorType: 'collocation', type: '搭配', prompt: '反义短语是：', options: ['on purpose', 'by purpose', 'in accident'], answer: 'on purpose', explain: '故意。' },
      { id: 'by accident.q3', senseId: 'by accident.s1', errorType: 'confusable', type: '易混', prompt: '更强调「弄错了」的是：', options: ['by mistake', 'by bus', 'by noon'], answer: 'by mistake', explain: 'mistake 是差错。' },
      { id: 'by accident.q4', senseId: 'by accident.s1', errorType: 'grammar', type: '语法', prompt: '正确介词是：', options: ['by accident', 'on accident in formal writing', 'to accident'], answer: 'by accident', explain: '标准搭配是 by。口语里偶见 on accident，书面用 by。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['on purpose'] },
  });

  D('by way of', {
    etymology: {
      origin: '英语短语：by「经由」+ way「路、方式」+ of。可以是真的经过某地，也可以是「当作某种表示」。',
      prefix: null,
      root: { text: 'way', gloss: '道路或方式' },
      suffix: null,
      history: [
        { label: '路', text: 'by way of Paris：取道巴黎' },
        { label: '方式', text: 'by way of apology：算作道歉' },
      ],
      formationLogic: 'way 的两个旧意思都留在短语里。',
      mnemonic: '后面是地名就是路线；后面是道歉、介绍就是「作为」。',
      note: '不要和 by the way「顺便说」混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We flew home by way of Singapore.', chinese: '我们取道新加坡飞回家。' },
    ],
    contexts: [
      { domain: '书面', senseId: 'by way of.s1', en: 'He sent flowers by way of apology.', zh: '他送花以表歉意。', structure: 'by way of + 名词', grammar: 'of 后面是所充当的那种事物。', rationale: '「作为」这一义比路线更抽象。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'By way of, the train is late.', right: 'By the way, the train is late.', reason: '顺口补充用 by the way。by way of 后面必须接路线或所充当的事物。', rule: 'by way of something；by the way 单独作插入语。', special: 'via 接近路线义。' },
    ],
    quiz: [
      { id: 'by way of.q1', senseId: 'by way of.s1', errorType: 'meaning', type: '词义', prompt: 'fly by way of Dubai 是：', options: ['取道迪拜', '顺便提到迪拜', '避开迪拜'], answer: '取道迪拜', explain: '路线。' },
      { id: 'by way of.q2', senseId: 'by way of.s1', errorType: 'meaning', type: '词义', prompt: 'by way of thanks 是：', options: ['作为感谢', '取道感谢市', '不感谢'], answer: '作为感谢', explain: '充当某种表示。' },
      { id: 'by way of.q3', senseId: 'by way of.s1', errorType: 'confusable', type: '易混', prompt: '「顺便说一句」是：', options: ['by the way', 'by way of', 'by accident'], answer: 'by the way', explain: '插入语。' },
      { id: 'by way of.q4', senseId: 'by way of.s1', errorType: 'collocation', type: '搭配', prompt: 'by way _____ introduction', options: ['of', 'to', 'on'], answer: 'of', explain: 'by way of。' },
    ],
    usage: { domains: ['旅行', '书面'], tone: '中性', commonConfusion: ['by the way'] },
  });

  D('by which', {
    etymology: {
      origin: '英语结构：by「凭借、由此」+ which 回指前面的事物。它引出做到某事的方法或依据，不是疑问句里的 which。',
      prefix: null,
      root: { text: 'which', gloss: '关系代词，回指' },
      suffix: null,
      history: [
        { label: 'which', text: '指代前面的名词或整件事' },
        { label: 'by which', text: '凭借它、由此' },
      ],
      formationLogic: '介词提前到关系代词前面，书面里很常见。',
      mnemonic: '先找 which 指什么，再看 by 是方法还是依据。',
      note: 'the means by which 是「借以……的方法」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This is the code by which the gate opens.', chinese: '这就是开门所用的密码。' },
    ],
    contexts: [
      { domain: '书面', senseId: 'by which.s1', en: 'They described the test by which the water is judged safe.', zh: '他们描述了用来判断水是否安全的那项检验。', structure: 'noun + by which + 从句', grammar: 'which 指前面的 test，by 表示凭借。', rationale: '关系从句，不是提问。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'This is the rule by which does it work?', right: 'This is the rule by which it works.', reason: 'by which 引导的是从句，用陈述语序，不加 does 提前。', rule: 'preposition + which + 主语 + 动词。', special: '口语里也可以说 the rule which it works by，但较松。' },
    ],
    quiz: [
      { id: 'by which.q1', senseId: 'by which.s1', errorType: 'meaning', type: '词义', prompt: 'the means by which 是：', options: ['借以做成的方法', '哪一个方法的提问', '偶然的方法'], answer: '借以做成的方法', explain: '关系结构。' },
      { id: 'by which.q2', senseId: 'by which.s1', errorType: 'grammar', type: '语法', prompt: '正确的是：', options: ['the key by which the door opens', 'the key by which does the door open', 'the key by who the door'], answer: 'the key by which the door opens', explain: '陈述语序，物用 which。' },
      { id: 'by which.q3', senseId: 'by which.s1', errorType: 'confusable', type: '易混', prompt: '人作关系代词更常用：', options: ['who / whom', 'which for a person in this phrase', 'by way'], answer: 'who / whom', explain: 'which 回指事物。' },
      { id: 'by which.q4', senseId: 'by which.s1', errorType: 'grammar', type: '语法', prompt: 'by 在这里表示：', options: ['凭借', '购买', '在星期五'], answer: '凭借', explain: '方法或依据。' },
    ],
    usage: { domains: ['书面'], tone: '正式', commonConfusion: ['which'] },
  });

  D('bye', {
    etymology: {
      origin: 'bye 是 goodbye 的截短。goodbye 本身来自 God be with you，后来和 good night 一类说法混成了告别语。',
      prefix: null,
      root: { text: 'bye', gloss: '再见' },
      suffix: null,
      history: [
        { label: 'God be with you', text: '愿神与你同在' },
        { label: 'bye', text: '口语里缩短的再见' },
      ],
      formationLogic: '截短后可以重叠成 bye-bye，更口语、更对孩子。',
      mnemonic: 'bye 不是 by。一个是告别，一个是介词。',
      note: 'bye for now 是暂别。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She waved and called bye from the platform.', chinese: '她在站台上挥手喊了声再见。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bye.s1', en: 'Bye for now. I will write when the train leaves.', zh: '先再见。火车开了我就写信。', structure: 'Bye for now', grammar: '感叹语，可单独成句。', rationale: '暂别，不是永久分手的法律用语。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Bye the way, the shop is closed.', right: 'By the way, the shop is closed.', reason: '顺便说是 by the way。bye 只用于告别。', rule: 'bye = goodbye；by 是介词。', special: 'buy 是买，三者音近。' },
    ],
    quiz: [
      { id: 'bye.q1', senseId: 'bye.s1', errorType: 'meaning', type: '词义', prompt: 'bye 是：', options: ['再见', '通过', '购买'], answer: '再见', explain: '告别。' },
      { id: 'bye.q2', senseId: 'bye.s1', errorType: 'meaning', type: '词源', prompt: 'goodbye 较早的意思接近：', options: ['愿神与你同在', '买一条路', '在旁边等'], answer: '愿神与你同在', explain: 'God be with you。' },
      { id: 'bye.q3', senseId: 'bye.s1', errorType: 'confusable', type: '易混', prompt: '顺便说一句：', options: ['By the way', 'Bye the way', 'Buy the way'], answer: 'By the way', explain: '介词 by。' },
      { id: 'bye.q4', senseId: 'bye.s1', errorType: 'context', type: '语境', prompt: 'bye-bye 最适合：', options: ['对孩子或很随便的告别', '法律合同的结尾', '被动句施事'], answer: '对孩子或很随便的告别', explain: '重叠后更口语。' },
    ],
    usage: { domains: ['日常'], tone: '口语', commonConfusion: ['by', 'buy'] },
  });

  D('bypass', {
    etymology: {
      origin: '英语复合词：by「从旁边」+ pass「通过」。道路、手术和规则都可以「从旁边绕过去」。',
      prefix: { text: 'by-', gloss: '从旁、绕开' },
      root: { text: 'pass', gloss: '通过' },
      suffix: null,
      history: [
        { label: 'pass', text: '经过' },
        { label: 'bypass', text: '旁路、绕行；心脏搭桥；避开程序' },
      ],
      formationLogic: '介词 by 粘到动词上，变成「不走正中」。',
      mnemonic: '城市 bypass 是绕城路；heart bypass 是给血液另开一条路。',
      note: '动词重音常在后，名词也可在前，考试认拼写即可。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Trucks must use the bypass instead of the market street.', chinese: '卡车必须走绕行路，不能走市场街。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'bypass.s1', en: 'The surgeon performed a bypass to improve blood flow.', zh: '外科医生做了搭桥手术以改善血流。', structure: 'perform a bypass', grammar: '名词，医疗里常可数。', rationale: '和公路是同一个「另开一条路」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They bypassed around the rule.', right: 'They bypassed the rule.', reason: 'bypass 已经含有「绕」，后面直接接被绕开的东西，不再加 around。', rule: 'bypass something。', special: 'go around 才需要 around。' },
    ],
    quiz: [
      { id: 'bypass.q1', senseId: 'bypass.s1', errorType: 'meaning', type: '词义', prompt: 'a road bypass 是：', options: ['绕行路', '主街正中', '车站'], answer: '绕行路', explain: '从旁边过。' },
      { id: 'bypass.q2', senseId: 'bypass.s1', errorType: 'grammar', type: '语法', prompt: '正确的是：', options: ['bypass the rule', 'bypass around the rule', 'bypass to the rule'], answer: 'bypass the rule', explain: '直接接宾语。' },
      { id: 'bypass.q3', senseId: 'bypass.s1', errorType: 'meaning', type: '词义', prompt: 'heart bypass 是：', options: ['心脏搭桥', '心跳停止', '绕城公路的别名'], answer: '心脏搭桥', explain: '给血流另开通道。' },
      { id: 'bypass.q4', senseId: 'bypass.s1', errorType: 'confusable', type: '易混', prompt: 'by 在这里的作用是：', options: ['从旁边', '购买', '再见'], answer: '从旁边', explain: 'by + pass。' },
    ],
    usage: { domains: ['交通', '医学'], tone: '中性', commonConfusion: ['pass'] },
  });

  D('bystander', {
    etymology: {
      origin: '英语复合词：by「在旁边」+ stander「站着的人」。人站在事件旁边，但不参与。',
      prefix: { text: 'by-', gloss: '在旁边' },
      root: { text: 'stand', gloss: '站立' },
      suffix: { text: '-er', gloss: '人' },
      history: [
        { label: 'stand by', text: '站在一旁' },
        { label: 'bystander', text: '旁观者' },
      ],
      formationLogic: '短语 stand by 收成一个指人的名词。',
      mnemonic: 'bystander 看见了，不一定帮忙。innocent bystander 是无辜旁观者。',
      note: 'witness 强调作证，bystander 强调在场未参与。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bystander caught the child before he reached the road.', chinese: '一名旁观者在孩子跑到马路前拉住了他。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bystander.s1', en: 'Police asked bystanders to share any phone video.', zh: '警方请旁观者提供手机录像。', structure: 'bystanders', grammar: '可数，复数加 s。', rationale: '在场但不是当事人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bystander signed the contract as a party.', right: 'The bystander only watched; a party signed the contract.', reason: '旁观者不是合同一方。', rule: 'bystander 旁观；participant / party 参与。', special: 'stand by 作动词短语还可表示支持或待命，和名词不完全一样。' },
    ],
    quiz: [
      { id: 'bystander.q1', senseId: 'bystander.s1', errorType: 'meaning', type: '词义', prompt: 'bystander 是：', options: ['旁观者', '主要被告', '站台'], answer: '旁观者', explain: '在旁边站着的人。' },
      { id: 'bystander.q2', senseId: 'bystander.s1', errorType: 'collocation', type: '搭配', prompt: 'an innocent _____', options: ['bystander', 'bypass', 'buyer'], answer: 'bystander', explain: '无辜旁观者。' },
      { id: 'bystander.q3', senseId: 'bystander.s1', errorType: 'confusable', type: '易混', prompt: '强调能出庭作证的人更常是：', options: ['a witness', 'a bypass', 'a bun'], answer: 'a witness', explain: 'witness 侧重见证。' },
      { id: 'bystander.q4', senseId: 'bystander.s1', errorType: 'grammar', type: '语法', prompt: 'by 在词里表示：', options: ['在旁边', '购买', '截止时间'], answer: '在旁边', explain: 'by + stander。' },
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['witness'] },
  });

  D('byword', {
    etymology: {
      origin: '英语复合词：by「在旁、流传」+ word「话」。一个名字若成了某种品质的代名词，或一句常被引用的话，就叫 byword。',
      prefix: { text: 'by-', gloss: '附带、流传在人们口中' },
      root: { text: 'word', gloss: '词语' },
      suffix: null,
      history: [
        { label: 'word', text: '一句话' },
        { label: 'byword', text: '谚语，或某品质的典型代表' },
      ],
      formationLogic: '不是 bye「再见」加 word。拼写是 byword。',
      mnemonic: 'a byword for quality 是质量的代名词。',
      note: '常接 for：a byword for waste。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The brand became a byword for late delivery.', chinese: '这个品牌成了交货拖延的代名词。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'byword.s1', en: 'In that town, his name is a byword for honesty.', zh: '在那个镇上，他的名字就是诚实的代名词。', structure: 'a byword for + 名词', grammar: 'for 后面是所代表的品质或恶名。', rationale: '评价人物或机构。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The café is a byword of delay.', right: 'The café is a byword for delay.', reason: '固定介词是 for，不是 of。', rule: 'a byword for something。', special: 'proverb 是一般谚语，不一定指某个名字。' },
    ],
    quiz: [
      { id: 'byword.q1', senseId: 'byword.s1', errorType: 'meaning', type: '词义', prompt: 'a byword for luxury 是：', options: ['奢侈的代名词', '一句再见', '一本词典'], answer: '奢侈的代名词', explain: '典型代表。' },
      { id: 'byword.q2', senseId: 'byword.s1', errorType: 'collocation', type: '搭配', prompt: 'a byword _____ waste', options: ['for', 'of', 'to'], answer: 'for', explain: 'byword for。' },
      { id: 'byword.q3', senseId: 'byword.s1', errorType: 'confusable', type: '易混', prompt: '拼写里是：', options: ['byword', 'byeword', 'buyword'], answer: 'byword', explain: '不是告别语 bye。' },
      { id: 'byword.q4', senseId: 'byword.s1', errorType: 'meaning', type: '词义', prompt: 'byword 还可指：', options: ['常被引用的话', '绕城公路', '旁观者'], answer: '常被引用的话', explain: '谚语这一义。' },
    ],
    usage: { domains: ['评论'], tone: '书面', commonConfusion: ['proverb'] },
  });

  D('cab', {
    etymology: {
      origin: 'cab 是 cabriolet 的截短。cabriolet 原是一种轻便马车，后来这种可雇的车变成出租车。卡车的驾驶室也叫 cab。',
      prefix: null,
      root: { text: 'cab', gloss: '从 cabriolet 截短' },
      suffix: null,
      history: [
        { label: 'cabriolet', text: '轻便马车' },
        { label: 'cab', text: '出租车；驾驶室' },
      ],
      formationLogic: '长词只留开头的一截，意思收在可雇佣的车上。',
      mnemonic: 'cab 不是 cabbage。一个载人，一个是菜。',
      note: '英式也说 taxi。take a cab 是打车。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We took a cab because the last train had gone.', chinese: '末班火车走了，我们就打了辆出租车。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'cab.s1', en: 'The driver climbed into the cab of the lorry.', zh: '司机爬进了卡车驾驶室。', structure: 'the cab of the lorry', grammar: '驾驶室义仍是可数名词。', rationale: '和出租车不是同一个物件。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Hail a cabbage if it rains.', right: 'Hail a cab if it rains.', reason: '招手叫的是出租车 cab。', rule: 'cab 出租车或驾驶室；cabbage 卷心菜。', special: 'cab driver 是出租车司机。' },
    ],
    quiz: [
      { id: 'cab.q1', senseId: 'cab.s1', errorType: 'meaning', type: '词义', prompt: 'take a cab 是：', options: ['打出租车', '吃卷心菜', '住小木屋'], answer: '打出租车', explain: '出租车。' },
      { id: 'cab.q2', senseId: 'cab.s1', errorType: 'meaning', type: '词义', prompt: 'the cab of a truck 是：', options: ['驾驶室', '车厢里的货物', '保险杠'], answer: '驾驶室', explain: '司机坐的部分。' },
      { id: 'cab.q3', senseId: 'cab.s1', errorType: 'meaning', type: '词源', prompt: 'cab 截自：', options: ['cabriolet', 'cabbage', 'cabinet'], answer: 'cabriolet', explain: '轻便马车。' },
      { id: 'cab.q4', senseId: 'cab.s1', errorType: 'confusable', type: '易混', prompt: '卷心菜是：', options: ['cabbage', 'cab', 'cabin'], answer: 'cabbage', explain: '不要只看前三个字母。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['taxi'] },
  });

  D('cabbage', {
    etymology: {
      origin: 'cabbage 来自古法语里「头」这个词，因为卷心菜层层叶子包成一个圆头。它不是 cab「出租车」的一种。',
      prefix: null,
      root: { text: 'cabbage', gloss: '圆头状的卷心菜' },
      suffix: null,
      history: [
        { label: '法语头', text: '圆头' },
        { label: '现在', text: '卷心菜、甘蓝' },
      ],
      formationLogic: '外形像头，所以用了「头」的词。',
      mnemonic: 'cabbage 比 cab 长，长出来的是叶子。',
      note: '不可数可指这种菜，一棵可用 a cabbage。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She shredded the cabbage for a cold salad.', chinese: '她把卷心菜切丝，做凉菜。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'cabbage.s1', en: 'Red cabbage stained the cutting board purple.', zh: '紫甘蓝把砧板染成了紫色。', structure: 'red cabbage', grammar: '菜名常不可数。', rationale: '厨房语境锁住蔬菜义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We hailed a cabbage to the airport.', right: 'We hailed a cab to the airport.', reason: '车是 cab，菜是 cabbage。', rule: 'cabbage 蔬菜。', special: 'cab 还可指驾驶室。' },
    ],
    quiz: [
      { id: 'cabbage.q1', senseId: 'cabbage.s1', errorType: 'meaning', type: '词义', prompt: 'cabbage 是：', options: ['卷心菜', '出租车', '小屋'], answer: '卷心菜', explain: '蔬菜。' },
      { id: 'cabbage.q2', senseId: 'cabbage.s1', errorType: 'meaning', type: '词源', prompt: '它和哪个形象有关？', options: ['圆头', '电缆', '日历'], answer: '圆头', explain: '叶子包成头状。' },
      { id: 'cabbage.q3', senseId: 'cabbage.s1', errorType: 'confusable', type: '易混', prompt: '出租车的短词是：', options: ['cab', 'cabbage', 'cabin'], answer: 'cab', explain: 'cabriolet 的截短。' },
      { id: 'cabbage.q4', senseId: 'cabbage.s1', errorType: 'grammar', type: '语法', prompt: '两棵卷心菜：', options: ['two cabbages', 'two cabbage always wrong', 'two cabs of leaves'], answer: 'two cabbages', explain: '一棵一棵数时用复数。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['cab'] },
  });

  D('cabin', {
    etymology: {
      origin: 'cabin 来自古法语里的小屋。英语里它仍是小木屋，也指船或飞机上的舱室。',
      prefix: null,
      root: { text: 'cabin', gloss: '小屋、舱' },
      suffix: null,
      history: [
        { label: '小屋', text: '简陋的小房子' },
        { label: '舱', text: '船舱、机舱' },
      ],
      formationLogic: '都是相对封闭的一小间。',
      mnemonic: 'log cabin 是圆木小屋；cabin crew 是机舱乘务组。',
      note: 'cabinet 是从「小间」再变小或变正式，不要互换。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They rented a cabin beside the lake for a week.', chinese: '他们在湖边租了一间小屋，住一个星期。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'cabin.s1', en: 'The cabin crew asked passengers to fasten their seat belts.', zh: '乘务组请乘客系好安全带。', structure: 'cabin crew', grammar: 'cabin 修饰 crew，指机舱。', rationale: '交通义比小屋更常出现在公告里。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The prime minister chose a new cabin of ministers.', right: 'The prime minister chose a new cabinet.', reason: '内阁是 cabinet，不是 cabin。', rule: 'cabin 小屋或舱；cabinet 橱柜或内阁。', special: 'cabin fever 是困在窄处的烦躁。' },
    ],
    quiz: [
      { id: 'cabin.q1', senseId: 'cabin.s1', errorType: 'meaning', type: '词义', prompt: 'a log cabin 是：', options: ['小木屋', '内阁', '卷心菜'], answer: '小木屋', explain: '小屋。' },
      { id: 'cabin.q2', senseId: 'cabin.s1', errorType: 'collocation', type: '搭配', prompt: '飞机上的 cabin crew 是：', options: ['乘务组', '驾驶室保险杠', '乘客的行李'], answer: '乘务组', explain: '机舱工作人员。' },
      { id: 'cabin.q3', senseId: 'cabin.s1', errorType: 'confusable', type: '易混', prompt: '政府内阁是：', options: ['cabinet', 'cabin', 'cab'], answer: 'cabinet', explain: '多一个 -et。' },
      { id: 'cabin.q4', senseId: 'cabin.s1', errorType: 'meaning', type: '词义', prompt: 'ship\'s cabin 是：', options: ['船舱房间', '船的卷心菜', '船的旁观者'], answer: '船舱房间', explain: '舱室。' },
    ],
    usage: { domains: ['旅行', '居住'], tone: '中性', commonConfusion: ['cabinet'] },
  });

  D('cabinet', {
    etymology: {
      origin: 'cabinet 是 cabin「小间」的小称，先指小房间或带格的柜子，后来特指国王在小房间里议事的那批大臣，也就是内阁。',
      prefix: null,
      root: { text: 'cabin', gloss: '小间' },
      suffix: { text: '-et', gloss: '指小' },
      history: [
        { label: '小间', text: '私密的小房间或珍品柜' },
        { label: '现在', text: '橱柜；政府内阁' },
      ],
      formationLogic: '家具和大臣都来自「在小房间里」这个画面。',
      mnemonic: 'kitchen cabinet 可能是厨房柜子，也可能是亲信幕僚，要看上下文。',
      note: 'Cabinet 作内阁时可大写。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The plates are in the cabinet above the sink.', chinese: '盘子在水槽上方的橱柜里。' },
    ],
    contexts: [
      { domain: '政治', senseId: 'cabinet.s1', en: 'The cabinet met to discuss the rail strike.', zh: '内阁开会讨论铁路罢工。', structure: 'the cabinet met', grammar: '集体名词，英式英语有时用复数动词。', rationale: '政治义不是家具。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She stored the bowls in the cabinet of ministers.', right: 'She stored the bowls in the kitchen cabinet.', reason: '内阁不能放碗。放碗的是家具 cabinet，大臣们是 the cabinet。', rule: '看修饰语：kitchen cabinet 多指柜子；the Cabinet 常指内阁。', special: 'a cabinet minister 是内阁大臣。' },
    ],
    quiz: [
      { id: 'cabinet.q1', senseId: 'cabinet.s1', errorType: 'meaning', type: '词义', prompt: 'a filing cabinet 是：', options: ['文件柜', '内阁会议', '小木屋'], answer: '文件柜', explain: '家具。' },
      { id: 'cabinet.q2', senseId: 'cabinet.s1', errorType: 'meaning', type: '词义', prompt: 'the Cabinet met 里多半是：', options: ['内阁', '一群橱柜', '机舱'], answer: '内阁', explain: '大臣们开会。' },
      { id: 'cabinet.q3', senseId: 'cabinet.s1', errorType: 'confusable', type: '易混', prompt: '湖边的小木屋是：', options: ['a cabin', 'a cabinet', 'a cabbage'], answer: 'a cabin', explain: 'cabin 更大、更像住处。' },
      { id: 'cabinet.q4', senseId: 'cabinet.s1', errorType: 'grammar', type: '语法', prompt: '-et 在这里的感觉是：', options: ['指小', '过去式', '否定'], answer: '指小', explain: '小间、小柜。' },
    ],
    usage: { domains: ['家居', '政治'], tone: '中性', commonConfusion: ['cabin'] },
  });

  D('cable', {
    etymology: {
      origin: 'cable 来自法语里的粗绳。绳子能受力，后来包着的粗电线也叫 cable，再后来用电报线发出的消息也叫 cable。',
      prefix: null,
      root: { text: 'cable', gloss: '粗绳、电缆' },
      suffix: null,
      history: [
        { label: '粗绳', text: '系船或承重的缆' },
        { label: '现在', text: '电缆、有线电视；动词可指发电报' },
      ],
      formationLogic: '从「粗而长的一根」扩到电和消息。',
      mnemonic: 'cable car 是缆车，靠缆绳，不一定有电报。',
      note: 'cable television 常简称 cable。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A steel cable held the footbridge in place.', chinese: '一根钢缆把人行桥固定住。' },
    ],
    contexts: [
      { domain: '通信', senseId: 'cable.s1', en: 'The island received the storm warning by cable.', zh: '岛上通过电报收到了风暴警报。', structure: 'by cable', grammar: '方式状语，这里是电讯不是绳子。', rationale: '旧式通信义仍出现在阅读里。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'She tripped over the television cable car in the living room.', right: 'She tripped over the television cable.', reason: '客厅里的是电缆 cable，cable car 是缆车。', rule: 'cable 缆或电缆；cable car 缆车。', special: '动词 cable somebody 是发电报。' },
    ],
    quiz: [
      { id: 'cable.q1', senseId: 'cable.s1', errorType: 'meaning', type: '词义', prompt: 'a steel cable 是：', options: ['钢缆', '卷心菜', '日历'], answer: '钢缆', explain: '粗绳。' },
      { id: 'cable.q2', senseId: 'cable.s1', errorType: 'meaning', type: '词义', prompt: 'send a cable 旧义是：', options: ['发电报', '寄一根绳子', '取消会议'], answer: '发电报', explain: '电讯。' },
      { id: 'cable.q3', senseId: 'cable.s1', errorType: 'confusable', type: '易混', prompt: '山上的 cable car 是：', options: ['缆车', '有线电视', '驾驶室'], answer: '缆车', explain: '由缆绳牵引。' },
      { id: 'cable.q4', senseId: 'cable.s1', errorType: 'collocation', type: '搭配', prompt: '有线电视可简称：', options: ['cable', 'cab', 'cabinet'], answer: 'cable', explain: 'cable TV。' },
    ],
    usage: { domains: ['工程', '通信'], tone: '中性', commonConfusion: ['cable car'] },
  });

  D('cache', {
    etymology: {
      origin: 'cache 来自法语 cacher「藏起来」。先是藏东西的地方，计算机再用它表示把数据临时存在手边的高速缓存。',
      prefix: null,
      root: { text: 'cache', gloss: '隐藏的存放' },
      suffix: null,
      history: [
        { label: '法语', text: '藏' },
        { label: '现在', text: '藏匿处；计算机缓存' },
      ],
      formationLogic: '藏起来是为了随后很快拿到，计算机义仍是这个逻辑。',
      mnemonic: 'cache 和 cash「现金」只差一个字母，读音也不同，不要混。',
      note: '动词常用 cache，过去式 cached。清空缓存是 clear the cache。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Hikers found a cache of tins under the rocks.', chinese: '徒步者在岩石下发现了一处罐头藏匿点。' },
    ],
    contexts: [
      { domain: '技术', senseId: 'cache.s1', en: 'Clear the browser cache if the old page keeps returning.', zh: '如果旧页面一直出现，就清除浏览器缓存。', structure: 'clear the cache', grammar: '计算机里 cache 常不可数。', rationale: '和藏食物是同一「先存着」的形象。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He paid in cache.', right: 'He paid in cash.', reason: '现金是 cash。cache 是藏匿处或缓存。', rule: 'cache 藏；cash 钱。', special: 'cachet 是声望，更不要混。' },
    ],
    quiz: [
      { id: 'cache.q1', senseId: 'cache.s1', errorType: 'meaning', type: '词义', prompt: 'a cache of food 是：', options: ['藏起来的食物', '一笔现金', '声望'], answer: '藏起来的食物', explain: '藏匿处。' },
      { id: 'cache.q2', senseId: 'cache.s1', errorType: 'meaning', type: '词义', prompt: 'browser cache 是：', options: ['浏览器缓存', '浏览器现金', '浏览器声望'], answer: '浏览器缓存', explain: '临时存的数据。' },
      { id: 'cache.q3', senseId: 'cache.s1', errorType: 'confusable', type: '易混', prompt: '现金是：', options: ['cash', 'cache', 'cachet'], answer: 'cash', explain: '没有末尾的 e 那个藏。' },
      { id: 'cache.q4', senseId: 'cache.s1', errorType: 'collocation', type: '搭配', prompt: '清除缓存：_____ the cache', options: ['clear', 'cash', 'bury the hatchet'], answer: 'clear', explain: 'clear the cache。' },
    ],
    usage: { domains: ['技术', '户外'], tone: '中性', commonConfusion: ['cash', 'cachet'] },
  });

  D('cachet', {
    etymology: {
      origin: 'cachet 是法语「印章」。盖了特别的章，就有了别人没有的标识，所以转指声望、格调。它不是 cache「藏东西」。',
      prefix: null,
      root: { text: 'cachet', gloss: '印章，转指声望' },
      suffix: null,
      history: [
        { label: '法语印章', text: '官方或私人的印记' },
        { label: '现在', text: '因与某事物相连而得到的威信' },
      ],
      formationLogic: '有印记才被认出，于是印记变成了名声。',
      mnemonic: 'cachet 末尾有 t，像一枚盖下去的章。',
      note: '常不可数：a certain cachet。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The prize gave the small press a new cachet.', chinese: '这个奖给这家小出版社带来了新的声望。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'cachet.s1', en: 'Living in the old quarter still carries a certain cachet.', zh: '住在旧城区仍然有几分体面。', structure: 'carry a certain cachet', grammar: 'cachet 抽象，常与 a certain 同用。', rationale: '声望不是一枚可以摸到的章了。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Clear your cachet if the website is slow.', right: 'Clear your cache if the website is slow.', reason: '电脑里要清的是 cache。cachet 是声望，清不掉。', rule: 'cache 缓存；cachet 威信。', special: 'cash 才是现金。' },
    ],
    quiz: [
      { id: 'cachet.q1', senseId: 'cachet.s1', errorType: 'meaning', type: '词义', prompt: 'cachet 是：', options: ['声望', '缓存', '现金'], answer: '声望', explain: '格调、威信。' },
      { id: 'cachet.q2', senseId: 'cachet.s1', errorType: 'confusable', type: '易混', prompt: '浏览器里的临时数据是：', options: ['cache', 'cachet', 'cash'], answer: 'cache', explain: '没有 t。' },
      { id: 'cachet.q3', senseId: 'cachet.s1', errorType: 'meaning', type: '词源', prompt: 'cachet 原先是：', options: ['印章', '藏食物的洞', '出租车'], answer: '印章', explain: '法语印记。' },
      { id: 'cachet.q4', senseId: 'cachet.s1', errorType: 'collocation', type: '搭配', prompt: 'carry a certain _____', options: ['cachet', 'cache', 'cab'], answer: 'cachet', explain: '带有几分声望。' },
    ],
    usage: { domains: ['评论'], tone: '褒义', commonConfusion: ['cache'] },
  });

  D('cadge', {
    etymology: {
      origin: 'cadge 是乞讨或白蹭食物、钱、票。词源不清楚，不要编成某个拉丁词根。它比 ask 更不体面。',
      prefix: null,
      root: { text: 'cadge', gloss: '蹭、乞得' },
      suffix: null,
      history: [
        { label: '口语', text: '向人讨吃的、讨票' },
        { label: '现在', text: '英式口语：cadge something off somebody' },
      ],
      formationLogic: '及物动词，蹭来的东西是宾语。',
      mnemonic: 'cadge 不是 cage。笼子关住，cadge 是伸手要。',
      note: 'on the cadge 是老说法，表示在蹭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He tried to cadge a lift as far as the bridge.', chinese: '他想白蹭一程车，坐到桥那边。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'cadge.s1', en: 'She cadged a cigarette off a stranger outside the hall.', zh: '她在礼堂外向一个陌生人蹭了一支烟。', structure: 'cadge something off somebody', grammar: 'off 或 from 引出被蹭的人。', rationale: '口语动词，带一点脸皮厚。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He cadged a ticket to his friend.', right: 'He cadged a ticket from his friend.', reason: '人是来源，用 from 或 off，不用 to。', rule: 'cadge something off / from somebody。', special: 'cage 是笼子，动词是关进去。' },
    ],
    quiz: [
      { id: 'cadge.q1', senseId: 'cadge.s1', errorType: 'meaning', type: '词义', prompt: 'cadge a meal 是：', options: ['蹭一顿饭', '把饭关进笼子', '计算一顿饭'], answer: '蹭一顿饭', explain: '白要。' },
      { id: 'cadge.q2', senseId: 'cadge.s1', errorType: 'collocation', type: '搭配', prompt: 'cadge a ride _____ a neighbour', options: ['off', 'to', 'into'], answer: 'off', explain: 'off 或 from。' },
      { id: 'cadge.q3', senseId: 'cadge.s1', errorType: 'confusable', type: '易混', prompt: '笼子是：', options: ['cage', 'cadge', 'cache'], answer: 'cage', explain: '没有 d。' },
      { id: 'cadge.q4', senseId: 'cadge.s1', errorType: 'context', type: '语境', prompt: 'cadge 的语气是：', options: ['不太体面的口语', '法律正式罪名', '科学单位'], answer: '不太体面的口语', explain: '乞讨、白蹭。' },
    ],
    usage: { domains: ['口语'], tone: '不体面', commonConfusion: ['cage'] },
  });

  D('cafe', {
    etymology: {
      origin: 'cafe 来自法语 café，本义是咖啡。卖咖啡的小店因此也叫 cafe。英语里常不再写法语的尖音符号。',
      prefix: null,
      root: { text: 'cafe', gloss: '咖啡，转指咖啡馆' },
      suffix: null,
      history: [
        { label: '咖啡', text: '饮料' },
        { label: 'cafe', text: '供应饮料和简餐的小店' },
      ],
      formationLogic: '卖什么，店就叫什么。拼写 café 和 cafe 都可见。',
      mnemonic: 'cafe 比 restaurant 小，比 cafeteria 更像有人服务的咖啡店。',
      note: 'internet cafe 是网吧，仍用「小店」这个壳。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We waited out the rain in a cafe near the museum.', chinese: '我们在博物馆附近的一家咖啡馆里等雨停。' },
    ],
    contexts: [
      { domain: '城市', senseId: 'cafe.s1', en: 'The cafe stops serving meals at three.', zh: '这家小餐馆三点就不再供餐。', structure: 'the cafe stops', grammar: '可数名词，一家店 a cafe。', rationale: '场所，不是那一杯咖啡本身。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'A cafeteria is always a small waiter-service cafe.', right: 'A cafe often has table service; a cafeteria is self-service.', reason: '自助食堂是 cafeteria，不能自动等于 cafe。', rule: 'cafe 小咖啡馆或简餐店；cafeteria 自助。', special: 'coffee 是饮料，cafe 是店。' },
    ],
    quiz: [
      { id: 'cafe.q1', senseId: 'cafe.s1', errorType: 'meaning', type: '词义', prompt: 'cafe 是：', options: ['小咖啡馆', '自助食堂的唯一名称', '咖啡豆的学名'], answer: '小咖啡馆', explain: '场所。' },
      { id: 'cafe.q2', senseId: 'cafe.s1', errorType: 'meaning', type: '词源', prompt: 'café 原本是：', options: ['咖啡', '笼子', '电缆'], answer: '咖啡', explain: '法语饮料名。' },
      { id: 'cafe.q3', senseId: 'cafe.s1', errorType: 'confusable', type: '易混', prompt: '自助选取食物的食堂更应叫：', options: ['a cafeteria', 'a cafe only', 'a calf'], answer: 'a cafeteria', explain: 'self-service。' },
      { id: 'cafe.q4', senseId: 'cafe.s1', errorType: 'grammar', type: '语法', prompt: '两家店：', options: ['two cafes', 'two cafe', 'two cafes\'s'], answer: 'two cafes', explain: '可数。也作 cafés。' },
    ],
    usage: { domains: ['城市'], tone: '中性', commonConfusion: ['cafeteria', 'coffee'] },
  });

  D('cafeteria', {
    etymology: {
      origin: 'cafeteria 来自美洲西班牙语：café「咖啡」加上表示店铺的 -tería。特点是顾客自己取餐，不是服务员全程端上。',
      prefix: null,
      root: { text: 'cafe', gloss: '咖啡、餐饮' },
      suffix: { text: '-teria', gloss: '自助式店铺' },
      history: [
        { label: 'café', text: '咖啡' },
        { label: 'cafeteria', text: '自助餐厅、食堂' },
      ],
      formationLogic: '店后缀标出经营方式：自己拿托盘。',
      mnemonic: '看见 -teria 就想到自选，如后来的类似店名。',
      note: '学校食堂用 cafeteria 很常见。复数 cafeterias。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Students queued in the cafeteria with plastic trays.', chinese: '学生们端着塑料托盘在食堂排队。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'cafeteria.s1', en: 'The cafeteria closes early on Fridays.', zh: '食堂星期五提早关门。', structure: 'the cafeteria', grammar: '可数场所名词。', rationale: '自助是定义的一部分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'At a cafeteria you must wait for a waiter to bring every dish.', right: 'At a cafeteria you usually carry your own tray.', reason: '自助餐厅的要点就是自己取。', rule: 'cafeteria 自助；有桌边服务的小店更接近 cafe。', special: 'canteen 在英式英语里也可指食堂。' },
    ],
    quiz: [
      { id: 'cafeteria.q1', senseId: 'cafeteria.s1', errorType: 'meaning', type: '词义', prompt: 'cafeteria 强调：', options: ['自助取餐', '只有咖啡没有座位', '法式全套服务员'], answer: '自助取餐', explain: '托盘自己端。' },
      { id: 'cafeteria.q2', senseId: 'cafeteria.s1', errorType: 'confusable', type: '易混', prompt: '街角卖咖啡的小店更常是：', options: ['a cafe', 'a calf', 'a cable'], answer: 'a cafe', explain: 'cafe 更小、更偏咖啡。' },
      { id: 'cafeteria.q3', senseId: 'cafeteria.s1', errorType: 'meaning', type: '词源', prompt: '-tería 一类尾巴表示：', options: ['某种店铺', '过去式', '否定'], answer: '某种店铺', explain: '店名后缀。' },
      { id: 'cafeteria.q4', senseId: 'cafeteria.s1', errorType: 'grammar', type: '语法', prompt: '两间食堂：', options: ['two cafeterias', 'two cafeteria', 'two cafeteries'], answer: 'two cafeterias', explain: '直接加 s。' },
    ],
    usage: { domains: ['校园'], tone: '中性', commonConfusion: ['cafe'] },
  });

  D('cage', {
    etymology: {
      origin: 'cage 来自法语，更早和拉丁语里「中空的罩、兽笼」有关。核心是用栅栏把活物关住的那个箱子。',
      prefix: null,
      root: { text: 'cage', gloss: '笼子' },
      suffix: null,
      history: [
        { label: '罩子', text: '关鸟兽的格子箱' },
        { label: '动词', text: '把……关进笼子' },
      ],
      formationLogic: '名词可以直接作动词。',
      mnemonic: 'cage 不是 cadge。一个关住，一个伸手蹭。',
      note: 'rib cage 是胸廓，骨头围成的「笼」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The parrot rattled the bars of its cage.', chinese: '鹦鹉晃得笼子的铁条直响。' },
    ],
    contexts: [
      { domain: '动物', senseId: 'cage.s1', en: 'Keep the door latched or the rabbit will leave the cage.', zh: '把门闩好，不然兔子会跑出笼子。', structure: 'leave the cage', grammar: '可数名词。', rationale: '具体容器。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They caged the bird out of the box.', right: 'They caged the bird.', reason: 'cage 作动词已经是关进去，不要再加 out of。', rule: 'cage somebody / an animal；in a cage 表示状态。', special: 'rib cage 不是真的铁笼。' },
    ],
    quiz: [
      { id: 'cage.q1', senseId: 'cage.s1', errorType: 'meaning', type: '词义', prompt: 'a bird cage 是：', options: ['鸟笼', '鸟蹭来的食物', '鸟的缓存'], answer: '鸟笼', explain: '关鸟的箱子。' },
      { id: 'cage.q2', senseId: 'cage.s1', errorType: 'confusable', type: '易混', prompt: '白蹭一张票是：', options: ['cadge', 'cage', 'cache'], answer: 'cadge', explain: '多一个 d。' },
      { id: 'cage.q3', senseId: 'cage.s1', errorType: 'meaning', type: '词义', prompt: 'the rib cage 是：', options: ['胸廓', '肋骨做的宠物笼', '一层肋骨缓存'], answer: '胸廓', explain: '解剖学术语，取笼状形象。' },
      { id: 'cage.q4', senseId: 'cage.s1', errorType: 'grammar', type: '语法', prompt: '动词「关进笼」：', options: ['cage the animal', 'cadge the animal', 'cage out the animal'], answer: 'cage the animal', explain: '直接接宾语。' },
    ],
    usage: { domains: ['动物', '日常'], tone: '中性', commonConfusion: ['cadge'] },
  });

  D('cake', {
    etymology: {
      origin: 'cake 来自古诺斯语里的「饼、扁圆的烤块」。英语里它主要是甜蛋糕，也可指任何结成饼状的一块。',
      prefix: null,
      root: { text: 'cake', gloss: '饼状物' },
      suffix: null,
      history: [
        { label: '烤块', text: '扁圆的面食' },
        { label: '现在', text: '蛋糕；cake of soap 一块肥皂；动词是结块' },
      ],
      formationLogic: '形状是核心，甜味是后来的主要用法。',
      mnemonic: 'a piece of cake 是轻松的事，不是真的分蛋糕。',
      note: 'sell like hot cakes 是卖得很快。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The birthday cake slid a little in the warm car.', chinese: '生日蛋糕在暖和的车里稍稍滑了一下。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'cake.s1', en: 'Once you know the path, the climb is a piece of cake.', zh: '一旦认识路，这段攀爬就很容易。', structure: 'a piece of cake', grammar: '习语作表语。', rationale: '不是食物的分量。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The exam was a piece of cake, so nobody could finish it.', right: 'The exam was a piece of cake, so most people finished early.', reason: 'a piece of cake 表示容易，不是表示难到吃不完。', rule: '容易用 a piece of cake；真的蛋糕用 a piece of the cake 要看语境。', special: 'have your cake and eat it 是两头都想占。' },
    ],
    quiz: [
      { id: 'cake.q1', senseId: 'cake.s1', errorType: 'meaning', type: '词义', prompt: 'a piece of cake 常指：', options: ['很容易的事', '很难的事', '一块真正必须分享的肥皂'], answer: '很容易的事', explain: '习语。' },
      { id: 'cake.q2', senseId: 'cake.s1', errorType: 'meaning', type: '词义', prompt: 'a cake of soap 是：', options: ['一块肥皂', '肥皂味蛋糕', '生日派对'], answer: '一块肥皂', explain: '饼状物。' },
      { id: 'cake.q3', senseId: 'cake.s1', errorType: 'collocation', type: '搭配', prompt: 'sell like hot _____', options: ['cakes', 'cachets', 'cages'], answer: 'cakes', explain: '卖得很快。' },
      { id: 'cake.q4', senseId: 'cake.s1', errorType: 'confusable', type: '易混', prompt: '结块的动词可以是：', options: ['cake', 'cadge', 'call off'], answer: 'cake', explain: 'mud caked on the boots。' },
    ],
    usage: { domains: ['饮食', '口语'], tone: '中性', commonConfusion: ['piece of cake'] },
  });

  D('calamity', {
    etymology: {
      origin: 'calamity 来自拉丁语 calamitas，指大祸。再往前的词源有争议，不要记成某一种植物或石头。考试只需要「严重灾祸」。',
      prefix: null,
      root: { text: 'calamity', gloss: '大灾难' },
      suffix: null,
      history: [
        { label: '拉丁语', text: '损害、灾祸' },
        { label: '现在', text: '造成巨大痛苦的事件' },
      ],
      formationLogic: '比 accident 重。accident 可以只是意外，calamity 是大难。',
      mnemonic: 'calamity 里有一个长长的灾难感，不是 calendar 上的普通一天。',
      note: '形容词 calamitous。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The flood was a calamity for the valley farms.', chinese: '这场洪水对河谷里的农场是一场大难。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'calamity.s1', en: 'Engineers called the dam failure a national calamity.', zh: '工程师称大坝溃决是一场全国性灾难。', structure: 'a national calamity', grammar: '可数名词，一次大祸 a calamity。', rationale: '程度远超普通事故。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Missing the bus was a calamity, so she caught the next one.', right: 'Missing the bus was a nuisance, not a calamity.', reason: '误车可以补救，配不上 calamity 的分量。', rule: 'calamity 大灾；小不便用 nuisance、mishap。', special: 'disaster 是近义词。' },
    ],
    quiz: [
      { id: 'calamity.q1', senseId: 'calamity.s1', errorType: 'meaning', type: '词义', prompt: 'calamity 最接近：', options: ['大灾难', '日历', '小麻烦'], answer: '大灾难', explain: '严重祸患。' },
      { id: 'calamity.q2', senseId: 'calamity.s1', errorType: 'confusable', type: '易混', prompt: '日期表是：', options: ['calendar', 'calamity', 'calcium'], answer: 'calendar', explain: '不要看前几个字母就停。' },
      { id: 'calamity.q3', senseId: 'calamity.s1', errorType: 'meaning', type: '词义', prompt: '哪件事配得上 calamity？', options: ['地震摧毁城镇', '铅笔掉到地上', '公共汽车晚两分钟'], answer: '地震摧毁城镇', explain: '必须是大祸。' },
      { id: 'calamity.q4', senseId: 'calamity.s1', errorType: 'grammar', type: '语法', prompt: '形容词是：', options: ['calamitous', 'calamityful', 'calamited'], answer: 'calamitous', explain: '常见派生。' },
    ],
    usage: { domains: ['新闻'], tone: '严重', commonConfusion: ['accident', 'calendar'] },
  });

  D('calcium', {
    etymology: {
      origin: 'calcium 是化学命名：拉丁语 calx「石灰」加上金属元素常用的 -ium。它就是骨头、牙齿和石灰里那类钙。',
      prefix: null,
      root: { text: 'calc-', gloss: '石灰' },
      suffix: { text: '-ium', gloss: '元素名尾' },
      history: [
        { label: 'calx', text: '石灰' },
        { label: 'calcium', text: '元素钙' },
      ],
      formationLogic: '和 calculate 的「小石子」都跟石灰、石头有关，但一个是元素，一个是计算。',
      mnemonic: '钙片包装上的 Ca 就是 calcium。',
      note: '不可数。calcium in bones 是骨头里的钙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Milk is one common source of calcium.', chinese: '牛奶是钙的一个常见来源。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'calcium.s1', en: 'The doctor added calcium to her diet after the scan.', zh: '扫描之后医生让她在饮食里补充钙。', structure: 'add calcium', grammar: '不可数名词，不加 a。', rationale: '营养素，不是一次计算。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She needs a calcium every morning.', right: 'She needs calcium every morning.', reason: '元素名不可数。若说一片药，用 a calcium tablet。', rule: 'calcium 不可数；tablet / supplement 才可数。', special: '不要和 calendar 混。' },
    ],
    quiz: [
      { id: 'calcium.q1', senseId: 'calcium.s1', errorType: 'meaning', type: '词义', prompt: 'calcium 是：', options: ['钙', '日历', '计算过程'], answer: '钙', explain: '元素。' },
      { id: 'calcium.q2', senseId: 'calcium.s1', errorType: 'grammar', type: '语法', prompt: '哪句自然？', options: ['Bones store calcium.', 'Bones store a calciums.', 'Bones store calciumly.'], answer: 'Bones store calcium.', explain: '不可数。' },
      { id: 'calcium.q3', senseId: 'calcium.s1', errorType: 'meaning', type: '词源', prompt: 'calc- 和什么有关？', options: ['石灰', '热量单位', '呼唤'], answer: '石灰', explain: 'calx。' },
      { id: 'calcium.q4', senseId: 'calcium.s1', errorType: 'confusable', type: '易混', prompt: '用石子计数发展来的动词是：', options: ['calculate', 'calendar', 'call off'], answer: 'calculate', explain: 'calculus 小石子。' },
    ],
    usage: { domains: ['科学', '健康'], tone: '中性', commonConfusion: ['calculate'] },
  });

  D('calculate', {
    etymology: {
      origin: 'calculate 来自拉丁语 calculus「小石子」。罗马人用石子计数，所以这个动词是算出来，也可谨慎地估计。',
      prefix: null,
      root: { text: 'calcul-', gloss: '计数的石子' },
      suffix: { text: '-ate', gloss: '动词' },
      history: [
        { label: 'calculus', text: '小石子，计数用' },
        { label: 'calculate', text: '计算、估计' },
      ],
      formationLogic: '石子一颗颗挪，就是在算。',
      mnemonic: 'calculator 是计算器，仍是这个词干。',
      note: 'be calculated to do 是有意要造成某种效果。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Calculate the area before you buy the paint.', chinese: '买油漆之前先把面积算出来。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'calculate.s1', en: 'The students calculated the average to one decimal place.', zh: '学生们把平均数算到一位小数。', structure: 'calculate + 数字结果', grammar: '及物动词。', rationale: '数学义是核心。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She calculated the train of leaving early.', right: 'She calculated that the train would leave early is odd; better: She calculated the cost of leaving early.', reason: 'calculate 后面跟数字、费用或 that 从句，不跟 the train of 这种拼法。', rule: 'calculate something；calculate that...。', special: 'estimate 更强调大概估计。' },
    ],
    quiz: [
      { id: 'calculate.q1', senseId: 'calculate.s1', errorType: 'meaning', type: '词义', prompt: 'calculate 是：', options: ['计算', '钙', '呼唤'], answer: '计算', explain: '算出数目。' },
      { id: 'calculate.q2', senseId: 'calculate.s1', errorType: 'meaning', type: '词源', prompt: 'calculus 原是：', options: ['小石子', '石灰灯', '日历的第一天'], answer: '小石子', explain: '用来计数。' },
      { id: 'calculate.q3', senseId: 'calculate.s1', errorType: 'grammar', type: '语法', prompt: '名词是：', options: ['calculation', 'calculatment', 'calcium'], answer: 'calculation', explain: '-ion 名词。' },
      { id: 'calculate.q4', senseId: 'calculate.s1', errorType: 'confusable', type: '易混', prompt: '骨头里的元素是：', options: ['calcium', 'calculate', 'calendar'], answer: 'calcium', explain: '元素钙。' },
    ],
    usage: { domains: ['学习', '工作'], tone: '中性', commonConfusion: ['estimate'] },
  });

  D('calculation', {
    etymology: {
      origin: '英语派生：calculate「计算」去掉动词尾，加上 -ion，变成计算这件事或算出来的结果。',
      prefix: null,
      root: { text: 'calculat-', gloss: '计算' },
      suffix: { text: '-ion', gloss: '行为或结果名词' },
      history: [
        { label: 'calculate', text: '算' },
        { label: 'calculation', text: '计算、估算；也可指盘算' },
      ],
      formationLogic: '动词变名词。一次运算 a calculation。',
      mnemonic: 'my calculation is wrong 是我算错了，不一定是人品错了。',
      note: 'cold calculation 是冷静甚至冷酷的盘算。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'One wrong figure spoiled the whole calculation.', chinese: '一个错误数字毁了整道计算。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'calculation.s1', en: 'By her calculation, the paint will cover two rooms.', zh: '按她的估算，这些油漆够刷两个房间。', structure: 'by one\'s calculation', grammar: 'by 表示依据。', rationale: '结果义，不一定在课堂上。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The calculate is wrong.', right: 'The calculation is wrong.', reason: '主语位置要用名词。', rule: 'calculation 名词；calculate 动词。', special: '复数 calculations 是多次计算。' },
    ],
    quiz: [
      { id: 'calculation.q1', senseId: 'calculation.s1', errorType: 'meaning', type: '词义', prompt: 'calculation 是：', options: ['计算或估算', '钙片', '日历'], answer: '计算或估算', explain: '名词。' },
      { id: 'calculation.q2', senseId: 'calculation.s1', errorType: 'grammar', type: '语法', prompt: '动词形式是：', options: ['calculate', 'calculation', 'calcium'], answer: 'calculate', explain: '名词才带 -ion。' },
      { id: 'calculation.q3', senseId: 'calculation.s1', errorType: 'collocation', type: '搭配', prompt: 'by my _____', options: ['calculation', 'calculate', 'calf'], answer: 'calculation', explain: '依据我的计算。' },
      { id: 'calculation.q4', senseId: 'calculation.s1', errorType: 'meaning', type: '词义', prompt: 'cold calculation 偏向：', options: ['冷静的盘算', '冰冷的石头', '错误的日历'], answer: '冷静的盘算', explain: '不只是算术，也是算计。' },
    ],
    usage: { domains: ['工作', '学习'], tone: '中性', commonConfusion: ['calculate'] },
  });

  D('calendar', {
    etymology: {
      origin: 'calendar 来自拉丁语 calendae，罗马月的第一天，也是宣布日期、结账的日子。所以它是安排日子的表，不是灾难 calamity。',
      prefix: null,
      root: { text: 'calendar', gloss: '历、日程' },
      suffix: null,
      history: [
        { label: 'calendae', text: '每月开始的那一天' },
        { label: 'calendar', text: '日历、历法、日程表' },
      ],
      formationLogic: '从「宣布这一天」变成整张日子的表。',
      mnemonic: 'calendar 有两个 a，中间是 e。calender 若少一个 a，可能是别的词。',
      note: 'a calendar of events 是活动日程。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She circled the exam date on the kitchen calendar.', chinese: '她在厨房日历上把考试日期圈了出来。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'calendar.s1', en: 'The conference is not on my calendar for May.', zh: '这场会议不在我五月的日程上。', structure: 'on one\'s calendar', grammar: '在日程上用 on。', rationale: '可以是纸质日历，也可以是电子日程。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The earthquake was a terrible calendar.', right: 'The earthquake was a terrible calamity.', reason: '大祸是 calamity。calendar 只管日期。', rule: 'calendar 日历；calamity 灾难。', special: 'lunar calendar 是阴历。' },
    ],
    quiz: [
      { id: 'calendar.q1', senseId: 'calendar.s1', errorType: 'meaning', type: '词义', prompt: 'calendar 是：', options: ['日历', '大灾难', '钙'], answer: '日历', explain: '日子的表。' },
      { id: 'calendar.q2', senseId: 'calendar.s1', errorType: 'collocation', type: '搭配', prompt: 'mark a date _____ the calendar', options: ['on', 'by accident', 'of'], answer: 'on', explain: 'on the calendar。' },
      { id: 'calendar.q3', senseId: 'calendar.s1', errorType: 'confusable', type: '易混', prompt: '洪水这种大祸叫：', options: ['a calamity', 'a calendar', 'a calf'], answer: 'a calamity', explain: '灾难。' },
      { id: 'calendar.q4', senseId: 'calendar.s1', errorType: 'meaning', type: '词源', prompt: 'calendae 是：', options: ['罗马月的第一天', '小石子', '石灰'], answer: '罗马月的第一天', explain: '宣布日期的日子。' },
    ],
    usage: { domains: ['日常', '工作'], tone: '中性', commonConfusion: ['calamity'] },
  });

  D('calf', {
    etymology: {
      origin: 'calf 有两个常用义，来源并不相同。小牛是古英语里的幼畜；腿肚子来自北欧语里小腿后侧那一块。不要合成一个词根。',
      prefix: null,
      root: { text: 'calf', gloss: '小牛，或腿肚' },
      suffix: null,
      history: [
        { label: '幼畜', text: '小牛，也可指象、鲸等的幼崽' },
        { label: '腿', text: '小腿后面的 calf muscle' },
      ],
      formationLogic: '复数都是 calves，像 half, halves。',
      mnemonic: '看到 farm 想小牛，看到 muscle 想腿肚。',
      note: 'calves 不要写成 calfs。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The calf stayed close to the cow in the barn.', chinese: '小牛在牛棚里紧挨着母牛。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'calf.s1', en: 'The runner felt a pull in her left calf.', zh: '这名跑者感到左腿肚子拉了一下。', structure: 'in her calf', grammar: '身体部位，常用物主代词。', rationale: '和农场义必须靠语境分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Two calfs were born in the night.', right: 'Two calves were born in the night.', reason: 'f 结尾的这个名词复数变 ves。', rule: 'calf, calves。', special: '腿肚的复数同样是 calves。' },
    ],
    quiz: [
      { id: 'calf.q1', senseId: 'calf.s1', errorType: 'meaning', type: '词义', prompt: '农场里的 calf 是：', options: ['小牛', '日历', '小腿的骨头学名只有一个'], answer: '小牛', explain: '幼畜。' },
      { id: 'calf.q2', senseId: 'calf.s1', errorType: 'meaning', type: '词义', prompt: 'calf muscle 是：', options: ['小腿肚肌肉', '小牛的全部肌肉课', '钙'], answer: '小腿肚肌肉', explain: '腿后侧。' },
      { id: 'calf.q3', senseId: 'calf.s1', errorType: 'grammar', type: '语法', prompt: '复数是：', options: ['calves', 'calfs', 'calveses'], answer: 'calves', explain: 'f 变 ves。' },
      { id: 'calf.q4', senseId: 'calf.s1', errorType: 'confusable', type: '易混', prompt: '和 cafe 的差别是：', options: ['calf 是动物或腿，cafe 是店', '两者都是咖啡', '两者都是小牛'], answer: 'calf 是动物或腿，cafe 是店', explain: '不要漏看字母。' },
    ],
    usage: { domains: ['农场', '身体'], tone: '中性', commonConfusion: ['cafe'] },
  });

  D('call', {
    etymology: {
      origin: 'call 与古英语和古诺斯语里「大声喊」有关。先是喊出来，再变成称呼、打电话和短暂拜访。',
      prefix: null,
      root: { text: 'call', gloss: '喊、呼叫' },
      suffix: null,
      history: [
        { label: '喊', text: '提高声音叫人' },
        { label: '现在', text: '打电话、称作、拜访；名词是一次通话' },
      ],
      formationLogic: '喊的对象不同，就变成电话或点名。',
      mnemonic: 'call somebody names 是辱骂，不是给人家起一个可爱外号那么简单。',
      note: 'a close call 是差一点出事。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Call me when the results are posted.', chinese: '结果公布后给我打电话。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'call.s1', en: 'They called the new bridge a waste of money.', zh: '他们把这座新桥称作浪费钱。', structure: 'call + 宾语 + 补语', grammar: '称作某物时，补语前不加 as。', rationale: '「称呼」义和电话义都高频。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'We call him as captain.', right: 'We call him captain.', reason: 'call 表示称呼时，直接加补语，不加 as。', rule: 'call somebody something。', special: 'describe him as captain 才用 as。' },
    ],
    quiz: [
      { id: 'call.q1', senseId: 'call.s1', errorType: 'grammar', type: '语法', prompt: '我们叫她队长：', options: ['We call her captain.', 'We call her as captain.', 'We call as her captain.'], answer: 'We call her captain.', explain: '不加 as。' },
      { id: 'call.q2', senseId: 'call.s1', errorType: 'meaning', type: '词义', prompt: 'give somebody a call 是：', options: ['打个电话', '起个绰号骂人', '取消访问'], answer: '打个电话', explain: '名词 call。' },
      { id: 'call.q3', senseId: 'call.s1', errorType: 'confusable', type: '易混', prompt: 'call somebody names 是：', options: ['辱骂', '礼貌地介绍姓名', '打电话问名字'], answer: '辱骂', explain: '固定恶义。' },
      { id: 'call.q4', senseId: 'call.s1', errorType: 'collocation', type: '搭配', prompt: 'a close call 是：', options: ['千钧一发', '很亲近的电话', '关门的号召'], answer: '千钧一发', explain: '差一点。' },
    ],
    usage: { domains: ['日常', '电话'], tone: '中性', commonConfusion: ['describe as'] },
  });

  D('call back', {
    etymology: {
      origin: '短语动词：call「打电话、召唤」+ back「返回」。所以是回电话，或把人、产品召回来。',
      prefix: null,
      root: { text: 'call', gloss: '呼叫' },
      suffix: null,
      history: [
        { label: 'call', text: '呼叫' },
        { label: 'call back', text: '再打回去；召回' },
      ],
      formationLogic: 'back 表示回到原来的一方。',
      mnemonic: 'call back 不是 call black，也不是把电话取消。取消是 call off。',
      note: '宾语可放在中间：call her back。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I missed the nurse and will call back after lunch.', chinese: '我没接到护士的电话，午饭后再打回去。' },
    ],
    contexts: [
      { domain: '商务', senseId: 'call back.s1', en: 'The maker called back the toys because a wheel could fall off.', zh: '制造商召回了那些玩具，因为轮子可能脱落。', structure: 'call back + 产品', grammar: '召回时产品是宾语。', rationale: '和回电话共用 back「回来」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Please call me again back later is redundant and odd.', right: 'Please call me back later.', reason: 'back 已经表示再打过来，不必再堆 again 把词序弄乱。', rule: 'call somebody back。', special: 'recall 是更正式的「召回、回忆」。' },
    ],
    quiz: [
      { id: 'call back.q1', senseId: 'call back.s1', errorType: 'meaning', type: '词义', prompt: 'call somebody back 常是：', options: ['回电话', '取消约定', '当面拜访'], answer: '回电话', explain: '把电话打回去。' },
      { id: 'call back.q2', senseId: 'call back.s1', errorType: 'meaning', type: '词义', prompt: 'call back a product 是：', options: ['召回产品', '给产品打电话聊天', '把产品涂成黑色'], answer: '召回产品', explain: '收回有问题的货。' },
      { id: 'call back.q3', senseId: 'call back.s1', errorType: 'grammar', type: '语法', prompt: '宾语位置自然的是：', options: ['call her back', 'call back she', 'back call her'], answer: 'call her back', explain: '代词放在中间。' },
      { id: 'call back.q4', senseId: 'call back.s1', errorType: 'confusable', type: '易混', prompt: '取消会议是：', options: ['call off', 'call back', 'call on'], answer: 'call off', explain: 'off 才是取消。' },
    ],
    usage: { domains: ['电话', '商务'], tone: '中性', commonConfusion: ['call off'] },
  });

  D('call for', {
    etymology: {
      origin: '短语动词：call「呼唤」+ for「为了得到」。可以是去接某人，也可以是形势要求某样东西。',
      prefix: null,
      root: { text: 'call', gloss: '呼唤' },
      suffix: null,
      history: [
        { label: '呼唤', text: '为某事而呼' },
        { label: 'call for', text: '需要；去接' },
      ],
      formationLogic: 'for 后面是被需要或被接的对象。',
      mnemonic: 'The job calls for patience. 工作本身在「要」耐心。',
      note: '和 call on 不同：call for 更偏需要或迎接。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This repair calls for a smaller screwdriver.', chinese: '这项修理需要一把更小的螺丝刀。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'call for.s1', en: 'I will call for you at seven and we can walk together.', zh: '我七点来接你，然后我们可以一起走。', structure: 'call for somebody', grammar: '接人时人是宾语。', rationale: '和生活里的「顺路来接」对应。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The crisis called for the meeting, meaning the meeting was cancelled.', right: 'The crisis called for a meeting, so they held one.', reason: 'call for 是需要，不是取消。', rule: 'call for 需要或去接；call off 取消。', special: 'uncalled-for 是不恰当、多余的。' },
    ],
    quiz: [
      { id: 'call for.q1', senseId: 'call for.s1', errorType: 'meaning', type: '词义', prompt: 'The post calls for care. 是：', options: ['这个职位需要细心', '这个职位被取消了', '有人来接细心'], answer: '这个职位需要细心', explain: '需要。' },
      { id: 'call for.q2', senseId: 'call for.s1', errorType: 'meaning', type: '词义', prompt: 'I will call for you at six. 是：', options: ['我六点来接你', '我六点打电话骂你', '我六点取消你'], answer: '我六点来接你', explain: '去接。' },
      { id: 'call for.q3', senseId: 'call for.s1', errorType: 'confusable', type: '易混', prompt: '取消用：', options: ['call off', 'call for', 'call back only'], answer: 'call off', explain: 'off 才取消。' },
      { id: 'call for.q4', senseId: 'call for.s1', errorType: 'collocation', type: '搭配', prompt: 'call _____ patience', options: ['for', 'off', 'back'], answer: 'for', explain: 'call for。' },
    ],
    usage: { domains: ['日常', '书面'], tone: '中性', commonConfusion: ['call off'] },
  });

  D('call off', {
    etymology: {
      origin: '短语动词：call「呼、下令」+ off「离开、停止」。把已经安排的事喊停，就是取消。',
      prefix: null,
      root: { text: 'call', gloss: '下令' },
      suffix: null,
      history: [
        { label: 'call', text: '发话' },
        { label: 'call off', text: '取消、使停止' },
      ],
      formationLogic: 'off 表示从计划里拿掉。',
      mnemonic: 'off 像把开关拨开。call off the search 是停止搜寻。',
      note: '代词放中间：call it off。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Organisers called off the match when lightning started.', chinese: '一开始打闪，组织者就取消了比赛。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'call off.s1', en: 'The union called off the strike after talks resumed.', zh: '谈判恢复后，工会取消了罢工。', structure: 'call off + 活动', grammar: '及物短语动词。', rationale: '取消的是已经计划的行动。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They called off it.', right: 'They called it off.', reason: '宾语是代词时必须放在 call 和 off 中间。', rule: 'call something off；call it off。', special: 'cancel 是同义的单词动词。' },
    ],
    quiz: [
      { id: 'call off.q1', senseId: 'call off.s1', errorType: 'meaning', type: '词义', prompt: 'call off a meeting 是：', options: ['取消会议', '召开会议', '把会议推迟到打电话之后'], answer: '取消会议', explain: '不再举行。' },
      { id: 'call off.q2', senseId: 'call off.s1', errorType: 'grammar', type: '语法', prompt: '代词宾语：', options: ['call it off', 'call off it', 'call it on'], answer: 'call it off', explain: '代词在中间。' },
      { id: 'call off.q3', senseId: 'call off.s1', errorType: 'confusable', type: '易混', prompt: '「需要耐心」是：', options: ['call for patience', 'call off patience', 'call on patience as cancel'], answer: 'call for patience', explain: 'for 是需要。' },
      { id: 'call off.q4', senseId: 'call off.s1', errorType: 'collocation', type: '搭配', prompt: '同义单词是：', options: ['cancel', 'calculate', 'cadge'], answer: 'cancel', explain: 'cancel the event。' },
    ],
    usage: { domains: ['新闻', '日常'], tone: '中性', commonConfusion: ['cancel'] },
  });

  D('call on', {
    etymology: {
      origin: '短语动词：call「到访、呼唤」+ on「在某人处」。可以是短暂拜访，也可以是正式号召某人去做。',
      prefix: null,
      root: { text: 'call', gloss: '拜访、呼唤' },
      suffix: null,
      history: [
        { label: '上门', text: 'call on a neighbour' },
        { label: '号召', text: 'call on somebody to do something' },
      ],
      formationLogic: 'on 后面是人。若后面是 to do，多半是要求，不是喝茶拜访。',
      mnemonic: 'call on 对人；call at 对地点，如 call at the office。',
      note: '号召比拜访更常见于新闻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We called on my aunt for twenty minutes.', chinese: '我们去看望姨妈，待了二十分钟。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'call on.s1', en: 'Leaders called on drivers to leave the flooded road.', zh: '领导人号召司机离开被淹的路。', structure: 'call on somebody to do', grammar: 'to 不定式表示要求做的事。', rationale: '公开呼吁。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She called on the office to say hello to a building.', right: 'She called at the office.', reason: '拜访地点用 call at；call on 的宾语是人。', rule: 'call on somebody；call at a place。', special: 'call on somebody to do 是号召。' },
    ],
    quiz: [
      { id: 'call on.q1', senseId: 'call on.s1', errorType: 'meaning', type: '词义', prompt: 'call on a friend 可以是：', options: ['拜访朋友', '取消朋友', '计算朋友'], answer: '拜访朋友', explain: '短访。' },
      { id: 'call on.q2', senseId: 'call on.s1', errorType: 'collocation', type: '搭配', prompt: 'call on citizens _____ vote', options: ['to', 'for to', 'off'], answer: 'to', explain: 'call on somebody to do。' },
      { id: 'call on.q3', senseId: 'call on.s1', errorType: 'collocation', type: '搭配', prompt: '拜访一座建筑用：', options: ['call at', 'call on the building as a person', 'call off'], answer: 'call at', explain: '地点用 at。' },
      { id: 'call on.q4', senseId: 'call on.s1', errorType: 'confusable', type: '易混', prompt: '「需要」更接近：', options: ['call for', 'call on a building', 'call off'], answer: 'call for', explain: 'call for something。' },
    ],
    usage: { domains: ['日常', '新闻'], tone: '中性', commonConfusion: ['call at'] },
  });

  D('caller', {
    etymology: {
      origin: '英语派生：call「打电话、来访」+ -er「人」。现在最常见的是来电者，旧用法里也指登门的客人。',
      prefix: null,
      root: { text: 'call', gloss: '呼叫、拜访' },
      suffix: { text: '-er', gloss: '人' },
      history: [
        { label: 'call', text: '喊、访、打电话' },
        { label: 'caller', text: '来电者；旧：访客' },
      ],
      formationLogic: '谁发出 call，谁就是 caller。',
      mnemonic: '电话屏幕上的 caller 是打进来的人，不是你自己。',
      note: 'the caller hung up 是对方挂断。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The caller refused to leave a name.', chinese: '来电者不肯留下姓名。' },
    ],
    contexts: [
      { domain: '电话', senseId: 'caller.s1', en: 'Ask the caller to hold while you find the file.', zh: '请来电者稍等，你去找文件。', structure: 'ask the caller to hold', grammar: '可数名词。', rationale: '现代主义是打电话的人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The caller is the person who only receives the phone.', right: 'The caller is the person who places the call.', reason: '接电话的人不是 caller。', rule: 'caller 打来的一方；接收方是 the person who answers。', special: '访客义已较旧：a caller at the house。' },
    ],
    quiz: [
      { id: 'caller.q1', senseId: 'caller.s1', errorType: 'meaning', type: '词义', prompt: 'caller 最常是：', options: ['来电者', '接电话的机器', '日历'], answer: '来电者', explain: '打进电话的人。' },
      { id: 'caller.q2', senseId: 'caller.s1', errorType: 'meaning', type: '词义', prompt: '旧用法里 a caller 还可指：', options: ['访客', '小牛', '笼子'], answer: '访客', explain: '上门的人。' },
      { id: 'caller.q3', senseId: 'caller.s1', errorType: 'grammar', type: '语法', prompt: '-er 表示：', options: ['发出动作的人', '过去式', '相反'], answer: '发出动作的人', explain: 'call + er。' },
      { id: 'caller.q4', senseId: 'caller.s1', errorType: 'confusable', type: '易混', prompt: '挂断的若是对方，说：', options: ['The caller hung up.', 'The caller calculated.', 'The calf hung up.'], answer: 'The caller hung up.', explain: '来电者挂断。' },
    ],
    usage: { domains: ['电话'], tone: '中性', commonConfusion: ['visitor'] },
  });

  D('calling', {
    etymology: {
      origin: 'calling 是 call 的名词形式，原意是「被召唤」。宗教里被神召唤去做事，后来变成觉得自己该从事的职业或使命。',
      prefix: null,
      root: { text: 'call', gloss: '召唤' },
      suffix: { text: '-ing', gloss: '名词化' },
      history: [
        { label: '召唤', text: '被叫去承担某事' },
        { label: 'calling', text: '天职、使命感、适合的职业' },
      ],
      formationLogic: '不是任何一份工作都叫 calling，它带有「这就是我该做的」。',
      mnemonic: 'a calling 比 a job 更内在。',
      note: 'find one\'s calling 是找到使命所在。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Nursing was her calling, not a temporary job.', chinese: '护理是她的天职，不是一份临时工作。' },
    ],
    contexts: [
      { domain: '人物', senseId: 'calling.s1', en: 'He left the bank because teaching felt like a truer calling.', zh: '他离开银行，因为教书更像真正的使命。', structure: 'a truer calling', grammar: '可数，常加 a。', rationale: '职业选择里的内心召唤。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'His calling this morning was a wrong number.', right: 'His call this morning was a wrong number.', reason: '一次电话是 a call。calling 是天职，不是那一通电话。', rule: 'call 通话；calling 使命。', special: '现在分词 calling 也可只是「正在打电话」，要看句子。' },
    ],
    quiz: [
      { id: 'calling.q1', senseId: 'calling.s1', errorType: 'meaning', type: '词义', prompt: 'a calling 常指：', options: ['天职', '一次错拨的电话', '来电显示'], answer: '天职', explain: '使命感。' },
      { id: 'calling.q2', senseId: 'calling.s1', errorType: 'confusable', type: '易混', prompt: '「给我打电话」用：', options: ['give me a call', 'give me a calling', 'give me a calf'], answer: 'give me a call', explain: '电话是 call。' },
      { id: 'calling.q3', senseId: 'calling.s1', errorType: 'collocation', type: '搭配', prompt: 'find one\'s _____', options: ['calling', 'caller', 'calendar only'], answer: 'calling', explain: '找到使命。' },
      { id: 'calling.q4', senseId: 'calling.s1', errorType: 'meaning', type: '词源', prompt: 'calling 的形象是：', options: ['被召唤去做', '被取消', '被计算'], answer: '被召唤去做', explain: '来自 call。' },
    ],
    usage: { domains: ['人物', '书面'], tone: '庄重', commonConfusion: ['call', 'job'] },
  });

  D('calm', {
    etymology: {
      origin: 'calm 经由意大利语和法语进入英语，原先多指海面或中午热得没有风时的平静。现在也指人心里不慌。',
      prefix: null,
      root: { text: 'calm', gloss: '无风、平静' },
      suffix: null,
      history: [
        { label: '海面', text: '没有风浪' },
        { label: '现在', text: '平静的；名词平静；动词使镇静' },
      ],
      formationLogic: '形容词、名词、动词同形。副词是 calmly。',
      mnemonic: 'l 不发音，不要读成 cal-m 两个音节很重。拼写却要保留 l。',
      note: 'calm down 是冷静下来。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her voice stayed calm even when the alarm rang.', chinese: '警报响时她的声音仍然平静。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'calm.s1', en: 'The nurse told him to calm down and breathe slowly.', zh: '护士让他冷静下来，慢慢呼吸。', structure: 'calm down', grammar: '短语动词，人作主语或宾语都可以：calm him down。', rationale: '动词义是考试常客。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Please calm down your voice is fine, but Please calm your down is not.', right: 'Please calm down.', reason: '没有宾语时，down 留在后面。有宾语可用 calm him down。', rule: 'calm down；calm somebody down。', special: 'the calm before the storm 是暴风雨前的宁静。' },
    ],
    quiz: [
      { id: 'calm.q1', senseId: 'calm.s1', errorType: 'meaning', type: '词义', prompt: 'a calm sea 是：', options: ['平静的海', '热量很高的海', '被取消的海'], answer: '平静的海', explain: '无风浪。' },
      { id: 'calm.q2', senseId: 'calm.s1', errorType: 'collocation', type: '搭配', prompt: '冷静下来：calm _____', options: ['down', 'off', 'for'], answer: 'down', explain: 'calm down。' },
      { id: 'calm.q3', senseId: 'calm.s1', errorType: 'grammar', type: '语法', prompt: '让他冷静：', options: ['calm him down', 'calm down him always odd', 'calm him off'], answer: 'calm him down', explain: '代词在中间最自然。' },
      { id: 'calm.q4', senseId: 'calm.s1', errorType: 'confusable', type: '易混', prompt: '副词是：', options: ['calmly', 'calmy', 'calmlily'], answer: 'calmly', explain: '加 -ly。' },
    ],
    usage: { domains: ['日常', '自然'], tone: '中性', commonConfusion: ['calm down'] },
  });

  D('caloric', {
    etymology: {
      origin: 'caloric 来自 calorie「卡路里」加形容词尾 -ic，更早和拉丁语 calor「热」有关。它描述食物提供的热量，不是日历。',
      prefix: null,
      root: { text: 'calor-', gloss: '热' },
      suffix: { text: '-ic', gloss: '形容词' },
      history: [
        { label: 'calor', text: '热' },
        { label: 'caloric', text: '关于热量的' },
      ],
      formationLogic: '名词 calorie 的形容词。科学旧词 caloric 也曾指一种「热质」，现在考试取营养义即可。',
      mnemonic: 'caloric intake 是热量摄入。',
      note: '不要写成 caloryic。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The label shows the caloric value of one biscuit.', chinese: '标签标明一块饼干的热量值。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'caloric.s1', en: 'A caloric surplus over months leads to weight gain.', zh: '连续几个月热量盈余会导致体重增加。', structure: 'caloric surplus', grammar: '形容词修饰名词。', rationale: '营养学术语。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'This drink is very calorie.', right: 'This drink is very caloric.', reason: 'calorie 是名词单位，作表语形容饮料要用 caloric，或说 high in calories。', rule: 'caloric 形容词；calorie 名词。', special: 'high-calorie 用连字符作定语也很常见。' },
    ],
    quiz: [
      { id: 'caloric.q1', senseId: 'caloric.s1', errorType: 'meaning', type: '词义', prompt: 'caloric 是：', options: ['热量的', '日历的', '平静的'], answer: '热量的', explain: '和卡路里有关。' },
      { id: 'caloric.q2', senseId: 'caloric.s1', errorType: 'grammar', type: '语法', prompt: '形容词选：', options: ['caloric', 'calorie', 'calories'], answer: 'caloric', explain: 'calorie 是单位名词。' },
      { id: 'caloric.q3', senseId: 'caloric.s1', errorType: 'collocation', type: '搭配', prompt: 'caloric _____ 热量摄入', options: ['intake', 'calendar', 'caller'], answer: 'intake', explain: 'caloric intake。' },
      { id: 'caloric.q4', senseId: 'caloric.s1', errorType: 'confusable', type: '易混', prompt: '一卡是：', options: ['a calorie', 'a caloric', 'a calf'], answer: 'a calorie', explain: '名词才是单位。' },
    ],
    usage: { domains: ['健康', '科学'], tone: '中性', commonConfusion: ['calorie'] },
  });

  D('calorie', {
    etymology: {
      origin: 'calorie 来自法语，词干是拉丁语 calor「热」。它是衡量食物能量的单位。大写与科学定义曾有大小卡之分，日常说的是食物卡路里。',
      prefix: null,
      root: { text: 'calor-', gloss: '热' },
      suffix: null,
      history: [
        { label: 'calor', text: '热' },
        { label: 'calorie', text: '卡，食物能量单位' },
      ],
      formationLogic: '热的单位变成吃进去的能量单位。形容词是 caloric。',
      mnemonic: '复数 calories。低热量 low in calories。',
      note: '空卡、空热量说 empty calories，指有能量但营养很少。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'One small cake can contain several hundred calories.', chinese: '一小块蛋糕就可能含有几百卡。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'calorie.s1', en: 'The plan cuts calories without cutting every meal.', zh: '这个计划减少热量，但不是顿顿都不吃。', structure: 'cut calories', grammar: '复数表示热量的多少。', rationale: '饮食语境里的单位。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The soup has very few calorie.', right: 'The soup has very few calories.', reason: '可数单位要用复数，除非说 one calorie。', rule: 'calorie, calories；形容词用 caloric 或 low-calorie。', special: '不要和 calendar 混。' },
    ],
    quiz: [
      { id: 'calorie.q1', senseId: 'calorie.s1', errorType: 'meaning', type: '词义', prompt: 'calorie 是：', options: ['热量单位', '日历', '钙元素'], answer: '热量单位', explain: '食物能量。' },
      { id: 'calorie.q2', senseId: 'calorie.s1', errorType: 'grammar', type: '语法', prompt: '很多卡：', options: ['many calories', 'many calorie', 'many calorics'], answer: 'many calories', explain: '复数。' },
      { id: 'calorie.q3', senseId: 'calorie.s1', errorType: 'meaning', type: '词源', prompt: 'calor 是：', options: ['热', '石头', '召唤'], answer: '热', explain: '拉丁语热。' },
      { id: 'calorie.q4', senseId: 'calorie.s1', errorType: 'confusable', type: '易混', prompt: '「热量的」形容词是：', options: ['caloric', 'calendar', 'caller'], answer: 'caloric', explain: 'calorie 的形容词。' },
    ],
    usage: { domains: ['健康'], tone: '中性', commonConfusion: ['caloric', 'calendar'] },
  });

  D('camel', {
    etymology: {
      origin: '拉丁语 camelus，希腊语 kamelos，一般认为再早来自闪米特语（希伯来语 gamal 一类）「骆驼」。',
      prefix: null,
      root: { text: 'camel', gloss: '骆驼' },
      suffix: null,
      history: [
        { label: '借入欧洲', text: '骆驼随商路进入希腊、拉丁文献，再进入英语。' },
        { label: '现在', text: '现在指沙漠里长颈、背有驼峰的大型动物。' },
      ],
      formationLogic: '外来动物名，不是英语内部复合。',
      mnemonic: '驼峰像货包，camel 把货驮过沙漠。',
      note: '单峰和双峰都叫 camel。另有 camel case（驼峰式命名），那是比喻，不是本条动物义。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The camel crossed the dune with two water bags.', chinese: '骆驼驮着两袋水翻过沙丘。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'camel.s1', en: 'A camel can go for days without drinking.', zh: '骆驼可以好几天不喝水。', structure: 'a camel', grammar: '可数名词，复数 camels。', rationale: '锁住动物本义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We rode a camel horse across the sand.', right: 'We rode a camel across the sand.', reason: 'camel 已是骆驼，不必再加 horse。', rule: '动物名直接作名词。', special: '不要和 camera 看形近。' },
    ],
    quiz: [
        { id: 'camel.q1', senseId: 'camel.s1', errorType: 'meaning', type: '词义', prompt: 'camel 在本条的意思是：', options: ['骆驼', '照相机', '运河'], answer: '骆驼', explain: 'camera 是照相机，canal 是运河。' },
        { id: 'camel.q2', senseId: 'camel.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个是沙漠里的动物？', options: ['camel', 'camera', 'camp'], answer: 'camel', explain: 'camp 是营地。' },
        { id: 'camel.q3', senseId: 'camel.s1', errorType: 'grammar', type: '语法', prompt: '哪句名词形式对？', options: ['two camels', 'two camel', 'a camels'], answer: 'two camels', explain: '可数复数加 -s。' },
        { id: 'camel.q4', senseId: 'camel.s1', errorType: 'collocation', type: '搭配', prompt: '哪组搭配自然？', options: ['ride a camel', 'drink a camel', 'cancel a camel'], answer: 'ride a camel', explain: '骑骆驼用 ride。' },
    ],
    usage: { domains: ['自然'], tone: '中性', commonConfusion: ['camera', 'canal'] },
  });

  D('camera', {
    etymology: {
      origin: '拉丁语 camera「拱形房间、内室」，来自希腊语 kamara。摄影术语 camera obscura 原意是「暗室」。',
      prefix: null,
      root: { text: 'camera', gloss: '照相机' },
      suffix: null,
      history: [
        { label: '暗室', text: '早期成像靠一间小黑屋或暗箱，名字就叫 camera。' },
        { label: '现在', text: '现在指拍照或录像的照相机、摄像机。' },
      ],
      formationLogic: '由「房间」转到「成像装置」，不是英语自造词根。',
      mnemonic: 'camera 里有一间小黑屋，光线进去才成像。',
      note: '可数。movie camera、digital camera 都是这一词。不要和 camel 看形近。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She left the camera on the desk before the interview.', chinese: '面试前她把摄像机放在桌上。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'camera.s1', en: 'This camera records both photos and video.', zh: '这台相机既能拍照也能录像。', structure: 'a camera', grammar: '可数名词。', rationale: '锁住设备义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I did a photo by camera.', right: 'I took a photo with a camera.', reason: '拍照用 take a photo，工具用 with。', rule: 'take a photo with a camera。', special: '不要写成 do a photo。' },
    ],
    quiz: [
        { id: 'camera.q1', senseId: 'camera.s1', errorType: 'meaning', type: '词义', prompt: 'camera 的核心意思是：', options: ['照相机或摄像机', '骆驼', '战役'], answer: '照相机或摄像机', explain: '本条是成像设备。' },
        { id: 'camera.q2', senseId: 'camera.s1', errorType: 'confusable', type: '辨词', prompt: '用来拍照的是：', options: ['camera', 'camel', 'camp'], answer: 'camera', explain: '另两个是骆驼和营地。' },
        { id: 'camera.q3', senseId: 'camera.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two cameras', 'two camera', 'a cameras'], answer: 'two cameras', explain: '可数复数加 -s。' },
        { id: 'camera.q4', senseId: 'camera.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['take a photo with a camera', 'take a camera photo of grammar', 'eat a camera'], answer: 'take a photo with a camera', explain: '工具用 with。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['camel', 'camp'] },
  });

  D('camp', {
    etymology: {
      origin: '拉丁语 campus「平坦的田野」。英语 camp 先指军队在野外的驻地，再指帐篷营地，也可作动词「扎营」。',
      prefix: null,
      root: { text: 'camp', gloss: '营地' },
      suffix: null,
      history: [
        { label: '田野驻地', text: '拉丁 campus 进入法语、英语后，指野外宿营处。' },
        { label: '现在', text: '现在是营地，也可说 go camping、camp by the lake。' },
      ],
      formationLogic: '名词、动词同形。本条词性标 noun，但「扎营」是同一词的动词用法。',
      mnemonic: 'camp 来自田野：在 campus 那种空地上搭帐篷。',
      note: 'concentration camp 是「集中营」，感情色彩完全不同，不要当成普通野营。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The children set up camp beside the lake.', chinese: '孩子们在湖边扎了营。' },
    ],
    contexts: [
      { domain: '户外', senseId: 'camp.s1', en: 'Summer camp starts on Monday.', zh: '夏令营星期一开始。', structure: 'a camp / set up camp', grammar: '可数名词；动词 camp 不加 to camp 的词形变化按规则动词。', rationale: '锁住营地义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We will camp a tent on the grass.', right: 'We will pitch a tent and camp on the grass.', reason: 'camp 是扎营、住宿，帐篷用 pitch a tent。', rule: 'camp + 地点，不把 tent 当宾语硬套。', special: '名词 camp 与动词不要混用结构。' },
    ],
    quiz: [
        { id: 'camp.q1', senseId: 'camp.s1', errorType: 'meaning', type: '词义', prompt: 'camp 的核心意思是：', options: ['营地或扎营', '骆驼', '照相机'], answer: '营地或扎营', explain: '和 camel、camera 只是形近。' },
        { id: 'camp.q2', senseId: 'camp.s1', errorType: 'confusable', type: '辨词', prompt: '夏令营最可能用：', options: ['camp', 'campus', 'campaign'], answer: 'camp', explain: 'campus 是校园，campaign 是运动。' },
        { id: 'camp.q3', senseId: 'camp.s1', errorType: 'grammar', type: '语法', prompt: '哪句自然？', options: ['They camped by the river.', 'They camped the river.', 'They were camp by the river.'], answer: 'They camped by the river.', explain: '地点用 by，动词要有过去式。' },
        { id: 'camp.q4', senseId: 'camp.s1', errorType: 'collocation', type: '搭配', prompt: '哪组搭配对？', options: ['set up camp', 'set up camel', 'set up cancer'], answer: 'set up camp', explain: '扎营是 set up camp。' },
    ],
    usage: { domains: ['户外'], tone: '中性', commonConfusion: ['campus', 'campaign'] },
  });

  D('campaign', {
    etymology: {
      origin: '法语 campagne，拉丁语 campania「平原、乡野」，与 camp、campus 同源。先指军队在野外作战的一季，后指任何有计划的一系列行动。',
      prefix: null,
      root: { text: 'campaign', gloss: '运动' },
      suffix: null,
      history: [
        { label: '野外作战季', text: '早期 campaign 是一次军事行动的时段。' },
        { label: '现在', text: '现在多指宣传、竞选、公益等 campaign，仍可指战役。' },
      ],
      formationLogic: '军事义引申为有组织的运动。动词 campaign 表示发起或参加这种运动。',
      mnemonic: 'campaign 比 camp 多一段路程：不是过夜，而是一整场行动。',
      note: 'election campaign 是竞选活动。不要和 campus 搞混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The school ran a campaign against litter.', chinese: '学校开展了反对乱扔垃圾的运动。' },
    ],
    contexts: [
      { domain: '公共生活', senseId: 'campaign.s1', en: 'The election campaign lasted six weeks.', zh: '这场竞选运动持续了六周。', structure: 'a campaign', grammar: '可数名词。', rationale: '锁住有计划的一系列行动。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They did a campaign to smoking.', right: 'They ran a campaign against smoking.', reason: '开展运动常用 run 或 launch，反对用 against。', rule: 'run/launch a campaign against。', special: '不要用 do a campaign to。' },
    ],
    quiz: [
        { id: 'campaign.q1', senseId: 'campaign.s1', errorType: 'meaning', type: '词义', prompt: 'campaign 更接近：', options: ['有计划的运动或战役', '大学校园', '午餐食堂'], answer: '有计划的运动或战役', explain: 'campus 是校园，canteen 是食堂。' },
        { id: 'campaign.q2', senseId: 'campaign.s1', errorType: 'confusable', type: '辨词', prompt: '竞选活动是：', options: ['campaign', 'campus', 'camp'], answer: 'campaign', explain: 'camp 只是营地。' },
        { id: 'campaign.q3', senseId: 'campaign.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a long campaign', 'a long campaigns', 'an campaign'], answer: 'a long campaign', explain: '单数用 a，campaign 以辅音开头。' },
        { id: 'campaign.q4', senseId: 'campaign.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['launch a campaign', 'launch a camel', 'launch a candle'], answer: 'launch a campaign', explain: '发起运动用 launch。' },
    ],
    usage: { domains: ['公共生活'], tone: '中性', commonConfusion: ['campus', 'camp'] },
  });

  D('campaigner', {
    etymology: {
      origin: '英语在 campaign 后加施事后缀 -er，指参加或推动某场运动的人。campaign 本身来自拉丁语 campania「乡野、战季」。',
      prefix: null,
      root: { text: 'campaigner', gloss: '活动家' },
      suffix: null,
      history: [
        { label: 'campaign + -er', text: '-er 表示做这件事的人。' },
        { label: '现在', text: '现在指社会运动的活动家，也可指竞选参与者。' },
      ],
      formationLogic: '英语派生：词干 campaign 加 -er，不必再造古代词根。',
      mnemonic: 'campaign 是一场运动，campaigner 是把这场运动扛在身上的人。',
      note: '常与 for 连用：a campaigner for human rights。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She is a well-known campaigner for cleaner rivers.', chinese: '她是争取河流更清洁的知名活动家。' },
    ],
    contexts: [
      { domain: '公共生活', senseId: 'campaigner.s1', en: 'Local campaigners collected signatures outside the station.', zh: '当地活动人士在车站外收集签名。', structure: 'a campaigner for', grammar: '可数名词，指人。', rationale: '锁住从事运动的人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He is a campaigner of the tax.', right: 'He is a campaigner for lower taxes.', reason: '支持某目标常用 for，不用 of。', rule: 'campaigner for + 目标。', special: '不要和 campaign 的名词用法互换。' },
    ],
    quiz: [
        { id: 'campaigner.q1', senseId: 'campaigner.s1', errorType: 'meaning', type: '词义', prompt: 'campaigner 是：', options: ['活动家或竞选参与者', '战役本身', '校园'], answer: '活动家或竞选参与者', explain: '人用 -er，事情是 campaign。' },
        { id: 'campaigner.q2', senseId: 'campaigner.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个指人？', options: ['campaigner', 'campaign', 'campus'], answer: 'campaigner', explain: '后两个是运动和校园。' },
        { id: 'campaigner.q3', senseId: 'campaigner.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two campaigners', 'two campaigner', 'a campaigners'], answer: 'two campaigners', explain: '指人可数，复数加 -s。' },
        { id: 'campaigner.q4', senseId: 'campaigner.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a campaigner for peace', 'a campaigner peace', 'a peace of campaigner'], answer: 'a campaigner for peace', explain: '目标用 for。' },
    ],
    usage: { domains: ['公共生活'], tone: '中性', commonConfusion: ['campaign', 'campus'] },
  });

  D('campus', {
    etymology: {
      origin: '直接来自拉丁语 campus「田野」。美国高校用它指学院的场地，再进入一般英语，表示大学或学院的校园。',
      prefix: null,
      root: { text: 'campus', gloss: '校园' },
      suffix: null,
      history: [
        { label: '拉丁 campus', text: '本义是开阔地，不是「帐篷」。' },
        { label: '现在', text: '现在指大学、学院的土地和建筑，即校园、校区。' },
      ],
      formationLogic: '与 camp 同源，但 campus 保持拉丁词形，专指校园。',
      mnemonic: 'campus 还是那片田：学校把课室建在这片地上。',
      note: 'on campus / off campus。复数 campuses。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'New students toured the campus on the first day.', chinese: '新生第一天参观了校园。' },
    ],
    contexts: [
      { domain: '教育', senseId: 'campus.s1', en: 'The library is on the main campus.', zh: '图书馆在主校区。', structure: 'on campus', grammar: '可数名词，常与 on 连用。', rationale: '锁住校园义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She lives in campus.', right: 'She lives on campus.', reason: '在校园里用 on campus，不用 in campus。', rule: 'on campus / off campus。', special: '不要和 camp 的 at a camp 混用。' },
    ],
    quiz: [
        { id: 'campus.q1', senseId: 'campus.s1', errorType: 'meaning', type: '词义', prompt: 'campus 是：', options: ['校园或校区', '野营帐篷', '竞选运动'], answer: '校园或校区', explain: 'camp 与 campaign 是近亲但意思不同。' },
        { id: 'campus.q2', senseId: 'campus.s1', errorType: 'confusable', type: '辨词', prompt: '大学场地用：', options: ['campus', 'campaign', 'camel'], answer: 'campus', explain: 'campaign 是运动。' },
        { id: 'campus.q3', senseId: 'campus.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two campuses', 'two campus', 'two campuss'], answer: 'two campuses', explain: '以 s 结尾的复数加 -es。' },
        { id: 'campus.q4', senseId: 'campus.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['on campus', 'on campaign ground only', 'inside a camel'], answer: 'on campus', explain: '固定说法是 on campus。' },
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['camp', 'campaign'] },
  });

  D('can', {
    etymology: {
      origin: '本条其实叠了两个词。情态动词来自古英语 cunnan「知道怎样做」；名词「罐、罐头」来自古英语 canne「容器」。拼写后来一样，词源不是一条线。',
      prefix: null,
      root: { text: 'can', gloss: '能' },
      suffix: null,
      history: [
        { label: '两条来源', text: '情态 can 表能力和许可；名词 can 是金属罐。' },
        { label: '现在', text: '现在既能说 She can swim，也能说 a can of soup。' },
      ],
      formationLogic: '不要编成同一个拉丁词根。教学上先分清情态动词和名词。',
      mnemonic: '能做某事用 can；超市货架上的 can 是另一词，只是长得一样。',
      note: '情态动词后接动词原形，没有 to。名词可数：a can of beans。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She can read the label on the can.', chinese: '她能读懂罐头上的标签。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'can.s1', en: 'You can borrow this dictionary until Friday.', zh: '这本词典你可以借到星期五。', structure: 'can + 动词原形', grammar: '情态动词，无人称变化。', rationale: '本条先锁能力或许可。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He can to drive.', right: 'He can drive.', reason: '情态动词 can 后面不加 to。', rule: 'can + 原形。', special: '名词罐头不要拿来解释这句。' },
    ],
    quiz: [
        { id: 'can.q1', senseId: 'can.s1', errorType: 'meaning', type: '词义', prompt: '本条 can 作为情态动词时是：', options: ['能、会或可以', '必须', '罐头盖上的骆驼'], answer: '能、会或可以', explain: 'must 才是必须。' },
        { id: 'can.q2', senseId: 'can.s1', errorType: 'confusable', type: '辨词', prompt: '「我会游泳」用：', options: ['can', 'cannot as a noun tin', 'canal'], answer: 'can', explain: 'canal 是运河。' },
        { id: 'can.q3', senseId: 'can.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['She can swim.', 'She can to swim.', 'She cans swim.'], answer: 'She can swim.', explain: '情态动词无人称 -s，也不加 to。' },
        { id: 'can.q4', senseId: 'can.s1', errorType: 'context', type: '语境', prompt: 'a can of soup 里的 can 是：', options: ['金属罐', '情态动词能', '校园'], answer: '金属罐', explain: '同一拼写的名词义。' },
    ],
    usage: { domains: ['语法'], tone: '中性', commonConfusion: ['canal', 'cannot'] },
  });

  D('canal', {
    etymology: {
      origin: '拉丁语 canalis「管道、水槽」，与 cane「芦苇、空心茎」那一支常常被放在一起讲：空心的通道。英语里主要指人工开凿的运河。',
      prefix: null,
      root: { text: 'canal', gloss: '运河' },
      suffix: null,
      history: [
        { label: '拉丁 canalis', text: '本义是引水或行船的槽。' },
        { label: '现在', text: '现在指运河、水道，也可指体内或工程上的管道。' },
      ],
      formationLogic: '借自拉丁语的通道名，不是 can 加 -al 临时拼出来的。',
      mnemonic: 'canal 是一条细长的人工水道，船从中间过。',
      note: 'the Suez Canal 等专名要大写 Canal。不要和 channel 完全等同，但考试可互相联想。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Boats still use the old canal through the town.', chinese: '船只仍走穿过小镇的那条老运河。' },
    ],
    contexts: [
      { domain: '地理', senseId: 'canal.s1', en: 'This canal carries water to the fields.', zh: '这条水渠把水送到田里。', structure: 'a canal', grammar: '可数名词。', rationale: '锁住人工水道。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The camel brought ships inland.', right: 'The canal brought ships inland.', reason: '内陆行船靠 canal，不是 camel。', rule: '形近词要看意思。', special: 'can 是罐或能，也不表水道。' },
    ],
    quiz: [
        { id: 'canal.q1', senseId: 'canal.s1', errorType: 'meaning', type: '词义', prompt: 'canal 是：', options: ['运河或水道', '骆驼', '能'], answer: '运河或水道', explain: '和 camel、can 只是形近。' },
        { id: 'canal.q2', senseId: 'canal.s1', errorType: 'confusable', type: '辨词', prompt: '行船的人工河是：', options: ['canal', 'canyon', 'candle'], answer: 'canal', explain: 'canyon 是峡谷，candle 是蜡烛。' },
        { id: 'canal.q3', senseId: 'canal.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two canals', 'two canal', 'a canals'], answer: 'two canals', explain: '可数复数加 -s。' },
        { id: 'canal.q4', senseId: 'canal.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['dig a canal', 'dig a candle', 'dig a candy'], answer: 'dig a canal', explain: '开凿运河用 dig。' },
    ],
    usage: { domains: ['地理'], tone: '中性', commonConfusion: ['camel', 'channel'] },
  });

  D('cancel', {
    etymology: {
      origin: '拉丁语 cancellare「画上格子、勾掉」，来自 cancelli「格子、栅栏」。账目上打叉勾销，后来泛指取消安排。',
      prefix: null,
      root: { text: 'cancel', gloss: '取消' },
      suffix: null,
      history: [
        { label: '格子勾销', text: 'cancellare 原是用线条划掉文字。' },
        { label: '现在', text: '现在指取消会议、订单，也可指互相抵消。' },
      ],
      formationLogic: '拉丁动词借入英语，过去式 canceled 或 cancelled 都可以。',
      mnemonic: '格子一打，字就作废：cancel 就是划掉计划。',
      note: 'cancel a meeting / a flight / an order。名词是 cancellation。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They had to cancel the outdoor class because of rain.', chinese: '因为下雨，他们只好取消户外课。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'cancel.s1', en: 'Please cancel my ticket before noon.', zh: '请在中午前取消我的票。', structure: 'cancel + 名词', grammar: '规则动词。', rationale: '锁住取消义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She canceled to the meeting.', right: 'She canceled the meeting.', reason: 'cancel 直接接被取消的事，不加 to。', rule: 'cancel + 宾语。', special: '不要和 call off 的结构互相乱套时漏宾语。' },
    ],
    quiz: [
        { id: 'cancel.q1', senseId: 'cancel.s1', errorType: 'meaning', type: '词义', prompt: 'cancel 是：', options: ['取消或抵消', '癌症', '候选人'], answer: '取消或抵消', explain: 'cancer 是癌症，candidate 是候选人。' },
        { id: 'cancel.q2', senseId: 'cancel.s1', errorType: 'confusable', type: '辨词', prompt: '航班不开了，用：', options: ['cancel', 'cancer', 'candle'], answer: 'cancel', explain: '后两个不是动词取消。' },
        { id: 'cancel.q3', senseId: 'cancel.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['They canceled the trip.', 'They canceled to the trip.', 'They canceling the trip yesterday.'], answer: 'They canceled the trip.', explain: '过去式直接作谓语，宾语前不用 to。' },
        { id: 'cancel.q4', senseId: 'cancel.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['cancel an order', 'cancel an camel', 'cancel a canyon'], answer: 'cancel an order', explain: '取消的是安排或订单。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['cancer', 'cancellation'] },
  });

  D('cancer', {
    etymology: {
      origin: '拉丁语 cancer「螃蟹」。古希腊、罗马医学用螃蟹比喻肿瘤向四周伸展，星座名 Cancer 也是这一词。英语沿用为癌症，也可比喻顽疾、弊病。',
      prefix: null,
      root: { text: 'cancer', gloss: '癌症' },
      suffix: null,
      history: [
        { label: '螃蟹之喻', text: '拉丁医学传统把蔓延的肿块比作蟹。' },
        { label: '现在', text: '现在首先指癌症，也可比喻社会弊病。' },
      ],
      formationLogic: '借词。大写 Cancer 常指巨蟹座或热带，小写多指疾病。',
      mnemonic: '蟹脚向四周伸，cancer 像难以局限的病变。',
      note: '不可数或可数视说法而定：lung cancer 常不可数；cancers 可指不同癌症。不要和 cancel 看混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her aunt is being treated for breast cancer.', chinese: '她阿姨正在接受乳腺癌治疗。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'cancer.s1', en: 'Smoking increases the risk of lung cancer.', zh: '吸烟会增加肺癌风险。', structure: 'lung cancer', grammar: '疾病名，常不可数。', rationale: '锁住疾病义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The flight was cancered.', right: 'The flight was canceled.', reason: '取消是 cancel，疾病是 cancer。', rule: '两个词只差一个字母。', special: '癌症不能当动词用。' },
    ],
    quiz: [
        { id: 'cancer.q1', senseId: 'cancer.s1', errorType: 'meaning', type: '词义', prompt: 'cancer 的核心意思是：', options: ['癌症', '取消', '蜡烛'], answer: '癌症', explain: 'cancel 才是取消。' },
        { id: 'cancer.q2', senseId: 'cancer.s1', errorType: 'confusable', type: '辨词', prompt: '医学课上的 cancer 是：', options: ['癌症', '运河', '罐头'], answer: '癌症', explain: '不要往 can、canal 上靠。' },
        { id: 'cancer.q3', senseId: 'cancer.s1', errorType: 'grammar', type: '语法', prompt: '哪句更自然？', options: ['lung cancer', 'a lung cancers as default', 'many advices of cancer'], answer: 'lung cancer', explain: '病名这里通常不加复数，advice 也不可数。' },
        { id: 'cancer.q4', senseId: 'cancer.s1', errorType: 'context', type: '语境', prompt: 'the crab in the zodiac called Cancer 里，Cancer 是：', options: ['巨蟹座专名', '动词取消', '校园'], answer: '巨蟹座专名', explain: '大写时常指星座，与疾病同词源。' },
    ],
    usage: { domains: ['医学'], tone: '中性', commonConfusion: ['cancel', 'cancerous'] },
  });

  D('cancerous', {
    etymology: {
      origin: '在 cancer 后加形容词后缀 -ous，表示「与癌有关的、癌性的」。cancer 来自拉丁语「螃蟹」。',
      prefix: null,
      root: { text: 'cancerous', gloss: '癌性的' },
      suffix: null,
      history: [
        { label: 'cancer + -ous', text: '-ous 把名词变成形容词。' },
        { label: '现在', text: '现在修饰肿瘤、细胞或组织，表示癌变的。' },
      ],
      formationLogic: '英语派生，不必另造词根。',
      mnemonic: 'cancer 是癌症，cancerous 是「已经属于癌」的那个形容词。',
      note: 'a cancerous tumor。不要当成 cancer 的副词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The test showed no cancerous cells.', chinese: '检查没有发现癌细胞。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'cancerous.s1', en: 'The growth was not cancerous.', zh: '那个肿块不是癌性的。', structure: 'be cancerous / cancerous + 名词', grammar: '形容词，放在名词前或系动词后。', rationale: '锁住癌性义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The cells were cancerous tumor.', right: 'The cells were cancerous.', reason: '形容词作表语，不要再硬加一个名词凑句子。', rule: 'be + cancerous。', special: '名词是 cancer。' },
    ],
    quiz: [
        { id: 'cancerous.q1', senseId: 'cancerous.s1', errorType: 'meaning', type: '词义', prompt: 'cancerous 是：', options: ['癌性的', '取消的', '能干的'], answer: '癌性的', explain: 'capable 才是能干的。' },
        { id: 'cancerous.q2', senseId: 'cancerous.s1', errorType: 'confusable', type: '辨词', prompt: '形容细胞恶变用：', options: ['cancerous', 'cancer', 'cancel'], answer: 'cancerous', explain: 'cancer 是名词，cancel 是动词。' },
        { id: 'cancerous.q3', senseId: 'cancerous.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a cancerous growth', 'a cancerous', 'cancerous a growth'], answer: 'a cancerous growth', explain: '形容词一般不单独当 a 的宾语。' },
        { id: 'cancerous.q4', senseId: 'cancerous.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['cancerous cells', 'cancerous tickets', 'cancerous camels'], answer: 'cancerous cells', explain: '常修饰细胞、肿瘤。' },
    ],
    usage: { domains: ['医学'], tone: '中性', commonConfusion: ['cancer', 'cancel'] },
  });

  D('candidate', {
    etymology: {
      origin: '拉丁语 candidatus「穿白衣的人」。罗马谋求公职的人穿白色托加 candidus，表示公开、清白。英语转为候选人、应试者。',
      prefix: null,
      root: { text: 'candidate', gloss: '候选人' },
      suffix: null,
      history: [
        { label: '白衣求职', text: 'candidus 是「洁白的」。' },
        { label: '现在', text: '现在指竞选、求职或考试的申请人。' },
      ],
      formationLogic: '拉丁社会习俗变成英语职称，不是 white 的直译复合词。',
      mnemonic: '候选人曾经穿白衣服：candidate 让人看见他来参选。',
      note: 'a candidate for the job / for president。动词 apply，名词常用 candidate。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Three candidates applied for the teaching post.', chinese: '三名申请人应聘这个教学职位。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'candidate.s1', en: 'She is the strongest candidate for the scholarship.', zh: '她是这项奖学金最有力的申请人。', structure: 'a candidate for', grammar: '可数名词，指人。', rationale: '锁住候选人义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He is a candidate to the job.', right: 'He is a candidate for the job.', reason: '职位或目标用 for，不用 to。', rule: 'candidate for。', special: '不要和 apply to a company 的 to 套过来。' },
    ],
    quiz: [
        { id: 'candidate.q1', senseId: 'candidate.s1', errorType: 'meaning', type: '词义', prompt: 'candidate 是：', options: ['候选人、应试者或申请人', '癌症患者', '船长'], answer: '候选人、应试者或申请人', explain: 'captain 是船长或队长。' },
        { id: 'candidate.q2', senseId: 'candidate.s1', errorType: 'confusable', type: '辨词', prompt: '求职的人是：', options: ['candidate', 'candle', 'candy'], answer: 'candidate', explain: 'candle 是蜡烛，candy 是糖。' },
        { id: 'candidate.q3', senseId: 'candidate.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two candidates', 'two candidate', 'a candidates'], answer: 'two candidates', explain: '指人可数。' },
        { id: 'candidate.q4', senseId: 'candidate.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a candidate for the post', 'a candidate of swimming the post', 'a post candidate to'], answer: 'a candidate for the post', explain: '目标用 for。' },
    ],
    usage: { domains: ['职场'], tone: '中性', commonConfusion: ['candle', 'captain'] },
  });

  D('candle', {
    etymology: {
      origin: '拉丁语 candela「小烛、火光」，来自动词 candere「发白、发光」。英语 candle 就是这支蜡和灯芯。',
      prefix: null,
      root: { text: 'candle', gloss: '蜡烛' },
      suffix: null,
      history: [
        { label: '发光', text: 'candela 与 candid「白」同源，都和光、白有关。' },
        { label: '现在', text: '现在指蜡烛。' },
      ],
      formationLogic: '拉丁名词借入，不是 can 加 -dle。',
      mnemonic: 'candle 一点就亮，因为词根就是「发光」。',
      note: 'light a candle。生日蛋糕上用复数 candles。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She lit a candle when the power went out.', chinese: '停电时她点了一支蜡烛。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'candle.s1', en: 'Blow out the candles and make a wish.', zh: '吹灭蜡烛，许个愿。', structure: 'light a candle', grammar: '可数名词。', rationale: '锁住蜡烛义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please light a candy on the table.', right: 'Please light a candle on the table.', reason: '要点燃的是 candle，candy 是糖。', rule: '形近但一个能烧一个能吃。', special: 'candidate 是人。' },
    ],
    quiz: [
        { id: 'candle.q1', senseId: 'candle.s1', errorType: 'meaning', type: '词义', prompt: 'candle 是：', options: ['蜡烛', '糖果', '候选人'], answer: '蜡烛', explain: 'candy 与 candidate 只是开头相同。' },
        { id: 'candle.q2', senseId: 'candle.s1', errorType: 'confusable', type: '辨词', prompt: '停电时照明用：', options: ['candle', 'candy', 'canal'], answer: 'candle', explain: 'candy 不能点亮。' },
        { id: 'candle.q3', senseId: 'candle.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['three candles', 'three candle', 'a candles'], answer: 'three candles', explain: '可数复数加 -s。' },
        { id: 'candle.q4', senseId: 'candle.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['light a candle', 'light a candy', 'light a campus'], answer: 'light a candle', explain: '点燃蜡烛用 light。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['candy', 'candidate'] },
  });

  D('candy', {
    etymology: {
      origin: '经由法语、意大利语，最终跟阿拉伯语 qand「蔗糖、冰糖」有关，再早常追溯到梵语 khanda「糖块」。英语 candy 就是糖做的甜食。',
      prefix: null,
      root: { text: 'candy', gloss: '糖果' },
      suffix: null,
      history: [
        { label: '糖块', text: '这条词从南亚、阿拉伯糖业进入欧洲语言。' },
        { label: '现在', text: '现在在美式英语里泛指糖果，也可指蜜饯。' },
      ],
      formationLogic: '借词，不是 can 的小称。英式口语更常说 sweets。',
      mnemonic: 'candy 从糖块来，吃到的就是甜。',
      note: '不可数可指这类食品：too much candy；一颗可说 a piece of candy 或 a candy。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The child chose a piece of candy after lunch.', chinese: '孩子午饭后选了一颗糖。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'candy.s1', en: 'Too much candy is bad for your teeth.', zh: '糖吃太多对牙不好。', structure: 'a piece of candy', grammar: '常不可数；颗粒可用 piece。', rationale: '锁住甜食义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many candies advice.', right: 'He gave me some candy.', reason: '说数量不稳时用 some candy 或 a piece of candy，不要乱加 advice 结构。', rule: 'candy 表食品时常不可数。', special: '不要和 candle 互换。' },
    ],
    quiz: [
        { id: 'candy.q1', senseId: 'candy.s1', errorType: 'meaning', type: '词义', prompt: 'candy 是：', options: ['糖果', '蜡烛', '手杖'], answer: '糖果', explain: 'candle 是蜡烛，cane 是手杖或茎。' },
        { id: 'candy.q2', senseId: 'candy.s1', errorType: 'confusable', type: '辨词', prompt: '能吃的甜食是：', options: ['candy', 'candle', 'canteen'], answer: 'candy', explain: 'canteen 是食堂。' },
        { id: 'candy.q3', senseId: 'candy.s1', errorType: 'grammar', type: '语法', prompt: '哪句更稳？', options: ['some candy', 'a candies', 'many candy as a count plural by default'], answer: 'some candy', explain: '食品总称常用不可数。' },
        { id: 'candy.q4', senseId: 'candy.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a piece of candy', 'a piece of candle', 'a slice of campus'], answer: 'a piece of candy', explain: '一颗糖用 a piece of candy。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['candle', 'cane'] },
  });

  D('cane', {
    etymology: {
      origin: '拉丁语 canna，希腊语 kanna「芦苇、空心茎」。细长中空的茎后来指手杖、藤条，也指甘蔗的茎。',
      prefix: null,
      root: { text: 'cane', gloss: '手杖' },
      suffix: null,
      history: [
        { label: '芦苇', text: 'canna 与 canal「管道」常被联系起来：都是空心的。' },
        { label: '现在', text: '现在指手杖、藤条，或甘蔗茎。' },
      ],
      formationLogic: '借词。sugar cane 是甘蔗。',
      mnemonic: '一根空心杆：走路时是手杖，地里长着就是甘蔗茎。',
      note: 'a walking cane。不要和 canine「犬的」看混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He leaned on a cane after the operation.', chinese: '手术后他拄着手杖。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'cane.s1', en: 'Sugar comes from the juice of the cane.', zh: '糖取自甘蔗茎的汁。', structure: 'a cane', grammar: '可数名词。', rationale: '锁住手杖或茎。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The dog is a cane animal.', right: 'The dog is a canine animal.', reason: '犬的是 canine，cane 是棍子或茎。', rule: '差一个字母。', special: 'sugar cane 不要写成 sugar canine。' },
    ],
    quiz: [
        { id: 'cane.q1', senseId: 'cane.s1', errorType: 'meaning', type: '词义', prompt: 'cane 可以是：', options: ['手杖、藤条或甘蔗茎', '犬科动物', '食堂'], answer: '手杖、藤条或甘蔗茎', explain: 'canine 才与狗有关。' },
        { id: 'cane.q2', senseId: 'cane.s1', errorType: 'confusable', type: '辨词', prompt: '拄着走路的是：', options: ['cane', 'canine', 'canon'], answer: 'cane', explain: 'canine 是犬的。' },
        { id: 'cane.q3', senseId: 'cane.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a wooden cane', 'a wooden canes', 'wooden a cane'], answer: 'a wooden cane', explain: '单数冠词 a。' },
        { id: 'cane.q4', senseId: 'cane.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['sugar cane', 'sugar canine', 'sugar cancel'], answer: 'sugar cane', explain: '甘蔗是 sugar cane。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['canine', 'candy'] },
  });

  D('canine', {
    etymology: {
      origin: '拉丁语 caninus「狗的」，来自 canis「狗」。英语 canine 形容与狗有关的事物，也可作名词指犬科动物或犬齿。',
      prefix: null,
      root: { text: 'canine', gloss: '犬的' },
      suffix: null,
      history: [
        { label: '拉丁 canis', text: 'canis 就是狗，不是手杖 cane。' },
        { label: '现在', text: '现在表示犬的，或指犬科动物。' },
      ],
      formationLogic: '拉丁形容词借入。本条词性是 adjective，名词用法也常见。',
      mnemonic: 'canine 里有 canis：看到狗就想到这个词。',
      note: 'canine teeth 是犬齿。不要写成 cane teeth。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The museum has a skeleton of a canine animal.', chinese: '博物馆里有一具犬科动物的骨架。' },
    ],
    contexts: [
      { domain: '生物', senseId: 'canine.s1', en: 'Wolves are canine animals.', zh: '狼属于犬科。', structure: 'canine + 名词', grammar: '形容词，也可名词化指动物。', rationale: '锁住与狗有关。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He walked with a canine after the injury.', right: 'He walked with a cane after the injury.', reason: '手杖是 cane；canine 不是支撑物。', rule: '两个词不能互换。', special: '犬齿才是 canine tooth。' },
    ],
    quiz: [
        { id: 'canine.q1', senseId: 'canine.s1', errorType: 'meaning', type: '词义', prompt: 'canine 与什么有关？', options: ['狗或犬科', '甘蔗', '蜡烛'], answer: '狗或犬科', explain: 'cane 是茎或手杖。' },
        { id: 'canine.q2', senseId: 'canine.s1', errorType: 'confusable', type: '辨词', prompt: '狼可以用哪个词描述？', options: ['canine', 'cane', 'candy'], answer: 'canine', explain: 'cane 与狗无关。' },
        { id: 'canine.q3', senseId: 'canine.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['canine teeth', 'teeth canine the', 'a canine teeths'], answer: 'canine teeth', explain: '形容词放在名词前，teeth 已是复数。' },
        { id: 'canine.q4', senseId: 'canine.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['canine teeth', 'canine sugar', 'canine candle'], answer: 'canine teeth', explain: '犬齿是 canine teeth。' },
    ],
    usage: { domains: ['生物'], tone: '中性', commonConfusion: ['cane', 'dog'] },
  });

  D('canned food', {
    etymology: {
      origin: '英语复合词：名词 can「金属罐」加过去分词 canned「装进罐里的」，再加 food。can 这条名词线来自古英语 canne「容器」，不是情态动词那条线。',
      prefix: null,
      root: { text: 'canned food', gloss: '罐头食品' },
      suffix: null,
      history: [
        { label: 'can + -ed + food', text: 'canned 表示已密封在罐中。' },
        { label: '现在', text: '现在指罐头食品，开罐前可以存放。' },
      ],
      formationLogic: '现代英语复合，不要编古代词根。',
      mnemonic: 'food 进了 can，就成 canned food。',
      note: '不可数或集合：some canned food。一件是 a can of food。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We packed canned food for the long hike.', chinese: '我们为长途徒步装了罐头食品。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'canned food.s1', en: 'Canned food keeps for months if the seal is good.', zh: '密封良好的话，罐头食品可以放几个月。', structure: 'canned food', grammar: '名词短语，food 常不可数。', rationale: '锁住密封食品。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'We bought three canned foods for one tin.', right: 'We bought three cans of food.', reason: '具体罐数用 cans of food，不把 foods 当罐子计数。', rule: 'can 可数，food 常不可数。', special: '不要写成 can food 当完成时。' },
    ],
    quiz: [
        { id: 'canned food.q1', senseId: 'canned food.s1', errorType: 'meaning', type: '词义', prompt: 'canned food 是：', options: ['罐头食品', '野营帐篷', '新鲜沙拉专名'], answer: '罐头食品', explain: 'canned 是装罐的。' },
        { id: 'canned food.q2', senseId: 'canned food.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个已经密封在罐里？', options: ['canned food', 'candle', 'candy bar only as wax'], answer: 'canned food', explain: '蜡烛不是食品。' },
        { id: 'canned food.q3', senseId: 'canned food.s1', errorType: 'grammar', type: '语法', prompt: '哪句更自然？', options: ['some canned food', 'a canned food cans', 'many canned foodses'], answer: 'some canned food', explain: '食品总称常用 some。' },
        { id: 'canned food.q4', senseId: 'canned food.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['open a can of food', 'open a campus of food', 'cancel a food'], answer: 'open a can of food', explain: '开一罐用 open a can。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['can', 'food'] },
  });

  D('cannon', {
    etymology: {
      origin: '意大利语 cannone「大管子」，是 canna「芦苇、管子」的增大形式。粗管发射弹丸，英语里成为大炮。',
      prefix: null,
      root: { text: 'cannon', gloss: '大炮' },
      suffix: null,
      history: [
        { label: '大管子', text: '与 cane、canal 那支「空心管」有关，但是武器。' },
        { label: '现在', text: '现在指加农炮、大炮。' },
      ],
      formationLogic: '意大利语增大后缀进入英语。注意双写 n，不是 canon「正典」。',
      mnemonic: '炮管就是一根大管子：cannon 比 cane 粗得多。',
      note: '复数可与单数同形 cannons 或 cannon。canon 少一个 n，是准则或正经。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The old cannon stands in the town square.', chinese: '那门旧炮立在镇广场上。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'cannon.s1', en: 'A cannon needed a team of soldiers to move it.', zh: '一门大炮要一队士兵才搬得动。', structure: 'a cannon', grammar: '可数名词。', rationale: '锁住火炮义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The church canon fired at the ship.', right: 'The cannon fired at the ship.', reason: '开火的炮是 cannon；canon 是正典或准则。', rule: '双写 n 才是炮。', special: '不要和 canyon 峡谷混淆。' },
    ],
    quiz: [
        { id: 'cannon.q1', senseId: 'cannon.s1', errorType: 'meaning', type: '词义', prompt: 'cannon 是：', options: ['大炮', '峡谷', '准则或正经'], answer: '大炮', explain: 'canyon 是峡谷，canon 是准则。' },
        { id: 'cannon.q2', senseId: 'cannon.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个是武器？', options: ['cannon', 'canon', 'canyon'], answer: 'cannon', explain: '拼写差一个 n 或一个字母。' },
        { id: 'cannon.q3', senseId: 'cannon.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two cannons', 'two cannonn', 'a cannons'], answer: 'two cannons', explain: '复数可加 -s。' },
        { id: 'cannon.q4', senseId: 'cannon.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['fire a cannon', 'fire a canon text', 'fire a candy'], answer: 'fire a cannon', explain: '开炮用 fire。' },
    ],
    usage: { domains: ['历史'], tone: '中性', commonConfusion: ['canon', 'canyon'] },
  });

  D('cannot', {
    etymology: {
      origin: '英语把情态动词 can 与否定词 not 连写。can 来自古英语 cunnan「知道怎样」。cannot 就是「不能、无法」，不是新的拉丁词根。',
      prefix: null,
      root: { text: 'cannot', gloss: '不能' },
      suffix: null,
      history: [
        { label: 'can + not', text: '连写后仍是情态否定。' },
        { label: '现在', text: '现在表示没有能力、不可能或不允许。' },
      ],
      formationLogic: '英语内部合写。分开的 can not 有时强调 not，考试先认 cannot 与 can not 都否定。',
      mnemonic: 'cannot 就是 can 后面紧紧跟着 not。',
      note: '后接动词原形：cannot go。缩写是 can not 的 cant 常写成 can t，本条不要和名词 cant「行话」混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I cannot open this file without the password.', chinese: '没有密码我打不开这个文件。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'cannot.s1', en: 'We cannot finish the lab in ten minutes.', zh: '我们无法在十分钟内做完实验。', structure: 'cannot + 原形', grammar: '情态动词否定，无人称变化。', rationale: '锁住不可能。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cannot to leave early.', right: 'She cannot leave early.', reason: 'cannot 后仍不加 to。', rule: 'cannot + 动词原形。', special: '不要写成 cannot leaving。' },
    ],
    quiz: [
        { id: 'cannot.q1', senseId: 'cannot.s1', errorType: 'meaning', type: '词义', prompt: 'cannot 是：', options: ['不能或无法', '可以', '罐头'], answer: '不能或无法', explain: '它是 can 的否定。' },
        { id: 'cannot.q2', senseId: 'cannot.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个表示做不到？', options: ['cannot', 'can', 'cant as jargon'], answer: 'cannot', explain: '名词 cant 是行话，不是不能。' },
        { id: 'cannot.q3', senseId: 'cannot.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['They cannot swim.', 'They cannot to swim.', 'They cannot swimming.'], answer: 'They cannot swim.', explain: '后面用原形。' },
        { id: 'cannot.q4', senseId: 'cannot.s1', errorType: 'context', type: '语境', prompt: 'I cannot agree 的语气是：', options: ['否定能力或可能性', '同意', '开炮'], answer: '否定能力或可能性', explain: '不是 cannon。' },
    ],
    usage: { domains: ['语法'], tone: '中性', commonConfusion: ['can', 'cant'] },
  });

  D('canoe', {
    etymology: {
      origin: '西班牙语 canoa，来自加勒比海阿拉瓦克语，指一种窄而轻、用桨划的小船。英语十六世纪借入，可作名词或动词。',
      prefix: null,
      root: { text: 'canoe', gloss: '独木舟' },
      suffix: null,
      history: [
        { label: '加勒比借词', text: '不是希腊或拉丁的「管子」词，不要往 cane 上编。' },
        { label: '现在', text: '现在指独木舟，动词是划独木舟。' },
      ],
      formationLogic: '美洲语言经西班牙语进入英语。',
      mnemonic: 'canoe 两个 o 像船两侧，中间是窄窄的船身。',
      note: 'paddle a canoe。动词过去式 canoed。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They paddled a canoe across the quiet lake.', chinese: '他们划着独木舟穿过平静的湖。' },
    ],
    contexts: [
      { domain: '户外', senseId: 'canoe.s1', en: 'A canoe is light enough for two people to carry.', zh: '独木舟很轻，两个人抬得动。', structure: 'a canoe', grammar: '可数名词；动词 canoe。', rationale: '锁住小船义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'We drove a canoe with a wheel.', right: 'We paddled a canoe.', reason: '独木舟用桨 paddle，不是 drive。', rule: 'paddle a canoe。', special: '不要和 car 的 drive 混。' },
    ],
    quiz: [
        { id: 'canoe.q1', senseId: 'canoe.s1', errorType: 'meaning', type: '词义', prompt: 'canoe 是：', options: ['独木舟', '大炮', '峡谷'], answer: '独木舟', explain: 'cannon、canyon 只是形近。' },
        { id: 'canoe.q2', senseId: 'canoe.s1', errorType: 'confusable', type: '辨词', prompt: '用桨划的小船是：', options: ['canoe', 'cannon', 'canon'], answer: 'canoe', explain: 'cannon 是炮。' },
        { id: 'canoe.q3', senseId: 'canoe.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two canoes', 'two canoe', 'a canoes'], answer: 'two canoes', explain: '可数复数加 -s。' },
        { id: 'canoe.q4', senseId: 'canoe.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['paddle a canoe', 'paddle a cannon', 'ride a canoe like a camel'], answer: 'paddle a canoe', explain: '标准搭配是 paddle。' },
    ],
    usage: { domains: ['户外'], tone: '中性', commonConfusion: ['cannon', 'boat'] },
  });

  D('canopy', {
    etymology: {
      origin: '希腊语 konopeion「蚊帐」，来自 konops「蚊子」。布罩后来指床罩、华盖、棚顶，生态上又指森林的树冠层。',
      prefix: null,
      root: { text: 'canopy', gloss: '罩篷' },
      suffix: null,
      history: [
        { label: '蚊帐', text: '古希腊用细布挡蚊子，名字带「蚊子」。' },
        { label: '现在', text: '现在指罩篷，或树林上层连成的冠层。' },
      ],
      formationLogic: '希腊借词经拉丁、法语进入英语。',
      mnemonic: 'canopy 原来是罩在头上挡蚊子的布，现在仍是头上的一层盖。',
      note: 'under the canopy；forest canopy 是树冠层。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We ate under a canvas canopy.', chinese: '我们在帆布罩篷下吃饭。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'canopy.s1', en: 'Birds moved through the forest canopy.', zh: '鸟在森林树冠层里活动。', structure: 'a canopy', grammar: '可数名词。', rationale: '锁住覆盖层。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The forest cannon blocked the light.', right: 'The forest canopy blocked the light.', reason: '挡光的树冠是 canopy，不是 cannon。', rule: '生态义仍是「上层覆盖」。', special: '不要和 canyon 混淆。' },
    ],
    quiz: [
        { id: 'canopy.q1', senseId: 'canopy.s1', errorType: 'meaning', type: '词义', prompt: 'canopy 可以指：', options: ['罩篷或树冠层', '独木舟', '大炮'], answer: '罩篷或树冠层', explain: '头上的一层覆盖。' },
        { id: 'canopy.q2', senseId: 'canopy.s1', errorType: 'confusable', type: '辨词', prompt: '森林顶部的枝叶层是：', options: ['canopy', 'canyon', 'canoe'], answer: 'canopy', explain: 'canyon 是地面上的峡谷。' },
        { id: 'canopy.q3', senseId: 'canopy.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['under the canopy', 'under canopy the', 'a canopies'], answer: 'under the canopy', explain: '介词短语用 the canopy。' },
        { id: 'canopy.q4', senseId: 'canopy.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['the forest canopy', 'the forest cannon', 'the forest candy'], answer: 'the forest canopy', explain: '树冠层固定用 canopy。' },
    ],
    usage: { domains: ['自然'], tone: '中性', commonConfusion: ['canyon', 'cover'] },
  });

  D('cant', {
    etymology: {
      origin: '这个「行话、黑话」义，常被联系到拉丁语 cantare「唱」：某种拉长调子、外人听不懂的说法。具体传入路径有争议，教学上不要再编更早的假词根。它和情态动词 can 的否定缩写不是一个词。',
      prefix: null,
      root: { text: 'cant', gloss: '行话' },
      suffix: null,
      history: [
        { label: '唱腔式说话', text: 'cantare 是「唱」，行话义是后起的专门用法。' },
        { label: '现在', text: '现在指某一群体的行话、黑话。' },
      ],
      formationLogic: '来源只能说到「与 cantare 有关」这一常见解释，细节不必装得很满。',
      mnemonic: 'cant 像唱给自己人听的调子，外人听成黑话。',
      note: '不可数居多。thieves cant 是盗贼黑话。不要写成 cannot。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Legal cant made the contract hard to read.', chinese: '法律行话让这份合同很难读。' },
    ],
    contexts: [
      { domain: '语言', senseId: 'cant.s1', en: 'Every trade has its own cant.', zh: '每个行当都有自己的行话。', structure: '不可数名词居多', grammar: '名词，不是情态动词。', rationale: '锁住行话义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'I cant understand the form.', right: 'I cannot understand the form.', reason: '「不能」要写 cannot 或 can not。cant 在本条是名词行话。', rule: '否定能力不要漏字母 o 或写成行话词。', special: '口语缩写另计，本条词条是名词。' },
    ],
    quiz: [
        { id: 'cant.q1', senseId: 'cant.s1', errorType: 'meaning', type: '词义', prompt: '本条 cant 是：', options: ['行话或黑话', '不能', '大炮'], answer: '行话或黑话', explain: 'cannot 才是否定。' },
        { id: 'cant.q2', senseId: 'cant.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个是一类难懂的话？', options: ['cant', 'cannot', 'canoe'], answer: 'cant', explain: 'canoe 是船。' },
        { id: 'cant.q3', senseId: 'cant.s1', errorType: 'grammar', type: '语法', prompt: '哪句把 cant 当名词？', options: ['the cant of lawyers', 'they cant to leave', 'cant swim'], answer: 'the cant of lawyers', explain: '后两句是把否定动词写错了。' },
        { id: 'cant.q4', senseId: 'cant.s1', errorType: 'context', type: '语境', prompt: 'outsiders could not follow their cant 里 cant 是：', options: ['圈内说法', '独木舟', '树冠'], answer: '圈内说法', explain: '语境是听不懂的话。' },
    ],
    usage: { domains: ['语言'], tone: '中性', commonConfusion: ['cannot', 'jargon'] },
  });

  D('canteen', {
    etymology: {
      origin: '法语 cantine，意大利语 cantina「地窖、酒窖」。先指存放饮食的地方，再指工厂、学校供应饭食的食堂，也可指饭盒或水壶。',
      prefix: null,
      root: { text: 'canteen', gloss: '食堂' },
      suffix: null,
      history: [
        { label: '地窖', text: 'cantina 原是储藏酒和食物的地下室。' },
        { label: '现在', text: '现在在英式英语里常指单位食堂，也可指小卖部或饭盒。' },
      ],
      formationLogic: '罗曼语借词，不是 can + teen。',
      mnemonic: 'canteen 从存食物的地窖，变成打饭的地方。',
      note: 'school canteen。美式对应常说 cafeteria。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Students queued in the canteen at noon.', chinese: '中午学生们在食堂排队。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'canteen.s1', en: 'The canteen serves a hot meal at lunch.', zh: '食堂午餐供应热菜。', structure: 'a canteen', grammar: '可数名词。', rationale: '锁住供餐处。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We ate in the canyon at school.', right: 'We ate in the canteen at school.', reason: '学校吃饭的地方是 canteen，canyon 是峡谷。', rule: '形近但场景不同。', special: '不要和 canvas 帆布混淆。' },
    ],
    quiz: [
        { id: 'canteen.q1', senseId: 'canteen.s1', errorType: 'meaning', type: '词义', prompt: 'canteen 常指：', options: ['食堂或饭盒', '峡谷', '帆布'], answer: '食堂或饭盒', explain: '本条是饮食场所或容器。' },
        { id: 'canteen.q2', senseId: 'canteen.s1', errorType: 'confusable', type: '辨词', prompt: '学校打饭的地方是：', options: ['canteen', 'canyon', 'candle'], answer: 'canteen', explain: 'candle 是蜡烛。' },
        { id: 'canteen.q3', senseId: 'canteen.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['in the canteen', 'in canteen the', 'a canteens'], answer: 'in the canteen', explain: '地点用 in the canteen。' },
        { id: 'canteen.q4', senseId: 'canteen.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['eat in the canteen', 'eat in the cannon', 'eat a canteen of desert'], answer: 'eat in the canteen', explain: '食堂是吃饭的场所。' },
    ],
    usage: { domains: ['校园'], tone: '中性', commonConfusion: ['cafeteria', 'canyon'] },
  });

  D('canvas', {
    etymology: {
      origin: '拉丁语 cannabis「大麻」，经法语 canevas，原指大麻纤维织的粗布。粗布用来做帆和帐篷，画家又在这种布上作画，于是也指油画布和画作。',
      prefix: null,
      root: { text: 'canvas', gloss: '帆布' },
      suffix: null,
      history: [
        { label: '大麻纤维布', text: '布料名后来转到画布。' },
        { label: '现在', text: '现在指帆布、油画布，也可指一幅油画。' },
      ],
      formationLogic: '与植物 cannabis 同源，不是 can + vas。动词 canvass 多一个 s，意思是拉票。',
      mnemonic: 'canvas 原是粗麻布，帆和画都绷在这种布上。',
      note: '不可数指布料：a piece of canvas；一幅画可数：a canvas by her teacher。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The tent is made of heavy canvas.', chinese: '帐篷用厚帆布做成。' },
    ],
    contexts: [
      { domain: '艺术', senseId: 'canvas.s1', en: 'He stretched the canvas before painting.', zh: '作画前他把油画布绷好。', structure: 'canvas 布料或画布', grammar: '名词。', rationale: '锁住粗布或画布。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Volunteers will canvas the streets means cloth.', right: 'Volunteers will canvass the streets.', reason: '拉票是 canvass，布是 canvas。', rule: '一个 s 是布，两个 s 常是游说。', special: '不要和 canteen 混淆。' },
    ],
    quiz: [
        { id: 'canvas.q1', senseId: 'canvas.s1', errorType: 'meaning', type: '词义', prompt: 'canvas 是：', options: ['帆布、油画布或画作', '拉票', '食堂'], answer: '帆布、油画布或画作', explain: 'canvass 才是拉票。' },
        { id: 'canvas.q2', senseId: 'canvas.s1', errorType: 'confusable', type: '辨词', prompt: '画画绷着的布是：', options: ['canvas', 'canvass', 'canteen'], answer: 'canvas', explain: 'canvass 是动词游说。' },
        { id: 'canvas.q3', senseId: 'canvas.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a piece of canvas', 'a piece of canvases cloth', 'an canvas'], answer: 'a piece of canvas', explain: '布料不可数用 a piece of；canvas 以辅音开头用 a。' },
        { id: 'canvas.q4', senseId: 'canvas.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['oil on canvas', 'oil on canvass votes', 'oil on canyon'], answer: 'oil on canvas', explain: '油画说 oil on canvas。' },
    ],
    usage: { domains: ['艺术'], tone: '中性', commonConfusion: ['canvass', 'canteen'] },
  });

  D('canvass', {
    etymology: {
      origin: '与 canvas「粗布」同源。早期有「在粗布里抛掷、细查」的意思，后来转到逐户上门争取选票或意见。拼写通常比名词多一个 s。',
      prefix: null,
      root: { text: 'canvass', gloss: '拉票' },
      suffix: null,
      history: [
        { label: '由粗布转到上门', text: '布名 canvas 分化出动词 canvass。' },
        { label: '现在', text: '现在指拉票、游说、征求意见。' },
      ],
      formationLogic: '英语词义扩展，不是新的希腊词根。英式有时名词帆布也拼 canvass，考试先把动词记成两个 s。',
      mnemonic: 'canvass 是拿着话题一家家问，像把布抖开给人看。',
      note: 'canvass voters / canvass for votes。不要写成 canvas the voters 当标准动词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Volunteers canvassed the neighborhood for votes.', chinese: '志愿者在社区拉票。' },
    ],
    contexts: [
      { domain: '政治', senseId: 'canvass.s1', en: 'They canvassed local opinion before the vote.', zh: '投票前他们征求了当地意见。', structure: 'canvass + 人或地区', grammar: '规则动词。', rationale: '锁住拉票义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They canvas votes on a painting.', right: 'They canvassed for votes.', reason: '拉票用 canvass，布上作画才用 canvas。', rule: 'canvass for votes。', special: '拼写少 s 会变成布。' },
    ],
    quiz: [
        { id: 'canvass.q1', senseId: 'canvass.s1', errorType: 'meaning', type: '词义', prompt: 'canvass 作为动词是：', options: ['拉票或游说', '帆布本身', '癌症'], answer: '拉票或游说', explain: '名词布是 canvas。' },
        { id: 'canvass.q2', senseId: 'canvass.s1', errorType: 'confusable', type: '辨词', prompt: '上门要选票用：', options: ['canvass', 'canvas', 'cancer'], answer: 'canvass', explain: 'cancer 是癌症。' },
        { id: 'canvass.q3', senseId: 'canvass.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['They canvassed the district.', 'They canvassed to the district.', 'They canvas the district yesterday without -ed.'], answer: 'They canvassed the district.', explain: '过去式 -ed，宾语直接跟动词。' },
        { id: 'canvass.q4', senseId: 'canvass.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['canvass for votes', 'canvass for canvas boats only', 'cancel for votes'], answer: 'canvass for votes', explain: '争取选票用 for votes。' },
    ],
    usage: { domains: ['政治'], tone: '中性', commonConfusion: ['canvas', 'campaign'] },
  });

  D('canyon', {
    etymology: {
      origin: '西班牙语 canon（cañón）「管子、峡谷」。深而窄的谷地像一根切开大地的管子。英语拼成 canyon。与 cannon「大炮」词源相近，都和「管」有关，但意思不同。',
      prefix: null,
      root: { text: 'canyon', gloss: '峡谷' },
      suffix: null,
      history: [
        { label: '西班牙语峡谷', text: '西语用管子比喻两壁陡直的谷。' },
        { label: '现在', text: '现在指峡谷。' },
      ],
      formationLogic: '地名用词，美国西部常用。不要双写 n 当成炮。',
      mnemonic: 'canyon 是大地裂开的深槽，河在槽底流。',
      note: 'the Grand Canyon。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The river runs along the floor of the canyon.', chinese: '河在峡谷底部流淌。' },
    ],
    contexts: [
      { domain: '地理', senseId: 'canyon.s1', en: 'A narrow canyon lay between the cliffs.', zh: '悬崖之间有一条狭窄的峡谷。', structure: 'a canyon', grammar: '可数名词。', rationale: '锁住地形义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The army fired a canyon.', right: 'The army fired a cannon.', reason: '开炮用 cannon；canyon 不能开火。', rule: '一个 n 对两个 n。', special: 'canteen 是食堂。' },
    ],
    quiz: [
        { id: 'canyon.q1', senseId: 'canyon.s1', errorType: 'meaning', type: '词义', prompt: 'canyon 是：', options: ['峡谷', '大炮', '食堂'], answer: '峡谷', explain: '地形，不是武器。' },
        { id: 'canyon.q2', senseId: 'canyon.s1', errorType: 'confusable', type: '辨词', prompt: '河水流过的深谷是：', options: ['canyon', 'cannon', 'canoe'], answer: 'canyon', explain: 'canoe 是船，可以在河里，但不是谷。' },
        { id: 'canyon.q3', senseId: 'canyon.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a deep canyon', 'a deep canyons', 'an canyon'], answer: 'a deep canyon', explain: '单数 a，canyon 辅音开头。' },
        { id: 'canyon.q4', senseId: 'canyon.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['the floor of the canyon', 'the floor of the cannon', 'the floor of the candy'], answer: 'the floor of the canyon', explain: '谷底用 floor of the canyon。' },
    ],
    usage: { domains: ['地理'], tone: '中性', commonConfusion: ['cannon', 'valley'] },
  });

  D('cap', {
    etymology: {
      origin: '拉丁语 cappa「带帽兜的斗篷、帽」。英语 cap 指无檐或有帽舌的软帽，引申为瓶盖、上限，动词表示加盖或封顶。',
      prefix: null,
      root: { text: 'cap', gloss: '帽子' },
      suffix: null,
      history: [
        { label: '拉丁 cappa', text: '与 cape「斗篷」同源，但 cap 更小，扣在头上或口上。' },
        { label: '现在', text: '现在指帽子、盖子、上限，动词是加盖或设上限。' },
      ],
      formationLogic: '同一拉丁词分化出 cap 与 cape。',
      mnemonic: 'cap 扣在最上头：头上、瓶口上，或数字的顶上。',
      note: 'a baseball cap；a cap on spending 是支出上限。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He put the cap back on the bottle.', chinese: '他把瓶盖盖了回去。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'cap.s1', en: 'There is a cap on how many students can enroll.', zh: '招生人数有上限。', structure: 'a cap', grammar: '可数名词；动词 cap。', rationale: '锁住覆盖或上限。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Please cap on the pen.', right: 'Please put the cap on the pen.', reason: '盖上用 put the cap on，不要只说 cap on 当完整谓语又漏动词。', rule: 'put the cap on。', special: '上限义用 put a cap on。' },
    ],
    quiz: [
        { id: 'cap.q1', senseId: 'cap.s1', errorType: 'meaning', type: '词义', prompt: 'cap 可以是：', options: ['帽子、盖子或上限', '斗篷海角', '船长'], answer: '帽子、盖子或上限', explain: 'cape 是披肩或海角，captain 是船长。' },
        { id: 'cap.q2', senseId: 'cap.s1', errorType: 'confusable', type: '辨词', prompt: '瓶口上的小盖是：', options: ['cap', 'cape', 'capital'], answer: 'cap', explain: 'cape 更大，是披肩或海角。' },
        { id: 'cap.q3', senseId: 'cap.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two caps', 'two cap', 'a caps'], answer: 'two caps', explain: '可数复数加 -s。' },
        { id: 'cap.q4', senseId: 'cap.s1', errorType: 'collocation', type: '搭配', prompt: '哪组可以表示设上限？', options: ['put a cap on costs', 'put a cape on costs', 'put a candy on costs'], answer: 'put a cap on costs', explain: 'cap 有上限义。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['cape', 'capital'] },
  });

  D('capability', {
    etymology: {
      origin: '来自 capable，加名词后缀 -ity。capable 经法语回到拉丁语 capere「抓住、容纳」。capability 是能够做成某事的程度，也可指机器性能。',
      prefix: null,
      root: { text: 'capability', gloss: '能力' },
      suffix: null,
      history: [
        { label: 'capable + -ity', text: '-ity 把形容词变成抽象名词。' },
        { label: '现在', text: '现在指能力、才能或设备性能。' },
      ],
      formationLogic: '英语派生。词根义是「拿得住、做得了」。',
      mnemonic: 'capable 是做得到，capability 是这份做得到的本事。',
      note: 'the capability to do something / capability of doing。常可数可不可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The phone has the capability to scan documents.', chinese: '这部手机具备扫描文件的功能。' },
    ],
    contexts: [
      { domain: '技术', senseId: 'capability.s1', en: 'The team showed the capability to finish on time.', zh: '团队表现出按时完成的能力。', structure: 'capability to do / of doing', grammar: '抽象名词。', rationale: '锁住能力义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She has the capability do the job.', right: 'She has the capability to do the job.', reason: '后面接 to do，不能把动词原形直接粘上。', rule: 'capability to do。', special: '形容词 capable 则用 capable of doing。' },
    ],
    quiz: [
        { id: 'capability.q1', senseId: 'capability.s1', errorType: 'meaning', type: '词义', prompt: 'capability 是：', options: ['能力或性能', '首都', '帽子'], answer: '能力或性能', explain: 'capital 是首都或资本，cap 是帽子。' },
        { id: 'capability.q2', senseId: 'capability.s1', errorType: 'confusable', type: '辨词', prompt: '机器的性能用：', options: ['capability', 'capacity as a bottle size only', 'captain'], answer: 'capability', explain: 'captain 是人。capacity 偏容量或身份，本条问性能更贴近 capability。' },
        { id: 'capability.q3', senseId: 'capability.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['the capability to learn', 'the capability learn', 'a capability learn'], answer: 'the capability to learn', explain: '用 to + 原形。' },
        { id: 'capability.q4', senseId: 'capability.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['military capability', 'military cap of a bottle', 'military candy'], answer: 'military capability', explain: '军力常用 military capability。' },
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['capable', 'capacity'] },
  });

  D('capable', {
    etymology: {
      origin: '法语 capable，拉丁语 capabilis，来自 capere「拿、取、握住」。握得住，就是有能力承担。',
      prefix: null,
      root: { text: 'capable', gloss: '有能力的' },
      suffix: null,
      history: [
        { label: '拉丁 capere', text: '抓得住，引申为胜任。' },
        { label: '现在', text: '现在表示有能力的、能干的。' },
      ],
      formationLogic: '形容词。名词是 capability 或 capacity，动词概念用 can。',
      mnemonic: 'capable 的人拿得起这件事。',
      note: 'capable of doing，不是 capable to do。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She is capable of leading the group.', chinese: '她有能力带领这个小组。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'capable.s1', en: 'He is a capable engineer.', zh: '他是一位能干的工程师。', structure: 'capable of + -ing', grammar: '形容词。', rationale: '锁住胜任义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She is capable to fix it.', right: 'She is capable of fixing it.', reason: 'capable 后接 of + -ing，不接 to do。', rule: 'capable of doing。', special: 'can 才直接接原形。' },
    ],
    quiz: [
        { id: 'capable.q1', senseId: 'capable.s1', errorType: 'meaning', type: '词义', prompt: 'capable 是：', options: ['有能力的', '只是帽子', '癌症的'], answer: '有能力的', explain: '不要和 cap、cancer 看形近。' },
        { id: 'capable.q2', senseId: 'capable.s1', errorType: 'confusable', type: '辨词', prompt: '能干用：', options: ['capable', 'cape', 'candy'], answer: 'capable', explain: 'cape 是衣物或海角。' },
        { id: 'capable.q3', senseId: 'capable.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['capable of swimming', 'capable to swim', 'capable swim'], answer: 'capable of swimming', explain: '固定 of + -ing。' },
        { id: 'capable.q4', senseId: 'capable.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a capable student', 'a capable of student', 'a student capable swim'], answer: 'a capable student', explain: '形容词放在名词前。' },
    ],
    usage: { domains: ['职场'], tone: '中性', commonConfusion: ['capability', 'able'] },
  });

  D('capacity', {
    etymology: {
      origin: '拉丁语 capacitas，来自 capax「容得下的」，仍与 capere「拿、容纳」同源。所以既指容器容量，也指人的能力，还可指身份、职位。',
      prefix: null,
      root: { text: 'capacity', gloss: '容量' },
      suffix: null,
      history: [
        { label: '容得下', text: 'capax 是装得下。' },
        { label: '现在', text: '现在指容量、能力，或某种身份。' },
      ],
      formationLogic: '与 capable 同族，但 capacity 更常讲「装多少、担任什么」。',
      mnemonic: 'capacity 问的是还能装下多少，或此人在什么位子上。',
      note: 'a capacity of 500；in his capacity as chair 是以主席身份。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The hall has a capacity of five hundred.', chinese: '这个厅能容纳五百人。' },
    ],
    contexts: [
      { domain: '数量', senseId: 'capacity.s1', en: 'She signed the letter in her capacity as director.', zh: '她以主任的身份在信上签了字。', structure: 'a capacity of / in ones capacity as', grammar: '名词。', rationale: '本条同时记住容量与身份，核心先锁容量与能力。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The tank has a capacity for 500 of people wrong pattern.', right: 'The hall has a capacity of 500.', reason: '容量数字常用 a capacity of。', rule: 'capacity of + 数量。', special: '身份义才用 in a capacity as。' },
    ],
    quiz: [
        { id: 'capacity.q1', senseId: 'capacity.s1', errorType: 'meaning', type: '词义', prompt: 'capacity 可以表示：', options: ['容量、能力或身份', '帽子', '战役'], answer: '容量、能力或身份', explain: '与 cap 只是开头像。' },
        { id: 'capacity.q2', senseId: 'capacity.s1', errorType: 'confusable', type: '辨词', prompt: '大厅能坐多少人，用：', options: ['capacity', 'capability of a moral person only', 'captain'], answer: 'capacity', explain: '人数上限更常说 capacity。' },
        { id: 'capacity.q3', senseId: 'capacity.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a capacity of 200', 'a capacity 200', 'capacities of a 200'], answer: 'a capacity of 200', explain: '数字前用 of。' },
        { id: 'capacity.q4', senseId: 'capacity.s1', errorType: 'context', type: '语境', prompt: 'in her capacity as judge 是：', options: ['以法官身份', '法官的帽子', '取消法官'], answer: '以法官身份', explain: 'capacity 这里不是容积。' },
    ],
    usage: { domains: ['数量'], tone: '中性', commonConfusion: ['capable', 'capability'] },
  });

  D('cape', {
    etymology: {
      origin: '衣服义来自拉丁语 cappa「兜帽斗篷」，与 cap 同源。地理义是另一条线：拉丁语 caput「头」，经法语 cap，指伸进海里的陆地尽头，像头伸出去。',
      prefix: null,
      root: { text: 'cape', gloss: '披肩' },
      suffix: null,
      history: [
        { label: '两条来源', text: '斗篷是 cappa；海角是 caput「头」。' },
        { label: '现在', text: '现在既指披肩、斗篷，也指海角。' },
      ],
      formationLogic: '不要合成一个假词根。看语境才能决定是衣服还是地形。',
      mnemonic: 'cape 要么披在肩上，要么是陆地伸进海里的那个「头」。',
      note: 'the Cape of Good Hope。衣服：a red cape。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She wore a wool cape in the wind.', chinese: '她在风里披着羊毛斗篷。' },
    ],
    contexts: [
      { domain: '地理', senseId: 'cape.s1', en: 'The ship sailed around the cape.', zh: '船绕过了海角。', structure: 'a cape', grammar: '可数名词，两义同形。', rationale: '本条先记斗篷，并记住海角是另一来源。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'He put on the Cape of Good Hope before going out.', right: 'He put on a cape before going out.', reason: '海角不能穿。衣服才用 put on a cape。', rule: '专名海角前通常有 the，且不能当衣服。', special: '两义不要串。' },
    ],
    quiz: [
        { id: 'cape.q1', senseId: 'cape.s1', errorType: 'meaning', type: '词义', prompt: 'cape 的两个常见意思是：', options: ['斗篷或海角', '瓶盖或上限', '首都'], answer: '斗篷或海角', explain: 'cap 与 capital 是别的词。' },
        { id: 'cape.q2', senseId: 'cape.s1', errorType: 'confusable', type: '辨词', prompt: '伸进海里的陆地是：', options: ['cape', 'cap', 'candy'], answer: 'cape', explain: 'cap 是帽子或盖。' },
        { id: 'cape.q3', senseId: 'cape.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a long cape', 'a long capes', 'an cape'], answer: 'a long cape', explain: '单数 a。' },
        { id: 'cape.q4', senseId: 'cape.s1', errorType: 'context', type: '语境', prompt: 'sail around the cape 里 cape 是：', options: ['海角', '斗篷', '能力'], answer: '海角', explain: 'sail 提示地理义。' },
    ],
    usage: { domains: ['地理'], tone: '中性', commonConfusion: ['cap', 'capital'] },
  });

  D('capital', {
    etymology: {
      origin: '拉丁语 capitalis「关于头的、首要的」，来自 caput「头」。城市的「头」是首都，资金的「本金」是资本，字母的大写也叫 capital，因为排在重要位置。',
      prefix: null,
      root: { text: 'capital', gloss: '首都' },
      suffix: null,
      history: [
        { label: '拉丁 caput', text: '头，引申为最重要的。' },
        { label: '现在', text: '现在指首都、资本、大写字母，形容词表示可处死刑的或首要的。' },
      ],
      formationLogic: '一个拉丁形容词分化出多义，都围绕「头等」。',
      mnemonic: 'capital 是排在最前、最要紧的那个：城、钱或字母。',
      note: 'capital city；capital letter；human capital。不要和 capitol 大厦混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Paris is the capital of France.', chinese: '巴黎是法国的首都。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'capital.s1', en: 'Start the sentence with a capital letter.', zh: '句子开头用大写字母。', structure: 'the capital of', grammar: '名词，多义。', rationale: '先锁首都，并记住资本与大写。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'They visited the capital building of Congress by mistake for the city.', right: 'Congress meets in the Capitol.', reason: '美国国会大厦是 Capitol。国家的首都城市是 capital。', rule: '一个 o 对一个 a。', special: 'Beijing is the capital，不是 capitol。' },
    ],
    quiz: [
        { id: 'capital.q1', senseId: 'capital.s1', errorType: 'meaning', type: '词义', prompt: 'capital 可以是：', options: ['首都、资本或大写字母', '国会大厦', '斗篷'], answer: '首都、资本或大写字母', explain: '大厦拼写是 capitol。' },
        { id: 'capital.q2', senseId: 'capital.s1', errorType: 'confusable', type: '辨词', prompt: '法国的首都用：', options: ['capital', 'capitol', 'captain'], answer: 'capital', explain: 'capitol 专指立法大厦。' },
        { id: 'capital.q3', senseId: 'capital.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['the capital of Japan', 'the capital Japan of', 'a capitals letter'], answer: 'the capital of Japan', explain: '国家名前用 of。' },
        { id: 'capital.q4', senseId: 'capital.s1', errorType: 'collocation', type: '搭配', prompt: '哪组表示大写？', options: ['a capital letter', 'a capitol letter', 'a captain letter'], answer: 'a capital letter', explain: '字母大写是 capital。' },
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['capitol', 'cap'] },
  });

  D('capitalize on', {
    etymology: {
      origin: '英语短语：动词 capitalize「把某物变成资本、加以利用」加介词 on。capitalize 来自 capital，capital 来自拉丁语 caput「头、本金」。',
      prefix: null,
      root: { text: 'capitalize on', gloss: '利用' },
      suffix: null,
      history: [
        { label: 'capital + -ize + on', text: '-ize 构成动词，on 引出被利用的情况。' },
        { label: '现在', text: '现在指利用某一形势为自己取得好处。' },
      ],
      formationLogic: '现代英语短语动词，不要另编古词根。',
      mnemonic: '把局面变成 capital：capitalize on 就是拿它当本钱。',
      note: '必须有 on。capitalize on a chance / an error。没有 on 时，capitalize 常指大写或资本化。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She capitalized on the delay to revise her notes.', chinese: '她利用耽搁的时间改笔记。' },
    ],
    contexts: [
      { domain: '策略', senseId: 'capitalize on.s1', en: 'The company capitalized on the warm winter.', zh: '公司利用了这个暖冬。', structure: 'capitalize on + 名词', grammar: '短语动词。', rationale: '锁住利用形势。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They capitalized the mistake.', right: 'They capitalized on the mistake.', reason: '「趁势利用」要加 on。不加 on 容易变成资金化或大写。', rule: 'capitalize on something。', special: '不要和 capital 名词互换。' },
    ],
    quiz: [
        { id: 'capitalize on.q1', senseId: 'capitalize on.s1', errorType: 'meaning', type: '词义', prompt: 'capitalize on 是：', options: ['利用某情况获利', '把城市迁都', '给瓶子加盖'], answer: '利用某情况获利', explain: '本条是短语动词。' },
        { id: 'capitalize on.q2', senseId: 'capitalize on.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个后面要接 on？', options: ['capitalize on', 'capital', 'capitol'], answer: 'capitalize on', explain: '后两个是名词。' },
        { id: 'capitalize on.q3', senseId: 'capitalize on.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['capitalize on the delay', 'capitalize the delay on', 'capital on the delay'], answer: 'capitalize on the delay', explain: '介词 on 紧跟动词。' },
        { id: 'capitalize on.q4', senseId: 'capitalize on.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['capitalize on an opportunity', 'capitalize on a camel ride as grammar', 'cap on an opportunity'], answer: 'capitalize on an opportunity', explain: '机会用 opportunity。' },
    ],
    usage: { domains: ['策略'], tone: '中性', commonConfusion: ['capital', 'exploit'] },
  });

  D('capitol', {
    etymology: {
      origin: '拉丁语 Capitolium，罗马卡皮托利山上的朱庇特神庙。美国用 Capitol 命名国会大厦，各州议会大楼也可叫 capitol。与 capital「首都」同出 caput「头」，但是专指建筑。',
      prefix: null,
      root: { text: 'capitol', gloss: '（美国）国会大厦' },
      suffix: null,
      history: [
        { label: '罗马山名', text: 'Capitolium 是具体的神庙与山，不是普通「首都」。' },
        { label: '现在', text: '现在多指美国国会大厦或州议会大厦。' },
      ],
      formationLogic: '专名借词。拼写含 o：capitol。',
      mnemonic: 'capitol 是一座楼，capital 是一座城或一笔钱。',
      note: 'the United States Capitol。英式有时也拼 Capitol。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Tourists photographed the dome of the Capitol.', chinese: '游客拍摄了国会大厦的圆顶。' },
    ],
    contexts: [
      { domain: '政治', senseId: 'capitol.s1', en: 'The state capitol is open to visitors.', zh: '州议会大厦对访客开放。', structure: 'the Capitol', grammar: '专有建筑名词，常大写。', rationale: '锁住立法大楼。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Washington is the capitol of the United States.', right: 'Washington is the capital of the United States.', reason: '首都用 capital。capitol 是大厦。', rule: '城用 a，楼用 o。', special: '不要互换。' },
    ],
    quiz: [
        { id: 'capitol.q1', senseId: 'capitol.s1', errorType: 'meaning', type: '词义', prompt: 'capitol 指：', options: ['美国国会或州议会大厦', '国家首都', '资本'], answer: '美国国会或州议会大厦', explain: '首都和资本是 capital。' },
        { id: 'capitol.q2', senseId: 'capitol.s1', errorType: 'confusable', type: '辨词', prompt: '圆顶大楼更可能是：', options: ['capitol', 'capital', 'captain'], answer: 'capitol', explain: 'captain 是人。' },
        { id: 'capitol.q3', senseId: 'capitol.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['the Capitol in Washington', 'a capitals in Washington', 'capitol of France as the city'], answer: 'the Capitol in Washington', explain: '建筑用 Capitol，法国首都不叫 capitol。' },
        { id: 'capitol.q4', senseId: 'capitol.s1', errorType: 'context', type: '语境', prompt: 'They met inside the capitol 最合理的是：', options: ['在议会大厦里开会', '在字母大写里开会', '在海角上开会'], answer: '在议会大厦里开会', explain: 'inside 提示建筑物。' },
    ],
    usage: { domains: ['政治'], tone: '中性', commonConfusion: ['capital', 'captain'] },
  });

  D('capitulate', {
    etymology: {
      origin: '中古拉丁语 capitulare「分条写出」，来自 capitulum「小标题」，再来自 caput「头」。先指按条款书面协议，后来专指按条件停止抵抗，即投降。',
      prefix: null,
      root: { text: 'capitulate', gloss: '投降' },
      suffix: null,
      history: [
        { label: '分条立约', text: 'capitulum 是章节小标题。' },
        { label: '现在', text: '现在指投降、屈服。' },
      ],
      formationLogic: '拉丁动词。名词是 capitulation。',
      mnemonic: '一条条条款写下来，然后放下武器：capitulate。',
      note: 'capitulate to an enemy。不要和 capital 首都混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The city capitulated after a long siege.', chinese: '城市在长期围困后投降。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'capitulate.s1', en: 'He refused to capitulate to pressure.', zh: '他拒绝在压力下屈服。', structure: 'capitulate to', grammar: '规则动词。', rationale: '锁住屈服义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They capitulated the enemy.', right: 'They capitulated to the enemy.', reason: '向谁屈服用 to，敌人不是直接宾语。', rule: 'capitulate to someone。', special: '不要写成及物动词加敌人。' },
    ],
    quiz: [
        { id: 'capitulate.q1', senseId: 'capitulate.s1', errorType: 'meaning', type: '词义', prompt: 'capitulate 是：', options: ['投降或屈服', '当选首都', '加盖'], answer: '投降或屈服', explain: '和 capital 同族但意思不同。' },
        { id: 'capitulate.q2', senseId: 'capitulate.s1', errorType: 'confusable', type: '辨词', prompt: '停止抵抗用：', options: ['capitulate', 'capitalize', 'capture'], answer: 'capitulate', explain: 'capture 是俘获，还没投降。' },
        { id: 'capitulate.q3', senseId: 'capitulate.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['capitulate to the stronger side', 'capitulate the stronger side', 'capitulating to yesterday as finite'], answer: 'capitulate to the stronger side', explain: '需要 to。' },
        { id: 'capitulate.q4', senseId: 'capitulate.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['capitulate to pressure', 'capitulate pressure on', 'capital to pressure'], answer: 'capitulate to pressure', explain: '压力前用 to。' },
    ],
    usage: { domains: ['历史'], tone: '中性', commonConfusion: ['capitulation', 'capture'] },
  });

  D('capitulation', {
    etymology: {
      origin: '来自 capitulate，拉丁语路径仍是 capitulum「条款、小标题」。名词表示投降这一行为或投降书。',
      prefix: null,
      root: { text: 'capitulation', gloss: '投降' },
      suffix: null,
      history: [
        { label: 'capitulate 的名词', text: '-ion  nominal 化。' },
        { label: '现在', text: '现在指投降、屈服。' },
      ],
      formationLogic: '英语名词后缀 -ation / -ion，不另造词根。教学上看成 capitulate 的名词。',
      mnemonic: 'capitulate 是动作，capitulation 是这一次投降。',
      note: '不可数或可数：the capitulation of the fort。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The capitulation ended the siege.', chinese: '投降结束了围城。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'capitulation.s1', en: 'Forced capitulation left the army bitter.', zh: '被迫投降让军队心怀怨愤。', structure: 'the capitulation of', grammar: '名词。', rationale: '锁住投降事件。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Their capitulation to fight continued.', right: 'Their capitulation ended the fight.', reason: 'capitulation 是名词，不能再当动词接 to fight 表示继续战斗。', rule: '名词作主语，谓语另找动词。', special: '动词用 capitulate。' },
    ],
    quiz: [
        { id: 'capitulation.q1', senseId: 'capitulation.s1', errorType: 'meaning', type: '词义', prompt: 'capitulation 是：', options: ['投降或屈服', '首都', '船长'], answer: '投降或屈服', explain: '名词形式。' },
        { id: 'capitulation.q2', senseId: 'capitulation.s1', errorType: 'confusable', type: '辨词', prompt: '哪一个是名词？', options: ['capitulation', 'capitulate', 'capital letter'], answer: 'capitulation', explain: 'capitulate 是动词。' },
        { id: 'capitulation.q3', senseId: 'capitulation.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['the capitulation of the city', 'the capitulation the city', 'a capitulate of the city'], answer: 'the capitulation of the city', explain: '所属用 of。' },
        { id: 'capitulation.q4', senseId: 'capitulation.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['sign a capitulation', 'sign a capitol', 'sign a candy'], answer: 'sign a capitulation', explain: '投降书可以 sign。' },
    ],
    usage: { domains: ['历史'], tone: '中性', commonConfusion: ['capitulate', 'treaty'] },
  });

  D('capsicum', {
    etymology: {
      origin: '近代拉丁语植物学名 Capsicum。词源没有完全定论：有人联系拉丁语 capsa「盒子」（果实中空），也有人联系希腊语 kapto「咬、辣」。教学上不要假装已有唯一古词根。',
      prefix: null,
      root: { text: 'capsicum', gloss: '甜椒' },
      suffix: null,
      history: [
        { label: '植物学新拉丁名', text: '十八世纪前后作为属名使用。' },
        { label: '现在', text: '现在指甜椒、辣椒这类果实。' },
      ],
      formationLogic: '科学命名，不是英语 cap 加 sicum 的复合。',
      mnemonic: 'capsicum 是中空或辛辣的椒，两个旧解释都只作参考。',
      note: '可数，指果实或植株。英式也说 pepper。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She sliced a red capsicum into the salad.', chinese: '她把一只红甜椒切进沙拉。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'capsicum.s1', en: 'Capsicum is common in this stir-fry.', zh: '这道炒菜里常放甜椒。', structure: 'a capsicum', grammar: '可数名词。', rationale: '锁住蔬菜义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Add some capsule to the salad.', right: 'Add some capsicum to the salad.', reason: '进沙拉的是椒 capsicum，胶囊是 capsule。', rule: '只差词尾。', special: '不要和 capital 混淆。' },
    ],
    quiz: [
        { id: 'capsicum.q1', senseId: 'capsicum.s1', errorType: 'meaning', type: '词义', prompt: 'capsicum 是：', options: ['甜椒或辣椒', '胶囊', '首都'], answer: '甜椒或辣椒', explain: 'capsule 是胶囊。' },
        { id: 'capsicum.q2', senseId: 'capsicum.s1', errorType: 'confusable', type: '辨词', prompt: '能切进菜里的是：', options: ['capsicum', 'capsule', 'capitol'], answer: 'capsicum', explain: 'capitol 是大厦。' },
        { id: 'capsicum.q3', senseId: 'capsicum.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two capsicums', 'two capsicum fruites', 'a capsicums'], answer: 'two capsicums', explain: '果实可数，复数加 -s。' },
        { id: 'capsicum.q4', senseId: 'capsicum.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['slice a capsicum', 'slice a capsule', 'slice a cannon'], answer: 'slice a capsicum', explain: '切片的是蔬菜。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['capsule', 'pepper'] },
  });

  D('capsize', {
    etymology: {
      origin: '词源没有把握。有人把它和西班牙语 capuzar「按进水里」联系起来，但词典通常仍标为来源不明。这里不编造希腊词根。意思清楚：船翻扣过来。',
      prefix: null,
      root: { text: 'capsize', gloss: '（船）倾覆' },
      suffix: null,
      history: [
        { label: '来源未定', text: '十六世纪左右出现在航海英语。' },
        { label: '现在', text: '现在指船倾覆、翻覆。' },
      ],
      formationLogic: '诚实处理：只记用法，不假装有 caput 之类的确定词根。也有人写名词 a capsize。',
      mnemonic: 'capsize 一看场景就是船底朝天。',
      note: '主语常是船：The boat capsized。人用 be capsized 较少，主动是船翻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A wave capsized the small boat.', chinese: '一个浪把头小船打翻了。' },
    ],
    contexts: [
      { domain: '航海', senseId: 'capsize.s1', en: 'The canoe capsized in the current.', zh: '独木舟在急流里翻了。', structure: 'boat + capsize', grammar: '规则动词。', rationale: '锁住翻船。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The sailors capsized in the kitchen.', right: 'The boat capsized in the current.', reason: 'capsize 的典型主语是船，不是在厨房里的人。', rule: '船作主语，或浪把船 capsize。', special: '不要用来表示人摔倒。' },
    ],
    quiz: [
        { id: 'capsize.q1', senseId: 'capsize.s1', errorType: 'meaning', type: '词义', prompt: 'capsize 是：', options: ['船翻', '投降', '加盖'], answer: '船翻', explain: 'capitulate 是投降，cap 是盖。' },
        { id: 'capsize.q2', senseId: 'capsize.s1', errorType: 'confusable', type: '辨词', prompt: '独木舟底朝天用：', options: ['capsize', 'capsicum', 'capital'], answer: 'capsize', explain: 'capsicum 是椒。' },
        { id: 'capsize.q3', senseId: 'capsize.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['The boat capsized.', 'The boat was capsize.', 'The boat capsized to sink grammarly.'], answer: 'The boat capsized.', explain: '过去式单独作谓语。' },
        { id: 'capsize.q4', senseId: 'capsize.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a wave capsized the boat', 'a wave capsized the campus', 'a wave canceled the boat as flip'], answer: 'a wave capsized the boat', explain: '宾语是船。' },
    ],
    usage: { domains: ['航海'], tone: '中性', commonConfusion: ['canoe', 'overturn'] },
  });

  D('capsule', {
    etymology: {
      origin: '拉丁语 capsula，是 capsa「箱子、盒子」的小称。小盒子装药就是胶囊，密封的小舱是太空舱。',
      prefix: null,
      root: { text: 'capsule', gloss: '胶囊' },
      suffix: null,
      history: [
        { label: '小盒子', text: '-ula 表示小。' },
        { label: '现在', text: '现在指胶囊、太空舱或小容器。' },
      ],
      formationLogic: '拉丁小称，不是 cap 临时加 sule。',
      mnemonic: 'capsule 是缩小的箱子：药在里面，宇航员也在里面。',
      note: 'a capsule of medicine；space capsule。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She swallowed the capsule with water.', chinese: '她用水吞下胶囊。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'capsule.s1', en: 'The space capsule landed in the sea.', zh: '太空舱落在海里。', structure: 'a capsule', grammar: '可数名词。', rationale: '锁住小密封容器。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Take two capsicums after dinner for the headache.', right: 'Take two capsules after dinner for the headache.', reason: '药是 capsule，capsicum 是椒。', rule: '词尾不同。', special: '不要和 capsize 混淆。' },
    ],
    quiz: [
        { id: 'capsule.q1', senseId: 'capsule.s1', errorType: 'meaning', type: '词义', prompt: 'capsule 可以是：', options: ['胶囊或太空舱', '甜椒', '翻船'], answer: '胶囊或太空舱', explain: '小密封体。' },
        { id: 'capsule.q2', senseId: 'capsule.s1', errorType: 'confusable', type: '辨词', prompt: '宇航员乘坐的小舱是：', options: ['capsule', 'capsicum', 'cape'], answer: 'capsule', explain: 'cape 是斗篷或海角。' },
        { id: 'capsule.q3', senseId: 'capsule.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two capsules', 'two capsule', 'a capsules'], answer: 'two capsules', explain: '可数复数加 -s。' },
        { id: 'capsule.q4', senseId: 'capsule.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['swallow a capsule', 'swallow a cannon', 'swallow a campus'], answer: 'swallow a capsule', explain: '吞下的是胶囊。' },
    ],
    usage: { domains: ['医学'], tone: '中性', commonConfusion: ['capsicum', 'cap'] },
  });

  D('captain', {
    etymology: {
      origin: '拉丁语 capitaneus「为首的」，来自 caput「头」。带头的人在船上是船长，在飞机上是机长，在队里是队长，军衔里是上尉。动词表示担任队长。',
      prefix: null,
      root: { text: 'captain', gloss: '船长' },
      suffix: null,
      history: [
        { label: '拉丁「为首者」', text: '仍是 caput「头」这一族。' },
        { label: '现在', text: '现在指船长、机长、队长或上尉。' },
      ],
      formationLogic: '拉丁名词经法语进入英语。',
      mnemonic: 'captain 是这一群人的「头」。',
      note: 'captain of the team / the ship。动词：captain a team。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The captain ordered the crew to stay calm.', chinese: '船长命令船员保持冷静。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'captain.s1', en: 'She is captain of the school team.', zh: '她是校队队长。', structure: 'captain of', grammar: '可数名词，指人。', rationale: '锁住负责人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He is the captain for the ship wrong.', right: 'He is the captain of the ship.', reason: '所属常用 of：the captain of the ship。', rule: 'captain of。', special: '不要和 capital 首都混淆。' },
    ],
    quiz: [
        { id: 'captain.q1', senseId: 'captain.s1', errorType: 'meaning', type: '词义', prompt: 'captain 是：', options: ['船长、机长、队长或上尉', '首都', '俘虏'], answer: '船长、机长、队长或上尉', explain: 'captive 是俘虏。' },
        { id: 'captain.q2', senseId: 'captain.s1', errorType: 'confusable', type: '辨词', prompt: '球队的带头人是：', options: ['captain', 'capital', 'caption'], answer: 'captain', explain: 'caption 是说明文字。' },
        { id: 'captain.q3', senseId: 'captain.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['the captain of the team', 'the captain the team', 'a captains of the team'], answer: 'the captain of the team', explain: '用 of。' },
        { id: 'captain.q4', senseId: 'captain.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['captain a team', 'captain a candy', 'capitol a team'], answer: 'captain a team', explain: '动词表示当队长。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['capital', 'captive'] },
  });

  D('caption', {
    etymology: {
      origin: '拉丁语 captio「抓住、取」，来自 capere。法律上原指逮捕文书，后来指文章或图片上的标题，因为它「抓住」内容。动词表示加字幕、加说明。',
      prefix: null,
      root: { text: 'caption', gloss: '标题' },
      suffix: null,
      history: [
        { label: '抓住要点', text: 'captio 与 capture、captive 同族。' },
        { label: '现在', text: '现在指图片说明、标题或字幕。' },
      ],
      formationLogic: '拉丁名词词义转移，不是 cap 加 tion 的帽子词。',
      mnemonic: 'caption 把画面抓住，用一句话写在下面。',
      note: 'a caption under the photo。动词 caption a film。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The caption under the photo gave the date.', chinese: '照片下面的说明标出了日期。' },
    ],
    contexts: [
      { domain: '媒体', senseId: 'caption.s1', en: 'Please add a caption to each figure.', zh: '请给每幅图加说明文字。', structure: 'a caption', grammar: '可数名词。', rationale: '锁住说明文字。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Write a caption under to the photo.', right: 'Write a caption under the photo.', reason: '位置用 under the photo，不要 under to。', rule: 'caption under / for。', special: '不要和 captain 混淆。' },
    ],
    quiz: [
        { id: 'caption.q1', senseId: 'caption.s1', errorType: 'meaning', type: '词义', prompt: 'caption 是：', options: ['标题或说明文字', '船长', '俘虏'], answer: '标题或说明文字', explain: 'captain 是人。' },
        { id: 'caption.q2', senseId: 'caption.s1', errorType: 'confusable', type: '辨词', prompt: '图下面的字是：', options: ['caption', 'captain', 'capital'], answer: 'caption', explain: 'capital 不是图片说明。' },
        { id: 'caption.q3', senseId: 'caption.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a short caption', 'a short captions', 'an caption'], answer: 'a short caption', explain: '单数 a。' },
        { id: 'caption.q4', senseId: 'caption.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a caption under the picture', 'a captain under the picture', 'a canyon under the picture'], answer: 'a caption under the picture', explain: '说明在图下。' },
    ],
    usage: { domains: ['媒体'], tone: '中性', commonConfusion: ['captain', 'capture'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);

