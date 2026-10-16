/* data/words/cet/author_p9.js — 常用词 P 批次 9，缺口 pointless ~ poverty，共 31 条
 * （29 单词 + 2 短语：popular music、power unit）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（12 条 CET4：
 * pointless、poisonous、politeness、politician、pollution、populate、portable、porter、
 * possibility、possibly、posture、poverty；portrait 为 CET6）。
 * 扫根结论：point A2、poor A1、polite A2、poison B1、politics B1、pollute B1、popular A2、
 * population B1、possible A1、port B1、graduate B1、pose B2、possess B2（author_g1/p2 +
 * brief porter←port[B1] 根提示）——
 * · 透明后缀：pointless←point A2 + -less、poisonous←poison B1 + -ous、politeness←polite A2
 *   + -ness、poorly←poor A1 + -ly、possibly←possible A1 + -ly、possibility←possible A1 + -ity
 *   （le→l 同 able→ability 类）、pollution←pollute B1 + -ion（-e→∅+ion 同 -tion 类）；
 *   poorer/poorest←poor A1 比较/最高级；poorly 兼形容词「不舒服的」。
 * · 兄弟派生（词首全段共享词干）：politician←politics B1（politic 全段共享，-ian 按 -or/-er
 *   施事类功能透明，判断项；political 不在库）、populace←popular A2、populate←population B1
 *   （-ate 透明）、posture←pose B2（pos=ponere「放置」同源变体）。
 * · 派生：points←point A2 复数、possessions←possess B2 + -ion + 复数（possess 全段可见）。
 * · port 系：porter←port B1 + -er（brief 根提示）、portable←port B1（portare「携带」义经
 *   brief porter 根提示确认）、portal←port B1 + -al（透明）；portend/portrait 的 port 为
 *   por-（向前）切词假象、portico 与 port 词源 porta 之别关系间接，均保守留空。
 * · 首成分复合：postgraduate←graduate B1（post- 前缀同 over-/para- 类排除）。
 * · 留空项：pore 不在库→porous；polymer（poly 非自由成分、mer 缺席）、polyp、pony、
 *   posh（来源不明）、poverty（pauper 与 poor 拼写不可见，同 weight→overweight 先例）、
 *   pouch（与 pocket 无拼写对应）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p9.js 必须在 _cet_helper.js 之后加载');

  W('pointless', 'adjective', '/ˈpɔɪntləs/', 'A2', ['CET4'], '无意义的；无目的的', 'Having no purpose or value.', [
    ['无意义的；无目的的', 'Having no purpose or value.', '没有目的或价值的。', '定语或表语。', 'The extra detail was pointless.', '多余细节毫无意义。', [], ['futile'], 'adjective', '定语/表语', '通用'],
  ], '',['point'], '←point A2 + -less（透明后缀），A2 继承（brief 显示 ←?，经 points←point[A2] 根提示确认）；近义 futile 无用的、徒劳的');

  W('points', 'noun', '/pɔɪnts/', 'A2', [], '分数；得分（复数）', 'The score in a game or test.', [
    ['分数；得分（复数）', 'The score in a game or test.', '比赛或测验中的得分。', 'point 的复数形式，常用于计分。', 'The referee awarded two points.', '裁判判了两分。', [], ['score'], 'noun', 'countable', '体育'],
  ], '',['score', 'point'], '←point A2 的复数形式（比分义），A2 继承（brief 根提示）；家族/近义 score 分数、得分');

  W('poisonous', 'adjective', '/ˈpɔɪzənəs/', 'B1', ['CET4'], '有毒的', 'Containing poison, or very unpleasant.', [
    ['有毒的', 'Containing poison.', '含有毒物的。', '定语或表语。', 'Some mushrooms are poisonous.', '有些蘑菇有毒。', ['poisonous gas'], ['toxic'], 'adjective', '定语/表语', '健康'],
  ], '',['toxic', 'poison'], '←poison B1 + -ous（透明后缀），B1 继承（brief 显示 ←?，自行扫根 poison）；家族/近义 toxic 有毒的');

  W('politeness', 'noun', '/pəˈlaɪtnəs/', 'A2', ['CET4'], '礼貌；客气', 'Behaviour that is respectful and kind.', [
    ['礼貌；客气', 'Behaviour that is respectful and kind.', '尊重而友善的行为。', '不可数。', 'His politeness impressed the hosts.', '他的礼貌给主人留下了印象。', [], ['courtesy', 'grace'], 'noun', 'uncountable', '社交'],
  ], '',['courtesy', 'polite'], '←polite A2 + -ness（透明后缀），A2 继承（brief 根提示）；家族 courtesy 礼貌、谦恭，近 grace 优雅');

  W('politician', 'noun', '/ˌpɒləˈtɪʃn/', 'B1', ['CET4'], '政治家；政客', 'A person who works in politics.', [
    ['政治家；政客', 'A person who works in politics.', '从事政治工作的人。', '可数。', 'The politician avoided the question.', '这位政客回避了问题。', [], ['statesman'], 'noun', 'countable', '政治'],
  ], 'politicians',['statesman', 'politics'], '←politics B1 的词干 politic（politic+s 与 politic+ian 全段共享），B1 继承（brief 显示 ←?，自行扫根 politics；political 不在库，-ian 按 -or/-er 施事类功能透明，判断项）；家族/近义 statesman 政治家');

  W('pollution', 'noun', '/pəˈluːʃn/', 'B1', ['CET4'], '污染', 'Harmful substances in the air, water, or soil.', [
    ['污染', 'Harmful substances in the air, water, or soil.', '空气、水或土壤中的有害物质。', '不可数。', 'The city fights air pollution.', '城市治理空气污染。', ['air pollution'], ['smog'], 'noun', 'uncountable', '环境'],
  ], '',['smog', 'pollute'], '←pollute B1 + -ion（-e→∅+ion，同 -tion/-ation 类），B1 继承（brief 显示 ←?，自行扫根 pollute）；家族/近义 smog 烟雾');

  W('polymer', 'noun', '/ˈpɒlɪmə/', '', [], '聚合物', 'A substance made of large repeating molecules.', [
    ['聚合物', 'A substance made of large repeating molecules.', '由重复大分子构成的物质。', '可数。', 'The pipe is made of polymer.', '这根管子由聚合物制成。', [], ['plastic'], 'noun', 'countable', '科学'],
  ], 'polymers', ['plastic'], '希腊 poly（多）+ -mer（部分）——poly 非自由成分、mer 不在库，留空；家族/近义 plastic 塑料');

  W('polyp', 'noun', '/ˈpɒlɪp/', '', [], '息肉；珊瑚虫', 'A small growth on body tissue, or a sea creature fixed to rock.', [
    ['息肉；珊瑚虫', 'A small growth on body tissue, or a small sea creature fixed to rock.', '身体组织上的小赘生物；或固着在岩石上的小海生物。', '可数。', 'The polyp attached to the reef.', '息肉体附着在礁上。', [], ['coral'], 'noun', 'countable', '自然'],
  ], 'polyps', [], '希腊 polypous（多足）——无库内可见词根，留空；近义 coral 珊瑚');

  W('pony', 'noun', '/ˈpəʊni/', '', [], '小马', 'A small horse.', [
    ['小马', 'A small horse.', '体型小的马。', '可数。', 'The child rode a small pony.', '孩子骑了一匹小马。', [], ['horse'], 'noun', 'countable', '体育'],
  ], 'ponies', ['horse'], '威尔士语 pony（小马）——无库内可见词根，留空；家族/近义 horse 马');

  W('poorer', 'adjective', '/ˈpɔːrə/', 'A1', [], '更穷的；较差的', 'The comparative form of poor.', [
    ['更穷的；较差的', 'The comparative form of poor.', 'poor 的比较级形式。', '形容词比较级，可与 than 连用。', 'The poorer regions need aid.', '较贫困地区需要援助。', [], ['inferior', 'worse'], 'adjective', '定语/表语', '通用'],
  ], '',['inferior', 'worse', 'poor'], '←poor A1 的比较级形式，A1 继承（brief 根提示）；家族 inferior 较差的、worse 更坏的，近义同');

  W('poorest', 'adjective', '/ˈpɔːrəst/', 'A1', [], '最穷的；最差的', 'The superlative form of poor.', [
    ['最穷的；最差的', 'The superlative form of poor.', 'poor 的最高级形式。', '形容词最高级，常与 the 连用。', 'The funds help the poorest families.', '这笔钱帮助最贫困的家庭。', [], ['worst'], 'adjective', '定语', '通用'],
  ], '',['worst', 'poor'], '←poor A1 的最高级形式，A1 继承（brief 根提示）；家族 worst 最坏的，近义同');

  W('poorly', 'adjective/adverb', '/ˈpɔːli/', 'A1', [], '糟糕地；不舒服地', 'Badly, or in bad health.', [
    ['糟糕地（副词）', 'In a bad way.', '以糟糕的方式。', '修饰动词。', 'He did poorly on the test.', '他考得很差。', [], ['badly'], 'adverb', '不及物', '通用'],
    ['不舒服的（形容词）', 'In bad health.', '身体不适的。', '表语，较非正式。', 'She felt poorly after the flight.', '她飞行后感到不舒服。', [], ['ill'], 'adjective', '表语', '健康'],
  ], '',['poor'], '←poor A1 + -ly（透明后缀，兼作形容词「不舒服的」），A1 继承（brief 根提示）；近义 badly 糟地、ill 生病的');

  W('populace', 'noun', '/ˈpɒpjələs/', 'A2', [], '民众；大众', 'The ordinary people of a country.', [
    ['民众；大众', 'The ordinary people of a country.', '一国的普通百姓。', '集合名词，常作单数。', 'The decree angered the populace.', '法令激怒了民众。', [], ['public'], 'noun', 'uncountable', '社会'],
  ], '',['popular', 'population'], '←popular A2（词干 popul 词首全段共享，popular=popul+ar），A2 继承（brief 显示 ←?，自行扫根 popular/population，兄弟派生同 optimal←optimum 先例）；近义 public 公众');

  W('popular music', 'noun', '/ˈpɒpjələ ˌmjuːzɪk/', '', [], '流行音乐', 'Music liked by many people.', [
    ['流行音乐', 'Music liked by many people.', '许多人喜爱的音乐。', '不可数。', 'The station plays popular music all day.', '电台整天播放流行音乐。', [], ['pop'], 'noun', 'uncountable', '文化'],
  ], '', ['pop'], 'popular + music；家族/近义 pop 流行音乐。短语分级留空').phrase = true;

  W('populate', 'verb', '/ˈpɒpjəleɪt/', 'B1', ['CET4'], '居住于；分布于', 'To live in a place, or to fill it with people.', [
    ['居住于；分布于', 'To live in a place, or to fill it with people.', '居住在某地；或使某地布满人。', '及物，正式用语。', 'Settlers populated the valley.', '定居者居住在这片山谷。', [], ['inhabit', 'people'], 'verb', '及物', '社会'],
  ], 'populates~populated~populated~populating',['population'], '←population B1（词干 popul 词首全段共享，population=popul+ation），B1 继承（brief 显示 ←?，自行扫根 popular/population，兄弟派生；-ate 透明）；近义 inhabit 居住、people 居住于');

  W('porous', 'adjective', '/ˈpɔːrəs/', '', [], '多孔的；能渗透的', 'Full of tiny holes that air or liquid can pass through.', [
    ['多孔的；能渗透的', 'Full of tiny holes that air or liquid can pass through.', '布满空气或液体可通过的小孔的。', '多作表语或定语。', 'The stone is porous and absorbs water.', '这块石头多孔，能吸水。', [], ['absorbent'], 'adjective', '定语/表语', '通用'],
  ], '', ['porosity'], 'porosity 是名词，指孔隙度或多孔性；近义 absorbent 吸收性的、吸水的。');

  W('portable', 'adjective', '/ˈpɔːtəbl/', 'B1', ['CET4'], '便携的；手提的', 'Easy to carry or move around.', [
    ['便携的；手提的', 'Easy to carry or move around.', '易于携带或移动的。', '多作定语。', 'A portable charger helps on trips.', '便携充电器在旅途中很有用。', ['portable device'], ['laptop', 'mobile'], 'adjective', '定语', '通用'],
  ], '', ['mobile'], '首成分 port B1 在库（port + able 派生，port 的 portare「携带」义经 brief 对 porter 的 port 根提示确认），B1 继承（brief 显示 ←?）；家族 mobile 可移动的，近 laptop 便携电脑、mobile');

  W('portal', 'noun', '/ˈpɔːtl/', 'B1', [], '门户（网站）；大门', 'A large door, or a website that offers a starting point for other pages.', [
    ['门户（网站）；大门', 'A large door, or a website that offers a starting point for other pages.', '大门；或提供其他页面入口的网站。', '可数。', 'The portal lists every service.', '门户列出了所有服务。', [], ['website'], 'noun', 'countable', '媒体'],
  ], 'portals',['port'], 'port B1 + -al（透明后缀），B1 继承（brief 显示 ←?，经 porter←port[B1] 根提示确认，词干 port 全段共享、语义「门户」与 port 直连）；近义 website 网站');

  W('portend', 'verb', '/pɔːˈtend/', '', [], '预示；预告', 'To be a sign of something that will happen.', [
    ['预示；预告', 'To be a sign of something that will happen.', '成为某事将会发生的征兆。', '及物，正式用语。', 'Dark clouds portend a storm.', '乌云预示着暴风雨。', [], ['foretell'], 'verb', '及物', '通用'],
  ], 'portends~portended~portended~portending', [], '拉丁 portendere（预示）——形含 port 但为 por-（向前）+ tendere，与 port（港口）无关（切词假象，同 obliterate 先例），留空；近义 foretell 预言、预示');

  W('porter', 'noun', '/ˈpɔːtə/', 'B1', ['CET4'], '搬运工；波特啤酒', 'A person who carries bags, or a dark beer.', [
    ['搬运工；门房', 'A person whose job is carrying bags.', '以搬运行李为工作的人。', '可数。', 'The porter carried the bags upstairs.', '搬运工把行李搬上楼。', [], [], 'noun', 'countable', '职业'],
    ['波特啤酒', 'A strong dark beer.', '浓色深黑啤酒。', '不可数或可数。', 'She ordered a dark porter at the bar.', '她在酒吧点了一杯深色波特啤酒。', [], ['stout'], 'noun', 'uncountable', '饮食'],
  ], 'porters',['port'], '←port B1 + -er（施事后缀），B1 继承（brief 根提示）；近义 stout 黑啤酒（队列原样，对应 porter 啤酒义）');

  W('portico', 'noun', '/ˈpɔːtɪkəʊ/', '', [], '门廊；柱廊', 'A covered entrance with columns.', [
    ['门廊；柱廊', 'A covered entrance with columns.', '带柱子的有顶入口。', '可数。', 'Guests waited under the portico.', '客人在门廊下等候。', [], ['porch'], 'noun', 'countable', '通用'],
  ], 'porticos', [], '拉丁 porticus（门廊）——与 port（港口）词源为 porta（门）之别、语义关系间接（保守同 placard 先例），留空；近义 porch 门廊');

  W('portrait', 'noun', '/ˈpɔːtrɪt/', '', ['CET6'], '画像；肖像', 'A painting, drawing, or photograph of a person.', [
    ['画像；肖像', 'A painting, drawing, or photograph of a person.', '人的绘画、素描或照片。', '可数。', 'The portrait hung over the fireplace.', '画像挂在壁炉上方。', [], ['miniature', 'nude'], 'noun', 'countable', '艺术'],
  ], 'portraits', [], '法语 portrait（画像）——词干 port 与 portend 同为「向前」义、与港口无关（切词假象），留空；近义 miniature 小画像、nude 裸体画');

  W('posh', 'adjective', '/pɒʃ/', '', [], '高档的；漂亮的', 'Smart and expensive, in a way that seems upper class.', [
    ['高档的；漂亮的', 'Smart and expensive, in a way that seems upper class.', '显得上流社会的时髦与昂贵。', '多作定语，非正式。', 'They stayed at a posh hotel.', '他们住在一家高档酒店。', [], ['fancy'], 'adjective', '定语', '外貌'],
  ], '', [], '来源不明（一说缩略语）——无库内可见词根，留空；近义 fancy 高档的、花哨的');

  W('possessions', 'noun', '/pəˈzeʃnz/', 'B2', [], '所有物；财产（复数）', 'Things that somebody owns.', [
    ['所有物；财产（复数）', 'Things that somebody owns.', '某人拥有的东西。', 'possess 的名词复数形式。', 'She packed all her possessions.', '她打包了所有私人物品。', [], ['goods', 'property'], 'noun', 'countable', '通用'],
  ], '',['property', 'possess'], '←possess B2 + -ion + 复数（possess 全段可见于 possessions），B2 继承（brief 显示 ←?，自行扫根 possess）；家族 property 财产，近 goods 货物、property');

  W('possibility', 'noun', '/ˌpɒsəˈbɪləti/', 'A1', ['CET4'], '可能性', 'The fact that something may happen.', [
    ['可能性', 'The fact that something may happen.', '某事可能发生的事实。', '可数或不可数。', 'We discussed every possibility.', '我们讨论了每种可能性。', [], ['chance', 'potential'], 'noun', 'countable', '通用'],
  ], 'possibilities',['chance', 'possible'], '←possible A1 + -ity（-ity 透明后缀，le→l 正字同 able→ability 类），A1 继承（brief 显示 ←?，自行扫根 possible）；家族 chance 机会，近 potential 潜力');

  W('possibly', 'adverb', '/ˈpɒsəbli/', 'A1', ['CET4'], '可能；也许', 'Used to say that something might be true.', [
    ['可能；也许', 'Used to say that something might be true.', '表示某事可能是真的。', '修饰整句或动词。', 'He is possibly the oldest man alive.', '他可能是现存最年长的人。', [], ['maybe', 'perhaps'], 'adverb', '不及物', '通用'],
  ], '',['maybe', 'perhaps', 'possible'], '←possible A1 + -ly（透明后缀），A1 继承（brief 显示 ←?，自行扫根 possible）；家族 maybe、perhaps 也许，近义同');

  W('postgraduate', 'noun/adjective', '/ˌpəʊstˈɡrædʒuət/', 'B1', [], '研究生；研究生的', 'Studying for a degree after a first degree.', [
    ['研究生；研究生的', 'Studying for a degree after a first degree.', '在取得第一个学位后继续攻读学位的。', '可数作名词，或作定语。', 'She started postgraduate study.', '她开始了研究生学习。', [], ['graduate', 'master'], 'noun/adj', 'countable/定语', '教育'],
  ], 'postgraduates', ['undergraduate'], 'post-（后）为前缀（同 over-/para- 类排除），取其后 graduate B1（minibus 模式），B1 继承（brief 显示 ←?，自行扫根 graduate）；家族 undergraduate 本科生，近 graduate 毕业生、master 硕士');

  W('posture', 'noun', '/ˈpɒstʃə/', 'B2', ['CET4'], '姿势；体态', 'The way somebody holds their body.', [
    ['姿势；体态', 'The way somebody holds their body.', '一个人身体摆放的方式。', '可数或不可数。', 'Good posture prevents back pain.', '良好姿势可预防背痛。', [], ['pose', 'stance'], 'noun', 'uncountable', '健康'],
  ], 'postures', ['pose', 'stance'], '←pose B2（词干 pos 词首全段共享，posture=pos+ture、pose=pos+e，拉丁 ponere 放置同源变体），B2 继承（brief 显示 ←?，自行扫根 pose，兄弟派生）；家族/近义 pose 姿势、stance 站姿');

  W('pouch', 'noun', '/paʊtʃ/', '', [], '小袋；口袋', 'A small bag for keeping things in.', [
    ['小袋；口袋', 'A small bag for keeping things in.', '装东西用的小袋子。', '可数。', 'She kept the keys in a pouch.', '她把钥匙放在小袋里。', [], ['pocket', 'sack'], 'noun', 'countable', '家居'],
  ], 'pouches', ['pocket'], '中古英语 pouch——无库内可见词根（与 pocket 无拼写对应），留空；家族 pocket 口袋，近 sack 布袋');

  W('poverty', 'noun', '/ˈpɒvəti/', '', ['CET4'], '贫穷；贫困', 'The state of being very poor.', [
    ['贫穷；贫困', 'The state of being very poor.', '非常贫穷的状态。', '不可数。', 'The program fights poverty.', '这个项目对抗贫困。', ['poverty line'], ['need'], 'noun', 'uncountable', '社会'],
  ], '', [], '拉丁 paupertas（贫穷）——词干 pauper 与 poor 同源但拼写不可见（v 插入，同 weight→overweight 先例），留空；近义 need 贫困、需要');

  W('power unit', 'noun', '/ˈpaʊər ˈjuːnɪt/', '', [], '功率单位', 'A unit used to measure power.', [
    ['功率单位', 'A unit used to measure power.', '用于测量功率的单位。', '可数，技术用语。', 'The device states one power unit on the label.', '设备标签上标有一个功率单位。', [], ['watt'], 'noun', 'countable', '工业'],
  ], '', [], 'power + unit；近义 watt 瓦特。短语分级留空').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
