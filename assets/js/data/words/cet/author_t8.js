/* data/words/cet/author_t8.js — T 批次 8，缺口 tribunal ~ twine，共 31 条
 * （24 单词 + 7 短语；短语清单：try out、turn into、turn off、turn out、turn to、
 *   turning point、twenty-five cents；turn-off 为普通名词条目，不标 .phrase）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_t8.txt，widx 218-248，词头无残缺）。
 * CET 标签照抄队列：CET4 × 5（tricky、truly、truthful、twelfth、twentieth），CET6 × 0，其余 26 条 []。
 * brief：%TEMP%\opencode\_t8_brief.txt 共 24 行，与本批 24 个单词一一对应（首行 tribunal、末行 twine）；
 *   7 行给出根提示（troop B2 ×2、tropic C1、true A1、tub C1、tumble C1、tune A2），
 *   17 行显示 ←?，一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf("W('word'") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；curated.js 不含本批词与其根）。
 * 扫根结论（自扫，第 4 参）：trick B1、trust B1、truth B1、twelve A1、twenty A1、turn A1
 *   （均 author_t3.js）、light A1（author_l2.js）；brief 根提示复核通过（自扫同级）：
 *   troop B2、tropic C1、true A1、tumble C1、tune A2（author_t3.js）。
 * · 继承（14 条）：
 *   tricky←trick B1 + -y（-y 形容词后缀按规范 4b 裁定，先例 noisy←noise A1、sugary←sugar A1，判断项）；
 *   trooper←troop B2 + -er、truly←true A1 + -ly、truthful←truth B1 + -ful、
 *   tumbler←tumble C1 + -er、tuning←tune A2 + -ing（-er/-ly/-ful/-ing 均在 §5.4 清单）；
 *   troops←troop B2 + -s、tropics←tropic C1 + -s（复数形式单列词条，判断项，同 systems←system A2 先例）；
 *   trustworthy←trust B1（复合取首成分 -worthy 不在清单，判断项，同 third-level←third A1 先例）；
 *   turn-off←turn A1（连字符复合取首成分，判断项，同 third-level←third A1、egg-shaped←egg A1 先例）；
 *   twelvemonth←twelve A1（复合取首成分，判断项，同 run-up←run 先例）；
 *   twilight←light A1（首成分 twi- 不在库，按 §5.3 取其后词根且语义直连：暮光即黄昏的微光，判断项披露）；
 *   twelfth←twelve A1 + -th、twentieth←twenty A1 + -th（数词条目按 §7 处理，
 *   先例 eighteenth←eighteen A1、eightieth←eighty A1、eleventh←eleven A1，author_e3.js）。
 * · 留空（10 单词 + 7 短语）：tribunal（自扫 tribune C1、tribe B2 与「特别法庭」语义不直连，切词假象，判断项）、
 *   trio（three A1、triangle A2 与 trio 非派生，词首 tri- 非全段共享）、trite（库内无 -ite 直连根，
 *   stale C1 为同义词非词根）、trout（-out 不在清单，库内无直连根）、truce（true A1 形近但语义不直连，切词假象）、
 *   trudge（-udge 不在清单，plough B2 为近义词非词根）、tuber（brief 根提示 tub C1 但「盆/桶」与「块茎」
 *   现代语义不直连，按 §5.1 核对不通过，判断项）、turf（-urf 不在清单，库内无直连根）、
 *   tusk（-usk 不在清单，库内无直连根）、twine（twin B1 词源相关但库内义为「双胞胎」，与「细绳」不直连，
 *   兄弟派生 §5.6 不成立，判断项）；7 条短语一律 §6 分级留空。
 * CEFR 分布（24 单词）：A1 × 6（truly、turn-off、twelfth、twelvemonth、twentieth、twilight）、
 *   A2 × 1（tuning）、B1 × 3（tricky、trustworthy、truthful）、B2 × 2（trooper、troops）、
 *   C1 × 2（tropics、tumbler）、留空 × 10；短语 7 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t8.js 必须在 _cet_helper.js 之后加载');

  W('tribunal', 'noun', '/trɪˈbjuːnl/', '', [], '专门审理某类案件的法庭或委员会', 'A special legal body with authority to decide a dispute.', [
    ['特别法庭；专门法庭', 'A special legal body that handles a particular type of case, such as employment or military disputes.', '专门审理某一类案件（如劳动、军事纠纷）的司法机构。', '可数，正式用语，常与 employment、industrial、military 等连用。', 'She took her case to an employment tribunal.', '她把案子提交给了劳动仲裁法庭。', ['an employment tribunal', 'appear before a tribunal'], ['court'], 'noun', 'countable', '法律'],
    ['审理委员会；仲裁小组', 'A group of people given official authority to settle a complaint.', '受官方授权裁决投诉的一组人。', '可数，常见于机构内部处理纠纷的场合。', 'The company set up a tribunal to hear the complaint.', '公司成立委员会来审理这起投诉。', ['a disciplinary tribunal'], [], 'noun', 'countable', '职业'],
  ], 'tribunals', ['court'], 'brief ←?，按 §5.2 自扫根：库内 tribune C1（护民官、讲坛）、tribe B2（部落）均与「特别法庭、专门委员会」现代语义不直连，属切词假象（规范 §5.7），-al 虽在 §5.4 清单但无直连在库根可继，留空（判断项）；家族/近义 court 法庭、法院（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('tricky', 'adjective', '/ˈtrɪki/', 'B1', ['CET4'], '棘手的；狡猾的', 'Difficult to handle, or clever at avoiding the truth.', [
    ['棘手的；难应付的', 'Needing care and skill because the situation is difficult to deal with.', '因为情况难以处理而需要小心与技巧的。', '定语表语两用，常形容问题、任务、局面。', 'This is a tricky question to answer in public.', '这是一个在公开场合难以回答的棘手问题。', ['a tricky situation', 'a tricky subject'], ['delicate'], 'adjective', '定语/表语', '通用'],
    ['狡猾的；滑头的', 'Clever at hiding the truth or getting what you want by deceit.', '善于隐瞒真相或用欺骗手段达到目的的。', '定语表语两用，形容人及其手法，略带贬义。', 'He is a tricky customer who always gets his way.', '他是个总能如愿的滑头家伙。', ['a tricky customer'], [], 'adjective', '定语/表语', '性格'],
  ], '',['trick'], 'brief ←?，按 §5.2 自扫根 trick B1 诡计、花招（author_t3.js 第 4 参）+ -y（-y 形容词后缀按规范 4b 裁定：根词全段可见且语义直连，先例 noisy←noise A1、sugary←sugar A1、showery←shower A2），B1 继承（判断项）；近义 delicate 需小心处理的、棘手的（队列原样，置首义项恰好一次）；CET4 标签照抄队列');

  W('trio', 'noun', '/ˈtriːəʊ/', '', [], '三人组；三重奏', 'A set of 3 people or things, or a short piece of music written for them.', [
    ['三人组；三者组合', 'A group of people or things that belong or work together as a set.', '作为一组而共同存在或协作的人或事物。', '可数，作主语时谓语视整体或成员用单复数；也可指三人之间的关系。', 'The trio played together for almost an hour.', '这三个人一起演奏了将近一个小时。', ['a trio of singers', 'a famous trio'], ['three', 'triangle'], 'noun', 'countable', '文化'],
    ['三重奏；三重唱', 'A piece of music written to be performed by a group of 3 players.', '为 3 位演奏者或演唱者创作的乐曲。', '可数，常见于古典音乐语境。', 'They performed a piano trio by Schubert.', '他们演奏了舒伯特的一首钢琴三重奏。', ['a string trio'], [], 'noun', 'countable', '艺术'],
  ], 'trios', [], 'brief ←?，按 §5.2 自扫根：库内 three A1（author_t1.js）、triangle A2（author_t3.js）与 trio 非派生关系（trio 为意、法语借词，词首 tri- 与 three 词首非全段共享，兄弟派生 §5.6 不成立），切词假象，留空；近义 three 三个、triangle 三角形（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('trite', 'adjective', '/traɪt/', '', [], '陈腐的；老套的', 'Boring because it has been said or used too many times.', [
    ['陈腐的；老套的', 'Used so often that it has lost its value and no longer persuades people.', '因使用过于频繁而失去价值、不再打动人的。', '定语表语两用，常形容言论、比喻、情节。', 'The speech ended with a trite remark about unity.', '演讲以一句关于团结的陈词滥调收尾。', ['a trite phrase', 'trite remarks'], ['stale'], 'adjective', '定语/表语', '文学'],
  ], '', ['stale'], 'brief ←?，按 §5.2 自扫根：库内无 trite 的语义直连词根（-ite 不在 §5.4 清单；家族/近义 stale C1 不新鲜的、陈腐的（author_s8.js）为同义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；家族/近义 stale 陈腐的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('trooper', 'noun', '/ˈtruːpə/', 'B2', [], '骑兵；州警；老兵', 'A member of a cavalry unit, a state police officer, or a veteran.', [
    ['骑兵；（美）州警', 'A member of a cavalry unit, or an officer of a state police force.', '骑兵部队的成员，或美国某州的警察。', '可数，美式英语中 state trooper 指州警。', 'A state trooper stopped the car on the highway.', '一名州警在高速公路上拦下了那辆车。', ['a state trooper'], ['soldier'], 'noun', 'countable', '军事'],
    ['（口语）老资格军人', 'An ordinary member of the armed forces, said with respect for long service.', '普通军人，用以表示对其长期服役的敬意。', '可数，口语用法，常见于对老兵的称呼。', 'The old trooper had served in three campaigns.', '这位老兵参加过三次战役。', ['an old trooper'], [], 'noun', 'countable', '军事'],
  ], 'troopers', ['soldier'], 'brief 根提示 ←troop B2 部队（自扫 author_t3.js 第 4 参复核为 B2）+ -er（-er 在 §5.4 清单），「部队中的士兵」与 troop 语义直连，B2 继承；家族/近义 soldier 士兵（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('troops', 'noun', '/truːps/', 'B2', [], '部队；士兵（复数）', 'Soldiers organized as a group, ready to be sent into action.', [
    ['部队；士兵（复数）', 'Soldiers considered as a group, especially ones sent to fight somewhere.', '被视为一个整体的士兵，尤指被派往某地作战者。', 'troop 的复数形式单列词条；作主语时谓语常用复数。', 'Troops were sent to the border within two days.', '部队在两天之内被派往边境。', ['send in the troops', 'government troops'], ['army', 'force'], 'noun', 'countable', '军事'],
    ['（一国）军队总称', 'The armed services of a country, regarded as an institution.', '一个国家被视为机构的武装力量总称。', '常用复数形式，常与 the 连用，谈整体时谓语可用单数。', 'The troops returned home after the operation.', '行动结束后部队回国了。', ['the troops'], [], 'noun', 'countable', '军事'],
  ],'troops',['troop'], 'brief 根提示 ←troop B2 部队（自扫 author_t3.js 第 4 参复核为 B2），troops 为 troop 的复数形式单列词条，按 §4 forms 留空，B2 继承（判断项：复数单列，同库内 systems←system A2 先例）；近义 army 军队、force 武装力量（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('tropics', 'noun', '/ˈtrɒpɪks/', 'C1', [], '热带地区；热带气候', 'The hot belt of the earth between the Cancer and Capricorn lines.', [
    ['热带地区', 'The hot parts of the earth that lie between the Tropic of Cancer and the Tropic of Capricorn.', '位于北回归线与南回归线之间的地球酷热区域。', 'tropic 的复数形式单列词条；常与 the 连用，谈整体时谓语可用单数。', 'The crops grow all year in the tropics.', '热带地区的作物全年生长。', ['in the tropics', 'life in the tropics'], ['equator'], 'noun', 'countable', '地理'],
    ['热带气候', 'The hot and humid weather typical of the tropical regions.', '热带地区典型的炎热潮湿气候。', '不可数，常与 the 连用。', 'Nothing survives the constant damp of the tropics.', '没有什么能在热带常年不散的湿气中存活。', ['the damp of the tropics'], [], 'noun', 'uncountable', '自然'],
  ],'tropics', ['equator'], 'brief 根提示 ←tropic C1 热带的（自扫 author_t3.js 第 4 参复核为 C1），tropics 为 tropic 的复数形式单列词条，按 §4 forms 留空，C1 继承（判断项：复数单列，同库内 systems←system A2 先例）；家族/近义 equator 赤道（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('trout', 'noun', '/traʊt/', '', [], '鳟鱼；老家伙', 'A speckled freshwater fish, or an old person spoken of jokingly.', [
    ['鳟鱼', 'A freshwater fish with a speckled skin that is eaten as food and sought by anglers.', '一种有斑点的淡水鱼，可食用且受钓鱼者喜爱。', '单复数同形；指鱼种时多作不可数，指个体时可数。', 'They caught two trout in the upper river.', '他们在上游河段钓到两条鳟鱼。', ['brown trout', 'catch a trout'], ['salmon'], 'noun', 'countable', '饮食'],
    ['老家伙；老滑头', 'An old person, referred to in a friendly but slightly mocking way.', '对上了年纪的人带友好又有几分调侃的称呼。', '可数，口语用法，略带戏谑。', 'The old trout waved at the children from his gate.', '那个老家伙在门口向孩子们挥手。', ['an old trout'], [], 'noun', 'countable', '口语'],
  ],'trout', ['salmon'], 'brief ←?，按 §5.2 自扫根：库内无 trout 的语义直连词根（-out 不在 §5.4 清单，与 out 形近非派生，切词假象，规范 §5.7），留空；单复数同形故 forms 留空；家族/近义 salmon 三文鱼、大麻哈鱼（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('truce', 'noun', '/truːs/', '', [], '停战；休战协定', 'A temporary agreement to stop fighting.', [
    ['停战；休战', 'A temporary pause in fighting, agreed by the sides involved in a conflict.', '冲突各方同意的战斗暂时中止。', '可数，常与 call、reach、agree 等动词连用。', 'The two armies agreed to a truce for the holiday.', '两支军队同意节日期间停战。', ['call a truce', 'agree a truce'], ['peace'], 'noun', 'countable', '军事'],
    ['停战期', 'The period of time during which a war or quarrel is suspended.', '战争或争吵被搁置的那一段时间。', '可数，常与 during、in 连用。', 'Life slowly returned to the town during the truce.', '停战期间，小镇的生活慢慢恢复了。', ['during the truce'], [], 'noun', 'countable', '历史'],
  ], 'truces', [], 'brief ←?，按 §5.2 自扫根：库内无 truce 的语义直连词根（-uce 不在 §5.4 清单；true A1 虽形近但「真实的」与「停战」语义不直连，切词假象，规范 §5.7），留空；近义 peace 和平、平息（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('trudge', 'verb/noun', '/trʌdʒ/', '', [], '步履沉重地走；艰难的长路', 'To walk slowly with heavy steps, or the tiring walk itself.', [
    ['艰难跋涉；步履沉重地走', 'To walk slowly with heavy steps, usually because of tiredness or difficult ground.', '步伐沉重而缓慢地走，通常因疲惫或路面难行。', '不及物动词，常与 along、through、back 连用。', 'They trudged back through the snow.', '他们踏着积雪艰难地走回去。', ['trudge home', 'trudge through the snow'], ['plough'], 'verb', '不及物', '通用'],
    ['艰难的长路；跋涉', 'A slow, tiring walk over a considerable distance.', '长距离上缓慢而累人的步行。', '可数，常与 to、from 连用。', 'It was a two-hour trudge to the station.', '走到车站是两个钟头的艰难路程。', ['a long trudge'], [], 'noun', 'countable', '交通'],
  ], 'trudges~trudged~trudged~trudging', [], 'brief ←?，按 §5.2 自扫根：库内无 trudge 的语义直连词根（-udge 不在 §5.4 清单；近义 plough B2 吃力地行进（author_p2.js）为同义用法而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；近义 plough 吃力地走过（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('truly', 'adverb', '/ˈtruːli/', 'A1', ['CET4'], '真正地；由衷地', 'In a real and sincere way, or used to stress a statement.', [
    ['真正地；确实地', 'In a way that is real, exact and free from exaggeration.', '以真实、确切而不夸张的方式。', '修饰动词，用于强调所说的内容属实。', 'I truly believe he meant no harm.', '我真心认为他没有恶意。', ['truly glad', 'truly believe'], ['indeed'], 'adverb', '不及物', '通用'],
    ['真诚地；由衷地', 'In a sincere and honest manner, especially when thanking someone or closing a letter.', '以真诚坦率的方式，尤用于致谢或书信结尾。', '修饰动词，常见于书信套语。', 'Thank you truly for the help you gave.', '由衷感谢你给予的帮助。', ['yours truly'], [], 'adverb', '不及物', '书面'],
  ], '',['true'], 'brief 根提示 ←true A1 真实的（自扫 author_t3.js 第 4 参复核为 A1）+ -ly（-ly 在 §5.4 清单，透明副词后缀），A1 继承；副词无词形变化故 forms 留空；近义 indeed 的确、确实（队列原样，置首义项恰好一次）；CET4 标签照抄队列；fam 队列为空故第 10 参 []');

  W('trustworthy', 'adjective', '/ˈtrʌstwɜːði/', 'B1', [], '值得信赖的；可靠的', 'Able to be relied on to act honestly and keep promises.', [
    ['值得信赖的；可靠的', 'Someone you can rely on to be honest and to do what they promise.', '可以依靠其诚实并兑现承诺的人。', '定语表语两用，常形容人、机构与信息来源。', 'She is the most trustworthy person in the team.', '她是团队里最值得信赖的人。', ['a trustworthy source', 'fully trustworthy'], ['responsible'], 'adjective', '定语/表语', '性格'],
  ], '',['trust'], 'brief ←?，按 §5.2 自扫根：复合词 trustworthy = trust + worthy，按 §5.3 取首成分 trust B1 信任、信赖（author_t3.js 第 4 参），「值得信赖的」与 trust 语义直连，B1 继承（判断项：-worthy 不在 §5.4 清单，复合词首成分裁定，同 author_t4.js third-level←third A1 先例）；近义 responsible 负责可靠的、有责任心的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('truthful', 'adjective', '/ˈtrʌθfəl/', 'B1', ['CET4'], '诚实的；真实的', 'Telling the truth, or describing things exactly as they are.', [
    ['诚实的；说真话的', 'Willing to tell the truth and hide nothing from others.', '愿意讲出实情、不向别人隐瞒任何事情的。', '定语表语两用，可形容人及其回答。', 'Give me a truthful answer about what happened.', '把事情的经过如实告诉我。', ['a truthful account'], ['honest'], 'adjective', '定语/表语', '性格'],
    ['真实的；符合事实的', 'Describing something exactly as it really is.', '把某事物按其真实样子准确描述出来的。', '定语表语两用，形容叙述、描绘与报道。', 'The film gives a truthful picture of the war.', '这部电影真实地呈现了那场战争。', ['a truthful description'], [], 'adjective', '定语/表语', '媒体'],
  ], '', ['honest'], 'brief ←?，按 §5.2 自扫根 truth B1 真相、实情（author_t3.js 第 4 参）+ -ful（-ful 在 §5.4 清单，同 author_t4.js thoughtful←thought A2 先例），B1 继承；家族/近义 honest 诚实的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET4 标签照抄队列');

  W('try out', 'verb', '/traɪ aʊt/', '', [], '试用；试镜', 'To test something by using it, or to compete for a place.', [
    ['试用；试用检验', 'To use something for a time in order to judge how well it works.', '在一段时间里使用某物，以判断其效果好坏。', '及物短语动词，宾语可置于 out 之后或中间。', 'The garage lets customers try out the new model.', '车行让顾客试驾这款新车。', ['try out a new design'], ['experiment'], 'verb', '及物', '商务'],
    ['试镜；参加选拔', 'To take part in a test to find out whether you can join a team or win a part.', '参加测试以判断能否进入球队或获得角色。', '不及物短语动词，常与 for 连用。', 'She tried out for the school play and got a part.', '她参加了校剧试演并拿到一个角色。', ['try out for the team'], [], 'verb', '不及物', '体育'],
  ],'tries out~tried out~trying out', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 experiment 试验、尝试（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('tuber', 'noun', '/ˈtjuːbə/', '', [], '块茎；地下储藏根', 'An underground food store on a plant stem.', [
    ['块茎；球茎', 'A thick swollen part of an underground stem where a plant stores food.', '植物地下茎上储存养料的肥厚膨大部分。', '可数，植物学用语，马铃薯是典型例子。', 'The potato is a tuber that grows below the ground.', '马铃薯是一种长在地下的块茎。', ['edible tuber'], ['root'], 'noun', 'countable', '科学'],
  ], 'tubers', [], 'brief 根提示 ←tub C1 盆、桶（自扫 author_t3.js 第 4 参复核为 C1），但 tub 与 tuber「块茎」现代语义不直连，按 §5.1 核对不通过，留空（判断项）；-er 虽在 §5.4 清单但无直连在库根可继；近义 root 块根、根茎（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('tumbler', 'noun', '/ˈtʌmblə/', 'C1', [], '翻跟头者；平底玻璃杯', 'An acrobat who turns over and over, or a straight-sided drinking vessel.', [
    ['翻筋斗者；杂技演员', 'A person or animal that turns over and over in the air or on the ground.', '在空中或地面上连续翻转的人或动物。', '可数，本义与 tumble 翻滚直接相关。', 'The young tumbler landed neatly on the mat.', '那位年轻的翻跟斗演员稳稳落在垫子上。', ['a bare-handed tumbler'], [], 'noun', 'countable', '体育'],
    ['平底玻璃杯', 'A straight-sided drinking vessel without a handle, used for water and spirits.', '无柄而杯壁竖直的饮器，用于喝水和烈酒。', '可数，常与 of 连用。', 'Pour the juice into a clean tumbler please.', '请把果汁倒进一只干净的平底杯里。', ['a tumbler of water'], ['glass'], 'noun', 'countable', '家居'],
  ], 'tumblers',['tumble'], 'brief 根提示 ←tumble C1 翻滚、跌跌撞撞（自扫 author_t3.js 第 4 参复核为 C1）+ -er（-er 在 §5.4 清单），「翻筋斗者」与 tumble 语义直连，C1 继承；近义 glass 玻璃杯（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('tuning', 'noun', '/ˈtjuːnɪŋ/', 'A2', [], '调音；调谐', 'Adjusting an instrument or receiver to give the right sound.', [
    ['调音；校音', 'The act of adjusting a musical instrument so that it plays the correct notes.', '调整乐器使其音准正确的过程。', '不可数，常与 of 连用，动词 tune 的 -ing 名词化。', 'The piano needs tuning before the concert.', '音乐会之前这架钢琴需要调音。', ['piano tuning', 'fine tuning'], [], 'noun', 'uncountable', '艺术'],
    ['调谐；调台', 'The act of adjusting a radio or television to pick up a chosen station.', '调整收音机或电视机以接收选定电台的过程。', '不可数，常见于手动、自动调谐等说法。', 'Accurate tuning improves the picture on weak channels.', '精确调谐能改善弱信号频道的画面。', ['manual tuning'], ['reception'], 'noun', 'uncountable', '媒体'],
  ],'tunings',['tune'], 'brief 根提示 ←tune A2 曲调、调音（自扫 author_t3.js 第 4 参复核为 A2）+ -ing（动名词转名词，-ing 在 §5.4 清单），A2 继承；抽象不可数故 forms 留空；近义 reception 接收效果（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('turf', 'noun', '/tɜːf/', '', [], '草皮；个人地盘', 'A layer of grass with soil, or ground claimed as a personal domain.', [
    ['草皮；草坪', 'A layer of grass with the soil under it, used to cover lawns and sports fields.', '带下面土壤的一层草皮，用于覆盖草坪和运动场。', '多作不可数，指整片草地；赛马运动也用 the turf 表示。', 'The players slipped on the wet turf.', '球员们在湿草皮上滑倒了。', ['lay turf', 'a grass turf'], ['lawn'], 'noun', 'uncountable', '家居'],
    ['地盘；势力范围', 'Ground that a person or group claims for itself and defends against others.', '被某个人或群体认作自己所有并加以守护的区域。', '多作不可数，常与 the 连用，口语常用。', 'The gang fought over a small patch of turf.', '帮派为一小块地盘打斗。', ['stake out a turf'], ['territory'], 'noun', 'uncountable', '社会'],
  ],'turfs', ['lawn'], 'brief ←?，按 §5.2 自扫根：库内无 turf 的语义直连词根（-urf 不在 §5.4 清单，库内亦无同形词根或兄弟派生词），留空；草皮、地盘义均多作不可数故 forms 留空；家族/近义 lawn 草坪、territory 领地（队列原样，fam 入第 10 参，syn 置首义项、义项 2 各恰好一次）');

  W('turn into', 'verb', '/tɜːn ˈɪntə/', '', [], '变成；使变成', 'To change into something else, or to cause such a change.', [
    ['变成；成为', 'To change from one type of person or thing into another.', '从一种人或事物变成另一种。', '及物短语动词，后接名词或从句，常与 would、will 连用表假设。', 'The small village turned into a busy town.', '这个小村庄变成了繁忙的城镇。', ['turn into a habit'], ['become'], 'verb', '及物', '通用'],
    ['使变成；使成为', 'To cause something or someone to change into something else.', '促使某物或某人变成别的样子。', '及物短语动词，宾语置于两词之间。', 'The frost turned the leaves into a carpet of colour.', '霜把落叶变成了一片色彩的地毯。', [], [], 'verb', '及物', '自然'],
  ],'turns into~turned into~turning into', ['become'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 become 变得、变成（队列原样，入第 10 参），近义 become 变成（置首义项恰好一次）').phrase = true;

  W('turn off', 'verb', '/tɜːn ɒf/', '', [], '关掉；使停止工作', 'To switch something off, or to make it stop working.', [
    ['关掉（电器、水、煤气）', 'To switch off a light, machine or water supply.', '把灯、机器或水源的开关关上。', '及物短语动词，宾语可置于两词之间。', 'Please turn off the lamp before you leave.', '离开前请把台灯关掉。', ['turn off the light', 'turn off the tap'], ['disable'], 'verb', '及物', '家居'],
    ['使失去兴趣；使反感', 'To make someone lose interest in something.', '使某人对某事失去兴趣。', '及物短语动词，常与 by 连用。', 'The long speech turned the audience off.', '冗长的讲话让听众失去了兴趣。', [], [], 'verb', '及物', '心理'],
    ['（车辆）驶离主路', 'To leave a main road onto a smaller one.', '从主路转到较小的路上。', '不及物短语动词，常与 at 连用。', 'Turn off at the next junction.', '在下一个路口驶离主路。', ['turn off the road'], [], 'verb', '不及物', '交通'],
  ],'turns off~turned off~turning off', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 disable 使失效、关掉（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('turn out', 'verb', '/tɜːn aʊt/', '', [], '结果是；出席', 'To happen or be found to be a certain way.', [
    ['结果是；证明是', 'To happen or be found to have a particular quality.', '最终发生成某种情形，或被发现具有某种性质。', '不及物短语动词，常与 to be 或 that 从句连用。', 'It turned out to be a false alarm.', '结果那只是一场虚惊。', ['turn out well'], ['prove'], 'verb', '不及物', '通用'],
    ['出席；到场', 'To go to an event in large numbers.', '大批前往参加某项活动。', '不及物短语动词，主语通常是人。', 'Thousands turned out for the parade.', '数千人到场参加游行。', ['turn out in force'], [], 'verb', '不及物', '社交'],
    ['关掉（灯）；生产', 'To switch off a light, or to produce something in a factory.', '关掉电灯，或在工厂里制造出产品。', '及物短语动词，宾语可置于两词之间。', 'The factory turns out parts for aircraft.', '这家工厂生产飞机零部件。', ['turn out goods'], [], 'verb', '及物', '工业'],
  ],'turns out~turned out~turning out', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 prove 证明是、结果成为（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('turn to', 'verb', '/tɜːn tuː/', '', [], '求助于；翻到', 'To go to someone for help, or to open a page.', [
    ['求助于；求教于', 'To go to someone for help or advice when you have a problem.', '遇到问题时去找某人寻求帮助或建议。', '不及物短语动词，常与 for 连用。', 'She turned to her sister for advice.', '她去找姐姐商量。', ['turn to a friend for help'], ['resort'], 'verb', '不及物', '社交'],
    ['翻到；转向（某页、某话题）', 'To open a book at a particular page, or to start discussing something.', '把书翻到某一页，或转而谈论某个话题。', '及物短语动词，后接名词。', 'Turn to page twelve for the map.', '地图在第十二页。', ['turn to the last chapter'], [], 'verb', '及物', '书面'],
  ],'turns to~turned to~turning to', ['resort'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 resort 求助、诉诸（队列原样，入第 10 参），近义 resort 求助、诉诸（置首义项恰好一次）').phrase = true;

  W('turn-off', 'noun', '/ˈtɜːnɒf/', 'A1', [], '关闭；令人扫兴的事物；岔路', 'The act of switching off, a disappointing thing, or a side road.', [
    ['关闭；切断', 'The action of switching off a machine or cutting off a supply.', '把机器关掉或切断供应的动作。', '可数，常与 switch、power 连用。', 'The turn-off for the power is behind the panel.', '电源的开关在面板后面。', ['a power turn-off'], [], 'noun', 'countable', '工业'],
    ['令人扫兴的人或事物', 'Something or someone that makes you lose interest.', '让人失去兴趣的人或事物。', '可数，口语用法，含贬义。', 'The slow start of the film was a real turn-off.', '这部电影缓慢的开头真叫人扫兴。', ['a complete turn-off'], [], 'noun', 'countable', '媒体'],
    ['岔路；出口匝道', 'A road junction where traffic leaves a main route.', '车辆离开主路的路口。', '可数，常与 to 连用。', 'Take the next turn-off for the coast.', '在下一个出口下去通往海边。', ['a turn-off to the coast'], ['exit'], 'noun', 'countable', '交通'],
  ], 'turn-offs',['turn'], 'brief ←?，按 §5.2 自扫根：连字符复合词 turn-off = turn + off，按 §5.3 取首成分 turn A1 转、关闭（author_t3.js 第 4 参），「关闭、驶离」与 turn 语义直连，A1 继承（判断项：复合词首成分裁定，同 author_t4.js third-level←third A1 先例）；近义 exit 出口、出去（队列原样，置义项 3 恰好一次）；fam 队列为空故第 10 参 []');

  W('turning point', 'noun', '/ˈtɜːnɪŋ pɔɪnt/', '', [], '转折点；关键变化的时刻', 'A moment when an important change takes place.', [
    ['转折点；关键时刻', 'A moment when an important change happens, after which things develop in a new way.', '发生重要变化的时刻，此后事物开始朝新方向发展。', '可数，常与 in、of 连用，多用于历史、个人经历。', 'The election marked a turning point for the country.', '这次选举是该国的一个转折点。', ['reach a turning point', 'a crucial turning point'], ['crisis', 'landmark', 'milestone'], 'noun', 'countable', '历史'],
    ['（道路的）转弯处', 'The place where a road or path changes direction.', '道路或小径改变方向的地方。', '可数，指示路牌上常见。', 'The turning point is just beyond the bridge.', '转弯处就在桥的那一头。', ['a sharp turning point'], [], 'noun', 'countable', '交通'],
  ],'turning points', ['crisis'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 crisis 危机、紧要关头（队列原样，入第 10 参），近义 crisis 危机、landmark 里程碑、milestone 重大事件（队列原样，置首义项各恰好一次）').phrase = true;

  W('tusk', 'noun', '/tʌsk/', '', [], '长而尖的獠牙', 'A long pointed tooth that sticks out of the mouth.', [
    ['獠牙；长牙', 'A long pointed tooth that sticks out from the mouth of an elephant, walrus or wild boar.', '从大象、海象或野猪嘴里突出的长而尖的牙齿。', '可数，常与 of 连用，指动物的上门齿。', 'The elephant lost a tusk in the trap.', '这头大象在陷阱里丢了一根獠牙。', ['an elephant tusk', 'a pair of tusks'], ['horn', 'ivory'], 'noun', 'countable', '自然'],
    ['（人的）龅牙；突出的门牙', 'A large front tooth that sticks out, said of a person.', '向前突出的大门牙，用于形容人。', '可数，口语用法，略带戏谑。', 'He grinned, showing a chipped tusk.', '他咧嘴一笑，露出一颗缺损的门牙。', [], [], 'noun', 'countable', '外貌'],
  ], 'tusks', ['ivory'], 'brief ←?，按 §5.2 自扫根：库内无 tusk 的语义直连词根（-usk 不在 §5.4 清单，与 task 形近但语义不直连，切词假象，规范 §5.7），留空；家族 ivory 象牙（队列原样，入第 10 参），近义 horn 兽角、ivory 象牙（队列原样，置首义项各恰好一次）');

  W('twelfth', 'number', '/twelfθ/', 'A1', ['CET4'], '序数第十二（另指十二分之一）', 'Coming after eleven in a count, or one part in 12.', [
    ['第十二', 'Number 12 in a series, used when ordering or counting.', '序列中的第 12，用于排序或计数。', '数词家族统一取序数词义。', 'Her office is on the twelfth floor.', '她的办公室在第十二层。', ['the twelfth of May', 'the twelfth century'], ['twelve'], 'number', 'null', '通用'],
    ['十二分之一', 'One of 12 equal parts of something.', '某物十二等份中的一份。', '可数，常见于数学与计量语境。', 'Only a twelfth of the class passed the test.', '只有全班的十二分之一通过了考试。', ['one twelfth of'], [], 'noun', 'countable', '数学'],
  ], 'twelfths', ['twelve'], 'brief ←?，按 §7 数词条目处理：自扫根 twelve A1 十二（author_t3.js 第 4 参）+ -th（-th 在 §5.4 清单，先例 author_e3.js eighteenth←eighteen A1、eleventh←eleven A1），A1 继承；数词家族统一取序数词义，义项 2 为分数义（先例 eighth/fifth）；家族/近义 twelve 十二（基数词，队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）；CET4 标签照抄队列');

  W('twelvemonth', 'noun', '/ˈtwelvmʌnθ/', 'A1', [], '十二个月；一年（旧时说法）', 'A period of twelve months, used in old-fashioned speech.', [
    ['十二个月；一年', 'A period of twelve months, said in old-fashioned or dialect speech.', '十二个月的时间，用于旧式或方言表达。', '可数，现代英语多说 twelve months，属旧式用法。', 'The lease ran for a twelvemonth.', '租约签了一年。', ['a twelvemonth ago'], ['year'], 'noun', 'countable', '历史'],
  ], 'twelvemonths',['twelve'], 'brief ←?，按 §5.2 自扫根：复合词 twelvemonth = twelve + month，按 §5.3 取首成分 twelve A1 十二（author_t3.js 第 4 参），「十二个月即一年」与 twelve 语义直连，A1 继承（判断项：复合词首成分裁定，同 §5.3 run-up←run 先例；词尾 month A1 亦在库）；近义 year 年、一年（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('twentieth', 'number', '/ˈtwentiɪθ/', 'A1', ['CET4'], '序数第二十（另指二十分之一）', 'Coming after nineteen in a count, or one part in 20.', [
    ['第二十', 'Number 20 in a series, used when ordering or counting.', '序列中的第 20，用于排序或计数。', '数词家族统一取序数词义。', 'The twentieth century saw great change.', '二十世纪见证了巨大的变化。', ['the twentieth anniversary'], ['twenty'], 'number', 'null', '通用'],
    ['二十分之一', 'One of 20 equal parts of something.', '某物二十等份中的一份。', '可数，常见于数学与计量语境。', 'A twentieth of the sum is kept as a fee.', '这笔钱的二十分之一被留作手续费。', ['one twentieth of'], [], 'noun', 'countable', '数学'],
  ], 'twentieths', ['twenty'], 'brief ←?，按 §7 数词条目处理：自扫根 twenty A1 二十（author_t3.js 第 4 参）+ -th（y→ieth 正字变化，先例 author_e3.js eightieth←eighty A1），A1 继承；数词家族统一取序数词义，义项 2 为分数义（先例 eighth/fifth）；家族/近义 twenty 二十（基数词，队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）；CET4 标签照抄队列');

  W('twenty-five cents', 'noun', '/ˌtwentiˈfaɪv ˈsents/', '', [], '二十五美分；一枚两角五分的硬币', 'A coin or sum worth 25 cents, one fourth of a dollar.', [
    ['二十五美分；两角五分', 'A coin or an amount of money worth 25 cents, which is one fourth of a dollar.', '价值 25 美分、即四分之一美元的硬币或金额。', '可数，指硬币时可数，指金额时多作不可数。', 'The ride costs twenty-five cents.', '这趟车费二十五美分。', ['a coin worth twenty-five cents'], ['quarter'], 'noun', 'countable', '金融'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 quarter 四分之一美元、两角五分（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('twilight', 'noun', '/ˈtwaɪlaɪt/', 'A1', [], '暮光；（衰落的）末期', 'The dim light after sunset, or the final stage of something.', [
    ['暮光；黄昏微光', 'The soft light in the sky after the sun has gone down and before night.', '太阳落下之后、黑夜来临之前天空中的柔和光线。', '不可数，常与 the 连用；也可作定语，如 twilight sky。', 'They walked home in the twilight.', '他们在暮色中走回家。', ['in the twilight', 'the twilight sky'], ['dusk', 'evening'], 'noun', 'uncountable', '自然'],
    ['（衰落的）末期；晚期', 'The final stage of something, when its strength or importance is fading.', '某事物走向衰弱或失去重要性的最后阶段。', '不可数，书面用法，常与 of 连用。', 'He wrote during the twilight of his career.', '他在自己职业生涯的晚期写作。', ['the twilight years'], [], 'noun', 'uncountable', '书面'],
  ], '', ['dusk'], 'brief ←?，按 §5.2 自扫根：复合词 twilight 的首成分 twi-（古语「双、半」）不在库，按 §5.3 取其后词根 light A1 光（author_l2.js 第 4 参），「暮光」即黄昏的微光，与 light 语义直连，A1 继承（判断项：取后词根，备注披露；同 self-control←control 取根方式）；家族 dusk 黄昏（队列原样，入第 10 参），近义 dusk 黄昏、evening 傍晚（队列原样，置首义项各恰好一次）');

  W('twine', 'noun/verb', '/twaɪn/', '', [], '细绳；缠绕', 'Fine thread twisted together, or to wind it round something.', [
    ['细绳；麻线', 'Strong fine thread made by twisting strands together, used for tying or weaving.', '把多股线捻在一起做成的结实细绳，用于捆扎或编织。', '多作不可数，常与 of 连用。', 'She tied the parcel with twine.', '她用细绳捆扎包裹。', ['a ball of twine'], ['string'], 'noun', 'uncountable', '工具'],
    ['缠绕；盘绕', 'To twist or wind something round in a decorative or tangled way.', '以装饰性或缠结的方式把某物绕起来。', '及物动词，也可用于 be twined with 结构。', 'Ivy twined around the old gate.', '常春藤缠绕着旧大门。', ['twine round'], [], 'verb', '及物', '自然'],
  ], 'twines~twined~twined~twining', [], 'brief ←?，按 §5.2 自扫根：库内 twin B1 双胞胎、成对的（author_t3.js）与 twine 词源相关（twi- 表「二」），但库内 twin 的现代语义与「细绳、缠绕」不直连，兄弟派生 §5.6「词首全段共享 + 语义直连」不成立，-ine 亦不在 §5.4 清单，留空（判断项）；近义 string 绳子、线（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');
})(typeof window !== 'undefined' ? window : globalThis);
