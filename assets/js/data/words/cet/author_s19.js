/* data/words/cet/author_s19.js — 常用词 S 批次 19，缺口 speck ~ sprint，共 31 条
 * （27 单词 + 4 短语：speed up、spit out、split up、spread to）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4 × 5：speculation、speechless、spherical、spiritual、spokesperson；
 * CET6 × 1：spicy）。
 * brief 文件 %TEMP%\opencode\_s19_brief.txt 共 27 行，与本批 27 单词逐行对应（短语不进 brief）：
 *   8 行给根（spectacle B2、spectator B2、spirit B1 ×2、sponge B2、spontaneous B2、sport A1、
 *   spot B1），19 行显示 ←?，按规范 §5.2 纯文本自扫（fs.readFileSync + indexOf 取第 4 参，
 *   未 require 全库），命中根全部在 author_s3.js 第 4 参：
 *   speculate B2、sphere B2、spice B1、spite B2、speak A1、speed A2、speech A2、splash B1、
 *   spokesman B2（curated.js 中亦无相关词，已纯文本核对）。
 * 扫根结论：
 * · 透明后缀/规则继承（11）：speculation←speculate B2（e→∅+ion 正字类，规范 §5.5）、
 *   speechless←speech A2（-less 透明后缀，同库内 careless←care A1、endless←end A1 先例）、
 *   speedup←speed A2（speed+up 复合词取首成分，同 run-up←run 先例）、
 *   spherical←sphere B2（-al）、spicy←spice B1（规范 §5.4 条 4b -y 裁定，e→y 正字类同
 *   rosy←rose A1 先例，spice 全段可见且「香料→辛辣」语义直连）、spirited←spirit B1（-ed）、
 *   spiritual←spirit B1（-al）、spiteful←spite B2（-ful）、sponger←sponge B2（-er 施事）、
 *   spontaneously←spontaneous B2（-ly）、sporting←sport A1（-ing 动名词转形容词）；
 * · brief 给根照用 + 判断项（6）：spectacles←spectacle B2、spectators←spectator B2、
 *   spirits←spirit B1、spots←spot B1（四条均为 -s 复数化，-s 不在明示可继清单，
 *   按库内 sales←sale A2、slacks←slack C1 先例，判断项）；
 *   spoken←speak A1（-en 分词形容词，同库内 mistaken←mistake A2 先例，不规则拼写判断项）；
 *   spokesperson←spokesman B2（词首 spokes 全段共享、语义直连的兄弟派生同
 *   salesperson/person、pharmacology←pharmacy 先例，判断项）；
 * · 留空（10 单词）：speck（-eck）、spike（-ike）、spire（-ire）、splatter（-er 与词义不合，
 *   splash B1 仅词首 spl 共享、非全段，兄弟派生不成立，切词假象判断项）、splendor（-or 在清单
 *   但词根 splend 不在库）、spool（-ool）、sporadic（-ic 不在清单，词根 spora 不在库）、
 *   sprain（-ain）、spree（-ee）、sprint（-int），库内均无可见词根；
 * · 留空（4 短语）：规范 §6，短语整体不取成分作根。
 * CEFR 分布（27 单词）：A1 × 2（spoken、sporting），A2 × 2（speechless、speedup），
 *   B1 × 5（spicy、spirited、spirits、spiritual、spots），
 *   B2 × 8（spectacles、spectators、speculation、spherical、spiteful、spokesperson、sponger、
 *   spontaneously），留空 × 10；4 短语一律留空。共 17 条继承、10 单词 + 4 短语留空。
 * CET 分布：CET4 × 5（speculation、speechless、spherical、spiritual、spokesperson），
 *   CET6 × 1（spicy），其余 25 条 []。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s19.js 必须在 _cet_helper.js 之后加载');

  W('speck', 'noun', '/spek/', '', [], '小斑点；微粒', 'A tiny mark, spot or very small piece of something.', [
    ['小斑点；污点', 'A very small mark on a surface that is not wanted there.', '表面上不该有的小印子或斑点。', '可数，常与 of 连用，常见搭配 a speck of dust。', 'A speck of ink landed on the white shirt.', '一个墨点溅到了白衬衫上。', ['a speck of dust', 'a speck of paint'], ['grain'], 'noun', 'countable', '通用'],
    ['微粒；一点点', 'An extremely small piece or a very small amount of something.', '极小的一块东西或极少的一点量。', '可数，多与 of 连用，强调数量极少。', 'There was not a speck of sugar left in the bowl.', '碗里一点糖也不剩了。', ['a speck of sugar', 'a speck of light'], ['particle'], 'noun', 'countable', '通用'],
  ], 'specks', ['particle'], 'brief 显示 ←?，自扫：库内无 speck 可继根（-eck 不在 §5.4 可继清单，源自中古荷兰语 spek），留空；家族/近义 particle 微粒（队列原样，入第 10 参并置微粒义近义）、grain 细粒（队列原样，置首义项）');

  W('spectacles', 'noun', '/ˈspektəklz/', 'B2', [], '眼镜', 'A pair of lenses in a frame that a person wears in front of the eyes to see better.', [
    ['眼镜', 'Two lenses set in a frame and worn in front of the eyes to help a person see clearly.', '架在眼前、帮助人看清东西的两片镜片。', '常作复数 spectacles，整体作单数概念；正式语体，日常口语多说 glasses。', 'He put on his spectacles to read the small print.', '他戴上眼镜去看那些小字。', ['a pair of spectacles', 'put on the spectacles'], ['glass'], 'noun', 'countable', '外貌'],
  ], '',['spectacle'], 'brief 根提示 ←spectacle B2 奇观/景象 — spectacles 为 spectacle 的复数引申义（正式语体「眼镜」，语义直连），B2 继承（判断项：-s 复数化不在明示可继清单，按库内 sales←sale A2、slacks←slack C1 先例）；复数形式单列词条，forms 留空；近义 glass 眼镜（队列原样，置唯一义项）');

  W('spectators', 'noun', '/spekˈteɪtəz/', 'B2', [], '观众；旁观者', 'People who watch a sports event, a performance or something happening.', [
    ['观众', 'People who have come to watch a sports match, a show or a public event.', '前来观看比赛、演出或公共活动的人。', '整体作复数，常与 a crowd of 连用；指付费入场或到场观看的人。', 'The spectators cheered when the runner crossed the line.', '那位跑者冲过终点时，观众们欢呼起来。', ['a crowd of spectators', 'spectators at the match'], ['audience'], 'noun', 'countable', '体育'],
    ['旁观者', 'A person who watches something happen without taking part in it.', '看着事情发生却不参与其中的人。', '整体作复数，常与 of 连用，强调不参与。', 'He watched the debate as an idle spectator.', '他作为袖手旁观者看着这场辩论。', ['a helpless spectator'], [], 'noun', 'countable', '社会'],
  ],'spectators',['spectator'], 'brief 根提示 ←spectator B2 观看者 — spectators 为其复数形式，观看义语义直连，B2 继承（判断项：-s 复数化按库内 sales←sale A2 先例）；复数形式单列词条，forms 留空；近义 audience 观众（队列原样，置首义项）');

  W('speculation', 'noun', '/ˌspekjuˈleɪʃn/', 'B2', ['CET4'], '推测；投机', 'Guessing without firm evidence, or the business of trading for profit.', [
    ['推测；猜测', 'Unfounded guesses or opinions about what may happen, formed without firm evidence.', '在没有确凿证据的情况下对可能发生之事作出的猜测或意见。', '不可数，常与 about、on 连用；新闻与日常语境均常见。', 'The minister refused to comment on such speculation.', '大臣拒绝对这样的猜测发表意见。', ['speculation about', 'pure speculation'], [], 'noun', 'uncountable', '媒体'],
    ['投机；炒作', 'The activity of buying goods, shares or property only in the hope of profiting from a price change.', '为赚取差价而买卖商品、股票或房产的行为。', '不可数，金融与商业用语，常见搭配 currency speculation。', 'Speculation on the currency markets can ruin a bank overnight.', '货币市场上的投机可能让一家银行一夜之间破产。', ['currency speculation', 'speculation on the stock market'], [], 'noun', 'uncountable', '金融'],
  ],'speculations', ['speculate'], 'brief 显示 ←?，自扫 speculate B2（author_s3.js 第 4 参）——speculation←speculate 去 e + -ion（e→∅+ion 正字类，规范 §5.5），推测与投机两义均与 speculate 直连，B2 继承；家族 speculate 推测、投机（队列原样，入第 10 参，不入义项）；队列近义为空');

  W('speechless', 'adjective', '/ˈspiːtʃləs/', 'A2', ['CET4'], '说不出话的；沉默的', 'Unable to speak because of shock, anger or emotion.', [
    ['（因震惊、愤怒等）说不出话的', 'So shocked or upset that one cannot find any words to say.', '因震惊或难过而一时想不出任何话来说。', '多作表语，常与 with 连用说明缘由。', 'I was speechless when they told me I had won the prize.', '他们告诉我获奖时，我一句话也说不出来。', ['be speechless with shock', 'leave somebody speechless'], ['mute'], 'adjective', '表语', '情感'],
    ['一言不发的；沉默的', 'Not saying anything at all, out of choice or because nothing occurs to one to add.', '完全不开口，或是主动选择沉默，或是一时无话可说。', '多作表语，常与 about 连用表示对某事不置一词。', 'He stayed speechless about the plan until the meeting ended.', '会议结束前，他一直对这个计划不置一词。', ['stay speechless about', 'remain speechless'], ['dumb', 'silent'], 'adjective', '表语', '社会'],
  ], '',['speech'], 'brief 显示 ←?，自扫 speech A2（author_s3.js 第 4 参）——speechless←speech + -less（-less 透明后缀，同库内 careless←care A1、endless←end A1、effortless←effort A2 先例），语义直连（没有话可说），A2 继承；近义 mute 不作声的（置首义项）、dumb 哑的与 silent 沉默的（置义项2），均队列原样');

  W('speed up', 'verb', '/spiːd ʌp/', '', [], '加速；加快', 'To move or make something go faster than before.', [
    ['（自己）加速', 'To start moving or happening more quickly than before.', '开始比从前移动得更快或进行得更快。', '短语动词，不及物，主语是人、车辆或事情。', 'The car sped up as soon as it reached the motorway.', '车一驶上高速公路就加速了。', ['speed up on the road', 'speed up the pace'], ['accelerate'], 'verb', '不及物', '交通'],
    ['使加速；加快进度', 'To make an activity or a process finish more quickly.', '让某项活动或流程更快地完成。', '短语动词，及物，宾语是事情或流程，常见于工作语境。', 'We need to speed up the delivery process.', '我们需要加快送货流程。', ['speed up production', 'speed up the work'], [], 'verb', '及物', '商务'],
  ],'speeds up~sped up~speeding up', [], '短语整体不取成分作根，分级留空（规范 §6），队列原样，短语条目；成分 speed A2 在库但规范不取成分作级；近义 accelerate 加速（队列原样，置首义项）').phrase = true;

  W('speedup', 'noun', '/ˈspiːdʌp/', 'A2', [], '加速；提速', 'A change that makes a process or a machine run faster.', [
    ['加速；提速', 'An increase in speed, or a period in which a process is deliberately made faster.', '速度的提高，或人为使流程提速的一段时间。', '可数，常与 in、of 连用，常见于生产与工程语境。', 'The speedup in production surprised the whole team.', '生产进度的加快让全队都感到意外。', ['a speedup in production', 'a wage speedup'], ['acceleration'], 'noun', 'countable', '商务'],
    ['加速期；活跃期', 'A period of growth or activity that is faster than the period before it.', '比前一阶段增长更快或更活跃的一段时间。', '可数，经济与商业用语，常与 in 连用。', 'The economy showed a clear speedup in the final quarter.', '经济在最后一个季度出现了明显的加速。', ['an economic speedup'], [], 'noun', 'countable', '金融'],
  ], 'speedups',['speed'], 'brief 显示 ←?，自扫 speed A2（author_s3.js 第 4 参）——speedup 为 speed + up 复合词，首成分 speed 在库且与「提速」语义直连，A2 继承（同 run-up←run 先例，规范 §5.3）；近义 acceleration 加速（队列原样，置首义项）');

  W('spherical', 'adjective', '/ˈsferɪkəl/', 'B2', ['CET4'], '球形的；球面的', 'Shaped like a ball, or connected with the geometry of a sphere.', [
    ['球形的；球状的', 'Shaped like a perfectly round ball.', '形状像一个浑圆的球体。', '多作定语，也可作表语，科学与日常语体均用。', 'The planet is almost perfectly spherical.', '这颗行星几乎是完美的球形。', ['a spherical object', 'a spherical shape'], ['round'], 'adjective', '定语/表语', '科学'],
    ['球面的；天球的', 'Connected with the surface of a round ball, or with the imagined sphere of the stars.', '与球体表面有关，或与设想中的天球星空球有关。', '只作定语，几何与天文术语。', 'The table lists spherical coordinates for every island.', '这张表列出了每座岛屿的球面坐标。', ['spherical geometry', 'spherical coordinates'], [], 'adjective', '定语', '科学'],
  ], '',['sphere'], 'brief 显示 ←?，自扫 sphere B2（author_s3.js 第 4 参）——spherical←sphere + -al（-al 在 §5.4 可继清单，透明形容词后缀），B2 继承；近义 round 圆的（队列原样，置首义项）');

  W('spicy', 'adjective', '/ˈspaɪsi/', 'B1', ['CET6'], '辛辣的；刺激的', 'Having a strong hot taste from spices, or slightly shocking in a fun way.', [
    ['辛辣的；辣的', 'Having a strong flavour that comes from spices such as chilli, ginger or pepper.', '带有辣椒、姜、胡椒等香料的浓烈味道。', '多作定语，也可作表语，常形容菜肴。', 'The dish is too spicy for the children to finish.', '这道菜太辣，孩子们吃不完。', ['a spicy sauce', 'spicy food'], ['hot'], 'adjective', '定语/表语', '饮食'],
    ['（故事、笑话）带刺激意味的', 'Slightly shocking or exciting because it refers to sex.', '因涉及性内容而略带刺激或令人发笑。', '只作定语，非正式语体，常形容故事、笑话与细节。', 'He told a spicy joke before the speech began.', '演讲开始前他讲了个带点荤味的笑话。', ['a spicy story', 'spicy details'], [], 'adjective', '定语', '娱乐'],
  ], '', ['hot'], 'brief 显示 ←?，自扫 spice B1（author_s3.js 第 4 参）——spicy←spice 去 e + -y（规范 §5.4 条 4b -y 裁定，e→y 正字类同 rosy←rose A1 先例），spice 全段可见且「香料→辛辣」语义直连，B1 继承；家族/近义 hot 辣的、热的（队列原样，hot 入第 10 参并置首义项近义）');

  W('spike', 'noun/verb', '/spaɪk/', '', [], '尖钉；刺入；骤升', 'A pointed metal nail, a pointed head of grain, or to push a sharp point in.', [
    ['尖钉；大钉', 'A long, thick piece of metal with a sharp point, driven into the ground or into a hard material.', '一端尖锐的长金属钉，钉入地面或坚硬材料中。', '可数，常见于围栏、建筑与田径鞋底。', 'They hammered a spike into the frozen ground.', '他们把一根尖钉打进冻土里。', ['a steel spike', 'drive in a spike'], [], 'noun', 'countable', '工业'],
    ['麦穗；穗状花序', 'The long head of a plant such as wheat or barley, made of many small seeds along a thin stem.', '小麦、大麦等植物细长的穗，许多籽粒沿细茎排列而成。', '可数，植物学与农业用语，与 ear of corn 所指相同。', 'A single spike of wheat carries dozens of grains.', '一枝麦穗上结着几十粒麦子。', ['a spike of barley', 'a wheat spike'], ['ear'], 'noun', 'countable', '农业'],
    ['掺（烈酒）；暗中添加', 'To add a strong alcoholic drink or another substance to a drink without telling people.', '把烈酒或其他物质悄悄加进饮料而不告诉别人。', '及物动词，常与 with 连用，非正式用语。', 'Someone spiked the punch at the party.', '有人在聚会上往潘趣酒里掺了烈酒。', ['spike the punch', 'spike a drink'], ['lace'], 'verb', '及物', '饮食'],
    ['（数量）骤升', 'To rise sharply and quickly within a very short time.', '在极短时间内急剧上升。', '不及物动词，主语常为价格、数字或需求。', 'Oil prices spiked overnight.', '油价一夜之间骤升。', ['prices spike', 'spike sharply'], [], 'verb', '不及物', '金融'],
  ], 'spikes~spiked~spiked~spiking', ['ear'], 'brief 显示 ←?，自扫：库内无 spike 可继根（-ike 不在 §5.4 可继清单，源自中古荷兰语 spijker），留空；家族/近义 ear 麦穗（队列原样，入第 10 参并置麦穗义近义）、lace 掺烈酒（队列原样，置掺酒义近义）');

  W('spire', 'noun', '/ˈspaɪə/', '', [], '（教堂等的）尖顶；尖峰', 'A tall, thin, pointed structure on top of a building or a hill.', [
    ['（教堂的）尖顶；塔尖', 'The tall, pointed part on top of a church tower.', '教堂塔楼顶部又高又尖的部分。', '可数，常与 of 连用，常见于哥特式建筑。', 'The spire of the church could be seen from the village.', '从村里就能望见教堂的尖顶。', ['a church spire', 'a tall spire'], ['tower'], 'noun', 'countable', '宗教'],
    ['（山、树的）尖峰', 'The pointed top of a hill, a rock or a very tall tree.', '山丘、岩石或极高树木的尖端。', '可数，文学化用语。', 'A thin spire of rock rose above the clouds.', '一道细长的岩石尖峰耸出云层。', ['a spire of rock'], [], 'noun', 'countable', '自然'],
  ], 'spires', ['tower'], 'brief 显示 ←?，自扫：库内无 spire 可继根（-ire 不在 §5.4 可继清单，源自古英语 spīr），留空；家族/近义 tower 塔（队列原样，入第 10 参并置首义项近义）');

  W('spirited', 'adjective', '/ˈspɪrɪtɪd/', 'B1', [], '精神饱满的；顽强的', 'Full of energy, enthusiasm and determination.', [
    ['精神饱满的；活泼的', 'Full of energy, enthusiasm and liveliness.', '充满活力、热情与生气。', '多作定语，也可作表语，形容人及其言行。', 'The students gave a spirited answer to every question.', '学生们对每个问题都给出了充满朝气的回答。', ['a spirited debate', 'a spirited discussion'], ['lively'], 'adjective', '定语/表语', '性格'],
    ['（比赛、抗争）顽强的', 'Done with strong determination and courage, even against difficult odds.', '带着坚定意志与勇气去做，即使面对强大阻力。', '只作定语，常形容防守、挑战与竞争。', 'They put up a spirited defence of their title.', '他们对冠军头衔进行了顽强的防守。', ['a spirited defence', 'a spirited challenge'], [], 'adjective', '定语', '体育'],
  ], '',['spirit'], 'brief 根提示 ←spirit B1 精神/情绪 — spirited←spirit + -ed（-ed 在 §5.4 可继清单，分词转形容词），「有精神的」与 spirit 语义直连，B1 继承；形容词无词形变化 forms 留空；近义 lively 活泼的（队列原样，置首义项）');

  W('spirits', 'noun', '/ˈspɪrɪts/', 'B1', [], '情绪；烈酒', 'A person mood, or strong alcoholic drinks taken as a group.', [
    ['情绪；心境', 'A person feelings or mood at a given time, often described as high or low.', '人在某一时刻的心情，常说高涨或低落。', '常用复数 spirits，整体作复数，常与 in 连用。', 'Her spirits rose when she heard the good news.', '她听到这个好消息后心情好了起来。', ['in high spirits', 'in low spirits'], [], 'noun', 'countable', '情感'],
    ['烈酒；酒精饮料', 'Strong alcoholic drinks such as whisky, vodka or gin, spoken of as one group.', '威士忌、伏特加、金酒等烈性酒的统称。', '常用复数 spirits，作类别名词，常与 bottle of 连用。', 'He keeps a bottle of spirits in the kitchen cupboard.', '他在厨房的柜子里放着一瓶烈酒。', ['strong spirits', 'a bottle of spirits'], ['liquor'], 'noun', 'countable', '饮食'],
  ],'spirits', ['liquor'], 'brief 根提示 ←spirit B1 精神/情绪 — spirits 为 spirit 的复数形式单列词条，情绪与烈酒两义均由 spirit 直接引申，B1 继承（判断项：-s 复数化不在明示可继清单，按库内 sales←sale A2、slacks←slack C1 先例）；复数形式单列词条，forms 留空；家族/近义 liquor 烈酒（队列原样，入第 10 参并置烈酒义近义）');

  W('spiritual', 'adjective', '/ˈspɪrɪtʃuəl/', 'B1', ['CET4'], '宗教的；心灵的', 'Connected with the soul, religion or a person deepest inner feelings.', [
    ['宗教的；与灵魂有关的', 'Connected with the soul and with religion rather than with the body or with material things.', '关乎灵魂与宗教，而非肉体或物质层面。', '多作定语，也可作表语，常用于宗教与哲学语境。', 'She found spiritual comfort in the old hymns.', '她在古老的赞美诗中找到了心灵的慰藉。', ['spiritual life', 'spiritual guidance'], ['gospel'], 'adjective', '定语/表语', '宗教'],
    ['精神的；内心的', 'Connected with a person private thoughts and feelings rather than with money or possessions.', '与个人内心的想法和感受有关，而非金钱或财物。', '多作表语，常与 need、pleasure 等词搭配。', 'Reading is her main spiritual pleasure.', '阅读是她最主要的精神享受。', ['spiritual needs', 'spiritual growth'], ['inner'], 'adjective', '定语/表语', '心理'],
  ], '',['spirit'], 'brief 显示 ←?，自扫 spirit B1（author_s3.js 第 4 参）——spiritual←spirit + -al（-al 在 §5.4 可继清单），宗教与内心两义均与 spirit 直连，B1 继承；近义 gospel 福音、教义（置首义项）、inner 内心的（置义项2），均队列原样');

  W('spit out', 'verb', '/spɪt aʊt/', '', [], '吐出；脱口说出', 'To force something out of the mouth, or to say something sharply.', [
    ['吐出；咳出', 'To force food, liquid or an object out of the mouth, or to force it out of the lungs.', '把食物、液体或物件从嘴里推出，或把它从肺里咳出来。', '短语动词，本义项取及物，宾语是吐出的东西。', 'The child spat out the bitter pill.', '那孩子把苦药片吐了出来。', ['spit out the seeds', 'spit out the water'], ['cough'], 'verb', '及物', '健康'],
    ['脱口而出；尖刻地说', 'To say something quickly and angrily without thinking it over.', '不加思索、又快又气愤地说出某句话。', '短语动词，及物，非正式语体，语气常带怒意。', 'She spat out a sharp reply and walked away.', '她甩出一句尖刻的话就走开了。', ['spit out an answer'], [], 'verb', '及物', '口语'],
  ],'spits out~spat out~spitting out', [], '短语整体不取成分作根，分级留空（规范 §6），队列原样，短语条目；近义 cough 咳出（队列原样，置首义项）').phrase = true;

  W('spiteful', 'adjective', '/ˈspaɪtfʊl/', 'B2', [], '恶意的；刻薄的', 'Wanting to upset or harm another person out of hatred.', [
    ['恶意的；怀恨的', 'Eager to hurt, annoy or embarrass another person because of a grudge.', '因为心怀怨恨而急于伤害、惹恼或使别人难堪。', '多作定语，也可作表语，形容言语或行为。', 'He made a spiteful comment about her work.', '他对她的工作说了一句恶意的话。', ['a spiteful remark', 'spiteful gossip'], ['malignant'], 'adjective', '定语/表语', '性格'],
    ['斤斤计较的；刻薄的', 'Showing a mean attitude towards small matters that are not really important.', '在无关紧要的小事上表现出狭隘而不宽容的态度。', '只作定语，常形容拒绝、抱怨与嘲笑。', 'It was spiteful of him to refuse such a small request.', '他拒绝这么小的请求，显得很刻薄。', ['a spiteful refusal'], ['petty'], 'adjective', '定语', '性格'],
  ], '',['spite'], 'brief 显示 ←?，自扫 spite B2（author_s3.js 第 4 参）——spiteful←spite + -ful（-ful 在 §5.4 可继清单，透明形容词后缀），B2 继承；近义 malignant 恶意的（置首义项）、petty 小气的（置义项2），均队列原样');

  W('splatter', 'verb/noun', '/ˈsplætə/', '', [], '溅洒；溅出的斑点', 'To make liquid fly about in drops, or the marks such liquid leaves.', [
    ['溅；泼洒', 'To cause a liquid to break into drops that fall or fly onto a surface.', '使液体碎成水滴，落在或飞到某个表面上。', '可及物也可不及物，本义项取及物，宾语是被溅的表面。', 'Mud splattered the side of the car.', '泥浆溅满了车身一侧。', ['splatter the wall with paint', 'splatter with mud'], ['splash'], 'verb', '及物', '家居'],
    ['溅出的斑点；污迹', 'A mark or a spot left on a surface by liquid that has been flung onto it.', '液体泼到物体表面后留下的痕迹或斑点。', '可数，常见复数形式，常见于油漆与泥污语境。', 'There were splatters of paint all over the floor.', '地板上到处都是漆点。', ['paint splatters', 'splatters of mud'], [], 'noun', 'countable', '艺术'],
  ], 'splatters~splattered~splattered~splattering', ['splash'], 'brief 显示 ←?，自扫：库内无 splatter 可继根，-er 施事后缀与「溅洒」词义不合（splatter 本身即动词形）；splash B1（author_s3.js 第 4 参）仅词首 spl 共享、非词首全段，兄弟派生不成立，切词假象判断项，留空；家族/近义 splash 溅洒（队列原样，入第 10 参并置首义项近义）');

  W('splendor', 'noun', '/ˈsplendə/', '', [], '壮丽；辉煌', 'Great beauty and impressive grandeur.', [
    ['壮丽；辉煌', 'Great beauty combined with an impressive appearance that commands admiration.', '美丽与气势兼备、令人赞叹的样子。', '不可数，正式与文学语体，美式拼写 splendor，英式作 splendour。', 'The palace shone with splendor at night.', '夜晚的宫殿闪耀着辉煌的光彩。', ['in all its splendor'], ['glory'], 'noun', 'uncountable', '艺术'],
    ['壮丽的景象；奇观', 'A place, building or natural sight that looks grand and magnificent.', '看起来宏伟壮观的地方、建筑或自然景色。', '可数，常用复数 splendors，文学与游记语体。', 'The travel book described the splendors of the old city.', '这本游记描绘了古城的壮丽景色。', ['the splendors of nature'], [], 'noun', 'countable', '文化'],
  ], 'splendors', ['glory'], 'brief 显示 ←?，自扫：-or 虽在 §5.4 可继清单，但词根 splend 不在库（拉丁语 splendēre 借词），无级可继，留空；家族/近义 glory 光荣、辉煌（队列原样，入第 10 参并置首义项近义）');

  W('split up', 'verb', '/splɪt ʌp/', '', [], '分手；分组', 'To end a relationship, or to divide into smaller groups.', [
    ['分手；断绝关系', 'To end a romantic relationship with somebody, or to end a marriage.', '结束与某人的恋爱关系，或结束婚姻。', '短语动词，多作不及物，常与 with 连用。', 'The couple split up after ten years of marriage.', '这对夫妻结婚十年后分开了。', ['split up with a partner'], ['separate'], 'verb', '不及物', '家庭'],
    ['拆散；分成小组', 'To divide a big group or a single thing into several smaller parts.', '把大群体或整体分成几个较小的部分。', '短语动词，本义项取及物，宾语是被分开的人或物。', 'The teacher split the class up into four teams.', '老师把全班分成四个小组。', ['split up the group'], [], 'verb', '及物', '教育'],
  ],'splits up~split up~splitting up', [], '短语整体不取成分作根，分级留空（规范 §6），队列原样，短语条目；近义 separate 分开、拆开（队列原样，置首义项）').phrase = true;

  W('spoken', 'adjective', '/ˈspəʊkən/', 'A1', [], '口语的；会说话的', 'Done by using the voice rather than writing, or describing how a person talks.', [
    ['口头的；口语的', 'Made using the voice instead of being written down.', '用说话的方式表达，而不是写成文字。', '只作定语，常与 English、language、word 搭配。', 'Spoken English sounds faster than written English.', '英语口语听起来比书面语快。', ['spoken English', 'the spoken word'], ['oral'], 'adjective', '定语', '语法'],
    ['（描述某人）说话…的', 'Used after an adjective to describe the way in which a person talks.', '放在形容词之后，描述某人说话的方式。', '多作表语，常见搭配 softly spoken、well spoken。', 'She is softly spoken and never raises her voice.', '她说话轻声细语，从不提高嗓门。', ['softly spoken', 'well spoken'], [], 'adjective', '表语', '性格'],
  ], '', ['oral'], 'brief 显示 ←?，自扫 speak A1（author_s3.js 第 4 参）——spoken 为 speak 的过去分词转形容词（-en 分词形容词类，同库内 mistaken←mistake A2 先例），口语义与 speak 直连，A1 继承（判断项：不规则拼写 spoke，词形非全段重合，按分词形容词类推）；形容词无词形变化 forms 留空；家族/近义 oral 口头的（队列原样，入第 10 参并置首义项近义）');

  W('spokesperson', 'noun', '/ˈspəʊksˌpɜːsn/', 'B2', ['CET4'], '发言人；代言人', 'A person who gives official statements for an organization.', [
    ['（组织的）发言人', 'A person chosen to make official statements and answer questions for a company, government or group.', '被指定代表公司、政府或团体发布正式声明并回答问题的人。', '可数，性别中性说法，复数常用 spokespeople，也可用 spokespersons。', 'The spokesperson for the airline denied the report.', '这家航空公司的发言人否认了那篇报道。', ['a spokesperson for the company', 'an official spokesperson'], ['spokesman'], 'noun', 'countable', '职业'],
    ['代言人；代表人物', 'A person who speaks in public for a particular group, cause or idea.', '为某个群体、事业或主张公开发言的人。', '可数，常与 for 连用。', 'She has become a spokesperson for rural teachers.', '她已成为乡村教师的代言人。', ['act as a spokesperson'], [], 'noun', 'countable', '社会'],
  ], 'spokespeople', ['spokesman'], 'brief 显示 ←?，自扫 spokesman B2（author_s3.js 第 4 参）——spokesperson 与 spokesman 词首 spokes 全段共享且语义直连（性别中性改写，兄弟派生同库内 salesperson、pharmacology←pharmacy 先例），B2 继承（判断项）；形变取 spokespeople 亦可作 spokespersons；家族/近义 spokesman 男发言人（队列原样，入第 10 参并置首义项近义）');

  W('sponger', 'noun', '/ˈspʌndʒə/', 'B2', [], '白吃白喝的人；揩油者', 'A person who lives off other people by always expecting them to pay.', [
    ['白吃白喝的人；揩油者', 'A person who always tries to get money, food or treats from other people without paying in return.', '总是想从别人那里得到钱、食物或款待而不愿回报的人。', '可数，非正式语体，含贬义，常与连用 a complete sponger。', 'He is a sponger who never offers to buy a round.', '他是个白吃白喝的家伙，从不主动请客。', ['a complete sponger', 'live as a sponger'], ['parasite'], 'noun', 'countable', '性格'],
  ], 'spongers', ['parasite'], 'brief 根提示 ←sponge B2 海绵 — sponger←sponge + -er（-er 在 §5.4 可继清单，施事名词），「靠吸附过活」引申为寄生、揩油，与 sponge 直连，B2 继承；家族/近义 parasite 寄生虫（队列原样，入第 10 参并置唯一义项近义）');

  W('spontaneously', 'adverb', '/spɒnˈteɪniəsli/', 'B2', [], '自发地；不加思索地', 'In a way that is done by free will and without being planned.', [
    ['自发地；自然而然地', 'Doing something by your own free will, without being planned or pushed by anyone else.', '出于自身意愿去做，既没有事先筹划，也不是受别人推动。', '修饰动词，常与 act、respond、burst out 等连用。', 'The crowd spontaneously started chanting the name of the team.', '人群自发地喊起了球队的名字。', ['act spontaneously', 'react spontaneously'], ['impromptu'], 'adverb', '不及物', '社会'],
    ['由衷地；不假思索地', 'In a way that happens naturally, as a direct result of a feeling.', '作为某种感受的直接反应，自然流露地发生。', '修饰动词，常与 smile、laugh、agree 等连用。', 'She smiled spontaneously at the little joke.', '这个小笑话让她由衷地笑了。', ['smile spontaneously', 'agree spontaneously'], [], 'adverb', '不及物', '情感'],
  ], '',['spontaneous'], 'brief 根提示 ←spontaneous B2 自发的 — spontaneously←spontaneous + -ly（-ly 在 §5.4 可继清单，透明副词后缀），B2 继承；近义 impromptu 即兴的、不加准备的（队列原样，置首义项）');

  W('spool', 'noun/verb', '/spuːl/', '', [], '卷轴；绕卷', 'A small cylinder for winding thread or wire onto, or to wind in this way.', [
    ['卷轴；线轴', 'A small cylinder around which thread, wire, film or other thin material is wound for storage.', '把线、金属丝、胶片等细长材料绕存起来的小圆筒。', '可数，常见于缝纫、摄影与纺织。', 'A spool of thread sat in the sewing box.', '缝纫盒里放着一卷线。', ['a spool of thread', 'an empty spool'], ['reel'], 'noun', 'countable', '工具'],
    ['把…绕在卷轴上', 'To wind wire, film or thread onto a spool so that it is stored neatly.', '把金属丝、胶片或线整齐地绕到卷轴上收存。', '及物动词，宾语是被缠绕的材料。', 'The machine spools the wire automatically.', '这台机器自动把金属丝绕到卷轴上。', ['spool the wire'], [], 'verb', '及物', '工业'],
  ], 'spools~spooled~spooled~spooling', ['reel'], 'brief 显示 ←?，自扫：库内无 spool 可继根（-ool 不在 §5.4 可继清单，源自中古荷兰语 spoele），留空；家族/近义 reel 卷轴（队列原样，入第 10 参并置首义项近义）');

  W('sporadic', 'adjective', '/spəˈrædɪk/', '', [], '零星的；偶发的', 'Happening only occasionally, not regularly or continuously.', [
    ['零星的；偶发的', 'Happening from time to time rather than at regular intervals.', '不时发生，而不是按固定间隔发生。', '多作定语，也可作表语，常形容事件与冲突。', 'There were sporadic showers throughout the afternoon.', '整个下午断断续续地下着阵雨。', ['sporadic fighting', 'sporadic outbreaks'], ['intermittent'], 'adjective', '定语/表语', '自然'],
    ['分散的；零散的', 'Spread thinly over an area or a period of time instead of being gathered together.', '零散地分布在一片区域或一段时间里，而不是集中出现。', '只作定语，常形容报道、抗议与病例。', 'Reports of the accident came in sporadic bursts.', '关于这起事故的报告零散地传来。', ['sporadic reports'], [], 'adjective', '定语', '媒体'],
  ], '', ['intermittent'], 'brief 显示 ←?，自扫：-ic 不在 §5.4 可继清单，库内亦无 sporadic 可见词根（源自希腊语 spora 播种），留空；家族/近义 intermittent 间歇的（队列原样，入第 10 参并置首义项近义）');

  W('sporting', 'adjective', '/ˈspɔːtɪŋ/', 'A1', [], '运动的；有体育精神的', 'Connected with sport, or fair and generous in competition.', [
    ['运动的；体育的', 'Connected with sports and with the activities that take place at sports events.', '与体育运动及赛事活动有关。', '只作定语，常与 event、goods、club 等词搭配。', 'The city is preparing for a major sporting event.', '这座城市正在筹备一项大型体育赛事。', ['a sporting event', 'sporting goods'], ['Olympic'], 'adjective', '定语', '体育'],
    ['有体育精神的；光明正大的', 'Fair and generous in the way you accept winning or losing.', '在胜负面前表现得公平而大度。', '只作定语，常见搭配 sporting spirit、sporting gesture。', 'They showed sporting behaviour even after the bad decision.', '即使遭遇不公判罚，他们也表现出了体育精神。', ['a sporting gesture', 'a sporting spirit'], [], 'adjective', '定语', '体育'],
  ], '',['sport'], 'brief 根提示 ←sport A1 运动 — sporting←sport + -ing（-ing 在 §5.4 可继清单，动名词转形容词），A1 继承；近义 Olympic 奥林匹克的（队列原样，置首义项）');

  W('spots', 'noun', '/spɒts/', 'B1', [], '斑点；皮疹；地点', 'Small marks on a surface, small skin marks, or particular places.', [
    ['斑点；小圆点', 'Small round marks of a different colour or material on a surface.', '表面上颜色或质地不同的小圆点。', '常用复数 spots，整体作复数，常与 of 连用。', 'The dog has black spots on its ears.', '这只狗的耳朵上有黑色斑点。', ['white spots', 'spots of paint'], [], 'noun', 'countable', '外貌'],
    ['皮疹；丘疹', 'Small red or white raised marks on the skin, often caused by illness or an allergy.', '皮肤上隆起的小红点或小白点，常由疾病或过敏引起。', '常用复数 spots，整体作复数，常见搭配 break out in spots。', 'The medicine caused itchy spots on her arms.', '这药让她手臂上起了痒痒的皮疹。', ['red spots', 'break out in spots'], ['rash'], 'noun', 'countable', '健康'],
    ['地点；场所', 'A particular place or area, especially one that people like or use often.', '特定的地点或区域，尤指人们喜爱或常去的地方。', '常用复数 spots，整体作复数，非正式用语。', 'This quiet bay is one of the best spots for swimming.', '这个安静的海湾是最佳游泳地点之一。', ['a parking spot', 'a beauty spot'], [], 'noun', 'countable', '地理'],
  ],'spots', ['rash'], 'brief 根提示 ←spot B1 斑点 — spots 为 spot 的复数形式单列词条，斑点、皮疹与地点三义均与 spot 直连，B1 继承（判断项：-s 复数化按库内 sales←sale A2、slacks←slack C1 先例）；复数形式单列词条，forms 留空；家族/近义 rash 皮疹（队列原样，入第 10 参并置皮疹义近义）');

  W('sprain', 'noun/verb', '/spreɪn/', '', [], '扭伤', 'An injury to a joint from a sudden twist, or the act of twisting it.', [
    ['扭伤', 'An injury to a joint caused by twisting it suddenly, which leaves the joint swollen and painful.', '关节被突然扭到而造成的损伤，会使关节肿胀疼痛。', '可数，常与 of 连用，常见于脚踝、手腕。', 'He went off with a sprain in the second half.', '他在下半场因扭伤下场。', ['a bad sprain', 'a sprain of the ankle'], ['strain'], 'noun', 'countable', '健康'],
    ['扭伤（关节）', 'To twist a joint such as the ankle or wrist suddenly and damage it.', '突然扭到脚踝、手腕等关节并使其受伤。', '及物动词，宾语是受伤的部位，常用于被动。', 'She sprained her wrist while carrying the boxes.', '她搬箱子时扭伤了手腕。', ['sprain an ankle', 'sprain a ligament'], ['twist'], 'verb', '及物', '健康'],
  ], 'sprains~sprained~sprained~spraining', [], 'brief 显示 ←?，自扫：库内无 sprain 可继根（-ain 不在 §5.4 可继清单，源自古法语 esprenier），strain、twist 为队列近义对照、非构词根，留空；近义 strain 扭伤、拉伤（置首义项）、twist 扭转（置义项2），均队列原样');

  W('spread to', 'verb', '/spred tuː/', '', [], '传播到；蔓延至', 'To reach a wider area or more people from an original source.', [
    ['传播到；蔓延至', 'To affect more people or a larger area after starting from one place or one source.', '从一处或一个源头开始，进而影响更多的人或更大的区域。', '短语动词，不及物，主语常为疾病、火势与谣言。', 'The infection spread to three other wards.', '感染蔓延到了其他三个病房。', ['spread to the region', 'spread to other countries'], ['infect'], 'verb', '不及物', '健康'],
    ['（气味、光线）飘到', 'To travel through the air until it arrives at another place.', '在空气中行进，直到抵达另一个地方。', '短语动词，不及物，主语为气味、光线或声音。', 'The smell of coffee spread to the next room.', '咖啡的香味飘到了隔壁房间。', ['spread to the garden'], [], 'verb', '不及物', '家居'],
  ],'spreads to~spread to~spreading to', [], '短语整体不取成分作根，分级留空（规范 §6），队列原样，短语条目；近义 infect 传染、感染（队列原样，置首义项）').phrase = true;

  W('spree', 'noun', '/spriː/', '', [], '狂欢；纵情作乐', 'A short period of doing something enjoyable without stopping.', [
    ['狂欢；纵情作乐', 'A short period of doing something enjoyable in an uncontrolled way, such as spending money or drinking.', '一段不受节制地做乐事的时光，比如花钱或喝酒。', '可数，非正式用语，常见 go on a spree。', 'We went on a shopping spree before the holiday.', '出发度假前我们痛痛快快地血拼了一番。', ['a shopping spree', 'a drinking spree'], ['fling'], 'noun', 'countable', '娱乐'],
    ['连续作案；一连串', 'A series of criminal or reckless acts carried out one after another in a short time.', '短时间内接连做出的一连串犯罪或鲁莽行为。', '可数，新闻用语，常见 a crime spree。', 'The gang went on a crime spree across the county.', '这伙人在全县连续作案。', ['a crime spree'], [], 'noun', 'countable', '法律'],
  ], 'sprees', [], 'brief 显示 ←?，自扫：库内无 spree 可继根（-ee 不在 §5.4 可继清单，源自德语 Sprießen），留空；近义 fling 一时纵情（队列原样，置首义项）');

  W('sprint', 'noun/verb', '/sprɪnt/', '', [], '冲刺；全速短跑', 'A short race run at full speed, or to run very fast for a short distance.', [
    ['短距离冲刺；疾跑', 'A short race in which the runner goes as fast as possible, or a fast burst of running.', '选手尽全力跑完的短距离比赛，或一段飞快的奔跑。', '可数，常见搭配 final sprint、100 metre sprint。', 'She saved her energy for the final sprint.', '她把体力留到了最后的冲刺。', ['the final sprint', 'a 100 metre sprint'], ['dash'], 'noun', 'countable', '体育'],
    ['冲刺；飞奔', 'To run as fast as you can for a short distance or to a particular point.', '在短距离内或朝某个点尽全力奔跑。', '不及物动词，常与 to、for 连用。', 'He sprinted to the bus stop in the rain.', '他冒雨冲向公交站。', ['sprint for the door', 'sprint down the road'], ['run'], 'verb', '不及物', '体育'],
  ], 'sprints~sprinted~sprinted~sprinting', ['dash', 'run'], 'brief 显示 ←?，自扫：库内无 sprint 可继根（-int 不在 §5.4 可继清单，源自瑞典语 sprinta），dash、run 为队列家族与近义对照、非构词根，留空；家族/近义 dash 猛冲（入第 10 参并置首义项近义）、run 奔跑（入第 10 参并置义项2近义），均队列原样');
})(typeof window !== 'undefined' ? window : globalThis);
