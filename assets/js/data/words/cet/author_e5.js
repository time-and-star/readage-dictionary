/* data/words/cet/author_e5.js · 手敲词条 E（五·前段）：ethanol ~ excavate（含 4 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_e5.js 必须在 _cet_helper.js 之后加载');

  W('ethanol', 'noun', '/ˈeθənɒl/', '', [], '乙醇；酒精', 'The type of alcohol in drinks and fuel.', [
    ['乙醇；酒精', 'The type of alcohol in drinks and fuel.', '酒和燃料中的酒精。', '不可数，化学用语。', 'Wine contains ethanol.', '葡萄酒含乙醇。', [], ['alcohol'], 'noun', 'uncountable', '科学'],
  ], '', [], 'ethane 乙烷（本词库未收）+ -ol——词根不可见，故留空；近义 alcohol 酒精。分级留空');

  W('ethical', 'adjective', '/ˈeθɪkl/', 'B2', [], '道德的；伦理的', 'About what is right and wrong.', [
    ['道德的；伦理的', 'About what is right and wrong.', '关于对错的。', 'ethical standards 道德标准。', 'Is it ethical to test on animals?', '拿动物做实验合乎道德吗。', ['ethical standards'], ['moral'], 'adjective', '定语', '社会'],
  ], '', ['ethic', 'moral'], '←ethic B2 伦理 + -al，B2 继承；家族 moral 道德的（常用）');

  W('ethics', 'noun', '/ˈeθɪks/', 'B2', ['CET4'], '伦理学；道德规范', 'Rules about right and wrong, or their study.', [
    ['伦理学；道德规范', 'Rules about right and wrong, or their study.', '关于对错的规范或其学问。', '形式复数，作单数或复数义。', 'The course covers medical ethics.', '这门课讲医学伦理。', ['medical ethics'], ['moral'], 'noun', 'uncountable', '社会'],
  ], '', ['ethic'], '←ethic B2 + -s，B2 继承；近义 moral 道德（名词义）');

  W('ethnic group', 'noun', '/ˌeθnɪk ˈɡruːp/', '', [], '少数民族；族群', 'A group of people with the same culture or race.', [
    ['少数民族；族群', 'A group of people with the same culture or race.', '文化或种族相同的一群人。', '可数。', 'The city has many ethnic groups.', '这座城市有很多族群。', [], ['people'], 'noun', 'countable', '社会'],
  ], '', ['people'], 'ethnic 民族的 + group 群体；近义 people 民族（people 亦指人民）。短语分级留空').phrase = true;

  W('ethnicity', 'noun', '/eθˈnɪsəti/', 'B1', [], '种族；民族属性', 'Belonging to a particular racial or cultural group.', [
    ['种族；民族属性', 'Belonging to a particular racial or cultural group.', '属于特定种族或文化群体。', '不可数或可数。', 'The form asks about ethnicity.', '表格询问种族。', [], ['race'], 'noun', 'uncountable/countable', '社会'],
  ], '', ['ethnic'], '←ethnic B1 民族的 + -ity，B1 继承；近义 race 种族');

  W('Europe', 'noun', '/ˈjʊərəp/', '', [], '欧洲', 'The continent west of Asia.', [
    ['欧洲', 'The continent west of Asia.', '亚洲西边的大陆。', '专有名词，首字母大写。', 'She travelled across Europe.', '她游历了欧洲。', [], ['continent'], 'noun', 'uncountable', '地理'],
  ], '', [], '专有名词——无派生根；近义 continent 大陆。分级留空');

  W('evangelical', 'adjective/noun', '/ˌiːvænˈdʒelɪkl/', '', [], '福音派的；福音派信徒', 'Of Christians who spread the gospel, or such a person.', [
    ['福音派的；福音派信徒', 'Of Christians who spread the gospel, or such a person.', '传播福音的基督徒或其人。', '可数（人）或形容词。', 'He joined an evangelical church.', '他加入了一家福音派教会。', [], ['missionary'], 'adjective/noun', 'null', '宗教'],
  ], 'evangelicals', [], 'evangel 福音（本词库未收）+ -ical——词根不可见，故留空；近义 missionary 传教士。分级留空');

  W('evangelist', 'noun', '/ɪˈvændʒəlɪst/', '', [], '福音传道者', 'A person who spreads the Christian gospel.', [
    ['福音传道者', 'A person who spreads the Christian gospel.', '传播基督教福音的人。', '可数。', 'The evangelist spoke to crowds.', '传道者向人群布道。', [], ['missionary'], 'noun', 'countable', '宗教'],
  ], 'evangelists', ['missionary'], 'evangel 福音（本词库未收）+ -ist——词根不可见，故留空；家族 missionary 传教士');

  W('evaporative', 'adjective', '/ɪˈvæpərətɪv/', 'B2', [], '蒸发的', 'Causing liquid to become vapour.', [
    ['蒸发的', 'Causing liquid to become vapour.', '使液体变成蒸气的。', '技术用语。', 'The plant uses evaporative cooling.', '工厂用蒸发冷却。', [], ['volatile'], 'adjective', '定语', '科学'],
  ], '', ['evaporate'], '←evaporate B2 蒸发 + -ive（e→ive），B2 继承；近义 volatile 易挥发的');

  W('even so', 'adverb', '/ˌiːvn ˈsəʊ/', '', [], '即便如此', 'Despite what has just been said.', [
    ['即便如此', 'Despite what has just been said.', '尽管刚说了那些。', '副词短语，句首或句中。', 'It rained. Even so, we went out.', '下雨了。即便如此，我们还是出去了。', [], ['nevertheless', 'nonetheless'], 'adverb', 'null', '通用'],
  ], '', ['nevertheless', 'nonetheless'], 'even 甚至 + so 如此；近义 nevertheless 然而、nonetheless 尽管如此。短语分级留空').phrase = true;

  W('evening meal', 'noun', '/ˌiːvnɪŋ ˈmiːl/', '', [], '晚餐', 'The main meal eaten in the evening.', [
    ['晚餐', 'The main meal eaten in the evening.', '晚上吃的主餐。', '可数。', 'We had our evening meal early.', '我们很早就吃了晚饭。', [], ['supper'], 'noun', 'countable', '饮食'],
  ], '', ['supper'], 'evening 晚上 + meal 餐；近义 supper 晚餐（较晚的便餐）。短语分级留空').phrase = true;

  W('eventual', 'adjective', '/ɪˈventʃuəl/', 'A2', ['CET4'], '最终的', 'Happening at the end of a process.', [
    ['最终的', 'Happening at the end of a process.', '在过程结束时发生的。', 'eventual success 最终成功。', 'Their eventual win surprised us.', '他们最终获胜让我们意外。', [], ['ultimate'], 'adjective', '定语', '通用'],
  ], '', ['event'], '←event A2 事件 + -ual，A2 继承；近义 ultimate 最终的');

  W('evergreen', 'adjective/noun', '/ˈevəɡriːn/', 'A1', [], '常绿的；常青树', 'Staying green all year, or such a tree.', [
    ['常绿的；常青树', 'Staying green all year, or such a tree.', '终年常绿的，或这种树。', '可数（树）或形容词。', 'Pines are evergreen trees.', '松树是常绿树。', [], ['pine'], 'adjective/noun', 'null', '自然'],
  ], 'evergreens', ['pine'], 'ever 永 + green 绿，取首成分级 A1；家族 pine 松树（常绿代表）');

  W('everlasting', 'adjective', '/ˌevəˈlɑːstɪŋ/', 'A1', [], '永恒的；无休止的', 'Lasting forever, or seeming endless.', [
    ['永恒的；无休止的', 'Lasting forever, or seeming endless.', '永远持续或似乎无休止的。', 'everlasting love 永恒的爱。', 'They promised everlasting friendship.', '他们许诺友谊长存。', [], ['eternal', 'perpetual'], 'adjective', '定语', '情感'],
  ], '', ['eternal'], 'ever 永 + lasting（lasting 不在库，取首成分 ever A1），A1 继承；家族 eternal 永恒的，近义 perpetual 永久的');

  W('every day', 'adverb', '/ˈevri deɪ/', '', [], '每天', 'On each day.', [
    ['每天', 'On each day.', '每一天。', '副词短语；注意 everyday 连写是形容词。', 'She walks every day.', '她每天散步。', [], ['daily'], 'adverb', 'null', '通用'],
  ], '', ['daily'], 'every 每个 + day 天；近义 daily 每日的。短语分级留空').phrase = true;

  W('evict', 'verb', '/ɪˈvɪkt/', '', [], '驱逐（房客）', 'To force someone to leave a house or land.', [
    ['驱逐（房客）', 'To force someone to leave a house or land.', '强迫某人离开房屋或土地。', '及物：evict from。', 'They were evicted from the flat.', '他们被赶出了公寓。', ['evict from'], ['eject'], 'verb', '及物', '法律'],
  ], 'evicts~evicted~evicted~evicting', [], '拉丁 evincere——无库内派生根；近义 eject 逐出。分级留空');

  W('evidence', 'noun', '/ˈevɪdəns/', 'B1', ['CET4'], '证据', 'Facts that prove something is true.', [
    ['证据', 'Facts that prove something is true.', '证明某事为真的事实。', '不可数：a piece of evidence。', 'There is no evidence of cheating.', '没有作弊的证据。', ['a piece of evidence'], ['exhibit', 'proof', 'testimony'], 'noun', 'uncountable', '法律'],
  ], '', ['evident', 'proof', 'testimony'], '←evident B1 明显的 + -ce（t→ce 音变），B1 继承；家族 proof 证据、testimony 证词，近义 exhibit 证物');

  W('evocative', 'adjective', '/ɪˈvɒkətɪv/', '', [], '唤起记忆的', 'Bringing strong memories or feelings to mind.', [
    ['唤起记忆的', 'Bringing strong memories or feelings to mind.', '唤起强烈记忆或情感的。', 'evocative of 让人想起。', 'The song is evocative of home.', '这首歌让人想起家。', ['evocative of'], ['reminiscent'], 'adjective', '定语', '文化'],
  ], '', ['reminiscent'], 'evoke 唤起（仅 evo 可见，k→c 不可比照接受）+ -ative——词根不可见，故留空；家族 reminiscent 怀旧的。分级留空');

  W('ewe', 'noun', '/juː/', '', [], '母羊', 'A female sheep.', [
    ['母羊', 'A female sheep.', '雌性的绵羊。', '可数，与 ram 公羊相对。', 'The ewe feeds her lambs.', '母羊喂小羊。', [], ['lamb', 'sheep'], 'noun', 'countable', '自然'],
  ], 'ewes', [], '古英语 eowu——无库内派生根；近义 lamb 羊羔、sheep 绵羊。分级留空');

  W('ex', 'noun', '/eks/', '', [], '前任', 'A former wife, husband, or partner.', [
    ['前任', 'A former wife, husband, or partner.', '以前的妻子、丈夫或伴侣。', '可数，口语。', 'He ran into his ex.', '他偶遇了前任。', [], ['former'], 'noun', 'countable', '家庭'],
  ], 'exes', [], '拉丁 ex（以前的）作名词；近义 former 以前的（作定语）。分级留空');

  W('ex-soldier', 'noun', '/ˌeks ˈsəʊldʒə(r)/', '', [], '退伍军人', 'A person who used to be a soldier.', [
    ['退伍军人', 'A person who used to be a soldier.', '曾经当过兵的人。', '可数。', 'The charity helps ex-soldiers.', '慈善机构帮助退伍军人。', [], ['veteran'], 'noun', 'countable', '军事'],
  ], 'ex-soldiers', [], 'ex- 前 + soldier 士兵——首成分 ex（本批新词、无等级），故留空；近义 veteran 老兵。分级留空');

  W('exactly', 'adverb', '/ɪɡˈzæktli/', 'A2', [], '确切地；正是', 'In an exact way; just.', [
    ['确切地；正是', 'In an exact way; just.', '以精确的方式；正是。', '副词。', 'That is exactly what I meant.', '那正是我想说的。', [], ['accurately', 'just', 'prompt', 'right', 'sharp'], 'adverb', 'null', '通用'],
  ], '', ['exact'], '←exact A2 + -ly，A2 继承；近义 accurately 准确地、just 正好、prompt 准时、right 正好、sharp 整点（three oclock sharp）');

  W('exactness', 'noun', '/ɪɡˈzæktnəs/', 'A2', [], '精确', 'The quality of being exact.', [
    ['精确', 'The quality of being exact.', '准确无误的品质。', '不可数。', 'The exactness surprised everyone.', '这种精确让所有人吃惊。', [], ['accuracy'], 'noun', 'uncountable', '科学'],
  ], '', ['exact'], '←exact A2 + -ness，A2 继承；近义 accuracy 准确性');

  W('exaggerated', 'adjective', '/ɪɡˈzædʒəreɪtɪd/', 'B1', [], '夸张的', 'Made to seem larger or better than true.', [
    ['夸张的', 'Made to seem larger or better than true.', '被说得比真实更大更好的。', '分词形容词。', 'He gave an exaggerated account.', '他的叙述很夸张。', [], ['tall'], 'adjective', '定语', '通用'],
  ], '', ['exaggerate'], '←exaggerate B1 夸张 + -d，B1 继承；近义 tall 夸大的（tall story 吹牛）');

  W('exalted', 'adjective', '/ɪɡˈzɔːltɪd/', '', [], '崇高的；显贵的', 'Very noble or high in rank.', [
    ['崇高的；显贵的', 'Very noble or high in rank.', '非常高贵或位高的。', '较文。', 'He holds an exalted post.', '他身居显职。', [], ['lofty'], 'adjective', '定语', '社会'],
  ], '', [], 'exalt 推崇（本词库未收）+ -ed——词根不可见，故留空；近义 lofty 崇高的。分级留空');

  W('exam', 'noun', '/ɪɡˈzæm/', 'A2', [], '考试', 'A test of knowledge or skill.', [
    ['考试', 'A test of knowledge or skill.', '对知识或技能的测试。', '可数：take an exam。', 'We have an exam tomorrow.', '我们明天有考试。', ['take an exam'], ['final', 'oral', 'test'], 'noun', 'countable', '教育'],
  ], 'exams', ['examine', 'test'], '←examine A2 的截短形（exam⊂examine 可见），A2 继承；家族 test 考试（最常用），近义 final 期末考、oral 口试');

  W('examination', 'noun', '/ɪɡˌzæmɪˈneɪʃn/', 'A2', [], '考试；检查', 'A test of knowledge, or a careful check.', [
    ['考试；审查', 'A test of knowledge, or a careful look.', '知识测试，或仔细查看。', '可数：sit an examination。', 'She passed the examination.', '她通过了考试。', ['sit an examination'], ['quiz', 'scan', 'scrutiny'], 'noun', 'countable', '教育'],
    ['体检；医学检查', 'A medical check of the body.', '对身体的医学检查。', '可数。', 'He had a full examination.', '他做了全面体检。', ['a medical examination'], ['medical', 'microscope', 'physical'], 'noun', 'countable', '健康'],
  ], 'examinations', ['examine', 'scan', 'scrutiny'], '←examine A2 + -ation，A2 继承；家族 scan 扫描检查、scrutiny 细查，近义 quiz 小测、medical 医学的、microscope 显微镜检查、physical 体检');

  W('examinee', 'noun', '/ɪɡˌzæmɪˈniː/', 'A2', ['CET4'], '考生', 'A person taking an exam.', [
    ['考生', 'A person taking an exam.', '参加考试的人。', '可数。', 'The examinees waited outside.', '考生们在外面等。', [], ['candidate'], 'noun', 'countable', '教育'],
  ], 'examinees', ['examine', 'candidate'], '←examine A2 + -ee（表受试者），A2 继承；家族 candidate 候选人');

  W('examiner', 'noun', '/ɪɡˈzæmɪnə(r)/', 'A2', ['CET4'], '考官；检查员', 'A person who tests others or inspects things.', [
    ['考官；检查员', 'A person who tests others or inspects things.', '考查别人或检查东西的人。', '可数。', 'The examiner marked the papers.', '考官批了卷子。', [], ['censor'], 'noun', 'countable', '教育'],
  ], 'examiners', ['examine'], '←examine A2 + -er（表人），A2 继承；近义 censor 审查员');

  W('excavate', 'verb', '/ˈekskəveɪt/', '', [], '挖掘；发掘', 'To dig out, especially ancient objects.', [
    ['挖掘；发掘', 'To dig out, especially ancient objects.', '挖出，尤指古代遗物。', '及物。', 'They excavated an old tomb.', '他们发掘了一座古墓。', [], ['dig', 'hollow'], 'verb', '及物', '科学'],
  ], 'excavates~excavated~excavated~excavating', ['dig'], '拉丁 excavare（挖空）——无库内派生根；家族 dig 挖（最常用），近义 hollow 掏空');

  W('except if', 'conjunction', '/ɪkˈsept ɪf/', '', [], '除非；如果不', 'In case something does not happen.', [
    ['除非；如果不', 'In case something does not happen.', '万一某事不发生。', '连词短语，= unless。', 'Except if it rains, we will go.', '除非下雨，我们会去。', [], ['unless'], 'conjunction', 'null', '语法'],
  ], '', ['unless'], 'except 除…外 + if 如果；家族 unless 除非（最常用）。短语分级留空').phrase = true;

  W('except when', 'conjunction', '/ɪkˈsept wen/', '', [], '除…时候外', 'Only in a different time or case.', [
    ['除…时候外', 'Only in a different time or case.', '只在不同时间或情况下。', '连词短语。', 'He is quiet except when angry.', '他除了生气时都很安静。', [], ['unless'], 'conjunction', 'null', '语法'],
  ], '', ['unless'], 'except 除…外 + when 当…时；近义 unless 除非。短语分级留空').phrase = true;

  W('exceptional', 'adjective', '/ɪkˈsepʃənl/', 'B1', ['CET4'], '卓越的；例外的', 'Unusually good, or not normal.', [
    ['卓越的；例外的', 'Unusually good, or not normal.', '好得出奇的，或不正常的。', 'exceptional talent 卓越才能。', 'She has exceptional memory.', '她记忆力超群。', [], ['extraordinary', 'outstanding', 'singular'], 'adjective', '定语', '通用'],
  ], '', ['exception', 'extraordinary'], '←exception B1 例外 + -al，B1 继承；家族 extraordinary 非凡的，近义 outstanding 杰出的、singular 非凡的（单数的）');

  W('excessive', 'adjective', '/ɪkˈsesɪv/', 'B1', ['CET4'], '过多的', 'More than is needed or reasonable.', [
    ['过多的', 'More than is needed or reasonable.', '超过需要或合理的。', 'excessive drinking 过度饮酒。', 'The price is excessive.', '这价格过高了。', [], ['extravagant'], 'adjective', '定语', '通用'],
  ], '', ['excess'], '←excess B1 过量 + -ive，B1 继承；近义 extravagant 奢侈的（浪费的）');

  W('excessively', 'adverb', '/ɪkˈsesɪvli/', 'B1', [], '过度地', 'Too much.', [
    ['过度地', 'Too much.', '太多了。', '副词。', 'He works excessively long hours.', '他工作时间过长。', [], ['too'], 'adverb', 'null', '通用'],
  ], '', ['excessive'], '←excessive（本批新词 B1）+ -ly，B1 继承；近义 too 太（最常用）');

  W('exchequer', 'noun', '/ɪksˈtʃekə(r)/', '', [], '国库；财政部', 'The state money department, especially in Britain.', [
    ['国库；财政部', 'The state money department, especially in Britain.', '国家管钱的部门，尤指英国。', 'the Exchequer 英国财政部。', 'The funds went to the exchequer.', '资金进了国库。', [], ['treasury'], 'noun', 'countable', '政治'],
  ], '', ['treasury'], '古法语 eschequier（棋盘格布）——无库内派生根；家族 treasury 国库。分级留空');

  W('excitement', 'noun', '/ɪkˈsaɪtmənt/', 'A2', ['CET4'], '兴奋；刺激', 'A feeling of being excited.', [
    ['兴奋；刺激', 'A feeling of being excited.', '激动的感觉。', '不可数或可数。', 'The news caused great excitement.', '这消息引起了极大兴奋。', [], ['drama', 'spice', 'thrill'], 'noun', 'uncountable/countable', '情感'],
  ], '', ['excite', 'drama', 'thrill'], '←excite A2 + -ment，A2 继承；家族 drama 戏剧性、thrill 激动，近义 spice 趣味（添彩）');

  W('excluded', 'adjective', '/ɪksˈkluːdɪd/', 'B1', [], '被排除的', 'Left out deliberately.', [
    ['被排除的', 'Left out deliberately.', '被故意排除在外的。', '分词形容词：feel excluded。', 'She felt excluded from the group.', '她觉得被小团体排斥了。', ['feel excluded'], ['immune'], 'adjective', '表语', '社会'],
  ], '', ['exclude'], '←exclude B1 排除 + -d，B1 继承；近义 immune 免除的（不受影响）');

  W('exclusion', 'noun', '/ɪksˈkluːʒn/', 'B1', ['CET4'], '排除', 'The act of leaving someone or something out.', [
    ['排除', 'The act of leaving someone or something out.', '把某人某物排除在外的行为。', '不可数或可数。', 'The exclusion seems unfair.', '这种排斥似乎不公。', [], ['exception'], 'noun', 'uncountable/countable', '社会'],
  ], 'exclusions', ['exclude', 'exception'], '←exclude B1 + -sion（d→s 音变，同 decision），B1 继承；家族 exception 例外');

  W('exclusive', 'adjective', '/ɪksˈkluːsɪv/', 'B1', ['CET4'], '独家的；排他的', 'Only for some people, or complete.', [
    ['独家的；排他的', 'Only for some people, or complete.', '只给某些人的，或完全的。', 'exclusive rights 独家经营权。', 'The club is exclusive.', '这家俱乐部只接待会员。', ['exclusive rights'], ['monopoly', 'select', 'sole'], 'adjective', '定语', '商务'],
  ], '', ['exclude'], '←exclude B1 + -sive（d→s 音变，同 decisive），B1 继承；近义 monopoly 垄断的、select 精选的、sole 唯一的');

  W('excrement', 'noun', '/ˈekskrɪmənt/', '', [], '粪便', 'Waste passed out of the body.', [
    ['粪便', 'Waste passed out of the body.', '身体排出的废物。', '不可数，正式；日常说 shit（粗）。', 'The field was full of excrement.', '地里满是粪便。', [], ['shit'], 'noun', 'uncountable', '健康'],
  ], '', ['shit'], '拉丁 excernere（筛出）——无库内派生根；家族 shit 粪便（粗俗口语）。分级留空');

  W('excuse me', 'interjection', '/ɪkˈskjuːs miː/', '', [], '对不起；劳驾', 'Said to get attention or to apologize.', [
    ['对不起；劳驾', 'Said to get attention or to apologize.', '引起注意或道歉时说的话。', '感叹语，口语。', 'Excuse me, where is the station?', '劳驾，车站在哪？', [], ['pardon', 'sorry'], 'interjection', 'null', '口语'],
  ], '', ['pardon', 'sorry'], 'excuse 原谅 + me 我；近义 pardon 请原谅、sorry 对不起。短语分级留空').phrase = true;

  W('executive', 'noun/adjective', '/ɪɡˈzekjətɪv/', 'B1', ['CET4'], '主管；行政的', 'A manager in a company, or about managing.', [
    ['主管；行政的', 'A manager in a company, or about managing.', '公司经理，或关于管理的。', '可数（人）或形容词。', 'She is a senior executive.', '她是高管。', ['senior executive'], ['officer'], 'noun/adjective', 'null', '职业'],
  ], 'executives', ['execute'], '←execute B1 执行 + -ive（e→ive），B1 继承；近义 officer 高级职员');

  W('exhale', 'verb', '/eksˈheɪl/', '', [], '呼气', 'To breathe air out of the lungs.', [
    ['呼气', 'To breathe air out of the lungs.', '把空气呼出肺。', '不及物或及物，与 inhale 吸气相对。', 'Breathe in, then exhale slowly.', '吸气，然后慢慢呼气。', [], ['sigh'], 'verb', '不及物', '健康'],
  ], 'exhales~exhaled~exhaled~exhaling', ['sigh'], 'ex- 出 + hale——语义非透明（hale 无法组合出呼气义），故留空；家族 sigh 叹气');

  W('exhausted', 'adjective', '/ɪɡˈzɔːstɪd/', 'B1', [], '筋疲力尽的', 'Very tired.', [
    ['筋疲力尽的', 'Very tired.', '非常累的。', '分词形容词：be exhausted。', 'They were exhausted after the hike.', '远足后他们累坏了。', [], ['weary'], 'adjective', '表语', '健康'],
  ], '', ['exhaust'], '←exhaust B1 耗尽 + -ed，B1 继承；近义 weary 疲倦的');

  W('exhausting', 'adjective', '/ɪɡˈzɔːstɪŋ/', 'B1', [], '令人疲惫的', 'Making you very tired.', [
    ['令人疲惫的', 'Making you very tired.', '让人非常累的。', '分词形容词：-ed 修饰人，-ing 修饰事。', 'It was an exhausting day.', '那是累人的一天。', [], ['marathon'], 'adjective', '定语', '健康'],
  ], '', ['exhaust'], '←exhaust B1 + -ing，B1 继承；近义 marathon 马拉松式的（漫长累人的）');

  W('exhaustion', 'noun', '/ɪɡˈzɔːstʃən/', 'B1', ['CET4'], '耗尽；筋疲力尽', 'Being used up, or extreme tiredness.', [
    ['耗尽；筋疲力尽', 'Being used up, or extreme tiredness.', '被用光，或极度疲惫。', '不可数。', 'He slept from sheer exhaustion.', '他累极睡着了。', [], ['fatigue', 'jetlag'], 'noun', 'uncountable', '健康'],
  ], '', ['exhaust', 'fatigue'], '←exhaust B1 + -ion，B1 继承；家族 fatigue 疲劳，近义 jetlag 时差反应（旅途疲惫）');

  W('exhibition', 'noun', '/ˌeksɪˈbɪʃn/', 'B1', ['CET4'], '展览', 'A public show of art or objects.', [
    ['展览', 'A public show of art or objects.', '艺术品或物品的公开展示。', '可数。', 'We visited the art exhibition.', '我们参观了艺术展。', [], ['exposition', 'fair', 'gallery', 'museum', 'show', 'spectacle'], 'noun', 'countable', '艺术'],
  ], 'exhibitions', ['exhibit', 'exposition'], '←exhibit B1 展出 + -ion，B1 继承；家族 exposition 博览会，近义 fair 集市展、gallery 画廊、museum 博物馆、show 演出、spectacle 盛况');

  W('existence', 'noun', '/ɪɡˈzɪstəns/', 'A2', ['CET4'], '存在', 'The state of being real or living.', [
    ['存在', 'The state of being real or living.', '真实或活着的状态。', '不可数：come into existence（产生）。', 'The law came into existence in 2001.', '这部法律2001年生效。', ['come into existence'], ['being', 'life'], 'noun', 'uncountable', '书面'],
  ], '', ['exist'], '←exist A2 + -ence，A2 继承；近义 being 存在、life 生命');

  W('expanse', 'noun', '/ɪksˈpæns/', 'B1', [], '宽阔；浩瀚', 'A wide open area.', [
    ['宽阔；浩瀚', 'A wide open area.', '宽阔的空地。', '可数或不可数。', 'They crossed a vast expanse.', '他们穿过一片浩瀚之地。', ['vast expanse'], ['stretch', 'sheet'], 'noun', 'uncountable/countable', '自然'],
  ], 'expanses', ['expand'], '←expand B1 + -se（d→s 音变），B1 继承；近义 stretch 连绵、sheet 一大片');

  W('expansion', 'noun', '/ɪksˈpænʃn/', 'B1', ['CET4'], '扩张；膨胀', 'The act of becoming bigger.', [
    ['扩张；膨胀', 'The act of becoming bigger.', '变大的行为。', '不可数或可数。', 'The firm plans expansion abroad.', '公司计划向海外扩张。', [], ['sprawl'], 'noun', 'uncountable/countable', '商务'],
  ], 'expansions', ['expand'], '←expand B1 + -sion（d→s 音变），B1 继承；近义 sprawl 无序蔓延');

  W('expectation', 'noun', '/ˌekspekˈteɪʃn/', 'A1', ['CET4'], '期待；预期', 'A belief that something will happen.', [
    ['期待；预期', 'A belief that something will happen.', '相信某事会发生。', '可数或不可数：live up to expectations。', 'The results met our expectations.', '结果达到了预期。', ['meet expectations'], ['hope'], 'noun', 'uncountable/countable', '通用'],
  ], 'expectations', ['expect'], '←expect A1 + -ation，A1 继承；近义 hope 希望');

  W('expected', 'adjective', '/ɪksˈpektɪd/', 'A1', [], '预期的', 'Thought likely to happen.', [
    ['预期的', 'Thought likely to happen.', '被认为可能发生的。', '分词形容词：as expected（果不其然）。', 'The storm arrived as expected.', '暴风雨如期而至。', ['as expected'], ['due', 'inevitable', 'probable', 'suppose'], 'adjective', '定语/表语', '通用'],
  ], '', ['expect', 'due'], '←expect A1 + -ed，A1 继承；家族 due 预期的，近义 inevitable 必然的、probable 很可能的、suppose 猜想（be supposed to 本应）');

  W('expecting', 'adjective', '/ɪksˈpektɪŋ/', 'A1', [], '怀孕的；期待的', 'Having a baby to be born, or waiting.', [
    ['怀孕的；期待的', 'Having a baby to be born, or waiting.', '怀着将出生的孩子，或等待中的。', '分词形容词：be expecting（委婉）。', 'She is expecting a baby.', '她怀孕了。', [], ['pregnant'], 'adjective', '表语', '家庭'],
  ], '', ['expect', 'pregnant'], '←expect A1 + -ing，A1 继承；家族 pregnant 怀孕的');

  W('expectorate', 'verb', '/ɪksˈpektəreɪt/', '', [], '咳出（痰）', 'To cough up liquid from the lungs.', [
    ['咳出（痰）', 'To cough up liquid from the lungs.', '把肺里的液体咳出来。', '及物，医学用语。', 'The nurse asked him to expectorate.', '护士让他咳痰。', [], ['spit'], 'verb', '及物', '健康'],
  ], 'expectorates~expectorated~expectorated~expectorating', [], '与 expect 拼写交叠但无派生关系（假友），故留空；近义 spit 吐（痰）。分级留空');

  W('expenditure', 'noun', '/ɪksˈpendɪtʃə(r)/', 'B2', ['CET4'], '支出；花费', 'Money spent by a government or group.', [
    ['支出；花费', 'Money spent by a government or group.', '政府或团体花掉的钱。', '可数或不可数，正式。', 'Military expenditure rose sharply.', '军费开支猛增。', [], ['expense'], 'noun', 'uncountable/countable', '商务'],
  ], 'expenditures', ['expend', 'expense'], '←expend B2 花费 + -iture，B2 继承；家族 expense 花费（常用）');

  W('expenses', 'noun', '/ɪksˈpensɪz/', 'B1', [], '开销；费用', 'Money spent on work or travel, paid back later.', [
    ['开销；费用', 'Money spent on work or travel, paid back later.', '工作或差旅花的钱，事后报销。', '复数：travel expenses。', 'Keep your expenses low.', '把开销控制住。', ['travel expenses'], ['overhead'], 'noun', 'countable', '商务'],
  ], '', ['expense', 'overhead'], '←expense B1 + -s，B1 继承；家族 overhead 日常开销');

  W('expensive', 'adjective', '/ɪksˈpensɪv/', 'B1', ['CET4'], '昂贵的', 'Costing a lot of money.', [
    ['昂贵的', 'Costing a lot of money.', '花很多钱的。', 'expensive taste 花钱大手大脚的品味。', 'The watch is too expensive.', '这表太贵了。', [], ['dear', 'steep'], 'adjective', '定语/表语', '商务'],
  ], '', ['expense', 'dear'], '←expense B1 + -ive（e→ive），B1 继承；家族 dear 贵的（英式），近义 steep 高得离谱的');

  W('experienced', 'adjective', '/ɪksˈpɪəriənst/', 'A2', ['CET4'], '有经验的', 'Having done something for a long time.', [
    ['有经验的', 'Having done something for a long time.', '做某事很久的。', '分词形容词：an experienced driver。', 'She is an experienced teacher.', '她是位经验丰富的老师。', [], ['veteran'], 'adjective', '定语', '职业'],
  ], '', ['experience', 'veteran'], '←experience A2 + -d，A2 继承；家族 veteran 老手');

  W('experimental', 'adjective', '/ɪksˌperɪˈmentl/', 'A2', ['CET4'], '实验的；试验性的', 'About experiments, or still being tested.', [
    ['实验的；试验性的', 'About experiments, or still being tested.', '关于实验的，或仍在试验的。', 'experimental stage 试验阶段。', 'The drug is still experimental.', '这药仍在试验中。', [], ['empirical', 'trial'], 'adjective', '定语', '科学'],
  ], '', ['experiment', 'empirical'], '←experiment A2 实验 + -al，A2 继承；家族 empirical 经验主义的，近义 trial 试验的');

})(typeof window !== 'undefined' ? window : globalThis);
