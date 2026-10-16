/* data/words/cet/author_s20.js — 常用词 S 批次 20，缺口 sprite ~ starvation，共 31 条
 * （28 单词 + 3 短语：stand for、stand out、starting at；全文件 .phrase 标记 3 处）。
 * 来源：family + 义项近反义缺口，refs/fam/syn 逐字照抄队列（本批无残缺词头）。
 * 考级标签照抄队列：CET4 × 2（stability、starvation）、CET6 × 1（stagnation），其余一律 []。
 * brief：%TEMP%\opencode\_s20_brief.txt 共 28 行、与本批 28 个单词逐行对应（短语不入 brief）；
 *   其中 24 行显示 ←?，已按规范 §5.2 纯文本自扫（fs.readFileSync + indexOf 定位 W(词条) 取第 4 参，
 *   覆盖 assets/js/data/words/cet/author_*.js、pending_*.js，curated.js 看 level 字段；未 require 全库）。
 * 扫根结论（自扫命中，author_s3.js / author_s8.js 第 4 参）：
 *   spy B1、stagnate C1、stair A2、stall C1、standard B1、stand A1、starve B2、stable B2；
 *   brief 直给根 4 个：stair [A2]、stall [C1]、stand [A1]、starve [B2]，与自扫一致。
 * 继承 12 条（备注逐条写明「X 级 继承」）：
 *   spyglass←spy B1（复合词首成分 §5.3）、stabilise←stable B2（-ise，判断项）、
 *   stability←stable B2（-ity）、stabilize←stable B2（-ize）、stagnation←stagnate C1（e→∅+ation §5.5）、
 *   stairs←stair A2（brief 根提示）、stairway←stair A2（复合词首成分 §5.3）、stalls←stall C1（brief 根提示）、
 *   standardize←standard B1（-ize）、standing←stand A1（brief 根提示）、
 *   standstill←stand A1（复合词首成分 §5.3，判断项）、starvation←starve B2（e→∅+ation §5.5）。
 * 留空 16 单词：sprite、sprout、spud、sputter（词根不成词，判断项）、squander、
 *   squandering（-ing 后缀但根 squander 库内无级）、squash、squat、squint、squirt、
 *   stalemate（stale+mate 非透明，判断项）、stallion、stamina、stanza、
 *   starboard（star+board 切词假象，判断项）、starch。
 * 留空 3 短语（规范 §6，一律 '' 且标 .phrase = true）：stand for、stand out、starting at。
 * CET 分布：CET4 × 2 = stability、starvation；CET6 × 1 = stagnation；本批无其他考试标签。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 * formsStr：动词 4 形以三单开头；常规名词只写复数；不可数与复数单列词条写 ''；形容词/短语留空。
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s20.js 必须在 _cet_helper.js 之后加载');

  W('sprite', 'noun', '/ˈsprʌɪt/', '', [], '小精灵；鬼火；屏幕精灵图', 'A small magical being from folklore, a flash of light in the air, or a small image that moves on a screen.', [
    ['小精灵；仙女', 'A small supernatural being from old stories, often pictured as a tiny magical person.', '旧故事中身形小巧、带有魔力的超自然生物。', '可数；多见于民间传说与童话。', 'The tale tells of a sprite who lived under the old bridge.', '这个故事讲的是一只住在旧桥下的小精灵。', ['a woodland sprite'], ['fairy'], 'noun', 'countable', '文化'],
    ['（屏幕上的）精灵图', 'A small picture that moves across a computer screen or a game screen.', '在电脑或游戏屏幕上移动的小幅图像。', '可数；计算机图形学用语。', 'The sprite jumps from one side of the screen to the other.', '这个精灵图从屏幕一侧跳到另一侧。', ['sprite animation'], [], 'noun', 'countable', '科学'],
  ], 'sprites', ['fairy'], 'brief 显示 ←?，自扫库内无 sprite 可继根（-ite 不在 §5.4 可继清单），留空；家族/近义 fairy 仙女（队列原样，fam 入第 10 参，fairy 置首义项近义）');

  W('sprout', 'noun/verb', '/spraʊt/', '', [], '嫩芽；发芽；长出', 'A young shoot growing from a seed or plant, or to begin to grow new shoots.', [
    ['嫩芽；新芽', 'A young shoot that grows out of a seed, a bulb or a tree branch.', '从种子、球茎或树枝上长出的幼小茎叶。', '可数；也指可供食用的豆芽菜。', 'Green sprouts appeared along the branch after the rain.', '雨后枝条上冒出了绿色的新芽。', ['bean sprouts', 'send out sprouts'], ['bud', 'germ', 'shoot'], 'noun', 'countable', '自然'],
    ['发芽；萌发', 'To begin to grow from a seed, or to produce new growth on a plant.', '从种子开始生长，或在植物上长出新的部分。', '不及物动词，主语是种子或植物。', 'The seeds sprouted within a week of planting.', '播种后一周之内种子就发芽了。', ['seeds sprout', 'sprout leaves'], [], 'verb', '不及物', '自然'],
  ], 'sprouts~sprouted~sprouted~sprouting', [], 'brief 显示 ←?，自扫库内无 sprout 可继根（-out 不在 §5.4 可继清单），留空；近义 bud 芽、germ 幼芽、shoot 嫩枝（队列原样，三词均置首义项）');

  W('spud', 'noun', '/spʌd/', '', [], '土豆（非正式）', 'An informal word for a potato.', [
    ['土豆；马铃薯（非正式）', 'A potato, used as an informal word for this vegetable.', '土豆的口语说法。', '可数；非正式用词，常见搭配 a baked spud。', 'She baked two spuds for the picnic.', '她为野餐烤了两个土豆。', ['bake spuds', 'a baked spud'], ['potato'], 'noun', 'countable', '饮食'],
  ], 'spuds', ['potato'], 'brief 显示 ←?，自扫库内无 spud 可继根（-ud 不在 §5.4 可继清单，potato 为近义非构词根），留空；家族/近义 potato 土豆（队列原样，置唯一义项）');

  W('sputter', 'verb/noun', '/ˈspʌtə/', '', [], '（引擎）噼啪作响；结结巴巴地说', 'To make a series of short spitting sounds, or to speak in a short broken angry voice.', [
    ['（引擎）噼啪作响；熄火前断续出声', 'To make a series of small spitting sounds, especially when an engine stops working.', '发出一连串短促的喷气声，尤指引擎停止工作前。', '不及物动词，主语常是引擎、火焰或液体。', 'The old engine sputtered twice and then went quiet.', '旧引擎噼啪响了两声就安静了。', ['sputter and stop', 'the engine sputters'], ['spit'], 'verb', '不及物', '工业'],
    ['结结巴巴地说；气急败坏地讲', 'To speak with short broken sounds, as if too angry or shocked to finish a sentence.', '用短促断续的声音说话，像气愤或震惊得说不完整。', '不及物动词，常与 out 连用。', 'He could only sputter out an excuse after the mistake.', '出了差错后，他只能结结巴巴地挤出一个借口。', ['sputter out', 'sputter in anger'], [], 'verb', '不及物', '口语'],
  ], 'sputters~sputtered~sputtered~sputtering', [], 'brief 显示 ←?，-er 虽在 §5.4 清单但词根 sputt 不成词（切词假象），库内亦无 sputter 可继根，留空（判断项）；近义 spit 喷吐（队列原样，置首义项）');

  W('spyglass', 'noun', '/ˈspaɪɡlɑːs/', 'B1', [], '（单筒）小望远镜', 'A small hand telescope used to look at things far away.', [
    ['（单筒）小望远镜', 'A small telescope with one tube that you hold in your hand to see distant things.', '握在手中的单筒望远镜，用来观看远处的事物。', '可数；常见于航海与故事场景。', 'The captain raised his spyglass to look at the far shore.', '船长举起他的小望远镜望向远处的海岸。', ['look through a spyglass'], ['telescope'], 'noun', 'countable', '科学'],
  ], 'spyglasses',['spy'], 'brief 显示 ←?，自扫 spy B1（author_s3.js 第 4 参）——复合词取首成分（规范 §5.3：spy + glass，「用以窥望之镜」语义直连），B1 继承；近义 telescope 望远镜（队列原样，置唯一义项）');

  W('squander', 'verb', '/ˈskwɒndə/', '', [], '挥霍；白白浪费', 'To waste money, time or an opportunity by using it carelessly.', [
    ['挥霍；浪费', 'To use money, time or resources in a careless way that brings no good result.', '把金钱、时间或资源用得毫无价值。', '及物动词，宾语常是 money、time、opportunity 等。', 'He squandered his savings on a machine nobody needed.', '他把积蓄浪费在一台没人需要的机器上。', ['squander money', 'squander an opportunity'], ['waste'], 'verb', '及物', '商务'],
  ], 'squanders~squandered~squandered~squandering', ['waste'], 'brief 显示 ←?，自扫库内无 squander 可继根（-ander 不在 §5.4 可继清单），留空；家族/近义 waste 浪费（队列原样，置唯一义项）');

  W('squandering', 'noun', '/ˈskwɒndərɪŋ/', '', [], '挥霍；浪费（行为）', 'The act of wasting money, time or chances that could have been useful.', [
    ['挥霍；浪费（行为）', 'The careless use of money, time or opportunities that could have been useful.', '把本可有用的金钱、时间或机会轻率地用掉。', '不可数，常与 of 连用；多用于批评与报道。', 'The report blamed the squandering of public money.', '这份报告把责任归咎于公共资金的挥霍。', ['the squandering of funds'], ['waste'], 'noun', 'uncountable', '商务'],
  ], '', [], 'brief 显示 ←?，自扫：-ing 虽在 §5.4 清单，但根词 squander 库内无级可继（本批新收且留空），故留空；动名词抽象义不可数，forms 留空；近义 waste 浪费（队列原样，置唯一义项）');

  W('squash', 'noun/verb', '/skwɒʃ/', '', [], '挤压；压扁；壁球；南瓜', 'To press something flat, a court game played with a rubber ball, or a hard-skinned vegetable.', [
    ['挤压；压扁', 'To press something hard so that it becomes flat or crushed.', '用力按压某物，使其变扁或被压碎。', '及物动词，宾语是被压之物。', 'Do not squash the tomatoes in the bag.', '别把袋子里的西红柿压扁了。', ['squash flat', 'squash the box'], ['crush'], 'verb', '及物', '饮食'],
    ['壁球运动', 'A game played by two players in a closed court, who hit a small rubber ball against a front wall.', '两名选手在封闭场地里把小橡皮球打向正面墙的运动。', '可数，指运动项目。', 'We booked a court for an hour of squash.', '我们订了一小时的壁球场地。', ['play squash', 'a squash court'], [], 'noun', 'countable', '体育'],
    ['南瓜；西葫芦', 'A vegetable with a hard shell that grows on the ground, belonging to the pumpkin family.', '长在地上的硬皮蔬菜，属南瓜一类。', '可数，也泛指这一类蔬菜。', 'She cut a squash into thin slices for the soup.', '她把一块南瓜切成薄片煮汤。', ['a butternut squash'], ['pumpkin'], 'noun', 'countable', '饮食'],
  ], 'squashes~squashed~squashed~squashing', ['crush', 'pumpkin'], 'brief 显示 ←?，自扫库内无 squash 可继根（-ash 不在 §5.4 可继清单），留空；家族/近义 crush 压扁（置首义项）、pumpkin 南瓜（置第三义项），均队列原样');

  W('squat', 'verb/noun', '/skwɒt/', '', [], '蹲；蹲坐；占用空屋；棚屋', 'To sit with your knees bent and your weight on your feet, to live in a building without permission, or a small plain house.', [
    ['蹲；蹲坐', 'To sit with your knees pulled up high and your weight resting on your feet.', '两膝高高弯曲、把体重放在脚上的姿势。', '不及物动词，常与 down 连用。', 'He squatted beside the fire to warm his hands.', '他蹲在火边暖手。', ['squat down', 'squat on the floor'], ['crouch'], 'verb', '不及物', '体育'],
    ['（未经许可）占用（空屋）', 'To live in an empty building without owning it or paying rent.', '住在自己既不拥有、也不付租金的空置建筑里。', '不及物动词，常与 in 连用。', 'A group of students squatted in the old factory.', '一群学生占住了那座旧工厂。', ['squat in a building'], [], 'verb', '不及物', '法律'],
    ['棚屋；简陋小屋', 'A small, plain house that is simple and in poor condition.', '矮小简陋、条件很差的房子。', '可数，非正式用语。', 'They lived in a squat beside the river.', '他们住在河边的一间棚屋里。', ['live in a squat'], [], 'noun', 'countable', '家居'],
  ], 'squats~squatted~squatted~squatting', ['crouch'], 'brief 显示 ←?，自扫库内无 squat 可继根（-at 不在 §5.4 可继清单），留空；家族/近义 crouch 蹲伏（队列原样，置首义项）');

  W('squint', 'verb/noun', '/skwɪnt/', '', [], '眯眼看；斜视', 'To look with your eyes almost closed, or a condition in which the eyes do not point the same way.', [
    ['眯眼看', 'To close your eyes almost shut because the light is bright or to see something more clearly.', '因光线太亮或为了看清而几乎闭上眼睛去看。', '不及物动词，常与 at 连用。', 'She squinted at the small print on the page.', '她眯着眼看页面上的小字。', ['squint at', 'squint in the sun'], ['peer'], 'verb', '不及物', '健康'],
    ['斜视；对眼', 'A condition in which the two eyes do not look in the same direction at the same time.', '两只眼睛不能同时望向同一方向的状况。', '可数，医学用语。', 'The baby has a slight squint in one eye.', '宝宝的一只眼睛有轻度斜视。', ['have a squint'], [], 'noun', 'countable', '健康'],
  ], 'squints~squinted~squinted~squinting', [], 'brief 显示 ←?，自扫库内无 squint 可继根（-int 不在 §5.4 可继清单），留空；近义 peer 凝神细看（队列原样，置首义项）');

  W('squirt', 'verb/noun', '/skwɜːt/', '', [], '喷射；一股液体；小家伙', 'To force liquid out in a thin stream, the stream itself, or a small rude person.', [
    ['喷射；挤出（液体）', 'To make liquid come out of a small opening in a fast thin stream.', '让液体从小孔里以细而急的水流喷出。', '及物动词，宾语是液体；也作不及物。', 'She squirted water at the dog in the garden.', '她在花园里朝狗喷水。', ['squirt water', 'squirt juice'], ['spray'], 'verb', '及物', '家居'],
    ['（喷出的）一股液体', 'A thin stream of liquid that is forced out under pressure.', '受压喷出的一道细液体流。', '可数，常与 of 连用。', 'A squirt of soap came out of the pump.', '泵里挤出一股肥皂液。', ['a squirt of sauce'], [], 'noun', 'countable', '家居'],
    ['小家伙；冒失鬼（非正式）', 'A small, rude or annoying person, often a child.', '矮小无礼或讨人嫌的人，常指小孩。', '可数，非正式且多带玩笑意味。', 'The little squirt ran off with the ball.', '那个小家伙抱着球跑开了。', ['a cheeky squirt'], [], 'noun', 'countable', '口语'],
  ], 'squirts~squirted~squirted~squirting', [], 'brief 显示 ←?，自扫库内无 squirt 可继根（-irt 不在 §5.4 可继清单），留空；近义 spray 喷洒（队列原样，置首义项）');

  W('stabilise', 'verb', '/ˈsteɪbɪlaɪz/', 'B2', [], '使稳定；趋于平稳', 'To make something firm and steady, or to become firm and steady.', [
    ['使稳定；使稳固', 'To make something firm and steady so that it stops moving or changing.', '使某物变得稳固，不再移动或变化。', '及物动词，宾语常是价格、局势、关系等。', 'The government acted to stabilise the currency.', '政府采取行动以稳定货币。', ['stabilise prices', 'stabilise a relationship'], [], 'verb', '及物', '金融'],
    ['稳定下来；趋于平稳', 'To become steady and to stop rising or falling after a period of change.', '在一段变化之后变得平稳，不再涨落。', '不及物动词，主语常是价格、局势等。', 'Prices stabilised after two months of sharp rises.', '经过两个月的急剧上涨，价格稳定了下来。', ['prices stabilise', 'stabilise at a level'], ['plateau'], 'verb', '不及物', '金融'],
  ], 'stabilises~stabilised~stabilised~stabilising',['stable'], 'brief 显示 ←?，自扫 stable B2（author_s8.js 第 4 参）——stable + -ise（z/s 拼写变体，按库内 modernizes、economizes 的 -ize 先例），B2 继承（判断项：-ise 未列入 §5.4 清单明示，按 -ize 先例裁定）；近义 plateau 进入平台期（队列原样，置第二义项，首义项无近义词）');

  W('stability', 'noun', '/stəˈbɪləti/', 'B2', ['CET4'], '稳定性；稳固', 'The state of being firm, steady and not likely to fail or change.', [
    ['稳定性', 'The quality of being firm and steady, and of not likely to fail or change over time.', '稳固、不易失效或变化的性质。', '不可数；常与 of 连用，多见于政治与经济语境。', 'The stability of the government is in question.', '政府的稳定性受到质疑。', ['political stability', 'economic stability'], ['balance'], 'noun', 'uncountable', '政治'],
  ], '', ['balance'], 'brief 显示 ←?，自扫 stable B2（author_s8.js 第 4 参）——stable + -ity（透明名词后缀，库内 capability←capable B1 等先例），B2 继承；CET4 标签照抄队列；抽象名词不可数，forms 留空；家族/近义 balance 平衡（队列原样，置唯一义项）');

  W('stabilize', 'verb', '/ˈsteɪbɪlaɪz/', 'B2', [], '使（局势）稳定；稳定下来', 'To hold something steady so that it stops rising or falling, or to become steady again.', [
    ['使（局势、病情）稳定', 'To hold something steady so that it stops rising, falling or moving.', '稳住某物，使其不再上涨、下跌或移动。', '及物动词，宾语常是价格、局势、病情等。', 'The clinic gave him medicine to stabilize his condition.', '诊所给他开了药以稳定他的病情。', ['stabilize the economy', 'stabilize prices'], ['steady'], 'verb', '及物', '金融'],
    ['稳定；不再波动', 'To stop moving or changing and to become steady again.', '停止移动或变化，重新变得平稳。', '不及物动词，主语是价格、病情等。', 'The price of oil stabilized by the end of the year.', '到年底时油价稳定了下来。', ['oil prices stabilize'], [], 'verb', '不及物', '金融'],
  ], 'stabilizes~stabilized~stabilized~stabilizing',['stable'], 'brief 显示 ←?，自扫 stable B2（author_s8.js 第 4 参）——stable + -ize（透明后缀，库内 modernizes、moralizes 先例），B2 继承；美式拼写，与本批 stabilise 互为变体；近义 steady 使稳定（队列原样，置首义项）');

  W('stagnation', 'noun', '/stæɡˈneɪʃn/', 'C1', ['CET6'], '停滞；不景气', 'A state in which nothing develops, grows or improves for a long time.', [
    ['停滞；不景气', 'A state in which nothing develops, grows or improves for a long time.', '长时间没有发展、增长或改善的状态。', '不可数；常与 economic、industrial 等连用。', 'The country slid into a long period of stagnation.', '这个国家滑入了长期的停滞。', ['economic stagnation', 'a period of stagnation'], ['inertia'], 'noun', 'uncountable', '金融'],
  ], '', ['inertia'], 'brief 显示 ←?，自扫 stagnate C1（author_s8.js 第 4 参）——stagnate + -ation（e→∅+ation 正字类，规范 §5.5），C1 继承；CET6 标签照抄队列；抽象名词不可数，forms 留空；家族/近义 inertia 停滞、惰性（队列原样，置唯一义项）');

  W('stairs', 'noun', '/steəz/', 'A2', [], '楼梯（总称）', 'A set of steps inside a building that lead from one floor to another.', [
    ['楼梯（总称）', 'A set of steps inside a building that go from one floor to another.', '建筑内从一层通往另一层的一组台阶。', '常用复数 stairs，整体作单数概念，与 the 连用。', 'She walked up the stairs to the second floor.', '她走上楼梯到了二楼。', ['go up the stairs', 'the bottom of the stairs'], ['staircase'], 'noun', 'countable', '家居'],
  ], '', ['staircase'], 'brief 根提示 ←stair [A2] 名词（自扫 author_s8.js 同为 A2），A2 继承；复数形式单列词条，forms 留空（规范 §4）；家族/近义 staircase 楼梯（队列原样，置唯一义项）');

  W('stairway', 'noun', '/ˈsteəweɪ/', 'A2', [], '楼梯；阶梯通道', 'A flight of stairs inside or outside a building, together with the space around it.', [
    ['楼梯；阶梯通道', 'A flight of stairs inside or outside a building, together with the space around it.', '建筑物内外的一段楼梯及其周围空间。', '可数；比 staircase 更强调通道性质。', 'A wide stairway leads up to the main hall.', '一段宽阔的楼梯通向大厅。', ['a spiral stairway', 'a stairway to the roof'], ['staircase'], 'noun', 'countable', '家居'],
  ], 'stairways', ['staircase'], 'brief 显示 ←?，自扫 stair A2（author_s8.js 第 4 参）——复合词取首成分（规范 §5.3：stair + way，「楼梯的通道」语义直连），A2 继承；家族/近义 staircase 楼梯（队列原样，置唯一义项）');

  W('stalemate', 'noun/verb', '/ˈsteɪlmeɪt/', '', [], '僵局；相持不下；使陷入僵局', 'A situation in which neither side can make progress, or to put a discussion into that state.', [
    ['僵局；相持不下', 'A situation in which no side can win or move forward because each side blocks the other.', '双方互相阻挡、谁也无法取胜或推进的局面。', '可数，常与 reach、end in、break 等连用。', 'Talks between the two sides reached a stalemate.', '双方的会谈陷入了僵局。', ['reach a stalemate', 'break the stalemate'], ['deadlock'], 'noun', 'countable', '政治'],
    ['使陷入僵局', 'To make a discussion or a process stop making progress.', '使讨论或进程无法继续推进。', '及物动词，常见于被动形式。', 'The dispute over pay stalemated the negotiations.', '关于薪酬的争执使谈判陷入僵局。', ['stalemate the talks'], [], 'verb', '及物', '政治'],
  ], 'stalemates~stalemated~stalemated~stalemating', ['deadlock'], 'brief 显示 ←?，自扫：stale 与 mate 拼合成词但非透明后缀组合（stale「不新鲜的」与「僵局」仅比喻关联），库内无 stalemate 可继根，留空（判断项）；家族/近义 deadlock 僵局（队列原样，置首义项）');

  W('stallion', 'noun', '/stəˈliən/', '', [], '公马；种马', 'A male horse that has not been castrated, kept especially for breeding.', [
    ['公马；种马', 'A male horse that has not been castrated, kept especially for breeding.', '未阉割的公马，尤用于繁育。', '可数；与 mare 母马相对。', 'The farmer kept a young stallion in the next field.', '农场主在旁边的地里养了一匹年轻的种马。', ['raise a stallion', 'a young stallion'], ['horse'], 'noun', 'countable', '农业'],
  ], 'stallions', ['horse'], 'brief 显示 ←?，自扫库内无 stallion 可继根（-ion 不在 §5.4 可继清单，词源为通俗拉丁语），留空；家族/近义 horse 马（队列原样，置唯一义项）');

  W('stalls', 'noun', '/stɔːlz/', 'C1', [], '正厅前排座位；市场摊位', 'Seats at the front of a theatre, or small shops in a market where goods are sold.', [
    ['（剧院）正厅前排座位', 'The seats in the front part of a theatre, which are closest to the stage.', '剧院里离舞台最近的前排座位。', '常用复数 stalls，整体作单数概念；英式用语。', 'We booked two seats in the stalls for Friday.', '我们订了周五正厅前排的两个座位。', ['book the stalls', 'front stalls'], ['orchestra'], 'noun', 'countable', '娱乐'],
    ['摊位；货摊', 'A small open shop or a marked-out space in a market where goods are sold.', '市场里摆货出售的小摊或划出的摊位。', '可数；常见 market stalls、food stalls。', 'The flower stalls open early on Sunday.', '周日花摊很早开张。', ['market stalls', 'a food stall'], [], 'noun', 'countable', '商务'],
  ],'stalls',['stall'], 'brief 根提示 ←stall [C1] 名词/动词（自扫 author_s8.js 同为 C1），C1 继承；复数形式单列词条，forms 留空（规范 §4）；近义 orchestra 正厅座位（美式剧院称谓，队列原样，置首义项）');

  W('stamina', 'noun', '/ˈstæmɪnə/', '', [], '耐力；持久力', 'The physical strength and energy to keep working or moving for a long time.', [
    ['耐力；持久力', 'The physical strength and energy to keep working or moving for a long time.', '长时间工作或活动所需的身体力量与精力。', '不可数；常与 physical、endurance 等连用。', 'Long races test the stamina of every runner.', '长跑考验每位选手的耐力。', ['build up stamina', 'physical stamina'], ['energy'], 'noun', 'uncountable', '体育'],
  ], '', [], 'brief 显示 ←?，自扫库内无 stamina 可继根（词尾 -a 为拉丁阴性名词后缀，不在 §5.4 可继清单），留空；抽象名词不可数，forms 留空；近义 energy 精力（队列原样，置唯一义项）');

  W('stand for', 'verb', '/ˈstænd fɔː/', '', [], '代表；表示；容忍', 'To be the short form or the sign of something, or to accept a way of behaving you dislike.', [
    ['代表；表示', 'To be the short form of a name, or the sign used for an idea.', '作为名称的缩写，或作为某种含义的标记。', '可及物短语，宾语置于 for 之后。', 'The letters BMW stand for three company names.', '这三个字母代表三家公司的名称。', ['stand for a name', 'what it stands for'], ['represent'], 'verb', '及物', '通用'],
    ['容忍；忍受', 'To accept or allow a way of behaving that you do not like.', '容忍或允许自己不喜欢的行为方式。', '可及物短语，多用于否定句。', 'The teacher would not stand for cheating in the exam.', '老师不会容忍考试作弊。', ['not stand for', 'stand for nonsense'], [], 'verb', '及物', '教育'],
  ],'stands for~stood for~standing for', ['represent'], '短语整体不取成分作根，分级留空；家族/近义 represent 代表、表示（队列原样，置首义项，短语条目）').phrase = true;

  W('stand out', 'verb', '/ˈstænd aʊt/', '', [], '突出；显眼；脱颖而出', 'To be easily noticed because you are different, or to be much better than the others.', [
    ['显眼；突出', 'To be easy to see or notice because of being very different from what is around.', '因为与周围很不一样而容易被看到或注意到。', '不及物短语，常与 from 连用。', 'Her red coat stood out in the crowd.', '她那件红色外套在人群中很显眼。', ['stand out from', 'stand out in the crowd'], ['shine'], 'verb', '不及物', '外貌'],
    ['脱颖而出；表现突出', 'To be much better than the other people in a group.', '在一群人中表现得比其他人好得多。', '不及物短语，多用于比赛、工作等评价。', 'He stood out as the best player on the team.', '他脱颖而出，成了队里最出色的球员。', ['stand out among', 'stand out for its quality'], ['excel'], 'verb', '不及物', '体育'],
  ],'stands out~stood out~standing out', ['excel'], '短语整体不取成分作根，分级留空；家族 excel 表现突出，近义 shine 出众（置首义项）、excel 胜过他人（置第二义项），均队列原样，短语条目').phrase = true;

  W('standardize', 'verb', '/ˈstændədaɪz/', 'B1', [], '使标准化；统一规格', 'To make different products, methods or names follow one fixed standard.', [
    ['使标准化；统一规格', 'To make different products, methods or names follow one fixed standard.', '使不同的产品、方法或名称都遵循同一固定标准。', '及物动词，常见于工业、教育与行政管理；近义 mechanize 强调以机器流水线统一作业，unify 强调整体归并为一。', 'The factory standardized every part so the machines fit together.', '工厂把每个零件都标准化，使机器能组装在一起。', ['standardize parts', 'standardize tests'], ['mechanize', 'unify'], 'verb', '及物', '工业'],
  ], 'standardizes~standardized~standardized~standardizing',['standard'], 'brief 显示 ←?，自扫 standard B1（author_s8.js 第 4 参）——standard + -ize（透明后缀，库内 modernizes、moralizes 先例），B1 继承；近义 mechanize 机械化、unify 统一（队列原样，两词均置唯一义项）');

  W('standing', 'noun/adjective', '/ˈstændɪŋ/', 'A1', [], '地位；名望；常设的；长期的', 'The rank or reputation a person has, or something that continues over a long period.', [
    ['地位；名望', 'The respect, rank or reputation that a person or an organization has in a community.', '个人或机构在群体中受到的尊重、级别与名声。', '不可数；常与 high、low、good 等连用。', 'She is a lawyer of high standing in the city.', '她是城里地位很高的律师。', ['of high standing', 'social standing'], ['prestige', 'reputation', 'repute', 'status'], 'noun', 'uncountable', '社交'],
    ['常设的；长期有效的', 'Continuing or lasting for a long period rather than for a short time.', '长期持续存在的，而不是短期的。', '只作定语，放在名词前面。', 'The committee meets on a standing basis each month.', '委员会每月按常设机制开会。', ['standing committee', 'standing orders'], [], 'adjective', '定语', '商务'],
  ],'standings', ['reputation'], 'brief 根提示 ←stand [A1] 动词/名词（自扫 author_s8.js 同为 A1），A1 继承；本条取名词与形容词义项、无动词用法条目，无词形变化故 forms 留空（同 sleeping 先例）；家族 reputation 声誉，近义 prestige 声望、reputation 声誉、repute 名声、status 地位（队列原样，四词均置首义项）');

  W('standstill', 'noun', '/ˈstændstɪl/', 'A1', [], '停顿；停滞', 'A state in which traffic, machines or activity stop completely and nothing moves.', [
    ['停顿；完全停止', 'A state in which traffic, machines or activity stop completely and nothing moves.', '交通、机器或活动完全停止、一切静止的状态。', '可数，常与 come to、bring to 连用。', 'The heavy snow brought traffic to a standstill.', '大雪使交通陷入停顿。', ['come to a standstill', 'traffic at a standstill'], [], 'noun', 'countable', '交通'],
    ['停滞；无进展的时期', 'A period in which something no longer develops, so that progress stops.', '事物不再发展、进展中断的一段时间。', '可数，常与 at a、period of 连用。', 'Talks have been at a standstill for three weeks.', '会谈已停摆三周。', ['at a standstill for weeks'], ['plateau'], 'noun', 'countable', '社会'],
  ], 'standstills',['stand'], 'brief 显示 ←?，自扫 stand A1（author_s8.js 第 4 参）——复合词取首成分（规范 §5.3：stand + still，「站着不动→完全停顿」语义直连），A1 继承（判断项）；近义 plateau 平台期、停滞阶段（队列原样，置第二义项）');

  W('stanza', 'noun', '/ˈstænzə/', '', [], '诗节', 'A group of lines in a poem that forms one unit, separated from the rest by a blank line.', [
    ['诗节', 'A group of lines in a poem that forms one unit, usually set apart from the rest by a blank line.', '诗中构成一个单位的一组诗行，通常前后空一行与其他部分分开。', '可数；一首诗常由若干诗节组成。', 'The poem has four stanzas of six lines each.', '这首诗有四个诗节，每节六行。', ['a four-line stanza', 'the opening stanza'], ['verse'], 'noun', 'countable', '文学'],
  ], 'stanzas', ['verse'], 'brief 显示 ←?，自扫库内无 stanza 可继根（词尾 -a 不在 §5.4 可继清单，源自意大利语），留空；家族/近义 verse 诗节（队列原样，置唯一义项）');

  W('starboard', 'noun/adjective', '/ˈstɑːbɔːd/', '', [], '（船、飞机的）右舷', 'The side of a ship or aircraft that is on the right when you face the front.', [
    ['右舷', 'The side of a ship or aircraft that is on the right when you face the front.', '面向船头或机头方向时右侧的那一边。', '不可数，常与 of、side 连用，与 port 左舷相对。', 'The damage was on the starboard side of the hull.', '损伤位于船体右舷一侧。', ['starboard side', 'starboard light'], ['right'], 'noun', 'uncountable', '交通'],
  ], '', [], 'brief 显示 ←?，star + board 拼合但 star「星」与「右舷」无语义直连，切词假象，留空（判断项）；方位名词不可数、无复数，forms 留空；近义 right 右侧（队列原样，置唯一义项）');

  W('starch', 'noun/verb', '/stɑːtʃ/', '', [], '淀粉；给（衣物）上浆', 'A powder found in bread and potatoes that gives energy, or to make clothes stiff with a special liquid.', [
    ['淀粉', 'A white powder found in bread, rice and potatoes that gives the body energy.', '存在于面包、米饭和土豆中的白色粉末，为身体提供能量。', '不可数；营养与饮食用语。', 'Potatoes contain more starch than most fruit.', '土豆比多数水果含更多的淀粉。', ['starch content', 'food rich in starch'], ['carbohydrate'], 'noun', 'uncountable', '饮食'],
    ['给（衣物）上浆', 'To make clothes or cloth stiff by putting a special liquid on them and then ironing them.', '给衣物涂上浆液再熨烫，使其挺括。', '及物动词，常见过去分词 starched。', 'She starched the collar of his shirt.', '她给他衬衫的领子上了浆。', ['starch a shirt', 'starched collar'], [], 'verb', '及物', '家居'],
  ], 'starches~starched~starched~starching', ['carbohydrate'], 'brief 显示 ←?，自扫库内无 starch 可继根（-arch 不在 §5.4 可继清单，词源希腊语 starchos 不在库），留空；名词不可数但本条为名词/动词混合，forms 取动词 4 形（规范 §4）；家族/近义 carbohydrate 碳水化合物（队列原样，置首义项）');

  W('starvation', 'noun', '/stɑːˈveɪʃn/', 'B2', ['CET4'], '挨饿；饿死；断粮', 'A very serious lack of food that makes people or animals grow weak and unable to live.', [
    ['挨饿；饿死', 'A very serious lack of food that makes people or animals so weak that they may die.', '极其严重的缺粮，使人或动物虚弱到可能死亡。', '不可数；多见于战争与灾荒报道。', 'Thousands faced starvation after the harvest failed.', '收成失败后，数千人面临饿死的威胁。', ['face starvation', 'starvation wages'], ['famine'], 'noun', 'uncountable', '社会'],
    ['饥饿状态；断粮', 'A long period with little or no food, caused by a siege, a strike or an extreme diet.', '因围困、罢工或极端节食而长时间缺乏食物的状态。', '不可数；也指个人长期不吃东西的状态。', 'The prisoners were kept on the edge of starvation.', '囚犯们被折磨得濒临饿死。', ['on the edge of starvation'], ['hunger'], 'noun', 'uncountable', '健康'],
  ], '', ['famine', 'hunger'], 'brief 根提示 ←starve [B2] 动词（自扫 author_s8.js 同为 B2）——starve + -ation（e→∅+ation 正字类，规范 §5.5），B2 继承；CET4 标签照抄队列；抽象名词不可数，forms 留空；家族 famine 饥荒、近义 famine 饥荒（置首义项）、hunger 饥饿（置第二义项），均队列原样');

  W('starting at', 'verb', '/ˈstɑːtɪŋ æt/', '', [], '（价格、数量）起始于', 'Used to show the lowest price, number or amount at which something begins.', [
    ['（价格、数量）起始于', 'Used to show the lowest price, number or amount at which something begins.', '用来表示某物开始时的最低价格、数量或数额。', '分词短语，作后置定语修饰价格、费用、门票等名词，常可与 from 互换。', 'The hotel has rooms starting at sixty pounds a night.', '这家旅馆有每晚六十英镑起的房间。', ['prices starting at', 'starting at only'], ['from'], 'verb', '不及物', '商务'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 from 从……起（队列原样，置唯一义项，短语条目）').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
