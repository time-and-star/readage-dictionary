/* data/words/cet/author_s14.js — 常用词 S 批次 14，缺口 short of ~ silence，共 31 条
 * （24 单词 + 7 短语：short of、should have、show off、shut out、side dish、sign up、signature dish）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4 × 6：shortage、showy、sicken、signature、significance、silence；本批无 CET6）。
 * brief 异常：任务指定的 %TEMP%/opencode/_s14_brief.txt 已被第二轮 brief 生成任务覆盖，
 *   现内容为 solicitor ~ speaking（与本批 short of ~ silence 不对应，24 行无一命中），
 *   故 24 个单词全部按规范 §5.2 自行扫根（纯文本 fs.readFileSync + indexOf 扫 author_*.js 取第 4 参，
 *   未 require 全库）：short A1、shut A1、side A1、sign A2、sick A2、silent A2、significant B1、
 *   shower A2（均出自 author_s2.js；shrink B2 见 author_s2，仅用于留空判定）。
 * · 自扫继承（11 条）：
 *   short-term←short A1（复合取首）、shorten←short A1 + -en、shortfall←short A1（复合取首）、
 *   shutdown←shut A1（复合取首）、sicken←sick A2 + -en、sickness←sick A2 + -ness、
 *   sidestep←side A1（复合取首）、signature←sign A2（兄弟派生，判断项）、
 *   significance←significant B1（signific 全段共享 + -ance 可继）、signpost←sign A2（复合取首）、
 *   silence←silent A2（兄弟派生，判断项）。
 * · 留空项（13 单词）：shortage（-age 不在可继清单，同 orphanage/roughage 先例，判断项）、
 *   showery、showy（-y 不在可继清单，规范 §5.7 同 rosy 先例，判断项；库内 cottony←cotton 为反向先例）、
 *   shovel、shriek、shrill、shrine、shrivel、shroud、shudder、shun、sibling、sieve
 *   （库内无可继词根，或共享段不全、兄弟派生不成立），另加 7 个短语（整体不取成分作根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s14.js 必须在 _cet_helper.js 之后加载');

  W('short of', 'adjective', '/ˌʃɔːt ˈɒv/', '', [], '缺少；不足', 'Without the quantity of something that is needed; lacking.', [
    ['（与 be 连用）缺少；不够', 'Not having as much of something as you need or want.', '没有达到你所需要或想要的数量。', '介词短语作表语，常与 be 动词连用，后接名词。', 'We are short of time and cannot stay longer.', '我们时间不够，不能久留。', ['be short of money', 'short of staff'], ['shy'], 'adjective', '表语', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 shy 不足的、缺少的（队列原样，置唯一义项），短语条目').phrase = true;

  W('short-term', 'adjective', '/ˌʃɔːt ˈtɜːm/', 'A1', [], '短期的；近期的', 'Lasting or needed only for a short period of time.', [
    ['短期的；一时的', 'Continuing or being needed for only a brief period of time.', '只持续或只需要很短一段时间的。', '多作定语，常修饰 plan、loan、effect 等，反义为 long-term。', 'The company took out a short-term loan to pay its workers.', '公司借了一笔短期贷款来发工资。', ['short-term plan', 'short-term loan'], ['temporary'], 'adjective', '定语/表语', '商务'],
  ], '', ['temporary'], 'brief 文件与队列不符（见文件头），自扫根 short A1（author_s2）——short + term 复合词取首成分（同 run-up←run 先例），A1 继承（判断项：整体义由成分合成）；家族/近义 temporary 暂时的、临时的（队列原样，置唯一义项）');

  W('shortage', 'noun', '/ˈʃɔːtɪdʒ/', '', ['CET4'], '短缺；不足；短缺额', 'A situation in which there is not enough of something for the people who need it.', [
    ['短缺；不足', 'The state in which the supply of a thing does not meet the demand for it.', '某物的供应量满足不了需求的状态。', '不可数，常与 of 连用，指供不应求的总体状况。', 'The shortage of clean water lasted three weeks.', '清洁水的短缺持续了三周。', ['water shortage', 'a shortage of funds'], ['absence', 'lack'], 'noun', 'uncountable', '社会'],
    ['短缺额；差额', 'The part of the total amount needed that has not been provided.', '所需总量中尚未提供的那部分。', '可数，常具体指数量或资金缺口，可后接具体数额。', 'The company reported a shortage of 200 tonnes.', '公司报告了 200 吨的短缺额。', ['a shortage of 200 tonnes', 'fill the shortage'], ['deficit', 'pinch'], 'noun', 'countable', '商务'],
    ['（粮食、物资的）匮乏', 'A serious want of food or other basic goods in a place.', '某地粮食或其他必需物资的严重不足。', '不可数，常见于灾害与战争语境。', 'The dry years brought hunger and shortage to the northern towns.', '连续干旱的年头给北部城镇带来了饥饿与物资匮乏。', ['food shortage', 'fuel shortage'], ['drought', 'famine'], 'noun', 'uncountable', '饮食'],
  ], 'shortages', ['deficit', 'drought', 'famine', 'lack'], 'brief 文件与队列不符（见文件头）；库内无 shortage 可继根——short A1 虽在库，但 -age 不在可继后缀清单（同 orphanage/roughage 先例），留空（判断项）；家族 deficit 赤字、drought 干旱、famine 饥荒、lack 缺乏，近义 absence 缺乏与 lack 缺少（置首义项）、deficit 赤字与 pinch 拮据紧缺（置短缺额义项）、drought 干旱与 famine 饥荒（置匮乏义项），均队列原样');

  W('shorten', 'verb', '/ˈʃɔːtn/', 'A1', [], '缩短；变短', 'To reduce the length or duration of something, or to become shorter.', [
    ['（使）变短；缩短', 'To make something smaller in length, or to become smaller in length.', '使某物在长度上变短，或本身变短。', '可及物也可不及物，多指长度或时间上的减少。', 'The tailor shortened the sleeves by two centimetres.', '裁缝把袖子改短了两厘米。', ['shorten the dress', 'the days shortened'], [], 'verb', '及物', '通用'],
    ['（文章、讲话）压缩；精简', 'To make a text or a speech shorter by cutting parts out of it.', '删去部分内容使文章或讲话变短。', '多作及物，宾语为文章、报告或讲话。', 'She shortened the report to four pages.', '她把报告压缩到四页。', ['shorten a text', 'shorten down'], ['abbreviate', 'condense'], 'verb', '及物', '书面'],
  ], 'shortens~shortened~shortened~shortening', ['abbreviate'], 'brief 文件与队列不符（见文件头），自扫根 short A1（author_s2）——short + -en（透明使动后缀，同 sadden←sad 先例），A1 继承；家族/近义 abbreviate 缩写与 condense 浓缩、精简（队列原样，置压缩义项），各一次');

  W('shortfall', 'noun', '/ˈʃɔːtfɔːl/', 'A1', [], '不足额；缺口', 'The amount by which what is available falls below what is needed or planned.', [
    ['不足额；差额', 'The part of a required sum that has not been provided.', '所需款项中尚未到位的那部分。', '可数，常与 in/of 连用，多用于资金与预算。', 'A shortfall in funding delayed the project.', '资金缺口推迟了这个项目。', ['a shortfall in funding', 'cover the shortfall'], ['deficit'], 'noun', 'countable', '商务'],
    ['未达标的量', 'The part of a target or goal that a team or a company fails to reach.', '团队或公司未能达到的目标或指标部分。', '可数，常与 of 连用，用于业绩与产量语境。', 'Sales showed a shortfall of twelve per cent.', '销售额出现了百分之十二的缺口。', ['a shortfall of 12 per cent'], [], 'noun', 'countable', '商务'],
  ], 'shortfalls', ['deficit'], 'brief 文件与队列不符（见文件头），自扫根 short A1（author_s2）——short + fall 复合词取首成分（同 run-up←run 先例），A1 继承（判断项：整体义为未达之差）；家族/近义 deficit 不足、赤字（队列原样，置首义项）');

  W('should have', 'modal verb', '/ʃʊd hæv/', '', [], '本应该（却未做到）；想必已经', 'Used to talk about duty or expectation in the past, or to guess that something is already done.', [
    ['本应该（却没有）', 'Used to show that something was right or necessary in the past but it did not happen.', '表示过去本应正确或必要、但实际没有发生。', '情态短语 + 完成式：should have + 过去分词，常带遗憾或责备语气。', 'You should have told me about the change.', '你本该把这次变动告诉我。', ['should have done'], ['oughtto'], 'modal verb', 'null', '通用'],
    ['想必已经（表推测）', 'Used to make a guess that something has probably been completed by now.', '表示推测某事到现在多半已经完成。', 'should have + 过去分词，用于对已完成情况的估计。', 'The parcel should have arrived by now.', '包裹这时候想必已经到了。', ['should have arrived'], [], 'modal verb', 'null', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 oughtto 应该（队列原样词形照抄，置首义项），短语条目').phrase = true;

  W('shovel', 'noun/verb', '/ˈʃʌvl/', '', [], '铲子；铁锹；用铲子铲', 'A wide-bladed tool for moving loose material, and the action of using it.', [
    ['铲子；铁锹', 'A tool with a broad blade and a long handle used for lifting and moving loose material.', '带长柄宽刃、用来铲起并搬动松散物料的工具。', '可数；刃宽而浅，与尖头铁锹用途不同。', 'He left the shovel beside the flower bed.', '他把铲子留在花坛边。', ['a snow shovel', 'pick up the shovel'], ['spade'], 'noun', 'countable', '工具'],
    ['用铲子铲', 'To move earth, snow or other loose material with such a tool.', '用这类工具搬动泥土、雪或其他松散物料。', '可及物，宾语为被铲之物；英式过去式 shovelled。', 'They shovelled the snow from the path.', '他们把小路上的雪铲掉了。', ['shovel the snow', 'shovel earth'], [], 'verb', '及物', '工业'],
  ], 'shovels~shovelled~shovelled~shovelling', ['spade'], 'brief 文件与队列不符（见文件头）；库内无 shovel 可继根（古英语 scofl，库内无对应词干），spade 仅为家族/近义非构词根，留空（判断项）；家族/近义 spade 铁锹（队列原样，置首义项）');

  W('show off', 'verb', '/ˌʃəʊ ˈɒf/', '', [], '炫耀；卖弄；显摆技巧', 'To behave so as to make people admire you, or to perform tricks for attention.', [
    ['炫耀；卖弄', 'To behave in a way intended to make other people admire you.', '以让他人赞赏为目的而表现自己。', '可及物也可不及物，含贬义，宾语可置于 off 前或后。', 'He showed off his new car to every neighbour.', '他向每个邻居炫耀自己的新车。', ['show off to friends', 'like to show off'], ['parade'], 'verb', '及物', '社交'],
    ['（在运动或表演中）显摆技巧', 'To perform tricks or difficult moves in order to get attention.', '为引人注目而表演花式动作或高难技巧。', '多作不及物，常见于体育与舞台语境。', 'The rider showed off with a jump over the hedge.', '这名骑手跃过树篱显了一手。', ['show off with a jump'], ['hotdog'], 'verb', '不及物', '体育'],
  ],'shows off~showed off~shown off~showing off', [], '短语整体不取成分作根，分级留空；近义 parade 招摇炫耀（置首义项）与 hotdog 显摆特技（置技巧义项）（队列原样），各一次，短语条目').phrase = true;

  W('showery', 'adjective', '/ˈʃaʊəri/', 'A2', [], '（天气）有阵雨的', 'Having brief periods of rain with sunny spells between them.', [
    ['（天气）有阵雨的；晴雨相间的', 'Of weather: bringing short bursts of rain with bright periods in between.', '指天气零星下阵雨、其间有晴段。', '多作定语，常修饰 day、morning 等，英式天气预报常用词。', 'The forecast says it will be showery until Friday.', '预报说星期五以前多阵雨。', ['showery weather', 'a showery morning'], ['wet'], 'adjective', '定语', '自然'],
  ], '',['shower'], 'brief 文件与队列不符（见文件头）；派生基为 shower A2（阵雨，自扫 author_s2）+ -y 透明形容词后缀（根全段可见，同 rainy←rain、noisy←noise、cottony←cotton 先例），A2 继承（判断项）；近义 wet 湿的、多雨的（队列原样，置唯一义项）');

  W('showy', 'adjective', '/ˈʃəʊi/', 'A1', ['CET4'], '艳俗的；花哨的', 'Bright and noticeable, often in a way that lacks good taste.', [
    ['艳丽而俗气的', 'Bright and grand in a way that many people find tasteless.', '鲜艳华丽得让很多人觉得俗气的。', '常含贬义，可作定语或表语。', 'The hall was decorated with showy pink curtains.', '大厅装饰着花哨的粉红色窗帘。', ['showy decorations'], ['flash'], 'adjective', '定语/表语', '外貌'],
    ['（植物）开花醒目的', 'Of a plant: producing large bright flowers that catch the eye.', '（植物）开出惹眼的大花的。', '多作定语，园艺语境，此处为中性或褒义。', 'Showy lilies filled the front garden.', '醒目的百合开满了前院。', ['showy flowers'], [], 'adjective', '定语', '自然'],
  ], '',['show'], 'brief 文件与队列不符（见文件头）；show A1（自扫 author_s2）全段可见 + -y 透明形容词后缀（同 noisy←noise、rainy←rain、cottony←cotton 先例），A1 继承（判断项）；近义 flash 浮华艳俗的（队列原样，置首义项）');

  W('shriek', 'noun/verb', '/ʃriːk/', '', [], '尖叫声；尖叫；尖啸', 'A sudden loud high cry or sound, or to make such a sound.', [
    ['尖叫声；惊叫', 'A sudden very high cry made in fear, pain or excitement.', '因恐惧、疼痛或激动而发出的高声叫喊。', '可数，常与 of 连用。', 'A shriek of laughter came from the next room.', '隔壁房间传来一阵尖笑。', ['a shriek of fear'], ['scream'], 'noun', 'countable', '情感'],
    ['尖叫；尖声喊', 'To give a loud high cry, or to speak in such a voice.', '发出高亢的叫声，或用尖厉的声音说话。', '多作不及物，常与 with/at 连用。', 'She shrieked with fright when the lights went out.', '灯灭时她吓得尖叫起来。', ['shriek with delight', 'shriek at the driver'], [], 'verb', '不及物', '情感'],
    ['（警报、汽笛的）尖啸声', 'A loud sharp sound made by an alarm or an engine.', '警报器或发动机发出的响亮刺耳声。', '可数，常见于工业与交通描写。', 'The engine gave a shriek as the train pulled away.', '火车开动时发动机发出一声尖啸。', ['a shriek of steam'], ['whistle'], 'noun', 'countable', '交通'],
  ], 'shrieks~shrieked~shrieked~shrieking', ['scream'], 'brief 文件与队列不符（见文件头）；库内无 shriek 可继根（拟声来源，与 shrill 形近但词干非全段共享，兄弟派生不成立），留空（判断项）；家族/近义 scream 尖叫（置首义项）与 whistle 尖啸声（置汽笛义项）（队列原样），各一次');

  W('shrill', 'adjective', '/ʃrɪl/', '', [], '（声音）尖厉刺耳的', 'A sharp, piercing quality in a sound that is unpleasant to hear.', [
    ['尖厉的；刺耳的', 'Of a sound: sharp, loud and unpleasant to listen to.', '指声音尖锐响亮、听着难受。', '可作定语或表语，常形容笑声、喊声与哨音。', 'A shrill whistle cut through the noise.', '一声尖厉的哨音盖过了嘈杂声。', ['a shrill voice', 'shrill laughter'], ['high'], 'adjective', '定语/表语', '通用'],
  ], '', [], 'brief 文件与队列不符（见文件头）；库内无 shrill 可继根（古英语 scryll，与 shriek 形近但词干非全段共享，兄弟派生不成立），留空（判断项）；近义 high 高亢的（队列原样，置唯一义项）');

  W('shrine', 'noun', '/ʃraɪn/', '', [], '神龛；圣祠；圣地', 'A holy place for a saint or a sacred object, or a place visited out of admiration.', [
    ['神龛；圣祠', 'A small place of worship, or a structure built over the grave of a saint or a holy object.', '供奉圣物或圣徒陵墓的小型礼拜场所或建筑。', '可数，常与 of 连用，宗教语境。', 'Pilgrims lit candles at the shrine.', '朝圣者在神龛前点燃蜡烛。', ['a roadside shrine', 'the shrine of a saint'], ['sanctuary'], 'noun', 'countable', '宗教'],
    ['庙宇；祠堂', 'A building or room where a god or a local spirit is worshipped.', '供奉神明或地方神祇的建筑或房间。', '可数，多见于亚洲宗教与旅游描写。', 'They left offerings at the village shrine.', '他们在村里的祠堂摆上祭品。', ['village shrine'], ['temple'], 'noun', 'countable', '宗教'],
    ['圣地；纪念地', 'A place connected with a famous person that admirers travel to visit.', '与名人相关、仰慕者专程前往凭吊的地方。', '可数，常与 to 连用，文化语境。', 'The old theatre became a shrine for film lovers.', '这家老剧院成了影迷的圣地。', ['a shrine to the past'], [], 'noun', 'countable', '文化'],
  ], 'shrines', ['sanctuary', 'temple'], 'brief 文件与队列不符（见文件头）；库内无 shrine 可继根（拉丁 scrinium 经古英语 scrin 传入，库内无 scrin 词干），留空；家族/近义 sanctuary 圣所（置首义项）与 temple 庙宇（置祠堂义项）（队列原样），各一次');

  W('shrivel', 'verb', '/ˈʃrɪvl/', '', [], '（使）枯萎；皱缩', 'To become dry and smaller with folds, or to make something do so.', [
    ['（植物）枯萎；干瘪', 'Of a plant or leaf: to dry up, shrink and become wrinkled.', '（植物或叶子）脱水萎缩、起皱。', '不及物，常与 up 连用。', 'The heat made the leaves shrivel on the vine.', '高温使藤上的叶子枯萎了。', ['shrivel in the heat'], ['wither'], 'verb', '不及物', '自然'],
    ['（皮肤等）起皱；使皱缩', 'To shrink and form folds, or to make skin or cloth do so.', '收缩起褶，或使皮肤、织物收缩起褶。', '可及物也可不及物，常与 up 连用。', 'Cold water shrivelled the soft skin of his hands.', '冷水把他手上柔嫩的皮肤泡皱了。', ['shrivel up'], [], 'verb', '及物', '健康'],
  ], 'shrivels~shrivelled~shrivelled~shrivelling', ['wither'], 'brief 文件与队列不符（见文件头）；库内无 shrivel 可继根（词源不透明，与库内 shrink B2 形近但词干非全段共享，兄弟派生不成立），留空（判断项）；家族/近义 wither 枯萎（队列原样，置首义项）');

  W('shroud', 'noun/verb', '/ʃraʊd/', '', [], '裹尸布；覆盖物；覆盖、笼罩', 'A cloth that wraps a dead body, or a covering that hides what is underneath.', [
    ['裹尸布；覆盖布', 'A length of cloth in which a dead body is wrapped for burial.', '包裹死者以供安葬的一块布。', '可数，历史与宗教语境。', 'The body was wrapped in a linen shroud.', '遗体被裹在亚麻裹尸布里。', ['a linen shroud'], [], 'noun', 'countable', '宗教'],
    ['遮蔽物；覆盖层', 'Something that covers and hides what is underneath.', '盖住下面事物、使人看不见的东西。', '可数，常与 of 连用，多见于文学描写。', 'A shroud of mist hung over the valley.', '一层薄雾笼罩着山谷。', ['a shroud of smoke'], [], 'noun', 'countable', '自然'],
    ['覆盖；笼罩', 'To cover something completely so that it cannot be seen.', '把某物完全盖住使其看不见。', '可及物，常用于被动式 be shrouded in。', 'The hills were shrouded in low cloud.', '群山笼罩在低垂的云层中。', ['shrouded in mist'], ['envelop'], 'verb', '及物', '自然'],
  ], 'shrouds~shrouded~shrouded~shrouding', ['envelop'], 'brief 文件与队列不符（见文件头）；库内无 shroud 可继根（古英语 scrūd「衣物」，库内无 scrud 词干），留空；家族/近义 envelop 包裹、笼罩（队列原样，置覆盖义项）');

  W('shudder', 'noun/verb', '/ˈʃʌdə/', '', [], '战栗；发抖；震颤', 'A sudden shaking movement of the body or a machine, or to shake in this way.', [
    ['战栗；颤抖', 'A sudden shaking movement of the body caused by fear, disgust or cold.', '因恐惧、厌恶或寒冷而身体突然抖动。', '可数，常与 of 连用，多用 give a shudder。', 'She gave a shudder at the thought of the exam.', '想到考试她打了个哆嗦。', ['give a shudder'], ['quiver'], 'noun', 'countable', '情感'],
    ['（因恐惧或厌恶）浑身一颤', 'To shake suddenly because of fear, disgust or cold.', '因恐惧、厌恶或寒冷而突然发抖。', '不及物，常与 at 连用。', 'He shuddered at the smell of burning rubber.', '他闻到橡胶烧焦的气味浑身一颤。', ['shudder at the sight'], [], 'verb', '不及物', '情感'],
    ['（机器的）震颤；抖动', 'A short sudden shaking movement of a machine or a vehicle.', '机器或车辆出现的短促抖动。', '可数，工程语境。', 'The engine gave a shudder and stopped.', '发动机震颤了一下便停了。', ['a sudden shudder'], [], 'noun', 'countable', '工业'],
  ], 'shudders~shuddered~shuddered~shuddering', [], 'brief 文件与队列不符（见文件头）；库内无 shudder 可继根（中古英语来源，与库内 shake A2 词形非全段共享，兄弟派生不成立），留空（判断项）；近义 quiver 颤抖、哆嗦（队列原样，置首义项）');

  W('shun', 'verb', '/ʃʌn/', '', [], '回避；躲开', 'To keep clear of a person, place or habit on purpose.', [
    ['（故意）回避；躲开', 'To keep away from a person or place on purpose.', '有意不接近某人或某地。', '及物动词，宾语为人、场所或活动。', 'He shuns old friends after the promotion.', '晋升后他躲着老朋友。', ['shun old friends', 'shun the press'], ['avoid'], 'verb', '及物', '社交'],
    ['避免；戒除', 'To deliberately not do something that you think is harmful or wrong.', '有意不做自认为有害或不对的事。', '及物动词，宾语为习惯、责任或开销。', 'He shuns unnecessary spending whenever he can.', '他尽可能避免不必要的开销。', ['shun responsibility'], [], 'verb', '及物', '商务'],
  ], 'shuns~shunned~shunned~shunning', [], 'brief 文件与队列不符（见文件头）；库内无 shun 可继根（古英语 scunian，队列近义 avoid A2 非构词根），留空；近义 avoid 回避、避开（队列原样，置首义项）');

  W('shut out', 'verb', '/ˌʃʌt ˈaʊt/', '', [], '把…关在外面；排除；零封', 'To keep someone or something outside, or to refuse to think about it.', [
    ['把…关在外面；挡在门外', 'To prevent someone or something from getting inside a place.', '阻止某人或某物进入某处。', '可及物短语，宾语可置于 out 前或后。', 'The locked gate shut out the crowd.', '锁着的大门把人群挡在外面。', ['shut out the light', 'shut the crowd out'], [], 'verb', '及物', '家居'],
    ['排除；不把…考虑在内', 'To refuse to think about or accept an idea or a person.', '拒不考虑某种想法，或把某人拒之门外。', '可及物短语，宾语多为抽象事物。', 'She shut out all thoughts of failure.', '她把失败的念头完全排除在外。', ['shut out doubt'], ['exclude'], 'verb', '及物', '心理'],
    ['（体育）使…一分不得；零封', 'To stop the other team from scoring any points.', '使对手一分未得。', '可及物短语，体育报道常用。', 'The keeper shut out the visitors for the third game.', '门将连续第三场把客队零封。', ['shut out the visitors'], [], 'verb', '及物', '体育'],
  ],'shuts out~shut out~shutting out', [], '短语整体不取成分作根，分级留空；近义 exclude 排除、拒之门外（队列原样，置排除义项），短语条目').phrase = true;

  W('shutdown', 'noun', '/ˈʃʌtdaʊn/', 'A1', [], '停工；停产；关闭', 'The stopping of a machine, a factory or a system, or the period for which it stops.', [
    ['（设备、系统的）关机；关闭', 'The act of switching off a machine, computer or system.', '把机器、计算机或系统关闭的操作。', '可数，指一次关闭操作，技术语境常与 of 连用。', 'The system needs a shutdown before the update.', '系统在更新前需要先关机。', ['system shutdown', 'a full shutdown'], [], 'noun', 'countable', '工业'],
    ['（工厂、企业的）停产；停业', 'The closing of a factory or business, either for good or for a period.', '工厂或企业全部或暂时停止运作。', '可数，商务与新闻语境，常与 of 连用。', 'The plant announced a two-week shutdown.', '工厂宣布停产两周。', ['plant shutdown'], ['layoff'], 'noun', 'countable', '商务'],
  ], 'shutdowns',['shut'], 'brief 文件与队列不符（见文件头），自扫根 shut A1（author_s2）——shut + down 复合词取首成分（同 run-up←run、setup←set 先例），A1 继承（判断项：整体义由成分合成）；近义 layoff 停产、停工（队列原样，置停产义项）');

  W('sibling', 'noun', '/ˈsɪblɪŋ/', '', [], '兄弟姐妹；同级并列体', 'A person sharing both parents, or one of a set of things at the same level.', [
    ['兄弟姐妹', 'A person who has the same mother and father as you.', '与你同父同母的人（兄或弟、姐或妹）。', '可数，中性用语，不分性别，学术与日常均常见。', 'Both of her siblings work in the same city.', '她的兄弟姐妹都在同一个城市工作。', ['sibling rivalry'], ['sister'], 'noun', 'countable', '家庭'],
    ['同级并列的单元；孪生体', 'One of a pair of related things sitting at the same level, such as departments or computer nodes.', '彼此关联且处于同一层级的事物之一，如部门或计算机节点。', '可数，常作定语，见于组织与计算机语境。', 'Each sibling unit reports to the same manager.', '每个同级部门都向同一位经理汇报。', ['sibling unit', 'sibling node'], ['twin'], 'noun', 'countable', '科学'],
  ], 'siblings', ['sister', 'twin'], 'brief 文件与队列不符（见文件头）；库内无 sibling 可继根（古英语 sibb「亲属」，库内无 sib 词干，sister 为家族非构词根），留空；家族/近义 sister 姐妹（置首义项）与 twin 孪生体（置并列义项）（队列原样），各一次');

  W('sicken', 'verb', '/ˈsɪkn/', 'A2', ['CET4'], '使恶心；使反感', 'To cause nausea, or to become ill.', [
    ['使恶心；作呕', 'To make somebody feel that they are about to vomit.', '使某人想要呕吐。', '可及物，常与 at/of 连用；也可不及物指开始作呕。', 'The smell of paint sickened everyone in the room.', '油漆味让屋里所有人都恶心。', ['sicken at the sight'], [], 'verb', '及物', '健康'],
    ['使厌恶；使反感', 'To make somebody feel a strong aversion to something.', '使某人对某事产生强烈的反感。', '多用被动式 be sickened，宾语为人。', 'Residents were sickened by the state of the river.', '河水的状况让居民们十分反感。', ['be sickened by'], ['disgust'], 'verb', '及物', '情感'],
  ], 'sickens~sickened~sickened~sickening',['sick'], 'brief 文件与队列不符（见文件头），自扫根 sick A2（author_s2）——sick + -en（透明使动后缀，同 sadden←sad 先例），A2 继承；近义 disgust 使厌恶（队列原样，置反感义项）');

  W('sickness', 'noun', '/ˈsɪknəs/', 'A2', [], '疾病；恶心', 'An illness of the body or mind, or the feeling of being sick.', [
    ['恶心；作呕', 'The feeling that you want to vomit.', '想要呕吐的感觉。', '不可数，常作定语，如 morning sickness。', 'Morning sickness passed after the third month.', '孕吐在第三个月后消失了。', ['morning sickness'], [], 'noun', 'uncountable', '健康'],
    ['疾病；患病状态', 'A disorder of the body or mind that affects how well a person feels.', '影响一个人身体或心理状态的病症。', '可数，指具体的一种病症，复数形式指多种疾病。', 'Several kinds of sickness were reported after the flood.', '洪水之后出现了好几种疾病。', ['a rare sickness', 'kinds of sickness'], ['disease'], 'noun', 'countable', '健康'],
  ], 'sicknesses', ['disease'], 'brief 文件与队列不符（见文件头），自扫根 sick A2（author_s2）——sick + -ness（透明名词后缀），A2 继承；家族/近义 disease 疾病（队列原样，置疾病义项）');

  W('side dish', 'noun', '/ˌsaɪd ˈdɪʃ/', '', [], '配菜；佐餐小菜', 'A side portion of food eaten next to the main course.', [
    ['配菜；副菜', 'A small amount of food served beside the main part of a meal.', '随主菜一同上桌的少量食物。', '可数，常与 with/together 连用。', 'Rice is the usual side dish with this curry.', '这道咖喱通常配米饭作配菜。', ['serve with a side dish'], ['accompaniment'], 'noun', 'countable', '饮食'],
    ['（佐主菜的）沙拉或小食', 'A light portion eaten alongside a heavier main dish.', '与较丰盛主菜同食的清淡小份食物。', '可数，西餐点单与菜单用语。', 'She ordered fish with a small dish of greens.', '她点了鱼，配一小份青菜。', ['order a side dish'], ['salad'], 'noun', 'countable', '饮食'],
  ],'side dishes', [], '短语整体不取成分作根，分级留空；近义 accompaniment 佐餐之物（置首义项）与 salad 沙拉（置小菜义项）（队列原样），各一次，短语条目').phrase = true;

  W('sidestep', 'verb', '/ˈsaɪdstep/', 'A1', [], '侧身避开；回避', 'To step to one side to avoid something, or to avoid a problem.', [
    ['侧身避开', 'To move to one side quickly in order to dodge something or somebody.', '迅速向旁边移动以躲开某物或某人。', '可及物，本义为体育与日常动作。', 'He sidestepped the falling branch.', '他侧身躲开了掉落的树枝。', ['sidestep the blow'], [], 'verb', '及物', '体育'],
    ['回避；规避（问题、责任）', 'To avoid dealing with a difficult question or a duty in a clever way.', '巧妙地躲开棘手的问题或责任。', '及物动词，常用于政治与商务评论。', 'The minister sidestepped the question about costs.', '大臣回避了有关费用的问题。', ['sidestep the issue'], ['evade'], 'verb', '及物', '政治'],
  ], 'sidesteps~sidestepped~sidestepped~sidestepping',['side'], 'brief 文件与队列不符（见文件头），自扫根 side A1（author_s2）——side + step 复合词取首成分（同 run-up←run 先例），A1 继承（判断项：整体义由「向旁一步」引申）；近义 evade 回避、规避（队列原样，置规避义项）');

  W('sieve', 'noun/verb', '/sɪv/', '', [], '筛子；滤网；筛、滤', 'A kitchen tool with a mesh, or to pass food through such a tool.', [
    ['筛子；滤网', 'A kitchen tool with many small holes that holds back solids while liquid passes through.', '留住固体、让液体通过的带孔厨房工具。', '可数，孔眼有粗细之分。', 'Press the pulp through a fine sieve.', '把果肉压过细筛。', ['a fine sieve'], ['strain'], 'noun', 'countable', '工具'],
    ['筛；过滤', 'To put food or another substance through such a tool in order to smooth it.', '把食物或其他物质过筛使其细腻。', '可及物，宾语为被筛之物。', 'She sieved the flour into the bowl.', '她把面粉筛进碗里。', ['sieve the flour'], [], 'verb', '及物', '饮食'],
  ], 'sieves~sieved~sieved~sieving', [], 'brief 文件与队列不符（见文件头）；库内无 sieve 可继根（古英语 sife，sift 不在库且词形非全段共享，兄弟派生不成立），留空（判断项）；近义 strain 过滤、滤出（队列原样，置首义项）');

  W('sign up', 'verb', '/ˌsaɪn ˈʌp/', '', [], '报名；注册；签约', 'To join a group, course or service by adding your name to a list.', [
    ['报名；登记参加', 'To put your name down so that you can take part in a course, activity or service.', '写下名字以便参加课程、活动或服务。', '可及物也可不及物，常与 for 连用。', 'She signed up for an evening class.', '她报名参加了一个夜校课程。', ['sign up for a course'], ['enrol'], 'verb', '及物', '教育'],
    ['签约受雇；注册登记', 'To agree to a contract, or to be recorded on an official list.', '签订合同，或被登记到正式名册上。', '可及物也可不及物，常与 for/with 连用。', 'He signed up with a new team last week.', '他上周与一支新队签了约。', ['sign up with a team'], ['register'], 'verb', '及物', '商务'],
  ],'signs up~signed up~signing up', [], '短语整体不取成分作根，分级留空；近义 enrol 报名、注册（置首义项）与 register 登记、注册（置签约义项）（队列原样），各一次，短语条目').phrase = true;

  W('signature', 'noun', '/ˈsɪɡnətʃə/', 'A2', ['CET4'], '签名；识别特征', 'A name written by hand as proof of agreement, and a mark that makes a thing recognisable.', [
    ['签名；签字', 'The written form of a name placed on a document to show agreement.', '写在文件上、用以表示同意的名字。', '可数，法律与日常用语，常见 signature required。', 'The contract needs your signature at the bottom.', '合同底部需要你的签名。', ['a signature line', 'signature required'], [], 'noun', 'countable', '法律'],
    ['（个人或品牌的）识别特征', 'A feature that is typical of a person, product or style and helps people recognise it.', '人、产品或风格身上典型的、便于辨认的特征。', '可数，常与 of 连用，媒体与品牌语境。', 'Bright colour is the signature of this designer.', '明亮的色彩是这位设计师的标志。', ['signature style'], ['fingerprint'], 'noun', 'countable', '艺术'],
  ], 'signatures', ['fingerprint'], 'brief 文件与队列不符（见文件头），自扫根 sign A2（author_s2）——sign 全段可见于 signature 且「签名」语义直连，按兄弟派生（posture←pose、regimen←regime 先例）A2 继承（判断项：-ature 不在可继清单）；家族/近义 fingerprint 指纹、识别特征（队列原样，置识别特征义项）');

  W('signature dish', 'noun', '/ˌsɪɡnətʃə ˈdɪʃ/', '', [], '招牌菜；拿手菜', 'The best-known dish of a restaurant or a cook.', [
    ['（餐厅的）招牌菜', 'A particular dish that a restaurant or cook is famous for serving well.', '某家餐厅或某位厨师因做得好而出名的一道菜。', '可数，菜单与美食评论常用。', 'The dumplings are the signature dish of the restaurant.', '饺子是这家店的招牌菜。', ['the signature dish of the restaurant'], ['specialty'], 'noun', 'countable', '饮食'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 specialty 特色菜、专长（队列原样，置唯一义项），短语条目').phrase = true;

  W('significance', 'noun', '/sɪɡˈnɪfɪkəns/', 'B1', ['CET4'], '重要性；意义；显著性', 'How much something matters, or the meaning it carries.', [
    ['重要性；重大意义', 'How much something matters to people or to what happens.', '某事对人或对事态的重要程度。', '不可数，常与 of 连用，或用 attach significance to。', 'The significance of the finding was clear to the team.', '这个发现的重要性对团队而言是清楚的。', ['of great significance', 'attach significance to'], [], 'noun', 'uncountable', '通用'],
    ['意义；含义', 'The meaning carried by a word, a sign or an action.', '词语、符号或行为所带的意思。', '不可数，书面语，常与 of 连用。', 'The significance of the mark remains unknown.', '这个标记的含义至今不明。', ['the significance of a sign'], ['import'], 'noun', 'uncountable', '书面'],
    ['（统计学）显著性', 'The degree to which a result is unlikely to be caused by chance.', '结果不太可能由偶然因素造成的程度。', '不可数，统计与科研术语，常与 level 连用。', 'The effect reached significance at the five per cent level.', '该效应在百分之五的水平上达到了显著性。', ['statistical significance', 'reach significance'], [], 'noun', 'uncountable', '数学'],
  ], '',['significant'], 'brief 文件与队列不符（见文件头），自扫根 significant B1（author_s2）——signific 词首全段共享、-ance 为可继后缀（-ant/-ance 同根交替，同 receptive←reception 先例），B1 继承；不可数、无常用复数，forms 留空；近义 import 意义、要旨（队列原样，置含义义项）');

  W('signpost', 'noun/verb', '/ˈsaɪnpəʊst/', 'A2', [], '路标；里程碑式的标志；清楚地标示', 'A sign that gives directions, and something that makes an argument easy to follow.', [
    ['路标；指示牌', 'A board at the side of a road showing travellers where to go.', '路边告诉行路者方向的牌子。', '可数，英式用词，美式常说 sign。', 'The signpost pointed to the harbour.', '路标指向港口。', ['a signpost to the harbour'], [], 'noun', 'countable', '交通'],
    ['标志；里程碑式的事物', 'Something that shows clearly which stage a process has reached.', '清楚表明进程已到达何种阶段的事物。', '可数，常与 to 连用，引申义。', 'The vote was a signpost to bigger changes ahead.', '这次投票预示着更大的变革即将到来。', ['a signpost to the future'], ['milestone'], 'noun', 'countable', '书面'],
    ['用路标标示；清楚指示', 'To mark a route with signs, or to make a point easy for readers to follow.', '用标志标出路线，或让读者容易抓住要点。', '可及物，写作与教学语境。', 'The editor signposted the main arguments for the reader.', '编辑为读者清楚标出了主要论点。', ['signpost the argument'], [], 'verb', '及物', '书面'],
  ], 'signposts~signposted~signposted~signposting',['sign'], 'brief 文件与队列不符（见文件头），自扫根 sign A2（author_s2）——sign + post 复合词取首成分（同 run-up←run 先例），A2 继承（判断项：整体义由成分合成）；近义 milestone 里程碑（队列原样，置标志义项）');

  W('silence', 'noun/verb', '/ˈsaɪləns/', 'A2', ['CET4'], '沉默；寂静；使安静', 'The state of having no sound or nobody speaking, and the act of making that happen.', [
    ['沉默；缄默', 'The state of not saying anything, especially when you could speak.', '什么都不说的状态，尤指本可以开口时。', '不可数，常见搭配 break the silence、keep silence。', 'A long silence followed his question.', '他问完之后是一阵长长的沉默。', ['break the silence', 'keep silence'], ['mute'], 'noun', 'uncountable', '社交'],
    ['寂静；无声', 'The state in which there is no sound at all.', '完全没有声音的状态。', '不可数，多用于环境描写。', 'The silence in the empty street felt strange.', '空荡街道上的寂静让人觉得异样。', ['complete silence'], [], 'noun', 'uncountable', '自然'],
    ['使安静；使不出声', 'To make somebody or something quiet so that no sound is made.', '让某人或某物安静下来、不再出声。', '可及物，常见被动式 be silenced。', 'The host silenced the crowd with a raised hand.', '主持人举手示意，让全场安静下来。', ['silence the crowd'], [], 'verb', '及物', '媒体'],
  ], 'silences~silenced~silenced~silencing', ['mute'], 'brief 文件与队列不符（见文件头），自扫根 silent A2（author_s2）——silen 词首全段共享（silent 为 silen+t、silence 为 silen+ce 同根交替，同 receptive←reception 先例），A2 继承（判断项）；家族/近义 mute 沉默的（队列原样，置首义项）');
})(typeof window !== 'undefined' ? window : globalThis);
