/* data/words/cet/author_p10.js — 常用词 P 批次 10，缺口 powerful ~ preschool，共 31 条
 * （31 单词，无短语）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（11 条 CET4：
 * powerful、prayer、preacher、precisely、precision、predictable、prediction、preference、
 * pregnancy、preparation、preparatory；preceding 为 CET6）。
 * 扫根结论：praise B2、pray B1、preach B2、precede C1、precise B2、prefer A2、prepare A2、
 * premise C1（brief 根提示）；power A2、own A1、predict B1、fix A2、pregnant B1、premier B2、
 * school A1（author_p2/p3/f2/o2/s1）——
 * · 透明后缀：powerful←power A2 + -ful、praised←praise B2 + -ed、prayer←pray B1 + -er、
 *   preacher←preach B2 + -er、preceding←precede C1 + -ing、precisely←precise B2 + -ly、
 *   precision←precise B2 + -ion（-e→∅+ion 同 -tion 类）、preference←prefer A2 + -ence、
 *   preparation←prepare A2 + -ation、preparatory←prepare A2 + -atory、prepared←prepare A2
 *   + -ed；preferably←prefer A2 + -able + -ly（透明链，经 preference 根提示确认）。
 * · prefix 系（pre- 前缀同 over-/para- 类排除）：prefix←fix A2（outdo←do 模式，拉丁 figere
 *   固定同源）、pre-owned←own A1、preschool←school A1；prelude 无库根（lude 缺席）。
 * · 正字变化：pregnancy←pregnant B1（-ant→-ancy 词干变化，同 platter 类）。
 * · 兄弟派生：premiere←premier B2（premier 全段可见于 premiere）。
 * · 判断项：cursor 不在库→precursor 留空；predictable/prediction←predict B1（自行扫根）。
 * · 留空项：prairie（与 plain 无拼写对应）、prank/prawn（无库根）、precinct、precipice、
 *   preclude、predicament、predicate（predic 与 predict 语义不直连）、prefect、prelude、
 *   premises 之外的无根项。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p10.js 必须在 _cet_helper.js 之后加载');

  W('powerful', 'adjective', '/ˈpaʊəfl/', 'A2', ['CET4'], '强大的；强有力的', 'Having great power or influence.', [
    ['强大的；强有力的', 'Having great power or influence.', '拥有大力量或大影响力的。', '定语或表语。', 'A powerful engine suits the truck.', '强大的发动机适合这辆卡车。', ['powerful force'], ['important', 'potent', 'strong'], 'adjective', '定语/表语', '通用'],
  ], '',['potent', 'strong', 'power'], '←power A2 + -ful（透明后缀），A2 继承（brief 显示 ←?，自行扫根 power）；家族 potent 强效的、strong 强壮的，近 important 重要的');

  W('prairie', 'noun', '/ˈpreəri/', '', [], '（北美）大草原', 'A wide flat area of grassland in North America.', [
    ['（北美）大草原', 'A wide flat area of grassland in North America.', '北美开阔平坦的草地。', '可数。', 'The prairie stretched to the horizon.', '草原一直延伸到地平线。', [], ['plain'], 'noun', 'countable', '自然'],
  ], 'prairies', [], '法语 prairie（草原）——与 plain 无拼写对应（同源义近但不可见），留空；近义 plain 平原、草原');

  W('praised', 'adjective', '/preɪzd/', 'B2', [], '受赞扬的', 'Receiving praise.', [
    ['受赞扬的', 'Receiving praise.', '受到赞扬的。', '多作表语。', 'The team was praised for the rescue.', '队伍因救援受到赞扬。', [], ['acclaimed'], 'adjective', '表语', '社交'],
  ], '',['praise'], '←praise B2 + -ed（透明后缀，表语形容词），B2 继承（brief 根提示）；近义 acclaimed 受赞誉的、受好评的');

  W('prank', 'noun', '/præŋk/', '', [], '恶作剧', 'A trick that is done to surprise somebody.', [
    ['恶作剧', 'A trick that is done to surprise somebody.', '为给人惊喜而做的捉弄。', '可数，非正式。', 'The prank ended with laughter.', '恶作剧在笑声中结束。', [], ['trick'], 'noun', 'countable', '社交'],
  ], 'pranks', [], '来源不明——无库内可见词根，留空；近义 trick 诡计、恶作剧');

  W('prawn', 'noun', '/prɔːn/', '', [], '大虾；对虾', 'A shellfish like a small lobster that can be eaten.', [
    ['大虾；对虾', 'A shellfish like a small lobster that can be eaten.', '像小龙虾的可食甲壳动物。', '可数，英式常用。', 'She grilled two prawns for lunch.', '她烤了两只虾当午饭。', [], ['shrimp'], 'noun', 'countable', '饮食'],
  ], 'prawns', ['shrimp'], '无库内词根（与 shrimp 无拼写对应），留空；家族/近义 shrimp 小虾');

  W('prayer', 'noun', '/ˈpreə(r)/', 'B1', ['CET4'], '祈祷；祷文', 'The act of praying, or the words said.', [
    ['祈祷；祷文', 'The act of praying, or the words said.', '祈祷的行为；或所说的祷告词。', '可数或不可数。', 'They said a prayer before dinner.', '他们饭前做了祷告。', [], ['worship'], 'noun', 'countable', '宗教'],
  ], 'prayers', ['pray'], '←pray B1 + -er（动名词词干 + er），B1 继承（brief 根提示）；家族/近义 worship 礼拜、崇拜');

  W('pre-owned', 'adjective', '/ˌpriːˈəʊnd/', 'A1', [], '二手的；二手货的', 'Owned by somebody else before, used or unused.', [
    ['二手的；二手货的', 'Owned by somebody else before.', '此前为他人拥有的。', '多作定语，可分割。', 'He bought a pre-owned car.', '他买了辆二手车。', [], ['second-hand'], 'adjective', '定语', '通用'],
  ], '',['own'], 'pre-（前）为前缀（同 over-/para- 类排除），取其后 own A1（minibus 模式），A1 继承（brief 显示 ←?，自行扫根 own）；近义 second-hand 二手的');

  W('preacher', 'noun', '/ˈpriːtʃə/', 'B2', ['CET4'], '传道人；说教者', 'A person who preaches a religion.', [
    ['传道人；说教者', 'A person who preaches a religion.', '宣讲宗教的人。', '可数。', 'The preacher spoke for an hour.', '传道人讲了一个小时。', [], ['missionary'], 'noun', 'countable', '宗教'],
  ], 'preachers',['missionary', 'preach'], '←preach B2 + -er（施事后缀），B2 继承（brief 根提示）；家族/近义 missionary 传教士');

  W('preceding', 'adjective', '/prɪˈsiːdɪŋ/', 'C1', ['CET6'], '先前的；前述的', 'Coming before in time or order.', [
    ['先前的；前述的', 'Coming before in time or order.', '时间或顺序在前的。', '多作定语。', 'The preceding chapter sets the scene.', '前一章铺垫了背景。', [], ['prior'], 'adjective', '定语', '通用'],
  ], '',['precede'], '←precede C1 + -ing（透明后缀，分词形容词），C1 继承（brief 根提示）；近义 prior 在前的、优先的');

  W('precinct', 'noun', '/ˈpriːsɪŋkt/', '', [], '辖区；区域', 'An area of a town or city marked for a special use.', [
    ['辖区；区域', 'An area of a town or city marked for a special use.', '城镇中划定作特定用途的区域。', '可数。', 'The station covers the north precinct.', '该分局管辖北区。', [], ['ward'], 'noun', 'countable', '社会'],
  ], 'precincts', [], '拉丁 praecinctum（围起之处）——无库内可见词根，留空；近义 ward 行政区、选区');

  W('precipice', 'noun', '/ˈpresɪpɪs/', '', [], '悬崖', 'A very steep cliff.', [
    ['悬崖', 'A very steep cliff.', '非常陡峭的悬崖。', '可数，较文雅。', 'They stood at the edge of the precipice.', '他们站在悬崖边。', [], ['cliff'], 'noun', 'countable', '自然'],
  ], 'precipices', ['cliff'], '拉丁 praecipitium（悬崖）——无库内可见词根，留空；家族/近义 cliff 悬崖、峭壁');

  W('precisely', 'adverb', '/prɪˈsaɪsli/', 'B2', ['CET4'], '精确地；恰好', 'In an exact way, or exactly at that time.', [
    ['精确地；恰好', 'In an exact way, or exactly at that time.', '以精确的方式；或恰好在那个时间。', '修饰动词或整句。', 'Set the dial precisely to five.', '把刻度盘精确调到五。', [], ['accurately'], 'adverb', '不及物', '通用'],
  ], '',['precise'], '←precise B2 + -ly（透明后缀），B2 继承（brief 根提示）；近义 accurately 准确地');

  W('precision', 'noun', '/prɪˈsɪʒn/', 'B2', ['CET4'], '精确；精度', 'The quality of being very exact.', [
    ['精确；精度', 'The quality of being very exact.', '非常准确的性质。', '不可数。', 'The work demands great precision.', '这项工作要求很高精度。', [], ['accuracy', 'rigor'], 'noun', 'uncountable', '通用'],
  ], '',['rigor', 'precise'], '←precise B2 + -ion（-e→∅+ion，同 -tion/-ation 类），B2 继承（brief 显示 ←?，经 precisely←precise[B2] 根提示确认）；家族 rigor 严谨，近 accuracy 准确、rigor 严格');

  W('preclude', 'verb', '/prɪˈkluːd/', '', [], '排除；阻止', 'To prevent something from happening.', [
    ['排除；阻止', 'To prevent something from happening.', '阻止某事发生。', '及物，正式用语。', 'The rule precludes late entry.', '规定排除迟到入场。', [], ['prohibit'], 'verb', '及物', '通用'],
  ], 'precludes~precluded~precluded~precluding', [], '拉丁 praecludere（关在外面）——无库内可见词根，留空；近义 prohibit 禁止、阻止');

  W('precursor', 'noun', '/prɪˈkɜːsə/', '', [], '先驱；先兆', 'Something that comes before and leads to something else.', [
    ['先驱；先兆', 'Something that comes before and leads to something else.', '先于他物出现并引出他物的事物。', '可数，正式用语。', 'The pilot scheme was a precursor to change.', '试点方案是变革的先声。', [], ['herald'], 'noun', 'countable', '通用'],
  ], 'precursors', [], '拉丁 praecursor（先驱）——cursor 不在库，无成分级可继，留空（同 nonreader 先例）；近义 herald 先兆、先驱');

  W('predicament', 'noun', '/prɪˈdɪkəmənt/', '', [], '困境', 'A difficult or unpleasant situation.', [
    ['困境', 'A difficult or unpleasant situation.', '困难或令人不快的处境。', '可数。', 'She faced a delicate predicament.', '她面临棘手的困境。', [], ['dilemma', 'fix', 'plight', 'scrape'], 'noun', 'countable', '通用'],
  ], 'predicaments', ['dilemma', 'plight'], '拉丁 praedicamentum（断言之物）——形含 predic 与 predict 词头共享但语义（困境）与「预测」不直连（保守），留空；家族 dilemma 进退两难、plight 苦境，近 fix 困境、scrape 麻烦');

  W('predicate', 'noun/verb', '/ˈpredɪkət/', '', [], '谓语；断言', 'The part of a sentence about the subject, or to state something as fact.', [
    ['谓语', 'The part of a sentence that says something about the subject.', '句子中说明主语的部分。', '可数，语法术语。', 'The predicate tells what the subject does.', '谓语说明主语做什么。', [], ['verb'], 'noun', 'countable', '语法'],
    ['断言', 'To state something as fact.', '把某事作为事实陈述。', '及物，正式用语。', 'He predicated the claim on facts.', '他以事实为依据提出主张。', [], [], 'verb', '及物', '书面'],
  ], 'predicates~predicated~predicated~predicating', ['verb'], '拉丁 praedicatum（断言）——与 predict 共享词头但语义（谓语）与「预测」不直连（保守），留空；家族/近义 verb 动词、述语');

  W('predictable', 'adjective', '/prɪˈdɪktəbl/', 'B1', ['CET4'], '可预测的；可预料的', 'Able to be predicted.', [
    ['可预测的；可预料的', 'Able to be predicted.', '能够被预料的。', '多作定语或表语。', 'The outcome was predictable.', '结果可以预见。', [], ['inevitable', 'obvious'], 'adjective', '定语/表语', '通用'],
  ], '',['predict'], '←predict B1 + -able（透明后缀），B1 继承（brief 显示 ←?，自行扫根 predict）；近义 inevitable 不可避免的、obvious 明显的');

  W('prediction', 'noun', '/prɪˈdɪkʃn/', 'B1', ['CET4'], '预言；预测', 'A statement about what will happen.', [
    ['预言；预测', 'A statement about what will happen.', '对将来会发生什么的说法。', '可数。', 'Her prediction proved correct.', '她的预测被证实正确。', [], ['forecast'], 'noun', 'countable', '通用'],
  ], 'predictions',['predict'], '←predict B1 + -ion（-e→∅+ion，同 -tion 类），B1 继承（brief 显示 ←?，自行扫根 predict）；近义 forecast 预报、预测');

  W('prefect', 'noun', '/ˈpriːfekt/', '', [], '学长；级长', 'A student given authority over others at school.', [
    ['学长；级长', 'A student given authority over others at school.', '学校里被赋予管理其他学生权力的学生。', '可数，英式学校用语。', 'The prefect guided the new students.', '学长引导了新生。', [], ['monitor'], 'noun', 'countable', '教育'],
  ], 'prefects', [], '拉丁 praefectus（长官）——与 perfect 无拼写重合、无库内可见词根，留空；近义 monitor 班长');

  W('preferably', 'adverb', '/ˈprefərəbli/', 'A2', [], '最好；更可取地', 'Used to say what you would prefer.', [
    ['最好；更可取地', 'Used to say what you would prefer.', '用来表示更希望怎样。', '修饰整句。', 'Come early, preferably before nine.', '早点来，最好九点前。', [], ['rather'], 'adverb', '不及物', '通用'],
  ], '',['prefer'], '←prefer A2 + -able + -ly（透明链），A2 继承（brief 显示 ←?，经 preference←prefer[A2] 根提示确认）；近 rather 宁愿、最好');

  W('preference', 'noun', '/ˈprefərəns/', 'A2', ['CET4'], '偏好；偏爱', 'A greater liking for one thing than another.', [
    ['偏好；偏爱', 'A greater liking for one thing than another.', '对一件事物比另一件更喜欢。', '可数或不可数，常与 for 连用。', 'She showed a clear preference for tea.', '她明显更喜欢茶。', ['preference for'], ['fancy', 'like', 'taste'], 'noun', 'countable', '通用'],
  ], 'preferences',['prefer'], '←prefer A2 + -ence（透明后缀），A2 继承（brief 根提示）；近义 fancy 喜好、like 喜爱、taste 品味');

  W('prefix', 'noun', '/ˈpriːfɪks/', 'A2', [], '前缀', 'A word part added before a word to change its meaning.', [
    ['前缀', 'A word part added before a word to change its meaning.', '加在词前改变词义的词部分。', '可数，语法术语。', 'The prefix re marks repetition.', '前缀 re 表示重复。', [], [], 'noun', 'countable', '语法'],
  ], 'prefixes', ['affix'], 'pre-（前）为前缀（同 over-/para- 类排除），取其后 fix A2（outdo←do 模式，拉丁 figere 固定同源），A2 继承（brief 显示 ←?，自行扫根 fix）；家族 affix 词缀；队列近义为空');

  W('pregnancy', 'noun', '/ˈpreɡnənsi/', 'B1', ['CET4'], '怀孕；妊娠', 'The state of having a baby growing in the body.', [
    ['怀孕；妊娠', 'The state of having a baby growing in the body.', '体内孕育婴儿的状态。', '可数或不可数。', 'The clinic advises women during pregnancy.', '诊所在孕期为妇女提供建议。', [], [], 'noun', 'uncountable', '健康'],
  ], '',['abortion', 'pregnant'], '←pregnant B1 + -ancy（-ant→-ancy 词干变化，同 platter 类正字处理），B1 继承（brief 显示 ←?，自行扫根 pregnant）；家族 abortion 流产；队列近义为空');

  W('prelude', 'noun', '/ˈpreljuːd/', '', [], '序曲；前奏', 'A short piece of music played before a longer one, or an event that starts something.', [
    ['序曲；前奏', 'A short piece of music played before a longer one, or an event that starts something.', '长曲前的短乐段；或引出某事的事件。', '可数。', 'A short talk formed the prelude.', '简短的讲话作为前奏。', [], ['preliminary'], 'noun', 'countable', '艺术'],
  ], 'preludes', [], '法语 prélude（序曲）——无库内可见词根（lude 不在库），留空；近义 preliminary 序曲、预备的');

  W('premiere', 'noun/verb', '/ˈpremiə(r)/', 'B2', [], '首演；首映', 'The first public performance of a play or film.', [
    ['首演；首映', 'The first public performance of a play or film.', '戏剧或电影的首次公演。', '可数。', 'The film premiered in Venice.', '这部电影在威尼斯首映。', [], ['debut'], 'noun', 'countable', '艺术'],
  ], 'premieres~premiered~premiered~premiering',['debut', 'premier'], '←premier B2 + -e（premier 全段可见于 premiere，同源词干），B2 继承（brief 显示 ←?，自行扫根 premier，兄弟派生）；家族/近义 debut 首次亮相、首演');

  W('premises', 'noun', '/ˈpremɪsɪz/', 'C1', [], '经营场所；房屋（复数）', 'The buildings and land a business uses.', [
    ['经营场所；房屋（复数）', 'The buildings and land a business uses.', '企业使用的建筑与地皮。', 'premise 的复数形式，常作复数。', 'They moved to larger premises.', '他们搬到了更大的场所。', [], ['property'], 'noun', 'countable', '商务'],
  ], '',['premise'], '←premise C1 的复数形式（经营场所义），C1 继承（brief 根提示）；近义 property 物业、房产');

  W('preparation', 'noun', '/ˌprepəˈreɪʃn/', 'A2', ['CET4'], '准备；预备', 'The act of getting ready for something.', [
    ['准备；预备', 'The act of getting ready for something.', '为某事做准备的行为。', '不可数或可数。', 'The preparation took three days.', '准备花了三天。', [], ['homework', 'preliminary'], 'noun', 'uncountable', '通用'],
  ], '',['homework', 'prepare'], '←prepare A2 + -ation（透明后缀），A2 继承（brief 根提示）；家族 homework 家庭作业，近 preliminary 初步准备');

  W('preparatory', 'adjective', '/prɪˈpærətri/', 'A2', ['CET4'], '预备的', 'Done to prepare for something else.', [
    ['预备的', 'Done to prepare for something else.', '为另一事做准备而进行的。', '多作定语，正式用语。', 'A preparatory course runs in July.', '预备课程七月开课。', ['preparatory course'], ['preliminary'], 'adjective', '定语', '教育'],
  ], '',['preliminary', 'prepare'], '←prepare A2 + -atory（透明后缀），A2 继承（brief 显示 ←?，经 preparation←prepare[A2] 根提示确认）；家族/近义 preliminary 初步的、预备的');

  W('prepared', 'adjective', '/prɪˈpeəd/', 'A2', [], '准备好的；有准备的', 'Ready for something, or having planned for it.', [
    ['准备好的；有准备的', 'Ready for something, or having planned for it.', '为某事准备就绪的；或已作计划的。', '多作表语。', 'She felt prepared for the exam.', '她觉得自己为考试做好了准备。', ['well prepared'], ['ready'], 'adjective', '表语', '通用'],
  ], '',['ready', 'prepare'], '←prepare A2 + -ed（透明后缀，表语形容词），A2 继承（brief 根提示）；家族/近义 ready 准备好的');

  W('preschool', 'noun', '/ˈpriːskuːl/', 'A1', [], '学前教育；幼儿园', 'A school or class for very young children.', [
    ['学前教育；幼儿园', 'A school or class for very young children.', '为幼儿开设的学校或班级。', '不可数。', 'He enrolled in preschool at four.', '他四岁进了幼儿园。', [], ['kindergarten', 'nursery'], 'noun', 'uncountable', '教育'],
  ], '', ['kindergarten', 'nursery'], 'pre-（前）为前缀（同 over-/para- 类排除），取其后 school A1（minibus 模式），A1 继承（brief 显示 ←?，自行扫根 school）；家族/近义 kindergarten 幼儿园、nursery 托儿所');
})(typeof window !== 'undefined' ? window : globalThis);
