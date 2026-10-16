/* data/words/cet/author_m7.js · 手敲词条 M（四·引用缺口批）：meriting ~ miscarriage（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批 7 条考级标签）。
 * 短语 2 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级、mis-/mini-/micro- 前缀不作成分，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_m7.js 必须在 _cet_helper.js 之后加载');

  W('meriting', 'adjective', '/ˈmerɪtɪŋ/', 'B2', [], '值得的', 'Deserving to be considered.', [
    ['值得的', 'Deserving to be considered or done.', '值得考虑或做的。', '定语，正式用语，常后接名词。', 'The report lists several issues meriting review.', '这份报告列出数个值得审查的问题。', [], ['worthy'], 'adjective', '定语', '书面'],
  ], '', ['merit'], '←merit B2 + -ing（透明后缀），B2 继承（brief 根提示）；近义 worthy 值得的');

  W('mesh', 'noun/verb', '/meʃ/', '', [], '网眼；啮合', 'Wire woven together, or to fit together.', [
    ['网眼；啮合', 'Wire woven together, or to fit together like gears.', '网眼织物；也指像齿轮般咬合。', '名词与动词两用。', 'The gears failed to mesh.', '齿轮没能咬合。', [], ['grid', 'net', 'web'], 'noun/verb', 'null', '工业'],
  ], 'meshes~meshed~meshed~meshing', ['grid', 'net'], '无库内派生根，故留空；家族 grid 网格、net 网，近义 web 蜘蛛网');

  W('messenger', 'noun', '/ˈmesɪndʒə/', 'A1', ['CET4'], '信使；传信人', 'A person who carries a message.', [
    ['信使；传信人', 'A person who carries a message.', '传递信息的人。', '可数。', 'A messenger delivered the sealed letter.', '信使送来了那封密函。', [], ['herald'], 'noun', 'countable', '职业'],
  ], 'messengers', ['message'], '←message A1（词干 mess-，a→e + n 音变 + -er 施事），家族确定、语义直连，A1 继承；近义 herald 传令官');

  W('metallic', 'adjective', '/mɪˈtælɪkl/', 'A2', ['CET4'], '金属的；金属光泽的', 'Made of or looking like metal.', [
    ['金属的；金属光泽的', 'Made of or looking like metal.', '金属制的；或像金属的。', '定语。', 'The pot has a metallic shine.', '锅泛着金属光泽。', [], ['metal'], 'adjective', '定语', '通用'],
  ], '', ['metal'], '←metal A2 + -ic（透明后缀），A2 继承；近义 metal 金属');

  W('metric', 'adjective', '/ˈmetrɪk/', 'A2', ['CET4'], '米制的；度量的', 'Using the metre as the base unit.', [
    ['米制的；度量的', 'Using the metre as the base unit of measurement.', '以米为基本计量单位的。', '定语：the metric system。', 'Britain switched to metric measures.', '英国改用了公制计量。', ['metric system'], ['decimal'], 'adjective', '定语', '科学'],
  ], '', ['meter'], '←meter A2 词干 metr- + -ic（米制源自米，语义直连），A2 继承；近义 decimal 十进制的');

  W('mic', 'noun', '/maɪk/', 'A2', [], '麦克风', 'A microphone.', [
    ['麦克风', 'A microphone.', 'microphone 的简称。', '可数。', 'She spoke into the mic.', '她对着麦克风讲话。', [], ['microphone'], 'noun', 'countable', '媒体'],
  ], 'mics', ['microphone'], '←microphone A2 缩略（microphone 可见前段 mic），A2 继承；家族/近义 microphone 麦克风');

  W('microchip', 'noun', '/ˈmaɪkrəʊtʃɪp/', 'B1', [], '微芯片', 'A very small electronic circuit.', [
    ['微芯片', 'A very small electronic circuit.', '极小的电子电路。', '可数。', 'The microchip controls the engine.', '微芯片控制引擎运转。', [], ['chip'], 'noun', 'countable', '科学'],
  ], 'microchips', ['chip'], 'micro- 前缀不作成分，词根 chip B1 在库，B1 继承（同 malfunction 模式）；近义 chip 芯片');

  W('mid', 'adjective', '/mɪd/', 'A2', [], '中间的', 'In the middle of a period or place.', [
    ['中间的', 'In the middle of a period or place.', '时期或地点中间的。', '定语，常接时间：mid June。', 'The event was held in mid winter.', '活动在隆冬举行。', [], ['middle'], 'adjective', '定语', '通用'],
  ], '', ['middle'], 'mid 为 middle 的词干（middle = mid + dle），词核可见、语义直连，A2 继承；近义 middle 中间的');

  W('middle ages', 'noun', '/ˌmɪdl ˈeɪdʒɪz/', '', [], '中世纪', 'The period in European history.', [
    ['中世纪', 'The period in European history from about 500 to 1500.', '欧洲史上约 500 至 1500 年间。', '常与 the 连用。', 'The castle dates from the middle ages.', '这座城堡可追溯到中世纪。', [], ['medieval'], 'noun', 'uncountable', '历史'],
  ], '', ['medieval'], 'middle + ages；家族/近义 medieval 中世纪的。短语分级留空').phrase = true;

  W('midget', 'noun/adjective', '/ˈmɪdʒɪt/', '', [], '矮小的人；矮小的', 'A very small person or thing.', [
    ['矮小的人；矮小的', 'A very small person, or very small in size.', '个子极小的人；极小的。', '名词与形容词两用，含冒犯色彩，慎用。', 'The role was played by a midget.', '这个角色由一位矮个演员扮演。', [], ['dwarf'], 'noun/adjective', 'null', '健康'],
  ], 'midgets', ['dwarf'], '源自 midge（小蠓）+ -et，形含 mid 但与 middle 词干无关，切词假象，故留空；家族/近义 dwarf 侏儒');

  W('midriff', 'noun', '/ˈmɪdrɪf/', 'A2', [], '腹部；横膈膜', 'The middle part of the body.', [
    ['腹部；横膈膜', 'The middle part of the body around the waist.', '腰部一带的身体中段。', '可数。', 'The boxer took a hit to the midriff.', '拳击手腹部挨了一拳。', [], ['middle', 'waist'], 'noun', 'countable', '健康'],
  ], 'midriffs', ['middle'], 'mid + riff——首成分 mid（本批，←middle 词核 A2），A2 继承（首成分规则）；近义 waist 腰部、middle 中部');

  W('midway', 'adjective/adverb', '/ˌmɪdˈweɪ/', 'A2', [], '中间的；在中途', 'In the middle of a distance or period.', [
    ['中间的；在中途', 'In the middle of a distance or period.', '在距离或时间的中点。', '形容词与副词两用。', 'The village sits midway between two rivers.', '村庄位于两条河之间。', [], ['halfway'], 'adjective/adverb', 'null', '地理'],
  ], '', ['halfway'], 'mid + way——首成分 mid（本批，←middle 词核 A2），A2 继承（首成分规则）；家族/近义 halfway 一半路途的');

  W('midweek', 'noun/adverb', '/ˌmɪdˈwiːk/', 'A2', [], '周中；一周的中间', 'The middle of the week.', [
    ['周中；一周的中间', 'The middle part of the week.', '一周的中间几天。', '名词与副词两用。', 'The match is scheduled for midweek.', '比赛安排在周中。', [], ['Wednesday'], 'noun/adverb', 'null', '通用'],
  ], '', ['Wednesday'], 'mid + week——首成分 mid（本批，←middle 词核 A2），A2 继承（首成分规则）；家族/近义 Wednesday 星期三');

  W('migraine', 'noun', '/ˈmiːɡreɪn/', '', [], '偏头痛', 'A severe headache on one side.', [
    ['偏头痛', 'A severe headache on one side of the head.', '头部一侧的剧痛。', '可数。', 'A migraine can last for days.', '偏头痛可持续数日。', [], ['headache'], 'noun', 'countable', '健康'],
  ], 'migraines', ['headache'], '希腊 hemikrania（半颅）经法语——无库内派生根，故留空；家族/近义 headache 头痛');

  W('mike', 'noun', '/maɪk/', 'A2', [], '麦克风', 'A microphone.', [
    ['麦克风', 'A microphone.', 'microphone 的简称。', '可数。', 'He passed the mike to the next speaker.', '他把麦克风递给下一位发言人。', [], ['microphone'], 'noun', 'countable', '媒体'],
  ], 'mikes', ['microphone'], '←microphone A2 缩略（变体拼 mic），A2 继承；近义 microphone 麦克风');

  W('mildew', 'noun', '/ˈmɪldjuː/', '', [], '霉；霉斑', 'A fungus that grows in damp places.', [
    ['霉；霉斑', 'A white or grey fungus that grows in damp places.', '潮湿处生长的白灰色霉菌。', '不可数。', 'Mildew grew on the bathroom ceiling.', '浴室天花板上长了霉。', [], ['mold'], 'noun', 'uncountable', '家居'],
  ], '', [], '词源古英语 mildeaw（蜜露），形含 mild（温和）但语义无关，切词假象，故留空；近义 mold 霉菌');

  W('milk products', 'noun', '/ˌmɪlk ˈprɒdʌkts/', '', [], '乳制品', 'Products made from milk.', [
    ['乳制品', 'Products made from milk.', '用牛奶制成的产品。', '不可数。', 'People who avoid milk products need calcium.', '不吃乳制品的人需要补钙。', [], ['dairy'], 'noun', 'uncountable', '饮食'],
  ], '', [], 'milk + products；近义 dairy 乳制品的、乳品。短语分级留空').phrase = true;

  W('milled', 'adjective', '/mɪld/', 'B1', [], '磨过的', 'Ground or shaped by a mill.', [
    ['磨过的', 'Ground or shaped by a mill.', '经磨床加工过的。', '定语。', 'The recipe uses milled flour.', '这个配方用的是磨过的面粉。', [], ['ground'], 'adjective', '定语', '饮食'],
  ], '', ['mill'], '←mill B1 + -ed（透明后缀），B1 继承（brief 根提示）；近义 ground 磨碎的');

  W('mime', 'noun/verb', '/maɪm/', '', [], '哑剧；默演', 'A performance using face and body only.', [
    ['哑剧；默演', 'A performance using face and body only, or to act without words.', '用表情动作表演；也指默演。', '名词与动词两用。', 'She did a brilliant mime of the angry coach.', '她惟妙惟肖地默演了愤怒的教练。', [], ['mouth'], 'noun/verb', 'null', '娱乐'],
  ], 'mimes~mimed~mimed~miming', [], '希腊 mimos——无库内派生根，故留空；近义 mouth 嘴（哑剧以口型传意）');

  W('mimic', 'verb', '/ˈmɪmɪk/', '', [], '模仿', 'To copy the way someone speaks.', [
    ['模仿', 'To copy the way someone speaks or behaves.', '模仿某人的说话或举止。', '及物。', 'He can mimic every voice on the show.', '他能模仿节目里的每一种声音。', [], ['imitate'], 'verb', '及物', '通用'],
  ], 'mimics~mimicked~mimicked~mimicking', ['imitate'], '希腊 mimos——无库内派生根，故留空；家族/近义 imitate 模仿');

  W('mince', 'verb', '/mɪns/', '', [], '切碎（肉）', 'To cut food into very small pieces.', [
    ['切碎（肉）', 'To cut food, especially meat, into very small pieces.', '把食物（尤指肉）切碎。', '及物，烹饪用语。', 'Mince the onion finely.', '把洋葱细细切碎。', [], ['chop', 'hamburger'], 'verb', '及物', '饮食'],
  ], 'minces~minced~minced~mincing', ['chop'], '古法语 mincier——无库内派生根，故留空；家族 chop 切，近义 hamburger 汉堡（用碎肉）');

  W('mineral', 'noun/adjective', '/ˈmɪnərəl/', 'A2', ['CET4'], '矿物；矿物质的', 'A natural substance from the ground.', [
    ['矿物；矿物质的', 'A natural substance from the ground; made of or containing such substances.', '地下的天然物质；矿物的、含矿物质的。', '名词与形容词两用。', 'The region is rich in minerals.', '这个地区矿物资源丰富。', ['mineral water'], ['crystal', 'fossil', 'ore'], 'noun/adjective', 'null', '自然'],
  ], 'minerals', ['mine', 'crystal', 'ore'], '←mine A2（矿）词干 min- + -eral（-al 变体），语义直连，A2 继承；家族 crystal 晶体、ore 矿石，近义 fossil 化石');

  W('minibus', 'noun', '/ˈmɪnɪbʌs/', 'A1', [], '小型巴士', 'A bus for a small number of people.', [
    ['小型巴士', 'A bus for a small number of people.', '载少量乘客的小型巴士。', '可数。', 'The minibus took the team to the match.', '小巴把球队送到了比赛现场。', [], ['van'], 'noun', 'countable', '交通'],
  ], 'minibuses', ['bus'], 'mini- 前缀不作成分，词根 bus A1 在库，A1 继承（同 malfunction 模式）；近义 van 面包车');

  W('minicab', 'noun', '/ˈmɪnɪkæb/', '', [], '小型出租车', 'A booked taxi for a small fare.', [
    ['小型出租车', 'A booked taxi for a small fare.', '预约的小型出租车。', '可数，英式用语。', 'They booked a minicab to the airport.', '他们预约了小出租车去机场。', [], ['taxi'], 'noun', 'countable', '交通'],
  ], 'minicabs', ['cab'], 'mini- 前缀不作成分，词根 cab 在库；近义 taxi 出租车');

  W('minimal', 'adjective', '/ˈmɪnɪməl/', 'B1', ['CET4'], '最小的；极小的', 'As small as possible; very slight.', [
    ['最小的；极小的', 'As small as possible; very slight.', '尽可能小的、微乎其微的。', '定语或表语。', 'The damage was minimal.', '损失微乎其微。', ['minimal risk'], ['nominal'], 'adjective', '定语/表语', '通用'],
  ], '', ['minimum'], '←minimum B1 词干 minim- + -al（um→al，语义直连：最小的），B1 继承；近义 nominal 名义上的');

  W('minimally', 'adverb', '/ˈmɪnɪməli/', 'B1', [], '最小程度地', 'To the smallest degree.', [
    ['最小程度地', 'To the smallest degree or extent.', '以最小的程度。', '副词：minimally invasive。', 'The surgery is minimally invasive.', '这种手术是微创的。', ['minimally invasive'], ['least'], 'adverb', 'null', '健康'],
  ], '', ['minimal', 'minimum'], '←minimal B1（←minimum 词干）+ -ly（透明后缀），B1 继承；近义 least 最少地');

  W('ministry', 'noun', '/ˈmɪnɪstri/', 'B2', ['CET4'], '（政府）部', 'A government department.', [
    ['（政府）部', 'A government department and its ministers.', '政府部门及其部长班子。', '可数。', 'The ministry issued a new rule.', '该部发布了一项新规。', [], ['mission'], 'noun', 'countable', '政治'],
  ], 'ministries', ['minister'], '←minister B2 词干 minist- + -ry（机构后缀），B2 继承；近义 mission 使团');

  W('minority', 'noun', '/maɪˈnɒrəti/', 'B2', ['CET4'], '少数；少数群体', 'A group smaller than the others.', [
    ['少数；少数群体', 'A group smaller than the others, or the smaller number.', '人数较少的一方；也指少数族群。', '可数。', 'The law protects minority rights.', '法律保护少数群体的权利。', ['ethnic minority'], ['ethnic'], 'noun', 'countable', '社会'],
  ], 'minorities', ['minor'], '←minor B2 + -ity（透明后缀），B2 继承（brief 根提示）；近义 ethnic 族群的（少数族裔）');

  W('mirage', 'noun', '/mɪˈrɑːʒ/', '', [], '海市蜃楼', 'An image in hot air that is not real.', [
    ['海市蜃楼', 'An image seen in hot air that is not really there.', '热空气中出现的幻象。', '可数。', 'The lake was only a mirage.', '那片湖只是海市蜃楼。', [], ['illusion'], 'noun', 'countable', '自然'],
  ], 'mirages', [], '法语 mirer（映照）——无库内派生根，故留空；近义 illusion 幻象');

  W('misappropriate', 'verb', '/ˌmɪsəˈprəʊpriət/', 'B2', [], '贪污；挪用', 'To steal money you are trusted with.', [
    ['贪污；挪用', 'To steal or wrongly use money that you are trusted with.', '盗用受托的钱款。', '及物，正式用语。', 'The manager misappropriated the funds.', '经理盗用了那笔资金。', [], ['appropriate'], 'verb', '及物', '法律'],
  ], 'misappropriates~misappropriated~misappropriated~misappropriating', ['appropriate'], 'mis- 前缀不作成分，词根 appropriate B2 在库，B2 继承（同 malfunction 模式）；近义 appropriate 擅自占用');

  W('miscarriage', 'noun', '/ˌmɪskærɪdʒ/', '', [], '流产；失败', 'A baby born too early to live.', [
    ['流产；失败', 'A baby born too early to live, or a plan that fails.', '胎儿过早未能存活；也指计划失败。', '可数。', 'She suffered a miscarriage at twelve weeks.', '她在孕十二周时流产。', [], ['abortion'], 'noun', 'countable', '健康'],
  ], 'miscarriages', [], 'mis- 前缀不作成分，词根 carriage 在库但等级留空，无级可继，故留空；近义 abortion 堕胎');

})(typeof window !== 'undefined' ? window : globalThis);
