/* data/words/cet/author_w10.js — W 批次 10，缺口 womanly ~ worshipper，共 31 条
 * （25 单词 + 6 短语；短语清单：word class、word list、work clothes、work out、
 *   work together、working day；单词条目一律不标 .phrase，word-for-word 为连字符词条，不标 .phrase）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_w10.txt，widx 063-093，词头无残缺）。
 * CET 标签照抄队列：CET4 × 4（wonderful、wording、worker、worried），CET6 × 0，
 *   其余 27 条 []（含 6 条短语）。
 * brief：%TEMP%\opencode\_w10_brief.txt 共 25 行，与本批 25 个单词一一对应（首行 womanly、末行 worshipper），
 *   6 条短语不入 brief（与任务说明一致）；brief 的 refs 与任务清单 fam/syn 逐条比对一致，无错位，
 *   故无需纯文本自扫重对齐（仅按 §5.2 对 ←? 行做自扫取级）。
 *   7 行给出根提示（woman A1、wood A2、word A1 ×2、work A1 ×2、world A1、worry A2、worship B2），
 *   18 行显示 ←?，一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf("W('词头'") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库，未改动任何非本目标文件）。
 * 扫根结论（自扫，第 4 参）：woman A1、word A1、wood A2、work A1、world A1、worry A2、worship B2、
 *   wonder B1、wear A1、worse A2（均 author_w2.js，wear 例外见 author_w1.js）；仅用于本批定根的复核与补扫。
 *   库内另核（不作战术根）：week A1 / weekday A2（author_w1.js）、forest A2、divine B2、fabulous B1、
 *   gorgeous B2、great A1、immense B2、incredible B1、magic A2、splendid B2、terrific B1、tremendous B2、
 *   brass B2、literal B2、phrase A2、text A1、language A2、letter A1、lyric B2、vocabulary A2、
 *   redundant C1、feasible B2、viable C1、hand A1、operative C1、plumber B2、labor B2、mechanic B1、
 *   load B1、office A1、plant A2、terminal B2、cosmopolitan（自身缺级）、material A2、secular C1、
 *   sophisticated B2、temporal C1、shabby C1、old A1、uneasy B2、anxious B1、aggravate C1、
 *   deteriorate B2、escalate B2、pilgrim B2、class A1、list A1、glossary C1、coordinate 见 fam/syn。
 *   库内另核（不存在）：labour、worrying、worsened、worshippers、wind、land、station、place、day、stop、meat、cash。
 * · 继承（25 单词全部继承，无一条留空）：
 *   -ly/-ful/-able/-ing/-er/-en 透明后缀（§5.4 清单）：womanly←woman A1 + -ly（先例 truly←true A1）、
 *     wonderful←wonder B1 + -ful、wording←word A1 + -ing、workable←work A1 + -able（先例 valuable←value A2）、
 *     worker←work A1 + -er、workings←work A1 + -ing、worsen←worse A2 + -en（先例 soften←soft A1、
 *     strengthen←strong A2）、worshipper←worship B2 + -er、worried←worry A2 + -ed（-ied 正字类）、
 *     worn←wear A1 + -n（不规则过去分词，判断项，先例 unknown←know A1、spoken←speak A1、sunken←sink A2）、
 *     worldly←world A1 + -ly；
 *   -y 形容词后缀（§4b 裁定：根词全段可见 + 语义直连，先例 noisy←noise A1、sugary←sugar A1）：
 *     wordy←word A1；
 *   复合/连字符词取首成分在库词级（§5.3，同 streetcar←street A1、turn-off←turn A1、run-up←run 先例）：
 *     woodland←wood A2、woodwind←wood A2、workday←work A1、working-class←work A1、workload←work A1、
 *     workplace←work A1、workstation←work A1、workweek←work A1、word-for-word←word A1；
 *   复数形式单列词条（§4 forms 留空，同 systems←system A2、troops←troop B2、tropics←tropic C1 先例）：
 *     woods←wood A2、words←word A1、works←work A1（库内 work 义项 5 作品、义项 6 工厂均明注复数 works）、
 *     workers←worker A1（worker 本批录入，←work A1 + -er）。
 * · 留空（0 单词 + 6 短语）：word class、word list、work clothes、work out、work together、working day
 *   全部按规范 §6「短语整体不取成分作根」分级留空。
 * CEFR 分布（25 单词）：A1 × 18（womanly、word-for-word、wording、words、wordy、workable、workday、worker、
 *   workers、working-class、workings、workload、workplace、works、workstation、workweek、worldly、worn）、
 *   A2 × 5（woodland、woods、woodwind、worried、worsen）、B1 × 1（wonderful）、B2 × 1（worshipper）；
 *   单词无留空；6 条短语全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_w10.js 必须在 _cet_helper.js 之后加载');

  W('womanly', 'adjective', '/ˈwʊmənli/', 'A1', [], '女性化的；柔婉的', 'Having the gentle or attractive qualities linked to women.', [
    ['女性化的；似女子的', 'Having the soft or attractive qualities that are traditionally linked with women.', '带有传统上与女性相连的柔和或迷人的特质。', '定语表语两用，形容举止、姿态、风度。', 'She moved across the stage with a soft womanly grace.', '她带着柔婉的风度走过舞台。', ['a womanly figure', 'womanly charm'], ['feminine'], 'adjective', '定语/表语', '性格'],
    ['柔婉的；温顺的', 'Gentle and caring in a way regarded as typical of a kind woman.', '以人们认为善良女性特有的那种温柔体贴的方式。', '定语表语两用，语体偏书面与文学色彩。', 'He spoke to the children in a womanly tone.', '他用一种温柔的语气对孩子们说话。', ['in a womanly tone'], [], 'adjective', '定语/表语', '性格'],
  ], '', ['feminine'], 'brief 根提示 ←woman A1 女人、女性（自扫 author_w2.js 第 4 参复核为 A1）+-ly（§5.4 透明后缀清单，先例 truly←true A1），「女性的特点→女性化的」语义直连，A1 继承；家族 feminine 女性的（队列原样，入第 10 参），近义 feminine 置首义项恰好一次（fam 与 syn 同词，按 t8 先例两处各一次）；CET 标签队列为 -，故第 5 参 []');

  W('wonderful', 'adjective', '/ˈwʌndəfl/', 'B1', ['CET4'], '令人惊叹的；极好的；美妙的', 'So good or beautiful that it fills you with admiration.', [
    ['极好的；绝妙的', 'So good that it makes you very pleased.', '好得让人十分高兴。', '定语表语两用，形容人、事物、时刻、经历，日常口语中最常见。', 'We had a wonderful evening at the concert.', '我们在音乐会上度过了一个美妙的夜晚。', ['a wonderful time', 'wonderful news'], ['fabulous', 'terrific', 'great'], 'adjective', '定语/表语', '通用'],
    ['奇妙的；令人惊叹的', 'Full of wonder, or causing a feeling of admiration.', '充满奇观的，或使人赞叹的。', '定语表语两用，形容景观、经历、时刻。', 'The view from the top was truly wonderful.', '从顶上看到的景色真是美极了。', ['a wonderful sight', 'absolutely wonderful'], ['incredible', 'magic', 'divine'], 'adjective', '定语/表语', '通用'],
    ['壮丽的；美轮美奂的', 'Splendid in appearance, size or achievement.', '在外观、规模或成就上壮丽辉煌的。', '多作定语，形容建筑、景观、场面。', 'The cathedral is a wonderful piece of architecture.', '这座大教堂是一件壮丽的建筑作品。', ['wonderful architecture', 'a wonderful achievement'], ['gorgeous', 'splendid', 'immense', 'tremendous'], 'adjective', '定语', '艺术'],
  ], '', ['divine', 'fabulous', 'gorgeous'], 'brief 显示 ←?，按 §5.2 自扫根 wonder B1 想知道、惊讶、奇迹（自扫 author_w2.js 第 4 参；库内 wonder 义项 3 奇迹、奇观，词条备注亦提及 wonderful）+-ful（§5.4 透明后缀清单，先例 truthful←truth B1、helpful 类），「使人赞叹」与 wonder 直连，B1 继承；家族 divine 神圣的、fabulous 极好的、gorgeous 华丽的（队列原样，入第 10 参），近义 fabulous、terrific、great 置义项 1，incredible、magic、divine 置义项 2，gorgeous、splendid、immense、tremendous 置义项 3，共 10 词均队列原样、各恰好一次；CET4 标签照抄队列');

  W('woodland', 'noun', '/ˈwʊdlənd/', 'A2', [], '林地；林区', 'Land covered with trees.', [
    ['林地；林区', 'Land that is covered with trees and forms a natural area of woodland.', '覆盖着树木、构成一片天然林地的土地。', '可数，多作定语，如 woodland area；与 forest 相比规模较小。', 'The road runs through thick woodland.', '这条公路穿过茂密的林地。', ['woodland area', 'dense woodland'], ['forest'], 'noun', 'countable', '地理'],
  ], 'woodlands', ['forest'], 'brief 显示 ←?，按 §5.3 自扫根：复合词 wood + land 取首成分在库词级 wood A2 木头、树林（自扫 author_w2.js 第 4 参），库内 wood 义项 2「小树林、林地」与 woodland 林地语义直连，A2 继承（判断项：复合取首成分，同 streetcar←street A1、turn-off←turn A1 先例）；家族/近义 forest 森林（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('woods', 'noun', '/wʊdz/', 'A2', [], '树林；林地', 'An area of land covered with trees.', [
    ['树林；林地', 'An area of land covered with trees, usually smaller than a forest.', '一片树木覆盖的土地，通常比 forest 小。', 'wood 的复数形式单列词条；作主语时谓语用复数。', 'The house lies deep in the woods.', '那座房子深深坐落在林子里。', ['in the woods', 'dense woods'], ['forest'], 'noun', 'countable', '地理'],
  ], '', ['forest'], 'brief 根提示 ←wood A2 木头、树林（自扫 author_w2.js 第 4 参复核为 A2，库内 wood 义项 2 明注英式英语常用复数 the woods），woods 为 wood 的复数形式单列词条，按 §4 forms 留空，A2 继承（判断项：复数单列，同库内 systems←system A2、troops←troop B2 先例）；家族/近义 forest 森林（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('woodwind', 'noun/adjective', '/ˈwʊdwɪnd/', 'A2', [], '木管乐器；木管的', 'A musical instrument made of wood, or relating to such instruments.', [
    ['木管乐器', 'A musical instrument that makes a sound when air is blown through a wooden tube.', '气流吹过木制管身而发声的乐器。', '可数，如长笛、双簧管；作定语时说 woodwind instrument。', 'The woodwind section played a slow melody.', '木管组奏出了一段缓慢的旋律。', ['a woodwind instrument', 'the woodwind section'], ['brass'], 'noun', 'countable', '艺术'],
    ['木管的；木管乐器的', 'Made out of wood, or played on instruments that are.', '木头制成的，或由木管乐器演奏的。', '定语，形容乐器或演奏方式。', 'The piece is written for woodwind and strings.', '这首曲子是木管与弦乐合奏的。', ['woodwind instruments'], [], 'adjective', '定语', '艺术'],
  ], 'woodwinds',['wood'], 'brief 显示 ←?，按 §5.3 自扫根：复合词 wood + wind 取首成分在库词级 wood A2 木头、木材（自扫 author_w2.js 第 4 参），「木制的管乐器」与 wood 材质义直连，A2 继承（判断项：复合取首成分 + 材质义转乐器类别的语义直连核对）；近义 brass 铜管乐器（队列原样，置名词义项恰好一次）；fam 队列为空故第 10 参 []；词性 noun/adjective 混合，按 §4 只写名词复数');

  W('word class', 'noun', '/ˌwɜːd ˈklɑːs/', '', [], '词类', 'A group of words that share the same grammatical function.', [
    ['词类', 'A group of words that function in the same grammatical way inside sentences.', '在句子中语法功能相同的一组词。', '不可数；语言学与语法教学用语，如 closed word class。', 'Nouns and verbs are two word classes.', '名词和动词是两个词类。', ['a closed word class', 'a major word class'], ['noun'], 'noun', 'uncountable', '语法'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 noun 名词（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('word list', 'noun', '/ˌwɜːd ˈlɪst/', '', [], '词表；单词表', 'A list of words to be learned, often with notes.', [
    ['词表；单词表', 'A written list of words to be learned, often with meanings or notes.', '一份供学习用的书面词表，常附释义或注解。', '可数；语言学习与考试备考用语。', 'The course comes with a word list for each unit.', '这套课程每个单元都配有一份词表。', ['a study word list', 'a vocabulary list'], ['glossary'], 'noun', 'countable', '教育'],
  ], '', ['glossary'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 glossary 词汇表（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）').phrase = true;

  W('word-for-word', 'adjective/adverb', '/ˌwɜːd fə ˈwɜːd/', 'A1', [], '逐字的；逐词地', 'Exactly the same as the original words, with nothing changed.', [
    ['逐字的；逐词的', 'Using exactly the original words in the original order, with nothing left out or added.', '完全照搬原来的词和顺序，不删也不加。', '定语表语两用，修饰 translation、copy、account 等。', 'The sign is a word-for-word copy of the contract.', '这块牌子是合同的逐字抄本。', ['a word-for-word translation', 'a word-for-word account'], ['literal'], 'adjective', '定语/表语', '书面'],
    ['逐字地；一字不差地', 'In a way that repeats every single word exactly.', '以每一个词都完全照搬的方式。', '修饰动词，或置于句中说明复述的方式。', 'She repeated the message word-for-word.', '她一字不差地复述了那条信息。', ['repeat word-for-word'], [], 'adverb', '不及物', '通用'],
  ], '',['word'], 'brief 显示 ←?，按 §5.3 自扫根：连字符复合词 word for word 取首成分在库词级 word A1 单词、话语（自扫 author_w2.js 第 4 参），「照搬原话」与 word 语义直连，A1 继承（判断项：复合取首成分，同 turn-off←turn A1、egg-shaped←egg A1 先例；词中有虚词 for，不另取根）；近义 literal 逐字的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []；形容词/副词混合，forms 按 §4 留空；队列未标 [PH]，故不挂 .phrase');

  W('wording', 'noun', '/ˈwɜːdɪŋ/', 'A1', ['CET4'], '措辞；表达方式', 'The words used to express something, and the choice between them.', [
    ['措辞；说法', 'The particular words used to express an idea, and the choice made between them.', '表达某个意思时所用的具体词语及其取舍。', '不可数，常见 exactly worded、careful wording。', 'The wording of the notice caused some anger.', '通告的措辞引起了一些不满。', ['the wording of a contract', 'careful wording'], ['phrase', 'text'], 'noun', 'uncountable', '书面'],
    ['（法律文件的）条款表述', 'The way in which a rule or a condition is written down in an official text.', '官方文本中把某条规则或条件写下来的方式。', '不可数；法律、合同、公文语境。', 'The wording of the clause is unclear.', '这一条款的表述含糊不清。', ['the wording of a clause', 'amend the wording'], ['language', 'letter'], 'noun', 'uncountable', '法律'],
  ],'wordings', ['phrase', 'text'], 'brief 根提示 ←word A1 单词、话语（自扫 author_w2.js 第 4 参复核为 A1），库内 word 义项 4「措辞；用词表达」与 wording 语义直连，-ing 在 §5.4 透明后缀清单，A1 继承；wording 不可数，按 §4 formsStr 留空；家族 phrase 短语、text 文本（队列原样，入第 10 参），近义 phrase、text 置义项 1，language、letter 置义项 2，共 4 词均队列原样、各恰好一次；CET4 标签照抄队列');

  W('words', 'noun', '/wɜːdz/', 'A1', [], '词；话语；歌词', 'The separate units of language, or the text of a song.', [
    ['词；话语', 'The separate units of language, or something that a person says.', '语言中分立的单位，或某人所说的话。', 'word 的复数形式单列词条；作主语时谓语用复数。', 'The teacher chose ten words for the test.', '老师选了十个词放进测验。', ['choose the right words', 'a few words'], ['vocabulary'], 'noun', 'countable', '通用'],
    ['歌词；台词', 'The text of a song, or the lines that an actor has to say.', '歌曲的文字，或演员要说的台词。', '常用复数形式，如 the words to a song。', 'I cannot remember all the words to this song.', '这首歌的歌词我记不全。', ['the words to a song', 'sing the words'], ['lyric'], 'noun', 'countable', '艺术'],
  ],'words',['word'], 'brief 根提示 ←word A1 单词、话语（自扫 author_w2.js 第 4 参复核为 A1），words 为 word 的复数形式单列词条，按 §4 forms 留空，A1 继承（判断项：复数单列，同 systems←system A2、troops←troop B2 先例）；近义 vocabulary 词汇置义项 1、lyric 歌词置义项 2（队列原样，各恰好一次）；fam 队列为空故第 10 参 []');

  W('wordy', 'adjective', '/ˈwɜːdi/', 'A1', [], '啰嗦的；多言的', 'Using more words than are needed.', [
    ['啰嗦的；多言的', 'Using more words than are needed in order to say something.', '为了把事情说清楚而用了比需要多得多的词。', '定语表语两用，形容文章、讲话、写法，常含贬义。', 'The report is long and wordy.', '这份报告又长又啰嗦。', ['a wordy report', 'a wordy style'], ['redundant'], 'adjective', '定语/表语', '书面'],
  ], '',['word'], 'brief 显示 ←?，按 §5.2 自扫根 word A1 单词、话语（自扫 author_w2.js 第 4 参）+-y（-y 形容词后缀按规范 §4b 裁定：根词全段可见于 wordy 且语义直连，先例 noisy←noise A1、sugary←sugar A1、showery←shower A2、tricky←trick B1），「话多→多言的」与 word 话语义直连，A1 继承；近义 redundant 多余的、冗长的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('work clothes', 'noun', '/ˈwɜːk kləʊðz/', '', [], '工作服；劳保服', 'Clothes worn for doing a job rather than for special occasions.', [
    ['工作服；劳保服', 'Clothes worn for doing a job, not for special occasions or for fashion.', '为干活而穿的衣服，不是为正式场合或时髦。', '恒为复数，无单数形式；作定语时须写 work-clothes。', 'He changed into his work clothes at six.', '他六点换上了工作服。', ['wear work clothes', 'in work clothes'], ['overall'], 'noun', 'uncountable', '职业'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 overall 工作服（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('work out', 'verb', '/ˌwɜːk ˈaʊt/', '', [], '锻炼；（经过努力）解决；算出', 'To exercise, or to solve something by thinking or calculating.', [
    ['锻炼；做健身运动', 'To do physical exercise in order to keep fit.', '为保持健康而做体育运动。', '动词短语，分开写 work out；比名词 workout 更常用于此义。', 'She works out three times a week.', '她一周锻炼三次。', ['work out at the gym'], ['exercise'], 'verb', '不及物', '体育'],
    ['解决；算出', 'To solve a problem or find an answer by thinking or calculating.', '通过思考或计算解决一个问题、找出答案。', '动词短语，后接宾语，也说 work something out。', 'They worked out the answer in class.', '他们在课上算出了答案。', ['work out a solution', 'work out how'], ['solve'], 'verb', '及物', '通用'],
  ],'works out~worked out~working out', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 exercise 锻炼置义项 1、solve 解决置义项 2（队列原样，各恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('work together', 'verb', '/ˌwɜːk təˈɡeðə(r)/', '', [], '一起工作；通力协作', 'To do a job together as a group.', [
    ['一起工作；通力合作', 'To do a task together, combining what each person contributes.', '把各自的贡献合起来共同完成一项任务。', '动词短语，分开写；常用于项目、班级、团队、部门。', 'The two departments work together on safety.', '两个部门在安全问题上通力合作。', ['work together as a team', 'work closely together'], ['coordinate'], 'verb', '不及物', '商务'],
  ], '', ['coordinate'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 coordinate 协作、协调（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）').phrase = true;

  W('workable', 'adjective', '/ˈwɜːkəbl/', 'A1', [], '可行的；能实行的', 'Able to be carried out or used successfully.', [
    ['可行的；切实可行的', 'Able to be carried out or put into practice successfully.', '在实际中能够执行或成功落实的。', '定语表语两用，形容计划、方案、时限。', 'They still need a workable timetable.', '他们仍需要一份可行的日程表。', ['a workable plan', 'a workable solution'], ['feasible'], 'adjective', '定语/表语', '通用'],
    ['能用的；可操作的', 'In good enough condition to be used or handled.', '状况足够好，可以使用或操作的。', '定语表语两用，多用于机器、工具、场地。', 'The old lift is not workable any more.', '那部旧电梯已经不能用了。', ['a workable vehicle', 'a workable solution'], ['viable'], 'adjective', '定语/表语', '工业'],
  ], '', ['viable'], 'brief 显示 ←?，按 §5.2 自扫根 work A1 工作、运转（自扫 author_w2.js 第 4 参）+-able（§5.4 透明后缀清单，先例 valuable←value A2、profitable←profit B1），「能够被执行/使用」与 work 语义直连，A1 继承；家族 viable 可行的（队列原样，入第 10 参），近义 feasible 可行的置义项 1、viable 可实行的置义项 2（队列原样、各恰好一次；fam 与 syn 同词，按 t8 先例两处各一次）；CET 标签队列为 -，故第 5 参 []');

  W('workday', 'noun', '/ˈwɜːkdeɪ/', 'A1', [], '工作日', 'A day when you normally go to work, usually Monday to Friday.', [
    ['工作日', 'A day on which people normally go to work, usually Monday to Friday.', '人们通常上班的日子，一般指周一至周五。', '可数；work week、workweek 也可指一周的工作日。', 'The office is open every workday.', '办公室每个工作日都开门。', ['a long workday', 'on a workday'], ['weekday'], 'noun', 'countable', '商务'],
  ], 'workdays', ['weekday'], 'brief 显示 ←?，按 §5.3 自扫根：复合词 work + day 取首成分在库词级 work A1 工作、活计（自扫 author_w2.js 第 4 参），「上班的那一天」与 work 语义直连，A1 继承（判断项：复合取首成分，同 streetcar←street A1 先例；day 不在库，不另取根）；家族/近义 weekday 工作日（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('worker', 'noun', '/ˈwɜːkə(r)/', 'A1', ['CET4'], '工人；工作者', 'A person who works, especially one doing manual or practical work.', [
    ['工人；雇工', 'A person employed to do physical or manual work.', '受雇从事体力劳动或手工劳动的人。', '可数；office worker、farm worker、seasonal worker 等复合词很常见。', 'The site employs thirty workers.', '这个工地雇了三十名工人。', ['a factory worker', 'a skilled worker'], ['operative', 'hand', 'plumber'], 'noun', 'countable', '职业'],
    ['工作者；从业者', 'Any person who does a particular job or activity.', '从事某种工作或活动的人，范围不限。', '可数，学术或正式语体，如 research worker。', 'Health workers visited every family in the area.', '卫生工作者走访了这一带的每个家庭。', ['a research worker', 'campaign workers'], [], 'noun', 'countable', '职业'],
  ], 'workers', ['operative', 'plumber'], 'brief 根提示 ←work A1 工作（自扫 author_w2.js 第 4 参复核为 A1），worker = work + -er（-er 施事后缀在 §5.4 清单内，先例 trooper←troop B2、viewer←view A2），「从事工作的人」与 work 语义直连，A1 继承；家族 operative 技工、plumber 管子工（队列原样，入第 10 参），近义 operative、hand、plumber 置首义项恰好一次；CET4 标签照抄队列');

  W('workers', 'noun', '/ˈwɜːkəz/', 'A1', [], '工人们；劳动者（总称）', 'People who work for an employer, taken as a group.', [
    ['工人（总称）；劳动者', 'People employed to work for an employer, taken as a group.', '作为一个整体来看受雇劳动的人们。', 'worker 的复数形式单列词条；作集体名词时谓语可用单数或复数，视强调整体还是成员而定。', 'The workers voted to accept the offer.', '工人们投票接受了这份提议。', ['factory workers', 'the workers'], ['labor'], 'noun', 'countable', '职业'],
  ], '',['worker'], 'brief 显示 ←?，按 §5.2 自扫根：worker 本批录入（work A1 + -er，第 4 参 A1，author_w10.js），workers 为 worker 的复数形式单列词条，按 §4 forms 留空，A1 继承（判断项：复数单列，同 systems←system A2、tropics←tropic C1 先例）；近义 labor 劳动、劳工（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('working day', 'noun', '/ˌwɜːkɪŋ ˈdeɪ/', '', [], '工作日', 'A day on which people normally go to work.', [
    ['工作日；上班日', 'A day of the week on which most people go to work.', '一周之中大多数人上班的那一天。', '短语条目；workday 的另一种写法。', 'The office is closed every working day afternoon.', '办公室每个工作日下午都关门。', ['a long working day', 'on a working day'], ['weekday'], 'noun', 'countable', '商务'],
  ], '', ['weekday'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 weekday 工作日（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）').phrase = true;

  W('working-class', 'adjective', '/ˌwɜːkɪŋ ˈklɑːs/', 'A1', [], '工人阶级的；工薪阶层的', 'Belonging to the social group of people who work for a living.', [
    ['工人阶级的；工薪阶层的', 'Belonging to the low or middle social group of people who work with their hands.', '属于以体力劳动为主的中下层社会群体。', '定语，组成 working-class family、working-class area 等。', 'She grew up in a working-class district.', '她在一个工人城区长大。', ['a working-class family', 'working-class housing'], [], 'adjective', '定语', '社会'],
    ['（政党、立场）代表工人阶级利益的', 'Claiming to support the interests of workers as a social class.', '声称代表工人阶级这一社会群体利益的。', '定语，形容政党、候选人、立场。', 'Their voters are working-class but their lives are middle-class.', '他们的选民是工人阶级，生活却属中产阶级。', ['a working-class party'], [], 'adjective', '定语', '政治'],
  ], '', ['middle-class'], 'brief 显示 ←?，按 §5.3 自扫根：连字符复合词 work + -ing + class 取首成分在库词级 work A1 工作、活计（自扫 author_w2.js 第 4 参），「从事劳动的人所构成的阶级」与 work 语义直连，A1 继承（判断项：复合取首成分 + 阶级化名词的语义直连核对，同 streetcar←street A1、turn-off←turn A1 先例；class A1 在库但不作根，取首成分）；家族 middle-class 中产阶级的（队列原样，入第 10 参）；队列 syn 列为空，故各义项近义数组均写 []；CET 标签队列为 -，故第 5 参 []');

  W('workings', 'noun', '/ˈwɜːkɪŋz/', 'A1', [], '内部构造；运作方式；思路', 'The inner parts of a system, or the process of thinking something through.', [
    ['（机器、系统的）内部构造；运作方式', 'The inner parts of a machine or system, or the way in which it operates.', '机器或系统的内部零件，或其运转的方式。', '常用复数形式；the workings of a system。', 'Nobody understands the workings of the engine.', '没有人懂这台发动机的内部构造。', ['the workings of a system', 'inner workings'], ['mechanic'], 'noun', 'countable', '工业'],
    ['（思考的）推敲过程；思路', 'The mental process of working something out step by step.', '一步一步把某事想透的思维过程。', '常用复数形式；the workings of the mind。', 'He explained the workings of his plan in detail.', '他详细解释了自己计划的思路。', ['the workings of the mind', 'share the workings'], [], 'noun', 'countable', '心理'],
  ],'workings',['work'], 'brief 显示 ←?，按 §5.2 自扫根 work A1 工作、运转（自扫 author_w2.js 第 4 参）+-ing（§5.4 透明后缀清单，先例 tuning←tune A2），「内部构造、运作方式」与 work 运转义直连，A1 继承；词头为复数形式，按 §4 forms 留空；近义 mechanic 技工（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('workload', 'noun', '/ˈwɜːkləʊd/', 'A1', [], '工作量；工作负荷', 'The amount of work that must be done.', [
    ['工作量；任务量', 'The amount of work that a person or a team has to do.', '一个人或一个团队必须完成的工作量。', '可数；heavy workload、reduce the workload 是常见搭配。', 'Her workload doubled after the merger.', '合并之后她的工作量翻了一番。', ['a heavy workload', 'reduce the workload'], ['load'], 'noun', 'countable', '商务'],
    ['（身心的）负荷；负担', 'The physical or mental effort that a person is asked to bear.', '要求一个人承受的体力或脑力负担。', '可数，医学健康与职场语境。', 'A heavy workload led to his illness.', '过重的工作负荷导致他病倒了。', ['workload stress', 'manage the workload'], [], 'noun', 'countable', '健康'],
  ], 'workloads',['work'], 'brief 显示 ←?，按 §5.3 自扫根：复合词 work + load 取首成分在库词级 work A1 工作（自扫 author_w2.js 第 4 参），「要完成的工作量」与 work 语义直连，A1 继承（判断项：复合取首成分，同 streetcar←street A1 先例；load B1 在库但不作根，取首成分）；近义 load 负荷（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('workplace', 'noun', '/ˈwɜːkpleɪs/', 'A1', [], '工作场所；办公地点', 'The building or place where work is done.', [
    ['工作场所；办公地点', 'The building or the area where a person does their job.', '一个人上班的楼房或场地。', '可数；in the workplace、workplace safety 是常见搭配。', 'The firm is moving to a new workplace.', '公司正搬到一个新的办公地点。', ['at the workplace', 'workplace safety'], ['office'], 'noun', 'countable', '商务'],
  ], 'workplaces', ['office'], 'brief 显示 ←?，按 §5.3 自扫根：复合词 work + place 取首成分在库词级 work A1 工作（自扫 author_w2.js 第 4 参），「上班的场所」与 work 语义直连，A1 继承（判断项：复合取首成分，同 streetcar←street A1 先例；place 不在库，不另取根）；家族/近义 office 办公室（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('works', 'noun', '/wɜːks/', 'A1', [], '（文学）作品；全部作品；工厂', 'The writings of one author, or a factory.', [
    ['（文学艺术）作品；著作', 'The writings, paintings or films created by one person.', '一个人创作的文章、绘画或影片。', 'work 的复数形式单列词条；the works of Shakespeare 指全部作品。', 'These works date from the late 1920s.', '这些作品创作于二十世纪二十年代末。', ['the complete works', 'the works of art'], [], 'noun', 'countable', '文学'],
    ['工厂；厂区', 'A factory or a group of buildings in which something is made.', '制造某物的工厂或厂区。', '常用复数形式，如 a steel works。', 'The works closed down in 1998.', '这家工厂于一九九八年倒闭。', ['a steel works', 'the works closed'], ['plant'], 'noun', 'countable', '工业'],
  ],'works',['work'], 'brief 根提示 ←work A1 工作（自扫 author_w2.js 第 4 参复核为 A1；库内 work 义项 5 作品、著作明注复数 works 指全部著作，义项 6 工厂、工程明注 often in the plural），works 为 work 的复数形式单列词条，按 §4 forms 留空，A1 继承（判断项：复数单列，同 systems←system A2、troops←troop B2 先例）；近义 plant 工厂（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('workstation', 'noun', '/ˈwɜːksteɪʃn/', 'A1', [], '工作站；工位', 'A desk or device where one person does work.', [
    ['工作站；办公用电脑', 'A computer and its screen set up for one person to work with.', '供一个人操作用的一整套电脑设备。', '可数；信息技术与办公室场景。', 'The design team has three new workstations.', '设计组新增了三台工作站。', ['a computer workstation', 'at a workstation'], ['terminal'], 'noun', 'countable', '工具'],
    ['工位；工作台', 'A place at a desk where a person carries out work.', '人在桌前干活的那个位置。', '可数，工厂、实验室、办公室通用。', 'Keep your workstation clear before you leave.', '离开之前请把工位收拾干净。', ['a shared workstation', 'clean the workstation'], [], 'noun', 'countable', '职业'],
  ], 'workstations',['work'], 'brief 显示 ←?，按 §5.3 自扫根：复合词 work + station 取首成分在库词级 work A1 工作（自扫 author_w2.js 第 4 参），「工作用的台位」与 work 语义直连，A1 继承（判断项：复合取首成分，同 streetcar←street A1 先例；station 不在库，不另取根）；近义 terminal 终端机（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('workweek', 'noun', '/ˈwɜːkwiːk/', 'A1', [], '工作周；每周工作日', 'The days of one week on which people work, or the hours worked in a week.', [
    ['工作周（一周的工作日）', 'The days of one week on which most people work, or the whole span of working.', '一周之中人们上班的那些日子，或整个工作周期。', '可数；英式英语常写 workweek，美式常写 work week。', 'The company shortened the workweek to four days.', '公司把工作周缩短到四天。', ['a forty-hour workweek', 'during the workweek'], ['week'], 'noun', 'countable', '商务'],
  ], 'workweeks',['work'], 'brief 显示 ←?，按 §5.3 自扫根：复合词 work + week 取首成分在库词级 work A1 工作（自扫 author_w2.js 第 4 参），「一周的工作日」与 work 语义直连，A1 继承（判断项：复合取首成分，同 streetcar←street A1 先例；week A1 亦在库但不作根，按 §5.3 取首成分 work）；近义 week 周（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('worldly', 'adjective', '/ˈwɜːldli/', 'A1', [], '世俗的；尘世的；老于世故的', 'Concerned with everyday and material life rather than spiritual matters.', [
    ['世俗的；尘世的', 'Concerned with everyday material life rather than with spiritual or moral values.', '关注日常物质生活而非精神或道德价值的。', '定语表语两用，形容态度、观念、生活。', 'He grew more worldly as he lived abroad.', '在国外生活期间他渐渐世故起来。', ['worldly goods', 'worldly pleasures'], ['secular', 'material', 'temporal'], 'adjective', '定语/表语', '社会'],
    ['老于世故的；处世老练的', 'Experienced in the ways of society and skilled at dealing with people.', '熟悉社会人情世故、善于与人打交道的。', '定语表语两用，可含贬义。', 'A smooth and worldly young lawyer.', '一个圆滑老练的年轻律师。', ['a worldly man', 'worldly-wise'], ['cosmopolitan', 'sophisticated'], 'adjective', '定语/表语', '性格'],
  ], '', ['cosmopolitan', 'secular'], 'brief 根提示 ←world A1 世界、人世（自扫 author_w2.js 第 4 参复核为 A1），库内 world 义项 3「人世、生活环境」与 worldly 世俗的、尘世的语义直连，-ly 在 §5.4 透明后缀清单（先例 truly←true A1），A1 继承；家族 cosmopolitan 世故的、secular 世俗的（队列原样，入第 10 参），近义 secular、material、temporal 置义项 1，cosmopolitan、sophisticated 置义项 2，共 5 词均队列原样、各恰好一次；CET 标签队列为 -，故第 5 参 []');

  W('worn', 'adjective', '/wɔːn/', 'A1', [], '破旧的；磨损的；筋疲力尽的', 'Damaged by use, or very tired.', [
    ['磨损的；破旧的', 'No longer in good condition because of long use.', '因长期使用而不再完好的。', '定语表语两用，多作定语形容衣物、鞋、路面。', 'He wore a pair of worn boots.', '他穿着一双破旧的靴子。', ['worn shoes', 'a worn path', 'worn out'], ['old', 'shabby'], 'adjective', '定语/表语', '通用'],
    ['筋疲力尽的', 'So tired that no energy is left.', '累到一点力气也没有的。', '多作表语，是 wear 的过去分词用法。', 'The children came home worn out from the trip.', '孩子们旅行回来累坏了。', ['worn out', 'leave somebody worn'], [], 'adjective', '表语', '情感'],
  ], '', ['shabby'], 'brief 显示 ←?，按 §5.2 自扫根 wear A1 穿、戴、磨损（自扫 author_w1.js 第 4 参），worn 为 wear 的不规则过去分词转形容词（-n 过去分词类，先例 unknown←know A1、-en 分词形容词先例 spoken←speak A1、sunken←sink A2、mistaken←mistake A2），「磨损的、破旧的」与 wear 磨损义直连，A1 继承（判断项：wear→worn 词形非全段重合，ear→or 元音交替，按分词形容词类推）；家族/近义 shabby 破旧的（队列原样，fam 入第 10 参，syn 置义项 1），old 老的、旧老的置义项 1（队列原样，各恰好一次）；形容词 forms 按 §4 留空；CET 标签队列为 -，故第 5 参 []');

  W('worried', 'adjective', '/ˈwʌrid/', 'A2', ['CET4'], '担心的；忧虑的', 'Anxious about something that may happen.', [
    ['担心的；忧虑的', 'Feeling anxious because of uncertainty about what may happen.', '因为对可能发生的事没有把握而心里不安的。', '表语为主，常与 about、over、for 连用。', 'Her parents are worried about her safety.', '她的父母为她的安全担心。', ['worried about something', 'a worried look'], ['anxious', 'uneasy'], 'adjective', '表语', '情感'],
    ['（表情、语气）流露忧虑的', 'Showing worry in the face or the voice.', '在表情或语气上流露出忧虑的。', '多作定语，形容表情、语气、目光。', 'She answered in a worried voice.', '她用一种忧虑的语气回答。', ['a worried expression', 'a worried silence'], [], 'adjective', '定语', '通用'],
  ], '', ['uneasy'], 'brief 根提示 ←worry A2 担心（自扫 author_w2.js 第 4 参复核为 A2，库内 worry 义项 1 担心、义项 3 担心、烦心事），worried 为 worry 的过去分词兼形容词（-ed 类，y→ied 正字，§5.4 清单，先例 unhurried←hurry A2、unmarried←marry A2），「感到担心的」与 worry 语义直连，A2 继承；家族 uneasy 不安的（队列原样，入第 10 参），近义 anxious 焦虑的、uneasy 不安的置首义项恰好一次；CET4 标签照抄队列');

  W('worsen', 'verb', '/ˈwɜːsn/', 'A2', [], '使恶化；变得更糟', 'To make something worse, or to become worse.', [
    ['使恶化；使更糟', 'To make a bad situation or a problem even worse.', '使糟糕的局面或问题变得更糟。', '及物动词，宾语是 situation、problem、condition 等。', 'The storm worsened the flooding.', '暴风雨使洪水更加严重。', ['worsen a situation', 'worsen relations'], ['aggravate', 'escalate'], 'verb', '及物', '通用'],
    ['（情况）恶化；变坏', 'To become worse, or to get worse over time.', '变糟，或随着时间推移而变差。', '不及物动词，主语是 situation、condition、illness 等。', 'His health worsened after the operation.', '手术后他的健康恶化了。', ['the situation worsens', 'conditions worsen'], ['deteriorate'], 'verb', '不及物', '健康'],
  ], 'worsens~worsened~worsened~worsening', ['deteriorate', 'escalate'], 'brief 显示 ←?，按 §5.2 自扫根 worse A2 更坏的（自扫 author_w2.js 第 4 参）+ -en（-en 在 §5.4 透明后缀清单，使动后缀，先例 soften←soft A1、strengthen←strong A2、sweeten←sweet A1），「变坏」与 worse 语义直连，A2 继承；家族 deteriorate 恶化、escalate 升级（队列原样，入第 10 参），近义 aggravate、escalate 置义项 1，deteriorate 置义项 2（队列原样，各恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('worshipper', 'noun', '/ˈwɜːʃɪpə(r)/', 'B2', [], '崇拜者；礼拜的人', 'A person who worships a god, or who admires someone too much.', [
    ['（宗教）礼拜者；信众', 'A person who takes part in the worship of God in a church or a temple.', '在教堂或寺庙参与礼拜的人。', '可数，正式用语。', 'The congregation of worshippers filled the hall.', '信众们坐满了礼堂。', ['a faithful worshipper', 'the worshippers arrived'], ['pilgrim'], 'noun', 'countable', '宗教'],
    ['（贬）崇拜者；狂热追随者', 'A person who shows far too much admiration for someone or something.', '对某人或某事表现出过度仰慕的人。', '可数，略带贬义。', 'He is a real worshipper of that old team.', '他是那支老队的铁杆球迷。', ['a celebrity worshipper', 'an idol worshipper'], [], 'noun', 'countable', '社交'],
  ], 'worshippers', ['pilgrim'], 'brief 根提示 ←worship B2 敬奉、崇拜、礼拜（自扫 author_w2.js 第 4 参复核为 B2，库内 worship 义项 2 崇拜、极度爱慕），worshipper = worship + -er（-er 施事后缀在 §5.4 清单内，先例 trooper←troop B2、viewer←view A2），「从事礼拜或崇拜的人」与 worship 语义直连，B2 继承；英式拼写双写 p，-er 弱读 /ə/；家族/近义 pilgrim 朝圣者（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）；CET 标签队列为 -，故第 5 参 []');
})(typeof window !== 'undefined' ? window : globalThis);
