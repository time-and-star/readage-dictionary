/* data/words/cet/author_i7.js · 手敲词条 I（七·前段）：in place of ~ indirect（含 9 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_i7.js 必须在 _cet_helper.js 之后加载');

  W('in place of', 'conjunction', '/ˌɪn ˈpleɪs ɒv/', '', [], '代替', 'Instead of something.', [
    ['代替', 'Instead of something.', '替代某物。', '连词短语。', 'Tea in place of coffee.', '喝茶代替咖啡。', [], ['instead'], 'conjunction', 'null', '通用'],
  ], '', ['instead'], 'in place 代替 + of；家族 instead 代替。短语分级留空').phrase = true;

  W('in spite of', 'conjunction', '/ˌɪn ˈspaɪt ɒv/', '', [], '尽管', 'Despite something.', [
    ['尽管', 'Despite something.', '虽然有某事。', '连词短语，后接名词。', 'We went in spite of rain.', '下雨我们也去了。', [], ['despite', 'notwithstanding'], 'conjunction', 'null', '通用'],
  ], '', ['despite'], 'in spite 不顾 + of；家族 despite 尽管，近义 notwithstanding 尽管（正式）。短语分级留空').phrase = true;

  W('in the end', 'adverb', '/ˌɪn ðiː ˈend/', '', [], '最后', 'After all things.', [
    ['最后', 'After all things.', '一切之后。', '副词短语。', 'In the end, we agreed.', '最后我们同意了。', [], ['eventually'], 'adverb', 'null', '通用'],
  ], '', [], 'in 到 + the end 结尾；近义 eventually 最终。短语分级留空').phrase = true;

  W('in the interim', 'adverb', '/ˌɪn ðiː ˈɪntərɪm/', '', [], '在此期间', 'In the time between.', [
    ['在此期间', 'In the time between.', '在中间的时间里。', '副词短语，正式。', 'In the interim, wait here.', '这期间在这儿等。', [], ['meanwhile'], 'adverb', 'null', '书面'],
  ], '', [], 'in 在 + the interim 间隙；近义 meanwhile 同时。短语分级留空').phrase = true;

  W('in total', 'adverb', '/ˌɪn ˈtəʊtl/', '', [], '总计', 'Adding everything.', [
    ['总计', 'Adding everything.', '把一切加起来。', '副词短语。', 'We spent fifty in total.', '总共花了五十。', [], ['altogether'], 'adverb', 'null', '商务'],
  ], '', [], 'in 总计 + total 总数；近义 altogether 总共。短语分级留空').phrase = true;

  W('in what place', 'adverb', '/ˌɪn ˈwɒt ˈpleɪs/', '', [], '在什么地方', 'Asking where.', [
    ['在什么地方', 'Asking where.', '问在哪里。', '疑问短语。', 'In what place did it rain?', '哪里下雨了。', [], ['where'], 'adverb', 'null', '通用'],
  ], '', [], 'in 在 + what place 什么地方；近义 where 哪里。短语分级留空').phrase = true;

  W('in what way', 'adverb', '/ˌɪn ˈwɒt ˈweɪ/', '', [], '以什么方式', 'Asking how.', [
    ['以什么方式', 'Asking how.', '问用什么方式。', '疑问短语。', 'In what way can I help?', '我怎么帮你。', [], ['how'], 'adverb', 'null', '通用'],
  ], '', ['how'], 'in 以 + what way 什么方式；家族 how 怎样。短语分级留空').phrase = true;

  W('in which', 'conjunction', '/ˌɪn ˈwɪtʃ/', '', [], '在其中', 'Inside what or which.', [
    ['在其中', 'Inside what or which.', '在什么里面。', '连词短语，引导从句。', 'The house in which we live.', '我们住的房子。', [], ['where'], 'conjunction', 'null', '语法'],
  ], '', ['where'], 'in 在其中 + which 哪个；家族 where 哪里。短语分级留空').phrase = true;

  W('in-between', 'adjective', '/ˌɪn bɪˈtwiːn/', 'A1', [], '中间的', 'Between two things.', [
    ['中间的', 'Between two things.', '在两样之间。', 'an in-between stage 中间阶段。', 'It is an in-between size.', '这是中间码。', [], ['intermediate'], 'adjective', '定语', '通用'],
  ], '', ['in', 'between'], '←in A1 + between，取首成分级 A1；近义 intermediate 中间的');

  W('inaccurate', 'adjective', '/ɪnˈækjərət/', 'B1', [], '不准确的', 'Not correct.', [
    ['不准确的', 'Not correct.', '不正确。', 'an inaccurate report 失实报道。', 'The map is inaccurate.', '地图不准。', [], [], 'adjective', '定语/表语', '通用'],
  ], '', ['accurate'], '←accurate B1 + in-（反向），B1 继承；家族 accurate 准确的');

  W('inactive', 'adjective', '/ɪnˈæktɪv/', 'A2', [], '不活跃的', 'Not acting or moving.', [
    ['不活跃的', 'Not acting or moving.', '不动不做的。', 'an inactive volcano 死火山。', 'He leads an inactive life.', '他过着清闲日子。', [], ['idle', 'passive'], 'adjective', '定语/表语', '通用'],
  ], '', ['active', 'idle', 'passive'], '←active A2 + in-（反向），A2 继承；家族 idle 闲置的、passive 被动的');

  W('inactivity', 'noun', '/ˌɪnækˈtɪvəti/', 'A2', [], '不活跃', 'Being inactive.', [
    ['不活跃', 'Being inactive.', '不活动。', '不可数。', 'Inactivity harms health.', '不动伤身。', [], ['inertia'], 'noun', 'uncountable', '健康'],
  ], '', ['inactive'], '←inactive（本批新词 A2）+ -ity，A2 继承；近义 inertia 惯性（不活跃）');

  W('inadequate', 'adjective', '/ɪnˈædɪkwət/', 'B2', [], '不足的', 'Not enough.', [
    ['不足的', 'Not enough.', '不够的。', 'inadequate pay 微薄工资。', 'The room is inadequate.', '房间不够住。', [], ['deficient'], 'adjective', '定语/表语', '通用'],
  ], '', ['adequate', 'deficient'], '←adequate B2 + in-（反向），B2 继承；家族 adequate 足够的、deficient 不足的');

  W('inaugural', 'adjective', '/ɪˈnɔːɡjərəl/', 'C1', [], '就职的；首届的', 'First in office, or first ever.', [
    ['就职的；首届的', 'First in office, or first ever.', '初上任的，或有史以来第一次的。', 'an inaugural speech 就职演说。', 'He gave an inaugural talk.', '他做了首场报告。', [], ['maiden'], 'adjective', '定语', '政治'],
  ], '', ['inaugurate'], '←inaugurate C1 + -al（e→al，同 arrival），C1 继承；近义 maiden 初次的');

  W('inbuilt', 'adjective', '/ˌɪnˈbɪlt/', '', [], '内建的', 'Built inside by design.', [
    ['内建的', 'Built inside by design.', '设计时装在里面的。', 'an inbuilt radio 内置收音机。', 'The seat has inbuilt heating.', '座椅带内置加热。', [], ['implicit', 'inherent'], 'adjective', '定语', '工业'],
  ], '', ['built'], 'built（本词库未收）+ in-——词根不可见，故留空；近义 implicit 含蓄的、inherent 内在的');

  W('incidental', 'adjective', '/ˌɪnsɪˈdentl/', 'B1', ['CET4'], '附带的', 'Less important, by the way.', [
    ['附带的', 'Less important, by the way.', '次要的、顺带的。', 'incidental costs 杂费。', 'Music was incidental fun.', '音乐是顺带的乐趣。', [], ['incident'], 'adjective', '定语', '通用'],
  ], '', ['incident'], '←incident B1 + -al，B1 继承；近义 incident 事件（附带事件义）');

  W('inclined', 'adjective', '/ɪnˈklaɪnd/', 'B2', ['CET4'], '倾向于的', 'Likely to do something.', [
    ['倾向于的', 'Likely to do something.', '可能做某事的。', 'be inclined to 倾向于。', 'I am inclined to agree.', '我倾向于同意。', ['inclined to'], ['prone'], 'adjective', '表语', '通用'],
  ], '', ['incline', 'prone'], '←incline B2 + -d，B2 继承；家族 prone 倾向于');

  W('inconsistency', 'noun', '/ˌɪnkənˈsɪstənsi/', '', [], '不一致', 'Lacking agreement.', [
    ['不一致', 'Lacking agreement.', '前后不一。', '可数或不可数。', 'The story has inconsistencies.', '故事前后矛盾。', [], ['discrepancy'], 'noun', 'uncountable/countable', '通用'],
  ], 'inconsistencies', ['discrepancy'], 'inconsistent（本词库未收）+ -cy——词根不可见，故留空；家族 discrepancy 不一致');

  W('incorrect', 'adjective', '/ˌɪnkəˈrekt/', 'A1', [], '错误的', 'Not right.', [
    ['错误的', 'Not right.', '不对的。', 'an incorrect answer 错误答案。', 'Your spelling is incorrect.', '你拼写错了。', [], ['false', 'wrong'], 'adjective', '定语/表语', '通用'],
  ], '', ['correct', 'wrong'], '←correct A1 + in-（反向），A1 继承；家族 wrong 错误的，近义 false 假的');

  W('incorrectly', 'adverb', '/ˌɪnkəˈrektli/', 'A1', [], '错误地', 'In a wrong way.', [
    ['错误地', 'In a wrong way.', '用错的方式。', '副词。', 'He spelled it incorrectly.', '他拼错了。', [], ['wrong'], 'adverb', 'null', '通用'],
  ], '', ['incorrect'], '←incorrect（本批新词 A1）+ -ly，A1 继承；近义 wrong 错误地');

  W('incubate', 'verb', '/ˈɪŋkjubeɪt/', '', [], '孵化', 'To keep eggs warm to hatch.', [
    ['孵化', 'To keep eggs warm to hatch.', '保暖蛋以孵出。', '及物或不及物。', 'Hens incubate eggs.', '母鸡孵蛋。', [], ['hatch'], 'verb', '及物', '自然'],
  ], 'incubates~incubated~incubated~incubating', ['hatch'], '拉丁 incubare（伏卧）——无库内派生根；家族 hatch 孵化');

  W('incumbency', 'noun', '/ɪnˈkʌmbənsi/', '', [], '在职', 'Holding an office now.', [
    ['在职', 'Holding an office now.', '现任职务。', '不可数，正式。', 'During his incumbency, taxes fell.', '他任内减税了。', [], ['tenure'], 'noun', 'uncountable', '政治'],
  ], 'incumbencies', ['incumbent'], 'incumbent 在职者（本词库未收）+ -cy——词根不可见，故留空；近义 tenure 任期');

  W('indecent', 'adjective', '/ɪnˈdiːsnt/', 'B1', [], '不得体的', 'Shocking and rude.', [
    ['不得体的', 'Shocking and rude.', '伤风败俗。', 'indecent photos 不雅照。', 'The joke was indecent.', '笑话下流。', [], ['obscene'], 'adjective', '定语', '社会'],
  ], '', ['decent', 'obscene'], '←decent B1 + in-（反向），B1 继承；家族 obscene 猥亵的');

  W('independence', 'noun', '/ˌɪndɪˈpendəns/', 'A2', ['CET4'], '独立', 'Freedom from control.', [
    ['独立', 'Freedom from control.', '不受控制。', '不可数：win independence。', 'The country won independence.', '国家赢得了独立。', ['win independence'], ['liberty'], 'noun', 'uncountable', '政治'],
  ], '', ['independent'], '←independent A2 + -ence（t→ce），A2 继承；近义 liberty 自由');

  W('indication', 'noun', '/ˌɪndɪˈkeɪʃn/', 'B1', ['CET4'], '迹象', 'A sign of something.', [
    ['迹象', 'A sign of something.', '某事的征兆。', '可数或不可数。', 'Fever is an indication.', '发烧是个迹象。', [], ['sign', 'symptom'], 'noun', 'uncountable/countable', '通用'],
  ], 'indications', ['indicate', 'sign', 'symptom'], '←indicate B1 + -ion（e→ion），B1 继承；家族 sign 迹象、symptom 症状');

  W('indicator', 'noun', '/ˈɪndɪkeɪtə(r)/', 'B1', ['CET4'], '指标', 'A sign showing a state.', [
    ['指标', 'A sign showing a state.', '显示状态的标志。', '可数。', 'Price is a key indicator.', '价格是关键指标。', [], ['barometer', 'gauge', 'index', 'lamp', 'symptom'], 'noun', 'countable', '商务'],
  ], 'indicators', ['indicate', 'index'], '←indicate B1 + -or（e→or），B1 继承；家族 index 指标，近义 barometer 晴雨表、gauge 测量仪、lamp 灯（指示灯）、symptom 症状');

  W('indigenous people', 'noun', '/ɪnˈdɪdʒənəs ˈpiːpl/', '', [], '土著', 'First peoples of a land.', [
    ['土著', 'First peoples of a land.', '一片土地最早的人。', '复数：protect indigenous rights。', 'Laws protect indigenous people.', '法律保护土著。', [], ['aboriginal'], 'noun', 'countable', '社会'],
  ], '', ['aboriginal'], 'indigenous 土著的 + people 人；近义 aboriginal 土著。短语分级留空').phrase = true;

  W('indignation', 'noun', '/ˌɪndɪɡˈneɪʃn/', '', ['CET6'], '愤慨', 'Anger at unfairness.', [
    ['愤慨', 'Anger at unfairness.', '对不公的愤怒。', '不可数。', 'The verdict caused indignation.', '判决引起公愤。', [], ['outrage'], 'noun', 'uncountable', '情感'],
  ], '', ['indignant'], 'indignant 愤慨的（本词库未收）+ -ation——词根不可见，故留空；近义 outrage 愤怒');

  W('indigo', 'noun/adjective', '/ˈɪndɪɡəʊ/', '', [], '靛蓝', 'A deep blue dye.', [
    ['靛蓝', 'A deep blue dye.', '深蓝色染料。', '不可数或形容词。', 'Jeans were dyed indigo.', '牛仔裤染成靛蓝。', [], ['navy'], 'noun/adjective', 'null', '外貌'],
  ], '', [], '希腊语 indikon——无库内派生根；近义 navy 藏青（海军蓝）');

  W('indirect', 'adjective', '/ˌɪndəˈrekt/', 'A2', [], '间接的', 'Not straight or direct.', [
    ['间接的', 'Not straight or direct.', '不直接。', 'an indirect answer 婉转回答。', 'He gave an indirect reply.', '他婉转回答。', [], ['second-hand', 'secondary'], 'adjective', '定语', '通用'],
  ], '', ['direct', 'second-hand'], '←direct A2 + in-（反向），A2 继承；家族 second-hand 间接的，近义 secondary 次要的');

  W('individuals', 'noun', '/ˌɪndɪˈvɪdʒuəlz/', 'A2', [], '个人（复数）', 'Single persons; plural of individual.', [
    ['个人（复数）', 'Single persons; plural of individual.', '单个的人；individual 的复数。', '复数。', 'Individuals differ widely.', '个人差异很大。', [], ['person'], 'noun', 'countable', '社会'],
  ], '', ['individual'], '←individual A2 + -s，A2 继承；近义 person 人');

  W('indoors', 'adverb', '/ˌɪnˈdɔːz/', 'A2', ['CET4'], '在室内', 'Inside a building.', [
    ['在室内', 'Inside a building.', '在建筑里面。', '副词：stay indoors 待室内。', 'Stay indoors today.', '今天待室内。', ['stay indoors'], ['inside'], 'adverb', 'null', '家居'],
  ], '', ['indoor'], '←indoor A2 + -s，A2 继承；近义 inside 在室内');

  W('inducement', 'noun', '/ɪnˈdjuːsmənt/', 'B2', ['CET4'], '诱因', 'Something tempting people.', [
    ['诱因', 'Something tempting people.', '引诱人的东西。', '可数或不可数。', 'Bonuses are an inducement.', '奖金是诱因。', [], ['incentive'], 'noun', 'uncountable/countable', '商务'],
  ], 'inducements', ['induce'], '←induce B2 + -ment，B2 继承；近义 incentive 激励');

  W('induct', 'verb', '/ɪnˈdʌkt/', '', [], '使入门', 'To bring into office or group.', [
    ['使入门', 'To bring into office or group.', '引入职位或团体。', '及物，正式。', 'They inducted new members.', '他们接纳了新成员。', [], ['initiate'], 'verb', '及物', '社会'],
  ], 'inducts~inducted~inducted~inducting', [], 'in- + duct——duct（管子）语义无关，假切分，故留空；近义 initiate 使入门');

  W('indulgence', 'noun', '/ɪnˈdʌldʒəns/', 'B2', ['CET4'], '沉溺', 'Free enjoyment of pleasures.', [
    ['沉溺', 'Free enjoyment of pleasures.', '放纵享乐。', '可数或不可数。', 'Chocolate is my indulgence.', '巧克力是我的嗜好。', [], ['excess'], 'noun', 'uncountable/countable', '情感'],
  ], 'indulgences', ['indulge', 'excess'], '←indulge B2 + -ence，B2 继承；家族 excess 过度');

  W('indulgent', 'adjective', '/ɪnˈdʌldʒənt/', 'B2', ['CET4'], '纵容的', 'Too kind and allowing.', [
    ['纵容的', 'Too kind and allowing.', '过分宽容。', 'indulgent parents 溺爱孩子的父母。', 'Strict teachers are seldom indulgent.', '严师很少纵容。', [], ['lenient'], 'adjective', '定语', '家庭'],
  ], '', ['indulge'], '←indulge B2 + -ent，B2 继承；近义 lenient 宽大的');

  W('industrial', 'adjective', '/ɪnˈdʌstriəl/', 'A2', ['CET4'], '工业的', 'About making goods in plants.', [
    ['工业的', 'About making goods in plants.', '关于工厂造货。', 'industrial zones 工业区。', 'The city has industrial roots.', '这城有工业根基。', [], ['petrochemical'], 'adjective', '定语', '工业'],
  ], '', ['industry'], '←industry A2 + -ial（y→ial），A2 继承；近义 petrochemical 石化的');

  W('industrialize', 'verb', '/ɪnˈdʌstriəlaɪz/', 'A2', [], '工业化', 'To build industries.', [
    ['工业化', 'To build industries.', '兴办工业。', '及物或不及物。', 'The region industrialized fast.', '该地区快速工业化。', [], ['mechanize'], 'verb', '及物', '工业'],
  ], 'industrializes~industrialized~industrialized~industrializing', ['industrial', 'mechanize'], '←industrial（本批新词 A2）+ -ize，A2 继承；家族 mechanize 机械化');

  W('industrious', 'adjective', '/ɪnˈdʌstriəs/', 'A2', ['CET4'], '勤奋的', 'Working hard.', [
    ['勤奋的', 'Working hard.', '工作努力。', 'an industrious pupil 勤奋的学生。', 'Bees are industrious insects.', '蜜蜂勤劳。', [], [], 'adjective', '定语/表语', '职业'],
  ], '', ['industry', 'diligent'], '←industry A2 + -ious（y→ious），A2 继承；家族 diligent 勤奋的');

  W('inevitability', 'noun', '/ɪnˌevɪtəˈbɪləti/', 'B2', [], '必然性', 'Being sure to happen.', [
    ['必然性', 'Being sure to happen.', '必定发生。', '不可数。', 'They accept inevitability.', '他们接受必然。', [], ['necessity'], 'noun', 'uncountable', '通用'],
  ], '', ['inevitable'], '←inevitable B2 + -ity（le→ility，同 possibility），B2 继承；近义 necessity 必然');

  W('inexpensive', 'adjective', '/ˌɪnɪksˈpensɪv/', 'B1', [], '不贵的', 'Cheap in price.', [
    ['不贵的', 'Cheap in price.', '价格便宜。', 'an inexpensive hotel 实惠旅馆。', 'The meal was inexpensive.', '这餐不贵。', [], ['cheap'], 'adjective', '定语/表语', '商务'],
  ], '', ['expensive', 'cheap'], '←expensive B1 + in-（反向），B1 继承；家族 cheap 便宜的');

  W('inexperienced', 'adjective', '/ˌɪnɪksˈpɪəriənst/', 'A2', [], '没经验的', 'Lacking practice.', [
    ['没经验的', 'Lacking practice.', '缺少历练。', 'an inexperienced driver 新手司机。', 'We were young and inexperienced.', '我们年轻没经验。', [], ['green', 'raw'], 'adjective', '定语/表语', '职业'],
  ], '', ['experienced'], '←experienced A2 + in-（反向），A2 继承；近义 green 新手的、raw 生手的');

  W('infamous', 'adjective', '/ˈɪnfəməs/', 'B1', [], '臭名昭著的', 'Famous for bad things.', [
    ['臭名昭著的', 'Famous for bad things.', '因坏事出名。', 'an infamous criminal 臭名昭著的罪犯。', 'The prison is infamous.', '这监狱臭名昭著。', [], ['notorious'], 'adjective', '定语/表语', '社会'],
  ], '', ['famous', 'notorious'], '←famous B1 + in-（反向：出名→臭名），B1 继承；家族 notorious 臭名昭著的');

  W('infectious', 'adjective', '/ɪnˈfekʃəs/', 'B2', ['CET4'], '传染的', 'Spreading disease fast.', [
    ['传染的', 'Spreading disease fast.', '快速传播疾病。', 'infectious laughter 有感染力的笑声。', 'Flu is highly infectious.', '流感传染性强。', [], ['contagious'], 'adjective', '定语/表语', '健康'],
  ], '', ['infect', 'contagious'], '←infect B2 + -ious，B2 继承；家族 contagious 传染的');

  W('inferno', 'noun', '/ɪnˈfɜːnəʊ/', '', [], '地狱般烈火', 'Hell-like fire.', [
    ['地狱般烈火', 'Hell-like fire.', '地狱般的火。', '可数，文学用语。', 'The building became an inferno.', '大楼成了火海。', [], ['hell'], 'noun', 'countable', '文学'],
  ], 'infernos', ['hell'], '意大利语 inferno（地狱）——无库内派生根；家族 hell 地狱');

  W('infertile', 'adjective', '/ɪnˈfɜːtaɪl/', 'B1', [], '贫瘠的', 'Giving no crops or babies.', [
    ['贫瘠的', 'Giving no crops or babies.', '不产庄稼或后代。', 'infertile soil 瘠土。', 'The land lies infertile.', '土地荒着。', [], ['barren'], 'adjective', '定语', '自然'],
  ], '', ['fertile'], '←fertile B1 + in-（反向），B1 继承；近义 barren 贫瘠的');

  W('infestation', 'noun', '/ˌɪnfesˈteɪʃn/', '', [], ' infest；虫害', 'Being overrun by pests.', [
    ['虫害', 'Being overrun by pests.', '被虫子占满。', '可数。', 'There is a rat infestation.', '鼠患严重。', [], ['plague'], 'noun', 'countable', '健康'],
  ], 'infestations', ['infest'], 'infest 侵扰（本词库未收）+ -ation——词根不可见，故留空；近义 plague 瘟疫');

  W('infiltrate', 'verb', '/ˈɪnfɪltreɪt/', '', [], '渗透', 'To enter secretly.', [
    ['渗透', 'To enter secretly.', '暗中进入。', '及物或不及物。', 'Spies infiltrated the group.', '间谍渗入了团体。', [], ['penetrate'], 'verb', '及物', '军事'],
  ], 'infiltrates~infiltrated~infiltrated~infiltrating', ['filter'], 'in- + filtrate——filtrate 不在库（filter 不可见：缺 e），故留空；近义 penetrate 渗透');

  W('infirmary', 'noun', '/ɪnˈfɜːməri/', '', [], '医务室', 'A small hospital room.', [
    ['医务室', 'A small hospital room.', '小医院房间。', '可数。', 'Rest in the infirmary.', '去医务室休息。', [], ['hospital'], 'noun', 'countable', '健康'],
  ], 'infirmaries', ['hospital'], 'infirm 体弱的（本词库未收）+ -ary——词根不可见，故留空；家族 hospital 医院');

  W('inflame', 'verb', '/ɪnˈfleɪm/', 'B1', [], '激怒；点燃', 'To anger, or set on fire.', [
    ['激怒；点燃', 'To anger, or set on fire.', '激怒，或点着。', '及物。', 'His words inflamed crowds.', '他的话激怒了人群。', [], ['irritate'], 'verb', '及物', '情感'],
  ], 'inflames~inflamed~inflamed~inflaming', ['flame', 'irritate'], '←flame B1 + in-（使…），B1 继承；家族 irritate 激怒');

  W('inflexible', 'adjective', '/ɪnˈfleksəbl/', 'B2', [], ' inflexible；死板的', 'Not bending or changing.', [
    ['死板的', 'Not bending or changing.', '不弯不变。', 'inflexible rules 死规定。', 'My boss is inflexible.', '老板很固执。', [], ['rigid'], 'adjective', '定语/表语', '性格'],
  ], '', ['flexible'], '←flexible B2 + in-（反向），B2 继承；近义 rigid 死板的');

  W('influential', 'adjective', '/ˌɪnfluˈenʃl/', 'B1', ['CET4'], '有影响力的', 'Having power to change.', [
    ['有影响力的', 'Having power to change.', '有改变之力。', 'an influential writer 有影响力的作家。', 'She is highly influential.', '她很有影响力。', [], ['important'], 'adjective', '定语/表语', '社会'],
  ], '', ['influence'], '←influence B1 + -tial（ce→tial，同 essential），B1 继承；近义 important 重要的');

  W('informal', 'adjective', '/ɪnˈfɔːml/', 'B1', [], '非正式的', 'Casual and relaxed.', [
    ['非正式的', 'Casual and relaxed.', '随意放松。', 'an informal chat 闲聊。', 'Dress is informal tonight.', '今晚着装随意。', [], ['casual', 'familiar'], 'adjective', '定语/表语', '社交'],
  ], '', ['formal', 'casual'], '←formal B1 + in-（反向），B1 继承；家族 casual 随意的，近义 familiar 熟悉的（随便义）');

  W('information', 'noun', '/ˌɪnfəˈmeɪʃn/', 'B1', ['CET4'], '信息', 'Facts about something.', [
    ['信息', 'Facts about something.', '关于某事的事实。', '不可数：a piece of information。', 'This information helps a lot.', '这信息很有用。', ['a piece of information'], ['data', 'material', 'news'], 'noun', 'uncountable', '通用'],
  ], '', ['inform', 'data', 'news'], '←inform B1 + -ation，B1 继承；家族 data 数据、news 消息，近义 material 资料');

  W('informer', 'noun', '/ɪnˈfɔːmə(r)/', 'B1', [], '告密者', 'One telling secrets to police.', [
    ['告密者', 'One telling secrets to police.', '向警方告密的人。', '可数，贬义。', 'The informer named names.', '告密者供出了名字。', [], ['rat', 'sneak'], 'noun', 'countable', '社会'],
  ], 'informers', ['inform'], '←inform B1 + -er（表人），B1 继承；近义 rat 告密者、sneak 鬼祟者');

  W('infringement', 'noun', '/ɪnˈfrɪndʒmənt/', 'C1', ['CET6'], '侵犯', 'Breaking a law or right.', [
    ['侵犯', 'Breaking a law or right.', '违反法律权利。', '可数或不可数。', 'Piracy is copyright infringement.', '盗版即侵犯版权。', [], ['foul'], 'noun', 'uncountable/countable', '法律'],
  ], 'infringements', ['infringe'], '←infringe C1 + -ment，C1 继承；近义 foul 犯规');

  W('infringer', 'noun', '/ˌɪnˈfrɪndʒə(r)/', 'C1', [], '侵权者', 'One breaking a law.', [
    ['侵权者', 'One breaking a law.', '违法的人。', '可数。', 'Infringers face fines.', '侵权者面临罚款。', [], ['pirate'], 'noun', 'countable', '法律'],
  ], 'infringers', ['infringe'], '←infringe C1 + -er（表人），C1 继承；近义 pirate 盗版者');

  W('infuse', 'verb', '/ɪnˈfjuːz/', '', [], '注入', 'To fill with a feeling.', [
    ['注入', 'To fill with a feeling.', '填满某种感觉。', '及物：infuse with。', 'Music infused joy into us.', '音乐给我们注入欢乐。', ['infuse with'], ['inject'], 'verb', '及物', '情感'],
  ], 'infuses~infused~infused~infusing', ['inject'], 'in- + fuse——fuse（熔合）语义无关，假切分，故留空；家族 inject 注入');

  W('infusion', 'noun', '/ɪnˈfjuːʒn/', '', [], '注入；泡剂', 'Putting in, or herbal tea.', [
    ['注入；泡剂', 'Putting in, or herbal tea.', '注入，或草药茶。', '可数或不可数。', 'Drink a hot infusion.', '喝杯热草药茶。', [], ['drip', 'tea'], 'noun', 'uncountable/countable', '饮食'],
  ], 'infusions', ['infuse'], '←infuse（本批新词、无等级）+ -ion，故仍留空；近义 drip 点滴、tea 茶（infusion 泡剂义）');

  W('ingenuity', 'noun', '/ˌɪndʒəˈnjuːəti/', 'C1', ['CET6'], '机智', 'Clever new ideas.', [
    ['机智', 'Clever new ideas.', '聪明的新点子。', '不可数。', 'The design shows ingenuity.', '设计很有巧思。', [], ['resource'], 'noun', 'uncountable', '通用'],
  ], '', ['ingenious'], '←ingenious C1 + -ity（ious→ity，同 generosity），C1 继承；近义 resource 机智（才智）');

})(typeof window !== 'undefined' ? window : globalThis);
