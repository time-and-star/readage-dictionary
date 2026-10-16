/* data/words/cet/author_t9.js — T 批次 9，缺口 twirl ~ typhoon，共 8 条
 * （6 单词 + 2 短语；短语清单：two times、two weeks）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_t9.txt，widx 249-256，词头无残缺；brief 首行 twirl、末行 typhoon）。
 * CET 标签照抄队列：CET4 × 0、CET6 × 0，8 条全部 []。
 * brief：%TEMP%\opencode\_t9_brief.txt 共 6 行，与本批 6 个单词一一对应（首行 twirl、末行 typhoon），
 *   refs 字符串逐字照抄：twirl spin,whirl,whirl｜twister tornado｜twofold double,double,dual,dual｜
 *   typecast stereotype｜typescript manuscript｜typhoon hurricane,hurricane（均与任务清单 fam+syn
 *   同一集合，无不符；仅 twister 一行给出根提示（←twist [B2] verb/noun），其余 5 行显示 ←?，
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf("W('word'") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；pending_*.js 不含 W( 条目，
 *   data/words/curated.js、adapt.js 经 grep 复核不含本批词与所扫各根）。
 * 扫根结论（自扫，第 4 参）：twist B2、two A1、type A2（均 author_t3.js）、
 *   fold A2（author_f2.js，twofold 的后成分，未采用）、script B2（author_s1.js，typescript 后成分，未采用）、
 *   whirl C1（author_w2.js）、hurricane B2（author_h4.js）、spin B1（author_s3.js）、
 *   double A2、dual B2（author_d2.js）、fortnight B1（author_f2.js）、stereotype C1（author_s8.js）、
 *   manuscript C1（author_m1.js）、twice A1（author_t3.js）；twirl、twister、twofold、typecast、
 *   typescript、typhoon 均不在库（自扫无 W( 记录）。
 * brief 根提示复核通过（自扫同级）：twist B2（author_t3.js，verb/noun）。
 * · 继承（4 条）：twister←twist B2 + -er（-er 在 §5.4 清单，语义直连核对通过）；
 *   twofold←two A1（复合取首成分，判断项）、typecast←type A2、typescript←type A2（复合取首成分，判断项）。
 * · 留空（2 单词 + 2 短语）：twirl（whirl C1、spin B1 均为近义词而非词根，词首非全段共享 tw- vs wh-，
 *   兄弟派生 §5.6 不成立，-irl 不在 §5.4 清单，判断项）、
 *   typhoon（hurricane B2 为近义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立，库内无词源根，判断项）；
 *   2 条短语一律 §6 分级留空。
 * CEFR 分布（6 单词）：A1 × 1（twofold）、A2 × 2（typecast、typescript）、B2 × 1（twister）、
 *   留空 × 2（twirl、typhoon）；短语 2 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t9.js 必须在 _cet_helper.js 之后加载');

  W('twirl', 'verb', '/twɜːl/', '', [], '快速轻巧地旋转', 'To move with a quick, light turning motion.', [
    ['旋转；打转', 'To move or dance around in circles with a light and rapid turning motion.', '以轻快的转圈方式移动或起舞。', '不及物动词，常与 round、about 连用，多形容舞步、轻小物件或人的转身。', 'The dancer twirled across the stage.', '那位舞者轻快地旋转着穿过舞台。', ['twirl around', 'twirl round'], ['spin'], 'verb', '不及物', '艺术'],
    ['使旋转；捻转', 'To make something turn round and round, for example with the fingers.', '用手指等使某物一圈圈地转动。', '及物动词，宾语多为头发、绳子、小物件，常与 round 连用。', 'She twirled her hair around one finger while thinking.', '她思考时把头发绕在一根手指上打转。', ['twirl a rope', 'twirl something round'], ['whirl'], 'verb', '及物', '通用'],
  ], 'twirls~twirled~twirled~twirling', ['whirl'], 'brief ←?，按 §5.2 自扫根：库内无 twirl 的语义直连词根——whirl C1（author_w2.js 第 4 参）与 spin B1（author_s3.js）均为近义词而非词根，twirl 与 whirl 词首非全段共享（tw- 与 wh-），兄弟派生不成立（规范 §5.6），-irl 不在 §5.4 清单且库内无先例，留空（判断项）；家族 whirl（队列原样，入第 10 参），近义 spin、whirl（队列原样，置义项 1、2 各恰好一次）');

  W('twister', 'noun', '/ˈtwɪstə/', 'B2', [], '龙卷风；扭转的人或东西', 'A violent storm with spinning winds, or somebody who twists something.', [
    ['龙卷风', 'A violent storm with very strong winds that turn rapidly in a circle.', '风力极强、快速盘旋的猛烈风暴。', '可数名词，非正式常用词，多指破坏性旋风，与 tornado 同义。', 'A twister tore the roof off the barn.', '一场龙卷风掀掉了谷仓的屋顶。', ['a violent twister'], ['tornado'], 'noun', 'countable', '自然'],
    ['扭转者；捻绳（捻线）的人或机器', 'Somebody or something that twists rope, wire or thread into shape.', '把绳索、金属丝或线捻成一定形状的人或机器。', '可数名词，twist + -er 表施动者，属工艺与机械语境。', 'The twister worked the rope into a tight coil.', '捻绳机把绳子拧成紧实的一圈。', ['a rope twister'], [], 'noun', 'countable', '工具'],
  ], 'twisters',['twist'], 'brief 根提示 ←twist B2 拧、扭（按 §5.2 自扫 author_t3.js 第 4 参复核为 B2，verb/noun）+ -er（-er 在 §5.4 清单，表施动者），语义直连核对通过（「捻绳者」直承 twist，「龙卷风」由旋转义引申），B2 继承；近义 tornado 龙卷风（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('two times', 'adverb', '/tuː taɪmz/', '', [], '两次；二回', 'The number 2 used as a count of how often something happens.', [
    ['两次；二回', 'On two separate occasions; the same meaning as twice.', '在两个分开的场合各发生一次，与 twice 同义。', '修饰动词。副词性短语，多见于口语与算术、倍数表达，正式语体多用 twice。', 'The machine checks each part two times before it leaves the factory.', '机器在部件出厂之前检查两次。', ['two times a day', 'two times three'], ['twice'], 'adverb', '不及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 twice 两次（队列原样，置唯一义项恰好一次）').phrase = true;

  W('two weeks', 'noun', '/tuː wiːks/', '', [], '两周；十四天', 'The amount of time that equals fourteen days.', [
    ['两周；十四天', 'A period of fourteen days, the same length as a fortnight.', '一段十四天的时间，与 a fortnight 等长。', '名词短语，作时间长度单位，常与 for、in、ago 连用；作主语时谓语多用单数。', 'The course lasts two weeks in summer.', '这门课在夏天为期两周。', ['in two weeks', 'two weeks ago'], ['fortnight'], 'noun', 'countable', '通用'],
  ], '', ['fortnight'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 fortnight 两周（队列原样，入第 10 参），近义 fortnight 两周（置唯一义项恰好一次）').phrase = true;

  W('twofold', 'adjective', '/ˈtuːfəʊld/', 'A1', [], '两倍的；双重的', 'Having two parts, or being twice as much.', [
    ['两倍的；加倍的', 'Being two times as much or as many.', '数量上等于两倍的。', '定语表语两用，常与 increase、rise、drop 等连用。', 'The company reported a twofold increase in sales.', '公司报告销售额增长了一倍。', ['a twofold increase', 'rise twofold'], ['double'], 'adjective', '定语/表语', '商务'],
    ['双重的；由两部分组成的', 'Made up of two separate parts or aspects.', '由两个彼此独立的部分或方面构成的。', '定语表语两用，常与 purpose、meaning、role 等连用。', 'The plan has a twofold purpose: to save money and to cut waste.', '这个计划有双重目的：省钱并减少浪费。', ['a twofold purpose'], ['dual'], 'adjective', '定语/表语', '通用'],
  ], '', ['double', 'dual'], 'brief ←?，按 §5.2 自扫根：复合词 twofold = two + -fold，按规范 §5.3 取首成分 two A1 二（自扫 author_t3.js 第 4 参），「两倍、双重」与 two「二」语义直连，A1 继承（判断项：复合词首成分裁定）；fam 与 syn 双列 double、dual——家族 double、dual（入第 10 参），近义 double 置义项 1、dual 置义项 2（队列原样，各恰好一次）');

  W('typecast', 'verb', '/ˈtaɪpkɑːst/', 'A2', [], '按类型分派角色；把…定型', 'To choose an actor for a role they seem to fit, or to label somebody in one fixed way.', [
    ['按类型分配角色', 'To choose an actor for a role of a particular kind because that is the sort of person they usually play.', '因为某人常演某类角色而把该类角色分派给他。', '及物动词，常用于被动式 be typecast as，属影视戏剧选角用语。', 'She was typecast as the rich lady in every film.', '她在每部电影里都被定型饰演阔太太。', ['be typecast as'], [], 'verb', '及物', '娱乐'],
    ['把…归入固定类型；给…贴标签', 'To put somebody into one fixed category so that other qualities are ignored.', '把某人归入单一固定类别，从而忽略他的其他特质。', '及物动词，多用被动式，含贬义，与 stereotype 意近。', 'Critics typecast the band as a one-hit wonder.', '评论家们把这支乐队定型为昙花一现的组合。', ['typecast somebody as'], ['stereotype'], 'verb', '及物', '媒体'],
  ], 'typecasts~typecast~typecast~typecasting',['type'], 'brief ←?，按 §5.2 自扫根：复合词 typecast = type + cast，按规范 §5.3 取首成分 type A2 类型（自扫 author_t3.js 第 4 参），「按类型分派角色、归入固定类型」与 type「类型」语义直连，A2 继承（判断项：复合词首成分裁定）；近义 stereotype 给…贴标签、把…定型（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('typescript', 'noun', '/ˈtaɪpskrɪpt/', 'A2', [], '打印稿；文稿的打字副本', 'A typed copy of a document or a book.', [
    ['打字稿；打印的文稿', 'A copy of a document or book that has been typed rather than written by hand or printed.', '用打字方式打出而非手写或印刷的文稿副本。', '可数名词，多指付印前的稿件，也泛指打印出来的文本。', 'The editor asked for a clean typescript of the article.', '编辑要一份干净的文章打印稿。', ['a clean typescript'], ['manuscript'], 'noun', 'countable', '出版'],
  ], 'typescripts',['type'], 'brief ←?，按 §5.2 自扫根：复合词 typescript = type + script，按规范 §5.3 取首成分 type A2 打字（自扫 author_t3.js 第 4 参；后成分 script B2，author_s1.js），「打字稿」与 type「打字」语义直连，A2 继承（判断项：复合词首成分裁定）；近义 manuscript 手稿（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('typhoon', 'noun', '/taɪˈfuːn/', '', [], '台风', 'A powerful tropical storm with spinning winds.', [
    ['台风', 'A violent storm with extremely strong winds that forms over a tropical sea.', '在热带海面上形成的风力极强的风暴。', '可数名词，发生在西北太平洋；发生在大西洋与东太平洋的同类风暴称 hurricane。', 'The typhoon destroyed hundreds of homes.', '这场台风摧毁了数百所房屋。', ['a violent typhoon', 'eye of the typhoon'], ['hurricane'], 'noun', 'countable', '自然'],
  ], 'typhoons', ['hurricane'], 'brief ←?，按 §5.2 自扫根：库内无 typhoon 的语义直连词根——hurricane B2（author_h4.js 第 4 参）为近义词而非词根，词首非全段共享，兄弟派生不成立（规范 §5.6）；-oon/-ph 不在 §5.4 清单且库内无先例，留空（判断项）；家族/近义 hurricane 飓风（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
