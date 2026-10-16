/* data/words/cet/author_u7.js — U 批次 7，缺口 useless ~ utterly，共 9 条
 * （9 单词 + 0 短语；本批无短语条目，任何词条均不标记短语）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_u7.txt，widx 156-164，词头无残缺，与 brief 逐行一致、无不符项）。
 * CET 标签照抄队列：CET4 × 4（useless、user、usually、utterly）、CET6 × 0，其余 5 条 []。
 * brief：%TEMP%\opencode\_u7_brief.txt 共 9 行，与本批 9 个单词一一对应（首行 useless、末行 utterly）；
 *   2 行给出根提示（usual A2、utter B2），7 行显示 ←?，一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf("W('词头'") 取第 4 参，扫 assets/js/data/words/cet/author_*.js，未 require 全库）。
 * 扫根结论（自扫，第 4 参）：use A1、usual A2、utter B2（均 author_u1.js）；
 *   brief 根提示复核通过（自扫同级）：usual A2 形容词、utter B2 动词/形容词（author_u1.js）；
 *   本批 9 词在库内均无既有 W 条目（首次录入）；库内无语义直连根可继者：utensil、utensils、utopia、utopian。
 * · 继承（5 条）：
 *   useless←use A1 + -less（-less 属 §5.4 清单外后缀，按 §4c 库内先例面裁定：
 *     author_c7.js careless←care A1、author_e4.js endless←end A1，判断项）；
 *   user←use A1 + -er、using←use A1 + -ing（-er/-ing 均在 §5.4 清单，「使用的人／使用的行为」与 use 直连）；
 *   usually←usual A2 + -ly、utterly←utter B2 + -ly（brief 根提示，-ly 透明副词后缀，均自扫复核同级）。
 * · 留空（4 单词）：
 *   utensil（-il 不在 §5.4 清单且库内无该后缀继承先例，按 §4c 无先例面即留空；词源根 use A1 虽在库，
 *     但与词头仅共享首字母 u、词首非全段共享，兄弟派生 §5.6 不成立，判断项）、
 *   utensils（根 utensil 本批即留空、无 CEFR 可继；utensil 复数形式单列词条，forms 按 §4 留空）、
 *   utopia（库内无语义直连根，词源为希腊语 ou「无」+ topos「地方」的造词；与 top A1 仅形近，
 *     「乌托邦」与「顶部」语义不直连，切词假象，判断项）、
 *   utopian（根 utopia 不在库、无 CEFR 可继，-ian 亦不在 §5.4 清单）。
 * CEFR 分布（9 单词）：A1 × 3（useless、user、using）、A2 × 1（usually）、B2 × 1（utterly）、留空 × 4。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_u7.js 必须在 _cet_helper.js 之后加载');

  W('useless', 'adjective', '/ˈjuːsləs/', 'A1', ['CET4'], '没有用的；一窍不通的', 'Not able to help achieve anything, or very bad at doing things.', [
    ['无用的；无效的', 'Not useful for any purpose, so that it cannot achieve what is needed.', '对任何用途都没有用处，因而无法达成目的。', '定语表语两用，可形容物品、方法与努力；常见结构 It is no use doing。', 'The old printer is useless since the ink cartridges are discontinued.', '这台旧打印机因为墨盒停产已经没用了。', ['a useless attempt', 'completely useless'], ['futile', 'vain'], 'adjective', '定语/表语', '通用'],
    ['（口语）一窍不通的；糟透的', 'Very bad at doing something, or of very low quality.', '做某事极不在行，或质量非常差。', '定语表语两用，口语常用，后接 at 或 at doing，带贬义。', 'I am useless at remembering names.', '我记名字一窍不通。', ['useless at maths'], ['pants', 'pathetic'], 'adjective', '定语/表语', '口语'],
  ], '', ['futile'], 'brief ←?，按 §5.2 自扫根 use A1 使用、利用（author_u1.js 第 4 参）+ -less（-less 属 §5.4 清单外后缀，按 §4c 库内先例面裁定：author_c7.js careless←care A1、author_e4.js endless←end A1），「没有用的」与 use 语义直连，A1 继承（判断项）；家族 futile 徒劳的（队列原样，入第 10 参），近义 futile 徒劳的与 vain 无效的置义项 1、pants 糟糕的与 pathetic 差劲的置义项 2（队列原样，各恰好一次）；CET4 标签照抄队列');

  W('user', 'noun', '/ˈjuːzə/', 'A1', ['CET4'], '使用者；用户', 'A person, organization or machine that uses something.', [
    ['使用者；用户', 'A person, organization or machine that uses a product, service or piece of equipment.', '使用某种产品、服务或设备的人、机构或机器。', '可数，常与 of 连用，也可泛指某类使用者。', 'The app has attracted millions of users worldwide.', '这款应用已吸引了全球数百万用户。', ['a user of public transport', 'a heavy user'], ['practitioner'], 'noun', 'countable', '通用'],
    ['（计算机、软件的）用户', 'A person who operates a computer system or application, especially one who holds an account.', '操作计算机系统或应用程序的人，尤指持有账户者。', '可数，信息技术语境常用，常与 account、name、password 连用。', 'Each user has a separate password for the system.', '每个用户在系统里都有各自的密码。', ['user account', 'user name'], [], 'noun', 'countable', '媒体'],
  ], 'users',['use'], 'brief ←?，按 §5.2 自扫根 use A1 使用、利用（author_u1.js 第 4 参）+ -er（-er 在 §5.4 清单），「使用某物的人」与 use 语义直连，A1 继承；近义 practitioner 从业者（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []；CET4 标签照抄队列');

  W('using', 'noun', '/ˈjuːzɪŋ/', 'A1', [], '使用；利用', 'The act of employing something for a purpose.', [
    ['使用；利用', 'The act of employing a tool, a skill or a resource in order to do something.', '为了做成某事而运用工具、技能或资源的行为。', '不可数，动词 use 的动名词形式，常与 of 连用，也可直接后接名词。', 'Using a dictionary slows the reading down at first.', '起初查字典会放慢阅读的速度。', ['using a computer', 'start using'], ['with'], 'noun', 'uncountable', '通用'],
  ], '',['use'], 'brief ←?，按 §5.2 自扫根 use A1 使用、利用（author_u1.js 第 4 参）+ -ing（-ing 在 §5.4 清单，动名词转名词，同 author_t8.js tuning←tune A2 先例），A1 继承；抽象不可数故 forms 留空；近义 with 和、用（队列原样，置唯一义项恰好一次，refs 措辞照抄不改）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('usually', 'adverb', '/ˈjuːʒuəli/', 'A2', ['CET4'], '通常；一般地', 'On most occasions, in the way that happens most of the time.', [
    ['通常；一般地', 'On most occasions or in most cases, more often than not.', '在大多数场合或多数情况下。', '修饰动词，也常修饰形容词与其他副词；频率副词，多放在实义动词前、be 动词与情态动词后。', 'We usually have dinner at seven in the evening.', '我们通常晚上七点吃晚饭。', ['as usual', 'more often than usual'], ['often'], 'adverb', '不及物', '通用'],
  ], '', ['often'], 'brief 根提示 ←usual A2 通常的、惯常的（自扫 author_u1.js 第 4 参复核为 A2）+ -ly（-ly 在 §5.4 清单，透明副词后缀），A2 继承；副词无词形变化故 forms 留空；家族 often 常常、近义 often（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET4 标签照抄队列');

  W('utensil', 'noun', '/juːˈtensl/', '', [], '（厨房或家用的）器皿；用具', 'A hollow container or tool used in the house for food.', [
    ['（厨房或家用的）器皿；用具', 'A hollow container or tool used in the kitchen or about the house for preparing, cooking or serving food.', '在厨房或家中用于备餐、烹饪或盛放食物的容器或工具。', '可数，常用复数形式泛指各类器具，正式用语，常与 kitchen、cooking 连用。', 'She put the cooking utensils back in the drawer.', '她把炊具放回了抽屉。', ['kitchen utensils', 'cooking utensils'], ['fork'], 'noun', 'countable', '家居'],
  ], 'utensils', ['fork'], 'brief ←?，按 §5.2 自扫根：库内无 utensil 的语义直连可见根（-il 不在 §5.4 清单，且库内无 -il 后缀继承先例，按 §4c 无先例面即留空；词源根 use A1 虽在库，但 utensil 与 use 仅共享首字母 u，词首非全段共享，兄弟派生 §5.6 不成立），留空（判断项）；家族/近义 fork 餐叉（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；CET 标签队列为 -，故第 5 参 []');

  W('utensils', 'noun', '/juːˈtenslz/', '', [], '器皿；用具（复数）', 'Containers and tools used for preparing and serving food.', [
    ['器皿；用具（复数）', 'A collection of hollow tools and containers used for preparing, cooking or serving food.', '用于备餐、烹饪或上菜的一批容器与工具。', 'utensil 的复数形式单列词条；作主语时谓语常用复数。', 'The drawer is full of kitchen utensils.', '抽屉里装满了厨房用具。', ['a set of utensils', 'plastic utensils'], ['ware'], 'noun', 'countable', '家居'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：根 utensil 本批分级留空（库内无语义直连根，理由见 utensil 条），无 CEFR 可继，留空；utensils 为 utensil 的复数形式单列词条，按 §4 forms 留空；近义 ware 器皿、器物（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('utopia', 'noun', '/juːˈtəʊpiə/', '', [], '乌托邦；理想国', 'An imagined perfect society, or any trouble-free place.', [
    ['乌托邦；理想社会', 'An imagined society in which law, government and living conditions are as perfect as they can be.', '想象出来的社会，其法律、治理与生活条件尽可能完美。', '可数，常与 of 连用，多用于政治与社会讨论。', 'The novel paints an ecological utopia after the collapse of industry.', '这部小说描绘了一个工业崩溃之后的生态乌托邦。', ['a socialist utopia', 'build a utopia'], ['paradise'], 'noun', 'countable', '社会'],
    ['完美之地；人间乐土', 'Any place or situation that seems completely free from trouble and unhappiness.', '任何看起来全然没有烦恼与不幸的地方或处境。', '可数，常与 in、of 连用，常带夸张或反讽色彩。', 'For many readers this library is a quiet utopia.', '在许多读者看来，这座图书馆是一片宁静的乐土。', ['a quiet utopia'], [], 'noun', 'countable', '文化'],
  ], 'utopias', [], 'brief ←?，按 §5.2 自扫根：库内无 utopia 的语义直连根（词源为希腊语 ou「无」+ topos「地方」的造词）；与 top A1 顶部（author_t2.js 第 4 参）仅形近，「乌托邦」与「顶部」语义不直连，切词假象（规范 §5.7），-ia 亦不在 §5.4 清单，留空（判断项）；近义 paradise 天堂、乐园（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('utopian', 'adjective', '/juːˈtəʊpiən/', '', [], '乌托邦式的；不切实际的', 'Seeming perfect in theory but unlikely to be achieved.', [
    ['乌托邦式的；不切实际的', 'Based on the idea that society can be perfect, but unlikely ever to be achieved in practice.', '建立在社会可以变得完美的想法之上、却几乎不可能实现的。', '定语表语两用，常含贬义，形容计划、方案与设想。', 'He rejected the plan as utopian thinking.', '他把这项计划斥为乌托邦式的空想。', ['a utopian vision', 'utopian ideals'], ['ideal'], 'adjective', '定语/表语', '政治'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：根 utopia 本批分级留空（不在库、无 CEFR 可继，理由见 utopia 条），且 -ian 不在 §5.4 清单、库内无该后缀继承先例，留空（判断项）；近义 ideal 理想的、完美的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []；CET 标签队列为 -，故第 5 参 []');

  W('utterly', 'adverb', '/ˈʌtəli/', 'B2', ['CET4'], '完全；极度地', 'Completely, or in a way that makes a feeling stronger.', [
    ['完全；彻底', 'To the fullest extent, with nothing of it left out.', '达到最大程度，一点也不留。', '修饰形容词与过去分词，也可修饰动词，表示程度彻底。', 'The village was utterly destroyed by the fire.', '这个村庄被大火彻底摧毁了。', ['utterly destroy', 'utterly fail'], [], 'adverb', '不及物', '通用'],
    ['（表强烈评价）简直；极度地', 'Used to make a judgement or a feeling sound stronger, often with a negative word.', '用来加强判断或感受的语气，常与贬义词连用。', '修饰形容词与分词，也可修饰动词以加强语气，口语与书面语都常用，比 very 语气强烈。', 'It is utterly ridiculous to charge that much for a ticket.', '一张票要那么贵简直荒唐。', ['utterly ridiculous', 'utterly boring'], ['plain'], 'adverb', '不及物', '口语'],
  ], '',['utter'], 'brief 根提示 ←utter B2 完全的、十足的（自扫 author_u1.js 第 4 参复核为 B2）+ -ly（-ly 在 §5.4 清单，透明副词后缀），「完全地」与 utter 的形容词义语义直连，B2 继承；副词无词形变化故 forms 留空；近义 plain 完全地、彻底地（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []；CET4 标签照抄队列');
})(typeof window !== 'undefined' ? window : globalThis);
