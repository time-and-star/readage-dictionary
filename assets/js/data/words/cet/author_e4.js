/* data/words/cet/author_e4.js · 手敲词条 E（四·前段）：enclosure ~ entitled（含短语 end up）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_e4.js 必须在 _cet_helper.js 之后加载');

  W('enclosure', 'noun', '/ɪnˈkləʊʒə(r)/', '', ['CET6'], '围地；附件', 'An area shut in by a fence, or something added to a letter.', [
    ['围地；附件', 'An area shut in by a fence, or something added to a letter.', '用栅栏围起的区域，或信中附上的东西。', '可数。', 'The horses stayed in the enclosure.', '马待在围栏里。', [], ['pen'], 'noun', 'countable', '通用'],
  ], 'enclosures', ['closure'], 'en- + closure——closure 不在库（直接关联词缺失），故留空；近义 pen 围栏（圈地）');

  W('encode', 'verb', '/ɪnˈkəʊd/', 'B1', [], '编码；译成密码', 'To change information into a code.', [
    ['编码；译成密码', 'To change information into a code.', '把信息变成代码。', '及物：encode as。', 'The message was encoded.', '消息被加密了。', [], ['scramble'], 'verb', '及物', '科学'],
  ], 'encodes~encoded~encoded~encoding', ['code'], '←code B1 + en-（使…），B1 继承；近义 scramble 扰乱（使信号杂乱）');

  W('encroach', 'verb', '/ɪnˈkrəʊtʃ/', '', [], '侵犯；蚕食', 'To gradually take over what belongs to others.', [
    ['侵犯；蚕食', 'To gradually take over what belongs to others.', '逐渐侵占属于别人的东西。', '不及物：encroach on/upon。', 'They encroached on our land.', '他们侵占了我们的土地。', ['encroach on'], ['infringe'], 'verb', '不及物', '法律'],
  ], 'encroaches~encroached~encroached~encroaching', ['encroachment'], 'encroachment 是名词，指侵占或蚕食；近义 infringe 侵犯（权利）。分级留空。');

  W('end up', 'verb', '/ˌend ˈʌp/', '', [], '以…告终；最终', 'To finish in a particular state or place.', [
    ['以…告终；最终', 'To finish in a particular state or place.', '最终处于某种状态或到达某地。', '不及物短语：end up doing / in。', 'We ended up staying at home.', '我们最后待在了家里。', ['end up doing'], ['land'], 'verb', '不及物', '通用'],
  ], '', ['land'], 'end 结束 + up 完全；近义 land 落得（land up 落到…地步）。短语分级留空').phrase = true;

  W('ending', 'noun', '/ˈendɪŋ/', 'A1', ['CET4'], '结尾；结局', 'The last part of a story, film, or event.', [
    ['结尾；结局', 'The last part of a story, film, or event.', '故事、电影或事件的最后部分。', '可数：happy ending。', 'The film has a sad ending.', '这部电影结局悲伤。', ['happy ending'], ['finish'], 'noun', 'countable', '文化'],
  ], 'endings', ['end'], '←end A1 + -ing（表物），A1 继承；近义 finish 结束（终点义）');

  W('endless', 'adjective', '/ˈendləs/', 'A1', ['CET4'], '无尽的；没完没了的', 'Having no end; seeming to last forever.', [
    ['无尽的；没完没了的', 'Having no end; seeming to last forever.', '没有尽头、似乎永远持续的。', 'endless questions 没完没了的问题。', 'The meeting seemed endless.', '会议似乎没完没了。', [], ['eternal', 'infinite'], 'adjective', '定语/表语', '通用'],
  ], '', ['end', 'infinite'], '←end A1 + -less，A1 继承；家族 infinite 无限的，近义 eternal 永恒的');

  W('endurance', 'noun', '/ɪnˈdjʊərəns/', 'B1', ['CET4'], '忍耐力；持久力', 'The ability to keep doing something hard for a long time.', [
    ['忍耐力；持久力', 'The ability to keep doing something hard for a long time.', '长期坚持做困难事的能力。', '不可数。', 'The race tested their endurance.', '比赛考验了他们的耐力。', [], ['marathon'], 'noun', 'uncountable', '体育'],
  ], '', ['endure', 'marathon'], '←endure B1 忍耐 + -ance，B1 继承；家族 marathon 马拉松（耐力象征）');

  W('enduring', 'adjective', '/ɪnˈdjʊərɪŋ/', 'B1', [], '持久的；忍耐的', 'Lasting a long time, or bearing hardship.', [
    ['持久的；忍耐的', 'Lasting a long time, or bearing hardship.', '持续很久的，或忍受艰苦的。', '分词形容词。', 'Their enduring friendship impressed us.', '他们持久的友谊让我们感动。', [], ['durable', 'permanent'], 'adjective', '定语', '情感'],
  ], '', ['endure'], '←endure B1 + -ing，B1 继承；近义 durable 耐用的、permanent 永久的');

  W('energetic', 'adjective', '/ˌenəˈdʒetɪk/', 'A2', ['CET4'], '精力充沛的', 'Full of energy and enthusiasm.', [
    ['精力充沛的', 'Full of energy and enthusiasm.', '充满精力和热情的。', 'an energetic child 精力旺盛的孩子。', 'The energetic dog runs all day.', '这只精力充沛的狗整天跑。', [], ['active', 'dynamic', 'fresh', 'lively'], 'adjective', '定语/表语', '健康'],
  ], '', ['energy', 'dynamic', 'lively'], '←energy A2 + -etic（y→etic），A2 继承；家族 dynamic 有活力的、lively 活泼的，近义 active 活跃的、fresh 精神的');

  W('engineering', 'noun', '/ˌendʒɪˈnɪərɪŋ/', 'A2', ['CET4'], '工程学；工程', 'The work of designing and building machines or structures.', [
    ['工程学；工程', 'The work of designing and building machines or structures.', '设计建造机器或建筑的工作。', '不可数：study engineering。', 'She studied engineering at college.', '她在大学学工程。', ['study engineering'], ['technology'], 'noun', 'uncountable', '教育'],
  ], '', ['engineer'], '←engineer A2 + -ing，A2 继承；近义 technology 技术（应用科学）');

  W('engross', 'verb', '/ɪnˈɡrəʊs/', '', [], '使全神贯注', 'To take all of your attention.', [
    ['使全神贯注', 'To take all of your attention.', '占据你的全部注意。', '及物，常被动 be engrossed in。', 'The book engrossed her for hours.', '这本书让她入迷了好几小时。', ['engrossed in'], ['immerse', 'preoccupy'], 'verb', '及物', '文化'],
  ], 'engrosses~engrossed~engrossed~engrossing', [], 'en- + gross——语义非透明复合（gross 无法组合出专注义），故留空；近义 immerse 沉浸、preoccupy 占据心思');

  W('engrossment', 'noun', '/ɪnˈɡrəʊsmənt/', '', [], '全神贯注', 'Complete attention to something.', [
    ['全神贯注', 'Complete attention to something.', '对某事完全的专注。', '不可数，正式。', 'He read with engrossment.', '他全神贯注地读。', [], ['absorption'], 'noun', 'uncountable', '文化'],
  ], '', ['engross'], '←engross（本批新词、无等级）+ -ment，故仍留空；近义 absorption 专注');

  W('engulf', 'verb', '/ɪnˈɡʌlf/', 'C1', [], '吞没；席卷', 'To cover or swallow something completely.', [
    ['吞没；席卷', 'To cover or swallow something completely.', '完全盖住或吞掉某物。', '及物，常被动。', 'Flames engulfed the house.', '火焰吞没了房子。', [], ['devour', 'immerse', 'submerge', 'suck'], 'verb', '及物', '自然'],
  ], 'engulfs~engulfed~engulfed~engulfing', ['gulf'], '←gulf C1 海湾 + en-（使进入…，同 encircle），C1 继承；近义 devour 吞食、immerse 浸没、submerge 淹没、suck 吸入');

  W('enigma', 'noun', '/ɪˈnɪɡmə/', '', [], '谜；难解的人', 'Something or someone hard to understand.', [
    ['谜；难解的人', 'Something or someone hard to understand.', '难懂的事或人。', '可数。', 'Her past remains an enigma.', '她的过去仍是个谜。', [], ['riddle'], 'noun', 'countable', '文化'],
  ], 'enigmas', [], '希腊语 ainigma——无库内派生根；近义 riddle 谜语。分级留空');

  W('enjoyable', 'adjective', '/ɪnˈdʒɔɪəbl/', 'A1', ['CET4'], '愉快的', 'Giving pleasure.', [
    ['愉快的', 'Giving pleasure.', '给人快乐的。', 'an enjoyable evening 愉快的夜晚。', 'We had an enjoyable trip.', '我们旅行很愉快。', [], ['fun'], 'adjective', '定语/表语', '情感'],
  ], '', ['enjoy'], '←enjoy A1 + -able，A1 继承；近义 fun 有趣的（常用）');

  W('enjoyment', 'noun', '/ɪnˈdʒɔɪmənt/', 'A1', ['CET4'], '乐趣；享受', 'Pleasure you get from something.', [
    ['乐趣；享受', 'Pleasure you get from something.', '从某事得到的快乐。', '可数或不可数：get enjoyment from。', 'He gets enjoyment from music.', '他从音乐中得到乐趣。', ['get enjoyment from'], ['fun', 'relish'], 'noun', 'uncountable/countable', '情感'],
  ], '', ['enjoy', 'fun'], '←enjoy A1 + -ment，A1 继承；家族 fun 乐趣（最常用），近义 relish 津津有味');

  W('enliven', 'verb', '/ɪnˈlaɪvn/', 'A1', [], '使活跃；使生动', 'To make something more lively or interesting.', [
    ['使活跃；使生动', 'To make something more lively or interesting.', '使某物更活跃有趣。', '及物。', 'Music enlivened the party.', '音乐让聚会热闹起来。', [], ['jazz'], 'verb', '及物', '文化'],
  ], 'enlivens~enlivened~enlivened~enlivening', ['live', 'jazz'], '←live A1 + en-…-n（使活跃），A1 继承；家族 jazz 爵士乐（jazz up 使生动）');

  W('ennoble', 'verb', '/ɪˈnəʊbl/', 'B2', [], '使高贵；封爵', 'To make noble, or to give a title to someone.', [
    ['使高贵；封爵', 'To make noble, or to give a title to someone.', '使高尚，或授予爵位。', '及物，正式。', 'The king ennobled him.', '国王封他为爵士。', [], ['knight'], 'verb', '及物', '政治'],
  ], 'ennobles~ennobled~ennobled~ennobling', ['noble'], '←noble B2 高贵的 + en-（使…），B2 继承；近义 knight 封为骑士');

  W('enrolment', 'noun', '/ɪnˈrəʊlmənt/', 'B1', [], '入学；注册', 'The act of joining a school or course.', [
    ['入学；注册', 'The act of joining a school or course.', '加入学校或课程的行为。', '不可数或可数；美式拼 enrollment。', 'Enrolment starts in June.', '六月开始招生注册。', [], ['intake'], 'noun', 'uncountable/countable', '教育'],
  ], 'enrolments', ['enrol'], '←enrol B1 注册 + -ment，B1 继承；近义 intake 招生');

  W('ensemble', 'noun', '/ɒnˈsɒmbl/', '', [], '合奏团；整体', 'A group of musicians playing together, or things seen as a whole.', [
    ['合奏团；整体', 'A group of musicians playing together, or things seen as a whole.', '一起演奏的乐手群，或被看作整体的事物。', '可数。', 'A jazz ensemble played.', '一支爵士乐团演奏了。', [], ['orchestra'], 'noun', 'countable', '艺术'],
  ], 'ensembles', [], '法语 ensemble（一道）——无库内派生根；近义 orchestra 管弦乐团。分级留空');

  W('ensign', 'noun', '/ˈensaɪn/', '', [], '军旗；少尉', 'A flag on a ship, or a low navy rank.', [
    ['军旗；少尉', 'A flag on a ship, or a low navy rank.', '船上的旗，或海军低阶军衔。', '可数。', 'The ensign flew at the stern.', '军旗在船尾飘扬。', [], ['flag'], 'noun', 'countable', '军事'],
  ], 'ensigns', [], 'en- + sign——语义非透明（sign 无法组合出军旗义），故留空；近义 flag 旗');

  W('ensuing', 'adjective', '/ɪnˈsjuːɪŋ/', 'B2', [], '接下来的', 'Happening after an event.', [
    ['接下来的', 'Happening after an event.', '某事件之后发生的。', '分词形容词：the ensuing debate。', 'The ensuing silence was awkward.', '随后的沉默很尴尬。', [], ['subsequent'], 'adjective', '定语', '通用'],
  ], '', ['ensue'], '←ensue B2 接着发生 + -ing，B2 继承；近义 subsequent 随后的');

  W('entangle', 'verb', '/ɪnˈtæŋɡl/', 'C1', [], '使纠缠；卷入', 'To twist together, or involve someone in difficulty.', [
    ['使纠缠；卷入', 'To twist together, or involve someone in difficulty.', '缠在一起，或使人卷入麻烦。', '及物：entangle in。', 'He got entangled in debt.', '他陷入了债务。', ['entangled in'], ['complicate', 'involve', 'tangle', 'web'], 'verb', '及物', '通用'],
  ], 'entangles~entangled~entangled~entangling', ['tangle', 'complicate'], '←tangle C1 纠结 + en-（使…），C1 继承；家族 complicate 使复杂，近义 involve 牵涉、tangle 纠缠、web 罗网');

  W('enthrone', 'verb', '/ɪnˈθrəʊn/', 'C1', [], '使登基；拥立', 'To put someone on a throne as king or queen.', [
    ['使登基；拥立', 'To put someone on a throne as king or queen.', '让人登上王位。', '及物，正式。', 'The people enthroned a new king.', '人们拥立了新王。', [], ['crown'], 'verb', '及物', '政治'],
  ], 'enthrones~enthroned~enthroned~enthroning', ['throne', 'crown'], '←throne C1 王座 + en-（使登上…），C1 继承；家族 crown 王冠（加冕）');

  W('enthusiast', 'noun', '/ɪnˈθjuːziæst/', '', ['CET4'], '热心人；爱好者', 'A person who loves an activity very much.', [
    ['热心人；爱好者', 'A person who loves an activity very much.', '非常热爱某项活动的人。', '可数。', 'He is a football enthusiast.', '他是个足球迷。', [], ['addict', 'fan', 'nut'], 'noun', 'countable', '文化'],
  ], 'enthusiasts', ['enthusiasm', 'fan'], '←enthusiasm B1（同源 -asm/-ast 姐妹派生，非直接可见派生，同 dominion 模式），故留空；家族 fan 粉丝（最常用），近义 addict 沉迷者、nut 狂热者（口语）');

  W('enthusiastic', 'adjective', '/ɪnˌθjuːziˈæstɪk/', '', ['CET4'], '热情的', 'Full of excitement and interest.', [
    ['热情的', 'Full of excitement and interest.', '充满激动和兴趣的。', 'be enthusiastic about。', 'They are enthusiastic about sports.', '他们热衷体育。', ['enthusiastic about'], ['eager', 'keen', 'mad', 'wild'], 'adjective', '定语/表语', '情感'],
  ], '', ['enthusiast', 'eager'], '←enthusiast（本批新词、无等级）+ -ic，故仍留空；家族 eager 热切的（B1），近义 keen 热衷的、mad 发狂的（口语）、wild 狂热的');

  W('entice', 'verb', '/ɪnˈtaɪs/', '', [], '诱使；引诱', 'To attract someone to do something by offering pleasure.', [
    ['诱使；引诱', 'To attract someone to do something by offering pleasure.', '以乐事吸引某人去做。', '及物：entice into。', 'Ads entice people into buying.', '广告诱人购买。', ['entice into'], ['lure', 'seduce', 'tempt'], 'verb', '及物', '商务'],
  ], 'entices~enticed~enticed~enticing', [], '古法语 enticier——无库内派生根；近义 lure 引诱、seduce 勾引、tempt 诱惑。分级留空');

  W('entirely', 'adverb', '/ɪnˈtaɪəli/', 'A2', [], '完全地', 'Completely.', [
    ['完全地', 'Completely.', '十足地。', '副词，修饰动词形容词。', 'I entirely agree.', '我完全同意。', [], ['altogether', 'absolutely'], 'adverb', 'null', '通用'],
  ], '', ['entire'], '←entire A2 全部的 + -ly，A2 继承；近义 altogether 总共、absolutely 绝对地');

  W('entirety', 'noun', '/ɪnˈtaɪərəti/', 'A2', ['CET4'], '全部；总体', 'The whole of something.', [
    ['全部；总体', 'The whole of something.', '某物的整体。', '不可数：in its entirety（完整地）。', 'He watched the film in its entirety.', '他完整地看了这部电影。', ['in its entirety'], ['whole'], 'noun', 'uncountable', '通用'],
  ], '', ['entire'], '←entire A2 + -ty，A2 继承；近义 whole 全部');

  W('entitled', 'adjective', '/ɪnˈtaɪtld/', 'B1', [], '有资格的；题为…的', 'Having the right to something, or with a title.', [
    ['有资格的；题为…的', 'Having the right to something, or with a title.', '有权利做某事的，或题名为…的。', '分词形容词：be entitled to。', 'You are entitled to a refund.', '你有权退款。', ['entitled to'], ['eligible'], 'adjective', '表语', '法律'],
  ], '', ['entitle', 'eligible'], '←entitle B1 授权 + -ed，B1 继承；家族 eligible 合格的');

  W('entitlement', 'noun', '/ɪnˈtaɪtlmənt/', 'B1', [], '权利；津贴', 'The right to have something, or money the state pays you.', [
    ['权利；津贴', 'The right to have something, or money the state pays you.', '拥有某物的权利，或国家发的津贴。', '可数或不可数。', 'They cut unemployment entitlement.', '他们削减了失业津贴。', [], ['right'], 'noun', 'uncountable/countable', '法律'],
  ], 'entitlements', ['entitle', 'right'], '←entitle B1 + -ment，B1 继承；家族 right 权利');

  W('entrails', 'noun', '/ˈentreɪlz/', '', [], '内脏', 'The tubes inside an animal body; guts.', [
    ['内脏', 'The tubes inside an animal body; guts.', '动物体内的肠管；肚肠。', '复数。', 'The hunter cleaned the entrails.', '猎人清理了内脏。', [], ['gut'], 'noun', 'countable', '饮食'],
  ], '', [], '古法语 entrailles——trail 语义无关，故留空；近义 gut 肠（口语）。分级留空');

  W('entrance', 'noun', '/ˈentrəns/', '', ['CET4'], '入口；进入', 'A door or place to enter, or the act of entering.', [
    ['入口；进入', 'A door or place to enter, or the act of entering.', '进门或进入的地方，或进入的行为。', '可数。', 'The entrance is on the left.', '入口在左边。', [], ['access', 'door', 'gate', 'hall', 'mouth', 'threshold'], 'noun', 'countable', '家居'],
  ], 'entrances', ['access', 'gate', 'porch'], 'enter 进入（词形上 enter 不可见于 entrance，同 courteous 模式），故留空；家族 access 通道、gate 大门、porch 门廊，近义 door 门、hall 大厅、mouth 洞口、threshold 门槛');

  W('entrench', 'verb', '/ɪnˈtrentʃ/', 'C1', [], '使根深蒂固；挖战壕', 'To fix firmly, or dig ditches for defence.', [
    ['使根深蒂固；挖战壕', 'To fix firmly, or dig ditches for defence.', '牢牢固定，或挖防御壕。', '及物，常被动 be entrenched。', 'The custom is deeply entrenched.', '这习俗根深蒂固。', ['deeply entrenched'], ['embed'], 'verb', '及物', '军事'],
  ], 'entrenches~entrenched~entrenched~entrenching', ['trench', 'embed'], '←trench C1 战壕 + en-（使进入…），C1 继承；家族 embed 嵌入');

  W('entry', 'noun', '/ˈentri/', '', ['CET4'], '进入；条目；参赛', 'The act of entering, an item in a list, or joining a contest.', [
    ['进入；条目；参赛', 'The act of entering, an item in a list, or joining a contest.', '进入的行为、清单中的一条，或参赛。', '可数或不可数：no entry（禁止入内）。', 'There is no entry after ten.', '十点后禁止入内。', ['no entry'], ['access', 'input', 'item', 'visa'], 'noun', 'uncountable/countable', '通用'],
  ], 'entries', ['access', 'accessible'], '与 enter 同源姐妹词（entry≠enter+y），故留空；家族 access 进入、accessible 可进入的，近义 input 输入、item 条款、visa 签证');

  W('enumerate', 'verb', '/ɪˈnjuːməreɪt/', '', [], '列举；数', 'To name things one by one.', [
    ['列举；数', 'To name things one by one.', '逐一说出事物。', '及物，正式。', 'She enumerated the reasons.', '她列举了理由。', [], ['recite'], 'verb', '及物', '书面'],
  ], 'enumerates~enumerated~enumerated~enumerating', [], '拉丁 numerus（数）——number 缺 b 不可见，故留空；近义 recite 背诵。分级留空');

  W('envious', 'adjective', '/ˈenviəs/', 'B1', ['CET4'], '羡慕的；嫉妒的', 'Wanting what others have.', [
    ['羡慕的；嫉妒的', 'Wanting what others have.', '想要别人拥有的东西。', 'be envious of。', 'They were envious of her success.', '他们羡慕她的成功。', ['envious of'], ['jealous'], 'adjective', '定语/表语', '情感'],
  ], '', ['envy', 'jealous'], '←envy B1 羡慕 + -ous（y→ious），B1 继承；家族 jealous 嫉妒的');

  W('equalize', 'verb', '/ˈiːkwəlaɪz/', 'A2', [], '使均等；扳平', 'To make things equal.', [
    ['使均等；扳平', 'To make things equal.', '使事物相等。', '及物：equalize the score（扳平比分）。', 'They equalized in the last minute.', '他们在最后一分钟扳平了。', ['equalize the score'], ['even'], 'verb', '及物', '体育'],
  ], 'equalizes~equalized~equalized~equalizing', ['equal'], '←equal A2 + -ize，A2 继承；近义 even 拉平（比分打平）');

  W('equally', 'adverb', '/ˈiːkwəli/', 'A2', ['CET4'], '同样地；平等地', 'In the same way or amount.', [
    ['同样地；平等地', 'In the same way or amount.', '以相同方式或数量。', '副词。', 'They share the cost equally.', '他们平摊费用。', [], ['same'], 'adverb', 'null', '通用'],
  ], '', ['equal'], '←equal A2 + -ly，A2 继承；近义 same 同样');

  W('equation', 'noun', '/ɪˈkweɪʒn/', 'B2', ['CET6'], '等式；方程', 'A maths statement with an equals sign.', [
    ['等式；方程', 'A maths statement with an equals sign.', '带等号的数学表述。', '可数。', 'Solve the equation for x.', '解这个方程求 x。', [], ['formula', 'identity'], 'noun', 'countable', '科学'],
  ], 'equations', ['equate', 'formula'], '←equate B2 使相等 + -ion（e→ion），B2 继承；家族 formula 公式，近义 identity 恒等式');

  W('equipment', 'noun', '/ɪˈkwɪpmənt/', 'B1', ['CET4'], '设备；装备', 'Tools and machines needed for an activity.', [
    ['设备；装备', 'Tools and machines needed for an activity.', '某项活动所需的工具机器。', '不可数。', 'The lab has new equipment.', '实验室有新设备。', [], ['apparatus', 'facility', 'furniture', 'gear', 'hardware', 'rig', 'tackle'], 'noun', 'uncountable', '工业'],
  ], '', ['equip', 'facility', 'furniture', 'gear', 'hardware'], '←equip B1 + -ment，B1 继承；家族 facility 设施、furniture 家具、gear 装置、hardware 硬件，近义 apparatus 器械、rig 成套设备、tackle 用具');

  W('equipped', 'adjective', '/ɪˈkwɪpt/', 'B1', [], '配备的', 'Supplied with what is needed.', [
    ['配备的', 'Supplied with what is needed.', '配有必需品的。', '分词形容词：be equipped with。', 'The room is equipped with computers.', '房间配有电脑。', ['equipped with'], ['provided'], 'adjective', '表语', '通用'],
  ], '', ['equip'], '←equip B1 + -ed，B1 继承；近义 provided 配给的（provide with）');

  W('equivocate', 'verb', '/ɪˈkwɪvəkeɪt/', '', [], '含糊其辞', 'To avoid giving a clear answer.', [
    ['含糊其辞', 'To avoid giving a clear answer.', '避免给出明确答复。', '不及物，正式。', 'He equivocated on the question.', '他对这个问题含糊其辞。', [], ['hedge'], 'verb', '不及物', '书面'],
  ], 'equivocates~equivocated~equivocated~equivocating', [], '拉丁 aequus（等）+ vocare（呼喊）——词根不可见，故留空；近义 hedge 搪塞。分级留空');

  W('er', 'interjection', '/ɜː(r)/', '', [], '呃；嗯', 'A sound you make when you hesitate.', [
    ['呃；嗯', 'A sound you make when you hesitate.', '迟疑时发出的声音。', '感叹词，口语。', 'Er, I am not sure.', '呃，我不太确定。', [], ['more'], 'interjection', 'null', '口语'],
  ], '', [], '迟疑声；近义 more 更多（refs 镜像）。分级留空');

  W('eraser', 'noun', '/ɪˈreɪzə(r)/', 'B1', ['CET4'], '橡皮擦', 'A small object that removes pencil marks.', [
    ['橡皮擦', 'A small object that removes pencil marks.', '擦掉铅笔印的小物件。', '可数。', 'I need an eraser.', '我需要一块橡皮。', [], ['rubber'], 'noun', 'countable', '教育'],
  ], 'erasers', ['erase', 'rubber'], '←erase B1 擦掉 + -r（表物），B1 继承；家族 rubber 橡皮（英式）');

  W('erratic', 'adjective', '/ɪˈrætɪk/', 'B2', [], '不稳定的；古怪的', 'Changing without reason; irregular.', [
    ['不稳定的；古怪的', 'Changing without reason; irregular.', '无缘无故变化的、不规则的。', 'erratic behaviour 古怪行为。', 'His sleep is erratic.', '他睡眠不规律。', [], ['irregular'], 'adjective', '定语', '健康'],
  ], '', ['err'], '←err B2 犯错 + -atic（易…的），B2 继承；近义 irregular 不规则的');

  W('error', 'noun', '/ˈerə(r)/', 'B2', ['CET4'], '错误', 'Something wrong done or thought.', [
    ['错误', 'Something wrong done or thought.', '做错或想错的事。', '可数：make an error。', 'There is an error in the bill.', '账单里有个错误。', ['make an error'], ['mistake', 'slip'], 'noun', 'countable', '通用'],
  ], 'errors', ['err', 'mistake'], '←err B2 + -or，B2 继承；家族 mistake 错误（最常用），近义 slip 疏失');

  W('eruption', 'noun', '/ɪˈrʌpʃn/', 'B1', ['CET6'], '爆发；喷发', 'A sudden violent burst, as of a volcano.', [
    ['爆发；喷发', 'A sudden violent burst, as of a volcano.', '突然猛烈的迸发，如火山。', '可数或不可数。', 'The eruption lasted for days.', '喷发持续了数天。', [], ['outbreak', 'rash'], 'noun', 'uncountable/countable', '自然'],
  ], 'eruptions', ['erupt'], '←erupt B1 爆发 + -ion，B1 继承；近义 outbreak 爆发、rash 迸发（爆发式出现）');

  W('escalation', 'noun', '/ˌeskəˈleɪʃn/', 'B2', ['CET6'], '升级；加剧', 'A rise in level or seriousness.', [
    ['升级；加剧', 'A rise in level or seriousness.', '水平或严重程度的上升。', '不可数或可数。', 'The escalation worried everyone.', '升级让所有人担心。', [], ['spiral'], 'noun', 'uncountable/countable', '政治'],
  ], 'escalations', ['escalate'], '←escalate B2 + -ion，B2 继承；近义 spiral 螺旋式上升');

  W('especial', 'adjective', '/ɪˈspeʃl/', 'A2', [], '特别的', 'Special, mainly before a noun.', [
    ['特别的', 'Special, mainly before a noun.', '特别的，主要作定语。', '较文：of especial interest。', 'It is of especial value.', '它有特殊价值。', ['of especial interest'], ['particular'], 'adjective', '定语', '书面'],
  ], '', ['special'], '←special A2（同源同义旧式变体），A2 继承；近义 particular 特别的');

  W('essential', 'adjective', '/ɪˈsenʃl/', 'B1', ['CET4'], '必要的；本质的', 'Very important and necessary, or basic.', [
    ['必要的；本质的', 'Very important and necessary, or basic.', '非常重要必要的，或基本的。', 'essential to 对…必不可少。', 'Water is essential to life.', '水对生命必不可少。', ['essential to'], ['fundamental', 'imperative', 'indispensable', 'integral', 'must', 'necessary', 'necessity', 'vital'], 'adjective', '定语/表语', '通用'],
  ], '', ['essence', 'fundamental', 'imperative', 'indispensable', 'integral', 'necessary', 'necessity', 'vital'], '←essence B1 本质 + -ial（c→t 音变，同 residential），B1 继承；家族 fundamental 根本的、imperative 迫切的、indispensable 不可或缺的、integral 不可分的、necessary 必要的、necessity 必需品、vital 至关重要的，近义 must 必须（refs 镜像）');

  W('essentials', 'noun', '/ɪˈsenʃlz/', 'B1', [], '必需品；要点', 'Things you must have, or basic points.', [
    ['必需品；要点', 'Things you must have, or basic points.', '必须有的东西，或基本要点。', '复数：the essentials of。', 'Pack only the essentials.', '只带必需品。', [], ['necessary'], 'noun', 'countable', '通用'],
  ], '', ['essential'], '←essential（本批新词 B1）+ -s，B1 继承；近义 necessary 必需的');

  W('est', 'suffix', '/est/', '', [], '最高级后缀 -est', 'The ending that makes the superlative of short adjectives.', [
    ['最高级后缀 -est', 'The ending that makes the superlative of short adjectives.', '加在短形容词后构成最高级的后缀。', '构词：biggest = big + est。', 'Biggest ends with est.', 'biggest 以 est 结尾。', [], ['most'], 'suffix', 'null', '构词'],
  ], '', [], '形容词最高级后缀（-est）；近义 most 最（长形容词最高级标志）。分级留空');

  W('established', 'adjective', '/ɪˈstæblɪʃt/', 'B1', [], '已确立的；老牌的', 'Accepted for a long time; well known.', [
    ['已确立的；老牌的', 'Accepted for a long time; well known.', '长期被接受的、知名的。', '分词形容词：an established firm。', 'It is an established custom.', '这是确立已久的习俗。', [], ['accepted', 'set'], 'adjective', '定语', '通用'],
  ], '', ['establish'], '←establish B1 建立 + -ed，B1 继承；近义 accepted 公认的、set 固定的');

  W('establishment', 'noun', '/ɪˈstæblɪʃmənt/', 'B1', ['CET4'], '建立；机构', 'The act of starting something, or an organization.', [
    ['建立；机构', 'The act of starting something, or an organization.', '创办某事的行为，或机构。', '可数或不可数。', 'The establishment opened in 1900.', '这家机构1900年开办。', [], ['elite', 'foundation', 'hierarchy', 'institution'], 'noun', 'uncountable/countable', '社会'],
  ], 'establishments', ['establish', 'elite', 'foundation'], '←establish B1 + -ment，B1 继承；家族 elite 精英（当权派）、foundation 创办，近义 hierarchy 等级制度、institution 机构');

  W('estate car', 'noun', '/ɪˈsteɪt ˈkɑː(r)/', '', [], '旅行车', 'A car with a large space at the back for bags; British.', [
    ['旅行车', 'A car with a large space at the back for bags; British.', '后部有大行李空间的汽车；英式。', '可数，英式；美式 station wagon。', 'They loaded the estate car.', '他们装满了旅行车。', [], ['wagon'], 'noun', 'countable', '交通'],
  ], '', ['wagon'], 'estate 庄园 + car 车（乡绅载货车）；近义 wagon 旅行车。短语分级留空').phrase = true;

  W('estimated', 'adjective', '/ˈestɪmeɪtɪd/', 'B1', [], '估计的', 'Guessed as an approximate amount.', [
    ['估计的', 'Guessed as an approximate amount.', '估算出的大概数量。', '分词形容词：an estimated cost。', 'The estimated cost is high.', '估计费用很高。', [], ['approximate'], 'adjective', '定语', '商务'],
  ], '', ['estimate'], '←estimate B1 估计 + -d，B1 继承；近义 approximate 大约的');

  W('estimation', 'noun', '/ˌestɪˈmeɪʃn/', 'B1', ['CET4'], '估计；看法', 'A guess about amount, or an opinion.', [
    ['估计；看法', 'A guess about amount, or an opinion.', '对数量的猜测，或看法。', '可数或不可数：in my estimation（依我看）。', 'In my estimation, he is right.', '依我看，他是对的。', ['in my estimation'], ['opinion'], 'noun', 'uncountable/countable', '商务'],
  ], 'estimations', ['estimate'], '←estimate B1 + -ion（e→ion），B1 继承；近义 opinion 意见');

  W('eternally', 'adverb', '/ɪˈtɜːnəli/', 'B1', [], '永远地', 'Forever.', [
    ['永远地', 'Forever.', '永恒地。', '副词。', 'I am eternally grateful.', '我永远感激。', [], ['forever'], 'adverb', 'null', '通用'],
  ], '', ['eternal', 'forever'], '←eternal B1 永恒的 + -ly，B1 继承；家族 forever 永远（最常用）');

  W('eternity', 'noun', '/ɪˈtɜːnəti/', 'B1', ['CET4'], '永恒；来世', 'Time without end, or life after death.', [
    ['永恒；来世', 'Time without end, or life after death.', '无尽的时间，或死后的生命。', '不可数或可数。', 'They promised love for eternity.', '他们许诺爱到永远。', [], ['infinite'], 'noun', 'uncountable/countable', '宗教'],
  ], '', ['eternal'], '←eternal B1 + -ity（al→ity，同 reality），B1 继承；近义 infinite 无限的');

})(typeof window !== 'undefined' ? window : globalThis);
