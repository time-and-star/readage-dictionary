/* data/words/cet/author_s18.js — 常用词 S 批次 18，缺口 somewhere else ~ specified，共 31 条
 * （27 单词 + 4 短语：somewhere else、sooner than、space out、spare time；首项即短语 somewhere else）。
 * 来源：family + 义项近反义缺口，refs/fam/syn 逐字照抄队列（本批词头与 refs 均完整，无残缺或粘连词头）；
 * 考级标签照抄队列（CET4 × 9：sorrowful、southeastern、southern、southwestern、spacious、speaker、
 *   specialist、specifically、specification；CET6 × 1：sovereignty；本批其余 21 条无标签）。
 * brief 说明：%TEMP%\opencode\_s18_brief.txt 共 27 行，与本批 27 个单词逐行对应（首行 sooner 属正常，
 *   短语不入 brief）；10 行给出根提示，17 行显示 ←?（sorceress、sorcery、sorrowful、southeastern、
 *   southern、southward、southwestern、sovereignty、spa、spacious、sparse、spate、spatter、specialist、
 *   specialize、specialized、specifically），按规范 §5.2 用纯文本 fs.readFileSync + indexOf 扫
 *   assets/js/data/words/cet/author_*.js 取第 4 参 CEFR（未 require 全库），并纯文本查 curated.js 的
 *   level 字段（上述词与其根均不在其中）。
 * 扫根结论（自扫，均 author_s3.js 第 4 参）：sorrow B2、southeast A2、south A1、southwest A2、
 *   sovereign C1、space A2、special A2、specific B1；
 *   brief 根提示复核通过（自扫同级）：soon A1、sore B1、sour B1、span B2、spark B2、speak A1、
 *   specific B1、specify B2。
 * · 透明后缀继承（后缀在 §5.4 清单内，共 9）：soreness←sore B1 + -ness、sourness←sour B1 + -ness、
 *   sorrowful←sorrow B2 + -ful、sooner←soon A1 + -er（比较级）、speaker←speak A1 + -er、
 *   speaking←speak A1 + -ing、specifically←specific B1 + -ly、specification←specific B1 + -ation、
 *   specified←specify B2 + -ed；
 * · 判断项继承（备注逐条披露「判断项」，共 8）：sovereignty←sovereign C1 + -ty（按库内 loyalty←loyal B2、
 *   entirety←entire A2、certainty←certain A2 先例）、spacious←space A2 + -ous（词尾 e 脱落，按库内
 *   malicious←malice C1 先例）、spanner←span B2 + -er（工具名词语义引申）、
 *   sparks←spark B2 + -s（复数化，按库内 slacks←slack C1、sales←sale A2 先例）、
 *   specialist←special A2 + -ist、specialize←special A2 + -ize、
 *   specialized←special A2 + -ized（词根整段可见，按库内 industrializes←industrial A2 先例）、
 *   specifics←specific B1 + -s（复数化，同上先例）；
 * · 后缀不在清单、留空（4 单词，词根在库）：southeastern←southeast A2 + -ern、
 *   southwestern←southwest A2 + -ern、southern←south A1 + -ern（同 author_n4.js northeastern、
 *   northern、northwestern 留空先例）、southward←south A1 + -ward（同 author_n4.js northward、
 *   author_e3.js eastward 留空先例）；
 * · 库内无可见词根、留空（6 单词）：sorceress、sorcery（sorcer 不在库，-ess、名词 -y 不在清单）、
 *   spa（比利时地名借词）、sparse、spate、spatter；
 * · 短语 4 条一律留空（规范 §6，整体不取成分作根）。
 * 共 17 条继承、10 条留空（单词），另 4 短语留空。
 * CEFR 分布（27 单词）：A1 × 3（sooner、speaker、speaking），A2 × 4（spacious、specialist、specialize、
 *   specialized），B1 × 5（soreness、sourness、specifically、specification、specifics），
 *   B2 × 4（sorrowful、spanner、sparks、specified），C1 × 1（sovereignty），留空 × 10；4 短语一律 ''。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s18.js 必须在 _cet_helper.js 之后加载');

  W('somewhere else', 'adverb', '/ˈsʌmweər ˌels/', '', [], '在其他地方；不在这里', 'In or to another place.', [
    ['在别处；到别处', 'In, at or to a place that is not the one you are in, working in or talking about.', '不在当前所在、所工作或所谈论之处的另一个地方。', '副词短语，修饰动词，常与 go、move、live、look 等连用。', 'We could not find the keys, so we looked somewhere else.', '我们找不到钥匙，于是到别处去找。', ['go somewhere else', 'live somewhere else'], ['elsewhere'], 'adverb', '不及物', '通用'],
  ], '', ['elsewhere'], '短语整体不取成分作根，分级留空（规范 §6）；fam/syn elsewhere 在别处、别的地方（队列原样，置唯一义项，短语条目）').phrase = true;

  W('sooner', 'adverb', '/ˈsuːnə/', 'A1', [], '更早；更快；宁可', 'At an earlier time, or in place of something else.', [
    ['更早；更快', 'At an earlier time or after a shorter wait than you expected.', '比预期更早，或等待的时间更短。', '副词 early 的比较级，修饰动词，也用于 than 前表示比较。', 'Please come sooner next time.', '下次请早些来。', ['sooner than expected'], [], 'adverb', '不及物', '通用'],
    ['宁愿；宁可', 'Used after would to say that you prefer to do one thing rather than another.', '用在 would 后，表示宁愿做一件事而不愿做另一件事。', '副词，常见于 would sooner ... than 结构，与 would rather 用法相同。', 'I would sooner walk than take the bus.', '我宁愿走路也不愿坐公交车。', ['would sooner than'], ['rather'], 'adverb', '不及物', '口语'],
  ], '',['soon'], 'brief 根提示 ←soon A1 早（自扫 author_s3.js 第 4 参复核为 A1），soon + -er（比较级透明后缀，同 author_s16.js smaller←small A1 先例），A1 继承；近义 rather 宁愿（队列原样，置义项2）');

  W('sooner than', 'adverb', '/ˈsuːnə ðæn/', '', [], '与其…不如；比…更早', 'Rather than something else, or earlier than expected.', [
    ['宁愿…也不', 'Used after would to show that you prefer one action to another.', '用在 would 后，表示做前一个动作而不做后一个动作。', '短语，属 would sooner than 结构，与 would rather than 含义相同。', 'I would sooner stay home than go out tonight.', '我今晚宁可待在家里也不愿出去。', ['would sooner than'], ['rather'], 'adverb', '不及物', '口语'],
    ['比…更早；先于', 'Earlier than a time or an event that you mention.', '早于你所提到的某个时间或事件。', '副词短语，修饰动词，than 后接比较对象。', 'The train left sooner than we expected.', '火车比我们预期的更早开走了。', ['sooner than expected'], [], 'adverb', '不及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 rather 宁愿（队列原样，置首义项，短语条目）').phrase = true;

  W('sorceress', 'noun', '/ˈsɔːsərəs/', '', [], '使用魔法的女人', 'A woman who practises magic.', [
    ['女巫；女术士', 'A woman who is believed to have magic powers, especially ones used to harm people.', '被认为拥有魔法、尤指会用来伤害别人的女性。', '可数，与 sorcerer（男巫）相对，多见于故事、传说与游戏。', 'The sorceress turned the prince into a bird.', '女巫把王子变成了一只鸟。', ['a wicked sorceress'], ['witch'], 'noun', 'countable', '文学'],
  ], 'sorceresses', ['witch'], 'brief 显示 ←?，按 §5.2 自扫：库内无 sorcer/sorcery 可见词根，-ess（表女性的后缀）不在 §5.4 可继清单，留空；fam/syn witch 女巫（队列原样，置唯一义项）');

  W('sorcery', 'noun', '/ˈsɔːsəri/', '', [], '巫术；魔法', 'The use of magic powers, often to harm people.', [
    ['巫术；邪术', 'The practice of using magic powers to control events or to harm people.', '施展魔法以左右事情或伤害他人的行为。', '不可数，多见于文学、宗教与游戏语境。', 'The villagers accused the woman of sorcery.', '村民们指控那个女人施行巫术。', ['black sorcery', 'practise sorcery'], ['magic'], 'noun', 'uncountable', '文学'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 sorcer/sorcery 可见词根，-y 名词后缀不在 §5.4 可继清单（条 4b 仅就 -y 形容词而言），留空；抽象不可数故 forms 留空；近义 magic 魔法（队列原样，置唯一义项）');

  W('soreness', 'noun', '/ˈsɔːnəs/', 'B1', [], '疼痛；酸痛', 'The state of being sore in part of the body.', [
    ['（身体的）疼痛；酸痛', 'Pain or discomfort felt in a part of the body, or the state of being sore.', '身体某一部位感到的疼痛或不适，即 sore 的状态。', '不可数，常与 in、after 等连用，常见于健康与运动语境。', 'The soreness in her shoulder returned after the long walk.', '长途步行之后她肩膀的酸痛又回来了。', ['muscle soreness', 'soreness in the back'], ['aching', 'pain'], 'noun', 'uncountable', '健康'],
  ], '',['sore'], 'brief 根提示 ←sore B1 疼痛的（自扫 author_s3.js 第 4 参复核为 B1），sore + -ness（-ness 在 §5.4 清单，透明名词后缀），B1 继承；抽象不可数故 forms 留空；近义 aching 酸痛、pain 疼痛（队列原样，置唯一义项）');

  W('sorrowful', 'adjective', '/ˈsɒrəfl/', 'B2', ['CET4'], '悲伤的；伤心的', 'Feeling or showing deep sadness.', [
    ['悲伤的；悲痛的', 'Feeling or showing deep sadness about something that has happened.', '因发生的事而感到或表现出深深的悲伤。', '可作定语或表语，语气较正式，多见于文学与新闻。', 'She gave him a sorrowful look and said nothing.', '她悲伤地看了他一眼，什么也没说。', ['a sorrowful face', 'sorrowful eyes'], ['sad'], 'adjective', '定语/表语', '情感'],
  ], '', ['sad'], 'brief 显示 ←?，按 §5.2 自扫 sorrow B2（author_s3.js 第 4 参）——sorrow 悲伤 + -ful（-ful 在 §5.4 清单，透明形容词后缀），语义直连，B2 继承；fam/sad 悲伤的入第 10 参，近义 sad 悲伤的（队列原样，置唯一义项）');

  W('sourness', 'noun', '/ˈsaʊənəs/', 'B1', [], '酸味；酸馊', 'A sharp acid taste, or the state of being sour.', [
    ['酸味；酸度', 'A sharp taste in food or drink, like the taste of lemon or vinegar.', '食物或饮料中柠檬、醋一类的尖锐味道。', '不可数，常见于饮食与品酒语境。', 'The sourness of the lemon made us pull a face.', '柠檬的酸味让我们皱起了眉头。', ['a pleasant sourness', 'the sourness of the juice'], ['acidity'], 'noun', 'uncountable', '饮食'],
    ['酸馊；变质发酸', 'The state of food or drink that has gone bad and started to smell or taste sharp.', '食物或饮料变坏后开始发出尖锐气味或味道的状态。', '不可数，常形容牛奶、酱汁等放久了变质。', 'You can smell the sourness of the old milk.', '你能闻到陈奶的酸馊味。', ['the sourness of milk'], ['vinegar'], 'noun', 'uncountable', '饮食'],
  ], '', ['vinegar'], 'brief 根提示 ←sour B1 酸的（自扫 author_s3.js 第 4 参复核为 B1），sour + -ness（-ness 在 §5.4 清单，透明名词后缀），B1 继承；fam vinegar 醋（队列原样，置家族组），近义 acidity 酸度（置义项1）、vinegar 酸馊味（置义项2）均队列原样；抽象不可数故 forms 留空');

  W('southeastern', 'adjective', '/ˌsaʊθiːˈstiːn/', '', ['CET4'], '位于东南方向的；来自东南部的', 'In or from the southeast part of a place.', [
    ['东南的；东南部的', 'Belonging to or coming from the southeast part of a country or an area.', '属于或来自某个国家、地区东南部的。', '多作定语，常修饰地区、风向与口音。', 'The southeastern coast stays warm all year.', '东南海岸全年温暖。', ['the southeastern region', 'southeastern wind'], ['southeast'], 'adjective', '定语', '地理'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫 southeast A2（author_s3.js 第 4 参）——southeast + -ern，-ern 不在 §5.4 可继清单，同 author_n4.js northeastern 留空先例，留空（判断项：词根在库但后缀不可继）；近义 southeast 东南（队列原样，置唯一义项）');

  W('southern', 'adjective', '/ˈsʌðən/', '', ['CET4'], '处于南方的；来自南部的', 'In or from the south part of a place.', [
    ['南方的；南部的', 'Belonging to or coming from the south part of a country, region or area.', '属于或来自某个国家、地区南部的。', '多作定语；首字母大写时可专指特定区域。', 'They moved to a southern town by the sea.', '他们搬到了南方一座海滨小镇。', ['southern coast', 'southern hemisphere'], ['south'], 'adjective', '定语', '地理'],
  ], '', ['south'], 'brief 显示 ←?，按 §5.2 自扫 south A1（author_s3.js 第 4 参）——south + -ern，-ern 不在 §5.4 可继清单，同 author_n4.js northern 留空先例，留空（判断项：词根在库但后缀不可继）；fam/syn south 南方（队列原样，置唯一义项）');

  W('southward', 'adverb', '/ˈsaʊθwəd/', '', [], '朝着南方的方向', 'Towards the south.', [
    ['向南；朝南', 'In the direction of the south.', '朝着南方的方向。', '修饰动词。也可作形容词放在名词前，如 a southward journey。', 'The birds fly southward each spring.', '鸟群每年春天向南飞。', ['travel southward', 'a southward route'], ['south'], 'adverb', '不及物', '地理'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫 south A1（author_s3.js 第 4 参）——south + -ward，-ward 不在 §5.4 可继清单，同 author_n4.js northward、author_e3.js eastward 留空先例，留空；家族组队列未列，近义 south 南方（队列原样，置唯一义项）');

  W('southwestern', 'adjective', '/ˌsaʊθˈwestən/', '', ['CET4'], '位于西南方向的；来自西南部的', 'In or from the southwest part of a place.', [
    ['西南的；西南部的', 'Belonging to or coming from the southwest part of a country or an area.', '属于或来自某个国家、地区西南部的。', '多作定语，常修饰地区、方向与气候。', 'They live in a southwestern village.', '他们住在一个西南部的村庄里。', ['the southwestern province', 'southwestern wind'], ['southwest'], 'adjective', '定语', '地理'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫 southwest A2（author_s3.js 第 4 参）——southwest + -ern，-ern 不在 §5.4 可继清单，同 author_n4.js northwestern 留空先例，留空（判断项：词根在库但后缀不可继）；近义 southwest 西南（队列原样，置唯一义项）');

  W('sovereignty', 'noun', '/ˈsɒvrənti/', 'C1', ['CET6'], '主权；统治权', 'The power of a state to govern itself or others.', [
    ['主权；主权地位', 'The power of a country to control its own government and its own affairs.', '一个国家控制本国政府与事务的权力。', '不可数，复数 sovereignties 指各个国家的主权；常见搭配 national sovereignty。', 'The treaty respects the sovereignty of each nation.', '这项条约尊重每个国家的主权。', ['national sovereignty', 'sovereignty over'], [], 'noun', 'uncountable', '政治'],
    ['最高统治权；至高地位', 'Supreme and complete power over something.', '对某事物至高无上、完全的支配权力。', '不可数，用法较正式，多见于政治与哲学论述。', 'The writers argue that sovereignty rests with the people.', '这些作者主张最高权力属于人民。', ['sovereignty of the people'], [], 'noun', 'uncountable', '政治'],
  ], 'sovereignties', ['sovereign'], 'brief 显示 ←?，按 §5.2 自扫 sovereign C1（author_s3.js 第 4 参）——sovereign 主权的 + -ty（抽象名词后缀，按库内 author_l8.js loyalty←loyal B2、author_e4.js entirety←entire A2、author_c8.js certainty←certain A2 先例作透明后缀），C1 继承（判断项：-ty 不在 §5.4 明列清单）；fam sovereign 君主、主权的（队列原样，置家族组），近义组队列未列');

  W('spa', 'noun', '/spɑː/', '', [], '温泉疗养地；水疗中心', 'A place with mineral springs, or a centre for rest and beauty treatment.', [
    ['温泉疗养地；矿泉浴场', 'A place with hot mineral water where people go to rest and get well.', '有天然矿泉水、供人休养康复的地方。', '可数，地名源自比利时小镇 Spa。', 'They spent the weekend at a country spa.', '他们在乡间的温泉疗养地度过了周末。', ['a health spa', 'a spa hotel'], ['resort'], 'noun', 'countable', '健康'],
    ['水疗中心；美容护理中心', 'A place where you can have beauty treatments such as massages and facials.', '可以做按摩、面部护理等美容项目的场所。', '可数，常见于酒店与购物中心。', 'The hotel has a spa and a large pool.', '这家酒店设有水疗中心和一个大泳池。', ['a day spa'], [], 'noun', 'countable', '外貌'],
  ], 'spas', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 spa 可见词根（比利时地名 Spa 借词，非库内派生），留空；近义 resort 度假地（队列原样，置首义项）');

  W('space out', 'verb', '/ˈspeɪs ˈaʊt/', '', [], '分散；间隔开', 'To arrange things with a space or a period of time between them.', [
    ['分散；使间隔开', 'To arrange people, things or events with a space or a period of time between them.', '把人、事物或活动安排得彼此留出空间或时间间隔。', '可及物短语，宾语可置于 space 与 out 中间。', 'She spaced out the meetings over three days.', '她把会议分散安排在三天里。', ['space them out', 'space out the work'], ['stagger'], 'verb', '及物', '商务'],
    ['（分布）拉开距离', 'To spread out over an area or a period of time rather than being close together.', '在空间或时间上散开，而不是挤在一起。', '不及物用法，主语是被分布的事物。', 'The villages are spaced out along the valley.', '村庄沿山谷分散分布。', ['space out along the road'], [], 'verb', '不及物', '地理'],
  ],'spaces out~spaced out~spacing out', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 stagger 错开、交错安排（队列原样，置首义项，短语条目）').phrase = true;

  W('spacious', 'adjective', '/ˈspeɪʃəs/', 'A2', ['CET4'], '面积很大、有充足空间的', 'Very large in size or amount of space.', [
    ['宽敞的；宽大的', 'Very large in area, with plenty of room for people or things.', '面积很大、有充足空间容纳人或物。', '可作定语或表语，常形容房间、建筑与车辆。', 'The new library is bright and spacious.', '新图书馆明亮又宽敞。', ['a spacious room', 'spacious surroundings'], ['ample'], 'adjective', '定语/表语', '家居'],
  ], '',['space'], 'brief 显示 ←?，按 §5.2 自扫 space A2（author_s3.js 第 4 参）——space 空间 + -ous（-ous 在 §5.4 清单，词尾 e 脱落，同 author_m4.js malicious←malice C1 先例），语义直连（宽敞即空间大），A2 继承（判断项：e→∅ 正字变化，§5.5 未列 -ous 类）；近义 ample 充足而宽敞的（队列原样，置唯一义项）');

  W('spanner', 'noun', '/ˈspænə/', 'B2', [], '扳手；螺母扳子', 'A metal tool used for turning nuts and bolts.', [
    ['扳手；扳子', 'A tool with a flat opening that fits over a nut or a bolt and is turned by hand.', '带有扁平开口、套住螺母或螺栓并用手转动的工具。', '可数，英式英语常用，美式常说 wrench；常见搭配 a set of spanners。', 'He tightened the bolt with a spanner.', '他用扳手把螺栓拧紧。', ['a ring spanner', 'a set of spanners'], ['wrench'], 'noun', 'countable', '工具'],
  ], 'spanners', ['wrench'], 'brief 根提示 ←span B2 跨越（自扫 author_s3.js 第 4 参复核为 B2），span + -er（-er 在 §5.4 清单，工具类后缀），扳手即卡住螺母两面跨越施力的工具，B2 继承（判断项：由动词义引申出工具名词语义）；fam/wrench 扳手（队列原样，置唯一义项）');

  W('spare time', 'noun', '/ˈspeə ˌtaɪm/', '', [], '不工作也不学习的那段时间', 'Time when you are not working or studying.', [
    ['空闲时间；业余时间', 'Time when you are not working, studying or doing the things that you must do.', '不工作、不学习、也不做必须之事的那段时间。', '名词短语，不可数，常与 in、use 等搭配。', 'He paints in his spare time.', '他在业余时间画画。', ['in your spare time', 'use your spare time'], ['leisure'], 'noun', 'uncountable', '社交'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 leisure 闲暇（队列原样，置唯一义项，短语条目）').phrase = true;

  W('sparks', 'noun', '/spɑːks/', 'B2', [], '火花；电火花；烟火', 'Small burning pieces thrown off by a fire, or small flashes of light.', [
    ['火花；火星', 'Tiny pieces of burning material that fly off from a fire or from two hard surfaces hitting each other.', '从火焰中飞出、或两硬物相击时产生的微小燃烧颗粒。', '常用复数 sparks，整体作复数概念，常与 fly、burst 连用。', 'Sparks flew when the metal hit the stone.', '金属撞在石头上时迸出了火花。', ['sparks fly', 'a shower of sparks'], [], 'noun', 'countable', '自然'],
    ['电火花；闪光', 'A small, sudden flash of light produced by electricity.', '由电流产生的短促小闪光。', '可数，常与 electrical、blue 等连用。', 'A blue spark jumped across the gap.', '一道蓝色电火花越过了间隙。', ['electrical sparks'], [], 'noun', 'countable', '工业'],
    ['烟火；焰火', 'Fireworks lit for fun that throw out showers of bright light.', '为取乐而燃放、喷出明亮火花的烟火。', '可数，多指手持或小型烟火。', 'The children watched the sparks from the garden.', '孩子们在花园里看烟火。', ['let off sparks'], ['fireworks'], 'noun', 'countable', '娱乐'],
  ],'sparks',['spark'], 'brief 根提示 ←spark B2 火花（自扫 author_s3.js 第 4 参复核为 B2），spark + -s 复数化（-s 不在 §5.4 明示清单，按库内 slacks←slack C1、sales←sale A2 先例），B2 继承（判断项）；复数形式单列词条，forms 留空；近义 fireworks 烟火（队列原样，置义项3）');

  W('sparse', 'adjective', '/spɑːs/', '', [], '数量少而分布散的', 'Existing only in small numbers over a wide area.', [
    ['稀疏的；稀少的', 'Existing only in small numbers or in small amounts over a wide area.', '在大片区域里数量很少、分布不密。', '可作定语或表语，常与 population、vegetation、coverage 连用。', 'The area has a sparse population.', '这一带人口稀少。', ['sparse population', 'sparse vegetation'], ['thin'], 'adjective', '定语/表语', '地理'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 sparse 可见词根（源自拉丁语 sparsus 分散），-arse 不在可继清单，留空；近义 thin 稀疏的（队列原样，置唯一义项）');

  W('spate', 'noun', '/speɪt/', '', [], '一连串；大批；（河水）暴涨', 'A large number of similar things in a short time, or a sudden rise in water.', [
    ['一连串；一大批', 'A large number of similar things or events happening within a short period.', '短时间内集中发生的大量同类事物。', '可数，常与 of 连用，常见于新闻报道。', 'The station dealt with a spate of complaints.', '车站处理了一大批投诉。', ['a spate of', 'a spate of attacks'], ['rash'], 'noun', 'countable', '媒体'],
    ['（河水）暴涨；猛涨', 'A sudden rise in the level of a river, or a sudden large amount of water.', '河水位突然上涨，或突然涌来大量水流。', '可数，主为英式英语，常与 of 连用。', 'The river was in spate after the heavy rain.', '大雨过后河水暴涨。', ['a river in spate'], [], 'noun', 'countable', '自然'],
  ], 'spates', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 spate 可见词根（源自苏格兰语借词），-ate 不在可继清单，留空；近义 rash 一连串（队列原样，置首义项）');

  W('spatter', 'noun/verb', '/ˈspætə/', '', [], '溅洒；溅上的斑点', 'To splash small drops of liquid, or the spots that this leaves.', [
    ['溅洒；泼溅', 'To make liquid fly about in small drops, or to be thrown out in this way.', '使液体成小滴飞溅出去，或液体以这种方式溅出。', '及物动词，常与 on、with 连用，也可作不及物。', 'Mud spattered the clean shirt.', '泥点溅脏了干净的衬衫。', ['spatter with mud', 'spatter on the wall'], ['sprinkle'], 'verb', '及物', '家居'],
    ['溅上的斑点；洒落', 'A number of small drops of liquid left on a surface, or the act of spattering.', '留在物体表面的许多小液滴，或溅洒的动作。', '可数或不可数，常见于油漆与泥点。', 'There were spatters of paint on the floor.', '地板上有几处油漆溅痕。', ['spatters of paint'], [], 'noun', 'countable', '艺术'],
  ], 'spatters~spattered~spattered~spattering', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 spatter 可见词根（拟声来源），-atter 与 -er 均不构成在库词根，留空；近义 sprinkle 洒、溅（队列原样，置首义项）');

  W('speaker', 'noun', '/ˈspiːkə/', 'A1', ['CET4'], '说话者；扬声器', 'A person who is speaking, or a device that produces sound.', [
    ['说话者；发言者', 'A person who is speaking, or a person who gives a speech in public.', '正在讲话的人，或在公开场合发表讲话的人。', '可数，常与 guest、keynote、public 等连用。', 'The next speaker will talk about climate change.', '下一位发言者将谈论气候变化。', ['a guest speaker', 'a public speaker'], [], 'noun', 'countable', '职业'],
    ['扬声器；喇叭', 'A device that changes electrical signals into sound, or one unit of a sound system.', '把电信号转换成声音的装置，或音响系统中的一个单元。', '可数，常见搭配 loudspeaker、left speaker。', 'The speaker on the radio crackled.', '收音机的喇叭噼啪作响。', ['the left speaker', 'a loudspeaker'], [], 'noun', 'countable', '媒体'],
  ], 'speakers', ['microphone'], 'brief 根提示 ←speak A1 说话（自扫 author_s3.js 第 4 参复核为 A1），speak + -er（-er 在 §5.4 清单，施事后缀，兼指发声装置），A1 继承；fam microphone 麦克风（队列原样，置家族组），近义组队列未列');

  W('speaking', 'noun/adjective', '/ˈspiːkɪŋ/', 'A1', [], '说话；讲话的能力或方式', 'The act of talking, or the skill and style of talking.', [
    ['说话；讲话', 'The act of using the voice to talk, or the skill of doing it well.', '用嗓音说话的动作，或把话说好的能力。', '不可数，常见搭配 speaking skills、in speaking。', 'Her speaking is clear and easy to follow.', '她讲话清楚易懂。', ['speaking skills', 'in speaking'], ['speech'], 'noun', 'uncountable', '教育'],
    ['说某种语言的', 'Used to say which spoken language a person or a group uses.', '说明某人或某群体使用哪一种口语。', '只作定语，放在名词前面，动词 -ing 形式转为形容词。', 'This is an English speaking class.', '这是一节英语授课的班级课。', ['an English speaking country', 'English speaking students'], [], 'adjective', '定语', '教育'],
  ], '',['speak'], 'brief 根提示 ←speak A1 说话（自扫 author_s3.js 第 4 参复核为 A1），speak + -ing（-ing 在 §5.4 清单，动名词后缀），A1 继承；抽象不可数且形容词无词形变化，forms 留空；近义 speech 讲话（队列原样，置首义项）');

  W('specialist', 'noun', '/ˈspeʃəlɪst/', 'A2', ['CET4'], '专家；专科医生', 'A person with special knowledge or training in one area.', [
    ['专家；专业人员', 'A person who has special knowledge and training in one particular subject or job.', '在某一学科或工作上有专门知识与训练的人。', '可数，常与 in 连用，也可作定语修饰名词。', 'She is a specialist in soil science.', '她是土壤学方面的专家。', ['a specialist in', 'a leading specialist'], ['expert'], 'noun', 'countable', '职业'],
    ['专科医生', 'A doctor who treats only one part of the body or one kind of illness.', '只治疗身体某一部位或某类疾病的医生。', '可数，常与 in 连用，常见于就医语境。', 'He was sent to a heart specialist.', '他被转给了一位心脏专科医生。', ['see a specialist', 'a skin specialist'], [], 'noun', 'countable', '健康'],
  ], 'specialists', ['expert'], 'brief 显示 ←?，按 §5.2 自扫 special A2（author_s3.js 第 4 参）——special 专门的 + -ist（表从业者，按库内 author_n2.js nationalists←nation B1、author_c8.js chemists←chemistry A2 先例作透明后缀），A2 继承（判断项：-ist 不在 §5.4 明列清单）；fam/syn expert 专家（队列原样，置首义项）');

  W('specialize', 'verb', '/ˈspeʃəlaɪz/', 'A2', [], '集中于某一专门领域', 'To spend most of your time on one particular subject or activity.', [
    ['专门从事；专攻', 'To spend most of your time learning about or working in one particular subject or area.', '把大部分时间用于学习或从事某一专门的学科领域。', '不及物动词，常与 in 连用。', 'The shop specializes in old maps.', '这家店专营旧地图。', ['specialize in', 'specialize in one field'], ['major'], 'verb', '不及物', '职业'],
    ['（生物）特化', 'To develop a particular form or feature that suits a special way of living.', '为适应特殊的生活方式而形成特定的形态或特征。', '不及物动词，科学语境，多见于生物学论述。', 'The insects specialize in living on one kind of tree.', '这些昆虫专以一种树为生。', ['specialize in dry soil'], [], 'verb', '不及物', '科学'],
  ], 'specializes~specialized~specialized~specializing',['special'], 'brief 显示 ←?，按 §5.2 自扫 special A2（author_s3.js 第 4 参）——special + -ize（使……化，按库内 author_l6.js legalizes←legal B1、author_c13.js customizes←custom B1 先例作透明后缀），A2 继承（判断项：-ize 不在 §5.4 明列清单）；近义 major 主修、以……为主（队列原样，置首义项）');

  W('specialized', 'adjective', '/ˈspeʃəlaɪzd/', 'A2', [], '为特定用途开发的', 'Developed or designed for one particular purpose.', [
    ['专门的；专用的', 'Developed or designed for one particular task, group or subject.', '为某一特定任务、人群或学科开发或设计的。', '可作定语或表语，常与 knowledge、skill、equipment 连用。', 'The lab uses specialized equipment.', '这间实验室使用专用设备。', ['specialized knowledge', 'specialized equipment'], ['technical'], 'adjective', '定语/表语', '科学'],
  ], '', ['technical'], 'brief 显示 ←?，按 §5.2 自扫 special A2（author_s3.js 第 4 参）——special + -ized（-ize 与 -ed 均按透明后缀处理，词根整段可见，同库内 author_i7.js industrializes←industrial A2 先例），A2 继承（判断项：-ize 不在 §5.4 明列清单）；fam/近义 technical 技术性的（队列原样，置唯一义项）');

  W('specifically', 'adverb', '/spəˈsɪfɪkli/', 'B1', ['CET4'], '具体地；明确地；尤其', 'In a clear exact way, or in particular.', [
    ['具体地；明确地', 'In a way that is clear and exact about what is being said.', '把所说的事清楚而准确地表达出来。', '修饰动词或整个句子，常与 mention、refer、state 连用。', 'The report specifically mentions the cost.', '报告明确提到了费用。', ['specifically mention', 'specifically designed'], [], 'adverb', '不及物', '书面'],
    ['尤其；单单', 'Used to single out one person, thing or reason above all others.', '把一个人、一件事或一个理由从其余当中单独挑出来。', '修饰动词或整个句子，语气与 particularly 接近。', 'One area specifically needs more staff.', '尤其有一个方面需要更多人手。', ['specifically the third one'], ['especially'], 'adverb', '不及物', '通用'],
    ['也就是；具体来说', 'Used to give more exact detail about something that was just mentioned.', '对刚提到的事情给出更确切的细节。', '修饰整个句子，后接要说明的具体内容。', 'She listed three goals, specifically speed, cost and safety.', '她列了三个目标，也就是速度、成本与安全。', ['specifically, namely'], ['namely'], 'adverb', '不及物', '书面'],
  ], '', ['especially', 'namely'], 'brief 显示 ←?，按 §5.2 自扫 specific B1（author_s3.js 第 4 参）——specific + -ly（-ly 在 §5.4 清单，透明副词后缀），B1 继承；fam especially 尤其、namely 即（队列原样，入第 10 参），近义 especially 置义项2、namely 置义项3，各恰一次，均队列原样');

  W('specification', 'noun', '/ˌspesɪfɪˈkeɪʃn/', 'B1', ['CET4'], '规格；技术要求；详细说明', 'A detailed statement of requirements, or the act of stating them clearly.', [
    ['规格；技术要求', 'A detailed statement of what something must be like or of how it must be made.', '对某物应达到的要求或必须如何制造的详细规定。', '可数，常用复数 specifications；常见搭配 meet the specifications。', 'The parts must meet the safety specifications.', '这些部件必须符合安全规格。', ['meet the specifications', 'technical specifications'], [], 'noun', 'countable', '工业'],
    ['明确说明；详述', 'A clear and detailed statement of what is needed or wanted.', '把所需要的东西清楚而详细地写出来。', '可数或不可数，常与 of 连用，多用于书面。', 'She wrote a specification of the new system.', '她写了一份新系统的详细说明。', ['a full specification'], [], 'noun', 'uncountable', '书面'],
  ], 'specifications', ['specify'], 'brief 根提示 ←specific B1 具体的（自扫 author_s3.js 第 4 参复核为 B1）+ -ation（-tion 类透明名词后缀），B1 继承；fam specify 明确说明（队列原样，置家族组），近义组队列未列');

  W('specifics', 'noun', '/ˈspesɪfɪks/', 'B1', [], '有关某事的确切细节', 'The exact details of a situation or a plan.', [
    ['细节；具体情况', 'The exact details about something, rather than the general ideas.', '关于某事的确切细节，与概括相对。', '常用复数 specifics，整体作单数概念，常与 of 连用。', 'We agreed on the plan but not on the specifics.', '我们对计划达成了共识，细节却还没定。', ['the specifics of', 'go into the specifics'], ['detail'], 'noun', 'countable', '通用'],
  ], '',['specific'], 'brief 根提示 ←specific B1 具体的（自扫 author_s3.js 第 4 参复核为 B1），specific + -s 复数化（-s 不在 §5.4 明示清单，按库内 sales←sale A2 先例），B1 继承（判断项）；复数形式单列词条，forms 留空；近义 detail 细节（队列原样，置唯一义项）');

  W('specified', 'adjective', '/spəˈsaɪfaɪd/', 'B2', [], '规定的；明确指定的', 'Stated clearly as a particular requirement or detail.', [
    ['规定的；明确指出的', 'Mentioned or stated clearly as something that must be done or met.', '被清楚地说出、必须做到或达到的事。', '可作定语或表语，常见于要求与说明性文书。', 'Complete the form in the specified way.', '请按规定的方式填表格。', ['as specified', 'within the specified time'], ['given'], 'adjective', '定语/表语', '商务'],
  ], '',['specify'], 'brief 根提示 ←specify B2 明确说明（自扫 author_s3.js 第 4 参复核为 B2），specify + -ed（-ed 在 §5.4 清单，透明形容词后缀），B2 继承；近义 given 给定的（队列原样，置唯一义项）');
})(typeof window !== 'undefined' ? window : globalThis);
