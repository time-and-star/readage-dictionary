/* data/words/cet/author_u6.js — U 批次 6，缺口 untamed ~ usefulness，共 31 条
 * （24 单词 + 7 短语；短语清单：until now、up to、upper arm、upper floor、upper house、
 *   use up、used to）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_u6.txt，widx 125-155，词头无残缺）。
 * CET 标签照抄队列：CET4 × 2（upwards、useful），CET6 × 0，其余 29 条 []。
 * brief：%TEMP%\opencode\_u6_brief.txt 共 24 行，与本批 24 个单词一一对应（首行 untamed、末行 usefulness）；
 *   2 行给出根提示（upright B2、upward B1），22 行显示 ←?，一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf("W('词头'") 定位后取第 4 参，扫 assets/js/data/words 下
 *    author_*.js、pending_*.js 与 curated.js 的 level 字段，未 require 全库）。
 *   brief 与任务清单逐条核对一致（brief refs 为 fam + syn 合并列出），未发现不符项。
 * 扫根结论（自扫，第 4 参）：tame B2（author_t1.js）、tie A2（author_t1.js）、
 *   touch A1（author_t2.js）、use A1（author_u1.js）、usual A2（author_u1.js）、
 *   well A1（author_w1.js）、wield C1（author_w2.js）、willing A1（author_w5.js）、
 *   wind A1（author_w2.js，义项「缠绕、卷起」）、bring A1（author_b3.js）、
 *   come A1（author_c3.js）、draft B1（author_d2.js）、end A1（author_e2.js）、
 *   heave C1（author_h2.js）、land A2（author_l1.js）、market A2（author_m1.js）、
 *   root B1（author_r2.js）、shot A2（author_s2.js）、turn A1（author_t3.js）、
 *   urban B2（author_u1.js）；brief 根提示复核通过（自扫同级）：
 *   upright B2（author_u1.js）、upward B1（author_u1.js）；
 *   本批 24 个单词与 7 条短语在库内均无既有 W 条目（全部首次录入）。
 * · 定根模式：un- 作前缀不作成分（同 author_o6.js out-/non-/mis- 取其后词根模式），
 *   否定方向语义直连方可继承；up- 为前缀性成分（规范 §5.3），取其后词根且语义须直连。
 * · 继承（21 条）：untamed←tame B2、untie←tie A2、untouched←touch A1、unused←use A1、
 *   unusual←usual A2、unwell←well A1、unwieldy←wield C1（判断项）、unwilling←willing A1、
 *   unwind←wind A1、upbringing←bring A1（判断项）、upcoming←come A1（判断项）、
 *   upend←end A1（判断项）、upheaval←heave C1 + -al（判断项）、upland←land A2（判断项）、
 *   upmarket←market A2（判断项）、uprightness←upright B2 + -ness、uproot←root B1（判断项）、
 *   upturn←turn A1（判断项）、upwards←upward B1 的 -s 副词形（判断项）、
 *   useful←use A1 + -ful、usefulness←useful A1 + -ness（判断项：根为同批文件派生词）。
 * · 留空（3 单词 + 7 短语）：updraft（自扫 draft B1 库内仅有「草稿、起草、征兵」，无「气流」义，
 *   语义不直连）、upshot（自扫 shot A2 库内仅有「开枪、射门、镜头、尝试」，无「结果」义，
 *   语义不直连）、urbanite（-ite 不在 §5.4 清单，库内无 -ite 继承先例，按 §4c 留空）；
 *   7 条短语一律 §6 分级留空。
 * CEFR 分布（24 单词）：A1 × 11（untouched、unused、unwell、unwilling、unwind、upbringing、
 *   upcoming、upend、upturn、useful、usefulness）、A2 × 4（untie、unusual、upland、upmarket）、
 *   B1 × 2（uproot、upwards）、B2 × 2（untamed、uprightness）、C1 × 2（unwieldy、upheaval）、
 *   留空 × 3（updraft、upshot、urbanite）；短语 7 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_u6.js 必须在 _cet_helper.js 之后加载');

  W('untamed', 'adjective', '/ʌnˈteɪmd/', 'B2', [], '未驯化的；野性的', 'Not trained or controlled; living in the wild.', [
    ['未驯化的；野生的', 'Living in a wild state and not trained to live with people.', '处于野生状态、没有被驯养的。', '定语表语两用，多形容动物，也可形容荒野。', 'The valley is home to a herd of untamed horses.', '这条山谷里生活着一群野马。', ['an untamed horse', 'untamed land'], ['wild'], 'adjective', '定语/表语', '自然'],
    ['（性格）奔放难管的', 'Difficult to control because of a strong and free character.', '因性情强烈不羁而难以约束的。', '定语表语两用，形容人及其性情，属比喻用法。', 'She kept her untamed spirit even in the city.', '即使身处城市，她依然保留着不羁的天性。', ['an untamed spirit'], [], 'adjective', '定语/表语', '性格'],
  ], '', ['wild'], 'brief ←?，按 §5.2 自扫根 tame B2 驯服的、温顺的（author_t1.js 第 4 参），un- 作前缀不作成分（同 author_o6.js out-/non-/mis- 取其后词根模式），取其后词根 tame，「未驯服的」否定方向语义直连，B2 继承；家族/近义 wild 野生的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('untie', 'verb', '/ʌnˈtaɪ/', 'A2', [], '解开（绳结、系带）；解缆', 'To undo something that is tied, such as a knot or a rope.', [
    ['解开（结、带）', 'To undo a knot, string, or bow that fastens something.', '把系住某物的结、绳或带子松开。', '及物动词，宾语可以是结，也可以是被系住的东西。', 'She untied the ribbon and lifted the lid.', '她解开缎带，掀开了盖子。', ['untie a knot', 'untie your laces'], ['undo'], 'verb', '及物', '家居'],
    ['解缆；放开（船只、牲畜）', 'To release a boat or an animal by loosening the rope that holds it.', '松开系着的绳子，让船或牲畜可以离开。', '及物动词，宾语为被拴住的船、牲畜等。', 'He untied the boat from the jetty before dawn.', '天亮前他把船从栈桥上解了缆。', ['untie a boat'], [], 'verb', '及物', '交通'],
  ], 'unties~untied~untied~untying',['tie'], 'brief ←?，按 §5.2 自扫根 tie A2 系、扎（author_t1.js 第 4 参），un- 作前缀取其后词根 tie，「解开」与打结动作否定方向直连，A2 继承；近义 undo 松开、解开（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('until now', 'adverb', '/ənˈtɪl naʊ/', '', [], '直到现在；迄今为止', 'Up to this moment, and not any earlier.', [
    ['直到现在；迄今为止', 'Up to this moment, so that what follows may now change.', '到此刻为止，此后情形可能改变。', '作时间状语，修饰动词或整句，常与完成时连用。', 'Until now nobody had asked to see the file.', '直到现在还没有人要求查看这份档案。', ['until now', 'from then until now'], ['hitherto'], 'adverb', '不及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 hitherto 迄今、直到那时（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('untouched', 'adjective', '/ʌnˈtʌtʃt/', 'A1', [], '未触及的；未受影响的', 'Not touched, changed, or affected by anyone or anything.', [
    ['未碰过的；原封未动的', 'Not touched or handled by anyone.', '没有人碰过或动过的。', '定语表语两用，常指物品保持原样。', 'The parcels sat untouched on the shelf.', '那些包裹原封未动地放在架子上。', ['an untouched plate'], [], 'adjective', '定语/表语', '通用'],
    ['未受影响的；未遭破坏的', 'Not changed, damaged, or affected by an event.', '没有因某件事而改变或受损的。', '定语表语两用，常指地方、建筑与自然环境。', 'The village was untouched by the storm.', '这个村庄没有受到暴风雨的影响。', ['untouched by', 'an untouched landscape'], ['virgin'], 'adjective', '定语/表语', '环境'],
    ['（食物）未动过的', 'Not eaten, because someone has no appetite or has left it.', '没有被吃过一口的。', '定语表语两用，常与 meal、plate 连用。', 'His dinner remained untouched all evening.', '他的晚饭一整晚都没动过。', ['an untouched meal'], [], 'adjective', '定语/表语', '饮食'],
  ], '', ['virgin'], 'brief ←?，按 §5.2 自扫根 touch A1 触摸、碰（author_t2.js 第 4 参），un- 作前缀取其后词根 touch，「未触及的」否定方向语义直连，A1 继承；家族/近义 virgin 原始的、未经开发的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('unused', 'adjective', '/ʌnˈjuːzd/', 'A1', [], '闲置的；未用过的；不习惯的', 'Not in use, never used before, or not familiar from experience.', [
    ['闲置的；未被使用的', 'Not in use at the moment, or not employed for work.', '目前没有在使用，也没有被派上用场的。', '定语表语两用，可形容物品与房间，也可形容未被任用的人力。', 'The spare room has stayed unused for years.', '那间空房闲置多年了。', ['unused capacity', 'left unused'], ['idle', 'left', 'unemployed'], 'adjective', '定语/表语', '通用'],
    ['未用过的；崭新的', 'Never used, so still in its original condition.', '从未用过，仍保持最初的状态。', '定语表语两用，常与 mint condition 连用。', 'The printer is unused and still in mint condition.', '这台打印机没用过，还崭如新。', ['mint condition'], ['mint'], 'adjective', '定语/表语', '家居'],
    ['未开发的；荒废的', 'Not put to any productive use, especially land or resources.', '没有被开发利用的，尤指土地或资源。', '定语表语两用，常与 land、ground 连用。', 'Large areas of unused land lie beyond the town.', '城镇之外有大片未开发的土地。', ['unused land'], ['virgin', 'waste'], 'adjective', '定语/表语', '环境'],
    ['不习惯的', 'Not familiar with something because you have little experience of it.', '因为缺少经验而不熟悉的。', '常作表语，后接 to 或动名词。', 'He is unused to the cold winters here.', '他不习惯这里寒冷的冬天。', ['be unused to', 'unused to doing'], [], 'adjective', '表语', '心理'],
  ], '',['use'], 'brief ←?，按 §5.2 自扫根 use A1 使用（author_u1.js 第 4 参），un- 作前缀取其后词根 use，「未使用的」否定方向语义直连，A1 继承；近义 idle 闲置的、left 剩下的、mint 完好的、unemployed 未被雇用的、virgin 未开发的、waste 荒废的（队列原样，置各义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unusual', 'adjective', '/ʌnˈjuːʒuəl/', 'A2', [], '不寻常的；独特的；异域的', 'Not common or ordinary; different from what usually happens.', [
    ['异常的；不正常的', 'Different from what is normal, often suggesting something is wrong.', '与正常情况不同的，常暗示出了问题。', '定语表语两用，可形容现象、声音、行为。', 'The unusual noise from the engine worried the driver.', '发动机传出的异响让司机担心起来。', ['an unusual sound', 'unusual behaviour'], ['abnormal'], 'adjective', '定语/表语', '健康'],
    ['不寻常的；罕见的', 'Rare or surprising, because it does not happen often.', '因为不常发生而显得罕见、令人惊讶。', '定语表语两用，强调事件少见，常与 for 连用。', 'It is unusual for the office to close so early.', '办公室这么早关门很不寻常。', ['quite unusual', 'unusual for'], ['extraordinary'], 'adjective', '定语/表语', '通用'],
    ['独特的；别具一格的', 'Interesting or attractive because it differs from the usual kind.', '因为不同于常见类型而显得有趣或好看的。', '定语表语两用，含褒义，可形容风格与品味。', 'She has an unusual style of dressing.', '她的穿衣风格很别致。', ['an unusual style'], ['special'], 'adjective', '定语/表语', '外貌'],
    ['异域的；来自异国的', 'Coming from a distant country and interesting because it is unfamiliar.', '来自异国、因陌生而显得有趣的。', '定语表语两用，形容风情、食物与植物。', 'The market sells unusual spices from Asia.', '这个市场出售来自亚洲的异域香料。', ['an unusual flavour'], ['exotic'], 'adjective', '定语/表语', '饮食'],
  ], '',['usual'], 'brief ←?，按 §5.2 自扫根 usual A2 通常的（author_u1.js 第 4 参），un- 作前缀取其后词根 usual，「不寻常的」否定方向语义直连，A2 继承；近义 abnormal 异常的、extraordinary 非同寻常的、special 独特的、exotic 异域的（队列原样，置各义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unwell', 'adjective', '/ʌnˈwel/', 'A1', [], '身体不舒服的；患病不宜外出的', 'Not feeling well; slightly or seriously ill.', [
    ['身体不舒服的', 'Not feeling well, with mild pain or sickness.', '感觉身体欠佳、有轻微不适的。', '定语表语两用，多作表语，语气比 ill 委婉。', 'She felt unwell and went home early.', '她觉得不舒服，提早回家了。', ['feel unwell', 'look unwell'], ['ill', 'sick'], 'adjective', '表语', '健康'],
    ['（婉辞）患病不宜外出的', 'Ill enough to stay at home or miss work, said politely.', '病到需要在家休息或请假的程度，属委婉说法。', '定语表语两用，多见于通知、请假等正式场合。', 'Several staff reported that they were unwell today.', '今天有几名员工报告身体不适。', ['be unwell'], [], 'adjective', '表语', '健康'],
  ], '', ['sick'], 'brief ←?，按 §5.2 自扫根 well A1 健康的（author_w1.js 第 4 参，形容词义项），un- 作前缀取其后词根 well，「不适」即 not well，否定方向语义直连，A1 继承；家族 sick 患病的（队列原样，入第 10 参），近义 ill 生病的、sick 患病的（队列原样，置首义项恰好一次）');

  W('unwieldy', 'adjective', '/ʌnˈwiːldi/', 'C1', [], '笨重难用的；臃肿难管的', 'Too large, heavy, or complicated to handle or control.', [
    ['（物体）笨重难搬的', 'Too large or heavy to carry or move easily.', '体积过大或分量过重而不易搬运、移动的。', '定语表语两用，形容包裹、家具、工具等。', 'The unwieldy box would not fit through the door.', '这个笨重的箱子进不了门。', ['an unwieldy load'], [], 'adjective', '定语/表语', '通用'],
    ['（体系）臃肿难管理的', 'Difficult to manage or control because it is too big or too complicated.', '因过于庞大或复杂而难以管理、控制的。', '定语表语两用，形容组织、制度、条文等。', 'The council tried to reform an unwieldy system.', '委员会试图改革臃肿难管的制度。', ['an unwieldy system', 'an unwieldy rule'], ['awkward'], 'adjective', '定语/表语', '社会'],
  ], '',['wield'], 'brief ←?，按 §5.2 自扫根 wield C1 使用、挥舞、支配（author_w2.js 第 4 参），un- 之后的 wieldy 非独立词，按 §5.3 取前缀后词根 wield，「难以挥动支配 → 笨重难管」语义直连，C1 继承（判断项：词干非整词，取根方式披露）；近义 awkward 笨拙难用的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unwilling', 'adjective', '/ʌnˈwɪlɪŋ/', 'A1', [], '不情愿的；不愿听的', 'Not wanting to do something, and not ready to listen to it.', [
    ['不情愿的；勉强的', 'Not wanting to do something and not ready to do it willingly.', '不想做某事、也不乐意主动去做的。', '定语表语两用，后接动词不定式。', 'They were unwilling to sign the new contract.', '他们不愿签这份新合同。', ['be unwilling to', 'an unwilling participant'], ['reluctant'], 'adjective', '定语/表语', '心理'],
    ['不愿听的；不理会的', 'Not willing to listen to or accept a request or an argument.', '不愿听取或接受某项请求、意见的。', '定语表语两用，后接 to，属书面用法。', 'The committee stayed unwilling to hear the objections.', '委员会始终不愿听取反对意见。', ['unwilling to listen'], ['deaf'], 'adjective', '定语/表语', '书面'],
  ], '', ['reluctant'], 'brief ←?，按 §5.2 自扫根 willing A1 愿意的（author_w5.js 第 4 参），un- 作前缀取其后词根 willing，「不情愿」即 not willing，否定方向语义直连，A1 继承；家族/近义 reluctant 不情愿的（队列原样，fam 入第 10 参，syn 置首义项恰好一次），近义 deaf 不愿听的（置义项 2 恰好一次）');

  W('unwind', 'verb', '/ʌnˈwaɪnd/', 'A1', [], '解开；放松', 'To undo something wound into a coil, or to rest and relax.', [
    ['解开；展开（缠绕之物）', 'To undo something that has been wound round and round.', '把绕成圈的东西解开、摊平。', '及物动词，宾语为绳、线、缆等；也可不带宾语。', 'He unwound the rope from the fence post.', '他把绳子从栅栏柱上解了下来。', ['unwind the rope', 'unwind a cable'], [], 'verb', '及物', '工具'],
    ['放松；松弛', 'To rest and become less tense after a period of work.', '在一段工作之后休息，让紧张感消散。', '不及物动词，常与 after、with 连用。', 'I like to unwind with music after a long day.', '漫长的一天过后，我喜欢听音乐放松一下。', ['unwind after work'], ['relax'], 'verb', '不及物', '心理'],
  ], 'unwinds~unwound~unwound~unwinding',['wind'], 'brief ←?，按 §5.2 自扫根 wind A1 缠绕、卷起（author_w2.js 第 4 参，动词义项），un- 作前缀取其后词根 wind，「解开缠绕」为反向动作，语义直连，A1 继承；形变同 wind 不规则（unwound）；近义 relax 放松（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('up to', 'preposition/adjective', '/əp tuː/', '', [], '直到；由……决定；胜任；正在做', 'As far as a time or amount; decided by one person; fit enough; doing something.', [
    ['直到；不多于', 'As far as a particular time, number, or level, and no further.', '到某个时间、数量或程度为止，不再超过。', '介词，后接名词，可指时间、数量与地点。', 'We walked up to the gate and turned back.', '我们走到大门前就转身回去了。', ['up to now', 'up to ten people'], ['till', 'until'], 'preposition', '', '通用'],
    ['由……决定；取决于', 'To be decided or chosen by one particular person.', '由某一个人来决定或选择。', '常用 It is up to you 结构，在句中作表语。', 'It is up to you which route we take.', '走哪条路由你决定。', ['it is up to you'], [], 'adjective', '表语', '通用'],
    ['胜任；适合', 'Strong or well enough to deal with a particular activity.', '体力或状态足以应付某项活动。', '常用 be up to something 结构，在句中作表语。', 'She is up to the job after a good rest.', '好好休息之后，她能胜任这份工作。', ['up to the job', 'up to the task'], [], 'adjective', '表语', '通用'],
    ['正在做（尤指坏事）', 'Doing something, often something that should not be done.', '正在做某事，常指不该做的事。', '常用 be up to something 结构，多见于疑问句。', 'The children may be up to some trick in the garden.', '孩子们可能在花园里搞什么名堂。', ['up to no good'], [], 'adjective', '表语', '口语'],
  ], '', ['until'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 until 直到（队列原样，入第 10 参），近义 till、until（队列原样，置首义项恰好一次）').phrase = true;

  W('upbringing', 'noun', '/ˈʌpbrɪŋɪŋ/', 'A1', [], '抚养；教养', 'The care and teaching a child receives while growing up.', [
    ['抚养；养育过程', 'The way in which a child is cared for and taught while growing up.', '孩子在成长过程中被照顾和教导的方式。', '可数，常与 a good、strict、difficult 等连用。', 'She had a strict upbringing in a small town.', '她在一座小镇上受到严格的抚养。', ['a strict upbringing', 'in his upbringing'], ['nurture'], 'noun', 'countable', '家庭'],
    ['教养；修养', 'The manners and behaviour that someone learns from being raised.', '从家庭教育中学会的举止与修养。', '可数，常与 good、bad 连用，谈整体表现。', 'His polite manners showed a good upbringing.', '他彬彬有礼的举止显示出良好的教养。', ['show a good upbringing'], [], 'noun', 'countable', '性格'],
  ], 'upbringings',['bring'], 'brief ←?，按 §5.2 自扫根 bring A1 带来、抚养（author_b3.js 第 4 参），up- 为前缀性成分按 §5.3 取其后词根 bring（语义取自短语动词 bring up 抚养，bring 的 e→∅+ing 正字变化），「抚养长大」语义直连，A1 继承（判断项：语义来自短语动词，取根方式披露）；近义 nurture 养育、培养（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('upcoming', 'adjective', '/ˈʌpkʌmɪŋ/', 'A1', [], '即将到来的；即将出版的', 'Happening, appearing, or published very soon.', [
    ['即将到来的；即将发生的', 'Happening or taking place within a short time after now.', '在不久之后发生或出现的。', '多作定语，常与 meeting、election、deadline 连用。', 'Details of the upcoming election will be announced soon.', '即将到来的选举细节很快会公布。', ['the upcoming week', 'an upcoming event'], ['forthcoming'], 'adjective', '定语', '通用'],
    ['即将出版（或发行）的', 'Ready to be published or released in the near future.', '很快就要出版或发行的。', '多作定语，形容书籍、影片与专辑。', 'Her upcoming novel is set in Paris.', '她即将出版的小说以巴黎为背景。', ['an upcoming novel'], [], 'adjective', '定语', '出版'],
  ], '', ['forthcoming'], 'brief ←?，按 §5.2 自扫根 come A1 来（author_c3.js 第 4 参），up- 为前缀性成分按 §5.3 取其后词根 come（语义取自短语动词 come up 临近），「即将到来」语义直连，A1 继承（判断项：语义来自短语动词，取根方式披露）；家族/近义 forthcoming 即将到来的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('updraft', 'noun', '/ˈʌpdraːft/', '', [], '上升气流', 'A current of warm air that rises upwards.', [
    ['上升气流', 'A current of warm air that rises quickly through colder air.', '快速穿过较冷空气向上流动的一股暖空气。', '可数，气象与滑翔运动语境常用。', 'The glider caught an updraft above the ridge.', '滑翔机在山脊上方借到一股上升气流。', ['a thermal updraft', 'catch an updraft'], ['thermal'], 'noun', 'countable', '自然'],
  ], 'updrafts', [], 'brief ←?，按 §5.2 自扫根 draft B1 草稿、起草、征兵（author_d2.js 第 4 参），库内 draft 无「气流、通风」义（该义英语常作 draught），与「空气上升气流」语义不直连，按 §5.1 核对不通过，留空（判断项）；近义 thermal 热气流（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('upend', 'verb', '/ʌpˈend/', 'A1', [], '竖立；倒置；翻倒', 'To put something on its end, or to fall over that way.', [
    ['把……竖立；倒过来放', 'To put something on its end or turn it upside down.', '把某物竖着放，或翻过来底朝上。', '及物动词，宾语置于 upend 之后。', 'He upended the crate and sat on it.', '他把板条箱翻过来，坐在上面。', ['upend a box'], ['invert'], 'verb', '及物', '家居'],
    ['翻倒；倒立', 'To fall or be thrown over onto one end.', '翻过去，变成某一端朝下或朝上的样子。', '不及物动词，主语为物体本身。', 'The cart upended in the ditch.', '大车在沟里翻倒了。', ['upend in a ditch'], [], 'verb', '不及物', '交通'],
  ], 'upends~upended~upended~upending',['end'], 'brief ←?，按 §5.2 自扫根 end A1 末端、尽头（author_e2.js 第 4 参），up- 为前缀性成分按 §5.3 取其后词根 end（置于末端即竖起来），语义直连，A1 继承（判断项）；近义 invert 倒置（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('upheaval', 'noun', '/ʌpˈhiːvl/', 'C1', [], '剧变；动荡；地壳隆起', 'A sudden violent change, great disturbance, or upward movement of the earth.', [
    ['剧变；大变动', 'A sudden event that causes great change in a situation.', '使局势发生巨大变化的突发事件。', '可数，常与 political、social、economic 连用。', 'The reforms brought an upheaval in local government.', '这些改革带来了地方政府的大变动。', ['a political upheaval'], ['revolution'], 'noun', 'countable', '政治'],
    ['动荡；混乱', 'A state of great disturbance and disorder.', '剧烈动荡、混乱不安的状态。', '多不可数，常与 into、in 连用，形容局势与情绪。', 'The strike threw the whole industry into upheaval.', '罢工使整个行业陷入动荡。', ['in a state of upheaval'], ['turmoil'], 'noun', 'uncountable', '社会'],
    ['（地壳的）隆起', 'A sudden upward movement of part of the earth surface.', '地表某部分突然向上抬升。', '可数，地质学用语，常由地震引起。', 'The earthquake left visible upheaval along the fault.', '地震沿断层留下了明显的地层隆起。', ['crustal upheaval'], ['earthquake'], 'noun', 'countable', '科学'],
  ], 'upheavals', ['earthquake', 'turmoil'], 'brief ←?，按 §5.2 自扫根 heave C1 猛举、起伏（author_h2.js 第 4 参），up- 为前缀性成分按 §5.3 取其后词根 heave + -al（-al 在 §5.4 清单，同 author_o6.js original←origin B1 先例），「向上翻腾 → 剧变、隆起」语义直连，C1 继承（判断项）；家族 earthquake 地震、turmoil 动荡（队列原样，入第 10 参），近义 revolution 革命置首义项、turmoil 动荡置义项 2、earthquake 地震置义项 3 各恰好一次');

  W('upland', 'noun/adjective', '/ˈʌplənd/', 'A2', [], '高地；高地的', 'Land that is high and far from the sea, or living in such land.', [
    ['高地；内陆高原地区', 'High land that lies a long way from the sea.', '远离海洋的高海拔地区。', '可数，常用复数 uplands 指大片高地。', 'The sheep graze on the uplands above the village.', '羊群在村庄上方的高地上吃草。', ['the uplands'], ['plateau'], 'noun', 'countable', '地理'],
    ['高地的；高原的', 'Living, growing, or happening in high land.', '生长或发生在高地上的。', '作定语，常修饰 climate、village、farm。', 'They farm the upland slopes of the valley.', '他们在山谷的高地坡地上耕作。', ['upland farms'], [], 'adjective', '定语', '农业'],
  ], 'uplands',['land'], 'brief ←?，按 §5.2 自扫根 land A2 土地、陆地（author_l1.js 第 4 参），up- 为前缀性成分按 §5.3 取其后词根 land（高处的土地即高地），语义直连，A2 继承（判断项）；近义 plateau 高原（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('upmarket', 'adjective', '/ˈʌpmɑːkɪt/', 'A2', [], '高档的；向高端发展的', 'Made for the rich end of the market, or moving towards it.', [
    ['高档的；面向高端市场的', 'Made or sold for people at the rich end of the market.', '面向市场高端、为富裕人群制作或销售的。', '定语表语两用，形容品牌、商店与住宅区。', 'They moved to the upmarket part of town.', '他们搬到了城里的高档地段。', ['an upmarket brand', 'an upmarket hotel'], ['fancy'], 'adjective', '定语/表语', '商务'],
    ['向高端发展的；升级的', 'Becoming more expensive or more high class in style.', '变得价格更高、格调更高级。', '定语表语两用，可与 go、move 连用谈转型。', 'The brand has gone upmarket in recent years.', '这个品牌近年来走起了高端路线。', ['go upmarket'], [], 'adjective', '表语', '商务'],
  ], '',['market'], 'brief ←?，按 §5.2 自扫根 market A2 市场（author_m1.js 第 4 参），up- 为前缀性成分按 §5.3 取其后词根 market（市场上端即高端、高档），语义直连，A2 继承（判断项）；近义 fancy 高档的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('upper arm', 'noun', '/ˈʌpə ɑːm/', '', [], '上臂', 'The part of the arm between the shoulder and the elbow.', [
    ['上臂', 'The part of the arm that lies between the shoulder and the elbow.', '从肩部到肘部之间的那一段手臂。', '可数，由 upper 与 arm 构成的名词短语，常与 the 连用。', 'The injury is in the muscle of his upper arm.', '伤在他上臂的肌肉上。', ['the upper arm', 'a muscle in the upper arm'], ['shoulder'], 'noun', 'countable', '健康'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 shoulder 肩部、肩膀（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('upper floor', 'noun', '/ˈʌpə flɔː/', '', [], '楼上；上层楼面', 'A floor of a building above the ground floor.', [
    ['楼上；上层楼面', 'A floor of a building that is above the one you are on now.', '位于你所在楼层之上的那一层。', '可数，由 upper 与 floor 构成的名词短语。', 'The bedrooms are on the upper floor.', '卧室在楼上那一层。', ['on the upper floor'], ['upstairs'], 'noun', 'countable', '家居'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 upstairs 楼上、在楼上（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('upper house', 'noun', '/ˈʌpə haʊs/', '', [], '上议院', 'The smaller and usually more senior chamber of a parliament.', [
    ['上议院', 'The smaller and usually more senior of the two chambers of a parliament.', '议会两院中规模较小、通常地位更高的那一院。', '可数，常与 the 连用，句首字母可大写。', 'The bill passed the upper house without a change.', '该法案在上议院原样通过。', ['the upper house'], ['senate'], 'noun', 'countable', '政治'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 senate 参议院、上议院（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('uprightness', 'noun', '/ˈʌpraɪtnəs/', 'B2', [], '正直；诚实', 'The quality of being honest and morally straight.', [
    ['正直；诚实', 'The quality of being honest, fair, and strong in morals.', '为人诚实、公正、在道德上坚定不移的品质。', '不可数，正式用语，多形容人品。', 'Nobody doubted the uprightness of his motives.', '没有人怀疑他动机的正直。', ['moral uprightness'], ['integrity'], 'noun', 'uncountable', '性格'],
  ], '',['upright'], 'brief 根提示 ←upright B2 正直的、垂直的（自扫 author_u1.js 第 4 参复核为 B2）+ -ness（-ness 在 §5.4 清单，同 author_b5.js abruptness←blunt C1 先例），B2 继承；抽象不可数故 forms 留空；近义 integrity 正直、诚实（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('uproot', 'verb', '/ʌpˈruːt/', 'B1', [], '连根拔起；使流离失所；根除', 'To pull a plant out by the roots, force people from home, or remove completely.', [
    ['连根拔起', 'To pull a plant out of the ground together with its roots.', '把植物连同根一起从地里拔出来。', '及物动词，本义为农业与园艺动作。', 'They uprooted the old hedge before rebuilding the wall.', '他们在重砌墙之前把旧树篱连根挖掉。', ['uproot a tree'], [], 'verb', '及物', '农业'],
    ['使离开家园；迁走', 'To force people to leave their homes and live somewhere else.', '迫使人们离开家园、到别处生活。', '及物动词，常用于战争与开发等语境。', 'The war uprooted thousands of families.', '战争迫使成千上万的家庭流离失所。', ['uproot a community'], ['displace'], 'verb', '及物', '社会'],
    ['根除；铲除', 'To get rid of something completely and permanently.', '彻底而永久地除掉某事物。', '及物动词，宾语为弊病、陋习等抽象事物。', 'The new rules uprooted the old practice.', '新规定铲除了旧的做法。', ['uproot an evil'], ['eradicate'], 'verb', '及物', '社会'],
  ], 'uproots~uprooted~uprooted~uprooting', ['displace', 'eradicate'], 'brief ←?，按 §5.2 自扫根 root B1 根（author_r2.js 第 4 参，名词与动词义项），up- 为前缀性成分按 §5.3 取其后词根 root（连根而起），语义直连，B1 继承（判断项）；家族 displace 使流离失所、eradicate 根除（队列原样，入第 10 参），近义 displace 置义项 2、eradicate 置义项 3 各恰好一次');

  W('upshot', 'noun', '/ˈʌpʃɒt/', '', [], '结果；最终结论', 'The final result of a series of events or a discussion.', [
    ['结果；结局', 'The final result of a series of events or a long discussion.', '一系列事件或长时间讨论之后的最终结果。', '可数，几乎总与 the 连用，后接 of。', 'The upshot was that nobody got the promotion.', '结果是谁也没有得到晋升。', ['the upshot of'], ['outcome'], 'noun', 'countable', '通用'],
  ], '', [], 'brief ←?，按 §5.2 自扫根 shot A2 开枪、射门、镜头、尝试（author_s2.js 第 4 参），库内 shot 无「结果、要点」义，与 upshot 的「最终结果」语义不直连，按 §5.1 核对不通过，留空（判断项）；the upshot 固定与 the 连用、复数罕用，故 forms 留空；近义 outcome 结果（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('upturn', 'noun', '/ˈʌptɜːn/', 'A1', [], '好转；上升', 'An improvement or rise in trade or activity.', [
    ['（经济、贸易的）好转、上升', 'An improvement in the level of trade, business, or activity.', '贸易、生意或活动水平的提高。', '可数，常与 in、in trade 连用。', 'Business has shown an upturn this quarter.', '本季度生意出现了好转。', ['an upturn in trade', 'an economic upturn'], ['increase'], 'noun', 'countable', '商务'],
  ], 'upturns',['turn'], 'brief ←?，按 §5.2 自扫根 turn A1 转、转向（author_t3.js 第 4 参），up- 为前缀性成分按 §5.3 取其后词根 turn（向上转即上升、好转），语义直连，A1 继承（判断项）；近义 increase 增长、上升（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('upwards', 'adverb', '/ˈʌpwədz/', 'B1', ['CET4'], '向上；往上；（数量）以上', 'Towards a higher place or level, or more than a number.', [
    ['向上；往上', 'Towards a higher place, level, or position.', '朝着更高的位置、层次或方向。', '副词，修饰动词，常与 from、to 连用。', 'The path heads upwards from the village.', '小路从村子向高处延伸。', ['move upwards', 'from the valley upwards'], ['upward'], 'adverb', '不及物', '通用'],
    ['（数量）以上；超过', 'More than a particular number or amount.', '超过某个数量或数额。', '副词，修饰数字与范围，常与 and 连用。', 'The hall takes parties aged twelve and upwards.', '这个场地接待十二岁及以上的团体。', ['twelve and upwards'], [], 'adverb', '不及物', '通用'],
  ], '', ['upward'], 'brief 根提示 ←upward B1 向上的（自扫 author_u1.js 第 4 参复核为 B1），upwards 为 upward 加 -s 的副词形（forwards、backwards 同类词形），B1 继承（判断项）；副词故 forms 留空；家族/近义 upward 向上的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）；CET4 标签照抄队列');

  W('urbanite', 'noun', '/ˈɜːbənaɪt/', '', [], '城市居民', 'A person who lives in a large city.', [
    ['城市居民', 'A person who lives in a large city and is used to city life.', '居住在大城市、习惯了城市生活的人。', '可数，正式或略带幽默的说法，与 rural resident 相对。', 'Few urbanites know where their food is grown.', '很少有城市居民知道自己的食物种在哪里。', ['a confirmed urbanite'], ['metropolitan'], 'noun', 'countable', '社会'],
  ], 'urbanites', [], 'brief ←?，按 §5.2 自扫根 urban B2 城市的（author_u1.js 第 4 参），-ite 不在 §5.4 可继承清单，库内亦无 -ite 后缀继承先例（elite B2、parasite C1 均为非派生借词），按 §4c「无先例且无把握」留空（判断项）；近义 metropolitan 大都市的、大都市人（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('use up', 'verb', '/juːz ʌp/', '', [], '用完；耗尽', 'To use all of something until none is left.', [
    ['用完；耗尽（钱、时间、资源）', 'To use all of a supply of money, time, or material.', '把钱、时间、材料等供应全部用掉。', '及物短语动词，宾语可置于 use 与 up 之间。', 'The building work used up the whole budget.', '这项建筑工程用光了全部预算。', ['use up the money', 'use up a supply'], ['consume', 'expend', 'spend'], 'verb', '及物', '商务'],
    ['用光（力气、耐心）；使筋疲力尽', 'To use up all the patience or energy that is available, or to make someone very tired.', '把可用的耐心与精力全部耗掉，或使人极度疲惫。', '及物短语动词，宾语可置于两词之间。', 'The long wait used up all my patience.', '漫长的等待耗尽了我全部耐心。', ['use up your energy'], ['exhaust'], 'verb', '及物', '心理'],
  ],'uses up~used up~using up', ['consume', 'expend'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 consume 消耗、expend 花费（队列原样，入第 10 参）；近义 consume 消耗、expend 花费、spend 花掉置首义项，exhaust 耗尽置义项 2，各恰好一次').phrase = true;

  W('used to', 'verb', '/juːst tuː/', '', [], '过去常常；习惯于', 'To have done something regularly in the past, or to be accustomed to something.', [
    ['（过去）常常', 'To do something regularly in the past but not any longer.', '过去经常做某事，现在已不再如此。', '情态结构后接动词原形，只用于过去时，否定与疑问不用 did。', 'We used to walk to school every day.', '我们过去常常每天步行上学。', ['used to do'], ['would'], 'verb', '及物', '语法'],
    ['习惯于', 'To be familiar with something because you have experienced it many times.', '因为多次经历而对某事习以为常。', '常用 be used to 加名词或动名词的结构，在句中作表语。', 'She is used to waking up early on weekdays.', '她习惯于工作日早起。', ['be used to', 'get used to'], ['accustomed'], 'verb', '及物', '语法'],
  ],'useds to~useded to~useding to', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 would 过去常常置首义项、accustomed 习惯于的置义项 2，各恰好一次；fam 队列为空故第 10 参 []').phrase = true;

  W('useful', 'adjective', '/ˈjuːsfl/', 'A1', ['CET4'], '有用的；有益的；值得做的', 'Able to help you do something or to achieve a result.', [
    ['实用的；顺手的', 'Working well and saving effort when you use it.', '用起来省力好使的。', '定语表语两用，形容工具、技巧与窍门。', 'A torch is useful when the power fails.', '停电时手电筒就派上用场了。', ['a useful tool', 'a useful tip'], ['handy', 'practical'], 'adjective', '定语/表语', '通用'],
    ['有帮助的；有益的', 'Providing help or benefit to someone in a situation.', '在某种情形下能给人帮助或好处的。', '定语表语两用，后接 to、for。', 'Her advice was useful to the whole team.', '她的建议对整个团队都有帮助。', ['useful for', 'useful to'], ['good'], 'adjective', '定语/表语', '通用'],
    ['值得做的；有成效的', 'Worth the time and effort that you spend on it.', '值得花时间和精力去做的。', '定语表语两用，形容活动、练习与习惯。', 'Reading widely is a useful habit for any student.', '广泛阅读是任何学生都值得养成的习惯。', ['a useful exercise'], ['worthwhile'], 'adjective', '定语/表语', '教育'],
  ], '', ['handy', 'practical'], 'brief ←?，按 §5.2 自扫根 use A1 使用（author_u1.js 第 4 参）+ -ful（-ful 在 §5.4 清单，同 author_o6.js orderly←order A2 先例），A1 继承；家族 handy 顺手的、practical 实用的（队列原样，入第 10 参），近义 handy 置首义项、practical 置首义项、good 置义项 2、worthwhile 置义项 3 各恰好一次；CET4 标签照抄队列');

  W('usefulness', 'noun', '/ˈjuːsnəs/', 'A1', [], '有用；实用性', 'The quality of being useful and able to help.', [
    ['有用；实用性', 'The quality of being able to help people or serve a purpose.', '能够帮助人或达到某种用途的性质。', '不可数，常与 of 连用，谈某物的价值。', 'Nobody questioned the usefulness of the new tool.', '没有人怀疑这件新工具的实用性。', ['question the usefulness of', 'practical usefulness'], ['utility'], 'noun', 'uncountable', '通用'],
  ], '', ['utility'], 'brief ←?，按 §5.2 自扫根 useful A1 有用的（本批同文件条目，由 use A1 + -ful 派生）+ -ness（-ness 在 §5.4 清单，同 author_b5.js abruptness←blunt C1 先例），A1 继承（判断项：根取同批文件派生词，沿 use A1 + -ful + -ness 逐层继承亦同级）；抽象不可数故 forms 留空；家族/近义 utility 有用、效用（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
