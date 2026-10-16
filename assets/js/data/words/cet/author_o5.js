/* data/words/cet/author_o5.js — 常用词 O 批次 5，缺口 on top of ~ orchestrate，共 31 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（共 8 条：CET4 6 =
 * opener、opening、operation、opponent、optimistic、option；CET6 2 = optical、optimal）。* 本批 6 条短语：W(...) 返回后补 .phrase = true。
 * brief 修正：operation 提示 ←opera 为误配（歌剧无关），实为 operate B1 + -ion；optimal/optimistic/
 * option/opponent/opulent 系自行扫根（optimum C1、optimism B2、opt B2、oppose B1；opium/opulent/
 * orate 缺席故 opiate/opulence/oratory 留空）；复合词按首成分在库级继承（on-site/onlooker←on A1，
 * one-sided/one-time/ones←one A1，open-air/open-minded/openwork/opening/opener←open A1）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_o5.js 必须在 _cet_helper.js 之后加载');

  W('on top of', 'preposition', '/ɒn ˈtɒp ɒv/', '', [], '在……顶部；紧接在……之后', 'On the highest part of something, or immediately after something.', [
    ['在……顶部；紧接在……之后', 'On the highest part of something, or immediately after something.', '在某物最高处；或紧接着某事。', '介词短语。', 'The cat sat on top of the cupboard.', '猫坐在柜子顶上。', ['on top of the world'], ['atop'], 'preposition', 'null', '通用'],
  ], '', [], 'on + top + of；近义 atop 在……顶上。短语分级留空').phrase = true;

  W('on-site', 'adjective', '/ˌɒn ˈsaɪt/', 'A1', [], '现场的；在场发生的', 'Happening or working at the place where it is needed.', [
    ['现场的；在场发生的', 'Happening or working at the place where it is needed.', '在需要的地点发生或进行的。', '多作定语。', 'Training takes place on-site.', '培训在现场进行。', ['on-site training'], ['field'], 'adjective', '定语', '通用'],
  ], '',['on', 'site'], 'on A1 + site 复合词，首成分 on 在库，A1 继承（minibus 模式）；近义 field 现场的、实地的');

  W('one day', 'adverb', '/wʌn ˈdeɪ/', '', [], '某天；有一天', 'On a day in the future or the past.', [
    ['某天；有一天', 'On a day in the future or the past.', '在将来或过去的某一天。', '作状语。', 'One day I will write my own novel.', '有一天我会写自己的小说。', [], ['sometime'], 'adverb', 'null', '通用'],
  ], '', [], 'one + day；近义 sometime 某时。短语分级留空').phrase = true;

  W('one time', 'adverb', '/wʌn ˈtaɪm/', '', [], '一次；曾经', 'Once, or at one time in the past.', [
    ['一次；曾经', 'Once, or at one time in the past.', '一次；也指从前。', '作状语。', 'I saw him one time at the station.', '我在车站见过他一次。', [], ['once'], 'adverb', 'null', '通用'],
  ], '', [], 'one + time；近义 once 一次、曾经。短语分级留空').phrase = true;

  W('one way or another', 'adverb', '/wʌn ˈweɪ ɔːr əˈnʌðə(r)/', '', [], '以某种方式；无论如何', 'In some way, though the way is not clear.', [
    ['以某种方式；无论如何', 'In some way, though the way is not clear.', '以某种方式，尽管方式不明；也指无论如何。', '作状语，常与 will 连用。', 'We will finish it one way or another.', '我们无论如何都会完成它。', [], ['somehow'], 'adverb', 'null', '通用'],
  ], '', [], 'one way + or + another；近义 somehow 以某种方式。短语分级留空').phrase = true;

  W('one-sided', 'adjective', '/ˌwʌn ˈsaɪdɪd/', 'A1', [], '片面的', 'Showing only one side of an issue, not fair.', [
    ['片面的', 'Showing only one side of an issue, not fair.', '只显示问题的一面，不公平的。', '多作定语。', 'He called the report one-sided.', '他称这份报告是片面的。', [], ['partisan', 'unilateral'], 'adjective', '定语', '通用'],
  ], '', ['unilateral'], 'one A1 + sided 复合词，首成分 one 在库，A1 继承（minibus 模式）；家族 unilateral 单方面的，近义 partisan 有党派偏见的');

  W('one-time', 'adjective', '/ˌwʌn ˈtaɪm/', 'A1', [], '从前的；一次性的', 'Former, or happening only once.', [
    ['从前的；一次性的', 'Former, or happening only once.', '从前的；也指只发生一次的。', '多作定语。', 'He made a one-time appearance on the show.', '他在节目中露了一次面。', [], ['former'], 'adjective', '定语', '通用'],
  ], '',['one', 'time'], 'one A1 + time 复合词，首成分 one 在库，A1 继承（minibus 模式）；近义 former 从前的、原来的');

  W('one-way ticket', 'noun', '/ˌwʌn ˈweɪ ˈtɪkɪt/', '', [], '单程票', 'A ticket for a journey to a place with no return trip.', [
    ['单程票', 'A ticket for a journey to a place with no return trip.', '只到目的地、不含返程的票。', '可数。', 'She bought a one-way ticket to Vienna.', '她买了一张去维也纳的单程票。', [], ['single'], 'noun', 'countable', '交通'],
  ], '', [], 'one-way + ticket；近义 single 单程票（英）。短语分级留空').phrase = true;

  W('ones', 'pronoun', '/wʌnz/', 'A1', [], '……的那些（one 的复数）', 'The plural form of one, used to avoid repeating a noun.', [
    ['……的那些（one 的复数）', 'The plural form of one, used to avoid repeating a noun.', 'one 的复数形式，用于避免重复名词。', '代词。', 'These ones are cheaper.', '这些更便宜。', [], ['your'], 'pronoun', 'null', '语法'],
  ], '',['one'], '←one A1 + -s（复数形式），A1 继承（brief 根提示）；近义 your（队列原样引用，指代功能相近）');

  W('onlooker', 'noun', '/ˈɒnlʊkə(r)/', 'A1', [], '围观者', 'A person who watches something but does not take part.', [
    ['围观者', 'A person who watches something but does not take part.', '观看但不参与的人。', '可数。', 'Crowds of onlookers gathered at the bridge.', '桥上聚集了围观人群。', [], ['bystander', 'neutral', 'spectator', 'witness'], 'noun', 'countable', '社会'],
  ], 'onlookers', ['bystander'], 'on A1 + look + er 复合词，首成分 on 在库，A1 继承（minibus 模式）；家族 bystander 旁观者，近义 neutral 中立者、spectator 观众、witness 目击者');

  W('ooze', 'verb', '/uːz/', '', [], '渗出；慢慢流出', 'To flow slowly, or to let something flow slowly.', [
    ['渗出；慢慢流出', 'To flow slowly, or to let something flow slowly.', '缓慢地流出；或让某物缓慢流出。', '不及物，亦可及物。', 'Water oozed through the soil.', '水从土壤中渗出。', ['ooze with'], ['weep'], 'verb', '不及物', '自然'],
  ], 'oozes~oozed~oozed~oozing', [], '日耳曼语源（渗出），无库内派生根，留空；近义 weep 渗出、流出（伤口）');

  W('open-air', 'adjective', '/ˌəʊpən ˈeə(r)/', 'A1', [], '户外的；露天的', 'Done or happening outside in the open air.', [
    ['户外的；露天的', 'Done or happening outside in the open air.', '在露天户外进行的。', '多作定语。', 'They held an open-air concert in the park.', '他们在公园举办了露天音乐会。', ['open-air pool'], ['outdoor'], 'adjective', '定语', '通用'],
  ], '',['open', 'air'], 'open A1 + air 复合词，首成分 open 在库，A1 继承（minibus 模式）；近义 outdoor 户外的');

  W('open-minded', 'adjective', '/ˌəʊpən ˈmaɪndɪd/', 'A1', [], '思想开放的', 'Willing to consider new ideas.', [
    ['思想开放的', 'Willing to consider new ideas.', '愿意考虑新想法的。', '定语或表语。', 'She is open-minded about other cultures.', '她对其他文化持开放态度。', [], ['liberal'], 'adjective', '定语/表语', '性格'],
  ], '',['open', 'minded'], 'open A1 + minded 复合词，首成分 open 在库，A1 继承（minibus 模式）；近义 liberal 开明的');

  W('opener', 'noun', '/ˈəʊpənə(r)/', 'A1', ['CET4'], '开瓶器；开场事物', 'A tool for opening something, or a first remark or performance.', [
    ['开瓶器；开场事物', 'A tool for opening something, or a first remark or performance.', '开某物的工具；也指开场的言辞或表演。', '可数。', 'She found a bottle opener in the drawer.', '她在抽屉里找到了开瓶器。', ['bottle opener'], ['key'], 'noun', 'countable', '家居'],
  ], 'openers',['open'], '←open A1 + -er（施事后缀，同 analyst 模式），A1 继承（brief 根提示）；近义 key 钥匙（队列原样引用）');

  W('opening', 'noun', '/ˈəʊpənɪŋ/', 'A1', ['CET4'], '开端；空缺；洞口', 'The beginning of something, a job that is available, or a hole.', [
    ['开端；开场', 'The beginning of something.', '某事的开始。', '可数。', 'At the opening of the term she felt lost.', '学期开始时她有些茫然。', ['opening ceremony'], ['outset'], 'noun', 'countable', '通用'],
    ['空缺；机会', 'A job or a chance that becomes available.', '出现的职位空缺或机会。', '可数。', 'The firm advertised two openings.', '公司登广告招聘两个新职位。', ['job opening'], ['opportunity', 'gap', 'slot'], 'noun', 'countable', '职业'],
    ['洞口；开口', 'An open space or hole in something.', '物体上的开口或洞。', '可数。', 'The cat squeezed through the opening in the fence.', '猫从篱笆的开口钻了过去。', ['opening in'], ['hole', 'mouth', 'window', 'vent', 'hatch', 'intake', 'loophole'], 'noun', 'countable', '家居'],
  ], 'openings', ['gap', 'hole', 'mouth', 'opportunity', 'slot', 'window'], '←open A1 + -ing（动名词/名化），A1 继承（brief 根提示）；家族 gap 缺口、hole 洞、mouth 口、opportunity 机会、slot 狭缝、window 窗口，近义 outset 开端、hatch 舱口、intake 入口、loophole 漏洞、vent 通风口');

  W('openwork', 'noun', '/ˈəʊpənwɜːk/', 'A1', [], '镂空装饰；透孔织物', 'Ornament made of holes and patterns, or open lace work.', [
    ['镂空装饰；透孔织物', 'Ornament made of holes and patterns, or open lace work.', '有孔花纹的装饰；也指透孔蕾丝。', '不可数。', 'The collar was edged with fine openwork.', '领口镶着精致的镂空花边。', [], ['lace'], 'noun', 'uncountable', '艺术'],
  ], '',['open', 'work'], 'open A1 + work 复合词，首成分 open 在库，A1 继承（minibus 模式）；近义 lace 蕾丝、花边');

  W('operating', 'noun', '/ˈɒpəreɪtɪŋ/', 'B1', [], '运转；操作', 'The act of working or functioning.', [
    ['运转；操作', 'The act of working or functioning.', '运行、操作的过程。', '不可数，动名词用法。', 'The machine is operating at full capacity.', '机器正在满负荷运转。', ['operating system'], ['on'], 'noun', 'uncountable', '工业'],
  ], '',['operate'], '←operate B1 + -ing（动名词），B1 继承（brief 根提示）；近义 on（operate on 给……做手术，队列原样引用）');

  W('operation', 'noun', '/ˌɒpəˈreɪʃn/', 'B1', ['CET4'], '手术；经营；军事行动', 'A medical procedure, the running of a business, or a military activity.', [
    ['手术', 'A medical procedure to treat an injury or illness.', '治疗伤病的外科程序。', '可数。', 'She had an operation on her knee.', '她做了膝部手术。', ['operation on'], ['surgery', 'procedure'], 'noun', 'countable', '健康'],
    ['经营；运作', 'The activity or process of running a business or machine.', '经营企业或机器运转的活动过程。', '可数或不可数。', 'The factory resumed normal operation.', '工厂恢复了正常运转。', ['in operation'], ['transaction'], 'noun', 'uncountable', '商务'],
    ['军事行动', 'A planned military or police activity.', '计划好的军事或警察活动。', '可数。', 'The army launched a rescue operation.', '军队发起了一项救援行动。', ['launch an operation'], ['maneuver'], 'noun', 'countable', '军事'],
  ], 'operations', ['surgery'], 'brief 提示 ←opera 为误配（歌剧无关）；实为 operate B1 + -ion（透明名化），B1 继承；家族 surgery 手术，近义 procedure 程序、transaction 交易、maneuver 机动');

  W('opiate', 'noun', '/ˈəʊpiət/', '', [], '鸦片剂；安眠药', 'A drug made from opium, or something that calms people.', [
    ['鸦片剂；安眠药', 'A drug made from opium, or something that calms people.', '鸦片制成的药物；也指使人安静的东西。', '可数。', 'The doctor prescribed a mild opiate.', '医生开了一种温和的鸦片类药物。', [], ['heroin'], 'noun', 'countable', '健康'],
  ], 'opiates', [], 'opium 不在库，成分词缺席，无级可继，留空；近义 heroin 海洛因');

  W('opponent', 'noun', '/əˈpəʊnənt/', 'B1', ['CET4'], '对手；对抗方', 'A person who opposes you in a game, argument or competition.', [
    ['对手；对抗方', 'A person who opposes you in a game, argument or competition.', '在比赛、争论或竞争中与你对抗的人。', '可数。', 'She defeated every opponent in three sets.', '她三盘击败了每一位对手。', ['political opponent'], ['adversary', 'enemy', 'rival'], 'noun', 'countable', '体育'],
  ], 'opponents',['enemy', 'oppose'], '←oppose B1 词干 oppo-（n/s 音变）+ -ent（施事后缀），B1 继承（brief 显示 ←?，自行扫根 oppose）；家族 enemy 敌人，近义 adversary 对手、rival 竞争者');

  W('opposing', 'adjective', '/əˈpəʊzɪŋ/', 'B1', [], '对立的；相反的', 'Opposite in direction, or disagreeing completely.', [
    ['对立的；相反的', 'Opposite in direction, or disagreeing completely.', '方向相反的；或完全不赞同的。', '多作定语。', 'The opposing team protested the call.', '对方球队对判罚提出了抗议。', [], ['rival'], 'adjective', '定语', '通用'],
  ], '',['oppose'], '←oppose B1 + -ing（透明后缀），B1 继承（brief 根提示）；近义 rival 对立的、竞争的');

  W('optical', 'adjective', '/ˈɒptɪkl/', 'C1', ['CET6'], '光学的；视力的', 'Of or relating to light, the eyes or sight.', [
    ['光学的；视力的', 'Of or relating to light, the eyes or sight.', '与光、眼睛或视力有关的。', '多作定语。', 'Optical illusions trick the brain.', '视错觉会欺骗大脑。', ['optical fiber'], ['optic', 'visual'], 'adjective', '定语', '科学'],
  ], '', ['optic', 'visual'], '←optic C1 + -al（透明后缀），C1 继承（brief 显示 ←?，自行扫根 optic）；家族 optic 视觉的、visual 视觉的，近义同');

  W('optics', 'noun', '/ˈɒptɪks/', 'C1', [], '光学；视觉学', 'The scientific study of light and sight.', [
    ['光学；视觉学', 'The scientific study of light and sight.', '研究光与视觉的科学。', '不可数，作学科名。', 'He teaches optics at the university.', '他在大学教光学。', [], ['lens'], 'noun', 'uncountable', '科学'],
  ], '',['optic'], '←optic C1 + -s（学科复数化），C1 继承（brief 根提示）；近义 lens 透镜、镜头');

  W('optimal', 'adjective', '/ˈɒptɪməl/', 'C1', ['CET6'], '最佳的；最优的', 'The best possible or most favorable.', [
    ['最佳的；最优的', 'The best possible or most favorable.', '最好的或最有利的。', '多作定语。', 'The optimal temperature is 37 degrees.', '最佳温度是 37 度。', ['optimal condition'], ['optimum'], 'adjective', '定语', '科学'],
  ], '', ['optimum'], '←optimum C1 + -al（词干 optim- 共享，um→al），C1 继承（brief 显示 ←?，自行扫根 optimum）；家族/近义 optimum 最佳值、最适值');

  W('optimistic', 'adjective', '/ˌɒptɪˈmɪstɪk/', 'B2', ['CET4'], '乐观的', 'Expecting the best about something.', [
    ['乐观的', 'Expecting the best about something.', '对事情抱最好期望的。', '定语或表语，常与 about 连用。', 'She is optimistic about the results.', '她对结果很乐观。', ['optimistic about'], ['positive'], 'adjective', '定语/表语', '心理'],
  ], '',['positive', 'optimism'], '←optimism B2 + -tic（透明后缀），B2 继承（brief 显示 ←?，自行扫根 optimism）；家族/近义 positive 积极的');

  W('option', 'noun', '/ˈɒpʃn/', 'B2', ['CET4'], '选项；选择', 'A thing you can choose, or the act of choosing.', [
    ['选项；选择', 'A thing you can choose, or the act of choosing.', '可供选择的事物；或选择的行为。', '可数。', 'You have three options to consider.', '你有三个选项需要考虑。', ['keep your options open'], ['alternative', 'choice', 'minor', 'resort'], 'noun', 'countable', '通用'],
  ], 'options', ['choice'], '←opt B2 + -ion（词干 opt 选择可见），B2 继承（brief 显示 ←?，自行扫根 opt；option 与 opt 同出拉丁 optare，按同步可见判定）；家族 choice 选择，近义 alternative 备选、minor 次要的、resort 手段（均队列原样引用）');

  W('opulence', 'noun', '/ˈɒpjʊləns/', '', [], '富裕；奢华', 'Rich and plentiful possessions or a great display of wealth.', [
    ['富裕；奢华', 'Rich and plentiful possessions or a great display of wealth.', '丰富的财富；或财富的炫耀。', '不可数，正式用语。', 'The palace is famous for its opulence.', '这座宫殿以奢华著称。', [], ['luxury'], 'noun', 'uncountable', '书面'],
  ], '', [], 'opulent 不在库，无级可继，留空；近义 luxury 奢华');

  W('or else', 'conjunction', '/ɔːr ˈels/', '', [], '否则；要不然', 'Used to warn somebody or to say what will happen if something does not happen.', [
    ['否则；要不然', 'Used to warn somebody or to say what will happen if something does not happen.', '用于警告，或说明若某事不发生的后果。', '连接词。', 'Hurry up, or else you will miss the bus.', '快点，要不然你会错过公交车。', [], ['otherwise'], 'conjunction', 'null', '口语'],
  ], '', ['otherwise'], 'or + else；家族/近义 otherwise 否则。短语分级留空').phrase = true;

  W('oratory', 'noun', '/ˈɒrətri/', '', [], '演讲术', 'The skill of giving formal speeches.', [
    ['演讲术', 'The skill of giving formal speeches.', '发表正式演讲的技巧。', '不可数。', 'His political oratory drew large crowds.', '他的政治演说吸引了大批听众。', [], ['rhetoric'], 'noun', 'uncountable', '文学'],
  ], '', ['rhetoric'], 'orate/拉丁 orare 不在库，无级可继，留空；家族/近义 rhetoric 修辞、雄辩术');

  W('orbiter', 'noun', '/ˈɔːbɪtə(r)/', 'B1', [], '轨道飞行器', 'A spacecraft that goes around a planet.', [
    ['轨道飞行器', 'A spacecraft that goes around a planet.', '绕行星运行的航天器。', '可数。', 'The orbiter sent back close-up images.', '轨道飞行器传回了近距离图像。', [], ['satellite'], 'noun', 'countable', '科学'],
  ], 'orbiters',['satellite', 'orbit'], '←orbit B1 + -er（施事后缀），B1 继承（brief 根提示）；家族/近义 satellite 卫星');

  W('orchestrate', 'verb', '/ˈɔːkɪstreɪt/', 'B1', [], '编排；策划', 'To arrange music for an orchestra, or to plan an event to produce a particular result.', [
    ['编排；策划', 'To arrange music for an orchestra, or to plan an event to produce a particular result.', '为管弦乐队编曲；也指安排事件以达到某种效果。', '及物。', 'The protest was orchestrated by students.', '这场抗议是学生组织的。', ['orchestrated by'], ['engineer'], 'verb', '及物', '文化'],
  ], 'orchestrates~orchestrated~orchestrated~orchestrating',['orchestra'], 'orchestra B1 + -te（-ate 透明后缀，orchestra 整段可见），B1 继承（brief 显示 ←?，自行扫根 orchestra）；近义 engineer 策划、设计');
})(typeof window !== 'undefined' ? window : globalThis);
