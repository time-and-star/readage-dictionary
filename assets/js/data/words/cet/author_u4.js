/* data/words/cet/author_u4.js — U 批次 4，缺口 unexpectedly ~ unmarried，共 31 条
 * （30 单词 + 1 短语；短语清单：unheard of）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_u4.txt，widx 063-093，词头无残缺）。
 * CET 标签照抄队列：CET4 × 2（unity、universal），CET6 × 0，其余 29 条 []（含 1 条短语）。
 * brief：%TEMP%\opencode\_u4_brief.txt 共 30 行，与本批 30 个单词一一对应（首行 unexpectedly、末行 unmarried），
 *   短语 unheard of 不入 brief（与任务说明一致）；brief 的 refs 与任务清单 fam/syn 逐条比对一致，无错位。
 *   29 行显示 ←?，1 行给出根提示（united ←unit A2 noun），一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf("W('词头'") 取第 4 参，扫 assets/js/data/words/cet/author_*.js，
 *   跳过并行会话占用的 author_w*，未 require 全库）。
 * 扫根结论（自扫，第 4 参）：expect A1（author_e2.js）、fair A2 / familiar A2 / fasten B1（author_f1.js）、
 *   favourable B1（author_f4.js）、fill A1 / fix A2（author_f2.js）、fortunate B1 / friendly A1（author_f7.js）、
 *   happy A1 / harm B1（author_h1.js）、hurry A2（author_h4.js）、important A1（author_i1.js）、
 *   inform B1 / inhibit C1（author_i3.js）、intentional B1（author_i8.js）、
 *   union B1 / unite B1 / unit A2 / universe B1（author_u1.js）、just A2（author_j2.js）、
 *   kind A1 / know A1（author_k1.js）、law B1（author_l1.js）、likely ''（author_l4.js，自身缺级）、
 *   limit B1 / lock A2（author_l2.js）、marry A2（author_m1.js）、organize A2（author_o2.js，仅近义）。
 * · brief 根提示复核：united 的 ←unit A2 noun 未采用——unit 与 unite 同前缀（brief 只列同前缀根可能误链，
 *   规范 §5.1），库内 unit 义为「单位、单元、部件」，与 united「联合的」非现代语义直连；
 *   改取直接派生基 unite B1（author_u1.js 第 4 参）+ -ed（§5.4 -ed 透明），B1 继承（判断项披露，供主 agent 裁定）。
 * · 继承（29 单词）：
 *   un- 前缀不作成分（§5.3、malfunction 模式），取前缀后词根、否定方向语义直连：
 *   unexpectedly←expect A1（-ed、-ly 透明）、unfair←fair A2、unfamiliar←familiar A2、
 *   unfasten←fasten B1、unfastened←fasten B1 + -ed、unfavourable←favourable B1（favour 不在库）、
 *   unfilled←fill A1 + -ed、unfixed←fix A2 + -ed、unfortunate←fortunate B1、unfriendly←friendly A1、
 *   unhappy←happy A1、unharmed←harm B1 + -ed、unhurried←hurry A2 + -ied（y→i 正字）、
 *   unimportant←important A1、uninformed←inform B1 + -ed、uninhibited←inhibit C1 + -ed、
 *   unintentional←intentional B1、unintentionally←intentional B1 + -ly、unjust←just A2、
 *   unkind←kind A1、unknown←know A1 + -n（过去分词）、unlawful←law B1 + -ful、
 *   unlimited←limit B1 + -ed、unlock←lock A2、unmarried←marry A2 + -ied（y→i 正字）；
 *   非 un- 切分的直接派生：united←unite B1 + -ed（见上条 brief 复核）、universal←universe B1 + -al、
 *   unionize←union B1 + -ize（-ize 按 §4c 库内先例面，判断项：先例 specialize←special A2、
 *     stabilise←stable B2（author_s20.js）、库内 modernizes、economizes）；
 *   unity←unit A2 + -ty（-ty/-ity 按 §4c 与库内 -ity 先例面，判断项：先例 sovereignty←sovereign C1、
 *     sentimentality←sentiment C1（author_s12.js）、库内 sensitivity、ambiguity、animality；
 *     语义直连核对：unit「单个整体」→ unity「合为一个整体」，通过）。
 * · 留空（1 单词 + 1 短语）：unlikely（un- 前缀后词根 likely 在库但第 4 参为 ''，根自身无 CEFR，
 *   无级可继，同 author_n3.js nonconformists←conform 缺级留空先例）；unheard of（短语，按 §6 分级留空）。
 * CEFR 分布（30 单词）：A1 × 7（unexpectedly、unfilled、unfriendly、unhappy、unimportant、unkind、unknown）、
 *   A2 × 8（unfair、unfamiliar、unfixed、unhurried、unity、unjust、unlock、unmarried）、
 *   B1 × 13（unfasten、unfastened、unfavourable、unfortunate、unharmed、uninformed、unintentional、
 *   unintentionally、unionize、united、universal、unlawful、unlimited）、C1 × 1（uninhibited）、留空 × 1（unlikely）；
 *   短语 1 条留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_u4.js 必须在 _cet_helper.js 之后加载');

  W('unexpectedly', 'adverb', '/ˌʌnɪkˈspektɪdli/', 'A1', [], '出乎意料地；意外地', 'In a way that nobody was expecting.', [
    ['出乎意料地', 'In a way that was not expected or planned for.', '以没有料到、不在计划之中的方式。', '修饰动词。常修饰 happen、arrive、end 等，也可置于句首修饰整句。', 'The results arrived unexpectedly early.', '结果出乎意料地早早到了。', ['happen unexpectedly', 'unexpectedly fast'], ['abruptly'], 'adverb', '不及物', '通用'],
  ], '',['expect'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 expect A1 期望（自扫 author_e2.js 第 4 参），「没料到」与 expect 否定方向语义直连，-ed、-ly 均在 §5.4 清单，A1 继承；近义 abruptly 突然地、猝然地（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unfair', 'adjective', '/ʌnˈfeə/', 'A2', [], '不公平的；不公正的', 'Not treating all people in the same way, or simply not right.', [
    ['不公平的；不公正的', 'Treating some people better than others in a way that is not right.', '以不正当的方式区别对待一些人。', '定语表语两用，常见 it is unfair to do sth、unfair treatment。', 'It is unfair to blame only one side.', '只责怪一方并不公平。', ['unfair treatment', 'it is unfair to do sth'], ['shabby'], 'adjective', '定语/表语', '社会'],
  ], '',['fair'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 fair A2 公平的、公正的（自扫 author_f1.js 第 4 参），否定方向语义直连，A2 继承；近义 shabby 不公正的、卑劣的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unfamiliar', 'adjective', '/ˌʌnfəˈmɪliə/', 'A2', [], '不熟悉的；陌生的', 'Not known to you, or not well known in general.', [
    ['陌生的；没见过的', 'Not known to you because you have never seen or experienced it before.', '因为从未见过或经历过而不认识。', '定语表语两用，常与 to sb 连用。', 'The streets were unfamiliar in the dark.', '天黑之后，这些街道显得很陌生。', ['an unfamiliar place', 'an unfamiliar face'], ['new', 'strange'], 'adjective', '定语/表语', '通用'],
    ['不了解的；外行的', 'Not known about because you have no experience of that subject or activity.', '因为没有接触过某个题目或活动而不甚了了。', '表语为主，后接 with 或 to。', 'The subject was completely unfamiliar to me.', '这门学科我完全不了解。', ['unfamiliar with the rules'], ['alien', 'foreign'], 'adjective', '表语', '教育'],
  ], '', ['strange'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 familiar A2 熟悉的（自扫 author_f1.js 第 4 参），否定方向语义直连，A2 继承；家族 strange 陌生的、奇怪的（队列原样，入第 10 参），近义 new 新的、陌生的与 strange 陌生的置义项 1，alien 陌生的、格格不入的与 foreign 陌生的、外来的置义项 2，均队列原样、各恰好一次');

  W('unfasten', 'verb', '/ʌnˈfɑːsn/', 'B1', [], '解开；松开', 'To open a fastening, or to make something become loose.', [
    ['解开（扣件）', 'To open a fastening such as a button, zip or belt.', '打开扣子、拉链、带子之类的扣件。', '及物动词，宾语是扣件；反义 fasten。', 'She unfastened the seat belt before getting out.', '下车之前她解开了安全带。', ['unfasten a belt', 'unfasten the buttons'], ['undo'], 'verb', '及物', '家居'],
    ['松开；使脱离', 'To make something become loose so that it can be taken away.', '使某物松开，便于取下。', '及物动词，宾语是绳索、系带等。', 'He unfastened the rope from the post.', '他把绳子从柱子上解了下来。', ['unfasten the rope'], ['open'], 'verb', '及物', '通用'],
  ], 'unfastens~unfastened~unfastened~unfastening', ['open', 'undo'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 fasten B1 扣紧、系上（自扫 author_f1.js 第 4 参），反向动作语义直连（解开即松开扣件），B1 继承；家族 open 打开、undo 解开与近义 open、undo（队列原样，入第 10 参，undo 置义项 1、open 置义项 2，各恰好一次）');

  W('unfastened', 'adjective', '/ʌnˈfɑːsnd/', 'B1', [], '未扣上的；松开的', 'Not fastened, or left open.', [
    ['未扣上的；未系紧的', 'Not fastened, so that it may come open.', '没有扣好，因此可能松开。', '定语表语两用，说明扣件、带子的状态。', 'The door was unfastened and swung open.', '门没扣上，一推就开了。', ['leave the latch unfastened'], ['open'], 'adjective', '定语/表语', '家居'],
  ], '',['fasten'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 fasten B1 扣紧、系上（自扫 author_f1.js 第 4 参）+ -ed（§5.4 清单），否定方向语义直连，B1 继承（本词为 fastened 的否定式，unfasten 同批录入）；近义 open 开着的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unfavourable', 'adjective', '/ʌnˈfævərəbl/', 'B1', [], '不利的；不赞成的', 'Not giving an advantage, or showing that you do not support somebody.', [
    ['不利的；不适宜的', 'Not giving you an advantage, or not likely to help.', '不带来好处，或不太可能有帮助。', '定语表语两用，后接 to、for 或 towards。', 'The forecast is unfavourable for the launch.', '天气预报对这次发射不利。', ['unfavourable conditions', 'an unfavourable review'], ['adverse'], 'adjective', '定语/表语', '通用'],
    ['不赞成的；态度不友好的', 'Showing that you do not support somebody or do not think well of them.', '表现出不支持某人或对某人评价不高。', '定语表语两用，常与 comment、attitude、impression 连用。', 'The paper gave the play an unfavourable notice.', '报纸给这出戏的是差评。', ['an unfavourable attitude', 'an unfavourable impression'], ['hostile'], 'adjective', '定语/表语', '媒体'],
  ], '',['favourable'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 favourable B1 有利的、赞成的（自扫 author_f4.js 第 4 参；favour 不在库），否定方向语义直连，B1 继承；近义 adverse 不利的、逆的置义项 1，hostile 敌意的、不友好的置义项 2（队列原样，各恰好一次）；fam 队列为空故第 10 参 []');

  W('unfilled', 'adjective', '/ʌnˈfɪld/', 'A1', [], '未填补的；未填写的', 'Not filled, or left empty.', [
    ['（空缺、职位）未填补的', 'Not taken by anybody yet, so that somebody can still be chosen.', '尚无人占据，因此仍可有人补上。', '定语表语两用，多指职位、名额、空位。', 'The post has remained unfilled for months.', '这个职位已经空缺数月。', ['an unfilled vacancy', 'unfilled posts'], ['vacant'], 'adjective', '定语/表语', '职业'],
    ['未填写的；未装满的', 'Not completed, or not filled to the top.', '没有填完，或没有装到满。', '定语表语两用，指表格、票据、容器。', 'The form was left unfilled on the desk.', '表格被留在桌上，没有填写。', ['an unfilled form', 'an unfilled cup'], [], 'adjective', '定语/表语', '通用'],
  ], '',['fill'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 fill A1 装满、填写（自扫 author_f2.js 第 4 参）+ -ed（§5.4 清单），否定方向语义直连，A1 继承；近义 vacant 空着的、未被占用的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unfixed', 'adjective', '/ʌnˈfɪkst/', 'A2', [], '未固定的；未确定的', 'Not fixed in place, or not yet decided.', [
    ['未固定的；松动的', 'Not fixed in place, so that it is able to move.', '没有固定住，因此可以活动。', '定语表语两用，指零件、装置、支架。', 'One leg of the table is still unfixed.', '这张桌子还有一条腿没固定住。', ['an unfixed shelf'], [], 'adjective', '定语/表语', '家居'],
    ['未确定的；未定的', 'Not yet decided or settled.', '尚未决定或敲定。', '定语表语两用，指日期、数额、期限。', 'The date of the trip is still unfixed.', '出行日期仍未确定。', ['an unfixed price'], ['indefinite'], 'adjective', '定语/表语', '商务'],
  ], '',['fix'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 fix A2 修理、固定（自扫 author_f2.js 第 4 参）+ -ed（§5.4 清单），否定方向语义直连，A2 继承；近义 indefinite 不明确的、未定的（队列原样，置第二义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unfortunate', 'adjective', '/ʌnˈfɔːtʃənət/', 'B1', [], '不幸的；不恰当的', 'Having bad luck, or not suitable in a situation.', [
    ['不幸的；倒霉的', 'Having bad luck, or caused by bad luck.', '运气不好，或由坏运气造成的。', '定语表语两用，可指人，也可指事情。', 'He was in the unfortunate position of owing money.', '他不巧欠了钱，处境尴尬。', ['an unfortunate accident', 'an unfortunate mistake'], ['poor'], 'adjective', '定语/表语', '通用'],
    ['不合适的；欠考虑的', 'Not suitable or tactless in a particular situation.', '在特定场合不合适或欠考虑。', '多作定语，形容选择、措辞、时机。', 'That was an unfortunate choice of words.', '那个词用得不大合适。', ['an unfortunate remark'], [], 'adjective', '定语/表语', '书面'],
  ], '',['fortunate'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 fortunate B1 幸运的（自扫 author_f7.js 第 4 参；fortune B1 亦在库 author_f2.js），否定方向语义直连，B1 继承；近义 poor 可怜的、不幸的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unfriendly', 'adjective', '/ʌnˈfrendli/', 'A1', [], '不友好的；难以接近的', 'Not kind or pleasant, or difficult to use.', [
    ['不友好的；不友善的', 'Not kind or pleasant towards somebody.', '对某人不友善、不客气。', '定语表语两用，形容神情、语气、态度，常与 to sb 连用。', 'She gave an unfriendly look across the room.', '她朝房间那头投去不友善的一瞥。', ['an unfriendly attitude', 'unfriendly towards strangers'], ['hostile'], 'adjective', '定语/表语', '性格'],
    ['（环境、设计）不便于使用的', 'Difficult or unpleasant to use.', '难以使用或让人不舒服。', '多作定语，形容布局、界面、气候。', 'The office layout is unfriendly to visitors.', '这处办公室的布局对来访者并不友好。', ['an unfriendly design'], [], 'adjective', '定语/表语', '家居'],
  ], '', ['hostile'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 friendly A1 友好的（自扫 author_f7.js 第 4 参），否定方向语义直连，A1 继承；家族 hostile 敌意的、不友好的（队列原样，入第 10 参），近义 hostile 置首义项恰好一次');

  W('unhappy', 'adjective', '/ʌnˈhæpi/', 'A1', [], '不快乐的；不幸的', 'Not feeling pleased or content, or causing suffering.', [
    ['不快乐的；不满意的', 'Not feeling pleased or content, or feeling slightly worried.', '感到不高兴、不满足，或略有不安。', '定语表语两用，常与 about、with 连用。', 'The children were unhappy about the change.', '孩子们对这个变动感到不快。', ['unhappy about the news', 'an unhappy childhood'], ['sad', 'upset'], 'adjective', '定语/表语', '情感'],
    ['痛苦的；令人难过的', 'Making you feel bad, or unpleasant in a way that causes suffering.', '使人难受，或带来痛苦的。', '多作定语，形容经历、结局、时刻。', 'It ended in the most unhappy way.', '事情以最令人难堪的方式收场。', ['an unhappy ending'], ['miserable'], 'adjective', '定语/表语', '情感'],
  ], '', ['miserable', 'sad'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 happy A1 快乐的（自扫 author_h1.js 第 4 参），否定方向语义直连，A1 继承；家族 miserable 悲惨的、sad 难过的（队列原样，入第 10 参），近义 sad 置义项 1、upset 心烦的置义项 1、miserable 置义项 2，均队列原样、各恰好一次');

  W('unharmed', 'adjective', '/ʌnˈhɑːmd/', 'B1', [], '未受伤的；安然无恙的', 'Not hurt or damaged in any way.', [
    ['未受伤的；安然无恙的', 'Not hurt or damaged in any way, especially after a dangerous event.', '没有受到任何伤害或损坏，尤指经历危险之后。', '多作表语，常见 escape、get through、remain 后。', 'Everyone escaped from the fire unharmed.', '所有人都从火场逃了出来，安然无恙。', ['escape unharmed', 'remain unharmed'], ['safe'], 'adjective', '表语', '健康'],
  ], '',['harm'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 harm B1 伤害、损害（自扫 author_h1.js 第 4 参）+ -ed（§5.4 清单），否定方向语义直连，B1 继承；近义 safe 安全的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unheard of', 'adjective', '/ˌʌn hɜːd ɒv/', '', [], '闻所未闻的；前所未有的', 'Not known because nothing like it has ever happened or been reported.', [
    ['闻所未闻的；前所未有的', 'Never known or talked about because nothing like it has happened before.', '因为从未发生过同类事情而不为人所知。', '形容词短语，只作表语，常用 It is unheard of that...。', 'It is unheard of for a pilot to ignore the signal.', '飞行员无视信号是闻所未闻的。', ['a practice that is unheard of'], ['unprecedented'], 'adjective', '表语', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 unprecedented 空前的、史无前例的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('unhurried', 'adjective', '/ʌnˈhʌrid/', 'A2', [], '不慌不忙的；从容的', 'Done slowly and calmly, without being rushed.', [
    ['不慌不忙的；从容的', 'Done slowly and calmly, without any rush.', '做得很慢、很平静，毫不匆忙。', '定语表语两用，形容动作、节奏、语气。', 'She gave an unhurried explanation of the rules.', '她不慌不忙地说明了规则。', ['an unhurried pace'], ['slow'], 'adjective', '定语/表语', '通用'],
    ['悠闲的；悠闲自在的', 'Relaxed and comfortable, with plenty of time.', '放松自在、时间充裕的。', '定语表语两用，形容下午、午餐、日子。', 'We spent an unhurried afternoon by the river.', '我们在河边度过了一个悠闲的下午。', ['an unhurried lunch'], [], 'adjective', '定语/表语', '通用'],
  ], '', ['slow'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 hurry A2 匆忙、催促（自扫 author_h4.js 第 4 参）+ -ied（y→i 正字，-ed 类形容词），否定方向语义直连，A2 继承；家族 slow 慢的（队列原样，入第 10 参），近义 slow 置首义项恰好一次');

  W('unimportant', 'adjective', '/ˌʌnɪmˈpɔːtnt/', 'A1', [], '不重要的；微不足道的', 'Not having much effect, value or influence.', [
    ['不重要的；微不足道的', 'Not having much effect, value or influence.', '影响不大、价值不高或无足轻重。', '定语表语两用，反义 important，常与 to sb 连用。', 'The detail is unimportant at this stage.', '这个细节在此阶段并不重要。', ['an unimportant detail'], ['trivial'], 'adjective', '定语/表语', '通用'],
  ], '', ['trivial'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 important A1 重要的（自扫 author_i1.js 第 4 参），否定方向语义直连，A1 继承；家族 trivial 琐碎的、微不足道的（队列原样，入第 10 参），近义 trivial 置唯一义项恰好一次');

  W('uninformed', 'adjective', '/ˌʌnɪnˈfɔːmd/', 'B1', [], '不知情的；缺乏知识的', 'Not given enough information, or having little knowledge.', [
    ['不知情的；未被告知的', 'Not given enough information about something.', '没有获得关于某事的足够信息。', '定语表语两用，常与 about、on 连用。', 'The public remained uninformed about the risk.', '公众仍未被告知这一风险。', ['uninformed about the decision'], ['ignorant'], 'adjective', '定语/表语', '社会'],
    ['缺乏知识的；不明实情的', 'Having little knowledge of a subject or of what is really going on.', '对某个题目或实际情况了解甚少。', '定语表语两用，语气比 uninformed 的第一义更强调知识不足。', 'An uninformed guess may mislead the team.', '凭一知半解的猜测可能会误导团队。', ['an uninformed opinion'], [], 'adjective', '定语/表语', '教育'],
  ], '',['inform'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 inform B1 告知、通报（自扫 author_i3.js 第 4 参）+ -ed（§5.4 清单），否定方向语义直连，B1 继承；近义 ignorant 无知的、不了解的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('uninhibited', 'adjective', '/ˌʌnɪnˈhɪbɪtɪd/', 'C1', [], '无拘束的；不加掩饰的', 'Behaving freely without holding back.', [
    ['无拘束的；放任的', 'Behaving freely without worrying about what other people may think.', '行为不受拘束，不在意别人的看法。', '定语表语两用，形容笑声、舞姿、交谈。', 'The crowd was uninhibited in its celebration.', '人群毫无拘束地欢庆着。', ['uninhibited laughter'], ['abandoned'], 'adjective', '定语/表语', '性格'],
    ['不加掩饰的；自然流露的', 'Not held back by rules or by self-control.', '不受规则或自我克制的约束。', '定语表语两用，形容冲动、喜悦、反应。', 'Her uninhibited reaction surprised the host.', '她毫不掩饰的反应让主人吃了一惊。', ['uninhibited joy'], [], 'adjective', '定语/表语', '情感'],
  ], '',['inhibit'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 inhibit C1 抑制、约束（自扫 author_i3.js 第 4 参）+ -ed（§5.4 清单），否定方向语义直连，C1 继承；近义 abandoned 放任的、无拘束的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unintentional', 'adjective', '/ˌʌnɪnˈtenʃənl/', 'B1', [], '非故意的；无意的', 'Not done on purpose.', [
    ['非故意的；无意的', 'Not planned or done on purpose.', '不是事先计划或有意去做的。', '定语表语两用，常与 damage、mistake、leak 连用。', 'The damage was unintentional but costly.', '损坏虽是无意造成的，代价却不小。', ['unintentional damage'], ['accidental'], 'adjective', '定语/表语', '法律'],
  ], '',['intentional'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 intentional B1 故意的（自扫 author_i8.js 第 4 参；intention B1、intend B1 亦在库），否定方向语义直连，B1 继承；近义 accidental 意外的、无意的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unintentionally', 'adverb', '/ˌʌnɪnˈtenʃənəli/', 'B1', [], '非故意地；无意中', 'Without meaning to do something.', [
    ['非故意地；无意中', 'Without meaning or planning to do something.', '并非有意或事先计划去做某事。', '修饰动词。常修饰 break、mislead、reveal、omit 等。', 'He unintentionally revealed the plan.', '他无意中泄露了计划。', ['unintentionally misleading'], ['accidentally'], 'adverb', '不及物', '通用'],
  ], '',['intentional'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 intentional B1 故意的（自扫 author_i8.js 第 4 参）+ -ly（§5.4 清单），否定方向语义直连，B1 继承；近义 accidentally 意外地、无意中（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unionize', 'verb', '/ˈjuːniənaɪz/', 'B1', [], '成立工会；使加入工会', 'To form a union, or to organize workers into one.', [
    ['成立工会；加入工会', 'To form a labour union or to join one.', '成立劳工工会，或加入工会。', '多作不及物动词，常与 to 连用，主语是工人。', 'The staff voted to unionize after the pay cut.', '降薪之后，员工投票决定成立工会。', ['vote to unionize'], [], 'verb', '不及物', '职业'],
    ['使…组成工会；把…组织起来', 'To organize workers into a single union.', '把工人组织成一个工会。', '及物动词，宾语是工人或企业。', 'They spent a year unionizing the factories.', '他们花了一年时间让这些工厂的工人加入工会。', ['unionize the staff'], ['organize'], 'verb', '及物', '职业'],
  ], 'unionizes~unionized~unionized~unionizing',['union'], 'brief 显示 ←?，按 §5.2 自扫根：union B1 工会、联合（自扫 author_u1.js 第 4 参）+ -ize（§4c 清单外后缀按库内先例面裁定：先例 specialize←special A2、stabilise←stable B2（author_s20.js）、库内 modernizes、economizes）；「组成工会」与 union 语义直连，B1 继承（判断项披露）；近义 organize 组织、把…组织起来（队列原样，置第二义项恰好一次）；fam 队列为空故第 10 参 []');

  W('united', 'adjective', '/juˈnaɪtɪd/', 'B1', [], '联合的；团结的', 'Joined together as one, or agreed by everybody.', [
    ['联合的；统一的', 'Combined into a single body, state or organization.', '合并为单一的整体、政体或机构。', '定语表语两用，常与 in、with 连用。', 'The two firms operated as a united company.', '两家公司作为一个联合实体运作。', ['a united front', 'united in purpose'], ['incorporate'], 'adjective', '定语/表语', '社会'],
    ['一致的；全体一致的', 'Agreed by every member of a group.', '小组中每个成员都同意的。', '定语表语两用，常与 decision、response 连用。', 'The council issued a united statement.', '委员会发表了一份全体一致的声明。', ['a united decision'], ['unanimous'], 'adjective', '定语/表语', '政治'],
  ], '', ['unanimous'], 'brief 根提示 ←unit A2 单位、单元（noun）按 §5.1 复核不通过：unit 与 unite 同前缀（brief 只列同前缀根可能误链），库内 unit 义为「单位、单元、部件」，与 united「联合的」非现代语义直连；改按 §5.2 自扫直接派生基 unite B1 联合、团结（自扫 author_u1.js 第 4 参）+ -ed（§5.4 清单），语义直连，B1 继承（判断项披露，供主 agent 裁定）；家族 unanimous 全体一致的（队列原样，入第 10 参），近义 incorporate 合并、并入置义项 1、unanimous 置义项 2，均队列原样、各恰好一次');

  W('unity', 'noun', '/ˈjuːnəti/', 'A2', ['CET4'], '团结；统一体', 'The state of being joined as one, or a single complete whole.', [
    ['团结；一致', 'The state of being joined together and acting as one.', '被联结为一个整体并一致行动的状态。', '不可数，常与 national、party、sense of 连用。', 'The crisis restored a sense of unity to the party.', '这场危机使党内重又团结起来。', ['national unity', 'unity of purpose'], ['cohesion', 'solidarity'], 'noun', 'uncountable', '社会'],
    ['统一体；完整状态', 'A single complete whole, or the condition of forming one.', '一个完整的整体，或构成完整整体的状态。', '可数或不可数，正式书面语，艺术与哲学语境常见。', 'The artist valued unity above detail.', '这位艺术家看重整体的统一大过细节。', ['a unity of form'], ['integrity'], 'noun', 'countable', '艺术'],
  ], 'unities', ['cohesion'], 'brief 显示 ←?，按 §5.2 自扫根 unit A2 单位、单元、部件（自扫 author_u1.js 第 4 参）+ -ty（§4c 清单外后缀按库内先例面裁定：先例 sovereignty←sovereign C1，库内 -ity 先例 sensitivity、ambiguity、animality、sentimentality←sentiment C1（author_s12.js））；语义直连核对通过：unit「单个整体」→ unity「合为一个整体、团结」，A2 继承（判断项披露）；家族 cohesion 凝聚力（队列原样，入第 10 参），近义 cohesion 置义项 1、solidarity 团结声援置义项 1、integrity 完整、完整状态置义项 2，均队列原样、各恰好一次；CET4 标签照抄队列');

  W('universal', 'adjective', '/ˌjuːnɪˈvɜːsl/', 'B1', ['CET4'], '普遍的；全体的', 'True or applying in every case, or for everybody.', [
    ['普遍的；全体的', 'True or valid in every case, or available to everybody.', '在每一种情况下都成立，或对所有人都可用。', '定语表语两用，常与 access、right、rule 连用。', 'Access to clean water should be universal.', '清洁水源的获取应当是普遍权利。', ['universal access', 'a universal rule'], ['general'], 'adjective', '定语/表语', '社会'],
    ['宇宙的；全世界的', 'Relating to the whole universe or to the whole world.', '与整个宇宙或整个世界相关的。', '多作定语，科学语境常见。', 'Astronomy studies universal processes.', '天文学研究宇宙中的各种过程。', ['universal gravitation'], [], 'adjective', '定语/表语', '科学'],
  ], '', ['general'], 'brief 显示 ←?，按 §5.2 自扫根 universe B1 宇宙、天地万物（自扫 author_u1.js 第 4 参）+ -al（§5.4 清单），「全体适用←天地万物」语义直连，B1 继承；家族 general 普遍的、总体的（队列原样，入第 10 参），近义 general 置首义项恰好一次；CET4 标签照抄队列');

  W('unjust', 'adjective', '/ʌnˈdʒʌst/', 'A2', [], '不公正的；非正义的', 'Not fair or right in the way people are treated.', [
    ['不公正的；不公平的', 'Not fair in the way people are treated, especially by those in power.', '在对待他人方面不公平，尤指当权者的做法。', '定语表语两用，常与 decision、treatment、punishment 连用。', 'He received an unjust punishment.', '他受到了不公正的处罚。', ['an unjust decision'], ['wrong'], 'adjective', '定语/表语', '法律'],
  ], '',['just'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 just A2 正义的、公正的（自扫 author_j2.js 第 4 参），否定方向语义直连，A2 继承；近义 wrong 不对的、不公正的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unkind', 'adjective', '/ʌnˈkaɪnd/', 'A1', [], '不友善的；刻薄的', 'Not nice or friendly in the way you behave towards people.', [
    ['不友善的；刻薄的', 'Not pleasant or friendly, so that somebody feels hurt.', '不友好，会让人难受。', '定语表语两用，常与 to sb 连用。', 'It is unkind to laugh at other people.', '嘲笑别人并不厚道。', ['an unkind remark'], ['mean'], 'adjective', '定语/表语', '性格'],
  ], '',['kind'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 kind A1 善良的、友善的（自扫 author_k1.js 第 4 参；kind 名词「种类」同形不取），否定方向语义直连，A1 继承；近义 mean 刻薄的、吝啬的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unknown', 'adjective/noun', '/ˌʌnˈnəʊn/', 'A1', [], '未知的；不出名的；未知的人', 'Not known, not famous, or a person whose identity is not known.', [
    ['未知的；未被辨认的', 'Not known or not identified.', '不为人所知，或尚未被辨认出来。', '定语表语两用，常与 to sb 连用。', 'The cause of the fault is still unknown.', '故障的原因仍然未知。', ['an unknown factor', 'unknown to the police'], [], 'adjective', '定语/表语', '科学'],
    ['不出名的；鲜为人知的', 'Not famous and not known by many people.', '不出名，或很少有人知道。', '定语表语两用，可指人，也可指地方。', 'She was unknown outside her own country.', '在祖国之外她默默无闻。', ['an unknown writer'], ['obscure'], 'adjective', '定语/表语', '职业'],
    ['身份不明的人；陌生人', 'A person whose name or identity has not been identified.', '姓名或身份尚未确认的人。', '可数，常与 the 连用，也指无名之辈。', 'The letter came from an unknown sender.', '这封信寄自一位身份不明的寄件人。', ['an unknown assailant', 'the unknowns'], ['nobody'], 'noun', 'countable', '通用'],
  ], 'unknowns', ['obscure'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 know A1 知道、认识（自扫 author_k1.js 第 4 参）+ -n（know 的过去分词，§5.4 -ed/-en 类），否定方向语义直连，A1 继承；家族 obscure 无名的、晦涩的（队列原样，入第 10 参），近义 obscure 置义项 2、nobody 无名之辈置义项 3，均队列原样、各恰好一次；形容词兼名词，按 §4 混合词性取名词复数 unknowns');

  W('unlawful', 'adjective', '/ʌnˈlɔːfl/', 'B1', [], '非法的；不正当的', 'Not allowed by the law, or not considered morally right.', [
    ['违法的；非法的', 'Not allowed by the law.', '法律所不允许的。', '定语表语两用，常与 act、assembly、punishment 连用。', 'The police stopped the unlawful assembly.', '警方制止了这场非法集会。', ['unlawful assembly'], ['illegal'], 'adjective', '定语/表语', '法律'],
    ['不正当的；违反道德的', 'Not considered right or acceptable by society.', '不被视为正当或可接受的。', '正式用语，多作定语，语气比 illegal 更侧重规范。', 'They made use of unlawful means to win.', '他们用了不正当的手段取胜。', ['unlawful means'], ['illicit'], 'adjective', '定语/表语', '社会'],
  ], '', ['illegal', 'illicit'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 law B1 法律、法规（自扫 author_l1.js 第 4 参）+ -ful（§5.4 清单），否定方向语义直连，B1 继承；家族 illegal 非法的、illicit 违禁的（队列原样，入第 10 参），近义 illegal 置义项 1、illicit 置义项 2，均队列原样、各恰好一次');

  W('unlikely', 'adjective', '/ʌnˈlaɪkli/', '', [], '不太可能的；不大像真的的', 'Not likely to happen, or hard to believe.', [
    ['不太可能的', 'Not likely to happen.', '不太可能发生。', '定语表语两用，常用 it is unlikely that... 或 unlikely to do sth。', 'It is unlikely that the price will fall.', '价格不太可能下跌。', ['unlikely to happen', 'an unlikely outcome'], ['remote'], 'adjective', '定语/表语', '通用'],
    ['（说法）不大可能属实的；离奇的', 'Seeming hard to believe because it is strange.', '因为离奇而难以置信的。', '多作定语，形容故事、说法，常见 tall tale、tall story。', 'He told an unlikely tale about the prize.', '他讲了一段关于奖金的离奇故事。', ['an unlikely story'], ['tall'], 'adjective', '定语/表语', '口语'],
  ], '', [], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），其后词根 likely 在库但 author_l4.js 第 4 参为 \'\'（自身无 CEFR），根无级可继，留空（同 author_n3.js nonconformists←conform 缺级留空先例）；近义 remote 渺茫的、remote 义项置首义项，tall 取 tall tale、tall story「离奇的」义置第二义项（队列原样、各恰好一次）；fam 队列为空故第 10 参 []');

  W('unlimited', 'adjective', '/ʌnˈlɪmɪtɪd/', 'B1', [], '无限的；不加限制的', 'Not limited or restricted in amount, size or number.', [
    ['无限的；不加限制的', 'Not limited or restricted in amount, size or number.', '在数量、大小或数目上不受限制。', '定语表语两用，常与 access、use、supply 连用。', 'The pass gives unlimited access to the museum.', '这张通票可以无限次参观博物馆。', ['unlimited access', 'unlimited data'], ['indefinite'], 'adjective', '定语/表语', '商务'],
  ], '',['limit'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 limit B1 限制、限度（自扫 author_l2.js 第 4 参）+ -ed（§5.4 清单），否定方向语义直连，B1 继承；近义 indefinite 无限期的、不明确的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unlock', 'verb', '/ˌʌnˈlɒk/', 'A2', [], '开锁；揭示', 'To open something with a key, or to find the way to something new.', [
    ['开锁；开启', 'To open something that is locked, using a key.', '用钥匙把锁着的东西打开。', '及物动词，宾语是门、箱子、抽屉，反义 lock。', 'She unlocked the back door with a spare key.', '她用备用钥匙打开了后门。', ['unlock the door', 'unlock a cabinet'], ['open'], 'verb', '及物', '家居'],
    ['揭示；开启（潜能）', 'To find the way to achieve or understand something new.', '找到取得新成果或理解新事物的途径。', '及物动词，多用于比喻，宾语是 potential、growth 等。', 'The data may unlock a cure for the disease.', '这些数据可能为该病的疗法打开突破口。', ['unlock potential', 'unlock growth'], [], 'verb', '及物', '科学'],
  ], 'unlocks~unlocked~unlocked~unlocking',['lock'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 lock A2 锁、锁上（自扫 author_l2.js 第 4 参），反向动作语义直连（开锁即解开锁），A2 继承；近义 open 打开（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unmarried', 'adjective', '/ˌʌnˈmærid/', 'A2', [], '未婚的；独身的', 'Not married to somebody.', [
    ['未婚的；独身的', 'Not married, especially when this is thought to be worth mentioning.', '没有结婚，尤指这一点值得注意时。', '定语表语两用，正式用语，日常也常用 single。', 'He was still unmarried at forty.', '他四十岁了仍未婚。', ['an unmarried couple'], ['single'], 'adjective', '定语/表语', '社会'],
  ], '',['marry'], 'brief 显示 ←?，按 §5.2 自扫根：un- 前缀不作成分（malfunction 模式、§5.3），取其后词根 marry A2 结婚、娶嫁（自扫 author_m1.js 第 4 参）+ -ied（y→i 正字，-ed 类形容词），否定方向语义直连，A2 继承；近义 single 单身的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');
})(typeof window !== 'undefined' ? window : globalThis);
