/* data/words/cet/author_k2.js · 手敲词条 K（二·引用缺口批）：kayak ~ known + 5 短语（29 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空。
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_k2.js 必须在 _cet_helper.js 之后加载');

  W('kayak', 'noun/verb', '/ˈkaɪæk/', '', [], '皮划艇', 'A narrow boat moved with a double paddle.', [
    ['皮划艇', 'A narrow boat moved with a double paddle.', '用双头桨划的窄身小船。', '可数；动词义为划皮艇。', 'They raced the kayak downstream.', '他们驾皮划艇顺流竞速。', [], ['canoe'], 'noun/verb', 'null', '体育'],
  ], 'kayaks~kayaked~kayaked~kayaking', ['canoe'], '因纽特语 qajaq——无库内派生根，故留空；家族 canoe 独木舟');

  W('keenly', 'adverb', '/ˈkiːnli/', 'B2', [], '热切地', 'In a keen or eager way.', [
    ['热切地', 'In a keen or eager way.', '以热切、敏锐的方式。', '副词。', 'She keenly missed her family.', '她深切地想念家人。', [], [], 'adverb', 'null', '通用'],
  ], '', ['keen'], '←keen B2 + -ly（透明后缀），B2 继承；家族 keen 热衷的');

  W('keenness', 'noun', '/ˈkiːnnəs/', 'B2', [], '热衷；敏锐', 'The quality of being keen.', [
    ['热衷；敏锐', 'The quality of being keen.', '热衷或敏锐的特质。', '不可数。', 'Her keenness impressed the coach.', '她的敏锐给教练留下了印象。', [], [], 'noun', 'uncountable', '通用'],
  ], '', ['keen'], '←keen B2 + -ness（透明后缀），B2 继承；家族 keen 热衷的');

  W('keepsake', 'noun', '/ˈkiːpseɪk/', 'A2', [], '纪念物', 'A thing kept to remember someone.', [
    ['纪念物', 'A thing kept to remember someone.', '为记住某人而留存的物品。', '可数。', 'She kept the ring as a keepsake.', '她留着戒指作纪念。', [], ['souvenir'], 'noun', 'countable', '家庭'],
  ], 'keepsakes', ['keep', 'sake'], 'keep A2 + sake B2——首成分 keep 可见，A2 继承；近义 souvenir 纪念品');

  W('kerb', 'noun', '/kɜːb/', '', [], '路缘', 'The edge of a pavement.', [
    ['路缘', 'The edge of a pavement.', '人行道的边沿石。', '可数，英式拼写。', 'He parked by the kerb.', '他把车停在路缘旁。', ['park by the kerb'], ['curb'], 'noun', 'countable', '交通'],
  ], 'kerbs', ['curb'], '英式拼写，美式 curb（c5 在库，等级同为留空）；近义 curb 路缘（美式）');

  W('kernel', 'noun', '/ˈkɜːnl/', '', [], '核；仁', 'The soft inner part of a nut or seed.', [
    ['核；仁', 'The soft inner part of a nut or seed.', '坚果或种子的软内核。', '可数；比喻义为（事实的）核心。', 'She cracked the nut to reach the kernel.', '她敲开坚果取出果仁。', ['a kernel of truth'], ['nut', 'stone'], 'noun', 'countable', '饮食'],
  ], 'kernels', [], '日耳曼语源基础词、无库内派生根，故留空；近义 nut 坚果、stone 果核');

  W('keypad', 'noun', '/ˈkiːpæd/', 'A1', [], '键盘区', 'A set of number keys on a device.', [
    ['键盘区', 'A set of number keys on a device.', '设备上的数字键区。', '可数。', 'Enter the code on the keypad.', '在键盘区输入密码。', [], ['keyboard'], 'noun', 'countable', '工具'],
  ], 'keypads', ['keyboard'], 'key A1 + pad B1——首成分 key 可见，A1 继承；家族 keyboard 键盘');

  W('keys', 'noun', '/kiːz/', 'A1', [], '钥匙；键（复数）', 'Keys; plural of key.', [
    ['钥匙；键（复数）', 'Keys; plural of key.', 'key 的复数（钥匙或按键）。', '复数。', 'The keys are on the table.', '钥匙在桌上。', [], ['keyboard'], 'noun', 'countable', '家居'],
  ], '', ['key'], '←key A1 + -s，A1 继承；近义 keyboard 键盘（按键义相关）');

  W('kg', 'noun', '/ˌkiː ˈdʒiː/', '', [], '千克', 'A kilogram; unit of mass.', [
    ['千克', 'A kilogram; unit of mass.', '千克，质量单位。', '符号写法，与数字连用。', 'The bag weighs two kg.', '这个袋子重两千克。', ['per kg'], ['kilogram'], 'noun', 'uncountable', '通用'],
  ], '', [], 'kilogram 的首字母缩略（k + g）——反向包含、非标准派生，故留空；近义 kilogram 千克');

  W('killing', 'noun', '/ˈkɪlɪŋ/', 'A2', [], '杀戮', 'The act of killing people or animals.', [
    ['杀戮', 'The act of killing people or animals.', '杀死人或动物的行为。', '可数；killings 指系列命案。', 'The killings shocked the nation.', '这些杀戮震惊了全国。', ['mass killing'], ['massacre', 'murder', 'slaughter'], 'noun', 'countable', '社会'],
  ], 'killings', ['kill', 'massacre'], '←kill A2 + -ing，A2 继承；家族 massacre 大屠杀，近义 murder 谋杀、slaughter 屠杀');

  W('kiln', 'noun', '/kɪln/', '', [], '窑', 'An oven for baking bricks or pottery.', [
    ['窑', 'An oven for baking bricks or pottery.', '烧制砖瓦陶器的炉。', '可数。', 'The bricks bake in the kiln.', '砖在窑里烧制。', [], ['furnace', 'oven', 'pottery'], 'noun', 'countable', '工业'],
  ], 'kilns', ['furnace'], '古英语 cyln——无库内派生根，故留空；家族 furnace 熔炉，近义 oven 烤箱、pottery 陶器');

  W('kindle', 'verb', '/ˈkaɪndl/', '', [], '点燃；激起', 'To start a fire, or to stir a feeling.', [
    ['点燃；激起', 'To start a fire, or to stir a feeling.', '点起火，或激起感情。', '及物。', 'The speech kindled their hope.', '演讲点燃了他们的希望。', [], ['ignite', 'light'], 'verb', '及物', '自然'],
  ], 'kindles~kindled~kindled~kindling', [], '古诺斯语 kyndilla（火把）——与 kind 形近但非派生（切词假象），故留空；近义 ignite 点燃、light 点火');

  W('kindly', 'adverb', '/ˈkaɪndli/', 'A1', [], '友好地；请', 'In a kind way, or please.', [
    ['友好地；请', 'In a kind way, or please.', '以友善的方式；也作礼貌用语。', '副词，常用于请求句。', 'Would you kindly sit down?', '请您坐下好吗？', ['would you kindly'], ['please'], 'adverb', 'null', '通用'],
  ], '', ['kind'], '←kind A1 + -ly（透明后缀），A1 继承；近义 please 请');

  W('kindness', 'noun', '/ˈkaɪndnəs/', 'A1', ['CET4'], '善良；善行', 'Being kind, or a kind act.', [
    ['善良；善行', 'Being kind, or a kind act.', '善良的品质，或友善的行为。', '可数或不可数。', 'She showed great kindness to strangers.', '她对陌生人表现出极大的善意。', ['an act of kindness'], ['charity', 'favor', 'goodness'], 'noun', 'uncountable/countable', '情感'],
  ], '', ['kind', 'charity', 'favor', 'goodness'], '←kind A1 + -ness（透明后缀），A1 继承；近义 charity 仁慈、favor 恩惠、goodness 善良');

  W('kingly', 'adjective', '/ˈkɪŋli/', 'A2', [], '王者的', 'Suitable for a king.', [
    ['王者的', 'Suitable for a king.', '合乎国王身份的。', '定语，较文雅。', 'The hall was decorated in kingly style.', '大厅以王者风格装饰。', [], ['royal'], 'adjective', '定语', '政治'],
  ], '', ['king'], '←king A2 + -ly（透明后缀），A2 继承；近义 royal 王室的');

  W('kingship', 'noun', '/ˈkɪŋʃɪp/', '', [], '君主身份', 'The status of being a king.', [
    ['君主身份', 'The status of being a king.', '国王的身份地位。', '不可数，正式。', 'His kingship lasted forty years.', '他的君主统治持续了四十年。', [], ['monarchy'], 'noun', 'uncountable', '政治'],
  ], '', ['king'], 'king + -ship——先例 hardship（C1）与 hard（A1）脱钩，-ship 不走词根继承，自身级无把握，故留空；近义 monarchy 君主制');

  W('kinsman', 'noun', '/ˈkɪnzmən/', 'B2', [], '男性亲属', 'A male relative.', [
    ['男性亲属', 'A male relative.', '男性亲戚。', '可数，较正式；复数 kinsmen。', 'He gathered his kinsmen around him.', '他把亲属聚拢在身边。', [], ['nephew'], 'noun', 'countable', '家庭'],
  ], 'kinsmen', ['kin', 'man'], 'kin B2 + man A1——首成分 kin 可见，B2 继承；近义 nephew 侄子（男性亲属的一类）');

  W('km', 'noun', '/ˌkeɪ ˈem/', '', [], '千米', 'A kilometer; unit of distance.', [
    ['千米', 'A kilometer; unit of distance.', '千米，长度单位。', '符号写法，与数字连用。', 'The town is ten km away.', '那个镇在十公里外。', ['per km'], ['kilometer'], 'noun', 'uncountable', '交通'],
  ], '', [], 'kilometer 的首字母缩略（k + m）——反向包含、非标准派生，故留空；近义 kilometer 千米');

  W('knack', 'noun', '/næk/', '', [], '诀窍', 'A skill at doing something easily.', [
    ['诀窍', 'A skill at doing something easily.', '轻松做成某事的本事。', '可数：a knack for。', 'He has a knack for making people laugh.', '他有种逗人笑的本事。', ['a knack for'], ['trick'], 'noun', 'countable', '通用'],
  ], 'knacks', ['trick'], '中古低地德语 knakke——无库内派生根，故留空；家族 trick 技巧');

  W('knead', 'verb', '/niːd/', '', [], '揉（面团）', 'To work dough with the hands.', [
    ['揉（面团）', 'To work dough with the hands.', '用手揉和面团。', '及物；亦比喻安抚揉捏。', 'She kneaded the bread dough.', '她揉着面包面团。', [], ['massage'], 'verb', '及物', '饮食'],
  ], 'kneads~kneaded~kneaded~kneading', [], '古英语 knædan——与 need 形近但非派生（切词假象），故留空；近义 massage 按揉');

  W('know-how', 'noun', '/ˈnəʊhaʊ/', 'B2', [], '技术诀窍', 'Practical skill or expertise.', [
    ['技术诀窍', 'Practical skill or expertise.', '做复杂工作的实际技能。', '不可数；词表形式为 knowhow（k1 在库）。', 'She shared her know-how with the team.', '她把自己的诀窍分享给了团队。', ['technical know-how'], ['expertise'], 'noun', 'uncountable', '商务'],
  ], '', ['expertise'], 'know + how——首成分 know（A1），但与库内 knowhow 为同一词，等级随 knowhow B2（k1 注记「连字符形式稍后合并」，现两形并存可互检）；近义 expertise 专长');

  W('knowledge', 'noun', '/ˈnɒlɪdʒ/', 'A1', ['CET4'], '知识', 'What a person knows.', [
    ['知识', 'What a person knows.', '一个人所知道的东西。', '不可数。', 'She has deep knowledge of plants.', '她有深厚的植物知识。', ['knowledge of'], ['acquaintance', 'science'], 'noun', 'uncountable', '教育'],
  ], '', ['know', 'science'], '←know A1 + -ledge（know 完整可见，同 acknowledge），-ledge 为名词化后缀按透明后缀继承，A1 继承；家族 science 科学，近义 acquaintance 了解');

  W('knowledgeable', 'adjective', '/ˈnɒlɪdʒəbl/', 'A1', ['CET4'], '知识丰富的', 'Knowing a lot about something.', [
    ['知识丰富的', 'Knowing a lot about something.', '对某事知道得很多。', 'be knowledgeable about。', 'She is knowledgeable about wine.', '她对葡萄酒很在行。', ['knowledgeable about'], ['inform'], 'adjective', '表语', '教育'],
  ], '', ['knowledge'], '←knowledge A1 + -able（透明后缀），A1 继承；近义 inform 告知（信息与知识相关）');

  W('known', 'adjective', '/nəʊn/', '', [], '已知的', 'Already known by people.', [
    ['已知的', 'Already known by people.', '大家已经知道的。', '常作定语：a known fact。', 'The result is already known.', '结果已经知道了。', ['a known fact'], ['given', 'out'], 'adjective', '定语/表语', '通用'],
  ], '', ['know'], 'know 的过去分词独立成形容词——先例 given（B2）与 give（A1）脱钩、不按词根继承，自身级无把握，故留空；近义 given 已知的、out 公开的');

  W('keen on', 'adjective', '/kiːn ɒn/', '', [], '热衷于', 'To be very interested in something.', [
    ['热衷于', 'To be very interested in something.', '对某事很感兴趣。', '形容词短语，on 后接名词或动名词。', 'She is keen on hiking.', '她热衷于徒步。', ['be keen on'], ['into'], 'adjective', 'null', '通用'],
  ], '', [], 'keen 热衷的 + on；近义 into 对……感兴趣（口语）。短语分级留空').phrase = true;

  W('keep back', 'verb', '/kiːp bæk/', '', [], '保留；隐瞒', 'To withhold or keep something secret.', [
    ['保留；隐瞒', 'To withhold or keep something secret.', '留出不给，或不透露。', '及物短语。', 'She kept back some money.', '她留了一些钱。', [], ['withhold'], 'verb', '及物', '通用'],
  ], '', [], 'keep + back；近义 withhold 保留。短语分级留空').phrase = true;

  W('keep up', 'verb', '/kiːp ʌp/', '', [], '保持；跟上', 'To continue or keep at the same level.', [
    ['保持；跟上', 'To continue or keep at the same level.', '继续做，或维持同一水平。', '及物短语。', 'Keep up the good work!', '继续保持！', ['keep up the pace'], ['sustain'], 'verb', '及物', '通用'],
  ], '', [], 'keep + up；近义 sustain 维持。短语分级留空').phrase = true;

  W('key in', 'verb', '/kiː in/', '', [], '键入', 'To type information into a machine.', [
    ['键入', 'To type information into a machine.', '把信息输入机器。', '及物短语。', 'Key in your password.', '键入你的密码。', [], ['input'], 'verb', '及物', '工具'],
  ], '', [], 'key 键入 + in；近义 input 输入。短语分级留空').phrase = true;

  W('knock out', 'verb', '/nɒk aʊt/', '', [], '击倒；淘汰', 'To make someone unconscious, or to eliminate.', [
    ['击倒；淘汰', 'To make someone unconscious, or to eliminate.', '打昏，或使出局。', '及物短语。', 'The punch knocked him out.', '这一拳把他击倒了。', [], ['eliminate', 'stun'], 'verb', '及物', '体育'],
  ], '', [], 'knock + out；近义 eliminate 淘汰、stun 击晕。短语分级留空').phrase = true;

})(typeof window !== 'undefined' ? window : globalThis);
