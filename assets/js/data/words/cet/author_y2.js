/* data/words/cet/author_y2.js — Y 批次 2，缺口 yank ~ yummy，共 10 条
 * （9 单词 + 1 短语；短语清单：young man，按队列不入 brief）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_y2.txt，001-010，词头无残缺）。
 * CET 标签照抄队列：CET4 × 3（yeah、yearly、youthful），CET6 × 0，其余 7 条 []（含 1 条短语）。
 * brief：%TEMP%\opencode\_y2_brief.txt 共 9 行，与本批 9 个单词一一对应（首行 yank、末行 yummy），
 *   短语 young man 不入 brief；brief 的 refs 与任务清单 fam/syn 逐条比对一致，无错位。
 *   3 行给出根提示（year A1 noun、yield B2 verb/noun、youngster B2 noun），6 行显示 ←?，
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf("W('词头'") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；curated.js 不含本批词与其根）。
 * 扫根结论（自扫，第 4 参）：year A1、yield B2、young A1、youngster B2、youth B1、yes A1
 *   （均 author_y1.js）、thread B1、there A1（author_t1.js）、wool B1、wrench C1（author_w2.js）、
 *   delicious A1（author_d1.js）、annual B1（author_a3.js，RA.W 前缀体例）；
 *   yank、yarn、yeah、yonder、yummy 库内无语义直连根。
 * · brief 根提示复核：year A1、yield B2、youngster B2 自扫同级，通过照用。
 * · 继承（4 单词）：
 *   yearly←year A1 + -ly（-ly 在 §5.4 清单，「每年一次的」与 year 语义直连；
 *     判断项：-ly 接名词构成形容词/副词，库内 annually←annual B1 先例，cet_wordlist.csv 亦标 year→yearly）；
 *   yielding←yield B2 + -ing（-ing 在 §5.4 清单，语义直连核对通过，yield 词条备注点名词 yielding 义）；
 *   youngsters←youngster B2（复数形式单列词条，判断项，同库内 troops←troop B2 先例）；
 *   youthful←youth B1 + -ful（-ful 在 §5.4 清单，youthful 形段全含 youth；
 *     近义 young A1 不取根，词首非全段共享 §5.6 不成立，cet_wordlist.csv 亦标 youth→youthful）。
 * · 留空（5 单词 + 1 短语）：
 *   yank（-ank 不在清单，近义 wrench C1 为同义词非词根）、
 *   yarn（-arn 不在清单，thread/wool 为家族与近义词而非词根）、
 *   yeah（口语变体，词形不含 yes 整段，同 cuss←curse B1 分级留空先例；
 *     另有反证 cet_wordlist.csv 的 derived 列标 yes→yeah、yes 词条 fam/syn 已收 yeah，见存疑项）、
 *   yonder（-der 不在清单，yon- 不在库，there A1 为近义非词根）、
 *   yummy（-y 形容词后缀按 §5.4 4b 需根词在库，语义基 yum 不在库）、
 *   young man（短语，按 §6 分级留空）。
 * CEFR 分布（9 单词）：A1 × 1（yearly）、B1 × 1（youthful）、B2 × 2（yielding、youngsters）、
 *   留空 × 5（yank、yarn、yeah、yonder、yummy）；短语 1 条留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_y2.js 必须在 _cet_helper.js 之后加载');

  W('yank', 'verb/noun', '/jæŋk/', '', [], '猛拉；猛地一拽', 'To pull something hard and suddenly, or a sudden strong pull.', [
    ['猛拉；猛拽', 'To pull something sharply and with a lot of force.', '用力而急促地拉某物。', '及物动词，宾语是衣物、绳索等；也常作不及物，与 at 连用。', 'She yanked the door open and ran out.', '她猛地拉开门跑了出去。', ['yank at', 'yank the door open'], ['wrench'], 'verb', '及物', '通用'],
    ['猛地一拽；急拉', 'A sudden hard pull given to something.', '对某物用力而突然的一拉。', '可数，常与 give 连用，形式为 give a yank。', 'He gave the rope a hard yank.', '他使劲拽了一下绳子。', ['give a yank'], [], 'noun', 'countable', '通用'],
  ], 'yanks~yanked~yanked~yanking', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 yank 的语义直连词根（-ank 不在 §5.4 清单；近义 wrench C1 猛拧、猛扭（author_w2.js）为同义词而非词根，兄弟派生 §5.6 不成立），留空（判断项）；近义 wrench 猛拧（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('yarn', 'noun', '/jɑːn/', '', [], '纱线；线团；冗长的故事', 'Thread used for knitting, or a long interesting story.', [
    ['纱线；毛线', 'Thread spun from wool or cotton and used for knitting or sewing.', '用羊毛或棉纺成、用于编织或缝纫的线。', '材料义常不可数，指某一股或某一种线时可数。', 'She chose a soft blue yarn for the scarf.', '她给围巾选了一种柔软的蓝色毛线。', ['a ball of yarn', 'soft yarn'], ['thread', 'wool'], 'noun', 'uncountable', '家居'],
    ['故事；奇谈', 'A long, often exaggerated story that somebody tells to entertain others.', '为了逗乐别人而讲的冗长、常带夸张的故事。', '可数，常见 spin a yarn、tell a yarn 两个说法。', 'He spun a yarn about his travels.', '他讲了一个关于自己旅行的长长的故事。', ['spin a yarn', 'tell a yarn'], [], 'noun', 'countable', '文学'],
  ], 'yarns', ['thread', 'wool'], 'brief 显示 ←?，按 §5.2 自扫：库内无 yarn 的语义直连词根（-arn 不在 §5.4 清单；家族/近义 thread B1 线（author_t1.js）、wool B1 羊毛（author_w2.js）为家族与近义词而非词根，非派生关系，兄弟派生 §5.6 不成立），留空（判断项）；家族 thread 线、wool 羊毛（队列原样，入第 10 参），近义 thread、wool 置首义项各恰好一次');

  W('yeah', 'adverb', '/jeə/', '', ['CET4'], '是；对（非正式应答）', 'An informal way of agreeing or giving a positive answer.', [
    ['是；对（非正式）', 'A casual word used to agree with somebody or to answer a question positively.', '用来同意某人或对问题作肯定回答的随意说法。', '口语应答语，作状语，常修饰动词短语或单独成句；语气比 yes 随意，正式场合少用。', 'Yeah, we can meet after work.', '行，我们下班后可以见。', ['yeah sure', 'say yeah'], ['yes'], 'adverb', '不及物', '口语'],
  ], '', ['yes'], 'brief 显示 ←?，按 §5.2 自扫根 yes A1 是、对（author_y1.js 第 4 参），语义完全直连，但词形不含 yes 整段（yeah 经中间形式 yea，yea 不在库），参照 cuss←curse B1 口语变体分级留空先例（cuss 词条备注记「同源的口语变体…分级留空」）、aye←yea 变体留空先例；nope←no A1 先例因词形含 no 整段可见而不适用，拿不准，留空（判断项：反证 cet_wordlist.csv 的 derived 列标 yes→yeah、yes 词条 fam/syn 已收 yeah，供主 agent 裁定改 A1）；家族 yes 是（队列原样，入第 10 参），近义 yes 置唯一义项恰好一次；CET4 标签照抄队列');

  W('yearly', 'adjective/adverb', '/ˈjɪəli/', 'A1', ['CET4'], '每年的；每年一度', 'Happening once a year, or every year.', [
    ['每年的；一年一次的', 'Happening or done only once in every year.', '一年之内只发生或进行一次的。', '定语表语两用，可替换 annual，年报、年刊常见。', 'The report gives a yearly summary of sales.', '这份报告给出了销售的年度总结。', ['a yearly report', 'yearly income'], ['annual'], 'adjective', '定语/表语', '通用'],
    ['每年；一年一度', 'Every year, at the same time each year.', '每年一次、按年发生。', '频率副词，修饰动词或全句，说明每年一次。', 'The magazine is published yearly in spring.', '这本杂志每年春季出版一期。', ['published yearly'], [], 'adverb', '不及物', '通用'],
  ], '', ['year'], 'brief 根提示 ←year A1 年（noun，自扫 author_y1.js 第 4 参复核 A1）+ -ly（-ly 在 §5.4 清单），「每年一次的」与 year 语义直连，A1 继承（判断项披露：-ly 接名词构成形容词/副词，库内 annually←annual B1 先例，cet_wordlist.csv 的 derived 列标 year→yearly）；家族 year 年（队列原样，入第 10 参），近义 annual 每年的置首义项恰好一次；CET4 标签照抄队列');

  W('yielding', 'adjective', '/ˈjiːldɪŋ/', 'B2', [], '柔顺的；易弯曲的；顺从的', 'Soft and flexible under pressure, or willing to give way.', [
    ['柔顺的；易弯曲的', 'Soft enough to bend easily when you press it.', '受压时容易弯曲的。', '定语表语两用，形容土地、材料、表面等受力让位的性质。', 'Rain turned the track into a soft, yielding surface.', '雨水把小径变成了一层松软而有弹性的路面。', ['yielding soil', 'a yielding surface'], ['soft'], 'adjective', '定语/表语', '自然'],
    ['顺从的；让步的', 'Willing to agree with other people rather than to argue.', '愿意依从别人而不再争执的。', '定语表语两用，可形容人的性情或态度，略带消极色彩。', 'A yielding attitude helped both sides reach a deal.', '让步的态度帮助双方达成了协议。', ['a yielding attitude'], [], 'adjective', '定语/表语', '性格'],
  ], '', ['yield'], 'brief 显示 ←?，按 §5.2 自扫根 yield B2 屈服、让步、产出（author_y1.js 第 4 参）+ -ing（-ing 在 §5.4 清单），语义直连核对通过：受力让位→易弯曲、让步→顺从，且 yield 词条备注点名词 yielding 作形容词是「易弯曲的、顺从的」，B2 继承；近义 soft 柔软的（队列原样，置首义项恰好一次）');

  W('yonder', 'adjective/adverb', '/ˈjɒndə/', '', [], '那边的；在远处（地）', 'Over there at a distance, or used to refer to something over there.', [
    ['在那边；往远处', 'At or in a place a short distance away from where the speaker is.', '在离说话人有一段距离的地方。', '地点副词，修饰动词，常见 over yonder，多见于文学与方言。', 'We pitched the tent just over yonder.', '我们就在那边搭了帐篷。', ['over yonder'], ['there'], 'adverb', '不及物', '通用'],
    ['那边的；远处的', 'Used to describe something that lies over there in the distance.', '用来指明某物在那边远处。', '只作定语，置于名词前，正式语体多改用 that。', 'We can see yonder village from the hill.', '我们从山上能看见那边的村子。', ['yonder hill', 'yonder village'], [], 'adjective', '定语', '书面'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 yonder 的语义直连词根（-der 不在 §5.4 清单，yon- 不在库；近义 there A1 那里（author_t1.js）为指示副词而非词根，非派生关系），留空（判断项）；近义 there 那里（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('young man', 'noun', '/ˌjʌŋ ˈmæn/', '', [], '年轻人；小伙子', 'A male who is young, usually in his late teens or early adulthood.', [
    ['年轻男子；小伙子', 'A man who is in his youth or early adulthood.', '处于青年时期或刚成年的男子。', '可数，复数写作 young men；正式语体多说 young male。', 'A young man asked me the way to the station.', '一个年轻人问我去车站的路。', ['a young man'], ['youth'], 'noun', 'countable', '通用'],
    ['（称呼）小伙子', 'A form of address used when speaking to a young male.', '对年轻男子说话时的称呼语。', '口语称呼，前面常加 excuse me 等缓和语气。', 'The old gentleman said, young man, take my seat.', '那位老先生说，小伙子，坐我的位子吧。', ['address a young man'], [], 'noun', 'countable', '社交'],
  ],'young men', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 youth 年轻人、青年（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('youngsters', 'noun', '/ˈjʌŋstəz/', 'B2', [], '年轻人；少年们', 'Children or young people, thought of as more than one person.', [
    ['年轻人；少年（复数）', 'Children or teenagers considered together as more than one person.', '把多个孩子或少年放在一起看。', 'youngster 的复数形式单列词条；作主语时谓语用复数。', 'The youngsters waited by the school gate.', '孩子们在校门口等着。', ['a group of youngsters', 'local youngsters'], ['youth'], 'noun', 'countable', '通用'],
    ['年轻新手；年轻选手（复数）', 'Young people who are new to a job, a team or a sport.', '刚进入某个工作、团队或运动项目的年轻人。', '复数形式，新闻里常与 sign、promising 连用。', 'The club signed two youngsters last season.', '俱乐部上个赛季签下了两名年轻选手。', ['sign youngsters'], [], 'noun', 'countable', '体育'],
  ],'youngsters', [], 'brief 根提示 ←youngster B2 年轻人、少年（noun，自扫 author_y1.js 第 4 参复核 B2），本词为 youngster 的复数形式单列词条，按 §4 forms 留空，B2 继承（判断项披露：复数单列，同库内 troops←troop B2 先例）；近义 youth 年轻人、青年（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('youthful', 'adjective', '/ˈjuːθfl/', 'B1', ['CET4'], '年轻的；富有青春活力的', 'Looking young, or full of the energy typical of young people.', [
    ['显得年轻的；外表年轻的', 'Looking younger than somebody really is, or having young features.', '看上去比实际年龄轻，或面貌显得年轻。', '定语表语两用，形容外表、容貌、体态。', 'She still has a youthful face at fifty.', '她五十岁了仍有一张年轻的脸。', ['a youthful appearance', 'a youthful face'], ['young'], 'adjective', '定语/表语', '外貌'],
    ['朝气蓬勃的；富有青春活力的', 'Full of energy and enthusiasm like a young person.', '像年轻人那样充满干劲与热情的。', '定语表语两用，形容精神、作风、团队。', 'The team played with youthful energy.', '这支球队打出了年轻人般的冲劲。', ['youthful energy'], [], 'adjective', '定语/表语', '性格'],
  ], '', ['youth'], 'brief 显示 ←?，按 §5.2 自扫根 youth B1 青年时代、青春（author_y1.js 第 4 参）+ -ful（-ful 在 §5.4 清单），youthful 形段全含 youth（youth+ful），语义直连（充满青春→年轻、有活力），B1 继承；近义 young 年轻的（队列原样，置首义项恰好一次），young A1 不作取根（词首非全段共享，兄弟派生 §5.6 不成立，cet_wordlist.csv 的 derived 列亦标 youth→youthful）；CET4 标签照抄队列');

  W('yummy', 'adjective', '/ˈjʌmi/', '', [], '好吃的；美味的', 'Tasting very good, said especially about food.', [
    ['好吃的；美味的（口语）', 'Having a very pleasant taste, used mainly in speech.', '味道很好，主要用于口语。', '定语表语两用，多用于食物，常见于儿童与轻松场合。', 'The children said the soup was yummy.', '孩子们说这汤很好喝。', ['a yummy lunch'], [], 'adjective', '定语/表语', '口语'],
  ], '', ['delicious'], 'brief 显示 ←?，按 §5.2 自扫：-y 形容词后缀按 §5.4 4b 须根词全段可见且在库，语义基 yum 不在库、库内无词源根，留空；家族 delicious 好吃的、美味的（队列原样，入第 10 参）；近义队列为空故义项近义 []');
})(typeof window !== 'undefined' ? window : globalThis);
