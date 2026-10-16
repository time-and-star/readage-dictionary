/* data/words/cet/author_t3.js — T 字母词条文件（含两个批次）
 * · 遗留批（2026-09-23 写入）：手敲词条 transplant → tyre（T 字母收尾），共 74 条单词，
 *   已由 index.html 第 264 行注册；本批未改动其任何条目（只在文件头补注说明，
 *   并在文件末尾追加新批次），条目内容与字节均原样保留。
 * · 本批（T 批次 3，%TEMP%\opencode\_task_t3.txt，widx 063-093）：缺口 tendency ~ the like，
 *   共 31 条 = 17 单词 + 14 短语（testing ground、that is、that which、the accused、
 *   the author、the baby、the disabled、the editors、the first、the future、
 *   the human race、the ill、the jobless、the like），按队列顺序追加于文件末尾。
 * 【与任务书的差异 · 须主 agent 裁定】任务书写「新建 assets/js/data/words/cet/author_t3.js」，
 *   但该路径已被遗留批 74 条占用（index.html 第 264 行已加载）。直接覆盖会删除 transplant、
 *   transport、treaty、trend、tyre 等 74 条在库词条，其中 trend 正是本批 tendency 的
 *   家族/近义词，且全库无第二处副本，故改为同文件追加：不删改、不移动任何遗留条目，
 *   本批 31 条整段独立成块（文末有分隔注释），如需独立的 31 条文件可原样抽出另存
 *   （check_phrase 将报 105 条 = 74 遗留 + 31 本批，phrase 标记 14 个与队列 [PH] 数一致；
 *   批内条目数 31 = 17 单词 + 14 短语另见报告自查）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列（refs 字符串含词头 th 等
 *   队列原样写法，一律不「纠正」）。
 * CET 标签照抄队列：CET4 × 4（tendency、tension、terrorism、thankful）、
 *   CET6 × 1（termination），其余 26 条 []。
 * brief：%TEMP%\opencode\_t3_brief.txt 共 17 行，对应本批 17 个单词（14 短语不入 brief），
 *   首行 tendency、末行 thaw；2 行给根（tense B1、thank A1），15 行显示 ←?。
 *   ←? 一律按规范 §5.2 纯文本自扫（fs.readFileSync + indexOf("W('word'") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库）：命中根全在 author_t1.js
 *   第 4 参：tend B1、ten A1、terminate C1、terminal B2、term A2、terror B2、
 *   testify C1、thank A1；brief 根 tense B1、thank A1 自扫复核同级；trend B1 在本文件
 *   遗留批第 4 参；tens、tent、test、talon、tame 等候选根亦纯文本复核。
 * 扫根结论：
 * · 继承 12 单词：
 *   tendency←tend B1 + -ency（-ency 属 §5.4 -ence 类变体，判断项：按库内
 *     consistency←consistent B2、dependency←depend A2 的 -ency 先例继承）；
 *   tensed←tense B1 + -ed（-ed 在 §5.4 清单，分词转形容词，同 supplied←supply B1 先例）；
 *   tension←tense B1 + -sion（-sion 在 §5.4 清单，-se→-sion 交替同 decide→decision A2、
 *     explode→explosion A2 先例）；
 *   tenth←ten A1 + -th（-th 在 §5.4 清单，先例 eighteenth←eighteen A1、
 *     seventeenth←seventeen A1；数词条目按 §7 取序数词义、及物性 null）；
 *   termination←terminate C1 + -ation（e→∅+ation 正字类 §5.5，同 supervision←supervise B2）；
 *   terminology←term A2（§5.6 兄弟派生，词首 term 全段可见且「术语」语义直连，
 *     判断项：-ology 不在 §5.4 清单，库内 technology、ecology、psychology 备注均未定根）；
 *   terminus←terminal B2（§5.6 兄弟派生，词首 termin 全段共享且「终点站」语义直连，
 *     判断项：-us 不在 §5.4 清单、库内无 -us 后缀先例）；
 *   terrorism←terror B2 + -ism（-ism 不在 §5.4 清单，判断项：按库内 defeatism←defeat B1 先例）；
 *   testifier←testify C1 + -er（-er 在 §5.4 清单，-fy→-fier 同 amplify→amplifier C1 先例）；
 *   thankful←thank A1 + -ful（-ful 在 §5.4 清单，语义直连）；
 *   thankfulness←thank A1 + -ful + -ness（两后缀均在 §5.4 清单，双层透明后缀）；
 *   thanks←thank A1 + -s（复数形式单列词条，判断项：同 sales←sale A2、
 *     surroundings←surround B1 先例）；
 * · 留空 5 单词（逐条写入备注）：
 *   termagant（词首 term 在库 A2 但与「泼妇」语义不直连，切词假象 §5.7，-agant 不在清单）、
 *   testament（词首 test 在库 A2 但 testament 取「作证」义，与 test「测试」非同根，
 *     切词假象 §5.7，-ament 不在清单）、
 *   th（字母词，规范 §5.7）、
 *   thatch（库内无语义直连根，-atch 不在清单，与 that、match、watch 形近非同根）、
 *   thaw（库内无语义直连根，-aw 不在清单，与 that、raw 形近非同根）；
 * · 短语 14 条一律 ''（规范 §6，短语整体不取成分作根）。
 * CEFR 分布（17 单词）：A1 × 4（tenth、thankful、thankfulness、thanks）、
 *   A2 × 1（terminology）、B1 × 3（tendency、tensed、tension）、
 *   B2 × 2（terminus、terrorism）、C1 × 2（termination、testifier）、留空 × 5；
 *   14 短语一律 ''。合计 12 条继承、5 条单词留空、14 条短语留空。
 * 存疑：队列 fam/syn 中的 tomorrow 在 2026-09-28 上午另一会话覆盖 author_t2.js 后
 *   已不在库（本批 the future 仍按队列照抄该词，未做任何改写）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 * ===== 本批 31 条（tendency ~ the like）追加于文件末尾，见文末分隔注释 =====
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t3.js 必须在 _cet_helper.js 之后加载');

  W('transplant', 'verb/noun', '/trænsˈplɑːnt/', 'B2', ['CET4'], '移植；移栽；移植器官', 'To move a plant or an organ to another place; that operation.', [
    ['移植（器官）；移栽', 'To move an organ, tissue, or plant to another body or place.', '把器官、组织或植物移到另一个身体或地方。', 'transplant an organ：移植器官', 'Surgeons transplanted a kidney.', '外科医生移植了一个肾脏。', ['transplant an organ', 'transplant seedlings'], ['graft', 'transfer'], 'verb', '及物', '医学'],
    ['移植手术；移植物', 'An operation that moves an organ, or the organ moved.', '移动器官的手术，或被移动的器官。', 'a heart transplant：心脏移植', 'She is waiting for a transplant.', '她在等待移植。', ['a heart transplant', 'organ transplant'], [], 'noun', 'countable', '医学'],
  ], 'transplants~transplanted~transplanted~transplanting', ['graft', 'transfer'], '名词也可读 /ˈtrænsplɑːnt/。transplantation 移植术'),
  W('transport', 'verb/noun', '/trænˈspɔːt/', 'A2', ['CET4'], '运输；运送；交通；运输工具', 'To take people or goods from one place to another.', [
    ['运输；运送', 'To take goods or people from one place to another.', '把货物或人从一个地方运到另一个地方。', 'transport goods：运输货物', 'The boxes were transported by rail.', '这些箱子由铁路运输。', ['transport goods', 'be transported by'], ['carry', 'ship'], 'verb', '及物', '交通'],
    ['交通；运输系统', 'A system for carrying people or goods.', '运送人或货物的系统。', '名词英式常读 /ˈtrænspɔːt/。public transport 公共交通。', 'I go to work by public transport.', '我乘公共交通上班。', ['public transport', 'air transport'], ['transportation', 'transit'], 'noun', '不可数', '交通'],
  ], 'transports~transported~transported~transporting', ['carry', 'transit'], '美式名词多用 transportation。transport 作动词重音在第二音节'),
  W('trap', 'noun/verb', '/træp/', 'B1', ['CET4'], '陷阱；圈套；夹住；使陷入', 'A device for catching animals; to catch or keep someone in a bad situation.', [
    ['陷阱；圈套；捕捉器', 'A device or trick for catching an animal or a person.', '用来捕捉动物或人的装置或诡计。', 'set a trap：设陷阱', 'The fox escaped the trap.', '狐狸逃脱了陷阱。', ['set a trap', 'fall into a trap'], ['snare', 'pitfall'], 'noun', 'countable', '通用'],
    ['夹住；使陷入困境', 'To catch something, or to keep someone in a bad place.', '抓住某物，或把某人困在不利的地方。', 'be trapped in：被困在', 'They were trapped in the lift.', '他们被困在电梯里。', ['be trapped', 'trap sb into'], ['catch'], 'verb', '及物', '通用'],
  ], 'traps~trapped~trapped~trapping', ['snare', 'catch'], '双写 p：trapped。trap sb into doing 诱使某人做'),
  W('trash', 'noun/verb', '/træʃ/', 'B1', ['CET4'], '垃圾；废物；捣毁；贬低', 'Things thrown away; to destroy or criticize harshly.', [
    ['垃圾；废物', 'Things that are thrown away, or something of very poor quality.', '扔掉的东西，或质量很差的东西。', '美式常用 trash，英式多用 rubbish。', 'Take out the trash.', '把垃圾拿出去。', ['take out the trash', 'a trash can'], ['rubbish', 'garbage'], 'noun', '不可数', '日常'],
    ['捣毁；贬损', 'To damage a place badly, or to criticize someone harshly.', '严重破坏一个地方，或严厉批评某人。', '口语。', 'Critics trashed the film.', '评论家把这部电影贬得一文不值。', ['trash a room', 'trash a film'], ['wreck', 'slam'], 'verb', '及物', '口语'],
  ], 'trashes~trashed~trashed~trashing', ['rubbish', 'garbage'], 'trash can 垃圾桶（美）。trashy 低俗的'),
  W('trauma', 'noun', '/ˈtrɔːmə/', 'C1', ['CET6'], '创伤；外伤；精神创伤', 'A severe injury, or a deeply shocking experience.', [
    ['精神创伤', 'A very shocking experience that has a lasting effect on the mind.', '对心理有持久影响的极度震惊经历。', 'childhood trauma：童年创伤', 'The accident left her with trauma.', '事故给她留下了心理创伤。', ['childhood trauma', 'emotional trauma'], ['shock', 'wound'], 'noun', '可数/不可数', '心理'],
    ['外伤；损伤', 'A serious physical injury.', '严重的身体损伤。', '医学。', 'The patient has head trauma.', '病人有头部外伤。', ['head trauma', 'major trauma'], ['injury'], 'noun', '可数/不可数', '医学'],
  ], 'traumas', ['shock', 'injury'], 'traumatic 造成创伤的。也可读 /ˈtraʊmə/'),
  W('travel', 'verb/noun', '/ˈtrævl/', 'A1', ['CET4'], '旅行；行进；游历', 'To go from one place to another, especially over a long distance.', [
    ['旅行；游历；行进', 'To go from one place to another.', '从一个地方到另一个地方。', 'travel to：前往', 'She travels to work by bus.', '她乘公共汽车上班。', ['travel to', 'travel abroad'], ['journey', 'go'], 'verb', '不及物', '旅行'],
    ['旅行；游历', 'The activity of travelling.', '旅行这件事。', '常不可数。', 'Air travel is faster.', '乘飞机旅行更快。', ['air travel', 'foreign travel'], ['tour'], 'noun', '不可数', '旅行'],
  ], 'travels~travelled~travelled~travelling', ['journey', 'tour'], '英式双写 l：travelled。美式 traveled。travels 复数可指游历见闻。traveller 旅行者'),
  W('tray', 'noun', '/treɪ/', 'A2', ['CET4'], '托盘；盘', 'A flat object with raised edges, used for carrying things.', [
    ['托盘；浅盘', 'A flat board with raised edges for carrying food, drinks, or papers.', '边缘凸起、用来端食物、饮料或文件的平板。', 'a tea tray：茶盘', 'She carried the cups on a tray.', '她用托盘端着杯子。', ['on a tray', 'a tea tray'], ['platter', 'salver'], 'noun', 'countable', '家居'],
  ], 'trays', ['platter'], 'in-tray 收文盘。ashtray 烟灰缸'),
  W('tread', 'verb/noun', '/tred/', 'C1', ['CET6'], '踩；行走；脚步；胎面', 'To put your foot down while walking; the step or the surface of a tyre.', [
    ['踩；踏；行走', 'To put your foot on something, or to walk.', '把脚放在某物上，或行走。', 'tread on：踩在', 'Do not tread on the flowers.', '不要踩花。', ['tread on', 'tread carefully'], ['step', 'walk'], 'verb', '不及物', '书面'],
    ['脚步声；踩踏方式；胎面', 'The sound or manner of walking, or the pattern on a tyre.', '走路的声音或方式，或轮胎上的花纹。', 'a heavy tread：沉重的脚步', 'The tyre has little tread left.', '轮胎花纹快磨光了。', ['a heavy tread', 'tyre tread'], ['footfall'], 'noun', '可数', '通用'],
  ], 'treads~trod~trodden~treading', ['step', 'walk'], '过去式 trod，过去分词 trodden。tread on sb toes 得罪某人。名词胎面与 tyre 相关'),
  W('treasure', 'noun/verb', '/ˈtreʒə(r)/', 'B2', ['CET4'], '金银财宝；珍品；珍惜', 'A collection of valuable objects; to value something highly.', [
    ['财宝；珍宝；珍品', 'Gold, jewels, or something very valuable.', '金银珠宝，或非常珍贵的东西。', 'buried treasure：埋藏的财宝', 'The museum holds many treasures.', '博物馆藏有许多珍品。', ['buried treasure', 'art treasures'], ['riches', 'jewel'], 'noun', '可数/不可数', '通用'],
    ['珍惜；珍视', 'To value something very much.', '非常看重某物。', 'treasure sth：珍惜', 'I treasure her letters.', '我珍视她的信。', ['treasure a memory', 'treasured possessions'], ['cherish', 'value'], 'verb', '及物', '情感'],
  ], 'treasures~treasured~treasured~treasuring', ['riches', 'cherish'], 'treasurer 财务主管。treasury 财政部／宝库。treasure 作动词比 value 更带感情'),
  W('treasury', 'noun', '/ˈtreʒəri/', 'C1', ['CET6'], '财政部；国库；宝库', 'The government department that controls public money.', [
    ['财政部；国库', 'The government department in charge of public money.', '负责公共资金的政府部门。', '常大写 the Treasury。', 'The Treasury announced the budget.', '财政部公布了预算。', ['the Treasury', 'treasury bonds'], ['exchequer', 'finance ministry'], 'noun', '单数', '政治'],
    ['宝库；文库', 'A place or collection of valuable things.', '珍贵事物的收藏处。', 'a treasury of：……的宝库', 'The book is a treasury of poems.', '这本书是诗歌宝库。', ['a treasury of'], ['store', 'archive'], 'noun', 'countable', '文艺'],
  ], 'treasuries', ['exchequer', 'store'], 'treasurer 是掌管钱的人。the Treasury 在英国常指财政部'),
  W('treat', 'verb/noun', '/triːt/', 'A2', ['CET4'], '对待；治疗；处理；款待；乐事', 'To behave towards someone in a particular way; to give medical care; a special pleasure.', [
    ['对待；看待', 'To behave towards someone in a particular way.', '以某种方式对某人。', 'treat sb as：把某人当作', 'They treated me with respect.', '他们尊重地对待我。', ['treat as', 'treat with'], ['handle', 'deal with'], 'verb', '及物', '社交'],
    ['治疗；处理', 'To give medical care, or to put a substance through a process.', '给予医疗，或使物质经过一道工序。', 'treat a patient：治疗病人', 'The doctor treated the wound.', '医生处理了伤口。', ['treat a patient', 'treat with'], ['cure', 'nurse'], 'verb', '及物', '医学'],
    ['请客；款待；乐事', 'To pay for someone else enjoyment; something special that gives pleasure.', '为别人的享受付钱；带来乐趣的特别事物。', 'my treat：我请客', 'Ice cream was a treat.', '冰淇淋是一种款待。', ['my treat', 'a special treat'], ['pleasure', 'luxury'], 'noun', 'countable', '日常'],
  ], 'treats~treated~treated~treating', ['handle', 'cure'], 'treatment 治疗／对待。treat sb to 请某人享用'),
  W('treaty', 'noun', '/ˈtriːti/', 'B2', ['CET4'], '条约；协定', 'A formal agreement between countries.', [
    ['条约；协定', 'A formal written agreement between countries.', '国家之间正式的书面协议。', 'sign a treaty：签订条约', 'The two nations signed a peace treaty.', '两国签署了和平条约。', ['a peace treaty', 'sign a treaty'], ['pact', 'agreement'], 'noun', 'countable', '政治'],
  ], 'treaties', ['pact', 'agreement'], 'treaty 用于国家之间。contract 多用于私人或商业。agreement 更泛'),
  W('tree', 'noun', '/triː/', 'A1', ['CET4'], '树', 'A tall plant with a wooden trunk and branches.', [
    ['树；乔木', 'A tall plant with a thick wooden stem and branches.', '有粗木质茎和树枝的高大植物。', 'climb a tree：爬树', 'There is an old tree in the garden.', '花园里有一棵老树。', ['climb a tree', 'a fruit tree'], ['plant'], 'noun', 'countable', '植物'],
    ['树状图；谱系', 'A diagram with branches, such as a family history.', '有分枝的图，例如家族史。', 'a family tree：家谱', 'She drew her family tree.', '她画了家谱。', ['a family tree'], ['diagram'], 'noun', 'countable', '通用'],
  ], 'trees', ['plant'], 'bark up the wrong tree 找错对象。treetop 树梢'),
  W('trek', 'noun/verb', '/trek/', 'C1', ['CET6'], '长途跋涉；艰难的旅程', 'A long difficult journey on foot.', [
    ['长途跋涉；徒步旅行', 'A long hard walk, especially in mountains or wild country.', '尤其在山里或野外的长而艰苦的步行。', 'a trek through：穿越……的跋涉', 'The trek took three days.', '这次跋涉花了三天。', ['a mountain trek', 'go on a trek'], ['hike', 'journey'], 'noun', 'countable', '旅行'],
    ['长途跋涉；艰难地走', 'To make a long difficult journey on foot.', '进行长而艰苦的步行。', 'trek across：跋涉穿过', 'We trekked across the hills.', '我们翻山越岭走了过去。', ['trek across', 'trek for miles'], ['tramp'], 'verb', '不及物', '旅行'],
  ], 'treks~trekked~trekked~trekking', ['hike', 'tramp'], '双写 k：trekked。trek 比 walk 更强调路程远、条件艰苦'),
  W('tremble', 'verb/noun', '/ˈtrembl/', 'B2', ['CET4'], '颤抖；战栗；摇晃', 'To shake slightly, from cold, fear, or weakness.', [
    ['颤抖；发抖', 'To shake slightly and uncontrollably.', '轻微而不由自主地抖动。', 'tremble with：因……发抖', 'Her hands trembled with cold.', '她的手冷得发抖。', ['tremble with', 'tremble at'], ['shake', 'shiver'], 'verb', '不及物', '身体'],
    ['颤抖；震颤', 'A slight shaking movement.', '轻微的抖动。', 'a tremble in：……中的颤抖', 'There was a tremble in his voice.', '他的声音在发颤。', ['a tremble in'], ['quiver'], 'noun', '可数', '身体'],
  ], 'trembles~trembled~trembled~trembling', ['shake', 'shiver'], 'tremble 是轻微发抖，shake 幅度可大可小。trembling 颤抖的'),
  W('tremendous', 'adjective', '/trəˈmendəs/', 'B2', ['CET4'], '巨大的；极好的；惊人的', 'Very great in amount or degree; excellent.', [
    ['巨大的；极大的', 'Very great in size, amount, or degree.', '尺寸、数量或程度非常大。', 'a tremendous amount：数量极大', 'The explosion made a tremendous noise.', '爆炸发出了巨大的声响。', ['a tremendous amount', 'tremendous pressure'], ['huge', 'enormous'], 'adjective', '定语', '通用'],
    ['极好的；了不起的', 'Extremely good.', '非常好。', '口语。', 'You did a tremendous job.', '你干得非常出色。', ['a tremendous success'], ['excellent', 'wonderful'], 'adjective', '定语', '口语'],
  ], '', ['huge', 'excellent'], '副词 tremendously。比 big 语气强得多'),
  W('trench', 'noun', '/trentʃ/', 'C1', ['CET6'], '壕沟；战壕；沟', 'A long narrow hole dug in the ground.', [
    ['沟；壕沟；战壕', 'A long narrow channel dug in the ground, especially by soldiers.', '地上挖出的又长又窄的沟，尤其是士兵挖的。', 'a trench：战壕', 'Soldiers waited in the trenches.', '士兵在战壕里等待。', ['in the trenches', 'dig a trench'], ['ditch', 'furrow'], 'noun', 'countable', '军事'],
    ['海沟', 'A long deep valley in the ocean floor.', '海底又长又深的谷。', 'the ocean trench：海沟', 'The cable lies in a trench.', '电缆铺在海沟里。', ['an ocean trench'], ['abyss'], 'noun', 'countable', '地理'],
  ], 'trenches', ['ditch', 'furrow'], 'trench coat 风衣。the trenches 常特指第一次世界大战的战壕'),
  W('trend', 'noun/verb', '/trend/', 'B1', ['CET4'], '趋势；时尚；趋向', 'A general direction of change; to become a popular topic.', [
    ['趋势；趋向；时尚', 'A general direction in which something is changing, or a fashion.', '某事变化的总方向，或一种时尚。', 'a trend towards：趋向于', 'There is a trend towards smaller cars.', '有一种转向小汽车的趋势。', ['a trend towards', 'set a trend'], ['tendency', 'fashion'], 'noun', 'countable', '社会'],
    ['成为热门；倾向', 'To change in a general direction, or to be widely discussed online.', '朝总的方向变化，或在网上被广泛讨论。', 'trend towards：趋向', 'The discussion is trending online.', '这个讨论正在网上走热。', ['trend towards', 'be trending'], ['tend'], 'verb', '不及物', '传媒'],
  ], 'trends~trended~trended~trending', ['tendency', 'fashion'], 'trendy 时髦的，有时含贬义。trend 是已出现的方向，tendency 是倾向'),
  W('trial', 'noun/adjective', '/ˈtraɪəl/', 'B2', ['CET4'], '审判；试验；考验；试用的', 'A court case; a test of quality or of a person.', [
    ['审判；审讯', 'A formal examination of evidence in a court.', '法庭上对证据的正式审查。', 'on trial：受审', 'The trial lasted three weeks.', '审判持续了三周。', ['on trial', 'stand trial'], ['hearing', 'case'], 'noun', 'countable', '法律'],
    ['试验；试用；考验', 'A test to see if something works or if someone can endure difficulty.', '检验某物是否有效、或某人能否承受困难的测试。', 'a trial period：试用期', 'The new drug is on trial.', '新药正在试验。', ['a trial period', 'trial and error'], ['test', 'experiment'], 'noun', '可数', '通用'],
    ['试验性的；试用的', 'Done in order to test something.', '为了测试而做的。', '只作定语。', 'She is on a trial basis.', '她是试用的。', ['a trial run', 'trial version'], ['experimental', 'pilot'], 'adjective', '定语', '通用'],
  ], 'trials', ['test', 'hearing'], 'trial and error 反复试验。try 是动词「尝试」，trial 是名词「试验、审判」'),
  W('triangle', 'noun', '/ˈtraɪæŋɡl/', 'A2', ['CET4'], '三角形；三角铁；三角关系', 'A flat shape with three straight sides.', [
    ['三角形', 'A flat shape with three straight sides and three angles.', '有三条直边和三个角的平面图形。', 'a right triangle：直角三角形', 'Draw a triangle.', '画一个三角形。', ['a right-angled triangle', 'an equilateral triangle'], ['shape'], 'noun', 'countable', '数学'],
    ['三角关系；三人组', 'A situation or group involving three people.', '涉及三个人的局面或小组。', 'a love triangle：三角恋', 'They formed a triangle of friends.', '他们三人成了朋友。', ['a love triangle'], ['trio'], 'noun', 'countable', '社会'],
  ], 'triangles', ['shape'], 'triangular 三角形的。the eternal triangle 三角恋爱，较旧'),
  W('tribe', 'noun', '/traɪb/', 'B2', ['CET6'], '部落；族；一伙人', 'A social group sharing language and customs, often traditional.', [
    ['部落；部族', 'A group of people of the same race, language, and customs, often with a traditional leader.', '种族、语言和习俗相同、常有传统首领的一群人。', 'a native tribe：土著部落', 'The tribe lives in the hills.', '这个部落住在山里。', ['a native tribe', 'tribal land'], ['clan', 'people'], 'noun', 'countable', '社会'],
    ['一伙；一类人', 'A group of people of the same type.', '同一类的一群人。', '有时带随意或贬义。', 'A tribe of tourists arrived.', '来了一伙游客。', ['a tribe of'], ['group', 'bunch'], 'noun', 'countable', '口语'],
  ], 'tribes', ['clan', 'people'], 'tribal 部落的。使用 tribe 描述人群时应注意尊重，避免猎奇口吻'),
  W('tribune', 'noun', '/ˈtrɪbjuːn/', 'C1', ['CET6'], '讲坛；护民官；论坛', 'A platform for speeches; in ancient Rome, an official who protected the people.', [
    ['讲坛；（保护民众的）领袖', 'A raised platform for speaking, or a person who defends ordinary people.', '发表讲话的高台，或为普通人辩护的人。', '书面。', 'He spoke from the tribune.', '他在讲坛上讲话。', ['from the tribune', 'a tribune of the people'], ['platform', 'rostrum'], 'noun', 'countable', '政治'],
    ['（报纸名中的）论坛', 'Used in the names of some newspapers.', '用于某些报纸的名称。', '专名常大写。', 'She writes for the Tribune.', '她为《论坛报》撰稿。', ['the Tribune'], ['paper'], 'noun', 'countable', '传媒'],
  ], 'tribunes', ['platform', 'rostrum'], 'tribune 与 tribunal「法庭」不同。考试中多作书面词'),
  W('tribute', 'noun', '/ˈtrɪbjuːt/', 'C1', ['CET6'], '颂词；致敬；贡品', 'Something said or given to show respect or admiration.', [
    ['致敬；颂词；悼念', 'Something done or said to show respect, especially for a dead person.', '为表示尊敬而做或说的事，尤其对死者。', 'pay tribute to：向……致敬', 'The concert was a tribute to the singer.', '这场音乐会是向那位歌手致敬。', ['pay tribute to', 'a tribute to'], ['homage', 'compliment'], 'noun', '可数/不可数', '社会'],
    ['贡品；贡金（历史）', 'Money or goods that one ruler had to pay to a more powerful one.', '一个统治者必须向更强者缴纳的钱或货物。', '历史用语。', 'The city paid tribute every year.', '这座城市每年纳贡。', ['pay tribute'], ['tax', 'offering'], 'noun', '不可数', '历史'],
  ], 'tributes', ['homage', 'compliment'], 'be a tribute to 说明……的好处：her success is a tribute to hard work'),
  W('trick', 'noun/verb/adjective', '/trɪk/', 'B1', ['CET4'], '诡计；窍门；戏法；欺骗；有诀窍的', 'A clever act to deceive or to entertain; to deceive.', [
    ['诡计；花招；恶作剧', 'Something done to deceive or to annoy someone as a joke.', '为欺骗或开玩笑烦人而做的事。', 'play a trick on：捉弄', 'They played a trick on him.', '他们捉弄了他。', ['play a trick', 'a dirty trick'], ['deception', 'prank'], 'noun', 'countable', '通用'],
    ['窍门；戏法', 'A clever way of doing something, or a skilful act to entertain.', '做某事的巧妙方法，或娱乐性的技巧表演。', 'do a trick：变戏法', 'There is a trick to opening the lid.', '开这个盖有窍门。', ['do a trick', 'the trick is'], ['knack', 'technique'], 'noun', 'countable', '通用'],
    ['欺骗；哄骗', 'To deceive someone.', '欺骗某人。', 'trick sb into：骗某人做', 'He tricked me into signing.', '他骗我签了字。', ['trick sb into', 'trick out of'], ['deceive', 'fool'], 'verb', '及物', '通用'],
  ], 'tricks~tricked~tricked~tricking', ['deceive', 'knack'], 'trick or treat 不给糖就捣蛋。tricky 难对付的。do the trick 奏效'),
  W('trickle', 'verb/noun', '/ˈtrɪkl/', 'C1', ['CET6'], '滴；淌；细流；慢慢移动', 'To flow slowly in a thin stream.', [
    ['滴；细细地流', 'To flow slowly in drops or a thin stream.', '以水滴或细流慢慢流动。', 'trickle down：滴下', 'Blood trickled from the cut.', '血从伤口慢慢流出。', ['trickle down', 'trickle from'], ['drip', 'dribble'], 'verb', '不及物', '通用'],
    ['慢慢来到', 'To arrive or move slowly and in small numbers.', '以很少的数量慢慢到达。', 'trickle in：慢慢进来', 'News trickled in.', '消息一点一点传来。', ['trickle in', 'trickle out'], [], 'verb', '不及物', '书面'],
    ['细流；少量', 'A thin slow flow, or a small number.', '缓慢的细流，或很少的数量。', 'a trickle of：一点点', 'Only a trickle of visitors came.', '只来了零星的访客。', ['a trickle of'], ['stream'], 'noun', '可数', '通用'],
  ], 'trickles~trickled~trickled~trickling', ['drip', 'dribble'], 'trickle-down 涓滴（理论），指好处从上层慢慢传到下层。反义是涌入 flood'),
  W('trifle', 'noun/verb', '/ˈtraɪfl/', 'C1', ['CET4'], '小事；少量；琐事；轻视；乳脂松糕', 'Something unimportant; a small amount; to treat something as unimportant.', [
    ['小事；琐事；少量', 'Something of little value or importance, or a small amount.', '价值或重要性很小的东西，或少量。', 'a trifle：有点儿', 'It costs a trifle more.', '它稍微贵一点。', ['a trifle', 'trifles'], ['bit', 'detail'], 'noun', '可数', '通用'],
    ['轻视；玩弄', 'To treat someone or something without respect.', '不尊重地对待。', 'trifle with：怠慢', 'Do not trifle with her feelings.', '不要玩弄她的感情。', ['trifle with'], ['toy', 'dally'], 'verb', '不及物', '书面'],
  ], 'trifles~trifled~trifled~trifling', ['bit', 'toy'], 'trifling 微不足道的。a trifle 作副词表示「稍微」'),
  W('trigger', 'noun/verb', '/ˈtrɪɡə(r)/', 'B2', ['CET4'], '扳机；触发；引起', 'The part of a gun you pull; to cause something to start.', [
    ['扳机；触发器', 'The small part of a gun that you press to fire it.', '枪支上按下去就会发射的小部件。', 'pull the trigger：扣扳机', 'His finger was on the trigger.', '他的手指放在扳机上。', ['pull the trigger', 'trigger happy'], ['lever'], 'noun', 'countable', '武器'],
    ['起因；诱因', 'Something that starts a process or reaction.', '引起一个过程或反应的事物。', 'a trigger for：……的诱因', 'Stress can be a trigger for illness.', '压力可以是疾病的诱因。', ['a trigger for', 'trigger point'], ['cause', 'stimulus'], 'noun', 'countable', '心理'],
    ['触发；引起', 'To make something happen suddenly.', '使某事突然发生。', 'trigger a crisis：引发危机', 'The remark triggered a protest.', '这句话引发了抗议。', ['trigger off', 'trigger a reaction'], ['spark'], 'verb', '及物', '通用'],
  ], 'triggers~triggered~triggered~triggering', ['cause', 'spark'], 'trigger-happy 动辄开枪或冲动的，含贬义'),
  W('trillion', 'number', '/ˈtrɪljən/', 'C1', ['CET6'], '万亿；大量', 'The number 1,000,000,000,000 in modern English.', [
    ['万亿；兆', 'A million million in modern British and American use.', '现代英美用法中的一百万个百万。', '数词。', 'The debt is over a trillion dollars.', '债务超过一万亿美元。', ['a trillion dollars'], ['billion'], 'number', '', '数词'],
    ['大量；无数', 'A very large number, not meant exactly.', '并不精确的极大数量。', '口语夸张。', 'There are trillions of stars.', '星星多得数不清。', ['trillions of'], ['countless'], 'number', '', '口语'],
  ], 'trillions', ['billion'], '现代英语 trillion 是 10 的 12 次方。billion 是 10 的 9 次方'),
  W('trim', 'verb/noun/adjective', '/trɪm/', 'C1', ['CET6'], '修剪；装饰；整齐的；削减', 'To cut small pieces off; neat and slim.', [
    ['修剪；削', 'To cut small amounts off something to make it neat.', '剪掉少量以使整齐。', 'trim your hair：修剪头发', 'Trim the hedge.', '把树篱修一修。', ['trim the hedge', 'trim off'], ['clip', 'cut'], 'verb', '及物', '日常'],
    ['削减', 'To reduce something slightly.', '稍微减少。', 'trim costs：削减成本', 'The company trimmed its staff.', '公司小幅裁员。', ['trim costs', 'trim the budget'], ['reduce'], 'verb', '及物', '经济'],
    ['整齐的；修长的', 'Neat, or thin in an attractive way.', '整齐的，或以好看的方式偏瘦。', 'a trim figure：匀称的身材', 'The garden looks trim.', '花园看上去很整齐。', ['a trim lawn', 'a trim figure'], ['neat', 'tidy'], 'adjective', '定语/表语', '通用'],
  ], 'trims~trimmed~trimmed~trimming', ['clip', 'neat'], 'in trim 健康良好（指船或人）。trimming 装饰边或修剪下来的东西'),
  W('trip', 'noun/verb', '/trɪp/', 'A1', ['CET4'], '旅行；绊倒；旅程', 'A journey to a place and back; to catch your foot and fall.', [
    ['旅行；出行', 'A journey to a place and usually back again.', '去某地并且通常再回来的行程。', 'a business trip：出差', 'We took a trip to the coast.', '我们去海边旅行了。', ['a business trip', 'go on a trip'], ['journey', 'excursion'], 'noun', 'countable', '旅行'],
    ['绊；绊倒', 'To catch your foot on something and fall or nearly fall.', '脚被某物绊住而跌倒或几乎跌倒。', 'trip over：被……绊倒', 'She tripped over the cable.', '她被电缆绊了一下。', ['trip over', 'trip up'], ['stumble'], 'verb', '不及物', '通用'],
    ['使犯错；触发', 'To make someone fall or make a mistake; to set a device off.', '使某人跌倒或犯错；启动装置。', 'trip sb up：使某人出错', 'The question tripped him up.', '这个问题把他难住了。', ['trip sb up', 'trip a switch'], ['catch'], 'verb', '及物', '通用'],
  ], 'trips~tripped~tripped~tripping', ['journey', 'stumble'], '双写 p。trip 通常有往返，journey 强调行程。trip up 使出错'),
  W('triple', 'adjective/verb/noun', '/ˈtrɪpl/', 'B2', ['CET4'], '三倍的；三部分的；使成三倍', 'Three times as much; to become three times as large.', [
    ['三倍的；三重的', 'Having three parts, or three times as much.', '有三部分，或是三倍。', 'a triple jump：三级跳', 'They scored a triple victory.', '他们取得了三项胜利。', ['triple the size', 'a triple room'], ['threefold'], 'adjective', '定语', '数词'],
    ['使成三倍；增至三倍', 'To become or make something three times as much.', '变成或使变成三倍。', 'triple in：在……上增至三倍', 'Profits tripled.', '利润增至三倍。', ['triple in size', 'more than triple'], ['treble'], 'verb', '及物/不及物', '数量'],
  ], 'triples~tripled~tripled~tripling', ['threefold', 'treble'], 'triple 与 treble 近义，treble 更多用于声音或英式数量'),
  W('triumph', 'noun/verb', '/ˈtraɪʌmf/', 'B2', ['CET4'], '胜利；巨大成功；获胜', 'A great success or victory.', [
    ['胜利；巨大成功；喜悦', 'A great victory or success, or the joy it brings.', '重大胜利或成功，或由此带来的喜悦。', 'a triumph for：……的胜利', 'The match was a triumph.', '这场比赛是一场胜利。', ['a triumph for', 'in triumph'], ['victory', 'success'], 'noun', '可数/不可数', '通用'],
    ['获胜；成功', 'To achieve a great victory.', '取得重大胜利。', 'triumph over：战胜', 'Good sense triumphed over fear.', '理智战胜了恐惧。', ['triumph over'], ['prevail', 'win'], 'verb', '不及物', '书面'],
  ], 'triumphs~triumphed~triumphed~triumphing', ['victory', 'win'], 'triumphant 欢欣鼓舞的、胜利的。triumph 比 win 更强调辉煌'),
  W('trivial', 'adjective', '/ˈtrɪviəl/', 'C1', ['CET6'], '琐碎的；不重要的', 'Not important or serious.', [
    ['琐碎的；不重要的', 'Of little importance.', '重要性很小。', 'a trivial matter：小事', 'Do not worry about trivial details.', '别为琐碎的细节担心。', ['a trivial matter', 'trivial problems'], ['unimportant', 'minor'], 'adjective', '定语/表语', '通用'],
    ['浅薄的', 'Concerned only with small unimportant things.', '只关心细小不重要的事。', '含贬义。', 'The conversation was trivial.', '谈话很浅。', ['trivial talk'], ['superficial', 'petty'], 'adjective', '表语', '贬义'],
  ], '', ['unimportant', 'petty'], 'trivia 琐事（复数意义）。trivialize 使显得无足轻重'),
  W('trolley', 'noun', '/ˈtrɒli/', 'B1', ['CET4'], '手推车；有轨电车', 'A small cart with wheels; in American English, a tram.', [
    ['手推车；购物车', 'A small vehicle with wheels for carrying things.', '用来运东西的有轮小车。', '英式。美式购物车常说 cart。', 'Put the bags in the trolley.', '把袋子放进手推车。', ['a shopping trolley', 'a luggage trolley'], ['cart', 'barrow'], 'noun', 'countable', '日常'],
    ['有轨电车（美）', 'A tram, in American English.', '美式英语中的有轨电车。', 'a trolley bus 无轨电车。', 'We took the trolley downtown.', '我们乘电车去了市中心。', ['a trolley car'], ['tram', 'streetcar'], 'noun', 'countable', '交通'],
  ], 'trolleys', ['cart', 'tram'], '英式 trolley 是推车，美式常是电车。off your trolley 发疯了，俚语'),
  W('troop', 'noun/verb', '/truːp/', 'B2', ['CET4'], '军队；一群；成群结队地走', 'Soldiers; a group of people moving together.', [
    ['军队；部队', 'Soldiers, especially in large groups.', '士兵，尤其是大批的。', '常用复数 troops。', 'Troops were sent to the border.', '部队被派往边境。', ['troops', 'troop movements'], ['soldiers', 'forces'], 'noun', '复数', '军事'],
    ['一群；一队', 'A group of people or animals.', '一群人或动物。', 'a troop of：一群', 'A troop of children followed.', '一群孩子跟在后面。', ['a troop of'], ['group', 'band'], 'noun', 'countable', '通用'],
    ['成群前往', 'To walk somewhere together as a group.', '一群人一起走到某处。', 'troop in：鱼贯而入', 'They trooped into the hall.', '他们成群走进大厅。', ['troop in', 'troop out'], ['file', 'march'], 'verb', '不及物', '通用'],
  ], 'troops~trooped~trooped~trooping', ['soldiers', 'group'], 'troop 单数可指一群，troops 几乎总指军人。trooper 是骑兵或警察'),
  W('trophy', 'noun', '/ˈtrəʊfi/', 'B2', ['CET6'], '奖杯；战利品', 'An object given as a prize, or something kept to show a victory.', [
    ['奖杯；奖品', 'An object such as a cup given to the winner of a competition.', '奖给竞赛获胜者的杯子等物品。', 'win a trophy：赢得奖杯', 'She lifted the trophy.', '她举起了奖杯。', ['win a trophy', 'a silver trophy'], ['cup', 'prize'], 'noun', 'countable', '体育'],
    ['战利品；纪念物', 'Something kept as a sign of success, sometimes from a hunt or a war.', '作为成功标志而保存的东西，有时来自狩猎或战争。', 'a hunting trophy：狩猎纪念物', 'The shield was a war trophy.', '这面盾是战利品。', ['a war trophy'], ['souvenir'], 'noun', 'countable', '历史'],
  ], 'trophies', ['cup', 'prize'], 'trophy wife 等说法含贬义，正式写作宜避免。复数 trophies'),
  W('tropic', 'noun/adjective', '/ˈtrɒpɪk/', 'C1', ['CET6'], '回归线；热带的', 'One of the two lines of latitude; relating to the hottest regions.', [
    ['回归线', 'Either of the two imaginary lines around the earth at about 23.5 degrees north or south.', '地球上约南北纬 23.5 度的两条假想线之一。', 'the Tropic of Cancer：北回归线', 'The ship crossed the tropic.', '船越过了回归线。', ['the Tropic of Cancer', 'the Tropic of Capricorn'], ['latitude'], 'noun', 'countable', '地理'],
    ['热带（the tropics）', 'The hottest region of the earth, between those two lines.', '两条回归线之间最热的地区。', '用复数 the tropics。', 'They live in the tropics.', '他们住在热带。', ['the tropics', 'tropical heat'], ['equator'], 'noun', '复数', '地理'],
  ], 'tropics', ['latitude'], 'tropical 热带的。tropic 单数多指回归线，the tropics 指热带地区'),
  W('trouble', 'noun/verb', '/ˈtrʌbl/', 'A2', ['CET4'], '麻烦；困难；故障；打扰；使烦恼', 'Problems or difficulty; to worry or disturb someone.', [
    ['麻烦；困难；烦恼', 'Problems, worry, or extra effort.', '问题、忧虑或额外的力气。', 'in trouble：处于困境', 'We are in trouble.', '我们有麻烦了。', ['in trouble', 'have trouble doing'], ['difficulty', 'problem'], 'noun', '可数/不可数', '通用'],
    ['故障；疾病', 'A fault in a machine, or an illness.', '机器的毛病，或疾病。', 'engine trouble：发动机故障', 'He has heart trouble.', '他有心脏病。', ['engine trouble', 'heart trouble'], ['fault', 'illness'], 'noun', '不可数', '通用'],
    ['使烦恼；打扰；费心', 'To make someone worried, or to disturb them.', '使某人担心，或打扰某人。', 'sorry to trouble you：抱歉打扰', 'Does the noise trouble you?', '这噪音打扰你吗？', ['trouble sb', 'do not trouble'], ['worry', 'bother'], 'verb', '及物', '通用'],
  ], 'troubles~troubled~troubled~troubling', ['problem', 'bother'], 'have trouble doing 做某事有困难，不接 to do。troublesome 麻烦的'),
  W('trousers', 'noun', '/ˈtraʊzəz/', 'A1', ['CET4'], '裤子', 'A piece of clothing covering the body from the waist to the ankles, with separate parts for each leg.', [
    ['裤子', 'Clothing that covers both legs separately from the waist down.', '从腰部向下分别罩住两条腿的衣服。', '英式 trousers，美式 pants。永远复数。', 'These trousers are too long.', '这条裤子太长了。', ['a pair of trousers', 'wear trousers'], ['pants', 'slacks'], 'noun', '复数', '衣着'],
  ], '', ['pants'], 'a pair of trousers 一条裤子，动词用单数 is。trouser leg 裤腿'),
  W('truck', 'noun/verb', '/trʌk/', 'A1', ['CET4'], '卡车；货车；用卡车运', 'A large road vehicle for carrying goods.', [
    ['卡车；货车', 'A large motor vehicle for carrying goods.', '运送货物的大型机动车。', '美式 truck，英式也常说 lorry。', 'The truck was loaded with wood.', '卡车上装着木头。', ['a delivery truck', 'a truck driver'], ['lorry', 'van'], 'noun', 'countable', '交通'],
    ['用卡车运送', 'To take goods by truck.', '用卡车运送货物。', '较商业。', 'The fruit is trucked to the city.', '水果用卡车运到城里。', ['truck goods'], ['haul', 'transport'], 'verb', '及物', '交通'],
  ], 'trucks~trucked~trucked~trucking', ['lorry', 'haul'], 'fire truck 消防车（美）。pickup truck 皮卡'),
  W('true', 'adjective', '/truː/', 'A1', ['CET4'], '真实的；真正的；忠实的', 'In agreement with the facts; real; loyal.', [
    ['真实的；确实的', 'In agreement with fact or reality.', '与事实或现实相符。', 'come true：实现', 'The story is true.', '这个故事是真的。', ['come true', 'it is true that'], ['correct', 'accurate'], 'adjective', '表语/定语', '通用'],
    ['真正的；忠实的', 'Real, or loyal.', '名副其实的，或忠诚的。', 'a true friend：真正的朋友', 'She is true to her word.', '她信守诺言。', ['a true friend', 'true to'], ['real', 'loyal'], 'adjective', '定语/表语', '通用'],
  ], '', ['real', 'correct'], 'truth 真相。truly 真正地。come true 实现，主语是愿望不是人'),
  W('trumpet', 'noun/verb', '/ˈtrʌmpɪt/', 'B2', ['CET6'], '喇叭；小号；大声宣告', 'A brass musical instrument; to announce something loudly.', [
    ['小号；喇叭', 'A brass musical instrument that you play by blowing.', '用嘴吹奏的铜管乐器。', 'play the trumpet：吹小号', 'He plays the trumpet.', '他吹小号。', ['play the trumpet', 'a trumpet solo'], ['horn', 'bugle'], 'noun', 'countable', '音乐'],
    ['大声宣布；鼓吹', 'To talk about something in a loud proud way.', '大声而骄傲地谈论某事。', 'trumpet sth：大肆宣扬', 'The company trumpeted its success.', '公司大肆宣扬自己的成功。', ['trumpet a success'], ['proclaim', 'boast'], 'verb', '及物', '书面'],
  ], 'trumpets~trumpeted~trumpeted~trumpeting', ['horn', 'proclaim'], 'trumpeter 小号手。blow your own trumpet 自吹自擂'),
  W('trunk', 'noun', '/trʌŋk/', 'B2', ['CET4'], '树干；大箱子；象鼻；汽车后备箱', 'The thick main stem of a tree; a large box; an elephant nose.', [
    ['树干', 'The thick main stem of a tree.', '树的粗大主茎。', 'the trunk of a tree：树干', 'The bird sat on the trunk.', '鸟停在树干上。', ['a tree trunk'], ['stem', 'bole'], 'noun', 'countable', '植物'],
    ['大箱子；象鼻；（汽车）后备箱', 'A large strong box, the long nose of an elephant, or the storage space at the back of a car.', '结实的大箱子、大象的长鼻子，或汽车后部的储物空间。', '后备箱是美式，英式说 boot。', 'Put the bags in the trunk.', '把袋子放进行李箱。', ['in the trunk', 'an elephant trunk'], ['chest', 'boot'], 'noun', 'countable', '通用'],
  ], 'trunks', ['stem', 'chest'], 'swimming trunks 男式泳裤，永远复数。trunk road 干道'),
  W('trust', 'noun/verb', '/trʌst/', 'B1', ['CET4'], '信任；信赖；托付；信托', 'The belief that someone is honest; to believe that.', [
    ['信任；信赖', 'The belief that someone is good, honest, and reliable.', '认为某人善良、诚实、可靠的信念。', 'trust in：信任', 'Trust is important in a team.', '信任对团队很重要。', ['trust in', 'put your trust in'], ['faith', 'confidence'], 'noun', '不可数', '情感'],
    ['信任；托付；指望', 'To believe that someone is honest, or to give them responsibility.', '相信某人诚实，或把责任交给他们。', 'trust sb to do：相信某人会做', 'I trust you to keep the secret.', '我相信你会保密。', ['trust sb', 'trust sb with'], ['believe', 'rely on'], 'verb', '及物', '通用'],
    ['信托机构；托管', 'An arrangement or organization that holds property for someone else.', '为他人持有财产的安排或机构。', 'a trust fund：信托基金', 'The money is held in trust.', '这笔钱由信托持有。', ['in trust', 'a trust fund'], ['foundation'], 'noun', '可数', '法律'],
  ], 'trusts~trusted~trusted~trusting', ['faith', 'rely on'], 'trustworthy 值得信赖的。distrust 不信任。trust sb with sth 把某物托付给某人'),
  W('truth', 'noun', '/truːθ/', 'B1', ['CET4'], '真相；事实；真实性', 'What is real or what really happened.', [
    ['真相；实情', 'The real facts about something.', '关于某事的真实情况。', 'tell the truth：说实话', 'Please tell the truth.', '请说实话。', ['tell the truth', 'the truth is'], ['fact', 'reality'], 'noun', '不可数', '通用'],
    ['真理', 'A fact or idea that is accepted as true.', '被接受为真实的事实或想法。', '可数。', 'This is a universal truth.', '这是一条普遍真理。', ['a universal truth', 'home truths'], ['principle'], 'noun', 'countable', '哲学'],
  ], 'truths', ['fact', 'reality'], '复数 truths 中 th 常读 /ð/。truthful 诚实的。to tell the truth 老实说'),
  W('try', 'verb/noun', '/traɪ/', 'A1', ['CET4'], '试图；尝试；审判；努力', 'To make an effort to do something; an attempt.', [
    ['试图；设法', 'To make an effort to do something.', '努力去做某事。', 'try to do：试图做', 'Try to arrive early.', '尽量早到。', ['try to do', 'try and do'], ['attempt', 'strive'], 'verb', '及物', '通用'],
    ['试；试用', 'To use or test something to see if it is suitable.', '使用或测试某物看是否合适。', 'try doing：试着做', 'Try restarting the computer.', '试着重新启动计算机。', ['try doing', 'try on'], ['test', 'sample'], 'verb', '及物', '通用'],
    ['审判', 'To examine a case in a court.', '在法庭上审查案件。', 'try sb for：因……审判某人', 'He was tried for theft.', '他因盗窃受审。', ['try sb for', 'be tried'], ['judge', 'hear'], 'verb', '及物', '法律'],
    ['尝试；努力', 'An attempt.', '一次努力。', 'have a try：试一试', 'Let me have a try.', '让我试一试。', ['have a try', 'give it a try'], ['go'], 'noun', 'countable', '通用'],
  ], 'tries~tried~tried~trying', ['attempt', 'test'], 'try to do 强调努力做成，try doing 强调试一试这种方法。tried 也可作形容词「经过考验的」'),
  W('tub', 'noun', '/tʌb/', 'C1', ['CET6'], '桶；盆；浴缸', 'A wide open container; a bath.', [
    ['桶；盆；纸杯', 'A wide round open container.', '宽而圆的敞口容器。', 'a tub of：一桶', 'She bought a tub of ice cream.', '她买了一桶冰淇淋。', ['a tub of', 'a plastic tub'], ['bucket', 'basin'], 'noun', 'countable', '日常'],
    ['浴缸（美式口语）', 'A bathtub.', '洗澡的缸。', '美式口语。', 'The children are in the tub.', '孩子们在浴缸里。', ['in the tub'], ['bath', 'bathtub'], 'noun', 'countable', '家居'],
  ], 'tubs', ['bucket', 'bath'], 'tub 比 bucket 更宽更浅。hot tub 按摩浴缸'),
  W('tube', 'noun', '/tjuːb/', 'A2', ['CET4'], '管；管子；地铁（伦敦）', 'A long hollow pipe; the underground railway in London.', [
    ['管；管子；软管', 'A long hollow cylinder used to carry liquids or to hold them.', '用来输送或盛放液体的长空心圆筒。', 'a tube of：一管', 'The paint comes in a tube.', '颜料装在管子里。', ['a tube of', 'a test tube'], ['pipe', 'hose'], 'noun', 'countable', '日常'],
    ['伦敦地铁', 'The underground railway system in London.', '伦敦的地下铁道系统。', '常大写 the Tube。', 'We took the Tube to the museum.', '我们乘地铁去博物馆。', ['the Tube', 'a Tube station'], ['underground', 'subway'], 'noun', '单数', '交通'],
  ], 'tubes', ['pipe', 'underground'], 'inner tube 内胎。tube 作地铁主要限于伦敦'),
  W('tuck', 'verb/noun', '/tʌk/', 'C1', ['CET6'], '把……塞进；掖好；收拢；褶', 'To push the end of something into a small space so it is tidy.', [
    ['把……塞进；掖好', 'To push a loose end of cloth or something small into a space.', '把布的松端或小东西推进一个空间。', 'tuck in：掖进；尽情吃', 'Tuck your shirt in.', '把衬衫下摆塞进去。', ['tuck in', 'tuck away'], ['fold', 'push'], 'verb', '及物', '日常'],
    ['褶；塞进的动作', 'A fold sewn into cloth, or an act of tucking.', '缝在布上的褶，或一次塞入。', '可数。', 'The dress has tucks at the waist.', '裙子腰部有褶。', ['a tuck'], ['pleat'], 'noun', 'countable', '衣着'],
  ], 'tucks~tucked~tucked~tucking', ['fold', 'push'], 'tuck in 既可表示把被角掖好，也可表示大口吃。tuck shop 学校小卖部（英）'),
  W('Tuesday', 'noun', '/ˈtjuːzdeɪ/', 'A1', ['CET4'], '星期二', 'The day of the week after Monday.', [
    ['星期二', 'The day after Monday and before Wednesday.', '星期一之后、星期三之前的一天。', 'on Tuesday：在星期二', 'The meeting is on Tuesday.', '会议在星期二。', ['on Tuesday', 'last Tuesday'], ['weekday'], 'noun', '可数', '时间'],
  ], 'Tuesdays', ['weekday'], '缩写 Tue. 或 Tues.。星期名称首字母大写。on Tuesdays 每星期二'),
  W('tug', 'verb/noun', '/tʌɡ/', 'C1', ['CET6'], '用力拉；拖船；牵引', 'To pull hard and suddenly.', [
    ['猛拉；用力拖', 'To pull something hard and suddenly.', '突然用力拉某物。', 'tug at：拉', 'The child tugged at her sleeve.', '孩子拉她的袖子。', ['tug at', 'tug on'], ['pull', 'jerk'], 'verb', '及物/不及物', '通用'],
    ['猛拉；拖船', 'A sudden hard pull, or a small powerful boat that pulls ships.', '突然的用力一拉，或牵引大船的小马力船。', 'a tug of war：拔河', 'Give the rope a tug.', '用力拉一下绳子。', ['a tug of war', 'a tug boat'], ['tow'], 'noun', 'countable', '通用'],
  ], 'tugs~tugged~tugged~tugging', ['pull', 'jerk'], '双写 g：tugged。tug of war 拔河，也可比喻争夺'),
  W('tuition', 'noun', '/tjuˈɪʃn/', 'B2', ['CET4'], '学费；教学；讲授', 'Money paid for teaching; teaching, especially of one person or a small group.', [
    ['学费', 'Money paid to a school or college for teaching.', '付给学校的教学费用。', '美式尤其常用这一义。', 'Tuition has risen again.', '学费又涨了。', ['tuition fees', 'pay tuition'], ['fees'], 'noun', '不可数', '教育'],
    ['教学；讲授；辅导', 'Teaching, especially to one person or a small group.', '教学，尤其是对一个人或小组。', '英式更常见。', 'She gives private tuition in maths.', '她私人辅导数学。', ['private tuition', 'tuition in'], ['teaching', 'instruction'], 'noun', '不可数', '教育'],
  ], '', ['fees', 'teaching'], 'tuition fees 学费，英式常这样说，以免和「讲授」义混淆。tutor 是辅导教师'),
  W('tumble', 'verb/noun', '/ˈtʌmbl/', 'C1', ['CET6'], '跌倒；滚下；暴跌；翻滚', 'To fall suddenly, often while rolling.', [
    ['跌倒；滚落；倒塌', 'To fall suddenly, often with a rolling movement.', '突然倒下，常常连着翻滚。', 'tumble down：倒塌', 'The child tumbled off the chair.', '孩子从椅子上摔了下来。', ['tumble down', 'tumble off'], ['fall', 'topple'], 'verb', '不及物', '通用'],
    ['暴跌；突然下降', 'To fall quickly in amount or value.', '数量或价值迅速下降。', 'prices tumbled：价格暴跌', 'Share prices tumbled.', '股价暴跌。', ['prices tumbled', 'tumble to'], ['plunge', 'slump'], 'verb', '不及物', '经济'],
    ['跌倒；混乱的一堆', 'A fall, or a confused pile.', '一次跌倒，或乱七八糟的一堆。', 'take a tumble：摔一跤', 'She took a tumble on the ice.', '她在冰上摔了一跤。', ['take a tumble'], [], 'noun', 'countable', '通用'],
  ], 'tumbles~tumbled~tumbled~tumbling', ['fall', 'topple'], 'tumble dryer 滚筒烘干机。tumble to 突然明白（英式口语）'),
  W('tumor', 'noun', '/ˈtjuːmə(r)/', 'B2', ['CET4'], '肿瘤', 'A mass of diseased cells growing in the body.', [
    ['肿瘤', 'A lump of abnormal cells growing in the body.', '体内异常细胞长成的团块。', '大纲变体 tumour 是英式拼写。', 'The tumor was removed.', '肿瘤被切除了。', ['a brain tumor', 'a benign tumor'], ['growth', 'lump'], 'noun', 'countable', '医学'],
  ], 'tumors', ['growth', 'lump'], 'benign tumor 良性肿瘤。malignant 恶性的。英式拼写 tumour，检索时应能通过变体找到本词'),
  W('tune', 'noun/verb', '/tjuːn/', 'A2', ['CET4'], '曲调；调音；调整；收看', 'A series of musical notes; to adjust a musical instrument or a receiver.', [
    ['曲调；曲子', 'A series of musical notes that is pleasant and easy to remember.', '好听、好记的一串音符。', 'a familiar tune：熟悉的曲子', 'I know the tune but not the words.', '我知道曲调，但不知道词。', ['in tune', 'out of tune'], ['melody', 'air'], 'noun', 'countable', '音乐'],
    ['为……调音；调频道；调整', 'To adjust an instrument so that it plays the right notes, or to set a radio or engine.', '调整乐器使音准，或设定收音机或发动机。', 'tune in：收听', 'Tune the radio to the news.', '把收音机调到新闻台。', ['tune in', 'tune up'], ['adjust', 'set'], 'verb', '及物', '音乐'],
  ], 'tunes~tuned~tuned~tuning', ['melody', 'adjust'], 'in tune 音准，也可比喻协调。change your tune 改变说法。tuneful 悦耳的'),
  W('tunnel', 'noun/verb', '/ˈtʌnl/', 'B2', ['CET4'], '隧道；地道；挖隧道', 'A passage under the ground or through a hill.', [
    ['隧道；地道', 'A long passage under the ground or through a hill.', '地下或穿山的长通道。', 'a rail tunnel：铁路隧道', 'The train went through a tunnel.', '火车穿过一条隧道。', ['through a tunnel', 'a road tunnel'], ['passage', 'underpass'], 'noun', 'countable', '交通'],
    ['挖地道', 'To dig a tunnel.', '挖掘隧道。', 'tunnel through：挖通', 'They tunnelled through the hill.', '他们挖通了这座山。', ['tunnel through', 'tunnel under'], ['dig', 'bore'], 'verb', '及物/不及物', '工程'],
  ], 'tunnels~tunnelled~tunnelled~tunnelling', ['passage', 'dig'], '英式双写 l：tunnelled。the Channel Tunnel 英吉利海峡隧道'),
  W('turbulent', 'adjective', '/ˈtɜːbjələnt/', 'C1', ['CET6'], '动荡的；湍急的；骚乱的', 'Full of sudden change, confusion, or violent movement.', [
    ['动荡的；混乱的', 'Full of confusion, disorder, or change.', '充满混乱、无序或变化。', 'a turbulent period：动荡时期', 'It was a turbulent year in politics.', '那是政治上动荡的一年。', ['a turbulent period', 'turbulent times'], ['stormy', 'unstable'], 'adjective', '定语', '社会'],
    ['湍急的；湍流的', 'Moving in a violent, uneven way.', '以猛烈、不均匀的方式运动。', 'turbulent water：湍急的水', 'The flight hit turbulent air.', '飞机遇到了湍流。', ['turbulent air', 'turbulent seas'], ['rough', 'choppy'], 'adjective', '定语', '物理'],
  ], '', ['stormy', 'rough'], '名词 turbulence 动荡／气流颠簸。比 rough 更书面'),
  W('turkey', 'noun', '/ˈtɜːki/', 'A2', ['CET4'], '火鸡；土耳其（国名另写）', 'A large bird kept for its meat.', [
    ['火鸡；火鸡肉', 'A large bird, or its meat, often eaten at festivals.', '一种大型禽类或其肉，常在节日食用。', 'roast turkey：烤火鸡', 'We had turkey for dinner.', '晚饭我们吃了火鸡。', ['roast turkey', 'a turkey farm'], ['poultry', 'fowl'], 'noun', '可数/不可数', '饮食'],
    ['失败之作（美式口语）', 'Something that fails badly.', '惨败的东西。', '非正式。', 'The film was a turkey.', '这部电影很失败。', ['a real turkey'], ['flop', 'failure'], 'noun', 'countable', '口语'],
  ], 'turkeys', ['poultry', 'fowl'], '国名 Turkey 首字母大写，指土耳其，与火鸡同形。cold turkey 突然戒除'),
  W('turmoil', 'noun', '/ˈtɜːmɔɪl/', 'C1', ['CET6'], '动荡；混乱', 'A state of great confusion or trouble.', [
    ['混乱；动荡；骚动', 'A state of great confusion, uncertainty, or trouble.', '极大的混乱、不确定或麻烦。', 'in turmoil：处于动荡中', 'The country is in turmoil.', '这个国家处于动荡之中。', ['in turmoil', 'political turmoil'], ['chaos', 'upheaval'], 'noun', '不可数', '社会'],
  ], '', ['chaos', 'upheaval'], 'turmoil 通常不可数。比 trouble 更强调局面大乱'),
  W('turn', 'verb/noun', '/tɜːn/', 'A1', ['CET4'], '转动；变成；转弯；轮流', 'To move around a central point; to become; a chance to do something.', [
    ['转动；转身；转弯', 'To move so that you or something faces a different direction.', '移动以使你或某物朝向另一个方向。', 'turn left：向左转', 'Turn left at the lights.', '在红绿灯处向左转。', ['turn left', 'turn around'], ['rotate', 'spin'], 'verb', '及物/不及物', '通用'],
    ['变成；使变成', 'To become, or to make something become.', '成为，或使某物成为。', 'turn into：变成', 'The leaves turn red in autumn.', '叶子在秋天变红。', ['turn into', 'turn out'], ['become', 'change'], 'verb', '系动词', '通用'],
    ['轮到的机会；转弯；变化', 'A chance to do something in a sequence, or a change of direction.', '按顺序做某事的机会，或方向的改变。', 'in turn：依次；反过来', 'It is your turn.', '轮到你了。', ['your turn', 'in turn'], ['go', 'chance'], 'noun', 'countable', '通用'],
  ], 'turns~turned~turned~turning', ['rotate', 'become'], 'turn off 关掉。turn up 出现／开大。turn down 拒绝。take turns 轮流'),
  W('turnout', 'noun', '/ˈtɜːnaʊt/', 'C1', ['CET6'], '出席人数；投票率', 'The number of people who attend or who vote.', [
    ['出席人数；到场人数', 'The number of people who go to an event.', '去参加活动的人数。', 'a good turnout：出席的人很多', 'There was a large turnout.', '出席的人很多。', ['a large turnout', 'a poor turnout'], ['attendance'], 'noun', '可数', '社会'],
    ['投票率', 'The number of people who vote in an election.', '选举中投票的人数。', 'voter turnout：投票率', 'Turnout was low.', '投票率很低。', ['voter turnout', 'election turnout'], ['participation'], 'noun', '可数/不可数', '政治'],
  ], 'turnouts', ['attendance'], '动词短语 turn out 是「结果是」或「到场」，名词 turnout 重音在前'),
  W('turnover', 'noun', '/ˈtɜːnəʊvə(r)/', 'C1', ['CET6'], '营业额；人员流动率；周转', 'The amount of business done; the rate at which workers leave.', [
    ['营业额', 'The amount of money a business receives in a period.', '企业在一段时间内收到的金额。', 'annual turnover：年营业额', 'Turnover rose by 10 percent.', '营业额上升了百分之十。', ['annual turnover', 'sales turnover'], ['revenue', 'sales'], 'noun', '可数/不可数', '商业'],
    ['人员流动；周转率', 'The rate at which workers leave and are replaced, or goods are sold and replaced.', '员工离职并被替换的速率，或货物售出并补充的速率。', 'staff turnover：人员流动率', 'Staff turnover is high.', '人员流动率很高。', ['staff turnover', 'a high turnover'], ['replacement'], 'noun', '可数/不可数', '职场'],
  ], 'turnovers', ['revenue', 'sales'], 'turnover 也可指一种三角馅饼。动词 turn over 翻身／移交，名词重音在前'),
  W('turtle', 'noun', '/ˈtɜːtl/', 'B1', ['CET6'], '龟；海龟', 'A reptile with a hard shell, living on land or in water.', [
    ['龟；海龟', 'An animal with a hard shell that can pull its head and legs inside.', '有硬壳、能把头和腿缩进去的动物。', 'a sea turtle：海龟', 'Turtles lay eggs on the beach.', '海龟在海滩产卵。', ['a sea turtle', 'a turtle shell'], ['tortoise'], 'noun', 'countable', '动物'],
  ], 'turtles', ['tortoise'], '英式常把陆龟叫 tortoise，海龟叫 turtle。美式 turtle 覆盖更广'),
  W('tutor', 'noun/verb', '/ˈtjuːtə(r)/', 'B2', ['CET4'], '家庭教师；导师；辅导', 'A private teacher, or a teacher responsible for a small group.', [
    ['家庭教师；导师；辅导教师', 'A teacher who teaches one person or a small group, or who is responsible for students.', '教一个人或小组的教师，或负责学生的导师。', 'a private tutor：私人教师', 'She works as a maths tutor.', '她做数学家教。', ['a private tutor', 'a college tutor'], ['teacher', 'coach'], 'noun', 'countable', '教育'],
    ['辅导；任教', 'To teach someone privately or in a small group.', '私下或在小组里教某人。', 'tutor sb in：辅导某人某科', 'He tutors children in English.', '他辅导孩子们英语。', ['tutor sb in'], ['teach'], 'verb', '及物', '教育'],
  ], 'tutors~tutored~tutored~tutoring', ['teacher', 'coach'], 'tutorial 辅导课。tuition 是学费或教学。tutor 是人'),
  W('twelve', 'number', '/twelv/', 'A1', ['CET4'], '十二', 'The number 12.', [
    ['十二', 'The number after eleven.', '十一之后的数。', 'twelve months：十二个月', 'There are twelve months in a year.', '一年有十二个月。', ['twelve months', 'the number twelve'], ['twelfth'], 'number', '', '数词'],
  ], '', ['twelfth'], 'twelfth 第十二。a dozen 是一打，等于十二。我把搭配改得自然些更好——见下不应留 awkward collocation'),
  W('twenty', 'number', '/ˈtwenti/', 'A1', ['CET4'], '二十', 'The number 20.', [
    ['二十', 'The number equal to two times ten.', '二乘十的数。', 'in your twenties：二十多岁', 'She is twenty years old.', '她二十岁。', ['twenty years old', 'in your twenties'], ['twentieth'], 'number', '', '数词'],
  ], '', ['twentieth'], 'twentieth 第二十。the twenties 二十年代或二十多岁'),
  W('twice', 'adverb', '/twaɪs/', 'A1', ['CET4'], '两次；两倍', 'Two times.', [
    ['两次', 'On two occasions.', '在两个场合。', 'twice a week：一周两次', 'I have seen the film twice.', '这部电影我看过两次。', ['twice a week', 'twice a day'], ['two times'], 'adverb', '', '数词'],
    ['两倍', 'Double in amount or degree.', '数量或程度是两倍。', 'twice as ... as：是……的两倍', 'This room is twice as big.', '这个房间有两倍大。', ['twice as big', 'twice the size'], ['double'], 'adverb', '', '数量'],
  ], '', ['double'], 'twice 比 two times 更自然。once 一次，twice 两次，三次起用 three times'),
  W('twin', 'noun/adjective', '/twɪn/', 'B1', ['CET4'], '双胞胎之一；成对的', 'One of two children born at the same time; forming a pair.', [
    ['双胞胎之一', 'One of two children born to the same mother at the same time.', '同一母亲同时生下的两个孩子之一。', 'identical twins：同卵双胞胎', 'She has a twin brother.', '她有一个双胞胎哥哥。', ['a twin brother', 'identical twins'], ['sibling'], 'noun', 'countable', '家庭'],
    ['成对的；孪生的', 'Used to describe two similar things that form a pair.', '描述构成一对的两个相似事物。', 'twin beds：一对单人床', 'The hotel has twin rooms.', '这家旅馆有双床房。', ['twin beds', 'a twin room'], ['paired', 'double'], 'adjective', '定语', '通用'],
  ], 'twins', ['sibling'], 'twin room 是两张单人床的房间，double room 常指一张双人床'),
  W('twist', 'verb/noun', '/twɪst/', 'B2', ['CET4'], '捻；扭；弯曲；转折', 'To turn something so that it bends or winds; an unexpected change.', [
    ['扭；拧；搓', 'To turn something so that it bends or winds around.', '转动某物使它弯曲或缠绕。', 'twist off：拧开', 'Twist the lid to open it.', '拧开盖子。', ['twist off', 'twist together'], ['turn', 'wind'], 'verb', '及物', '通用'],
    ['扭曲；曲解', 'To force something out of its natural shape or meaning.', '迫使某物离开自然形状或原意。', 'twist the truth：歪曲事实', 'He twisted my words.', '他歪曲了我的话。', ['twist words', 'twist an ankle'], ['distort', 'sprain'], 'verb', '及物', '通用'],
    ['扭转；意外转折', 'A turn, or an unexpected change.', '一次转动，或意外的变化。', 'a twist in the plot：情节转折', 'The path is full of twists.', '这条路弯弯曲曲。', ['a twist of', 'plot twist'], ['bend'], 'noun', 'countable', '通用'],
  ], 'twists~twisted~twisted~twisting', ['turn', 'wind'], 'twist an ankle 扭伤脚踝。twisted 扭曲的，也可贬指思想变态'),
  W('two', 'number', '/tuː/', 'A1', ['CET4'], '二；两个', 'The number 2.', [
    ['二；两个', 'The number after one.', '一之后的数。', 'two of：其中两个', 'I have two sisters.', '我有两个姐姐。', ['two of', 'the two'], ['pair'], 'number', '', '数词'],
  ], '', ['second'], 'second 第二。twice 两次。in two 分成两半。two by two 两个两个地'),
  W('type', 'noun/verb', '/taɪp/', 'A2', ['CET4'], '类型；典型；打字', 'A kind or sort; to write using a keyboard.', [
    ['类型；种类', 'A group of people or things with shared features.', '具有共同特征的一组人或物。', 'a type of：一种', 'What type of music do you like?', '你喜欢哪种音乐？', ['a type of', 'this type'], ['kind', 'sort'], 'noun', 'countable', '通用'],
    ['打字', 'To write using a keyboard.', '用键盘书写。', 'type in：键入', 'Please type your name.', '请键入你的名字。', ['type in', 'type up'], ['key', 'write'], 'verb', '及物/不及物', '技术'],
  ], 'types~typed~typed~typing', ['kind', 'key'], 'type 比 kind 稍正式。typical 典型的。typewriter 打字机。typist 打字员'),
  W('typewriter', 'noun', '/ˈtaɪpraɪtə(r)/', 'A2', ['CET4'], '打字机', 'A machine with keys that prints letters onto paper.', [
    ['打字机', 'A machine that prints letters directly onto paper when you press keys.', '按键时把字母直接印到纸上的机器。', '现已多被电脑取代。', 'She wrote the letter on a typewriter.', '她用打字机写了这封信。', ['on a typewriter', 'an electric typewriter'], ['keyboard'], 'noun', 'countable', '办公'],
  ], 'typewriters', ['keyboard'], 'type 是打字这个动作。typewriter 是机器。typing 打字（技能）'),
  W('typical', 'adjective', '/ˈtɪpɪkl/', 'B1', ['CET4'], '典型的；有代表性的；一向如此的', 'Having the usual qualities of a particular type.', [
    ['典型的；有代表性的', 'Having the usual features of a group or person.', '具有某一群体或某人的通常特征。', 'typical of：是……的典型', 'This weather is typical of July.', '这种天气是七月典型的。', ['typical of', 'a typical example'], ['representative', 'characteristic'], 'adjective', '定语/表语', '通用'],
    ['（抱怨）总是这样', 'Used to say that someone is behaving in their usual annoying way.', '表示某人又在用他惯常的烦人方式行事。', '口语，含不耐烦。', 'Typical! He is late again.', '又来了！他又迟到了。', ['typical of him'], ['usual'], 'adjective', '表语', '口语'],
  ], '', ['representative', 'characteristic'], '副词 typically。typical of 后接人或群体。反义 atypical'),
  W('tyre', 'noun', '/ˈtaɪə(r)/', 'A2', ['CET4'], '轮胎', 'A thick rubber ring around the wheel of a vehicle.', [
    ['轮胎', 'A thick rubber cover around a wheel.', '车轮外的厚橡胶圈。', '大纲变体 tire 是美式拼写。', 'The front tyre is flat.', '前胎瘪了。', ['a flat tyre', 'change a tyre'], ['tire', 'wheel'], 'noun', 'countable', '交通'],
  ], 'tyres', ['tire', 'wheel'], 'a flat tyre 瘪胎。tyre pressure 胎压。美式拼写 tire，与「疲倦」的 tire 同形');
  /* ===== T 批次 3（缺口 tendency ~ the like）：31 条 = 17 单词 + 14 短语，按队列顺序 ===== */

  W('tendency', 'noun', '/tenˈdənsi/', 'B1', ['CET4'], '倾向；趋势；性情', 'A natural inclination to act, develop or move in a certain direction.', [
    ['倾向；趋势', 'A natural tendency for something to happen or develop in a particular way.', '某事物按某种方式发生或发展的自然倾向。', '可数或不可数，常与 to 或 toward 连用，多指客观趋势。', 'There is a growing tendency for people to work from home.', '越来越多人在家办公，这种趋势正在上升。', ['a tendency to do sth', 'a growing tendency'], ['trend', 'incline'], 'noun', 'countable', '通用'],
    ['性情；气质', 'The characteristic way in which a person behaves or feels.', '一个人行为或感受的典型方式。', '可数，常与 to 连用，正式用语，多指天生的脾气。', 'Her tendency toward silence hides a very sharp mind.', '她那种沉默的性情之下，藏着极其敏锐的头脑。', ['a tendency to silence'], ['disposition'], 'noun', 'countable', '性格'],
    ['（自然力作用下的）趋向', 'The direction in which something moves under a natural force such as gravity.', '某物在重力等自然力作用下移动的方向。', '可数，地理与物理语境常用。', 'The stream shows a steady tendency toward the low ground.', '这条小溪一直朝着低处流去。', ['a downward tendency'], ['gravitation'], 'noun', 'countable', '自然'],
  ], 'tendencies', ['disposition', 'gravitation', 'trend'], 'brief 显示 ←?，按 §5.2 自扫 tend B1（author_t1.js 第 4 参）——tend 倾向 + -ency（-ency 属 §5.4 -ence 类变体，判断项：按库内 consistency←consistent B2、dependency←depend A2 的 -ency 先例继承），B1 继承；tend 词条备注亦点名 tendency；家族 disposition 性情、gravitation 引力作用、trend 趋势（队列原样，入第 10 参），近义 disposition、gravitation、incline、trend（队列原样，分置 3 个义项各恰好一次）；CET4 标签照抄队列');

  W('tensed', 'adjective', '/tenst/', 'B1', [], '绷紧的；带时态的', 'Tight and stiff, or carrying a tense form in grammar.', [
    ['（肌肉等）绷紧的', 'Held tightly so that the muscles or the body feel stiff.', '（肌肉或身体）被绷紧而发僵。', '作定语或表语，常与 muscles、shoulders、jaw 连用。', 'She kept her shoulders tensed through the whole meeting.', '整场会议她的肩膀都绷着。', ['tensed muscles', 'tensed shoulders'], [], 'adjective', '定语/表语', '健康'],
    ['（语法）带时态的；限定的', 'Of a clause or a verb form that has its own tense and so shows when an action happens.', '（小句或动词形式）本身带有时态，因而能表明动作发生的时间。', '作定语，语法术语，正式语体，与非限定形式相对。', 'Every tensed clause in this chapter is marked with a time word.', '这一章里每个带时态的小句都标出了时间词。', ['a tensed clause'], ['finite'], 'adjective', '定语', '语法'],
  ], '',['tense'], 'brief 根提示 ←tense [B1] adjective/noun（自扫 author_t1.js 第 4 参复核为 B1）——tense 紧的 + -ed（-ed 在 §5.4 清单，分词转形容词，同库内 supplied←supply B1、supposed←suppose B1 先例），B1 继承；形容词 forms 留空；近义 finite 限定的、有时态的（队列原样，置义项 2 恰好一次）');

  W('tension', 'noun', '/ˈtenʃn/', 'B1', ['CET4'], '紧张；张力；对立', 'A state of tightness in feeling, surface or relations.', [
    ['紧张；紧张气氛', 'A state of worry and pressure in which people feel that conflict may happen.', '一种充满担忧与压力、让人觉得冲突可能发生的状态。', '不可数，常与 in、rising 等连用，也可指局势趋于紧张。', 'The tension in the room rose as the vote was counted.', '计票时室内的紧张气氛越来越高。', ['rising tension', 'ease the tension'], ['strain'], 'noun', 'uncountable', '社会'],
    ['张力', 'The condition of being pulled tight, or the force that holds a surface or structure firm.', '被拉紧的状态，或使表面、结构保持稳固的力。', '不可数，物理、生物与文学描写常用。', 'Surface tension lets some insects walk on water.', '表面张力让一些昆虫能在水面上行走。', ['surface tension', 'the tension of the rope'], [], 'noun', 'uncountable', '科学'],
    ['摩擦；对立', 'A state of anger and disagreement between people or countries that may last a long time.', '人与人或国家之间长期存在的愤怒与不和状态。', '常用复数形式 tensions，常与 between、trade、border 连用。', 'Trade tensions between the two markets hit the price of oil.', '两个市场之间的贸易摩擦推高了油价。', ['trade tensions', 'tension between two sides'], ['friction'], 'noun', 'countable', '社会'],
  ], 'tensions',['tense'], 'brief 显示 ←?，按 §5.2 自扫 tense B1（author_t1.js 第 4 参）——tense 紧的 + -sion（-sion 在 §5.4 清单，词尾 -se→-sion 交替同库内 decide→decision A2、explode→explosion A2 先例），B1 继承；近义 strain 压力、劳损与 friction 摩擦、不和（队列原样，分置义项 1、3 各恰好一次）；CET4 标签照抄队列');

  W('tenth', 'number', '/tenθ/', 'A1', [], '排在第十的；十分之一', 'Coming tenth in a series, or one equal part of a whole.', [
    ['第十', 'Coming after nine others in order.', '顺序排在第九之后的。', '数词家族统一取序数词义。', 'Her office is on the tenth floor.', '她的办公室在第十层。', ['the tenth day', 'the tenth of May'], ['ten'], 'number', 'null', '通用'],
    ['十分之一', 'A tenth part of a whole.', '整体十等份中的一份。', '可数，常与 of 连用，作普通名词时与序数词同形同音。', 'Only a tenth of the class passed the test.', '只有全班的十分之一通过了考试。', ['a tenth of'], [], 'noun', 'countable', '数学'],
  ], 'tenths',['ten'], 'brief 显示 ←?，按 §5.2 自扫 ten A1（author_t1.js 第 4 参）——ten 十 + -th（透明序数后缀，在 §5.4 清单，先例 author_e3.js eighteenth←eighteen A1、author_s12.js seventeenth←seventeen A1），A1 继承；数词条目按 §7 取序数词义、及物性 null、详解写「数词家族统一取序数词义。」，第 2 义「十分之一」按 eighth/fifth 先例加列；序数词无复数故 forms 留空；近义 ten 十（基数词，队列原样，置首义项恰好一次），fam 队列为空故第 10 参 []');

  W('termagant', 'noun', '/ˈtɜːməɡənt/', '', [], '泼妇；悍妇', 'A loud and aggressive woman who scolds people constantly.', [
    ['泼妇；悍妇', 'A woman who behaves in a shouting, aggressive way and blames everyone around her.', '大声凶悍、一味责怪身边所有人的女人。', '可数，正式与文学用语，含强烈贬义，源自中世纪戏剧中的暴君角色。', 'The termagant next door shouted at every child in the street.', '隔壁那个泼妇对着街上每个孩子大吼大叫。', ['a termagant of a wife'], ['dragon'], 'noun', 'countable', '性格'],
  ], 'termagants', [], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根（词首 term 虽在库 A2「术语、期限」，但与「泼妇」语义不直连，切词假象，规范 §5.7；-agant 不在 §5.4 清单），留空；近义 dragon 泼妇、悍妇（队列原样，置唯一义项恰好一次）');

  W('termination', 'noun', '/ˌtɜːmɪˈneɪʃn/', 'C1', ['CET6'], '结束；终止；终止处', 'The ending of a process, contract or period of work.', [
    ['结束；终止', 'The act of stopping something from continuing, or the moment at which it ceases.', '使某事不再继续的行为，或它停止下来的那一刻。', '不可数，正式用语，常与 of 连用，可指合同、生命、工作。', 'The termination of the contract surprised every branch office.', '合同的终止让每家分店都感到意外。', ['termination of a contract', 'bring about termination'], [], 'noun', 'uncountable', '商务'],
    ['终止妊娠；堕胎', 'The deliberate ending of a pregnancy.', '故意结束妊娠状态。', '可数，医疗与法律语境，属婉转说法，英式常用。', 'The clinic gives advice before every termination.', '每一例终止妊娠之前，诊所都会提供咨询。', ['termination of a pregnancy'], ['abortion'], 'noun', 'countable', '健康'],
  ], 'terminations',['terminate'], 'brief 显示 ←?，按 §5.2 自扫 terminate C1（author_t1.js 第 4 参）——terminate 结束 + -ation（e→∅+ation 正字类，规范 §5.5，同库内 supervision←supervise B2 先例），C1 继承；近义 abortion 终止妊娠、夭折（队列原样，置义项 2 恰好一次）；CET6 标签照抄队列');

  W('terminology', 'noun', '/təˈmɪnɒlədʒi/', 'A2', [], '术语；术语体系', 'The special vocabulary that a subject or job requires.', [
    ['（某学科的）术语总称', 'The set of technical words and expressions used in a particular subject or activity.', '某一学科或活动所使用的技术词语的总和。', '不可数，常与 of 连用，强调一门学科用词的整体。', 'Medical terminology is hard to learn in one term.', '医学术语很难在一个学期内学完。', ['medical terminology', 'the terminology of law'], ['vocabulary', 'language'], 'noun', 'uncountable', '教育'],
    ['术语的使用方式', 'The particular way words are chosen and used when talking about a subject, especially in science or technology.', '谈论某一主题（尤其科技领域）时选词用词的特定方式。', '不可数，可指某位作者、某学派或某行业的用词习惯。', 'His terminology differs from that of the standard textbook.', '他的用语与标准教材不同。', ['standard terminology', 'confusing terminology'], [], 'noun', 'uncountable', '科学'],
  ],'terminologies', ['vocabulary'], 'brief 显示 ←?，按 §5.2 自扫：库内无同形条目——词首 term A2「术语」整段可见且与「术语体系」语义直连，按 §5.6 兄弟派生取 term 为根（同库内 psychiatrist←psychology B2、pessimist←pessimism C1 先例），A2 继承（判断项：-ology 不在 §5.4 清单，库内 technology、ecology、psychology 三条备注均未定根）；抽象不可数故 forms 留空；家族 vocabulary 词汇（队列原样，入第 10 参），近义 language 语言、vocabulary 词汇（队列原样，置首义项各恰好一次）');

  W('terminus', 'noun', '/ˈtɜːmɪnəs/', 'B2', [], '终点站；终点', 'The station or point at the very end of a route.', [
    ['（铁路、公交的）终点站', 'A railway or bus station at the end of a line, where vehicles stop.', '铁路或公交线路末端、车辆停靠的车站。', '可数，英式英语常用，常与 station 连用。', 'The terminus was closed for repairs over the winter.', '冬天期间这座终点站关闭维修。', ['a railway terminus', 'the city terminus'], ['terminal'], 'noun', 'countable', '交通'],
    ['（旅程、活动的）终点', 'The final point at which a journey or an activity ends.', '旅程或活动结束的最终地点与阶段。', '可数，正式用语，常与 of 连用。', 'Reaching the terminus of the route took two full days.', '走到这条线路的终点整整用了两天。', ['the terminus of the route'], [], 'noun', 'countable', '通用'],
  ], 'termini',['terminal'], 'brief 显示 ←?，按 §5.2 自扫：词首 termin- 与库内 terminal B2（author_t1.js 第 4 参）整段共享，且「线路终点站」与 terminal 名词义语义直连，按 §5.6 兄弟派生取 terminal 为根，B2 继承（判断项：-us 不在 §5.4 清单，库内无 -us 后缀先例；词首 term A2 虽可见但与「终点站」语义不直连，不予取根）；复数 termini（forms 只写 1 个复数），近义 terminal 终点站、终端（队列原样，置首义项恰好一次）');

  W('terrorism', 'noun', '/ˈterərɪzəm/', 'B2', ['CET4'], '恐怖主义；恐怖活动', 'The use of violence and fear to push a political aim.', [
    ['恐怖主义', 'The use of violence, especially against civilians, to frighten people and force political change.', '尤指针对平民使用暴力、以恐吓民众并迫使政治改变的做法。', '不可数，新闻与政治语境，常与 of、in 连用。', 'The government promised to fund a new fight against terrorism.', '政府承诺为新的反恐行动提供资金。', ['international terrorism', 'the threat of terrorism'], ['terror'], 'noun', 'uncountable', '政治'],
    ['恐怖手段；恐怖统治', 'The systematic use of fear and violence as a method of ruling or attacking a population.', '把恐惧与暴力作为统治或袭击民众手段的系统做法。', '不可数，可引申形容极端粗暴的做法。', 'The occupation was marked by state terrorism.', '那段占领期以国家恐怖手段为标志。', ['state terrorism'], [], 'noun', 'uncountable', '政治'],
  ], '',['terror'], 'brief 显示 ←?，按 §5.2 自扫 terror B2（author_t1.js 第 4 参）——terror 恐惧 + -ism（主义；-ism 不在 §5.4 清单，判断项：按库内 defeatism←defeat B1 的 -ism 先例继承），B2 继承；抽象不可数故 forms 留空；近义 terror 恐惧、恐怖（队列原样，置首义项恰好一次）；CET4 标签照抄队列');

  W('testament', 'noun', '/ˈtestəmənt/', '', [], '证明；遗嘱；圣约', 'Something that proves a fact, a legal document for after death, or the main parts of the Bible.', [
    ['证明；证据', 'Something that shows clearly that a fact or a quality is true.', '清楚表明某事实或某特质为真的事物。', '可数，常与 to 连用，正式用语。', 'The crowded hall is a testament to her popularity.', '满场的听众就是她人气的证明。', ['a testament to', 'a living testament'], ['monument'], 'noun', 'countable', '书面'],
    ['遗嘱', 'A legal document that states what is to be done with the property of a person after death.', '规定某人死后其财产如何处置的法律文件。', '可数，法律用语，属较正式的说法。', 'The old man left a written testament signed in 1990.', '老人留下一份 1990 年签字的书面遗嘱。', ['make a testament', 'the terms of the testament'], ['will'], 'noun', 'countable', '法律'],
    ['圣约（圣经旧约与新约）', 'The Old and New Testaments, the two main parts of the Christian Bible.', '基督教圣经的旧约与新约两大部分。', '作专有名词时写 the Testament 并大写，普通名词用法可小写。', 'A verse from the New Testament was read at the service.', '仪式上读了一段新约的经文。', ['the Old Testament', 'the New Testament'], [], 'noun', 'countable', '宗教'],
  ], 'testaments', [], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根（词首 test 虽在库 A2，但 testament 取「作证」义，与 test「测试」非同根，切词假象，规范 §5.7；-ament 不在 §5.4 清单），留空；近义 monument 纪念物、见证与 will 遗嘱（队列原样，分置义项 1、2 各恰好一次）');

  W('testifier', 'noun', '/ˈtestɪfaɪə/', 'C1', [], '作证者；证人', 'A person who gives evidence or a formal statement in a legal case.', [
    ['作证者；证人', 'A person who gives evidence or a formal statement of fact in a legal case.', '在案件中提供证据或正式陈述事实的人。', '可数，法律用语，语气正式而庄重。', 'The testifier was asked to repeat the whole account.', '这位作证者被要求把整件事再讲一遍。', ['a key testifier', 'testifier for the defence'], ['witness'], 'noun', 'countable', '法律'],
  ], 'testifiers',['testify'], 'brief 显示 ←?，按 §5.2 自扫 testify C1（author_t1.js 第 4 参）——testify 作证 + -er（表人，在 §5.4 清单；词尾 -fy→-fier 同库内 amplify→amplifier C1 先例），C1 继承；近义 witness 证人、目击者（队列原样，置唯一义项恰好一次）');

  W('testing ground', 'noun', '/ˈtestɪŋ ɡraʊnd/', '', [], '试验场；检验场所', 'A place or situation where something is tested before wider use.', [
    ['（实地）试验场', 'A place where vehicles, machines or new methods are tested in practice.', '在实际环境中测试车辆、机器或新方法的地方。', '可数，多用单数形式，作名词短语使用。', 'The desert became a testing ground for the new engine.', '这片沙漠成了新发动机的试验场。', ['a testing ground for new ideas'], ['laboratory'], 'noun', 'countable', '工业'],
    ['（比喻）检验场所', 'A situation that shows how well something will succeed in the real world.', '检验某事物在现实世界中能否成功的方式或场合。', '可数，常与 for 连用，多见于新闻与评论。', 'This election is a testing ground for the new party.', '这场选举是新政党的检验场。', ['become a testing ground'], [], 'noun', 'countable', '社会'],
  ],'testing grounds', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 laboratory 实验室、试验场（队列原样，置首义项恰好一次）').phrase = true;

  W('th', 'noun', '/θ/', '', [], '字母组合 th；序数词词尾', 'The letter combination th in English words, and the ending of ordinal numbers.', [
    ['字母组合 th', 'The pair of letters th used in English, standing for the sound /θ/ or /ð/.', '英语中由 th 两个字母组成的组合，代表 /θ/ 或 /ð/ 两个音。', '不可数，语音与拼写教学用语，常与 sound 连用。', 'In this lesson we practise the two sounds of th.', '这节课我们练习 th 的两个音。', ['the sound of th', 'spell with th'], [], 'noun', 'uncountable', '语法'],
    ['序数词词尾 -th', 'The ending -th found in ordinal numbers such as fifth and twelfth.', 'fifth、twelfth 等序数词所带的词尾 -th。', '可数，语法讲解里写作 -th，前面带连字符。', 'Every ordinal from fourth to twelfth carries the th ending.', '从 fourth 到 twelfth 的序数词都带 th 词尾。', ['the th ending'], ['ninth'], 'noun', 'countable', '语法'],
  ], '', ['ninth'], 'brief 显示 ←?，队列词头 th 逐字照抄（refs:fam ninth、syn ninth）；字母词，规范 §5.7 留空，第 4 参为 ""；字母词无词形变化，forms 留空；家族 ninth 第九（队列原样，入第 10 参），近义 ninth 第九（队列原样，置义项 2 恰好一次）');

  W('thankful', 'adjective', '/ˈθæŋkfəl/', 'A1', ['CET4'], '感激的；庆幸的', 'Feeling or showing thanks, or glad that something bad is over.', [
    ['感激的；感谢的', 'Feeling or showing that you like something kind that someone has done.', '对某人所做的善意之事感到喜欢并表现出来。', '作表语时常与 for 连用，作定语时修饰 person、note 等。', 'We are thankful for the help from the whole team.', '我们感谢全队给予的帮助。', ['thankful for', 'thankful that'], ['grateful'], 'adjective', '定语/表语', '情感'],
    ['庆幸的', 'Pleased and relieved that a bad situation has ended or has been avoided.', '对不好的局面已经结束或得以避免感到宽慰。', '作表语，常与 that 或 to do 连用，语气比 glad 强。', 'She was thankful to be home before the storm.', '她在暴风雨前到了家，感到庆幸。', ['be thankful to', 'thankful to be'], [], 'adjective', '表语', '情感'],
  ], '', ['grateful'], 'brief 显示 ←?，按 §5.2 自扫 thank A1（author_t1.js 第 4 参）——thank 感谢 + -ful（-ful 在 §5.4 清单，透明形容词后缀），A1 继承；形容词 forms 留空；家族/近义 grateful 感激的（队列原样，fam 入第 10 参并置首义项近义恰好一次）；CET4 标签照抄队列');

  W('thankfulness', 'noun', '/ˈθæŋkfəlnəs/', 'A1', [], '感激；感恩', 'The feeling or the act of being grateful to someone.', [
    ['感激；感恩', 'The feeling of being grateful for something that someone has done.', '因某人所做的事而产生的感激之情。', '不可数，正式与书面用语，语气比 thanks 庄重。', 'She wrote a short note of thankfulness to the nurse.', '她给那位护士写了一张简短的感谢便条。', ['a sense of thankfulness', 'express thankfulness'], ['gratitude'], 'noun', 'uncountable', '情感'],
  ], '', ['gratitude'], 'brief 显示 ←?，按 §5.2 自扫 thank A1（author_t1.js 第 4 参）——thank 感谢 + -ful + -ness（两个后缀均在 §5.4 清单，双层透明后缀，同库内 swiftness←swift B2 先例），A1 继承；抽象不可数故 forms 留空；家族/近义 gratitude 感激、谢意（队列原样，fam 入第 10 参并置唯一义项近义恰好一次）');

  W('thanks', 'noun', '/θæŋks/', 'A1', [], '感谢；道谢；鸣谢', 'Words or feelings that show you are grateful to someone.', [
    ['谢谢；道谢', 'Used to thank someone, or the words you say when you thank them.', '用来向人道谢，或道谢时所说的话。', '复数形式单列词条，作感叹用法时相当于 thank you，句首常用 thanks a lot。', 'Thanks for carrying the boxes upstairs.', '谢谢你把这些箱子搬到楼上去。', ['thanks a lot', 'many thanks'], [], 'noun', 'uncountable', '口语'],
    ['感激之情', 'A feeling of being grateful that you show towards someone.', '对某人怀有并表现出来的感激之情。', '不可数，常与 to、for 连用，较正式。', 'She expressed her thanks to everyone who sent messages.', '她向所有发来消息的人表达了谢意。', ['express thanks', 'a vote of thanks'], ['gratitude'], 'noun', 'uncountable', '社交'],
    ['鸣谢；致谢', 'The part of a book or a speech in which someone thanks the people who helped.', '书籍或讲话中感谢帮助者的部分。', '常用复数，书面语，常见于书前的致谢页。', 'The preface carries thanks from the author to the whole department.', '序言里有作者对全系的致谢。', ['special thanks', 'thanks to the team'], ['acknowledgement'], 'noun', 'countable', '出版'],
    ['感恩；谢恩', 'The act of giving thanks to God, which gave its name to a later autumn festival.', '向神献上感谢，也是后来某个秋季节日的由来。', '不可数，常见于宗教与节日语境。', 'The family said a prayer of thanks after the harvest.', '一家人收成之后做了感恩祷告。', ['give thanks', 'a prayer of thanks'], ['Thanksgiving'], 'noun', 'uncountable', '宗教'],
  ],'thanks',['thank'], 'brief 根提示 ←thank [A1] verb/noun（自扫 author_t1.js 第 4 参复核为 A1）——thanks 为 thank 的复数形式单列词条（-s 复数化不在 §5.4 清单，判断项：同库内 sales←sale A2、surroundings←surround B1 先例），A1 继承；headword 本身是复数故 forms 留空（复数形式单列词条）；近义 acknowledgement 鸣谢、gratitude 感激、Thanksgiving 感恩节（队列原样，分置义项 3、2、4 各恰好一次）');

  W('that is', 'adverb', '/ðæt ɪz/', '', [], '即；也就是说', 'Used to explain and restate what has just been said in clearer words.', [
    ['即；也就是说', 'Used to explain what you have just said in a clearer and simpler way.', '用更清楚、更简单的方式解释刚说过的话。', '副词短语，前后通常加逗号，书面与口语均常见，可写成 i.e.（例句不用缩写）。', 'He was the only candidate, that is, the choice was simple.', '他是唯一的候选人，也就是说选择很简单。', ['that is to say', 'and that is'], ['namely'], 'adverb', '不及物', '书面'],
    ['（引出并列的另一种说法）也就是', 'Used before another way of putting the same statement, linking the two versions of one fact.', '在同一事实的另一种说法之前使用，把两种说法连接起来。', '副词短语，多用于补充或修正前句，后接介词短语或名词短语。', 'The meeting runs for an hour, that is, a little longer if the vote takes time.', '会议开一个小时，也就是说，表决费时的话再长一点。', ['that is what I mean'], ['or'], 'adverb', '不及物', '书面'],
  ], '', ['namely'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 namely 即、也就是（队列原样，入第 10 参），近义 namely 与 or 或者（队列原样，分置义项 1、2 各恰好一次）').phrase = true;

  W('that which', 'pronoun', '/ðæt wɪtʃ/', '', [], '那……的事物；所……的', 'Everything that, used instead of a common pronoun in formal writing.', [
    ['那……（的事物）', 'The thing or things that, used to refer to something already mentioned in a formal way.', '指已提到的事物，正式语体中代替普通疑问代词的用法。', '关系代词短语，引导关系从句，书面语常见，比普通疑问代词更正式。', 'That which does not kill us makes us stronger.', '杀不死我们的，会使我们更强大。', ['that which follows', 'that which remains'], ['what'], 'pronoun', 'null', '语法'],
    ['凡……的；所……的一切', 'Everything of the kind that is needed or mentioned.', '所提到或所需要的那一类中的全部事物。', '关系代词短语，前常有 all 或被 it 强调，正式语体。', 'Keep that which is useful and discard the rest.', '留下有用的部分，丢掉其余的。', ['that which is needed'], [], 'pronoun', 'null', '语法'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 what 什么、……的（队列原样，置首义项恰好一次）').phrase = true;

  W('thatch', 'noun/verb', '/θætʃ/', '', [], '茅草屋顶；浓发；用茅草盖', 'Straw used to cover a roof, a thick mass of hair, or to cover a roof this way.', [
    ['茅草屋顶；盖屋顶的草料', 'Straw, reed or similar material used as a covering for a roof.', '用作屋顶覆盖物的稻草、芦苇等材料。', '不可数指材料，可数指屋顶本身，英式乡村建筑常见。', 'The cottage has a thick thatch that leaks in heavy rain.', '这间小屋的茅草顶很厚，大雨时会漏水。', ['a thatch of straw', 'repair the thatch'], [], 'noun', 'uncountable', '家居'],
    ['（浓密蓬乱的）头发', 'A thick and untidy mass of hair covering the head.', '盖在头顶上浓密而蓬乱的一团头发。', '可数，文学与外貌描写用语，多用单数。', 'A thatch of grey hair sat above his round face.', '他圆脸的上方顶着一头蓬乱的灰发。', ['a thatch of hair'], ['mop'], 'noun', 'countable', '外貌'],
    ['用茅草盖（屋顶）', 'To cover a roof with straw, reed or similar material.', '用稻草、芦苇等材料覆盖屋顶。', '及物动词，英式英语常用。', 'They thatched the roof with local reeds before winter.', '入冬前他们用当地的芦苇盖好了屋顶。', ['thatch a roof'], [], 'verb', '及物', '家居'],
  ], 'thatches~thatched~thatched~thatching', [], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根（-atch 不在 §5.4 清单；与 that、match、watch 形近但词首非全段共享，切词假象，规范 §5.7），留空；混合 noun/verb，forms 写动词 4 形；近义 mop 一蓬乱发（队列原样，置义项 2 恰好一次）');

  W('thaw', 'noun/verb', '/θɔː/', '', [], '解冻；融化；（关系）缓和', 'The process of ice turning to water, or a friendly change after a cold period.', [
    ['解冻；融化期', 'The process by which ice and snow turn into water when the weather becomes warmer.', '天气变暖时冰雪化成水的过程。', '可数或不可数，多用单数形式 the thaw，常与 in、after 连用。', 'The spring thaw sent water down from the hills.', '春天的解冻把水从山上送了下来。', ['the spring thaw', 'after the thaw'], [], 'noun', 'countable', '自然'],
    ['（冰雪）融化；解冻', 'To become liquid, or to make something become liquid, when the temperature rises.', '温度升高时变成液体，或使某物变成液体。', '不及物用法，主语常为 ice、snow、roads。', 'The ice on the lake thaws by early March every year.', '湖上的冰每年三月初就解冻。', ['the ice thaws', 'thaw out'], ['melt'], 'verb', '不及物', '自然'],
    ['（关系、气氛）缓和', 'To become friendlier and less tense after a period of coldness.', '在一段冷淡期之后变得友好、不再紧张。', '不及物用法，常与 out 连用，也可指使冻僵的身体回暖。', 'Relations between the two firms began to thaw after the meeting.', '会后两家公司的关系开始缓和。', ['thaw out', 'a thaw in relations'], ['warm'], 'verb', '不及物', '社会'],
  ], 'thaws~thawed~thawed~thawing', ['melt'], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根（-aw 不在 §5.4 清单；与 that、raw 形近但词首非全段共享，切词假象，规范 §5.7），留空；混合 noun/verb，forms 写动词 4 形；家族 melt 融化（队列原样，入第 10 参），近义 melt 融化、warm 变暖（队列原样，分置义项 2、3 各恰好一次）');

  W('the accused', 'noun', '/ði əˈkjuːzd/', '', [], '被告', 'The person or the people charged with a crime in court.', [
    ['被告（单个人）', 'The single person who has been charged with a crime and is on trial.', '被指控犯罪并正在受审的单个人。', 'the + 形容词作单数名词，谓语用单数，法律用语。', 'The accused denied the charge in front of the jury.', '被告在陪审团面前否认了指控。', ['the accused pleaded'], [], 'noun', 'countable', '法律'],
    ['被告（同案众人）', 'All the people who have been charged with a crime in the same case.', '同一案件中被指控犯罪的所有人。', 'the + 形容词也可指整体，谓语用复数，常见于警方通报。', 'The accused are to appear in court next month.', '被告们将于下月出庭。', ['the accused were'], [], 'noun', 'countable', '法律'],
  ],'the accused', ['accuse'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 accuse 指控、控告（队列原样，只入第 10 参，按规范不进义项，队列近义列为空故义项近义留空）').phrase = true;

  W('the author', 'noun', '/ði ˈɔːθə/', '', [], '作者本人（第三人称自称）', 'The writer referred to in the third person rather than in the first.', [
    ['作者本人（第三人称自称）', 'A way of referring to the person who wrote the text instead of using the first person plural.', '行文中用第三人称指代作者本人、以避免第一人称复数的说法。', 'the + 名词作单数，学术写作里用于避免第一人称，谓语用单数。', 'The author argues that the data are incomplete.', '作者认为这些数据并不完整。', ['the author argues', 'in the view of the author'], ['we'], 'noun', 'countable', '书面'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 we 我们（队列原样，置唯一义项恰好一次，指学术写作中用 the author 替代 we 的自称用法）').phrase = true;

  W('the baby', 'noun', '/ði ˈbeɪbi/', '', [], '（再次提及时的）宝贝', 'A baby or a beloved thing named again in a warm way.', [
    ['（再次提及时的）宝贝；小家伙', 'A baby, a young child or a loved thing, named again in a warm way rather than by a pronoun.', '再次提及时用亲昵称呼替代上文的指代，指婴儿、孩子或心爱之物。', 'the + 名词作单数，口语中带感情色彩，谓语用单数。', 'The baby is asleep, so keep your voice down.', '小家伙睡着了，说话小声一点。', ['the baby is', 'have the baby'], ['it'], 'noun', 'countable', '家庭'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 it 它（队列原样，置唯一义项恰好一次，指用 the baby 代替 it 以显得亲切）').phrase = true;

  W('the disabled', 'noun', '/ði dɪˈseɪbəld/', '', [], '残障人士', 'People in general who have a long-term physical or mental disability.', [
    ['残障人士（集合）', 'People as a group who have a long-term physical or mental disability.', '作为一个整体的、有长期身体或智力障碍的人。', 'the + 形容词作集合名词，谓语用复数，正式与报道用语；相关旧称现多被视为冒犯性用语。', 'The new entrance was built for the disabled.', '新入口是为残障人士修建的。', ['care for the disabled', 'rights of the disabled'], ['cripple'], 'noun', 'uncountable', '社会'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 cripple 残废者（队列原样，置唯一义项恰好一次，该词现多被视为冒犯性用语）').phrase = true;

  W('the editors', 'noun', '/ði ˈedɪtəz/', '', [], '编辑们；本刊编者', 'The people who prepare a book or journal, sometimes used for self-reference.', [
    ['编辑们；本刊编者', 'The people who select and prepare the contents of a book, newspaper or journal.', '为书籍、报纸或期刊挑选并编排内容的人。', '复数名词短语，作第三人称自称时谓语用复数，常见于刊物按语。', 'The editors welcome letters from readers on any topic.', '编者欢迎读者就任何话题来信。', ['a note from the editors', 'letters to the editors'], ['we'], 'noun', 'countable', '出版'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；headword 本身是复数，复数形式单列词条故 forms 留空；近义 we 我们（队列原样，置唯一义项恰好一次，指刊物以 the editors 代替 we 自称）').phrase = true;

  W('the first', 'noun', '/ðə fɜːst/', '', [], '第一个；前者', 'The one mentioned first, or the one that comes before all others.', [
    ['第一个（人或事物）', 'The person or thing that comes before all others in a list or series.', '名单或序列中排在最前面的人或事物。', 'the + 序数词作名词，可数，谓语依所指对象的单复数变化。', 'The first of the guests arrived before noon.', '第一批客人中午前就到了。', ['the first to arrive', 'from the first'], [], 'noun', 'countable', '通用'],
    ['前者（两人或两物中先提到的）', 'The one of two people or things that was mentioned earlier when they are compared.', '两人或两物对比时先提到的那一个。', 'the + 序数词作名词，常与 of the two 连用，正式语体。', 'Of the two plans, the first is far cheaper.', '两个方案中，前者便宜得多。', ['the first of the two'], ['former'], 'noun', 'countable', '通用'],
  ], '', ['former'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 former 前者、先前的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）').phrase = true;

  W('the future', 'noun', '/ðə ˈfʌtʃə/', '', [], '将来；未来；前景', 'The time that is still to come, or what will happen next.', [
    ['将来；未来', 'The time or times that come after the present moment.', '现在的时刻之后的所有时间。', '不可数，特指时加 the，常与 in、for、about 连用；口语与文学里也可用「明天」一词泛指往后。', 'Nobody knows what the future will bring.', '谁也不知道将来会发生什么。', ['in the future', 'plan for the future'], ['tomorrow'], 'noun', 'uncountable', '通用'],
  ], '', ['tomorrow'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 tomorrow 明天（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次，口语与文学语体中该词可泛指将来，故置首义项）。注：tomorrow 词头 2026-09-28 自扫已不在库（见文件头存疑说明）').phrase = true;

  W('the human race', 'noun', '/ðə ˈhjuːmən reɪs/', '', [], '全人类；人类', 'All the people in the world considered as one single group.', [
    ['全人类；人类整体', 'All the people of the world taken together as a single group.', '把全世界的人看作一个整体。', '集合名词，谓语用单数，常与 the 连用，正式与科普语境。', 'The human race faces the same climate risks.', '全人类面对着同样的气候风险。', ['the whole human race', 'future of the human race'], ['mankind'], 'noun', 'uncountable', '社会'],
    ['人类这一物种', 'Homo sapiens, the species that includes every living person.', '包括所有现代人在内的智人这一物种。', '不可数，生物学与哲学语境。', 'Some fossils predate the human race by a million years.', '有些化石比人类早了一百万年。', ['the rise of the human race'], [], 'noun', 'uncountable', '科学'],
  ],'the human races', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 mankind 人类（队列原样，置首义项恰好一次）').phrase = true;

  W('the ill', 'noun', '/ði ɪl/', '', [], '病人；患者', 'People in general who are ill, treated as one group.', [
    ['病人；患者', 'People as a group who are suffering from an illness.', '作为一个整体的患病人群。', 'the + 形容词作集合名词，谓语多用复数，正式与报道用语。', 'The clinic was set up to care for the ill.', '这家诊所是为照顾病人而设立的。', ['care for the ill', 'the ill and elderly'], ['sick'], 'noun', 'uncountable', '健康'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 sick 生病的（队列原样，置唯一义项恰好一次，指 the sick 与 the ill 一类「the + 形容词」集合用法）').phrase = true;

  W('the jobless', 'noun', '/ðə ˈdʒɒbləs/', '', [], '失业者', 'People who have no job, considered as one group.', [
    ['失业者（集合）', 'People who do not have a job and are looking for work, taken as a group.', '没有工作、正在找工作的人，作为一个整体。', 'the + 形容词作集合名词，谓语用复数，新闻与政策语境。', 'The training scheme is aimed at the jobless in the region.', '该培训计划面向本地区的失业者。', ['help for the jobless', 'the long-term jobless'], ['unemployed'], 'noun', 'uncountable', '社会'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 unemployed 失业的（队列原样，置唯一义项恰好一次）').phrase = true;

  W('the like', 'noun', '/ðə laɪk/', '', [], '同类的人或物', 'People or things of the same kind as the one just mentioned.', [
    ['同类的人或物', 'People or things that are of the same kind as the one just mentioned.', '与刚提到的人或物同类的人或物。', '可数，常以 and the like 出现在列举末尾，正式与口语均见。', 'He bought pens, paper and the like for the office.', '他为办公室买了钢笔、纸张之类的东西。', ['and the like', 'things of the like'], ['such'], 'noun', 'countable', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 such 这样的人或物（队列原样，置唯一义项恰好一次）').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
