/* data/words/cet/author_g4.js · 手敲词条 G（四·尾批）：grippe ~ guys（含 2 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_g4.js 必须在 _cet_helper.js 之后加载');

  W('grippe', 'noun', '/ɡrɪp/', '', [], '流感', 'Influenza, especially a bad case.', [
    ['流感', 'Influenza, especially a bad case.', '流感，尤指重症。', '不可数，旧式；现多用 flu。', 'He caught the grippe.', '他得了流感。', [], ['influenza'], 'noun', 'uncountable', '健康'],
  ], '', [], '法语 grippe——无库内派生根；近义 influenza 流感（正式）');

  W('grit', 'noun/verb', '/ɡrɪt/', '', [], '沙砾；勇气；咬紧', 'Sand bits, courage, or to clench teeth.', [
    ['沙砾；勇气；咬紧', 'Sand bits, courage, or to clench teeth.', '沙粒、勇气，或咬紧牙关。', '不可数或及物动词：grit teeth。', 'She showed true grit.', '她表现出真正的勇气。', ['grit teeth'], ['clench', 'sand'], 'noun/verb', 'null', '通用'],
  ], '', ['clench', 'sand'], '古英语 greot——无库内派生根；家族 clench 咬紧、sand 沙子');

  W('grocery', 'noun', '/ˈɡrəʊsəri/', 'B2', ['CET4'], '杂货店', 'A shop selling food daily.', [
    ['杂货店', 'A shop selling food daily.', '卖日常食品的店。', '可数，常复数 groceries（买的杂货）。', 'Buy milk at the grocery.', '去杂货店买牛奶。', [], ['supermarket'], 'noun', 'countable', '商务'],
  ], 'groceries', ['grocer', 'supermarket'], '←grocer B2 + -y，B2 继承；家族 supermarket 超市');

  W('groom', 'noun/verb', '/ɡruːm/', '', [], '新郎；打扮', 'A bridegroom, or to clean and dress.', [
    ['新郎；打扮', 'A bridegroom, or to clean and dress.', '新郎，或梳洗打扮。', '可数或及物动词。', 'The groom waited nervously.', '新郎紧张地等着。', [], ['bride', 'bridegroom'], 'noun/verb', 'null', '家庭'],
  ], 'grooms~groomed~groomed~grooming', ['bride', 'bridegroom'], '古英语 guma——无库内派生根；家族 bride 新娘、bridegroom 新郎');

  W('ground beef', 'noun', '/ˌɡraʊnd ˈbiːf/', '', [], '碎牛肉', 'Minced beef meat.', [
    ['碎牛肉', 'Minced beef meat.', '绞碎的牛肉。', '不可数，美式；英式 minced beef。', 'Add ground beef to the pan.', '往锅里加碎牛肉。', [], ['hamburger'], 'noun', 'uncountable', '饮食'],
  ], '', ['hamburger'], 'ground 绞碎 + beef 牛肉；近义 hamburger 汉堡肉饼。短语分级留空').phrase = true;

  W('groundbreaking', 'adjective/noun', '/ˈɡraʊndbreɪkɪŋ/', 'A1', [], '开创性的', 'New and important.', [
    ['开创性的', 'New and important.', '崭新重要的。', 'a groundbreaking study 开创性研究。', 'It was groundbreaking work.', '这是开创性工作。', [], ['landmark'], 'adjective/noun', 'null', '科学'],
  ], '', ['ground', 'break'], 'ground 地 + breaking 打破，取首成分 ground A1 级 A1；近义 landmark 里程碑');

  W('groundless', 'adjective', '/ˈɡraʊndləs/', 'A1', [], '无根据的', 'With no reason.', [
    ['无根据的', 'With no reason.', '没有理由的。', 'groundless fears 无端恐惧。', 'His fears were groundless.', '他的担心毫无根据。', [], ['idle'], 'adjective', '定语/表语', '通用'],
  ], '', ['ground'], '←ground A1 + -less（无…的），A1 继承；近义 idle 空泛的（无谓的）');

  W('groundnut', 'noun', '/ˈɡraʊndnʌt/', 'A1', [], '花生', 'A peanut growing underground.', [
    ['花生', 'A peanut growing underground.', '长在地下的花生。', '可数。', 'They roast groundnuts.', '他们烤花生。', [], ['peanut'], 'noun', 'countable', '饮食'],
  ], 'groundnuts', ['peanut'], 'ground 地 + nut 坚果，取首成分级 A1；家族 peanut 花生');

  W('grounds', 'noun', '/ɡraʊndz/', 'A1', [], '场地；理由（复数）', 'Land around a house, or reasons; plural of ground.', [
    ['场地；理由（复数）', 'Land around a house, or reasons; plural of ground.', '房子周围的地，或理由；ground 的复数。', '复数：school grounds 校园。', 'The school grounds are large.', '校园很大。', ['school grounds'], ['garden', 'reason', 'warrant'], 'noun', 'countable', '通用'],
  ], '', ['ground'], '←ground A1 + -s，A1 继承；近义 garden 庭院、reason 理由、warrant 根据');

  W('grove', 'noun', '/ɡrəʊv/', '', [], '小树林', 'A small group of trees.', [
    ['小树林', 'A small group of trees.', '一小片树。', '可数。', 'An orange grove stood nearby.', '附近有片橘林。', [], ['wood'], 'noun', 'countable', '自然'],
  ], 'groves', [], '古英语 graf——无库内派生根；近义 wood 树林。分级留空');

  W('growl', 'verb/noun', '/ɡraʊl/', '', [], '咆哮', 'A low angry animal sound.', [
    ['咆哮', 'A low angry animal sound.', '动物低沉愤怒的叫声。', '可数或不及物动词。', 'The dog growled at strangers.', '狗对陌生人吼叫。', [], ['bark'], 'verb/noun', 'null', '自然'],
  ], 'growls~growled~growled~growling', ['bark'], '拟声语源——无库内派生根；家族 bark 犬吠');

  W('grown', 'adjective', '/ɡrəʊn/', 'A1', [], '长大了的', 'Fully developed.', [
    ['长大了的', 'Fully developed.', '完全长成的。', '分词形容词：grown-ups 大人。', 'They have two grown sons.', '他们有两个成年儿子。', [], ['mature'], 'adjective', '定语', '家庭'],
  ], '', ['grow'], '←grow A1 + -n（同 blown），A1 继承；近义 mature 成熟的');

  W('grown-up', 'noun/adjective', '/ˌɡrəʊn ˈʌp/', 'A1', [], '成年人', 'An adult person.', [
    ['成年人', 'An adult person.', '成年的人。', '可数或形容词。', 'Ask a grown-up for help.', '找大人帮忙。', [], ['adult'], 'noun/adjective', 'null', '家庭'],
  ], 'grown-ups', ['grown'], '←grown（本批新词 A1）+ -up，A1 继承；近义 adult 成年人');

  W('growth', 'noun', '/ɡrəʊθ/', 'A1', ['CET4'], '增长；生长', 'Becoming bigger or more.', [
    ['增长；生长', 'Becoming bigger or more.', '变大或变多。', '不可数或可数。', 'The city saw fast growth.', '城市快速增长。', [], ['increase', 'tumor', 'vegetation'], 'noun', 'uncountable/countable', '商务'],
  ], '', ['grow', 'tumor'], '←grow A1 + -th（同 width），A1 继承；家族 tumor 肿瘤，近义 increase 增长、vegetation 植被');

  W('grudging', 'adjective', '/ˈɡrʌdʒɪŋ/', '', [], '不情愿的', 'Given unwillingly.', [
    ['不情愿的', 'Given unwillingly.', '不乐意给的。', 'a grudging apology 勉强的道歉。', 'He gave grudging praise.', '他勉强夸了一句。', [], ['reluctant'], 'adjective', '定语', '情感'],
  ], '', ['grudge'], 'grudge 怨恨（本词库未收）+ -ing——词根不可见，故留空；近义 reluctant 不情愿的');

  W('gruel', 'noun', '/ˈɡruːəl/', '', [], '稀粥', 'Thin cooked grain soup.', [
    ['稀粥', 'Thin cooked grain soup.', '煮得很稀的谷物汤。', '不可数。', 'They lived on gruel.', '他们靠稀粥活命。', [], ['porridge'], 'noun', 'uncountable', '饮食'],
  ], '', ['porridge'], '古法语 gruel——无库内派生根；家族 porridge 燕麦粥');

  W('grumble', 'verb/noun', '/ˈɡrʌmbl/', '', [], '抱怨', 'To complain in a low voice.', [
    ['抱怨', 'To complain in a low voice.', '低声抱怨。', '可数或不及物动词：grumble about。', 'Stop grumbling about food.', '别抱怨饭菜了。', ['grumble about'], ['complain', 'murmur', 'mutter'], 'verb/noun', 'null', '通用'],
  ], 'grumbles~grumbled~grumbled~grumbling', ['complain'], '拟声语源——无库内派生根；家族 complain 抱怨，近义 murmur 低语、mutter 嘟囔');

  W('guardianship', 'noun', '/ˈɡɑːdiənʃɪp/', '', [], '监护权', 'Legal care of a child.', [
    ['监护权', 'Legal care of a child.', '法律上照顾孩子的权利。', '不可数，法律用语。', 'She won guardianship.', '她赢得了监护权。', [], ['custody'], 'noun', 'uncountable', '法律'],
  ], '', ['custody'], 'guardian 监护人（本词库未收）+ -ship——词根不可见，故留空；家族 custody 监护权');

  W('guerrilla', 'noun/adjective', '/ɡəˈrɪlə/', '', [], '游击队（员）的', 'Small groups fighting bigger armies.', [
    ['游击队（员）的', 'Small groups fighting bigger armies.', '打大部队的小股队伍。', '可数或形容词。', 'Guerrillas hid in hills.', '游击队藏在山里。', [], ['irregular', 'partisan'], 'noun/adjective', 'null', '军事'],
  ], 'guerrillas', ['partisan'], '西班牙语 guerrilla（小战争）——无库内派生根；家族 partisan 游击队员，近义 irregular 非正规军');

  W('guesthouse', 'noun', '/ˈɡesthaʊs/', 'A2', [], '宾馆', 'A small cheap hotel.', [
    ['宾馆', 'A small cheap hotel.', '小而便宜的旅馆。', '可数。', 'We stayed in a guesthouse.', '我们住在小旅馆。', [], ['inn'], 'noun', 'countable', '商务'],
  ], 'guesthouses', ['guest', 'house'], 'guest 客人 + house 房子，取首成分级 A2；近义 inn 小旅馆');

  W('guests', 'noun', '/ɡests/', 'A2', [], '客人（复数）', 'Visitors; plural of guest.', [
    ['客人（复数）', 'Visitors; plural of guest.', '来访者；guest 的复数。', '复数。', 'The guests arrived late.', '客人们晚到了。', [], ['company'], 'noun', 'countable', '社交'],
  ], '', ['guest'], '←guest A2 + -s，A2 继承；近义 company 客人（一拨）');

  W('guidebook', 'noun', '/ˈɡaɪdbʊk/', 'A2', [], '指南', 'A book of travel advice.', [
    ['指南', 'A book of travel advice.', '旅行建议的书。', '可数。', 'Buy a local guidebook.', '买本当地指南。', [], ['handbook'], 'noun', 'countable', '文化'],
  ], 'guidebooks', ['handbook'], 'guide 指南 + book 书，取首成分级 A2；家族 handbook 手册');

  W('guile', 'noun', '/ɡaɪl/', '', [], '狡诈', 'Clever cheating.', [
    ['狡诈', 'Clever cheating.', '聪明的欺骗。', '不可数，较文。', 'He won by guile.', '他靠狡诈获胜。', [], ['cunning'], 'noun', 'uncountable', '性格'],
  ], '', ['cunning'], '古法语 guile——无库内派生根；家族 cunning 狡猾');

  W('guiltless', 'adjective', '/ˈɡɪltləs/', 'B2', [], '无罪的', 'Not guilty.', [
    ['无罪的', 'Not guilty.', '没罪的。', 'be guiltless of 无…之罪。', 'She is guiltless of the crime.', '她无罪。', ['guiltless of'], ['innocent'], 'adjective', '定语/表语', '法律'],
  ], '', ['guilt', 'innocent'], '←guilt B2 + -less（无…的），B2 继承；家族 innocent 无辜的');

  W('guise', 'noun', '/ɡaɪz/', '', [], '伪装', 'A false outward look.', [
    ['伪装', 'A false outward look.', '虚假的外表。', '可数：in the guise of 假扮成。', 'He came in the guise of a beggar.', '他扮成乞丐来了。', ['in the guise of'], ['pretext'], 'noun', 'countable', '通用'],
  ], 'guises', ['pretext'], '古法语 guise——无库内派生根；家族 pretext 借口');

  W('gullet', 'noun', '/ˈɡʌlɪt/', '', [], '食道', 'The tube to the stomach.', [
    ['食道', 'The tube to the stomach.', '通向胃的管子。', '可数。', 'Food passed down the gullet.', '食物顺食道下去。', [], ['throat'], 'noun', 'countable', '健康'],
  ], 'gullets', ['throat'], '古法语 golet——无库内派生根；家族 throat 喉咙');

  W('gullible', 'adjective', '/ˈɡʌlɪbl/', '', [], '易受骗的', 'Easily tricked.', [
    ['易受骗的', 'Easily tricked.', '容易被骗的。', 'be gullible 轻信。', 'Do not be so gullible.', '别这么轻信。', [], ['naive'], 'adjective', '定语/表语', '性格'],
  ], '', ['gull'], 'gull 欺骗（本词库未收）+ -ible——词根不可见，故留空；近义 naive 天真的');

  W('gulp', 'verb/noun', '/ɡʌlp/', '', [], '大口吞', 'To swallow fast and loud.', [
    ['大口吞', 'To swallow fast and loud.', '又快又响地吞。', '可数或及物动词：gulp down。', 'He gulped his tea.', '他大口喝茶。', ['gulp down'], ['gasp', 'swallow'], 'verb/noun', 'null', '饮食'],
  ], 'gulps~gulped~gulped~gulping', ['gasp', 'swallow'], '拟声语源——无库内派生根；家族 gasp 喘气、swallow 吞');

  W('gun down', 'verb', '/ˌɡʌn ˈdaʊn/', '', [], '枪杀', 'To shoot dead.', [
    ['枪杀', 'To shoot dead.', '开枪打死。', '及物短语。', 'He was gunned down.', '他被枪杀了。', [], ['shoot'], 'verb', '及物', '法律'],
  ], '', ['shoot'], 'gun 枪 + down 倒；近义 shoot 射杀。短语分级留空').phrase = true;

  W('gunfire', 'noun', '/ˈɡʌnfaɪə(r)/', 'A2', [], '炮火', 'Shots from guns.', [
    ['炮火', 'Shots from guns.', '枪炮的射击。', '不可数。', 'Gunfire echoed at night.', '夜里炮声回荡。', [], ['shot'], 'noun', 'uncountable', '军事'],
  ], '', ['gun', 'fire'], 'gun 枪 + fire 火，取首成分级 A2；近义 shot 射击');

  W('gust', 'noun/verb', '/ɡʌst/', '', [], '阵风', 'A sudden strong wind.', [
    ['阵风', 'A sudden strong wind.', '突然的大风。', '可数或不及物动词。', 'A gust shook the tent.', '一阵风撼动帐篷。', [], ['blast'], 'noun/verb', 'null', '自然'],
  ], 'gusts~gusted~gusted~gusting', ['blast'], '古诺尔斯语 gustr——无库内派生根；家族 blast 强风');

  W('guys', 'noun', '/ɡaɪz/', 'A2', [], '家伙们（复数）', 'Men or people; plural of guy.', [
    ['家伙们（复数）', 'Men or people; plural of guy.', '男人们或人们；guy 的复数。', '复数，口语：hi guys 大家好。', 'Come on, guys.', '来吧，伙计们。', ['hi guys'], ['lad'], 'noun', 'countable', '口语'],
  ], '', ['guy'], '←guy A2 + -s，A2 继承；近义 lad 小伙子');

})(typeof window !== 'undefined' ? window : globalThis);
