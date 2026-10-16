/* data/words/cet/author_s10.js — 常用词 S 批次 10，缺口 scanner ~ sealed，共 31 条
 * （28 单词 + 3 短语：scarcely any、school grounds、sea lion）。来源：family + 义项近反义缺口，
 * refs 逐字照抄队列。考级标签照抄（CET4 × 6：scanner、scarcely、scenery、scholarly、scientific、scripture）。
 * 扫根结论：
 * · brief 直给：scan B1、scarce B2、scatter B2、scent B2、schedule B1、scholar B2、scold B2、
 *   scrap B2、seal B2 → scanner/scarcely/scattered/scattering/scented/scheduled/scholarly/
 *   scolding/scraps/sealed 继承。
 * · 自扫根：scene A2（author_s1）→scenery（e→∅+ery 判断项）；school A1（author_s1）→
 *   schoolchild/schoolmate（复合取首）；science A2（author_s1）→scientific（c→t 音变，同
 *   relief←relieve 类判断项）；screen A2（author_s1）→screenplay（复合取首判断项）；
 *   script B2（author_s1）→scripture（-ure 同 exposure←expose 先例判断项）；sculpture B2
 *   （author_s1）→sculpt（兄弟派生判断项）；sea A1（author_s1）→seabird/seafood（复合取首）。
 * · 留空项：scapegoat（首成分不可见、goat 仅隐喻关联）、scarlet、scoop、scour、scourge、scowl、
 *   scribbler（scribble 不在库）、scroll（roll 共享段位于词尾，兄弟派生不成立）、scrounge + 3 短语。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s10.js 必须在 _cet_helper.js 之后加载');

  W('scanner', 'noun', '/ˈskænə/', 'B1', ['CET4'], '扫描仪；扫描器', 'A machine that copies images or documents by moving light across them.', [
    ['扫描仪；扫描器', 'A machine that copies an image or a document by moving light over it.', '通过移动光线把图像或文件复制下来的机器。', '可数；也指计算机的扫描设备。', 'The scanner sent the picture straight to my computer.', '扫描仪把图片直接传到了我的电脑上。', ['a flatbed scanner'], ['radar'], 'noun', 'countable', '工具'],
  ], 'scanners', ['radar'], 'brief 根提示 ←scan B1 扫描 + -er（透明名词后缀，工具/施事），B1 继承；fam/syn radar 雷达（队列原样）'),

  W('scapegoat', 'noun', '/ˈskeɪpɡəʊt/', '', [], '替罪羊', 'Somebody who is blamed for the mistakes of other people.', [
    ['替罪羊', 'Somebody who is blamed for the wrong actions of other people.', '为别人的过错承担责任的人。', '可数；源自《圣经》中替人承罪走入旷野的羊。', 'The junior clerk became the scapegoat for the failed deal.', '这名初级职员成了失败交易的替罪羊。', ['make a scapegoat of'], ['goat'], 'noun', 'countable', '社会'],
  ], 'scapegoats', ['goat'], '复合词首成分 scape（escape 的古形）不在词内全段可见，第二成分 goat A2 与现代语义仅隐喻关联、非构词直连，判断项留空；fam/syn goat 山羊（队列原样）'),

  W('scarcely', 'adverb', '/ˈskeəsli/', 'B2', ['CET4'], '几乎不；刚一…就…', 'Hardly, or only just after something happens.', [
    ['几乎不；简直没有', 'Hardly; almost not at all.', '几乎不；简直没有。', '修饰动词或数量，含否定意味，常与 any、a 连用。', 'There was scarcely anyone left in the hall.', '大厅里几乎没剩什么人。', ['scarcely any', 'scarcely visible'], ['hardly'], 'adverb', '不及物', '通用'],
    ['刚一…就…', 'As soon as one thing happens, another thing happens.', '表示某事紧接着另一事发生。', '常与 when 连用；用于句首时主句用倒装语序。', 'Scarcely had the match begun when the rain started.', '比赛刚开始雨就下了起来。', ['scarcely when'], [], 'adverb', '不及物', '书面'],
  ], '',['scarce'], 'brief 根提示 ←scarce B2 稀少 + -ly（透明副词后缀），B2 继承；近义 hardly 几乎不（队列原样）'),

  W('scarcely any', 'adjective', '/ˈskeəsli ˈeni/', '', [], '几乎没有（的）', 'Very few or very little of something.', [
    ['几乎没有（的）', 'Very few, or very little of something.', '数量极少，几乎没有。', '后接复数名词或不可数名词，作定语。', 'There were scarcely any seats left in the hall.', '大厅里几乎没剩座位。', ['scarcely any money'], ['few'], 'adjective', '定语', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 few 很少、几乎没有（队列原样，短语条目）').phrase = true;

  W('scarlet', 'adjective', '/ˈskɑːlɪt/', '', [], '猩红色的；鲜红色的', 'Bright red in colour.', [
    ['猩红色的；鲜红色的', 'Bright red in colour.', '鲜亮的红色。', '多作定语；scarlet fever 指猩红热。', 'She wore a scarlet dress to the party.', '她穿了件猩红色的连衣裙去聚会。', ['scarlet dress', 'scarlet fever'], ['red'], 'adjective', '定语', '外貌'],
  ], '', ['red'], '库内无可见词根（scar 伤痕、scare 惊吓均非语义基，与 red 仅近义关系），判断项留空；fam/syn red 红色的（队列原样）'),

  W('scattered', 'adjective', '/ˈskætəd/', 'B2', [], '分散的；散落的', 'Spread over a wide area with spaces between.', [
    ['分散的；散落的', 'Spread over a wide area, with spaces in between.', '分布在大片区域内、彼此留有间隔。', '多作定语或表语。', 'A few scattered houses stood along the coast.', '沿海散落着几栋零星的房屋。', ['scattered showers'], ['diffuse'], 'adjective', '定语', '地理'],
  ], '',['scatter'], 'brief 根提示 ←scatter B2 散开 + -ed（分词形容词），B2 继承；近义 diffuse 分散的、扩散的（队列原样）'),

  W('scattering', 'noun', '/ˈskætərɪŋ/', 'B2', [], '零星散布；少量', 'A small number of things spread over an area.', [
    ['零星散布；少量', 'A small number of things spread thinly over an area.', '零散分布在一片区域里的少量事物。', '可数，常与 of 连用。', 'A scattering of fans waited at the gate.', '零零星星的几个球迷在门口等候。', ['a scattering of leaves'], ['sprinkle'], 'noun', 'countable', '通用'],
  ], 'scatterings',['scatter'], 'brief 根提示 ←scatter B2 散开 + -ing（动名词名词后缀），B2 继承；近义 sprinkle 少量撒布（队列原样）'),

  W('scenery', 'noun', '/ˈsiːnəri/', 'A2', ['CET4'], '风景；舞台布景', 'The natural features of a place, or a stage background.', [
    ['风景；自然景色', 'The natural features of an area, such as mountains and trees.', '一个地区的山川树木等自然面貌。', '不可数；指一地的总体自然景观。', 'The train passed through spectacular scenery.', '火车驶过壮观的风景。', ['beautiful scenery'], ['countryside', 'landscape'], 'noun', 'uncountable', '地理'],
    ['舞台布景', 'The painted background placed on a stage.', '舞台上使用的绘景背景。', '不可数，戏剧用语。', 'The scenery changed between the two acts.', '两幕之间换了布景。', ['change the scenery'], [], 'noun', 'uncountable', '艺术'],
  ], '', ['countryside', 'landscape'], 'brief 显示 ←?，自扫根 scene A2（author_s1）——scenery←scene 景 + e→∅+ery（-ery 透明名词后缀，同 robbery 类），A2 继承（判断项）；家族 countryside 乡间、landscape 地貌，近义 countryside、landscape 置风景义项（队列原样）'),

  W('scented', 'adjective', '/ˈsentɪd/', 'B2', [], '有香味的；含香料的', 'Made to have a pleasant smell, or containing perfume.', [
    ['有香味的；含香料的', 'Made to have a pleasant smell, or containing perfume.', '被做成带有香味的；含香精的。', '多作定语。', 'She bought scented soap from the market.', '她在市场上买了香皂。', ['scented candles'], ['fragrant'], 'adjective', '定语', '家居'],
  ], '',['scent'], 'brief 根提示 ←scent B2 气味 + -ed（分词形容词），B2 继承；近义 fragrant 芬芳的（队列原样）'),

  W('scheduled', 'adjective', '/ˈʃedjuːld/', 'B1', [], '排定的；按时刻表的', 'Planned to happen at a particular time.', [
    ['排定的；按时刻表的', 'Planned to happen at a particular time.', '按计划在特定时间发生的。', '多作定语或表语；scheduled flight 定期航班。', 'The meeting is scheduled for Thursday morning.', '会议定在周四上午。', ['scheduled flight'], ['due'], 'adjective', '定语', '交通'],
  ], '',['schedule'], 'brief 根提示 ←schedule B1 安排 + -ed（分词形容词），B1 继承；近义 due 预定的、预期的（队列原样）'),

  W('scholarly', 'adjective', '/ˈskɒləʃli/', 'B2', ['CET4'], '学者的；学术的', 'Showing serious study or great knowledge.', [
    ['学者的；学术的', 'Involving serious, deep study, or showing great knowledge.', '涉及严肃深入研究的；显示深厚学识的。', '多作定语，形容论文、研究、态度。', 'He wrote a scholarly article on ancient law.', '他写了一篇关于古代法律的学术论文。', ['scholarly article'], ['academic', 'intellectual', 'literary'], 'adjective', '定语', '教育'],
  ], '',['scholar'], 'brief 根提示 ←scholar B2 学者 + -ly（形容词后缀，同 friendly 类，非副词 -ly），B2 继承；近义 academic 学术的、intellectual 智力的、literary 文学的（队列原样）'),

  W('school grounds', 'noun', '/skuːl ɡraʊndz/', '', [], '校园；校内场地', 'The open land belonging to a school.', [
    ['校园；校内场地', 'The open area and land that belong to a school.', '学校所属的空地与场地。', '常用复数形式 grounds。', 'The children played on the school grounds.', '孩子们在校内场地上玩耍。', ['on the school grounds'], ['campus'], 'noun', 'countable', '教育'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 campus 校园（队列原样，短语条目）').phrase = true;

  W('schoolchild', 'noun', '/ˈskuːltʃaɪld/', 'A1', [], '学童；小学生', 'A child who attends school.', [
    ['学童；小学生', 'A child who goes to school.', '上学的儿童。', '可数，复数为 schoolchildren。', 'Each schoolchild was given a free book.', '每个学童都发了一本免费书。', ['gifted schoolchild'], ['pupil'], 'noun', 'countable', '教育'],
  ], 'schoolchildren',['school'], 'school + child 复合词取首成分 school A1 在库（author_s1），学童即在校儿童、语义直连，A1 继承；近义 pupil 小学生（队列原样）'),

  W('schoolmate', 'noun', '/ˈskuːlmeɪt/', 'A1', [], '同学；同窗', 'A person who goes to the same school as you.', [
    ['同学；同窗', 'Somebody who goes to the same school as you.', '与你在同一所学校上学的人。', '可数。', 'He ran into an old schoolmate at the station.', '他在车站碰到了一位老同学。', ['old schoolmate'], ['classmate'], 'noun', 'countable', '教育'],
  ], 'schoolmates', ['classmate'], 'school + mate 复合词取首成分 school A1 在库（author_s1），同校之人语义直连，A1 继承；fam/syn classmate 同班同学（队列原样）'),

  W('scientific', 'adjective', '/ˌsaɪənˈtɪfɪk/', 'A2', ['CET4'], '科学的；科学上的', 'Concerning science or based on systematic study.', [
    ['科学的；科学上的', 'Concerning science, or using methods that follow fixed rules.', '关乎科学的，或使用固定方法进行系统研究的。', '多作定语；scientific method 科学方法。', 'The museum holds a scientific collection of birds.', '这家博物馆藏有鸟类学标本。', ['scientific method'], ['physical', 'physiological'], 'adjective', '定语', '科学'],
  ], '',['science'], 'brief 显示 ←?，自扫根 science A2（author_s1）——scientific←science 科学 + -ent + -ific（c→t 音变，同 relief←relieve 的音变先例），A2 继承（判断项）；近义 physical 物理的、physiological 生理的（队列原样）'),

  W('scolding', 'noun', '/ˈskəʊldɪŋ/', 'B2', [], '训斥；责骂', 'An angry speech telling somebody they have done wrong.', [
    ['训斥；责骂', 'An angry speaking to somebody because they have done something wrong.', '因某人做错事而对其发出的愤怒责备。', '可数，常与 give、get 连用。', 'She gave the late worker a good scolding.', '她把迟到的工人狠狠训了一顿。', ['give a scolding'], ['lecture'], 'noun', 'countable', '社会'],
  ], 'scoldings',['scold'], 'brief 根提示 ←scold B2 责骂 + -ing（动名词名词后缀），B2 继承；近义 lecture 训斥、说教（队列原样）'),

  W('scoop', 'noun/verb', '/skuːp/', '', [], '勺；舀取', 'A tool for lifting, or the act of lifting with it.', [
    ['勺；舀子', 'A tool like a small shovel, or a rounded part of a machine used for lifting.', '像小铲的工具，或机器上用于舀取的圆勺部件。', '可数；a scoop of 指一勺的量。', 'She added two scoops of sugar to the tea.', '她往茶里加了两勺糖。', ['an ice-cream scoop'], ['spoon'], 'noun', 'countable', '饮食'],
    ['舀取；端起', 'To lift or move something with a scoop or with your cupped hand.', '用勺子或兜起的手舀起、端起某物。', '可及物，常与 out、up 连用。', 'He scooped the sand into the bucket.', '他把沙子舀进桶里。', ['scoop out'], ['skim'], 'verb', '及物', '饮食'],
  ], 'scoops~scooped~scooped~scooping', [], '库内无可见词根（与 sky、soap 形近均非语义基），判断项留空；近义 skim 撇取、spoon 用勺舀（队列原样）'),

  W('scour', 'verb', '/ˈskaʊə/', '', [], '刷洗干净；擦亮', 'To clean something by rubbing it very hard.', [
    ['刷洗干净；擦亮', 'To clean something thoroughly by rubbing it hard.', '用力摩擦把某物彻底洗干净。', '可及物，常与 out 连用。', 'She scoured the pot until it shone.', '她把锅刷得锃亮。', ['scour out'], ['scrub'], 'verb', '及物', '家居'],
  ], 'scours~scoured~scoured~scouring', ['scrub'], '库内无可靠可继根（与 score、school 形近均非语义基），判断项留空；fam/syn scrub 刷洗（队列原样）'),

  W('scourge', 'noun/verb', '/skɜːdʒ/', '', [], '祸害；鞭笞', 'Something that causes great suffering, or to punish severely.', [
    ['祸害；灾难', 'Something that causes great suffering or trouble over a long time.', '长期造成巨大痛苦或祸患的事物。', '可数，常与 of 连用。', 'The scourge of malaria still affects millions.', '疟疾这一祸害仍影响数百万人。', ['the scourge of war'], ['plague'], 'noun', 'countable', '健康'],
    ['鞭笞；折磨', 'To punish or trouble somebody severely.', '严厉惩罚或折磨某人。', '可及物，文学用语。', 'The tyrant scourged his captured enemies.', '暴君鞭笞被俘的敌人。', [], [], 'verb', '及物', '书面'],
  ], 'scourges~scourged~scourged~scourging', [], '借词，库内无可见词根（与 scour 形近但语义、词源均不直连），判断项留空；近义 plague 瘟疫、灾祸（队列原样）'),

  W('scowl', 'noun/verb', '/skaʊl/', '', [], '怒容；皱眉', 'An angry frown, or to frown angrily.', [
    ['怒容；皱眉', 'An angry or annoyed expression that shows on the face.', '显在脸上的愤怒或恼怒表情。', '可数，常与 deep 连用。', 'A deep scowl crossed his face.', '他满脸怒容。', ['a deep scowl'], ['frown'], 'noun', 'countable', '情感'],
    ['怒视；皱眉', 'To look at somebody with an angry frown.', '皱着眉生气地看某人。', '多作不及物，常与 at 连用。', 'She scowled at the noisy crowd.', '她怒视着吵闹的人群。', ['scowl at'], ['knit'], 'verb', '不及物', '情感'],
  ], 'scowls~scowled~scowled~scowling', ['frown'], '库内无可见词根（与 crow、owl 形近均非语义基），判断项留空；fam/syn frown 皱眉，knit（knit the brow 皱额）（队列原样）'),

  W('scraps', 'noun', '/skræps/', 'B2', [], '食物残渣；碎片', 'Small pieces of leftover food or material.', [
    ['食物残渣；碎片', 'Small pieces of food that are left over, or tiny pieces of material.', '吃剩的小块食物，或材料的碎屑。', '复数名词，scrap 的复数形式单列词条。', 'The dog ate the scraps from the plate.', '狗把盘里的剩饭吃了。', ['food scraps'], ['rag'], 'noun', 'countable', '饮食'],
  ], '',['scrap'], 'scrap B2 碎片的复数形式单列词条（brief 根提示 ←scrap B2），B2 继承；近义 rag 碎布（队列原样）'),

  W('screenplay', 'noun', '/ˈskriːnpleɪ/', 'A2', [], '电影剧本', 'The written text of a film, including dialogue and scene notes.', [
    ['电影剧本', 'The written text of a film, including what characters say and do.', '影片的书面文本，包括人物的对白与动作。', '可数。', 'The screenplay was based on a true story.', '这部电影剧本改编自真实故事。', ['write a screenplay'], ['scenario', 'script'], 'noun', 'countable', '艺术'],
  ], 'screenplays', ['script'], 'screen + play 复合词取首成分 screen A2 在库（author_s1），「银幕上的剧本」语义直连，A2 继承（判断项）；家族 script 剧本，近义 scenario 情节梗概、script 剧本（队列原样）'),

  W('scribbler', 'noun', '/ˈskrɪblə/', '', [], '滥写者；蹩脚作家', 'A person who writes carelessly or produces poor work.', [
    ['滥写者；蹩脚作家', 'A person who writes in a careless way or produces poor work.', '写作草率或作品低劣的人。', '可数，含贬义。', 'He dismissed the novelist as a mere scribbler.', '他把这个小说家贬作不过是个滥笔匠。', ['a mere scribbler'], ['hack'], 'noun', 'countable', '文学'],
  ], 'scribblers', [], 'scribble 不在库（根缺席，-er 虽透明但无级可继），留空；近义 hack 雇佣文人（队列原样）'),

  W('scripture', 'noun', '/ˈskrɪptʃə/', 'B2', ['CET4'], '经文；圣典', 'The sacred writings of a religion.', [
    ['经文；圣典', 'The sacred writings of a religion, especially the Bible.', '宗教的神圣文献，尤指《圣经》。', '常写作 the Scripture，不可数。', 'The passage is quoted from scripture.', '这段文字引自经文。', ['holy scripture'], ['Bible', 'gospel'], 'noun', 'uncountable', '宗教'],
  ], '', ['gospel'], 'brief 显示 ←?，自扫根 script B2（author_s1）——scripture←script 写的文字 + -ure（-ure 透明名词后缀，同 exposure←expose 先例），B2 继承（判断项）；fam gospel 福音书，近义 Bible《圣经》、gospel 福音（队列原样）'),

  W('scroll', 'noun/verb', '/skrəʊl/', '', [], '卷轴；滚动', 'A roll of written material, or to move a screen display.', [
    ['卷轴；长卷', 'A rolled piece of paper or other material used for writing.', '卷起来的纸或其他书写材料。', '可数。', 'An ancient scroll was found in the cave.', '洞里发现了一卷古代卷轴。', ['ancient scroll'], ['manuscript'], 'noun', 'countable', '历史'],
    ['滚动；滚屏', 'To move text or a picture up, down or across on a screen.', '在屏幕上上下或左右移动文本或图像。', '多作不及物，计算机用语。', 'Scroll down to the bottom of the page.', '滚动到页面底部。', ['scroll down'], [], 'verb', '不及物', '媒体'],
  ], 'scrolls~scrolled~scrolled~scrolling', [], '库内无可靠可继根——roll A2 虽在词内可见且「卷」义相关，但共享段位于词尾、非词首全段，兄弟派生规则不成立，判断项留空；近义 manuscript 手稿（队列原样）'),

  W('scrounge', 'verb', '/skraʊndʒ/', '', [], '索要；骗取', 'To keep asking people for free things or money.', [
    ['索要；骗取', 'To ask people for free things or money in an annoying way.', '惹人厌地向人讨要免费的东西或钱。', '可及物，亦作不及物与 off 连用。', 'He scrounged a cigarette from a stranger.', '他向陌生人讨了支烟。', ['scrounge off'], ['sponge'], 'verb', '及物', '口语'],
  ], 'scrounges~scrounged~scrounged~scrounging', [], '库内无可见词根（与 crowd、lounge 形近均非语义基），判断项留空；近义 sponge 伸手白拿（队列原样）'),

  W('sculpt', 'verb', '/skʌlpt/', 'B2', [], '雕刻；塑造', 'To make a sculpture by carving or shaping.', [
    ['雕刻；塑造', 'To make a sculpture or a shape by carving material.', '通过雕凿材料制作雕塑或塑形。', '可及物，亦可不及物。', 'The artist sculpted the figure from a single block of stone.', '艺术家用一整块石头雕出了这座像。', ['sculpt a figure'], ['carve'], 'verb', '及物', '艺术'],
  ], 'sculpts~sculpted~sculpted~sculpting', ['carve'], '自扫根 sculpture B2（author_s1）——sculpt 全段可见于 sculpture 且「雕刻」语义直连，按兄弟派生判断继承 B2（判断项）；fam/syn carve 雕刻（队列原样）'),

  W('sea lion', 'noun', '/siː ˈlaɪən/', '', [], '海狮', 'A large sea animal with flippers that looks like a lion.', [
    ['海狮', 'A large sea animal with flat flippers and a body shaped like a lion.', '一种大型海洋动物，有扁平鳍状肢、身形似狮子。', '可数。', 'The sea lion balanced a ball on its nose.', '海狮把球顶在鼻子上。', ['a sea lion'], ['seal'], 'noun', 'countable', '自然'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 seal 海豹（队列原样，短语条目）').phrase = true;

  W('seabird', 'noun', '/ˈsiːbɜːd/', 'A1', [], '海鸟', 'A bird that lives near the sea and gets its food from it.', [
    ['海鸟', 'A bird that lives near the sea and gets food from the sea.', '生活在海边、以海中食物为生的鸟。', '可数。', 'Flocks of seabirds nested on the cliffs.', '成群的海鸟在悬崖上筑巢。', ['seabird colony'], ['penguin'], 'noun', 'countable', '自然'],
  ], 'seabirds', ['penguin'], 'sea + bird 复合词取首成分 sea A1 在库（author_s1），海鸟语义直连，A1 继承；fam/syn penguin 企鹅（队列原样，同属海鸟类）'),

  W('seafood', 'noun', '/ˈsiːfuːd/', 'A1', [], '海鲜；海产食物', 'Shellfish and sea fish eaten as food.', [
    ['海鲜；海产食物', 'Shellfish and fish from the sea that people eat.', '人们食用的贝类与海鱼。', '不可数。', 'We had seafood at a harbour restaurant.', '我们在一家海港餐厅吃了海鲜。', ['seafood dish'], ['crab', 'fish'], 'noun', 'uncountable', '饮食'],
  ], '', ['fish'], 'sea + food 复合词取首成分 sea A1 在库（author_s1），海产食物语义直连，A1 继承；家族 fish 鱼，近义 crab 螃蟹、fish 鱼（队列原样）'),

  W('sealed', 'adjective', '/siːld/', 'B2', [], '密封的；封闭的', 'Closed tightly so that nothing can get in or out.', [
    ['密封的；封闭的', 'Closed tightly so that air or liquid cannot get in or out.', '封得严实、空气或液体进不去出不来。', '多作定语或表语。', 'The jars must be sealed while the jam is hot.', '果酱要趁热把罐子封好。', ['sealed envelope'], ['watertight'], 'adjective', '定语', '家居'],
  ], '',['seal'], 'brief 根提示 ←seal B2 封 + -ed（分词形容词），B2 继承；近义 watertight 不透水的、密封的（队列原样）');

})(typeof window !== 'undefined' ? window : globalThis);
