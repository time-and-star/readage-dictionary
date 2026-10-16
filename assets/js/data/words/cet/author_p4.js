/* data/words/cet/author_p4.js — 常用词 P 批次 4，缺口 pacifist ~ particularly，共 31 条（均为单词，本批无短语）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（8 条全部 CET4：
 * painful、painting、parental、partial、partially、participant、participation、particularly）。
 * 扫根结论：pain A1、parent A1、part A1、participate B1、epidemic B2（author_p1/e2 已核）——
 * painful←pain A1 + -ful、painting←paint A1 + -ing、paired←pair A1 + -ed、parental←parent A1 + -al、
 * partial←part A1 + -ial、partially←part A1 + -ly、participant←participate B1 + -ant、
 * participation←participate B1 + -ation、particularly←particular B1 + -ly（brief 根提示）；
 * paddle 判定 pad B1（pad 整段位于词首，扁平拍水义直连，-le 指小后缀，判断项，近义 oar 为家族非父词）；
 * paramilitary 取 military B2（para- 前缀不作成分，同 non-military 先例）；
 * partake 取首成分 part A1（part+take 复合，同 minibus 首成分模式）；
 * 留空项：pacifist（pacifism 不在库、peace 拼写不可见）、palatable（palate 不在库）、
 * pandemic（pan- 前缀后成分 demic 不在库，同 nonreader 先例）、pagan/pail/pane/pang/papa/
 * parable/paragon/parasol/pare/parlour/parody/pal/paltry/pamper（无库内可见词根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p4.js 必须在 _cet_helper.js 之后加载');

  W('pacifist', 'noun', '/ˈpæsɪfɪst/', '', [], '和平主义者', 'A person who believes that war and violence are always wrong.', [
    ['和平主义者', 'A person who believes that war and violence are always wrong.', '反对一切战争与暴力的人。', '可数；反战人士。', 'The pacifist refused to serve in the army.', '这名和平主义者拒绝服兵役。', [], ['dove'], 'noun', 'countable', '政治'],
  ], 'pacifists', ['dove'], 'pacifism 不在库、peace 拼写不可见（拉丁 pac- 对 peace），留空；家族/近义 dove 鸽派人物、和平主义者');

  W('packed', 'adjective', '/pækt/', 'A2', [], '挤满的；打包的', 'Full of people or things, or put into a bag.', [
    ['挤满的；打包的', 'Full of people or things, or put into a bag.', '挤满人或物的；已装入包中的。', '定语或表语。', 'The hall was packed with students.', '大厅里挤满了学生。', [], ['full'], 'adjective', '定语/表语', '通用'],
  ], '',['pack'], '←pack A2 + -ed（透明后缀），A2 继承（brief 根提示）；近义 full 满的');

  W('padding', 'noun', '/ˈpædɪŋ/', 'B1', [], '填充料；衬垫', 'Material used to make something softer or to fill a space.', [
    ['填充料；衬垫', 'Material used to make something softer or to fill a space.', '使某物变软或填补空隙的材料。', '不可数。', 'The jacket has extra padding at the shoulders.', '这件外套肩部有多余衬垫。', [], ['pad'], 'noun', 'uncountable', '家居'],
  ], '',['pad'], '←pad B1 + -ing（动名词名化），B1 继承（brief 根提示）；近义 pad 垫子、填充物（同词根回指）');

  W('paddle', 'noun/verb', '/ˈpædl/', 'B1', [], '桨；划（桨）', 'A short light oar, or to move a small boat with one.', [
    ['桨', 'A short light oar for a small boat.', '小船上用的短而轻的桨。', '可数。', 'She grabbed a paddle and pushed off.', '她抓起一支桨便出发了。', [], ['oar', 'row'], 'noun', 'countable', '体育'],
    ['划（桨）', 'To move a small boat through water using a paddle.', '用桨划动小船。', '不及物，亦可及物。', 'We paddled across the lake.', '我们划桨横渡了湖。', [], [], 'verb', '不及物', '体育'],
  ], 'paddles~paddled~paddled~paddling', ['oar'], '判定 ←pad B1（pad 整段位于词首，扁平拍水义直连，-le 指小后缀，无库内先例属判断项），B1 继承（brief 显示 ←?）；家族/近义 oar 桨、row 划船');

  W('pagan', 'noun', '/ˈpeɪɡən/', '', [], '异教徒；多神教信徒', 'A person who does not follow a major religion.', [
    ['异教徒；多神教信徒', 'A person who does not follow a major religion.', '不信仰主要宗教的人。', '可数，历史或贬义语境。', 'The temple was built by pagans.', '这座庙由异教徒建造。', [], ['witch'], 'noun', 'countable', '宗教'],
  ], 'pagans', [], '拉丁 paganus（村民）——无库内可见词根，留空；近义 witch 巫师（异教信仰者）');

  W('pail', 'noun', '/peɪl/', '', [], '桶', 'A bucket for carrying liquids or other things.', [
    ['桶', 'A bucket for carrying liquids or other things.', '盛液体或其他东西的桶。', '可数，较 old-fashioned。', 'He filled the pail with water.', '他把水桶装满了水。', [], ['bucket'], 'noun', 'countable', '家居'],
  ], 'pails', ['bucket'], '日耳曼语 pail——无库内可见词根，留空；家族/近义 bucket 水桶');

  W('painful', 'adjective', '/ˈpeɪnfl/', 'A1', ['CET4'], '痛苦的；疼痛的', 'Causing or feeling pain.', [
    ['痛苦的；疼痛的', 'Causing or feeling pain.', '引起或感到疼痛的。', '定语或表语。', 'The wound was painful for days.', '这伤口疼了好几天。', ['painful memory'], ['aching', 'sore'], 'adjective', '定语/表语', '健康'],
  ], '',['sore', 'pain'], '←pain A1 + -ful（透明后缀），A1 继承（brief 显示 ←?，自行扫根 pain）；家族 sore 疼的，近义 aching 隐痛的、sore 疼痛的');

  W('painting', 'noun', '/ˈpeɪntɪŋ/', 'A1', ['CET4'], '画；绘画', 'A picture made with paint, or the skill or activity of painting.', [
    ['画；画作', 'A picture made with paint.', '用颜料作的画。', '可数。', 'The museum bought a painting by a local artist.', '博物馆买下了一幅当地画家的画。', [], ['canvas', 'icon', 'miniature'], 'noun', 'countable', '艺术'],
    ['绘画（活动）', 'The skill or activity of making pictures with paint.', '用颜料作画的技巧或活动。', '不可数。', 'She took up painting last year.', '她去年开始了绘画。', ['oil painting'], [], 'noun', 'uncountable', '艺术'],
  ], 'paintings',['canvas', 'paint'], '←paint A1 + -ing（动名词名化），A1 继承（brief 根提示）；家族 canvas 画布，近 icon 圣像画、miniature 细密画');

  W('paired', 'adjective', '/peəd/', 'A1', [], '成对的', 'Placed or working together as a pair.', [
    ['成对的', 'Placed or working together as a pair.', '成对摆放或协同工作的。', '定语或表语。', 'The socks are sold in paired sets.', '这些袜子成套出售。', [], ['twin'], 'adjective', '定语/表语', '通用'],
  ], '',['pair'], '←pair A1 + -ed（透明后缀），A1 继承（brief 根提示）；近义 twin 成双的、孪生的');

  W('pal', 'noun', '/pæl/', '', [], '伙伴；好友', 'A friend, used mainly in informal speech.', [
    ['伙伴；好友', 'A friend, used mainly in informal speech.', '朋友，主要用于非正式口语。', '可数，常与 old 连用。', 'He went to the match with an old pal.', '他和一位老友一起去看比赛。', [], ['friend', 'mate'], 'noun', 'countable', '社交'],
  ], 'pals', [], 'romany pal（兄弟、朋友）——无库内可见词根，留空；近义 friend 朋友、mate 伙伴');

  W('palatable', 'adjective', '/ˈpælətəbl/', '', [], '可口的；可接受的', 'Pleasant to taste, or acceptable to the mind.', [
    ['可口的', 'Pleasant to taste.', '味道好的。', '表语，常与 to 连用。', 'The soup was hot but not very palatable.', '汤是热的，但不怎么可口。', [], ['edible'], 'adjective', '表语', '饮食'],
    ['可接受的', 'Acceptable or easy to accept.', '容易被接受的。', '表语，常与 to 连用。', 'The compromise was barely palatable to either side.', '这项妥协对任何一方都几乎难以接受。', [], [], 'adjective', '表语', '通用'],
  ], '', ['edible'], 'palate + able；palate 不在库，无成分级可继，留空（同 nonreader 先例）；家族/近义 edible 可食用的');

  W('paltry', 'adjective', '/ˈpɔːltri/', '', [], '微不足道的；少得可怜的', 'Too small or unimportant to be worth considering.', [
    ['微不足道的；少得可怜的', 'Too small or unimportant to be worth considering.', '小或不重要到不值得考虑。', '多作定语。', 'They offered a paltry sum for the car.', '他们为这辆车出少得可怜的一口价。', ['paltry sum'], ['miserable'], 'adjective', '定语/表语', '通用'],
  ], '', [], '中古荷兰语 paltrig（破布）——无库内可见词根，留空；近义 miserable 微薄的、可怜的');

  W('pamper', 'verb', '/ˈpæmpə/', '', [], '娇惯；纵容', 'To treat somebody with too much care and kindness.', [
    ['娇惯；纵容', 'To treat somebody with too much care and kindness.', '给予过多照顾与宠爱。', '及物，常略带贬义。', 'He pampered the dog with treats.', '他用零食娇惯这只狗。', [], ['humor', 'indulge', 'spoil'], 'verb', '及物', '家庭'],
  ], 'pampers~pampered~pampered~pampering', ['indulge', 'spoil'], '中古英语 pamperen（养胖）——无库内可见词根，留空；家族 indulge 纵容、spoil 宠坏，近 humor 迁就、indulge、spoil');

  W('pandemic', 'noun/adjective', '/ˌpænˈdemɪk/', '', [], '大流行病', 'An illness that spreads across a whole country or the world.', [
    ['大流行病', 'An illness that spreads across a whole country or the world.', '波及全国或全球的疾病。', '可数，亦作形容词定语。', 'The pandemic changed how people worked.', '大流行病改变了人们的工作方式。', [], ['epidemic'], 'noun', 'countable', '健康'],
  ], 'pandemics', ['epidemic'], 'pan- 前缀不作成分，成分词 demic 不在库，无成分级可继，留空（同 nonreader 先例）；家族/近义 epidemic 流行病、传染病');

  W('pane', 'noun', '/peɪn/', '', [], '窗格玻璃', 'A single sheet of glass in a window or door.', [
    ['窗格玻璃', 'A single sheet of glass in a window or door.', '门窗上的单块玻璃。', '可数，常与 of 连用。', 'A stone broke a pane of the greenhouse.', '一块石头砸碎了温室的一格玻璃。', ['window pane'], ['window'], 'noun', 'countable', '家居'],
  ], 'panes', ['window'], '古法语 pane（布片、条）——无库内可见词根，留空；家族/近义 window 窗户');

  W('pang', 'noun', '/pæŋ/', '', [], '（一阵）剧痛；一阵难受', 'A sudden sharp pain or a sudden strong feeling.', [
    ['（一阵）剧痛', 'A sudden sharp pain.', '突发的剧烈疼痛。', '可数，常复数。', 'She felt a pang in her side.', '她侧腹感到一阵剧痛。', ['pang of'], ['stitch', 'wrench'], 'noun', 'countable', '健康'],
    ['一阵难受', 'A sudden strong feeling such as guilt or regret.', '突发的强烈感受，如内疚或懊悔。', '可数，常与 of 连用。', 'He felt a pang of guilt.', '他感到一阵内疚。', [], [], 'noun', 'countable', '情感'],
  ], 'pangs', [], '拟声来源 pang——无库内可见词根，留空；近义 stitch 绞痛、wrench 扭伤与剧痛');

  W('papa', 'noun', '/pəˈpɑː/', '', [], '爸爸', 'Father, used by or with young children.', [
    ['爸爸', 'Father, used by or with young children.', '父亲，幼儿使用或用于幼儿。', '可数，口语、儿语。', 'Where is papa?', '爸爸在哪里？', [], [], 'noun', 'countable', '家庭'],
  ], 'papas', ['dad'], '18 世纪法语 papa——无库内可见词根，留空；家族 dad 爸爸；队列近义为空');

  W('parable', 'noun', '/ˈpærəbl/', '', [], '寓言', 'A short story that teaches a moral lesson.', [
    ['寓言', 'A short story that teaches a moral lesson.', '讲述道德教训的短故事。', '可数，宗教与文学常用。', 'The parable warns against greed.', '这则寓言警示人不可贪婪。', [], ['fable'], 'noun', 'countable', '文学'],
  ], 'parables', ['fable'], '希腊语 parabolē（对比、比喻）——无库内可见词根，留空；家族/近义 fable 寓言、寓言故事');

  W('paragon', 'noun', '/ˈpærəɡən/', '', [], '典范；完美榜样', 'A person or thing that is perfect or the best of its kind.', [
    ['典范；完美榜样', 'A person or thing that is perfect or the best of its kind.', '完美的人或同类中最好的事物。', '可数，常与 of 连用。', 'She is a paragon of patience.', '她是耐心的典范。', ['paragon of'], ['ideal'], 'noun', 'countable', '通用'],
  ], 'paragons', [], '意大利语 paragone（试金石）——无库内可见词根，留空；近义 ideal 理想典范');

  W('paramilitary', 'adjective', '/ˌpærəˈmɪlətri/', 'B2', [], '准军事的', 'Forming a force that works like an army but is not official.', [
    ['准军事的', 'Forming a force that works like an army but is not official.', '像军队一样行动但非官方编制的。', '多作定语。', 'Paramilitary groups patrolled the town.', '准军事组织在镇上巡逻。', [], ['militia'], 'adjective', '定语', '军事'],
  ], '', ['militia'], 'para- 前缀不作成分，取 military B2（军事的），B2 继承（同 non-military←military B2 先例，brief 显示 ←?）；家族/近义 militia 民兵组织');

  W('parasol', 'noun', '/ˈpærəsɒl/', '', [], '阳伞', 'A light umbrella used to give shade from the sun.', [
    ['阳伞', 'A light umbrella used to give shade from the sun.', '遮阳用的轻便伞。', '可数。', 'She carried a parasol on the beach.', '她在海滩上撑着一把阳伞。', [], ['umbrella'], 'noun', 'countable', '外貌'],
  ], 'parasols', [], '意大利语 parasole（挡太阳）——para- 前缀后成分 sol 不在库，留空；近义 umbrella 雨伞');

  W('pare', 'verb', '/peə/', '', [], '削皮；修剪', 'To cut the skin or outer part off a fruit or vegetable, or to reduce something.', [
    ['削皮', 'To cut the skin or outer part off a fruit or vegetable.', '削去水果或蔬菜的外皮。', '及物，常与 down/off 连用。', 'She pared the apples for the pie.', '她削好了做派的苹果。', ['pare down'], ['peel'], 'verb', '及物', '饮食'],
    ['削减', 'To reduce something gradually.', '逐步削减某物。', '及物，常与 down 连用。', 'They pared the costs to the minimum.', '他们把成本削减到了最低。', [], [], 'verb', '及物', '商务'],
  ], 'pares~pared~pared~paring', [], '拉丁 pirare（剃、削）——无库内可见词根，留空；近义 peel 削皮、剥皮');

  W('parental', 'adjective', '/pəˈrentəl/', 'A1', ['CET4'], '父母的', 'Relating to a mother or father.', [
    ['父母的', 'Relating to a mother or father.', '与母亲或父亲有关的。', '多作定语。', 'The school needs parental consent.', '学校需要家长同意。', ['parental guidance'], ['maternal'], 'adjective', '定语', '家庭'],
  ], '',['maternal', 'parent'], '←parent A1 + -al（透明后缀），A1 继承（brief 显示 ←?，自行扫根 parent）；近义 maternal 母亲的、母方的');

  W('parlour', 'noun', '/ˈpɑːlə/', '', [], '客厅；店堂', 'A room in a house for receiving guests, or a shop for a particular service.', [
    ['客厅；店堂', 'A room in a house for receiving guests, or a shop for a particular service.', '家中会客的房间，或提供某项服务的店堂。', '可数，英式旧称，美式作 parlor。', 'The funeral parlour stood on the corner.', '殡仪馆坐落在街角。', [], ['living-room', 'salon'], 'noun', 'countable', '家居'],
  ], 'parlours', [], '古法语 parleur（说话处）——无库内可见词根，留空；近义 living-room 客厅、salon 沙龙、营业室');

  W('parody', 'noun/verb', '/ˈpærədi/', '', [], '滑稽模仿；拙劣模仿', 'A funny copy of a work or style, or to copy something in a funny way.', [
    ['滑稽模仿作品', 'A funny copy of a book, film, or style.', '对书籍、电影或风格的滑稽仿作。', '可数。', 'The show is a parody of detective stories.', '这部剧是对侦探小说的滑稽模仿。', [], ['satire', 'takeoff'], 'noun', 'countable', '文化'],
    ['拙劣地模仿', 'To copy somebody or something in a way that makes it look silly.', '以令人发笑的方式模仿某人或某物。', '及物。', 'The actor parodied the politician.', '这名演员拙劣地模仿了那位政客。', [], [], 'verb', '及物', '文化'],
  ], 'parodies~parodied~parodied~parodying', ['satire', 'takeoff'], '希腊语 parōidia（戏仿歌曲）——无库内可见词根，留空；家族 satire 讽刺、takeoff 效仿之作，近义同');

  W('partake', 'verb', '/pɑːˈteɪk/', 'A1', [], '参与；享用', 'To take part in an activity or to share food and drink.', [
    ['参与', 'To take part in an activity.', '参加某项活动。', '不及物，常与 in 连用。', 'Everyone partook in the discussion.', '每个人都参与了讨论。', [], ['participate'], 'verb', '不及物', '通用'],
    ['享用', 'To eat or drink something.', '吃或喝某物。', '不及物，常与 of 连用，正式用语。', 'They partook of a simple supper.', '他们享用了简单的晚餐。', [], [], 'verb', '不及物', '饮食'],
  ], 'partakes~partook~partaken~partaking',['part', 'take'], 'part + take 复合（首成分 part A1 在库），A1 继承（minibus 首成分模式，brief 显示 ←?）；近义 participate 参与');

  W('partial', 'adjective', '/ˈpɑːʃl/', 'A1', ['CET4'], '部分的；偏袒的', 'Not complete, or favoring one side unfairly.', [
    ['部分的', 'Not complete; only part of something.', '不完整的；只是一部分。', '多作定语。', 'There was only partial success.', '只取得了部分成功。', ['partial recovery'], ['half'], 'adjective', '定语/表语', '通用'],
    ['偏袒的', 'Favoring one person or side unfairly.', '不公平地偏向某人或某方。', '表语，常与 to 连用。', 'The judge was partial to old students.', '这名裁判偏袒自己的旧生。', [], ['halfway'], 'adjective', '表语', '通用'],
  ], '',['halfway', 'part'], '←part A1 + -ial（-al 变体，透明后缀），A1 继承（brief 显示 ←?，自行扫根 part）；家族 halfway 半途的，近义 half 一半、halfway 半途的');

  W('partially', 'adverb', '/ˈpɑːʃəli/', 'A1', ['CET4'], '部分地；不完全地', 'To some extent but not completely.', [
    ['部分地；不完全地', 'To some extent but not completely.', '在某种程度上但不完全。', '修饰动词或形容词。', 'The road is partially closed.', '这条路部分封闭。', [], ['part', 'partly'], 'adverb', 'null', '通用'],
  ], '',['partly', 'part'], '←part A1 + -ly（副词后缀），A1 继承（brief 显示 ←?，自行扫根 part）；家族 partly 部分地，近 part 一部分、partly 部分地');

  W('participant', 'noun', '/pəˈtɪsɪpənt/', 'B1', ['CET4'], '参与者；参加者', 'A person who takes part in an activity or event.', [
    ['参与者；参加者', 'A person who takes part in an activity or event.', '参加某活动或事件的人。', '可数，常与 in 连用。', 'All participants signed the form.', '所有参与者都签了表。', ['participant in'], ['member', 'party'], 'noun', 'countable', '通用'],
  ], 'participants',['member', 'participate'], '←participate B1 + -ant（施事后缀，e→ant），B1 继承（brief 显示 ←?，自行扫根 participate）；家族 member 成员，近 party 参与方、当事人');

  W('participation', 'noun', '/ˌpɑːtɪsɪˈpeɪʃn/', 'B1', ['CET4'], '参与；参加', 'The act of taking part in something.', [
    ['参与；参加', 'The act of taking part in something.', '参加某事的行为。', '不可数，常与 in 连用。', 'Student participation is encouraged.', '鼓励学生参与。', ['take part in'], ['turnout'], 'noun', 'uncountable', '社会'],
  ], '',['participate'], '←participate B1 + -ation（e→a 名化），B1 继承（brief 显示 ←?，自行扫根 participate）；近义 turnout 出席人数、投票率');

  W('particularly', 'adverb', '/pəˈtɪkjəli/', 'B1', ['CET4'], '特别；尤其', 'More than usually or more than other things.', [
    ['特别；尤其', 'More than usually or more than other things.', '超出平常或其他事物的程度。', '修饰形容词、副词或动词。', 'I particularly liked the ending.', '我特别喜欢这个结尾。', [], ['especially'], 'adverb', 'null', '语法'],
  ], '',['especially', 'particular'], '←particular B1 + -ly（副词后缀），B1 继承（brief 根提示）；家族/近义 especially 尤其、特别');
})(typeof window !== 'undefined' ? window : globalThis);
