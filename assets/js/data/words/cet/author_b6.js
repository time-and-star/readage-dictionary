/* data/words/cet/author_b6.js · 手敲词条 B（六）：bobber ~ brimstone（含 7 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_b6.js 必须在 _cet_helper.js 之后加载');

  W('bobber', 'noun', '/ˈbɒbə(r)/', '', [], '浮标；浮子', 'A floating device used in fishing or to keep something on the water.', [
    ['浮标；浮子', 'A floating device attached to a fishing line, or one that keeps something on the water surface.', '系在钓线上的漂子，或使某物浮在水面的装置。', '可数，钓鱼与泳池语境。', 'The bobber dipped and the fish bit.', '浮标一顿，鱼咬钩了。', ['fishing bobber'], ['float'], 'noun', 'countable', '通用'],
  ], 'bobbers', [], 'bob 浮沉（本词库未单列，不继承分级）+ -er；近义 float 漂浮物（统称）。分级留空');

  W('bobbin', 'noun', '/ˈbɒbɪn/', '', [], '线轴；卷筒', 'A small cylinder on which thread is wound, or a spool inside a machine.', [
    ['线轴；卷筒', 'A small cylinder on which thread or yarn is wound, or a spool used in a machine.', '绕线用的小圆筒，或机器里的线轴。', '可数，缝纫与机械语境。', 'She wound the silk onto a bobbin.', '她把丝线绕到线轴上。', ['a bobbin of thread'], ['reel', 'shuttle'], 'noun', 'countable', '工业'],
  ], 'bobbins', [], '近义 reel 卷轴（较大）、shuttle 梭子（织机专用）；bobbin 缝纫机线轴。分级留空');

  W('bodily', 'adjective', '/ˈbɒdɪli/', 'A1', ['CET4'], '身体的；肉体的', 'Connected with the body rather than the mind.', [
    ['身体的；肉体的', 'Connected with the body rather than with the mind or spirit.', '与身体有关的，而非心灵或精神的。', '常见 bodily harm/injury（身体伤害）。', 'The court awarded him compensation for bodily harm.', '法院判给他身体伤害赔偿。', ['bodily harm'], ['internal', 'physical', 'physiological'], 'adjective', '定语', '健康'],
  ], '', ['physical', 'physiological'], '←body A1 身体 + -ly，A1 继承；家族 physical 身体的、physiological 生理的，近义 internal 内部的');

  W('body part', 'noun', '/ˌbɒdi ˈpɑːt/', '', [], '身体部位', 'Any of the parts that the body is made of, such as the head or the hand.', [
    ['身体部位', 'Any of the parts that the body is made of, such as the head, hand, or leg.', '构成身体的任何部分，如头、手、腿等。', '可数，教学与医学常用词。', 'Babies learn body parts by pointing.', '婴儿通过指认来认识身体部位。', ['name the body parts'], ['organ'], 'noun', 'countable', '健康'],
  ], '', ['organ'], 'body 身体 + part 部分；近义 organ 器官（体内功能单位，不同于外部部位）。短语分级留空').phrase = true;

  W('bodyboard', 'noun', '/ˈbodɪbɔːd/', 'A1', [], '身体冲浪板；趴板', 'A small board used to ride waves while lying flat on it.', [
    ['身体冲浪板；趴板', 'A small board used to ride waves while lying flat on the stomach.', '趴在上面冲浪的小型冲浪板。', '可数，水上运动用语。', 'He rode the wave on his bodyboard.', '他趴在趴板上乘浪前进。', ['ride a bodyboard'], ['surf'], 'noun', 'countable', '体育'],
  ], 'bodyboards', ['body', 'board'], 'body 身体 + board 板，取首成分级 A1；近义 surf 冲浪（运动/动词）。');

  W('bog', 'noun/verb', '/bɒɡ/', '', [], '沼泽；（使）陷入', 'An area of soft wet ground, or to sink into it or a difficult situation.', [
    ['沼泽；湿地', 'An area of soft wet ground, often made of peat.', '地面松软的区域，常由泥炭构成。', '可数，主英式。', 'The hikers got stuck in a bog.', '徒步者陷进了沼泽。', ['a peat bog'], ['marsh', 'swamp'], 'noun', 'countable', '通用'],
    ['（使）陷入；受困', 'To sink into wet ground, or to become stuck in a difficult situation.', '陷进湿地，或陷入难以摆脱的困境。', '不及物；bog down 使停滞，常用 be bogged down。', 'The talks were bogged down in detail.', '谈判被细节拖住了。', ['bog down'], [], 'verb', '不及物', '通用'],
  ], 'bogs~bogged~bogged~bogging', ['marsh'], '家族 marsh 沼泽（较干爽的湿地）、近义 swamp 泥沼（热带）；分级留空');

  W('boil down', 'verb', '/ˌbɔɪl ˈdaʊn/', '', [], '归结为；煮浓', 'To be summarized as the most important part, or to reduce a liquid by boiling.', [
    ['归结为', 'To be able to be summarized as one basic or important thing.', '可以被概括为一个根本的要点。', 'boil down to 归结为（最常见用法）。', 'It boils down to money in the end.', '说到底还是钱的问题。', ['boil down to'], ['reduce'], 'verb', '及物', '通用'],
    ['煮浓；熬干', 'To make a liquid thicker by boiling it for a long time.', '通过长时间熬煮使液体变浓。', '及物，烹饪用法。', 'Boil the sauce down until it thickens.', '把酱汁熬到变稠。', ['boil it down'], ['reduce'], 'verb', '及物', '饮食'],
  ],'boils down~boiled down~boiling down', [], 'boil 煮 + down 下；boil down to 归结为、boil down 熬浓；近义 reduce 减少/浓缩。分级留空').phrase = true;

  W('boiler', 'noun', '/ˈbɔɪlə(r)/', 'A2', ['CET4'], '锅炉；烧水器', 'A device that heats water, especially to provide heating or hot water.', [
    ['锅炉；烧水器', 'A device that heats water, especially to provide central heating or hot water.', '加热水的装置，尤指提供中央供暖或热水。', '可数，常见 household boiler（家用锅炉）。', 'The boiler broke down in winter.', '冬天锅炉坏了。', ['a boiler room'], ['furnace', 'kettle'], 'noun', 'countable', '家居'],
  ], 'boilers', ['furnace'], '←boil A2 沸 + -er（表物），A2 继承；家族 furnace 火炉（供暖）、近义 kettle 烧水壶（小容量）');

  W('boiling', 'adjective/noun', '/ˈbɔɪlɪŋ/', 'A2', [], '沸腾的；沸点', 'Of a liquid at the temperature at which it boils, or that temperature itself.', [
    ['沸腾的；滚烫的', 'Of a liquid that is at the temperature at which it boils.', '液体处在沸腾温度的。', '常见 boiling water；boiling hot 极热的。', 'Add the pasta to boiling water.', '把意面下到沸水里。', ['boiling point'], ['hot'], 'adjective', '定语', '饮食'],
    ['沸点；沸腾', 'The temperature or the state at which a liquid boils.', '液体沸腾时的温度或状态。', '可数，boiling point 亦喻「忍耐极限」。', 'Water reaches boiling at 100 degrees.', '水在 100 度达到沸腾。', ['reach boiling point'], [], 'noun', 'countable', '科学'],
  ], '', ['hot'], '←boil A2 + -ing；近义 hot 热的（通用，不含沸腾义）');

  W('boldness', 'noun', '/ˈbəʊldnəs/', 'B1', [], '勇敢；大胆', 'The quality of being willing to take risks and speak openly.', [
    ['勇敢；大胆', 'The quality of being willing to take risks and to say things openly.', '敢于冒险、直抒己见的品质。', '不可数，bold B1 的名词形。', 'She admired his boldness in speaking up.', '她赞赏他敢于发言的勇气。', ['sheer boldness'], ['nerve'], 'noun', 'uncountable', '通用'],
  ], '', ['nerve'], '←bold B1 勇敢的 + -ness，B1 继承；近义 nerve 勇气/胆量（口语，亦含厚脸皮义）');

  W('bole', 'noun', '/bəʊl/', '', [], '树干', 'The main trunk of a tree.', [
    ['树干', 'The main trunk of a tree.', '树的主干部分。', '可数，植物学与林业用语。', 'The bole was wrapped in protective sheeting.', '树干裹上了保护膜。', ['a thick bole'], ['trunk'], 'noun', 'countable', '科学'],
  ], 'boles', [], '近义 trunk 树干（更通用）；bole 为植物学专门词。分级留空');

  W('bombardment', 'noun', '/bɒmˈbɑːdmənt/', 'A2', [], '轰炸；炮击', 'The act of dropping bombs or firing shells at a place continuously.', [
    ['轰炸；炮击', 'The act of dropping bombs or firing shells at a place over a period of time.', '在一段时间内向某地连续投弹或开炮。', '可数或不可数，常见 aerial bombardment（空袭）。', 'The bombardment lasted three days.', '轰炸持续了三天。', ['aerial bombardment'], ['siege'], 'noun', 'uncountable/countable', '军事'],
  ], 'bombardments', ['bomb'], '←bomb A2 炸弹 + -ard/-ment（连续动作名词化），A2 继承；近义 siege 围困（包围断援、不轰击）');

  W('bombast', 'noun', '/ˈbɒmbæst/', '', [], '夸夸其谈；高调空话', 'Big-sounding language with little meaning.', [
    ['夸夸其谈；高调空话', 'Big-sounding language with little meaning in it.', '听起来响亮、实则没有实质内容的大话。', '不可数，书面语，贬义。', 'The speech was pure bombast.', '那篇演讲纯属夸夸其谈。', ['flowery bombast'], ['rhetoric'], 'noun', 'uncountable', '书面'],
  ], '', ['rhetoric'], '近义 rhetoric 修辞/辞令（中性）；bombast 专指浮夸空话。分级留空');

  W('bombshell', 'noun', '/ˈbɒmʃel/', '', [], '爆炸性消息；惊人之事', 'A sudden piece of surprising news or an unexpected event.', [
    ['爆炸性消息；惊人之事', 'A sudden piece of surprising news or an unexpected event.', '突然传来的惊人消息或意外事件。', '可数，drop a bombshell 投下重磅消息。', 'Her resignation dropped like a bombshell.', '她的辞职不亚于一枚重磅炸弹。', ['drop a bombshell'], ['surprise'], 'noun', 'countable', '通用'],
  ], 'bombshells', [], 'bomb 炸弹 + shell 炮弹，习语化复合（比喻用法）；近义 surprise 惊奇（中性）。分级留空');

  W('bondsman', 'noun', '/ˈbɒndzmən/', '', [], '保证人；奴隶', 'A person who promises to pay another person\'s debt, or a servant or slave.', [
    ['保证人；担保人', 'A person who promises to pay another person\'s debt if they cannot.', '承诺在他人无力偿债时代为偿还的人。', '可数，法律旧称，复数 bondsmen。', 'The bondsman signed the surety agreement.', '保证人签署了担保协议。', ['a surety bondsman'], [], 'noun', 'countable', '法律'],
    ['奴隶；仆人（旧义）', 'A servant or slave (historical).', '仆人或奴隶（历史用法）。', '较古旧，常见于文献。', 'The novel tells of a bondsman seeking freedom.', '小说讲述一个奴隶寻求自由的故事。', [], ['slave'], 'noun', 'countable', '历史'],
  ], 'bondsmen', [], 'bond 契约 + man 人；第一义为担保人，第二义近 slave 奴隶。分级留空（习语化复合）');

  W('bones', 'noun', '/bəʊnz/', 'A2', [], '骨头；骨骼（复数）', 'The hard parts of a body, or the skeleton of an animal.', [
    ['骨头；骨骼（复数）', 'The hard parts inside a body, or the skeleton of an animal.', '身体内部的坚硬部分，或动物的骨架。', '复数形式；pick at the bones 啃骨头/吹毛求疵。', 'The dog buried the bones in the garden.', '狗把骨头埋在了花园里。', ['pick at the bones'], ['skeleton'], 'noun', 'uncountable/countable', '健康'],
  ], '', ['skeleton'], '←bone A2 + -s（复数专义），A2 继承；家族 skeleton 骨架（整体结构）');

  W('bonnet', 'noun', '/ˈbɒnɪt/', '', [], '软帽；引擎盖', 'A soft hat tied under the chin, or the cover over a car engine.', [
    ['软帽；童帽', 'A soft hat that is tied under the chin, or a hat for a baby or young child.', '下巴处系带的软帽，或婴幼儿戴的帽子。', '可数，主英式。', 'She wore a straw bonnet in the garden.', '她在花园里戴了顶草帽。', ['a straw bonnet'], ['hat'], 'noun', 'countable', '外貌'],
    ['（汽车）引擎盖', 'The hinged cover over the front of a car (British).', '汽车前部可掀起的盖子（英式说法）。', '可数；英式 bonnet = 美式 hood。', 'He opened the bonnet to check the oil.', '他打开引擎盖查看机油。', ['under the bonnet'], [], 'noun', 'countable', '交通'],
  ], 'bonnets', ['hat'], '家族 hat 帽子（统称）；英式 bonnet 引擎盖 = 美式 hood。分级留空');

  W('booking', 'noun', '/ˈbʊkɪŋ/', 'A1', [], '预订；订座', 'An arrangement to have a room, seat, or table reserved for you.', [
    ['预订；订座', 'An arrangement to have a room, seat, table, or ticket reserved for you.', '安排房间、座位、桌子或票的预留。', '可数或不可数，常见 make a booking。', 'I made a booking for two.', '我订了两个位子。', ['make a booking'], ['order'], 'noun', 'uncountable/countable', '商务'],
  ], 'bookings', ['book'], '←book A1 预订 + -ing，A1 继承；近义 order 订单（已下单的商品）');

  W('bookish', 'adjective', '/ˈbʊkɪʃ/', 'A1', [], '书卷气的；迂腐的', 'Fond of studying and books, or too formal and old-fashioned.', [
    ['书卷气的；迂腐的', 'Very fond of reading and study, or too formal and old-fashioned in manner.', '酷爱读书治学的，或举止过于刻板老派的。', '略带贬义，指不善交际的读书人。', 'He had a bookish manner.', '他举止书卷气。', ['a bookish style'], ['literary'], 'adjective', '定语', '书面'],
  ], '', ['literary'], '←book A1 书 + -ish（似……的），A1 继承；近义 literary 文学的（涉及作品而非性格）');

  W('bookkeeper', 'noun', '/ˈbʊkkiːpə(r)/', 'A1', [], '记账员；簿记员', 'A person whose job is to record the financial accounts of a business.', [
    ['记账员；簿记员', 'A person whose job is to record the financial accounts of a business.', '职业是记录企业财务账目的人。', '可数，商务用语。', 'The bookkeeper balanced the ledger each month.', '记账员每月都把账目做平。', ['a part-time bookkeeper'], ['accountant'], 'noun', 'countable', '商务'],
  ], 'bookkeepers', ['book', 'keep'], 'book 账簿 + keeper 管理人，取首成分级 A1；近义 accountant 会计师（范围更广、可出审计报告）');

  W('bookkeeping', 'noun', '/ˈbʊkkiːpɪŋ/', 'A1', [], '簿记；记账', 'The work of keeping financial accounts.', [
    ['簿记；记账', 'The work or activity of keeping financial accounts.', '记录财务账目的工作或活动。', '不可数。', 'She took a course in bookkeeping.', '她上了一门簿记课。', ['double-entry bookkeeping'], ['accounting'], 'noun', 'uncountable', '商务'],
  ], '', ['accounting'], 'book + keeping，取首成分级 A1；近义 accounting 会计学（含报表分析，范围更广）');

  W('booklet', 'noun', '/ˈbʊklɪt/', 'A1', [], '小册子', 'A very thin book with only a few pages, usually giving information.', [
    ['小册子', 'A very thin book with only a few pages, usually giving information.', '页数很少的薄册子，通常提供信息。', '可数；常见 information booklet。', 'Pick up a free booklet at the desk.', '在前台取一本免费小册子。', ['a travel booklet'], ['brochure', 'pamphlet'], 'noun', 'countable', '商务'],
  ], 'booklets', ['brochure', 'pamphlet'], '←book A1 书 + -let（表小），A1 继承；家族 brochure 说明式小册子、pamphlet 政论小册子');

  W('boor', 'noun', '/bʊə(r)/', '', [], '粗野无礼的人', 'A rude person who does not care about other peoples feelings.', [
    ['粗野无礼的人', 'A rude person who does not care about other peoples feelings.', '不懂体谅他人感受的粗鲁之人。', '可数，书面贬义。', 'He played the boor at dinner.', '他在宴席上举止粗野。', ['act the boor'], ['jerk', 'peasant'], 'noun', 'countable', '书面'],
  ], 'boors', [], '近义 jerk 讨厌鬼（美式口语）、peasant 农民/粗人（俚语用法）；分级留空');

  W('booty', 'noun', '/ˈbuːti/', '', [], '战利品；赃物', 'Goods stolen or captured in war or a robbery.', [
    ['战利品；赃物', 'Goods that are stolen or captured in war or during a robbery.', '战争或抢劫中掠夺的财物。', '不可数，常含贬义。', 'The raiders divided the booty among themselves.', '劫匪们瓜分了战利品。', ['divide the booty'], ['haul', 'loot', 'spoil'], 'noun', 'uncountable', '历史'],
  ], '', ['haul', 'loot', 'spoil'], '近义 loot 赃物（强调非法抢掠）、haul 一网打获、spoil(s) 战利品（较文）；分级留空');

  W('borderland', 'noun', '/ˈbɔːdlænd/', 'B2', [], '边境地带；边缘', 'A region near a border, or an area between two different conditions.', [
    ['边境地带', 'A region of a country that lies next to its border.', '一国紧邻边界的地区。', '可数，literal（字面义）。', 'They live in a remote borderland.', '他们住在偏远的边境地带。', ['a northern borderland'], ['neighbor'], 'noun', 'countable', '政治'],
    ['（喻）边缘；过渡地带', 'An area that lies between two different things.', '介于两种不同事物之间的区域。', '比喻义，如 the borderland between fact and fiction。', 'The story occupies the borderland of science fiction.', '这个故事处于科幻小说的边缘。', [], [], 'noun', 'countable', '书面'],
  ], 'borderlands', ['border', 'land'], '←border B2 边界（author_b2.js 第 4 参复核，主 agent 全库审计修正：原备注误作 A2）+ land 地带，取首成分级 B2；近义 neighbor 邻国/邻区（相邻者）');

  W('bored', 'adjective', '/bɔːd/', 'B2', [], '厌倦的；无聊的', 'Feeling tired and impatient because nothing is interesting.', [
    ['厌倦的；无聊的', 'Feeling tired and impatient because something is not interesting.', '因某事无趣而感到疲倦、不耐烦。', 'be bored with/by sth；-ed 形容人的感受。', 'I was bored by the lecture.', '讲座让我觉得无聊。', ['bored stiff'], ['weary'], 'adjective', '定语/表语', '通用'],
  ], '', ['weary'], '←bore B2 使厌烦 + -ed，B2 继承；近义 weary 疲倦的（体力或心理）');

  W('boredom', 'noun', '/ˈbɔːdəm/', 'B2', [], '厌倦；无聊', 'The state of being bored because nothing interesting is happening.', [
    ['厌倦；无聊', 'The state of being bored because nothing interesting is happening.', '因无事有趣而感到厌倦的状态。', '不可数。', 'He drank to relieve his boredom.', '他喝酒来消磨无聊。', ['sheer boredom'], ['monotony'], 'noun', 'uncountable', '心理'],
  ], '', ['monotony'], '←bore B2 + -dom（状态后缀），B2 继承；家族 monotony 单调重复（外因）');

  W('borer', 'noun', '/ˈbɔːrə/', 'B2', [], '钻孔虫；蛀虫', 'An insect or larva that bores into wood or plants.', [
    ['钻孔虫；蛀虫', 'An insect or larva that bores into wood or plants.', '钻进木材或植物的昆虫或幼虫。', '可数，农业与昆虫学语境。', 'The borer killed three fruit trees.', '蛀虫弄死了三棵果树。', ['a bark borer'], ['drill'], 'noun', 'countable', '动物'],
  ], 'borers', ['bore'], '←bore B2 钻 + -er（表物/虫），B2 继承；近义 drill 钻头（工具，非生物）');

  W('boring', 'adjective', '/ˈbɔːrɪŋ/', 'B2', ['CET4'], '无聊的；令人厌倦的', 'Not interesting or exciting.', [
    ['无聊的；令人厌倦的', 'Not interesting or exciting, so that you want to stop doing it.', '不有趣、不刺激，让人想中止的。', '修饰事物用 boring，修饰人用 bored。', 'The film was boring from start to finish.', '这部电影从头到尾都无聊。', ['boring stuff'], ['dry', 'dull', 'tedious'], 'adjective', '定语/表语', '通用'],
  ], '', ['dull', 'tedious'], '←bore B2 + -ing，B2 继承；家族 dull 枯燥的、tedious 冗长乏味的，近义 dry 干巴巴的');

  W('botanical', 'adjective', '/bəˈtɒnɪkl/', '', ['CET6'], '植物学的；植物的', 'Connected with botany or with plants.', [
    ['植物学的；植物的', 'Connected with botany or with plants.', '与植物学或植物有关的。', '常见 botanical garden（植物园）、botanical garden 研究花园。', 'They visited the botanical garden.', '他们参观了植物园。', ['botanical research'], [], 'adjective', '定语', '科学'],
  ], '', ['botany'], '←botany 植物学 + -ical；botany 在本词库无可靠分级故本词留空；家族 botany');

  W('botch', 'verb/noun', '/bɒtʃ/', '', [], '弄糟；搞砸的活', 'To do something badly, or a job that has been done badly.', [
    ['弄糟；搞砸', 'To do something badly and carelessly because of a lack of skill or planning.', '因缺乏技巧或计划不周而把事情做坏。', '及物，常见 botch it up。', 'The mechanic botched the repair.', '技工把维修搞砸了。', ['botch it up'], ['screw'], 'verb', '及物', '口语'],
    ['搞砸的活；败笔', 'A job that has been done badly.', '做得一团糟的工作。', '可数，主英式。', 'The roof was a botched job.', '屋顶的活干得很糟。', [], [], 'noun', 'countable', '口语'],
  ], 'botches~botched~botched~botching', [], '近义 screw 搞砸（screw up 美式口语）；分级留空');

  W('bottomless', 'adjective', '/ˈbɒtəmləs/', 'A1', [], '无底的；深不可测的', 'Having no bottom, or seeming to have no limit.', [
    ['无底的；深不可测的', 'Having no bottom, or seeming to have no limit.', '没有底的，或似乎没有尽头的。', '常见 bottomless pit（无底洞）。', 'The gorge looked like a bottomless pit.', '那道峡谷看起来像个无底洞。', ['a bottomless pit'], ['deep'], 'adjective', '定语', '通用'],
  ], '', ['deep'], '←bottom A1 底 + -less（无……的），A1 继承；近义 deep 深的（有底但很深）');

  W('bough', 'noun', '/baʊ/', '', [], '大树枝；粗枝', 'A large branch of a tree.', [
    ['大树枝；粗枝', 'A large branch of a tree.', '树的大枝条。', '可数，文学与景物描写中常见。', 'An owl sat on a high bough.', '一只猫头鹰高高地蹲在树枝上。', ['a heavy bough'], ['branch', 'limb'], 'noun', 'countable', '通用'],
  ], 'boughs', ['branch'], '家族 branch 树枝（统称）、近义 limb 大枝（次于主干）；分级留空');

  W('bouillon', 'noun', '/ˈbuːjɒn/', '', [], '清汤；肉汤', 'A clear soup made by boiling meat or vegetables.', [
    ['清汤；肉汤', 'A clear soup made by boiling meat, fish, or vegetables.', '用肉、鱼或蔬菜煮出的清汤。', '不可数，法语借词，烹饪用语。', 'She served a light bouillon before the main course.', '主菜前她上了份清淡的清汤。', ['a cup of bouillon'], ['stock'], 'noun', 'uncountable', '饮食'],
  ], '', ['stock'], '法语借词；近义 stock 高汤（未加料的基础汤）、soup 汤（统称）。分级留空');

  W('boulder', 'noun', '/ˈbəʊldə(r)/', '', [], '巨石；圆石', 'A very large rock, especially one that has been worn smooth.', [
    ['巨石；圆石', 'A very large rock, especially one that has been worn smooth.', '非常大的石头，尤指已被磨圆磨光的。', '可数，地质与户外语境。', 'They sheltered behind a boulder.', '他们在一块巨石后躲避。', ['a mossy boulder'], ['rock'], 'noun', 'countable', '科学'],
  ], 'boulders', [], '近义 rock 石头（统称、可数或不可数）；boulder 特指大而圆的巨石。分级留空');

  W('bounded', 'adjective', '/ˈbaʊndɪd/', 'B2', [], '有界限的；有限的', 'Having a defined limit or boundary.', [
    ['有界限的；有限的', 'Having a clearly defined limit or boundary.', '有明确界限或边界的。', '学术语境常见 bounded rationality（有限理性）。', 'The debate was bounded by strict rules.', '辩论受严格规则约束。', ['bounded rationality'], ['finite'], 'adjective', '定语', '书面'],
  ], '', ['finite'], '←bound B2 界限 + -ed，B2 继承；家族 finite 有限的（数学、数量）');

  W('boundless', 'adjective', '/ˈbaʊndləs/', 'B2', [], '无限的；无边无际的', 'Very great and seeming to have no limit.', [
    ['无限的；无边无际的', 'Very great and seeming to have no limit.', '极大且看似没有限度的。', '常修饰 enthusiasm、energy。', 'She showed boundless energy throughout the tour.', '整个行程中她展现出无穷的精力。', ['boundless energy'], ['immense', 'infinite'], 'adjective', '定语', '书面'],
  ], '', ['immense', 'infinite'], '←bound B2 界限 + -less，B2 继承；近义 immense 巨大的、infinite 无限的（数学、宇宙）');

  W('bourgeois', 'adjective/noun', '/ˈbʊəʒwɑː/', '', [], '资产阶级的；中产阶级的', 'Connected with the middle class, or too concerned with respectability.', [
    ['资产阶级的；中产阶级的', 'Connected with the middle class, or too concerned with respectability and money.', '与中产阶级有关的，或过于在意体面与金钱的。', '法语借词，作名词时 the bourgeois 指该阶层。', 'They lived a comfortable bourgeois life.', '他们过着舒适的中产生活。', ['bourgeois values'], ['middle-class'], 'adjective', '定语', '政治'],
  ], '', ['middle-class'], '法语借词；家族 middle-class 中产阶级的；常含「市侩」贬义。分级留空');

  W('boutique', 'noun', '/buˈtiːk/', '', [], '精品店；时装店', 'A small shop selling fashionable clothes or goods.', [
    ['精品店；时装店', 'A small shop selling fashionable clothes or goods.', '出售时尚服饰或精品的小店。', '可数，法语借词。', 'The boutique stocks only limited editions.', '这家精品店只卖限量款。', ['a designer boutique'], ['shop'], 'noun', 'countable', '购物'],
  ], 'boutiques', [], '近义 shop 商店（统称）；boutique 强调小型、时尚、精品。分级留空');

  W('bowel movement', 'noun', '/ˈbaʊəl muːvmənt/', '', [], '排便；大便', 'The act of passing waste matter from the body, or the waste itself.', [
    ['排便；大便', 'The act of passing waste matter from the body, or the waste itself.', '排出体内废物的行为，或排出的废物。', '可数或不可数，医疗与委婉说法。', 'The doctor asked about his bowel movements.', '医生询问了他的排便情况。', ['regular bowel movements'], ['stool'], 'noun', 'countable', '健康'],
  ], '', ['stool'], 'bowel 肠 + movement 活动；近义 stool 粪便（医学标本用语）。短语分级留空').phrase = true;

  W('boxer', 'noun', '/ˈbɒksə(r)/', 'A1', [], '拳击手；拳狮犬', 'A person who fights in boxing, or a large breed of dog.', [
    ['拳击手', 'A person who takes part in the sport of boxing.', '从事拳击运动的人。', '可数，体育语境。', 'The boxer won by a knockout.', '拳击手以击倒获胜。', ['a professional boxer'], [], 'noun', 'countable', '体育'],
    ['拳狮犬（拳师犬）', 'A large dog with a short smooth coat and a square face.', '短毛方脸的大型犬。', '可数，犬种名。', 'The boxer loves to play fetch.', '这只拳狮爱玩寻回游戏。', [], [], 'noun', 'countable', '动物'],
  ], 'boxers', ['boxing'], '←box A1 拳击 + -er（表人），A1 继承；家族 boxing 拳击运动；第二义为犬种名');

  W('boxful', 'noun', '/ˈbɒksfʊl/', 'A1', [], '一满盒（的量）', 'The amount that a box will hold.', [
    ['一满盒（的量）', 'The amount that a box will hold.', '一个盒子所能容纳的量。', '可数，-ful 表容器容量。', 'She handed me a boxful of buttons.', '她递给我满满一盒纽扣。', ['a boxful of keys'], ['crate'], 'noun', 'countable', '通用'],
  ], 'boxfuls', ['box'], '←box A1 盒 + -ful（容量后缀），A1 继承；近义 crate 板条箱（更大、运输用）');

  W('brandish', 'verb', '/ˈbrændɪʃ/', '', [], '挥舞；炫耀', 'To wave something in the air in a threatening or excited way.', [
    ['挥舞；挥动', 'To wave something in the air in a threatening or excited way.', '（威胁或激动地）在空中挥动某物。', '及物，常指武器或拳头。', 'He brandished a stick at the dog.', '他朝狗挥舞棍子。', ['brandish about'], ['flourish', 'wield'], 'verb', '及物', '书面'],
  ], 'brandishes~brandished~brandished~brandishing', ['wield'], '家族 wield 挥动/使用（工具、武器），近义 flourish 炫耀式挥舞（较轻快）');

  W('bravery', 'noun', '/ˈbreɪvəri/', 'B1', ['CET4'], '勇敢；勇气', 'Brave behaviour or the quality of being brave.', [
    ['勇敢；勇气', 'Brave behaviour, or the quality of being brave.', '勇敢的行为，或勇敢的品质。', '不可数。', 'He received a medal for his bravery.', '他因勇敢获得勋章。', ['an act of bravery'], ['courage'], 'noun', 'uncountable', '通用'],
  ], '', ['courage'], '←brave B1 勇敢的 + -ry（抽象名词），B1 继承；家族 courage 勇气（内在品质）');

  W('break down', 'verb', '/ˌbreɪk ˈdaʊn/', '', [], '出故障；崩溃；分解', 'To stop working, to fail or collapse, or to divide into smaller parts.', [
    ['（机器）出故障', 'Of a machine or vehicle, to stop working.', '机器或车辆停止运转。', '不及物；美式口语亦作 breakdown。', 'The car broke down on the highway.', '车在高速上抛锚了。', ['break down'], ['fail'], 'verb', '不及物', '科技'],
    ['（谈判、健康）失败；崩溃', 'Of negotiations, health, or a system, to fail or collapse.', '谈判、健康或系统失败、崩溃。', '不及物；break down in tears 突然哭起来。', 'Talks broke down after two days.', '两天后谈判破裂。', ['break down in'], ['fail'], 'verb', '不及物', '通用'],
    ['分解；细分', 'To divide something into smaller parts in order to examine it.', '把某物分成小部分来分析。', '及物，常见 break sth down into。', 'Break the task down into steps.', '把任务分解成步骤。', ['break it down into'], [], 'verb', '及物', '教育'],
  ],'breaks down~broke down~broken down~breaking down', [], '短语动词：故障/崩溃/分解三义；近义 fail 失效、失败。分级留空').phrase = true;

  W('break out', 'verb', '/ˌbreɪk ˈaʊt/', '', [], '爆发；逃脱', 'Of something bad, to start suddenly, or to escape by force.', [
    ['爆发；突然发生', 'Of something bad, to start suddenly and spread.', '（坏事）突然开始并蔓延。', '不及物；常见于战争、火灾、皮疹。', 'Fighting broke out in the street.', '街上爆发了斗殴。', ['break out in'], ['erupt', 'flare'], 'verb', '不及物', '通用'],
    ['越狱；强行逃脱', 'To escape from a place by force.', '用强力从某个地方逃出。', '不及物；break out of prison 越狱。', 'Two prisoners broke out last night.', '昨晚有两名囚犯越狱。', ['break out of'], ['erupt'], 'verb', '不及物', '法律'],
  ],'breaks out~broke out~broken out~breaking out', ['erupt', 'flare'], 'break + out；家族 erupt 爆发（火山、情绪）、outbreak 突发（事件），近义 flare 突然加剧（flare up）。分级留空').phrase = true;

  W('break the law', 'verb', '/ˌbreɪk ðə lɔː/', '', [], '违法；触犯法律', 'To do something that is against the law.', [
    ['违法；触犯法律', 'To do something that is against the law.', '做法律所禁止的事。', '及物短语；同义 violate the law（更正式）。', 'Anyone who breaks the law will be punished.', '违法者必将受到惩罚。', ['no one is above the law'], ['offend'], 'verb', '及物', '法律'],
  ], '', ['offend'], 'break 违反 + law 法律；近义 offend 违法/冒犯（offend against the law 书面）。短语分级留空').phrase = true;

  W('break up', 'verb', '/ˌbreɪk ˈʌp/', '', [], '分手；解散；打碎', 'To end a relationship, to scatter, or to break into pieces.', [
    ['分手；结束关系', 'Of a couple, to end their relationship.', '情侣结束恋爱关系。', '不及物；break up with sb 与某人分手。', 'They broke up after six months.', '六个月后他们分手了。', ['break up with'], ['apart', 'disperse'], 'verb', '不及物', '通用'],
    ['解散；驱散', 'To end a gathering, or to cause a crowd to scatter.', '结束集会，或使人群散开。', '及物，常见 break it up（住手，分开）。', 'The police broke up the crowd.', '警察驱散了人群。', ['break it up'], ['scatter'], 'verb', '及物', '通用'],
    ['打碎；碎裂', 'To break into pieces, or to make something break into pieces.', '碎成几块，或使某物碎裂。', '不及物或及物。', 'The cup broke up on the floor.', '杯子在地上摔碎了。', [], ['disintegrate'], 'verb', '不及物', '通用'],
  ],'breaks up~broke up~broken up~breaking up', [], '短语动词：分手/解散/碎裂三义；近义 apart 分开、disperse 驱散、scatter 散开、disintegrate 碎裂。分级留空').phrase = true;

  W('breakable', 'adjective', '/ˈbreɪkəbl/', 'A1', [], '易碎的', 'Easily broken.', [
    ['易碎的；易破的', 'Easily broken.', '容易打碎的。', '常见 breakable items（易碎品）。', 'Handle with care: the plates are breakable.', '小心轻放：盘子易碎。', ['breakable items'], ['fragile'], 'adjective', '定语', '通用'],
  ], '', ['fragile'], '←break A1 打破 + -able（易……的），A1 继承；近义 fragile 易碎的（较正式，兼指脆弱）');

  W('breaker', 'noun', '/ˈbreɪkə(r)/', 'A1', [], '碎浪；防波堤；断路器', 'A wave that breaks into foam, a wall to stop waves, or a safety switch.', [
    ['碎浪；防波堤', 'A wave that breaks into white foam near the shore, or a wall built to break waves.', '近岸卷成白沫的浪，或用来挡浪的堤。', '可数，常见 a line of breakers。', 'A line of breakers marked the reef.', '一排碎浪标出了暗礁的位置。', ['a line of breakers'], ['wave'], 'noun', 'countable', '通用'],
    ['断路器；保险开关', 'A safety device that cuts off an electrical current when there is a fault.', '电路故障时切断电流的安全装置。', '可数，用电用语。', 'The breaker tripped during the storm.', '风暴中断路器跳闸了。', ['circuit breaker'], [], 'noun', 'countable', '科技'],
  ], 'breakers', ['break'], '←break A1 破 + -er（表物），A1 继承；近义 wave 波浪（统称）；circuit breaker 断路器');

  W('breakers', 'noun', '/ˈbreɪkəz/', 'A1', [], '碎浪；拍岸浪（复数）', 'Waves that break into white foam near the shore.', [
    ['碎浪；拍岸浪（复数）', 'Waves that break into white foam near the shore.', '近岸卷成白沫的海浪。', '常作复数 the breakers。', 'The breakers crashed against the rocks.', '拍岸浪撞击着礁石。', ['line of breakers'], ['surf'], 'noun', 'uncountable', '通用'],
  ], '', ['surf'], '←break A1 的复数专义「碎浪」，A1 继承；近义 surf 激浪（连续拍岸的浪群）');

  W('breastfeed', 'verb', '/ˈbrestfiːd/', 'B1', [], '母乳喂养；哺乳', 'To feed a baby with milk from the mother\'s breast.', [
    ['母乳喂养；哺乳', 'To feed a baby with milk from the mother\'s breast.', '用母亲的乳汁喂养婴儿。', '及物或不及物，过去式 breastfed。', 'Doctors recommend breastfeeding for six months.', '医生建议母乳喂养六个月。', ['breastfeed the baby'], ['nurse'], 'verb', '及物/不及物', '健康'],
  ], 'breastfeeds~breastfed~breastfed~breastfeeding', ['breast', 'feed'], 'breast 乳房 + feed 喂，取首成分级 B1；近义 nurse 哺乳（较旧式、英式）');

  W('bridle', 'noun/verb', '/ˈbraɪdl/', '', [], '马笼头；抑制', 'A set of straps to control a horse, or to hold back a feeling.', [
    ['马笼头；缰具', 'A set of straps and a bit that is put on a horses head to control it.', '套在马头上用于控制马的皮带与衔铁组合。', '可数，马具用语。', 'She checked the bridle before mounting.', '上马前她检查了笼头。', ['bridle path'], ['rein'], 'noun', 'countable', '通用'],
    ['给……套笼头；抑制', 'To put a bridle on a horse, or to hold back a feeling or reaction.', '给马套笼头，或克制某种情绪与反应。', '常用 bridle at sth（对某事恼怒）。', 'He bridled at the suggestion.', '他对这个建议感到不快。', ['bridle at'], [], 'verb', '及物/不及物', '书面'],
  ], 'bridles~bridled~bridled~bridling', [], '近义 rein 缰绳（单根、亦喻控制）；bridle 指整套马笼头。分级留空');

  W('briefly', 'adverb', '/ˈbriːfli/', 'B2', [], '简短地；短暂地', 'In only a few words, or for only a short time.', [
    ['简短地；短暂地', 'In only a few words, or for only a short time.', '用很少的话，或只用很短的时间。', '可修饰说话与持续时间。', 'She explained the plan briefly.', '她简短地说明了计划。', ['briefly mention'], ['shortly'], 'adverb', 'null', '通用'],
  ], '', ['shortly'], '←brief B2 短的 + -ly，B2 继承；家族 shortly 稍后/简短地（英式更常指「不久」）');

  W('briefs', 'noun', '/briːfs/', 'B2', [], '内裤；案情摘要（复数）', 'Mens underpants, or written summaries of legal cases.', [
    ['内裤；短裤（复数）', 'Mens underpants.', '男士内裤。', '复数形式，常与 a pair of 连用。', 'He packed three pairs of briefs.', '他带了三条内裤。', ['a pair of briefs'], ['pants'], 'noun', 'uncountable', '外貌'],
    ['案情摘要；简报（复数）', 'Written summaries of a legal case or a report.', '案件或报告的书面摘要。', '法律与商务语境。', 'The lawyer read the briefs before court.', '律师开庭前读了案情摘要。', ['legal briefs'], [], 'noun', 'uncountable', '法律'],
  ],'briefs', ['pants'], '←brief B2 摘要 + -s；近义 pants 内裤（美式；英式 trousers 裤子）；第二义为法律复数');

  W('brighten', 'verb', '/ˈbraɪtn/', 'A1', ['CET4'], '（使）明亮；（使）愉快', 'To become or to make brighter, or happier.', [
    ['（使）变亮；（使）发光', 'To become brighter, or to make something shine more light.', '变亮，或使某物发出更多光。', '及物或不及物，常与 up 连用。', 'The sky brightened after the rain.', '雨后天空亮了起来。', ['brighten up'], ['illuminate'], 'verb', '及物/不及物', '通用'],
    ['（使）愉快起来', 'To become happier, or to make someone feel happier.', '变得高兴，或使某人开心起来。', '及物或不及物，口语常用 brighten up。', 'Your visit will brighten up the day.', '你的到访会让这一天亮起来。', [], [], 'verb', '及物', '口语'],
  ], 'brightens~brightened~brightened~brightening', ['bright'], '←bright A1 明亮 + -en，A1 继承；近义 illuminate 照亮（正式、物理）；brighten up 打起精神');

  W('brightness', 'noun', '/ˈbraɪtnəs/', 'A1', [], '明亮；亮度', 'How bright something is.', [
    ['明亮；亮度', 'How bright something is.', '某物明亮的程度。', '不可数，可调节显示屏 brightness（亮度）。', 'The brightness of the screen hurts my eyes.', '屏幕的亮度刺眼。', ['adjust the brightness'], ['light'], 'noun', 'uncountable', '科技'],
  ], '', ['light'], '←bright A1 + -ness，A1 继承；近义 light 光（光源本身，不可数）');

  W('brilliance', 'noun', '/ˈbrɪliəns/', 'A2', ['CET4'], '才华；辉煌', 'Exceptional intelligence or skill, or a very bright state.', [
    ['才华；才气', 'Exceptional intelligence or skill.', '非凡的才智或技巧。', '不可数。', 'The film shows the brilliance of her writing.', '这部电影展现了她写作的才华。', ['sheer brilliance'], ['genius'], 'noun', 'uncountable', '艺术'],
    ['灿烂；闪耀', 'A state of being very bright or shining strongly.', '非常明亮或闪耀的状态。', '不可数，如 the brilliance of the sun。', 'The brilliance of the midday sun dazzled us.', '正午阳光的刺眼让我们睁不开眼。', [], ['sparkle'], 'noun', 'uncountable', '通用'],
  ], '', ['brilliant'], '←brilliant A2 杰出的 + -ance，A2 继承；近义 genius 天才、sparkle 闪烁光');

  W('brim', 'noun/verb', '/brɪm/', '', [], '边；边缘；满到边缘', 'The edge of a cup or hat, or to be full almost to the edge.', [
    ['（容器）边；帽檐', 'The edge of a cup, hat, or other container.', '杯子、帽子或其他容器的边缘。', '可数，常见 to the brim（满到边）。', 'He filled the cup to the brim.', '他把杯子倒得满满当当。', ['to the brim'], ['rim'], 'noun', 'countable', '通用'],
    ['满到边缘；洋溢', 'To be full or almost full, or to be full of a feeling.', '装得满满的，或充满某种情感。', '不及物：brim with sth。', 'Her eyes brimmed with tears.', '她的眼里噙满泪水。', ['brim with'], ['overflow'], 'verb', '不及物', '书面'],
  ], 'brims~brimmed~brimmed~brimming', ['rim'], '家族 rim 边缘（圆形容器外缘）、近义 overflow 溢出（动词）；to the brim 满到边。分级留空');

  W('brimstone', 'noun', '/ˈbrɪmstəʊn/', '', [], '硫磺（旧称）；地狱之火', 'Sulphur, or hellfire as described in religious texts.', [
    ['硫磺（旧称）；地狱之火', 'Sulphur, or hellfire as described in religious texts.', '硫磺的古称，或宗教文献中的地狱之火。', '不可数，常见 fire and brimstone（地狱布道）。', 'The preacher spoke of fire and brimstone.', '传教士宣讲地狱之火。', ['fire and brimstone'], ['sulfur'], 'noun', 'uncountable', '宗教'],
  ], '', ['sulfur'], 'brim（沸腾）+ stone（石），古语复合词；家族 sulfur 硫磺（现代拼写）。分级留空');

})(typeof window !== 'undefined' ? window : globalThis);
