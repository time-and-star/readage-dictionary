/* data/words/cet/author_o4.js — 常用词 O 批次 4，缺口 oceanic ~ on time，共 31 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（CET4 共 5 条：
 * oceanic、oddity、offensive、offering、omission）。
 * 本批 14 条短语：W(...) 返回后补 .phrase = true（连写可一次完成，check_phrase.js 比对）。
 * brief 修正：offence 提示 ←off 为误配（off 不、无关），实为 offend B1（d→ce，同 defend→defence）；
 * offensive←offend（d→s+ive，同 provide→provision）；oceanic/officeholder/offhand/officiate 需
 * 自行扫根（ocean A2、office A1）；ominous 因 omen 缺席留空；omnipotent 取 potent C1（omni- 前缀
 * 不作成分）；offcut/offhand 按首成分 off A1 继承（minibus 模式）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_o4.js 必须在 _cet_helper.js 之后加载');

  W('oceanic', 'adjective', '/ˌəʊʃiˈænɪk/', 'A2', ['CET4'], '海洋的', 'Of or relating to the ocean.', [
    ['海洋的', 'Of or relating to the ocean.', '与海洋有关的。', '定语，正式用语。', 'The island has rich oceanic wildlife.', '这座岛屿有丰富的海洋野生生物。', ['oceanic climate'], ['marine'], 'adjective', '定语', '自然'],
  ], '',['marine', 'ocean'], '←ocean A2 + -ic（透明后缀），A2 继承（brief 显示 ←?，自行扫根 ocean）；家族/近义 marine 海洋的');

  W('ocular', 'adjective', '/ˈɒkjʊlə(r)/', '', [], '眼的；视觉的', 'Of or relating to the eyes.', [
    ['眼的；视觉的', 'Of or relating to the eyes.', '与眼睛有关的。', '定语，医学或正式用语。', 'The chart shows the ocular muscles.', '这张图显示眼部肌肉。', [], ['optic'], 'adjective', '定语', '健康'],
  ], '', [], '拉丁 oculus（眼）——与 eye 同源但拼写不可见（拉丁 ocul 对日耳曼 eye），留空；近义 optic 眼的、视觉的');

  W('odd one out', 'noun', '/ˈɒd wʌn ˈaʊt/', '', [], '与众不同的人（或物）', 'A person or thing that is different from the others in a group.', [
    ['与众不同的人（或物）', 'A person or thing that is different from the others in a group.', '与群体中其他成员不同的人或物。', '可数，常与 the 连用。', 'He was the odd one out in the team.', '他是队里格格不入的人。', ['be the odd one out'], ['exception'], 'noun', 'countable', '社交'],
  ], '', [], 'odd one + out；近义 exception 不合群者、例外。短语分级留空').phrase = true;

  W('oddity', 'noun', '/ˈɒdəti/', 'B1', ['CET4'], '怪人；怪事', 'A strange person or thing, or the quality of being strange.', [
    ['怪人；怪事', 'A strange person or thing, or the quality of being strange.', '古怪的人或事；也指古怪的性质。', '可数。', 'He was a harmless oddity in the village.', '他是村里无害的怪人。', [], ['eccentric'], 'noun', 'countable', '性格'],
  ], 'oddities',['odd'], '←odd B1 + -ity（透明后缀），B1 继承（brief 根提示）；近义 eccentric 古怪的人');

  W('of course', 'adverb', '/ɒv ˈkɔːs/', '', [], '当然', 'Used to say yes or to agree.', [
    ['当然', 'Used to say yes or to agree.', '表示同意或肯定。', '口语常用。', 'Of course, you may come too.', '你当然也可以来。', [], ['sure'], 'adverb', 'null', '口语'],
  ], '', [], 'of + course；近义 sure 当然、没问题。短语分级留空').phrase = true;

  W('of late', 'adverb', '/ɒv ˈleɪt/', '', [], '近来', 'Recently.', [
    ['近来', 'Recently.', '最近。', '正式或书面用语，常与完成时连用。', 'He has seemed tired of late.', '他近来似乎很累。', [], ['lately'], 'adverb', 'null', '书面'],
  ], '', ['lately'], 'of + late；家族/近义 lately 最近。短语分级留空').phrase = true;

  W('of one mind', 'adjective', '/ɒv wʌn ˈmaɪnd/', '', [], '意见一致', 'All thinking the same about something.', [
    ['意见一致', 'All thinking the same about something.', '对某事想法一致。', '表语，常与 about 连用。', 'The board was of one mind about the plan.', '董事会对这项计划意见一致。', [], ['unanimous'], 'adjective', 'null', '商务'],
  ], '', [], 'of + one + mind；近义 unanimous 一致同意的。短语分级留空').phrase = true;

  W('of that kind', 'adjective', '/ɒv ðæt ˈkaɪnd/', '', [], '那一类的', 'Belonging to the same type as something mentioned.', [
    ['那一类的', 'Belonging to the same type as something mentioned.', '属于已提过的同一类。', '后置修饰名词。', 'I do not like lies and things of that kind.', '我不喜欢谎言之类的东西。', [], ['such'], 'adjective', 'null', '通用'],
  ], '', [], 'of + that + kind；近义 such 那样的。短语分级留空').phrase = true;

  W('of which', 'pronoun', '/ɒv wɪtʃ/', '', [], '其中的（关系代词）', 'Used to give more information about something already mentioned.', [
    ['其中的（关系代词）', 'Used to give more information about something already mentioned.', '用于补充说明已提到的事物。', '正式，常与介词连用，引导定语从句。', 'He mentioned two reasons, of which the second was stronger.', '他提到两个理由，其中第二个更有说服力。', [], ['whose'], 'pronoun', 'null', '语法'],
  ], '', [], 'of + which；近义 whose 谁的（引导定语从句）。短语分级留空').phrase = true;

  W('of whom', 'pronoun', '/ɒv huːm/', '', [], '……的人（关系代词）', 'Used after a preposition to refer to people already mentioned.', [
    ['……的人（关系代词）', 'Used after a preposition to refer to people already mentioned.', '置于介词后，指已提到的人。', '正式用语，引导定语从句。', 'There were three candidates, of whom two withdrew.', '有三名候选人，其中两名退出了。', [], ['whose'], 'pronoun', 'null', '语法'],
  ], '', [], 'of + whom；近义 whose 谁的。短语分级留空').phrase = true;

  W('off target', 'adjective', '/ɒf ˈtɑːɡət/', '', [], '未命中目标；偏离目标', 'Not hitting the intended target, or not on course.', [
    ['未命中目标；偏离目标', 'Not hitting the intended target, or not on course.', '没有打中目标；或偏离既定方向。', '表语。', 'The second shot was off target.', '第二枪没打中目标。', [], ['wide'], 'adjective', 'null', '体育'],
  ], '', [], 'off + target；近义 wide 偏离目标的（wide of the mark）。短语分级留空').phrase = true;

  W('offal', 'noun', '/ˈɒfl/', '', [], '（动物）内脏；下水', 'The organs of an animal that are eaten as food.', [
    ['（动物）内脏；下水', 'The organs of an animal that are eaten as food.', '供食用的动物内脏。', '不可数。', 'The recipe uses lamb offal.', '这道菜用羊内脏。', [], ['kidney', 'liver'], 'noun', 'uncountable', '饮食'],
  ], '', [], '中古英语 off + fall（脱落部分），现代语义（动物内脏）不可透明析出，留空；近义 kidney 肾、liver 肝');

  W('offcut', 'noun', '/ˈɒfkʌt/', 'A1', [], '边角料；切余部分', 'A piece left over after the main piece has been cut off.', [
    ['边角料；切余部分', 'A piece left over after the main piece has been cut off.', '主要部分切下后剩下的料。', '可数。', 'The maker sells offcuts at half price.', '这家厂家边角料半价出售。', [], ['remnant'], 'noun', 'countable', '工业'],
  ], 'offcuts',['off', 'cut'], 'off A1 + cut A1 复合词，首成分 off 在库，A1 继承（minibus 模式）；近义 remnant 残余、零头');

  W('offence', 'noun', '/əˈfens/', 'B1', [], '罪行；冒犯', 'A criminal act, or something that insults or upsets someone.', [
    ['罪行；冒犯', 'A criminal act, or something that insults or upsets someone.', '犯罪行为；也指冒犯他人的言行。', '作罪行可数，作冒犯不可数。', 'Driving without a licence is a serious offence.', '无照驾驶是严重罪行。', ['cause offence'], ['crime', 'insult', 'nuisance', 'sin'], 'noun', 'countable', '法律'],
  ], 'offences', ['crime', 'sin'], 'brief 提示 ←off 为误配（off 不、语义无关）；实为 offend B1 + d→ce（名化，同 defend→defence 模式），B1 继承；家族 crime 罪、sin 罪孽，近义 insult 侮辱、nuisance 麻烦事');

  W('offensive', 'adjective/noun', '/əˈfensɪv/', 'B1', ['CET4'], '冒犯的；进攻', 'Rude or insulting, or a planned attack by an army.', [
    ['冒犯的；无礼的', 'Rude or insulting, likely to upset people.', '粗鲁或侮辱性的，容易惹恼人。', '定语或表语。', 'His offhand remarks were deeply offensive.', '他那些随意的言辞非常冒犯。', ['offensive language'], ['abusive', 'retarded'], 'adjective', '定语/表语', '社交'],
    ['进攻；攻势', 'A planned attack by an army or team.', '军队或团队有计划的进攻。', '可数，名词。', 'The enemy launched a new offensive.', '敌人发动了新一轮攻势。', ['launch an offensive'], ['assault', 'attack'], 'noun', 'countable', '军事'],
  ], 'offensives',['attack', 'offend'], '←offend B1 + d→s + -ive（名化，同 provide→provision 模式），B1 继承；家族 attack 进攻，近义 abusive 辱骂的、retarded 迟钝的（本身即冒犯用语）、assault 攻击');

  W('offering', 'noun', '/ˈɒfərɪŋ/', 'A2', ['CET4'], '奉献；祭品；供品', 'Something given to a god, or something offered to people.', [
    ['奉献；祭品；供品', 'Something given to a god, or something offered to people.', '献给神的东西；也指向人提供的东西。', '可数或不可数。', 'They brought an offering to the temple.', '他们向寺庙献上供品。', ['job offering'], ['sacrifice', 'tribute'], 'noun', 'countable', '宗教'],
  ], 'offerings',['sacrifice', 'offer'], '←offer A2 + -ing（透明后缀），A2 继承（brief 根提示）；家族 sacrifice 牺牲、祭品，近义 tribute 贡物、致敬');

  W('offhand', 'adverb/adjective', '/ˌɒfˈhænd/', 'A1', [], '脱口而出的；即兴的', 'Said without thinking, or without preparation.', [
    ['脱口而出的；即兴的', 'Said without thinking, or without preparation.', '不假思索说的；未经准备的。', '形容词与副词两用。', 'She made an offhand comment about the price.', '她随口评论了价格。', ['offhand manner'], ['casual', 'impromptu'], 'adverb/adjective', 'null', '性格'],
  ], '',['off', 'hand'], 'off + hand 复合词，首成分 off A1 在库，A1 继承（minibus 模式）；近义 casual 随意的、impromptu 即兴的');

  W('officeholder', 'noun', '/ˈɒfɪshəʊldə(r)/', 'A1', [], '公职人员；任职者', 'A person who holds an official position.', [
    ['公职人员；任职者', 'A person who holds an official position.', '担任公职或职位的人。', '可数，正式用语。', 'Every officeholder must file a yearly report.', '每位任职者必须提交年度报告。', [], ['incumbent'], 'noun', 'countable', '政治'],
  ], 'officeholders', ['incumbent'], 'office A1 + holder 复合词，首成分 office 在库，A1 继承（minibus 模式）；家族/近义 incumbent 任职者、在任者');

  W('officers', 'noun', '/ˈɒfɪsəz/', 'A2', [], '警官；官员', 'Police officers or people in positions of authority.', [
    ['警官；官员', 'Police officers or people in positions of authority.', '警官；也指身居职位的官员。', 'officer 的复数形式。', 'Two officers came to the door.', '两名警官来到门前。', ['customs officers'], ['police'], 'noun', 'countable', '职业'],
  ], '',['police', 'officer'], '←officer A2 的复数形式，A2 继承（brief 根提示）；家族/近义 police 警方、警察');

  W('officiate', 'verb', '/əˈfɪʃieɪt/', 'A1', [], '主持；担任裁判', 'To have charge of a ceremony or a sports match.', [
    ['主持；担任裁判', 'To have charge of a ceremony or a sports match.', '主持仪式或担任体育比赛裁判。', '不及物，常与 at 连用。', 'She officiated at the wedding ceremony.', '她主持了那场婚礼。', ['officiate at'], ['referee'], 'verb', '不及物', '体育'],
  ], 'officiates~officiated~officiated~officiating',['office'], 'office A1 + -ate（透明后缀，-iate 类），A1 继承（brief 显示 ←?，自行扫根 office）；近义 referee 裁判');

  W('ogre', 'noun', '/ˈəʊɡə(r)/', '', [], '食人魔；可怕的人', 'An ugly imaginary monster in stories, or a frightening person.', [
    ['食人魔；可怕的人', 'An ugly imaginary monster in stories, or a frightening person.', '童话中的丑陋怪物；也指可怕的人。', '可数。', 'The witch in the story is a real ogre.', '故事里的女巫是个真正的食人魔。', [], ['giant'], 'noun', 'countable', '文学'],
  ], 'ogres', [], '法语 ogre（食人魔），无库内派生根，留空；近义 giant 巨人、巨人般的家伙');

  W('old hand', 'noun', '/ˌəʊld ˈhænd/', '', [], '老手；有经验的人', 'A person with a lot of experience of a particular activity.', [
    ['老手；有经验的人', 'A person with a lot of experience of a particular activity.', '对某项活动很有经验的人。', '可数，常与 at 连用。', 'She is an old hand at negotiating.', '她是谈判的老手。', ['old hand at'], ['veteran'], 'noun', 'countable', '职业'],
  ], '', [], 'old + hand；近义 veteran 老手、资深者。短语分级留空').phrase = true;

  W('older', 'adjective', '/ˈəʊldə(r)/', 'A1', [], '较年长的；较老的', 'The comparative form of old.', [
    ['较年长的；较老的', 'The comparative form of old.', 'old 的比较级形式。', '定语或表语。', 'My older sister lives abroad.', '我姐姐住在国外。', [], ['elder', 'senior'], 'adjective', '定语/表语', '家庭'],
  ], '',['elder', 'senior', 'old'], '←old A1 + -er（比较级后缀），A1 继承（brief 根提示）；家族 elder 年长者、senior 资深者，近义同');

  W('ominous', 'adjective', '/ˈɒmɪnəs/', '', [], '不祥的；预兆糟糕的', 'Suggesting that something bad is going to happen.', [
    ['不祥的；预兆糟糕的', 'Suggesting that something bad is going to happen.', '暗示将有坏事发生。', '多作定语。', 'Dark clouds gathered in an ominous silence.', '乌云在不祥的寂静中聚集。', [], ['sinister'], 'adjective', '定语', '心理'],
  ], '', ['sinister'], 'omen 不在库，无级可继，留空；家族/近义 sinister 不祥的、邪恶的');

  W('omission', 'noun', '/əˈmɪʃn/', 'B1', ['CET4'], '遗漏；省略', 'Something that is left out, or the act of leaving it out.', [
    ['遗漏；省略', 'Something that is left out, or the act of leaving it out.', '被漏掉的事；或遗漏的行为。', '可数或不可数。', 'The omission nearly cost us the contract.', '这次遗漏差点让我们丢了合同。', ['error and omission'], ['gap'], 'noun', 'countable', '通用'],
  ], 'omissions',['omit'], '←omit B1 + -sion（t→s 名化，同 provide→provision 模式），B1 继承（brief 显示 ←?，自行扫根 omit）；近义 gap 空缺、缺口');

  W('omnipotent', 'adjective', '/ɒmˈnɪpətənt/', 'C1', [], '全能的', 'Having unlimited power.', [
    ['全能的', 'Having unlimited power.', '拥有无限权力的。', '多作定语，常指神。', 'People once believed the king was omnipotent.', '人们曾相信国王是全能的。', [], ['almighty'], 'adjective', '定语', '宗教'],
  ], '',['potent'], 'omni- 前缀不作成分（同 non-/mis- 模式），取 potent C1（在库），C1 继承；近义 almighty 全能的');

  W('on condition', 'conjunction', '/ɒn kənˈdɪʃn/', '', [], '条件是；如果', 'Only if a particular thing happens or is true.', [
    ['条件是；如果', 'Only if a particular thing happens or is true.', '只有在某事发生或为真时才……', '常与 that 连用，引导条件状语从句。', 'We will go on condition that it stays dry.', '如果天气保持干燥我们就去。', ['on condition that'], ['provided'], 'conjunction', 'null', '语法'],
  ], '', [], 'on + condition；近义 provided 如果、假如。短语分级留空').phrase = true;

  W('on earth', 'adverb', '/ɒn ˈɜːθ/', '', [], '究竟（用于强调）', 'Used for emphasis after what, how, why etc.', [
    ['究竟（用于强调）', 'Used for emphasis after what, how, why etc.', '用于 what、how、why 等之后加强语气。', '口语强调用法。', 'What on earth is that noise?', '那到底是什么声音？', [], ['ever'], 'adverb', 'null', '口语'],
  ], '', [], 'on + earth；近义 ever 到底、究竟（强调问句）。短语分级留空').phrase = true;

  W('on the internet', 'adverb', '/ɒn ðə ˈɪntənet/', '', [], '在网上', 'Using the internet.', [
    ['在网上', 'Using the internet.', '通过互联网进行。', '介词短语作状语。', 'She works on the internet all day.', '她整天在网上工作。', [], ['online'], 'adverb', 'null', '媒体'],
  ], '', [], 'on + the + internet；近义 online 在线地。短语分级留空').phrase = true;

  W('on the whole', 'adverb', '/ɒn ðə ˈhəʊl/', '', [], '总体上；大体上', 'Considering everything.', [
    ['总体上；大体上', 'Considering everything.', '综合考虑一切。', '修饰全句。', 'The plan worked well on the whole.', '总体来说这项计划执行得不错。', [], ['overall'], 'adverb', 'null', '通用'],
  ], '', [], 'on + the + whole；近义 overall 总体上。短语分级留空').phrase = true;

  W('on time', 'adverb', '/ɒn ˈtaɪm/', '', [], '准时', 'At the planned time.', [
    ['准时', 'At the planned time.', '按计划的时间到达或发生。', '作状语或表语。', 'The train arrived on time.', '火车准点到达。', ['be on time'], ['punctual'], 'adverb', 'null', '交通'],
  ], '', [], 'on + time；近义 punctual 准时的。短语分级留空').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
