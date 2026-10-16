/* data/words/cet/author_p6.js — 常用词 P 批次 6，缺口 percussion ~ pharynx，共 31 条
 * （28 单词 + 3 短语：perform alone、pet name、pet peeve）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（12 条全部 CET4：
 * performance、performer、periodic、periodical、permanence、permission、persistent、
 * personal、personality、personally、pessimist、pessimistic）。
 * 扫根结论：period A2、permanent B2、permit B1、persist C1、pessimism C1、pharmacy B2、
 * fantasy B1（均在 author_p1/p2）——periodic/periodical←period A2 + -ic/-ical、permanence←
 * permanent B2 + -ence、permission←permit B1 + -sion、persistent←persist C1 + -ent、
 * personal/personality/personally/personify←person A1（persons brief 根提示）、
 * pessimist/pessimistic←pessimism C1（词干 pessim 词首全段共享，-ism/-ist/-istic 互换，
 * 兄弟派生同 optimal←optimum 先例）、pharmacology←pharmacy B2（词干 pharmac 词首全段共享，
 * -ology 按功能透明处理，判断项）、performance←perform A2 + -ance（-ence 同功能变体）、
 * pester←pest B2 + -er（brief 根提示）；
 * 留空项：pertain 不在库→pertinent；spire 不在库→perspire→perspiration 链空、
 * pestilence（-ilence 非透明清单项）、petticoat（petti≠petty 非精确首成分）、
 * phantom（与 fantasy 同源但 ph/f 拼写非精确对应）、percussion（无词根）、
 * perforate（形含 for 切词假象）、perpendicular（词干 pend 藏于词中，同 obliterate 先例）、
 * pervade（与 permeate 仅共享前缀）、personify 的 -ify 按 -ize 同功能透明处理（判断项，A1 继承）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p6.js 必须在 _cet_helper.js 之后加载');

  W('percussion', 'noun', '/pəˈkʌʃn/', '', [], '打击乐；敲打', 'Instruments that are hit to play music, or the act of hitting.', [
    ['打击乐（声部）', 'The part of music played on instruments that are struck.', '音乐中用敲击乐器演奏的部分。', '不可数。', 'The piece requires a separate percussion section.', '这首曲子需要单独的打击乐声部。', [], ['drum'], 'noun', 'uncountable', '艺术'],
  ], '', ['drum'], '拉丁 percussio（敲打）——无库内可见词根，留空；家族/近义 drum 鼓、打击乐');

  W('perforate', 'verb', '/ˈpɜːfəreɪt/', '', [], '打孔；穿孔', 'To make a line of holes or a hole through something.', [
    ['打孔；穿孔', 'To make a line of holes or a hole through something.', '在某物上打一排孔或穿一个洞。', '及物。', 'The machine perforates the sheets for binding.', '机器为装订在纸上打孔。', [], ['punch'], 'verb', '及物', '通用'],
  ], 'perforates~perforated~perforated~perforating', [], '拉丁 perforare（打穿）——形含 for（A1）但语义无关（切词假象，同 obliterate 先例），留空；近义 punch 打孔、猛击');

  W('perform alone', 'verb', '/pəˈfɔːm əˈləʊn/', '', [], '单独表演', 'To perform by oneself without other people.', [
    ['单独表演', 'To perform by oneself without other people.', '独自一人表演，没有他人参与。', '不及物短语。', 'She chose to perform alone on the piano.', '她选择独自演奏钢琴。', [], ['solo'], 'verb', '不及物', '艺术'],
  ], '', [], 'perform + alone；近义 solo 独自、单独。短语分级留空').phrase = true;

  W('performance', 'noun', '/pəˈfɔːməns/', 'A2', ['CET4'], '表演；表现', 'A show or piece of music, or how well something works.', [
    ['表演；演出', 'A show or piece of music given in front of an audience.', '在观众面前进行的演出或音乐表演。', '可数。', 'The evening performance starts at eight.', '晚场演出八点开始。', [], ['concert', 'show'], 'noun', 'countable', '艺术'],
    ['表现；性能', 'How well a person or machine does something.', '人或机器做得有多好。', '不可数或可数。', 'The car has poor performance in first gear.', '这辆车一档性能差。', [], [], 'noun', 'uncountable', '通用'],
  ], 'performances',['concert', 'perform'], '←perform A2 + -ance（-ence 同功能名化后缀变体），A2 继承（brief 根提示）；家族 concert 音乐会，近义 show 表演、演出、表现');

  W('performer', 'noun', '/pəˈfɔːmə/', 'A2', ['CET4'], '表演者', 'A person who gives a show or music performance.', [
    ['表演者', 'A person who gives a show or music performance.', '进行演出的人。', '可数。', 'Every performer rehearsed twice a day.', '每位表演者每天排练两次。', [], ['actor'], 'noun', 'countable', '艺术'],
  ], 'performers',['perform'], '←perform A2 + -er（施事后缀），A2 继承（brief 根提示）；近义 actor 演员、表演者');

  W('periodic', 'adjective', '/ˌpɪəriˈɒdɪk/', 'A2', ['CET4'], '周期性的；定期的', 'Happening at regular intervals.', [
    ['周期性的；定期的', 'Happening at regular intervals.', '按固定间隔发生的。', '多作定语。', 'The valley sees periodic flooding.', '这条谷地周期性泛滥。', ['periodic table'], ['intermittent'], 'adjective', '定语', '科学'],
  ], '',['intermittent', 'period'], '←period A2 + -ic（透明后缀），A2 继承（brief 显示 ←?，自行扫根 period）；家族/近义 intermittent 间歇的、断断续续的');

  W('periodical', 'noun/adjective', '/ˌpɪəriˈɒdɪkl/', 'A2', ['CET4'], '期刊；定期的', 'A magazine published regularly, or done at regular intervals.', [
    ['期刊', 'A magazine published at regular times.', '定期出版的杂志。', '可数。', 'She writes for a medical periodical.', '她为一份医学期刊撰稿。', [], ['magazine'], 'noun', 'countable', '出版'],
    ['定期的', 'Happening at regular intervals.', '按固定间隔发生的。', '定语，较 formal。', 'He made periodical visits to the clinic.', '他定期到诊所随访。', [], [], 'adjective', '定语', '通用'],
  ], 'periodicals',['magazine', 'period'], '←period A2 + -ical（-ic/-al 变体透明后缀），A2 继承（brief 显示 ←?，自行扫根 period）；家族/近义 magazine 杂志');

  W('periphery', 'noun', '/pəˈrɪfəri/', '', [], '外围；边缘', 'The outer edge of an area.', [
    ['外围；边缘', 'The outer edge of an area.', '某区域的外缘。', '可数，常单数，与 the 连用。', 'Factories ring the periphery of the city.', '工厂环绕在城市外围。', ['on the periphery'], ['outskirts'], 'noun', 'countable', '地理'],
  ], 'peripheries', [], '希腊 peripheria（携带周围）——无库内可见词根，留空；近义 outskirts 郊区、外围地带');

  W('permanence', 'noun', '/ˈpɜːmənəns/', 'B2', ['CET4'], '永久；持久', 'The state of lasting for a long time or forever.', [
    ['永久；持久', 'The state of lasting for a long time or forever.', '长期或永远持续的状态。', '不可数。', 'Job permanence matters to young families.', '工作的稳定性对年轻家庭很重要。', [], ['tenure'], 'noun', 'uncountable', '通用'],
  ], '',['tenure', 'permanent'], '←permanent B2 + -ence（-ent 名化透明后缀），B2 继承（brief 显示 ←?，自行扫根 permanent）；家族/近义 tenure 任期、保有');

  W('permission', 'noun', '/pəˈmɪʃn/', 'B1', ['CET4'], '允许；许可', 'The act of allowing somebody to do something.', [
    ['允许；许可', 'The act of allowing somebody to do something.', '允许某人做某事的行为。', '不可数，常与 for/to 连用。', 'The teacher gave permission to leave.', '老师准许离开。', ['ask permission'], ['consent', 'sanction'], 'noun', 'uncountable', '通用'],
  ], 'permissions',['consent', 'permit'], '←permit B1 + -sion（-t→-ssion 名化），B1 继承（brief 显示 ←?，自行扫根 permit）；家族 consent 同意，近义 sanction 批准、许可');

  W('perpendicular', 'adjective', '/ˌpɜːpənˈdɪkjələ/', '', [], '垂直的；成直角的', 'Meeting another line at an angle of 90 degrees.', [
    ['垂直的；成直角的', 'Meeting another line at an angle of 90 degrees.', '与另一条线成 90 度角相交。', '多作表语，与 to 连用。', 'The wall stands perfectly perpendicular.', '这面墙完全垂直。', ['perpendicular to'], ['vertical'], 'adjective', '表语', '科学'],
  ], '', [], '拉丁 perpendicularis（垂直悬挂）——词干 pend 藏于词中（perPENDicular），非词首可见（同 obliterate←letter 留空先例），留空；近义 vertical 垂直的、直立的');

  W('persistent', 'adjective', '/pəˈsɪstənt/', 'C1', ['CET4'], '持续的；坚持不懈的', 'Continuing for a long time, or continuing to try.', [
    ['持续的；坚持不懈的', 'Continuing for a long time, or continuing to try.', '长时间持续的；或坚持尝试的。', '定语或表语。', 'Her persistent cough needed a doctor.', '她持续的咳嗽需要就医。', ['persistent effort'], ['chronic', 'ongoing', 'stubborn'], 'adjective', '定语/表语', '性格'],
  ], '',['chronic', 'stubborn', 'persist'], '←persist C1 + -ent（透明后缀），C1 继承（brief 显示 ←?，自行扫根 persist）；家族 chronic 慢性的、stubborn 顽固的，近 ongoing 持续的、stubborn');

  W('personal', 'adjective', '/ˈpɜːsnəl/', 'A1', ['CET4'], '个人的；私人的', 'Belonging to or concerning a particular person.', [
    ['个人的；私人的', 'Belonging to or concerning a particular person.', '属于或关乎某个人的。', '定语或表语。', 'The letter contained personal details.', '信里包含私人细节。', ['personal opinion'], ['intimate', 'own', 'private', 'subjective'], 'adjective', '定语/表语', '通用'],
  ], '',['private', 'subjective', 'person'], '←person A1 + -al（透明后缀），A1 继承（brief 显示 ←?，经 persons 根提示确认 person A1）；家族 private 私人的、subjective 主观的，近 intimate 亲密的、own 自己的、private、subjective');

  W('personality', 'noun', '/ˌpɜːsəˈnæləti/', 'A1', ['CET4'], '性格；个性', 'Somebody character and the way they behave.', [
    ['性格；个性', 'Somebody character and the way they behave.', '某人的性格特征和行为方式。', '可数或不可数。', 'She has a bright personality.', '她性格开朗。', [], ['character', 'figure', 'identity', 'temperament'], 'noun', 'countable', '性格'],
  ], 'personalities',['character', 'person'], '←person A1 + -ality（-al + -ity 双透明后缀），A1 继承（brief 显示 ←?，自行扫根 person）；家族 character 性格，近 figure 人物、identity 身份、temperament 气质');

  W('personally', 'adverb', '/ˈpɜːsnəli/', 'A1', ['CET4'], '亲自；就本人而言', 'In person, or speaking for oneself.', [
    ['亲自；就本人而言', 'In person, or speaking for oneself.', '亲身；或就自己来说。', '常置于所修饰的词前。', 'I personally prefer the smaller room.', '我个人更喜欢那间小房。', [], ['herself', 'himself', 'itself', 'myself', 'oneself', 'ourselves', 'themselves', 'yourself'], 'adverb', 'null', '通用'],
  ], '',['person'], '←person A1 + -al + -ly（双透明后缀），A1 继承（brief 显示 ←?，自行扫根 person）；近义为反身代词八词（她自己、他自己、它自己、我自己、亲自、我们自己、他们自己、你自己），照抄队列');

  W('personify', 'verb', '/pəˈsɒnɪfaɪ/', 'A1', [], '使人格化；体现', 'To give human qualities to something, or to be a good example of a quality.', [
    ['使人格化；体现', 'To give human qualities to something, or to be a good example of a quality.', '把人的特质赋予某物；或成为某特质的典型。', '及物。', 'The statue personifies freedom.', '这座雕像象征自由。', [], ['embody'], 'verb', '及物', '文学'],
  ], 'personifies~personified~personified~personifying',['person'], '←person A1 + -ify（-ify 按 -ize 同功能透明后缀处理，判断项），A1 继承（brief 显示 ←?，自行扫根 person）；近义 embody 使具体化、体现');

  W('persons', 'noun', '/ˈpɜːsnz/', 'A1', [], '人们（正式复数）', 'People, in formal or legal language.', [
    ['人们（正式复数）', 'People, in formal or legal language.', '正式或法律用语中的人们。', 'person 的正式复数，people 为常用复数。', 'No more than ten persons may enter.', '不得超过十人进入。', [], ['people'], 'noun', 'countable', '通用'],
  ], '',['people', 'person'], '←person A1 的正式复数形式，A1 继承（brief 根提示）；家族/近义 people 人们（常用复数）');

  W('perspiration', 'noun', '/ˌpɜːspɪˈreɪʃn/', '', [], '汗液；出汗', 'Sweat from the body, or the act of sweating.', [
    ['汗液；出汗', 'Sweat from the body, or the act of sweating.', '身体出的汗；或出汗这一行为。', '不可数，委婉语。', 'Perspiration cools the body.', '汗液使身体降温。', [], ['sweat'], 'noun', 'uncountable', '健康'],
  ], '', ['sweat'], '←perspire 的名化（-ation 透明）——perspire 自身无库内可见词根（spire 不在库）亦留空，链条空；家族/近义 sweat 汗水、出汗');

  W('perspire', 'verb', '/pəˈspaɪə(r)/', '', [], '出汗', 'To produce sweat from the body.', [
    ['出汗', 'To produce sweat from the body.', '从身体排出汗液。', '不及物，委婉语。', 'Athletes perspire heavily after the race.', '运动员赛后大量出汗。', [], ['sweat'], 'verb', '不及物', '健康'],
  ], 'perspires~perspired~perspired~perspiring', ['sweat'], '拉丁 perspirare（完全呼气）——spire 不在库，无成分级可继，留空；家族/近义 sweat 汗水、出汗');

  W('pertinent', 'adjective', '/ˈpɜːtɪnənt/', '', [], '相关的；中肯的', 'Directly related to the matter being discussed.', [
    ['相关的；中肯的', 'Directly related to the matter being discussed.', '与所讨论问题直接相关的。', '多作定语，与 to 连用。', 'She asked pertinent questions.', '她问了切中要害的问题。', ['pertinent to'], ['relevant'], 'adjective', '定语', '通用'],
  ], '', ['relevant'], 'pertain 不在库，无成分级可继，留空（同 nonreader 先例）；家族/近义 relevant 相关的、中肯的');

  W('pervade', 'verb', '/pəˈveɪd/', '', [], '弥漫；遍布', 'To spread through and be present in every part.', [
    ['弥漫；遍布', 'To spread through and be present in every part.', '散布并存在于每个部分。', '及物。', 'A smell of coffee pervaded the hall.', '咖啡的气味弥漫了大厅。', [], ['fill', 'inform', 'inhabit', 'permeate'], 'verb', '及物', '通用'],
  ], 'pervades~pervaded~pervaded~pervading', ['permeate'], '拉丁 pervadere（走进遍及）——无库内可见词根（与 permeate 仅共享前缀 per-、词干不同），留空；家族 permeate 渗透，近 fill 充满、inform 使充斥（旧义）、inhabit 笾罩、permeate 渗透');

  W('pessimist', 'noun', '/ˈpesɪmɪst/', 'C1', ['CET4'], '悲观主义者', 'A person who always expects the worst to happen.', [
    ['悲观主义者', 'A person who always expects the worst to happen.', '总做最坏打算的人。', '可数。', 'The pessimist expected the worst.', '悲观主义者做了最坏的打算。', [], [], 'noun', 'countable', '性格'],
  ], 'pessimists', ['pessimism'], '←pessimism C1（词干 pessim 词首全段共享，-ism/-ist 名动互换），C1 继承（brief 显示 ←?，自行扫根 pessimism，同 optimal←optimum 兄弟派生先例）；家族 pessimism 悲观、悲观论；队列近义为空');

  W('pessimistic', 'adjective', '/ˌpesɪˈmɪstɪk/', 'C1', ['CET4'], '悲观的', 'Expecting that bad things will happen.', [
    ['悲观的', 'Expecting that bad things will happen.', '预计坏事将会发生的。', '定语或表语，常与 about 连用。', 'He grew pessimistic about the weather.', '他对天气变得悲观。', ['pessimistic about'], [], 'adjective', '定语/表语', '性格'],
  ], '', ['pessimism'], '←pessimism C1（词干 pessim 词首全段共享，-istic 为 -ist+-ic 复合），C1 继承（brief 显示 ←?，自行扫根 pessimism，兄弟派生先例）；家族 pessimism 悲观、悲观论；队列近义为空');

  W('pester', 'verb', '/ˈpestə/', 'B2', [], '纠缠；烦扰', 'To keep asking somebody for something in an annoying way.', [
    ['纠缠；烦扰', 'To keep asking somebody for something in an annoying way.', '以恼人的方式不断向某人索求。', '及物，常与 with/about 连用。', 'The kids pestered the guide with questions.', '孩子们缠着导游问问题。', [], ['harass', 'hound'], 'verb', '及物', '社交'],
  ], 'pesters~pestered~pestered~pestering',['harass', 'hound', 'pest'], '←pest B2 + -er（施事动词化），B2 继承（brief 根提示）；家族 harass 骚扰、hound 紧追，近义 harass、hound');

  W('pestilence', 'noun', '/ˈpestɪləns/', '', [], '瘟疫', 'A disease that spreads widely and kills many people.', [
    ['瘟疫', 'A disease that spreads widely and kills many people.', '广泛传播并造成大量死亡的疾病。', '不可数或可数，文学用语。', 'Pestilence swept the medieval town.', '瘟疫席卷了这座中世纪小镇。', [], ['plague'], 'noun', 'uncountable', '健康'],
  ], '', [], 'pest B2 虽在库，但后缀 -ilence 非透明清单项（-ence 的插入变体，保守判断），留空；近义 plague 瘟疫、鼠疫');

  W('pet name', 'noun', '/ˈpet ˌneɪm/', '', [], '昵称', 'A special name used for somebody you love.', [
    ['昵称', 'A special name used for somebody you love.', '对你所爱之人的特别称呼。', '可数。', 'He has a pet name for each of his daughters.', '他给每个女儿都起了昵称。', [], ['nickname'], 'noun', 'countable', '社交'],
  ], '', [], 'pet + name；近义 nickname 绰号、昵称。短语分级留空').phrase = true;

  W('pet peeve', 'noun', '/ˈpet ˌpiːv/', '', [], '最反感的事物', 'Something that always annoys you.', [
    ['最反感的事物', 'Something that always annoys you.', '总让你心烦的事物。', '可数，非正式。', 'Litter is my biggest pet peeve.', '乱扔垃圾是我最反感的事。', [], ['hate'], 'noun', 'countable', '通用'],
  ], '', [], 'pet + peeve；近义 hate 憎恶（令你憎恶之物）。短语分级留空').phrase = true;

  W('petticoat', 'noun', '/ˈpetɪkəʊt/', '', [], '衬裙', 'A skirt worn under a dress.', [
    ['衬裙', 'A skirt worn under a dress.', '穿在连衣裙里面的裙子。', '可数，旧式。', 'She wore a lace petticoat under the dress.', '她在裙子下穿了蕾丝衬裙。', [], ['slip'], 'noun', 'countable', '外貌'],
  ], 'petticoats', [], 'petti（petty 的变体拼写）+ coat；petti≠petty 非精确可见首成分，无成分级可继，留空（同 nonreader 先例）；近义 slip 内衣裙、衬裙');

  W('phantom', 'noun/adjective', '/ˈfæntəm/', '', [], '幻影；幽灵', 'Something that seems real but is not there.', [
    ['幻影；幽灵', 'Something that seems real but is not there.', '看似存在却并不在场的事物。', '可数，亦作形容词定语。', 'The phantom vanished at the stairwell.', '幻影在楼梯口消失了。', [], ['ghost'], 'noun', 'countable', '文化'],
  ], 'phantoms', ['ghost'], '希腊 phantasma（显现）——与 fantasy 同源但 ph/f 拼写非精确对应（切词判断），留空；家族/近义 ghost 鬼、幽灵');

  W('pharmacology', 'noun', '/ˌfɑːməˈkɒlədʒi/', 'B2', [], '药理学', 'The science of how drugs act on the body.', [
    ['药理学', 'The science of how drugs act on the body.', '研究药物如何作用于身体的科学。', '不可数。', 'He studies pharmacology at the university.', '他在大学学习药理学。', [], ['pharmacy'], 'noun', 'uncountable', '科学'],
  ], '',['pharmacy'], '←pharmacy B2（词干 pharmac 词首全段共享；-ology 学科后缀按功能透明处理，判断项），B2 继承（brief 显示 ←?，自行扫根 pharmacy）；近义 pharmacy 药房、药学');

  W('pharynx', 'noun', '/ˈfærɪŋks/', '', [], '咽', 'The part of the throat above the windpipe.', [
    ['咽', 'The part of the throat above the windpipe.', '喉上方的那部分喉咙。', '可数，解剖学术语。', 'The infection spread to the pharynx.', '感染蔓延到了咽部。', [], ['throat'], 'noun', 'countable', '健康'],
  ], 'pharynxes', [], '希腊 pharynx（咽喉）——无库内可见词根，留空；近义 throat 喉咙');
})(typeof window !== 'undefined' ? window : globalThis);
