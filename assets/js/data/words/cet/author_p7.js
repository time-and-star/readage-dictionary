/* data/words/cet/author_p7.js — 常用词 P 批次 7，缺口 phd ~ planning，共 31 条
 * （28 单词 + 3 短语：phone call、pick up、plain writing）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（2 条全部 CET4：
 * planner、planning）。
 * 扫根结论：photo A1、physical B1、pick A1、picture A1、pit B1、pity B1、pin B1、harmony B2
 * （均在 author_p1/p2/h1）——phd/philharmonic 等见下：
 * · philharmonic←harmony B2（词干 harmon 全段可见于词中、harmony=harmon+y，兄弟派生同
 *   pharmacology←pharmacy 先例）；photovoltaic←photo A1（首成分 photo 在库，minibus 模式）；
 *   physique←physical B1（词干 physi 词首全段共享，-ique 为 -ic 变体）；
 *   pickaxe←pick A1（首成分 pick+axe 复合）；pictogram←picture A1（词干 pict 词首全段共享，
 *   pict-ure 对 pict-o-gram，兄弟派生）；pinpoint←pin A1（首成分 pin+point 复合）；
 *   pitfall←pit B1（首成分 pit+fall 复合）；pitiful/pitiless←pity B1（pity→piti 正字 y→i，
 *   同 organize→organization 变化类）；pipefitter/pipeline/pipes/pipework←pipe A2（brief 根提示）；
 *   planner/planning←plan A2 + -er/-ing（brief 根提示）。
 * · brief 误配修正：pigment←pig 为误配（形含 pig 但语义无关，拉丁 pigmentum 源自 pingere 画，
 *   与 paint 同源但拼写不可见，同 notation←not 先例），留空。
 * · 留空项：philological（philology 不在库）、piazza（意/西语同源拼写不同）、pinion（pin 虽在库
 *   但「翼」义与「钉」义不直连，保守）、placard（place 历史派生但语义已转为「告示」，间接）、
 *   plank（形含 plan 切词假象）、phd（缩略字母词）；pious/pip/pivot/placate/plait（无库内词根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p7.js 必须在 _cet_helper.js 之后加载');

  W('phd', 'noun', '/ˌpiːeɪtʃ ˈdiː/', '', [], '（哲学）博士', 'The highest university degree, Doctor of Philosophy.', [
    ['（哲学）博士', 'The highest university degree, Doctor of Philosophy.', '大学最高学位，哲学博士。', '可数，首字母常大写为 PhD。', 'She completed her phd last year.', '她去年完成了博士学业。', [], ['doctor'], 'noun', 'countable', '教育'],
  ], 'phds', [], 'PhD（Doctor of Philosophy 的缩略，字母词无派生根，留空）；近义 doctor 博士');

  W('philharmonic', 'adjective', '/ˌfɪlhɑːˈmɒnɪk/', 'B2', [], '爱乐的；交响乐团的', 'Of or relating to a group that plays classical music.', [
    ['爱乐的；交响乐团的', 'Of or relating to a group that plays classical music.', '与演奏古典音乐的乐团有关的。', '多作定语，常构成乐团名。', 'A philharmonic orchestra visits each spring.', '每年春天都有一支爱乐乐团来访。', [], ['symphony'], 'adjective', '定语', '艺术'],
  ], '',['harmony'], 'phil-（爱）+ harmonic——harmonic 不在库，取兄弟根 harmony B2（词干 harmon 全段可见于词中，harmony=harmon+y），B2 继承（brief 显示 ←?，同 pharmacology←pharmacy 先例）；近义 symphony 交响乐');

  W('philological', 'adjective', '/ˌfɪləˈlɒdʒɪkl/', '', [], '语文学的', 'Relating to the study of language and old texts.', [
    ['语文学的', 'Relating to the study of language and old texts.', '与语言及古代文本研究有关的。', '多作定语。', 'He published a philological study of old poems.', '他发表了一部古诗语文学研究。', [], ['linguistic'], 'adjective', '定语', '文学'],
  ], '', [], 'philology 不在库，无成分级可继，留空（同 nonreader 先例）；近义 linguistic 语言学的');

  W('photovoltaic', 'adjective', '/ˌfəʊtəʊvɒlˈveɪɪk/', 'A1', [], '光伏的', 'Producing electricity from light.', [
    ['光伏的', 'Producing electricity from light.', '把光转化为电能的。', '多作定语。', 'The roof carries photovoltaic panels.', '屋顶装有光伏板。', ['photovoltaic panel'], ['solar'], 'adjective', '定语', '科学'],
  ], '',['photo'], '首成分 photo A1 在库（photo + voltaic 复合，minibus 首成分模式），A1 继承（brief 显示 ←?，photo 在该复合词取希腊「光」义，与照片义同源、语义直连）；近义 solar 太阳能的');

  W('physique', 'noun', '/fɪˈziːk/', 'B1', [], '体格；体形', 'The shape and strength of a person\'s body.', [
    ['体格；体形', 'The shape and strength of a person\'s body.', '一个人身体的形状与强壮程度。', '可数或不可数。', 'His physique suited the wrestler role.', '他的体格适合摔跤手角色。', [], ['build', 'frame'], 'noun', 'uncountable', '外貌'],
  ], 'physiques',['physical'], '←physical B1（词干 physi 词首全段共享，-ique 为 -ic 变体），B1 继承（brief 显示 ←?，自行扫根 physical，兄弟派生同 optimal←optimum 先例）；近义 build 体形、frame 骨架');

  W('piazza', 'noun', '/piˈætsə/', '', [], '广场；（意式）露天广场', 'A public square in an Italian town.', [
    ['广场；（意式）露天广场', 'A public square in an Italian town.', '意大利城镇中的公共广场。', '可数。', 'They met in the main piazza.', '他们在主广场碰面。', [], ['plaza'], 'noun', 'countable', '地理'],
  ], 'piazzas', [], '意大利语 piazza（广场）——与 plaza 同源（意对西）但拼写不对应，留空；近义 plaza 广场、集市场所');

  W('phone call', 'noun', '/ˈfəʊn kɔːl/', '', [], '电话；通话', 'A conversation made using a telephone.', [
    ['电话；通话', 'A conversation made using a telephone.', '用电话进行的交谈。', '可数。', 'She took a phone call during lunch.', '她在午饭时接了一个电话。', ['make a phone call'], ['call'], 'noun', 'countable', '社交'],
  ], '', [], 'phone + call；近义 call 通话、呼叫。短语分级留空').phrase = true;

  W('pickaxe', 'noun', '/ˈpɪkæks/', 'A1', [], '十字镐', 'A heavy tool with a pointed end for breaking rock.', [
    ['十字镐', 'A heavy tool with a pointed end for breaking rock.', '尖头重型破岩工具。', '可数。', 'He broke the rock with a pickaxe.', '他用十字镐凿开了岩石。', [], ['pick'], 'noun', 'countable', '工具'],
  ], 'pickaxes',['pick', 'axe'], '首成分 pick A1 在库（pick + axe 复合，minibus 首成分模式），A1 继承（brief 显示 ←?）；近义 pick 镐（同词根回指）');

  W('pictogram', 'noun', '/ˈpɪktəɡræm/', 'A1', [], '象形图；象形符号', 'A simple picture that stands for a word or idea.', [
    ['象形图；象形符号', 'A simple picture that stands for a word or idea.', '代表一个词或概念的简单图形。', '可数。', 'The sign uses a simple pictogram.', '这个标识用了一个简单的象形图。', [], ['icon'], 'noun', 'countable', '文化'],
  ], 'pictograms',['picture'], '←picture A1（词干 pict 词首全段共享，pict-ure 对 pict-o-gram），A1 继承（brief 显示 ←?，自行扫根 picture，兄弟派生先例）；近义 icon 图标、象形符号');

  W('pick up', 'verb', '/pɪk ˈʌp/', '', [], '接（人）；取（物）；学会', 'To collect or fetch something, or to learn something by chance.', [
    ['接（人）；取（物）', 'To collect or fetch somebody or something.', '去接某人或取某物。', '及物，可分开。', 'I picked up the keys from the desk.', '我从桌上拿了钥匙。', ['pick it up'], ['fetch', 'receive'], 'verb', '及物', '通用'],
    ['无意间学会', 'To learn or hear something without trying.', '无意中学会或听到某事。', '及物，可分开。', 'He picked up Spanish on the trip.', '他在旅行中学会了西班牙语。', [], [], 'verb', '及物', '教育'],
  ],'picks up~picked up~picking up', [], 'pick + up；近义 fetch 取来、receive 收到。短语分级留空').phrase = true;

  W('pier', 'noun', '/pɪə(r)/', '', [], '码头；桥墩', 'A platform built out over the water for boats or for walking.', [
    ['码头；桥墩', 'A platform built out over the water for boats or for walking.', '伸入水中的平台，供船只停靠或行人行走。', '可数。', 'The ferry leaves from the west pier.', '渡轮从西码头出发。', [], ['dock', 'wharf'], 'noun', 'countable', '交通'],
  ], 'piers', ['dock', 'wharf'], '古法语 pir（码头）——无库内可见词根，留空；家族 dock 码头、wharf 货栈码头，近义同');

  W('pigment', 'noun', '/ˈpɪɡmənt/', '', [], '颜料；色素', 'A substance that gives colour to paint or to living things.', [
    ['颜料；色素', 'A substance that gives colour to paint or to living things.', '给涂料或生物着色的物质。', '可数或不可数。', 'The pigment fades in strong sunlight.', '颜料在强光下褪色。', [], ['ink', 'paint'], 'noun', 'uncountable', '艺术'],
  ], 'pigments', ['ink'], '拉丁 pigmentum（颜料，源自 pingere 画）——brief 根 pig 为误配（形含 pig 猪但语义无关，同 notation←not 先例），与 paint 同源但拼写不可见，留空；家族 ink 墨水，近义 paint 涂料、绘画颜料');

  W('pinion', 'noun/verb', '/ˈpɪniən/', '', [], '翼；绑住', 'A birds wing, or to hold somebody arms so they cannot move.', [
    ['翼；羽翼', 'A birds wing, especially a large one.', '鸟的翅膀，尤指大翼。', '可数，文学用语。', 'The hawk held its pinions wide.', '鹰展开了宽大的翼羽。', [], ['wing'], 'noun', 'countable', '自然'],
    ['绑住', 'To hold somebody arms so that they cannot move.', '抓住某人的手臂使其无法动弹。', '及物，文学用语。', 'Guards pinioned his arms behind his back.', '守卫把他的双臂反绑在背后。', [], [], 'verb', '及物', '通用'],
  ], 'pinions~pinioned~pinioned~pinioning', [], '拉丁 pinna（羽毛）——词首虽含 pin（B1 图钉）但「翼」义与「钉」义语义不直连（保守同 obliterate 类），留空；近义 wing 翅膀');

  W('pinpoint', 'verb', '/ˈpɪnpɔɪnt/', 'A1', [], '准确指出', 'To find or describe exactly where something is.', [
    ['准确指出', 'To find or describe exactly where something is.', '准确找出或说明某物的位置。', '及物。', 'They pinpointed the leak under the sink.', '他们准确找到了水槽下的漏点。', [], ['identify', 'locate'], 'verb', '及物', '通用'],
  ], 'pinpoints~pinpointed~pinpointed~pinpointing',['pin', 'point'], '首成分 pin A1 在库（pin + point 复合，minibus 首成分模式），A1 继承（brief 显示 ←?）；近义 identify 确认、locate 定位');

  W('pious', 'adjective', '/ˈpaɪəs/', '', [], '虔诚的', 'Having strong religious belief and practice.', [
    ['虔诚的', 'Having strong religious belief and practice.', '有坚定宗教信仰并虔敬实践的。', '多作定语。', 'The pious woman prayed daily.', '这位虔诚的妇女每天祈祷。', [], ['holy'], 'adjective', '定语', '宗教'],
  ], '', [], '拉丁 pius（虔敬）——无库内可见词根，留空；近义 holy 神圣的、虔诚的');

  W('pip', 'noun', '/pɪp/', '', [], '果核；种子', 'A small hard seed in a fruit such as an apple.', [
    ['果核；种子', 'A small hard seed in a fruit such as an apple.', '苹果等水果里的小硬籽。', '可数。', 'She spat the pip into her hand.', '她把果核吐到手里。', [], ['seed'], 'noun', 'countable', '饮食'],
  ], 'pips', [], '拟声来源 pip——无库内可见词根，留空；近义 seed 种子');

  W('pipefitter', 'noun', '/ˈpaɪpfɪtə/', 'A2', [], '管道安装工', 'A worker who fits and repairs metal pipes.', [
    ['管道安装工', 'A worker who fits and repairs metal pipes.', '安装和修理金属管道的工人。', '可数。', 'The pipefitter welded the joint.', '管道工焊好了接头。', [], ['plumber'], 'noun', 'countable', '职业'],
  ], 'pipefitters', ['plumber'], '首成分 pipe A2 在库（pipe + fitter 复合，minibus 首成分模式），A2 继承（brief 显示 ←?）；家族/近义 plumber 水管工');

  W('pipeline', 'noun', '/ˈpaɪplaɪn/', 'A2', [], '管道；输送管线', 'A long line of pipes for carrying oil, gas, or water.', [
    ['管道；输送管线', 'A long line of pipes for carrying oil, gas, or water.', '输送石油、天然气或水的长管道。', '可数。', 'The pipeline crosses three provinces.', '这条管道横跨三个省。', ['oil pipeline'], ['pipe'], 'noun', 'countable', '工业'],
  ], 'pipelines', ['pipe'], '首成分 pipe A2 在库（pipe + line 复合，minibus 首成分模式），A2 继承（brief 显示 ←?）；家族/近义 pipe 管子、管道');

  W('pipes', 'noun', '/paɪps/', 'A2', [], '管道（复数）', 'Tubes that carry water or other liquids.', [
    ['管道（复数）', 'Tubes that carry water or other liquids.', '输送水或其他液体的管子。', 'pipe 的复数形式。', 'The pipes under the sink are leaking.', '水槽下的管道在漏水。', [], ['plumbing'], 'noun', 'countable', '家居'],
  ], '', ['plumbing'], '←pipe A2 的复数形式，A2 继承（brief 根提示）；家族/近义 plumbing 管道系统、水管工程');

  W('pipework', 'noun', '/ˈpaɪpwɜːk/', 'A2', [], '管道系统（总称）', 'The system of pipes in a building or machine.', [
    ['管道系统（总称）', 'The system of pipes in a building or machine.', '建筑物或机器中的管道系统。', '不可数。', 'New pipework runs along the ceiling.', '新的管道沿天花板铺设。', [], ['plumbing'], 'noun', 'uncountable', '工业'],
  ], '',['pipe', 'work'], '首成分 pipe A2 在库（pipe + work 复合，minibus 首成分模式），A2 继承（brief 显示 ←?）；近义 plumbing 管道系统');

  W('pitfall', 'noun', '/ˈpɪtfɔːl/', 'B1', [], '陷阱；隐患', 'A problem or difficulty that is easy to miss.', [
    ['陷阱；隐患', 'A problem or difficulty that is easy to miss.', '容易被忽略的问题或困难。', '可数。', 'The guide lists a common pitfall for beginners.', '指南列出了初学者的一个常见陷阱。', [], ['trap'], 'noun', 'countable', '通用'],
  ], 'pitfalls',['pit', 'fall'], '首成分 pit B1 在库（pit + fall 复合，minibus 首成分模式），B1 继承（brief 显示 ←?）；近义 trap 陷阱、圈套');

  W('pitiful', 'adjective', '/ˈpɪtɪfl/', 'B1', [], '可怜的；令人同情的', 'Deserving or causing pity.', [
    ['可怜的；令人同情的', 'Deserving or causing pity.', '值得或引人同情的。', '定语或表语。', 'The puppy looked pitiful in the rain.', '小狗在雨中看起来很可怜。', ['pitiful sight'], ['pathetic', 'poor', 'sad', 'wretched'], 'adjective', '定语/表语', '情感'],
  ], '',['pathetic', 'pity'], '←pity B1 + -ful（pity→piti 正字 y→i 变化，同 organize→organization 类），B1 继承（brief 显示 ←?，自行扫根 pity）；家族 pathetic 可怜的，近 poor 可怜的、sad 悲伤的、wretched 凄惨的');

  W('pitiless', 'adjective', '/ˈpɪtɪləs/', 'B1', [], '无情的；毫不怜悯的', 'Showing no pity at all.', [
    ['无情的；毫不怜悯的', 'Showing no pity at all.', '完全不表示怜悯的。', '多作定语。', 'The critics were pitiless about the film.', '评论家对这部电影毫不留情。', [], ['ruthless'], 'adjective', '定语', '性格'],
  ], '',['pity'], '←pity B1 + -less（pity→piti 正字 y→i 变化），B1 继承（brief 显示 ←?，自行扫根 pity）；近义 ruthless 无情的、残忍的');

  W('pivot', 'noun/verb', '/ˈpɪvət/', '', [], '枢轴；转向', 'A central point that something turns on, or to turn from a central point.', [
    ['枢轴；中心点', 'A central point that something turns on.', '某物绕之转动的中心点。', '可数。', 'The wheel turns on a central pivot.', '轮子绕中心枢轴转动。', [], ['hinge'], 'noun', 'countable', '通用'],
    ['转向', 'To turn from a central point.', '从中心点转向。', '不及物，常与 to 连用。', 'The team pivoted to a new plan.', '团队转向了新计划。', [], [], 'verb', '不及物', '通用'],
  ], 'pivots~pivoted~pivoted~pivoting', ['hinge'], '法语 pivot（枢轴）——无库内可见词根，留空；家族/近义 hinge 铰链、转折点');

  W('placard', 'noun', '/ˈplækɑːd/', '', [], '标语牌；招贴', 'A large notice or poster carried in a march or put on a wall.', [
    ['标语牌；招贴', 'A large notice or poster carried in a march or put on a wall.', '游行中举的大告示或贴在墙上的海报。', '可数。', 'Protesters carried placards through the street.', '抗议者举着标语牌穿过街道。', [], ['poster'], 'noun', 'countable', '社会'],
  ], 'placards', ['poster'], '中古法语 placard（布告）——place 的历史派生但语义已转为「张贴的告示」，关系间接（保守），留空；家族/近义 poster 海报、招贴');

  W('placate', 'verb', '/pleɪˈkeɪt/', '', [], '安抚；平息', 'To make somebody stop feeling angry.', [
    ['安抚；平息', 'To make somebody stop feeling angry.', '使某人不再生气。', '及物，正式用语。', 'He tried to placate the angry crowd.', '他试图安抚愤怒的人群。', [], ['appease'], 'verb', '及物', '社交'],
  ], 'placates~placated~placated~placating', [], '拉丁 placare（使平静）——与 place 非同源、无库内可见词根，留空；近义 appease 缓和、安抚');

  W('plain writing', 'noun', '/ˈpleɪn ˈraɪtɪŋ/', '', [], '平实的文体', 'Writing that is simple and clear.', [
    ['平实的文体', 'Writing that is simple and clear.', '简单清楚的写作方式。', '不可数。', 'Plain writing helps readers act fast.', '平实的文字帮助读者快速行动。', [], ['prose'], 'noun', 'uncountable', '教育'],
  ], '', [], 'plain + writing；近义 prose 散文、平铺直叙的文字。短语分级留空').phrase = true;

  W('plait', 'noun/verb', '/plæt/', '', [], '辫子；编（辫）', 'A length of hair woven into three parts, or to weave hair this way.', [
    ['辫子', 'A length of hair woven into three parts.', '编成三股的一束头发。', '可数，英式，美式作 braid。', 'She wore her hair in a plait.', '她把头发编成辫子。', [], ['weave'], 'noun', 'countable', '外貌'],
    ['编（辫）', 'To weave hair or straw into three or more parts.', '把头发或稻草编成三股以上。', '及物。', 'She plaited the rope into three strands.', '她把绳子编成三股。', [], [], 'verb', '及物', '外貌'],
  ], 'plaits~plaited~plaited~plaiting', [], '古法语 pleyt（折叠）——无库内可见词根，留空；近义 weave 编织');

  W('plank', 'noun', '/plæŋk/', '', [], '木板；厚板', 'A long thick board of wood.', [
    ['木板；厚板', 'A long thick board of wood.', '长而厚的木板。', '可数。', 'A plank bridged the ditch.', '一块木板横在沟上。', [], ['timber'], 'noun', 'countable', '工业'],
  ], 'planks', [], '日耳曼语 plank——形含 plan（A2 计划）但语义无关（切词假象，同 obliterate 先例），留空；近义 timber 木料、板材');

  W('planner', 'noun', '/ˈplænə/', 'A2', ['CET4'], '规划者；计划者', 'A person who plans something, especially towns or events.', [
    ['规划者；计划者', 'A person who plans something, especially towns or events.', '制定计划的人，尤指规划城镇或活动。', '可数。', 'The city planner mapped new parks.', '城市规划者绘制了新公园的地图。', [], ['architect'], 'noun', 'countable', '职业'],
  ], 'planners',['plan'], '←plan A2 + -er（施事后缀），A2 继承（brief 根提示）；近义 architect 建筑师、设计者');

  W('planning', 'noun', '/ˈplænɪŋ/', 'A2', ['CET4'], '规划；计划（编制）', 'The act of making plans for something.', [
    ['规划；计划（编制）', 'The act of making plans for something.', '为某事制定计划的行为。', '不可数。', 'The planning phase lasted a month.', '规划阶段持续了一个月。', ['family planning'], ['logistics', 'strategy'], 'noun', 'uncountable', '商务'],
  ], '',['logistics', 'plan'], '←plan A2 + -ing（动名词名化），A2 继承（brief 根提示）；家族 logistics 物流、后勤，近义 strategy 策略');
})(typeof window !== 'undefined' ? window : globalThis);
