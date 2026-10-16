/* data/words/cet/author_s12.js — 常用词 S 批次 12，缺口 sensitivity ~ seventeenth，共 31 条
 * （25 单词 + 6 短语：set apart、set aside、set fire to、set off、set up、seven days）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：sensitivity、sensor、separation、sequential、service、serving、settlement，共 7 条；无 CET6）。
 * 扫根结论：sensitive B2、separate A2、serious A2、serve A2、settle B1（brief 根提示），
 * sense A2、sentiment C1、sequence B2、separate A2、serious A2、serve A2、set A1、seventeen A1
 * （本批自扫，均在 author_s5.js）——
 * · 透明后缀/同根继承：sensitivity←sensitive B2 + -ity、separately←separate A2 + -ly、
 *   separation←separate A2 去 e + -ation（e→∅+ation 正字类）、sequential←sequence B2 + -al、
 *   seriously←serious A2 + -ly、seriousness←serious A2 + -ness、server←serve A2 + -er、
 *   serving←serve A2 + -ing、settlement←settle B1 + -ment、settler←settle B1 + -er、
 *   sensor←sense A2 去 e + -or（e→∅+or，同 e→∅+ation 正字类）、
 *   seventeenth←seventeen A1 + -th（数词特例，先例 author_e3.js:112 eighteenth）；
 * · 判断项继承：sentimentality←sentiment C1 + -ity（-ity 不在本批清单，按库内 ambiguity/animality/sensitivity 先例）、
 *   service←serve A2 去 e + -ice（-ice 不在本批清单，按库内 just→justice 先例）、
 *   serviceman←service A2（首成分在库，复合词取首成分，同 firefighter←fire、run-up←run 先例）、
 *   setup←set A1（复合词取首成分，同 run-up←run 先例，整体义由 set up 引申）；
 * · 留空项：serene（拉丁 serenus，库内无根）、sentry（法语 sentinelle，sentinel 不在库）、
 *   serf（与 serve 同源但现代语义不直连，切词假象判断项）、sermon（拉丁 sermo，preach 仅家族）、
 *   sermonize（sermon 本批入库无级可继，-ize 无根可继）、serpent（拉丁 serpere，库内无根）、
 *   serum（拉丁 serum 体液，库内无根）、serviette（-ette 不在清单且 serve 未全段可见，
 *   同 cassette/launderette 先例）、settee（-ee 不在清单，settle 未全段可见，与 set 不直连，判断项），
 *   及 6 个短语（整体不取成分作根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s12.js 必须在 _cet_helper.js 之后加载');

  W('sensitivity', 'noun', '/ˌsensəˈtɪvəti/', 'B2', ['CET4'], '敏感；敏感性；体贴', 'The quality of being easily hurt by remarks, or of understanding how other people feel.', [
    ['敏感；敏感性', 'The quality of being easily upset or hurt by words or events.', '容易被言语或事情惹恼、伤害的特质。', '不可数；也指感官对刺激的反应，常与 to 连用。', 'She showed great sensitivity to the feelings of others.', '她对他人的感受表现出很大的体谅。', ['sensitivity to criticism', 'emotional sensitivity'], ['delicacy'], 'noun', 'uncountable', '心理'],
    ['体谅；得体', 'The quality of thinking carefully before acting so that people do not feel upset.', '行动前细心考虑、不让人难过的素质。', '不可数，多指待人接物的分寸感。', 'She handled the awkward question with real sensitivity.', '她以真正的分寸感处理了那个尴尬的问题。', ['social sensitivity'], ['tact'], 'noun', 'uncountable', '社交'],
    ['（复数）敏感问题；忌讳', 'Topics that make people feel upset and that they would rather not discuss.', '让人心里不舒服、宁愿避而不谈的话题。', '常用复数 sensitivities，常与 political/social 连用。', 'The report touched on several political sensitivities.', '这份报告触及了若干政治敏感问题。', ['political sensitivities'], [], 'noun', 'countable', '社会'],
  ], 'sensitivities', ['delicacy'], 'brief 根提示 ←sensitive B2 敏感的 + -ity（透明名词后缀，同库内 ambiguity/animality 先例），B2 继承；家族 delicacy 精细、娇弱，近义 delicacy（置敏感性义项）、tact 分寸得体（置体谅义项），均队列原样');

  W('sensor', 'noun', '/ˈsensə/', 'A2', ['CET4'], '传感器；感应器', 'A measuring gadget that feeds readings into a machine or a system.', [
    ['传感器；感应器', 'A device that measures something such as light, heat or movement and passes the information on to a computer.', '测量光、热或运动等并把信息传给计算机的装置。', '可数；常见搭配 motion sensor、smoke sensor。', 'The sensor turns the light on when it detects movement.', '探测到动作时传感器会把灯打开。', ['motion sensor', 'smoke sensor'], ['probe', 'thermometer'], 'noun', 'countable', '科学'],
  ], 'sensors',['sense'], 'brief 显示 ←?，自行扫根 sense A2（author_s5）——sense 去 e + -or（e→∅+or，同 e→∅+ation 正字类），A2 继承；近义 probe 探测器、thermometer 温度计（队列原样）');

  W('sentimentality', 'noun', '/ˌsentɪmenˈtæləti/', 'C1', [], '多愁善感；感情用事', 'An exaggerated display of feeling, often seen as lacking restraint.', [
    ['多愁善感；感情用事', 'Excessive tenderness or emotion, especially in a story or a work of art.', '（尤指故事或艺术品中）过分的柔情与感伤。', '不可数，常含贬义。', 'Critics attacked the ending for its display of unrestrained feeling.', '评论家批评结尾处毫无节制的抒情。', ['unrestrained feeling', 'cheap display'], ['sentiment'], 'noun', 'uncountable', '情感'],
  ], '',['sentiment'], 'brief 显示 ←?，自行扫根 sentiment C1（author_s5）——sentiment 情感 + -ity（按库内 sensitivity/ambiguity/animality 的 -ity 先例），C1 继承（判断项：-ity 不在本批可继清单）；近义 sentiment 情感、情绪（队列原样）');

  W('sentry', 'noun', '/ˈsentrɪ/', '', [], '哨兵；岗哨', 'A person whose duty is to keep watch over a place.', [
    ['岗哨；哨兵', 'A soldier stationed to watch at a gate or another entrance.', '被派在大门或其他入口看守的士兵。', '可数，常与 on/off 连用。', 'A young sentry stood at the gate all night.', '一名年轻哨兵整夜守在大门口。', ['post a sentry', 'stand sentry'], ['guard'], 'noun', 'countable', '军事'],
  ], 'sentries', ['guard'], '库内无可见词根——法语 sentinelle（岗哨），sentinel 不在库，guard 为家族同义词非构词根，留空；家族/近义 guard 哨兵、看守（队列原样）');

  W('separately', 'adverb', '/ˈseprətli/', 'A2', [], '分开地；各自地', 'One by one or at a different place or time, not together with others.', [
    ['分开地；各自地', 'In a separate way; not together with another person or thing.', '以分开的方式；不与他人或他物在一处。', '与 keep、treat 等连用，修饰动词。', 'The two parts are packed separately.', '这两部分分开包装。', ['treated separately'], ['apart'], 'adverb', '不及物', '通用'],
  ], '',['separate'], 'brief 根提示 ←separate A2 分开的 + -ly（透明副词后缀），A2 继承；近义 apart 分开、不在一处（队列原样）');

  W('separation', 'noun', '/ˌseprəˈreɪʃn/', 'A2', ['CET4'], '分离；分居；隔开', 'The act of living apart or of keeping two things apart.', [
    ['分离；分居', 'The state of living away from somebody, or the process of ending a relationship.', '与某人分开生活，或结束一段关系的过程。', '可数，常与 of 连用；法律语境指分居。', 'Their separation after the argument was painful.', '争吵后的分居让他们很痛苦。', ['legal separation'], ['divorce'], 'noun', 'countable', '法律'],
    ['分离；隔离', 'The act of dividing things or keeping them from touching each other.', '把东西分开、或使互不接触的行为。', '不可数，常见于科学与工程语境。', 'The separation of salt from water needs heat.', '把盐从水中分离开需要加热。', ['phase separation'], [], 'noun', 'uncountable', '科学'],
  ], 'separations', ['divorce'], 'brief 显示 ←?，自行扫根 separate A2（author_s5）——separate 去 e + -ation（e→∅+ation 正字类），A2 继承；家族/近义 divorce 离婚（队列原样，置分居义项）');

  W('sequential', 'adjective', '/sɪˈkwenʃl/', 'B2', ['CET4'], '按顺序的；连续的', 'Dealing with items one after another in a fixed order.', [
    ['按顺序的；连续的', 'Following a fixed order, with each part coming after the one before it.', '按照固定顺序、每一部分接在前一部分之后的。', '多作定语，常修饰 process、number 等。', 'The data was entered in sequential order.', '数据是按顺序录入的。', ['sequential order', 'sequential processing'], ['serial'], 'adjective', '定语', '科学'],
  ], '',['sequence'], 'brief 显示 ←?，自行扫根 sequence B2（author_s5）——sequence 顺序 + -al（透明形容词后缀），B2 继承；近义 serial 连续的、系列的（队列原样）');

  W('serene', 'adjective', '/səˈriːn/', '', [], '宁静的；安详的', 'Not troubled by anything, quiet in feeling or in appearance.', [
    ['宁静的；安详的', 'Calm, peaceful and free from worry or disturbance.', '平静、安宁而无忧无扰的。', '可作定语或表语，常形容天气、面容与心境。', 'The lake was serene in the early morning.', '清晨的湖面一片宁静。', ['a serene expression'], ['tranquil'], 'adjective', '定语/表语', '自然'],
    ['（天空）晴朗的', 'Of the sky or weather: clear, calm and free from cloud.', '（天空或天气）晴朗无云的。', '文学与正式语体，多作定语。', 'They sailed on beneath a serene blue sky.', '他们一路航行，头顶是晴朗的蓝天。', ['serene sky'], [], 'adjective', '定语', '自然'],
  ], '', ['serenity'], 'serenity 是名词，表示宁静、安详；tranquil 是宁静义的近义词。');

  W('serf', 'noun', '/sɜːf/', '', [], '农奴', 'A person who in the Middle Ages had to work for a landowner.', [
    ['农奴', 'A person in former times who was forced to work on the land of a landowner and could not leave it.', '旧时被迫在领主土地上劳动、且不能离开的人。', '可数；历史上指中世纪欧洲的农奴。', 'A serf had to give part of the harvest to the lord.', '农奴必须把一部分收成交给领主。', ['a feudal serf'], ['slave'], 'noun', 'countable', '历史'],
  ], 'serfs', ['slave'], 'brief 显示 ←?，自行扫根——与 serve A2 同源（拉丁 servus「奴仆」），但现代语义「农奴」与「服务」不直连，切词假象判定留空（判断项）；家族/近义 slave 奴隶（队列原样）');

  W('seriously', 'adverb', '/ˈsɪəriəsli/', 'A2', [], '严重地；认真地', 'To a great degree, or in a way that shows you care about something.', [
    ['严重地；大幅度地', 'In a way that causes serious harm or a serious result.', '以造成严重伤害或严重后果的方式。', '修饰动词。常与 harm、damage 等连用。', 'The storm seriously damaged the roof.', '暴风雨严重损坏了屋顶。', ['seriously damage', 'seriously ill'], [], 'adverb', '不及物', '健康'],
    ['认真地；郑重地', 'In a way that shows you give something your full attention.', '以表明你全神贯注于某事的方式。', '修饰动词。常与 take、talk、consider 等连用。', 'He took the warning seriously and locked the door.', '他认真对待那个警告，锁上了门。', ['take it seriously', 'seriously consider'], ['earnest'], 'adverb', '不及物', '通用'],
  ], '',['serious'], 'brief 根提示 ←serious A2 严肃的 + -ly（透明副词后缀），A2 继承；近义 earnest 认真、郑重（队列原样，置认真义项）');

  W('seriousness', 'noun', '/ˈsɪəriəsnəs/', 'A2', [], '严肃；认真；严重性', 'Being serious, and the degree to which something matters.', [
    ['严肃；认真', 'The quality of being serious in the way you think or behave.', '思考或举止严肃认真的特质。', '不可数，常与 with 连用。', 'He explained the new rules with complete seriousness.', '他以完全认真的态度讲解了新规则。', ['with complete seriousness'], ['gravity'], 'noun', 'uncountable', '性格'],
    ['严重性；重大程度', 'How serious or important a problem or an event is.', '问题或事件有多严重、有多重要。', '不可数，常与 of 连用。', 'The report made clear the seriousness of the situation.', '报告说明了局势的严重性。', ['the seriousness of the crisis'], ['magnitude'], 'noun', 'uncountable', '社会'],
  ], '', ['gravity'], 'brief 根提示 ←serious A2 严肃的 + -ness（透明名词后缀），A2 继承；家族 gravity 严肃、庄重，近义 gravity（置严肃义项）、magnitude 重大程度（置严重性义项），均队列原样');

  W('sermon', 'noun', '/ˈsɜːmən/', '', [], '布道；说教', 'A religious talk, or a long speech about how people should behave.', [
    ['布道；讲道', 'A talk given by a priest or minister during a religious service.', '牧师在宗教仪式上发表的讲话。', '可数，常与 on 连用。', 'The sermon lasted nearly forty minutes.', '布道持续了近四十分钟。', ['deliver a sermon', 'a sermon on kindness'], [], 'noun', 'countable', '宗教'],
    ['说教；训诫', 'A long speech that tells people how they should behave.', '告诉人们应当如何行事的长篇大论。', '可数，常带厌烦语气。', 'She gave us another sermon about keeping the kitchen clean.', '她又就保持厨房干净给我们来了一番训诫。', ['another sermon'], [], 'noun', 'countable', '口语'],
  ], 'sermons', ['preach'], '库内无可见词根——拉丁 sermo「谈话」，preach 为家族同义词非构词根，留空；家族 preach 讲道（队列原样，syn 为空故只入家族组）');

  W('sermonize', 'verb', '/ˈsɜːmənaɪz/', '', [], '布道；说教', 'To lecture people at length about morals or about religion.', [
    ['布道；说教', 'To give a long religious talk, or to speak at length about how people ought to behave.', '作长篇宗教讲话，或长篇大论地谈论人们应当如何行事。', '多作不及物，常与 about/at 连用。', 'He sermonized about honesty for half an hour.', '他讲了半小时关于诚实的大道理。', ['sermonize at length'], ['preach'], 'verb', '不及物', '宗教'],
  ], 'sermonizes~sermonized~sermonized~sermonizing', [], 'brief 显示 ←?——sermon 本批入库但其 CEFR 留空（-on 不在可继清单），-ize 虽透明却无级可继，留空；近义 preach 讲道、布道（队列原样）');

  W('serpent', 'noun', '/ˈsɜːpənt/', '', [], '大蛇；毒蛇', 'A big legless creature that appears in many stories.', [
    ['大蛇；毒蛇', 'A big reptile with a long body and no legs, often seen as dangerous.', '体长无足的爬行动物，常被视为危险动物。', '可数；文学语境常带威胁色彩。', 'A serpent slid silently into the tall grass.', '一条大蛇无声地滑入了高草丛中。', ['a giant serpent'], ['snake'], 'noun', 'countable', '自然'],
  ], 'serpents', ['snake'], 'brief 显示 ←?，自行扫根——拉丁 serpere「爬行」，库内无可见词根，snake 为家族同义词非构词根，留空；家族/近义 snake 蛇（队列原样）');

  W('serum', 'noun', '/ˈsɪərəm/', '', [], '血清；浆液', 'A medical liquid prepared from blood and given to patients.', [
    ['血清；浆液', 'The clear liquid part of blood, or a liquid taken from blood and used to treat illness.', '血液中澄清的液体，或从血液中提取、用于治病的液体。', '可数，指一份制剂；医学与实验语境。', 'The patient was given a serum against the virus.', '病人被注射了对抗该病毒的血清。', ['immune serum'], ['vaccine'], 'noun', 'countable', '健康'],
  ], 'serums', [], 'brief 显示 ←?，自行扫根——拉丁 serum「体液」，库内无可见词根，留空；近义 vaccine 疫苗（队列原样）');

  W('server', 'noun', '/ˈsɜːvə/', 'A2', [], '服务器；服务员', 'A computer that stores and sends data, or a person who waits on tables.', [
    ['服务器', 'A computer that stores information and sends it to other computers.', '储存信息并把它发送给其他计算机的机器。', '可数；网络与云计算语境。', 'The server went down during the sale.', '促销期间服务器宕机了。', ['file server', 'server room'], ['host'], 'noun', 'countable', '科学'],
    ['（餐厅）服务员', 'A person who brings food to the tables in a restaurant.', '在餐厅把食物端上桌的人。', '可数；美式用词，英式常说 waiter。', 'The server brought the bread to our table.', '服务员把面包端到了我们这一桌。', ['a table server'], [], 'noun', 'countable', '饮食'],
  ], 'servers',['serve'], 'brief 根提示 ←serve A2 服务 + -er（透明名词后缀，施事与器物），A2 继承；近义 host 主机、主人（队列原样，置服务器义项）');

  W('service', 'noun', '/ˈsɜːvɪs/', 'A2', ['CET4'], '服务；保养；礼拜；班车', 'Help or work done for others, and the regular running or care of things.', [
    ['服务；服务性工作', 'The work of helping people or doing things for them.', '帮助他人或为他人做事的工作。', '不可数；也指为顾客提供的工作。', 'The hotel is known for its friendly service.', '这家酒店以服务热情著称。', ['customer service', 'provide a service'], [], 'noun', 'uncountable', '商务'],
    ['公共服务；公用事业', 'A system that supplies water, electricity or transport to the public.', '向公众提供水、电或交通的系统。', '可数，常用复数 services。', 'The water service was interrupted for two days.', '供水服务中断了两天。', ['public services', 'bus services'], ['utility'], 'noun', 'countable', '社会'],
    ['保养；检修', 'The work of keeping machines or vehicles in good condition.', '使机器或车辆保持良好状态的工作。', '可数或不可数；动词短语为 service the car。', 'The car was taken in for a full service.', '车子被送去做了全面检修。', ['full service', 'in service'], ['maintain', 'overhaul'], 'noun', 'uncountable', '工业'],
    ['宗教仪式；礼拜', 'A Christian meeting for worship, or the ceremony held at it.', '基督教的礼拜聚会或按仪式举行的聚会。', '可数，用于宗教场合。', 'They held a service for the families on Sunday.', '他们星期天为家属举行了一场礼拜。', ['hold a service'], ['mass'], 'noun', 'countable', '宗教'],
    ['接驳服务；定期班车', 'A regular service that carries people or goods a short distance between two places.', '在两地之间短途运送人或货物的定期交通服务。', '可数，常与 bus/ferry 连用。', 'A free service runs from the station to the campus.', '有免费班车往返于车站和校园之间。', ['ferry service', 'service route'], ['shuttle'], 'noun', 'countable', '交通'],
  ], 'services', ['utility'], 'brief 显示 ←?，自行扫根 serve A2（author_s5）——serve 去 e + -ice（e→∅+ice，同 just→justice 的 -ice 先例），A2 继承（判断项：-ice 不在本批可继清单）；家族 utility 公用事业，近义分置：utility（置公用事业义项）、maintain 保养与 overhaul 大修（置检修义项）、mass 弥撒（置礼拜义项）、shuttle 接驳班车（置班车义项），均队列原样');

  W('serviceman', 'noun', '/ˈsɜːvɪsmən/', 'A2', [], '军人；现役人员', 'A member of the army, navy or air force.', [
    ['军人；现役人员', 'A person who belongs to the armed forces of a country.', '属于一国武装部队的人。', '可数，复数 servicemen，常指现役人员。', 'A serviceman was honoured at the ceremony.', '一名军人在仪式上受到表彰。', ['a serviceman in uniform'], ['soldier'], 'noun', 'countable', '军事'],
  ], 'servicemen',['service'], 'brief 显示 ←?——首成分 service 本批入库（A2，见本文件 service 条），复合词取首成分级（同 firefighter←fire、run-up←run 先例），A2 继承（判断项：service 的 -ice 继承本身为判断项）；近义 soldier 士兵（队列原样）');

  W('serviette', 'noun', '/ˌsɜːviˈet/', '', [], '餐巾；纸巾', 'The table item used to wipe hands and mouth while eating.', [
    ['餐巾；纸巾', 'A piece of paper or cloth used at a meal to protect your clothes.', '吃饭时用来保护衣物的一张纸或一块布。', '可数；英式用词，多为纸质。', 'She wiped her hands on a paper serviette.', '她用纸餐巾擦了擦手。', ['paper serviette'], ['napkin'], 'noun', 'countable', '饮食'],
  ], 'serviettes', ['napkin'], 'brief 显示 ←?——法语 -ette 指小后缀不在可继清单，serve 未在 serviette 中全段可见（同 cassette、launderette 先例），留空（判断项）；家族/近义 napkin 餐巾（队列原样）');

  W('serving', 'noun', '/ˈsɜːvɪŋ/', 'A2', ['CET4'], '一份；分菜餐具', 'What one eater receives at a meal, plus the big dish used to hand food round.', [
    ['一份（食物）', 'An amount of food served to one person at a meal.', '一餐中供给一个人的食物量。', '可数，常与 of 连用。', 'Each serving feeds about four people.', '每份大约供四人食用。', ['a serving of rice'], ['portion'], 'noun', 'countable', '饮食'],
    ['分菜餐具', 'A large spoon or dish used for giving food to people at the table.', '餐桌上用来给人分食物的大勺或大盘。', '可数，常与 spoon/dish 连用。', 'Put the large spoon down beside the bowl, not on the cloth.', '把大勺放在碗边，不要放在桌布上。', ['serving spoon'], ['plate'], 'noun', 'countable', '家居'],
  ], 'servings',['serve'], 'brief 根提示 ←serve A2 服务 + -ing（透明名词后缀），A2 继承；近义 portion 一份与 plate 盘子（队列原样，分置两义项）');

  W('set apart', 'verb', '/set əˈpɑːt/', '', [], '使区分开；使显得突出', 'To separate one person or thing so that it gets noticed.', [
    ['使区分开；使显得突出', 'To make somebody or something different from all the others.', '使某人或某物与其余所有区别开来。', '可及物短语，宾语可置于 apart 前或后。', 'His skill sets him apart from the rest of the team.', '他的技术使他与队里其他人区别开来。', ['set him apart', 'set apart from'], ['distinguish'], 'verb', '及物', '书面'],
  ], '', ['distinguish'], '短语整体不取成分作根，分级留空；家族/近义 distinguish 区分、辨别（队列原样，短语条目）').phrase = true;

  W('set aside', 'verb', '/set əˈsaɪd/', '', [], '留出；暂不考虑', 'To save a thing for another day, or to leave a question undecided.', [
    ['留出；暂不考虑', 'To keep something for a later use, or to ignore a decision until a later time.', '把某物留待后用，或把某个决定推迟到以后。', '可及物短语，宾语可置于 aside 前或后。', 'She set aside an hour each day for reading.', '她每天留出一小时用来阅读。', ['set aside time', 'set it aside'], ['reserve'], 'verb', '及物', '商务'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 reserve 留出、储备（队列原样，短语条目）').phrase = true;

  W('set fire to', 'verb', '/set ˈfaɪə tuː/', '', [], '放火；点燃', 'To burn something deliberately.', [
    ['放火；点燃', 'To make something start burning on purpose.', '故意使某物燃烧起来。', '可及物短语；名词形式为 set fire to something。', 'Somebody set fire to the old shed.', '有人把旧棚子点着了。', ['set fire to the building'], ['torch'], 'verb', '及物', '社会'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 torch 纵火、点燃（队列原样，短语条目）').phrase = true;

  W('set off', 'verb', '/set ɒf/', '', [], '出发；触发', 'To set out on a trip, or to make an alarm or a device go off.', [
    ['出发；动身', 'To begin a journey, especially one with excitement or determination.', '开始一段旅程，尤带兴奋或决心。', '不及物短语，常与 for 连用。', 'We set off early to avoid the traffic.', '我们早早出发以避开车流。', ['set off for home'], ['depart'], 'verb', '不及物', '交通'],
    ['触发；使爆炸', 'To cause something such as an alarm or an explosion to begin.', '使警报、爆炸等开始发生。', '可及物短语，宾语可置于 off 前或后。', 'The noise set off the alarm.', '响动触发了警报。', ['set off the alarm'], ['start'], 'verb', '及物', '通用'],
  ],'sets off~set off~setting off', [], '短语整体不取成分作根，分级留空；近义 depart 出发与 start 开始（队列原样，分置两义项，短语条目）').phrase = true;

  W('set up', 'verb', '/set ʌp/', '', [], '建立；安装；陷害', 'To bring an organisation into being, to place equipment ready for use, or to make an innocent person look guilty.', [
    ['建立；创立', 'To start an organisation or a business and get it running.', '开办一个组织或企业并使之运转。', '可及物短语，宾语可置于 up 前或后。', 'They set up a small company in 2015.', '他们在 2015 年开了一家小公司。', ['set up a business'], ['establish', 'found'], 'verb', '及物', '商务'],
    ['安装；布置', 'To put equipment or furniture in place so that it is ready to use.', '把设备或家具摆放到位、准备使用。', '可及物短语，宾语可置于 up 前或后。', 'The engineers set up the machines before the test.', '工程师在试验前安装好了机器。', ['set up the equipment'], ['instal'], 'verb', '及物', '工业'],
    ['陷害；嫁祸', 'To make somebody look guilty by putting them in a false situation.', '通过安排虚假情形使某人显得有罪。', '可及物短语，非正式用语。', 'They set him up with false papers.', '他们用假文件陷害了他。', ['set him up'], ['frame'], 'verb', '及物', '法律'],
  ],'sets up~set up~setting up', ['instal'], '短语整体不取成分作根，分级留空；家族 instal 安装，近义 establish 建立与 found 创立（置创立义项）、instal 安装（置安装义项）、frame 陷害（置嫁祸义项），均队列原样，短语条目').phrase = true;

  W('settee', 'noun', '/ˈsetiː/', '', [], '长沙发', 'Furniture for sitting on that seats more than one person.', [
    ['长沙发', 'A long seat with a back and arms for two or more people.', '供两人或更多人坐的、带靠背和扶手的长座。', '可数；英式用词，常见木制或软垫长椅。', 'The settee sits in front of the window.', '长沙发摆在窗前。', ['a wooden settee'], ['sofa'], 'noun', 'countable', '家居'],
  ], 'settees', ['sofa'], 'brief 显示 ←?——-ee 指小后缀不在可继清单，settle 未在 settee 中全段可见，settee 与 set「放置」语义亦不直连（切词假象），留空（判断项）；家族/近义 sofa 沙发（队列原样）');

  W('settlement', 'noun', '/ˈsetlmənt/', 'B1', ['CET4'], '和解；定居点；结清', 'The deal that ends a quarrel, and the place where people first come to live.', [
    ['和解；协议', 'An official agreement that brings a long dispute to an end.', '结束长期争端的正式协议。', '可数，常与 of 连用。', 'The two sides reached a settlement after months of talk.', '双方在数月的谈判之后达成了和解。', ['reach a settlement'], ['compromise'], 'noun', 'countable', '法律'],
    ['定居点；殖民地', 'A place where a group of people have gone to live, especially one they built themselves.', '一群人前往居住的地方，尤指他们自己新建的。', '可数。', 'The first settlement lay beside the river.', '最早的定居点坐落在河边。', ['a settlement of farmers'], ['clearing', 'town', 'village'], 'noun', 'countable', '历史'],
    ['结清；支付', 'The act of paying money that is owed, or the sum that is paid.', '把欠款付清的行为，或所支付的款项。', '可数或不可数，商务与法律语境。', 'The settlement of the account took three days.', '结清这笔账花了三天时间。', ['final settlement'], [], 'noun', 'uncountable', '商务'],
  ], 'settlements', ['clearing', 'compromise'], 'brief 根提示 ←settle B1 安顿 + -ment（透明名词后缀），B1 继承；家族 clearing 空地与 compromise 妥协，近义 compromise（置和解义项）、clearing 空地与 town 城镇与 village 村庄（置定居点义项），均队列原样');

  W('settler', 'noun', '/ˈsetlə/', 'B1', [], '定居者；殖民者', 'One of the first people to make a home in a new area.', [
    ['定居者；殖民者', 'A person who goes to live in a place where few people lived before.', '迁往原先几乎无人居住之地定居的人。', '可数。', 'Early settlers built their houses from local stone.', '早期定居者用本地石料盖起了房子。', ['early settlers'], ['pilgrim', 'pioneer'], 'noun', 'countable', '历史'],
  ], 'settlers',['settle'], 'brief 根提示 ←settle B1 定居 + -er（透明名词后缀，施事），B1 继承；近义 pilgrim 朝圣者与 pioneer 先驱（队列原样）');

  W('setup', 'noun', '/ˈsetʌp/', 'A1', [], '装置；机构', 'How the pieces of a device are placed, and how a group is organised.', [
    ['装置；设备', 'The way in which parts are arranged and work together in a machine or a building.', '机器或建筑中各部件的布置与协作方式。', '可数；也拼作 set-up。', 'The studio has a new lighting setup.', '录音棚新装了一套灯光装置。', ['a lighting setup'], ['system'], 'noun', 'countable', '工具'],
    ['机构；组织方式', 'The way people and jobs are arranged inside an organisation.', '组织内部人员与职务的安排方式。', '可数，常与 of 连用。', 'The setup of the department changed last year.', '去年这个部门的组织方式变了。', ['the setup of the team'], [], 'noun', 'countable', '商务'],
  ], 'setups',['set'], 'brief 显示 ←?，自行扫根 set A1（author_s5）——set + up 复合词取首成分（同 run-up←run 先例），A1 继承（判断项：整体义由动词短语 set up 引申）；近义 system 系统（队列原样，置装置义项）');

  W('seven days', 'noun', '/ˈsevn deɪz/', '', [], '一周；七天', 'The full week counted from any starting day.', [
    ['一周；七天', 'A period of seven days, used to say how long something lasts.', '由七天组成的一段时间，用于说明某事持续多久。', '名词短语，常与 in/after 连用。', 'The repair takes seven days from the day you send it.', '修理从寄出之日起需要七天。', ['in seven days'], ['week'], 'noun', 'countable', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 week 星期、周（队列原样，短语条目）').phrase = true;

  W('seventeenth', 'number', '/ˌsevnˈtiːnθ/', 'A1', [], '第十七', 'The position that comes right after sixteen when counting.', [
    ['第十七', 'Number 17 in a series; the ordinal of the number after sixteen.', '序列中的第 17，即十六之后那个数的序数词。', '数词家族统一取序数词义。', 'Her birthday is on the seventeenth.', '她的生日是十七号。', [], ['seventeen'], 'number', 'null', '通用'],
  ], '', ['seventeen'], 'brief 显示 ←?，自行扫根 seventeen A1（author_s5）——seventeen + -th（透明序数后缀，先例 author_e3.js:112 eighteenth），A1 继承；家族 seventeen 十七（基数词，fam 入家族组，syn 入义项近义组）');
})(typeof window !== 'undefined' ? window : globalThis);
