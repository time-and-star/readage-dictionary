/* data/words/cet/author_t4.js — T 批次 4，缺口 the minority ~ threadbare，共 31 条
 * （19 单词 + 12 短语；短语清单：the minority、the next day、the past、the previous day、
 *   the public、the rest、the universe、the weekend、the young、these days、this day、this evening）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_t4.txt，widx 094-124，词头无残缺；brief 首行 theoretical、末行 threadbare）。
 * CET 标签照抄队列：CET4 × 3（theoretical、thinking、thoughtful），CET6 × 0，其余 28 条 []。
 * brief：%TEMP%\opencode\_t4_brief.txt 共 19 行，与本批 19 个单词一一对应；
 *   5 行给出根提示（thing A1、think A1 ×2、thorough B2 ×2），14 行显示 ←?，
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf("W('") 取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；curated.js/adapt.js 均不含本批词与其根）。
 * 扫根结论（自扫，第 4 参）：theory B1、therapy B2、thick A2、thief A2、thought A2、
 *   third A1、thirteen A1、thirty A1、thousand A1、thread B1（均 author_t1.js）、
 *   bare B2（author_b1.js）；thong、thou 库内无可继词根。
 * brief 根提示复核通过（自扫同级）：thing A1、think A1、thorough B2（均 author_t1.js）。
 * · 继承（16 条）：
 *   theoretical←theory B1 + -etic + -al（y→etic，同 energetic←energy A2、mythical←myth B2，判断项）；
 *   therapeutic←therapy B2 + -eutic（同 energetic←energy A2、sympathetic←sympathy B2 判断项）；
 *   thicket←thick A2 + -et（指小，同 hatchet←hatch B2，判断项）；
 *   thickset←thick A2（复合取首成分，判断项）、threadbare←thread B1（复合取首成分，判断项）；
 *   thieve←thief A2 + -ve（f→ve 正字交替，同 shelve←shelf A2、grieves←grief B2，判断项）；
 *   things←thing A1 + -s（复数单列，同 systems←system A2，判断项）；
 *   thinker←think A1 + -er、thinking←think A1 + -ing、thoroughly←thorough B2 + -ly、
 *   thoroughness←thorough B2 + -ness、thoughtful←thought A2 + -ful（-er/-ing/-ly/-ness/-ful 均在 §5.4 清单）；
 *   third-level←third A1（连字符复合取首成分，同 egg-shaped←egg A1，判断项）；
 *   thirteenth←thirteen A1 + -th、thirtieth←thirty A1 + -th、thousandth←thousand A1 + -th
 *   （数词条目按 §7 处理，先例 eighteenth←eighteen A1、eightieth←eighty A1、eleventh←eleven A1）。
 * · 留空（3 单词 + 12 短语）：therapeutics（多步派生，-s 学科后缀不在 §5.4，库内先例不一：
 *   athletics 取 athlete 的 B1、dietetics 明写留空，判断项）、thong（-ong 不在清单，与 long/song 切词假象）、
 *   thou（古英语代词，库内无词根，与 you 非兄弟派生）；12 条短语一律 §6 分级留空。
 * CEFR 分布（19 单词）：A1 × 7、A2 × 4、B1 × 2、B2 × 3、留空 × 3；短语 12 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t4.js 必须在 _cet_helper.js 之后加载');

  W('the minority', 'noun', '/ðə maɪˈnɒrəti/', '', [], '少数一方；占比较小的群体', 'The smaller of two groups that make up a whole.', [
    ['少数群体；少数派', 'The smaller number or proportion of people in a group, compared with the rest of that group.', '与该群体其余部分相比人数或占比较少的一部分。', '名词短语，常与 of 连用；作主语时谈整体用单数，谈成员可用复数。', 'The minority voted against the change.', '少数人投票反对这项改动。', ['in the minority', 'a minority of students'], ['few'], 'noun', 'countable', '社会'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 few 很少、少数（队列原样，置唯一义项恰好一次）').phrase = true;

  W('the next day', 'noun', '/ðə nekst deɪ/', '', [], '次日；翌日', 'The day after today when a story or plan is being told.', [
    ['第二天；转天', 'The day that comes immediately after today.', '紧跟在今天之后的那一天。', '名词短语，常作时间状语，也可作主语；多与叙事时态连用。', 'The next day they left for the coast.', '第二天他们就出发去了海边。', ['the very next day'], ['tomorrow'], 'noun', 'countable', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 tomorrow 明天（队列原样，置唯一义项恰好一次）').phrase = true;

  W('the past', 'noun', '/ðə pɑːst/', '', [], '过去；从前', 'What has already happened, and the years before the present.', [
    ['过去（的时间）', 'The time that has happened before now; all the time before the present.', '现在已经发生的一切时间，也就是现在之前的所有时间。', '不可数，常与 in、of 连用，也可转指个人的往事。', 'The city has changed a great deal in the past.', '这座城市在过去变化极大。', ['in the past', 'the recent past'], ['history', 'yesterday'], 'noun', 'uncountable', '历史'],
    ['往事；过去的生活', 'The events and experiences from earlier in life, especially before an important change.', '一个人早年经历过的事情，尤指重大改变之前的生活。', '不可数，常与 personal、dark、painful 等词连用。', 'She never talks about her past.', '她从不谈起自己的往事。', ['a painful past'], [], 'noun', 'uncountable', '心理'],
  ], '', ['history'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 history 历史（队列原样，入第 10 参），近义 history 历史与 yesterday 昨天（队列原样，置首义项各恰好一次）').phrase = true;

  W('the previous day', 'noun', '/ðə ˈpriːviəs deɪ/', '', [], '头一天；前一日', 'The day just before a particular day that is being discussed.', [
    ['前一天；上一日', 'The day immediately before the one that is being talked about.', '紧接着所谈那一天之前的一天。', '名词短语，常作时间状语，与 the following day 相对。', 'They arrived on the previous day.', '他们前一天就到了。', ['on the previous day'], ['yesterday'], 'noun', 'countable', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 yesterday 昨天（队列原样，置唯一义项恰好一次）').phrase = true;

  W('the public', 'noun', '/ðə ˈpʌblɪk/', '', [], '社会大众；特定受众', 'People in general, or the people who use or follow something.', [
    ['公众；大众', 'Ordinary people in society, considered as a whole group.', '被视为一个整体的普通社会成员。', '集合名词，常与 the 连用；谈全体时谓语用单数，谈成员时可用复数。', 'The public has a right to know the facts.', '公众有权知道事实。', ['in public', 'the general public'], ['society'], 'noun', 'uncountable', '社会'],
    ['（某类）公众；受众', 'A particular group of people who use a service, watch performances or read books.', '使用某项服务、观看演出或阅读书籍的特定群体。', '集合名词，常与 of 连用，如 the reading public。', 'The exhibition attracted a wider public.', '这场展览吸引了更广泛的受众。', ['the reading public'], [], 'noun', 'countable', '媒体'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 society 社会、公众（队列原样，置首义项恰好一次）').phrase = true;

  W('the rest', 'noun', '/ðə rest/', '', [], '剩余部分；其余的人和物', 'What remains of a group or an amount once part of it is gone.', [
    ['其余；剩下的人或事物', 'Everything or everybody that is left in a group after the others have been mentioned or removed.', '一组之中在其余部分被提到或去掉之后留下的全部人或事物。', '集合名词，作主语时所指为整体用单数，为个体用复数。', 'Some students stayed; the rest went home.', '一些学生留下，其余的都回家了。', ['the rest of the world'], ['other'], 'noun', 'uncountable', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 other 其他的、其余的（队列原样，置唯一义项恰好一次）').phrase = true;

  W('the universe', 'noun', '/ðə ˈjuːnɪvɜːs/', '', [], '整个宇宙；某人的世界', 'The whole of space and everything in it, or one person private world.', [
    ['宇宙；天地万物', 'Everything that exists in space, including the earth, the stars and the planets.', '太空中存在的一切，包括地球、恒星与行星。', '可数，常与 the 连用，谈总体时谓语用单数。', 'The universe is far larger than we can measure.', '宇宙远比我们所能测量的更大。', ['the universe around us'], ['space'], 'noun', 'countable', '科学'],
    ['（某人眼中的）世界；领域', 'The world of one person, or the particular area of life that person is involved in.', '某个人所处的世界，或其活动所涉及的特定生活领域。', '可数，常与 of 连用，带强调色彩。', 'Her universe now revolves around the studio.', '她的世界如今围绕着工作室转。', ['a whole universe'], [], 'noun', 'countable', '心理'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 space 太空（队列原样，置首义项恰好一次）').phrase = true;

  W('the weekend', 'noun', '/ðə ˌwiːkˈend/', '', [], '双休日；周六与周日两天', 'The weekly rest period that falls at the end of the working week.', [
    ['周末', 'Saturday and Sunday, the part of the week when most people do not work.', '一周中多数人不上班的周六与周日。', '可数；英式说 at the weekend，美式说 on the weekend。', 'We are driving to the coast at the weekend.', '我们周末要开车去海边。', ['at the weekend', 'a long weekend'], ['Sunday'], 'noun', 'countable', '社会'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 Sunday 星期日（队列原样，置唯一义项恰好一次）').phrase = true;

  W('the young', 'noun', '/ðə jʌŋ/', '', [], '全体年轻人；青年群体', 'Those who are still in the early part of life, taken together.', [
    ['年轻人；青年一代', 'Young people considered as a group.', '被看作一个整体的年轻人们。', '集合名词，与 the 连用，作主语时谓语常用复数。', 'The young need opportunities to learn new skills.', '年轻人需要学习新技能的机会。', ['care for the young'], ['youth'], 'noun', 'uncountable', '社会'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 youth 青年、年轻人（队列原样，置唯一义项恰好一次）').phrase = true;

  W('theoretical', 'adjective', '/ˌθɪərəˈretɪkəl/', 'B1', ['CET4'], '理论上的；非实践的', 'Connected with the ideas and rules of a subject rather than with using them.', [
    ['理论上的；理论层面的', 'Concerned with the principles of a subject and how they relate to each other, rather than with putting them into practice.', '关注一门学科的原理及其相互关系，而不是把它们付诸实践。', '定语表语两用，常与 practical 相对。', 'The plan is sound in theoretical terms.', '这个计划在理论上是站得住的。', ['theoretical physics', 'a theoretical basis'], ['abstract'], 'adjective', '定语/表语', '科学'],
    ['纯理论的；只在理论上成立的', 'Existing as a principle or a possibility only, without ever being put into practice.', '只作为原理或可能性存在，从未在实践中兑现。', '多作定语，强调未经实践检验或未必发生。', 'The obstacle is a purely theoretical one.', '这个障碍纯属理论上的。', ['a theoretical possibility', 'purely theoretical'], ['academic', 'pure'], 'adjective', '定语', '教育'],
  ], '',['theory'], 'brief ←?，按 §5.2 自扫根 theory B1 理论（author_t1.js 第 4 参）——theory 去 y 加 -etic + -al（y→etic 正字变化，同 author_e4.js energetic←energy A2、author_m10.js mythical←myth B2 先例），B1 继承（判断项：-etic/-al 组合不在 §5.4 明示清单）；近义 abstract 抽象的（置义项 1）、academic 学术的与 pure 纯理论的（置义项 2），均队列原样、各恰好一次；CET4 标签照抄队列');

  W('therapeutic', 'adjective', '/ˌθerəˈpjuːtɪk/', 'B2', [], '治疗的；有益身心的', 'Having to do with the treatment of illness, or bringing a calming benefit.', [
    ['治疗的；有疗效的', 'Helping to cure an illness or improve a health condition.', '有助于治愈疾病或改善健康状况的。', '定语表语两用，常指疗法、功效。', 'Massage has a therapeutic effect on tired muscles.', '按摩对疲劳的肌肉有治疗作用。', ['therapeutic massage', 'therapeutic value'], ['medical'], 'adjective', '定语/表语', '健康'],
    ['有益于身心的', 'Making you feel calmer or happier after a difficult experience.', '让人在艰难经历之后感到更平静或更愉快的。', '多作表语，用于非医疗语境。', 'She found gardening deeply therapeutic.', '她发现园艺对身心大有裨益。', ['therapeutic for the mind'], [], 'adjective', '表语', '心理'],
  ], '',['therapy'], 'brief ←?，按 §5.2 自扫根 therapy B2 治疗（author_t1.js 第 4 参）——therapy 去 y 加 -eutic（y→eutic，同 author_e4.js energetic←energy A2、author_s25.js sympathetic←sympathy B2 先例），B2 继承（判断项：-eutic 不在 §5.4 明示清单）；近义 medical 医疗的（队列原样，置首义项恰好一次）');

  W('therapeutics', 'noun', '/ˌθerəˈpjuːtɪks/', '', [], '治疗学；治疗方法', 'The branch of medicine that plans and gives treatment.', [
    ['治疗学；疗法总称', 'The part of medicine that deals with the treatment and care of patients.', '医学中处理病人治疗与护理的部分。', '不可数，作学科名时谓语多用单数。', 'She specialises in the therapeutics of lung disease.', '她专攻肺部疾病的治疗学。', ['clinical therapeutics'], ['medicine'], 'noun', 'uncountable', '健康'],
  ], '', [], 'brief ←?，按 §5.2 自扫根 therapy B2（author_t1.js 第 4 参）——therapy→therapeutic→therapeutics 属多步派生，-s 学科后缀不在 §5.4 清单，库内先例不一（author_a12.js athletics 取 athlete 的 B1、author_d6.js dietetics 明写留空），先例不充分且无把握，留空（判断项，供主 agent 裁定）；抽象学科名词无复数，forms 留空；近义 medicine 医学、医术（队列原样，置唯一义项恰好一次）');

  W('these days', 'adverb', '/ðiːz deɪz/', '', [], '现今；眼下这一时期', 'At the present moment in history.', [
    ['如今；现在（这一时期）', 'During the present period of time, in contrast with the past.', '在当前这段时期里，与过去相对。', '修饰动词，表示事情发生在当下，多位于句首或句末。', 'These days she works from home.', '如今她在家办公。', ['these days'], ['nowadays'], 'adverb', '不及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 nowadays 如今、现今（队列原样，置唯一义项恰好一次）').phrase = true;

  W('thicket', 'noun', '/ˈθɪkɪt/', 'A2', [], '密生的灌木丛', 'A patch of wild bushes where plants grow very near each other.', [
    ['灌木丛；矮树丛', 'A thick group of bushes or small trees growing close together.', '许多灌木或小树紧密生长在一起形成的一片。', '可数，常与 of 连用，多见于野外描写。', 'The rabbit vanished into a thicket of gorse.', '兔子钻进了金雀花丛中不见了。', ['a thicket of bushes'], ['scrub'], 'noun', 'countable', '自然'],
  ], 'thickets',['thick'], 'brief ←?，按 §5.2 自扫根 thick A2 厚的（author_t1.js 第 4 参）——thick + -et（指小后缀，同 author_h5.js hatchet←hatch B2 先例；-et 不在 §5.4 清单，清单内为 -let），A2 继承（判断项）；近义 scrub 矮树丛、灌丛（队列原样，置唯一义项恰好一次）');

  W('thickset', 'adjective', '/ˌθɪkˈset/', 'A2', [], '体格粗壮的；矮而结实的', 'Having a body that is broad and strongly built.', [
    ['矮壮的；结实的', 'Having a broad, solid body with short arms and legs.', '身体宽大结实、四肢较短的体形。', '多作表语形容人，中性，略带幽默色彩。', 'The thickset man blocked the doorway.', '那个矮壮的男人堵住了门口。', ['a thickset figure'], ['stout'], 'adjective', '表语', '外貌'],
  ], '',['thick'], 'brief ←?，按 §5.2 自扫根：复合词 thickset = thick + set，按规范 §5.3 取首成分 thick A2（author_t1.js 第 4 参），「体格粗壮」与 thick「厚实」语义直连，A2 继承（判断项：复合词首成分裁定）；近义 stout 矮胖结实的（队列原样，置唯一义项恰好一次）');

  W('thieve', 'verb', '/θiːv/', 'A2', [], '偷偷拿走；盗取', 'To get hold of other person goods by stealing.', [
    ['偷；盗', 'To take something that does not belong to you without permission.', '未经允许拿走不属于自己的东西。', '不及物动词，较正式或带诙谐色彩，常说 go thieving。', 'He was caught thieving in the market.', '他在市场偷东西被抓了个现行。', ['go thieving'], ['steal'], 'verb', '不及物', '法律'],
  ], 'thieves~thieved~thieved~thieving', ['steal'], 'brief ←?，按 §5.2 自扫根 thief A2 贼（author_t1.js 第 4 参）——thief 去 f 加 ve（f→ve 词干正字交替，同 author_s13.js shelve←shelf A2、author_g3.js grieves←grief B2 先例），A2 继承（判断项：f→v 不在 §5.4 清单）；家族 steal 偷（队列原样，入第 10 参），近义 steal 偷、盗（队列原样，置唯一义项恰好一次）');

  W('things', 'noun', '/θɪŋz/', 'A1', [], '东西；物品；情况', 'Objects and events, often named in a general way.', [
    ['东西；物品（复数）', 'Objects, possessions or items, especially when their exact nature is not important.', '物件、财物或用品，尤指不强调具体为何物时。', 'thing 的复数形式单列词条；作主语时谓语用复数。', 'She packed her things and left.', '她收拾好自己的东西就走了。', ['personal things', 'all sorts of things'], ['stuff'], 'noun', 'countable', '通用'],
    ['情况；事态', 'Events or situations, especially of a particular kind.', '事情或局面，尤指某种特定的情形。', '多用复数，常与 all、these、how 等连用，多见于口语。', 'How are things with you?', '你那边情况怎么样？', ['how are things'], [], 'noun', 'countable', '口语'],
  ],'things', ['stuff'], 'brief 根提示 ←thing A1 东西（自扫 author_t1.js 第 4 参复核为 A1）+ -s（复数形式单列词条，forms 留空并注明，同 author_s25.js systems←system A2 先例），A1 继承（判断项：-s 复数化不在 §5.4 清单）；家族 stuff 东西、物品（队列原样，入第 10 参），近义 stuff 物品（置首义项恰好一次）');

  W('thinker', 'noun', '/ˈθɪŋkə/', 'A1', [], '思想家；爱思考的人', 'Somebody whose job or habit is to produce new ideas.', [
    ['思想家；思考者', 'A person who develops ideas or theories in a careful and serious way.', '认真慎重地提出观念或理论的人。', '可数，常与 great、original、political 等词连用。', 'She is one of the great political thinkers of her age.', '她是那个时代伟大的政治思想家之一。', ['a great thinker'], ['intellect'], 'noun', 'countable', '职业'],
    ['爱思考的人；善于琢磨的人', 'A person who tends to think about ideas rather than about practical matters.', '惯于琢磨观念问题而非实际事务的人。', '可数，常与 natural、careful 等词连用。', 'He is a natural thinker who enjoys puzzles.', '他是个天生爱思考的人，喜欢解谜。', ['a careful thinker'], ['intellectual'], 'noun', 'countable', '性格'],
  ], 'thinkers', ['intellectual'], 'brief 根提示 ←think A1 思考（自扫 author_t1.js 第 4 参复核为 A1）+ -er（-er 在 §5.4 清单，表人），A1 继承；家族 intellectual 知识分子（队列原样，入第 10 参），近义 intellect 才智者（置首义项）、intellectual 知识分子（置义项 2），均队列原样、各恰好一次');

  W('thinking', 'noun', '/ˈθɪŋkɪŋ/', 'A1', ['CET4'], '思维；想法与思索过程', 'What goes on in the mind when views are formed.', [
    ['思想；思维方式', 'The activity or process of considering ideas, or the set of ideas that people hold in a particular area.', '思考观念的活动或过程，或某一领域内人们持有的一整套看法。', '不可数，常与 current、political、economic 等词连用。', 'This goes against the current economic thinking.', '这与当前的经济思想相悖。', ['current thinking', 'political thinking'], ['ideology'], 'noun', 'uncountable', '社会'],
    ['思考；考虑', 'The process of using the mind to consider ideas and work out problems.', '运用头脑考虑观念、解决问题的过程。', '不可数，常与 about、further 等连用。', 'Give me a day or two for thinking.', '给我一两天时间考虑。', ['further thinking'], ['thought'], 'noun', 'uncountable', '心理'],
  ], '', ['thought'], 'brief 根提示 ←think A1 思考（自扫 author_t1.js 第 4 参复核为 A1）+ -ing（-ing 在 §5.4 清单，动名词转名词），A1 继承；抽象不可数故 forms 留空；家族 thought 思想、想法（队列原样，入第 10 参），近义 ideology 意识形态（置首义项）、thought 想法（置义项 2），均队列原样、各恰好一次；CET4 标签照抄队列');

  W('third-level', 'adjective', '/ˌθɜːd ˈlevl/', 'A1', [], '第三层级的；第三阶段的', 'Belonging to the third step of a ranked system.', [
    ['第三级的；第三层级的', 'Belonging to the third stage or level of a system, especially of education.', '属于体系中第三阶段或第三层级的，尤指教育。', '多作定语，常与 education、institution 连用，主用于教育与行政语境。', 'Third-level institutions award degree courses.', '第三级院校颁发学位课程。', ['third-level education'], ['tertiary'], 'adjective', '定语', '教育'],
  ], '',['third'], 'brief ←?，按 §5.2 自扫根：连字符复合词 third-level = third + level，按规范 §5.3 取首成分 third A1 第三（author_t1.js 第 4 参），「第三级的」与 third 语义直连，A1 继承（判断项：复合词首成分裁定，同 author_e3.js egg-shaped←egg A1 先例）；近义 tertiary 第三级的、第三的（队列原样，置唯一义项恰好一次）');

  W('thirteenth', 'number', '/ˌθɜːˈtiːnθ/', 'A1', [], '序数第十三（另指十三分之一）', 'Coming after twelve in a count, or one part of thirteen equal parts.', [
    ['第十三', 'Number 13 in a series; the ordinal of thirteen.', '序列中第 13；thirteen 的序数词。', '数词家族统一取序数词义。', 'Some people fear Friday the thirteenth.', '有些人害怕十三号星期五。', ['the thirteenth century'], ['thirteen'], 'number', 'null', '通用'],
    ['十三分之一', 'One of thirteen equal parts.', '十三等份中的一份。', '可数，常见于数学语境。', 'Only a thirteenth of the land is farmed.', '只有十三分之一的土地被耕种。', ['one thirteenth of'], [], 'noun', 'countable', '数学'],
  ], 'thirteenths', ['thirteen'], 'brief ←?，按 §7 数词条目处理：自扫根 thirteen A1 十三（author_t1.js 第 4 参）+ -th（-th 在 §5.4 清单，先例 author_e3.js eighteenth←eighteen A1、eleventh←eleven A1），A1 继承；数词家族统一取序数词义，义项 2 为分数义（先例 eighth/fifth）；家族/近义 thirteen 十三（基数词，队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('thirtieth', 'number', '/ˈθɜːtiɪθ/', 'A1', [], '序数第三十（另指三十分之一）', 'Coming after twenty-nine in a count, or one part of thirty equal parts.', [
    ['第三十', 'Number 30 in a series; the ordinal of thirty.', '序列中第 30；thirty 的序数词。', '数词家族统一取序数词义。', 'She moved to the thirtieth floor last month.', '她上个月搬到了第三十层。', ['the thirtieth anniversary'], ['thirty'], 'number', 'null', '通用'],
    ['三十分之一', 'One of thirty equal parts.', '三十等份中的一份。', '可数，常见于数学与计量语境。', 'A thirtieth of the income is set aside.', '收入的三十分之一被预留出来。', ['one thirtieth of'], [], 'noun', 'countable', '数学'],
  ], 'thirtieths', ['thirty'], 'brief ←?，按 §7 数词条目处理：自扫根 thirty A1 三十（author_t1.js 第 4 参）+ -th（y→ieth 正字变化，先例 author_e3.js eightieth←eighty A1），A1 继承；数词家族统一取序数词义，义项 2 为分数义（先例 eighth/fifth）；家族/近义 thirty 三十（基数词，队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('this day', 'noun', '/ðɪs deɪ/', '', [], '当天；当今（正式用语）', 'The present day, spoken of in formal or religious style.', [
    ['今天；本日', 'The same day that is happening now, said in formal or religious language.', '正在发生的同一天，用于正式或宗教语境。', '名词短语，多见于固定表达 to this day、this day and age。', 'To this day nobody knows what happened.', '直到今天也没人知道发生了什么。', ['to this day', 'this day and age'], ['today'], 'noun', 'countable', '书面'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 today 今天（队列原样，置唯一义项恰好一次）').phrase = true;

  W('this evening', 'noun', '/ðɪs ˈiːvnɪŋ/', '', [], '今天傍晚至夜里的时间', 'The part of today that comes after the afternoon.', [
    ['今晚；今天傍晚', 'The period of time between now and the end of today during the evening.', '从现在到今天傍晚结束之间的时间段。', '名词短语，常作时间状语，与 tonight 同义而较正式。', 'We are meeting a friend this evening.', '我们今晚要见一位朋友。', ['later this evening'], ['tonight'], 'noun', 'countable', '通用'],
  ], '', ['tonight'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；家族 tonight 今晚（队列原样，入第 10 参），近义 tonight 今晚（置唯一义项恰好一次）').phrase = true;

  W('thong', 'noun', '/θɒŋ/', '', [], '细皮带；人字拖', 'A narrow strip of material, or a flat sandal with a toe strap.', [
    ['皮条；系带', 'A thin strip of leather or other material used to tie or hold something.', '用来捆扎或固定某物的细长皮条或材料条。', '可数，常与 of 连用。', 'The sandal was held together by a worn thong.', '凉鞋靠一条磨旧的皮带系着。', ['a thong of leather'], ['strap'], 'noun', 'countable', '工具'],
    ['人字拖（澳式、新西兰英语）', 'A flat sandal held to the foot by a thin strap passing between the big toe and the next toe.', '由细带夹在大脚趾与相邻脚趾之间把鞋固定在脚上的平底凉鞋。', '可数，澳式与新西兰英语，美式常说 flip-flop。', 'He wore a pair of thongs to the beach.', '他穿了双人字拖去海边。', ['a pair of thongs'], [], 'noun', 'countable', '外貌'],
  ], 'thongs', [], 'brief ←?，自扫根：库内无 thong 的在库词根（-ong 不在 §5.4 清单；与 long、song 形近但词首非全段共享，属切词假象，规范 §5.7），留空；近义 strap 皮带、系带（队列原样，置首义项恰好一次）');

  W('thoroughly', 'adverb', '/ˈθʌrəfli/', 'B2', [], '一丝不苟地；非常、极其', 'In a complete and careful manner, or to a large degree.', [
    ['彻底地；完全地', 'In a complete and careful way, leaving nothing out.', '以完整而仔细的方式，不遗漏任何部分。', '修饰动词，常与 clean、check、understand 等词连用。', 'The kitchen was thoroughly cleaned before the guests arrived.', '客人到来之前厨房被彻底打扫干净了。', ['thoroughly clean', 'check thoroughly'], ['well'], 'adverb', '不及物', '通用'],
    ['非常；极其', 'To a very large degree; very much.', '在很大程度上；非常。', '修饰动词或形容词，起强调作用，多见于口语。', 'I thoroughly enjoyed the performance.', '我非常欣赏这场演出。', ['thoroughly enjoy'], [], 'adverb', '不及物', '口语'],
  ], '',['thorough'], 'brief 根提示 ←thorough B2 彻底的（自扫 author_t1.js 第 4 参复核为 B2）+ -ly（-ly 在 §5.4 清单，透明副词后缀），B2 继承；副词 forms 留空；近义 well 好地（队列原样，置首义项恰好一次）');

  W('thoroughness', 'noun', '/ˈθʌrənəs/', 'B2', [], '周密细致的品质', 'The state of covering every part of a task.', [
    ['彻底；周密', 'The quality of being complete and careful in everything you do.', '做任何事都完整而仔细的品质。', '不可数，常与 of、with 等词连用。', 'The report was praised for its thoroughness.', '这份报告因周密而受到赞扬。', ['care and thoroughness'], ['rigor'], 'noun', 'uncountable', '通用'],
  ], '',['thorough'], 'brief 根提示 ←thorough B2 彻底的（自扫 author_t1.js 第 4 参复核为 B2）+ -ness（-ness 在 §5.4 清单），B2 继承；抽象不可数故 forms 留空；近义 rigor 严谨、严密（队列原样，置唯一义项恰好一次）');

  W('thou', 'pronoun', '/ðaʊ/', '', [], '汝；你（古旧代词）', 'A word for one person, used in old-fashioned speech and poetry.', [
    ['你；汝（旧式用法）', 'The old form of you used when speaking to one person, especially in prayers or poetry.', '对一个人说话时使用的 you 的旧式形式，尤见于祈祷文与诗歌。', '第二人称单数代词，现代英语口语中已不用；常见于古英语文本与固定引语。', 'The poem opens with the line O thou art fair.', '这首诗以「噢，你真美」一句开篇。', ['fare thee well'], ['you'], 'pronoun', 'null', '历史'],
  ], '', [], 'brief ←?，自扫根：库内无 thou 的在库词根（古英语第二人称单数主格，非库内派生；与 you 语义对应但词首非全段共享，兄弟派生不成立，规范 §5.6），留空；代词无词形变化，forms 留空；近义 you 你（队列原样，置唯一义项恰好一次）');

  W('thoughtful', 'adjective', '/ˈθɔːtfəl/', 'A2', ['CET4'], '体贴的；沉思的', 'Showing care for other people, or the habit of thinking deeply.', [
    ['体贴的；关心他人的', 'Caring about what other people may need or feel, and acting accordingly.', '在意别人的需要或感受，并据此行事。', '定语表语两用，常与 of、about 连用。', 'It was thoughtful of you to bring flowers.', '你带花来真是太体贴了。', ['a thoughtful friend'], ['considerate', 'sensitive'], 'adjective', '定语/表语', '性格'],
    ['沉思的；若有所思的', 'Showing that you are thinking carefully and quietly about something.', '显得正在安静而认真地思考某事。', '定语表语两用，常形容神情、片刻。', 'She looked thoughtful for a moment.', '她看上去沉思了片刻。', ['a thoughtful expression'], [], 'adjective', '定语/表语', '心理'],
  ], '', ['considerate'], 'brief ←?，按 §5.2 自扫根 thought A2 思想（author_t1.js 第 4 参）——thought + -ful（-ful 在 §5.4 清单，同 author_c7.js careful←care A1、author_d7.js doubtful←doubt B1 先例），A2 继承；家族 considerate 体贴的（队列原样，入第 10 参），近义 considerate 体贴的与 sensitive 体贴的、敏感的（队列原样，置首义项各恰好一次）；CET4 标签照抄队列');

  W('thousandth', 'number', '/ˈθaʊzənθ/', 'A1', [], '序数第一千（另指千分之一）', 'Coming after nine hundred and ninety-nine, or one part of a thousand equal parts.', [
    ['第一千', 'Number 1,000 in a series; the ordinal of thousand.', '序列中第 1000；thousand 的序数词。', '数词家族统一取序数词义。', 'The shop opened on its thousandth day.', '这家店在第一千天开张。', ['the thousandth anniversary'], ['thousand'], 'number', 'null', '通用'],
    ['千分之一', 'One of a thousand equal parts.', '一千等份中的一份。', '可数，常见于数学与测量语境。', 'A thousandth of a second can decide a race.', '千分之一秒就能决定一场比赛的胜负。', ['one thousandth of'], [], 'noun', 'countable', '数学'],
  ], 'thousandths', ['thousand'], 'brief ←?，按 §7 数词条目处理：自扫根 thousand A1 一千（author_t1.js 第 4 参）+ -th（-th 在 §5.4 清单，先例 author_e3.js eighteenth←eighteen A1），A1 继承；数词家族统一取序数词义，义项 2 为分数义（先例 eighth/fifth）；家族/近义 thousand 一千（基数词，队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('threadbare', 'adjective', '/ˈθredbeə/', 'B1', [], '磨破的；陈腐的', 'Worn thin until the threads show, or repeated until it loses value.', [
    ['（衣服）磨破的；破旧不堪的', 'Worn out so that the threads show through the surface.', '磨损到线头从表面露出来的程度。', '多作表语，形容衣物、织物。', 'He wore a threadbare jacket to the interview.', '他穿着一件破旧的外套去面试。', ['a threadbare coat'], ['shabby'], 'adjective', '表语', '外貌'],
    ['（论点、笑话）陈腐的；老套的', 'Repeated too often and no longer interesting or convincing.', '重复太多次，已不再新鲜或有说服力。', '多作表语，形容借口、笑料、陈词滥调。', 'The play relies on threadbare jokes about marriage.', '这出戏靠老套的婚姻笑话撑场。', ['threadbare excuses'], [], 'adjective', '表语', '文学'],
  ], '',['thread'], 'brief ←?，按 §5.2 自扫根：复合词 threadbare = thread + bare，两成分分别自扫 thread B1 线（author_t1.js 第 4 参）、bare B2 裸露（author_b1.js 第 4 参），按规范 §5.3 取首成分 thread B1，「磨到露出线头」与 thread 语义直连，B1 继承（判断项：复合词首成分裁定）；近义 shabby 破旧的、寒酸的（队列原样，置首义项恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
