/* data/words/cet/author_r10.js — 常用词 R 批次 10（收尾），缺口 roller ~ run through，共 31 条
 * （23 单词 + 8 短语：rough it、rub out、rule out、run away、run fast、run into、run out、run through）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：roller、rosy、roughly、ruler、ruling；CET6：rotation）。
 * 扫根结论：roll A2、room A1、rough B1、rub B2、rude A2、ruin B2、rule A2（brief 根提示），
 * rotate B2（本批扫描；brief 的 rot C1 为同前缀误链已排除）——
 * · 透明后缀/同根继承：roller←roll A2 + -er、rooms←room A1（复数形式单列）、
 *   roughly←rough B1 + -ly、rubbing←rub B2 + -ing、rudely←rude A2 + -ly、
 *   ruins←ruin B2（复数形式单列）、ruler←rule A2 + -er、rules←rule A2（复数形式单列）、
 *   ruling←rule A2 + -ing、rotation←rotate B2 去 e + -ion（e→∅+ion，同 -ation 正字类）、
 *   rosy←rose A1 + -y（e→y，同 e→∅ 正字类，noisy←noise 先例）。
 * · 留空项：roost、rooster（roost 本批入库无级可继，cock 仅家族非根）、rostrum（拉丁借词）、
 *   rota（拉丁 rota 轮子，库内无根）、roughage（-age 不在可继清单，同 orphanage 先例，判断项）、
 *   rubble、ruddy（red 仅近义非构词根）、rudiments（单数 rudiment 不在库）、
 *   rue（古英语借词，regret 仅家族）、rugby（Rugby School 专有来源）、
 *   rugged（brief 链 rug 地毯，现代语义不直连，切词假象判断项）、rumble（无可靠语义基），
 *   及 8 个短语（整体不取成分作根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r10.js 必须在 _cet_helper.js 之后加载');

  W('roller', 'noun', '/ˈrəʊlə/', 'A2', ['CET4'], '滚筒；压路机；滚轮', 'A heavy cylinder or small wheel that turns round and round to move, flatten or curl things.', [
    ['滚筒；压路机', 'A heavy cylinder that rolls over a surface to flatten, smooth or crush it.', '在表面上滚动以压平、磨光或碾碎东西的沉重圆筒。', '可数；压路机常说 road roller。', 'The roller flattened the fresh gravel into a smooth track.', '压路机把新铺的碎石压成了平整的路面。', ['a road roller', 'a steam roller'], ['wheel'], 'noun', 'countable', '工具'],
    ['滚轮；卷发筒', 'A small cylinder that turns and is used to move something or to curl hair.', '用于移动物体或把头发卷曲的小圆筒。', '可数；卷发义常以复数 rollers 出现。', 'She put her hair in rollers before the party.', '聚会前她把头发卷上了卷发筒。', ['hair rollers'], [], 'noun', 'countable', '外貌'],
  ], 'rollers', ['wheel'], 'brief 根提示 ←roll A2 滚动 + -er（透明名词后缀），A2 继承；近义 wheel 轮子（队列原样，置滚筒义项）');

  W('rooms', 'noun', '/ruːmz/', 'A1', [], '房间；居室（复数）', 'The separate spaces in a building that have their own walls, floor and ceiling.', [
    ['房间；居室（复数）', 'The separate spaces in a building, each with its own walls, floor and ceiling.', '建筑内由墙、地板和天花板隔成的独立空间。', 'room 的复数形式单列词条；作主语时谓语用复数。', 'The rooms at the back of the house stay cool in summer.', '房子后面的房间夏天比较凉快。', ['front rooms', 'the rooms of'], ['suite'], 'noun', 'countable', '家居'],
  ], '', ['suite'], 'room A1 房间的复数形式单列词条（同 records/remains 先例），brief 根提示 ←room A1，A1 继承；近义 suite 套房（队列原样）');

  W('roost', 'noun/verb', '/ruːst/', '', [], '栖木；栖息', 'A place where birds rest, or to rest in such a place.', [
    ['栖木；栖处', 'A place where birds rest or sleep, especially a bar or branch in a henhouse.', '鸟儿休息或睡觉的地方，尤指鸡舍里的横木或树枝。', '可数，常与 at/on 连用。', 'The hens went up to the roost at dusk.', '黄昏时母鸡都上栖木了。', ['go to roost'], ['perch'], 'noun', 'countable', '自然'],
    ['栖息；进窝', 'Of birds: to rest or sleep in a particular place.', '（鸟）在某处休息或睡觉。', '多作不及物，常与 at/on 连用。', 'Owls roost in the old oak trees during the day.', '猫头鹰白天在老橡树上栖息。', ['roost at night'], [], 'verb', '不及物', '自然'],
  ], 'roosts~roosted~roosted~roosting', ['perch'], '库内无可见词根——古英语 hrēowan 源头，与 perch「栖息/栖枝」为近义关系非构词联系，留空；fam/syn perch 栖木、栖息（队列原样，置栖木义项）');

  W('rooster', 'noun', '/ˈruːstə/', '', [], '公鸡', 'An adult male chicken.', [
    ['公鸡；雄鸡', 'An adult male chicken.', '成年的雄性鸡。', '可数；美式英语常用，英式多说 cock。', 'The rooster crowed at first light.', '天刚亮公鸡就打鸣了。', ['a rooster crowing'], ['cock'], 'noun', 'countable', '农业'],
  ], 'roosters', ['cock'], '库内无可见词根——roost 本批入库且无级可继，cock 为家族近义非构词成分，留空；fam/syn cock 公鸡（队列原样，英式用词）');

  W('rostrum', 'noun', '/ˈrɒstrəm/', '', [], '讲坛；演讲台', 'A raised platform for a speaker or public official to stand on when addressing people.', [
    ['讲坛；演讲台', 'A raised platform from which a speaker, judge or public official addresses an audience.', '演讲者、法官或公职人员向听众讲话时站立的高台。', '可数，复数 rostrums 或 rostra。', 'The mayor stepped up to the rostrum to speak.', '市长走上讲台讲话。', ['speak from the rostrum'], ['tribune'], 'noun', 'countable', '政治'],
  ], 'rostrums', ['tribune'], '拉丁语 rostrum（喙、船头——古罗马讲坛饰有船首喙），库内无可见词根，留空；fam/syn tribune 讲坛、护民官（队列原样）');

  W('rosy', 'adjective', '/ˈrəʊzi/', 'A1', ['CET4'], '红润的；乐观的', 'Pink and healthy-looking, or suggesting that things will go well.', [
    ['红润的；玫瑰色的', 'Pink in colour, or (of a face) healthy and pink.', '粉红色的；（脸色）红润健康的。', '多作定语。', 'The child had rosy cheeks after the walk.', '散步回来后孩子脸色红扑扑的。', ['rosy cheeks'], ['flush', 'pink'], 'adjective', '定语', '外貌'],
    ['乐观的；前景光明的', 'Making you feel that something is likely to succeed.', '让人觉得某事很可能成功的。', '常用于 rosy picture/view/future 等表达。', 'The report painted a rosy picture of the economy.', '报告对经济描绘出一幅乐观的图景。', ['rosy picture', 'rosy future'], [], 'adjective', '定语', '心理'],
  ], '', ['flush', 'pink'], 'brief 显示 ←?；rose A1（author_r2）+ -y 透明形容词后缀，e→y 同 §5.5 e→∅ 正字类（noisy←noise、rainy←rain、cottony←cotton 先例），A1 继承（判断项）；fam pink 粉红色，近 flush 脸红、pink 粉红（队列原样，置红润义项）');

  W('rota', 'noun', '/ˈrəʊtə/', '', [], '轮值表；值勤表', 'A list showing which person is responsible for a job at different times.', [
    ['轮值表；值勤表', 'A written list that shows which person must do a particular job at different times.', '标明不同时间由谁负责某项工作的书面清单。', '可数；英式用词，美式常说 roster。', 'She was on the cleaning rota for Friday.', '她排在周五的清洁轮值表上。', ['on the rota'], ['shift'], 'noun', 'countable', '职业'],
  ], 'rotas', [], '拉丁语 rota「轮子」（轮流之意），库内无可见词根，留空；近义 shift 班次（队列原样）');

  W('rotation', 'noun', '/rəʊˈteɪʃn/', 'B2', ['CET6'], '旋转；轮换', 'The act of turning around a centre, or a regular change of people or tasks.', [
    ['旋转；转动', 'The act of turning around a fixed centre, or one complete turn.', '围绕固定中心转动的动作，或转动一圈。', '可数或不可数。', 'The rotation of the earth causes day and night.', '地球的自转产生昼夜。', ['in rotation'], ['revolution'], 'noun', 'uncountable', '科学'],
    ['轮换；轮流', 'A regular change of people or jobs so that each takes a turn.', '人员或岗位按规定依次替换。', '可数或不可数，常与 of 连用。', 'The team uses a rotation of three pitchers.', '球队采用三名投手轮换。', ['job rotation'], [], 'noun', 'uncountable', '职业'],
  ], 'rotations', ['revolution'], 'brief 根提示 ←rot C1 为同前缀误链（rot「腐烂」与 rota 轮转非同源），自行扫根 rotate B2（author_r2）——rotation←rotate 去 e + -ion（e→∅+ion，同 -ation 正字类），B2 继承；家族/近义 revolution 运转、革命（队列原样，置旋转义项）');

  W('rough it', 'verb', '/rʌf ɪt/', '', [], '艰苦凑合；简陋过活', 'To live somewhere without the usual comforts you expect.', [
    ['艰苦凑合；简陋过活', 'To live or stay somewhere without the usual food, beds or comfort that you expect.', '在没有通常预期的食宿条件或舒适设施的地方凑合生活。', '不及物短语；常见于野营或临时住宿语境。', 'We roughed it in a barn for two nights.', '我们在谷仓里凑合住了两晚。', ['rough it for a night'], ['slum'], 'verb', '不及物', '口语'],
  ], '', ['slum'], '短语整体不取成分作根，分级留空；近义 slum（slum it 住简陋处穷凑合，队列原样，短语条目）').phrase = true;

  W('roughage', 'noun', '/ˈrʌfɪdʒ/', '', [], '（食物中的）粗纤维', 'The part of food that helps food pass through the body, such as grain or vegetables.', [
    ['粗纤维；纤维质', 'The part of food, such as wholegrain or vegetables, that helps food pass through the body.', '食物中帮助消化排泄的部分，如全谷物或蔬菜。', '不可数，常用于饮食与健康语境。', 'A diet with plenty of roughage keeps you healthy.', '富含粗纤维的饮食让你保持健康。', ['fiber-rich roughage'], ['fiber'], 'noun', 'uncountable', '饮食'],
  ], '', ['fiber'], 'brief 显示 ←?；rough B1 在库且 rough+age 构词与语义均直连，但 -age 不在可继后缀清单（同 orphanage 先例），无把握留空（判断项）；fam/syn fiber 纤维（队列原样）');

  W('roughly', 'adverb', '/ˈrʌfli/', 'B1', ['CET4'], '大致上；粗暴地', 'Approximately but not exactly, or in a rough and violent way.', [
    ['大致上；大约', 'Approximately, but not exactly.', '大概、左右，不精确。', '修饰动词或数量。', 'Roughly two hundred guests came to the wedding.', '大约两百位宾客参加了婚礼。', ['roughly equal', 'roughly speaking'], ['or', 'somewhere'], 'adverb', '不及物', '通用'],
    ['粗暴地；猛烈地', 'In a way that is rough, harsh or violent.', '以粗鲁、猛烈的方式。', '修饰动词。', 'He pushed the door roughly open.', '他猛地把门推开。', ['roughly handled'], [], 'adverb', '不及物', '社交'],
  ], '',['rough'], 'brief 根提示 ←rough B1 粗糙 + -ly（透明副词后缀），B1 继承；近义 or（or so 左右）、somewhere（somewhere near 大约），队列原样，置大约义项');

  W('rub out', 'verb', '/rʌb ˈaʊt/', '', [], '擦掉；涂去', 'To remove writing or a mark from paper by rubbing it.', [
    ['擦掉；涂去', 'To remove words or a mark from paper by rubbing with a rubber or your finger.', '用橡皮或手指摩擦以去掉纸上的字或痕迹。', '可及物；宾语可置于 out 前或后。', 'She rubbed the wrong answer out and tried again.', '她把错误答案擦掉重做了一遍。', ['rub it out', 'rub out the line'], ['erase'], 'verb', '及物', '工具'],
  ], '', ['erase'], '短语整体不取成分作根，分级留空；家族/近义 erase 擦除（队列原样，短语条目）').phrase = true;

  W('rubbing', 'noun', '/ˈrʌbɪŋ/', 'B2', [], '摩擦（声）；拓片', 'A sound or mark made by rubbing, or a copy made by rubbing over paper.', [
    ['摩擦（声）；擦痕', 'The sound made, or the mark left, when one surface moves against another.', '两个表面相互移动时发出的声音或留下的痕迹。', '可数或不可数。', 'You can hear the rubbing of the chain on the frame.', '你能听到链条蹭车架的摩擦声。', ['chain rubbing'], ['friction'], 'noun', 'uncountable', '通用'],
    ['拓片；摹拓', 'A copy of a design or inscription made by placing paper over it and rubbing with chalk or a pencil.', '把纸覆在图案或铭文上，用粉笔或铅笔拓印下来的复制品。', '可数，常与 of 连用。', 'The museum sells rubbings of the carved door.', '博物馆出售这扇雕花门的拓片。', ['take a rubbing'], [], 'noun', 'countable', '艺术'],
  ], 'rubbings',['rub'], 'brief 根提示 ←rub B2 擦 + -ing（透明名词后缀），B2 继承；近义 friction 摩擦（队列原样，置摩擦义项）');

  W('rubble', 'noun', '/ˈrʌbl/', '', [], '碎石；瓦砾', 'Broken pieces of stone, brick or concrete left when a building falls down.', [
    ['碎石；瓦砾', 'The broken pieces of stone, brick or concrete left when a building falls down.', '建筑物倒塌后剩下的砖石或混凝土碎块。', '不可数。', 'Workers cleared the rubble from the street.', '工人们清除了街上的瓦砾。', ['pile of rubble'], ['debris'], 'noun', 'uncountable', '通用'],
  ], '', ['debris'], '库内无可靠可继根——与 rub 形近但语义链不可靠（碎石非「擦」的派生），无把握留空（判断项）；fam/syn debris 瓦砾碎片（队列原样）');

  W('ruddy', 'adjective', '/ˈrʌdi/', '', [], '红润的；（英口）讨厌的', 'Healthy red in colour, or used to emphasize that something is unpleasant.', [
    ['红润的；红扑扑的', '(of a face) healthy and red in colour.', '（脸色）健康红润的。', '多作定语。', 'She has a ruddy glow after the run.', '跑步后她脸色红润有光。', ['a ruddy complexion'], ['red'], 'adjective', '定语', '外貌'],
    ['（英口）讨厌的；十足的', 'Used to emphasize that something or somebody is unpleasant or complete.', '用于强调某事讨厌或某人十足如此。', '英式口语中的委婉粗语，正式场合少用。', 'That ruddy car alarm kept me awake all night.', '那讨厌的汽车警报让我整晚没睡。', ['the ruddy lot'], [], 'adjective', '定语', '口语'],
  ], '', ['red'], '库内无可见词根（red 为近义非构词成分），留空；近义 red 红色的（队列原样，置红润义项）');

  W('rudely', 'adverb', '/ˈruːdli/', 'A2', [], '粗鲁地；突兀地', 'In an impolite way, or suddenly in a way that surprises somebody.', [
    ['粗鲁地；无礼地', 'In a way that is not polite or respectful.', '以不礼貌、不尊重的方式。', '修饰动词。', 'She rudely interrupted the speaker.', '她粗鲁地打断了发言者。', ['rudely interrupted'], [], 'adverb', '不及物', '社交'],
    ['突兀地；出乎意料地', 'Suddenly and in a way that surprises somebody.', '突然地，令人大吃一惊。', '修饰动词，常见于被动短语。', 'We were rudely awakened by the alarm.', '我们被警报声突然吵醒。', ['rudely awakened'], ['abruptly'], 'adverb', '不及物', '通用'],
  ], '', ['abruptly'], 'brief 根提示 ←rude A2 无礼的 + -ly（透明副词后缀），A2 继承；近义 abruptly 突兀地（队列原样，置突兀义项）');

  W('rudiments', 'noun', '/ˈrʌdɪmənts/', '', [], '基础知识；雏形', 'The basic facts of a subject, or something not yet fully developed.', [
    ['基础知识；入门', 'The basic facts or principles of a subject that you must learn before going further.', '学习某学科前必须先掌握的基本事实或原理。', '常用复数，常与 of 连用。', 'He taught himself the rudiments of electronics.', '他自学了电子学的基础知识。', ['the rudiments of'], ['element'], 'noun', 'countable', '教育'],
    ['雏形；未发展完全之物', 'Something that exists but is not yet fully developed.', '已经存在但尚未充分发展的事物。', '常用复数，常与 of 连用。', 'The plan is still in its rudiments.', '这个计划还只是个雏形。', ['in the rudiments'], [], 'noun', 'countable', '通用'],
  ],'rudiments', ['element'], '单数 rudiment 不在库，无根可继，留空；近义 element 要素、基本原理（队列原样，置基础知识义项）');

  W('rue', 'verb/noun', '/ruː/', '', [], '后悔；懊悔', 'To feel sorry about something in the past, or that feeling of regret.', [
    ['后悔；懊悔', 'To feel sorry and wish you had not done something.', '感到遗憾，希望当初没有那样做。', '正式或文学用语，常与 rue the day 连用。', 'He will rue the day he sold that painting.', '他会后悔卖掉那幅画的。', ['rue the day'], ['regret'], 'verb', '及物', '情感'],
    ['悔恨（名词）', 'Sorrow and regret about the past.', '对过去的悲伤与悔恨。', '不可数，文学用语。', 'She was full of rue after the quarrel.', '争吵之后她满心懊悔。', ['full of rue'], [], 'noun', 'uncountable', '情感'],
    ['蓼（植物）', 'A plant with small yellow flowers that was used in the past as medicine.', '开小黄花的植物，旧时用作药材。', '不可数。', 'A clump of rue grew by the gate.', '门边长着一丛蓼。', [], [], 'noun', 'uncountable', '自然'],
  ], 'rues~rued~rued~ruing', ['regret'], '古英语 hrēow（悲伤）源头，库内无可见词根——regret 为家族近义非构词成分，留空；fam/syn regret 后悔（队列原样，置后悔义项）');

  W('rugby', 'noun', '/ˈrʌɡbi/', '', [], '橄榄球（运动）', 'A game played by two teams who try to score by carrying or kicking an oval ball.', [
    ['橄榄球（运动）', 'A game played by two teams who try to score points by carrying, passing or kicking an oval ball over the try line.', '两队通过持球、传球或踢椭圆球越过得分线来得分的运动。', '不可数；全称 rugby football。', 'He played rugby for the school team.', '他为校队打橄榄球。', ['play rugby', 'rugby pitch'], ['football'], 'noun', 'uncountable', '体育'],
  ], '', ['football'], '源自英国 Rugby School 校名的专有来源词，无库内构词根，留空；近义 football 足球（队列原样，同类球类运动）');

  W('rugged', 'adjective', '/ˈrʌɡɪd/', '', [], '崎岖的；粗犷强健的', 'Having a rough uneven surface, or strong in spite of hard conditions.', [
    ['崎岖不平的；多岩石的', '(of ground) Rough, rocky and uneven.', '（地面）粗糙、多石且不平坦。', '多作定语。', 'The path grows rugged above the tree line.', '小径在林线以上变得崎岖难行。', ['rugged terrain'], [], 'adjective', '定语', '地理'],
    ['粗犷强健的；严酷的', 'Strong and healthy in spite of a hard life, or (of conditions) harsh and difficult.', '历经艰苦仍强健的；（环境）严酷艰难的。', '多作定语。', 'He has a rugged face tanned by years outdoors.', '他有一张常年户外劳作晒得粗犷的脸。', ['rugged coast'], ['harsh'], 'adjective', '定语', '性格'],
  ], '', [], 'brief 根提示 ←rug B1 地毯——rugged 现代语义「崎岖」与 rug「地毯」语义不直连，切词假象判定留空（判断项）；近义 harsh 严酷的（队列原样，置严酷义项）');

  W('ruins', 'noun', '/ˈruːɪnz/', 'B2', [], '废墟；遗迹（复数）', 'The broken remains of a building or town from the past.', [
    ['废墟；遗迹（复数）', 'The broken parts of an old building or town that still stand after damage.', '旧建筑或城镇受损后仍然矗立的残余部分。', '用作复数，ruin 的复数形式单列词条。', 'Tourists clambered over the ruins of the fort.', '游客们在城堡废墟上攀爬。', ['ancient ruins'], ['remain'], 'noun', 'countable', '历史'],
  ], '', ['remain'], 'ruin B2 毁灭的复数形式单列词条（队列官方派生），brief 根提示 ←ruin B2，B2 继承；近义 remain 剩余、留存（队列原样）');

  W('rule out', 'verb', '/ruːl ˈaʊt/', '', [], '排除；排除在外', 'To decide that something is not possible, or refuse to consider it.', [
    ['排除（可能性）；不考虑', 'To decide that something is definitely not possible, or decide not to consider it.', '判定某事绝无可能，或决定不予考虑。', '可及物；宾语可置于 out 前或后。', 'The doctors ruled out a serious illness.', '医生排除了重病的可能。', ['rule it out', 'rule out the possibility'], ['eliminate', 'exclude'], 'verb', '及物', '健康'],
  ], '', ['exclude'], '短语整体不取成分作根，分级留空；家族 exclude 排除，近义 eliminate 消除、exclude 排除（队列原样，短语条目）').phrase = true;

  W('ruler', 'noun', '/ˈruːlə/', 'A2', ['CET4'], '统治者；直尺', 'Somebody who rules a country, or a straight tool used for measuring or drawing lines.', [
    ['统治者；君主', 'A person or group that rules a country or people.', '统治国家或人民的个人或群体。', '可数。', 'The island was ruled by a succession of foreign rulers.', '该岛先后由一系列外国统治者治理。', ['a cruel ruler'], ['emperor', 'king', 'lord', 'prince', 'queen', 'sovereign'], 'noun', 'countable', '政治'],
    ['直尺；尺子', 'A straight piece of plastic, wood or metal used to measure or to draw straight lines.', '用于测量或画直线的直条形塑料、木或金属片。', '可数；英式亦称 rule。', 'Draw a line along the edge of the ruler.', '沿着尺子边画一条线。', ['a plastic ruler'], [], 'noun', 'countable', '工具'],
  ], 'rulers', ['emperor', 'king'], 'brief 根提示 ←rule A2 统治 + -er（透明名词后缀，统治者与直尺均与 rule 相关），A2 继承；家族 emperor 皇帝、king 国王，近义 emperor、king、lord 君主、prince 王子、queen 女王、sovereign 君主（队列原样，全置统治者义项）');

  W('rules', 'noun', '/ruːlz/', 'A2', [], '规则；语法规则（复数）', 'Statements that people must obey, or the way words are used in a language.', [
    ['规则；规章（复数）', 'A set of statements that people must obey in a game, activity or organization.', '人们在游戏中、活动里或组织内必须遵守的规定。', 'rule 的复数形式单列词条。', 'The rules of the club forbid dogs.', '俱乐部的规章禁止带狗入内。', ['break the rules'], ['code'], 'noun', 'countable', '法律'],
    ['语法规则', 'The statements that show how words and sentences may be used in a language.', '说明语言中词句如何使用的规则。', '常用复数。', 'She learned the rules of tense usage.', '她学了时态用法规则。', ['grammar rules'], ['grammar'], 'noun', 'countable', '语法'],
  ],'rules', ['code', 'grammar'], 'rule A2 规则的复数形式单列词条（队列官方派生），brief 根提示 ←rule A2，A2 继承；家族 code 法典、grammar 语法，近义 code 法典（规章义项）、grammar 语法规则（语法义项）（队列原样）');

  W('ruling', 'noun/adjective', '/ˈruːlɪŋ/', 'A2', ['CET4'], '裁决；统治的', 'An official decision by somebody in authority, or having the power to rule.', [
    ['裁决；裁定', 'An official decision on a matter, especially one made by a judge or court.', '对某事的正式决定，尤指法官或法院作出的。', '可数，常与 on 连用。', 'The high court issued its ruling on Monday.', '高等法院周一作出了裁决。', ['a ruling on'], ['decree', 'opinion', 'verdict'], 'noun', 'countable', '法律'],
    ['统治的；主导的', 'Having the power to rule, or most common and accepted.', '有统治权力的；主流的、主导的。', '多作定语，常与 party/class 连用。', 'The ruling party lost its majority.', '执政党失去了多数席位。', ['ruling class'], [], 'adjective', '定语', '政治'],
  ], 'rulings', ['decree'], 'brief 根提示 ←rule A2 统治、裁决 + -ing（透明名词/形容词后缀），A2 继承；家族 decree 法令，近义 decree 法令、opinion 意见、verdict 裁决（队列原样，全置裁决义项）');

  W('rumble', 'noun/verb', '/ˈrʌmbl/', '', [], '隆隆声；发出隆隆声', 'A low loud continuous sound, or to make such a sound.', [
    ['隆隆声；轰隆声', 'A low, loud sound that continues for some time.', '持续一段时间的低沉响亮的声音。', '可数或不可数。', 'The rumble of the trains shook the windows.', '火车的隆隆声震得窗户直响。', ['a distant rumble'], ['thunder'], 'noun', 'countable', '通用'],
    ['发出隆隆声；轰鸣', 'To make a low, loud, continuous sound.', '发出低沉、连续的响声。', '多作不及物。', 'Thunder rumbled far away.', '远处雷声隆隆。', ['rumble on'], [], 'verb', '不及物', '自然'],
  ], 'rumbles~rumbled~rumbled~rumbling', ['thunder'], '库内无可靠可继根——形近 rum、tumble 均非可靠语义基，无把握留空（判断项）；fam/syn thunder 雷声（队列原样，置隆隆声义项）');

  W('run away', 'verb', '/rʌn əˈweɪ/', '', [], '跑开；逃跑', 'To leave a place quickly by running, especially when afraid.', [
    ['跑开；逃跑', 'To leave somewhere quickly by running, especially when you are in danger or afraid.', '（尤指因危险或害怕而）快速跑着离开某地。', '不及物短语，常与 from 连用。', 'The thief ran away when the alarm sounded.', '警报响时小偷逃跑了。', ['run away from'], ['flee'], 'verb', '不及物', '通用'],
  ], '', ['flee'], '短语整体不取成分作根，分级留空；近义 flee 逃跑（队列原样，短语条目）').phrase = true;

  W('run fast', 'verb', '/rʌn ˈfɑːst/', '', [], '跑得快', 'To move along on foot at speed.', [
    ['跑得快；飞快地跑', 'To move along on foot at speed.', '以很快的速度行进。', '不及物短语，fast 作方式副词。', 'If you run fast you will catch the bus.', '跑快点你就能赶上公交车。', ['run as fast as'], ['gain'], 'verb', '不及物', '体育'],
  ], '', ['gain'], '短语整体不取成分作根，分级留空；近义 gain（gain on 追近、赶超，队列原样，语义较松，短语条目）').phrase = true;

  W('run into', 'verb', '/rʌn ˈɪntuː/', '', [], '偶遇；遭遇', 'To meet somebody by chance, or to begin experiencing a problem.', [
    ['偶遇；碰见', 'To meet somebody or see something by chance.', '偶然遇见某人或看到某物。', '可及物短语，宾语置于其后。', 'I ran into an old friend at the market.', '我在市场上偶然碰见了一位老朋友。', ['run into sb'], ['encounter'], 'verb', '及物', '社交'],
    ['遭遇；碰到（问题）', 'To begin to experience a difficult situation or problem.', '开始遇到困难局面或问题。', '可及物短语。', 'The project ran into delay from the start.', '这个项目从一开始就遇到拖延。', ['run into debt'], [], 'verb', '及物', '商务'],
  ],'runs into~ran into~run into~running into', ['encounter'], '短语整体不取成分作根，分级留空；近义 encounter 偶然遇到（队列原样，置偶遇义项，短语条目）').phrase = true;

  W('run out', 'verb', '/rʌn ˈaʊt/', '', [], '用完；到期', 'To use up all of something, or to reach the end of its period.', [
    ['用完；耗尽', 'To use all of something so that none is left.', '把某物全部用掉，一点不剩。', '不及物短语，常与 of 连用。', 'We ran out of milk this morning.', '今天早上我们的牛奶喝完了。', ['run out of money'], [], 'verb', '不及物', '家庭'],
    ['到期；期满', 'Of a ticket or agreement: to reach the end of its period of validity.', '（票或协议等）达到有效期终点。', '不及物短语。', 'My passport runs out next month.', '我的护照下个月到期。', ['run out on'], ['expire'], 'verb', '不及物', '法律'],
  ],'runs out~ran out~run out~running out', ['expire'], '短语整体不取成分作根，分级留空；家族 expire 到期、期满，近义 expire（队列原样，置到期义项，短语条目）').phrase = true;

  W('run through', 'verb', '/rʌn ˈθruː/', '', [], '迅速过一遍；贯穿', 'To quickly practice something, or to be present throughout something.', [
    ['迅速排练；快速过一遍', 'To practice or explain something quickly from beginning to end.', '从头到尾快速练习或讲解某事。', '可及物短语，宾语可置于中间。', 'The actors ran through their lines once more.', '演员们又快速过了一遍台词。', ['run it through'], ['rehearse'], 'verb', '及物', '娱乐'],
    ['贯穿；遍布', 'To be present in every part of something.', '存在于某物的各个部分。', '不及物短语，常用进行时。', 'A main road runs through the village.', '一条干道贯穿村庄。', ['run through the fields'], [], 'verb', '不及物', '地理'],
  ],'runs through~ran through~run through~running through', ['rehearse'], '短语整体不取成分作根，分级留空；近义 rehearse 排练（队列原样，置排练义项，短语条目）').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
