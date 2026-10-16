/* data/words/cet/author_s23.js — 常用词 S 批次 23，缺口 submissive ~ sung，共 31 条
 * （30 单词 + 1 短语：succeed to，带 .phrase = true；短语数 1，与队列 [PH] 数一致）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_s23.txt，widx 311-341；本批词头完整，无残缺或粘连词头，照抄不改写）。
 * CET 标签照抄队列：CET4 × 10（submissive、substantial、succession、successive、successor、
 *   suddenly、suffering、suggestion、suggestive、suitable）；CET6 × 0；其余 21 条 []。
 * brief：%TEMP%\opencode\_s23_brief.txt 共 30 行，与本批 30 个单词逐行对应（短语 succeed to 不入 brief）；
 *   7 行给根（suburb B1、sudden B1 ×2、suffer B1 ×2、sufficient B1、sum B1），23 行显示 ←?。
 *   ←? 一律按规范 §5.2 纯文本自扫：fs.readFileSync + 正则定位 W( 词头行取第 4 参
 *   （只扫 assets/js/data/words/cet/author_*.js，未 require 全库）；curated.js、adapt.js 另以 level 字段核对。
 * 扫根结论（自扫出处）：submit B2、substance B1、sugar A1、success A2、summary B1、suggest B1、
 *   suit B1、summer A1（均 author_s4.js 第 4 参）、title A2（author_t2.js）、sing A1（author_s2.js）；
 *   affix、caption、choke、consecutive 虽在库但第 4 参为 ''（无可靠分级），不可作根。
 * brief 根提示复核通过（自扫同级，均 author_s4.js 第 4 参）：suburb B1、sudden B1、suffer B1、
 *   sufficient B1、sum B1。
 * · 继承 22 条：submissive←submit B2（词干 submitt→submiss 的 t→ss 交替 + -ive，判断项）、
 *   substantial←substance B1（词干 substanc→substant 的 c→t 音变 + -ial，判断项）、
 *   substantive←substance B1（同上 c→t + -ive，判断项）、subtitle←title A2（前缀性成分 sub- 不在库，
 *   §5.3 取其后词根，判断项）、suburbs←suburb B1（复数单列词条，-s 按库内先例，判断项）、
 *   successfully←success A2 + -fully、succession←success A2 + -ion、successive←success A2 + -ive、
 *   successor←success A2 + -or、suddenly←sudden B1 + -ly、suddenness←sudden B1 + -ness、
 *   sufferer←suffer B1 + -er、suffering←suffer B1 + -ing、sufficiently←sufficient B1 + -ly、
 *   sugary←sugar A1 + -y（§5.4 条 4b 裁定可继）、suggestion←suggest B1 + -ion、
 *   suggestive←suggest B1 + -ive、suitable←suit B1 + -able、summarize←summary B1（y→ize 逆构，判断项）、
 *   summertime←summer A1（复合词取首成分，§5.3）、sums←sum B1（复数单列词条，判断项）、
 *   sung←sing A1（过去分词单列词条，判断项）。
 * · 留空 8 单词 + 1 短语：subsidiary（subside 不在库，兄弟词 subsidy 现代语义不直连，判断项）、
 *   subterranean（词根 terra/terrane 不在库）、suede（法语借词，库内无词根）、
 *   suffix（affix 无可靠分级、fix 与词尾缀语义不直连）、suffocate（词根 sub-+foc 不在库）、
 *   suffrage（词根不在库且 -age 不在 §5.4 清单）、sultry（源自 swelter，库内无词根）、
 *   sumptuous（词根 sumptu 不在库，形含 sum 属切词假象，判断项）；短语 succeed to（规范 §6 整体不取根）。
 * CEFR 分布（30 单词）：A1 × 3（sugary、summertime、sung），A2 × 5（subtitle、successfully、succession、
 *   successive、successor），B1 × 13（substantial、substantive、suburbs、suddenly、suddenness、sufferer、
 *   suffering、sufficiently、suggestion、suggestive、suitable、summarize、sums），B2 × 1（submissive），
 *   留空 × 8；短语 1 条一律 ''。
 * 体例：substantive 词性写作 noun/adjective，义项 2 的词性字段留空、由首参回填 noun
 *   （使近义 noun 在义项内恰好出现一次，义项 1 的形容词词性字段照写）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s23.js 必须在 _cet_helper.js 之后加载');

  W('submissive', 'adjective', '/səbˈmɪsɪv/', 'B2', ['CET4'], '服从的；不加反抗的', 'Willing to obey other people without question.', [
    ['顺从的；唯命是从的', 'Willing to do what other people want and to obey them without arguing.', '愿意按别人的意愿行事、不加争辩地服从的。', '形容词，常带贬义，指过度服从、缺乏主见，常用 be submissive to somebody。', 'The new employee was completely submissive to every demand from the manager.', '那位新员工对经理的每个要求都完全顺从。', ['submissive to', 'submissive behaviour'], ['passive'], 'adjective', '表语', '性格'],
  ], '', ['passive'], 'brief ←?，自扫根：submit B2（author_s4.js 第 4 参），词干 submitt→submiss 的 t→ss 交替 + -ive（-ive 在 §5.4 清单，同库内 offend→offensive 模式），B2 继承（判断项：词干交替）；家族/近义 passive 被动的、顺从的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('subsidiary', 'adjective', '/səbˈsɪdiəri/', '', [], '次要而协作的；附属的', 'Second in importance but giving help to a main organization.', [
    ['辅助的；附属的', 'Providing extra help or support to a more important organization or activity, or belonging to a company controlled by another.', '为更重要的组织或活动提供补充帮助的，或从属于另一家公司的。', '形容词，常见搭配 subsidiary company（子公司）、subsidiary role（辅助作用）。', 'The Berlin branch plays only a subsidiary role in the group.', '柏林分公司在该集团中只起辅助作用。', ['subsidiary company', 'subsidiary role'], ['minor'], 'adjective', '定语/表语', '商务'],
  ], '', [], 'brief ←?，自扫根：库内无 subside 在库词根（-ary 在 §5.4 清单但根缺席）；兄弟词 subsidy C1（author_s4.js）为「政府补贴」，与本词「辅助的」语义不直连，不取（判断项），留空；近义 minor 次要的（队列原样，置唯一义项恰好一次）');

  W('substantial', 'adjective', '/səbˈstænʃəl/', 'B1', ['CET4'], '大量的；重大的', 'Big enough to be noticed, in amount or in effect.', [
    ['大量的；可观的', 'Large in amount, size or value; more than a small amount.', '数量、规模或价值大；不止一点点。', '形容词，常修饰 amount、sum、proportion、increase 等名词。', 'The company reported a substantial rise in profits this year.', '公司报告今年利润大幅上升。', ['a substantial amount', 'a substantial increase'], ['considerable', 'fat', 'handsome'], 'adjective', '定语/表语', '商务'],
    ['重大的；实质性的', 'Important enough to have a real effect on something, or large enough to be noticed.', '对某事有实际影响的、或大到足以被注意到的。', '正式用语，指重要性或影响显著，多作定语。', 'They made substantial changes to the original plan.', '他们对原计划作了重大改动。', ['substantial evidence', 'substantial changes'], [], 'adjective', '定语/表语', '通用'],
  ], '', ['considerable'], 'brief ←?，自扫根：substance B1（author_s4.js 第 4 参），词干 substanc→substant 的 c→t 音变 + e→∅ + -ial（同 author_e4.js essential←essence B1 先例，-ial 属 §5.4 -al 类），B1 继承（判断项：词干音变）；fam considerable 巨大的入第 10 参，近义 considerable、fat 可观的、handsome 可观的（队列原样，置义项 1 各恰好一次）');

  W('substantive', 'noun/adjective', '/ˈsʌbstəntɪv/', 'B1', [], '实质性的；名词性实词', 'Real and important in substance, or a class of words used to name things.', [
    ['实质性的；有实质内容的', 'Dealing with the most important and basic features of something rather than with its details.', '涉及某事最重要、最基本的内容而非细枝末节的。', '形容词，正式用语，常修饰 discussion、issue、work、content。', 'The report offered a substantive analysis of the housing market.', '这份报告对住房市场作了实质性的分析。', ['substantive discussion', 'substantive issue'], [], 'adjective', '定语/表语', '商务'],
    ['名词性实词（语法）', 'A word class used to name a person, place or thing, including pronouns.', '用来指称人、地点或事物的一类词，包括代词。', '可数，语法术语，与形容词相对，句中多作主语或宾语。', 'In this rule, any substantive may serve as the subject.', '在这条规则中，任何名词性实词都可以作主语。', ['grammatical substantive'], ['noun'], '', 'countable', '语法'],
  ], 'substantives',['substance'], 'brief ←?，自扫根：substance B1（author_s4.js 第 4 参），词干 substanc→substant 的 c→t 音变 + -ive（-ive 在 §5.4 清单，同本批 substantial 模式），B1 继承（判断项：词干音变）；词性按 noun/adjective 排列，义项 2 词性字段留空由首参回填 noun，使近义 noun 在义项内仅出现一次；近义 noun 名词性实词（队列原样，置义项 2 恰好一次）');

  W('subterranean', 'adjective', '/ˌsʌbtəˈreɪniən/', '', [], '地面以下的；深处的', 'Existing or taking place below the surface of the earth.', [
    ['地下的；在地下进行的', 'Beneath the ground and not visible from above, or happening below the ground.', '在地表以下、从上方看不见的，或在地下发生的。', '形容词，常修饰 river、passage、railway 等，也可指秘密进行的活动。', 'The explorers found a river running deep beneath the hills.', '探险者发现一条河流从丘陵深处流过。', ['subterranean river', 'subterranean passage'], ['underground'], 'adjective', '定语/表语', '地理'],
  ], '', [], 'brief ←?，自扫根：词源为拉丁语 sub-（在下）+ terra（土地），terra/terrane 不在库；库内 terrain、terrace 与本词词首不同段，§5.6 兄弟派生条件不满足，-anean/-an 亦不在 §5.4 清单，无根可继，留空；近义 underground 地下的（队列原样，置唯一义项恰好一次）');

  W('subtitle', 'noun', '/ˈsʌbtaɪtl/', 'A2', [], '副标题；字幕', 'A second heading, or words shown at the bottom of a film screen.', [
    ['副标题；小标题', 'A title that comes below the main title of a book, article or other piece of writing.', '位于书籍、文章等主标题之下的标题。', '可数，与 main title 相对，也用于影片章节名。', 'The chapter opens with a subtitle in smaller type.', '该章以一行较小字体的副标题开篇。', ['chapter subtitle'], ['caption'], 'noun', 'countable', '出版'],
    ['（影片的）字幕', 'The written words shown at the bottom of a film or television screen so that people can read the spoken lines.', '显示在电影或电视屏幕下方、供人阅读台词的文字。', '可数，常用复数 subtitles 指整套字幕。', 'The film was shown with English subtitles for the visitors.', '这部电影为来访者配了英文字幕。', ['burnt-in subtitles'], [], 'noun', 'countable', '媒体'],
  ], 'subtitles', ['caption'], 'brief ←?，自扫根：复合词 sub+title，首成分 sub- 为前缀性成分且不在库，取其后词根 title A2（author_t2.js 第 4 参），语义直连（subtitle 即次级标题、影片字幕），A2 继承（判断项：规范 §5.3 取其后词根，备注披露）；家族/近义 caption 说明文字、题注（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('suburbs', 'noun', '/ˈsɜːbəbz/', 'B1', [], '郊区；城郊住宅区', 'The outer areas of a town where people live.', [
    ['郊区（复数）', 'The areas around a city where people live and from which they travel to work in the centre.', '大城市周边人们居住、并从那里前往市中心上班的区域。', 'suburb 的复数形式单列词条；作主语时谓语用复数，常与 the 或 these 连用。', 'They moved to the suburbs after the second child was born.', '第二个孩子出生后，他们搬到了郊区。', ['live in the suburbs', 'outer suburbs'], ['outskirts'], 'noun', 'countable', '地理'],
  ], '',['suburb'], 'brief 根提示 ←suburb B1 郊区（自扫 author_s4.js 第 4 参复核为 B1），复数 -s 单列词条（formsStr 留空，同本批 sums、库内 snacks 体例），B1 继承（判断项：-s 不在 §5.4 明示清单，按库内 sales←sale A2 先例）；近义 outskirts 市区边缘（队列原样，置唯一义项恰好一次）');

  W('succeed to', 'verb', '/səkˈsiːd tuː/', '', [], '接替他人的名分与产业', 'To follow another person in a rank, job or property.', [
    ['继承（头衔、职位、财产）', 'To take over a title, position or property from somebody else.', '从别人那里接任头衔、职位或财产。', '短语，后接宾语；多见于王位、爵位、产业等语境，与 succeed（成功）不同义。', 'The elder son succeeded to the estate when the father died.', '父亲去世后，长子继承了那笔产业。', ['succeed to the throne'], ['inherit'], 'verb', '及物', '法律'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 inherit 继承（队列原样，置唯一义项恰好一次，短语条目）').phrase = true;

  W('successfully', 'adverb', '/səkˈsesfəli/', 'A2', [], '达成目标地；不出差错地', 'In a way that achieves the intended result.', [
    ['成功地；顺利地', 'In a way that produces the result you wanted, or without making a mistake.', '以产生你想要的结果、或不出差错的方式。', '副词，修饰动词，可置于句首、实义动词前或句尾。', 'They successfully completed the entire schedule ahead of time.', '他们成功地提前完成了全部安排。', ['successfully complete', 'manage successfully'], ['well'], 'adverb', '不及物', '通用'],
  ], '',['success'], 'brief ←?，自扫根：success A2（author_s4.js 第 4 参），success + -fully（-ful 与 -ly 均在 §5.4 清单），A2 继承；近义 well 好地（队列原样，置唯一义项恰好一次）');

  W('succession', 'noun', '/səkˈseʃən/', 'A2', ['CET4'], '一连串；继承', 'A series of people or things coming one after another, or the act of following in a position.', [
    ['一连串；连续', 'A number of similar things or people following one after another in time.', '一连串相似的事物或人按时间先后接连出现。', '可数，常与 of 连用；in succession 表示接连不断地。', 'The band scored three hits in succession.', '这支乐队接连推出三首热门曲目。', ['in succession', 'a succession of'], ['sequence'], 'noun', 'countable', '通用'],
    ['继承；继任', 'The act of taking over a job, title or property from somebody else, or the order in which people do this.', '接替他人的工作、头衔或财产的行为，或人们如此接替的次序。', '不可数，常见 succession to the throne（王位继承）。', 'The rules clearly define the succession to the estate.', '这些规则清楚界定了产业的继承方式。', ['succession to the throne'], [], 'noun', 'uncountable', '法律'],
  ], 'successions',['success'], 'brief ←?，自扫根：success A2（author_s4.js 第 4 参）+ -ion（词干全段可见，-ion 在 §5.4 清单），A2 继承；近义 sequence 序列、顺序（队列原样，置义项 1 恰好一次）');

  W('successive', 'adjective', '/səkˈsesɪv/', 'A2', ['CET4'], '一个接一个的；不间断的', 'One after another, with no gap between them.', [
    ['连续的；接连的', 'Happening or coming one after the other in a series without interruption.', '在一系列中一个接一个、互不中断地发生或到来。', '形容词，多作定语，修饰 year、week、victory 等，语气较 following 正式。', 'The team won five successive games at home.', '该队在主场赢得五连胜。', ['five successive years', 'in successive rounds'], ['consecutive', 'serial'], 'adjective', '定语', '通用'],
  ], '', ['consecutive', 'serial'], 'brief ←?，自扫根：success A2（author_s4.js 第 4 参）+ -ive（词干全段可见，-ive 在 §5.4 清单），A2 继承；家族 consecutive 连续的、serial 连续成套的，近义 consecutive、serial（队列原样，fam 入第 10 参，syn 置唯一义项各恰好一次）');

  W('successor', 'noun', '/səkˈsesə/', 'A2', ['CET4'], '接班人；后继者', 'Somebody who follows another person in a job or title.', [
    ['继任者；接替者', 'A person who takes over a job, title or position from another person.', '接替他人工作、头衔或职位的人。', '可数，常与 to 连用；商业语境中也指接替的产品或公司。', 'The board named a successor to lead the division.', '董事会指定了一位继任者来领导该部门。', ['successor to the chair', 'find a successor'], ['heir', 'next'], 'noun', 'countable', '职业'],
  ], 'successors', ['heir', 'predecessor'], 'brief ←?，自扫根：success A2（author_s4.js 第 4 参）+ -or（词干全段可见，-or 表人在 §5.4 清单），A2 继承；家族 heir 继承人、predecessor 前任（fam 入第 10 参），近义 heir 继承人、next 下一位（队列原样，syn 置唯一义项各恰好一次）');

  W('suddenly', 'adverb', '/ˈsʌdənli/', 'B1', ['CET4'], '猝然地；毫无预兆地', 'All at once, with no warning beforehand.', [
    ['突然地；出乎意料地', 'Quickly and without any warning, so that it is unexpected.', '在几乎毫无预示的情况下迅速发生，因而令人意外。', '副词，修饰动词，常置于句首或实义动词前。', 'The lights went out suddenly during the storm.', '风暴中灯突然灭了。', ['all of a sudden'], ['abruptly', 'overnight', 'short'], 'adverb', '不及物', '通用'],
  ], '', ['overnight'], 'brief 根提示 ←sudden B1 突然（自扫 author_s4.js 第 4 参复核为 B1），sudden + -ly（-ly 在 §5.4 清单），B1 继承；家族 overnight 一夜之间入第 10 参，近义 abruptly 骤然地、overnight 一夜之间、short 短促地（队列原样，syn 置唯一义项各恰好一次）');

  W('suddenness', 'noun', '/ˈsʌdənnəs/', 'B1', [], '事出突然的程度', 'How quickly and unexpectedly something happens.', [
    ['突然；骤然', 'The quality of happening very quickly and without any warning.', '发生得极快且毫无预示的性质。', '不可数，多与 the 连用，常见于 the suddenness of something。', 'The suddenness of the decision surprised everyone in the room.', '决定之突然让在场所有人都吃了一惊。', ['the suddenness of'], ['abruptness'], 'noun', 'uncountable', '通用'],
  ], '',['sudden'], 'brief 根提示 ←sudden B1 突然（自扫 author_s4.js 第 4 参复核为 B1），sudden + -ness（-ness 在 §5.4 清单），B1 继承；近义 abruptness 骤然（队列原样，置唯一义项恰好一次）');

  W('suede', 'noun', '/sweɪd/', '', [], '起绒的动物皮革', 'A fine soft material used for shoes, gloves and coats.', [
    ['麂皮；绒面革', 'A type of soft material made from the skin of an animal, with a slightly rough surface on one side.', '由动物皮制成的一种柔软材料，一面带有略微粗糙的绒面。', '不可数，常用来做鞋子、手套和外套。', 'He bought a pair of brown suede boots for the winter.', '他买了一双棕色麂皮靴过冬。', ['suede jacket', 'brown suede'], ['leather'], 'noun', 'uncountable', '外貌'],
  ], '', ['leather'], 'brief ←?，自扫根：法语借词（源自 French gants de Suède 手套），库内无在库词根（-uede 不在 §5.4 清单），留空；家族/近义 leather 皮革（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('sufferer', 'noun', '/ˈsʌfərə/', 'B1', [], '罹病者；受难的人', 'Somebody who has an illness or endures hardship.', [
    ['患者；受苦者', 'A person who has a particular illness, or a person who has to endure something unpleasant.', '患有某种疾病的人，或不得不忍受不愉快事情的人。', '可数，常与 of 连用，如 sufferer of migraine。', 'Many sufferers report better sleep after the treatment.', '许多患者称治疗后睡眠有所改善。', ['long-term sufferer', 'sufferer of migraine'], ['martyr', 'victim'], 'noun', 'countable', '健康'],
  ], 'sufferers', ['victim'], 'brief 根提示 ←suffer B1 受苦（自扫 author_s4.js 第 4 参复核为 B1），suffer + -er（-er 在 §5.4 清单），B1 继承；家族 victim 受害者入第 10 参，近义 martyr 受苦者、victim 受害者（队列原样，syn 置唯一义项各恰好一次）');

  W('suffering', 'noun/adjective', '/ˈsʌfərɪŋ/', 'B1', ['CET4'], '受苦的处境；病痛', 'Hardship and unhappiness that somebody goes through.', [
    ['痛苦；受难', 'The state of being badly hurt or unhappy for a long period of time.', '长期处于痛苦与不幸之中的状态。', '不可数，复数 sufferings 用来指所遭受的种种苦难，常与 of 连用。', 'The prolonged suffering of the refugees moved the whole country.', '难民长期的苦难牵动了全国。', ['cause suffering', 'ease suffering'], ['distress', 'pain'], 'noun', 'uncountable', '通用'],
    ['受苦的；患病的', 'Experiencing great discomfort because of an illness or a hard situation.', '因疾病或困境而正承受强烈不适的。', '形容词，作定语或表语，常与 from 连用。', 'The suffering patients waited quietly in the corridor.', '那些受病痛折磨的病人安静地在走廊里等候。', ['suffering from'], [], 'adjective', '定语/表语', '健康'],
  ], 'sufferings', ['distress'], 'brief 根提示 ←suffer B1 受苦（自扫 author_s4.js 第 4 参复核为 B1），suffer + -ing（-ing 在 §5.4 清单，动名词转名词），B1 继承；家族 distress 苦恼入第 10 参，近义 distress 困顿、pain 疼痛（队列原样，syn 置义项 1 各恰好一次）');

  W('sufficiently', 'adverb', '/səˈfɪʃəntli/', 'B1', [], '达到所需程度地', 'To a degree that meets a particular need.', [
    ['充分地；足够地', 'To the degree that is needed for a particular purpose or situation.', '达到某一目的或情况所需要的程度。', '副词，修饰动词与形容词，常与 for、to 连用。', 'The hall was sufficiently large for the whole class.', '大厅对整个班来说足够大。', ['sufficiently large', 'sufficiently to satisfy'], ['enough', 'plenty'], 'adverb', '不及物', '通用'],
  ], '',['sufficient'], 'brief 根提示 ←sufficient B1 足够的（自扫 author_s4.js 第 4 参复核为 B1），sufficient + -ly（-ly 在 §5.4 清单），B1 继承；近义 enough 足够、plenty 大量（队列原样，置唯一义项各恰好一次）');

  W('suffix', 'noun', '/ˈsʌfɪks/', '', [], '加在词末的字母群', 'A group of letters placed at the end of a word.', [
    ['后缀；词尾', 'A letter or group of letters added to the end of a word to change its meaning or its grammar.', '加在词末以改变意义或语法功能的字母或字母组合。', '可数，语法术语，与 prefix（前缀）相对。', 'Adding the suffix -ness turns an adjective into a noun.', '加上后缀 -ness 可把形容词变成名词。', ['add a suffix', 'verb suffix'], [], 'noun', 'countable', '语法'],
  ], 'suffixes', ['affix'], 'brief ←?，自扫根：库内 affix 虽在库但第 4 参为空（author_a1.js，无可靠分级，不可作根）；词尾 fix A2（author_f2.js）意为修理、固定，与 suffix（词尾缀）语义不直连，-fix 亦非 §5.4 后缀，无根可继，留空；家族 affix 缀加（队列原样，入第 10 参），队列 syn 为空，近义数组写 []');

  W('suffocate', 'verb', '/ˈsʌfəkeɪt/', '', [], '窒息；使窒息', 'To die or to make somebody unable to breathe.', [
    ['窒息而死', 'To die because there is no air available to breathe.', '因为没有空气可呼吸而死亡。', '不及物动词，主语多为人或动物，常与 in 或 from 连用。', 'Two miners suffocated in the collapsed tunnel.', '两名矿工在坍塌的隧道中窒息而亡。', ['suffocate from smoke'], ['choke', 'drown', 'stifle'], 'verb', '不及物', '健康'],
    ['使窒息；闷住', 'To make somebody or something unable to breathe.', '使某人或某物无法呼吸。', '及物动词，宾语可以是人、动物，也可指闷熄火焰。', 'Thick smoke soon suffocated the fire in the small room.', '浓烟很快把小房间里的火闷灭了。', ['suffocate the fire'], [], 'verb', '及物', '健康'],
  ], 'suffocates~suffocated~suffocated~suffocating', ['choke', 'stifle'], 'brief ←?，自扫根：库内无在库词根（词源 sub- + foc「喉部」，根不在库；-ate 不在 §5.4 清单），留空；家族 choke 噎住、stifle 扼杀入第 10 参，近义 choke、drown 淹死、stifle（队列原样，syn 置义项 1 各恰好一次）');

  W('suffrage', 'noun', '/ˈsʌfrɪdʒ/', '', [], '公民投票的政治权利', 'The right of citizens to vote in elections.', [
    ['选举权；投票权', 'The right given to grown-up people to vote for the people who govern their country.', '给予成年人为其国家统治者投票的权利。', '不可数，正式用语，历史上常与 women 连用。', 'The movement won suffrage for all adult citizens in 1928.', '该运动于 1928 年为全体成年公民赢得了选举权。', ['universal suffrage', 'win suffrage'], ['franchise'], 'noun', 'uncountable', '政治'],
  ], '', ['franchise'], 'brief ←?，自扫根：拉丁语借词（suffragium 支持、投票权），库内无该词根，-age 不在 §5.4 清单；兄弟词 franchise C1（author_f2.js）词首不同段，§5.6 兄弟派生条件不满足，留空；家族/近义 franchise 选举权（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('sugary', 'adjective', '/ˈʃʊɡəri/', 'A1', [], '糖分高的；味道发甜的', 'Full of sugar, as in many snacks and drinks.', [
    ['含糖的；甜腻的', 'Containing a lot of sugar, or having a strong taste of sugar.', '含有大量糖分，或带有浓烈糖味的。', '形容词，可形容食物与饮料，也比喻话语过分讨好。', 'The children avoided the sugary drinks on the table.', '孩子们没有碰桌上的含糖饮料。', ['sugary snacks', 'sugary taste'], ['sweet'], 'adjective', '定语/表语', '饮食'],
  ], '', ['sweet'], 'brief ←?，自扫根：sugar A1 糖（author_s4.js 第 4 参），根词全段可见 + -y（§5.4 条 4b 本轮裁定可继，先例 noisy←noise A1、rosy←rose A1），A1 继承；家族/近义 sweet 甜的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('suggestion', 'noun', '/səˈdʒestʃən/', 'B1', ['CET4'], '建议；暗示', 'Something that a person offers for others to think about.', [
    ['建议；提议', 'An idea or plan that somebody puts forward for others to consider.', '某人提出、供他人考虑的想法或计划。', '可数，常与 to 连用；make a suggestion 表示提出建议。', 'She made a suggestion about changing the meeting date.', '她就更改会议日期提出了一项建议。', ['make a suggestion', 'act on a suggestion'], ['advice', 'hint'], 'noun', 'countable', '通用'],
    ['暗示；启发', 'Something that makes you think about a particular idea or fact without stating it directly.', '不直接言明却让人想到某一事实的事物。', '不可数，常与 of 连用，多见于正式书面语。', 'The report contains no suggestion of any change in policy.', '这份报告没有任何政策将变的迹象。', ['by suggestion'], [], 'noun', 'uncountable', '书面'],
  ], 'suggestions',['suggest'], 'brief ←?，自扫根：suggest B1 建议（author_s4.js 第 4 参），suggest + -ion（词干全段可见，-ion 在 §5.4 清单），B1 继承；近义 advice 建议、hint 暗示（队列原样，置义项 1 各恰好一次）');

  W('suggestive', 'adjective', '/səˈdʒestɪv/', 'B1', ['CET4'], '引起联想的；挑逗的', 'Making you think of something else.', [
    ['引起联想的；使人想到…的', 'Making you think of a particular person, thing or idea.', '让人想到某个特定的人、事物或想法的。', '形容词，常与 of 连用，正式用语。', 'The old photographs are suggestive of a quieter way of life.', '这些老照片让人联想到一种更宁静的生活方式。', ['suggestive of'], ['reminiscent'], 'adjective', '表语', '文化'],
    ['（言语等）挑逗的', 'Making somebody think about sex in an improper way.', '以不恰当的方式让人联想到性的。', '形容词，含贬义，多作定语，常见 suggestive remark。', 'He was warned that the joke sounded suggestive at work.', '他被提醒这句玩笑在工作场合听着带挑逗意味。', ['suggestive remark'], [], 'adjective', '定语', '社交'],
  ], '',['suggest'], 'brief ←?，自扫根：suggest B1 建议（author_s4.js 第 4 参），suggest + -ive（词干全段可见，-ive 在 §5.4 清单），B1 继承；近义 reminiscent 使人联想的（队列原样，置义项 1 恰好一次）');

  W('suitable', 'adjective', '/ˈsuːtəbl/', 'B1', ['CET4'], '合乎用途或对象的', 'Right for a particular job, place or situation.', [
    ['合适的；适宜的', 'Right or good for a particular purpose, person or situation.', '对特定目的、人或情形恰当而良好的。', '形容词，多作表语，常与 for 或 to do 连用。', 'This route is suitable for cyclists and walkers alike.', '这条路线对骑行者和步行者都合适。', ['suitable for', 'suitable candidate'], ['appropriate', 'eligible', 'fit', 'hospitable', 'proper'], 'adjective', '表语', '通用'],
  ], '', ['fit', 'proper'], 'brief ←?，自扫根：suit B1 合适（author_s4.js 第 4 参），suit + -able（-able 在 §5.4 清单），B1 继承；家族 fit 适当的、proper 恰当的入第 10 参，近义 appropriate、eligible、fit、hospitable、proper（队列原样，syn 置唯一义项各恰好一次）');

  W('sultry', 'adjective', '/ˈsʌlstri/', '', [], '又热又闷的天气', 'The kind of weather that feels heavy and sticky.', [
    ['闷热的；湿热的', 'Hot and close, with a lot of moisture in the air and little wind.', '气温高、空气凝滞、湿度大且几乎无风的。', '形容词，形容天气或季节；也可指人富有吸引力的神态。', 'The sultry afternoon kept everyone indoors.', '闷热的下午让所有人都待在室内。', ['sultry weather', 'sultry day'], ['humid'], 'adjective', '定语/表语', '自然'],
  ], '', [], 'brief ←?，自扫根：源自 swelter（闷热），库内无 swelter 在库词根；-y 形容词可继的前提是根词全段可见（§5.4 条 4b），sultr 中无在库词根可切，留空；近义 humid 湿热的（队列原样，置唯一义项恰好一次）');

  W('summarize', 'verb', '/ˈsʌməraɪz/', 'B1', [], '扼要复述要点', 'To give a short account of something.', [
    ['总结；概括', 'To give the most important information about something in a short spoken or written form.', '以简短的口头或书面形式给出某事最重要的信息。', '及物动词，宾语常为报告、故事、情况等。', 'She asked him to summarize the report in two minutes.', '她让他用两分钟概括这份报告。', ['summarize the report', 'briefly summarize'], ['outline', 'sum'], 'verb', '及物', '书面'],
  ], 'summarizes~summarized~summarized~summarizing', ['sum'], 'brief ←?，自扫根：summary B1 摘要（author_s4.js 第 4 参），词干 summar 可见 + y→ize 逆构（同库内 memorizes←memory A2 先例），B1 继承（判断项：逆构词）；家族 sum 总和入第 10 参，近义 outline 概述、sum 概括（队列原样，syn 置唯一义项各恰好一次）');

  W('summertime', 'noun', '/ˈsʌmətaɪm/', 'A1', [], '一年中最暖的季节', 'The period of the year when the weather is hottest.', [
    ['夏季；夏天', 'The warm season of the year, between spring and autumn in the northern hemisphere.', '北半球位于春季与秋季之间、天气温暖的季节。', '不可数，多与 the 连用，也作定语修饰 time、evening 等。', 'We always spent summertime at the coast.', '我们总是在海边度夏。', ['summertime evening'], ['summer'], 'noun', 'uncountable', '自然'],
  ], '', ['summer'], 'brief ←?，自扫根：复合词 summer+time 取首成分（规范 §5.3，run-up←run 先例）summer A1（author_s4.js 第 4 参），语义直连（summertime 即夏天这段时间），A1 继承；家族/近义 summer 夏天（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('sumptuous', 'adjective', '/ˈsʌmptʃuəs/', '', [], '花钱考究而气派的', 'Rich and grand, with plenty of money spent on it.', [
    ['奢华的；丰盛的', 'Very expensive, impressive and generously provided, especially food, clothes or surroundings.', '（尤指食物、服饰或环境）极为昂贵、气派而丰盛的。', '形容词，正式用语，多作定语。', 'The guests sat down to a sumptuous dinner in the grand hall.', '宾客们在宏伟的大厅里享用了一顿奢华的晚餐。', ['sumptuous feast', 'sumptuous surroundings'], ['lavish'], 'adjective', '定语', '饮食'],
  ], '', [], 'brief ←?，自扫根：源自拉丁语 sumptus（花费），库内无 sumptu 在库词根；形虽含 sum 但 -ptuous 非 §5.4 清单后缀，且与 sum（总和、金额）语义不直连，属切词假象（判断项），留空；近义 lavish 奢华而大量的（队列原样，置唯一义项恰好一次）');

  W('sums', 'noun', '/sʌmz/', 'B1', [], '小学阶段的基本计算练习', 'Number work taught at an early stage of schooling.', [
    ['算术题；加减运算（复数）', 'Simple calculations involving addition, subtraction and other basic operations, especially the kind done at school.', '涉及加、减及其他基本运算的简单计算，尤指在学校里做的那种。', 'sum 的复数形式单列词条；作主语时谓语用复数，英式口语 do your sums 表示算账。', 'The children could do simple sums in their heads.', '这些孩子能心算简单的算术题。', ['do your sums', 'simple sums'], ['math'], 'noun', 'countable', '数学'],
  ], '',['sum'], 'brief 根提示 ←sum B1 算术（自扫 author_s4.js 第 4 参复核为 B1），复数 -s 单列词条（formsStr 留空，同本批 suburbs 体例），B1 继承（判断项：-s 不在 §5.4 明示清单，按库内 sales←sale A2 先例）；近义 math 数学（队列原样，置唯一义项恰好一次）');

  W('sung', 'verb/adjective', '/sʌŋ/', 'A1', [], 'sing 的完成分词；歌唱形式的', 'The past form of sing, or lines meant to be sung.', [
    ['（sing 的过去分词）', 'The past participle of the verb sing.', '动词 sing 的过去分词形式。', '不规则变化 sing-sang-sung；常见结构 have sung、been sung。', 'The choir has sung this piece many times.', '合唱团已经多次演唱过这部作品。', ['has sung', 'been sung'], [], 'verb', '及物', '语法'],
    ['歌唱的；为人声写的', 'Written or performed for singing rather than for playing on an instrument.', '为演唱而非乐器演奏而创作或表演的。', '形容词，多作定语，常见 the sung word 等表达。', 'The programme mixed spoken drama with sung verse.', '这个节目把话剧与歌唱的诗句编排在一起。', ['sung verse', 'the sung word'], ['vocal'], 'adjective', '定语', '艺术'],
  ], '',['sing'], 'sung 是 sing 的过去分词单列词条（同库内 seen←see A1、believed←believe A1、done←do A1 体例，formsStr 留空）；brief 显示 ←?，自扫根 sing A1（author_s2.js 第 4 参），A1 继承（判断项：不规则变化，非 -ed/-en 显性后缀，按库内先例）；近义 vocal 人声的、歌唱的（队列原样，置义项 2 恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
