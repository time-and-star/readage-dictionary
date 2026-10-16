/* data/words/cet/author_b4.js · 手敲词条 B（四）：babysitter ~ begrudge（含 21 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true（registry 的 pending 合并不含本批）。
 * 短语无可靠 CEFR/考级来源，统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_b4.js 必须在 _cet_helper.js 之后加载');

  W('babysitter', 'noun', '/ˌbeɪbɪˈsɪtə(r)/', 'A1', [], '临时保姆；照看婴儿的人', 'A person who is paid to look after young children while their parents are away.', [
    ['临时保姆', 'A person who is paid to look after young children in their parents\' home.', '受雇在父母外出时照看小孩的人。', '可数；复合词 baby + sitter（←sit A1 坐）。', 'We booked a babysitter for Friday night.', '我们周五晚上约了临时保姆。', ['find a babysitter'], [], 'noun', 'countable', '家庭'],
  ], 'babysitters', ['baby'], 'baby 婴儿 + sitter 看守人；家族 baby A1 继承');

  W('back up', 'verb', '/ˌbæk ˈʌp/', '', [], '支持；后退；备份', 'To support someone, move backward, or make a copy of data.', [
    ['支持；给……撑腰', 'To say or do something to show that you support someone.', '用言语或行动表明你支持某人。', '可分动词，英式常写 back sb up（分写）。', 'My colleagues backed me up in the meeting.', '同事们在会上支持了我。', ['back me up'], ['reinforce'], 'verb', '及物', '通用'],
    ['后退；倒车', 'To move backward, or to make a vehicle or machine move backward.', '向后移动，或使车辆、机器倒退。', '可分动词，宾语是车、文件等。', 'He backed the car out of the garage.', '他把车倒出车库。', ['back up slowly'], ['reverse'], 'verb', '及物/不及物', '通用'],
    ['备份（数据）', 'To make a copy of computer files so that they can be used later.', '为计算机文件制作副本以便日后使用。', 'IT 语境，名词形 backup 见 backup 词条。', 'Remember to back up your work.', '记得给你的工作文件做备份。', ['back up the files'], ['save'], 'verb', '及物', '科技'],
  ],'backs up~backed up~backing up', [], '短语动词：支持/后退/备份三义；与名词 backup 备份、后援区分').phrase = true;

  W('backbone', 'noun', '/ˈbækbəʊn/', '', [], '脊柱；支柱', 'The row of bones down the back; the most important part of something.', [
    ['脊柱；脊椎', 'The column of bones running down the back that supports the body.', '沿背部排列、支撑身体的骨骼柱。', '可数，与 spine 同义。', 'X-rays showed a fracture in his backbone.', 'X 光显示他的脊柱有骨折。', ['a broken backbone'], ['spine'], 'noun', 'countable', '医学'],
    ['支柱；中坚', 'The most important source of support or strength of an organization.', '组织最重要、最可靠的依靠。', '常用 the backbone of sth。', 'Small businesses are the backbone of the economy.', '小企业是经济的支柱。', ['the backbone of'], [], 'noun', 'uncountable', '商务'],
  ],'backbones', ['spine'], 'back + bone（骨）复合；本义与 spine 完全同义，比喻义为「支柱」；分级留空');

  W('backer', 'noun', '/ˈbækə(r)/', 'A1', [], '支持者；赞助人', 'A person or company that supports someone with money or help.', [
    ['支持者；赞助人', 'A person who gives money or support to a person or project.', '为某人或项目提供资金或支持的人。', '可数；常见 financial backer（投资人）。', 'The film found a backer within a week.', '这部片子一周内就找到了投资人。', ['financial backer'], ['sponsor'], 'noun', 'countable', '商务'],
  ], 'backers', ['sponsor'], 'back 支持（A1）+ -er（表人），A1 继承；近义 sponsor 赞助商（企业为主）');

  W('backing', 'noun', '/ˈbækɪŋ/', 'A1', [], '支持；背衬；伴奏', 'Support given to someone; material that covers the back of something.', [
    ['支持；声援', 'Help and encouragement given to a person or plan.', '给人或计划的帮助与鼓励。', '不可数，常见 financial backing。', 'The plan won backing from local businesses.', '该计划获得了当地企业的支持。', ['financial backing'], ['solidarity'], 'noun', 'uncountable', '商务'],
    ['背衬；衬垫', 'Material that forms the back or the under layer of something.', '构成某物背面或底层的材料。', '技术语境，如 carpet backing（地毯背衬）。', 'The carpet has a rubber backing.', '这块地毯有橡胶背衬。', ['carpet backing'], [], 'noun', 'uncountable', '工业'],
  ], '', ['accompaniment', 'solidarity'], 'back（背/支持）+ -ing，A1 继承；accompaniment 对应「伴奏」义，solidarity 对应「声援」义');

  W('backlog', 'noun', '/ˈbæklɒɡ/', '', [], '积压；积压的工作', 'A pile of work or requests that have not yet been dealt with.', [
    ['积压（的工作）', 'A quantity of tasks or orders that have accumulated and are not yet completed.', '积累起来尚未处理的任务或订单量。', '可数，商务用语；常见 clear a backlog。', 'The team worked overtime to reduce the backlog.', '团队加班以清理积压工作。', ['clear the backlog'], ['queue'], 'noun', 'countable', '商务'],
  ], 'backlogs', [], 'back 积存 + log 记录的习语化复合词，分级留空；近义 queue 指排队队列');

  W('backside', 'noun', '/ˌbækˈsaɪd/', '', [], '臀部；背面', 'The buttocks, or the back part of something.', [
    ['臀部（委婉）', 'The part of the body that you sit on, referred to politely as the backside.', '坐下时身体接触的部位，较礼貌的说法。', '可数，口语委婉语；儿童语境多用 bottom。', 'He fell and hurt his backside.', '他摔了一跤，摔疼了屁股。', ['land on your backside'], ['rear'], 'noun', 'countable', '口语'],
  ], 'backsides', [], 'back 后面 + side 面；习语化复合词分级留空；近义 rear 较正式（rear end 臀部）');

  W('backtalk', 'noun', '/ˈbæktɔːk/', '', [], '顶嘴；顶撞', 'Rude remarks made in reply to someone in authority.', [
    ['顶嘴；顶撞', 'Rude or impudent remarks made in answer to an authority figure.', '对权威者作出的粗鲁无礼的回嘴。', '不可数，主美式；英式多说 cheek。', 'The teacher would not tolerate any backtalk.', '老师不容许任何顶嘴。', ['no backtalk'], ['lip'], 'noun', 'uncountable', '口语'],
  ], '', [], 'back 回 + talk 话；习语化复合词分级留空；近义 lip 指 give lip（吝顶嘴）俚语');

  W('bad luck', 'noun', '/ˌbæd ˈlʌk/', '', [], '厄运；不走运', 'Unfortunate events, or the fact that something unfortunate happens.', [
    ['厄运；不走运', 'Bad things that happen to someone by chance, or a phrase used to show sympathy.', '偶然落在某人身上的坏事，或表示同情的说法。', '不可数；安慰语境常说 tough/bad luck。', 'Bad luck kept the project behind schedule.', '厄运使项目一再拖延。', ['tough luck'], ['misfortune'], 'noun', 'uncountable', '通用'],
  ], '', ['misfortune'], 'bad + luck；近义 misfortune 正式书面「厄运」；反义 good luck 好运').phrase = true;

  W('bags', 'noun', '/bæɡz/', 'A1', [], '包袋；大量（复数）', 'Containers for carrying things, or a lot of something.', [
    ['包；提袋（复数）', 'Containers with handles used for carrying or holding things.', '带提手、用于携带或盛放东西的容器（复数形式）。', '常与材料连用：shopping bags、plastic bags。', 'She packed two bags for the trip.', '她为旅行打包了两个包。', ['shopping bags'], ['luggage'], 'noun', 'countable', '购物'],
    ['bags of 大量', 'A large amount of something, especially money or time.', '很多，尤指钱或时间。', '口语用法，bags of + 不可数名词或复数名词。', 'We still have bags of time.', '我们还有的是时间。', ['bags of money'], [], 'noun', 'uncountable', '口语'],
  ],'bags', ['luggage'], '←bag A1 的复数专义词条；bags of 口语「大量」；近义 luggage 泛指行李（不可数）');

  W('baked', 'adjective', '/beɪkt/', 'A2', [], '烤的；烘焙的', 'Cooked using dry heat in an oven.', [
    ['烤的；烘的', 'Cooked in an oven using dry heat, without extra liquid.', '用烤箱干热烹制、不另加液体的。', '作定语或表语，如 baked potatoes、baked beans。', 'We had baked fish and potatoes.', '我们吃了烤鱼和烤土豆。', ['baked beans'], ['roast'], 'adjective', '定语', '饮食'],
  ], '', ['roast'], '←bake A2 烤 + -ed；roast 烤（大块肉、带油煎烤），bake 烘焙（面食与干热）');

  W('balanced', 'adjective', '/ˈbælənst/', 'B1', [], '平衡的；均衡的', 'Keeping or having a good proportion between different parts.', [
    ['平衡的；均衡的', 'Having different parts in the right proportions to each other.', '各部分比例适当、彼此协调的。', '常见 balanced diet（均衡饮食）、balanced view（公允的看法）。', 'A balanced diet includes vegetables and protein.', '均衡饮食包括蔬菜和蛋白质。', ['balanced diet'], ['neutral'], 'adjective', '定语/表语', '健康'],
  ], '', ['neutral'], '←balance B1 平衡 + -ed；neutral 中立的（立场），balanced 均衡的（结构、饮食）');

  W('bandit', 'noun', '/ˈbændɪt/', '', [], '强盗；土匪', 'A robber, especially one who attacks travellers.', [
    ['强盗；土匪', 'A robber who attacks people, especially travellers.', '袭击他人的抢劫者，尤指拦路劫匪。', '可数；历史与西部片语境常见。', 'The bandits stopped the stagecoach on the ridge.', '强盗们在山脊上拦住了驿马车。', [], ['outlaw'], 'noun', 'countable', '历史'],
  ], 'bandits', [], '近义 outlaw 歹徒/亡命之徒（法律身份），bandit 更指有武装的土匪');

  W('bangs', 'noun', '/bæŋz/', 'B1', [], '刘海；额前发', 'The hair cut straight across the forehead.', [
    ['刘海；额发', 'Hair cut short and straight across the forehead.', '额前剪短剪齐的头发。', '复数形式；美式 bangs = 英式 fringe。', 'She pinned her bangs back with a clip.', '她用发夹把刘海别到后面。', ['trim your bangs'], ['fringe'], 'noun', 'uncountable', '外貌'],
  ], '', ['fringe'], '←bang B1（引申「齐刷刷一剪」）；美式用 bangs，英式用 fringe');

  W('banish', 'verb', '/ˈbænɪʃ/', '', [], '放逐；驱逐；消除', 'To send someone away forever, or to get rid of something completely.', [
    ['放逐；流放', 'To send someone away from their country as a punishment.', '将某人作为惩罚送出其国家。', '与 to 连用：banish sb to some place。', 'The rebels were banished to a distant island.', '叛军被流放到一座偏远的岛上。', ['banish to'], ['exile', 'deport'], 'verb', '及物', '政治'],
    ['消除；摒弃（想法）', 'To remove something completely from your mind.', '把某事物从头脑中完全清除掉。', '常见 banish fears/doubts。', 'She banished all thoughts of failure.', '她把失败的念头全部抛开。', ['banish fears'], ['expel'], 'verb', '及物', '通用'],
  ], 'banishes~banished~banished~banishing', ['deport', 'exile'], 'deport 驱逐出境（他国），banish 流放（本国惩罚），expel 开除/驱逐；deport、exile 为家族引用词');

  W('banishment', 'noun', '/ˈbænɪʃmənt/', '', [], '放逐；流放', 'The act of sending someone away from their country as a punishment.', [
    ['放逐；流放', 'The punishment of being sent away from your country or home.', '被送出国家或家园的惩罚。', '可数或不可数，正式用语。', 'After years of banishment he returned home.', '流放多年后他回到了故乡。', ['years of banishment'], ['exile'], 'noun', 'uncountable/countable', '政治'],
  ], 'banishments', ['exile'], 'banish 放逐 + -ment（表行为）；banish 本批未分级故本词留空；近义 exile 更常用');

  W('banking', 'noun', '/ˈbæŋkɪŋ/', 'A1', ['CET4'], '银行业；金融', 'The business of a bank, or the activity of using banks.', [
    ['银行业；银行实务', 'The business of keeping money, lending it, and exchanging it.', '保存、借贷和兑换货币的业务。', '不可数，常见 investment banking（投资银行）。', 'She has worked in banking for ten years.', '她在银行业工作了十年。', ['investment banking'], ['finance'], 'noun', 'uncountable', '商务'],
  ], '', ['finance'], '←bank A1 银行 + -ing（行业）；近义 finance 泛指金融');

  W('banned', 'adjective', '/bænd/', 'B1', [], '被禁止的；禁令的', 'Forbidden by an official rule or law.', [
    ['被禁止的', 'Not allowed by a law, rule, or official decision.', '按法律、规则或官方决定不被允许的。', '常见 be banned from doing sth。', 'The substance is banned in several countries.', '该物质在几个国家被禁止。', ['banned from'], ['taboo'], 'adjective', '定语/表语', '法律'],
  ], '', ['taboo'], '←ban B1 禁止 + -ed；taboo 忌讳的（文化、习俗层面的禁忌）');

  W('barb', 'noun', '/bɑːb/', '', [], '倒钩；尖刻的话', 'A sharp point that points backwards, or a cruel remark.', [
    ['倒钩；倒刺', 'A sharp point on a fish hook, arrow, or other object that points backward.', '鱼钩、箭头等上向后翘起的尖刺。', '可数，技术与生物学用语。', 'The arrow had a sharp barbed tip.', '这支箭带有锋利的倒钩箭头。', ['barbed wire'], ['hook'], 'noun', 'countable', '科学'],
    ['（带刺的）讥讽话', 'A remark that is meant to hurt someones feelings.', '意在刺痛他人感情的尖刻话语。', '可数，文学语境；形容词 barbed 尖刻的。', 'Her question carried a barb aimed at the boss.', '她的提问里带着一根针对老板的刺。', ['a barbed remark'], ['hook'], 'noun', 'countable', '书面'],
  ], 'barbs', [], '近义 hook 普通钩子（无倒钩义）；barbed wire 带刺铁丝网');

  W('bard', 'noun', '/bɑːd/', '', [], '吟游诗人；诗人', 'A poet, especially one celebrated as a great poet.', [
    ['吟游诗人；（大）诗人', 'A poet, especially one who recites poems, or an ancient poet.', '作诗吟诗的人，尤指古代诗人或公认的大诗人。', '可数，文学与历史语境；the Bard 特指莎士比亚。', 'The bard sang of heroes and old kings.', '吟游诗人歌唱英雄与古老君王。', ['the Bard of Avon'], ['poet'], 'noun', 'countable', '艺术'],
  ], 'bards', [], '近义 poet 通用「诗人」；the Bard（大写）特指莎士比亚');

  W('barely', 'adverb', '/ˈbeəli/', 'B2', ['CET4'], '几乎不；勉强', 'Only just; almost not.', [
    ['几乎不；勉强', 'Only by a very small amount; almost not at all.', '只有一点点、几乎做不到。', '常修饰 manage、enough、hear、touch。', 'We barely managed to catch the last train.', '我们勉强赶上了末班火车。', ['barely enough'], ['hardly'], 'adverb', 'null', '通用'],
    ['刚刚；仅仅', 'Only just; a very short time before.', '就在极短的时间之前。', '位于句首修饰从句时主句部分倒装。', 'She had barely arrived when the phone rang.', '她刚到电话就响了。', ['barely visible'], [], 'adverb', 'null', '通用'],
  ], '', ['hardly'], '←bare B2 仅仅的 + -ly；家族 hardly「几乎不」（barely 略强调「勉强够」）');

  W('barrack', 'noun/verb', '/ˈbærək/', '', [], '兵营；喝倒彩', 'A building for soldiers to live in, or to shout disapproval at a speaker.', [
    ['兵营；营房', 'A building where soldiers live, usually referred to in the plural barracks.', '军人居住的建筑，通常以复数 barrack(s) 出现。', '单数 barrack 少用，常见复数形式 barracks。', 'Soldiers lined up in the barrack yard.', '士兵们在营房院子里列队。', ['barrack yard'], ['hut'], 'noun', 'countable', '军事'],
    ['喝倒彩；起哄', 'To shout insults or disapproval at a speaker or team, or to cheer for a team.', '对演讲者或球队喝倒彩，或为球队加油助威。', '主英式：barrack for 支持（球队），barrack at 喝倒彩。', 'The crowd barracked the referee throughout the match.', '观众整场比赛都在向裁判喝倒彩。', [], [], 'verb', '不及物', '体育'],
  ], 'barracks', [], '近义 hut 简易棚屋；英式用法 barrack for 为……加油、barrack at 喝倒彩');

  W('barrow', 'noun', '/ˈbærəʊ/', '', [], '手推车；摊贩车', 'A small cart with wheels that you push to carry goods.', [
    ['手推车；两轮推车', 'A small cart with wheels, pushed by hand to carry things.', '手推的带轮小车，用于运货。', '可数，英式英语；美式常用 cart。', 'He pushed a barrow of vegetables to market.', '他推着一车蔬菜去市场。', ['a fruit barrow'], ['trolley'], 'noun', 'countable', '交通'],
  ], 'barrows', [], '近义 trolley 美式「手推车/购物车」；英式 barrow 指摊贩手推车');

  W('bashful', 'adjective', '/ˈbæʃfl/', '', [], '害羞的；腼腆的', 'Shy and easily made to feel embarrassed.', [
    ['害羞的；腼腆的', 'Shy, and uncomfortable when you are the centre of attention.', '羞怯、成为关注焦点时不自在的。', '较文雅，儿童语境常用；比 shy 更强调退缩。', 'The bashful boy hid behind his mother.', '腼腆的小男孩躲在妈妈身后。', ['a bashful smile'], ['shy', 'timid'], 'adjective', '定语/表语', '心理'],
  ], '', ['shy', 'timid'], '近义 shy 害羞（通用），timid 胆小（天性），bashful 文雅（怕被关注）');

  W('basic colour', 'noun', '/ˌbeɪsɪk ˈkʌlə(r)/', '', [], '基本色；基础色', 'A main colour from which other colours are made or compared.', [
    ['基本色；基础色', 'A main colour used as a base for mixing or comparing other colours.', '用作调色或比较基准的主要颜色。', '可数；常说 the basic colours（红黄蓝等基本色）。', 'Mixing the basic colours gives the rest of the rainbow.', '调和基本色可以得到彩虹中的其他颜色。', ['the basic colours of the flag'], ['primary'], 'noun', 'countable', '艺术'],
  ], '', ['primary'], 'basic 基本 + colour 颜色；近义 primary colour 三原色（红黄蓝）').phrase = true;

  W('basically', 'adverb', '/ˈbeɪsɪkli/', 'A1', ['CET4'], '基本上；大体上', 'In general, though not in every detail.', [
    ['基本上；大体上', 'In general and in the most important ways, though not completely.', '就主要方面而言，虽不完全如此。', '口语中常作话语标记，置于句首。', 'Basically, the plan is sound.', '基本上这个计划是可行的。', ['basically speaking'], [], 'adverb', 'null', '口语'],
  ], '', ['basic'], '←basic A1 基本的 + -ly，A1 继承；家族 basic');

  W('basics', 'noun', '/ˈbeɪsɪks/', 'A1', [], '基础；基本要领', 'The most important facts, rules, or skills of a subject.', [
    ['基础；基本要领', 'The most important facts, rules, or skills that you need to know or do.', '需要掌握的最重要事实、规则或技能。', '常用复数，常见 the basics of sth。', 'Before the trip we covered the basics of German.', '旅行前我们过了一遍德语基础。', ['learn the basics'], ['element', 'fundamental'], 'noun', 'uncountable', '教育'],
  ], '', ['basic'], '←basic A1 + -s（复数专义「基础部分」）；家族 basic；element、fundamental 近义');

  W('bassinet', 'noun', '/ˌbæsɪˈnet/', '', [], '婴儿摇篮；带篷小床', 'A small bed with a hood, for a baby to sleep in.', [
    ['婴儿摇篮；带篷小床', 'A small bed with a canopy, usually on legs, for a young baby.', '带篷的小床，通常带腿，供婴儿睡卧。', '可数，美式常用；英式多用 cot/cradle。', 'The baby slept in a bassinet beside the bed.', '宝宝睡在床边的摇篮里。', ['a wicker bassinet'], ['cradle'], 'noun', 'countable', '家庭'],
  ], 'bassinets', ['cradle'], '近义 cradle 摇篮（兼比喻「发源地」）；bassinet 特指带篷摇篮');

  W('bathtub', 'noun', '/ˈbɑːθtʌb/', 'A1', [], '浴缸；澡盆', 'A long container that you fill with water to have a bath in.', [
    ['浴缸；澡盆', 'A large container for washing the whole body while sitting or lying in it.', '坐浴或盆浴用的大型容器。', '可数；美式 bathtub，英式多说 bath。', 'She lay in the bathtub reading a magazine.', '她躺在浴缸里看杂志。', ['a clawfoot bathtub'], ['tub'], 'noun', 'countable', '家居'],
  ], 'bathtubs', ['bath', 'tub'], '←bath A1 洗澡/浴缸 + tub 桶，取首成分级 A1；近义 tub 口语「澡盆」');

  W('battlefield', 'noun', '/ˈbætlfiːld/', 'A2', [], '战场；斗争的领域', 'The place where a battle is fought, or an area of intense conflict.', [
    ['战场；战场地带', 'The area of land where a battle is being or has been fought.', '正在进行或曾经进行战斗的区域。', '可数，battle A2 + field A1 复合。', 'The soldiers returned from the battlefield.', '士兵们从战场归来。', ['battlefield hospital'], ['front'], 'noun', 'countable', '军事'],
    ['（喻）斗争的领域', 'An area of activity where people compete or argue fiercely.', '人们激烈竞争或争论的领域。', '比喻义，常见 the political battlefield。', 'The party lost ground on the political battlefield.', '该政党在政治角力中失去了阵地。', ['the political battlefield'], ['front'], 'noun', 'countable', '政治'],
  ], 'battlefields', ['battle', 'field'], '←battle A2 战斗 + field A1 场地，取首成分级 A2；近义 front 前线（更具体）');

  W('bazaar', 'noun', '/bəˈzɑː(r)/', '', [], '集市；义卖市场', 'A market in a Middle Eastern town, or a sale held to raise money.', [
    ['集市；巴扎', 'A market of small shops in a Middle Eastern or Asian town.', '中东或亚洲城镇中的市场、商铺群。', '可数；音译「巴扎」。', 'We bought spices in the old bazaar.', '我们在老集市买了香料。', ['the old bazaar'], ['market'], 'noun', 'countable', '文化'],
    ['义卖会；展销会', 'A sale of goods to raise money for charity, or an event with many stalls.', '为慈善筹款的义卖，或摊位众多的展销活动。', '常见 church/school bazaar。', 'The school held a summer bazaar.', '学校办了一场夏季义卖会。', ['a church bazaar'], ['market'], 'noun', 'countable', '社会'],
  ], 'bazaars', [], '近义 market 通用「市场」；bazaar 特指中东集市或慈善义卖');

  W('be able to', 'verb', '/bi ˈeɪbl tuː/', '', [], '能够；有能力做', 'To have the ability, opportunity, or permission to do something.', [
    ['能够；有能力做', 'To have the ability, opportunity, or permission to do something.', '有能力、有机会或获准做某事。', 'can 无将来式与完成式，需用 will be able to / have been able to。', 'Will you be able to come tomorrow?', '你明天能来吗？', ['be able to afford'], ['can'], 'verb', 'null', '通用'],
  ], '', ['can'], 'can 的扩展形式；近义 can（不能用于将来/完成式时用 be able to）').phrase = true;

  W('be apt', 'adjective', '/bi ˈæpt/', '', [], '易于……的；往往', 'To be likely to do something in a particular situation.', [
    ['易于……的；倾向于', 'To have a tendency to do something, especially something unwelcome.', '有做某事的倾向，尤指不受欢迎的事。', 'apt to + 动词原形，较正式；主语常为事物或人。', 'Small children are apt to copy what they see.', '小孩子容易模仿看到的东西。', ['apt to'], ['tend'], 'adjective', '表语', '书面'],
  ], '', ['tend'], 'apt 易……的（正式）；近义 tend 趋向（更通用，tend to do）').phrase = true;

  W('be awful', 'adjective', '/bi ˈɔːfl/', '', [], '糟透了；真差劲', 'To be very bad or unpleasant (informal).', [
    ['糟透了（口语）', 'To be very bad or to make you feel disgusted.', '非常糟糕、令人反感。', '口语评价用法；suck 为俚语、较粗俗。', 'My phone died — this day really sucks.', '手机没电了——今天真倒霉。', [], ['suck'], 'adjective', '表语', '口语'],
  ], '', ['suck'], 'awful 糟糕的（较正式）+ be；近义 suck 俚语「差劲、恶心」，语气更粗俗').phrase = true;

  W('be born with', 'verb', '/bi bɔːn wɪð/', '', [], '生来就有；天生具有', 'To have a quality or condition from the time you are born.', [
    ['生来就有；天生具有', 'To possess a trait, skill, or condition from birth.', '自出生起就拥有某种特质、技能或状况。', 'be born with + 名词；born 为 bear 的过去分词。', 'She was born with a rare heart condition.', '她天生患有罕见的心脏疾病。', ['be born with talent'], ['inherit'], 'verb', 'null', '健康'],
  ], '', ['inherit'], 'be born with 生来具有；近义 inherit 继承（基因、财产）').phrase = true;

  W('be enough', 'adjective', '/bi ɪˈnʌf/', '', [], '足够；够了', 'To be as much or as many as is needed.', [
    ['足够；够用', 'To be as much or as many as is needed for a purpose.', '在数量或程度上满足需要。', 'be enough for sb/sth；be enough to do sth。', 'The money was enough to finish the project.', '这笔钱足够完成项目。', ['enough for'], ['suffice'], 'adjective', '表语', '通用'],
  ], '', ['suffice'], 'enough 足够 + be；家族 suffice 正式书面「足矣、足够」').phrase = true;

  W('be familiar with', 'adjective', '/bi fəˈmɪliə wɪð/', '', [], '熟悉；了解', 'To know something or someone well because of past experience.', [
    ['熟悉；通晓', 'To have good knowledge of something because you have met or used it before.', '因接触过而对某事了解清楚。', 'be familiar with sb/sth；主语是人。', 'I am familiar with this software.', '我熟悉这个软件。', ['get familiar with'], ['know'], 'adjective', '表语', '通用'],
  ], '', ['know'], 'familiar 熟悉的 + be with；近义 know 通用「知道」，familiar 强调「见过、用过」').phrase = true;

  W('be going to', 'verb', '/bi ˌɡəʊɪŋ ˈtuː/', '', [], '将要；打算（表将来）', 'Used to say that something will happen soon, or that you intend to do it.', [
    ['将要；即将发生', 'Used to say that an event will happen very soon, often because of present signs.', '表示某事很快会发生，常基于现在的迹象。', '口语将来时；与 will 区分：will 表意愿或即时决定。', 'Look at those clouds — its going to rain.', '看那些云——要下雨了。', ['be going to do'], ['will'], 'verb', 'null', '通用'],
  ], '', ['will'], '口语将来时；近义 will（意愿/即时决定），be going to（已有迹象或计划）').phrase = true;

  W('be grateful', 'adjective', '/bi ˈɡreɪtfl/', '', [], '感激；感谢', 'To feel or show that you are thankful to someone.', [
    ['感激的；感恩的', 'To feel thankful for something that someone has done.', '因某人的作为而感到感谢。', 'be grateful to sb for sth。', 'We are grateful for your help.', '我们感谢你的帮助。', ['be grateful for'], ['appreciate'], 'adjective', '表语', '通用'],
  ], '', ['appreciate'], 'grateful 感激的 + be；近义 appreciate 欣赏/感激（动词）').phrase = true;

  W('be in debt', 'adjective', '/bi ɪn ˈdet/', '', [], '负债；欠债', 'To owe money to someone.', [
    ['负债；欠着钱', 'To have borrowed money that you must pay back.', '借了钱尚未偿还的状态。', 'be in debt to sb；deeply in debt 深陷债务。', 'After the renovation they were deeply in debt.', '装修之后他们负债累累。', ['in debt to'], ['owe'], 'adjective', '表语', '金融'],
  ], '', ['owe'], 'debt 债务（发音 /det/，b 不发音）；近义 owe 欠（动词）').phrase = true;

  W('be inclined', 'adjective', '/bi ɪnˈklaɪnd/', '', [], '倾向于；想要', 'To want to do something or be likely to do it.', [
    ['倾向于（做某事）', 'To feel that you would like to do something, though not certainly.', '有做某事的想法但不完全确定。', 'be inclined to do sth；委婉表达个人意见。', 'I am inclined to agree with your plan.', '我倾向于同意你的计划。', ['be inclined to'], ['tend'], 'adjective', '表语', '通用'],
  ], '', ['tend'], 'incline 倾向 + -ed；近义 tend 趋向（描述客观趋势更常用）').phrase = true;

  W('be left', 'verb', '/bi ˈleft/', '', [], '剩下；被留下', 'To remain or be available after others have been taken.', [
    ['剩下；还剩下', 'To remain when everything else has been used or taken.', '其他用完或拿走后仍然留存。', 'left 为 leave 的过去分词；常见 be left over。', 'Only two tickets were left for the show.', '演出只剩两张票了。', ['be left over'], ['remain'], 'verb', 'null', '通用'],
  ], '', ['remain'], 'leave 的被动/完成式；近义 remain 保留（正式）；be left over 剩余').phrase = true;

  W('be likely to', 'adjective', '/bi ˈlaɪkli tuː/', '', [], '很可能（发生）', 'To be probable or expected to happen.', [
    ['很可能；有……的可能', 'To be something that will probably happen.', '很可能会发生的事。', 'be likely to do sth；more likely to 更可能。', 'Prices are likely to rise this year.', '今年物价可能上涨。', ['be likely to succeed'], ['oughtto'], 'adjective', '表语', '通用'],
  ], '', [], 'likely 可能的 + to do；家族 oughtto（连写词形）「应该」，同属情态推测').phrase = true;

  W('be present at', 'adjective', '/bi ˈpreznt æt/', '', [], '出席；在场', 'To be at an event, place, or meeting.', [
    ['出席；在场', 'To attend an event or be in a particular place.', '参加某活动或身处某地。', '正式用语；present 作形容词读 /ˈpreznt/。', 'All directors were present at the meeting.', '所有董事都出席了会议。', [], ['attend'], 'adjective', '表语', '商务'],
  ], '', ['attend'], 'present 在场的；家族 attend 出席（动词，更正式）').phrase = true;

  W('be priced', 'verb', '/bi ˈpraɪst/', '', [], '定价为；标价', 'To be given a price at a particular level.', [
    ['定价为；标价', 'To have a price set at a particular level.', '被设定在某个价格水平。', '常见 be priced at；被动结构，主语是商品。', 'The tickets are priced at 50 dollars.', '票价定为 50 美元。', ['be priced at'], ['cost'], 'verb', 'null', '商务'],
  ], '', ['cost'], 'price 标价（设定价格，常被动）；cost 花费（主语是所购之物）').phrase = true;

  W('be seated', 'verb', '/bi ˈsiːtɪd/', '', [], '请坐；就座', 'To sit down, or to ask someone politely to sit down.', [
    ['请坐；就座', 'A polite way of asking someone to sit down, or of sitting down yourself.', '请人就座或自己坐下的礼貌说法。', '正式用语，常见于服务与典礼场合。', 'Please be seated, the show will begin.', '请就座，演出马上开始。', ['be seated here'], ['sit'], 'verb', 'null', '正式'],
  ], '', ['sit'], 'seat 使坐下（动词）+ -ed；近义 sit 坐（通用）').phrase = true;

  W('be told', 'verb', '/bi ˈtəʊld/', '', [], '被告知；得知', 'To be given information or instructions by someone.', [
    ['被告知；得知', 'To be given information or instructions by someone.', '从某人处得到信息或指示。', '常见 you will be told（会通知你的）；as I was told 照吩咐。', 'You will be told when the results are ready.', '结果出来会通知你的。', ['as I was told'], ['hear'], 'verb', 'null', '通用'],
  ], '', ['hear'], 'tell 的被动式；近义 hear 听到（非被动的信息获取）').phrase = true;

  W('be willing', 'adjective', '/bi ˈwɪlɪŋ/', '', [], '愿意；乐意', 'To be prepared to do something.', [
    ['愿意（做）', 'To be prepared to do something if it is needed.', '在需要时愿意去做。', 'be willing to do sth；反义 unwilling 不愿的。', 'She was willing to work at the weekend.', '她愿意周末上班。', ['willing to help'], ['will'], 'adjective', '表语', '商务'],
  ], '', ['will'], 'willing 愿意的 + be；近义 will 意愿（此处为名词/助动词义）').phrase = true;

  W('beacon', 'noun', '/ˈbiːkən/', '', [], '信标；灯塔；指路明灯', 'A light or signal that guides ships or people, or a guiding example.', [
    ['信标；灯塔', 'A light or signal that shows a safe place for ships or aircraft to go.', '为船舶或飞机标示安全方向的灯光或信号。', '可数，常与 coastal 等连用。', 'The beacon guided the ships through the fog.', '信标灯引导船只穿过浓雾。', ['a coastal beacon'], ['flare'], 'noun', 'countable', '科技'],
    ['指路明灯；榜样', 'A person or thing that serves as a guide or example.', '起引导或示范作用的人或事物。', '比喻义，常见 a beacon of hope。', 'Her work became a beacon of hope for the team.', '她的工作成了团队的希望之光。', ['beacon of hope'], [], 'noun', 'countable', '书面'],
  ], 'beacons', [], '近义 flare 闪光信号（短暂燃烧）；beacon 持续信标；beacon of hope 希望之灯');

  W('beagle', 'noun', '/ˈbiːɡl/', '', [], '小猎犬；比格犬', 'A small dog with short legs and long ears, used for hunting.', [
    ['小猎犬；比格犬', 'A small hound with a smooth coat, short legs, and long ears.', '短腿长耳、被毛光滑的小型猎犬。', '可数；原用于猎兔，也作宠物犬。', 'The beagle sniffed the trail eagerly.', '比格犬急切地嗅着踪迹。', ['a pack of beagles'], ['hound'], 'noun', 'countable', '动物'],
  ], 'beagles', [], '近义 hound 猎犬（统称）；beagle 比格犬（品种名）');

  W('beaker', 'noun', '/ˈbiːkə(r)/', '', [], '烧杯；大杯子', 'A glass container used in a laboratory, or a large cup for drinking.', [
    ['烧杯', 'A plain glass container with a flat bottom, used for holding liquids in a laboratory.', '实验室中盛放液体的平底玻璃容器。', '可数，化学与物理实验用语。', 'Pour the acid into the beaker.', '把酸倒入烧杯。', [], ['mug'], 'noun', 'countable', '科学'],
    ['大口杯；马克杯状杯', 'A large cup without handles, used for drinking.', '无把手的大口杯子。', '可数，英式常见 a beaker of tea。', 'He drank a beaker of tea.', '他喝了一大杯茶。', ['a beaker of tea'], ['mug'], 'noun', 'countable', '饮食'],
  ], 'beakers', ['beak'], 'beak 喙/锥形（本词库未分级故留空）+ -er；近义 mug 有把手的马克杯');

  W('beautiful', 'adjective', '/ˈbjuːtɪfl/', 'A2', ['CET4'], '美丽的；美好的', 'Very pleasing to look at, hear, or experience.', [
    ['美丽的；漂亮的', 'Pleasant to look at, especially in a way that gives pleasure.', '看着令人愉悦的，尤指外表好看。', '可形容人、景色、作品。', 'What a beautiful view!', '多美的景色！', ['beautiful weather'], ['gorgeous'], 'adjective', '定语', '通用'],
    ['出色的；完美的', 'Very good or enjoyable (informal).', '极好的、令人愉快的（口语强调）。', '口语强调用法，如 a beautiful goal。', 'That was a beautiful pass to the striker.', '那脚传球给前锋传得漂亮。', [], [], 'adjective', '定语', '口语'],
  ], '', ['gorgeous'], '←beauty A2 美 + -ful，A2 继承；家族 gorgeous 极美的（口语强调）');

  W('because of', 'preposition', '/bɪˈkɒz ɒv/', '', [], '因为；由于', 'As a result of something; on account of something.', [
    ['因为；由于', 'On account of; as a result of something.', '由于某事、作为其结果。', '后接名词或代词；接从句时用 because。', 'We stayed home because of the storm.', '因为暴风雨我们待在家里。', ['because of this'], ['due', 'for'], 'preposition', 'null', '通用'],
  ], '', ['due', 'for'], 'because of + 名词（because + 从句）；近义 due to 正式「由于」、for 因为（表目的居多）').phrase = true;

  W('bedding', 'noun', '/ˈbedɪŋ/', 'A1', ['CET4'], '床上用品；寝具', 'The sheets, blankets, and covers used on a bed.', [
    ['床上用品；寝具', 'Items such as sheets, blankets and covers that you put on a bed.', '铺在床上的床单、毯子等物品。', '不可数，指整套床品。', 'Fresh bedding was put on every bed.', '每张床都换了新的床上用品。', ['change the bedding'], ['litter'], 'noun', 'uncountable', '家居'],
  ], '', ['litter'], '←bed A1 床 + -ing（行业用语）；近义 litter 动物铺窝的垫草');

  W('bedroom', 'noun', '/ˈbedruːm/', 'A1', [], '卧室；睡房', 'A room in a house where people sleep.', [
    ['卧室；睡房', 'A room in a house where people sleep.', '家中供人睡觉的房间。', '可数，bed A1 + room A1 复合。', 'The flat has two bedrooms.', '这套公寓有两间卧室。', ['master bedroom'], ['nursery'], 'noun', 'countable', '家居'],
  ], 'bedrooms', ['bed', 'room'], 'bed A1 + room A1 复合，取首成分级 A1；近义 nursery 婴儿/托儿房间');

  W('beehive', 'noun', '/ˈbiːhaɪv/', 'B2', [], '蜂箱；蜂窝', 'A box where bees are kept, or the nest of wild bees.', [
    ['蜂箱；蜂窝', 'A box or nest where bees live and make honey.', '蜜蜂居住并酿蜜的箱体或巢。', '可数；hive B2 为家族词根。', 'The swarm settled on the old beehive.', '蜂群落在旧蜂箱上。', [], ['hive'], 'noun', 'countable', '动物'],
  ], 'beehives', ['hive'], 'bee 蜜蜂 + hive 蜂箱，家族 hive B2 继承；近义 hive 通用「蜂箱/蜂群」');

  W('befall', 'verb', '/bɪˈfɔːl/', '', [], '（不幸）降临；落到……头上', 'To happen to someone, especially something bad.', [
    ['降临；落到……头上', 'To happen to someone, especially something unpleasant.', '某事落在某人身上，尤指不愉快的事。', '较文；主语是事件：misfortune befalls sb。', 'Misfortune befell the old family.', '厄运降临到这个古老的家族。', ['what will befall them'], ['happen', 'overtake'], 'verb', '及物', '书面'],
  ], 'befalls~befell~befallen~befalling', [], 'be- + fall（倒下）的古旧复合动词，分级留空；近义 happen 发生、overtake 突袭');

  W('beginner', 'noun', '/bɪˈɡɪnə(r)/', 'A1', [], '初学者；新手', 'A person who is just starting to learn or do something.', [
    ['初学者；新手', 'A person who has just started learning a skill or activity.', '刚开始学习某种技能或活动的人。', '可数，常见 for beginners（适合初学者）。', 'This course is for complete beginners.', '这门课面向零基础学员。', ['for beginners'], ['freshman', 'initiate', 'recruit'], 'noun', 'countable', '教育'],
  ], 'beginners', ['freshman'], '←begin A1 开始 + -er（表人），A1 继承；家族 freshman 新人；initiate 新入会者、recruit 新成员');

  W('beginning', 'noun', '/bɪˈɡɪnɪŋ/', 'A1', ['CET4'], '开始；开端', 'The first part or moment of something.', [
    ['开始；开端', 'The first part of a period, event, or process.', '一段时期、事件或过程的第一部分。', '可数，常见 at the beginning of。', 'At the beginning of the year nobody understood the rules.', '年初时没人懂这些规则。', ['from the beginning'], ['dawn', 'onset', 'origin', 'outset', 'start'], 'noun', 'countable', '通用'],
  ], 'beginnings', ['onset', 'outset', 'start'], '←begin A1 + -ing，A1 继承；家族 onset（坏事）开始、outset 起点、start 通用；dawn 黎明/开端、origin 起源');

  W('begrudge', 'verb', '/bɪˈɡrʌdʒ/', '', [], '吝惜；嫉妒', 'To be unwilling to give something, or to feel unhappy about another person\'s success.', [
    ['吝惜；不乐意给', 'To be unwilling to give or allow something to someone.', '不愿给予或允许某人得到某物。', 'begrudge sb sth；书面用语。', 'She did not begrudge the money she had spent.', '她对自己花掉的钱毫不吝惜。', ['begrudge sb sth'], ['envy', 'resent'], 'verb', '及物', '书面'],
  ], 'begrudges~begrudged~begrudged~begrudging', ['resent'], 'grudge 怨恨（本词库未单列）；家族 resent 怀恨、近义 envy 嫉妒（他人所得）');

})(typeof window !== 'undefined' ? window : globalThis);
