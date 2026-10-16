/* data/words/cet/author_w5.js — W 批次 5，缺口 whir ~ womankind，共 31 条
 * （25 单词 + 6 短语；短语清单：whole number、wild animal、wild plant、win over、wipe out、
 *   without doubt）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_w5.txt，widx 063-093，无残缺词头）。
 * CET 标签照抄队列：CET4 × 7（widower、width、willing、winner、wireless、wisdom、withdrawal）、
 *   CET6 × 0，其余 24 条 []。
 * brief：%TEMP%\opencode\_w5_brief.txt 共 25 行，与本批 25 个单词一一对应（首行 whir、末行 womankind），
 *   8 行给出根提示（whole A2、wicked C1、widow B2、wild A2、will A1、win A2、wish A2、wit B2），
 *   17 行显示 ←?，一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf 定位 W('word' 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；临时脚本 _scan_w5.js 用完已删除）。
 * 扫根结论（自扫，均 author_w2.js 第 4 参）：whirl C1、white A1、whole A2、wicked C1、widow B2、
 *   wide A2、wild A2、will A1、winter A1、wire B1、wise B1、wish A2、witch B1、withdraw B2、wit B2、
 *   woman A1；whir、whirlwind、whisk、white-haired、whiteboard、whiten、whopper、width、wintertime、
 *   wireless、wisdom、wishes、wistful、witchcraft、withdrawal、wits、wizard、woe、womankind 均不在库。
 * brief 根提示复核通过（自扫同级）：whole A2、wicked C1、widow B2、wild A2、will A1、win A2、
 *   wish A2、wit B2（均 author_w2.js）。
 * · 继承（16 条）：
 *   whirlwind←whirl C1 + wind（复合取首成分，判断项）；white-haired←white A1（复合取首成分，判断项）；
 *   whiteboard←white A1 + board（复合取首成分，判断项）；whiten←white A1 + -en（-en 在 §5.4 清单）；
 *   wholeness←whole A2 + -ness（§5.4 清单，brief 根提示）；wickedness←wicked C1 + -ness（brief 根提示）；
 *   widower←widow B2（brief 根提示，-er 施动者，男性遗孀语义直连）；
 *   width←wide A2 + -th（-th 在 §5.4 清单）；wilds←wild A2（brief 根提示，复数形式单列词条）；
 *   willing←will A1 + -ing（brief 根提示，-ing 在 §5.4 清单）；winner←win A2 + -er（brief 根提示）；
 *   wintertime←winter A1 + time（复合取首成分，判断项）；
 *   wireless←wire B1 + -less（§5.4c 先例面：careless←care A1、endless←end A1，判断项）；
 *   wishes←wish A2（brief 根提示，复数形式单列词条）；witchcraft←witch B1 + craft（复合取首成分，判断项）；
 *   withdrawal←withdraw B2 + -al（-al 在 §5.4 清单）；wits←wit B2（brief 根提示，复数形式单列词条）；
 *   womankind←woman A1 + kind（复合取首成分，判断项）。
 *   whir←whirl C1（兄弟派生 §5.6：whir 为 whirl 词首全段 + 语义同域直连，判断项，主 agent 改判，
 *     原留空理由「词首非全段共享」经复核不成立）。
 *   以上继承均语义直连核对通过。
 * · 留空（9 单词 + 6 短语）：
 *   whisk（库内无词源根，-isk 不在 §5.4 清单，判断项）；whopper（根词 whop 不在库，-er 无根可继，判断项）；
 *   wisdom（-dom 不在 §5.4 清单且无库内先例，wise→wisd- 词干变化无 §5.5 所列正字类先例支撑，判断项，
 *     供主 agent 裁定）；wistful（wit B2 词首非全段共享，语义不直连，切词假象 §5.7，判断项）；
 *   wizard（wise B1 词首非全段共享，-ard 不在清单且无先例，语义不直连，判断项）；
 *   woe（库内无词源根，判断项）；6 条短语一律 §6 分级留空。
 * 共 19 条继承（含判断项）、6 条留空（判断项）+ 6 条短语留空。
 * CEFR 分布（25 单词）：A1 × 7（whirlwind、white-haired、whiteboard、whiten、willing、wintertime、
 *   womankind）、A2 × 5（wholeness、width、wilds、winner、wishes）、B1 × 2（wireless、witchcraft）、
 *   B2 × 3（widower、withdrawal、wits）、C1 × 2（wickedness、whir）、留空 × 6（whisk、whopper、
 *   wisdom、wistful、wizard、woe）；短语 6 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_w5.js 必须在 _cet_helper.js 之后加载');

  W('whir', 'noun/verb', '/wɜː/', 'C1', [], '嗡嗡声；嗡嗡作响', 'A low continuous sound, or to make that sound.', [
    ['嗡嗡声；呼呼作响', 'A low continuous sound made by something turning fast, such as wings or a machine.', '翅膀或机器等快速转动时发出的低沉连续的声音。', '可数，常作单数，与 a 连用；动词义同形，描述持续的旋转嗡鸣。', 'The whir of the fan filled the quiet room.', '风扇的嗡嗡声充满了安静的房间。', ['the whir of wings'], ['hum'], 'noun', 'countable', '通用'],
    ['嗡嗡作响', 'To make a low continuous sound like something turning quickly.', '发出像快速旋转物那样的低沉连续声。', '不及物动词，主语多为机器、翅膀、车轮。', 'The propeller whirred into life.', '螺旋桨嗡嗡地转了起来。', ['whir into action'], [], 'verb', '不及物', '通用'],
  ], 'whirs~whirred~whirred~whirring',['whirl'], 'brief ←?，按 §5.2 自扫根：whirl C1 旋转（author_w2.js 第 4 参）——原判「词首非全段共享（wh- 与 whi-）」有误，whir 恰为 whirl 的词首全段（whirl = whir + l），§5.6 词形条件成立；§5.1 语义直连核对通过（whir 快速旋转并发嗡声 ↔ whirl 旋转，属同一动作域），whirl C1 继承（判断项，主 agent 改判：同 author_v3.js viola←violin A2 兄弟派生先例；与 tuber←tub 留空判例的差别在于后者浴缸↔块茎语义域完全不相交）；近义 hum 嗡嗡声（队列原样，置首义项恰好一次）');

  W('whirlwind', 'noun', '/ˈwɜːlwɪnd/', 'C1', [], '旋风；龙卷风', 'A tall column of air that turns round and round very fast.', [
    ['旋风；小型龙卷风', 'A tall narrow column of air that spins rapidly over land or sea.', '在陆地或海面上快速旋转的细长气柱。', '可数，比 tornado 弱、规模小，也可比喻突然而猛烈的事物。', 'A whirlwind swept dust and leaves into the air.', '一阵旋风把尘土和树叶卷到空中。', ['a whirlwind of dust'], ['tornado'], 'noun', 'countable', '自然'],
    ['旋风式的；匆忙的（比喻用法）', 'Something that happens very fast and involves a lot of activity in a short time.', '在很短时间内快速发生且活动繁多的事情。', '常作定语，如 a whirlwind tour/romance，含仓促而热烈的意味。', 'They married after a whirlwind romance of three weeks.', '经过三周旋风式的恋爱后，他们结了婚。', ['a whirlwind tour', 'a whirlwind romance'], [], 'noun', 'countable', '通用'],
  ], 'whirlwinds', ['tornado'], 'brief ←?，按 §5.2 自扫根：复合词 whirlwind = whirl + wind，按规范 §5.3 取首成分 whirl C1 旋转（author_w2.js 第 4 参），「旋风」与 whirl「旋转」语义直连，C1 继承（判断项：复合词首成分裁定）；家族/近义 tornado 龙卷风（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('whisk', 'verb/noun', '/wɪsk/', '', [], '迅速带走；搅拌器', 'To take somebody away quickly, or a kitchen tool for beating food.', [
    ['迅速带走；匆匆送走', 'To take somebody or something away quickly and suddenly.', '迅速而突然地把某人或某物带走。', '及物动词，常与 away、off 连用，常见被动式。', 'The waiter whisked the plate away before we finished.', '我们还没吃完，侍者就把盘子收走了。', ['whisk away', 'whisk off'], ['spirit'], 'verb', '及物', '通用'],
    ['搅打；拂去', 'To beat eggs or cream fast with a kitchen tool, or to brush something away lightly.', '用器具快速搅打鸡蛋或奶油，或轻轻地拂去某物。', '及物动词，宾语多为蛋、奶油、灰尘。', 'She whisked the eggs until they were light and frothy.', '她把鸡蛋搅打至蓬松起泡。', ['whisk the cream', 'whisk away the dust'], [], 'verb', '及物', '饮食'],
    ['打蛋器；搅拌器', 'A kitchen tool made of loops of wire used for beating eggs or cream.', '由金属丝环制成、用于搅打鸡蛋或奶油的厨具。', '可数，形如小漏勺，也可指拂尘的小毛刷。', 'Add the flour with a whisk to avoid lumps.', '用打蛋器加入面粉以免结块。', ['an electric whisk'], ['whip'], 'noun', 'countable', '家居'],
  ], 'whisks~whisked~whisked~whisking', [], 'brief ←?，按 §5.2 自扫根：库内无 whisk 的语义直连词根（-isk 不在 §5.4 清单且无库内先例），留空（判断项）；近义 spirit 迅速带走、whip 搅拌器（队列原样，分置义项 1、3 各恰好一次）');

  W('white-haired', 'adjective', '/waɪt heəd/', 'A1', [], '白发的', 'Having hair that is white or grey.', [
    ['白发的；头发花白的', 'Having hair that has turned white or grey, usually from age.', '头发因年老等原因变白或花白的。', '定语，复合形容词，由 white + haired 构成，描写外貌。', 'A white-haired gentleman held the door open for us.', '一位白发绅士为我们扶着门。', ['a white-haired old man'], ['gray'], 'adjective', '定语', '外貌'],
  ], '',['white'], 'brief ←?，按 §5.2 自扫根：复合词 white-haired = white + haired，按规范 §5.3 取首成分 white A1 白色的（author_w2.js 第 4 参），「白发的」与 white「白色」语义直连，A1 继承（判断项：复合词首成分裁定）；近义 gray 灰白的（队列原样，置唯一义项恰好一次）');

  W('whiteboard', 'noun', '/ˈwaɪtbɔːd/', 'A1', [], '白板；白色书写板', 'A smooth white board that you can write on with special pens.', [
    ['白板；白色书写板', 'A smooth white surface used in classrooms and offices for writing on with special marker pens.', '教室和办公室中用特种记号笔书写的光滑白色板面。', '可数，可擦写，对应 blackboard 的黑板。', 'The teacher drew a diagram on the whiteboard.', '老师在白板上画了一幅示意图。', ['write on the whiteboard', 'an interactive whiteboard'], ['blackboard'], 'noun', 'countable', '教育'],
  ], 'whiteboards', ['blackboard'], 'brief ←?，按 §5.2 自扫根：复合词 whiteboard = white + board，按规范 §5.3 取首成分 white A1 白色的（author_w2.js 第 4 参），「白板」与 white「白色」语义直连，A1 继承（判断项：复合词首成分裁定）；家族/近义 blackboard 黑板（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('whiten', 'verb', '/ˈwaɪtn/', 'A1', [], '使变白；变白', 'To make something white or become white.', [
    ['使变白；漂白', 'To make something white or whiter, for example cloth, walls or teeth.', '使布、墙面或牙齿等变白或更白。', '及物动词，white + -en 构成，常用于洗涤、粉刷、美牙语境。', 'The lotion claims to whiten teeth in two weeks.', '这款牙膏声称两周内可美白牙齿。', ['whiten the walls', 'whiten teeth'], ['bleach'], 'verb', '及物', '通用'],
    ['（脸色）发白；变白', 'To become white or pale in colour.', '颜色变得发白或苍白。', '不及物动词，可指脸色因恐惧而失去血色。', 'His face whitened when he heard the warning.', '听到警告时，他的脸一下白了。', ['whiten with fear'], ['pale'], 'verb', '不及物', '外貌'],
  ], 'whitens~whitened~whitened~whitening',['white'], 'brief ←?，按 §5.2 自扫根：whiten = white A1 白色的（author_w2.js 第 4 参）+ -en（使动后缀，-en 在 §5.4 清单，如 widen、shorten 同类），语义直连，A1 继承；近义 bleach 漂白、pale 变苍白（队列原样，分置义项 1、2 各恰好一次）；fam 队列为空故第 10 参 []');

  W('whole number', 'noun', '/həʊl ˈnʌmbə/', '', [], '整数', 'A number such as 1, 2 or 3 that is not a fraction.', [
    ['整数', 'A number such as zero, one or two that has no fractional or decimal part.', '如零、一、二等不带分数或小数部分的数。', '名词短语，可数，数学术语，与 fraction、decimal 相对。', 'Three halves is not a whole number.', '二分之三不是整数。', ['a positive whole number'], ['integral'], 'noun', 'countable', '数学'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 integral 整数的（队列原样，置唯一义项恰好一次）').phrase = true;

  W('wholeness', 'noun', '/ˈhəʊlnəs/', 'A2', [], '完整；整体性', 'The state of being complete and not divided or broken.', [
    ['完整；整体性', 'The state of being complete, with all parts together and nothing missing.', '各部分齐备、未受分割或损伤的完整状态。', '不可数，抽象名词，多用于心理、哲学与健康语境。', 'Yoga gave her a sense of inner wholeness.', '瑜伽给了她一种内在的完整感。', ['a sense of wholeness', 'inner wholeness'], ['integrity'], 'noun', 'uncountable', '心理'],
  ], '', ['integrity'], 'brief 根提示 ←whole A2 完整的（按 §5.2 自扫 author_w2.js 第 4 参复核为 A2）+ -ness（-ness 在 §5.4 清单），语义直连，A2 继承；抽象不可数故 forms 留空；家族/近义 integrity 完整（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('whopper', 'noun', '/ˈwɒpə/', '', [], '庞然大物；弥天大谎', 'Something very big, or a very big lie.', [
    ['庞然大物；特大的东西', 'Something that is unusually large in size.', '体积大得反常的东西。', '可数，非正式口语，常含惊叹语气，也指特大号汉堡。', 'He caught a whopper of a fish at the lake.', '他在湖里钓到一条特大的鱼。', ['a whopper of a fish'], ['monster'], 'noun', 'countable', '口语'],
    ['弥天大谎', 'A very big lie that is hard to believe.', '大得让人难以置信的谎言。', '可数，非正式用语，多含戏谑或指责意味。', 'He told a real whopper about winning the lottery.', '他编造了自己中彩票的弥天大谎。', ['tell a whopper'], [], 'noun', 'countable', '口语'],
  ], 'whoppers', [], 'brief ←?，按 §5.2 自扫根：根词 whop（重击）不在库，-er 虽在 §5.4 清单但无在库根可继，留空（判断项）；近义 monster 庞然大物（队列原样，置首义项恰好一次）');

  W('wickedness', 'noun', '/ˈwɪkɪdnəs/', 'C1', [], '邪恶；恶行', 'The quality of being morally bad, or a wicked act.', [
    ['邪恶；恶劣', 'The quality of being morally very bad or cruel.', '道德上极其败坏或残忍的性质。', '不可数，抽象名词，常见于文学与宗教语境。', 'The story exposes the wickedness of the villain.', '这个故事揭露了反派的邪恶。', ['sheer wickedness', 'the wickedness of the act'], ['evil'], 'noun', 'uncountable', '性格'],
    ['恶行；坏事', 'A wicked act or a cruel thing that somebody does.', '某人做出的邪恶或残忍的事。', '不可数，多作集合用法，正式语体。', 'He repented of the wickedness he had done.', '他为自己犯下的恶行忏悔。', ['repent of wickedness'], [], 'noun', 'uncountable', '书面'],
  ], '',['wicked'], 'brief 根提示 ←wicked C1 邪恶的（按 §5.2 自扫 author_w2.js 第 4 参复核为 C1）+ -ness（-ness 在 §5.4 清单），语义直连，C1 继承；抽象不可数故 forms 留空；近义 evil 邪恶（队列原样，置首义项恰好一次）');

  W('widower', 'noun', '/ˈwɪdəʊə/', 'B2', ['CET4'], '鳏夫', 'A man whose wife has died and who has not married again.', [
    ['鳏夫', 'A man whose wife has died and who has not married again.', '妻子去世后未再娶的男子。', '可数，widow 的阳性对应词，常与 a、the 连用。', 'The widower lived alone in the house they had shared.', '这位鳏夫独自住在他们曾经共住的屋子里。', ['a lonely widower'], ['widow'], 'noun', 'countable', '家庭'],
  ], 'widowers', ['widow'], 'brief 根提示 ←widow B2 寡妇（按 §5.2 自扫 author_w2.js 第 4 参复核为 B2，noun/verb）+ -er（表对应者，语义直连：男性遗偶），B2 继承；家族/近义 widow 寡妇（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('width', 'noun', '/wɪdθ/', 'A2', ['CET4'], '宽度；广度', 'The measurement from one side of something to the other.', [
    ['宽度；宽', 'The distance from one side of something to the other side.', '物体从一侧到另一侧的距离。', '可数不可数两用，与 length、height 对应，常与 of、in 连用。', 'The room is four metres in width.', '这个房间宽四米。', ['in width', 'the width of the road'], ['span'], 'noun', 'uncountable', '通用'],
    ['幅宽；宽幅', 'The width of a piece of cloth, or a piece of something measured across.', '布料的幅宽，或横向量取的一条。', '可数，常见于纺织、木工与游泳（游完一个池宽）语境。', 'She swam two widths of the pool.', '她在泳池里游了两个单程宽。', ['a single width'], [], 'noun', 'countable', '通用'],
  ], 'widths',['wide'], 'brief ←?，按 §5.2 自扫根：width = wide A2 宽的（author_w2.js 第 4 参）+ -th（-th 在 §5.4 清单，如 depth←deep、length←long 同类构词），语义直连，A2 继承；近义 span 跨距、宽度（队列原样，置首义项恰好一次）');

  W('wild animal', 'noun', '/waɪld ˈænɪməl/', '', [], '野生动物', 'An animal that lives in nature and is not kept by people.', [
    ['野生动物', 'An animal that lives in nature without being tamed or kept by humans.', '生活在自然中、未被人类驯养或饲养的动物。', '名词短语，可数，常见于自然、环保与教育语境。', 'A fox is a wild animal that adapts well to towns.', '狐狸是适应性很强的野生动物。', ['protect wild animals'], ['fox'], 'noun', 'countable', '自然'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 fox 狐狸（队列原样，置唯一义项恰好一次）').phrase = true;

  W('wild plant', 'noun', '/waɪld plɑːnt/', '', [], '野生植物', 'A plant that grows in nature without being planted by people.', [
    ['野生植物', 'A plant that grows on its own in nature rather than being grown in a garden or farm.', '在自然中自生自长、非人工栽培的植物。', '名词短语，可数，常见于生物、园艺与环保语境。', 'The field is full of wild plants in spring.', '春天这片野地里长满了野生植物。', ['preserve wild plants'], ['weed'], 'noun', 'countable', '自然'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 weed 野草（队列原样，置唯一义项恰好一次）').phrase = true;

  W('wilds', 'noun', '/waɪldz/', 'A2', [], '荒野；偏僻地区', 'A natural area far from towns, where few people live.', [
    ['荒野；人烟稀少的边远地区', 'A large area of natural land far from towns, where few people live.', '远离城镇、人烟稀少的大片自然地带。', '复数形式单列词条，常与 the 连用，多见于文学与旅行描写。', 'They trekked for days into the wilds of the north.', '他们向北方荒野徒步跋涉了数日。', ['in the wilds', 'the wilds of Africa'], ['wilderness'], 'noun', 'countable', '自然'],
  ], '', ['wilderness'], 'brief 根提示 ←wild A2 野生的（按 §5.2 自扫 author_w2.js 第 4 参复核为 A2，adjective/noun），「荒野」与 wild「荒野的」语义直连，A2 继承；复数形式单列词条故 forms 留空；家族/近义 wilderness 荒野（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('willing', 'adjective', '/ˈwɪlɪŋ/', 'A1', ['CET4'], '愿意的；乐意的', 'Ready to do something, or happy to help.', [
    ['愿意的；乐意的', 'Ready and happy to do something without being forced.', '毫不勉强、乐意做某事。', '定语表语两用，常用 be willing to do；名词 willingness、副词 willingly 同族。', 'She is always willing to help her neighbours.', '她总是乐意帮助邻居。', ['be willing to do', 'a willing helper'], ['glad', 'game'], 'adjective', '定语/表语', '性格'],
    ['心甘情愿的；自愿的', 'Done by somebody who has agreed freely and without reluctance.', '由自愿同意、毫无不情愿的人做出的。', '多作定语，如 willing cooperation，强调主动积极。', 'He gave his willing support to the project.', '他对这个项目给予了心甘情愿的支持。', ['willing cooperation'], ['ready'], 'adjective', '定语', '通用'],
  ], '', ['ready'], 'brief 根提示 ←will A1 意愿（按 §5.2 自扫 author_w2.js 第 4 参复核为 A1，modal verb/noun）+ -ing（-ing 在 §5.4 清单），「乐意的」与 will「意愿」语义直连，A1 继承；家族 ready 准备好的（队列原样，入第 10 参），近义 glad 乐意的、game 乐意的（置义项 1）、ready 愿意的（置义项 2）（队列原样，各恰好一次）');

  W('win over', 'verb', '/wɪn ˈəʊvə/', '', [], '争取过来；说服', 'To persuade somebody to support you or agree with you.', [
    ['争取过来；赢得支持', 'To persuade somebody who disagreed with you to support or agree with you.', '说服原本不同意的人转而支持或赞同你。', '动词短语，及物，宾语为人，常与 to 连用引出动议。', 'The mayor won over the voters with her honest speech.', '市长以坦诚的演讲争取到了选民的支持。', ['win over the audience', 'win sb over to the plan'], ['disarm'], 'verb', '及物', '社交'],
  ], '', ['disarm'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族/近义 disarm 消除敌意、争取好感（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）').phrase = true;

  W('winner', 'noun', '/ˈwɪnə/', 'A2', ['CET4'], '获胜者；成功者', 'A person or thing that wins, or one that succeeds.', [
    ['获胜者；赢家', 'A person, team or thing that wins a game, competition or prize.', '赢得比赛、竞争或奖项的人、队或事物。', '可数，win + -er 构成，与 loser 相对。', 'The winner of the race received a gold medal.', '比赛的获胜者获得了一枚金牌。', ['the winner of', 'a prize winner'], ['champion'], 'noun', 'countable', '体育'],
    ['成功者；成功的事物', 'A person or thing that is successful or certain to succeed.', '获得成功或注定会成功的人或事物。', '可数，口语中常说 be onto a winner，指看好对象。', 'The new design looks like a winner.', '这个新设计看起来会很成功。', ['be onto a winner'], ['success'], 'noun', 'countable', '通用'],
  ], 'winners', ['champion'], 'brief 根提示 ←win A2 赢（按 §5.2 自扫 author_w2.js 第 4 参复核为 A2，verb/noun）+ -er（-er 在 §5.4 清单，表施动者），语义直连，A2 继承；家族 champion 冠军（队列原样，入第 10 参），近义 champion 冠军（置义项 1）、success 成功者（置义项 2）（队列原样，各恰好一次）');

  W('wintertime', 'noun', '/ˈwɪntətaɪm/', 'A1', [], '冬季；冬天', 'The season of winter.', [
    ['冬季；冬天', 'The period of the year when it is winter, with cold weather and short days.', '一年中天气寒冷、白昼短促的冬季时段。', '不可数，复合词 winter + time，与 summertime 对应。', 'The lake freezes over in the wintertime.', '这座湖在冬天会结冰。', ['in the wintertime'], ['winter'], 'noun', 'uncountable', '自然'],
  ], '', ['winter'], 'brief ←?，按 §5.2 自扫根：复合词 wintertime = winter + time，按规范 §5.3 取首成分 winter A1 冬天（author_w2.js 第 4 参），「冬季」与 winter「冬天」语义直连，A1 继承（判断项：复合词首成分裁定）；家族/近义 winter 冬天（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('wipe out', 'verb', '/waɪp aʊt/', '', [], '彻底消灭；摧毁', 'To destroy or remove something completely.', [
    ['彻底消灭；摧毁', 'To destroy, remove or kill something completely.', '彻底摧毁、消除或消灭某物。', '动词短语，及物，宾语可为疾病、债务、城镇等，语气强烈。', 'The epidemic wiped out whole villages.', '那场瘟疫把整村整村的人都夺去了生命。', ['wipe out a species', 'wipe out debts'], ['eradicate'], 'verb', '及物', '通用'],
    ['（在比赛中）大败', 'To defeat an opponent by a very large number of points.', '以巨大分差击败对手。', '动词短语，及物，多用于体育报道，也可指冲浪时被浪打翻。', 'Our team wiped out the champions by thirty points.', '我们队以三十分之差大败上届冠军。', ['wipe out the opposition'], [], 'verb', '及物', '体育'],
  ],'wipes out~wiped out~wiping out', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 eradicate 根除（队列原样，置义项 1 恰好一次）').phrase = true;

  W('wireless', 'adjective', '/ˈwaɪələs/', 'B1', ['CET4'], '无线的', 'Using radio signals rather than wires to send or receive information.', [
    ['无线的', 'Using radio waves instead of wires to connect or communicate between devices.', '用无线电波而非电线在设备间连接或通信的。', '定语，常见于 wireless network、wireless charging 等技术语境。', 'The hotel offers free wireless internet in every room.', '这家酒店每个房间都提供免费无线网络。', ['wireless network', 'wireless charging'], ['radio'], 'adjective', '定语', '科学'],
  ], '', ['radio'], 'brief ←?，按 §5.2 自扫根：wireless = wire B1 电线（author_w2.js 第 4 参）+ -less（-less 按 §5.4c 库内先例面可继：careless←care A1、endless←end A1），「无线的」与 wire「电线」语义直连，B1 继承（判断项：-less 为清单外后缀，依先例面裁定）；家族/近义 radio 无线电（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('wisdom', 'noun', '/ˈwɪzdəm/', '', ['CET4'], '智慧；明智', 'The ability to make good decisions based on knowledge and experience.', [
    ['智慧；明智', 'The ability to use knowledge and experience to make good decisions and give good advice.', '运用知识与经验做出正确判断和给予忠告的能力。', '不可数，抽象名词，与 knowledge、intelligence 相区别，强调判断力。', 'With age comes the wisdom to know what matters.', '岁月带来分辨轻重的智慧。', ['words of wisdom', 'conventional wisdom'], ['insight'], 'noun', 'uncountable', '心理'],
    ['学问；至理名言', 'The collected knowledge, teaching or sayings of a group or tradition.', '某个群体或传统积累的知识、教诲或格言。', '不可数，常与 of 连用，如 the wisdom of the ancients。', 'The book gathers the wisdom of many cultures.', '这本书汇集了多种文化的智慧结晶。', ['the wisdom of the ancients'], ['philosophy'], 'noun', 'uncountable', '文化'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：wise B1 明智的（author_w2.js 第 4 参）虽语义直连，但 -dom 不在 §5.4 清单且无库内先例，wise→wisd- 词干变化亦无 §5.5 所列正字类先例支撑，留空（判断项，供主 agent 裁定）；近义 insight 洞察力（置义项 1）、philosophy 哲理（置义项 2）（队列原样，各恰好一次）');

  W('wishes', 'noun', '/ˈwɪʃɪz/', 'A2', [], '祝愿；祝福', 'Expressions of hope for somebody\'s happiness or success.', [
    ['祝愿；祝福', 'Expressions of hope that somebody will be happy or successful.', '希望某人幸福或成功的表达。', '复数形式单列词条，常用复数，与 best/good 连用，常见于书信结尾与节庆场合。', 'Please give my best wishes to your parents.', '请代我向你父母致以最美好的祝愿。', ['best wishes', 'good wishes'], ['regard'], 'noun', 'countable', '社交'],
    ['愿望；心愿（wish 的三单/复数用法）', 'Things that somebody wants to happen, expressed as hopes or desires.', '希望发生的事，以愿望或渴望的形式表达出来。', '复数，常与 hopes and dreams 并列，作主语时谓语视语境用复数。', 'The fund helps children whose wishes come true.', '这个基金会帮助心愿得以实现的孩子们。', ['hopes and wishes'], [], 'noun', 'countable', '情感'],
  ],'wishes',['wish'], 'brief 根提示 ←wish A2 祝愿（按 §5.2 自扫 author_w2.js 第 4 参复核为 A2，verb/noun），「祝愿」与 wish「祝愿」语义直连，A2 继承；复数形式单列词条故 forms 留空；近义 regard 问候、致意（队列原样，置义项 1 恰好一次）');

  W('wistful', 'adjective', '/ˈwɪstfl/', '', [], '渴望而惆怅的', 'Sad because you want something that you cannot have.', [
    ['渴望而惆怅的；依依不舍的', 'Feeling a gentle sadness because you are thinking about something you cannot have or that is past.', '因想着得不到或已逝去的东西而泛起淡淡哀愁的。', '定语表语两用，常与 look、smile、memory 连用，书面色彩较浓。', 'She gave a wistful smile as the train left the station.', '火车离站时，她露出了恋恋不舍的微笑。', ['a wistful look', 'wistful memories'], ['reminiscent'], 'adjective', '定语/表语', '情感'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：wit B2 机智（author_w2.js 第 4 参）词首非全段共享（wist- 与 wit），语义不直连，属切词假象（§5.7）；-ful 虽在 §5.4 清单但无在库根可继，留空（判断项）；近义 reminiscent 使人怀念的（队列原样，置唯一义项恰好一次）');

  W('witchcraft', 'noun', '/ˈwɪtʃkrɑːft/', 'B1', [], '巫术；魔法', 'The use of magic powers, especially evil ones, practised by a witch.', [
    ['巫术；魔法', 'The practice of using magic powers, especially by a witch, often to do harm.', '使用魔法的行为，尤指女巫施行的、常带害人之意的法术。', '不可数，复合词 witch + craft，常见于历史、文学与民俗语境。', 'In the story, the queen uses witchcraft to poison the apple.', '故事中王后使用巫术在苹果里下咒。', ['practice witchcraft', 'accuse sb of witchcraft'], ['magic'], 'noun', 'uncountable', '文化'],
  ], '',['witch'], 'brief ←?，按 §5.2 自扫根：复合词 witchcraft = witch + craft，按规范 §5.3 取首成分 witch B1 女巫（author_w2.js 第 4 参），「巫术」与 witch「女巫」语义直连，B1 继承（判断项：复合词首成分裁定）；近义 magic 魔法（队列原样，置唯一义项恰好一次）');

  W('withdrawal', 'noun', '/wɪðˈdrɔːəl/', 'B2', ['CET4'], '撤回；取款；退出', 'The act of taking something back or removing it.', [
    ['撤回；收回', 'The act of taking back something that was said, offered or given.', '收回曾说过的话、曾提出的提议或曾给予的东西。', '可数不可数两用，常与 of 连用，常见于正式与法律语境。', 'The senator demanded a withdrawal of the statement.', '那位参议员要求撤回该声明。', ['the withdrawal of a statement', 'demand withdrawal'], ['recall'], 'noun', 'uncountable', '政治'],
    ['（从银行账户）取款', 'The act of taking money out of a bank account.', '从银行账户中取出钱款的行为。', '可数，常与 deposit 相对，常接 from。', 'He made a large withdrawal from his savings account.', '他从储蓄账户中取了一大笔钱。', ['make a withdrawal', 'cash withdrawal'], [], 'noun', 'countable', '金融'],
    ['撤退；撤出', 'The act of moving an army or group away from a place, or leaving a place.', '军队或队伍撤离某地，或离开某处的行为。', '可数不可数两用，常与 from 连用。', 'The withdrawal of troops began in the spring.', '撤军始于春季。', ['troop withdrawal', 'withdrawal from a place'], ['retreat'], 'noun', 'uncountable', '军事'],
    ['退出；退赛；退学', 'The act of leaving an activity, competition or institution.', '退出活动、比赛或机构的行为。', '可数，常与 from 连用。', 'Her withdrawal from the race surprised everyone.', '她退出比赛令所有人意外。', ['withdrawal from school'], ['dropout'], 'noun', 'countable', '教育'],
    ['（资金、支持的）撤出', 'The act of taking money, support or investment away from a project or organisation.', '把资金、支持或投资从项目或机构中抽走。', '可数或不可数，常与 of 连用。它描述撤出这一行为，本身不等于经济衰退。', 'The industry suffered a sharp withdrawal of investment.', '该行业遭遇了投资的急剧撤出。', ['withdrawal of investment', 'withdrawal of support'], ['recession'], 'noun', 'uncountable', '商务'],
  ], 'withdrawals',['withdraw'], 'brief ←?，按 §5.2 自扫根：withdrawal = withdraw B2 撤回（author_w2.js 第 4 参）+ -al（-al 在 §5.4 清单），语义直连，B2 继承；近义 recall 收回（置义项 1）、retreat 撤退（置义项 3）、dropout 退出者（置义项 4）、recession 衰退（置义项 5）（队列原样，各恰好一次）；fam 队列为空故第 10 参 []');

  W('without doubt', 'adverb', '/wɪˈðaʊt daʊt/', '', [], '毫无疑问地', 'Certainly; with no possibility of being wrong.', [
    ['毫无疑问地；确实地', 'In a way that is certainly true or correct, leaving no room for uncertainty.', '确定无疑、不容置疑地。', '介词短语作状语，修饰动词或全句，正式语体，同义 undoubtedly。', 'She is without doubt the finest pianist of her generation.', '她无疑是她那一代最杰出的钢琴家。', ['without doubt the best'], ['undoubtedly'], 'adverb', '不及物', '书面'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 undoubtedly 毫无疑问地（队列原样，置唯一义项恰好一次）').phrase = true;

  W('wits', 'noun', '/wɪts/', 'B2', [], '头脑；机智', 'The ability to think quickly, or intelligence and practical sense.', [
    ['头脑；机智', 'The ability to think quickly and use intelligence in a difficult situation.', '在困境中快速思考并运用智力的能力。', '复数形式单列词条，常用复数，如 keep/have ones wits about one；撇号在正文禁用，故以 ones 形式示搭配。', 'Keep your wits about you when walking at night.', '夜间走路要随时保持警觉。', ['keep your wits about you', 'a battle of wits'], ['marble'], 'noun', 'countable', '心理'],
  ], '',['wit'], 'brief 根提示 ←wit B2 机智（按 §5.2 自扫 author_w2.js 第 4 参复核为 B2，noun），「头脑、机智」与 wit「机智」语义直连，B2 继承；复数形式单列词条故 forms 留空；近义 marble 头脑（俚语，marbles 指理智，队列原样，置唯一义项恰好一次）');

  W('wizard', 'noun', '/ˈwɪzəd/', '', [], '男巫；奇才', 'A man with magic powers, or a person who is very skilled at something.', [
    ['男巫；术士', 'A man who is believed to have magic powers, especially in stories.', '被认为拥有魔法的人，尤指故事中的男性施法者。', '可数，与 witch 相对，常出现于童话与奇幻文学。', 'The wizard in the tale turns the prince into a frog.', '故事里的男巫把王子变成了一只青蛙。', ['a wicked wizard'], [], 'noun', 'countable', '文学'],
    ['奇才；高手', 'A person who is extremely good at a particular activity or subject.', '在某项活动或学科上极为擅长的人。', '可数，常与 at 连用，如 a wizard at maths，口语含赞赏意味。', 'Her brother is a real wizard with computers.', '她哥哥是个电脑奇才。', ['a wizard at maths', 'a financial wizard'], [], 'noun', 'countable', '口语'],
  ], 'wizards', ['witch'], 'brief ←?，按 §5.2 自扫根：wise B1 明智的（author_w2.js 第 4 参）词首非全段共享（wiz- 与 wi-），语义不直连，属切词假象（§5.7）；-ard 不在 §5.4 清单且无库内先例，留空（判断项）；家族 witch 女巫（队列原样，入第 10 参）；syn 队列为空');

  W('woe', 'noun', '/wəʊ/', '', [], '悲痛；灾难', 'Great sadness, or a piece of trouble.', [
    ['悲痛；悲哀', 'A feeling of great sadness or distress.', '深切的悲伤或痛苦。', '不可数，文学与旧式用语，常见短语 woe is me（我好苦命）。', 'The poem tells of the lover\'s woe.', '这首诗诉说恋人的悲哀。', ['a tale of woe', 'woe is me'], ['sorrow'], 'noun', 'uncountable', '情感'],
    ['灾难；麻烦事', 'A trouble or problem that causes suffering.', '造成痛苦的麻烦或灾祸。', '可数，常用复数 woes，多见于新闻标题与经济报道。', 'The city\'s economic woes continued for years.', '这座城市的经济困境持续了多年。', ['economic woes'], [], 'noun', 'countable', '媒体'],
  ], 'woes', ['woeful'], 'woeful 是形容词，可表示悲伤的，也可表示糟糕的；近义 sorrow 悲痛。');

  W('womankind', 'noun', '/ˈwʊmənkaɪnd/', 'A1', [], '女性；妇女们', 'All women considered as a group.', [
    ['女性；妇女（总称）', 'All women considered together as a group, in contrast to mankind.', '全体女性的总称，与 mankind（人类）相对。', '不可数，集合名词，单数形式、复数含义，谓语用单数，正式语体。', 'The discovery benefited all womankind.', '这项发现造福了全体女性。', ['the progress of womankind'], ['woman'], 'noun', 'uncountable', '社会'],
  ], '',['woman'], 'brief ←?，按 §5.2 自扫根：复合词 womankind = woman + kind，按规范 §5.3 取首成分 woman A1 女人（author_w2.js 第 4 参），「女性总称」与 woman「女人」语义直连，A1 继承（判断项：复合词首成分裁定）；近义 woman 女人（队列原样，置唯一义项恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
