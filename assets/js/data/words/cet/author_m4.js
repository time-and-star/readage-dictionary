/* data/words/cet/author_m4.js · 手敲词条 M（一·引用缺口批）：mac ~ manly（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批 10 条考级标签）。
 * 短语 3 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，前缀不作成分，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_m4.js 必须在 _cet_helper.js 之后加载');

  W('mac', 'noun', '/mæk/', '', [], '雨衣', 'A raincoat, especially a short one.', [
    ['雨衣', 'A raincoat, especially a short one.', '雨衣，尤指短款。', '可数，英式口语。', 'He wore a yellow mac in the rain.', '下雨时他穿了件黄色雨衣。', [], ['raincoat'], 'noun', 'countable', '外貌'],
  ], 'macs', ['raincoat'], 'mackintosh 缩略——无库内派生根，故留空；家族/近义 raincoat 雨衣');

  W('macaw', 'noun', '/məˈkɔː/', '', [], '金刚鹦鹉', 'A large colourful South American parrot.', [
    ['金刚鹦鹉', 'A large brightly coloured parrot of South America.', '南美产的大个彩羽鹦鹉。', '可数。', 'A blue macaw sat in the tree.', '一只蓝色金刚鹦鹉停在树上。', [], ['parrot'], 'noun', 'countable', '自然'],
  ], 'macaws', [], '葡萄牙语借词——无库内派生根，故留空；近义 parrot 鹦鹉');

  W('machinery', 'noun', '/məˈʃiːnəri/', 'A2', ['CET4'], '机械；机器（总称）', 'Machines considered as a group.', [
    ['机械；机器（总称）', 'Machines considered as a group, or the parts of a machine.', '机器设备的总称；也指机器结构。', '不可数。', 'The machinery in the factory is modern.', '工厂里的机器设备很现代。', [], ['apparatus'], 'noun', 'uncountable', '工业'],
  ], '', ['machine'], '词核 machine A2 + -ry（集合后缀），A2 继承；家族 machine 机器，近义 apparatus 器械');

  W('mad about', 'adjective', '/ˌmæd əˈbaʊt/', '', [], '对…痴迷', 'Very enthusiastic about something.', [
    ['对…痴迷', 'Very enthusiastic about someone or something.', '对某人或某事极度热衷。', '形容词短语：be mad about。', 'She is mad about tennis.', '她对网球着迷。', ['be mad about'], ['crazy'], 'adjective', 'null', '情感'],
  ], '', [], 'mad + about；近义 crazy 狂热痴迷的。短语分级留空').phrase = true;

  W('madame', 'noun', '/ˈmædəm/', 'B1', [], '夫人；女士（法语称呼）', 'A polite French title for a woman.', [
    ['夫人；女士（法语称呼）', 'A polite French title for a woman, used as a mark of respect.', '对女性的法语敬称。', '可数，作头衔。', 'Madame Curie won two Nobel Prizes.', '居里夫人两次获得诺贝尔奖。', [], ['madam'], 'noun', 'countable', '社交'],
  ], 'madames', ['madam'], '←madam B1 + e（法语拼写变体），B1 继承；家族/近义 madam 夫人、女士');

  W('madhouse', 'noun', '/ˈmædhaʊs/', 'A2', [], '喧闹混乱的地方', 'A place full of noise and confusion.', [
    ['喧闹混乱的地方', 'A place full of noise and confusion.', '嘈杂混乱的场所。', '可数，非正式。', 'The station was a madhouse at rush hour.', '高峰时间车站乱成一锅粥。', [], ['zoo'], 'noun', 'countable', '通用'],
  ], 'madhouses', ['mad'], 'mad A2 + house——首成分 mad 在库，A2 继承（首成分规则）；近义 zoo（喻）乱哄哄的场所');

  W('magical', 'adjective', '/ˈmædʒɪkl/', 'A2', ['CET4'], '神奇的；有魔力的', 'Like magic; wonderful and mysterious.', [
    ['神奇的；有魔力的', 'Like magic; wonderful and mysterious.', '像魔法般的、奇妙的。', '定语。', 'The magical night ended with fireworks.', '那个奇妙的夜晚以烟花收尾。', [], ['magic'], 'adjective', '定语', '通用'],
  ], '', ['magic'], '←magic A2 + -al（透明后缀），A2 继承；家族/近义 magic 魔法');

  W('magnanimous', 'adjective', '/mæɡˈnænɪməs/', '', [], '宽宏大量的', 'Generous and forgiving.', [
    ['宽宏大量的', 'Generous and forgiving, especially towards a rival.', '（尤指对对手）慷慨大度的。', '定语或表语。', 'She was magnanimous in victory.', '她胜而不骄、宽宏大度。', [], ['generous'], 'adjective', '定语/表语', '性格'],
  ], '', [], '拉丁 magnus + animus（大度）——无库内派生根，故留空；近义 generous 慷慨的');

  W('magnate', 'noun', '/ˈmæɡneɪt/', '', [], '大亨；巨头', 'A rich powerful person in business.', [
    ['大亨；巨头', 'A rich and powerful person in business.', '商界有权有势的富人。', '可数：media magnate。', 'A media magnate bought the paper.', '一位媒体巨头买下了这家报纸。', [], ['prince'], 'noun', 'countable', '商务'],
  ], 'magnates', [], '形近 magnet（磁铁）但非派生（不同词源），故留空；近义 prince 王公（借喻巨头）');

  W('magnetic', 'adjective', '/mæɡˈnetɪk/', 'B1', ['CET4'], '磁的；有吸引力的', 'Able to attract iron.', [
    ['磁的；有吸引力的', 'Able to attract iron; also very attractive.', '有磁性的；也指有魅力的。', '定语。', 'Iron is magnetic.', '铁有磁性。', ['magnetic field'], [], 'adjective', '定语', '科学'],
  ], '', ['magnet'], '←magnet B1 + -ic（透明后缀），B1 继承；家族 magnet 磁铁');

  W('magnificence', 'noun', '/mæɡˈnɪfɪsns/', 'B2', ['CET4'], '壮丽；宏伟', 'The quality of being grand.', [
    ['壮丽；宏伟', 'The quality of being grand and impressive.', '壮观而气派的特质。', '不可数。', 'They stared at the magnificence of the palace.', '他们凝视着宫殿的壮丽。', [], ['glory'], 'noun', 'uncountable', '艺术'],
  ], '', ['magnificent'], '←magnificent B2 + -ce（t→ce 音变，名词化），B2 继承；近义 glory 辉煌');

  W('magnifier', 'noun', '/ˈmæɡnɪfaɪə/', 'C1', [], '放大镜', 'A lens that makes small things look bigger.', [
    ['放大镜', 'A lens that makes small things look bigger.', '使小东西显得更大的透镜。', '可数。', 'Use a magnifier to read the tiny print.', '用放大镜看这些小字。', [], ['microscope'], 'noun', 'countable', '工具'],
  ], 'magnifiers', ['magnify'], '←magnify C1 + -er（工具后缀，y→i），C1 继承；近义 microscope 显微镜');

  W('mainly', 'adverb', '/ˈmeɪnli/', 'A2', [], '主要地', 'For the most part.', [
    ['主要地', 'For the most part; mostly.', '大部分、基本上。', '副词。', 'The course is mainly for beginners.', '这门课主要面向初学者。', [], ['foremost'], 'adverb', 'null', '通用'],
  ], '', ['main'], '←main A2 + -ly（透明后缀），A2 继承（brief 根提示）；近义 foremost 首要地');

  W('mainstay', 'noun', '/ˈmeɪnstə/', 'A2', [], '支柱；主力', 'A person or thing that supports the whole.', [
    ['支柱；主力', 'A person or thing that supports the whole.', '支撑全局的人或物。', '可数。', 'She is the mainstay of the team.', '她是团队的主力。', [], ['pillar', 'staple'], 'noun', 'countable', '通用'],
  ], 'mainstays', ['main'], 'main A2 + stay——首成分 main 在库，A2 继承（首成分规则）；近义 pillar 支柱、staple 主要部分');

  W('maize', 'noun', '/meɪz/', '', [], '玉米', 'A tall plant grown for its grain.', [
    ['玉米', 'A tall plant grown for its grain; also the grain itself.', '高秆谷物作物；也指其籽粒。', '不可数，英式用语。', 'Maize is grown across the region.', '这个地区广泛种植玉米。', [], ['corn'], 'noun', 'uncountable', '农业'],
  ], '', ['corn'], '西班牙语 maíz——无库内派生根，故留空；家族/近义 corn 玉米');

  W('majestic', 'adjective', '/məˈdʒestɪk/', 'C1', ['CET6'], '雄伟的；庄严的', 'Impressively grand and beautiful.', [
    ['雄伟的；庄严的', 'Impressively grand and beautiful.', '壮观而庄严的。', '定语。', 'The majestic castle overlooked the valley.', '雄伟的城堡俯瞰着山谷。', [], ['imperial'], 'adjective', '定语', '通用'],
  ], '', ['imperial'], '←majesty C1（共享词干 majest，y→i+c），C1 继承；家族/近义 imperial 帝王般的');

  W('majority', 'noun', '/məˈdʒɒrəti/', 'B1', ['CET4'], '多数；大多数', 'The greater number of people or things.', [
    ['多数；大多数', 'The greater number of people or things.', '数量上超过半数的一方。', '可数：a majority of。', 'The majority voted in favour.', '多数票赞成。', ['a majority of'], ['bulk', 'main', 'mainstream', 'most'], 'noun', 'countable', '政治'],
  ], 'majorities', ['bulk', 'most'], '←major B1 + -ity（透明后缀），B1 继承（brief 根提示）；家族 bulk 大量、most 大多数，近义 main 主要的、mainstream 主流');

  W('make up', 'verb', '/ˌmeɪk ˈʌp/', '', [], '编造；化妆', 'To invent a story, or to put on makeup.', [
    ['编造；化妆', 'To invent a story, or to put cosmetics on the face.', '编造（借口、故事）；也指化妆。', '及物短语，亦可不及物（和好）。', 'He made up an excuse.', '他编了个借口。', [], ['invent'], 'verb', '及物', '通用'],
  ], '', ['invent'], 'make + up；家族 invent 发明、编造。短语分级留空').phrase = true;

  W('make use of', 'verb', '/ˌmeɪk ˈjuːz ɒv/', '', [], '利用；使用', 'To use something for a purpose.', [
    ['利用；使用', 'To use something for a purpose.', '为特定目的使用某物。', '及物短语。', 'The company made use of new technology.', '这家公司利用了新技术。', [], ['exploit'], 'verb', '及物', '通用'],
  ], '', ['exploit'], 'make + use + of；家族/近义 exploit 利用、发挥。短语分级留空').phrase = true;

  W('make-believe', 'noun/adjective', '/ˌmeɪkbɪˈliːv/', 'A1', [], '假装；假想', 'Pretending that something is real.', [
    ['假装；假想', 'Pretending that something is real when it is not.', '把假的当成真的。', '名词与形容词两用。', 'The children lived in a world of make-believe.', '孩子们活在幻想世界里。', [], ['pretend'], 'noun/adjective', 'null', '娱乐'],
  ], '', ['make'], 'make + believe——首成分 make 在库，A1 继承（首成分规则）；近义 pretend 假装');

  W('malfunction', 'noun/verb', '/ˌmælˈfʌŋkʃn/', 'B1', [], '故障；失灵', 'A failure to work normally.', [
    ['故障；失灵', 'A failure to work normally, or to fail in this way.', '不能正常运转；也指发生故障。', '名词与动词两用。', 'The engine malfunctioned on take-off.', '引擎在起飞时发生故障。', [], ['fault'], 'noun/verb', 'null', '工业'],
  ], 'malfunctions~malfunctioned~malfunctioned~malfunctioning', ['function'], 'mal- 前缀不作成分，词根 function B1 在库，B1 继承；近义 fault 故障、毛病');

  W('malicious', 'adjective', '/məˈlɪʃəs/', 'C1', ['CET6'], '恶意的；蓄意伤害的', 'Intending to harm other people.', [
    ['恶意的；蓄意伤害的', 'Intending to harm other people.', '存心伤害他人的。', '定语。', 'The report was full of malicious lies.', '这份报告满是恶意的谎言。', [], ['malignant'], 'adjective', '定语', '性格'],
  ], '', ['malignant'], '←malice C1 + -ous（e 脱落，透明后缀），C1 继承；家族/近义 malignant 恶毒的、恶性的');

  W('mallet', 'noun', '/ˈmælɪt/', '', [], '木槌', 'A hammer with a wooden head.', [
    ['木槌', 'A hammer with a wooden head.', '木制锤头的锤子。', '可数。', 'The carpenter used a wooden mallet.', '木匠用了木槌。', [], ['hammer'], 'noun', 'countable', '工具'],
  ], 'mallets', [], '无库内派生根，故留空；近义 hammer 锤子');

  W('malware', 'noun', '/ˈmælweə/', '', [], '恶意软件', 'Software written to damage a computer.', [
    ['恶意软件', 'Software written to damage a computer.', '专门用来破坏电脑的软件。', '不可数。', 'The malware spread through email.', '恶意软件通过邮件传播。', [], ['virus'], 'noun', 'uncountable', '科学'],
  ], '', ['virus'], 'malicious + software 各取前段（截略合成），无完整在库成分词，故留空；家族/近义 virus 病毒');

  W('man-made', 'adjective', '/ˌmæn ˈmeɪd/', 'A1', [], '人造的', 'Made by people, not natural.', [
    ['人造的', 'Made by people, not natural.', '人工制造的、非天然的。', '定语。', 'The lake is man-made.', '这个湖是人造的。', [], ['artificial'], 'adjective', '定语', '通用'],
  ], '', ['man'], 'man A1 + made——首成分 man 在库，A1 继承（首成分规则）；近义 artificial 人造的');

  W('manager', 'noun', '/ˈmænɪdʒə/', 'A2', ['CET4'], '经理；管理者', 'A person who controls a business or team.', [
    ['经理；管理者', 'A person who controls a business or team.', '管理业务或团队的人。', '可数。', 'She was promoted to manager.', '她被提升为经理。', ['general manager'], ['boss', 'superintendent', 'steward'], 'noun', 'countable', '职业'],
  ], 'managers', ['boss', 'superintendent', 'steward'], '←manage A2 + -er（施事后缀），A2 继承（brief 根提示）；家族 boss 老板、superintendent 主管、steward 管家');

  W('mandatory', 'adjective', '/ˈmændətɔːri/', 'C1', ['CET6'], '强制的；法定的', 'Required by law or rules.', [
    ['强制的；法定的', 'Required by law or rules.', '法律或规定要求必须做的。', '定语或表语。', 'Attendance is mandatory.', '出勤是强制的。', [], ['compulsory'], 'adjective', '定语/表语', '法律'],
  ], '', ['compulsory'], '←mandate C1 + -ory（透明后缀），C1 继承；家族/近义 compulsory 强制的');

  W('mane', 'noun', '/meɪn/', '', [], '鬃毛', 'The long hair on the neck of a horse or lion.', [
    ['鬃毛', 'The long hair on the neck of a horse or lion.', '马或狮子颈上的长毛。', '可数。', 'The lion shook its mane.', '狮子甩了甩鬃毛。', [], ['hair'], 'noun', 'countable', '自然'],
  ], 'manes', [], '形含 man（A1）但非派生（古英语 mana），切词假象，故留空；近义 hair 头发');

  W('mania', 'noun', '/ˈmeɪniə/', '', [], '狂热；躁狂', 'A very strong desire for something.', [
    ['狂热；躁狂', 'A very strong desire for something, or mental illness.', '极度的热衷；也指躁狂症。', '可数：a mania for。', 'He had a mania for collecting stamps.', '他对集邮到了狂热的地步。', ['a mania for'], ['fever'], 'noun', 'countable', '心理'],
  ], 'manias', [], '希腊 mania——无库内派生根，故留空；近义 fever 狂热（本义发烧）');

  W('manifesto', 'noun', '/ˌmænɪˈfestəʊ/', 'C1', [], '宣言；政纲', 'A written statement of a party aims.', [
    ['宣言；政纲', 'A written statement of a political party aims.', '政党公布的目标声明。', '可数。', 'The party published its manifesto.', '该党发表了竞选纲要。', [], ['platform'], 'noun', 'countable', '政治'],
  ], 'manifestos', ['manifest'], '←manifest C1 + -o（共享词干，意式后缀），C1 继承；近义 platform 政纲');

  W('manly', 'adjective', '/ˈmænli/', 'A1', ['CET4'], '有男子气概的', 'Having qualities typical of a man.', [
    ['有男子气概的', 'Having qualities thought typical of a man.', '有传统男性气概的。', '定语。', 'She praised his manly courage.', '她赞赏他的阳刚之气。', [], ['masculine'], 'adjective', '定语', '性格'],
  ], '', ['masculine'], '←man A1 + -ly（透明后缀），A1 继承（brief 根提示）；家族/近义 masculine 男性的');

})(typeof window !== 'undefined' ? window : globalThis);
