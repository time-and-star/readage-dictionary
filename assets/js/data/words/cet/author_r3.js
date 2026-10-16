/* data/words/cet/author_r3.js — 常用词 R 批次 3，缺口 racial ~ reaction，共 31 条
 * （29 单词 + 2 短语：racket sport、rather than）。来源：family + 义项近反义缺口，
 * refs 逐字照抄队列；考级标签照抄队列（CET4：racial、rainy、rapidity、rarely、reaction；
 * CET6：radiant、radiation）。
 * 扫根结论：race A2、radio A2、rain A1、rational B2、reach A2、react B1（本批扫描）；
 * radiate B2、raid B2、rail B1、ranch B2、rank B2、rapid B1、rare B1、rash B2
 * （brief 根提示）——
 * · 透明后缀：racial←race A2 + -ial（-ial=-al，e→∅）、racing←race A2 + -ing、
 *   rainy←rain A1 + -y、reachable←reach A2 + -able、rationalize←rational B2 + -ize、
 *   rapidity←rapid B1 + -ity、rapidly←rapid B1 + -ly、rarely←rare B1 + -ly、
 *   rashness←rash B2 + -ness、ranker←rank B2 + -er、ranking←rank B2 + -ing、
 *   raider←raid B2 + -er、rancher←ranch B2 + -er、railing←rail B1 + -ing。
 * · 同根继承：radiant←radiate B2 + -ant（radia 全段共享）、radiating←radiate B2 + -ing、
 *   radiation←radiate B2 + -ion（radiat 全段可见）、reaction←react B1 + -ion。
 * · 复合/兄弟取根：rainfall←rain A1 + fall（复合取首成分，同 pitfall←pit 模式）、
 *   radius←radiate B2（兄弟派生，词干 radi 词首共享，半径为自圆心射出之射线）、
 *   radiological←radio A2（复合取首成分，同 photovoltaic←photo 先例；radiology 不在库，
 *   判断项披露）。
 * · 留空项（无库内可继根）：ramble、rampage、ransack（北欧语 rannsaka）、rapport、
 *   rascal、ravine；rd 为 third 的数字后缩写——字母词无拼写派生根（同 phd 先例）留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r3.js 必须在 _cet_helper.js 之后加载');

  W('racial', 'adjective', '/ˈreɪʃl/', 'A2', ['CET4'], '种族的；族裔的', 'Relating to the different races of people.', [
    ['种族的；族裔的', 'Relating to the different races of people.', '与不同人种种族有关的。', '多作定语。', 'The law bans racial discrimination.', '法律禁止种族歧视。', [], ['ethnic'], 'adjective', '定语', '社会'],
  ], '',['ethnic', 'race'], '←race A2 + -ial（-ial=-al 透明后缀，e→∅），A2 继承（brief 显示 ←?，经 racing←race[A2] 根提示确认）；家族/近义 ethnic 族裔的、种族的');

  W('racing', 'noun', '/ˈreɪsɪŋ/', 'A2', [], '赛马；赛车运动', 'The sport of racing horses or cars.', [
    ['赛马；赛车运动', 'The sport of racing horses or cars.', '赛马或赛车运动。', '不可数。', 'The racing season opens in May.', '赛季五月开启。', [], ['horse'], 'noun', 'uncountable', '体育'],
  ], '',['race'], '←race A2 + -ing（-ing 名词化），A2 继承（brief 根提示）；近义 horse 赛马（队列原样，指 horse racing）');

  W('racket sport', 'noun', '/ˈrækɪt spɔːt/', '', [], '球拍运动', 'A sport played with a racket, such as tennis.', [
    ['球拍运动', 'A sport played with a racket, such as tennis.', '用球拍进行的运动，如网球。', '可数。', 'Tennis is a popular racket sport.', '网球是流行的球拍运动。', [], ['tennis'], 'noun', 'countable', '体育'],
  ], '', ['tennis'], 'racket + sport；家族/近义 tennis 网球。短语分级留空').phrase = true;

  W('radiant', 'adjective', '/ˈreɪdiənt/', 'B2', ['CET6'], '发光的；容光焕发的', 'Shining brightly, or looking full of happiness.', [
    ['发光的；容光焕发的', 'Shining brightly, or looking full of happiness.', '闪闪发光的；或显得满面幸福的。', '多作定语或表语。', 'Her face was radiant with joy.', '她的脸容光焕发。', [], ['luminous'], 'adjective', '定语/表语', '外貌'],
  ], '',['radiate'], '←radiate B2 + -ant（-ant 透明后缀，radia 全段共享），B2 继承（brief 显示 ←?，经 radiating←radiate[B2] 根提示确认）；近义 luminous 发光的、明亮的');

  W('radiating', 'adjective', '/ˈreɪdieɪtɪŋ/', 'B2', [], '辐射的；放射的', 'Spreading out from a point, like rays from the sun.', [
    ['辐射的；放射的', 'Spreading out from a point, like rays from the sun.', '从一点向外散开，如太阳光线。', '分词形容词。', 'Heat is radiating from the stones.', '热量从石头上辐射出来。', [], ['radioactive'], 'adjective', '定语', '科学'],
  ], '',['radioactive', 'radiate'], '←radiate B2 + -ing（分词形容词），B2 继承（brief 根提示）；家族/近义 radioactive 放射性的');

  W('radiation', 'noun', '/ˌreɪdiˈeɪʃn/', 'B2', ['CET6'], '辐射；放射线', 'Energy sent out as rays or particles.', [
    ['辐射；放射线', 'Energy sent out as rays or particles.', '以射线或粒子形式放出的能量。', '不可数。', 'The device blocks harmful radiation.', '该装置阻挡有害辐射。', [], ['ray', 'x-ray'], 'noun', 'uncountable', '科学'],
  ], '',['x-ray', 'radiate'], '←radiate B2 + -ion（radiat 全段可见，e→∅+ion 同 -ion 类），B2 继承（brief 显示 ←?，经 radiating←radiate[B2] 根提示确认）；家族 x-ray X 光，近 ray 射线、x-ray');

  W('radiological', 'adjective', '/ˌreɪdiəˈlɒdʒɪkl/', 'A2', [], '放射学的', 'Relating to radiology and the use of radiation.', [
    ['放射学的', 'Relating to radiology and the use of radiation.', '与放射学及辐射应用有关的。', '多作定语。', 'The radiological ward is downstairs.', '放射科病房在楼下。', [], ['x-ray'], 'adjective', '定语', '科学'],
  ], '',['radio'], '←radio A2（radiological = radio + -logical，复合取首成分同 photovoltaic←photo 先例；radiology 不在库），A2 继承（brief 显示 ←?，自行扫根 radio，判断项披露）；近义 x-ray X 光、放射');

  W('radius', 'noun', '/ˈreɪdiəs/', 'B2', [], '半径', 'The distance from the centre of a circle to its edge.', [
    ['半径', 'The distance from the centre of a circle to its edge.', '从圆心到圆周的距离。', '可数。', 'Draw a circle with a radius of five cm.', '画一个半径五厘米的圆。', [], ['diameter'], 'noun', 'countable', '科学'],
  ], 'radii',['diameter', 'radiate'], '←radiate B2（兄弟派生，词干 radi 词首全段共享，半径为自圆心射出之射线），B2 继承（brief 显示 ←?，radius 不在库、自行判断）；家族/近义 diameter 直径');

  W('raffle', 'noun', '/ˈræfl/', '', [], '抽彩；抽签售物', 'A game of chance where tickets are drawn to win prizes.', [
    ['抽彩；抽签售物', 'A game of chance where tickets are drawn to win prizes.', '凭彩票抽签中奖的游戏。', '可数。', 'They held a raffle for the new roof.', '他们为新屋顶举行抽奖。', [], ['lottery'], 'noun', 'countable', '娱乐'],
  ], 'raffles', ['lottery'], '无库内可见词根，留空；家族/近义 lottery 抽奖、彩票');

  W('raider', 'noun', '/ˈreɪdə/', 'B2', [], '袭击者；突袭部队', 'A person or group that attacks or robs something suddenly.', [
    ['袭击者；突袭部队', 'A person or group that attacks or robs something suddenly.', '突然攻击或抢劫某物的人或团体。', '可数。', 'The raiders escaped by boat.', '袭击者乘船逃走了。', [], ['pirate'], 'noun', 'countable', '军事'],
  ], 'raiders',['pirate', 'raid'], '←raid B2 + -er（施事后缀），B2 继承（brief 根提示）；家族/近义 pirate 海盗、劫掠者');

  W('railing', 'noun', '/ˈreɪlɪŋ/', 'B1', [], '栏杆；扶手', 'A fence of rails, especially along a balcony or stairs.', [
    ['栏杆；扶手', 'A fence of rails, especially along a balcony or stairs.', '由栏杆构成的围栏，尤指阳台或楼梯旁。', '常以复数出现。', 'She leaned on the railing.', '她倚在栏杆上。', [], ['fence', 'rail'], 'noun', 'countable', '家居'],
  ], 'railings',['rail'], '←rail B1 + -ing（-ing 名词化），B1 继承（brief 根提示）；近义 fence 栅栏、rail 栏杆');

  W('rainfall', 'noun', '/ˈreɪnfɔːl/', 'A1', [], '降雨；降雨量', 'Rain falling in a place, or the amount that falls.', [
    ['降雨；降雨量', 'Rain falling in a place, or the amount that falls.', '某地降落的雨；或降雨的量。', '不可数，偶尔可数。', 'Rainfall in June was heavy.', '六月降雨量很大。', [], ['rain'], 'noun', 'uncountable', '自然'],
  ], '', ['rain'], '←rain A1 + fall（复合取首成分，同 pitfall←pit 模式），A1 继承（brief 显示 ←?，自行扫根 rain）；家族/近义 rain 雨、下雨');

  W('rainy', 'adjective', '/ˈreɪni/', 'A1', ['CET4'], '下雨的；多雨的', 'Having a lot of rain.', [
    ['下雨的；多雨的', 'Having a lot of rain.', '雨很多的。', '多作定语。', 'We visited during the rainy season.', '我们在雨季到访。', [], ['wet'], 'adjective', '定语', '自然'],
  ], '',['rain'], '←rain A1 + -y（透明后缀），A1 继承（brief 显示 ←?，经 rainfall←rain[A1] 根提示确认）；近义 wet 潮湿的、下雨的');

  W('ramble', 'verb', '/ˈræmbl/', '', [], '漫步；漫谈', 'To walk for pleasure, or to speak at length.', [
    ['漫步；闲逛', 'To walk for pleasure without a fixed route.', '为娱乐而无固定路线地走。', '不及物。', 'They rambled through the woods.', '他们在树林里漫步。', [], ['stroll', 'wander'], 'verb', '不及物', '通用'],
    ['漫谈；冗长讲述', 'To speak at length in a confused way.', '以混乱的方式冗长地讲。', '不及物。', 'He rambled on about his youth.', '他漫谈他的青年时代。', [], [], 'verb', '不及物', '通用'],
  ], 'rambles~rambled~rambled~rambling', [], '无库内可见词根，留空；近义 stroll 遛弯、闲逛，wander 徘徊、漫步');

  W('rampage', 'noun', '/ˈræmpeɪdʒ/', '', [], '横冲直撞；暴走', 'A sudden violent rush through a place.', [
    ['横冲直撞；暴走', 'A sudden violent rush through a place.', '突然暴力地横冲直撞。', '可数，on a rampage 为常用搭配。', 'The mob went on a rampage.', '暴徒横冲直撞。', [], ['riot'], 'noun', 'countable', '社会'],
  ], 'rampages', ['riot'], '无库内可见词根，留空；家族/近义 riot 骚乱、暴动');

  W('rancher', 'noun', '/ˈrɑːntʃə/', 'B2', [], '牧场主；牧场工人', 'A person who owns or works on a ranch.', [
    ['牧场主；牧场工人', 'A person who owns or works on a ranch.', '拥有或在牧场工作的人。', '可数。', 'The rancher drove the cattle south.', '牧场主把牛群赶往南方。', [], ['cowboy'], 'noun', 'countable', '农业'],
  ], 'ranchers',['cowboy', 'ranch'], '←ranch B2 + -er（施事后缀），B2 继承（brief 根提示）；家族/近义 cowboy 牛仔');

  W('ranker', 'noun', '/ˈræŋkə/', 'B2', [], '列兵；新兵', 'A soldier of the lowest rank.', [
    ['列兵；新兵', 'A soldier of the lowest rank.', '军衔最低的士兵。', '可数。', 'Every officer started as a ranker.', '每位军官都从列兵做起。', [], ['private'], 'noun', 'countable', '军事'],
  ], 'rankers',['rank'], '←rank B2 + -er（施事后缀，ranker 为「列兵」义），B2 继承（brief 根提示）；近义 private 列兵、二等兵');

  W('ranking', 'noun', '/ˈræŋkɪŋ/', 'B2', [], '排名；名次', 'A position in a list, especially of players or institutions.', [
    ['排名；名次', 'A position in a list, especially of players or institutions.', '名单中的位置，尤指选手或机构。', '可数。', 'The university rose in the ranking.', '该大学排名上升。', [], ['hierarchy'], 'noun', 'countable', '通用'],
  ], 'rankings',['hierarchy', 'rank'], '←rank B2 + -ing（-ing 名词化），B2 继承（brief 根提示）；家族/近义 hierarchy 等级体系、层级');

  W('ransack', 'verb', '/ˈrænsæk/', '', [], '洗劫；翻找', 'To search a place roughly and thoroughly, often stealing things.', [
    ['洗劫；翻找', 'To search a place roughly and thoroughly, often stealing things.', '粗暴而彻底地搜查某地，常伴盗窃。', '及物。', 'Burglars ransacked the apartment.', '盗贼洗劫了公寓。', [], ['loot', 'rifle'], 'verb', '及物', '社会'],
  ], 'ransacks~ransacked~ransacked~ransacking', ['rifle'], '北欧语 rannsaka——与 rifle 无词形对应（保守同 placard 先例），留空；家族 rifle 劫掠（古义），近 loot 抢劫、掠夺，rifle');

  W('rapidity', 'noun', '/ræˈpɪdəti/', 'B1', ['CET4'], '急速；迅速', 'The quality of being very fast.', [
    ['急速；迅速', 'The quality of being very fast.', '非常快的性质。', '不可数。', 'The rapidity of the change surprised many.', '变化之快令许多人意外。', [], ['speed'], 'noun', 'uncountable', '通用'],
  ], '',['rapid'], '←rapid B1 + -ity（透明后缀），B1 继承（brief 根提示）；近义 speed 速度、加快');

  W('rapidly', 'adverb', '/ˈræpɪdli/', 'B1', [], '快速地', 'At a fast pace.', [
    ['快速地', 'At a fast pace.', '以快速度。', '修饰动词。', 'The city grew rapidly.', '城市迅速发展。', [], ['fast'], 'adverb', '不及物', '通用'],
  ], '',['rapid'], '←rapid B1 + -ly（透明后缀），B1 继承（brief 根提示）；近义 fast 快速地');

  W('rapport', 'noun', '/ræˈpɔː/', '', [], '融洽关系', 'A close friendly relationship where people understand each other.', [
    ['融洽关系', 'A close friendly relationship where people understand each other.', '人们彼此理解的亲密友好关系。', '不可数，常与 with 连用。', 'She built a rapport with the client.', '她与客户建立了融洽关系。', [], ['chemistry'], 'noun', 'uncountable', '社交'],
  ], '', [], '法语 rapport（相互关系）——无库内可见词根，留空；近义 chemistry 默契、合得来');

  W('rarely', 'adverb', '/ˈreəli/', 'B1', ['CET4'], '很少；难得', 'Not often.', [
    ['很少；难得', 'Not often.', '不经常。', '修饰动词，常置于句首或助动词后。', 'She rarely eats meat.', '她很少吃肉。', [], ['seldom'], 'adverb', '不及物', '通用'],
  ], '',['seldom', 'rare'], '←rare B1 + -ly（透明后缀），B1 继承（brief 根提示）；家族/近义 seldom 很少、不常');

  W('rascal', 'noun', '/ˈrɑːskl/', '', [], '无赖；淘气鬼', 'A dishonest or mischievous person, often amusing.', [
    ['无赖；淘气鬼', 'A dishonest or mischievous person, often amusing.', '不诚实或淘气的人，常带逗趣意味。', '可数。', 'The little rascal hid the keys.', '小淘气把钥匙藏起来了。', [], ['monkey'], 'noun', 'countable', '性格'],
  ], 'rascals', [], '无库内可见词根，留空；近义 monkey 淘气鬼、顽童');

  W('rashness', 'noun', '/ˈræʃnəs/', 'B2', [], '鲁莽；轻率', 'The quality of doing things without thinking about the results.', [
    ['鲁莽；轻率', 'The quality of doing things without thinking about the results.', '不考虑后果就做事的性质。', '不可数。', 'He regretted the rashness of his reply.', '他后悔回复的鲁莽。', [], ['haste'], 'noun', 'uncountable', '性格'],
  ], '',['rash'], '←rash B2 + -ness（透明后缀），B2 继承（brief 根提示）；近义 haste 匆忙、仓促');

  W('rather than', 'conjunction', '/ˈrɑːðə ðæn/', '', [], '而不是', 'Used to say one thing is preferred to another.', [
    ['而不是', 'Used to say one thing is preferred to another.', '用于表示更偏好另一事物。', '连接两个并列成分，前后形式需一致。', 'She chose tea rather than coffee.', '她选择了茶而不是咖啡。', [], ['instead'], 'conjunction', 'null', '通用'],
  ], '', [], 'rather + than；近义 instead 而不是、替代。短语分级留空').phrase = true;

  W('rationalize', 'verb', '/ˈræʃənəlaɪz/', 'B2', [], '合理化', 'To find logical reasons for behaviour that is really irrational.', [
    ['合理化', 'To find logical reasons for behaviour or feelings that are really irrational.', '为实际不理智的行为或感受寻找合理理由。', '可及物。', 'He rationalized the failure as bad luck.', '他把失败合理化为运气不好。', [], ['streamline'], 'verb', '及物', '心理'],
  ], 'rationalizes~rationalized~rationalized~rationalizing',['streamline', 'rational'], '←rational B2 + -ize（透明后缀），B2 继承（brief 显示 ←?，自行扫根 rational）；近义 streamline 精简、使合理化（队列原样）');

  W('ravine', 'noun', '/ræˈviːn/', '', [], '深谷；沟壑', 'A deep narrow valley with steep sides.', [
    ['深谷；沟壑', 'A deep narrow valley with steep sides.', '两侧陡峭的深窄山谷。', '可数。', 'The stream cut a deep ravine.', '溪流冲出了一道深谷。', [], ['gorge'], 'noun', 'countable', '地理'],
  ], 'ravines', [], '法语 ravin（冲沟）——无库内可见词根，留空；近义 gorge 峡谷、深壑');

  W('rd', 'noun', '/ˌɑː ˈdiː/', '', [], '第三的缩写', 'The letters rd used after numbers as the short form of third.', [
    ['第三的缩写', 'The letters rd used after numbers as the short form of third.', '数字后用来表示序数词「第三」的缩写字母 rd。', '常与数字连用，如 3rd。', 'The ordinal third is often written as 3rd.', '序数词「第三」常写作 3rd。', [], ['third'], 'noun', 'countable', '语法'],
  ], '', ['third'], 'third 的数字后缩写（3rd 中的 rd）——字母词无拼写派生根（同 phd 先例），留空；家族/近义 third 第三、第三的');

  W('reachable', 'adjective', '/ˈriːtʃəbl/', 'A2', [], '可达到的；能触及的', 'Able to be reached or obtained.', [
    ['可达到的；能触及的', 'Able to be reached or obtained.', '能够被达到或获得的。', '多作表语。', 'The file is reachable from any device.', '该文件可从任何设备访问。', [], ['accessible'], 'adjective', '表语', '通用'],
  ], '',['reach'], '←reach A2 + -able（透明后缀），A2 继承（brief 显示 ←?，自行扫根 reach）；近义 accessible 可进入的、可达到的');

  W('reaction', 'noun', '/riˈækʃn/', 'B1', ['CET4'], '反应；化学反应', 'A response to something, or a chemical process.', [
    ['反应；回应', 'A response to something that happens.', '对所发生之事的回应。', '可数。', 'Her reaction was calm.', '她的反应很平静。', [], ['reception'], 'noun', 'countable', '通用'],
    ['化学反应', 'A process where substances change into other substances.', '物质转变为其他物质的过程。', '可数。', 'The reaction releases heat.', '该反应释放热量。', [], ['fusion'], 'noun', 'countable', '科学'],
  ], 'reactions',['react'], '←react B1 + -ion（react 全段可见），B1 继承（brief 显示 ←?，自行扫根 react）；近义 reception 反应、接受，fusion 聚变（核反应语境）');
})(typeof window !== 'undefined' ? window : globalThis);
