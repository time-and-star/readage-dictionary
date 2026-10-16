/* data/words/cet/author_v3.js — V 批次 3，缺口 vindicate ~ vs，共 27 条
 * （25 单词 + 2 短语；短语清单：virtual world、vote in，均标 .phrase = true）。
 * 来源：family + 义项近义缺口，fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_v3.txt，widx 032-058，词头无残缺、无空格异常）。
 * brief：%TEMP%\opencode\_v3_brief.txt 共 25 行，与本批 25 个单词一一对应（短语 virtual world、
 *   vote in 不入 brief，与任务说明一致；首行 vindicate、末行 vs）。brief 的 refs 列与任务清单
 *   fam + syn 逐条比对一致，无错位，未触发额外自扫说明。
 * CET 标签照抄队列：CET4 × 8（violation、violence、visibility、visitor、vitality、vocational、
 *   voltage、voter），CET6 × 0，其余 19 条 []（含 2 条短语）。
 * brief 25 行中 22 行显示 ←?，3 行给出根提示（vital B2 adjective、vote A2 verb/noun ×2）；
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + 定位词头取第 4 参，扫
 *   assets/js/data/words/cet/author_*.js 与 adapt.js、curated.js，仅只读，未 require 全库，
 *   未写入任何非本任务文件）。
 * 扫根结论（自扫，第 4 参）：根在 author_v1.js——violate B2、violent B1、violin A2、visible B1、
 *   visual B1、vital B2、visit A1、vocation C1、vice B2、versus B2、victory B1、vivid B2、
 *   vinegar B1、vote A2；旁证根/近义同库词级——thick A2（author_t1.js）、grape A2（author_g1.js）、
 *   wine A1（author_w2.js）、purple A1（author_p3.js）、namely B2（author_n1.js）、
 *   oral B1（author_o1.js）、heave C1（author_h2.js）、polytechnic B2（author_p2.js）、
 *   elect B1、electoral B2（author_e1.js）、profile B2（author_p3.js）、guest A2（author_g1.js）、
 *   transient C1（author_t2.js）、vigor B2（author_v1.js）。
 * brief 根提示复核：vital [B2]、vote [A2] ×2 经自扫同级复核通过，照用。
 * · 继承（13 单词）：
 *   violation←violate B2 + -ion（-ion 在 §5.4 清单，-ate→-ion 属 e→∅+ion 正字类）；
 *   violence←violent B1 + -ence（-ence 在 §5.4 清单，-ent→-ence 为 t→ce 音变）；
 *   visitor←visit A1 + -or、voter←vote A2 + -or、voting←vote A2 + -ing（-or/-ing 在 §5.4 清单，
 *     施事者/动作名词与词根语义直连，§5.4 语义直连核对通过）；
 *   vocational←vocation C1 + -al（-al 在 §5.4 清单，语义直连）；
 *   visibility←visible B1 + -ity、vitality←vital B2 + -ity（-ity 词尾 -ty 属 §5.4 4c 清单外，
 *     按库内先例面裁定，判断项）；
 *   visualise←visual B1 + -ise、visualize←visual B1 + -ize（4c，先例 specialize←special A2、
 *     stabilise←stable B2，判断项）；
 *   viola←violin A2（§5.6 兄弟派生：词首 viol- 整段共享 + 同族弦乐器语义直连，判断项）；
 *   vise←vice B2（vice「老虎钳」义的美式拼写变体，判断项）；
 *   vs←versus B2（versus 库内备注明写「缩写 vs」，书写缩略但读全形，判断项）。
 * · 留空（12 单词 + 2 短语）：
 *   vindicate（库内无 vindic- 根，-ate 不在清单，词源同 victory B1 但现代语义不直连，判断项）、
 *   vine（库内无根，grape A2 为家族/近义非词根）、
 *   vintage（库内无根，词首 vin- 同 vinegar B1 但语义不直连，wine 为家族/近义非词根）、
 *   violet（violate B2 形近但语义不直连，切词假象）、
 *   virtuoso（-oso 不在清单，virtue B2、virtual B2 同段但语义不直连）、
 *   viscous（-ous 在清单但库内无 visc- 根，thick A2 为近义非词根）、
 *   visor（-or 在清单但根词 vis- 不在库，与 vision B2、visual B1 形近不直连，判断项）、
 *   vista（vis- 同 vision B2 但「远景」与「视觉」非直连，-a 尾无先例，判断项）、
 *   viva（库内无根，-a 尾不在清单，oral B1 为近义非词根）、
 *   viz（videlicet 书写缩略形，库内无词根，同 kg/km 缩略留空先例）、
 *   voltage（volt B1 在库但 -age 不在清单，库内 -age 先例留空与继承并存，先例不一致无把握，判断项）、
 *   vomit（库内无根，-it 不在清单，heave C1 为近义非词根）；
 *   2 条短语按 §6 分级留空。
 * CEFR 分布（25 单词）：A1 × 1（visitor）、A2 × 3（viola、voter、voting）、
 *   B1 × 4（violence、visibility、visualise、visualize）、B2 × 4（violation、vise、vitality、vs）、
 *   C1 × 1（vocational）、留空 × 12；短语 2 条全留空（合计留空 14 条）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_v3.js 必须在 _cet_helper.js 之后加载');

  W('vindicate', 'verb', '/ˈvɪndɪkeɪt/', '', [], '证明清白；捍卫名誉', 'To show that something or somebody was right after all.', [
    ['证明清白；洗清冤屈', 'To prove that a person or a decision was right, after they have been criticised or doubted.', '证明某人或某个决定在受到批评或怀疑之后确实是正确的。', '及物动词，宾语是人、名誉或决定，常与 of 连用。', 'The inquiry fully vindicated her decision to stop the project.', '调查完全证明她叫停该项目的决定是正确的。', ['vindicate a decision', 'fully vindicated'], ['rehabilitate'], 'verb', '及物', '法律'],
    ['证明…正确；为…辩明', 'To show that a theory, an idea or a claim can be justified by facts.', '用事实表明某种理论、想法或主张站得住脚。', '及物动词，宾语是理论、预测或说法。', 'Later results seemed to vindicate the original claim.', '后来的结果似乎印证了最初的那个主张。', ['vindicate a theory', 'vindicate a prediction'], [], 'verb', '及物', '科学'],
  ], 'vindicates~vindicated~vindicated~vindicating', [], 'brief 显示 ←?，按 §5.2 自扫根：库内无 vindicate/vindictive 同形条目，-ate 不在 §5.4 清单；词源与 victory B1 胜利、成功（author_v1.js 第 4 参）相关，但「证明…正确」与「胜利」现代语义不直连，兄弟派生 §5.6 不成立，留空（判断项，供主 agent 裁定）；近义 rehabilitate 恢复名誉、平反（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('vine', 'noun', '/vaɪn/', '', [], '葡萄藤；攀缘藤本', 'A climbing plant with long thin stems, such as the grapevine.', [
    ['葡萄藤', 'The climbing plant whose fruit is grapes, with stems that spread over the ground or climb up a support.', '结出葡萄的藤蔓，茎沿地面铺开或攀附支架生长。', '可数，常与 on、grow、along 连用。', 'Grapes ripen on the vine in late summer.', '夏末葡萄在藤上成熟。', ['on the vine', 'a grape vine'], ['grape'], 'noun', 'countable', '农业'],
    ['攀缘藤本植物', 'Any of various climbing or creeping plants with long flexible stems.', '各种茎细长柔软、匍匐或攀缘生长的植物。', '可数，泛指藤本植物。', 'A climbing vine covered the old wall.', '一株攀缘藤本覆满了那面旧墙。', ['climbing vines'], [], 'noun', 'countable', '自然'],
  ], 'vines', ['grape'], 'brief 显示 ←?，按 §5.2 自扫根：库内无 vine 的语义直连词根（词首 vi- 与库内 violate、violation 等形近但语义不直连，切词假象，规范 §5.7；grape A2 葡萄（author_g1.js）为果实名而非词根），留空；家族/近义 grape 葡萄（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('vintage', 'noun/adjective', '/ˈvɪntɪdʒ/', '', [], '采收年份；经典的', 'The year a wine was made, or work of the best quality from the past.', [
    ['（葡萄酒的）采收年份；年份酒', 'The year and the place where the grapes used to make a wine were grown.', '酿造某批葡萄酒所用葡萄的采收年份与产地。', '可数，常与 of 连用，也指该年份的酒。', 'The 2015 vintage is widely regarded as the best.', '2015 年份的酒被普遍视为最好的。', ['vintage year', 'a fine vintage'], ['wine'], 'noun', 'countable', '饮食'],
    ['采收期；葡萄采收', 'The gathering of grapes from the vines for wine making.', '从藤上采摘葡萄用于酿酒的过程。', '多作不可数，通常在秋季进行。', 'The workers are busy with the vintage.', '工人们正忙着采收葡萄。', ['the autumn vintage'], [], 'noun', 'uncountable', '农业'],
    ['经典的；上乘的', 'Being of the best quality, or typical of a particular period or creator.', '品质上乘的，或具有某个时期、某位创作者典型风格的。', '定语表语两用，形容酒、汽车、作品等。', 'The garage is full of vintage cars.', '车库里停满了老式经典汽车。', ['vintage wine', 'vintage clothing'], [], 'adjective', '定语/表语', '文化'],
  ], 'vintages', ['wine'], 'brief 显示 ←?，按 §5.2 自扫根：库内无 vintage 的语义直连词根（词首 vin- 与库内 vinegar B1 醋同段但现代语义不直连，切词假象，规范 §5.7；wine A1 葡萄酒（author_w2.js）为成品酒名而非词根），留空；家族/近义 wine 葡萄酒（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('viola', 'noun', '/viˈəʊlə/', 'A2', [], '中提琴', 'A stringed instrument of the violin family, larger than a violin and lower in tone.', [
    ['中提琴', 'A four-stringed instrument played with a bow, larger than a violin and deeper in sound.', '一种用弓拉奏的四弦乐器，比小提琴大、音色更低沉。', '可数，乐器名前通常加 the 或物主代词。', 'She plays the viola in the city orchestra.', '她在市交响乐团拉中提琴。', ['play the viola', 'the viola section'], [], 'noun', 'countable', '艺术'],
  ], 'violas', ['violin'], 'brief 显示 ←?，按 §5.2 自扫根：库内无同形条目，词首 viol- 与 violin A2 小提琴（author_v1.js 第 4 参）整段共享，中提琴与小提琴同属 viol 弦乐器族（violin 系 viola 的指小派生），语义直连，按 §5.6 兄弟派生 A2 继承（判断项：逆向取兄弟根，同库内 terminology←term、psychiatrist←psychology 先例，供主 agent 裁定）；家族 violin 小提琴（队列原样，入第 10 参）；队列 syn 为空故义项第 8 参 []');

  W('violation', 'noun', '/ˌvaɪəˈleɪʃn/', 'B2', ['CET4'], '违反；侵犯', 'The act of breaking a law or rule, or of harming the rights of others.', [
    ['违反；破坏（法律、规章）', 'The act of breaking a law, a rule or an agreement.', '违反法律、规章或协议的行为。', '可数，常与 of 连用，法律与新闻语境常见。', 'The company was fined for a violation of safety rules.', '该公司因违反安全规定被罚款。', ['a violation of the law', 'traffic violations'], ['breach'], 'noun', 'countable', '法律'],
    ['侵犯（权利、隐私）', 'The act of interfering with or harming the rights of another person.', '干涉或损害他人权利的行为。', '可数，常与 of 连用。', 'The court found a violation of her privacy rights.', '法院认定其隐私权受到了侵犯。', ['a violation of privacy', 'a rights violation'], [], 'noun', 'countable', '法律'],
    ['强奸', 'The crime of forcing a person to have sex against that person will.', '违背他人意愿强迫发生性行为的罪行。', '可数或不可数，法律用语，语气庄重。', 'Reported cases of violation have risen sharply.', '被举报的强奸案件数量急剧上升。', ['a charge of violation'], ['rape'], 'noun', 'countable', '法律'],
  ], 'violations', ['breach'], 'brief 显示 ←?，按 §5.2 自扫根 violate B2 违反、侵犯、亵渎（author_v1.js 第 4 参）+ -ion（-ion 在 §5.4 清单，-ate→-ion 属 e→∅+ion 正字类，先例 pollution←pollute B1（author_p9.js）、precision←precise B2（author_p10.js）），语义直连，B2 继承；家族 breach 违约（队列原样，入第 10 参），近义 breach 置义项 1、rape 强奸置义项 3（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('violence', 'noun', '/ˈvaɪələns/', 'B1', ['CET4'], '暴力；暴烈的力量', 'Physical force used to hurt people, or very strong uncontrolled feeling.', [
    ['暴力；暴力行为', 'Physical force intended to hurt or kill people.', '蓄意伤害或杀死他人的肢体力量。', '不可数，谈具体事件时可用 an act of violence。', 'The protest ended in violence.', '抗议以暴力收场。', ['an act of violence', 'domestic violence'], ['force'], 'noun', 'uncountable', '社会'],
    ['暴烈；猛烈（情绪、自然力）', 'Very strong and aggressive feeling or force that is hard to control.', '强烈而难以控制的激越情绪或力量。', '不可数，常形容感情、言辞、风雨等。', 'The wind increased in violence towards midnight.', '临近午夜风势越来越猛。', ['verbal violence', 'with violence'], ['fury'], 'noun', 'uncountable', '情感'],
  ], '',['violent'], 'brief 显示 ←?，按 §5.2 自扫根 violent B1 暴力的、猛烈的（author_v1.js 第 4 参）+ -ence（-ence 在 §5.4 清单，-ent→-ence 为 t→ce 音变，先例 evidence←evident B1（author_e5.js）），语义直连，B1 继承；近义 force 力量、暴力置义项 1、fury 狂怒、暴烈置义项 2（队列原样，各恰好一次）；fam 队列为空故第 10 参 []；抽象不可数故 forms 留空；CET4 标签照抄队列');

  W('violet', 'noun/adjective', '/ˈvaɪələt/', '', [], '紫罗兰；紫色的', 'A sweet-smelling flower, or a blue-purple colour.', [
    ['紫罗兰', 'A small plant with sweet scented purple, white or yellow flowers.', '一种开紫色、白色或黄色芳香小花的植物。', '可数，指植物，也指它的花。', 'Violets grow wild under the hedge.', '紫罗兰在树篱下野生生长。', ['sweet violet', 'a bunch of violets'], ['purple'], 'noun', 'countable', '自然'],
    ['紫色；紫罗兰色', 'A blue purple colour, the colour of many violet flowers.', '许多紫罗兰花所呈的蓝紫色。', '不可数，也可用 a violet 指一种紫色。', 'The sky turned violet at sunset.', '日落时天空变成了紫色。', ['shades of violet', 'in violet'], [], 'noun', 'uncountable', '艺术'],
    ['紫色的；紫罗兰色的', 'Having a blue purple colour.', '呈蓝紫色的。', '定语表语两用，形容颜色、服饰、眼睛等。', 'He wore a violet ribbon in his buttonhole.', '他的纽扣孔里别着一条紫色缎带。', ['violet eyes'], [], 'adjective', '定语/表语', '外貌'],
  ], 'violets', ['purple'], 'brief 显示 ←?，按 §5.2 自扫根：库内无 violet 的语义直连词根（词首 vi- 与库内 violate B2 违反形近但语义不直连，切词假象，规范 §5.7），留空；家族/近义 purple 紫色的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('virtual world', 'noun', '/ˈvɜːtʃuəl wɜːld/', '', [], '虚拟世界', 'A computer generated world in which people interact as if it were real.', [
    ['虚拟世界', 'A computer generated environment in which many people take part and interact with each other as if it were the real world.', '由计算机生成、许多人可参与其中并像在现实世界里一样互动的环境。', '可数短语名词，常与 in、into 连用，信息技术与游戏语境。', 'Students explored the virtual world on their screens.', '学生们在屏幕上探索这个虚拟世界。', ['enter the virtual world', 'build a virtual world'], ['cyberspace'], 'noun', 'countable', '科学'],
  ], '', ['cyberspace'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 cyberspace 网络空间、赛博空间（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）').phrase = true;

  W('virtuoso', 'noun', '/ˌvɜːtʃuˈəʊsəʊ/', '', [], '技艺精湛的演奏家；大师', 'A person who performs with masterly skill, especially a musician.', [
    ['技艺精湛的演奏家', 'A musician who performs with outstanding skill and technique.', '以出众技巧演奏的音乐家。', '可数，正式用语，多用于古典音乐。', 'The young pianist played like a virtuoso.', '那位年轻钢琴家弹得像大师一样。', ['a virtuoso performance'], ['master'], 'noun', 'countable', '艺术'],
    ['（任何领域的）大师级人物', 'Somebody who shows outstanding skill in any activity.', '在任何活动中展现出卓越技巧的人。', '可数，常与 in、of 连用。', 'The code was written by a software virtuoso.', '这段代码出自一位软件高手之手。', ['a virtuoso of the guitar'], [], 'noun', 'countable', '职业'],
  ], 'virtuosos', [], 'brief 显示 ←?，按 §5.2 自扫根：库内无 virtuoso 的语义直连词根（-oso 不在 §5.4 清单且库内无先例；词首 virtu- 与库内 virtue B2 美德、virtual B2 虚拟的同段，但「技艺精湛的演奏家」与二者现代语义不直连，切词假象），留空；近义 master 大师、能手（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('viscous', 'adjective', '/ˈvɪskəs/', '', [], '黏稠的', 'Thick and sticky, and slow to flow.', [
    ['黏稠的', 'Thick and sticky, and flowing slowly, such as honey or tar.', '厚而黏、流动缓慢的，如蜂蜜或焦油。', '定语表语两用，科学与技术语境常见。', 'The oil became viscous in the cold.', '油在低温下变得黏稠。', ['viscous liquid', 'viscous fluid'], ['thick'], 'adjective', '定语/表语', '科学'],
  ], '', ['viscosity'], 'viscosity 是名词，指黏度；thick（稠的）是近义词。');

  W('vise', 'noun', '/vaɪs/', 'B2', [], '台钳；老虎钳', 'A tool with two jaws that hold material firmly while it is worked on.', [
    ['台钳；老虎钳', 'A tool with two jaws that hold a piece of wood or metal firmly in place while somebody works on it.', '用两只钳口把木材或金属牢牢固定、便于加工的工具。', '可数，常与 in、bench 连用，工作坊用语。', 'He clamped the plank in a vise.', '他把木板夹在台钳里。', ['in a vise', 'a bench vise'], ['vice'], 'noun', 'countable', '工具'],
  ], 'vices',['vice'], 'brief 显示 ←?，按 §5.2 自扫根 vise 与库内 vice B2 老虎钳（author_v1.js 第 4 参，vice 核心义含「老虎钳」）：vise 是 vice 该义项的美式拼写变体，词形全段可见且语义直连，按拼写变体继承，B2 继承（判断项：同 tonne←ton B1、madame←madam B1 先例，供主 agent 裁定）；近义 vice 老虎钳（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('visibility', 'noun', '/ˌvɪzəˈbɪləti/', 'B1', ['CET4'], '能见度；受关注程度', 'How far or clearly something can be seen, or how well it is known.', [
    ['能见度；可见度', 'How far or how clearly something can be seen, affected by light, mist or darkness.', '受光线、雾气或黑暗影响，某物能被看清的距离与清晰程度。', '不可数，常与 poor、good、low 连用。', 'Visibility on the motorway fell to 50 metres.', '高速公路上的能见度降到了 50 米。', ['poor visibility', 'visibility of 50 metres'], [], 'noun', 'uncountable', '交通'],
    ['受关注程度；知名度', 'How far somebody or something is known about or noticed by the public.', '某人或某事物被公众了解、被外界注意的程度。', '不可数，常与 raise、high、low 连用。', 'The campaign raised the visibility of the issue.', '这场活动提高了该议题的受关注程度。', ['raise the visibility of', 'high visibility'], ['profile'], 'noun', 'uncountable', '媒体'],
  ],'visibilities',['visible'], 'brief 显示 ←?，按 §5.2 自扫根 visible B1 看得见的（author_v1.js 第 4 参）+ -ity（词尾 -ty 按 §5.4 4c 清单外后缀看库内先例面：capability←capable B1、curiosity←curious A2、hostility←hostile C1、unity←unit A2（author_c7.js、author_c13.js、author_h7.js、author_u4.js），先例充分），语义直连（可见的程度即能见度），B1 继承（判断项）；近义 profile 受关注程度、形象（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []；不可数且无常用复数故 forms 留空；CET4 标签照抄队列');

  W('visitor', 'noun', '/ˈvɪzɪtə/', 'A1', ['CET4'], '来访者；参观者', 'Somebody who comes to see a person or a place for a short time.', [
    ['来访者；客人', 'Somebody who comes to see a person or a place for a short time.', '短暂前来探访某人或某地的人。', '可数，常与 to 连用。', 'We had visitors all afternoon.', '整个下午都有客人。', ['a visitor to the museum', 'frequent visitor'], ['guest'], 'noun', 'countable', '社交'],
    ['游客；参观者', 'Somebody who goes to see a place of interest, especially on a day trip or holiday.', '前往景点参观的人，尤指一日游或度假期间。', '可数，常见于旅游统计。', 'The gallery welcomes two million visitors a year.', '该画廊每年接待两百万名参观者。', ['visitor numbers', 'a visitor attraction'], [], 'noun', 'countable', '文化'],
    ['短暂停留者；过客', 'Somebody or something that stays in a place for only a short time before moving on.', '只在某处短暂停留便离开的人或事物。', '可数，书面用语，也用于物候与鸟类。', 'These insects are summer visitors to the garden.', '这些昆虫是花园的夏季过客。', ['a winter visitor'], ['transient'], 'noun', 'countable', '自然'],
  ], 'visitors', ['guest'], 'brief 显示 ←?，按 §5.2 自扫根 visit A1 参观、访问（author_v1.js 第 4 参）+ -or（-or 在 §5.4 清单，施事后缀，「来访者」与 visit 语义直连，§5.4 语义直连核对通过），A1 继承；家族 guest 客人（队列原样，入第 10 参），近义 guest 置义项 1、transient 短暂停留者置义项 3（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('visor', 'noun', '/ˈvaɪzə/', '', [], '护面；遮阳板', 'A part of a helmet or a vehicle that shields the face or the eyes.', [
    ['（头盔的）护面；面甲', 'A piece of metal or plastic fixed to a helmet, with a slit for the eyes, that protects the face.', '固定在头盔上、带眼孔以保护面部的金属片或塑料片。', '可数，常见于头盔与面罩。', 'He raised the visor of his helmet.', '他掀起了头盔的面甲。', ['raise the visor', 'helmet visor'], ['helmet'], 'noun', 'countable', '军事'],
    ['（车内的）遮阳板', 'A flat panel above a vehicle windscreen that can be pulled down to keep the sun out of the eyes.', '车辆挡风玻璃上方、可拉下遮挡阳光的平板。', '可数，常见于汽车。', 'She pulled down the visor against the glare.', '她拉下遮阳板挡住刺眼的强光。', ['pull down the visor', 'sun visor'], [], 'noun', 'countable', '交通'],
  ], 'visors', [], 'brief 显示 ←?，按 §5.2 自扫根：-or 虽在 §5.4 清单但根词 vis- 不在库，库内 vision B2 视力、visual B1 视觉的与「护面、遮阳板」现代语义不直连（面罩保护的是脸而非视觉本身），切词假象，规范 §5.7，留空（判断项，供主 agent 裁定）；近义 helmet 头盔（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('vista', 'noun', '/ˈvɪstə/', '', [], '远景；新领域的展望', 'A long attractive view, or a range of new possibilities.', [
    ['远景；深景', 'A long and attractive view, especially one seen through an opening or between buildings.', '狭长而优美的景色，尤指从开口处或建筑物之间望去所见。', '可数，常与 of 连用。', 'The terrace opens onto a vista of the valley.', '露台向外望去是山谷的远景。', ['a vista of the valley', 'a long vista'], ['panorama'], 'noun', 'countable', '自然'],
    ['（未来的）展望；新领域', 'A range of new possibilities or experiences that may open up.', '可能出现的新机会或新经历的范围。', '可数，常用复数 vistas，常与 of 连用。', 'The research opened up fresh vistas in medicine.', '这项研究为医学开辟了新的前景。', ['open up new vistas'], [], 'noun', 'countable', '科学'],
  ], 'vistas', [], 'brief 显示 ←?，按 §5.2 自扫根：词首 vis- 与库内 vision B2 视力同段，但「远景」是所见之景物、vision 库内义为视力与远见，现代语义不直连；-a 尾不在 §5.4 清单且库内无先例，留空（判断项，同 twine←twin 拒绝模式，供主 agent 裁定）；近义 panorama 全景（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('visualise', 'verb', '/ˈvɪʒuəlaɪz/', 'B1', [], '在脑中形成形象；使形象化', 'To form a picture of something in the mind, or show it as a picture.', [
    ['在脑中形成（形象）', 'To form a clear picture or idea of something in your mind.', '在脑海中把某物清楚地想成一幅画面或一个念头。', '及物动词，常与 the scene、yourself 等连用。', 'Try to visualise the scene before you paint it.', '动笔之前先把那个场景想象出来。', ['visualise the scene', 'visualise yourself'], ['picture'], 'verb', '及物', '心理'],
    ['使形象化；用图呈现', 'To make something such as data or an idea appear as a picture or diagram.', '把数据、想法之类的内容以图片或图表的形式呈现出来。', '及物动词，信息技术与科学语境常见。', 'The software can visualise the results in seconds.', '该软件能在几秒内把结果以图形呈现。', ['visualise the data'], [], 'verb', '及物', '科学'],
  ], 'visualises~visualised~visualised~visualising',['visual'], 'brief 显示 ←?，按 §5.2 自扫根 visual B1 视觉的、图像的（author_v1.js 第 4 参）+ -ise（§5.4 4c 清单外后缀按库内先例面裁定：specialize←special A2、stabilise←stable B2（author_s20.js）），语义直连（使…以形象呈现），B1 继承（判断项）；近义 picture 想象、描绘（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []；英式拼写，美式拼作 visualize（同批录入）');

  W('visualize', 'verb', '/ˈvɪʒuəlaɪz/', 'B1', [], '想象；使形象化', 'To imagine something clearly, or show it in the form of a picture.', [
    ['想象；设想', 'To form a clear picture of something in your mind before it happens.', '在某事发生之前，先在脑海里把它清楚地想出来。', '及物动词，常与 a calm place、success 等连用。', 'Athletes visualize success before a race.', '运动员赛前会设想成功的情景。', ['visualise a calm place', 'visualize the outcome'], ['imagine'], 'verb', '及物', '心理'],
    ['使形象化；用图形呈现', 'To present information or ideas in the form of a chart, graph or picture.', '以图表、曲线图或图片的形式呈现信息或想法。', '及物动词，商务与科技语境常见。', 'The team visualizes the data for every report.', '团队把每份报告的数据都做成可视化图表。', ['visualize the results'], [], 'verb', '及物', '商务'],
  ], 'visualizes~visualized~visualized~visualizing',['visual'], 'brief 显示 ←?，按 §5.2 自扫根 visual B1 视觉的、图像的（author_v1.js 第 4 参）+ -ize（§5.4 4c 清单外后缀按库内先例面裁定：specialize←special A2、unionize←union B1（author_u4.js）），语义直连，B1 继承（判断项）；近义 imagine 想象、设想（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []；美式拼写，英式拼作 visualise（同批录入）');

  W('vitality', 'noun', '/vaɪˈtæləti/', 'B2', ['CET4'], '活力；生命力', 'The state of being full of energy, or the power to stay alive.', [
    ['活力；生气', 'The state of being full of energy, enthusiasm and life.', '充满精力、热情与生气的状态。', '不可数，常与 full of、restore 连用。', 'Regular exercise restores vitality.', '经常锻炼能恢复活力。', ['full of vitality', 'restore vitality'], ['life'], 'noun', 'uncountable', '健康'],
    ['生命力；生存能力', 'The natural power of a living thing to survive, grow and stay healthy.', '生物生存、成长并保持健康的自然力量。', '不可数，科学与书面语境常见。', 'The seeds lost vitality after a long winter.', '种子在漫长冬天之后失去了生命力。', ['vitality of the soil'], ['vigor'], 'noun', 'uncountable', '科学'],
  ], '', ['vigor'], 'brief 根提示 ←vital B2 极其重要的、生命的（自扫 author_v1.js 第 4 参复核为 B2）+ -ity（词尾 -ty 按 §5.4 4c 库内先例面：hostility←hostile C1、capability←capable B1、unity←unit A2（author_h7.js、author_c7.js、author_u4.js）），语义直连（生命的活力），B2 继承（判断项）；家族 vigor 精力、活力（队列原样，入第 10 参），近义 life 生命力置义项 1、vigor 置义项 2（队列原样，各恰好一次）；抽象不可数且无常用复数故 forms 留空；CET4 标签照抄队列');

  W('viva', 'noun', '/ˈviːvə/', '', [], '口头考试；学位口试', 'An oral examination, especially for a degree.', [
    ['（学位）口头考试', 'An oral examination, especially one that a student takes to complete a degree.', '口头进行的考试，尤指学生为完成学位而参加的口试。', '可数，常与 in、for 连用，英式英语常用。', 'She passed her viva without difficulty.', '她顺利通过了口试。', ['pass the viva', 'viva voce'], ['oral'], 'noun', 'countable', '教育'],
  ], 'vivas', [], 'brief 显示 ←?，按 §5.2 自扫根：库内无 viva 的语义直连词根（-a 尾不在 §5.4 清单且库内无先例；词首 vi- 与库内 vivid B2 生动的形近但语义不直连，切词假象），近义 oral B1 口头的（author_o1.js）为同义词而非词根，留空；近义 oral（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('viz', 'adverb', '/vɪz/', '', [], '即；也就是（列举前）', 'Used before a list to say that what follows gives the exact details.', [
    ['即；也就是（列举前）', 'Used before a list of names or items to show that what follows gives the details.', '用于列举之前，表示下文给出具体内容。', '修饰整句，引出具体列举；正式书面语，现代多用 namely 或冒号。', 'Two routes are open, viz the northern road and the coast road.', '有两条路线可用，即北边的公路和滨海公路。', ['the options viz follows'], ['namely'], 'adverb', '不及物', '书面'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫根：viz 是 videlicet（即）的书写缩略形，库内无 videlicet 可继（规范 §5.7 留空场景），同 author_k2.js kg/km 缩略类留空先例，留空；近义 namely B2 即、也就是（author_n1.js，队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []；副词无词形变化故 forms 留空');

  W('vocational', 'adjective', '/vəʊˈkeɪʃənl/', 'C1', ['CET4'], '职业的；职业技术的', 'Connected with the training and skills needed for a particular job.', [
    ['职业的；职业技术的', 'Relating to the skills, education and training needed for a particular job or occupation.', '与从事某一职业所需的技能、教育和训练相关的。', '多作定语，常与 training、school、skills 连用。', 'The college offers vocational courses in engineering.', '这所学院开设工程类职业课程。', ['vocational training', 'vocational skills'], ['polytechnic'], 'adjective', '定语/表语', '教育'],
  ], '',['vocation'], 'brief 显示 ←?，按 §5.2 自扫根 vocation C1 职业、天职（author_v1.js 第 4 参）+ -al（-al 在 §5.4 清单），「职业的」与 vocation「职业」语义直连，C1 继承；近义 polytechnic 理工的、技术学校的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []；CET4 标签照抄队列');

  W('voltage', 'noun', '/ˈvəʊltɪdʒ/', '', ['CET4'], '电压；电压档', 'The electrical force that makes a current flow, measured in volts.', [
    ['电压', 'The electrical force that makes an electric current flow, measured in volts.', '使电流流动的电力，以伏特为单位计量。', '可数或不可数，常与 high、low、of 连用。', 'The device runs at a voltage of 12 volts.', '该设备在 12 伏电压下运行。', ['high voltage', 'a voltage of 12 volts'], ['volt'], 'noun', 'countable', '工业'],
    ['（设备的）工作电压；电压档', 'The particular amount of voltage used by a machine or a part of a circuit.', '机器或电路某一部分所使用的具体电压值。', '可数，常见于技术说明。', 'Switch the voltage to 240 volts before use.', '使用前把电压调到 240 伏。', ['choose the voltage'], [], 'noun', 'countable', '工业'],
  ], 'voltages', ['volt'], 'brief 显示 ←?，按 §5.2 自扫根 volt B1 伏特（author_v1.js 第 4 参）+ -age（-age 不在 §5.4 清单，按 §5.7「不在清单且无先例的后缀」及库内先例面：shortage、storage、lineage、marriage、leverage 均留空，仅 blockage←block（A2）一条按复合取首成分给了 B2 级，先例面分裂且无把握），留空（判断项，供主 agent 裁定）；家族/近义 volt 伏特（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET4 标签照抄队列');

  W('vomit', 'verb/noun', '/ˈvɒmɪt/', '', [], '呕吐；呕吐物', 'To bring food up from the stomach, or the matter brought up.', [
    ['呕吐', 'To bring food or liquid up from the stomach and out through the mouth.', '把胃里的食物或液体从口中吐出来。', '不及物动词，健康语境，也可作及物动词。', 'The passenger vomited on the platform.', '那位乘客在站台上吐了。', ['feel sick and vomit', 'vomit repeatedly'], ['heave'], 'verb', '不及物', '健康'],
    ['呕吐物', 'The food and liquid that somebody brings up from the stomach.', '某人从胃里吐出的食物和液体。', '不可数，指吐出的物质。', 'The floor was covered with vomit.', '地板上全是呕吐物。', ['clean up the vomit'], [], 'noun', 'uncountable', '健康'],
  ], 'vomits~vomited~vomited~vomiting', [], 'brief 显示 ←?，按 §5.2 自扫根：库内无 vomit 的语义直连词根（-it 不在 §5.4 清单），近义 heave C1 呕吐、猛举（author_h2.js）为同义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立，留空；近义 heave（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []；动词四形以三单开头');

  W('vote in', 'verb', '/vəʊt ɪn/', '', [], '投票选出；投票通过', 'To choose somebody in an election, or approve something by voting.', [
    ['投票选出；使当选', 'To choose a person or a political party to take office by voting.', '通过投票使人或政党上台执政。', '及物短语动词，宾语可置于 in 之前或之后。', 'The citizens voted in a new council.', '市民投票选出了一届新议会。', ['vote in a new government', 'vote them in'], ['elect'], 'verb', '及物', '政治'],
    ['投票通过；表决采纳', 'To approve a proposal, plan or rule by holding a vote.', '通过表决批准提议、计划或规章。', '及物短语动词，宾语置于 in 之后。', 'The committee voted the new rules in.', '委员会表决通过了新规。', ['vote the new rules in'], [], 'verb', '及物', '政治'],
  ],'votes in~voted in~voting in', ['elect'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 elect 选举、推选（队列原样，入第 10 参），近义 elect 选出、推举（置首义项恰好一次）').phrase = true;

  W('voter', 'noun', '/ˈvəʊtə/', 'A2', ['CET4'], '投票者；选民', 'Somebody who has the right to vote in an election.', [
    ['投票者；选民', 'Somebody who has the right to vote in an election.', '在选举中拥有投票权的人。', '可数，常与 eligible、first-time 连用。', 'Nearly half of all voters took part.', '近一半选民参加了投票。', ['eligible voter', 'a first-time voter'], ['constituent'], 'noun', 'countable', '政治'],
    ['（特定选举中的）投票人', 'A person who casts a vote in a particular election, regarded as a member of the electorate.', '在某次特定选举中投票、被视为选民群体一员的人。', '可数，常见于选举统计与选举用语。', 'The electoral roll lists every voter in the district.', '选民名册列出了该区的每一位投票人。', ['electoral roll', 'electoral vote'], ['electoral'], 'noun', 'countable', '政治'],
  ], 'voters', ['constituent'], 'brief 根提示 ←vote A2 投票、选票（自扫 author_v1.js 第 4 参复核为 A2）+ -or（-or 在 §5.4 清单，施事后缀，「投票者」与 vote 语义直连，§5.4 语义直连核对通过），A2 继承；家族 constituent 选民（队列原样，入第 10 参），近义 constituent 置义项 1、electoral 选举的置义项 2（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('voting', 'noun/adjective', '/ˈvəʊtɪŋ/', 'A2', [], '投票；有投票权的', 'The act of voting, or having the right to take part in a vote.', [
    ['投票；表决', 'The act of choosing by ballot in an election or a meeting.', '以投票方式在选举或会议中作出选择的行为。', '不可数，常与 by、electronic、online 连用。', 'Online voting opens on Monday.', '网上投票将于周一开始。', ['voting system', 'voting booth'], [], 'noun', 'uncountable', '政治'],
    ['有投票权的；参与投票的', 'Having the right to take part in an election, or doing so.', '有资格参加选举的，或正在参加投票的。', '多作定语，常与 age、rights、members 连用。', 'The voting age in the country is 18.', '该国的投票年龄为 18 岁。', ['voting age', 'voting rights'], ['electoral'], 'adjective', '定语/表语', '政治'],
  ], '', ['electoral'], 'brief 根提示 ←vote A2 投票、表决（自扫 author_v1.js 第 4 参复核为 A2）+ -ing（-ing 在 §5.4 清单，动名词转名词与形容词），语义直连，A2 继承；家族 electoral 选举的（队列原样，入第 10 参），近义 electoral 置义项 2 恰好一次；抽象不可数且无常用复数故 forms 留空');

  W('vs', 'preposition', '/ˈvɜːsəs/', 'B2', [], '对；与……相对；诉', 'Written between two opponents, meaning against.', [
    ['（比赛、竞争中）对；与……相对', 'Written between the names of two people or teams that are competing or being compared.', '写在两个竞争或被比较的人名或队名之间。', '正式书面标注，朗读时读作 versus。', 'The final is Brazil vs Germany.', '决赛是巴西对德国。', ['us vs them', 'team vs team'], [], 'preposition', '', '体育'],
    ['（法律案由中）诉', 'Used in the title of a legal case to show who is making a claim against whom.', '用于法律案件名称中，表示原告对被告提起诉讼。', '正式书面标注，常见于案由。', 'The case is known as Smith vs Jones.', '该案以史密斯诉琼斯闻名。', ['Smith vs Jones'], [], 'preposition', '', '法律'],
  ], '', ['versus'], 'brief 显示 ←?，按 §5.2 自扫根 versus B2 对、与……相对（author_v1.js 第 4 参，其备注明写「缩写 vs 或 vs.」，语义完全直连），vs 为 versus 的书写缩略形且朗读全形，按库内 mr←mister A1、mm←millimeter B1、mic←microphone A2 缩略先例，B2 继承（判断项：kg/km 为逐字母朗读的首字母词、属 §5.7 字母词留空，模式不同，供主 agent 裁定）；家族 versus（队列原样，入第 10 参）；队列 syn 为空故义项第 8 参 []；介词无词形变化故 forms 留空');
})(typeof window !== 'undefined' ? window : globalThis);
