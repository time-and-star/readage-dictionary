/* data/words/cet/author_m9.js · 手敲词条 M（六·引用缺口批）：moisturizer ~ movable（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批 7 条考级标签）。
 * 短语 7 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级、mono-/前缀不作成分，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_m9.js 必须在 _cet_helper.js 之后加载');

  W('moisturizer', 'noun', '/ˈmɔɪstʃəraɪzə/', 'B1', [], '润肤露', 'A cream that keeps skin soft.', [
    ['润肤露', 'A cream that keeps skin soft.', '保持皮肤柔软的乳霜。', '可数。', 'Apply moisturizer after washing.', '洗完后涂上润肤露。', [], ['lotion'], 'noun', 'countable', '外貌'],
  ], 'moisturizers', ['moisture'], '←moisture B1 词干 moistur- + -ize + -er（工具后缀），B1 继承；近义 lotion 乳液');

  W('molar', 'noun', '/ˈməʊlə/', '', [], '臼齿', 'A large tooth at the back of the mouth.', [
    ['臼齿', 'A large tooth at the back of the mouth used for grinding.', '口腔后部用于咀嚼的大牙。', '可数。', 'The dentist filled a molar.', '牙医补了一颗臼齿。', [], ['tooth'], 'noun', 'countable', '健康'],
  ], 'molars', [], '拉丁 molaris（磨石）——无库内派生根，故留空；近义 tooth 牙齿');

  W('mole', 'noun', '/məʊl/', '', [], '间谍', 'A spy inside an organization.', [
    ['间谍', 'A person secretly working inside an organization for its enemies.', '秘密潜伏在组织内部的敌方人员。', '可数：a mole in。', 'They discovered a mole in the agency.', '他们在机构里发现了一个内奸。', [], ['spy'], 'noun', 'countable', '军事'],
  ], 'moles', [], '无库内派生根（另有痣、鼹鼠义），故留空；近义 spy 间谍');

  W('molest', 'verb', '/məˈlest/', '', [], '骚扰；猥亵', 'To touch someone sexually without consent.', [
    ['骚扰；猥亵', 'To touch or harm someone in a sexual way without consent.', '未经同意进行性骚扰或猥亵。', '及物，法律用语。', 'She reported a stranger who molested her at the station.', '她举报了一名在车站对她进行骚扰的陌生人。', [], ['harass'], 'verb', '及物', '法律'],
  ], 'molests~molested~molested~molesting', [], '形含 mole 但源自拉丁 molestus（麻烦的），语义无关，切词假象，故留空；近义 harass 骚扰');

  W('monarch', 'noun', '/ˈmɒnək/', 'C1', ['CET6'], '君主；帝王', 'A king or queen who rules a country.', [
    ['君主；帝王', 'A king or queen who rules a country.', '统治国家的国王或女王。', '可数。', 'The monarch addressed the nation.', '君主向全国发表了讲话。', [], ['emperor', 'king', 'majesty', 'queen', 'royal', 'sovereign'], 'noun', 'countable', '政治'],
  ], 'monarchs', ['emperor', 'king', 'royal', 'sovereign'], '希腊 monarkhos（单独统治者）——无库内派生根，故留空；家族 emperor 皇帝、king 国王、royal 王室的、sovereign 君主，近义 majesty 陛下、queen 女王');

  W('mongrel', 'noun/adjective', '/ˈmʌŋɡrəl/', '', [], '杂种狗；混血的', 'A dog of mixed breeds.', [
    ['杂种狗；混血的', 'A dog of mixed breeds; mixed in origin.', '杂交狗；混血的。', '名词与形容词两用。', 'The mongrel followed them home.', '那只杂种狗跟着他们回了家。', [], ['hybrid'], 'noun/adjective', 'null', '自然'],
  ], 'mongrels', [], '无库内派生根，故留空；近义 hybrid 杂交的');

  W('monitoring', 'noun', '/ˈmɒnɪtərɪŋ/', 'B2', [], '监测；监控', 'Watching something over time.', [
    ['监测；监控', 'The act of watching something over time to check how it behaves.', '持续观察以检查其状态的行为。', '不可数。', 'The patient is under close monitoring.', '这名病人正接受密切监护。', [], ['surveillance'], 'noun', 'uncountable', '健康'],
  ], '', ['surveillance'], '←monitor B2 + -ing（透明后缀），B2 继承（brief 根提示）；家族/近义 surveillance 监控');

  W('monk', 'noun', '/mʌŋk/', '', [], '修士；僧侣', 'A man who lives in a religious community.', [
    ['修士；僧侣', 'A man who lives in a religious community.', '修道院里的修行男子。', '可数。', 'The monk lived alone in the hills.', '修士独自住在山中。', [], ['prior'], 'noun', 'countable', '宗教'],
  ], 'monks', ['abbot'], '希腊 monakhos（独居者）——无库内派生根，故留空；家族 abbot 修道院长、近义 prior 小修道院院长');

  W('monotonous', 'adjective', '/məˈnɒtənəs/', 'C1', ['CET6'], '单调的；乏味的', 'Boring because it is always the same.', [
    ['单调的；乏味的', 'Boring because it is always the same.', '因一成不变而无聊的。', '定语或表语。', 'The work was monotonous and tiring.', '这工作单调乏味又累人。', [], ['flat', 'routine', 'tedious'], 'adjective', '定语/表语', '通用'],
  ], '', ['tone'], 'mono- 前缀不作成分，词根 tone B2 在库（monotone 不在库，词干 ton- 可见），B2 继承；近义 flat 平淡的、routine 例行的、tedious 冗长乏味的');

  W('morality', 'noun', '/məˈræləti/', 'B2', ['CET4'], '道德；伦理', 'Principles of right and wrong behaviour.', [
    ['道德；伦理', 'Principles of right and wrong behaviour.', '关于是非对错的行为准则。', '不可数或可数。', 'The film questions the morality of war.', '这部电影质疑了战争的道德性。', [], ['ethic', 'virtue'], 'noun', 'uncountable', '社会'],
  ], '', ['ethic'], '←moral B2 + -ity（透明后缀），B2 继承（brief 根提示）；家族 ethic 伦理、近义 virtue 德行');

  W('moralize', 'verb', '/ˈmɒrəlaɪz/', 'B2', [], '说教；训诫', 'To talk about right and wrong in a preachy way.', [
    ['说教；训诫', 'To talk about right and wrong in a preachy way.', '以训诫口吻谈论是非。', '不及物：moralize about。', 'He kept moralizing about the old days.', '他老是对着过去的事说教。', ['moralize about'], ['preach'], 'verb', '不及物', '通用'],
  ], 'moralizes~moralized~moralized~moralizing', ['moral'], '←moral B2 + -ize（透明后缀，同 legalize），B2 继承；近义 preach 讲道、说教');

  W('more badly', 'adverb', '/ˌmɔː ˈbædli/', '', [], '更坏地（比较级）', 'The comparative form of badly.', [
    ['更坏地（比较级）', 'The comparative form of badly.', 'badly 的比较级形式。', '副词短语，语法性组合。', 'She sings more badly than before.', '她唱得比以前更难听了。', [], ['worse'], 'adverb', 'null', '语法'],
  ], '', [], 'more + badly；近义 worse 更坏地（不规则比较级）。短语分级留空').phrase = true;

  W('more distant', 'adjective', '/ˌmɔː ˈdɪstənt/', '', [], '更远的；更疏远的', 'The comparative form of distant.', [
    ['更远的；更疏远的', 'The comparative form of distant.', 'distant 的比较级形式。', '形容词短语。', 'The hills grew more distant behind them.', '远处的山在他们身后越来越远。', [], ['farther'], 'adjective', 'null', '语法'],
  ], '', ['farther'], 'more + distant；家族/近义 farther 更远。短语分级留空').phrase = true;

  W('more precisely', 'adverb', '/ˌmɔː prɪˈsaɪsli/', '', [], '更准确地说', 'Used to give a more exact statement.', [
    ['更准确地说', 'Used to give a more exact statement.', '用于给出更精确的说法。', '副词短语，插入语。', 'The event drew 500 people, more precisely 480.', '活动来了 500 人——准确说是 480 人。', [], ['rather'], 'adverb', 'null', '语法'],
  ], '', [], 'more + precisely；近义 rather 更确切地。短语分级留空').phrase = true;

  W('more than', 'adverb', '/ˌmɔː ˈðæn/', '', [], '多于；超过', 'Used to say the number is greater.', [
    ['多于；超过', 'Used to say there is a greater number or amount than something.', '表示数量超过某数。', '副词短语。', 'The trip cost more than we planned.', '这趟旅行花了比我们计划更多的钱。', [], ['over'], 'adverb', 'null', '通用'],
  ], '', [], 'more + than；近义 over 超过。短语分级留空').phrase = true;

  W('mortify', 'verb', '/ˈmɔːtɪfaɪ/', 'C1', [], '使羞愧难当', 'To cause someone to feel very ashamed.', [
    ['使羞愧难当', 'To cause someone to feel very ashamed.', '使某人极其羞愧。', '及物，常被动。', 'She was mortified by the praise.', '她被夸得无地自容。', [], ['humiliate'], 'verb', '及物', '情感'],
  ], 'mortifies~mortified~mortified~mortifying', ['mortal'], '←mortal C1 词干 mort- + -ify（使动后缀，如 liquid→liquefy），使（组织）坏死、使（人）羞愧欲死，C1 继承；近义 humiliate 羞辱');

  W('most badly', 'adverb', '/ˌməʊst ˈbædli/', '', [], '最坏地（最高级）', 'The superlative form of badly.', [
    ['最坏地（最高级）', 'The superlative form of badly.', 'badly 的最高级形式。', '副词短语，语法性组合。', 'This was performed most badly of all.', '这是全场演得最差的一场。', [], ['worst'], 'adverb', 'null', '语法'],
  ], '', [], 'most + badly；近义 worst 最坏地（不规则最高级）。短语分级留空').phrase = true;

  W('mother side', 'noun', '/ˈmʌðə saɪd/', '', [], '母系一方；娘家', 'The side of the family from the mother.', [
    ['母系一方；娘家', 'The side of the family that comes from the mother.', '母方亲属；外婆家。', '名词短语：on the mother side。', 'The land came from the mother side.', '这块地是从娘家来的。', ['on the mother side'], ['maternal'], 'noun', 'uncountable', '家庭'],
  ], '', [], 'mother + side；近义 maternal 母系的、母亲的。短语分级留空').phrase = true;

  W('motherland', 'noun', '/ˈmʌðəlænd/', 'A1', [], '祖国', 'A country where someone feels they belong.', [
    ['祖国', 'A country where someone was born or feels they belong.', '出生地或认同归属的国家。', '可数。', 'Emigrants often long for the motherland.', '移民常思念祖国。', [], ['homeland'], 'noun', 'countable', '社会'],
  ], 'motherlands', ['homeland'], 'mother + land——首成分 mother A1 在库，A1 继承（首成分规则）；家族/近义 homeland 祖国');

  W('motherly', 'adjective', '/ˈmʌðəli/', 'A1', ['CET4'], '母亲般的', 'Like a kind mother in behaviour.', [
    ['母亲般的', 'Like a kind mother in behaviour.', '行为像慈爱的母亲的。', '定语。', 'She gave the child a motherly smile.', '她给了孩子一个母亲般的微笑。', [], ['maternal'], 'adjective', '定语', '家庭'],
  ], '', ['maternal'], '←mother A1 + -ly（透明后缀，同 lovely），A1 继承（brief 根提示）；家族/近义 maternal 母系的、母亲的');

  W('motif', 'noun', '/məʊˈtiːf/', 'B2', [], '动机；主题', 'A short idea repeated in music or art.', [
    ['动机；主题', 'A short idea that is repeated in a piece of music or art.', '音乐或艺术中反复出现的短小主题。', '可数。', 'The composer developed a simple motif.', '作曲家发展出一个简单的动机。', ['musical motif'], ['motive', 'pattern', 'phrase', 'theme'], 'noun', 'countable', '艺术'],
  ], 'motifs', ['motive'], '←motive B2（v→f 音变，法语式拼写，同根动机/主题），B2 继承；近义 motive 动机、pattern 图案、phrase 乐句、theme 主题');

  W('motionless', 'adjective', '/ˈməʊʃnləs/', 'B2', [], '静止的；不动的', 'Not moving at all.', [
    ['静止的；不动的', 'Not moving at all.', '完全不动的。', '定语或表语。', 'The snake lay motionless in the grass.', '蛇一动不动地躺在草里。', [], ['still'], 'adjective', '定语/表语', '自然'],
  ], '', ['motion'], '←motion B2 + -less（透明后缀），B2 继承；近义 still 静止的');

  W('motivation', 'noun', '/ˌməʊtɪˈveɪʃn/', 'B2', ['CET4'], '动力；积极性', 'The reason for behaving a certain way.', [
    ['动力；积极性', 'The reason and drive for behaving in a certain way.', '行为背后的驱动力。', '不可数或可数。', 'She lost motivation after the setback.', '挫折之后她失去了动力。', ['motivation for'], ['incentive', 'motive'], 'noun', 'uncountable', '心理'],
  ], '', ['incentive', 'motive'], '←motive B2 + -ation（e→ation，名词化），B2 继承（brief 根提示）；家族 incentive 激励、motive 动机');

  W('motor race', 'noun', '/ˈməʊtə reɪs/', '', [], '赛车比赛', 'A race for motor vehicles.', [
    ['赛车比赛', 'A race for motor vehicles.', '机动车辆的比赛。', '可数。', 'The motor race drew huge crowds.', '赛车比赛吸引了大批观众。', [], ['rally'], 'noun', 'countable', '体育'],
  ], '', [], 'motor + race；近义 rally 拉力赛。短语分级留空').phrase = true;

  W('motto', 'noun', '/ˈmɒtəʊ/', '', [], '格言；座右铭', 'A short sentence used as a guide.', [
    ['格言；座右铭', 'A short sentence used as a guide or slogan.', '作为指引或口号的短句。', '可数。', 'Their motto is simple: work first.', '他们的口号很简单：工作第一。', [], ['slogan'], 'noun', 'countable', '通用'],
  ], 'mottos', ['slogan'], '意大利 motta——无库内派生根，故留空；家族/近义 slogan 口号');

  W('mound', 'noun', '/maʊnd/', '', [], '土堆；土丘', 'A raised heap of earth or stones.', [
    ['土堆；土丘', 'A raised bank or heap of earth or stones.', '隆起的土或石堆。', '可数。', 'They built a mound of earth at the edge.', '他们在边上堆了个土丘。', [], ['hill'], 'noun', 'countable', '自然'],
  ], 'mounds', ['hill'], '无库内派生根（形近 mount（山）但非派生），故留空；家族/近义 hill 小山');

  W('mourning', 'noun', '/ˈmɔːnɪŋ/', 'C1', ['CET6'], '哀悼', 'Great sadness because someone has died.', [
    ['哀悼', 'Great sadness because someone has died.', '因亲人去世而深感悲伤。', '不可数：in mourning。', 'The nation was in mourning for the queen.', '全国在为女王哀悼。', ['in mourning'], ['grief'], 'noun', 'uncountable', '情感'],
  ], '', ['mourn'], '←mourn C1 + -ing（透明后缀），C1 继承（brief 根提示）；近义 grief 悲痛');

  W('moustache', 'noun', '/məˈstɑːʃ/', '', [], '小胡子', 'Hair growing above the upper lip.', [
    ['小胡子', 'Hair growing above the upper lip.', '上唇上方的胡须。', '可数。', 'He grew a moustache for the role.', '他为这个角色留了小胡子。', [], ['beard'], 'noun', 'countable', '外貌'],
  ], 'moustaches', [], '形含 must（A1）但词源法语 moustache（须），与 must（必须）语义无关，切词假象，故留空；近义 beard 胡须');

  W('mouthful', 'noun', '/ˈmaʊθfʊl/', 'A1', ['CET4'], '一口；满嘴', 'The amount that fits in the mouth.', [
    ['一口；满嘴', 'The amount that fits in the mouth.', '一次能装进嘴里的量。', '可数：a mouthful of。', 'He took a big mouthful of soup.', '他喝了一大口汤。', ['a mouthful of'], ['sip'], 'noun', 'countable', '饮食'],
  ], 'mouthfuls', ['mouth'], 'mouth + ful——首成分 mouth A1 在库，A1 继承（首成分规则）；近义 sip 啜饮');

  W('mouthpiece', 'noun', '/ˈmaʊθpiːs/', 'A1', [], '话筒嘴；喉舌', 'The part you speak into, or a spokesman.', [
    ['话筒嘴；喉舌', 'The part you speak into, or a group that speaks for others.', '话筒的发声部；也指代人发言的机构。', '可数。', 'The paper acted as a mouthpiece for the party.', '这家报纸充当了该党的喉舌。', [], ['organ'], 'noun', 'countable', '媒体'],
  ], 'mouthpieces', ['mouth'], 'mouth + piece——首成分 mouth A1 在库，A1 继承（首成分规则）；近义 organ 机关（报）');

  W('movable', 'adjective', '/ˈmuːvəbl/', 'A1', [], '可移动的', 'Able to be moved.', [
    ['可移动的', 'Able to be moved.', '可以搬动的。', '定语或表语。', 'All the parts are movable.', '所有部件都可以移动。', [], ['mobile'], 'adjective', '定语/表语', '通用'],
  ], '', ['move'], '←move A1 + -able（透明后缀），A1 继承；近义 mobile 可移动的');

})(typeof window !== 'undefined' ? window : globalThis);
