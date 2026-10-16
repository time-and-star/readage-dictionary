/* data/words/cet/author_c9.js · 手敲词条 C（九）：circulation ~ clink（含 5 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 * 注：clear one's throat 词条名含撇号，故 lemma 用双引号书写以免断串。
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_c9.js 必须在 _cet_helper.js 之后加载');

  W('circulation', 'noun', '/ˌsɜːkjəˈleɪʃn/', '', ['CET4'], '血液循环；流通', 'The movement of blood around the body, or the passing of something around.', [
    ['（血液）循环', 'The movement of blood around the body.', '血液在体内的流动。', '不可数：blood circulation。', 'Exercise improves blood circulation.', '锻炼改善血液循环。', ['blood circulation'], [], 'noun', 'uncountable', '健康'],
    ['流通；传播', 'The passing of something from place to place or person to person.', '某物在各地或人与人之间的传递。', '不可数：in circulation（在流通中）。', 'Old notes are still in circulation.', '旧钞仍在流通。', ['put in circulation'], ['currency'], 'noun', 'uncountable', '金融'],
  ], 'circulations', ['currency'], '←circulate（本词库无可靠分级）+ -ion，故留空；家族 currency 货币（钱在流通中）');

  W('circumstances', 'noun', '/ˈsɜːkəmstənsɪz/', 'B2', [], '情况；环境（复数）', 'The conditions or facts that affect a situation.', [
    ['情况；环境（复数）', 'The conditions or facts that affect a situation.', '影响某种情形的条件或事实。', '复数形式：under/in the circumstances（在这种情况下）。', 'Under the circumstances we agreed to delay.', '在这种情况下我们同意推迟。', ['under the circumstances'], ['condition', 'situation'], 'noun', 'uncountable/countable', '通用'],
  ], '', ['condition', 'situation'], '←circumstance B2 + -s（复数专义），B2 继承；家族 condition 条件、situation 情形（under the circumstances 固定搭配）');

  W('cistern', 'noun', '/ˈsɪstən/', '', [], '水箱；蓄水池', 'A tank for holding water, especially one that supplies a toilet or a building.', [
    ['水箱；蓄水池', 'A tank for holding water, especially one that supplies a toilet or a building.', '盛水的箱池，尤指供马桶或建筑用水的水箱。', '可数，英式：flush cistern（冲水箱）。', 'The cistern was leaking.', '水箱在漏水。', ['a toilet cistern'], ['tank'], 'noun', 'countable', '家居'],
  ], 'cisterns', [], '拉丁 cista（箱）；近义 tank 水箱（统称、可指大型罐）。分级留空');

  W('citizen of the world', 'noun', '/ˌsɪtɪzn əv ðə wɜːld/', '', [], '世界公民；四海为家的人', 'A person who feels at home in many different countries.', [
    ['世界公民；四海为家的人', 'A person who feels at home in many different countries.', '在许多国家都感到自在的人。', '名词短语，含赞美意味。', 'As a citizen of the world she lived on three continents.', '作为世界公民，她曾在三大洲生活。', [], ['cosmopolitan'], 'noun', 'countable', '社会'],
  ], '', ['cosmopolitan'], 'citizen 公民 + of the world 世界；近义 cosmopolitan 世界性的（形容词兼名词）。短语分级留空').phrase = true;

  W('citizens', 'noun', '/ˈsɪtɪznz/', 'B1', [], '市民；公民（复数）', 'People who live in a city or belong to a country.', [
    ['市民；公民（复数）', 'People who live in a city or belong to a country.', '居住在城市或属于某国的人（复数形式）。', '复数形式。', 'The citizens voted for change.', '市民们投票支持变革。', ['tax-paying citizens'], ['people'], 'noun', 'uncountable/countable', '政治'],
  ], '', ['people'], '←citizen B1 + -s（复数专义），B1 继承；近义 people 人民（集合、非正式）');

  W('citrus', 'noun/adjective', '/ˈsɪtrəs/', '', [], '柑橘类（植物、果实）', 'A tree or fruit such as an orange, lemon, or lime that grows in warm areas.', [
    ['柑橘类（植物、果实）', 'A tree or fruit such as an orange, lemon, or lime that grows in warm areas.', '橙、柠檬、酸橙等生长于温暖地区的树或果实。', '不可数，亦作形容词：citrus fruit（柑橘类水果）。', 'Add some citrus zest to the sauce.', '往酱汁里加些柑橘皮屑。', ['citrus fruit'], ['lemon', 'lime', 'orange'], 'noun', 'uncountable', '饮食'],
  ], '', ['lemon'], '家族 lemon 柠檬（其中一种）、近义 lime 酸橙、orange 橙。分级留空');

  W('city centre', 'noun', '/ˈsɪti ˈsentə(r)/', '', [], '市中心（英式）', 'The middle part of a city where most shops and offices are.', [
    ['市中心（英式）', 'The middle part of a city where most shops and offices are.', '城市里商店和办公室最集中的中心区域。', '可数或不可数，英式；美式说 downtown。', 'The protest filled the city centre.', '抗议活动挤满了市中心。', ['in the city centre'], ['downtown'], 'noun', 'uncountable', '交通'],
  ], '', ['downtown'], 'city 城市 + centre 中心；家族 downtown 市中心（美式）。短语分级留空').phrase = true;

  W('city dweller', 'noun', '/ˈsɪti ˈdwelə(r)/', '', [], '城市居民', 'A person who lives in a large city.', [
    ['城市居民', 'A person who lives in a large city.', '居住在大都市里的人。', '可数，新闻用语。', 'City dwellers often lack green space.', '城市居民常常缺少绿地。', [], ['metropolitan'], 'noun', 'countable', '社会'],
  ], '', ['metropolitan'], 'city 城市 + dweller 居住者；近义 metropolitan 大都市的（亦指都会居民）。短语分级留空').phrase = true;

  W('civilisation', 'noun', '/ˌsɪvəlaɪˈzeɪʃn/', 'B2', [], '文明；文化', 'A society with its own way of life, culture, and level of development.', [
    ['文明；文化', 'A society with its own way of life, culture, and level of development.', '拥有自身生活方式、文化与发展水平的社会。', '可数或不可数：ancient civilisations（古代文明）。', 'The ruins belonged to a lost civilisation.', '这些遗迹属于一个失落的文明。', ['ancient civilisation'], ['culture'], 'noun', 'uncountable/countable', '文化'],
  ], 'civilisations', ['culture'], '←civil B2 公民的 + -isation（……化），B2 继承；家族 culture 文化（生活方式总称）');

  W('claimant', 'noun', '/ˈkleɪmənt/', 'B1', [], '索赔者；申请人', 'A person who makes a claim for money or a right.', [
    ['索赔者；申请人', 'A person who makes a claim for money or a right, for example at a court or for benefits.', '为钱或权利提出要求的人，如上法庭或申领救济金者。', '可数，法律与福利用语。', 'The claimant must show proof of loss.', '索赔方必须出示损失证明。', ['a claimant for compensation'], ['plaintiff'], 'noun', 'countable', '法律'],
  ], 'claimants', ['plaintiff'], '←claim B1 要求 + -ant（表人），B1 继承；家族 plaintiff 原告（诉讼中的起诉方）');

  W('clamber', 'verb', '/ˈklæmbə(r)/', '', [], '攀爬；艰难地爬上', 'To climb or crawl with difficulty, using both hands and feet.', [
    ['攀爬；艰难地爬上', 'To climb or crawl with difficulty, using both hands and feet.', '手脚并用地艰难攀爬。', '不及物，文学与口语：clamber over/up。', 'The kids clambered up the rocks.', '孩子们爬上了岩石。', ['clamber over'], ['scramble'], 'verb', '不及物', '通用'],
  ], 'clambers~clambered~clambered~clambering', [], '近义 scramble 爬行（亦指争夺）；clamber 强调费力笨拙。分级留空');

  W('clandestine', 'adjective', '/klænˈdestɪn/', '', [], '秘密的；暗中的', 'Kept secret because it would be disapproved of.', [
    ['秘密的；暗中的', 'Kept secret because it would be disapproved of.', '因会遭反对而保密进行的。', '作定语，书面语：a clandestine meeting。', 'They held clandestine meetings in the cellar.', '他们在地窖里秘密开会。', ['a clandestine meeting'], ['underground'], 'adjective', '定语', '书面'],
  ], '', ['underground'], '近义 underground 地下的（亦指秘密的、非正式活动）；clandestine 更正式、强调隐瞒。分级留空');

  W('clarify', 'verb', '/ˈklærəfaɪ/', '', ['CET4'], '澄清；阐明', 'To make something clearer or easier to understand.', [
    ['澄清；阐明', 'To make something clearer or easier to understand.', '使某事更清楚或更容易理解。', '及物：clarify a point/situation。', 'Could you clarify the second point?', '第二点您能澄清一下吗？', ['clarify a point'], ['explain', 'illuminate'], 'verb', '及物', '通用'],
  ], 'clarifies~clarified~clarified~clarifying', ['explain', 'illuminate'], '←clarity 清晰（本词库无可靠分级），故留空；家族 explain 解释、illuminate 阐明（照亮）');

  W('clatter', 'noun/verb', '/ˈklætə(r)/', '', [], '哐当声；哗啦地响', 'A loud continuous noise of objects hitting each other, or to make that noise.', [
    ['哐当声；哗啦声', 'A loud continuous noise made by objects falling or hitting each other.', '物体坠落或相撞发出的响亮连续声。', '可数或不可数。', 'A clatter came from the kitchen.', '厨房传来一阵哐当声。', ['a clatter of dishes'], ['rattle'], 'noun', 'uncountable', '通用'],
    ['哐当响；哗啦地动', 'To make a loud noise by hitting objects.', '撞击物体发出大声。', '不及物或及物。', 'The pipes clattered in the wind.', '管子在风中哐当作响。', ['clatter about'], [], 'verb', '不及物', '通用'],
  ], 'clatters~clattered~clattered~clattering', ['rattle'], '拟声词；家族 rattle 格格响（短促连续、亦指拨浪鼓）。分级留空');

  W('cleaner', 'noun', '/ˈkliːnə(r)/', 'A1', [], '清洁工；清洁剂', 'A person who cleans buildings, or a substance used for cleaning.', [
    ['清洁工；打扫的人', 'A person or company whose job is to clean buildings.', '职业是打扫建筑物的人或公司。', '可数：office cleaner。', 'The cleaner comes on Fridays.', '清洁工每周五来。', ['an office cleaner'], ['maid'], 'noun', 'countable', '职业'],
    ['清洁剂', 'A substance used for cleaning.', '用于清洁的物质。', '可数：glass cleaner（玻璃清洁剂）。', 'Use a special cleaner for the screen.', '屏幕要用专用清洁剂。', ['a glass cleaner'], [], 'noun', 'countable', '家居'],
  ], 'cleaners', ['clean'], '←clean A1 打扫 + -er（表人/物），A1 继承；近义 maid 女佣（住家、旧式）');

  W('cleaners', 'noun', '/ˈkliːnəz/', 'A1', [], '洗衣店；洗衣服务', 'A shop or service that cleans clothes for customers.', [
    ['洗衣店；洗衣服务', 'A shop or service that cleans clothes for customers.', '为顾客清洗衣服的店或服务。', '多作复数 the cleaners；dry cleaners 干洗店。', 'I took the suit to the cleaners.', '我把西装送去了洗衣店。', ['dry cleaners'], ['laundry'], 'noun', 'uncountable/countable', '家庭'],
  ], '', ['laundry'], '←clean A1 + -ers（复数专指店铺），A1 继承；近义 laundry 洗衣房/待洗衣物');

  W('cleaning', 'noun', '/ˈkliːnɪŋ/', 'A1', [], '打扫；清洁', 'The activity of making a place or thing clean.', [
    ['打扫；清洁', 'The activity of making a place or thing clean.', '把某处或某物弄干净的活动。', '不可数：spring cleaning（大扫除）。', 'The cleaning took all morning.', '打扫花了一上午。', ['do the cleaning'], ['wash'], 'noun', 'uncountable', '家庭'],
  ], '', ['wash'], '←clean A1 + -ing（名词化），A1 继承；近义 wash 洗（用水洗）');

  W('cleanliness', 'noun', '/ˈklenlinəs/', 'A1', [], '卫生；整洁', 'The habit of keeping things clean, or the state of being clean.', [
    ['卫生；整洁', 'The habit of keeping things clean, or the state of being clean.', '保持清洁的习惯，或干净的状态。', '不可数。', 'Personal cleanliness helps prevent disease.', '个人卫生有助于预防疾病。', ['personal cleanliness'], ['hygiene', 'sanitation'], 'noun', 'uncountable', '健康'],
  ], '', ['hygiene'], '←clean A1 + -ness，A1 继承；家族 hygiene 卫生（个人健康习惯）、近义 sanitation 环境卫生（下水道、公共设施）');

  W("clear one's throat", 'verb', '/ˌklɪə(r) wʌnz ˈθrəʊt/', '', [], '清嗓子', 'To make a short sound in the throat before speaking.', [
    ['清嗓子', 'To make a short coughing sound before speaking or to clear the throat.', '在说话前或为清理喉咙而发出的短促咳声。', '固定搭配，及物动词短语。', 'She cleared her throat before starting the speech.', '她在开始演讲前清了清嗓子。', ['clear your throat'], ['cough'], 'verb', '及物', '健康'],
  ], '', ['cough'], 'clear 清除 + throat 喉咙的固定搭配；家族 cough 咳嗽（近似动作）。短语分级留空').phrase = true;

  W('clear-headed', 'adjective', '/ˌklɪə ˈhedɪd/', 'A1', [], '头脑清醒的；思路清楚的', 'Able to think clearly and make good decisions.', [
    ['头脑清醒的；思路清楚的', 'Able to think clearly and make good decisions.', '能清楚思考并作出良好判断的。', '作定语或表语。', 'Stay clear-headed and do not rush the choice.', '保持头脑清醒，别急着决定。', ['clear-headed thinking'], ['sober'], 'adjective', '定语/表语', '通用'],
  ], '', ['sober'], 'clear 清楚 + headed 有头脑的，取首成分级 A1；家族 sober 清醒的（未醉、冷静）');

  W('clearness', 'noun', '/ˈklɪənəs/', 'A1', [], '清晰；清楚', 'The quality of being easy to see, hear, or understand.', [
    ['清晰；清楚', 'The quality of being easy to see, hear, or understand.', '易于看见、听见或理解的性质。', '不可数，较文，多说 clarity。', 'The clearness of her explanation helped everyone.', '她解释的清晰让所有人都明白了。', [], ['clarity'], 'noun', 'uncountable', '书面'],
  ], '', ['clarity'], '←clear A1 清楚 + -ness，A1 继承；家族 clarity 清晰（更常用的说法）');

  W('clemency', 'noun', '/ˈklemənsi/', '', [], '仁慈；宽大', 'Kindness shown when someone has the power to punish.', [
    ['仁慈；宽大', 'Kindness shown when someone has the power to punish.', '拥有惩罚权者表现出的仁慈。', '不可数，法律语境：grant clemency（给予宽大）。', 'The governor granted clemency to the prisoner.', '州长对囚犯给予了宽大处理。', ['grant clemency'], ['mercy'], 'noun', 'uncountable', '法律'],
  ], 'clemencies', ['mercy'], '家族 mercy 怜悯（通用）；clemency 特指对刑罚的宽免。分级留空');

  W('clergyman', 'noun', '/ˈklɜːdʒɪmən/', '', [], '牧师；教士', 'A male member of the Christian clergy.', [
    ['牧师；教士', 'A male member of the Christian clergy.', '基督教神职人员中的男性。', '可数，复数 clergymen；女性为 clergywoman。', 'The clergyman led the service.', '牧师主持了仪式。', [], ['minister', 'priest'], 'noun', 'countable', '宗教'],
  ], 'clergymen', [], 'clergy 神职人员 + man（男），clergy 不在库故留空；近义 minister 牧师（新教）、priest 神父（天主教）');

  W('cleric', 'noun', '/ˈklerɪk/', '', [], '神职人员；牧师', 'A member of the clergy, especially a Christian priest or minister.', [
    ['神职人员；牧师', 'A member of the clergy, especially a Christian priest or minister.', '神职人员，尤指基督教的牧师或神父。', '可数，正式与新闻用语。', 'The cleric spoke out against violence.', '这位神职人员公开发言反对暴力。', [], ['priest'], 'noun', 'countable', '宗教'],
  ], 'clerics', [], '拉丁 clericus；近义 priest 神父/牧师（宗派具体）；cleric 中性统称。分级留空');

  W('cleverness', 'noun', '/ˈklevənəs/', 'A2', [], '聪明；机灵', 'The quality of being clever at solving problems.', [
    ['聪明；机灵', 'The quality of being clever at solving problems.', '善于解决问题的特质。', '不可数。', 'The plan succeeded through sheer cleverness.', '这个计划全凭巧妙成功。', ['sheer cleverness'], ['wit'], 'noun', 'uncountable', '通用'],
  ], '', ['wit'], '←clever A2 聪明 + -ness，A2 继承；近义 wit 机智（反应快、幽默）');

  W('cliche', 'noun', '/ˈkliːʃə/', '', [], '陈词滥调；老生常谈', 'A phrase or idea that has been used too often to seem fresh or original.', [
    ['陈词滥调；老生常谈', 'A phrase or idea that has been used too often to seem fresh or original.', '用得太多、不再显得新鲜的短语或想法。', '可数或不可数，法语借词。', 'The story ends on a familiar cliché.', '故事以一个熟悉的套路收尾。', ['a tired cliché'], ['stereotype'], 'noun', 'countable', '文化'],
  ], 'cliches', ['stereotype'], '法语借词；词条收无重音形式，亦常写作 cliché；家族 stereotype 刻板印象（对群体的固定看法）。分级留空');

  W('cling to', 'verb', '/ˌklɪŋ ˈtuː/', '', [], '紧紧抓住；坚持', 'To hold on to something tightly, or to keep believing in something.', [
    ['紧紧抓住；依附', 'To hold on to something tightly, or to stay close to someone.', '紧紧抓住某物，或紧靠某人。', '及物：cling to sth/sb。', 'The ship clung to the coastline.', '船紧贴着海岸线航行。', ['cling to the rope'], ['hug'], 'verb', '及物', '通用'],
    ['坚持；依恋（想法、习惯）', 'To keep believing or doing something even when it is hard to change.', '即使难以改变也仍相信或继续做某事。', '及物，含固执意味：cling to a belief。', 'She clung to the old routine.', '她固守着旧惯例。', ['cling to a belief'], [], 'verb', '及物', '通用'],
  ],'clings to~clung to~clinging to', [], 'cling 紧贴 + to；近义 hug 拥抱（身体贴近）。分级留空').phrase = true;

  W('clinical', 'adjective', '/ˈklɪnɪkl/', 'B1', ['CET4'], '临床的；冷静客观的', 'Connected with treating patients, or detached and objective.', [
    ['临床的；门诊的', 'Connected with the observation and treatment of patients.', '与观察、治疗病人有关的。', '常见 clinical trial（临床试验）。', 'The drug is still in clinical trials.', '该药仍处于临床试验阶段。', ['clinical trial'], ['medical'], 'adjective', '定语', '健康'],
    ['冷静的；客观的', 'Detached and objective, with no emotion.', '不带感情、客观冷静的。', '常见 a clinical eye（冷静客观的眼光）。', 'She described the scene in clinical detail.', '她以冷静客观的细节描述了现场。', [], [], 'adjective', '定语', '书面'],
  ], '', ['medical'], '←clinic B1 诊所 + -al，B1 继承；家族 medical 医学的（更宽泛）；第二义喻冷静客观');

  W('clinician', 'noun', '/klɪˈnɪʃn/', 'B1', [], '临床医生', 'A doctor or other health professional who works with patients.', [
    ['临床医生', 'A doctor or other health professional who works with patients.', '与病人打交道的医生或其他健康专业人员。', '可数，医疗行业用语。', 'Clinicians reported better results.', '临床医生报告了更好的结果。', [], ['physician'], 'noun', 'countable', '健康'],
  ], 'clinicians', ['physician'], '←clinic B1 诊所 + -ian（表人），B1 继承；家族 physician 医生（美式、内科）');

  W('clink', 'noun/verb', '/klɪŋk/', '', [], '叮当声；叮当响', 'The short high sound made by glasses or coins, or to make that sound.', [
    ['叮当声；当啷声', 'The short high sound made by glasses or coins hitting each other.', '杯子或硬币相撞发出的短促高声。', '可数或不可数。', 'The clink of glasses filled the room.', '满屋都是玻璃杯的叮当声。', ['a clink of coins'], ['rattle'], 'noun', 'uncountable', '通用'],
    ['叮当响', 'To make that short high sound.', '发出短促的高声。', '不及物或及物。', 'Keys clinked in her pocket.', '钥匙在她口袋里叮当作响。', [], [], 'verb', '不及物', '通用'],
  ], 'clinks~clinked~clinked~clinking', [], '拟声词；近义 rattle 格格响（更连续嘈杂）。分级留空');

  W('clique', 'noun', '/kliːk/', '', [], '小圈子；派系', 'A small group of people who do not easily allow others to join.', [
    ['小圈子；派系', 'A small group of people who do not easily allow others to join.', '不易让外人加入的小团体。', '可数，含排他贬义。', 'A clique of analysts ran the department.', '一小圈子的分析师把持着这个部门。', ['form a clique'], ['faction'], 'noun', 'countable', '社会'],
  ], 'cliques', ['faction'], '法语借词；家族 faction 派系（政治、有组织）；clique 强调排外。分级留空');

  W('close by', 'adverb', '/ˌkləʊz ˈbaɪ/', '', [], '附近；在近旁', 'Near to where you are.', [
    ['附近；在近旁', 'Near to where you are.', '在你所在之处附近。', '作状语，约等于 not far away。', 'We stayed in a hotel close by.', '我们住在附近的一家酒店。', [], ['nearby'], 'adverb', 'null', '通用'],
  ], '', ['nearby'], 'close 近 + by 在旁；近义 nearby 附近的（亦可作形容词），反义 far away。短语分级留空').phrase = true;

  W('close to', 'preposition', '/ˌkləʊz ˈtuː/', '', [], '接近；靠近', 'Near to something in space, time, or degree.', [
    ['接近；靠近', 'Near to something in space, time, or degree.', '在空间、时间或程度上接近某物。', '介词短语：close to + 名词。', 'They live close to the school.', '他们住得离学校很近。', ['close to home'], ['near'], 'preposition', 'null', '通用'],
  ], '', ['near'], 'close 近 + to 到；近义 near 接近（更简单直接），反义 far from。短语分级留空').phrase = true;

  W('closed', 'adjective', '/kləʊzd/', 'A1', [], '关闭的；不营业的', 'Not open for business or not allowing people to enter.', [
    ['关闭的；不营业的', 'Not open for business or not allowing people to enter.', '不营业的，或不让人进入的。', '表语或定语：closed on Sundays（周日休息）。', 'The shop was closed when we arrived.', '我们到的时候商店关门了。', ['closed for good'], ['off', 'shut'], 'adjective', '定语/表语', '通用'],
  ], '', ['off', 'shut'], '←close A1 关闭 + -ed，A1 继承；近义 off 关着的（亦作副词）、shut 关闭的（较口语）');

  W('closest', 'adjective', '/kləʊzɪst/', 'A1', [], '最近的；最亲近的', 'The superlative form of close in space, time, or relationship.', [
    ['最近的；最亲近的', 'The superlative form of close in space, time, or relationship.', 'close 在空间、时间或关系上的最高级。', '作定语：the closest match。', 'That is the closest we can get to the truth.', '那是我们能接近真相的最近程度。', ['the closest match'], ['immediate', 'proximate'], 'adjective', '定语', '通用'],
  ], '', ['immediate', 'proximate'], '←close A1 + -est（最高级），A1 继承；近义 immediate 直接的、proximate 较正式（临近）');

  W('closing', 'adjective/noun', '/ˈkləʊzɪŋ/', 'A1', [], '结束的；收盘价', 'Happening at the end of something, or the last price of a trading day.', [
    ['结束的；即将结束的', 'Happening at the end of something, or about to end.', '发生在某事结尾的，或即将结束的。', '常见 closing speech/remarks（闭幕致辞）。', 'She gave a short closing speech.', '她作了简短的闭幕致辞。', ['closing remarks'], ['last'], 'adjective', '定语', '通用'],
    ['收盘（价）', 'The price of a share at the end of a trading day.', '交易日结束时的股票价格。', '可数，金融用语：closing price。', 'The closing price was up two points.', '收盘价上涨了两点。', ['closing price'], ['latter'], 'noun', 'countable', '金融'],
  ],'closings', ['last', 'latter'], '←close A1 + -ing，A1 继承；近义 last 最后的、latter 后者的（the latter）');

  W('clothing', 'noun', '/ˈkləʊðɪŋ/', 'B1', ['CET4'], '服装；衣服', 'Clothes considered together as a group.', [
    ['服装；衣服', 'Clothes considered together as a group.', '统称的衣服、衣物。', '不可数，集合名词：a piece of clothing。', 'Pack warm clothing for the trip.', '为旅行带上暖和的衣物。', ['warm clothing'], ['clothes', 'garment', 'wear'], 'noun', 'uncountable', '外貌'],
  ], '', ['clothes', 'garment'], '←cloth B1 布 + -ing（总称），B1 继承；家族 clothes 衣服（复数集合）、garment 衣件（正式），近义 wear 服饰（统称）');

  W('cloudy', 'adjective', '/ˈklaʊdi/', 'A1', ['CET4'], '多云的；浑浊的', 'Full of clouds, or of a liquid not clear.', [
    ['多云的', 'Full of clouds; not sunny.', '布满云的、不见阳光的。', '天气用语，与 sunny 相对。', 'It will be cloudy with sunny periods.', '多云，间有晴。', ['a cloudy sky'], ['opaque'], 'adjective', '定语', '通用'],
    ['浑浊的；不清的', 'Of a liquid, not clear, with sediment in it.', '液体不清澈、有沉淀的。', '常见 cloudy water（浑水）。', 'The beer turned cloudy after a day.', '啤酒放了一天变浑了。', ['cloudy liquid'], [], 'adjective', '定语', '科学'],
  ], '', ['opaque'], '←cloud A1 云 + -y，A1 继承；家族 opaque 不透明的（光线穿不过）');

  W('clutter', 'noun/verb', '/ˈklʌtə(r)/', '', [], '杂乱；乱堆', 'A collection of unnecessary things in a place, or to fill a place that way.', [
    ['杂乱；乱七八糟的东西', 'A collection of unnecessary things in a place.', '某处一堆不必要的东西。', '不可数。', 'Clear the clutter off your desk.', '把桌上的杂物清掉。', ['clutter up'], ['junk', 'litter', 'mess'], 'noun', 'uncountable', '家庭'],
    ['堆满；使杂乱', 'To fill a space with unnecessary things.', '用不必要的东西堆满某处。', '及物：clutter up。', 'Old magazines cluttered the table.', '旧杂志堆得桌子乱七八糟。', ['clutter up'], [], 'verb', '及物', '家庭'],
  ], 'clutters~cluttered~cluttered~cluttering', [], '近义 junk 废物（可丢弃）、litter 乱丢的杂物（公共场所）、mess 脏乱状态。分级留空');

  W('coastal', 'adjective', '/ˈkəʊstl/', 'A2', ['CET4'], '沿海的；海岸的', 'Connected with or near a coast.', [
    ['沿海的；海岸的', 'Connected with or near a coast.', '与海岸有关的或靠近海岸的。', '常见 coastal town/flooding（沿海城镇、沿海洪水）。', 'Coastal villages depend on fishing.', '沿海村庄靠渔业为生。', ['a coastal path'], ['maritime'], 'adjective', '定语', '交通'],
  ], '', ['maritime'], '←coast A2 海岸 + -al，A2 继承；近义 maritime 海事的（航运、海军，范围更广）');

  W('coaster', 'noun', '/ˈkəʊstə(r)/', 'A2', [], '杯垫；沿海航行的船', 'A small mat under a glass, or a ship that sails along a coast.', [
    ['杯垫；隔热垫', 'A small mat put under a glass to protect a table.', '垫在杯下保护桌面的小垫子。', '可数。', 'Put your glass on a coaster.', '把杯子放在杯垫上。', ['a beer coaster'], ['mat'], 'noun', 'countable', '家居'],
    ['沿海航行的船', 'A ship that sails along a coast.', '沿海岸航行的船。', '可数，航海用语。', 'The old coaster still runs goods along the bay.', '这艘老式沿海船仍在湾内运货。', [], [], 'noun', 'countable', '交通'],
  ], 'coasters', ['coast'], '←coast A2 沿海 + -er，A2 继承；近义 mat 垫子（统称）');

  W('coating', 'noun', '/ˈkəʊtɪŋ/', 'A1', [], '涂层；覆盖层', 'A thin layer of a substance covering a surface.', [
    ['涂层；覆盖层', 'A thin layer of a substance covering a surface.', '覆盖在表面的一薄层物质。', '可数：a coating of dust/rust。', 'The pipe had a coating of rust.', '管子上有一层锈。', ['a coating of paint'], ['finish', 'oxide', 'paint'], 'noun', 'countable', '工业'],
  ], 'coatings', ['coat'], '←coat A1 外套 + -ing，A1 继承；近义 finish 表面处理、oxide 氧化层、paint 漆层');

  W('coax', 'verb', '/kəʊks/', '', [], '哄劝；耐心劝说', 'To persuade someone gently by talking kindly and patiently.', [
    ['哄劝；耐心劝说', 'To persuade someone gently by talking kindly and patiently.', '以温和耐心的话语说服某人。', '及物：coax sb into sth。', 'She coaxed the child into eating a spoonful.', '她哄着孩子吃了一勺。', ['coax into'], ['jolly'], 'verb', '及物', '口语'],
    ['慢慢弄出；小心操作', 'To obtain or move something with careful effort.', '费心费力地取得或移动某物。', '及物：coax a fire going。', 'He coaxed the engine to start.', '他慢慢把引擎发动了起来。', ['coax the engine'], [], 'verb', '及物', '通用'],
  ], 'coaxes~coaxed~coaxed~coaxing', ['persuade'], '家族 persuade 劝说（直接用词）、近义 jolly 哄（jolly along 带笑逗引）。分级留空');

  W('code word', 'noun', '/ˈkəʊd wɜːd/', '', [], '暗语；代号', 'A secret word used to stand for a real meaning.', [
    ['暗语；代号', 'A secret word used to stand for a real meaning.', '用来代表真实含义的秘密词。', '可数，情报与口语用语。', 'They used a code word for the operation.', '他们给这次行动用了个代号。', ['use a code word'], ['password'], 'noun', 'countable', '军事'],
  ], '', ['password'], 'code 密码 + word 词；近义 password 口令（身份验证用）。短语分级留空').phrase = true;

  W('coexisting', 'adjective', '/ˌkəʊɪɡˈzɪstɪŋ/', '', [], '共存的；同时存在的', 'Existing at the same time in the same place.', [
    ['共存的；同时存在的', 'Existing at the same time in the same place.', '在同一时间同一地点存在的。', 'coexist 的 -ing 分词作定语。', 'The museum shows coexisting styles from two eras.', '博物馆展出了两个时代并存的风格。', ['coexisting traditions'], ['concurrent', 'contemporary'], 'adjective', '定语', '书面'],
  ], '', ['concurrent', 'contemporary'], '←coexist（本词库无可靠分级）+ -ing，故留空；近义 concurrent 同时发生的、contemporary 同时代的');

  W('coffee shop', 'noun', '/ˈkɒfi ʃɒp/', '', [], '咖啡馆；咖啡店', 'A small restaurant where coffee, drinks, and light meals are served.', [
    ['咖啡馆；咖啡店', 'A small restaurant where coffee, drinks, and light meals are served.', '供应咖啡、饮料和简餐的小餐馆。', '可数，美式常用。', 'They met at a coffee shop near the station.', '他们在车站附近的咖啡馆碰面。', ['a coffee shop chain'], ['cafe'], 'noun', 'countable', '生活'],
  ], '', ['cafe'], 'coffee 咖啡 + shop 店；家族 cafe 咖啡馆（欧式、可有露天座）。短语分级留空').phrase = true;

  W('cog', 'noun', '/kɒɡ/', '', [], '齿轮；嵌齿', 'One of a series of teeth on a wheel that turns a machine.', [
    ['齿轮；嵌齿', 'One of a series of teeth on a wheel that turns a machine.', '转动机器的轮子上的一系列齿之一。', '可数：a cog in a machine。', 'A broken cog stopped the press.', '一个断齿让印刷机停了。', ['cog and gear'], ['gear', 'tooth'], 'noun', 'countable', '工业'],
  ], 'cogs', [], '近义 gear 齿轮（整套传动）、tooth 齿（单个）；习语 a cog in the machine 大机器中的小零件。分级留空');

  W('cohabit', 'verb', '/ˌkəʊˈhæbɪt/', '', [], '同居；共栖', 'To live together and share a home, especially as a couple.', [
    ['同居；共栖', 'To live together and share a home, especially as a couple.', '共同生活、共处一个家，尤指情侣。', '不及物，正式用语。', 'The couple cohabited for five years.', '这对伴侣同居了五年。', [], ['coexist'], 'verb', '不及物', '社会'],
  ], 'cohabits~cohabited~cohabited~cohabiting', ['coexist'], 'co 共同 + habit 居住；家族 coexist 共存（更宽泛）。分级留空');

  W('coiled', 'adjective', '/kɔɪld/', '', [], '盘绕的；卷曲的', 'Twisted into a ring or spiral shape.', [
    ['盘绕的；卷曲的', 'Twisted into a ring or spiral shape.', '扭成环状或螺旋状的。', '作定语：a coiled rope。', 'A coiled rope hung by the door.', '一卷盘好的绳子挂在门边。', ['a coiled spring'], ['spiral'], 'adjective', '定语', '通用'],
  ], '', ['spiral'], '←coil（本词库无可靠分级）+ -ed，故留空；近义 spiral 螺旋的（带角度的旋）');

  W('coincident', 'adjective', '/kəʊˈɪnsɪdənt/', '', [], '同时发生的；重合的', 'Happening at the same time or in the same place.', [
    ['同时发生的；重合的', 'Happening at the same time or in the same place.', '在同一时间或同一地点发生的。', '书面语：coincident with（与……同时）。', 'Their departures were coincident with the storm.', '他们的出发与风暴同时。', ['coincident with'], ['simultaneous'], 'adjective', '定语', '书面'],
  ], '', ['simultaneous'], '←coincide（本词库无可靠分级）+ -ent，故留空；家族 simultaneous 同时发生的（更常用）');

  W('coins', 'noun', '/kɔɪnz/', 'B1', [], '硬币；钱币（复数）', 'Pieces of metal money used for small amounts.', [
    ['硬币；钱币（复数）', 'Pieces of metal money used for small amounts.', '用于小额支付的金属钱币（复数形式）。', '复数形式：a pile of coins。', 'She dropped a handful of coins into the jar.', '她把一把硬币丢进罐子。', ['a pile of coins'], ['change'], 'noun', 'uncountable/countable', '金融'],
  ], '', ['change'], '←coin B1 硬币 + -s（复数专义），B1 继承；近义 change 零钱（找零的硬币）');

  W('collection', 'noun', '/kəˈlekʃn/', 'A2', ['CET4'], '收藏品；收集', 'A group of things someone has collected, or the act of collecting.', [
    ['收藏品；收藏', 'A group of things that someone has collected.', '某人收集起来的一组东西。', '可数：a collection of stamps。', 'Her collection of maps fills two shelves.', '她的地图收藏占了两排架子。', ['a private collection'], ['library', 'portfolio', 'suite'], 'noun', 'countable', '艺术'],
    ['收集；收取', 'The act of collecting things, or a scheduled pickup.', '收集东西的行为，或定时收取。', '不可数或可数：bin collection（垃圾收取）。', 'The collection of data took months.', '收集数据花了数月时间。', ['data collection'], ['accumulation', 'symposium'], 'noun', 'uncountable/countable', '教育'],
  ], 'collections', ['library', 'museum', 'portfolio'], '←collect A2 收集 + -ion，A2 继承；家族 library 图书馆、museum 博物馆、portfolio 作品集，近义 accumulation 积累、suite 一套、symposium 专题文集');

  W('collectively', 'adverb', '/kəˈlektɪvli/', '', [], '共同地；集体地', 'Done by all members of a group together.', [
    ['共同地；集体地', 'Done by all members of a group together.', '由群体全体成员一起完成的。', '作状语。', 'The funds were managed collectively.', '这些资金是共同管理的。', ['collectively owned'], ['together'], 'adverb', 'null', '通用'],
  ], '', ['together'], '←collective（本词库无可靠分级）+ -ly，故留空；家族 together 一起（更口语）');

  W('collectivism', 'noun', '/kəˈlektɪvɪzəm/', '', [], '集体主义', 'The belief that people should work together and share rather than own things separately.', [
    ['集体主义', 'The belief that people should work together and share rather than own things separately.', '认为人们应当共同劳动、共享而非各自占有的信念。', '不可数。', 'The state promoted collectivism after the war.', '战后国家推行集体主义。', ['state collectivism'], ['socialism'], 'noun', 'uncountable', '政治'],
  ], '', ['socialism'], '←collective（本词库无可靠分级）+ -ism，故留空；家族 socialism 社会主义（相近政治理念）');

  W('collision', 'noun', '/kəˈlɪʒn/', '', ['CET6'], '碰撞；冲突', 'A violent crash when two things hit each other, or a strong disagreement.', [
    ['碰撞；相撞', 'A violent crash when two things hit each other.', '两个物体猛烈相撞。', '可数：collision course（必起冲突的航向）。', 'The collision damaged both cars.', '这次碰撞撞坏了两辆车。', ['head-on collision'], ['crash', 'impact'], 'noun', 'countable', '交通'],
    ['冲突；抵触', 'A strong disagreement between two people or ideas.', '两人或两种观点之间的激烈分歧。', '不可数或可数：in collision with。', 'Their goals were in collision from the start.', '他们的目标从一开始就相互冲突。', ['in collision with'], [], 'noun', 'uncountable/countable', '政治'],
  ], 'collisions', ['crash'], '←collide（本词库无可靠分级）+ -ion，故留空；家族 crash 撞车事故、近义 impact 冲击（撞击力）');

  W('collude', 'verb', '/kəˈluːd/', '', [], '勾结；串通', 'To work secretly with someone to do something wrong.', [
    ['勾结；串通', 'To work secretly with someone to do something wrong.', '与某人秘密合作做坏事。', '不及物：collude with。', 'The firms colluded to fix prices.', '这些公司串通操纵价格。', ['collude with'], ['collaborate'], 'verb', '不及物', '法律'],
  ], 'colludes~colluded~colluded~colluding', ['collaborate'], '拉丁 ludere（玩耍）；家族 collaborate 合作（中性/褒义），collude 贬义勾结。分级留空');

  W('colourant', 'noun', '/ˈkʌlərənt/', 'A1', [], '着色剂；染料', 'A substance added to give colour to food or other material.', [
    ['着色剂；染料', 'A substance added to give colour to food or other material.', '加入食品或其他材料中以着色的物质。', '可数，工业与食品用语。', 'The label lists no artificial colourant.', '标签上没有列人工着色剂。', ['artificial colourant'], ['dye'], 'noun', 'countable', '工业'],
  ], 'colourants', ['color'], '←color A1 颜色 + -ant（表物），A1 继承（本词库收美式 color 拼写）；近义 dye 染料（给织物着色）');

  W('colourful', 'adjective', '/ˈkʌləfl/', 'A1', [], '色彩鲜艳的；生动的', 'Having many bright colours, or full of interest and excitement.', [
    ['色彩鲜艳的', 'Having many bright colours.', '有许多鲜艳色彩的。', '常见 colourful picture/fabric。', 'The market was full of colourful fabrics.', '市场里满是色彩鲜艳的织品。', ['colourful clothes'], ['gay'], 'adjective', '定语', '外貌'],
    ['生动的；有趣的', 'Full of interest and excitement, or lively.', '充满趣味与刺激的，或活泼的。', '常见 colourful character（有趣的人物）。', 'He told a colourful story about his travels.', '他讲了个生动有趣的旅行故事。', [], [], 'adjective', '定语', '通用'],
  ], '', ['gay'], '←color A1 + -ful，A1 继承（本词库收美式 color 拼写）；近义 gay 愉快的（旧义、口语）');

  W('combination', 'noun', '/ˌkɒmbɪˈneɪʃn/', 'B1', ['CET4'], '结合；组合', 'The act of joining things together, or a group that exists together.', [
    ['结合；混合', 'The act of joining two or more things together, or the result of that.', '把两个或多个事物合在一起的行为或结果。', '不可数或可数：in combination with。', 'The drug works in combination with others.', '这种药与其他药配合使用。', ['in combination with'], ['conjunction', 'fusion', 'synthesis', 'union'], 'noun', 'uncountable/countable', '通用'],
    ['组合；联合体', 'A group of people or things that exist together.', '共同存在的一群人或事物。', '可数。', 'A winning combination emerged early.', '一个必胜的组合早早出现了。', [], [], 'noun', 'countable', '通用'],
  ], 'combinations', ['conjunction', 'synthesis'], '←combine B1 结合 + -ation，B1 继承；家族 conjunction 连接、synthesis 综合，近义 fusion 融合、union 联合');

  W('combined', 'adjective', '/kəmˈbaɪnd/', 'B1', [], '联合的；复合的', 'Used of two or more things added together, or made of different parts.', [
    ['联合的；合计的', 'Used to describe two or more things that have been added together.', '用于描述两个以上事物加在一起的。', '作定语：combined total（合计）。', 'Their combined effort paid off.', '他们齐心的努力有了回报。', ['combined total'], ['joint', 'together'], 'adjective', '定语', '通用'],
    ['复合的；混合的', 'Made of different parts or materials combined.', '由不同部分或材料合成的。', '常见 combined degree（双学位）、combined cycle（联合循环）。', 'The engine uses a combined cycle.', '这台发动机采用联合循环。', ['combined heat and power'], ['aggregate', 'compound', 'hybrid', 'incorporate'], 'adjective', '定语', '科技'],
  ], '', ['combine'], '←combine B1 + -ed，B1 继承；近义 joint 联合的、together 一起、aggregate 总计的、compound 复合的、hybrid 混合的、incorporate 包含（动词）');

})(typeof window !== 'undefined' ? window : globalThis);
