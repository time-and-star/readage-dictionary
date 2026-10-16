/* data/words/cet/author_n3.js — 常用词 N 批次 3，缺口 negligence ~ non-military，共 31 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（negligence CET6、
 * nervous/networking/nightly/noisy CET4 共 5 条）。
 * 本批 5 条短语：W(...) 返回后补 .phrase = true（连写可一次完成，check_phrase.js 比对）。
 * 后缀政策沿用既定先例：-ous 继承（famous←fame B1 注明同 nervous 模式）、-hood 继承
 * （childhood A1）、序数 -th 继承（fourth←four A1）；non- 前缀不作成分（malfunction 模式）；
 * neuron 因 neur/nerv 拼写不对应、nicotine 为姓氏来源，均留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_n3.js 必须在 _cet_helper.js 之后加载');

  W('negligence', 'noun', '/ˈneɡlɪdʒəns/', 'B2', ['CET6'], '过失；玩忽职守', 'Failure to take proper care of something or of duties.', [
    ['过失；玩忽职守', 'Failure to take proper care of something or of duties.', '未尽到应有的注意义务；尤指职务上的疏忽。', '不可数，法律与职业用语。', 'The report blamed the accident on simple negligence.', '报告将事故归咎于单纯的疏忽。', ['gross negligence'], ['malpractice', 'neglect'], 'noun', 'uncountable', '法律'],
  ], '', ['malpractice'], '←neglect B2 动词的名形 t→ce（同 magnificence 模式）+ -ance，B2 继承；家族/近义 malpractice 渎职、neglect 疏忽');

  W('neighbourhood', 'noun', '/ˈneɪbəhʊd/', 'A2', [], '街区；社区', 'An area of a town, or the people who live in it.', [
    ['街区；社区', 'An area of a town, or the people who live in it.', '城镇的一个区域；也指住在该区的人。', '可数，英式拼写，美式作 neighborhood。', 'We moved into a quiet neighbourhood.', '我们搬进了一个安静的街区。', ['in the neighbourhood'], ['community', 'quarter', 'suburb', 'vicinity'], 'noun', 'countable', '社会'],
  ], 'neighbourhoods', ['community', 'vicinity'], 'neighbor A2 英式拼写 neighbour + -hood（透明后缀，同 childhood A1），A2 继承；家族 community 社区、vicinity 附近，近义 quarter 街区、suburb 郊区');

  W('neighbouring', 'adjective', '/ˈneɪbərɪŋ/', 'A2', [], '邻近的；相邻的', 'Next to or very near the place being talked about.', [
    ['邻近的；相邻的', 'Next to or very near the place being talked about.', '紧挨着所谈地方的。', '多作定语。', 'They crossed into the neighbouring country.', '他们越境进入了邻国。', ['neighbouring country'], ['adjacent', 'nearby'], 'adjective', '定语', '地理'],
  ], '',['neighbor'], 'neighbor A2 英式拼写 neighbour + -ing（透明后缀），A2 继承；近义 adjacent 相邻的、nearby 附近的');

  W('nervous', 'adjective', '/ˈnɜːvəs/', 'B2', ['CET4'], '紧张的；焦虑的', 'Worried and slightly afraid.', [
    ['紧张的；焦虑的', 'Worried and slightly afraid.', '担忧而有些害怕的。', '定语或表语，常与 about 连用。', 'I always feel nervous before exams.', '考试前我总是感到紧张。', ['nervous about'], ['tense'], 'adjective', '定语/表语', '心理'],
  ], '', ['tense'], '←nerve B2 神经 + -ous（透明后缀，同 famous←fame 模式），B2 继承；家族/近义 tense 紧张的');

  W('networking', 'noun', '/ˈnetwɜːkɪŋ/', 'B1', ['CET4'], '（人际）社交联络；联网', 'Building a group of contacts, or connecting computers and systems.', [
    ['（人际）社交联络；联网', 'Building a group of contacts, or connecting computers and systems.', '建立人际联系；也指计算机网络互联。', '社交义不可数。', 'She went to the conference for networking.', '她参加会议是为了拓展人脉。', ['business networking'], ['telecommunications'], 'noun', 'uncountable', '商务'],
  ], '',['network'], '←network B1 + -ing（透明后缀），B1 继承（brief 根提示）；近义 telecommunications 通信');

  W('neuron', 'noun', '/ˈnjʊərɒn/', '', [], '神经元', 'A cell that carries electrical signals in the brain and nerves.', [
    ['神经元', 'A cell that carries electrical signals in the brain and nerves.', '在大脑与神经中传递电信号的细胞。', '可数，科学术语。', 'Each neuron connects to thousands of others.', '每个神经元都与数千个其他神经元相连。', [], ['nerve'], 'noun', 'countable', '科学'],
  ], 'neurons', ['nerve'], '希腊语 neūron（神经）——与 nerve 同源但拼写 neur/nerv 不对应，无可见透明派生，留空；家族/近义 nerve 神经');

  W('nibble', 'verb', '/ˈnɪbl/', '', [], '小口咬；轻啃', 'To take small bites of something.', [
    ['小口咬；轻啃', 'To take small bites of something.', '一小口一小口地咬。', '多作不及物（nibble at），亦可及物。', 'The fish nibbled at the bait.', '鱼轻咬鱼饵。', ['nibble at'], ['snack'], 'verb', '不及物', '饮食'],
  ], 'nibbles~nibbled~nibbled~nibbling', [], '低地德语 nibbeln（啃），无库内派生根，留空；近义 snack 少量进食、零食');

  W('nicotine', 'noun', '/ˌnɪkəˈtiːn/', '', [], '尼古丁', 'A poisonous chemical in tobacco that makes people addicted to smoking.', [
    ['尼古丁', 'A poisonous chemical in tobacco that makes people addicted to smoking.', '烟草中使人上瘾的有毒化学物质。', '不可数。', 'The filter removes much of the nicotine.', '过滤嘴能滤掉大部分尼古丁。', ['nicotine patch'], ['tobacco'], 'noun', 'uncountable', '健康'],
  ], '', ['tobacco'], '来自法国人名 Jean Nicot（姓氏来源），无库内派生根，留空；家族/近义 tobacco 烟草');

  W('nightfall', 'noun', '/ˈnaɪtfɔːl/', 'A1', [], '黄昏；日暮', 'The time when it gets dark in the evening.', [
    ['黄昏；日暮', 'The time when it gets dark in the evening.', '傍晚天色变黑的时候。', '不可数。', 'The hikers returned at nightfall.', '徒步者在黄昏时回来了。', [], ['sunset'], 'noun', 'uncountable', '自然'],
  ], '', ['sunset'], 'night A1 + fall 复合词，首成分 night 在库，A1 继承（minibus 模式）；家族/近义 sunset 日落');

  W('nightgown', 'noun', '/ˈnaɪtɡaʊn/', 'A1', [], '睡裙', 'A long loose dress worn in bed by women and girls.', [
    ['睡裙', 'A long loose dress worn in bed by women and girls.', '女性睡觉时穿的宽松长裙。', '可数。', 'She bought a cotton nightgown.', '她买了一条棉睡裙。', [], ['gown'], 'noun', 'countable', '家居'],
  ], 'nightgowns',['night', 'gown'], 'night A1 + gown 复合词，首成分 night 在库，A1 继承（minibus 模式）；近义 gown 长袍');

  W('nightly', 'adverb/adjective', '/ˈnaɪtli/', 'A1', ['CET4'], '每夜（地）', 'Happening every night, or done at night.', [
    ['每夜（地）', 'Happening every night, or done at night.', '每晚发生的；在夜间进行的。', '形容词与副词两用。', 'The channel airs a nightly news show at ten.', '该频道每晚十点播出新闻节目。', ['nightly news'], ['midnight'], 'adverb/adjective', 'null', '媒体'],
  ], '',['night'], '←night A1 + -ly（透明后缀），A1 继承（brief 根提示）；近义 midnight 午夜');

  W('nighttime', 'noun', '/ˈnaɪtaɪm/', 'A1', [], '夜晚；夜间', 'The part of the day when it is dark.', [
    ['夜晚；夜间', 'The part of the day when it is dark.', '一天中天黑的时段。', '不可数。', 'Owls hunt at nighttime.', '猫头鹰在夜间捕猎。', [], ['night'], 'noun', 'uncountable', '自然'],
  ], '',['night', 'time'], 'night A1 + time 复合词，首成分 night 在库，A1 继承（minibus 模式）；近义 night 夜晚');

  W('nimble', 'adjective', '/ˈnɪmbl/', '', [], '敏捷的', 'Quick and light in movement or thought.', [
    ['敏捷的', 'Quick and light in movement or thought.', '动作或思维快速而灵活的。', '定语或表语。', 'Her nimble fingers flew over the keys.', '她灵巧的手指在琴键上飞舞。', ['nimble fingers'], ['fleet'], 'adjective', '定语/表语', '体育'],
  ], '', [], '日耳曼语源（nim 拿取），无库内可见派生根，留空；近义 fleet 快速的');

  W('niner', 'noun', '/ˈnaɪnə(r)/', 'A1', [], '九（口语读法）', 'An informal way of saying the number nine.', [
    ['九（口语读法）', 'An informal way of saying the number nine.', 'nine 的非正式说法，常见于无线电通信。', '可数，口语。', 'In radio talk nine is often said as niner.', '无线电通话中九常读作 niner。', [], ['nine'], 'noun', 'countable', '通用'],
  ], 'niners',['nine'], '←nine A1 + -er（透明后缀），A1 继承（brief 根提示）；近义 nine 九');

  W('nineteenth', 'number', '/ˌnaɪnˈtiːnθ/', 'A1', [], '第十九', 'The item in position 19 in a series.', [
    ['第十九', 'The item in position 19 in a series.', '序列中的第 19 个。', '序数词。', 'Her birthday is on the nineteenth of May.', '她的生日在五月十九日。', [], ['nineteen'], 'number', 'null', '通用'],
  ], '', ['nineteen'], '←nineteen A1 + -th（序数后缀，同 fourth←four A1），A1 继承（brief 需扫根）；家族/近义 nineteen 十九');

  W('nineties', 'noun', '/ˈnaɪntiz/', 'A1', [], '九十年代；九十多岁', 'The years ending in 90 to 99, or the age from 90 to 99.', [
    ['九十年代；九十多岁', 'The years ending in 90 to 99, or the age from 90 to 99.', '1990 至 1999 年；也指 90 至 99 岁的年龄段。', '常作 the nineties。', 'She is in her nineties.', '她九十多岁了。', ['in the nineties'], ['ninety'], 'noun', 'countable', '通用'],
  ], '',['ninety'], '←ninety A1 的复数形式，A1 继承（brief 根提示）；近义 ninety 九十');

  W('ninetieth', 'number', '/ˈnaɪntiəθ/', 'A1', [], '第九十', 'The item in position 90 in a series.', [
    ['第九十', 'The item in position 90 in a series.', '序列中的第 90 个。', '序数词。', 'The company celebrated its ninetieth year.', '这家公司庆祝了它的第九十个年头。', [], ['ninety'], 'number', 'null', '通用'],
  ], '', ['ninety'], '←ninety A1 + -th（y→ie 序数拼写，同 fourth 模式），A1 继承；家族/近义 ninety 九十');

  W('ninthly', 'adverb', '/ˈnaɪnθli/', 'A2', [], '第九（地）', 'Used to introduce the ninth point in a list.', [
    ['第九（地）', 'Used to introduce the ninth point in a list.', '引出列表中的第九点。', '序数连接副词。', 'Ninthly, we need to review the budget.', '第九，我们需要审查预算。', [], ['ninth'], 'adverb', 'null', '语法'],
  ], '',['ninth'], '←ninth A2 + -ly（透明后缀），A2 继承（brief 根提示）；近义 ninth 第九');

  W('nip', 'verb/noun', '/nɪp/', '', [], '掐；捏；轻咬', 'To pinch or bite quickly and sharply.', [
    ['掐；捏；轻咬', 'To pinch or bite quickly and sharply, or to give a sharp cold feeling.', '快速尖锐地掐、咬；也指刺骨寒冷。', '动词与名词两用，常与 off/at 连用。', 'He nipped the label off the jar.', '他把罐子上的标签掐了下来。', ['nip off'], ['peck', 'pinch', 'pop'], 'verb/noun', '及物', '通用'],
  ], 'nips~nipped~nipped~nipping', ['pinch'], '古英语 nipan（掐），无库内派生根，留空；家族 pinch 捏，近义 peck 啾、pop 啪地咬');

  W('nobleman', 'noun', '/ˈnəʊblmən/', 'B2', [], '贵族男士', 'A man who belongs to the nobility.', [
    ['贵族男士', 'A man who belongs to the nobility.', '出身贵族的男子。', '可数，复数 noblemen。', 'The nobleman hosted a grand ball.', '这位贵族举办了盛大的舞会。', [], ['gentleman'], 'noun', 'countable', '社会'],
  ], 'noblemen',['noble', 'man'], 'noble B2 + man 复合词，首成分 noble 在库，B2 继承（minibus 模式）；近义 gentleman 绅士');

  W('noblewoman', 'noun', '/ˈnəʊblwʊmən/', 'B2', [], '贵族女士', 'A woman who belongs to the nobility.', [
    ['贵族女士', 'A woman who belongs to the nobility.', '出身贵族的女子。', '可数，复数 noblewomen。', 'The noblewoman funded the new library.', '这位贵妇人资助修建了新图书馆。', [], ['lady'], 'noun', 'countable', '社会'],
  ], 'noblewomen',['noble', 'woman'], 'noble B2 + woman 复合词，首成分 noble 在库，B2 继承（minibus 模式）；近义 lady 女士、贵妇');

  W('noiseless', 'adjective', '/ˈnɔɪzləs/', 'A1', [], '无声的；寂静的', 'Making no sound at all.', [
    ['无声的；寂静的', 'Making no sound at all.', '完全不发出声音的。', '定语或表语。', 'The nurse walked in with noiseless steps.', '护士蹑手蹑脚地走了进来。', ['noiseless steps'], ['silent'], 'adjective', '定语/表语', '通用'],
  ], '',['noise'], '←noise A1 + -less（透明后缀），A1 继承；近义 silent 沉默的');

  W('noisy', 'adjective', '/ˈnɔɪzi/', 'A1', ['CET4'], '嘈杂的', 'Full of noise, or making a lot of noise.', [
    ['嘈杂的', 'Full of noise, or making a lot of noise.', '充满噪音的；发出很大声响的。', '定语或表语。', 'The classroom was noisy before the teacher arrived.', '老师到来之前教室里闹哄哄的。', ['noisy neighbours'], ['loud'], 'adjective', '定语/表语', '通用'],
  ], '',['loud', 'noise'], '←noise A1 + -y（透明后缀），A1 继承；家族/近义 loud 大声的');

  W('non-attendance', 'noun', '/ˌnɒn əˈtendəns/', 'B1', [], '不出席；缺勤', 'Failure to attend an event or work.', [
    ['不出席；缺勤', 'Failure to attend an event or work.', '未出席活动或未上班。', '不可数，正式用语。', 'Repeated non-attendance led to a warning.', '反复缺席引来了警告。', [], ['absence'], 'noun', 'uncountable', '教育'],
  ], '',['attendance'], 'non- 前缀不作成分，取 attendance B1（在库），B1 继承（malfunction 模式）；近义 absence 缺席');

  W('non-expert', 'noun/adjective', '/ˌnɒn ˈekspɜːt/', 'A2', [], '外行；非专家', 'A person who has no special knowledge of a subject.', [
    ['外行；非专家', 'A person who has no special knowledge of a subject.', '对某一主题没有专门知识的人。', '名词与形容词两用。', 'The guide is written for the non-expert.', '这份指南是为外行编写的。', [], ['layman'], 'noun/adjective', 'countable', '通用'],
  ], 'non-experts', ['layman'], 'non- 前缀不作成分，取 expert A2（在库），A2 继承（malfunction 模式）；家族/近义 layman 外行');

  W('non-military', 'adjective', '/ˌnɒn ˈmɪlɪtəri/', 'B2', [], '非军事的', 'Not connected with the armed forces.', [
    ['非军事的', 'Not connected with the armed forces.', '与武装力量无关的。', '多作定语。', 'The area is under non-military control.', '该地区处于非军事管制之下。', ['non-military control'], ['civilian'], 'adjective', '定语', '军事'],
  ], '',['military'], 'non- 前缀不作成分，取 military B2（在库），B2 继承（malfunction 模式）；近义 civilian 平民的');

  W('next to', 'preposition', '/ˈnekst tuː/', '', [], '紧挨着；在……旁边', 'Beside or immediately on the side of something.', [
    ['紧挨着；在……旁边', 'Beside or immediately on the side of something.', '紧挨着某物、就在其旁边。', '介词，后接名词。', 'The hotel is next to the station.', '这家旅馆就在车站旁边。', [], ['beside'], 'preposition', 'null', '语法'],
  ], '', [], 'next + to；近义 beside 在……旁边。短语分级留空').phrase = true;

  W('night person', 'noun', '/ˈnaɪt ˈpɜːsn/', '', [], '夜型人；夜里精神好的人', 'A person who feels more awake and active at night.', [
    ['夜型人；夜里精神好的人', 'A person who feels more awake and active at night.', '夜里更有精神、白天犯困的人。', '可数。', 'As a night person, he is never awake before noon.', '作为夜型人，他中午前从不醒来。', [], ['owl'], 'noun', 'countable', '心理'],
  ], '', [], 'night + person；近义 owl 猫头鹰（夜猫子）。短语分级留空').phrase = true;

  W('no matter', 'conjunction', '/ˈnəʊ ˈmætə/', '', [], '不管；无论', 'Used to say that something is true in spite of anything else.', [
    ['不管；无论', 'Used to say that something is true in spite of anything else.', '表示无论如何都成立。', '后接 what/how/whether 等引导的从句。', 'No matter what you say, I will not change my mind.', '无论你说什么，我都不会改变主意。', [], ['whether'], 'conjunction', 'null', '语法'],
  ], '', [], 'no + matter；近义 whether 是否、无论。短语分级留空').phrase = true;

  W('no matter how', 'conjunction', '/ˈnəʊ ˈmætə haʊ/', '', [], '不管多么', 'However much or however badly something happens.', [
    ['不管多么', 'However much or however badly something happens.', '表示程度再高也不影响结果。', '后接形容词或副词引导的从句。', 'No matter how hard he tried, he could not open the door.', '不管他怎么用力，都打不开那扇门。', [], ['however'], 'conjunction', 'null', '语法'],
  ], '', ['however'], 'no matter + how；家族/近义 however 无论如何。短语分级留空').phrase = true;

  W('no one', 'pronoun', '/ˈnəʊ wʌn/', '', [], '没有人', 'Not a single person.', [
    ['没有人', 'Not a single person.', '一个也没有。', '不定代词，谓语用单数。', 'No one came to the meeting.', '没有人来开会。', [], ['nobody'], 'pronoun', 'null', '语法'],
  ], '', ['nobody'], 'no + one；家族/近义 nobody 没有人。短语分级留空').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
