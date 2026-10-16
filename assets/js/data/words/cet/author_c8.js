/* data/words/cet/author_c8.js · 手敲词条 C（八）：celebration ~ circular（含 3 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_c8.js 必须在 _cet_helper.js 之后加载');

  W('celebration', 'noun', '/ˌselɪˈbreɪʃn/', 'A2', ['CET4'], '庆祝；庆祝会', 'A special event or party held to celebrate something.', [
    ['庆祝；庆祝会', 'A special event or party held to celebrate something.', '为庆祝某事而举办的特别活动或聚会。', '可数或不可数：hold a celebration。', 'The celebration lasted all night.', '庆祝活动持续了一整夜。', ['hold a celebration'], ['festival', 'party'], 'noun', 'uncountable/countable', '文化'],
  ], 'celebrations', ['festival'], '←celebrate A2 庆祝 + -ion，A2 继承；家族 festival 节日（公共庆典）、近义 party 宴会（私人聚会）');

  W('cellphone', 'noun', '/ˈselfəʊn/', 'B2', [], '手机；移动电话', 'A telephone that you can carry with you and use anywhere.', [
    ['手机；移动电话', 'A telephone that you can carry with you and use anywhere.', '可以随身携带、在任何地方使用的电话。', '可数，美式常用，英式多说 mobile。', 'She left her cellphone at home.', '她把手机落在家里了。', ['a new cellphone'], ['mobile'], 'noun', 'countable', '科技'],
  ], 'cellphones', ['cell', 'phone'], 'cell 小单元 + phone 电话，取首成分级 B2；近义 mobile 手机（英式）');

  W('cells', 'noun', '/selz/', 'B2', [], '细胞；牢房（复数）', 'The smallest living parts of a body, or small rooms in a prison.', [
    ['细胞；牢房（复数）', 'The smallest living parts of a body, or small rooms in a prison.', '身体中最小的生命单位，或监狱中的小房间（复数形式）。', '复数形式，常见 body cells（体细胞）。', 'The drug kills cancer cells.', '这种药能杀死癌细胞。', ['body cells'], ['tissue'], 'noun', 'uncountable/countable', '健康'],
  ], '', ['tissue'], '←cell B2 + -s（复数专义），B2 继承；家族 tissue 组织（由细胞构成）');

  W('central', 'adjective', '/ˈsentrəl/', 'A2', ['CET4'], '中心的；中央的', 'In or near the middle of a place, or most important.', [
    ['中心的；中央的', 'In or near the middle of a place, or being the most important.', '位于某地中间或靠近中间的，或最重要的。', '常见 central location/role（中心位置、核心作用）。', 'The hotel has a central location.', '酒店地段居中。', ['central role'], ['core', 'downtown', 'federal', 'middle', 'nuclear'], 'adjective', '定语', '通用'],
  ], '', ['core', 'federal', 'middle'], '←center A2 中心 + -al，A2 继承；家族 core 核心、federal 中央的、middle 中间的，近义 downtown 市中心的、nuclear 核心的');

  W('centre on', 'verb', '/ˌsentə ˈɒn/', '', [], '以……为中心', 'To have something as its main subject or interest.', [
    ['以……为中心', 'To have something as its main subject or interest.', '以某事为主要主题或关注点。', '及物：centre on sth。', 'The talk centred on energy costs.', '讲座以能源成本为中心。', ['centre on'], ['revolve'], 'verb', '及物', '通用'],
  ], '', [], 'centre 中心 + on；近义 revolve 以……为中心旋转（revolve around 更强调环绕）。分级留空').phrase = true;

  W('centrist', 'noun/adjective', '/ˈsentrɪst/', 'A2', [], '中间派的；中间派（的人）', 'Supporting moderate views between the left and the right, or a person who does.', [
    ['中间派（的人）', 'A person or party in politics who supports moderate views between left and right.', '政治上支持左右之间温和立场的人或政党。', '可数或作形容词。', 'Voters moved toward the centrist candidate.', '选民转向了中间派候选人。', [], ['moderate'], 'noun', 'countable', '政治'],
    ['中间派的；温和派的', 'Supporting moderate political views between the left and the right.', '支持左右之间温和政治立场的。', '作定语。', 'They backed a centrist platform.', '他们支持一份中间派纲领。', [], [], 'adjective', '定语', '政治'],
  ], 'centrists', ['center'], '←center A2 中心 + -ist（表人），A2 继承；近义 moderate 温和派（不强调左右位置）');

  W('ceramics', 'noun', '/sɪˈræmɪks/', '', [], '制陶术；陶瓷制品', 'The art of making objects from baked clay, or the objects themselves.', [
    ['制陶术；陶瓷学', 'The art of making objects from clay that is baked in a heat.', '用黏土经高温烧制器物的艺术。', '不可数，工艺与学科。', 'She took a class in ceramics.', '她上了一门陶艺课。', ['studio ceramics'], ['pottery'], 'noun', 'uncountable', '艺术'],
    ['陶瓷制品（复数）', 'Objects or dishes made of clay that has been baked.', '用烧制黏土制成的器物或餐具。', '常作复数。', 'The museum displayed ancient ceramics.', '博物馆展出古代陶瓷。', [], [], 'noun', 'uncountable/countable', '艺术'],
  ],'ceramics', ['pottery'], '←ceramic（本词库无可靠分级）+ -s，故留空；家族 pottery 陶器（统称、手工陶）');

  W('cerebral', 'adjective', '/ˈserɪbrəl/', '', [], '大脑的；智力的', 'Connected with the brain, or based on thinking rather than feeling.', [
    ['大脑的；智力的', 'Connected with the brain, or based on thinking rather than feeling.', '与大脑有关的，或基于思考而非感情的。', '常见 cerebral palsy（脑瘫）。', 'The injury caused cerebral damage.', '这次损伤造成了脑部伤害。', ['cerebral palsy'], ['intellectual'], 'adjective', '定语', '健康'],
  ], '', ['intellectual'], '拉丁 cerebr-（脑）；近义 intellectual 智力的（强调理性思维）。分级留空');

  W('ceremonial', 'adjective/noun', '/ˌserɪˈməʊniəl/', 'B1', ['CET4'], '仪式的；典礼', 'Connected with a ceremony, or a formal public event with special rites.', [
    ['仪式的；礼节的', 'Connected with a ceremony, or used in a ceremony.', '与仪式有关的，或用于仪式的。', '常见 ceremonial role/occasion（仪式性角色、场合）。', 'The president took part in the ceremonial opening.', '总统参加了仪式性的开幕。', ['a ceremonial role'], ['formal', 'ritual'], 'adjective', '定语', '文化'],
    ['典礼；仪式', 'A formal public event with special rites.', '有特殊礼仪的正式公共活动。', '可数。', 'The ceremonial included a torch lighting.', '典礼包含点火环节。', [], [], 'noun', 'countable', '文化'],
  ], '', ['ceremony'], '←ceremony B1 典礼 + -al，B1 继承；近义 formal 正式的、ritual 仪式性（重复固定行为）');

  W('certainly', 'adverb', '/ˈsɜːtnli/', 'A2', ['CET4'], '当然；无疑', 'Used to give emphasis, or to say yes politely.', [
    ['当然；无疑', 'Used to give emphasis to what you are saying, or to say yes politely.', '用于加强所说话语的语气，或礼貌地表示同意。', '口语中 certainly = of course。', 'Certainly, I will send it today.', '当然，我今天就发。', ['certainly not'], ['absolutely', 'indeed', 'means', 'sure', 'undoubtedly'], 'adverb', 'null', '通用'],
  ], '', ['undoubtedly'], '←certain A2 确定的 + -ly，A2 继承；家族 undoubtedly 无疑地，近义 absolutely 绝对地、indeed 确实、sure 好的（口语应答）、means 意味着（近形干扰）');

  W('certainty', 'noun', '/ˈsɜːtnti/', 'A2', ['CET4'], '必然；确信', 'Something that is sure to happen, or the state of being sure.', [
    ['必然；确信', 'Something that is sure to happen, or the state of being sure.', '必定发生的事，或确信的状态。', '可数或不可数：a certainty。', 'Winning was never a certainty.', '获胜从来都不是板上钉钉的事。', ['for a certainty'], ['inevitable'], 'noun', 'uncountable/countable', '通用'],
  ], 'certainties', ['certain'], '←certain A2 + -ty（抽象名词），A2 继承；近义 inevitable 必然发生的（多修饰事件）');

  W('cetacean', 'noun/adjective', '/sɪˈteɪʃn/', '', [], '鲸目的；鲸目动物', 'Connected with whales, dolphins, and porpoises, or an animal of this group.', [
    ['鲸目的；鲸目动物', 'Connected with whales, dolphins, and porpoises, or an animal of this group.', '与鲸、海豚、鼠海豚有关的，或该类动物。', '可作形容词或可数名词，科学用语。', 'Cetaceans include whales and dolphins.', '鲸目动物包括鲸和海豚。', ['cetacean species'], ['whale'], 'noun', 'countable', '动物'],
  ], 'cetaceans', ['whale'], '拉丁 cetus（鲸）；家族 whale 鲸（通称）。分级留空');

  W('chafe', 'verb', '/tʃeɪf/', '', [], '擦伤；恼怒', 'To become sore by rubbing, or to feel impatient with a restriction.', [
    ['擦伤；擦痛', 'To make sore by rubbing, or to become sore from rubbing.', '因摩擦而擦痛，或被磨伤。', '不及物或及物：chafe against/from。', 'The stiff collar chafed his neck.', '硬领擦得他脖子疼。', ['chafe against'], ['irritate'], 'verb', '及物/不及物', '健康'],
    ['恼怒；烦躁', 'To become impatient or annoyed because of a restriction.', '因受限而感到不耐烦或恼火。', '不及物：chafe at sth。', 'She chafed at the strict rules.', '她对严格的规定感到恼火。', ['chafe at'], [], 'verb', '不及物', '书面'],
  ], 'chafes~chafed~chafed~chafing', [], '近义 irritate 激怒、刺激（通用、可及物）；chafe 兼有磨痛与烦躁义。分级留空');

  W('championship', 'noun', '/ˈtʃæmpiənʃɪp/', 'B1', ['CET4'], '冠军称号；锦标赛', 'The position of being the winner, or a series of contests to find the best.', [
    ['冠军称号；冠军地位', 'The position of being the winner of a competition, or the title itself.', '比赛获胜者的位置或称号。', '可数：win the championship。', 'The team won the championship in 2019.', '该队在 2019 年夺得冠军。', ['win the championship'], ['final', 'title', 'tournament'], 'noun', 'countable', '体育'],
    ['锦标赛；冠军赛', 'A series of contests to find the best player or team.', '决出最佳选手或队伍的一系列比赛。', '可数，如 the World Championships。', 'She entered the national championship.', '她参加了全国锦标赛。', [], [], 'noun', 'countable', '体育'],
  ], 'championships', ['tournament'], '←champion B1 冠军 + -ship，B1 继承；家族 tournament 锦标赛、近义 final 决赛、title 头衔');

  W('changeable', 'adjective', '/ˈtʃeɪndʒəbl/', 'A1', [], '易变的；多变的', 'Likely to change often, or varying.', [
    ['易变的；多变的', 'Likely to change often, or varying a lot.', '容易经常变化的，或变化不定的。', '常见 changeable weather（多变天气）。', 'The weather here is very changeable.', '这里天气很多变。', ['changeable weather'], ['fluid', 'volatile'], 'adjective', '定语', '通用'],
  ], '', ['fluid', 'volatile'], '←change A1 变化 + -able，A1 继承；家族 fluid 流动的、volatile 易变的（化学义亦挥发）');

  W('changing', 'adjective', '/ˈtʃeɪndʒɪŋ/', 'A1', [], '变化中的；正在改变的', 'That is changing or that is not fixed.', [
    ['变化中的；正在改变的', 'That is changing, or that is not fixed.', '正在发生变化的，或并非固定不变的。', '常见 changing world/needs（变化的世界、需求）。', 'We live in a changing world.', '我们生活在一个不断变化的世界里。', ['changing needs'], ['dynamic'], 'adjective', '定语', '通用'],
  ], '', ['change'], '←change A1 + -ing，A1 继承；近义 dynamic 动态的（强调活跃变化）');

  W('chap', 'noun/verb', '/tʃæp/', '', [], '家伙；（皮肤）皲裂', 'A man or boy in a friendly sense, or for skin to crack from cold.', [
    ['家伙；小伙子（英式口语）', 'A man or boy, used in a friendly way (British informal).', '对男子或男孩的友好称呼（英式口语）。', '可数。', 'He is a decent chap.', '他是个不错的家伙。', ['a decent chap'], ['fellow'], 'noun', 'countable', '口语'],
    ['（皮肤）皲裂；变粗糙', 'Of skin, to crack and become sore because of cold or dryness.', '皮肤因寒冷或干燥而开裂疼痛。', '不及物，常见 chapped lips（干裂的唇）。', 'His lips chapped in the wind.', '他的嘴唇被风吹裂了。', [], [], 'verb', '不及物', '健康'],
  ], 'chaps~chapped~chapped~chapping', [], '第一义近义 fellow 家伙（通用）；第二义 chapped lips 干裂唇。分级留空');

  W('characteristic', 'adjective/noun', '/ˌkærəktəˈrɪstɪk/', 'A2', ['CET4'], '典型的；特征', 'Typical of a person or thing, or a distinctive feature of it.', [
    ['典型的；特有的', 'Typical of a particular person, group, or thing.', '某个人、群体或事物典型的。', '作定语，常见 be characteristic of。', 'This design is characteristic of the period.', '这种设计是该时期的典型风格。', ['characteristic behaviour'], ['typical'], 'adjective', '定语', '通用'],
    ['特征；特点', 'A feature or quality that is typical of someone or something.', '某人某物典型的特征或特质。', '可数：a characteristic of。', 'Patience is a characteristic of good teachers.', '耐心是好老师的特征。', ['a characteristic of'], ['feature', 'property', 'trait'], 'noun', 'countable', '通用'],
  ], 'characteristics', ['feature', 'trait', 'typical'], '←character A2 特征 + -istic，A2 继承；家族 feature 特征、trait 特性、typical 典型的，近义 property 属性');

  W('characters', 'noun', '/ˈkærəktəz/', 'A2', [], '角色；字体（复数）', 'People in a story or play, or the signs used in writing.', [
    ['角色；字体（复数）', 'People in a story or play, or the signs used in writing.', '故事或戏剧中的人物，或书写的符号（复数形式）。', '复数形式，常见 fictional characters。', 'The characters in the novel feel real.', '小说中的角色栩栩如生。', ['fictional characters'], ['script'], 'noun', 'countable', '文化'],
  ], '', ['script'], '←character A2 + -s（复数专义），A2 继承；近义 script 文字/剧本（书写系统或脚本）');

  W('charged', 'adjective', '/tʃɑːdʒd/', 'B1', [], '被控告的；带电的', 'Accused of a crime, or containing electricity or strong feeling.', [
    ['被控告的', 'Formally accused of a crime and brought before a court.', '被正式指控犯罪并被带上法庭的。', '作定语或表语：charged with sth。', 'The charged suspect denied everything.', '被控的嫌疑人否认了一切。', ['charged with'], ['accused'], 'adjective', '定语/表语', '法律'],
    ['带电的；充满（情绪）的', 'Containing a large amount of electricity, or full of strong feeling.', '带有大量电荷的，或充满强烈情绪的。', '常见 charged wire、a charged atmosphere（紧张气氛）。', 'The wire was still charged.', '这根导线仍带电。', ['a charged atmosphere'], ['live'], 'adjective', '定语', '科技'],
  ], '', ['charge'], '←charge B1 + -ed，B1 继承；近义 accused 被指控的、live 带电的（a live wire 通着电的）');

  W('charitable', 'adjective', '/ˈtʃærətəbl/', 'B1', ['CET4'], '慈善的；慷慨的', 'Giving money or help to people who are poor or in need.', [
    ['慈善的；慷慨的', 'Giving money or help to people who are poor or in need.', '向贫困或需要帮助的人捐钱或提供帮助的。', '常见 charitable organization（慈善机构）。', 'The firm made a charitable donation.', '公司作了慈善捐赠。', ['a charitable donation'], ['generous'], 'adjective', '定语', '社会'],
  ], '', ['generous'], '←charity B1 慈善 + -able，B1 继承；近义 generous 慷慨的（个人品质）');

  W('chasm', 'noun', '/ˈkæzəm/', '', [], '深渊；深谷；巨大差距', 'A very deep crack in the ground, or a big difference between two things.', [
    ['深渊；深谷', 'A very deep crack or hole in the ground.', '地面上非常深的裂缝或坑洞。', '可数，书面语。', 'They stood at the edge of a deep chasm.', '他们站在深谷边缘。', ['a deep chasm'], ['abyss'], 'noun', 'countable', '科学'],
    ['（喻）巨大差距', 'A very big difference between two people or groups.', '两个人或群体之间的巨大差异。', '可数：a chasm between。', 'A chasm opened up between the two parties.', '两党之间裂开了鸿沟。', ['a chasm between'], [], 'noun', 'countable', '政治'],
  ], 'chasms', ['abyss'], '家族 abyss 深渊（无底、喻鸿沟）；chasm 具体裂缝，亦喻 a chasm between。分级留空');

  W('chat up', 'verb', '/ˌtʃæt ˈʌp/', '', [], '搭讪；调情（英式）', 'To talk to someone in a friendly way because you are attracted to them.', [
    ['搭讪；调情（英式）', 'To talk to someone in a friendly way because you are attracted to them.', '因为对某人有好感而友好地搭话。', '及物，英式口语。', 'He chatted her up at the bar.', '他在酒吧和她搭讪。', [], ['flirt'], 'verb', '及物', '口语'],
  ], '', ['flirt'], 'chat 聊天 + up；近义 flirt 调情（双方互动、不及物）。短语分级留空').phrase = true;

  W('chatter', 'verb/noun', '/ˈtʃætə(r)/', 'A2', [], '喋喋不休；叽喳声', 'To talk continuously about unimportant things, or a rapid short sound.', [
    ['喋喋不休；唠叨', 'To talk continuously about unimportant things.', '不停地谈论无关紧要的事。', '不及物或及物。', 'He chattered on about his holiday.', '他喋喋不休地讲他的假期。', ['chatter away'], ['jaw'], 'verb', '不及物', '口语'],
    ['（牙齿打战）声；鸣叫声', 'A rapid short sound made by teeth, birds, or machines.', '牙齿、鸟或机器发出的急促短声。', '不可数或可数。', 'Her teeth chattered with cold.', '她的牙齿冷得打战。', [], [], 'noun', 'uncountable', '通用'],
  ], 'chatters~chattered~chattered~chattering', ['jaw'], '←chat A2 闲聊 + -er，A2 继承；家族 jaw 下巴/唠叨（jaw on 唠叨，俚语）');

  W('checkpoint', 'noun', '/ˈtʃekpɔɪnt/', 'A1', [], '检查站；关卡', 'A place where people or vehicles are stopped so that they can be examined.', [
    ['检查站；关卡', 'A place where people or vehicles are stopped so that they can be examined.', '对人或车辆进行检查的地点。', '可数，常见 border checkpoint（边检站）。', 'Soldiers manned the checkpoint at dawn.', '士兵们在黎明时把守检查站。', ['a border checkpoint'], ['customs'], 'noun', 'countable', '政治'],
  ], 'checkpoints', ['check', 'point'], 'check 检查 + point 地点，取首成分级 A1；近义 customs 海关（出入境查验机构）');

  W('checkup', 'noun', '/ˈtʃekʌp/', '', [], '体检；健康检查', 'A medical examination to see how healthy you are.', [
    ['体检；健康检查', 'A medical examination to see how healthy you are.', '检查健康状况的医学检查。', '可数：have a checkup（做体检）。', 'He went for a yearly checkup.', '他去做年度体检。', ['a medical checkup'], ['medical', 'physical'], 'noun', 'countable', '健康'],
  ], 'checkups', [], 'check + up 短语动词名词化（同 buildup 先例）；近义 medical check 体检、physical check 体格检查。分级留空');

  W('cheep', 'verb/noun', '/tʃiːp/', '', [], '（雏鸟）啾啾叫', 'To make the short high sound of a young bird.', [
    ['（雏鸟）啾啾叫', 'To make the short high sound of a young bird.', '发出雏鸟般的短促高声。', '不及物，拟声词。', 'The chicks cheeped in the box.', '小鸡在箱子里啾啾叫。', ['cheep softly'], ['peep'], 'verb', '不及物', '动物'],
  ], 'cheeps~cheeped~cheeped~cheeping', [], '拟声词；近义 peep 叽叽叫（更细弱）；cheep 为雏鸟叫声。分级留空');

  W('cheerful', 'adjective', '/ˈtʃɪəfl/', 'A2', ['CET4'], '快乐的；令人愉快的', 'Happy and positive, or making people feel happy.', [
    ['快乐的；令人愉快的', 'Happy and positive, or making people feel happy.', '快乐积极的，或令人感到愉快的。', '常见 cheerful smile/greeting。', 'She gave us a cheerful welcome.', '她给了我们热情的欢迎。', ['a cheerful smile'], ['gay', 'glad', 'happy', 'jolly', 'merry'], 'adjective', '定语/表语', '通用'],
  ], '', ['gay', 'jolly', 'merry'], '←cheer A2 欢呼 + -ful，A2 继承；家族 gay 快乐的（旧义）、jolly 快活的、merry 愉快的，近义 glad 高兴的、happy 幸福的');

  W('chemical', 'adjective/noun', '/ˈkemɪkl/', 'A2', ['CET4'], '化学的；化学品', 'Connected with chemistry, or a substance made by a chemical process.', [
    ['化学的', 'Connected with chemistry or made using chemical processes.', '与化学有关的，或经化学过程制成的。', '常见 chemical reaction（化学反应）。', 'The experiment tested a chemical reaction.', '这个实验测试了一种化学反应。', ['chemical reaction'], ['pesticide', 'petrochemical'], 'adjective', '定语', '科学'],
    ['化学品；化学制品', 'A substance used in or made by a chemical process.', '化学过程使用的或制成的物质。', '可数，常见 harmful chemicals。', 'The river was polluted by industrial chemicals.', '河流被工业化学品污染。', ['harmful chemicals'], [], 'noun', 'countable', '科学'],
  ], 'chemicals', ['pesticide', 'petrochemical'], '←chemistry A2 化学 + -al，A2 继承；家族 pesticide 农药、petrochemical 石化产品');

  W('chemical-free', 'adjective', '/ˌkemɪkl ˈfriː/', 'A2', [], '不含化学物质的；不使用化学品的', 'Not containing or not using chemical substances.', [
    ['不含化学物质的；不使用化学品的', 'Not containing or not using chemical substances.', '不含或不使用化学物质的。', '连字符复合形容词，常见于食品与清洁品。', 'They sell chemical-free cleaners.', '他们售卖无化学添加的清洁剂。', [], ['organic'], 'adjective', '定语', '饮食'],
  ], '', ['organic'], 'chemical 化学的 + free 无……的，取首成分级 A2；近义 organic 有机的（种植不施化肥农药）');

  W('chemist', 'noun', '/ˈkemɪst/', 'A2', ['CET4'], '化学家；药剂师', 'A scientist who works with chemicals, or a person who prepares and sells medicines.', [
    ['化学家；药剂师', 'A scientist who works with chemicals, or a person who prepares and sells medicines (British).', '研究化学的科学家，或配药卖药的人（英式）。', '可数；英式 chemist shop 指药店。', 'She trained as a chemist before teaching.', '她在任教前受训做药剂师。', ['a research chemist'], ['pharmacy'], 'noun', 'countable', '科学'],
  ], 'chemists', ['pharmacy'], '←chemistry A2 化学 + -ist，A2 继承；家族 pharmacy 药房（配售药场所）；英式 chemist = 美式 drugstore 药店');

  W('cherished', 'adjective', '/ˈtʃerɪʃt/', '', [], '珍爱的；珍藏的', 'Loved or cared for very much.', [
    ['珍爱的；珍藏的', 'Loved or cared for very much.', '被深深喜爱或珍视的。', '作定语：cherished memory（珍藏的回忆）。', 'The ring was his most cherished possession.', '这枚戒指是他最珍爱的物品。', ['a cherished memory'], ['fond', 'precious'], 'adjective', '定语', '通用'],
  ], '', ['fond', 'precious'], '←cherish（本词库无可靠分级）+ -ed，故留空；近义 fond 喜爱的（be fond of）、precious 珍贵的');

  W('chessman', 'noun', '/ˈtʃesmən/', 'A2', [], '国际象棋棋子', 'Any of the pieces used in the game of chess.', [
    ['国际象棋棋子', 'Any of the pieces used in the game of chess.', '国际象棋中使用的棋子。', '可数，复数 chessmen；较正式，多说 chess piece。', 'She captured a chessman with her bishop.', '她用象吃掉一个棋子。', [], ['queen'], 'noun', 'countable', '体育'],
  ], 'chessmen', ['chess', 'man'], 'chess A2 国际象棋 + man（子），取首成分级 A2；近义 queen 后（其中一枚）；整套多说 chess piece');

  W('chevron', 'noun', '/ˈʃevrɒn/', '', [], 'V形臂章；人字纹', 'A V-shaped sign or pattern, used on uniforms or roads.', [
    ['V形臂章；人字纹', 'A V-shaped sign or pattern, used on uniforms or roads.', 'V形标志或图案，用于制服或道路。', '可数，制服与道路用语。', 'Two chevrons marked his rank.', '两道V形臂章标示他的军衔。', ['a chevron pattern'], ['stripe'], 'noun', 'countable', '外貌'],
  ], 'chevrons', [], '法语借词；近义 stripe 条纹（统称、直线）；chevron 特指V形或人字形。分级留空');

  W('chewy', 'adjective', '/ˈtʃuːi/', 'B1', [], '有嚼劲的；耐嚼的', 'Firm and slightly hard to bite, needing to be chewed a lot.', [
    ['有嚼劲的；耐嚼的', 'Firm and slightly hard to bite, needing to be chewed a lot.', '略硬而有韧劲、需要多嚼的。', '多用于形容食物，中性或褒义。', 'The bread was chewy but tasty.', '这面包有嚼头，而且好吃。', ['chewy texture'], ['tough'], 'adjective', '定语', '饮食'],
  ], '', ['tough'], '←chew B1 咀嚼 + -y，B1 继承；近义 tough 嚼不动的（多含贬义）');

  W('chickens', 'noun', '/ˈtʃɪkɪnz/', 'A1', [], '鸡；鸡肉（复数）', 'Birds kept on farms for their meat and eggs, or their flesh as food.', [
    ['鸡；鸡肉（复数）', 'Birds kept on farms for their meat and eggs, or their flesh as food.', '农场饲养供肉供蛋的家禽，或食用的鸡肉（复数形式）。', '复数形式；live chickens 指活鸡。', 'The chickens were shut in the coop at night.', '夜里鸡被关进了鸡舍。', ['keep chickens'], ['poultry'], 'noun', 'uncountable/countable', '动物'],
  ], '', ['poultry'], '←chicken A1 鸡 + -s（复数专义），A1 继承；家族 poultry 家禽（统称，含鸡鸭鹅）');

  W('childbirth', 'noun', '/ˈtʃaɪldbɜːθ/', 'A1', [], '分娩；生产', 'The act of giving birth to a baby.', [
    ['分娩；生产', 'The act of giving birth to a baby.', '分娩婴儿的过程。', '不可数：prepare for childbirth（为分娩做准备）。', 'She prepared for childbirth with classes.', '她通过上课为分娩做准备。', ['after childbirth'], ['labor'], 'noun', 'uncountable', '健康'],
  ], '', ['child', 'birth'], 'child 孩子 + birth 出生，取首成分级 A1；近义 labor 临产（分娩第一阶段）。');

  W('childhood', 'noun', '/ˈtʃaɪldhʊd/', 'A1', [], '童年；幼年', 'The period of life when you are a child.', [
    ['童年；幼年', 'The period of life when you are a child.', '人还是孩子时的那段时期。', '可数或不可数：in childhood。', 'He spent his childhood by the sea.', '他的童年是在海边度过的。', ['in childhood'], ['youth'], 'noun', 'uncountable/countable', '社会'],
  ], 'childhoods', ['child'], '←child A1 + -hood（时期），A1 继承；近义 youth 青少年时期（紧接童年之后）');

  W('childish', 'adjective', '/ˈtʃaɪldɪʃ/', 'A1', ['CET4'], '幼稚的；孩子气的', 'Unsuitable for an adult, behaving like a child.', [
    ['幼稚的；孩子气的', 'Unsuitable for an adult; behaving like a child.', '不适合成年人的、像小孩子一样的。', '贬义，指成年人不成熟。', 'It was childish to argue over such a small thing.', '为这点小事争吵很幼稚。', ['childish behaviour'], ['juvenile'], 'adjective', '定语/表语', '通用'],
  ], '', ['juvenile'], '←child A1 + -ish（似……的），A1 继承；近义 juvenile 幼稚的（正式、法律义指未成年）');

  W('childlike', 'adjective', '/ˈtʃaɪldlaɪk/', 'A1', [], '天真的；孩子般的', 'Having the good qualities of a child, such as innocence or trust.', [
    ['天真的；孩子般的', 'Having the good qualities of a child, such as innocence or trust.', '具有孩子的美好品质，如天真或信任。', '褒义，与 childish 相对。', 'She spoke with childlike honesty.', '她说话带着孩子般的坦诚。', ['childlike innocence'], ['innocent'], 'adjective', '定语', '通用'],
  ], '', ['innocent'], '←child A1 + like（如……的），A1 继承；近义 innocent 天真的（无邪、不谙世事）');

  W('chiller', 'noun', '/ˈtʃɪlə(r)/', '', [], '冷藏器；冷冻设备', 'A machine or container that makes food or drinks very cold.', [
    ['冷藏器；冷冻设备', 'A machine or container that makes food or drinks very cold.', '使食物饮料变冷的机器或容器。', '可数，工业与商业用语。', 'The chiller kept the fruit fresh.', '冷藏器让水果保持新鲜。', ['a blast chiller'], ['refrigerator'], 'noun', 'countable', '工业'],
  ], 'chillers', ['refrigerator'], '←chill（本词库无可靠分级）+ -er，故留空；家族 refrigerator 冰箱（家用冷藏设备）；亦指惊悚作品');

  W('chilly', 'adjective', '/ˈtʃɪli/', '', ['CET4'], '寒冷的；冷飕飕的', 'Fairly cold, or making you feel cold.', [
    ['寒冷的；冷飕飕的', 'Fairly cold; making you feel cold.', '颇冷的、让人觉得冷的。', '比 cold 温和，常见 a chilly room。', 'The room was chilly and damp.', '房间又冷又潮。', ['a chilly wind'], ['cold', 'cool'], 'adjective', '定语/表语', '通用'],
  ], '', ['cold', 'cool'], '←chill（本词库无可靠分级）+ -y，故留空；家族 cold 冷的、cool 凉的（cool 介于温和与冷之间）');

  W('chime', 'noun/verb', '/tʃaɪm/', '', [], '钟声；鸣响', 'The musical sound made by bells or a clock, or to make that sound.', [
    ['钟声；鸣响', 'The musical sound made by bells or a clock.', '钟或时钟发出的乐音。', '不可数或可数：the chime of bells。', 'The chime of bells marked noon.', '钟声宣告正午到来。', ['the chime of bells'], ['ring'], 'noun', 'uncountable', '通用'],
    ['鸣响；报时', 'Of a clock or bells, to make a musical sound.', '钟或铃发出乐音。', '不及物或及物：chime the hour。', 'The clock chimed six times.', '钟敲了六下。', ['chime the hour'], ['toll'], 'verb', '及物/不及物', '通用'],
  ], 'chimes~chimed~chimed~chiming', [], '拟声词；近义 ring 鸣响（通用）、toll 慢重鸣钟（丧钟）。分级留空');

  W('chimpanzee', 'noun', '/ˌtʃɪmpənˈziː/', '', [], '黑猩猩', 'A large monkey-like animal found in Africa, very close to humans.', [
    ['黑猩猩', 'A large monkey-like animal found in Africa, very close to humans.', '非洲的大型类人动物，与人类非常接近。', '可数，常简称 chimp。', 'Chimpanzees use tools to find food.', '黑猩猩会使用工具取食。', ['a troop of chimpanzees'], ['ape'], 'noun', 'countable', '动物'],
  ], 'chimpanzees', [], '班图语借词；近义 ape 类人猿（统称、无尾）。分级留空');

  W('chips', 'noun', '/tʃɪps/', 'B1', [], '炸薯条；薯片（复数）', 'Long thin pieces of fried potato, or thin crisp slices of potato.', [
    ['炸薯条；薯片（复数）', 'Long thin pieces of fried potato, or thin crisp slices of potato.', '油炸的长条土豆，或薄脆的土豆片。', '复数形式；英式 chips 指薯条、crisps 指薯片。', 'We had fish and chips for lunch.', '我们午饭吃了炸鱼和薯条。', ['a portion of chips'], ['fry'], 'noun', 'uncountable/countable', '饮食'],
  ], '', ['fry'], '←chip B1 薄片 + -s（复数专义），B1 继承；近义 fry 油炸（制作方式）；美式 fries 薯条');

  W('chirp', 'verb/noun', '/tʃɜːp/', '', [], '（鸟、虫）啁啾', 'To make a short high sound like a small bird or insect.', [
    ['（鸟、虫）啁啾；吱喳', 'To make a short high sound like a small bird or insect.', '发出小鸟或昆虫般的短促高声。', '不及物，拟声词。', 'The crickets chirped all night.', '蟋蟀叫了一整夜。', ['chirp softly'], ['peep', 'sing'], 'verb', '不及物', '动物'],
  ], 'chirps~chirped~chirped~chirping', [], '近义 peep 叽叽叫（雏鸟）、sing 唱歌（鸣禽有旋律）。分级留空');

  W('chock', 'noun/verb', '/tʃɒk/', '', [], '掩木；楔住', 'A block used to keep something from moving, or to hold it steady that way.', [
    ['掩木；楔子', 'A block or wedge used to keep something from moving.', '防止某物移动的木块或楔子。', '可数，常见 wheel chock（车轮掩木）。', 'They put a chock under the wheel.', '他们在车轮下放了个掩木。', ['wheel chock'], ['wedge'], 'noun', 'countable', '工业'],
    ['用掩木固定', 'To hold something steady with a block or wedge.', '用木块或楔子把某物固定住。', '及物：chock up。', 'The barrels were chocked to stop them rolling.', '桶被垫住以防滚动。', ['chock up'], [], 'verb', '及物', '工业'],
  ], 'chocks~chocked~chocked~chocking', [], '近义 wedge 楔子（三角形、可塞紧）；chock 掩木（防滚动）。分级留空');

  W('choosy', 'adjective', '/ˈtʃuːzi/', 'A1', ['CET4'], '挑剔的；讲究的', 'Hard to please; wanting only the best.', [
    ['挑剔的；讲究的', 'Hard to please; wanting only the best.', '难以取舍的、只想要最好的。', '口语，约等于 particular。', 'Cats can be choosy about food.', '猫对食物可能很挑剔。', ['choosy eater'], ['particular'], 'adjective', '定语/表语', '口语'],
  ], '', ['particular'], '←choose A1 选择 + -y，A1 继承；近义 particular 挑剔的（较正式）');

  W('chopper', 'noun', '/ˈtʃɒpə(r)/', 'B1', [], '直升机（口语）；剁碎机', 'A helicopter in informal use, or a machine that chops food.', [
    ['直升机（口语）', 'A helicopter, used informally.', '直升机的非正式说法。', '可数，口语。', 'The chopper landed on the roof.', '直升机降落在屋顶上。', [], ['helicopter'], 'noun', 'countable', '交通'],
    ['剁肉刀；切碎机', 'A large knife or machine for chopping food.', '切食物的大刀或机器。', '可数，家居用语。', 'Use the chopper to mince the garlic.', '用剁刀把蒜剁碎。', [], [], 'noun', 'countable', '家居'],
  ], 'choppers', ['helicopter'], '←chop B1 切 + -er（表物），B1 继承；家族 helicopter 直升机（口语 chopper 同指）');

  W('choppy', 'adjective', '/ˈtʃɒpi/', 'B1', [], '（海面）波浪起伏的', 'Of the sea, having many small rough waves.', [
    ['（海面）波浪起伏的', 'Of the sea, having many small rough waves.', '海面上有许多小而急的浪。', '常见 choppy waters/sea。', 'The crossing was rough and choppy.', '航程风浪颠簸。', ['choppy waters'], ['turbulent'], 'adjective', '定语', '交通'],
  ], '', ['turbulent'], '←chop B1 切 + -py（反复动作如刀切），B1 继承；近义 turbulent 汹涌的（更剧烈、亦指气流）');

  W('chores', 'noun', '/tʃɔːz/', '', [], '家务杂事（复数）', 'Small regular jobs that must be done at home.', [
    ['家务杂事（复数）', 'Small regular jobs that must be done at home.', '家里必须做的日常琐事。', '复数形式：do the chores（做家务）。', 'He does the chores every Saturday.', '他每周六做家务。', ['do the chores'], ['housework'], 'noun', 'uncountable/countable', '家庭'],
  ], '', ['housework'], '←chore（本词库无可靠分级）+ -s，故留空；家族 housework 家务（统称、不可数）');

  W('christen', 'verb', '/ˈkrɪsn/', '', [], '为……施洗命名；命名', 'To give a baby its first official name at a Christian ceremony, or to name something on first use.', [
    ['为……施洗命名；命名', 'To give a baby its first official name at a Christian ceremony, or to name something on its first use.', '在基督教仪式上给婴儿正式命名，或在某物首次使用时命名。', '及物：christen a child/ship。', 'They christened the baby Anna.', '他们给婴儿取名安娜。', ['christen a ship'], ['name'], 'verb', '及物', '宗教'],
  ], 'christens~christened~christened~christening', [], '源自 Christ（基督）施洗；近义 name 命名（通用、不限仪式）。分级留空');

  W('chromosome', 'noun', '/ˈkrəʊməsəʊm/', '', [], '染色体', 'One of the structures in a cell that carry genetic information.', [
    ['染色体', 'One of the structures inside a cell that carry genetic information.', '细胞中携带遗传信息的结构之一。', '可数，遗传学用语。', 'Humans have 46 chromosomes.', '人类有 46 条染色体。', [], ['gene'], 'noun', 'countable', '科学'],
  ], 'chromosomes', ['gene'], '希腊 chroma（颜色）+ soma（体）；家族 gene 基因（位于染色体上）。分级留空');

  W('chronological', 'adjective', '/ˌkrɒnəˈlɒdʒɪkl/', '', [], '按时间顺序的', 'Listed or arranged in the order in which events happened.', [
    ['按时间顺序的', 'Listed or arranged in the order in which events happened.', '按事件发生先后排列的。', '常见 chronological order（时间顺序）。', 'The events are listed in chronological order.', '这些事件按时间顺序列出。', ['chronological order'], ['temporal'], 'adjective', '定语', '书面'],
  ], '', ['temporal'], '希腊 chronos（时间）；chronology 年表在本词库无可靠分级故留空；家族 temporal 时间的（正式）');

  W('chuckle', 'verb/noun', '/ˈtʃʌkl/', '', [], '轻笑；咯咯笑', 'To laugh quietly, or a quiet private laugh.', [
    ['轻声地笑', 'To laugh quietly without opening your mouth very wide.', '嘴巴不太张开地轻声笑。', '不及物。', 'She chuckled at the joke.', '她被笑话逗得轻笑起来。', ['chuckle softly'], ['giggle'], 'verb', '不及物', '口语'],
    ['轻笑；咯咯的笑声', 'A quiet private laugh.', '私下的轻声笑。', '可数：let out a chuckle。', 'He let out a low chuckle.', '他发出一声低低的轻笑。', [], ['laugh'], 'noun', 'countable', '口语'],
  ], 'chuckles~chuckled~chuckled~chuckling', ['giggle', 'laugh'], '家族 giggle 咯咯笑（连续、多为女性）、laugh 笑（统称）；chuckle 抿嘴轻笑。分级留空');

  W('chute', 'noun', '/ʃuːt/', '', [], '降落伞；滑道', 'A device that carries people or things down from a height, or a sloping channel.', [
    ['降落伞；空投容器', 'A parachute, or a container dropped from a plane with supplies.', '降落伞，或从飞机上空投物资的容器。', '可数，口语 chute 即 parachute。', 'The supplies came down by chute.', '补给品用降落伞空投下来。', ['supply chute'], ['parachute'], 'noun', 'countable', '军事'],
    ['滑道；溜槽', 'A sloping channel through which things slide down.', '供物品滑下的倾斜通道。', '可数，常见 rubbish chute（垃圾滑道）。', 'The laundry slid down the chute.', '衣物顺着滑道滑了下去。', ['a rubbish chute'], ['slide'], 'noun', 'countable', '工业'],
  ], 'chutes', ['parachute'], '法语 chute（落下）；家族 parachute 降落伞（para + chute）、近义 slide 滑道。分级留空');

  W('cigarettes', 'noun', '/ˌsɪɡəˈrets/', '', [], '香烟（复数）', 'Small rolls of tobacco that people smoke.', [
    ['香烟（复数）', 'Small rolls of tobacco that people smoke, in their plural form.', '供吸用的小卷烟草（复数形式）。', '复数形式：a packet of cigarettes（一包烟）。', 'He bought a packet of cigarettes.', '他买了一包烟。', ['a pack of cigarettes'], ['tobacco'], 'noun', 'uncountable/countable', '健康'],
  ], '', ['tobacco'], 'cigarette 单数在本词库未单列，无词根可继承故留空；近义 tobacco 烟草（原料）');

  W('cipher', 'noun', '/ˈsaɪfə(r)/', '', [], '密码；暗号', 'A secret method of writing a message, or a message written this way.', [
    ['密码；暗号', 'A secret method of writing a message, or a message written this way.', '秘密的信息书写方法，或用这种方法写成的信息。', '可数，常见 in cipher（用密码）。', 'The message was written in cipher.', '这条消息是用密码写的。', ['in cipher'], ['code'], 'noun', 'countable', '科技'],
  ], 'ciphers', ['code'], '家族 code 代码/密码（更常用、可指系统）；cipher 亦指零（数字）。分级留空');

  W('circuit breaker', 'noun', '/ˌsɜːkɪt ˈbreɪkə(r)/', '', [], '断路器；保险开关', 'A safety device that cuts off an electrical current when there is a fault.', [
    ['断路器；保险开关', 'A safety device that cuts off an electrical current when there is a fault.', '电路故障时切断电流的安全装置。', '可数，用电安全用语。', 'The circuit breaker tripped during the storm.', '风暴中断路器跳闸了。', ['trip the circuit breaker'], ['fuse'], 'noun', 'countable', '科技'],
  ], '', ['fuse'], 'circuit 电路 + breaker 断路装置；近义 fuse 保险丝（一次性熔断件）。短语分级留空').phrase = true;

  W('circular', 'adjective', '/ˈsɜːkjələ(r)/', 'A2', ['CET4'], '圆形的；环形的', 'Shaped like a circle, or arranged in a circle.', [
    ['圆形的；环形的', 'Shaped like a circle, or arranged in a circle.', '形状像圆的，或排列成圆形的。', '常见 circular table、circular route（环形路线）。', 'They sat around a circular table.', '他们围着圆桌坐下。', ['a circular route'], ['round'], 'adjective', '定语', '通用'],
  ], '', ['round'], '←circle A2 圆 + -ular，A2 继承；家族 round 圆形的（更口语、可作副词）');

})(typeof window !== 'undefined' ? window : globalThis);
