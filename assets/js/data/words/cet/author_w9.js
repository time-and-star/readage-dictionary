/* data/words/cet/author_w9.js — W 批次 9，缺口 waters ~ whine，共 31 条
 * （25 单词 + 6 短语；短语清单：way in、way out、wear away、weigh down、weighing machine、
 *   western region；单词条目一律不标 .phrase）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_w9.txt，widx 032-062，词头无残缺；任务清单无 refs 列，refs 见 brief 文件）。
 * CET 标签照抄队列：CET4 × 7（weaken、weakness、wealthy、weight、western、whenever、wherever），
 *   CET6 × 0，其余 24 条 []（含 6 条短语）。
 * brief：%TEMP%\opencode\_w9_brief.txt 共 25 行，与本批 25 个单词一一对应（首行 waters、末行 whine），
 *   6 条短语不入 brief（与任务说明一致）；已逐条比对 brief 的 refs 与任务清单 fam/syn 列
 *   （refs = syn 列 + fam 列），25 行全部一一对应，无错位、无残缺词头，brief 与任务清单相符。
 *   注：任务文件头把 brief 路径写作 %TEMP%opencode_w9_brief.txt，实际落盘文件名为 _w9_brief.txt，按实际文件名读取。
 *   9 行给出根提示（water A1、wave A2 ×2、weak A2 ×2、week A1、weep B2、welcome A2、where A1），
 *   16 行显示 ←?，一律按规范 §5.2 用纯文本自扫（fs.readFileSync + 正则取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库，未创建/修改任何 author_*.js；
 *   curated.js 已核对，不含本批 25 个单词，只作参考）。
 * 扫根结论（自扫，第 4 参）：water A1、wave A2、weak A2、weigh A2、week A1、weep B2、welcome A2、
 *   where A1、when A1、well A1、web B1、wealth B1、weapon B1、wet A1、land A2、like A1、pay A1、
 *   ever A1（均 author_w1.js / author_w1.js 的 web、wealth、weapon、well、water、wave、weak、weigh、
 *   week、weep、welcome、where、when；like 见 author_l2.js、pay 见 author_p1.js、land 见 author_l1.js、
 *   ever 见 author_e2.js）；仅供近义/家族核对、不作根的：river A1、heavy A2、rich A1、west A1、
 *   odor B2、sniff C1、moan B2、impulse B2、surf B1、exit A2、website A2、page A1、tear B1、
 *   hospitable C1、popular A2、lucrative C1、coward 缺级、shortcoming B2、fatigue B2、marsh B2、
 *   hardware B1、erode B2、when/where 见上；wine A1、white A1（author_w2.js，whine 的切词假象面）。
 *   库内未收录：weakling 的 -ling 继承面仅见 darling B1（author_d1.js，导入值，与 dear A1 不符）。
 * · brief 根提示复核：9 行根提示按 §5.1 语义直连核对后全部采用，自扫第 4 参与 brief 所标级别一致
 *   （water A1、wave A2、weak A2、week A1、weep B2、welcome A2、where A1）。
 * · 继承（19 单词）：
 *   waters←water A1 + -s、waves←wave A2 + -s、weeks←week A1 + -s（复数形式单列词条，判断项，
 *     同库内 troops←troop B2、vehicles←vehicle A2、views←view A2 先例）；
 *   waterway←water A1、webpage←web B1、wetland←wet A1（§5.3 复合取首成分，判断项，
 *     同 run-up←run、trustworthy←trust B1、well-known 先例）；
 *   waver←wave A2 + -er（e→∅ 正字，先例 author_w7.js writer←write A1，判断项）；
 *   weaken←weak A2 + -en、weakness←weak A2 + -ness、weeping←weep B2 + -ing、welcoming←welcome A2 + -ing
 *     （均在 §5.4 透明后缀清单内）；
 *   wealthy←wealth B1 + -y（§4b，先例 noisy←noise A1、sugary←sugar A1，判断项）；
 *   weaponry←weapon B1 + -ry（§4c，先例 author_v2.js variety←vary B1、author_u4.js unity←unit A2
 *     与库内 machinery、pottery，判断项）；
 *   weight←weigh A2 + -t（词干附加成分，先例库内 height、thought、might 同为 +t 构形，判断项）；
 *   weighty←weigh A2 + -ty（§4c，先例 author_u4.js unity←unit A2；基词 weight 为本批 049 号词条、
 *     自扫时不在库，按任务口径改取词根级，判断项）；
 *   well-liked←well A1、well-paid←well A1（§5.3 复合取首成分；即便改取其后词根 like A1、pay A1 同级，
 *     两读一致，判断项）；
 *   whenever←when A1 + -ever、wherever←where A1 + -ever（-ever 亦为库内独立词 ever A1 且全段可见，
 *     先例 author_h4.js however、author_f2.js forever，判断项）。
 * · 留空（6 单词 + 6 短语）：
 *   weakling（-ling 不在清单，库内唯一 -ling 词 darling 为导入值、无继承先例，判断项）、
 *   western（-ern 不在清单，库内 eastern、southern、northern 一致留空，先例面即留空，判断项）、
 *   westward（-ward 不在清单，forward/backward/upward/downward/outward 级别均与首成分不符、
 *     属导入值而非继承所得，无先例可依，判断项）、
 *   whiff（拟声拟臭词，-iff 不在清单，odor、sniff 为同义用法非词根）、whim（-im 不在清单，
 *     whimsy 等同源词库内未收录）、whine（-ine 不在清单，与 wine A1、white A1 形近属切词假象）；
 *   6 条短语一律按 §6 分级留空。
 * CEFR 分布（25 单词）：A1 × 8（waters、waterway、weeks、well-liked、well-paid、wetland、whenever、
 *   wherever）、A2 × 7（waver、waves、weaken、weakness、weight、weighty、welcoming）、
 *   B1 × 3（wealthy、weaponry、webpage）、B2 × 1（weeping）、留空 × 6（weakling、western、westward、
 *   whiff、whim、whine）；短语 6 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_w9.js 必须在 _cet_helper.js 之后加载');

  W('waters', 'noun', '/ˈwɔːtəz/', 'A1', [], '水（复数）；（领）海域', 'Water in the plural, or the sea and rivers of a place.', [
    ['水（复数）', 'The plural of water, meaning water in general or a large amount of it.', 'water 的复数形式，指水这类物质或大量的水。', 'water 的复数形式单列词条；作主语时谓语用复数。', 'The spring waters taste sweet all year round.', '这泉水一年四季都是甜的。', ['drinking waters', 'mineral waters', 'crystal waters'], ['water'], 'noun', 'countable', '自然'],
    ['（领）海域；水面', 'The sea or the water of a particular country, especially when rights at sea are meant.', '某个国家或地区的海域或水面，尤指涉及海上权利时。', '常用复数形式，如 territorial waters、inland waters。', 'The ship sailed slowly into the waters of the bay.', '那艘船缓缓驶进了这片海湾的水域。', ['territorial waters', 'inland waters', 'foreign waters'], [], 'noun', 'uncountable', '地理'],
  ],'waters',['water'], 'brief 根提示 ←water A1 水（自扫 author_w1.js 第 4 参复核为 A1），waters 为 water 的复数形式单列词条，按 §4 forms 留空，A1 继承（判断项：复数单列，同库内 troops←troop B2、vehicles←vehicle A2、views←view A2 先例）；近义 water 水（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('waterway', 'noun', '/ˈwɔːtəweɪ/', 'A1', [], '水道；可通航的河流', 'A river or canal along which boats can travel.', [
    ['水道；可通航的河流', 'A river, canal, or other stretch of water that ships or boats can travel along.', '船舶可以通行的河流、运河或其他水道。', '可数，常见于运输与工业报道。', 'The new waterway links the port to the inland city.', '这条新水道把港口与内陆城市连接起来。', ['a navigable waterway', 'an inland waterway'], ['river'], 'noun', 'countable', '交通'],
    ['（输水用的）渠道；引水渠', 'A channel built to carry water to farmland or towns.', '为把水输送到农田或城镇而修筑的渠道。', '可数，农业与市政工程用语。', 'The irrigation waterway runs past the rice fields.', '这条引水渠从稻田旁穿过。', ['an irrigation waterway'], [], 'noun', 'countable', '农业'],
  ], 'waterways', ['river'], 'brief ←?，按 §5.2 自扫根：复合词 waterway = water + way，首成分 water A1 水、河流（自扫 author_w1.js 第 4 参）在库，按 §5.3 复合取首成分，「可通航的河道」与 water 语义直连，A1 继承（判断项：-way 不在 §5.4 清单，同 run-up←run、third-level←third A1 先例）；家族 river 河流与近义 river 河流（队列原样，fam 入第 10 参，syn 置首义项各恰好一次）');

  W('waver', 'verb', '/ˈweɪvə/', 'A2', [], '动摇；犹豫不决；（数量）波动', 'To move unsteadily, or to be unsure whether to act.', [
    ['犹豫不决；踌躇（是否行动）', 'To be unsure and slow to act, because you cannot decide what to do.', '因为拿不定主意而迟迟不决、行动迟疑。', '不及物动词，常与 about、over、between 连用。', 'She wavered for a moment before saying yes.', '她犹豫了一下才答应。', ['waver over a decision', 'never waver'], ['hesitate', 'hover'], 'verb', '不及物', '心理'],
    ['（观点、态度）动摇；改变', 'To change your opinion or your level of certainty slightly.', '在观点或态度上略有改变，或把握程度下降。', '不及物动词，主语常为 person、support、confidence。', 'His support for the plan began to waver.', '他对这个计划的支持开始动摇。', ['support wavers', 'confidence wavers'], [], 'verb', '不及物', '政治'],
    ['（数量、价格）波动；起伏', 'To move up and down again and again, in number, price, or level.', '在数量、价格或水平上反复上下变动。', '不及物动词，主语常为数字、价格、人数。', 'Prices wavered between four and five dollars all week.', '这一周价格在四到五美元之间起伏。', ['prices waver', 'figures waver'], ['fluctuate'], 'verb', '不及物', '商务'],
  ], 'wavers~wavered~wavered~wavering', ['hesitate'], 'brief 根提示 ←wave A2 波浪、波动（自扫 author_w1.js 第 4 参复核为 A2）+ -er（-er 在 §5.4 清单；e→∅ 正字，先例 author_w7.js writer←write A1），语义直连核对：wave「波动」→ waver「动摇、起伏」，通过，A2 继承（判断项披露）；家族 hesitate 犹豫与近义 hesitate、hover、fluctuate（队列原样，fam 入第 10 参，syn 置义项 1、义项 3，各恰好一次）');

  W('waves', 'noun', '/weɪvz/', 'A2', [], '波浪（复数）；浪潮', 'The plural of wave: the raised lines of water on the sea.', [
    ['波浪；浪（复数）', 'The raised moving lines of water on the surface of the sea or a lake.', '海面或湖面上隆起并移动的一道道水线。', 'wave 的复数形式单列词条；常与 the 连用，谈整体时谓语可用单数。', 'Big waves rolled in from the open sea.', '大浪从外海涌了过来。', ['big waves', 'breaking waves'], ['surf'], 'noun', 'countable', '自然'],
    ['（人群、事物的）浪潮；一阵', 'A large number of people or things arriving or happening together.', '一下子大量到来的人或事物。', 'a wave of 一波、一阵，后接名词。', 'A wave of new students arrived in September.', '九月来了一大波新生。', ['a wave of', 'a crime wave'], [], 'noun', 'countable', '社会'],
  ],'waves', ['surf'], 'brief 根提示 ←wave A2 波浪（自扫 author_w1.js 第 4 参复核为 A2），waves 为 wave 的复数形式单列词条，按 §4 forms 留空，A2 继承（判断项：复数单列，同库内 troops←troop B2、systems←system A2 先例）；家族 surf 海浪与近义 surf 海浪（队列原样，fam 入第 10 参，syn 置首义项各恰好一次）');

  W('way in', 'noun', '/ˌweɪ ˈɪn/', '', [], '入口；进入的方法或门路', 'A means of getting in, or an opening into a place.', [
    ['入口；进去的路', 'An opening or route through which a person can enter a place.', '供人进入某地的开口或路线。', '名词短语，常与 the、a 连用，也可接 into。', 'The locked gate is the only way in.', '上了锁的大门是唯一的入口。', ['the only way in', 'a way in to the market'], ['access'], 'noun', 'countable', '通用'],
    ['（进入某行业、圈子的）门路', 'A way of being accepted into a group, a job, or an industry.', '被某个群体、行业接纳的途径。', '名词短语，口语与新闻常用。', 'A college degree is the usual way in to this trade.', '大学学历是进入这一行的常规门路。', ['a way in to the trade'], [], 'noun', 'countable', '职业'],
  ],'ways in', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 access 通道、进入的机会（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('way out', 'noun', '/ˌweɪ ˈaʊt/', '', [], '出口；摆脱困境的办法', 'The opening that lets you leave, or a solution to a problem.', [
    ['出口；出去的路', 'An opening or route through which a person can leave a place.', '供人离开某地的开口或路线。', '名词短语，常与 the 连用。', 'The emergency exit is the way out from the hall.', '安全出口是离开大厅的出口。', ['the way out', 'a way out of the building'], ['exit'], 'noun', 'countable', '通用'],
    ['（困境的）出路；解决办法', 'A means of getting out of a difficult situation.', '摆脱困境的办法。', '名词短语，常用 a way out of sth。', 'We must find a way out of the deadlock.', '我们必须找到打破僵局的办法。', ['a way out of'], [], 'noun', 'countable', '口语'],
  ],'ways out', ['exit'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 exit 出口与近义 exit 出口（队列原样，fam 入第 10 参，syn 置首义项各恰好一次）').phrase = true;

  W('weaken', 'verb', '/ˈwiːkən/', 'A2', ['CET4'], '使变弱；削弱；使变稀', 'To make something weaker, or to become weaker.', [
    ['使减弱；削弱（力量、影响）', 'To reduce the strength, power, or effect of something.', '使某物的力量、权力或效力减弱。', '及物动词，宾语常为 influence、power、control、resolve。', 'The new leader weakened the authority of the board.', '新领导削弱了董事会的权威。', ['weaken the power of', 'weaken resolve'], ['dent', 'impair', 'undermine'], 'verb', '及物', '通用'],
    ['使变稀；冲淡（浓度）', 'To make a liquid thinner, or to reduce how strong a mixture is.', '使液体变稀，或使混合物的浓度降低。', '及物动词，宾语常为 sauce、paint、mixture。', 'Add more water to weaken the paint before use.', '使用前加水把漆调稀。', ['weaken the mixture', 'weaken the sauce'], ['dilute', 'thin'], 'verb', '及物', '科学'],
    ['（因损耗而）变弱；衰弱；衰退', 'To become slowly weaker or worse because of wear, age, or damage.', '因磨损、年久或受损而逐渐变弱、变差。', '不及物动词，也作及物；主语常为 rope、wall、health。', 'The old rope weakened under the heavy load.', '旧绳子在重载下变得松软了。', ['weaken with age', 'gradually weaken'], ['erode', 'flag'], 'verb', '不及物', '通用'],
  ], 'weakens~weakened~weakened~weakening', ['dilute', 'erode', 'impair', 'undermine'], 'brief ←?，按 §5.2 自扫根 weak A2 虚弱的（自扫 author_w1.js 第 4 参复核为 A2）+ -en（-en 在 §5.4 透明后缀清单），语义直连核对：weak「虚弱的」→ weaken「使变弱」，通过，A2 继承；家族 dilute、erode、impair、undermine 与近义 dent、dilute、erode、flag、impair、thin、undermine（队列原样，fam 入第 10 参，syn 分置义项 1、义项 2、义项 3，各恰好一次）；CET4 标签照抄队列');

  W('weakling', 'noun', '/ˈwiːklɪŋ/', '', [], '弱者；胆小鬼', 'A person who is weak in body or in character.', [
    ['（身体）虚弱的人；弱者', 'A person whose body is weak, frail, or easily exhausted.', '身体虚弱、容易疲惫的人。', '可数，略带贬义。', 'After the long climb the whole class looked like weaklings.', '长途攀登之后，全班看着都像一群弱者。', ['a physical weakling'], [], 'noun', 'countable', '通用'],
    ['（性格上）胆小鬼；懦夫', 'A person who shows no courage in facing difficulty or danger.', '面对困难或危险时毫无勇气的人。', '可数，贬义。', 'He is no weakling when it comes to defending his friends.', '说到保护朋友，他可一点不算胆小鬼。', ['a moral weakling'], ['coward'], 'noun', 'countable', '性格'],
  ], 'weaklings', ['coward'], 'brief 根提示 ←weak A2 虚弱的（自扫 author_w1.js 第 4 参复核为 A2），但 -ling 不在 §5.4 透明继承清单，按 §4c 查库内先例面：全库仅 author_d1.js darling B1 一条 -ling 词，其级别与首成分 dear A1 不符、属导入值而非继承所得，无继承先例可依；留空（判断项）；家族 coward 懦夫与近义 coward 懦夫（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('weakness', 'noun', '/ˈwiːknəs/', 'A2', ['CET4'], '虚弱；弱点', 'Lack of strength, or a fault that makes a person or thing weak.', [
    ['虚弱；体力不支', 'A lack of physical strength or energy.', '体力或精力不足。', '不可数，常用于 from weakness、a moment of weakness。', 'She walked all the way home from weakness.', '她因虚弱一路走回了家。', ['from weakness', 'a moment of weakness'], ['fatigue'], 'noun', 'uncountable', '健康'],
    ['弱点；缺点（人或事物）', 'A fault in the character or the make-up of a person or a thing.', '人或事物在性格、结构上的缺陷。', '可数，常用复数 weaknesses，也可说 a weakness in。', 'The plan has one big weakness: it costs too much.', '这个计划有个大缺点：成本太高。', ['a weakness in', 'human weakness'], ['shortcoming'], 'noun', 'countable', '通用'],
  ], 'weaknesses', ['shortcoming'], 'brief 根提示 ←weak A2 虚弱的（自扫 author_w1.js 第 4 参复核为 A2）+ -ness（-ness 在 §5.4 透明后缀清单），语义直连核对：weak「虚弱的」→ weakness「虚弱、弱点」，通过，A2 继承；家族 shortcoming 缺点与近义 fatigue 疲乏、shortcoming 缺点（队列原样，fam 入第 10 参，syn 置义项 1、义项 2 各恰好一次）；CET4 标签照抄队列');

  W('wealthy', 'adjective', '/ˈwelθi/', 'B1', ['CET4'], '富有的；富裕的', 'Having a lot of money, property, or resources.', [
    ['富有的；富裕的（人或家庭）', 'Having a large amount of money, property, or wealth.', '拥有大量金钱、财产或财富的。', '定语表语两用，常形容人、家庭；与 poor 相对。', 'Their family became wealthy after the war.', '战后他们家富起来了。', ['a wealthy family', 'wealthy people'], ['affluent', 'rich', 'well-off'], 'adjective', '定语/表语', '通用'],
    ['（地区、行业）富庶的；富裕的', 'Having plenty of money, trade, or natural resources, as a place or a business.', '作为地方或行业，拥有丰厚财源、贸易或自然资源的。', '定语表语两用，多见于较正式的书面语。', 'The port is a wealthy trading town.', '这个港口是个富庶的贸易城镇。', ['a wealthy region', 'a wealthy nation'], [], 'adjective', '定语/表语', '地理'],
  ], '', ['rich', 'well-off'], 'brief ←?，按 §5.2 自扫根 wealth B1 财富（自扫 author_w1.js 第 4 参复核为 B1；该词条备注明言「形容词 wealthy 富有的」）+ -y（-y 形容词后缀按 §4b 裁定：根词 wealth 全段可见、语义直连，先例 noisy←noise A1、sugary←sugar A1、showery←shower A2），B1 继承（判断项披露）；家族 rich、well-off 与近义 affluent、rich、well-off（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET4 标签照抄队列');

  W('weaponry', 'noun', '/ˈwepəni/', 'B1', [], '武器（总称）；军械', 'Weapons as a whole, especially those held by an army.', [
    ['武器（总称）；军械', 'Weapons considered as a group, especially the arms held by an army.', '作为整体的武器，尤指军队持有的军械。', '不可数，书面与新闻用语；作主语时谓语多用单数。', 'The rebels were denied any modern weaponry.', '叛军未得到任何现代武器。', ['modern weaponry', 'heavy weaponry'], ['hardware'], 'noun', 'uncountable', '军事'],
    ['（比喻）可用的斗争手段', 'Means of winning a conflict or a competition, as a group.', '赢得冲突或竞争中可借助的各种手段。', '不可数，常用于比喻。', 'Humour became his best weaponry in the debate.', '幽默成了他在辩论中最好的武器。', ['political weaponry'], [], 'noun', 'uncountable', '政治'],
  ], '',['weapon'], 'brief ←?，按 §5.2 自扫根 weapon B1 武器（自扫 author_w1.js 第 4 参复核为 B1；该词条备注明言「weaponry 是武器的总称」）+ -ry（-ry 不在 §5.4 清单，按 §4c 库内先例面裁定：同族名词化先例 author_v2.js variety←vary B1、author_u4.js unity←unit A2，库内 machinery、pottery、mockery），语义直连核对：weapon「武器」→ weaponry「武器总称」，通过，B1 继承（判断项披露）');

  W('wear away', 'verb', '/ˌweər əˈweɪ/', '', [], '磨损掉；逐渐消退', 'To be gradually rubbed away, or to fade bit by bit.', [
    ['（被）磨损；磨掉', 'To be gradually rubbed or dissolved away until little or nothing is left.', '逐渐被磨蚀或溶掉，直至几乎不剩。', '不及物短语动词；也有 wear sth away 的及物用法。', 'The lettering on the old sign had worn away.', '旧招牌上的字迹已经磨掉了。', ['wear away bit by bit', 'worn away by time'], ['erode'], 'verb', '不及物', '通用'],
    ['（痛苦、情绪）逐渐消退；变淡', 'To become slowly weaker, or to be removed little by little.', '逐渐变弱，或一点一点地消退。', '不及物短语动词，主语常为 pain、anger、memories。', 'The pain in her knee wore away over the months.', '她膝部的疼痛在几个月里渐渐消退了。', ['wear away slowly', 'the pain wears away'], [], 'verb', '不及物', '健康'],
  ],'wears away~wore away~worn away~wearing away', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 erode 侵蚀、腐蚀（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('webpage', 'noun', '/ˈwebpeɪdʒ/', 'B1', [], '网页', 'A single page on the World Wide Web.', [
    ['网页；网站上的一个页面', 'One of the separate pages that together make up a website.', '构成网站的一个单独页面。', '可数，互联网用语；与 page、site 相比多了前缀 web。', 'The company put a notice on its home webpage.', '公司把通知放在了它的主页上。', ['a home webpage', 'open a webpage', 'a personal webpage'], ['website'], 'noun', 'countable', '媒体'],
  ], 'webpages',['web'], 'brief ←?，按 §5.2 自扫根：复合词 webpage = web + page，首成分 web B1 网、网页（自扫 author_w1.js 第 4 参复核为 B1；该词条备注明言「website、webcast 都由 web 构成」）在库，按 §5.3 取首成分，「网页」与 web 语义直连，B1 继承（判断项：-page 不在 §5.4 清单，复合取首成分裁定，同 author_t8.js trustworthy←trust B1、run-up←run 先例）；近义 website 网站（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('weeks', 'noun', '/wiːks/', 'A1', [], '星期（复数）；数周时间', 'The plural of week: separate periods of seven days.', [
    ['星期；周（复数）', 'Separate periods of seven days, taken one after another.', '一个接一个的七天时段。', 'week 的复数形式单列词条；与 the 连用谈整体时谓语可用单数。', 'She stayed with us for three weeks.', '她和我们住了三个星期。', ['for weeks', 'in a few weeks'], ['month'], 'noun', 'countable', '通用'],
    ['（以周计的）一段时间；数周', 'A stretch of time measured in weeks rather than in days.', '以周为单位计算的一段时间。', '常用于 for weeks、in weeks 等结构，口语语气。', 'The repairs will take another two weeks.', '修理还要再花两三周时间。', ['in weeks', 'another few weeks'], [], 'noun', 'countable', '口语'],
  ],'weeks',['week'], 'brief 根提示 ←week A1 星期（自扫 author_w1.js 第 4 参复核为 A1），weeks 为 week 的复数形式单列词条，按 §4 forms 留空，A1 继承（判断项：复数单列，同库内 troops←troop B2、vehicles←vehicle A2 先例）；近义 month 一个月（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('weeping', 'noun/adjective', '/ˈwiːpɪŋ/', 'B2', [], '哭泣；（书面）哭泣的', 'The act of crying, or describing someone who is crying.', [
    ['哭泣；流泪', 'The act of crying because of sadness, grief, or pain.', '因悲伤、悲痛或疼痛而哭泣。', '不可数，动词 weep 的 -ing 名词化；比 cry 更书面。', 'Her voice was broken by quiet weeping.', '她因轻声哭泣而声音哽咽。', ['quiet weeping', 'burst into weeping'], ['tear'], 'noun', 'uncountable', '情感'],
    ['（书面）哭泣的；泪流满面的', 'Full of tears, or covered in tears.', '满是泪水的，或泪流满面的。', '作定语或表语，书面与文学用语。', 'The wet streets were full of weeping children.', '湿漉漉的街上满是哭泣的孩子。', ['weeping children', 'a weeping crowd'], [], 'adjective', '定语', '文学'],
  ], '',['weep'], 'brief 根提示 ←weep B2 哭泣（自扫 author_w1.js 第 4 参复核为 B2；该词条备注明言「weeping 哭泣的」）+ -ing（动名词转名词，-ing 在 §5.4 清单），语义直连核对：weep「哭泣」→ weeping「哭泣（过程）／哭泣的」，通过，B2 继承；不可数与形容词用法无词形变化故 forms 留空；近义 tear 眼泪（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('weigh down', 'verb', '/ˌweɪ ˈdaʊn/', '', [], '压下；使心情沉重', 'To press something down, or to make a person feel burdened.', [
    ['压下；使下沉（重量、压力）', 'To make something heavy enough to sink, or to press it downwards.', '使某物变重而下沉，或把它往下压。', '及物短语动词，宾语常为 branch、net、lid。', 'Heavy snow weighed down the young branches.', '大雪把嫩枝压弯了。', ['weigh down the branches', 'weigh down a net'], ['oppress'], 'verb', '及物', '自然'],
    ['（情绪、负担）压得喘不过气', 'To fill a person with worry, so that they feel heavy and tired.', '使某人心事重重，感到沉重疲惫。', '及物短语动词，宾语常为 worry、guilt、stress。', 'The long wait weighed her down.', '漫长的等待压得她喘不过气。', ['weighed down by worry', 'weighed down by guilt'], [], 'verb', '及物', '心理'],
  ],'weighs down~weighed down~weighing down', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 oppress 压迫、压抑（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('weighing machine', 'noun', '/ˈweɪɪŋ məˌʃiːn/', '', [], '磅秤；称重机', 'A machine for measuring how heavy something is.', [
    ['磅秤；地磅；称重机', 'A machine for weighing people, vehicles, or goods.', '用来给人、车辆或货物称重的机器。', '名词短语，工业与交通场所常见。', 'The truck had to stop on the weighing machine.', '卡车得在地磅上称重。', ['a platform weighing machine', 'a public weighing machine'], ['scale'], 'noun', 'countable', '工业'],
    ['（商店、浴室里的）台秤；体重秤', 'A small scale for weighing food or a person.', '用来称食物或称体重的秤。', '名词短语，日常与营业场所用语。', 'A weighing machine in the corner shows your weight.', '角落里的体重秤可以显示你的体重。', ['a bathroom weighing machine'], [], 'noun', 'countable', '家居'],
  ],'weighing machines', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 scale 秤、磅秤（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('weight', 'noun', '/weɪt/', 'A2', ['CET4'], '重量；体重；分量；重要性', 'How heavy something is, and by extension how important it is.', [
    ['重量；体重', 'How heavy a person or a thing is, measured in units.', '人或物有多重，以单位衡量。', '可数也可不可数：weigh 40 pounds of weight、put on weight。', 'She has lost a lot of weight this year.', '她今年瘦了很多。', ['lose weight', 'a heavy weight', 'put on weight'], ['mass', 'pound'], 'noun', 'countable', '健康'],
    ['（镇纸、秤锤、铅坠等）重物', 'An object used because of how heavy it is, to hold something down or to measure.', '因够重而被使用的物件，用来压住东西或用来称量。', '可数；the weight 指单件重物。', 'He put a weight on the papers so they would not blow away.', '他在文件上压了个重物，免得被吹走。', ['a cast-iron weight', 'the weight on a fishing line'], ['pendulum'], 'noun', 'countable', '工具'],
    ['分量；重要性；影响力', 'How important or influential something is.', '某事有多重要、有多大影响力。', '不可数，常用于 the weight of、carry weight 等结构。', 'Nobody attached much weight to his warning.', '没人太当回事，他的警告没人重视。', ['carry weight', 'the weight of evidence'], ['moment', 'substance'], 'noun', 'uncountable', '通用'],
  ], 'weights', ['pendulum', 'ton'], 'brief ←?，按 §5.2 自扫根 weigh A2 秤、称量（自扫 author_w1.js 第 4 参复核为 A2；该词条备注明言「weight 是名词重量，weigh 是动词」）；weight = weigh + -t，weigh 全段可见于 weight，-t 为中英语词干附加成分（§5.5 之外的正字类，库内先例 height A2、thought A2、might A2 同为 +t 构形，无更近的继承先例，按 §4c 先例面判断裁定）；语义直连核对：weigh「称量」→ weight「重量」，通过，A2 继承（判断项披露）；家族 pendulum、ton 与近义 mass、moment、pendulum、pound、substance（队列原样，fam 入第 10 参，syn 置义项 1、义项 2、义项 3，各恰好一次）；CET4 标签照抄队列');

  W('weighty', 'adjective', '/ˈweɪti/', 'A2', [], '沉重的；有分量的；重大的', 'Heavy, or important enough to have a strong effect.', [
    ['沉重的；重的', 'Heavy in weight, or holding a large amount of something.', '重量大的，或装有大量某物的。', '定语表语两用，书面语。', 'They carried a weighty bag of tools up the stairs.', '他们提着一只装工具的沉袋子走上楼梯。', ['a weighty load', 'a weighty bag'], ['heavy'], 'adjective', '定语/表语', '通用'],
    ['（论点、问题等）重大的；有分量的', 'Important and strong enough to affect how people think or decide.', '重要到足以影响人们思考或决策的。', '定语表语两用，常形容 argument、issue、consideration。', 'The lawyer raised a weighty argument against the plan.', '律师对这个计划提出了有力的反驳。', ['weighty evidence', 'a weighty argument'], [], 'adjective', '定语/表语', '法律'],
  ], '', ['heavy'], 'brief ←?，按 §5.2 自扫根：基词 weight 为本批第 049 号词条，自扫时不在库，按任务口径（基词不在库则取词根级）改取词根 weigh A2 秤、称量（自扫 author_w1.js 第 4 参复核为 A2）+ -ty（-ty 不在 §5.4 清单，按 §4c 库内先例面裁定：先例 author_u4.js unity←unit A2、author_s12.js sentimentality←sentiment C1、库内 sovereignty、sensitivity、ambiguity）；语义直连核对：weigh「称量」→ weighty「沉重的、有分量的」，通过，A2 继承（判断项披露）；家族 heavy 沉重的与近义 heavy 沉重的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('welcoming', 'adjective', '/ˈwelkəmɪŋ/', 'A2', [], '热情的；欢迎的', 'Warm and glad to receive visitors or guests.', [
    ['（气氛、地方）友好愉快的', 'Warm, friendly, and pleasant for people to be in.', '热情友好、让人感到舒服的。', '定语表语两用，常形容 atmosphere、place。', 'The pub has a warm and welcoming atmosphere.', '这家小酒馆气氛温暖而友好。', ['a welcoming atmosphere', 'a welcoming place'], ['hospitable'], 'adjective', '定语/表语', '通用'],
    ['（人）欢迎的；盛情接待的', 'Showing gladness at receiving visitors or guests.', '表现出乐于接待来客的。', '定语表语两用，常形容 host、family、staff。', 'Our landlady was very welcoming from the start.', '我们的女房东从一开始就非常热情。', ['a welcoming host', 'a welcoming smile'], [], 'adjective', '定语/表语', '家庭'],
  ], '', ['hospitable'], 'brief 根提示 ←welcome A2 欢迎（自扫 author_w1.js 第 4 参复核为 A2；该词条备注明言「welcoming 热情好客的」）+ -ing（-ing 在 §5.4 清单），语义直连核对：welcome「欢迎」→ welcoming「欢迎的、热情的」，通过，A2 继承；形容词无词形变化故 forms 留空；家族 hospitable 好客的与近义 hospitable 好客的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('well-liked', 'adjective', '/ˌwel ˈlaɪkt/', 'A1', [], '讨人喜欢的；受欢迎的', 'Liked by most people and thought well of.', [
    ['讨人喜欢的；受欢迎的（人）', 'Pleasing to most people, and well thought of by them.', '讨大多数人喜欢、给人好感的。', '定语表语两用；可与 very、quite 连用。', 'She is a warm and well-liked member of staff.', '她是位温暖又受人喜欢的员工。', ['a well-liked teacher', 'well-liked by students'], ['popular'], 'adjective', '定语/表语', '社交'],
    ['（东西、节目）受欢迎的；抢手的', 'Well received by the people who use it, watch it, or buy it.', '受到使用者、观众或顾客好评的。', '定语表语两用，可用于产品、节目、设计。', 'It is a well-liked design that sells out fast.', '这是款很抢手、卖得很快的款式。', ['a well-liked design', 'a well-liked programme'], [], 'adjective', '定语/表语', '商务'],
  ], '', ['popular'], 'brief ←?，按 §5.2 自扫根：复合词 well-liked = well + liked，首成分 well A1 好地（自扫 author_w1.js 第 4 参复核为 A1）在库，按 §5.3 取首成分，A1 继承；即便按「首成分为程度副词性成分、故改取其后词根」的口径，后成分 like A1 喜欢（自扫 author_l2.js 第 4 参复核为 A1），两读同为 A1，结论一致；语义直连核对：like「喜欢」→ well-liked「讨人喜欢的」，通过（判断项：-liked 即 liked 的 -ed 形式，-ed 在 §5.4 清单；同库内连字符复合 well-known A2 先例）；家族 popular 受欢迎的与近义 popular 受欢迎的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('well-paid', 'adjective', '/ˌwel ˈpeɪd/', 'A1', [], '报酬丰厚的；工资高的', 'Giving a high reward for the work that is done.', [
    ['报酬丰厚的；工资高的', 'Offering a large amount of money for the work.', '为所付出的劳动提供很多报酬的。', '定语表语两用，常修饰 job、post、work。', 'She found a well-paid job in the city.', '她在城里找到一份报酬丰厚的工作。', ['a well-paid job', 'a well-paid post'], ['lucrative'], 'adjective', '定语/表语', '职业'],
    ['（活儿、合同）划算的；报酬优厚的', 'Describing a piece of work or a contract that brings good money.', '形容能带来丰厚收入的一件事情或一份合约。', '定语表语两用，宾语常为 job、post、assignment。', 'The mining contract is a well-paid piece of work.', '这份采矿合同是件报酬优厚的活儿。', ['a well-paid piece of work', 'a well-paid contract'], [], 'adjective', '定语/表语', '商务'],
  ], '',['well', 'pay'], 'brief ←?，按 §5.2 自扫根：复合词 well-paid = well + paid，首成分 well A1 好地（自扫 author_w1.js 第 4 参复核为 A1）在库，按 §5.3 取首成分，A1 继承；即便按「首成分为程度副词性成分、故改取其后词根」的口径，后成分 pay A1 支付、薪水（自扫 author_p1.js 第 4 参复核为 A1，paid 为 pay 的过去分词），两读同为 A1，结论一致；语义直连核对：pay「支付、薪水」→ well-paid「报酬丰厚的」，通过（判断项：-paid 即 paid 的 -ed 形式，-ed 在 §5.4 清单；同库内连字符复合 well-known A2 先例）；近义 lucrative 获利丰厚的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('western', 'adjective', '/ˈwestən/', '', ['CET4'], '西部的；西方的', 'In or towards the west, especially the western part of a country.', [
    ['（某地的）西部的；西部的地区', 'Belonging to or living in the western part of a country or region.', '属于或居住在某国或某地区西部的。', '定语表语两用；也用于专有名词的一部分。', 'The western counties are very rainy.', '西部各郡雨水很多。', ['the western part', 'western Europe'], ['west'], 'adjective', '定语/表语', '地理'],
    ['（美国）西部地区的', 'Of or from the western United States.', '美国西部的，或来自美国西部的。', '定语表语两用；the West 指美国西部。', 'She moved to the West Coast after college.', '大学毕业后她搬到了西海岸。', ['the West Coast', 'the western states'], [], 'adjective', '定语/表语', '历史'],
    ['（文化）西方的；西方国家的', 'Connected with the ideas, customs, and values of western countries.', '与西方国家观念、习俗与价值观有关的。', '定语表语两用，常见于 the Western world。', 'The book is widely read in the West.', '这本书在西方广为流传。', ['the Western world', 'Western culture'], [], 'adjective', '定语/表语', '文化'],
  ], '', ['west'], 'brief ←?，按 §5.2 自扫根 west A1 西（自扫 author_w1.js 第 4 参复核为 A1；该词条备注明言「形容词 western 西部的」）+ -ern（方位后缀，不在 §5.4 透明继承清单）；按 §4c 库内先例面裁定：库内同族 -ern 词条 eastern（author_e3.js）、southern（author_s18.js）、northern（author_n4.js）依一致结论全部留空，先例面即留空而非继承，故不继承，留空（判断项）；家族 west 西与近义 west 西（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET4 标签照抄队列');

  W('western region', 'noun', '/ˈwestən ˌriːdʒən/', '', [], '西部地区', 'The western part of a country, region, or continent.', [
    ['（一个国家的）西部地区', 'The part of a country that lies to the west of the rest.', '一国中位于其余部分以西的地区。', '名词短语，地理与新闻常用。', 'Flooding hit the western region last night.', '洪水昨夜袭击了西部地区。', ['in the western region', 'the dry western region'], ['west'], 'noun', 'countable', '地理'],
    ['（世界）西方地区；西部地带', 'A large area lying to the west, such as a continent or a wide tract of land.', '位于西面的一大片地区，如一块大陆或广阔地带。', '名词短语；首字母大写时专指西方。', 'Little rain falls in the dry western region.', '干旱的西部地区几乎没有降雨。', ['the arid western region'], [], 'noun', 'countable', '地理'],
  ],'western regions', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 west 西、西方（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('westward', 'adverb/adjective', '/ˈwestwəd/', '', [], '向西；朝西的', 'In the direction of the west, or pointing to the west.', [
    ['向西；朝西方向', 'In the direction of the west.', '朝着西的方向。', '修饰动词，书面与地图用语。', 'The plane turned westward before the storm.', '飞机在风暴到来前转向西。', ['travel westward', 'move westward'], ['west'], 'adverb', '不及物', '交通'],
    ['朝西的；向西的', 'Pointing to or facing the west.', '指向西面或朝向西面的。', '作定语，书面与地图用语；也作副词用。', 'The sign had a westward arrow on it.', '标志上有一个朝西的箭头。', ['a westward arrow', 'a westward course'], [], 'adjective', '定语', '通用'],
  ], '', ['west'], 'brief ←?，按 §5.2 自扫根 west A1 西（自扫 author_w1.js 第 4 参复核为 A1）+ -ward（方位后缀，不在 §5.4 透明继承清单）；按 §4c 查库内先例面：-ward 词条 forward A2（author_f2.js）、backward B1（author_b1.js）、upward B1（author_u1.js）、downward B1（author_d2.js）、outward B2（author_o2.js）虽均有级别，但级别与首成分 back A1、up A1、down A1、out A1 不符，均属导入值而非按继承得出，无继承先例可依；留空（判断项）；家族 west 西与近义 west 西（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('wetland', 'noun', '/ˈwetlənd/', 'A1', [], '湿地', 'Land that is covered with water or is always wet.', [
    ['湿地', 'Land that is covered by water for much of the year, or that is always very wet.', '一年中大部分时间被水淹没或始终湿漉漉的土地。', '可数，常作定语；环境与地理用语。', 'The wetland is home to many kinds of bird.', '这片湿地是许多鸟类的家园。', ['a coastal wetland', 'protect wetland'], ['marsh'], 'noun', 'countable', '环境'],
    ['（河口、湖岸的）滩涂；沼泽地', 'Low-lying land where water collects, often where a river meets the sea.', '地势低洼、容易积水的地带，常见于河口或湖岸。', '可数，地理与农业语境。', 'Flood water spread into the wetland behind the dunes.', '洪水漫进了沙丘后面的湿地。', ['a river wetland', 'a tidal wetland'], [], 'noun', 'countable', '地理'],
  ], 'wetlands',['wet'], 'brief ←?，按 §5.2 自扫根：复合词 wetland = wet + land，首成分 wet A1 湿的（自扫 author_w1.js 第 4 参复核为 A1）在库，按 §5.3 取首成分，「湿地」与 wet 语义直连，A1 继承（判断项：-land 不在 §5.4 清单，同 run-up←run、third-level←third A1 先例；后成分 land A2 亦在库 author_l1.js，取后成分则为 A2，本条按首成分口径取 A1）；近义 marsh 沼泽（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('whenever', 'adverb/conjunction', '/wenˈevə/', 'A1', ['CET4'], '无论何时；每当', 'At every time that something happens, or at any time.', [
    ['无论何时；什么时候都可以', 'Used to say that something is true or allowed at every possible time.', '用于表示某事在任何时候都成立或都被允许。', '连接副词兼连词，引导时间状语从句，从句用现在时。', 'Come here whenever you like.', '你想什么时候来就什么时候来。', ['whenever you like', 'whenever possible', 'whenever it suits you'], ['when'], 'adverb', '不及物', '通用'],
    ['每当……的时候；每逢', 'Every time that a repeated event happens.', '在某个反复出现的事件每次发生时。', '连词，引导时间状语从句；加 ever 语气更强。', 'Whenever the phone rings, take a message.', '电话一响你就记个口信。', ['whenever the phone rings', 'whenever possible'], [], 'conjunction', '不及物', '语法'],
  ], '',['when'], 'brief ←?，按 §5.2 自扫根：基词 when A1 什么时候（自扫 author_w1.js 第 4 参复核为 A1）在库，whenever = when + -ever；-ever 本身亦为库内独立词 ever A1（自扫 author_e2.js 第 4 参复核为 A1）且全段可见于 whenever 与 wherever，判为透明后缀（先例面：author_h4.js however B1、author_f2.js forever B1 的 -ever 复合在库均有级别）；语义直连核对：when「什么时候」→ whenever「无论何时」，通过，A1 继承（判断项披露）；CET4 标签照抄队列；fam 队列为空故第 10 参 []');

  W('wherever', 'adverb/conjunction', '/ˌweərˈevə/', 'A1', ['CET4'], '无论在哪里；随便哪里', 'In or to any place that is chosen or mentioned.', [
    ['（引导从句）无论在哪里', 'Used to say that something applies in every place that is mentioned.', '用于表示某事在提到的每一个地方都成立。', '连接副词兼连词，引导地点状语从句。', 'Follow me wherever I go.', '无论我走到哪里你都跟着我。', ['wherever you go', 'wherever he is', 'wherever they live'], ['where'], 'adverb', '不及物', '通用'],
    ['（口语）随便哪里；任何地方', 'Any place at all, when the exact place does not matter.', '完全泛指任何地方，说话时不强调具体位置。', '口语用法，多用于 or wherever、wherever you like 一类的结构。', 'I will go anywhere or wherever you like.', '我哪儿都行，或者你喜欢的随便哪个地方。', ['anywhere or wherever', 'wherever you like'], [], 'adverb', '不及物', '口语'],
  ], '', ['where'], 'brief 根提示 ←where A1 哪里（自扫 author_w1.js 第 4 参复核为 A1）adverb/conjunction，wherever = where + -ever；-ever 为库内独立词 ever A1（author_e2.js）且全段可见，判为透明后缀（同 whenever 裁定，先例 author_h4.js however B1、author_f2.js forever B1）；语义直连核对：where「哪里」→ wherever「无论哪里」，通过，A1 继承（判断项披露）；家族 where 哪里与近义 where 哪里（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET4 标签照抄队列');

  W('whiff', 'noun/verb', '/wɪf/', '', [], '一股（难闻的）气味；发出气味', 'A smell that arrives suddenly, or to give off such a smell.', [
    ['（突然飘来的）一股气味', 'A smell that reaches you suddenly in one breath.', '一下子飘进鼻子里的气味。', '可数，口语用语，多指闻起来不太好闻的气味。', 'He caught a whiff of tobacco from the office.', '他闻到办公室里飘来一股烟草味。', ['a whiff of smoke', 'a whiff of perfume'], ['odor', 'sniff'], 'noun', 'countable', '口语'],
    ['（动词）发出难闻气味；闻到', 'To give off such a smell, or to smell something faintly.', '散发出这种（难闻的）气味，或淡淡地闻到。', '动词，书面与较旧的用法；常与 of 连用。', 'The old cellar whiffed of damp and rot.', '那间旧地窖散发出潮湿和腐朽的气味。', ['whiff of damp', 'whiff of smoke'], [], 'verb', '不及物', '书面'],
  ], 'whiffs~whiffed~whiffed~whiffing', ['sniff'], 'brief ←?，按 §5.2 自扫根：库内无 whiff 的语义直连词根（whiff 为拟声拟臭词，中古英语来源，-iff 不在 §5.4 清单；同义面 odor B2（author_o1.js）、sniff C1（author_s7.js）属同义用法而非词根，与 whiff 词首非全段共享，兄弟派生 §5.6 不成立），留空；混合名词/动词按 §4 写动词 4 形；家族 sniff 嗅闻与近义 odor 气味、sniff 嗅闻（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('whim', 'noun', '/wɪm/', '', [], '一时冲动；心血来潮', 'A sudden idea that makes someone want to do something.', [
    ['一时冲动；心血来潮', 'A sudden wish to do something that seems unimportant.', '突然想去做某事的念头，通常无关紧要。', '可数，常用于 on a whim、a whim of 一类的结构。', 'She bought the hat on a whim.', '她一时冲动买了那顶帽子。', ['on a whim', 'a sudden whim', 'a whim of fancy'], ['impulse'], 'noun', 'countable', '心理'],
    ['（突然冒出的）怪念头；奇想', 'A strange, unexpected idea that comes into the mind.', '脑中突然冒出的奇特想法。', '可数，文学与较旧的用法。', 'The writer was famous for his whims and inventions.', '这位作家以奇思妙想著称。', ['a passing whim', 'a writer full of whims'], [], 'noun', 'countable', '文学'],
  ], 'whims', ['whimsical'], 'whimsical 是形容词，表示异想天开的、古怪的；近义 impulse 冲动。');

  W('whine', 'verb/noun', '/waɪn/', '', [], '呜咽；哀鸣；抱怨', 'To cry in a high weak voice, or to complain in such a voice.', [
    ['（因痛苦）呜咽；哀鸣', 'To cry in a high, weak voice because of pain or sadness.', '因疼痛或难过而用又高又弱的声音哭叫。', '不及物动词，形容人或动物发出的声音。', 'The little boy whined after his lost toy.', '小男孩丢了玩具后呜呜地哭。', ['whine in pain', 'a whining dog'], ['moan'], 'verb', '不及物', '通用'],
    ['（因不满而）抱怨；发牢骚', 'To complain in a voice that sounds weak and irritating.', '用一种软弱而令人烦躁的声调抱怨。', '不及物动词，常与 about、for 连用；语气含贬义。', 'Drivers whined about the new parking rules.', '司机们抱怨新的停车规定。', ['whine about', 'stop whining'], [], 'verb', '不及物', '口语'],
    ['哀鸣声；呜咽声；尖响', 'A high, weak cry, or the complaining sound of a person or a machine.', '又高又弱的哭声，或人、机器发出的那种尖响。', '可数，the whine 指那种声音。', 'The old gate let out a long whine.', '旧大门发出一声长长的尖响。', ['a long whine', 'the whine of an engine'], [], 'noun', 'countable', '通用'],
  ], 'whines~whined~whined~whining', [], 'brief ←?，按 §5.2 自扫根：库内无 whine 的语义直连词根（-ine 不在 §5.4 清单；与 wine A1 酒、white A1 白（均 author_w2.js）形近属切词假象，规范 §5.7；近义 moan B2 呻吟（author_m2.js）属同义用法而非词根，与 whine 词首非全段共享，兄弟派生 §5.6 不成立），留空；混合动词/名词按 §4 写动词 4 形；近义 moan 呻吟、抱怨（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

})(typeof window !== 'undefined' ? window : globalThis);
