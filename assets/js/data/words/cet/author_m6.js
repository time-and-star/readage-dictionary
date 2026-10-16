/* data/words/cet/author_m6.js · 手敲词条 M（三·引用缺口批）：measured ~ meridian（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批 9 条考级标签）。
 * 短语 4 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级、缩略/逆构词按母词继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_m6.js 必须在 _cet_helper.js 之后加载');

  W('measured', 'adjective', '/ˈmeʒəd/', 'A2', [], '审慎的；有分寸的', 'Carefully thought out and controlled.', [
    ['审慎的；有分寸的', 'Carefully thought out and controlled.', '经过慎重考虑、不冲动的。', '定语或表语：a measured tone。', 'He gave a measured reply.', '他作了审慎的回复。', ['a measured reply'], ['deliberate'], 'adjective', '定语/表语', '通用'],
  ], '', ['measure'], '←measure A2 + -ed（透明后缀），A2 继承（brief 根提示）；近义 deliberate 审慎的');

  W('measurement', 'noun', '/ˈmeʒərmənt/', 'A2', ['CET4'], '测量；尺寸', 'The act of measuring or a size found.', [
    ['测量；尺寸', 'The act of measuring, or a size found by measuring.', '测量行为；也指量得的尺寸。', '可数或不可数。', 'Take three measurements of the room.', '量一下房间的三个尺寸。', [], ['dimension', 'size'], 'noun', 'countable', '通用'],
  ], 'measurements', ['dimension'], '←measure A2 + -ment（透明后缀），A2 继承（brief 根提示）；家族 dimension 维度、近义 size 尺寸');

  W('mechanical', 'adjective', '/mɪˈkænɪkl/', 'B1', ['CET4'], '机械的；呆板的', 'Related to machines.', [
    ['机械的；呆板的', 'Related to machines; also done without thought.', '与机器有关的；也指机械呆板的。', '定语。', 'The problem has a simple mechanical cause.', '这个问题有简单的机械性原因。', ['mechanical failure'], ['technical'], 'adjective', '定语', '工业'],
  ], '', ['mechanic'], '←mechanic B1 + -al（透明后缀），B1 继承；近义 technical 技术的');

  W('mechanics', 'noun', '/mɪˈkænɪks/', 'B1', ['CET4'], '力学；机械学', 'The science of motion and forces.', [
    ['力学；机械学', 'The science of motion and forces, or the way something works.', '力学；也指运作机制。', '不可数。', 'The mechanics of flight are complex.', '飞行的力学原理很复杂。', [], ['physics'], 'noun', 'uncountable', '科学'],
  ], '', ['mechanic'], '←mechanic B1 + -s（学科复数），B1 继承（brief 根提示）；近义 physics 物理学');

  W('mechanism', 'noun', '/ˈmekənɪzəm/', 'B1', ['CET4'], '机制；装置', 'A set of parts that work together.', [
    ['机制；装置', 'A set of parts that work together, or a system for doing something.', '机械装置；也指运作机制。', '可数。', 'The clock has a broken mechanism.', '这座钟的机件坏了。', ['defence mechanism'], ['gear'], 'noun', 'countable', '通用'],
  ], 'mechanisms', ['mechanic'], '←mechanic B1（词干 mechan-）+ -ism（名词后缀），B1 继承；近义 gear 齿轮、装置');

  W('meddle', 'verb', '/ˈmedl/', '', [], '干涉；干预', 'To interfere in others affairs.', [
    ['干涉；干预', 'To interfere in something that is not your business.', '插手与自己无关的事。', '不及物：meddle in/with。', 'Officials should not meddle in private lives.', '官员不应干预私人生活。', ['meddle in'], ['interfere'], 'verb', '不及物', '通用'],
  ], 'meddles~meddled~meddled~meddling', ['interfere'], '无库内派生根，故留空；家族/近义 interfere 干涉');

  W('media', 'noun', '/ˈmiːdiə/', 'B1', ['CET4'], '媒体（总称）', 'Newspapers, TV and radio together.', [
    ['媒体（总称）', 'Newspapers, TV and radio considered together.', '报刊、电视、广播的总称。', '常与 the 连用。', 'The media covered the story widely.', '媒体广泛报道了此事。', [], ['press'], 'noun', 'uncountable', '媒体'],
  ], '', ['press'], '←medium B1 + a（复数形），B1 继承；家族/近义 press 新闻界');

  W('median', 'noun/adjective', '/ˈmiːdiən/', 'B1', [], '中位数；中间的', 'The middle value or position.', [
    ['中位数；中间的', 'The middle value in a set, or lying in the middle.', '一组数值的中位数；也指中间的。', '名词与形容词两用，统计用语。', 'The median income rose slowly.', '中位数收入缓慢上升。', [], ['mode'], 'noun/adjective', 'null', '科学'],
  ], '', ['medium'], '←medium B1 词干 medi- + -an（中间，medi-um→medi-an），语义直连，B1 继承；近义 mode 众数');

  W('medic', 'noun', '/ˈmedɪk/', 'B1', [], '医护兵；医生', 'A doctor or trained medical worker.', [
    ['医护兵；医生', 'A doctor, or a trained medical worker, especially in the army.', '医生；也指军队中的医护兵。', '可数。', 'The medic treated the wounded.', '医护兵为伤员进行了治疗。', [], ['nurse'], 'noun', 'countable', '健康'],
  ], 'medics', ['medical'], '←medical B1 缩略（medical 可见去 -al），B1 继承；近义 nurse 护士');

  W('medicaid', 'noun', '/ˈmedɪkeɪd/', 'B1', [], '医疗补助计划', 'US government health cover for low incomes.', [
    ['医疗补助计划', 'US government health cover for people on low incomes.', '美国面向低收入者的政府医保计划。', '不可数，专有名词用法。', 'The clinic accepts medicaid patients.', '这家诊所接受医疗补助患者。', [], [], 'noun', 'uncountable', '健康'],
  ], '', ['Medicare'], 'medical + aid 各取前段（混合造词），首成分 medic（本批，←medical B1）在库，B1 继承；家族 Medicare 联邦医保（另一计划）');

  W('medical science', 'noun', '/ˈmedɪkl ˈsaɪəns/', '', [], '医学（科学）', 'The science of treating illness.', [
    ['医学（科学）', 'The science of treating and preventing illness.', '研究疾病防治的科学。', '不可数。', 'Advances in medical science save lives.', '医学的进步拯救生命。', [], ['medicine'], 'noun', 'uncountable', '健康'],
  ], '', [], 'medical + science；近义 medicine 医学。短语分级留空').phrase = true;

  W('medicate', 'verb', '/ˈmedɪkeɪt/', 'B1', [], '用药物治疗', 'To treat someone with drugs.', [
    ['用药物治疗', 'To treat someone with drugs.', '用药物给人治疗。', '及物：medicate for sth。', 'They medicated her for the infection.', '他们用药为她治疗感染。', [], ['dose'], 'verb', '及物', '健康'],
  ], 'medicates~medicated~medicated~medicating', ['dose'], '词干 medic（本批，←medical B1）+ -ate（动词后缀），B1 继承；家族/近义 dose 剂量、用药');

  W('mediocre', 'adjective', '/ˌmiːdiˈəʊkə/', '', [], '平庸的；中等偏下的', 'Of only average quality.', [
    ['平庸的；中等偏下的', 'Of only average or poor quality.', '质量只有一般或偏下的。', '定语或表语。', 'The film was mediocre at best.', '这部电影顶多算平庸。', ['average'], ['average', 'indifferent', 'ordinary'], 'adjective', '定语/表语', '通用'],
  ], '', ['indifferent'], '拉丁 mediocris（半山腰）——与 medium 同源（medi-）但非直接派生且词形不可见，故留空；近义 average 平均的、indifferent 一般的、ordinary 普通的');

  W('meditate', 'verb', '/ˈmedɪteɪt/', '', [], '冥想；深思', 'To think deeply and calmly.', [
    ['冥想；深思', 'To think deeply and calmly about something.', '深入而平静地思考。', '不及物：meditate on。', 'She meditates for twenty minutes each day.', '她每天冥想二十分钟。', ['meditate on'], ['ponder'], 'verb', '不及物', '心理'],
  ], 'meditates~meditated~meditated~meditating', [], '拉丁 meditari——无库内派生根，故留空；近义 ponder 沉思');

  W('meditation', 'noun', '/ˌmedɪˈteɪʃn/', '', [], '冥想；静修', 'The practice of deep silent thought.', [
    ['冥想；静修', 'The practice of thinking deeply in silence.', '静默深思的练习。', '不可数或可数。', 'Ten minutes of meditation calmed him.', '十分钟的冥想让他平静下来。', [], ['yoga'], 'noun', 'uncountable', '心理'],
  ], '', ['yoga'], 'meditate + -ion——首成分 meditate（本批，等级留空），无级可继，故留空；家族/近义 yoga 瑜伽（修行形式）');

  W('meet again', 'verb', '/ˌmiːt əˈɡen/', '', [], '再次见面', 'To see someone again after a time apart.', [
    ['再次见面', 'To see someone again after a period apart.', '分别一段时间后再次相见。', '不及物短语。', 'The friends met again after ten years.', '朋友们十年后重逢。', [], ['reunite'], 'verb', '不及物', '社交'],
  ], '', [], 'meet + again；近义 reunite 重聚。短语分级留空').phrase = true;

  W('meet with', 'verb', '/ˌmiːt ˈwɪð/', '', [], '会见；遭遇', 'To meet someone officially.', [
    ['会见；遭遇', 'To meet someone officially, or to experience something.', '正式会见；也指遭遇（成功、事故）。', '及物短语。', 'The minister met with union leaders.', '部长会见了工会领袖。', ['meet with success'], ['receive'], 'verb', '及物', '社交'],
  ], '', [], 'meet + with；近义 receive 接见、收到。短语分级留空').phrase = true;

  W('memento', 'noun', '/meˈmentəʊ/', '', [], '纪念物', 'An object kept as a reminder.', [
    ['纪念物', 'An object kept to remind you of a place or event.', '为纪念某事而保留的物件。', '可数。', 'She kept the shell as a memento of the trip.', '她把贝壳留作旅行的纪念。', [], ['souvenir'], 'noun', 'countable', '通用'],
  ], 'mementos', ['memory', 'memoir', 'memorable', 'memorize', 'memorial', 'memorandum', 'souvenir'], 'memento 源自拉丁语 meminisse（记得），与 memory、memoir、memorable、memorize、memorial、memorandum 同属记忆词族；近义 souvenir 纪念品');

  W('memorable', 'adjective', '/ˈmemərəbl/', 'A2', [], '难忘的', 'Worth remembering.', [
    ['难忘的', 'Worth remembering; very special.', '值得记住的、特别的。', '定语或表语。', 'It was a memorable day for the family.', '那是这个家庭难忘的一天。', [], ['noteworthy'], 'adjective', '定语/表语', '家庭'],
  ], '', ['memory', 'memoir', 'memorize', 'memorial', 'memorandum', 'memo'], '词干 memor（memory A2 可见）+ -able（透明后缀），A2 继承；近义 noteworthy 值得注意的');

  W('memorize', 'verb', '/ˈmeməraɪz/', 'A2', [], '记住；熟记', 'To learn something by heart.', [
    ['记住；熟记', 'To learn something carefully so that you can remember it exactly.', '把内容牢牢记住。', '及物。', 'Students memorize the verb list each week.', '学生们每周都要背动词表。', [], ['remember', 'retain'], 'verb', '及物', '教育'],
  ], 'memorizes~memorized~memorized~memorizing', ['memory', 'memoir', 'memorable', 'memorial', 'memorandum', 'memo'], '←memory A2 逆构词（memory 词干 memor 可见，y→iz），A2 继承；近义 remember 记得、retain 保持记住');

  W('menacing', 'adjective', '/ˈmenəsɪŋ/', 'C1', [], '威胁的；凶相毕露的', 'Suggesting something bad will happen.', [
    ['威胁的；凶相毕露的', 'Suggesting that something bad may happen.', '预示坏事将发生的。', '定语。', 'He gave her a menacing look.', '他给了她一个威胁的眼神。', [], ['sinister'], 'adjective', '定语', '通用'],
  ], '', ['menace'], '←menace C1 + -ing（透明后缀），C1 继承（brief 根提示）；近义 sinister 不祥的、险恶的');

  W('menagerie', 'noun', '/ˌmenəˈdʒɑːri/', '', [], '珍奇动物展', 'A collection of wild animals kept for show.', [
    ['珍奇动物展', 'A collection of wild animals kept for show.', '供观赏的野生动物集合。', '可数。', 'The menagerie included lions and monkeys.', '这个动物展有狮子和猴子。', [], ['zoo'], 'noun', 'countable', '自然'],
  ], 'menageries', [], '法语 ménagerie——形似 manage 但非派生（词首 men 非 man），切词假象，故留空；近义 zoo 动物园');

  W('mending', 'noun', '/ˈmendɪŋ/', 'B1', [], '修补；待补衣物', 'Small repairs or clothes to repair.', [
    ['修补；待补衣物', 'Small repairs, or clothes that need repair.', '小修补；也指待缝补的衣物。', '不可数。', 'She did the mending at night.', '她晚上做缝补活。', [], ['repair'], 'noun', 'uncountable', '家居'],
  ], '', ['mend'], '←mend B1 + -ing（透明后缀），B1 继承（brief 根提示）；近义 repair 修理');

  W('menstruation', 'noun', '/ˌmenstruˈeɪʃn/', '', [], '月经；行经', 'The monthly blood flow from the body.', [
    ['月经；行经', 'The monthly blood flow from the body.', '每月一次的身体经血排出。', '不可数。', 'Menstruation is a normal bodily process.', '月经是正常的生理过程。', [], ['period'], 'noun', 'uncountable', '健康'],
  ], '', [], 'menstruate 不在库，无库内派生根，故留空；近义 period 月经、时期');

  W('mental health', 'noun', '/ˌmentl ˈhelθ/', '', [], '心理健康', 'The health of a person mind.', [
    ['心理健康', 'The health of a person mind and feelings.', '一个人精神与情绪的健康状况。', '不可数。', 'She takes care of her mental health.', '她注意自己的心理健康。', [], ['psychiatry'], 'noun', 'uncountable', '心理'],
  ], '', [], 'mental + health；近义 psychiatry 精神病学。短语分级留空').phrase = true;

  W('mentality', 'noun', '/menˈtæləti/', 'B1', ['CET4'], '心态；思维方式', 'A person way of thinking.', [
    ['心态；思维方式', 'A person way of thinking about things.', '一个人的思维方式。', '可数或不可数。', 'The winning mentality showed in every game.', '每场比赛都体现了求胜的心态。', [], ['psychology'], 'noun', 'countable', '心理'],
  ], 'mentalities', ['mindset'], '←mental B1 + -ity（透明后缀），B1 继承（brief 根提示）；家族 mindset 心态、近义 psychology 心理');

  W('merciful', 'adjective', '/ˈmɜːsɪfl/', 'B2', ['CET4'], '仁慈的；宽大的', 'Showing mercy or kindness.', [
    ['仁慈的；宽大的', 'Showing mercy or kindness.', '表现出仁慈或宽容的。', '定语或表语。', 'The judge was merciful to the first offender.', '法官对初犯者从宽处理。', [], ['lenient'], 'adjective', '定语/表语', '法律'],
  ], '', ['lenient'], '←mercy B2 + -ful（y→i，透明后缀），B2 继承；家族/近义 lenient 宽大的');

  W('merciless', 'adjective', '/ˈmɜːsɪləs/', 'B2', [], '无情的；冷酷的', 'Having no mercy or pity.', [
    ['无情的；冷酷的', 'Having no mercy or pity.', '毫无怜悯的。', '定语或表语。', 'The critics were merciless about the ending.', '批评家们对结局毫不留情。', [], ['relentless', 'ruthless'], 'adjective', '定语/表语', '通用'],
  ], '', ['ruthless'], '←mercy B2 + -less（y→i，透明后缀），B2 继承；家族 ruthless 残酷的、近义 relentless 不留情的');

  W('merely', 'adverb', '/ˈmɪəli/', 'B2', ['CET4'], '仅仅；只不过', 'Only; just.', [
    ['仅仅；只不过', 'Only; just; nothing more than.', '只是、只不过。', '副词。', 'The change was merely cosmetic.', '这个改变只是表面的。', [], ['only'], 'adverb', 'null', '通用'],
  ], '', ['mere'], '←mere B2 + -ly（透明后缀），B2 继承（brief 根提示）；近义 only 仅仅');

  W('merger', 'noun', '/ˈmɜːdʒə/', 'C1', ['CET6'], '（公司）合并', 'The joining of two companies into one.', [
    ['（公司）合并', 'The joining of two companies into one.', '两家公司合为一家。', '可数。', 'The merger created a retail giant.', '这次合并造就了一家零售巨头。', ['company merger'], ['fusion', 'union'], 'noun', 'countable', '商务'],
  ], 'mergers', ['union'], '←merge C1 + -er（施事后缀），C1 继承（brief 根提示）；家族 union 合并、近义 fusion 融合');

  W('meridian', 'noun', '/məˈrɪdiən/', '', [], '子午线；经线', 'An imaginary line around the Earth.', [
    ['子午线；经线', 'An imaginary line used to measure position on Earth.', '测量地球位置的想象线。', '可数：the Greenwich meridian。', 'The Greenwich meridian divides east and west.', '格林尼治子午线划分东西半球。', [], ['longitude'], 'noun', 'countable', '地理'],
  ], 'meridians', [], '拉丁 meridianus（正午→中天线）——无库内派生根，故留空；近义 longitude 经度');

})(typeof window !== 'undefined' ? window : globalThis);
