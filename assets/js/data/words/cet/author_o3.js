/* data/words/cet/author_o3.js — 常用词 O 批次 3，缺口 o ~ occur to，共 31 条
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（共 13 条：CET4 11、CET6 2）。
 * 本批 3 条短语：W(...) 返回后补 .phrase = true（连写可一次完成，check_phrase.js 比对）。
 * brief 需自行修正/补链处：observable/obligatory/occasional/occupant/occurrence 均 ←? 但根字典
 * 可扫（observe B1、oblige B2、occasion B1、occupy B2、occur B1）；obsession←obsess C1（+ion）；
 * oat/obstetrics/occult 缺席（oatmeal/obstetrician/occultation 留空）；obliterate 与 letter 同源
 * 但语义已远留空、occident 形含 accident 但语义无关（切词假象）留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_o3.js 必须在 _cet_helper.js 之后加载');

  W('o', 'noun', '/əʊ/', '', [], '字母 O', 'The 15th letter of the English alphabet.', [
    ['字母 O', 'The 15th letter of the English alphabet.', '英语字母表第 15 个字母。', '可数。', 'O is the fifteenth letter of the alphabet.', 'O 是字母表的第十五个字母。', ['letter O'], ['oxygen', 'ozone'], 'noun', 'countable', '语法'],
  ], '', [], '字母词条，无派生根，留空；近义 oxygen 氧气、ozone 臭氧（以 O 开头的代表词）');

  W('oatmeal', 'noun', '/ˈəʊtmiːl/', '', [], '燕麦片；燕麦粥', 'Oats made into flour or into porridge.', [
    ['燕麦片；燕麦粥', 'Oats made into flour or eaten as porridge.', '燕麦压成的片或粉；也指燕麦粥。', '不可数。', 'She mixed oatmeal with milk.', '她把燕麦片和牛奶拌在一起。', ['oatmeal cookies'], ['porridge'], 'noun', 'uncountable', '饮食'],
  ], '', ['porridge'], 'oat + meal 复合词，成分词 oat 不在库，无级可继，留空；家族/近义 porridge 粥');

  W('object to', 'verb', '/ˈɒbdʒɪkt tuː/', '', [], '反对；不赞成', 'To say that you disagree with something and do not like it.', [
    ['反对；不赞成', 'To say that you disagree with something and do not like it.', '表示不同意、不喜欢某事。', '及物短语，to 为介词，后接名词或动名词。', 'Several members objected to the plan.', '好几位成员反对这项计划。', ['object to doing'], ['disapprove', 'oppose'], 'verb', '及物', '社交'],
  ], '', ['disapprove'], 'object + to；近义 disapprove 不赞成、oppose 反对。短语分级留空').phrase = true;

  W('objection', 'noun', '/əbˈdʒekʃn/', 'A2', ['CET4'], '反对；异议', 'A statement or feeling that you disagree with something.', [
    ['反对；异议', 'A statement or feeling that you disagree with something.', '表达不同意的言语或感觉。', '可数或不可数。', 'Nobody raised any objection at the meeting.', '会上无人提出异议。', ['raise an objection'], ['exception', 'protest', 'quarrel'], 'noun', 'countable', '社交'],
  ], '',['exception', 'object'], '←object A2（反对）+ -ion（透明后缀），A2 继承（brief 需 +te 扫根，object 已扫）；家族 exception 例外，近义 protest 抗议、quarrel 争吵');

  W('objective case', 'noun', '/əbˈdʒektɪv keɪs/', '', [], '宾格', 'The form of a pronoun or noun used as the object of a verb or preposition.', [
    ['宾格', 'The form of a pronoun or noun used as the object of a verb or preposition.', '用作动词或介词宾语的代词或名词形式。', '可数，语法术语。', 'In hit him, him is in the objective case.', '在 hit him 中，him 处于宾格。', [], ['accusative'], 'noun', 'countable', '语法'],
  ], '', [], 'objective + case；近义 accusative 宾格。短语分级留空').phrase = true;

  W('oblation', 'noun', '/əˈbleɪʃn/', '', [], '祭品；奉献', 'A gift offered to a god, especially in a ceremony.', [
    ['祭品；奉献', 'A gift offered to a god, especially in a ceremony.', '献给神的礼物，尤指仪式中。', '可数，正式或宗教用语。', 'The priest placed the oblation on the altar.', '祭司把祭品放在祭坛上。', [], ['sacrifice'], 'noun', 'countable', '宗教'],
  ], 'oblations', [], '拉丁 oblatio（奉献），无库内派生根，留空；近义 sacrifice 祭品、奉献');

  W('obligation', 'noun', '/ˌɒblɪˈɡeɪʃn/', 'B2', ['CET4'], '义务；责任', 'A moral or legal duty to do something.', [
    ['义务；责任', 'A moral or legal duty to do something.', '做某事的道德或法律责任。', '可数或不可数。', 'You are under no obligation to reply.', '你没有回复的义务。', ['legal obligation'], ['debt', 'duty'], 'noun', 'countable', '社会'],
  ], '',['duty', 'oblige'], '←oblige B2 + -ation（e→a 名词化，同 modification 模式），B2 继承（brief 根提示）；家族 duty 责任，近义 debt 债、人情');

  W('obligatory', 'adjective', '/əˈblɪɡətəri/', 'B2', ['CET4'], '义务的；必须做的', 'Required by law, rule or custom.', [
    ['义务的；必须做的', 'Required by law, rule or custom.', '法律、规则或习俗所要求的。', '多作定语。', 'Attendance at the ceremony is obligatory.', '出席典礼是必须的。', [], ['incumbent'], 'adjective', '定语', '社会'],
  ], '',['oblige'], 'brief 显示 ←?；自行扫根 oblige B2 在库 + -atory（透明后缀，义务的），B2 继承；近义 incumbent 有义务的');

  W('obliged', 'adjective', '/əˈblaɪdʒd/', 'B2', ['CET4'], '被迫的；感激的', 'Forced or required to do something, also grateful.', [
    ['被迫的；感激的', 'Forced or required to do something, also grateful.', '被迫或必须做某事；亦表感激。', '表语，正式用语。', 'I am obliged to follow the rules.', '我必须遵守规定。', ['much obliged'], ['bound', 'indebted'], 'adjective', '表语', '通用'],
  ], '',['indebted', 'oblige'], '←oblige B2 + -ed（透明后缀），B2 继承（brief 根提示）；家族 indebted 感激的、负债的，近义 bound 受约束的');

  W('oblique', 'adjective', '/əˈbliːk/', '', [], '斜的；间接的', 'Slanting, not straight up or down, or not direct.', [
    ['斜的；间接的', 'Slanting, not straight up or down, or not direct.', '倾斜的；也指说话不直接。', '定语，正式用语。', 'She gave an oblique reference to the crisis.', '她侧面提到了那场危机。', [], ['sideways'], 'adjective', '定语', '通用'],
  ], '', [], '拉丁 obliquus（倾斜），无库内派生根，留空；近义 sideways 侧向地、斜向地');

  W('obliterate', 'verb', '/əˈblɪtəreɪt/', '', [], '抹去；彻底摧毁', 'To remove something completely, or destroy it completely.', [
    ['抹去；彻底摧毁', 'To remove something completely, or destroy it completely.', '把某物完全清除；或彻底摧毁。', '及物，正式用语。', 'The blast obliterated the old shed.', '爆炸把旧棚屋夷为平地。', [], ['erase'], 'verb', '及物', '通用'],
  ], 'obliterates~obliterated~obliterated~obliterating', [], '拉丁 obliterare（涂去文字，ob + litera letter）——与 letter 同源但现代语义已远，非透明直接派生，留空；近义 erase 擦除');

  W('obscurity', 'noun', '/əbˈskjʊərəti/', 'C1', ['CET6'], '默默无闻；晦涩', 'The state of being unknown or hard to understand.', [
    ['默默无闻；晦涩', 'The state of being unknown or hard to understand.', '不为人知；或难以理解。', '不可数。', 'The writer rose from obscurity to fame.', '这位作家从默默无闻变得家喻户晓。', [], ['wilderness'], 'noun', 'uncountable', '书面'],
  ], '',['obscure'], '←obscure C1 + -ity（e→ity 名词化，同 modification 模式），C1 继承（brief 根提示）；近义 wilderness 荒芜、默默无闻的境地');

  W('observable', 'adjective', '/əbˈzɜːvəbl/', 'B1', [], '可观察到的', 'Able to be seen or noticed.', [
    ['可观察到的', 'Able to be seen or noticed.', '能够被看见或注意到的。', '定语或表语。', 'There was an observable change in her mood.', '她的情绪有了可察觉的变化。', [], ['visible'], 'adjective', '定语/表语', '科学'],
  ], '',['observe'], 'brief 显示 ←?；自行扫根 observe B1 在库 + -able（透明后缀），B1 继承；近义 visible 可见的');

  W('observation', 'noun', '/ˌɒbzəˈveɪʃn/', 'B1', ['CET4'], '观察；评论', 'The act of watching, or a remark about something.', [
    ['观察；评论', 'The act of watching, or a remark about something.', '观察的行为；也指所作的评论。', '可数或不可数。', 'The data came from direct observation of the stars.', '这些数据来自对恒星的直接观测。', ['keep under observation'], ['insight', 'remark', 'surveillance'], 'noun', 'countable', '科学'],
  ], '',['observatory', 'surveillance', 'observe'], '←observe B1 + -ation（e→a 名词化），B1 继承（brief 根提示）；家族 observatory 天文台、surveillance 监控，近义 insight 洞察、remark 评论');

  W('observed', 'adjective', '/əbˈzɜːvd/', 'B1', [], '被观察到的；观察所得的', 'Seen and noticed, or noticed as a habit.', [
    ['被观察到的；观察所得的', 'Seen and noticed, or noticed as a habit.', '被看到、注意到的；也指观察到的规律。', '定语或表语。', 'The pattern was observed in three trials.', '这一规律在三次试验中被观察到。', ['observed behaviour'], ['empirical'], 'adjective', '定语/表语', '科学'],
  ], '',['empirical', 'observe'], '←observe B1 + -ed（透明后缀），B1 继承（brief 根提示）；家族/近义 empirical 经验主义的、凭观察的');

  W('observer', 'noun', '/əbˈzɜːvə(r)/', 'B1', ['CET4'], '观察者；观察员', 'A person who watches something and takes an interest in it.', [
    ['观察者；观察员', 'A person who watches something and takes an interest in it.', '观看并关注某事的人。', '可数。', 'An independent observer watched the vote count.', '一名独立观察员监督了计票。', [], ['witness'], 'noun', 'countable', '社会'],
  ], 'observers',['witness', 'observe'], '←observe B1 + -or（施事后缀，同 analyst 模式），B1 继承（brief 根提示）；家族/近义 witness 目击者');

  W('obsession', 'noun', '/əbˈseʃn/', 'C1', ['CET6'], '痴迷；着魔', 'An unhealthy and overpowering interest in something.', [
    ['痴迷；着魔', 'An unhealthy and overpowering interest in something.', '对某事过分而难以摆脱的迷恋。', '可数或不可数。', 'His obsession with speed ruined the project.', '他对速度的痴迷毁了这个项目。', ['obsession with'], ['passion', 'religion'], 'noun', 'countable', '心理'],
  ], '',['obsess'], 'brief 显示 ←?；自行扫根 obsess C1 在库 + -ion（透明后缀），C1 继承；近义 passion 热情、religion 宗教般的狂热');

  W('obsolete', 'adjective', '/ˌɒbsəˈliːt/', '', [], '过时的；淘汰的', 'No longer used, because something newer has come along.', [
    ['过时的；淘汰的', 'No longer used, because something newer has come along.', '因新事物出现而不再使用的。', '定语或表语。', 'The software soon became obsolete.', '这款软件很快就过时了。', ['obsolete technology'], ['outdated'], 'adjective', '定语/表语', '通用'],
  ], '', ['outdated'], '拉丁 obsoletus（废弃），无库内派生根，留空；家族/近义 outdated 过时的');

  W('obstetrician', 'noun', '/ˌɒbstəˈtrɪʃn/', '', [], '产科医生', 'A doctor who helps women give birth.', [
    ['产科医生', 'A doctor who helps women give birth.', '帮助产妇分娩的医生。', '可数。', 'The obstetrician ordered another scan.', '产科医生又开了一次扫描。', [], ['midwife'], 'noun', 'countable', '健康'],
  ], 'obstetricians', [], 'obstetrics（产科学）不在库，成分词缺席，无级可继，留空；近义 midwife 助产士');

  W('obstinate', 'adjective', '/ˈɒbstɪnət/', '', [], '固执的', 'Stubborn and refusing to change your mind.', [
    ['固执的', 'Stubborn and refusing to change your mind.', '倔强、不肯改变主意的。', '定语或表语。', 'He was obstinate about every detail.', '他在每个细节上都很固执。', ['obstinate refusal'], ['mule', 'stubborn'], 'adjective', '定语/表语', '性格'],
  ], '', ['stubborn'], '拉丁 obstinatus（坚持），无库内派生根，留空；家族 stubborn 倔强的，近义 mule 骡子般倔的');

  W('obtainable', 'adjective', '/əbˈteɪnəbl/', 'B2', [], '可获得的', 'Able to be obtained or got.', [
    ['可获得的', 'Able to be obtained or got.', '能够得到的。', '表语，常与 from 连用。', 'The parts are obtainable from any dealer.', '这些零件从任何经销商处都能买到。', ['freely obtainable'], ['available'], 'adjective', '表语', '通用'],
  ], '',['obtain'], '←obtain B2 + -able（透明后缀），B2 继承；近义 available 可用的、可获得的');

  W('obtaining', 'noun', '/əbˈteɪnɪŋ/', 'B2', [], '获得；取得', 'The act of getting something, especially with effort.', [
    ['获得；取得', 'The act of getting something, especially with effort.', '得到某物的行为，尤指经过努力。', '不可数，动名词用法。', 'Obtaining a licence takes several weeks.', '取得执照要花好几周。', [], ['acquisition'], 'noun', 'uncountable', '商务'],
  ], '',['obtain'], '←obtain B2 + -ing（动名词化），B2 继承（brief 根提示）；近义 acquisition 获取、收购');

  W('obviously', 'adverb', '/ˈɒbviəsli/', 'A2', ['CET4'], '显而易见地', 'In a way that is easy to see or understand.', [
    ['显而易见地', 'In a way that is easy to see or understand.', '以容易看出或理解的方式。', '修饰全句或形容词。', 'She was obviously pleased with the result.', '她显然对结果很满意。', [], ['clear'], 'adverb', 'null', '通用'],
  ], '',['obvious'], '←obvious A2 + -ly（透明后缀），A2 继承（brief 根提示）；近义 clear 清楚地');

  W('occasional', 'adjective', '/əˈkeɪʒənl/', 'B1', ['CET4'], '偶尔的；间或发生的', 'Happening sometimes, but not often.', [
    ['偶尔的；间或发生的', 'Happening sometimes, but not often.', '有时发生但不经常。', '多作定语。', 'There are occasional delays in the service.', '服务偶尔会出现延误。', [], ['odd'], 'adjective', '定语', '通用'],
  ], '',['occasion'], 'brief 显示 ←?；自行扫根 occasion B1 在库 + -al（透明后缀），B1 继承；近义 odd 偶尔的、偶然的');

  W('occasionally', 'adverb', '/əˈkeɪʒənəli/', 'B1', ['CET4'], '偶尔；间或', 'Sometimes, but not often.', [
    ['偶尔；间或', 'Sometimes, but not often.', '有时，但不经常。', '修饰动词，可置于句首、句中或句末。', 'We occasionally eat out at weekends.', '我们周末偶尔出去吃。', [], ['sometimes'], 'adverb', 'null', '通用'],
  ], '',['sometimes', 'occasion'], '←occasion B1 + -ally（-al + -ly 透明），B1 继承；家族/近义 sometimes 有时');

  W('occident', 'noun', '/ˈɒksɪdənt/', '', [], '西方；西方国家', 'The western regions of the world, especially Europe and America.', [
    ['西方；西方国家', 'The western regions of the world, especially Europe and America.', '世界的西部地区，尤指欧美。', '单数常与 the 连用，正式用语。', 'Trade flowed between the occident and the east.', '贸易在西方与东方之间流通。', [], ['west'], 'noun', 'null', '地理'],
  ], 'occidents', [], '拉丁 occidens（日落之处）——与 accident 形近但语义无关（切词假象），留空；近义 west 西方');

  W('occultation', 'noun', '/ˌɒkʌlˈteɪʃn/', '', [], '掩星；遮蔽', 'The act of hiding one celestial body behind another.', [
    ['掩星；遮蔽', 'The act of hiding one celestial body behind another.', '一天体被另一天体遮住的现象。', '可数，天文术语。', 'The occultation lasted six minutes.', '这次掩星持续了六分钟。', [], ['eclipse'], 'noun', 'countable', '科学'],
  ], 'occultations', ['eclipse'], 'occult 不在库，成分词缺席，无级可继，留空；家族/近义 eclipse 食、日月食');

  W('occupant', 'noun', '/ˈɒkjupənt/', 'B2', ['CET4'], '居住者；占用者', 'A person who lives in a place or uses a vehicle.', [
    ['居住者；占用者', 'A person who lives in a place or uses a vehicle.', '住在某处的人；也指车辆使用者。', '可数。', 'The occupant of the room was asleep.', '房间里的人在睡觉。', ['vehicle occupant'], ['inmate', 'tenant'], 'noun', 'countable', '社会'],
  ], 'occupants',['occupy'], '←occupy B2 + -ant（施事/形容化后缀，同 assistant 模式），B2 继承（brief 需扫根 occupy）；近义 inmate 住户（机构内）、tenant 租客');

  W('occupied', 'adjective', '/ˈɒkjupaɪd/', 'B2', [], '占用的；忙碌的', 'Being used, or busy doing something.', [
    ['占用的；忙碌的', 'Being used, or busy doing something.', '正被使用的；或正忙于某事的。', '定语或表语，常与 with 连用。', 'The line was occupied, so I waited.', '占线了，于是我等着。', ['occupied with'], ['busy'], 'adjective', '定语/表语', '通用'],
  ], '',['busy', 'occupy'], '←occupy B2 + -ed（透明后缀），B2 继承（brief 根提示）；家族/近义 busy 忙碌的');

  W('occur to', 'verb', '/əˈkɜː tuː/', '', [], '想到；（念头）浮现', 'If a thought or idea occurs to you, you suddenly think of it.', [
    ['想到；（念头）浮现', 'If a thought or idea occurs to you, you suddenly think of it.', '某个念头突然进入脑海。', '及物短语，主语常为事物。', 'It occurred to her that the door was open.', '她突然想到门开着。', ['it occurs to sb'], ['dawn'], 'verb', '及物', '心理'],
  ], '', [], 'occur + to；近义 dawn 开始明白（dawn on sb）。短语分级留空').phrase = true;

  W('occurrence', 'noun', '/əˈkʌrəns/', 'B1', ['CET4'], '发生；出现的事', 'An event or happening, or the fact of happening.', [
    ['发生；出现的事', 'An event or happening, or the fact of happening.', '发生这件事；也指发生的事情。', '可数或不可数。', 'Headaches are a common occurrence before exams.', '考试前头痛很常见。', ['common occurrence'], ['event', 'incidence', 'incident', 'instance', 'phenomenon'], 'noun', 'countable', '通用'],
  ], '',['incidence', 'incident', 'phenomenon', 'occur'], '←occur B1 + -rence（r 双写 + -ence 透明后缀），B1 继承（brief 需扫根 occur）；家族 incidence 发生率、incident 事件、phenomenon 现象，近义 event 事件、instance 实例');
})(typeof window !== 'undefined' ? window : globalThis);
