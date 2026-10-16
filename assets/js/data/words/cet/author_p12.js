/* data/words/cet/author_p12.js — 常用词 P 批次 12，缺口 probability ~ proposal，共 31 条
 * （31 单词，本批无短语）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（13 条 CET4：
 * probability、production、productive、professional、proficiency、profitable、progressive、
 * prohibition、projection、promotion、pronunciation、proportional、proposal）。
 * 扫根结论：probable B1、procedure B2、profession B1、proficient B2、profit B1、profound C1、
 * progress A2、prohibit B2、pronounce B1、proportion B2（author_p3 扫描）；probe C1、
 * produce A2、product A2、promote B1、prompt B2、proper B1、project A2（brief 根提示）；
 * 缺席：profuse、prophecy——
 * · 透明后缀：probability←probable B1 + -ity（le→l 正字同 possible→possibility 类）、
 *   procedural←procedure B2 + -al（e→∅）、productive←produce A2 + -ive（produc 全段可见，
 *   经 brief production 根提示确认）、professional←profession B1 + -al、proficiency←
 *   proficient B2 + -ency（-ent→-ency 同 -ence 类 t→cy）、profitable←profit B1 + -able、
 *   profundity←profound C1 + -ity、progressive←progress A2 + -ive、prohibition←prohibit
 *   B2 + -ion、projection←project A2 + -ion（经 brief projecting 根提示确认）、promoter←
 *   promote B1 + -er、promotion←promote B1 + -ion（promot 全段可见，经 brief promoter 根
 *   提示确认）、promptly←prompt B2 + -ly、properly←proper B1 + -ly、proportional←
 *   proportion B2 + -al、proposal←propose B1 + -al（e→∅+al）、proponent←propose B1
 *   （词干 propon/propos 单字母 n→s 交替 + -ent 透明）；professionals/products 复数。
 * · 拉丁词干交替：pronunciation←pronounce B1（pronounc→pronunci 单字母 o→u 交替 +
 *   e→∅，同 y→i 类正字处理）。
 * · 判断项披露：projecting←project A2 + -ing（brief 直接给出，照抄）；projectile←project
 *   全段可见但 -ile 不在透明后缀清单内，保守留空；probation←probe C1（brief 直接给出，
 *   照抄）。
 * · 留空项：procure（拉丁 procurare，与 cure 虽形接但语义「获得」与「治愈」不直连）、
 *   prod、prodigy、profusion（profuse 不在库）、progeny、promenade（法语借词）、
 *   projectile、prophesy（prophecy 不在库）——均无库内可继根。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p12.js 必须在 _cet_helper.js 之后加载');

  W('probability', 'noun', '/ˌprɒbəˈbɪləti/', 'B1', ['CET4'], '可能性；概率', 'The chance that something will happen or be true.', [
    ['可能性；概率', 'The chance that something will happen or be true.', '某事会发生或为真的机会。', '可数或不可数，常与 of 连用。', 'There is a high probability of rain today.', '今天下雨的可能性很高。', ['probability of'], ['odds'], 'noun', 'countable', '科学'],
  ], 'probabilities', ['odds'], '←probable B1 + -ity（le→l 正字同 possible→possibility 类），B1 继承（brief 显示 ←?，自行扫根 probable）；家族 odds 可能性、几率，近义 odds');

  W('probation', 'noun', '/prəˈbeɪʃən/', 'C1', [], '缓刑；试用期', 'A period when a person is allowed to stay in the community instead of going to prison.', [
    ['缓刑', 'A period when a court lets a person stay in the community instead of going to prison.', '法院让某人留在社会中而不用入狱的一段时间。', '不可数，法律术语，常与 on 连用。', 'The judge put him on probation for two years.', '法官判他缓刑两年。', ['on probation'], ['parole'], 'noun', 'uncountable', '法律'],
    ['试用期；见习期', 'A period in which a new worker or student is tested.', '新员工或学生受考察的一段时间。', '不可数，常与 on 连用。', 'She is on probation at the new firm.', '她在新公司处于试用期。', ['on probation'], [], 'noun', 'uncountable', '职业'],
  ],'probations',['parole', 'probe'], '←probe C1 + -ation（prob 全段共享，拉丁 probare 检验），C1 继承（brief 直接给出 ←probe C1，照抄）；家族/近义 parole 假释、缓刑监督');

  W('procedural', 'adjective', '/prəˈsiːdʒərəl/', 'B2', [], '程序上的；流程的', 'Relating to the fixed steps used to carry out an activity.', [
    ['程序上的；流程的', 'Relating to the fixed steps used to carry out an activity.', '与开展活动所用的固定步骤相关的。', '多作定语。', 'The committee followed procedural rules.', '委员会遵循了程序规则。', [], ['technical'], 'adjective', '定语', '通用'],
  ], '',['procedure'], '←procedure B2 + -al（e→∅，procedur 全段可见），B2 继承（brief 显示 ←?，自行扫根 procedure）；近义 technical 技术性的、程序上的');

  W('procure', 'verb', '/prəˈkjʊə/', '', [], '获得；取得', 'To obtain something that is needed, often after effort or a search.', [
    ['获得；取得', 'To obtain something that is needed, often after effort or a search.', '经过努力或搜寻得到所需之物。', '及物，较正式。', 'They procured funding for the new lab.', '他们为新实验室筹到了经费。', [], ['source'], 'verb', '及物', '商务'],
  ], 'procures~procured~procured~procuring', ['procurement'], 'procurement 是名词，常指采购或获取；近义 source 寻求、采购、获得。');

  W('prod', 'noun/verb', '/prɒd/', '', [], '戳；刺棒', 'A quick push with a pointed object, or the act of giving one.', [
    ['戳；刺', 'A quick push with a pointed object, or the act of giving one.', '用尖物快速一推；或这一动作。', '可数，作动词时及物。', 'He gave the fire a prod with a stick.', '他用棍子捅了捅火。', [], ['poke'], 'noun/verb', 'countable/及物', '通用'],
  ], 'prods~prodded~prodded~prodding', ['poke'], '日耳曼语 prod（刺）——无库内可见词根，留空；家族/近义 poke 戳、捅。过去式与现在分词双写 d：prodded、prodding');

  W('prodigy', 'noun', '/ˈprɒdədʒi/', '', [], '神童；天才', 'A young person with exceptional natural ability.', [
    ['神童；天才', 'A young person with exceptional natural ability.', '具有非凡天赋的年轻人。', '可数，常与 in 连用。', 'The child was a musical prodigy.', '这孩子是个音乐神童。', [], ['genius'], 'noun', 'countable', '教育'],
  ], 'prodigies', ['genius'], '拉丁 prodigium（预兆、奇观）——无库内可见词根，留空；家族/近义 genius 天才');

  W('production', 'noun', '/prəˈdʌkʃən/', 'A2', ['CET4'], '生产；产量', 'The process of making goods, or the amount that is made.', [
    ['生产；制造', 'The process of making goods in a factory.', '在工厂里制造产品的过程。', '不可数。', 'The factory resumed production after repairs.', '工厂维修后恢复了生产。', ['in production'], ['generation', 'manufacture', 'output', 'synthesis'], 'noun', 'uncountable', '工业'],
    ['产量', 'The amount of something that is produced.', '产出某物的数量。', '不可数，常与 of 连用。', 'Oil production fell last quarter.', '上季度石油产量下降。', ['output'], [], 'noun', 'uncountable', '工业'],
  ], 'productions',['generation', 'output', 'produce'], '←produce A2 + -ion（produc 全段可见于 production），A2 继承（brief 直接给出 ←produce A2，照抄）；家族 generation 产生、output 产出，近义 generation、manufacture 制造、output、synthesis 合成');

  W('productive', 'adjective', '/prəˈdʌktɪv/', 'A2', ['CET4'], '富有成效的；多产的', 'Producing a lot of useful things, or achieving good results.', [
    ['富有成效的；多产的', 'Producing a lot of useful things, or achieving good results.', '产出很多有用之物或取得良好成果的。', '多作定语或表语。', 'The team had a productive morning.', '团队上午效率很高。', [], ['fertile'], 'adjective', '定语/表语', '通用'],
  ], '',['fertile', 'produce'], '←produce A2 + -ive（produc 全段可见，经 brief production 根提示确认），A2 继承（brief 直接给出 ←produce A2，照抄）；家族/近义 fertile 肥沃的、多产的');

  W('products', 'noun', '/ˈprɒdʌkts/', 'A2', [], '产品；制品（复数）', 'Goods that are made or sold.', [
    ['产品；制品（复数）', 'Goods that are made or sold.', '被制造或被销售的物品。', 'product 的复数形式。', 'The store sells imported products.', '这家店出售进口商品。', ['consumer products'], ['good', 'goods', 'merchandise', 'produce', 'ware'], 'noun', 'countable', '商务'],
  ], '',['goods', 'product'], '←product A2 的复数形式，A2 继承（brief 直接给出 ←product A2，照抄）；家族 goods 商品，近义 good 好处、goods 货物、merchandise 商品、produce 农产品、ware 器皿');

  W('professional', 'adjective/noun', '/prəˈfeʃənəl/', 'B1', ['CET4'], '专业的；专业人员', 'Having the skill of a trained worker, or somebody whose job needs such skill.', [
    ['专业的；职业的', 'Having the skill and quality expected of a trained worker.', '具备受训者预期技能与素质的。', '多作定语或表语。', 'She gave professional advice on the case.', '她就该案提供了专业意见。', ['professional conduct'], ['amateur', 'middle-class', 'practitioner', 'regular'], 'adjective', '定语/表语', '职业'],
    ['专业人员', 'Somebody whose job requires special training.', '工作需要专门训练的人。', '可数。', 'The firm hired three young professionals.', '公司聘了三位年轻的专业人士。', [], [], 'noun', 'countable', '职业'],
  ], 'professionals',['practitioner', 'profession'], '←profession B1 + -al（profession 全段可见），B1 继承（brief 显示 ←?，自行扫根 profession）；家族 practitioner 从业者，近义 amateur 业余者、middle-class 中产的、practitioner、regular 常客');

  W('professionals', 'noun', '/prəˈfeʃənəlz/', 'B1', [], '专业人员（复数）', 'People whose jobs require special training.', [
    ['专业人员（复数）', 'People whose jobs require special training.', '工作需要专门训练的人们。', 'professional 的复数形式。', 'A panel of professionals reviewed the plan.', '一组专业人士评审了该计划。', [], ['profession'], 'noun', 'countable', '职业'],
  ], '',['professional'], '←professional B1 的复数形式，B1 继承（←profession B1 + -al，profession 全段可见）；近义 profession 职业、同业人士');

  W('proficiency', 'noun', '/prəˈfɪʃənsi/', 'B2', ['CET4'], '熟练；精通', 'A good level of skill in using something.', [
    ['熟练；精通', 'A good level of skill in using something.', '在使用某物上具备的良好技能水平。', '不可数，常与 in/with 连用。', 'She has proficiency in three languages.', '她熟练掌握三门语言。', ['language proficiency'], ['expertise'], 'noun', 'uncountable', '教育'],
  ], '',['expertise', 'proficient'], '←proficient B2 + -ency（-ent→-ency 同 -ence 类 t→cy 正字），B2 继承（brief 显示 ←?，自行扫根 proficient）；家族/近义 expertise 专长、熟练');

  W('profitable', 'adjective', '/ˈprɒfɪtəbəl/', 'B1', ['CET4'], '有利可图的；有益的', 'Bringing in more money than is spent.', [
    ['有利可图的', 'Bringing in more money than is spent.', '所挣钱多于所花钱的。', '多作定语或表语。', 'The shop proved profitable within a year.', '这家店一年内就实现了盈利。', ['profitable venture'], ['lucrative'], 'adjective', '定语/表语', '金融'],
  ], '',['lucrative', 'profit'], '←profit B1 + -able（透明后缀），B1 继承（brief 显示 ←?，自行扫根 profit）；家族/近义 lucrative 赚钱的、有利可图的');

  W('profundity', 'noun', '/prəˈfʌndəti/', 'C1', [], '深奥；深刻', 'Great depth of thought or meaning.', [
    ['深奥；深刻', 'The quality of being very deep in thought or meaning.', '思想或意义上非常深刻的性质。', '不可数，较正式。', 'The essay shows real profundity.', '这篇文章显示出真正的深刻。', [], ['depth'], 'noun', 'uncountable', '书面'],
  ], '',['depth', 'profound'], '←profound C1 + -ity（profound 全段可见），C1 继承（brief 显示 ←?，自行扫根 profound）；家族/近义 depth 深度、深刻');

  W('profusion', 'noun', '/prəˈfjuːʒən/', '', [], '大量；充沛', 'A very large amount of something that is available in great quantity.', [
    ['大量；充沛', 'A very large amount of something that is available in great quantity.', '数量极大、随处可得的某物。', '不可数，较正式，常与 of 连用。', 'The market offered a profusion of fresh fruit.', '市场上鲜果琳琅满目。', [], ['abundance', 'riot'], 'noun', 'uncountable', '书面'],
  ], '', [], '拉丁 profusio（大量倾出）——profuse 不在库，无成分级可继，留空；近义 abundance 大量、充沛，riot 丰富（a riot of 类搭配）');

  W('progeny', 'noun', '/ˈprɒdʒəni/', '', [], '后代；子嗣', 'The children or young produced by a person or animal.', [
    ['后代；子嗣', 'The children or young produced by a person or animal.', '某人或某动物所生育的子女或幼崽。', '不可数，较正式。', 'The pair raised healthy progeny.', '这对伴侣养育了健康的后代。', [], ['offspring'], 'noun', 'uncountable', '自然'],
  ], '', ['offspring'], '拉丁 progenies（后代）——无库内可见词根，留空；家族/近义 offspring 后代、子孙');

  W('progressive', 'adjective', '/prəˈɡresɪv/', 'A2', ['CET4'], '渐进的；进步的', 'Happening gradually, or supporting new ideas and change.', [
    ['渐进的；逐步的', 'Happening slowly and step by step over time.', '随时间缓慢逐步发生的。', '多作定语。', 'The disease caused a progressive decline.', '该疾病造成了进行性衰退。', ['progressive disease'], ['gradual'], 'adjective', '定语', '健康'],
    ['进步的；先进的', 'Supporting new ideas and social change.', '支持新观念与社会变革的。', '多作定语。', 'The party called for progressive reforms.', '该党呼吁推行进步的改革。', [], ['liberal'], 'adjective', '定语', '政治'],
  ], '',['gradual', 'progress'], '←progress A2 + -ive（progress 全段可见），A2 继承（brief 显示 ←?，自行扫根 progress）；家族 gradual 逐渐的，近义 gradual、liberal 开明的');

  W('prohibition', 'noun', '/ˌprəʊhɪˈbɪʃən/', 'B2', ['CET4'], '禁止；禁令', 'An official order that forbids something.', [
    ['禁止；禁令', 'An official order that forbids something.', '禁止某事的官方命令。', '可数，常与 on 连用。', 'The city issued a prohibition on street parking.', '该市发布了禁止路边停车的命令。', ['prohibition on'], ['ban', 'taboo'], 'noun', 'countable', '法律'],
  ], 'prohibitions',['prohibit'], '←prohibit B2 + -ion（prohibit 全段可见），B2 继承（brief 显示 ←?，自行扫根 prohibit）；近义 ban 禁令、taboo 禁忌');

  W('projectile', 'noun', '/prəˈdʒektəl/', '', [], '抛射体；弹丸', 'An object that is thrown or fired forward through the air.', [
    ['抛射体；弹丸', 'An object that is thrown or fired forward through the air.', '被抛出或在空中向前发射的物体。', '可数，军事或物理术语。', 'The cannon launched a projectile.', '大炮发射了一枚弹丸。', [], ['missile', 'shell'], 'noun', 'countable', '军事'],
  ], 'projectiles', [], 'project 全段可见但 -ile 不在透明后缀清单内，保守留空；近义 missile 导弹、shell 炮弹');

  W('projecting', 'adjective', '/prəˈdʒektɪŋ/', 'A2', [], '突出的；伸出的', 'Extending outward beyond a surface or an edge.', [
    ['突出的；伸出的', 'Sticking out beyond a surface or an edge.', '超出表面或边缘向外伸出的。', '多作定语。', 'A projecting beam blocked the doorway.', '一根突出的横梁挡住了门口。', [], ['prominent'], 'adjective', '定语', '家居'],
  ], '',['project'], '←project A2 + -ing（分词形容词「伸出的」），A2 继承（brief 直接给出 ←project A2 + -ing，照抄）；近义 prominent 突出的、显著的');

  W('projection', 'noun', '/prəˈdʒekʃən/', 'A2', ['CET4'], '预测；投影', 'An estimate of what will happen, or a pattern thrown onto a surface.', [
    ['预测；推断', 'An estimate of how something will change in the future.', '对某事未来变化的估计。', '可数，常与 of 连用。', 'The sales projection looks optimistic.', '销售预测看起来乐观。', ['sales projection'], ['forecast'], 'noun', 'countable', '金融'],
    ['投影；投射', 'A pattern of light or an image thrown onto a surface.', '投射到表面上的光线或图像。', '可数或不可数。', 'The map projection distorted Greenland.', '这幅地图投影使格陵兰显得失真。', [], [], 'noun', 'uncountable', '科学'],
  ], 'projections',['forecast', 'project'], '←project A2 + -ion（project 全段可见，经 brief projecting 根提示确认），A2 继承（brief 直接给出 ←project A2，照抄）；家族/近义 forecast 预测、预报');

  W('promenade', 'noun', '/ˌprɒməˈneɪd/', '', [], '散步道；海滨长廊', 'A long open path where people go for a walk, often beside the sea.', [
    ['散步道；海滨长廊', 'A long open path where people go for a walk, often beside the sea.', '供人散步的开阔长道，常在海边。', '可数。', 'They strolled along the promenade at dusk.', '黄昏时他们沿海滨长廊散步。', [], ['mall'], 'noun', 'countable', '通用'],
  ], 'promenades', [], '法语 promener（散步）借词——无库内可见词根，留空；近义 mall 商业街、步行街');

  W('promoter', 'noun', '/prəˈməʊtə/', 'B1', [], '推广人；赞助人', 'Somebody who works to make an event or product successful.', [
    ['推广人；赞助人', 'Somebody who works to make an event or product successful.', '致力于使某活动或产品成功的人。', '可数。', 'A promoter arranged the boxing match.', '一位推广人筹办了这场拳击赛。', [], ['salesman', 'sponsor'], 'noun', 'countable', '商务'],
  ], 'promoters',['promote'], '←promote B1 + -er（施事后缀），B1 继承（brief 直接给出 ←promote B1 + -er，照抄）；近义 salesman 推销员、sponsor 赞助人');

  W('promotion', 'noun', '/prəˈməʊʃən/', 'B1', ['CET4'], '晋升；推广', 'A move to a higher rank, or activities that make a product easy to sell.', [
    ['晋升；提升', 'A move to a higher rank or position.', '晋升到更高职级或职位。', '可数或不可数。', 'Her promotion surprised the whole team.', '她的晋升让全队意外。', ['apply for promotion'], [], 'noun', 'countable', '职业'],
    ['推广；促销', 'Activities that make a product or event easy to sell.', '使产品或活动易于销售的活动。', '不可数或可数。', 'The chain ran a promotion on coffee.', '该连锁店做了咖啡促销。', ['sales promotion'], ['propaganda'], 'noun', 'uncountable', '商务'],
  ], 'promotions',['propaganda', 'promote'], '←promote B1 + -ion（promot 全段可见，经 brief promoter 根提示确认），B1 继承（brief 直接给出 ←promote B1，照抄）；家族/近义 propaganda 宣传');

  W('promptly', 'adverb', '/ˈprɒmptli/', 'B2', [], '迅速地；准时地', 'Quickly without delay, or at exactly the stated time.', [
    ['迅速地；准时地', 'Quickly without delay, or at exactly the stated time.', '毫不拖延地；或正点地。', '修饰动词。', 'She replied to the message promptly.', '她迅速回复了消息。', [], ['sharp'], 'adverb', '不及物', '通用'],
  ], '',['prompt'], '←prompt B2 + -ly（透明后缀），B2 继承（brief 直接给出 ←prompt B2 + -ly，照抄）；近义 sharp 整点地、恰好');

  W('pronunciation', 'noun', '/prəˌnʌnsiˈeɪʃən/', 'B1', ['CET4'], '发音；读法', 'The way in which a word or a language is spoken.', [
    ['发音；读法', 'The way in which a word or a language is spoken.', '词或语言被说出的方式。', '可数或不可数。', 'Her pronunciation of French is clear.', '她的法语发音很清晰。', ['clear pronunciation'], ['accent'], 'noun', 'countable', '教育'],
  ], 'pronunciations',['pronounce'], '←pronounce B1（pronounc→pronunci 单字母 o→u 交替 + e→∅，同 y→i 类正字处理），B1 继承（brief 显示 ←?，自行扫根 pronounce）；近义 accent 口音、腔调');

  W('properly', 'adverb', '/ˈprɒpəli/', 'B1', [], '正确地；恰当地', 'In the correct or suitable way.', [
    ['正确地；恰当地', 'In the correct or suitable way.', '以正确或合适的方式。', '修饰动词。', 'The lid was not properly closed.', '盖子没有正确盖好。', [], ['well'], 'adverb', '不及物', '通用'],
  ], '',['well', 'proper'], '←proper B1 + -ly（透明后缀），B1 继承（brief 直接给出 ←proper B1 + -ly，照抄）；家族/近义 well 好地');

  W('prophesy', 'verb', '/ˈprɒfəsi/', '', [], '预言；预告', 'To say publicly what will happen in the future.', [
    ['预言；预告', 'To say publicly what will happen in the future.', '公开说出未来将发生的事。', '可作及物或不及物，较正式。', 'The oracle prophesied a long drought.', '神谕预言了漫长的干旱。', [], ['foretell'], 'verb', '及物', '宗教'],
  ], 'prophesies~prophesied~prophesied~prophesying', ['foretell'], '拉丁 prophetiare（预言）——prophecy 不在库，无成分级可继，留空；家族/近义 foretell 预言、预告');

  W('proponent', 'noun', '/prəˈpəʊnənt/', 'B1', [], '支持者；倡导者', 'Somebody who publicly supports an idea or a plan.', [
    ['支持者；倡导者', 'Somebody who publicly supports an idea or a plan.', '公开支持某想法或计划的人。', '可数，常与 of 连用。', 'Proponents of the plan met city officials.', '该计划的支持者会见了市政官员。', [], ['exponent'], 'noun', 'countable', '政治'],
  ], 'proponents',['propose'], '←propose B1（词干 propon/propos 单字母 n→s 交替 + -ent 透明），B1 继承（brief 显示 ←?，经 proposer←propose[B1] 根提示确认）；近义 exponent 支持者、倡导者');

  W('proportional', 'adjective', '/prəˈpɔːʃənəl/', 'B2', ['CET4'], '成比例的；相称的', 'Being the same size or amount in relation to something else.', [
    ['成比例的；相称的', 'Being the same size or amount in relation to something else.', '与他物相比在大小或数量上相对应的。', '多作表语，常与 to 连用。', 'The rise was proportional to demand.', '增长与需求成比例。', ['proportional to'], ['relative'], 'adjective', '表语', '科学'],
  ], '',['proportion'], '←proportion B2 + -al（proportion 全段可见），B2 继承（brief 显示 ←?，自行扫根 proportion）；近义 relative 相对的、成比例的');

  W('proposal', 'noun', '/prəˈpəʊzəl/', 'B1', ['CET4'], '提议；建议', 'A plan or suggestion that is formally put forward.', [
    ['提议；建议', 'A plan or suggestion that is formally put forward.', '被正式提出的计划或建议。', '可数。', 'The council accepted the proposal.', '委员会接受了这项提议。', ['make a proposal'], ['motion', 'offer', 'project'], 'noun', 'countable', '商务'],
  ], 'proposals',['motion', 'offer', 'propose'], '←propose B1 + -al（e→∅+al，propos 全段可见），B1 继承（brief 显示 ←?，经 proposer←propose[B1] 根提示确认）；家族 motion 动议、offer 提案，近义 motion、offer、project 方案');
})(typeof window !== 'undefined' ? window : globalThis);
