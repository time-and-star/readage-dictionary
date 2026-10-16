/* data/words/cet/author_a14.js · 手敲词条 A（十四）· 短语批：a bit ~ amuse oneself
 * A 队列最后 40 条短语词条；每条 W(...) 返回后置 phrase = true（registry 的 pending 合并不含本批）。
 * 短语无可靠 CEFR/考级来源，统一留空显示「暂无可靠数据」；家族/近义取自引用方词条（refs，必已在库）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_a14.js 必须在 _cet_helper.js 之后加载');

  W('a bit', 'adverb/determiner', '/ə ˈbɪt/', '', [], '一点；稍微', 'A small amount, or to a small degree.', [
    ['一点儿；少许', 'A small amount or degree of something.', '某物的一点点或某种程度上的一点。', 'a bit of 后接不可数名词或单数可数名词。', 'I need a bit of help.', '我需要一点帮助。', ['a bit of'], ['little'], 'determiner', 'null', '通用'],
    ['稍微；有点', 'To a small degree; slightly.', '程度上很小、稍微。', '作状语，修饰形容词与比较级。', 'He was a bit tired after the walk.', '散步回来他有点累了。', ['a bit cold'], ['little'], 'adverb', 'null', '口语'],
  ], '', [], 'a little 更常接不可数名词；a bit 中性，口语通用').phrase = true;

  W('a few', 'determiner', '/ə ˈfjuː/', '', [], '几个；一些', 'A small number of countable things.', [
    ['几个；一些', 'A small number of countable things.', '数量不多的若干可数事物。', '后接复数可数名词；与 a little（后接不可数名词）相对。', 'I bought a few apples.', '我买了几个苹果。', ['a few more'], ['some', 'several'], 'determiner', 'null', '通用'],
  ], '', ['several'], '家族 several B1 级参照但短语分级无来源故留空；近义 some 不可数场景用 a little').phrase = true;

  W('a great deal', 'determiner/adverb', '/ə ˌɡreɪt ˈdiːl/', '', [], '大量；非常', 'A large amount, or to a very large degree.', [
    ['大量；许多（不可数）', 'A large amount of something that cannot be counted.', '不可数事物的很大数量。', 'a great deal of 后接不可数名词，正式用语。', 'The project saved a great deal of time.', '这个项目省下了大量时间。', ['a great deal of'], ['much'], 'determiner', 'null', '书面'],
    ['非常；很大程度上', 'To a very large degree or extent.', '程度上非常大。', '作状语，修饰动词与比较级。', 'The weather has improved a great deal.', '天气好转了许多。', [], ['much'], 'adverb', 'null', '通用'],
  ], '', [], '正式程度高于 a lot；近义 much 不可数限定词').phrase = true;

  W('a little', 'determiner/adverb', '/ə ˈlɪtl/', '', [], '一点；少量', 'A small amount that cannot be counted, or to a small degree.', [
    ['一点；少量（不可数）', 'A small amount of something that cannot be counted.', '不可数事物的少量。', '后接不可数名词；与 a few（后接可数复数）相对；也可作副词表「有点」。', 'Add a little salt.', '加一点盐。', ['a little more'], ['some'], 'determiner', 'null', '通用'],
  ], '', [], 'a little salt 一点盐；a few salt 是常见错误，salt 不可数').phrase = true;

  W('a lot', 'determiner/adverb', '/ə ˈlɒt/', '', [], '很多；非常', 'A large number or amount; very much.', [
    ['很多；大量', 'A large number or amount.', '很大的数量。', '可数复数或不可数均可；口语常用。', 'We have a lot of work today.', '我们今天有很多工作。', ['a lot of'], ['much'], 'determiner', 'null', '口语'],
    ['非常；常常', 'Very much, or very often.', '程度很深，或频率很高。', '作状语，修饰动词、形容词与比较级。', 'She laughs a lot.', '她经常笑。', ['quite a lot'], ['much'], 'adverb', 'null', '口语'],
  ], '', ['much'], 'a lot of 口语中最常用的「许多」；正式写作多用 many/much').phrase = true;

  W('a lot of', 'determiner', '/ə ˈlɒt ɒv/', '', [], '许多；大量', 'A large number or amount of something.', [
    ['许多；大量', 'A large number of countable things or a large amount of something uncountable.', '可数或不可数的大量。', '口语中最常用的「许多」；正式文体多用 many/much。', 'A lot of people came to the talk.', '很多人来听讲座。', ['a lot of money'], ['many'], 'determiner', 'null', '口语'],
  ], '', [], '可数不可数均可，区别于 many（仅可数）、much（仅不可数）').phrase = true;

  W('a pittance', 'noun', '/ə ˈpɪtəns/', '', [], '少得可怜的报酬', 'A very small amount of money that is not enough.', [
    ['少得可怜的报酬', 'A very small amount of money that is not enough.', '少到不够用的一点钱。', '可数，含不满语气，书面正式；动词常见 earn/be paid a pittance。', 'The cleaners were paid a pittance.', '清洁工的报酬少得可怜。', ['earn a pittance'], ['peanut'], 'noun', 'countable', '书面'],
  ], '', [], '近义 peanut 指 peanuts（口语：极小的数目）；核心是「钱少得不合理」').phrase = true;

  W('across from', 'preposition', '/əˈkrɒs frɒm/', '', [], '在……对面', 'On the other side of a place from someone or something.', [
    ['在……对面', 'On the other side of a place, facing it.', '在某处另一边、与之相对的位置。', '后接名词，多用于美式英语；英式常用 opposite。', 'The bank is across from the library.', '银行在图书馆对面。', ['right across from'], ['opposite'], 'preposition', 'null', '通用'],
  ], '', [], '美式常用 across from；英式直接用 opposite + 名词').phrase = true;

  W('act for', 'verb', '/ˈækt fɔː(r)/', '', [], '代理；代表……办事', 'To do something official on behalf of someone else.', [
    ['代理；代表（某人办事）', 'To do something official or practical on behalf of someone else.', '代表某人处理正式或实务事务。', '不及物，商务与法律常用：律师 act for 客户。', 'The firm acts for several local companies.', '该公司为多家本地企业担任代理。', [], ['represent'], 'verb', '不及物', '法律'],
  ], '', [], 'act on behalf of 与 act for 同义；宾语是被代表的人或机构').phrase = true;

  W('act out', 'verb', '/ˈækt aʊt/', '', [], '表演出来；（情绪）发作', 'To perform a story, or to express a feeling through behaviour.', [
    ['表演出来；把……演出来', 'To perform a story, role, or dream in front of others.', '把故事、角色或梦境表演出来。', '及物，宾语是剧本、场景或梦。', 'The children acted out the fairy tale.', '孩子们把童话演了出来。', ['act out a scene'], ['enact'], 'verb', '及物', '艺术'],
    ['（通过行动）发泄', 'To express a strong feeling or impulse through your behaviour.', '通过行为把强烈情绪或冲动表现出来。', '心理学语境，常见 act out ones anger/frustration。', 'He acted out his frustration on the keyboard.', '他把挫败感发泄在键盘上。', ['act out their anger'], [], 'verb', '及物', '心理'],
  ],'acts out · acted out · acting out', ['enact'], 'act on 依照；act out 演出、发泄；enact 多指立法「颁布」').phrase = true;

  W('add to', 'verb', '/ˈæd tuː/', '', [], '增加；增添', 'To make something larger or greater by putting something with it.', [
    ['增加；增添', 'To make something larger, greater, or stronger.', '使某物变大、变多或变强。', '及物，后接名词；add to + 名词，不是 add up to。', 'The news added to our worry.', '这消息增加了我们的忧虑。', ['add to the problem'], ['supplement'], 'verb', '及物', '通用'],
  ], '', [], 'add to 增添；add up 相加；add up to 总计达').phrase = true;

  W('add up to', 'verb', '/ˈæd ʌp tuː/', '', [], '总计达；意味着', 'To come to a total, or to suggest a particular conclusion.', [
    ['总计达；总共是', 'To come to a particular total when added together.', '各项相加得出某个总数。', '主语是各项之和，谓语后接数量。', 'The bills add up to 300 pounds.', '账单加起来共 300 英镑。', [], ['total'], 'verb', '不及物', '通用'],
    ['（证据等）意味着', 'To suggest or amount to a particular conclusion.', '（证据、行为等）指向某种结论。', '常以 facts、evidence 作主语。', 'The facts add up to guilt.', '这些事实加起来说明有罪。', ['add up to guilt'], [], 'verb', '不及物', '通用'],
  ],'adds up to · added up to · adding up to', ['total'], 'add up（相加正确/说得通）与 add up to（总计达）注意区分').phrase = true;

  W('age group', 'noun', '/ˈeɪdʒ ɡruːp/', '', [], '年龄段；年龄组', 'A section of people of the same age range.', [
    ['年龄段；年龄组', 'A section of people who are all of similar age.', '同一年龄范围的一群人。', '可数，调查与营销常用；常见 target age group。', 'The survey covers every age group.', '该调查覆盖所有年龄段。', ['target age group'], ['generation'], 'noun', 'countable', '社会'],
  ], '', [], '近义 generation 按出生年代划分，age group 按年龄区间划分').phrase = true;

  W('air conditioner', 'noun', '/ˌeə kənˌdɪʃənə(r)/', '', [], '空调（机）', 'A machine that cools or heats the air in a room or building.', [
    ['空调（机）', 'A machine that changes the temperature or quality of the air in a room.', '调节室内空气温度或质量的机器。', '可数；口语常缩写 AC。', 'The air conditioner broke down yesterday.', '空调昨天坏了。', ['install an air conditioner'], [], 'noun', 'countable', '家电'],
  ], '', ['air-conditioning'], '家族 air-conditioning 指空调系统/技术（不可数）；本词指单台机器').phrase = true;

  W('all over', 'adverb/preposition', '/ˌɔːl ˈəʊvə(r)/', '', [], '到处；遍及', 'In, to, or across every part of a place.', [
    ['到处；遍及', 'In or to every part of a place.', '在或到某地的各个部分。', '可作副词，也可作介词接地点（all over the country）。', 'There were posters all over the city.', '全城到处都是海报。', ['all over the world'], ['everywhere', 'throughout'], 'adverb', 'null', '通用'],
  ], '', ['everywhere'], 'all over the world 全世界；throughout 强调「自始至终贯穿」').phrase = true;

  W('all right', 'adjective/adverb', '/ˌɔːl ˈraɪt/', '', [], '还好；好吧', 'Not in danger or trouble; used to agree.', [
    ['还好；没事', 'In a state that is not dangerous, serious, or a problem.', '（状况）没有危险、不算严重。', '可作形容词或副词，常置于系动词后。', 'After the fall, he was all right.', '摔倒之后他没事。', ['not all right'], ['fine', 'okay'], 'adjective', '表语', '通用'],
    ['好吧；可以（表示同意）', 'Used to agree that something is acceptable.', '表示同意或认可某事。', '口语回应，也可单独作感叹语。', 'All right, lets go.', '好吧，我们走。', [], ['okay'], 'adverb', 'null', '口语'],
  ], '', ['okay'], '英式常写 alright（合写）；本词条为分写形式 all right').phrase = true;

  W('all through', 'preposition', '/ˌɔːl ˈθruː/', '', [], '在整个……期间；从头到尾', 'From the beginning to the end of a period, or in every part of something.', [
    ['在整个……期间；从头到尾', 'For all of a period of time, or in every part of something.', '贯穿某段时间始终，或遍及某物各处。', '后接时间或地点名词，多用于口语与叙述。', 'We argued all through the journey.', '我们一路吵个不停。', ['all through the night'], ['throughout'], 'preposition', 'null', '通用'],
  ], '', [], 'all through the night 整夜；throughout 更书面，时间地点两用').phrase = true;

  W('allow for', 'verb', '/əˈlɔː fɔː(r)/', '', [], '考虑到；留出（余地）', 'To take something into account when planning.', [
    ['考虑到；把……算进去', 'To take something into account when making a plan or decision.', '做计划或决定时把某因素考虑进去。', '及物，商务与规划常用；主语是计划、时间表等。', 'The schedule allows for traffic delays.', '日程里留出了堵车的时间。', ['allow for delays'], ['include'], 'verb', '及物', '商务'],
  ], '', [], 'allow sb to do 允许某人做；allow for 把……考虑进去，勿混').phrase = true;

  W('amount to', 'verb', '/əˈmaʊnt tuː/', '', [], '总计达；等同于', 'To add up to a total, or to be the same as something.', [
    ['总计达；等于', 'To add up to a particular total or amount.', '相加达到某个总数。', '主语为数量、金额。', 'The cost amounted to a fortune.', '费用总计达到一大笔钱。', [], ['equal', 'total'], 'verb', '不及物', '通用'],
    ['等同于；意味着', 'To have the same effect or meaning as something else.', '与某事物效果或意义相同。', '抽象义，常见 amount to nothing（一事无成）。', 'His silence amounts to agreement.', '他的沉默等同于同意。', ['amount to nothing'], [], 'verb', '不及物', '通用'],
  ],'amounts to · amounted to · amounting to', ['equal'], 'amount to a total 总计；amount to sth 等同于；amount to nothing 一事无成').phrase = true;

  W('amuse oneself', 'verb', '/əˈmjuːz wʌnˈself/', '', [], '自娱；消遣', 'To enjoy yourself by doing something interesting or fun.', [
    ['自娱；自己找乐子', 'To keep yourself entertained with something enjoyable.', '用有趣的事让自己开心、打发时间。', '反身结构，反身代词必须跟在动词后；常见 with/by。', 'The children amused themselves with blocks.', '孩子们玩积木自得其乐。', ['amuse oneself with'], ['play'], 'verb', '及物', '通用'],
  ], '', [], 'amuse sb 逗某人笑；amuse oneself 自娱；oneself 随主语变化').phrase = true;

  W('apart from that', 'adverb', '/əˈpɑːt frɒm ðæt/', '', [], '除此之外；此外', 'Used to mention one more thing after everything else that has been said.', [
    ['除此之外；此外', 'Used to add one final comment or fact to what has already been said.', '在已说的各点之后再补充最后一点。', '口语连接语，置于句首，后接逗号。', 'The hotel was fine; apart from that, the food was good too.', '酒店不错；此外饭菜也好。', [], ['otherwise'], 'adverb', 'null', '口语'],
  ], '', [], '近义 otherwise 在此不表「否则」，而是「除此之外」的补充用法').phrase = true;

  W('appeal to', 'verb', '/əˈpiːl tuː/', '', [], '吸引；呼吁', 'To make someone interested, or to ask officially for something.', [
    ['吸引；使感兴趣', 'To make someone interested in something or find it attractive.', '使某人对某事感兴趣、觉得有吸引力。', '主语是事物，宾语是人；被动常见 be appealing to。', 'The idea appeals to young voters.', '这个主张吸引了年轻选民。', ['appeal to readers'], [], 'verb', '及物', '通用'],
    ['（正式）呼吁；恳求', 'To make a serious public request for help or support.', '公开郑重地请求帮助或支持。', '不及物，常见 appeal to sb for sth。', 'They appealed to the public for information.', '他们向公众呼吁提供线索。', ['appeal for help'], [], 'verb', '不及物', '社会'],
  ],'appeals to · appealed to · appealing to', ['attract'], '家族 attract（吸引）是第一义的近义；第二义为「呼吁」，同根名词 appeal 呼吁/上诉').phrase = true;

  W('aptitude test', 'noun', '/ˈæptɪtjuːd test/', '', [], '能力倾向测试', 'An exam that measures how well someone is likely to do in a particular activity.', [
    ['能力倾向测试', 'A test that measures how easily someone can learn a skill or succeed in a field.', '测量某人学习技能或在某领域成功潜力的测验。', '可数；招聘与教育常用，与 achievement test（成绩测验）相对。', 'Candidates took an aptitude test before the interview.', '应聘者面试前参加了能力倾向测验。', ['take an aptitude test'], [], 'noun', 'countable', '教育'],
  ], '', ['aptitude'], '家族 aptitude（才能、天资）+ test；aptitude for sth 某方面的能力').phrase = true;

  W('arc lamp', 'noun', '/ˈɑːk læmp/', '', [], '弧光灯', 'A lamp that gives light from an electric arc between two electrodes.', [
    ['弧光灯', 'A lamp that produces light by an electric arc between two carbon or metal electrodes.', '靠两个电极间电弧发光的灯。', '可数，照明技术术语，现多见于历史与专业文献。', 'Early streetlights used the bright arc lamp.', '早期路灯用的是明亮的弧光灯。', ['an early arc lamp'], [], 'noun', 'countable', '科技'],
  ], '', ['arc'], '家族 arc（电弧）+ lamp；弧光灯是早期电照明形式').phrase = true;

  W('armed forces', 'noun', '/ˌɑːmd ˈfɔːsɪz/', '', [], '武装力量；军队', 'The military forces of a country.', [
    ['武装力量；军队', 'The military forces of a country, including the army, navy, and air force.', '一国的军事力量，包括陆海空三军。', '以复数形式出现，谓语可按复数；正式用语。', 'Her son joined the armed forces.', '她儿子参了军。', ['join the armed forces'], ['military'], 'noun', 'uncountable', '军事'],
  ], '', [], 'armed forces 强调整体编制；military 泛指「军事的、军队」').phrase = true;

  W('arrive at', 'verb', '/əˈraɪv æt/', '', [], '到达；达成', 'To reach a place, or to come to a decision or solution.', [
    ['到达（某处）', 'To reach a destination, especially after travelling.', '经旅行后抵达某目的地。', '地点前用 at（小地点）/in（大地点）；抽象搭配 arrive at a decision/conclusion。', 'We arrived at the station at noon.', '我们中午到站。', ['arrive at the airport'], ['reach'], 'verb', '不及物', '通用'],
    ['达成（结论、决定）', 'To reach a decision, agreement, or solution after discussion.', '经讨论后得出结论、达成一致。', '正式用语，宾语是 decision/conclusion/agreement。', 'The committee arrived at a decision.', '委员会作出了决定。', ['arrive at a conclusion'], ['reach'], 'verb', '及物', '商务'],
  ],'arrives at · arrived at · arriving at', ['reach'], 'reach 及物直接接地名；arrive 不及物需 at/in 引出').phrase = true;

  W('as for', 'preposition', '/ˈæz fɔː(r)/', '', [], '至于；关于', 'Used to introduce what you are going to say about a topic.', [
    ['至于；关于', 'Used to introduce a new topic that you are going to talk about.', '引出接下来要谈论的新话题。', '后接名词或代词，常置于句首并带逗号，用于转换话题。', 'As for the money, we will discuss it later.', '至于钱的问题，我们以后再谈。', [], ['regarding'], 'preposition', 'null', '通用'],
  ], '', [], 'as for 用于转移话题；regarding 中性「关于」，正式；均后接名词').phrase = true;

  W('as soon as', 'conjunction', '/əz ˈsuːn æz/', '', [], '一……就……', 'At the moment that something happens.', [
    ['一……就……', 'At the very moment that something happens.', '在某事发生的那一刻紧接着（另一事）。', '引导时间状语从句；主句将来时，从句用一般现在时。', 'Call me as soon as you arrive.', '你一到就给我打电话。', ['as soon as possible'], ['instant', 'once'], 'conjunction', 'null', '通用'],
  ], '', [], 'as soon as possible 尽快；主将从现：will arrive 后不用 will').phrase = true;

  W('as to', 'preposition', '/ˈæz tuː/', '', [], '关于；至于', 'About a particular subject.', [
    ['关于；至于', 'On the subject of; about.', '就某个话题而言。', '较 about 正式；后接名词或疑问词从句。', 'There is debate as to the meaning.', '关于其含义存在争论。', [], ['regarding'], 'preposition', 'null', '书面'],
  ], '', [], '与 as for 近义但不转移话题，只标注主题；口语多用 about').phrase = true;

  W('as well', 'adverb', '/əz ˈwel/', '', [], '也；同样', 'In addition; too.', [
    ['也；同样', 'In addition to someone or something else.', '此外、同样（也……）。', '常置于句末；比 too 正式，比 also 自然。', 'She plays the piano as well.', '她也会弹钢琴。', [], ['too'], 'adverb', 'null', '通用'],
  ], '', [], '句末用 as well/too 均可；not as well as 不如……好').phrase = true;

  W('as well as', 'preposition', '/əz ˈwel æz/', '', [], '除……之外还；以及', 'In addition to something or someone else.', [
    ['除……之外还；以及', 'In addition to someone or something already mentioned.', '在已提及的人或物之外还（包括）。', '连接两个对等成分；正式，常见于书面与标题。', 'He teaches as well as researches.', '他既教学又做研究。', [], ['besides'], 'preposition', 'null', '通用'],
  ], '', [], 'besides 亦可表「此外」；as well as 连接对等成分，后接成分信息常更具体').phrase = true;

  W('ask for', 'verb', '/ˈɑːsk fɔː(r)/', '', [], '要求；请求', 'To say that you would like to be given something.', [
    ['要求；请求', 'To say that you would like to be given something or that you want something to happen.', '表示希望得到某物或某事发生。', '及物，常见 ask (sb) for sth；语气比 request 口语。', 'She asked for more time.', '她要求更多时间。', ['ask for help'], ['request'], 'verb', '及物', '通用'],
  ], '', ['request'], 'ask for 口语，request 正式；ask for trouble 自找麻烦（习语，见备注）').phrase = true;

  W('ask oneself', 'verb', '/ˈɑːsk wʌnˈself/', '', [], '自问；扪心自问', 'To think about a question and try to find the answer in your own mind.', [
    ['自问；在心里盘算', 'To consider a question privately in your own mind.', '在心里考虑某个问题。', '反身结构，常接 whether/why/what 从句。', 'She asked herself whether she had done right.', '她自问做得对不对。', ['ask oneself why'], ['wonder'], 'verb', '及物', '通用'],
  ], '', [], '近义 wonder 指「想知道、纳闷」，ask oneself 强调自我反问的过程').phrase = true;

  W('at any time', 'adverb', '/ˌæt ˈeni taɪm/', '', [], '随时；在任何时候', 'At any moment; whenever you want or need to.', [
    ['随时；在任何时候', 'At any moment, whenever you want or need something.', '在任何你想要或需要的时刻。', '常用于条件句与正式说明；口语亦常见 at any time now。', 'You can call us at any time.', '你随时可以打电话给我们。', ['at any time now'], ['ever'], 'adverb', 'null', '通用'],
  ], '', ['ever'], 'at any time now 眼看就要、随时（表预期）；ever 常见于 if ever 句式').phrase = true;

  W('at no time', 'adverb', '/ˌæt ˈnəʊ taɪm/', '', [], '决不；从不', 'Never; at no moment.', [
    ['决不；在任何时候都不', 'Never; not at any time.', '任何时刻都不，即绝不。', '正式用语；置于句首时主句部分倒装。', 'At no time did he admit his mistake.', '他从不承认错误。', ['at no time should you'], ['never'], 'adverb', 'null', '书面'],
  ], '', ['never'], '句首要倒装：At no time did he...；与 never 语义相同、语体更正式').phrase = true;

  W('at once', 'adverb', '/ət ˈwʌns/', '', [], '立刻；同时', 'Immediately, or at the same time.', [
    ['立刻；马上', 'Immediately; without any delay.', '立即、毫不拖延。', '同义 immediately，正式或叙述性文字常见。', 'The alarm rang and we left at once.', '警报一响我们立刻离开了。', ['all at once'], ['together'], 'adverb', 'null', '通用'],
    ['同时', 'At the same time, together with something else happening.', '与另一件事发生在同一时刻。', '常见 at one time（曾经）与 at once（同时）区分。', 'You cannot do two things at once.', '你不能同时做两件事。', ['all at once'], ['together'], 'adverb', 'null', '通用'],
  ], '', [], 'all at once 突然；at one time 曾经、一度——勿与 at once 混淆').phrase = true;

  W('at the same time', 'adverb', '/ət ðə ˌseɪm ˈtaɪm/', '', [], '同时；然而', 'At one time, or despite a difference.', [
    ['同时', 'At one time; while something else is also happening.', '在同一时刻、与另一事同时进行。', '可与 and 连用，或后接 at the same time as。', 'The two events were held at the same time.', '两场活动同时举行。', ['at the same time as'], ['meanwhile'], 'adverb', 'null', '通用'],
    ['然而；不过', 'Used to introduce a fact that seems different from what you just said.', '引出与前述看似矛盾的一面。', '表转折，前后常有逗号。', 'It is hard work; at the same time, it is enjoyable.', '这工作很辛苦；不过也挺有乐趣。', [], [], 'adverb', 'null', '通用'],
  ], '', ['meanwhile'], '第一义 meanwhile 亦可表「同时」；第二义转折时不与 meanwhile 换用').phrase = true;

  W('at times', 'adverb', '/ˌæt ˈtaɪmz/', '', [], '有时候；偶尔', 'Occasionally; on some occasions but not often.', [
    ['有时候；偶尔', 'Sometimes, but not very often.', '有些时候发生、并不经常。', '同义 occasionally，比 sometimes 略正式。', 'The bus is late at times.', '公交车有时会晚点。', [], ['sometimes'], 'adverb', 'null', '通用'],
  ], '', [], 'at times ≈ occasionally；all the time 一直，反义').phrase = true;

  W('aware of', 'adjective', '/əˈweər ɒv/', '', [], '意识到；知道', 'Knowing that something exists or is happening.', [
    ['意识到；觉察到', 'Knowing that something exists, is true, or is happening.', '知道某事物存在、属实或正在发生。', 'aware 是形容词，of 引出对象；be aware of + 名词/动名词。', 'Are you aware of the risk?', '你意识到风险了吗？', ['fully aware of'], [], 'adjective', '表语', '通用'],
  ], '', [], 'be aware of sth/doing sth；unaware 不察觉的；近义参见各词条不强引').phrase = true;

  W('away from', 'preposition', '/əˈweɪ frɒm/', '', [], '远离；离开（某处）', 'At a distance from a place or person.', [
    ['远离；离（某处）有距离', 'On the other side of a distance from a place or person.', '与某地或某人相隔一段距离。', '反义 toward(s)；可与具体地点或人连用。', 'We drove away from the city.', '我们驾车远离城市。', ['far away from'], ['off'], 'preposition', 'null', '通用'],
  ], '', [], 'away from 离开某处（距离义）；off 强调「脱离接触」，如 take off').phrase = true;

  // 队列外补漏：a.m 含点号未进字母队列，但被 morning 引为近义（refOnly）
  W('a.m', 'noun/adverb', '/ˌeɪ ˈem/', '', [], '上午；午前', 'The period before noon; used after a time to mean before noon.', [
    ['上午；午前', 'The period of time from midnight until noon.', '从午夜到正午的这一时段。', '不可数，常写 A.M.；与 p.m.（下午）相对，12 a.m. 指午夜零点。', 'The class starts at 9 a.m.', '课上午九点开始。', ['at 9 a.m.'], ['morning'], 'noun', 'uncountable', '通用'],
    ['（用于时刻后）上午', 'Used after a time to show that it is in the morning.', '用在时刻之后，表示该时刻属于上午。', '缩写形式，全大写 A.M. 或带点 a.m. 均可。', 'The train departs at 6 a.m.', '火车早上六点发车。', ['from 6 a.m.'], [], 'adverb', 'null', '通用'],
  ], '', ['morning'], '拉丁语 ante meridiem（中午之前）的缩写；与 p.m. 相对；词内含点号故未进字母队列，此处补录');

})(typeof window !== 'undefined' ? window : globalThis);
