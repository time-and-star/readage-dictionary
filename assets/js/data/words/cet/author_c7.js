/* data/words/cet/author_c7.js · 手敲词条 C（七）：cache ~ care for（含 6 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_c7.js 必须在 _cet_helper.js 之后加载');

  W('cache', 'noun', '/kæʃ/', '', [], '高速缓存；藏匿处', 'A part of a computer memory that stores copies of data, or a hidden store of things.', [
    ['（计算机）高速缓存', 'A part of a computer memory that stores copies of data so it can be read quickly.', '存放数据副本以便快速读取的计算机存储区。', '可数，IT 用语：clear the cache（清缓存）。', 'Clear the cache if the page looks wrong.', '页面显示异常时清一下缓存。', ['clear the cache'], ['buffer'], 'noun', 'countable', '科技'],
    ['藏匿处；窖藏物资', 'A hidden store of food, weapons, or other goods.', '隐藏存放的食物、武器或其他物资。', '可数，常见 a cache of weapons（武器藏匿点）。', 'Police found a cache of stolen goods.', '警方发现了一处赃物藏匿点。', ['a cache of'], [], 'noun', 'countable', '书面'],
  ], 'caches', [], '与 cash 同形异义（勿混）；近义 buffer 缓冲区（计算机）。分级留空');

  W('cachet', 'noun', '/ˈkæʃeɪ/', '', [], '声望；威信', 'The respect and admiration that comes from being associated with something special.', [
    ['声望；威信', 'The respect and admiration that comes from being associated with something special.', '因与某特别事物相关而获得的尊重与钦佩。', '不可数，较文。', 'The university still carries a certain cachet.', '这所大学仍享有一定声望。', ['social cachet'], ['prestige'], 'noun', 'uncountable', '社会'],
  ], '', ['prestige'], '法语借词；近义 prestige 声望（更通用、可分级）。分级留空');

  W('cadge', 'verb', '/kædʒ/', '', [], '乞讨；蹭（东西）', 'To ask someone for food, money, or a free ticket without paying.', [
    ['乞讨；蹭（东西）', 'To ask someone for food, money, or a free ticket without paying.', '向人讨要食物、钱或免费票而不付钱。', '不及物或及物，英式口语：cadge sth off sb。', 'He cadged a cigarette off the stranger.', '他向陌生人讨了支烟。', ['cadge off'], ['sponge'], 'verb', '及物', '口语'],
  ], 'cadges~cadged~cadged~cadging', [], '近义 sponge 蹭吃蹭喝（sponge off sb，口语）；分级留空');

  W('calamity', 'noun', '/kəˈlæməti/', '', [], '大灾难；祸患', 'A terrible event that causes great damage or suffering.', [
    ['大灾难；祸患', 'A terrible event that causes great damage or serious suffering.', '造成重大破坏或严重苦难的可怕事件。', '可数或不可数，书面语，语气强于 disaster。', 'The flood was a calamity for the whole valley.', '这场洪水对整个山谷是场大灾难。', ['a national calamity'], ['disaster'], 'noun', 'countable', '书面'],
  ], 'calamities', ['calamitous'], '近义 disaster 灾难（通用、可数 a disaster）；calamity 更强烈、书面。分级留空');

  W('calculation', 'noun', '/ˌkælkjuˈleɪʃn/', '', ['CET4'], '计算；估计', 'The act or result of working out a number, or careful thought about an action.', [
    ['计算；演算', 'The act or the result of working out a number or amount using mathematics.', '用数学算出数字或数量的行为或结果。', '可数或不可数。', 'The calculation showed a small profit.', '计算结果显示略有盈利。', ['do a calculation'], ['estimate', 'math'], 'noun', 'uncountable/countable', '教育'],
    ['估计；算计', 'Careful thought about what the effect of an action will be.', '对行动后果所作的仔细盘算。', '不可数，常见 out of calculation（出于算计）。', 'The delay was the result of cold calculation.', '这次拖延是冷酷算计的结果。', [], [], 'noun', 'uncountable', '书面'],
  ], 'calculations', [], '←calculate（本词库无可靠分级）+ -ion，故留空；近义 estimate 估计、math 数学（学科）');

  W('call back', 'verb', '/ˌbɔːl ˈbæk/', '', [], '回电话；召回', 'To telephone someone back, or to order a product returned.', [
    ['回电话；回访', 'To telephone someone who has already telephoned you.', '给已经给你打过电话的人回电话。', '及物、可分动词。', 'I will call you back in ten minutes.', '我十分钟后给你回电话。', ['call me back'], [], 'verb', '及物', '通用'],
    ['召回（产品）；叫回', 'To order that a product be returned because of a fault.', '因缺陷要求产品被退回。', '及物：call back a batch（召回一批产品）。', 'The firm called back two batches of tablets.', '公司召回了两批药片。', ['call back the batch'], ['recall'], 'verb', '及物', '商务'],
  ],'calls back~called back~calling back', [], 'call + back；第二义近义 recall 召回（更正式、亦指回忆）。分级留空').phrase = true;

  W('call for', 'verb', '/ˌbɔːl ˈfɔː(r)/', '', [], '需要；去接（某人）', 'To need something, or to go somewhere to collect someone.', [
    ['需要；要求', 'To need something, or to publicly demand it.', '需要某物，或公开要求某事。', '及物，常见 call for reform/change。', 'The report calls for immediate action.', '报告要求立即采取行动。', ['call for change'], ['indicate'], 'verb', '及物', '书面'],
    ['去接（某人）；邀约', 'To go to someones home or office to collect them.', '到某人家或办公室去接他们。', '及物，口语：call for sb at seven。', 'I will call for you at seven.', '我七点来接你。', ['call for sb'], ['invite'], 'verb', '及物', '口语'],
  ],'calls for~called for~calling for', [], 'call + for；第一义近义 indicate 表明（所需），第二义 invite 邀请。分级留空').phrase = true;

  W('call off', 'verb', '/ˌbɔːl ˈɒf/', '', [], '取消；停止', 'To decide that something arranged will not happen, or to stop an activity.', [
    ['取消；停止', 'To decide that something already arranged will not happen, or to stop an activity.', '决定已安排的事不举行，或停止某项活动。', '及物：call off a match/search/strike。', 'They called off the match because of rain.', '他们因下雨取消了比赛。', ['call off the search'], ['cancel', 'scrub'], 'verb', '及物', '通用'],
  ], '', ['cancel'], 'call + off；家族 cancel 取消（通用）、近义 scrub 取消（美式口语）。分级留空').phrase = true;

  W('call on', 'verb', '/ˌbɔːl ˈɒn/', '', [], '拜访；号召', 'To make a short visit, or to ask or demand that someone do something.', [
    ['拜访；访问', 'To make a short visit to someones home or office.', '对某人家或办公室作短暂拜访。', '及物，英式常用 call on sb。', 'We called on the new neighbors.', '我们拜访了新邻居。', ['call on sb'], ['visit'], 'verb', '及物', '通用'],
    ['号召；请求（做某事）', 'To ask or demand that someone do something.', '要求或请求某人做某事。', '及物：call on sb to do sth。', 'The UN called on both sides to talk.', '联合国号召双方对话。', ['call on sb to'], [], 'verb', '及物', '政治'],
  ],'calls on~called on~calling on', [], 'call + on；第一义近义 visit 拜访（更通用）。分级留空').phrase = true;

  W('caller', 'noun', '/ˈbɔːlə(r)/', 'A1', [], '来电者；访客', 'A person who telephones someone, or a visitor (old-fashioned).', [
    ['来电者；打电话的人', 'A person who telephones someone.', '给他人打电话的人。', '可数，常见 unknown caller（陌生来电）。', 'An unknown caller rang twice.', '一个陌生来电打了两次。', ['an unknown caller'], [], 'noun', 'countable', '通用'],
    ['访客（旧式）', 'A person who comes to see someone (old-fashioned).', '前来拜访的人（旧式说法）。', '可数，口语中仍有使用。', 'There was a caller at the door.', '门口有位访客。', [], ['guest'], 'noun', 'countable', '口语'],
  ], 'callers', ['call'], '←call A1 + -er（表人），A1 继承；近义 guest 客人（受邀者）');

  W('caloric', 'adjective', '/kəˈlɒrɪk/', '', [], '热量的；卡路里的', 'Connected with the heat or energy that food provides.', [
    ['热量的；卡路里的', 'Connected with the heat or the energy that food provides.', '与食物所提供的热量或能量有关的。', '作定语，常见 caloric intake（热量摄入）。', 'Track your caloric intake for a week.', '记录一周的热量摄入。', ['caloric intake'], ['thermal'], 'adjective', '定语', '健康'],
  ], '', ['thermal'], '←calorie 卡路里（本词库无可靠分级）+ -ic，故留空；近义 thermal 热的（物理温感）');

  W('campaigner', 'noun', '/kæmˈpeɪnə(r)/', 'B1', [], '活动家；竞选者', 'A person who works actively for a political or social cause.', [
    ['活动家；运动倡导者', 'A person who works actively for a political or social cause.', '为政治或社会事业积极奔走的人。', '可数，常见 human rights campaigner。', 'She is a leading campaigner for reform.', '她是改革的主要倡导者。', ['a lifelong campaigner'], ['warrior'], 'noun', 'countable', '政治'],
  ], 'campaigners', ['campaign'], '←campaign B1 运动 + -er（表人），B1 继承；近义 warrior 战士（喻顽强斗争者）');

  W('cancerous', 'adjective', '/ˈkænsərəs/', '', [], '癌性的；患癌的', 'Connected with cancer, or containing cancer cells.', [
    ['癌性的；患癌的', 'Connected with cancer, or containing cancer cells.', '与癌症有关的，或含有癌细胞的。', '作定语：cancerous cell/tumor。', 'The biopsy confirmed a cancerous growth.', '活检确认为癌性肿块。', ['a cancerous tumor'], ['malignant'], 'adjective', '定语', '健康'],
  ], '', ['malignant'], '←cancer 癌症（本词库无可靠分级）+ -ous，故留空；家族 malignant 恶性的（医学）');

  W('canine', 'adjective/noun', '/ˈkeɪnaɪn/', '', [], '犬的；犬科动物', 'Connected with dogs, or an animal of the dog family.', [
    ['犬的；犬科的', 'Connected with dogs or with the family of animals that includes dogs.', '与狗或包括狗在内的动物科有关的。', '常见 canine teeth（犬齿）。', 'Dogs have four canine teeth.', '狗有四颗犬齿。', ['canine teeth'], ['wolf'], 'adjective', '定语', '动物'],
    ['犬科动物', 'An animal of the dog family.', '犬科的动物。', '可数，与 feline（猫科）相对。', 'Foxes and wolves are canines.', '狐和狼都是犬科动物。', [], ['wolf'], 'noun', 'countable', '动物'],
  ],'canines', ['wolf'], '拉丁词根 can-（犬）；家族 wolf 狼（同科近亲）；canine tooth 犬齿。分级留空');

  W('canned food', 'noun', '/ˌkændˈfuːd/', '', [], '罐头食品', 'Food that is sealed in cans and kept fresh until opened.', [
    ['罐头食品', 'Food that is sealed in cans and kept fresh until it is opened.', '密封在罐头里、开封前保持新鲜的食物。', '不可数，物资储备常见词。', 'The shelter stored canned food for weeks.', '收容所储备了够吃几周的罐头食品.', ['a tin of canned food'], ['tin'], 'noun', 'uncountable', '饮食'],
  ], '', ['tin'], 'canned 罐装的 + food 食物；近义 tin 罐头（英式可数 a tin of…）。短语分级留空').phrase = true;

  W('cannot', 'modal verb', '/ˈkænɒt/', 'A1', [], '不能；无法', 'Used to say that it is not possible to do something.', [
    ['不能；无法', 'Used to say that it is not possible to do something.', '表示做某事不可能。', 'can 的否定形式（正式），口语亦用 can not。', 'I cannot come to the meeting today.', '我今天不能来开会。', ['cannot help'], ['must'], 'modal verb', 'null', '通用'],
  ], '', ['must'], '←can A1 + not，A1 继承；近义 must 必须（must not 与 cannot 在禁止语境呼应）。');

  W('canopy', 'noun', '/ˈkænəpi/', '', [], '罩篷；树冠层', 'A covering fixed above a bed or stall, or the upper layer of branches in a forest.', [
    ['罩篷；顶棚', 'A covering fixed above a bed, throne, or stall, or a roof-like covering overhead.', '固定在床、王座或摊位上方的篷，或棚状遮盖物。', '可数，under the canopy 在篷下。', 'Rain dripped from the canopy of the stall.', '雨从摊位的顶棚滴下来。', ['under the canopy'], ['tent'], 'noun', 'countable', '家居'],
    ['（森林）树冠层', 'The uppermost layer of branches and leaves in a forest.', '森林中最上层的枝叶层。', '不可数，常见 forest canopy。', 'Monkeys move through the canopy.', '猴子在树冠层间穿行。', ['forest canopy'], [], 'noun', 'uncountable', '科学'],
  ], 'canopies', ['tent'], '家族 tent 帐篷（可移动织物棚）；第二义 forest canopy 森林冠层。分级留空');

  W('cant', 'noun', '/kænt/', '', [], '行话；黑话', 'The special words used by a particular group that others find hard to understand.', [
    ['行话；黑话', 'The special words used by a particular group that are hard for others to understand.', '特定群体使用的、外人难懂的专门用语。', '不可数，亦含伪善腔调义。', 'The report was full of legal cant.', '那篇报告满是法律行话。', ['the cant of'], ['jargon'], 'noun', 'uncountable', '书面'],
  ], '', ['jargon'], '近义 jargon 行话（专业术语，中性）；cant 指群体暗语，亦含伪善言辞义。分级留空');

  W('canvass', 'verb', '/ˈkænvəs/', '', [], '拉票；游说', 'To visit people or areas to try to get votes or support.', [
    ['拉票；游说', 'To visit people or areas in order to try to get votes or support.', '走访各处以争取选票或支持。', '及物或不及物，政治语境：canvass for votes。', 'Volunteers canvassed the district for votes.', '志愿者在该选区挨户拉票。', ['canvass for votes'], ['poll', 'stump'], 'verb', '及物/不及物', '政治'],
  ], 'canvasses~canvassed~canvassed~canvassing', [], 'INFL 归入 canvas（本词库无可靠分级）故留空；近义 poll 民意调查、stump 巡回竞选演说');

  W('canyon', 'noun', '/ˈkænjən/', '', [], '峡谷', 'A deep narrow valley with steep sides, found in rocky areas.', [
    ['峡谷', 'A deep narrow valley with steep sides, found in rocky areas.', '两侧陡峭的深窄谷地，多见于岩石地区。', '可数，常见 a deep canyon。', 'The river carved a deep canyon.', '河流冲刷出一道深峡谷。', ['a deep canyon'], ['gorge'], 'noun', 'countable', '科学'],
  ], 'canyons', ['gorge'], '家族 gorge 峡谷（较窄、常有溪流）；canyon 多指大型岩层峡谷（美式）。分级留空');

  W('capability', 'noun', '/ˌkeɪpəˈbɪləti/', 'B1', ['CET4'], '能力；才能；性能', 'The ability or skill to do something, or the functions of a machine.', [
    ['能力；才能', 'The ability or skill to do something.', '做某事的能力或技能。', '可数或不可数，常见 beyond the capability of。', 'The task is beyond the capability of most students.', '这个任务超出了大多数学生的能力。', ['beyond capability'], ['ability'], 'noun', 'uncountable/countable', '通用'],
    ['性能；功能', 'The functions that a machine or system can perform.', '机器或系统能执行的功能。', '常见复数 capabilities。', 'The drone has night-flying capabilities.', '这架无人机具备夜间飞行功能。', ['night-flying capabilities'], [], 'noun', 'uncountable/countable', '科技'],
  ], 'capabilities', ['capable'], '←capable B1 有能力的 + -ity，B1 继承；近义 ability 能力（更通用）');

  W('capitalize on', 'verb', '/ˈkæpɪtəlaɪz ɒn/', '', [], '利用；占便宜', 'To use a situation to gain an advantage for yourself.', [
    ['利用；占……的便宜', 'To use a situation or an opportunity to gain an advantage for yourself.', '利用某种情形或机会为自己谋取优势。', '及物：capitalize on sth（利用某事）。', 'The firm capitalized on the new trend.', '公司利用了这股新潮流。', ['capitalize on demand'], ['exploit'], 'verb', '及物', '商务'],
  ], '', [], 'capitalize 利用资本 + on；近义 exploit 利用/剥削（更强烈、可含贬义）。分级留空').phrase = true;

  W('capitol', 'noun', '/ˈkæpɪtl/', '', [], '（美国）国会大厦', 'The building in which a US state legislature or Congress meets.', [
    ['（美国）国会大厦', 'The building in which a US state legislature or Congress meets.', '美国州议会或国会开会的建筑。', '可数，美式；Capitol Hill 国会山。', 'The bill passed the capitol last week.', '该法案上周在国会大厦通过。', ['the capitol building'], ['hill'], 'noun', 'countable', '政治'],
  ], 'capitols', [], '与 capital 首都/资本勿混；近义 hill 指 Capitol Hill 国会山。分级留空');

  W('capitulate', 'verb', '/kəˈpɪtjuleɪt/', '', [], '投降；屈服', 'To accept that you have been defeated and agree to stop fighting.', [
    ['投降；屈服', 'To accept that you have been defeated and agree to stop fighting.', '承认被击败并同意停止抵抗。', '不及物，正式用语：capitulate to。', 'The army capitulated after a long siege.', '长期围城后军队投降了。', ['capitulate to'], ['surrender'], 'verb', '不及物', '书面'],
  ], 'capitulates~capitulated~capitulated~capitulating', [], '近义 surrender 投降（通用、可及物）；capitulate 正式、含让步意味。分级留空（非透明派生）');

  W('capitulation', 'noun', '/kəˌpɪtjuˈleɪʃn/', '', [], '投降；屈服', 'The act of accepting defeat and stopping the fight.', [
    ['投降；屈服', 'The act of accepting defeat and stopping the fight.', '承认失败、停止抵抗的行为。', '不可数或可数，正式。', 'The capitulation came after months of talks.', '数月谈判之后终于屈服。', ['capitulation talks'], ['surrender'], 'noun', 'uncountable', '书面'],
  ], 'capitulations', [], '←capitulate（本词库无可靠分级）+ -ion，故留空；近义 surrender 投降（通用）');

  W('capsicum', 'noun', '/ˈkæpsɪkəm/', '', [], '甜椒；辣椒', 'A type of pepper plant with thick hollow fruits, eaten as a vegetable.', [
    ['甜椒；辣椒', 'A type of pepper plant whose thick hollow fruits are eaten as a vegetable.', '果实厚而中空、作蔬菜食用的辣椒植物。', '可数，主英式与澳新用语。', 'She chopped a red capsicum for the salad.', '她切了个红甜椒做沙拉。', ['a green capsicum'], ['pepper'], 'noun', 'countable', '饮食'],
  ], 'capsicums', [], '近义 pepper 辣椒/胡椒（统称）；capsicum 多指甜椒、柿子椒类。分级留空');

  W('capsize', 'verb', '/kæpˈsaɪz/', '', [], '（船）倾覆；翻覆', 'Of a boat or ship, to turn over in the water.', [
    ['（船）倾覆；翻覆', 'Of a boat or ship, to turn over in the water.', '船在水中翻转过来。', '不及物，交通与水上运动用语。', 'The canoe capsized in the rapids.', '独木舟在急流中翻了。', ['capsize the boat'], ['overturn'], 'verb', '不及物', '交通'],
  ], 'capsizes~capsized~capsized~capsizing', ['overturn'], '家族 overturn 推翻、倾覆（及物/不及物、通用）；capsize 专指船只翻覆。分级留空');

  W('captivate', 'verb', '/ˈkæptɪveɪt/', '', [], '迷住；吸引', 'To hold someones attention completely by being attractive or interesting.', [
    ['迷住；吸引', 'To hold someones attention completely by being attractive or interesting.', '因有魅力或有趣而完全吸引某人的注意。', '及物，常见被动 be captivated。', 'The audience was captivated by her voice.', '观众被她的嗓音迷住了。', ['captivated audience'], ['fascinate', 'grip', 'hook'], 'verb', '及物', '书面'],
  ], 'captivates~captivated~captivated~captivating', ['fascinate'], '家族 fascinate 使着迷（最常用）、近义 grip 抓住注意力、hook 让人入迷；captivate 较文雅');

  W('carbon-based', 'adjective', '/ˌkɑːbən ˈbeɪst/', '', [], '碳基的；以碳为基础的', 'Based on the element carbon, used especially of living things.', [
    ['碳基的；以碳为基础的', 'Based on the element carbon, used especially of living things.', '以碳元素为基础的，尤用于指生物。', '连字符复合形容词。', 'All known life is carbon-based.', '所有已知生命都以碳为基础。', ['carbon-based life'], ['organic'], 'adjective', '定语', '科学'],
  ], '', ['organic'], 'carbon 碳 + based 为基础的；carbon 在本词库无可靠分级故留空；近义 organic 有机的（化学义）');

  W('care for', 'verb', '/ˌkeə ˈfɔː(r)/', '', [], '照顾；喜欢', 'To look after someone or something, or to like something.', [
    ['照顾；照料', 'To look after someone or something.', '照顾某人或某物。', '及物，较正式：care for the elderly。', 'She cares for her elderly mother.', '她照顾年迈的母亲。', ['care for sb'], ['nurse', 'tend'], 'verb', '及物', '健康'],
    ['喜欢；想要', 'To like something, used mainly in negative statements.', '喜欢某物，主要用于否定句。', '及物，否定句中表不喜欢。', 'I do not care for spicy food.', '我不喜欢吃辣。', ['do not care for'], [], 'verb', '及物', '口语'],
  ],'cares for~cared for~caring for', ['nurse', 'tend'], 'care 关心 + for；家族 tend 照料（较正式）、近义 nurse 护理；第二义用于否定句。分级留空').phrase = true;

  W('careful', 'adjective', '/ˈkeəfl/', 'A1', ['CET4'], '小心的；仔细的', 'Giving attention to details or to what you are doing.', [
    ['小心的；仔细的', 'Giving attention to details or to what you are doing, so as to avoid mistakes or harm.', '留意细节或正在做的事，以免出错或造成伤害。', 'be careful with sth、careful planning。', 'Be careful with that glass.', '小心那个玻璃杯。', ['be careful with'], ['deliberate', 'meticulous', 'precise', 'thorough', 'wary'], 'adjective', '定语/表语', '通用'],
  ], '', ['meticulous', 'thorough', 'wary'], '←care A1 关心 + -ful，A1 继承；家族 meticulous 一丝不苟的、thorough 彻底的、wary 谨慎的，近义 deliberate 蓄意的、precise 精确的');

  W('careless', 'adjective', '/ˈkeələs/', 'A1', ['CET4'], '粗心的；不小心的', 'Not giving enough attention to what you do, so mistakes are made.', [
    ['粗心的；不小心的', 'Not giving enough attention to what you do, so that mistakes are made.', '做事不够用心、以致出错的。', '常见 careless driving/mistake。', 'A careless mistake cost them the match.', '一个粗心的失误让他们输了比赛。', ['careless driving'], ['lazy', 'negligent', 'reckless', 'slack'], 'adjective', '定语/表语', '通用'],
  ], '', ['negligent', 'reckless'], '←care A1 + -less，A1 继承；家族 negligent 疏忽的（职务/法律）、reckless 鲁莽的，近义 lazy 懒散的、slack 松懈的');

  W('carer', 'noun', '/ˈkeərə(r)/', 'A1', [], '照料者；看护人', 'A person who looks after someone who is ill or disabled.', [
    ['照料者；看护人（英式）', 'A person who looks after someone who is young, ill, or disabled.', '照看年幼、生病或残障者的人。', '可数，英式常用，= 美式 caregiver。', 'She works as a carer in a nursing home.', '她在养老院做护理员。', ['a full-time carer'], ['nurse'], 'noun', 'countable', '健康'],
  ], 'carers', ['nurse'], '←care A1 照料 + -er（表人），A1 继承；家族 nurse 护士（持证职业）；英式 carer = 美式 caregiver');

  W('caress', 'noun/verb', '/kəˈres/', '', [], '爱抚；轻抚', 'A gentle loving touch, or to touch someone in that way.', [
    ['爱抚；轻抚', 'A gentle touching movement made with the hand, showing love.', '用手轻轻抚摸、表示爱意的动作。', '可数，较文。', 'He gave her hair a gentle caress.', '他轻轻抚了一下她的头发。', ['a gentle caress'], ['stroke'], 'noun', 'countable', '外貌'],
    ['爱抚；轻抚', 'To touch someone or something gently in a loving way.', '以爱护的方式轻触某人或某物。', '及物，较文。', 'She caressed the puppy gently.', '她轻抚着小狗。', [], ['stroke'], 'verb', '及物', '书面'],
  ], 'caresses~caressed~caressed~caressing', ['stroke'], '家族 stroke 抚摸/中风（一击），近义同词；caress 更温柔、多含爱意。分级留空');

  W('caretaker', 'noun', '/ˈkeəteɪkə(r)/', 'A1', [], '管理人；看管人', 'A person whose job is to look after a large building or piece of land.', [
    ['管理人；看管人', 'A person whose job is to look after a large building or piece of land.', '职业是照看大型建筑或地块的人。', '可数，常见 school/building caretaker。', 'The caretaker unlocked the gates early.', '管理员早早打开了大门。', ['a building caretaker'], ['superintendent'], 'noun', 'countable', '通用'],
  ], 'caretakers', ['care', 'take'], '←care A1 照管 + taker 承担者，取首成分级 A1；近义 superintendent 监管人（美式公寓管理员）');

  W('carnival', 'noun', '/ˈkɑːnɪvl/', '', [], '嘉年华；狂欢节', 'A public festival with music, dancing, and often a parade.', [
    ['嘉年华；狂欢节', 'A public festival with music, dancing, and often a parade.', '有音乐、舞蹈、常带游行的公众节庆。', '可数，常见 street carnival。', 'The town held its spring carnival.', '镇上举办了春季狂欢节。', ['street carnival'], ['festival'], 'noun', 'countable', '文化'],
  ], 'carnivals', [], '源自拉丁 carrus（马车）；近义 festival 节日（统称、不强调狂欢）。分级留空');

  W('carp', 'verb', '/kɑːp/', '', [], '挑剔；唠叨地抱怨', 'To keep complaining about something in an annoying way.', [
    ['挑剔；唠叨地抱怨', 'To keep complaining about something in an annoying way.', '以烦人的方式不停抱怨某事。', '不及物：carp at/about sth。', 'Stop carping about the food.', '别再挑食物的毛病了。', ['carp at'], ['criticize'], 'verb', '不及物', '口语'],
  ], 'carps~carped~carped~carping', [], '近义 criticize 批评（中性、可及物）；carp 不及物、含唠叨意味。分级留空');

  W('carport', 'noun', '/ˈkɑːpɔːt/', 'A1', [], '车棚；停车棚', 'A covered structure for parking a car, open on at least one side.', [
    ['车棚；停车棚', 'A covered structure for parking a car, open on at least one side.', '至少一侧敞开的停车遮棚。', '可数，主美式与澳式。', 'They parked under the carport.', '他们把车停在车棚下。', ['a built-in carport'], ['garage'], 'noun', 'countable', '交通'],
  ], 'carports', ['garage'], 'car 车 + port 棚，取首成分级 A1；家族 garage 车库（有墙有门）');

  W('carriageway', 'noun', '/ˈkærɪdʒweɪ/', '', [], '车行道', 'The part of a road used by vehicles, separated from any footpath.', [
    ['车行道', 'The part of a road used by vehicles, separated from any footpath.', '道路中供车辆行驶、与人行道分开的部分。', '不可数或可数，英式用语。', 'The lorry stopped in the middle of the carriageway.', '卡车停在了车行道中央。', ['dual carriageway'], ['lane'], 'noun', 'uncountable/countable', '交通'],
  ], 'carriageways', [], '←carriage（本词库无可靠分级）+ way，故留空；近义 lane 车道（分道之一）；dual carriageway 双向分隔公路');

  W('carry off', 'verb', '/ˌkæri ˈɒf/', '', [], '成功做到；抢走', 'To succeed in doing something difficult, or to take away by force.', [
    ['成功做到；夺得', 'To succeed in doing something difficult, or to win a prize.', '成功做成困难的事，或赢得奖项。', '及物：carry off the prize。', 'The team carried off the top prize.', '团队夺得了最高奖项。', ['carry off the award'], [], 'verb', '及物', '通用'],
    ['抢走；劫走', 'To take someone or something away by force.', '强行带走某人或某物。', '及物，较文。', 'Masked men carried off the jewels.', '蒙面人抢走了珠宝。', ['carry off the loot'], ['abduct'], 'verb', '及物', '法律'],
  ],'carries off~carried off~carrying off', [], 'carry + off；第一义成功带走（奖项），第二义近义 abduct 绑架（正式）。分级留空').phrase = true;

  W('carry on', 'verb', '/ˌkæri ˈɒn/', '', [], '继续；进行', 'To continue doing something, or to continue a fight or struggle.', [
    ['继续（做）', 'To continue doing something, especially despite a problem.', '继续做某事，尤指尽管有问题。', '及物或不及物，常见 carry on as usual。', 'They carried on despite the rain.', '他们冒雨继续进行。', ['carry on as usual'], ['continue'], 'verb', '及物/不及物', '通用'],
    ['进行（战争、斗争）', 'To continue to fight or struggle against something.', '继续与某事作斗争。', '及物：carry on a struggle/campaign。', 'They carried on the fight for years.', '他们把斗争持续了多年。', ['carry on the struggle'], ['wage'], 'verb', '及物', '书面'],
  ],'carries on~carried on~carrying on', ['continue'], 'carry + on；家族 continue 继续（通用）、近义 wage 进行（战争）。分级留空').phrase = true;

  W('carry out', 'verb', '/ˌkæri ˈaʊt/', '', [], '执行；实施', 'To do something that you have planned or been asked to do.', [
    ['执行；实施', 'To do something that you have planned or been asked to do.', '做已计划好或被要求做的事。', '及物、可分动词：carry out a plan/test。', 'The team carried out the survey in May.', '团队在五月实施了调查。', ['carry out a survey'], ['administer', 'conduct', 'do', 'execute', 'fulfil', 'implement', 'perform'], 'verb', '及物', '通用'],
  ], '', ['conduct', 'do', 'execute', 'implement'], 'carry + out；家族 conduct 进行、do 做、execute 执行、implement 实施，近义 administer 施行、fulfil 完成、perform 执行（任务）。分级留空').phrase = true;

  W('cars', 'noun', '/kɑːz/', 'A1', [], '汽车；轿车（复数）', 'Road vehicles with four wheels that carry a small number of people.', [
    ['汽车；轿车（复数）', 'Road vehicles with four wheels that carry a small number of people.', '载少量乘客的四轮道路车辆（复数形式）。', '复数形式，常见 new cars/rows of cars。', 'Rows of new cars filled the lot.', '一排排新车停满了车场。', ['new cars'], ['traffic'], 'noun', 'uncountable/countable', '交通'],
  ], '', ['traffic'], '←car A1 + -s（复数专义），A1 继承；近义 traffic 交通（车流总称）');

  W('cartel', 'noun', '/kɑːˈtel/', '', [], '卡特尔；垄断联盟', 'A group of companies or countries that control prices or production together.', [
    ['卡特尔；企业联盟', 'A group of companies or countries that work together to control prices or production.', '为控制价格或产量而协同行动的公司或国家集团。', '可数，常见 an oil cartel（石油卡特尔）。', 'The cartel fixed the price of oil.', '该卡特尔操纵了油价。', ['an oil cartel'], ['monopoly', 'syndicate'], 'noun', 'countable', '金融'],
  ], 'cartels', ['syndicate'], '家族 syndicate 辛迪加（联合企业组织）、近义 monopoly 垄断（单一控制）。分级留空');

  W('cartridge', 'noun', '/ˈkɑːtrɪdʒ/', '', [], '弹药筒；墨盒', 'A metal case containing bullets, or a container for ink in a printer.', [
    ['弹药筒；子弹', 'A metal case containing bullets or explosives for a gun.', '装有子弹或炸药的金属筒。', '可数，军事语境。', 'He loaded a fresh cartridge.', '他装上了一发新弹药。', ['an empty cartridge'], ['magazine'], 'noun', 'countable', '军事'],
    ['（打印机）墨盒；（电唱机）唱头', 'A container for ink in a printer, or a pickup for a record player.', '打印机的墨盒，或电唱机的唱头。', '可数，常见 an ink cartridge。', 'The printer needs a new cartridge.', '打印机需要个新墨盒。', ['an ink cartridge'], [], 'noun', 'countable', '科技'],
  ], 'cartridges', [], '近义 magazine 弹匣（可装多发）；cartridge 泛指可换装的筒状容器（弹、墨、胶卷）。分级留空');

  W('carving', 'noun', '/ˈkɑːvɪŋ/', '', ['CET6'], '雕刻；雕刻品', 'The art of shaping wood or stone, or an object made that way.', [
    ['雕刻（术）；雕刻', 'The art of shaping wood or stone into a design.', '把木石塑造成造型的艺术。', '不可数，常见 wood/stone carving。', 'He studied stone carving in Italy.', '他在意大利学习石雕。', ['wood carving'], ['sculpture'], 'noun', 'uncountable', '艺术'],
    ['雕刻品；雕件', 'An object or design made by carving.', '通过雕刻制成的物件或图案。', '可数。', 'The temple is famous for its marble carvings.', '这座庙以大理石雕件闻名。', [], [], 'noun', 'countable', '艺术'],
  ], 'carvings', ['sculpture'], '←carve（本词库无可靠分级）+ -ing，故留空；家族 sculpture 雕塑（含泥塑、金属）');

  W('cash drawer', 'noun', '/ˌkæʃ ˈdrɔː(r)/', '', [], '收银抽屉', 'A drawer in a cash register where money is kept.', [
    ['收银抽屉', 'A drawer in a cash register where money is kept.', '收银机中存放钱款的抽屉。', '可数，商业场景。', 'She opened the cash drawer and made change.', '她打开收银抽屉找零。', ['an empty cash drawer'], ['till'], 'noun', 'countable', '商务'],
  ], '', ['till'], 'cash 现金 + drawer 抽屉；近义 till 钱箱（英式、装钱的抽屉或箱）。短语分级留空').phrase = true;

  W('casing', 'noun', '/ˈkeɪsɪŋ/', 'A2', [], '外壳；套子', 'A covering or box that protects something.', [
    ['外壳；套子', 'A covering or box that protects something.', '保护某物的外壳或盒子。', '不可数或可数，常见 metal casing。', 'The wire has a plastic casing.', '这根线有塑料外壳。', ['a metal casing'], ['envelope'], 'noun', 'uncountable/countable', '科技'],
  ], 'casings', ['envelope'], '←case A2 箱/套 + -ing，A2 继承；家族 envelope 信封/外壳（包裹层）');

  W('cassette', 'noun', '/kəˈset/', '', [], '盒式磁带；卡带', 'A flat plastic case containing magnetic tape for recording sound or data.', [
    ['盒式磁带；卡带', 'A flat plastic case containing magnetic tape for recording sound or data.', '装有录音或数据磁带的扁平塑料盒。', '可数，常见 audio cassette（录音带）。', 'He still has a cassette player.', '他还留着一台卡带机。', ['an audio cassette'], ['tape'], 'noun', 'countable', '科技'],
  ], 'cassettes', [], '法语 diminutive（-ette 表小盒）；近义 tape 磁带（材料/统称）。分级留空（词干不可见，不继承 case）');

  W('cast members', 'noun', '/ˌkɑːst ˈmembəz/', '', [], '演员阵容；全体演员', 'All the actors in a play, film, or show.', [
    ['演员阵容；全体演员', 'All the actors in a play, film, or show.', '戏剧、电影或演出中的全体演员。', '复数形式，娱乐行业用语。', 'The cast members took a bow.', '全体演员谢幕。', ['leading cast members'], ['cast'], 'noun', 'uncountable', '艺术'],
  ], '', ['cast'], 'cast 演员阵容 + members 成员；近义 cast 同集合（本身即含演员表义）。短语分级留空').phrase = true;

  W('catalyst', 'noun', '/ˈkætəlɪst/', '', [], '催化剂；促成因素', 'A substance that makes a reaction faster, or an event that causes big change.', [
    ['催化剂', 'A substance that makes a chemical reaction happen faster without being changed itself.', '使化学反应加快而自身不发生变化的物质。', '可数，科学语境。', 'Enzymes act as catalysts in the body.', '酶在体内起催化剂作用。', ['act as a catalyst'], ['midwife'], 'noun', 'countable', '科学'],
    ['促成因素', 'An event or person that causes a big change to happen.', '引发重大变化的事件或人。', '可数，比喻用法。', 'The crisis became a catalyst for reform.', '这场危机成了改革的催化剂。', ['a catalyst for change'], [], 'noun', 'countable', '书面'],
  ], 'catalysts', ['catalysis', 'catalyze'], '希腊语 kata-（下）+ lysis（分解）；近义 midwife 助产士（比喻：促成者）。分级留空');

  W('catch on', 'verb', '/ˌkætʃ ˈɒn/', '', [], '流行；理解', 'To become popular, or to understand something.', [
    ['流行；受欢迎', 'To become popular and be accepted by many people.', '变得流行并被大众接受。', '不及物：catch on quickly。', 'The new dance caught on quickly.', '新舞很快流行起来。', ['catch on quickly'], [], 'verb', '不及物', '口语'],
    ['理解；明白', 'To understand something.', '理解某事。', '不及物：catch on to sth（英式口语）。', 'I finally caught on to what they meant.', '我终于明白了他们的意思。', ['catch on to'], ['wise'], 'verb', '不及物', '口语'],
  ],'catches on~caught on~catching on', [], 'catch + on；第二义 put sb wise 使明白，近义 wise（俚）。短语分级留空').phrase = true;

  W('catchphrase', 'noun', '/ˈkætʃfreɪz/', '', [], '口头禅；流行标语', 'A short phrase that becomes well known because someone uses it often.', [
    ['口头禅；流行标语', 'A short phrase that becomes well known because someone uses it often.', '因常被使用而出名的短语。', '可数，多见于电视节目与广告。', 'His catchphrase made the show famous.', '他的口头禅让节目出了名。', [], ['slogan'], 'noun', 'countable', '文化'],
  ], 'catchphrases', ['slogan'], 'catch 抓住 + phrase 短语，习语化复合；家族 slogan 标语（宣传用、非个人）。分级留空');

  W('categorize', 'verb', '/ˈkætəɡəraɪz/', 'B1', [], '归类；分类', 'To put people or things into groups that they belong to.', [
    ['归类；分类', 'To put people or things into groups that they belong to.', '把人或物归入其所属的组别。', '及物，常见 categorize by。', 'The books are categorized by genre.', '图书按体裁分类。', ['categorize data'], ['classify'], 'verb', '及物', '教育'],
  ], 'categorizes~categorized~categorized~categorizing', ['classify'], '←category B1 种类 + -ize，B1 继承；家族 classify 分类（更通用、科学语境）');

  W('catwalk', 'noun', '/ˈkætwɔːk/', '', [], 'T台；狭窄通道', 'A narrow platform that models walk on, or a narrow walkway high up.', [
    ['T台；时装展台', 'A long narrow platform that models walk along at a fashion show.', '时装秀上模特走的狭长台子。', '可数，时尚行业用语。', 'The model strode down the catwalk.', '模特沿T台阔步前行。', ['a catwalk show'], ['runway'], 'noun', 'countable', '外貌'],
    ['（建筑、桥梁的）狭窄通道', 'A narrow walkway high up in a building or on a bridge.', '建筑或桥梁高处的狭窄走道。', '可数，工业与建筑用语。', 'Workers crossed on a metal catwalk.', '工人们走过一条金属窄道。', [], [], 'noun', 'countable', '工业'],
  ], 'catwalks', ['runway'], 'cat 猫 + walk 走道（猫步），习语化复合；家族 runway 跑道/展台。分级留空');

  W('cautious', 'adjective', '/ˈkɔːʃəs/', 'B2', ['CET4'], '谨慎的；小心的', 'Careful to avoid danger or making mistakes.', [
    ['谨慎的；小心的', 'Careful to avoid possible danger or mistakes.', '小心避开可能的危险或错误。', '常见 cautious optimism（谨慎乐观）。', 'She was cautious about the new plan.', '她对新计划持谨慎态度。', ['a cautious approach'], ['conservative', 'tentative', 'wary'], 'adjective', '定语/表语', '通用'],
  ], '', ['conservative', 'wary'], '←caution B2 谨慎 + -ous，B2 继承；家族 conservative 保守的、wary 警惕的，近义 tentative 试探性的');

  W('cavalier', 'noun/adjective', '/ˌkævəˈlɪə(r)/', '', [], '骑士；傲慢的', 'A soldier or knight of former times, or not caring enough about others.', [
    ['（旧时）骑兵；骑士', 'A knight or a soldier in former times.', '旧时的骑士或士兵。', '可数，历史用语。', 'The painting shows a cavalier in a plumed hat.', '画中是一位戴羽饰帽的骑士。', [], ['knight'], 'noun', 'countable', '历史'],
    ['傲慢的；漫不经心的', 'Not caring enough about other peoples feelings or how serious a situation is.', '不在意他人感受或事态严重性的。', '作定语，常见 cavalier attitude。', 'He took a cavalier attitude to the rules.', '他对规则抱着满不在乎的态度。', ['a cavalier attitude'], [], 'adjective', '定语', '书面'],
  ], 'cavaliers', [], '历史义近义 knight 骑士（统称）；第二义 cavalier attitude 满不在乎的态度。分级留空');

  W('cave in', 'verb', '/ˌkeɪv ˈɪn/', '', [], '塌陷；屈服', 'To collapse inwards, or to give up under pressure.', [
    ['塌陷；坍塌', 'To fall in or collapse suddenly.', '突然向内倒塌。', '不及物，常见 the roof caved in。', 'The tunnel roof caved in.', '隧道顶塌了。', ['the roof caved in'], ['collapse'], 'verb', '不及物', '通用'],
    ['屈服；让步', 'To finally agree to what someone demands after refusing for a long time.', '拒绝许久之后最终答应别人的要求。', '不及物：cave in to pressure。', 'The government caved in to pressure.', '政府在压力下让步了。', ['cave in to'], [], 'verb', '不及物', '政治'],
  ],'caves in~caved in~caving in', ['collapse'], 'cave 洞 + in 内（塌进洞），家族 collapse 倒塌、崩溃（通用）。短语分级留空').phrase = true;

  W('cavern', 'noun', '/ˈkævən/', 'B1', [], '大洞穴；洞窟', 'A very large cave, especially one deep inside the earth.', [
    ['大洞穴；洞窟', 'A very large cave, especially one deep inside the earth.', '很大的洞穴，尤指地层深处的。', '可数，文学与探险描写常见。', 'They explored a cavern under the mountain.', '他们探查了山下的大洞穴。', ['a huge cavern'], ['cave'], 'noun', 'countable', '科学'],
  ], 'caverns', ['cave'], '←cave B1 洞穴 + -ern，B1 继承；家族 cave 洞穴（统称），cavern 强调巨大、常在地下深处');

  W('celebrated', 'adjective', '/ˈselɪbreɪtɪd/', 'A2', [], '著名的；闻名的', 'Known and admired by very many people.', [
    ['著名的；闻名的', 'Known and admired by very many people.', '广为人知且受人赞赏的。', '作定语，较文：a celebrated writer。', 'She is a celebrated scientist.', '她是位著名科学家。', ['a celebrated author'], ['acclaimed'], 'adjective', '定语', '书面'],
  ], '', ['acclaimed'], '←celebrate A2 庆祝 + -ed（因成就受瞩目），A2 继承；近义 acclaimed 受好评的（经评论认可）');

})(typeof window !== 'undefined' ? window : globalThis);
