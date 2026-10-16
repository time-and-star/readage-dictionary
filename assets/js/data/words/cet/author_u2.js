/* data/words/cet/author_u2.js — U 批次 2，缺口 u-boat ~ uncommon，共 31 条
 * （31 单词 + 0 短语；本批无短语条目，u-boat 虽含连字符但按普通名词条目处理，不标 .phrase）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_u2.txt，001-031，词头无残缺）。
 * CET 标签照抄队列：CET4 × 2（ultimately、uncertainty），CET6 × 0，其余 29 条 []。
 * brief：%TEMP%\opencode\_u2_brief.txt 共 31 行，与本批 31 个单词逐行一一对应（首行 u-boat、末行 uncommon），
 *   词序、CET 列与 refs 列均与任务明细一致，未发现缺口错位；1 行给出根提示
 *   （ultimately ←ultimate [B2] adjective/noun），30 行显示 ←?，一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf("W('词头'") 定位后取第 4 参，扫 assets/js/data/words/cet 下
 *    author_*.js 与 pending_*.js，curated.js 取 level 字段，未 require 全库）。
 * 扫根结论（自扫，第 4 参）：able A2、accompany B2、achieve A2（库内另有派生形容词 achievable B2）、
 *   adorn C1、affect B2（库内另有派生 affected B2）、aid B1、alter B2、assume B2、attain C1
 *   （库内另有派生 attainable C1）、attract A2（库内另有派生 attractive A2）、avoid A2、aware B1、
 *   bear A2、believe A1（库内另有派生 believable A1）、bias B2（库内另有派生 biased B2）、
 *   bend B1、bound B2（库内另有派生 bounded B2，词内含「界限；范围」「受约束的」义项）、break A1、
 *   certain A2 / certainty A2、chain A2、change A1（库内另有派生 changing A1）、clear A1、
 *   comfort B1（库内另有派生 comfortable B1）、common A2、ultimate B2（brief 提示，自扫同级）；
 *   根不在库或无级者：cease（author_c1.js 第 4 参为 ''）、assail、canny、empire（B1，与 umpire 语义不直连）。
 * · 继承（25 条；除 ultimately 外均为 §5.3 un- 前缀性成分取其后成分，逐条在备注披露判断项）：
 *   ultimately←ultimate B2 + -ly（brief 根提示，-ly 在 §5.4 清单，非判断项）；
 *   unable←able A2、unaware←aware B1、unchain←chain A2、unclear←clear A1、uncommon←common A2（基词即词根）；
 *   unachievable←achievable B2、unaffected←affected B2、unattainable←attainable C1、
 *   unattractive←attractive A2、unbelievable←believable A1、unbiased←biased B2、unbounded←bounded B2
 *   （基词为库内独立形容词条目，直接取其第 4 参）；uncertainty←certainty A2、unchanging←changing A1、
 *   uncomfortable←comfortable B1（同上，基词在库；词根 certain/change/comfort 与之同级）；
 *   unaccompanied←accompany B2 + -ed、unadorned←adorn C1 + -ed、unaided←aid B1 + -ed、
 *   unaltered←alter B2 + -ed、unassuming←assume B2 + -ing、unavoidable←avoid A2 + -able、
 *   unbearable←bear A2 + -able（基词不在库，回溯词根 + 透明后缀，-ed/-ing/-able 均在 §5.4 清单）；
 *   unbent←bend B1、unbroken←break A1（前缀后成分为 bend/break 的过去分词 bent/broken，库内无独立词条，
 *   取其词根，否定方向语义直连）。
 *   判断项（级差，供主 agent 裁定）：unachievable 取基词 achievable B2，未取词根 achieve A2
 *   （依 §5.3「取前缀后成分且在库」，与 disinformation←inform 等词根式写法并存，见备注）。
 * · 留空（6 条，均写入备注）：u-boat（首成分 U 为字母，字母词 §5.7）、ulcer（-cer 不在 §5.4 清单，
 *   库内无语义直连根）、umpire（-pire 不在清单，empire B1 形近但「帝国」与「裁判」不直连，切词假象 §5.7）、
 *   unassailable（assail 不在库，-able 透明但无在库根可继）、uncanny（canny 不在库，-ny 不在清单）、
 *   unceasing（根 cease 在库但第 4 参为 ''，根词本身无 CEFR，§5.7）。
 * CEFR 分布（31 单词）：A1 × 4（unbelievable、unbroken、unchanging、unclear）、
 *   A2 × 7（unable、unattractive、unavoidable、unbearable、uncertainty、unchain、uncommon）、
 *   B1 × 4（unaided、unaware、unbent、uncomfortable）、
 *   B2 × 8（ultimately、unachievable、unaffected、unaccompanied、unaltered、unassuming、unbiased、unbounded）、
 *   C1 × 2（unadorned、unattainable）、留空 × 6（u-boat、ulcer、umpire、unassailable、uncanny、unceasing）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_u2.js 必须在 _cet_helper.js 之后加载');

  W('u-boat', 'noun', '/ˈjuːbəʊt/', '', [], 'U 型潜艇；德国潜艇', 'A submarine whose name comes from the German Unterseeboot, meaning undersea boat.', [
    ['（两次世界大战中的）德国潜艇', 'A submarine used by the German navy, especially in the two world wars.', '两次世界大战期间德国海军使用的潜艇。', '可数，词头含连字符但按普通名词条目处理；源自德语 Unterseeboot（水下之船），首字母 U 常大写。', 'The convoy was attacked by a U-boat off the coast.', '船队在沿海遭到一艘德国潜艇的袭击。', ['a U-boat attack', 'sink a U-boat'], ['submarine'], 'noun', 'countable', '军事'],
  ], 'u-boats', [], 'brief ←?，按 §5.2 自扫：库内无 u-boat 的语义直连根，首成分 U 是字母（缩略自德语 Unterseeboot 潜艇），字母词按 §5.7 留空（判断项）；词头含连字符但按普通词条处理，非短语；近义 submarine 潜艇（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('ulcer', 'noun', '/ˈʌlsə/', '', [], '皮肤或黏膜上的溃烂伤口', 'A slow-healing open sore on the skin or inside the body.', [
    ['（皮肤或体内的）溃疡', 'A damaged area on the skin or on a lining inside the body that is painful and slow to heal.', '皮肤或体内黏膜上疼痛且不易愈合的破损部位。', '可数，常见搭配 stomach ulcer 胃溃疡、mouth ulcer 口腔溃疡。', 'He has been treated for a stomach ulcer for months.', '他因胃溃疡已经治疗了好几个月。', ['a stomach ulcer', 'an ulcer in the mouth'], ['sore'], 'noun', 'countable', '健康'],
  ], 'ulcers', [], 'brief ←?，按 §5.2 自扫：库内无 ulcer 的语义直连词根（-cer 不在 §5.4 清单，库内亦无同源在库根），留空（判断项）；近义 sore 溃疡处、疮口（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('ultimately', 'adverb', '/ˈʌltɪmətli/', 'B2', ['CET4'], '最终；归根结底', 'In the end, or at the most basic level.', [
    ['最终；最后', 'When everything has been taken into account, or as the final result.', '在一切都被考虑进来之后，或作为最终结果。', '修饰动词。也可修饰整个句子，说明事情的最终结果。', 'The project will ultimately succeed.', '这个项目最终会成功。', ['ultimately depend on', 'lead ultimately to'], ['eventually'], 'adverb', '不及物', '通用'],
    ['归根结底；从根本上说', 'At the most basic level of a fact or an argument.', '从事实或论述的最根本层面来看。', '修饰动词。把讨论引向根本原因或本质。', 'All disputes are ultimately about money.', '一切争端归根结底都是钱的问题。', ['ultimately a question of'], [], 'adverb', '不及物', '书面'],
  ], '', ['eventually'], 'brief 根提示 ←ultimate B2 最终的（自扫 author_u1.js 第 4 参复核为 B2）+ -ly（-ly 在 §5.4 清单），与「最终地」语义直连，B2 继承；家族/近义 eventually 最终、终于（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）；CET4 标签照抄队列');

  W('umpire', 'noun/verb', '/ˈʌmpaɪə/', '', [], '（比赛）裁判；（纠纷）裁决', 'A person who controls a game, or one who settles a disagreement.', [
    ['（体育比赛的）裁判员', 'An official who controls a game and makes sure the rules are followed.', '执掌比赛、监督规则执行的官员。', '可数，棒球、网球、板球等多用 umpire，足球多用 referee。', 'The umpire called the ball out.', '裁判判这个球出界。', ['the umpire decision', 'appoint an umpire'], ['referee'], 'noun', 'countable', '体育'],
    ['裁决；充当裁判（动词）', 'To act as the person who decides the result or settles a dispute.', '充当裁定结果或裁决纠纷的人。', '及物动词，宾语是比赛或争端，常见 umpire a match、umpire a dispute。', 'She was asked to umpire the dispute between the two firms.', '她被请去裁决这两家公司之间的纠纷。', ['umpire a match', 'umpire a dispute'], [], 'verb', '及物', '法律'],
  ], 'umpires~umpired~umpired~umpiring', ['referee'], 'brief ←?，按 §5.2 自扫：库内无 umpire 的语义直连词根（-pire 不在 §5.4 清单；empire B1 帝国（author_e2.js 第 4 参）与「裁判」语义不直连，形近非派生，切词假象 §5.7），留空（判断项）；家族/近义 referee 裁判（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）；名词/动词混合，按 §4 取动词 4 形');

  W('unable', 'adjective', '/ʌnˈeɪbl/', 'A2', [], '不能的；没有能力的', 'Not able to do something, or lacking the ability.', [
    ['不会的；做不到的', 'Not having the skill, time or chance to do something.', '没有技能、时间或机会去做某事。', '表语形容词，后接 to do；比 cannot 略正式，语气较客气。', 'She was unable to attend the meeting.', '她没能参加这次会议。', ['unable to do sth', 'unable to pay'], [], 'adjective', '表语', '通用'],
  ], '', ['able'], 'brief ←?，按 §5.3 自扫：un- 为前缀性成分不作根，取其后词根 able A2 能够的（author_a1.js 第 4 参），否定方向语义直连（不能的←能够的），A2 继承（判断项披露）；家族 able 能够的（队列原样，入第 10 参）；队列 syn 为空，故义项近义为 []');

  W('unaccompanied', 'adjective', '/ˌʌnəˈkʌmpənid/', 'B2', [], '无人陪伴的；不附伴奏的', 'Happening or performed without anyone else being with you.', [
    ['无人陪伴的；独自的', 'Travelling or present without another person with you.', '出行或在场时没有他人陪伴。', '定语表语两用，常见于机票、医院、儿童等语境。', 'The unaccompanied traveller boarded the last flight.', '这位无人陪同的旅客登上了最后一班航班。', ['an unaccompanied adult', 'unaccompanied baggage'], ['solo'], 'adjective', '定语/表语', '交通'],
    ['（乐曲）无伴奏的', 'Played or sung without any other instrument joining in.', '演奏或演唱时没有其他乐器加入。', '多作定语，音乐语境。', 'The singer gave an unaccompanied performance of the folk song.', '这位歌手无伴奏演唱了那首民歌。', ['an unaccompanied song'], [], 'adjective', '定语', '艺术'],
  ], '',['accompany'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 accompanied 不在库，取词根 accompany B2 陪伴（author_a1.js 第 4 参）+ -ed（-ed 在 §5.4 清单），否定方向语义直连（无人陪伴←陪伴），B2 继承（判断项披露）；近义 solo 独自的、无伴奏的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unachievable', 'adjective', '/ˌʌnəˈtʃiːvəbl/', 'B2', [], '无法实现的；达不到的', 'Not possible to reach or succeed in.', [
    ['无法达到的；办不到的', 'Too difficult to achieve, whatever effort you make.', '无论怎样努力也难以达成。', '定语表语两用，常与 goal、target、dream 连用。', 'An unachievable target only frustrates the team.', '一个无法实现的目标只会打击团队。', ['an unachievable goal', 'prove unachievable'], ['impossible'], 'adjective', '定语/表语', '通用'],
  ], '', ['impossible'], 'brief ←?，按 §5.3 自扫：un- 为前缀性成分不作根，取其后基词 achievable B2 可实现的（author_a7.js 第 4 参）在库且语义直连（不可实现的←可实现的），B2 继承（判断项：基词级别高于词根 achieve，取基词级，见头注释，供主 agent 裁定）；家族/近义 impossible 不可能的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('unadorned', 'adjective', '/ˌʌnəˈdɔːnd/', 'C1', [], '不加装饰的；朴素的', 'Plain and not decorated, or stated without any exaggeration.', [
    ['不加装饰的；朴实无华的', 'Not decorated or made more attractive than necessary.', '没有装饰，也不多余地美化。', '定语表语两用，书面语，常形容房间、文字、风格。', 'The walls were bare and unadorned.', '四壁空空，毫无装饰。', ['an unadorned wall', 'unadorned prose'], ['plain'], 'adjective', '定语/表语', '艺术'],
    ['（叙述）不加渲染的', 'Giving the facts exactly as they are, with nothing added to make them seem better.', '把事实原原本本地说出，不加美化。', '多作定语，形容事实、叙述、报告。', 'He gave an unadorned account of the events.', '他对这些事件作了不加渲染的叙述。', ['an unadorned account'], [], 'adjective', '定语', '书面'],
  ], '',['adorn'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 adorned 不在库，取词根 adorn C1 装饰（author_a8.js 第 4 参）+ -ed（-ed 在 §5.4 清单），否定方向语义直连（不加装饰←装饰），C1 继承（判断项披露）；近义 plain 朴素的、素净的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unaffected', 'adjective', '/ˌʌnəˈfektɪd/', 'B2', [], '没有变化的；不造作的', 'Not changed or influenced by something, or natural and sincere.', [
    ['未受影响的；未改变的', 'Not altered or influenced by an event or a situation.', '没有因某件事或某种情况而改变。', '表语常用 unaffected by；定语表语两用。', 'Most local shops were unaffected by the strike.', '多数本地商店没有受到罢工影响。', ['unaffected by', 'remain unaffected'], ['immune'], 'adjective', '定语/表语', '通用'],
    ['自然的；不矫饰的', 'Sincere and relaxed, without making any effort to impress.', '真诚放松，毫不刻意表现自己。', '多作表语，形容人的举止、态度。', 'Her manner was calm and completely unaffected.', '她的举止平静而毫不造作。', ['an unaffected manner'], [], 'adjective', '表语', '性格'],
  ], '',['affect'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 affected B2 受影响的（author_a9.js 第 4 参）在库，词根 affect 与之同级，否定方向语义直连（未受影响←影响），B2 继承（判断项披露）；近义 immune 免受……影响的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unaided', 'adjective', '/ʌnˈeɪdɪd/', 'B1', [], '无人协助的；独立完成的', 'Not receiving help from anyone or anything.', [
    ['无援助的；独自完成的', 'Done by somebody alone, without help from any person or tool.', '由某人独自完成，没有他人或工具相助。', '定语表语两用，常见 by、with 结构，如 with the unaided eye。', 'The island is visible to the unaided eye from the headland.', '从海角处用肉眼就能看见这座岛。', ['the unaided eye', 'unaided by others'], ['naked'], 'adjective', '定语/表语', '通用'],
  ], '',['aid'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 aided 不在库，取词根 aid B1 帮助（author_a2.js 第 4 参）+ -ed（-ed 在 §5.4 清单），否定方向语义直连（无援助←帮助），B1 继承（判断项披露）；近义 naked 肉眼的、无遮蔽的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unaltered', 'adjective', '/ʌnˈɔːltəd/', 'B2', [], '原样的；未改动的', 'Left in its original state, with nothing changed.', [
    ['未改变的；保持原样的', 'Staying exactly as it was, with no change made to it.', '与原来完全一样，没有任何改动。', '定语表语两用，常与 remain、be 连用。', 'The original document remains unaltered.', '原始文件未作改动。', ['remain unaltered', 'an unaltered state'], ['intact'], 'adjective', '定语/表语', '书面'],
  ], '',['alter'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 altered 不在库，取词根 alter B2 改变（author_a2.js 第 4 参）+ -ed（-ed 在 §5.4 清单），否定方向语义直连（未改变←改变），B2 继承（判断项披露）；近义 intact 完好无损的、未受触动的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unassailable', 'adjective', '/ˌʌnəˈseɪləbl/', '', [], '攻不破的；无可辩驳的', 'Impossible to attack, doubt or disprove.', [
    ['攻不破的；牢不可破的', 'Too strong or too well defended to be attacked successfully.', '过于坚固或防守严密而无法攻破。', '定语表语两用，可指城堡、阵地、优势。', 'The castle was thought to be unassailable.', '这座城堡被认为攻不可破。', ['an unassailable position'], ['watertight'], 'adjective', '定语/表语', '军事'],
    ['无可辩驳的；无懈可击的', 'Impossible to criticize or to prove wrong.', '无法批评，也挑不出错。', '多作定语，形容论点、理由、纪录。', 'She built an unassailable case for reform.', '她为改革立的论据无懈可击。', ['an unassailable argument'], [], 'adjective', '定语', '书面'],
  ], '', [], 'brief ←?，按 §5.2 自扫：库内无 assail 词条（-able 虽在 §5.4 清单但无在库直连根可继），留空（判断项）；近义 watertight 无懈可击的、严丝合缝的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unassuming', 'adjective', '/ˌʌnəˈsjuːmɪŋ/', 'B2', [], '谦逊的；不摆架子的', 'Simple and quiet, without trying to seem important.', [
    ['谦逊的；不张扬的', 'Not trying to seem more important than you really are.', '不把自己表现得比实际更重要。', '定语表语两用，常形容人及其举止、住所。', 'He is a quiet, unassuming man who rarely gives interviews.', '他是个安静谦逊的人，很少接受采访。', ['an unassuming manner', 'an unassuming person'], ['humble', 'modest'], 'adjective', '定语/表语', '性格'],
  ], '',['assume'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 assuming 不在库，取词根 assume B2 假定、摆出（author_a5.js 第 4 参，其义项 3「呈现出；摆出」assume an air of 与「不摆架子」语义直连）+ -ing（-ing 在 §5.4 清单），B2 继承（判断项披露）；近义 humble 谦逊的与 modest 谦虚的（队列原样，置唯一义项各恰好一次）；fam 队列为空故第 10 参 []');

  W('unattainable', 'adjective', '/ˌʌnəˈteɪnəbl/', 'C1', [], '达不到的；无法获得的', 'Impossible to reach, achieve or obtain.', [
    ['达不到的；无法实现的', 'Beyond your power to reach, even with a lot of effort.', '即使付出很大努力也无法达到。', '定语表语两用，常与 goal、level、dream 连用。', 'For many families, home ownership remains unattainable.', '对许多家庭来说，买房仍遥不可及。', ['an unattainable goal', 'remain unattainable'], ['impossible'], 'adjective', '定语/表语', '通用'],
  ], '',['attain'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 attainable C1 可达到的（author_a12.js 第 4 参）在库，词根 attain 与之同级，否定方向语义直连（达不到←达到），C1 继承（判断项披露）；近义 impossible 不可能的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unattractive', 'adjective', '/ˌʌnəˈtræktɪv/', 'A2', [], '不吸引人的；难看的', 'Not pleasant to look at, and not offering enough value to interest you.', [
    ['不好看的；丑的', 'Not pleasant to look at.', '看起来不讨人喜欢。', '定语表语两用，语气比 ugly 委婉。', 'The building is unattractive but solid.', '这栋楼不好看，但很结实。', ['an unattractive building', 'look unattractive'], ['ugly'], 'adjective', '定语/表语', '外貌'],
    ['（条件、机会）不诱人的', 'Not valuable or interesting enough to make somebody want it.', '价值或吸引力不够，不让人动心。', '多作定语或表语，形容价格、职位、条件。', 'The pay on offer was unattractive.', '开出的薪水不吸引人。', ['an unattractive salary'], [], 'adjective', '定语/表语', '商务'],
  ], '', ['ugly'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 attractive A2 有吸引力的（author_a12.js 第 4 参）在库，词根 attract 与之同级，否定方向语义直连（无吸引力←吸引），A2 继承（判断项披露）；家族/近义 ugly 难看的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('unavoidable', 'adjective', '/ˌʌnəˈvɔɪdəbl/', 'A2', [], '不可避免的；必然发生的', 'Sure to happen and impossible to prevent.', [
    ['免不了的；无法避免的', 'Impossible to prevent, or certain to happen.', '无法阻止，或者一定会发生。', '定语表语两用，主语常是事、后果、延误。', 'Some level of risk is unavoidable.', '某种程度的风险是不可避免的。', ['an unavoidable delay', 'prove unavoidable'], ['inevitable', 'necessary'], 'adjective', '定语/表语', '通用'],
  ], '', ['inevitable'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 avoidable 不在库，取词根 avoid A2 避免（author_a5.js 第 4 参）+ -able（-able 在 §5.4 清单），否定方向语义直连（不可避免←避免），A2 继承（判断项披露）；家族 inevitable 不可避免的（队列原样，入第 10 参）；近义 inevitable 与 necessary 必然的（队列原样，置唯一义项各恰好一次）');

  W('unaware', 'adjective', '/ˌʌnəˈweə/', 'B1', [], '不知道的；没有察觉的', 'Not knowing about something, or failing to notice it.', [
    ['不知道的；未意识到的', 'Not knowing that something exists or that something is happening.', '不知道某事存在，也不知道某事正在发生。', '表语形容词，后接 of 或 that 从句。', 'He was unaware of the danger until it was too late.', '他察觉到危险时已经太晚了。', ['unaware of', 'unaware that'], ['ignorant'], 'adjective', '表语', '心理'],
    ['没有察觉的；不知不觉的', 'Not noticing what is going on around you.', '没有注意到周围正在发生的事。', '多作表语，常与 completely、totally 连用。', 'She was completely unaware that anyone was watching.', '她完全没注意到有人在看。', ['totally unaware'], [], 'adjective', '表语', '心理'],
  ], '', ['ignorant'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 aware B1 意识到的（author_a5.js 第 4 参）在库，否定方向语义直连（不知道←知道），B1 继承（判断项披露）；家族/近义 ignorant 不知情的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('unbearable', 'adjective', '/ʌnˈbeərəbl/', 'A2', [], '难熬的；无法忍受的', 'Too unpleasant or painful for you to put up with.', [
    ['难以忍受的；受不了的', 'So unpleasant, painful or annoying that you cannot accept it.', '过于难受、痛苦或烦人而无法承受。', '定语表语两用，常与 heat、pain、noise 连用。', 'The heat in the attic was unbearable.', '阁楼里的热气让人受不了。', ['unbearable pain', 'become unbearable'], ['impossible'], 'adjective', '定语/表语', '健康'],
  ], '',['bear'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 bearable 不在库，取词根 bear A2 忍受（author_b1.js 第 4 参）+ -able（-able 在 §5.4 清单），否定方向语义直连（不可忍受←忍受），A2 继承（判断项披露）；近义 impossible 难以忍受的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unbelievable', 'adjective', '/ˌʌnbɪˈliːvəbl/', 'A1', [], '难以置信的；惊人的', 'Hard to believe, or extremely good.', [
    ['难以置信的', 'Difficult to believe because it is very surprising or very unlikely.', '因为过于惊人或不大可能而难以相信。', '定语表语两用，可表惊讶，也可表怀疑。', 'The speed of the change is unbelievable.', '变化之快令人难以置信。', ['an unbelievable story', 'almost unbelievable'], ['incredible'], 'adjective', '定语/表语', '通用'],
    ['（口语）极好的；极大的', 'Extremely good or extremely large, used to stress how impressive something is.', '极好或极大，用以强调令人赞叹。', '口语，多含褒义。', 'They scored an unbelievable goal in the last minute.', '他们在最后一分钟进了一个不可思议的球。', ['an unbelievable goal'], [], 'adjective', '定语', '口语'],
  ], '', ['incredible'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 believable A1 可相信的（author_b5.js 第 4 参）在库，词根 believe 与之同级（-able 兼 e→∅ 正字变化，§5.5），否定方向语义直连（难以置信←相信），A1 继承（判断项披露）；家族/近义 incredible 难以置信的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('unbent', 'adjective', '/ʌnˈbent/', 'B1', [], '未弯曲的；不屈服的', 'Not bent into a curve, and not forced to give in.', [
    ['未弯曲的；挺直的', 'Straight because nothing has forced it to curve.', '因为没有受力而保持笔直。', '多作表语，形容金属丝、别针、树枝等。', 'The wire was still unbent.', '这根金属丝仍未弯曲。', ['an unbent pin'], ['straight'], 'adjective', '表语', '工业'],
    ['未屈服的；不妥协的', 'Not willing to submit to pressure from other people.', '不肯向压力低头。', '多作表语，较文气，形容人的态度。', 'He remained unbent after years of criticism.', '多年批评之后他仍不屈服。', ['remain unbent'], [], 'adjective', '表语', '性格'],
  ], '',['bend'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 bent 不在库（为 bend 的过去分词），取词根 bend B1 弯曲（author_b2.js 第 4 参），否定方向语义直连（未弯曲←弯曲），B1 继承（判断项披露：前缀后成分为分词形式）；近义 straight 直的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unbiased', 'adjective', '/ʌnˈbaɪəst/', 'B2', [], '公正的；不偏不倚的', 'Free from prejudice or preference.', [
    ['公正的；无偏见的', 'Giving equal treatment to all sides, without favouring any of them.', '对各方一视同仁，不偏向任何一方。', '定语表语两用，常与 information、judgement、report 连用。', 'The report was compiled from unbiased sources.', '这份报告是根据不带偏见的资料编写的。', ['unbiased information', 'an unbiased view'], ['neutral'], 'adjective', '定语/表语', '书面'],
  ], '', ['neutral'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 biased B2 有偏见的（author_b5.js 第 4 参）在库，词根 bias 与之同级（-ed 兼辅音双写），否定方向语义直连（无偏见←偏见），B2 继承（判断项披露）；家族/近义 neutral 中立的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('unbounded', 'adjective', '/ʌnˈbaʊndɪd/', 'B2', [], '无限制的；无限的', 'Without any limits, or very large in amount.', [
    ['无限的；无边无际的', 'Very large and seeming to have no limit.', '大得好像没有边界。', '定语表语两用，常与 enthusiasm、energy、space 连用。', 'She showed unbounded enthusiasm for the project.', '她对这个项目表现出无限热情。', ['unbounded enthusiasm', 'unbounded space'], ['infinite'], 'adjective', '定语/表语', '通用'],
    ['不受约束的；无拘束的', 'Not limited by rules, duties or any outer boundary.', '不受规则、义务或任何外在界限的限制。', '正式书面语，多作定语，常与 authority、freedom 连用。', 'The council was given unbounded authority over the site.', '委员会被授予对该地块不受限制的管辖权。', ['unbounded authority'], [], 'adjective', '定语', '法律'],
  ], '',['bound'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 bounded B2 受限制的（author_b6.js 第 4 参）在库，词根 bound 与之同级且库内含「界限；范围」「受约束的」义项（author_b2.js），否定方向语义直连（无限←界限），B2 继承（判断项披露）；近义 infinite 无限的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unbroken', 'adjective', '/ʌnˈbrəʊkən/', 'A1', [], '完整的；连续不断的', 'Whole and undamaged, or continuing without a pause.', [
    ['完整的；未破损的', 'Whole and not damaged or cut into separate pieces.', '完好无损，没有碎裂或断开。', '定语表语两用，可指物体、纪录。', 'The plate survived the fall unbroken.', '盘子掉下去居然没碎。', ['an unbroken piece', 'an unbroken record'], ['whole'], 'adjective', '定语/表语', '通用'],
    ['连续不断的；未间断的', 'Continuing without being stopped or interrupted.', '一直持续，没有中断。', '多作定语，形容沉默、旅程、纪录、树林。', 'There was an unbroken line of trees along the road.', '路边是一排不断线的树。', ['an unbroken silence'], [], 'adjective', '定语', '通用'],
  ], '',['break'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 broken 不在库（为 break 的过去分词），取词根 break A1 打破（author_b3.js 第 4 参），否定方向语义直连（未打破←打破），A1 继承（判断项披露：前缀后成分为分词形式）；近义 whole 完整的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('uncanny', 'adjective', '/ʌnˈkæni/', '', [], '怪异的；离奇的', 'Odd in a way that is hard to explain.', [
    ['神秘得怪异的；不可思议的', 'Strange and mysterious, making you feel that something supernatural may be involved.', '奇怪而神秘，让人觉得可能有超自然因素。', '定语表语两用，常与 resemblance、coincidence、ability 连用。', 'The resemblance between the twins was uncanny.', '这对双胞胎相像得离奇。', ['an uncanny resemblance', 'an uncanny coincidence'], ['weird'], 'adjective', '定语/表语', '心理'],
  ], '', [], 'brief ←?，按 §5.2 自扫：库内无 canny 词条（-ny 不在 §5.4 清单），无在库语义直连根可继，留空（判断项）；近义 weird 奇怪的、怪异的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unceasing', 'adjective', '/ʌnˈsiːsɪŋ/', '', [], '从不间断的；长久持续的', 'Continuing without any break for a long time.', [
    ['不停的；持续不断的', 'Continuing all the time without stopping or growing weaker.', '一直不停，也不减弱。', '定语表语两用，正式语，常与 effort、search、noise 连用。', 'Her unceasing efforts finally paid off.', '她不懈的努力终于有了回报。', ['unceasing effort', 'unceasing noise'], ['relentless'], 'adjective', '定语/表语', '通用'],
  ], '', [], 'brief ←?，按 §5.2 自扫根 cease 停止（author_c1.js 第 4 参为无级）——根词在库但本身无 CEFR，按 §5.7「根词本身无 CEFR」留空；近义 relentless 不停的、不懈的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('uncertainty', 'noun', '/ʌnˈsɜːtnti/', 'A2', ['CET4'], '不确定；不确定性', 'A lack of certain knowledge about something.', [
    ['不确定；无把握', 'A state of not being sure about something, because you lack the facts or because the situation may change.', '由于缺少事实或情况可能变化而无法确定的状态。', '不可数，常与 about、as to 连用；用复数时指一件件具体的不确定之事。', 'There is considerable uncertainty about the future of the industry.', '这个行业未来有很大的不确定性。', ['uncertainty about', 'a climate of uncertainty'], ['doubt'], 'noun', 'uncountable', '社会'],
    ['不确定的事物；变动因素', 'Something that is not known and that may cause a situation to change.', '尚未知晓、可能使局面发生变化的事情。', '常用复数 uncertainties，作主语时谓语用复数。', 'The plan survived all the uncertainties of the first year.', '这个计划经受住了头一年的所有变数。', ['the uncertainties of life'], ['question'], 'noun', 'countable', '通用'],
  ], 'uncertainties', ['doubt'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 certainty A2 确定（author_c8.js 第 4 参）在库，词根 certain 与之同级，否定方向语义直连（不确定←确定），A2 继承（判断项披露）；家族 doubt 怀疑（队列原样，入第 10 参）；近义 doubt 与 question 疑问（队列原样，分别置义项 1、义项 2，各恰好一次）；CET4 标签照抄队列');

  W('unchain', 'verb', '/ʌnˈtʃeɪn/', 'A2', [], '解开锁链；解除束缚', 'To release somebody or something from chains or from control.', [
    ['解开锁链（字面）', 'To take off the chains that keep a person or an animal tied up.', '取下锁着人或动物的链子。', '及物动词，宾语是人或动物。', 'The guard unchained the dogs at daybreak.', '卫兵在破晓时给狗解开了链子。', ['unchain a dog'], [], 'verb', '及物', '社会'],
    ['使摆脱束缚（比喻）', 'To free somebody from a restriction that controls them.', '使某人摆脱限制着他的约束。', '及物动词，书面用法，宾语是人或组织。', 'The new rules unchained local businesses from old restrictions.', '新规定使本地企业摆脱了旧的限制。', ['unchain sb from sth'], ['unleash'], 'verb', '及物', '书面'],
  ], 'unchains~unchained~unchained~unchaining',['chain'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 chain A2 链子、链条（author_c2.js 第 4 参）在库且为词根本身，语义直连（解链←链），A2 继承（判断项披露）；近义 unleash 解开、释放（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unchanging', 'adjective', '/ˌʌnˈtʃeɪndʒɪŋ/', 'A1', [], '不变的；恒定的', 'Staying the same over a period of time.', [
    ['保持原样的；不变化的', 'Remaining the same and not developing or varying.', '保持原样，既不发展也不变化。', '定语表语两用，形容世界、习惯、性格。', 'The desert seems unchanging from one year to the next.', '这片沙漠年年看起来毫无变化。', ['an unchanging routine', 'remain unchanging'], ['static'], 'adjective', '定语/表语', '自然'],
    ['恒常不变的；始终如一的', 'Always true in the same way, with no variation.', '以同样方式始终成立，没有变化。', '多作定语，形容规律、模式、标准。', 'At a fixed pressure, water boils at an unchanging temperature.', '在气压固定时，水在恒定温度下沸腾。', ['an unchanging pattern'], ['uniform'], 'adjective', '定语', '科学'],
  ], '',['change'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 changing A1 变化的（author_c8.js 第 4 参）在库，词根 change 与之同级（-ing 兼去 e 正字变化，§5.5），否定方向语义直连（不变←变化），A1 继承（判断项披露）；近义 static 静止不变的（置义项 1）与 uniform 一贯相同的（置义项 2），均队列原样、各恰好一次；fam 队列为空故第 10 参 []');

  W('unclear', 'adjective', '/ˌʌnˈklɪə/', 'A1', [], '不清楚的；不明确的', 'Not easy to understand, or not known for certain.', [
    ['不清楚的；含糊的', 'Not easy to understand because the meaning or message is not expressed clearly.', '因为意思或信息没有表达清楚而难以理解。', '定语表语两用，形容说明、指令、发音。', 'The instructions were unclear, so nobody started.', '说明不清楚，所以没人动手。', ['unclear instructions', 'make sth unclear'], ['ambiguous', 'vague', 'opaque'], 'adjective', '定语/表语', '通用'],
    ['不明确的；未确定的', 'Not known or not decided for certain.', '尚未确定，也没有定论。', '多作表语，主语常是 outcome、situation、future。', 'The outcome of the talks remains unclear.', '会谈的结果仍未确定。', ['remain unclear', 'unclear whether'], ['indefinite', 'obscure'], 'adjective', '表语', '通用'],
  ], '', ['indefinite', 'vague'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 clear A1 清楚的（author_c2.js 第 4 参）在库且为词根本身，否定方向语义直连（不清楚←清楚），A1 继承（判断项披露）；家族 indefinite 不明确的、vague 含糊的（队列原样，入第 10 参，两者同时又是队列近义）；近义 ambiguous 歧义的、vague 含糊的、opaque 晦涩的（置义项 1）与 indefinite 不明确的、obscure 模糊的（置义项 2），均队列原样、各恰好一次');

  W('uncomfortable', 'adjective', '/ʌnˈkʌmftəbl/', 'B1', [], '不舒服的；不安的', 'Causing discomfort in the body or unease in the mind.', [
    ['让人疼痛或不适的', 'Causing pain or a lack of comfort in your body.', '使身体疼痛或不舒服。', '定语表语两用，形容椅子、鞋子、天气。', 'The plastic chair is uncomfortable to sit on.', '这把塑料椅子坐着不舒服。', ['an uncomfortable chair', 'feel uncomfortable'], [], 'adjective', '定语/表语', '家居'],
    ['不安的；不自在的', 'Making you feel embarrassed, worried or slightly afraid.', '让人尴尬、担忧或有些害怕。', '定语表语两用，形容谈话、沉默、处境。', 'There was an uncomfortable silence in the room.', '房间里有一阵令人不安的沉默。', ['an uncomfortable silence'], ['uneasy'], 'adjective', '定语/表语', '情感'],
  ], '',['comfort'], 'brief ←?，按 §5.3 自扫：un- 前缀后基词 comfortable B1 舒适的（author_c10.js 第 4 参）在库，词根 comfort 与之同级，否定方向语义直连（不舒服←舒服），B1 继承（判断项披露）；近义 uneasy 不安的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('uncommon', 'adjective', '/ʌnˈkɒmən/', 'A2', [], '不常见的；罕见的', 'Not usual, and therefore likely to be noticed.', [
    ['很少见的；不常发生的', 'Not happening or found very often.', '不常发生，也不容易见到。', '定语表语两用，比 rare 通用，常与 quite、rather 连用。', 'Snow is uncommon in this region.', '这个地区很少下雪。', ['quite uncommon', 'an uncommon event'], ['rare', 'scarce'], 'adjective', '定语/表语', '通用'],
  ], '', ['rare'], 'brief ←?，按 §5.3 自扫：un- 前缀后成分 common A2 常见的（author_c4.js 第 4 参）在库且为词根本身，否定方向语义直连（罕见←常见），A2 继承（判断项披露）；家族 rare 稀有的（队列原样，入第 10 参，同时又是队列近义）；近义 rare 与 scarce 缺乏的（队列原样，置唯一义项各恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
