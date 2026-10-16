/* data/words/cet/author_n4.js — 常用词 N 批次 4，缺口 non-native ~ not deep，共 31 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（northeastern/
 * northern/northwestern CET4 共 3 条）。
 * 本批 3 条短语：W(...) 返回后补 .phrase = true（连写可一次完成，check_phrase.js 比对）。
 * 方位后缀按 e3 既定先例：-ern/-ward 不在可继承清单（eastern/eastward 均留空，downward B1
 * 并非继承），故 northeast 系 10 词全留空；non- 前缀不作成分取其后成分词级（malfunction 模式），
 * professional/religious/reader 成分词缺席故留空；nostril←nose 词干 nos- 语义直连继承。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_n4.js 必须在 _cet_helper.js 之后加载');

  W('non-native', 'adjective', '/ˌnɒn ˈneɪtɪv/', 'B1', [], '非本地的；非母语的', 'Not born or produced in the place, or not learned from birth.', [
    ['非本地的；非母语的', 'Not born or produced in the place, or not learned from birth.', '非本地出产的；非从小习得的。', '定语，常指语言或物种。', 'As a non-native speaker, she checked every idiom.', '作为非母语者，她查对了每个习语。', [], ['exotic'], 'adjective', '定语', '教育'],
  ], '', ['exotic'], 'non- 前缀不作成分，取 native B1（在库），B1 继承（malfunction 模式）；家族/近义 exotic 外来的、异国的');

  W('non-physical', 'adjective', '/ˌnɒn ˈfɪzɪkl/', 'B1', [], '非物质的；无形的', 'Not made of matter, or not bodily.', [
    ['非物质的；无形的', 'Not made of matter, or not bodily.', '非物质存在的；非身体的。', '定语。', 'Goodwill counts as a non-physical asset.', '商誉算作无形资产。', ['non-physical asset'], ['intangible'], 'adjective', '定语', '商务'],
  ], '',['physical'], 'non- 前缀不作成分，取 physical B1（在库），B1 继承（malfunction 模式）；近义 intangible 无形的');

  W('non-professional', 'noun/adjective', '/ˌnɒn prəˈfeʃənl/', '', [], '业余的；非专业人员', 'Not done as a job, or a person who is not a professional.', [
    ['业余的；非专业人员', 'Not done as a job, or a person who is not a professional.', '非职业性的；也指非专业人员。', '名词与形容词两用。', 'The club welcomes non-professional players as well.', '俱乐部也欢迎业余选手。', [], ['lay'], 'noun/adjective', 'countable', '体育'],
  ], 'non-professionals', [], 'non- 前缀不作成分，成分词 professional 不在库，无级可继，留空；近义 lay 外行的');

  W('non-religious', 'adjective', '/ˌnɒn rɪˈlɪdʒəs/', '', [], '非宗教的；世俗的', 'Not connected with religion.', [
    ['非宗教的；世俗的', 'Not connected with religion.', '与宗教无关的。', '多作定语。', 'The school follows a non-religious curriculum.', '学校采用非宗教的课程。', [], ['secular'], 'adjective', '定语', '宗教'],
  ], '', [], 'non- 前缀不作成分，成分词 religious 不在库，无级可继，留空；近义 secular 世俗的');

  W('non-state', 'adjective', '/ˌnɒn ˈsteɪt/', 'A2', [], '非国家的', 'Not belonging to or run by the state.', [
    ['非国家的', 'Not belonging to or run by the state.', '不属于国家或不由国家管理的。', '多作定语，正式用语。', 'Non-state actors took part in the talks.', '非国家行为体参加了会谈。', ['non-state actor'], ['private'], 'adjective', '定语', '政治'],
  ], '',['state'], 'non- 前缀不作成分，取 state A2（在库），A2 继承（malfunction 模式）；近义 private 私人的');

  W('non-stop', 'adverb/adjective', '/ˌnɒnˈstɒp/', 'A1', [], '不停的；直达的', 'Continuing without a pause, or with no breaks on the way.', [
    ['不停的；直达的', 'Continuing without a pause, or with no breaks on the way.', '不间断的；中途不停的。', '形容词与副词两用。', 'We flew non-stop to Berlin.', '我们直飞柏林。', ['non-stop flight'], ['through'], 'adverb/adjective', 'null', '交通'],
  ], '',['stop'], 'non- 前缀不作成分，取 stop A1（在库），A1 继承（malfunction 模式）；近义 through 直达地、穿过');

  W('nonconformist', 'noun/adjective', '/ˌnɒnkənˈfɔːmɪst/', '', [], '不守成规者；非国教徒', 'A person who does not follow the accepted rules, or a member of a Protestant church outside the Church of England.', [
    ['不守成规者；非国教徒', 'A person who does not follow the accepted rules, or a member of a Protestant church outside the Church of England.', '不遵循公认规矩的人；亦指英国非国教派教徒。', '名词与形容词两用。', 'She was a nonconformist who ignored fashion.', '她是个不在意时尚的特立独行者。', [], ['rebel'], 'noun/adjective', 'countable', '性格'],
  ], 'nonconformists', [], 'non- 前缀不作成分，conform 虽在库但自身缺级，conformist 连带无级可继，留空；近义 rebel 反叛者');

  W('nonentity', 'noun', '/ˌnɒn ˈentəti/', 'B2', [], '无足轻重的人', 'A person or thing with no importance, or something that does not really exist.', [
    ['无足轻重的人', 'A person or thing with no importance, or something that does not really exist.', '无足轻重的人或物；也指实际上不存在的东西。', '可数。', 'In that committee he was a mere nonentity.', '他在那个委员会里只是个小人物。', [], ['nobody'], 'noun', 'countable', '社会'],
  ], 'nonentities',['entity'], 'non- 前缀不作成分，取 entity B2（在库），B2 继承（malfunction 模式）；近义 nobody 没有谁、无足轻重者');

  W('nonpartisan', 'adjective', '/ˌnɒn ˈpɑːtɪzən/', 'C1', [], '无党派的；不偏不倚的', 'Not supporting one particular party or side.', [
    ['无党派的；不偏不倚的', 'Not supporting one particular party or side.', '不支持任何一方党派或阵营的。', '多作定语，正式用语。', 'The committee stays nonpartisan and advises both sides.', '委员会保持不偏不倚，为双方提供建议。', [], ['independent'], 'adjective', '定语', '政治'],
  ], '',['partisan'], 'non- 前缀不作成分，取 partisan C1（在库），C1 继承（malfunction 模式）；近义 independent 独立的');

  W('nonreader', 'noun', '/ˌnɒn ˈriːdə(r)/', '', [], '不阅读的人；不识字者', 'A person who does not read, or cannot read.', [
    ['不阅读的人；不识字者', 'A person who does not read, or cannot read.', '不读书的人；也指不识字的人。', '可数。', 'The program pairs readers with nonreaders.', '该项目把阅读者与不识字者结对。', [], ['illiterate'], 'noun', 'countable', '教育'],
  ], '', [], 'non- 前缀不作成分，成分词 reader 不在库（词根 read 虽在库但非直接成分词），无成分级可继，留空；近义 illiterate 不识字的');

  W('nonspecific', 'adjective', '/ˌnɒnspəˈsɪfɪk/', 'B1', [], '非特定的；不具体的', 'Not particular or exact.', [
    ['非特定的；不具体的', 'Not particular or exact.', '不具体或不精确的。', '多作定语，正式用语。', 'The doctor noted a nonspecific chest pain.', '医生记录了一处非特异性胸痛。', [], ['indefinite'], 'adjective', '定语', '健康'],
  ], '',['specific'], 'non- 前缀不作成分，取 specific B1（在库），B1 继承（malfunction 模式）；近义 indefinite 不明确的');

  W('noodles', 'noun', '/ˈnuːdlz/', 'A2', [], '面条', 'Long thin pieces made from flour, eaten with soup or sauce.', [
    ['面条', 'Long thin pieces made from flour, eaten with soup or sauce.', '面粉制成的细长条食物，常配汤或酱吃。', '常用复数形式。', 'We had noodles for lunch.', '我们午饭吃的面条。', ['instant noodles'], ['pasta', 'spaghetti'], 'noun', 'countable', '饮食'],
  ], '', ['pasta'], '←noodle A2 的复数形式，A2 继承（brief 根提示）；家族/近义 pasta 意面、spaghetti 意大利细面');

  W('nook', 'noun', '/nʊk/', '', [], '角落；隐蔽处', 'A small quiet corner of a room or place.', [
    ['角落；隐蔽处', 'A small quiet corner of a room or place.', '房间或地方的安静小角落。', '可数。', 'She read in a window nook.', '她在窗边的角落里看书。', ['reading nook'], ['corner'], 'noun', 'countable', '家居'],
  ], 'nooks', ['corner'], '古北欧语 noke（岬角），形含 look/book 但语义无关，切词假象，留空；家族/近义 corner 角落');

  W('noonday', 'noun/adjective', '/ˈnuːndeɪ/', 'A2', [], '正午（的）', 'The middle of the day, or happening at noon.', [
    ['正午（的）', 'The middle of the day, or happening at noon.', '一天的正午；正午发生的。', '名词与形容词两用，正式用语。', 'The heat was strongest at noonday.', '正午时分热气最盛。', [], ['noon'], 'noun/adjective', 'null', '通用'],
  ], '',['noon', 'day'], 'noon A2 + day 复合词，首成分 noon 在库，A2 继承（minibus 模式）；近义 noon 中午');

  W('noontime', 'noun', '/ˈnuːntaɪm/', 'A2', [], '正午时分', 'The time of noon.', [
    ['正午时分', 'The time of noon.', '中午的时间。', '不可数。', 'We meet at noontime.', '我们正午时见。', [], ['midday'], 'noun', 'uncountable', '通用'],
  ], '',['noon', 'time'], 'noon A2 + time 复合词，首成分 noon 在库，A2 继承（minibus 模式）；近义 midday 正午');

  W('nope', 'adverb', '/nəʊp/', 'A1', [], '不；不行', 'A casual way of saying no.', [
    ['不；不行', 'A casual way of saying no.', 'no 的随意说法。', '口语感叹用语。', 'She said nope and closed the door.', '她说了声不，然后关上了门。', [], ['no'], 'adverb', 'null', '口语'],
  ], '',['no'], '←no A1 的语气延长变体（nope），词形含 no 语义直连，A1 继承；近义 no 不、拒绝');

  W('northeastern', 'adjective', '/ˌnɔːθiːˈstiːn/', '', ['CET4'], '东北的', 'In or from the northeast part of a place.', [
    ['东北的', 'In or from the northeast part of a place.', '某地东北部的；来自东北的。', '多作定语。', 'The northeastern provinces export timber.', '东北各省出口木材。', ['northeastern region'], ['northeast'], 'adjective', '定语', '地理'],
  ], '', ['northeast'], 'northeast A2 + -ern（后缀不在可继承清单，同 eastern 留空先例），留空；家族/近义 northeast 东北');

  W('northeastward', 'adverb/adjective', '/ˌnɔːθiːˈstwəd/', '', [], '向东北的（地）', 'Towards the northeast.', [
    ['向东北的（地）', 'Towards the northeast.', '朝向东北方向的。', '形容词与副词两用，亦作 northeastwards。', 'The road turns northeastward here.', '道路在这里转向东北。', [], ['northeast'], 'adverb/adjective', 'null', '地理'],
  ], '', [], 'northeast A2 + -ward（后缀不在可继承清单，同 eastward 留空先例），留空；近义 northeast 东北');

  W('northeastwards', 'adverb', '/ˌnɔːθiːˈstwədz/', '', [], '向东北（地）', 'Towards the northeast.', [
    ['向东北（地）', 'Towards the northeast.', '朝向东北方向。', '副词，英式亦作 northeastward。', 'They travelled northeastwards along the coast.', '他们沿海岸向东北行进。', [], ['northeast'], 'adverb', 'null', '地理'],
  ], '', [], 'northeastward 的 -s 形式；-ward 后缀不可继承，留空；近义 northeast 东北');

  W('northerly', 'adverb/adjective', '/ˈnɔːðəli/', '', [], '（风）向北的；向北的', 'Coming from or towards the north.', [
    ['（风）向北的；向北的', 'Coming from or towards the north.', '来自北方或朝向北方的。', '常形容风向，形容词与副词两用。', 'A cold northerly wind blew in.', '刮起了寒冷的北风。', ['northerly wind'], ['north', 'northeast', 'northwest'], 'adverb/adjective', 'null', '自然'],
  ], '', [], 'north A1 + -erly（后缀不在可继承清单，库内无 easterly 先例），留空；近义 north 北、northeast 东北、northwest 西北');

  W('northern', 'adjective', '/ˈnɔːðən/', '', ['CET4'], '北方的；北部的', 'In or from the north part of a place.', [
    ['北方的；北部的', 'In or from the north part of a place.', '某地北部的；来自北方的。', '多作定语。', 'The northern rail line is closed.', '北方的铁路线停运了。', ['northern hemisphere'], ['north'], 'adjective', '定语', '地理'],
  ], '', ['north'], 'north A1 + -ern（后缀不在可继承清单，同 eastern 留空先例），留空；家族/近义 north 北方');

  W('northward', 'adverb/adjective', '/ˈnɔːθwəd/', '', [], '向北的（地）', 'Towards the north.', [
    ['向北的（地）', 'Towards the north.', '朝向北方的。', '形容词与副词两用，亦作 northwards。', 'The birds fly northward each autumn.', '鸟群每年秋天向北飞。', [], ['north'], 'adverb/adjective', 'null', '地理'],
  ], '', ['north'], 'north A1 + -ward（后缀不在可继承清单，同 eastward 留空先例），留空；家族/近义 north 北方');

  W('northwards', 'adverb', '/ˈnɔːθwədz/', '', [], '向北（地）', 'Towards the north.', [
    ['向北（地）', 'Towards the north.', '朝向北方。', '副词，英式常用。', 'The road runs northwards to the lake.', '道路向北通往湖边。', [], ['north'], 'adverb', 'null', '地理'],
  ], '', [], 'northward 的 -s 形式；-ward 后缀不可继承，留空；近义 north 北方');

  W('northwestern', 'adjective', '/ˌnɔːθwiːˈstiːn/', '', ['CET4'], '西北的', 'In or from the northwest part of a place.', [
    ['西北的', 'In or from the northwest part of a place.', '某地西北部的。', '多作定语。', 'Northwestern Australia is sparsely populated.', '澳大利亚西北部人口稀少。', ['northwestern region'], ['northwest'], 'adjective', '定语', '地理'],
  ], '', ['northwest'], 'northwest A2 + -ern（后缀不在可继承清单，同 eastern 留空先例），留空；家族/近义 northwest 西北');

  W('northwestward', 'adverb/adjective', '/ˌnɔːθwiːˈstwəd/', '', [], '向西北的（地）', 'Towards the northwest.', [
    ['向西北的（地）', 'Towards the northwest.', '朝向西北方向的。', '形容词与副词两用，亦作 northwestwards。', 'The valley opens northwestward.', '山谷向西北敞开。', [], ['northwest'], 'adverb/adjective', 'null', '地理'],
  ], '', [], 'northwest A2 + -ward（后缀不在可继承清单，同 eastward 留空先例），留空；近义 northwest 西北');

  W('northwestwards', 'adverb', '/ˌnɔːθwiːˈstwədz/', '', [], '向西北（地）', 'Towards the northwest.', [
    ['向西北（地）', 'Towards the northwest.', '朝向西北方向。', '副词，英式亦作 northwestward。', 'They sailed northwestwards into the bay.', '他们向西北航行进入海湾。', [], ['northwest'], 'adverb', 'null', '地理'],
  ], '', [], 'northwestward 的 -s 形式；-ward 后缀不可继承，留空；近义 northwest 西北');

  W('nostalgic', 'adjective', '/nɒˈstældʒɪk/', '', [], '怀旧的', 'Having a sad desire to return to the past.', [
    ['怀旧的', 'Having a sad desire to return to the past.', '对过去感到怅然怀念的。', '定语或表语，常与 about/for 连用。', 'He grew nostalgic about his hometown.', '他渐渐怀念起家乡。', ['nostalgic about'], ['reminiscent'], 'adjective', '定语/表语', '心理'],
  ], '', [], '词根 nostalgia 不在库，无级可继，留空；近义 reminiscent 令人联想的、怀旧的');

  W('nostril', 'noun', '/ˈnɒstrəl/', 'A1', [], '鼻孔', 'Either of the two openings in the nose that you breathe through.', [
    ['鼻孔', 'Either of the two openings in the nose that you breathe through.', '鼻子上供呼吸的两个孔。', '可数。', 'The horse breathed through its nostrils.', '马用鼻孔呼吸。', ['flared nostrils'], ['nose'], 'noun', 'countable', '健康'],
  ], 'nostrils', ['nose'], '←nose A1 词干 nos-（e 脱落）+ -tril（孔），词核可见语义直连，A1 继承（mathematical←math 模式）；家族/近义 nose 鼻子');

  W('not any', 'determiner', '/nɒt ˈeni/', '', [], '一点也没有', 'Used to say that there is none of something.', [
    ['一点也没有', 'Used to say that there is none of something.', '表示某物一点都没有。', '用于否定句：not any + 名词。', 'There is not any milk left.', '一点牛奶都不剩了。', [], ['no'], 'determiner', 'null', '语法'],
  ], '', [], 'not + any；近义 no 没有。短语分级留空').phrase = true;

  W('not anywhere', 'adverb', '/nɒt ˈeniweɪ/', '', [], '任何地方都不', 'Not in any place.', [
    ['任何地方都不', 'Not in any place.', '任何地方都没有。', '用于否定句。', 'The keys are not anywhere in the room.', '钥匙在房间里哪儿都找不着。', [], ['nowhere'], 'adverb', 'null', '语法'],
  ], '', ['nowhere'], 'not + anywhere；家族/近义 nowhere 任何地方都不。短语分级留空').phrase = true;

  W('not deep', 'adjective', '/nɒt ˈdiːp/', '', [], '不深的', 'Not going far down from the surface.', [
    ['不深的', 'Not going far down from the surface.', '从表面往下不远的。', '形容词的否定结构。', 'The river is not deep here.', '这条河在这里不深。', [], ['shallow'], 'adjective', 'null', '通用'],
  ], '', [], 'not + deep；近义 shallow 浅的。短语分级留空').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
