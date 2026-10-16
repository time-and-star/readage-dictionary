/* data/words/cet/author_s9.js — S 批次 9，缺口 s ~ scald，共 31 条
 * （27 单词 + 4 短语：salary bill、same here、saturday and sunday、say again）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4 × 7：sadden、sadness、sailor、satisfaction、satisfactory、saving、saying；
 * 本批无 CET6）。
 * 扫根结论（brief 显示 ←? 的条目一律纯文本 fs.readFileSync + indexOf 扫 author_*.js 第 4 参，
 * 未 require 全库）：sad A1、sail A2、saint B1、sale A2、same A1、save A2、say A1、satisfy B1
 * （均出自 author_s1.js 第 4 参；person A1 见 author_p1.js）——
 * · brief 根提示直接继承：sadness←sad A1 + -ness、saintly←saint B1 + -ly、sales←sale A2
 *   （复数形式单列）、sameness←same A1 + -ness、satisfied←satisfy B1、saving←save A2、saying←say A1。
 * · 自扫继承：sadden←sad A1 + -en（使动透明后缀）、sailor←sail A2 + -or（施事后缀同 -er 类）、
 *   satisfaction←satisfy B1 + -ation（-fy→-faction 词干变化，规范 §5.5 明示类推）、
 *   salesperson←sale A2（sales + person 复合词取首成分，判断项）、
 *   satisfactory←satisfy B1 + -atory（-ory 类透明后缀，先例 obligatory/preparatory，判断项）。
 * · 留空项：s（字母词）、sabre、sachet、saga、sage、saliva、salivate、salver、sandal、
 *   sap（与 ship 形近但语义不直连，切词假象判断项）、satin、saunter、saut（词头照抄队列
 *   未补重音符）、savour、scald，及 4 个短语（整体不取成分作根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s9.js 必须在 _cet_helper.js 之后加载');

  W('s', 'noun', '/es/', '', [], '字母 s；表示九十、三十的符号', 'The nineteenth letter of the English alphabet, or a sign standing for ninety or thirty.', [
    ['字母 s（字母表第十九个字母）', 'The nineteenth letter of the English alphabet, written in small form as s.', '英语字母表的第十九个字母，小写形式写作 s。', '可数；谈拼写与发音时常用，也用于举例指称单个字母。', 'The word student begins with a small s.', '单词 student 以小写 s 开头。', ['the letter s', 'the nineteenth letter'], [], 'noun', 'countable', '语法'],
    ['代表九十或三十的符号', 'A written sign that stands for ninety or thirty in certain systems of notation.', '在某些记数写法中代表九十或三十的符号。', '多见于旧式账簿、速记与代号写法；本义项按队列原样安放。', 'The clerk put the sign in the margin to show the amount.', '记账员在页边写下这个符号表示数量。', ['a small s', 'the sign s'], ['ninety', 'thirty'], 'noun', 'countable', '书面'],
  ], '', [], '字母词，规范 §5.7 明示留空（判断项）；近义 ninety 九十、thirty 三十（队列原样，置第二义项——s 在若干记数场合代指该两数）');

  W('sabre', 'noun', '/ˈseɪbə/', '', [], '军刀；马刀', 'A long, heavy sword with a curved blade, used especially by cavalry.', [
    ['军刀；马刀', 'A long, heavy sword with one curved cutting edge, used mainly by soldiers on horseback.', '刃口弯曲的长重剑，主要供骑马的士兵使用。', '可数；英式拼写 sabre，美式常写 saber。', 'The officer drew his sabre and gave the order.', '军官拔出军刀下达命令。', ['a cavalry sabre', 'a silver sabre'], ['sword'], 'noun', 'countable', '军事'],
    ['军刀式击剑', 'A style of fencing in which a sabre is used to score points above the waist.', '用军刀式佩剑击打腰部以上部位得分的击剑运动。', '可数，也指该运动使用的剑种；奥运正式项目之一。', 'He won a bronze medal in the sabre event.', '他在军刀项目中赢得一枚铜牌。', ['the sabre event'], [], 'noun', 'countable', '体育'],
  ], 'sabres', ['sword'], 'brief 显示 ←?，自扫库内无 sabre 可继根（借词，美式变体 saber 亦不在库），留空；家族/近义 sword 剑、军刀（队列原样，置首义项）');

  W('sachet', 'noun', '/ˈsæʃeɪ/', '', [], '小袋；香包', 'A small bag holding one amount of a substance, or a small perfumed bag.', [
    ['（一次性）小袋包装', 'A small paper or foil bag that holds one amount of powder, liquid or cream.', '盛放一份粉末、液体或乳霜的小纸袋或锡箔袋。', '可数，日化与食品行业常见的包装单位。', 'She tore open a sachet of shampoo.', '她撕开一包洗发水。', ['a sachet of shampoo', 'a sachet of sauce'], ['packet'], 'noun', 'countable', '家居'],
    ['香包；香囊', 'A small bag of perfumed powder or dried flowers used to give a nice smell to a room or to clothes.', '装有香粉或干花、用来给房间或衣物加香的小袋。', '可数，常放在衣柜或抽屉里。', 'She placed a sachet of lavender in the drawer.', '她在抽屉里放了一袋薰衣草香包。', ['a sachet of lavender'], [], 'noun', 'countable', '家居'],
  ], 'sachets', [], 'brief 显示 ←?，法语借词；指小后缀 -et 不在可继清单（清单内为 -let），库内亦无可见词根，留空；近义 packet 小包装袋（队列原样，置首义项）');

  W('sadden', 'verb', '/ˈsædn/', 'A1', ['CET4'], '使悲伤；使难过', 'To make somebody feel sad and unhappy.', [
    ['使悲伤；使难过', 'To make somebody feel unhappy and heavy in heart.', '使某人心里难过、心情沉重。', '及物动词，多以人作宾语，常见于被动式 be saddened。', 'The long farewell saddened all of them.', '漫长的分别让所有人都很难过。', ['sadden the family', 'be saddened by'], ['depress'], 'verb', '及物', '情感'],
  ], 'saddens~saddened~saddened~saddening', ['depress'], 'brief 显示 ←?，自扫 sad A1（author_s1.js 第 4 参）+ -en（使动透明后缀），语义直连，A1 继承；家族/近义 depress 使沮丧、使消沉（队列原样，置唯一义项）');

  W('sadness', 'noun', '/ˈsædnəs/', 'A1', ['CET4'], '悲伤；哀愁', 'The feeling of being unhappy and the mood it creates.', [
    ['悲伤；悲哀', 'The feeling of being unhappy, heavy in spirit or downhearted.', '情绪低落、心里沉重的不快感受。', '抽象名词，通常不加复数。', 'A deep sadness settled over the room.', '一种深深的悲伤笼罩了整个房间。', ['a feeling of sadness', 'deep sadness'], ['gloom', 'sorrow'], 'noun', 'uncountable', '情感'],
    ['哀愁；伤感（文艺描写）', 'The unhappy mood expressed by a story, a song or a scene.', '故事、歌曲或场景中传达出的不快乐氛围。', '不可数，多用于文学与艺术评论。', 'The song is full of a quiet sadness.', '这首歌充满安静的哀愁。', ['an air of sadness'], [], 'noun', 'uncountable', '文学'],
  ], '', ['gloom', 'sorrow'], 'brief 根提示 ←sad A1 悲伤的 + -ness（透明名词后缀），A1 继承；抽象不可数、无常用复数故 forms 留空；家族/近义 gloom 忧郁、sorrow 悲伤（队列原样，置首义项）');

  W('saga', 'noun', '/ˈsɑːɡə/', '', [], '长篇传奇故事；一连串事件', 'A long story in several parts about heroic events, or a long series of related events.', [
    ['长篇传奇故事', 'A long story told in several parts about extraordinary events and adventures.', '分若干部分讲述非凡事件与历险的长篇故事。', '可数；原指北欧萨迦，现泛指题材宏大的连载故事。', 'The novel follows the saga of three generations.', '这部小说讲述三代人的传奇故事。', ['a family saga', 'a Norse saga'], ['epic'], 'noun', 'countable', '文学'],
    ['一连串（复杂而漫长的）事件', 'A long and complicated series of connected events, often told in the news.', '一连串复杂而漫长的关联事件，常见于新闻报道。', '可数，常带轻松或夸张语气。', 'The move turned into a saga of delays.', '这次搬迁变成了一连串拖延事件。', ['a saga of delays'], [], 'noun', 'countable', '媒体'],
  ], 'sagas', ['epic'], 'brief 显示 ←?，古诺斯语 saga，库内无可继词根（epic 为家族/近义非构词成分），留空；家族/近义 epic 史诗般的故事（队列原样，置首义项）');

  W('sage', 'noun/adjective', '/seɪdʒ/', '', [], '圣人；贤人；鼠尾草；贤明的', 'A very wise person, a plant used in cooking, or showing good judgement.', [
    ['圣人；贤人', 'A person who is widely known for wisdom and sound judgement.', '因智慧与判断力出众而受人尊敬的人。', '可数，常带敬意。', 'The villagers always asked the old sage for advice.', '村民总是向那位智者请教。', ['a village sage', 'local sages'], ['wise'], 'noun', 'countable', '文化'],
    ['鼠尾草', 'A grey-green plant whose leaves are used to give flavour to food.', '叶子可为食物调味的灰绿色植物。', '可数指植株，也可不可数指香料；西餐常用。', 'She fried the onions with sage and served them hot.', '她用鼠尾草炒洋葱，趁热端上。', ['sage and onion', 'fresh sage'], [], 'noun', 'countable', '饮食'],
    ['贤明的；贤德的', 'Having or showing good judgement and deep wisdom.', '表现出良好判断力与深厚智慧的。', '多作定语，常形容建议与言论。', 'He offered a few sage words on money.', '就金钱问题他给了几句明智的话。', ['sage advice'], [], 'adjective', '定语/表语', '性格'],
  ], 'sages', ['wise'], 'brief 显示 ←?，拉丁 sapere（明智），库内无可继根，留空；家族/近义 wise 明智的（队列原样，置首义项）');

  W('sailor', 'noun', '/ˈseɪlə/', 'A2', ['CET4'], '水手；海员', 'A person whose job is to work on a ship or boat at sea.', [
    ['水手；海员', 'A person whose job is to work on a vessel that travels at sea.', '以在航海船只上工作为职业的人。', '可数；也用于海军等级名称，如 able sailor。', 'The sailor climbed the rope without shoes.', '那名水手光着脚爬上了缆绳。', ['a crew of sailors', 'a sailor on leave'], ['marine'], 'noun', 'countable', '交通'],
    ['不晕船的人', 'A person who does not feel sick when a boat or a ship is moving.', '乘船时不会觉得恶心的人。', '可数，常以 a good sailor 出现。', 'After a week at sea he was a good sailor.', '出海一周后他乘船已经不晕了。', ['be a good sailor'], [], 'noun', 'countable', '健康'],
  ], 'sailors',['sail'], 'brief 显示 ←?，自扫 sail A2（author_s1.js 第 4 参）+ -or（施事名词透明后缀，同 -er 类），语义直连，A2 继承；近义 marine 海军陆战队员、海的（队列原样，置首义项）');

  W('saintly', 'adjective', '/ˈseɪntli/', 'B1', [], '圣人般的；极善良的', 'Very kind, patient and good, like a saint.', [
    ['圣人般的；极善良的', 'Behaving in such a kind, patient and good way that a person seems like a saint.', '行为善良耐心，让人觉得像圣人一样。', '多作定语，也可作表语，含敬意。', 'She had a saintly patience with the children.', '她对孩子们有着圣人般的耐心。', ['a saintly smile', 'a saintly life'], ['holy'], 'adjective', '定语/表语', '宗教'],
  ], '',['saint'], 'brief 根提示 ←saint B1 圣徒 + -ly（透明形容词后缀），B1 继承；近义 holy 神圣的（队列原样，置唯一义项）');

  W('salary bill', 'noun', '/ˈsæləri bɪl/', '', [], '工资单；工资总额', 'A list of wages to be paid, or the total amount an organization pays its workers.', [
    ['工资单；薪金清单', 'A written list that shows the wages each worker is due to be paid.', '列出每位员工应得工资的书面清单。', '可数；与 payroll 常通用，多用于企业与预算文件。', 'The finance office printed the salary bill for June.', '财务科打印了六月的工资单。', ['the monthly salary bill', 'draw up a salary bill'], ['payroll'], 'noun', 'countable', '商务'],
    ['工资总额；薪酬支出', 'The total amount of money that an organization spends on paying the people who work for it.', '机构为支付员工薪酬所花的钱的总额。', '多作不可数，常与 of 连用，预算讨论常用。', 'The school cut its salary bill by hiring fewer assistants.', '学校通过少聘助手压减了工资支出。', ['cut the salary bill', 'the annual salary bill'], [], 'noun', 'uncountable', '商务'],
  ],'salary bills', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 payroll 工资单、薪金表（队列原样，置首义项，短语条目）').phrase = true;

  W('sales', 'noun', '/seɪlz/', 'A2', [], '销售额；销售业务（复数）', 'The amounts of goods sold, or the activity of selling them.', [
    ['销售额；销量', 'The total amount of goods sold during a particular period.', '特定时期内售出商品的总量。', '复数形式单列词条；作主语时谓语用复数。', 'Car sales rose sharply last month.', '上月汽车销量大幅上升。', ['car sales', 'sales figures'], ['turnover'], 'noun', 'countable', '商务'],
    ['销售业务；销售部门', 'The work or the department that is involved in selling goods to customers.', '向顾客推销商品的工作或部门。', '常与 in 连用表示从事销售岗位。', 'She has worked in sales for five years.', '她做销售已经五年了。', ['work in sales', 'the sales team'], [], 'noun', 'countable', '职业'],
  ],'sales', ['turnover'], 'sale A2 的复数形式单列词条（同 rooms 先例），brief 根提示 ←sale A2，A2 继承；复数形式单列故 forms 留空；家族/近义 turnover 营业额（队列原样，置首义项）');

  W('salesperson', 'noun', '/ˈseɪlspɜːsn/', 'A2', [], '售货员；推销员', 'A person whose job is to sell goods.', [
    ['售货员；推销员', 'A person employed to sell goods in a shop or directly to customers.', '受雇在商店里或直接向顾客卖货的人。', '可数；中性说法，用于替代旧称 salesman 与 saleswoman。', 'A salesperson showed us the new models.', '一名售货员给我们看了新款样机。', ['a salesperson in a shop', 'an experienced salesperson'], ['salesman'], 'noun', 'countable', '职业'],
  ], 'salespeople', ['salesman'], 'brief 显示 ←?，sales + person 复合词取首成分（sales 为 sale A2 的复数形，在库 author_s1.js；person A1 见 author_p1.js），销售+人与 sale 语义直连，A2 继承（判断项：首成分以复数形态出现）；家族/近义 salesman 男售货员（队列原样，置唯一义项）');

  W('saliva', 'noun', '/səˈlaɪvə/', '', [], '唾液；口水', 'The thin liquid that is produced in the mouth.', [
    ['唾液；口水', 'The thin liquid produced in the mouth that helps soften and digest food.', '口腔内分泌的、有助湿润与消化食物的稀薄液体。', '不可数，医学术语与日常用语均可。', 'The dentist checked the flow of saliva.', '牙医检查了唾液分泌情况。', ['a flow of saliva', 'saliva production'], ['spit'], 'noun', 'uncountable', '健康'],
  ], '', ['spit'], 'brief 显示 ←?，拉丁 saliva，库内无可继根（spit 唾液为家族/近义非构词成分），留空；不可数、无复数故 forms 留空；家族/近义 spit 唾液、吐（队列原样，置唯一义项）');

  W('salivate', 'verb', '/ˈsælɪveɪt/', '', [], '分泌唾液；垂涎', 'To produce liquid in the mouth, or to want something eagerly.', [
    ['分泌唾液', 'To produce saliva in the mouth, especially as a response to food or to a smell.', '在口腔中分泌唾液，尤指见到或闻到食物时的反应。', '不及物，常与 at 或 over 连用，生理学常用词。', 'The dog salivated at the smell of the meat.', '狗闻到肉味便分泌唾液。', ['salivate at the smell'], [], 'verb', '不及物', '健康'],
    ['垂涎；眼红', 'To want something so strongly that the wish is obvious to other people.', '对某物的渴望强烈到旁人都看得出来。', '不及物，常与 over 连用，含夸张语气。', 'Rivals salivated over the new contract.', '对手们对新合同垂涎不已。', ['salivate over the deal'], ['water'], 'verb', '不及物', '心理'],
  ], 'salivates~salivated~salivated~salivating', [], 'brief 显示 ←?，拉丁 salivare，根 saliva 本批入库且无级可继、-ate 亦不在可继清单，留空；近义 water 流口水（mouth waters 中的动词用法，队列原样，置第二义项）');

  W('salver', 'noun', '/ˈsælvə/', '', [], '托盘；茶盘', 'A flat tray on which food, drinks or letters are carried and offered.', [
    ['托盘；茶盘', 'A flat metal tray on which food, drinks or letters are carried and offered to somebody.', '用于端送食物、饮料或信件的金属平盘。', '可数，多为银制，正式场合与服务行业用语。', 'The waiter carried the glasses on a silver salver.', '侍者用银托盘端着玻璃杯。', ['a silver salver', 'present on a salver'], ['tray'], 'noun', 'countable', '家居'],
  ], 'salvers', [], 'brief 显示 ←?，借词 salver（源自葡萄牙语，原指试毒盘），库内无可继根，留空；近义 tray 托盘（队列原样，置唯一义项）');

  W('same here', 'adjective', '/seɪm hɪə/', '', [], '我也一样；彼此彼此', 'Used to say that your own feeling or situation is exactly the same.', [
    ['我也一样（应答相同感受）', 'Used in reply to say that your own feeling or situation is exactly the same.', '用于回答对方，表示自己的感受或处境与对方完全相同。', '口语应答，相当于 I feel the same way；常单独成句或置于句末。', 'It rained all week at the coast, and it was the same here in the city.', '海边下了一整周雨，城里这里也一样。', ['and the same here'], ['likewise'], 'adjective', '表语', '口语'],
    ['彼此彼此；回敬对方', 'Used to answer a criticism by pointing out that it applies to the speaker as well.', '回应指责，说明对方同样如此。', '口语回敬语，语气可带不满或玩笑，常单独成句。', 'You never listen, he said, and the answer was the same here.', '你从来不听人说话，他说，回答是彼此彼此。', ['the same here to you'], [], 'adjective', '表语', '口语'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 likewise 同样地（队列原样，置首义项，短语条目）').phrase = true;

  W('sameness', 'noun', '/ˈseɪmnəs/', 'A1', [], '单调；千篇一律；相同', 'The quality of being alike, with no change or variety.', [
    ['单调；千篇一律', 'The quality of being too much alike, so that nothing changes or varies.', '过于雷同、毫无变化的特性。', '不可数，常带贬义，与 of 连用。', 'The sameness of the daily routine bored him.', '日常事务的千篇一律让他厌倦。', ['the sameness of daily life'], ['monotony'], 'noun', 'uncountable', '心理'],
    ['相同；同一（正式）', 'The state of being identical in every detail, used in formal writing.', '各方面细节完全一致的状态，多用于正式书面语。', '不可数，常见于法律与学术文本。', 'The two accounts show a perfect sameness of detail.', '两份记述在细节上完全一致。', ['exact sameness'], [], 'noun', 'uncountable', '书面'],
  ], '', ['monotony'], 'brief 根提示 ←same A1 相同 + -ness（透明名词后缀），A1 继承；抽象不可数、无复数故 forms 留空；家族/近义 monotony 单调（队列原样，置首义项）');

  W('sandal', 'noun', '/ˈsændl/', '', [], '凉鞋', 'An open shoe held onto the foot by straps.', [
    ['凉鞋', 'An open shoe made of a sole held to the foot by one or more straps.', '由鞋底和一根或多根带子构成的敞脚鞋。', '可数，常以复数 sandals 出现。', 'She wore leather sandals to the beach.', '她穿着皮凉鞋去海边。', ['a pair of sandals', 'leather sandals'], ['clog'], 'noun', 'countable', '外貌'],
  ], 'sandals', [], 'brief 显示 ←?，希腊语 sandalion（便鞋），库内无可继根（sand 沙与本词不同源，切词假象判断项），留空；近义 clog 木底鞋（队列原样，置唯一义项）');

  W('sap', 'noun/verb', '/sæp/', '', [], '树液；元气；使耗竭', 'Liquid in plants, the energy needed to act, or to drain strength away.', [
    ['树液；汁液', 'The liquid that moves through a plant and carries food to its growing parts.', '在植物体内流动、把养分输送到生长部位的液体。', '不可数，多指树木。', 'The sap rose in the stems as spring came.', '春天来了，树液在茎中上升。', ['the sap of a tree'], [], 'noun', 'uncountable', '自然'],
    ['元气；活力', 'The strength and energy that a person needs in order to act and stay cheerful.', '一个人行动并保持振作所需要的力气与精力。', '不可数，常与 drain 搭配。', 'The long illness drained away his sap.', '长期的病痛耗掉了他的元气。', ['drain away the sap'], [], 'noun', 'uncountable', '心理'],
    ['使耗竭；逐渐削弱', 'To drain strength or energy away from a person or an organization.', '从人或组织身上逐渐抽走力气与精力。', '及物动词，常见于被动式与 be sapped 结构。', 'Years of worry sapped his strength completely.', '多年的忧虑把他的精力耗光了。', ['sap sb of confidence'], ['undermine'], 'verb', '及物', '心理'],
  ], 'saps~sapped~sapped~sapping', [], 'brief 显示 ←?，古英语 sāp（树液），库内无可继根；与库内 ship 形近但语义不直连，属切词假象（规范 §5.7 举例），留空（判断项）；近义 undermine 逐渐削弱（队列原样，置第三义项）');

  W('satin', 'noun/adjective', '/ˈsætɪn/', '', [], '缎子；缎面的；光滑发亮的', 'A smooth shiny fabric, or having a smooth shiny surface.', [
    ['缎子；缎面织物', 'A smooth and shiny fabric with a soft glossy surface, made from silk or man-made threads.', '表面光滑发亮、手感柔和的面料，由丝或人造纤维织成。', '不可数，指面料本身。', 'The dress was made of white satin.', '这条连衣裙是白色缎面的。', ['a satin dress', 'satin trim'], ['silk'], 'noun', 'uncountable', '工业'],
    ['缎面的；光滑发亮的', 'Having a smooth and shiny surface that looks like satin.', '表面光滑发亮、像缎子一样的。', '多作定语，也可作表语。', 'The polish left a satin sheen on the wood.', '上光剂在木面上留下缎子般的光泽。', ['a satin finish', 'satin gloves'], [], 'adjective', '定语/表语', '外貌'],
  ],'satins', ['silk'], 'brief 显示 ←?，借词 satin（源自阿拉伯语，原指产丝地区），库内无可继根（silk 为家族/近义非构词成分），留空；指面料时不可数故 forms 留空；家族/近义 silk 丝绸（队列原样，置首义项）');

  W('satisfaction', 'noun', '/ˌsætɪsˈfækʃn/', 'B1', ['CET4'], '满意；满足', 'The feeling of pleasure when a hope, a need or a demand has been met.', [
    ['满意；满足感', 'A feeling of pleasure when a hope, a need or a demand has been met.', '希望、需要或要求得到实现时的愉快感受。', '不可数，常与 sense of 或 in 连用。', 'She felt a sense of satisfaction after the exam.', '考试结束后她感到一种满足感。', ['a sense of satisfaction', 'find satisfaction in'], ['pride'], 'noun', 'uncountable', '心理'],
    ['履行；偿付（正式）', 'The act of fulfilling a duty, a debt or a formal demand.', '履行义务、清偿债务或满足正式要求的行为。', '多不可数，常见于法律与商务文件。', 'The payment was made in satisfaction of the whole claim.', '这笔付款用于清偿全部索赔。', ['in satisfaction of the claim'], [], 'noun', 'uncountable', '法律'],
  ],'satisfactions',['satisfy'], 'brief 显示 ←?，规范 §5.5 明示类推：自扫 satisfy B1（author_s1.js 第 4 参）+ -ation（-fy→-faction 词干变化），B1 继承；抽象不可数故 forms 留空；近义 pride 自豪、成就感（队列原样，置首义项）');

  W('satisfactory', 'adjective', '/ˌsætɪsˈfæktəri/', 'B1', ['CET4'], '令人满意的；合格的', 'Good enough to be accepted as meeting the required standard.', [
    ['令人满意的；合乎要求的', 'Good enough to meet what people expect or what is required.', '达到人们预期或要求的。', '多作定语，也可作表语；比 good 弱，比 poor 强。', 'The test results were satisfactory and no further checks were needed.', '检查结果令人满意，无需再做复查。', ['a satisfactory result', 'a satisfactory answer'], ['acceptable'], 'adjective', '定语/表语', '教育'],
    ['尚可的；不算出色的', 'Acceptable, but not good enough to be called excellent.', '可以接受，但称不上出色。', '常带保留语气，可与 only 连用。', 'His work is only satisfactory, so the manager wants more.', '他的工作只算过得去，所以经理要求更高。', ['only a satisfactory performance'], [], 'adjective', '定语', '教育'],
  ], '',['satisfy'], 'brief 显示 ←?，自扫 satisfy B1（author_s1.js 第 4 参）+ -atory（-ory 类透明后缀，先例 obligatory←oblige、preparatory←prepare），-fy→-fact- 词干变化同规范 §5.5 类推，B1 继承（判断项）；近义 acceptable 可接受的（队列原样，置首义项）');

  W('satisfied', 'adjective', '/ˈsætɪsfaɪd/', 'B1', [], '满意的；吃饱的；确信的', 'Feeling pleased with a result, no longer hungry, or sure that something is true.', [
    ['满意的；满足的', 'Pleased with what you have or with the way something has turned out.', '对所拥有的或事情的结果感到愉快。', '多作表语，常与 with 连用。', 'The manager was satisfied with the new plan.', '经理对新方案感到满意。', ['a satisfied customer', 'be satisfied with'], ['content', 'happy'], 'adjective', '表语', '心理'],
    ['吃饱的；饱足的', 'Having eaten enough food and no longer feeling hungry.', '吃够了食物、不再觉得饿。', '多作表语，常与 after 连用。', 'A bowl of soup made them feel satisfied.', '一碗汤让他们觉得很饱足。', ['feel satisfied after a meal'], ['full'], 'adjective', '表语', '饮食'],
    ['确信的；认定的', 'Feeling sure that something is true after checking or thinking about it.', '在核实或思考之后确信某事为真。', '多作表语，后接 that 从句。', 'The engineer was satisfied that the bridge was strong.', '工程师确信这座桥足够坚固。', ['be satisfied that'], [], 'adjective', '表语', '心理'],
  ], '', ['content', 'happy'], 'brief 根提示 ←satisfy B1 使满意 + -ed（分词形容词透明后缀），B1 继承；家族 content 满足的、happy 高兴的（队列原样）；近义 content、happy 置首义项，full 吃饱的置第二义项（队列原样）');

  W('saturday and sunday', 'noun', '/ˈsætədeɪ ənd ˈsʌndeɪ/', '', [], '星期六和星期日；周末双休', 'The two days that follow Friday, or the two days of rest at the end of the week.', [
    ['星期六与星期日', 'The two days that come after Friday and before Monday in every week.', '每周位于星期五之后、星期一之前的两天。', '可数，指具体日期时首字母常大写；本词条小写照抄队列。', 'The market runs on Saturday and Sunday every week.', '市场每周星期六和星期日营业。', ['on saturday and sunday', 'last saturday and sunday'], [], 'noun', 'countable', '通用'],
    ['周末双休（两天假期）', 'The two days of rest at the end of the working week.', '工作周结束时的两天休息日。', '可数，口语中常与 weekend 换用。', 'They kept Saturday and Sunday free for the family.', '他们把周六周日留给家人。', ['the saturday and sunday off'], ['weekend'], 'noun', 'countable', '家庭'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 weekend 周末（队列原样，置第二义项，短语条目；词头小写照抄队列）').phrase = true;

  W('saunter', 'verb/noun', '/ˈsɔːntə/', '', [], '闲逛；漫步', 'To walk in a slow, relaxed way, or such a walk.', [
    ['漫步；闲逛', 'To walk slowly and in a relaxed way, without hurrying.', '不慌不忙、悠闲地走路。', '不及物，常与 along、down 或 into 连用。', 'They sauntered down the road without saying much.', '他们沿路闲逛，话不多。', ['saunter down the street', 'saunter into the room'], ['stroll'], 'verb', '不及物', '通用'],
    ['闲逛；漫步（名词）', 'A slow and relaxed walk taken for pleasure.', '为放松而进行的悠闲散步。', '可数，常与 go for 连用。', 'After lunch we went for a saunter in the park.', '午饭后我们在公园散了散步。', ['go for a saunter', 'an afternoon saunter'], [], 'noun', 'countable', '通用'],
  ], 'saunters~sauntered~sauntered~sauntering', ['stroll'], 'brief 显示 ←?，词源不确定（民间词源说法不足据），库内无可继根（stroll 为家族/近义非构词成分），留空；家族/近义 stroll 闲逛（队列原样，置首义项）');

  W('saut', 'verb', '/ˈsəʊteɪ/', '', [], '（烹调）快煎；煸炒', 'To fry food quickly in a little fat over a high heat.', [
    ['快煎；煸炒', 'To cook food quickly in a small amount of fat over a high heat.', '用少量油脂大火快速翻炒食物。', '及物；词头照抄队列，为 sauté 的残缺形式，不补重音符。', 'Add the onions and saut them over a high heat for two minutes.', '放入洋葱，大火快煎两分钟。', ['saut the onions'], ['fry'], 'verb', '及物', '饮食'],
  ], '', ['fry'], '词头照抄队列未补重音符（同 risqu 先例）；brief 显示 ←?，法语 sauter（跳跃）的残缺形，库内无可继根，留空；家族/近义 fry 煎炸（队列原样，置唯一义项）');

  W('saving', 'noun', '/ˈseɪvɪŋ/', 'A2', ['CET4'], '节约；储蓄；救助', 'The act of using less or of keeping money aside, or the act of rescuing.', [
    ['节约；节俭', 'The act of using less money, time or material than before.', '比从前少花钱、少花时间或少用材料的行为。', '可数，常与 make 或 achieve 连用。', 'The new pump made a saving in energy costs.', '新水泵节省了能源开支。', ['make a saving', 'a saving of ten per cent'], ['economy', 'thrift'], 'noun', 'countable', '商务'],
    ['储蓄金；存款', 'Money that is put aside and not spent, so that it can be used later.', '存起来暂时不花、留待以后使用的钱。', '常用复数 savings；与 account 连用指存款账户。', 'The savings are kept in one bank account for now.', '这些存款暂时都放在一个银行账户里。', ['personal savings', 'a savings account'], [], 'noun', 'countable', '金融'],
    ['救助；挽救', 'The act of saving a person or a thing from harm or from loss.', '把人或事物从伤害、损失中救出来的行为。', '多不可数，常与 of 连用。', 'The saving of the old bridge took two years.', '抢救这座老桥花了两年时间。', ['the saving of lives'], ['rescue'], 'noun', 'uncountable', '社会'],
  ], 'savings',['save'], 'brief 根提示 ←save A2 节省 + -ing（分词转名词，透明后缀），A2 继承；家族列空；近义 economy 节约、thrift 节俭置首义项，rescue 救助置第三义项（队列原样）');

  W('savour', 'noun/verb', '/ˈseɪvə/', '', [], '风味；滋味；品味', 'The special quality of food, the pleasure it gives, or to enjoy it slowly.', [
    ['风味；滋味', 'A special quality of food or drink that is noticed by the mouth and nose.', '食物或饮料给口鼻带来的特有品质。', '不可数，也可用复数指多种风味；英式拼写 savour。', 'The savour of the soup lingered after the meal.', '这道汤的滋味在饭后久久不散。', ['the savour of fresh bread', 'a rich savour'], ['flavor', 'taste'], 'noun', 'uncountable', '饮食'],
    ['乐趣；趣味', 'The pleasure and interest that an experience gives you.', '一段经历带给你的愉快与兴味。', '不可数，常与 of 连用，较书面。', 'He slowed down to enjoy the savour of victory.', '他放慢脚步，享受胜利的喜悦。', ['the savour of victory'], [], 'noun', 'uncountable', '情感'],
    ['品味；津津有味地享受', 'To enjoy food or an experience slowly and fully.', '慢慢而充分地享受食物或某种经历。', '及物动词，也可与 of 连用，较书面。', 'She savoured every mouthful of the meal.', '她细细品味这顿饭的每一口。', ['savour every mouthful', 'savour the moment'], ['relish'], 'verb', '及物', '饮食'],
  ], 'savours~savoured~savoured~savouring', [], 'brief 显示 ←?，拉丁 sapēre（有味道），-our 不在可继清单且库内无根，留空；近义 flavor 风味、taste 滋味置首义项，relish 津津品味置第三义项（队列原样，英式拼写 savour）');

  W('say again', 'verb', '/seɪ əˈɡen/', '', [], '再说一遍；请重复', 'To say something once more, or to ask somebody to repeat it.', [
    ['请再说一遍（请求重复）', 'To ask somebody to repeat what was said because it was not heard clearly.', '因没有听清而请对方把话重复一遍。', '不及物短语，口语中常单独成句。', 'The signal was poor, so the operator asked him to say again.', '信号不好，所以接线员请他再说一遍。', ['say again please'], [], 'verb', '不及物', '口语'],
    ['再说一遍；重复说', 'To say the same words or the same message a second time.', '把同样的话或同样的信息再说一次。', '可及物短语，宾语可置于中间：say it again。', 'Say again what you told me this morning.', '把我上午告诉你的再说一遍。', ['say it again', 'say the whole thing again'], ['repeat'], 'verb', '及物', '口语'],
  ],'says again~said again~saying again', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 repeat 重复（队列原样，置第二义项，短语条目）').phrase = true;

  W('saying', 'noun', '/ˈseɪɪŋ/', 'A1', ['CET4'], '谚语；格言；说法', 'A well-known short statement of advice, or a remark made by somebody.', [
    ['谚语；格言', 'A short, well-known statement that gives advice or expresses a general truth.', '简短而众所周知、用于劝诫或表达普遍道理的话。', '可数，常与 as 连用。', 'As the saying goes, every cloud has a silver lining.', '正如那句谚语所说，黑暗中总有一线光明。', ['as the saying goes', 'a well-known saying'], ['proverb'], 'noun', 'countable', '文化'],
    ['说法；言论', 'A particular remark or way of expressing something that somebody has used.', '某人用过的具体说法或表达方式。', '可数，较书面。', 'The phrase is a regional saying that outsiders rarely use.', '这个说法是地区性的，外地人很少使用。', ['a regional saying'], [], 'noun', 'countable', '书面'],
  ], 'sayings', ['proverb'], 'brief 根提示 ←say A1 说 + -ing（动名词转名词，透明后缀），A1 继承；家族/近义 proverb 谚语（队列原样，置首义项）');

  W('scald', 'verb/noun', '/skɔːld/', '', [], '烫伤；烫洗（器具）', 'To injure skin with hot liquid, to clean a vessel with boiling water, or such an injury.', [
    ['烫伤（皮肤）', 'To hurt the skin by means of very hot liquid or of steam.', '用高温液体或蒸汽使皮肤受伤。', '及物动词，也常见于被动式 be scalded。', 'Be careful not to scald yourself on the kettle.', '小心别被水壶烫伤。', ['scald the hand', 'be scalded by steam'], ['burn'], 'verb', '及物', '健康'],
    ['（用沸水）烫洗', 'To clean a container by pouring boiling water into it and around it.', '把沸水倒入容器内部及四周进行清洁。', '及物动词，常用于奶瓶、酒瓶等器具。', 'Scald the bottles before filling them.', '装瓶前先用沸水烫洗瓶子。', ['scald the bottles'], [], 'verb', '及物', '家居'],
    ['烫伤处；烫伤', 'An injury or a wound caused by very hot liquid or by steam.', '由高温液体或蒸汽造成的伤害。', '可数；scalding 亦可指同一类伤害。', 'The hot soup left a small scald on one hand.', '热汤在一只手上留下了一小块烫伤。', ['a scald on the arm'], [], 'noun', 'countable', '健康'],
  ], 'scalds~scalded~scalded~scalding', ['burn'], 'brief 显示 ←?，库内无可继根（burn 为家族/近义非构词成分，非构词根），留空；家族/近义 burn 烫伤、烧伤（队列原样，置首义项）');
})(typeof window !== 'undefined' ? window : globalThis);
