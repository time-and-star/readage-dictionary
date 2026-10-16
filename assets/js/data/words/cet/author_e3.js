/* data/words/cet/author_e3.js · 手敲词条 E（三·前段）：eagerness ~ elderly（含 4 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_e3.js 必须在 _cet_helper.js 之后加载');

  W('eagerness', 'noun', '/ˈiːɡənəs/', 'B1', [], '渴望；热切', 'A strong desire to do something or for something to happen.', [
    ['渴望；热切', 'A strong desire to do something or for something to happen.', '做某事或盼某事发生的强烈愿望。', '不可数：eagerness to do / for。', 'The children showed great eagerness to help.', '孩子们表现出极大的热心。', ['eagerness to learn'], ['enthusiasm'], 'noun', 'uncountable', '通用'],
  ], '', ['eager'], '←eager B1 渴望的 + -ness，B1 继承；近义 enthusiasm 热情（更常用）');

  W('earlier', 'adjective/adverb', '/ˈɜːliə(r)/', 'A1', [], '更早的；早些时候的', 'At a time before the present or before something else; comparative of early.', [
    ['更早的；早些时候的', 'At a time before the present or before something else; comparative of early.', '在现在或某事之前的时间；early 的比较级。', '形容词或副词比较级。', 'We met at an earlier date.', '我们约了个更早的日子见面。', ['an earlier version'], ['previous', 'prior'], 'adjective/adverb', 'null', '通用'],
  ], '', ['previous'], 'early A1 的比较级（y→ier），A1 继承；家族 previous 以前的（正式），近义 prior 在先的（正式）');

  W('earliest', 'adjective/adverb', '/ˈɜːliɪst/', 'A1', [], '最早的', 'Coming before all others in time; superlative of early.', [
    ['最早的', 'Coming before all others in time; superlative of early.', '时间上在所有其他之前；early 的最高级。', '最高级：the earliest。', 'This is the earliest bus.', '这是最早的一班车。', ['the earliest'], ['first'], 'adjective/adverb', 'null', '通用'],
  ], '', ['early'], '←early A1 的最高级，A1 继承；近义 first 第一（最常用）');

  W('earnings', 'noun', '/ˈɜːnɪŋz/', 'A2', ['CET4'], '收入；所得', 'Money that you get by working or from investments, usually plural.', [
    ['收入；所得', 'Money that you get by working or from investments, usually plural.', '工作或投资所得的钱，常用复数。', '常用复数：monthly earnings。', 'The company reported higher earnings.', '公司报告了更高的收益。', ['monthly earnings'], ['income', 'profit', 'salary'], 'noun', 'countable', '商务'],
  ], '', ['earn', 'income'], '←earn A2 赚取 + -ings，A2 继承；家族 income 收入（最常用），近义 profit 利润、salary 薪水');

  W('earthenware', 'noun', '/ˈɜːθnweə(r)/', 'A1', [], '陶器', 'Dishes and pots made of baked clay.', [
    ['陶器', 'Dishes and pots made of baked clay.', '用烘烤黏土制的盘、罐。', '不可数或可数，较正式。', 'The shelf held simple earthenware bowls.', '架子上放着朴素的陶碗。', [], ['pottery'], 'noun', 'uncountable/countable', '家居'],
  ], '', ['pottery'], 'earth A1 泥土 + -en + ware 器皿，取首成分级 A1；家族 pottery 陶器（最常用）');

  W('eastern', 'adjective', '/ˈiːstən/', '', ['CET4'], '东方的；东部的', 'In or from the east part of the world or a country.', [
    ['东方的；东部的', 'In or from the east part of the world or a country.', '在世界或国家东部、来自东方的。', 'Eastern 大写指东方文化。', 'They studied eastern philosophy.', '他们研究东方哲学。', ['eastern culture'], ['east', 'orthodox'], 'adjective', '定语', '文化'],
  ], '', ['east', 'orient'], 'east A1 + -ern——后缀 -ern 不在透明继承表内（参照 downward B1 未随 down A1），故留空；家族 east 东方、orient 东方（文学用语），近义 orthodox 东正教的');

  W('eastward', 'adverb/adjective', '/ˈiːstwəd/', '', [], '向东的；朝东', 'Towards the east.', [
    ['向东的；朝东', 'Towards the east.', '朝着东方。', '副词或形容词，亦拼 eastwards。', 'The ship sailed eastward.', '船向东航行。', [], ['east'], 'adverb/adjective', 'null', '交通'],
  ], '', ['east'], 'east A1 + -ward——后缀不透明（参照 downward B1），故留空；家族 east 东（A1）');

  W('eastwards', 'adverb', '/ˈiːstwədz/', '', [], '向东；朝东', 'Towards the east.', [
    ['向东；朝东', 'Towards the east.', '朝着东方。', '副词，主英式。', 'The road runs eastwards.', '这条路向东延伸。', [], ['east'], 'adverb', 'null', '交通'],
  ], '', [], 'eastward 的 -s 变体；近义 east 东（A1）。分级留空');

  W('easy task', 'noun', '/ˌiːzi ˈtɑːsk/', '', [], '容易的事', 'Something that is not difficult to do.', [
    ['容易的事', 'Something that is not difficult to do.', '不难做的事。', '名词短语。', 'Fixing the shelf was an easy task.', '修架子是个容易的活。', [], ['picnic'], 'noun', 'countable', '通用'],
  ], '', ['picnic'], 'easy 容易的 + task 任务；近义 picnic 轻松事（refs 镜像）。短语分级留空').phrase = true;

  W('eat away', 'verb', '/ˌiːt əˈweɪ/', '', [], '侵蚀；啃掉', 'To gradually destroy something by eating or chemical action.', [
    ['侵蚀；啃掉', 'To gradually destroy something by eating or chemical action.', '一点点吃掉或腐蚀掉某物。', '及物或不及物短语：eat away at。', 'Rust ate away the pipes.', '锈蚀坏了管道。', ['eat away at'], ['corrode'], 'verb', '及物', '科学'],
  ], '', ['corrode'], 'eat 吃 + away 掉；近义 corrode 腐蚀（正式）。短语分级留空').phrase = true;

  W('eat outdoors', 'verb', '/ˌiːt aʊtˈdɔːz/', '', [], '在户外吃；在外野餐', 'To have a meal outside a building.', [
    ['在户外吃；在外野餐', 'To have a meal outside a building.', '在建筑物外面吃饭。', '不及物短语。', 'We ate outdoors on the balcony.', '我们在阳台上吃的饭。', [], ['picnic'], 'verb', '不及物', '饮食'],
  ], '', ['picnic'], 'eat 吃 + outdoors 在户外；近义 picnic 野餐。短语分级留空').phrase = true;

  W('eatable', 'adjective', '/ˈiːtəbl/', 'A1', [], '可吃的', 'Safe or good enough to eat.', [
    ['可吃的', 'Safe or good enough to eat.', '吃起来安全或可口的。', '较旧，现多用 edible。', 'The fruit is eatable when ripe.', '这种水果熟了可以吃。', [], ['edible'], 'adjective', '定语/表语', '饮食'],
  ], '', ['eat', 'edible'], '←eat A1 + -able，A1 继承；家族 edible 可食用的（正式、常用）');

  W('eatery', 'noun', '/ˈiːtəri/', 'A1', [], '小餐馆', 'A small informal restaurant.', [
    ['小餐馆', 'A small informal restaurant.', '小而不正式的餐馆。', '可数，口语。', 'They had lunch at a nearby eatery.', '他们在附近一家小餐馆吃的午饭。', [], ['restaurant'], 'noun', 'countable', '饮食'],
  ], 'eateries', ['eat'], '←eat A1 + -ery（表场所，同 diner←dine），A1 继承；近义 restaurant 餐馆（最常用）');

  W('eavesdrop', 'verb', '/ˈiːvzdrɒp/', '', [], '偷听', 'To secretly listen to what others are saying.', [
    ['偷听', 'To secretly listen to what others are saying.', '暗中听别人说话。', '不及物：eavesdrop on。', 'He eavesdropped on their conversation.', '他偷听了他们的谈话。', ['eavesdrop on'], ['overhear'], 'verb', '不及物', '社交'],
  ], 'eavesdrops~eavesdropped~eavesdropped~eavesdropping', ['overhear'], 'eaves 屋檐 + drop——首成分 eaves 不在库（非透明复合），故留空；家族 overhear 偶然听到（B2）。分级留空');

  W('ebb', 'noun/verb', '/eb/', '', [], '退潮；衰退', 'The movement of the sea away from land, or a gradual decline.', [
    ['退潮；衰退', 'The movement of the sea away from land, or a gradual decline.', '海水退去，或逐渐衰落。', '名词或不及物动词：ebb and flow。', 'The tide began to ebb.', '潮水开始退了。', ['ebb and flow'], ['recede', 'tide'], 'noun/verb', 'null', '自然'],
  ], 'ebbs~ebbed~ebbed~ebbing', [], '古英语 ebba——无库内派生根；近义 recede 退去、tide 潮汐。分级留空');

  W('ebony', 'noun/adjective', '/ˈebəni/', '', [], '乌木；黑檀', 'A very dark heavy wood, or its black colour.', [
    ['乌木；黑檀', 'A very dark heavy wood, or its black colour.', '质重色深的木材，或其黑色。', '不可数（木材）或形容词（乌木色的）。', 'The piano has ebony keys.', '钢琴有乌木琴键。', [], ['jet'], 'noun/adjective', 'null', '家居'],
  ], '', [], '源自闪语 hobnim——无库内派生根；近义 jet 黑玉色（深黑）。分级留空');

  W('eco-friendly', 'adjective', '/ˌiːkəʊ ˈfrendli/', '', [], '环保的', 'Not harmful to the environment.', [
    ['环保的', 'Not harmful to the environment.', '对环境无害的。', '复合形容词。', 'They sell eco-friendly bags.', '他们卖环保袋。', [], ['green'], 'adjective', '定语', '自然'],
  ], '', [], 'eco- + friendly——friendly 不在库（直接关联词缺失），故留空；近义 green 绿色的（环保义，g1 互引）。分级留空');

  W('economize', 'verb', '/ɪˈkɒnəmaɪz/', 'A2', [], '节约；节省', 'To spend less money or use fewer resources.', [
    ['节约；节省', 'To spend less money or use fewer resources.', '少花钱或少用资源。', '不及物或及物：economize on。', 'We must economize on water.', '我们必须节约用水。', ['economize on'], ['husband', 'save'], 'verb', '不及物', '商务'],
  ], 'economizes~economized~economized~economizing', ['economy'], '←economy A2 经济 + -ize（y→ize，同 mobilize），A2 继承；近义 husband 节约、save 节省（最常用）');

  W('edition', 'noun', '/ɪˈdɪʃn/', 'B1', ['CET4'], '版本；版次', 'A particular form in which a book or newspaper is published.', [
    ['版本；版次', 'A particular form in which a book or newspaper is published.', '图书报刊出版的特定形式。', '可数：first edition（初版）。', 'I bought the latest edition.', '我买了最新版。', ['latest edition'], ['number', 'version'], 'noun', 'countable', '媒体'],
  ], 'editions', ['edit', 'version'], '←edit B1 编辑 + -ion，B1 继承；家族 version 版本（最常用），近义 number 期号（一期报刊）');

  W('educational', 'adjective', '/ˌedʒuˈkeɪʃənl/', 'A2', ['CET4'], '教育的；有教育意义的', 'About education, or giving useful knowledge.', [
    ['教育的；有教育意义的', 'About education, or giving useful knowledge.', '关于教育的，或给人有益知识的。', '较正式。', 'The museum is highly educational.', '这家博物馆很有教育意义。', [], ['academic'], 'adjective', '定语/表语', '教育'],
  ], '', ['educate'], '←educate A2 + -ion + -al，A2 继承；近义 academic 学术的（学院派）');

  W('eerie', 'adjective', '/ˈɪəri/', '', [], '怪异的；阴森的', 'Strange and frightening.', [
    ['怪异的；阴森的', 'Strange and frightening.', '奇怪而令人害怕的。', 'an eerie silence 瘆人的寂静。', 'An eerie sound came from the cellar.', '地窖里传出瘆人的声音。', ['eerie silence'], ['weird'], 'adjective', '定语', '文化'],
  ], '', [], '苏格兰语源——无库内派生根；近义 weird 诡异的（常用）。分级留空');

  W('efficiency', 'noun', '/ɪˈfɪʃənsi/', 'B2', ['CET4'], '效率', 'The quality of working well without wasting resources.', [
    ['效率', 'The quality of working well without wasting resources.', '不浪费资源、高效运作的品质。', '不可数。', 'The new system improved efficiency.', '新系统提高了效率。', ['improve efficiency'], [], 'noun', 'uncountable', '商务'],
  ], '', ['efficient'], '←efficient B2 + -cy，B2 继承；家族 efficient 高效的（curated B2）');

  W('effortless', 'adjective', '/ˈefətləs/', 'A2', [], '不费力的；轻松的', 'Needing no effort; very easy.', [
    ['不费力的；轻松的', 'Needing no effort; very easy.', '不需要费力的、很容易的。', 'effortless ease 轻松自如。', 'She gave an effortless performance.', '她的表演轻松自如。', [], ['easy'], 'adjective', '定语', '通用'],
  ], '', ['effort'], '←effort A2 努力 + -less（无…的，同 defenceless），A2 继承；近义 easy 容易的（最常用）');

  W('egg shape', 'noun', '/ˈeɡ ʃeɪp/', '', [], '蛋形', 'The shape of an egg; longer one way than the other.', [
    ['蛋形', 'The shape of an egg; longer one way than the other.', '鸡蛋的形状，一头稍尖。', '名词短语。', 'The table has an egg shape.', '这张桌子是蛋形的。', [], ['oval'], 'noun', 'countable', '通用'],
  ], '', ['oval'], 'egg 蛋 + shape 形状；近义 oval 椭圆形的。短语分级留空').phrase = true;

  W('egg-shaped', 'adjective', '/ˈeɡ ʃeɪpt/', 'A1', [], '蛋形的', 'Shaped like an egg.', [
    ['蛋形的', 'Shaped like an egg.', '像鸡蛋形状的。', '复合形容词。', 'The leaves are egg-shaped.', '叶子是蛋形的。', [], ['oval'], 'adjective', '定语', '自然'],
  ], '', ['egg'], '←egg A1 + -shaped，取首成分级 A1；近义 oval 椭圆形的');

  W('eighteenth', 'number', '/ˌeɪˈtiːnθ/', 'A1', [], '第十八', 'Number 18 in a series; the ordinal of eighteen.', [
    ['第十八', 'Number 18 in a series; the ordinal of eighteen.', '序列中第 18；eighteen 的序数词。', '数词家族统一取序数词义。', 'Today is the eighteenth.', '今天是十八号。', [], ['eighteen'], 'number', 'null', '通用'],
  ], '', ['eighteen'], '←eighteen A1 + -th，A1 继承；家族 eighteen 十八（基数词）');

  W('eighthly', 'adverb', '/ˈeɪtθli/', 'A2', [], '第八', 'In the eighth place; eighth in order.', [
    ['第八', 'In the eighth place; eighth in order.', '在第八位。', '副词，列举用语。', 'Eighthly, we need more time.', '第八，我们需要更多时间。', [], ['eighth'], 'adverb', 'null', '书面'],
  ], '', ['eighth'], '←eighth A2 + -ly，A2 继承；近义 eighth 第八（序数词）');

  W('eightieth', 'number', '/ˈeɪtiɪθ/', 'A1', [], '第八十', 'Number 80 in a series; the ordinal of eighty.', [
    ['第八十', 'Number 80 in a series; the ordinal of eighty.', '序列中第 80；eighty 的序数词。', '数词家族统一取序数词义。', 'He celebrated his eightieth birthday.', '他庆祝了八十岁生日。', [], ['eighty'], 'number', 'null', '通用'],
  ], '', ['eighty'], '←eighty A1 + -eth（y→ieth），A1 继承；家族 eighty 八十（基数词）');

  W('elasticity', 'noun', '/ˌelæˈstɪsəti/', 'B2', ['CET6'], '弹性', 'The ability to stretch and return to shape, or to adapt.', [
    ['弹性', 'The ability to stretch and return to shape, or to adapt.', '拉伸后复原的能力，或适应性。', '不可数：物理与比喻义。', 'Rubber has great elasticity.', '橡胶弹性很好。', [], ['give'], 'noun', 'uncountable', '科学'],
  ], '', ['elastic'], '←elastic B2 有弹性的 + -ity，B2 继承；近义 give 弹性（回弹义）');

  W('elderly', 'adjective/noun', '/ˈeldəli/', 'B1', ['CET4'], '上了年纪的；老年人', 'Old, in a polite way; old people as a group.', [
    ['上了年纪的；老年人', 'Old, in a polite way; old people as a group.', '委婉说「老的」；老年群体。', '形容词或 the elderly 老年人群。', 'We should help the elderly.', '我们应该帮助老年人。', ['the elderly'], ['old'], 'adjective/noun', 'null', '社会'],
  ], '', ['elder', 'old'], '←elder B1 年长的 + -ly，B1 继承；家族 old 老的（最常用）');

  W('elegance', 'noun', '/ˈelɪɡəns/', 'B1', ['CET4'], '优雅', 'Graceful beauty in manner or style.', [
    ['优雅', 'Graceful beauty in manner or style.', '举止或风格上高雅的美。', '不可数。', 'She dances with elegance.', '她跳舞姿态优雅。', [], ['grace'], 'noun', 'uncountable', '艺术'],
  ], '', ['elegant', 'grace'], '←elegant B1 优雅的 + -ce（t→ce 音变），B1 继承；家族 grace 优雅（正式）');

  W('elevated', 'adjective', '/ˈelɪveɪtɪd/', 'B2', [], '升高的；高架的', 'Raised to a higher place or level.', [
    ['升高的；高架的', 'Raised to a higher place or level.', '被抬到更高处。', '分词形容词：elevated railway（高架铁路）。', 'The house stands on elevated ground.', '房子建在高地上。', ['elevated railway'], ['high', 'overhead'], 'adjective', '定语', '交通'],
  ], '', ['elevate'], '←elevate B2 抬高 + -ed，B2 继承；近义 high 高的、overhead 在头顶上方的');

  W('elevator', 'noun', '/ˈelɪveɪtə(r)/', 'B2', ['CET4'], '电梯；升降机', 'A machine that carries people up and down in a building.', [
    ['电梯；升降机', 'A machine that carries people up and down in a building.', '楼内载人上下的机器。', '可数，美式；英式用 lift。', 'Take the elevator to the fifth floor.', '乘电梯到五楼。', [], ['lift'], 'noun', 'countable', '家居'],
  ], 'elevators', ['elevate', 'lift'], '←elevate B2 + -or（表物，ate→or 同 creator），B2 继承；家族 lift 电梯（英式常用）');

  W('eleventh', 'number', '/ɪˈlevnθ/', 'A1', [], '第十一', 'Number 11 in a series; the ordinal of eleven.', [
    ['第十一', 'Number 11 in a series; the ordinal of eleven.', '序列中第 11；eleven 的序数词。', '数词家族统一取序数词义。', 'He finished eleventh in the race.', '他比赛得了第十一名。', [], ['eleven'], 'number', 'null', '体育'],
  ], '', ['eleven'], '←eleven A1 + -th，A1 继承；家族 eleven 十一（基数词）');

  W('elf', 'noun', '/elf/', '', [], '小精灵', 'A small imaginary person with magic powers and pointed ears.', [
    ['小精灵', 'A small imaginary person with magic powers and pointed ears.', '有魔法、尖耳朵的小小虚构人物。', '可数，复数 elves。', 'The story is full of elves and fairies.', '故事里满是精灵。', [], ['fairy'], 'noun', 'countable', '文化'],
  ], 'elves', ['fairy'], '日耳曼语基本词——无库内派生根；家族 fairy 仙子。分级留空');

  W('elitist', 'noun/adjective', '/eɪˈliːtɪst/', 'B2', [], '精英主义者；自命精英的', 'Someone who believes only a small rich or educated group should rule, or the attitude itself.', [
    ['精英主义者；自命精英的', 'Someone who believes only a small rich or educated group should rule, or the attitude itself.', '认为只应由少数富人或知识分子统治的人或态度。', '可数（人）或形容词。', 'The club has an elitist image.', '这家俱乐部形象很高冷排外。', [], ['snob'], 'noun/adjective', 'null', '社会'],
  ], 'elitists', ['elite', 'snob'], '←elite B2 精英 + -ist，B2 继承；家族 snob 势利小人（贬义）');

  W('ellipse', 'noun', '/ɪˈlɪps/', '', [], '椭圆', 'A regular oval shape like a flattened circle.', [
    ['椭圆', 'A regular oval shape like a flattened circle.', '像压扁的圆的规则椭圆形。', '可数，数学用语。', 'The orbit is an ellipse.', '轨道是个椭圆。', [], ['oval'], 'noun', 'countable', '科学'],
  ], 'ellipses', ['oval'], '希腊语 elleipsis（缺省）——无库内派生根；家族 oval 椭圆形（常用）。分级留空');

  W('elliptical', 'adjective', '/ɪˈlɪptɪkl/', '', [], '椭圆的；省略的', 'Shaped like an ellipse, or leaving out words.', [
    ['椭圆的；省略的', 'Shaped like an ellipse, or leaving out words.', '椭圆形的，或省略词语的。', '数学与语法两义。', 'The track is elliptical in shape.', '跑道是椭圆形的。', [], ['oval'], 'adjective', '定语', '科学'],
  ], '', ['ellipse'], '←ellipse（本批新词、无等级）+ -ical，故仍留空；近义 oval 椭圆形的。分级留空');

  W('eloquence', 'noun', '/ˈeləkwəns/', 'B2', ['CET6'], '雄辩；口才', 'The ability to speak beautifully and persuasively.', [
    ['雄辩；口才', 'The ability to speak beautifully and persuasively.', '说得动听又有说服力的能力。', '不可数，正式褒义。', 'Her eloquence won the crowd.', '她的雄辩赢得了众人。', [], ['rhetoric'], 'noun', 'uncountable', '文化'],
  ], '', ['eloquent', 'rhetoric'], '←eloquent B2 雄辩的 + -ce（t→ce 音变），B2 继承；家族 rhetoric 修辞（演说术）');

  W('elusive', 'adjective', '/ɪˈluːsɪv/', '', [], '难捉摸的；难懂的', 'Hard to find, catch, or understand.', [
    ['难捉摸的；难懂的', 'Hard to find, catch, or understand.', '难找、难抓或难懂的。', 'elusive answer 难求的答案。', 'The criminal remained elusive.', '罪犯一直逍遥法外。', [], ['intangible'], 'adjective', '定语', '通用'],
  ], '', ['intangible'], 'elude 躲避（本词库未收）+ -sive——词根不可见，故留空；家族 intangible 无形的。分级留空');

  W('embarrassed', 'adjective', '/ɪmˈbærəst/', 'B1', [], '尴尬的；难为情的', 'Feeling shy or ashamed about something.', [
    ['尴尬的；难为情的', 'Feeling shy or ashamed about something.', '因某事害羞或羞愧的。', '分词形容词：be embarrassed。', 'She felt embarrassed about her mistake.', '她为自己的错误感到难为情。', ['feel embarrassed'], ['ashamed'], 'adjective', '表语', '情感'],
  ], '', ['embarrass'], '←embarrass B1 使尴尬 + -ed，B1 继承；近义 ashamed 羞愧的（因做错事）');

  W('embarrassing', 'adjective', '/ɪmˈbærəsɪŋ/', 'B1', [], '令人尴尬的', 'Making you feel embarrassed.', [
    ['令人尴尬的', 'Making you feel embarrassed.', '让人难为情的。', '分词形容词：-ed 修饰人，-ing 修饰事。', 'There was an embarrassing silence.', '一阵令人尴尬的沉默。', [], ['awkward'], 'adjective', '定语', '情感'],
  ], '', ['embarrass'], '←embarrass B1 + -ing，B1 继承；近义 awkward 别扭的（场面或动作）');

  W('embellishment', 'noun', '/ɪmˈbelɪʃmənt/', '', [], '装饰；润色', 'A decorative detail, or an untrue detail added to a story.', [
    ['装饰；润色', 'A decorative detail, or an untrue detail added to a story.', '装饰细节，或故事里添加的不实细节。', '可数或不可数。', 'The story needed no embellishment.', '这故事不需要添油加醋。', [], ['embroidery', 'ornament'], 'noun', 'uncountable/countable', '文化'],
  ], 'embellishments', ['embroidery'], 'embellish 装饰（本词库未收）+ -ment——词根不可见，故留空；家族 embroidery 刺绣，近义 ornament 装饰物');

  W('ember', 'noun', '/ˈembə(r)/', '', [], '余烬；火星', 'A small piece of burning coal or wood in a dying fire.', [
    ['余烬；火星', 'A small piece of burning coal or wood in a dying fire.', '将熄的火中燃烧的小煤块或木块。', '可数，常复数 embers。', 'Only embers remained in the stove.', '炉子里只剩余烬了。', [], ['coal', 'spark'], 'noun', 'countable', '自然'],
  ], 'embers', ['coal', 'spark'], '古英语 aemerge——无库内派生根；家族 coal 煤块、spark 火花。分级留空');

  W('embitter', 'verb', '/ɪmˈbɪtə(r)/', 'B1', [], '使痛苦；使怀恨', 'To make someone feel bitter or resentful.', [
    ['使痛苦；使怀恨', 'To make someone feel bitter or resentful.', '使人感到痛苦或怨恨。', '及物，较文。', 'Years of failure embittered him.', '多年的失败使他满怀怨恨。', [], ['sour'], 'verb', '及物', '情感'],
  ], 'embitters~embittered~embittered~embittering', ['bitter'], '←bitter B1 苦的 + em-（使…），B1 继承；近义 sour 变坏的（关系变 sour 交恶）');

  W('emblem', 'noun', '/ˈembləm/', '', [], '徽章；象征', 'A picture or object that stands for a group or idea.', [
    ['徽章；象征', 'A picture or object that stands for a group or idea.', '代表团体或观念的图案、物件。', '可数。', 'The flag bears the national emblem.', '旗上有国徽。', [], ['eagle', 'logo', 'seal', 'symbol'], 'noun', 'countable', '政治'],
  ], 'emblems', ['eagle', 'logo', 'symbol'], '希腊语 emblema（镶嵌物）——无库内派生根；家族 eagle 鹰徽、logo 标识、symbol 象征，近义 seal 印章。分级留空');

  W('emerald', 'noun', '/ˈemərəld/', '', [], '绿宝石；祖母绿', 'A bright green stone used in jewellery.', [
    ['绿宝石；祖母绿', 'A bright green stone used in jewellery.', '首饰用的鲜绿色宝石。', '可数或不可数。', 'She wore an emerald ring.', '她戴着一枚祖母绿戒指。', [], ['green'], 'noun', 'uncountable/countable', '外貌'],
  ], 'emeralds', ['green'], '希腊语 smaragdos——无库内派生根；家族 green 绿色。分级留空');

  W('emigration', 'noun', '/ˌemɪˈɡreɪʃn/', '', ['CET6'], '移民出境', 'The act of leaving your country to live elsewhere.', [
    ['移民出境', 'The act of leaving your country to live elsewhere.', '离开本国去别处居住的行为。', '不可数：emigrate from。', 'Emigration rose in the 1990s.', '二十世纪九十年代移民出境增多了。', [], [], 'noun', 'uncountable', '社会'],
  ], '', ['emigrate'], '←emigrate（curated 在库、无 CEFR 等级）+ -ion——无等级可继承，故留空；家族 emigrate 移居国外。考级 CET6');

  W('emissary', 'noun', '/ˈemɪsəri/', '', [], '密使；特使', 'A person sent secretly or specially to do a task.', [
    ['密使；特使', 'A person sent secretly or specially to do a task.', '暗中或专门派去办事的人。', '可数，正式。', 'The king sent an emissary.', '国王派了一名密使。', [], ['envoy'], 'noun', 'countable', '政治'],
  ], 'emissaries', ['envoy'], '拉丁 emissarius——与 emit 词形不可见关联，故留空；家族 envoy 使节。分级留空');

  W('emission', 'noun', '/ɪˈmɪʃn/', 'B2', ['CET4'], '排放；散发', 'Gas, light, or heat sent out into the air.', [
    ['排放；散发', 'Gas, light, or heat sent out into the air.', '排到空气中的气体、光或热。', '可数或不可数：carbon emissions。', 'Cars produce harmful emissions.', '汽车排出有害尾气。', ['carbon emissions'], ['exhaust'], 'noun', 'uncountable/countable', '科学'],
  ], 'emissions', ['emit'], '←emit B2 发出 + -ssion（t→ss 音变，同 permission），B2 继承；近义 exhaust 废气');

  W('empathize', 'verb', '/ˈempəθaɪz/', '', [], '产生共鸣；感同身受', 'To understand and share what others feel.', [
    ['产生共鸣；感同身受', 'To understand and share what others feel.', '理解并分担他人的感受。', '不及物：empathize with。', 'It is hard to empathize with strangers.', '很难对陌生人感同身受。', ['empathize with'], ['relate'], 'verb', '不及物', '情感'],
  ], 'empathizes~empathized~empathized~empathizing', ['empathy'], 'empathy 共鸣（本词库未收）+ -ize——词根不可见，故留空；近义 relate 体会（relate to 能体会）。分级留空');

  W('emphasize', 'verb', '/ˈemfəsaɪz/', 'B1', [], '强调；着重', 'To give special importance to something.', [
    ['强调；着重', 'To give special importance to something.', '对某事给予特别重视。', '及物：emphasize that。', 'He emphasized the need for speed.', '他强调了速度的必要。', ['emphasize that'], ['hammer', 'highlight', 'impress', 'insist', 'stress', 'underline'], 'verb', '及物', '通用'],
  ], 'emphasizes~emphasized~emphasized~emphasizing', ['emphasis', 'highlight', 'stress', 'underline'], '←emphasis B1 强调 + -ize（-sis→-size，同 analyze），B1 继承；家族 highlight 突出、stress 强调、underline 划线强调，近义 hammer 反复灌输、impress 使铭记、insist 坚持');

  W('employees', 'noun', '/ˌemplɔɪˈiːz/', 'A2', [], '雇员（复数）', 'People who work for a company or person; plural of employee.', [
    ['雇员（复数）', 'People who work for a company or person; plural of employee.', '为公司或个人工作的人；employee 的复数。', '复数：employee 的 -s 形。', 'The firm has fifty employees.', '这家公司有五十名雇员。', [], ['payroll', 'personnel', 'staff'], 'noun', 'countable', '职业'],
  ], '', ['employ', 'personnel', 'staff'], '←employ A2 + -ee + -s，A2 继承；家族 personnel 全体人员、staff 职员，近义 payroll 工资名单');

  W('employer', 'noun', '/ɪmˈplɔɪə(r)/', 'A2', ['CET4'], '雇主', 'A person or company that pays people to work.', [
    ['雇主', 'A person or company that pays people to work.', '出钱雇人干活的人或公司。', '可数。', 'The employer offers training.', '雇主提供培训。', [], ['master'], 'noun', 'countable', '职业'],
  ], 'employers', ['employ'], '←employ A2 + -er（表人），A2 继承；近义 master 主人（旧时雇主）');

  W('employment', 'noun', '/ɪmˈplɔɪmənt/', 'A2', ['CET4'], '就业；雇用', 'Work that you do for pay, or the act of employing.', [
    ['就业；雇用', 'Work that you do for pay, or the act of employing.', '拿报酬的工作，或雇用行为。', '不可数或可数：find employment。', 'He found employment in a bank.', '他在银行找到了工作。', ['find employment'], ['work'], 'noun', 'uncountable/countable', '职业'],
  ], '', ['employ'], '←employ A2 + -ment，A2 继承；近义 work 工作（最常用）');

  W('emptiness', 'noun', '/ˈemptinəs/', 'A1', ['CET4'], '空虚；空无', 'The state of containing nothing, or feeling without meaning.', [
    ['空虚；空无', 'The state of containing nothing, or feeling without meaning.', '什么都没有的状态，或了无意义的感觉。', '不可数。', 'The room echoed with emptiness.', '房间空荡荡地回响。', [], ['vacuum', 'void'], 'noun', 'uncountable', '情感'],
  ], '', ['empty'], '←empty A1 空的 + -ness（y→iness，同 happiness），A1 继承；近义 vacuum 真空、void 虚空');

  W('enactment', 'noun', '/ɪˈnæktmənt/', 'B2', ['CET6'], '颁布；制定（法律）', 'The act of making a proposal into a law.', [
    ['颁布；制定（法律）', 'The act of making a proposal into a law.', '把提案变成法律的行为。', '不可数或可数，法律用语。', 'The enactment took months.', '这项立法花了几个月。', [], ['passage'], 'noun', 'uncountable/countable', '法律'],
  ], 'enactments', ['enact'], '←enact B2 颁布 + -ment，B2 继承；近义 passage 通过（法案的通过）');

  W('enchantress', 'noun', '/ɪnˈtʃæntrəs/', '', [], '女巫；妖妇', 'A woman in stories who uses magic to charm men.', [
    ['女巫；妖妇', 'A woman in stories who uses magic to charm men.', '故事里用魔法迷惑男人的女子。', '可数，文学用语。', 'The knight met an enchantress.', '骑士遇到了一位女巫。', [], ['witch'], 'noun', 'countable', '文化'],
  ], 'enchantresses', ['enchant'], 'enchant 施魔法（本词库未收）+ -ress（表女性）——词根不可见，故留空；近义 witch 女巫（w2 互引）。分级留空');

  W('encircle', 'verb', '/ɪnˈsɜːkl/', 'A2', [], '包围；环绕', 'To form a circle around something.', [
    ['包围；环绕', 'To form a circle around something.', '在某物周围形成一圈。', '及物。', 'Mountains encircle the lake.', '群山环抱着湖。', [], ['ring', 'surround'], 'verb', '及物', '自然'],
  ], 'encircles~encircled~encircled~encircling', ['circle', 'surround'], '←circle A2 圆圈 + en-（使…），A2 继承；家族 surround 包围（最常用），近义 ring 环绕');

  W('encirclement', 'noun', '/ɪnˈsɜːklmənt/', 'A2', [], '包围', 'The act of surrounding an enemy or place.', [
    ['包围', 'The act of surrounding an enemy or place.', '包围敌人或某地的行为。', '可数或不可数，军事用语。', 'The army completed the encirclement.', '军队完成了包围。', [], ['siege'], 'noun', 'uncountable/countable', '军事'],
  ], 'encirclements', ['encircle'], '←encircle（本批新词 A2）+ -ment，A2 继承；近义 siege 围攻');

})(typeof window !== 'undefined' ? window : globalThis);
