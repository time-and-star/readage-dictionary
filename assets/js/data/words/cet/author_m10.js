/* data/words/cet/author_m10.js — 常用词 M（收尾批），缺口 move forward ~ mythical，共 22 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（共 5 条 CET4）。
 * 本批 4 条短语：W(...) 返回后补 .phrase = true（连写可一次完成，check_phrase.js 比对）。
 * 派生无可靠 CEFR 留空：multiply 词根 ply 缺席、muffled 词根 muffle 缺席、
 * muffle/ply/漫画类切词假象（muster←must 为词干表误配、muggy 形含 mug 语义无关）留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_m10.js 必须在 _cet_helper.js 之后加载');

  W('move forward', 'verb', '/ˌmuːv ˈfɔːwəd/', '', [], '前进；推进', 'To go forward or make progress.', [
    ['前进；推进', 'To go forward or make progress.', '向前行进或取得进展。', '不及物短语，将宾语夹在中间时亦可及物。', 'The talks moved forward slowly.', '谈判缓慢推进。', ['move forward with'], ['advance'], 'verb', '不及物', '通用'],
  ], '', [], 'move + forward；近义 advance 前进、推进。短语分级留空').phrase = true;

  W('movement', 'noun', '/ˈmuːvmənt/', 'A1', ['CET4'], '运动；移动；运动团体', 'The act of moving, or a group working for a shared aim.', [
    ['运动；移动', 'The act of moving, or a group organized for a shared aim.', '移动的行为；也指有共同目标的团体。', '可数或不可数。', 'The movement of the clouds was slow.', '云的移动很缓慢。', ['freedom of movement'], ['cause', 'motion', 'progress', 'school', 'traffic'], 'noun', 'countable', '通用'],
  ], 'movements', ['motion'], '←move A1 + -ment（透明后缀），A1 继承（brief 根提示）；家族 motion 运动，近义 cause 事业、progress 进步、school 学派、traffic 车流');

  W('movie theater', 'noun', '/ˈmuːvi ˈθɪətə/', '', [], '电影院', 'A building where films are shown to the public.', [
    ['电影院', 'A building where films are shown to the public.', '放映电影供公众观看的场所。', '可数，美式用语，英式多用 cinema。', 'The movie theater is closed for repairs.', '这家电影院停业维修。', [], ['cinema'], 'noun', 'countable', '娱乐'],
  ], '', ['cinema'], 'movie + theater；家族/近义 cinema 电影院（英式）。短语分级留空').phrase = true;

  W('moving', 'adjective', '/ˈmuːvɪŋ/', 'A1', [], '感人的', 'Making you feel strong emotions, especially pity.', [
    ['感人的', 'Making you feel strong emotions, especially pity.', '唤起强烈情感的，尤指同情。', '多作定语。', 'The film has a moving ending.', '这部电影有个感人的结局。', [], ['pathetic'], 'adjective', '定语', '情感'],
  ], '', ['move'], '←move A1 + -ing（透明后缀，触动人心），A1 继承（brief 根提示）；近义 pathetic 可怜的、哀婉的');

  W('mr', 'noun', '/ˈmɪstə/', 'A1', [], '先生', 'A title used before a man surname.', [
    ['先生', 'A title used before a man surname.', '用于男士姓氏前的敬称。', '首字母常大写：Mr Lee。', 'The letter was addressed to Mr Lee.', '信是写给李先生的。', ['Mr Lee'], [], 'noun', 'null', '社交'],
  ], '', ['mister'], 'mister 的口头缩写形式（Mr），继承 mister A1；家族 mister 先生');

  W('ms', 'noun', '/mɪz/', 'A2', [], '女士（中性称呼）', 'A title for a woman that does not say if she is married.', [
    ['女士（中性称呼）', 'A title for a woman that does not say if she is married.', '用于女士、不涉及婚姻状况的称呼。', '首字母常大写：Ms Lee。', 'Use ms if you do not know her marital status.', '不知道对方婚姻状况时用 Ms。', ['Ms Lee'], ['miss'], 'noun', 'null', '社交'],
  ], '', [], 'Miss/Mrs 的中性混成变体（Ms），继承 miss A2；近义 miss 小姐');

  W('muddle', 'verb', '/ˈmʌdl/', 'B1', [], '使糊涂；弄乱', 'To confuse someone or mix things up.', [
    ['使糊涂；弄乱', 'To confuse someone or mix things up.', '把人弄糊涂；把东西搞混。', '及物，常与 up 连用。', 'The instructions muddled the students.', '这些说明把学生弄糊涂了。', ['muddle up'], ['mix', 'mess', 'tangle'], 'verb', '及物', '通用'],
  ], 'muddles~muddled~muddled~muddling', ['mud', 'mess'], '←mud B1 + -dle（使成泥泞→引申使糊涂），词干可见语义直连，B1 继承；家族 mess 混乱，近义 mix、tangle 纠缠');

  W('muffled', 'adjective', '/ˈmʌfld/', '', [], '闷声的；被捂住的', 'Quiet and hard to hear because the sound is covered.', [
    ['闷声的；被捂住的', 'Quiet and hard to hear because the sound is covered.', '因声音被遮盖而沉闷、听不清的。', '定语或表语。', 'A muffled voice came from the next room.', '隔壁房间传来闷闷的声音。', ['muffled voice'], ['hollow'], 'adjective', '定语/表语', '通用'],
  ], '', [], '词根 muffle 缺席无级可继，留空；近义 hollow 空洞的、沉闷的');

  W('muggy', 'adjective', '/ˈmʌɡi/', '', [], '闷热潮湿的', 'Hot and damp in an unpleasant way.', [
    ['闷热潮湿的', 'Hot and damp in an unpleasant way.', '（天气）又热又湿、令人不适的。', '多作定语或表语，形容天气。', 'The air was hot and muggy.', '空气又热又闷。', ['muggy weather'], ['humid'], 'adjective', '定语/表语', '自然'],
  ], '', ['humid'], '词源不明（或源自古诺斯语 myggja 小蠓），形含 mug（杯子）但语义无关，切词假象，留空；近义 humid 潮湿的');

  W('multiplication', 'noun', '/ˌmʌltɪplɪˈkeɪʃn/', '', ['CET4'], '乘法；倍增', 'The act of multiplying; the process used in the times tables.', [
    ['乘法；倍增', 'The act of multiplying; the process used in the times tables.', '乘法运算；也指成倍增加。', '不可数，数学术语。', 'The pupil practiced multiplication tables.', '学生练习了乘法口诀表。', ['multiplication table'], ['product'], 'noun', 'uncountable', '教育'],
  ], '', ['multiply'], '←multiply + -ation（y→i 名词化）；近义 product 积');

  W('multiply', 'verb', '/ˈmʌltɪplaɪ/', '', ['CET4'], '乘；倍增', 'To add a number to itself a number of times, or to increase fast.', [
    ['乘；倍增', 'To add a number to itself a number of times, or to increase fast.', '做乘法；也指迅速增多。', '及物（数学），亦可不及物（繁殖）。', 'Multiply the result by two.', '把结果乘以二。', ['multiply by'], ['divide', 'reproduce', 'square'], 'verb', '及物', '教育'],
  ], 'multiplies~multiplied~multiplied~multiplying', ['multiplication'], 'multi- 前缀不作成分，词根 ply 缺席，但词库已收录 multiplication；近义 divide 除、reproduce 繁殖、square 平方');

  W('mum', 'noun', '/mʌm/', 'A1', [], '妈妈', 'Mother, a familiar word used by children.', [
    ['妈妈', 'Mother, a familiar word used by children.', '妈妈，儿语或口语称呼。', '可数，英式口语常用。', 'Tell mum I will be late.', '告诉妈妈我会晚点。', ['mum and dad'], ['mom', 'mother'], 'noun', 'countable', '家庭'],
  ], '', ['mom', 'mother'], '←mom A1 的英式变体拼写（o→u），A1 继承；家族/近义 mom（美式）、mother 母亲');

  W('mumble', 'verb', '/ˈmʌmbl/', 'A1', [], '含糊地说', 'To speak with the lips nearly closed so the words are not clear.', [
    ['含糊地说', 'To speak with the lips nearly closed so the words are not clear.', '嘴唇几乎不张开地含糊说话。', '及物或不及物。', 'He mumbled an apology and left.', '他嘟囔了一句道歉就走了。', ['mumble an apology'], ['mutter'], 'verb', '及物', '通用'],
  ], 'mumbles~mumbled~mumbled~mumbling', ['mutter'], '←mum（儿语闭唇发声）+ -ble（反复后缀），继承 mom→mum 链 A1；家族/近义 mutter 嘟囔');

  W('munch', 'verb', '/mʌntʃ/', '', [], '大声咀嚼', 'To eat noisily with enjoyment.', [
    ['大声咀嚼', 'To eat noisily with enjoyment.', '大声而香地咀嚼吃东西。', '及物，常与 on 连用。', 'The kids munched crisps all afternoon.', '孩子们一下午都在嘎嘣嘎嘣吃薯片。', ['munch on'], ['crunch'], 'verb', '及物', '饮食'],
  ], 'munches~munched~munched~munching', ['crunch'], '拟声来源，与 crunch 同为拟声但非派生，无库内派生根，留空；家族/近义 crunch 嘎吱作响地嚼');

  W('muse', 'verb', '/mjuːz/', '', [], '沉思', 'To think deeply and quietly for a long time.', [
    ['沉思', 'To think deeply and quietly for a long time.', '静静地深思很久。', '不及物：muse on/over。', 'She mused on the meaning of the years gone by.', '她沉思着岁月流逝的意义。', ['muse on'], ['ponder'], 'verb', '不及物', '心理'],
  ], 'muses~mused~mused~musing', [], 'amuse B1 的词根（a- + muse 原义使闲散），现代语义已分化（沉思≠娱乐），非透明直接派生，留空；近义 ponder 沉思');

  W('musical', 'noun/adjective', '/ˈmjuːzɪkl/', 'A1', ['CET4'], '音乐的；音乐剧', 'Having to do with music, or a play with songs and music.', [
    ['音乐的；音乐剧', 'Having to do with music, or a play with songs and music.', '与音乐有关的；也指有歌有乐的舞台剧。', '形容词与名词两用。', 'The musical ran for three years.', '那部音乐剧演了三年。', ['musical instrument'], ['opera'], 'noun/adjective', 'countable', '艺术'],
  ], 'musicals', ['music'], '←music A1 + -al（透明后缀），A1 继承；近义 opera 歌剧；搭配 musical instrument 另立词条');

  W('musical instrument', 'noun', '/ˈmjuːzɪkl ˈɪnstrəmənt/', '', [], '乐器', 'An instrument used to play music.', [
    ['乐器', 'An instrument used to play music.', '演奏音乐用的器具。', '可数。', 'She can play several musical instruments.', '她会演奏好几种乐器。', [], ['instrument'], 'noun', 'countable', '艺术'],
  ], '', [], 'musical + instrument；近义 instrument 器具、乐器。短语分级留空').phrase = true;

  W('must give', 'verb', '/ˈmʌst ɡɪv/', '', [], '必须给；该还', 'To be obliged to give back something one owes.', [
    ['必须给；该还', 'To be obliged to give back something one owes.', '表示必须付出所欠之物。', '情态动词 must + 动词原形结构。', 'You must give back what you took.', '你必须把拿走的东西还回来。', [], ['owe'], 'verb', 'null', '语法'],
  ], '', [], 'must + give；近义 owe 欠、该给。短语分级留空').phrase = true;

  W('muster', 'verb', '/ˈmʌstə(r)/', '', [], '召集；集合', 'To gather people together, or to gather enough courage.', [
    ['召集；集合', 'To gather people together, or to gather enough courage.', '把人召集起来；也指鼓起（勇气等）。', '及物，常与 up 连用。', 'The captain mustered the crew on deck.', '船长把船员召集到甲板上。', ['muster up'], ['mobilize', 'summon'], 'verb', '及物', '军事'],
  ], 'musters~mustered~mustered~mustering', [], '词干表误配 ←must（muster 源自古法语 mostre 显示，与 must（必须）不同源），切词假象，留空；近义 mobilize 动员、summon 召集');

  W('mutton', 'noun', '/ˈmʌtn/', '', [], '羊肉', 'The meat of an adult sheep.', [
    ['羊肉', 'The meat of an adult sheep.', '成年羊的肉。', '不可数。', 'We had roast mutton for Sunday dinner.', '我们周日晚餐吃了烤羊肉。', ['roast mutton'], ['lamb'], 'noun', 'uncountable', '饮食'],
  ], '', ['lamb'], '与 lamb（羔羊肉）为相关而不同词，无库内派生根，留空；近义 lamb 羔羊肉');

  W('myriad', 'noun/adjective', '/ˈmɪriəd/', '', [], '无数的；无数', 'A very large number of things.', [
    ['无数的；无数', 'A very large number of things.', '无数、大量的事物。', '正式用语：a myriad of + 复数名词。', 'There were myriad stars in the sky.', '天上有无数的星星。', ['a myriad of'], ['innumerable'], 'noun/adjective', 'countable', '书面'],
  ], '', ['innumerable'], '无库内派生根，留空；家族/近义 innumerable 数不清的');

  W('mythical', 'adjective', '/ˈmɪθɪkl/', 'B2', ['CET4'], '神话的；虚构的', 'From a myth, or not real.', [
    ['神话的；虚构的', 'From a myth, or not real.', '出自神话的；也指并不存在的。', '多作定语。', 'Dragons are mythical creatures.', '龙是神话中的生物。', ['mythical creature'], ['fabulous'], 'adjective', '定语', '文化'],
  ], '', ['fabulous'], '←myth B2 + -ical（透明后缀），B2 继承；家族/近义 fabulous 传说中的、极好的');
})(typeof window !== 'undefined' ? window : globalThis);
