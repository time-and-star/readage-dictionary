/* data/words/cet/author_depth_a1.js
 * 手敲深度补丁（A 批一）：词源、补充例句、语境长句、常见错误、即时检测。
 * 不改释义正文。词源按公开词源史转写，不逐字复制词典条目。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('abandon', {
    etymology: {
      origin: '古法语 abandoner，来自短语 a bandon「交到别人处置之下」',
      prefix: { text: 'a-', gloss: '朝向（来自古法语 à）' },
      root: { text: 'bandon', gloss: '管辖权、任人处置的状态（与 ban「禁令、权力」同族）' },
      suffix: null,
      history: [
        { label: 'a bandon', text: '古法语：置于某人权力之下' },
        { label: 'abandoner', text: '古法语：交出、不再管' },
        { label: 'abandon', text: '现代英语：彻底放弃、抛弃、弃离' },
      ],
      formationLogic: '把事情交出去、不再留在自己手里，所以各义项都带「不再回头」的意思。',
      mnemonic: '看见 band 不必联想乐队。这里的核心是「交出控制权」。',
      note: '历史构词分析，现代使用者并不把 abandon 拆成两个独立单词。',
      source: 'Etymonline — abandon',
    },
    extraExamples: [
      { sense: 1, english: 'After two failed trials, the team abandoned the experiment and wrote up what they had learned.', chinese: '两次试验失败后，小组放弃了这项实验，并把已经得到的认识写了下来。' },
      { sense: 2, english: 'He abandoned his old friends the moment a richer circle opened its doors.', chinese: '一旦更有钱的圈子向他开门，他就抛下了老朋友。' },
    ],
    contexts: [
      { domain: '学术 · 写作', senseId: 'abandon.s1', en: 'Researchers abandoned the original hypothesis once the new measurements contradicted it at every site.', zh: '新的测量在每个站点都与原假设矛盾之后，研究者放弃了原来的假设。', structure: 'Researchers / abandoned / the original hypothesis / once the new measurements contradicted it.', grammar: 'once 引导时间状语从句，说明放弃发生的条件。', rationale: '宾语是 hypothesis，表示中止一项计划，不是抛弃一个人。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'They abandoned from the plan.', right: 'They abandoned the plan.', reason: 'abandon 直接接放弃的对象，不加 from。', rule: 'abandon + 名词。放弃希望是 abandon hope，不是 abandon from hope。', special: '「被遗弃」用被动：was abandoned。' },
      { errorType: 'confusable', wrong: 'The house was abundant by its owners.', right: 'The house was abandoned by its owners.', reason: 'abundant 是「丰富的」，abandoned 才是「被抛弃的」。', rule: 'abandon 的过去分词是 abandoned；abundant 是另一个形容词。', special: 'an abundant harvest 是丰收，an abandoned house 是空屋。' },
    ],
    quiz: [
      { id: 'abandon.q1', senseId: 'abandon.s1', errorType: 'meaning', type: '词义', prompt: 'They had to _____ the search when the storm arrived.', options: ['abandon', 'abundant', 'abbreviate'], answer: 'abandon', explain: '停止未完成的搜寻，用 abandon。' },
      { id: 'abandon.q2', senseId: 'abandon.s2', errorType: 'meaning', type: '词义', prompt: 'The puppy was _____ outside the shop.', options: ['abandoned', 'abundant', 'aboard'], answer: 'abandoned', explain: '被扔下不管，用 abandoned。' },
      { id: 'abandon.q3', senseId: 'abandon.s1', errorType: 'collocation', type: '搭配', prompt: 'Never abandon _____ even when the result looks unlikely.', options: ['hope', 'from hope', 'to hope'], answer: 'hope', explain: 'abandon 后直接接名词 hope。' },
      { id: 'abandon.q4', senseId: 'abandon.s3', errorType: 'context', type: '语境', prompt: 'The crew _____ the burning ship.', options: ['abandoned', 'absorbed', 'accepted'], answer: 'abandoned', explain: '因危险离开船只，是 abandon ship。' },
    ],
    relations: [
      { target: 'abundant', relationTypes: ['visual', 'confusable'], zh: '丰富的；充裕的', spellingDiff: 'abandon 以 -don 收尾；abundant 以 -dant 收尾，中间多一个 u。', phoneticDiff: '重音不同：abandon 在第二音节，abundant 也在第二音节，但元音是 /ʌ/ 对 /æ/ 开头不同。', semanticDiff: 'abandon 是动词「放弃」；abundant 是形容词「很多」。', collocationDiff: 'abandon a plan；an abundant supply' },
    ],
    usage: { domains: ['日常', '新闻', '学术'], tone: '语气偏重，常含彻底、不再回头', commonConfusion: ['abundant'] },
  });

  D('able', {
    etymology: {
      origin: '拉丁语 habilis「容易处理的」，经古法语 able 进入英语',
      prefix: null,
      root: { text: 'habere', gloss: '持有、拿住；habilis 是「拿得住、好用」' },
      suffix: null,
      history: [
        { label: 'habilis', text: '拉丁语：便于操作的' },
        { label: 'able', text: '古法语 / 中古英语：有能力的' },
        { label: 'be able to', text: '现代英语：能够做某事' },
      ],
      formationLogic: '原意是「抓得住、应付得了」，所以 able 说的是能力或条件够不够。',
      mnemonic: 'able 和 ability、enable 同族；unable 是加了否定前缀。',
      note: '词首的 h 在进入法语时脱落，所以英语拼作 able 而不是 hable。',
      source: 'Etymonline — able',
    },
    extraExamples: [
      { sense: 1, english: 'She was able to finish the paper only after the library stayed open late.', chinese: '图书馆延迟关门之后，她才得以写完论文。' },
    ],
    contexts: [
      { domain: '考试 · 语法', senseId: 'able.s1', en: 'Students who are able to explain a rule in their own words usually remember it longer.', zh: '能用自己的话讲清一条规则的学生，通常记得更久。', structure: 'Students / who are able to explain a rule / usually remember it longer.', grammar: 'be able to + 动词原形；who 从句修饰 students。', rationale: '这里 able 表示具备解释的能力，不是「有才干的助手」那个义项。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She is able of solving it.', right: 'She is able to solve it.', reason: 'able 接 to do，不接 of doing。', rule: 'be able to + 原形；be capable of + -ing。', special: '名词形式是 ability to do，同样用 to。' },
      { errorType: 'grammar', wrong: 'He can able to swim.', right: 'He is able to swim.', reason: 'can 和 be able to 都表示能力，不叠用。', rule: '用 can，或用 be able to，二选一。', special: '过去未能做成某事常用 was not able to 或 could not。' },
    ],
    quiz: [
      { id: 'able.q1', senseId: 'able.s1', errorType: 'grammar', type: '语法', prompt: 'Will you be able _____ join us?', options: ['to', 'of', 'for'], answer: 'to', explain: 'be able to do。' },
      { id: 'able.q2', senseId: 'able.s1', errorType: 'grammar', type: '语法', prompt: 'She is capable _____ leading the group.', options: ['of', 'to', 'at'], answer: 'of', explain: 'capable of，和 able to 不要换介词。' },
      { id: 'able.q3', senseId: 'able.s2', errorType: 'meaning', type: '词义', prompt: 'We need an _____ assistant who can work alone.', options: ['able', 'idle', 'oral'], answer: 'able', explain: 'an able assistant 指能干的助手。' },
      { id: 'able.q4', senseId: 'able.s1', errorType: 'confusable', type: '易混', prompt: 'The new tool will _____ smaller teams to publish faster.', options: ['enable', 'unable', 'ability'], answer: 'enable', explain: 'enable someone to do 是「使能够」；unable 是否定形容词。' },
    ],
    relations: [
      { target: 'enable', relationTypes: ['confusable'], zh: '使能够；使成为可能', semanticDiff: 'able 描述某人有能力；enable 是动词，表示让别人变得能够。', collocationDiff: 'be able to do；enable somebody to do' },
      { target: 'unable', relationTypes: ['confusable'], zh: '不能的', semanticDiff: 'unable 是 able 的否定，不是另一个词根。', collocationDiff: 'be unable to do' },
    ],
    usage: { domains: ['日常', '考试语法'], tone: '中性', commonConfusion: ['enable', 'unable'] },
  });

  D('abnormal', {
    etymology: {
      origin: '拉丁语 ab-「离开」+ norma「直角尺、规范」',
      prefix: { text: 'ab-', gloss: '离开、偏离' },
      root: { text: 'norma', gloss: '工匠用来取直的尺，引申为规范' },
      suffix: { text: '-al', gloss: '形容词后缀' },
      history: [
        { label: 'norma', text: '拉丁语：直角尺、标准' },
        { label: 'abnormalis', text: '中古拉丁语：不合规范的' },
        { label: 'abnormal', text: '现代英语：异常的，常带担忧' },
      ],
      formationLogic: '离开了那把「尺」，就是偏离正常。normal 是同一把尺，只是没有 ab-。',
      mnemonic: 'ab- 表离开，normal 表正常，合在一起是「不正常」。',
      note: '医学和实验报告里 abnormal 比 unusual 更正式，也更暗示可能有问题。',
      source: 'Etymonline — abnormal',
    },
    extraExamples: [
      { sense: 1, english: 'An abnormal reading does not by itself prove illness; the lab asked for a second sample.', chinese: '一次异常读数本身不能证明有病；实验室要求再采一份样本。' },
    ],
    contexts: [
      { domain: '医学 · 报告', senseId: 'abnormal.s1', en: 'The scan showed an abnormal growth, so the doctor ordered further tests before naming a cause.', zh: '扫描显示有一处异常增生，因此医生在下结论前安排了进一步检查。', structure: 'The scan / showed / an abnormal growth / so the doctor ordered further tests.', grammar: 'so 连接结果从句。abnormal 修饰 growth。', rationale: '搭配 medical / test / result 时，abnormal 表示偏离参考范围。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The result was abnormal from the normal range.', right: 'The result was abnormal.', reason: 'abnormal 本身已含「偏离正常」，不必再加 from the normal range。', rule: 'an abnormal result / abnormal behaviour。若要说偏离，用 deviate from the norm。', special: '反义词是 normal，名词是 abnormality。' },
    ],
    quiz: [
      { id: 'abnormal.q1', senseId: 'abnormal.s1', errorType: 'meaning', type: '词义', prompt: 'The blood test came back _____.', options: ['abnormal', 'aboard', 'abundant'], answer: 'abnormal', explain: '检查结果偏离正常用 abnormal。' },
      { id: 'abnormal.q2', senseId: 'abnormal.s1', errorType: 'meaning', type: '词义', prompt: 'The opposite of abnormal is _____.', options: ['normal', 'formal', 'oral'], answer: 'normal', explain: '同根词 normal。' },
      { id: 'abnormal.q3', senseId: 'abnormal.s1', errorType: 'collocation', type: '搭配', prompt: 'Doctors noticed _____ behaviour after the injury.', options: ['abnormal', 'abnormally a', 'abnormality'], answer: 'abnormal', explain: '修饰名词 behaviour 用形容词 abnormal。名词是 abnormality。' },
      { id: 'abnormal.q4', senseId: 'abnormal.s1', errorType: 'confusable', type: '易混', prompt: 'A quiet evening is _____ , but a silent hospital ward at noon may be _____.', options: ['unusual; abnormal', 'abnormal; unusual', 'aboard; abroad'], answer: 'unusual; abnormal', explain: 'unusual 只是少见；abnormal 常暗示不该如此、需要关注。' },
    ],
    usage: { domains: ['医学', '科学'], tone: '正式，带判断', commonConfusion: ['unusual', 'normal'] },
  });

  D('aboard', {
    etymology: {
      origin: '英语内部合成：a-「在……之上」+ board「船舷、木板」',
      prefix: { text: 'a-', gloss: '在……上（古英语 on 的弱化）' },
      root: { text: 'board', gloss: '木板，特指船侧的舷板' },
      suffix: null,
      history: [
        { label: 'on board', text: '在船的木板上' },
        { label: 'aboard', text: '上船，或在船、飞机、火车上' },
      ],
      formationLogic: '人站到船的板上，就是上船。后来飞机、火车也沿用。',
      mnemonic: 'board 是板。aboard 是「到板上去」；abroad 是「到广阔的外面去」。差一个字母，意思差很远。',
      note: 'aboard 可作副词或介词：go aboard；aboard the train。',
      source: 'Etymonline — aboard',
    },
    extraExamples: [
      { sense: 1, english: 'All visitors must be aboard the ferry ten minutes before it leaves.', chinese: '所有访客必须在渡轮开船前十分钟上船。' },
    ],
    contexts: [
      { domain: '旅行', senseId: 'aboard.s1', en: 'Once the last passenger was aboard, the conductor closed the doors and the night train pulled out.', zh: '最后一名乘客上车后，列车员关上门，夜车开出了站。', structure: 'Once the last passenger was aboard / the conductor closed the doors.', grammar: 'aboard 在此是表语副词，表示「已在车上」。', rationale: '没有「在国外」的意思。判断依据是 ferry / train / passenger。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'She spent a year aboard in Canada.', right: 'She spent a year abroad in Canada.', reason: '在国外是 abroad。aboard 是在交通工具上。', rule: 'aboard + 船 / 飞机 / 火车；abroad 表示海外或户外。', special: 'Welcome aboard 是欢迎加入（上车、入职），不是欢迎出国。' },
    ],
    quiz: [
      { id: 'aboard.q1', senseId: 'aboard.s1', errorType: 'confusable', type: '易混', prompt: 'The captain waited until everyone was _____ the ship.', options: ['aboard', 'abroad', 'board'], answer: 'aboard', explain: '在船上用 aboard。' },
      { id: 'aboard.q2', senseId: 'aboard.s1', errorType: 'confusable', type: '易混', prompt: 'He studied _____ for three years.', options: ['abroad', 'aboard', 'absorb'], answer: 'abroad', explain: '在国外用 abroad。' },
      { id: 'aboard.q3', senseId: 'aboard.s1', errorType: 'collocation', type: '搭配', prompt: 'Welcome _____ the team.', options: ['aboard', 'abroad', 'across'], answer: 'aboard', explain: 'Welcome aboard 表示欢迎加入。' },
      { id: 'aboard.q4', senseId: 'aboard.s1', errorType: 'meaning', type: '词义', prompt: 'Which sentence uses aboard correctly?', options: ['Passengers aboard the plane must sit down.', 'Passengers abroad the plane must sit down.', 'Passengers absorb the plane must sit down.'], answer: 'Passengers aboard the plane must sit down.', explain: '飞机上的乘客用 aboard。' },
    ],
    relations: [
      { target: 'abroad', relationTypes: ['visual', 'confusable'], zh: '在国外；到国外', spellingDiff: '第三个元音字母：aboard 是 a，abroad 是 a 后多了 r 的位置——aboard 含 board，abroad 含 broad。', phoneticDiff: 'aboard /əˈbɔːd/，abroad /əˈbrɔːd/，后者有 /r/ 在辅音簇里。', semanticDiff: 'aboard 在交通工具上；abroad 在海外。', collocationDiff: 'aboard the ship；go abroad' },
    ],
    usage: { domains: ['旅行', '交通'], commonConfusion: ['abroad'] },
  });

  D('abroad', {
    etymology: {
      origin: '中古英语 abrode，来自 a-「在」+ broad「宽阔的」',
      prefix: { text: 'a-', gloss: '处于某种状态' },
      root: { text: 'broad', gloss: '宽的、敞开的' },
      suffix: null,
      history: [
        { label: 'on brode', text: '中古英语：在宽阔之处、在户外' },
        { label: 'abroad', text: '后来专指到本国以外' },
      ],
      formationLogic: '走到宽阔的外面，从「出门」收到「出国」。',
      mnemonic: 'broad 是宽。出国是走到更宽的世界里。不要写成 aboard。',
      note: 'abroad 是副词，不说 go to abroad。',
      source: 'Etymonline — abroad',
    },
    extraExamples: [
      { sense: 2, english: 'News of the election spread abroad within an hour.', chinese: '选举的消息在一小时内传到了国外。' },
    ],
    contexts: [
      { domain: '教育', senseId: 'abroad.s1', en: 'Students who study abroad often return with a sharper sense of what they took for granted at home.', zh: '出国学习的学生回来后，常常更能看清自己从前在国内习以为常的事。', structure: 'Students who study abroad / often return / with a sharper sense.', grammar: 'study abroad 中 abroad 是副词，前面不加 to。', rationale: '和 aboard 的区别看搭配：study / live / travel 后面是 abroad。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'She went to abroad last year.', right: 'She went abroad last year.', reason: 'abroad 已经是副词，不再加 to。', rule: 'go / study / live / travel abroad。', special: '若要说「在国外的生活」，用 life abroad，abroad 仍放名词后。' },
    ],
    quiz: [
      { id: 'abroad.q1', senseId: 'abroad.s1', errorType: 'grammar', type: '语法', prompt: 'They hope to study _____ next autumn.', options: ['abroad', 'to abroad', 'aboard'], answer: 'abroad', explain: 'study abroad，不加 to。' },
      { id: 'abroad.q2', senseId: 'abroad.s1', errorType: 'confusable', type: '易混', prompt: 'Please stay _____ the bus until it stops.', options: ['aboard', 'abroad', 'broad'], answer: 'aboard', explain: '待在车上用 aboard。' },
      { id: 'abroad.q3', senseId: 'abroad.s1', errorType: 'collocation', type: '搭配', prompt: 'He has lived _____ for a decade.', options: ['abroad', 'aboard', 'absorb'], answer: 'abroad', explain: '住在国外用 live abroad。' },
      { id: 'abroad.q4', senseId: 'abroad.s1', errorType: 'meaning', type: '词义', prompt: 'broad 和 abroad 的关系更接近：', options: ['abroad 里含有 broad「宽」', 'abroad 里含有 board「板」', '两者没有关系'], answer: 'abroad 里含有 broad「宽」', explain: 'abroad = a- + broad。board 属于 aboard。' },
    ],
    relations: [
      { target: 'aboard', relationTypes: ['visual', 'confusable'], zh: '在（船、飞机、车）上', spellingDiff: 'abroad 含 broad；aboard 含 board，字母 r 的位置不同。', semanticDiff: 'abroad 是国外；aboard 是在交通工具上。', collocationDiff: 'go abroad；go aboard' },
    ],
    usage: { domains: ['教育', '旅行'], commonConfusion: ['aboard'] },
  });

  D('absent', {
    etymology: {
      origin: '拉丁语 absentem，来自 abesse「不在场」',
      prefix: { text: 'ab-', gloss: '离开' },
      root: { text: 'esse', gloss: '存在、在' },
      suffix: null,
      history: [
        { label: 'ab + esse', text: '拉丁语：离开 + 在' },
        { label: 'absens', text: '拉丁语：不在的' },
        { label: 'absent', text: '现代英语：缺席的' },
      ],
      formationLogic: '人不在那个地方。名词 absence 是同一词族，反义是 present。',
      mnemonic: 'ab- 离开，加上「在」，就是「不在」。',
      note: '动词义「缺席」现代英语多用 be absent，不要自造 absent the class 表示旷课（正式语体里 absent 作动词另有「使离开」的用法，考试里以形容词为主）。',
      source: 'Etymonline — absent',
    },
    extraExamples: [
      { sense: 1, english: 'Three students were absent, so the teacher postponed the quiz.', chinese: '三名学生缺席，于是老师推迟了测验。' },
    ],
    contexts: [
      { domain: '学校', senseId: 'absent.s1', en: 'If you are absent from the seminar, send a short note explaining why before the next meeting.', zh: '如果研讨会缺席，请在下次开会前发一封短信说明原因。', structure: 'If you are absent from the seminar / send a short note.', grammar: 'be absent from + 场合。', rationale: 'from 引出缺席的活动或地点。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He was absent of class.', right: 'He was absent from class.', reason: '缺席某场合用 from，不用 of。', rule: 'be absent from school / the meeting。absence of 才用 of，表示「缺乏」。', special: 'absence of evidence 是「缺乏证据」，不是「缺席证据」。' },
    ],
    quiz: [
      { id: 'absent.q1', senseId: 'absent.s1', errorType: 'collocation', type: '搭配', prompt: 'She was absent _____ the lecture.', options: ['from', 'of', 'to'], answer: 'from', explain: 'be absent from。' },
      { id: 'absent.q2', senseId: 'absent.s1', errorType: 'meaning', type: '词义', prompt: 'The noun of absent is _____.', options: ['absence', 'absense', 'absentment'], answer: 'absence', explain: '拼写是 absence，不是 absense。' },
      { id: 'absent.q3', senseId: 'absent.s1', errorType: 'confusable', type: '易混', prompt: 'An _____ of data made the conclusion weak.', options: ['absence', 'absent', 'absolute'], answer: 'absence', explain: '「缺乏」用名词 absence of。' },
      { id: 'absent.q4', senseId: 'absent.s1', errorType: 'meaning', type: '词义', prompt: 'Who is the opposite of an absent student?', options: ['a present student', 'an absolute student', 'an absorbed student'], answer: 'a present student', explain: 'present 是出席，absent 是缺席。' },
    ],
    usage: { domains: ['学校', '工作'], commonConfusion: ['absence', 'present'] },
  });

  D('absolute', {
    etymology: {
      origin: '拉丁语 absolutus，absolvere「松开、使脱离」的过去分词',
      prefix: { text: 'ab-', gloss: '离开' },
      root: { text: 'solvere', gloss: '松开、解开（同 solve）' },
      suffix: null,
      history: [
        { label: 'absolvere', text: '拉丁语：使脱离约束' },
        { label: 'absolutus', text: '拉丁语：不受限制的、完整的' },
        { label: 'absolute', text: '现代英语：绝对的、完全的' },
      ],
      formationLogic: '从限制里解开，就成了不受条件约束的、彻底的。',
      mnemonic: '和 solve、solution 同根。absolute 是「解开了一切限制」。',
      note: '口语 an absolute disaster 表示「彻头彻尾的灾难」，语气很强。',
      source: 'Etymonline — absolute',
    },
    extraExamples: [
      { sense: 1, english: 'There is no absolute right to park on a private road.', chinese: '在私路上停车并没有绝对的权利。' },
    ],
    contexts: [
      { domain: '议论', senseId: 'absolute.s1', en: 'The report avoids absolute claims and instead shows how the result changes when one assumption is relaxed.', zh: '报告避免下绝对的断言，而是说明放宽一条假设后结果会怎样变化。', structure: 'The report / avoids / absolute claims / and instead shows how the result changes.', grammar: 'absolute 作定语，修饰 claims。', rationale: '这里表示「无条件、不容分说」，不是化学里的 absolute alcohol。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The king held obsolete power.', right: 'The king held absolute power.', reason: 'absolute power 是绝对权力。obsolete 是「过时的」。', rule: 'absolute + power / silence / majority。obsolete + machine / word。', special: '副词 absolutely 可单独表示「当然」，语气强于 yes。' },
    ],
    quiz: [
      { id: 'absolute.q1', senseId: 'absolute.s1', errorType: 'meaning', type: '词义', prompt: 'The room fell into _____ silence.', options: ['absolute', 'obsolete', 'absent'], answer: 'absolute', explain: '完全的寂静用 absolute silence。' },
      { id: 'absolute.q2', senseId: 'absolute.s1', errorType: 'confusable', type: '易混', prompt: 'That software is _____ and no longer receives updates.', options: ['obsolete', 'absolute', 'absorb'], answer: 'obsolete', explain: '过时用 obsolete。' },
      { id: 'absolute.q3', senseId: 'absolute.s1', errorType: 'grammar', type: '语法', prompt: '"Do you agree?" "_____."', options: ['Absolutely', 'Absolute', 'Absolved'], answer: 'Absolutely', explain: '口头赞同用副词 Absolutely。' },
      { id: 'absolute.q4', senseId: 'absolute.s1', errorType: 'meaning', type: '词源', prompt: 'absolute 与哪个词同根？', options: ['solve', 'board', 'band'], answer: 'solve', explain: '都来自拉丁语 solvere「松开」。' },
    ],
    usage: { domains: ['议论', '政治', '口语强调'], commonConfusion: ['obsolete'] },
  });

  D('absorb', {
    etymology: {
      origin: '拉丁语 absorbere「吞进去」',
      prefix: { text: 'ab-', gloss: '离开（此处加强「吞掉」）' },
      root: { text: 'sorbere', gloss: '吸、啜' },
      suffix: null,
      history: [
        { label: 'sorbere', text: '拉丁语：吸' },
        { label: 'absorbere', text: '拉丁语：把液体或东西吸进去' },
        { label: 'absorb', text: '现代英语：吸收；使全神贯注' },
      ],
      formationLogic: '先是把液体吸进去，再引申为把知识、注意力吸进去。',
      mnemonic: '被一本书吸进去，就是 be absorbed in a book。',
      note: '名词是 absorption，形容词 absorbent 多指材料能吸水。',
      source: 'Etymonline — absorb',
    },
    extraExamples: [
      { sense: 1, english: 'Dark surfaces absorb more heat than pale ones.', chinese: '深色表面比浅色表面吸收更多热量。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'absorb.s3', en: 'She was so absorbed in the proof that she missed the announcement.', zh: '她全神贯注于那道证明，连通知都没听见。', structure: 'She / was so absorbed in the proof / that she missed the announcement.', grammar: 'be absorbed in + 名词，表示注意力被吸走。', rationale: '不是海绵吸水的字面义，而是引申义。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'He is absorbed on his work.', right: 'He is absorbed in his work.', reason: '全神贯注用 in，不用 on。', rule: 'be absorbed in something。absorb 作主动动词时直接接宾语：absorb heat。', special: '不要和 absolute 或 abroad 看混。' },
    ],
    quiz: [
      { id: 'absorb.q1', senseId: 'absorb.s1', errorType: 'collocation', type: '搭配', prompt: 'The sponge _____ the water.', options: ['absorbed', 'absolved', 'abandoned'], answer: 'absorbed', explain: '吸水用 absorb。' },
      { id: 'absorb.q2', senseId: 'absorb.s1', errorType: 'collocation', type: '搭配', prompt: 'He was absorbed _____ the novel.', options: ['in', 'on', 'at'], answer: 'in', explain: 'be absorbed in。' },
      { id: 'absorb.q3', senseId: 'absorb.s1', errorType: 'confusable', type: '易混', prompt: 'The priest _____ him after he confessed.', options: ['absolved', 'absorbed', 'abstracted'], answer: 'absolved', explain: '赦免是 absolve，吸收是 absorb。' },
      { id: 'absorb.q4', senseId: 'absorb.s1', errorType: 'meaning', type: '词义', prompt: 'The noun of absorb is _____.', options: ['absorption', 'absorbtion', 'absortion'], answer: 'absorption', explain: '拼写 absorption，b 后是 p。' },
    ],
    usage: { domains: ['科学', '学习'], commonConfusion: ['absolve'] },
  });

  D('abstract', {
    etymology: {
      origin: '拉丁语 abstractus，abstrahere「把……抽走」的过去分词',
      prefix: { text: 'abs-', gloss: '离开（ab- 在部分辅音前的形式）' },
      root: { text: 'trahere', gloss: '拉、拖（同 tractor、extract）' },
      suffix: null,
      history: [
        { label: 'abs + trahere', text: '拉丁语：拉开' },
        { label: 'abstractus', text: '被抽离出来的' },
        { label: 'abstract', text: '现代英语：抽象的；摘要；提取' },
      ],
      formationLogic: '把具体细节拉开、抽掉，剩下的是抽象概念；把文章要点抽出来，就是摘要。',
      mnemonic: 'extract 是向外拉出来，abstract 是抽离。论文摘要就是把正文抽成短文。',
      note: '作形容词重音常在第一音节；作动词「提取、写摘要」时重音可在第二音节。本词条音标以词库已有标注为准。',
      source: 'Etymonline — abstract',
    },
    extraExamples: [
      { sense: 2, english: 'The abstract of the paper is only 150 words, but it states the result clearly.', chinese: '这篇论文的摘要只有 150 词，但把结果写清楚了。' },
    ],
    contexts: [
      { domain: '学术', senseId: 'abstract.s2', en: 'An abstract should tell a reader what question was asked and what was found, without copying the whole introduction.', zh: '摘要应告诉读者问了什么、发现了什么，而不是把引言整段抄下来。', structure: 'An abstract / should tell a reader / what question was asked and what was found.', grammar: 'what 引导的从句作 tell 的直接内容。', rationale: '在论文语境里 abstract 是名词「摘要」。抽象概念才用形容词 an abstract idea。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'Please write an extract of 200 words at the start of the thesis.', right: 'Please write an abstract of 200 words at the start of the thesis.', reason: '放在论文开头的短概述是 abstract。extract 是摘录的一段原文。', rule: 'abstract = 作者写的摘要；extract = 从原文抽出的片段。', special: '动词 abstract something from 表示从中提取。' },
    ],
    quiz: [
      { id: 'abstract.q1', senseId: 'abstract.s1', errorType: 'meaning', type: '词义', prompt: 'Read the _____ before you download the full paper.', options: ['abstract', 'extract', 'contract'], answer: 'abstract', explain: '论文开头的概述是 abstract。' },
      { id: 'abstract.q2', senseId: 'abstract.s1', errorType: 'confusable', type: '易混', prompt: 'The editor quoted a short _____ from the novel.', options: ['extract', 'abstract', 'attract'], answer: 'extract', explain: '引用原文片段用 extract。' },
      { id: 'abstract.q3', senseId: 'abstract.s1', errorType: 'meaning', type: '词义', prompt: 'Justice and beauty are _____ nouns.', options: ['abstract', 'absent', 'absolute'], answer: 'abstract', explain: '看不见摸不着的概念是抽象名词。' },
      { id: 'abstract.q4', senseId: 'abstract.s1', errorType: 'meaning', type: '词源', prompt: 'abstract 的词根 trahere 意思是：', options: ['拉', '吸', '松开'], answer: '拉', explain: '与 tractor、extract 相同，表示拉。' },
    ],
    relations: [
      { target: 'extract', relationTypes: ['confusable'], zh: '提取；摘录', semanticDiff: 'abstract 可以是摘要或抽象；extract 是抽出的物质或原文片段。', collocationDiff: 'a paper abstract；an extract from a book' },
    ],
    usage: { domains: ['学术', '艺术'], commonConfusion: ['extract'] },
  });

  D('accept', {
    etymology: {
      origin: '拉丁语 acceptare，来自 accipere「接到自己这边」',
      prefix: { text: 'ac-', gloss: '朝向（ad- 在 c 前的同化）' },
      root: { text: 'capere', gloss: '抓、拿（同 capture、receive）' },
      suffix: null,
      history: [
        { label: 'ad + capere', text: '拉丁语：朝自己拿过来' },
        { label: 'acceptare', text: '拉丁语：收下、同意收下' },
        { label: 'accept', text: '现代英语：接受' },
      ],
      formationLogic: '把东西拿到自己这边，就是接受。except 是「拿出去、排除」。',
      mnemonic: 'accept 里是 ac-，朝向自己；except 里是 ex-，向外排除。',
      note: '名词是 acceptance。except 是介词或连词，不是 accept 的过去式。',
      source: 'Etymonline — accept',
    },
    extraExamples: [
      { sense: 1, english: 'She accepted the offer only after the salary and the start date were both in writing.', chinese: '薪水和入职日期都写成文字之后，她才接受了这份录用。' },
    ],
    contexts: [
      { domain: '学校 · 申请', senseId: 'accept.s1', en: 'The college accepted her application but asked her to send the final transcript before enrolment.', zh: '学院接受了她的申请，但要求她在注册前交上最终成绩单。', structure: 'The college / accepted / her application / but asked her to send the transcript.', grammar: 'accept 直接接申请、提议、邀请等宾语。', rationale: '不要写成 except her application。except 表示「除……之外」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'I accept Tom, everyone agreed.', right: 'I except Tom; everyone else agreed. / Except for Tom, everyone agreed.', reason: '「除 Tom 之外」是 except。accept 是接受。', rule: 'accept + 名词；except + 被排除的人或物。', special: '过去式是 accepted，不是 acceptted，也不等于 except。' },
    ],
    quiz: [
      { id: 'accept.q1', senseId: 'accept.s1', errorType: 'confusable', type: '易混', prompt: 'Please _____ my apology.', options: ['accept', 'except', 'expect'], answer: 'accept', explain: '接受道歉用 accept。' },
      { id: 'accept.q2', senseId: 'accept.s1', errorType: 'confusable', type: '易混', prompt: 'Everyone was invited _____ Lee.', options: ['except', 'accept', 'expect'], answer: 'except', explain: '除 Lee 之外用 except。' },
      { id: 'accept.q3', senseId: 'accept.s1', errorType: 'grammar', type: '语法', prompt: 'She _____ the job yesterday.', options: ['accepted', 'excepted', 'accept'], answer: 'accepted', explain: '过去式 accepted。' },
      { id: 'accept.q4', senseId: 'accept.s1', errorType: 'collocation', type: '搭配', prompt: 'He refused to accept _____ for the mistake.', options: ['responsibility', 'responsible', 'response'], answer: 'responsibility', explain: 'accept responsibility 接受责任。' },
    ],
    relations: [
      { target: 'except', relationTypes: ['visual', 'phonetic', 'confusable'], zh: '除……之外', spellingDiff: '首字母元音：accept 是 a，except 是 e。', phoneticDiff: 'accept /əkˈsept/，except /ɪkˈsept/。', semanticDiff: 'accept 收下；except 排除在外。', collocationDiff: 'accept an offer；everyone except Tom' },
    ],
    usage: { domains: ['日常', '申请'], commonConfusion: ['except', 'expect'] },
  });

  D('access', {
    etymology: {
      origin: '拉丁语 accessus，来自 accedere「走向」',
      prefix: { text: 'ac-', gloss: '朝向（ad-）' },
      root: { text: 'cedere', gloss: '走、让步（同 proceed、exceed）' },
      suffix: null,
      history: [
        { label: 'ad + cedere', text: '拉丁语：朝某处走' },
        { label: 'accessus', text: '拉丁语：接近、入口' },
        { label: 'access', text: '现代英语：通道；使用权；存取' },
      ],
      formationLogic: '能走过去，就有入口，也就有使用的机会。',
      mnemonic: 'excess 是「走得太过」（ex- 向外超出）；access 是「走向」。',
      note: '动词 access 在计算机语境很常见：access a file。名词前常用 access to。',
      source: 'Etymonline — access',
    },
    extraExamples: [
      { sense: 4, english: 'Students need a password to access the lab after 9 p.m.', chinese: '晚上九点后，学生需要密码才能进入实验室。' },
    ],
    contexts: [
      { domain: '技术 · 权限', senseId: 'access.s2', en: 'Without access to the raw data, the reviewer could not tell whether the chart had been trimmed.', zh: '接触不到原始数据，审稿人就无法判断图表是否被裁剪过。', structure: 'Without access to the raw data / the reviewer could not tell / whether the chart had been trimmed.', grammar: 'access to + 所接触的对象。', rationale: '这里是「取得、接触」的名词用法，不是 excess「过量」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'We have no access of the archive.', right: 'We have no access to the archive.', reason: '接触某物用 to，不用 of。', rule: 'access to something；have / gain / deny access。', special: 'excess of 才用 of：an excess of sugar。' },
      { errorType: 'confusable', wrong: 'An access of coffee kept him awake.', right: 'An excess of coffee kept him awake.', reason: '过量是 excess。access 是入口或权限。', rule: 'access = 进入；excess = 过多。', special: '形容词 accessible 表示「进得去的、好懂的」。' },
    ],
    quiz: [
      { id: 'access.q1', senseId: 'access.s1', errorType: 'collocation', type: '搭配', prompt: 'Do you have access _____ the server?', options: ['to', 'of', 'for'], answer: 'to', explain: 'access to。' },
      { id: 'access.q2', senseId: 'access.s1', errorType: 'confusable', type: '易混', prompt: 'An _____ of salt ruined the soup.', options: ['excess', 'access', 'accept'], answer: 'excess', explain: '过量用 excess。' },
      { id: 'access.q3', senseId: 'access.s1', errorType: 'meaning', type: '词义', prompt: 'The building is _____ by wheelchair.', options: ['accessible', 'excessive', 'accepted'], answer: 'accessible', explain: '可以进入用 accessible。' },
      { id: 'access.q4', senseId: 'access.s1', errorType: 'meaning', type: '词源', prompt: 'access 的词根 cedere 意思是：', options: ['走', '拿', '拉'], answer: '走', explain: '与 proceed、exceed 同根。' },
    ],
    relations: [
      { target: 'excess', relationTypes: ['visual', 'phonetic', 'confusable'], zh: '过量；过度', spellingDiff: '首字母：access 两个 c 前是 a；excess 是 e。', phoneticDiff: 'access 重音在第一音节 /ˈækses/；excess 重音在第二音节 /ɪkˈses/。', semanticDiff: 'access 是进入；excess 是超出需要的量。', collocationDiff: 'access to a file；an excess of salt' },
    ],
    usage: { domains: ['技术', '公共设施'], commonConfusion: ['excess'] },
  });

  D('accident', {
    etymology: {
      origin: '拉丁语 accidens，来自 accidere「降临、发生」',
      prefix: { text: 'ac-', gloss: '朝向' },
      root: { text: 'cadere', gloss: '落下（同 case、casual、decay）' },
      suffix: null,
      history: [
        { label: 'ad + cadere', text: '拉丁语：落到……上面' },
        { label: 'accidere', text: '拉丁语：突然发生' },
        { label: 'accident', text: '现代英语：意外，常指造成伤害的事故' },
      ],
      formationLogic: '事情「掉」到你头上，事先没排进计划，就是意外。',
      mnemonic: 'by accident 是偶然；on purpose 是故意。incident 是事件，不一定是事故。',
      note: '形容词 accidental。不要把 accident 写成 accedent。',
      source: 'Etymonline — accident',
    },
    extraExamples: [
      { sense: 1, english: 'The spill was an accident, but leaving the floor wet was a choice.', chinese: '打翻是意外，但让地面一直湿着是一种选择。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'accident.s1', en: 'Police said the accident happened at the junction and that no one had been driving above the limit.', zh: '警方说事故发生在交叉路口，而且没有人超速。', structure: 'Police said / the accident happened at the junction / and that no one had been driving above the limit.', grammar: 'accident 是可数名词。happen 与之搭配，不用 do an accident。', rationale: '交通语境里 accident 默认指造成损害的意外。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'I met her in accident.', right: 'I met her by accident.', reason: '「偶然」的固定介词是 by。', rule: 'by accident；on purpose。', special: 'a traffic accident，不是 a traffic incident，除非只是想说「事件」而不强调意外伤害。' },
    ],
    quiz: [
      { id: 'accident.q1', senseId: 'accident.s1', errorType: 'collocation', type: '搭配', prompt: 'I found the letter _____ accident.', options: ['by', 'in', 'on'], answer: 'by', explain: 'by accident。' },
      { id: 'accident.q2', senseId: 'accident.s1', errorType: 'confusable', type: '易混', prompt: 'The opposite of by accident is _____.', options: ['on purpose', 'by purpose', 'on accident'], answer: 'on purpose', explain: '故意是 on purpose。' },
      { id: 'accident.q3', senseId: 'accident.s1', errorType: 'meaning', type: '词义', prompt: 'A small unexpected event, not necessarily harmful, is often an _____.', options: ['incident', 'accident', 'access'], answer: 'incident', explain: 'incident 是事件；accident 更常指事故。' },
      { id: 'accident.q4', senseId: 'accident.s1', errorType: 'grammar', type: '语法', prompt: 'Two serious _____ closed the road.', options: ['accidents', 'accident', 'accidences'], answer: 'accidents', explain: '复数直接加 s。' },
    ],
    usage: { domains: ['新闻', '日常'], commonConfusion: ['incident'] },
  });

  D('accuse', {
    etymology: {
      origin: '拉丁语 accusare「为了某件事把人叫来」',
      prefix: { text: 'ac-', gloss: '朝向' },
      root: { text: 'causa', gloss: '原因、案件（同 cause）' },
      suffix: null,
      history: [
        { label: 'ad + causa', text: '拉丁语：把原因 / 案件指向某人' },
        { label: 'accusare', text: '拉丁语：指控' },
        { label: 'accuse', text: '现代英语：指责、控告' },
      ],
      formationLogic: '把一件事的原因算到某人头上。',
      mnemonic: 'accuse somebody of something。of 后面是被指控的内容。',
      note: '名词 accusation。法律上更正式的「指控」动词还有 charge。',
      source: 'Etymonline — accuse',
    },
    extraExamples: [
      { sense: 1, english: 'The article accused the company of hiding the test results.', chinese: '这篇文章指责该公司隐瞒检测结果。' },
    ],
    contexts: [
      { domain: '新闻', senseId: 'accuse.s1', en: 'Neighbours accused him of leaving the gate open, though nobody had seen him do it.', zh: '邻居指责他没关大门，尽管没人看见是他干的。', structure: 'Neighbours / accused him of leaving the gate open / though nobody had seen him do it.', grammar: 'accuse + 人 + of + -ing / 名词。', rationale: 'of 后面是指控内容，不是 accuse him to leave。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'She accused him for lying.', right: 'She accused him of lying.', reason: 'accuse 用 of，不用 for。', rule: 'accuse somebody of something。blame somebody for something 才用 for。', special: 'excuse 是原谅，拼写接近但意思相反。' },
    ],
    quiz: [
      { id: 'accuse.q1', senseId: 'accuse.s1', errorType: 'collocation', type: '搭配', prompt: 'They accused her _____ cheating.', options: ['of', 'for', 'to'], answer: 'of', explain: 'accuse somebody of。' },
      { id: 'accuse.q2', senseId: 'accuse.s1', errorType: 'confusable', type: '易混', prompt: 'Please _____ my late reply.', options: ['excuse', 'accuse', 'access'], answer: 'excuse', explain: '原谅用 excuse。' },
      { id: 'accuse.q3', senseId: 'accuse.s1', errorType: 'collocation', type: '搭配', prompt: 'Don\'t blame me _____ your mistake.', options: ['for', 'of', 'to'], answer: 'for', explain: 'blame somebody for，和 accuse of 介词不同。' },
      { id: 'accuse.q4', senseId: 'accuse.s1', errorType: 'meaning', type: '词义', prompt: 'The noun of accuse is _____.', options: ['accusation', 'accusion', 'excuse'], answer: 'accusation', explain: 'accusation。' },
    ],
    relations: [
      { target: 'excuse', relationTypes: ['visual', 'confusable'], zh: '原谅；借口', spellingDiff: 'accuse 以 ac- 开头；excuse 以 ex- 开头。', semanticDiff: 'accuse 是指责；excuse 是原谅或借口。', collocationDiff: 'accuse somebody of；excuse somebody for' },
    ],
    usage: { domains: ['新闻', '法律'], commonConfusion: ['excuse', 'blame'] },
  });

  D('achieve', {
    etymology: {
      origin: '古法语 achever「做到头」，来自 a chief「直到头、直到终点」',
      prefix: { text: 'a-', gloss: '朝向' },
      root: { text: 'chief', gloss: '头、一端（拉丁语 caput）' },
      suffix: null,
      history: [
        { label: 'à chief', text: '古法语：到头' },
        { label: 'achever', text: '古法语：做完、做到底' },
        { label: 'achieve', text: '现代英语：实现、取得' },
      ],
      formationLogic: '把事情做到「头」上，就是完成并得到结果。',
      mnemonic: 'chief 是头。achieve 是做到头儿。名词 achievement。',
      note: 'achieve 直接接目标：achieve a goal。不说 achieve to do 作为「成功做成」的普通搭配。',
      source: 'Etymonline — achieve',
    },
    extraExamples: [
      { sense: 1, english: 'The lab achieved a stable result only on the fifth run.', chinese: '实验室直到第五次运行才得到稳定结果。' },
    ],
    contexts: [
      { domain: '目标', senseId: 'achieve.s1', en: 'She achieved the score she needed, then immediately set a harder target for the next term.', zh: '她拿到了所需的分数，随即为下学期定了一个更难的目标。', structure: 'She / achieved / the score she needed / then set a harder target.', grammar: 'achieve + 名词（分数、目标、成功）。', rationale: '宾语是已经到手的结果，不是正在努力的过程。过程用 work toward。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He achieved to pass the exam.', right: 'He managed to pass the exam. / He achieved a pass.', reason: 'achieve 后面接名词结果，不接 to do。', rule: 'achieve success / a goal / a score。若要接动作，用 manage to do 或 succeed in doing。', special: 'achievement 后可接 in：her achievement in chemistry。' },
    ],
    quiz: [
      { id: 'achieve.q1', senseId: 'achieve.s1', errorType: 'collocation', type: '搭配', prompt: 'She hopes to achieve _____ this year.', options: ['her goal', 'to her goal', 'at her goal'], answer: 'her goal', explain: 'achieve 直接接目标。' },
      { id: 'achieve.q2', senseId: 'achieve.s1', errorType: 'grammar', type: '语法', prompt: 'Which is natural?', options: ['He managed to finish.', 'He achieved to finish.', 'He achieved finishing.'], answer: 'He managed to finish.', explain: '接 to do 用 manage，不用 achieve。' },
      { id: 'achieve.q3', senseId: 'achieve.s1', errorType: 'meaning', type: '词义', prompt: 'The noun is _____.', options: ['achievement', 'achievation', 'chiefment'], answer: 'achievement', explain: 'achievement。' },
      { id: 'achieve.q4', senseId: 'achieve.s1', errorType: 'meaning', type: '词源', prompt: 'achieve 里的 chief 意思是：', options: ['头、终点', '首领的薪水', '船板'], answer: '头、终点', explain: 'à chief = 做到头。' },
    ],
    usage: { domains: ['教育', '工作'], commonConfusion: ['manage'] },
  });

  D('acquire', {
    etymology: {
      origin: '拉丁语 acquirere「额外寻求并得到」',
      prefix: { text: 'ac-', gloss: '朝向、加上（ad-）' },
      root: { text: 'quaerere', gloss: '寻找、询问（同 question、require、inquire）' },
      suffix: null,
      history: [
        { label: 'ad + quaerere', text: '拉丁语：去寻求' },
        { label: 'acquirere', text: '拉丁语：求来、获得' },
        { label: 'acquire', text: '现代英语：获得（技能、习惯、物件）' },
      ],
      formationLogic: '通过寻求而得到。语气比 get 正式，常用于技能和逐渐形成的习惯。',
      mnemonic: 'require 是「反复寻求」所以成为要求；inquire 是「向里问」；acquire 是「求到手」。',
      note: '过去式 acquired。名词 acquisition。',
      source: 'Etymonline — acquire',
    },
    extraExamples: [
      { sense: 1, english: 'Children acquire a second language more easily when they hear it every day.', chinese: '如果每天都听到第二语言，孩子会更容易习得它。' },
    ],
    contexts: [
      { domain: '学习', senseId: 'acquire.s1', en: 'It took him a year to acquire the habit of writing down every source before he closed the book.', zh: '他花了一年才养成合上书之前先记下每个出处的习惯。', structure: 'It took him a year / to acquire the habit / of writing down every source.', grammar: 'acquire a habit / a skill / a language。of + -ing 说明习惯的内容。', rationale: '这里不是买下一件商品，而是逐渐得到一种习惯。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The course will require you a new skill.', right: 'The course will help you acquire a new skill.', reason: '获得技能用 acquire。require 是「要求、需要」。', rule: 'acquire a skill / language / habit；require something of somebody。', special: 'inquire 是询问，不是获得。' },
    ],
    quiz: [
      { id: 'acquire.q1', senseId: 'acquire.s1', errorType: 'meaning', type: '词义', prompt: 'She _____ fluent Japanese while living in Osaka.', options: ['acquired', 'required', 'inquired'], answer: 'acquired', explain: '习得语言用 acquire。' },
      { id: 'acquire.q2', senseId: 'acquire.s1', errorType: 'confusable', type: '易混', prompt: 'Visitors are _____ to sign in.', options: ['required', 'acquired', 'inquired'], answer: 'required', explain: '被要求用 required。' },
      { id: 'acquire.q3', senseId: 'acquire.s1', errorType: 'confusable', type: '易混', prompt: 'I _____ whether the room was free.', options: ['inquired', 'acquired', 'required'], answer: 'inquired', explain: '询问用 inquire。' },
      { id: 'acquire.q4', senseId: 'acquire.s1', errorType: 'collocation', type: '搭配', prompt: 'He acquired the _____ of rising early.', options: ['habit', 'habitual', 'habitat'], answer: 'habit', explain: 'acquire a habit。' },
    ],
    relations: [
      { target: 'require', relationTypes: ['visual', 'confusable'], zh: '需要；要求', spellingDiff: '前缀不同：acquire 是 ac-，require 是 re-。', semanticDiff: 'acquire 是得到；require 是需要或要求。', collocationDiff: 'acquire a skill；require attention' },
      { target: 'inquire', relationTypes: ['visual', 'confusable'], zh: '询问', spellingDiff: 'inquire 以 in- 开头。', semanticDiff: 'inquire 是问；acquire 是获得。', collocationDiff: 'inquire about a price；acquire a habit' },
    ],
    usage: { domains: ['学习', '正式书面'], commonConfusion: ['require', 'inquire'] },
  });
})(typeof window !== 'undefined' ? window : globalThis);
