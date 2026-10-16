/* data/words/cet/author_t5.js — T 批次 5，缺口 threaten ~ tiresome，共 31 条
 * （26 单词 + 5 短语；短语清单：through the night、through which、throw away、tick over、tire out）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_t5.txt，widx 125-155，词头无残缺）。
 * CET 标签照抄队列：CET4 × 5（threaten、tighten、timely、tired、tiresome）、
 *   CET6 × 1（thriller），其余 25 条 []（含 5 条短语）。
 * brief：%TEMP%\opencode\_t5_brief.txt 共 26 行，与本批 26 个单词一一对应（首行 threaten、末行 tiresome）；
 *   4 行给出根提示（thrill B2、tight B1、time A1、tire B1），22 行显示 ←?，一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf("W('词头'") 定位后取第 4 参，扫 assets/js/data/words 下 author_*.js、
 *    pending_*.js 与 curated.js 的 level 字段，未 require 全库）。
 * 扫根结论（自扫，第 4 参）：threat B2、three A1、thrill B2、tight B1、time A1、tip A2、toe A2、
 *   tire B1、fold A2（第二成分，未取用）、egg A1（复合先例复核）；
 *   brief 根提示复核通过（自扫同级）：thrill B2（author_t1.js）、tight B1（author_t1.js）、
 *   time A1（author_t2.js）、tire B1（author_t2.js）；
 *   本批 26 个单词在库内均无既有 W 条目（全部首次录入）；其中无在库词根可继者：
 *   throb、throng、throttle、thump、thwart、thy、tiara、
 *   tier、tingle、tint、tipsy。
 * · 继承（15 条）：
 *   threaten←threat B2 + -en、threatening←threat B2 + -en + -ing（-en/-ing 在 §5.4 清单，
 *     同 author_s22.js strengthen、author_s14.js shorten、author_f7.js frighten 先例）；
 *   thriller←thrill B2 + -er（brief 根提示，-er 在 §5.4 清单）；
 *   tighten←tight B1 + -en、tights←tight B1 + -s（复数形式单列，判断项，同 author_j2.js jeans 先例）；
 *   time-based←time A1（连字符复合取首成分，判断项）、timeless←time A1 + -less（判断项，
 *     §4c 先例 author_c7.js careless←care A1、author_e4.js endless←end A1）、
 *   timely←time A1 + -ly（brief 根提示）、timepiece←time A1（复合取首成分，判断项）、
 *   timetable←time A1（复合取首成分，判断项）；
 *   tiptoe←tip A2（复合取首成分，判断项；toe A2 为第二成分）；
 *   tired←tire B1 + -ed（brief 根提示）、tiredness←tire B1 + -ed + -ness、
 *   tiresome←tire B1 + -some（判断项，§4c 先例 author_b7.js burdensome←burden B2、
 *     author_h1.js handsome、author_w2.js wholesome）；
 *   threefold←three A1（复合取首成分，判断项，主 agent 裁定，同 twofold/twelvemonth 数词复合先例）。
 * · 留空（11 单词 + 5 短语）：throb、throng（-ob/-ong 不在清单，同 author_t4.js thong 留空先例）、
 *   throttle（-tle 不在清单，清单内仅 -let）、thump（-ump 不在清单）、thwart（-art 不在清单，
 *   与 through 词首非全段共享，兄弟派生不成立 §5.6）、thy（古英语所有格，非库内派生，同 author_t4.js thou 先例）、
 *   tiara（-ara 不在清单）、tier（-ier 不在清单，与 tie 语义不直连）、tingle（-le 不在清单）、
 *   tint（-int 不在清单，与 point、print 仅共享词尾 §5.6）、tipsy（-sy 不在清单，4b 仅及 -y，
 *   与 tip 语义不直连 §5.7）；5 条短语一律 §6 分级留空。
 * CEFR 分布（26 单词）：A1 × 5、A2 × 1、B1 × 5、B2 × 3、留空 × 12；短语 5 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t5.js 必须在 _cet_helper.js 之后加载');

  W('threaten', 'verb', '/ˈθretən/', 'B2', ['CET4'], '威胁；构成威胁', 'To make somebody believe you may harm them, or to be likely to cause trouble.', [
    ['威胁；恐吓', 'To tell somebody that you will cause harm unless they do what you ask.', '告诉对方若不照办就会伤害他。', '及物动词，宾语是人，也可接 that 从句或不定式；常见搭配 threaten sb with sth。', 'He threatened to walk out of the meeting.', '他威胁要退出这次会议。', ['threaten to do sth', 'threaten sb with sth'], ['endanger', 'intimidate'], 'verb', '及物', '通用'],
    ['（形势）威胁到；危及', 'To be likely to cause serious trouble or damage to a person, a place or a plan.', '很可能给某人、某地或某计划带来严重的麻烦或损害。', '及物动词，主语常为 storm、crisis、shortage 等事物名词，宾语是受害对象。', 'The drought threatens the whole harvest.', '这场干旱威胁着整个收成。', ['threaten the peace', 'threaten a recovery'], ['loom', 'menace'], 'verb', '及物', '自然'],
  ], 'threatens~threatened~threatened~threatening', ['endanger', 'intimidate', 'loom', 'menace'], 'brief ←?，按 §5.2 自扫根 threat B2 威胁（author_t1.js 第 4 参）+ -en（-en 在 §5.4 清单，同 author_s22.js strengthen、author_s14.js shorten、author_f7.js frighten 先例），B2 继承；家族 endanger 危及、intimidate 恐吓、loom 逼近、menace 威胁（队列原样，入第 10 参），近义 endanger 危及与 intimidate 恐吓（置义项 1）、loom 逼近与 menace 威胁（置义项 2），均队列原样、各恰好一次；CET4 标签照抄队列');

  W('threatening', 'adjective', '/ˈθretnɪŋ/', 'B2', [], '威胁的；有凶险征兆的', 'Making you feel that something unpleasant or harmful may happen.', [
    ['（神态、言辞）威胁的；吓人的', 'Showing an intention to hurt or frighten somebody.', '显露出想要伤害或吓唬他人的意图。', '定语表语两用，形容语气、眼神、举动，主语多为人。', 'He adopted a threatening tone of voice.', '他换上了一副带威胁的口吻。', ['a threatening manner'], ['sinister'], 'adjective', '定语/表语', '性格'],
    ['（征兆）凶险的；险恶的', 'Looking or sounding as though something bad is about to happen.', '看上去或听上去像有坏事即将发生。', '多作定语，形容天气、形势、信件等。', 'The sky turned a threatening grey.', '天空转成一片阴沉的灰。', ['a threatening sky'], ['ugly'], 'adjective', '定语', '自然'],
  ], '',['threat'], 'brief ←?，按 §5.2 自扫根 threat B2 威胁（author_t1.js 第 4 参）——threat + -en + -ing（-en、-ing 均在 §5.4 清单，同 author_s22.js strengthen、author_s14.js shorten 先例；本批 threaten 同批录入），B2 继承；形容词 forms 留空；近义 sinister 阴险的、险恶的（置义项 1）与 ugly 凶险的、难看的（置义项 2），均队列原样、各恰好一次');

  W('threefold', 'adjective', '/ˈθriːfəʊld/', 'A1', [], '三倍于原来的；分成三部分的', 'Amounting to three times as much, or made of three separate parts.', [
    ['（数量）增加到三倍的', 'Three times as much or as many as the original amount.', '数量为原来数额的三倍。', '多作定语或表语，常与 increase、rise、drop 连用。', 'The cost rose threefold in five years.', '五年间费用涨了三倍。', ['a threefold increase'], ['triple'], 'adjective', '定语/表语', '数学'],
    ['三部分构成的；三重的', 'Made up of three separate parts, layers or stages.', '由三个独立的部分、层次或阶段构成。', '正式书面语，多作定语。', 'The plan has a threefold purpose.', '这个计划有三重目的。', ['a threefold division'], [], 'adjective', '定语', '书面'],
  ], '', ['triple'], 'brief ←?，按 §5.2 自扫根 three A1（author_t3.js 第 4 参）；threefold = three + fold 复合取首成分（§5.3，主 agent 裁定：可区分复合先例 trapdoor←trap、tradesperson←trade、timepiece←time 均取首成分），语义直连（三倍←三），three A1 继承（判断项，同 author_t9.js twofold←two A1、author_t8.js twelvemonth←twelve A1 数词复合先例）；家族/近义 triple 三倍的、三重的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('thriller', 'noun', '/ˈθrɪlə/', 'B2', ['CET6'], '充满悬念、令人兴奋的故事与影片', 'A story, play or film that keeps its audience in a state of excited fear.', [
    ['惊险作品；惊悚片（小说、电影）', 'A story, play or film that is full of excitement and suspense and intended to thrill the audience.', '充满刺激与悬念、意在让观众兴奋的作品。', '可数，常作定语，如 a crime thriller；也指这类作品的统称。', 'Her latest thriller keeps the reader guessing until the last page.', '她最新的惊险小说让读者一直猜到最后一页。', ['a crime thriller', 'a gripping thriller'], ['horror', 'mystery'], 'noun', 'countable', '娱乐'],
  ], 'thrillers',['thrill'], 'brief 根提示 ←thrill B2 激动、使兴奋（自扫 author_t1.js 第 4 参复核为 B2）+ -er（-er 在 §5.4 清单，指「令人激动的作品」，与根词语义直连），B2 继承；近义 horror 恐怖、惊悚与 mystery 悬疑、疑案（队列原样，置唯一义项各恰好一次）；CET6 标签照抄队列');

  W('throb', 'verb/noun', '/θrɒb/', '', [], '有节律地跳动；一阵悸动', 'To beat with a strong regular rhythm, or one beat of that kind.', [
    ['（脉搏）搏动；（伤口）抽痛', 'To beat with a strong, regular rhythm, especially because of pain.', '以强烈而有节律的方式跳动，尤因疼痛而起。', '不及物动词，主语常为 pulse、wound、head，常与 with 连用。', 'His wounded leg began to throb.', '他受伤的腿开始抽痛。', ['throb with pain'], ['pulse'], 'verb', '不及物', '健康'],
    ['有节奏的跳动；悸动', 'A single strong regular beat, or a series of such beats.', '一次强烈而有节律的跳动，或这样的一连串跳动。', '可数，多用于描写心跳、机器震动与音乐节拍。', 'I felt the throb of the engine through the floor.', '我透过地板感到发动机阵阵的震动。', ['a steady throb'], [], 'noun', 'countable', '通用'],
  ], 'throbs~throbbed~throbbed~throbbing', [], 'brief ←?，自扫根：库内无 throb 的在库词根（-ob 不在 §5.4 清单，库内无同后缀先例），留空；近义 pulse 跳动、脉搏（队列原样，置首义项恰好一次）');

  W('throng', 'noun/verb', '/θrɒŋ/', '', [], '人群密集；蜂拥而至', 'A large crowded group of people, or to fill a place by moving in such a group.', [
    ['一大群人；人群', 'A large, tightly packed crowd of people.', '密集地挤在一起的一大群人。', '可数，正式或文学用语，常与 of 连用。', 'A throng of reporters waited outside.', '一大群记者等在外面。', ['a throng of people'], ['crowd'], 'noun', 'countable', '社交'],
    ['挤满；蜂拥而至', 'To fill a place by arriving there in large numbers.', '大批人到达某地并把它占满。', '及物动词，主语是人群，宾语是地点，多见于书面描写。', 'Tourists thronged the old square.', '游客挤满了老广场。', ['throng the streets'], [], 'verb', '及物', '社交'],
  ], 'throngs~thronged~thronged~thronging', ['crowd'], 'brief ←?，自扫根：库内无 throng 的在库词根（-ong 不在 §5.4 清单，同 author_t4.js thong 留空先例；与 through 词首非全段共享，兄弟派生不成立，规范 §5.6），留空；家族/近义 crowd 人群、群集（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('throttle', 'noun/verb', '/ˈθrɒtl/', '', [], '节气门；扼住喉咙', 'The device that controls the flow of fuel in an engine, or to press hard on the throat of somebody.', [
    ['（发动机）节气门；油门', 'The device in an engine that controls how much fuel or air gets into it.', '控制进入发动机的燃料或空气数量的装置。', '可数，常见于汽车与机械语境，与 accelerator 同义。', 'He pushed the throttle wide open.', '他把油门踩到底。', ['pull back the throttle'], ['accelerator'], 'noun', 'countable', '工业'],
    ['扼住喉咙；使窒息', 'To press hard on the throat of somebody so that they cannot breathe.', '用力按住某人的喉咙使其无法呼吸。', '及物动词，新闻与法律语境常用，也可比喻压制某种声音。', 'The guard throttled the intruder.', '保安掐住了闯入者的脖子。', ['throttle a victim'], ['strangle'], 'verb', '及物', '法律'],
  ], 'throttles~throttled~throttled~throttling', [], 'brief ←?，自扫根：库内无 throttle 的在库词根（-tle 不在 §5.4 清单，清单内仅 -let；库内无同后缀先例），留空；近义 accelerator 油门、加速装置（置义项 1）与 strangle 扼杀、掐死（置义项 2），均队列原样、各恰好一次');

  W('through the night', 'adverb', '/θruː ðə naɪt/', '', [], '整个夜间地；彻夜', 'For all the time from the evening until the morning.', [
    ['整夜地；通宵地', 'For the whole of the night, from when it gets dark until morning.', '从天黑到清晨的整个夜里。', '修饰动词，作时间状语，表示动作在整个夜间持续进行。', 'They worked through the night to finish the report.', '他们连夜工作赶完了报告。', ['drive through the night'], ['overnight'], 'adverb', '不及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 overnight 通宵、连夜（队列原样，置唯一义项恰好一次）').phrase = true;

  W('through which', 'conjunction', '/θruː wɪtʃ/', '', [], '表示途径或手段的关系连词', 'Used to introduce a clause about the route, means or method connecting two things.', [
    ['经由它；通过那个', 'Used to add information about a thing and the route, means or method that links something else to it.', '补充说明某事物，以及与之相连的途径、方式或手段。', '关系连词短语，引导定语从句，先行词多为事物。', 'This is the channel through which the goods flow.', '这就是货物流通的渠道。', ['the means through which'], ['whereby'], 'conjunction', 'null', '语法'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 whereby 借此、凭此（队列原样，置唯一义项恰好一次）').phrase = true;

  W('throw away', 'verb', '/ˌθrəʊ əˈweɪ/', '', [], '扔掉；浪费掉', 'To get rid of something you no longer want, or to waste an opportunity.', [
    ['扔掉；丢弃', 'To put something in the rubbish because you do not want it any more.', '因为不再需要而把某物扔进垃圾。', '及物动词短语，代词作宾语时放在中间：throw it away。', 'He threw away the broken keys.', '他把坏掉的钥匙扔了。', ['throw away the box', 'throw it away'], ['discard', 'dump'], 'verb', '及物', '家居'],
    ['浪费掉；错过（机会）', 'To fail to use an opportunity or a chance in a useful way.', '没有好好利用某个机会或时机。', '及物动词短语，宾语常为 chance、opportunity、advantage。', 'Do not throw away this chance to study abroad.', '不要浪费这次出国留学的机会。', ['throw away an advantage'], [], 'verb', '及物', '教育'],
  ],'throws away~threw away~thrown away~throwing away', ['discard'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 discard 丢弃（队列原样，入第 10 参），近义 discard 抛弃与 dump 扔掉（队列原样，置首义项各恰好一次）').phrase = true;

  W('thump', 'verb/noun', '/θʌmp/', '', [], '重击；砰砰的响声', 'To hit something hard with a dull sound, or a heavy blow of that kind.', [
    ['重击；猛打', 'To hit something or somebody hard with your hand or a heavy object.', '用手或重物用力击打某物或某人。', '及物动词，也可作不及物，常与 on、at 连用。', 'She thumped the table with her fist.', '她用拳头猛敲桌子。', ['thump the table'], ['pound'], 'verb', '及物', '通用'],
    ['砰砰的重击声', 'A loud dull sound made by a heavy blow or by a strong heartbeat.', '用力敲击或心跳强烈时发出的沉闷响声。', '可数，常见于描写心跳、脚步与敲门声。', 'We heard a thump at the door.', '我们听见门上传来砰的一声。', ['a dull thump'], [], 'noun', 'countable', '通用'],
  ], 'thumps~thumped~thumped~thumping', [], 'brief ←?，自扫根：库内无 thump 的在库词根（-ump 不在 §5.4 清单，库内无同后缀先例），留空；近义 pound 猛击、连续重击（队列原样，置首义项恰好一次）');

  W('thwart', 'verb', '/θwɔːt/', '', [], '让某人的计划落空；阻挠', 'To stop somebody from achieving what they are trying to do.', [
    ['阻挠；挫败', 'To prevent somebody from doing something they planned or wanted to do.', '阻止某人去做其计划或想要做的事。', '及物动词，宾语常为 plan、attempt、effort、attack。', 'The raid was thwarted by a tip-off.', '这次突袭因为有人通风报信而受挫。', ['thwart an attempt'], ['foil', 'frustrate'], 'verb', '及物', '社会'],
  ], 'thwarts~thwarted~thwarted~thwarting', ['foil', 'frustrate'], 'brief ←?，自扫根：库内无 thwart 的在库词根（-art 不在 §5.4 清单；与 through 词首仅共享 th，非全段共享，兄弟派生不成立，规范 §5.6），留空；家族 foil 阻挠、frustrate 使受挫（队列原样，入第 10 参），近义 foil 挫败与 frustrate 阻挠（队列原样，置唯一义项各恰好一次）');

  W('thy', 'determiner', '/ðaɪ/', '', [], '旧式英语里的「你的」', 'The old form of your used when speaking to one person.', [
    ['你的（旧式所有格）', 'The old possessive form of you, placed before a noun when talking to one person.', '在对一个人说话时用在名词前的 you 的旧式所有格形式。', '限定词，后面直接跟名词；现代英语一律用 your，只保留在祈祷文、诗歌与仿古语体中。', 'Thy will be done.', '愿你的旨意得以成就。', ['thy kingdom'], ['your'], 'determiner', '限定', '历史'],
  ], '', [], 'brief ←?，自扫根：库内无 thy 的在库词根（古英语第二人称单数所有格，非库内派生；与 you、your 语义对应但非同根派生，规范 §5.6；同 author_t4.js thou 留空先例），留空；限定词无词形变化，forms 留空；近义 your 你的、你们的（队列原样，置唯一义项恰好一次）');

  W('tiara', 'noun', '/tiˈɑːrə/', '', [], '女性正式场合戴的头饰', 'A decorated band of jewels worn on the head on formal occasions.', [
    ['冕状头饰；小皇冠', 'A curved decorated band of jewels worn on the head, especially by women at formal events.', '佩戴在头上的弧形珠宝饰带，尤由女性在正式场合佩戴。', '可数，常与 of 连用；日常语境也可戏称装饰性发箍。', 'She wore a diamond tiara at the ceremony.', '她在典礼上戴了一顶钻石冕饰。', ['a diamond tiara'], ['crown'], 'noun', 'countable', '外貌'],
  ], 'tiaras', ['crown'], 'brief ←?，自扫根：库内无 tiara 的在库词根（-ara 不在 §5.4 清单，库内无同后缀先例），留空；家族/近义 crown 王冠、冠冕（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('tick over', 'verb', '/ˌtɪk ˈəʊvə/', '', [], '（发动机）怠速运转；缓慢维持', 'To keep running slowly without doing much work, of an engine or a business.', [
    ['（发动机）怠速运转', 'Of an engine, to run slowly while the vehicle is not moving.', '车辆停着不动时发动机缓慢运转。', '不及物动词短语，主语为 engine，常与 at 连用表示转速。', 'The car ticked over at the red light.', '车子在红灯前怠速运转。', ['tick over at 800 rpm'], ['idle'], 'verb', '不及物', '交通'],
    ['（事物）缓慢维持；停滞不前', 'To continue at a slow steady rate without making much progress.', '以缓慢而稳定的节奏维持，没有多大进展。', '不及物动词短语，多用于工作、业务与组织。', 'The business ticked over for two more years.', '这门生意又勉强维持了两年。', ['tick over quietly'], [], 'verb', '不及物', '商务'],
  ],'ticks over~ticked over~ticking over', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 idle 空转、无所事事（队列原样，置首义项恰好一次）').phrase = true;

  W('tier', 'noun', '/tɪə/', '', [], '一层；一级；一排', 'One of the levels or rows in a system that is arranged in layers.', [
    ['（层级体系中的）一层、一级', 'One level in a system that is arranged in several levels, one above the other.', '分层体系中若干层级之一，各层依次叠置。', '可数，常与 of 连用，用于价格、组织与赛事分组。', 'The system has three tiers of pricing.', '这套系统分三级收费。', ['a top tier of service'], ['layer'], 'noun', 'countable', '商务'],
    ['（阶梯式座位的）一排', 'A row of seats that rises in steps so that each row is behind and above the last.', '依次升高、后排高于前排的一排座位。', '可数，常见于剧院与体育场的看台描写。', 'We sat in the upper tier of the stadium.', '我们坐在体育场的上层看台。', ['the upper tier'], [], 'noun', 'countable', '体育'],
  ], 'tiers', [], 'brief ←?，自扫根：库内无 tier 的在库词根（-ier 不在 §5.4 清单；与 tie 词源相近但库内 tie 的语义与「层级、一排」不直连，规范 §5.7），留空；近义 layer 层、层次（队列原样，置首义项恰好一次）');

  W('tighten', 'verb', '/ˈtaɪtən/', 'B1', ['CET4'], '收紧；变严格', 'To become more firmly fixed, or to make something become so.', [
    ['（使）收紧；拧紧', 'To pull or turn something so that it holds more firmly in place.', '拉动或拧动某物使它固定得更牢。', '及物与不及物两用，常与 up、around 连用。', 'She tightened the strap on her helmet.', '她把头盔的带子收紧了。', ['tighten the screws', 'tighten up the strap'], ['tense'], 'verb', '及物', '通用'],
    ['（规定、控制）收紧；变严格', 'To make rules, controls or budgets stricter, or to become stricter.', '让规则、管控或预算变得更严格，或变得更严格。', '及物与不及物两用，常与 up 连用，用于制度与财政语境。', 'The council tightened the rules on parking.', '市政会收紧了停车规定。', ['tighten regulations'], [], 'verb', '及物', '法律'],
  ], 'tightens~tightened~tightened~tightening', ['tense'], 'brief ←?，按 §5.2 自扫根 tight B1 紧的（author_t1.js 第 4 参）+ -en（-en 在 §5.4 清单，同 author_s22.js strengthen、author_b7.js broaden、author_s14.js shorten 先例），B1 继承；家族 tense 紧张的、拉紧的（队列原样，入第 10 参），近义 tense 拉紧的、紧张的（队列原样，置首义项恰好一次）；CET4 标签照抄队列');

  W('tights', 'noun', '/taɪts/', 'B1', [], '女性穿的连裤袜与紧身衣裤', 'A close-fitting garment that covers the legs and the lower part of the body.', [
    ['连裤袜；裤袜', 'A close-fitting garment that covers the legs and hips, worn by women under a skirt or dress.', '包住腿部与臀部的贴身服装，穿在裙子里面。', '复数形式单列词条，作主语时谓语用单数，常与 a pair of 连用。', 'She wore black tights with a short skirt.', '她穿了条黑色连裤袜配短裙。', ['a pair of tights'], ['stocking'], 'noun', 'countable', '外貌'],
    ['（体操、舞蹈用的）紧身衣裤', 'A close-fitting garment covering the legs and body, worn for sport or dancing.', '体育或舞蹈时穿的包住腿部与身体的紧身服装。', '复数形式单列词条，也可说 dance tights 或 leggings。', 'The dancers changed into grey tights.', '舞者们换上了灰色紧身裤。', ['dance tights'], [], 'noun', 'countable', '体育'],
  ],'tights',['tight'], 'brief 根提示 ←tight B1 紧的、紧身的（自扫 author_t1.js 第 4 参复核为 B1）+ -s（复数形式单列词条，forms 留空并注明，同 author_j2.js jeans、author_t4.js things 先例），B1 继承（判断项：-s 复数化不在 §5.4 清单）；近义 stocking 长筒袜（队列原样，置首义项恰好一次）');

  W('time-based', 'adjective', '/ˌtaɪm ˈbeɪst/', 'A1', [], '按所用时间计算的', 'Calculated according to the amount of time used rather than the result achieved.', [
    ['基于时间的；按时间计费的', 'Charged or worked out according to how much time is used, rather than what is produced.', '按所用时间而不是按产出来计费或计算的。', '多作定语，常与 work、charge、rate 连用。', 'The firm bills clients on a time-based system.', '这家公司按时间向客户计费。', ['time-based charges'], ['temporal'], 'adjective', '定语', '商务'],
  ], '',['time'], 'brief ←?，按 §5.2 自扫根：连字符复合词 time-based = time + based，按规范 §5.3 取首成分 time A1 时间（author_t2.js 第 4 参），「按时间计算」与 time 语义直连，A1 继承（判断项：复合词首成分裁定，同 author_e3.js egg-shaped←egg A1、author_t4.js third-level←third A1 先例）；近义 temporal 时间上的、与时间有关的（队列原样，置唯一义项恰好一次）');

  W('timeless', 'adjective', '/ˈtaɪmləs/', 'A1', [], '永恒的；不受时间影响的', 'Not changed by fashion or by the passage of time.', [
    ['永恒的；历久弥新的', 'Still beautiful or interesting after a long period, because it is not affected by fashion.', '因为不受潮流影响，隔了很长时间依然优美或有趣。', '多作定语，形容设计、故事与品质，含褒义。', 'The film is a timeless classic.', '这部电影是永恒的经典。', ['a timeless design'], ['eternal'], 'adjective', '定语', '艺术'],
    ['永恒的；与时间无关的', 'Lasting forever, or having no connection with time.', '永远持续，或者与时间没有关系。', '定语表语两用，正式语体，多形容抽象事物。', 'The moment felt timeless.', '那一刻仿佛静止了。', ['a timeless quality'], ['classic'], 'adjective', '表语', '文学'],
  ], '', ['classic'], 'brief ←?，按 §5.2 自扫根 time A1 时间（author_t2.js 第 4 参）+ -less（-less 属 §5.4 清单外后缀，按 §4c 库内先例裁定：author_c7.js careless←care A1、author_e4.js endless←end A1），A1 继承（判断项）；家族 classic 经典（队列原样，入第 10 参），近义 eternal 永恒的（置义项 1）与 classic 经典的（置义项 2），均队列原样、各恰好一次');

  W('timely', 'adjective', '/ˈtaɪmli/', 'A1', ['CET4'], '来得正是时候的；合时宜的', 'Happening at the right moment to be useful.', [
    ['及时的；适时的', 'Coming at a moment when something can still be done about the situation.', '来得正是时候，仍可对局势有所作为。', '定语表语两用，常与 help、warning、decision、reminder 连用。', 'Her warning proved timely.', '她的警告后来证明是适时的。', ['timely warning', 'a timely reminder'], ['punctual'], 'adjective', '定语/表语', '通用'],
  ], '', ['punctual'], 'brief 根提示 ←time A1 时间（自扫 author_t2.js 第 4 参复核为 A1）+ -ly（-ly 在 §5.4 清单，透明后缀，构成形容词），A1 继承；家族/近义 punctual 准时的、守时的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET4 标签照抄队列');

  W('timepiece', 'noun', '/ˈtaɪmpiːs/', 'A1', [], '显示或测量时间的器具', 'A clock, watch or instrument made for telling or measuring the time.', [
    ['钟表；计时器', 'An instrument such as a clock or a watch that is made to show the time.', '钟、表一类用于显示时间的仪器。', '可数，较正式或书面，常与 of 连用，多用于收藏与鉴赏语境。', 'The museum keeps a collection of antique timepieces.', '博物馆收藏了一批古董钟表。', ['an antique timepiece'], ['watch'], 'noun', 'countable', '工具'],
  ], 'timepieces',['time'], 'brief ←?，按 §5.2 自扫根：复合词 timepiece = time + piece，按规范 §5.3 取首成分 time A1 时间（author_t2.js 第 4 参），「计时的器物」与 time 语义直连，A1 继承（判断项：复合词首成分裁定，同 author_t4.js threadbare←thread B1、author_e3.js egg-shaped←egg A1 先例）；近义 watch 手表、钟表（队列原样，置唯一义项恰好一次）');

  W('timetable', 'noun/verb', '/ˈtaɪmteɪbl/', 'A1', [], '时刻表；课程表；安排时间', 'A list showing when events happen, or to plan a time for something.', [
    ['时刻表；课程表', 'A list showing the times at which buses, trains or classes leave and arrive.', '列出班次、列车或课程出发与到达时间的清单。', '可数，常与 for 连用；英式常用，美式常说 schedule。', 'The timetable says the next train is at ten.', '时刻表显示下一班车十点开。', ['a bus timetable'], ['schedule'], 'noun', 'countable', '交通'],
    ['安排；列入时间表', 'To plan a particular time for an event or an activity to take place.', '为某项活动安排一个具体的时间。', '及物动词，英式常用，宾语是活动、课程或考试。', 'The exam is timetabled for next Friday.', '考试已经安排在下周五。', ['be timetabled for Monday'], [], 'verb', '及物', '教育'],
  ], 'timetables~timetabled~timetabled~timetabling', ['schedule'], 'brief ←?，按 §5.2 自扫根：复合词 timetable = time + table，按规范 §5.3 取首成分 time A1 时间（author_t2.js 第 4 参），「时间之表」与 time 语义直连，A1 继承（判断项：复合词首成分裁定，同 author_t4.js third-level←third A1 先例）；家族/近义 schedule 时间表、安排（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('tingle', 'verb/noun', '/ˈtɪŋɡl/', '', [], '刺痛；麻刺感', 'To feel a slight prickling sensation, or that sensation itself.', [
    ['感到刺痛；发麻', 'To feel a slight prickling sensation in your skin.', '皮肤上感到轻微的针刺感。', '不及物动词，常与 with 连用，主语多为身体部位或人。', 'My fingers tingled with the cold.', '我的手指冻得发麻。', ['tingle with excitement'], ['tickle'], 'verb', '不及物', '健康'],
    ['麻刺感；刺痛', 'A slight prickling feeling in the skin or elsewhere.', '皮肤或其他部位的轻微针刺感。', '可数，常与 of 连用，多用于感觉描写。', 'A tingle ran down her spine.', '一阵麻刺感顺着她的脊背窜下去。', ['a tingle of excitement'], [], 'noun', 'countable', '健康'],
  ], 'tingles~tingled~tingled~tingling', [], 'brief ←?，自扫根：库内无 tingle 的在库词根（-le 不在 §5.4 清单，清单内为 -let；库内无同后缀先例），留空；近义 tickle 挠、逗弄（队列原样，置首义项恰好一次）');

  W('tint', 'noun/verb', '/tɪnt/', '', [], '色调；染色；染发', 'A shade of colour, or to add colour to hair or to something pale.', [
    ['色调；色度', 'A shade or variety of a colour, especially a pale one.', '某种颜色的深浅或品种，尤指浅淡的色泽。', '可数，常与 of 连用，用于描写发色、玻璃与光线。', 'Her hair has a red tint in the sunlight.', '她的头发在阳光下泛着红色调。', ['a greenish tint'], ['shade'], 'noun', 'countable', '艺术'],
    ['染发；着色', 'To add colour to your hair, or to give something a pale colour.', '给头发上色，或给某物加上浅淡的颜色。', '及物动词，宾语是头发或被染的物体，也常见 tint one hair。', 'She tinted her hair a shade darker.', '她把头发染深了一点。', ['tint one hair'], ['dye'], 'verb', '及物', '外貌'],
  ], 'tints~tinted~tinted~tinting', ['dye', 'shade'], 'brief ←?，自扫根：库内无 tint 的在库词根（-int 不在 §5.4 清单；与 point、print 仅共享词尾而非词首全段，兄弟派生不成立，规范 §5.6），留空；家族 dye 染料、染色与 shade 色调、浓淡（队列原样，fam 入第 10 参），近义 shade 色调（置义项 1）与 dye 染色（置义项 2），均队列原样、各恰好一次');

  W('tipsy', 'adjective', '/ˈtɪpsi/', '', [], '酒后微有醉意的', 'Slightly drunk after drinking alcohol.', [
    ['微醺的；略带醉意的', 'Slightly drunk, so that you feel relaxed but remain in control.', '略微喝醉，感到放松但并未失去自制。', '多作表语，口语常用，语气比 drunk 委婉。', 'She felt pleasantly tipsy after one glass.', '她喝了一杯后觉得飘飘然。', ['get tipsy'], ['merry'], 'adjective', '表语', '饮食'],
  ], '', [], 'brief ←?，自扫根：库内无 tipsy 的在库词根（-sy 不在 §5.4 清单，§4b 仅及 -y；库内 choosy、fussy、noisy 的词根各不相同，无从 tip 继承的先例；与 tip 形近但「微醺」与其语义不直连，规范 §5.7），留空（判断项，供主 agent 裁定）；近义 merry 微醉的、快活的（队列原样，置唯一义项恰好一次）');

  W('tiptoe', 'verb/noun', '/ˈtɪptəʊ/', 'A2', [], '踮着脚走；脚尖', 'To walk very quietly on the tips of the toes, or those tips themselves.', [
    ['踮着脚走；蹑手蹑脚地走', 'To walk using only the front part of your foot, so that your steps are very quiet.', '只用脚前掌走路，脚步非常轻。', '不及物动词，常与 to、past、into 连用；也可作副词短语 on tiptoe。', 'She tiptoed past the sleeping baby.', '她踮着脚从睡着的婴儿身边走过。', ['tiptoe across the room'], ['pad'], 'verb', '不及物', '通用'],
    ['脚尖；踮脚的状态', 'The front tips of the toes, or the act of standing on them.', '脚趾的前端，或用脚尖站立的姿势。', '可数，常见固定搭配 on tiptoe。', 'He stood on tiptoe to reach the shelf.', '他踮起脚去够架子。', ['on tiptoe'], [], 'noun', 'countable', '外貌'],
  ], 'tiptoes~tiptoed~tiptoed~tiptoeing', ['toe'], 'brief ←?，按 §5.2 自扫根：复合词 tiptoe = tip + toe，两成分分别自扫 tip A2 尖端（author_t2.js 第 4 参）、toe A2 脚趾（author_t2.js 第 4 参），按规范 §5.3 取首成分 tip A2，「脚趾尖→踮着脚走」与 tip 语义直连，A2 继承（判断项：复合词首成分裁定，同 author_t4.js threadbare←thread B1、third-level←third A1 先例）；家族 toe 脚趾（队列原样，入第 10 参），近义 pad 步行、放轻脚步地走（队列原样，置首义项恰好一次）');

  W('tire out', 'verb', '/ˈtaɪə aʊt/', '', [], '使疲惫不堪', 'To make somebody very tired.', [
    ['使累垮；使精疲力竭', 'To make somebody so tired that they need to rest.', '把某人弄得非常累，非休息不可。', '及物动词短语，代词作宾语时放在中间：tire them out，宾语通常是人。', 'The long walk tired us out.', '路走得太远把我们累坏了。', ['tire somebody out'], ['exhaust'], 'verb', '及物', '健康'],
  ], '', ['exhaust'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 exhaust 使筋疲力尽（队列原样，入第 10 参），近义 exhaust 使耗尽、使疲惫（队列原样，置唯一义项恰好一次）').phrase = true;

  W('tired', 'adjective', '/ˈtaɪəd/', 'B1', ['CET4'], '疲倦的；厌烦的', 'Needing rest or sleep, or no longer interested in something.', [
    ['疲倦的；困倦的', 'Needing to sleep or rest because you have been active or busy for a long time.', '因为活动或忙碌了很长时间而需要睡觉或休息。', '定语表语两用，常与 very、so、too 连用，也可接 of 或不定式。', 'I felt too tired to cook.', '我累得不想做饭。', ['feel tired', 'tired out'], ['weary'], 'adjective', '定语/表语', '健康'],
    ['厌倦的；腻烦的', 'Bored with something because it has stayed the same for too long.', '因为某事一成不变太久而感到厌烦。', '多作表语，常与 of 连用，后面接名词或动名词。', 'She is tired of waiting for a reply.', '她等回音等烦了。', ['tired of doing sth'], ['sick'], 'adjective', '表语', '心理'],
    ['（说法、创意）陈旧乏味的', 'Repeated so often that it has stopped being interesting.', '重复了太多次，已经不再有趣。', '多作定语，形容笑话、借口与说法。', 'The joke was tired and nobody laughed.', '这个笑话太老套，没人笑。', ['a tired excuse'], ['stale'], 'adjective', '定语', '口语'],
  ], '', ['weary'], 'brief 根提示 ←tire B1 （使）疲倦（自扫 author_t2.js 第 4 参复核为 B1）+ -ed（-ed 在 §5.4 清单，分词转形容词），B1 继承；家族 weary 疲惫的（队列原样，入第 10 参），近义 weary 疲惫的（置义项 1）、sick 厌烦的（置义项 2）、stale 陈旧乏味的（置义项 3），均队列原样、各恰好一次；CET4 标签照抄队列');

  W('tiredness', 'noun', '/ˈtaɪədnəs/', 'B1', [], '因劳作而需要休息的状态', 'The state of needing rest or sleep after a period of activity.', [
    ['疲倦；困乏', 'The condition of needing sleep or rest because of what you have been doing.', '因为一直在做的事情而需要睡觉或休息的状态。', '不可数，常与 from、after 连用，也可与 a wave of 搭配。', 'Tiredness made her mistakes worse.', '疲倦让她的错误更严重了。', ['a wave of tiredness'], ['fatigue'], 'noun', 'uncountable', '健康'],
  ], '', ['fatigue'], 'brief ←?，按 §5.2 自扫根 tire B1 （使）疲倦（author_t2.js 第 4 参）——tire + -ed + -ness（-ed、-ness 均在 §5.4 清单，先例 author_s25.js swiftness←swift B2、author_t4.js thoroughness←thorough B2），B1 继承；不可数故 forms 留空；家族/近义 fatigue 疲劳、疲惫（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('tiresome', 'adjective', '/ˈtaɪəsəm/', 'B1', ['CET4'], '令人厌烦的；累人的', 'Making you feel bored or impatient because it lasts too long.', [
    ['令人厌烦的；冗长乏味的', 'Making you feel bored because it goes on too long or happens too often.', '因为持续太久或发生太频繁而让人觉得无聊。', '多作定语，较正式，语气比 annoying 轻而比 dull 重。', 'The tiresome argument went on all afternoon.', '这场恼人的争论整个下午没停。', ['a tiresome delay'], ['tedious'], 'adjective', '定语', '通用'],
  ], '',['tire'], 'brief ←?，按 §5.2 自扫根 tire B1 （使）疲倦（author_t2.js 第 4 参）+ -some（-some 属 §5.4 清单外后缀，按 §4c 库内先例裁定：author_b7.js burdensome←burden B2、author_h1.js handsome、author_w2.js wholesome），B1 继承（判断项）；近义 tedious 冗长乏味的、使人厌倦的（队列原样，置唯一义项恰好一次）；CET4 标签照抄队列');
})(typeof window !== 'undefined' ? window : globalThis);
