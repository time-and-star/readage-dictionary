/* data/words/cet/author_s25.js — 常用词 S 批次 25，缺口 swiftness ~ systems，共 17 条
 * （17 单词 + 0 短语，本批无短语，故全文件不含短语标记）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_s25.txt，widx 373-389，无残缺词头）。
 * CET 标签照抄队列：CET4 × 1（sympathetic）、CET6 × 1（synthetic），其余 15 条 []。
 * brief：%TEMP%\opencode\_s25_brief.txt 共 17 行，与本批 17 个单词一一对应（首行 swiftness、末行 systems）；
 *   2 行给出根提示（swift B2、system A2），15 行显示 ←?，一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf 定位 W(' 词头行取第 4 参，扫 assets/js/data/words/cet/author_*.js，未 require 全库；
 *   curated.js 37 条键名与 adapt.js 的 adapt 均已核对，均不含本批词与其根）。
 * 扫根结论（自扫，均 author_s4.js 第 4 参）：symbol B1、sympathy B2、synthesis C1；
 *   brief 根提示复核通过（自扫同级）：swift B2（author_s4.js）、system A2（author_s4.js）。
 * · 透明/判断项继承（8 条）：
 *   swiftness←swift B2 + -ness（-ness 在 §5.4 清单）；
 *   symbolic←symbol B1 + -ic（判断项：-ic 不在 §5.4 明示清单，同 author_d4.js diplomat、
 *     author_m4.js magnet 的 + -ic 先例）；
 *   symbolize←symbol B1 + -ize（判断项：同 author_c13.js customizes、author_s18.js specializes 先例）；
 *   sympathetic←sympathy B2 + -etic（y→etic，同 author_e4.js energetic←energy A2 先例，判断项）；
 *   sympathise←sympathy B2 + -ise（判断项：同 author_s20.js stabilises←stable B2、
 *     author_l4.js liberalises←liberal B2 先例）；
 *   sympathize←sympathy B2 + -ize（判断项：同 author_s20.js stabilizes←stable B2 先例）；
 *   synthetic←synthesis C1 + -tic（-sis→-tic 词干变化，同 author_o5.js optimistic←optimism B2、
 *     author_e3.js emphasizes←emphasis B1 先例，判断项）；
 *   systems←system A2 + -s（复数形式单列词条，判断项：按库内 sales←sale A2、slacks←slack C1 先例）。
 * · 库内无在库词根、留空（9 条）：swindle、swindler（根词 swindle 自扫不在库，-er 无根可继）、
 *   swine、swoon、swoop、swot、syllabus、syntax、syringe
 *   （-dle/-ine/-oon/-oop/-ot/-bus/-tax/-ringe 均不在 §5.4 清单；swot、syntax 另属切词假象，§5.7）。
 * 共 8 条继承、9 条留空；短语 0 条。
 * CEFR 分布（17 单词）：A2 × 1（systems）、B1 × 2（symbolic、symbolize）、
 *   B2 × 4（swiftness、sympathetic、sympathise、sympathize）、C1 × 1（synthetic）、留空 × 9。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s25.js 必须在 _cet_helper.js 之后加载');

  W('swiftness', 'noun', '/ˈswɪftnəs/', 'B2', [], '迅速；动作快捷', 'The quality of being very quick in movement or action.', [
    ['迅速；快捷', 'The quality of doing things or moving with great speed.', '做事情或移动时速度极快的特性。', '不可数，常与 of 连用，多见于书面语。', 'The swiftness of the reply kept the problem small.', '回复之快使问题没有扩大。', ['the swiftness of response', 'with swiftness'], ['speed', 'velocity'], 'noun', 'uncountable', '通用'],
  ], '',['swift'], 'brief 根提示 ←swift B2 迅速的（自扫 author_s4.js 第 4 参复核为 B2）+ -ness（透明后缀，-ness 在 §5.4 清单），B2 继承；抽象不可数故 forms 留空；近义 speed 速度、velocity 速率（队列原样，置唯一义项各恰好一次）');

  W('swindle', 'verb/noun', '/ˈswɪndl/', '', [], '诈骗；骗取', 'To get money by a dishonest trick.', [
    ['诈骗；骗取', 'To get money, property or information from someone by making that person believe something untrue.', '让对方相信不实之事，从而获取其金钱、财物或信息。', '及物动词，常与 out of 连用，宾语是钱或财物。', 'He swindled the company out of a huge sum.', '他从公司骗取了一大笔钱。', ['swindle sb out of money'], ['cheat', 'fraud'], 'verb', '及物', '法律'],
    ['诈骗行为；骗局', 'A clever dishonest plan that tricks people out of their money.', '骗取他人钱财的狡猾骗局。', '可数，书面与口语均可见。', 'The investment turned out to be an elaborate swindle.', '这项投资原来是一个精心设计的骗局。', ['a plain swindle'], [], 'noun', 'countable', '商务'],
  ], 'swindles~swindled~swindled~swindling', ['cheat'], 'brief ←?，自扫根：库内无 swindle 的在库词根（-dle 不在 §5.4 清单），留空；家族 cheat 欺诈，近义 cheat 骗取、fraud 诈骗（队列原样，fam 入第 10 参，syn 置首义项各恰好一次）');

  W('swindler', 'noun', '/ˈswɪndlə/', '', [], '诈骗犯；骗子', 'A person who takes money by dishonest tricks.', [
    ['诈骗犯；骗子', 'A person who uses clever false stories to take money from other people.', '用巧妙的虚假说辞骗取别人钱财的人。', '可数，含强烈的道德指责，常见于新闻报道。', 'The swindler targeted elderly residents across three cities.', '这名骗子把三个城市的老年居民当作了目标。', ['a notorious swindler'], ['shark'], 'noun', 'countable', '法律'],
  ], 'swindlers', ['shark'], 'brief ←?，自扫根：根词 swindle 自扫不在库，-er 虽在 §5.4 清单但无在库根可继，留空；家族/近义 shark 骗子、放高利贷者（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('swine', 'noun', '/swaɪn/', '', [], '猪；令人厌恶的人', 'A pig, or a person who behaves badly.', [
    ['猪（旧称或农场用语）', 'A pig, used mainly in old stories, place names and farming language.', '猪，主要用于旧时故事、地名与农业用语中。', '可数，单复数同形，现代英语更常说 pig。', 'A farmer kept a group of swine behind the barn.', '一位农场主在谷仓后面养了一群猪。', ['a herd of swine'], ['pig'], 'noun', 'countable', '农业'],
    ['令人厌恶的人；猪猡', 'A person who behaves in a very unpleasant or cruel way.', '行为非常讨厌或残忍的人。', '可数，粗俗骂人语，正式场合避免使用。', 'He called the man a swine for laughing at the accident.', '他骂那个人是猪猡，竟对着事故发笑。', ['you swine'], [], 'noun', 'countable', '口语'],
  ],'swine', ['pig'], 'brief ←?，自扫根：库内无 swine 的在库词根（-ine 不在 §5.4 清单），留空；单复数同形故 forms 留空；家族/近义 pig 猪（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('swoon', 'noun/verb', '/suːn/', '', [], '昏厥；（因着迷而）陶醉', 'A short loss of consciousness, or a state of great delight.', [
    ['昏厥；晕倒', 'A temporary loss of consciousness caused by heat, strong feeling or illness.', '因炎热、强烈情绪或疾病引起的短暂失去知觉。', '可数，多见于文学与新闻报道。', 'She went into a swoon after hearing the sudden news.', '听到这个突如其来的消息后她昏了过去。', ['fall into a swoon'], ['faint'], 'noun', 'countable', '健康'],
    ['（因着迷而）陶醉', 'A state of being overcome with pleasure or admiration.', '因极度愉悦或仰慕而不能自持的状态。', '不可数，常与 with 连用，带夸张色彩。', 'The audience was in a swoon after the final song.', '最后一首歌之后，全场观众陶醉其中。', ['swoon with pleasure'], [], 'noun', 'uncountable', '情感'],
    ['昏厥；晕倒', 'To fall into a state of unconsciousness for a short time.', '短暂地失去知觉而倒下。', '不及物动词，主语多为人，文学色彩较浓。', 'The heroine swooned into the arms of her companion.', '女主人公昏倒在同伴的怀里。', ['swoon from shock'], [], 'verb', '不及物', '健康'],
  ], 'swoons~swooned~swooned~swooning', [], 'brief ←?，自扫根：库内无 swoon 的在库词根（-oon 不在 §5.4 清单），留空；近义 faint 昏厥（队列原样，置首义项恰好一次）');

  W('swoop', 'noun/verb', '/suːp/', '', [], '俯冲；突袭', 'A sudden drop through the air, or a sudden attack.', [
    ['（猛禽的）俯冲', 'A sudden downward movement that a bird makes through the air to catch its prey.', '鸟为捕捉猎物而在空中突然下坠的动作。', '可数，常与 at 连用。', 'The hawk made a fast swoop at the pigeon.', '老鹰朝着那只鸽子猛扑下去。', ['in one swoop'], ['raid'], 'noun', 'countable', '自然'],
    ['突然袭击；突击', 'A sudden unexpected attack made by police or soldiers.', '警察或士兵发起的出其不意的行动。', '可数，常与 on 连用。', 'Troops carried out a swoop on the depot at dawn.', '部队拂晓时对那座仓库发动了突袭。', ['a police swoop'], [], 'noun', 'countable', '军事'],
    ['俯冲；扑下', 'To drop suddenly from the air, or to move very quickly to seize something.', '突然从空中下坠，或迅速移动过去抓住某物。', '不及物动词，常与 down、at、on 连用。', 'The owl swooped down on the mouse in the field.', '猫头鹰朝田野里的老鼠扑了下去。', ['swoop down on'], [], 'verb', '不及物', '自然'],
  ], 'swoops~swooped~swooped~swooping', [], 'brief ←?，自扫根：库内无 swoop 的在库词根（-oop 不在 §5.4 清单），留空；近义 raid 突袭（队列原样，置义项 2 恰好一次）');

  W('swot', 'noun/verb', '/swɒt/', '', [], '死读书的人；刻苦用功', 'A person who studies very hard, or to study in that way.', [
    ['死读书的人；用功的人', 'A person who spends nearly all their time studying, usually seen as dull.', '几乎把全部时间都花在学习上的人，常被认为很无趣。', '可数，英式非正式用语，多含贬义。', 'He was labelled a swot because he read every assignment.', '因为他每份作业都读，所以被叫作书呆子。', ['a swot at school'], [], 'noun', 'countable', '教育'],
    ['刻苦用功；临时抱佛脚', 'To study very hard, especially for a test over a short period.', '非常用功地学习，尤指在短时间内为考试突击。', '不及物动词，常与 for、up 连用，英式非正式用语。', 'She swotted for three days before the test.', '她在考试前苦读了三天。', ['swot up for a test'], ['cram'], 'verb', '不及物', '教育'],
  ], 'swots~swotted~swotted~swotting', [], 'brief ←?，自扫根：库内无 swot 的在库词根（-ot 不在 §5.4 清单；与 sweet 形近而语义不直连，属切词假象，规范 §5.7），留空；近义 cram 死记硬背式苦读（队列原样，置义项 2 恰好一次）');

  W('syllabus', 'noun', '/ˈsɪləbəs/', '', [], '教学大纲；课程纲要', 'A list of the subjects in a course of study.', [
    ['教学大纲；课程纲要', 'A list of the subjects included in a course, or of what students are expected to learn.', '一门课程所含的科目清单，或学生应学内容的清单。', '可数，常用复数 syllabuses。', 'The syllabus covers British literature after 1800.', '这份大纲涵盖 1800 年之后的英国文学。', ['course syllabus', 'follow the syllabus'], ['curriculum'], 'noun', 'countable', '教育'],
  ], 'syllabuses', ['curriculum'], 'brief ←?，自扫根：库内无 syllabus 的在库词根（-bus、-us 不在 §5.4 清单），留空；家族/近义 curriculum 课程体系（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('symbolic', 'adjective', '/sɪmˈbɒlɪk/', 'B1', [], '象征的；寓意的', 'Serving as a sign of a deeper idea or quality.', [
    ['象征的；标志性的', 'Serving as a sign of an idea, a quality or an organisation.', '作为某种观念、品质或组织的标志。', '定语表语两用，常与 of 连用。', 'The broken chain is symbolic of the friendship between the two towns.', '断链象征着两座城镇之间的友谊。', ['symbolic of freedom'], ['token'], 'adjective', '定语/表语', '文化'],
    ['寓意的；象征手法的', 'Having a meaning that points to a moral lesson or a wider message.', '含有指向道德教训或更深层信息的意义。', '多作定语，常见于文学与艺术分析。', 'The lion in the painting carries a symbolic meaning about courage.', '画中的狮子带有象征勇气的寓意。', ['symbolic meaning'], ['moral'], 'adjective', '定语', '文学'],
  ], '',['symbol'], 'brief ←?，自扫根 symbol B1 象征（author_s4.js 第 4 参）——symbol + -ic（形容词后缀，同 author_d4.js diplomat、author_m4.js magnet 的 + -ic 先例），B1 继承（判断项：-ic 不在 §5.4 明示清单）；近义 token 象征性的、moral 寓意的（队列原样，分置义项 1、2 各恰好一次）');

  W('symbolize', 'verb', '/ˈsɪmbəlaɪz/', 'B1', [], '象征；代表', 'To stand for an idea, quality or group by means of a sign.', [
    ['象征；代表', 'To be a sign of something such as an idea or a quality.', '作为某种观念或品质的标志。', '及物动词，宾语多为抽象事物，主语常是具体形象。', 'The statue symbolizes the courage of the sailors.', '这座雕像象征着水手们的勇气。', ['symbolize hope'], ['represent'], 'verb', '及物', '文化'],
  ], 'symbolizes~symbolized~symbolized~symbolizing',['represent', 'symbol'], 'brief ←?，自扫根 symbol B1 象征（author_s4.js 第 4 参）——symbol + -ize（透明动词后缀，同 author_c13.js customizes、author_s18.js specializes 先例），B1 继承（判断项：-ize 不在 §5.4 明示清单）；家族/近义 represent 表示、代表（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('sympathetic', 'adjective', '/ˌsɪmpəˈθetɪk/', 'B2', ['CET4'], '同情的；赞同的', 'Feeling or showing pity and support for other people.', [
    ['同情的；怜悯的', 'Showing that you feel sorry for someone who is sad or in difficulty.', '对处于悲伤或困境中的人表示难过与关心。', '定语表语两用，常与 towards、to 连用。', 'She was sympathetic when I told her about the delay.', '我把延误的情况告诉她时，她表示了同情。', ['be sympathetic towards'], ['sorry'], 'adjective', '定语/表语', '情感'],
    ['赞同的；支持的', 'Showing that you approve of a plan or an idea and are willing to back it.', '表明你认可某个计划或想法并愿意支持。', '表语为主，常与 to 连用，多见于正式语境。', 'The council was sympathetic to the plan for a local market.', '市政会对设立本地市场的计划持支持态度。', ['sympathetic to the plan'], [], 'adjective', '表语', '社会'],
  ], '',['sympathy'], 'brief ←?，自扫根 sympathy B2 同情（author_s4.js 第 4 参）——sympathy + -etic（y→etic，同 author_e4.js energetic←energy A2 先例），B2 继承（判断项：-etic 不在 §5.4 明示清单）；近义 sorry 难过、抱歉的（队列原样，置首义项恰好一次）；CET4 标签照抄队列');

  W('sympathise', 'verb', '/ˈsɪmpəθaɪz/', 'B2', [], '同情；赞同', 'To feel for someone who is unhappy, or to agree with an aim.', [
    ['同情；怜悯', 'To feel sorry for someone because of that person problems or unhappiness.', '因为别人的问题或不幸而为其感到难过。', '不及物动词，常与 with 连用，英式拼写。', 'Many people sympathise with the families who lost everything.', '许多人同情那些失去一切的家庭。', ['sympathise with the victims'], ['pity'], 'verb', '不及物', '情感'],
    ['赞同；有同感', 'To agree with the aims of an idea or a plan and support them.', '认同某个想法或计划的目标并予以支持。', '不及物动词，常与 with 连用。', 'The board sympathised with the aims of the campaign.', '董事会认同该运动的目标。', ['sympathise with the aim'], [], 'verb', '不及物', '社会'],
  ], 'sympathises~sympathised~sympathised~sympathising',['sympathy'], 'brief ←?，自扫根 sympathy B2 同情（author_s4.js 第 4 参）——sympathy + -ise（英式拼写，同 author_s20.js stabilises、author_l4.js liberalises 先例），B2 继承（判断项：-ise 不在 §5.4 明示清单）；近义 pity 怜悯（队列原样，置首义项恰好一次）');

  W('sympathize', 'verb', '/ˈsɪmpəθaɪz/', 'B2', [], '同情；认同；体谅', 'To feel for other people and to understand their position.', [
    ['同情；体谅', 'To feel sorry for someone because of that person trouble or unhappiness.', '因他人的苦恼或不幸而为其感到难过。', '不及物动词，常与 with 连用，美式拼写。', 'Readers sympathize with the family through the whole story.', '读者在整个故事中都同情这一家人。', ['sympathize with the family'], [], 'verb', '不及物', '情感'],
    ['认同；赞同', 'To understand and share the reasons why someone holds a particular view.', '理解并认同他人持有某种观点的理由。', '不及物动词，常与 with 连用。', 'I sympathize with your wish to finish the work early.', '我认同你想早点完成工作的愿望。', ['sympathize with a view'], ['identify'], 'verb', '不及物', '心理'],
    ['体谅；谅解', 'To show understanding of another person position without blaming that person.', '对别人的处境表示理解而不加责备。', '不及物动词，常与 with 连用，宾语常是人。', 'She sympathized with the young driver who made the mistake.', '她体谅那位犯了错的年轻司机。', ['sympathize with your position'], ['understand'], 'verb', '不及物', '性格'],
  ], 'sympathizes~sympathized~sympathized~sympathizing',['sympathy'], 'brief ←?，自扫根 sympathy B2 同情（author_s4.js 第 4 参）——sympathy + -ize（透明动词后缀，同 author_s20.js stabilizes、author_s18.js specializes 先例），B2 继承（判断项：-ize 不在 §5.4 明示清单）；近义 identify 认同、understand 理解（队列原样，分置义项 2、3 各恰好一次）');

  W('syntax', 'noun', '/ˈsɪntæks/', '', [], '句法；语法规则', 'The rules that control how words or symbols are arranged.', [
    ['（语言的）句法；句法规则', 'The rules about word order and sentence structure in a language.', '一门语言中词序与句子结构的规则。', '不可数，语言学与语法用语。', 'Students often struggle with the syntax of formal essays.', '学生常为正式文章的句法感到吃力。', ['sentence syntax'], ['grammar'], 'noun', 'uncountable', '语法'],
    ['（代码或符号系统的）语法', 'The set of rules that decides how symbols or commands may be arranged in a system.', '决定符号或指令在系统中如何排列的一组规则。', '不可数，计算与逻辑语境。', 'The parser checks the syntax before it runs the code.', '解析器在运行代码前先检查语法。', ['syntax error'], [], 'noun', 'uncountable', '科学'],
  ],'syntaxes', ['grammar'], 'brief ←?，自扫根：库内无 syntax 的在库词根（-tax 不在 §5.4 清单；与 tax 形近而语义不直连，属切词假象，规范 §5.7），留空；两义项均不可数故 forms 留空；家族/近义 grammar 语法（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('synthetic', 'adjective', '/sɪnˈθetɪk/', 'C1', ['CET6'], '合成的；不真诚的', 'Made artificially rather than found in nature.', [
    ['合成的；人造的', 'Made by chemical processes from raw materials instead of being obtained from plants or animals.', '由化学方法从原料制成，而非取自植物或动物。', '定语表语两用，常形容材料、纤维、香料。', 'The jacket is made from a synthetic fabric.', '这件夹克由合成纤维制成。', ['synthetic fabric', 'synthetic materials'], ['plastic'], 'adjective', '定语/表语', '科学'],
    ['（感情或言行）不真诚的；假装的', 'Not sincere or genuine, but put on in order to impress other people.', '并不真诚，只是做出来打动别人的。', '多作定语，含贬义。', 'Her speech was full of synthetic enthusiasm.', '她的讲话充满了虚假的热情。', ['synthetic charm'], [], 'adjective', '定语', '性格'],
  ], '',['plastic', 'synthesis'], 'brief ←?，自扫根 synthesis C1 合成（author_s4.js 第 4 参）——synthesis + -tic（-sis→-tic 词干变化，同 author_o5.js optimistic←optimism B2、author_e3.js emphasizes←emphasis B1 先例），C1 继承（判断项：词干变化且 -tic 不在 §5.4 明示清单）；家族 plastic 塑料（仅入第 10 参），近义 plastic 塑料制的（队列原样，置首义项恰好一次）；CET6 标签照抄队列');

  W('syringe', 'noun/verb', '/səˈrɪndʒ/', '', [], '注射器；用注射器冲洗', 'A device for squirting liquid, or to clean with it.', [
    ['注射器；针筒', 'A device with a narrow tube or a needle used for putting liquid into the body or taking it out.', '带有细管或针头、用来把液体注入体内或从体内抽出的器械。', '可数，医学与护理用语。', 'The nurse used a new syringe for the injection.', '护士用一支新的注射器打针。', ['a syringe of saline'], ['needle'], 'noun', 'countable', '健康'],
    ['用注射器冲洗；注入', 'To clean a wound or a body cavity by squirting liquid into it with such a device.', '用这种器械把液体喷入伤口或体腔进行清洗。', '及物动词，医学护理用语。', 'The nurse syringed the wound before bandaging it.', '护士在包扎前用注射器冲洗了伤口。', ['syringe the wound'], [], 'verb', '及物', '健康'],
  ], 'syringes~syringed~syringed~syringing', [], 'brief ←?，自扫根：库内无 syringe 的在库词根（-ringe 不在 §5.4 清单），留空；近义 needle 针头（队列原样，置首义项恰好一次）');

  W('systems', 'noun', '/ˈsɪstəmz/', 'A2', [], '系统；体系（复数）', 'Sets of things or rules that work together as a whole.', [
    ['系统；体系（复数）', 'Sets of connected things or rules that work together as a whole.', '作为整体一起运作的、相互关联的一组事物或规则。', 'system 的复数形式单列词条；作主语时谓语用复数。', 'The new systems went live on Monday.', '新系统于周一上线运行。', ['computer systems', 'transport systems'], ['infrastructure'], 'noun', 'countable', '工业'],
  ], '',['system'], 'brief 根提示 ←system A2 系统（自扫 author_s4.js 第 4 参复核为 A2）+ -s（复数形式单列词条，forms 留空），A2 继承（判断项：-s 不在 §5.4 明示清单，按库内 sales←sale A2、slacks←slack C1 先例）；近义 infrastructure 基础设施（队列原样，置唯一义项恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
