/* data/words/cet/author_s22.js — 常用词 S 批次 22，缺口 storehouse ~ submission，共 31 条
 * （28 单词 + 3 短语：stretch out、strike back、subject matter；全文件 .phrase 标记 3 处）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_s22.txt，widx 280-310；本批词头与 refs 均完整，无残缺或粘连词头）。
 * CET 标签照抄队列：CET4 × 7（stormy、strength、strengthen、striking、stuffing、stylish、submission）、
 *   CET6 × 1（stunning），其余 23 条一律 []。
 * brief：%TEMP%\opencode\_s22_brief.txt 共 28 行、与本批 28 个单词逐行对应（3 条短语不入 brief）；
 *   其中 21 行显示 ←?，7 行给根（strainer←strain [B2]、striker←strike [B2]、striking←strike [B2]、
 *   stuffing←stuff [B1]、stunned←stun [C1]、stunner←stun [C1]、 stunning←stun [C1]）。
 *   ←? 一律按规范 §5.2 纯文本自扫（fs.readFileSync + indexOf 定位 W(词条) 取第 4 参，
 *   覆盖 assets/js/data/words/cet/author_*.js、pending_*.js；curated.js 以 level 字段核对，均未命中；未 require 全库）。
 * 扫根结论（自扫命中，均 author_s4.js 第 4 参；brief 给根的 7 词自扫复核同级）：
 *   store A2、storm A2、story A2、strain B2、street A1、strong A2、stretch B1、strike B2、stuff B1、
 *   stun C1、style A2、submit B2；判断项辅证另扫：strive B2（strife）、stump C1（stub）、
 *   utter B2 / butter A1（stutter）、due B1（subdue）、submarine B2（sub 的家族词）。
 * 继承 18 条（备注逐条写明本词条结论「X 级 继承」）：
 *   storehouse←store A2（复合词取首成分 §5.3）、stormy←storm A2（-y，§5.4 条 4b）、
 *   storyline←story A2（复合词 §5.3）、strainer←strain B2（-er，brief 根，strain 含「过滤」义）、
 *   streetcar←street A1（复合词 §5.3，判断项）、strength←strong A2（-th）、strengthen←strong A2（-en）、
 *   stretchy←stretch B1（-y，条 4b）、striker←strike B2（-er，brief 根，判断项：人物/部件义引申）、
 *   striking←strike B2（-ing，brief 根）、strongbox←strong A2（复合词 §5.3）、
 *   stronghold←strong A2（复合词 §5.3）、stuffing←stuff B1（-ing，brief 根）、
 *   stunned←stun C1（-ed，brief 根）、stunner←stun C1（-er，brief 根，判断项：词义引申）、
 *   stunning←stun C1（-ing，brief 根）、stylish←style A2（-ish，先例 childish、bookish 同后缀继承）、
 *   submission←submit B2（-ssion，t→ss 音变，先例 emission←emit 的 -ssion，判断项：音变后缀）。
 * 留空 10 单词：stow（-ow 不在 §5.4 清单）、straggle（-aggle 不在清单）、strew（-ew 不在清单）、
 *   strife（与 strive 仅词首共享、f/v 音变非透明派生，判断项）、stub（与 stump 非词首全段共享，判断项）、
 *   stunt（与 stun 形近但语义不直连，切词假象，判断项）、stutter（utter/butter 形近但语义不直连，判断项）、
 *   sub（submarine/substitute 缩略形式，规范无缩略继承路径，判断项）、
 *   subdue（sub+due 切词假象，判断项）、subjugate（库内无可见语义词根，判断项）。
 * 留空 3 短语（规范 §6，一律 '' 且标 .phrase = true）：stretch out、strike back、subject matter。
 * CEFR 分布（28 单词）：A1 × 1（streetcar），A2 × 8（storehouse、stormy、storyline、strength、
 *   strengthen、strongbox、stronghold、stylish），B1 × 2（stretchy、stuffing），
 *   B2 × 4（strainer、striker、striking、submission），C1 × 3（stunned、stunner、stunning），
 *   留空 × 10；3 短语一律 ''。
 * CET 分布：CET4 × 7 = stormy、strength、strengthen、striking、stuffing、stylish、submission；
 *   CET6 × 1 = stunning；本批无其他考试标签。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 * formsStr：动词 4 形以三单开头（strew 不规则按实际）；常规名词只写复数；
 *   不可数名词（strength、strife、stuffing）写 ''；形容词与短语一律 ''。
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s22.js 必须在 _cet_helper.js 之后加载');

  W('storehouse', 'noun', '/ˈstɔːhəʊs/', 'A2', [], '仓库；储藏室', 'A place where large quantities of goods are stored.', [
    ['仓库；货栈', 'A large building where goods, food or equipment are kept until they are needed.', '在需要之前存放货物、食品或设备的大型建筑物。', '可数；多指工业、农业或商业用的大型储藏建筑。', 'The grain was moved into a storehouse beside the railway.', '粮食被运进铁路旁的一座仓库。', ['a grain storehouse', 'a storehouse of goods'], ['warehouse'], 'noun', 'countable', '物流'],
  ], 'storehouses',['store'], 'brief 显示 ←?，自扫根 store A2（author_s4.js 第 4 参）——store 储藏 + house 房屋，复合词取首成分（§5.3），A2 继承；近义 warehouse 仓库（队列原样，置唯一义项恰好一次）');

  W('stormy', 'adjective', '/ˈstɔːmi/', 'A2', ['CET4'], '有暴风雨的；（脾气）暴躁的', 'Full of storms, or angry and full of argument.', [
    ['暴风雨的；暴风雪的', 'Having strong winds, heavy rain or snow and rough weather.', '有大风、大雨或大雪、天气恶劣的。', '形容词，修饰 weather、night、sea 等，常见 stormy weather。', 'The boat waited in the harbour for the stormy night to pass.', '船在港口等待这一暴风雨之夜过去。', ['stormy weather', 'a stormy night', 'stormy seas'], ['turbulent'], 'adjective', '定语/表语', '自然'],
    ['（争论）激烈的；（脾气）暴躁的', 'Angry, noisy and full of strong disagreement between people.', '愤怒喧闹、充满强烈分歧的。', '多形容争吵、关系与性情，是比喻用法。', 'The meeting grew stormy after the budget was cut.', '预算削减之后，会议变得剑拔弩张。', ['a stormy relationship', 'a stormy debate'], [], 'adjective', '定语/表语', '性格'],
  ], '', ['turbulent'], 'brief 显示 ←?，自扫根 storm A2（author_s4.js 第 4 参）——storm + -y（§5.4 条 4b 裁定可继，先例 rainy、cottony 均为 -y 形容词），A2 继承；家族/近义 turbulent 汹涌的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('storyline', 'noun', '/ˈstɔːrilaɪn/', 'A2', [], '故事线；情节脉络', 'The main line of events that makes up a story.', [
    ['故事线；情节主线', 'The connected series of events that makes up a story, film or play.', '构成小说、电影或戏剧的一系列相互关联的事件。', '可数；常与 main、whole 连用，也说 plot line。', 'The second film follows a different storyline.', '第二部电影沿用了一条不同的故事线。', ['the main storyline', 'a complicated storyline'], ['plot'], 'noun', 'countable', '文学'],
  ], 'storylines', ['plot'], 'brief 显示 ←?，自扫根 story A2（author_s4.js 第 4 参）——story + line，复合词取首成分（§5.3），A2 继承；家族/近义 plot 情节（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('stow', 'verb', '/stəʊ/', '', [], '装载；收放整齐', 'To put things away neatly in a tight space.', [
    ['装载；收放整齐', 'To put objects into a vehicle, ship or room and arrange them so that they fit safely.', '把物品放进车辆、船舱或房间并整理妥当，使其稳妥不晃。', '及物动词，常见 stow the gear、stow away（偷乘）。', 'The crew stowed the lifeboats below the deck.', '船员把救生艇收放在甲板下方。', ['stow the luggage', 'stow the gear', 'stow away'], ['hide'], 'verb', '及物', '物流'],
  ], 'stows~stowed~stowed~stowing', [], 'brief 显示 ←?，自扫库内无 stow 的在库词根（-ow 不在 §5.4 可继清单），留空；近义 hide 藏、收起（队列原样，置唯一义项恰好一次）');

  W('straggle', 'verb', '/ˈstræɡl/', '', [], '掉队；零散地延伸', 'To move slowly behind the group, or to spread out unevenly.', [
    ['掉队；落在后面', 'To walk or move slowly and fall behind the rest of a group.', '走得慢而落在同行者的后面。', '不及物动词，常与 behind、in、through 连用。', 'The last visitors straggled into the hall at noon.', '最后几位游客磨到中午才稀稀拉拉地走进大厅。', ['straggle behind', 'straggle in'], [], 'verb', '不及物', '交通'],
    ['零散地分布；蔓延', 'To spread out over a wide area in an untidy, uneven way.', '以不规整的方式散开、延伸到一大片区域。', '不及物动词，多指村落、植物或头发稀落分布。', 'Villages straggle along the valley road.', '村庄沿着山谷公路稀落地分布。', ['straggle along the road'], ['sprawl'], 'verb', '不及物', '地理'],
  ], 'straggles~straggled~straggled~straggling', [], 'brief 显示 ←?，自扫库内无 straggle 的在库词根（-aggle 不在 §5.4 可继清单），留空；近义 sprawl 散开、蔓延（队列原样，置义项 2 恰好一次）');

  W('strainer', 'noun', '/ˈstreɪnə/', 'B2', [], '过滤器；滤网', 'A tool with holes used to separate solids from liquid.', [
    ['滤器；滤网', 'A bowl-shaped kitchen tool with small holes that holds back solid pieces when liquid is poured through.', '带小孔的碗状厨房工具，倒液体时把固体留在里面。', '可数；常见 tea strainer、fine strainer。', 'Pour the stock through a strainer to remove the bones.', '把汤汁倒过滤网以滤去骨头。', ['a tea strainer', 'a fine strainer'], ['filter'], 'noun', 'countable', '饮食'],
  ], 'strainers',['strain'], 'brief 根提示 ←strain B2 过滤（自扫 author_s4.js 第 4 参复核为 B2，strain 词条含「过滤」义，语义直连）+ -er（§5.4 清单工具名词），B2 继承；近义 filter 过滤器（队列原样，置唯一义项恰好一次）');

  W('streetcar', 'noun', '/ˈstriːtkɑː/', 'A1', [], '有轨电车；街车', 'A tram that carries passengers through city streets.', [
    ['有轨电车；街车', 'An electric vehicle that carries passengers along rails set into a city street.', '沿城市街道中铺设的轨道行驶、运送乘客的电车。', '可数；美式英语常用 streetcar，英式多称 tram。', 'We crossed the city centre on an old streetcar.', '我们乘一辆老式有轨电车穿过市中心。', ['ride the streetcar', 'a streetcar route'], ['tram', 'trolley'], 'noun', 'countable', '交通'],
  ], 'streetcars', ['tram'], 'brief 显示 ←?，自扫根 street A1（author_s4.js 第 4 参）——street + car，复合词取首成分（§5.3），A1 继承（判断项：语义重心在 car，street 只表运行场所，直连性偏弱）；家族 tram 有轨电车，近义 tram、trolley 电车（队列原样，fam 入第 10 参，两近义置首义项各恰好一次）');

  W('strength', 'noun', '/streŋθ/', 'A2', ['CET4'], '力气；力量；强度', 'The quality of being strong in body, force or degree.', [
    ['体力；力气', 'The physical power that a person or animal has to do things.', '人或动物做事情所需要的身体力量。', '不可数，常见 build up strength、physical strength。', 'He did not have the strength to lift the crate.', '他没有力气抬起那只板条箱。', ['physical strength', 'build up strength'], ['muscle', 'vigor'], 'noun', 'uncountable', '健康'],
    ['力量；影响力', 'The power that a person, group or country has to affect other people and events.', '个人、团体或国家影响他人与事件的能力。', '不可数，常与 of 连用。', 'The strength of the argument convinced the committee.', '这番论证的力量说服了委员会。', ['strength of character', 'the strength of the union'], ['force', 'might', 'power'], 'noun', 'uncountable', '社会'],
    ['强度；浓度', 'How strong a feeling, a substance, a light or a wind is.', '某种感觉、物质、光线或风的强弱程度。', '常与 of 连用，用于可衡量的程度。', 'Check the strength of the solution before use.', '使用前检查该溶液的浓度。', ['the strength of the wind', 'the strength of the tea'], [], 'noun', 'uncountable', '科学'],
  ],'strengths', ['might', 'muscle'], 'brief 显示 ←?，自扫根 strong A2（author_s4.js 第 4 参）——strong + -th（§5.4 清单透明后缀，先例 growth←grow），A2 继承；家族 might 力量、muscle 力气（fam 入第 10 参），近义 muscle 力气、vigor 精力（置首义项）、force 力量、might 权势、power 影响力（置义项 2），均队列原样、各恰好一次');

  W('strengthen', 'verb', '/ˈstreŋθən/', 'A2', ['CET4'], '加强；增强', 'To make something stronger, or to become stronger.', [
    ['加强；增强', 'To make something such as a tie, a case or an organization stronger or more effective.', '使某种联系、论点或组织更强、更有效。', '及物动词，宾语常为 ties、economy、position。', 'The two firms agreed to strengthen their partnership.', '两家公司同意加强合作关系。', ['strengthen the economy', 'strengthen ties'], ['reinforce', 'fortify', 'enhance', 'cement'], 'verb', '及物', '商务'],
    ['巩固；稳固', 'To become more firmly established, or to make an arrangement more stable.', '变得更加稳固，或使某种安排更稳定。', '及物动词，也可不及物，如 the alliance strengthened。', 'The alliance was strengthened after the crisis.', '危机之后同盟得到了巩固。', ['strengthen an alliance', 'strengthen a bond'], ['consolidate'], 'verb', '及物', '社会'],
    ['（锻炼使肌肉）变结实', 'To make muscles firm and fit through exercise.', '通过锻炼让肌肉结实有型。', '及物动词，常见 strengthen the core、strengthen the legs。', 'This short routine strengthens the legs in ten minutes.', '这套短练习十分钟就能让腿部变结实。', ['strengthen the core'], ['tone'], 'verb', '及物', '体育'],
  ], 'strengthens~strengthened~strengthened~strengthening', ['bolster', 'consolidate', 'enhance', 'fortify', 'reinforce'], 'brief 显示 ←?，自扫根 strong A2（author_s4.js 第 4 参）——strong + -en（§5.4 清单透明后缀，先例 soften←soft），A2 继承；家族 bolster、consolidate、enhance、fortify、reinforce（fam 入第 10 参），近义 reinforce、fortify、enhance、cement 置首义项，consolidate 置义项 2，tone 置义项 3，均队列原样、各恰好一次');

  W('stretch out', 'verb', '/ˌstretʃ ˈaʊt/', '', [], '伸展；摊开', 'To straighten your body or make something longer by pulling.', [
    ['伸展（身体、手脚）', 'To lie down and straighten your body, or to reach out with your arms and legs.', '躺下把身体伸直，或把手脚伸展开。', '短语动词，多作不及物动词，作及物时后接身体部位。', 'She stretched out on the grass after the walk.', '散步之后她摊开手脚躺在草地上。', ['stretch out on the sofa', 'stretch out a leg'], ['extend'], 'verb', '不及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 extend 伸展、延伸（队列原样，置唯一义项恰好一次，短语条目）').phrase = true;

  W('stretchy', 'adjective', '/ˈstretʃi/', 'B1', [], '有弹性的；松紧的', 'Able to be stretched without breaking.', [
    ['有弹性的；伸缩性好的', 'Made of material that can be pulled and then goes back to its original shape.', '用可以拉伸又恢复原状的材料制成的。', '形容词，多修饰 fabric、tops、trousers 等衣物。', 'These stretchy jeans keep their shape after washing.', '这些有弹性的牛仔裤洗后仍不变形。', ['stretchy fabric', 'stretchy trousers'], ['elastic'], 'adjective', '定语/表语', '外貌'],
  ], '', ['elastic'], 'brief 显示 ←?，自扫根 stretch B1（author_s4.js 第 4 参）——stretch + -y（§5.4 条 4b：根词全段可见且语义直连，先例 rainy、cottony），B1 继承；家族/近义 elastic 有弹性的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('strew', 'verb', '/struː/', '', [], '撒；散布', 'To scatter things over a surface or an area.', [
    ['撒；散布', 'To throw or drop things in different directions so that they cover a surface.', '把东西朝不同方向丢撒，使其覆盖某个表面。', '及物动词，过去分词 strewn，常见 strewn with。', 'Dry leaves were strewn across the path.', '干树叶撒落在小径上。', ['strew flowers', 'strewn with leaves'], ['scatter'], 'verb', '及物', '家居'],
  ], 'strews~strewed~strewn~strewing', [], 'brief 显示 ←?，自扫库内无 strew 的在库词根（-ew 不在 §5.4 可继清单，异体 strow 亦不在库），留空；近义 scatter 撒开、散播（队列原样，置唯一义项恰好一次）');

  W('strife', 'noun', '/straɪf/', '', [], '冲突；争斗', 'Angry disagreement or fighting between people.', [
    ['冲突；争斗', 'Angry disagreement and fighting between people, groups or countries.', '个人、团体或国家之间愤怒的争执与斗争。', '不可数，常见 family strife、political strife。', 'Years of strife left the region poor and divided.', '长年的冲突使该地区贫穷而分裂。', ['family strife', 'political strife'], ['discord'], 'noun', 'uncountable', '社会'],
  ], '', [], 'brief 显示 ←?，自扫：库内 strive B2（author_s4.js）与 strife 仅词首共享，属 f/v 音变的非透明派生（-ife 不在 §5.4 清单，语义亦由「奋斗」引申），判断项，留空；近义 discord 不和、纷争（队列原样，置唯一义项恰好一次）');

  W('strike back', 'verb', '/ˌstraɪk ˈbæk/', '', [], '反击；还击', 'To hit or criticize someone who has attacked you.', [
    ['反击；还击', 'To attack or criticize someone who has attacked or criticized you first.', '对先动手或先批评你的人进行攻击或反击。', '短语动词，不及物，常与 at 连用。', 'The team struck back with two goals in the second half.', '球队在下半场连进两球反击成功。', ['strike back at', 'strike back hard'], ['retaliate'], 'verb', '不及物', '体育'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 retaliate 报复、还击（队列原样，置唯一义项恰好一次，短语条目）').phrase = true;

  W('striker', 'noun', '/ˈstraɪkə/', 'B2', [], '罢工者；前锋；击锤', 'A worker on strike, a forward in football, or a part that hits.', [
    ['罢工工人', 'A worker who refuses to work as part of a protest about pay or conditions.', '为抗议薪酬或工作条件而拒绝上班的工人。', '可数，常与 picket 搭配出现。', 'The strikers marched past the factory gates.', '罢工工人列队经过工厂大门。', ['striker fund', 'join the strikers'], [], 'noun', 'countable', '职业'],
    ['（足球）前锋', 'An attacking player whose main job is to score goals.', '主要任务是进球的进攻球员。', '可数，英式足球常用。', 'The striker missed an open goal in the final minute.', '这名前锋在最后一分钟错失了空门。', ['lead the line as striker'], ['forward'], 'noun', 'countable', '体育'],
    ['击锤；撞针', 'A part in a machine, lock or weapon that hits something to make it work.', '机器、锁具或武器中用来撞击以启动装置的零件。', '可数，技术名词。', 'The striker in the lock was jammed with dust.', '锁里的击件被灰尘卡住了。', ['a firing striker'], ['hammer'], 'noun', 'countable', '工具'],
  ], 'strikers',['strike'], 'brief 根提示 ←strike B2 打击（自扫 author_s4.js 第 4 参复核为 B2）+ -er（§5.4 清单 -er，人物与部件名词），B2 继承（判断项：-er 义由「打击者」引申为罢工者、前锋、击锤）；近义 forward 前锋（置义项 2）、hammer 击锤（置义项 3），队列原样、各恰好一次');

  W('striking', 'adjective', '/ˈstraɪkɪŋ/', 'B2', ['CET4'], '引人注目的；显著的', 'Very noticeable or attractive and easy to see.', [
    ['醒目的；引人注目的', 'Very noticeable or easy to see, often because it is unusual.', '非常显眼或容易注意到，常因不同寻常。', '形容词，修饰 difference、feature、similarity 等。', 'There is a striking difference between the two reports.', '两份报告之间有显著的差别。', ['a striking feature', 'a striking similarity'], ['conspicuous'], 'adjective', '定语/表语', '通用'],
    ['相貌出众的；俊美的', 'Attractive in a noticeable and impressive way, especially in looks.', '外表显眼而动人，尤指容貌。', '多作表语，修饰人或其五官。', 'She is a striking woman with red hair.', '她是一位红发的出众女士。', ['a striking appearance'], ['handsome'], 'adjective', '定语/表语', '外貌'],
    ['别致的；异域风情的', 'Unusual and attractive in style, often looking as if it came from another country.', '风格不寻常而吸引人，常带异国色彩。', '多修饰图案、设计与色彩。', 'The market sells striking prints from three continents.', '这家市场出售来自三大洲的别致印花布。', ['striking prints', 'striking colours'], ['exotic'], 'adjective', '定语', '艺术'],
  ], '', ['conspicuous'], 'brief 根提示 ←strike B2 打击（自扫 author_s4.js 第 4 参复核为 B2）+ -ing（§5.4 清单分词形容词，「抓住目光」语义直连），B2 继承；家族 conspicuous 显眼的（fam 入第 10 参），近义 conspicuous 置首义项、handsome 置义项 2、exotic 置义项 3，队列原样、各恰好一次');

  W('strongbox', 'noun', '/ˈstrɒŋbɒks/', 'A2', [], '保险箱；保险柜', 'A heavy locked box for keeping money and documents safe.', [
    ['保险箱；保险柜', 'A heavy metal box with a strong lock, used to keep money, jewels or documents safe.', '带牢固锁具的沉重金属箱，用来存放现金、珠宝或文件。', '可数；比 safe 更强调厚重。', 'The deeds were locked in a strongbox in the cellar.', '地契被锁在地下室的一只保险箱里。', ['an iron strongbox', 'a strongbox under the bed'], ['safe'], 'noun', 'countable', '金融'],
  ], 'strongboxes',['strong'], 'brief 显示 ←?，自扫根 strong A2（author_s4.js 第 4 参）——strong 结实 + box 箱子，复合词取首成分（§5.3），A2 继承；近义 safe 保险柜（队列原样，置唯一义项恰好一次）');

  W('stronghold', 'noun', '/ˈstrɒŋhəʊld/', 'A2', [], '要塞；据点', 'A strongly defended place, or a centre of support.', [
    ['要塞；堡垒', 'A place that is strongly defended and difficult for an enemy to capture.', '防守坚固、敌人难以攻占的地方。', '可数，多见于军事与历史语境。', 'The last stronghold fell after a long siege.', '最后一座要塞在长期围攻之后陷落。', ['a mountain stronghold'], ['fort'], 'noun', 'countable', '军事'],
    ['据点；大本营', 'An area where a particular group, party or belief has many supporters.', '某个团体、政党或信仰支持者集中的地区。', '可数，常与 of 连用，多用于政治与社会语境。', 'The port city is a stronghold of the opposition.', '这座港口城市是反对派的大本营。', ['a stronghold of support'], [], 'noun', 'countable', '政治'],
  ], 'strongholds', ['fort'], 'brief 显示 ←?，自扫根 strong A2（author_s4.js 第 4 参）——strong + hold 把守，复合词取首成分（§5.3），A2 继承；家族/近义 fort 堡垒（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('stub', 'noun/verb', '/stʌb/', '', [], '残根；存根；脚趾踢撞', 'A short leftover piece of something, or to hit a toe against a hard object.', [
    ['残根；残段', 'The short hard piece that is left of something after the rest has been used up.', '其余部分用掉之后剩下的短而硬的一截。', '可数，如 pencil stub 铅笔头、tree stub 树桩。', 'Only a stub of candle was left on the table.', '桌上只剩下一截蜡烛头。', ['a pencil stub', 'a tree stub'], ['stump'], 'noun', 'countable', '家居'],
    ['票根；存根', 'A small part of a ticket, cheque or document that is kept as a record.', '票据、支票或文件上留作记录的一小部分。', '可数，常见 parking stub、ticket stub。', 'Keep the stub until the warranty ends.', '保修期结束之前请保留票根。', ['ticket stub', 'keep the stub'], [], 'noun', 'countable', '商务'],
    ['（脚趾）踢撞硬物', 'To hit the end of your toe painfully against something hard.', '脚趾端部撞到硬物而疼痛。', '及物动词，宾语是 toe，常见 stub your toe。', 'He stubbed his toe on the door frame in the dark.', '他在黑暗中把脚趾踢到了门框上。', ['stub your toe'], [], 'verb', '及物', '健康'],
  ], 'stubs~stubbed~stubbed~stubbing', ['stump'], 'brief 显示 ←?，自扫：库内 stump C1（author_s4.js）与 stub 仅共享 stu、词尾不同，非词首全段共享（§5.6 不成立，-ub 不在 §5.4 清单），判断项，留空；家族/近义 stump 残干、树桩（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('stuffing', 'noun', '/ˈstʌfɪŋ/', 'B1', ['CET4'], '填料；酿馅', 'Material used to fill something, or a mixture cooked inside food.', [
    ['填充材料；填塞物', 'Material put inside a cushion, toy, pillow or piece of furniture to make it soft and full.', '放进垫子、玩具、枕头或家具里使其柔软饱满的材料。', '不可数，也指拆开后取出的填料。', 'The old chair lost its stuffing and went flat.', '这把旧椅子的填料塌了，坐下去扁扁的。', ['foam stuffing', 'replace the stuffing'], [], 'noun', 'uncountable', '家居'],
    ['（禽类、蔬菜的）填馅料', 'A mixture of bread, herbs and other food put inside a bird or vegetable before cooking.', '塞进禽类或蔬菜里一起烹饪的面包、香草等混合物。', '不可数，英式也说 dressing。', 'She served the chicken with a stuffing of onion and bread.', '她端上了配洋葱面包填馅的鸡。', ['a bread stuffing', 'stuffing mixture'], ['dressing'], 'noun', 'uncountable', '饮食'],
  ], '',['stuff'], 'brief 根提示 ←stuff B1 东西、填塞（自扫 author_s4.js 第 4 参复核为 B1）+ -ing（动名词转名词，§5.4 清单），B1 继承；近义 dressing 填馅料（队列原样，置义项 2 恰好一次）');

  W('stunned', 'adjective', '/stʌnd/', 'C1', [], '震惊的；被打昏的', 'So shocked or hit that you cannot think or move normally.', [
    ['震惊的；目瞪口呆的', 'So surprised or shocked that you cannot think clearly or react at once.', '因极度惊讶而无法清晰思考或立即反应。', '分词形容词，多作表语，常与 by、at 连用。', 'The team was stunned by the sudden defeat.', '全队被这突如其来的失败惊呆了。', ['stunned by the news', 'a stunned silence'], ['numb'], 'adjective', '表语', '情感'],
    ['被打得失去知觉的', 'Unconscious for a short time after a blow to the head.', '头部受击后短暂失去知觉。', '分词形容词，新闻与医学语境常见。', 'The player lay stunned on the grass after the tackle.', '那名球员被铲倒后躺在草地上失去知觉。', ['lie stunned', 'stunned for a moment'], [], 'adjective', '表语', '健康'],
  ], '',['stun'], 'brief 根提示 ←stun C1 使震惊（自扫 author_s4.js 第 4 参复核为 C1）+ -ed（§5.4 清单分词形容词），C1 继承；近义 numb 麻木的（队列原样，置首义项恰好一次）');

  W('stunner', 'noun', '/ˈstʌnə/', 'C1', [], '极美的人；令人惊叹的事物', 'A person or thing that is extremely beautiful or impressive.', [
    ['极漂亮的人', 'A person who is extremely beautiful or attractive.', '极其美丽动人的人。', '可数，非正式用语，含强烈赞美。', 'The bride was a stunner in the old photographs.', '老照片里的新娘美极了。', ['a real stunner'], ['beauty'], 'noun', 'countable', '外貌'],
    ['令人惊叹的事物', 'Something that is very impressive or causes great surprise.', '非常令人赞叹或引起巨大惊讶的事物。', '可数，非正式用语。', 'Their latest release is a stunner of an album.', '他们最新的专辑令人惊叹。', ['a stunner of a performance'], [], 'noun', 'countable', '娱乐'],
  ], 'stunners',['stun'], 'brief 根提示 ←stun C1 + -er（§5.4 清单名词后缀），C1 继承（判断项：-er 名词义由「击昏者」引申为「极美者」的口语用法）；近义 beauty 美人（队列原样，置首义项恰好一次）');

  W('stunning', 'adjective', '/ˈstʌnɪŋ/', 'C1', ['CET6'], '极美的；令人震惊的', 'Extremely beautiful or surprisingly impressive.', [
    ['极美的；惊艳的', 'Extremely beautiful or attractive, making you stop and admire.', '极其美丽动人，令人驻足欣赏。', '分词形容词，语义已形容词化，可作定语与表语。', 'The hall looks stunning at this time of day.', '一天中的这个时候，大厅美极了。', ['stunning views', 'a stunning dress'], ['gorgeous'], 'adjective', '定语/表语', '外貌'],
    ['令人震惊的', 'Very surprising, unexpected or hard to believe.', '非常意外、出乎意料或令人难以置信的。', '多修饰 news、result、defeat 等。', 'The decision came as a stunning blow to local families.', '这一决定对当地家庭是沉重的打击。', ['a stunning result', 'stunning news'], [], 'adjective', '定语/表语', '社会'],
  ], '',['stun'], 'brief 根提示 ←stun C1 使震惊（自扫 author_s4.js 第 4 参复核为 C1）+ -ing（§5.4 清单分词形容词），C1 继承；近义 gorgeous 绝色的（队列原样，置首义项恰好一次）');

  W('stunt', 'noun/verb', '/stʌnt/', '', [], '特技；绝技；阻碍生长', 'A brave difficult act done to impress, or to stop something growing.', [
    ['特技；绝技', 'A difficult, impressive action done to surprise an audience, often involving danger.', '为让观众惊叹而完成的高难度惊险动作。', '可数，常见 action stunt、stunt double。', 'The actor did the driving stunt himself.', '这个驾车特技动作是演员亲自完成的。', ['an action stunt', 'stunt double'], ['feat'], 'noun', 'countable', '娱乐'],
    ['阻碍生长；抑制发展', 'To prevent something from growing or developing as it should.', '阻碍某物按应有的方式生长或发展。', '及物动词，主语常为 lack、poor diet 等。', 'Poor nutrition can stunt growth in children.', '营养不良会阻碍儿童生长。', ['stunt growth', 'stunted development'], [], 'verb', '及物', '健康'],
  ], 'stunts~stunted~stunted~stunting', ['feat'], 'brief 显示 ←?，自扫：stunt 与库内 stun C1 形近但语义不直连（stunt 指特技、阻碍生长，非「击昏」），切词假象，判断项，留空；家族/近义 feat 壮举、绝技（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('stutter', 'verb/noun', '/ˈstʌtə/', '', [], '结结巴巴地说；口吃', 'To speak with sudden pauses and repeated sounds, or this way of speaking.', [
    ['结结巴巴地说', 'To speak with sudden pauses and repeated sounds, especially when nervous or afraid.', '说话时突然停顿并重复音节，尤因紧张或害怕。', '可作不及物与及物动词，也说 stammer。', 'He stuttered through the whole speech.', '他整场演讲都结结巴巴。', ['stutter through the speech', 'stutter nervously'], ['stammer'], 'verb', '不及物', '口语'],
    ['口吃；结巴的说话方式', 'A speech habit in which sounds and syllables are repeated without control.', '无法控制地重复音节的一种说话习惯。', '可数或不可数，医学上称 stuttering。', 'The child grew out of the stutter in a few years.', '这个孩子的口吃几年后自然好了。', ['have a stutter', 'a bad stutter'], [], 'noun', 'uncountable', '健康'],
  ], 'stutters~stuttered~stuttered~stuttering', ['stammer'], 'brief 显示 ←?，自扫：库内 utter B2、butter A1 与 stutter 仅词尾形近，语义不直连（拟声重叠造词），切词假象，判断项，留空；家族/近义 stammer 结巴、口吃（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('stylish', 'adjective', '/ˈstaɪlɪʃ/', 'A2', ['CET4'], '时髦的；雅致的', 'Fashionable and attractive in design or appearance.', [
    ['时髦的；时尚的', 'Following what is currently fashionable in clothes, cars or design.', '在服装、汽车或设计上符合当下潮流的。', '形容词，可作定语与表语，常说 stylish clothes。', 'She keeps a stylish wardrobe on a small budget.', '她用不多的预算维持着一个时髦的衣柜。', ['stylish clothes', 'a stylish design'], ['smart'], 'adjective', '定语/表语', '外貌'],
    ['优雅的；有格调的', 'Graceful and well designed, showing good taste.', '优美而设计精良，体现出良好品味。', '多形容建筑、家具与布置，比 fashionable 更强调品位。', 'The restaurant serves good food in stylish surroundings.', '这家餐厅在雅致的环境里供应可口的食物。', ['stylish interior', 'stylish and practical'], ['sophisticated'], 'adjective', '定语/表语', '艺术'],
  ], '',['style'], 'brief 显示 ←?，自扫根 style A2（author_s4.js 第 4 参）——style 风格 + -ish（似……的，先例 childish、bookish 同后缀继承），A2 继承；近义 smart 时髦的（置首义项）、sophisticated 精致考究的（置义项 2），队列原样、各恰好一次');

  W('sub', 'noun', '/sʌb/', '', [], '潜艇；替补队员；长条三明治', 'An informal word for a submarine, a substitute player or a long sandwich.', [
    ['潜艇', 'An informal short word for a submarine, a boat that travels under the sea.', 'submarine 的非正式简称，即在水下航行的船。', '可数，军事与口语均常用。', 'The sub surfaced close to the enemy harbour.', '这艘潜艇在敌方港口附近浮出水面。', ['a nuclear sub', 'send the sub out'], ['submarine'], 'noun', 'countable', '军事'],
    ['替补队员', 'A player who replaces another player during a sports match.', '在比赛中替换其他上场球员的运动员。', '可数，英式足球常用。', 'The coach brought on a sub after sixty minutes.', '教练在六十分钟后换上一名替补。', ['bring on a sub'], [], 'noun', 'countable', '体育'],
    ['长条三明治', 'An informal word for a long bread roll cut open and filled with meat, cheese or salad.', '切开后夹入肉、奶酪或蔬菜的长条面包卷，非正式说法。', '可数，美式英语，也说 submarine sandwich。', 'We ordered a sub at the station.', '我们在车站买了一个长条三明治。', ['order a sub', 'a footlong sub'], [], 'noun', 'countable', '饮食'],
  ], 'subs', ['submarine'], 'brief 显示 ←?，自扫：sub 为 submarine、substitute 的缩略短形式，非 §5.4 后缀派生，规范亦无缩略形式取根路径，判断项，留空；家族/近义 submarine 潜艇（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('subdue', 'verb', '/səbˈdjuː/', '', [], '制服；控制；减弱', 'To bring under control by force, or to make something weaker.', [
    ['制服；平定', 'To bring a person, group or crowd under control by using force.', '用强力把个人、团体或人群置于控制之下。', '及物动词，正式用语，常见 subdue a rebellion。', 'Troops moved in to subdue the riot.', '军队出动平定了这场骚乱。', ['subdue a riot', 'subdue a rebellion'], [], 'verb', '及物', '军事'],
    ['驯服；使温顺', 'To make an animal or person quiet and easy to control.', '使动物或人安静下来、易于控制。', '及物动词，宾语多为 wild animal、horse。', 'The farmer learned to subdue the young horse.', '农夫学会了驯服这匹小马。', ['subdue a horse'], ['tame'], 'verb', '及物', '自然'],
    ['减弱；抑制（光、声、情绪）', 'To make a light, a sound or a feeling less strong.', '使光线、声音或情绪变得不那么强烈。', '及物动词，常修饰 light、colour、appetite。', 'The room uses soft colours to subdue the glare.', '这个房间用柔和的颜色减弱刺眼的光。', ['subdue the light', 'subdue a feeling'], [], 'verb', '及物', '艺术'],
  ], 'subdues~subdued~subdued~subduing', [], 'brief 显示 ←?，自扫：subdue 与库内 due B1（author_d2.js）形近（sub + due）但语义不直连（源自拉丁 succedere），切词假象，判断项，留空；近义 tame 驯服（队列原样，置义项 2 恰好一次）');

  W('subject matter', 'noun', '/ˈsʌbdʒɪkt ˌmætə/', '', [], '主题；题材；内容', 'The thing that a book, talk or work of art is about.', [
    ['主题；题材；内容', 'The topic, idea or content that a book, lecture, discussion or piece of work deals with.', '书籍、讲座、讨论或作品所涉及的话题、观念或内容。', '不可数名词短语，正式用语，常说 the subject matter of。', 'The lecture moved on to more difficult subject matter.', '讲座接着进入了更难的内容。', ['the subject matter of', 'sensitive subject matter'], ['content'], 'noun', 'uncountable', '书面'],
  ], '', ['content'], '短语整体不取成分作根，分级留空（规范 §6）；家族/近义 content 内容（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次，短语条目）').phrase = true;

  W('subjugate', 'verb', '/ˈsʌbdʒʊɡeɪt/', '', [], '征服；使屈服；压迫', 'To bring a country or people completely under control, or to treat them cruelly.', [
    ['征服；使屈服', 'To bring a country, group or person completely under control by force.', '用武力把国家、团体或个人完全置于控制之下。', '及物动词，正式用语，宾语常为 nation、people。', 'The empire sought to subjugate its neighbours.', '这个帝国企图征服它的邻国。', ['subjugate a people'], [], 'verb', '及物', '历史'],
    ['压迫；压制', 'To treat a group of people so cruelly that they have no freedom.', '残酷地对待某一群体，使他们毫无自由。', '及物动词，宾语多为 women、population。', 'The regime subjugated the press for decades.', '该政权压制新闻界数十年之久。', ['subjugate the population'], ['oppress'], 'verb', '及物', '政治'],
  ], 'subjugates~subjugated~subjugated~subjugating', [], 'brief 显示 ←?，自扫：库内无语义直连词根（sub + jugate 不成词；-ate 虽有 commentate 等先例，但须有可见词根），判断项，留空；近义 oppress 压迫（队列原样，置义项 2 恰好一次）');

  W('submission', 'noun', '/səbˈmɪʃn/', 'B2', ['CET4'], '提交；屈服；呈递的材料', 'The act of handing something in, or of giving in to someone more powerful.', [
    ['提交；呈递', 'The act of formally giving a document, plan or application to a person or body for consideration.', '把文件、计划或申请正式交给某人或某机构以供审议的行为。', '不可数，常见 submit a document 与 make a submission 对应。', 'The deadline for submission of entries is Friday.', '参赛作品提交的截止时间是星期五。', ['make a submission', 'submission deadline'], [], 'noun', 'uncountable', '商务'],
    ['屈服；臣服', 'The act of accepting the power of someone stronger without resisting.', '不加抵抗地接受更强者统治的行为。', '不可数，常与 to 连用，语气正式。', 'The general demanded submission from the city.', '将军要求这座城市投降。', ['demand submission', 'submission to'], ['surrender'], 'noun', 'uncountable', '军事'],
    ['提交的材料；提案', 'A document, piece of work or proposal that is formally handed in.', '正式递交的文件、作品或提案。', '可数，学术与出版语境常见。', 'Her submission included photographs and field notes.', '她提交的材料包括照片和田野笔记。', ['send in a submission'], [], 'noun', 'countable', '出版'],
  ], 'submissions',['submit'], 'brief 显示 ←?，自扫根 submit B2（author_s4.js 第 4 参）——submit + -ssion（t→ss 音变，同 emission←emit 的 -ssion 先例 author_e3.js:210），B2 继承（判断项：音变后缀）；近义 surrender 投降、屈服（队列原样，置义项 2 恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
