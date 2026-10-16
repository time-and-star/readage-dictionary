/* data/words/cet/author_v2.js — V 批次 2，缺口 vacate ~ villa，共 31 条
 * （30 单词 + 1 短语；短语清单：valued at；单词条目一律不标 .phrase）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_v2.txt，词头无残缺；任务文件无 refs 列，refs 见 brief 文件）。
 * CET 标签照抄队列：CET4 × 6（valuable、vanity、variable、variety、verbal、vigorous），
 *   CET6 × 1（vaccinate），其余 24 条 []（含 1 条短语 valued at）。
 * brief：%TEMP%\opencode\_v2_brief.txt 共 30 行，与本批 30 个单词一一对应（首行 vacate、末行 villa），
 *   短语 valued at 不入 brief（与任务说明一致）；brief 的 refs 与任务清单 fam/syn 逐条比对一致（refs = syn 列 + fam 列），无错位。
 *   6 行给出根提示（vanish B2、van A2、vary B1、vehicle A2、view A2 ×2），24 行显示 ←?，
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + 正则取第 4 参，扫 assets/js/data/words/cet/author_*.js，
 *   未 require 全库，未改动任何文件；curated.js 不在 cet 目录、不含本批词）。
 * brief 根提示复核：vanish B2、vary B1、vehicle A2、view A2 自扫同级复核通过；
 *   ←van A2（vanity）按 §5.1 语义直连核对不通过——库内 van（author_v1.js）义为「厢式货车；先锋（队伍前列）」，
 *   与 vanity「虚荣」非现代语义直连（brief 只列同前缀根可能误链），未采用；自扫 vain B2（author_v1.js）
 *   语义直连但 vain 不是 vanity 的整段可见词首（vanity = van + -ity，vain ∉ vanity），无 ai→i 类词干正字先例，
 *   双向均不成立，故留空（判断项，供主 agent 裁定）。
 * 扫根结论（自扫，第 4 参；均 author_v1.js 除非另注）：vacant B2、vacation A2、vacuum B2、vaccine B2、
 *   value A2、van A2、vanish B2、vain B2、vapor B2、vary B1、vehicle A2、vendor B2、verb A1、victim B1、
 *   view A2、viewpoint B2、vigor B2、village A1；guard B1（author_g1.js）、revenge C1（author_r2.js）、
 *   avenge 第 4 参为空（author_a5.js，自身缺级）、extinct B2（author_e2.js）、arch B2（author_a4.js）、
 *   dome B2（author_d2.js）、safe A2、screen A2（author_s1.js）、traffic A1（author_t2.js）、hawk C1（author_h1.js）、
 *   sell A1（author_s5.js）、poison B1（author_p2.js）、porch B1（author_p2.js）、pest B2（author_p2.js）、
 *   linguistic B2（author_l2.js）、oral B1（author_o1.js）、literal B2（author_l2.js）、mammal B2（author_m1.js）、
 *   spectator B2（author_s3.js）、discriminate B1（author_d1.js）、parameter C1（author_p1.js）、quantity B1（author_q1.js）、
 *   diverse B1（author_d1.js）、range B1（author_r1.js）、strain B2（author_s4.js）、important A1（author_i1.js）、
 *   precious B2（author_p3.js）、worthwhile B2（author_w2.js）、energy A2（author_e2.js）、foul C1（author_f2.js）、
 *   cottage A2（author_c5.js）、mansion C1（author_m1.js）、wake A1（author_w1.js）、politics B1（author_p2.js）——
 *   后段词仅用于家族/近义核对，不作根。库内另核：veteran B2、vigilant、veterinary、vertebra、vigour、vapour 均不在库。
 * · 继承（16 单词）：
 *   vaccinate←vaccine B2 + -ate（e→ate 正字，先例 author_f7.js fortune + -ate(e→ate)、库内 passion+-ate、
 *     origin+-ate、temper+-ate，-ate 按 §4c 先例面裁定，判断项）；
 *   valuable←value A2 + -able（§5.4 清单内，e→a 正字）；
 *   vanguard←van A2（复合取首成分 §5.3，库内 van 义项 2「队伍前列、先锋」语义直连，判断项）；
 *   vanished←vanish B2 + -ed（§5.4 清单内）；
 *   vaporize←vapor B2 + -ize（§4c 先例面：specialize←special A2、stabilise←stable B2、unionize←union B1，判断项）；
 *   variable←vary B1 + -able（y→i 正字，先例 author_r6.js reliable←rely B1）、
 *   varied←vary B1 + -ed（§5.4 清单内）、
 *   variety←vary B1 + -ety（-ity 家族，y→i 正字；§4c 库内 -ity 先例面：author_u4.js unity←unit A2、
 *     sentimentality←sentiment C1，判断项）；
 *   vehicles←vehicle A2 + -s（复数形式单列词条，判断项，同 author_t8.js troops←troop B2、systems←system A2 先例）；
 *   vend←vendor B2（vendor = vend + -or，-or 在 §5.4 清单，vend 整段可见于 vendor 且语义直连；
 *     由库内派生词反向取级，先例 author_m6.js 词干 medic←medical B1，判断项）；
 *   verbal←verb A1 + -al（§5.4 清单内；库内 verb「动词、词语」与义项 2「（语法）动词构成的、言语的」语义直连，判断项）；
 *   victimise←victim B1 + -ise（§4c 先例面：stabilise←stable B2、sympathise←sympathy B2、specialize←special A2，判断项）；
 *   viewer←view A2 + -er（§5.4 清单内）、
 *   views←view A2 + -s（复数形式单列词条，判断项，同 troops、systems 先例）；
 *   vigorous←vigor B2 + -ous（§5.4 清单内，vigor 整段可见于 vigorous，先例 author_i9.js invigorates←vigor B2）；
 *   vigour←vigor B2（英式拼写同词变体 r→ur，语义完全同一，判断项；先例 author_n3.js
 *     neighbourhood←neighbor A2 英式拼写取级，区别于 author_s9.js savour 留空——该先例明言「库内无根」，
 *     本词库内有根 vigor，供主 agent 裁定）。
 * · 留空（14 单词 + 1 短语）：
 *   vacate（-ate 虽有库内先例，但先例均要求根词整段可见；vac 词干不在库，vacate 与 vacant/vacation 的词干
 *     存在 n→t 交替，库内无该类交替先例，留空判断项）、
 *   vanity（见上，brief 根 van 语义不直连、自扫根 vain 词形不整段可见）、
 *   vantage（词首 van A2 整段可见但「厢式货车、队伍前列」与「有利位置、优势」不直连，切词假象 §5.7；
 *     -age 虽有库内先例 blockage←block A2（author_b5.js）但根 vant 不在库；advantage A2 同源且语义相关，
 *     但共享段 vantage 非 advantage 词首（首段 ad-），兄弟派生 §5.6 不成立，留空判断项）、
 *   vault（-ault 不在 §5.4 清单，库内无直连根：arch/dome/safe 为家族与近义而非词根）、
 *   vengeance（根 venge 不在库，-ance 无根可继；avenge 在库但自身缺级；revenge C1 为家族/近义、词首非全段共享）、
 *   venom（-om 不在清单，poison 为近义非根）、veranda（-anda 不在清单，porch 为家族/近义非根）、
 *   verbatim（词首 verb A1 整段可见，但库内 verb 专指「动词」词类，与「逐字照原文的」非现代语义直连 §5.1，留空判断项）、
 *   vermin（-min 不在清单，pest 为近义非根）、vertebrate（-ate 有先例但根词 vertebra 不在库）、
 *   vet（veteran B2 词首 vet 整段可见，但「老兵、老手」与 vet「兽医、审查」两义均不直连，
 *     兽医为 veterinarian 截短、规范无截短继承条款，切词假象 §5.7，留空判断项）、
 *   vigil（-il 不在清单，vigilant/vigilance 不在库，wake 为近义非根）、
 *   vile（-ile 不在清单，foul 为近义非根）、
 *   villa（词形通过：villa 为 village 词首全段；§5.1 语义门不通过——别墅≠村庄，-illa 亦不在清单，留空判断项）；
 *   短语 valued at 按 §6 分级留空（短语整体不取成分作根）。
 * CEFR 分布（30 单词）：A1 × 1（verbal）、A2 × 5（valuable、vanguard、vehicles、viewer、views）、
 *   B1 × 4（variable、varied、variety、victimise）、B2 × 6（vaccinate、vanished、vaporize、vend、vigorous、vigour）、
 *   留空 × 14；短语 1 条留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_v2.js 必须在 _cet_helper.js 之后加载');

  W('vacate', 'verb', '/vəˈkeɪt/', '', [], '腾空离开；辞去（职务）', 'To move out of a place or give up a position, leaving it empty.', [
    ['腾出；空出（房间、房屋）', 'To leave a building, room or place, making it empty for somebody else.', '离开某建筑物、房间或场所，使其空出来供他人使用。', '及物动词，正式用语，宾语是房间、房屋、住所。', 'The tenants must vacate the flat by Friday.', '租户必须在星期五之前搬离这套公寓。', ['vacate a room', 'vacate the premises'], ['empty'], 'verb', '及物', '家居'],
    ['辞去（职位）；腾出（职务）', 'To leave a job, position or post so that it becomes available for somebody else.', '离开工作岗位或职务，使其可由他人接任。', '及物动词，正式用语，常与 position、post、throne 连用。', 'The chairman decided to vacate the post at once.', '主席决定立即辞去该职务。', ['vacate a post', 'vacate the throne'], [], 'verb', '及物', '职业'],
  ], 'vacates~vacated~vacated~vacating', [], 'brief ←?，按 §5.2 自扫根：库内 vacant B2、vacation A2、vacuum B2（均 author_v1.js 第 4 参）同源，但 vacate 的词首全段不与在库词共享（vacant/vacation 的词干 vacat- 与 vacate 存在 n→t 词干交替，库内无该类交替先例；-ate 虽有库内 passion+-ate、origin+-ate、temper+-ate、fortune+-ate 先例，但先例均要求根词整段可见，如 temper、fortune、vaccine、passion），无直连在库根可继，留空（判断项）；近义 empty 空出、腾空（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('vaccinate', 'verb', '/ˈvæksɪneɪt/', 'B2', ['CET6'], '给…接种疫苗；接种疫苗', 'To protect somebody from a disease by using a vaccine.', [
    ['给…接种疫苗', 'To inject somebody with a vaccine so that they become immune to a disease.', '给某人注射疫苗，使其获得对某种疾病的免疫力。', '及物动词，常见结构 vaccinate sb against 疾病，也用于被动。', 'All the children were vaccinated against measles.', '所有儿童都接种了麻疹疫苗。', ['vaccinate sb against measles', 'be vaccinated'], ['inject'], 'verb', '及物', '健康'],
    ['（人）接种疫苗；安排接种', 'To have a vaccine injected, or to arrange for people to be protected in this way.', '接受疫苗注射，或安排人群获得这种保护。', '多作不及物，常与 against 连用。', 'You should vaccinate before travelling abroad.', '出国之前应当接种疫苗。', ['vaccinate against flu'], [], 'verb', '不及物', '健康'],
  ], 'vaccinates~vaccinated~vaccinated~vaccinating', ['inject'], 'brief ←?，按 §5.2 自扫根 vaccine B2 疫苗（自扫 author_v1.js 第 4 参）+ -ate（e→ate 正字，先例 author_f7.js fortune + -ate(e→ate)；-ate 不在 §5.4 明示清单，按 §4c 库内先例面裁定：passion+-ate、origin+-ate、temper+-ate、facility+-ate、office+-ate），「接种疫苗←疫苗」语义直连，B2 继承（判断项）；家族/近义 inject 注射、注入（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET6 标签照抄队列');

  W('valuable', 'adjective', '/ˈvæljuəbl/', 'A2', ['CET4'], '贵重的；很重要的', 'Worth a lot of money, or very important in a situation.', [
    ['贵重的；值钱的', 'Having a high price or worth a lot of money.', '价格很高，或值很多钱。', '定语表语两用，指物品、珠宝、资料等。', 'The museum bought a valuable painting at the sale.', '博物馆在拍卖会上买下了一幅珍贵的画。', ['a valuable collection', 'valuable jewels'], ['precious'], 'adjective', '定语/表语', '金融'],
    ['很重要的；有价值的', 'Very useful or helpful, or of great importance.', '非常有用或帮助很大，或极为重要。', '定语表语两用，常与 to sb、for doing 连用。', 'Her advice proved valuable to the team.', '她的建议证明对团队很有价值。', ['valuable experience', 'valuable to learners'], ['important', 'worthwhile'], 'adjective', '定语/表语', '通用'],
  ], '', ['precious', 'worthwhile'], 'brief ←?，按 §5.2 自扫根 value A2 价值、估价（自扫 author_v1.js 第 4 参）+ -able（在 §5.4 清单；e→a 正字，先例 author_f4.js facility + -ate 词干正字、author_r6.js reliable←rely B1 y→i + -able），「有价值的←价值」语义直连，A2 继承；家族 precious 珍贵的、worthwhile 值得做的（队列原样，入第 10 参），近义 important 重要的置义项 2、precious 置首义项、worthwhile 置义项 2，均队列原样、各恰好一次；CET4 标签照抄队列');

  W('valued at', 'verb', '/ˈvæljuːd æt/', '', [], '估值为；作价为', 'To have a stated price or worth.', [
    ['估值为；作价为（金额）', 'To be estimated or judged to be worth a particular amount of money.', '被估算或判定为值某一金额。', '动词短语，常以被动结构 be valued at 出现，at 后接金额或价格。', 'The collection is valued at two million pounds.', '这批藏品估值为两百万英镑。', ['be valued at two million', 'valued at market price'], ['worth'], 'verb', '及物', '金融'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 worth 价值、值…（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('vanguard', 'noun', '/ˈvæŋgɑːd/', 'A2', [], '先锋；先驱；队伍前列', 'The leading position in a development, or the people who take it.', [
    ['先锋；先驱者', 'People or ideas that lead a development or a new movement.', '在发展或新思潮中走在最前面的人或思想。', '可数，常与 in、of 连用。', 'Artists of the vanguard reshaped the whole scene.', '先锋派艺术家们重塑了整个艺术界。', ['in the vanguard of change'], ['van'], 'noun', 'countable', '文化'],
    ['（军队或队伍的）前列；先头部队', 'The part of an army or group that goes first.', '军队或队伍中最先行进的部分。', '可数，常与 the 连用。', 'The vanguard reached the ridge before dawn.', '先头部队在拂晓前抵达了山脊。', ['the vanguard of the column'], [], 'noun', 'countable', '军事'],
  ], 'vanguards', ['van'], 'brief ←?，按 §5.2 自扫根：复合词 vanguard = van + guard，按 §5.3 取首成分 van A2 厢式货车、队伍前列（自扫 author_v1.js 第 4 参；库内 van 义项 2「队伍前列、先锋」与 vanguard 语义直连），A2 继承（判断项：复合词首成分裁定，同 §5.3 run-up←run、author_t8.js twelvemonth←twelve A1 先例；次成分 guard B1 不取，取语义中心的首成分）；家族/近义 van 先锋、队伍前列（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('vanished', 'adjective', '/ˈvænɪʃt/', 'B2', [], '消失的；消亡了的', 'No longer present, having disappeared completely.', [
    ['消失了的；不见了的', 'Not able to be seen any more, after disappearing.', '因消失而再也看不见的。', '定语表语两用，动词 vanish 的过去分词作形容词。', 'The bird had vanished into the trees.', '那只鸟已经消失在树林中。', ['vanished without trace', 'recently vanished species'], [], 'adjective', '定语/表语', '通用'],
    ['（物种、文化）消亡了的；灭绝的', 'No longer existing, because it has died out completely.', '不复存在，因为已彻底消亡。', '定语表语两用，指物种、文化、语言。', 'Many vanished cultures left these carvings.', '许多消亡的文化留下了这些雕刻。', ['a vanished species'], ['extinct'], 'adjective', '定语/表语', '自然'],
  ], '', ['extinct'], 'brief 根提示 ←vanish B2 消失、不见（自扫 author_v1.js 第 4 参复核为 B2）+ -ed（在 §5.4 清单，过去分词作形容词），B2 继承；家族/近义 extinct 灭绝的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('vanity', 'noun', '/ˈvænəti/', '', ['CET4'], '虚荣；自负；无价值的事物', 'Excessive self-admiration, or something worthless.', [
    ['虚荣；虚荣心', 'Excessive pride in your own appearance, abilities or achievements.', '对自己的外貌、能力或成就过分自豪。', '不可数，常与 of 连用，也见 a vanity 指具体表现。', 'Vanity made her ignore the warning.', '虚荣心让她无视了那句警告。', ['personal vanity', 'out of vanity'], ['ego', 'pride'], 'noun', 'uncountable', '心理'],
    ['（正式）虚荣的言行；虚饰之物', 'A behaviour or object that shows too much pride, or has no real value.', '表现过分自负的行为，或没有实际价值的东西。', '可数，正式用语，常见 the vanities of 结构。', 'He could not resist the vanity of listing his honours.', '他忍不住列出自己的荣誉，难掩自负。', ['the vanities of public life'], [], 'noun', 'countable', '社会'],
  ], 'vanities', [], 'brief 根提示 ←van A2 按 §5.1 核对不通过：库内 van（author_v1.js 第 4 参 A2）义为「厢式货车；队伍前列」，与 vanity「虚荣」非现代语义直连（brief 只列同前缀根可能误链）；按 §5.2 自扫 vain B2 徒劳的、自负的、虚荣的（author_v1.js 第 4 参）语义直连，但 vanity = van + -ity，vain 不是整段可见词首（vain ∉ vanity），库内无 ai→i 类词干正字先例；-ty/-ity 虽有库内先例 author_u4.js unity←unit A2，但根词不成立，留空（判断项，供主 agent 裁定）；近义 ego 自我、pride 骄傲（队列原样，置首义项各恰好一次）；fam 队列为空故第 10 参 []；CET4 标签照抄队列');

  W('vantage', 'noun', '/ˈvæntɪdʒ/', '', [], '优势；有利位置', 'A place or position that gives you an advantage.', [
    ['有利位置；优势地位', 'A position that gives you a good view or a better chance of success.', '能提供良好视野或更大成功机会的位置。', '可数，常见于 vantage point 一词。', 'They watched the parade from a vantage point above the square.', '他们从广场上方的有利位置观看游行。', ['a vantage point'], ['viewpoint'], 'noun', 'countable', '通用'],
    ['（竞争中的）优势；有利局面', 'A situation that gives somebody a better chance of winning.', '使某人更有机会取胜的局面。', '可数或不可数，正式用语。', 'The home side gained the vantage in the second half.', '主队在下半场取得了优势。', ['gain the vantage'], [], 'noun', 'countable', '体育'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：词首 van A2 整段可见（vantage = van + tage），但库内 van 两义「厢式货车、队伍前列」均与「有利位置、优势」非现代语义直连，切词假象（规范 §5.7，同 author_t8.js tuber←tub 拒绝先例）；-age 虽有库内先例 blockage←block A2（author_b5.js），但根词 vant 不在库；advantage A2（自扫 author_a1.js 第 4 参）与本词同源且语义相关，但共享段 vantage 不是 advantage 的词首全段（首段为 ad-），兄弟派生 §5.6 不成立，留空（判断项，供主 agent 裁定）；名词多以 vantage point 固定说法整体出现、少用复数，故 forms 留空；近义 viewpoint 观点、视角（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('vaporize', 'verb', '/ˈveɪpəraɪz/', 'B2', [], '（使）汽化；蒸发掉', 'To change into vapour, or to make something do so.', [
    ['汽化；蒸发', 'To change from a liquid into vapour.', '从液体变为蒸气。', '不及物动词，科学语境常用，英美通用拼写。', 'The water vaporized within seconds.', '水在几秒钟之内汽化了。', ['rapidly vaporize'], ['evaporate'], 'verb', '不及物', '科学'],
    ['使汽化；使蒸发掉', 'To make a liquid turn into vapour.', '使液体变为蒸气。', '及物动词，工业与科学语境。', 'The heat vaporized the fuel instantly.', '高温瞬间使燃料汽化了。', ['vaporize the metal'], [], 'verb', '及物', '工业'],
  ], 'vaporizes~vaporized~vaporized~vaporizing', ['evaporate'], 'brief ←?，按 §5.2 自扫根 vapor B2 蒸气、水汽（自扫 author_v1.js 第 4 参）+ -ize（不在 §5.4 明示清单，按 §4c 库内先例面裁定：specialize←special A2、stabilise←stable B2（author_s20.js）、unionize←union B1（author_u4.js）、库内 modernizes、moralizes），「使汽化←蒸气」语义直连，B2 继承（判断项）；家族/近义 evaporate 蒸发（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('variable', 'adjective/noun', '/ˈveəriəbl/', 'B1', ['CET4'], '易变的；变量', 'Likely to change, or a quantity that may take different values.', [
    ['易变的；多变的', 'Able to change or be changed, often in amount or speed.', '能够改变的，常指数量或速度上的变化。', '定语表语两用，形容天气、质量、性格。', 'The weather here is highly variable in spring.', '这里春天的天气变化无常。', ['variable weather', 'variable quality'], [], 'adjective', '定语/表语', '通用'],
    ['变量；可变因素', 'A number, quantity or factor that can change or be changed.', '能够改变或被改变的数字、量值或因素。', '可数，常与 dependent、independent 连用，科学与数学语境。', 'Temperature is the main variable in the experiment.', '温度是这项实验中的主要变量。', ['independent variable', 'adjust the variable'], ['parameter', 'quantity'], 'noun', 'countable', '数学'],
  ], 'variables', ['parameter'], 'brief ←?，按 §5.2 自扫根 vary B1 变化、使多样化（自扫 author_v1.js 第 4 参）+ -able（在 §5.4 清单；y→i 正字，先例 author_r6.js reliable←rely B1），「可变的←变化」语义直连，B1 继承；家族 parameter 参数（队列原样，入第 10 参），近义 parameter 参数、quantity 数量（队列原样，置义项 2 各恰好一次）；形容词兼名词，按 §4 混合词性取名词复数 variables；CET4 标签照抄队列');

  W('varied', 'adjective', '/ˈveərid/', 'B1', [], '多样的；各不相同的', 'Diverse; having a number of differences.', [
    ['多样的；各式各样的', 'Consisting of many different types of thing.', '由许多不同类型的事物构成。', '定语表语两用，形容经历、节目、食物。', 'The course covers a varied range of topics.', '这门课涵盖范围多样的题目。', ['a varied diet', 'varied experience'], ['diverse'], 'adjective', '定语/表语', '通用'],
    ['（形状、大小）各不相同的；参差的', 'Different from one another in shape, size or quality.', '彼此在形状、大小或质量上并不相同。', '定语表语两用，强调不止一种。', 'The students produced work of varied quality.', '学生们交出了质量参差的作业。', ['of varied lengths'], ['plural'], 'adjective', '定语/表语', '教育'],
  ], '', ['diverse'], 'brief 根提示 ←vary B1 变化、使多样化（自扫 author_v1.js 第 4 参复核为 B1）+ -ed（在 §5.4 清单，过去分词作形容词），B1 继承；家族 diverse 不同的、多样的（队列原样，入第 10 参），近义 diverse 置首义项、plural 多种多样的置义项 2，均队列原样、各恰好一次；CET 标签队列为 -，故第 5 参 []');

  W('variety', 'noun', '/vəˈraɪəti/', 'B1', ['CET4'], '多种多样；种类', 'A range of different things, or a particular type of them.', [
    ['多样化；各种不同事物的集合', 'The quality of being made of many different types of thing.', '由许多不同类型事物构成的状态。', '不可数，常与 of、wide、real 等连用。', 'The market offers real variety in early autumn.', '初秋的市场确实琳琅满目。', ['a wide variety of', 'variety of experience'], ['assortment', 'range'], 'noun', 'uncountable', '通用'],
    ['品种；变种', 'A particular type of plant, animal or product that differs from others of the same kind.', '区别于同类的某一动植物品种或产品种类。', '可数，常与 of 连用。', 'They grew a new variety of wheat.', '他们种了一种新的小麦品种。', ['a rare variety', 'different varieties of tea'], ['strain'], 'noun', 'countable', '农业'],
  ], 'varieties',['vary'], 'brief ←?，按 §5.2 自扫根 vary B1 变化、使多样化（自扫 author_v1.js 第 4 参）+ -ety（-ity 家族，y→i 正字，先例 author_r6.js reliable←rely B1；-ety 不在 §5.4 明示清单，按 §4c 库内 -ity 先例面裁定：author_u4.js unity←unit A2、sentimentality←sentiment C1），「多种多样←变化」语义直连，B1 继承（判断项）；近义 assortment 各式各样的东西置首义项、range 系列置首义项、strain 品种置义项 2，均队列原样、各恰好一次；fam 队列为空故第 10 参 []；CET4 标签照抄队列');

  W('vault', 'noun/verb', '/vɔːlt/', '', [], '拱顶；保险库；撑杆跃过', 'An arched roof, a secure room for valuables, or to jump over something.', [
    ['拱顶；拱形屋顶', 'An arched roof or ceiling, especially one made of stone.', '拱形的屋顶或天花板，尤指石砌结构。', '可数，教堂与古典建筑语境。', 'The chapel is covered by a painted vault.', '小教堂覆盖着彩绘的拱顶。', ['a stone vault', 'the vault of the chapel'], ['arch', 'dome'], 'noun', 'countable', '通用'],
    ['（银行）保险库；金库', 'A strong room in a bank where valuables are kept.', '银行存放贵重物品的坚固房间。', '可数，常与 of 连用。', 'The gold was moved to the vault.', '黄金被转移到了保险库里。', ['bank vault', 'break into a vault'], ['safe'], 'noun', 'countable', '金融'],
    ['撑杆跃过；跳跃越过', 'To jump over something using a pole or your hands.', '借助撑杆或双手越过某物。', '及物动词，体育语境。', 'The rider vaulted the fence at speed.', '骑手飞快地跃过了栅栏。', ['vault over the fence'], [], 'verb', '及物', '体育'],
  ], 'vaults~vaulted~vaulted~vaulting', ['dome', 'safe'], 'brief ←?，按 §5.2 自扫根：库内无 vault 的语义直连词根（-ault 不在 §5.4 清单；家族 dome B2 圆顶、safe A2 保险箱与近义 arch B2 拱（自扫 author_d2.js、author_s1.js、author_a4.js 第 4 参）均为家族与近义而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；家族 dome、safe（队列原样，入第 10 参），近义 arch、dome 置首义项，safe 置义项 2（队列原样、各恰好一次）；名词兼动词，按 §4 混合词性取动词四形；CET 标签队列为 -，故第 5 参 []');

  W('vehicles', 'noun', '/ˈviːɪklz/', 'A2', [], '车辆；交通工具；媒介（复数）', 'Road machines for carrying people or goods, in the plural.', [
    ['车辆；交通工具（复数）', 'Road vehicles considered as a group, especially in traffic.', '被视为整体的道路车辆，尤用于交通语境。', 'vehicle 的复数形式单列词条；作主语时谓语常用复数。', 'Delivery vehicles may not use this street.', '送货车辆不得驶入这条街。', ['motor vehicles', 'heavy vehicles'], ['traffic'], 'noun', 'countable', '交通'],
    ['（表达思想的）媒介；工具（复数）', 'Means of expressing or achieving something, taken together.', '用来表达或实现某事的手段总称。', 'vehicle 的复数形式单列词条，常与 of 连用。', 'Films are powerful vehicles for ideas.', '电影是强有力的思想载体。', ['vehicles of change'], [], 'noun', 'countable', '媒体'],
  ],'vehicles',['vehicle'], 'brief 根提示 ←vehicle A2 车辆、交通工具（自扫 author_v1.js 第 4 参复核为 A2），vehicles 为 vehicle 的复数形式单列词条，按 §4 forms 留空，A2 继承（判断项：复数单列，同 author_t8.js troops←troop B2、systems←system A2 先例）；近义 traffic 交通（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('vend', 'verb', '/vend/', 'B2', [], '（正式）出售；售卖', 'To offer goods for sale, in formal or technical language.', [
    ['（正式）出售；售卖', 'To sell goods or property, said in formal language.', '出售货物或财产，用于正式语体。', '及物动词，正式书面用语，日常英语多用 sell。', 'They vend cheap clothes from a stall.', '他们在摊位上售卖廉价服装。', ['vend goods', 'vend from a stall'], ['hawk', 'sell'], 'verb', '及物', '商务'],
  ], 'vends~vended~vended~vending', ['sell'], 'brief ←?，按 §5.2 自扫根 vendor B2 摊贩、卖主（自扫 author_v1.js 第 4 参）——vendor = vend + -or（-or 在 §5.4 清单），vend 整段可见于 vendor 且语义直连（卖主即从事出售的人），B2 继承（判断项：由库内派生词反向取级，先例 author_m6.js 词干 medic←medical B1，供主 agent 裁定）；家族/近义 sell 卖（队列原样，fam 入第 10 参），近义 hawk 叫卖、sell 卖置首义项，均队列原样、各恰好一次；CET 标签队列为 -，故第 5 参 []');

  W('vengeance', 'noun', '/ˈvendʒəns/', '', [], '报仇；复仇', 'Retaliation against somebody.', [
    ['报仇；复仇', 'The act of punishing or harming somebody in return for something they did to you.', '为对方所做之事而对其加以惩罚或伤害的行为。', '不可数，常与 take、seek 连用，多见于 take vengeance on 或 upon。', 'The clan swore vengeance for the insult.', '该家族立誓要为这次侮辱报仇。', ['take vengeance on', 'seek vengeance'], ['revenge'], 'noun', 'uncountable', '社会'],
  ], '', ['revenge'], 'brief ←?，按 §5.2 自扫根：-ance 在 §5.4 清单，但根词 venge 不在库；avenge 在库（author_a5.js）但其第 4 参为空（自身缺级，无级可继，同 author_u4.js unlikely←likely 缺级留空先例）；revenge C1（自扫 author_r2.js 第 4 参）为家族与近义，首段为 re- 而非与 vengeance 共享的完整词首（venge 不是在库完整词），兄弟派生 §5.6 不成立，留空；多作不可数，故 forms 留空；家族/近义 revenge 复仇、报复（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('venom', 'noun', '/ˈvenəm/', '', [], '毒液；恶意', 'A poisonous liquid, or bitter malice.', [
    ['（蛇、昆虫等的）毒液', 'A poisonous liquid that an animal such as a snake or spider puts into your body.', '蛇或蜘蛛等动物注入人体的有毒液体。', '可数或不可数，动物学语境。', 'A single bite can deliver enough venom to kill a dog.', '咬上一口注入的毒液就足以毒死一条狗。', ['snake venom', 'a dose of venom'], ['poison'], 'noun', 'uncountable', '自然'],
    ['恶毒；怨恨', 'A strong bitter feeling that shows a desire to hurt people.', '表现出伤害他人意愿的强烈怨恨情绪。', '不可数，书面用语。', 'Her letter was full of venom.', '她的信里满是恶意。', ['speak with venom'], [], 'noun', 'uncountable', '情感'],
  ],'venoms', [], 'brief ←?，按 §5.2 自扫根：库内无 venom 的语义直连词根（-om 不在 §5.4 清单；近义 poison B1 毒药（自扫 author_p2.js 第 4 参）为近义而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；两义项均以不可数用法为主，故 forms 留空；近义 poison 毒物、毒药（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('veranda', 'noun', '/vəˈrændə/', '', [], '游廊；有顶外廊', 'A sheltered gallery attached to the outside of a building.', [
    ['游廊；有顶外廊', 'A roofed platform with open sides along the outside of a house.', '房屋外侧带顶、侧面敞开的平台。', '可数，常见于热带地区或旧式住宅。', 'They had breakfast on the veranda.', '他们在游廊上吃早餐。', ['a wide veranda', 'sit on the veranda'], ['porch'], 'noun', 'countable', '家居'],
  ], 'verandas', ['porch'], 'brief ←?，按 §5.2 自扫根：库内无 veranda 的语义直连词根（-anda 不在 §5.4 清单；家族/近义 porch B1 门廊（自扫 author_p2.js 第 4 参）为家族与近义而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；家族/近义 porch 门廊（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('verbal', 'adjective', '/ˈvɜːbl/', 'A1', ['CET4'], '口头的；言语的', 'Relating to speech or to words.', [
    ['口头的；非书面的', 'Spoken rather than written, or communicated using words.', '以说的方式而非书面形式，或用言语传达的。', '定语表语两用，常与 agreement、instruction、warning 连用。', 'They reached a verbal agreement on the price.', '他们在价格上达成了口头协议。', ['verbal agreement', 'verbal instructions'], ['oral'], 'adjective', '定语/表语', '商务'],
    ['言语的；（语法）动词构成的', 'Relating to words, or to verbs in grammar.', '与词语相关，或与语法中的动词相关。', '定语表语两用，语法与语言学语境。', 'Verbal skill matters in every interview.', '言语能力在每场面试中都很重要。', ['verbal ability', 'verbal abuse'], ['linguistic'], 'adjective', '定语/表语', '语法'],
  ], '', ['linguistic', 'oral'], 'brief ←?，按 §5.2 自扫根 verb A1 动词、词语（自扫 author_v1.js 第 4 参）+ -al（在 §5.4 清单，透明形容词后缀），语义直连核对：库内 verb 义为「动词」，verbal 义项 2 即「（语法）动词构成的、言语的」，与 verb 直连，A1 继承（判断项：核心义为词类名，供主 agent 裁定）；家族/近义 linguistic 语言的、oral 口头的（队列原样，fam 入第 10 参），近义 oral 置首义项、linguistic 置义项 2，均队列原样、各恰好一次；CET4 标签照抄队列');

  W('verbatim', 'adverb/adjective', '/vɜːˈbeɪtɪm/', '', [], '逐字地；照原文的', 'Word for word, with no change.', [
    ['逐字地；一字不差地', 'Repeating the exact words of something without changing them.', '原样重复某内容，不作任何改动。', '副词，置于动词之后或句末，正式用语。', 'The quote is reproduced verbatim in the report.', '这段引文在报告中被逐字照录。', ['quote verbatim', 'report verbatim'], ['literal'], 'adverb', '不及物', '书面'],
    ['逐字的；照原文的', 'Giving or recording the exact words of a speech or text.', '给出或记录讲话、文本的确切文字。', '多作定语，也可作表语。', 'Please keep a verbatim record of the meeting.', '请对会议做逐字记录。', ['a verbatim record'], [], 'adjective', '定语/表语', '书面'],
  ], '', ['literal'], 'brief ←?，按 §5.2 自扫根：词首 verb A1 整段可见（verbatim = verb + itam），但库内 verb 核心义为「动词」这一词类，与 verbatim「逐字照原文的」非现代语义直连（§5.1 语义核对、§5.6 兄弟派生均不成立；-batim 亦不在 §5.4 清单），留空（判断项：与 verbal←verb 的区别在于 verbatim 无「动词、词语构成的」义项可与库内 verb 直连，供主 agent 裁定）；家族/近义 literal 照字面的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；副词兼形容词，副词在前故 forms 留空；CET 标签队列为 -，故第 5 参 []');

  W('vermin', 'noun', '/ˈvɜːmɪn/', '', [], '害虫；害兽；卑鄙的人', 'Animals or insects that damage crops, or people regarded with disgust.', [
    ['害兽；害虫（总称）', 'Wild animals or insects that damage crops, food or buildings.', '破坏庄稼、食物或建筑的野兽或昆虫。', '单复数同形的集合名词，常与 the 连用。', 'The store put down poison to kill the vermin.', '商店下了毒药来灭害兽。', ['get rid of vermin', 'a vermin problem'], ['pest'], 'noun', 'uncountable', '农业'],
    ['卑鄙的人；害人精', 'People who are regarded as worthless and disgusting.', '被视为一无是处、令人厌恶的人。', '单复数同形，含强烈贬义，正式语体。', 'He called the intruders vermin.', '他骂这些闯入者是害人精。', ['treated like vermin'], [], 'noun', 'uncountable', '社会'],
  ],'vermin', [], 'brief ←?，按 §5.2 自扫根：库内无 vermin 的语义直连词根（-min 不在 §5.4 清单；近义 pest B2 害虫（自扫 author_p2.js 第 4 参）为近义而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；单复数同形的集合名词故 forms 留空；近义 pest 害虫、有害生物（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('vertebrate', 'noun/adjective', '/ˈvɜːtɪbrət/', '', [], '脊椎动物；有脊椎的', 'A creature possessing a spinal column.', [
    ['脊椎动物', 'An animal that has a backbone consisting of vertebrae.', '长有由脊椎骨组成的脊柱的动物。', '可数，生物学语境。', 'Fish are the earliest vertebrates in the fossil record.', '鱼类是化石记录中最早的脊椎动物。', ['marine vertebrates'], ['mammal'], 'noun', 'countable', '科学'],
    ['有脊椎的；脊椎的', 'Having a backbone or a spinal column.', '长有脊柱的。', '多作定语，生物学语境。', 'Only vertebrate species were studied here.', '这里只研究了有脊椎的物种。', ['vertebrate animals'], [], 'adjective', '定语', '科学'],
  ], 'vertebrates', ['mammal'], 'brief ←?，按 §5.2 自扫根：库内无 vertebrate 的语义直连词根（-ate 虽有库内 passion+-ate、temper+-ate 等先例，但先例均要求根词整段在库，vertebra 不在库；家族 mammal B2 哺乳动物（自扫 author_m1.js 第 4 参）为家族与近义而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；家族/近义 mammal 哺乳动物（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；名词兼形容词，按 §4 混合词性取名词复数 vertebrates');

  W('vet', 'noun/verb', '/vet/', '', [], '兽医；审查', 'A person who cares for animals, or to examine something carefully.', [
    ['兽医', 'A person who treats sick or injured animals.', '治疗生病或受伤动物的人。', '可数，口语用法，全称为 veterinarian。', 'The vet visited the farm this morning.', '兽医今天上午来了农场。', ['call the vet', 'a vet for horses'], [], 'noun', 'countable', '健康'],
    ['审查；甄别（申请、资历）', 'To examine somebody or something carefully to check quality or suitability.', '仔细检查某人或某物，以判断其质量或是否合适。', '及物动词，常与 application、candidate 等连用。', 'The bank vets all new clients.', '这家银行会审查所有新客户。', ['vet an application', 'vet a candidate'], ['screen'], 'verb', '及物', '商务'],
  ], 'vets~vetted~vetted~vetting', [], 'brief ←?，按 §5.2 自扫根：库内 veteran B2 老兵、老手（自扫 author_v1.js 第 4 参）词首 vet 整段可见，但「老兵、老手」与 vet 的「兽医、审查」两义均非现代语义直连（兽医为 veterinarian 的截短，规范无截短继承条款），切词假象（§5.7，同 author_t8.js twine←twin 拒绝先例），留空（判断项）；近义 screen 审查、甄别（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []；名词兼动词，按 §4 混合词性取动词四形');

  W('victimise', 'verb', '/ˈvɪktɪmaɪz/', 'B1', [], '迫害；不公平地对待', 'To subject somebody to unfair treatment.', [
    ['迫害；不公平对待', 'To treat somebody in an unfair way, especially by blaming them for something.', '以不公平的方式对待某人，尤指因其某事而横加指责。', '及物动词，常用于被动 feel victimised；英式拼写，美式 victimize。', 'He felt victimised by the new rules.', '他觉得自己成了新规定的受害者。', ['feel victimised', 'victimise sb for sth'], ['discriminate'], 'verb', '及物', '社会'],
  ], 'victimises~victimised~victimised~victimising', ['discriminate'], 'brief ←?，按 §5.2 自扫根 victim B1 受害者、牺牲品（自扫 author_v1.js 第 4 参）+ -ise（不在 §5.4 明示清单，按 §4c 库内先例面裁定：stabilise←stable B2（author_s20.js）、sympathise←sympathy B2（author_s25.js）、specialize←special A2、库内 liberalises），「使成为受害者←受害者」语义直连，B1 继承（判断项）；家族/近义 discriminate 歧视、区别对待（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；英式拼写，美式 victimize；CET 标签队列为 -，故第 5 参 []');

  W('viewer', 'noun', '/ˈvjuːə/', 'A2', [], '观看者；观众；观赏者', 'A person who watches something.', [
    ['（电视、影片的）观众；观看者', 'A person who watches television or a film.', '看电视或看电影的人。', '可数，常与 of 连用。', 'Millions of viewers watched the final.', '数以百万计的观众观看了决赛。', ['regular viewers', 'viewers of the show'], ['spectator'], 'noun', 'countable', '媒体'],
    ['（艺术作品的）观赏者', 'A person who looks at a painting or an exhibition.', '观看画作或展览的人。', '可数，艺术语境。', 'Every viewer reads the picture differently.', '每位观赏者对这幅画的理解都不同。', ['the average viewer'], [], 'noun', 'countable', '艺术'],
  ], 'viewers', ['spectator'], 'brief 根提示 ←view A2 观看、看法（自扫 author_v1.js 第 4 参复核为 A2）+ -er（在 §5.4 清单，表人），A2 继承；家族/近义 spectator 观众（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('views', 'noun', '/vjuːz/', 'A2', [], '看法；观点；政见（复数）', 'Opinions and beliefs, in the plural.', [
    ['观点；看法（复数）', 'Opinions or beliefs about a subject, considered as a group.', '关于某一问题的观点或信念总称。', 'view 的复数形式单列词条；作主语时谓语常用复数。', 'Public views on the plan are split.', '公众对这项计划的看法分歧很大。', ['strong views on the law', 'change his views'], [], 'noun', 'countable', '通用'],
    ['（政治）观点；政见（复数）', 'Opinions about political matters.', '关于政治问题的意见。', 'view 的复数形式单列词条，常与 on 连用。', 'Their views on tax reform differ widely.', '他们在税收改革上的政见分歧很大。', ['left-wing views'], ['politics'], 'noun', 'countable', '政治'],
  ],'views',['view'], 'brief 根提示 ←view A2 观看、看法（自扫 author_v1.js 第 4 参复核为 A2），views 为 view 的复数形式单列词条，按 §4 forms 留空，A2 继承（判断项：复数单列，同 author_t8.js troops←troop B2、systems←system A2 先例）；近义 politics 政治、政见（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('vigil', 'noun', '/ˈvɪdʒl/', '', [], '守夜；彻夜守候', 'A watch kept through the night.', [
    ['守夜；彻夜守候', 'A period of staying awake at night, especially to watch over something or to pray.', '夜里保持清醒的一段时间，尤指为看守或祈祷。', '可数，常与 for、of 连用。', 'They held a candlelight vigil outside the gate.', '他们在门外举行了烛光守夜。', ['hold a vigil', 'a candlelight vigil'], ['wake'], 'noun', 'countable', '宗教'],
  ], 'vigils', [], 'brief ←?，按 §5.2 自扫根：库内无 vigil 的语义直连词根（-il 不在 §5.4 清单；vigilant、vigilance 不在库；近义 wake A1 守夜、醒着（自扫 author_w1.js 第 4 参）为近义而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；近义 wake 守夜、不眠（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('vigorous', 'adjective', '/ˈvɪgərəs/', 'B2', ['CET4'], '精力充沛的；强有力的', 'Full of energy and strength, or done with force.', [
    ['精力充沛的；茁壮的', 'Full of physical energy, strength and determination.', '充满体力、力量与决心。', '定语表语两用，形容人、植物、锻炼。', 'She kept a vigorous pace during training.', '她在训练中保持着强劲的节奏。', ['vigorous exercise', 'a vigorous young plant'], ['dynamic'], 'adjective', '定语/表语', '体育'],
    ['强有力的；强劲的', 'Done with a lot of energy and force.', '用很大的力量与强度进行的。', '定语表语两用，形容动作、批评、辩论。', 'Give the handle a vigorous shake.', '用力摇一摇把手。', ['a vigorous protest'], [], 'adjective', '定语/表语', '通用'],
  ], '',['vigor'], 'brief ←?，按 §5.2 自扫根 vigor B2 活力、精力（自扫 author_v1.js 第 4 参）+ -ous（在 §5.4 清单，透明形容词后缀，vigor 整段可见于 vigorous；先例 author_i9.js invigorates←vigor B2），「有活力的←活力」语义直连，B2 继承；近义 dynamic 充满活力的、强有力的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []；CET4 标签照抄队列');

  W('vigour', 'noun', '/ˈvɪgə/', 'B2', [], '活力；效力；强度', 'Physical or mental energy, or the force of something.', [
    ['活力；精力', 'Physical or mental energy, strength and good health.', '体力、精力与良好的身体状态。', '不可数，英式拼写，美式作 vigor。', 'They set about the work with renewed vigour.', '他们以重新焕发的干劲投入工作。', ['physical vigour', 'full of vigour'], ['energy'], 'noun', 'uncountable', '通用'],
    ['（法律、规则的）效力；强度', 'The force and effect of a rule, argument or activity.', '规则、论证或活动的力量与效果。', '不可数，正式用语，常与 in、of 连用。', 'The rule is still in vigour today.', '这条规则今天仍然有效。', ['remain in vigour'], [], 'noun', 'uncountable', '法律'],
  ], '',['energy', 'reinvigorate'], 'brief ←?，按 §5.2 自扫根 vigor B2 活力、精力（自扫 author_v1.js 第 4 参），vigour 为 vigor 的英式拼写同词变体（r→ur 正字，语义完全同一），B2 继承（判断项：英式拼写变体反向取级，先例 author_n3.js neighbourhood←neighbor A2 英式拼写；区别于 author_s9.js savour 留空——该先例明言「库内无根」，本词库内有根 vigor，供主 agent 裁定）；家族/近义 energy 能量、精力（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；不可数故 forms 留空；CET 标签队列为 -，故第 5 参 []');

  W('vile', 'adjective', '/vaɪl/', '', [], '邪恶的；极坏的', 'Wicked or thoroughly unpleasant.', [
    ['极坏的；令人厌恶的', 'Extremely unpleasant, nasty or disgusting.', '极其令人不快、卑劣或恶心。', '定语表语两用，语气强烈，口语常用。', 'The weather turned vile overnight.', '一夜之间天气变得极坏。', ['vile weather', 'a vile smell'], ['foul'], 'adjective', '定语/表语', '通用'],
    ['邪恶的；卑劣的', 'Very immoral or cruel, deserving strong condemnation.', '非常不道德或残忍，应受强烈谴责。', '定语表语两用，形容人及其言行。', 'He played a vile trick on his friend.', '他对朋友耍了一个卑劣的花招。', ['vile behaviour'], [], 'adjective', '定语/表语', '性格'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：库内无 vile 的语义直连词根（-ile 不在 §5.4 清单；近义 foul C1 恶臭的、卑劣的（自扫 author_f2.js 第 4 参）为近义而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；近义 foul 恶臭的、卑劣的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('villa', 'noun', '/ˈvɪlə/', '', [], '别墅；度假独栋屋', 'A detached house, typically in the country or on holiday.', [
    ['别墅；乡间住宅', 'A house in the country or in a suburb, often a large and comfortable one.', '位于乡村或郊区的房子，常指宽敞舒适的住宅。', '可数，英式英语常用。', 'They rented a villa near the coast.', '他们在海边租了一栋别墅。', ['rent a villa', 'a country villa'], ['cottage'], 'noun', 'countable', '家居'],
    ['度假独栋屋；宅邸', 'A large house used for holidays, or a grand country house.', '供度假使用的大房子，或气派的乡间宅邸。', '可数，旅游语境常见。', 'The villa has its own pool and garden.', '这栋度假屋自带泳池和花园。', ['a holiday villa'], ['palace'], 'noun', 'countable', '娱乐'],
  ], 'villas', ['cottage', 'mansion'], 'brief ←?，按 §5.2 自扫根：库内 village A1 村庄（自扫 author_v1.js 第 4 参）；词形面 villa 恰为 village 的词首全段（villa+ge），§5.6 词形条件成立，但 §5.1 语义直连核对不通过——villa 别墅/度假宅邸与 village 村庄历史同源而现代义分家，非直连（判断项，主 agent 复核：挂掉的是语义门而非词形门）；-illa 亦不在 §5.4 清单，库内无其他直连根，留空；家族 cottage 小屋、mansion 公馆（队列原样，入第 10 参），近义 cottage 置首义项、palace 宫殿式宅邸置义项 2，均队列原样、各恰好一次；CET 标签队列为 -，故第 5 参 []');
})(typeof window !== 'undefined' ? window : globalThis);
