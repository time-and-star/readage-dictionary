/* data/words/cet/author_z2.js — Z 批次 2，缺口 zealous ~ zipper，共 3 条
 * （3 单词 + 0 短语；无 [PH] 条目，本批不使用 .phrase = true）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_z2.txt，词头无残缺；brief 的 refs = fam + syn，逐条比对一致、无错位）。
 * CET 标签照抄队列：CET4 × 0；CET6 × 2（zealous、zipper）；无标签 1（zest，队列为 -，第 5 参 []）。
 * brief：%TEMP%\opencode\_z2_brief.txt 共 3 行，与本批 3 个单词一一对应（首行 zealous、末行 zipper）；
 *   1 行给出根提示（zipper ←zip [B2] noun/verb），2 行显示 ←?（zealous、zest），
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf("W('词头'") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；brief 与任务清单无不符，无需更正）。
 * 扫根结论（自扫，第 4 参）：zeal C1、zip B2（均 author_z1.js）；
 *   参照根 relish C1（author_r1.js）、salt A1（author_s1.js）、spice B1（author_s3.js）仅作同义/家族核对，非词根。
 * · 继承（2 条）：
 *   zealous←zeal C1 + -ous（-ous 在 §5.4 清单，先例 poisonous←poison B1、famous←fame B1、nervous←nerve B2）；
 *   zipper←zip B2 + -er（-er 在 §5.4 清单，先例 tumbler←tumble C1、trooper←troop B2）。
 * · 留空（1 条）：zest（-est 不在 §5.4 清单，库内无语义直连词根；家族/近义 relish C1 为同义词而非词根，
 *   词首非全段共享，兄弟派生 §5.6 不成立，切词假象，判断项）。
 * CEFR 分布（3 单词）：B2 × 1（zipper）、C1 × 1（zealous）、留空 × 1（zest）；短语 0 条。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_z2.js 必须在 _cet_helper.js 之后加载');

  W('zealous', 'adjective', '/ˈzeləs/', 'C1', ['CET6'], '热心的；满腔热忱的', 'Showing great energy and enthusiasm for something you believe in.', [
    ['热心的；满腔热忱的', 'Eager and energetic in supporting a cause, a belief or an activity.', '对某种事业、主张或活动满怀热忱并积极出力的。', '定语表语两用，常与 about、for、in 连用；褒义，语气比 enthusiastic 更重，强调投入的精力。', 'She is zealous about protecting the local park.', '她对保护本地公园满怀热情。', ['a zealous supporter', 'zealous about reform'], [], 'adjective', '定语/表语', '性格'],
    ['（因过分热心而）狂热的', 'So eager that other people may find the effort too much.', '热心得过了头，可能让旁人觉得过分。', '定语表语两用，含提醒意味，常见 overly zealous、a zealous campaigner。', 'Overly zealous volunteers put some visitors off.', '过分热心的志愿者反而让一些参观者却步。', ['overly zealous', 'a zealous campaigner'], [], 'adjective', '定语/表语', '心理'],
  ], '', ['zeal'], 'brief 显示 ←?，按 §5.2 自扫根 zeal C1 热忱、热情（自扫 author_z1.js 第 4 参）+ -ous（§5.4 清单，先例 poisonous←poison B1（author_p9.js）、famous←fame B1（author_f4.js）），「热心的」与 zeal 语义直连，C1 继承；家族 zeal 热忱（队列原样，入第 10 参），近义队列为空故义项近义 []；CET6 标签照抄队列');

  W('zest', 'noun/verb', '/zest/', '', [], '风味；香气；浓厚的兴趣；给……调味', 'A strong pleasant flavour, great enthusiasm for life, or to add such flavour to food.', [
    ['风味；（柑橘皮的）香气', 'The strong pleasant taste or smell given by the skin of a lemon, orange or other citrus fruit.', '柠檬、橙子等柑橘类果皮带来的浓烈香味。', '多作不可数，常与 of 连用；烹饪语境常见，指擦下的果皮屑。', 'The recipe uses the zest of one lime.', '这道菜用了一个青柠的皮屑来调味。', ['lemon zest', 'the zest of orange'], ['relish', 'salt', 'spice'], 'noun', 'uncountable', '饮食'],
    ['浓厚的兴趣；热情', 'Great energy and enjoyment taken in an activity or in life.', '从某项活动或从生活中获得的饱满精力与乐趣。', '多作不可数，常与 of、for 连用，常见 with zest、zest for life。', 'She tackled the new job with real zest.', '她以十足的热情投入这份新工作。', ['zest for life', 'with zest'], [], 'noun', 'uncountable', '情感'],
    ['给……调味；使增添趣味', 'To add the outer skin of a citrus fruit to food, or to make something more interesting.', '把柑橘类果皮加进食物，或使某事物更有意思。', '及物动词，过去式 zested；宾语可以是菜肴，也可以是活动、话题。', 'Zest the lemons before squeezing them.', '把柠檬榨汁之前先削下皮屑。', ['zest a lemon', 'zest the fruit'], [], 'verb', '及物', '饮食'],
  ], 'zests~zested~zested~zesting', ['relish'], 'brief 显示 ←?，按 §5.2 自扫根：库内无 zest 的语义直连词根（-est 不在 §5.4 清单，库内亦无同形词根；家族/近义 relish C1 风味、喜爱（自扫 author_r1.js 第 4 参）为同义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立，切词假象），留空（判断项）；家族 relish 风味、喜爱（队列原样，入第 10 参），近义 relish 风味、salt 盐、spice 香料（队列原样，置义项 1 各恰好一次）；CET 队列为 -，故第 5 参 []；兼类 noun/verb，按 §4 混合词性取动词四形');

  W('zipper', 'noun', '/ˈzɪpə/', 'B2', ['CET6'], '拉链', 'A fastener on clothes and bags that is closed or opened by pulling a slide along two rows of teeth.', [
    ['拉链', 'A fastener consisting of two rows of teeth that are joined or separated by a sliding pull.', '由两排齿和一个滑块组成的扣件，滑动滑块即可咬合或分开。', '可数，美式英语常用 zipper，英式常说 zip；常与 on 连用。', 'The zipper on the jacket came apart.', '夹克上的那条拉链崩开了。', ['a broken zipper', 'the zipper on a bag'], ['zip'], 'noun', 'countable', '工具'],
  ], 'zippers', ['zip'], 'brief 根提示 ←zip B2 拉链（自扫 author_z1.js 第 4 参复核为 B2）+ -er（§5.4 清单，先例 tumbler←tumble C1、trooper←troop B2）；语义直连核对通过：「拉链这一扣件物件」与 zip「拉链、拉上拉链」直接相关，B2 继承；家族 zip 拉链（队列原样，入第 10 参），近义 zip 置唯一义项恰好一次；CET6 标签照抄队列');
})(typeof window !== 'undefined' ? window : globalThis);
