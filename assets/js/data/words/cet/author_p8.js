/* data/words/cet/author_p8.js — 常用词 P 批次 8，缺口 plants ~ pointer，共 31 条
 * （28 单词 + 3 短语：play area、plural form、pocket money）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（5 条全部 CET4：
 * player、pleasant、pleasure、plentiful、poetry）。
 * 扫根结论：plant A2、play A1、please A1、point A2（brief 根提示）；plastic A2、plate A1、
 * plenty A2、poet A2、poem A2（author_p2）——
 * · plants←plant A2 复数；player←play A1 + -er；pleased←please A1 + -ed；
 *   pleasant←please A1 + -ant（-e→∅）；pleasure←please A1 + -ure（-ure 按功能透明，判断项）；
 *   pointed/pointer←point A2 + -ed/-er；
 * · 首成分复合（minibus 模式）：playhouse/playroom/plaything←play A1；
 * · 兄弟派生（词首全段共享词干）：plaster←plastic A2（plast）、poetry←poet A2（poet+ry，
 *   -ry 按 -ary 类功能透明，判断项；poem 拼写不对应未取）；
 * · 正字变化继承：platter←plate A1（去 e 加重叠，同 organize→organization 类）、
 *   plentiful←plenty A2（y→i，同 organize 类）。
 * · 留空项：plumb/plum 不在库→plummet/plume；platitude（plat 与 plate 同源但语义已转，
 *   间接保守）、pleat（拼写不对应）、ploy（deploy 截短无先例）、plaque/plebiscite/pliable/
 *   plod/plump/plunder/plush/plutonium/pod（无库内可见词根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p8.js 必须在 _cet_helper.js 之后加载');

  W('plants', 'noun', '/plænts/', 'A2', [], '植物（复数）', 'Living things such as trees and flowers.', [
    ['植物（复数）', 'Living things such as trees and flowers.', '树木、花草等生物。', 'plant 的复数形式。', 'Desert plants store water.', '沙漠植物储存水分。', [], ['vegetation'], 'noun', 'countable', '自然'],
  ], '',['vegetation', 'plant'], '←plant A2 的复数形式，A2 继承（brief 根提示）；家族/近义 vegetation 植被、植物群');

  W('plaque', 'noun', '/plæk/', '', [], '匾；铭牌；牙菌斑', 'A flat plate with words on it, or a film on teeth.', [
    ['匾；铭牌', 'A flat plate on a wall with words on it.', '墙上带文字的平板。', '可数。', 'The plaque honored the founder.', '这块匾纪念了创始人。', [], ['tablet'], 'noun', 'countable', '文化'],
    ['牙菌斑', 'A thin film of bacteria that forms on teeth.', '牙齿上形成的细菌薄层。', '不可数。', 'Brushing removes plaque from teeth.', '刷牙清除牙齿上的牙菌斑。', [], [], 'noun', 'uncountable', '健康'],
  ], 'plaques', [], '法语 plaque（牌子）——无库内可见词根，留空；近义 tablet 匾、石板');

  W('plaster', 'noun/verb', '/ˈplɑːstə/', 'A2', [], '灰泥；厚厚地涂', 'A soft mixture for covering walls, or to spread something thickly.', [
    ['灰泥', 'A soft mixture for covering walls.', '涂墙用的软混合物。', '不可数。', 'They covered the wall with plaster.', '他们给墙抹了灰。', [], ['render'], 'noun', 'uncountable', '工业'],
    ['厚厚地涂；敷', 'To cover or spread something thickly.', '厚厚地覆盖或涂抹。', '及物。', 'She plastered the walls with posters.', '她把海报贴满了墙。', [], ['slap', 'splash'], 'verb', '及物', '家居'],
    ['创可贴', 'A small piece of material stuck on a cut.', '贴在伤口上的小块材料。', '可数，英式。', 'He put a plaster on his finger.', '他在手指上贴了创可贴。', [], [], 'noun', 'countable', '健康'],
  ], 'plasters~plastered~plastered~plastering',['plastic'], '←plastic A2（词干 plast 词首全段共享，拉丁 plassein 使成形同源），A2 继承（brief 显示 ←?，自行扫根 plastic，兄弟派生同 optimal←optimum 先例）；近义 render 抹灰、slap 乱贴、splash 涂抹');

  W('platitude', 'noun', '/ˈplætɪtjuːd/', '', [], '陈词滥调', 'A remark that has been made many times and has no meaning.', [
    ['陈词滥调', 'A remark that has been made many times and has no meaning.', '重复多次、毫无新意的话。', '可数。', 'The speech was full of platitudes.', '演讲全是陈词滥调。', [], ['cliché'], 'noun', 'countable', '通用'],
  ], 'platitudes', ['cliché'], '法语 platitude（平淡）——词干 plat 与 plate 同源但语义已转为「陈词滥调」，关系间接（保守），留空；家族/近义 cliché 陈词滥调、老套');

  W('platter', 'noun', '/ˈplætə/', 'A1', [], '大盘；大浅盘', 'A large flat plate for serving food.', [
    ['大盘；大浅盘', 'A large flat plate for serving food.', '盛食物用的大平盘。', '可数，美式常用。', 'She served the cheese on a large platter.', '她把奶酪盛在大盘子里。', [], ['plate', 'tray'], 'noun', 'countable', '饮食'],
  ], 'platters',['tray', 'plate'], '←plate A1 + -ter（指小后缀，plate 去 e 加重叠，正字变化同 organize→organization 类），A1 继承（brief 显示 ←?，自行扫根 plate）；家族 tray 托盘，近 plate 盘子、tray');

  W('play area', 'noun', '/ˈpleɪ ˈeəriə/', '', [], '游乐区', 'An area where children can play.', [
    ['游乐区', 'An area where children can play.', '儿童可以玩耍的区域。', '可数。', 'The play area is fenced.', '游乐区有围栏。', [], ['playground'], 'noun', 'countable', '教育'],
  ], '', ['playground'], 'play + area；家族/近义 playground 操场、游乐场。短语分级留空').phrase = true;

  W('player', 'noun', '/ˈpleɪə/', 'A1', ['CET4'], '运动员；演奏者', 'A person who plays a sport or a musical instrument.', [
    ['运动员', 'A person who plays a sport.', '从事体育运动的人。', '可数。', 'Every player trained twice a day.', '每名运动员每天训练两次。', [], ['international', 'sportsman'], 'noun', 'countable', '体育'],
    ['演奏者；演员', 'A person who plays a musical instrument or acts.', '演奏乐器或表演的人。', '可数。', 'He is a fine classical player.', '他是出色的古典乐演奏者。', [], [], 'noun', 'countable', '艺术'],
  ], 'players',['play'], '←play A1 + -er（施事后缀），A1 继承（brief 根提示）；近义 international 国际球员、sportsman 运动员（队列原样）');

  W('playhouse', 'noun', '/ˈpleɪhaʊs/', 'A1', [], '剧场；游戏屋', 'A small theatre, or a house for children to play in.', [
    ['剧场；游戏屋', 'A small theatre, or a house for children to play in.', '小剧场；或儿童玩耍的小屋。', '可数。', 'The village has a small playhouse.', '村里有一座小剧场。', [], ['theater'], 'noun', 'countable', '文化'],
  ], 'playhouses',['play', 'house'], '首成分 play A1 在库（play + house 复合，minibus 首成分模式），A1 继承（brief 显示 ←?）；近义 theater 剧场');

  W('playroom', 'noun', '/ˈpleɪruːm/', 'A1', [], '游戏室', 'A room where children keep their toys and play.', [
    ['游戏室', 'A room where children keep their toys and play.', '存放玩具并供儿童玩耍的房间。', '可数。', 'Toys cover the playroom floor.', '玩具铺满了游戏室的地板。', [], ['nursery'], 'noun', 'countable', '家居'],
  ], 'playrooms',['play', 'room'], '首成分 play A1 在库（play + room 复合，minibus 首成分模式），A1 继承（brief 显示 ←?）；近义 nursery 儿童游戏室、托儿所');

  W('plaything', 'noun', '/ˈpleɪθɪŋ/', 'A1', [], '玩具；玩物', 'A toy, or somebody used without serious thought.', [
    ['玩具；玩物', 'A toy, or somebody used without serious thought.', '玩具；或被随意利用的人。', '可数，较 formal。', 'The old toy became a favorite plaything.', '旧玩具成了最爱的玩物。', [], ['toy'], 'noun', 'countable', '娱乐'],
  ], 'playthings', ['toy'], '首成分 play A1 在库（play + thing 复合，minibus 首成分模式），A1 继承（brief 显示 ←?）；家族/近义 toy 玩具');

  W('pleasant', 'adjective', '/ˈpleznt/', 'A1', ['CET4'], '令人愉快的', 'Giving a feeling of enjoyment.', [
    ['令人愉快的', 'Giving a feeling of enjoyment.', '给人以享受感的。', '定语或表语。', 'We had a pleasant afternoon.', '我们度过了愉快的下午。', ['pleasant surprise'], ['nice', 'welcome'], 'adjective', '定语/表语', '通用'],
  ], '',['nice', 'please'], '←please A1 + -ant（-e→∅+ant，-ant 透明后缀），A1 继承（brief 显示 ←?，自行扫根 please，经 pleased 根提示确认）；家族 nice 好的，近 welcome 令人愉快的');

  W('pleased', 'adjective', '/pliːzd/', 'A1', [], '高兴的；满意的', 'Feeling or showing happiness.', [
    ['高兴的；满意的', 'Feeling or showing happiness.', '感到或表现出高兴的。', '表语，常与 with/about 连用。', 'She was pleased with the result.', '她对结果很满意。', ['pleased with'], ['glad'], 'adjective', '表语', '情感'],
  ], '',['glad', 'please'], '←please A1 + -ed（透明后缀），A1 继承（brief 根提示）；家族/近义 glad 高兴的、乐意的');

  W('pleasure', 'noun', '/ˈpleʒə/', 'A1', ['CET4'], '快乐；乐事', 'A feeling of happiness, or something that gives it.', [
    ['快乐；快感', 'A feeling of happiness.', '一种幸福的感觉。', '不可数。', 'The work gave her great pleasure.', '这份工作给她带来极大快乐。', ['take pleasure in'], ['delight', 'fun'], 'noun', 'uncountable', '情感'],
    ['乐事；荣幸', 'Something that gives happiness, or an honour.', '带来快乐的事；或一种荣幸。', '可数。', 'It is a pleasure to help you.', '能帮你是我的荣幸。', [], ['privilege', 'treat'], 'noun', 'countable', '情感'],
  ], 'pleasures',['please'], '←please A1 + -ure（-ure 名化后缀按功能透明处理，判断项），A1 继承（brief 显示 ←?，自行扫根 please）；近义 delight 快乐、fun 乐趣、privilege 荣幸、treat 乐事');

  W('pleat', 'noun/verb', '/pliːt/', '', [], '褶；打褶', 'A fold pressed into cloth, or to press folds into cloth.', [
    ['褶', 'A fold pressed into cloth.', '压入布料的折叠。', '可数。', 'The skirt has a deep pleat.', '裙子有一道深褶。', [], ['fold', 'gather', 'tuck'], 'noun', 'countable', '外貌'],
    ['打褶', 'To press folds into cloth.', '把布料压出褶。', '及物。', 'She pleated the fabric before sewing.', '她在缝之前把布料打了褶。', [], [], 'verb', '及物', '外貌'],
  ], 'pleats~pleated~pleated~pleating', [], '古法语 pleyt（折叠）——与 plate/plait 同源但拼写不对应，留空；近义 fold 折、gather 收拢、tuck 塞');

  W('plebiscite', 'noun', '/ˈplebɪsaɪt/', '', [], '公民投票', 'A direct vote of all the people on an important question.', [
    ['公民投票', 'A direct vote of all the people on an important question.', '全体人民就重要问题进行的直接投票。', '可数。', 'The plebiscite asked one simple question.', '公民投票只问了一个简单问题。', [], ['referendum'], 'noun', 'countable', '政治'],
  ], 'plebiscites', ['referendum'], '拉丁 plebiscitum（平民法令）——无库内可见词根，留空；家族/近义 referendum 全民公投、公民复决');

  W('plentiful', 'adjective', '/ˈplentɪfl/', 'A2', ['CET4'], '丰富的；大量的', 'Existing in large quantities.', [
    ['丰富的；大量的', 'Existing in large quantities.', '大量存在的。', '多作定语或表语。', 'Fish were plentiful that season.', '那个季节鱼很丰富。', ['plentiful supply'], ['abundant', 'ample', 'numerous'], 'adjective', '定语/表语', '通用'],
  ], '',['plenty'], '←plenty A2 + -ful（plenty→plenti 正字 y→i，同 organize→organization 类），A2 继承（brief 显示 ←?，自行扫根 plenty）；近义 abundant 丰富的、ample 充足的、numerous 众多的');

  W('pliable', 'adjective', '/ˈplaɪəbl/', '', [], '柔韧的；易弯曲的', 'Bending easily without breaking.', [
    ['柔韧的；易弯曲的', 'Bending easily without breaking.', '容易弯曲而不断裂的。', '多作表语。', 'The strip is pliable enough to bend.', '这条带子够柔韧，可以弯曲。', [], ['flexible'], 'adjective', '表语', '通用'],
  ], '', [], '拉丁 plicare（折叠）——无库内可见词根，留空；近义 flexible 柔韧的、灵活的');

  W('plod', 'verb', '/plɒd/', '', [], '缓慢地走；埋头苦干', 'To walk slowly with effort, or to work steadily and slowly.', [
    ['缓慢地走；埋头苦干', 'To walk slowly with effort, or to work steadily and slowly.', '费力地慢走；或稳扎稳打地苦干。', '不及物，非正式。', 'He plodded on until the job was done.', '他埋头苦干直到活儿干完。', ['plod along'], ['labor'], 'verb', '不及物', '通用'],
  ], 'plods~plodded~plodded~plodding', [], '拟声来源 plod——无库内可见词根，留空；近义 labor 辛勤劳动、苦干');

  W('ploy', 'noun', '/plɔɪ/', '', [], '策略；花招', 'An action designed to gain an advantage.', [
    ['策略；花招', 'An action designed to gain an advantage.', '为取得优势而采取的行动。', '可数，非正式。', 'The delay was a clever ploy.', '拖延是巧妙的一招。', [], ['dodge', 'maneuver', 'tactic'], 'noun', 'countable', '通用'],
  ], 'ploys', [], 'ploy 为 deploy（部署）的截短——截短派生无库内先例，保守留空；近义 dodge 花招、maneuver 手段、tactic 策略');

  W('plume', 'noun', '/pluːm/', '', [], '羽毛；羽饰；烟羽', 'A large feather, or a mass of smoke or dust shaped like one.', [
    ['羽毛；羽饰', 'A large feather, especially one used as decoration.', '大羽毛，尤指作装饰用的。', '可数。', 'The chiefs hat carried a plume.', '首领的帽子插着羽饰。', [], ['feather'], 'noun', 'countable', '自然'],
    ['烟羽', 'A mass of smoke or dust rising in the shape of a feather.', '羽状上升的烟尘团。', '可数。', 'A plume of smoke rose from the fire.', '一股烟羽从火中升起。', [], [], 'noun', 'countable', '自然'],
  ], 'plumes', ['feather'], '拉丁 pluma（绒羽）——无库内可见词根（plum 不在库），留空；家族/近义 feather 羽毛');

  W('plummet', 'verb', '/ˈplʌmɪt/', '', [], '骤然下跌；垂直落下', 'To fall or drop suddenly and steeply.', [
    ['骤然下跌；垂直落下', 'To fall or drop suddenly and steeply.', '突然而陡峭地下落。', '不及物。', 'Prices plummeted after the announcement.', '消息公布后价格暴跌。', [], ['dive', 'plunge'], 'verb', '不及物', '通用'],
  ], 'plummets~plummeted~plummeted~plummeting', ['dive'], '中古英语 plommet（铅锤）——plumb 不在库，无成分级可继，留空（同 nonreader 先例）；家族 dive 俯冲，近 plunge 坠入、暴跌');

  W('plump', 'adjective', '/plʌmp/', '', [], '丰满的；圆胖的', 'Slightly fat in a way that looks healthy.', [
    ['丰满的；圆胖的', 'Slightly fat in a way that looks healthy.', '看起来健康的微胖。', '定语或表语，较委婉。', 'She has a plump face.', '她有张圆润的脸。', [], ['fat'], 'adjective', '定语/表语', '外貌'],
  ], '', [], '日耳曼语 plump（扑通）——无库内可见词根，留空；近义 fat 胖的、丰满的');

  W('plunder', 'verb/noun', '/ˈplʌndə/', '', [], '劫掠；战利品', 'To steal goods during war or trouble, or the goods stolen.', [
    ['劫掠', 'To steal goods during war or trouble.', '在战争或混乱中偷抢财物。', '及物。', 'The troops plundered the town.', '军队洗劫了这座城。', [], ['loot', 'rape', 'sack'], 'verb', '及物', '军事'],
    ['战利品', 'Goods stolen in this way.', '以这种方式偷来的财物。', '不可数。', 'The troops carried off the plunder.', '军队带走了战利品。', [], [], 'noun', 'uncountable', '军事'],
  ], 'plunders~plundered~plundered~plundering', ['loot'], '中古荷兰语 plunderen（洗劫）——无库内可见词根，留空；家族 loot 战利品，近 rape 抢掠、sack 洗劫');

  W('plural form', 'noun', '/ˈplʊərəl fɔːm/', '', [], '复数形式', 'The form of a word used for more than one.', [
    ['复数形式', 'The form of a word used for more than one.', '一词用于多于一个时的形式。', '语法术语，可数。', 'Children learn the plural form early.', '孩子们很早学会复数形式。', [], ['plural'], 'noun', 'countable', '语法'],
  ], '', [], 'plural + form；近义 plural 复数的。短语分级留空').phrase = true;

  W('plush', 'adjective', '/plʌʃ/', '', [], '豪华舒适的；长绒的', 'Expensive and comfortable, or made of thick soft material.', [
    ['豪华舒适的；长绒的', 'Expensive and comfortable, or made of thick soft material.', '昂贵舒适的；或用厚软材料制成的。', '多作定语，非正式。', 'The lounge has a plush carpet.', '休息室铺着豪华地毯。', [], ['velvet'], 'adjective', '定语', '家居'],
  ], '', ['velvet'], '法语 peluche（长毛绒）——无库内可见词根，留空；家族/近义 velvet 天鹅绒');

  W('plutonium', 'noun', '/pluːˈtəʊniəm/', '', [], '钚', 'A radioactive metal used as fuel in nuclear reactors.', [
    ['钚', 'A radioactive metal used as fuel in nuclear reactors.', '用作核反应堆燃料的放射性金属。', '不可数，元素符号 Pu。', 'The reactor uses plutonium fuel.', '反应堆使用钚燃料。', [], [], 'noun', 'uncountable', '科学'],
  ], '', ['uranium'], '元素名 Pluto（冥王星）+ -ium（金属后缀）——词根 Pluto 不在库、-ium 非透明清单项，留空；家族 uranium 铀；队列近义为空');

  W('pocket money', 'noun', '/ˈpɒkɪt ˌmʌni/', '', [], '零花钱', 'Small amounts of money for personal small purchases.', [
    ['零花钱', 'Small amounts of money for personal small purchases.', '用于个人小额花销的少量钱。', '不可数，英式；美式作 allowance。', 'He saves his pocket money each week.', '他每周存零花钱。', [], ['allowance'], 'noun', 'uncountable', '金融'],
  ], '', [], 'pocket + money；近义 allowance 零用钱、补贴。短语分级留空').phrase = true;

  W('pod', 'noun', '/pɒd/', '', [], '豆荚；荚果', 'A long thin case that contains seeds of a plant.', [
    ['豆荚；荚果', 'A long thin case that contains seeds of a plant.', '装有植物种子的细长荚。', '可数。', 'Peas grow inside a pod.', '豌豆长在豆荚里。', [], ['capsule'], 'noun', 'countable', '自然'],
  ], 'pods', ['capsule'], '日耳德语 pod——无库内可见词根，留空；家族/近义 capsule 豆荚、胶囊');

  W('poetry', 'noun', '/ˈpəʊɪtri/', 'A2', ['CET4'], '诗；诗歌（总称）', 'Poems considered as a group, or the art of writing them.', [
    ['诗；诗歌（总称）', 'Poems considered as a group, or the art of writing them.', '作为整体的诗作；或写诗的艺术。', '不可数。', 'He reads modern poetry each night.', '他每晚读现代诗。', [], ['poem', 'verse'], 'noun', 'uncountable', '文学'],
  ], '',['poem', 'verse', 'poet'], '←poet A2 + -ry（-ary/-ery 类后缀按功能透明处理，判断项），A2 继承（brief 显示 ←?，自行扫根 poet；poem 拼写不对应未取）；家族 poem 诗、verse 韵文，近义同');

  W('pointed', 'adjective', '/ˈpɔɪntɪd/', 'A2', [], '尖的；尖锐的', 'Having a sharp end, or said clearly and directly.', [
    ['尖的；尖锐的', 'Having a sharp end.', '有尖端的。', '多作定语。', 'The pointed roof suited the castle.', '尖顶适合这座城堡。', [], ['sharp'], 'adjective', '定语', '通用'],
  ], '',['point'], '←point A2 + -ed（透明后缀），A2 继承（brief 根提示）；近义 sharp 锋利的、尖锐的');

  W('pointer', 'noun', '/ˈpɔɪntə/', 'A2', [], '指针；提示', 'A thing that points, or a useful piece of advice.', [
    ['指针；指示物', 'A thing that points, such as an arrow or a marker.', '指向之物，如箭头或标记。', '可数。', 'A small pointer marks the spot.', '一个小指针标出了位置。', [], ['hand', 'mouse', 'needle'], 'noun', 'countable', '通用'],
    ['（给建议的）提示', 'A useful piece of advice.', '一条有用的建议。', '可数，非正式。', 'She gave me a useful pointer about the form.', '她就表格给了我一条有用的提示。', [], [], 'noun', 'countable', '通用'],
  ], 'pointers',['mouse', 'point'], '←point A2 + -er（施事后缀），A2 继承（brief 根提示）；家族 mouse 鼠标，近 hand 手势、mouse、needle 指针');
})(typeof window !== 'undefined' ? window : globalThis);
