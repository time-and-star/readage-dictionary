/* data/words/cet/author_n5.js — 常用词 N 收尾批，缺口 not either ~ nutritious，共 27 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（notable/notation/
 * noticeable/notification/nourishment/nutrient CET4 共 6 条）。
 * 本批 6 条短语：W(...) 返回后补 .phrase = true（连写可一次完成，check_phrase.js 比对）。
 * brief 误配两处须自行修正：notation/noted 提示 ←not（不），实为 note A2（notation e→ation
 * 同 modification 模式、noted + -ed、notepad 首成分 note、notes 复数）；naught 缺席故 nought 留空；
 * numeric←number 词干 numer- 继承（median←medium 模式）；null 留空连带 nullify 留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_n5.js 必须在 _cet_helper.js 之后加载');

  W('notable', 'adjective', '/ˈnəʊtəbl/', 'A2', ['CET4'], '值得注意的；显著的', 'Important, interesting or easy to notice.', [
    ['值得注意的；显著的', 'Important, interesting or easy to notice.', '重要、有趣或容易注意到的。', '多作定语。', 'She made notable progress this term.', '她这学期取得了显著进步。', ['notable achievement'], ['noteworthy', 'signal', 'significant'], 'adjective', '定语', '通用'],
  ], '',['noteworthy', 'note'], '←note A2 词干 not- + -able（词干可见语义直连），A2 继承；家族 noteworthy C1 值得注意的，近义 signal 显著的、significant 重要的');

  W('notably', 'adverb', '/ˈnəʊtəbli/', 'A2', [], '显著地；尤其', 'In a notable way, or in particular.', [
    ['显著地；尤其', 'In a notable way, or in particular.', '以显著的方式；特别是。', '副词。', 'The cost rose, notably in winter.', '成本上涨了，尤其在冬季。', [], ['especially'], 'adverb', 'null', '通用'],
  ], '',['notable'], '←notable A2 + -ly（透明后缀），A2 继承（根 note A2 同批）；近义 especially 尤其');

  W('notation', 'noun', '/nəʊˈteɪʃn/', 'A2', ['CET4'], '记号法；乐谱', 'A system of signs or symbols used to represent something, especially in music.', [
    ['记号法；乐谱', 'A system of signs or symbols used to represent something, especially in music.', '表示事物的符号系统，尤指音乐记谱。', '不可数，亦可数。', 'He studied the notation of plain chant.', '他研究了素歌的记谱法。', ['musical notation'], ['music'], 'noun', 'uncountable', '艺术'],
  ], '',['note'], 'brief 提示 ←not 为误配（not 不，语义无关）；实为 note A2 记号 + -ation（e→ation，同 modification 模式），A2 继承；近义 music 音乐');

  W('notch', 'noun', '/nɔːtʃ/', '', [], 'V形切口；等级', 'A V-shaped cut in a surface, or a level on a scale.', [
    ['V形切口；等级', 'A V-shaped cut in a surface, or a level on a scale.', '表面的 V 形缺口；也指刻度上的等级。', '可数。', 'He cut a notch in the wooden handle.', '他在木柄上切了个 V 形口。', ['cut a notch'], ['groove', 'score'], 'noun', 'countable', '工具'],
  ], 'notches', [], '古法语 noche（缺口），词源不确定，非 note 的透明派生，留空；近义 groove 凹槽、score 刻痕');

  W('noted', 'adjective', '/ˈnəʊtɪd/', 'A2', [], '著名的；知名的', 'Known and talked about by many people.', [
    ['著名的；知名的', 'Known and talked about by many people.', '为许多人所知、被人谈论的。', '多作定语，常与 for 连用。', 'She is noted for her patience.', '她以耐心著称。', ['be noted for'], ['well-known'], 'adjective', '定语', '通用'],
  ], '', ['well-known'], 'brief 提示 ←not 为误配；实为 note A2 + -ed（透明后缀，被记下而知名），A2 继承；家族/近义 well-known 众所周知的');

  W('notepad', 'noun', '/ˈnəʊtped/', 'A2', [], '便笺本；记事本', 'A small book of blank paper for writing notes.', [
    ['便笺本；记事本', 'A small book of blank paper for writing notes.', '供写字记录的空白小本。', '可数。', 'I kept a notepad beside the phone.', '我在电话旁放了本便笺。', [], ['pad'], 'noun', 'countable', '家居'],
  ], 'notepads', ['pad'], 'note A2 + pad 复合词，首成分 note 在库，A2 继承（minibus 模式）；家族/近义 pad 本子、册子');

  W('notes', 'noun', '/nəʊts/', 'A2', [], '笔记；乐谱', 'Written records of a talk or lesson, or music written on a page.', [
    ['笔记；乐谱', 'Written records of a talk or lesson, or music written on a page.', '讲课或课程的书面记录；也指印在纸上的乐谱。', '常用复数形式。', 'She showed me her notes from the lecture.', '她给我看了她的课堂笔记。', ['take notes'], ['minute', 'scale'], 'noun', 'countable', '教育'],
  ], '',['note'], '←note A2 的复数形式，A2 继承（brief 根提示）；近义 minute 纪要、scale 音阶');

  W('noticeable', 'adjective', '/ˈnəʊtɪsəbl/', 'A2', ['CET4'], '显而易见的', 'Easy to see or notice.', [
    ['显而易见的', 'Easy to see or notice.', '容易看见或注意到的。', '定语或表语。', 'There was a noticeable change in the weather.', '天气有了明显的变化。', ['noticeable difference'], ['conspicuous', 'prominent', 'visible'], 'adjective', '定语/表语', '通用'],
  ], '',['conspicuous', 'prominent', 'notice'], '←notice A2 + -able（透明后缀），A2 继承；家族 conspicuous 显眼的、prominent 突出的，近义 visible 可见的');

  W('notification', 'noun', '/ˌnəʊtɪfɪˈkeɪʃn/', 'B1', ['CET4'], '通知；告知', 'A written or spoken message that tells you about something.', [
    ['通知；告知', 'A written or spoken message that tells you about something.', '告知某事的书面或口头消息。', '可数或不可数。', 'You will receive a notification by email.', '你会收到一封电子邮件通知。', ['send a notification'], ['notice'], 'noun', 'countable', '商务'],
  ], '',['notify'], '←notify B1 + -ation（y→i 名词化），B1 继承；近义 notice 通知、布告');

  W('nought', 'noun', '/nɔːt/', '', [], '零', 'The number 0.', [
    ['零', 'The number 0.', '数字 0。', '可数，英式旧用法，现多写 zero。', 'The account number begins with a nought.', '账户号码以零开头。', ['leading nought'], ['nil', 'zero'], 'noun', 'countable', '通用'],
  ], 'noughts', ['zero'], '或为 naught 的异体拼写（au→ou），naught 不在库，无级可继，留空；家族 zero 零，近义 nil 零（比分）');

  W('nourishment', 'noun', '/ˈnʌrɪʃmənt/', 'B2', ['CET4'], '食物；滋养', 'Food that keeps you healthy, or the act of eating.', [
    ['食物；滋养', 'Food that keeps you healthy, or the act of eating.', '保持健康的食物；也指进食这件事。', '不可数。', 'The patient needs liquid nourishment.', '病人需要流质食物。', ['give nourishment'], ['food', 'nutrition'], 'noun', 'uncountable', '健康'],
  ], '',['food', 'nutrition', 'nourish'], '←nourish B2 + -ment（透明后缀），B2 继承（brief 根提示）；家族 food 食物、nutrition 营养，近义同');

  W('novice', 'noun', '/ˈnɒvɪs/', '', [], '新手；初学者', 'A person new to a job or activity with no experience.', [
    ['新手；初学者', 'A person new to a job or activity with no experience.', '刚入行或刚接触某活动、毫无经验的人。', '可数。', 'As a novice driver she was very careful.', '作为新手司机，她非常小心。', ['novice driver'], ['cub', 'freshman', 'initiate', 'youngster'], 'noun', 'countable', '教育'],
  ], 'novices', ['cub', 'freshman'], '拉丁 novicius（新的）——与 new/novel 同源但拼写不可见，无库内派生根，留空；家族 cub 幼崽、freshman 新生，近义 initiate 新入会者、youngster 年轻人');

  W('nuance', 'noun', '/ˈnjuːɒns/', '', [], '细微差别', 'A small difference in meaning, sound, color or feeling.', [
    ['细微差别', 'A small difference in meaning, sound, color or feeling.', '意义、声音、色彩或感觉上的细微差异。', '可数，正式用语。', 'The translation misses the nuances of the original.', '译文没有传达出原文的细微差别。', [], ['shade'], 'noun', 'countable', '书面'],
  ], 'nuances', [], '法语 nuer（色调微差），无库内派生根，留空；近义 shade 微妙差别');

  W('nudge', 'verb', '/nʌdʒ/', '', [], '轻推；劝说', 'To push somebody gently, or to persuade them to act.', [
    ['轻推；劝说', 'To push somebody gently, or to persuade them to act.', '轻轻推某人；也指劝服其行动。', '及物，常与 into 连用。', 'She nudged him to speak up.', '她轻轻碰了他一下，让他大声点。', ['nudge into'], ['shove'], 'verb', '及物', '社交'],
  ], 'nudges~nudged~nudged~nudging', [], '北欧语源（拟声），与 judge 形近但语义无关（切词假象），留空；近义 shove 猛推');

  W('null', 'noun/adjective', '/nʌl/', '', [], '空值；无效的', 'Having no value or legal force.', [
    ['空值；无效的', 'Having no value or legal force.', '无数值；也指无法律效力。', '名词与形容词两用，正式用语。', 'The contract was declared null.', '合同被宣布无效。', ['null and void'], ['invalid', 'void'], 'noun/adjective', 'null', '法律'],
  ], '', [], '拉丁 nullus（没有），无库内派生根，留空；近义 invalid 无效的、void 无效（法律用语）');

  W('nullify', 'verb', '/ˈnʌlɪfaɪ/', '', [], '使无效；抵消', 'To make something legally void, or to cancel the effect of.', [
    ['使无效；抵消', 'To make something legally void, or to cancel the effect of.', '使某物在法律上无效；也指抵消其效果。', '及物，正式用语。', 'The clause nullifies the whole agreement.', '该条款使整份协议无效。', [], ['negate'], 'verb', '及物', '法律'],
  ], 'nullifies~nullified~nullified~nullifying', [], 'null（本批留空）+ -ify（透明后缀），null 无级故连带留空；近义 negate 使无效');

  W('numeral', 'noun/adjective', '/ˈnjuːmərəl/', 'A1', [], '数字符号', 'A word or symbol used to express a number.', [
    ['数字符号', 'A word or symbol used to express a number.', '表示数字的词或符号。', '可数；亦作形容词（数字的）。', 'The numeral 7 can be written in one stroke.', '数字 7 一笔就能写成。', ['Roman numeral'], ['five', 'forty', 'four', 'fourteen', 'hundred'], 'noun/adjective', 'countable', '教育'],
  ], 'numerals',['hundred', 'number'], '←number A1 词干 numer-（b 脱落）+ -al，词核可见语义直连，A1 继承（median←medium 模式）；家族 hundred 一百，近义 five/forty/four/fourteen 数词');

  W('numeric', 'adjective', '/njuːˈmɪrɪk/', 'A1', [], '数字的；数值的', 'Having to do with numbers or a system of numbers.', [
    ['数字的；数值的', 'Having to do with numbers or a system of numbers.', '与数字或数字系统有关的。', '多作定语。', 'The code is purely numeric.', '这串代码纯为数字。', [], ['numerical'], 'adjective', '定语', '通用'],
  ], '',['number'], '←number A1 词干 numer-（b 脱落）+ -ic，A1 继承（median←medium 模式）；家族/近义 numerical B2 数值的');

  W('nun', 'noun', '/nʌn/', '', [], '修女', 'A woman who is a member of a religious community under vows.', [
    ['修女', 'A woman who is a member of a religious community under vows.', '立誓加入宗教团体的女子。', '可数。', 'The nun taught at the village school.', '修女在村里的学校教书。', [], ['sister'], 'noun', 'countable', '宗教'],
  ], 'nuns', ['sister'], '中古英语 nunne（源自拉丁 nonna），无库内派生根，留空；家族/近义 sister 修女（敬称）');

  W('nutrient', 'noun', '/ˈnjuːtriənt/', 'B1', ['CET4'], '营养物；养分', 'A substance that living things need to grow.', [
    ['营养物；养分', 'A substance that living things need to grow.', '生物生长所需的物质。', '可数。', 'Plants make their own nutrients from sunlight.', '植物利用阳光制造自身养分。', [], ['goodness', 'nitrogen', 'protein', 'vitamin'], 'noun', 'countable', '科学'],
  ], 'nutrients',['protein', 'vitamin', 'nutrition'], '←nutrition B1 + -ent（透明后缀，同 assistant 类），B1 继承；家族 protein 蛋白质、vitamin 维生素，近义 goodness 营养价值、nitrogen 氮');

  W('nutritious', 'adjective', '/njuːˈtrɪʃəs/', 'B1', [], '有营养的', 'Giving the body the substances it needs to stay healthy.', [
    ['有营养的', 'Giving the body the substances it needs to stay healthy.', '为身体提供所需健康物质的。', '多作定语。', 'A nutritious breakfast keeps you full longer.', '有营养的早餐让你更抗饿。', ['nutritious food'], ['wholesome'], 'adjective', '定语', '饮食'],
  ], '',['wholesome', 'nutrition'], '←nutrition B1 + -tious（t→tious 音变），B1 继承；家族/近义 wholesome 健康有益的');

  W('not either', 'adverb', '/nɒt ˈaɪðə(r)/', '', [], '也不（用于否定句末）', 'Used at the end of a negative sentence to mean also not.', [
    ['也不（用于否定句末）', 'Used at the end of a negative sentence to mean also not.', '用于否定句末，表示也不。', '副词，与 not 呼应。', 'I do not like this one either.', '我也不喜欢这个。', [], ['nor'], 'adverb', 'null', '语法'],
  ], '', [], 'not + either；近义 nor 也不。短语分级留空').phrase = true;

  W('not ever', 'adverb', '/nɒt ˈevə(r)/', '', [], '从不；任何时候都不', 'Never at any time.', [
    ['从不；任何时候都不', 'Never at any time.', '任何时候都不曾。', '强调否定，相当于 never。', 'I will not ever forget this day.', '我永远不会忘记这一天。', [], ['never'], 'adverb', 'null', '语法'],
  ], '', [], 'not + ever；近义 never 从不。短语分级留空').phrase = true;

  W('not much', 'determiner', '/nɒt ˈmʌtʃ/', '', [], '不多；很少', 'Not a large amount.', [
    ['不多；很少', 'Not a large amount.', '数量不大。', '修饰不可数名词，或单独使用。', 'There was not much left to say.', '没有多少可说的了。', [], ['little'], 'determiner', 'null', '语法'],
  ], '', [], 'not + much；近义 little 少。短语分级留空').phrase = true;

  W('not really', 'adverb', '/nɒt ˈrɪəli/', '', [], '不完全是；不太', 'Not to a great degree, or not quite.', [
    ['不完全是；不太', 'Not to a great degree, or not quite.', '程度不深；不完全如此。', '修饰动词或形容词，语气委婉。', 'She did not really enjoy the film.', '她并不太喜欢那部电影。', [], ['hardly'], 'adverb', 'null', '语法'],
  ], '', [], 'not + really；近义 hardly 几乎不。短语分级留空').phrase = true;

  W('not so', 'adverb', '/nɒt ˈsəʊ/', '', [], '不那么', 'Not to that degree.', [
    ['不那么', 'Not to that degree.', '没有到那种程度。', '后接形容词或副词，常与 as 连用。', 'Today is not so hot as yesterday.', '今天没有昨天那么热。', ['not so ... as'], ['less'], 'adverb', 'null', '语法'],
  ], '', [], 'not + so；近义 less 较少、不如。短语分级留空').phrase = true;

  W('now and then', 'adverb', '/ˈnaʊ ən ðen/', '', [], '偶尔；时常', 'Sometimes, but not often.', [
    ['偶尔；时常', 'Sometimes, but not often.', '有时，但不经常。', '频率状语，位于句首或句末。', 'We eat out now and then.', '我们偶尔下馆子。', [], ['sometimes'], 'adverb', 'null', '通用'],
  ], '', [], 'now + and + then；近义 sometimes 有时。短语分级留空').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
