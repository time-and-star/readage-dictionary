/* data/words/cet/author_depth_e3.js
 * 手敲深度补丁：captivate–choppy（200）。不改释义，只补词源提示、例句、语境、易错和检测。
 * 有把握的词源写方向；没有把握的不编造古词根。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('captivate', {
    etymology: {
      origin: '拉丁语 captivare「使成为俘虏」，与 captive 同源，来自 capere「抓住」。人被吸引到无法脱身，就是 captivate。',
      prefix: null,
      root: { text: 'captivate', gloss: '迷住' },
      suffix: null,
      history: [
        { label: '抓住成俘虏', text: '词义从强制俘虏软化为强烈吸引。' },
        { label: '现在', text: '现在指完全迷住、吸引住注意力。' },
      ],
      formationLogic: '拉丁动词。形容词 captivating。',
      mnemonic: 'captivate 把人的目光俘虏了。',
      note: 'captivate an audience。不要和 capture「俘获、拍摄」完全等同，虽然同族。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The story captivated the children until the end.', chinese: '故事把孩子们迷到了结尾。' },
    ],
    contexts: [
      { domain: '文化', senseId: 'captivate.s1', en: 'Her playing captivated the hall.', zh: '她的演奏迷住了全场。', structure: 'captivate + 人', grammar: '规则动词。', rationale: '锁住吸引义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The police captivated the thief.', right: 'The police captured the thief.', reason: '抓住罪犯用 capture。captivate 是迷住，不是逮捕。', rule: '同族不同用。', special: '听众才是 captivate 的典型宾语。' },
    ],
    quiz: [
        { id: 'captivate.q1', senseId: 'captivate.s1', errorType: 'meaning', type: '词义', prompt: 'captivate 是：', options: ['迷住或吸引', '逮捕入狱', '加字幕'], answer: '迷住或吸引', explain: 'capture 才是捉住。' },
        { id: 'captivate.q2', senseId: 'captivate.s1', errorType: 'confusable', type: '辨词', prompt: '演出让观众走不开，用：', options: ['captivate', 'capture', 'caption'], answer: 'captivate', explain: 'caption 是说明文字。' },
        { id: 'captivate.q3', senseId: 'captivate.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['The song captivated them.', 'The song captivated to them.', 'The song captivating them yesterday.'], answer: 'The song captivated them.', explain: '宾语直接跟动词。' },
        { id: 'captivate.q4', senseId: 'captivate.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['captivate an audience', 'captivate a cannon', 'captivate a capsule'], answer: 'captivate an audience', explain: '宾语是观众或人。' },
    ],
    usage: { domains: ['文化'], tone: '中性', commonConfusion: ['capture', 'captive'] },
  });

  D('captive', {
    etymology: {
      origin: '拉丁语 captivus「被抓住的」，来自 capere。可作名词指俘虏，也可作形容词表示被俘的、受限制的。',
      prefix: null,
      root: { text: 'captive', gloss: '俘虏' },
      suffix: null,
      history: [
        { label: '被抓住的人', text: '与 capture、captivate 同族。' },
        { label: '现在', text: '现在指俘虏，或形容失去自由、受制。' },
      ],
      formationLogic: '拉丁形容词兼名词。',
      mnemonic: 'captive 是已经被抓住、走不了的一方。',
      note: 'hold someone captive。形容词：a captive animal。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The captive was released after the talks.', chinese: '谈判后俘虏被释放了。' },
    ],
    contexts: [
      { domain: '历史', senseId: 'captive.s1', en: 'They kept the bird captive in a cage.', zh: '他们把鸟关在笼子里。', structure: 'hold captive', grammar: '名词或形容词。', rationale: '锁住被俘义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He was captive the soldier.', right: 'He was a captive.', reason: '表语指人时用 a captive，或用形容词 be held captive。', rule: '冠词不能省在这种单数名词表语里。', special: '不要和 captain 混淆。' },
    ],
    quiz: [
        { id: 'captive.q1', senseId: 'captive.s1', errorType: 'meaning', type: '词义', prompt: 'captive 是：', options: ['俘虏或被俘的', '船长', '标题'], answer: '俘虏或被俘的', explain: 'captain 与 caption 是别的词。' },
        { id: 'captive.q2', senseId: 'captive.s1', errorType: 'confusable', type: '辨词', prompt: '被关住的人是：', options: ['captive', 'captain', 'capital'], answer: 'captive', explain: 'capital 不是人被俘。' },
        { id: 'captive.q3', senseId: 'captive.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['hold them captive', 'hold them captively a noun', 'a captives'], answer: 'hold them captive', explain: 'hold captive 不用再加冠词在 captive 前。' },
        { id: 'captive.q4', senseId: 'captive.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a captive audience', 'a captive cannon', 'a candy captive as food'], answer: 'a captive audience', explain: '固定说法 captive audience 指不得不听的观众。' },
    ],
    usage: { domains: ['历史'], tone: '中性', commonConfusion: ['capture', 'captain'] },
  });

  D('capture', {
    etymology: {
      origin: '拉丁语 captura「抓住」，来自 capere「取、抓」。英语里既指俘虏敌人、夺取据点，也指用相机或文字捕捉画面，名词可指捕获量。',
      prefix: null,
      root: { text: 'capture', gloss: '俘获' },
      suffix: null,
      history: [
        { label: '抓住', text: '同族还有 captive、captivate。' },
        { label: '现在', text: '现在指俘获、夺取、捕捉，也可指捕获量。' },
      ],
      formationLogic: '拉丁名词转为英语动词和名词。',
      mnemonic: 'capture 是把手伸出去抓住：人、城或瞬间。',
      note: 'capture a city / capture a moment on film。名词：the capture of the fort。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The photo captured her smile.', chinese: '这张照片捕捉到了她的微笑。' },
    ],
    contexts: [
      { domain: '媒体', senseId: 'capture.s1', en: 'Troops captured the bridge at dawn.', zh: '部队在黎明夺取了桥。', structure: 'capture + 宾语', grammar: '规则动词，也可作名词。', rationale: '锁住抓住义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The camera captivated the smile as the normal verb for photos.', right: 'The camera captured her smile.', reason: '拍照、记录瞬间用 capture，不用 captivate。', rule: 'capture a moment / on camera。', special: 'captivate 是迷住人。' },
    ],
    quiz: [
        { id: 'capture.q1', senseId: 'capture.s1', errorType: 'meaning', type: '词义', prompt: 'capture 可以是：', options: ['俘获、夺取或捕捉', '迷住观众的专词', '投降'], answer: '俘获、夺取或捕捉', explain: 'capitulate 是投降。' },
        { id: 'capture.q2', senseId: 'capture.s1', errorType: 'confusable', type: '辨词', prompt: '记录下一个瞬间用：', options: ['capture', 'captivate', 'caption'], answer: 'capture', explain: 'caption 是写说明。' },
        { id: 'capture.q3', senseId: 'capture.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['They captured the town.', 'They captured to the town.', 'They capture the town yesterday.'], answer: 'They captured the town.', explain: '过去式，宾语前无 to。' },
        { id: 'capture.q4', senseId: 'capture.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['capture a moment', 'capture a candy moment wrong', 'cancel a moment'], answer: 'capture a moment', explain: '固定搭配 capture a moment。' },
    ],
    usage: { domains: ['媒体'], tone: '中性', commonConfusion: ['captive', 'captivate'] },
  });

  D('car', {
    etymology: {
      origin: '拉丁语 carrus「四轮货车」，一般认为来自凯尔特语。英语 car 从车、马车，再到汽车，也可指火车车厢。',
      prefix: null,
      root: { text: 'car', gloss: '汽车' },
      suffix: null,
      history: [
        { label: '凯尔特—拉丁货车', text: 'carrus 是有轮子的车。' },
        { label: '现在', text: '现在主要指汽车，也可指列车车厢。' },
      ],
      formationLogic: '古老借词，不是英语自造。美式 car 几乎总是小汽车；英式也可说 carriage 指车厢。',
      mnemonic: 'car 从木轮货车开到了马路。',
      note: 'by car；drive a car。复数 cars 另条列出。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We went to the station by car.', chinese: '我们开车去了车站。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'car.s1', en: 'This car seats five people.', zh: '这辆车能坐五个人。', structure: 'a car', grammar: '可数名词。', rationale: '锁住汽车义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'We went there by a car.', right: 'We went there by car.', reason: '交通方式 by car 通常不加冠词。', rule: 'by car / in a car。', special: '不要和 cart 手推车互换。' },
    ],
    quiz: [
        { id: 'car.q1', senseId: 'car.s1', errorType: 'meaning', type: '词义', prompt: 'car 最常见的意思是：', options: ['汽车', '卡片', '货物'], answer: '汽车', explain: 'card 是卡片，cargo 是货物。' },
        { id: 'car.q2', senseId: 'car.s1', errorType: 'confusable', type: '辨词', prompt: '马路上四轮载人的是：', options: ['car', 'cart', 'card'], answer: 'car', explain: 'cart 多指手推车或马车。' },
        { id: 'car.q3', senseId: 'car.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['by car', 'by a car as the fixed pattern', 'by cars to mean one trip'], answer: 'by car', explain: '方式状语用 by car。' },
        { id: 'car.q4', senseId: 'car.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['drive a car', 'drive a card', 'drive a career'], answer: 'drive a car', explain: '开车用 drive a car。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['cart', 'card'] },
  });

  D('caravan', {
    etymology: {
      origin: '波斯语 karwan「商队」，经阿拉伯语、意大利语、法语进入英语。先指结伴穿越沙漠的旅行队，英式英语又指汽车拖挂的房车。',
      prefix: null,
      root: { text: 'caravan', gloss: '（拖挂式）房车' },
      suffix: null,
      history: [
        { label: '波斯商队', text: 'karwan 是一起上路的一队人。' },
        { label: '现在', text: '现在既指旅行队，也指拖挂式房车。' },
      ],
      formationLogic: '亚洲借词，不是 car + van 的英语复合，虽然房车义容易让人这么记。van 的联想只能当记忆钩子，不是词源。',
      mnemonic: '一队人一起走，就是 caravan；后来整队住进一辆拖车上。',
      note: 'a caravan of traders；tow a caravan。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A caravan of traders crossed the pass.', chinese: '一支商队越过了山口。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'caravan.s1', en: 'They rented a caravan for the summer holiday.', zh: '他们租了一辆拖挂房车过暑假。', structure: 'a caravan', grammar: '可数名词。', rationale: '锁住车队或房车。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'They slept in a car van written as two English words from Persian.', right: 'They slept in a caravan.', reason: '房车是一个词 caravan，不要拆成 car van 当词源。', rule: '当一个名词用。', special: 'camel caravan 是骆驼队。' },
    ],
    quiz: [
        { id: 'caravan.q1', senseId: 'caravan.s1', errorType: 'meaning', type: '词义', prompt: 'caravan 可以是：', options: ['拖挂房车或旅行队', '普通小轿车', '火车站台'], answer: '拖挂房车或旅行队', explain: 'car 只是汽车。' },
        { id: 'caravan.q2', senseId: 'caravan.s1', errorType: 'confusable', type: '辨词', prompt: '沙漠里结伴的一队人是：', options: ['caravan', 'carbon', 'card'], answer: 'caravan', explain: 'carbon 是碳。' },
        { id: 'caravan.q3', senseId: 'caravan.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a caravan of camels', 'a caravan camels', 'an caravan'], answer: 'a caravan of camels', explain: '队列用 of；caravan 用 a。' },
        { id: 'caravan.q4', senseId: 'caravan.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['tow a caravan', 'tow a carbon', 'tow a caption'], answer: 'tow a caravan', explain: '拖挂用 tow。' },
    ],
    usage: { domains: ['旅行'], tone: '中性', commonConfusion: ['car', 'camel'] },
  });

  D('carbohydrate', {
    etymology: {
      origin: '十九世纪科学复合词：carbon「碳」加 hydrate「水合物」。化学上指由碳、氢、氧组成的糖类。carbon 来自拉丁语 carbo「煤」，hydrate 来自希腊语 hydor「水」。',
      prefix: null,
      root: { text: 'carbohydrate', gloss: '碳水化合物' },
      suffix: null,
      history: [
        { label: 'carbon + hydrate', text: '实验室造词，不是古代单词。' },
        { label: '现在', text: '现在指碳水化合物、糖类。' },
      ],
      formationLogic: '英语科学复合，如实说明即可。',
      mnemonic: '碳水化合物这个中文就是 carbon 加「水合物」的翻译。',
      note: '常不可数：carbohydrate in the diet；种类可数 carbohydrates。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Rice is rich in carbohydrate.', chinese: '米饭富含碳水化合物。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'carbohydrate.s1', en: 'Athletes watch their carbohydrate intake.', zh: '运动员会注意碳水摄入。', structure: '不可数或复数表种类', grammar: '名词。', rationale: '锁住营养义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He ate many carbohydrate.', right: 'He ate a lot of carbohydrate.', reason: '作营养素时常不可数，不说 many carbohydrate。', rule: 'much / a lot of carbohydrate。', special: '不要和 carbon 元素本身互换。' },
    ],
    quiz: [
        { id: 'carbohydrate.q1', senseId: 'carbohydrate.s1', errorType: 'meaning', type: '词义', prompt: 'carbohydrate 是：', options: ['碳水化合物', '元素碳本身', '硬纸板'], answer: '碳水化合物', explain: 'carbon 是碳，cardboard 是纸板。' },
        { id: 'carbohydrate.q2', senseId: 'carbohydrate.s1', errorType: 'confusable', type: '辨词', prompt: '米饭里的主要供能物质用：', options: ['carbohydrate', 'carbon', 'card'], answer: 'carbohydrate', explain: 'card 是卡片。' },
        { id: 'carbohydrate.q3', senseId: 'carbohydrate.s1', errorType: 'grammar', type: '语法', prompt: '哪句更稳？', options: ['foods high in carbohydrate', 'foods high in carbohydrateses', 'a carbohydrates as uncountable default'], answer: 'foods high in carbohydrate', explain: '总称用不可数。' },
        { id: 'carbohydrate.q4', senseId: 'carbohydrate.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['carbohydrate intake', 'carbohydrate captain', 'carbon intake of a car engine as diet'], answer: 'carbohydrate intake', explain: '摄入用 intake。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['carbon', 'sugar'] },
  });

  D('carbon', {
    etymology: {
      origin: '拉丁语 carbo「煤、木炭」。化学元素碳用这个名字，因为煤几乎就是碳。复写纸也叫 carbon paper，所以有「复写」这一义。',
      prefix: null,
      root: { text: 'carbon', gloss: '碳' },
      suffix: null,
      history: [
        { label: '拉丁 carbo', text: '煤是黑色可燃的碳。' },
        { label: '现在', text: '现在指元素碳，也可指复写纸。' },
      ],
      formationLogic: '科学用拉丁词。carbon dioxide 是二氧化碳。',
      mnemonic: '煤就是 carbon 的日常面孔。',
      note: '不可数指元素：carbon in the air。a carbon copy 是复写副本，也可比喻一模一样。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Plants take in carbon from the air.', chinese: '植物从空气中吸收碳。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'carbon.s1', en: 'Please send a carbon copy to the office.', zh: '请给办公室送一份副本。', structure: '不可数元素名', grammar: '名词。', rationale: '先锁元素碳。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The car ran on carbonhydrate.', right: 'The car does not run on carbohydrate.', reason: '车用的不是 carbohydrate。元素是 carbon，燃料课上也不要把两个词粘错。', rule: 'carbon 与 carbohydrate 要分开。', special: '复写副本是 carbon copy。' },
    ],
    quiz: [
        { id: 'carbon.q1', senseId: 'carbon.s1', errorType: 'meaning', type: '词义', prompt: 'carbon 首先是：', options: ['碳', '碳水化合物全称', '纸板'], answer: '碳', explain: '碳水化合物是 carbohydrate。' },
        { id: 'carbon.q2', senseId: 'carbon.s1', errorType: 'confusable', type: '辨词', prompt: '煤里的元素是：', options: ['carbon', 'card', 'cargo'], answer: 'carbon', explain: 'cargo 是货物。' },
        { id: 'carbon.q3', senseId: 'carbon.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['carbon dioxide', 'a carbons dioxide', 'carbon dioxides as the gas name'], answer: 'carbon dioxide', explain: '化合物名不用乱加复数。' },
        { id: 'carbon.q4', senseId: 'carbon.s1', errorType: 'collocation', type: '搭配', prompt: '哪组表示副本？', options: ['a carbon copy', 'a carbon camel', 'a cardboard copy of coal'], answer: 'a carbon copy', explain: '固定说法 carbon copy。' },
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['carbohydrate', 'coal'] },
  });

  D('carbon-based', {
    etymology: {
      origin: '英语复合形容词：carbon「碳」加 based「以……为基础的」。based 来自动词 base。用来说明某物以碳元素为结构基础，尤其是地球上的生命。',
      prefix: null,
      root: { text: 'carbon-based', gloss: '碳基的' },
      suffix: null,
      history: [
        { label: 'carbon + based', text: '连字符把两部分收成一个形容词。' },
        { label: '现在', text: '现在表示碳基的、以碳为基础的。' },
      ],
      formationLogic: '现代英语复合，不要编古代词根。',
      mnemonic: 'carbon-based 就是「建立在碳上」。',
      note: '放在名词前：carbon-based life。不要写成 carbon based life 当动词。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Scientists look for carbon-based life on other worlds.', chinese: '科学家在其他世界上寻找碳基生命。' },
    ],
    contexts: [
      { domain: '科学', senseId: 'carbon-based.s1', en: 'All animals we know are carbon-based.', zh: '我们所知的动物都是碳基的。', structure: 'carbon-based + 名词', grammar: '复合形容词，用连字符。', rationale: '锁住化学结构义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Life is carbon based on the table.', right: 'Life is carbon-based.', reason: '作表语用 carbon-based，不要再加 on the table 把 base 当动词短语。', rule: 'be carbon-based。', special: 'based on 是另一结构，表示「依据」。' },
    ],
    quiz: [
        { id: 'carbon-based.q1', senseId: 'carbon-based.s1', errorType: 'meaning', type: '词义', prompt: 'carbon-based 是：', options: ['碳基的', '以纸板为底的', '复写的'], answer: '碳基的', explain: 'based 是「以之为基」。' },
        { id: 'carbon-based.q2', senseId: 'carbon-based.s1', errorType: 'confusable', type: '辨词', prompt: '描述地球生命的化学基础用：', options: ['carbon-based', 'carbohydrate', 'cardboard'], answer: 'carbon-based', explain: 'carbohydrate 是营养素。' },
        { id: 'carbon-based.q3', senseId: 'carbon-based.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['carbon-based life', 'carbon based life forms the verb', 'a carbon-based'], answer: 'carbon-based life', explain: '形容词后要有名词，或单独作表语。' },
        { id: 'carbon-based.q4', senseId: 'carbon-based.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['carbon-based life', 'carbon-based lunch as the element', 'candy-based carbon'], answer: 'carbon-based life', explain: '常见搭配是 life。' },
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['carbon', 'based'] },
  });

  D('card', {
    etymology: {
      origin: '希腊语 khartes「纸草叶」，拉丁语 charta，法语 carte。一张硬纸就是 card，于是有贺卡、信用卡和纸牌。',
      prefix: null,
      root: { text: 'card', gloss: '卡片' },
      suffix: null,
      history: [
        { label: '纸草叶', text: '从书写材料变成小硬纸片。' },
        { label: '现在', text: '现在指卡片、贺卡、信用卡或纸牌。' },
      ],
      formationLogic: '与 chart、charter 同族。英语复合常见 credit card、playing card。',
      mnemonic: 'card 是一小片能写字或能出牌的硬纸。',
      note: 'a birthday card；play cards。cards 可指一副牌。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She wrote a short note on the card.', chinese: '她在卡片上写了短短几句。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'card.s1', en: 'He paid with a credit card.', zh: '他用信用卡付了款。', structure: 'a card', grammar: '可数名词。', rationale: '锁住硬纸片。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We played cars after dinner.', right: 'We played cards after dinner.', reason: '打牌是 cards，开车是 cars。', rule: '一个字母之差。', special: '不要和 cart 混淆。' },
    ],
    quiz: [
        { id: 'card.q1', senseId: 'card.s1', errorType: 'meaning', type: '词义', prompt: 'card 可以是：', options: ['卡片、贺卡、信用卡或纸牌', '汽车', '纸板箱材料专指'], answer: '卡片、贺卡、信用卡或纸牌', explain: 'car 是汽车。' },
        { id: 'card.q2', senseId: 'card.s1', errorType: 'confusable', type: '辨词', prompt: '生日送出的一张纸是：', options: ['card', 'cart', 'cargo'], answer: 'card', explain: 'cart 是车子。' },
        { id: 'card.q3', senseId: 'card.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a pack of cards', 'a pack of card', 'a cards pack of'], answer: 'a pack of cards', explain: '纸牌用复数 cards。' },
        { id: 'card.q4', senseId: 'card.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['credit card', 'credit car', 'credit cargo'], answer: 'credit card', explain: '信用卡是 credit card。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['car', 'cardboard'] },
  });

  D('cardboard', {
    etymology: {
      origin: '英语复合词：card「硬纸」加 board「板」。厚而硬的纸板用来做箱子。没有更早的单一古词。',
      prefix: null,
      root: { text: 'cardboard', gloss: '硬纸板' },
      suffix: null,
      history: [
        { label: 'card + board', text: '两词并列成材料名。' },
        { label: '现在', text: '现在指硬纸板，也可指纸板箱。' },
      ],
      formationLogic: '现代复合，如实说明。',
      mnemonic: 'card 厚成一块 board，就是 cardboard。',
      note: '不可数指材料：a sheet of cardboard。a cardboard box 是纸板箱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The glasses were packed in cardboard.', chinese: '眼镜用硬纸板包着。' },
    ],
    contexts: [
      { domain: '日用', senseId: 'cardboard.s1', en: 'A cardboard box sat by the door.', zh: '门口有一只纸板箱。', structure: 'cardboard box', grammar: '材料名词，常不可数。', rationale: '锁住纸板。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He bought three cardboards.', right: 'He bought three sheets of cardboard.', reason: '材料不可数，不用 three cardboards 计数。', rule: 'a sheet / piece of cardboard。', special: '箱子说 cardboard box。' },
    ],
    quiz: [
        { id: 'cardboard.q1', senseId: 'cardboard.s1', errorType: 'meaning', type: '词义', prompt: 'cardboard 是：', options: ['硬纸板', '贺卡', '纸牌游戏'], answer: '硬纸板', explain: 'card 是薄片，cardboard 是厚板。' },
        { id: 'cardboard.q2', senseId: 'cardboard.s1', errorType: 'confusable', type: '辨词', prompt: '做箱子的厚纸是：', options: ['cardboard', 'card', 'carton as the box itself'], answer: 'cardboard', explain: 'carton 更常指一只盒子。' },
        { id: 'cardboard.q3', senseId: 'cardboard.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a piece of cardboard', 'a piece of cardboards', 'many cardboard as count'], answer: 'a piece of cardboard', explain: '材料用 piece of。' },
        { id: 'cardboard.q4', senseId: 'cardboard.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a cardboard box', 'a cardboard car engine', 'a card board camel'], answer: 'a cardboard box', explain: '常见搭配 cardboard box。' },
    ],
    usage: { domains: ['日用'], tone: '中性', commonConfusion: ['card', 'carton'] },
  });

  D('cardinal', {
    etymology: {
      origin: '拉丁语 cardinalis「关键的」，来自 cardo「门轴、枢纽」。枢纽一转，门就动，所以是最重要的。天主教会用它称呼红衣主教，也是「枢机」。',
      prefix: null,
      root: { text: 'cardinal', gloss: '最重要的' },
      suffix: null,
      history: [
        { label: '门轴', text: 'cardo 是门赖以转动的轴。' },
        { label: '现在', text: '现在表示最重要的、基本的，也可指红衣主教。' },
      ],
      formationLogic: '拉丁形容词。cardinal numbers 是基数词。',
      mnemonic: 'cardinal 是门轴：没有它，别的都转不起来。',
      note: 'a cardinal rule；cardinal points 是基本方位。大写 Cardinal 常指主教。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Honesty is a cardinal rule in the lab.', chinese: '诚实是实验室的基本规矩。' },
    ],
    contexts: [
      { domain: '宗教', senseId: 'cardinal.s1', en: 'The cardinal spoke after the service.', zh: '红衣主教在礼拜后讲话。', structure: 'a cardinal rule', grammar: '形容词或名词。', rationale: '先锁「最重要的」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'The cardinal number wore red in the math class.', right: 'Cardinal numbers do not wear red.', reason: '基数词是 cardinal numbers。穿红衣的是 Cardinal 主教。', rule: '大小写和搭配能分开两义。', special: '不要和 card 卡片混淆。' },
    ],
    quiz: [
        { id: 'cardinal.q1', senseId: 'cardinal.s1', errorType: 'meaning', type: '词义', prompt: 'cardinal 作为形容词是：', options: ['最重要的或基本的', '硬纸的', '心脏的'], answer: '最重要的或基本的', explain: 'cardiac 才是心脏的，本词条不是。' },
        { id: 'cardinal.q2', senseId: 'cardinal.s1', errorType: 'confusable', type: '辨词', prompt: '基数词叫：', options: ['cardinal numbers', 'cardboard numbers', 'cargo numbers'], answer: 'cardinal numbers', explain: '固定术语。' },
        { id: 'cardinal.q3', senseId: 'cardinal.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a cardinal rule', 'a cardinal', 'cardinal a rule'], answer: 'a cardinal rule', explain: '形容词修饰 rule。' },
        { id: 'cardinal.q4', senseId: 'cardinal.s1', errorType: 'context', type: '语境', prompt: '穿红衣、在教会里的 Cardinal 是：', options: ['红衣主教', '纸板', '船长'], answer: '红衣主教', explain: '名词义，常大写。' },
    ],
    usage: { domains: ['宗教'], tone: '中性', commonConfusion: ['card', 'basic'] },
  });

  D('care', {
    etymology: {
      origin: '古英语 caru「忧虑、悲伤、操心」。操心后来分成两面：关心照料，以及小心。动词 care 表示在乎。',
      prefix: null,
      root: { text: 'care', gloss: '关心' },
      suffix: null,
      history: [
        { label: '古英语忧虑', text: 'caru 原是心里放不下。' },
        { label: '现在', text: '现在指关心、照料、小心，动词表示在乎。' },
      ],
      formationLogic: '日耳曼词，不是拉丁 cura 的直接拼写，虽然意思可对照。教学上用古英语来源即可。',
      mnemonic: 'care 是心里还挂着这件事。',
      note: 'take care of；care about；with care。名词常不可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Please take care of the keys.', chinese: '请保管好钥匙。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'care.s1', en: 'Handle the glass with care.', zh: '玻璃要小心轻放。', structure: 'take care of / with care', grammar: '名词或动词。', rationale: '锁住关心与小心。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Take care the baby.', right: 'Take care of the baby.', reason: '照料必须有 of：take care of。', rule: 'take care of someone。', special: 'care about 是在乎，care for 另条。' },
    ],
    quiz: [
        { id: 'care.q1', senseId: 'care.s1', errorType: 'meaning', type: '词义', prompt: 'care 可以表示：', options: ['关心、照料或小心', '职业', '地毯'], answer: '关心、照料或小心', explain: 'career 是职业，carpet 是地毯。' },
        { id: 'care.q2', senseId: 'care.s1', errorType: 'confusable', type: '辨词', prompt: '小心轻放用：', options: ['with care', 'with career', 'with cargo'], answer: 'with care', explain: 'career 是生涯。' },
        { id: 'care.q3', senseId: 'care.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['take care of the child', 'take care the child', 'take a care of the child'], answer: 'take care of the child', explain: 'of 不能省，care 这里通常无冠词。' },
        { id: 'care.q4', senseId: 'care.s1', errorType: 'collocation', type: '搭配', prompt: '哪组表示在乎？', options: ['care about the result', 'care the result', 'care result about'], answer: 'care about the result', explain: '在乎用 care about。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['careful', 'career'] },
  });

  D('care for', {
    etymology: {
      origin: '英语短语：动词 care 加介词 for。care 来自古英语 caru「操心」。care for 既指照顾，也指喜欢，语气常偏温和或用于否定。',
      prefix: null,
      root: { text: 'care for', gloss: '照顾' },
      suffix: null,
      history: [
        { label: 'care + for', text: '介词 for 引出被照顾或被喜欢的对象。' },
        { label: '现在', text: '现在表示照顾，或表示喜欢。' },
      ],
      formationLogic: '短语动词，不是新词根。',
      mnemonic: 'care for 是把操心用在某人身上，或心里喜欢。',
      note: 'care for a patient；I do not care for loud music。不要写成 care of。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Nurses care for patients on this ward.', chinese: '护士照顾这个病房的病人。' },
    ],
    contexts: [
      { domain: '医疗', senseId: 'care for.s1', en: 'He cares for old clocks.', zh: '他喜欢旧钟表。', structure: 'care for + 名词', grammar: '短语动词。', rationale: '两义都常见，先锁照顾。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She cares about the sick child as the nurse duty verb.', right: 'She cares for the sick child.', reason: '护士的照料用 care for。care about 只是关心在乎，不一定动手照护。', rule: 'care for 对人提供照料。', special: '否定 I do not care for 常是不喜欢。' },
    ],
    quiz: [
        { id: 'care for.q1', senseId: 'care for.s1', errorType: 'meaning', type: '词义', prompt: 'care for 可以是：', options: ['照顾或喜欢', '小心翼翼地开车', '职业规划'], answer: '照顾或喜欢', explain: '不要和 career 混淆。' },
        { id: 'care for.q2', senseId: 'care for.s1', errorType: 'confusable', type: '辨词', prompt: '照看病人用：', options: ['care for', 'care about only as worry', 'carry off'], answer: 'care for', explain: 'carry off 是成功完成或抢走。' },
        { id: 'care for.q3', senseId: 'care for.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['care for the patient', 'care for to the patient', 'care the patient for'], answer: 'care for the patient', explain: 'for 在动词后、宾语前。' },
        { id: 'care for.q4', senseId: 'care for.s1', errorType: 'context', type: '语境', prompt: 'I do not care for tea 是：', options: ['我不喜欢茶', '我不照顾茶园', '我没有茶的职业'], answer: '我不喜欢茶', explain: '否定时常是口味。' },
    ],
    usage: { domains: ['医疗'], tone: '中性', commonConfusion: ['care', 'career'] },
  });

  D('career', {
    etymology: {
      origin: '法语 carriere，来自拉丁语 carrus「车」。原指马车奔驰的跑道，所以有「飞奔」，后来把人生一路奔去的路程叫 career，即生涯、职业。',
      prefix: null,
      root: { text: 'career', gloss: '职业' },
      suffix: null,
      history: [
        { label: '跑道', text: '车跑的路，转成人生道路。' },
        { label: '现在', text: '现在主要指职业、生涯，动词或形容词可指飞奔、全速的。' },
      ],
      formationLogic: '与 car 同族，不是 care 加 -er。',
      mnemonic: 'career 是一辆车跑完的那条职业路。',
      note: 'a career in medicine。复数 careers。不要和 carer 护理者混淆。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She hopes for a career in teaching.', chinese: '她希望从事教书这个职业。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'career.s1', en: 'His career began in a small firm.', zh: '他的职业生涯始于一家小公司。', structure: 'a career in', grammar: '可数名词。', rationale: '锁住职业义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She is my career and looks after my father.', right: 'She is my carer and looks after my father.', reason: '照顾人的是 carer。career 是职业。', rule: '-er 位置不同。', special: 'care 是关心。' },
    ],
    quiz: [
        { id: 'career.q1', senseId: 'career.s1', errorType: 'meaning', type: '词义', prompt: 'career 最常见是：', options: ['职业或生涯', '照料者', '小心'], answer: '职业或生涯', explain: 'carer 才是照料者。' },
        { id: 'career.q2', senseId: 'career.s1', errorType: 'confusable', type: '辨词', prompt: '一辈子的工作路是：', options: ['career', 'carer', 'carpet'], answer: 'career', explain: 'carpet 是地毯。' },
        { id: 'career.q3', senseId: 'career.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a career in law', 'a career of law school the', 'an career'], answer: 'a career in law', explain: '领域用 in；career 用 a。' },
        { id: 'career.q4', senseId: 'career.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['pursue a career', 'pursue a carer', 'pursue a cargo'], answer: 'pursue a career', explain: '追求事业用 pursue a career。' },
    ],
    usage: { domains: ['职场'], tone: '中性', commonConfusion: ['carer', 'care'] },
  });

  D('careful', {
    etymology: {
      origin: '古英语系统里的 care「操心、小心」加形容词后缀 -ful「充满……的」。充满小心，就是 careful。',
      prefix: null,
      root: { text: 'careful', gloss: '小心的' },
      suffix: null,
      history: [
        { label: 'care + -ful', text: '-ful 不是「满满一勺」的名词 ful，这里是形容词后缀。' },
        { label: '现在', text: '现在表示小心的、仔细的。' },
      ],
      formationLogic: '英语派生。反义是 careless。',
      mnemonic: '心里充满 care，手脚就 careful。',
      note: 'be careful with / of；careful to do。副词 carefully。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Be careful with the wet floor.', chinese: '小心地滑。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'careful.s1', en: 'She made a careful copy of the map.', zh: '她仔细抄了一份地图。', structure: 'be careful with', grammar: '形容词。', rationale: '锁住仔细。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'Be careful to the knife.', right: 'Be careful with the knife.', reason: '对物品小心常用 with，不用 to。', rule: 'careful with something。', special: 'careful of 多用于提防。' },
    ],
    quiz: [
        { id: 'careful.q1', senseId: 'careful.s1', errorType: 'meaning', type: '词义', prompt: 'careful 是：', options: ['小心的或仔细的', '粗心的', '职业的'], answer: '小心的或仔细的', explain: 'careless 是粗心。' },
        { id: 'careful.q2', senseId: 'careful.s1', errorType: 'confusable', type: '辨词', prompt: '过马路要：', options: ['be careful', 'be careless', 'be a career'], answer: 'be careful', explain: 'careless 正好相反。' },
        { id: 'careful.q3', senseId: 'careful.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['careful with glass', 'careful glass', 'careful to glass'], answer: 'careful with glass', explain: '用 with。' },
        { id: 'careful.q4', senseId: 'careful.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a careful reader', 'a careful of reader', 'a care full reader as two words'], answer: 'a careful reader', explain: '写成一个词。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['careless', 'care'] },
  });

  D('careless', {
    etymology: {
      origin: 'care「小心、关心」加否定后缀 -less「没有」。没有那份小心，就是 careless。',
      prefix: null,
      root: { text: 'careless', gloss: '粗心的' },
      suffix: null,
      history: [
        { label: 'care + -less', text: '-less 表示缺乏。' },
        { label: '现在', text: '现在表示粗心的、不小心的。' },
      ],
      formationLogic: '英语派生，与 careful 对举。',
      mnemonic: 'less care，就容易出错。',
      note: 'careless about / with。副词 carelessly。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A careless mistake changed the total.', chinese: '一个粗心的错误改动了总数。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'careless.s1', en: 'Do not be careless with the data.', zh: '不要粗心对待这些数据。', structure: 'be careless with', grammar: '形容词。', rationale: '锁住粗心。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He was careless to his keys and lost them.', right: 'He was careless with his keys.', reason: '对物品马虎用 with，不用 to。', rule: 'careless with。', special: '不要写成 care less 当动词短语除非真是「较少关心」。' },
    ],
    quiz: [
        { id: 'careless.q1', senseId: 'careless.s1', errorType: 'meaning', type: '词义', prompt: 'careless 是：', options: ['粗心的', '仔细的', '职业的'], answer: '粗心的', explain: 'careful 是反义。' },
        { id: 'careless.q2', senseId: 'careless.s1', errorType: 'confusable', type: '辨词', prompt: '丢三落四用：', options: ['careless', 'careful', 'carer'], answer: 'careless', explain: 'carer 是照料的人。' },
        { id: 'careless.q3', senseId: 'careless.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['careless with numbers', 'careless numbers', 'careless to numbers'], answer: 'careless with numbers', explain: '用 with。' },
        { id: 'careless.q4', senseId: 'careless.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a careless error', 'a careless career error as job', 'a careful error'], answer: 'a careless error', explain: '错误来自粗心才用 careless。' },
    ],
    usage: { domains: ['学习'], tone: '中性', commonConfusion: ['careful', 'care'] },
  });

  D('carer', {
    etymology: {
      origin: '动词 care 加施事后缀 -er，指照顾病人或不能自理者的人。care 来自古英语 caru。英式英语常用，美式更常说 caregiver。',
      prefix: null,
      root: { text: 'carer', gloss: '照料者' },
      suffix: null,
      history: [
        { label: 'care + -er', text: '-er 指做这件事的人。' },
        { label: '现在', text: '现在指照料者、看护人。' },
      ],
      formationLogic: '英语派生。不是 career「职业」的一种拼法。',
      mnemonic: 'carer 是把 care 做成工作或日常责任的人。',
      note: 'a carer for her mother。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Her carer visits every morning.', chinese: '她的看护每天早上来。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'carer.s1', en: 'The carer helped him get dressed.', zh: '看护人帮他穿好衣服。', structure: 'a carer', grammar: '可数名词，指人。', rationale: '锁住照护者。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He chose teaching as his carer.', right: 'He chose teaching as his career.', reason: '职业是 career。carer 是照看人的人。', rule: '拼写差一个 e 的位置。', special: '不要互换。' },
    ],
    quiz: [
        { id: 'carer.q1', senseId: 'carer.s1', errorType: 'meaning', type: '词义', prompt: 'carer 是：', options: ['照料者或看护人', '职业', '地毯'], answer: '照料者或看护人', explain: 'career 是职业。' },
        { id: 'carer.q2', senseId: 'carer.s1', errorType: 'confusable', type: '辨词', prompt: '每天照顾老人的人是：', options: ['carer', 'career', 'caretaker of a building only'], answer: 'carer', explain: 'caretaker 常是楼宇管理员，不一定护理病人。' },
        { id: 'carer.q3', senseId: 'carer.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two carers', 'two carer', 'a carers'], answer: 'two carers', explain: '指人可数。' },
        { id: 'carer.q4', senseId: 'carer.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a carer for the elderly', 'a career for the elderly person as nurse title', 'a carpet for the elderly'], answer: 'a carer for the elderly', explain: '对象用 for。' },
    ],
    usage: { domains: ['生活'], tone: '中性', commonConfusion: ['career', 'caretaker'] },
  });

  D('caress', {
    etymology: {
      origin: '意大利语 carezza「亲昵、爱抚」，一般联系到拉丁语 carus「亲爱的」。英语 caress 可作名词或动词，指温柔地摸。',
      prefix: null,
      root: { text: 'caress', gloss: '爱抚' },
      suffix: null,
      history: [
        { label: '意大利语亲昵', text: 'carus 是「珍贵、亲爱」。' },
        { label: '现在', text: '现在指爱抚、轻抚。' },
      ],
      formationLogic: '罗曼语借词。与 care「操心」不是同一条古英语线，不要强行合并。',
      mnemonic: 'caress 是因为亲爱才轻轻碰。',
      note: 'a gentle caress；caress someones face。动词规则。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He gave the child a gentle caress.', chinese: '他轻轻抚了抚孩子。' },
    ],
    contexts: [
      { domain: '情感', senseId: 'caress.s1', en: 'She caressed the old dog.', zh: '她轻抚那条老狗。', structure: 'a caress', grammar: '可数名词，也可作动词。', rationale: '锁住轻抚。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She careered the dog kindly.', right: 'She caressed the dog.', reason: '轻抚是 caress。career 当动词是飞奔。', rule: '词形不同。', special: '不要和 care 的 take care 混成一个词。' },
    ],
    quiz: [
        { id: 'caress.q1', senseId: 'caress.s1', errorType: 'meaning', type: '词义', prompt: 'caress 是：', options: ['爱抚或轻抚', '职业飞奔', '看护人'], answer: '爱抚或轻抚', explain: '名词动词都可以。' },
        { id: 'caress.q2', senseId: 'caress.s1', errorType: 'confusable', type: '辨词', prompt: '温柔地摸用：', options: ['caress', 'carer', 'caretaker'], answer: 'caress', explain: '后两个是人。' },
        { id: 'caress.q3', senseId: 'caress.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a gentle caress', 'a gentle caresses', 'an caress'], answer: 'a gentle caress', explain: '单数 a。' },
        { id: 'caress.q4', senseId: 'caress.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['caress a cheek', 'caress a career', 'caress a cargo'], answer: 'caress a cheek', explain: '宾语是身体或动物。' },
    ],
    usage: { domains: ['情感'], tone: '中性', commonConfusion: ['care', 'touch'] },
  });

  D('caretaker', {
    etymology: {
      origin: '英语复合词：care「照料」加 taker「承担者」。字面是把照看这件事接下来的人，职务上常指楼宇、场地的管理人。',
      prefix: null,
      root: { text: 'caretaker', gloss: '管理人' },
      suffix: null,
      history: [
        { label: 'care + taker', text: '不是古代单一名词。' },
        { label: '现在', text: '现在指管理人、看管人，也可形容临时看守的政府 caretaker government。' },
      ],
      formationLogic: '现代复合，如实说明。',
      mnemonic: 'caretaker 把 care 接过来，负责这栋楼或这块地。',
      note: 'a caretaker of the building。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The caretaker locked the school gates.', chinese: '管理员锁上了校门。' },
    ],
    contexts: [
      { domain: '校园', senseId: 'caretaker.s1', en: 'Ask the caretaker for the spare key.', zh: '向看管人要备用钥匙。', structure: 'a caretaker', grammar: '可数名词，指人。', rationale: '锁住看管职务。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The caretaker nursed the patient all night as the usual British job title.', right: 'The carer nursed the patient all night.', reason: '病床边的护理者更常用 carer 或 nurse。caretaker 多半管房子。', rule: '职务不要混。', special: 'caretaker government 是看守政府。' },
    ],
    quiz: [
        { id: 'caretaker.q1', senseId: 'caretaker.s1', errorType: 'meaning', type: '词义', prompt: 'caretaker 常指：', options: ['楼宇或场地的看管人', '职业规划师', '船长'], answer: '楼宇或场地的看管人', explain: '本条是管理人。' },
        { id: 'caretaker.q2', senseId: 'caretaker.s1', errorType: 'confusable', type: '辨词', prompt: '锁校门的人更可能是：', options: ['caretaker', 'carer', 'career'], answer: 'caretaker', explain: 'career 不是人的职务名称在这句里。' },
        { id: 'caretaker.q3', senseId: 'caretaker.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['the caretaker of the hall', 'the caretaker the hall', 'a caretakers'], answer: 'the caretaker of the hall', explain: '用 of。' },
        { id: 'caretaker.q4', senseId: 'caretaker.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a caretaker government', 'a caretaker career', 'a care taker camel'], answer: 'a caretaker government', explain: '看守政府是固定搭配。' },
    ],
    usage: { domains: ['校园'], tone: '中性', commonConfusion: ['carer', 'care'] },
  });

  D('cargo', {
    etymology: {
      origin: '西班牙语 cargo「装载」，动词 cargar「装货」，再追溯到拉丁语 carricare，与 car、carrus「车」有关。装上船或车上的一批货就是 cargo。',
      prefix: null,
      root: { text: 'cargo', gloss: '货物' },
      suffix: null,
      history: [
        { label: '装载', text: '与车、运载同族。' },
        { label: '现在', text: '现在指船、飞机或卡车上的货物。' },
      ],
      formationLogic: '西班牙语名词进入英语。',
      mnemonic: 'cargo 是车或船肚子里的货。',
      note: '不可数或集合：a cargo of rice。复数 cargoes 或 cargos。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The ship carried a cargo of timber.', chinese: '这艘船载着一批木材。' },
    ],
    contexts: [
      { domain: '运输', senseId: 'cargo.s1', en: 'Customs checked the cargo.', zh: '海关检查了货物。', structure: 'a cargo of', grammar: '名词。', rationale: '锁住货运。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The cargo drove us to school.', right: 'The car drove us to school.', reason: '载人去学校的是 car。cargo 是货，不是车。', rule: '听起来近，词类角色不同。', special: '不要和 carriage 车厢完全等同。' },
    ],
    quiz: [
        { id: 'cargo.q1', senseId: 'cargo.s1', errorType: 'meaning', type: '词义', prompt: 'cargo 是：', options: ['货物', '汽车', '地毯'], answer: '货物', explain: 'car 是汽车。' },
        { id: 'cargo.q2', senseId: 'cargo.s1', errorType: 'confusable', type: '辨词', prompt: '船舱里的木材叫：', options: ['cargo', 'car', 'card'], answer: 'cargo', explain: 'card 是卡片。' },
        { id: 'cargo.q3', senseId: 'cargo.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a cargo of oil', 'a cargo oil of', 'an cargo'], answer: 'a cargo of oil', explain: '内容用 of；cargo 用 a。' },
        { id: 'cargo.q4', senseId: 'cargo.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['unload the cargo', 'unload the career', 'unload the caress'], answer: 'unload the cargo', explain: '卸货用 unload。' },
    ],
    usage: { domains: ['运输'], tone: '中性', commonConfusion: ['car', 'carry'] },
  });

  D('carnival', {
    etymology: {
      origin: '意大利语 carnevale。传统解释是拉丁语 carne「肉」加 levare「撤走」，指大斋期前告别肉食的节日。这个拆词很流行，但细节有争议，教学上只把它当作常见说法，不讲成铁板钉钉的唯一词源。',
      prefix: null,
      root: { text: 'carnival', gloss: '嘉年华' },
      suffix: null,
      history: [
        { label: '斋前节日', text: '从意大利狂欢节进入英语。' },
        { label: '现在', text: '现在指嘉年华、狂欢节，有游行、音乐和化装。' },
      ],
      formationLogic: '借词。词源细节有争议时不要再加更早的假词根。',
      mnemonic: 'carnival 让人想起斋戒前最后的热闹。',
      note: 'a street carnival。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The carnival filled the streets with music.', chinese: '狂欢节让街上充满音乐。' },
    ],
    contexts: [
      { domain: '文化', senseId: 'carnival.s1', en: 'We watched the carnival parade.', zh: '我们看了狂欢节游行。', structure: 'a carnival', grammar: '可数名词。', rationale: '锁住节日义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They joined the carnival parade of meat diet only.', right: 'They joined the carnival parade.', reason: '说节日活动用 carnival parade 即可，不必在句子里塞词源。', rule: 'carnival parade。', special: '不要和 caravan 旅行队混淆。' },
    ],
    quiz: [
        { id: 'carnival.q1', senseId: 'carnival.s1', errorType: 'meaning', type: '词义', prompt: 'carnival 是：', options: ['嘉年华或狂欢节', '商队房车', '货物'], answer: '嘉年华或狂欢节', explain: 'caravan 是另一词。' },
        { id: 'carnival.q2', senseId: 'carnival.s1', errorType: 'confusable', type: '辨词', prompt: '街上化装游行更可能是：', options: ['carnival', 'caravan', 'cargo'], answer: 'carnival', explain: 'cargo 是货。' },
        { id: 'carnival.q3', senseId: 'carnival.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['at the carnival', 'at carnival the', 'a carnivals'], answer: 'at the carnival', explain: '介词短语用 the carnival。' },
        { id: 'carnival.q4', senseId: 'carnival.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a carnival parade', 'a carnival cargo', 'a caravan parade of meat'], answer: 'a carnival parade', explain: '游行用 parade。' },
    ],
    usage: { domains: ['文化'], tone: '中性', commonConfusion: ['caravan', 'festival'] },
  });

  D('carp', {
    etymology: {
      origin: '动词「挑剔、唠叨抱怨」多半来自古诺尔斯语 karpa「吹牛、吵」。它和名词 carp「鲤鱼」（拉丁语 carpa）不是同一个词，只是后来拼写相同。本条是动词。',
      prefix: null,
      root: { text: 'carp', gloss: '挑剔' },
      suffix: null,
      history: [
        { label: '古诺尔斯语抱怨', text: '与鱼名词源分开。' },
        { label: '现在', text: '现在指不停地挑剔、抱怨。' },
      ],
      formationLogic: '不要编成「抓鱼」。名词鲤鱼另计。',
      mnemonic: 'carp 当动词时，是耳朵听烦了的那种挑刺。',
      note: 'carp at someone / about something。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'He carps at every small delay.', chinese: '他为每一次小耽搁唠叨抱怨。' },
    ],
    contexts: [
      { domain: '态度', senseId: 'carp.s1', en: 'Stop carping about the schedule.', zh: '别再对日程挑三拣四了。', structure: 'carp at / about', grammar: '规则动词。', rationale: '锁住抱怨义，不锁鲤鱼。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We carp a fish for dinner in this entry.', right: 'We complain about dinner.', reason: '本条 carp 不是抓鱼。抱怨用 carp about 或 complain about。', rule: '词条是动词挑剔。', special: '鲤鱼是另一个词。' },
    ],
    quiz: [
        { id: 'carp.q1', senseId: 'carp.s1', errorType: 'meaning', type: '词义', prompt: '本条 carp 是：', options: ['挑剔地抱怨', '鲤鱼作为本条核心', '地毯'], answer: '挑剔地抱怨', explain: '鱼义不是这条动词的核心。' },
        { id: 'carp.q2', senseId: 'carp.s1', errorType: 'confusable', type: '辨词', prompt: '对小事没完没了地挑，用：', options: ['carp', 'carry', 'cart'], answer: 'carp', explain: 'carry 是搬运。' },
        { id: 'carp.q3', senseId: 'carp.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['carp about the food', 'carp the food', 'carp to food about'], answer: 'carp about the food', explain: '内容用 about。' },
        { id: 'carp.q4', senseId: 'carp.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['carp at his mistakes', 'carp at a fish dinner as the verb pattern', 'carry at his mistakes'], answer: 'carp at his mistakes', explain: '对人用 carp at。' },
    ],
    usage: { domains: ['态度'], tone: '中性', commonConfusion: ['carry', 'complain'] },
  });

  D('carpenter', {
    etymology: {
      origin: '拉丁语 carpentarius「造车的工匠」，来自 carpentum「双轮马车」。造车要用木头，英语里变成做木工的人。',
      prefix: null,
      root: { text: 'carpenter', gloss: '木匠' },
      suffix: null,
      history: [
        { label: '造车匠', text: '与 car、carriage 同属车这一族。' },
        { label: '现在', text: '现在指木匠、木工。' },
      ],
      formationLogic: '拉丁职业名经法语进入英语。',
      mnemonic: 'carpenter 最早是做马车木头活的人。',
      note: 'a carpenter。不可说 carpenter 当动词的标准词，动词是 do carpentry。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'A carpenter repaired the broken door.', chinese: '木匠修好了那扇破门。' },
    ],
    contexts: [
      { domain: '职业', senseId: 'carpenter.s1', en: 'The carpenter measured the wood twice.', zh: '木匠把木头量了两遍。', structure: 'a carpenter', grammar: '可数名词，指人。', rationale: '锁住木工。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He carpenters the table as the usual verb.', right: 'A carpenter made the table.', reason: '职务用名词 a carpenter。动词短语不要自造 carpenters。', rule: 'a carpenter makes / repairs。', special: '不要和 carpet 地毯混淆。' },
    ],
    quiz: [
        { id: 'carpenter.q1', senseId: 'carpenter.s1', errorType: 'meaning', type: '词义', prompt: 'carpenter 是：', options: ['木匠', '地毯', '马车本身'], answer: '木匠', explain: 'carpet 是地毯，carriage 才是马车。' },
        { id: 'carpenter.q2', senseId: 'carpenter.s1', errorType: 'confusable', type: '辨词', prompt: '做木头家具的人是：', options: ['carpenter', 'carpet', 'carrier'], answer: 'carpenter', explain: 'carrier 是运输者。' },
        { id: 'carpenter.q3', senseId: 'carpenter.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two carpenters', 'two carpenter', 'a carpenters'], answer: 'two carpenters', explain: '指人可数。' },
        { id: 'carpenter.q4', senseId: 'carpenter.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a skilled carpenter', 'a skilled carpet', 'a skilled cargo'], answer: 'a skilled carpenter', explain: '技能修饰木匠。' },
    ],
    usage: { domains: ['职业'], tone: '中性', commonConfusion: ['carpet', 'carriage'] },
  });

  D('carpet', {
    etymology: {
      origin: '拉丁语 carpere「摘、拔」，经由古法语或意大利语，原指拉绒、毛织的厚布。铺在地上的厚织物就是 carpet。动词表示铺地毯。',
      prefix: null,
      root: { text: 'carpet', gloss: '地毯' },
      suffix: null,
      history: [
        { label: '拉绒织物', text: 'carpere 是拔、扯（毛）。' },
        { label: '现在', text: '现在指地毯，也可作动词铺地毯。' },
      ],
      formationLogic: '拉丁动词转成织物名。与 carpenter 只是开头像。',
      mnemonic: 'carpet 是从毛里「拔」出来织成、铺在脚下的一层。',
      note: 'on the carpet 可字面指在地毯上，口语也可指被叫去训话。a red carpet。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The child sat on the carpet.', chinese: '孩子坐在地毯上。' },
    ],
    contexts: [
      { domain: '家居', senseId: 'carpet.s1', en: 'They carpeted the stairs.', zh: '他们给楼梯铺了地毯。', structure: 'on the carpet', grammar: '可数或不可数，视一块或材料。', rationale: '锁住地面覆盖物。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The carpenter covered the floor.', right: 'The carpet covered the floor.', reason: '铺在地上的是 carpet。carpenter 是人。', rule: '人与物不要互换。', special: '不要和 cart 混淆。' },
    ],
    quiz: [
        { id: 'carpet.q1', senseId: 'carpet.s1', errorType: 'meaning', type: '词义', prompt: 'carpet 是：', options: ['地毯', '木匠', '运货马车'], answer: '地毯', explain: 'carpenter 是木匠。' },
        { id: 'carpet.q2', senseId: 'carpet.s1', errorType: 'confusable', type: '辨词', prompt: '脚底下的厚织物是：', options: ['carpet', 'carpenter', 'cargo'], answer: 'carpet', explain: 'cargo 是货。' },
        { id: 'carpet.q3', senseId: 'carpet.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['on the carpet', 'on carpet the', 'a carpets room'], answer: 'on the carpet', explain: '用 on the carpet。' },
        { id: 'carpet.q4', senseId: 'carpet.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a red carpet', 'a red carpenter', 'a red cargo'], answer: 'a red carpet', explain: '红地毯是 red carpet。' },
    ],
    usage: { domains: ['家居'], tone: '中性', commonConfusion: ['carpenter', 'floor'] },
  });

  D('carport', {
    etymology: {
      origin: '英语复合词：car「汽车」加 port「口、遮蔽处」。一侧或多侧开敞、上面有顶的停车棚。port 这里取「可停靠的口」这一英语用法，不是港口专名。',
      prefix: null,
      root: { text: 'carport', gloss: '车棚' },
      suffix: null,
      history: [
        { label: 'car + port', text: '二十世纪汽车时代的复合词。' },
        { label: '现在', text: '现在指车棚、停车棚。' },
      ],
      formationLogic: '现代复合，不要编拉丁港口词源故事当唯一解释。',
      mnemonic: '车停在一个有顶的口下，就是 carport。',
      note: 'a carport beside the house。与 garage 不同，通常不全封闭。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They parked under the carport when it rained.', chinese: '下雨时他们把车停在车棚下。' },
    ],
    contexts: [
      { domain: '居住', senseId: 'carport.s1', en: 'The carport is open on two sides.', zh: '这个车棚有两侧是敞开的。', structure: 'a carport', grammar: '可数名词。', rationale: '锁住简易车棚。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'They stored the wood in the carport as a carpenter shop name.', right: 'They parked the car under the carport.', reason: 'carport 是停车的棚，不是木匠铺。', rule: '功能是停车。', special: '不要和 airport 的 port 直接画等号。' },
    ],
    quiz: [
        { id: 'carport.q1', senseId: 'carport.s1', errorType: 'meaning', type: '词义', prompt: 'carport 是：', options: ['车棚', '港口里的汽车', '车厢'], answer: '车棚', explain: '复合词，指家用停车棚。' },
        { id: 'carport.q2', senseId: 'carport.s1', errorType: 'confusable', type: '辨词', prompt: '房子旁边敞开的停车顶棚是：', options: ['carport', 'carpet', 'cargo'], answer: 'carport', explain: 'carpet 是地毯。' },
        { id: 'carport.q3', senseId: 'carport.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['under the carport', 'under carport the', 'a carports'], answer: 'under the carport', explain: '位置用 under the carport。' },
        { id: 'carport.q4', senseId: 'carport.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['park under the carport', 'park under the carpet', 'park under the caption'], answer: 'park under the carport', explain: '停车用 park。' },
    ],
    usage: { domains: ['居住'], tone: '中性', commonConfusion: ['car', 'garage'] },
  });

  D('carriage', {
    etymology: {
      origin: '古法语 cariage「搬运」，与 carry 同源，最终回到拉丁语 carrus「车」。所以既指马车，也指火车车厢，还可指运输这件事。',
      prefix: null,
      root: { text: 'carriage', gloss: '（火车）车厢' },
      suffix: null,
      history: [
        { label: '搬运之车', text: 'carry 的名词亲属。' },
        { label: '现在', text: '现在指火车车厢、马车或运输。' },
      ],
      formationLogic: '与 car 同族。英式 passenger carriage 即客车车厢。',
      mnemonic: 'carriage 是被拉着走、用来载人或货的那一节。',
      note: 'a railway carriage；carriage of goods 是货运。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'We sat in the second carriage of the train.', chinese: '我们坐在火车的第二节车厢。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'carriage.s1', en: 'Horse-drawn carriages waited by the gate.', zh: '马车等在门口。', structure: 'a carriage', grammar: '可数名词；运输义可不可数。', rationale: '锁住车厢或马车。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The marriage was late because of the snow.', right: 'The carriage was late because of the snow.', reason: '晚点的车厢是 carriage，不是 marriage 婚姻。', rule: '拼写多一个 m 就成了婚姻。', special: '不要和 carrier 公司混淆。' },
    ],
    quiz: [
        { id: 'carriage.q1', senseId: 'carriage.s1', errorType: 'meaning', type: '词义', prompt: 'carriage 可以是：', options: ['车厢、马车或运输', '婚姻', '地毯'], answer: '车厢、马车或运输', explain: '与 marriage 形近。' },
        { id: 'carriage.q2', senseId: 'carriage.s1', errorType: 'confusable', type: '辨词', prompt: '火车上的一节是：', options: ['carriage', 'carrier', 'cartoon'], answer: 'carriage', explain: 'carrier 是承运人。' },
        { id: 'carriage.q3', senseId: 'carriage.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['the second carriage', 'the second carriages', 'a carriages'], answer: 'the second carriage', explain: '单数一节车厢。' },
        { id: 'carriage.q4', senseId: 'carriage.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a horse-drawn carriage', 'a horse-drawn carrier company', 'a horse-drawn carton'], answer: 'a horse-drawn carriage', explain: '马拉的是 carriage。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['carry', 'car'] },
  });

  D('carriageway', {
    etymology: {
      origin: '英语复合词：carriage「车辆」加 way「路」。供车辆行驶、与人行道分开的那一部分路面。',
      prefix: null,
      root: { text: 'carriageway', gloss: '车行道' },
      suffix: null,
      history: [
        { label: 'carriage + way', text: '复合名词，指车走的路。' },
        { label: '现在', text: '现在指车行道。' },
      ],
      formationLogic: '现代英语复合，常见于英式交通用语。美式多说 lane 或 roadway。',
      mnemonic: 'carriage 走的 way，就是 carriageway。',
      note: 'the northbound carriageway。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Do not walk on the carriageway.', chinese: '不要在车行道上走。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'carriageway.s1', en: 'The carriageway was closed after the crash.', zh: '事故后车行道封闭了。', structure: 'a carriageway', grammar: '可数名词。', rationale: '锁住行车路面。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'Pedestrians should use the carriageway as the sidewalk.', right: 'Pedestrians should stay off the carriageway.', reason: '人行不该占用车行道。人行道是 pavement 或 sidewalk。', rule: 'carriageway 给车辆。', special: '不要和 carriage 车厢本身互换。' },
    ],
    quiz: [
        { id: 'carriageway.q1', senseId: 'carriageway.s1', errorType: 'meaning', type: '词义', prompt: 'carriageway 是：', options: ['车行道', '火车车厢内部', '马车夫'], answer: '车行道', explain: 'way 是路。' },
        { id: 'carriageway.q2', senseId: 'carriageway.s1', errorType: 'confusable', type: '辨词', prompt: '和人行道分开的行车部分是：', options: ['carriageway', 'carriage', 'carpet'], answer: 'carriageway', explain: 'carriage 是车厢或马车。' },
        { id: 'carriageway.q3', senseId: 'carriageway.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['on the carriageway', 'on carriageway the', 'a carriageways'], answer: 'on the carriageway', explain: '用 on the。' },
        { id: 'carriageway.q4', senseId: 'carriageway.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a dual carriageway', 'a dual carriage', 'a dual carpet'], answer: 'a dual carriageway', explain: '双幅车行道是 dual carriageway。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['carriage', 'road'] },
  });

  D('carrier', {
    etymology: {
      origin: '动词 carry 加 -er。字面是搬运的人或物。可指搬运工、运输公司、携带病菌的载体或带菌者，也可指航空母舰的简称语境里的 carrier。',
      prefix: null,
      root: { text: 'carrier', gloss: '搬运工' },
      suffix: null,
      history: [
        { label: 'carry + -er', text: '-er 指执行 carry 的一方。' },
        { label: '现在', text: '现在指搬运者、承运公司、载体或带菌者。' },
      ],
      formationLogic: '英语派生。carry 与车、carriage 同族。',
      mnemonic: 'carrier 就是把东西或病菌带去的那一方。',
      note: 'a letter carrier；an airline；a carrier of the virus。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'This airline is a major cargo carrier.', chinese: '这家航空公司是主要的货运承运人。' },
    ],
    contexts: [
      { domain: '医学', senseId: 'carrier.s1', en: 'Mosquitoes can be carriers of disease.', zh: '蚊子可以是疾病的传播媒介。', structure: 'a carrier of', grammar: '可数名词。', rationale: '锁住携带者。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The carrier was a train coach we sat in.', right: 'We sat in a carriage.', reason: '坐进去的一节是 carriage。carrier 是运的人或公司或媒介。', rule: '-er 指行为者。', special: '不要和 career 混淆。' },
    ],
    quiz: [
        { id: 'carrier.q1', senseId: 'carrier.s1', errorType: 'meaning', type: '词义', prompt: 'carrier 可以是：', options: ['搬运者、运输公司、载体或带菌者', '车厢', '职业'], answer: '搬运者、运输公司、载体或带菌者', explain: 'carriage 与 career 都不是这个 -er。' },
        { id: 'carrier.q2', senseId: 'carrier.s1', errorType: 'confusable', type: '辨词', prompt: '传播病毒的蚊子是：', options: ['carrier', 'carriage', 'carpet'], answer: 'carrier', explain: '媒介用 carrier。' },
        { id: 'carrier.q3', senseId: 'carrier.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['carriers of disease', 'carrier of diseases the', 'a carriers'], answer: 'carriers of disease', explain: '复数 carriers，of 表所携带之物。' },
        { id: 'carrier.q4', senseId: 'carrier.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a cargo carrier', 'a cargo carriageway', 'a cargo caress'], answer: 'a cargo carrier', explain: '货运公司用 carrier。' },
    ],
    usage: { domains: ['医学'], tone: '中性', commonConfusion: ['carry', 'carriage'] },
  });

  D('carrot', {
    etymology: {
      origin: '希腊语 karoton，经拉丁语、法语进入英语，指这种橙色根菜。因为常拿来引诱，口语里 carrot 也可指诱因，与 stick 相对。',
      prefix: null,
      root: { text: 'carrot', gloss: '胡萝卜' },
      suffix: null,
      history: [
        { label: '希腊蔬菜名', text: 'karoton 就是这种根。' },
        { label: '现在', text: '现在指胡萝卜，也可比喻诱因。' },
      ],
      formationLogic: '借词。the carrot and the stick 是软硬兼施。',
      mnemonic: 'carrot 是地里拔出来的橙色根。',
      note: '可数：two carrots。不可数可指这种菜。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She grated a carrot into the soup.', chinese: '她把一根胡萝卜擦进汤里。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'carrot.s1', en: 'The bonus was a carrot for working late.', zh: '奖金是让人加班的诱因。', structure: 'a carrot', grammar: '可数名词。', rationale: '先锁蔬菜义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He ate a carpet for lunch.', right: 'He ate a carrot for lunch.', reason: '能吃的是 carrot，carpet 是地毯。', rule: '一个字母之差。', special: '诱因义才用 carrot and stick。' },
    ],
    quiz: [
        { id: 'carrot.q1', senseId: 'carrot.s1', errorType: 'meaning', type: '词义', prompt: 'carrot 首先是：', options: ['胡萝卜', '地毯', '手推车'], answer: '胡萝卜', explain: 'carpet 与 cart 形近。' },
        { id: 'carrot.q2', senseId: 'carrot.s1', errorType: 'confusable', type: '辨词', prompt: '橙色根菜是：', options: ['carrot', 'cart', 'card'], answer: 'carrot', explain: 'cart 是车。' },
        { id: 'carrot.q3', senseId: 'carrot.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two carrots', 'two carrot', 'a carrots'], answer: 'two carrots', explain: '可数复数加 -s。' },
        { id: 'carrot.q4', senseId: 'carrot.s1', errorType: 'context', type: '语境', prompt: 'the carrot and the stick 里 carrot 是：', options: ['诱因或奖励', '真正的一根菜作为唯一义', '棍子本身'], answer: '诱因或奖励', explain: '与惩罚 stick 相对。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['carpet', 'cart'] },
  });

  D('carry', {
    etymology: {
      origin: '古法语 carier「用车运」，拉丁语 carrus「车」。英语 carry 从用车运扩展到手提、传播和支撑。',
      prefix: null,
      root: { text: 'carry', gloss: '搬运' },
      suffix: null,
      history: [
        { label: '用车运送', text: '与 car、cargo、carriage 同族。' },
        { label: '现在', text: '现在指搬运、携带、运送、传播或支撑。' },
      ],
      formationLogic: '核心是把东西从一个地方带到另一个地方，方式不限。',
      mnemonic: 'carry 就是带着走，最早常靠车。',
      note: 'carry a bag；carry a disease；carry weight 可指有分量。短语 carry off / on / out 另条。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She carried the books up the stairs.', chinese: '她把书搬上了楼。' },
    ],
    contexts: [
      { domain: '日常生活', senseId: 'carry.s1', en: 'Mosquitoes can carry the virus.', zh: '蚊子能传播这种病毒。', structure: 'carry + 宾语', grammar: '规则动词，过去式 carried。', rationale: '锁住带走。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She carried the box to upstairs.', right: 'She carried the box upstairs.', reason: 'upstairs 是副词，前面不要 to。', rule: 'carry something upstairs。', special: '第三人称 carries。' },
    ],
    quiz: [
        { id: 'carry.q1', senseId: 'carry.s1', errorType: 'meaning', type: '词义', prompt: 'carry 是：', options: ['搬运、携带、运送或传播', '手推车名词', '抱怨'], answer: '搬运、携带、运送或传播', explain: 'cart 是名词车，carp 是抱怨。' },
        { id: 'carry.q2', senseId: 'carry.s1', errorType: 'confusable', type: '辨词', prompt: '把箱子拿到楼上用：', options: ['carry', 'cart as a verb only if using a cart', 'carp'], answer: 'carry', explain: 'carp 是挑剔。' },
        { id: 'carry.q3', senseId: 'carry.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['She carried the bag.', 'She carry the bag yesterday.', 'She carried to the bag.'], answer: 'She carried the bag.', explain: '过去式 carried，宾语直接跟。' },
        { id: 'carry.q4', senseId: 'carry.s1', errorType: 'collocation', type: '搭配', prompt: '哪组表示传播疾病？', options: ['carry a virus', 'carry a career', 'carry a carpet as disease'], answer: 'carry a virus', explain: '疾病用 carry a virus。' },
    ],
    usage: { domains: ['日常生活'], tone: '中性', commonConfusion: ['car', 'cart'] },
  });

  D('carry off', {
    etymology: {
      origin: '英语短语：carry「带走」加副词 off「离开、完成」。人被带走是抢走；难做的事被 carry off 是漂亮地做成。',
      prefix: null,
      root: { text: 'carry off', gloss: '成功做到' },
      suffix: null,
      history: [
        { label: 'carry + off', text: '短语动词，off 改变意思。' },
        { label: '现在', text: '现在指成功地做成，或强行带走。' },
      ],
      formationLogic: '不要拆开按「搬运」加「关闭」乱译。',
      mnemonic: 'carry off 是把结果整个带走：要么抢走，要么漂亮收场。',
      note: 'carry it off 常指顺利应付。carry off a prize 是赢得。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She carried off the speech without notes.', chinese: '她不看稿就把演讲顺利完成了。' },
    ],
    contexts: [
      { domain: '表现', senseId: 'carry off.s1', en: 'Thieves carried off the paintings.', zh: '小偷把画抢走了。', structure: 'carry off + 宾语', grammar: '短语动词，宾语可在 off 前：carry the plan off。', rationale: '两义以语境区分，先锁成功做成。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'context', wrong: 'She carried off the bus to school.', right: 'She carried the bag off the bus.', reason: '「成功完成」不是把公交车搬走。下车拿包要另写。', rule: 'carry off a performance 才是顺利完成。', special: '本短语不要漏 off。' },
    ],
    quiz: [
        { id: 'carry off.q1', senseId: 'carry off.s1', errorType: 'meaning', type: '词义', prompt: 'carry off 可以是：', options: ['成功做到或抢走', '继续做', '执行计划'], answer: '成功做到或抢走', explain: 'carry on 是继续，carry out 是执行。' },
        { id: 'carry off.q2', senseId: 'carry off.s1', errorType: 'confusable', type: '辨词', prompt: '演讲特别顺利，用：', options: ['carry off', 'carry on', 'carry out'], answer: 'carry off', explain: 'carry it off 表应付成功。' },
        { id: 'carry off.q3', senseId: 'carry off.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['carry off the role', 'carry the role off the stage as success', 'carry of the role'], answer: 'carry off the role', explain: '介词是 off 不是 of。' },
        { id: 'carry off.q4', senseId: 'carry off.s1', errorType: 'collocation', type: '搭配', prompt: '哪组表示抢走？', options: ['carry off the jewels', 'carry on the jewels', 'care for the jewels as theft'], answer: 'carry off the jewels', explain: '带走赃物用 carry off。' },
    ],
    usage: { domains: ['表现'], tone: '中性', commonConfusion: ['carry on', 'carry out'] },
  });

  D('carry on', {
    etymology: {
      origin: '英语短语：carry 加 on「继续下去」。on 表示不停。也可表示进行某项活动，口语里还有大惊小怪的意思，本条核心是继续。',
      prefix: null,
      root: { text: 'carry on', gloss: '继续' },
      suffix: null,
      history: [
        { label: 'carry + on', text: 'on 表动作延续。' },
        { label: '现在', text: '现在指继续做，或进行斗争、谈话等。' },
      ],
      formationLogic: '短语动词，不是 carry 的名词化。',
      mnemonic: 'carry on 就是接着往下做，不要停。',
      note: 'carry on with the work；carry on doing。不要和 carry out 互换。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Please carry on with the experiment.', chinese: '请继续做实验。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'carry on.s1', en: 'They carried on talking after the bell.', zh: '铃响后他们还在说话。', structure: 'carry on with / doing', grammar: '短语动词。', rationale: '锁住继续。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please carry out with your story.', right: 'Please carry on with your story.', reason: '继续讲用 carry on。carry out 是执行，后面通常不跟 with 表示继续。', rule: 'on 对 out。', special: 'carry on doing 不用 to。' },
    ],
    quiz: [
        { id: 'carry on.q1', senseId: 'carry on.s1', errorType: 'meaning', type: '词义', prompt: 'carry on 是：', options: ['继续或进行', '执行完毕', '成功抢走'], answer: '继续或进行', explain: '另外两条短语不同。' },
        { id: 'carry on.q2', senseId: 'carry on.s1', errorType: 'confusable', type: '辨词', prompt: '别停下，接着做，用：', options: ['carry on', 'carry off', 'carry out'], answer: 'carry on', explain: 'on 有继续的感觉。' },
        { id: 'carry on.q3', senseId: 'carry on.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['carry on working', 'carry on to working', 'carry on work the'], answer: 'carry on working', explain: '后接 -ing。' },
        { id: 'carry on.q4', senseId: 'carry on.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['carry on with the plan', 'carry on the plan out', 'care on with the plan'], answer: 'carry on with the plan', explain: 'with 接事情。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['carry out', 'continue'] },
  });

  D('carry out', {
    etymology: {
      origin: '英语短语：carry 加 out「做到外面、做成」。把计划、命令、实验真正做出来，就是 carry out。',
      prefix: null,
      root: { text: 'carry out', gloss: '执行' },
      suffix: null,
      history: [
        { label: 'carry + out', text: 'out 强调落实，而不是继续聊。' },
        { label: '现在', text: '现在指执行、实施。' },
      ],
      formationLogic: '短语动词。宾语可中插：carry the plan out。',
      mnemonic: 'carry out 是把纸上的事拿到外面做成。',
      note: 'carry out an order / a survey / research。不要写成 carry out to do 当 want。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The lab carried out a survey of local wells.', chinese: '实验室对当地水井做了调查。' },
    ],
    contexts: [
      { domain: '工作', senseId: 'carry out.s1', en: 'She carried out his instructions.', zh: '她执行了他的指示。', structure: 'carry out + 名词', grammar: '短语动词。', rationale: '锁住实施。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They carried on a survey and finished the questionnaire as the set phrase.', right: 'They carried out a survey.', reason: '做调查这一完成行为用 carry out。carry on a survey 会像「把调查继续下去」。', rule: 'carry out a survey / an experiment。', special: 'out 不能换成 on。' },
    ],
    quiz: [
        { id: 'carry out.q1', senseId: 'carry out.s1', errorType: 'meaning', type: '词义', prompt: 'carry out 是：', options: ['执行或实施', '继续不停', '车行道'], answer: '执行或实施', explain: 'carriageway 无关。' },
        { id: 'carry out.q2', senseId: 'carry out.s1', errorType: 'confusable', type: '辨词', prompt: '落实一项命令用：', options: ['carry out', 'carry on', 'carry off'], answer: 'carry out', explain: '命令需要被执行。' },
        { id: 'carry out.q3', senseId: 'carry out.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['carry out the plan', 'carry out to the plan', 'carry the plan out of meaning'], answer: 'carry out the plan', explain: 'plan 是宾语，不加 to。' },
        { id: 'carry out.q4', senseId: 'carry out.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['carry out research', 'carry out research with on', 'carry research on out'], answer: 'carry out research', explain: '研究用 carry out research。' },
    ],
    usage: { domains: ['工作'], tone: '中性', commonConfusion: ['carry on', 'perform'] },
  });

  D('cars', {
    etymology: {
      origin: '这是 car 的复数形式，不是另一个词根。car 来自拉丁语 carrus「货车」。单数加 -s 表示多辆汽车。教学上单独列出，是为了认复数词形。',
      prefix: null,
      root: { text: 'cars', gloss: '汽车' },
      suffix: null,
      history: [
        { label: 'car + -s', text: '规则复数。' },
        { label: '现在', text: '现在指多辆汽车或轿车。' },
      ],
      formationLogic: '英语屈折，不要编新的词源故事。',
      mnemonic: '一辆 car，许多辆就是 cars。',
      note: 'cars 前不用 a。these cars / two cars。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Three cars blocked the narrow lane.', chinese: '三辆车堵住了窄巷。' },
    ],
    contexts: [
      { domain: '交通', senseId: 'cars.s1', en: 'Electric cars are quieter than old ones.', zh: '电动汽车比旧车安静。', structure: '复数名词', grammar: '只有复数形式作为本条词头。', rationale: '锁住 car 的复数。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'A cars is outside.', right: 'A car is outside.', reason: '单数是 a car。cars 不能加 a，谓语用复数。', rule: 'a car / cars are。', special: '不要和 cards 纸牌混淆。' },
    ],
    quiz: [
        { id: 'cars.q1', senseId: 'cars.s1', errorType: 'meaning', type: '词义', prompt: 'cars 是：', options: ['汽车的复数', '一张卡片', '纸板'], answer: '汽车的复数', explain: 'cards 才是牌或卡片复数。' },
        { id: 'cars.q2', senseId: 'cars.s1', errorType: 'confusable', type: '辨词', prompt: '马路上许多辆小汽车是：', options: ['cars', 'cards', 'carts'], answer: 'cars', explain: 'carts 是手推车复数。' },
        { id: 'cars.q3', senseId: 'cars.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['these cars', 'this cars', 'a cars'], answer: 'these cars', explain: '复数用 these，不用 a。' },
        { id: 'cars.q4', senseId: 'cars.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a row of cars', 'a row of cards on the highway', 'a row of cares'], answer: 'a row of cars', explain: '公路上是 cars。' },
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['car', 'cards'] },
  });

  D('cart', {
    etymology: {
      origin: '与 car 同属「车」这一族，一般认为来自古诺尔斯语 kartr 或古英语同类词，指两轮货车。现在多指手推车，也可作动词用车运送。',
      prefix: null,
      root: { text: 'cart', gloss: '手推车' },
      suffix: null,
      history: [
        { label: '两轮货车', text: '比现代 car 更早的小货车。' },
        { label: '现在', text: '现在指手推车、运货马车，动词是用车运。' },
      ],
      formationLogic: '北欧—英语车名词，不要说成 card 卡片。',
      mnemonic: 'cart 是用胳膊推或用马拉的简易车。',
      note: 'a shopping cart；put the cart before the horse 是本末倒置。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She pushed a cart along the supermarket aisle.', chinese: '她沿超市过道推着购物车。' },
    ],
    contexts: [
      { domain: '日用', senseId: 'cart.s1', en: 'They carted the boxes to the truck.', zh: '他们用车把箱子运到卡车上。', structure: 'a cart', grammar: '可数名词；动词 cart。', rationale: '锁住小车。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She wrote her name on the cart and mailed it.', right: 'She wrote her name on the card.', reason: '能邮寄、写名字的小纸片是 card。cart 是车。', rule: 't 和 d 不同。', special: 'shopping cart 美式，英式常说 trolley。' },
    ],
    quiz: [
        { id: 'cart.q1', senseId: 'cart.s1', errorType: 'meaning', type: '词义', prompt: 'cart 是：', options: ['手推车或运货马车', '卡片', '地毯'], answer: '手推车或运货马车', explain: 'card 与 carpet 形近。' },
        { id: 'cart.q2', senseId: 'cart.s1', errorType: 'confusable', type: '辨词', prompt: '超市里推着走的是：', options: ['cart', 'card', 'carrot'], answer: 'cart', explain: 'carrot 是胡萝卜。' },
        { id: 'cart.q3', senseId: 'cart.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['push a cart', 'push a carts', 'push an cart'], answer: 'push a cart', explain: '单数 a cart。' },
        { id: 'cart.q4', senseId: 'cart.s1', errorType: 'collocation', type: '搭配', prompt: '哪组是习语？', options: ['put the cart before the horse', 'put the card before the horse', 'put the car before the house as the idiom'], answer: 'put the cart before the horse', explain: '本末倒置用这句习语。' },
    ],
    usage: { domains: ['日用'], tone: '中性', commonConfusion: ['car', 'card'] },
  });

  D('cartel', {
    etymology: {
      origin: '意大利语 cartello「小招贴」，是 carta「纸」的小称，与 card 同族。德语 Kartell 用它指书面协议，后来专指企业或国家联手控制价格、产量的垄断联盟。',
      prefix: null,
      root: { text: 'cartel', gloss: '卡特尔' },
      suffix: null,
      history: [
        { label: '小纸片到协议', text: '从告示变成联合定价的协定。' },
        { label: '现在', text: '现在指卡特尔、垄断联盟。' },
      ],
      formationLogic: '欧陆借词。不要和 carton 纸盒、cartoon 漫画混淆。',
      mnemonic: 'cartel 原来写在纸上，后来变成大家一起抬价的同盟。',
      note: 'a drug cartel；an oil cartel。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The oil cartel agreed to cut production.', chinese: '石油卡特尔同意减产。' },
    ],
    contexts: [
      { domain: '经济', senseId: 'cartel.s1', en: 'A cartel keeps prices higher than a free market would.', zh: '垄断联盟会把价格维持得比自由市场更高。', structure: 'a cartel', grammar: '可数名词。', rationale: '锁住价格同盟。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We packed the glasses in a cartel.', right: 'We packed the glasses in a carton.', reason: '装玻璃的是 carton 纸盒。cartel 不是盒子。', rule: '三个 cart- 词要分开。', special: 'cartoon 是动画或漫画。' },
    ],
    quiz: [
        { id: 'cartel.q1', senseId: 'cartel.s1', errorType: 'meaning', type: '词义', prompt: 'cartel 是：', options: ['垄断联盟或卡特尔', '纸盒', '动画片'], answer: '垄断联盟或卡特尔', explain: 'carton 与 cartoon 不同。' },
        { id: 'cartel.q2', senseId: 'cartel.s1', errorType: 'confusable', type: '辨词', prompt: '一起控制油价的组织是：', options: ['cartel', 'carton', 'cartoon'], answer: 'cartel', explain: '后两个是盒子和漫画。' },
        { id: 'cartel.q3', senseId: 'cartel.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['an oil cartel', 'a oil cartel', 'an oil cartels'], answer: 'an oil cartel', explain: 'oil 元音开头用 an，组织单数。' },
        { id: 'cartel.q4', senseId: 'cartel.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['form a cartel', 'form a carton', 'form a carrot'], answer: 'form a cartel', explain: '结成联盟用 form。' },
    ],
    usage: { domains: ['经济'], tone: '中性', commonConfusion: ['carton', 'cartoon'] },
  });

  D('carton', {
    etymology: {
      origin: '法语 carton，意大利语 cartone，是 carta「纸」的增大形式：厚纸。英语指纸盒、塑料盒，也可指一盒的量。',
      prefix: null,
      root: { text: 'carton', gloss: '纸盒' },
      suffix: null,
      history: [
        { label: '厚纸', text: '与 card、cartoon 同出「纸」。' },
        { label: '现在', text: '现在指纸盒或一盒之量。' },
      ],
      formationLogic: '增大形式，不是 cartel。',
      mnemonic: 'carton 比一张 card 厚，折成盒子。',
      note: 'a carton of milk。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She opened a carton of milk.', chinese: '她打开一盒牛奶。' },
    ],
    contexts: [
      { domain: '饮食', senseId: 'carton.s1', en: 'Put the eggs in a carton.', zh: '把鸡蛋放进纸盒。', structure: 'a carton of', grammar: '可数名词。', rationale: '锁住盒子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The children watched a carton on television.', right: 'The children watched a cartoon on television.', reason: '电视上是 cartoon。装牛奶的是 carton。', rule: '一个元音字母不同。', special: '不要和 cartoon 互换。' },
    ],
    quiz: [
        { id: 'carton.q1', senseId: 'carton.s1', errorType: 'meaning', type: '词义', prompt: 'carton 是：', options: ['纸盒、塑料盒或一盒的量', '动画片', '垄断联盟'], answer: '纸盒、塑料盒或一盒的量', explain: 'cartoon 与 cartel 分开。' },
        { id: 'carton.q2', senseId: 'carton.s1', errorType: 'confusable', type: '辨词', prompt: '一盒牛奶用：', options: ['carton', 'cartoon', 'cartel'], answer: 'carton', explain: '牛奶不放在漫画里。' },
        { id: 'carton.q3', senseId: 'carton.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['a carton of milk', 'a carton milk', 'an carton'], answer: 'a carton of milk', explain: 'of 接内容；carton 用 a。' },
        { id: 'carton.q4', senseId: 'carton.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a carton of eggs', 'a cartoon of eggs', 'a cartel of eggs'], answer: 'a carton of eggs', explain: '鸡蛋盒用 carton。' },
    ],
    usage: { domains: ['饮食'], tone: '中性', commonConfusion: ['cartoon', 'card'] },
  });

  D('cartoon', {
    etymology: {
      origin: '意大利语 cartone「厚纸、草图板」，与 carton 同源。画家先在厚纸上画底稿，这种夸张草图后来指漫画，再指卡通片。',
      prefix: null,
      root: { text: 'cartoon', gloss: '卡通' },
      suffix: null,
      history: [
        { label: '厚纸上的画稿', text: '从底稿变成滑稽画和动画。' },
        { label: '现在', text: '现在指卡通、动画片或漫画。' },
      ],
      formationLogic: '艺术史借词。动词 cartoon 可指画漫画。',
      mnemonic: 'cartoon 原来画在 cartone 上，现在会动。',
      note: 'a political cartoon；watch cartoons。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The children laughed at the cartoon.', chinese: '孩子们看着卡通片笑了。' },
    ],
    contexts: [
      { domain: '媒体', senseId: 'cartoon.s1', en: 'This cartoon comments on the election.', zh: '这幅漫画评论了选举。', structure: 'a cartoon', grammar: '可数名词。', rationale: '锁住画与动画。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Pour the milk into the cartoon.', right: 'Pour the milk into the carton.', reason: '装牛奶用 carton。cartoon 只能看。', rule: '词尾元音不同。', special: '不要和 carton 互换。' },
    ],
    quiz: [
        { id: 'cartoon.q1', senseId: 'cartoon.s1', errorType: 'meaning', type: '词义', prompt: 'cartoon 是：', options: ['卡通、动画片或漫画', '纸盒', '卡特尔'], answer: '卡通、动画片或漫画', explain: 'carton 是盒子。' },
        { id: 'cartoon.q2', senseId: 'cartoon.s1', errorType: 'confusable', type: '辨词', prompt: '电视上的动画是：', options: ['cartoon', 'carton', 'cartel'], answer: 'cartoon', explain: 'carton 不能播放。' },
        { id: 'cartoon.q3', senseId: 'cartoon.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['watch a cartoon', 'watch a cartoons', 'watch an carton'], answer: 'watch a cartoon', explain: '单数 a cartoon。' },
        { id: 'cartoon.q4', senseId: 'cartoon.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['a political cartoon', 'a political carton', 'a political cargo'], answer: 'a political cartoon', explain: '政治漫画用 cartoon。' },
    ],
    usage: { domains: ['媒体'], tone: '中性', commonConfusion: ['carton', 'card'] },
  });

  D('cartridge', {
    etymology: {
      origin: '法语 cartouche，意大利语 cartoccio「纸卷」，来自 carta「纸」。最早用纸卷包火药，后来指金属弹药筒，打印机里的墨盒也因可替换的弹筒形状叫 cartridge。',
      prefix: null,
      root: { text: 'cartridge', gloss: '弹药筒' },
      suffix: null,
      history: [
        { label: '纸卷', text: '从包火药的纸卷到可替换的筒。' },
        { label: '现在', text: '现在指弹药筒或打印机墨盒。' },
      ],
      formationLogic: '与 card、carton 同属「纸」族，但是筒状耗材。',
      mnemonic: 'cartridge 是插进去就能用的一卷或一筒。',
      note: 'a printer cartridge；a rifle cartridge。可数。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The printer needs a new ink cartridge.', chinese: '打印机需要一个新墨盒。' },
    ],
    contexts: [
      { domain: '日用', senseId: 'cartridge.s1', en: 'Soldiers counted the cartridges.', zh: '士兵清点弹药筒。', structure: 'a cartridge', grammar: '可数名词。', rationale: '锁住筒状耗材。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Change the cartoon in the printer.', right: 'Change the cartridge in the printer.', reason: '打印机里换的是 cartridge，不是卡通 cartoon。', rule: '三个字母之差也不行。', special: '不要和 carton 纸盒混淆。' },
    ],
    quiz: [
        { id: 'cartridge.q1', senseId: 'cartridge.s1', errorType: 'meaning', type: '词义', prompt: 'cartridge 是：', options: ['弹药筒或墨盒', '动画片', '纸盒牛奶'], answer: '弹药筒或墨盒', explain: '筒状、可替换。' },
        { id: 'cartridge.q2', senseId: 'cartridge.s1', errorType: 'confusable', type: '辨词', prompt: '打印机里的墨是：', options: ['cartridge', 'cartoon', 'cartel'], answer: 'cartridge', explain: 'cartoon 是片子。' },
        { id: 'cartridge.q3', senseId: 'cartridge.s1', errorType: 'grammar', type: '语法', prompt: '哪句对？', options: ['two cartridges', 'two cartridge', 'a cartridges'], answer: 'two cartridges', explain: '可数复数加 -s。' },
        { id: 'cartridge.q4', senseId: 'cartridge.s1', errorType: 'collocation', type: '搭配', prompt: '哪组自然？', options: ['an ink cartridge', 'an ink cartoon', 'an ink carton of milk'], answer: 'an ink cartridge', explain: '墨盒是 ink cartridge。' },
    ],
    usage: { domains: ['日用'], tone: '中性', commonConfusion: ['carton', 'cartoon'] },
  });

  D('carve', {
    etymology: {
      origin: '现代英语常用词「carve」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'carve', gloss: '雕刻' },
      suffix: null,
      history: [
        { label: 'carve', text: '现代英语常用词「carve」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：雕刻。' },
      ],
      formationLogic: '核心义：雕刻。',
      mnemonic: '看到 carve，先说出「雕刻」。',
      note: '核心义：雕刻。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to carve before the office closed.', chinese: '他们同意在办公室关门前做这件事：雕刻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'carve.s1', en: 'The deadline forced the team to carve that afternoon.', zh: '截止日期逼着小组在那天下午雕刻。', structure: 'carve / 表示 / 雕刻', grammar: 'verb，围绕「雕刻」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She carveed it yesterday without checking the real past form.', right: 'Check the past form of "carve" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 carve 是verb，再套「雕刻」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'carve.q1', senseId: 'carve.s1', errorType: 'meaning', type: '词义选择', prompt: '「carve」在本条的核心意思是：', options: ['雕刻', '完全相反的意思', '一种古代钱币'], answer: '雕刻', explain: 'carve：雕刻。' },
      { id: 'carve.q2', senseId: 'carve.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches carve?', options: ['雕刻', 'a kind of ancient coin', 'the past tense of be'], answer: '雕刻', explain: '对的是「雕刻」。' },
      { id: 'carve.q3', senseId: 'carve.s1', errorType: 'grammar', type: '词义选择', prompt: 'carve 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'carve.q4', senseId: 'carve.s1', errorType: 'meaning', type: '词源', prompt: '记 carve 时，哪句更稳妥？', options: ['先锁住「雕刻」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雕刻」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雕刻'] },
  });

  D('carving', {
    etymology: {
      origin: '英语派生：carv + -ing，词性转到「雕刻」。',
      prefix: null,
      root: { text: 'carv', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'carving', text: '英语派生：carv + -ing，词性转到「雕刻」。' },
        { label: '现在', text: '核心用法是：雕刻。' },
      ],
      formationLogic: '先认词干 carv，再看词尾。',
      mnemonic: '看到 carving，先说出「雕刻」。',
      note: '先认词干 carv，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one carving.', chinese: '这一章反复回到同一个点：雕刻。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'carving.s1', en: 'Without that carving, the next paragraph is hard to follow.', zh: '没有这个雕刻，下一段会很难读。', structure: 'carving / 表示 / 雕刻', grammar: 'noun，围绕「雕刻」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the carving.', right: 'He gave me some advice about the carving.', reason: 'advice 不可数。名词 carving 的单复数按词典词形记。', rule: '先确定 carving 是noun，再套「雕刻」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'carving.q1', senseId: 'carving.s1', errorType: 'meaning', type: '词义选择', prompt: '「carving」在本条的核心意思是：', options: ['雕刻', '完全相反的意思', '一种古代钱币'], answer: '雕刻', explain: 'carving：雕刻。' },
      { id: 'carving.q2', senseId: 'carving.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches carving?', options: ['雕刻', 'a kind of ancient coin', 'the past tense of be'], answer: '雕刻', explain: '对的是「雕刻」。' },
      { id: 'carving.q3', senseId: 'carving.s1', errorType: 'grammar', type: '词义选择', prompt: 'carving 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'carving.q4', senseId: 'carving.s1', errorType: 'meaning', type: '词源', prompt: '记 carving 时，哪句更稳妥？', options: ['先锁住「雕刻」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「雕刻」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['雕刻'] },
  });

  D('case', {
    etymology: {
      origin: '拉丁语 capsa「盒子」，或 casus「落下、情况」。箱子和情况是两个来源。',
      prefix: null,
      root: { text: 'case', gloss: '情况' },
      suffix: null,
      history: [
        { label: 'case', text: '拉丁语 capsa「盒子」，或 casus「落下、情况」。箱子和情况是两个来源。' },
        { label: '现在', text: '核心用法是：情况。' },
      ],
      formationLogic: '考试认现在的用法：情况。',
      mnemonic: '看到 case，先说出「情况」。',
      note: '考试认现在的用法：情况。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one case.', chinese: '这一章反复回到同一个点：情况。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'case.s1', en: 'Without that case, the next paragraph is hard to follow.', zh: '没有这个情况，下一段会很难读。', structure: 'case / 表示 / 情况', grammar: 'noun，围绕「情况」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the case.', right: 'He gave me some advice about the case.', reason: 'advice 不可数。名词 case 的单复数按词典词形记。', rule: '先确定 case 是noun，再套「情况」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'case.q1', senseId: 'case.s1', errorType: 'meaning', type: '词义选择', prompt: '「case」在本条的核心意思是：', options: ['情况', '完全相反的意思', '一种古代钱币'], answer: '情况', explain: 'case：情况。' },
      { id: 'case.q2', senseId: 'case.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches case?', options: ['情况', 'a kind of ancient coin', 'the past tense of be'], answer: '情况', explain: '对的是「情况」。' },
      { id: 'case.q3', senseId: 'case.s1', errorType: 'grammar', type: '词义选择', prompt: 'case 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'case.q4', senseId: 'case.s1', errorType: 'meaning', type: '词源', prompt: '记 case 时，哪句更稳妥？', options: ['先锁住「情况」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「情况」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['情况'] },
  });

  D('cash', {
    etymology: {
      origin: '拉丁语 capsa「钱箱」。',
      prefix: null,
      root: { text: 'cash', gloss: '现金' },
      suffix: null,
      history: [
        { label: 'cash', text: '拉丁语 capsa「钱箱」。' },
        { label: '现在', text: '核心用法是：现金。' },
      ],
      formationLogic: '考试认现在的用法：现金。',
      mnemonic: '看到 cash，先说出「现金」。',
      note: '考试认现在的用法：现金。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cash.', chinese: '这一章反复回到同一个点：现金。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cash.s1', en: 'Without that cash, the next paragraph is hard to follow.', zh: '没有这个现金，下一段会很难读。', structure: 'cash / 表示 / 现金', grammar: 'noun，围绕「现金」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cash.', right: 'He gave me some advice about the cash.', reason: 'advice 不可数。名词 cash 的单复数按词典词形记。', rule: '先确定 cash 是noun，再套「现金」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cash.q1', senseId: 'cash.s1', errorType: 'meaning', type: '词义选择', prompt: '「cash」在本条的核心意思是：', options: ['现金', '完全相反的意思', '一种古代钱币'], answer: '现金', explain: 'cash：现金。' },
      { id: 'cash.q2', senseId: 'cash.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cash?', options: ['现金', 'a kind of ancient coin', 'the past tense of be'], answer: '现金', explain: '对的是「现金」。' },
      { id: 'cash.q3', senseId: 'cash.s1', errorType: 'grammar', type: '词义选择', prompt: 'cash 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cash.q4', senseId: 'cash.s1', errorType: 'meaning', type: '词源', prompt: '记 cash 时，哪句更稳妥？', options: ['先锁住「现金」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「现金」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['现金'] },
  });

  D('cash drawer', {
    etymology: {
      origin: '现代英语固定说法「cash drawer」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cash drawer', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cash drawer', text: '现代英语固定说法「cash drawer」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：收银抽屉。' },
      ],
      formationLogic: '核心义：收银抽屉。',
      mnemonic: '看到 cash drawer，先说出「收银抽屉」。',
      note: '核心义：收银抽屉。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cash drawer" and asked the class to keep it as one unit.', chinese: '老师把「cash drawer」圈出来，让全班把它当成一个整体。它表示收银抽屉。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cash drawer.s1', en: 'In the margin she wrote "cash drawer" so nobody would split the phrase.', zh: '她在页边写下「cash drawer」，免得有人把这个说法拆开。意思是收银抽屉。', structure: 'cash drawer / 表示 / 收银抽屉', grammar: 'noun，围绕「收银抽屉」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cash drawer and lost the point.', right: 'Keep "cash drawer" together: it means 收银抽屉.', reason: '「cash drawer」要整块理解。', rule: '先确定 cash drawer 是noun，再套「收银抽屉」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cash drawer.q1', senseId: 'cash drawer.s1', errorType: 'meaning', type: '词义选择', prompt: '「cash drawer」在本条的核心意思是：', options: ['收银抽屉', '完全相反的意思', '一种古代钱币'], answer: '收银抽屉', explain: 'cash drawer：收银抽屉。' },
      { id: 'cash drawer.q2', senseId: 'cash drawer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cash drawer?', options: ['收银抽屉', 'a kind of ancient coin', 'the past tense of be'], answer: '收银抽屉', explain: '对的是「收银抽屉」。' },
      { id: 'cash drawer.q3', senseId: 'cash drawer.s1', errorType: 'grammar', type: '词义选择', prompt: 'cash drawer 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cash drawer.q4', senseId: 'cash drawer.s1', errorType: 'meaning', type: '词源', prompt: '记 cash drawer 时，哪句更稳妥？', options: ['先锁住「收银抽屉」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「收银抽屉」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['收银抽屉'] },
  });

  D('cashier', {
    etymology: {
      origin: '英语派生：cashi + -er，词性转到「出纳员」。',
      prefix: null,
      root: { text: 'cashi', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cashier', text: '英语派生：cashi + -er，词性转到「出纳员」。' },
        { label: '现在', text: '核心用法是：出纳员。' },
      ],
      formationLogic: '先认词干 cashi，再看词尾。',
      mnemonic: '看到 cashier，先说出「出纳员」。',
      note: '先认词干 cashi，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cashier.', chinese: '这一章反复回到同一个点：出纳员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cashier.s1', en: 'Without that cashier, the next paragraph is hard to follow.', zh: '没有这个出纳员，下一段会很难读。', structure: 'cashier / 表示 / 出纳员', grammar: 'noun，围绕「出纳员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cashier.', right: 'He gave me some advice about the cashier.', reason: 'advice 不可数。名词 cashier 的单复数按词典词形记。', rule: '先确定 cashier 是noun，再套「出纳员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cashier.q1', senseId: 'cashier.s1', errorType: 'meaning', type: '词义选择', prompt: '「cashier」在本条的核心意思是：', options: ['出纳员', '完全相反的意思', '一种古代钱币'], answer: '出纳员', explain: 'cashier：出纳员。' },
      { id: 'cashier.q2', senseId: 'cashier.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cashier?', options: ['出纳员', 'a kind of ancient coin', 'the past tense of be'], answer: '出纳员', explain: '对的是「出纳员」。' },
      { id: 'cashier.q3', senseId: 'cashier.s1', errorType: 'grammar', type: '词义选择', prompt: 'cashier 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cashier.q4', senseId: 'cashier.s1', errorType: 'meaning', type: '词源', prompt: '记 cashier 时，哪句更稳妥？', options: ['先锁住「出纳员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「出纳员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['出纳员'] },
  });

  D('casing', {
    etymology: {
      origin: '英语派生：cas + -ing，词性转到「外壳」。',
      prefix: null,
      root: { text: 'cas', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'casing', text: '英语派生：cas + -ing，词性转到「外壳」。' },
        { label: '现在', text: '核心用法是：外壳。' },
      ],
      formationLogic: '先认词干 cas，再看词尾。',
      mnemonic: '看到 casing，先说出「外壳」。',
      note: '先认词干 cas，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one casing.', chinese: '这一章反复回到同一个点：外壳。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'casing.s1', en: 'Without that casing, the next paragraph is hard to follow.', zh: '没有这个外壳，下一段会很难读。', structure: 'casing / 表示 / 外壳', grammar: 'noun，围绕「外壳」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the casing.', right: 'He gave me some advice about the casing.', reason: 'advice 不可数。名词 casing 的单复数按词典词形记。', rule: '先确定 casing 是noun，再套「外壳」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'casing.q1', senseId: 'casing.s1', errorType: 'meaning', type: '词义选择', prompt: '「casing」在本条的核心意思是：', options: ['外壳', '完全相反的意思', '一种古代钱币'], answer: '外壳', explain: 'casing：外壳。' },
      { id: 'casing.q2', senseId: 'casing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches casing?', options: ['外壳', 'a kind of ancient coin', 'the past tense of be'], answer: '外壳', explain: '对的是「外壳」。' },
      { id: 'casing.q3', senseId: 'casing.s1', errorType: 'grammar', type: '词义选择', prompt: 'casing 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'casing.q4', senseId: 'casing.s1', errorType: 'meaning', type: '词源', prompt: '记 casing 时，哪句更稳妥？', options: ['先锁住「外壳」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「外壳」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['外壳'] },
  });

  D('casino', {
    etymology: {
      origin: '现代英语常用词「casino」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'casino', gloss: '赌场' },
      suffix: null,
      history: [
        { label: 'casino', text: '现代英语常用词「casino」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：赌场。' },
      ],
      formationLogic: '核心义：赌场。',
      mnemonic: '看到 casino，先说出「赌场」。',
      note: '核心义：赌场。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one casino.', chinese: '这一章反复回到同一个点：赌场。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'casino.s1', en: 'Without that casino, the next paragraph is hard to follow.', zh: '没有这个赌场，下一段会很难读。', structure: 'casino / 表示 / 赌场', grammar: 'noun，围绕「赌场」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the casino.', right: 'He gave me some advice about the casino.', reason: 'advice 不可数。名词 casino 的单复数按词典词形记。', rule: '先确定 casino 是noun，再套「赌场」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'casino.q1', senseId: 'casino.s1', errorType: 'meaning', type: '词义选择', prompt: '「casino」在本条的核心意思是：', options: ['赌场', '完全相反的意思', '一种古代钱币'], answer: '赌场', explain: 'casino：赌场。' },
      { id: 'casino.q2', senseId: 'casino.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches casino?', options: ['赌场', 'a kind of ancient coin', 'the past tense of be'], answer: '赌场', explain: '对的是「赌场」。' },
      { id: 'casino.q3', senseId: 'casino.s1', errorType: 'grammar', type: '词义选择', prompt: 'casino 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'casino.q4', senseId: 'casino.s1', errorType: 'meaning', type: '词源', prompt: '记 casino 时，哪句更稳妥？', options: ['先锁住「赌场」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「赌场」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['赌场'] },
  });

  D('cassette', {
    etymology: {
      origin: '现代英语常用词「cassette」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cassette', gloss: '盒式磁带' },
      suffix: null,
      history: [
        { label: 'cassette', text: '现代英语常用词「cassette」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：盒式磁带。' },
      ],
      formationLogic: '核心义：盒式磁带。',
      mnemonic: '看到 cassette，先说出「盒式磁带」。',
      note: '核心义：盒式磁带。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cassette.', chinese: '这一章反复回到同一个点：盒式磁带。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cassette.s1', en: 'Without that cassette, the next paragraph is hard to follow.', zh: '没有这个盒式磁带，下一段会很难读。', structure: 'cassette / 表示 / 盒式磁带', grammar: 'noun，围绕「盒式磁带」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cassette.', right: 'He gave me some advice about the cassette.', reason: 'advice 不可数。名词 cassette 的单复数按词典词形记。', rule: '先确定 cassette 是noun，再套「盒式磁带」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cassette.q1', senseId: 'cassette.s1', errorType: 'meaning', type: '词义选择', prompt: '「cassette」在本条的核心意思是：', options: ['盒式磁带', '完全相反的意思', '一种古代钱币'], answer: '盒式磁带', explain: 'cassette：盒式磁带。' },
      { id: 'cassette.q2', senseId: 'cassette.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cassette?', options: ['盒式磁带', 'a kind of ancient coin', 'the past tense of be'], answer: '盒式磁带', explain: '对的是「盒式磁带」。' },
      { id: 'cassette.q3', senseId: 'cassette.s1', errorType: 'grammar', type: '词义选择', prompt: 'cassette 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cassette.q4', senseId: 'cassette.s1', errorType: 'meaning', type: '词源', prompt: '记 cassette 时，哪句更稳妥？', options: ['先锁住「盒式磁带」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「盒式磁带」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['盒式磁带'] },
  });

  D('cast', {
    etymology: {
      origin: '古诺斯语 kasta「扔」。',
      prefix: null,
      root: { text: 'cast', gloss: '投' },
      suffix: null,
      history: [
        { label: 'cast', text: '古诺斯语 kasta「扔」。' },
        { label: '现在', text: '核心用法是：投。' },
      ],
      formationLogic: '考试认现在的用法：投。',
      mnemonic: '看到 cast，先说出「投」。',
      note: '考试认现在的用法：投。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cast before the office closed.', chinese: '他们同意在办公室关门前做这件事：投。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cast.s1', en: 'The deadline forced the team to cast that afternoon.', zh: '截止日期逼着小组在那天下午投。', structure: 'cast / 表示 / 投', grammar: 'verb，围绕「投」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She casted it yesterday without checking the real past form.', right: 'Check the past form of "cast" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cast 是verb，再套「投」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cast.q1', senseId: 'cast.s1', errorType: 'meaning', type: '词义选择', prompt: '「cast」在本条的核心意思是：', options: ['投', '完全相反的意思', '一种古代钱币'], answer: '投', explain: 'cast：投。' },
      { id: 'cast.q2', senseId: 'cast.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cast?', options: ['投', 'a kind of ancient coin', 'the past tense of be'], answer: '投', explain: '对的是「投」。' },
      { id: 'cast.q3', senseId: 'cast.s1', errorType: 'grammar', type: '词义选择', prompt: 'cast 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cast.q4', senseId: 'cast.s1', errorType: 'meaning', type: '词源', prompt: '记 cast 时，哪句更稳妥？', options: ['先锁住「投」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「投」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['投'] },
  });

  D('cast members', {
    etymology: {
      origin: '现代英语固定说法「cast members」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cast members', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cast members', text: '现代英语固定说法「cast members」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：演员阵容。' },
      ],
      formationLogic: '核心义：演员阵容。',
      mnemonic: '看到 cast members，先说出「演员阵容」。',
      note: '核心义：演员阵容。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cast members" and asked the class to keep it as one unit.', chinese: '老师把「cast members」圈出来，让全班把它当成一个整体。它表示演员阵容。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cast members.s1', en: 'In the margin she wrote "cast members" so nobody would split the phrase.', zh: '她在页边写下「cast members」，免得有人把这个说法拆开。意思是演员阵容。', structure: 'cast members / 表示 / 演员阵容', grammar: 'noun，围绕「演员阵容」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cast members and lost the point.', right: 'Keep "cast members" together: it means 演员阵容.', reason: '「cast members」要整块理解。', rule: '先确定 cast members 是noun，再套「演员阵容」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cast members.q1', senseId: 'cast members.s1', errorType: 'meaning', type: '词义选择', prompt: '「cast members」在本条的核心意思是：', options: ['演员阵容', '完全相反的意思', '一种古代钱币'], answer: '演员阵容', explain: 'cast members：演员阵容。' },
      { id: 'cast members.q2', senseId: 'cast members.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cast members?', options: ['演员阵容', 'a kind of ancient coin', 'the past tense of be'], answer: '演员阵容', explain: '对的是「演员阵容」。' },
      { id: 'cast members.q3', senseId: 'cast members.s1', errorType: 'grammar', type: '词义选择', prompt: 'cast members 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cast members.q4', senseId: 'cast members.s1', errorType: 'meaning', type: '词源', prompt: '记 cast members 时，哪句更稳妥？', options: ['先锁住「演员阵容」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「演员阵容」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['演员阵容'] },
  });

  D('castle', {
    etymology: {
      origin: '拉丁语 castellum「小堡垒」。',
      prefix: null,
      root: { text: 'castle', gloss: '城堡' },
      suffix: null,
      history: [
        { label: 'castle', text: '拉丁语 castellum「小堡垒」。' },
        { label: '现在', text: '核心用法是：城堡。' },
      ],
      formationLogic: '考试认现在的用法：城堡。',
      mnemonic: '看到 castle，先说出「城堡」。',
      note: '考试认现在的用法：城堡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one castle.', chinese: '这一章反复回到同一个点：城堡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'castle.s1', en: 'Without that castle, the next paragraph is hard to follow.', zh: '没有这个城堡，下一段会很难读。', structure: 'castle / 表示 / 城堡', grammar: 'noun，围绕「城堡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the castle.', right: 'He gave me some advice about the castle.', reason: 'advice 不可数。名词 castle 的单复数按词典词形记。', rule: '先确定 castle 是noun，再套「城堡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'castle.q1', senseId: 'castle.s1', errorType: 'meaning', type: '词义选择', prompt: '「castle」在本条的核心意思是：', options: ['城堡', '完全相反的意思', '一种古代钱币'], answer: '城堡', explain: 'castle：城堡。' },
      { id: 'castle.q2', senseId: 'castle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches castle?', options: ['城堡', 'a kind of ancient coin', 'the past tense of be'], answer: '城堡', explain: '对的是「城堡」。' },
      { id: 'castle.q3', senseId: 'castle.s1', errorType: 'grammar', type: '词义选择', prompt: 'castle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'castle.q4', senseId: 'castle.s1', errorType: 'meaning', type: '词源', prompt: '记 castle 时，哪句更稳妥？', options: ['先锁住「城堡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「城堡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['城堡'] },
  });

  D('casual', {
    etymology: {
      origin: '英语派生：casu + -al，词性转到「随意的」。',
      prefix: null,
      root: { text: 'casu', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'casual', text: '英语派生：casu + -al，词性转到「随意的」。' },
        { label: '现在', text: '核心用法是：随意的。' },
      ],
      formationLogic: '先认词干 casu，再看词尾。',
      mnemonic: '看到 casual，先说出「随意的」。',
      note: '先认词干 casu，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was casual.', chinese: '即使是初读者也能看出，这个结果是随意的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'casual.s1', en: 'They wanted a casual answer, not a long speech.', zh: '他们要一个随意的的答复，不要长篇发言。', structure: 'casual / 表示 / 随意的', grammar: 'adjective，围绕「随意的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are casual.', right: 'The news is casual.', reason: 'news 作主语时动词用单数。', rule: '先确定 casual 是adjective，再套「随意的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'casual.q1', senseId: 'casual.s1', errorType: 'meaning', type: '词义选择', prompt: '「casual」在本条的核心意思是：', options: ['随意的', '完全相反的意思', '一种古代钱币'], answer: '随意的', explain: 'casual：随意的。' },
      { id: 'casual.q2', senseId: 'casual.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches casual?', options: ['随意的', 'a kind of ancient coin', 'the past tense of be'], answer: '随意的', explain: '对的是「随意的」。' },
      { id: 'casual.q3', senseId: 'casual.s1', errorType: 'grammar', type: '词义选择', prompt: 'casual 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'casual.q4', senseId: 'casual.s1', errorType: 'meaning', type: '词源', prompt: '记 casual 时，哪句更稳妥？', options: ['先锁住「随意的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「随意的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['随意的'] },
  });

  D('casualty', {
    etymology: {
      origin: '现代英语常用词「casualty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'casualty', gloss: '伤亡人员' },
      suffix: null,
      history: [
        { label: 'casualty', text: '现代英语常用词「casualty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：伤亡人员。' },
      ],
      formationLogic: '核心义：伤亡人员。',
      mnemonic: '看到 casualty，先说出「伤亡人员」。',
      note: '核心义：伤亡人员。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one casualty.', chinese: '这一章反复回到同一个点：伤亡人员。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'casualty.s1', en: 'Without that casualty, the next paragraph is hard to follow.', zh: '没有这个伤亡人员，下一段会很难读。', structure: 'casualty / 表示 / 伤亡人员', grammar: 'noun，围绕「伤亡人员」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the casualty.', right: 'He gave me some advice about the casualty.', reason: 'advice 不可数。名词 casualty 的单复数按词典词形记。', rule: '先确定 casualty 是noun，再套「伤亡人员」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'casualty.q1', senseId: 'casualty.s1', errorType: 'meaning', type: '词义选择', prompt: '「casualty」在本条的核心意思是：', options: ['伤亡人员', '完全相反的意思', '一种古代钱币'], answer: '伤亡人员', explain: 'casualty：伤亡人员。' },
      { id: 'casualty.q2', senseId: 'casualty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches casualty?', options: ['伤亡人员', 'a kind of ancient coin', 'the past tense of be'], answer: '伤亡人员', explain: '对的是「伤亡人员」。' },
      { id: 'casualty.q3', senseId: 'casualty.s1', errorType: 'grammar', type: '词义选择', prompt: 'casualty 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'casualty.q4', senseId: 'casualty.s1', errorType: 'meaning', type: '词源', prompt: '记 casualty 时，哪句更稳妥？', options: ['先锁住「伤亡人员」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「伤亡人员」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['伤亡人员'] },
  });

  D('cat', {
    etymology: {
      origin: '古英语 catt，拉丁语 catta。',
      prefix: null,
      root: { text: 'cat', gloss: '猫' },
      suffix: null,
      history: [
        { label: 'cat', text: '古英语 catt，拉丁语 catta。' },
        { label: '现在', text: '核心用法是：猫。' },
      ],
      formationLogic: '考试认现在的用法：猫。',
      mnemonic: '看到 cat，先说出「猫」。',
      note: '考试认现在的用法：猫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cat.', chinese: '这一章反复回到同一个点：猫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cat.s1', en: 'Without that cat, the next paragraph is hard to follow.', zh: '没有这个猫，下一段会很难读。', structure: 'cat / 表示 / 猫', grammar: 'noun，围绕「猫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cat.', right: 'He gave me some advice about the cat.', reason: 'advice 不可数。名词 cat 的单复数按词典词形记。', rule: '先确定 cat 是noun，再套「猫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cat.q1', senseId: 'cat.s1', errorType: 'meaning', type: '词义选择', prompt: '「cat」在本条的核心意思是：', options: ['猫', '完全相反的意思', '一种古代钱币'], answer: '猫', explain: 'cat：猫。' },
      { id: 'cat.q2', senseId: 'cat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cat?', options: ['猫', 'a kind of ancient coin', 'the past tense of be'], answer: '猫', explain: '对的是「猫」。' },
      { id: 'cat.q3', senseId: 'cat.s1', errorType: 'grammar', type: '词义选择', prompt: 'cat 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cat.q4', senseId: 'cat.s1', errorType: 'meaning', type: '词源', prompt: '记 cat 时，哪句更稳妥？', options: ['先锁住「猫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「猫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['猫'] },
  });

  D('catalog', {
    etymology: {
      origin: '现代英语常用词「catalog」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'catalog', gloss: '目录' },
      suffix: null,
      history: [
        { label: 'catalog', text: '现代英语常用词「catalog」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：目录。' },
      ],
      formationLogic: '核心义：目录。',
      mnemonic: '看到 catalog，先说出「目录」。',
      note: '核心义：目录。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one catalog.', chinese: '这一章反复回到同一个点：目录。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'catalog.s1', en: 'Without that catalog, the next paragraph is hard to follow.', zh: '没有这个目录，下一段会很难读。', structure: 'catalog / 表示 / 目录', grammar: 'noun，围绕「目录」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the catalog.', right: 'He gave me some advice about the catalog.', reason: 'advice 不可数。名词 catalog 的单复数按词典词形记。', rule: '先确定 catalog 是noun，再套「目录」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'catalog.q1', senseId: 'catalog.s1', errorType: 'meaning', type: '词义选择', prompt: '「catalog」在本条的核心意思是：', options: ['目录', '完全相反的意思', '一种古代钱币'], answer: '目录', explain: 'catalog：目录。' },
      { id: 'catalog.q2', senseId: 'catalog.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches catalog?', options: ['目录', 'a kind of ancient coin', 'the past tense of be'], answer: '目录', explain: '对的是「目录」。' },
      { id: 'catalog.q3', senseId: 'catalog.s1', errorType: 'grammar', type: '词义选择', prompt: 'catalog 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'catalog.q4', senseId: 'catalog.s1', errorType: 'meaning', type: '词源', prompt: '记 catalog 时，哪句更稳妥？', options: ['先锁住「目录」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「目录」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['目录'] },
  });

  D('catalyst', {
    etymology: {
      origin: '现代英语常用词「catalyst」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'catalyst', gloss: '催化剂' },
      suffix: null,
      history: [
        { label: 'catalyst', text: '现代英语常用词「catalyst」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：催化剂。' },
      ],
      formationLogic: '核心义：催化剂。',
      mnemonic: '看到 catalyst，先说出「催化剂」。',
      note: '核心义：催化剂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one catalyst.', chinese: '这一章反复回到同一个点：催化剂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'catalyst.s1', en: 'Without that catalyst, the next paragraph is hard to follow.', zh: '没有这个催化剂，下一段会很难读。', structure: 'catalyst / 表示 / 催化剂', grammar: 'noun，围绕「催化剂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the catalyst.', right: 'He gave me some advice about the catalyst.', reason: 'advice 不可数。名词 catalyst 的单复数按词典词形记。', rule: '先确定 catalyst 是noun，再套「催化剂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'catalyst.q1', senseId: 'catalyst.s1', errorType: 'meaning', type: '词义选择', prompt: '「catalyst」在本条的核心意思是：', options: ['催化剂', '完全相反的意思', '一种古代钱币'], answer: '催化剂', explain: 'catalyst：催化剂。' },
      { id: 'catalyst.q2', senseId: 'catalyst.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches catalyst?', options: ['催化剂', 'a kind of ancient coin', 'the past tense of be'], answer: '催化剂', explain: '对的是「催化剂」。' },
      { id: 'catalyst.q3', senseId: 'catalyst.s1', errorType: 'grammar', type: '词义选择', prompt: 'catalyst 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'catalyst.q4', senseId: 'catalyst.s1', errorType: 'meaning', type: '词源', prompt: '记 catalyst 时，哪句更稳妥？', options: ['先锁住「催化剂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「催化剂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['催化剂'] },
  });

  D('catastrophe', {
    etymology: {
      origin: '现代英语常用词「catastrophe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'catastrophe', gloss: '大灾难' },
      suffix: null,
      history: [
        { label: 'catastrophe', text: '现代英语常用词「catastrophe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大灾难。' },
      ],
      formationLogic: '核心义：大灾难。',
      mnemonic: '看到 catastrophe，先说出「大灾难」。',
      note: '核心义：大灾难。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one catastrophe.', chinese: '这一章反复回到同一个点：大灾难。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'catastrophe.s1', en: 'Without that catastrophe, the next paragraph is hard to follow.', zh: '没有这个大灾难，下一段会很难读。', structure: 'catastrophe / 表示 / 大灾难', grammar: 'noun，围绕「大灾难」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the catastrophe.', right: 'He gave me some advice about the catastrophe.', reason: 'advice 不可数。名词 catastrophe 的单复数按词典词形记。', rule: '先确定 catastrophe 是noun，再套「大灾难」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'catastrophe.q1', senseId: 'catastrophe.s1', errorType: 'meaning', type: '词义选择', prompt: '「catastrophe」在本条的核心意思是：', options: ['大灾难', '完全相反的意思', '一种古代钱币'], answer: '大灾难', explain: 'catastrophe：大灾难。' },
      { id: 'catastrophe.q2', senseId: 'catastrophe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches catastrophe?', options: ['大灾难', 'a kind of ancient coin', 'the past tense of be'], answer: '大灾难', explain: '对的是「大灾难」。' },
      { id: 'catastrophe.q3', senseId: 'catastrophe.s1', errorType: 'grammar', type: '词义选择', prompt: 'catastrophe 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'catastrophe.q4', senseId: 'catastrophe.s1', errorType: 'meaning', type: '词源', prompt: '记 catastrophe 时，哪句更稳妥？', options: ['先锁住「大灾难」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大灾难」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大灾难'] },
  });

  D('catch', {
    etymology: {
      origin: '古法语 cachier，拉丁语 captare「抓」。',
      prefix: null,
      root: { text: 'catch', gloss: '抓住' },
      suffix: null,
      history: [
        { label: 'catch', text: '古法语 cachier，拉丁语 captare「抓」。' },
        { label: '现在', text: '核心用法是：抓住。' },
      ],
      formationLogic: '考试认现在的用法：抓住。',
      mnemonic: '看到 catch，先说出「抓住」。',
      note: '考试认现在的用法：抓住。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to catch before the office closed.', chinese: '他们同意在办公室关门前做这件事：抓住。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'catch.s1', en: 'The deadline forced the team to catch that afternoon.', zh: '截止日期逼着小组在那天下午抓住。', structure: 'catch / 表示 / 抓住', grammar: 'verb，围绕「抓住」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She catched it yesterday without checking the real past form.', right: 'Check the past form of "catch" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 catch 是verb，再套「抓住」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'catch.q1', senseId: 'catch.s1', errorType: 'meaning', type: '词义选择', prompt: '「catch」在本条的核心意思是：', options: ['抓住', '完全相反的意思', '一种古代钱币'], answer: '抓住', explain: 'catch：抓住。' },
      { id: 'catch.q2', senseId: 'catch.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches catch?', options: ['抓住', 'a kind of ancient coin', 'the past tense of be'], answer: '抓住', explain: '对的是「抓住」。' },
      { id: 'catch.q3', senseId: 'catch.s1', errorType: 'grammar', type: '词义选择', prompt: 'catch 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'catch.q4', senseId: 'catch.s1', errorType: 'meaning', type: '词源', prompt: '记 catch 时，哪句更稳妥？', options: ['先锁住「抓住」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「抓住」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['抓住'] },
  });

  D('catch on', {
    etymology: {
      origin: '现代英语固定说法「catch on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'catch on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'catch on', text: '现代英语固定说法「catch on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：流行。' },
      ],
      formationLogic: '核心义：流行。',
      mnemonic: '看到 catch on，先说出「流行」。',
      note: '核心义：流行。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "catch on" and asked the class to keep it as one unit.', chinese: '老师把「catch on」圈出来，让全班把它当成一个整体。它表示流行。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'catch on.s1', en: 'In the margin she wrote "catch on" so nobody would split the phrase.', zh: '她在页边写下「catch on」，免得有人把这个说法拆开。意思是流行。', structure: 'catch on / 表示 / 流行', grammar: 'verb，围绕「流行」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of catch on and lost the point.', right: 'Keep "catch on" together: it means 流行.', reason: '「catch on」要整块理解。', rule: '先确定 catch on 是verb，再套「流行」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'catch on.q1', senseId: 'catch on.s1', errorType: 'meaning', type: '词义选择', prompt: '「catch on」在本条的核心意思是：', options: ['流行', '完全相反的意思', '一种古代钱币'], answer: '流行', explain: 'catch on：流行。' },
      { id: 'catch on.q2', senseId: 'catch on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches catch on?', options: ['流行', 'a kind of ancient coin', 'the past tense of be'], answer: '流行', explain: '对的是「流行」。' },
      { id: 'catch on.q3', senseId: 'catch on.s1', errorType: 'grammar', type: '词义选择', prompt: 'catch on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'catch on.q4', senseId: 'catch on.s1', errorType: 'meaning', type: '词源', prompt: '记 catch on 时，哪句更稳妥？', options: ['先锁住「流行」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「流行」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['流行'] },
  });

  D('catchphrase', {
    etymology: {
      origin: '现代英语常用词「catchphrase」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'catchphrase', gloss: '口头禅' },
      suffix: null,
      history: [
        { label: 'catchphrase', text: '现代英语常用词「catchphrase」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：口头禅。' },
      ],
      formationLogic: '核心义：口头禅。',
      mnemonic: '看到 catchphrase，先说出「口头禅」。',
      note: '核心义：口头禅。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one catchphrase.', chinese: '这一章反复回到同一个点：口头禅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'catchphrase.s1', en: 'Without that catchphrase, the next paragraph is hard to follow.', zh: '没有这个口头禅，下一段会很难读。', structure: 'catchphrase / 表示 / 口头禅', grammar: 'noun，围绕「口头禅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the catchphrase.', right: 'He gave me some advice about the catchphrase.', reason: 'advice 不可数。名词 catchphrase 的单复数按词典词形记。', rule: '先确定 catchphrase 是noun，再套「口头禅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'catchphrase.q1', senseId: 'catchphrase.s1', errorType: 'meaning', type: '词义选择', prompt: '「catchphrase」在本条的核心意思是：', options: ['口头禅', '完全相反的意思', '一种古代钱币'], answer: '口头禅', explain: 'catchphrase：口头禅。' },
      { id: 'catchphrase.q2', senseId: 'catchphrase.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches catchphrase?', options: ['口头禅', 'a kind of ancient coin', 'the past tense of be'], answer: '口头禅', explain: '对的是「口头禅」。' },
      { id: 'catchphrase.q3', senseId: 'catchphrase.s1', errorType: 'grammar', type: '词义选择', prompt: 'catchphrase 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'catchphrase.q4', senseId: 'catchphrase.s1', errorType: 'meaning', type: '词源', prompt: '记 catchphrase 时，哪句更稳妥？', options: ['先锁住「口头禅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「口头禅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['口头禅'] },
  });

  D('categorize', {
    etymology: {
      origin: '现代英语常用词「categorize」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'categorize', gloss: '归类' },
      suffix: null,
      history: [
        { label: 'categorize', text: '现代英语常用词「categorize」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：归类。' },
      ],
      formationLogic: '核心义：归类。',
      mnemonic: '看到 categorize，先说出「归类」。',
      note: '核心义：归类。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to categorize before the office closed.', chinese: '他们同意在办公室关门前做这件事：归类。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'categorize.s1', en: 'The deadline forced the team to categorize that afternoon.', zh: '截止日期逼着小组在那天下午归类。', structure: 'categorize / 表示 / 归类', grammar: 'verb，围绕「归类」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She categorizeed it yesterday without checking the real past form.', right: 'Check the past form of "categorize" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 categorize 是verb，再套「归类」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'categorize.q1', senseId: 'categorize.s1', errorType: 'meaning', type: '词义选择', prompt: '「categorize」在本条的核心意思是：', options: ['归类', '完全相反的意思', '一种古代钱币'], answer: '归类', explain: 'categorize：归类。' },
      { id: 'categorize.q2', senseId: 'categorize.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches categorize?', options: ['归类', 'a kind of ancient coin', 'the past tense of be'], answer: '归类', explain: '对的是「归类」。' },
      { id: 'categorize.q3', senseId: 'categorize.s1', errorType: 'grammar', type: '词义选择', prompt: 'categorize 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'categorize.q4', senseId: 'categorize.s1', errorType: 'meaning', type: '词源', prompt: '记 categorize 时，哪句更稳妥？', options: ['先锁住「归类」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「归类」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['归类'] },
  });

  D('category', {
    etymology: {
      origin: '希腊语 kategoria「指控、分类」。',
      prefix: null,
      root: { text: 'category', gloss: '种类' },
      suffix: null,
      history: [
        { label: 'category', text: '希腊语 kategoria「指控、分类」。' },
        { label: '现在', text: '核心用法是：种类。' },
      ],
      formationLogic: '考试认现在的用法：种类。',
      mnemonic: '看到 category，先说出「种类」。',
      note: '考试认现在的用法：种类。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one category.', chinese: '这一章反复回到同一个点：种类。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'category.s1', en: 'Without that category, the next paragraph is hard to follow.', zh: '没有这个种类，下一段会很难读。', structure: 'category / 表示 / 种类', grammar: 'noun，围绕「种类」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the category.', right: 'He gave me some advice about the category.', reason: 'advice 不可数。名词 category 的单复数按词典词形记。', rule: '先确定 category 是noun，再套「种类」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'category.q1', senseId: 'category.s1', errorType: 'meaning', type: '词义选择', prompt: '「category」在本条的核心意思是：', options: ['种类', '完全相反的意思', '一种古代钱币'], answer: '种类', explain: 'category：种类。' },
      { id: 'category.q2', senseId: 'category.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches category?', options: ['种类', 'a kind of ancient coin', 'the past tense of be'], answer: '种类', explain: '对的是「种类」。' },
      { id: 'category.q3', senseId: 'category.s1', errorType: 'grammar', type: '词义选择', prompt: 'category 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'category.q4', senseId: 'category.s1', errorType: 'meaning', type: '词源', prompt: '记 category 时，哪句更稳妥？', options: ['先锁住「种类」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「种类」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['种类'] },
  });

  D('cater', {
    etymology: {
      origin: '英语派生：cat + -er，词性转到「提供饮食」。',
      prefix: null,
      root: { text: 'cat', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cater', text: '英语派生：cat + -er，词性转到「提供饮食」。' },
        { label: '现在', text: '核心用法是：提供饮食。' },
      ],
      formationLogic: '先认词干 cat，再看词尾。',
      mnemonic: '看到 cater，先说出「提供饮食」。',
      note: '先认词干 cat，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cater before the office closed.', chinese: '他们同意在办公室关门前做这件事：提供饮食。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cater.s1', en: 'The deadline forced the team to cater that afternoon.', zh: '截止日期逼着小组在那天下午提供饮食。', structure: 'cater / 表示 / 提供饮食', grammar: 'verb，围绕「提供饮食」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She catered it yesterday without checking the real past form.', right: 'Check the past form of "cater" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cater 是verb，再套「提供饮食」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cater.q1', senseId: 'cater.s1', errorType: 'meaning', type: '词义选择', prompt: '「cater」在本条的核心意思是：', options: ['提供饮食', '完全相反的意思', '一种古代钱币'], answer: '提供饮食', explain: 'cater：提供饮食。' },
      { id: 'cater.q2', senseId: 'cater.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cater?', options: ['提供饮食', 'a kind of ancient coin', 'the past tense of be'], answer: '提供饮食', explain: '对的是「提供饮食」。' },
      { id: 'cater.q3', senseId: 'cater.s1', errorType: 'grammar', type: '词义选择', prompt: 'cater 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cater.q4', senseId: 'cater.s1', errorType: 'meaning', type: '词源', prompt: '记 cater 时，哪句更稳妥？', options: ['先锁住「提供饮食」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「提供饮食」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['提供饮食'] },
  });

  D('cathedral', {
    etymology: {
      origin: '英语派生：cathedr + -al，词性转到「大教堂」。',
      prefix: null,
      root: { text: 'cathedr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cathedral', text: '英语派生：cathedr + -al，词性转到「大教堂」。' },
        { label: '现在', text: '核心用法是：大教堂。' },
      ],
      formationLogic: '先认词干 cathedr，再看词尾。',
      mnemonic: '看到 cathedral，先说出「大教堂」。',
      note: '先认词干 cathedr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cathedral.', chinese: '这一章反复回到同一个点：大教堂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cathedral.s1', en: 'Without that cathedral, the next paragraph is hard to follow.', zh: '没有这个大教堂，下一段会很难读。', structure: 'cathedral / 表示 / 大教堂', grammar: 'noun，围绕「大教堂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cathedral.', right: 'He gave me some advice about the cathedral.', reason: 'advice 不可数。名词 cathedral 的单复数按词典词形记。', rule: '先确定 cathedral 是noun，再套「大教堂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cathedral.q1', senseId: 'cathedral.s1', errorType: 'meaning', type: '词义选择', prompt: '「cathedral」在本条的核心意思是：', options: ['大教堂', '完全相反的意思', '一种古代钱币'], answer: '大教堂', explain: 'cathedral：大教堂。' },
      { id: 'cathedral.q2', senseId: 'cathedral.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cathedral?', options: ['大教堂', 'a kind of ancient coin', 'the past tense of be'], answer: '大教堂', explain: '对的是「大教堂」。' },
      { id: 'cathedral.q3', senseId: 'cathedral.s1', errorType: 'grammar', type: '词义选择', prompt: 'cathedral 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cathedral.q4', senseId: 'cathedral.s1', errorType: 'meaning', type: '词源', prompt: '记 cathedral 时，哪句更稳妥？', options: ['先锁住「大教堂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大教堂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大教堂'] },
  });

  D('Catholic', {
    etymology: {
      origin: '英语派生：Cathol + -ic，词性转到「天主教的」。',
      prefix: null,
      root: { text: 'Cathol', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'Catholic', text: '英语派生：Cathol + -ic，词性转到「天主教的」。' },
        { label: '现在', text: '核心用法是：天主教的。' },
      ],
      formationLogic: '先认词干 Cathol，再看词尾。',
      mnemonic: '看到 Catholic，先说出「天主教的」。',
      note: '先认词干 Cathol，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was Catholic.', chinese: '即使是初读者也能看出，这个结果是天主教的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'Catholic.s1', en: 'They wanted a Catholic answer, not a long speech.', zh: '他们要一个天主教的的答复，不要长篇发言。', structure: 'Catholic / 表示 / 天主教的', grammar: 'adjective，围绕「天主教的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are Catholic.', right: 'The news is Catholic.', reason: 'news 作主语时动词用单数。', rule: '先确定 Catholic 是adjective，再套「天主教的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'Catholic.q1', senseId: 'Catholic.s1', errorType: 'meaning', type: '词义选择', prompt: '「Catholic」在本条的核心意思是：', options: ['天主教的', '完全相反的意思', '一种古代钱币'], answer: '天主教的', explain: 'Catholic：天主教的。' },
      { id: 'Catholic.q2', senseId: 'Catholic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches Catholic?', options: ['天主教的', 'a kind of ancient coin', 'the past tense of be'], answer: '天主教的', explain: '对的是「天主教的」。' },
      { id: 'Catholic.q3', senseId: 'Catholic.s1', errorType: 'grammar', type: '词义选择', prompt: 'Catholic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'Catholic.q4', senseId: 'Catholic.s1', errorType: 'meaning', type: '词源', prompt: '记 Catholic 时，哪句更稳妥？', options: ['先锁住「天主教的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「天主教的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['天主教的'] },
  });

  D('cattle', {
    etymology: {
      origin: '与 chattel 同源，拉丁语 capitale「财产」。牛曾是主要财产。',
      prefix: null,
      root: { text: 'cattle', gloss: '牛' },
      suffix: null,
      history: [
        { label: 'cattle', text: '与 chattel 同源，拉丁语 capitale「财产」。牛曾是主要财产。' },
        { label: '现在', text: '核心用法是：牛。' },
      ],
      formationLogic: '考试认现在的用法：牛。',
      mnemonic: '看到 cattle，先说出「牛」。',
      note: '考试认现在的用法：牛。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cattle.', chinese: '这一章反复回到同一个点：牛。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cattle.s1', en: 'Without that cattle, the next paragraph is hard to follow.', zh: '没有这个牛，下一段会很难读。', structure: 'cattle / 表示 / 牛', grammar: 'noun，围绕「牛」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cattle.', right: 'He gave me some advice about the cattle.', reason: 'advice 不可数。名词 cattle 的单复数按词典词形记。', rule: '先确定 cattle 是noun，再套「牛」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cattle.q1', senseId: 'cattle.s1', errorType: 'meaning', type: '词义选择', prompt: '「cattle」在本条的核心意思是：', options: ['牛', '完全相反的意思', '一种古代钱币'], answer: '牛', explain: 'cattle：牛。' },
      { id: 'cattle.q2', senseId: 'cattle.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cattle?', options: ['牛', 'a kind of ancient coin', 'the past tense of be'], answer: '牛', explain: '对的是「牛」。' },
      { id: 'cattle.q3', senseId: 'cattle.s1', errorType: 'grammar', type: '词义选择', prompt: 'cattle 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cattle.q4', senseId: 'cattle.s1', errorType: 'meaning', type: '词源', prompt: '记 cattle 时，哪句更稳妥？', options: ['先锁住「牛」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「牛」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['牛'] },
  });

  D('catwalk', {
    etymology: {
      origin: '现代英语常用词「catwalk」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'catwalk', gloss: 'T台' },
      suffix: null,
      history: [
        { label: 'catwalk', text: '现代英语常用词「catwalk」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：T台。' },
      ],
      formationLogic: '核心义：T台。',
      mnemonic: '看到 catwalk，先说出「T台」。',
      note: '核心义：T台。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one catwalk.', chinese: '这一章反复回到同一个点：T台。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'catwalk.s1', en: 'Without that catwalk, the next paragraph is hard to follow.', zh: '没有这个T台，下一段会很难读。', structure: 'catwalk / 表示 / T台', grammar: 'noun，围绕「T台」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the catwalk.', right: 'He gave me some advice about the catwalk.', reason: 'advice 不可数。名词 catwalk 的单复数按词典词形记。', rule: '先确定 catwalk 是noun，再套「T台」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'catwalk.q1', senseId: 'catwalk.s1', errorType: 'meaning', type: '词义选择', prompt: '「catwalk」在本条的核心意思是：', options: ['T台', '完全相反的意思', '一种古代钱币'], answer: 'T台', explain: 'catwalk：T台。' },
      { id: 'catwalk.q2', senseId: 'catwalk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches catwalk?', options: ['T台', 'a kind of ancient coin', 'the past tense of be'], answer: 'T台', explain: '对的是「T台」。' },
      { id: 'catwalk.q3', senseId: 'catwalk.s1', errorType: 'grammar', type: '词义选择', prompt: 'catwalk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'catwalk.q4', senseId: 'catwalk.s1', errorType: 'meaning', type: '词源', prompt: '记 catwalk 时，哪句更稳妥？', options: ['先锁住「T台」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「T台」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['T台'] },
  });

  D('cauliflower', {
    etymology: {
      origin: '英语派生：cauliflow + -er，词性转到「花椰菜」。',
      prefix: null,
      root: { text: 'cauliflow', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cauliflower', text: '英语派生：cauliflow + -er，词性转到「花椰菜」。' },
        { label: '现在', text: '核心用法是：花椰菜。' },
      ],
      formationLogic: '先认词干 cauliflow，再看词尾。',
      mnemonic: '看到 cauliflower，先说出「花椰菜」。',
      note: '先认词干 cauliflow，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cauliflower.', chinese: '这一章反复回到同一个点：花椰菜。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cauliflower.s1', en: 'Without that cauliflower, the next paragraph is hard to follow.', zh: '没有这个花椰菜，下一段会很难读。', structure: 'cauliflower / 表示 / 花椰菜', grammar: 'noun，围绕「花椰菜」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cauliflower.', right: 'He gave me some advice about the cauliflower.', reason: 'advice 不可数。名词 cauliflower 的单复数按词典词形记。', rule: '先确定 cauliflower 是noun，再套「花椰菜」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cauliflower.q1', senseId: 'cauliflower.s1', errorType: 'meaning', type: '词义选择', prompt: '「cauliflower」在本条的核心意思是：', options: ['花椰菜', '完全相反的意思', '一种古代钱币'], answer: '花椰菜', explain: 'cauliflower：花椰菜。' },
      { id: 'cauliflower.q2', senseId: 'cauliflower.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cauliflower?', options: ['花椰菜', 'a kind of ancient coin', 'the past tense of be'], answer: '花椰菜', explain: '对的是「花椰菜」。' },
      { id: 'cauliflower.q3', senseId: 'cauliflower.s1', errorType: 'grammar', type: '词义选择', prompt: 'cauliflower 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cauliflower.q4', senseId: 'cauliflower.s1', errorType: 'meaning', type: '词源', prompt: '记 cauliflower 时，哪句更稳妥？', options: ['先锁住「花椰菜」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「花椰菜」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['花椰菜'] },
  });

  D('cause', {
    etymology: {
      origin: '拉丁语 causa「原因、案子」。',
      prefix: null,
      root: { text: 'cause', gloss: '原因' },
      suffix: null,
      history: [
        { label: 'cause', text: '拉丁语 causa「原因、案子」。' },
        { label: '现在', text: '核心用法是：原因。' },
      ],
      formationLogic: '考试认现在的用法：原因。',
      mnemonic: '看到 cause，先说出「原因」。',
      note: '考试认现在的用法：原因。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cause.', chinese: '这一章反复回到同一个点：原因。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cause.s1', en: 'Without that cause, the next paragraph is hard to follow.', zh: '没有这个原因，下一段会很难读。', structure: 'cause / 表示 / 原因', grammar: 'noun，围绕「原因」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cause.', right: 'He gave me some advice about the cause.', reason: 'advice 不可数。名词 cause 的单复数按词典词形记。', rule: '先确定 cause 是noun，再套「原因」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cause.q1', senseId: 'cause.s1', errorType: 'meaning', type: '词义选择', prompt: '「cause」在本条的核心意思是：', options: ['原因', '完全相反的意思', '一种古代钱币'], answer: '原因', explain: 'cause：原因。' },
      { id: 'cause.q2', senseId: 'cause.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cause?', options: ['原因', 'a kind of ancient coin', 'the past tense of be'], answer: '原因', explain: '对的是「原因」。' },
      { id: 'cause.q3', senseId: 'cause.s1', errorType: 'grammar', type: '词义选择', prompt: 'cause 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cause.q4', senseId: 'cause.s1', errorType: 'meaning', type: '词源', prompt: '记 cause 时，哪句更稳妥？', options: ['先锁住「原因」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「原因」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['原因'] },
  });

  D('caution', {
    etymology: {
      origin: '拉丁语 cautio，cavere「小心」。',
      prefix: null,
      root: { text: 'caution', gloss: '谨慎' },
      suffix: null,
      history: [
        { label: 'caution', text: '拉丁语 cautio，cavere「小心」。' },
        { label: '现在', text: '核心用法是：谨慎。' },
      ],
      formationLogic: '考试认现在的用法：谨慎。',
      mnemonic: '看到 caution，先说出「谨慎」。',
      note: '考试认现在的用法：谨慎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one caution.', chinese: '这一章反复回到同一个点：谨慎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'caution.s1', en: 'Without that caution, the next paragraph is hard to follow.', zh: '没有这个谨慎，下一段会很难读。', structure: 'caution / 表示 / 谨慎', grammar: 'noun，围绕「谨慎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the caution.', right: 'He gave me some advice about the caution.', reason: 'advice 不可数。名词 caution 的单复数按词典词形记。', rule: '先确定 caution 是noun，再套「谨慎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'caution.q1', senseId: 'caution.s1', errorType: 'meaning', type: '词义选择', prompt: '「caution」在本条的核心意思是：', options: ['谨慎', '完全相反的意思', '一种古代钱币'], answer: '谨慎', explain: 'caution：谨慎。' },
      { id: 'caution.q2', senseId: 'caution.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches caution?', options: ['谨慎', 'a kind of ancient coin', 'the past tense of be'], answer: '谨慎', explain: '对的是「谨慎」。' },
      { id: 'caution.q3', senseId: 'caution.s1', errorType: 'grammar', type: '词义选择', prompt: 'caution 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'caution.q4', senseId: 'caution.s1', errorType: 'meaning', type: '词源', prompt: '记 caution 时，哪句更稳妥？', options: ['先锁住「谨慎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谨慎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谨慎'] },
  });

  D('cautious', {
    etymology: {
      origin: '英语派生：cauti + -ous，词性转到「谨慎的」。',
      prefix: null,
      root: { text: 'cauti', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cautious', text: '英语派生：cauti + -ous，词性转到「谨慎的」。' },
        { label: '现在', text: '核心用法是：谨慎的。' },
      ],
      formationLogic: '先认词干 cauti，再看词尾。',
      mnemonic: '看到 cautious，先说出「谨慎的」。',
      note: '先认词干 cauti，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cautious.', chinese: '即使是初读者也能看出，这个结果是谨慎的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cautious.s1', en: 'They wanted a cautious answer, not a long speech.', zh: '他们要一个谨慎的的答复，不要长篇发言。', structure: 'cautious / 表示 / 谨慎的', grammar: 'adjective，围绕「谨慎的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cautious.', right: 'The news is cautious.', reason: 'news 作主语时动词用单数。', rule: '先确定 cautious 是adjective，再套「谨慎的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cautious.q1', senseId: 'cautious.s1', errorType: 'meaning', type: '词义选择', prompt: '「cautious」在本条的核心意思是：', options: ['谨慎的', '完全相反的意思', '一种古代钱币'], answer: '谨慎的', explain: 'cautious：谨慎的。' },
      { id: 'cautious.q2', senseId: 'cautious.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cautious?', options: ['谨慎的', 'a kind of ancient coin', 'the past tense of be'], answer: '谨慎的', explain: '对的是「谨慎的」。' },
      { id: 'cautious.q3', senseId: 'cautious.s1', errorType: 'grammar', type: '词义选择', prompt: 'cautious 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cautious.q4', senseId: 'cautious.s1', errorType: 'meaning', type: '词源', prompt: '记 cautious 时，哪句更稳妥？', options: ['先锁住「谨慎的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谨慎的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谨慎的'] },
  });

  D('cavalier', {
    etymology: {
      origin: '英语派生：cavali + -er，词性转到「骑士」。',
      prefix: null,
      root: { text: 'cavali', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cavalier', text: '英语派生：cavali + -er，词性转到「骑士」。' },
        { label: '现在', text: '核心用法是：骑士。' },
      ],
      formationLogic: '先认词干 cavali，再看词尾。',
      mnemonic: '看到 cavalier，先说出「骑士」。',
      note: '先认词干 cavali，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cavalier.', chinese: '这一章反复回到同一个点：骑士。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cavalier.s1', en: 'Without that cavalier, the next paragraph is hard to follow.', zh: '没有这个骑士，下一段会很难读。', structure: 'cavalier / 表示 / 骑士', grammar: 'noun，围绕「骑士」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cavalier.', right: 'He gave me some advice about the cavalier.', reason: 'advice 不可数。名词 cavalier 的单复数按词典词形记。', rule: '先确定 cavalier 是noun，再套「骑士」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cavalier.q1', senseId: 'cavalier.s1', errorType: 'meaning', type: '词义选择', prompt: '「cavalier」在本条的核心意思是：', options: ['骑士', '完全相反的意思', '一种古代钱币'], answer: '骑士', explain: 'cavalier：骑士。' },
      { id: 'cavalier.q2', senseId: 'cavalier.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cavalier?', options: ['骑士', 'a kind of ancient coin', 'the past tense of be'], answer: '骑士', explain: '对的是「骑士」。' },
      { id: 'cavalier.q3', senseId: 'cavalier.s1', errorType: 'grammar', type: '词义选择', prompt: 'cavalier 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cavalier.q4', senseId: 'cavalier.s1', errorType: 'meaning', type: '词源', prompt: '记 cavalier 时，哪句更稳妥？', options: ['先锁住「骑士」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「骑士」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['骑士'] },
  });

  D('cave', {
    etymology: {
      origin: '拉丁语 cavus「空的」。',
      prefix: null,
      root: { text: 'cave', gloss: '洞穴' },
      suffix: null,
      history: [
        { label: 'cave', text: '拉丁语 cavus「空的」。' },
        { label: '现在', text: '核心用法是：洞穴。' },
      ],
      formationLogic: '考试认现在的用法：洞穴。',
      mnemonic: '看到 cave，先说出「洞穴」。',
      note: '考试认现在的用法：洞穴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cave.', chinese: '这一章反复回到同一个点：洞穴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cave.s1', en: 'Without that cave, the next paragraph is hard to follow.', zh: '没有这个洞穴，下一段会很难读。', structure: 'cave / 表示 / 洞穴', grammar: 'noun，围绕「洞穴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cave.', right: 'He gave me some advice about the cave.', reason: 'advice 不可数。名词 cave 的单复数按词典词形记。', rule: '先确定 cave 是noun，再套「洞穴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cave.q1', senseId: 'cave.s1', errorType: 'meaning', type: '词义选择', prompt: '「cave」在本条的核心意思是：', options: ['洞穴', '完全相反的意思', '一种古代钱币'], answer: '洞穴', explain: 'cave：洞穴。' },
      { id: 'cave.q2', senseId: 'cave.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cave?', options: ['洞穴', 'a kind of ancient coin', 'the past tense of be'], answer: '洞穴', explain: '对的是「洞穴」。' },
      { id: 'cave.q3', senseId: 'cave.s1', errorType: 'grammar', type: '词义选择', prompt: 'cave 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cave.q4', senseId: 'cave.s1', errorType: 'meaning', type: '词源', prompt: '记 cave 时，哪句更稳妥？', options: ['先锁住「洞穴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「洞穴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['洞穴'] },
  });

  D('cave in', {
    etymology: {
      origin: '现代英语固定说法「cave in」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'cave in', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'cave in', text: '现代英语固定说法「cave in」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：塌陷。' },
      ],
      formationLogic: '核心义：塌陷。',
      mnemonic: '看到 cave in，先说出「塌陷」。',
      note: '核心义：塌陷。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "cave in" and asked the class to keep it as one unit.', chinese: '老师把「cave in」圈出来，让全班把它当成一个整体。它表示塌陷。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cave in.s1', en: 'In the margin she wrote "cave in" so nobody would split the phrase.', zh: '她在页边写下「cave in」，免得有人把这个说法拆开。意思是塌陷。', structure: 'cave in / 表示 / 塌陷', grammar: 'verb，围绕「塌陷」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of cave in and lost the point.', right: 'Keep "cave in" together: it means 塌陷.', reason: '「cave in」要整块理解。', rule: '先确定 cave in 是verb，再套「塌陷」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cave in.q1', senseId: 'cave in.s1', errorType: 'meaning', type: '词义选择', prompt: '「cave in」在本条的核心意思是：', options: ['塌陷', '完全相反的意思', '一种古代钱币'], answer: '塌陷', explain: 'cave in：塌陷。' },
      { id: 'cave in.q2', senseId: 'cave in.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cave in?', options: ['塌陷', 'a kind of ancient coin', 'the past tense of be'], answer: '塌陷', explain: '对的是「塌陷」。' },
      { id: 'cave in.q3', senseId: 'cave in.s1', errorType: 'grammar', type: '词义选择', prompt: 'cave in 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cave in.q4', senseId: 'cave in.s1', errorType: 'meaning', type: '词源', prompt: '记 cave in 时，哪句更稳妥？', options: ['先锁住「塌陷」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「塌陷」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['塌陷'] },
  });

  D('cavern', {
    etymology: {
      origin: '现代英语常用词「cavern」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cavern', gloss: '大洞穴' },
      suffix: null,
      history: [
        { label: 'cavern', text: '现代英语常用词「cavern」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：大洞穴。' },
      ],
      formationLogic: '核心义：大洞穴。',
      mnemonic: '看到 cavern，先说出「大洞穴」。',
      note: '核心义：大洞穴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cavern.', chinese: '这一章反复回到同一个点：大洞穴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cavern.s1', en: 'Without that cavern, the next paragraph is hard to follow.', zh: '没有这个大洞穴，下一段会很难读。', structure: 'cavern / 表示 / 大洞穴', grammar: 'noun，围绕「大洞穴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cavern.', right: 'He gave me some advice about the cavern.', reason: 'advice 不可数。名词 cavern 的单复数按词典词形记。', rule: '先确定 cavern 是noun，再套「大洞穴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cavern.q1', senseId: 'cavern.s1', errorType: 'meaning', type: '词义选择', prompt: '「cavern」在本条的核心意思是：', options: ['大洞穴', '完全相反的意思', '一种古代钱币'], answer: '大洞穴', explain: 'cavern：大洞穴。' },
      { id: 'cavern.q2', senseId: 'cavern.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cavern?', options: ['大洞穴', 'a kind of ancient coin', 'the past tense of be'], answer: '大洞穴', explain: '对的是「大洞穴」。' },
      { id: 'cavern.q3', senseId: 'cavern.s1', errorType: 'grammar', type: '词义选择', prompt: 'cavern 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cavern.q4', senseId: 'cavern.s1', errorType: 'meaning', type: '词源', prompt: '记 cavern 时，哪句更稳妥？', options: ['先锁住「大洞穴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大洞穴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大洞穴'] },
  });

  D('cavity', {
    etymology: {
      origin: '英语派生：cav + -ity，词性转到「洞」。',
      prefix: null,
      root: { text: 'cav', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cavity', text: '英语派生：cav + -ity，词性转到「洞」。' },
        { label: '现在', text: '核心用法是：洞。' },
      ],
      formationLogic: '先认词干 cav，再看词尾。',
      mnemonic: '看到 cavity，先说出「洞」。',
      note: '先认词干 cav，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cavity.', chinese: '这一章反复回到同一个点：洞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cavity.s1', en: 'Without that cavity, the next paragraph is hard to follow.', zh: '没有这个洞，下一段会很难读。', structure: 'cavity / 表示 / 洞', grammar: 'noun，围绕「洞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cavity.', right: 'He gave me some advice about the cavity.', reason: 'advice 不可数。名词 cavity 的单复数按词典词形记。', rule: '先确定 cavity 是noun，再套「洞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cavity.q1', senseId: 'cavity.s1', errorType: 'meaning', type: '词义选择', prompt: '「cavity」在本条的核心意思是：', options: ['洞', '完全相反的意思', '一种古代钱币'], answer: '洞', explain: 'cavity：洞。' },
      { id: 'cavity.q2', senseId: 'cavity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cavity?', options: ['洞', 'a kind of ancient coin', 'the past tense of be'], answer: '洞', explain: '对的是「洞」。' },
      { id: 'cavity.q3', senseId: 'cavity.s1', errorType: 'grammar', type: '词义选择', prompt: 'cavity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cavity.q4', senseId: 'cavity.s1', errorType: 'meaning', type: '词源', prompt: '记 cavity 时，哪句更稳妥？', options: ['先锁住「洞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「洞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['洞'] },
  });

  D('cease', {
    etymology: {
      origin: '拉丁语 cessare「停下」。',
      prefix: null,
      root: { text: 'cease', gloss: '停止' },
      suffix: null,
      history: [
        { label: 'cease', text: '拉丁语 cessare「停下」。' },
        { label: '现在', text: '核心用法是：停止。' },
      ],
      formationLogic: '考试认现在的用法：停止。',
      mnemonic: '看到 cease，先说出「停止」。',
      note: '考试认现在的用法：停止。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cease before the office closed.', chinese: '他们同意在办公室关门前做这件事：停止。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cease.s1', en: 'The deadline forced the team to cease that afternoon.', zh: '截止日期逼着小组在那天下午停止。', structure: 'cease / 表示 / 停止', grammar: 'verb，围绕「停止」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She ceaseed it yesterday without checking the real past form.', right: 'Check the past form of "cease" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cease 是verb，再套「停止」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cease.q1', senseId: 'cease.s1', errorType: 'meaning', type: '词义选择', prompt: '「cease」在本条的核心意思是：', options: ['停止', '完全相反的意思', '一种古代钱币'], answer: '停止', explain: 'cease：停止。' },
      { id: 'cease.q2', senseId: 'cease.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cease?', options: ['停止', 'a kind of ancient coin', 'the past tense of be'], answer: '停止', explain: '对的是「停止」。' },
      { id: 'cease.q3', senseId: 'cease.s1', errorType: 'grammar', type: '词义选择', prompt: 'cease 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cease.q4', senseId: 'cease.s1', errorType: 'meaning', type: '词源', prompt: '记 cease 时，哪句更稳妥？', options: ['先锁住「停止」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「停止」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['停止'] },
  });

  D('ceiling', {
    etymology: {
      origin: '拉丁语 caelum「天空」一系，经法语，指室内的顶。',
      prefix: null,
      root: { text: 'ceiling', gloss: '天花板' },
      suffix: null,
      history: [
        { label: 'ceiling', text: '拉丁语 caelum「天空」一系，经法语，指室内的顶。' },
        { label: '现在', text: '核心用法是：天花板。' },
      ],
      formationLogic: '考试认现在的用法：天花板。',
      mnemonic: '看到 ceiling，先说出「天花板」。',
      note: '考试认现在的用法：天花板。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ceiling.', chinese: '这一章反复回到同一个点：天花板。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ceiling.s1', en: 'Without that ceiling, the next paragraph is hard to follow.', zh: '没有这个天花板，下一段会很难读。', structure: 'ceiling / 表示 / 天花板', grammar: 'noun，围绕「天花板」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ceiling.', right: 'He gave me some advice about the ceiling.', reason: 'advice 不可数。名词 ceiling 的单复数按词典词形记。', rule: '先确定 ceiling 是noun，再套「天花板」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ceiling.q1', senseId: 'ceiling.s1', errorType: 'meaning', type: '词义选择', prompt: '「ceiling」在本条的核心意思是：', options: ['天花板', '完全相反的意思', '一种古代钱币'], answer: '天花板', explain: 'ceiling：天花板。' },
      { id: 'ceiling.q2', senseId: 'ceiling.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ceiling?', options: ['天花板', 'a kind of ancient coin', 'the past tense of be'], answer: '天花板', explain: '对的是「天花板」。' },
      { id: 'ceiling.q3', senseId: 'ceiling.s1', errorType: 'grammar', type: '词义选择', prompt: 'ceiling 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ceiling.q4', senseId: 'ceiling.s1', errorType: 'meaning', type: '词源', prompt: '记 ceiling 时，哪句更稳妥？', options: ['先锁住「天花板」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「天花板」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['天花板'] },
  });

  D('celebrate', {
    etymology: {
      origin: '拉丁语 celebrare「常去、隆重举行」。',
      prefix: null,
      root: { text: 'celebrate', gloss: '庆祝' },
      suffix: null,
      history: [
        { label: 'celebrate', text: '拉丁语 celebrare「常去、隆重举行」。' },
        { label: '现在', text: '核心用法是：庆祝。' },
      ],
      formationLogic: '考试认现在的用法：庆祝。',
      mnemonic: '看到 celebrate，先说出「庆祝」。',
      note: '考试认现在的用法：庆祝。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to celebrate before the office closed.', chinese: '他们同意在办公室关门前做这件事：庆祝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'celebrate.s1', en: 'The deadline forced the team to celebrate that afternoon.', zh: '截止日期逼着小组在那天下午庆祝。', structure: 'celebrate / 表示 / 庆祝', grammar: 'verb，围绕「庆祝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She celebrateed it yesterday without checking the real past form.', right: 'Check the past form of "celebrate" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 celebrate 是verb，再套「庆祝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'celebrate.q1', senseId: 'celebrate.s1', errorType: 'meaning', type: '词义选择', prompt: '「celebrate」在本条的核心意思是：', options: ['庆祝', '完全相反的意思', '一种古代钱币'], answer: '庆祝', explain: 'celebrate：庆祝。' },
      { id: 'celebrate.q2', senseId: 'celebrate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches celebrate?', options: ['庆祝', 'a kind of ancient coin', 'the past tense of be'], answer: '庆祝', explain: '对的是「庆祝」。' },
      { id: 'celebrate.q3', senseId: 'celebrate.s1', errorType: 'grammar', type: '词义选择', prompt: 'celebrate 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'celebrate.q4', senseId: 'celebrate.s1', errorType: 'meaning', type: '词源', prompt: '记 celebrate 时，哪句更稳妥？', options: ['先锁住「庆祝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「庆祝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['庆祝'] },
  });

  D('celebrated', {
    etymology: {
      origin: '现代英语常用词「celebrated」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'celebrated', gloss: '著名的' },
      suffix: null,
      history: [
        { label: 'celebrated', text: '现代英语常用词「celebrated」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：著名的。' },
      ],
      formationLogic: '核心义：著名的。',
      mnemonic: '看到 celebrated，先说出「著名的」。',
      note: '核心义：著名的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was celebrated.', chinese: '即使是初读者也能看出，这个结果是著名的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'celebrated.s1', en: 'They wanted a celebrated answer, not a long speech.', zh: '他们要一个著名的的答复，不要长篇发言。', structure: 'celebrated / 表示 / 著名的', grammar: 'adjective，围绕「著名的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are celebrated.', right: 'The news is celebrated.', reason: 'news 作主语时动词用单数。', rule: '先确定 celebrated 是adjective，再套「著名的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'celebrated.q1', senseId: 'celebrated.s1', errorType: 'meaning', type: '词义选择', prompt: '「celebrated」在本条的核心意思是：', options: ['著名的', '完全相反的意思', '一种古代钱币'], answer: '著名的', explain: 'celebrated：著名的。' },
      { id: 'celebrated.q2', senseId: 'celebrated.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches celebrated?', options: ['著名的', 'a kind of ancient coin', 'the past tense of be'], answer: '著名的', explain: '对的是「著名的」。' },
      { id: 'celebrated.q3', senseId: 'celebrated.s1', errorType: 'grammar', type: '词义选择', prompt: 'celebrated 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'celebrated.q4', senseId: 'celebrated.s1', errorType: 'meaning', type: '词源', prompt: '记 celebrated 时，哪句更稳妥？', options: ['先锁住「著名的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「著名的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['著名的'] },
  });

  D('celebration', {
    etymology: {
      origin: '英语派生：celebra + -tion，词性转到「庆祝」。',
      prefix: null,
      root: { text: 'celebra', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'celebration', text: '英语派生：celebra + -tion，词性转到「庆祝」。' },
        { label: '现在', text: '核心用法是：庆祝。' },
      ],
      formationLogic: '先认词干 celebra，再看词尾。',
      mnemonic: '看到 celebration，先说出「庆祝」。',
      note: '先认词干 celebra，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one celebration.', chinese: '这一章反复回到同一个点：庆祝。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'celebration.s1', en: 'Without that celebration, the next paragraph is hard to follow.', zh: '没有这个庆祝，下一段会很难读。', structure: 'celebration / 表示 / 庆祝', grammar: 'noun，围绕「庆祝」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the celebration.', right: 'He gave me some advice about the celebration.', reason: 'advice 不可数。名词 celebration 的单复数按词典词形记。', rule: '先确定 celebration 是noun，再套「庆祝」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'celebration.q1', senseId: 'celebration.s1', errorType: 'meaning', type: '词义选择', prompt: '「celebration」在本条的核心意思是：', options: ['庆祝', '完全相反的意思', '一种古代钱币'], answer: '庆祝', explain: 'celebration：庆祝。' },
      { id: 'celebration.q2', senseId: 'celebration.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches celebration?', options: ['庆祝', 'a kind of ancient coin', 'the past tense of be'], answer: '庆祝', explain: '对的是「庆祝」。' },
      { id: 'celebration.q3', senseId: 'celebration.s1', errorType: 'grammar', type: '词义选择', prompt: 'celebration 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'celebration.q4', senseId: 'celebration.s1', errorType: 'meaning', type: '词源', prompt: '记 celebration 时，哪句更稳妥？', options: ['先锁住「庆祝」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「庆祝」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['庆祝'] },
  });

  D('celebrity', {
    etymology: {
      origin: '英语派生：celebr + -ity，词性转到「名人」。',
      prefix: null,
      root: { text: 'celebr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'celebrity', text: '英语派生：celebr + -ity，词性转到「名人」。' },
        { label: '现在', text: '核心用法是：名人。' },
      ],
      formationLogic: '先认词干 celebr，再看词尾。',
      mnemonic: '看到 celebrity，先说出「名人」。',
      note: '先认词干 celebr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one celebrity.', chinese: '这一章反复回到同一个点：名人。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'celebrity.s1', en: 'Without that celebrity, the next paragraph is hard to follow.', zh: '没有这个名人，下一段会很难读。', structure: 'celebrity / 表示 / 名人', grammar: 'noun，围绕「名人」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the celebrity.', right: 'He gave me some advice about the celebrity.', reason: 'advice 不可数。名词 celebrity 的单复数按词典词形记。', rule: '先确定 celebrity 是noun，再套「名人」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'celebrity.q1', senseId: 'celebrity.s1', errorType: 'meaning', type: '词义选择', prompt: '「celebrity」在本条的核心意思是：', options: ['名人', '完全相反的意思', '一种古代钱币'], answer: '名人', explain: 'celebrity：名人。' },
      { id: 'celebrity.q2', senseId: 'celebrity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches celebrity?', options: ['名人', 'a kind of ancient coin', 'the past tense of be'], answer: '名人', explain: '对的是「名人」。' },
      { id: 'celebrity.q3', senseId: 'celebrity.s1', errorType: 'grammar', type: '词义选择', prompt: 'celebrity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'celebrity.q4', senseId: 'celebrity.s1', errorType: 'meaning', type: '词源', prompt: '记 celebrity 时，哪句更稳妥？', options: ['先锁住「名人」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「名人」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['名人'] },
  });

  D('cell', {
    etymology: {
      origin: '拉丁语 cella「小房间」。',
      prefix: null,
      root: { text: 'cell', gloss: '细胞' },
      suffix: null,
      history: [
        { label: 'cell', text: '拉丁语 cella「小房间」。' },
        { label: '现在', text: '核心用法是：细胞。' },
      ],
      formationLogic: '考试认现在的用法：细胞。',
      mnemonic: '看到 cell，先说出「细胞」。',
      note: '考试认现在的用法：细胞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cell.', chinese: '这一章反复回到同一个点：细胞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cell.s1', en: 'Without that cell, the next paragraph is hard to follow.', zh: '没有这个细胞，下一段会很难读。', structure: 'cell / 表示 / 细胞', grammar: 'noun，围绕「细胞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cell.', right: 'He gave me some advice about the cell.', reason: 'advice 不可数。名词 cell 的单复数按词典词形记。', rule: '先确定 cell 是noun，再套「细胞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cell.q1', senseId: 'cell.s1', errorType: 'meaning', type: '词义选择', prompt: '「cell」在本条的核心意思是：', options: ['细胞', '完全相反的意思', '一种古代钱币'], answer: '细胞', explain: 'cell：细胞。' },
      { id: 'cell.q2', senseId: 'cell.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cell?', options: ['细胞', 'a kind of ancient coin', 'the past tense of be'], answer: '细胞', explain: '对的是「细胞」。' },
      { id: 'cell.q3', senseId: 'cell.s1', errorType: 'grammar', type: '词义选择', prompt: 'cell 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cell.q4', senseId: 'cell.s1', errorType: 'meaning', type: '词源', prompt: '记 cell 时，哪句更稳妥？', options: ['先锁住「细胞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「细胞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['细胞'] },
  });

  D('cell-phone', {
    etymology: {
      origin: '现代英语常用词「cell-phone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cell-phone', gloss: '手机' },
      suffix: null,
      history: [
        { label: 'cell-phone', text: '现代英语常用词「cell-phone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：手机。' },
      ],
      formationLogic: '核心义：手机。',
      mnemonic: '看到 cell-phone，先说出「手机」。',
      note: '核心义：手机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cell-phone.', chinese: '这一章反复回到同一个点：手机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cell-phone.s1', en: 'Without that cell-phone, the next paragraph is hard to follow.', zh: '没有这个手机，下一段会很难读。', structure: 'cell-phone / 表示 / 手机', grammar: 'noun，围绕「手机」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cell-phone.', right: 'He gave me some advice about the cell-phone.', reason: 'advice 不可数。名词 cell-phone 的单复数按词典词形记。', rule: '先确定 cell-phone 是noun，再套「手机」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cell-phone.q1', senseId: 'cell-phone.s1', errorType: 'meaning', type: '词义选择', prompt: '「cell-phone」在本条的核心意思是：', options: ['手机', '完全相反的意思', '一种古代钱币'], answer: '手机', explain: 'cell-phone：手机。' },
      { id: 'cell-phone.q2', senseId: 'cell-phone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cell-phone?', options: ['手机', 'a kind of ancient coin', 'the past tense of be'], answer: '手机', explain: '对的是「手机」。' },
      { id: 'cell-phone.q3', senseId: 'cell-phone.s1', errorType: 'grammar', type: '词义选择', prompt: 'cell-phone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cell-phone.q4', senseId: 'cell-phone.s1', errorType: 'meaning', type: '词源', prompt: '记 cell-phone 时，哪句更稳妥？', options: ['先锁住「手机」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手机」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手机'] },
  });

  D('cellar', {
    etymology: {
      origin: '现代英语常用词「cellar」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cellar', gloss: '地窖' },
      suffix: null,
      history: [
        { label: 'cellar', text: '现代英语常用词「cellar」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：地窖。' },
      ],
      formationLogic: '核心义：地窖。',
      mnemonic: '看到 cellar，先说出「地窖」。',
      note: '核心义：地窖。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cellar.', chinese: '这一章反复回到同一个点：地窖。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cellar.s1', en: 'Without that cellar, the next paragraph is hard to follow.', zh: '没有这个地窖，下一段会很难读。', structure: 'cellar / 表示 / 地窖', grammar: 'noun，围绕「地窖」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cellar.', right: 'He gave me some advice about the cellar.', reason: 'advice 不可数。名词 cellar 的单复数按词典词形记。', rule: '先确定 cellar 是noun，再套「地窖」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cellar.q1', senseId: 'cellar.s1', errorType: 'meaning', type: '词义选择', prompt: '「cellar」在本条的核心意思是：', options: ['地窖', '完全相反的意思', '一种古代钱币'], answer: '地窖', explain: 'cellar：地窖。' },
      { id: 'cellar.q2', senseId: 'cellar.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cellar?', options: ['地窖', 'a kind of ancient coin', 'the past tense of be'], answer: '地窖', explain: '对的是「地窖」。' },
      { id: 'cellar.q3', senseId: 'cellar.s1', errorType: 'grammar', type: '词义选择', prompt: 'cellar 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cellar.q4', senseId: 'cellar.s1', errorType: 'meaning', type: '词源', prompt: '记 cellar 时，哪句更稳妥？', options: ['先锁住「地窖」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「地窖」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['地窖'] },
  });

  D('cellphone', {
    etymology: {
      origin: '现代英语常用词「cellphone」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cellphone', gloss: '手机' },
      suffix: null,
      history: [
        { label: 'cellphone', text: '现代英语常用词「cellphone」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：手机。' },
      ],
      formationLogic: '核心义：手机。',
      mnemonic: '看到 cellphone，先说出「手机」。',
      note: '核心义：手机。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cellphone.', chinese: '这一章反复回到同一个点：手机。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cellphone.s1', en: 'Without that cellphone, the next paragraph is hard to follow.', zh: '没有这个手机，下一段会很难读。', structure: 'cellphone / 表示 / 手机', grammar: 'noun，围绕「手机」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cellphone.', right: 'He gave me some advice about the cellphone.', reason: 'advice 不可数。名词 cellphone 的单复数按词典词形记。', rule: '先确定 cellphone 是noun，再套「手机」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cellphone.q1', senseId: 'cellphone.s1', errorType: 'meaning', type: '词义选择', prompt: '「cellphone」在本条的核心意思是：', options: ['手机', '完全相反的意思', '一种古代钱币'], answer: '手机', explain: 'cellphone：手机。' },
      { id: 'cellphone.q2', senseId: 'cellphone.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cellphone?', options: ['手机', 'a kind of ancient coin', 'the past tense of be'], answer: '手机', explain: '对的是「手机」。' },
      { id: 'cellphone.q3', senseId: 'cellphone.s1', errorType: 'grammar', type: '词义选择', prompt: 'cellphone 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cellphone.q4', senseId: 'cellphone.s1', errorType: 'meaning', type: '词源', prompt: '记 cellphone 时，哪句更稳妥？', options: ['先锁住「手机」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「手机」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['手机'] },
  });

  D('cells', {
    etymology: {
      origin: '现代英语常用词「cells」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cells', gloss: '细胞' },
      suffix: null,
      history: [
        { label: 'cells', text: '现代英语常用词「cells」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：细胞。' },
      ],
      formationLogic: '核心义：细胞。',
      mnemonic: '看到 cells，先说出「细胞」。',
      note: '核心义：细胞。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cells.', chinese: '这一章反复回到同一个点：细胞。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cells.s1', en: 'Without that cells, the next paragraph is hard to follow.', zh: '没有这个细胞，下一段会很难读。', structure: 'cells / 表示 / 细胞', grammar: 'noun，围绕「细胞」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cells.', right: 'He gave me some advice about the cells.', reason: 'advice 不可数。名词 cells 的单复数按词典词形记。', rule: '先确定 cells 是noun，再套「细胞」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cells.q1', senseId: 'cells.s1', errorType: 'meaning', type: '词义选择', prompt: '「cells」在本条的核心意思是：', options: ['细胞', '完全相反的意思', '一种古代钱币'], answer: '细胞', explain: 'cells：细胞。' },
      { id: 'cells.q2', senseId: 'cells.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cells?', options: ['细胞', 'a kind of ancient coin', 'the past tense of be'], answer: '细胞', explain: '对的是「细胞」。' },
      { id: 'cells.q3', senseId: 'cells.s1', errorType: 'grammar', type: '词义选择', prompt: 'cells 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cells.q4', senseId: 'cells.s1', errorType: 'meaning', type: '词源', prompt: '记 cells 时，哪句更稳妥？', options: ['先锁住「细胞」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「细胞」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['细胞'] },
  });

  D('Celsius', {
    etymology: {
      origin: '现代英语常用词「Celsius」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'Celsius', gloss: '摄氏度（的）' },
      suffix: null,
      history: [
        { label: 'Celsius', text: '现代英语常用词「Celsius」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：摄氏度（的）。' },
      ],
      formationLogic: '核心义：摄氏度（的）。',
      mnemonic: '看到 Celsius，先说出「摄氏度（的）」。',
      note: '核心义：摄氏度（的）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one Celsius.', chinese: '这一章反复回到同一个点：摄氏度（的）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'Celsius.s1', en: 'Without that Celsius, the next paragraph is hard to follow.', zh: '没有这个摄氏度（的），下一段会很难读。', structure: 'Celsius / 表示 / 摄氏度（的）', grammar: 'noun，围绕「摄氏度（的）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the Celsius.', right: 'He gave me some advice about the Celsius.', reason: 'advice 不可数。名词 Celsius 的单复数按词典词形记。', rule: '先确定 Celsius 是noun，再套「摄氏度（的）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'Celsius.q1', senseId: 'Celsius.s1', errorType: 'meaning', type: '词义选择', prompt: '「Celsius」在本条的核心意思是：', options: ['摄氏度（的）', '完全相反的意思', '一种古代钱币'], answer: '摄氏度（的）', explain: 'Celsius：摄氏度（的）。' },
      { id: 'Celsius.q2', senseId: 'Celsius.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches Celsius?', options: ['摄氏度（的）', 'a kind of ancient coin', 'the past tense of be'], answer: '摄氏度（的）', explain: '对的是「摄氏度（的）」。' },
      { id: 'Celsius.q3', senseId: 'Celsius.s1', errorType: 'grammar', type: '词义选择', prompt: 'Celsius 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'Celsius.q4', senseId: 'Celsius.s1', errorType: 'meaning', type: '词源', prompt: '记 Celsius 时，哪句更稳妥？', options: ['先锁住「摄氏度（的）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摄氏度（的）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摄氏度（的）'] },
  });

  D('cement', {
    etymology: {
      origin: '拉丁语 caementum「碎石」。',
      prefix: null,
      root: { text: 'cement', gloss: '水泥' },
      suffix: null,
      history: [
        { label: 'cement', text: '拉丁语 caementum「碎石」。' },
        { label: '现在', text: '核心用法是：水泥。' },
      ],
      formationLogic: '考试认现在的用法：水泥。',
      mnemonic: '看到 cement，先说出「水泥」。',
      note: '考试认现在的用法：水泥。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cement.', chinese: '这一章反复回到同一个点：水泥。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cement.s1', en: 'Without that cement, the next paragraph is hard to follow.', zh: '没有这个水泥，下一段会很难读。', structure: 'cement / 表示 / 水泥', grammar: 'noun，围绕「水泥」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cement.', right: 'He gave me some advice about the cement.', reason: 'advice 不可数。名词 cement 的单复数按词典词形记。', rule: '先确定 cement 是noun，再套「水泥」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cement.q1', senseId: 'cement.s1', errorType: 'meaning', type: '词义选择', prompt: '「cement」在本条的核心意思是：', options: ['水泥', '完全相反的意思', '一种古代钱币'], answer: '水泥', explain: 'cement：水泥。' },
      { id: 'cement.q2', senseId: 'cement.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cement?', options: ['水泥', 'a kind of ancient coin', 'the past tense of be'], answer: '水泥', explain: '对的是「水泥」。' },
      { id: 'cement.q3', senseId: 'cement.s1', errorType: 'grammar', type: '词义选择', prompt: 'cement 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cement.q4', senseId: 'cement.s1', errorType: 'meaning', type: '词源', prompt: '记 cement 时，哪句更稳妥？', options: ['先锁住「水泥」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「水泥」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['水泥'] },
  });

  D('cemetery', {
    etymology: {
      origin: '现代英语常用词「cemetery」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cemetery', gloss: '墓地' },
      suffix: null,
      history: [
        { label: 'cemetery', text: '现代英语常用词「cemetery」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：墓地。' },
      ],
      formationLogic: '核心义：墓地。',
      mnemonic: '看到 cemetery，先说出「墓地」。',
      note: '核心义：墓地。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cemetery.', chinese: '这一章反复回到同一个点：墓地。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cemetery.s1', en: 'Without that cemetery, the next paragraph is hard to follow.', zh: '没有这个墓地，下一段会很难读。', structure: 'cemetery / 表示 / 墓地', grammar: 'noun，围绕「墓地」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cemetery.', right: 'He gave me some advice about the cemetery.', reason: 'advice 不可数。名词 cemetery 的单复数按词典词形记。', rule: '先确定 cemetery 是noun，再套「墓地」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cemetery.q1', senseId: 'cemetery.s1', errorType: 'meaning', type: '词义选择', prompt: '「cemetery」在本条的核心意思是：', options: ['墓地', '完全相反的意思', '一种古代钱币'], answer: '墓地', explain: 'cemetery：墓地。' },
      { id: 'cemetery.q2', senseId: 'cemetery.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cemetery?', options: ['墓地', 'a kind of ancient coin', 'the past tense of be'], answer: '墓地', explain: '对的是「墓地」。' },
      { id: 'cemetery.q3', senseId: 'cemetery.s1', errorType: 'grammar', type: '词义选择', prompt: 'cemetery 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cemetery.q4', senseId: 'cemetery.s1', errorType: 'meaning', type: '词源', prompt: '记 cemetery 时，哪句更稳妥？', options: ['先锁住「墓地」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「墓地」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['墓地'] },
  });

  D('censor', {
    etymology: {
      origin: '英语派生：cens + -or，词性转到「审查（书报影视）」。',
      prefix: null,
      root: { text: 'cens', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'censor', text: '英语派生：cens + -or，词性转到「审查（书报影视）」。' },
        { label: '现在', text: '核心用法是：审查（书报影视）。' },
      ],
      formationLogic: '先认词干 cens，再看词尾。',
      mnemonic: '看到 censor，先说出「审查（书报影视）」。',
      note: '先认词干 cens，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to censor before the office closed.', chinese: '他们同意在办公室关门前做这件事：审查（书报影视）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'censor.s1', en: 'The deadline forced the team to censor that afternoon.', zh: '截止日期逼着小组在那天下午审查（书报影视）。', structure: 'censor / 表示 / 审查（书报影视）', grammar: 'verb，围绕「审查（书报影视）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She censored it yesterday without checking the real past form.', right: 'Check the past form of "censor" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 censor 是verb，再套「审查（书报影视）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'censor.q1', senseId: 'censor.s1', errorType: 'meaning', type: '词义选择', prompt: '「censor」在本条的核心意思是：', options: ['审查（书报影视）', '完全相反的意思', '一种古代钱币'], answer: '审查（书报影视）', explain: 'censor：审查（书报影视）。' },
      { id: 'censor.q2', senseId: 'censor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches censor?', options: ['审查（书报影视）', 'a kind of ancient coin', 'the past tense of be'], answer: '审查（书报影视）', explain: '对的是「审查（书报影视）」。' },
      { id: 'censor.q3', senseId: 'censor.s1', errorType: 'grammar', type: '词义选择', prompt: 'censor 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'censor.q4', senseId: 'censor.s1', errorType: 'meaning', type: '词源', prompt: '记 censor 时，哪句更稳妥？', options: ['先锁住「审查（书报影视）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「审查（书报影视）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['审查（书报影视）'] },
  });

  D('census', {
    etymology: {
      origin: '现代英语常用词「census」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'census', gloss: '人口普查' },
      suffix: null,
      history: [
        { label: 'census', text: '现代英语常用词「census」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：人口普查。' },
      ],
      formationLogic: '核心义：人口普查。',
      mnemonic: '看到 census，先说出「人口普查」。',
      note: '核心义：人口普查。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one census.', chinese: '这一章反复回到同一个点：人口普查。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'census.s1', en: 'Without that census, the next paragraph is hard to follow.', zh: '没有这个人口普查，下一段会很难读。', structure: 'census / 表示 / 人口普查', grammar: 'noun，围绕「人口普查」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the census.', right: 'He gave me some advice about the census.', reason: 'advice 不可数。名词 census 的单复数按词典词形记。', rule: '先确定 census 是noun，再套「人口普查」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'census.q1', senseId: 'census.s1', errorType: 'meaning', type: '词义选择', prompt: '「census」在本条的核心意思是：', options: ['人口普查', '完全相反的意思', '一种古代钱币'], answer: '人口普查', explain: 'census：人口普查。' },
      { id: 'census.q2', senseId: 'census.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches census?', options: ['人口普查', 'a kind of ancient coin', 'the past tense of be'], answer: '人口普查', explain: '对的是「人口普查」。' },
      { id: 'census.q3', senseId: 'census.s1', errorType: 'grammar', type: '词义选择', prompt: 'census 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'census.q4', senseId: 'census.s1', errorType: 'meaning', type: '词源', prompt: '记 census 时，哪句更稳妥？', options: ['先锁住「人口普查」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「人口普查」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['人口普查'] },
  });

  D('cent', {
    etymology: {
      origin: '拉丁语 centum「一百」。百分之一。',
      prefix: null,
      root: { text: 'cent', gloss: '分（货币单位）' },
      suffix: null,
      history: [
        { label: 'cent', text: '拉丁语 centum「一百」。百分之一。' },
        { label: '现在', text: '核心用法是：分（货币单位）。' },
      ],
      formationLogic: '考试认现在的用法：分（货币单位）。',
      mnemonic: '看到 cent，先说出「分（货币单位）」。',
      note: '考试认现在的用法：分（货币单位）。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cent.', chinese: '这一章反复回到同一个点：分（货币单位）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cent.s1', en: 'Without that cent, the next paragraph is hard to follow.', zh: '没有这个分（货币单位），下一段会很难读。', structure: 'cent / 表示 / 分（货币单位）', grammar: 'noun，围绕「分（货币单位）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cent.', right: 'He gave me some advice about the cent.', reason: 'advice 不可数。名词 cent 的单复数按词典词形记。', rule: '先确定 cent 是noun，再套「分（货币单位）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cent.q1', senseId: 'cent.s1', errorType: 'meaning', type: '词义选择', prompt: '「cent」在本条的核心意思是：', options: ['分（货币单位）', '完全相反的意思', '一种古代钱币'], answer: '分（货币单位）', explain: 'cent：分（货币单位）。' },
      { id: 'cent.q2', senseId: 'cent.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cent?', options: ['分（货币单位）', 'a kind of ancient coin', 'the past tense of be'], answer: '分（货币单位）', explain: '对的是「分（货币单位）」。' },
      { id: 'cent.q3', senseId: 'cent.s1', errorType: 'grammar', type: '词义选择', prompt: 'cent 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cent.q4', senseId: 'cent.s1', errorType: 'meaning', type: '词源', prompt: '记 cent 时，哪句更稳妥？', options: ['先锁住「分（货币单位）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分（货币单位）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分（货币单位）'] },
  });

  D('center', {
    etymology: {
      origin: '希腊语 kentron「尖刺、圆心」。美式拼写。',
      prefix: null,
      root: { text: 'center', gloss: '中心' },
      suffix: null,
      history: [
        { label: 'center', text: '希腊语 kentron「尖刺、圆心」。美式拼写。' },
        { label: '现在', text: '核心用法是：中心。' },
      ],
      formationLogic: '考试认现在的用法：中心。',
      mnemonic: '看到 center，先说出「中心」。',
      note: '考试认现在的用法：中心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one center.', chinese: '这一章反复回到同一个点：中心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'center.s1', en: 'Without that center, the next paragraph is hard to follow.', zh: '没有这个中心，下一段会很难读。', structure: 'center / 表示 / 中心', grammar: 'noun，围绕「中心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the center.', right: 'He gave me some advice about the center.', reason: 'advice 不可数。名词 center 的单复数按词典词形记。', rule: '先确定 center 是noun，再套「中心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'center.q1', senseId: 'center.s1', errorType: 'meaning', type: '词义选择', prompt: '「center」在本条的核心意思是：', options: ['中心', '完全相反的意思', '一种古代钱币'], answer: '中心', explain: 'center：中心。' },
      { id: 'center.q2', senseId: 'center.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches center?', options: ['中心', 'a kind of ancient coin', 'the past tense of be'], answer: '中心', explain: '对的是「中心」。' },
      { id: 'center.q3', senseId: 'center.s1', errorType: 'grammar', type: '词义选择', prompt: 'center 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'center.q4', senseId: 'center.s1', errorType: 'meaning', type: '词源', prompt: '记 center 时，哪句更稳妥？', options: ['先锁住「中心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「中心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['中心'] },
  });

  D('centigrade', {
    etymology: {
      origin: '现代英语常用词「centigrade」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'centigrade', gloss: '摄氏的' },
      suffix: null,
      history: [
        { label: 'centigrade', text: '现代英语常用词「centigrade」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：摄氏的。' },
      ],
      formationLogic: '核心义：摄氏的。',
      mnemonic: '看到 centigrade，先说出「摄氏的」。',
      note: '核心义：摄氏的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was centigrade.', chinese: '即使是初读者也能看出，这个结果是摄氏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'centigrade.s1', en: 'They wanted a centigrade answer, not a long speech.', zh: '他们要一个摄氏的的答复，不要长篇发言。', structure: 'centigrade / 表示 / 摄氏的', grammar: 'adjective，围绕「摄氏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are centigrade.', right: 'The news is centigrade.', reason: 'news 作主语时动词用单数。', rule: '先确定 centigrade 是adjective，再套「摄氏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'centigrade.q1', senseId: 'centigrade.s1', errorType: 'meaning', type: '词义选择', prompt: '「centigrade」在本条的核心意思是：', options: ['摄氏的', '完全相反的意思', '一种古代钱币'], answer: '摄氏的', explain: 'centigrade：摄氏的。' },
      { id: 'centigrade.q2', senseId: 'centigrade.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches centigrade?', options: ['摄氏的', 'a kind of ancient coin', 'the past tense of be'], answer: '摄氏的', explain: '对的是「摄氏的」。' },
      { id: 'centigrade.q3', senseId: 'centigrade.s1', errorType: 'grammar', type: '词义选择', prompt: 'centigrade 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'centigrade.q4', senseId: 'centigrade.s1', errorType: 'meaning', type: '词源', prompt: '记 centigrade 时，哪句更稳妥？', options: ['先锁住「摄氏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「摄氏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['摄氏的'] },
  });

  D('centimeter', {
    etymology: {
      origin: '英语派生：centimet + -er，词性转到「厘米」。',
      prefix: null,
      root: { text: 'centimet', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'centimeter', text: '英语派生：centimet + -er，词性转到「厘米」。' },
        { label: '现在', text: '核心用法是：厘米。' },
      ],
      formationLogic: '先认词干 centimet，再看词尾。',
      mnemonic: '看到 centimeter，先说出「厘米」。',
      note: '先认词干 centimet，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one centimeter.', chinese: '这一章反复回到同一个点：厘米。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'centimeter.s1', en: 'Without that centimeter, the next paragraph is hard to follow.', zh: '没有这个厘米，下一段会很难读。', structure: 'centimeter / 表示 / 厘米', grammar: 'noun，围绕「厘米」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the centimeter.', right: 'He gave me some advice about the centimeter.', reason: 'advice 不可数。名词 centimeter 的单复数按词典词形记。', rule: '先确定 centimeter 是noun，再套「厘米」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'centimeter.q1', senseId: 'centimeter.s1', errorType: 'meaning', type: '词义选择', prompt: '「centimeter」在本条的核心意思是：', options: ['厘米', '完全相反的意思', '一种古代钱币'], answer: '厘米', explain: 'centimeter：厘米。' },
      { id: 'centimeter.q2', senseId: 'centimeter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches centimeter?', options: ['厘米', 'a kind of ancient coin', 'the past tense of be'], answer: '厘米', explain: '对的是「厘米」。' },
      { id: 'centimeter.q3', senseId: 'centimeter.s1', errorType: 'grammar', type: '词义选择', prompt: 'centimeter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'centimeter.q4', senseId: 'centimeter.s1', errorType: 'meaning', type: '词源', prompt: '记 centimeter 时，哪句更稳妥？', options: ['先锁住「厘米」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厘米」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厘米'] },
  });

  D('central', {
    etymology: {
      origin: '拉丁语 centralis，与 center 同源。',
      prefix: null,
      root: { text: 'central', gloss: '中心的' },
      suffix: null,
      history: [
        { label: 'central', text: '拉丁语 centralis，与 center 同源。' },
        { label: '现在', text: '核心用法是：中心的。' },
      ],
      formationLogic: '考试认现在的用法：中心的。',
      mnemonic: '看到 central，先说出「中心的」。',
      note: '考试认现在的用法：中心的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was central.', chinese: '即使是初读者也能看出，这个结果是中心的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'central.s1', en: 'They wanted a central answer, not a long speech.', zh: '他们要一个中心的的答复，不要长篇发言。', structure: 'central / 表示 / 中心的', grammar: 'adjective，围绕「中心的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are central.', right: 'The news is central.', reason: 'news 作主语时动词用单数。', rule: '先确定 central 是adjective，再套「中心的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'central.q1', senseId: 'central.s1', errorType: 'meaning', type: '词义选择', prompt: '「central」在本条的核心意思是：', options: ['中心的', '完全相反的意思', '一种古代钱币'], answer: '中心的', explain: 'central：中心的。' },
      { id: 'central.q2', senseId: 'central.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches central?', options: ['中心的', 'a kind of ancient coin', 'the past tense of be'], answer: '中心的', explain: '对的是「中心的」。' },
      { id: 'central.q3', senseId: 'central.s1', errorType: 'grammar', type: '词义选择', prompt: 'central 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'central.q4', senseId: 'central.s1', errorType: 'meaning', type: '词源', prompt: '记 central 时，哪句更稳妥？', options: ['先锁住「中心的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「中心的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['中心的'] },
  });

  D('centre on', {
    etymology: {
      origin: '现代英语固定说法「centre on」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'centre on', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'centre on', text: '现代英语固定说法「centre on」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：以……为中心。' },
      ],
      formationLogic: '核心义：以……为中心。',
      mnemonic: '看到 centre on，先说出「以……为中心」。',
      note: '核心义：以……为中心。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "centre on" and asked the class to keep it as one unit.', chinese: '老师把「centre on」圈出来，让全班把它当成一个整体。它表示以……为中心。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'centre on.s1', en: 'In the margin she wrote "centre on" so nobody would split the phrase.', zh: '她在页边写下「centre on」，免得有人把这个说法拆开。意思是以……为中心。', structure: 'centre on / 表示 / 以……为中心', grammar: 'verb，围绕「以……为中心」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of centre on and lost the point.', right: 'Keep "centre on" together: it means 以……为中心.', reason: '「centre on」要整块理解。', rule: '先确定 centre on 是verb，再套「以……为中心」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'centre on.q1', senseId: 'centre on.s1', errorType: 'meaning', type: '词义选择', prompt: '「centre on」在本条的核心意思是：', options: ['以……为中心', '完全相反的意思', '一种古代钱币'], answer: '以……为中心', explain: 'centre on：以……为中心。' },
      { id: 'centre on.q2', senseId: 'centre on.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches centre on?', options: ['以……为中心', 'a kind of ancient coin', 'the past tense of be'], answer: '以……为中心', explain: '对的是「以……为中心」。' },
      { id: 'centre on.q3', senseId: 'centre on.s1', errorType: 'grammar', type: '词义选择', prompt: 'centre on 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'centre on.q4', senseId: 'centre on.s1', errorType: 'meaning', type: '词源', prompt: '记 centre on 时，哪句更稳妥？', options: ['先锁住「以……为中心」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「以……为中心」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['以……为中心'] },
  });

  D('centrist', {
    etymology: {
      origin: '英语派生：centr + -ist，词性转到「中间派的」。',
      prefix: null,
      root: { text: 'centr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'centrist', text: '英语派生：centr + -ist，词性转到「中间派的」。' },
        { label: '现在', text: '核心用法是：中间派的。' },
      ],
      formationLogic: '先认词干 centr，再看词尾。',
      mnemonic: '看到 centrist，先说出「中间派的」。',
      note: '先认词干 centr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one centrist.', chinese: '这一章反复回到同一个点：中间派的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'centrist.s1', en: 'Without that centrist, the next paragraph is hard to follow.', zh: '没有这个中间派的，下一段会很难读。', structure: 'centrist / 表示 / 中间派的', grammar: 'noun，围绕「中间派的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the centrist.', right: 'He gave me some advice about the centrist.', reason: 'advice 不可数。名词 centrist 的单复数按词典词形记。', rule: '先确定 centrist 是noun，再套「中间派的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'centrist.q1', senseId: 'centrist.s1', errorType: 'meaning', type: '词义选择', prompt: '「centrist」在本条的核心意思是：', options: ['中间派的', '完全相反的意思', '一种古代钱币'], answer: '中间派的', explain: 'centrist：中间派的。' },
      { id: 'centrist.q2', senseId: 'centrist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches centrist?', options: ['中间派的', 'a kind of ancient coin', 'the past tense of be'], answer: '中间派的', explain: '对的是「中间派的」。' },
      { id: 'centrist.q3', senseId: 'centrist.s1', errorType: 'grammar', type: '词义选择', prompt: 'centrist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'centrist.q4', senseId: 'centrist.s1', errorType: 'meaning', type: '词源', prompt: '记 centrist 时，哪句更稳妥？', options: ['先锁住「中间派的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「中间派的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['中间派的'] },
  });

  D('century', {
    etymology: {
      origin: '拉丁语 centuria，centum「一百」。',
      prefix: null,
      root: { text: 'century', gloss: '世纪' },
      suffix: null,
      history: [
        { label: 'century', text: '拉丁语 centuria，centum「一百」。' },
        { label: '现在', text: '核心用法是：世纪。' },
      ],
      formationLogic: '考试认现在的用法：世纪。',
      mnemonic: '看到 century，先说出「世纪」。',
      note: '考试认现在的用法：世纪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one century.', chinese: '这一章反复回到同一个点：世纪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'century.s1', en: 'Without that century, the next paragraph is hard to follow.', zh: '没有这个世纪，下一段会很难读。', structure: 'century / 表示 / 世纪', grammar: 'noun，围绕「世纪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the century.', right: 'He gave me some advice about the century.', reason: 'advice 不可数。名词 century 的单复数按词典词形记。', rule: '先确定 century 是noun，再套「世纪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'century.q1', senseId: 'century.s1', errorType: 'meaning', type: '词义选择', prompt: '「century」在本条的核心意思是：', options: ['世纪', '完全相反的意思', '一种古代钱币'], answer: '世纪', explain: 'century：世纪。' },
      { id: 'century.q2', senseId: 'century.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches century?', options: ['世纪', 'a kind of ancient coin', 'the past tense of be'], answer: '世纪', explain: '对的是「世纪」。' },
      { id: 'century.q3', senseId: 'century.s1', errorType: 'grammar', type: '词义选择', prompt: 'century 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'century.q4', senseId: 'century.s1', errorType: 'meaning', type: '词源', prompt: '记 century 时，哪句更稳妥？', options: ['先锁住「世纪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「世纪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['世纪'] },
  });

  D('ceramic', {
    etymology: {
      origin: '英语派生：ceram + -ic，词性转到「陶瓷制品」。',
      prefix: null,
      root: { text: 'ceram', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ceramic', text: '英语派生：ceram + -ic，词性转到「陶瓷制品」。' },
        { label: '现在', text: '核心用法是：陶瓷制品。' },
      ],
      formationLogic: '先认词干 ceram，再看词尾。',
      mnemonic: '看到 ceramic，先说出「陶瓷制品」。',
      note: '先认词干 ceram，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ceramic.', chinese: '这一章反复回到同一个点：陶瓷制品。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ceramic.s1', en: 'Without that ceramic, the next paragraph is hard to follow.', zh: '没有这个陶瓷制品，下一段会很难读。', structure: 'ceramic / 表示 / 陶瓷制品', grammar: 'noun，围绕「陶瓷制品」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ceramic.', right: 'He gave me some advice about the ceramic.', reason: 'advice 不可数。名词 ceramic 的单复数按词典词形记。', rule: '先确定 ceramic 是noun，再套「陶瓷制品」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ceramic.q1', senseId: 'ceramic.s1', errorType: 'meaning', type: '词义选择', prompt: '「ceramic」在本条的核心意思是：', options: ['陶瓷制品', '完全相反的意思', '一种古代钱币'], answer: '陶瓷制品', explain: 'ceramic：陶瓷制品。' },
      { id: 'ceramic.q2', senseId: 'ceramic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ceramic?', options: ['陶瓷制品', 'a kind of ancient coin', 'the past tense of be'], answer: '陶瓷制品', explain: '对的是「陶瓷制品」。' },
      { id: 'ceramic.q3', senseId: 'ceramic.s1', errorType: 'grammar', type: '词义选择', prompt: 'ceramic 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ceramic.q4', senseId: 'ceramic.s1', errorType: 'meaning', type: '词源', prompt: '记 ceramic 时，哪句更稳妥？', options: ['先锁住「陶瓷制品」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「陶瓷制品」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['陶瓷制品'] },
  });

  D('ceramics', {
    etymology: {
      origin: '现代英语常用词「ceramics」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'ceramics', gloss: '制陶术' },
      suffix: null,
      history: [
        { label: 'ceramics', text: '现代英语常用词「ceramics」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：制陶术。' },
      ],
      formationLogic: '核心义：制陶术。',
      mnemonic: '看到 ceramics，先说出「制陶术」。',
      note: '核心义：制陶术。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ceramics.', chinese: '这一章反复回到同一个点：制陶术。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ceramics.s1', en: 'Without that ceramics, the next paragraph is hard to follow.', zh: '没有这个制陶术，下一段会很难读。', structure: 'ceramics / 表示 / 制陶术', grammar: 'noun，围绕「制陶术」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ceramics.', right: 'He gave me some advice about the ceramics.', reason: 'advice 不可数。名词 ceramics 的单复数按词典词形记。', rule: '先确定 ceramics 是noun，再套「制陶术」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ceramics.q1', senseId: 'ceramics.s1', errorType: 'meaning', type: '词义选择', prompt: '「ceramics」在本条的核心意思是：', options: ['制陶术', '完全相反的意思', '一种古代钱币'], answer: '制陶术', explain: 'ceramics：制陶术。' },
      { id: 'ceramics.q2', senseId: 'ceramics.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ceramics?', options: ['制陶术', 'a kind of ancient coin', 'the past tense of be'], answer: '制陶术', explain: '对的是「制陶术」。' },
      { id: 'ceramics.q3', senseId: 'ceramics.s1', errorType: 'grammar', type: '词义选择', prompt: 'ceramics 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ceramics.q4', senseId: 'ceramics.s1', errorType: 'meaning', type: '词源', prompt: '记 ceramics 时，哪句更稳妥？', options: ['先锁住「制陶术」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「制陶术」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['制陶术'] },
  });

  D('cereal', {
    etymology: {
      origin: '英语派生：cere + -al，词性转到「谷类食物」。',
      prefix: null,
      root: { text: 'cere', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cereal', text: '英语派生：cere + -al，词性转到「谷类食物」。' },
        { label: '现在', text: '核心用法是：谷类食物。' },
      ],
      formationLogic: '先认词干 cere，再看词尾。',
      mnemonic: '看到 cereal，先说出「谷类食物」。',
      note: '先认词干 cere，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cereal.', chinese: '这一章反复回到同一个点：谷类食物。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cereal.s1', en: 'Without that cereal, the next paragraph is hard to follow.', zh: '没有这个谷类食物，下一段会很难读。', structure: 'cereal / 表示 / 谷类食物', grammar: 'noun，围绕「谷类食物」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cereal.', right: 'He gave me some advice about the cereal.', reason: 'advice 不可数。名词 cereal 的单复数按词典词形记。', rule: '先确定 cereal 是noun，再套「谷类食物」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cereal.q1', senseId: 'cereal.s1', errorType: 'meaning', type: '词义选择', prompt: '「cereal」在本条的核心意思是：', options: ['谷类食物', '完全相反的意思', '一种古代钱币'], answer: '谷类食物', explain: 'cereal：谷类食物。' },
      { id: 'cereal.q2', senseId: 'cereal.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cereal?', options: ['谷类食物', 'a kind of ancient coin', 'the past tense of be'], answer: '谷类食物', explain: '对的是「谷类食物」。' },
      { id: 'cereal.q3', senseId: 'cereal.s1', errorType: 'grammar', type: '词义选择', prompt: 'cereal 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cereal.q4', senseId: 'cereal.s1', errorType: 'meaning', type: '词源', prompt: '记 cereal 时，哪句更稳妥？', options: ['先锁住「谷类食物」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「谷类食物」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['谷类食物'] },
  });

  D('cerebral', {
    etymology: {
      origin: '英语派生：cerebr + -al，词性转到「大脑的」。',
      prefix: null,
      root: { text: 'cerebr', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cerebral', text: '英语派生：cerebr + -al，词性转到「大脑的」。' },
        { label: '现在', text: '核心用法是：大脑的。' },
      ],
      formationLogic: '先认词干 cerebr，再看词尾。',
      mnemonic: '看到 cerebral，先说出「大脑的」。',
      note: '先认词干 cerebr，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cerebral.', chinese: '即使是初读者也能看出，这个结果是大脑的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cerebral.s1', en: 'They wanted a cerebral answer, not a long speech.', zh: '他们要一个大脑的的答复，不要长篇发言。', structure: 'cerebral / 表示 / 大脑的', grammar: 'adjective，围绕「大脑的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cerebral.', right: 'The news is cerebral.', reason: 'news 作主语时动词用单数。', rule: '先确定 cerebral 是adjective，再套「大脑的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cerebral.q1', senseId: 'cerebral.s1', errorType: 'meaning', type: '词义选择', prompt: '「cerebral」在本条的核心意思是：', options: ['大脑的', '完全相反的意思', '一种古代钱币'], answer: '大脑的', explain: 'cerebral：大脑的。' },
      { id: 'cerebral.q2', senseId: 'cerebral.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cerebral?', options: ['大脑的', 'a kind of ancient coin', 'the past tense of be'], answer: '大脑的', explain: '对的是「大脑的」。' },
      { id: 'cerebral.q3', senseId: 'cerebral.s1', errorType: 'grammar', type: '词义选择', prompt: 'cerebral 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cerebral.q4', senseId: 'cerebral.s1', errorType: 'meaning', type: '词源', prompt: '记 cerebral 时，哪句更稳妥？', options: ['先锁住「大脑的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「大脑的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['大脑的'] },
  });

  D('ceremonial', {
    etymology: {
      origin: '英语派生：ceremoni + -al，词性转到「仪式的」。',
      prefix: null,
      root: { text: 'ceremoni', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'ceremonial', text: '英语派生：ceremoni + -al，词性转到「仪式的」。' },
        { label: '现在', text: '核心用法是：仪式的。' },
      ],
      formationLogic: '先认词干 ceremoni，再看词尾。',
      mnemonic: '看到 ceremonial，先说出「仪式的」。',
      note: '先认词干 ceremoni，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was ceremonial.', chinese: '即使是初读者也能看出，这个结果是仪式的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ceremonial.s1', en: 'They wanted a ceremonial answer, not a long speech.', zh: '他们要一个仪式的的答复，不要长篇发言。', structure: 'ceremonial / 表示 / 仪式的', grammar: 'adjective，围绕「仪式的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are ceremonial.', right: 'The news is ceremonial.', reason: 'news 作主语时动词用单数。', rule: '先确定 ceremonial 是adjective，再套「仪式的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ceremonial.q1', senseId: 'ceremonial.s1', errorType: 'meaning', type: '词义选择', prompt: '「ceremonial」在本条的核心意思是：', options: ['仪式的', '完全相反的意思', '一种古代钱币'], answer: '仪式的', explain: 'ceremonial：仪式的。' },
      { id: 'ceremonial.q2', senseId: 'ceremonial.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ceremonial?', options: ['仪式的', 'a kind of ancient coin', 'the past tense of be'], answer: '仪式的', explain: '对的是「仪式的」。' },
      { id: 'ceremonial.q3', senseId: 'ceremonial.s1', errorType: 'grammar', type: '词义选择', prompt: 'ceremonial 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'ceremonial.q4', senseId: 'ceremonial.s1', errorType: 'meaning', type: '词源', prompt: '记 ceremonial 时，哪句更稳妥？', options: ['先锁住「仪式的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「仪式的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['仪式的'] },
  });

  D('ceremony', {
    etymology: {
      origin: '拉丁语 caerimonia「宗教礼仪」。',
      prefix: null,
      root: { text: 'ceremony', gloss: '典礼' },
      suffix: null,
      history: [
        { label: 'ceremony', text: '拉丁语 caerimonia「宗教礼仪」。' },
        { label: '现在', text: '核心用法是：典礼。' },
      ],
      formationLogic: '考试认现在的用法：典礼。',
      mnemonic: '看到 ceremony，先说出「典礼」。',
      note: '考试认现在的用法：典礼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one ceremony.', chinese: '这一章反复回到同一个点：典礼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'ceremony.s1', en: 'Without that ceremony, the next paragraph is hard to follow.', zh: '没有这个典礼，下一段会很难读。', structure: 'ceremony / 表示 / 典礼', grammar: 'noun，围绕「典礼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the ceremony.', right: 'He gave me some advice about the ceremony.', reason: 'advice 不可数。名词 ceremony 的单复数按词典词形记。', rule: '先确定 ceremony 是noun，再套「典礼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'ceremony.q1', senseId: 'ceremony.s1', errorType: 'meaning', type: '词义选择', prompt: '「ceremony」在本条的核心意思是：', options: ['典礼', '完全相反的意思', '一种古代钱币'], answer: '典礼', explain: 'ceremony：典礼。' },
      { id: 'ceremony.q2', senseId: 'ceremony.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches ceremony?', options: ['典礼', 'a kind of ancient coin', 'the past tense of be'], answer: '典礼', explain: '对的是「典礼」。' },
      { id: 'ceremony.q3', senseId: 'ceremony.s1', errorType: 'grammar', type: '词义选择', prompt: 'ceremony 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'ceremony.q4', senseId: 'ceremony.s1', errorType: 'meaning', type: '词源', prompt: '记 ceremony 时，哪句更稳妥？', options: ['先锁住「典礼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「典礼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['典礼'] },
  });

  D('certain', {
    etymology: {
      origin: '拉丁语 certus「已决定的、确定的」。',
      prefix: null,
      root: { text: 'certain', gloss: '确定的' },
      suffix: null,
      history: [
        { label: 'certain', text: '拉丁语 certus「已决定的、确定的」。' },
        { label: '现在', text: '核心用法是：确定的。' },
      ],
      formationLogic: '考试认现在的用法：确定的。',
      mnemonic: '看到 certain，先说出「确定的」。',
      note: '考试认现在的用法：确定的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was certain.', chinese: '即使是初读者也能看出，这个结果是确定的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'certain.s1', en: 'They wanted a certain answer, not a long speech.', zh: '他们要一个确定的的答复，不要长篇发言。', structure: 'certain / 表示 / 确定的', grammar: 'adjective，围绕「确定的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are certain.', right: 'The news is certain.', reason: 'news 作主语时动词用单数。', rule: '先确定 certain 是adjective，再套「确定的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'certain.q1', senseId: 'certain.s1', errorType: 'meaning', type: '词义选择', prompt: '「certain」在本条的核心意思是：', options: ['确定的', '完全相反的意思', '一种古代钱币'], answer: '确定的', explain: 'certain：确定的。' },
      { id: 'certain.q2', senseId: 'certain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches certain?', options: ['确定的', 'a kind of ancient coin', 'the past tense of be'], answer: '确定的', explain: '对的是「确定的」。' },
      { id: 'certain.q3', senseId: 'certain.s1', errorType: 'grammar', type: '词义选择', prompt: 'certain 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'certain.q4', senseId: 'certain.s1', errorType: 'meaning', type: '词源', prompt: '记 certain 时，哪句更稳妥？', options: ['先锁住「确定的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「确定的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['确定的'] },
  });

  D('certainly', {
    etymology: {
      origin: '英语派生：certain + -ly，词性转到「当然」。',
      prefix: null,
      root: { text: 'certain', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'certainly', text: '英语派生：certain + -ly，词性转到「当然」。' },
        { label: '现在', text: '核心用法是：当然。' },
      ],
      formationLogic: '先认词干 certain，再看词尾。',
      mnemonic: '看到 certainly，先说出「当然」。',
      note: '先认词干 certain，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'She explained the rule certainly, and the class followed.', chinese: '她把规则讲清楚了（当然），全班跟上了。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'certainly.s1', en: 'He nodded certainly and returned to the notes.', zh: '他当然地点了点头，又回去看笔记。', structure: 'certainly / 表示 / 当然', grammar: 'adverb，围绕「当然」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She spoke very certainlyly in the meeting.', right: 'She spoke certainly in the meeting.', reason: 'certainly 已经是副词，不要再加 -ly。', rule: '先确定 certainly 是adverb，再套「当然」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'certainly.q1', senseId: 'certainly.s1', errorType: 'meaning', type: '词义选择', prompt: '「certainly」在本条的核心意思是：', options: ['当然', '完全相反的意思', '一种古代钱币'], answer: '当然', explain: 'certainly：当然。' },
      { id: 'certainly.q2', senseId: 'certainly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches certainly?', options: ['当然', 'a kind of ancient coin', 'the past tense of be'], answer: '当然', explain: '对的是「当然」。' },
      { id: 'certainly.q3', senseId: 'certainly.s1', errorType: 'grammar', type: '词义选择', prompt: 'certainly 的词性（本条）更接近：', options: ['adverb', '只能作感叹词', '只能作数词'], answer: 'adverb', explain: '本条按 adverb 来用。' },
      { id: 'certainly.q4', senseId: 'certainly.s1', errorType: 'meaning', type: '词源', prompt: '记 certainly 时，哪句更稳妥？', options: ['先锁住「当然」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「当然」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['当然'] },
  });

  D('certainty', {
    etymology: {
      origin: '现代英语常用词「certainty」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'certainty', gloss: '必然' },
      suffix: null,
      history: [
        { label: 'certainty', text: '现代英语常用词「certainty」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：必然。' },
      ],
      formationLogic: '核心义：必然。',
      mnemonic: '看到 certainty，先说出「必然」。',
      note: '核心义：必然。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one certainty.', chinese: '这一章反复回到同一个点：必然。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'certainty.s1', en: 'Without that certainty, the next paragraph is hard to follow.', zh: '没有这个必然，下一段会很难读。', structure: 'certainty / 表示 / 必然', grammar: 'noun，围绕「必然」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the certainty.', right: 'He gave me some advice about the certainty.', reason: 'advice 不可数。名词 certainty 的单复数按词典词形记。', rule: '先确定 certainty 是noun，再套「必然」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'certainty.q1', senseId: 'certainty.s1', errorType: 'meaning', type: '词义选择', prompt: '「certainty」在本条的核心意思是：', options: ['必然', '完全相反的意思', '一种古代钱币'], answer: '必然', explain: 'certainty：必然。' },
      { id: 'certainty.q2', senseId: 'certainty.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches certainty?', options: ['必然', 'a kind of ancient coin', 'the past tense of be'], answer: '必然', explain: '对的是「必然」。' },
      { id: 'certainty.q3', senseId: 'certainty.s1', errorType: 'grammar', type: '词义选择', prompt: 'certainty 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'certainty.q4', senseId: 'certainty.s1', errorType: 'meaning', type: '词源', prompt: '记 certainty 时，哪句更稳妥？', options: ['先锁住「必然」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「必然」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['必然'] },
  });

  D('certificate', {
    etymology: {
      origin: '现代英语常用词「certificate」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'certificate', gloss: '证书' },
      suffix: null,
      history: [
        { label: 'certificate', text: '现代英语常用词「certificate」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：证书。' },
      ],
      formationLogic: '核心义：证书。',
      mnemonic: '看到 certificate，先说出「证书」。',
      note: '核心义：证书。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one certificate.', chinese: '这一章反复回到同一个点：证书。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'certificate.s1', en: 'Without that certificate, the next paragraph is hard to follow.', zh: '没有这个证书，下一段会很难读。', structure: 'certificate / 表示 / 证书', grammar: 'noun，围绕「证书」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the certificate.', right: 'He gave me some advice about the certificate.', reason: 'advice 不可数。名词 certificate 的单复数按词典词形记。', rule: '先确定 certificate 是noun，再套「证书」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'certificate.q1', senseId: 'certificate.s1', errorType: 'meaning', type: '词义选择', prompt: '「certificate」在本条的核心意思是：', options: ['证书', '完全相反的意思', '一种古代钱币'], answer: '证书', explain: 'certificate：证书。' },
      { id: 'certificate.q2', senseId: 'certificate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches certificate?', options: ['证书', 'a kind of ancient coin', 'the past tense of be'], answer: '证书', explain: '对的是「证书」。' },
      { id: 'certificate.q3', senseId: 'certificate.s1', errorType: 'grammar', type: '词义选择', prompt: 'certificate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'certificate.q4', senseId: 'certificate.s1', errorType: 'meaning', type: '词源', prompt: '记 certificate 时，哪句更稳妥？', options: ['先锁住「证书」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「证书」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['证书'] },
  });

  D('certify', {
    etymology: {
      origin: '现代英语常用词「certify」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'certify', gloss: '证明' },
      suffix: null,
      history: [
        { label: 'certify', text: '现代英语常用词「certify」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：证明。' },
      ],
      formationLogic: '核心义：证明。',
      mnemonic: '看到 certify，先说出「证明」。',
      note: '核心义：证明。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to certify before the office closed.', chinese: '他们同意在办公室关门前做这件事：证明。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'certify.s1', en: 'The deadline forced the team to certify that afternoon.', zh: '截止日期逼着小组在那天下午证明。', structure: 'certify / 表示 / 证明', grammar: 'verb，围绕「证明」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She certifyed it yesterday without checking the real past form.', right: 'Check the past form of "certify" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 certify 是verb，再套「证明」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'certify.q1', senseId: 'certify.s1', errorType: 'meaning', type: '词义选择', prompt: '「certify」在本条的核心意思是：', options: ['证明', '完全相反的意思', '一种古代钱币'], answer: '证明', explain: 'certify：证明。' },
      { id: 'certify.q2', senseId: 'certify.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches certify?', options: ['证明', 'a kind of ancient coin', 'the past tense of be'], answer: '证明', explain: '对的是「证明」。' },
      { id: 'certify.q3', senseId: 'certify.s1', errorType: 'grammar', type: '词义选择', prompt: 'certify 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'certify.q4', senseId: 'certify.s1', errorType: 'meaning', type: '词源', prompt: '记 certify 时，哪句更稳妥？', options: ['先锁住「证明」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「证明」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['证明'] },
  });

  D('cetacean', {
    etymology: {
      origin: '现代英语常用词「cetacean」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cetacean', gloss: '鲸目的' },
      suffix: null,
      history: [
        { label: 'cetacean', text: '现代英语常用词「cetacean」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鲸目的。' },
      ],
      formationLogic: '核心义：鲸目的。',
      mnemonic: '看到 cetacean，先说出「鲸目的」。',
      note: '核心义：鲸目的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cetacean.', chinese: '这一章反复回到同一个点：鲸目的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cetacean.s1', en: 'Without that cetacean, the next paragraph is hard to follow.', zh: '没有这个鲸目的，下一段会很难读。', structure: 'cetacean / 表示 / 鲸目的', grammar: 'noun，围绕「鲸目的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cetacean.', right: 'He gave me some advice about the cetacean.', reason: 'advice 不可数。名词 cetacean 的单复数按词典词形记。', rule: '先确定 cetacean 是noun，再套「鲸目的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cetacean.q1', senseId: 'cetacean.s1', errorType: 'meaning', type: '词义选择', prompt: '「cetacean」在本条的核心意思是：', options: ['鲸目的', '完全相反的意思', '一种古代钱币'], answer: '鲸目的', explain: 'cetacean：鲸目的。' },
      { id: 'cetacean.q2', senseId: 'cetacean.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cetacean?', options: ['鲸目的', 'a kind of ancient coin', 'the past tense of be'], answer: '鲸目的', explain: '对的是「鲸目的」。' },
      { id: 'cetacean.q3', senseId: 'cetacean.s1', errorType: 'grammar', type: '词义选择', prompt: 'cetacean 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cetacean.q4', senseId: 'cetacean.s1', errorType: 'meaning', type: '词源', prompt: '记 cetacean 时，哪句更稳妥？', options: ['先锁住「鲸目的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鲸目的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鲸目的'] },
  });

  D('chafe', {
    etymology: {
      origin: '现代英语常用词「chafe」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chafe', gloss: '擦伤' },
      suffix: null,
      history: [
        { label: 'chafe', text: '现代英语常用词「chafe」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：擦伤。' },
      ],
      formationLogic: '核心义：擦伤。',
      mnemonic: '看到 chafe，先说出「擦伤」。',
      note: '核心义：擦伤。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chafe before the office closed.', chinese: '他们同意在办公室关门前做这件事：擦伤。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chafe.s1', en: 'The deadline forced the team to chafe that afternoon.', zh: '截止日期逼着小组在那天下午擦伤。', structure: 'chafe / 表示 / 擦伤', grammar: 'verb，围绕「擦伤」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chafeed it yesterday without checking the real past form.', right: 'Check the past form of "chafe" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chafe 是verb，再套「擦伤」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chafe.q1', senseId: 'chafe.s1', errorType: 'meaning', type: '词义选择', prompt: '「chafe」在本条的核心意思是：', options: ['擦伤', '完全相反的意思', '一种古代钱币'], answer: '擦伤', explain: 'chafe：擦伤。' },
      { id: 'chafe.q2', senseId: 'chafe.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chafe?', options: ['擦伤', 'a kind of ancient coin', 'the past tense of be'], answer: '擦伤', explain: '对的是「擦伤」。' },
      { id: 'chafe.q3', senseId: 'chafe.s1', errorType: 'grammar', type: '词义选择', prompt: 'chafe 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chafe.q4', senseId: 'chafe.s1', errorType: 'meaning', type: '词源', prompt: '记 chafe 时，哪句更稳妥？', options: ['先锁住「擦伤」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「擦伤」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['擦伤'] },
  });

  D('chain', {
    etymology: {
      origin: '拉丁语 catena。',
      prefix: null,
      root: { text: 'chain', gloss: '链子' },
      suffix: null,
      history: [
        { label: 'chain', text: '拉丁语 catena。' },
        { label: '现在', text: '核心用法是：链子。' },
      ],
      formationLogic: '考试认现在的用法：链子。',
      mnemonic: '看到 chain，先说出「链子」。',
      note: '考试认现在的用法：链子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chain.', chinese: '这一章反复回到同一个点：链子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chain.s1', en: 'Without that chain, the next paragraph is hard to follow.', zh: '没有这个链子，下一段会很难读。', structure: 'chain / 表示 / 链子', grammar: 'noun，围绕「链子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chain.', right: 'He gave me some advice about the chain.', reason: 'advice 不可数。名词 chain 的单复数按词典词形记。', rule: '先确定 chain 是noun，再套「链子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chain.q1', senseId: 'chain.s1', errorType: 'meaning', type: '词义选择', prompt: '「chain」在本条的核心意思是：', options: ['链子', '完全相反的意思', '一种古代钱币'], answer: '链子', explain: 'chain：链子。' },
      { id: 'chain.q2', senseId: 'chain.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chain?', options: ['链子', 'a kind of ancient coin', 'the past tense of be'], answer: '链子', explain: '对的是「链子」。' },
      { id: 'chain.q3', senseId: 'chain.s1', errorType: 'grammar', type: '词义选择', prompt: 'chain 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chain.q4', senseId: 'chain.s1', errorType: 'meaning', type: '词源', prompt: '记 chain 时，哪句更稳妥？', options: ['先锁住「链子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「链子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['链子'] },
  });

  D('chair', {
    etymology: {
      origin: '希腊语 kathedra「座位」，经法语。',
      prefix: null,
      root: { text: 'chair', gloss: '椅子' },
      suffix: null,
      history: [
        { label: 'chair', text: '希腊语 kathedra「座位」，经法语。' },
        { label: '现在', text: '核心用法是：椅子。' },
      ],
      formationLogic: '考试认现在的用法：椅子。',
      mnemonic: '看到 chair，先说出「椅子」。',
      note: '考试认现在的用法：椅子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chair.', chinese: '这一章反复回到同一个点：椅子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chair.s1', en: 'Without that chair, the next paragraph is hard to follow.', zh: '没有这个椅子，下一段会很难读。', structure: 'chair / 表示 / 椅子', grammar: 'noun，围绕「椅子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chair.', right: 'He gave me some advice about the chair.', reason: 'advice 不可数。名词 chair 的单复数按词典词形记。', rule: '先确定 chair 是noun，再套「椅子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chair.q1', senseId: 'chair.s1', errorType: 'meaning', type: '词义选择', prompt: '「chair」在本条的核心意思是：', options: ['椅子', '完全相反的意思', '一种古代钱币'], answer: '椅子', explain: 'chair：椅子。' },
      { id: 'chair.q2', senseId: 'chair.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chair?', options: ['椅子', 'a kind of ancient coin', 'the past tense of be'], answer: '椅子', explain: '对的是「椅子」。' },
      { id: 'chair.q3', senseId: 'chair.s1', errorType: 'grammar', type: '词义选择', prompt: 'chair 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chair.q4', senseId: 'chair.s1', errorType: 'meaning', type: '词源', prompt: '记 chair 时，哪句更稳妥？', options: ['先锁住「椅子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「椅子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['椅子'] },
  });

  D('chairman', {
    etymology: {
      origin: 'chair + man。坐主位的人。',
      prefix: null,
      root: { text: 'chairman', gloss: '主席' },
      suffix: null,
      history: [
        { label: 'chairman', text: 'chair + man。坐主位的人。' },
        { label: '现在', text: '核心用法是：主席。' },
      ],
      formationLogic: '考试认现在的用法：主席。',
      mnemonic: '看到 chairman，先说出「主席」。',
      note: '考试认现在的用法：主席。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chairman.', chinese: '这一章反复回到同一个点：主席。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chairman.s1', en: 'Without that chairman, the next paragraph is hard to follow.', zh: '没有这个主席，下一段会很难读。', structure: 'chairman / 表示 / 主席', grammar: 'noun，围绕「主席」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chairman.', right: 'He gave me some advice about the chairman.', reason: 'advice 不可数。名词 chairman 的单复数按词典词形记。', rule: '先确定 chairman 是noun，再套「主席」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chairman.q1', senseId: 'chairman.s1', errorType: 'meaning', type: '词义选择', prompt: '「chairman」在本条的核心意思是：', options: ['主席', '完全相反的意思', '一种古代钱币'], answer: '主席', explain: 'chairman：主席。' },
      { id: 'chairman.q2', senseId: 'chairman.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chairman?', options: ['主席', 'a kind of ancient coin', 'the past tense of be'], answer: '主席', explain: '对的是「主席」。' },
      { id: 'chairman.q3', senseId: 'chairman.s1', errorType: 'grammar', type: '词义选择', prompt: 'chairman 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chairman.q4', senseId: 'chairman.s1', errorType: 'meaning', type: '词源', prompt: '记 chairman 时，哪句更稳妥？', options: ['先锁住「主席」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「主席」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['主席'] },
  });

  D('chalk', {
    etymology: {
      origin: '现代英语常用词「chalk」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chalk', gloss: '粉笔' },
      suffix: null,
      history: [
        { label: 'chalk', text: '现代英语常用词「chalk」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：粉笔。' },
      ],
      formationLogic: '核心义：粉笔。',
      mnemonic: '看到 chalk，先说出「粉笔」。',
      note: '核心义：粉笔。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chalk.', chinese: '这一章反复回到同一个点：粉笔。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chalk.s1', en: 'Without that chalk, the next paragraph is hard to follow.', zh: '没有这个粉笔，下一段会很难读。', structure: 'chalk / 表示 / 粉笔', grammar: 'noun，围绕「粉笔」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chalk.', right: 'He gave me some advice about the chalk.', reason: 'advice 不可数。名词 chalk 的单复数按词典词形记。', rule: '先确定 chalk 是noun，再套「粉笔」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chalk.q1', senseId: 'chalk.s1', errorType: 'meaning', type: '词义选择', prompt: '「chalk」在本条的核心意思是：', options: ['粉笔', '完全相反的意思', '一种古代钱币'], answer: '粉笔', explain: 'chalk：粉笔。' },
      { id: 'chalk.q2', senseId: 'chalk.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chalk?', options: ['粉笔', 'a kind of ancient coin', 'the past tense of be'], answer: '粉笔', explain: '对的是「粉笔」。' },
      { id: 'chalk.q3', senseId: 'chalk.s1', errorType: 'grammar', type: '词义选择', prompt: 'chalk 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chalk.q4', senseId: 'chalk.s1', errorType: 'meaning', type: '词源', prompt: '记 chalk 时，哪句更稳妥？', options: ['先锁住「粉笔」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「粉笔」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['粉笔'] },
  });

  D('challenge', {
    etymology: {
      origin: '拉丁语 calumnia 一系，经法语，原有「指责」，后指挑战。',
      prefix: null,
      root: { text: 'challenge', gloss: '挑战' },
      suffix: null,
      history: [
        { label: 'challenge', text: '拉丁语 calumnia 一系，经法语，原有「指责」，后指挑战。' },
        { label: '现在', text: '核心用法是：挑战。' },
      ],
      formationLogic: '考试认现在的用法：挑战。',
      mnemonic: '看到 challenge，先说出「挑战」。',
      note: '考试认现在的用法：挑战。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one challenge.', chinese: '这一章反复回到同一个点：挑战。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'challenge.s1', en: 'Without that challenge, the next paragraph is hard to follow.', zh: '没有这个挑战，下一段会很难读。', structure: 'challenge / 表示 / 挑战', grammar: 'noun，围绕「挑战」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the challenge.', right: 'He gave me some advice about the challenge.', reason: 'advice 不可数。名词 challenge 的单复数按词典词形记。', rule: '先确定 challenge 是noun，再套「挑战」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'challenge.q1', senseId: 'challenge.s1', errorType: 'meaning', type: '词义选择', prompt: '「challenge」在本条的核心意思是：', options: ['挑战', '完全相反的意思', '一种古代钱币'], answer: '挑战', explain: 'challenge：挑战。' },
      { id: 'challenge.q2', senseId: 'challenge.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches challenge?', options: ['挑战', 'a kind of ancient coin', 'the past tense of be'], answer: '挑战', explain: '对的是「挑战」。' },
      { id: 'challenge.q3', senseId: 'challenge.s1', errorType: 'grammar', type: '词义选择', prompt: 'challenge 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'challenge.q4', senseId: 'challenge.s1', errorType: 'meaning', type: '词源', prompt: '记 challenge 时，哪句更稳妥？', options: ['先锁住「挑战」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挑战」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挑战'] },
  });

  D('chamber', {
    etymology: {
      origin: '英语派生：chamb + -er，词性转到「会议厅」。',
      prefix: null,
      root: { text: 'chamb', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chamber', text: '英语派生：chamb + -er，词性转到「会议厅」。' },
        { label: '现在', text: '核心用法是：会议厅。' },
      ],
      formationLogic: '先认词干 chamb，再看词尾。',
      mnemonic: '看到 chamber，先说出「会议厅」。',
      note: '先认词干 chamb，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chamber.', chinese: '这一章反复回到同一个点：会议厅。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chamber.s1', en: 'Without that chamber, the next paragraph is hard to follow.', zh: '没有这个会议厅，下一段会很难读。', structure: 'chamber / 表示 / 会议厅', grammar: 'noun，围绕「会议厅」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chamber.', right: 'He gave me some advice about the chamber.', reason: 'advice 不可数。名词 chamber 的单复数按词典词形记。', rule: '先确定 chamber 是noun，再套「会议厅」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chamber.q1', senseId: 'chamber.s1', errorType: 'meaning', type: '词义选择', prompt: '「chamber」在本条的核心意思是：', options: ['会议厅', '完全相反的意思', '一种古代钱币'], answer: '会议厅', explain: 'chamber：会议厅。' },
      { id: 'chamber.q2', senseId: 'chamber.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chamber?', options: ['会议厅', 'a kind of ancient coin', 'the past tense of be'], answer: '会议厅', explain: '对的是「会议厅」。' },
      { id: 'chamber.q3', senseId: 'chamber.s1', errorType: 'grammar', type: '词义选择', prompt: 'chamber 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chamber.q4', senseId: 'chamber.s1', errorType: 'meaning', type: '词源', prompt: '记 chamber 时，哪句更稳妥？', options: ['先锁住「会议厅」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「会议厅」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['会议厅'] },
  });

  D('champagne', {
    etymology: {
      origin: '现代英语常用词「champagne」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'champagne', gloss: '香槟酒' },
      suffix: null,
      history: [
        { label: 'champagne', text: '现代英语常用词「champagne」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：香槟酒。' },
      ],
      formationLogic: '核心义：香槟酒。',
      mnemonic: '看到 champagne，先说出「香槟酒」。',
      note: '核心义：香槟酒。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one champagne.', chinese: '这一章反复回到同一个点：香槟酒。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'champagne.s1', en: 'Without that champagne, the next paragraph is hard to follow.', zh: '没有这个香槟酒，下一段会很难读。', structure: 'champagne / 表示 / 香槟酒', grammar: 'noun，围绕「香槟酒」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the champagne.', right: 'He gave me some advice about the champagne.', reason: 'advice 不可数。名词 champagne 的单复数按词典词形记。', rule: '先确定 champagne 是noun，再套「香槟酒」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'champagne.q1', senseId: 'champagne.s1', errorType: 'meaning', type: '词义选择', prompt: '「champagne」在本条的核心意思是：', options: ['香槟酒', '完全相反的意思', '一种古代钱币'], answer: '香槟酒', explain: 'champagne：香槟酒。' },
      { id: 'champagne.q2', senseId: 'champagne.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches champagne?', options: ['香槟酒', 'a kind of ancient coin', 'the past tense of be'], answer: '香槟酒', explain: '对的是「香槟酒」。' },
      { id: 'champagne.q3', senseId: 'champagne.s1', errorType: 'grammar', type: '词义选择', prompt: 'champagne 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'champagne.q4', senseId: 'champagne.s1', errorType: 'meaning', type: '词源', prompt: '记 champagne 时，哪句更稳妥？', options: ['先锁住「香槟酒」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「香槟酒」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['香槟酒'] },
  });

  D('champion', {
    etymology: {
      origin: '晚期拉丁语 campio「战场上的人」。',
      prefix: null,
      root: { text: 'champion', gloss: '冠军' },
      suffix: null,
      history: [
        { label: 'champion', text: '晚期拉丁语 campio「战场上的人」。' },
        { label: '现在', text: '核心用法是：冠军。' },
      ],
      formationLogic: '考试认现在的用法：冠军。',
      mnemonic: '看到 champion，先说出「冠军」。',
      note: '考试认现在的用法：冠军。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one champion.', chinese: '这一章反复回到同一个点：冠军。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'champion.s1', en: 'Without that champion, the next paragraph is hard to follow.', zh: '没有这个冠军，下一段会很难读。', structure: 'champion / 表示 / 冠军', grammar: 'noun，围绕「冠军」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the champion.', right: 'He gave me some advice about the champion.', reason: 'advice 不可数。名词 champion 的单复数按词典词形记。', rule: '先确定 champion 是noun，再套「冠军」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'champion.q1', senseId: 'champion.s1', errorType: 'meaning', type: '词义选择', prompt: '「champion」在本条的核心意思是：', options: ['冠军', '完全相反的意思', '一种古代钱币'], answer: '冠军', explain: 'champion：冠军。' },
      { id: 'champion.q2', senseId: 'champion.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches champion?', options: ['冠军', 'a kind of ancient coin', 'the past tense of be'], answer: '冠军', explain: '对的是「冠军」。' },
      { id: 'champion.q3', senseId: 'champion.s1', errorType: 'grammar', type: '词义选择', prompt: 'champion 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'champion.q4', senseId: 'champion.s1', errorType: 'meaning', type: '词源', prompt: '记 champion 时，哪句更稳妥？', options: ['先锁住「冠军」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冠军」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冠军'] },
  });

  D('championship', {
    etymology: {
      origin: '现代英语常用词「championship」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'championship', gloss: '冠军称号' },
      suffix: null,
      history: [
        { label: 'championship', text: '现代英语常用词「championship」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：冠军称号。' },
      ],
      formationLogic: '核心义：冠军称号。',
      mnemonic: '看到 championship，先说出「冠军称号」。',
      note: '核心义：冠军称号。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one championship.', chinese: '这一章反复回到同一个点：冠军称号。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'championship.s1', en: 'Without that championship, the next paragraph is hard to follow.', zh: '没有这个冠军称号，下一段会很难读。', structure: 'championship / 表示 / 冠军称号', grammar: 'noun，围绕「冠军称号」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the championship.', right: 'He gave me some advice about the championship.', reason: 'advice 不可数。名词 championship 的单复数按词典词形记。', rule: '先确定 championship 是noun，再套「冠军称号」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'championship.q1', senseId: 'championship.s1', errorType: 'meaning', type: '词义选择', prompt: '「championship」在本条的核心意思是：', options: ['冠军称号', '完全相反的意思', '一种古代钱币'], answer: '冠军称号', explain: 'championship：冠军称号。' },
      { id: 'championship.q2', senseId: 'championship.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches championship?', options: ['冠军称号', 'a kind of ancient coin', 'the past tense of be'], answer: '冠军称号', explain: '对的是「冠军称号」。' },
      { id: 'championship.q3', senseId: 'championship.s1', errorType: 'grammar', type: '词义选择', prompt: 'championship 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'championship.q4', senseId: 'championship.s1', errorType: 'meaning', type: '词源', prompt: '记 championship 时，哪句更稳妥？', options: ['先锁住「冠军称号」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冠军称号」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冠军称号'] },
  });

  D('chance', {
    etymology: {
      origin: '拉丁语 cadere「落下」。碰巧落下的事。',
      prefix: null,
      root: { text: 'chance', gloss: '机会' },
      suffix: null,
      history: [
        { label: 'chance', text: '拉丁语 cadere「落下」。碰巧落下的事。' },
        { label: '现在', text: '核心用法是：机会。' },
      ],
      formationLogic: '考试认现在的用法：机会。',
      mnemonic: '看到 chance，先说出「机会」。',
      note: '考试认现在的用法：机会。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chance.', chinese: '这一章反复回到同一个点：机会。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chance.s1', en: 'Without that chance, the next paragraph is hard to follow.', zh: '没有这个机会，下一段会很难读。', structure: 'chance / 表示 / 机会', grammar: 'noun，围绕「机会」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chance.', right: 'He gave me some advice about the chance.', reason: 'advice 不可数。名词 chance 的单复数按词典词形记。', rule: '先确定 chance 是noun，再套「机会」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chance.q1', senseId: 'chance.s1', errorType: 'meaning', type: '词义选择', prompt: '「chance」在本条的核心意思是：', options: ['机会', '完全相反的意思', '一种古代钱币'], answer: '机会', explain: 'chance：机会。' },
      { id: 'chance.q2', senseId: 'chance.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chance?', options: ['机会', 'a kind of ancient coin', 'the past tense of be'], answer: '机会', explain: '对的是「机会」。' },
      { id: 'chance.q3', senseId: 'chance.s1', errorType: 'grammar', type: '词义选择', prompt: 'chance 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chance.q4', senseId: 'chance.s1', errorType: 'meaning', type: '词源', prompt: '记 chance 时，哪句更稳妥？', options: ['先锁住「机会」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「机会」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['机会'] },
  });

  D('chancellor', {
    etymology: {
      origin: '英语派生：chancell + -or，词性转到「（德国等）总理」。',
      prefix: null,
      root: { text: 'chancell', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chancellor', text: '英语派生：chancell + -or，词性转到「（德国等）总理」。' },
        { label: '现在', text: '核心用法是：（德国等）总理。' },
      ],
      formationLogic: '先认词干 chancell，再看词尾。',
      mnemonic: '看到 chancellor，先说出「（德国等）总理」。',
      note: '先认词干 chancell，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chancellor.', chinese: '这一章反复回到同一个点：（德国等）总理。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chancellor.s1', en: 'Without that chancellor, the next paragraph is hard to follow.', zh: '没有这个（德国等）总理，下一段会很难读。', structure: 'chancellor / 表示 / （德国等）总理', grammar: 'noun，围绕「（德国等）总理」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chancellor.', right: 'He gave me some advice about the chancellor.', reason: 'advice 不可数。名词 chancellor 的单复数按词典词形记。', rule: '先确定 chancellor 是noun，再套「（德国等）总理」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chancellor.q1', senseId: 'chancellor.s1', errorType: 'meaning', type: '词义选择', prompt: '「chancellor」在本条的核心意思是：', options: ['（德国等）总理', '完全相反的意思', '一种古代钱币'], answer: '（德国等）总理', explain: 'chancellor：（德国等）总理。' },
      { id: 'chancellor.q2', senseId: 'chancellor.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chancellor?', options: ['（德国等）总理', 'a kind of ancient coin', 'the past tense of be'], answer: '（德国等）总理', explain: '对的是「（德国等）总理」。' },
      { id: 'chancellor.q3', senseId: 'chancellor.s1', errorType: 'grammar', type: '词义选择', prompt: 'chancellor 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chancellor.q4', senseId: 'chancellor.s1', errorType: 'meaning', type: '词源', prompt: '记 chancellor 时，哪句更稳妥？', options: ['先锁住「（德国等）总理」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（德国等）总理」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（德国等）总理'] },
  });

  D('change', {
    etymology: {
      origin: '拉丁语 cambiare「交换」。',
      prefix: null,
      root: { text: 'change', gloss: '改变' },
      suffix: null,
      history: [
        { label: 'change', text: '拉丁语 cambiare「交换」。' },
        { label: '现在', text: '核心用法是：改变。' },
      ],
      formationLogic: '考试认现在的用法：改变。',
      mnemonic: '看到 change，先说出「改变」。',
      note: '考试认现在的用法：改变。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to change before the office closed.', chinese: '他们同意在办公室关门前做这件事：改变。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'change.s1', en: 'The deadline forced the team to change that afternoon.', zh: '截止日期逼着小组在那天下午改变。', structure: 'change / 表示 / 改变', grammar: 'verb，围绕「改变」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She changeed it yesterday without checking the real past form.', right: 'Check the past form of "change" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 change 是verb，再套「改变」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'change.q1', senseId: 'change.s1', errorType: 'meaning', type: '词义选择', prompt: '「change」在本条的核心意思是：', options: ['改变', '完全相反的意思', '一种古代钱币'], answer: '改变', explain: 'change：改变。' },
      { id: 'change.q2', senseId: 'change.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches change?', options: ['改变', 'a kind of ancient coin', 'the past tense of be'], answer: '改变', explain: '对的是「改变」。' },
      { id: 'change.q3', senseId: 'change.s1', errorType: 'grammar', type: '词义选择', prompt: 'change 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'change.q4', senseId: 'change.s1', errorType: 'meaning', type: '词源', prompt: '记 change 时，哪句更稳妥？', options: ['先锁住「改变」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「改变」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['改变'] },
  });

  D('changeable', {
    etymology: {
      origin: '英语派生：change + -able，词性转到「易变的」。',
      prefix: null,
      root: { text: 'change', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'changeable', text: '英语派生：change + -able，词性转到「易变的」。' },
        { label: '现在', text: '核心用法是：易变的。' },
      ],
      formationLogic: '先认词干 change，再看词尾。',
      mnemonic: '看到 changeable，先说出「易变的」。',
      note: '先认词干 change，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was changeable.', chinese: '即使是初读者也能看出，这个结果是易变的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'changeable.s1', en: 'They wanted a changeable answer, not a long speech.', zh: '他们要一个易变的的答复，不要长篇发言。', structure: 'changeable / 表示 / 易变的', grammar: 'adjective，围绕「易变的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are changeable.', right: 'The news is changeable.', reason: 'news 作主语时动词用单数。', rule: '先确定 changeable 是adjective，再套「易变的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'changeable.q1', senseId: 'changeable.s1', errorType: 'meaning', type: '词义选择', prompt: '「changeable」在本条的核心意思是：', options: ['易变的', '完全相反的意思', '一种古代钱币'], answer: '易变的', explain: 'changeable：易变的。' },
      { id: 'changeable.q2', senseId: 'changeable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches changeable?', options: ['易变的', 'a kind of ancient coin', 'the past tense of be'], answer: '易变的', explain: '对的是「易变的」。' },
      { id: 'changeable.q3', senseId: 'changeable.s1', errorType: 'grammar', type: '词义选择', prompt: 'changeable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'changeable.q4', senseId: 'changeable.s1', errorType: 'meaning', type: '词源', prompt: '记 changeable 时，哪句更稳妥？', options: ['先锁住「易变的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「易变的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['易变的'] },
  });

  D('changing', {
    etymology: {
      origin: '英语派生：chang + -ing，词性转到「变化中的」。',
      prefix: null,
      root: { text: 'chang', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'changing', text: '英语派生：chang + -ing，词性转到「变化中的」。' },
        { label: '现在', text: '核心用法是：变化中的。' },
      ],
      formationLogic: '先认词干 chang，再看词尾。',
      mnemonic: '看到 changing，先说出「变化中的」。',
      note: '先认词干 chang，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was changing.', chinese: '即使是初读者也能看出，这个结果是变化中的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'changing.s1', en: 'They wanted a changing answer, not a long speech.', zh: '他们要一个变化中的的答复，不要长篇发言。', structure: 'changing / 表示 / 变化中的', grammar: 'adjective，围绕「变化中的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are changing.', right: 'The news is changing.', reason: 'news 作主语时动词用单数。', rule: '先确定 changing 是adjective，再套「变化中的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'changing.q1', senseId: 'changing.s1', errorType: 'meaning', type: '词义选择', prompt: '「changing」在本条的核心意思是：', options: ['变化中的', '完全相反的意思', '一种古代钱币'], answer: '变化中的', explain: 'changing：变化中的。' },
      { id: 'changing.q2', senseId: 'changing.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches changing?', options: ['变化中的', 'a kind of ancient coin', 'the past tense of be'], answer: '变化中的', explain: '对的是「变化中的」。' },
      { id: 'changing.q3', senseId: 'changing.s1', errorType: 'grammar', type: '词义选择', prompt: 'changing 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'changing.q4', senseId: 'changing.s1', errorType: 'meaning', type: '词源', prompt: '记 changing 时，哪句更稳妥？', options: ['先锁住「变化中的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「变化中的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['变化中的'] },
  });

  D('channel', {
    etymology: {
      origin: '拉丁语 canalis「沟、管道」。',
      prefix: null,
      root: { text: 'channel', gloss: '频道' },
      suffix: null,
      history: [
        { label: 'channel', text: '拉丁语 canalis「沟、管道」。' },
        { label: '现在', text: '核心用法是：频道。' },
      ],
      formationLogic: '考试认现在的用法：频道。',
      mnemonic: '看到 channel，先说出「频道」。',
      note: '考试认现在的用法：频道。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one channel.', chinese: '这一章反复回到同一个点：频道。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'channel.s1', en: 'Without that channel, the next paragraph is hard to follow.', zh: '没有这个频道，下一段会很难读。', structure: 'channel / 表示 / 频道', grammar: 'noun，围绕「频道」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the channel.', right: 'He gave me some advice about the channel.', reason: 'advice 不可数。名词 channel 的单复数按词典词形记。', rule: '先确定 channel 是noun，再套「频道」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'channel.q1', senseId: 'channel.s1', errorType: 'meaning', type: '词义选择', prompt: '「channel」在本条的核心意思是：', options: ['频道', '完全相反的意思', '一种古代钱币'], answer: '频道', explain: 'channel：频道。' },
      { id: 'channel.q2', senseId: 'channel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches channel?', options: ['频道', 'a kind of ancient coin', 'the past tense of be'], answer: '频道', explain: '对的是「频道」。' },
      { id: 'channel.q3', senseId: 'channel.s1', errorType: 'grammar', type: '词义选择', prompt: 'channel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'channel.q4', senseId: 'channel.s1', errorType: 'meaning', type: '词源', prompt: '记 channel 时，哪句更稳妥？', options: ['先锁住「频道」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「频道」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['频道'] },
  });

  D('chant', {
    etymology: {
      origin: '现代英语常用词「chant」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chant', gloss: '（反复的）吟唱' },
      suffix: null,
      history: [
        { label: 'chant', text: '现代英语常用词「chant」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（反复的）吟唱。' },
      ],
      formationLogic: '核心义：（反复的）吟唱。',
      mnemonic: '看到 chant，先说出「（反复的）吟唱」。',
      note: '核心义：（反复的）吟唱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chant.', chinese: '这一章反复回到同一个点：（反复的）吟唱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chant.s1', en: 'Without that chant, the next paragraph is hard to follow.', zh: '没有这个（反复的）吟唱，下一段会很难读。', structure: 'chant / 表示 / （反复的）吟唱', grammar: 'noun，围绕「（反复的）吟唱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chant.', right: 'He gave me some advice about the chant.', reason: 'advice 不可数。名词 chant 的单复数按词典词形记。', rule: '先确定 chant 是noun，再套「（反复的）吟唱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chant.q1', senseId: 'chant.s1', errorType: 'meaning', type: '词义选择', prompt: '「chant」在本条的核心意思是：', options: ['（反复的）吟唱', '完全相反的意思', '一种古代钱币'], answer: '（反复的）吟唱', explain: 'chant：（反复的）吟唱。' },
      { id: 'chant.q2', senseId: 'chant.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chant?', options: ['（反复的）吟唱', 'a kind of ancient coin', 'the past tense of be'], answer: '（反复的）吟唱', explain: '对的是「（反复的）吟唱」。' },
      { id: 'chant.q3', senseId: 'chant.s1', errorType: 'grammar', type: '词义选择', prompt: 'chant 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chant.q4', senseId: 'chant.s1', errorType: 'meaning', type: '词源', prompt: '记 chant 时，哪句更稳妥？', options: ['先锁住「（反复的）吟唱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（反复的）吟唱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（反复的）吟唱'] },
  });

  D('chaos', {
    etymology: {
      origin: '希腊语 khaos「裂开的虚空」。',
      prefix: null,
      root: { text: 'chaos', gloss: '混乱' },
      suffix: null,
      history: [
        { label: 'chaos', text: '希腊语 khaos「裂开的虚空」。' },
        { label: '现在', text: '核心用法是：混乱。' },
      ],
      formationLogic: '考试认现在的用法：混乱。',
      mnemonic: '看到 chaos，先说出「混乱」。',
      note: '考试认现在的用法：混乱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chaos.', chinese: '这一章反复回到同一个点：混乱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chaos.s1', en: 'Without that chaos, the next paragraph is hard to follow.', zh: '没有这个混乱，下一段会很难读。', structure: 'chaos / 表示 / 混乱', grammar: 'noun，围绕「混乱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chaos.', right: 'He gave me some advice about the chaos.', reason: 'advice 不可数。名词 chaos 的单复数按词典词形记。', rule: '先确定 chaos 是noun，再套「混乱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chaos.q1', senseId: 'chaos.s1', errorType: 'meaning', type: '词义选择', prompt: '「chaos」在本条的核心意思是：', options: ['混乱', '完全相反的意思', '一种古代钱币'], answer: '混乱', explain: 'chaos：混乱。' },
      { id: 'chaos.q2', senseId: 'chaos.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chaos?', options: ['混乱', 'a kind of ancient coin', 'the past tense of be'], answer: '混乱', explain: '对的是「混乱」。' },
      { id: 'chaos.q3', senseId: 'chaos.s1', errorType: 'grammar', type: '词义选择', prompt: 'chaos 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chaos.q4', senseId: 'chaos.s1', errorType: 'meaning', type: '词源', prompt: '记 chaos 时，哪句更稳妥？', options: ['先锁住「混乱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「混乱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['混乱'] },
  });

  D('chap', {
    etymology: {
      origin: '现代英语常用词「chap」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chap', gloss: '家伙' },
      suffix: null,
      history: [
        { label: 'chap', text: '现代英语常用词「chap」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：家伙。' },
      ],
      formationLogic: '核心义：家伙。',
      mnemonic: '看到 chap，先说出「家伙」。',
      note: '核心义：家伙。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chap.', chinese: '这一章反复回到同一个点：家伙。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chap.s1', en: 'Without that chap, the next paragraph is hard to follow.', zh: '没有这个家伙，下一段会很难读。', structure: 'chap / 表示 / 家伙', grammar: 'noun，围绕「家伙」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chap.', right: 'He gave me some advice about the chap.', reason: 'advice 不可数。名词 chap 的单复数按词典词形记。', rule: '先确定 chap 是noun，再套「家伙」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chap.q1', senseId: 'chap.s1', errorType: 'meaning', type: '词义选择', prompt: '「chap」在本条的核心意思是：', options: ['家伙', '完全相反的意思', '一种古代钱币'], answer: '家伙', explain: 'chap：家伙。' },
      { id: 'chap.q2', senseId: 'chap.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chap?', options: ['家伙', 'a kind of ancient coin', 'the past tense of be'], answer: '家伙', explain: '对的是「家伙」。' },
      { id: 'chap.q3', senseId: 'chap.s1', errorType: 'grammar', type: '词义选择', prompt: 'chap 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chap.q4', senseId: 'chap.s1', errorType: 'meaning', type: '词源', prompt: '记 chap 时，哪句更稳妥？', options: ['先锁住「家伙」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「家伙」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['家伙'] },
  });

  D('chapel', {
    etymology: {
      origin: '现代英语常用词「chapel」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chapel', gloss: '小教堂' },
      suffix: null,
      history: [
        { label: 'chapel', text: '现代英语常用词「chapel」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：小教堂。' },
      ],
      formationLogic: '核心义：小教堂。',
      mnemonic: '看到 chapel，先说出「小教堂」。',
      note: '核心义：小教堂。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chapel.', chinese: '这一章反复回到同一个点：小教堂。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chapel.s1', en: 'Without that chapel, the next paragraph is hard to follow.', zh: '没有这个小教堂，下一段会很难读。', structure: 'chapel / 表示 / 小教堂', grammar: 'noun，围绕「小教堂」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chapel.', right: 'He gave me some advice about the chapel.', reason: 'advice 不可数。名词 chapel 的单复数按词典词形记。', rule: '先确定 chapel 是noun，再套「小教堂」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chapel.q1', senseId: 'chapel.s1', errorType: 'meaning', type: '词义选择', prompt: '「chapel」在本条的核心意思是：', options: ['小教堂', '完全相反的意思', '一种古代钱币'], answer: '小教堂', explain: 'chapel：小教堂。' },
      { id: 'chapel.q2', senseId: 'chapel.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chapel?', options: ['小教堂', 'a kind of ancient coin', 'the past tense of be'], answer: '小教堂', explain: '对的是「小教堂」。' },
      { id: 'chapel.q3', senseId: 'chapel.s1', errorType: 'grammar', type: '词义选择', prompt: 'chapel 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chapel.q4', senseId: 'chapel.s1', errorType: 'meaning', type: '词源', prompt: '记 chapel 时，哪句更稳妥？', options: ['先锁住「小教堂」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「小教堂」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['小教堂'] },
  });

  D('chapter', {
    etymology: {
      origin: '拉丁语 capitulum「小头、章节」。',
      prefix: null,
      root: { text: 'chapter', gloss: '章' },
      suffix: null,
      history: [
        { label: 'chapter', text: '拉丁语 capitulum「小头、章节」。' },
        { label: '现在', text: '核心用法是：章。' },
      ],
      formationLogic: '考试认现在的用法：章。',
      mnemonic: '看到 chapter，先说出「章」。',
      note: '考试认现在的用法：章。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chapter.', chinese: '这一章反复回到同一个点：章。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chapter.s1', en: 'Without that chapter, the next paragraph is hard to follow.', zh: '没有这个章，下一段会很难读。', structure: 'chapter / 表示 / 章', grammar: 'noun，围绕「章」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chapter.', right: 'He gave me some advice about the chapter.', reason: 'advice 不可数。名词 chapter 的单复数按词典词形记。', rule: '先确定 chapter 是noun，再套「章」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chapter.q1', senseId: 'chapter.s1', errorType: 'meaning', type: '词义选择', prompt: '「chapter」在本条的核心意思是：', options: ['章', '完全相反的意思', '一种古代钱币'], answer: '章', explain: 'chapter：章。' },
      { id: 'chapter.q2', senseId: 'chapter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chapter?', options: ['章', 'a kind of ancient coin', 'the past tense of be'], answer: '章', explain: '对的是「章」。' },
      { id: 'chapter.q3', senseId: 'chapter.s1', errorType: 'grammar', type: '词义选择', prompt: 'chapter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chapter.q4', senseId: 'chapter.s1', errorType: 'meaning', type: '词源', prompt: '记 chapter 时，哪句更稳妥？', options: ['先锁住「章」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「章」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['章'] },
  });

  D('character', {
    etymology: {
      origin: '希腊语 kharaktēr「刻下的印记」。',
      prefix: null,
      root: { text: 'character', gloss: '性格' },
      suffix: null,
      history: [
        { label: 'character', text: '希腊语 kharaktēr「刻下的印记」。' },
        { label: '现在', text: '核心用法是：性格。' },
      ],
      formationLogic: '考试认现在的用法：性格。',
      mnemonic: '看到 character，先说出「性格」。',
      note: '考试认现在的用法：性格。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one character.', chinese: '这一章反复回到同一个点：性格。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'character.s1', en: 'Without that character, the next paragraph is hard to follow.', zh: '没有这个性格，下一段会很难读。', structure: 'character / 表示 / 性格', grammar: 'noun，围绕「性格」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the character.', right: 'He gave me some advice about the character.', reason: 'advice 不可数。名词 character 的单复数按词典词形记。', rule: '先确定 character 是noun，再套「性格」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'character.q1', senseId: 'character.s1', errorType: 'meaning', type: '词义选择', prompt: '「character」在本条的核心意思是：', options: ['性格', '完全相反的意思', '一种古代钱币'], answer: '性格', explain: 'character：性格。' },
      { id: 'character.q2', senseId: 'character.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches character?', options: ['性格', 'a kind of ancient coin', 'the past tense of be'], answer: '性格', explain: '对的是「性格」。' },
      { id: 'character.q3', senseId: 'character.s1', errorType: 'grammar', type: '词义选择', prompt: 'character 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'character.q4', senseId: 'character.s1', errorType: 'meaning', type: '词源', prompt: '记 character 时，哪句更稳妥？', options: ['先锁住「性格」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「性格」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['性格'] },
  });

  D('characteristic', {
    etymology: {
      origin: '英语派生：characterist + -ic，词性转到「典型的」。',
      prefix: null,
      root: { text: 'characterist', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'characteristic', text: '英语派生：characterist + -ic，词性转到「典型的」。' },
        { label: '现在', text: '核心用法是：典型的。' },
      ],
      formationLogic: '先认词干 characterist，再看词尾。',
      mnemonic: '看到 characteristic，先说出「典型的」。',
      note: '先认词干 characterist，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was characteristic.', chinese: '即使是初读者也能看出，这个结果是典型的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'characteristic.s1', en: 'They wanted a characteristic answer, not a long speech.', zh: '他们要一个典型的的答复，不要长篇发言。', structure: 'characteristic / 表示 / 典型的', grammar: 'adjective，围绕「典型的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are characteristic.', right: 'The news is characteristic.', reason: 'news 作主语时动词用单数。', rule: '先确定 characteristic 是adjective，再套「典型的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'characteristic.q1', senseId: 'characteristic.s1', errorType: 'meaning', type: '词义选择', prompt: '「characteristic」在本条的核心意思是：', options: ['典型的', '完全相反的意思', '一种古代钱币'], answer: '典型的', explain: 'characteristic：典型的。' },
      { id: 'characteristic.q2', senseId: 'characteristic.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches characteristic?', options: ['典型的', 'a kind of ancient coin', 'the past tense of be'], answer: '典型的', explain: '对的是「典型的」。' },
      { id: 'characteristic.q3', senseId: 'characteristic.s1', errorType: 'grammar', type: '词义选择', prompt: 'characteristic 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'characteristic.q4', senseId: 'characteristic.s1', errorType: 'meaning', type: '词源', prompt: '记 characteristic 时，哪句更稳妥？', options: ['先锁住「典型的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「典型的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['典型的'] },
  });

  D('characters', {
    etymology: {
      origin: '现代英语常用词「characters」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'characters', gloss: '角色' },
      suffix: null,
      history: [
        { label: 'characters', text: '现代英语常用词「characters」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：角色。' },
      ],
      formationLogic: '核心义：角色。',
      mnemonic: '看到 characters，先说出「角色」。',
      note: '核心义：角色。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one characters.', chinese: '这一章反复回到同一个点：角色。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'characters.s1', en: 'Without that characters, the next paragraph is hard to follow.', zh: '没有这个角色，下一段会很难读。', structure: 'characters / 表示 / 角色', grammar: 'noun，围绕「角色」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the characters.', right: 'He gave me some advice about the characters.', reason: 'advice 不可数。名词 characters 的单复数按词典词形记。', rule: '先确定 characters 是noun，再套「角色」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'characters.q1', senseId: 'characters.s1', errorType: 'meaning', type: '词义选择', prompt: '「characters」在本条的核心意思是：', options: ['角色', '完全相反的意思', '一种古代钱币'], answer: '角色', explain: 'characters：角色。' },
      { id: 'characters.q2', senseId: 'characters.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches characters?', options: ['角色', 'a kind of ancient coin', 'the past tense of be'], answer: '角色', explain: '对的是「角色」。' },
      { id: 'characters.q3', senseId: 'characters.s1', errorType: 'grammar', type: '词义选择', prompt: 'characters 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'characters.q4', senseId: 'characters.s1', errorType: 'meaning', type: '词源', prompt: '记 characters 时，哪句更稳妥？', options: ['先锁住「角色」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「角色」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['角色'] },
  });

  D('charged', {
    etymology: {
      origin: '现代英语常用词「charged」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'charged', gloss: '被控告的' },
      suffix: null,
      history: [
        { label: 'charged', text: '现代英语常用词「charged」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：被控告的。' },
      ],
      formationLogic: '核心义：被控告的。',
      mnemonic: '看到 charged，先说出「被控告的」。',
      note: '核心义：被控告的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was charged.', chinese: '即使是初读者也能看出，这个结果是被控告的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'charged.s1', en: 'They wanted a charged answer, not a long speech.', zh: '他们要一个被控告的的答复，不要长篇发言。', structure: 'charged / 表示 / 被控告的', grammar: 'adjective，围绕「被控告的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are charged.', right: 'The news is charged.', reason: 'news 作主语时动词用单数。', rule: '先确定 charged 是adjective，再套「被控告的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'charged.q1', senseId: 'charged.s1', errorType: 'meaning', type: '词义选择', prompt: '「charged」在本条的核心意思是：', options: ['被控告的', '完全相反的意思', '一种古代钱币'], answer: '被控告的', explain: 'charged：被控告的。' },
      { id: 'charged.q2', senseId: 'charged.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches charged?', options: ['被控告的', 'a kind of ancient coin', 'the past tense of be'], answer: '被控告的', explain: '对的是「被控告的」。' },
      { id: 'charged.q3', senseId: 'charged.s1', errorType: 'grammar', type: '词义选择', prompt: 'charged 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'charged.q4', senseId: 'charged.s1', errorType: 'meaning', type: '词源', prompt: '记 charged 时，哪句更稳妥？', options: ['先锁住「被控告的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「被控告的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['被控告的'] },
  });

  D('charitable', {
    etymology: {
      origin: '英语派生：charit + -able，词性转到「慈善的」。',
      prefix: null,
      root: { text: 'charit', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'charitable', text: '英语派生：charit + -able，词性转到「慈善的」。' },
        { label: '现在', text: '核心用法是：慈善的。' },
      ],
      formationLogic: '先认词干 charit，再看词尾。',
      mnemonic: '看到 charitable，先说出「慈善的」。',
      note: '先认词干 charit，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was charitable.', chinese: '即使是初读者也能看出，这个结果是慈善的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'charitable.s1', en: 'They wanted a charitable answer, not a long speech.', zh: '他们要一个慈善的的答复，不要长篇发言。', structure: 'charitable / 表示 / 慈善的', grammar: 'adjective，围绕「慈善的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are charitable.', right: 'The news is charitable.', reason: 'news 作主语时动词用单数。', rule: '先确定 charitable 是adjective，再套「慈善的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'charitable.q1', senseId: 'charitable.s1', errorType: 'meaning', type: '词义选择', prompt: '「charitable」在本条的核心意思是：', options: ['慈善的', '完全相反的意思', '一种古代钱币'], answer: '慈善的', explain: 'charitable：慈善的。' },
      { id: 'charitable.q2', senseId: 'charitable.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches charitable?', options: ['慈善的', 'a kind of ancient coin', 'the past tense of be'], answer: '慈善的', explain: '对的是「慈善的」。' },
      { id: 'charitable.q3', senseId: 'charitable.s1', errorType: 'grammar', type: '词义选择', prompt: 'charitable 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'charitable.q4', senseId: 'charitable.s1', errorType: 'meaning', type: '词源', prompt: '记 charitable 时，哪句更稳妥？', options: ['先锁住「慈善的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「慈善的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['慈善的'] },
  });

  D('charity', {
    etymology: {
      origin: '拉丁语 caritas「爱、珍视」。',
      prefix: null,
      root: { text: 'charity', gloss: '慈善' },
      suffix: null,
      history: [
        { label: 'charity', text: '拉丁语 caritas「爱、珍视」。' },
        { label: '现在', text: '核心用法是：慈善。' },
      ],
      formationLogic: '考试认现在的用法：慈善。',
      mnemonic: '看到 charity，先说出「慈善」。',
      note: '考试认现在的用法：慈善。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one charity.', chinese: '这一章反复回到同一个点：慈善。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'charity.s1', en: 'Without that charity, the next paragraph is hard to follow.', zh: '没有这个慈善，下一段会很难读。', structure: 'charity / 表示 / 慈善', grammar: 'noun，围绕「慈善」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the charity.', right: 'He gave me some advice about the charity.', reason: 'advice 不可数。名词 charity 的单复数按词典词形记。', rule: '先确定 charity 是noun，再套「慈善」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'charity.q1', senseId: 'charity.s1', errorType: 'meaning', type: '词义选择', prompt: '「charity」在本条的核心意思是：', options: ['慈善', '完全相反的意思', '一种古代钱币'], answer: '慈善', explain: 'charity：慈善。' },
      { id: 'charity.q2', senseId: 'charity.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches charity?', options: ['慈善', 'a kind of ancient coin', 'the past tense of be'], answer: '慈善', explain: '对的是「慈善」。' },
      { id: 'charity.q3', senseId: 'charity.s1', errorType: 'grammar', type: '词义选择', prompt: 'charity 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'charity.q4', senseId: 'charity.s1', errorType: 'meaning', type: '词源', prompt: '记 charity 时，哪句更稳妥？', options: ['先锁住「慈善」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「慈善」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['慈善'] },
  });

  D('charm', {
    etymology: {
      origin: '现代英语常用词「charm」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'charm', gloss: '魅力' },
      suffix: null,
      history: [
        { label: 'charm', text: '现代英语常用词「charm」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：魅力。' },
      ],
      formationLogic: '核心义：魅力。',
      mnemonic: '看到 charm，先说出「魅力」。',
      note: '核心义：魅力。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one charm.', chinese: '这一章反复回到同一个点：魅力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'charm.s1', en: 'Without that charm, the next paragraph is hard to follow.', zh: '没有这个魅力，下一段会很难读。', structure: 'charm / 表示 / 魅力', grammar: 'noun，围绕「魅力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the charm.', right: 'He gave me some advice about the charm.', reason: 'advice 不可数。名词 charm 的单复数按词典词形记。', rule: '先确定 charm 是noun，再套「魅力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'charm.q1', senseId: 'charm.s1', errorType: 'meaning', type: '词义选择', prompt: '「charm」在本条的核心意思是：', options: ['魅力', '完全相反的意思', '一种古代钱币'], answer: '魅力', explain: 'charm：魅力。' },
      { id: 'charm.q2', senseId: 'charm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches charm?', options: ['魅力', 'a kind of ancient coin', 'the past tense of be'], answer: '魅力', explain: '对的是「魅力」。' },
      { id: 'charm.q3', senseId: 'charm.s1', errorType: 'grammar', type: '词义选择', prompt: 'charm 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'charm.q4', senseId: 'charm.s1', errorType: 'meaning', type: '词源', prompt: '记 charm 时，哪句更稳妥？', options: ['先锁住「魅力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「魅力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['魅力'] },
  });

  D('chart', {
    etymology: {
      origin: '拉丁语 charta「纸」。',
      prefix: null,
      root: { text: 'chart', gloss: '图表' },
      suffix: null,
      history: [
        { label: 'chart', text: '拉丁语 charta「纸」。' },
        { label: '现在', text: '核心用法是：图表。' },
      ],
      formationLogic: '考试认现在的用法：图表。',
      mnemonic: '看到 chart，先说出「图表」。',
      note: '考试认现在的用法：图表。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chart.', chinese: '这一章反复回到同一个点：图表。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chart.s1', en: 'Without that chart, the next paragraph is hard to follow.', zh: '没有这个图表，下一段会很难读。', structure: 'chart / 表示 / 图表', grammar: 'noun，围绕「图表」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chart.', right: 'He gave me some advice about the chart.', reason: 'advice 不可数。名词 chart 的单复数按词典词形记。', rule: '先确定 chart 是noun，再套「图表」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chart.q1', senseId: 'chart.s1', errorType: 'meaning', type: '词义选择', prompt: '「chart」在本条的核心意思是：', options: ['图表', '完全相反的意思', '一种古代钱币'], answer: '图表', explain: 'chart：图表。' },
      { id: 'chart.q2', senseId: 'chart.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chart?', options: ['图表', 'a kind of ancient coin', 'the past tense of be'], answer: '图表', explain: '对的是「图表」。' },
      { id: 'chart.q3', senseId: 'chart.s1', errorType: 'grammar', type: '词义选择', prompt: 'chart 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chart.q4', senseId: 'chart.s1', errorType: 'meaning', type: '词源', prompt: '记 chart 时，哪句更稳妥？', options: ['先锁住「图表」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「图表」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['图表'] },
  });

  D('charter', {
    etymology: {
      origin: '英语派生：chart + -er，词性转到「宪章」。',
      prefix: null,
      root: { text: 'chart', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'charter', text: '英语派生：chart + -er，词性转到「宪章」。' },
        { label: '现在', text: '核心用法是：宪章。' },
      ],
      formationLogic: '先认词干 chart，再看词尾。',
      mnemonic: '看到 charter，先说出「宪章」。',
      note: '先认词干 chart，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one charter.', chinese: '这一章反复回到同一个点：宪章。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'charter.s1', en: 'Without that charter, the next paragraph is hard to follow.', zh: '没有这个宪章，下一段会很难读。', structure: 'charter / 表示 / 宪章', grammar: 'noun，围绕「宪章」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the charter.', right: 'He gave me some advice about the charter.', reason: 'advice 不可数。名词 charter 的单复数按词典词形记。', rule: '先确定 charter 是noun，再套「宪章」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'charter.q1', senseId: 'charter.s1', errorType: 'meaning', type: '词义选择', prompt: '「charter」在本条的核心意思是：', options: ['宪章', '完全相反的意思', '一种古代钱币'], answer: '宪章', explain: 'charter：宪章。' },
      { id: 'charter.q2', senseId: 'charter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches charter?', options: ['宪章', 'a kind of ancient coin', 'the past tense of be'], answer: '宪章', explain: '对的是「宪章」。' },
      { id: 'charter.q3', senseId: 'charter.s1', errorType: 'grammar', type: '词义选择', prompt: 'charter 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'charter.q4', senseId: 'charter.s1', errorType: 'meaning', type: '词源', prompt: '记 charter 时，哪句更稳妥？', options: ['先锁住「宪章」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「宪章」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['宪章'] },
  });

  D('chase', {
    etymology: {
      origin: '与 catch 同源，古法语 chacier「追」。',
      prefix: null,
      root: { text: 'chase', gloss: '追赶' },
      suffix: null,
      history: [
        { label: 'chase', text: '与 catch 同源，古法语 chacier「追」。' },
        { label: '现在', text: '核心用法是：追赶。' },
      ],
      formationLogic: '考试认现在的用法：追赶。',
      mnemonic: '看到 chase，先说出「追赶」。',
      note: '考试认现在的用法：追赶。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chase before the office closed.', chinese: '他们同意在办公室关门前做这件事：追赶。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chase.s1', en: 'The deadline forced the team to chase that afternoon.', zh: '截止日期逼着小组在那天下午追赶。', structure: 'chase / 表示 / 追赶', grammar: 'verb，围绕「追赶」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chaseed it yesterday without checking the real past form.', right: 'Check the past form of "chase" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chase 是verb，再套「追赶」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chase.q1', senseId: 'chase.s1', errorType: 'meaning', type: '词义选择', prompt: '「chase」在本条的核心意思是：', options: ['追赶', '完全相反的意思', '一种古代钱币'], answer: '追赶', explain: 'chase：追赶。' },
      { id: 'chase.q2', senseId: 'chase.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chase?', options: ['追赶', 'a kind of ancient coin', 'the past tense of be'], answer: '追赶', explain: '对的是「追赶」。' },
      { id: 'chase.q3', senseId: 'chase.s1', errorType: 'grammar', type: '词义选择', prompt: 'chase 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chase.q4', senseId: 'chase.s1', errorType: 'meaning', type: '词源', prompt: '记 chase 时，哪句更稳妥？', options: ['先锁住「追赶」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「追赶」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['追赶'] },
  });

  D('chasm', {
    etymology: {
      origin: '现代英语常用词「chasm」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chasm', gloss: '深渊' },
      suffix: null,
      history: [
        { label: 'chasm', text: '现代英语常用词「chasm」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：深渊。' },
      ],
      formationLogic: '核心义：深渊。',
      mnemonic: '看到 chasm，先说出「深渊」。',
      note: '核心义：深渊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chasm.', chinese: '这一章反复回到同一个点：深渊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chasm.s1', en: 'Without that chasm, the next paragraph is hard to follow.', zh: '没有这个深渊，下一段会很难读。', structure: 'chasm / 表示 / 深渊', grammar: 'noun，围绕「深渊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chasm.', right: 'He gave me some advice about the chasm.', reason: 'advice 不可数。名词 chasm 的单复数按词典词形记。', rule: '先确定 chasm 是noun，再套「深渊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chasm.q1', senseId: 'chasm.s1', errorType: 'meaning', type: '词义选择', prompt: '「chasm」在本条的核心意思是：', options: ['深渊', '完全相反的意思', '一种古代钱币'], answer: '深渊', explain: 'chasm：深渊。' },
      { id: 'chasm.q2', senseId: 'chasm.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chasm?', options: ['深渊', 'a kind of ancient coin', 'the past tense of be'], answer: '深渊', explain: '对的是「深渊」。' },
      { id: 'chasm.q3', senseId: 'chasm.s1', errorType: 'grammar', type: '词义选择', prompt: 'chasm 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chasm.q4', senseId: 'chasm.s1', errorType: 'meaning', type: '词源', prompt: '记 chasm 时，哪句更稳妥？', options: ['先锁住「深渊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「深渊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['深渊'] },
  });

  D('chat', {
    etymology: {
      origin: '闲谈，拟声一类的短词。',
      prefix: null,
      root: { text: 'chat', gloss: '聊天' },
      suffix: null,
      history: [
        { label: 'chat', text: '闲谈，拟声一类的短词。' },
        { label: '现在', text: '核心用法是：聊天。' },
      ],
      formationLogic: '考试认现在的用法：聊天。',
      mnemonic: '看到 chat，先说出「聊天」。',
      note: '考试认现在的用法：聊天。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chat before the office closed.', chinese: '他们同意在办公室关门前做这件事：聊天。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chat.s1', en: 'The deadline forced the team to chat that afternoon.', zh: '截止日期逼着小组在那天下午聊天。', structure: 'chat / 表示 / 聊天', grammar: 'verb，围绕「聊天」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chated it yesterday without checking the real past form.', right: 'Check the past form of "chat" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chat 是verb，再套「聊天」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chat.q1', senseId: 'chat.s1', errorType: 'meaning', type: '词义选择', prompt: '「chat」在本条的核心意思是：', options: ['聊天', '完全相反的意思', '一种古代钱币'], answer: '聊天', explain: 'chat：聊天。' },
      { id: 'chat.q2', senseId: 'chat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chat?', options: ['聊天', 'a kind of ancient coin', 'the past tense of be'], answer: '聊天', explain: '对的是「聊天」。' },
      { id: 'chat.q3', senseId: 'chat.s1', errorType: 'grammar', type: '词义选择', prompt: 'chat 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chat.q4', senseId: 'chat.s1', errorType: 'meaning', type: '词源', prompt: '记 chat 时，哪句更稳妥？', options: ['先锁住「聊天」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「聊天」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['聊天'] },
  });

  D('chat up', {
    etymology: {
      origin: '现代英语固定说法「chat up」，整块记，不要拆开硬译。',
      prefix: null,
      root: { text: 'chat up', gloss: '固定搭配' },
      suffix: null,
      history: [
        { label: 'chat up', text: '现代英语固定说法「chat up」，整块记，不要拆开硬译。' },
        { label: '现在', text: '核心用法是：搭讪。' },
      ],
      formationLogic: '核心义：搭讪。',
      mnemonic: '看到 chat up，先说出「搭讪」。',
      note: '核心义：搭讪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The teacher circled "chat up" and asked the class to keep it as one unit.', chinese: '老师把「chat up」圈出来，让全班把它当成一个整体。它表示搭讪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chat up.s1', en: 'In the margin she wrote "chat up" so nobody would split the phrase.', zh: '她在页边写下「chat up」，免得有人把这个说法拆开。意思是搭讪。', structure: 'chat up / 表示 / 搭讪', grammar: 'verb，围绕「搭讪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He translated each word of chat up and lost the point.', right: 'Keep "chat up" together: it means 搭讪.', reason: '「chat up」要整块理解。', rule: '先确定 chat up 是verb，再套「搭讪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chat up.q1', senseId: 'chat up.s1', errorType: 'meaning', type: '词义选择', prompt: '「chat up」在本条的核心意思是：', options: ['搭讪', '完全相反的意思', '一种古代钱币'], answer: '搭讪', explain: 'chat up：搭讪。' },
      { id: 'chat up.q2', senseId: 'chat up.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chat up?', options: ['搭讪', 'a kind of ancient coin', 'the past tense of be'], answer: '搭讪', explain: '对的是「搭讪」。' },
      { id: 'chat up.q3', senseId: 'chat up.s1', errorType: 'grammar', type: '词义选择', prompt: 'chat up 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chat up.q4', senseId: 'chat up.s1', errorType: 'meaning', type: '词源', prompt: '记 chat up 时，哪句更稳妥？', options: ['先锁住「搭讪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「搭讪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['搭讪'] },
  });

  D('chatter', {
    etymology: {
      origin: '英语派生：chatt + -er，词性转到「喋喋不休」。',
      prefix: null,
      root: { text: 'chatt', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chatter', text: '英语派生：chatt + -er，词性转到「喋喋不休」。' },
        { label: '现在', text: '核心用法是：喋喋不休。' },
      ],
      formationLogic: '先认词干 chatt，再看词尾。',
      mnemonic: '看到 chatter，先说出「喋喋不休」。',
      note: '先认词干 chatt，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chatter before the office closed.', chinese: '他们同意在办公室关门前做这件事：喋喋不休。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chatter.s1', en: 'The deadline forced the team to chatter that afternoon.', zh: '截止日期逼着小组在那天下午喋喋不休。', structure: 'chatter / 表示 / 喋喋不休', grammar: 'verb，围绕「喋喋不休」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chattered it yesterday without checking the real past form.', right: 'Check the past form of "chatter" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chatter 是verb，再套「喋喋不休」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chatter.q1', senseId: 'chatter.s1', errorType: 'meaning', type: '词义选择', prompt: '「chatter」在本条的核心意思是：', options: ['喋喋不休', '完全相反的意思', '一种古代钱币'], answer: '喋喋不休', explain: 'chatter：喋喋不休。' },
      { id: 'chatter.q2', senseId: 'chatter.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chatter?', options: ['喋喋不休', 'a kind of ancient coin', 'the past tense of be'], answer: '喋喋不休', explain: '对的是「喋喋不休」。' },
      { id: 'chatter.q3', senseId: 'chatter.s1', errorType: 'grammar', type: '词义选择', prompt: 'chatter 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chatter.q4', senseId: 'chatter.s1', errorType: 'meaning', type: '词源', prompt: '记 chatter 时，哪句更稳妥？', options: ['先锁住「喋喋不休」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「喋喋不休」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['喋喋不休'] },
  });

  D('cheap', {
    etymology: {
      origin: '古英语 ceap「买卖」。好价才叫便宜。',
      prefix: null,
      root: { text: 'cheap', gloss: '便宜的' },
      suffix: null,
      history: [
        { label: 'cheap', text: '古英语 ceap「买卖」。好价才叫便宜。' },
        { label: '现在', text: '核心用法是：便宜的。' },
      ],
      formationLogic: '考试认现在的用法：便宜的。',
      mnemonic: '看到 cheap，先说出「便宜的」。',
      note: '考试认现在的用法：便宜的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cheap.', chinese: '即使是初读者也能看出，这个结果是便宜的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cheap.s1', en: 'They wanted a cheap answer, not a long speech.', zh: '他们要一个便宜的的答复，不要长篇发言。', structure: 'cheap / 表示 / 便宜的', grammar: 'adjective，围绕「便宜的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cheap.', right: 'The news is cheap.', reason: 'news 作主语时动词用单数。', rule: '先确定 cheap 是adjective，再套「便宜的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cheap.q1', senseId: 'cheap.s1', errorType: 'meaning', type: '词义选择', prompt: '「cheap」在本条的核心意思是：', options: ['便宜的', '完全相反的意思', '一种古代钱币'], answer: '便宜的', explain: 'cheap：便宜的。' },
      { id: 'cheap.q2', senseId: 'cheap.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cheap?', options: ['便宜的', 'a kind of ancient coin', 'the past tense of be'], answer: '便宜的', explain: '对的是「便宜的」。' },
      { id: 'cheap.q3', senseId: 'cheap.s1', errorType: 'grammar', type: '词义选择', prompt: 'cheap 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cheap.q4', senseId: 'cheap.s1', errorType: 'meaning', type: '词源', prompt: '记 cheap 时，哪句更稳妥？', options: ['先锁住「便宜的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「便宜的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['便宜的'] },
  });

  D('cheat', {
    etymology: {
      origin: '与 escheat「收回产业」有关，后指欺骗。',
      prefix: null,
      root: { text: 'cheat', gloss: '欺骗' },
      suffix: null,
      history: [
        { label: 'cheat', text: '与 escheat「收回产业」有关，后指欺骗。' },
        { label: '现在', text: '核心用法是：欺骗。' },
      ],
      formationLogic: '考试认现在的用法：欺骗。',
      mnemonic: '看到 cheat，先说出「欺骗」。',
      note: '考试认现在的用法：欺骗。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cheat before the office closed.', chinese: '他们同意在办公室关门前做这件事：欺骗。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cheat.s1', en: 'The deadline forced the team to cheat that afternoon.', zh: '截止日期逼着小组在那天下午欺骗。', structure: 'cheat / 表示 / 欺骗', grammar: 'verb，围绕「欺骗」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cheated it yesterday without checking the real past form.', right: 'Check the past form of "cheat" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cheat 是verb，再套「欺骗」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cheat.q1', senseId: 'cheat.s1', errorType: 'meaning', type: '词义选择', prompt: '「cheat」在本条的核心意思是：', options: ['欺骗', '完全相反的意思', '一种古代钱币'], answer: '欺骗', explain: 'cheat：欺骗。' },
      { id: 'cheat.q2', senseId: 'cheat.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cheat?', options: ['欺骗', 'a kind of ancient coin', 'the past tense of be'], answer: '欺骗', explain: '对的是「欺骗」。' },
      { id: 'cheat.q3', senseId: 'cheat.s1', errorType: 'grammar', type: '词义选择', prompt: 'cheat 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cheat.q4', senseId: 'cheat.s1', errorType: 'meaning', type: '词源', prompt: '记 cheat 时，哪句更稳妥？', options: ['先锁住「欺骗」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欺骗」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欺骗'] },
  });

  D('check', {
    etymology: {
      origin: '波斯语 shah「王」，经象棋术语 check。将军时要停下来核对。',
      prefix: null,
      root: { text: 'check', gloss: '检查' },
      suffix: null,
      history: [
        { label: 'check', text: '波斯语 shah「王」，经象棋术语 check。将军时要停下来核对。' },
        { label: '现在', text: '核心用法是：检查。' },
      ],
      formationLogic: '考试认现在的用法：检查。',
      mnemonic: '看到 check，先说出「检查」。',
      note: '考试认现在的用法：检查。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to check before the office closed.', chinese: '他们同意在办公室关门前做这件事：检查。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'check.s1', en: 'The deadline forced the team to check that afternoon.', zh: '截止日期逼着小组在那天下午检查。', structure: 'check / 表示 / 检查', grammar: 'verb，围绕「检查」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She checked it yesterday without checking the real past form.', right: 'Check the past form of "check" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 check 是verb，再套「检查」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'check.q1', senseId: 'check.s1', errorType: 'meaning', type: '词义选择', prompt: '「check」在本条的核心意思是：', options: ['检查', '完全相反的意思', '一种古代钱币'], answer: '检查', explain: 'check：检查。' },
      { id: 'check.q2', senseId: 'check.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches check?', options: ['检查', 'a kind of ancient coin', 'the past tense of be'], answer: '检查', explain: '对的是「检查」。' },
      { id: 'check.q3', senseId: 'check.s1', errorType: 'grammar', type: '词义选择', prompt: 'check 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'check.q4', senseId: 'check.s1', errorType: 'meaning', type: '词源', prompt: '记 check 时，哪句更稳妥？', options: ['先锁住「检查」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「检查」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['检查'] },
  });

  D('checkpoint', {
    etymology: {
      origin: '现代英语常用词「checkpoint」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'checkpoint', gloss: '检查站' },
      suffix: null,
      history: [
        { label: 'checkpoint', text: '现代英语常用词「checkpoint」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：检查站。' },
      ],
      formationLogic: '核心义：检查站。',
      mnemonic: '看到 checkpoint，先说出「检查站」。',
      note: '核心义：检查站。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one checkpoint.', chinese: '这一章反复回到同一个点：检查站。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'checkpoint.s1', en: 'Without that checkpoint, the next paragraph is hard to follow.', zh: '没有这个检查站，下一段会很难读。', structure: 'checkpoint / 表示 / 检查站', grammar: 'noun，围绕「检查站」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the checkpoint.', right: 'He gave me some advice about the checkpoint.', reason: 'advice 不可数。名词 checkpoint 的单复数按词典词形记。', rule: '先确定 checkpoint 是noun，再套「检查站」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'checkpoint.q1', senseId: 'checkpoint.s1', errorType: 'meaning', type: '词义选择', prompt: '「checkpoint」在本条的核心意思是：', options: ['检查站', '完全相反的意思', '一种古代钱币'], answer: '检查站', explain: 'checkpoint：检查站。' },
      { id: 'checkpoint.q2', senseId: 'checkpoint.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches checkpoint?', options: ['检查站', 'a kind of ancient coin', 'the past tense of be'], answer: '检查站', explain: '对的是「检查站」。' },
      { id: 'checkpoint.q3', senseId: 'checkpoint.s1', errorType: 'grammar', type: '词义选择', prompt: 'checkpoint 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'checkpoint.q4', senseId: 'checkpoint.s1', errorType: 'meaning', type: '词源', prompt: '记 checkpoint 时，哪句更稳妥？', options: ['先锁住「检查站」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「检查站」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['检查站'] },
  });

  D('checkup', {
    etymology: {
      origin: '现代英语常用词「checkup」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'checkup', gloss: '体检' },
      suffix: null,
      history: [
        { label: 'checkup', text: '现代英语常用词「checkup」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：体检。' },
      ],
      formationLogic: '核心义：体检。',
      mnemonic: '看到 checkup，先说出「体检」。',
      note: '核心义：体检。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one checkup.', chinese: '这一章反复回到同一个点：体检。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'checkup.s1', en: 'Without that checkup, the next paragraph is hard to follow.', zh: '没有这个体检，下一段会很难读。', structure: 'checkup / 表示 / 体检', grammar: 'noun，围绕「体检」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the checkup.', right: 'He gave me some advice about the checkup.', reason: 'advice 不可数。名词 checkup 的单复数按词典词形记。', rule: '先确定 checkup 是noun，再套「体检」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'checkup.q1', senseId: 'checkup.s1', errorType: 'meaning', type: '词义选择', prompt: '「checkup」在本条的核心意思是：', options: ['体检', '完全相反的意思', '一种古代钱币'], answer: '体检', explain: 'checkup：体检。' },
      { id: 'checkup.q2', senseId: 'checkup.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches checkup?', options: ['体检', 'a kind of ancient coin', 'the past tense of be'], answer: '体检', explain: '对的是「体检」。' },
      { id: 'checkup.q3', senseId: 'checkup.s1', errorType: 'grammar', type: '词义选择', prompt: 'checkup 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'checkup.q4', senseId: 'checkup.s1', errorType: 'meaning', type: '词源', prompt: '记 checkup 时，哪句更稳妥？', options: ['先锁住「体检」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「体检」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['体检'] },
  });

  D('cheek', {
    etymology: {
      origin: '古英语 ceace。',
      prefix: null,
      root: { text: 'cheek', gloss: '脸颊' },
      suffix: null,
      history: [
        { label: 'cheek', text: '古英语 ceace。' },
        { label: '现在', text: '核心用法是：脸颊。' },
      ],
      formationLogic: '考试认现在的用法：脸颊。',
      mnemonic: '看到 cheek，先说出「脸颊」。',
      note: '考试认现在的用法：脸颊。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cheek.', chinese: '这一章反复回到同一个点：脸颊。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cheek.s1', en: 'Without that cheek, the next paragraph is hard to follow.', zh: '没有这个脸颊，下一段会很难读。', structure: 'cheek / 表示 / 脸颊', grammar: 'noun，围绕「脸颊」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cheek.', right: 'He gave me some advice about the cheek.', reason: 'advice 不可数。名词 cheek 的单复数按词典词形记。', rule: '先确定 cheek 是noun，再套「脸颊」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cheek.q1', senseId: 'cheek.s1', errorType: 'meaning', type: '词义选择', prompt: '「cheek」在本条的核心意思是：', options: ['脸颊', '完全相反的意思', '一种古代钱币'], answer: '脸颊', explain: 'cheek：脸颊。' },
      { id: 'cheek.q2', senseId: 'cheek.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cheek?', options: ['脸颊', 'a kind of ancient coin', 'the past tense of be'], answer: '脸颊', explain: '对的是「脸颊」。' },
      { id: 'cheek.q3', senseId: 'cheek.s1', errorType: 'grammar', type: '词义选择', prompt: 'cheek 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cheek.q4', senseId: 'cheek.s1', errorType: 'meaning', type: '词源', prompt: '记 cheek 时，哪句更稳妥？', options: ['先锁住「脸颊」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「脸颊」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['脸颊'] },
  });

  D('cheep', {
    etymology: {
      origin: '现代英语常用词「cheep」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cheep', gloss: '（雏鸟）啾啾叫' },
      suffix: null,
      history: [
        { label: 'cheep', text: '现代英语常用词「cheep」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（雏鸟）啾啾叫。' },
      ],
      formationLogic: '核心义：（雏鸟）啾啾叫。',
      mnemonic: '看到 cheep，先说出「（雏鸟）啾啾叫」。',
      note: '核心义：（雏鸟）啾啾叫。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cheep before the office closed.', chinese: '他们同意在办公室关门前做这件事：（雏鸟）啾啾叫。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cheep.s1', en: 'The deadline forced the team to cheep that afternoon.', zh: '截止日期逼着小组在那天下午（雏鸟）啾啾叫。', structure: 'cheep / 表示 / （雏鸟）啾啾叫', grammar: 'verb，围绕「（雏鸟）啾啾叫」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cheeped it yesterday without checking the real past form.', right: 'Check the past form of "cheep" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cheep 是verb，再套「（雏鸟）啾啾叫」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cheep.q1', senseId: 'cheep.s1', errorType: 'meaning', type: '词义选择', prompt: '「cheep」在本条的核心意思是：', options: ['（雏鸟）啾啾叫', '完全相反的意思', '一种古代钱币'], answer: '（雏鸟）啾啾叫', explain: 'cheep：（雏鸟）啾啾叫。' },
      { id: 'cheep.q2', senseId: 'cheep.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cheep?', options: ['（雏鸟）啾啾叫', 'a kind of ancient coin', 'the past tense of be'], answer: '（雏鸟）啾啾叫', explain: '对的是「（雏鸟）啾啾叫」。' },
      { id: 'cheep.q3', senseId: 'cheep.s1', errorType: 'grammar', type: '词义选择', prompt: 'cheep 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cheep.q4', senseId: 'cheep.s1', errorType: 'meaning', type: '词源', prompt: '记 cheep 时，哪句更稳妥？', options: ['先锁住「（雏鸟）啾啾叫」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（雏鸟）啾啾叫」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（雏鸟）啾啾叫'] },
  });

  D('cheer', {
    etymology: {
      origin: '古法语 chiere「脸」。给好脸色，后来指欢呼。',
      prefix: null,
      root: { text: 'cheer', gloss: '欢呼' },
      suffix: null,
      history: [
        { label: 'cheer', text: '古法语 chiere「脸」。给好脸色，后来指欢呼。' },
        { label: '现在', text: '核心用法是：欢呼。' },
      ],
      formationLogic: '考试认现在的用法：欢呼。',
      mnemonic: '看到 cheer，先说出「欢呼」。',
      note: '考试认现在的用法：欢呼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cheer before the office closed.', chinese: '他们同意在办公室关门前做这件事：欢呼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cheer.s1', en: 'The deadline forced the team to cheer that afternoon.', zh: '截止日期逼着小组在那天下午欢呼。', structure: 'cheer / 表示 / 欢呼', grammar: 'verb，围绕「欢呼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cheered it yesterday without checking the real past form.', right: 'Check the past form of "cheer" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cheer 是verb，再套「欢呼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cheer.q1', senseId: 'cheer.s1', errorType: 'meaning', type: '词义选择', prompt: '「cheer」在本条的核心意思是：', options: ['欢呼', '完全相反的意思', '一种古代钱币'], answer: '欢呼', explain: 'cheer：欢呼。' },
      { id: 'cheer.q2', senseId: 'cheer.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cheer?', options: ['欢呼', 'a kind of ancient coin', 'the past tense of be'], answer: '欢呼', explain: '对的是「欢呼」。' },
      { id: 'cheer.q3', senseId: 'cheer.s1', errorType: 'grammar', type: '词义选择', prompt: 'cheer 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cheer.q4', senseId: 'cheer.s1', errorType: 'meaning', type: '词源', prompt: '记 cheer 时，哪句更稳妥？', options: ['先锁住「欢呼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「欢呼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['欢呼'] },
  });

  D('cheerful', {
    etymology: {
      origin: '英语派生：cheer + -ful，词性转到「快乐的」。',
      prefix: null,
      root: { text: 'cheer', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'cheerful', text: '英语派生：cheer + -ful，词性转到「快乐的」。' },
        { label: '现在', text: '核心用法是：快乐的。' },
      ],
      formationLogic: '先认词干 cheer，再看词尾。',
      mnemonic: '看到 cheerful，先说出「快乐的」。',
      note: '先认词干 cheer，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cheerful.', chinese: '即使是初读者也能看出，这个结果是快乐的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cheerful.s1', en: 'They wanted a cheerful answer, not a long speech.', zh: '他们要一个快乐的的答复，不要长篇发言。', structure: 'cheerful / 表示 / 快乐的', grammar: 'adjective，围绕「快乐的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cheerful.', right: 'The news is cheerful.', reason: 'news 作主语时动词用单数。', rule: '先确定 cheerful 是adjective，再套「快乐的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cheerful.q1', senseId: 'cheerful.s1', errorType: 'meaning', type: '词义选择', prompt: '「cheerful」在本条的核心意思是：', options: ['快乐的', '完全相反的意思', '一种古代钱币'], answer: '快乐的', explain: 'cheerful：快乐的。' },
      { id: 'cheerful.q2', senseId: 'cheerful.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cheerful?', options: ['快乐的', 'a kind of ancient coin', 'the past tense of be'], answer: '快乐的', explain: '对的是「快乐的」。' },
      { id: 'cheerful.q3', senseId: 'cheerful.s1', errorType: 'grammar', type: '词义选择', prompt: 'cheerful 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cheerful.q4', senseId: 'cheerful.s1', errorType: 'meaning', type: '词源', prompt: '记 cheerful 时，哪句更稳妥？', options: ['先锁住「快乐的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「快乐的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['快乐的'] },
  });

  D('cheese', {
    etymology: {
      origin: '拉丁语 caseus。',
      prefix: null,
      root: { text: 'cheese', gloss: '干酪' },
      suffix: null,
      history: [
        { label: 'cheese', text: '拉丁语 caseus。' },
        { label: '现在', text: '核心用法是：干酪。' },
      ],
      formationLogic: '考试认现在的用法：干酪。',
      mnemonic: '看到 cheese，先说出「干酪」。',
      note: '考试认现在的用法：干酪。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cheese.', chinese: '这一章反复回到同一个点：干酪。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cheese.s1', en: 'Without that cheese, the next paragraph is hard to follow.', zh: '没有这个干酪，下一段会很难读。', structure: 'cheese / 表示 / 干酪', grammar: 'noun，围绕「干酪」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cheese.', right: 'He gave me some advice about the cheese.', reason: 'advice 不可数。名词 cheese 的单复数按词典词形记。', rule: '先确定 cheese 是noun，再套「干酪」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cheese.q1', senseId: 'cheese.s1', errorType: 'meaning', type: '词义选择', prompt: '「cheese」在本条的核心意思是：', options: ['干酪', '完全相反的意思', '一种古代钱币'], answer: '干酪', explain: 'cheese：干酪。' },
      { id: 'cheese.q2', senseId: 'cheese.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cheese?', options: ['干酪', 'a kind of ancient coin', 'the past tense of be'], answer: '干酪', explain: '对的是「干酪」。' },
      { id: 'cheese.q3', senseId: 'cheese.s1', errorType: 'grammar', type: '词义选择', prompt: 'cheese 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cheese.q4', senseId: 'cheese.s1', errorType: 'meaning', type: '词源', prompt: '记 cheese 时，哪句更稳妥？', options: ['先锁住「干酪」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「干酪」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['干酪'] },
  });

  D('chef', {
    etymology: {
      origin: '现代英语常用词「chef」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chef', gloss: '厨师' },
      suffix: null,
      history: [
        { label: 'chef', text: '现代英语常用词「chef」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：厨师。' },
      ],
      formationLogic: '核心义：厨师。',
      mnemonic: '看到 chef，先说出「厨师」。',
      note: '核心义：厨师。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chef.', chinese: '这一章反复回到同一个点：厨师。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chef.s1', en: 'Without that chef, the next paragraph is hard to follow.', zh: '没有这个厨师，下一段会很难读。', structure: 'chef / 表示 / 厨师', grammar: 'noun，围绕「厨师」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chef.', right: 'He gave me some advice about the chef.', reason: 'advice 不可数。名词 chef 的单复数按词典词形记。', rule: '先确定 chef 是noun，再套「厨师」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chef.q1', senseId: 'chef.s1', errorType: 'meaning', type: '词义选择', prompt: '「chef」在本条的核心意思是：', options: ['厨师', '完全相反的意思', '一种古代钱币'], answer: '厨师', explain: 'chef：厨师。' },
      { id: 'chef.q2', senseId: 'chef.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chef?', options: ['厨师', 'a kind of ancient coin', 'the past tense of be'], answer: '厨师', explain: '对的是「厨师」。' },
      { id: 'chef.q3', senseId: 'chef.s1', errorType: 'grammar', type: '词义选择', prompt: 'chef 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chef.q4', senseId: 'chef.s1', errorType: 'meaning', type: '词源', prompt: '记 chef 时，哪句更稳妥？', options: ['先锁住「厨师」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「厨师」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['厨师'] },
  });

  D('chemical', {
    etymology: {
      origin: '与 alchemy 同源，阿拉伯语 al-kimiya。',
      prefix: null,
      root: { text: 'chemical', gloss: '化学的' },
      suffix: null,
      history: [
        { label: 'chemical', text: '与 alchemy 同源，阿拉伯语 al-kimiya。' },
        { label: '现在', text: '核心用法是：化学的。' },
      ],
      formationLogic: '考试认现在的用法：化学的。',
      mnemonic: '看到 chemical，先说出「化学的」。',
      note: '考试认现在的用法：化学的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was chemical.', chinese: '即使是初读者也能看出，这个结果是化学的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chemical.s1', en: 'They wanted a chemical answer, not a long speech.', zh: '他们要一个化学的的答复，不要长篇发言。', structure: 'chemical / 表示 / 化学的', grammar: 'adjective，围绕「化学的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are chemical.', right: 'The news is chemical.', reason: 'news 作主语时动词用单数。', rule: '先确定 chemical 是adjective，再套「化学的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chemical.q1', senseId: 'chemical.s1', errorType: 'meaning', type: '词义选择', prompt: '「chemical」在本条的核心意思是：', options: ['化学的', '完全相反的意思', '一种古代钱币'], answer: '化学的', explain: 'chemical：化学的。' },
      { id: 'chemical.q2', senseId: 'chemical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chemical?', options: ['化学的', 'a kind of ancient coin', 'the past tense of be'], answer: '化学的', explain: '对的是「化学的」。' },
      { id: 'chemical.q3', senseId: 'chemical.s1', errorType: 'grammar', type: '词义选择', prompt: 'chemical 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'chemical.q4', senseId: 'chemical.s1', errorType: 'meaning', type: '词源', prompt: '记 chemical 时，哪句更稳妥？', options: ['先锁住「化学的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「化学的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化学的'] },
  });

  D('chemical-free', {
    etymology: {
      origin: '现代英语常用词「chemical-free」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chemical-free', gloss: '不含化学物质的' },
      suffix: null,
      history: [
        { label: 'chemical-free', text: '现代英语常用词「chemical-free」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：不含化学物质的。' },
      ],
      formationLogic: '核心义：不含化学物质的。',
      mnemonic: '看到 chemical-free，先说出「不含化学物质的」。',
      note: '核心义：不含化学物质的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was chemical-free.', chinese: '即使是初读者也能看出，这个结果是不含化学物质的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chemical-free.s1', en: 'They wanted a chemical-free answer, not a long speech.', zh: '他们要一个不含化学物质的的答复，不要长篇发言。', structure: 'chemical-free / 表示 / 不含化学物质的', grammar: 'adjective，围绕「不含化学物质的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are chemical-free.', right: 'The news is chemical-free.', reason: 'news 作主语时动词用单数。', rule: '先确定 chemical-free 是adjective，再套「不含化学物质的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chemical-free.q1', senseId: 'chemical-free.s1', errorType: 'meaning', type: '词义选择', prompt: '「chemical-free」在本条的核心意思是：', options: ['不含化学物质的', '完全相反的意思', '一种古代钱币'], answer: '不含化学物质的', explain: 'chemical-free：不含化学物质的。' },
      { id: 'chemical-free.q2', senseId: 'chemical-free.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chemical-free?', options: ['不含化学物质的', 'a kind of ancient coin', 'the past tense of be'], answer: '不含化学物质的', explain: '对的是「不含化学物质的」。' },
      { id: 'chemical-free.q3', senseId: 'chemical-free.s1', errorType: 'grammar', type: '词义选择', prompt: 'chemical-free 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'chemical-free.q4', senseId: 'chemical-free.s1', errorType: 'meaning', type: '词源', prompt: '记 chemical-free 时，哪句更稳妥？', options: ['先锁住「不含化学物质的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「不含化学物质的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['不含化学物质的'] },
  });

  D('chemist', {
    etymology: {
      origin: '英语派生：chem + -ist，词性转到「化学家」。',
      prefix: null,
      root: { text: 'chem', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chemist', text: '英语派生：chem + -ist，词性转到「化学家」。' },
        { label: '现在', text: '核心用法是：化学家。' },
      ],
      formationLogic: '先认词干 chem，再看词尾。',
      mnemonic: '看到 chemist，先说出「化学家」。',
      note: '先认词干 chem，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chemist.', chinese: '这一章反复回到同一个点：化学家。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chemist.s1', en: 'Without that chemist, the next paragraph is hard to follow.', zh: '没有这个化学家，下一段会很难读。', structure: 'chemist / 表示 / 化学家', grammar: 'noun，围绕「化学家」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chemist.', right: 'He gave me some advice about the chemist.', reason: 'advice 不可数。名词 chemist 的单复数按词典词形记。', rule: '先确定 chemist 是noun，再套「化学家」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chemist.q1', senseId: 'chemist.s1', errorType: 'meaning', type: '词义选择', prompt: '「chemist」在本条的核心意思是：', options: ['化学家', '完全相反的意思', '一种古代钱币'], answer: '化学家', explain: 'chemist：化学家。' },
      { id: 'chemist.q2', senseId: 'chemist.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chemist?', options: ['化学家', 'a kind of ancient coin', 'the past tense of be'], answer: '化学家', explain: '对的是「化学家」。' },
      { id: 'chemist.q3', senseId: 'chemist.s1', errorType: 'grammar', type: '词义选择', prompt: 'chemist 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chemist.q4', senseId: 'chemist.s1', errorType: 'meaning', type: '词源', prompt: '记 chemist 时，哪句更稳妥？', options: ['先锁住「化学家」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「化学家」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化学家'] },
  });

  D('chemistry', {
    etymology: {
      origin: '由 alchemy 变来的学科名。',
      prefix: null,
      root: { text: 'chemistry', gloss: '化学' },
      suffix: null,
      history: [
        { label: 'chemistry', text: '由 alchemy 变来的学科名。' },
        { label: '现在', text: '核心用法是：化学。' },
      ],
      formationLogic: '考试认现在的用法：化学。',
      mnemonic: '看到 chemistry，先说出「化学」。',
      note: '考试认现在的用法：化学。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chemistry.', chinese: '这一章反复回到同一个点：化学。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chemistry.s1', en: 'Without that chemistry, the next paragraph is hard to follow.', zh: '没有这个化学，下一段会很难读。', structure: 'chemistry / 表示 / 化学', grammar: 'noun，围绕「化学」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chemistry.', right: 'He gave me some advice about the chemistry.', reason: 'advice 不可数。名词 chemistry 的单复数按词典词形记。', rule: '先确定 chemistry 是noun，再套「化学」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chemistry.q1', senseId: 'chemistry.s1', errorType: 'meaning', type: '词义选择', prompt: '「chemistry」在本条的核心意思是：', options: ['化学', '完全相反的意思', '一种古代钱币'], answer: '化学', explain: 'chemistry：化学。' },
      { id: 'chemistry.q2', senseId: 'chemistry.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chemistry?', options: ['化学', 'a kind of ancient coin', 'the past tense of be'], answer: '化学', explain: '对的是「化学」。' },
      { id: 'chemistry.q3', senseId: 'chemistry.s1', errorType: 'grammar', type: '词义选择', prompt: 'chemistry 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chemistry.q4', senseId: 'chemistry.s1', errorType: 'meaning', type: '词源', prompt: '记 chemistry 时，哪句更稳妥？', options: ['先锁住「化学」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「化学」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['化学'] },
  });

  D('cherish', {
    etymology: {
      origin: '现代英语常用词「cherish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cherish', gloss: '珍爱' },
      suffix: null,
      history: [
        { label: 'cherish', text: '现代英语常用词「cherish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：珍爱。' },
      ],
      formationLogic: '核心义：珍爱。',
      mnemonic: '看到 cherish，先说出「珍爱」。',
      note: '核心义：珍爱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to cherish before the office closed.', chinese: '他们同意在办公室关门前做这件事：珍爱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cherish.s1', en: 'The deadline forced the team to cherish that afternoon.', zh: '截止日期逼着小组在那天下午珍爱。', structure: 'cherish / 表示 / 珍爱', grammar: 'verb，围绕「珍爱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She cherished it yesterday without checking the real past form.', right: 'Check the past form of "cherish" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 cherish 是verb，再套「珍爱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cherish.q1', senseId: 'cherish.s1', errorType: 'meaning', type: '词义选择', prompt: '「cherish」在本条的核心意思是：', options: ['珍爱', '完全相反的意思', '一种古代钱币'], answer: '珍爱', explain: 'cherish：珍爱。' },
      { id: 'cherish.q2', senseId: 'cherish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cherish?', options: ['珍爱', 'a kind of ancient coin', 'the past tense of be'], answer: '珍爱', explain: '对的是「珍爱」。' },
      { id: 'cherish.q3', senseId: 'cherish.s1', errorType: 'grammar', type: '词义选择', prompt: 'cherish 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'cherish.q4', senseId: 'cherish.s1', errorType: 'meaning', type: '词源', prompt: '记 cherish 时，哪句更稳妥？', options: ['先锁住「珍爱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「珍爱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['珍爱'] },
  });

  D('cherished', {
    etymology: {
      origin: '现代英语常用词「cherished」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cherished', gloss: '珍爱的' },
      suffix: null,
      history: [
        { label: 'cherished', text: '现代英语常用词「cherished」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：珍爱的。' },
      ],
      formationLogic: '核心义：珍爱的。',
      mnemonic: '看到 cherished，先说出「珍爱的」。',
      note: '核心义：珍爱的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was cherished.', chinese: '即使是初读者也能看出，这个结果是珍爱的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cherished.s1', en: 'They wanted a cherished answer, not a long speech.', zh: '他们要一个珍爱的的答复，不要长篇发言。', structure: 'cherished / 表示 / 珍爱的', grammar: 'adjective，围绕「珍爱的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are cherished.', right: 'The news is cherished.', reason: 'news 作主语时动词用单数。', rule: '先确定 cherished 是adjective，再套「珍爱的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cherished.q1', senseId: 'cherished.s1', errorType: 'meaning', type: '词义选择', prompt: '「cherished」在本条的核心意思是：', options: ['珍爱的', '完全相反的意思', '一种古代钱币'], answer: '珍爱的', explain: 'cherished：珍爱的。' },
      { id: 'cherished.q2', senseId: 'cherished.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cherished?', options: ['珍爱的', 'a kind of ancient coin', 'the past tense of be'], answer: '珍爱的', explain: '对的是「珍爱的」。' },
      { id: 'cherished.q3', senseId: 'cherished.s1', errorType: 'grammar', type: '词义选择', prompt: 'cherished 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'cherished.q4', senseId: 'cherished.s1', errorType: 'meaning', type: '词源', prompt: '记 cherished 时，哪句更稳妥？', options: ['先锁住「珍爱的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「珍爱的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['珍爱的'] },
  });

  D('chess', {
    etymology: {
      origin: '现代英语常用词「chess」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chess', gloss: '国际象棋' },
      suffix: null,
      history: [
        { label: 'chess', text: '现代英语常用词「chess」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：国际象棋。' },
      ],
      formationLogic: '核心义：国际象棋。',
      mnemonic: '看到 chess，先说出「国际象棋」。',
      note: '核心义：国际象棋。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chess.', chinese: '这一章反复回到同一个点：国际象棋。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chess.s1', en: 'Without that chess, the next paragraph is hard to follow.', zh: '没有这个国际象棋，下一段会很难读。', structure: 'chess / 表示 / 国际象棋', grammar: 'noun，围绕「国际象棋」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chess.', right: 'He gave me some advice about the chess.', reason: 'advice 不可数。名词 chess 的单复数按词典词形记。', rule: '先确定 chess 是noun，再套「国际象棋」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chess.q1', senseId: 'chess.s1', errorType: 'meaning', type: '词义选择', prompt: '「chess」在本条的核心意思是：', options: ['国际象棋', '完全相反的意思', '一种古代钱币'], answer: '国际象棋', explain: 'chess：国际象棋。' },
      { id: 'chess.q2', senseId: 'chess.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chess?', options: ['国际象棋', 'a kind of ancient coin', 'the past tense of be'], answer: '国际象棋', explain: '对的是「国际象棋」。' },
      { id: 'chess.q3', senseId: 'chess.s1', errorType: 'grammar', type: '词义选择', prompt: 'chess 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chess.q4', senseId: 'chess.s1', errorType: 'meaning', type: '词源', prompt: '记 chess 时，哪句更稳妥？', options: ['先锁住「国际象棋」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「国际象棋」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['国际象棋'] },
  });

  D('chessman', {
    etymology: {
      origin: '现代英语常用词「chessman」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chessman', gloss: '国际象棋棋子' },
      suffix: null,
      history: [
        { label: 'chessman', text: '现代英语常用词「chessman」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：国际象棋棋子。' },
      ],
      formationLogic: '核心义：国际象棋棋子。',
      mnemonic: '看到 chessman，先说出「国际象棋棋子」。',
      note: '核心义：国际象棋棋子。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chessman.', chinese: '这一章反复回到同一个点：国际象棋棋子。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chessman.s1', en: 'Without that chessman, the next paragraph is hard to follow.', zh: '没有这个国际象棋棋子，下一段会很难读。', structure: 'chessman / 表示 / 国际象棋棋子', grammar: 'noun，围绕「国际象棋棋子」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chessman.', right: 'He gave me some advice about the chessman.', reason: 'advice 不可数。名词 chessman 的单复数按词典词形记。', rule: '先确定 chessman 是noun，再套「国际象棋棋子」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chessman.q1', senseId: 'chessman.s1', errorType: 'meaning', type: '词义选择', prompt: '「chessman」在本条的核心意思是：', options: ['国际象棋棋子', '完全相反的意思', '一种古代钱币'], answer: '国际象棋棋子', explain: 'chessman：国际象棋棋子。' },
      { id: 'chessman.q2', senseId: 'chessman.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chessman?', options: ['国际象棋棋子', 'a kind of ancient coin', 'the past tense of be'], answer: '国际象棋棋子', explain: '对的是「国际象棋棋子」。' },
      { id: 'chessman.q3', senseId: 'chessman.s1', errorType: 'grammar', type: '词义选择', prompt: 'chessman 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chessman.q4', senseId: 'chessman.s1', errorType: 'meaning', type: '词源', prompt: '记 chessman 时，哪句更稳妥？', options: ['先锁住「国际象棋棋子」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「国际象棋棋子」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['国际象棋棋子'] },
  });

  D('chest', {
    etymology: {
      origin: '希腊语 kistē「箱子」。胸腔也像一只箱子。',
      prefix: null,
      root: { text: 'chest', gloss: '胸部' },
      suffix: null,
      history: [
        { label: 'chest', text: '希腊语 kistē「箱子」。胸腔也像一只箱子。' },
        { label: '现在', text: '核心用法是：胸部。' },
      ],
      formationLogic: '考试认现在的用法：胸部。',
      mnemonic: '看到 chest，先说出「胸部」。',
      note: '考试认现在的用法：胸部。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chest.', chinese: '这一章反复回到同一个点：胸部。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chest.s1', en: 'Without that chest, the next paragraph is hard to follow.', zh: '没有这个胸部，下一段会很难读。', structure: 'chest / 表示 / 胸部', grammar: 'noun，围绕「胸部」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chest.', right: 'He gave me some advice about the chest.', reason: 'advice 不可数。名词 chest 的单复数按词典词形记。', rule: '先确定 chest 是noun，再套「胸部」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chest.q1', senseId: 'chest.s1', errorType: 'meaning', type: '词义选择', prompt: '「chest」在本条的核心意思是：', options: ['胸部', '完全相反的意思', '一种古代钱币'], answer: '胸部', explain: 'chest：胸部。' },
      { id: 'chest.q2', senseId: 'chest.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chest?', options: ['胸部', 'a kind of ancient coin', 'the past tense of be'], answer: '胸部', explain: '对的是「胸部」。' },
      { id: 'chest.q3', senseId: 'chest.s1', errorType: 'grammar', type: '词义选择', prompt: 'chest 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chest.q4', senseId: 'chest.s1', errorType: 'meaning', type: '词源', prompt: '记 chest 时，哪句更稳妥？', options: ['先锁住「胸部」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「胸部」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['胸部'] },
  });

  D('chevron', {
    etymology: {
      origin: '现代英语常用词「chevron」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chevron', gloss: 'V形臂章' },
      suffix: null,
      history: [
        { label: 'chevron', text: '现代英语常用词「chevron」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：V形臂章。' },
      ],
      formationLogic: '核心义：V形臂章。',
      mnemonic: '看到 chevron，先说出「V形臂章」。',
      note: '核心义：V形臂章。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chevron.', chinese: '这一章反复回到同一个点：V形臂章。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chevron.s1', en: 'Without that chevron, the next paragraph is hard to follow.', zh: '没有这个V形臂章，下一段会很难读。', structure: 'chevron / 表示 / V形臂章', grammar: 'noun，围绕「V形臂章」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chevron.', right: 'He gave me some advice about the chevron.', reason: 'advice 不可数。名词 chevron 的单复数按词典词形记。', rule: '先确定 chevron 是noun，再套「V形臂章」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chevron.q1', senseId: 'chevron.s1', errorType: 'meaning', type: '词义选择', prompt: '「chevron」在本条的核心意思是：', options: ['V形臂章', '完全相反的意思', '一种古代钱币'], answer: 'V形臂章', explain: 'chevron：V形臂章。' },
      { id: 'chevron.q2', senseId: 'chevron.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chevron?', options: ['V形臂章', 'a kind of ancient coin', 'the past tense of be'], answer: 'V形臂章', explain: '对的是「V形臂章」。' },
      { id: 'chevron.q3', senseId: 'chevron.s1', errorType: 'grammar', type: '词义选择', prompt: 'chevron 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chevron.q4', senseId: 'chevron.s1', errorType: 'meaning', type: '词源', prompt: '记 chevron 时，哪句更稳妥？', options: ['先锁住「V形臂章」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「V形臂章」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['V形臂章'] },
  });

  D('chew', {
    etymology: {
      origin: '现代英语常用词「chew」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chew', gloss: '咀嚼' },
      suffix: null,
      history: [
        { label: 'chew', text: '现代英语常用词「chew」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：咀嚼。' },
      ],
      formationLogic: '核心义：咀嚼。',
      mnemonic: '看到 chew，先说出「咀嚼」。',
      note: '核心义：咀嚼。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chew before the office closed.', chinese: '他们同意在办公室关门前做这件事：咀嚼。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chew.s1', en: 'The deadline forced the team to chew that afternoon.', zh: '截止日期逼着小组在那天下午咀嚼。', structure: 'chew / 表示 / 咀嚼', grammar: 'verb，围绕「咀嚼」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chewed it yesterday without checking the real past form.', right: 'Check the past form of "chew" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chew 是verb，再套「咀嚼」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chew.q1', senseId: 'chew.s1', errorType: 'meaning', type: '词义选择', prompt: '「chew」在本条的核心意思是：', options: ['咀嚼', '完全相反的意思', '一种古代钱币'], answer: '咀嚼', explain: 'chew：咀嚼。' },
      { id: 'chew.q2', senseId: 'chew.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chew?', options: ['咀嚼', 'a kind of ancient coin', 'the past tense of be'], answer: '咀嚼', explain: '对的是「咀嚼」。' },
      { id: 'chew.q3', senseId: 'chew.s1', errorType: 'grammar', type: '词义选择', prompt: 'chew 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chew.q4', senseId: 'chew.s1', errorType: 'meaning', type: '词源', prompt: '记 chew 时，哪句更稳妥？', options: ['先锁住「咀嚼」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「咀嚼」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['咀嚼'] },
  });

  D('chewy', {
    etymology: {
      origin: '现代英语常用词「chewy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chewy', gloss: '有嚼劲的' },
      suffix: null,
      history: [
        { label: 'chewy', text: '现代英语常用词「chewy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：有嚼劲的。' },
      ],
      formationLogic: '核心义：有嚼劲的。',
      mnemonic: '看到 chewy，先说出「有嚼劲的」。',
      note: '核心义：有嚼劲的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was chewy.', chinese: '即使是初读者也能看出，这个结果是有嚼劲的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chewy.s1', en: 'They wanted a chewy answer, not a long speech.', zh: '他们要一个有嚼劲的的答复，不要长篇发言。', structure: 'chewy / 表示 / 有嚼劲的', grammar: 'adjective，围绕「有嚼劲的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are chewy.', right: 'The news is chewy.', reason: 'news 作主语时动词用单数。', rule: '先确定 chewy 是adjective，再套「有嚼劲的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chewy.q1', senseId: 'chewy.s1', errorType: 'meaning', type: '词义选择', prompt: '「chewy」在本条的核心意思是：', options: ['有嚼劲的', '完全相反的意思', '一种古代钱币'], answer: '有嚼劲的', explain: 'chewy：有嚼劲的。' },
      { id: 'chewy.q2', senseId: 'chewy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chewy?', options: ['有嚼劲的', 'a kind of ancient coin', 'the past tense of be'], answer: '有嚼劲的', explain: '对的是「有嚼劲的」。' },
      { id: 'chewy.q3', senseId: 'chewy.s1', errorType: 'grammar', type: '词义选择', prompt: 'chewy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'chewy.q4', senseId: 'chewy.s1', errorType: 'meaning', type: '词源', prompt: '记 chewy 时，哪句更稳妥？', options: ['先锁住「有嚼劲的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「有嚼劲的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['有嚼劲的'] },
  });

  D('chicken', {
    etymology: {
      origin: '古英语 cicen。',
      prefix: null,
      root: { text: 'chicken', gloss: '鸡' },
      suffix: null,
      history: [
        { label: 'chicken', text: '古英语 cicen。' },
        { label: '现在', text: '核心用法是：鸡。' },
      ],
      formationLogic: '考试认现在的用法：鸡。',
      mnemonic: '看到 chicken，先说出「鸡」。',
      note: '考试认现在的用法：鸡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chicken.', chinese: '这一章反复回到同一个点：鸡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chicken.s1', en: 'Without that chicken, the next paragraph is hard to follow.', zh: '没有这个鸡，下一段会很难读。', structure: 'chicken / 表示 / 鸡', grammar: 'noun，围绕「鸡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chicken.', right: 'He gave me some advice about the chicken.', reason: 'advice 不可数。名词 chicken 的单复数按词典词形记。', rule: '先确定 chicken 是noun，再套「鸡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chicken.q1', senseId: 'chicken.s1', errorType: 'meaning', type: '词义选择', prompt: '「chicken」在本条的核心意思是：', options: ['鸡', '完全相反的意思', '一种古代钱币'], answer: '鸡', explain: 'chicken：鸡。' },
      { id: 'chicken.q2', senseId: 'chicken.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chicken?', options: ['鸡', 'a kind of ancient coin', 'the past tense of be'], answer: '鸡', explain: '对的是「鸡」。' },
      { id: 'chicken.q3', senseId: 'chicken.s1', errorType: 'grammar', type: '词义选择', prompt: 'chicken 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chicken.q4', senseId: 'chicken.s1', errorType: 'meaning', type: '词源', prompt: '记 chicken 时，哪句更稳妥？', options: ['先锁住「鸡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鸡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鸡'] },
  });

  D('chickens', {
    etymology: {
      origin: '现代英语常用词「chickens」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chickens', gloss: '鸡' },
      suffix: null,
      history: [
        { label: 'chickens', text: '现代英语常用词「chickens」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：鸡。' },
      ],
      formationLogic: '核心义：鸡。',
      mnemonic: '看到 chickens，先说出「鸡」。',
      note: '核心义：鸡。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chickens.', chinese: '这一章反复回到同一个点：鸡。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chickens.s1', en: 'Without that chickens, the next paragraph is hard to follow.', zh: '没有这个鸡，下一段会很难读。', structure: 'chickens / 表示 / 鸡', grammar: 'noun，围绕「鸡」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chickens.', right: 'He gave me some advice about the chickens.', reason: 'advice 不可数。名词 chickens 的单复数按词典词形记。', rule: '先确定 chickens 是noun，再套「鸡」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chickens.q1', senseId: 'chickens.s1', errorType: 'meaning', type: '词义选择', prompt: '「chickens」在本条的核心意思是：', options: ['鸡', '完全相反的意思', '一种古代钱币'], answer: '鸡', explain: 'chickens：鸡。' },
      { id: 'chickens.q2', senseId: 'chickens.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chickens?', options: ['鸡', 'a kind of ancient coin', 'the past tense of be'], answer: '鸡', explain: '对的是「鸡」。' },
      { id: 'chickens.q3', senseId: 'chickens.s1', errorType: 'grammar', type: '词义选择', prompt: 'chickens 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chickens.q4', senseId: 'chickens.s1', errorType: 'meaning', type: '词源', prompt: '记 chickens 时，哪句更稳妥？', options: ['先锁住「鸡」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「鸡」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['鸡'] },
  });

  D('chief', {
    etymology: {
      origin: '拉丁语 caput「头」，经法语 chef。',
      prefix: null,
      root: { text: 'chief', gloss: '首领' },
      suffix: null,
      history: [
        { label: 'chief', text: '拉丁语 caput「头」，经法语 chef。' },
        { label: '现在', text: '核心用法是：首领。' },
      ],
      formationLogic: '考试认现在的用法：首领。',
      mnemonic: '看到 chief，先说出「首领」。',
      note: '考试认现在的用法：首领。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chief.', chinese: '这一章反复回到同一个点：首领。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chief.s1', en: 'Without that chief, the next paragraph is hard to follow.', zh: '没有这个首领，下一段会很难读。', structure: 'chief / 表示 / 首领', grammar: 'noun，围绕「首领」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chief.', right: 'He gave me some advice about the chief.', reason: 'advice 不可数。名词 chief 的单复数按词典词形记。', rule: '先确定 chief 是noun，再套「首领」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chief.q1', senseId: 'chief.s1', errorType: 'meaning', type: '词义选择', prompt: '「chief」在本条的核心意思是：', options: ['首领', '完全相反的意思', '一种古代钱币'], answer: '首领', explain: 'chief：首领。' },
      { id: 'chief.q2', senseId: 'chief.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chief?', options: ['首领', 'a kind of ancient coin', 'the past tense of be'], answer: '首领', explain: '对的是「首领」。' },
      { id: 'chief.q3', senseId: 'chief.s1', errorType: 'grammar', type: '词义选择', prompt: 'chief 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chief.q4', senseId: 'chief.s1', errorType: 'meaning', type: '词源', prompt: '记 chief 时，哪句更稳妥？', options: ['先锁住「首领」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「首领」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['首领'] },
  });

  D('child', {
    etymology: {
      origin: '古英语 cild。',
      prefix: null,
      root: { text: 'child', gloss: '儿童' },
      suffix: null,
      history: [
        { label: 'child', text: '古英语 cild。' },
        { label: '现在', text: '核心用法是：儿童。' },
      ],
      formationLogic: '考试认现在的用法：儿童。',
      mnemonic: '看到 child，先说出「儿童」。',
      note: '考试认现在的用法：儿童。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one child.', chinese: '这一章反复回到同一个点：儿童。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'child.s1', en: 'Without that child, the next paragraph is hard to follow.', zh: '没有这个儿童，下一段会很难读。', structure: 'child / 表示 / 儿童', grammar: 'noun，围绕「儿童」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the child.', right: 'He gave me some advice about the child.', reason: 'advice 不可数。名词 child 的单复数按词典词形记。', rule: '先确定 child 是noun，再套「儿童」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'child.q1', senseId: 'child.s1', errorType: 'meaning', type: '词义选择', prompt: '「child」在本条的核心意思是：', options: ['儿童', '完全相反的意思', '一种古代钱币'], answer: '儿童', explain: 'child：儿童。' },
      { id: 'child.q2', senseId: 'child.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches child?', options: ['儿童', 'a kind of ancient coin', 'the past tense of be'], answer: '儿童', explain: '对的是「儿童」。' },
      { id: 'child.q3', senseId: 'child.s1', errorType: 'grammar', type: '词义选择', prompt: 'child 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'child.q4', senseId: 'child.s1', errorType: 'meaning', type: '词源', prompt: '记 child 时，哪句更稳妥？', options: ['先锁住「儿童」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「儿童」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['儿童'] },
  });

  D('childbirth', {
    etymology: {
      origin: '现代英语常用词「childbirth」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'childbirth', gloss: '分娩' },
      suffix: null,
      history: [
        { label: 'childbirth', text: '现代英语常用词「childbirth」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：分娩。' },
      ],
      formationLogic: '核心义：分娩。',
      mnemonic: '看到 childbirth，先说出「分娩」。',
      note: '核心义：分娩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one childbirth.', chinese: '这一章反复回到同一个点：分娩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'childbirth.s1', en: 'Without that childbirth, the next paragraph is hard to follow.', zh: '没有这个分娩，下一段会很难读。', structure: 'childbirth / 表示 / 分娩', grammar: 'noun，围绕「分娩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the childbirth.', right: 'He gave me some advice about the childbirth.', reason: 'advice 不可数。名词 childbirth 的单复数按词典词形记。', rule: '先确定 childbirth 是noun，再套「分娩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'childbirth.q1', senseId: 'childbirth.s1', errorType: 'meaning', type: '词义选择', prompt: '「childbirth」在本条的核心意思是：', options: ['分娩', '完全相反的意思', '一种古代钱币'], answer: '分娩', explain: 'childbirth：分娩。' },
      { id: 'childbirth.q2', senseId: 'childbirth.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches childbirth?', options: ['分娩', 'a kind of ancient coin', 'the past tense of be'], answer: '分娩', explain: '对的是「分娩」。' },
      { id: 'childbirth.q3', senseId: 'childbirth.s1', errorType: 'grammar', type: '词义选择', prompt: 'childbirth 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'childbirth.q4', senseId: 'childbirth.s1', errorType: 'meaning', type: '词源', prompt: '记 childbirth 时，哪句更稳妥？', options: ['先锁住「分娩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「分娩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['分娩'] },
  });

  D('childhood', {
    etymology: {
      origin: '现代英语常用词「childhood」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'childhood', gloss: '童年' },
      suffix: null,
      history: [
        { label: 'childhood', text: '现代英语常用词「childhood」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：童年。' },
      ],
      formationLogic: '核心义：童年。',
      mnemonic: '看到 childhood，先说出「童年」。',
      note: '核心义：童年。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one childhood.', chinese: '这一章反复回到同一个点：童年。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'childhood.s1', en: 'Without that childhood, the next paragraph is hard to follow.', zh: '没有这个童年，下一段会很难读。', structure: 'childhood / 表示 / 童年', grammar: 'noun，围绕「童年」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the childhood.', right: 'He gave me some advice about the childhood.', reason: 'advice 不可数。名词 childhood 的单复数按词典词形记。', rule: '先确定 childhood 是noun，再套「童年」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'childhood.q1', senseId: 'childhood.s1', errorType: 'meaning', type: '词义选择', prompt: '「childhood」在本条的核心意思是：', options: ['童年', '完全相反的意思', '一种古代钱币'], answer: '童年', explain: 'childhood：童年。' },
      { id: 'childhood.q2', senseId: 'childhood.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches childhood?', options: ['童年', 'a kind of ancient coin', 'the past tense of be'], answer: '童年', explain: '对的是「童年」。' },
      { id: 'childhood.q3', senseId: 'childhood.s1', errorType: 'grammar', type: '词义选择', prompt: 'childhood 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'childhood.q4', senseId: 'childhood.s1', errorType: 'meaning', type: '词源', prompt: '记 childhood 时，哪句更稳妥？', options: ['先锁住「童年」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「童年」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['童年'] },
  });

  D('childish', {
    etymology: {
      origin: '现代英语常用词「childish」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'childish', gloss: '幼稚的' },
      suffix: null,
      history: [
        { label: 'childish', text: '现代英语常用词「childish」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：幼稚的。' },
      ],
      formationLogic: '核心义：幼稚的。',
      mnemonic: '看到 childish，先说出「幼稚的」。',
      note: '核心义：幼稚的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was childish.', chinese: '即使是初读者也能看出，这个结果是幼稚的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'childish.s1', en: 'They wanted a childish answer, not a long speech.', zh: '他们要一个幼稚的的答复，不要长篇发言。', structure: 'childish / 表示 / 幼稚的', grammar: 'adjective，围绕「幼稚的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are childish.', right: 'The news is childish.', reason: 'news 作主语时动词用单数。', rule: '先确定 childish 是adjective，再套「幼稚的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'childish.q1', senseId: 'childish.s1', errorType: 'meaning', type: '词义选择', prompt: '「childish」在本条的核心意思是：', options: ['幼稚的', '完全相反的意思', '一种古代钱币'], answer: '幼稚的', explain: 'childish：幼稚的。' },
      { id: 'childish.q2', senseId: 'childish.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches childish?', options: ['幼稚的', 'a kind of ancient coin', 'the past tense of be'], answer: '幼稚的', explain: '对的是「幼稚的」。' },
      { id: 'childish.q3', senseId: 'childish.s1', errorType: 'grammar', type: '词义选择', prompt: 'childish 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'childish.q4', senseId: 'childish.s1', errorType: 'meaning', type: '词源', prompt: '记 childish 时，哪句更稳妥？', options: ['先锁住「幼稚的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「幼稚的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['幼稚的'] },
  });

  D('childlike', {
    etymology: {
      origin: '现代英语常用词「childlike」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'childlike', gloss: '天真的' },
      suffix: null,
      history: [
        { label: 'childlike', text: '现代英语常用词「childlike」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：天真的。' },
      ],
      formationLogic: '核心义：天真的。',
      mnemonic: '看到 childlike，先说出「天真的」。',
      note: '核心义：天真的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was childlike.', chinese: '即使是初读者也能看出，这个结果是天真的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'childlike.s1', en: 'They wanted a childlike answer, not a long speech.', zh: '他们要一个天真的的答复，不要长篇发言。', structure: 'childlike / 表示 / 天真的', grammar: 'adjective，围绕「天真的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are childlike.', right: 'The news is childlike.', reason: 'news 作主语时动词用单数。', rule: '先确定 childlike 是adjective，再套「天真的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'childlike.q1', senseId: 'childlike.s1', errorType: 'meaning', type: '词义选择', prompt: '「childlike」在本条的核心意思是：', options: ['天真的', '完全相反的意思', '一种古代钱币'], answer: '天真的', explain: 'childlike：天真的。' },
      { id: 'childlike.q2', senseId: 'childlike.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches childlike?', options: ['天真的', 'a kind of ancient coin', 'the past tense of be'], answer: '天真的', explain: '对的是「天真的」。' },
      { id: 'childlike.q3', senseId: 'childlike.s1', errorType: 'grammar', type: '词义选择', prompt: 'childlike 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'childlike.q4', senseId: 'childlike.s1', errorType: 'meaning', type: '词源', prompt: '记 childlike 时，哪句更稳妥？', options: ['先锁住「天真的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「天真的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['天真的'] },
  });

  D('chill', {
    etymology: {
      origin: '现代英语常用词「chill」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chill', gloss: '寒意' },
      suffix: null,
      history: [
        { label: 'chill', text: '现代英语常用词「chill」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：寒意。' },
      ],
      formationLogic: '核心义：寒意。',
      mnemonic: '看到 chill，先说出「寒意」。',
      note: '核心义：寒意。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chill.', chinese: '这一章反复回到同一个点：寒意。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chill.s1', en: 'Without that chill, the next paragraph is hard to follow.', zh: '没有这个寒意，下一段会很难读。', structure: 'chill / 表示 / 寒意', grammar: 'noun，围绕「寒意」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chill.', right: 'He gave me some advice about the chill.', reason: 'advice 不可数。名词 chill 的单复数按词典词形记。', rule: '先确定 chill 是noun，再套「寒意」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chill.q1', senseId: 'chill.s1', errorType: 'meaning', type: '词义选择', prompt: '「chill」在本条的核心意思是：', options: ['寒意', '完全相反的意思', '一种古代钱币'], answer: '寒意', explain: 'chill：寒意。' },
      { id: 'chill.q2', senseId: 'chill.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chill?', options: ['寒意', 'a kind of ancient coin', 'the past tense of be'], answer: '寒意', explain: '对的是「寒意」。' },
      { id: 'chill.q3', senseId: 'chill.s1', errorType: 'grammar', type: '词义选择', prompt: 'chill 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chill.q4', senseId: 'chill.s1', errorType: 'meaning', type: '词源', prompt: '记 chill 时，哪句更稳妥？', options: ['先锁住「寒意」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「寒意」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['寒意'] },
  });

  D('chiller', {
    etymology: {
      origin: '英语派生：chill + -er，词性转到「冷藏器」。',
      prefix: null,
      root: { text: 'chill', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chiller', text: '英语派生：chill + -er，词性转到「冷藏器」。' },
        { label: '现在', text: '核心用法是：冷藏器。' },
      ],
      formationLogic: '先认词干 chill，再看词尾。',
      mnemonic: '看到 chiller，先说出「冷藏器」。',
      note: '先认词干 chill，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chiller.', chinese: '这一章反复回到同一个点：冷藏器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chiller.s1', en: 'Without that chiller, the next paragraph is hard to follow.', zh: '没有这个冷藏器，下一段会很难读。', structure: 'chiller / 表示 / 冷藏器', grammar: 'noun，围绕「冷藏器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chiller.', right: 'He gave me some advice about the chiller.', reason: 'advice 不可数。名词 chiller 的单复数按词典词形记。', rule: '先确定 chiller 是noun，再套「冷藏器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chiller.q1', senseId: 'chiller.s1', errorType: 'meaning', type: '词义选择', prompt: '「chiller」在本条的核心意思是：', options: ['冷藏器', '完全相反的意思', '一种古代钱币'], answer: '冷藏器', explain: 'chiller：冷藏器。' },
      { id: 'chiller.q2', senseId: 'chiller.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chiller?', options: ['冷藏器', 'a kind of ancient coin', 'the past tense of be'], answer: '冷藏器', explain: '对的是「冷藏器」。' },
      { id: 'chiller.q3', senseId: 'chiller.s1', errorType: 'grammar', type: '词义选择', prompt: 'chiller 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chiller.q4', senseId: 'chiller.s1', errorType: 'meaning', type: '词源', prompt: '记 chiller 时，哪句更稳妥？', options: ['先锁住「冷藏器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「冷藏器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['冷藏器'] },
  });

  D('chilly', {
    etymology: {
      origin: '英语派生：chil + -ly，词性转到「寒冷的」。',
      prefix: null,
      root: { text: 'chil', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chilly', text: '英语派生：chil + -ly，词性转到「寒冷的」。' },
        { label: '现在', text: '核心用法是：寒冷的。' },
      ],
      formationLogic: '先认词干 chil，再看词尾。',
      mnemonic: '看到 chilly，先说出「寒冷的」。',
      note: '先认词干 chil，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was chilly.', chinese: '即使是初读者也能看出，这个结果是寒冷的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chilly.s1', en: 'They wanted a chilly answer, not a long speech.', zh: '他们要一个寒冷的的答复，不要长篇发言。', structure: 'chilly / 表示 / 寒冷的', grammar: 'adjective，围绕「寒冷的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are chilly.', right: 'The news is chilly.', reason: 'news 作主语时动词用单数。', rule: '先确定 chilly 是adjective，再套「寒冷的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chilly.q1', senseId: 'chilly.s1', errorType: 'meaning', type: '词义选择', prompt: '「chilly」在本条的核心意思是：', options: ['寒冷的', '完全相反的意思', '一种古代钱币'], answer: '寒冷的', explain: 'chilly：寒冷的。' },
      { id: 'chilly.q2', senseId: 'chilly.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chilly?', options: ['寒冷的', 'a kind of ancient coin', 'the past tense of be'], answer: '寒冷的', explain: '对的是「寒冷的」。' },
      { id: 'chilly.q3', senseId: 'chilly.s1', errorType: 'grammar', type: '词义选择', prompt: 'chilly 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'chilly.q4', senseId: 'chilly.s1', errorType: 'meaning', type: '词源', prompt: '记 chilly 时，哪句更稳妥？', options: ['先锁住「寒冷的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「寒冷的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['寒冷的'] },
  });

  D('chime', {
    etymology: {
      origin: '现代英语常用词「chime」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chime', gloss: '钟声' },
      suffix: null,
      history: [
        { label: 'chime', text: '现代英语常用词「chime」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：钟声。' },
      ],
      formationLogic: '核心义：钟声。',
      mnemonic: '看到 chime，先说出「钟声」。',
      note: '核心义：钟声。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chime.', chinese: '这一章反复回到同一个点：钟声。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chime.s1', en: 'Without that chime, the next paragraph is hard to follow.', zh: '没有这个钟声，下一段会很难读。', structure: 'chime / 表示 / 钟声', grammar: 'noun，围绕「钟声」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chime.', right: 'He gave me some advice about the chime.', reason: 'advice 不可数。名词 chime 的单复数按词典词形记。', rule: '先确定 chime 是noun，再套「钟声」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chime.q1', senseId: 'chime.s1', errorType: 'meaning', type: '词义选择', prompt: '「chime」在本条的核心意思是：', options: ['钟声', '完全相反的意思', '一种古代钱币'], answer: '钟声', explain: 'chime：钟声。' },
      { id: 'chime.q2', senseId: 'chime.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chime?', options: ['钟声', 'a kind of ancient coin', 'the past tense of be'], answer: '钟声', explain: '对的是「钟声」。' },
      { id: 'chime.q3', senseId: 'chime.s1', errorType: 'grammar', type: '词义选择', prompt: 'chime 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chime.q4', senseId: 'chime.s1', errorType: 'meaning', type: '词源', prompt: '记 chime 时，哪句更稳妥？', options: ['先锁住「钟声」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「钟声」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['钟声'] },
  });

  D('chimney', {
    etymology: {
      origin: '希腊语 kaminos「炉子」，经法语。',
      prefix: null,
      root: { text: 'chimney', gloss: '烟囱' },
      suffix: null,
      history: [
        { label: 'chimney', text: '希腊语 kaminos「炉子」，经法语。' },
        { label: '现在', text: '核心用法是：烟囱。' },
      ],
      formationLogic: '考试认现在的用法：烟囱。',
      mnemonic: '看到 chimney，先说出「烟囱」。',
      note: '考试认现在的用法：烟囱。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chimney.', chinese: '这一章反复回到同一个点：烟囱。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chimney.s1', en: 'Without that chimney, the next paragraph is hard to follow.', zh: '没有这个烟囱，下一段会很难读。', structure: 'chimney / 表示 / 烟囱', grammar: 'noun，围绕「烟囱」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chimney.', right: 'He gave me some advice about the chimney.', reason: 'advice 不可数。名词 chimney 的单复数按词典词形记。', rule: '先确定 chimney 是noun，再套「烟囱」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chimney.q1', senseId: 'chimney.s1', errorType: 'meaning', type: '词义选择', prompt: '「chimney」在本条的核心意思是：', options: ['烟囱', '完全相反的意思', '一种古代钱币'], answer: '烟囱', explain: 'chimney：烟囱。' },
      { id: 'chimney.q2', senseId: 'chimney.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chimney?', options: ['烟囱', 'a kind of ancient coin', 'the past tense of be'], answer: '烟囱', explain: '对的是「烟囱」。' },
      { id: 'chimney.q3', senseId: 'chimney.s1', errorType: 'grammar', type: '词义选择', prompt: 'chimney 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chimney.q4', senseId: 'chimney.s1', errorType: 'meaning', type: '词源', prompt: '记 chimney 时，哪句更稳妥？', options: ['先锁住「烟囱」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「烟囱」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['烟囱'] },
  });

  D('chimpanzee', {
    etymology: {
      origin: '现代英语常用词「chimpanzee」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chimpanzee', gloss: '黑猩猩' },
      suffix: null,
      history: [
        { label: 'chimpanzee', text: '现代英语常用词「chimpanzee」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：黑猩猩。' },
      ],
      formationLogic: '核心义：黑猩猩。',
      mnemonic: '看到 chimpanzee，先说出「黑猩猩」。',
      note: '核心义：黑猩猩。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chimpanzee.', chinese: '这一章反复回到同一个点：黑猩猩。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chimpanzee.s1', en: 'Without that chimpanzee, the next paragraph is hard to follow.', zh: '没有这个黑猩猩，下一段会很难读。', structure: 'chimpanzee / 表示 / 黑猩猩', grammar: 'noun，围绕「黑猩猩」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chimpanzee.', right: 'He gave me some advice about the chimpanzee.', reason: 'advice 不可数。名词 chimpanzee 的单复数按词典词形记。', rule: '先确定 chimpanzee 是noun，再套「黑猩猩」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chimpanzee.q1', senseId: 'chimpanzee.s1', errorType: 'meaning', type: '词义选择', prompt: '「chimpanzee」在本条的核心意思是：', options: ['黑猩猩', '完全相反的意思', '一种古代钱币'], answer: '黑猩猩', explain: 'chimpanzee：黑猩猩。' },
      { id: 'chimpanzee.q2', senseId: 'chimpanzee.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chimpanzee?', options: ['黑猩猩', 'a kind of ancient coin', 'the past tense of be'], answer: '黑猩猩', explain: '对的是「黑猩猩」。' },
      { id: 'chimpanzee.q3', senseId: 'chimpanzee.s1', errorType: 'grammar', type: '词义选择', prompt: 'chimpanzee 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chimpanzee.q4', senseId: 'chimpanzee.s1', errorType: 'meaning', type: '词源', prompt: '记 chimpanzee 时，哪句更稳妥？', options: ['先锁住「黑猩猩」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「黑猩猩」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['黑猩猩'] },
  });

  D('chin', {
    etymology: {
      origin: '古英语 cin。',
      prefix: null,
      root: { text: 'chin', gloss: '下巴' },
      suffix: null,
      history: [
        { label: 'chin', text: '古英语 cin。' },
        { label: '现在', text: '核心用法是：下巴。' },
      ],
      formationLogic: '考试认现在的用法：下巴。',
      mnemonic: '看到 chin，先说出「下巴」。',
      note: '考试认现在的用法：下巴。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chin.', chinese: '这一章反复回到同一个点：下巴。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chin.s1', en: 'Without that chin, the next paragraph is hard to follow.', zh: '没有这个下巴，下一段会很难读。', structure: 'chin / 表示 / 下巴', grammar: 'noun，围绕「下巴」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chin.', right: 'He gave me some advice about the chin.', reason: 'advice 不可数。名词 chin 的单复数按词典词形记。', rule: '先确定 chin 是noun，再套「下巴」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chin.q1', senseId: 'chin.s1', errorType: 'meaning', type: '词义选择', prompt: '「chin」在本条的核心意思是：', options: ['下巴', '完全相反的意思', '一种古代钱币'], answer: '下巴', explain: 'chin：下巴。' },
      { id: 'chin.q2', senseId: 'chin.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chin?', options: ['下巴', 'a kind of ancient coin', 'the past tense of be'], answer: '下巴', explain: '对的是「下巴」。' },
      { id: 'chin.q3', senseId: 'chin.s1', errorType: 'grammar', type: '词义选择', prompt: 'chin 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chin.q4', senseId: 'chin.s1', errorType: 'meaning', type: '词源', prompt: '记 chin 时，哪句更稳妥？', options: ['先锁住「下巴」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「下巴」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['下巴'] },
  });

  D('china', {
    etymology: {
      origin: '国名 China。瓷器因来自中国而得名。',
      prefix: null,
      root: { text: 'china', gloss: '瓷器' },
      suffix: null,
      history: [
        { label: 'china', text: '国名 China。瓷器因来自中国而得名。' },
        { label: '现在', text: '核心用法是：瓷器。' },
      ],
      formationLogic: '考试认现在的用法：瓷器。',
      mnemonic: '看到 china，先说出「瓷器」。',
      note: '考试认现在的用法：瓷器。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one china.', chinese: '这一章反复回到同一个点：瓷器。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'china.s1', en: 'Without that china, the next paragraph is hard to follow.', zh: '没有这个瓷器，下一段会很难读。', structure: 'china / 表示 / 瓷器', grammar: 'noun，围绕「瓷器」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the china.', right: 'He gave me some advice about the china.', reason: 'advice 不可数。名词 china 的单复数按词典词形记。', rule: '先确定 china 是noun，再套「瓷器」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'china.q1', senseId: 'china.s1', errorType: 'meaning', type: '词义选择', prompt: '「china」在本条的核心意思是：', options: ['瓷器', '完全相反的意思', '一种古代钱币'], answer: '瓷器', explain: 'china：瓷器。' },
      { id: 'china.q2', senseId: 'china.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches china?', options: ['瓷器', 'a kind of ancient coin', 'the past tense of be'], answer: '瓷器', explain: '对的是「瓷器」。' },
      { id: 'china.q3', senseId: 'china.s1', errorType: 'grammar', type: '词义选择', prompt: 'china 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'china.q4', senseId: 'china.s1', errorType: 'meaning', type: '词源', prompt: '记 china 时，哪句更稳妥？', options: ['先锁住「瓷器」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「瓷器」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['瓷器'] },
  });

  D('chip', {
    etymology: {
      origin: '现代英语常用词「chip」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chip', gloss: '薯条' },
      suffix: null,
      history: [
        { label: 'chip', text: '现代英语常用词「chip」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：薯条。' },
      ],
      formationLogic: '核心义：薯条。',
      mnemonic: '看到 chip，先说出「薯条」。',
      note: '核心义：薯条。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chip.', chinese: '这一章反复回到同一个点：薯条。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chip.s1', en: 'Without that chip, the next paragraph is hard to follow.', zh: '没有这个薯条，下一段会很难读。', structure: 'chip / 表示 / 薯条', grammar: 'noun，围绕「薯条」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chip.', right: 'He gave me some advice about the chip.', reason: 'advice 不可数。名词 chip 的单复数按词典词形记。', rule: '先确定 chip 是noun，再套「薯条」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chip.q1', senseId: 'chip.s1', errorType: 'meaning', type: '词义选择', prompt: '「chip」在本条的核心意思是：', options: ['薯条', '完全相反的意思', '一种古代钱币'], answer: '薯条', explain: 'chip：薯条。' },
      { id: 'chip.q2', senseId: 'chip.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chip?', options: ['薯条', 'a kind of ancient coin', 'the past tense of be'], answer: '薯条', explain: '对的是「薯条」。' },
      { id: 'chip.q3', senseId: 'chip.s1', errorType: 'grammar', type: '词义选择', prompt: 'chip 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chip.q4', senseId: 'chip.s1', errorType: 'meaning', type: '词源', prompt: '记 chip 时，哪句更稳妥？', options: ['先锁住「薯条」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「薯条」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['薯条'] },
  });

  D('chips', {
    etymology: {
      origin: '现代英语常用词「chips」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chips', gloss: '炸薯条' },
      suffix: null,
      history: [
        { label: 'chips', text: '现代英语常用词「chips」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：炸薯条。' },
      ],
      formationLogic: '核心义：炸薯条。',
      mnemonic: '看到 chips，先说出「炸薯条」。',
      note: '核心义：炸薯条。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chips.', chinese: '这一章反复回到同一个点：炸薯条。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chips.s1', en: 'Without that chips, the next paragraph is hard to follow.', zh: '没有这个炸薯条，下一段会很难读。', structure: 'chips / 表示 / 炸薯条', grammar: 'noun，围绕「炸薯条」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chips.', right: 'He gave me some advice about the chips.', reason: 'advice 不可数。名词 chips 的单复数按词典词形记。', rule: '先确定 chips 是noun，再套「炸薯条」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chips.q1', senseId: 'chips.s1', errorType: 'meaning', type: '词义选择', prompt: '「chips」在本条的核心意思是：', options: ['炸薯条', '完全相反的意思', '一种古代钱币'], answer: '炸薯条', explain: 'chips：炸薯条。' },
      { id: 'chips.q2', senseId: 'chips.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chips?', options: ['炸薯条', 'a kind of ancient coin', 'the past tense of be'], answer: '炸薯条', explain: '对的是「炸薯条」。' },
      { id: 'chips.q3', senseId: 'chips.s1', errorType: 'grammar', type: '词义选择', prompt: 'chips 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chips.q4', senseId: 'chips.s1', errorType: 'meaning', type: '词源', prompt: '记 chips 时，哪句更稳妥？', options: ['先锁住「炸薯条」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「炸薯条」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['炸薯条'] },
  });

  D('chirp', {
    etymology: {
      origin: '现代英语常用词「chirp」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chirp', gloss: '（鸟、虫）啁啾' },
      suffix: null,
      history: [
        { label: 'chirp', text: '现代英语常用词「chirp」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（鸟、虫）啁啾。' },
      ],
      formationLogic: '核心义：（鸟、虫）啁啾。',
      mnemonic: '看到 chirp，先说出「（鸟、虫）啁啾」。',
      note: '核心义：（鸟、虫）啁啾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chirp before the office closed.', chinese: '他们同意在办公室关门前做这件事：（鸟、虫）啁啾。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chirp.s1', en: 'The deadline forced the team to chirp that afternoon.', zh: '截止日期逼着小组在那天下午（鸟、虫）啁啾。', structure: 'chirp / 表示 / （鸟、虫）啁啾', grammar: 'verb，围绕「（鸟、虫）啁啾」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chirped it yesterday without checking the real past form.', right: 'Check the past form of "chirp" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chirp 是verb，再套「（鸟、虫）啁啾」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chirp.q1', senseId: 'chirp.s1', errorType: 'meaning', type: '词义选择', prompt: '「chirp」在本条的核心意思是：', options: ['（鸟、虫）啁啾', '完全相反的意思', '一种古代钱币'], answer: '（鸟、虫）啁啾', explain: 'chirp：（鸟、虫）啁啾。' },
      { id: 'chirp.q2', senseId: 'chirp.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chirp?', options: ['（鸟、虫）啁啾', 'a kind of ancient coin', 'the past tense of be'], answer: '（鸟、虫）啁啾', explain: '对的是「（鸟、虫）啁啾」。' },
      { id: 'chirp.q3', senseId: 'chirp.s1', errorType: 'grammar', type: '词义选择', prompt: 'chirp 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chirp.q4', senseId: 'chirp.s1', errorType: 'meaning', type: '词源', prompt: '记 chirp 时，哪句更稳妥？', options: ['先锁住「（鸟、虫）啁啾」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（鸟、虫）啁啾」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（鸟、虫）啁啾'] },
  });

  D('chock', {
    etymology: {
      origin: '现代英语常用词「chock」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chock', gloss: '掩木' },
      suffix: null,
      history: [
        { label: 'chock', text: '现代英语常用词「chock」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：掩木。' },
      ],
      formationLogic: '核心义：掩木。',
      mnemonic: '看到 chock，先说出「掩木」。',
      note: '核心义：掩木。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chock.', chinese: '这一章反复回到同一个点：掩木。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chock.s1', en: 'Without that chock, the next paragraph is hard to follow.', zh: '没有这个掩木，下一段会很难读。', structure: 'chock / 表示 / 掩木', grammar: 'noun，围绕「掩木」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chock.', right: 'He gave me some advice about the chock.', reason: 'advice 不可数。名词 chock 的单复数按词典词形记。', rule: '先确定 chock 是noun，再套「掩木」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chock.q1', senseId: 'chock.s1', errorType: 'meaning', type: '词义选择', prompt: '「chock」在本条的核心意思是：', options: ['掩木', '完全相反的意思', '一种古代钱币'], answer: '掩木', explain: 'chock：掩木。' },
      { id: 'chock.q2', senseId: 'chock.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chock?', options: ['掩木', 'a kind of ancient coin', 'the past tense of be'], answer: '掩木', explain: '对的是「掩木」。' },
      { id: 'chock.q3', senseId: 'chock.s1', errorType: 'grammar', type: '词义选择', prompt: 'chock 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chock.q4', senseId: 'chock.s1', errorType: 'meaning', type: '词源', prompt: '记 chock 时，哪句更稳妥？', options: ['先锁住「掩木」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「掩木」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['掩木'] },
  });

  D('chocolate', {
    etymology: {
      origin: '纳瓦特尔语 xocolatl，经西班牙语。',
      prefix: null,
      root: { text: 'chocolate', gloss: '巧克力' },
      suffix: null,
      history: [
        { label: 'chocolate', text: '纳瓦特尔语 xocolatl，经西班牙语。' },
        { label: '现在', text: '核心用法是：巧克力。' },
      ],
      formationLogic: '考试认现在的用法：巧克力。',
      mnemonic: '看到 chocolate，先说出「巧克力」。',
      note: '考试认现在的用法：巧克力。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chocolate.', chinese: '这一章反复回到同一个点：巧克力。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chocolate.s1', en: 'Without that chocolate, the next paragraph is hard to follow.', zh: '没有这个巧克力，下一段会很难读。', structure: 'chocolate / 表示 / 巧克力', grammar: 'noun，围绕「巧克力」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chocolate.', right: 'He gave me some advice about the chocolate.', reason: 'advice 不可数。名词 chocolate 的单复数按词典词形记。', rule: '先确定 chocolate 是noun，再套「巧克力」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chocolate.q1', senseId: 'chocolate.s1', errorType: 'meaning', type: '词义选择', prompt: '「chocolate」在本条的核心意思是：', options: ['巧克力', '完全相反的意思', '一种古代钱币'], answer: '巧克力', explain: 'chocolate：巧克力。' },
      { id: 'chocolate.q2', senseId: 'chocolate.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chocolate?', options: ['巧克力', 'a kind of ancient coin', 'the past tense of be'], answer: '巧克力', explain: '对的是「巧克力」。' },
      { id: 'chocolate.q3', senseId: 'chocolate.s1', errorType: 'grammar', type: '词义选择', prompt: 'chocolate 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chocolate.q4', senseId: 'chocolate.s1', errorType: 'meaning', type: '词源', prompt: '记 chocolate 时，哪句更稳妥？', options: ['先锁住「巧克力」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「巧克力」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['巧克力'] },
  });

  D('choice', {
    etymology: {
      origin: '古法语 chois，与 choose 同源。',
      prefix: null,
      root: { text: 'choice', gloss: '选择' },
      suffix: null,
      history: [
        { label: 'choice', text: '古法语 chois，与 choose 同源。' },
        { label: '现在', text: '核心用法是：选择。' },
      ],
      formationLogic: '考试认现在的用法：选择。',
      mnemonic: '看到 choice，先说出「选择」。',
      note: '考试认现在的用法：选择。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one choice.', chinese: '这一章反复回到同一个点：选择。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'choice.s1', en: 'Without that choice, the next paragraph is hard to follow.', zh: '没有这个选择，下一段会很难读。', structure: 'choice / 表示 / 选择', grammar: 'noun，围绕「选择」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the choice.', right: 'He gave me some advice about the choice.', reason: 'advice 不可数。名词 choice 的单复数按词典词形记。', rule: '先确定 choice 是noun，再套「选择」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'choice.q1', senseId: 'choice.s1', errorType: 'meaning', type: '词义选择', prompt: '「choice」在本条的核心意思是：', options: ['选择', '完全相反的意思', '一种古代钱币'], answer: '选择', explain: 'choice：选择。' },
      { id: 'choice.q2', senseId: 'choice.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches choice?', options: ['选择', 'a kind of ancient coin', 'the past tense of be'], answer: '选择', explain: '对的是「选择」。' },
      { id: 'choice.q3', senseId: 'choice.s1', errorType: 'grammar', type: '词义选择', prompt: 'choice 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'choice.q4', senseId: 'choice.s1', errorType: 'meaning', type: '词源', prompt: '记 choice 时，哪句更稳妥？', options: ['先锁住「选择」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「选择」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['选择'] },
  });

  D('choir', {
    etymology: {
      origin: '现代英语常用词「choir」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'choir', gloss: '唱诗班' },
      suffix: null,
      history: [
        { label: 'choir', text: '现代英语常用词「choir」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：唱诗班。' },
      ],
      formationLogic: '核心义：唱诗班。',
      mnemonic: '看到 choir，先说出「唱诗班」。',
      note: '核心义：唱诗班。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one choir.', chinese: '这一章反复回到同一个点：唱诗班。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'choir.s1', en: 'Without that choir, the next paragraph is hard to follow.', zh: '没有这个唱诗班，下一段会很难读。', structure: 'choir / 表示 / 唱诗班', grammar: 'noun，围绕「唱诗班」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the choir.', right: 'He gave me some advice about the choir.', reason: 'advice 不可数。名词 choir 的单复数按词典词形记。', rule: '先确定 choir 是noun，再套「唱诗班」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'choir.q1', senseId: 'choir.s1', errorType: 'meaning', type: '词义选择', prompt: '「choir」在本条的核心意思是：', options: ['唱诗班', '完全相反的意思', '一种古代钱币'], answer: '唱诗班', explain: 'choir：唱诗班。' },
      { id: 'choir.q2', senseId: 'choir.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches choir?', options: ['唱诗班', 'a kind of ancient coin', 'the past tense of be'], answer: '唱诗班', explain: '对的是「唱诗班」。' },
      { id: 'choir.q3', senseId: 'choir.s1', errorType: 'grammar', type: '词义选择', prompt: 'choir 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'choir.q4', senseId: 'choir.s1', errorType: 'meaning', type: '词源', prompt: '记 choir 时，哪句更稳妥？', options: ['先锁住「唱诗班」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「唱诗班」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['唱诗班'] },
  });

  D('choke', {
    etymology: {
      origin: '现代英语常用词「choke」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'choke', gloss: '噎住' },
      suffix: null,
      history: [
        { label: 'choke', text: '现代英语常用词「choke」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：噎住。' },
      ],
      formationLogic: '核心义：噎住。',
      mnemonic: '看到 choke，先说出「噎住」。',
      note: '核心义：噎住。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to choke before the office closed.', chinese: '他们同意在办公室关门前做这件事：噎住。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'choke.s1', en: 'The deadline forced the team to choke that afternoon.', zh: '截止日期逼着小组在那天下午噎住。', structure: 'choke / 表示 / 噎住', grammar: 'verb，围绕「噎住」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chokeed it yesterday without checking the real past form.', right: 'Check the past form of "choke" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 choke 是verb，再套「噎住」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'choke.q1', senseId: 'choke.s1', errorType: 'meaning', type: '词义选择', prompt: '「choke」在本条的核心意思是：', options: ['噎住', '完全相反的意思', '一种古代钱币'], answer: '噎住', explain: 'choke：噎住。' },
      { id: 'choke.q2', senseId: 'choke.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches choke?', options: ['噎住', 'a kind of ancient coin', 'the past tense of be'], answer: '噎住', explain: '对的是「噎住」。' },
      { id: 'choke.q3', senseId: 'choke.s1', errorType: 'grammar', type: '词义选择', prompt: 'choke 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'choke.q4', senseId: 'choke.s1', errorType: 'meaning', type: '词源', prompt: '记 choke 时，哪句更稳妥？', options: ['先锁住「噎住」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「噎住」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['噎住'] },
  });

  D('cholesterol', {
    etymology: {
      origin: '现代英语常用词「cholesterol」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'cholesterol', gloss: '胆固醇' },
      suffix: null,
      history: [
        { label: 'cholesterol', text: '现代英语常用词「cholesterol」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：胆固醇。' },
      ],
      formationLogic: '核心义：胆固醇。',
      mnemonic: '看到 cholesterol，先说出「胆固醇」。',
      note: '核心义：胆固醇。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one cholesterol.', chinese: '这一章反复回到同一个点：胆固醇。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'cholesterol.s1', en: 'Without that cholesterol, the next paragraph is hard to follow.', zh: '没有这个胆固醇，下一段会很难读。', structure: 'cholesterol / 表示 / 胆固醇', grammar: 'noun，围绕「胆固醇」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the cholesterol.', right: 'He gave me some advice about the cholesterol.', reason: 'advice 不可数。名词 cholesterol 的单复数按词典词形记。', rule: '先确定 cholesterol 是noun，再套「胆固醇」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'cholesterol.q1', senseId: 'cholesterol.s1', errorType: 'meaning', type: '词义选择', prompt: '「cholesterol」在本条的核心意思是：', options: ['胆固醇', '完全相反的意思', '一种古代钱币'], answer: '胆固醇', explain: 'cholesterol：胆固醇。' },
      { id: 'cholesterol.q2', senseId: 'cholesterol.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches cholesterol?', options: ['胆固醇', 'a kind of ancient coin', 'the past tense of be'], answer: '胆固醇', explain: '对的是「胆固醇」。' },
      { id: 'cholesterol.q3', senseId: 'cholesterol.s1', errorType: 'grammar', type: '词义选择', prompt: 'cholesterol 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'cholesterol.q4', senseId: 'cholesterol.s1', errorType: 'meaning', type: '词源', prompt: '记 cholesterol 时，哪句更稳妥？', options: ['先锁住「胆固醇」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「胆固醇」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['胆固醇'] },
  });

  D('choose', {
    etymology: {
      origin: '古英语 ceosan。',
      prefix: null,
      root: { text: 'choose', gloss: '选择' },
      suffix: null,
      history: [
        { label: 'choose', text: '古英语 ceosan。' },
        { label: '现在', text: '核心用法是：选择。' },
      ],
      formationLogic: '考试认现在的用法：选择。',
      mnemonic: '看到 choose，先说出「选择」。',
      note: '考试认现在的用法：选择。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to choose before the office closed.', chinese: '他们同意在办公室关门前做这件事：选择。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'choose.s1', en: 'The deadline forced the team to choose that afternoon.', zh: '截止日期逼着小组在那天下午选择。', structure: 'choose / 表示 / 选择', grammar: 'verb，围绕「选择」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She chooseed it yesterday without checking the real past form.', right: 'Check the past form of "choose" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 choose 是verb，再套「选择」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'choose.q1', senseId: 'choose.s1', errorType: 'meaning', type: '词义选择', prompt: '「choose」在本条的核心意思是：', options: ['选择', '完全相反的意思', '一种古代钱币'], answer: '选择', explain: 'choose：选择。' },
      { id: 'choose.q2', senseId: 'choose.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches choose?', options: ['选择', 'a kind of ancient coin', 'the past tense of be'], answer: '选择', explain: '对的是「选择」。' },
      { id: 'choose.q3', senseId: 'choose.s1', errorType: 'grammar', type: '词义选择', prompt: 'choose 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'choose.q4', senseId: 'choose.s1', errorType: 'meaning', type: '词源', prompt: '记 choose 时，哪句更稳妥？', options: ['先锁住「选择」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「选择」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['选择'] },
  });

  D('choosy', {
    etymology: {
      origin: '现代英语常用词「choosy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'choosy', gloss: '挑剔的' },
      suffix: null,
      history: [
        { label: 'choosy', text: '现代英语常用词「choosy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：挑剔的。' },
      ],
      formationLogic: '核心义：挑剔的。',
      mnemonic: '看到 choosy，先说出「挑剔的」。',
      note: '核心义：挑剔的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was choosy.', chinese: '即使是初读者也能看出，这个结果是挑剔的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'choosy.s1', en: 'They wanted a choosy answer, not a long speech.', zh: '他们要一个挑剔的的答复，不要长篇发言。', structure: 'choosy / 表示 / 挑剔的', grammar: 'adjective，围绕「挑剔的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are choosy.', right: 'The news is choosy.', reason: 'news 作主语时动词用单数。', rule: '先确定 choosy 是adjective，再套「挑剔的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'choosy.q1', senseId: 'choosy.s1', errorType: 'meaning', type: '词义选择', prompt: '「choosy」在本条的核心意思是：', options: ['挑剔的', '完全相反的意思', '一种古代钱币'], answer: '挑剔的', explain: 'choosy：挑剔的。' },
      { id: 'choosy.q2', senseId: 'choosy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches choosy?', options: ['挑剔的', 'a kind of ancient coin', 'the past tense of be'], answer: '挑剔的', explain: '对的是「挑剔的」。' },
      { id: 'choosy.q3', senseId: 'choosy.s1', errorType: 'grammar', type: '词义选择', prompt: 'choosy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'choosy.q4', senseId: 'choosy.s1', errorType: 'meaning', type: '词源', prompt: '记 choosy 时，哪句更稳妥？', options: ['先锁住「挑剔的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「挑剔的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['挑剔的'] },
  });

  D('chop', {
    etymology: {
      origin: '现代英语常用词「chop」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'chop', gloss: '切碎' },
      suffix: null,
      history: [
        { label: 'chop', text: '现代英语常用词「chop」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：切碎。' },
      ],
      formationLogic: '核心义：切碎。',
      mnemonic: '看到 chop，先说出「切碎」。',
      note: '核心义：切碎。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'They agreed to chop before the office closed.', chinese: '他们同意在办公室关门前做这件事：切碎。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chop.s1', en: 'The deadline forced the team to chop that afternoon.', zh: '截止日期逼着小组在那天下午切碎。', structure: 'chop / 表示 / 切碎', grammar: 'verb，围绕「切碎」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She choped it yesterday without checking the real past form.', right: 'Check the past form of "chop" before you write it.', reason: '过去式不一定是直接加 -ed。', rule: '先确定 chop 是verb，再套「切碎」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chop.q1', senseId: 'chop.s1', errorType: 'meaning', type: '词义选择', prompt: '「chop」在本条的核心意思是：', options: ['切碎', '完全相反的意思', '一种古代钱币'], answer: '切碎', explain: 'chop：切碎。' },
      { id: 'chop.q2', senseId: 'chop.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chop?', options: ['切碎', 'a kind of ancient coin', 'the past tense of be'], answer: '切碎', explain: '对的是「切碎」。' },
      { id: 'chop.q3', senseId: 'chop.s1', errorType: 'grammar', type: '词义选择', prompt: 'chop 的词性（本条）更接近：', options: ['verb', '只能作感叹词', '只能作数词'], answer: 'verb', explain: '本条按 verb 来用。' },
      { id: 'chop.q4', senseId: 'chop.s1', errorType: 'meaning', type: '词源', prompt: '记 chop 时，哪句更稳妥？', options: ['先锁住「切碎」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「切碎」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['切碎'] },
  });

  D('chopper', {
    etymology: {
      origin: '英语派生：chopp + -er，词性转到「直升机（口语）」。',
      prefix: null,
      root: { text: 'chopp', gloss: '词干加英语词尾' },
      suffix: null,
      history: [
        { label: 'chopper', text: '英语派生：chopp + -er，词性转到「直升机（口语）」。' },
        { label: '现在', text: '核心用法是：直升机（口语）。' },
      ],
      formationLogic: '先认词干 chopp，再看词尾。',
      mnemonic: '看到 chopper，先说出「直升机（口语）」。',
      note: '先认词干 chopp，再看词尾。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'The chapter keeps coming back to one chopper.', chinese: '这一章反复回到同一个点：直升机（口语）。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'chopper.s1', en: 'Without that chopper, the next paragraph is hard to follow.', zh: '没有这个直升机（口语），下一段会很难读。', structure: 'chopper / 表示 / 直升机（口语）', grammar: 'noun，围绕「直升机（口语）」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He gave me many advices about the chopper.', right: 'He gave me some advice about the chopper.', reason: 'advice 不可数。名词 chopper 的单复数按词典词形记。', rule: '先确定 chopper 是noun，再套「直升机（口语）」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'chopper.q1', senseId: 'chopper.s1', errorType: 'meaning', type: '词义选择', prompt: '「chopper」在本条的核心意思是：', options: ['直升机（口语）', '完全相反的意思', '一种古代钱币'], answer: '直升机（口语）', explain: 'chopper：直升机（口语）。' },
      { id: 'chopper.q2', senseId: 'chopper.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches chopper?', options: ['直升机（口语）', 'a kind of ancient coin', 'the past tense of be'], answer: '直升机（口语）', explain: '对的是「直升机（口语）」。' },
      { id: 'chopper.q3', senseId: 'chopper.s1', errorType: 'grammar', type: '词义选择', prompt: 'chopper 的词性（本条）更接近：', options: ['noun', '只能作感叹词', '只能作数词'], answer: 'noun', explain: '本条按 noun 来用。' },
      { id: 'chopper.q4', senseId: 'chopper.s1', errorType: 'meaning', type: '词源', prompt: '记 chopper 时，哪句更稳妥？', options: ['先锁住「直升机（口语）」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「直升机（口语）」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['直升机（口语）'] },
  });

  D('choppy', {
    etymology: {
      origin: '现代英语常用词「choppy」。这里不编造未经核对的古典词根。',
      prefix: null,
      root: { text: 'choppy', gloss: '（海面）波浪起伏的' },
      suffix: null,
      history: [
        { label: 'choppy', text: '现代英语常用词「choppy」。这里不编造未经核对的古典词根。' },
        { label: '现在', text: '核心用法是：（海面）波浪起伏的。' },
      ],
      formationLogic: '核心义：（海面）波浪起伏的。',
      mnemonic: '看到 choppy，先说出「（海面）波浪起伏的」。',
      note: '核心义：（海面）波浪起伏的。',
      source: '教学转写，供核对',
    },
    extraExamples: [
      { sense: 1, english: 'Even a new reader could see that the result was choppy.', chinese: '即使是初读者也能看出，这个结果是（海面）波浪起伏的的。' },
    ],
    contexts: [
      { domain: '课堂', senseId: 'choppy.s1', en: 'They wanted a choppy answer, not a long speech.', zh: '他们要一个（海面）波浪起伏的的答复，不要长篇发言。', structure: 'choppy / 表示 / （海面）波浪起伏的', grammar: 'adjective，围绕「（海面）波浪起伏的」。', rationale: '锁住本条核心义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'The news are choppy.', right: 'The news is choppy.', reason: 'news 作主语时动词用单数。', rule: '先确定 choppy 是adjective，再套「（海面）波浪起伏的」。', special: '多义词只取本条核心义。' },
    ],
    quiz: [
      { id: 'choppy.q1', senseId: 'choppy.s1', errorType: 'meaning', type: '词义选择', prompt: '「choppy」在本条的核心意思是：', options: ['（海面）波浪起伏的', '完全相反的意思', '一种古代钱币'], answer: '（海面）波浪起伏的', explain: 'choppy：（海面）波浪起伏的。' },
      { id: 'choppy.q2', senseId: 'choppy.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which gloss matches choppy?', options: ['（海面）波浪起伏的', 'a kind of ancient coin', 'the past tense of be'], answer: '（海面）波浪起伏的', explain: '对的是「（海面）波浪起伏的」。' },
      { id: 'choppy.q3', senseId: 'choppy.s1', errorType: 'grammar', type: '词义选择', prompt: 'choppy 的词性（本条）更接近：', options: ['adjective', '只能作感叹词', '只能作数词'], answer: 'adjective', explain: '本条按 adjective 来用。' },
      { id: 'choppy.q4', senseId: 'choppy.s1', errorType: 'meaning', type: '词源', prompt: '记 choppy 时，哪句更稳妥？', options: ['先锁住「（海面）波浪起伏的」', '随便造一个希腊词根', '把它当成拼写相近的另一个词'], answer: '先锁住「（海面）波浪起伏的」', explain: '意思优先。没有把握的词源不要编。' },
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['（海面）波浪起伏的'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
