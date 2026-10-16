/* data/words/cet/author_j1.js · 手敲词条 J（一·全批）：jab ~ jut（35 条，含 2 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_j1.js 必须在 _cet_helper.js 之后加载');

  W('jab', 'noun/verb', '/dʒæb/', '', [], '戳；针剂', 'A quick sharp hit, or a shot.', [
    ['戳；针剂', 'A quick sharp hit, or a shot.', '短促的一下，或打一针。', '可数名词或及物动词。', 'The jab stung a little.', '这一针有点疼。', [], ['poke', 'stab', 'stick', 'vaccine'], 'noun/verb', 'null', '健康'],
  ], 'jabs~jabbed~jabbed~jabbing', ['poke', 'vaccine'], '拟声来源、无库内派生根，故留空；家族 poke 戳、vaccine 疫苗，近义 stab 戳刺、stick 戳');

  W('jan', 'noun', '/dʒæn/', '', [], '一月（缩写）', 'Short for January.', [
    ['一月（缩写）', 'Short for January.', 'January 的缩写。', '月份缩写，多见于日期格式。', 'The file is dated 9 jan 2025.', '这份文件日期是 2025 年 1 月 9 日。', [], ['January'], 'noun', 'null', '通用'],
  ], '', [], 'January 的截短形（词形反向包含、非标准派生），故留空；近义 January 一月');

  W('javelin', 'noun', '/ˈdʒævlɪn/', '', [], '标枪', 'A long spear thrown in sport.', [
    ['标枪', 'A long spear thrown in sport.', '运动中投掷的长矛。', '可数。', 'His javelin landed wide.', '他的标枪掷偏了。', [], ['spear'], 'noun', 'countable', '体育'],
  ], 'javelins', [], '法语 javeline——无库内派生根；近义 spear 矛');

  W('jaws', 'noun', '/dʒɔːz/', 'B2', [], '下巴（复数）', 'The mouth bones; plural of jaw.', [
    ['下巴（复数）', 'The mouth bones; plural of jaw.', '下颌；jaw 的复数。', '复数，常指张开的嘴。', 'The shark opened its jaws.', '鲨鱼张开了大嘴。', [], ['mouth'], 'noun', 'countable', '健康'],
  ], '', ['jaw'], '←jaw B2 + -s，B2 继承；近义 mouth 嘴');

  W('jealousy', 'noun', '/ˈdʒeləsi/', 'B1', ['CET4'], '嫉妒', 'Wanting what others have.', [
    ['嫉妒', 'Wanting what others have.', '眼红别人拥有的。', '不可数。', 'Jealousy ruined their friendship.', '嫉妒毁了他们的友谊。', [], ['envy'], 'noun', 'uncountable', '情感'],
  ], '', ['jealous', 'envy'], '←jealous B1 + -y，B1 继承；家族 envy 嫉妒');

  W('jersey', 'noun', '/ˈdʒɜːzi/', '', [], '运动衫', 'A sports shirt.', [
    ['运动衫', 'A sports shirt.', '运动上衣。', '可数。', 'He wore a red jersey.', '他穿着红色球衣。', [], ['shirt'], 'noun', 'countable', '体育'],
  ], 'jerseys', [], '源自泽西岛名——无库内派生根；近义 shirt 衬衫');

  W('jest', 'noun', '/dʒest/', '', [], '玩笑', 'A joke or funny remark.', [
    ['玩笑', 'A joke or funny remark.', '逗趣的话。', '不可数或可数：in jest 开着玩笑。', 'The remark was said in jest.', '这话是开玩笑说的。', ['in jest'], ['joke'], 'noun', 'uncountable/countable', '通用'],
  ], '', ['joke'], '拉丁 jocus——与 joke 同源但词形不可见，故留空；家族 joke 玩笑');

  W('jester', 'noun', '/ˈdʒestə(r)/', '', [], '弄臣', 'A person hired to amuse.', [
    ['弄臣', 'A person hired to amuse.', '受雇逗乐的人。', '可数，历史用语。', 'The jester made the king laugh.', '弄臣逗笑了国王。', [], ['clown'], 'noun', 'countable', '娱乐'],
  ], 'jesters', ['jest'], '←jest（本词库未收）+ -er——词根不可见，故留空；家族 clown 小丑');

  W('jesus', 'noun', '/ˈdʒiːzəs/', '', [], '耶稣', 'The central figure of Christianity.', [
    ['耶稣', 'The central figure of Christianity.', '基督教的核心人物。', '专名，不可数。', 'Jesus taught about mercy.', '耶稣教导仁慈。', [], ['Christ'], 'noun', 'uncountable', '宗教'],
  ], '', ['Christ'], '专名（希伯来语 Yeshua）——无库内派生根；家族 Christ 基督');

  W('jetty', 'noun', '/ˈdʒeti/', '', [], '栈桥', 'A landing stage built into water.', [
    ['栈桥', 'A landing stage built into water.', '伸进水里的码头。', '可数。', 'Boats tie up at the jetty.', '船系在栈桥边。', [], ['wharf'], 'noun', 'countable', '交通'],
  ], 'jetties', [], '法语 jetée——无库内派生根；近义 wharf 码头');

  W('jig', 'noun', '/dʒɪɡ/', '', [], '快步舞', 'A fast lively dance.', [
    ['快步舞', 'A fast lively dance.', '欢快的舞蹈。', '可数。', 'The dancers did a jig.', '舞者跳了一支快步舞。', [], ['reel'], 'noun', 'countable', '娱乐'],
  ], 'jigs', [], '来源不详、无库内派生根，故留空；近义 reel 里尔舞（民间舞）');

  W('jiggle', 'verb', '/ˈdʒɪɡl/', '', [], '摇晃', 'To shake with small quick moves.', [
    ['摇晃', 'To shake with small quick moves.', '小幅度快快地晃。', '及物或不及物。', 'Jiggle the key until it turns.', '钥匙轻轻晃到能转为止。', [], ['shake'], 'verb', '及物', '通用'],
  ], 'jiggles~jiggled~jiggled~jiggling', ['jig'], '拟声重叠（jig）——jig 无级可继，故留空；近义 shake 摇');

  W('jingle', 'noun/verb', '/ˈdʒɪŋɡl/', '', [], '叮当声', 'A light ringing sound.', [
    ['叮当声', 'A light ringing sound.', '清脆的响声。', '可数名词或不及物动词。', 'A jingle played on the radio.', '收音机里放了段广告曲。', [], ['rattle'], 'noun/verb', 'null', '媒体'],
  ], 'jingles~jingled~jingled~jingling', [], '拟声来源、无库内派生根，故留空；近义 rattle 咯咯响');

  W('jobless', 'adjective', '/ˈdʒɒbləs/', 'A1', [], '失业的', 'Without a job.', [
    ['失业的', 'Without a job.', '没有工作的。', 'the jobless 失业者（复数）。', 'The number of jobless workers rose.', '失业工人人数上升。', [], ['unemployed'], 'adjective', '定语', '职业'],
  ], '', ['job', 'unemployed'], '←job A1 + -less（透明后缀），A1 继承；家族 unemployed 失业的');

  W('join in', 'verb', '/dʒɔɪn ɪn/', '', [], '参加', 'To take part in something.', [
    ['参加', 'To take part in something.', '参与到某事里去。', '不及物短语，后接 in。', 'They laughed and joined in too.', '他们笑了，也跟着参与。', [], ['participate'], 'verb', '不及物', '通用'],
  ], '', [], 'join 加入 + in；近义 participate 参与。短语分级留空').phrase = true;

  W('join up', 'verb', '/dʒɔɪn ʌp/', '', [], '参军；联合', 'To join the army or a group.', [
    ['参军；联合', 'To join the army or a group.', '入伍，或并到一起。', '不及物短语。', 'Many volunteered and joined up.', '很多人志愿参了军。', [], ['enlist'], 'verb', '不及物', '军事'],
  ], '', [], 'join 加入 + up；近义 enlist 应征入伍。短语分级留空').phrase = true;

  W('jointly', 'adverb', '/ˈdʒɔɪntli/', 'B2', [], '共同地', 'Together with another.', [
    ['共同地', 'Together with another.', '和别人一起。', '副词。', 'The firms jointly own the port.', '两家公司共同拥有这个港口。', [], ['together'], 'adverb', 'null', '商务'],
  ], '', ['joint', 'together'], '←joint B2 + -ly，B2 继承；家族 together 一起');

  W('joker', 'noun', '/ˈdʒəʊkə(r)/', 'A2', [], '爱开玩笑的人', 'One who likes to joke.', [
    ['爱开玩笑的人', 'One who likes to joke.', '爱逗乐的人。', '可数。', 'Every group has a joker.', '每个团队都有个爱开玩笑的。', [], ['tease'], 'noun', 'countable', '娱乐'],
  ], 'jokers', ['joke'], '←joke A2 + -er（表人），A2 继承；近义 tease 爱捉弄人者（名词义）');

  W('jolt', 'noun/verb', '/dʒəʊlt/', '', [], '颠簸；猛推', 'A sudden rough shake.', [
    ['颠簸；猛推', 'A sudden rough shake.', '突然的猛晃。', '可数名词或及物动词。', 'The bus gave a sudden jolt.', '公交车猛地一颠。', [], ['jar', 'jerk', 'shake'], 'noun/verb', 'null', '通用'],
  ], 'jolts~jolted~jolted~jolting', ['jar', 'jerk'], '拟声来源、无库内派生根，故留空；家族 jar 猛撞、jerk 急动，近义 shake 摇');

  W('jostle', 'verb', '/ˈdʒɒsl/', '', [], '推挤', 'To push against people.', [
    ['推挤', 'To push against people.', '挤撞别人。', '不及物或及物：jostle for 抢。', 'Fans jostled for a better view.', '球迷们推搡着抢好位置。', ['jostle for'], ['elbow', 'scramble'], 'verb', '不及物', '社会'],
  ], 'jostles~jostled~jostled~jostling', ['elbow'], '中古语 jostlen——无库内派生根；家族 elbow 用肘挤，近义 scramble 争抢');

  W('journalistic', 'adjective', '/ˌdʒɜːnəˈlɪstɪk/', 'B1', [], '新闻的', 'About journalism.', [
    ['新闻的', 'About journalism.', '关于新闻业的。', 'journalistic style 新闻笔法。', 'Her journalistic style is crisp.', '她的新闻写作风格很干练。', [], ['editorial'], 'adjective', '定语', '媒体'],
  ], '', ['journal', 'editorial'], '←journal B1 + -istic，B1 继承；家族 editorial 社论');

  W('journalists', 'noun', '/ˈdʒɜːnəlɪsts/', 'B1', [], '记者（复数）', 'Writers for news; plural.', [
    ['记者（复数）', 'Writers for news; plural.', '写新闻的人；journalist 的复数。', '复数。', 'Journalists waited outside.', '记者们在外面等。', [], ['press'], 'noun', 'countable', '媒体'],
  ], '', ['journal'], '←journal B1 + -ist + -s，B1 继承；近义 press 新闻界');

  W('joust', 'noun/verb', '/dʒaʊst/', '', [], '比武', 'A fight on horseback with lances.', [
    ['比武', 'A fight on horseback with lances.', '骑马长矛比试。', '可数名词或不及物动词。', 'Knights jousted at the fair.', '骑士们在集市上比武。', [], ['tournament'], 'noun/verb', 'null', '历史'],
  ], 'jousts~jousted~jousted~jousting', [], '法语 jouter——无库内派生根；近义 tournament 锦标赛（比武义）');

  W('joyful', 'adjective', '/ˈdʒɔɪfl/', 'B1', ['CET4'], '愉快的', 'Full of joy.', [
    ['愉快的', 'Full of joy.', '满怀喜悦的。', '较 glad 书面。', 'The wedding was a joyful day.', '婚礼那天充满喜悦。', [], ['glad'], 'adjective', '定语/表语', '情感'],
  ], '', ['joy'], '←joy B1 + -ful，B1 继承；近义 glad 高兴的');

  W('judgement', 'noun', '/ˈdʒʌdʒmənt/', 'B1', [], '判断', 'The ability to decide well.', [
    ['判断', 'The ability to decide well.', '妥善决断的能力。', '可数或不可数。', 'Good judgement matters here.', '这里很考验判断力。', [], ['eye', 'opinion', 'taste'], 'noun', 'uncountable/countable', '通用'],
  ], 'judgements', ['judge'], '←judge B1 + -ment，B1 继承；近义 eye 眼光（判断力）、opinion 意见、taste 品味；英式拼写，美式 judgment');

  W('judges', 'noun', '/ˈdʒʌdʒɪz/', 'B1', [], '法官们', 'Judges; plural of judge.', [
    ['法官们', 'Judges; plural of judge.', 'judge 的复数（法官或评委）。', '复数。', 'The judges voted yes.', '评委们投了赞成票。', [], ['judiciary', 'jury'], 'noun', 'countable', '法律'],
  ], '', ['judge'], '←judge B1 + -s，B1 继承；近义 judiciary 司法系统、jury 陪审团');

  W('judgment', 'noun', '/ˈdʒʌdʒmənt/', 'B1', [], '裁决', 'A decision given by a court.', [
    ['裁决', 'A decision given by a court.', '法院作出的决定。', '可数。', 'The judgment was appealed.', '裁决被上诉了。', [], ['verdict'], 'noun', 'countable', '法律'],
  ], 'judgments', ['judge', 'verdict'], '←judge B1 + -ment，B1 继承；家族 verdict 裁决；美式拼写，英式 judgement');

  W('jul', 'noun', '/dʒuːl/', '', [], '七月（缩写）', 'Short for July.', [
    ['七月（缩写）', 'Short for July.', 'July 的缩写。', '月份缩写，多见于日期格式。', 'The photo is stamped 12 jul 2019.', '照片上印着 2019 年 7 月 12 日。', [], ['July'], 'noun', 'null', '通用'],
  ], '', [], 'July 的截短形（词形反向包含、非标准派生），故留空；近义 July 七月');

  W('jun', 'noun', '/dʒʌn/', '', [], '六月（缩写）', 'Short for June.', [
    ['六月（缩写）', 'Short for June.', 'June 的缩写。', '月份缩写，多见于日期格式。', 'They married 14 jun 2020.', '他们 2020 年 6 月 14 日结婚。', [], ['June'], 'noun', 'null', '通用'],
  ], '', [], 'June 的截短形（词形反向包含、非标准派生），故留空；近义 June 六月');

  W('juridical', 'adjective', '/dʒʊəˈrɪdɪkl/', '', [], '司法的', 'Of law or courts.', [
    ['司法的', 'Of law or courts.', '关于法律法院的。', '较 judicial 正式罕用。', 'Juridical language is formal.', '司法用语很正式。', [], ['judicial', 'legal'], 'adjective', '定语', '法律'],
  ], '', ['judicial'], '与 judicial 同源但 juri-/judic- 交替不可见，故留空；家族 judicial 司法的，近义 legal 法律的');

  W('jurisprudence', 'noun', '/ˌdʒʊərɪsˈpruːdns/', '', [], '法学', 'The science of law.', [
    ['法学', 'The science of law.', '研究法律的学科。', '不可数，正式。', 'He studies jurisprudence.', '他研究法学。', [], ['law'], 'noun', 'uncountable', '法律'],
  ], '', ['prudence'], 'juris（法律，不在库作词目）+ prudence——首成分缺失，故留空；近义 law 法律');

  W('jurors', 'noun', '/ˈdʒʊərəz/', 'B2', [], '陪审员（复数）', 'Members of a jury; plural.', [
    ['陪审员（复数）', 'Members of a jury; plural.', '陪审团成员；juror 的复数。', '复数。', 'The jurors deliberated for days.', '陪审员们评议了数日。', [], ['jury'], 'noun', 'countable', '法律'],
  ], '', ['jury'], '←jury B2 + -ors（y→ors，同 fury→furious），B2 继承；家族 jury 陪审团');

  W('justification', 'noun', '/ˌdʒʌstɪfɪˈkeɪʃn/', 'B2', ['CET4'], '辩护理由', 'A good reason given.', [
    ['辩护理由', 'A good reason given.', '给出的正当理由。', '可数或不可数。', 'She gave no justification for the change.', '她没为这项改动给出理由。', [], ['excuse', 'warrant'], 'noun', 'uncountable/countable', '通用'],
  ], 'justifications', ['justify'], '←justify B2 + -ation（fy→fication，justif 可见），B2 继承；近义 excuse 借口、warrant 根据');

  W('justified', 'adjective', '/ˈdʒʌstɪfaɪd/', 'B2', [], '正当的', 'Right and fair.', [
    ['正当的', 'Right and fair.', '合理正当的。', 'be justified in 有权…。', 'Her anger was justified.', '她生气是有道理的。', ['be justified in'], ['legitimate'], 'adjective', '表语', '通用'],
  ], '', ['justify'], '←justify B2 + -ed，B2 继承；近义 legitimate 合法的');

  W('jut', 'verb', '/dʒʌt/', '', [], '突出', 'To stick out.', [
    ['突出', 'To stick out.', '伸出凸出。', '不及物：jut out。', 'The rock juts out.', '石头向外突出着。', ['jut out'], ['project'], 'verb', '不及物', '自然'],
  ], 'juts~jutted~jutted~jutting', [], '或与 jet 同源——词形不可见，故留空；近义 project 突出（pron. /prəˈdʒekt/）');

})(typeof window !== 'undefined' ? window : globalThis);
