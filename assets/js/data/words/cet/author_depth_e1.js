/* data/words/cet/author_depth_e1.js
 * 手敲深度补丁：big cat–brick（200）。big cat 至 blamed 为逐条手写；blameless 之后仍是旧套句，待续。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('big cat', {
    etymology: {
      origin: '英语复合词：big「大」+ cat「猫」。zoo 和野生动物写作里指狮、虎、豹、美洲豹一类大型猫科',
      prefix: null,
      root: { text: 'cat', gloss: '猫；这里扩大为猫科' },
      suffix: null,
      history: [
        { label: 'cat', text: '古英语 catt，本指家猫' },
        { label: 'big cat', text: '现代英语：体型大的野生猫科，不是「一只很大的家猫」的唯一说法' },
      ],
      formationLogic: '两个常用词绑在一起，变成动物分类里的固定说法。',
      mnemonic: '看到 big cat 先想狮子老虎，不要只想胖家猫。',
      note: '家猫很大通常说 a large cat。big cats 才是狮虎豹。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The reserve protects three species of big cat.', chinese: '这个保护区保护三种大型猫科动物。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'big cat.s1', en: 'A tiger is a big cat, even though nobody would call it a pet.', zh: '老虎是大型猫科动物，尽管没人会把它当成宠物。', structure: 'A tiger / is a big cat / even though...', grammar: 'big cat 作表语，前面常加 a。', rationale: '锁的是动物类别，不是体型形容词随便叠加。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'My neighbour owns a big cat that sleeps on the sofa.', right: 'My neighbour owns a large pet cat that sleeps on the sofa.', reason: 'big cat 在动物写作里默认是狮虎豹，用来指家猫会让人误会。', rule: '野生大型猫科用 big cat；家猫用 pet cat / large cat。', special: '复数 big cats 更常见。' },
    ],
    quiz: [
      { id: 'big cat.q1', senseId: 'big cat.s1', errorType: 'meaning', type: '词义', prompt: 'Which animal is a big cat?', options: ['a leopard', 'a goldfish', 'a sparrow'], answer: 'a leopard', explain: '豹属于大型猫科。' },
      { id: 'big cat.q2', senseId: 'big cat.s1', errorType: 'meaning', type: '词义', prompt: 'big cat 在这篇里最稳的理解是：', options: ['大型野生猫科', '很胖的家猫', '猫的叫声'], answer: '大型野生猫科', explain: '固定说法，不是随便的「大+猫」。' },
      { id: 'big cat.q3', senseId: 'big cat.s1', errorType: 'grammar', type: '搭配', prompt: 'The zoo keeps several _____.', options: ['big cats', 'big cat', 'bigs cat'], answer: 'big cats', explain: '几种动物用复数 big cats。' },
      { id: 'big cat.q4', senseId: 'big cat.s1', errorType: 'confusable', type: '易混', prompt: '沙发上那只宠物更适合说：', options: ['a large cat', 'a big cat species', 'a biosphere'], answer: 'a large cat', explain: '家猫用 large cat，避免被理解成狮虎。' },
    ],
    usage: { domains: ['自然', '新闻'], tone: '中性', commonConfusion: ['large cat'] },
  });

  D('bigotry', {
    etymology: {
      origin: '法语 bigot 进入英语后加上 -ry，表示偏执的态度或行为',
      prefix: null,
      root: { text: 'bigot', gloss: '固执己见、容不得异见的人' },
      suffix: { text: '-ry', gloss: '名词后缀，表状态或行为' },
      history: [
        { label: 'bigot', text: '法语：宗教上过分热诚、不肯听别人的人' },
        { label: 'bigotry', text: '现代英语：对与自己不同的人群持顽固敌意' },
      ],
      formationLogic: '人是 bigot，那种态度叫 bigotry。',
      mnemonic: 'bigotry 里有 got，可记「心里已经 got 死了，不再改」。',
      note: '比 disagreement 重。它指责的是不肯讲理的偏见，不是普通分歧。',
      source: 'Etymonline — bigotry',
    },
    extraExamples: [
      { sense: 1, english: 'The speech was criticised as an appeal to bigotry.', chinese: '这篇演说被批评为在煽动偏执。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bigotry.s1', en: 'The editor refused the column because it traded on bigotry rather than argument.', zh: '编辑退掉了这篇专栏，因为它靠偏执而不是论证。', structure: 'refused the column / because it traded on bigotry', grammar: 'bigotry 不可数，前面通常不加 a。', rationale: '说的是一种态度，不是一次具体争吵。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He has many bigotries against the plan.', right: 'The speech was full of bigotry.', reason: 'bigotry 一般不可数，不说 many bigotries。', rule: 'bigotry 表态度；具体的人用 bigot。', special: '反对某个方案用 opposition，不要上升成 bigotry。' },
    ],
    quiz: [
      { id: 'bigotry.q1', senseId: 'bigotry.s1', errorType: 'meaning', type: '词义', prompt: 'bigotry 最接近：', options: ['顽固的偏见', '短暂的疲劳', '精确的计算'], answer: '顽固的偏见', explain: '对不同人群的敌意和固执。' },
      { id: 'bigotry.q2', senseId: 'bigotry.s1', errorType: 'grammar', type: '语法', prompt: 'Which sentence is natural?', options: ['The article fuels bigotry.', 'The article fuels a bigotries.', 'The article fuels bigot.'], answer: 'The article fuels bigotry.', explain: 'bigotry 不可数；人用 a bigot。' },
      { id: 'bigotry.q3', senseId: 'bigotry.s1', errorType: 'confusable', type: '易混', prompt: '持这种态度的人叫：', options: ['a bigot', 'a billfold', 'a bison'], answer: 'a bigot', explain: 'bigotry 是态度，bigot 是人。' },
      { id: 'bigotry.q4', senseId: 'bigotry.s1', errorType: 'meaning', type: '词源', prompt: '-ry 在 bigotry 里的作用是：', options: ['把人变成这种态度的名词', '表示过去时', '表示复数'], answer: '把人变成这种态度的名词', explain: 'bigot + -ry。' },
    ],
    usage: { domains: ['新闻', '评论'], tone: '贬义', commonConfusion: ['bigot'] },
  });

  D('bilateral', {
    etymology: {
      origin: '拉丁语 bi-「二」+ lateralis「属于侧面的」，latus「侧面」',
      prefix: { text: 'bi-', gloss: '二' },
      root: { text: 'later-', gloss: '侧面（同 lateral、unilateral）' },
      suffix: { text: '-al', gloss: '形容词' },
      history: [
        { label: 'latus', text: '拉丁语：侧面' },
        { label: 'bilateral', text: '两边都有；协议里指双方共同' },
      ],
      formationLogic: '两边各算一方，所以 bilateral agreement 是双方协议。',
      mnemonic: 'bi 是二，lateral 是侧面。两边都在场。',
      note: '单方是 unilateral，多方是 multilateral。',
      source: 'Etymonline — bilateral',
    },
    extraExamples: [
      { sense: 1, english: 'The two governments signed a bilateral trade agreement.', chinese: '两国政府签署了一项双边贸易协定。' },
    ],
    contexts: [
      { domain: '新闻 · 政治', senseId: 'bilateral.s1', en: 'Talks remained bilateral, so no third country sat at the table.', zh: '谈判保持双边，因此没有第三国坐到桌边。', structure: 'Talks / remained bilateral / so no third country...', grammar: 'bilateral 作表语。', rationale: '强调只有两方，不是国内左右两边。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'A unilateral treaty binds both nations equally.', right: 'A bilateral treaty binds both nations.', reason: 'unilateral 是单方面；双方都受约束用 bilateral。', rule: 'bi- = 二，uni- = 一，multi- = 多。', special: '医学里 bilateral 也可指身体两侧，如 bilateral hearing loss。' },
    ],
    quiz: [
      { id: 'bilateral.q1', senseId: 'bilateral.s1', errorType: 'meaning', type: '词义', prompt: 'A _____ agreement involves two sides.', options: ['bilateral', 'unilateral', 'binary'], answer: 'bilateral', explain: '双方协议用 bilateral。' },
      { id: 'bilateral.q2', senseId: 'bilateral.s1', errorType: 'confusable', type: '易混', prompt: 'Only one side decides. That decision is _____.', options: ['unilateral', 'bilateral', 'bilingual'], answer: 'unilateral', explain: '单方面是 unilateral。' },
      { id: 'bilateral.q3', senseId: 'bilateral.s1', errorType: 'meaning', type: '词源', prompt: 'bi- 在 bilateral 里表示：', options: ['二', '反对', '在下面'], answer: '二', explain: 'bi- 是二，later- 是侧面。' },
      { id: 'bilateral.q4', senseId: 'bilateral.s1', errorType: 'collocation', type: '搭配', prompt: '双边贸易协定：a bilateral _____ agreement.', options: ['trade', 'tradingly', 'trades'], answer: 'trade', explain: 'trade agreement，trade 作定语。' },
    ],
    usage: { domains: ['新闻', '政治', '医学'], tone: '正式', commonConfusion: ['unilateral', 'multilateral'] },
  });

  D('bill', {
    etymology: {
      origin: '账单、法案来自中世纪拉丁语 billa「盖了印的文件」；鸟喙是古英语 bile，另一来源',
      prefix: null,
      root: { text: 'billa', gloss: '文书、清单' },
      suffix: null,
      history: [
        { label: 'billa', text: '拉丁语文书：写明事项的单子' },
        { label: 'bill', text: '英语：账单、议案、纸币；另义为鸟嘴' },
      ],
      formationLogic: '一张写明欠款或条款的纸，所以既是账单也是法案。',
      mnemonic: '先看句子里有没有钱或议会。有就是文书；有鸟才是喙。',
      note: '美式纸币也叫 bill。英国钞票更常说 note。',
      source: 'Etymonline — bill',
    },
    extraExamples: [
      { sense: 1, english: 'Ask for the bill before you leave the restaurant.', chinese: '离开餐馆前先要账单。' },
      { sense: 2, english: 'The bill passed the lower house last night.', chinese: '这项法案昨晚在下院通过。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bill.s1', en: 'The electricity bill was higher because the heater ran all week.', zh: '电暖气开了整整一周，所以电费账单更高。', structure: 'The electricity bill / was higher / because...', grammar: 'bill 可数。pay a bill，不是 pay a billing。', rationale: '这里是费用清单，不是法律草案。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Please give me the check of the meal in this British dialogue.', right: 'Please bring us the bill.', reason: '英国英语餐馆要账单用 bill；check 是美国说法。', rule: 'pay the bill；a bill before parliament。', special: '鸟喙：a duck\'s bill。不要和账单例句混。' },
    ],
    quiz: [
      { id: 'bill.q1', senseId: 'bill.s1', errorType: 'meaning', type: '词义', prompt: 'The waiter brought the _____.', options: ['bill', 'billion', 'bin'], answer: 'bill', explain: '餐馆账单是 bill。' },
      { id: 'bill.q2', senseId: 'bill.s1', errorType: 'meaning', type: '词义', prompt: '议会里尚未通过的法律草案叫：', options: ['a bill', 'a biscuit', 'a bison'], answer: 'a bill', explain: '法案也是 bill。' },
      { id: 'bill.q3', senseId: 'bill.s1', errorType: 'collocation', type: '搭配', prompt: '付账：_____ the bill.', options: ['pay', 'pay to', 'pay for to'], answer: 'pay', explain: 'pay the bill。' },
      { id: 'bill.q4', senseId: 'bill.s1', errorType: 'confusable', type: '易混', prompt: '鸭子的扁嘴也叫：', options: ['bill', 'billing address only', 'bigotry'], answer: 'bill', explain: '喙是另一个义项，同形。' },
    ],
    usage: { domains: ['生活', '法律', '新闻'], tone: '中性', commonConfusion: ['check', 'note'] },
  });

  D('bill of fare', {
    etymology: {
      origin: '英语固定说法：bill「清单」+ of fare「食物」。fare 在这里是伙食，不是车费',
      prefix: null,
      root: { text: 'fare', gloss: '食物、伙食（古英语 faru 一系里后来的「供应」）' },
      suffix: null,
      history: [
        { label: 'fare', text: '可指旅途，也可指供应的食物' },
        { label: 'bill of fare', text: '菜单的旧式说法，今天更常说 menu' },
      ],
      formationLogic: '一张食物清单，所以等于 menu。',
      mnemonic: 'fare 不只是票价。bill of fare 里它是「吃的」。',
      note: '现代餐馆菜单用 menu。阅读旧文本才会见到 bill of fare。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The inn\'s bill of fare listed only soup and bread.', chinese: '客栈的菜单上只有汤和面包。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'bill of fare.s1', en: 'In the nineteenth-century novel, the bill of fare was pinned by the door.', zh: '在这部十九世纪小说里，菜单钉在门边。', structure: 'the bill of fare / was pinned / by the door', grammar: '整块作名词，不要拆成账单和费用。', rationale: '旧式用语，意思是菜单。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The bill of fare was the taxi price.', right: 'The bill of fare was the list of dishes.', reason: '这里的 fare 是伙食，不是车费。', rule: 'bill of fare = menu。', special: '今天口语直接说 menu。' },
    ],
    quiz: [
      { id: 'bill of fare.q1', senseId: 'bill of fare.s1', errorType: 'meaning', type: '词义', prompt: 'bill of fare 等于：', options: ['menu', 'electricity bill', 'bus fare'], answer: 'menu', explain: '食物清单，即菜单。' },
      { id: 'bill of fare.q2', senseId: 'bill of fare.s1', errorType: 'meaning', type: '词义', prompt: 'fare 在这个说法里指：', options: ['食物', '车费', '公平'], answer: '食物', explain: '不要按 bus fare 去理解。' },
      { id: 'bill of fare.q3', senseId: 'bill of fare.s1', errorType: 'collocation', type: '搭配', prompt: '现代餐馆更常说：', options: ['menu', 'bill of bus', 'fare bill'], answer: 'menu', explain: 'bill of fare 偏旧。' },
      { id: 'bill of fare.q4', senseId: 'bill of fare.s1', errorType: 'grammar', type: '语法', prompt: '这个说法应该：', options: ['整块记', '拆成三词各译', '当成动词'], answer: '整块记', explain: '固定名词短语。' },
    ],
    usage: { domains: ['阅读', '历史文本'], tone: '偏旧', commonConfusion: ['fare', 'menu'] },
  });

  D('billfold', {
    etymology: {
      origin: '英语复合词：bill「纸币」+ fold「折叠」。折起来夹纸币的皮夹',
      prefix: null,
      root: { text: 'fold', gloss: '折叠' },
      suffix: null,
      history: [
        { label: 'bill', text: '美国英语：纸币' },
        { label: 'billfold', text: '对折的钱包，主要夹钞票和卡片' },
      ],
      formationLogic: '把钞票折进去，所以叫 billfold。',
      mnemonic: 'bill 是钞票，fold 是折。美国人口语里的 wallet。',
      note: '英国更常说 wallet。billfold 在美国很普通。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He left his billfold on the counter.', chinese: '他把皮夹忘在柜台上了。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'billfold.s1', en: 'The billfold held two cards and almost no cash.', zh: '皮夹里有两张卡，现金几乎没有。', structure: 'The billfold / held / two cards', grammar: '可数名词，a billfold。', rationale: '实物是钱包，不是账单。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please pay the billfold.', right: 'Please pay the bill. I left my billfold at home.', reason: 'bill 是账单，billfold 是钱包。', rule: 'billfold = wallet（美）。', special: '丢了钱包可以说 I lost my billfold。' },
    ],
    quiz: [
      { id: 'billfold.q1', senseId: 'billfold.s1', errorType: 'meaning', type: '词义', prompt: 'billfold 是：', options: ['钱包', '账单', '十亿'], answer: '钱包', explain: '折起来放纸币的皮夹。' },
      { id: 'billfold.q2', senseId: 'billfold.s1', errorType: 'confusable', type: '易混', prompt: '英国英语更常说：', options: ['wallet', 'billion', 'bin'], answer: 'wallet', explain: 'billfold 偏美国英语。' },
      { id: 'billfold.q3', senseId: 'billfold.s1', errorType: 'meaning', type: '词源', prompt: 'fold 在这个词里的意思是：', options: ['折叠', '文件夹软件', '反对'], answer: '折叠', explain: '对折的夹子。' },
      { id: 'billfold.q4', senseId: 'billfold.s1', errorType: 'collocation', type: '搭配', prompt: 'He opened his _____ and paid.', options: ['billfold', 'bill of fare', 'bigotry'], answer: 'billfold', explain: '打开钱包付钱。' },
    ],
    usage: { domains: ['生活'], tone: '美式', commonConfusion: ['bill', 'wallet'] },
  });

  D('billion', {
    etymology: {
      origin: '法语 billion：bi- 加在 million 上。当代英语几乎都指 10 亿（10 的 9 次方）',
      prefix: { text: 'bi-', gloss: '二；这里是构词，不是「两个 million」的旧算法' },
      root: { text: 'million', gloss: '百万' },
      suffix: null,
      history: [
        { label: '旧用法', text: '部分欧洲传统里 billion 曾指百万的百万，即 10 的 12 次方' },
        { label: '现在', text: '新闻和科学里的 billion 指 1,000,000,000' },
      ],
      formationLogic: '看见新闻里的 billion，按十亿算。',
      mnemonic: '1 billion = 1,000 million。先记这个等式。',
      note: '不要按字面把 bi- 理解成「两个百万」。考试和新闻都用十亿。',
      source: 'Etymonline — billion',
    },
    extraExamples: [
      { sense: 1, english: 'The project will cost two billion dollars.', chinese: '这个项目将耗资二十亿美元。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'billion.s1', en: 'The city\'s budget passed one billion for the first time.', zh: '这座城市的预算第一次超过十亿。', structure: 'passed / one billion', grammar: 'billion 前有数字时，复数形式常常仍写作 billion：two billion dollars。', rationale: '数量单位，不是一笔账单。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A billion is the same as a million.', right: 'A billion is a thousand million.', reason: 'billion 比 million 多三个零。', rule: '当代英语：billion = 10^9。', special: 'two billion 不加 -s 来修饰名词：two billion people。单独说 billions of 才用复数。' },
    ],
    quiz: [
      { id: 'billion.q1', senseId: 'billion.s1', errorType: 'meaning', type: '词义', prompt: '当代英语里 one billion 是：', options: ['十亿', '一百万', '一百'], answer: '十亿', explain: '1,000,000,000。' },
      { id: 'billion.q2', senseId: 'billion.s1', errorType: 'grammar', type: '语法', prompt: '20 亿美元：two _____ dollars.', options: ['billion', 'billions', 'bill'], answer: 'billion', explain: '数字 + billion + 名词，billion 不加 s。' },
      { id: 'billion.q3', senseId: 'billion.s1', errorType: 'collocation', type: '搭配', prompt: '数以十亿计：_____ of people.', options: ['billions', 'billion', 'a bill'], answer: 'billions', explain: 'billions of 用复数。' },
      { id: 'billion.q4', senseId: 'billion.s1', errorType: 'confusable', type: '易混', prompt: 'million 是：', options: ['一百万', '十亿', '账单'], answer: '一百万', explain: '不要和 billion 对调。' },
    ],
    usage: { domains: ['新闻', '经济'], tone: '中性', commonConfusion: ['million'] },
  });

  D('bin', {
    etymology: {
      origin: '古英语 bin「槽、箱」，今天多指垃圾桶或储物箱',
      prefix: null,
      root: { text: 'bin', gloss: '箱子、容器' },
      suffix: null,
      history: [
        { label: '古英语', text: '盛东西的箱或槽' },
        { label: '现在', text: 'rubbish bin、recycling bin' },
      ],
      formationLogic: '一个开口容器，所以垃圾桶、储物箱都能叫 bin。',
      mnemonic: 'bin 短。垃圾进 bin。',
      note: '美国垃圾桶更常说 trash can。bin 在英国很普通。动词 bin 是口语「扔掉」。',
      source: 'Etymonline — bin',
    },
    extraExamples: [
      { sense: 1, english: 'Throw the empty box in the recycling bin.', chinese: '把空盒子扔进回收箱。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bin.s1', en: 'The kitchen bin was full, so the bag went outside.', zh: '厨房垃圾桶满了，所以袋子被拿到了外面。', structure: 'The kitchen bin / was full', grammar: '可数。in the bin，不是 in bin。', rationale: '日常容器，不是动词 bind。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please bin the rope so it stays tied.', right: 'Please bind the rope so it stays tied.', reason: 'bin 是箱子或扔掉；捆住是 bind。', rule: 'rubbish bin；bind a book / bind someone。', special: '口语 bin it = 扔掉、作罢。' },
    ],
    quiz: [
      { id: 'bin.q1', senseId: 'bin.s1', errorType: 'meaning', type: '词义', prompt: 'Put the paper in the _____.', options: ['bin', 'billion', 'bishop'], answer: 'bin', explain: '垃圾桶、回收箱。' },
      { id: 'bin.q2', senseId: 'bin.s1', errorType: 'confusable', type: '易混', prompt: '把绳子捆紧用：', options: ['bind', 'bin', 'bill'], answer: 'bind', explain: 'bind 才是捆。' },
      { id: 'bin.q3', senseId: 'bin.s1', errorType: 'collocation', type: '搭配', prompt: '回收箱：the _____ bin.', options: ['recycling', 'recycle', 'recycledly'], answer: 'recycling', explain: 'recycling bin。' },
      { id: 'bin.q4', senseId: 'bin.s1', errorType: 'meaning', type: '词义', prompt: '英国口语 bin it 的意思是：', options: ['扔掉', '绑紧', '开账单'], answer: '扔掉', explain: '动词用法，把东西丢进 bin。' },
    ],
    usage: { domains: ['生活'], tone: '英式更常见', commonConfusion: ['bind'] },
  });

  D('bind', {
    etymology: {
      origin: '古英语 bindan「捆住」。过去式 bound，过去分词 bound',
      prefix: null,
      root: { text: 'bind', gloss: '捆、约束（同 band、bond）' },
      suffix: null,
      history: [
        { label: 'bindan', text: '古英语：用绳子系住' },
        { label: 'bind', text: '现代英语：捆扎、装订、使受约束' },
      ],
      formationLogic: '从绳子绑东西，扩大到法律和诺言把人拴住。',
      mnemonic: 'bind 的过去式不是 binded，是 bound。',
      note: 'be bound to do 是「一定」或「有义务」，来自「被绑住所以必须」。',
      source: 'Etymonline — bind',
    },
    extraExamples: [
      { sense: 1, english: 'Bind the parcel with string before you post it.', chinese: '寄出前用绳子把包裹捆好。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'bind.s1', en: 'The contract binds both companies for three years.', zh: '合同约束两家公司，为期三年。', structure: 'The contract / binds / both companies', grammar: 'bind 及物。过去式和过去分词都是 bound。', rationale: '这里不是垃圾桶 bin。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They binded the books yesterday.', right: 'They bound the books yesterday.', reason: 'bind 是不规则动词。', rule: 'bind / bound / bound。', special: 'a bound book 是精装或已装订的书。' },
    ],
    quiz: [
      { id: 'bind.q1', senseId: 'bind.s1', errorType: 'grammar', type: '词形', prompt: 'Yesterday she _____ the letters into one file.', options: ['bound', 'binded', 'bond'], answer: 'bound', explain: '过去式是 bound。' },
      { id: 'bind.q2', senseId: 'bind.s1', errorType: 'collocation', type: '搭配', prompt: '合同约束双方：The contract _____ both sides.', options: ['binds', 'bins', 'bills'], answer: 'binds', explain: 'bind 的第三人称 binds。' },
      { id: 'bind.q3', senseId: 'bind.s1', errorType: 'confusable', type: '易混', prompt: '垃圾桶是：', options: ['bin', 'bind', 'bound'], answer: 'bin', explain: '少一个 d。' },
      { id: 'bind.q4', senseId: 'bind.s1', errorType: 'meaning', type: '词义', prompt: 'be bound to succeed 里 bound 的语气是：', options: ['很可能、必定', '被扔进垃圾桶', '开账单'], answer: '很可能、必定', explain: '来自「被约束走向某结果」。' },
    ],
    usage: { domains: ['日常', '法律', '出版'], tone: '中性', commonConfusion: ['bin', 'bond'] },
  });

  D('binding', {
    etymology: {
      origin: 'bind 的 -ing 形式，名词指装订或捆绑物，形容词指有约束力的',
      prefix: null,
      root: { text: 'bind', gloss: '捆、约束' },
      suffix: { text: '-ing', gloss: '名词或形容词' },
      history: [
        { label: 'bind', text: '捆住' },
        { label: 'binding', text: '书的装帧；a binding agreement 有约束力的协议' },
      ],
      formationLogic: '能把人捆住的协议，就是 binding。',
      mnemonic: 'binding agreement 不是「正在装订的协议」，而是签了就要遵守。',
      note: '书脊、封面那一层也叫 binding。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The decision is binding on every member.', chinese: '这项决定对每个成员都有约束力。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'binding.s1', en: 'Once both sides sign, the terms are legally binding.', zh: '双方一签字，条款就具有法律约束力。', structure: 'the terms / are legally binding', grammar: 'binding on somebody。', rationale: '形容词义，不是垃圾桶。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The rule is binding to us.', right: 'The rule is binding on us.', reason: '「对某人有约束力」用 on，不是 to。', rule: 'binding on + 人。', special: '书的装订：a leather binding。' },
    ],
    quiz: [
      { id: 'binding.q1', senseId: 'binding.s1', errorType: 'meaning', type: '词义', prompt: 'a binding contract 是：', options: ['有约束力的合同', '正在印刷的合同', '垃圾桶合同'], answer: '有约束力的合同', explain: '签了必须遵守。' },
      { id: 'binding.q2', senseId: 'binding.s1', errorType: 'collocation', type: '介词', prompt: 'The rule is binding _____ all staff.', options: ['on', 'to', 'at'], answer: 'on', explain: 'binding on somebody。' },
      { id: 'binding.q3', senseId: 'binding.s1', errorType: 'meaning', type: '词义', prompt: '书的封面装帧叫：', options: ['the binding', 'the bin', 'the bill'], answer: 'the binding', explain: '名词义。' },
      { id: 'binding.q4', senseId: 'binding.s1', errorType: 'confusable', type: '易混', prompt: '动词原形「捆」是：', options: ['bind', 'binding', 'bound only'], answer: 'bind', explain: 'binding 是派生词。' },
    ],
    usage: { domains: ['法律', '出版'], tone: '正式', commonConfusion: ['bind'] },
  });

  D('binoculars', {
    etymology: {
      origin: '拉丁语 bini「两个一组」+ oculus「眼睛」，加上英语 -ar。两只眼一起用的望远镜',
      prefix: { text: 'bin-', gloss: '双、成对' },
      root: { text: 'ocul-', gloss: '眼（同 oculist）' },
      suffix: { text: '-ars', gloss: '名词复数形式常作为这个物品的名字' },
      history: [
        { label: 'oculus', text: '拉丁语：眼睛' },
        { label: 'binoculars', text: '双筒望远镜' },
      ],
      formationLogic: '两只眼睛各一根管子，所以是双筒。',
      mnemonic: 'bi(n) 是双，ocular 是眼。复数形式当名称用。',
      note: '谓语用复数：These binoculars are heavy. 一副也可以说 a pair of binoculars。',
      source: 'Etymonline — binoculars',
    },
    extraExamples: [
      { sense: 1, english: 'She watched the shore through binoculars.', chinese: '她用双筒望远镜看海岸。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'binoculars.s1', en: 'A pair of binoculars hung from a nail by the window.', zh: '一副双筒望远镜挂在窗边的钉子上。', structure: 'A pair of binoculars / hung / from a nail', grammar: '用 pair of 表示一副。', rationale: '光学仪器，不是生物学。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'This binocular are new.', right: 'These binoculars are new.', reason: '名称本身用复数形，指示词用 these。', rule: 'binoculars / a pair of binoculars。', special: '单筒望远镜是 a telescope 或 a monocular。' },
    ],
    quiz: [
      { id: 'binoculars.q1', senseId: 'binoculars.s1', errorType: 'meaning', type: '词义', prompt: 'binoculars 是：', options: ['双筒望远镜', '生物圈', '账单'], answer: '双筒望远镜', explain: '两眼并用。' },
      { id: 'binoculars.q2', senseId: 'binoculars.s1', errorType: 'grammar', type: '语法', prompt: '一副：a pair _____ binoculars.', options: ['of', 'for', 'to'], answer: 'of', explain: 'a pair of。' },
      { id: 'binoculars.q3', senseId: 'binoculars.s1', errorType: 'meaning', type: '词源', prompt: 'ocul- 与什么有关？', options: ['眼睛', '鸟', '账单'], answer: '眼睛', explain: '拉丁语 oculus。' },
      { id: 'binoculars.q4', senseId: 'binoculars.s1', errorType: 'grammar', type: '语法', prompt: 'Which is correct?', options: ['These binoculars are sharp.', 'This binoculars is sharp.', 'These binocular is sharp.'], answer: 'These binoculars are sharp.', explain: '复数形式配 are。' },
    ],
    usage: { domains: ['生活', '户外'], tone: '中性', commonConfusion: ['telescope'] },
  });

  D('biochemistry', {
    etymology: {
      origin: 'bio-「生命」来自希腊语 bios，chemistry 来自 alchemy 一系。研究生命过程中的化学',
      prefix: { text: 'bio-', gloss: '生命' },
      root: { text: 'chemistry', gloss: '化学' },
      suffix: null,
      history: [
        { label: 'bios', text: '希腊语：生命' },
        { label: 'biochemistry', text: '生物化学，约十九世纪末成为学科名' },
      ],
      formationLogic: '生命 + 化学，学科名通常不加冠词或用 the study of。',
      mnemonic: 'bio 见 biology，chemistry 是化学。合在一起就是生化。',
      note: '学科名不可数：She studies biochemistry.',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Biochemistry explains how cells break down sugar.', chinese: '生物化学解释细胞如何分解糖。' },
    ],
    contexts: [
      { domain: '学术', senseId: 'biochemistry.s1', en: 'Her biochemistry degree led to a job in a hospital lab.', zh: '她的生物化学学位让她进了医院实验室。', structure: 'Her biochemistry degree / led to / a job', grammar: 'biochemistry 作定语修饰 degree。', rationale: '学科，不是一本传记。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'I read a biochemistry about her life.', right: 'I read a biography about her life.', reason: '传记是 biography；生物化学是 biochemistry。', rule: 'bio + graphy = 写下来的生平；bio + chemistry = 生命的化学。', special: 'biochemist 是研究者。' },
    ],
    quiz: [
      { id: 'biochemistry.q1', senseId: 'biochemistry.s1', errorType: 'meaning', type: '词义', prompt: 'biochemistry 研究的是：', options: ['生命过程中的化学', '某人的一生', '望远镜'], answer: '生命过程中的化学', explain: '生物化学。' },
      { id: 'biochemistry.q2', senseId: 'biochemistry.s1', errorType: 'confusable', type: '易混', prompt: '人物生平是：', options: ['biography', 'biochemistry', 'biosphere'], answer: 'biography', explain: 'graphy 与「写」有关。' },
      { id: 'biochemistry.q3', senseId: 'biochemistry.s1', errorType: 'meaning', type: '词源', prompt: 'bio- 的意思是：', options: ['生命', '二', '书'], answer: '生命', explain: '希腊语 bios。' },
      { id: 'biochemistry.q4', senseId: 'biochemistry.s1', errorType: 'grammar', type: '语法', prompt: 'She studies _____.', options: ['biochemistry', 'a biochemistries', 'biochemistries'], answer: 'biochemistry', explain: '学科名不可数。' },
    ],
    usage: { domains: ['学术', '医学'], tone: '正式', commonConfusion: ['biography'] },
  });

  D('biography', {
    etymology: {
      origin: '希腊语 bios「生命」+ graphia「书写」',
      prefix: { text: 'bio-', gloss: '生命' },
      root: { text: 'graph-', gloss: '写（同 photograph、autograph）' },
      suffix: null,
      history: [
        { label: 'bios + graphein', text: '把一生写下来' },
        { label: 'biography', text: '别人写的传记；自己写的是 autobiography' },
      ],
      formationLogic: '写生命，所以是传记。作者不是传主本人。',
      mnemonic: 'auto 是自己。有 auto 才是自传。',
      note: 'a biography of somebody。传记作家是 biographer。',
      source: 'Etymonline — biography',
    },
    extraExamples: [
      { sense: 1, english: 'She is writing a biography of the poet.', chinese: '她正在写这位诗人的传记。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'biography.s1', en: 'The biography draws on letters the family had kept in a box.', zh: '这部传记使用了家人保存在盒子里的信件。', structure: 'The biography / draws on / letters', grammar: '可数。a biography of + 人。', rationale: '写人的书，不是生化。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'His autobiography was written by his student.', right: 'His biography was written by his student.', reason: '别人写的是 biography；本人写的才是 autobiography。', rule: 'auto- = 自己。', special: 'biographical film 可简称 biopic。' },
    ],
    quiz: [
      { id: 'biography.q1', senseId: 'biography.s1', errorType: 'meaning', type: '词义', prompt: '别人写的生平叫：', options: ['a biography', 'an autobiography', 'biochemistry'], answer: 'a biography', explain: '传记。' },
      { id: 'biography.q2', senseId: 'biography.s1', errorType: 'confusable', type: '易混', prompt: '自己写自己是：', options: ['an autobiography', 'a biography only', 'a biosphere'], answer: 'an autobiography', explain: 'auto- 表示自己。' },
      { id: 'biography.q3', senseId: 'biography.s1', errorType: 'collocation', type: '搭配', prompt: 'a biography _____ the scientist.', options: ['of', 'to', 'at'], answer: 'of', explain: 'a biography of somebody。' },
      { id: 'biography.q4', senseId: 'biography.s1', errorType: 'meaning', type: '词源', prompt: 'graph- 与什么有关？', options: ['写', '化学', '鸟'], answer: '写', explain: 'graphein 是写。' },
    ],
    usage: { domains: ['阅读', '学术'], tone: '中性', commonConfusion: ['autobiography'] },
  });

  D('biological', {
    etymology: {
      origin: 'biology + -ical。与生物、生物学有关的',
      prefix: null,
      root: { text: 'biology', gloss: '生物学' },
      suffix: { text: '-ical', gloss: '形容词' },
      history: [
        { label: 'biology', text: '研究生命的学科' },
        { label: 'biological', text: '生物的；亲生的（biological parents）' },
      ],
      formationLogic: '学科名加上形容词尾，用来修饰名词。',
      mnemonic: 'biological parents 是亲生父母，不是「学生物的父母」。',
      note: 'biological clock、biological weapon 都是固定搭配，要整块记。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The damage has a biological cause, not a mechanical one.', chinese: '这次损伤有生物学上的原因，不是机械原因。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'biological.s1', en: 'She finally met her biological father at thirty.', zh: '她三十岁时终于见到了亲生父亲。', structure: 'met / her biological father', grammar: 'biological 作定语，放在名词前。', rationale: '这里是血缘，不是课堂学科。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She studies biological at university.', right: 'She studies biology at university.', reason: '学科名是 biology；biological 是形容词，不能单独当学科。', rule: 'biological + 名词；study biology。', special: 'biological weapon 生物武器。' },
    ],
    quiz: [
      { id: 'biological.q1', senseId: 'biological.s1', errorType: 'grammar', type: '词性', prompt: '大学里的学科名是：', options: ['biology', 'biological', 'biologically'], answer: 'biology', explain: 'biological 是形容词。' },
      { id: 'biological.q2', senseId: 'biological.s1', errorType: 'meaning', type: '词义', prompt: 'biological parents 指：', options: ['亲生父母', '养父母', '生物学老师'], answer: '亲生父母', explain: '血缘上的父母。' },
      { id: 'biological.q3', senseId: 'biological.s1', errorType: 'collocation', type: '搭配', prompt: '生物武器：biological _____.', options: ['weapon', 'warly', 'biography'], answer: 'weapon', explain: 'biological weapon。' },
      { id: 'biological.q4', senseId: 'biological.s1', errorType: 'grammar', type: '语法', prompt: '副词形式是：', options: ['biologically', 'biologicaly', 'biologily'], answer: 'biologically', explain: '-ical 的副词是 -ically。' },
    ],
    usage: { domains: ['学术', '生活'], tone: '中性', commonConfusion: ['biology'] },
  });

  D('biology', {
    etymology: {
      origin: '希腊语 bios「生命」+ -logia「学问」',
      prefix: { text: 'bio-', gloss: '生命' },
      root: { text: '-logy', gloss: '学科（logos「言论、学问」）' },
      suffix: null,
      history: [
        { label: 'bios', text: '生命' },
        { label: 'biology', text: '十九世纪初固定为生物学这个学科名' },
      ],
      formationLogic: '研究生命的学问。',
      mnemonic: '和 geology（地）、psychology（心理）一样，-logy 是学科。',
      note: '不可数学科名。生物学家是 biologist。',
      source: 'Etymonline — biology',
    },
    extraExamples: [
      { sense: 1, english: 'Biology was her favourite subject at school.', chinese: '生物是她在学校最喜欢的科目。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'biology.s1', en: 'The biology lab smells of disinfectant every Monday.', zh: '生物实验室每个星期一都有消毒水的气味。', structure: 'The biology lab / smells of / disinfectant', grammar: 'biology 修饰 lab。', rationale: '学科或实验室，不是传记。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'I borrowed a biology of the queen.', right: 'I borrowed a biography of the queen.', reason: 'biology 是学科；写女王生平要用 biography。', rule: '-logy 是学科，-graphy 是书写体裁。', special: 'marine biology 海洋生物学。' },
    ],
    quiz: [
      { id: 'biology.q1', senseId: 'biology.s1', errorType: 'meaning', type: '词义', prompt: 'biology 是：', options: ['生物学', '传记', '双筒望远镜'], answer: '生物学', explain: '生命的学问。' },
      { id: 'biology.q2', senseId: 'biology.s1', errorType: 'meaning', type: '词源', prompt: 'bios 的意思是：', options: ['生命', '二', '写'], answer: '生命', explain: '希腊语 bios。' },
      { id: 'biology.q3', senseId: 'biology.s1', errorType: 'collocation', type: '搭配', prompt: '生物实验室：the biology _____.', options: ['lab', 'labs of fare', 'bin'], answer: 'lab', explain: 'biology lab。' },
      { id: 'biology.q4', senseId: 'biology.s1', errorType: 'confusable', type: '易混', prompt: '研究者叫：', options: ['a biologist', 'a billfold', 'a bishop'], answer: 'a biologist', explain: '-ist 指人。' },
    ],
    usage: { domains: ['校园', '学术'], tone: '中性', commonConfusion: ['biography'] },
  });

  D('biosphere', {
    etymology: {
      origin: '希腊语 bios「生命」+ sphaira「球」。地球上有生命的那一层',
      prefix: { text: 'bio-', gloss: '生命' },
      root: { text: 'sphere', gloss: '球、圈层（同 atmosphere）' },
      suffix: null,
      history: [
        { label: 'sphaira', text: '希腊语：球' },
        { label: 'biosphere', text: '生物圈，二十世纪生态学术语' },
      ],
      formationLogic: '生命所在的球体表层，包括岩石圈、水圈、大气圈里有生物的部分。',
      mnemonic: 'atmosphere 是大气圈，biosphere 是生命圈。',
      note: '通常不可数，前面加 the：the biosphere。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Climate change affects the whole biosphere.', chinese: '气候变化影响整个生物圈。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'biosphere.s1', en: 'The lecture compared the biosphere with the atmosphere and the oceans.', zh: '这节课把生物圈与大气圈和海洋作了比较。', structure: 'compared / the biosphere / with the atmosphere', grammar: 'the biosphere。', rationale: '生态学术语，不是望远镜。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She looked at the birds through a biosphere.', right: 'She looked at the birds through binoculars.', reason: 'biosphere 是生物圈，不是光学仪器。', rule: 'the biosphere；a pair of binoculars。', special: 'atmosphere 大气圈，hydrosphere 水圈。' },
    ],
    quiz: [
      { id: 'biosphere.q1', senseId: 'biosphere.s1', errorType: 'meaning', type: '词义', prompt: 'biosphere 指：', options: ['生物圈', '双筒望远镜', '传记'], answer: '生物圈', explain: '有生命的地球圈层。' },
      { id: 'biosphere.q2', senseId: 'biosphere.s1', errorType: 'meaning', type: '词源', prompt: 'sphere 的意思是：', options: ['球、圈', '写', '眼'], answer: '球、圈', explain: '希腊语 sphaira。' },
      { id: 'biosphere.q3', senseId: 'biosphere.s1', errorType: 'grammar', type: '语法', prompt: '最自然的说法是：', options: ['the biosphere', 'a biospheres', 'biospheres of fare'], answer: 'the biosphere', explain: '通常加 the，不可数。' },
      { id: 'biosphere.q4', senseId: 'biosphere.s1', errorType: 'confusable', type: '易混', prompt: '大气圈是：', options: ['the atmosphere', 'the biosphere', 'the biography'], answer: 'the atmosphere', explain: 'atmo- 与蒸汽、空气有关。' },
    ],
    usage: { domains: ['科学', '环境'], tone: '正式', commonConfusion: ['atmosphere', 'binoculars'] },
  });

  D('biotechnology', {
    etymology: {
      origin: 'bio-「生命」+ technology「技术」。把生物系统用于生产或医疗的技术',
      prefix: { text: 'bio-', gloss: '生命' },
      root: { text: 'technology', gloss: '技术（希腊语 tekhnē「技艺」）' },
      suffix: null,
      history: [
        { label: 'tekhnē', text: '技艺' },
        { label: 'biotechnology', text: '二十世纪：发酵、基因工程等生物技术' },
      ],
      formationLogic: '用生命过程做事的技术，不单是生物学知识。',
      mnemonic: 'biology 是学问，biotechnology 是拿它来做事。',
      note: '常缩写为 biotech。学科或产业名不可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Biotechnology produced a cheaper insulin.', chinese: '生物技术生产出了更便宜的胰岛素。' },
    ],
    contexts: [
      { domain: '新闻 · 科技', senseId: 'biotechnology.s1', en: 'The firm raised money to expand its biotechnology lab.', zh: '这家公司筹资扩建生物技术实验室。', structure: 'expand / its biotechnology lab', grammar: 'biotechnology 作定语。', rationale: '产业和技术，不是生物圈本身。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Biotechnology is another word for the biosphere.', right: 'Biotechnology is the use of living systems in industry and medicine.', reason: 'biosphere 是圈层；biotechnology 是技术。', rule: 'bio + technology = 生物技术。', special: '口语 biotech company。' },
    ],
    quiz: [
      { id: 'biotechnology.q1', senseId: 'biotechnology.s1', errorType: 'meaning', type: '词义', prompt: 'biotechnology 是：', options: ['生物技术', '生物圈', '传记'], answer: '生物技术', explain: '把生物系统用于生产或医疗。' },
      { id: 'biotechnology.q2', senseId: 'biotechnology.s1', errorType: 'confusable', type: '易混', prompt: '缩写常作：', options: ['biotech', 'biofare', 'binoc'], answer: 'biotech', explain: 'biotechnology 的截短。' },
      { id: 'biotechnology.q3', senseId: 'biotechnology.s1', errorType: 'meaning', type: '词源', prompt: 'technology 里的希腊语 tekhnē 指：', options: ['技艺', '生命', '球'], answer: '技艺', explain: '技术来自技艺。' },
      { id: 'biotechnology.q4', senseId: 'biotechnology.s1', errorType: 'grammar', type: '语法', prompt: 'The company works in _____.', options: ['biotechnology', 'biotechnologies of a', 'a biotechnologys'], answer: 'biotechnology', explain: '产业名不可数。' },
    ],
    usage: { domains: ['科技', '新闻'], tone: '正式', commonConfusion: ['biology', 'biosphere'] },
  });

  D('bird', {
    etymology: {
      origin: '古英语 brid，最初多指雏鸟，后来扩大为一切鸟',
      prefix: null,
      root: { text: 'brid', gloss: '鸟' },
      suffix: null,
      history: [
        { label: 'brid', text: '古英语：幼鸟' },
        { label: 'bird', text: '现代英语：鸟类' },
      ],
      formationLogic: '词义从幼鸟扩大到整类动物。',
      mnemonic: '复数直接加 s：birds。不规则的是 goose/geese，不是 bird。',
      note: 'a bird in the hand 是谚语，不必按字面翻译进科学句。',
      source: 'Etymonline — bird',
    },
    extraExamples: [
      { sense: 1, english: 'A small bird landed on the fence.', chinese: '一只小鸟落在篱笆上。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'bird.s1', en: 'The bird built its nest under the roof and ignored the noise below.', zh: '这只鸟把巢筑在屋檐下，不理会下面的嘈杂。', structure: 'The bird / built its nest / under the roof', grammar: '可数。its nest，鸟用 it。', rationale: '动物本义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'I saw three bird on the lake.', right: 'I saw three birds on the lake.', reason: '可数名词复数加 s。', rule: 'a bird / birds。', special: '早期英语里 bird 偏幼鸟，今天不要这样用。' },
    ],
    quiz: [
      { id: 'bird.q1', senseId: 'bird.s1', errorType: 'meaning', type: '词义', prompt: 'bird 是：', options: ['鸟', '账单', '箱子'], answer: '鸟', explain: '鸟类。' },
      { id: 'bird.q2', senseId: 'bird.s1', errorType: 'grammar', type: '语法', prompt: '三只鸟：three _____.', options: ['birds', 'bird', 'birdes'], answer: 'birds', explain: '复数 birds。' },
      { id: 'bird.q3', senseId: 'bird.s1', errorType: 'meaning', type: '词源', prompt: '古英语 brid 起初更常指：', options: ['雏鸟', '纸币', '化学'], answer: '雏鸟', explain: '后来才泛指鸟。' },
      { id: 'bird.q4', senseId: 'bird.s1', errorType: 'collocation', type: '搭配', prompt: '鸟巢：a bird\'s _____.', options: ['nest', 'bin', 'billfold'], answer: 'nest', explain: 'nest 是巢。' },
    ],
    usage: { domains: ['自然', '日常'], tone: '中性', commonConfusion: [] },
  });

  D('biro', {
    etymology: {
      origin: '商标名，来自发明家 László Bíró。英国英语里常把圆珠笔统称 biro',
      prefix: null,
      root: { text: 'Bíró', gloss: '人名' },
      suffix: null,
      history: [
        { label: 'Bíró', text: '二十世纪圆珠笔发明者之一' },
        { label: 'biro', text: '英国口语：圆珠笔，不一定还是该品牌' },
      ],
      formationLogic: '商标变成普通名词，和 hoover 在英国指吸尘器类似。',
      mnemonic: 'biro 不是 biology 的缩写。它是笔。',
      note: '美国英语说 ballpoint。考试见到 biro 按圆珠笔理解。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Can I borrow your biro for a minute?', chinese: '我能借你的圆珠笔用一下吗？' },
    ],
    contexts: [
      { domain: '生活', senseId: 'biro.s1', en: 'She signed the form with a red biro.', zh: '她用一支红色圆珠笔签了表。', structure: 'signed the form / with a red biro', grammar: '可数，a biro。', rationale: '文具，不是生物学术语。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He studies biro at university.', right: 'He signed the form with a biro.', reason: 'biro 是笔，不是学科。', rule: 'a biro = a ballpoint pen（英）。', special: '首字母有时大写 Biro，指品牌。' },
    ],
    quiz: [
      { id: 'biro.q1', senseId: 'biro.s1', errorType: 'meaning', type: '词义', prompt: '英国英语 biro 多指：', options: ['圆珠笔', '生物学', '生物圈'], answer: '圆珠笔', explain: '来自商标名。' },
      { id: 'biro.q2', senseId: 'biro.s1', errorType: 'confusable', type: '易混', prompt: '美国英语更常说：', options: ['ballpoint', 'biosphere', 'bishop'], answer: 'ballpoint', explain: 'ballpoint pen。' },
      { id: 'biro.q3', senseId: 'biro.s1', errorType: 'meaning', type: '词源', prompt: '这个词来自：', options: ['发明者的姓', '希腊语生命', '拉丁语二'], answer: '发明者的姓', explain: 'László Bíró。' },
      { id: 'biro.q4', senseId: 'biro.s1', errorType: 'grammar', type: '语法', prompt: '一支笔：_____ biro.', options: ['a', 'an', 'these'], answer: 'a', explain: '辅音开头用 a。' },
    ],
    usage: { domains: ['生活'], tone: '英式口语', commonConfusion: ['ballpoint'] },
  });

  D('birth', {
    etymology: {
      origin: '古诺斯语 byrð 一类词，与 bear「生育」同源',
      prefix: null,
      root: { text: 'birth', gloss: '出生（与 bear 同源）' },
      suffix: null,
      history: [
        { label: 'bear', text: '古英语 beran：携带、生育' },
        { label: 'birth', text: '出生；也可比喻事物的开始' },
      ],
      formationLogic: '从「生出来」扩大到「某事物的诞生」。',
      mnemonic: 'give birth to 是生下，不是 give a birth。',
      note: 'by birth 指出身。birth rate 出生率。',
      source: 'Etymonline — birth',
    },
    extraExamples: [
      { sense: 1, english: 'She gave birth to twins in May.', chinese: '她在五月生下了一对双胞胎。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'birth.s1', en: 'The birth of the new party changed the election map.', zh: '新政党的诞生改变了选举格局。', structure: 'The birth of the new party / changed / the map', grammar: 'the birth of + 名词，比喻开端。', rationale: '这里不是字面的分娩。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She gave a birth to a son.', right: 'She gave birth to a son.', reason: 'give birth to 中间不加 a。', rule: 'give birth to somebody / something。', special: 'date of birth 出生日期，缩写 DOB。' },
    ],
    quiz: [
      { id: 'birth.q1', senseId: 'birth.s1', errorType: 'collocation', type: '搭配', prompt: 'She gave _____ to a daughter.', options: ['birth', 'a birth', 'the bird'], answer: 'birth', explain: 'give birth to，不加 a。' },
      { id: 'birth.q2', senseId: 'birth.s1', errorType: 'meaning', type: '词义', prompt: 'the birth of an idea 是：', options: ['一个想法的产生', '想法的葬礼', '想法的账单'], answer: '一个想法的产生', explain: '比喻开端。' },
      { id: 'birth.q3', senseId: 'birth.s1', errorType: 'collocation', type: '搭配', prompt: '出生日期：date of _____.', options: ['birth', 'birthday party', 'born'], answer: 'birth', explain: 'date of birth。' },
      { id: 'birth.q4', senseId: 'birth.s1', errorType: 'meaning', type: '词源', prompt: 'birth 与哪个动词同源？', options: ['bear', 'bill', 'bind'], answer: 'bear', explain: 'bear 有「生育」义。' },
    ],
    usage: { domains: ['生活', '新闻'], tone: '中性', commonConfusion: ['birthday', 'born'] },
  });

  D('birth name', {
    etymology: {
      origin: '英语复合说法：birth「出生」+ name「名字」。出生时得到的名字，相对后来改的名',
      prefix: null,
      root: { text: 'name', gloss: '名字' },
      suffix: null,
      history: [
        { label: 'name', text: '古英语 nama' },
        { label: 'birth name', text: '出生名，常相对 married name 或笔名' },
      ],
      formationLogic: '出生时登记的那个名字。',
      mnemonic: '不是 birthday name。出生名是 birth name。',
      note: '表格里也可能写作 name at birth。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her birth name appears on the passport.', chinese: '她的出生名印在护照上。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'birth name.s1', en: 'He writes under a pen name, but his birth name is on the contract.', zh: '他用笔名写作，但合同上是他的出生名。', structure: 'writes under a pen name / but his birth name is on the contract', grammar: 'birth name 可数，her birth name。', rationale: '与笔名、婚后姓相对。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please write your birthday name in capitals.', right: 'Please write your birth name in capitals.', reason: 'birthday 是生日；出生名是 birth name。', rule: 'birth name / name at birth。', special: '笔名是 pen name。' },
    ],
    quiz: [
      { id: 'birth name.q1', senseId: 'birth name.s1', errorType: 'meaning', type: '词义', prompt: 'birth name 是：', options: ['出生时的名字', '生日派对的名字', '出生地'], answer: '出生时的名字', explain: '相对后来改的名字。' },
      { id: 'birth name.q2', senseId: 'birth name.s1', errorType: 'confusable', type: '易混', prompt: '生日是：', options: ['birthday', 'birth name', 'birthplace'], answer: 'birthday', explain: '不要把 day 塞进出生名。' },
      { id: 'birth name.q3', senseId: 'birth name.s1', errorType: 'collocation', type: '搭配', prompt: '笔名：_____ name.', options: ['pen', 'birth', 'bin'], answer: 'pen', explain: 'pen name。' },
      { id: 'birth name.q4', senseId: 'birth name.s1', errorType: 'grammar', type: '语法', prompt: '这个说法应该：', options: ['整块理解', '译成出生的一天', '当成动词'], answer: '整块理解', explain: '固定名词。' },
    ],
    usage: { domains: ['生活', '表格'], tone: '中性', commonConfusion: ['birthday'] },
  });

  D('birthday', {
    etymology: {
      origin: 'birth + day。出生的那一天，也指每年的周年纪念日',
      prefix: null,
      root: { text: 'birth', gloss: '出生' },
      suffix: null,
      history: [
        { label: 'birth day', text: '出生当天' },
        { label: 'birthday', text: '连写后主要指生日纪念日' },
      ],
      formationLogic: '两个词连写，变成每年一次的日子。',
      mnemonic: 'Happy birthday 不加 to 也可以，但 Happy birthday to you 是完整套话。',
      note: 'on one\'s birthday。birthday party。不要说 in my birthday。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We had cake on her birthday.', chinese: '我们在她生日那天吃了蛋糕。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'birthday.s1', en: 'His birthday falls on a Monday this year, so the party is on Sunday.', zh: '他今年的生日是星期一，所以聚会放在星期天。', structure: 'His birthday / falls on / a Monday', grammar: 'on one\'s birthday。falls on 表示日期落在某天。', rationale: '纪念日，不是出生这个事件本身。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I was born in my birthday.', right: 'I visit my grandmother on her birthday.', reason: '在生日那天用 on，不用 in。出生用 be born。', rule: 'on one\'s birthday；be born on + 日期。', special: 'birthday present / birthday cake。' },
    ],
    quiz: [
      { id: 'birthday.q1', senseId: 'birthday.s1', errorType: 'collocation', type: '介词', prompt: 'We met _____ her birthday.', options: ['on', 'in', 'at'], answer: 'on', explain: 'on one\'s birthday。' },
      { id: 'birthday.q2', senseId: 'birthday.s1', errorType: 'confusable', type: '易混', prompt: '「她出生在五月」用：', options: ['She was born in May.', 'She was birthday in May.', 'She gave birthday in May.'], answer: 'She was born in May.', explain: '出生用 be born。' },
      { id: 'birthday.q3', senseId: 'birthday.s1', errorType: 'collocation', type: '搭配', prompt: '生日蛋糕：a birthday _____.', options: ['cake', 'birth', 'bin'], answer: 'cake', explain: 'birthday cake。' },
      { id: 'birthday.q4', senseId: 'birthday.s1', errorType: 'meaning', type: '词义', prompt: 'birthday 每年指的是：', options: ['出生的周年纪念日', '出生证明', '出生名'], answer: '出生的周年纪念日', explain: '连写后的常用义。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['birth', 'born'] },
  });

  D('birthplace', {
    etymology: {
      origin: 'birth + place。出生的地点，也可比喻某事物的发源地',
      prefix: null,
      root: { text: 'place', gloss: '地点' },
      suffix: null,
      history: [
        { label: 'place', text: '地点' },
        { label: 'birthplace', text: '出生地；the birthplace of jazz 一类比喻' },
      ],
      formationLogic: '出生发生的地方。',
      mnemonic: 'place 是地方。birthplace 不是生日。',
      note: 'one\'s birthplace。前面常用物主代词或 the birthplace of。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Kyoto was her birthplace, though she grew up in Osaka.', chinese: '京都是她的出生地，尽管她在大阪长大。' },
    ],
    contexts: [
      { domain: '文化', senseId: 'birthplace.s1', en: 'The town calls itself the birthplace of the festival.', zh: '这座小镇自称是这个节日的发源地。', structure: 'calls itself / the birthplace of the festival', grammar: 'the birthplace of + 事物，比喻发源。', rationale: '不一定是人的户口所在地。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'My birthplace is 3 May.', right: 'My birthday is 3 May. My birthplace is Lyon.', reason: '日期是 birthday；地点是 birthplace。', rule: 'birthplace = where；birthday = when。', special: '出生名是 birth name，三项不要混。' },
    ],
    quiz: [
      { id: 'birthplace.q1', senseId: 'birthplace.s1', errorType: 'meaning', type: '词义', prompt: 'birthplace 问的是：', options: ['地点', '日期', '名字'], answer: '地点', explain: '出生地。' },
      { id: 'birthplace.q2', senseId: 'birthplace.s1', errorType: 'confusable', type: '易混', prompt: '5 月 3 日是：', options: ['a birthday', 'a birthplace', 'a birth name'], answer: 'a birthday', explain: '日期用 birthday。' },
      { id: 'birthplace.q3', senseId: 'birthplace.s1', errorType: 'collocation', type: '搭配', prompt: '爵士乐的发源地：the birthplace _____ jazz.', options: ['of', 'to', 'at'], answer: 'of', explain: 'the birthplace of something。' },
      { id: 'birthplace.q4', senseId: 'birthplace.s1', errorType: 'meaning', type: '词义', prompt: 'place 在词里表示：', options: ['地点', '出生本身', '高兴'], answer: '地点', explain: '复合词的后半。' },
    ],
    usage: { domains: ['生活', '文化'], tone: '中性', commonConfusion: ['birthday'] },
  });

  D('biscuit', {
    etymology: {
      origin: '法语 biscuit：bis「两次」+ cuit「烤」。本来指烤两次的硬饼',
      prefix: { text: 'bis-', gloss: '两次（拉丁语）' },
      root: { text: 'cuit', gloss: '烤熟（拉丁语 coquere「煮、烤」）' },
      suffix: null,
      history: [
        { label: 'bis cuit', text: '烤两次，便于保存' },
        { label: 'biscuit', text: '英国：饼干；美国：一种软的小圆面包' },
      ],
      formationLogic: '两次烘烤是历史。今天英美指的食物已经不同。',
      mnemonic: '英国 biscuit = 美国 cookie 或 cracker。美国 biscuit 接近英式 scone。',
      note: '看到食谱先看是哪国英语，避免买错或译错。',
      source: 'Etymonline — biscuit',
    },
    extraExamples: [
      { sense: 1, english: 'She dipped the biscuit in her tea.', chinese: '她把饼干在茶里蘸了蘸。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'biscuit.s1', en: 'In the American recipe, the biscuits are soft and served with gravy.', zh: '在这份美式食谱里，biscuits 是软的，配肉汁一起上。', structure: 'the biscuits / are soft / and served with gravy', grammar: '可数。a biscuit / biscuits。', rationale: '提醒英美差异，避免一律译成中国饼干。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'An American biscuit is always a thin sweet cookie.', right: 'An American biscuit is usually a soft bread roll.', reason: '美国 biscuit 多指软面饼；英国 biscuit 才接近饼干。', rule: '先看变体再翻译。', special: 'biscuit tin 是英国的饼干罐。' },
    ],
    quiz: [
      { id: 'biscuit.q1', senseId: 'biscuit.s1', errorType: 'meaning', type: '词源', prompt: 'biscuit 字面是：', options: ['烤两次', '生命的球', '出生的日子'], answer: '烤两次', explain: 'bis + cuit。' },
      { id: 'biscuit.q2', senseId: 'biscuit.s1', errorType: 'meaning', type: '词义', prompt: '英国英语 biscuit 接近：', options: ['饼干', '汤', '账单'], answer: '饼干', explain: '英式用法。' },
      { id: 'biscuit.q3', senseId: 'biscuit.s1', errorType: 'confusable', type: '易混', prompt: '美国食谱里的 biscuit 多半是：', options: ['软的小面饼', '双筒望远镜', '出生地'], answer: '软的小面饼', explain: '不要一律按英国饼干理解。' },
      { id: 'biscuit.q4', senseId: 'biscuit.s1', errorType: 'grammar', type: '语法', prompt: '两块：two _____.', options: ['biscuits', 'biscuit', 'biscuites'], answer: 'biscuits', explain: '可数复数。' },
    ],
    usage: { domains: ['生活'], tone: '英美有别', commonConfusion: ['cookie'] },
  });

  D('bishop', {
    etymology: {
      origin: '希腊语 episkopos「监督者」，epi-「在上面」+ skopos「观看者」。经拉丁语、古英语 bisceop',
      prefix: { text: 'epi-', gloss: '在上（在英语形式里已经看不清）' },
      root: { text: 'skopos', gloss: '观看、监督（同 scope、telescope）' },
      suffix: null,
      history: [
        { label: 'episkopos', text: '早期教会：监督会众的人' },
        { label: 'bishop', text: '主教；国际象棋里的象也叫 bishop' },
      ],
      formationLogic: '从「在上方看着」变成教区的主教。',
      mnemonic: 'chess 里的 bishop 是象，斜着走。不要都译成主教。',
      note: '主教辖区是 diocese。archbishop 是大主教。',
      source: 'Etymonline — bishop',
    },
    extraExamples: [
      { sense: 1, english: 'The bishop visited the parish on Sunday.', chinese: '主教星期天巡访了这个堂区。' },
    ],
    contexts: [
      { domain: '棋类', senseId: 'bishop.s1', en: 'She moved her bishop along the dark squares and threatened the king.', zh: '她沿深色格移动象，威胁到了王。', structure: 'moved her bishop / along the dark squares', grammar: '棋子名可数。', rationale: '同一词的另一常见义，避免只记宗教。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'The chess bishop must stay on one colour.', right: 'The chess bishop stays on squares of one colour.', reason: '象只走斜线，因此全程留在同一颜色的格子上。句子若说成「必须是一种颜色的人」就偏了。', rule: '宗教：bishop of a diocese。棋：move a bishop。', special: 'bistro 是小餐馆，拼写接近但无关。' },
    ],
    quiz: [
      { id: 'bishop.q1', senseId: 'bishop.s1', errorType: 'meaning', type: '词义', prompt: '教会里的 bishop 是：', options: ['主教', '饼干', '垃圾桶'], answer: '主教', explain: 'episkopos 的后裔。' },
      { id: 'bishop.q2', senseId: 'bishop.s1', errorType: 'meaning', type: '词义', prompt: '国际象棋的 bishop 是：', options: ['象', '王', '车'], answer: '象', explain: '斜着走。' },
      { id: 'bishop.q3', senseId: 'bishop.s1', errorType: 'meaning', type: '词源', prompt: 'skopos 的意思接近：', options: ['观看', '烤两次', '出生'], answer: '观看', explain: '监督者。' },
      { id: 'bishop.q4', senseId: 'bishop.s1', errorType: 'confusable', type: '易混', prompt: '小餐馆是：', options: ['bistro', 'bishop', 'bison'], answer: 'bistro', explain: '不要看花拼写。' },
    ],
    usage: { domains: ['宗教', '棋类'], tone: '中性', commonConfusion: ['bistro'] },
  });

  D('bison', {
    etymology: {
      origin: '拉丁语 bison，可能来自日耳曼语，指欧洲野牛；英语里也指北美野牛',
      prefix: null,
      root: { text: 'bison', gloss: '野牛' },
      suffix: null,
      history: [
        { label: '拉丁语 bison', text: '欧洲野牛' },
        { label: '英语', text: '北美平原上的 American bison，口语常被叫成 buffalo' },
      ],
      formationLogic: '动物名。单复数都可以是 bison：one bison, several bison。',
      mnemonic: 'bison 不是 bishop。少一个 h，是动物。',
      note: '科学名称里北美种是 American bison。口语 buffalo 不完全精确，但很常见。',
      source: 'Etymonline — bison',
    },
    extraExamples: [
      { sense: 1, english: 'A herd of bison crossed the valley.', chinese: '一群野牛穿过了山谷。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'bison.s1', en: 'The park reintroduced bison after they had vanished from the plains.', zh: '野牛从平原消失之后，公园又把它们重新引进来。', structure: 'reintroduced bison / after they had vanished', grammar: 'bison 单复数同形。', rationale: '动物，不是主教。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bison gave the sermon.', right: 'The bishop gave the sermon. Bison grazed outside.', reason: 'bishop 是主教；bison 是野牛。', rule: 'bison 单复数同形。', special: '口语 buffalo 常指同一种北美动物。' },
    ],
    quiz: [
      { id: 'bison.q1', senseId: 'bison.s1', errorType: 'meaning', type: '词义', prompt: 'bison 是：', options: ['野牛', '主教', '小餐馆'], answer: '野牛', explain: '动物名。' },
      { id: 'bison.q2', senseId: 'bison.s1', errorType: 'grammar', type: '语法', prompt: '三头可以写成：', options: ['three bison', 'three bisons always', 'three bishop'], answer: 'three bison', explain: '复数常与单数同形。' },
      { id: 'bison.q3', senseId: 'bison.s1', errorType: 'confusable', type: '易混', prompt: '布道的人是：', options: ['a bishop', 'a bison', 'a biro'], answer: 'a bishop', explain: '多一个 h。' },
      { id: 'bison.q4', senseId: 'bison.s1', errorType: 'meaning', type: '词义', prompt: '北美口语里常被叫成：', options: ['buffalo', 'biscuit', 'billion'], answer: 'buffalo', explain: '俗称，学名仍是 bison。' },
    ],
    usage: { domains: ['自然'], tone: '中性', commonConfusion: ['buffalo', 'bishop'] },
  });

  D('bistro', {
    etymology: {
      origin: '法语 bistro 或 bistrot，十九世纪巴黎小餐馆。词源有争议，教学上只需记「法语小馆」',
      prefix: null,
      root: { text: 'bistro', gloss: '小餐馆' },
      suffix: null,
      history: [
        { label: '法语', text: '巴黎供应简单酒食的小店' },
        { label: '英语', text: '小而随意的餐馆，常比 restaurant 更随意' },
      ],
      formationLogic: '借词。英语里重音常在第一个音节。',
      mnemonic: 'bistro 不是 bishop，也不是 biro。它是吃饭的地方。',
      note: '复数 bistros。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We ate at a small bistro near the station.', chinese: '我们在车站附近的一家小餐馆吃了饭。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bistro.s1', en: 'The bistro closes on Mondays and serves soup from noon.', zh: '这家小餐馆星期一休息，从中午开始供应汤。', structure: 'The bistro / closes on Mondays / and serves soup', grammar: '可数，a bistro。', rationale: '饮食场所。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bistro moved diagonally across the chessboard.', right: 'The bishop moved diagonally. We reserved a table at the bistro.', reason: '棋子是 bishop；小餐馆是 bistro。', rule: 'eat at a bistro。', special: '比 formal restaurant 随意。' },
    ],
    quiz: [
      { id: 'bistro.q1', senseId: 'bistro.s1', errorType: 'meaning', type: '词义', prompt: 'bistro 是：', options: ['小餐馆', '主教', '野牛'], answer: '小餐馆', explain: '法语借词。' },
      { id: 'bistro.q2', senseId: 'bistro.s1', errorType: 'collocation', type: '搭配', prompt: '在小餐馆吃饭：eat _____ a bistro.', options: ['at', 'on', 'to'], answer: 'at', explain: 'at a restaurant / bistro。' },
      { id: 'bistro.q3', senseId: 'bistro.s1', errorType: 'grammar', type: '语法', prompt: '两家：two _____.', options: ['bistros', 'bistroes', 'bistoris'], answer: 'bistros', explain: '直接加 s。' },
      { id: 'bistro.q4', senseId: 'bistro.s1', errorType: 'confusable', type: '易混', prompt: '国际象棋的象是：', options: ['bishop', 'bistro', 'bison'], answer: 'bishop', explain: '拼写接近，意义无关。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['bishop'] },
  });

  D('bit', {
    etymology: {
      origin: '古英语 bita「咬下来的一口」，与 bite 同源。一小块，也表示「有点儿」',
      prefix: null,
      root: { text: 'bit', gloss: '一小口、一小块' },
      suffix: null,
      history: [
        { label: 'bita', text: '被咬下的一小块' },
        { label: 'bit', text: '少量；a bit of；计算机里也指二进制位，那是 binary digit 的截短' },
      ],
      formationLogic: '从一小口食物，变成任何少量。计算机义是另一条缩写路。',
      mnemonic: 'a bit tired = 有点累。a bit of bread = 一点面包。',
      note: 'a bit 修饰形容词。a bit of 后接名词。不要说 a bit of tired。',
      source: 'Etymonline — bit',
    },
    extraExamples: [
      { sense: 1, english: 'I am a bit cold. Can we close the window?', chinese: '我有点儿冷。我们能把窗户关上吗？' },
    ],
    contexts: [
      { domain: '技术', senseId: 'bit.s1', en: 'Eight bits make one byte in the usual computer scheme.', zh: '在通常的计算机方案里，八个比特构成一个字节。', structure: 'Eight bits / make / one byte', grammar: '计算机义可数，eight bits。', rationale: '和「有点儿」不是同一个使用场合。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She is a bit of tired.', right: 'She is a bit tired.', reason: '形容词前用 a bit，名词前才用 a bit of。', rule: 'a bit + 形容词；a bit of + 名词。', special: 'not a bit = 一点也不。a bit 和 a little 接近。' },
    ],
    quiz: [
      { id: 'bit.q1', senseId: 'bit.s1', errorType: 'grammar', type: '语法', prompt: 'I am _____ hungry.', options: ['a bit', 'a bit of', 'bit'], answer: 'a bit', explain: '形容词前用 a bit。' },
      { id: 'bit.q2', senseId: 'bit.s1', errorType: 'grammar', type: '语法', prompt: '_____ sugar, please.', options: ['A bit of', 'A bit', 'Bit'], answer: 'A bit of', explain: '名词前用 a bit of。' },
      { id: 'bit.q3', senseId: 'bit.s1', errorType: 'meaning', type: '词义', prompt: '计算机里的 bit 是：', options: ['二进制位', '生日', '饼干'], answer: '二进制位', explain: 'binary digit 的截短。' },
      { id: 'bit.q4', senseId: 'bit.s1', errorType: 'meaning', type: '词源', prompt: '古英语 bita 与哪个词同源？', options: ['bite', 'bill', 'birth'], answer: 'bite', explain: '咬下来的一小块。' },
    ],
    usage: { domains: ['日常', '技术'], tone: '口语', commonConfusion: ['a little'] },
  });

  D('bitch', {
    etymology: {
      origin: '古英语 bicce，本义是母狗。骂人是后起的粗俗用法',
      prefix: null,
      root: { text: 'bicce', gloss: '母狗' },
      suffix: null,
      history: [
        { label: 'bicce', text: '古英语：母狗' },
        { label: 'bitch', text: '动物义仍在；指人时是冒犯语' },
      ],
      formationLogic: '动物本义保留在育种和兽医语境。指人时语气很重。',
      mnemonic: '考试和正式写作用 female dog，不要用这个词骂人。',
      note: '本条只锁定动物义。指人的用法属于辱骂，不应当成中性同义词。',
      source: 'Etymonline — bitch',
    },
    extraExamples: [
      { sense: 1, english: 'The bitch nursed six puppies in the barn.', chinese: '这只母狗在谷仓里给六只小狗喂奶。' },
    ],
    contexts: [
      { domain: '兽医', senseId: 'bitch.s1', en: 'The vet asked whether the bitch had been vaccinated.', zh: '兽医问这只母狗是否已经接种。', structure: 'asked whether / the bitch / had been vaccinated', grammar: '动物义可数。', rationale: '正式场合若怕误会，可改说 female dog。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'He called his classmate a bitch in the essay as a neutral description.', right: 'The essay called the animal a female dog.', reason: '指人是辱骂，不能当成中性描写。', rule: '动物义可用；指人应避免。', special: '动词 bitch about 是口语「抱怨」，也很随便。' },
    ],
    quiz: [
      { id: 'bitch.q1', senseId: 'bitch.s1', errorType: 'meaning', type: '词义', prompt: '兽医语境里 bitch 指：', options: ['母狗', '饼干', '账单'], answer: '母狗', explain: '古英语本义。' },
      { id: 'bitch.q2', senseId: 'bitch.s1', errorType: 'meaning', type: '用法', prompt: '作文里要中性地说母狗，更稳妥的是：', options: ['female dog', '使用骂人语气', 'bishop'], answer: 'female dog', explain: '避免冒犯义。' },
      { id: 'bitch.q3', senseId: 'bitch.s1', errorType: 'confusable', type: '易混', prompt: '咬是：', options: ['bite', 'bitch', 'bit only'], answer: 'bite', explain: 'bite 才是动词「咬」。' },
      { id: 'bitch.q4', senseId: 'bitch.s1', errorType: 'meaning', type: '词源', prompt: '这个词最早指：', options: ['母狗', '小餐馆', '主教'], answer: '母狗', explain: '骂人义是后起的。' },
    ],
    usage: { domains: ['兽医'], tone: '指人时冒犯', commonConfusion: ['female dog'] },
  });

  D('bite', {
    etymology: {
      origin: '古英语 bitan。过去式 bit，过去分词 bitten',
      prefix: null,
      root: { text: 'bite', gloss: '咬（同 bit）' },
      suffix: null,
      history: [
        { label: 'bitan', text: '古英语：用牙咬' },
        { label: 'bite', text: '咬；也可指一口食物，或鱼上钩' },
      ],
      formationLogic: '牙齿合上。名词 an insect bite 是被咬的那一下。',
      mnemonic: '过去式 bit，分词 bitten。不要写成 bited。',
      note: 'bite into an apple。once bitten, twice shy 是谚语。',
      source: 'Etymonline — bite',
    },
    extraExamples: [
      { sense: 1, english: 'The dog bit the postman on the ankle.', chinese: '狗咬了邮递员的脚踝。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bite.s1', en: 'She took one bite of the pie and pushed the plate away.', zh: '她咬了一口馅饼，就把盘子推开了。', structure: 'took one bite / of the pie', grammar: '名词 bite：一口。动词过去式也是 bit。', rationale: '名词和动词同形不同句位。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'A mosquito bited me.', right: 'A mosquito bit me.', reason: 'bite 不规则。', rule: 'bite / bit / bitten。', special: '被咬过：I have been bitten。' },
    ],
    quiz: [
      { id: 'bite.q1', senseId: 'bite.s1', errorType: 'grammar', type: '词形', prompt: 'The dog _____ him yesterday.', options: ['bit', 'bited', 'bitten'], answer: 'bit', explain: '过去式 bit。' },
      { id: 'bite.q2', senseId: 'bite.s1', errorType: 'grammar', type: '词形', prompt: 'He has been _____ by a snake.', options: ['bitten', 'bit', 'bited'], answer: 'bitten', explain: '过去分词 bitten。' },
      { id: 'bite.q3', senseId: 'bite.s1', errorType: 'collocation', type: '搭配', prompt: '咬一口苹果：bite _____ an apple.', options: ['into', 'at to', 'on to the'], answer: 'into', explain: 'bite into。' },
      { id: 'bite.q4', senseId: 'bite.s1', errorType: 'confusable', type: '易混', prompt: '有点累是 a _____ tired.', options: ['bit', 'bite', 'bitch'], answer: 'bit', explain: 'a bit + 形容词。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['bit'] },
  });

  D('bitter', {
    etymology: {
      origin: '古英语 biter，与 bite 同源。味道像被咬一下，所以是苦',
      prefix: null,
      root: { text: 'biter', gloss: '咬人的、苦的' },
      suffix: null,
      history: [
        { label: 'biter', text: '古英语：尖利、能咬的' },
        { label: 'bitter', text: '味苦；也指怨恨、严寒' },
      ],
      formationLogic: '从牙齿的刺激，变成味觉和情绪上的刺。',
      mnemonic: 'bitter 不是 better。a 和 e 差一个字母，意思差很远。',
      note: 'a bitter argument 是激烈刻薄的争吵。bitterly cold 严寒。',
      source: 'Etymonline — bitter',
    },
    extraExamples: [
      { sense: 1, english: 'The coffee was too bitter without milk.', chinese: '不加奶的咖啡太苦了。' },
    ],
    contexts: [
      { domain: '情绪', senseId: 'bitter.s1', en: 'Years later he was still bitter about the way he had been dismissed.', zh: '多年以后，他仍然对当年被解雇的方式感到怨恨。', structure: 'was still bitter / about the way...', grammar: 'bitter about something。', rationale: '情绪义，不是味道。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'This medicine tastes better, so I hate it.', right: 'This medicine tastes bitter, so I hate it.', reason: 'better 是更好；bitter 是苦。', rule: 'taste bitter；feel bitter about。', special: '副词 bitterly：weep bitterly。' },
    ],
    quiz: [
      { id: 'bitter.q1', senseId: 'bitter.s1', errorType: 'meaning', type: '词义', prompt: '不加糖的咖啡可能 _____.', options: ['taste bitter', 'taste better always', 'taste bison'], answer: 'taste bitter', explain: '苦。' },
      { id: 'bitter.q2', senseId: 'bitter.s1', errorType: 'confusable', type: '易混', prompt: 'good 的比较级是：', options: ['better', 'bitter', 'bit'], answer: 'better', explain: '不要和 bitter 搞混。' },
      { id: 'bitter.q3', senseId: 'bitter.s1', errorType: 'collocation', type: '搭配', prompt: '对失业感到怨恨：bitter _____ the job loss.', options: ['about', 'of to', 'at birth'], answer: 'about', explain: 'bitter about。' },
      { id: 'bitter.q4', senseId: 'bitter.s1', errorType: 'meaning', type: '词源', prompt: 'bitter 与哪个词同源？', options: ['bite', 'bill', 'birth'], answer: 'bite', explain: '像被咬一样刺激。' },
    ],
    usage: { domains: ['生活', '情绪'], tone: '贬或中性', commonConfusion: ['better'] },
  });

  D('bizarre', {
    etymology: {
      origin: '法语 bizarre，可能经意大利语 bizzarro「易怒的」。英语里稳定为「古怪、怪诞」',
      prefix: null,
      root: { text: 'bizarre', gloss: '古怪' },
      suffix: null,
      history: [
        { label: 'bizzarro', text: '意大利语：脾气怪' },
        { label: 'bizarre', text: '现代英语：奇怪得不寻常' },
      ],
      formationLogic: '借词，重音在第二音节。',
      mnemonic: '两个 z，一个音节重。看见就想「怪」。',
      note: '比 strange 更强，常带「不合常理、几乎荒唐」。',
      source: 'Etymonline — bizarre',
    },
    extraExamples: [
      { sense: 1, english: 'He wore a bizarre hat made of spoons.', chinese: '他戴了一顶用勺子做成的古怪帽子。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bizarre.s1', en: 'The court heard a bizarre explanation that convinced nobody.', zh: '法庭听到一个谁也说服不了的古怪解释。', structure: 'heard / a bizarre explanation', grammar: '形容词，可作定语或表语。', rationale: '程度强于 a little odd。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bazaar story made no sense.', right: 'The bizarre story made no sense.', reason: 'bazaar 是市场；bizarre 是古怪。', rule: 'a bizarre idea；a bazaar in the old city。', special: '副词 bizarrely。' },
    ],
    quiz: [
      { id: 'bizarre.q1', senseId: 'bizarre.s1', errorType: 'meaning', type: '词义', prompt: 'bizarre 的意思是：', options: ['古怪的', '苦的', '出生的'], answer: '古怪的', explain: '怪诞。' },
      { id: 'bizarre.q2', senseId: 'bizarre.s1', errorType: 'confusable', type: '易混', prompt: '集市是：', options: ['bazaar', 'bizarre', 'bistro'], answer: 'bazaar', explain: '拼写接近。' },
      { id: 'bizarre.q3', senseId: 'bizarre.s1', errorType: 'grammar', type: '语法', prompt: 'The ending was _____.', options: ['bizarre', 'bizarrely idea', 'a bizarre'], answer: 'bizarre', explain: '表语形容词，不加 -ly。' },
      { id: 'bizarre.q4', senseId: 'bizarre.s1', errorType: 'meaning', type: '词源', prompt: '这个词主要借自：', options: ['法语', '古英语鸟', '拉丁语账单'], answer: '法语', explain: 'bizarre。' },
    ],
    usage: { domains: ['新闻', '日常'], tone: '略强', commonConfusion: ['bazaar', 'strange'] },
  });

  D('black', {
    etymology: {
      origin: '古英语 blæc「黑」。与 bleach、blank 的「发白、空白」并不是同一个直观意思，教学上分开记',
      prefix: null,
      root: { text: 'blæc', gloss: '黑' },
      suffix: null,
      history: [
        { label: 'blæc', text: '古英语颜色词' },
        { label: 'black', text: '黑色；也可作动词 black out' },
      ],
      formationLogic: '基本颜色词。复合词很多：blackboard、blackmail、blackout。',
      mnemonic: 'black 是颜色。blank 是空白。只差一个字母。',
      note: '指人的种族身份时要看语境，正式写作常用 Black 大写。本条颜色义用小写。',
      source: 'Etymonline — black',
    },
    extraExamples: [
      { sense: 1, english: 'She bought a black coat for the winter.', chinese: '她买了一件黑大衣过冬。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'black.s1', en: 'The cat is black except for one white paw.', zh: '这只猫是黑的，只有一只爪子是白的。', structure: 'The cat / is black / except for...', grammar: '颜色形容词作表语，不加 -ly。', rationale: '颜色本义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Leave the line black so I can write on it.', right: 'Leave the line blank so I can write on it.', reason: '要空白用 blank；黑色是 black。', rule: 'black = 黑；blank = 空白。', special: 'in black and white 可以指白纸黑字，也可以指非黑即白。' },
    ],
    quiz: [
      { id: 'black.q1', senseId: 'black.s1', errorType: 'meaning', type: '词义', prompt: 'black 作为颜色是：', options: ['黑色', '空白', '苦'], answer: '黑色', explain: '基本颜色。' },
      { id: 'black.q2', senseId: 'black.s1', errorType: 'confusable', type: '易混', prompt: '表格上还没写字的一格是：', options: ['blank', 'black', 'blade'], answer: 'blank', explain: '空白。' },
      { id: 'black.q3', senseId: 'black.s1', errorType: 'collocation', type: '搭配', prompt: '白纸黑字：in black and _____.', options: ['white', 'blank', 'bite'], answer: 'white', explain: 'in black and white。' },
      { id: 'black.q4', senseId: 'black.s1', errorType: 'grammar', type: '语法', prompt: 'The shoes are _____.', options: ['black', 'blackly', 'blacks'], answer: 'black', explain: '形容词表语。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['blank'] },
  });

  D('blackboard', {
    etymology: {
      origin: 'black + board。黑色的板，供粉笔书写。今天许多教室已换成 whiteboard',
      prefix: null,
      root: { text: 'board', gloss: '板（古英语 bord）' },
      suffix: null,
      history: [
        { label: 'board', text: '木板' },
        { label: 'blackboard', text: '黑板' },
      ],
      formationLogic: '黑的板子，复合名词。',
      mnemonic: '白板是 whiteboard。不要把 blackboard 写成 black board 当两个重读词，除非强调颜色。',
      note: 'chalk 配 blackboard。marker 配 whiteboard。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher wrote the date on the blackboard.', chinese: '老师把日期写在黑板上。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'blackboard.s1', en: 'Dust from the blackboard settled on the front desks.', zh: '黑板上的粉尘落在前排课桌上。', structure: 'Dust from the blackboard / settled on / the desks', grammar: 'the blackboard。', rationale: '教室用具。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She wrote on the blackboard with a marker pen.', right: 'She wrote on the blackboard with chalk.', reason: '黑板用粉笔。马克笔配白板。', rule: 'chalk + blackboard；marker + whiteboard。', special: 'on the blackboard，不是 in the blackboard。' },
    ],
    quiz: [
      { id: 'blackboard.q1', senseId: 'blackboard.s1', errorType: 'meaning', type: '词义', prompt: 'blackboard 是：', options: ['黑板', '白板', '黑邮件'], answer: '黑板', explain: '教室里的黑板。' },
      { id: 'blackboard.q2', senseId: 'blackboard.s1', errorType: 'collocation', type: '搭配', prompt: '黑板上写字用：', options: ['chalk', 'a biro only in exams', 'gravy'], answer: 'chalk', explain: '粉笔。' },
      { id: 'blackboard.q3', senseId: 'blackboard.s1', errorType: 'collocation', type: '介词', prompt: 'write _____ the blackboard.', options: ['on', 'in', 'at'], answer: 'on', explain: 'on the blackboard。' },
      { id: 'blackboard.q4', senseId: 'blackboard.s1', errorType: 'confusable', type: '易混', prompt: '白板是：', options: ['whiteboard', 'blackmail', 'blackout'], answer: 'whiteboard', explain: '颜色不同。' },
    ],
    usage: { domains: ['校园'], tone: '中性', commonConfusion: ['whiteboard'] },
  });

  D('blackmail', {
    etymology: {
      origin: 'black + mail。mail 在苏格兰英语里曾指租金、贡金。black mail 是非法勒取的钱，相对正当的租金',
      prefix: null,
      root: { text: 'mail', gloss: '此处是旧义「支付、贡金」，不是今天的邮件' },
      suffix: null,
      history: [
        { label: 'mail', text: '边境地区：保护费、租金' },
        { label: 'blackmail', text: '用威胁索取钱或好处' },
      ],
      formationLogic: '不是黑色的信件。是用把柄逼别人付钱或服从。',
      mnemonic: '看见 mail 不要译成电子邮件。blackmail 是敲诈。',
      note: '动词和名词同形。blackmail somebody into doing something。',
      source: 'Etymonline — blackmail',
    },
    extraExamples: [
      { sense: 1, english: 'He tried to blackmail her with the old letters.', chinese: '他试图拿那些旧信敲诈她。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blackmail.s1', en: 'The court jailed him for blackmail after he demanded cash for silence.', zh: '他以沉默为条件索要现金，法院以敲诈罪判了他的刑。', structure: 'jailed him for blackmail / after he demanded cash', grammar: 'for blackmail。into doing：blackmail someone into paying。', rationale: '犯罪义，不是黑板。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'I sent the homework by blackmail.', right: 'I sent the homework by email. He was accused of blackmail.', reason: '邮件是 mail / email；blackmail 是敲诈。', rule: 'blackmail somebody into doing something。', special: 'emotional blackmail 是情感要挟，不一定涉及钱。' },
    ],
    quiz: [
      { id: 'blackmail.q1', senseId: 'blackmail.s1', errorType: 'meaning', type: '词义', prompt: 'blackmail 是：', options: ['敲诈', '黑板', '停电'], answer: '敲诈', explain: '用威胁索取。' },
      { id: 'blackmail.q2', senseId: 'blackmail.s1', errorType: 'meaning', type: '词源', prompt: '这里的 mail 最早接近：', options: ['租金、贡金', '电子邮件', '男性'], answer: '租金、贡金', explain: '不是今天的邮件。' },
      { id: 'blackmail.q3', senseId: 'blackmail.s1', errorType: 'collocation', type: '搭配', prompt: '逼某人付钱：blackmail her _____ paying.', options: ['into', 'to pay always spelled', 'onto'], answer: 'into', explain: 'into doing。' },
      { id: 'blackmail.q4', senseId: 'blackmail.s1', errorType: 'confusable', type: '易混', prompt: '发作业用：', options: ['email', 'blackmail', 'blackboard'], answer: 'email', explain: '不要把 mail 理解错。' },
    ],
    usage: { domains: ['法律', '新闻'], tone: '贬义', commonConfusion: ['email'] },
  });

  D('blackout', {
    etymology: {
      origin: 'black + out。灯火熄灭，或短暂失去知觉、记忆',
      prefix: null,
      root: { text: 'black', gloss: '黑' },
      suffix: null,
      history: [
        { label: 'black out', text: '动词短语：变黑、熄灯、昏过去' },
        { label: 'blackout', text: '名词：停电、灯火管制、一时失忆' },
      ],
      formationLogic: '四周变黑。可以是城市停电，也可以是人眼前一黑。',
      mnemonic: '名词连写 blackout。动词分开 black out。',
      note: 'a power blackout。新闻里也指信息封锁。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The blackout lasted two hours.', chinese: '停电持续了两个小时。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blackout.s1', en: 'Hospitals switched to generators during the blackout.', zh: '停电期间医院改用发电机。', structure: 'switched to generators / during the blackout', grammar: 'during the blackout。', rationale: '电力中断，不是敲诈。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The city was blackout for an hour.', right: 'The city had a blackout for an hour.', reason: 'blackout 是名词。动词要用 black out。', rule: 'a blackout；the lights blacked out。', special: '酒后失忆也可以叫 a blackout。' },
    ],
    quiz: [
      { id: 'blackout.q1', senseId: 'blackout.s1', errorType: 'meaning', type: '词义', prompt: 'a power blackout 是：', options: ['停电', '敲诈', '黑板'], answer: '停电', explain: '电力中断。' },
      { id: 'blackout.q2', senseId: 'blackout.s1', errorType: 'grammar', type: '语法', prompt: '灯灭了：The lights _____.', options: ['blacked out', 'blackouted', 'were a black'], answer: 'blacked out', explain: '动词短语分开写。' },
      { id: 'blackout.q3', senseId: 'blackout.s1', errorType: 'confusable', type: '易混', prompt: '用信件威胁要钱是：', options: ['blackmail', 'blackout', 'blackboard'], answer: 'blackmail', explain: '三个 black 复合词要分开。' },
      { id: 'blackout.q4', senseId: 'blackout.s1', errorType: 'meaning', type: '词义', prompt: '人突然失去一段记忆也可叫：', options: ['a blackout', 'a bison', 'a bistro'], answer: 'a blackout', explain: '眼前一黑、失忆。' },
    ],
    usage: { domains: ['新闻', '生活'], tone: '中性', commonConfusion: ['blackmail'] },
  });

  D('blade', {
    etymology: {
      origin: '古英语 blæd，原义是叶子，后来也指刀片那样扁而薄的东西',
      prefix: null,
      root: { text: 'blæd', gloss: '叶子、叶片' },
      suffix: null,
      history: [
        { label: 'blæd', text: '叶子' },
        { label: 'blade', text: '刀刃、叶片、肩胛骨的扁骨' },
      ],
      formationLogic: '又薄又扁，所以草叶和刀片共用一个词。',
      mnemonic: 'a blade of grass 是一片草叶，不是一把小刀。',
      note: 'razor blade 刀片。shoulder blade 肩胛骨。',
      source: 'Etymonline — blade',
    },
    extraExamples: [
      { sense: 1, english: 'The blade of the knife was dull.', chinese: '这把刀的刃钝了。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'blade.s1', en: 'A single blade of grass stuck to his shoe.', zh: '一根草叶粘在他的鞋上。', structure: 'A single blade of grass / stuck to / his shoe', grammar: 'a blade of grass。', rationale: '叶子义，避免一律译成刀。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I picked a grass blade knife.', right: 'I picked a blade of grass.', reason: '草叶是 a blade of grass，语序固定。', rule: 'a blade of grass；the blade of a knife。', special: '肩胛骨 shoulder blade。' },
    ],
    quiz: [
      { id: 'blade.q1', senseId: 'blade.s1', errorType: 'meaning', type: '词义', prompt: 'the blade of a knife 是：', options: ['刀刃', '刀柄', '刀鞘'], answer: '刀刃', explain: '薄而利的部分。' },
      { id: 'blade.q2', senseId: 'blade.s1', errorType: 'collocation', type: '搭配', prompt: '一片草叶：a blade _____ grass.', options: ['of', 'for', 'to'], answer: 'of', explain: 'a blade of grass。' },
      { id: 'blade.q3', senseId: 'blade.s1', errorType: 'meaning', type: '词源', prompt: '古英语 blæd 起初指：', options: ['叶子', '黑色', '账单'], answer: '叶子', explain: '后来才指刀片。' },
      { id: 'blade.q4', senseId: 'blade.s1', errorType: 'collocation', type: '搭配', prompt: '肩胛骨：shoulder _____.', options: ['blade', 'black', 'blame'], answer: 'blade', explain: '扁骨。' },
    ],
    usage: { domains: ['生活', '自然', '医学'], tone: '中性', commonConfusion: ['leaf'] },
  });

  D('blame', {
    etymology: {
      origin: '古法语 blasmer，与晚期拉丁语 blasphemare、希腊语 blasphemein「说坏话」有关',
      prefix: null,
      root: { text: 'blasmer', gloss: '指责' },
      suffix: null,
      history: [
        { label: 'blasphemein', text: '希腊语：说不敬的话' },
        { label: 'blame', text: '现代英语：责备；名词是责任' },
      ],
      formationLogic: '从「说别人坏话」收成「把过错算到某人头上」。',
      mnemonic: 'blame somebody for something。for 后面是错事，不是人。',
      note: 'take the blame 承担责任。put the blame on somebody。',
      source: 'Etymonline — blame',
    },
    extraExamples: [
      { sense: 1, english: 'Do not blame the intern for the missing file.', chinese: '不要为了丢失的文件责备实习生。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'blame.s1', en: 'The report put the blame on poor communication, not on one person.', zh: '报告把责任归到沟通不畅，而不是某一个人。', structure: 'put the blame on / poor communication', grammar: 'put the blame on + 名词。动词 blame somebody for something。', rationale: '名词和动词搭配不同。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She blamed the delay on for him.', right: 'She blamed him for the delay.', reason: '动词结构是 blame somebody for something，或 blame something on somebody。', rule: 'blame A for B；blame B on A。', special: 'I am to blame 是「责任在我」，用主动形式表该受责备。' },
    ],
    quiz: [
      { id: 'blame.q1', senseId: 'blame.s1', errorType: 'collocation', type: '搭配', prompt: 'She blamed him _____ the noise.', options: ['for', 'of', 'to'], answer: 'for', explain: 'blame somebody for something。' },
      { id: 'blame.q2', senseId: 'blame.s1', errorType: 'collocation', type: '搭配', prompt: 'They blamed the noise _____ the neighbours.', options: ['on', 'for', 'at'], answer: 'on', explain: 'blame something on somebody。' },
      { id: 'blame.q3', senseId: 'blame.s1', errorType: 'meaning', type: '词义', prompt: 'take the blame 是：', options: ['承担责任', '拿走刀片', '变成黑色'], answer: '承担责任', explain: '名词用法。' },
      { id: 'blame.q4', senseId: 'blame.s1', errorType: 'grammar', type: '语法', prompt: '责任在我：I am to _____.', options: ['blame', 'be blamed always wrong', 'blaming for'], answer: 'blame', explain: 'I am to blame。' },
    ],
    usage: { domains: ['日常', '新闻'], tone: '负面', commonConfusion: ['fault'] },
  });

  D('blamed', {
    etymology: {
      origin: 'blame 的过去式和过去分词，也可作形容词：受到责备的',
      prefix: null,
      root: { text: 'blame', gloss: '责备' },
      suffix: { text: '-ed', gloss: '过去式、过去分词或形容词' },
      history: [
        { label: 'blame', text: '责备' },
        { label: 'blamed', text: '责备了；be blamed for 因某事受责备' },
      ],
      formationLogic: '规则变化，直接加 -ed。意思仍是「被算到头上」。',
      mnemonic: '不要写成 blammed。blame 只有一个 m。',
      note: 'the blamed delay 这种口语诅咒语气少见，考试认被动和过去时即可。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She blamed the rain for the late start.', chinese: '她把晚点开始归咎于下雨。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blamed.s1', en: 'The delay was blamed on a signal failure.', zh: '延误被归咎于信号故障。', structure: 'was blamed / on a signal failure', grammar: 'be blamed on + 原因；be blamed for + 错事。', rationale: '被动句是考试常考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He was blamed the accident.', right: 'He was blamed for the accident.', reason: '被动后面不能直接再接一个宾语代替 for。', rule: 'be blamed for something。', special: 'The accident was blamed on him. 也可以。' },
    ],
    quiz: [
      { id: 'blamed.q1', senseId: 'blamed.s1', errorType: 'collocation', type: '搭配', prompt: 'He was blamed _____ the loss.', options: ['for', 'to', 'at'], answer: 'for', explain: 'be blamed for。' },
      { id: 'blamed.q2', senseId: 'blamed.s1', errorType: 'collocation', type: '搭配', prompt: 'The loss was blamed _____ him.', options: ['on', 'for him to', 'at him for'], answer: 'on', explain: 'be blamed on somebody。' },
      { id: 'blamed.q3', senseId: 'blamed.s1', errorType: 'grammar', type: '词形', prompt: 'blame 的过去式是：', options: ['blamed', 'blent', 'blode'], answer: 'blamed', explain: '规则动词。' },
      { id: 'blamed.q4', senseId: 'blamed.s1', errorType: 'confusable', type: '易混', prompt: '无可指责是：', options: ['blameless', 'blamed', 'blameful always'], answer: 'blameless', explain: '-less 表示没有。' },
    ],
    usage: { domains: ['新闻', '日常'], tone: '负面', commonConfusion: ['blameless'] },
  });
  D('blameless', {
    etymology: {
      origin: '英语派生：blame 加形容词后缀 -less，表示「没有可责备之处」。',
      prefix: null,
      root: { text: 'blame', gloss: '责备' },
      suffix: { text: '-less', gloss: '没有……的' },
      history: [
        { label: 'blame', text: '把过错算到某人头上' },
        { label: 'blameless', text: '无可指责、清白' },
      ],
      formationLogic: '没有 blame，就是不必受责。',
      mnemonic: '和 blamed 相反：-ed 是已经受责，-less 是没有过错。',
      note: 'a blameless life 清白的一生。语气偏书面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The inquiry found the nurse blameless.', chinese: '调查认定这名护士没有过错。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blameless.s1', en: 'Both drivers were ruled blameless after the dashcam was checked.', zh: '查看行车记录仪后，两名司机都被判定没有责任。', structure: 'were ruled blameless / after the dashcam was checked', grammar: 'be ruled blameless。后面常接 in the accident。', rationale: '法律或调查结论，不是「被责备」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The child was blameless for breaking the vase.', right: 'The child was blamed for breaking the vase. The witness was blameless.', reason: 'blameless 是「没有过错」；因某事受责备要用 blamed for。', rule: 'blameless 不接 for + 错事来表示受责。', special: 'innocent 更常用于罪名；blameless 强调道德或事故责任上无可指摘。' },
    ],
    quiz: [
      { id: 'blameless.q1', senseId: 'blameless.s1', errorType: 'meaning', type: '词义', prompt: 'blameless 最接近：', options: ['无可指责的', '受到责备的', '故意说谎的'], answer: '无可指责的', explain: '-less 表示没有可责备之处。' },
      { id: 'blameless.q2', senseId: 'blameless.s1', errorType: 'confusable', type: '易混', prompt: '因迟到受责备应写：', options: ['was blamed for being late', 'was blameless for being late', 'was blame for late'], answer: 'was blamed for being late', explain: '受责备是 blamed for。' },
      { id: 'blameless.q3', senseId: 'blameless.s1', errorType: 'meaning', type: '构词', prompt: '-less 在这里表示：', options: ['没有', '更加', '正在'], answer: '没有', explain: '如 careless、homeless。' },
      { id: 'blameless.q4', senseId: 'blameless.s1', errorType: 'collocation', type: '搭配', prompt: '调查认定她清白：She was _____ blameless.', options: ['found', 'made a', 'put'], answer: 'found', explain: 'find / rule somebody blameless。' },
    ],
    usage: { domains: ['新闻', '法律'], tone: '书面、中性偏褒', commonConfusion: ['blamed', 'innocent'] },
  });

  D('blanch', {
    etymology: {
      origin: '古法语 blanchir「使变白」，与 blanc「白」同源。烹饪义「焯」是后来的用法。',
      prefix: null,
      root: { text: 'blanc', gloss: '白' },
      suffix: null,
      history: [
        { label: 'blanchir', text: '使变白' },
        { label: 'blanch', text: '焯水；脸色发白' },
      ],
      formationLogic: '把颜色冲淡或煮到发白。蔬菜下沸水再捞起，也叫 blanch。',
      mnemonic: 'blank 是空白，blanch 是变白或焯。不要混成 bleach 的化学漂白。',
      note: 'blanch almonds 去皮；blanch at the news 听了消息脸色发白。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Blanch the beans for two minutes, then cool them in ice water.', chinese: '把豆角焯两分钟，再放进冰水冷却。' },
    ],
    contexts: [
      { domain: '烹饪', senseId: 'blanch.s1', en: 'Chefs blanch tomatoes so the skins slip off easily.', zh: '厨师把番茄焯一下，皮就容易剥掉。', structure: 'blanch tomatoes / so the skins slip off', grammar: '及物动词，宾语是食材。', rationale: '厨房步骤，不是漂白衣物。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Blanch the shirt with chlorine.', right: 'Bleach the shirt with chlorine. Blanch the spinach first.', reason: '化学漂白是 bleach；短时沸水处理是 blanch。', rule: 'blanch + 蔬菜、坚果；bleach + 织物、污渍。', special: '人 blanch 可以是吓得脸色发白，不及物。' },
    ],
    quiz: [
      { id: 'blanch.q1', senseId: 'blanch.s1', errorType: 'meaning', type: '词义', prompt: '菜谱里 blanch the peas 是：', options: ['把豌豆焯一下', '把豌豆染黑', '把豌豆冷冻一夜'], answer: '把豌豆焯一下', explain: '短时间沸水处理后捞出。' },
      { id: 'blanch.q2', senseId: 'blanch.s1', errorType: 'confusable', type: '易混', prompt: '用氯把白衬衫漂得更白：', options: ['bleach', 'blanch', 'blank'], answer: 'bleach', explain: '化学漂白用 bleach。' },
      { id: 'blanch.q3', senseId: 'blanch.s1', errorType: 'meaning', type: '词义', prompt: 'She blanched at the bill 是：', options: ['她看到账单脸色发白', '她把账单煮了', '她把账单签了名'], answer: '她看到账单脸色发白', explain: '吃惊、害怕时脸色变白。' },
      { id: 'blanch.q4', senseId: 'blanch.s1', errorType: 'collocation', type: '搭配', prompt: '焯完通常接着：cool them in _____ water.', options: ['ice', 'oil', 'ink'], answer: 'ice', explain: '冰水能停止继续加热。' },
    ],
    usage: { domains: ['烹饪', '文学'], tone: '中性', commonConfusion: ['bleach', 'blank'] },
  });

  D('bland', {
    etymology: {
      origin: '拉丁语 blandus「温和、讨好的」。英语里转成「味道或性格平淡、没有刺激」。',
      prefix: null,
      root: { text: 'blandus', gloss: '温和的' },
      suffix: null,
      history: [
        { label: 'blandus', text: '柔和、奉承' },
        { label: 'bland', text: '清淡的；乏味的、不动声色的' },
      ],
      formationLogic: '温和过了头，就变成没有味道、没有表情。',
      mnemonic: 'bland food 清淡；a bland smile 没有情绪的笑。不要当成 brand。',
      note: '医学上也说 bland diet，指不刺激肠胃的饮食。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The soup was hot but bland, so she added pepper.', chinese: '汤是热的，可是没什么味道，于是她加了胡椒。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'bland.s1', en: 'After the operation he could eat only bland food.', zh: '手术后他只能吃清淡的食物。', structure: 'could eat only / bland food', grammar: '形容词直接修饰 food、smile、speech。', rationale: '既可指味道也可指性格，此处是饮食。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'This brand of rice is too bland to read.', right: 'This brand of rice tastes bland. The novel is bland.', reason: 'brand 是品牌；bland 是平淡。读物乏味才说 the book is bland。', rule: '味道、表情、讲话都可以 bland，品牌用 brand。', special: 'mild 偏褒义「温和」；bland 常带「没意思」。' },
    ],
    quiz: [
      { id: 'bland.q1', senseId: 'bland.s1', errorType: 'meaning', type: '词义', prompt: 'a bland sauce 是：', options: ['味道很淡的酱', '很咸的酱', '名牌酱'], answer: '味道很淡的酱', explain: '缺少风味。' },
      { id: 'bland.q2', senseId: 'bland.s1', errorType: 'confusable', type: '易混', prompt: '商品的牌子是：', options: ['brand', 'bland', 'blend'], answer: 'brand', explain: '只差一个字母。' },
      { id: 'bland.q3', senseId: 'bland.s1', errorType: 'meaning', type: '词义', prompt: 'a bland reply 暗示：', options: ['回答平淡、没什么情绪', '回答非常尖锐', '回答用了方言'], answer: '回答平淡、没什么情绪', explain: '也可形容人或讲话。' },
      { id: 'bland.q4', senseId: 'bland.s1', errorType: 'collocation', type: '搭配', prompt: '病人常被建议吃：a _____ diet.', options: ['bland', 'brand', 'bold'], answer: 'bland', explain: '清淡饮食。' },
    ],
    usage: { domains: ['饮食', '评论'], tone: '常含贬义', commonConfusion: ['brand', 'mild'] },
  });

  D('blank', {
    etymology: {
      origin: '古法语 blanc「白」。白页上没有字，就成了 blank「空白」；脸上空白则是茫然。',
      prefix: null,
      root: { text: 'blanc', gloss: '白' },
      suffix: null,
      history: [
        { label: 'blanc', text: '白色' },
        { label: 'blank', text: '空白的；茫然的；空格' },
      ],
      formationLogic: '什么都没写上，或什么表情都没有。',
      mnemonic: 'fill in the blanks 填空。a blank look 一脸茫然。',
      note: '名词 a blank 可以是空格或空弹。go blank 脑子一片空白。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Leave the third line blank if you have no middle name.', chinese: '如果没有中间名，第三行留空。' },
    ],
    contexts: [
      { domain: '考试', senseId: 'blank.s1', en: 'Several students stared at the blank page and wrote nothing.', zh: '好几个学生盯着空白页，一个字也没写。', structure: 'stared at the blank page / and wrote nothing', grammar: 'blank 作定语。go blank 作表语。', rationale: '试卷语境，同时可联想到表情茫然。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Please white the form in the empty.', right: 'Please leave that box blank.', reason: '空着不填用 leave something blank，不是 white。', rule: 'a blank page；leave a line blank；a blank expression。', special: 'point-blank 是「直截了当、近距离」，不要拆开理解。' },
    ],
    quiz: [
      { id: 'blank.q1', senseId: 'blank.s1', errorType: 'meaning', type: '词义', prompt: 'a blank form 是：', options: ['空白表格', '已经填好的表格', '黑色封面的表格'], answer: '空白表格', explain: '上面还没有字。' },
      { id: 'blank.q2', senseId: 'blank.s1', errorType: 'collocation', type: '搭配', prompt: '这一格请留空：leave this box _____.', options: ['blank', 'bland', 'blond'], answer: 'blank', explain: 'leave something blank。' },
      { id: 'blank.q3', senseId: 'blank.s1', errorType: 'meaning', type: '词义', prompt: 'a blank stare 是：', options: ['茫然的凝视', '愤怒的怒视', '空白的试卷袋'], answer: '茫然的凝视', explain: '脸上没有表情。' },
      { id: 'blank.q4', senseId: 'blank.s1', errorType: 'confusable', type: '易混', prompt: '味道淡是：', options: ['bland', 'blank', 'blink'], answer: 'bland', explain: 'blank 是空，不是淡。' },
    ],
    usage: { domains: ['考试', '日常'], tone: '中性', commonConfusion: ['bland', 'empty'] },
  });

  D('blanket', {
    etymology: {
      origin: '古法语 blankete，由 blanc「白」加指小后缀而来，本是白色毛毯。引申为「覆盖一切的」。',
      prefix: null,
      root: { text: 'blanc', gloss: '白' },
      suffix: { text: '-et', gloss: '指小' },
      history: [
        { label: 'blankete', text: '白羊毛织的盖布' },
        { label: 'blanket', text: '毯子；全面的、一刀切的' },
      ],
      formationLogic: '毯子把床整个盖住，所以 a blanket ban 是不加区分的全面禁止。',
      mnemonic: '床上的是 a blanket；政策上的 blanket 是「一揽子、一律」。',
      note: '动词 blanket 是覆盖。a wet blanket 是扫兴的人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She pulled the blanket up to her chin.', chinese: '她把毯子拉到下巴。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blanket.s1', en: 'The council rejected a blanket ban and looked at each street separately.', zh: '议会否决了一刀切的禁令，改为逐条街道考虑。', structure: 'rejected a blanket ban / and looked at each street', grammar: 'blanket 作定语，修饰 ban、rule、statement。', rationale: '比喻义比织物义更常考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A blanket rule means the rule is made of wool.', right: 'A blanket rule applies to every case without exceptions.', reason: '修饰政策时 blanket 不是布料，而是「全面适用」。', rule: 'a blanket ban / refusal / statement。', special: 'security blanket 可以是安抚毯，也可比喻精神依靠。' },
    ],
    quiz: [
      { id: 'blanket.q1', senseId: 'blanket.s1', errorType: 'meaning', type: '词义', prompt: '床上的 blanket 是：', options: ['毯子', '枕头', '床单下的床垫'], answer: '毯子', explain: '厚盖布。' },
      { id: 'blanket.q2', senseId: 'blanket.s1', errorType: 'meaning', type: '词义', prompt: 'a blanket ban 是：', options: ['全面禁止', '只禁毛毯', '临时毛毯'], answer: '全面禁止', explain: '不加例外地覆盖所有情况。' },
      { id: 'blanket.q3', senseId: 'blanket.s1', errorType: 'collocation', type: '搭配', prompt: '扫兴的人可叫 a wet _____.', options: ['blanket', 'bland', 'block'], answer: 'blanket', explain: '习语 wet blanket。' },
      { id: 'blanket.q4', senseId: 'blanket.s1', errorType: 'confusable', type: '易混', prompt: '空白的纸是：', options: ['a blank sheet', 'a blanket sheet', 'a blanch sheet'], answer: 'a blank sheet', explain: '空白用 blank。' },
    ],
    usage: { domains: ['生活', '新闻'], tone: '中性', commonConfusion: ['blank'] },
  });

  D('blast', {
    etymology: {
      origin: '古英语 blæst「一阵吹气、强风」，与 blow 同源。爆炸义是后起的「气浪」。',
      prefix: null,
      root: { text: 'blæst', gloss: '一阵风' },
      suffix: null,
      history: [
        { label: 'blæst', text: '吹出的一阵气' },
        { label: 'blast', text: '强风；爆炸；动词炸毁' },
      ],
      formationLogic: '突然喷出的气流，后来也指爆炸的冲击。',
      mnemonic: 'a blast of wind 一阵风。blast the rock 炸石头。have a blast 口语是玩得很开心。',
      note: 'full blast 是开到最大。at a blast 不自然，说 in one blast 或 at full blast。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A blast of cold air hit us when the door opened.', chinese: '门一开，一阵冷风扑面而来。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blast.s1', en: 'Windows shattered in the blast, but the street was cleared quickly.', zh: '爆炸震碎了窗户，不过街道很快被清空。', structure: 'shattered in the blast', grammar: 'in the blast。动词 blast something 是炸毁。', rationale: '名词爆炸义，和风的一阵要靠语境分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The heater is on with a full explosion.', right: 'The heater is on at full blast.', reason: '开到最大是 at full blast，不是 explosion。', rule: 'a blast of air / music；at full blast。', special: '口语 a blast 也可以是「痛快的一段时光」。' },
    ],
    quiz: [
      { id: 'blast.q1', senseId: 'blast.s1', errorType: 'meaning', type: '词义', prompt: 'a bomb blast 是：', options: ['炸弹爆炸', '一阵细雨', '一块木板'], answer: '炸弹爆炸', explain: '爆炸及其气浪。' },
      { id: 'blast.q2', senseId: 'blast.s1', errorType: 'collocation', type: '搭配', prompt: '音乐开到最大：at full _____.', options: ['blast', 'bland', 'blank'], answer: 'blast', explain: 'at full blast。' },
      { id: 'blast.q3', senseId: 'blast.s1', errorType: 'meaning', type: '词义', prompt: 'a blast of wind 是：', options: ['一阵强风', '一场火灾', '一次停电'], answer: '一阵强风', explain: '与 blow 同源的本义。' },
      { id: 'blast.q4', senseId: 'blast.s1', errorType: 'collocation', type: '搭配', prompt: '工兵炸开岩石：They _____ the rock.', options: ['blasted', 'blanched', 'blamed'], answer: 'blasted', explain: '动词是炸毁。' },
    ],
    usage: { domains: ['新闻', '生活'], tone: '中性，爆炸义沉重', commonConfusion: ['blow', 'explosion'] },
  });

  D('blasted', {
    etymology: {
      origin: 'blast 加 -ed。可以是「被炸毁的」，口语里也用作咒骂，相当于讨厌的。',
      prefix: null,
      root: { text: 'blast', gloss: '爆炸、强风' },
      suffix: { text: '-ed', gloss: '过去分词或形容词' },
      history: [
        { label: 'blast', text: '炸、猛吹' },
        { label: 'blasted', text: '被炸毁的；该死的（口语）' },
      ],
      formationLogic: '爆炸留下的状态，或说话人把怒气「炸」在那个东西上。',
      mnemonic: 'the blasted bridge 是炸毁的桥。this blasted key 是「这该死的钥匙」，非正式。',
      note: '考试优先认「被炸毁」。咒骂义不要用在正式写作。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Nothing remained of the blasted warehouse except twisted metal.', chinese: '被炸毁的仓库除了扭曲的金属什么也没留下。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'blasted.s1', en: 'I cannot find my blasted glasses again.', zh: '我那副讨厌的眼镜又找不到了。', structure: 'cannot find / my blasted glasses', grammar: '形容词放在限定词和名词之间，表示厌烦。', rationale: '和第二义「被炸毁」靠场合区分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The minister described the school as blasted in a formal tribute.', right: 'The minister described the school as badly damaged. He called the delay blasted only in private.', reason: '咒骂义的 blasted 不适合悼词或公文。正式场合说 destroyed 或 damaged。', rule: '被炸毁可用 blasted building；发泄用 this blasted thing，限口语。', special: 'blasted heath 是文学里「荒芜的荒野」，来自风暴摧残，不一定是炸弹。' },
    ],
    quiz: [
      { id: 'blasted.q1', senseId: 'blasted.s1', errorType: 'meaning', type: '词义', prompt: 'a blasted bridge 在新闻里多半是：', options: ['被炸毁的桥', '崭新的桥', '木板桥'], answer: '被炸毁的桥', explain: 'blast 的过去分词。' },
      { id: 'blasted.q2', senseId: 'blasted.s1', errorType: 'context', type: '语域', prompt: 'this blasted rain 的语气是：', options: ['口语里的厌烦', '法律文书的客观', '烹饪步骤'], answer: '口语里的厌烦', explain: '相当于讨厌的。' },
      { id: 'blasted.q3', senseId: 'blasted.s1', errorType: 'grammar', type: '词形', prompt: 'blast 的过去式是：', options: ['blasted', 'blest', 'blow'], answer: 'blasted', explain: '规则动词。' },
      { id: 'blasted.q4', senseId: 'blasted.s1', errorType: 'confusable', type: '易混', prompt: '公然的错误是 blatant，不是：', options: ['blasted', 'blatant', 'blunt'], answer: 'blasted', explain: '题干问的是「不是」。blatant 才是公然。' },
    ],
    usage: { domains: ['新闻', '口语'], tone: '新闻中性；口语可粗鲁', commonConfusion: ['blatant'] },
  });

  D('blatant', {
    etymology: {
      origin: '十六世纪出现，可能与拉丁语 blatire「瞎嚷嚷」有关，原指吵闹刺耳，后指明目张胆。',
      prefix: null,
      root: { text: 'blatire', gloss: '胡说、嚷' },
      suffix: null,
      history: [
        { label: 'blatant', text: '早期：喧闹的' },
        { label: '今天', text: '公然的、毫不掩饰的（贬义）' },
      ],
      formationLogic: '吵到瞒不住，于是变成「摆在明面上还这么做」。',
      mnemonic: 'a blatant lie 明目张胆的谎。不要写成 blastant。',
      note: '副词 blatantly。比 obvious 多一层「不该这样还这样做」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Copying the whole paragraph was a blatant breach of the rules.', chinese: '整段照抄是公然违规。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'blatant.s1', en: 'The advert made a blatant claim that no test could support.', zh: '这则广告提出了一个没有任何测试能支持的明目张胆的说法。', structure: 'made a blatant claim / that no test could support', grammar: 'blatant + lie / attempt / discrimination。', rationale: '贬义，强调毫不掩饰。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The sunset was blatant and beautiful.', right: 'The sunset was brilliant. The cheat was blatant.', reason: 'blatant 不是「灿烂」，而是冒犯性地明显。', rule: '用于谎言、歧视、抄袭等不受欢迎的行为。', special: 'flagrant 也是公然，更偏「罪大恶极地明目张胆」。' },
    ],
    quiz: [
      { id: 'blatant.q1', senseId: 'blatant.s1', errorType: 'meaning', type: '词义', prompt: 'a blatant lie 是：', options: ['明目张胆的谎言', '善意的沉默', '被炸毁的桥'], answer: '明目张胆的谎言', explain: '明显而且不成体统。' },
      { id: 'blatant.q2', senseId: 'blatant.s1', errorType: 'confusable', type: '易混', prompt: '被爆炸摧毁用：', options: ['blasted', 'blatant', 'bland'], answer: 'blasted', explain: 'blatant 与爆炸无关。' },
      { id: 'blatant.q3', senseId: 'blatant.s1', errorType: 'grammar', type: '词形', prompt: '副词形式是：', options: ['blatantly', 'blatanted', 'blate'], answer: 'blatantly', explain: '形容词加 -ly。' },
      { id: 'blatant.q4', senseId: 'blatant.s1', errorType: 'collocation', type: '搭配', prompt: '哪一个搭配自然？', options: ['blatant discrimination', 'blatant sugar', 'blatant blanket'], answer: 'blatant discrimination', explain: '常修饰负面行为。' },
    ],
    usage: { domains: ['评论', '新闻'], tone: '贬义', commonConfusion: ['obvious', 'blasted'] },
  });

  D('blaze', {
    etymology: {
      origin: '古英语 blæse「火炬、明亮的火焰」，与 blaze「闪耀」同族。名词是烈火，动词是熊熊燃烧或闪耀。',
      prefix: null,
      root: { text: 'blæse', gloss: '火焰' },
      suffix: null,
      history: [
        { label: 'blæse', text: '火把' },
        { label: 'blaze', text: '烈火；燃烧；强光' },
      ],
      formationLogic: '又亮又猛的火。光线强烈也可以 blaze。',
      mnemonic: 'in a blaze 在火中。blaze a trail 是开辟道路，来自在树上砍出记号，不是放火。',
      note: 'a blaze of colour 一片绚丽。What the blazes 是旧式咒骂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Firefighters kept the blaze from reaching the school.', chinese: '消防员拦住了大火，没让它烧到学校。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blaze.s1', en: 'The warehouse blaze was under control by midnight.', zh: '仓库大火到午夜时得到控制。', structure: 'The warehouse blaze / was under control', grammar: '名词。动词：The fire blazed for hours.', rationale: '新闻标题里 blaze 常代替 fire，语气更猛。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He wore a school blaze to the match.', right: 'He wore a school blazer to the match. The roof was a blaze of flame.', reason: '制服外套是 blazer；烈火是 blaze。', rule: 'a blaze 是火或强光；blazer 是夹克。', special: 'blaze a trail 是开路，不要译成「烧出一条小径」除非真的在烧。' },
    ],
    quiz: [
      { id: 'blaze.q1', senseId: 'blaze.s1', errorType: 'meaning', type: '词义', prompt: 'a forest blaze 是：', options: ['森林大火', '森林夹克', '森林空白'], answer: '森林大火', explain: '猛烈的火。' },
      { id: 'blaze.q2', senseId: 'blaze.s1', errorType: 'confusable', type: '易混', prompt: '校服外套是：', options: ['blazer', 'blaze', 'bleach'], answer: 'blazer', explain: '多一个 r。' },
      { id: 'blaze.q3', senseId: 'blaze.s1', errorType: 'collocation', type: '搭配', prompt: '开辟道路：_____ a trail.', options: ['blaze', 'bleach', 'bleed'], answer: 'blaze', explain: '习语 blaze a trail。' },
      { id: 'blaze.q4', senseId: 'blaze.s1', errorType: 'meaning', type: '词义', prompt: 'Lights blazed in every window 是：', options: ['每扇窗都灯火通明', '每扇窗都被漂白', '每扇窗都关上了'], answer: '每扇窗都灯火通明', explain: '动词也可指闪耀。' },
    ],
    usage: { domains: ['新闻', '文学'], tone: '强烈', commonConfusion: ['blazer'] },
  });

  D('blazer', {
    etymology: {
      origin: '十九世纪英语：因颜色耀眼如 blaze「火焰」而得名的轻便夹克，起初常是俱乐部或船队的亮色外套。',
      prefix: null,
      root: { text: 'blaze', gloss: '火焰、闪耀' },
      suffix: { text: '-er', gloss: '物' },
      history: [
        { label: 'blaze', text: '明亮' },
        { label: 'blazer', text: '颜色鲜明的夹克，后成为校服、队服' },
      ],
      formationLogic: '亮得像一团火的上衣，不是灭火器，也不是纵火的人。',
      mnemonic: 'school blazer 校服外套。和 blaze 只差一个 r。',
      note: '可数名词。a striped blazer。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He buttoned his navy blazer before the photo.', chinese: '拍照前他扣上了藏青色西装外套。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'blazer.s1', en: 'Pupils must wear the school blazer on formal days.', zh: '正式场合学生必须穿校服外套。', structure: 'must wear / the school blazer', grammar: '可数，a / the blazer。', rationale: '服装，不是火灾。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The blazer destroyed three shops.', right: 'The blaze destroyed three shops. He bought a linen blazer.', reason: '火灾是 blaze；外套是 blazer。', rule: 'wear a blazer；fight a blaze。', special: '美式口语里 blazer 也可指普通运动外套，不一定有校徽。' },
    ],
    quiz: [
      { id: 'blazer.q1', senseId: 'blazer.s1', errorType: 'meaning', type: '词义', prompt: 'a school blazer 是：', options: ['校服夹克', '校园大火', '空白试卷'], answer: '校服夹克', explain: '轻便外套。' },
      { id: 'blazer.q2', senseId: 'blazer.s1', errorType: 'confusable', type: '易混', prompt: '仓库着火应说：', options: ['a blaze', 'a blazer', 'a bland'], answer: 'a blaze', explain: '火是 blaze。' },
      { id: 'blazer.q3', senseId: 'blazer.s1', errorType: 'collocation', type: '搭配', prompt: '穿上外套：_____ a blazer.', options: ['wear', 'burn', 'boil'], answer: 'wear', explain: '衣物动词用 wear。' },
      { id: 'blazer.q4', senseId: 'blazer.s1', errorType: 'grammar', type: '可数', prompt: '正确的是：', options: ['a blue blazer', 'a blue blazer-s water', 'many blazer'], answer: 'a blue blazer', explain: '可数名词，复数 blazers。' },
    ],
    usage: { domains: ['校园', '服装'], tone: '中性', commonConfusion: ['blaze'] },
  });

  D('bleach', {
    etymology: {
      origin: '古英语 blǣcan「使变白」，与 bleak 同源，都和「苍白」有关。名词是漂白剂。',
      prefix: null,
      root: { text: 'blǣcan', gloss: '变白' },
      suffix: null,
      history: [
        { label: 'blǣcan', text: '晒白、漂白' },
        { label: 'bleach', text: '漂白；漂白剂' },
      ],
      formationLogic: '用化学或日晒把颜色去掉。',
      mnemonic: 'bleach 对衣服和头发；blanch 对蔬菜。不要换用。',
      note: '不可数时是化学品：a bottle of bleach。动词 bleach something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Do not mix bleach with other cleaners.', chinese: '不要把漂白剂和其他清洁剂混在一起。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bleach.s1', en: 'She bleached the stained towel and hung it in the sun.', zh: '她把有污渍的毛巾漂了漂，挂在太阳下。', structure: 'bleached the stained towel / and hung it', grammar: '及物动词。名词前可加 household bleach。', rationale: '家用化学，不是烹调。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Bleach the broccoli for one minute.', right: 'Blanch the broccoli for one minute. Bleach the white shirts.', reason: '焯菜是 blanch；漂白是 bleach。', rule: 'bleach + fabric / hair / stain。', special: 'bleached blonde 是漂成的金发，和天然 blond 不同。' },
    ],
    quiz: [
      { id: 'bleach.q1', senseId: 'bleach.s1', errorType: 'meaning', type: '词义', prompt: 'household bleach 是：', options: ['家用漂白剂', '家用毯子', '家用锅炉'], answer: '家用漂白剂', explain: '使变白的化学品。' },
      { id: 'bleach.q2', senseId: 'bleach.s1', errorType: 'confusable', type: '易混', prompt: '把菠菜放进沸水几十秒：', options: ['blanch', 'bleach', 'bleed'], answer: 'blanch', explain: '烹饪用 blanch。' },
      { id: 'bleach.q3', senseId: 'bleach.s1', errorType: 'collocation', type: '搭配', prompt: '漂头发：_____ your hair.', options: ['bleach', 'bless', 'blot'], answer: 'bleach', explain: 'bleach 可接头发。' },
      { id: 'bleach.q4', senseId: 'bleach.s1', errorType: 'meaning', type: '词源', prompt: '古英语 blǣcan 的方向是：', options: ['使变白', '使变黑', '使变咸'], answer: '使变白', explain: '与 bleak 苍白同源。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['blanch'] },
  });

  D('bleak', {
    etymology: {
      origin: '古英语 blāc「苍白、发亮」，与 bleach 同源。风景苍白空旷，心情也就 bleak「凄凉、无望」。',
      prefix: null,
      root: { text: 'blāc', gloss: '苍白' },
      suffix: null,
      history: [
        { label: 'blāc', text: '苍白' },
        { label: 'bleak', text: '荒凉的；前景黯淡的' },
      ],
      formationLogic: '没有颜色、没有庇护，引申为没有希望。',
      mnemonic: 'a bleak hillside 荒坡。a bleak outlook 前景黯淡。',
      note: '比较级 bleaker，最高级 bleakest。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The moor looked bleak under the grey sky.', chinese: '灰蒙蒙的天下，荒原显得凄凉。' },
    ],
    contexts: [
      { domain: '经济', senseId: 'bleak.s1', en: 'With orders falling, the outlook for the factory is bleak.', zh: '订单下降，这家工厂的前景很黯淡。', structure: 'the outlook / is bleak', grammar: '表语形容词。outlook / future / prospect 常作主语。', rationale: '抽象义比地貌更常出现在阅读里。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please bleak the shirts.', right: 'Please bleach the shirts. The future looks bleak.', reason: 'bleach 是动词「漂白」；bleak 是形容词「荒凉、黯淡」。', rule: 'look / seem / remain bleak。', special: 'bleak 不用于美味或开心的场合。' },
    ],
    quiz: [
      { id: 'bleak.q1', senseId: 'bleak.s1', errorType: 'meaning', type: '词义', prompt: 'a bleak winter hillside 是：', options: ['荒凉的冬日山坡', '热闹的集市', '漂白的衬衫'], answer: '荒凉的冬日山坡', explain: '冷、空、没有生气。' },
      { id: 'bleak.q2', senseId: 'bleak.s1', errorType: 'meaning', type: '词义', prompt: 'The prospects are bleak 是：', options: ['前景黯淡', '前景一片光明', '前景很咸'], answer: '前景黯淡', explain: '没有希望。' },
      { id: 'bleak.q3', senseId: 'bleak.s1', errorType: 'confusable', type: '易混', prompt: '把布变白的动词是：', options: ['bleach', 'bleak', 'blink'], answer: 'bleach', explain: 'bleak 不是动词。' },
      { id: 'bleak.q4', senseId: 'bleak.s1', errorType: 'grammar', type: '词形', prompt: '最高级是：', options: ['bleakest', 'bleakerest', 'most bleakly noun'], answer: 'bleakest', explain: '单音节形容词加 -est。' },
    ],
    usage: { domains: ['文学', '新闻'], tone: '负面', commonConfusion: ['bleach'] },
  });

  D('bleed', {
    etymology: {
      origin: '古英语 blēdan，由 blood 派生，意思就是流血。过去式 bled，过去分词 bled。',
      prefix: null,
      root: { text: 'blood', gloss: '血' },
      suffix: null,
      history: [
        { label: 'blēdan', text: '流血' },
        { label: 'bleed', text: '出血；颜色渗出；比喻被榨取' },
      ],
      formationLogic: '从 blood 变来的动词，元音变成 ee，过去式再缩短成 bled。',
      mnemonic: 'bleed–bled–bled。不要写成 bleeded。',
      note: 'My nose is bleeding. 颜色 bleed into each other 是渗色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'His knee would not stop bleeding.', chinese: '他的膝盖血流不止。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'bleed.s1', en: 'Press a clean cloth on the cut until it stops bleeding.', zh: '用干净布按住伤口，直到血止住。', structure: 'until it stops bleeding', grammar: '不及物为主。及物：The doctor bled the patient 是旧时放血，今少用。', rationale: '急救场景。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He bleeded for ten minutes.', right: 'He bled for ten minutes.', reason: 'bleed 是不规则动词，过去式和过去分词都是 bled。', rule: 'bleed, bled, bled, bleeding。', special: 'bleed somebody dry 是把人的钱榨干，比喻。' },
    ],
    quiz: [
      { id: 'bleed.q1', senseId: 'bleed.s1', errorType: 'meaning', type: '词义', prompt: 'The wound is bleeding 是：', options: ['伤口在流血', '伤口在变白', '伤口在结冰'], answer: '伤口在流血', explain: 'lose blood。' },
      { id: 'bleed.q2', senseId: 'bleed.s1', errorType: 'grammar', type: '词形', prompt: '过去式是：', options: ['bled', 'bleeded', 'blood'], answer: 'bled', explain: '不规则。' },
      { id: 'bleed.q3', senseId: 'bleed.s1', errorType: 'collocation', type: '搭配', prompt: '鼻子流血：My nose is _____.', options: ['bleeding', 'blending', 'blessing'], answer: 'bleeding', explain: '现在分词。' },
      { id: 'bleed.q4', senseId: 'bleed.s1', errorType: 'meaning', type: '词义', prompt: 'Colours bleed in the wash 是：', options: ['洗涤时颜色渗开', '衣服在流血', '颜色变得更大胆'], answer: '洗涤时颜色渗开', explain: '染料渗出。' },
    ],
    usage: { domains: ['医学', '生活'], tone: '中性', commonConfusion: ['blood'] },
  });

  D('blemish', {
    etymology: {
      origin: '古法语 blemiss-，动词 blemir「使变苍白、损伤」，进入英语后指瑕疵，也可指玷污名声。',
      prefix: null,
      root: { text: 'blemir', gloss: '弄伤、使失色' },
      suffix: null,
      history: [
        { label: 'blemir', text: '使表面受损' },
        { label: 'blemish', text: '瑕疵；玷污' },
      ],
      formationLogic: '表面或名誉上的一点缺损。',
      mnemonic: 'a blemish on the skin 斑点。a blemish on his record 污点。',
      note: '动词 blemish something。without a blemish 完美无瑕。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'There was a small blemish on the apple skin.', chinese: '苹果皮上有一小块瑕疵。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'blemish.s1', en: 'One late payment was the only blemish on an otherwise clean credit record.', zh: '一次逾期付款是原本干净的信用记录上唯一的污点。', structure: 'the only blemish on / a clean credit record', grammar: 'a blemish on something。', rationale: '名誉义比皮肤义更常出现在议论文。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'It was a blemish in his record.', right: 'It was a blemish on his record.', reason: '污点「在……之上」用 on，不用 in。', rule: 'a blemish on the skin / on one\'s reputation。', special: 'unblemished 是毫无瑕疵的。' },
    ],
    quiz: [
      { id: 'blemish.q1', senseId: 'blemish.s1', errorType: 'meaning', type: '词义', prompt: 'a blemish on the glass 是：', options: ['玻璃上的瑕疵', '玻璃上的毯子', '玻璃的标价'], answer: '玻璃上的瑕疵', explain: '使不完美的痕迹。' },
      { id: 'blemish.q2', senseId: 'blemish.s1', errorType: 'collocation', type: '介词', prompt: 'a blemish _____ his name.', options: ['on', 'at', 'by'], answer: 'on', explain: 'on one\'s name / record。' },
      { id: 'blemish.q3', senseId: 'blemish.s1', errorType: 'confusable', type: '易混', prompt: '混合均匀是：', options: ['blend', 'blemish', 'bleed'], answer: 'blend', explain: 'blemish 不是混合。' },
      { id: 'blemish.q4', senseId: 'blemish.s1', errorType: 'meaning', type: '词义', prompt: 'The scandal blemished her career 是：', options: ['丑闻玷污了她的事业', '丑闻漂白了她的事业', '丑闻为她祝福'], answer: '丑闻玷污了她的事业', explain: '动词是损害完美或名誉。' },
    ],
    usage: { domains: ['日常', '评论'], tone: '负面', commonConfusion: ['stain', 'blend'] },
  });

  D('blend', {
    etymology: {
      origin: '约十四世纪来自北欧语，与古诺尔斯语 blanda「混合」有关。强调混得看不出界限。',
      prefix: null,
      root: { text: 'blanda', gloss: '混合' },
      suffix: null,
      history: [
        { label: 'blanda', text: '混在一起' },
        { label: 'blend', text: '调和；混合物' },
      ],
      formationLogic: '不是随便堆在一起，而是合成一体。',
      mnemonic: 'blend in 融入。a blend of tea 混合茶。',
      note: '名词和动词同形。过去式一般 blended，旧式 blent 少见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Blend the butter and sugar until the mixture is pale.', chinese: '把黄油和糖搅打到混合物颜色变浅。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'blend.s1', en: 'In a grey coat he blended into the crowd outside the station.', zh: '穿着灰大衣，他混进了车站外的人群。', structure: 'blended into the crowd', grammar: 'blend into / with。blend A with B 或 blend A and B。', rationale: '融入义，不是食物搅拌。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She blended with the sugar into the bowl by hand only the noun.', right: 'She blended the sugar with the butter.', reason: '动词要有被混合的对象，或用 blend into 表示融入。', rule: 'blend A with B；blend into the background。', special: 'mix 更普通；blend 强调顺滑、协调。' },
    ],
    quiz: [
      { id: 'blend.q1', senseId: 'blend.s1', errorType: 'meaning', type: '词义', prompt: 'a blend of spices 是：', options: ['混合香料', '一块香料瑕疵', '香料出血'], answer: '混合香料', explain: '调和后的混合物。' },
      { id: 'blend.q2', senseId: 'blend.s1', errorType: 'collocation', type: '搭配', prompt: '融入背景：blend _____ the background.', options: ['into', 'on', 'at'], answer: 'into', explain: 'blend into。' },
      { id: 'blend.q3', senseId: 'blend.s1', errorType: 'confusable', type: '易混', prompt: '脸上的小疤痕是：', options: ['a blemish', 'a blend', 'a blazer'], answer: 'a blemish', explain: '瑕疵不是混合物。' },
      { id: 'blend.q4', senseId: 'blend.s1', errorType: 'grammar', type: '词形', prompt: '现在最常见的过去式是：', options: ['blended', 'blent as the only modern form', 'blond'], answer: 'blended', explain: '规则形式为主。' },
    ],
    usage: { domains: ['烹饪', '社会'], tone: '中性', commonConfusion: ['mix', 'blemish'] },
  });

  D('bless', {
    etymology: {
      origin: '古英语 blētsian，原与血祭有关，受拉丁语 benedicere「说好话、祝福」影响后变成赐福。',
      prefix: null,
      root: { text: 'blētsian', gloss: '祝圣、赐福' },
      suffix: null,
      history: [
        { label: 'blētsian', text: '以血标为圣，后与 benedicere 的「祝福」合流' },
        { label: 'bless', text: '祝福、保佑' },
      ],
      formationLogic: '求神眷顾，或郑重地说出好运。',
      mnemonic: '过去式 blessed 或 blest。Bless you 对着喷嚏，也用于感谢。',
      note: 'bless somebody with something 赋予。God bless。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The priest blessed the couple at the end of the service.', chinese: '礼拜结束时神父祝福了这对夫妇。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bless.s1', en: 'She says the village is blessed with clean water and kind neighbours.', zh: '她说村子有幸拥有干净的水和善良的邻居。', structure: 'is blessed with / clean water', grammar: 'be blessed with 表示幸运地拥有。', rationale: '世俗用法，不一定在教堂里。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Bless the beans in boiling water.', right: 'Blanch the beans in boiling water. Bless the new house.', reason: '焯是 blanch；祝福是 bless。', rule: 'bless somebody；be blessed with something。', special: '过去分词作形容词常读成两个音节：a blessed relief。' },
    ],
    quiz: [
      { id: 'bless.q1', senseId: 'bless.s1', errorType: 'meaning', type: '词义', prompt: 'bless the children 是：', options: ['祝福孩子们', '责备孩子们', '把孩子们漂白'], answer: '祝福孩子们', explain: '求保佑或赐福。' },
      { id: 'bless.q2', senseId: 'bless.s1', errorType: 'collocation', type: '搭配', prompt: '有幸拥有：be blessed _____ good health.', options: ['with', 'for', 'on'], answer: 'with', explain: 'be blessed with。' },
      { id: 'bless.q3', senseId: 'bless.s1', errorType: 'confusable', type: '易混', prompt: '蔬菜下锅焯一下：', options: ['blanch', 'bless', 'bliss'], answer: 'blanch', explain: '三个 bl- 词要分开。' },
      { id: 'bless.q4', senseId: 'bless.s1', errorType: 'grammar', type: '词形', prompt: '另一种过去式拼写是：', options: ['blest', 'blod', 'blent'], answer: 'blest', explain: 'blessed 更常见，blest 也正确。' },
    ],
    usage: { domains: ['宗教', '生活'], tone: '褒义或庄重', commonConfusion: ['blanch', 'bliss'] },
  });

  D('blessing', {
    etymology: {
      origin: 'bless 的名词形式，古英语 bletsung。既可以是祝福的话，也可以是值得感激的幸事，或正式批准。',
      prefix: null,
      root: { text: 'bless', gloss: '祝福' },
      suffix: { text: '-ing', gloss: '名词化' },
      history: [
        { label: 'bletsung', text: '祝圣、祈福' },
        { label: 'blessing', text: '祝福；幸事；同意' },
      ],
      formationLogic: '祝福这件事，或祝福带来的好处。',
      mnemonic: 'a blessing in disguise 塞翁失马。give your blessing 表示同意。',
      note: 'count me a blessing 不自然。说 count your blessings。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Good health is a blessing you notice when it fails.', chinese: '健康是一种幸事，失去时才觉得。' },
    ],
    contexts: [
      { domain: '家庭', senseId: 'blessing.s1', en: 'They married with her parents\' blessing.', zh: '他们在她父母的祝福下结了婚。', structure: 'married with / her parents\' blessing', grammar: 'with somebody\'s blessing 表示同意、祝愿。', rationale: '批准义，不只是宗教用语。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'It was a blessing under disguise.', right: 'It was a blessing in disguise.', reason: '固定介词是 in，不是 under。', rule: 'a blessing in disguise；count your blessings。', special: 'a mixed blessing 是有利有弊的事。' },
    ],
    quiz: [
      { id: 'blessing.q1', senseId: 'blessing.s1', errorType: 'meaning', type: '词义', prompt: 'Good rain was a blessing 是：', options: ['这场好雨是件幸事', '这场雨是瑕疵', '这场雨是封锁'], answer: '这场好雨是件幸事', explain: '值得感激的好事。' },
      { id: 'blessing.q2', senseId: 'blessing.s1', errorType: 'collocation', type: '搭配', prompt: '因祸得福：a blessing _____ disguise.', options: ['in', 'on', 'at'], answer: 'in', explain: 'in disguise。' },
      { id: 'blessing.q3', senseId: 'blessing.s1', errorType: 'meaning', type: '词义', prompt: 'with the manager\'s blessing 是：', options: ['得到经理的同意', '被经理漂白', '被经理责备'], answer: '得到经理的同意', explain: '批准、祝福。' },
      { id: 'blessing.q4', senseId: 'blessing.s1', errorType: 'confusable', type: '易混', prompt: '极乐的名词更接近：', options: ['bliss', 'blessing only as a church song', 'bleed'], answer: 'bliss', explain: 'bliss 是极乐；blessing 是幸事或祝福。' },
    ],
    usage: { domains: ['生活', '宗教'], tone: '褒义', commonConfusion: ['bliss'] },
  });

  D('blind', {
    etymology: {
      origin: '古英语 blind「看不见的」。引申为缺乏判断，动词是使失明，名词 blind 也可指百叶窗。',
      prefix: null,
      root: { text: 'blind', gloss: '盲' },
      suffix: null,
      history: [
        { label: 'blind', text: '看不见' },
        { label: '引申', text: '盲目的；使看不见；窗帘' },
      ],
      formationLogic: '眼睛不工作，或判断像被挡住。百叶窗把光挡住，所以也叫 blind。',
      mnemonic: 'turn a blind eye 睁一只眼闭一只眼。blind to the risk 对风险视而不见。',
      note: 'the blind 统称盲人时前面要有 the。a blind 在英式英语常是卷帘或百叶窗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The accident did not blind him, but his left eye was weak.', chinese: '事故没有使他失明，但左眼视力变弱了。' },
    ],
    contexts: [
      { domain: '议论文', senseId: 'blind.s1', en: 'Voters grew blind to the risk because the ads sounded so certain.', zh: '广告说得那么肯定，选民对风险变得视而不见。', structure: 'grew blind to the risk', grammar: 'blind to something。动词 blind somebody to something。', rationale: '比喻义是阅读高频。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She is blind of her own faults.', right: 'She is blind to her own faults.', reason: '视而不见用 blind to，不用 of。', rule: 'blind to something；a blind corner 视线被挡的弯道。', special: 'blind somebody with science 是用术语把人搞晕。' },
    ],
    quiz: [
      { id: 'blind.q1', senseId: 'blind.s1', errorType: 'meaning', type: '词义', prompt: 'blind from birth 是：', options: ['先天失明', '假装睡觉', '非常大胆'], answer: '先天失明', explain: '不能看见。' },
      { id: 'blind.q2', senseId: 'blind.s1', errorType: 'collocation', type: '介词', prompt: '对危险视而不见：blind _____ the danger.', options: ['to', 'of', 'at'], answer: 'to', explain: 'blind to。' },
      { id: 'blind.q3', senseId: 'blind.s1', errorType: 'meaning', type: '词义', prompt: '英式英语里 draw the blinds 多半是：', options: ['拉上窗帘', '拉上毯子', '写出蓝图'], answer: '拉上窗帘', explain: 'blind 可指窗罩。' },
      { id: 'blind.q4', senseId: 'blind.s1', errorType: 'collocation', type: '习语', prompt: '装作没看见：turn a blind _____.', options: ['eye', 'ear', 'hand'], answer: 'eye', explain: 'turn a blind eye。' },
    ],
    usage: { domains: ['医学', '议论文', '家居'], tone: '中性；比喻时可含批评', commonConfusion: ['blink'] },
  });

  D('blink', {
    etymology: {
      origin: '中古英语 blinken，与中古荷兰语 blinken「闪光」有关。眼睛快速开合，灯快速明灭，都是 blink。',
      prefix: null,
      root: { text: 'blinken', gloss: '闪光、眨眼' },
      suffix: null,
      history: [
        { label: 'blinken', text: '闪耀' },
        { label: 'blink', text: '眨眼；闪烁' },
      ],
      formationLogic: '短促地开合或明灭。',
      mnemonic: 'in the blink of an eye 一眨眼。on the blink 是设备出故障，口语。',
      note: 'blink at something 可以是吃惊得眨眼。don\'t blink 是别眨眼、别错过。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The cursor blinked at the end of the line.', chinese: '光标在行尾一闪一闪。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'blink.s1', en: 'She did not blink when they offered her the harder job.', zh: '他们把更难的工作交给她时，她眼都不眨一下。', structure: 'did not blink / when they offered', grammar: '不及物。比喻毫不犹豫、毫不吃惊。', rationale: '不只是生理动作。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He could not blink the small print because he had no glasses.', right: 'He could not read the small print. Dust made him blink.', reason: 'blink 不是「看见」或 blind。看不见用 blind 或 cannot see。', rule: 'blink 是快速闭眼或灯闪。', special: 'not blink an eye 表示毫不在意。' },
    ],
    quiz: [
      { id: 'blink.q1', senseId: 'blink.s1', errorType: 'meaning', type: '词义', prompt: 'blink in the sunlight 是：', options: ['在阳光下眨眼', '在阳光下失明', '在阳光下祝福'], answer: '在阳光下眨眼', explain: '快速闭眼。' },
      { id: 'blink.q2', senseId: 'blink.s1', errorType: 'collocation', type: '习语', prompt: '转眼之间：in the blink of an _____.', options: ['eye', 'ear', 'arm'], answer: 'eye', explain: '固定说法。' },
      { id: 'blink.q3', senseId: 'blink.s1', errorType: 'meaning', type: '词义', prompt: 'The radio is on the blink 是：', options: ['收音机出故障了', '收音机在眨眼', '收音机很荒凉'], answer: '收音机出故障了', explain: '口语：设备不正常。' },
      { id: 'blink.q4', senseId: 'blink.s1', errorType: 'confusable', type: '易混', prompt: '永久看不见是：', options: ['blind', 'blink', 'bland'], answer: 'blind', explain: 'blink 是动作，不是状态「盲」。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['blind'] },
  });

  D('bliss', {
    etymology: {
      origin: '古英语 bliss「快乐」，与 blīþe（现代 blithe「轻快的」）同源，不是 bless 的名词。',
      prefix: null,
      root: { text: 'bliss', gloss: '喜悦' },
      suffix: null,
      history: [
        { label: 'bliss', text: '古英语：欢乐' },
        { label: '今天', text: '极乐、巨大的幸福' },
      ],
      formationLogic: '程度高于 happiness，接近完美的快乐。',
      mnemonic: 'Ignorance is bliss 难得糊涂。married bliss 新婚的幸福。',
      note: '形容词 blissful。不要写成 bless。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'For one afternoon the quiet garden was pure bliss.', chinese: '那天下午，安静的花园就是纯粹的极乐。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bliss.s1', en: 'After the exams, a whole day of sleep felt like bliss.', zh: '考试结束后，能睡一整天简直是莫大的幸福。', structure: 'felt like bliss', grammar: '不可数名词为主。a bliss 少见。', rationale: '程度很高的快乐，不是一句祝福。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The priest gave them his bliss.', right: 'The priest gave them his blessing. The holiday was bliss.', reason: '祝福、批准是 blessing；极乐状态是 bliss。', rule: 'bliss 是感受；blessing 可以是话语或同意。', special: 'ignorance is bliss 不要改成 blessing。' },
    ],
    quiz: [
      { id: 'bliss.q1', senseId: 'bliss.s1', errorType: 'meaning', type: '词义', prompt: 'domestic bliss 是：', options: ['家庭的极乐', '家庭的毯子', '家庭的账单'], answer: '家庭的极乐', explain: '巨大的幸福。' },
      { id: 'bliss.q2', senseId: 'bliss.s1', errorType: 'collocation', type: '习语', prompt: 'Ignorance is _____.', options: ['bliss', 'bless', 'bleed'], answer: 'bliss', explain: '难得糊涂。' },
      { id: 'bliss.q3', senseId: 'bliss.s1', errorType: 'confusable', type: '易混', prompt: '父母点头同意婚事：', options: ['their blessing', 'their bliss', 'their bleach'], answer: 'their blessing', explain: '同意是 blessing。' },
      { id: 'bliss.q4', senseId: 'bliss.s1', errorType: 'grammar', type: '词性', prompt: 'bliss 通常是：', options: ['不可数名词', '及物动词', '比较级形容词'], answer: '不可数名词', explain: '形容词是 blissful。' },
    ],
    usage: { domains: ['生活', '文学'], tone: '强烈褒义', commonConfusion: ['blessing'] },
  });

  D('bloc', {
    etymology: {
      origin: '法语 bloc「一整块」。政治用语指行动一致的国家或党派集团，拼写保留法语，没有 k。',
      prefix: null,
      root: { text: 'bloc', gloss: '块、集团' },
      suffix: null,
      history: [
        { label: 'bloc', text: '法语：整块' },
        { label: '政治', text: '阵营，如 a trade bloc' },
      ],
      formationLogic: '像一整块石头那样一起移动的群体。',
      mnemonic: 'bloc 没有 k，专指政治、贸易集团。block 才是街区和阻挡。',
      note: 'the Eastern bloc 是历史说法。a voting bloc 投票集团。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The two parties formed a voting bloc on tax.', chinese: '两党在税收问题上结成了投票阵营。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bloc.s1', en: 'Several small states voted as a bloc against the new tariff.', zh: '几个小国结成阵营，投票反对新关税。', structure: 'voted as a bloc / against the tariff', grammar: 'as a bloc。可数名词。', rationale: '政治用语，拼写是考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We walked around the bloc to the bakery.', right: 'We walked around the block to the bakery. They joined a trade bloc.', reason: '街区是 block。bloc 只用于国家、政党等集团。', rule: 'a power / trading / voting bloc。', special: '发音和 block 相同。' },
    ],
    quiz: [
      { id: 'bloc.q1', senseId: 'bloc.s1', errorType: 'meaning', type: '词义', prompt: 'a trade bloc 是：', options: ['贸易集团', '一块木头', '一座街区'], answer: '贸易集团', explain: '一起行动的国家或组织。' },
      { id: 'bloc.q2', senseId: 'bloc.s1', errorType: 'confusable', type: '易混', prompt: 'walk around the _____ 里表示街区用：', options: ['block', 'bloc', 'blot'], answer: 'block', explain: 'bloc 不指街道。' },
      { id: 'bloc.q3', senseId: 'bloc.s1', errorType: 'collocation', type: '搭配', prompt: '投票时结成一体：vote as a _____.', options: ['bloc', 'bliss', 'bleed'], answer: 'bloc', explain: 'as a bloc。' },
      { id: 'bloc.q4', senseId: 'bloc.s1', errorType: 'meaning', type: '拼写', prompt: '政治集团的拼写是：', options: ['bloc', 'block always', 'blok'], answer: 'bloc', explain: '法语拼写，无 k。' },
    ],
    usage: { domains: ['新闻', '政治'], tone: '中性', commonConfusion: ['block'] },
  });

  D('block', {
    etymology: {
      origin: '中世纪拉丁语 bloccus、古法语 bloc「大块木头」。英语里既是块、街区，也是阻塞。',
      prefix: null,
      root: { text: 'bloc', gloss: '大块' },
      suffix: null,
      history: [
        { label: 'bloc', text: '一块木材或石头' },
        { label: 'block', text: '块；街区；阻碍' },
      ],
      formationLogic: '一大块东西可以当成建材，也可以挡在路上。',
      mnemonic: 'a block of ice 冰块。a block away 隔一条街。block the road 堵路。',
      note: 'writer\'s block 写作障碍。block out 挡住或划出时间。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A fallen tree blocked the only road into the village.', chinese: '一棵倒下的树堵住了进村的唯一道路。' },
    ],
    contexts: [
      { domain: '城市', senseId: 'block.s1', en: 'The clinic is three blocks east of the station.', zh: '诊所在车站以东三个街区。', structure: 'three blocks east of the station', grammar: '美式英语里 block 是街区距离。英式更常说 street。', rationale: '空间义，和动词阻挡不同。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'China joined the trading block.', right: 'China joined the trading bloc. Workers blocked the gate.', reason: '贸易集团拼作 bloc。block 是块、街区或阻挡。', rule: 'block the way；a block of flats；a trading bloc。', special: 'apartment block 是公寓楼，英式常见。' },
    ],
    quiz: [
      { id: 'block.q1', senseId: 'block.s1', errorType: 'meaning', type: '词义', prompt: 'a block of wood 是：', options: ['一块木头', '一个政治阵营', '一阵风'], answer: '一块木头', explain: '固体的一块。' },
      { id: 'block.q2', senseId: 'block.s1', errorType: 'meaning', type: '词义', prompt: 'block the drain 是：', options: ['堵住下水道', '祝福下水道', '漂白下水道'], answer: '堵住下水道', explain: '动词阻碍。' },
      { id: 'block.q3', senseId: 'block.s1', errorType: 'confusable', type: '易混', prompt: '东欧国家集团历史上写作：', options: ['the Eastern bloc', 'the Eastern block', 'the Eastern blot'], answer: 'the Eastern bloc', explain: '政治阵营无 k。' },
      { id: 'block.q4', senseId: 'block.s1', errorType: 'collocation', type: '搭配', prompt: '写不出东西：writer\'s _____.', options: ['block', 'bliss', 'blaze'], answer: 'block', explain: 'writer\'s block。' },
    ],
    usage: { domains: ['城市', '日常'], tone: '中性', commonConfusion: ['bloc'] },
  });

  D('blockade', {
    etymology: {
      origin: 'block 加后缀 -ade（比较 barricade）。十六世纪起指用武力阻止进出，尤其是港口封锁。',
      prefix: null,
      root: { text: 'block', gloss: '阻挡' },
      suffix: { text: '-ade', gloss: '行动、状态' },
      history: [
        { label: 'block', text: '挡住' },
        { label: 'blockade', text: '封锁港口、城市或道路' },
      ],
      formationLogic: '有组织地把出入口封死，不只是路上偶然一堵。',
      mnemonic: 'a naval blockade 海上封锁。run a blockade 是闯过封锁。',
      note: '动词 blockade a port。名词前常用 impose / lift a blockade。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The blockade stopped fuel from reaching the port.', chinese: '封锁使燃料无法抵达港口。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blockade.s1', en: 'Ships were searched under the blockade, and aid convoys waited offshore.', zh: '封锁期间船只受到搜查，救援车队在近海等待。', structure: 'under the blockade', grammar: 'under / during a blockade。lift the blockade 解除。', rationale: '官方或军事行动，不是家里水管堵住。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'There is a blockade in the kitchen sink.', right: 'There is a blockage in the kitchen sink. The navy imposed a blockade.', reason: '水管堵塞是 blockage；封锁是 blockade。', rule: 'impose / lift a blockade on a place。', special: 'blockade 强调人为禁止进出。' },
    ],
    quiz: [
      { id: 'blockade.q1', senseId: 'blockade.s1', errorType: 'meaning', type: '词义', prompt: 'a naval blockade 是：', options: ['海上封锁', '船上的毯子', '一次焯水'], answer: '海上封锁', explain: '阻止船只进出。' },
      { id: 'blockade.q2', senseId: 'blockade.s1', errorType: 'collocation', type: '搭配', prompt: '解除封锁：_____ the blockade.', options: ['lift', 'bleach', 'bless'], answer: 'lift', explain: 'lift 或 end a blockade。' },
      { id: 'blockade.q3', senseId: 'blockade.s1', errorType: 'confusable', type: '易混', prompt: '下水道里的堵塞物是：', options: ['a blockage', 'a blockade', 'a blazer'], answer: 'a blockage', explain: '日常堵塞用 blockage。' },
      { id: 'blockade.q4', senseId: 'blockade.s1', errorType: 'collocation', type: '搭配', prompt: '实施封锁：_____ a blockade.', options: ['impose', 'boil', 'blush'], answer: 'impose', explain: 'impose a blockade。' },
    ],
    usage: { domains: ['新闻', '历史'], tone: '严肃', commonConfusion: ['blockage', 'block'] },
  });

  D('blockage', {
    etymology: {
      origin: '英语派生：block 加名词后缀 -age，表示阻塞这件事或造成阻塞的东西。',
      prefix: null,
      root: { text: 'block', gloss: '阻挡' },
      suffix: { text: '-age', gloss: '状态或结果' },
      history: [
        { label: 'block', text: '堵住' },
        { label: 'blockage', text: '堵塞、堵塞物' },
      ],
      formationLogic: '被 block 之后的状态。',
      mnemonic: 'a blockage in the pipe 管道堵塞。医学上 a blockage in an artery 动脉阻塞。',
      note: '可数。clear a blockage。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A blockage in the drain flooded the yard.', chinese: '排水管堵塞，院子进了水。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'blockage.s1', en: 'The scan showed a blockage in a small artery.', zh: '扫描显示一条小动脉有阻塞。', structure: 'showed a blockage in / a small artery', grammar: 'a blockage in something。', rationale: '身体管道和真实管道都用这个词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The UN voted to end the pipe blockage of the country.', right: 'The UN voted to end the blockade. A plumber cleared the blockage.', reason: '国家层面的封锁是 blockade；管道、血管里的堵塞是 blockage。', rule: 'a blockage in a pipe / an artery。', special: 'block 是动词或「一块、街区」；blockage 是堵塞名词。' },
    ],
    quiz: [
      { id: 'blockage.q1', senseId: 'blockage.s1', errorType: 'meaning', type: '词义', prompt: 'a blockage in the pipe 是：', options: ['管道堵塞', '海上封锁', '一块木板'], answer: '管道堵塞', explain: '堵住通道的东西或状态。' },
      { id: 'blockage.q2', senseId: 'blockage.s1', errorType: 'collocation', type: '介词', prompt: 'a blockage _____ the artery.', options: ['in', 'on top', 'by bliss'], answer: 'in', explain: 'in the artery / pipe。' },
      { id: 'blockage.q3', senseId: 'blockage.s1', errorType: 'confusable', type: '易混', prompt: '海军阻止船只进港：', options: ['blockade', 'blockage', 'blog'], answer: 'blockade', explain: '军事或官方封锁。' },
      { id: 'blockage.q4', senseId: 'blockage.s1', errorType: 'collocation', type: '搭配', prompt: ' plumber 要做的是：_____ the blockage.', options: ['clear', 'bless', 'blanch'], answer: 'clear', explain: 'clear / remove a blockage。' },
    ],
    usage: { domains: ['生活', '医学'], tone: '中性', commonConfusion: ['blockade'] },
  });

  D('blog', {
    etymology: {
      origin: '现代英语：web log 缩合成 blog，约一九九九年流行。名词是博客，动词是写博客。',
      prefix: null,
      root: { text: 'web log', gloss: '网络日志' },
      suffix: null,
      history: [
        { label: 'web log', text: '网上按时间排列的记录' },
        { label: 'blog', text: '博客；to blog 更新博客' },
      ],
      formationLogic: '把 web log 压成一个音节。没有古典词根。',
      mnemonic: 'blog post 博文。blogger 写博客的人。vlog 是视频版。',
      note: '动词 blog about something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She blogs about buses and cheap food in the city.', chinese: '她在博客上写这座城市的公交和便宜吃食。' },
    ],
    contexts: [
      { domain: '网络', senseId: 'blog.s1', en: 'His travel blog gained readers after the piece on night trains.', zh: '那篇关于夜车的文章发出后，他的旅行博客多了读者。', structure: 'His travel blog / gained readers', grammar: '可数名词。动词 blog about。', rationale: '现代媒体，不是集团 bloc。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The countries formed a blog against the tax.', right: 'The countries formed a bloc against the tax. She started a food blog.', reason: '政治集团是 bloc；个人网站日志是 blog。', rule: 'a blog about something；write a blog post。', special: '发音是 /blɒɡ/，o 短，不要读成 blow。' },
    ],
    quiz: [
      { id: 'blog.q1', senseId: 'blog.s1', errorType: 'meaning', type: '词义', prompt: 'a travel blog 是：', options: ['旅行博客', '旅行封锁', '旅行夹克'], answer: '旅行博客', explain: '个人网络日志。' },
      { id: 'blog.q2', senseId: 'blog.s1', errorType: 'meaning', type: '词源', prompt: 'blog 缩自：', options: ['web log', 'black log', 'blood log'], answer: 'web log', explain: '网络日志。' },
      { id: 'blog.q3', senseId: 'blog.s1', errorType: 'confusable', type: '易混', prompt: '贸易集团是：', options: ['bloc', 'blog', 'blot'], answer: 'bloc', explain: '拼写差一个 g 和 c。' },
      { id: 'blog.q4', senseId: 'blog.s1', errorType: 'collocation', type: '搭配', prompt: '写这个主题：blog _____ street food.', options: ['about', 'into', 'on him'], answer: 'about', explain: 'blog about。' },
    ],
    usage: { domains: ['网络'], tone: '中性、非正式也可', commonConfusion: ['bloc'] },
  });

  D('blond', {
    etymology: {
      origin: '法语 blond「浅色头发的」。英语里 blond 常指男性或作通性，blonde 常指女性，考试有时不分。',
      prefix: null,
      root: { text: 'blond', gloss: '金发的' },
      suffix: null,
      history: [
        { label: '法语 blond', text: '浅色的' },
        { label: '英语', text: '金发的；也可作名词指金发的人' },
      ],
      formationLogic: '直接借用法语形容词，不是 black 或 blank 的变体。',
      mnemonic: 'blond hair 金发。拼写不要写成 blound。',
      note: '有人用 blonde hair 指女性。作形容词时 blond 最稳妥。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The child has blond hair and dark eyebrows.', chinese: '这孩子金发，眉毛却是深色的。' },
    ],
    contexts: [
      { domain: '外貌', senseId: 'blond.s1', en: 'He dyed his blond hair brown for the play.', zh: '为了演戏，他把金发染成了棕色。', structure: 'dyed his blond hair brown', grammar: 'blond 作定语修饰 hair，或作表语：He is blond.', rationale: '只描述发色，不含评价。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Leave the answer blond if you do not know it.', right: 'Leave the answer blank if you do not know it.', reason: '空白是 blank；金发是 blond。', rule: 'blond hair / a blond man。', special: '漂出来的金发常说 bleached blonde，强调不是天生。' },
    ],
    quiz: [
      { id: 'blond.q1', senseId: 'blond.s1', errorType: 'meaning', type: '词义', prompt: 'blond hair 是：', options: ['金发', '光头', '空白'], answer: '金发', explain: '浅色头发。' },
      { id: 'blond.q2', senseId: 'blond.s1', errorType: 'confusable', type: '易混', prompt: '试卷留空用：', options: ['blank', 'blond', 'bland'], answer: 'blank', explain: 'blank 才是空。' },
      { id: 'blond.q3', senseId: 'blond.s1', errorType: 'meaning', type: '词源', prompt: '这个词借自：', options: ['法语', '日语', '阿拉伯语'], answer: '法语', explain: '法语 blond。' },
      { id: 'blond.q4', senseId: 'blond.s1', errorType: 'collocation', type: '搭配', prompt: '哪一句自然？', options: ['She has blond hair.', 'She has blond page.', 'She has blond blockage.'], answer: 'She has blond hair.', explain: '修饰头发。' },
    ],
    usage: { domains: ['外貌'], tone: '中性', commonConfusion: ['blank', 'blonde'] },
  });

  D('blood', {
    etymology: {
      origin: '古英语 blōd。本义是血液，也长期用来指家族血统。',
      prefix: null,
      root: { text: 'blōd', gloss: '血' },
      suffix: null,
      history: [
        { label: 'blōd', text: '血液' },
        { label: 'blood', text: '血；血统' },
      ],
      formationLogic: '身体里的红色液体，引申为血缘。',
      mnemonic: 'blood pressure 血压。of royal blood 皇室血统。in cold blood 蓄意残忍地。',
      note: '不可数。a drop of blood。blood test 验血。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The nurse took a sample of blood before breakfast.', chinese: '早饭前护士抽了一管血样。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'blood.s1', en: 'High blood pressure runs in his family.', zh: '高血压在他家里有遗传倾向。', structure: 'High blood pressure / runs in his family', grammar: 'blood 作定语：blood pressure / blood type。', rationale: '医学搭配是高频。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He lost many bloods in the accident.', right: 'He lost a lot of blood in the accident.', reason: 'blood 表血液时不可数，不能加 -s 表示量。', rule: 'much / a lot of blood；drops of blood。', special: 'bloods 偶尔出现在实验室口语里指多份血样，普通写作避开。new blood 是新成员。' },
    ],
    quiz: [
      { id: 'blood.q1', senseId: 'blood.s1', errorType: 'meaning', type: '词义', prompt: 'donate blood 是：', options: ['献血', '献骨头', '献书'], answer: '献血', explain: '给出血液。' },
      { id: 'blood.q2', senseId: 'blood.s1', errorType: 'collocation', type: '搭配', prompt: '血压：blood _____.', options: ['pressure', 'blessing', 'blazer'], answer: 'pressure', explain: 'blood pressure。' },
      { id: 'blood.q3', senseId: 'blood.s1', errorType: 'grammar', type: '可数', prompt: '流血很多应说：', options: ['a lot of blood', 'many bloods', 'a blood'], answer: 'a lot of blood', explain: '不可数。' },
      { id: 'blood.q4', senseId: 'blood.s1', errorType: 'meaning', type: '词义', prompt: 'of the same blood 暗示：', options: ['有血缘关系', '穿同样的夹克', '写同一本博客'], answer: '有血缘关系', explain: '血统义。' },
    ],
    usage: { domains: ['医学', '生活'], tone: '中性', commonConfusion: ['bleed'] },
  });

  D('bloody', {
    etymology: {
      origin: '古英语 blōdig，即 blood 加 -y。本义是流血的、血腥的。英式口语里也可加强语气，相当于「该死的」，很不正式。',
      prefix: null,
      root: { text: 'blood', gloss: '血' },
      suffix: { text: '-y', gloss: '充满……的' },
      history: [
        { label: 'blōdig', text: '带血的' },
        { label: 'bloody', text: '血腥的；口语加强语气' },
      ],
      formationLogic: '上面有血，或像血一样激烈。咒骂义不要用在作文里。',
      mnemonic: 'a bloody nose 流血的鼻子。a bloody battle 血战。',
      note: '副词用法 Bloody hell 非常口语。考试认形容词即可。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The towel was bloody after he cut his hand.', chinese: '他割到手之后，毛巾上全是血。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'bloody.s1', en: 'The textbook described it as a bloody and unnecessary battle.', zh: '课本把那一仗写成一场血腥且不必要的战斗。', structure: 'described it as / a bloody and unnecessary battle', grammar: '形容词修饰 battle、wound、knife。', rationale: '书面义是「有血的」，不是口头禅。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The applicant wrote that the interview was bloody wonderful.', right: 'The applicant wrote that the interview went very well.', reason: 'bloody 作强调在英式口语中很粗，正式申请材料要用 very 或 extremely。', rule: '书面：bloody wound / battle。口语咒骂限非正式对话。', special: '美式读者更常只理解成「带血的」。' },
    ],
    quiz: [
      { id: 'bloody.q1', senseId: 'bloody.s1', errorType: 'meaning', type: '词义', prompt: 'a bloody bandage 是：', options: ['带血的绷带', '蓝色绷带', '空白绷带'], answer: '带血的绷带', explain: '沾了血。' },
      { id: 'bloody.q2', senseId: 'bloody.s1', errorType: 'context', type: '语域', prompt: '正式作文里加强「非常」最好用：', options: ['extremely', 'bloody', 'bliss'], answer: 'extremely', explain: 'bloody 的加强义太口语。' },
      { id: 'bloody.q3', senseId: 'bloody.s1', errorType: 'meaning', type: '词义', prompt: 'a bloody conflict 强调：', options: ['伤亡惨重', '没有声音', '非常清淡'], answer: '伤亡惨重', explain: '血腥。' },
      { id: 'bloody.q4', senseId: 'bloody.s1', errorType: 'grammar', type: '构词', prompt: 'bloody 来自：', options: ['blood + -y', 'blow + -dy', 'bloc + -dy'], answer: 'blood + -y', explain: '血加上形容词尾。' },
    ],
    usage: { domains: ['历史', '医学', '口语'], tone: '书面中性偏沉重；口语可粗鲁', commonConfusion: ['blood'] },
  });

  D('bloom', {
    etymology: {
      origin: '古诺尔斯语 blóm「花」，与 flower 无直接词源，但意思接近。动词是开花，也可指面色红润。',
      prefix: null,
      root: { text: 'blóm', gloss: '花' },
      suffix: null,
      history: [
        { label: 'blóm', text: '花朵' },
        { label: 'bloom', text: '开花；繁盛的样子' },
      ],
      formationLogic: '花打开，或人、事业呈现出最好的状态。',
      mnemonic: 'in full bloom 盛开。roses in bloom。',
      note: 'bloom 可作名词「花、红润」。果树花更常用 blossom，但 roses bloom。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The roses bloomed late because of the cold spring.', chinese: '春天冷，玫瑰开得晚。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'bloom.s1', en: 'The park is at its best when the peonies are in bloom.', zh: '牡丹盛开时，这座公园最好看。', structure: 'when the peonies are in bloom', grammar: 'in bloom 是状态。动词 bloom 不及物。', rationale: '植物义是基本义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The apple trees were in bloomers.', right: 'The apple trees were in bloom.', reason: '盛开是 in bloom 或 in blossom。bloomers 是旧式灯笼裤，完全另一回事。', rule: 'in (full) bloom；come into bloom。', special: 'a bloom on her cheeks 是气色好。' },
    ],
    quiz: [
      { id: 'bloom.q1', senseId: 'bloom.s1', errorType: 'meaning', type: '词义', prompt: 'roses in bloom 是：', options: ['盛开的玫瑰', '枯萎的玫瑰', '玫瑰果酱'], answer: '盛开的玫瑰', explain: '正在开花。' },
      { id: 'bloom.q2', senseId: 'bloom.s1', errorType: 'collocation', type: '搭配', prompt: '盛开：in full _____.', options: ['bloom', 'bleed', 'blot'], answer: 'bloom', explain: 'in full bloom。' },
      { id: 'bloom.q3', senseId: 'bloom.s1', errorType: 'grammar', type: '语法', prompt: '花开了：The flowers have _____.', options: ['bloomed', 'bloomed the garden as object always', 'bless'], answer: 'bloomed', explain: '不及物，不说 bloom the garden。' },
      { id: 'bloom.q4', senseId: 'bloom.s1', errorType: 'confusable', type: '易混', prompt: '果树上成片的花更常说：', options: ['blossom', 'blockade', 'blog'], answer: 'blossom', explain: 'blossom 多指果树花，也常可互换。' },
    ],
    usage: { domains: ['自然', '文学'], tone: '褒义', commonConfusion: ['blossom'] },
  });

  D('blossom', {
    etymology: {
      origin: '古英语 blōstm、blōstma「花」，与 bloom 同族。尤其指果树的花，动词也可指人成长起来。',
      prefix: null,
      root: { text: 'blōstm', gloss: '花' },
      suffix: null,
      history: [
        { label: 'blōstm', text: '花朵，尤指果树' },
        { label: 'blossom', text: '开花；繁荣、成长' },
      ],
      formationLogic: '先是树上的花，再比喻才能展开。',
      mnemonic: 'cherry blossom 樱花。blossom into a fine player 成长为好选手。',
      note: 'in blossom 与 in bloom 接近。果树多用 blossom。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The plum trees blossom before their leaves appear.', chinese: '李树先开花，后长叶。' },
    ],
    contexts: [
      { domain: '教育', senseId: 'blossom.s1', en: 'With a patient coach, the shy student blossomed.', zh: '有了耐心的教练，这个害羞的学生开朗成长起来。', structure: 'the shy student / blossomed', grammar: '不及物。blossom into somebody / something。', rationale: '比喻义在人物特写里很常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She blossomed him into a leader.', right: 'She helped him blossom into a leader.', reason: 'blossom 是自己发展，不能直接带宾语说 blossomed him。', rule: 'somebody blossoms；blossom into。', special: 'orange blossom 橙花，也是婚礼用花的常见说法。' },
    ],
    quiz: [
      { id: 'blossom.q1', senseId: 'blossom.s1', errorType: 'meaning', type: '词义', prompt: 'apple blossom 是：', options: ['苹果花', '苹果核', '苹果酱'], answer: '苹果花', explain: '果树的花。' },
      { id: 'blossom.q2', senseId: 'blossom.s1', errorType: 'collocation', type: '搭配', prompt: '成长为：blossom _____ a leader.', options: ['into', 'onto', 'at'], answer: 'into', explain: 'blossom into。' },
      { id: 'blossom.q3', senseId: 'blossom.s1', errorType: 'grammar', type: '语法', prompt: '正确的是：', options: ['Her confidence blossomed.', 'She blossomed her confidence as a direct object.', 'She blossom confidence.'], answer: 'Her confidence blossomed.', explain: '不及物。' },
      { id: 'blossom.q4', senseId: 'blossom.s1', errorType: 'confusable', type: '易混', prompt: '玫瑰盛开也常说 in：', options: ['bloom', 'blot', 'bolt'], answer: 'bloom', explain: 'bloom 与 blossom 近义。' },
    ],
    usage: { domains: ['自然', '人物'], tone: '褒义', commonConfusion: ['bloom'] },
  });

  D('blot', {
    etymology: {
      origin: '十四世纪英语，可能与 block 一类「一块斑痕」有关，词源不完全确定。指墨渍，动词是吸干或玷污。',
      prefix: null,
      root: { text: 'blot', gloss: '污点' },
      suffix: null,
      history: [
        { label: '中古英语', text: '墨水或污渍的一点' },
        { label: 'blot', text: '墨渍；吸干；损害名誉' },
      ],
      formationLogic: '纸上的一块脏，也可以是名声上的一块脏。',
      mnemonic: 'blotting paper 吸墨纸。a blot on the landscape 煞风景的东西。',
      note: 'blot something out 遮住、抹去记忆。不要和 bolt 门闩混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'An ink blot spread across the last line.', chinese: '一滴墨水在最后一行晕开。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'blot.s1', en: 'She blotted the signature so the ink would not smear.', zh: '她把签名吸干，免得墨水蹭开。', structure: 'blotted the signature / so the ink would not smear', grammar: '动词 blot 可以是吸干。名词 a blot。', rationale: '动作义容易被漏掉。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He slid the blot and locked the gate.', right: 'He slid the bolt and locked the gate. Ink left a blot.', reason: '门闩是 bolt；污点是 blot。', rule: 'a blot of ink；blot the page dry；a blot on one\'s name。', special: 'blot out the sun 是遮住太阳。' },
    ],
    quiz: [
      { id: 'blot.q1', senseId: 'blot.s1', errorType: 'meaning', type: '词义', prompt: 'an ink blot 是：', options: ['墨渍', '门闩', '金发'], answer: '墨渍', explain: '污点。' },
      { id: 'blot.q2', senseId: 'blot.s1', errorType: 'meaning', type: '词义', prompt: 'blot the wet ink 是：', options: ['把湿墨水吸干', '把墨水煮开', '把墨水祝福'], answer: '把湿墨水吸干', explain: '动词义。' },
      { id: 'blot.q3', senseId: 'blot.s1', errorType: 'collocation', type: '搭配', prompt: '煞风景：a blot on the _____.', options: ['landscape', 'bland', 'boiler'], answer: 'landscape', explain: 'a blot on the landscape。' },
      { id: 'blot.q4', senseId: 'blot.s1', errorType: 'confusable', type: '易混', prompt: '门上滑动的锁杆是：', options: ['bolt', 'blot', 'blog'], answer: 'bolt', explain: '元音不同。' },
    ],
    usage: { domains: ['写作', '评论'], tone: '负面当污点时', commonConfusion: ['bolt', 'blemish'] },
  });

  D('blouse', {
    etymology: {
      origin: '法语 blouse，原是工人穿的宽松上衣。英语里主要指女衬衫或女式宽松上衣。',
      prefix: null,
      root: { text: 'blouse', gloss: '宽松上衣' },
      suffix: null,
      history: [
        { label: '法语 blouse', text: '工作罩衫' },
        { label: '英语', text: '女衬衫、宽松上衣' },
      ],
      formationLogic: '借词，指一种上衣，不是动词。',
      mnemonic: 'a silk blouse 丝质女衫。发音末尾是 /z/，像 blows 的辅音，但不是 blow。',
      note: '可数。复数 blouses。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She tucked the white blouse into her skirt.', chinese: '她把白衬衫塞进裙子里。' },
    ],
    contexts: [
      { domain: '服装', senseId: 'blouse.s1', en: 'The uniform includes a blue blouse and a grey skirt.', zh: '制服包括一件蓝衬衫和一条灰裙子。', structure: 'includes a blue blouse and a grey skirt', grammar: '可数名词，a blouse。', rationale: '衣物名称。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The wind will blouse the candles out.', right: 'The wind will blow the candles out. She ironed her blouse.', reason: '吹是 blow；女衬衫是 blouse。', rule: 'wear / iron a blouse。', special: '英式有时也指某些制服上衣，不限女性，但教材义以女衫为主。' },
    ],
    quiz: [
      { id: 'blouse.q1', senseId: 'blouse.s1', errorType: 'meaning', type: '词义', prompt: 'a cotton blouse 是：', options: ['棉质女衬衫', '棉毯', '棉线轴'], answer: '棉质女衬衫', explain: '上衣。' },
      { id: 'blouse.q2', senseId: 'blouse.s1', errorType: 'confusable', type: '易混', prompt: '风把帽子吹走：The wind _____ it away.', options: ['blew', 'bloused', 'blotted'], answer: 'blew', explain: 'blow 的过去式 blew。' },
      { id: 'blouse.q3', senseId: 'blouse.s1', errorType: 'grammar', type: '复数', prompt: '复数是：', options: ['blouses', 'blousees', 'blice'], answer: 'blouses', explain: '直接加 -s，读 /zɪz/ 一类。' },
      { id: 'blouse.q4', senseId: 'blouse.s1', errorType: 'collocation', type: '搭配', prompt: '哪一句自然？', options: ['She wore a silk blouse.', 'She wore a silk blot.', 'She wore a silk bloc.'], answer: 'She wore a silk blouse.', explain: 'wear a blouse。' },
    ],
    usage: { domains: ['服装'], tone: '中性', commonConfusion: ['blow'] },
  });

  D('blow', {
    etymology: {
      origin: '古英语 blāwan「吹气」。名词 a blow 表示打击，是另一个中古英语词，考试里两个意思都要认。',
      prefix: null,
      root: { text: 'blāwan', gloss: '吹' },
      suffix: null,
      history: [
        { label: 'blāwan', text: '吹' },
        { label: 'blow', text: '吹、刮、吹奏；另义为打击' },
      ],
      formationLogic: '气流从嘴里或风里送出。打击义要靠冠词 a blow 辨认。',
      mnemonic: '过去式 blew，过去分词 blown。不要写 blowed。',
      note: 'blow one\'s nose 擤鼻涕。a heavy blow 沉重打击。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The wind blew the door shut.', chinese: '风把门吹上了。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'blow.s1', en: 'Losing the captain was a blow to the team\'s hopes.', zh: '失去队长对球队的希望是一个打击。', structure: 'was a blow to / the team\'s hopes', grammar: 'a blow to somebody / something。动词 blow 的过去式是 blew。', rationale: '名词「打击」和动词「吹」同形。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The wind blowed all night.', right: 'The wind blew all night.', reason: 'blow 不规则：blow, blew, blown。', rule: 'has blown；blew yesterday。', special: 'blow up、blow out 是短语，意义要整记。' },
    ],
    quiz: [
      { id: 'blow.q1', senseId: 'blow.s1', errorType: 'grammar', type: '词形', prompt: '过去式是：', options: ['blew', 'blowed', 'blown as past only'], answer: 'blew', explain: '过去分词才是 blown。' },
      { id: 'blow.q2', senseId: 'blow.s1', errorType: 'meaning', type: '词义', prompt: 'a blow to morale 是：', options: ['对士气的打击', '对士气的微风', '对士气的毯子'], answer: '对士气的打击', explain: '名词义。' },
      { id: 'blow.q3', senseId: 'blow.s1', errorType: 'collocation', type: '搭配', prompt: '擤鼻子：blow your _____.', options: ['nose', 'blouse', 'bloc'], answer: 'nose', explain: 'blow one\'s nose。' },
      { id: 'blow.q4', senseId: 'blow.s1', errorType: 'confusable', type: '易混', prompt: '女式衬衫是：', options: ['blouse', 'blow', 'blower'], answer: 'blouse', explain: '不要按发音把 blouse 当成 blow。' },
    ],
    usage: { domains: ['自然', '新闻'], tone: '中性', commonConfusion: ['blouse'] },
  });

  D('blow up', {
    etymology: {
      origin: '英语短语动词：blow + up。up 加强「胀开、炸开、怒气冒上来」。不是一个拉丁词。',
      prefix: null,
      root: { text: 'blow', gloss: '吹、爆' },
      suffix: null,
      history: [
        { label: 'blow up', text: '充气；炸毁' },
        { label: '口语', text: '突然大发脾气' },
      ],
      formationLogic: '往里面吹到胀，或胀到爆，或人一下炸开。',
      mnemonic: 'blow up a balloon 充气。blow up a bridge 炸桥。blow up at somebody 对某人大发雷霆。',
      note: '名词是 blow-up，可以是爆炸或放大的照片，也可指争吵。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They blew up the old chimney because it was unsafe.', chinese: '旧烟囱不安全，他们把它炸掉了。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'blow up.s1', en: 'He blew up at the waiter, then apologised for the noise.', zh: '他对服务员大发雷霆，随后为刚才的吵闹道歉。', structure: 'blew up at the waiter', grammar: 'blow up at somebody 是发火。blow something up 是炸或充气。', rationale: '三个意思靠宾语和介词分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She blew up to him because the soup was cold.', right: 'She blew up at him because the soup was cold.', reason: '对某人生气是 blow up at，不是 to。', rule: 'blow up at somebody；blow up a balloon；blow a building up。', special: '代词放中间：blow it up，不说 blow up it。' },
    ],
    quiz: [
      { id: 'blow up.q1', senseId: 'blow up.s1', errorType: 'meaning', type: '词义', prompt: 'blow up a tyre 是：', options: ['给轮胎打气', '把轮胎漂白', '把轮胎祝福'], answer: '给轮胎打气', explain: '充气。' },
      { id: 'blow up.q2', senseId: 'blow up.s1', errorType: 'meaning', type: '词义', prompt: 'blow up the bridge 是：', options: ['把桥炸掉', '把桥涂蓝', '把桥预订'], answer: '把桥炸掉', explain: '使爆炸。' },
      { id: 'blow up.q3', senseId: 'blow up.s1', errorType: 'collocation', type: '介词', prompt: '对人发火：blow up _____ the clerk.', options: ['at', 'to', 'on'], answer: 'at', explain: 'blow up at somebody。' },
      { id: 'blow up.q4', senseId: 'blow up.s1', errorType: 'grammar', type: '语序', prompt: '把它炸掉：', options: ['blow it up', 'blow up it', 'blew up it yesterday as infinitive'], answer: 'blow it up', explain: '代词放在动词和 up 之间。' },
    ],
    usage: { domains: ['新闻', '口语'], tone: '中性；发火义不正式', commonConfusion: ['explode'] },
  });

  D('blower', {
    etymology: {
      origin: '英语派生：blow 加 -er，表示吹风的装置或干这事的东西。口语里 the blower 曾指电话，现已过时。',
      prefix: null,
      root: { text: 'blow', gloss: '吹' },
      suffix: { text: '-er', gloss: '器具或施事' },
      history: [
        { label: 'blow', text: '送出空气' },
        { label: 'blower', text: '鼓风机、吹风机一类装置' },
      ],
      formationLogic: '用来 blow 的机器。',
      mnemonic: 'a leaf blower 吹叶机。a snow blower 吹雪机。头发则更常说 hairdryer，虽也有 hair blower 的说法。',
      note: '可数名词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The leaf blower woke the whole street on Sunday.', chinese: '周日吹叶机把整条街都吵醒了。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'blower.s1', en: 'He cleared the workshop with an air blower before painting.', zh: '上漆前他用鼓风机把车间吹干净。', structure: 'cleared the workshop with / an air blower', grammar: 'with a blower。', rationale: '器具名。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She wore a blower over her shirt.', right: 'She wore a blouse over her shirt. He rented a blower.', reason: '衣服是 blouse；吹风机器是 blower。', rule: 'a leaf / air / snow blower。', special: 'on the blower 是过时英式俚语「在打电话」。' },
    ],
    quiz: [
      { id: 'blower.q1', senseId: 'blower.s1', errorType: 'meaning', type: '词义', prompt: 'a leaf blower 是：', options: ['吹叶机', '树叶沙拉', '树叶衬衫'], answer: '吹叶机', explain: '吹风装置。' },
      { id: 'blower.q2', senseId: 'blower.s1', errorType: 'confusable', type: '易混', prompt: '丝绸上衣是：', options: ['a blouse', 'a blower', 'a blot'], answer: 'a blouse', explain: '服装不是机器。' },
      { id: 'blower.q3', senseId: 'blower.s1', errorType: 'grammar', type: '构词', prompt: '-er 在这里表示：', options: ['做这件事的器具', '没有', '过去式'], answer: '做这件事的器具', explain: 'blow 的工具。' },
      { id: 'blower.q4', senseId: 'blower.s1', errorType: 'collocation', type: '搭配', prompt: '清除落叶常用：a leaf _____.', options: ['blower', 'blessing', 'bloc'], answer: 'blower', explain: 'leaf blower。' },
    ],
    usage: { domains: ['生活', '工业'], tone: '中性', commonConfusion: ['blouse'] },
  });

  D('blue', {
    etymology: {
      origin: '古法语 bleu，来自日耳曼语「苍白、发灰的颜色」，后固定为天空和海洋的蓝。口语里 blue 也表示忧郁。',
      prefix: null,
      root: { text: 'bleu', gloss: '蓝色' },
      suffix: null,
      history: [
        { label: 'bleu', text: '蓝色' },
        { label: 'blue', text: '蓝色的；忧郁的' },
      ],
      formationLogic: '颜色词。情绪低落时说 feel blue，像阴天的颜色。',
      mnemonic: 'out of the blue 突如其来。once in a blue moon 极少。',
      note: '名词 the blue 可指天空或大海。blues 是另一个词条。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She painted the door blue.', chinese: '她把门漆成蓝色。' },
    ],
    contexts: [
      { domain: '情绪', senseId: 'blue.s1', en: 'He felt blue on Sunday evenings and called his sister.', zh: '周日晚上他会觉得忧郁，于是给姐姐打电话。', structure: 'felt blue / on Sunday evenings', grammar: 'feel blue 是表语，不说 feel bluely。', rationale: '颜色之外的情绪义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The news arrived out of the blues.', right: 'The news arrived out of the blue.', reason: '「突如其来」是 out of the blue，不用复数 blues。', rule: 'out of the blue；feel blue；once in a blue moon。', special: 'blue-collar 蓝领。a blueprint 是计划，不是蓝色印刷品的日常说法而已。' },
    ],
    quiz: [
      { id: 'blue.q1', senseId: 'blue.s1', errorType: 'meaning', type: '词义', prompt: 'a blue sky 是：', options: ['蓝天', '荒凉的天', '空白的天'], answer: '蓝天', explain: '颜色。' },
      { id: 'blue.q2', senseId: 'blue.s1', errorType: 'meaning', type: '词义', prompt: 'feel blue 是：', options: ['感到忧郁', '感到非常热', '感到口渴'], answer: '感到忧郁', explain: '口语情绪义。' },
      { id: 'blue.q3', senseId: 'blue.s1', errorType: 'collocation', type: '习语', prompt: '突然发生：out of the _____.', options: ['blue', 'blues', 'blot'], answer: 'blue', explain: 'out of the blue。' },
      { id: 'blue.q4', senseId: 'blue.s1', errorType: 'collocation', type: '习语', prompt: '难得一次：once in a blue _____.', options: ['moon', 'blood', 'book'], answer: 'moon', explain: 'once in a blue moon。' },
    ],
    usage: { domains: ['日常'], tone: '中性；feel blue 偏口语', commonConfusion: ['blues'] },
  });

  D('blueprint', {
    etymology: {
      origin: '英语复合词：blue + print。十九世纪用蓝底白线晒出的工程图，后比喻详细的行动计划。',
      prefix: null,
      root: { text: 'print', gloss: '印刷图' },
      suffix: null,
      history: [
        { label: 'blue print', text: '蓝晒图纸' },
        { label: 'blueprint', text: '蓝图；方案' },
      ],
      formationLogic: '原先是真的蓝色图纸，现在多半是计划本身。',
      mnemonic: 'a blueprint for reform 改革蓝图。动词也可以：blueprint a system。',
      note: '可数。draw up a blueprint。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The report is a blueprint for cutting food waste in schools.', chinese: '这份报告是学校减少食物浪费的行动蓝图。' },
    ],
    contexts: [
      { domain: '规划', senseId: 'blueprint.s1', en: 'Architects still say blueprint even when the drawing is a computer file.', zh: '即使图纸已是电脑文件，建筑师仍会说 blueprint。', structure: 'still say blueprint / even when the drawing is a file', grammar: '可数名词。a blueprint for something。', rationale: '本义和技术比喻都在。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'This is a blueprint of cutting costs.', right: 'This is a blueprint for cutting costs.', reason: '计划方案后面用 for，不用 of。', rule: 'a blueprint for reform / action。', special: '不要写成 blue print 两个词，除非在讲颜色。' },
    ],
    quiz: [
      { id: 'blueprint.q1', senseId: 'blueprint.s1', errorType: 'meaning', type: '词义', prompt: 'a blueprint for the project 是：', options: ['项目的详细计划', '项目的蓝色窗帘', '项目的奖金'], answer: '项目的详细计划', explain: '方案、蓝图。' },
      { id: 'blueprint.q2', senseId: 'blueprint.s1', errorType: 'collocation', type: '介词', prompt: 'a blueprint _____ change.', options: ['for', 'at', 'into'], answer: 'for', explain: 'for + 目标。' },
      { id: 'blueprint.q3', senseId: 'blueprint.s1', errorType: 'meaning', type: '词源', prompt: '最早它是：', options: ['蓝底工程图', '一种汤', '一种债券'], answer: '蓝底工程图', explain: 'blue + print。' },
      { id: 'blueprint.q4', senseId: 'blueprint.s1', errorType: 'confusable', type: '易混', prompt: '突如其来是 out of the：', options: ['blue', 'blueprint', 'blot'], answer: 'blue', explain: '习语用 blue，不是 blueprint。' },
    ],
    usage: { domains: ['工程', '新闻'], tone: '中性、偏正式', commonConfusion: ['blue'] },
  });

  D('blues', {
    etymology: {
      origin: 'blue 的复数用法。blue devils 曾指忧愁，缩短成 the blues。音乐上的 blues 是二十世纪初美国的布鲁斯。',
      prefix: null,
      root: { text: 'blue', gloss: '忧郁的颜色' },
      suffix: { text: '-s', gloss: '复数形式，常当单数看待' },
      history: [
        { label: 'the blue devils', text: '忧郁' },
        { label: 'the blues', text: '忧愁；布鲁斯音乐' },
      ],
      formationLogic: '情绪和乐种共用这个复数形式。',
      mnemonic: 'have the blues 闷闷不乐。a blues singer 布鲁斯歌手。动词三单：blues 作音乐名常跟单数动词。',
      note: '前面常有 the。不要和 blue 的「蓝色」复数混用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She plays the blues on an old guitar.', chinese: '她用一把旧吉他演奏布鲁斯。' },
    ],
    contexts: [
      { domain: '音乐', senseId: 'blues.s1', en: 'The club books a blues band every Friday.', zh: '这家俱乐部每个星期五请一支布鲁斯乐队。', structure: 'books a blues band', grammar: 'blues 作定语。have the blues 是情绪。', rationale: '音乐义在文化阅读里常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The news came out of the blues.', right: 'The news came out of the blue. Rainy days give him the blues.', reason: 'out of the blue 不用复数。the blues 是忧郁或布鲁斯。', rule: 'have the blues；a blues musician；out of the blue。', special: 'blues 尾音 /z/。' },
    ],
    quiz: [
      { id: 'blues.q1', senseId: 'blues.s1', errorType: 'meaning', type: '词义', prompt: 'play the blues 是：', options: ['演奏布鲁斯', '把脸涂蓝', '写出蓝图'], answer: '演奏布鲁斯', explain: '一种音乐。' },
      { id: 'blues.q2', senseId: 'blues.s1', errorType: 'meaning', type: '词义', prompt: 'have the blues 是：', options: ['闷闷不乐', '有许多蓝色衬衫', '有一张蓝图'], answer: '闷闷不乐', explain: '情绪低落。' },
      { id: 'blues.q3', senseId: 'blues.s1', errorType: 'confusable', type: '易混', prompt: '突然到来用：', options: ['out of the blue', 'out of the blues', 'out of the blot'], answer: 'out of the blue', explain: '不用复数。' },
      { id: 'blues.q4', senseId: 'blues.s1', errorType: 'collocation', type: '搭配', prompt: '布鲁斯乐队：a blues _____.', options: ['band', 'boiler', 'bonnet'], answer: 'band', explain: 'a blues band。' },
    ],
    usage: { domains: ['音乐', '口语'], tone: '中性', commonConfusion: ['blue'] },
  });

  D('bluff', {
    etymology: {
      origin: '十七世纪英语，可能与荷兰语 bluffen「吹牛」有关。动词是虚张声势，名词也可指陡岸。',
      prefix: null,
      root: { text: 'bluffen', gloss: '夸口' },
      suffix: null,
      history: [
        { label: '荷兰语', text: '吹牛、吓唬' },
        { label: 'bluff', text: '唬人；扑克里的诈唬' },
      ],
      formationLogic: '装得比实际更有把握，让对方退让。',
      mnemonic: 'call somebody\'s bluff 要求对方摊牌、识破吓唬。',
      note: '形容词 bluff 还可指人直率、陡岸光秃，与动词不同，阅读时看词性。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He was bluffing; he did not have the receipt.', chinese: '他在唬人，其实没有那张收据。' },
    ],
    contexts: [
      { domain: '谈判', senseId: 'bluff.s1', en: 'She called his bluff and asked to see the written offer.', zh: '她识破他的虚张声势，要求看书面报价。', structure: 'called his bluff / and asked to see', grammar: 'call somebody\'s bluff。动词 bluff somebody into doing。', rationale: '策略义，不是悬崖，除非名词另有语境。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She called his bluff into the office.', right: 'She called his bluff and asked for proof.', reason: 'call somebody\'s bluff 后面不接 into。into 用于 bluff somebody into doing。', rule: 'bluff your way through；call one\'s bluff。', special: 'a chalk bluff 可以是陡岸，那是另一个名词义。' },
    ],
    quiz: [
      { id: 'bluff.q1', senseId: 'bluff.s1', errorType: 'meaning', type: '词义', prompt: 'He is only bluffing 是：', options: ['他只是在唬人', '他只是在流血', '他只是在记账'], answer: '他只是在唬人', explain: '假装更有底气。' },
      { id: 'bluff.q2', senseId: 'bluff.s1', errorType: 'collocation', type: '搭配', prompt: '识破吓唬：call his _____.', options: ['bluff', 'bliss', 'blot'], answer: 'bluff', explain: 'call somebody\'s bluff。' },
      { id: 'bluff.q3', senseId: 'bluff.s1', errorType: 'collocation', type: '搭配', prompt: '骗得某人等待：bluff them _____ waiting.', options: ['into', 'at', 'of'], answer: 'into', explain: 'bluff somebody into doing。' },
      { id: 'bluff.q4', senseId: 'bluff.s1', errorType: 'confusable', type: '易混', prompt: '粗心的大错是：', options: ['a blunder', 'a bluff', 'a blower'], answer: 'a blunder', explain: 'bluff 是故意唬，blunder 是搞砸。' },
    ],
    usage: { domains: ['谈判', '口语'], tone: '中性偏口语', commonConfusion: ['blunder'] },
  });

  D('blunder', {
    etymology: {
      origin: '中古英语 blundren「瞎撞」，与古诺尔斯语 blunda「闭上眼」有关。闭着眼走路，于是是跌跌撞撞，也是大错。',
      prefix: null,
      root: { text: 'blundra', gloss: '闭眼、乱闯' },
      suffix: null,
      history: [
        { label: 'blundren', text: '摸黑乱走' },
        { label: 'blunder', text: '犯大错；跌撞着走' },
      ],
      formationLogic: '没看清就行动，结果是严重失误。',
      mnemonic: 'make a blunder 犯大错。比 mistake 更蠢、更严重。',
      note: '动词 blunder into a room 跌撞进入；blunder 也可直接表示犯错。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Sending the price list to the wrong client was a serious blunder.', chinese: '把价目表发给了错误的客户，这是个严重失误。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'blunder.s1', en: 'The minister\'s blunder forced the office to issue a correction.', zh: '部长的大错迫使办公室发布更正。', structure: 'The minister\'s blunder / forced a correction', grammar: 'make a blunder。可数名词。', rationale: '判断失误，不是虚张声势。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'His resignation was only a bluff of arithmetic.', right: 'His resignation threat was a bluff. The arithmetic error was a blunder.', reason: '故意吓唬是 bluff；愚蠢的大错是 blunder。', rule: 'make / commit a blunder。', special: 'blunder on 是磕磕绊绊地说下去或走下去。' },
    ],
    quiz: [
      { id: 'blunder.q1', senseId: 'blunder.s1', errorType: 'meaning', type: '词义', prompt: 'a costly blunder 是：', options: ['代价高昂的大错', '一次成功的吓唬', '一场大火'], answer: '代价高昂的大错', explain: '严重失误。' },
      { id: 'blunder.q2', senseId: 'blunder.s1', errorType: 'collocation', type: '搭配', prompt: '犯错：_____ a blunder.', options: ['make', 'bleach', 'bloom'], answer: 'make', explain: 'make a blunder。' },
      { id: 'blunder.q3', senseId: 'blunder.s1', errorType: 'confusable', type: '易混', prompt: '扑克里装得很有牌是：', options: ['a bluff', 'a blunder', 'a blot'], answer: 'a bluff', explain: '虚张声势。' },
      { id: 'blunder.q4', senseId: 'blunder.s1', errorType: 'meaning', type: '词义', prompt: 'blunder into the dark kitchen 是：', options: ['跌跌撞撞走进黑暗的厨房', '把厨房炸掉', '把厨房预订了'], answer: '跌跌撞撞走进黑暗的厨房', explain: '动词的「乱闯」义。' },
    ],
    usage: { domains: ['新闻', '工作'], tone: '贬义', commonConfusion: ['bluff', 'mistake'] },
  });

  D('blunt', {
    etymology: {
      origin: '中古英语，可能来自古诺尔斯语 blundra 一类「迟钝」。刀刃不锋利叫 blunt，说话不绕弯也叫 blunt。',
      prefix: null,
      root: { text: 'blunt', gloss: '钝、直' },
      suffix: null,
      history: [
        { label: '中古英语', text: '不锋利、感觉迟钝' },
        { label: 'blunt', text: '钝的；说话直率的；使变钝' },
      ],
      formationLogic: '边缘不尖。话语没有修饰的尖角，就是直说。',
      mnemonic: 'a blunt knife 钝刀。a blunt answer 直率的回答。动词 blunt the pain 减轻、使变钝。',
      note: 'to be blunt 插入语：恕我直言。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The pencil is blunt and needs sharpening.', chinese: '铅笔钝了，需要削一削。' },
    ],
    contexts: [
      { domain: '谈话', senseId: 'blunt.s1', en: 'To be blunt, the plan will not pass the committee.', zh: '恕我直言，这个计划过不了委员会。', structure: 'To be blunt, / the plan will not pass', grammar: 'to be blunt 作评注性状语。', rationale: '说话方式比刀刃更常考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He gave a blond reply that hurt her feelings.', right: 'He gave a blunt reply that hurt her feelings.', reason: '直率甚至生硬是 blunt；blond 是金发。', rule: 'a blunt instrument / remark。blunt somebody\'s enthusiasm 使热情受挫。', special: 'blunt 直率可以是中性或略贬，frank 更偏坦诚褒义。' },
    ],
    quiz: [
      { id: 'blunt.q1', senseId: 'blunt.s1', errorType: 'meaning', type: '词义', prompt: 'a blunt knife 是：', options: ['钝刀', '快刀', '折刀'], answer: '钝刀', explain: '不锋利。' },
      { id: 'blunt.q2', senseId: 'blunt.s1', errorType: 'meaning', type: '词义', prompt: 'a blunt refusal 是：', options: ['直截了当的拒绝', '含糊的拒绝', '书面的空白'], answer: '直截了当的拒绝', explain: '说话不委婉。' },
      { id: 'blunt.q3', senseId: 'blunt.s1', errorType: 'collocation', type: '搭配', prompt: '恕我直言：To be _____, ...', options: ['blunt', 'blond', 'bliss'], answer: 'blunt', explain: '评注语。' },
      { id: 'blunt.q4', senseId: 'blunt.s1', errorType: 'confusable', type: '易混', prompt: '浅色头发是：', options: ['blond', 'blunt', 'blurt'], answer: 'blond', explain: '不要和 blunt 搞混。' },
    ],
    usage: { domains: ['生活', '评论'], tone: '中性到略直', commonConfusion: ['frank', 'blond'] },
  });

  D('bluntness', {
    etymology: {
      origin: '英语派生：blunt 加名词后缀 -ness，表示钝或说话直率这种性质。',
      prefix: null,
      root: { text: 'blunt', gloss: '钝、直率' },
      suffix: { text: '-ness', gloss: '性质' },
      history: [
        { label: 'blunt', text: '钝的；直说的' },
        { label: 'bluntness', text: '迟钝；直言不讳' },
      ],
      formationLogic: '把形容词收成不可数的品质名词。',
      mnemonic: 'the bluntness of the blade 刀刃的钝。the bluntness of her reply 回答之直。',
      note: '不可数。不要写成 bluntment。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bluntness of the email surprised his manager.', chinese: '这封邮件的直率让他的经理吃了一惊。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'bluntness.s1', en: 'Readers trusted her because of the bluntness of her questions.', zh: '读者信任她，是因为她提问直截了当。', structure: 'because of the bluntness of her questions', grammar: 'the bluntness of something。', rationale: '抽象名词，对应形容词 blunt。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He answered with a great bluntnesss and many bluntnesses.', right: 'He answered with great bluntness.', reason: 'bluntness 不可数，不说 many bluntnesses，也不双写 s。', rule: 'with bluntness；the bluntness of a remark。', special: '刀的钝同样用这个名词。' },
    ],
    quiz: [
      { id: 'bluntness.q1', senseId: 'bluntness.s1', errorType: 'meaning', type: '词义', prompt: 'the bluntness of a remark 是：', options: ['言辞的直率', '言辞的金色', '言辞的墨渍'], answer: '言辞的直率', explain: 'blunt 的名词。' },
      { id: 'bluntness.q2', senseId: 'bluntness.s1', errorType: 'grammar', type: '可数', prompt: '正确的是：', options: ['with bluntness', 'with three bluntnesses', 'with bluntnesss'], answer: 'with bluntness', explain: '不可数。' },
      { id: 'bluntness.q3', senseId: 'bluntness.s1', errorType: 'grammar', type: '构词', prompt: '名词后缀是：', options: ['-ness', '-ade', '-ette'], answer: '-ness', explain: '性质名词。' },
      { id: 'bluntness.q4', senseId: 'bluntness.s1', errorType: 'meaning', type: '词义', prompt: 'the bluntness of the axe 指：', options: ['斧刃不锋利', '斧子很贵', '斧子是蓝色的'], answer: '斧刃不锋利', explain: '物理上的钝。' },
    ],
    usage: { domains: ['评论', '工具'], tone: '中性', commonConfusion: ['blunt'] },
  });

  D('blur', {
    etymology: {
      origin: '十六世纪英语，可能与 blear「视线模糊」有关。动词是使模糊，名词是一片模糊。',
      prefix: null,
      root: { text: 'blur', gloss: '模糊' },
      suffix: null,
      history: [
        { label: 'blear', text: '眼睛看不清' },
        { label: 'blur', text: '变模糊；界限不清' },
      ],
      formationLogic: '轮廓化开，细节消失。',
      mnemonic: 'blur the photo 把照片弄糊。blur the line between A and B 模糊二者界限。',
      note: '现在分词 blurring，过去式 blurred，双写 r。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Tears blurred her view of the stage.', chinese: '泪水模糊了她看舞台的视线。' },
    ],
    contexts: [
      { domain: '议论文', senseId: 'blur.s1', en: 'Constant ads blur the line between news and promotion.', zh: '没完没了的广告模糊了新闻和推销的界限。', structure: 'blur the line between / news and promotion', grammar: 'blur the boundary / line / distinction。', rationale: '抽象义是阅读重点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The photo was blured.', right: 'The photo was blurred.', reason: '重读闭音节，过去式双写 r：blurred。', rule: 'blur, blurred, blurring。', special: 'a blur 名词：The car was a blur。' },
    ],
    quiz: [
      { id: 'blur.q1', senseId: 'blur.s1', errorType: 'meaning', type: '词义', prompt: 'a blurred photo 是：', options: ['模糊的照片', '锋利的照片', '空白的照片'], answer: '模糊的照片', explain: '看不清细节。' },
      { id: 'blur.q2', senseId: 'blur.s1', errorType: 'collocation', type: '搭配', prompt: '模糊界限：blur the _____ between work and rest.', options: ['line', 'bolt', 'bone'], answer: 'line', explain: 'blur the line。' },
      { id: 'blur.q3', senseId: 'blur.s1', errorType: 'grammar', type: '词形', prompt: '过去式拼写是：', options: ['blurred', 'blured', 'bluried'], answer: 'blurred', explain: '双写 r。' },
      { id: 'blur.q4', senseId: 'blur.s1', errorType: 'confusable', type: '易混', prompt: '脱口而出是：', options: ['blurt', 'blur', 'blunt'], answer: 'blurt', explain: 'blur 是模糊，不是突然说。' },
    ],
    usage: { domains: ['视觉', '议论文'], tone: '中性', commonConfusion: ['blurt'] },
  });

  D('blurt', {
    etymology: {
      origin: '十六世纪拟声词，模仿突然喷出来的声音。blurt out 就是不经思索地脱口而出。',
      prefix: null,
      root: { text: 'blurt', gloss: '突发的一声' },
      suffix: null,
      history: [
        { label: '拟声', text: '一口气喷出' },
        { label: 'blurt', text: '突然说出' },
      ],
      formationLogic: '话像气一样冲出口。没有希腊或拉丁词根。',
      mnemonic: 'blurt something out。out 几乎总是要带上。',
      note: '及物。Don\'t blurt the answer。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He blurted out the secret before she could stop him.', chinese: '她还没来得及拦住，他就把秘密脱口说了出来。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'blurt.s1', en: 'Nervous, she blurted the answer and then covered her mouth.', zh: '她一紧张就把答案说了出来，然后捂住了嘴。', structure: 'blurted the answer / and then covered her mouth', grammar: 'blurt something out 最自然。', rationale: '说话方式，不是视线模糊。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She blurted the news up.', right: 'She blurted the news out.', reason: '脱口而出的小品词是 out，不是 up。up 用在 blow up。', rule: 'blurt out a secret / an answer。', special: 'blurt 强调没过脑子，不是音量大。' },
    ],
    quiz: [
      { id: 'blurt.q1', senseId: 'blurt.s1', errorType: 'meaning', type: '词义', prompt: 'blurt out a name 是：', options: ['脱口说出一个名字', '涂掉一个名字', '把名字写工整'], answer: '脱口说出一个名字', explain: '未经思索。' },
      { id: 'blurt.q2', senseId: 'blurt.s1', errorType: 'collocation', type: '小品词', prompt: 'blurt the truth _____.', options: ['out', 'up', 'off'], answer: 'out', explain: 'blurt out。' },
      { id: 'blurt.q3', senseId: 'blurt.s1', errorType: 'confusable', type: '易混', prompt: '照片不清晰是：', options: ['blurred', 'blurted', 'blunted'], answer: 'blurred', explain: 'blur 才是模糊。' },
      { id: 'blurt.q4', senseId: 'blurt.s1', errorType: 'meaning', type: '词源', prompt: '这个词最可能来自：', options: ['模仿突然出声', '拉丁语「书」', '希腊语「骨」'], answer: '模仿突然出声', explain: '拟声，不要编古典词根。' },
    ],
    usage: { domains: ['日常'], tone: '非正式', commonConfusion: ['blur'] },
  });

  D('blush', {
    etymology: {
      origin: '古英语 blyscan「变红」，与 blaze「发亮」有亲缘。因害羞或窘迫而脸红。',
      prefix: null,
      root: { text: 'blyscan', gloss: '发红' },
      suffix: null,
      history: [
        { label: 'blyscan', text: '放出红光' },
        { label: 'blush', text: '脸红；名词也可指腮红' },
      ],
      formationLogic: '血涌到脸上。',
      mnemonic: 'blush with embarrassment。at first blush 是「乍看」，比较书面。',
      note: '不及物为主。blush at the compliment。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She blushed when they read her essay aloud.', chinese: '他们大声读她的作文时，她脸红了。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'blush.s1', en: 'He did not blush at the praise; he only nodded.', zh: '听到夸奖他并没有脸红，只是点了点头。', structure: 'did not blush at the praise', grammar: 'blush at something。with shame / embarrassment。', rationale: '情绪反应。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She blushed the teacher.', right: 'She blushed at the teacher\'s praise.', reason: 'blush 一般不直接带人作宾语。对某事脸红用 at。', rule: 'blush at something；blush with embarrassment。', special: '名词 a blush 是一阵脸红，也可以是化妆品腮红。' },
    ],
    quiz: [
      { id: 'blush.q1', senseId: 'blush.s1', errorType: 'meaning', type: '词义', prompt: 'blush with shame 是：', options: ['羞得脸红', '羞得变钝', '羞得封锁'], answer: '羞得脸红', explain: '面部变红。' },
      { id: 'blush.q2', senseId: 'blush.s1', errorType: 'collocation', type: '介词', prompt: '听到夸奖脸红：blush _____ the compliment.', options: ['at', 'to', 'on'], answer: 'at', explain: 'blush at。' },
      { id: 'blush.q3', senseId: 'blush.s1', errorType: 'grammar', type: '语法', prompt: '正确的是：', options: ['She blushed.', 'She blushed him.', 'She blush the room.'], answer: 'She blushed.', explain: '通常不及物。' },
      { id: 'blush.q4', senseId: 'blush.s1', errorType: 'confusable', type: '易混', prompt: '毛刷或刷子是：', options: ['brush', 'blush', 'blunt'], answer: 'brush', explain: '只差一个字母。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['brush'] },
  });

  D('board', {
    etymology: {
      origin: '古英语 bord「木板」。董事会是围着木桌的一群人，上船是走上甲板，寄宿是在别人桌上吃饭，都从「板」来。',
      prefix: null,
      root: { text: 'bord', gloss: '木板' },
      suffix: null,
      history: [
        { label: 'bord', text: '木板、桌面、船舷' },
        { label: 'board', text: '板；委员会；登乘；寄宿' },
      ],
      formationLogic: '一块板子可以是材料、桌子、甲板，意义随之分开。',
      mnemonic: 'on board 在船上、飞机上，或加入团队。a board of directors 董事会。',
      note: '动词 board a plane。room and board 食宿。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Passengers may board the train ten minutes before departure.', chinese: '乘客可在发车前十分钟上车。' },
    ],
    contexts: [
      { domain: '公司', senseId: 'board.s1', en: 'The board meets on the first Monday of each month.', zh: '董事会在每个月的第一个星期一开会。', structure: 'The board meets / on the first Monday', grammar: '集合名词，英式可用复数动词，美式常作单数。', rationale: '委员会义，不是木板。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Please board in the plane after the call.', right: 'Please board the plane after the call.', reason: '登上交通工具是 board something，中间不要加 in。', rule: 'board a bus / ship / plane；on board。', special: 'across the board 是「全面地」。' },
    ],
    quiz: [
      { id: 'board.q1', senseId: 'board.s1', errorType: 'meaning', type: '词义', prompt: 'a wooden board 是：', options: ['木板', '木船的船长', '木头奖金'], answer: '木板', explain: '本义。' },
      { id: 'board.q2', senseId: 'board.s1', errorType: 'meaning', type: '词义', prompt: 'board a flight 是：', options: ['登机', '取消航班', '油漆飞机'], answer: '登机', explain: '动词登上。' },
      { id: 'board.q3', senseId: 'board.s1', errorType: 'collocation', type: '搭配', prompt: '董事会：the board of _____.', options: ['directors', 'blouses', 'bones only'], answer: 'directors', explain: 'board of directors。' },
      { id: 'board.q4', senseId: 'board.s1', errorType: 'collocation', type: '搭配', prompt: '已经在船上：_____ board.', options: ['on', 'in', 'at the'], answer: 'on', explain: 'on board。' },
    ],
    usage: { domains: ['交通', '公司', '家居'], tone: '中性', commonConfusion: ['bored'] },
  });

  D('boast', {
    etymology: {
      origin: '中古英语 bosten，词源不明，可能是英语自身的词。意思是自夸；也可用事物作主语，表示以拥有某物而自豪。',
      prefix: null,
      root: { text: 'boast', gloss: '自夸' },
      suffix: null,
      history: [
        { label: 'bosten', text: '说大话' },
        { label: 'boast', text: '吹嘘；拥有值得夸的东西' },
      ],
      formationLogic: '把自己的好处说 loud。地点作主语时，boast 等于「拥有」。',
      mnemonic: 'boast about / of something。The town boasts a fine museum. 不是镇子在吹牛，是它有一座好博物馆。',
      note: '名词 a boast。形容词 boastful 含贬义。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He boasted about a prize he had not actually won.', chinese: '他吹嘘一个自己其实没拿到的奖。' },
    ],
    contexts: [
      { domain: '旅游', senseId: 'boast.s1', en: 'The small city boasts three theatres and a river path.', zh: '这座小城拥有三家剧院和一条河边步道。', structure: 'boasts three theatres', grammar: '事物作主语时，boast 直接接宾语，表示拥有。人作主语多用 boast about。', rationale: '阅读里「拥有」义很常见，不要一律译成吹牛。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She boasted for her grades.', right: 'She boasted about her grades.', reason: '自夸的介词是 about 或 of，不是 for。', rule: 'boast about something；a place boasts something。', special: 'boast 人作主语时通常贬义；地方作主语时中性。' },
    ],
    quiz: [
      { id: 'boast.q1', senseId: 'boast.s1', errorType: 'meaning', type: '词义', prompt: 'boast about a score 是：', options: ['吹嘘分数', '隐瞒分数', '涂掉分数'], answer: '吹嘘分数', explain: '自夸。' },
      { id: 'boast.q2', senseId: 'boast.s1', errorType: 'collocation', type: '介词', prompt: 'boast _____ his new car.', options: ['about', 'for', 'at'], answer: 'about', explain: 'about 或 of。' },
      { id: 'boast.q3', senseId: 'boast.s1', errorType: 'meaning', type: '词义', prompt: 'The hotel boasts a rooftop pool 是：', options: ['这家酒店拥有屋顶泳池', '酒店经理在泳池边吵架', '泳池被炸毁了'], answer: '这家酒店拥有屋顶泳池', explain: '事物作主语表示拥有。' },
      { id: 'boast.q4', senseId: 'boast.s1', errorType: 'confusable', type: '易混', prompt: '船上的甲板、木板是：', options: ['board', 'boast', 'blot'], answer: 'board', explain: '只差一个字母。' },
    ],
    usage: { domains: ['日常', '写作'], tone: '人作主语时常贬；地方作主语中性', commonConfusion: ['board'] },
  });

  D('boat', {
    etymology: {
      origin: '古英语 bāt，指较小的水上载具。大船更常用 ship，但口语里 boat 也会泛指。',
      prefix: null,
      root: { text: 'bāt', gloss: '船' },
      suffix: null,
      history: [
        { label: 'bāt', text: '小船' },
        { label: 'boat', text: '船、小舟' },
      ],
      formationLogic: '水上交通工具，传统上比 ship 小。',
      mnemonic: 'in the same boat 处境相同。miss the boat 错过机会。rock the boat 惹麻烦、打破现状。',
      note: 'by boat 乘船。go boating。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We rowed the boat across the calm lake.', chinese: '我们划船穿过平静的湖面。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'boat.s1', en: 'The island can be reached only by boat in winter.', zh: '冬天只能乘船到达那座岛。', structure: 'reached only by boat', grammar: 'by boat 不加冠词。in a boat 是在某一艘船里。', rationale: '交通方式。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'We are on the same boats, so let us not rock the boat.', right: 'We are in the same boat, so let us not rock the boat.', reason: '处境相同是 in the same boat，用单数和 in。', rule: 'in the same boat；miss the boat；by boat。', special: 'a gravy boat 是船上形状的酱汁壶，不是真船。' },
    ],
    quiz: [
      { id: 'boat.q1', senseId: 'boat.s1', errorType: 'meaning', type: '词义', prompt: 'a fishing boat 是：', options: ['渔船', '鱼骨', '鱼钩上的浮标'], answer: '渔船', explain: '水上的船。' },
      { id: 'boat.q2', senseId: 'boat.s1', errorType: 'collocation', type: '介词', prompt: '乘船：_____ boat.', options: ['by', 'on a always without article only', 'at'], answer: 'by', explain: 'by boat。' },
      { id: 'boat.q3', senseId: 'boat.s1', errorType: 'collocation', type: '习语', prompt: '处境相同：in the same _____.', options: ['boat', 'blot', 'bolt'], answer: 'boat', explain: 'in the same boat。' },
      { id: 'boat.q4', senseId: 'boat.s1', errorType: 'collocation', type: '习语', prompt: '错过时机：_____ the boat.', options: ['miss', 'blush', 'blanch'], answer: 'miss', explain: 'miss the boat。' },
    ],
    usage: { domains: ['旅行', '日常'], tone: '中性', commonConfusion: ['ship'] },
  });

  D('bobber', {
    etymology: {
      origin: '英语派生：bob「上下浮动」加 -er。钓鱼时漂在水面、鱼咬钩就下沉的浮子。',
      prefix: null,
      root: { text: 'bob', gloss: '上下跳动' },
      suffix: { text: '-er', gloss: '物件' },
      history: [
        { label: 'bob', text: '快速上下动' },
        { label: 'bobber', text: '钓鱼浮标' },
      ],
      formationLogic: '会 bob 的那个小装置。',
      mnemonic: 'watch the bobber 看浮标。不是 bobbin 线轴。',
      note: '可数。也可指帮助人浮在水上的救生式浮具，但教材义以钓具为主。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bobber dipped, so he lifted the rod.', chinese: '浮标往下一沉，他就提起了鱼竿。' },
    ],
    contexts: [
      { domain: '休闲', senseId: 'bobber.s1', en: 'A red bobber showed where his line entered the pond.', zh: '一个红色浮标标出鱼线入水的位置。', structure: 'A red bobber showed where / his line entered', grammar: '可数名词。', rationale: '钓具，不是线轴。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Wind the thread onto the bobber of the sewing machine.', right: 'Wind the thread onto the bobbin. Watch the bobber on the lake.', reason: '缝纫机里的线轴是 bobbin；水面浮子是 bobber。', rule: 'a fishing bobber；a sewing bobbin。', special: '两个词都和「一小段圆柱或浮动」有关，但器具不同。' },
    ],
    quiz: [
      { id: 'bobber.q1', senseId: 'bobber.s1', errorType: 'meaning', type: '词义', prompt: 'a fishing bobber 是：', options: ['钓鱼浮标', '缝纫线轴', '船桨'], answer: '钓鱼浮标', explain: '漂在水面。' },
      { id: 'bobber.q2', senseId: 'bobber.s1', errorType: 'confusable', type: '易混', prompt: '缝纫机上绕线的小筒是：', options: ['bobbin', 'bobber', 'blazer'], answer: 'bobbin', explain: '线轴。' },
      { id: 'bobber.q3', senseId: 'bobber.s1', errorType: 'meaning', type: '构词', prompt: 'bob 的动作是：', options: ['上下浮动', '漂白', '祝福'], answer: '上下浮动', explain: '所以浮子叫 bobber。' },
      { id: 'bobber.q4', senseId: 'bobber.s1', errorType: 'collocation', type: '搭配', prompt: '鱼咬钩时浮标会：', options: ['dip', 'blush', 'boast'], answer: 'dip', explain: '往下沉一下。' },
    ],
    usage: { domains: ['休闲'], tone: '中性', commonConfusion: ['bobbin'] },
  });

  D('bobbin', {
    etymology: {
      origin: '法语 bobine「线轴」。英语指缝纫、纺织机器里绕线的小筒。',
      prefix: null,
      root: { text: 'bobine', gloss: '线轴' },
      suffix: null,
      history: [
        { label: 'bobine', text: '法语：绕线的筒' },
        { label: 'bobbin', text: '线轴、卷筒' },
      ],
      formationLogic: '借来的器具名，不是 bob 的比较级。',
      mnemonic: 'bobbin 在缝纫机里。bobber 在水面上。',
      note: '可数。change the bobbin。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The sewing machine stopped because the bobbin was empty.', chinese: '底线轴空了，缝纫机停了。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bobbin.s1', en: 'She wound white thread onto a plastic bobbin.', zh: '她把白线绕到一个塑料线轴上。', structure: 'wound white thread onto / a plastic bobbin', grammar: 'wind thread onto a bobbin。', rationale: '缝纫用具。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bobbin sank when the fish bit.', right: 'The bobber sank when the fish bit. Replace the bobbin.', reason: '沉下去示警的是浮标 bobber，不是线轴。', rule: 'a bobbin of thread；onto the bobbin。', special: '纺织厂里 bobbin 也指导纱管。' },
    ],
    quiz: [
      { id: 'bobbin.q1', senseId: 'bobbin.s1', errorType: 'meaning', type: '词义', prompt: 'a bobbin of thread 是：', options: ['绕着线的线轴', '水上浮标', '一小船'], answer: '绕着线的线轴', explain: '圆柱线筒。' },
      { id: 'bobbin.q2', senseId: 'bobbin.s1', errorType: 'confusable', type: '易混', prompt: '鱼线上的浮子是：', options: ['bobber', 'bobbin', 'bonnet'], answer: 'bobber', explain: '浮标。' },
      { id: 'bobbin.q3', senseId: 'bobbin.s1', errorType: 'collocation', type: '搭配', prompt: '把线绕上去：wind thread _____ a bobbin.', options: ['onto', 'into the boat of', 'at'], answer: 'onto', explain: 'onto a bobbin。' },
      { id: 'bobbin.q4', senseId: 'bobbin.s1', errorType: 'meaning', type: '词源', prompt: 'bobbin 借自：', options: ['法语', '拉丁语「骨头」', '希腊语「火」'], answer: '法语', explain: 'bobine。' },
    ],
    usage: { domains: ['生活', '纺织'], tone: '中性', commonConfusion: ['bobber'] },
  });

  D('bodily', {
    etymology: {
      origin: '英语派生：body 加 -ly，这里 -ly 构成形容词，表示「身体的」，也可作副词「整个身体一起」。',
      prefix: null,
      root: { text: 'body', gloss: '身体' },
      suffix: { text: '-ly', gloss: '形容词或副词' },
      history: [
        { label: 'body', text: '身体' },
        { label: 'bodily', text: '肉体的；整个人被移动' },
      ],
      formationLogic: '与心灵、精神相对的身体方面。',
      mnemonic: 'bodily harm 身体伤害。lift somebody bodily 把人整个抱起来。',
      note: '不要和 body 的副词用法混成 boldly（大胆地）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The illness caused bodily pain but left his mind clear.', chinese: '疾病带来身体上的疼痛，但他的头脑仍然清楚。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'bodily.s1', en: 'The charge was causing actual bodily harm.', zh: '罪名是造成实际身体伤害。', structure: 'causing actual bodily harm', grammar: 'bodily 作定语，放在 harm、needs、contact 前。', rationale: '法律固定搭配。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She spoke bodily about the risk.', right: 'She spoke boldly about the risk. The crash caused bodily injury.', reason: '大胆地是 boldly；身体上的是 bodily。', rule: 'bodily harm / injury / needs。副词：carry somebody bodily。', special: 'bodily 不是 body 的复数。' },
    ],
    quiz: [
      { id: 'bodily.q1', senseId: 'bodily.s1', errorType: 'meaning', type: '词义', prompt: 'bodily injury 是：', options: ['身体伤害', '精神奖励', '大胆的计划'], answer: '身体伤害', explain: '肉体上的。' },
      { id: 'bodily.q2', senseId: 'bodily.s1', errorType: 'confusable', type: '易混', prompt: '大胆地说是：', options: ['boldly', 'bodily', 'blindly'], answer: 'boldly', explain: 'bold 的副词。' },
      { id: 'bodily.q3', senseId: 'bodily.s1', errorType: 'meaning', type: '词义', prompt: 'lifted him bodily 是：', options: ['把他整个人抬起来', '只抬起他的帽子', '口头夸奖他'], answer: '把他整个人抬起来', explain: '副词：整个身体。' },
      { id: 'bodily.q4', senseId: 'bodily.s1', errorType: 'collocation', type: '搭配', prompt: '法律里常见：actual _____ harm.', options: ['bodily', 'bold', 'blue'], answer: 'bodily', explain: 'actual bodily harm。' },
    ],
    usage: { domains: ['法律', '医学'], tone: '正式', commonConfusion: ['boldly'] },
  });

  D('body', {
    etymology: {
      origin: '古英语 bodig，指人或动物的躯体。后来也指物体的主体、团体和尸体。',
      prefix: null,
      root: { text: 'bodig', gloss: '身体' },
      suffix: null,
      history: [
        { label: 'bodig', text: '躯干、身体' },
        { label: 'body', text: '身体；主体；团体；尸体' },
      ],
      formationLogic: '一个完整的实体。人的身体、文章主体、组织机构都是一个 body。',
      mnemonic: 'body and mind。the body of the text 正文。a body of water 一片水域。',
      note: '复数 bodies。a dead body 尸体，语气直，正式也说 the deceased。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Exercise keeps the body warm in a cold office.', chinese: '在寒冷的办公室里，运动能让身体保持暖和。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'body.s1', en: 'Put the examples in the body of the report, not in the title.', zh: '把例子放进报告正文，不要放在标题里。', structure: 'in the body of the report', grammar: 'the body of something 是主体部分。', rationale: '不是解剖义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'A large body water lies west of the city.', right: 'A large body of water lies west of the city.', reason: '一片水要用 of：a body of water。', rule: 'a body of water / evidence / people。', special: 'somebody / anybody 是复合不定代词，不要拆开理解成「某个身体」。' },
    ],
    quiz: [
      { id: 'body.q1', senseId: 'body.s1', errorType: 'meaning', type: '词义', prompt: 'the human body 是：', options: ['人体', '人的奖金', '人的博客'], answer: '人体', explain: '身体。' },
      { id: 'body.q2', senseId: 'body.s1', errorType: 'meaning', type: '词义', prompt: 'the body of the letter 是：', options: ['信的正文', '信封', '信使的身体'], answer: '信的正文', explain: '主体部分。' },
      { id: 'body.q3', senseId: 'body.s1', errorType: 'collocation', type: '搭配', prompt: '一片水域：a body _____ water.', options: ['of', 'to', 'at'], answer: 'of', explain: 'a body of water。' },
      { id: 'body.q4', senseId: 'body.s1', errorType: 'grammar', type: '复数', prompt: '复数是：', options: ['bodies', 'bodys', 'bodyes'], answer: 'bodies', explain: 'y 变 i 加 es。' },
    ],
    usage: { domains: ['医学', '写作', '机构'], tone: '中性', commonConfusion: ['bodily'] },
  });

  D('body part', {
    etymology: {
      origin: '现代英语名词短语：body + part，即身体的一个部分。不是古典复合词。',
      prefix: null,
      root: { text: 'body', gloss: '身体' },
      suffix: null,
      history: [
        { label: 'body', text: '身体' },
        { label: 'body part', text: '头、手、膝等部位' },
      ],
      formationLogic: '两个普通词合成一个说法，中间有空格。',
      mnemonic: '保持两个词：body part。不要写成 bodypart，除非看到某个品牌这样拼。',
      note: '复数 body parts。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The knee is a body part that often troubles runners.', chinese: '膝盖是经常困扰跑者的身体部位。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'body part.s1', en: 'Name the body part that bends at the elbow.', zh: '说出在肘部弯曲的那个身体部位。', structure: 'Name the body part / that bends at the elbow', grammar: '可数。a body part，复数 body parts。', rationale: '教学和医学用语。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Hands and eyes are body part.', right: 'Hands and eyes are body parts.', reason: '两个以上部位要用复数 parts。', rule: 'a body part；body parts。中间保留空格。', special: 'spare parts 是机器零件，不是身体。' },
    ],
    quiz: [
      { id: 'body part.q1', senseId: 'body part.s1', errorType: 'meaning', type: '词义', prompt: 'The wrist is a body part 是：', options: ['手腕是身体部位', '手腕是一种船', '手腕是委员会'], answer: '手腕是身体部位', explain: '身体的一部分。' },
      { id: 'body part.q2', senseId: 'body part.s1', errorType: 'grammar', type: '复数', prompt: '手和脚：two body _____.', options: ['parts', 'part', 'parties'], answer: 'parts', explain: '复数。' },
      { id: 'body part.q3', senseId: 'body part.s1', errorType: 'grammar', type: '拼写', prompt: '标准写法是：', options: ['body part', 'bodypart as one compulsory word', 'body\'s part always'], answer: 'body part', explain: '两个词。' },
      { id: 'body part.q4', senseId: 'body part.s1', errorType: 'confusable', type: '易混', prompt: '文章的主体叫：', options: ['the body of the text', 'a body part of the text', 'the blot of the text'], answer: 'the body of the text', explain: '正文不是「身体部位」。' },
    ],
    usage: { domains: ['医学', '教学'], tone: '中性', commonConfusion: ['body'] },
  });

  D('bodyboard', {
    etymology: {
      origin: '现代英语复合词：body + board。一块短板，人趴在上面用身体贴着板冲浪。',
      prefix: null,
      root: { text: 'board', gloss: '板' },
      suffix: null,
      history: [
        { label: 'board', text: '木板、滑板' },
        { label: 'bodyboard', text: '趴板、身体冲浪板' },
      ],
      formationLogic: '用身体而不是站立来驾驭的板。',
      mnemonic: 'bodyboard 通常比 surfboard 短，人是俯卧。不要和 body part 混淆。',
      note: '可数。go bodyboarding。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He rented a bodyboard and rode the small waves on his stomach.', chinese: '他租了一块趴板，俯卧着冲小浪。' },
    ],
    contexts: [
      { domain: '运动', senseId: 'bodyboard.s1', en: 'Children often learn on a bodyboard before they try to stand on a surfboard.', zh: '孩子们常常先用趴板，再尝试站上冲浪板。', structure: 'learn on a bodyboard / before they try to stand', grammar: 'on a bodyboard。', rationale: '运动器材。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The doctor named every bodyboard that was injured.', right: 'The doctor named every body part that was injured. He waxed his bodyboard.', reason: '受伤的是 body part；冲浪器材是 bodyboard。', rule: 'ride a bodyboard；a body part such as the knee。', special: '连写 bodyboard。短语 body part 则分开。' },
    ],
    quiz: [
      { id: 'bodyboard.q1', senseId: 'bodyboard.s1', errorType: 'meaning', type: '词义', prompt: 'a bodyboard 是：', options: ['趴着骑的短冲浪板', '身体的一个器官', '董事会'], answer: '趴着骑的短冲浪板', explain: '身体冲浪板。' },
      { id: 'bodyboard.q2', senseId: 'bodyboard.s1', errorType: 'confusable', type: '易混', prompt: '肘和膝属于：', options: ['body parts', 'bodyboards', 'bobbins'], answer: 'body parts', explain: '部位不是板。' },
      { id: 'bodyboard.q3', senseId: 'bodyboard.s1', errorType: 'collocation', type: '搭配', prompt: '使用方式常见的是：ride it on your _____.', options: ['stomach', 'blueprint', 'bonus'], answer: 'stomach', explain: '俯卧。' },
      { id: 'bodyboard.q4', senseId: 'bodyboard.s1', errorType: 'meaning', type: '构词', prompt: '这个词由哪两个英语词合成？', options: ['body 和 board', 'blow 和 board', 'bone 和 hard'], answer: 'body 和 board', explain: '现代复合词。' },
    ],
    usage: { domains: ['运动'], tone: '中性', commonConfusion: ['surfboard', 'body part'] },
  });

  D('bog', {
    etymology: {
      origin: '爱尔兰语或盖尔语 bog「软的」。名词是泥炭沼泽，动词 bog down 是陷入泥里或陷入困境。',
      prefix: null,
      root: { text: 'bog', gloss: '软、沼泽' },
      suffix: null,
      history: [
        { label: '盖尔语 bog', text: '柔软' },
        { label: 'bog', text: '沼泽；bog down 陷入' },
      ],
      formationLogic: '又软又湿、会把脚吸住的地。',
      mnemonic: 'get bogged down in details 被细节拖住。a peat bog 泥炭沼泽。',
      note: '动词常用被动 be bogged down。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The path ended in a bog, so we turned back.', chinese: '小路尽头是一片沼泽，我们只好返回。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'bog.s1', en: 'The talks were bogged down in arguments about dates.', zh: '谈判陷入了对日期的争执。', structure: 'were bogged down in / arguments about dates', grammar: 'be bogged down in something。', rationale: '比喻义在新闻和作文里比地理义更常出现。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'We were bogged down on tiny details.', right: 'We were bogged down in tiny details.', reason: '陷入用 in，不是 on。', rule: 'a peat bog；bogged down in work。', special: 'bog 作名词是可数的一片湿地。英式俚语 bog 还可指厕所，非正式。' },
    ],
    quiz: [
      { id: 'bog.q1', senseId: 'bog.s1', errorType: 'meaning', type: '词义', prompt: 'a peat bog 是：', options: ['泥炭沼泽', '泥炭饼干', '泥炭衬衫'], answer: '泥炭沼泽', explain: '软湿的地。' },
      { id: 'bog.q2', senseId: 'bog.s1', errorType: 'collocation', type: '搭配', prompt: '被细节拖住：bogged down _____ details.', options: ['in', 'at', 'to'], answer: 'in', explain: 'bogged down in。' },
      { id: 'bog.q3', senseId: 'bog.s1', errorType: 'grammar', type: '词形', prompt: '「陷入」常用：', options: ['bogged', 'boged', 'bigged'], answer: 'bogged', explain: '过去分词 bogged。' },
      { id: 'bog.q4', senseId: 'bog.s1', errorType: 'confusable', type: '易混', prompt: '原木、树干若指 trunk 更接近：', options: ['bole', 'bog', 'blot'], answer: 'bole', explain: 'bole 是树干，bog 是沼泽。' },
    ],
    usage: { domains: ['地理', '口语'], tone: '中性；比喻时常负面', commonConfusion: ['swamp'] },
  });

  D('boil', {
    etymology: {
      origin: '古法语 boillir，拉丁语 bullire「起泡」。液体加热到冒泡就是 boil。',
      prefix: null,
      root: { text: 'bullire', gloss: '冒泡' },
      suffix: null,
      history: [
        { label: 'bullire', text: '沸腾' },
        { label: 'boil', text: '煮沸；用开水煮' },
      ],
      formationLogic: '热到出现气泡。',
      mnemonic: 'boil water 烧水。boil an egg 煮蛋。blood boils 是气愤，比喻。',
      note: '名词 a boil 还可以是皮肤上的疖子，和动词不同源时要看语境。这里按煮沸记。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Boil the potatoes until a fork goes in easily.', chinese: '把土豆煮到叉子容易插进去。' },
    ],
    contexts: [
      { domain: '烹饪', senseId: 'boil.s1', en: 'Let the soup boil for three minutes, then turn the heat down.', zh: '让汤沸腾三分钟，然后把火关小。', structure: 'Let the soup boil / for three minutes', grammar: '不及物：water boils。及物：boil the eggs。', rationale: '厨房基本动词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Oil the water before you make tea.', right: 'Boil the water before you make tea.', reason: '烧开是 boil；oil 是加油或油。', rule: 'boil water；bring something to the boil。', special: 'on the boil 可以表示事情正紧要、正在进行。' },
    ],
    quiz: [
      { id: 'boil.q1', senseId: 'boil.s1', errorType: 'meaning', type: '词义', prompt: 'boil an egg 是：', options: ['煮蛋', '煎蛋', '把蛋冷冻'], answer: '煮蛋', explain: '在水里煮。' },
      { id: 'boil.q2', senseId: 'boil.s1', errorType: 'collocation', type: '搭配', prompt: '把水烧开：bring the water to the _____.', options: ['boil', 'bolt', 'blot'], answer: 'boil', explain: 'to the boil，英式常见。' },
      { id: 'boil.q3', senseId: 'boil.s1', errorType: 'confusable', type: '易混', prompt: '门闩是：', options: ['bolt', 'boil', 'bole'], answer: 'bolt', explain: 'boil 是煮。' },
      { id: 'boil.q4', senseId: 'boil.s1', errorType: 'meaning', type: '词义', prompt: 'It makes my blood boil 是：', options: ['这让我非常气愤', '这让我的血真的被煮开', '这让我口渴'], answer: '这让我非常气愤', explain: '比喻愤怒。' },
    ],
    usage: { domains: ['烹饪'], tone: '中性', commonConfusion: ['broil', 'simmer'] },
  });

  D('boil down', {
    etymology: {
      origin: '英语短语：boil + down。把液体煮到变少，比喻把一堆话归结成要点。',
      prefix: null,
      root: { text: 'boil', gloss: '煮' },
      suffix: null,
      history: [
        { label: 'boil down', text: '熬浓、煮到体积变小' },
        { label: '比喻', text: '归结为' },
      ],
      formationLogic: '多余的水分煮掉，剩下的才是精华。说话也一样。',
      mnemonic: 'boil down to 归结为。It boils down to money. 说到底是钱。',
      note: '不及物用 boil down to。及物 boil the sauce down。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The argument boils down to who should pay.', chinese: '这场争论归结为谁该付钱。' },
    ],
    contexts: [
      { domain: '讨论', senseId: 'boil down.s1', en: 'After an hour, the advice boiled down to three rules.', zh: '一小时之后，这些建议归结为三条规则。', structure: 'the advice boiled down to / three rules', grammar: 'boil down to something。', rationale: '比喻义是写作和听力高频。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The problem boils down at cost.', right: 'The problem boils down to cost.', reason: '归结为后面是 to，不是 at。', rule: 'boil down to；boil something down。', special: '真正熬酱汁时可以说 boil the stock down。' },
    ],
    quiz: [
      { id: 'boil down.q1', senseId: 'boil down.s1', errorType: 'meaning', type: '词义', prompt: 'It boils down to trust 是：', options: ['说到底是信任', '信任被煮糊了', '信任被炸掉了'], answer: '说到底是信任', explain: '归结。' },
      { id: 'boil down.q2', senseId: 'boil down.s1', errorType: 'collocation', type: '介词', prompt: 'boil down _____ a lack of time.', options: ['to', 'at', 'on'], answer: 'to', explain: 'boil down to。' },
      { id: 'boil down.q3', senseId: 'boil down.s1', errorType: 'meaning', type: '词义', prompt: 'Boil the sauce down 是：', options: ['把酱汁熬浓', '把酱汁冲淡', '把酱汁冰镇'], answer: '把酱汁熬浓', explain: '字面义：煮到变少。' },
      { id: 'boil down.q4', senseId: 'boil down.s1', errorType: 'grammar', type: '语法', prompt: '正确的是：', options: ['The issue boils down to cost.', 'The issue boils down cost as object without to.', 'The issue boil down at cost.'], answer: 'The issue boils down to cost.', explain: '第三人称单数加 to。' },
    ],
    usage: { domains: ['讨论', '烹饪'], tone: '中性', commonConfusion: ['sum up'] },
  });

  D('boiler', {
    etymology: {
      origin: '英语派生：boil 加 -er，指把水烧热的装置，尤其是供暖锅炉。',
      prefix: null,
      root: { text: 'boil', gloss: '煮沸' },
      suffix: { text: '-er', gloss: '器具' },
      history: [
        { label: 'boil', text: '使水沸腾' },
        { label: 'boiler', text: '锅炉、热水器' },
      ],
      formationLogic: '干活的机器，不是煮饭的人，虽然 -er 有时指人。',
      mnemonic: 'the central-heating boiler 供暖锅炉。boiler suit 是连体工作服。',
      note: '可数。The boiler has broken down.',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The boiler broke, so there was no hot water.', chinese: '锅炉坏了，于是没有热水。' },
    ],
    contexts: [
      { domain: '家居', senseId: 'boiler.s1', en: 'An engineer came to service the boiler before winter.', zh: '冬天前工程师来检修了锅炉。', structure: 'service the boiler / before winter', grammar: '可数名词，the boiler。', rationale: '家用设备。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Use the boiler to remove the ink blot only.', right: 'Use blotting paper on the ink. Call someone to repair the boiler.', reason: '锅炉不负责吸墨。blot 是污点，boiler 是烧水设备。', rule: 'a gas / electric boiler；the boiler heats water。', special: '不要和 broiler（美式烤架）混淆。' },
    ],
    quiz: [
      { id: 'boiler.q1', senseId: 'boiler.s1', errorType: 'meaning', type: '词义', prompt: 'a gas boiler 是：', options: ['燃气锅炉', '燃气船', '燃气浮标'], answer: '燃气锅炉', explain: '烧热水的设备。' },
      { id: 'boiler.q2', senseId: 'boiler.s1', errorType: 'confusable', type: '易混', prompt: '把水烧开这个动作是：', options: ['boil', 'boiler', 'bole'], answer: 'boil', explain: 'boiler 是名词器具。' },
      { id: 'boiler.q3', senseId: 'boiler.s1', errorType: 'collocation', type: '搭配', prompt: '连体工作服可叫 a boiler _____.', options: ['suit', 'bland', 'bliss'], answer: 'suit', explain: 'boiler suit。' },
      { id: 'boiler.q4', senseId: 'boiler.s1', errorType: 'meaning', type: '构词', prompt: '-er 这里多半指：', options: ['装置', '比较级', '过去式'], answer: '装置', explain: '烧水的机器。' },
    ],
    usage: { domains: ['家居'], tone: '中性', commonConfusion: ['boil'] },
  });

  D('boiling', {
    etymology: {
      origin: 'boil 的现在分词和动名词，也可作形容词：正在沸腾的。名词 boiling 可指沸点，如 boiling point。',
      prefix: null,
      root: { text: 'boil', gloss: '沸腾' },
      suffix: { text: '-ing', gloss: '进行或形容词' },
      history: [
        { label: 'boil', text: '煮沸' },
        { label: 'boiling', text: '沸腾的；沸点' },
      ],
      formationLogic: '水正在 boil 的状态。口语 boiling hot 是热得要命。',
      mnemonic: 'boiling point 沸点。at boiling point 也可比喻冲突一触即发。',
      note: 'It is boiling in here 口语：屋里热极了。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Do not touch the pan; the water is boiling.', chinese: '别碰锅，水开着。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'boiling.s1', en: 'Water reaches boiling point at 100 degrees Celsius at sea level.', zh: '在海平面，水在一百摄氏度达到沸点。', structure: 'reaches boiling point / at 100 degrees', grammar: 'boiling point 是固定名词。形容词 boiling water。', rationale: '温度义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The kettle is in the boiling point.', right: 'The kettle has reached boiling point.', reason: '达到沸点用 reach boiling point，不是 in the boiling point。', rule: 'boiling water；boiling point。', special: 'boiling 可强调非常热：a boiling afternoon。' },
    ],
    quiz: [
      { id: 'boiling.q1', senseId: 'boiling.s1', errorType: 'meaning', type: '词义', prompt: 'boiling water 是：', options: ['正在沸腾的水', '冰水', '蒸馏后的冷水'], answer: '正在沸腾的水', explain: '开水、沸水。' },
      { id: 'boiling.q2', senseId: 'boiling.s1', errorType: 'collocation', type: '搭配', prompt: '沸点：boiling _____.', options: ['point', 'blot', 'board'], answer: 'point', explain: 'boiling point。' },
      { id: 'boiling.q3', senseId: 'boiling.s1', errorType: 'meaning', type: '词义', prompt: 'Tempers reached boiling point 是：', options: ['怒气到了一触即发的地步', '大家都去煮汤', '温度计坏了'], answer: '怒气到了一触即发的地步', explain: '比喻。' },
      { id: 'boiling.q4', senseId: 'boiling.s1', errorType: 'grammar', type: '词性', prompt: '在 boiling water 里 boiling 是：', options: ['形容词', '介词', '冠词'], answer: '形容词', explain: '修饰 water。' },
    ],
    usage: { domains: ['科学', '烹饪', '口语'], tone: '中性', commonConfusion: ['boil'] },
  });

  D('bold', {
    etymology: {
      origin: '古英语 beald「勇敢、自信」。印刷上 bold 是粗体，因为笔画又黑又重，视觉上「敢站出来」。',
      prefix: null,
      root: { text: 'beald', gloss: '勇敢' },
      suffix: null,
      history: [
        { label: 'beald', text: '大胆' },
        { label: 'bold', text: '大胆的；醒目的；粗体的' },
      ],
      formationLogic: '不怕出头。字重，颜色重，决定重，都可以 bold。',
      mnemonic: 'a bold plan 大胆的计划。in bold 用粗体。as bold as brass 极其放肆。',
      note: '副词 boldly。比较级 bolder。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'It was a bold decision to open a shop in that street.', chinese: '在那条街上开店是个大胆的决定。' },
    ],
    contexts: [
      { domain: '排版', senseId: 'bold.s1', en: 'Key terms are printed in bold so students notice them.', zh: '关键术语印成粗体，好让学生注意到。', structure: 'printed in bold', grammar: 'in bold / in bold type。形容词 a bold line。', rationale: '字体义在说明文里常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The doctor treated the bold injury.', right: 'The doctor treated the bodily injury. The headline was bold.', reason: '身体的是 bodily；大胆或粗体是 bold。', rule: 'a bold move；bold type；bold colours。', special: 'bold 可以褒奖勇气，也可以批评鲁莽。' },
    ],
    quiz: [
      { id: 'bold.q1', senseId: 'bold.s1', errorType: 'meaning', type: '词义', prompt: 'a bold move 是：', options: ['大胆的一步', '模糊的一步', '空白的一步'], answer: '大胆的一步', explain: '有勇气，也有风险。' },
      { id: 'bold.q2', senseId: 'bold.s1', errorType: 'collocation', type: '搭配', prompt: '粗体印刷：in _____.', options: ['bold', 'blunt', 'blot'], answer: 'bold', explain: 'in bold。' },
      { id: 'bold.q3', senseId: 'bold.s1', errorType: 'confusable', type: '易混', prompt: '身体伤害是 _____ harm.', options: ['bodily', 'bold', 'boiled'], answer: 'bodily', explain: 'bodily 不是 boldly。' },
      { id: 'bold.q4', senseId: 'bold.s1', errorType: 'meaning', type: '词义', prompt: 'bold colours 是：', options: ['醒目的颜色', '非常淡的颜色', '看不见的颜色'], answer: '醒目的颜色', explain: '对比强、抢眼。' },
    ],
    usage: { domains: ['评论', '排版'], tone: '常褒，有时指鲁莽', commonConfusion: ['bodily'] },
  });

  D('boldness', {
    etymology: {
      origin: '英语派生：bold 加 -ness，把「大胆」收成名词。',
      prefix: null,
      root: { text: 'bold', gloss: '大胆' },
      suffix: { text: '-ness', gloss: '性质' },
      history: [
        { label: 'bold', text: '勇敢、醒目' },
        { label: 'boldness', text: '勇敢、敢作敢为' },
      ],
      formationLogic: '品质名词，不可数。',
      mnemonic: 'the boldness of the plan。和 bluntness 只是词根不同。',
      note: '不要写成 boldyness。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The boldness of her question made the room go quiet.', chinese: '她问题之大胆让房间安静下来。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'boldness.s1', en: 'Critics admired the boldness of the design, if not its cost.', zh: '评论家欣赏设计的大胆，尽管未必欣赏它的造价。', structure: 'admired the boldness of the design', grammar: 'the boldness of something。', rationale: '抽象名词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'I dislike the boldness of this knife.', right: 'I dislike the bluntness of this knife. I admire her boldness.', reason: '刀钝是 bluntness；勇气是 boldness。', rule: 'boldness 不可数。with boldness。', special: '字体粗可以用 bold，很少说 the boldness of the font，更常说 bold type。' },
    ],
    quiz: [
      { id: 'boldness.q1', senseId: 'boldness.s1', errorType: 'meaning', type: '词义', prompt: 'boldness 是：', options: ['大胆', '迟钝', '沸点'], answer: '大胆', explain: 'bold 的名词。' },
      { id: 'boldness.q2', senseId: 'boldness.s1', errorType: 'confusable', type: '易混', prompt: '说话生硬不绕弯的性质是：', options: ['bluntness', 'boldness', 'blindness'], answer: 'bluntness', explain: 'blunt 对 bold。' },
      { id: 'boldness.q3', senseId: 'boldness.s1', errorType: 'grammar', type: '可数', prompt: '正确的是：', options: ['great boldness', 'three boldnesses in a list of coins', 'a boldnesss'], answer: 'great boldness', explain: '不可数品质。' },
      { id: 'boldness.q4', senseId: 'boldness.s1', errorType: 'collocation', type: '搭配', prompt: 'the boldness _____ the idea.', options: ['of', 'at', 'into'], answer: 'of', explain: 'the boldness of。' },
    ],
    usage: { domains: ['评论'], tone: '多褒义', commonConfusion: ['bluntness'] },
  });

  D('bole', {
    etymology: {
      origin: '古诺尔斯语 bolr「树干」。现代英语 bole 专指树的主干，比 trunk 更书面、更少见。',
      prefix: null,
      root: { text: 'bolr', gloss: '树干' },
      suffix: null,
      history: [
        { label: 'bolr', text: '树的主干' },
        { label: 'bole', text: '树干' },
      ],
      formationLogic: '借自北欧语的具体部位名，不是 bowl，也不是 bold。',
      mnemonic: 'the bole of an oak 橡树树干。看到 bole 先想树，不要想碗。',
      note: '可数，复数 boles。日常更常说 trunk。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Moss covered the bole of the old pine.', chinese: '苔藓盖住了那棵老松的树干。' },
    ],
    contexts: [
      { domain: '自然', senseId: 'bole.s1', en: 'They measured the bole before deciding the tree was hollow.', zh: '他们先量了树干，才确定这棵树是空心的。', structure: 'measured the bole / before deciding', grammar: 'the bole of a tree。', rationale: '植物部位，书面用词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She ate soup from a wooden bole.', right: 'She ate soup from a wooden bowl. Ivy climbed the bole.', reason: '碗是 bowl；树干是 bole。', rule: 'the bole of a tree。', special: 'bolt 是螺栓或门闩，也不是 bole。' },
    ],
    quiz: [
      { id: 'bole.q1', senseId: 'bole.s1', errorType: 'meaning', type: '词义', prompt: 'the bole of a tree 是：', options: ['树干', '树叶', '树根的最尖端'], answer: '树干', explain: '主干。' },
      { id: 'bole.q2', senseId: 'bole.s1', errorType: 'confusable', type: '易混', prompt: '喝汤的碗是：', options: ['bowl', 'bole', 'boil'], answer: 'bowl', explain: '多一个 w。' },
      { id: 'bole.q3', senseId: 'bole.s1', errorType: 'confusable', type: '易混', prompt: '门闩是：', options: ['bolt', 'bole', 'bold'], answer: 'bolt', explain: 'bole 无门的意思。' },
      { id: 'bole.q4', senseId: 'bole.s1', errorType: 'meaning', type: '词源', prompt: 'bole 来自北欧语，意思接近：', options: ['树干', '沸腾', '大胆'], answer: '树干', explain: 'bolr。' },
    ],
    usage: { domains: ['自然', '文学'], tone: '书面', commonConfusion: ['bowl', 'trunk'] },
  });

  D('bolster', {
    etymology: {
      origin: '古英语 bolster「长枕、垫子」。动词后来表示像垫子一样从下面托住，即支持、增强。',
      prefix: null,
      root: { text: 'bolster', gloss: '垫、支撑' },
      suffix: null,
      history: [
        { label: 'bolster', text: '床上的长枕' },
        { label: '动词', text: '支撑、增强信心或论据' },
      ],
      formationLogic: '垫在下面就不塌。证据、经济、士气都可以被 bolster。',
      mnemonic: 'bolster confidence / an argument / the economy。常接 up，但不强制。',
      note: '及物动词。名词旧义「长枕」阅读里少见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'New figures bolstered her claim that sales were rising.', chinese: '新的数字支撑了她关于销量在上升的说法。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bolster.s1', en: 'The loan was meant to bolster small shops through the winter.', zh: '这笔贷款是为了支撑小店度过冬天。', structure: 'meant to bolster small shops', grammar: 'bolster something。bolster up 也可。', rationale: '抽象支持，不是枕头。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The news bolstered up to confidence.', right: 'The news bolstered their confidence.', reason: 'bolster 直接接被加强的事物，不说 bolster up to。', rule: 'bolster confidence / demand / an argument。', special: '和 booster（助推器、加强针）不是同一个词。' },
    ],
    quiz: [
      { id: 'bolster.q1', senseId: 'bolster.s1', errorType: 'meaning', type: '词义', prompt: 'bolster morale 是：', options: ['提振士气', '削弱士气', '隐瞒士气'], answer: '提振士气', explain: '支持、增强。' },
      { id: 'bolster.q2', senseId: 'bolster.s1', errorType: 'collocation', type: '搭配', prompt: '哪一个自然？', options: ['bolster an argument', 'bolster on an argument', 'bolster at argument'], answer: 'bolster an argument', explain: '及物，直接加宾语。' },
      { id: 'bolster.q3', senseId: 'bolster.s1', errorType: 'meaning', type: '词源', prompt: '名词旧义是：', options: ['长枕头', '锅炉', '树干'], answer: '长枕头', explain: '垫着，所以引申为支撑。' },
      { id: 'bolster.q4', senseId: 'bolster.s1', errorType: 'confusable', type: '易混', prompt: '门上的金属插销是：', options: ['bolt', 'bolster', 'bole'], answer: 'bolt', explain: 'bolster 是增强。' },
    ],
    usage: { domains: ['新闻', '写作'], tone: '中性偏正式', commonConfusion: ['support', 'bolt'] },
  });

  D('bolt', {
    etymology: {
      origin: '古英语 bolt，指短而粗的箭或销钉。后来是螺栓、门闩，动词是闩上或突然跑掉。',
      prefix: null,
      root: { text: 'bolt', gloss: '箭、销' },
      suffix: null,
      history: [
        { label: 'bolt', text: '弩箭、插销' },
        { label: '今天', text: '螺栓；门闩；闩门；狂奔' },
      ],
      formationLogic: '一根能插入并固定的杆。马受惊时 bolt，是像箭一样窜出去。',
      mnemonic: 'nut and bolt 螺母和螺栓。bolt the door 闩门。a bolt from the blue 晴天霹雳。',
      note: 'sit bolt upright 坐得笔直。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She slid the bolt across and locked the shed.', chinese: '她把门闩拉上，锁好了棚屋。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bolt.s1', en: 'One bolt was missing, so the shelf would not hold.', zh: '少了一颗螺栓，架子撑不住。', structure: 'One bolt was missing', grammar: '可数名词。动词 bolt something to the wall 用螺栓固定。', rationale: '五金义。狂奔义需要 horse 或人作主语另看。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Boil the door before you sleep.', right: 'Bolt the door before you sleep.', reason: '闩门是 bolt；煮是 boil。', rule: 'bolt the door；a bolt from the blue。', special: 'make a bolt for the exit 是突然朝出口冲去。' },
    ],
    quiz: [
      { id: 'bolt.q1', senseId: 'bolt.s1', errorType: 'meaning', type: '词义', prompt: 'nut and bolt 里的 bolt 是：', options: ['螺栓', '汤', '树干'], answer: '螺栓', explain: '和螺母配套。' },
      { id: 'bolt.q2', senseId: 'bolt.s1', errorType: 'meaning', type: '词义', prompt: 'bolt the gate 是：', options: ['把门闩上', '把门煮了', '把门涂蓝'], answer: '把门闩上', explain: '动词闩上。' },
      { id: 'bolt.q3', senseId: 'bolt.s1', errorType: 'collocation', type: '习语', prompt: '突如其来也可说 a bolt from the _____.', options: ['blue', 'boil', 'bog'], answer: 'blue', explain: 'a bolt from the blue。' },
      { id: 'bolt.q4', senseId: 'bolt.s1', errorType: 'confusable', type: '易混', prompt: '墨渍是：', options: ['blot', 'bolt', 'bole'], answer: 'blot', explain: '元音字母不同。' },
    ],
    usage: { domains: ['生活', '机械'], tone: '中性', commonConfusion: ['boil', 'blot'] },
  });

  D('bomb', {
    etymology: {
      origin: '法语 bombe，意大利语 bomba，来自拉丁语 bombus「沉闷的响声」。名词是炸弹，动词是轰炸。',
      prefix: null,
      root: { text: 'bombus', gloss: '轰鸣' },
      suffix: null,
      history: [
        { label: 'bombus', text: '低沉的爆声' },
        { label: 'bomb', text: '炸弹；轰炸' },
      ],
      formationLogic: '会发出轰然一声的武器。',
      mnemonic: 'a bomb explodes。drop a bomb 可比喻抛出重磅消息。美式口语 bomb 作动词还可指惨败：The play bombed.',
      note: '发音英式末尾常不发 b，美式可能轻轻带上。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bomb was found and removed before it could explode.', chinese: '炸弹在爆炸前被发现并移走了。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bomb.s1', en: 'Police closed the square after a report of a bomb under a bench.', zh: '有人报告长椅下有炸弹，警察封闭了广场。', structure: 'a report of a bomb / under a bench', grammar: '可数名词。动词 bomb a city 是轰炸。', rationale: '武器义。口语惨败义要有表演、考试等主语。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'In a formal lab report, write that the experiment totally bombed.', right: 'In a formal lab report, write that the experiment failed. The show bombed only in a review\'s casual tone.', reason: '「惨败」是口语。正式报告用 fail。', rule: 'a bomb；bomb a target。口语：the movie bombed。', special: 'bomb 不是 blossom。' },
    ],
    quiz: [
      { id: 'bomb.q1', senseId: 'bomb.s1', errorType: 'meaning', type: '词义', prompt: 'an unexploded bomb 是：', options: ['未爆炸的炸弹', '未开花的树', '未煮开的水'], answer: '未爆炸的炸弹', explain: '武器。' },
      { id: 'bomb.q2', senseId: 'bomb.s1', errorType: 'meaning', type: '词义', prompt: 'The film bombed 在美式口语是：', options: ['电影惨败', '电影被轰炸', '电影很清淡'], answer: '电影惨败', explain: '非正式。' },
      { id: 'bomb.q3', senseId: 'bomb.s1', errorType: 'collocation', type: '搭配', prompt: '炸弹爆炸用动词：', options: ['explode', 'blossom', 'blanch'], answer: 'explode', explain: 'explode 或 go off。' },
      { id: 'bomb.q4', senseId: 'bomb.s1', errorType: 'confusable', type: '易混', prompt: '夸夸其谈的大话是：', options: ['bombast', 'bomb', 'bobbin'], answer: 'bombast', explain: '多了 -ast，不是炸弹。' },
    ],
    usage: { domains: ['新闻', '口语'], tone: '武器义严重；惨败义口语', commonConfusion: ['bombast'] },
  });

  D('bombardment', {
    etymology: {
      origin: 'bombard「炮击」加名词后缀 -ment。bombard 与 bomb 同族，表示连续轰击。',
      prefix: null,
      root: { text: 'bombard', gloss: '炮击' },
      suffix: { text: '-ment', gloss: '行为或结果' },
      history: [
        { label: 'bomb', text: '炸弹、轰击' },
        { label: 'bombardment', text: '连续轰炸或炮击；比喻连珠炮似的提问' },
      ],
      formationLogic: '不是一颗炸弹，而是一阵持续的打击。',
      mnemonic: 'under bombardment。a bombardment of questions 连珠炮式的问题。',
      note: '可数或不可数。heavy bombardment。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The port suffered days of bombardment.', chinese: '港口遭受了多日炮击。' },
    ],
    contexts: [
      { domain: '采访', senseId: 'bombardment.s1', en: 'The minister faced a bombardment of questions about the delay.', zh: '部长面临一连串关于延误的提问。', structure: 'faced a bombardment of questions', grammar: 'a bombardment of something。军事：under bombardment。', rationale: '比喻义在新闻英语里很有用。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They asked a bombardment to questions.', right: 'They directed a bombardment of questions at her.', reason: '介词是 of，不是 to。也常说 a bombardment of questions。', rule: 'bombardment of a city；a bombardment of emails。', special: '动词是 bombard somebody with something。' },
    ],
    quiz: [
      { id: 'bombardment.q1', senseId: 'bombardment.s1', errorType: 'meaning', type: '词义', prompt: 'artillery bombardment 是：', options: ['炮击', '炮兵的奖金', '炮兵的博客'], answer: '炮击', explain: '连续轰击。' },
      { id: 'bombardment.q2', senseId: 'bombardment.s1', errorType: 'collocation', type: '介词', prompt: 'a bombardment _____ complaints.', options: ['of', 'at', 'into'], answer: 'of', explain: 'of + 内容。' },
      { id: 'bombardment.q3', senseId: 'bombardment.s1', errorType: 'grammar', type: '构词', prompt: '动词形式是：', options: ['bombard', 'bombardmentize', 'bombast'], answer: 'bombard', explain: 'bombard somebody with。' },
      { id: 'bombardment.q4', senseId: 'bombardment.s1', errorType: 'confusable', type: '易混', prompt: '空洞的大话是：', options: ['bombast', 'bombardment', 'bobber'], answer: 'bombast', explain: 'bombast 不是炮击。' },
    ],
    usage: { domains: ['军事', '新闻'], tone: '严重或比喻性强烈', commonConfusion: ['bomb'] },
  });

  D('bombast', {
    etymology: {
      origin: '古法语 bombace「棉絮」，曾指把衣服垫得鼓起来的软填料。语言上的 bombast 就是垫得很鼓、其实空的大话。',
      prefix: null,
      root: { text: 'bombace', gloss: '棉垫' },
      suffix: null,
      history: [
        { label: 'bombace', text: '用来垫衣服的棉' },
        { label: 'bombast', text: '夸夸其谈、华而不实的话' },
      ],
      formationLogic: '外表鼓，里面空。',
      mnemonic: '空话是 bombast，不是 bomb。形容词 bombastic。',
      note: '不可数名词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The speech was pure bombast and offered no plan.', chinese: '这篇讲话纯粹是高调空话，没有提出任何计划。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'bombast.s1', en: 'Strip away the bombast and the promise is only to spend more.', zh: '去掉夸夸其谈，承诺就只剩下多花钱。', structure: 'Strip away the bombast / and the promise is', grammar: '不可数。形容词用 bombastic language。', rationale: '修辞批评用词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The bombast exploded at dawn.', right: 'The bomb exploded at dawn. His speech was full of bombast.', reason: '炸弹是 bomb；空话是 bombast。', rule: 'full of bombast；bombastic claims。', special: '不要把 -ast 看成过去式。' },
    ],
    quiz: [
      { id: 'bombast.q1', senseId: 'bombast.s1', errorType: 'meaning', type: '词义', prompt: 'bombast 是：', options: ['夸夸其谈', '炸弹', '锅炉'], answer: '夸夸其谈', explain: '空洞的大话。' },
      { id: 'bombast.q2', senseId: 'bombast.s1', errorType: 'grammar', type: '词性', prompt: '形容词是：', options: ['bombastic', 'bombastly', 'bombasted as the only adjective'], answer: 'bombastic', explain: 'bombastic rhetoric。' },
      { id: 'bombast.q3', senseId: 'bombast.s1', errorType: 'confusable', type: '易混', prompt: '会爆炸的武器是：', options: ['bomb', 'bombast', 'bolster'], answer: 'bomb', explain: '少了 -ast。' },
      { id: 'bombast.q4', senseId: 'bombast.s1', errorType: 'meaning', type: '词源', prompt: '它原先和什么有关？', options: ['垫衣服的棉絮', '航海的罗盘', '煮开的水'], answer: '垫衣服的棉絮', explain: '外鼓内空。' },
    ],
    usage: { domains: ['评论'], tone: '贬义', commonConfusion: ['bomb'] },
  });

  D('bombshell', {
    etymology: {
      origin: '英语复合词：bomb + shell，本是炸弹的弹壳，比喻突然炸开的消息。也可指惊为天人的人，略旧、略不正式。',
      prefix: null,
      root: { text: 'bomb', gloss: '炸弹' },
      suffix: null,
      history: [
        { label: 'shell', text: '弹壳' },
        { label: 'bombshell', text: '爆炸性消息；令人震惊的人或事' },
      ],
      formationLogic: '像炮弹落地一样突然。',
      mnemonic: 'drop a bombshell 抛出爆炸性消息。come as a bombshell。',
      note: '可数。新闻标题极常见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her resignation came as a bombshell.', chinese: '她的辞职犹如一颗炸弹。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bombshell.s1', en: 'The audit dropped a bombshell: the accounts were false.', zh: '审计抛出爆炸性消息：账目是假的。', structure: 'dropped a bombshell', grammar: 'drop a bombshell。come as a bombshell。', rationale: '比喻消息，不是真的弹壳，除非军事语境写明。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He dropped a bombshell to the meeting.', right: 'He dropped a bombshell at the meeting.', reason: '地点用 at the meeting。消息本身用 drop a bombshell，不说 drop a bombshell to somebody 作为最稳搭配，更常说 drop a bombshell by announcing...', rule: 'drop a bombshell；a bombshell announcement。', special: '与 bombast 不同，bombshell 是惊人的事实，不是空洞文风。' },
    ],
    quiz: [
      { id: 'bombshell.q1', senseId: 'bombshell.s1', errorType: 'meaning', type: '词义', prompt: 'a political bombshell 是：', options: ['政治上的爆炸性消息', '政治棉絮', '政治锅炉'], answer: '政治上的爆炸性消息', explain: '突然的震惊。' },
      { id: 'bombshell.q2', senseId: 'bombshell.s1', errorType: 'collocation', type: '搭配', prompt: '抛出惊人消息：_____ a bombshell.', options: ['drop', 'boil', 'blot'], answer: 'drop', explain: 'drop a bombshell。' },
      { id: 'bombshell.q3', senseId: 'bombshell.s1', errorType: 'confusable', type: '易混', prompt: '空洞夸张的措辞是：', options: ['bombast', 'bombshell', 'bobbin'], answer: 'bombast', explain: '文风问题用 bombast。' },
      { id: 'bombshell.q4', senseId: 'bombshell.s1', errorType: 'meaning', type: '构词', prompt: 'bombshell 由 bomb 和什么合成？', options: ['shell', 'shall', 'sell'], answer: 'shell', explain: '弹壳。' },
    ],
    usage: { domains: ['新闻'], tone: '强烈', commonConfusion: ['bombast', 'bomb'] },
  });

  D('bond', {
    etymology: {
      origin: '中古英语，与 bind「捆绑」同源，古诺尔斯语 band 一类。把人或义务捆在一起，所以是纽带，也是债券。',
      prefix: null,
      root: { text: 'band', gloss: '捆绑、束缚' },
      suffix: null,
      history: [
        { label: 'bind', text: '绑住' },
        { label: 'bond', text: '纽带；结合；金融债券' },
      ],
      formationLogic: '一种把双方拴住的关系或票据。',
      mnemonic: 'a bond of friendship。government bonds 国债。in bond 可以指货物在关栈中未完税。',
      note: '动词 bond with somebody 建立亲密关系。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The two sisters share a strong bond.', chinese: '两姐妹感情很深。' },
    ],
    contexts: [
      { domain: '金融', senseId: 'bond.s1', en: 'The city issued bonds to pay for the new bridge.', zh: '市政府发行债券为新桥筹资。', structure: 'issued bonds / to pay for the bridge', grammar: '可数。issue bonds。利率语境里 bond yields。', rationale: '金融义和学生熟悉的「纽带」不同。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please bond the plane at gate four.', right: 'Please board the plane at gate four. Investors bought the bonds.', reason: '登机是 board；债券或纽带是 bond。', rule: 'a bond between A and B；government bonds；bond with a friend。', special: 'bonds 复数在金融里几乎总是债券。' },
    ],
    quiz: [
      { id: 'bond.q1', senseId: 'bond.s1', errorType: 'meaning', type: '词义', prompt: 'a bond between friends 是：', options: ['朋友之间的纽带', '朋友之间的木板', '朋友之间的浮标'], answer: '朋友之间的纽带', explain: '联系。' },
      { id: 'bond.q2', senseId: 'bond.s1', errorType: 'meaning', type: '词义', prompt: 'government bonds 是：', options: ['政府债券', '政府毯子', '政府炸弹'], answer: '政府债券', explain: '金融凭证。' },
      { id: 'bond.q3', senseId: 'bond.s1', errorType: 'confusable', type: '易混', prompt: '登机是：', options: ['board', 'bond', 'bold'], answer: 'board', explain: 'd 和 n 不同。' },
      { id: 'bond.q4', senseId: 'bond.s1', errorType: 'collocation', type: '搭配', prompt: '与某人建立感情：bond _____ a teammate.', options: ['with', 'at', 'on'], answer: 'with', explain: 'bond with。' },
    ],
    usage: { domains: ['情感', '金融'], tone: '中性', commonConfusion: ['board'] },
  });

  D('bondsman', {
    etymology: {
      origin: 'bond 加 man。历史上 bond 指受束缚的身份，bondsman 可以是农奴或奴隶；法律上则是出具保释保证的人。',
      prefix: null,
      root: { text: 'bond', gloss: '束缚、保证' },
      suffix: { text: '-sman', gloss: '从事或处于该关系的人' },
      history: [
        { label: 'bondman', text: '依附的仆人、奴隶' },
        { label: 'bondsman', text: '保证人；亦见于历史文本指被奴役者' },
      ],
      formationLogic: '被 bond 约束的人，或用一笔 bond 作担保的人。两个意思都要看世纪和上下文。',
      mnemonic: '现代法律英语：a bondsman posts bail。历史课本：a bondsman 可能是失去自由的人。',
      note: '复数 bondsmen。现多说 bail bondsman 指保释保证人。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A bondsman agreed to guarantee his appearance in court.', chinese: '一名保证人同意担保他会出庭。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'bondsman.s1', en: 'In the old records a bondsman could not leave the estate freely.', zh: '在旧档案里，一名被束缚的奴仆不能自由离开庄园。', structure: 'a bondsman could not leave / the estate freely', grammar: '可数，复数 bondsmen。', rationale: '历史义与保释义必须靠语境，不能只背一个。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Every bondsman in today\'s news is a slave.', right: 'A bail bondsman promises money if the accused does not return to court. In older texts a bondsman may be a serf.', reason: '现代新闻里的 bondsman 多是保释保证人，不是奴隶。', rule: '看修饰语 bail，或看文本年代。', special: 'bonds 本身在金融里是债券，bondsman 不是「债券男」。' },
    ],
    quiz: [
      { id: 'bondsman.q1', senseId: 'bondsman.s1', errorType: 'meaning', type: '词义', prompt: 'a bail bondsman 是：', options: ['保释保证人', '锅炉维修工', '记账员'], answer: '保释保证人', explain: '法律用语。' },
      { id: 'bondsman.q2', senseId: 'bondsman.s1', errorType: 'meaning', type: '词义', prompt: '中世纪文本里的 bondsman 可能是：', options: ['失去自由的奴仆', '现代股票经纪人', '金发的人'], answer: '失去自由的奴仆', explain: 'bond 的束缚义。' },
      { id: 'bondsman.q3', senseId: 'bondsman.s1', errorType: 'grammar', type: '复数', prompt: '复数是：', options: ['bondsmen', 'bondsmans', 'bondmen only in modern bail English'], answer: 'bondsmen', explain: 'man 变 men。' },
      { id: 'bondsman.q4', senseId: 'bondsman.s1', errorType: 'confusable', type: '易混', prompt: '政府发行的债券是：', options: ['bonds', 'bondsman', 'bombast'], answer: 'bonds', explain: '票据不是人。' },
    ],
    usage: { domains: ['法律', '历史'], tone: '正式', commonConfusion: ['bond'] },
  });

  D('bone', {
    etymology: {
      origin: '古英语 bān。人和动物骨架里坚硬的部分。动词 bone 是剔骨。',
      prefix: null,
      root: { text: 'bān', gloss: '骨' },
      suffix: null,
      history: [
        { label: 'bān', text: '骨头' },
        { label: 'bone', text: '骨；剔骨' },
      ],
      formationLogic: '身体里的硬杆。习语很多，不要逐字死译。',
      mnemonic: 'a bone of contention 争论的焦点。make no bones about 毫不隐瞒。feel it in your bones 直觉感到。',
      note: '可数。skin and bone 瘦得皮包骨。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The dog buried a bone under the hedge.', chinese: '狗把一根骨头埋在树篱下。' },
    ],
    contexts: [
      { domain: '烹饪', senseId: 'bone.s1', en: 'Ask the butcher to bone the fish if you dislike the spine.', zh: '如果你不喜欢鱼刺，可以请肉贩把鱼骨剔掉。', structure: 'Ask the butcher to bone the fish', grammar: '动词 bone something 是去骨。', rationale: '动词义容易被忽略。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Money was the bone of the argument.', right: 'Money was the bone of contention.', reason: '争论焦点是 a bone of contention，不是 a bone of the argument。', rule: 'a bone of contention；make no bones about it。', special: 'bone idle 是懒到极点，英式。' },
    ],
    quiz: [
      { id: 'bone.q1', senseId: 'bone.s1', errorType: 'meaning', type: '词义', prompt: 'break a bone 是：', options: ['骨折', '打破沉默', '折断门闩'], answer: '骨折', explain: '骨头断了。' },
      { id: 'bone.q2', senseId: 'bone.s1', errorType: 'meaning', type: '词义', prompt: 'bone a chicken 是：', options: ['给鸡剔骨', '给鸡煮汤', '给鸡起名'], answer: '给鸡剔骨', explain: '动词。' },
      { id: 'bone.q3', senseId: 'bone.s1', errorType: 'collocation', type: '习语', prompt: '争论的焦点：a bone of _____.', options: ['contention', 'content', 'contain'], answer: 'contention', explain: '固定搭配。' },
      { id: 'bone.q4', senseId: 'bone.s1', errorType: 'confusable', type: '易混', prompt: '树干是：', options: ['bole', 'bone', 'bond'], answer: 'bole', explain: '植物不是骨骼。' },
    ],
    usage: { domains: ['医学', '烹饪', '习语'], tone: '中性', commonConfusion: ['bones'] },
  });

  D('bones', {
    etymology: {
      origin: 'bone 的复数。指多块骨头或整副骨骼，也可在习语里表示身体。',
      prefix: null,
      root: { text: 'bone', gloss: '骨头' },
      suffix: { text: '-s', gloss: '复数' },
      history: [
        { label: 'bone', text: '一根骨' },
        { label: 'bones', text: '骨骼；尸骨' },
      ],
      formationLogic: '一根是 bone，一套是 bones。',
      mnemonic: 'skin and bones 极瘦。chilled to the bones 冷到骨头里。the bare bones 是事情的骨架、最简要的部分。',
      note: 'all skin and bone 用单数 bone 也可以，skin and bones 更常见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Archaeologists found animal bones beside the hearth.', chinese: '考古学家在灶边发现了兽骨。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'bones.s1', en: 'Give me the bare bones of the plan before the details.', zh: '细节之前，先告诉我这个计划的要点骨架。', structure: 'the bare bones of the plan', grammar: 'the bare bones of something。', rationale: '复数习语，不是只要医学。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She is all skin and bones of contention.', right: 'She is all skin and bones. The schedule is a bone of contention.', reason: '皮包骨是 skin and bones。争论焦点是另一条习语，不能接在一起。', rule: 'bare bones；skin and bones；a bag of bones。', special: 'make no bones about it 用 bones 复数。' },
    ],
    quiz: [
      { id: 'bones.q1', senseId: 'bones.s1', errorType: 'meaning', type: '词义', prompt: 'animal bones 是：', options: ['兽骨', '动物债券', '动物浮标'], answer: '兽骨', explain: '复数。' },
      { id: 'bones.q2', senseId: 'bones.s1', errorType: 'collocation', type: '习语', prompt: '最简要的内容：the bare _____.', options: ['bones', 'bone of one single always', 'bolts'], answer: 'bones', explain: 'the bare bones。' },
      { id: 'bones.q3', senseId: 'bones.s1', errorType: 'collocation', type: '习语', prompt: '瘦得皮包骨：skin and _____.', options: ['bones', 'bonds', 'boats'], answer: 'bones', explain: 'skin and bones。' },
      { id: 'bones.q4', senseId: 'bones.s1', errorType: 'confusable', type: '易混', prompt: '一根肋骨仍用单数词：', options: ['a bone', 'a bones', 'a bondsman'], answer: 'a bone', explain: '单数不用 bones。' },
    ],
    usage: { domains: ['医学', '习语'], tone: '中性', commonConfusion: ['bone'] },
  });

  D('bonnet', {
    etymology: {
      origin: '中古法语 bonet「帽子」。英语里是系在下巴下的软帽。英式英语里 car bonnet 是引擎盖，美式说 hood。',
      prefix: null,
      root: { text: 'bonet', gloss: '帽' },
      suffix: null,
      history: [
        { label: 'bonet', text: '帽子' },
        { label: 'bonnet', text: '软帽；英式汽车引擎盖' },
      ],
      formationLogic: '盖在头上的软东西。盖在发动机上时，英国人沿用了这个「盖」的形象。',
      mnemonic: 'a baby\'s bonnet。Under the bonnet 在英式英语是引擎盖下面，看机器内部。',
      note: '美式汽车用 hood，不用 bonnet。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The baby\'s bonnet kept the sun off her face.', chinese: '婴儿的软帽挡住了照到脸上的太阳。' },
    ],
    contexts: [
      { domain: '汽车', senseId: 'bonnet.s1', en: 'In British English you check the oil under the bonnet.', zh: '在英式英语里，查看机油要打开引擎盖。', structure: 'under the bonnet', grammar: 'the bonnet of a car，英式。', rationale: '和帽子义差很远，是考试陷阱。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'An American mechanic always says bonnet for the engine cover.', right: 'An American mechanic usually says hood. A British driver says bonnet.', reason: '引擎盖的 bonnet 是英式用词。', rule: 'a baby\'s bonnet；the car bonnet 英式 = the hood 美式。', special: 'have a bee in one\'s bonnet 是脑子里老想着一件事。' },
    ],
    quiz: [
      { id: 'bonnet.q1', senseId: 'bonnet.s1', errorType: 'meaning', type: '词义', prompt: 'a baby\'s bonnet 是：', options: ['婴儿软帽', '婴儿骨头', '婴儿债券'], answer: '婴儿软帽', explain: '系带软帽。' },
      { id: 'bonnet.q2', senseId: 'bonnet.s1', errorType: 'meaning', type: '词义', prompt: '英式英语 the car bonnet 是：', options: ['引擎盖', '方向盘', '后备箱里的帽子'], answer: '引擎盖', explain: '美式对应 hood。' },
      { id: 'bonnet.q3', senseId: 'bonnet.s1', errorType: 'collocation', type: '习语', prompt: '老惦记着一件事：a bee in one\'s _____.', options: ['bonnet', 'boiler', 'bobbin'], answer: 'bonnet', explain: 'have a bee in one\'s bonnet。' },
      { id: 'bonnet.q4', senseId: 'bonnet.s1', errorType: 'confusable', type: '易混', prompt: '额外的钱是：', options: ['bonus', 'bonnet', 'bones'], answer: 'bonus', explain: '奖金不是帽子。' },
    ],
    usage: { domains: ['服装', '汽车'], tone: '中性', commonConfusion: ['hood'] },
  });

  D('bonus', {
    etymology: {
      origin: '拉丁语 bonus「好的」。英语名词指好上加好的一笔钱或一个额外好处。',
      prefix: null,
      root: { text: 'bonus', gloss: '好' },
      suffix: null,
      history: [
        { label: '拉丁语 bonus', text: '好' },
        { label: '英语', text: '奖金；附加的好处' },
      ],
      formationLogic: '本该有的之外，再给一份「好」。',
      mnemonic: 'a year-end bonus 年终奖。an added bonus 额外的好处。',
      note: '可数，复数 bonuses。发音 /ˈbəʊnəs/。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Staff received a bonus after a strong December.', chinese: '十二月业绩很好，员工拿到了奖金。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'bonus.s1', en: 'The real bonus of the job is being able to walk to the office.', zh: '这份工作真正的额外好处是可以走路上班。', structure: 'The real bonus of the job / is being able to walk', grammar: 'a bonus of something 可以是钱，也可以是好处。', rationale: '不总是现金。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She tied the baby\'s bonus under its chin.', right: 'She tied the baby\'s bonnet under its chin. She earned a bonus.', reason: '帽子是 bonnet；奖金是 bonus。', rule: 'pay / earn / get a bonus。复数 bonuses。', special: 'bonus point 附加分。' },
    ],
    quiz: [
      { id: 'bonus.q1', senseId: 'bonus.s1', errorType: 'meaning', type: '词义', prompt: 'a Christmas bonus 是：', options: ['圣诞奖金', '圣诞软帽', '圣诞炸弹'], answer: '圣诞奖金', explain: '额外的钱。' },
      { id: 'bonus.q2', senseId: 'bonus.s1', errorType: 'grammar', type: '复数', prompt: '复数是：', options: ['bonuses', 'bonus', 'boni as required modern English'], answer: 'bonuses', explain: '英语复数加 -es。' },
      { id: 'bonus.q3', senseId: 'bonus.s1', errorType: 'meaning', type: '词源', prompt: '拉丁语 bonus 是：', options: ['好的', '骨头', '船'], answer: '好的', explain: '所以是额外的好处。' },
      { id: 'bonus.q4', senseId: 'bonus.s1', errorType: 'confusable', type: '易混', prompt: '系在下巴下的婴儿帽是：', options: ['bonnet', 'bonus', 'bones'], answer: 'bonnet', explain: '帽和奖只差词尾。' },
    ],
    usage: { domains: ['工作', '日常'], tone: '褒义', commonConfusion: ['bonnet'] },
  });

  D('book', {
    etymology: {
      origin: '古英语 bōc，与山毛榉 beech 有关，据说早期在山毛榉木片上写字。名词是书，动词是预订。',
      prefix: null,
      root: { text: 'bōc', gloss: '书、书写木片' },
      suffix: null,
      history: [
        { label: 'bōc', text: '书写的木片、书籍' },
        { label: 'book', text: '书；把名字记入册子即预订' },
      ],
      formationLogic: '写在本子里。订票就是在登记簿里写上你的名字。',
      mnemonic: 'book a table 订桌。by the book 照章办事。a closed book 比喻完全不懂的事物。',
      note: '动词 book somebody for speeding 是警察开罚单、记录在案。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I booked a seat by the window.', chinese: '我订了一个靠窗的座位。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'book.s1', en: 'The hotel is fully booked in October.', zh: '这家旅馆十月已经订满了。', structure: 'is fully booked', grammar: 'be booked。book something for somebody。', rationale: '动词义往往比「书」更常考搭配。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I booked a ticket of Friday.', right: 'I booked a ticket for Friday.', reason: '为某一天预订用 for，不用 of。', rule: 'book a room / flight / table；fully booked。', special: 'book in 英式可以是办理入住。' },
    ],
    quiz: [
      { id: 'book.q1', senseId: 'book.s1', errorType: 'meaning', type: '词义', prompt: 'a library book 是：', options: ['图书馆的书', '图书馆的预订费', '图书馆的引擎盖'], answer: '图书馆的书', explain: '名词本义。' },
      { id: 'book.q2', senseId: 'book.s1', errorType: 'meaning', type: '词义', prompt: 'book a table 是：', options: ['订桌', '把桌子写成书', '闩上桌子'], answer: '订桌', explain: '动词预订。' },
      { id: 'book.q3', senseId: 'book.s1', errorType: 'collocation', type: '搭配', prompt: '订满了：fully _____.', options: ['booked', 'booking', 'bookish'], answer: 'booked', explain: 'fully booked。' },
      { id: 'book.q4', senseId: 'book.s1', errorType: 'collocation', type: '习语', prompt: '严格按规矩：by the _____.', options: ['book', 'bolt', 'bog'], answer: 'book', explain: 'by the book。' },
    ],
    usage: { domains: ['学习', '旅行'], tone: '中性', commonConfusion: ['booking'] },
  });

  D('booking', {
    etymology: {
      origin: '英语派生：book「登记」加 -ing，表示预订这个行为或订到的那一单。',
      prefix: null,
      root: { text: 'book', gloss: '登记、预订' },
      suffix: { text: '-ing', gloss: '名词化' },
      history: [
        { label: 'book', text: '写入名册' },
        { label: 'booking', text: '预订、订座' },
      ],
      formationLogic: 'book 这个动作的结果。',
      mnemonic: 'a hotel booking。make / cancel a booking。booking office 售票处。',
      note: '可数。confirm a booking。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We lost the booking because we arrived an hour late.', chinese: '我们晚到一小时，预订被取消了。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'booking.s1', en: 'Please bring the booking number to the check-in desk.', zh: '请把预订号带到值机柜台。', structure: 'bring the booking number / to the desk', grammar: 'a booking for a room / a table / a seat。', rationale: '名词，不是「书本的」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She is too booking to go to the party.', right: 'She is too bookish to enjoy a noisy party. She made a booking.', reason: '书呆子气是 bookish；预订是 booking。', rule: 'make / cancel / confirm a booking。', special: 'booking 不是 book 的比较级。' },
    ],
    quiz: [
      { id: 'booking.q1', senseId: 'booking.s1', errorType: 'meaning', type: '词义', prompt: 'cancel a booking 是：', options: ['取消预订', '取消一本书', '取消记账'], answer: '取消预订', explain: '订位、订房。' },
      { id: 'booking.q2', senseId: 'booking.s1', errorType: 'collocation', type: '搭配', prompt: '进行预订：_____ a booking.', options: ['make', 'blush', 'blunt'], answer: 'make', explain: 'make a booking。' },
      { id: 'booking.q3', senseId: 'booking.s1', errorType: 'confusable', type: '易混', prompt: '只爱书本、有点迂的是：', options: ['bookish', 'booking', 'booklet'], answer: 'bookish', explain: '形容词。' },
      { id: 'booking.q4', senseId: 'booking.s1', errorType: 'meaning', type: '词义', prompt: 'a booking office 常是：', options: ['售票处', '书房', '簿记办公室'], answer: '售票处', explain: '订票的窗口。' },
    ],
    usage: { domains: ['旅行', '餐饮'], tone: '中性', commonConfusion: ['book', 'bookish'] },
  });

  D('bookish', {
    etymology: {
      origin: '英语派生：book 加 -ish，表示带有书的气质。可以是好学，也可以是只懂书、脱离实际。',
      prefix: null,
      root: { text: 'book', gloss: '书' },
      suffix: { text: '-ish', gloss: '有……特征的' },
      history: [
        { label: 'book', text: '书' },
        { label: 'bookish', text: '书卷气的；迂腐的' },
      ],
      formationLogic: '-ish 常常带一点「有那么点、甚至过分」。',
      mnemonic: 'a bookish child 爱读书的孩子。a bookish style 书面语太重。',
      note: '形容词。副词 bookishly 少用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He was a bookish boy who preferred maps to football.', chinese: '他是个书卷气的男孩，比起足球更喜欢地图。' },
    ],
    contexts: [
      { domain: '评论', senseId: 'bookish.s1', en: 'The translation sounds bookish and would not be said in conversation.', zh: '这个译文书卷气太重，口语里不会这么说。', structure: 'sounds bookish / and would not be said', grammar: '表语或定语。', rationale: '可能是轻微批评。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We made a bookish at the restaurant for eight.', right: 'We made a booking at the restaurant for eight. His manner is bookish.', reason: '订座是 booking；形容人爱书或迂是 bookish。', rule: 'bookish style / person。', special: 'bookish 不是「书的所有格」。' },
    ],
    quiz: [
      { id: 'bookish.q1', senseId: 'bookish.s1', errorType: 'meaning', type: '词义', prompt: 'a bookish student 多半是：', options: ['好学、带书卷气的学生', '负责预订的学生', '卖小册子的学生'], answer: '好学、带书卷气的学生', explain: '和书本打交道很多。' },
      { id: 'bookish.q2', senseId: 'bookish.s1', errorType: 'meaning', type: '词义', prompt: 'a bookish phrase 常含：', options: ['太书面、有点迂', '非常口语', '有语法错误'], answer: '太书面、有点迂', explain: '-ish 可含轻微贬义。' },
      { id: 'bookish.q3', senseId: 'bookish.s1', errorType: 'confusable', type: '易混', prompt: '餐厅订位名词是：', options: ['booking', 'bookish', 'booklet'], answer: 'booking', explain: '预订。' },
      { id: 'bookish.q4', senseId: 'bookish.s1', errorType: 'grammar', type: '词性', prompt: 'bookish 是：', options: ['形容词', '可数名词', '介词'], answer: '形容词', explain: '修饰人或风格。' },
    ],
    usage: { domains: ['人物', '评论'], tone: '可褒可贬', commonConfusion: ['booking'] },
  });

  D('bookkeeper', {
    etymology: {
      origin: '英语复合词：book + keeper。账本的保管人，即负责登录账目的记账员。',
      prefix: null,
      root: { text: 'book', gloss: '账簿' },
      suffix: null,
      history: [
        { label: 'books', text: '商号的账册' },
        { label: 'bookkeeper', text: '记账员、簿记员' },
      ],
      formationLogic: 'keep the books 就是记账，做这件事的人是 bookkeeper。',
      mnemonic: '双写 k 不太明显：book + keeper，两个 k 相邻，所以是 bookkeeper。',
      note: '也可写成 book-keeper。复数 bookkeepers。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bookkeeper found a gap in the March accounts.', chinese: '记账员发现三月的账有一处缺口。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bookkeeper.s1', en: 'A part-time bookkeeper comes in on Thursdays to record invoices.', zh: '兼职记账员每周四来登记发票。', structure: 'comes in on Thursdays / to record invoices', grammar: '可数名词，职业。', rationale: '人，不是记账这件事。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She studied bookkeeper at college.', right: 'She studied bookkeeping at college. She works as a bookkeeper.', reason: '学科或工作是 bookkeeping；从业者是 bookkeeper。', rule: 'a bookkeeper keeps the books。', special: '不要漏掉中间的 k 写成 bookeeper。' },
    ],
    quiz: [
      { id: 'bookkeeper.q1', senseId: 'bookkeeper.s1', errorType: 'meaning', type: '词义', prompt: 'a bookkeeper 是：', options: ['记账员', '图书管理员', '售票员'], answer: '记账员', explain: '管账册的人。' },
      { id: 'bookkeeper.q2', senseId: 'bookkeeper.s1', errorType: 'confusable', type: '易混', prompt: '记账这门工作叫：', options: ['bookkeeping', 'bookkeeper', 'bookish'], answer: 'bookkeeping', explain: '事情用 -ing。' },
      { id: 'bookkeeper.q3', senseId: 'bookkeeper.s1', errorType: 'meaning', type: '构词', prompt: 'book 在这个职业里多指：', options: ['账簿', '小说', '预订号'], answer: '账簿', explain: 'keep the books。' },
      { id: 'bookkeeper.q4', senseId: 'bookkeeper.s1', errorType: 'grammar', type: '拼写', prompt: '正确拼写是：', options: ['bookkeeper', 'bookeeper', 'book-keper'], answer: 'bookkeeper', explain: 'book 与 keeper 各有一个 k。' },
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['bookkeeping', 'librarian'] },
  });

  D('bookkeeping', {
    etymology: {
      origin: '英语复合：bookkeeping，即 keep the books 的名词形式，指记录企业收支的簿记工作。',
      prefix: null,
      root: { text: 'book', gloss: '账册' },
      suffix: { text: '-ing', gloss: '活动' },
      history: [
        { label: 'keep the books', text: '把交易记入账册' },
        { label: 'bookkeeping', text: '簿记、记账' },
      ],
      formationLogic: '事情，不是人。',
      mnemonic: 'double-entry bookkeeping 复式记账。人是 bookkeeper。',
      note: '不可数。拼写里 book 和 keeping 连在一起，保留两个 k。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Accurate bookkeeping saved the shop at tax time.', chinese: '账记得准确，这家店在报税时省了麻烦。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'bookkeeping.s1', en: 'She does the bookkeeping on Sunday nights.', zh: '她在周日晚上做账。', structure: 'does the bookkeeping', grammar: '不可数。do the bookkeeping。', rationale: '工作名称。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'We hired two bookkeepings.', right: 'We hired two bookkeepers. The bookkeeping is done weekly.', reason: 'bookkeeping 是工作，不可数。要说人数用 bookkeepers。', rule: 'do the bookkeeping；a bookkeeper。', special: 'creative bookkeeping 常是委婉说法，暗示账目不老实。' },
    ],
    quiz: [
      { id: 'bookkeeping.q1', senseId: 'bookkeeping.s1', errorType: 'meaning', type: '词义', prompt: 'bookkeeping 是：', options: ['记账工作', '一位记账员', '一本书的书签'], answer: '记账工作', explain: '活动名词。' },
      { id: 'bookkeeping.q2', senseId: 'bookkeeping.s1', errorType: 'grammar', type: '可数', prompt: '正确的是：', options: ['do the bookkeeping', 'do three bookkeepings', 'do a bookkeeping person'], answer: 'do the bookkeeping', explain: '不可数。' },
      { id: 'bookkeeping.q3', senseId: 'bookkeeping.s1', errorType: 'confusable', type: '易混', prompt: '做这份工作的人是：', options: ['bookkeeper', 'bookkeeping', 'booklet'], answer: 'bookkeeper', explain: '人用 -er。' },
      { id: 'bookkeeping.q4', senseId: 'bookkeeping.s1', errorType: 'collocation', type: '搭配', prompt: '复式记账：_____ bookkeeping.', options: ['double-entry', 'double-blunt', 'double-boil'], answer: 'double-entry', explain: 'double-entry bookkeeping。' },
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['bookkeeper'] },
  });

  D('booklet', {
    etymology: {
      origin: '英语派生：book 加指小后缀 -let，一本很小、页数很少的书，多用来发信息。',
      prefix: null,
      root: { text: 'book', gloss: '书' },
      suffix: { text: '-let', gloss: '小' },
      history: [
        { label: 'book', text: '书' },
        { label: 'booklet', text: '小册子' },
      ],
      formationLogic: '小一号的 book。比较 piglet、leaflet。',
      mnemonic: 'an information booklet 说明小册子。leaflet 更像单张或折页，booklet 通常有订在一起的几页。',
      note: '可数。a booklet of instructions。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The museum hands every visitor a free booklet.', chinese: '博物馆给每位参观者一本免费小册子。' },
    ],
    contexts: [
      { domain: '说明', senseId: 'booklet.s1', en: 'The safety booklet is only twelve pages long.', zh: '这本安全小册子只有十二页。', structure: 'The safety booklet / is only twelve pages long', grammar: '可数，a booklet。', rationale: '薄的信息册，不是账本。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The booklet recorded every invoice in the ledger.', right: 'The bookkeeper recorded every invoice. Visitors received a booklet.', reason: '记账的人是 bookkeeper；薄薄的宣传或说明册是 booklet。', rule: 'a booklet about / on something。', special: 'leaflet 通常更薄，booklet 装订成小本。' },
    ],
    quiz: [
      { id: 'booklet.q1', senseId: 'booklet.s1', errorType: 'meaning', type: '词义', prompt: 'a tourist booklet 是：', options: ['旅游小册子', '旅游会计', '旅游债券'], answer: '旅游小册子', explain: '页数很少的书。' },
      { id: 'booklet.q2', senseId: 'booklet.s1', errorType: 'grammar', type: '构词', prompt: '-let 表示：', options: ['小', '相反', '过去'], answer: '小', explain: '如 booklet、piglet。' },
      { id: 'booklet.q3', senseId: 'booklet.s1', errorType: 'confusable', type: '易混', prompt: '管账的人是：', options: ['bookkeeper', 'booklet', 'bookish'], answer: 'bookkeeper', explain: '职业与印刷品不同。' },
      { id: 'booklet.q4', senseId: 'booklet.s1', errorType: 'collocation', type: '搭配', prompt: '哪一句自然？', options: ['a booklet of instructions', 'a booklet of boiling', 'a booklet of bolt'], answer: 'a booklet of instructions', explain: '说明小册子。' },
    ],
    usage: { domains: ['出版', '说明'], tone: '中性', commonConfusion: ['leaflet', 'bookkeeper'] },
  });

  D('boom', {
    etymology: {
      origin: '拟声词，模仿低沉的轰响。经济上的「繁荣、激增」是19世纪美国英语的引申：生意突然响起来。',
      prefix: null,
      root: { text: 'boom', gloss: '轰鸣；突然兴旺' },
      suffix: null,
      history: [
        { label: '拟声', text: '先指炮声、雷声一类低沉巨响' },
        { label: '经济', text: 'a boom in housing 房价或成交突然走高' },
      ],
      formationLogic: '声音很大，转成「来势很猛」。名词为主，也可说 The industry is booming.',
      mnemonic: 'boom 既是「轰」一声，也是经济突然轰地热起来。',
      note: '不要和 broom（扫帚）或 bloom（开花）混。boom and bust 是繁荣与萧条成对出现。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The coastal towns enjoyed a tourism boom after the new rail line opened.', chinese: '新铁路线开通后，海边小镇迎来一波旅游热。' },
    ],
    contexts: [
      { domain: '经济', senseId: 'boom.s1', en: 'A construction boom pushed rents up within a year.', zh: '建筑业的一阵兴旺在一年内把租金推高了。', structure: 'a construction boom', grammar: '可数名词，常接 in + 领域。', rationale: '考试里 boom 多考经济激增，不只是爆炸声。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'There was a bloom in car sales.', right: 'There was a boom in car sales.', reason: 'bloom 是开花或容光焕发，销量激增用 boom。', rule: 'a boom in something。', special: 'baby boom 专指生育高峰那一代。' },
    ],
    quiz: [
      { id: 'boom.q1', senseId: 'boom.s1', errorType: 'meaning', type: '词义', prompt: 'a housing boom 最接近：', options: ['房产热、成交激增', '房屋被炸毁', '扫帚清扫'], answer: '房产热、成交激增', explain: '经济义是快速增长。' },
      { id: 'boom.q2', senseId: 'boom.s1', errorType: 'collocation', type: '搭配', prompt: 'The city saw a boom _____ tech jobs.', options: ['in', 'at', 'with of'], answer: 'in', explain: 'a boom in + 领域。' },
      { id: 'boom.q3', senseId: 'boom.s1', errorType: 'confusable', type: '易混', prompt: '繁荣与萧条常说：', options: ['boom and bust', 'boom and dust', 'bloom and bust'], answer: 'boom and bust', explain: 'bust 是景气崩掉。' },
      { id: 'boom.q4', senseId: 'boom.s1', errorType: 'meaning', type: '词义', prompt: 'We heard a boom 里的 boom 可以是：', options: ['一声低沉巨响', '一封请柬', '一把扫帚'], answer: '一声低沉巨响', explain: '本词先是拟声。' },
    ],
    usage: { domains: ['经济', '新闻'], tone: '中性偏积极', commonConfusion: ['bloom', 'broom', 'bomb'] },
  });

  D('boor', {
    etymology: {
      origin: '来自荷兰语 boer「农夫」，与德语 Bauer 同源。进城后被用来嘲讽举止粗鲁的人，不再单指职业。',
      prefix: null,
      root: { text: 'boor', gloss: '粗人' },
      suffix: null,
      history: [
        { label: '荷兰语 boer', text: '农夫' },
        { label: '英语引申', text: '不懂分寸、冒犯别人的人' },
      ],
      formationLogic: '职业称呼贬成性格评价。形容词是 boorish。',
      mnemonic: 'boer 是农夫；少掉一个 e 的 boor，在英语里常是「没教养」。',
      note: '不要写成 bore（使人厌烦）。boor 重点是粗鲁，不是无聊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He talked over every guest and proved himself a boor.', chinese: '他打断每位客人的话，活脱脱一个粗人。' },
    ],
    contexts: [
      { domain: '人物', senseId: 'boor.s1', en: 'Only a boor would mock the host at her own table.', zh: '只有粗人才会在女主人自己的饭桌上取笑她。', structure: 'a boor', grammar: '可数名词，指人。', rationale: '锁住「无礼」而不是「农民」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The lecture was a boor.', right: 'The lecture was a bore.', reason: '课令人厌烦用 bore；boor 只能指粗鲁的人。', rule: 'boor = rude person；bore = dull person or thing。', special: 'boorish manners 粗鲁的举止。' },
    ],
    quiz: [
      { id: 'boor.q1', senseId: 'boor.s1', errorType: 'meaning', type: '词义', prompt: 'boor 在本条指：', options: ['粗野无礼的人', '钻孔的工具', '令人想睡的课'], answer: '粗野无礼的人', explain: '评价人的举止。' },
      { id: 'boor.q2', senseId: 'boor.s1', errorType: 'confusable', type: '易混', prompt: '粗鲁的举止是：', options: ['boorish manners', 'boring manners only', 'boar manners'], answer: 'boorish manners', explain: 'boorish 是形容词。' },
      { id: 'boor.q3', senseId: 'boor.s1', errorType: 'meaning', type: '词源', prompt: 'boor 与哪一国语的「农夫」有关？', options: ['荷兰语 boer', '拉丁语 aqua', '希腊语 logos'], answer: '荷兰语 boer', explain: '后来词义从职业转到性格。' },
      { id: 'boor.q4', senseId: 'boor.s1', errorType: 'grammar', type: '词性', prompt: 'Only a boor would shout here. 中 boor 是：', options: ['可数名词', '情态动词', '介词'], answer: '可数名词', explain: '前面有 a。' },
    ],
    usage: { domains: ['阅读', '人物描写'], tone: '贬义', commonConfusion: ['bore', 'boar', 'boer'] },
  });

  D('boost', {
    etymology: {
      origin: '19世纪美国口语，最早表示往上托、往上推。古典词根不明，不编造。',
      prefix: null,
      root: { text: 'boost', gloss: '向上推；提高' },
      suffix: null,
      history: [
        { label: '口语', text: '把人托过墙、把东西抬高' },
        { label: '现在', text: 'boost sales / confidence / the signal 提高或增强' },
      ],
      formationLogic: '具体的「往上托」变成抽象的「促进、提振」。名词 a boost 是一次推动。',
      mnemonic: '想象从下面托一把：boost = 往上加一把力。',
      note: 'boost 比 increase 更口语，常带「帮一把」的意味。不要和 boast（自夸）混。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A short walk at noon can boost your concentration.', chinese: '中午走一小段路能提一提你的注意力。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'boost.s1', en: 'The discount was meant to boost weekend sales.', zh: '这次折扣是为了拉动周末销量。', structure: 'boost + 宾语', grammar: '及物动词，宾语是被提高的事物。', rationale: '商业和心理题材都很常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He boosted about his score.', right: 'He boasted about his score.', reason: '自夸是 boast about；boost 是把某物提高。', rule: 'boost something；boast about something。', special: 'give sb a boost 给人打气或托一把。' },
    ],
    quiz: [
      { id: 'boost.q1', senseId: 'boost.s1', errorType: 'meaning', type: '词义', prompt: 'boost morale 是：', options: ['提振士气', '自夸士气', '靴子士气'], answer: '提振士气', explain: 'boost 是提高。' },
      { id: 'boost.q2', senseId: 'boost.s1', errorType: 'confusable', type: '易混', prompt: '「吹嘘自己的成绩」用：', options: ['boast', 'boost', 'boot'], answer: 'boast', explain: 'boast about。' },
      { id: 'boost.q3', senseId: 'boost.s1', errorType: 'collocation', type: '搭配', prompt: 'The campaign gave the team a real _____.', options: ['boost', 'boast', 'boor'], answer: 'boost', explain: 'a boost 一次推动。' },
      { id: 'boost.q4', senseId: 'boost.s1', errorType: 'grammar', type: '句法', prompt: '哪句正确？', options: ['The ad boosted sales.', 'The ad boosted.', 'The ad boost sales yesterday.'], answer: 'The ad boosted sales.', explain: '及物，且过去式 boosted。' },
    ],
    usage: { domains: ['商业', '口语'], tone: '积极', commonConfusion: ['boast', 'boot'] },
  });

  D('boot', {
    etymology: {
      origin: '「靴子」来自中古法语 bote。汽车后备厢是英国英语，因为早年行李常放在车外的靴形箱里。踢出、解雇是后起的动词义。',
      prefix: null,
      root: { text: 'boot', gloss: '靴子；后备厢' },
      suffix: null,
      history: [
        { label: '法语 bote', text: '过脚踝的鞋' },
        { label: '引申', text: 'boot sb out 把人赶走；BrE the boot 后备厢' },
      ],
      formationLogic: '鞋的形状和「用脚踢」连在一起，才有 boot out。美式后备厢一般说 trunk。',
      mnemonic: 'boot 盖过脚踝；boot out 是用靴子把人踹出去。',
      note: 'to boot 是旧习语，意思是「除此之外」，与鞋子无关，阅读里偶尔见到。电脑 boot 是 bootstrap 的缩短，本条不展开。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She left her muddy boots in the hall.', chinese: '她把沾泥的靴子留在门厅。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'boot.s1', en: 'He put the spare tyre in the boot and drove on.', zh: '他把备胎放进后备厢，继续开。', structure: 'in the boot', grammar: '英式英语名词；美式多用 trunk。', rationale: '英美差异是常见考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'An American manual always calls the trunk a boot.', right: 'In British English the boot is the storage space; Americans usually say trunk.', reason: 'boot 作后备厢主要是英国英语。', rule: '看语体再选 boot 或 trunk。', special: 'get the boot 口语里是被解雇。' },
    ],
    quiz: [
      { id: 'boot.q1', senseId: 'boot.s1', errorType: 'meaning', type: '词义', prompt: '英国英语里 the boot of a car 是：', options: ['后备厢', '方向盘', '挡风玻璃'], answer: '后备厢', explain: '美式常说 trunk。' },
      { id: 'boot.q2', senseId: 'boot.s1', errorType: 'collocation', type: '搭配', prompt: '他们把他赶出了俱乐部：', options: ['They booted him out of the club.', 'They booted him in the club as guest of honour.', 'They boothed him out.'], answer: 'They booted him out of the club.', explain: 'boot sb out of。' },
      { id: 'boot.q3', senseId: 'boot.s1', errorType: 'confusable', type: '易混', prompt: '过脚踝的鞋是：', options: ['boot', 'boat', 'bout'], answer: 'boot', explain: 'boat 是船。' },
      { id: 'boot.q4', senseId: 'boot.s1', errorType: 'meaning', type: '习语', prompt: 'get the boot 在口语里常指：', options: ['被解雇', '买到新靴', '发动引擎'], answer: '被解雇', explain: '与 kick out 同路。' },
    ],
    usage: { domains: ['日常', '汽车'], tone: '中性', commonConfusion: ['trunk', 'boat', 'booth'] },
  });

  D('booth', {
    etymology: {
      origin: '中古英语，来自北欧语，与古诺尔斯语 búð「棚屋、临时住处」一类词有关。',
      prefix: null,
      root: { text: 'booth', gloss: '小隔间；摊位' },
      suffix: null,
      history: [
        { label: '北欧语棚屋', text: '临时搭的小住处' },
        { label: '现在', text: '投票亭、电话亭、展会摊位、餐厅隔座' },
      ],
      formationLogic: '核心始终是「四面相对围起来的一小块地方」。',
      mnemonic: 'booth 比 room 小，通常只够一个人或一个摊。',
      note: '投票说 polling booth。不要和 booth 的发音近邻 boot 混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Each voter entered a booth and marked the paper alone.', chinese: '每位选民走进投票亭，独自在选票上做记号。' },
    ],
    contexts: [
      { domain: '公共生活', senseId: 'booth.s1', en: 'We booked a booth by the window so we could talk quietly.', zh: '我们订了靠窗的隔座，好安静说话。', structure: 'a booth', grammar: '可数名词。', rationale: '摊位和隔间是同一空间形象。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She tried on coats in the boot.', right: 'She tried on coats in the booth.', reason: '试衣的小间是 booth；boot 是靴子或后备厢。', rule: 'booth = small enclosed stall。', special: 'ticket booth 售票窗口。' },
    ],
    quiz: [
      { id: 'booth.q1', senseId: 'booth.s1', errorType: 'meaning', type: '词义', prompt: 'polling booth 是：', options: ['投票亭', '投票靴', '选票本身'], answer: '投票亭', explain: '围起来的小空间。' },
      { id: 'booth.q2', senseId: 'booth.s1', errorType: 'confusable', type: '易混', prompt: '展会上的摊位更可能是：', options: ['a booth', 'a boot', 'a boon'], answer: 'a booth', explain: 'boon 是好处。' },
      { id: 'booth.q3', senseId: 'booth.s1', errorType: 'collocation', type: '搭配', prompt: '餐厅里的火车座式隔间常叫：', options: ['a booth', 'a boulder', 'a bouquet'], answer: 'a booth', explain: '美式餐厅常见 booth。' },
      { id: 'booth.q4', senseId: 'booth.s1', errorType: 'grammar', type: '词形', prompt: '两个摊位：', options: ['two booths', 'two boothes', 'two booth'], answer: 'two booths', explain: '复数直接加 s。' },
    ],
    usage: { domains: ['日常', '公共'], tone: '中性', commonConfusion: ['boot', 'both'] },
  });

  D('booty', {
    etymology: {
      origin: '中古英语，与中古低地德语 būte「分得的一份、战利品」有关，原是均分缴获。',
      prefix: null,
      root: { text: 'booty', gloss: '战利品；赃物' },
      suffix: null,
      history: [
        { label: '分赃、分缴获', text: '战争或抢劫后分到的财物' },
        { label: '现在', text: '仍偏书面或新闻，指非法或武力得来的财物' },
      ],
      formationLogic: '重点是「夺来再分」，不是普通的奖品。',
      mnemonic: 'booty 是抢走再分的那一堆，不是比赛的 prize。',
      note: '当代口语里 booty 还可指臀部，本条只取「战利品、赃物」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The thieves hid the booty in a rented garage.', chinese: '窃贼把赃物藏在一间租来的车库里。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'booty.s1', en: 'Customs officers seized the booty before it left the port.', zh: '海关官员在赃物离港前将其查扣。', structure: 'seize the booty', grammar: '不可数或集合名词都常见。', rationale: '与合法奖品区分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Her spelling prize was called the booty by the school.', right: 'The school called it a prize, not booty.', reason: 'booty 暗示掠夺或赃物，正式奖品用 prize 或 award。', rule: 'booty 带非法或战争缴获的色彩。', special: 'loot 是近义词，也偏赃物。' },
    ],
    quiz: [
      { id: 'booty.q1', senseId: 'booty.s1', errorType: 'meaning', type: '词义', prompt: '本条 booty 指：', options: ['战利品或赃物', '靴子的总称', '美丽的花束'], answer: '战利品或赃物', explain: '缴获或赃物。' },
      { id: 'booty.q2', senseId: 'booty.s1', errorType: 'confusable', type: '易混', prompt: '学校颁发的正规奖品更宜叫：', options: ['a prize', 'booty', 'a booth'], answer: 'a prize', explain: 'booty 色彩不对。' },
      { id: 'booty.q3', senseId: 'booty.s1', errorType: 'collocation', type: '搭配', prompt: '警方缴获赃物可以说：', options: ['seize the booty', 'boot the booty', 'borrow the booty as a wage'], answer: 'seize the booty', explain: 'seize 查扣。' },
      { id: 'booty.q4', senseId: 'booty.s1', errorType: 'context', type: '语域', prompt: '哪句符合本条词义？', options: ['Pirates divided the booty.', 'She drank a booty of tea.', 'The booty of the shoe broke.'], answer: 'Pirates divided the booty.', explain: '海盗分赃。' },
    ],
    usage: { domains: ['新闻', '历史'], tone: '负面或中性', commonConfusion: ['loot', 'prize', 'beauty'] },
  });

  D('border', {
    etymology: {
      origin: '中古英语，来自古法语 bordure，源自 bord「边、侧」。先是物体的边缘，再是国与国的界线。',
      prefix: null,
      root: { text: 'bord', gloss: '边' },
      suffix: { text: '-er / -ure 一路变成 border', gloss: '名词：边沿' },
      history: [
        { label: '古法语 bordure', text: '镶边、边缘' },
        { label: '政治', text: 'the border between two countries 国境' },
      ],
      formationLogic: '任何一条「到此为止」的线都可以叫 border：地图、花园、桌布花边。',
      mnemonic: 'bord 是边；border 是把边画出来的那一条。',
      note: 'on the border of 可抽象：on the border of tears 差一点哭出来。动词 border on 是「接近、几乎是」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We waited two hours at the border while the passports were checked.', chinese: '护照检查时，我们在边境等了两个小时。' },
    ],
    contexts: [
      { domain: '地理', senseId: 'border.s1', en: 'The river forms the border between the two provinces.', zh: '这条河构成两省的分界。', structure: 'the border between A and B', grammar: 'between 接双方；with 接相邻的另一方也常见：the border with France。', rationale: 'between / with 是搭配考点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'the border of France and Spain as a fixed exam error for between', right: 'the border between France and Spain', reason: '两边之间用 between 最稳。', rule: 'border between A and B；border with a neighbour。', special: 'a flower border 是花坛边缘，不是国境。' },
    ],
    quiz: [
      { id: 'border.q1', senseId: 'border.s1', errorType: 'collocation', type: '搭配', prompt: 'the border _____ the two states', options: ['between', 'among', 'inside'], answer: 'between', explain: '双方之间。' },
      { id: 'border.q2', senseId: 'border.s1', errorType: 'meaning', type: '词义', prompt: 'a decorative border on a page 是：', options: ['页边的装饰边', '页码的战争', '页内的靴子'], answer: '页边的装饰边', explain: '边缘义仍在。' },
      { id: 'border.q3', senseId: 'border.s1', errorType: 'grammar', type: '动词', prompt: 'His joke bordered on rudeness. 意思是：', options: ['他的玩笑几乎算无礼', '玩笑发生在边境', '玩笑被镶了边'], answer: '他的玩笑几乎算无礼', explain: 'border on 接近某性质。' },
      { id: 'border.q4', senseId: 'border.s1', errorType: 'confusable', type: '易混', prompt: '国界哨卡常说：', options: ['a border crossing', 'a board crossing', 'a bored crossing'], answer: 'a border crossing', explain: 'board 是木板或董事会。' },
    ],
    usage: { domains: ['地理', '政治'], tone: '中性', commonConfusion: ['board', 'boundary', 'edge'] },
  });

  D('borderland', {
    etymology: {
      origin: '英语复合词：border「边界」+ land「地带」。',
      prefix: null,
      root: { text: 'border', gloss: '边界' },
      suffix: { text: 'land', gloss: '地带（复合，不是屈折后缀）' },
      history: [
        { label: '地理', text: '紧挨国境的地区' },
        { label: '比喻', text: '两种状态之间的灰色地带，如清醒与睡眠的 borderland' },
      ],
      formationLogic: 'land 把「一条线」加成「沿线的一片地方」，也可抽象成中间状态。',
      mnemonic: 'border 是线，borderland 是线两边那一溜土地或状态。',
      note: '学术阅读里常见 the borderland between science and myth。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her work sits in the borderland between poetry and essay.', chinese: '她的作品处在诗歌和散文之间的地带。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'borderland.s1', en: 'The villages in the borderland changed hands twice during the war.', zh: '战争期间，边境地带的村庄两度易手。', structure: 'in the borderland', grammar: '可数，但常作一片区域用单数。', rationale: '地理义和抽象义共用「交界」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A borderland is only a line drawn on a map.', right: 'A borderland is the region or condition along or between borders.', reason: '它是地带或中间状态，不是那条几何线本身。', rule: '线用 border 或 boundary；一带地方用 borderland。', special: '也可写作 border land，考试认合写即可。' },
    ],
    quiz: [
      { id: 'borderland.q1', senseId: 'borderland.s1', errorType: 'meaning', type: '词义', prompt: 'borderland 更强调：', options: ['边界一带或中间状态', '国境上的士兵', '地图的图例'], answer: '边界一带或中间状态', explain: 'land 把线变成区域。' },
      { id: 'borderland.q2', senseId: 'borderland.s1', errorType: 'meaning', type: '比喻', prompt: 'the borderland between sleep and waking 是：', options: ['半睡半醒的状态', '两国的海关', '一张新床'], answer: '半睡半醒的状态', explain: '抽象的交界。' },
      { id: 'borderland.q3', senseId: 'borderland.s1', errorType: 'grammar', type: '构词', prompt: 'borderland 由哪两部分合成？', options: ['border + land', 'board + land', 'bore + land'], answer: 'border + land', explain: '透明复合词。' },
      { id: 'borderland.q4', senseId: 'borderland.s1', errorType: 'confusable', type: '易混', prompt: '只表示「分界线」时更贴切的是：', options: ['boundary', 'borderland', 'boulevard'], answer: 'boundary', explain: 'boundary 是线或限度。' },
    ],
    usage: { domains: ['地理', '评论'], tone: '中性', commonConfusion: ['border', 'boundary'] },
  });

  D('bore', {
    etymology: {
      origin: '「钻孔」来自古英语 borian。使人厌烦的 bore 是18世纪才常见的另一词，来源不稳，这里不编同一个词根。',
      prefix: null,
      root: { text: 'bore', gloss: '钻；使人烦' },
      suffix: null,
      history: [
        { label: '古英语 borian', text: '用工具钻洞' },
        { label: '18世纪', text: 'a bore 指乏味的人或事；动词 bore sb 使厌烦' },
      ],
      formationLogic: '两套意思要分开记。过去式 bored 既可能是「钻了」也可能是「使烦了」，靠宾语和语境判断。',
      mnemonic: '钻孔的 bore 像锥子；无聊的 bore 像把人的精神钻空。',
      note: 'bear 的过去式是 bore（生育、承担），那是第三个词，不要和本条搅成一个词源。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The speaker bored the hall by reading every figure aloud.', chinese: '演讲者把每个数字都念出来，全场都烦了。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bore.s1', en: 'Please do not bore the guests with that old story again.', zh: '请别再用那个旧故事烦客人。', structure: 'bore somebody with something', grammar: '人作宾语，with 接使人烦的内容。', rationale: '搭配比词源更常考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The film bored to me.', right: 'The film bored me.', reason: 'bore 直接加人，不加 to。', rule: 'bore sb with sth。', special: 'I am bored. 是人感到厌烦；The film is boring. 是事物本身乏味。' },
    ],
    quiz: [
      { id: 'bore.q1', senseId: 'bore.s1', errorType: 'collocation', type: '搭配', prompt: 'Long speeches _____ the children.', options: ['bore', 'bore to', 'are bore'], answer: 'bore', explain: '直接及物。' },
      { id: 'bore.q2', senseId: 'bore.s1', errorType: 'confusable', type: '易混', prompt: '人对电影感到无聊：', options: ['I am bored.', 'I am boring.', 'I am bore.'], answer: 'I am bored.', explain: '-ed 描述人的感受。' },
      { id: 'bore.q3', senseId: 'bore.s1', errorType: 'meaning', type: '词义', prompt: 'bore a hole in the wall 是：', options: ['在墙上钻孔', '使墙感到无聊', '给墙讲故事'], answer: '在墙上钻孔', explain: '这是古英语那条「钻」的意思。' },
      { id: 'bore.q4', senseId: 'bore.s1', errorType: 'grammar', type: '词性', prompt: 'He is such a bore. 里的 bore 是：', options: ['名词，乏味的人', '形容词', '冠词'], answer: '名词，乏味的人', explain: 'a bore 指人。' },
    ],
    usage: { domains: ['日常', '工程'], tone: '负面或中性', commonConfusion: ['bored', 'boring', 'bear'] },
  });

  D('bored', {
    etymology: {
      origin: '由「使人厌烦」的 bore 加 -ed 构成，表示人已经处在厌烦的状态。',
      prefix: null,
      root: { text: 'bore', gloss: '使厌烦' },
      suffix: { text: '-ed', gloss: '感到…的；过去式' },
      history: [
        { label: 'bore', text: '使某人厌烦' },
        { label: 'bored', text: '人自己觉得无聊、不耐烦' },
      ],
      formationLogic: '-ed 落在体验者身上。事物用 boring，不用 bored。',
      mnemonic: '人是 bored，事是 boring。',
      note: 'bored with / bored of 口语都有；书面更稳的是 bored with。bored by 强调被某事弄烦。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The children grew bored with the game after ten minutes.', chinese: '十分钟后孩子们就对这个游戏厌倦了。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bored.s1', en: 'She looked bored by the long safety briefing.', zh: '冗长的安全说明让她显得不耐烦。', structure: 'bored by + 事物', grammar: '形容词，主语一般是人。', rationale: '与 boring 的分工是基本功。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The lesson was bored.', right: 'The lesson was boring. / The students were bored.', reason: '课程本身不能「感到厌烦」。', rule: '人用 bored，事物用 boring。', special: 'bored to death / bored stiff 是程度习语。' },
    ],
    quiz: [
      { id: 'bored.q1', senseId: 'bored.s1', errorType: 'grammar', type: '分词', prompt: '学生们觉得课无聊：', options: ['The students were bored.', 'The students were boring.', 'The students were bore.'], answer: 'The students were bored.', explain: '体验者用 -ed。' },
      { id: 'bored.q2', senseId: 'bored.s1', errorType: 'collocation', type: '搭配', prompt: '书面语里「对作业厌倦」较稳的是：', options: ['bored with the homework', 'bored at the homework to', 'bored the homework'], answer: 'bored with the homework', explain: 'bored with。' },
      { id: 'bored.q3', senseId: 'bored.s1', errorType: 'confusable', type: '易混', prompt: '一本乏味的书：', options: ['a boring book', 'a bored book', 'a bore book'], answer: 'a boring book', explain: '书用 boring。' },
      { id: 'bored.q4', senseId: 'bored.s1', errorType: 'meaning', type: '词义', prompt: 'bored 描述的是：', options: ['厌倦、提不起兴趣', '勇敢', '刚刚出生'], answer: '厌倦、提不起兴趣', explain: '感受形容词。' },
    ],
    usage: { domains: ['日常', '学习'], tone: '负面', commonConfusion: ['boring', 'born'] },
  });

  D('boredom', {
    etymology: {
      origin: '英语派生：bore + 名词后缀 -dom，表示厌烦这种状态，19世纪开始常用。',
      prefix: null,
      root: { text: 'bore', gloss: '厌烦' },
      suffix: { text: '-dom', gloss: '状态、领域，如 freedom、kingdom' },
      history: [
        { label: 'bore', text: '乏味的人或使烦的动作' },
        { label: 'boredom', text: '无聊这一种持续状态' },
      ],
      formationLogic: '-dom 把性质收成抽象名词，一般不可数。',
      mnemonic: '像 freedom 是自由的状态，boredom 是无聊的状态。',
      note: 'out of boredom 出于无聊。不要加复数说 boredoms，除非故意指一次次无聊的经历，很少见。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He started doodling out of sheer boredom.', chinese: '他纯粹因为无聊才开始涂鸦。' },
    ],
    contexts: [
      { domain: '心理', senseId: 'boredom.s1', en: 'Long shifts with nothing to do bred boredom and small mistakes.', zh: '长时间无事可做的班次滋生厌倦，也带来小差错。', structure: 'bred boredom', grammar: '不可数名词。', rationale: '抽象名词不与 a 随意连用。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'I have a boredom.', right: 'I am suffering from boredom. / I feel bored.', reason: 'boredom 通常不可数，不说 a boredom。', rule: '用 boredom 或 feel bored，不要冠可数。', special: 'die of boredom 夸张说法，无聊死了。' },
    ],
    quiz: [
      { id: 'boredom.q1', senseId: 'boredom.s1', errorType: 'grammar', type: '名词', prompt: '哪句更自然？', options: ['She left out of boredom.', 'She left out of a boredoms.', 'She left out of bored.'], answer: 'She left out of boredom.', explain: '不可数，且 out of boredom。' },
      { id: 'boredom.q2', senseId: 'boredom.s1', errorType: 'meaning', type: '词义', prompt: 'boredom 是：', options: ['厌倦这种状态', '钻孔机', '出生证明'], answer: '厌倦这种状态', explain: '-dom 表状态。' },
      { id: 'boredom.q3', senseId: 'boredom.s1', errorType: 'confusable', type: '易混', prompt: '「我感到无聊」不说 I have boredom，而更常说：', options: ['I am bored.', 'I am boredom.', 'I boredom.'], answer: 'I am bored.', explain: '感受用形容词。' },
      { id: 'boredom.q4', senseId: 'boredom.s1', errorType: 'collocation', type: '搭配', prompt: '出于无聊才这么做：', options: ['out of boredom', 'out of bored', 'by a boredom'], answer: 'out of boredom', explain: '固定介词 out of。' },
    ],
    usage: { domains: ['日常', '心理'], tone: '负面', commonConfusion: ['bored', 'boring'] },
  });

  D('borer', {
    etymology: {
      origin: '由钻孔义的 bore 加 -er，指钻孔的器具，或蛀入木材、作物的昆虫幼虫。',
      prefix: null,
      root: { text: 'bore', gloss: '钻' },
      suffix: { text: '-er', gloss: '做这件事的物或生物' },
      history: [
        { label: '工具', text: '钻孔器' },
        { label: '昆虫', text: 'wood borer 蛀木虫' },
      ],
      formationLogic: '-er 既可指工具也可指动物，靠修饰语决定。与「厌烦」那条 bore 基本无关。',
      mnemonic: 'borer 是会钻的那个：钻头或蛀虫。',
      note: '农业和木材主题的阅读常出现 stem borer、wood-boring insect。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Tiny borers had left pinholes all through the beam.', chinese: '微小的蛀虫在整根梁上留下了针孔。' },
    ],
    contexts: [
      { domain: '生物', senseId: 'borer.s1', en: 'The corn borer can ruin a field if it is not spotted early.', zh: '玉米螟若不能及早发现，能毁掉一整块地。', structure: 'the corn borer', grammar: '可数名词，可指一只或一种。', rationale: '考试阅读里多作害虫，而不是「无聊的人」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A borer is a person who feels bored.', right: 'A borer drills holes; a bored person is just bored.', reason: '词尾 -er 这里取钻孔义。', rule: '感到无聊的人不是 borer。', special: 'boring person 才是乏味的人。' },
    ],
    quiz: [
      { id: 'borer.q1', senseId: 'borer.s1', errorType: 'meaning', type: '词义', prompt: 'a wood borer 最可能是：', options: ['蛀木的虫', '感到无聊的木匠', '木制的靴子'], answer: '蛀木的虫', explain: '钻进木头的生物。' },
      { id: 'borer.q2', senseId: 'borer.s1', errorType: 'confusable', type: '易混', prompt: '乏味的人应叫：', options: ['a bore', 'a borer', 'a borrower'], answer: 'a bore', explain: 'borer 不取厌烦义。' },
      { id: 'borer.q3', senseId: 'borer.s1', errorType: 'grammar', type: '构词', prompt: 'borer 的 -er 在本条表示：', options: ['施行钻孔的物或虫', '过去时', '比较级'], answer: '施行钻孔的物或虫', explain: '动作执行者。' },
      { id: 'borer.q4', senseId: 'borer.s1', errorType: 'collocation', type: '搭配', prompt: '农作物害虫常说：', options: ['a corn borer', 'a corn boredom', 'a corn booth'], answer: 'a corn borer', explain: '作物名 + borer。' },
    ],
    usage: { domains: ['生物', '农业'], tone: '中性', commonConfusion: ['bore', 'boring'] },
  });

  D('boring', {
    etymology: {
      origin: 'bore（使厌烦）的 -ing 形式，作形容词时表示事物本身乏味。作名词时可指钻孔这项工作，那是另一条 bore。',
      prefix: null,
      root: { text: 'bore', gloss: '使厌烦' },
      suffix: { text: '-ing', gloss: '令人…的' },
      history: [
        { label: '动词进行或动名词', text: '正在使人烦，或钻孔作业' },
        { label: '形容词', text: 'a boring film 乏味的电影' },
      ],
      formationLogic: '-ing 形容造成这种感觉的一方。不要用来形容感到无聊的人。',
      mnemonic: '电影 boring，观众 bored。',
      note: 'boring into the wood 若出现在工程文里，是「往木头里钻」，要看语境。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The manual is useful but painfully boring.', chinese: '这本手册有用，但乏味得要命。' },
    ],
    contexts: [
      { domain: '评价', senseId: 'boring.s1', en: 'Critics called the sequel boring and far too long.', zh: '评论者说这部续集又无聊又太长。', structure: 'call something boring', grammar: '形容词作宾语补足语。', rationale: '评价事物的常用词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'I am boring with this game.', right: 'I am bored with this game.', reason: 'I am boring 表示「我这个人很无趣」。', rule: '自己的感受用 bored。', special: 'How boring! 感叹事物。' },
    ],
    quiz: [
      { id: 'boring.q1', senseId: 'boring.s1', errorType: 'grammar', type: '分词', prompt: '这场讲座乏味：', options: ['The lecture was boring.', 'The lecture was bored.', 'The lecture was boredom.'], answer: 'The lecture was boring.', explain: '事物用 -ing。' },
      { id: 'boring.q2', senseId: 'boring.s1', errorType: 'meaning', type: '词义', prompt: '说 I am boring 听起来像：', options: ['我是个无趣的人', '我现在感到无聊', '我在钻孔'], answer: '我是个无趣的人', explain: '形容词落在「我」身上。' },
      { id: 'boring.q3', senseId: 'boring.s1', errorType: 'collocation', type: '搭配', prompt: '无聊得要命可以用：', options: ['boring to tears', 'bored to the film', 'boredom of tears'], answer: 'boring to tears', explain: '程度补语。' },
      { id: 'boring.q4', senseId: 'boring.s1', errorType: 'confusable', type: '易混', prompt: '感到厌倦的观众是：', options: ['a bored audience', 'a boring audience always', 'a bore audience'], answer: 'a bored audience', explain: '观众是体验者。' },
    ],
    usage: { domains: ['日常', '评论'], tone: '负面', commonConfusion: ['bored', 'boredom'] },
  });

  D('born', {
    etymology: {
      origin: '来自古英语 beran「承担、生育」的过去分词 boren。专指「被生出来」时写成 born；「被承担、被携带」时写成 borne。',
      prefix: null,
      root: { text: 'bear', gloss: '生育；承担' },
      suffix: null,
      history: [
        { label: '古英语 boren', text: 'bear 的旧过去分词' },
        { label: '分工', text: 'born 出生、天生；borne 承担或生下（主动承担的被动）' },
      ],
      formationLogic: 'born 多作形容词：be born in / on / into。a born leader 表示天生的领导者。',
      mnemonic: '有生命来到世上用 born；负担、由某人承担用 borne（She has borne the cost.）。',
      note: 'born 不是 bear 的过去式。过去式是 bore：She bore a child. 她生过孩子，书面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He was born in 1998 and raised by his grandparents.', chinese: '他生于1998年，由祖父母带大。' },
    ],
    contexts: [
      { domain: '传记', senseId: 'born.s1', en: 'She was born into a family of teachers.', zh: '她出生在一个教师家庭。', structure: 'be born into', grammar: '被动形式表状态，into 接家庭或环境。', rationale: 'born in / on / into 介词是考点。' , sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He born in May.', right: 'He was born in May.', reason: 'born 在这个意义上要用 be born。', rule: 'was / were born + in 年/地，on 具体日子。', special: 'a born musician 不加 was。' },
    ],
    quiz: [
      { id: 'born.q1', senseId: 'born.s1', errorType: 'grammar', type: '结构', prompt: '他出生在上海：', options: ['He was born in Shanghai.', 'He born in Shanghai.', 'He was borne in Shanghai as birth.'], answer: 'He was born in Shanghai.', explain: 'be born in。' },
      { id: 'born.q2', senseId: 'born.s1', errorType: 'confusable', type: '易混', prompt: '「费用由公司承担了」更接近：', options: ['The cost was borne by the company.', 'The cost was born by the company.', 'The cost borned the company.'], answer: 'The cost was borne by the company.', explain: '承担用 borne。' },
      { id: 'born.q3', senseId: 'born.s1', errorType: 'collocation', type: '搭配', prompt: '天生的领袖：', options: ['a born leader', 'a borne leader', 'a bored leader'], answer: 'a born leader', explain: 'born 作定语表天赋。' },
      { id: 'born.q4', senseId: 'born.s1', errorType: 'meaning', type: '词义', prompt: 'bear 表示「生育」时的过去式是：', options: ['bore', 'born', 'borned'], answer: 'bore', explain: 'born 是分词或形容词。' },
    ],
    usage: { domains: ['传记', '日常'], tone: '中性', commonConfusion: ['borne', 'bore'] },
  });

  D('borrow', {
    etymology: {
      origin: '古英语 borgian，与 pledge「抵押、担保」同源：先拿来用，并承诺以后归还。',
      prefix: null,
      root: { text: 'borrow', gloss: '借入' },
      suffix: null,
      history: [
        { label: '古英语 borgian', text: '借，并带有担保的意思' },
        { label: '现在', text: 'borrow sth from sb 向某人借' },
      ],
      formationLogic: '方向是「拿进来」。借出去用 lend。',
      mnemonic: 'borrow 收到，lend 给出。from 标出借出的那一方。',
      note: 'borrow 一般不说 borrow sb sth。英语是 borrow sth from sb。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'May I borrow your charger until this evening?', chinese: '我能借你的充电器到今天晚上吗？' },
    ],
    contexts: [
      { domain: '日常', senseId: 'borrow.s1', en: 'She borrowed a coat from her sister and forgot to return it.', zh: '她向姐姐借了件外套，却忘了还。', structure: 'borrow something from somebody', grammar: 'from 引出物主，不跟双宾语。', rationale: '与 lend 的方向是经典易混。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Can I borrow you a pen?', right: 'Can I borrow a pen from you? / Can you lend me a pen?', reason: 'borrow 不能把人放在间接宾语位置。', rule: 'borrow sth from sb；lend sb sth。', special: 'borrowed time 是「借来的时间」，比喻侥幸多出来的。' },
    ],
    quiz: [
      { id: 'borrow.q1', senseId: 'borrow.s1', errorType: 'grammar', type: '句型', prompt: '向老师借书：', options: ['borrow a book from the teacher', 'borrow the teacher a book', 'lend a book from the teacher'], answer: 'borrow a book from the teacher', explain: 'from 指向物主。' },
      { id: 'borrow.q2', senseId: 'borrow.s1', errorType: 'confusable', type: '易混', prompt: '「我把笔借给她」是：', options: ['I lent her the pen.', 'I borrowed her the pen.', 'I borrowed her to the pen.'], answer: 'I lent her the pen.', explain: '给出用 lend。' },
      { id: 'borrow.q3', senseId: 'borrow.s1', errorType: 'collocation', type: '搭配', prompt: 'borrow 后面接物主常用介词：', options: ['from', 'to', 'at'], answer: 'from', explain: 'borrow from。' },
      { id: 'borrow.q4', senseId: 'borrow.s1', errorType: 'meaning', type: '词义', prompt: 'borrow 的方向是：', options: ['暂时拿来用', '永久赠送', '拒绝归还的法律术语'], answer: '暂时拿来用', explain: '默认要还。' },
    ],
    usage: { domains: ['日常', '金融'], tone: '中性', commonConfusion: ['lend', 'loan'] },
  });

  D('boss', {
    etymology: {
      origin: '来自荷兰语 baas「主人、工头」，在美国英语里站住后，再传回英国。',
      prefix: null,
      root: { text: 'boss', gloss: '上司' },
      suffix: null,
      history: [
        { label: '荷兰语 baas', text: '主人' },
        { label: '英语', text: '顶头上司；动词 boss sb about / around 把人差来遣去' },
      ],
      formationLogic: '名词是职位，动词是行为，往往带不耐烦：别对我发号施令。',
      mnemonic: 'baas 到 boss，只记「说了算的那个人」。',
      note: '口语 be one\'s own boss 自己当老板。书面报告里更正式的词是 manager 或 supervisor。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I need to clear the budget with my boss before Friday.', chinese: '星期五之前我得跟上司把预算确认掉。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'boss.s1', en: 'She hates being bossed around by people who skip the hard work.', zh: '她讨厌被那些自己不干苦活的人呼来喝去。', structure: 'boss somebody around', grammar: 'around / about 表示毫无章法地指挥。', rationale: '动词搭配比名词更易错。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Stop bossing me.', right: 'Stop bossing me around.', reason: '单独 boss me 不完整，英语要 around 或 about。', rule: 'boss sb around / about。', special: 'a bossy person 爱指挥别人的人。' },
    ],
    quiz: [
      { id: 'boss.q1', senseId: 'boss.s1', errorType: 'collocation', type: '搭配', prompt: '别把我差来遣去：', options: ['Don\'t boss me around.', 'Don\'t boss me.', 'Don\'t boss around me to.'], answer: 'Don\'t boss me around.', explain: 'boss sb around。' },
      { id: 'boss.q2', senseId: 'boss.s1', errorType: 'meaning', type: '词义', prompt: 'one\'s boss 是：', options: ['上司', '同事的别名', '工资条'], answer: '上司', explain: '管你的人。' },
      { id: 'boss.q3', senseId: 'boss.s1', errorType: 'confusable', type: '易混', prompt: '爱指使人的形容词是：', options: ['bossy', 'bossing noun', 'boast'], answer: 'bossy', explain: '-y 构成形容词。' },
      { id: 'boss.q4', senseId: 'boss.s1', errorType: 'meaning', type: '词源', prompt: 'boss 进入英语主要经由：', options: ['荷兰语 baas', '拉丁语 bos 牛', '希腊语 basis'], answer: '荷兰语 baas', explain: '与「牛」的拉丁词不是一条线，不要靠拼写硬联。' },
    ],
    usage: { domains: ['职场', '口语'], tone: '中性', commonConfusion: ['manager', 'bossy'] },
  });

  D('botanical', {
    etymology: {
      origin: '源自希腊语 botanē「草、植物」，经植物学 botany 加形容词后缀 -ical。',
      prefix: null,
      root: { text: 'botan-', gloss: '植物' },
      suffix: { text: '-ical', gloss: '与…有关的' },
      history: [
        { label: '希腊语 botanē', text: '植物、牧草' },
        { label: '英语', text: 'botanical garden 植物园；botanical name 学名' },
      ],
      formationLogic: '凡是科学地对待植物，而不是随便说「花草」，就倾向用 botanical。',
      mnemonic: 'botanical garden 不是普通公园，里面的植物按学科收集。',
      note: '也可说 botanic garden，英国有 Royal Botanic Gardens。两套形容词都对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The label gave both the common name and the botanical name.', chinese: '标签上既有俗名，也有植物学名。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'botanical.s1', en: 'We spent the morning in the botanical garden sketching leaves.', zh: '我们一上午都在植物园里素描叶子。', structure: 'botanical garden', grammar: '形容词，通常放在名词前。', rationale: '固定搭配优先记。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a botany garden', right: 'a botanical garden', reason: '园子名称用形容词 botanical / botanic，不用名词 botany 直接作定语在这个搭配里。', rule: 'botanical name / garden / illustration。', special: 'botany department 则用名词作定语，表示植物学系。' },
    ],
    quiz: [
      { id: 'botanical.q1', senseId: 'botanical.s1', errorType: 'collocation', type: '搭配', prompt: '植物园是：', options: ['a botanical garden', 'a botany garden', 'a botanic of garden'], answer: 'a botanical garden', explain: '标准搭配。' },
      { id: 'botanical.q2', senseId: 'botanical.s1', errorType: 'meaning', type: '词义', prompt: 'botanical 与什么有关？', options: ['植物', '船只', '瓶子'], answer: '植物', explain: '希腊语 botanē。' },
      { id: 'botanical.q3', senseId: 'botanical.s1', errorType: 'grammar', type: '词性', prompt: '本条词性是：', options: ['adjective', 'verb', 'preposition'], answer: 'adjective', explain: '修饰名词。' },
      { id: 'botanical.q4', senseId: 'botanical.s1', errorType: 'confusable', type: '易混', prompt: '植物学这门学科的名词是：', options: ['botany', 'botanical', 'bottle'], answer: 'botany', explain: 'botanical 是形容词。' },
    ],
    usage: { domains: ['科学', '园林'], tone: '正式', commonConfusion: ['botany', 'botanic'] },
  });

  D('botany', {
    etymology: {
      origin: '源自希腊语 botanē「植物」，17世纪成为一门学科的名称。',
      prefix: null,
      root: { text: 'botan-', gloss: '植物' },
      suffix: { text: '-y', gloss: '学科、状态' },
      history: [
        { label: '希腊语 botanē', text: '草本、植物' },
        { label: '学科名', text: '研究植物结构、分类与生活的科学' },
      ],
      formationLogic: '像 history、chemistry 一样，-y 名词当学科，不可数。',
      mnemonic: 'botany 是学科，botanical 是形容词。',
      note: '研究植物的人是 botanist。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She chose botany because she wanted fieldwork, not only lab work.', chinese: '她选植物学，是因为想做野外工作，而不只是待在实验室。' },
    ],
    contexts: [
      { domain: '学术', senseId: 'botany.s1', en: 'Botany was still taught beside zoology in the old science faculty.', zh: '在旧的理学院里，植物学仍和动物学一起教。', structure: 'botany 作主语', grammar: '学科名作主语时动词用单数。', rationale: '不可数学科名。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Botany are difficult.', right: 'Botany is difficult.', reason: '学科名视为单数。', rule: 'botany is。', special: 'a botany textbook 里 botany 作定语。' },
    ],
    quiz: [
      { id: 'botany.q1', senseId: 'botany.s1', errorType: 'meaning', type: '词义', prompt: 'botany 是：', options: ['植物学', '植物园的门票', '一种汤'], answer: '植物学', explain: '学科名。' },
      { id: 'botany.q2', senseId: 'botany.s1', errorType: 'grammar', type: '一致', prompt: 'Botany _____ her favourite subject.', options: ['is', 'are', 'be'], answer: 'is', explain: '单数。' },
      { id: 'botany.q3', senseId: 'botany.s1', errorType: 'confusable', type: '易混', prompt: '研究植物的人叫：', options: ['a botanist', 'a botany', 'a booth'], answer: 'a botanist', explain: '-ist 指人。' },
      { id: 'botany.q4', senseId: 'botany.s1', errorType: 'collocation', type: '搭配', prompt: '植物学名更常与哪个形容词连用？', options: ['botanical', 'bottom', 'borrowed'], answer: 'botanical', explain: 'botanical name。' },
    ],
    usage: { domains: ['学术'], tone: '正式', commonConfusion: ['botanical', 'botanist'] },
  });

  D('botch', {
    etymology: {
      origin: '中古英语已有「笨拙地修补」的用法。更早的词根不稳，不编造。',
      prefix: null,
      root: { text: 'botch', gloss: '搞砸' },
      suffix: null,
      history: [
        { label: '中古英语', text: '拙劣地补' },
        { label: '现在', text: 'botch a job / an exam 把事情做坏' },
      ],
      formationLogic: '动词是做砸，名词 a botch 是砸出来的结果。常加 up：botch up。',
      mnemonic: '补丁补歪了，就是 botch。',
      note: '语气口语、带责备。正式场合可用 mishandle 或 bungle。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They botched the repair and the shelf fell the next day.', chinese: '他们把修理搞砸了，架子第二天就掉了下来。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'botch.s1', en: 'If we botch the interview, we will not get a second chance.', zh: '这次面试要是搞砸，就没有下次机会了。', structure: 'botch + 任务', grammar: '及物动词。', rationale: '宾语是被做坏的那件事。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He botched up.', right: 'He botched the repair. / He botched it up.', reason: '需要宾语，光说 botched up 不完整。', rule: 'botch something 或 botch something up。', special: 'make a botch of sth 也常见。' },
    ],
    quiz: [
      { id: 'botch.q1', senseId: 'botch.s1', errorType: 'meaning', type: '词义', prompt: 'botch a job 是：', options: ['把活干砸', '把活干得极漂亮', '把活交给老板'], answer: '把活干砸', explain: '拙劣地完成。' },
      { id: 'botch.q2', senseId: 'botch.s1', errorType: 'collocation', type: '搭配', prompt: '哪句完整？', options: ['They botched the experiment.', 'They botched.', 'They botchment the experiment.'], answer: 'They botched the experiment.', explain: '要有宾语。' },
      { id: 'botch.q3', senseId: 'botch.s1', errorType: 'confusable', type: '易混', prompt: '和 botch 意思最接近的是：', options: ['bungle', 'boost', 'borrow'], answer: 'bungle', explain: '都是办砸。' },
      { id: 'botch.q4', senseId: 'botch.s1', errorType: 'grammar', type: '词性', prompt: 'make a botch of the speech 里 botch 是：', options: ['名词', '介词', '冠词'], answer: '名词', explain: 'a botch 一次失败的成品。' },
    ],
    usage: { domains: ['口语'], tone: '贬义', commonConfusion: ['bungle', 'patch'] },
  });

  D('both', {
    etymology: {
      origin: '古英语，与「两个」有关（bā 一类形式）。意思从早期就固定为「两者都」。',
      prefix: null,
      root: { text: 'both', gloss: '两者' },
      suffix: null,
      history: [
        { label: '古英语', text: '两个都' },
        { label: '现在', text: 'both of them；both A and B' },
      ],
      formationLogic: '只用于两个。三个及以上用 all。both 可作限定词、代词，也可与 and 关联。',
      mnemonic: '两只手都举起来才是 both；第三只出现就要换成 all。',
      note: 'both 已含「二者」，不要再加 two：不说 both two books。否定两者用 neither。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Both of the plans failed, so we started again.', chinese: '两个方案都失败了，于是我们重来。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'both.s1', en: 'She can both sing and play the piano.', zh: '她既会唱，也会弹钢琴。', structure: 'both A and B', grammar: 'A 与 B 词性尽量平行。', rationale: '关联结构是写作基本项。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Both of student passed.', right: 'Both students passed. / Both of the students passed.', reason: 'both of 后面要有限定的复数名词或代词。', rule: 'both + 复数名词，或 both of the / these / my + 复数。', special: 'Both A and B 不用 as well。' },
    ],
    quiz: [
      { id: 'both.q1', senseId: 'both.s1', errorType: 'grammar', type: '结构', prompt: '哪句正确？', options: ['Both of the answers are right.', 'Both of answer is right.', 'Both answer are right.'], answer: 'Both of the answers are right.', explain: 'of the + 复数，动词复数。' },
      { id: 'both.q2', senseId: 'both.s1', errorType: 'meaning', type: '范围', prompt: 'both 适用于：', options: ['两个', '三个或更多', '零个'], answer: '两个', explain: '多于二用 all。' },
      { id: 'both.q3', senseId: 'both.s1', errorType: 'collocation', type: '搭配', prompt: '她又聪明又善良：', options: ['both clever and kind', 'both clever or kind', 'both clever as well kind'], answer: 'both clever and kind', explain: 'both ... and ...。' },
      { id: 'both.q4', senseId: 'both.s1', errorType: 'confusable', type: '易混', prompt: '「两个都不」用：', options: ['neither', 'both', 'booth'], answer: 'neither', explain: 'both 是都肯定。' },
    ],
    usage: { domains: ['语法', '写作'], tone: '中性', commonConfusion: ['either', 'neither', 'all'] },
  });

  D('bother', {
    etymology: {
      origin: '18世纪进入常见英语，词源不十分确定，不编造古典词根。核心是「添麻烦」。',
      prefix: null,
      root: { text: 'bother', gloss: '打扰；烦劳' },
      suffix: null,
      history: [
        { label: '18世纪口语', text: '搅扰、添乱' },
        { label: '现在', text: 'bother sb；Don\'t bother. 不必费心' },
      ],
      formationLogic: '可以是打扰别人，也可以是自己嫌麻烦而不做。名词 a bother 是一件麻烦事。',
      mnemonic: 'bother 是「要不要为这点事费神」。打扰别人和自己偷懒，是同一词的两面。',
      note: 'can\'t be bothered to do 懒得做，语气随便。礼貌请求用 Sorry to bother you.',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Sorry to bother you, but is this seat free?', chinese: '不好意思打扰一下，这个座位有人吗？' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bother.s1', en: 'Do not bother to print it; an email is enough.', zh: '不必费心打印，发邮件就够了。', structure: 'bother to do', grammar: '否定句里常接 to do 或 doing，表示不值得花这功夫。', rationale: '打扰与「嫌麻烦」要靠搭配区分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He did not bother locking, so the door stayed open all night as if bother needs no object ever.', right: 'He did not bother to lock the door.', reason: '表示「懒得做某事」用 bother to do 或 bother doing，并带明确的事。', rule: 'not bother to do sth。', special: 'bother sb with sth 拿某事去烦人。' },
    ],
    quiz: [
      { id: 'bother.q1', senseId: 'bother.s1', errorType: 'meaning', type: '词义', prompt: 'Sorry to bother you 是：', options: ['抱歉打扰你', '抱歉借你的靴子', '抱歉感到无聊'], answer: '抱歉打扰你', explain: '礼貌的打扰。' },
      { id: 'bother.q2', senseId: 'bother.s1', errorType: 'grammar', type: '结构', prompt: '他懒得回信：', options: ['He could not be bothered to reply.', 'He could not be bother reply.', 'He bothered her a reply.'], answer: 'He could not be bothered to reply.', explain: 'can\'t be bothered to do。' },
      { id: 'bother.q3', senseId: 'bother.s1', errorType: 'collocation', type: '搭配', prompt: '拿小事去烦同事：', options: ['bother a colleague with small matters', 'bother a colleague at small matters to', 'bother to colleague'], answer: 'bother a colleague with small matters', explain: 'bother sb with sth。' },
      { id: 'bother.q4', senseId: 'bother.s1', errorType: 'confusable', type: '易混', prompt: '「不必麻烦了」最接近：', options: ['Don\'t bother.', 'Don\'t borrow.', 'Don\'t border.'], answer: 'Don\'t bother.', explain: 'bother 才是费心。' },
    ],
    usage: { domains: ['日常', '口语'], tone: '中性', commonConfusion: ['disturb', 'annoy'] },
  });

  D('bottle', {
    etymology: {
      origin: '中古英语，来自古法语 bouteille，晚期拉丁语 butticula，是 buttis「大桶」的小称：一只小桶变成细颈瓶。',
      prefix: null,
      root: { text: 'bottle', gloss: '瓶子' },
      suffix: null,
      history: [
        { label: '拉丁语 buttis', text: '桶' },
        { label: '小称', text: '细颈的容器；a bottle of water 一瓶水' },
      ],
      formationLogic: '名词是容器，动词 bottle 是把液体装进瓶里。bottle up 把情绪闷在心里。',
      mnemonic: 'buttis 是大桶，bottle 是缩成能握在手里的小容器。',
      note: 'the bottle 有时委婉指酒：be too fond of the bottle。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Bring a bottle of water and do not leave it in the sun.', chinese: '带一瓶水，别把它放在太阳底下。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bottle.s1', en: 'The farm bottles the milk on the same morning it is collected.', zh: '农场在收奶的当天上午就把牛奶装瓶。', structure: 'bottle + 液体', grammar: '动词为及物。', rationale: '名词与动词、以及 bottle up 要分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a bottle water', right: 'a bottle of water', reason: '量词和物质之间要 of。', rule: 'a bottle of + 不可数名词。', special: 'bottle sth up 压抑情绪，不真的装瓶。' },
    ],
    quiz: [
      { id: 'bottle.q1', senseId: 'bottle.s1', errorType: 'collocation', type: '搭配', prompt: '一瓶牛奶：', options: ['a bottle of milk', 'a bottle milk', 'a milk of bottle'], answer: 'a bottle of milk', explain: 'of 连接量词。' },
      { id: 'bottle.q2', senseId: 'bottle.s1', errorType: 'meaning', type: '短语', prompt: 'bottle up your anger 是：', options: ['把怒气压住不说', '把怒气灌进玻璃瓶', '把瓶子摔碎'], answer: '把怒气压住不说', explain: '比喻压抑。' },
      { id: 'bottle.q3', senseId: 'bottle.s1', errorType: 'grammar', type: '词性', prompt: 'They bottle the juice on site. 里 bottle 是：', options: ['动词', '形容词', '连词'], answer: '动词', explain: '装瓶。' },
      { id: 'bottle.q4', senseId: 'bottle.s1', errorType: 'confusable', type: '易混', prompt: '细颈容器是 bottle，战斗是：', options: ['battle', 'bottle', 'bottom'], answer: 'battle', explain: '元音不同。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['battle', 'jar'] },
  });

  D('bottom', {
    etymology: {
      origin: '古英语 botm，与德语 Boden「地面、底部」同源。',
      prefix: null,
      root: { text: 'bottom', gloss: '底部' },
      suffix: null,
      history: [
        { label: '古英语 botm', text: '最低的部分' },
        { label: '引申', text: '排名末尾、海床、事情的真相 at the bottom of' },
      ],
      formationLogic: '空间上的最低处，转成顺序上的最后、也转成原因的根基。',
      mnemonic: 'bottom 总在最下面：杯子底、班级末名、问题根子。',
      note: 'from the bottom of my heart 是真诚，不是解剖。bottoms up 是干杯。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The keys had slipped to the bottom of the bag.', chinese: '钥匙滑到了包的最底下。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bottom.s1', en: 'Sign your name at the bottom of the page.', zh: '在页面最下方签名。', structure: 'at the bottom of', grammar: 'of 后接整体。', rationale: '介词 at 而不是 in 更常见于纸面两端。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'in the bottom of the page', right: 'at the bottom of the page', reason: '纸页的下端用 at。', rule: 'at the bottom / top of the page。', special: 'get to the bottom of sth 把原因查清。' },
    ],
    quiz: [
      { id: 'bottom.q1', senseId: 'bottom.s1', errorType: 'collocation', type: '搭配', prompt: '写在页脚：', options: ['at the bottom of the page', 'in the bottom of the page', 'on bottom the page'], answer: 'at the bottom of the page', explain: 'at the bottom of。' },
      { id: 'bottom.q2', senseId: 'bottom.s1', errorType: 'meaning', type: '习语', prompt: 'get to the bottom of the rumour 是：', options: ['把谣言的根由查清', '把谣言放到抽屉底', '相信谣言'], answer: '把谣言的根由查清', explain: '追究到底。' },
      { id: 'bottom.q3', senseId: 'bottom.s1', errorType: 'confusable', type: '易混', prompt: '杯子的底部不是：', options: ['button', 'bottom', 'base'], answer: 'button', explain: 'button 是纽扣。' },
      { id: 'bottom.q4', senseId: 'bottom.s1', errorType: 'grammar', type: '词性', prompt: 'the bottom team in the league 里 bottom 是：', options: ['形容词，垫底的', '动词', '连词'], answer: '形容词，垫底的', explain: '也可作定语形容词。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['button', 'base'] },
  });

  D('bottomless', {
    etymology: {
      origin: '英语派生：bottom + -less，字面是「没有底」。',
      prefix: null,
      root: { text: 'bottom', gloss: '底' },
      suffix: { text: '-less', gloss: '没有' },
      history: [
        { label: '字面', text: '深不见底的坑或海' },
        { label: '夸张', text: 'a bottomless appetite 怎么也填不满的胃口' },
      ],
      formationLogic: '-less 否定名词词干。多用于比喻，真正没有底的物体很少。',
      mnemonic: '没有 bottom，所以怎么倒都倒不满，或怎么看都看不到底。',
      note: '语气常常夸张。不要用来替代 infinite 的全部科学语境。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He spoke of a bottomless budget, which of course we do not have.', chinese: '他说什么预算无底，我们当然没有这种预算。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'bottomless.s1', en: 'The novel describes a bottomless well at the edge of the village.', zh: '小说描写了村边一口深不见底的井。', structure: 'bottomless + 名词', grammar: '形容词。', rationale: '字面与夸张共用一个形象。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'Bottomless means the lowest score.', right: 'Bottomless means having no apparent bottom or limit.', reason: '它不是「垫底的名次」。垫底用 bottom。', rule: '-less 表示没有底或没有限度。', special: 'a bottomless pit 无底洞，常指耗钱的项目。' },
    ],
    quiz: [
      { id: 'bottomless.q1', senseId: 'bottomless.s1', errorType: 'meaning', type: '词义', prompt: 'a bottomless pit 常比喻：', options: ['耗不尽的无底洞', '排名最后的坑', '没有瓶盖的坑'], answer: '耗不尽的无底洞', explain: '限度消失。' },
      { id: 'bottomless.q2', senseId: 'bottomless.s1', errorType: 'grammar', type: '构词', prompt: '-less 在这里表示：', options: ['没有', '充满', '过去'], answer: '没有', explain: '否定后缀。' },
      { id: 'bottomless.q3', senseId: 'bottomless.s1', errorType: 'confusable', type: '易混', prompt: '联赛最后一名更宜说：', options: ['the bottom team', 'the bottomless team', 'the bottomed team'], answer: 'the bottom team', explain: '名次用 bottom。' },
      { id: 'bottomless.q4', senseId: 'bottomless.s1', errorType: 'collocation', type: '搭配', prompt: '胃口大得惊人：', options: ['a bottomless appetite', 'a bottom appetite', 'an appetite of less'], answer: 'a bottomless appetite', explain: '夸张搭配。' },
    ],
    usage: { domains: ['写作', '口语夸张'], tone: '夸张', commonConfusion: ['bottom', 'endless'] },
  });

  D('bough', {
    etymology: {
      origin: '古英语 bōg，原可指肩膀、臂或粗枝。现代英语几乎只剩「大树枝」。',
      prefix: null,
      root: { text: 'bough', gloss: '粗枝' },
      suffix: null,
      history: [
        { label: '古英语 bōg', text: '臂状的部位或大枝' },
        { label: '现在', text: '树上长出的主枝，文学语体较多' },
      ],
      formationLogic: '比 twig（细枝）粗，常是还能再分小枝的那一段。',
      mnemonic: 'bough 与 bow「弓」不同词；bough 发音同 bow「鞠躬」/baʊ/，但是树枝。',
      note: '诗歌里常见。日常说 branch 更普通。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A heavy bough broke under the wet snow.', chinese: '一根粗枝被湿雪压断了。' },
    ],
    contexts: [
      { domain: '文学', senseId: 'bough.s1', en: 'Birds settled on the lowest bough and shook the last leaves.', zh: '鸟停在最低的那根粗枝上，震落最后的叶子。', structure: 'on a bough', grammar: '可数名词。', rationale: '与 branch、twig 的大小要分清。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He shot an arrow from a bough.', right: 'He shot an arrow from a bow. The owl sat on a bough.', reason: '弓是 bow；树枝是 bough。', rule: 'bough = large branch。', special: '复数 boughs。' },
    ],
    quiz: [
      { id: 'bough.q1', senseId: 'bough.s1', errorType: 'meaning', type: '词义', prompt: 'bough 是：', options: ['大树枝', '弓', '鞠躬'], answer: '大树枝', explain: '主枝。' },
      { id: 'bough.q2', senseId: 'bough.s1', errorType: 'confusable', type: '易混', prompt: '射箭的弓是：', options: ['bow', 'bough', 'bowl'], answer: 'bow', explain: '没有 gh。' },
      { id: 'bough.q3', senseId: 'bough.s1', errorType: 'collocation', type: '搭配', prompt: '比 bough 更细的小枝常叫：', options: ['a twig', 'a trunk only', 'a root only'], answer: 'a twig', explain: 'twig 细枝。' },
      { id: 'bough.q4', senseId: 'bough.s1', errorType: 'grammar', type: '复数', prompt: '复数形式是：', options: ['boughs', 'boughves', 'beigh'], answer: 'boughs', explain: '规则复数。' },
    ],
    usage: { domains: ['文学', '自然'], tone: '偏书面', commonConfusion: ['bow', 'branch'] },
  });

  D('bouillon', {
    etymology: {
      origin: '法语 bouillon，来自动词 bouillir「煮沸」，拉丁语 bullire「起泡、沸腾」。',
      prefix: null,
      root: { text: 'bouillon', gloss: '清汤' },
      suffix: null,
      history: [
        { label: '拉丁语 bullire', text: '沸腾' },
        { label: '法语', text: '肉或菜熬出的清汤' },
      ],
      formationLogic: '把材料煮开、撇掉浮沫后剩下的清液。它不是浓奶油汤。',
      mnemonic: 'boil 和 bouillon 都从「沸」来；bouillon 是煮出来的那一锅清汤。',
      note: '发音接近「布依永」。方块浓缩高汤常叫 bouillon cube。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She sipped a cup of beef bouillon before the long meeting.', chinese: '长会之前她喝了一杯牛肉清汤。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'bouillon.s1', en: 'The recipe starts with a litre of vegetable bouillon.', zh: '食谱的第一步是一升蔬菜清汤。', structure: 'a litre of bouillon', grammar: '物质名词，多用不可数。', rationale: '与浓汤 stew、chowder 区分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Bouillon is a French law court.', right: 'Bouillon is a clear broth. A bulletin is a short official notice.', reason: '拼写接近 bulletin（公报）。', rule: 'bouillon = clear soup。', special: 'bullion 是金条银条，又是另一个词。' },
    ],
    quiz: [
      { id: 'bouillon.q1', senseId: 'bouillon.s1', errorType: 'meaning', type: '词义', prompt: 'bouillon 是：', options: ['清汤', '公报', '金条'], answer: '清汤', explain: '煮出来的清液。' },
      { id: 'bouillon.q2', senseId: 'bouillon.s1', errorType: 'confusable', type: '易混', prompt: '金条银条是：', options: ['bullion', 'bouillon', 'bulletin'], answer: 'bullion', explain: '少一个 o，指贵金属。' },
      { id: 'bouillon.q3', senseId: 'bouillon.s1', errorType: 'meaning', type: '词源', prompt: 'bouillon 与哪个意思同源？', options: ['沸腾', '子弹', '边界'], answer: '沸腾', explain: '拉丁语 bullire。' },
      { id: 'bouillon.q4', senseId: 'bouillon.s1', errorType: 'collocation', type: '搭配', prompt: '浓缩高汤块常叫：', options: ['a bouillon cube', 'a bulletin cube', 'a bullion cube of soup law'], answer: 'a bouillon cube', explain: 'cube 是小方块。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['bullion', 'bulletin'] },
  });

  D('boulder', {
    etymology: {
      origin: '中古英语，来自北欧语。瑞典语一类方言里有 bullersten，指在溪流中滚动发响的石头。',
      prefix: null,
      root: { text: 'boulder', gloss: '巨石' },
      suffix: null,
      history: [
        { label: '北欧语', text: '水里滚动、发出轰响的石头' },
        { label: '现在', text: '体积很大的圆石或漂砾，也可指攀岩用的大石头' },
      ],
      formationLogic: '比 pebble、rock 的一般用法更大，常常独块矗立。',
      mnemonic: 'boulder 大到能单独挡住一条小路。',
      note: 'bouldering 是不系绳、在巨石上的短距攀爬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A boulder had rolled onto the road after the storm.', chinese: '暴风雨后一块巨石滚到了路上。' },
    ],
    contexts: [
      { domain: '地理', senseId: 'boulder.s1', en: 'Glaciers left boulders scattered across the valley.', zh: '冰川在山谷里留下了散落的巨石。', structure: 'boulders scattered across', grammar: '可数名词。', rationale: '体积等级要和 pebble 分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She picked up a boulder and put it in her pocket.', right: 'She picked up a pebble. A boulder is far too large for a pocket.', reason: 'boulder 是巨石，不是卵石。', rule: 'pocket stone = pebble；boulder = very large rock。', special: 'the Boulder Dam 等专名要大写。' },
    ],
    quiz: [
      { id: 'boulder.q1', senseId: 'boulder.s1', errorType: 'meaning', type: '词义', prompt: 'boulder 是：', options: ['巨石', '小卵石', '肩膀'], answer: '巨石', explain: '体积大。' },
      { id: 'boulder.q2', senseId: 'boulder.s1', errorType: 'confusable', type: '易混', prompt: '能放进口袋的小石子是：', options: ['a pebble', 'a boulder', 'a bough'], answer: 'a pebble', explain: 'pebble 小。' },
      { id: 'boulder.q3', senseId: 'boulder.s1', errorType: 'collocation', type: '搭配', prompt: '冰川留下的石头常说：', options: ['glacial boulders', 'glacial bottles', 'glacial booths'], answer: 'glacial boulders', explain: '漂砾。' },
      { id: 'boulder.q4', senseId: 'boulder.s1', errorType: 'grammar', type: '复数', prompt: '复数是：', options: ['boulders', 'boulder', 'bouldren'], answer: 'boulders', explain: '规则复数。' },
    ],
    usage: { domains: ['地理', '户外'], tone: '中性', commonConfusion: ['pebble', 'rock'] },
  });

  D('bounce', {
    etymology: {
      origin: '中古英语 bunsen 表示猛击，多半是拟声。后来才稳定为「撞上表面又弹回」。',
      prefix: null,
      root: { text: 'bounce', gloss: '弹起' },
      suffix: null,
      history: [
        { label: '拟声的重击', text: '先是砰地一撞' },
        { label: '现在', text: '球弹起；支票被退回；人很快恢复 bounce back' },
      ],
      formationLogic: '物理上的反弹，引申到邮件退回、支票拒付、情绪恢复。',
      mnemonic: '落地再起来才叫 bounce。只摔碎不叫 bounce。',
      note: 'bounce a cheque / check 是银行拒付。with a bounce in one\'s step 步伐轻快。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The ball bounced twice before it rolled under the bench.', chinese: '球弹了两下，然后滚到长凳底下。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bounce.s1', en: 'She bounced back quickly after the first interview went badly.', zh: '第一次面试不顺利后，她很快又振作起来。', structure: 'bounce back', grammar: '不及物短语，主语是恢复的人、经济或系统。', rationale: '物理义和比喻义都高频。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The economy bounced up back.', right: 'The economy bounced back.', reason: '恢复用 back，不说 up back。', rule: 'bounce back。', special: 'bounce ideas off sb 拿主意去试探别人的反应。' },
    ],
    quiz: [
      { id: 'bounce.q1', senseId: 'bounce.s1', errorType: 'meaning', type: '词义', prompt: 'The ball bounced. 是：', options: ['球弹起来了', '球裂开了', '球被借走了'], answer: '球弹起来了', explain: '反弹。' },
      { id: 'bounce.q2', senseId: 'bounce.s1', errorType: 'collocation', type: '搭配', prompt: '很快恢复：', options: ['bounce back', 'bounce down', 'bound back a law'], answer: 'bounce back', explain: '固定副词 back。' },
      { id: 'bounce.q3', senseId: 'bounce.s1', errorType: 'meaning', type: '引申', prompt: 'a cheque bounced 是：', options: ['支票被银行退回', '支票在桌上弹起', '支票升值'], answer: '支票被银行退回', explain: '拒付。' },
      { id: 'bounce.q4', senseId: 'bounce.s1', errorType: 'confusable', type: '易混', prompt: '跳跃着前进、不一定撞后弹回，更接近：', options: ['bound', 'bounce only if a ball', 'borrow'], answer: 'bound', explain: 'bound 可指跳跃。bounce 强调弹回。' },
    ],
    usage: { domains: ['日常', '金融口语'], tone: '中性', commonConfusion: ['bound', 'rebound'] },
  });

  D('bound', {
    etymology: {
      origin: '这是一组同形词，不要合成一个词根。be bound to 来自 bind「捆绑」的过去分词；边界义来自古法语 bodne 一类词；跳跃义来自古法语 bondir。',
      prefix: null,
      root: { text: 'bound', gloss: '必定；受约束；边界；跳跃' },
      suffix: null,
      history: [
        { label: 'bind → bound', text: '被绑住，引申为有义务或一定会' },
        { label: '另外两源', text: 'out of bounds 越界；bound down the steps 跳下台阶' },
      ],
      formationLogic: '看到 bound 先看搭配：bound to、bound for、bounds、bound with energy。',
      mnemonic: '绑住了就 bound to 发生；去往某地是 bound for；跳出一步也是 bound。',
      note: 'be bound to do 在现代英语多表示「很可能、肯定会」，不完全等于法律义务。义务更明确时用 be obliged to。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The train is bound for Leeds and will not stop here.', chinese: '这趟火车开往利兹，在这里不停。' },
    ],
    contexts: [
      { domain: '语法', senseId: 'bound.s1', en: 'If you leave the milk out, it is bound to spoil.', zh: '牛奶要是放在外面，肯定会坏。', structure: 'be bound to do', grammar: 'to 后接动词原形。', rationale: '这是四义里最常考的结构。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She is bound for fail.', right: 'She is bound to fail. / The ship is bound for Lisbon.', reason: 'bound for 后接目的地；bound to 后接动词。', rule: '分清 for 与 to。', special: 'by leaps and bounds 飞快地，用复数 bounds。' },
    ],
    quiz: [
      { id: 'bound.q1', senseId: 'bound.s1', errorType: 'collocation', type: '搭配', prompt: '天肯定会下雨：', options: ['It is bound to rain.', 'It is bound for rain as a city.', 'It is bound rain.'], answer: 'It is bound to rain.', explain: 'be bound to do。' },
      { id: 'bound.q2', senseId: 'bound.s1', errorType: 'collocation', type: '搭配', prompt: '开往东京的航班：', options: ['a flight bound for Tokyo', 'a flight bound to Tokyo do', 'a flight bound Tokyo'], answer: 'a flight bound for Tokyo', explain: 'bound for + 地点。' },
      { id: 'bound.q3', senseId: 'bound.s1', errorType: 'meaning', type: '词义', prompt: 'The dog bounded across the yard. 里 bounded 是：', options: ['跳跃着跑过', '被法律约束', '开往院子'], answer: '跳跃着跑过', explain: 'bondir 那一条。' },
      { id: 'bound.q4', senseId: 'bound.s1', errorType: 'confusable', type: '易混', prompt: 'beyond the bounds of the study 里 bounds 是：', options: ['范围、界限', '靴子', '花束'], answer: '范围、界限', explain: '复数表边界。' },
    ],
    usage: { domains: ['语法', '旅行', '书面'], tone: '中性', commonConfusion: ['bind', 'boundary', 'bounce'] },
  });

  D('boundary', {
    etymology: {
      origin: '由表示「地界」的 bound 加 -ary 构成，16世纪起常用，指划出来的界线。',
      prefix: null,
      root: { text: 'bound', gloss: '地界' },
      suffix: { text: '-ary', gloss: '与…相关的事物' },
      history: [
        { label: 'bound 界限', text: '一块地的边缘' },
        { label: 'boundary', text: '地图上的界线，也可指行为的分寸' },
      ],
      formationLogic: '比 border 更强调「被规定出来的限度」，抽象场合很常见：personal boundaries。',
      mnemonic: 'boundary 是一条不准随便跨的线。',
      note: '复数 boundaries。动词用 set / cross / respect a boundary。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The fence marks the boundary of the school grounds.', chinese: '这道篱笆标出了校园的边界。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'boundary.s1', en: 'Good colleagues respect the boundary between work and private life.', zh: '好的同事尊重工作与私人生活之间的界限。', structure: 'the boundary between A and B', grammar: 'between 接被分开的双方。', rationale: '抽象界线是现代阅读高频义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'cross the boundary of rude', right: 'cross the boundary into rudeness / cross a boundary', reason: 'boundary 后不直接加形容词。', rule: 'boundary between / of；cross a boundary。', special: 'push the boundaries 挑战现有限度，常是褒义。' },
    ],
    quiz: [
      { id: 'boundary.q1', senseId: 'boundary.s1', errorType: 'meaning', type: '词义', prompt: 'personal boundaries 是：', options: ['个人分寸和界限', '个人的国境护照', '个人的靴子'], answer: '个人分寸和界限', explain: '抽象限度。' },
      { id: 'boundary.q2', senseId: 'boundary.s1', errorType: 'collocation', type: '搭配', prompt: '工作与休息之间的界线：', options: ['the boundary between work and rest', 'the boundary among work with rest', 'the boundaried of rest'], answer: 'the boundary between work and rest', explain: 'between A and B。' },
      { id: 'boundary.q3', senseId: 'boundary.s1', errorType: 'confusable', type: '易混', prompt: 'push the boundaries of research 是：', options: ['拓展研究的限度', '拆掉实验室的墙', '拒绝做研究'], answer: '拓展研究的限度', explain: '挑战原有边界。' },
      { id: 'boundary.q4', senseId: 'boundary.s1', errorType: 'grammar', type: '复数', prompt: '两条界线：', options: ['two boundaries', 'two boundarys', 'two boundares'], answer: 'two boundaries', explain: 'y 前是辅音，变 ies。' },
    ],
    usage: { domains: ['社会', '地理'], tone: '中性', commonConfusion: ['border', 'limit'] },
  });

  D('bounded', {
    etymology: {
      origin: 'bound（设界）的过去分词作形容词，表示「被限制在一定范围内」。',
      prefix: null,
      root: { text: 'bound', gloss: '立界' },
      suffix: { text: '-ed', gloss: '处于该状态' },
      history: [
        { label: '动词 bound', text: '给…划定界限' },
        { label: 'bounded', text: '有边界的、有限的' },
      ],
      formationLogic: '数学和学术英语里，bounded 表示不会无限变大。地理上 a lake bounded by hills 被山围住。',
      mnemonic: '有 bound 框住，就是 bounded；boundless 则是框没了。',
      note: '不要理解成「正在跳跃的」。跳跃的过去式也写作 bounded，要看主语是数字、区域还是动物。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The park is bounded on the north by the river.', chinese: '公园北面以河为界。' },
    ],
    contexts: [
      { domain: '学术', senseId: 'bounded.s1', en: 'The model assumes a bounded set of choices, not an infinite one.', zh: '这个模型假定选择集合是有界的，不是无限的。', structure: 'a bounded set', grammar: '形容词。', rationale: '学术阅读里的「有界」很常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'A bounded dog always means a dog that must jump.', right: 'The dog bounded away means it leaped; a bounded region has a limit.', reason: '同形要看搭配。', rule: '区域、集合 + bounded 通常是「有界限」。', special: 'bounded by 被…围住或限制。' },
    ],
    quiz: [
      { id: 'bounded.q1', senseId: 'bounded.s1', errorType: 'meaning', type: '词义', prompt: 'a bounded region 是：', options: ['有边界的区域', '无边的区域', '正在跳跃的区域'], answer: '有边界的区域', explain: '有限度。' },
      { id: 'bounded.q2', senseId: 'bounded.s1', errorType: 'collocation', type: '搭配', prompt: '北面以山为界：', options: ['bounded on the north by hills', 'bounded the north at hills', 'boundless on the north'], answer: 'bounded on the north by hills', explain: 'bounded on the ... by。' },
      { id: 'bounded.q3', senseId: 'bounded.s1', errorType: 'confusable', type: '易混', prompt: '没有限度的反义词是：', options: ['boundless', 'bounded', 'boundary'], answer: 'boundless', explain: '-less 取消界限。' },
      { id: 'bounded.q4', senseId: 'bounded.s1', errorType: 'grammar', type: '词性', prompt: '本条作「有限的」时 bounded 是：', options: ['形容词', '介词', '冠词'], answer: '形容词', explain: '分词形容词。' },
    ],
    usage: { domains: ['学术', '地理'], tone: '正式', commonConfusion: ['boundless', 'bound'] },
  });

  D('boundless', {
    etymology: {
      origin: '英语派生：bound（界限）+ -less。',
      prefix: null,
      root: { text: 'bound', gloss: '界限' },
      suffix: { text: '-less', gloss: '没有' },
      history: [
        { label: '字面', text: '没有边界' },
        { label: '褒义夸张', text: 'boundless energy / imagination 精力或想象力似乎无限' },
      ],
      formationLogic: '多用于抽象赞美，真正的地理无限很少用这个日常词。',
      mnemonic: 'less 掉了界限，能量就显得 boundless。',
      note: '语气比 infinite 文学化。科学语境优先用 infinite 或 unbounded。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The child asked questions with boundless curiosity.', chinese: '那孩子以无尽的好奇不停提问。' },
    ],
    contexts: [
      { domain: '写作', senseId: 'boundless.s1', en: 'They described the desert as a place of boundless silence.', zh: '他们把沙漠写成一片无边的寂静。', structure: 'boundless + 抽象名词', grammar: '形容词。', rationale: '搭配能量、耐心、想象力最自然。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a boundless fence', right: 'a boundless sky / a high fence', reason: '篱笆本身就是边界，不能说没有界限的篱笆，除非刻意悖论。', rule: 'boundless 修饰看似无限的事物或品质。', special: '近义词 limitless、endless。' },
    ],
    quiz: [
      { id: 'boundless.q1', senseId: 'boundless.s1', errorType: 'meaning', type: '词义', prompt: 'boundless energy 是：', options: ['仿佛用不完的精力', '被篱笆围住的精力', '刚刚耗尽的精力'], answer: '仿佛用不完的精力', explain: '没有限度。' },
      { id: 'boundless.q2', senseId: 'boundless.s1', errorType: 'confusable', type: '易混', prompt: '数学上「有界集」不是 boundless，而是：', options: ['bounded', 'boundary', 'bouquet'], answer: 'bounded', explain: '有界用 bounded。' },
      { id: 'boundless.q3', senseId: 'boundless.s1', errorType: 'grammar', type: '构词', prompt: '后缀 -less 表示：', options: ['没有', '更多', '两次'], answer: '没有', explain: '否定。' },
      { id: 'boundless.q4', senseId: 'boundless.s1', errorType: 'collocation', type: '搭配', prompt: '哪一个搭配最自然？', options: ['boundless imagination', 'boundless pencil', 'boundless Tuesday'], answer: 'boundless imagination', explain: '抽象品质。' },
    ],
    usage: { domains: ['写作'], tone: '褒义、夸张', commonConfusion: ['bounded', 'endless'] },
  });

  D('bouquet', {
    etymology: {
      origin: '法语 bouquet，与古法语 bosc「树林」有关，原是一小丛树木，后来变成一束花。酒的 bouquet 是香气的比喻。',
      prefix: null,
      root: { text: 'bouquet', gloss: '花束；酒香' },
      suffix: null,
      history: [
        { label: '法语「树丛」', text: '一小簇' },
        { label: '英语', text: '花束；品酒时的香气' },
      ],
      formationLogic: '都是「聚成一簇、一起扑面而来」：花聚成束，香气聚成一团。',
      mnemonic: '婚礼上的 bouquet 是花；酒评里的 bouquet 是香。',
      note: '发音末尾像「开」，重音在后。不要发成 bouquet 每个字母。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He handed her a small bouquet of white roses.', chinese: '他递给她一小束白玫瑰。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bouquet.s1', en: 'The wine has a light bouquet of citrus and herbs.', zh: '这酒有淡淡的柑橘和香草气息。', structure: 'a bouquet of', grammar: 'of 后接花名或香气来源。', rationale: '两义都要认识，阅读里酒香并不罕见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'a bouquet of bricks', right: 'a bouquet of flowers', reason: '花束才用 bouquet，砖块用 pile 或 stack。', rule: 'a bouquet of flowers。', special: '酒香义不加 flowers。' },
    ],
    quiz: [
      { id: 'bouquet.q1', senseId: 'bouquet.s1', errorType: 'meaning', type: '词义', prompt: 'a bouquet of lilies 是：', options: ['一束百合', '一碗百合汤', '一种边界'], answer: '一束百合', explain: '花束。' },
      { id: 'bouquet.q2', senseId: 'bouquet.s1', errorType: 'meaning', type: '引申', prompt: '品酒笔记里的 bouquet 指：', options: ['香气', '酒瓶的重量', '酒的价格'], answer: '香气', explain: '比喻成一束气味。' },
      { id: 'bouquet.q3', senseId: 'bouquet.s1', errorType: 'collocation', type: '搭配', prompt: '一束花：', options: ['a bouquet of flowers', 'a bouquet flowers', 'a flowers of bouquet'], answer: 'a bouquet of flowers', explain: 'of。' },
      { id: 'bouquet.q4', senseId: 'bouquet.s1', errorType: 'confusable', type: '易混', prompt: '不要把 bouquet 当成：', options: ['boutique', 'a bunch of flowers', 'the scent of wine'], answer: 'boutique', explain: 'boutique 是精品店。' },
    ],
    usage: { domains: ['生活', '饮食'], tone: '中性偏雅', commonConfusion: ['boutique', 'bunch'] },
  });

  D('bourgeois', {
    etymology: {
      origin: '法语，来自 bourg「有市场的市镇」，中世纪拉丁语 burgus。原指城里的自由市民，后指中产阶级；批判用法里则指过分看重体面和财产。',
      prefix: null,
      root: { text: 'bourg', gloss: '市镇' },
      suffix: null,
      history: [
        { label: '城镇市民', text: '既非贵族也非农奴的城里人' },
        { label: '现代', text: '中产的，或贬义：市侩、守常规' },
      ],
      formationLogic: '中性时是社会阶层，贬义时是价值观。名词 the bourgeoisie 是这个阶级整体。',
      mnemonic: 'bourg 是镇子；bourgeois 是镇上那种讲究体面的人家，说话时可能带刺。',
      note: '拼写末尾 -geois，发音不把 s 发得很重。阶级整体不要漏 e：bourgeoisie。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The novel mocks bourgeois worries about curtains and status.', chinese: '这部小说取笑中产人家对窗帘和地位的操心。' },
    ],
    contexts: [
      { domain: '阅读', senseId: 'bourgeois.s1', en: 'He rejected what he called bourgeois ideas of success.', zh: '他拒绝他所称的那套中产式成功观。', structure: 'bourgeois ideas of', grammar: '形容词，也可作名词指一个人。', rationale: '阅读理解里常带批判语气。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The whole bourgeois were present as a plural adjective noun mix.', right: 'The bourgeoisie was divided. / Bourgeois voters stayed home.', reason: '阶级总称是 bourgeoisie；bourgeois 是形容词或单个这类人。', rule: '看词尾有没有 -ie。', special: '语气可能冒犯，引用时宜加 called 或 so-called。' },
    ],
    quiz: [
      { id: 'bourgeois.q1', senseId: 'bourgeois.s1', errorType: 'meaning', type: '词义', prompt: '贬义的 bourgeois tastes 接近：', options: ['过分讲究体面的中产趣味', '贵族的法定头衔', '农民的农具'], answer: '过分讲究体面的中产趣味', explain: '常带批判。' },
      { id: 'bourgeois.q2', senseId: 'bourgeois.s1', errorType: 'confusable', type: '易混', prompt: '中产阶级整体称为：', options: ['the bourgeoisie', 'the bouquet', 'the boundary'], answer: 'the bourgeoisie', explain: '名词 -ie。' },
      { id: 'bourgeois.q3', senseId: 'bourgeois.s1', errorType: 'meaning', type: '词源', prompt: 'bourg 原指：', options: ['市镇', '花束', '靴子'], answer: '市镇', explain: '城镇居民。' },
      { id: 'bourgeois.q4', senseId: 'bourgeois.s1', errorType: 'grammar', type: '词性', prompt: 'bourgeois values 里它是：', options: ['形容词', '动词', '介词'], answer: '形容词', explain: '修饰 values。' },
    ],
    usage: { domains: ['社会', '文学'], tone: '常含批判', commonConfusion: ['bourgeoisie'] },
  });

  D('bout', {
    etymology: {
      origin: '与古义 bought「一次弯曲、一个回合」有关，词源上靠近 bow「弯曲」。一个回合、一阵病，都是「这么一段」。',
      prefix: null,
      root: { text: 'bout', gloss: '一阵；一场' },
      suffix: null,
      history: [
        { label: '弯曲、回合', text: '弯过来的一次' },
        { label: '现在', text: 'a bout of flu 一阵病；a boxing bout 一场拳赛' },
      ],
      formationLogic: '时间不长、有头有尾的一段活动或症状。',
      mnemonic: 'bout 是「这么一阵」，病是一阵，比赛也是一轮。',
      note: 'about 的口语缩略有人写成 \'bout，那不是本词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A short bout of rain delayed the start.', chinese: '短短一阵雨推迟了开始时间。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'bout.s1', en: 'He is recovering from a bout of bronchitis.', zh: '他正在从一阵支气管炎中恢复。', structure: 'a bout of + 疾病或活动', grammar: '可数名词。', rationale: 'of 后接那段经历的名称。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a bout flu', right: 'a bout of flu', reason: '中间需要 of。', rule: 'a bout of something。', special: 'boxing 里可直接说 the first bout。' },
    ],
    quiz: [
      { id: 'bout.q1', senseId: 'bout.s1', errorType: 'collocation', type: '搭配', prompt: '一阵咳嗽：', options: ['a bout of coughing', 'a bout coughing', 'a bought of coughing'], answer: 'a bout of coughing', explain: 'of。' },
      { id: 'bout.q2', senseId: 'bout.s1', errorType: 'meaning', type: '词义', prompt: 'a boxing bout 是：', options: ['一场拳赛', '一只拳套', '拳击馆的边界'], answer: '一场拳赛', explain: '一个回合或一场。' },
      { id: 'bout.q3', senseId: 'bout.s1', errorType: 'confusable', type: '易混', prompt: '不要把 bout 拼成：', options: ['about 的全词当它的原形', 'bouts 作为复数', 'a bout of illness'], answer: 'about 的全词当它的原形', explain: 'bout 不是 about 的原形。' },
      { id: 'bout.q4', senseId: 'bout.s1', errorType: 'grammar', type: '复数', prompt: '几阵高烧：', options: ['several bouts of fever', 'several bout of fever', 'several bout\'s fever'], answer: 'several bouts of fever', explain: '复数在 bout 上。' },
    ],
    usage: { domains: ['健康', '体育'], tone: '中性', commonConfusion: ['about', 'battle'] },
  });

  D('boutique', {
    etymology: {
      origin: '法语 boutique「小店」。词源可追溯到希腊语 apothēkē「储藏室」，与 apothecary（药剂师）同一路。',
      prefix: null,
      root: { text: 'boutique', gloss: '精品小店' },
      suffix: null,
      history: [
        { label: '希腊语储藏室', text: '存放货物的地方' },
        { label: '法语小店', text: '卖时装或有设计感的小店铺' },
      ],
      formationLogic: '规模小、风格强，而不是大卖场。也可作定语：a boutique hotel 精品酒店。',
      mnemonic: 'boutique 强调「小而挑过」，不是仓库本身。',
      note: '不要和 bouquet（花束）混淆，只差一个字母的位置和读音。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She opened a boutique selling coats by local designers.', chinese: '她开了一家精品店，卖本地设计师的外套。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'boutique.s1', en: 'The boutique hotel had only twelve rooms, each decorated differently.', zh: '这家精品酒店只有十二个房间，每一间装修都不同。', structure: 'boutique hotel', grammar: '名词作定语，表示小规模、有个性。', rationale: '现代旅行文本里定语用法很常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He bought a boutique of roses.', right: 'He bought a bouquet of roses at the boutique.', reason: '花束是 bouquet；店是 boutique。', rule: 'boutique = shop。', special: 'boutique firm 小型精品事务所，如律所。' },
    ],
    quiz: [
      { id: 'boutique.q1', senseId: 'boutique.s1', errorType: 'meaning', type: '词义', prompt: 'boutique 是：', options: ['精品小店', '花束', '清汤'], answer: '精品小店', explain: '小商店。' },
      { id: 'boutique.q2', senseId: 'boutique.s1', errorType: 'confusable', type: '易混', prompt: '一束玫瑰是：', options: ['a bouquet', 'a boutique', 'a bouillon'], answer: 'a bouquet', explain: '花用 bouquet。' },
      { id: 'boutique.q3', senseId: 'boutique.s1', errorType: 'collocation', type: '搭配', prompt: '房间少而有个性的酒店：', options: ['a boutique hotel', 'a bouquet hotel', 'a bounded hotel'], answer: 'a boutique hotel', explain: '定语用法。' },
      { id: 'boutique.q4', senseId: 'boutique.s1', errorType: 'meaning', type: '词源', prompt: 'boutique 与 apothecary 都连着「存放」，源头是：', options: ['希腊语里的储藏室', '古英语靴子', '荷兰语农夫'], answer: '希腊语里的储藏室', explain: 'apothēkē 这一路。' },
    ],
    usage: { domains: ['商业', '旅行'], tone: '中性偏雅', commonConfusion: ['bouquet'] },
  });

  D('bow', {
    etymology: {
      origin: '鞠躬和弓都来自古英语「弯曲」：动词 būgan，名词 boga。蝴蝶结是后来的形状比喻。读音要分开：鞠躬 /baʊ/，弓和蝴蝶结 /bəʊ/。',
      prefix: null,
      root: { text: 'bow', gloss: '弯曲' },
      suffix: null,
      history: [
        { label: '古英语', text: '弯下身子；弯成弧的武器' },
        { label: '形状', text: '丝带打成的 bow tie、蝴蝶结' },
      ],
      formationLogic: '凡是弯下去的动作或弯成弧的东西，英语都可能写成 bow，靠读音和搭配区分。',
      mnemonic: '/baʊ/ 像「包」：鞠躬。/bəʊ/ 像「播」：弓和蝴蝶结。',
      note: '船头 the bow 也读 /baʊ/，来源是「肩部」一路，本条词表未列，但阅读会碰到。take a bow 是谢幕鞠躬。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The actor bowed and left the stage.', chinese: '演员鞠了一躬，离开了舞台。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'bow.s1', en: 'She tied the ribbon into a neat bow.', zh: '她把丝带打成一个整齐的蝴蝶结。', structure: 'tie something into a bow', grammar: '蝴蝶结读 /bəʊ/。', rationale: '同拼写不同音是记忆重点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He shot the arrow with a bough.', right: 'He shot the arrow with a bow.', reason: '武器是 bow；bough 是树枝。', rule: 'bow /bəʊ/ = weapon or knot。', special: 'bow to pressure 向压力让步，用鞠躬那条引申。' },
    ],
    quiz: [
      { id: 'bow.q1', senseId: 'bow.s1', errorType: 'meaning', type: '词义', prompt: 'take a bow 是：', options: ['鞠躬致谢', '拉开一把弓', '打一个死结'], answer: '鞠躬致谢', explain: '谢幕。' },
      { id: 'bow.q2', senseId: 'bow.s1', errorType: 'confusable', type: '易混', prompt: '树枝不是 bow，而是：', options: ['bough', 'bowl', 'bout'], answer: 'bough', explain: 'bough 才是粗枝。' },
      { id: 'bow.q3', senseId: 'bow.s1', errorType: 'meaning', type: '读音', prompt: '丝带蝴蝶结的 bow 读音同：', options: ['弓 /bəʊ/', '鞠躬 /baʊ/', '牛 /kaʊ/'], answer: '弓 /bəʊ/', explain: '结和武器同音。' },
      { id: 'bow.q4', senseId: 'bow.s1', errorType: 'collocation', type: '搭配', prompt: '向对方的要求让步：', options: ['bow to their demands', 'bow at their demands a knot', 'bowl to their demands'], answer: 'bow to their demands', explain: 'bow to。' },
    ],
    usage: { domains: ['日常', '礼仪'], tone: '中性', commonConfusion: ['bough', 'bowl'] },
  });

  D('bowel', {
    etymology: {
      origin: '中古英语，来自古法语 boel，拉丁语 botellus「小肠状的小香肠」，是 botulus「香肠」的小称。',
      prefix: null,
      root: { text: 'bowel', gloss: '肠' },
      suffix: null,
      history: [
        { label: '拉丁语 botellus', text: '小香肠，形状像肠' },
        { label: '英语', text: '肠；复数 bowels 消化系统，也可文学地表示内部' },
      ],
      formationLogic: '医学上常用复数 the bowels。the bowels of the earth 是文学说法：地球深处。',
      mnemonic: '香肠 botulus 弯弯的，bowel 也是弯弯的管道。',
      note: 'botulism（肉毒中毒）与 botulus 同源，但考试不必展开。单数 a bowel obstruction 肠梗阻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The doctor asked about pain in the lower bowel.', chinese: '医生询问了下肠是否疼痛。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'bowel.s1', en: 'A high-fibre diet can keep the bowels moving regularly.', zh: '高纤维饮食有助于肠道规律蠕动。', structure: 'the bowels', grammar: '生理功能常用复数。', rationale: '单复数都要认。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He tied a bowel in his hair.', right: 'He tied a bow in his hair.', reason: '蝴蝶结是 bow；bowel 是肠。', rule: 'bowel 属于身体。', special: 'bowel cancer 肠癌，使用时语气严肃。' },
    ],
    quiz: [
      { id: 'bowel.q1', senseId: 'bowel.s1', errorType: 'meaning', type: '词义', prompt: 'bowel 是：', options: ['肠', '蝴蝶结', '鞠躬'], answer: '肠', explain: '消化管道。' },
      { id: 'bowel.q2', senseId: 'bowel.s1', errorType: 'grammar', type: '数', prompt: '泛指肠道功能时常说：', options: ['the bowels', 'a bowels', 'bowel as a verb'], answer: 'the bowels', explain: '复数。' },
      { id: 'bowel.q3', senseId: 'bowel.s1', errorType: 'confusable', type: '易混', prompt: '头发上的结是：', options: ['a bow', 'a bowel', 'a bowl'], answer: 'a bow', explain: '少一个 e。' },
      { id: 'bowel.q4', senseId: 'bowel.s1', errorType: 'meaning', type: '引申', prompt: 'the bowels of the ship 在文学里指：', options: ['船的内部深处', '船头的蝴蝶结', '船上的碗'], answer: '船的内部深处', explain: '内部。' },
    ],
    usage: { domains: ['医学'], tone: '中性、临床', commonConfusion: ['bow', 'bowl'] },
  });

  D('bowel movement', {
    etymology: {
      origin: '英语短语：bowel「肠」+ movement「移动、排出」。是较为委婉的医学说法。',
      prefix: null,
      root: { text: 'bowel movement', gloss: '排便' },
      suffix: null,
      history: [
        { label: '临床委婉语', text: '避免直接说粪便' },
        { label: '现在', text: '医生问诊、护理记录里的标准说法' },
      ],
      formationLogic: 'movement 在这里不是体育锻炼，而是肠内容物的排出。可指行为，也可指排出物。',
      mnemonic: '肠在「动」，就是一次排便。',
      note: '缩写 BM 出现在病历里。日常口语还有更直白的说法，课堂用这个短语即可。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The nurse recorded one bowel movement since midnight.', chinese: '护士记录午夜以来有过一次排便。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'bowel movement.s1', en: 'Call the clinic if there is no bowel movement for three days.', zh: '如果三天没有排便，请联系诊所。', structure: 'a bowel movement / no bowel movement', grammar: '可数，一次是 one。', rationale: '委婉但明确，属护理英语。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'Morning exercise is called a bowel movement in sports class.', right: 'In sport you say movement or exercise; a bowel movement is passing waste.', reason: '这个短语在医学语境有固定所指。', rule: '不要按字面理解成肠部体操。', special: 'have / pass a bowel movement 都可以。' },
    ],
    quiz: [
      { id: 'bowel movement.q1', senseId: 'bowel movement.s1', errorType: 'meaning', type: '词义', prompt: 'bowel movement 是：', options: ['排便', '肠道的晨练', '搬动碗柜'], answer: '排便', explain: '临床委婉语。' },
      { id: 'bowel movement.q2', senseId: 'bowel movement.s1', errorType: 'grammar', type: '数', prompt: '两次应说：', options: ['two bowel movements', 'two bowels movement', 'bowel movement twice nouns'], answer: 'two bowel movements', explain: '复数加在 movement 上。' },
      { id: 'bowel movement.q3', senseId: 'bowel movement.s1', errorType: 'collocation', type: '搭配', prompt: '病历里「有过一次」：', options: ['had a bowel movement', 'did a sport movement of bowel gym', 'bowelled a movement'], answer: 'had a bowel movement', explain: 'have a bowel movement。' },
      { id: 'bowel movement.q4', senseId: 'bowel movement.s1', errorType: 'context', type: '语域', prompt: '这个短语最常见于：', options: ['医疗和护理', '球类比赛记分', '航海口令'], answer: '医疗和护理', explain: '问诊用语。' },
    ],
    usage: { domains: ['医学'], tone: '委婉、临床', commonConfusion: ['movement', 'bow'] },
  });

  D('bowl', {
    etymology: {
      origin: '古英语 bolla，指圆而深的杯或碗。',
      prefix: null,
      root: { text: 'bowl', gloss: '碗' },
      suffix: null,
      history: [
        { label: '古英语 bolla', text: '圆形容器' },
        { label: '引申', text: '一碗的量；碗状的体育场 the bowl；动词 bowling 滚球' },
      ],
      formationLogic: '形状是深、圆、敞口。a bowl of rice 中间要 of。',
      mnemonic: 'bowl 能盛汤；bow 不能。多一个 l，就装得下食物。',
      note: '动词 bowl 在板球里是投球。本条以容器义为主。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She set a bowl of soup in front of each guest.', chinese: '她在每位客人面前放了一碗汤。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'bowl.s1', en: 'Mix the eggs in a large bowl before you add the flour.', zh: '加面粉之前先在大碗里把鸡蛋搅匀。', structure: 'in a bowl', grammar: '可数名词。', rationale: '与 bow 的拼写差别要反复确认。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'a bow of rice', right: 'a bowl of rice', reason: '碗有 l。bow 是弓或鞠躬。', rule: 'bowl = dish。', special: 'dust bowl 是沙尘旱区，专名式比喻。' },
    ],
    quiz: [
      { id: 'bowl.q1', senseId: 'bowl.s1', errorType: 'meaning', type: '词义', prompt: 'a bowl of noodles 是：', options: ['一碗面条', '一个鞠躬', '一根树枝'], answer: '一碗面条', explain: '容器。' },
      { id: 'bowl.q2', senseId: 'bowl.s1', errorType: 'confusable', type: '易混', prompt: '少一个 l 的 bow 不是碗，而是：', options: ['弓或鞠躬', '巨石', '边界'], answer: '弓或鞠躬', explain: '拼写差一个字母。' },
      { id: 'bowl.q3', senseId: 'bowl.s1', errorType: 'collocation', type: '搭配', prompt: '一碗米饭：', options: ['a bowl of rice', 'a bowl rice', 'a rice of bowl'], answer: 'a bowl of rice', explain: 'of。' },
      { id: 'bowl.q4', senseId: 'bowl.s1', errorType: 'grammar', type: '复数', prompt: '三个碗：', options: ['three bowls', 'three bowl', 'three bowles'], answer: 'three bowls', explain: '加 s。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['bow', 'bawl'] },
  });

  D('box', {
    etymology: {
      origin: '容器义来自拉丁语 buxus「黄杨木」，早期盒子用黄杨木制成。用拳头打的 box 是另一路较晚的用法，词源不宜硬并。',
      prefix: null,
      root: { text: 'box', gloss: '盒子；拳击' },
      suffix: null,
      history: [
        { label: '拉丁语 buxus', text: '黄杨，再指木盒' },
        { label: '运动', text: 'box 以拳相击；a box on the ear 打一耳光，较旧' },
      ],
      formationLogic: '方形容器是基本义。动词可以是装盒，也可以是拳击，靠宾语区分。',
      mnemonic: '能盖上盖子的是 box；伸出拳头的也写成 box，要看句子。',
      note: 'think outside the box 跳出陈规。a black box 可以是飞行记录器，不一定是黑色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The spare cables are in the box under the desk.', chinese: '备用线缆在书桌下面的盒子里。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'box.s1', en: 'They boxed the glasses carefully before the move.', zh: '搬家前他们把玻璃杯仔细装进盒子。', structure: 'box + 物品', grammar: '动词「装盒」为及物。', rationale: '容器义优先，拳击义靠语境。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a box pens', right: 'a box of pens', reason: '数量关系用 of。', rule: 'a box of something。', special: 'box sb in 把人困住，是比喻。' },
    ],
    quiz: [
      { id: 'box.q1', senseId: 'box.s1', errorType: 'collocation', type: '搭配', prompt: '一盒回形针：', options: ['a box of clips', 'a box clips', 'a clips of box'], answer: 'a box of clips', explain: 'of。' },
      { id: 'box.q2', senseId: 'box.s1', errorType: 'meaning', type: '词义', prompt: 'learn to box 最可能是：', options: ['学拳击', '学做盒子', '学黄杨木分类'], answer: '学拳击', explain: '动词另一义。' },
      { id: 'box.q3', senseId: 'box.s1', errorType: 'meaning', type: '习语', prompt: 'think outside the box 是：', options: ['打破惯常思路', '在盒子外面思考天气', '把盒子寄走'], answer: '打破惯常思路', explain: '固定比喻。' },
      { id: 'box.q4', senseId: 'box.s1', errorType: 'confusable', type: '易混', prompt: '公牛不是 box，而是：', options: ['ox', 'box', 'books'], answer: 'ox', explain: 'ox 牛。' },
    ],
    usage: { domains: ['日常', '体育'], tone: '中性', commonConfusion: ['ox', 'pack'] },
  });

  D('boxer', {
    etymology: {
      origin: 'box（拳击）+ -er，指拳击手。同名狗品种因脸形略像拳击手而得名。',
      prefix: null,
      root: { text: 'box', gloss: '拳击' },
      suffix: { text: '-er', gloss: '做该动作的人' },
      history: [
        { label: '运动', text: '从事拳击的人' },
        { label: '犬种', text: 'boxer 拳师犬，词形相同' },
      ],
      formationLogic: '-er 表人。狗的含义靠语境，不能从后缀直接看出。',
      mnemonic: '人是戴手套的 boxer，狗是短毛的 boxer。',
      note: 'boxers 还可指平角内裤，又是一个常见义，本条词表未列，但阅读会遇到。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The young boxer trains before sunrise.', chinese: '这位年轻拳击手日出前就训练。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'boxer.s1', en: 'A heavyweight boxer entered the ring to loud applause.', zh: '一位重量级拳击手在响亮的掌声中走进拳台。', structure: 'a heavyweight boxer', grammar: '可数名词。', rationale: '运动义是词表第一义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'A boxer must be a person who makes boxes.', right: 'A boxer fights with gloved fists, or is a breed of dog.', reason: '词干取拳击义，不是制盒工人。', rule: '制盒不是 boxer 的常规义。', special: 'in the ring 提示是运动员。' },
    ],
    quiz: [
      { id: 'boxer.q1', senseId: 'boxer.s1', errorType: 'meaning', type: '词义', prompt: '本条 boxer 首先是：', options: ['拳击手', '制盒工人', '黄杨树'], answer: '拳击手', explain: '运动。' },
      { id: 'boxer.q2', senseId: 'boxer.s1', errorType: 'meaning', type: '一词多义', prompt: 'Our boxer barked all night. 里多半是：', options: ['拳师犬', '拳击手在叫', '一只盒子'], answer: '拳师犬', explain: 'bark 提示是狗。' },
      { id: 'boxer.q3', senseId: 'boxer.s1', errorType: 'grammar', type: '构词', prompt: '-er 这里表示：', options: ['从事该活动的人', '比较级', '过去式'], answer: '从事该活动的人', explain: '施事后缀。' },
      { id: 'boxer.q4', senseId: 'boxer.s1', errorType: 'collocation', type: '搭配', prompt: '走进拳台：', options: ['enter the ring', 'enter the bowl', 'enter the bough'], answer: 'enter the ring', explain: 'ring 拳台。' },
    ],
    usage: { domains: ['体育', '生活'], tone: '中性', commonConfusion: ['boxing', 'box'] },
  });

  D('boxful', {
    etymology: {
      origin: '英语派生：box + -ful，表示一满盒的量。',
      prefix: null,
      root: { text: 'box', gloss: '盒' },
      suffix: { text: '-ful', gloss: '满满的一…之量' },
      history: [
        { label: 'box', text: '容器' },
        { label: 'boxful', text: '把容器装满后的那一份量' },
      ],
      formationLogic: '同 armful、handful、mouthful。-ful 在这里是名词后缀，不是形容词 full。',
      mnemonic: 'full 满；-ful 贴在容器后，变成「一满盒」。',
      note: '复数一般是 boxfuls。书面也可见 boxes full of，意思更松。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We carried a boxful of letters up to the archive.', chinese: '我们搬了一满盒信件到档案室。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'boxful.s1', en: 'A boxful of old photographs slipped off the shelf.', zh: '一满盒旧照片从架子上滑了下来。', structure: 'a boxful of', grammar: '量词名词，of 后接内容。', rationale: '与 a box of 接近，但强调「满」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'a box fulls of nails', right: 'a boxful of nails / a box full of nails', reason: '要么用后缀 -ful 构成名词，要么用形容词 full，不要混成 fulls。', rule: 'boxful of；box full of。', special: '复数 boxfuls of apples。' },
    ],
    quiz: [
      { id: 'boxful.q1', senseId: 'boxful.s1', errorType: 'meaning', type: '词义', prompt: 'a boxful 是：', options: ['一满盒的量', '一只空盒', '制盒的人'], answer: '一满盒的量', explain: '-ful 表量。' },
      { id: 'boxful.q2', senseId: 'boxful.s1', errorType: 'grammar', type: '构词', prompt: '与 boxful 同类的是：', options: ['handful', 'carefully', 'fully'], answer: 'handful', explain: '都是「一满…」。' },
      { id: 'boxful.q3', senseId: 'boxful.s1', errorType: 'collocation', type: '搭配', prompt: '一满盒钉子：', options: ['a boxful of nails', 'a boxful nails', 'a nails boxful'], answer: 'a boxful of nails', explain: 'of。' },
      { id: 'boxful.q4', senseId: 'boxful.s1', errorType: 'grammar', type: '复数', prompt: '较常见的复数是：', options: ['boxfuls', 'boxfulves', 'boxesful only in this textbook as the sole form'], answer: 'boxfuls', explain: '在词尾加 s。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['box', 'full'] },
  });

  D('boxing', {
    etymology: {
      origin: '由拳击义的 box 加 -ing，成为这项运动的名称。',
      prefix: null,
      root: { text: 'box', gloss: '以拳相击' },
      suffix: { text: '-ing', gloss: '活动、运动项目' },
      history: [
        { label: '动词 box', text: '挥拳' },
        { label: 'boxing', text: '有规则的拳击运动' },
      ],
      formationLogic: '运动名常常是动词 -ing：swimming、wrestling、boxing。',
      mnemonic: 'boxing 是项目；box 一下是动作；boxer 是人。',
      note: 'boxing day 是英国节礼日，词源与圣诞礼物盒有关，不是拳击日。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Boxing demands footwork as much as a strong punch.', chinese: '拳击对步法的要求和重拳一样高。' },
    ],
    contexts: [
      { domain: '体育', senseId: 'boxing.s1', en: 'She took up boxing to get fit, not to compete.', zh: '她开始练拳击是为了健身，不是为了参赛。', structure: 'take up boxing', grammar: '运动名不可数。', rationale: '与 Boxing Day 区分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'Boxing Day is the final match of the boxing season by definition.', right: 'Boxing Day is a holiday on 26 December, named from Christmas boxes, not from the sport.', reason: '节日名和运动同形不同来源。', rule: '看到 Day 先想到节日。', special: 'a boxing glove 拳击手套。' },
    ],
    quiz: [
      { id: 'boxing.q1', senseId: 'boxing.s1', errorType: 'meaning', type: '词义', prompt: '本条 boxing 是：', options: ['拳击运动', '装箱工作的唯一义', '黄杨树林'], answer: '拳击运动', explain: '运动名。' },
      { id: 'boxing.q2', senseId: 'boxing.s1', errorType: 'grammar', type: '数', prompt: 'Boxing _____ popular at that gym.', options: ['is', 'are', 'be'], answer: 'is', explain: '运动名单数。' },
      { id: 'boxing.q3', senseId: 'boxing.s1', errorType: 'context', type: '语域', prompt: 'Boxing Day 是：', options: ['12月26日的节日', '拳击赛季决赛的法定名称', '装盒的日子'], answer: '12月26日的节日', explain: '与礼物盒相关的节日名。' },
      { id: 'boxing.q4', senseId: 'boxing.s1', errorType: 'collocation', type: '搭配', prompt: '拳击手套：', options: ['boxing gloves', 'boxer bowls', 'boxed boughs'], answer: 'boxing gloves', explain: 'glove 手套。' },
    ],
    usage: { domains: ['体育'], tone: '中性', commonConfusion: ['boxer', 'Boxing Day'] },
  });

  D('boy', {
    etymology: {
      origin: '中古英语已有 boy。更早来源仍有争议，不编造一个确定的古典词根。',
      prefix: null,
      root: { text: 'boy', gloss: '男孩' },
      suffix: null,
      history: [
        { label: '中古英语', text: '男孩、年轻仆人等用法都出现过' },
        { label: '现在', text: '男性儿童；也可亲密地称儿子' },
      ],
      formationLogic: '相对 girl。长大后的正式称呼用 man。boy 叫成年陌生人可能冒犯。',
      mnemonic: 'boy 小，man 成年。对成年男性不要随口 boy。',
      note: 'oh boy 是感叹，不指具体孩子。boyfriend 是恋爱对象，年龄不一定小。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The boy waited for his father by the school gate.', chinese: '男孩在校门口等父亲。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'boy.s1', en: 'As a boy he spent summers at his uncle\'s farm.', zh: '他小时候夏天都在叔叔的农场过。', structure: 'as a boy', grammar: '可数名词。', rationale: 'as a boy 等于 when he was a boy。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The manager addressed the fifty-year-old client as boy in a formal letter.', right: 'Use the client\'s name or sir; boy for an adult is disrespectful.', reason: '词义是儿童，叫成年人带有贬低。', rule: 'boy 用于孩子或明确的亲密关系。', special: 'newsboy 等复合词是旧职业名。' },
    ],
    quiz: [
      { id: 'boy.q1', senseId: 'boy.s1', errorType: 'meaning', type: '词义', prompt: 'boy 的核心意思是：', options: ['男孩', '父亲', '女孩'], answer: '男孩', explain: '男性儿童。' },
      { id: 'boy.q2', senseId: 'boy.s1', errorType: 'confusable', type: '易混', prompt: '成年男性正式称：', options: ['a man', 'a boy always', 'a buoy'], answer: 'a man', explain: 'buoy 是浮标。' },
      { id: 'boy.q3', senseId: 'boy.s1', errorType: 'grammar', type: '复数', prompt: '复数是：', options: ['boys', 'boies', 'boyes'], answer: 'boys', explain: '加 s。' },
      { id: 'boy.q4', senseId: 'boy.s1', errorType: 'context', type: '语域', prompt: 'Oh boy! 多半是：', options: ['感叹，不是在叫某个孩子', '点名一个男孩', '正式头衔'], answer: '感叹，不是在叫某个孩子', explain: '语气词。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['man', 'buoy'] },
  });

  D('boycott', {
    etymology: {
      origin: '源自人名。1880年爱尔兰土地争议中，庄园经纪人 Charles Boycott 被社区集体孤立、拒绝与他交易，他的姓变成了这个动词。',
      prefix: null,
      root: { text: 'Boycott', gloss: '人名，后成为抵制' },
      suffix: null,
      history: [
        { label: '1880', text: '社区拒绝跟 Boycott 往来' },
        { label: '现在', text: '有组织地拒绝购买、参加或合作以示抗议' },
      ],
      formationLogic: '人名变成行为。可以是名词 a boycott，也可以是动词 boycott a product。',
      mnemonic: '记住是「大家一起不跟他做生意」，而不是口头批评而已。',
      note: '拼写两个 t。抗议信、请愿不一定构成 boycott，关键是拒绝参与或拒绝购买。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Customers boycotted the brand after the scandal.', chinese: '丑闻之后，顾客抵制了这个品牌。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'boycott.s1', en: 'Several schools joined the boycott of the tournament.', zh: '几所学校加入了对该锦标赛的抵制。', structure: 'a boycott of something', grammar: '名词 of；动词直接加宾语。', rationale: '名词与动词同形。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They boycotted against the company.', right: 'They boycotted the company.', reason: 'boycott 是及物动词，不加 against。', rule: 'boycott something。against 留给 protest against。', special: 'call for a boycott of sth 号召抵制。' },
    ],
    quiz: [
      { id: 'boycott.q1', senseId: 'boycott.s1', errorType: 'meaning', type: '词义', prompt: 'boycott a meeting 是：', options: ['抵制、拒不参加这次会议', '主持会议', '把会议录音'], answer: '抵制、拒不参加这次会议', explain: '拒绝参与以示抗议。' },
      { id: 'boycott.q2', senseId: 'boycott.s1', errorType: 'grammar', type: '句法', prompt: '哪句正确？', options: ['They boycotted the shop.', 'They boycotted against the shop.', 'They boycottment the shop.'], answer: 'They boycotted the shop.', explain: '直接宾语。' },
      { id: 'boycott.q3', senseId: 'boycott.s1', errorType: 'meaning', type: '词源', prompt: 'boycott 来自：', options: ['一个人的姓', '法语花束', '拉丁语盒子'], answer: '一个人的姓', explain: 'Charles Boycott。' },
      { id: 'boycott.q4', senseId: 'boycott.s1', errorType: 'collocation', type: '搭配', prompt: '对某产品的抵制：', options: ['a boycott of the product', 'a boycott againstly the product', 'a boycott to product'], answer: 'a boycott of the product', explain: '名词用 of。' },
    ],
    usage: { domains: ['新闻', '社会'], tone: '严肃', commonConfusion: ['protest', 'embargo'] },
  });

  D('brace', {
    etymology: {
      origin: '古法语 brace「两臂」，拉丁语 bracchia，是 bracchium「手臂」的复数。两臂能抱住、撑住，所以 brace 变成支撑；brace yourself 是让自己站稳。',
      prefix: null,
      root: { text: 'brace', gloss: '手臂；支撑' },
      suffix: null,
      history: [
        { label: '拉丁语「手臂」', text: '成双的臂' },
        { label: '英语', text: '支架、牙箍；brace for 为冲击做准备' },
      ],
      formationLogic: '凡是把东西固定住、或把身体绷住迎接冲击，都可以用 brace。',
      mnemonic: '用手臂撑住：先是支架，再是心理上的 brace yourself。',
      note: 'a brace of 旧用法表示「一对」。牙套常用复数 braces。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Brace yourself: the next section of the road is very rough.', chinese: '做好准备，下一段路非常颠。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'brace.s1', en: 'Engineers braced the old wall with steel beams.', zh: '工程师用钢梁把旧墙撑住。', structure: 'brace something with something', grammar: '及物。brace for + 名词也很常见。', rationale: '具体支撑和心理准备要一起记。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Brace yourself to the news.', right: 'Brace yourself for the news.', reason: '准备承受用 for，不用 to。', rule: 'brace oneself for sth。', special: 'wear braces 戴牙箍。' },
    ],
    quiz: [
      { id: 'brace.q1', senseId: 'brace.s1', errorType: 'collocation', type: '搭配', prompt: '准备好面对坏消息：', options: ['Brace yourself for bad news.', 'Brace yourself to bad news.', 'Brace for you bad news.'], answer: 'Brace yourself for bad news.', explain: 'brace oneself for。' },
      { id: 'brace.q2', senseId: 'brace.s1', errorType: 'meaning', type: '词义', prompt: 'a neck brace 是：', options: ['颈部支架', '颈部的弓', '一句勇敢的话'], answer: '颈部支架', explain: '支撑物。' },
      { id: 'brace.q3', senseId: 'brace.s1', errorType: 'confusable', type: '易混', prompt: '牙箍常说：', options: ['braces', 'brackets only in British buildings', 'bouquets'], answer: 'braces', explain: '复数 braces。' },
      { id: 'brace.q4', senseId: 'brace.s1', errorType: 'meaning', type: '词源', prompt: 'brace 与拉丁语「手臂」有关，所以核心形象是：', options: ['撑住、抱住', '煮沸', '钻孔'], answer: '撑住、抱住', explain: '手臂的力量。' },
    ],
    usage: { domains: ['工程', '口语'], tone: '中性', commonConfusion: ['bracket', 'embrace'] },
  });

  D('bracket', {
    etymology: {
      origin: '16世纪英语。建筑上突出的托架与后来印刷里成对的括号是同一「从旁边支出来、把东西框住」的形象。更早词形细节不硬编。',
      prefix: null,
      root: { text: 'bracket', gloss: '括号；档次；托架' },
      suffix: null,
      history: [
        { label: '托架', text: '墙上支出来的支撑' },
        { label: '符号与分组', text: '括号；年龄或收入的一档；bracket A with B 把二者归入一类' },
      ],
      formationLogic: '括号把字框住，分组把人框进同一范围。动词是「归入」。',
      mnemonic: 'bracket 像两只手臂把一档人括在一起。',
      note: '英式英语里 ( ) 常叫 brackets，美式常叫 parentheses；[ ] 才是美式 brackets。考试看到符号要看是哪国英语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Put the translation in brackets after the original sentence.', chinese: '把译文用括号括在原句后面。' },
    ],
    contexts: [
      { domain: '社会', senseId: 'bracket.s1', en: 'Most of the applicants fall into the same age bracket.', zh: '大多数申请者落在同一个年龄段。', structure: 'age / income / tax bracket', grammar: '名词，可数。', rationale: '分组义在新闻里极常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'the age bracketing of 20', right: 'the 20 to 30 age bracket', reason: '档次用名词 bracket，前面加年龄范围。', rule: 'the 18–25 age bracket。', special: 'bracket A and B together 把 A 和 B 归并讨论。' },
    ],
    quiz: [
      { id: 'bracket.q1', senseId: 'bracket.s1', errorType: 'meaning', type: '词义', prompt: 'tax bracket 是：', options: ['纳税等级', '税务括号这个符号本身', '税单上的靴子'], answer: '纳税等级', explain: '收入分档。' },
      { id: 'bracket.q2', senseId: 'bracket.s1', errorType: 'collocation', type: '搭配', prompt: '写在括号里：', options: ['in brackets', 'at brackets', 'on bracket'], answer: 'in brackets', explain: 'in brackets。' },
      { id: 'bracket.q3', senseId: 'bracket.s1', errorType: 'grammar', type: '动词', prompt: 'Don\'t bracket beginners with experts. 是：', options: ['不要把新手和专家归成一类', '不要给新手发括号', '不要支撑专家'], answer: '不要把新手和专家归成一类', explain: '动词「归类」。' },
      { id: 'bracket.q4', senseId: 'bracket.s1', errorType: 'confusable', type: '易混', prompt: '牙箍更常见的词是：', options: ['braces', 'brackets as the only medical term', 'bouts'], answer: 'braces', explain: 'brace 那一条。墙上托架才常叫 bracket。' },
    ],
    usage: { domains: ['写作', '新闻'], tone: '中性', commonConfusion: ['brace', 'parentheses'] },
  });

  D('brag', {
    etymology: {
      origin: '中古英语已有这个词，更早来源不明确，不编造词根。意思一直靠近「说大话」。',
      prefix: null,
      root: { text: 'brag', gloss: '吹嘘' },
      suffix: null,
      history: [
        { label: '中古英语', text: '夸口' },
        { label: '现在', text: 'brag about sth 吹嘘某事' },
      ],
      formationLogic: '不及物为主，内容用 about。名词 bragging 是行为。',
      mnemonic: 'brag 只把自己说高，并不真的把事情做高。做高是 boost。',
      note: '形容词 boastful 或 a braggart 指爱吹的人。brag 比 boast 更口语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He bragged about a prize he had not actually won.', chinese: '他吹嘘一个自己其实没拿到的奖。' },
    ],
    contexts: [
      { domain: '口语', senseId: 'brag.s1', en: 'There is no need to brag about a single lucky goal.', zh: '没必要为一次侥幸进球自夸。', structure: 'brag about something', grammar: 'about 后接吹嘘的内容。', rationale: '介词是易错点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She bragged her score.', right: 'She bragged about her score.', reason: '标准搭配要 about。', rule: 'brag about sth。', special: 'boast 同样常用 boast about，也可较书面地 boast that。' },
    ],
    quiz: [
      { id: 'brag.q1', senseId: 'brag.s1', errorType: 'collocation', type: '搭配', prompt: '吹嘘新工作：', options: ['brag about the new job', 'brag the new job', 'brag at the new job to'], answer: 'brag about the new job', explain: 'about。' },
      { id: 'brag.q2', senseId: 'brag.s1', errorType: 'confusable', type: '易混', prompt: '把销量真正提高是：', options: ['boost', 'brag', 'brace'], answer: 'boost', explain: 'brag 只是嘴上说。' },
      { id: 'brag.q3', senseId: 'brag.s1', errorType: 'meaning', type: '词义', prompt: 'brag 的语气是：', options: ['贬义，自夸', '中性的报告', '法律义务'], answer: '贬义，自夸', explain: '说大话。' },
      { id: 'brag.q4', senseId: 'brag.s1', errorType: 'grammar', type: '词形', prompt: '过去式是：', options: ['bragged', 'brag', 'broge'], answer: 'bragged', explain: '规则动词，末尾 g 双写。' },
    ],
    usage: { domains: ['口语'], tone: '贬义', commonConfusion: ['boast', 'boost'] },
  });

  D('brain', {
    etymology: {
      origin: '古英语 brægen，指头颅里的那一团器官。',
      prefix: null,
      root: { text: 'brain', gloss: '脑' },
      suffix: null,
      history: [
        { label: '古英语', text: '大脑这一器官' },
        { label: '引申', text: '智力；the brains of the team 出主意的人；brain sb 重击头部，较口语' },
      ],
      formationLogic: '器官义是本义。说某人有 brains 常用复数表示头脑。',
      mnemonic: 'brain 在头里；有 brains 就是有主意。',
      note: 'brainchild 某人的构想。brainstorm 集思或突然一念。on the brain 老想着某事。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The scan showed no injury to the brain.', chinese: '扫描显示大脑没有损伤。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'brain.s1', en: 'She is the brains behind the whole project.', zh: '整个项目背后出主意的人是她。', structure: 'the brains behind', grammar: '复数形式可指一个人的智力作用。', rationale: '器官与智力两义都常见。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He has a good brain of maths.', right: 'He has a good brain for maths. / He is good at maths.', reason: '能力倾向用 for，不用 of。', rule: 'a brain for something。', special: 'rack one\'s brains 绞尽脑汁。' },
    ],
    quiz: [
      { id: 'brain.q1', senseId: 'brain.s1', errorType: 'meaning', type: '词义', prompt: 'the brains behind the plan 是：', options: ['策划者', '计划书的纸张', '计划的失败'], answer: '策划者', explain: '出主意的人。' },
      { id: 'brain.q2', senseId: 'brain.s1', errorType: 'collocation', type: '搭配', prompt: '绞尽脑汁：', options: ['rack one\'s brains', 'rack one\'s braines', 'break one\'s bowl'], answer: 'rack one\'s brains', explain: '固定复数。' },
      { id: 'brain.q3', senseId: 'brain.s1', errorType: 'confusable', type: '易混', prompt: '头盖骨不是 brain，更接近：', options: ['skull', 'brain', 'brane'], answer: 'skull', explain: 'skull 是骨，brain 是组织。' },
      { id: 'brain.q4', senseId: 'brain.s1', errorType: 'grammar', type: '数', prompt: '表示「很有头脑」常说：', options: ['have brains', 'have a braines', 'be a brain verb'], answer: 'have brains', explain: '复数表智力。' },
    ],
    usage: { domains: ['生物', '口语'], tone: '中性', commonConfusion: ['mind', 'skull'] },
  });

  D('brake', {
    etymology: {
      origin: '车辆制动器这一义在近代英语里定型，概念上就是把运动「截住」。更早也可能与压碎亚麻的荷兰语工具名有关。细节存疑处不编死。',
      prefix: null,
      root: { text: 'brake', gloss: '刹车' },
      suffix: null,
      history: [
        { label: '截住运动', text: '使轮子慢下来的装置' },
        { label: '动词', text: 'brake hard 猛踩刹车' },
      ],
      formationLogic: '名词是装置，动词是动作。和 break「弄碎、打破」拼写只差一个元音，意思不同。',
      mnemonic: 'brake 里有 a，像踩下那一脚；break 是断掉。',
      note: 'a brake 可数。handbrake 手刹。brake fluid 制动液。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She hit the brakes when a dog ran into the road.', chinese: '一条狗跑上马路时，她猛地踩了刹车。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'brake.s1', en: 'The rear brakes were worn and had to be replaced.', zh: '后刹车磨损了，必须更换。', structure: 'hit the brakes', grammar: '口语常用复数 brakes 指整套制动。', rationale: '与 break 的最小对立是考试重点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He broke suddenly at the red light.', right: 'He braked suddenly at the red light.', reason: '刹车是 brake。broke 是 break 的过去式，表示弄断或打碎。', rule: 'brake / braked / braking 车辆减速。', special: 'a break 还可以是休息，更不是刹车。' },
    ],
    quiz: [
      { id: 'brake.q1', senseId: 'brake.s1', errorType: 'confusable', type: '易混', prompt: '红灯前停住车：', options: ['brake', 'break', 'brook'], answer: 'brake', explain: '制动。' },
      { id: 'brake.q2', senseId: 'brake.s1', errorType: 'collocation', type: '搭配', prompt: '猛踩刹车：', options: ['hit the brakes', 'hit the breaks', 'beat the brake of law'], answer: 'hit the brakes', explain: 'brakes 复数。' },
      { id: 'brake.q3', senseId: 'brake.s1', errorType: 'grammar', type: '词形', prompt: 'brake 的过去式是：', options: ['braked', 'broke', 'broken'], answer: 'braked', explain: '不要用 break 的不规则变化。' },
      { id: 'brake.q4', senseId: 'brake.s1', errorType: 'meaning', type: '词义', prompt: 'brake fluid 是：', options: ['制动液', '休息用的饮料', '破碎的液体'], answer: '制动液', explain: '刹车系统里的油液。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['break'] },
  });

  D('branch', {
    etymology: {
      origin: '中古英语，来自古法语 branche，晚期拉丁语 branca「爪子」。树枝分岔的样子被比成爪子伸开。',
      prefix: null,
      root: { text: 'branch', gloss: '分支' },
      suffix: null,
      history: [
        { label: '拉丁语 branca', text: '爪、分岔' },
        { label: '英语', text: '树枝；公司分部；学科分支；branch out 拓展' },
      ],
      formationLogic: '从一个主干分出去的都是 branch：树、河、机构、知识。',
      mnemonic: '爪子往外叉，branch 从主干往外叉。',
      note: 'branch of a bank 分行。branch out into 开始做新的一类业务。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Our local branch closes at four on Fridays.', chinese: '我们当地的分行星期五四点关门。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'branch.s1', en: 'The firm will branch out into online courses next year.', zh: '公司明年将把业务扩展到在线课程。', structure: 'branch out into', grammar: '不及物短语，into 接新领域。', rationale: '机构义比树枝义更常考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a branch for the bank in Leeds as the only pattern', right: 'a branch of the bank in Leeds', reason: '所属关系用 of。', rule: 'a branch of an organisation。', special: 'olive branch 橄榄枝，比喻和解。' },
    ],
    quiz: [
      { id: 'branch.q1', senseId: 'branch.s1', errorType: 'meaning', type: '词义', prompt: 'a branch of medicine 是：', options: ['医学的一个分支', '医院的一棵树', '医学的边界'], answer: '医学的一个分支', explain: '学科分岔。' },
      { id: 'branch.q2', senseId: 'branch.s1', errorType: 'collocation', type: '搭配', prompt: '开始做新业务：', options: ['branch out into', 'branch up at', 'branch of into'], answer: 'branch out into', explain: 'out into。' },
      { id: 'branch.q3', senseId: 'branch.s1', errorType: 'confusable', type: '易混', prompt: '更文学、更粗的一根树枝是：', options: ['bough', 'brand', 'brace'], answer: 'bough', explain: 'bough 偏文学。' },
      { id: 'branch.q4', senseId: 'branch.s1', errorType: 'meaning', type: '习语', prompt: 'offer an olive branch 是：', options: ['表示愿意和解', '提供一家银行分行', '折断一根树枝'], answer: '表示愿意和解', explain: '橄榄枝。' },
    ],
    usage: { domains: ['商业', '自然'], tone: '中性', commonConfusion: ['bough', 'department'] },
  });

  D('brand', {
    etymology: {
      origin: '古英语 brand「燃烧的木头」。用来烫印牲畜或货物后，变成「烙印」，再变成现代的商标、品牌。',
      prefix: null,
      root: { text: 'brand', gloss: '燃烧的木；标记' },
      suffix: null,
      history: [
        { label: '火印', text: '烧红的木头留下的永久标记' },
        { label: '商业', text: 'brand name 品牌；动词 brand sb a liar 给某人打上某种标签' },
      ],
      formationLogic: '能被认出来的标记，从皮肉上的烙印变成包装上的名字，也能变成名誉上的污名。',
      mnemonic: 'brand 最初会烫人。品牌就是让人一眼认出的那块「印」。',
      note: 'brand-new 见下条，原意是刚出炉的新。brand sb as 给某人定性，常为负面。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The brand is known more for its service than for low prices.', chinese: '这个品牌出名的是服务，而不是低价。' },
    ],
    contexts: [
      { domain: '商业', senseId: 'brand.s1', en: 'They branded the new line with a simple black logo.', zh: '他们用一个简单的黑色标志给新系列做了品牌标识。', structure: 'brand something with', grammar: '动词可指打上商业标记。', rationale: '商业义和「扣帽子」要分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'This brand-new scandal branded the company as honest.', right: 'The scandal branded the company as careless.', reason: 'brand sb as 多半是贴上负面定性，不是颁发荣誉。', rule: '看 as 后面的形容词是不是罪名或缺陷。', special: 'own-brand 商店自有品牌。' },
    ],
    quiz: [
      { id: 'brand.q1', senseId: 'brand.s1', errorType: 'meaning', type: '词义', prompt: 'a famous brand 是：', options: ['名牌、品牌', '一块燃烧的木头才是唯一现代义', '一种刹车'], answer: '名牌、品牌', explain: '商标义。' },
      { id: 'brand.q2', senseId: 'brand.s1', errorType: 'grammar', type: '动词', prompt: 'The press branded him a cheat. 是：', options: ['媒体把他定性为骗子', '媒体给他注册了商标', '媒体给他新鞋子'], answer: '媒体把他定性为骗子', explain: '名誉上的烙印。' },
      { id: 'brand.q3', senseId: 'brand.s1', errorType: 'meaning', type: '词源', prompt: 'brand 的古英语本义与什么有关？', options: ['燃烧的木头', '花束', '手臂'], answer: '燃烧的木头', explain: '火印来自火。' },
      { id: 'brand.q4', senseId: 'brand.s1', errorType: 'collocation', type: '搭配', prompt: '品牌名称：', options: ['brand name', 'brand of name to', 'name brand as verb only'], answer: 'brand name', explain: '固定说法。name brand 也指名牌。' },
    ],
    usage: { domains: ['商业', '新闻'], tone: '中性', commonConfusion: ['logo', 'trademark'] },
  });

  D('brand-new', {
    etymology: {
      origin: '复合形容词：brand 原指炉火，「刚从火里出来的」加上 new，16世纪就表示崭新，像刚锻好的金属。',
      prefix: null,
      root: { text: 'brand', gloss: '火；刚出炉' },
      suffix: { text: 'new', gloss: '新（复合词的后半）' },
      history: [
        { label: '刚出炉', text: '金属还新得发亮' },
        { label: '现在', text: '完全新的，没用过' },
      ],
      formationLogic: '比 new 程度更满：包装都没拆，或刚刚做成。',
      mnemonic: 'brand 是火，brand-new 是刚出炉，新得不能再新。',
      note: '连字符常见。作定语放在名词前。不要写成 brand new of something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He refused to scratch the brand-new table.', chinese: '他不肯在崭新的桌子上留下刮痕。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'brand-new.s1', en: 'These shoes are brand-new; I have worn them only indoors.', zh: '这双鞋是全新的，我只在室内穿过。', structure: 'be brand-new', grammar: '形容词，可作表语或定语。', rationale: '程度高于普通 new。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'a new-brand car meaning unused', right: 'a brand-new car', reason: '词序是 brand-new。new-brand 会被理解成「新牌子」，不是没使用过。', rule: 'brand-new = completely new。', special: '口语里重音在 brand 和 new 上都比较强。' },
    ],
    quiz: [
      { id: 'brand-new.q1', senseId: 'brand-new.s1', errorType: 'meaning', type: '词义', prompt: 'brand-new 是：', options: ['崭新的', '名牌但是旧的', '刚刚烧掉的'], answer: '崭新的', explain: '完全新。' },
      { id: 'brand-new.q2', senseId: 'brand-new.s1', errorType: 'grammar', type: '词序', prompt: '一辆没用过的车：', options: ['a brand-new car', 'a new-brand car for unused', 'a branded car new'], answer: 'a brand-new car', explain: 'brand 在前。' },
      { id: 'brand-new.q3', senseId: 'brand-new.s1', errorType: 'meaning', type: '词源', prompt: 'brand-new 的形象来自：', options: ['刚出炉、刚锻好', '刚刚注册商标', '新的树枝'], answer: '刚出炉、刚锻好', explain: 'brand 与火有关。' },
      { id: 'brand-new.q4', senseId: 'brand-new.s1', errorType: 'confusable', type: '易混', prompt: '「新牌子」不等于没拆封，更应说：', options: ['a new brand', 'brand-new always', 'a branded age'], answer: 'a new brand', explain: 'brand 作名词才是牌子。' },
    ],
    usage: { domains: ['日常', '消费'], tone: '强调', commonConfusion: ['new', 'brand'] },
  });

  D('brandish', {
    etymology: {
      origin: '中古英语，来自古法语 brandir「挥剑」，brand 在法语里曾指剑刃，与日耳曼语「燃烧、刀光」一路有关。',
      prefix: null,
      root: { text: 'brandish', gloss: '挥舞' },
      suffix: null,
      history: [
        { label: '挥剑', text: '亮出兵器威吓' },
        { label: '现在', text: '挥舞棍棒，或炫耀地亮出文件、奖杯' },
      ],
      formationLogic: '动作要让别人看见，带威胁或卖弄。仅仅「拿着」不够。',
      mnemonic: 'brandish 是在空中划给别人看，不是悄悄握着。',
      note: '宾语可以是武器，也可以是抽象的证据：brandish a statistic。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He brandished the letter as if it settled the argument.', chinese: '他挥着那封信，仿佛它就能结束争论。' },
    ],
    contexts: [
      { domain: '叙事', senseId: 'brandish.s1', en: 'The guard brandished a stick and told us to leave.', zh: '守卫挥舞着棍子，叫我们离开。', structure: 'brandish + 物件', grammar: '及物动词。', rationale: '威胁和炫耀两个场景都要覆盖。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She brandished at the ticket.', right: 'She brandished the ticket.', reason: '直接加宾语，不需要 at。', rule: 'brandish something。', special: 'wave 更中性，brandish 情绪更强。' },
    ],
    quiz: [
      { id: 'brandish.q1', senseId: 'brandish.s1', errorType: 'meaning', type: '词义', prompt: 'brandish a knife 是：', options: ['挥舞刀子威吓', '把刀子收进盒里', '给刀子注册品牌'], answer: '挥舞刀子威吓', explain: '亮出来给人看。' },
      { id: 'brandish.q2', senseId: 'brandish.s1', errorType: 'grammar', type: '句法', prompt: '哪句正确？', options: ['They brandished the contract.', 'They brandished at the contract.', 'They brandishment the contract.'], answer: 'They brandished the contract.', explain: '及物。' },
      { id: 'brandish.q3', senseId: 'brandish.s1', errorType: 'confusable', type: '易混', prompt: '中性的「挥手」更宜用：', options: ['wave', 'brandish always', 'brew'], answer: 'wave', explain: 'brandish 带威胁或炫耀。' },
      { id: 'brandish.q4', senseId: 'brandish.s1', errorType: 'meaning', type: '词源', prompt: 'brandish 与挥舞什么有关？', options: ['剑', '汤', '树枝的学名'], answer: '剑', explain: '法语 brandir。' },
    ],
    usage: { domains: ['叙事', '新闻'], tone: '强烈', commonConfusion: ['wave', 'wield'] },
  });

  D('brandy', {
    etymology: {
      origin: '来自 brandywine 的缩短，荷兰语 brandewijn「烧酒」，字面是燃烧过的酒，因为蒸馏像用火把酒再提炼一次。',
      prefix: null,
      root: { text: 'brandy', gloss: '白兰地' },
      suffix: null,
      history: [
        { label: '荷兰语 brandewijn', text: '蒸馏过的酒' },
        { label: '英语 brandy', text: '以葡萄酒蒸馏成的烈酒' },
      ],
      formationLogic: '品牌名称里仍能看到与 brand「火」的关系。它不是啤酒，也不是未蒸馏的葡萄酒。',
      mnemonic: 'brandy 是烧过的酒：brand 火，wine 酒，后来只剩 brandy。',
      note: 'a brandy 可以是一杯。物质名词也可不可数。brandy snap 是一种甜饼，不是酒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He sipped a little brandy after dinner.', chinese: '晚饭后他抿了一点白兰地。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'brandy.s1', en: 'The recipe flames the pan with a spoon of brandy.', zh: '食谱里用一勺白兰地给锅内食材做焰烧。', structure: 'a spoon of brandy', grammar: '不可数；一杯可说 a brandy。', rationale: '蒸馏酒，不是啤酒。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Brandy is a type of beer brewed in Belgium only by this name.', right: 'Brandy is a spirit distilled from wine.', reason: '啤酒是 beer；brandy 经过蒸馏。', rule: 'wine → distill → brandy。', special: 'cognac 是法国特定产区的白兰地。' },
    ],
    quiz: [
      { id: 'brandy.q1', senseId: 'brandy.s1', errorType: 'meaning', type: '词义', prompt: 'brandy 是：', options: ['由葡萄酒蒸馏的烈酒', '一种啤酒', '清汤'], answer: '由葡萄酒蒸馏的烈酒', explain: '烈酒。' },
      { id: 'brandy.q2', senseId: 'brandy.s1', errorType: 'meaning', type: '词源', prompt: 'brandewijn 的字面意思接近：', options: ['烧过的酒', '新的牌子', '树枝酒'], answer: '烧过的酒', explain: '蒸馏与火。' },
      { id: 'brandy.q3', senseId: 'brandy.s1', errorType: 'confusable', type: '易混', prompt: '法国特定产区的这类酒常叫：', options: ['cognac', 'bouillon', 'boutique'], answer: 'cognac', explain: '干邑是白兰地的一种。' },
      { id: 'brandy.q4', senseId: 'brandy.s1', errorType: 'grammar', type: '数', prompt: '「一杯白兰地」可以说：', options: ['a brandy', 'a brandies water', 'brandy as a countable shoe'], answer: 'a brandy', explain: '一杯是可数用法。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['wine', 'whisky'] },
  });

  D('brass', {
    etymology: {
      origin: '古英语 bræs，指黄铜这种铜锌合金。颜色黄、声音亮，所以又指铜管乐器。',
      prefix: null,
      root: { text: 'brass', gloss: '黄铜' },
      suffix: null,
      history: [
        { label: '古英语', text: '黄色合金' },
        { label: '引申', text: 'the brass section 铜管组；top brass 高层官员，口语' },
      ],
      formationLogic: '材料 → 用这种材料做的乐器 → 发号施令、身上有金属徽章的高层。',
      mnemonic: 'brass 又黄又响。乐队里响的那一组，单位里说了算的那一组，都可以是 brass。',
      note: 'get down to brass tacks 谈具体细节。as bold as brass 厚脸皮，很口语。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The old door had a brass handle, green at the edges.', chinese: '旧门上有个黄铜把手，边缘已经发绿。' },
    ],
    contexts: [
      { domain: '音乐', senseId: 'brass.s1', en: 'Trumpets and trombones sit in the brass section.', zh: '小号和长号属于铜管组。', structure: 'the brass section', grammar: '集合用法，乐器组可作复数意义。', rationale: '材料、乐器、高层三义靠搭配切换。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Brass is the red metal we make wires from most often.', right: 'Copper is the red metal; brass is the yellow alloy of copper and zinc.', reason: '铜是 copper，黄铜才是 brass。', rule: 'yellow alloy = brass。', special: 'the top brass 不必真的穿着黄铜。' },
    ],
    quiz: [
      { id: 'brass.q1', senseId: 'brass.s1', errorType: 'meaning', type: '词义', prompt: 'brass 这种金属是：', options: ['黄铜', '纯红铜', '铁'], answer: '黄铜', explain: '铜锌合金。' },
      { id: 'brass.q2', senseId: 'brass.s1', errorType: 'collocation', type: '搭配', prompt: '乐队里的铜管组：', options: ['the brass section', 'the bronze singers', 'the brain section'], answer: 'the brass section', explain: 'section 声部。' },
      { id: 'brass.q3', senseId: 'brass.s1', errorType: 'meaning', type: '口语', prompt: 'the top brass 是：', options: ['高层', '最好的黄铜矿', '铜管的最高音'], answer: '高层', explain: '官员或管理层。' },
      { id: 'brass.q4', senseId: 'brass.s1', errorType: 'confusable', type: '易混', prompt: '红铜色的纯铜是：', options: ['copper', 'brass', 'bronze only if tin is ignored as the same word'], answer: 'copper', explain: 'copper 红铜；bronze 青铜。' },
    ],
    usage: { domains: ['材料', '音乐', '口语'], tone: '中性', commonConfusion: ['copper', 'bronze'] },
  });

  D('brave', {
    etymology: {
      origin: '来自法语 brave、意大利语 bravo「勇猛、凶悍」。更早是否直接来自拉丁语 barbarus，学界有争论，这里不把词根写死。',
      prefix: null,
      root: { text: 'brave', gloss: '勇敢' },
      suffix: null,
      history: [
        { label: '意大利语 bravo', text: '大胆，甚至野蛮地大胆' },
        { label: '英语', text: '面对危险不退缩；动词 brave the cold 硬着头皮去承受' },
      ],
      formationLogic: '形容词是品质，动词是「敢于面对」。名词 bravery 见下条。',
      mnemonic: 'bravo 喝彩给敢上前的人；brave 就是敢上前。',
      note: 'a brave 作名词指美洲原住民战士，是旧用法，现在容易冒犯，本条不作为推荐用法。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'It was brave of her to admit the mistake in public.', chinese: '她当众承认错误，这很勇敢。' },
    ],
    contexts: [
      { domain: '人物', senseId: 'brave.s1', en: 'They braved the storm to reach the clinic.', zh: '他们冒着暴风雨赶到诊所。', structure: 'brave + 艰难的事物', grammar: '动词为及物，宾语是被面对的困难。', rationale: '形容词句型 it is brave of sb to do 很常考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'It is brave for her to speak.', right: 'It is brave of her to speak.', reason: '评价人的品质用 of，不用 for。', rule: 'It is brave / kind / silly of sb to do。', special: 'brave it out 硬撑到底。' },
    ],
    quiz: [
      { id: 'brave.q1', senseId: 'brave.s1', errorType: 'grammar', type: '句型', prompt: '她这么做很勇敢：', options: ['It was brave of her to do it.', 'It was brave for her to do it.', 'It was brave to her doing it.'], answer: 'It was brave of her to do it.', explain: 'of sb to do。' },
      { id: 'brave.q2', senseId: 'brave.s1', errorType: 'meaning', type: '动词', prompt: 'brave the cold 是：', options: ['冒着寒冷前往', '使寒冷变得勇敢', '躲开寒冷'], answer: '冒着寒冷前往', explain: '敢于面对。' },
      { id: 'brave.q3', senseId: 'brave.s1', errorType: 'confusable', type: '易混', prompt: '名词「勇气」是：', options: ['bravery', 'bravo as a noun of fear', 'brass'], answer: 'bravery', explain: '形容词 brave，名词 bravery。' },
      { id: 'brave.q4', senseId: 'brave.s1', errorType: 'collocation', type: '搭配', prompt: '硬撑到底：', options: ['brave it out', 'brave out it', 'bravery it out'], answer: 'brave it out', explain: 'it 放在 out 前。' },
    ],
    usage: { domains: ['人物', '叙事'], tone: '褒义', commonConfusion: ['bold', 'bravery'] },
  });

  D('bravery', {
    etymology: {
      origin: '法语 braverie，英语里是 brave + -ry，表示勇敢这种品质或一次勇敢的行为。',
      prefix: null,
      root: { text: 'brave', gloss: '勇敢' },
      suffix: { text: '-ry', gloss: '性质、行为' },
      history: [
        { label: 'brave', text: '敢面对危险' },
        { label: 'bravery', text: '勇气；也可指具体的勇敢表现 an act of bravery' },
      ],
      formationLogic: '抽象品质通常不可数。an act of bravery 把一次行为单独拿出来时，bravery 仍多作不可数。',
      mnemonic: 'brave 是形容词，看到 -ry 就收成「勇气」。',
      note: 'medal for bravery 勇敢奖章。不要和 bravado（虚张声势）混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The award recognised her bravery during the fire.', chinese: '这个奖表彰她在火灾中的勇敢。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'bravery.s1', en: 'He received a medal for bravery after pulling the driver from the car.', zh: '他把司机从车里拉出来后，获得了一枚勇敢奖章。', structure: 'a medal for bravery', grammar: 'for 表原因。', rationale: '与 bravado 的真假勇气要分开。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'His loud bravado was official bravery in the report without any risk.', right: 'Bravado is a show of courage; bravery is courage when there is real danger.', reason: 'bravado 可能是装出来的。', rule: '真危险前的勇气才是 bravery。', special: 'acts of bravery 复数在 act 上。' },
    ],
    quiz: [
      { id: 'bravery.q1', senseId: 'bravery.s1', errorType: 'meaning', type: '词义', prompt: 'bravery 是：', options: ['真正的勇气', '黄铜', '虚张声势的唯一含义'], answer: '真正的勇气', explain: '品质名词。' },
      { id: 'bravery.q2', senseId: 'bravery.s1', errorType: 'confusable', type: '易混', prompt: '装出的胆量更接近：', options: ['bravado', 'bravery', 'brandy'], answer: 'bravado', explain: 'bravado 是作秀。' },
      { id: 'bravery.q3', senseId: 'bravery.s1', errorType: 'collocation', type: '搭配', prompt: '因勇敢获章：', options: ['a medal for bravery', 'a medal of brave', 'a bravery medal for brass'], answer: 'a medal for bravery', explain: 'for bravery。' },
      { id: 'bravery.q4', senseId: 'bravery.s1', errorType: 'grammar', type: '词性', prompt: 'bravery 相对 brave 是：', options: ['名词', '动词过去式', '介词'], answer: '名词', explain: '品质。' },
    ],
    usage: { domains: ['新闻', '人物'], tone: '褒义', commonConfusion: ['bravado', 'courage'] },
  });

  D('breach', {
    etymology: {
      origin: '与 break 同源。古英语 bryce 表示破裂；也受古法语 brèche「破口」影响。',
      prefix: null,
      root: { text: 'breach', gloss: '破；违反' },
      suffix: null,
      history: [
        { label: '破裂', text: '墙上或防线上的缺口' },
        { label: '规则', text: 'breach of contract / the law 违约、违法' },
      ],
      formationLogic: '物理缺口和规则被撕开是同一个形象。动词 breach a wall 或 breach security 都是打穿。',
      mnemonic: 'breach 是 break 的正式亲戚：合同、法律、堤坝上的口子。',
      note: 'a breach of confidence 泄密、辜负信任。step into the breach 临危补位。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Leaving early was a breach of the agreement.', chinese: '提前离开是违反协议。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'breach.s1', en: 'The company sued for breach of contract.', zh: '公司以违约提起诉讼。', structure: 'breach of + 规则', grammar: '名词 of；动词也可 breach the rules。', rationale: 'of 是法律英语里最固定的搭配。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'a breach against the contract', right: 'a breach of the contract', reason: '违反某项规则用 of，不用 against。', rule: 'breach of contract / duty / privacy。', special: 'breach 比 break 正式。' },
    ],
    quiz: [
      { id: 'breach.q1', senseId: 'breach.s1', errorType: 'collocation', type: '搭配', prompt: '违约：', options: ['breach of contract', 'breach against contract', 'breach to contract'], answer: 'breach of contract', explain: 'of。' },
      { id: 'breach.q2', senseId: 'breach.s1', errorType: 'meaning', type: '词义', prompt: 'a breach in the sea wall 是：', options: ['海堤上的缺口', '海堤的合同', '海堤的铜牌'], answer: '海堤上的缺口', explain: '物理破口。' },
      { id: 'breach.q3', senseId: 'breach.s1', errorType: 'confusable', type: '易混', prompt: '更口语的「违反规则」是：', options: ['break the rules', 'broach the rules', 'bleach the rules'], answer: 'break the rules', explain: 'breach 更正式。' },
      { id: 'breach.q4', senseId: 'breach.s1', errorType: 'grammar', type: '动词', prompt: '黑客攻破了系统：', options: ['They breached the system.', 'They breach of the system.', 'They breachen the system.'], answer: 'They breached the system.', explain: '及物动词过去式。' },
    ],
    usage: { domains: ['法律', '新闻'], tone: '正式、负面', commonConfusion: ['break', 'broach'] },
  });

  D('bread', {
    etymology: {
      origin: '古英语 brēad。早期泛指食物或一块食物，后来才专指面粉烤成的面包。古英语里面包更常说 hlāf，就是今天的 loaf。',
      prefix: null,
      root: { text: 'bread', gloss: '面包' },
      suffix: null,
      history: [
        { label: '古英语', text: '食物、小块' },
        { label: '现在', text: '面包；bread and butter 生计；口语 bread 也可指钱' },
      ],
      formationLogic: '主食引申为生活来源。one\'s daily bread 日常生计。',
      mnemonic: 'loaf 是一条，bread 是这种食物本身，也是靠它活着。',
      note: 'bread 物质名词不可数。一根说 a loaf of bread，一片 a slice of bread。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Could you buy a loaf of bread on your way home?', chinese: '你回家路上买一条面包好吗？' },
    ],
    contexts: [
      { domain: '生活', senseId: 'bread.s1', en: 'Teaching is her bread and butter.', zh: '教书是她的生计。', structure: 'one\'s bread and butter', grammar: '习语作名词，指主要收入。', rationale: '不可数与习语同时考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She bought two breads.', right: 'She bought two loaves of bread.', reason: 'bread 不可数，数的是 loaf。', rule: 'a loaf / slice / piece of bread。', special: 'breads 只在强调不同种类时偶尔出现。' },
    ],
    quiz: [
      { id: 'bread.q1', senseId: 'bread.s1', errorType: 'grammar', type: '数', prompt: '两条面包：', options: ['two loaves of bread', 'two breads', 'two bread'], answer: 'two loaves of bread', explain: '用 loaf 来数。' },
      { id: 'bread.q2', senseId: 'bread.s1', errorType: 'meaning', type: '习语', prompt: 'bread and butter 可指：', options: ['生计', '黄油的品牌', '早餐的唯一法律名称'], answer: '生计', explain: '主要收入来源。' },
      { id: 'bread.q3', senseId: 'bread.s1', errorType: 'collocation', type: '搭配', prompt: '一片面包：', options: ['a slice of bread', 'a slice bread', 'a bread of slice'], answer: 'a slice of bread', explain: 'of。' },
      { id: 'bread.q4', senseId: 'bread.s1', errorType: 'confusable', type: '易混', prompt: '整条未切的面包叫：', options: ['a loaf', 'a load', 'a leaf'], answer: 'a loaf', explain: 'loaf，复数 loaves。' },
    ],
    usage: { domains: ['饮食', '口语'], tone: '中性', commonConfusion: ['loaf', 'breed'] },
  });

  D('break', {
    etymology: {
      origin: '古英语 brecan，与德语 brechen 同源，核心是使某物不再完整，或使连续的过程中断。',
      prefix: null,
      root: { text: 'break', gloss: '打破；中断' },
      suffix: null,
      history: [
        { label: '古英语 brecan', text: '弄碎、破裂' },
        { label: '引申', text: 'break a rule 违反；a break 休息或裂缝；break the news 说出坏消息' },
      ],
      formationLogic: '不规则：break, broke, broken。名词 a break 是中断出来的那段空隙。',
      mnemonic: '过去式 broke，分词 broken。刹车是 brake，别用这一套不规则变化。',
      note: 'give me a break 口语是「饶了我吧」或「给我一次机会」，要看语气。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She dropped the cup and it broke on the tiles.', chinese: '她失手落下杯子，杯子在瓷砖上摔碎了。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'break.s1', en: 'Let\'s take a break and finish the report after lunch.', zh: '我们休息一下，午饭后再把报告写完。', structure: 'take a break', grammar: '名词义「休息」可数。', rationale: '动词不规则与名词「空隙」同样重要。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He breaked the window.', right: 'He broke the window.', reason: 'break 是不规则动词。', rule: 'break / broke / broken。', special: 'The window broke. 也可不及物。' },
    ],
    quiz: [
      { id: 'break.q1', senseId: 'break.s1', errorType: 'grammar', type: '词形', prompt: '过去式是：', options: ['broke', 'breaked', 'braked'], answer: 'broke', explain: '不规则。' },
      { id: 'break.q2', senseId: 'break.s1', errorType: 'grammar', type: '词形', prompt: '过去分词是：', options: ['broken', 'broke', 'breaken'], answer: 'broken', explain: 'have broken。' },
      { id: 'break.q3', senseId: 'break.s1', errorType: 'confusable', type: '易混', prompt: '汽车减速用：', options: ['brake', 'break', 'brook'], answer: 'brake', explain: 'brake 刹车。' },
      { id: 'break.q4', senseId: 'break.s1', errorType: 'collocation', type: '搭配', prompt: '休息五分钟：', options: ['take a five-minute break', 'take a five-minute brake', 'do a break the window'], answer: 'take a five-minute break', explain: 'break 才是休息。' },
    ],
    usage: { domains: ['日常', '规则'], tone: '中性', commonConfusion: ['brake', 'interval'] },
  });

  D('break down', {
    etymology: {
      origin: '短语动词：break「中断、弄碎」+ down。机器停住、人崩溃、把整体拆成部分，都是「原有结构掉下去」。',
      prefix: null,
      root: { text: 'break down', gloss: '故障；崩溃；分解' },
      suffix: null,
      history: [
        { label: '弄碎', text: '拆开' },
        { label: '现在', text: '车抛锚；谈判破裂；break down the cost 分项列出' },
      ],
      formationLogic: '不及物时主语自己垮掉。及物时人把事物拆解：break the figures down。',
      mnemonic: 'down 是往下垮，或把东西拆到更低的一层细节。',
      note: '名词是 breakdown，重音和写法不同，见后条。代词放中间：break it down。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The bus broke down halfway up the hill.', chinese: '公共汽车爬到半山就抛锚了。' },
    ],
    contexts: [
      { domain: '分析', senseId: 'break down.s1', en: 'Can you break the bill down into rent, food and travel?', zh: '你能把账单拆成房租、食物和交通吗？', structure: 'break something down into', grammar: '及物，into 接部分。', rationale: '故障义和分解义都必须会。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The car broke down it.', right: 'The car broke down. / Break it down into parts.', reason: '车自己出故障时不及物，不能再加 it。', rule: '不及物：机器、谈判、人；及物：把信息拆开。', special: 'break down in tears 突然大哭。' },
    ],
    quiz: [
      { id: 'break down.q1', senseId: 'break down.s1', errorType: 'meaning', type: '词义', prompt: 'The lift broke down. 是：', options: ['电梯出故障了', '电梯被拆成零件出售了', '电梯违反了法律'], answer: '电梯出故障了', explain: '不及物，停止运转。' },
      { id: 'break down.q2', senseId: 'break down.s1', errorType: 'grammar', type: '语序', prompt: '把它拆开分析：', options: ['break it down', 'break down it', 'breakdown it'], answer: 'break it down', explain: '代词放中间。' },
      { id: 'break down.q3', senseId: 'break down.s1', errorType: 'collocation', type: '搭配', prompt: '分成三类：', options: ['break the data down into three groups', 'break the data down at three groups', 'break down to the data'], answer: 'break the data down into three groups', explain: 'into。' },
      { id: 'break down.q4', senseId: 'break down.s1', errorType: 'confusable', type: '易混', prompt: '名词「故障、崩溃」写成：', options: ['breakdown', 'break down always as one word verb only', 'brake down'], answer: 'breakdown', explain: '名词合一。' },
    ],
    usage: { domains: ['机械', '情绪', '分析'], tone: '负面或中性', commonConfusion: ['breakdown', 'break up'] },
  });

  D('break out', {
    etymology: {
      origin: '短语动词：break + out。坏事情从里面突然冲出来：火灾、战争、疫情，或人从关押中逃出。',
      prefix: null,
      root: { text: 'break out', gloss: '爆发；逃脱' },
      suffix: null,
      history: [
        { label: '冲出封闭', text: '从牢里或壳里出来' },
        { label: '现在', text: 'War broke out. 战争爆发；break out of prison 越狱' },
      ],
      formationLogic: '战争、火、病作主语时不及物。人逃跑用 break out of + 地点。',
      mnemonic: 'out 是往外。坏事往外冒，人往外逃。',
      note: 'breakout 作名词常指越狱。不要和 break off（中止关系或折断）混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A fire broke out in the kitchen just after midnight.', chinese: '刚过午夜，厨房里起火了。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'break out.s1', en: 'Fighting broke out again along the border.', zh: '边境一带战事再度爆发。', structure: 'something bad + broke out', grammar: '不及物，没有宾语。', rationale: '主语通常是灾祸，不是人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'They broke out a war.', right: 'War broke out. / They started a war.', reason: '爆发用灾祸作主语，人不能 break out a war。', rule: 'A broke out；人 + break out of a place。', special: 'break out in a rash 突然起疹子。' },
    ],
    quiz: [
      { id: 'break out.q1', senseId: 'break out.s1', errorType: 'grammar', type: '句法', prompt: '战争爆发：', options: ['War broke out.', 'They broke out the war.', 'War broke out of the soldiers.'], answer: 'War broke out.', explain: '灾祸作主语。' },
      { id: 'break out.q2', senseId: 'break out.s1', errorType: 'collocation', type: '搭配', prompt: '越狱：', options: ['break out of prison', 'break out prison', 'break prison out'], answer: 'break out of prison', explain: 'of + 地点。' },
      { id: 'break out.q3', senseId: 'break out.s1', errorType: 'confusable', type: '易混', prompt: '机器停止工作不是 break out，而是：', options: ['break down', 'break out', 'break the law'], answer: 'break down', explain: '故障用 down。' },
      { id: 'break out.q4', senseId: 'break out.s1', errorType: 'meaning', type: '词义', prompt: 'She broke out in a sweat. 是：', options: ['她突然出了一身汗', '她打破了汗水的法律', '她把汗分解了'], answer: '她突然出了一身汗', explain: 'break out in。' },
    ],
    usage: { domains: ['新闻'], tone: '常为负面', commonConfusion: ['break down', 'outbreak'] },
  });

  D('break the law', {
    etymology: {
      origin: '英语短语：break「使规则破裂」+ the law「法律」。',
      prefix: null,
      root: { text: 'break the law', gloss: '违法' },
      suffix: null,
      history: [
        { label: 'break a rule', text: '把一项规定破坏掉' },
        { label: 'the law', text: '法律整体，前面通常有 the' },
      ],
      formationLogic: 'law 在这个意义上要定冠词。违法的人是 a law-breaker，行为是 breaking the law。',
      mnemonic: '法律是一条不能 break 的线。',
      note: '正式同义是 commit an offence 或 violate the law。break the law 明白、常用。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Ignorance does not excuse you if you break the law.', chinese: '就算你不知情，违法也不能成为借口。' },
    ],
    contexts: [
      { domain: '公民', senseId: 'break the law.s1', en: 'Anyone who breaks the law should expect a penalty.', zh: '任何违法的人都应预期会受到处罚。', structure: 'break the law', grammar: '动词短语，law 前有 the。', rationale: '冠词是常见错误。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He broke law.', right: 'He broke the law.', reason: '统指法律制度时要 the。', rule: 'break the law。', special: 'break a law 可以指违反某一条具体法律，较少作为总说法。' },
    ],
    quiz: [
      { id: 'break the law.q1', senseId: 'break the law.s1', errorType: 'grammar', type: '冠词', prompt: '违法：', options: ['break the law', 'break law', 'broke the law as present habit with he break'], answer: 'break the law', explain: '要 the。' },
      { id: 'break the law.q2', senseId: 'break the law.s1', errorType: 'meaning', type: '词义', prompt: 'break the law 是：', options: ['做法律禁止的事', '把律书撕碎', '休息一天'], answer: '做法律禁止的事', explain: '违法。' },
      { id: 'break the law.q3', senseId: 'break the law.s1', errorType: 'confusable', type: '易混', prompt: '更正式的「违反法律」是：', options: ['violate the law', 'brake the law', 'breach the loaf'], answer: 'violate the law', explain: 'violate 正式。' },
      { id: 'break the law.q4', senseId: 'break the law.s1', errorType: 'grammar', type: '词形', prompt: '昨天他违法了：', options: ['He broke the law.', 'He breaked the law.', 'He broken the law.'], answer: 'He broke the law.', explain: '过去式 broke。' },
    ],
    usage: { domains: ['法律', '公民'], tone: '严肃', commonConfusion: ['violate', 'crime'] },
  });

  D('break up', {
    etymology: {
      origin: '短语动词：break + up。完整的东西散成碎片，或一段关系散掉。',
      prefix: null,
      root: { text: 'break up', gloss: '打碎；分手；解散' },
      suffix: null,
      history: [
        { label: '打散', text: '使聚在一起的东西分开' },
        { label: '现在', text: '情侣分手；聚会解散；学期结束 school breaks up' },
      ],
      formationLogic: '不及物：We broke up. 及物：The police broke up the fight. 代词放中间：break it up。',
      mnemonic: 'up 在这里不是向上，而是「彻底散开」。',
      note: 'breakup 作名词：a painful breakup。英式英语学校放假可说 break up for summer。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They broke up after three years together.', chinese: '他们在一起三年后分手了。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'break up.s1', en: 'Police broke up the crowd before it blocked the road.', zh: '警方在人群堵住道路之前把它驱散了。', structure: 'break up a crowd', grammar: '及物，人是驱散者。', rationale: '分手义和驱散义都高频。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She broke up him.', right: 'She broke up with him.', reason: '与某人分手要用 with。break sb up 会变成把对方打散或逗笑，在美式口语里 break sb up 还可指逗人大笑。', rule: 'break up with sb。', special: 'What broke them up? 什么使他们分手，这里 them 是被分开的一对。' },
    ],
    quiz: [
      { id: 'break up.q1', senseId: 'break up.s1', errorType: 'collocation', type: '搭配', prompt: '和她分手：', options: ['break up with her', 'break up her', 'break her up with as the only pattern'], answer: 'break up with her', explain: 'with。' },
      { id: 'break up.q2', senseId: 'break up.s1', errorType: 'meaning', type: '词义', prompt: 'break up a fight 是：', options: ['制止并驱散打斗', '开始打斗', '把打斗分成课程'], answer: '制止并驱散打斗', explain: '使人群散开。' },
      { id: 'break up.q3', senseId: 'break up.s1', errorType: 'grammar', type: '语序', prompt: '住手、散开（对双方说）：', options: ['Break it up!', 'Break up it!', 'Breakdown it!'], answer: 'Break it up!', explain: '代词在中间。' },
      { id: 'break up.q4', senseId: 'break up.s1', errorType: 'confusable', type: '易混', prompt: '汽车抛锚不是 break up，而是：', options: ['break down', 'break out', 'break the law'], answer: 'break down', explain: '故障用 down。' },
    ],
    usage: { domains: ['关系', '公共'], tone: '常为负面', commonConfusion: ['break down', 'split up'] },
  });

  D('breakable', {
    etymology: {
      origin: '英语派生：break + -able，表示能够被打破。',
      prefix: null,
      root: { text: 'break', gloss: '打破' },
      suffix: { text: '-able', gloss: '可以…的' },
      history: [
        { label: 'break', text: '使破裂' },
        { label: 'breakable', text: '易碎，需要小心搬' },
      ],
      formationLogic: '-able 表可能。反义常说 unbreakable。包装上的 fragile 是更常见的警示词。',
      mnemonic: '能 break 的就是 breakable。',
      note: '名词 breakables 指一批易碎物品。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Pack the breakable dishes in paper, not loose in the trunk.', chinese: '易碎的盘子用纸包好，不要散放在后备厢里。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'breakable.s1', en: 'Glass is breakable, so carry the mirror upright.', zh: '玻璃易碎，所以镜子要竖着搬。', structure: 'be breakable', grammar: '形容词。', rationale: '与 fragile 近义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'This crate is brokenable.', right: 'This crate is breakable. / The crate is already broken.', reason: '后缀接在原形 break 上，不是 broken。已经碎了用 broken。', rule: 'breakable 可能碎；broken 已经碎。', special: 'Handle with care 是包装用语。' },
    ],
    quiz: [
      { id: 'breakable.q1', senseId: 'breakable.s1', errorType: 'meaning', type: '词义', prompt: 'breakable 是：', options: ['易碎的', '已经碎了', '不可打破的'], answer: '易碎的', explain: '能够被打破。' },
      { id: 'breakable.q2', senseId: 'breakable.s1', errorType: 'confusable', type: '易混', prompt: '已经破裂用：', options: ['broken', 'breakable', 'broke'], answer: 'broken', explain: '状态用过去分词。' },
      { id: 'breakable.q3', senseId: 'breakable.s1', errorType: 'grammar', type: '构词', prompt: '正确拼写是：', options: ['breakable', 'brokenable', 'breakible'], answer: 'breakable', explain: 'break + able。' },
      { id: 'breakable.q4', senseId: 'breakable.s1', errorType: 'collocation', type: '搭配', prompt: '包装警示里更常见的近义词是：', options: ['fragile', 'fragrant', 'fragment as an adjective of careful'], answer: 'fragile', explain: 'fragile 易碎。fragrant 是芳香。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['broken', 'fragile'] },
  });

  D('breakdown', {
    etymology: {
      origin: '由短语 break down 合成的名词。重音通常在第一个音节。',
      prefix: null,
      root: { text: 'break', gloss: '中断' },
      suffix: { text: 'down', gloss: '向下、散掉（复合成分）' },
      history: [
        { label: '短语动词', text: '垮掉或拆开' },
        { label: '名词', text: '机械故障、神经崩溃、关系破裂，或分项说明' },
      ],
      formationLogic: '写成一个词才是名词。a breakdown of the figures 是分析表，不是机器坏了，要看 of。',
      mnemonic: '动词分开写 break down，名词合起来 breakdown。',
      note: 'nervous breakdown 神经崩溃，是常用但不精确的说法。have a breakdown 车坏或人垮，靠主语区分。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We had a breakdown on the motorway and waited an hour.', chinese: '我们在高速公路上抛了锚，等了一个小时。' },
    ],
    contexts: [
      { domain: '分析', senseId: 'breakdown.s1', en: 'The report includes a breakdown of spending by month.', zh: '报告里有按月列出的支出明细。', structure: 'a breakdown of', grammar: '可数名词。', rationale: '「故障」和「分项」同词，靠搭配区分。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The car had a break down.', right: 'The car had a breakdown. / The car broke down.', reason: '名词合一，动词分开。', rule: 'a breakdown；break down。', special: 'a breakdown in communication 沟通失灵。' },
    ],
    quiz: [
      { id: 'breakdown.q1', senseId: 'breakdown.s1', errorType: 'grammar', type: '写法', prompt: '名词「故障」是：', options: ['breakdown', 'break down', 'broke down'], answer: 'breakdown', explain: '一个词。' },
      { id: 'breakdown.q2', senseId: 'breakdown.s1', errorType: 'meaning', type: '词义', prompt: 'a breakdown of the costs 是：', options: ['费用分项', '费用机器坏了', '费用违法'], answer: '费用分项', explain: 'of 提示分析表。' },
      { id: 'breakdown.q3', senseId: 'breakdown.s1', errorType: 'collocation', type: '搭配', prompt: '沟通失败：', options: ['a breakdown in communication', 'a breakdown at communication to', 'a communication broke'], answer: 'a breakdown in communication', explain: 'in。' },
      { id: 'breakdown.q4', senseId: 'breakdown.s1', errorType: 'confusable', type: '易混', prompt: '动词「车抛锚了」是：', options: ['The car broke down.', 'The car breakdown.', 'The car was breakdown.'], answer: 'The car broke down.', explain: '动词分写并变位。' },
    ],
    usage: { domains: ['机械', '心理', '报告'], tone: '常为负面', commonConfusion: ['break down'] },
  });

  D('breaker', {
    etymology: {
      origin: 'break + -er。可以是把浪打成白沫的浪头，可以是防波结构，也可以是电路里跳闸的断路器。',
      prefix: null,
      root: { text: 'break', gloss: '冲断' },
      suffix: { text: '-er', gloss: '造成中断的事物' },
      history: [
        { label: '海浪', text: '拍碎在岸边的浪' },
        { label: '技术', text: 'circuit breaker 断路器，过载时断开电路' },
      ],
      formationLogic: '-er 指施行 break 的那个东西。语境决定是浪、堤还是开关。',
      mnemonic: 'breaker 负责「断开」：浪断开成沫，电路断开保安全。',
      note: 'a deal-breaker 是让交易谈崩的条件，口语很常见。law-breaker 违法者。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The circuit breaker tripped and the kitchen went dark.', chinese: '断路器跳闸，厨房一下子黑了。' },
    ],
    contexts: [
      { domain: '海洋', senseId: 'breaker.s1', en: 'We watched a breaker curl and collapse into white water.', zh: '我们看着一道浪卷起来，又碎成白沫。', structure: 'a breaker', grammar: '可数名词。', rationale: '浪和断路器是阅读里两个主要形象。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'A breaker in an electrical box is always an ocean wave.', right: 'In a circuit, a breaker is a safety switch; at the beach, it is a breaking wave.', reason: '同词要看场所。', rule: 'circuit breaker 与 wave 不是一类东西。', special: 'trip a breaker 使断路器跳闸。' },
    ],
    quiz: [
      { id: 'breaker.q1', senseId: 'breaker.s1', errorType: 'meaning', type: '词义', prompt: 'a circuit breaker 是：', options: ['断路器', '碎浪的法律名称只有这一个', '早餐'], answer: '断路器', explain: '电路安全开关。' },
      { id: 'breaker.q2', senseId: 'breaker.s1', errorType: 'meaning', type: '词义', prompt: '岸边的 breaker 可以是：', options: ['拍碎的浪', '刹车片', '品牌'], answer: '拍碎的浪', explain: '海浪义。' },
      { id: 'breaker.q3', senseId: 'breaker.s1', errorType: 'collocation', type: '搭配', prompt: '使谈判无法进行的条件：', options: ['a deal-breaker', 'a deal-brake', 'a deal-bread'], answer: 'a deal-breaker', explain: '口语复合词。' },
      { id: 'breaker.q4', senseId: 'breaker.s1', errorType: 'grammar', type: '构词', prompt: '-er 在 breaker 里表示：', options: ['做这个动作的物', '比较级', '过去式'], answer: '做这个动作的物', explain: '施事。' },
    ],
    usage: { domains: ['海洋', '电工', '口语'], tone: '中性', commonConfusion: ['breakers', 'brake'] },
  });

  D('breakers', {
    etymology: {
      origin: 'breaker 的复数，专指一排排拍岸、碎成白沫的浪。',
      prefix: null,
      root: { text: 'breaker', gloss: '碎浪' },
      suffix: { text: '-s', gloss: '复数' },
      history: [
        { label: '单数 breaker', text: '一道碎浪' },
        { label: 'breakers', text: '岸边连续的白浪' },
      ],
      formationLogic: '几乎总是复数，因为看到的是一片浪，不是单独讨论某一个开关。',
      mnemonic: '听到海的声音，breakers 就是那些白头浪。',
      note: '不要当成 breakfast 的一部分。circuit breakers 是多个断路器，若没有电路语境，本题倾向海浪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The children were warned not to swim beyond the breakers.', chinese: '孩子们被警告不要游到碎浪带外面去。' },
    ],
    contexts: [
      { domain: '海洋', senseId: 'breakers.s1', en: 'Breakers thundered against the rocks all night.', zh: '碎浪整夜撞击着岩石，发出雷鸣般的声音。', structure: 'breakers + 复数动词', grammar: '复数名词。', rationale: '本条锁定海浪，而不是电器。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'meaning', wrong: 'We ordered breakers for breakfast.', right: 'We watched the breakers at breakfast. / We ordered bread.', reason: 'breakers 不是食物。', rule: '海浪用 breakers；早饭是 breakfast。', special: 'the line of breakers 碎浪线。' },
    ],
    quiz: [
      { id: 'breakers.q1', senseId: 'breakers.s1', errorType: 'meaning', type: '词义', prompt: '本条 breakers 是：', options: ['拍岸的碎浪', '早餐的复数', '多个刹车'], answer: '拍岸的碎浪', explain: '白沫浪。' },
      { id: 'breakers.q2', senseId: 'breakers.s1', errorType: 'grammar', type: '一致', prompt: 'The breakers _____ loud tonight.', options: ['are', 'is', 'was a'], answer: 'are', explain: '复数。' },
      { id: 'breakers.q3', senseId: 'breakers.s1', errorType: 'confusable', type: '易混', prompt: '早餐是：', options: ['breakfast', 'breakers', 'breaker'], answer: 'breakfast', explain: '不要看错词尾。' },
      { id: 'breakers.q4', senseId: 'breakers.s1', errorType: 'collocation', type: '搭配', prompt: '不要游过碎浪区：', options: ['beyond the breakers', 'beyond the breakfasts', 'among a breaker of law'], answer: 'beyond the breakers', explain: 'beyond 超出那一带。' },
    ],
    usage: { domains: ['海洋'], tone: '中性', commonConfusion: ['breakfast', 'breaker'] },
  });

  D('breakfast', {
    etymology: {
      origin: '中古英语复合词：break + fast。fast 在这里是禁食、一夜未进餐。早餐就是打破这顿斋戒。',
      prefix: null,
      root: { text: 'fast', gloss: '禁食' },
      suffix: null,
      history: [
        { label: 'break the night fast', text: '结束夜间不吃东西的状态' },
        { label: '现在', text: '一天的第一餐；动词 to breakfast 较正式或过时' },
      ],
      formationLogic: 'fast 不是「快」。这个复合词里它是斋戒。',
      mnemonic: '晚上在 fast，早上把 fast break 掉，就是 breakfast。',
      note: '不可数指这顿饭类型，一顿具体的也可说 a cooked breakfast。have breakfast 中间通常无 a。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I will see you after breakfast, not before.', chinese: '我们早饭后再见，不要在早饭前。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'breakfast.s1', en: 'She has breakfast at seven and leaves by half past.', zh: '她七点吃早饭，七点半前出门。', structure: 'have breakfast', grammar: '泛指这顿饭时不加 a。', rationale: '词源能帮学生记住 fast 的旧义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He had a breakfast at seven every day as a fixed singular habit in learners\' English.', right: 'He has breakfast at seven.', reason: '每日习惯说 have breakfast，不加 a。', rule: 'have breakfast / lunch / dinner。', special: 'a big breakfast 强调这一顿的内容时可以加 a。' },
    ],
    quiz: [
      { id: 'breakfast.q1', senseId: 'breakfast.s1', errorType: 'meaning', type: '词源', prompt: 'breakfast 里的 fast 是：', options: ['禁食', '速度快', '牢固'], answer: '禁食', explain: '打破夜间的禁食。' },
      { id: 'breakfast.q2', senseId: 'breakfast.s1', errorType: 'grammar', type: '冠词', prompt: '每天早上吃饭：', options: ['have breakfast', 'have a breakfast always', 'have the breakers'], answer: 'have breakfast', explain: '泛指不加 a。' },
      { id: 'breakfast.q3', senseId: 'breakfast.s1', errorType: 'confusable', type: '易混', prompt: '海边的白浪不是 breakfast，而是：', options: ['breakers', 'breakfast', 'breaks'], answer: 'breakers', explain: '多一个词尾差别。' },
      { id: 'breakfast.q4', senseId: 'breakfast.s1', errorType: 'collocation', type: '搭配', prompt: '一顿丰盛的早餐可以说：', options: ['a big breakfast', 'a big break-fast of law', 'big the breakfasts'], answer: 'a big breakfast', explain: '强调内容时可数。' },
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['fast', 'breakers'] },
  });

  D('breakthrough', {
    etymology: {
      origin: '复合词：break + through，原是军事上突破防线，20世纪起大量用于科学和新闻，表示重大进展。',
      prefix: null,
      root: { text: 'break through', gloss: '冲破' },
      suffix: null,
      history: [
        { label: '军事', text: '从防线中间打穿' },
        { label: '引申', text: 'a scientific breakthrough 科学上的突破' },
      ],
      formationLogic: '名词通常写成一个词。动词仍分写 break through。',
      mnemonic: 'through 是穿过去。穿过去的那一下成果，就是 breakthrough。',
      note: '可数。make a breakthrough 取得突破。不要用来形容普通的小改进，语气比较重。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The team announced a breakthrough in the treatment of the disease.', chinese: '研究组宣布这种疾病的治疗取得了突破。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'breakthrough.s1', en: 'Years of dull experiments led to one clear breakthrough.', zh: '多年枯燥的实验换来一次清晰的突破。', structure: 'a breakthrough in', grammar: 'in 后接领域。', rationale: '新闻标题高频词。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'make a breakthrough of cancer', right: 'make a breakthrough in cancer research', reason: '领域用 in，不用 of。', rule: 'a breakthrough in something。', special: '动词：break through a barrier。' },
    ],
    quiz: [
      { id: 'breakthrough.q1', senseId: 'breakthrough.s1', errorType: 'meaning', type: '词义', prompt: 'a breakthrough 是：', options: ['重大突破', '一次普通休息', '打碎的杯子'], answer: '重大突破', explain: '重要进展。' },
      { id: 'breakthrough.q2', senseId: 'breakthrough.s1', errorType: 'collocation', type: '搭配', prompt: '在能源研究上的突破：', options: ['a breakthrough in energy research', 'a breakthrough of energy research', 'a breakthrough at energy'], answer: 'a breakthrough in energy research', explain: 'in。' },
      { id: 'breakthrough.q3', senseId: 'breakthrough.s1', errorType: 'grammar', type: '写法', prompt: '名词写成：', options: ['breakthrough', 'break through always', 'broke through'], answer: 'breakthrough', explain: '一个词。动词才分开。' },
      { id: 'breakthrough.q4', senseId: 'breakthrough.s1', errorType: 'confusable', type: '易混', prompt: '取得突破的动词搭配是：', options: ['make a breakthrough', 'do a breakthrough', 'break a through'], answer: 'make a breakthrough', explain: 'make。' },
    ],
    usage: { domains: ['科学', '新闻'], tone: '积极、强调', commonConfusion: ['breakdown', 'progress'] },
  });

  D('breast', {
    etymology: {
      origin: '古英语 brēost，指胸膛。现代英语既指胸部，也指女性的乳房。',
      prefix: null,
      root: { text: 'breast', gloss: '胸；乳房' },
      suffix: null,
      history: [
        { label: '古英语', text: '胸前这一部位' },
        { label: '引申', text: '鸡胸肉；beat one\'s breast 悲痛；breast the waves 挺胸破浪，文学' },
      ],
      formationLogic: '解剖义最常用。文学里 chest 与 breast 都可指胸，breast 更古、更情绪化。',
      mnemonic: 'breast 在身体正面最靠上的那一片，也是母乳的来源。',
      note: '医学搭配 breast cancer、breast milk 应使用中性语气。make a clean breast of sth 和盘托出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The clinic offers free screening for breast cancer.', chinese: '这家诊所提供免费的乳腺癌筛查。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'breast.s1', en: 'She felt a lump in her breast and booked a scan.', zh: '她觉得乳房里有一个肿块，就预约了扫描。', structure: 'in one\'s breast', grammar: '可数，左右各一时常说 breasts。', rationale: '医学语境用词要准确、不轻佻。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'make a clean chest of the error', right: 'make a clean breast of the error', reason: '和盘托出用 breast，不用 chest。', rule: 'make a clean breast of something。', special: 'chicken breast 鸡胸肉，饮食语境。' },
    ],
    quiz: [
      { id: 'breast.q1', senseId: 'breast.s1', errorType: 'meaning', type: '词义', prompt: 'breast milk 是：', options: ['母乳', '胸前的口袋', '一种波浪'], answer: '母乳', explain: '乳房分泌的奶。' },
      { id: 'breast.q2', senseId: 'breast.s1', errorType: 'collocation', type: '搭配', prompt: '彻底坦白：', options: ['make a clean breast of it', 'make a clean chest of it', 'make a breast cleanly'], answer: 'make a clean breast of it', explain: '固定习语。' },
      { id: 'breast.q3', senseId: 'breast.s1', errorType: 'confusable', type: '易混', prompt: '更日常、更中性的「胸膛」是：', options: ['chest', 'brest as an English word', 'breath'], answer: 'chest', explain: 'chest 不特指乳房。' },
      { id: 'breast.q4', senseId: 'breast.s1', errorType: 'meaning', type: '饮食', prompt: 'chicken breast 是：', options: ['鸡胸肉', '鸡的呼吸', '鸡汤'], answer: '鸡胸肉', explain: '部位用肉。' },
    ],
    usage: { domains: ['医学', '饮食'], tone: '中性', commonConfusion: ['chest', 'breath'] },
  });

  D('breastfeed', {
    etymology: {
      origin: '英语复合动词：breast「乳房」+ feed「喂养」。',
      prefix: null,
      root: { text: 'breast', gloss: '乳房' },
      suffix: { text: 'feed', gloss: '喂（复合，不是屈折后缀）' },
      history: [
        { label: '两个透明词干', text: '用母乳喂' },
        { label: '现在', text: 'breastfeed a baby；名词 breastfeeding' },
      ],
      formationLogic: '过去式 breastfed，因为后半部分 feed 的过去式是 fed，不是 feeded。',
      mnemonic: 'feed 的不规则变化整个带走：feed, fed, fed。',
      note: 'nurse 在美式英语里也可表示哺乳。公式奶用 bottle-feed，与本词相对。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She breastfed the baby for the first six months.', chinese: '头六个月她用母乳喂孩子。' },
    ],
    contexts: [
      { domain: '育儿', senseId: 'breastfeed.s1', en: 'The leaflet explains how to breastfeed in the early weeks.', zh: '这本小册子讲解头几周如何母乳喂养。', structure: 'breastfeed + 婴儿', grammar: '及物动词。', rationale: '不规则过去式是唯一容易写错的地方。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She breastfeeded the infant.', right: 'She breastfed the infant.', reason: '后半部分遵循 feed 的不规则变化。', rule: 'breastfeed / breastfed / breastfed。', special: '名词 breastfeeding 用 -ing。' },
    ],
    quiz: [
      { id: 'breastfeed.q1', senseId: 'breastfeed.s1', errorType: 'meaning', type: '词义', prompt: 'breastfeed 是：', options: ['母乳喂养', '用奶瓶喂', '喂鸡胸肉'], answer: '母乳喂养', explain: '用乳房喂。' },
      { id: 'breastfeed.q2', senseId: 'breastfeed.s1', errorType: 'grammar', type: '词形', prompt: '过去式是：', options: ['breastfed', 'breastfeeded', 'breastfeded'], answer: 'breastfed', explain: '同 feed → fed。' },
      { id: 'breastfeed.q3', senseId: 'breastfeed.s1', errorType: 'confusable', type: '易混', prompt: '用奶瓶喂是：', options: ['bottle-feed', 'breastfeed', 'breakfast'], answer: 'bottle-feed', explain: '瓶喂相对母乳。' },
      { id: 'breastfeed.q4', senseId: 'breastfeed.s1', errorType: 'grammar', type: '名词', prompt: '这种做法的名词是：', options: ['breastfeeding', 'breastfedness', 'a breast feed law'], answer: 'breastfeeding', explain: '-ing 名词。' },
    ],
    usage: { domains: ['育儿', '医学'], tone: '中性', commonConfusion: ['bottle-feed', 'nurse'] },
  });

  D('breath', {
    etymology: {
      origin: '古英语 brǣþ，最早偏指气味或呼出的气，后来成为一次呼吸的空气。',
      prefix: null,
      root: { text: 'breath', gloss: '气息（名词）' },
      suffix: null,
      history: [
        { label: '古英语', text: '呼出的气、气味' },
        { label: '现在', text: 'a breath of fresh air；hold one\'s breath；under one\'s breath 低声' },
      ],
      formationLogic: '名词 breath 没有末尾的 e。动词才是 breathe。',
      mnemonic: 'breath 短，是一口气；breathe 长一个 e，是把气吸进来的动作。',
      note: 'out of breath 上气不接下气。take a deep breath 深呼吸。a breath of wind 一丝微风。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She stepped outside for a breath of fresh air.', chinese: '她走到外面，吸一口新鲜空气。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'breath.s1', en: 'Hold your breath while the doctor listens to your chest.', zh: '医生听诊时请屏住呼吸。', structure: 'hold one\'s breath', grammar: '名词，一次用 a breath。', rationale: '与动词 breathe 的拼写是必考项。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Take a deep breathe.', right: 'Take a deep breath.', reason: '这里需要名词。breathe 是动词。', rule: 'breath 名词；breathe 动词。', special: '不要发成 bread 或 breed。' },
    ],
    quiz: [
      { id: 'breath.q1', senseId: 'breath.s1', errorType: 'grammar', type: '词性', prompt: '名词「一口气」是：', options: ['breath', 'breathe', 'bread'], answer: 'breath', explain: '没有末尾 e。' },
      { id: 'breath.q2', senseId: 'breath.s1', errorType: 'collocation', type: '搭配', prompt: '上气不接下气：', options: ['out of breath', 'out of breathe', 'out of breed'], answer: 'out of breath', explain: '名词。' },
      { id: 'breath.q3', senseId: 'breath.s1', errorType: 'meaning', type: '习语', prompt: 'say it under your breath 是：', options: ['低声说', '用呼吸证明', '在风中大喊'], answer: '低声说', explain: '几乎只给自己听见。' },
      { id: 'breath.q4', senseId: 'breath.s1', errorType: 'confusable', type: '易混', prompt: '动词「呼吸」是：', options: ['breathe', 'breath', 'breadth'], answer: 'breathe', explain: 'breadth 是宽度。' },
    ],
    usage: { domains: ['日常', '医学'], tone: '中性', commonConfusion: ['breathe', 'breadth'] },
  });

  D('breathe', {
    etymology: {
      origin: '由名词 breath 在中古英语里构成的动词，末尾加上 e，表示把气吸进呼出。',
      prefix: null,
      root: { text: 'breath', gloss: '气息' },
      suffix: { text: '-e', gloss: '构成动词的拼写' },
      history: [
        { label: '名词 breath', text: '气' },
        { label: '动词 breathe', text: '呼吸；breathe sth 低声说出；布料 can breathe 透气' },
      ],
      formationLogic: '不要按普通 -e 结尾那样漏写。现在分词 breathing，过去式 breathed。',
      mnemonic: '有 e 才能 breathe：动词比名词多一个字母。',
      note: 'breathe in / out 吸入、呼出。breathe a word 走漏一个字，常用于否定：Don\'t breathe a word.',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Breathe in slowly, then breathe out for a count of four.', chinese: '慢慢吸气，再数四下把气呼出。' },
    ],
    contexts: [
      { domain: '健康', senseId: 'breathe.s1', en: 'The window was shut and it was hard to breathe.', zh: '窗户关着，呼吸很困难。', structure: 'hard to breathe', grammar: '不及物动词。', rationale: '拼写和 in/out 搭配一起记。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'I cannot breath.', right: 'I cannot breathe.', reason: '需要动词形式。', rule: 'breathe 是动词。', special: 'breathe new life into sth 给某事注入新活力。' },
    ],
    quiz: [
      { id: 'breathe.q1', senseId: 'breathe.s1', errorType: 'grammar', type: '拼写', prompt: '请呼吸：', options: ['Please breathe.', 'Please breath.', 'Please breadth.'], answer: 'Please breathe.', explain: '动词有 e。' },
      { id: 'breathe.q2', senseId: 'breathe.s1', errorType: 'collocation', type: '搭配', prompt: '吸气：', options: ['breathe in', 'breath in', 'breathe at in'], answer: 'breathe in', explain: 'in 吸入。' },
      { id: 'breathe.q3', senseId: 'breathe.s1', errorType: 'meaning', type: '习语', prompt: 'Don\'t breathe a word. 是：', options: ['一个字也不要说出去', '不要做深呼吸', '不要吹一口气到纸上'], answer: '一个字也不要说出去', explain: '保密。' },
      { id: 'breathe.q4', senseId: 'breathe.s1', errorType: 'confusable', type: '易混', prompt: '名词是：', options: ['breath', 'breathe', 'breed'], answer: 'breath', explain: '名词更短。' },
    ],
    usage: { domains: ['健康', '日常'], tone: '中性', commonConfusion: ['breath'] },
  });

  D('breed', {
    etymology: {
      origin: '古英语 brēdan，与 brood「一窝雏、孵」同源，原意是保温、孵化、养大。',
      prefix: null,
      root: { text: 'breed', gloss: '繁殖；品种' },
      suffix: null,
      history: [
        { label: '古英语', text: '孵、养' },
        { label: '现在', text: 'breed dogs 育种；a rare breed 品种；熟悉会 breed contempt 产生' },
      ],
      formationLogic: '不规则：breed, bred, bred。名词是品种，动词是繁殖或造成。',
      mnemonic: 'brood 是一窝，breed 是把这一窝养出来。过去式 bred，不是 breeded。',
      note: 'a dying breed 越来越少的一类人，比喻。well-bred 有教养，来自「怎么被养大」。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They breed sheep on the hills above the village.', chinese: '他们在村上方的山里养羊繁殖。' },
    ],
    contexts: [
      { domain: '生物', senseId: 'breed.s1', en: 'This breed of dog needs a great deal of exercise.', zh: '这个品种的狗需要大量运动。', structure: 'a breed of', grammar: '名词 of 后接物种。', rationale: '名词「品种」和动词过去式同样常考。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The farm breeded horses.', right: 'The farm bred horses.', reason: 'breed 不规则。', rule: 'breed / bred / bred。', special: 'Familiarity breeds contempt. 过于亲昵会生出轻慢。' },
    ],
    quiz: [
      { id: 'breed.q1', senseId: 'breed.s1', errorType: 'grammar', type: '词形', prompt: '过去式是：', options: ['bred', 'breeded', 'brode'], answer: 'bred', explain: '同 feed/fed 的模式。' },
      { id: 'breed.q2', senseId: 'breed.s1', errorType: 'meaning', type: '词义', prompt: 'a breed of cattle 是：', options: ['一个牛的品种', '一次呼吸', '一块面包'], answer: '一个牛的品种', explain: '品种。' },
      { id: 'breed.q3', senseId: 'breed.s1', errorType: 'confusable', type: '易混', prompt: '不要和「面包」混淆，面包是：', options: ['bread', 'breed', 'breath'], answer: 'bread', explain: '元音不同。' },
      { id: 'breed.q4', senseId: 'breed.s1', errorType: 'collocation', type: '搭配', prompt: 'Familiarity _____ contempt.', options: ['breeds', 'breathes', 'brakes'], answer: 'breeds', explain: '谚语：亲昵生狎。' },
    ],
    usage: { domains: ['农业', '生物'], tone: '中性', commonConfusion: ['bread', 'brood'] },
  });

  D('breeze', {
    etymology: {
      origin: '16世纪英语，来自西班牙语或葡萄牙语 brisa，原指东风或东北风。',
      prefix: null,
      root: { text: 'breeze', gloss: '微风' },
      suffix: null,
      history: [
        { label: '伊比利亚语 brisa', text: '一种风' },
        { label: '引申', text: 'a breeze 轻而易举的事；breeze through an exam 轻松通过' },
      ],
      formationLogic: '风不大才叫 breeze。gale 是大风，gust 是一阵急风。',
      mnemonic: 'breeze 轻轻的。事情若只是 a breeze，就不必费力。',
      note: '动词 breeze in 一阵风似的进来，常带一点不在意。breezy 形容词：有微风的，或文笔轻快的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A cool breeze came off the sea in the evening.', chinese: '傍晚从海上吹来一阵凉风。' },
    ],
    contexts: [
      { domain: '日常', senseId: 'breeze.s1', en: 'After all that revision, the quiz was a breeze.', zh: '充分复习之后，这次小测验轻松极了。', structure: 'be a breeze', grammar: '可数名词，比喻一件容易的事。', rationale: '字面风和比喻都要会。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She breezed the exam.', right: 'She breezed through the exam.', reason: '轻松通过要用 through。', rule: 'breeze through something。', special: 'in the breeze 在风中。' },
    ],
    quiz: [
      { id: 'breeze.q1', senseId: 'breeze.s1', errorType: 'meaning', type: '词义', prompt: 'a sea breeze 是：', options: ['一阵海风', '一场风暴必称 breeze', '一块砖'], answer: '一阵海风', explain: '轻风。' },
      { id: 'breeze.q2', senseId: 'breeze.s1', errorType: 'meaning', type: '比喻', prompt: 'The interview was a breeze. 是：', options: ['面试很轻松', '面试里有风', '面试被取消'], answer: '面试很轻松', explain: '容易。' },
      { id: 'breeze.q3', senseId: 'breeze.s1', errorType: 'collocation', type: '搭配', prompt: '轻松通过考试：', options: ['breeze through the exam', 'breeze the exam', 'breathe the exam'], answer: 'breeze through the exam', explain: 'through。' },
      { id: 'breeze.q4', senseId: 'breeze.s1', errorType: 'confusable', type: '易混', prompt: '更强的大风常叫：', options: ['a gale', 'a breeze always', 'a brass'], answer: 'a gale', explain: 'gale 比 breeze 猛。' },
    ],
    usage: { domains: ['天气', '口语'], tone: '轻快', commonConfusion: ['wind', 'gale'] },
  });

  D('brew', {
    etymology: {
      origin: '古英语 brēowan，与德语 brauen 同源，专指酿啤酒，后来也指泡茶、煮咖啡。',
      prefix: null,
      root: { text: 'brew', gloss: '酿；冲泡' },
      suffix: null,
      history: [
        { label: '古英语', text: '酿造' },
        { label: '引申', text: 'a storm is brewing 风暴正在酝酿；trouble brewing 有麻烦要来' },
      ],
      formationLogic: '液体慢慢做出来，抽象事情也可以慢慢酝酿。名词 a brew 是酿出来的那种酒或茶。',
      mnemonic: 'brew 需要时间。茶在壶里，麻烦也在看不见的地方 brew。',
      note: 'brewing 酿酒业。brewery 啤酒厂。不要和 bribe 贿赂混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'I will brew a pot of tea while you unpack.', chinese: '你打开行李的时候我去泡一壶茶。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'brew.s1', en: 'A political crisis has been brewing for months.', zh: '一场政治危机已酝酿了好几个月。', structure: 'have been brewing', grammar: '不及物，进行体表示正在形成。', rationale: '具体冲泡和抽象酝酿都是核心。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She brewed the tea with a crime.', right: 'She brewed the tea. / They brewed trouble.', reason: 'brew 的宾语是饮料或正在形成的麻烦，不是贿赂。', rule: 'brew tea / beer；trouble is brewing。', special: 'home-brew 家酿。' },
    ],
    quiz: [
      { id: 'brew.q1', senseId: 'brew.s1', errorType: 'meaning', type: '词义', prompt: 'brew beer 是：', options: ['酿啤酒', '贿赂啤酒', '打碎啤酒'], answer: '酿啤酒', explain: '酿造。' },
      { id: 'brew.q2', senseId: 'brew.s1', errorType: 'meaning', type: '引申', prompt: 'A storm is brewing. 是：', options: ['风暴正在形成', '风暴被泡成茶', '风暴已经过去'], answer: '风暴正在形成', explain: '酝酿。' },
      { id: 'brew.q3', senseId: 'brew.s1', errorType: 'confusable', type: '易混', prompt: '啤酒厂是：', options: ['a brewery', 'a bribery', 'a bureau of brew law only'], answer: 'a brewery', explain: '-ery 场所。' },
      { id: 'brew.q4', senseId: 'brew.s1', errorType: 'collocation', type: '搭配', prompt: '泡一壶咖啡：', options: ['brew a pot of coffee', 'brew up a law of coffee', 'bribe a pot'], answer: 'brew a pot of coffee', explain: 'brew 也可用于咖啡。' },
    ],
    usage: { domains: ['饮食', '新闻'], tone: '中性', commonConfusion: ['brewery', 'bribe'] },
  });

  D('bribe', {
    etymology: {
      origin: '中古英语，来自古法语 bribe，原指施舍给乞丐的一块面包。后来变成为了让人做不正当的事而给的好处。',
      prefix: null,
      root: { text: 'bribe', gloss: '贿赂' },
      suffix: null,
      history: [
        { label: '法语：讨来的一口', text: '小块食物' },
        { label: '现在', text: 'bribe sb to do sth；名词 a bribe；bribery 贿赂行为' },
      ],
      formationLogic: '从「给一口吃的」变成「用利益换违规的行为」。动词和名词同形。',
      mnemonic: 'bribe 是买通，不是酿造。酿造是 brew。',
      note: 'take a bribe 受贿，offer a bribe 行贿。bribery 通常不可数，指这种罪行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She refused the bribe and reported the offer.', chinese: '她拒绝了贿赂，并举报了这次行贿。' },
    ],
    contexts: [
      { domain: '法律', senseId: 'bribe.s1', en: 'He was accused of taking bribes from suppliers.', zh: '他被指控收受供应商的贿赂。', structure: 'take a bribe from', grammar: '名词可数。动词 bribe sb to do sth。', rationale: '行贿与受贿的动词不同，名词可以相同。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They bribed him doing it.', right: 'They bribed him to do it.', reason: '目的用 to do，不用 doing。', rule: 'bribe sb to do sth。', special: 'accept / take a bribe 都是受贿。' },
    ],
    quiz: [
      { id: 'bribe.q1', senseId: 'bribe.s1', errorType: 'meaning', type: '词义', prompt: 'a bribe 是：', options: ['用以买通他人的财物', '一种烈酒', '微风'], answer: '用以买通他人的财物', explain: '贿赂。' },
      { id: 'bribe.q2', senseId: 'bribe.s1', errorType: 'grammar', type: '结构', prompt: '贿赂守卫让他开门：', options: ['bribe the guard to open the door', 'bribe the guard opening the door', 'bribe to the guard open'], answer: 'bribe the guard to open the door', explain: 'bribe sb to do。' },
      { id: 'bribe.q3', senseId: 'bribe.s1', errorType: 'collocation', type: '搭配', prompt: '受贿：', options: ['take a bribe', 'take a brew', 'do a bribery to him'], answer: 'take a bribe', explain: 'take。' },
      { id: 'bribe.q4', senseId: 'bribe.s1', errorType: 'confusable', type: '易混', prompt: '贿赂这种罪行的名词是：', options: ['bribery', 'brewery', 'bravery'], answer: 'bribery', explain: 'brewery 是啤酒厂。' },
    ],
    usage: { domains: ['法律', '新闻'], tone: '负面', commonConfusion: ['bribery', 'brew'] },
  });

  D('brick', {
    etymology: {
      origin: '中古英语 brike，来自古法语 brique，与日耳曼语里「掰下的一块」有关，不是拉丁学名',
      prefix: null,
      root: { text: 'brick', gloss: '砌墙用的硬块' },
      suffix: null,
      history: [
        { label: 'brique', text: '古法语：一块烧制或切下的建筑材料' },
        { label: 'brick', text: '现代英语：墙砖；口语里也说 a brick 指可靠的人，考试以建材义为主' },
      ],
      formationLogic: '一块能垒起来的硬块，所以墙是 brick wall，不是 stone 的同义词。',
      mnemonic: '砖是一块一块码的。看到 brick 先想墙，再想颜色。',
      note: '砖墙是 a brick wall。红砖常说 red brick。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The old school is built of red brick.', chinese: '那所老学校是红砖砌的。' },
    ],
    contexts: [
      { domain: '建筑', senseId: 'brick.s1', en: 'Each brick was laid in a straight line before the mortar dried.', zh: '灰浆干透之前，每一块砖都按直线砌好。', structure: 'Each brick / was laid / in a straight line', grammar: '可数名词，一块 a brick，砖墙用 brick 作定语。', rationale: '锁的是建材，不是抽象的「一块」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They built a bricks wall.', right: 'They built a brick wall.', reason: '作定语时 brick 不用复数。', rule: 'a brick wall / a house of brick。', special: '几块砖才用 bricks：three bricks。' },
    ],
    quiz: [
      { id: 'brick.q1', senseId: 'brick.s1', errorType: 'meaning', type: '词义', prompt: 'brick 在建筑里最常指：', options: ['砌墙的硬块', '屋顶的瓦片专名', '搅拌水泥的工具'], answer: '砌墙的硬块', explain: '砖块，用来砌墙。' },
      { id: 'brick.q2', senseId: 'brick.s1', errorType: 'collocation', type: '搭配', prompt: '砖墙：a _____ wall.', options: ['brick', 'bricks', 'bricking'], answer: 'brick', explain: '定语用单数 brick。' },
      { id: 'brick.q3', senseId: 'brick.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['The wall is made of brick.', 'The wall is made of a brickly.', 'The wall is made of brickness.'], answer: 'The wall is made of brick.', explain: '材料可用不可数 brick。' },
      { id: 'brick.q4', senseId: 'brick.s1', errorType: 'meaning', type: '词义', prompt: 'red brick 是：', options: ['红砖', '红色油漆桶', '红色窗帘'], answer: '红砖', explain: '颜色加在材料前。' },
    ],
    usage: { domains: ['建筑', '生活'], tone: '中性', commonConfusion: ['block', 'tile'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);

