/* data/words/cet/author_b7.js · 手敲词条 B（七）：bring back ~ byword（含 12 短语，B 批收尾）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_b7.js 必须在 _cet_helper.js 之后加载');

  W('bring back', 'verb', '/ˌbrɪŋ ˈbæk/', '', [], '带回；恢复；唤起', 'To make someone or something return, or to make a custom or memory return.', [
    ['带回；使返回', 'To make someone or something return to a place.', '使某人或某物回到某处。', '及物、可分动词。', 'He brought the tools back on Friday.', '他周五把工具带了回来。', ['bring it back'], [], 'verb', '及物', '通用'],
    ['恢复；唤起', 'To make a custom or feeling return, or to remind someone of something.', '使风俗、感觉重现，或勾起某人的回忆。', '常见 bring back memories、bring back a tradition。', 'The song brought back happy memories.', '这首歌唤起了快乐的回忆。', ['bring back memories'], ['evoke', 'restore'], 'verb', '及物', '通用'],
  ],'brings back~brought back~bringing back', [], '短语动词：带回与恢复、唤起两义；近义 evoke 唤起、restore 恢复。分级留空').phrase = true;

  W('bring in', 'verb', '/ˌbrɪŋ ˈɪn/', '', [], '引进；进口', 'To introduce something new, or to bring goods in from abroad.', [
    ['引进；引入', 'To start using something new, or to bring someone into a group.', '开始采用新事物，或让某人加入某群体。', '及物、可分动词：bring in a rule/a person。', 'The city brought in a new parking rule.', '该市推出了一项新的停车规定。', ['bring in changes'], ['introduce'], 'verb', '及物', '通用'],
    ['进口；引进（产品）', 'To bring goods or people into a country from abroad.', '从国外把货物或人员带进国内。', '及物，如 bring in raw materials（进口原材料）。', 'We bring in most of our spare parts.', '我们的备件大部分靠进口。', ['bring in goods'], ['import'], 'verb', '及物', '商务'],
  ],'brings in~brought in~bringing in', ['import', 'introduce'], 'bring + in；家族 import 进口、introduce 引进（规则、人）。分级留空').phrase = true;

  W('bring on', 'verb', '/ˌbrɪŋ ˈɒn/', '', [], '引起；导致', 'To cause something bad to happen, especially illness or trouble.', [
    ['引起；导致（坏事）', 'To cause something bad to happen, especially illness or trouble.', '导致坏事发生，尤指疾病或麻烦。', '及物、可分动词：bring on a headache。', 'Stress brought on his illness.', '压力导致他生病。', ['bring on trouble'], ['incur'], 'verb', '及物', '健康'],
  ], '', [], 'bring + on；近义 incur 招致（债务、责难，正式）。分级留空').phrase = true;

  W('bring round', 'verb', '/ˌbrɪŋ ˈraʊnd/', '', [], '使苏醒；说服', 'To make someone regain consciousness, or to persuade them to agree.', [
    ['使苏醒', 'To make someone regain consciousness.', '使某人恢复知觉。', '及物；英式 bring round = 美式 bring around。', 'She brought him round with a cold cloth.', '她用冷毛巾让他苏醒了。', ['bring him round'], ['revive'], 'verb', '及物', '健康'],
    ['说服；使改变主意', 'To persuade someone to agree with you.', '说服某人同意你的看法。', '及物，口语：bring sb round to sth。', 'I finally brought him round to our plan.', '我终于说服他接受了我们的计划。', ['bring sb round to'], [], 'verb', '及物', '通用'],
  ],'brings round~brought round~bringing round', [], 'bring + round（英式，= 美式 around）；近义 revive 使复苏。分级留空').phrase = true;

  W('bring up', 'verb', '/ˌbrɪŋ ˈʌp/', '', [], '抚养；提出', 'To care for a child until they are adults, or to mention a subject.', [
    ['抚养；养育', 'To care for a child until they are old enough to look after themselves.', '照顾孩子直到他们能自立。', '及物：bring up a child；常用被动。', 'She was brought up by her grandmother.', '她由祖母抚养长大。', ['bring up children'], ['parent', 'rear'], 'verb', '及物', '家庭'],
    ['提出；提起', 'To mention a subject for other people to discuss.', '提出某个话题供讨论。', '及物、可分动词。', 'He brought up an important point.', '他提出了一个要点。', ['bring up the subject'], [], 'verb', '及物', '通用'],
  ],'brings up~brought up~bringing up', [], '短语动词：抚养与提出两义；近义 parent 抚养（动词，罕）、rear 抚养（美式正式）。分级留空').phrase = true;

  W('british', 'adjective', '/ˈbrɪtɪʃ/', '', [], '英国的；英国人的', 'Connected with the United Kingdom or its people.', [
    ['英国的；英国人的', 'Connected with the United Kingdom, its people, or its culture.', '与联合王国、其人民或文化有关的。', '形容词，首字母通常大写 British，本词库收小写词条形。', 'She has a British passport.', '她持有英国护照。', ['British culture'], ['imperial'], 'adjective', '定语', '社会'],
  ], '', ['imperial'], '国名形容词；近义 imperial 帝国的（含殖民与君主语义，范围不同）。分级留空');

  W('broadcaster', 'noun', '/ˈbrɔːdkɑːstə(r)/', 'B1', [], '广播公司；播音员', 'A person or company that sends out radio or television programmes.', [
    ['播音员；广播员', 'A person whose job is to present radio or television programmes.', '职业是主持广播电视节目的人。', '可数。', 'She worked as a news broadcaster.', '她做过新闻播音员。', ['a news broadcaster'], [], 'noun', 'countable', '文化'],
    ['广播公司；电视台', 'A company or organization that sends out radio or television signals.', '发送广播或电视信号的公司或机构。', '可数，如 the BBC is a broadcaster。', 'The BBC is a public broadcaster.', '英国广播公司是一家公共广播机构。', ['a national broadcaster'], ['station'], 'noun', 'countable', '文化'],
  ], 'broadcasters', ['broadcast'], '←broadcast B1 广播 + -er（表人/机构），B1 继承；近义 station 电台/电视台（发射方）');

  W('broadcasting', 'noun', '/ˈbrɔːdkɑːstɪŋ/', 'B1', [], '广播；播出', 'The activity of sending out radio or television programmes.', [
    ['广播；播出', 'The activity of sending out radio or television programmes for people to receive.', '发送广播电视节目供公众收听收看的活动。', '不可数，常见 live broadcasting（直播）。', 'Live broadcasting began in the 1930s.', '现场广播始于 20 世纪 30 年代。', ['live broadcasting'], ['telecommunications', 'television'], 'noun', 'uncountable', '文化'],
  ], '', ['television'], '←broadcast B1 + -ing，B1 继承；家族 television 电视，近义 telecommunications 电信');

  W('broaden', 'verb', '/ˈbrɔːdn/', 'B1', ['CET4'], '拓宽；使扩大', 'To become or to make wider or more varied.', [
    ['拓宽；使扩大', 'To become wider or more varied, or to make something wider or more varied.', '变得更宽更多样，或使某物更宽更多样。', '不及物或及物，常见 broaden your horizons（开阔眼界）。', 'Travelling broadens your horizons.', '旅行开阔眼界。', ['broaden your horizons'], ['extend'], 'verb', '及物/不及物', '教育'],
  ], '', ['extend'], '←broad B1 宽的 + -en，B1 继承；近义 extend 延伸（长度、时间）');

  W('brolly', 'noun', '/ˈbrɒli/', '', [], '伞（英式口语）', 'An umbrella (British informal).', [
    ['伞（英式口语）', 'An umbrella, used in informal British English.', '伞的非正式英式说法。', '可数，复数 brollies；口语。', 'I forgot my brolly again.', '我又忘带伞了。', ['a folding brolly'], ['umbrella'], 'noun', 'countable', '口语'],
  ], 'brollies', [], '英式口语缩略形；近义 umbrella 雨伞（标准词）。分级留空');

  W('brooch', 'noun', '/brəʊtʃ/', '', [], '胸针；饰针', 'A decorative piece of jewelry pinned to clothes.', [
    ['胸针；饰针', 'A decorative piece of jewelry that is pinned to a garment.', '别在衣服上的装饰性首饰。', '可数，注意发音与 broach 不同。', 'She wore a silver brooch on her coat.', '她大衣上别了枚银胸针。', ['a gold brooch'], ['pin'], 'noun', 'countable', '外貌'],
  ], 'brooches', [], '近义 pin 别针（统称、可无装饰）；brooch 特指装饰胸针。分级留空');

  W('brook', 'noun/verb', '/brʊk/', '', [], '小溪；（文）忍受', 'A small stream, or (formal) to tolerate something.', [
    ['小溪；小河', 'A small stream of water.', '小的溪流。', '可数，文学与景物描写常见。', 'The brook ran through the meadow.', '小溪流过草地。', ['a bubbling brook'], ['stream'], 'noun', 'countable', '通用'],
    ['（文）容忍；忍受', 'To tolerate something (formal or old-fashioned).', '容忍某事物（正式或旧式用法）。', '及物，常见于否定句 brook no…。', 'The rule brooks no exception.', '此规则不容例外。', ['brook no'], [], 'verb', '及物', '书面'],
  ], 'brooks~brooked~brooked~brooking', ['stream'], '家族 stream 溪流（统称）；第二义为正式/旧式用法、多见于否定句。分级留空');

  W('broth', 'noun', '/brɒθ/', '', [], '肉汤；清汤', 'Soup made from meat, fish, or vegetables.', [
    ['肉汤；清汤', 'Soup in which meat, fish, or vegetables have been cooked.', '用肉、鱼或蔬菜煮出的汤汁。', '不可数，常见 chicken broth（鸡汤）。', 'A hot bowl of broth warmed him up.', '一碗热汤让他暖了起来。', ['a bowl of broth'], ['liquor', 'soup', 'stock'], 'noun', 'uncountable', '饮食'],
  ], '', ['liquor', 'soup', 'stock'], '家族 soup 汤（统称），近义 stock 高汤（基础汤）、liquor 汤汁（正式）。分级留空');

  W('brute', 'noun/adjective', '/bruːt/', '', [], '禽兽；残暴的', 'A cruel or stupid person or animal, or cruel and violent.', [
    ['禽兽般的人；畜生', 'A person or animal that behaves in a very cruel or very stupid way.', '行为极其残忍或愚蠢的人或动物。', '可数，贬义。', 'He behaved like a brute.', '他表现得像个禽兽。', ['an unfeeling brute'], ['beast', 'monster'], 'noun', 'countable', '书面'],
    ['残暴的；蛮力的', 'Cruel, violent, and lacking any sense of fairness.', '残忍、暴力、毫无公平感的。', '作定语，常见 brute force（蛮力）。', 'The door was forced open by brute force.', '门被蛮力撬开了。', ['brute force'], ['savage'], 'adjective', '定语', '书面'],
  ],'brutes', ['beast', 'monster', 'savage'], '近义 beast 野兽、monster 怪物/恶人、savage 野蛮人；brute 强调愚残无理性。分级留空');

  W('bubbles', 'noun', '/ˈbʌblz/', 'B1', [], '泡泡；泡沫（复数）', 'The thin rounded balls of air that form on a liquid.', [
    ['泡泡；泡沫（复数）', 'The thin rounded balls of air or gas that form on the surface of a liquid.', '液体表面形成的薄圆空气泡或气泡（复数形式）。', '复数形式，常见 soap bubbles（肥皂泡）。', 'The children blew bubbles in the garden.', '孩子们在花园里吹泡泡。', ['soap bubbles'], ['foam'], 'noun', 'uncountable/countable', '通用'],
  ], '', ['foam'], '←bubble B1 泡 + -s（复数专义），B1 继承；近义 foam 泡沫（细密连成一片）');

  W('buccaneer', 'noun', '/ˌbʌkəˈnɪə(r)/', '', [], '海盗；（商界）冒险家', 'A pirate, or a person who takes big risks in business.', [
    ['海盗（旧称）', 'A pirate, especially one who attacked Spanish ships in the Caribbean.', '海盗，尤指在加勒比海袭击西班牙船只者。', '可数，历史用语。', 'The buccaneers sailed for the Spanish Main.', '海盗们驶向西属美洲大陆沿岸。', [], ['pirate'], 'noun', 'countable', '历史'],
    ['（商界）冒险家', 'A person who takes big risks in business in order to gain money.', '在商界为获利而甘冒大风险的人。', '可数，常含贬义。', 'Corporate buccaneers bought the failing firm.', '商界冒险家买下了那家濒临破产的公司。', [], [], 'noun', 'countable', '商务'],
  ], 'buccaneers', [], '近义 pirate 海盗（通用、现代亦指盗版者）；buccaneer 特指加勒比海盗与商界冒险家。分级留空');

  W('buckler', 'noun', '/ˈbklə(r)/', '', [], '小圆盾', 'A small round shield held in the hand.', [
    ['小圆盾', 'A small round shield held in the hand to protect it.', '握在手中用于护手的小型圆盾。', '可数，中世纪与历史用语。', 'The reenactor carried a wooden buckler.', '那位历史重演者拿着一面木制小圆盾。', ['a sword and buckler'], ['shield'], 'noun', 'countable', '历史'],
  ], 'bucklers', [], 'INFL 归入 buckle（本词库无可靠分级）故不继承；近义 shield 盾牌（统称、可大可小）。分级留空');

  W('buddhist', 'adjective/noun', '/ˈbʊdɪst/', '', ['CET6'], '佛教的；佛教徒', 'Connected with Buddhism, or a person who follows it.', [
    ['佛教的；佛教徒', 'Connected with Buddhism, or a person who follows the teachings of Buddha.', '与佛教有关的，或信奉佛陀教义的人。', '可作形容词，也可作可数名词。', 'They visited several Buddhist temples.', '他们参观了几座佛教寺庙。', ['Buddhist monks'], ['Buddhism'], 'adjective', '定语', '宗教'],
  ], '', ['Buddhism'], '←Buddhism 佛教 + -ist（信徒）；Buddhism 在本词库无可靠分级故本词留空；家族 Buddhism');

  W('budgetary', 'adjective', '/ˈbʌdʒətri/', 'B1', ['CET4'], '预算的；财政的', 'Connected with a budget or with planned spending.', [
    ['预算的；与预算有关的', 'Connected with a budget or with the planning of how money is spent.', '与预算或资金支出规划有关的。', '常见 budgetary constraints（预算限制）。', 'The project was cut for budgetary reasons.', '该项目因预算原因被削减。', ['budgetary constraints'], ['fiscal'], 'adjective', '定语', '商务'],
  ], '', ['fiscal'], '←budget B1 预算 + -ary，B1 继承；家族 fiscal 财政的（国库、税收层面）');

  W('buff', 'verb/noun/adjective', '/bʌf/', '', [], '擦亮；浅黄色；迷', 'To polish with a soft cloth, a pale colour, or an enthusiast.', [
    ['擦亮；打磨', 'To polish something by rubbing it with a soft cloth.', '用软布摩擦使某物光亮。', '及物，常与 up 连用：buff up。', 'He buffed the brass plate until it shone.', '他把黄铜牌擦得锃亮。', ['buff up'], ['polish', 'shine'], 'verb', '及物', '通用'],
    ['浅黄色；米色', 'A pale yellowish-brown colour.', '浅黄褐色、米色。', '不可数，指颜色。', 'She wore a buff-coloured jacket.', '她穿了件米色外套。', [], [], 'noun', 'uncountable', '外貌'],
    ['……迷；爱好者', 'A person who is very interested in a particular subject.', '对某主题非常感兴趣的人。', '可数，常见 film/music buff。', 'He is a film buff with hundreds of DVDs.', '他是拥有几百张碟的影迷。', [], [], 'noun', 'countable', '口语'],
  ], 'buffs~buffed~buffed~buffing', [], '第一义近义 polish 擦亮、shine 发亮；第三义 film buff 影迷、beer buff 啤酒迷。分级留空');

  W('bugle', 'noun', '/ˈbjuːɡl/', '', [], '军号；号角', 'A small brass instrument used mainly in the army.', [
    ['军号；号角', 'A small brass musical instrument used mainly in the army for signals.', '小型铜管乐器，主要用于军队吹奏信号。', '可数，bugle call 军号声。', 'The bugle sounded at dawn.', '军号在拂晓时吹响。', ['sound the bugle'], ['trumpet'], 'noun', 'countable', '艺术'],
  ], 'bugles', [], '近义 trumpet 小号（管弦乐、可吹旋律）；bugle 无按键、专作信号。分级留空');

  W('building', 'noun', '/ˈbɪldɪŋ/', 'A1', ['CET4'], '建筑物；大楼', 'A structure with a roof and walls, such as a house or school.', [
    ['建筑物；大楼', 'A structure with a roof and walls, such as a house, shop, or school.', '有屋顶和墙壁的结构，如房屋、商店、学校。', '可数，常见 tall building（高楼）。', 'The new building opens next month.', '新大楼下个月启用。', ['office building'], ['structure'], 'noun', 'countable', '通用'],
  ], 'buildings', ['tower'], '←build A1 建造 + -ing，A1 继承；家族 tower 塔（高楼的一种）、近义 structure 结构物');

  W('buildup', 'noun', '/ˈbɪldʌp/', '', [], '增长；集结；增强', 'A gradual increase, or a process of preparing forces or resources.', [
    ['增长；累积', 'A gradual increase in something over time.', '某事随时间逐渐增加。', '可数或不可数，常见 buildup of pressure（压力累积）。', 'There was a buildup of traffic near the stadium.', '体育场附近车辆越积越多。', ['a buildup of'], ['accumulation'], 'noun', 'countable', '通用'],
    ['集结；备战', 'The process of preparing forces or resources for an action.', '为行动准备兵力或资源的过程。', '常见 military buildup（军事集结）。', 'The military buildup alarmed the neighbours.', '军事集结令邻国不安。', ['a military buildup'], [], 'noun', 'uncountable', '军事'],
  ], 'buildups', [], 'build + up 习语化复合（短语动词名词化）；近义 accumulation 累积（通用）。分级留空');

  W('bulk trade', 'noun', '/ˌbʌlk ˈtreɪd/', '', [], '大宗交易；批发', 'Trade in large quantities, usually at wholesale prices.', [
    ['大宗交易；批量贸易', 'Trade in large quantities, often at reduced wholesale prices.', '大批量的交易，常以批发价进行。', '不可数，商务用语；与 retail trade（零售）相对。', 'Bulk trade accounts for half of the orders.', '大宗交易占了订单的一半。', ['bulk trade price'], ['wholesale'], 'noun', 'uncountable', '商务'],
  ], '', ['wholesale'], 'bulk 大量 + trade 贸易；近义 wholesale 批发（销售环节）。短语分级留空').phrase = true;

  W('bullion', 'noun', '/ˈbʊljən/', '', [], '金条；金银块', 'Gold or silver in the form of bars or ingots.', [
    ['金条；金银块', 'Gold or silver in the form of large bars, kept as an investment.', '以大块条状保存、用作投资的黄金或白银。', '不可数，常见 gold bullion（金条）。', 'The bank stored the bullion in its vault.', '银行把金条存放在金库里。', ['gold bullion'], ['gold'], 'noun', 'uncountable', '金融'],
  ], '', ['gold'], '近义 gold 黄金（原料与货币金属统称）；bullion 特指铸成条块的金银。分级留空');

  W('bullock', 'noun', '/ˈbʊlək/', '', [], '阉牛；小公牛', 'A young bull that has been castrated.', [
    ['阉牛；小公牛', 'A young bull that has been castrated, used for pulling or for meat.', '被阉割的公牛，用于拉车或食用。', '可数，农牧用语，主澳新与英式。', 'A bullock pulled the plough across the field.', '一头阉牛拉着犁穿过田地。', ['a team of bullocks'], ['ox'], 'noun', 'countable', '动物'],
  ], 'bullocks', [], '近义 ox 阉牛/役牛（通称、常指已驯化役用）；bullock 多指年轻阉牛。分级留空');

  W('bun', 'noun', '/bʌn/', '', [], '小圆面包；发髻', 'A small round sweet bread, or hair tied in a round shape.', [
    ['小圆面包；餐包', 'A small round sweet bread roll.', '小型的圆形甜面包。', '可数，常见 hamburger bun（汉堡胚）。', 'She bought a bun and a coffee.', '她买了个小面包和一杯咖啡。', ['a burger bun'], ['roll'], 'noun', 'countable', '饮食'],
    ['发髻', 'Hair that is twisted into a round shape at the back of the head.', '头发在脑后盘成的圆髻。', '可数，常见 wear your hair in a bun。', 'She wore her hair in a neat bun.', '她把头发梳成整洁的发髻。', ['hair in a bun'], [], 'noun', 'countable', '外貌'],
  ], 'buns', [], '近义 roll 小面包卷（英式、常指卷状）；bun 指圆形餐包，第二义为发髻。分级留空');

  W('bung', 'noun/verb', '/bʌŋ/', '', [], '塞子；堵住', 'A stopper for a hole, or to block a hole or passage.', [
    ['塞子；桶塞', 'A round piece of wood, rubber, or plastic used to close the hole in a barrel or bottle.', '封住桶口或瓶口的圆形木塞、橡胶塞或塑料塞。', '可数，常见 take the bung off（拔掉塞子）。', 'Pull the bung to let the liquid out.', '拔掉塞子把液体放出来。', ['pull the bung'], ['plug'], 'noun', 'countable', '工业'],
    ['堵住；塞住', 'To block a hole, pipe, or passage.', '堵住洞口、管道或通道。', '及物，口语常用 bung up（塞紧）。', 'Rags bunged up the pipe.', '破布把管道堵住了。', ['bung up'], [], 'verb', '及物', '通用'],
  ], 'bungs~bunged~bunged~bunging', [], '近义 plug 塞子/堵住（通用）；bung 主英式口语，bung up 塞紧。分级留空');

  W('bunny', 'noun', '/ˈbʌni/', '', [], '兔子（昵称）', 'A rabbit, especially a small one or one children call it.', [
    ['兔子（昵称）', 'A rabbit, especially a small one, or the word children use for it.', '兔子，尤指小兔，或儿童用语。', '可数，复数 bunnies；口语、儿语。', 'The bunny hopped across the lawn.', '小兔跳过草坪。', ['a chocolate bunny'], ['rabbit'], 'noun', 'countable', '动物'],
  ], 'bunnies', ['rabbit'], '家族 rabbit 兔（标准词）；bunny 为爱称、儿语，亦见于 bunny girl（兔女郎）。分级留空');

  W('buoy', 'noun/verb', '/bɔɪ/', '', [], '浮标；使浮起', 'A floating marker in the water, or to keep something afloat.', [
    ['浮标；航标', 'A floating marker placed in the water to show where ships can go safely.', '浮在水面标示航道安全的标志。', '可数，航海用语。', 'The buoy marked the edge of the channel.', '浮标标出了航道的边缘。', ['a navigation buoy'], ['float'], 'noun', 'countable', '交通'],
    ['使浮起；使振作', 'To keep something floating, or to make someone feel more confident.', '使某物浮着，或使某人更有信心。', '较文，常与 up 连用：buoy up。', 'Good news buoyed up the team.', '好消息让团队振作起来。', ['buoy up'], [], 'verb', '及物', '书面'],
  ], 'buoys~buoyed~buoyed~buoying', [], '近义 float 漂浮（通用动词）；buoy 特指航标浮筒，第二义 buoy up 鼓舞。分级留空');

  W('burdensome', 'adjective', '/ˈbɜːdnsəm/', 'B2', [], '繁重的；累赘的', 'Causing a lot of work, worry, or difficulty.', [
    ['繁重的；累赘的', 'Causing a lot of work, worry, or difficulty for someone.', '给人带来大量工作、忧虑或困难的。', '常见 burdensome task/regulation。', 'The rules became burdensome for small firms.', '这些规定对小企业来说成了负担。', ['burdensome task'], ['heavy'], 'adjective', '定语', '商务'],
  ], '', ['heavy'], '←burden B2 负担 + -some（易……的），B2 继承；近义 heavy 沉重的（物理与比喻）');

  W('burglary', 'noun', '/ˈbɜːɡləri/', '', ['CET6'], '入室盗窃；破门盗窃', 'The crime of entering a building to steal.', [
    ['入室盗窃；破门盗窃', 'The crime of illegally entering a building in order to steal.', '非法进入建筑物行窃的罪行。', '可数或不可数，法律术语；复数 burglaries。', 'He was arrested after a series of burglaries.', '他在一系列入室盗窃后被捕。', ['commit burglary'], ['theft'], 'noun', 'uncountable/countable', '法律'],
  ], 'burglaries', ['burglar'], '←burglar 入室窃贼 + -ary；近义 theft 盗窃（统称）');

  W('burgle', 'verb', '/ˈbɜːɡl/', '', [], '入室盗窃（英式）', 'To break into a building and steal from it (British).', [
    ['入室盗窃（英式）', 'To break into a building and steal from it.', '破门进入建筑物行窃。', '及物，英式；美式常说 burglarize。', 'The flat was burgled while they were away.', '他们外出时公寓被盗了。', [], ['rob'], 'verb', '及物', '法律'],
  ], 'burgles~burgled~burgled~burgling', ['burglar'], '←burglar 入室窃贼反构而成；英式 burgle = 美式 burglarize；近义 rob 抢劫（当面、可及人）');

  W('burial', 'noun', '/ˈberəl/', 'B1', ['CET4'], '埋葬；安葬', 'The act of putting a dead body into the ground.', [
    ['埋葬；安葬', 'The act of putting a dead body into the ground, usually as part of a funeral.', '将尸体埋入地下，通常为葬礼的一部分。', '可数或不可数；burial ground 墓地。', 'The burial took place at dawn.', '安葬在黎明举行。', ['burial site'], ['funeral', 'grave'], 'noun', 'uncountable/countable', '宗教'],
  ], '', ['funeral'], '←bury B1 埋 + -al，B1 继承；家族 funeral 葬礼（仪式）、近义 grave 坟墓（地点）');

  W('buried', 'adjective', '/ˈberɪd/', 'B1', [], '埋藏的；被埋的', 'Put into the ground or covered with earth, or hidden.', [
    ['埋藏的；被埋的', 'Put into the ground and covered with earth, or hidden from view.', '被放入地下并覆土，或被藏起来看不见。', 'bury 的过去分词作定语。', 'The treasure was buried under the tree.', '宝藏被埋在了树下。', ['buried treasure'], ['underground'], 'adjective', '定语', '通用'],
  ], '', ['underground'], '←bury B1 + -ed，B1 继承；近义 underground 地下的（位置，亦可作副词）');

  W('burn out', 'verb', '/ˌbɜːn ˈaʊt/', '', [], '燃尽；累垮', 'To stop burning, or to become exhausted by working too hard.', [
    ['燃尽；烧毁', 'To stop burning because there is nothing left to burn, or to be destroyed by fire.', '因可燃物耗尽而熄灭，或被火烧毁。', '不及物或及物，也指电路 burn out（熔断）。', 'The engine burned out after the crash.', '撞击后发动机烧毁了。', [], ['fuse'], 'verb', '不及物', '科技'],
    ['累垮；耗尽', 'To become completely tired and unable to work because of too much stress.', '因压力过大而精疲力竭、无法工作。', '不及物，亦可用反身结构表达把自己累垮。', 'He burned out after three night shifts.', '三轮夜班后他累垮了。', [], [], 'verb', '不及物', '健康'],
  ],'burns out~burned out~burning out', [], '短语动词：燃尽、烧毁与累垮两义；近义 fuse 熔丝熔断（电路保护件）。分级留空').phrase = true;

  W('burrow', 'noun/verb', '/ˈbʌrəʊ/', '', [], '洞穴；挖掘', 'A hole dug in the ground by an animal, or to dig such a hole.', [
    ['洞穴；地洞', 'A hole or tunnel dug in the ground by an animal such as a rabbit.', '兔子等动物在地下挖的洞或隧道。', '可数，常见 a deep burrow。', 'The rabbit hid in its burrow.', '兔子躲在它的洞里。', ['a deep burrow'], ['hole'], 'noun', 'countable', '动物'],
    ['挖掘洞穴；翻找', 'To dig a hole in the ground, or to search by pushing things aside.', '在地上挖洞，或翻找东西。', '不及物或及物：burrow into/through。', 'The dog burrowed under the blankets.', '狗钻到毯子底下。', ['burrow under'], [], 'verb', '不及物', '通用'],
  ], 'burrows~burrowed~burrowed~burrowing', [], '近义 hole 洞（统称）；burrow 特指动物挖的洞穴，第二义指翻找。分级留空');

  W('bursar', 'noun', '/ˈbɜːsə(r)/', '', [], '（大学）财务主管；奖学金生', 'A person who manages money in a university, or a student with a scholarship.', [
    ['（大学）财务主管', 'A person who manages the finances of a college or university.', '管理学院或大学财务的人。', '可数，英式用法。', 'Ask the bursar about the fees.', '关于费用请询问财务主管。', [], [], 'noun', 'countable', '教育'],
    ['奖学金生（美式旧用）', 'A student who receives a scholarship (American, old-fashioned).', '领取奖学金的学生（美式旧用法）。', '可数，现代多说 scholarship student。', 'Each college supported twenty bursars.', '每所学院资助二十名奖学金生。', [], ['scholar'], 'noun', 'countable', '教育'],
  ], 'bursars', [], '第一义为英式大学财务主管；第二义近 scholar 学者/奖学金生（美式旧用）。分级留空');

  W('burst out', 'verb', '/ˌbɜːst ˈaʊt/', '', [], '突然爆发；冲出', 'To suddenly start doing something, or to escape suddenly.', [
    ['（情感）突然爆发', 'To suddenly start crying, laughing, or speaking.', '突然哭起来、笑起来或喊出来。', '不及物，常见 burst out crying/laughing。', 'She burst out crying at the news.', '听到消息她突然哭了起来。', ['burst out crying'], ['erupt'], 'verb', '不及物', '口语'],
    ['冲出；突围', 'To escape or break out of a place suddenly.', '突然从某处逃出或冲出。', '不及物，常见 burst out of doors（夺门而出）。', 'The children burst out of the school gates.', '孩子们冲出校门。', ['burst out of doors'], [], 'verb', '不及物', '通用'],
  ],'bursts out~burst out~bursting out', [], '短语动词：情感爆发与冲出两义；近义 erupt 爆发（火山、情绪，较正式）。分级留空').phrase = true;

  W('busiest', 'adjective', '/ˈbɪziɪst/', 'A1', [], '最忙的', 'The superlative form of busy.', [
    ['最忙的', 'Having the most things to do or the most activity of all.', '在同类中事务最多、活动最频繁的。', 'busy 的最高级形式。', 'Monday is the busiest day of the week.', '周一是一周中最忙的日子。', ['the busiest time'], ['peak'], 'adjective', '定语', '通用'],
  ], '', ['peak'], '←busy A1 忙 + -est（最高级），A1 继承；近义 peak 高峰的（时段顶点）');

  W('bustle', 'noun/verb', '/ˈbʌsl/', '', [], '喧闹；忙乱', 'Busy activity and noise, or to move in a hurried busy way.', [
    ['喧闹；忙乱', 'Busy activity and noise in a place.', '某处繁忙的活动与声响。', '不可数或可数，常见 the bustle of…。', 'She loved the bustle of the market.', '她喜欢集市的喧闹。', ['the bustle of the market'], ['hum', 'whirl'], 'noun', 'uncountable', '通用'],
    ['奔忙；忙乱地走', 'To move somewhere in a busy, excited way.', '忙碌兴奋地走动。', '不及物，常与 about/around 连用。', 'Shoppers bustled about the square.', '购物的人们在广场上匆匆穿行。', ['bustle about'], ['rush'], 'verb', '不及物', '通用'],
  ], 'bustles~bustled~bustled~bustling', [], '近义 hum 嗡嗡的忙碌声、whirl 旋风般忙乱、rush 匆忙；bustle 强调热闹的忙。分级留空');

  W('busybody', 'noun', '/ˈbɪzibɒdi/', '', [], '爱管闲事的人', 'A person who likes to get involved in other peoples business.', [
    ['爱管闲事的人', 'A person who likes to become involved in situations that do not concern them.', '喜欢插手与自己无关之事的人。', '可数，复数 busybodies，贬义。', 'That busybody reported us to the manager.', '那个爱管闲事的人向经理告了我们。', [], ['gossip'], 'noun', 'countable', '口语'],
  ], 'busybodies', [], 'busy 忙 + body 人，习语化复合；近义 gossip 爱传闲事的人。分级留空');

  W('butt in', 'verb', '/ˌbʌt ˈɪn/', '', [], '插嘴；插手', 'To interrupt a conversation or get involved when you are not wanted.', [
    ['插嘴；打断', 'To suddenly interrupt what someone else is saying.', '突然打断别人的话。', '不及物，口语：butt in on sb。', 'Sorry to butt in, but we need to leave.', '抱歉打断，我们得走了。', ['butt in on'], ['interrupt'], 'verb', '不及物', '口语'],
    ['插手；干涉', 'To become involved in something that is not your business.', '插手与自己无关的事。', '不及物，贬义。', 'Stop butting in and let her speak.', '别插嘴，让她说。', ['butting in'], [], 'verb', '不及物', '口语'],
  ],'butts in~butted in~butting in', [], '短语动词：插嘴与插手两义；近义 interrupt 打断（通用、较正式）。分级留空').phrase = true;

  W('buyer', 'noun', '/ˈbaɪə(r)/', 'A1', ['CET4'], '买方；采购员', 'A person who buys something, or a person whose job is to buy goods.', [
    ['买方；购买者', 'A person who buys something.', '购买某物的人。', '可数，与 seller 相对。', 'The buyer made an offer on the house.', '买方对房子出了价。', ['a willing buyer'], ['customer'], 'noun', 'countable', '商务'],
    ['采购员', 'A person whose job is to choose and buy goods for a shop or company.', '职业是为商店或公司选购商品的人。', '可数，常见 fashion buyer（时尚采购员）。', 'She works as a buyer for a chain store.', '她在一家连锁店做采购员。', ['a senior buyer'], [], 'noun', 'countable', '商务'],
  ], 'buyers', ['customer'], '←buy A1 买 + -er（表人），A1 继承；家族 customer 顾客（商家视角的近义）');

  W('by accident', 'adverb', '/baɪ ˈæksɪdənt/', '', [], '偶然地；意外地', 'Not planned or done on purpose; by chance.', [
    ['偶然地；意外地', 'Not planned or done on purpose; by chance.', '没有计划或故意，出于偶然。', '作状语，与 on purpose（故意）相对。', 'I found the book by accident.', '我偶然发现了这本书。', ['purely by accident'], ['accidentally'], 'adverb', 'null', '通用'],
  ], '', ['accidentally'], 'by + accident 意外；近义 accidentally 意外地（副词、直接修饰动词），反义 on purpose。短语分级留空').phrase = true;

  W('by way of', 'preposition', '/baɪ weɪ ɒv/', '', [], '经由；作为', 'Via a particular place, or as a form of something.', [
    ['经由；通过', 'Via a particular place or route.', '经过某个地点或路线。', '表路径，较正式，与 via 近义。', 'We travelled by way of Paris.', '我们经由巴黎旅行。', ['by way of London'], ['via'], 'preposition', 'null', '通用'],
    ['作为；当作（引出开场白）', 'Used to introduce something as an example or opening remark.', '用作举例或开场白的引子。', '固定搭配 by way of introduction（作为开场白）。', 'By way of introduction, let me say a few words.', '作为开场白，请允许我讲几句。', ['by way of introduction'], [], 'preposition', 'null', '书面'],
  ], '', ['via'], 'by + way of；第一义近义 via 经由，第二义固定搭配 by way of introduction。短语分级留空').phrase = true;

  W('by which', 'pronoun', '/baɪ wɪtʃ/', '', [], '凭借……的；由此', 'Used to refer back to something and introduce the way it happens.', [
    ['凭借……的；由此（引导定语从句）', 'Used to refer back to something already mentioned and introduce the means by which it happens.', '回指已提到的事物，并引出实现它的手段。', '正式语体，相当于介词 + 关系代词结构。', 'She described the process by which the award is decided.', '她描述了评定该奖项所依据的流程。', ['the means by which'], ['whereby'], 'pronoun', 'null', '书面'],
  ], '', ['whereby'], 'by + which；家族 whereby 凭此、借以（关系副词，正式语体中可互换）。短语分级留空').phrase = true;

  W('bye', 'interjection', '/baɪ/', 'A1', [], '再见；再会', 'A short informal way of saying goodbye.', [
    ['再见；再会', 'A short informal way of saying goodbye.', 'goodbye 的简短非正式说法。', '口语，比 goodbye 随意。', 'Say bye to your aunt.', '跟阿姨说再见。', ['bye for now'], ['goodbye'], 'interjection', 'null', '口语'],
  ], '', ['goodbye'], 'goodbye A1 的缩略形，A1 继承；家族 goodbye 再见（标准说法）');

  W('byword', 'noun', '/ˈbɜːwɜːd/', '', [], '代名词；谚语', 'A person or thing that is a well-known example of something, or a proverb.', [
    ['代名词；典范', 'A person or thing that is famous as a typical example of a quality.', '以某种特质著称的人或事物。', '可数：a byword for sth。', 'The hotel is a byword for luxury.', '这家酒店是奢华的代名词。', ['a byword for luxury'], [], 'noun', 'countable', '书面'],
    ['谚语；格言', 'A well-known phrase that gives general advice.', '提供普遍忠告的知名短语。', '可数，较古旧用法。', 'The saying became a byword in the village.', '这句话成了村里的谚语。', [], ['proverb'], 'noun', 'countable', '书面'],
  ], 'bywords', [], 'by + word；第一义 a byword for…的代名词，第二义近 proverb 谚语。分级留空');

})(typeof window !== 'undefined' ? window : globalThis);
