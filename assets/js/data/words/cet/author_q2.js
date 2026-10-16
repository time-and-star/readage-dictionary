/* data/words/cet/author_q2.js — 常用词 Q 批次 2，缺口 quadrangle ~ quotation，共 18 条
 * （全单词，无短语）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（5 条 CET4：qualification、qualitative、quantitative、questionnaire、quotation）。
 * 扫根结论：qualify B2、quick A2、quiet A2（brief 根提示，quiet 另经 curated A2 确认）；
 * quote B1、quality B1、quantity B1、question A2、angle B2（本批扫描）——
 * · 透明后缀：qualified←qualify B2 + -ed、questionable←question A2 + -able、
 *   quickly←quick A2 + -ly、quietly←quiet A2 + -ly。
 * · 同根继承：qualification←qualify B2 + -ation（qualifi 全段共享，y→i+ication 正字）、
 *   qualitative←quality B1 + -ative（qualit 全段共享，y→∅+ative，-ative 同 -ive 类）、
 *   quantitative←quantity B1 + -ative（quantit 全段共享，同 qualitative 模式）、
 *   quotation←quote B1 + -ation（quot 全段共享；brief 给出的 ←quota[C1] 为拼写相似误配，
 *   语义应接 quote，自行扫根修正）、questionnaire←question A2（question 全段共享）。
 * · 复合/前缀取根：quadrangle←angle B2（quad- 四为黏着前缀不作成分，同 preterm←term 模式）。
 * · 留空项：quarantine（意大利语 quaranta giorni）、quarry、quash（拉丁 quassare）、
 *   quay（法语 quai）、queasy、quell（古英语 cwellan）、quicksilver（quick 在此为古义
 *   「活的」、与今义不直连）、quid（英俚）——均无库内可继根。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_q2.js 必须在 _cet_helper.js 之后加载');

  W('quadrangle', 'noun', '/ˈkwɒdræŋɡl/', 'B2', [], '四边形；四方院', 'A shape with four straight sides, or a square courtyard.', [
    ['四边形；四方院', 'A shape with four straight sides, or a square courtyard surrounded by buildings.', '有四条直边的形状；或四面被建筑围起的方形院子。', '可数。', 'The class met in the east quadrangle.', '全班在东边的四方院集合。', [], ['square'], 'noun', 'countable', '通用'],
  ], 'quadrangles',['angle'], 'quad-（四）为黏着前缀不作成分，取其后词根 angle B2（同 preterm←term 模式），B2 继承（brief 显示 ←?，自行扫根 angle）；近义 square 正方形、四方');

  W('qualification', 'noun', '/ˌkwɒlɪfɪˈkeɪʃn/', 'B2', ['CET4'], '资格；资质', 'An official record of passing a course or exam, or a needed skill.', [
    ['资格；资质', 'An official record of passing a course or exam, or the skill needed for a job.', '通过课程或考试的正式证明；或从事某工作所需的技能。', '可数。', 'The role requires a teaching qualification.', '该职位需要教学资格。', [], ['credential', 'degree'], 'noun', 'countable', '职业'],
  ], 'qualifications', ['credential', 'qualify'], '←qualify B2 + -ation（qualifi 全段共享，y→i+ication 正字同 possible→possibility 类），B2 继承（brief 显示 ←?，经 qualified←qualify[B2] 根提示确认）；家族 credential 资质、qualify，近 credential 资历、degree 学位');

  W('qualified', 'adjective', '/ˈkwɒlɪfaɪd/', 'B2', [], '合格的；有资格的', 'Having the skills or qualities needed for a job or task.', [
    ['合格的；有资格的', 'Having the skills or qualities needed for a job or task.', '具备工作或任务所需技能或素质的。', '多作定语，常与 for 连用。', 'Only qualified staff may operate it.', '只有合格员工才能操作它。', [], ['competent', 'eligible'], 'adjective', '定语', '职业'],
  ], '', ['competent', 'eligible', 'qualify'], '←qualify B2 + -ed（分词形容词），B2 继承（brief 根提示）；家族 competent 能胜任的、eligible 符合条件的、qualify，近义同');

  W('qualitative', 'adjective', '/ˈkwɒlɪtətɪv/', 'B1', ['CET4'], '定性的；质性的', 'Relating to the quality of something rather than quantities.', [
    ['定性的；质性的', 'Relating to the quality of something rather than quantities.', '关于事物质量而非数量的。', '多作定语。', 'The study used qualitative interviews.', '该研究采用了定性访谈。', [], [], 'adjective', '定语', '科学'],
  ], '', ['quality'], '←quality B1 + -ative（qualit 全段共享，y→∅+ative，-ative 同 -ive 类），B1 继承（brief 显示 ←?，自行扫根 quality）；家族 quality 质量、性质');

  W('quantitative', 'adjective', '/ˈkwɒntɪtətɪv/', 'B1', ['CET4'], '定量的；数量的', 'Relating to measuring amounts or numbers.', [
    ['定量的；数量的', 'Relating to measuring amounts or numbers.', '与测量数量或数目有关的。', '多作定语。', 'We need quantitative data first.', '我们需要先拿到定量数据。', [], ['numerical'], 'adjective', '定语', '科学'],
  ], '',['numerical', 'quantify', 'quantity'], '←quantity B1 + -ative（quantit 全段共享，同 qualitative←quality 模式），B1 继承（brief 显示 ←?，自行扫根 quantity；队列家族 quantify 同根）；近义 numerical 数值的、定量的');

  W('quarantine', 'noun/verb', '/ˈkwɒrəntiːn/', '', [], '检疫隔离期；隔离', 'A period when a person or animal is kept apart to prevent disease.', [
    ['检疫隔离期', 'A period when a person or animal is kept apart to prevent the spread of disease.', '为防止疾病传播而将人或动物分开的时期。', '可数或不可数。', 'The cat stayed in quarantine for two weeks.', '猫在隔离期待了两周。', [], ['isolate'], 'noun', 'countable', '健康'],
    ['隔离；检疫', 'To keep a person or animal apart to prevent the spread of disease.', '为防止疾病传播而将人或动物隔离。', '可及物。', 'They quarantined the sick birds.', '他们隔离了病禽。', [], ['isolate'], 'verb', '及物', '健康'],
  ], 'quarantines~quarantined~quarantined~quarantining', ['isolate'], '意大利语 quaranta giorni（四十日）——与 isolate 无词形对应，留空；家族/近义 isolate 隔离、隔离检疫');

  W('quarry', 'noun', '/ˈkwɒri/', '', [], '采石场；猎物', 'A place where stone is dug out, or an animal that is hunted.', [
    ['采石场', 'A place where stone is dug out of the ground.', '从地下开采石头的地方。', '可数。', 'The quarry supplies stone for roads.', '这座采石场为道路供应石料。', [], ['mine'], 'noun', 'countable', '工业'],
    ['猎物', 'An animal or bird that is hunted.', '被追捕的动物或鸟。', '可数。', 'The eagle circled above its quarry.', '鹰在猎物上方盘旋。', [], ['game', 'prey'], 'noun', 'countable', '自然'],
  ], 'quarries', [], '无库内可见词根，留空；近义 mine 采石场、game 猎物、prey 捕获物');

  W('quash', 'verb', '/kwɒʃ/', '', [], '废止；镇压', 'To put an end to a claim, decision, or rebellion.', [
    ['废止；撤销', 'To reject or put an end to a decision or claim.', '拒绝或终止某决定或主张。', '及物。', 'The court quashed the earlier verdict.', '法院废止了早前的判决。', [], ['overturn'], 'verb', '及物', '法律'],
    ['镇压；平息', 'To stop a rebellion or disturbance by force.', '以武力制止叛乱或骚乱。', '及物。', 'Troops moved to quash the uprising.', '军队出动镇压起义。', [], ['extinguish'], 'verb', '及物', '政治'],
  ], 'quashes~quashed~quashed~quashing', [], '拉丁 quassare（摇碎）——无库内可见词根，留空；近义 overturn 废止、推翻，extinguish 镇压、扑灭');

  W('quay', 'noun', '/kiː/', '', [], '码头；岸边', 'A place beside the water where ships are tied up.', [
    ['码头；岸边', 'A place beside the water where ships are tied up.', '船停靠的水边场所。', '可数。', 'The ferry tied up at the quay.', '渡轮停靠在码头。', [], ['wharf'], 'noun', 'countable', '交通'],
  ], 'quays', [], '法语 quai（码头）——无库内可见词根（读同 key），留空；近义 wharf 码头、泊位');

  W('queasy', 'adjective', '/ˈkwiːzi/', '', [], '反胃的；恶心的', 'Feeling sick in the stomach.', [
    ['反胃的；恶心的', 'Feeling sick in the stomach.', '胃里感到恶心的。', '定语或表语。', 'The boat ride left her feeling queasy.', '乘船让她感到反胃。', [], ['sick'], 'adjective', '定语/表语', '健康'],
  ], '', [], '无库内可见词根，留空；近义 sick 反胃的、恶心的');

  W('quell', 'verb', '/kwel/', '', [], '平息；镇压', 'To stop a fire, fear, or rebellion.', [
    ['平息；镇压', 'To stop something such as a fire, fear, or rebellion from continuing.', '制止如火灾、恐惧或叛乱之类的事继续。', '及物。', 'Officials moved quickly to quell the rumors.', '官员迅速行动平息谣言。', [], ['suppress'], 'verb', '及物', '政治'],
  ], 'quells~quelled~quelled~quelling', ['suppress'], '古英语 cwellan（杀死）——与 suppress 无词形对应，留空；家族/近义 suppress 平息、压制');

  W('questionable', 'adjective', '/ˈkwestʃənəbl/', 'A2', [], '可疑的；值得怀疑的', 'Doubtful or likely to be wrong.', [
    ['可疑的；值得怀疑的', 'Doubtful or likely to be wrong.', '可疑的；可能有错的。', '多作定语。', 'The figures look highly questionable.', '这些数字看起来很可疑。', [], ['dubious'], 'adjective', '定语', '通用'],
  ], '',['question'], '←question A2 + -able（透明后缀），A2 继承（brief 显示 ←?，自行扫根 question）；近义 dubious 可疑的、怀疑的');

  W('questionnaire', 'noun', '/ˌkwestʃəˈneə/', 'A2', ['CET4'], '问卷；调查表', 'A written set of questions used to collect information.', [
    ['问卷；调查表', 'A written set of questions used to collect information.', '为收集信息而编写的一组问题。', '可数。', 'She distributed a short questionnaire.', '她分发了一份简短问卷。', [], ['form', 'survey'], 'noun', 'countable', '通用'],
  ], 'questionnaires',['question'], '←question A2（question 全段共享，-naire 非透明清单项，按复合词取首成分规则继承），A2 继承（brief 显示 ←?，自行扫根 question）；近义 form 表格、survey 调查');

  W('quickly', 'adverb', '/ˈkwɪkli/', 'A2', [], '快速地；不久', 'At a fast speed, or without delay.', [
    ['快速地；不久', 'At a fast speed, or without delay.', '以快速度；或毫不拖延地。', '修饰动词。', 'The team responded quickly.', '团队迅速响应了。', [], ['fast', 'quick'], 'adverb', '不及物', '通用'],
  ], '', ['quick'], '←quick A2 + -ly（透明后缀），A2 继承（brief 根提示）；家族 quick 快的，近 fast 快速的、quick');

  W('quicksilver', 'noun', '/ˈkwɪksɪlvə/', '', [], '水银；汞', 'Another name for the liquid metal mercury.', [
    ['水银；汞', 'Another name for the liquid metal mercury.', '液态金属汞的另一名称。', '不可数。', 'Quicksilver once filled old thermometers.', '水银曾装满旧温度计。', [], ['mercury'], 'noun', 'uncountable', '科学'],
  ], '', ['mercury'], 'quick + silver（历史语义「活的银」）——quick 在此为古义、与今义「快的」不直连（保守同 placard 先例），留空；家族/近义 mercury 水银、汞');

  W('quid', 'noun', '/kwɪd/', '', [], '一英镑（俚语）', 'A pound sterling in British informal speech.', [
    ['一英镑（俚语）', 'A pound sterling in British informal speech.', '英国口语中的一英镑。', '可数，单复数同形。', 'A pint costs a quid here.', '这里一品脱花一镑。', [], ['pound'], 'noun', 'countable', '口语'],
  ], '', [], '英俚 quid（一英镑）——无库内可见词根，留空；近义 pound 英镑');

  W('quietly', 'adverb', '/ˈkwaɪətli/', 'A2', [], '轻柔地；安静地', 'Without making much noise, or in a calm way.', [
    ['轻柔地；安静地', 'Without making much noise, or in a calm way.', '不发出太多声音地；或平静地。', '修饰动词。', 'She closed the door quietly.', '她轻轻关上了门。', [], ['piano', 'quiet'], 'adverb', '不及物', '通用'],
  ], '', ['quiet'], '←quiet A2 + -ly（透明后缀），A2 继承（brief 根提示，curated quiet A2 确认）；家族 quiet 安静的，近 piano 轻柔地（音乐用语）、quiet');

  W('quotation', 'noun', '/kwəʊˈteɪʃn/', 'B1', ['CET4'], '引用；报价', 'A phrase taken from a book, or a statement of price.', [
    ['引用；引语', 'A phrase or passage taken from a book or speech.', '从书或讲话中取的短语或段落。', '可数。', 'He opened with a quotation from the novel.', '他以一段小说引用开场。', [], ['quote'], 'noun', 'countable', '通用'],
    ['报价；估价', 'A statement of the price for a service or job.', '对服务或工作所报价格的说明。', '可数。', 'Ask the supplier for a formal quotation.', '向供应商索取正式报价。', [], [], 'noun', 'countable', '商务'],
  ], 'quotations', ['quote'], '←quote B1 + -ation（quot 全段共享，e→∅+ation 同 -ion 类），B1 继承（brief 显示 ←quota[C1]，为拼写相似误配，语义应接 quote——自行扫根 quote 确认 B1）；家族/近义 quote 引用、报价');
})(typeof window !== 'undefined' ? window : globalThis);
