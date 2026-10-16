/* data/words/cet/author_g2.js · 手敲词条 G（二·前段）：gab ~ get rid of（含 13 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_g2.js 必须在 _cet_helper.js 之后加载');

  W('gab', 'verb/noun', '/ɡæb/', '', [], '闲聊', 'To talk a lot about nothing.', [
    ['闲聊', 'To talk a lot about nothing.', '没话找话说个不停。', '可数或不及物动词：have a gab。', 'They gabbed over coffee.', '他们喝着咖啡闲聊。', [], ['jaw'], 'verb/noun', 'null', '口语'],
  ], 'gabs~gabbed~gabbed~gabbing', [], '拟声语源——无库内派生根；近义 jaw 闲谈（jaw away 喋喋不休）');

  W('gag', 'noun/verb', '/ɡæɡ/', '', [], '笑话；堵嘴', 'A joke, or a cover for the mouth.', [
    ['笑话；堵嘴', 'A joke, or a cover for the mouth.', '笑话，或堵嘴的东西。', '可数或及物动词。', 'He told a funny gag.', '他讲了个笑话。', [], ['joke'], 'noun/verb', 'null', '口语'],
  ], 'gags~gagged~gagged~gagging', ['joke'], '拟声语源——无库内派生根；家族 joke 笑话（最常用）');

  W('gaining', 'noun', '/ˈɡeɪnɪŋ/', 'B1', [], '获得', 'Getting more of something.', [
    ['获得', 'Getting more of something.', '得到更多的某物。', '动名词。', 'Gaining experience takes time.', '积累经验要花时间。', [], ['acquisition'], 'noun', 'uncountable', '通用'],
  ], '', ['gain'], '←gain B1 + -ing，B1 继承；近义 acquisition 获得（正式）');

  W('gale', 'noun', '/ɡeɪl/', '', [], '大风', 'A very strong wind.', [
    ['大风', 'A very strong wind.', '非常强的风。', '可数。', 'A gale damaged roofs.', '大风掀坏了屋顶。', [], ['storm', 'wind'], 'noun', 'countable', '自然'],
  ], 'gales', [], '古诺尔斯语 gal——无库内派生根；近义 storm 暴风雨、wind 风');

  W('gambling house', 'noun', '/ˈɡæmblɪŋ haʊs/', '', [], '赌场', 'A place where people bet money.', [
    ['赌场', 'A place where people bet money.', '人们下注赌钱的地方。', '可数。', 'The gambling house closed down.', '赌场关门了。', [], ['casino'], 'noun', 'countable', '社会'],
  ], '', ['casino'], 'gambling 赌博 + house 场所；近义 casino 赌场。短语分级留空').phrase = true;

  W('games', 'noun', '/ɡeɪmz/', 'A1', [], '运动会（复数）', 'Sports contests; plural of game.', [
    ['运动会（复数）', 'Sports contests; plural of game.', '体育比赛；game 的复数。', '复数：Olympic Games 奥运会。', 'The games open in July.', '运动会七月开幕。', ['Olympic Games'], ['Olympic'], 'noun', 'countable', '体育'],
  ], '', ['game', 'Olympic'], '←game A1 + -s，A1 继承；家族 Olympic 奥林匹克的');

  W('gape', 'verb/noun', '/ɡeɪp/', '', [], '目瞪口呆；张开', 'To stare with the mouth open.', [
    ['目瞪口呆；张开', 'To stare with the mouth open.', '张着嘴瞪眼看。', '不及物或可数名词：gape at。', 'They gaped at the scene.', '他们目瞪口呆地看。', ['gape at'], ['stare', 'yawn'], 'verb/noun', 'null', '通用'],
  ], 'gapes~gaped~gaped~gaping', ['yawn'], '古诺尔斯语 gapa——无库内派生根；家族 yawn 打哈欠（张嘴），近义 stare 瞪眼');

  W('gash', 'noun/verb', '/ɡæʃ/', '', [], '深长的伤口；划开', 'A long deep cut.', [
    ['深长的伤口；划开', 'A long deep cut.', '又长又深的口子。', '可数或及物动词。', 'He got a gash on his leg.', '他腿上划了道大口子。', [], ['cut', 'slash'], 'noun/verb', 'null', '健康'],
  ], 'gashes~gashed~gashed~gashing', [], '古法语 garser——无库内派生根；近义 cut 割伤、slash 砍伤');

  W('gateway', 'noun', '/ˈɡeɪtweɪ/', 'A1', [], '大门；门户', 'An entrance through a gate.', [
    ['大门；门户', 'An entrance through a gate.', '穿过大门的入口。', '可数。', 'The arch is the town gateway.', '拱门是城门。', [], ['door'], 'noun', 'countable', '家居'],
  ], 'gateways', ['gate', 'way'], 'gate 门 + way 通道，取首成分级 A1；近义 door 门');

  W('gathering', 'noun', '/ˈɡæðərɪŋ/', 'B1', ['CET4'], '聚会', 'People coming together.', [
    ['聚会', 'People coming together.', '人们聚到一起。', '可数：a family gathering。', 'We had a small gathering.', '我们小聚了一下。', ['family gathering'], ['function', 'huddle', 'party', 'salon'], 'noun', 'countable', '社交'],
  ], 'gatherings', ['gather', 'party', 'salon'], '←gather B1 聚集 + -ing，B1 继承；家族 party 聚会、salon 沙龙，近义 function 集会、huddle 围聚');

  W('gaudy', 'adjective', '/ˈɡɔːdi/', '', [], '俗艳的', 'Bright in a cheap way.', [
    ['俗艳的', 'Bright in a cheap way.', '亮得廉价的。', '贬义。', 'She wore gaudy jewellery.', '她戴着俗艳的首饰。', [], ['loud', 'vulgar'], 'adjective', '定语', '外貌'],
  ], '', [], '来源不明——无库内派生根；近义 loud 刺眼的、vulgar 粗俗的。分级留空');

  W('gay person', 'noun', '/ˌɡeɪ ˈpɜːsn/', '', [], '同性恋者', 'Someone attracted to the same sex.', [
    ['同性恋者', 'Someone attracted to the same sex.', '被同性吸引的人。', '可数，中性说法。', 'He is openly a gay person.', '他公开了同性恋身份。', [], ['homosexual'], 'noun', 'countable', '社会'],
  ], '', ['homosexual'], 'gay 同性恋的 + person 人；近义 homosexual 同性恋（正式）。短语分级留空').phrase = true;

  W('gay woman', 'noun', '/ˌɡeɪ ˈwʊmən/', '', [], '女同性恋者', 'A woman attracted to women.', [
    ['女同性恋者', 'A woman attracted to women.', '被女性吸引的女子。', '可数。', 'The film is about a gay woman.', '电影讲一位女同性恋。', [], ['lesbian'], 'noun', 'countable', '社会'],
  ], '', ['lesbian'], 'gay 同性恋的 + woman 女子；近义 lesbian 女同性恋。短语分级留空').phrase = true;

  W('gel', 'noun/verb', '/dʒel/', '', [], '凝胶', 'A thick clear substance.', [
    ['凝胶', 'A thick clear substance.', '稠稠的透明物质。', '可数或不及物动词（hair gel 发胶）。', 'She used hair gel.', '她用了发胶。', ['hair gel'], ['jelly'], 'noun/verb', 'null', '家居'],
  ], 'gels~gelled~gelled~gelling', ['gelatin', 'jelly'], '←gelatin（本批新词、无等级）的截短形，故仍留空；家族 jelly 果冻');

  W('gelatin', 'noun', '/ˈdʒelətɪn/', '', [], '明胶', 'A clear protein that sets jelly.', [
    ['明胶', 'A clear protein that sets jelly.', '使果冻凝固的透明蛋白。', '不可数；亦拼 gelatine。', 'Gelatin makes jelly set.', '明胶让果冻凝固。', [], ['jelly'], 'noun', 'uncountable', '饮食'],
  ], '', ['gel'], '法语 gélatine——无库内派生根；近义 jelly 果冻。分级留空');

  W('gem', 'noun', '/dʒem/', '', [], '宝石', 'A cut precious stone.', [
    ['宝石', 'A cut precious stone.', '切割好的贵重石头。', '可数。', 'The ring has a red gem.', '戒指上有颗红宝石。', [], ['diamond', 'jewel', 'pearl', 'stone'], 'noun', 'countable', '外貌'],
  ], 'gems', ['diamond', 'jewel', 'pearl', 'stone'], '拉丁 gemma——无库内派生根；家族 diamond 钻石、jewel 珠宝、pearl 珍珠、stone 石头');

  W('gemstone', 'noun', '/ˈdʒemstəʊn/', '', [], '宝石', 'A stone used in jewellery.', [
    ['宝石', 'A stone used in jewellery.', '做首饰的石头。', '可数。', 'Diamonds are gemstones.', '钻石是宝石。', [], ['jewel'], 'noun', 'countable', '外貌'],
  ], 'gemstones', ['gem', 'stone'], '←gem（本批新词、无等级）+ stone，故仍留空；近义 jewel 珠宝');

  W('generally', 'adverb', '/ˈdʒenrəli/', 'A2', ['CET4'], '通常；大体上', 'Usually, or as a whole.', [
    ['通常；大体上', 'Usually, or as a whole.', '通常，或整体而言。', '副词：generally speaking 总的来说。', 'It is generally true.', '大体上是对的。', ['generally speaking'], ['large', 'overall'], 'adverb', 'null', '通用'],
  ], '', ['general'], '←general A2 + -ly，A2 继承；近义 large 大体（by and large 大体上）、overall 总体上');

  W('gently', 'adverb', '/ˈdʒentli/', 'B1', [], '温柔地', 'In a soft kind way.', [
    ['温柔地', 'In a soft kind way.', '以轻柔和善的方式。', '副词。', 'She spoke gently.', '她轻声说话。', [], ['easy'], 'adverb', 'null', '通用'],
  ], '', ['gentle'], '←gentle B1 + -ly（e→ly），B1 继承；近义 easy 轻柔地（take it easy 放轻松）');

  W('genus', 'noun', '/ˈdʒiːnəs/', '', [], '属（生物分类）', 'A group of similar living things.', [
    ['属（生物分类）', 'A group of similar living things.', '相近生物的一组。', '可数，复数 genera；分类阶元：界门纲目科属种。', 'Roses share one genus.', '玫瑰同属。', [], [], 'noun', 'countable', '科学'],
  ], 'genera', ['species'], '拉丁 genus（种）——无库内派生根；家族 species 物种（单复同形）');

  W('get away', 'verb', '/ˌɡet əˈweɪ/', '', [], '逃脱；离开', 'To escape, or leave.', [
    ['逃脱；离开', 'To escape, or leave.', '逃跑，或离开。', '不及物短语。', 'They got away by car.', '他们开车跑了。', [], ['escape'], 'verb', '不及物', '通用'],
  ], '', ['escape'], 'get 得 + away 走；近义 escape 逃跑。短语分级留空').phrase = true;

  W('get better', 'verb', '/ˌɡet ˈbetə(r)/', '', [], '好转；康复', 'To improve in health.', [
    ['好转；康复', 'To improve in health.', '健康好转。', '不及物短语。', 'She is getting better.', '她在好转。', [], ['improve'], 'verb', '不及物', '健康'],
  ], '', ['improve'], 'get 变 + better 更好；近义 improve 改善。短语分级留空').phrase = true;

  W('get by', 'verb', '/ˌɡet ˈbaɪ/', '', [], '勉强度日；过得去', 'To manage with little.', [
    ['勉强度日；过得去', 'To manage with little.', '靠很少的东西应付。', '不及物短语。', 'We can get by on rice.', '靠米饭也能过。', [], ['manage'], 'verb', '不及物', '通用'],
  ], '', ['manage'], 'get 到达 + by 旁边（勉强通过）；近义 manage 应付。短语分级留空').phrase = true;

  W('get hold of', 'verb', '/ˌɡet ˈhəʊld ɒv/', '', [], '拿到；联系上', 'To get, or contact someone.', [
    ['拿到；联系上', 'To get, or contact someone.', '拿到，或联系上某人。', '及物短语。', 'I cannot get hold of him.', '我联系不上他。', [], ['reach'], 'verb', '及物', '通用'],
  ], '', ['reach'], 'get hold 抓住 + of …；近义 reach 联系到。短语分级留空').phrase = true;

  W('get it right', 'verb', '/ˌɡet ɪt ˈraɪt/', '', [], '做对；猜中', 'To do or guess correctly.', [
    ['做对；猜中', 'To do or guess correctly.', '做对或猜中。', '及物短语。', 'She got it right first time.', '她一次就做对了。', [], ['guess'], 'verb', '及物', '通用'],
  ], '', ['guess'], 'get 得到 + it right 正确；近义 guess 猜中。短语分级留空').phrase = true;

  W('get married', 'verb', '/ˌɡet ˈmærid/', '', [], '结婚', 'To become husband and wife.', [
    ['结婚', 'To become husband and wife.', '结为夫妻。', '不及物短语：get married to。', 'They got married in June.', '他们六月结婚了。', ['get married to'], ['wed'], 'verb', '不及物', '家庭'],
  ], '', ['wed'], 'get 成为 + married 已婚；近义 wed 娶嫁（正式）。短语分级留空').phrase = true;

  W('get on', 'verb', '/ˌɡet ˈɒn/', '', [], '上车；相处；进展', 'To board, get along, or progress.', [
    ['上车；相处；进展', 'To board, get along, or progress.', '上车、相处或进展。', '不及物短语：get on with。', 'How are you getting on?', '你近况如何。', ['get on with'], ['fare'], 'verb', '不及物', '通用'],
  ], '', ['fare'], 'get 上 + on 到…上；近义 fare 进展。短语分级留空').phrase = true;

  W('get over', 'verb', '/ˌɡet ˈəʊvə(r)/', '', [], '克服；恢复', 'To recover from illness or shock.', [
    ['克服；恢复', 'To recover from illness or shock.', '从病或打击中恢复。', '及物短语。', 'He got over the flu.', '他流感好了。', [], ['recover'], 'verb', '及物', '健康'],
  ], '', ['recover'], 'get 越过 + over 上面；近义 recover 恢复。短语分级留空').phrase = true;

  W('get ready', 'verb', '/ˌɡet ˈredi/', '', [], '准备好', 'To prepare.', [
    ['准备好', 'To prepare.', '做好准备。', '不及物或及物短语。', 'Get ready for school.', '准备上学。', [], ['prepare'], 'verb', '不及物', '通用'],
  ], '', ['prepare'], 'get 变 + ready 好的；近义 prepare 准备。短语分级留空').phrase = true;

  W('get rid of', 'verb', '/ˌɡet ˈrɪd ɒv/', '', [], '摆脱；扔掉', 'To throw away or remove.', [
    ['摆脱；扔掉', 'To throw away or remove.', '扔掉或除去。', '及物短语。', 'Get rid of old papers.', '扔掉旧报纸。', [], ['dispose'], 'verb', '及物', '家居'],
  ], '', ['dispose'], 'get rid 除去 + of …；家族 dispose 处理（dispose of 清除）。短语分级留空').phrase = true;

  W('get to', 'verb', '/ˌɡet ˈtuː/', '', [], '到达；开始做', 'To arrive, or start doing.', [
    ['到达；开始做', 'To arrive, or start doing.', '到达，或开始做。', '及物短语。', 'We got to London late.', '我们很晚到伦敦。', [], ['reach'], 'verb', '及物', '交通'],
  ], '', ['reach'], 'get 到达 + to 到…；近义 reach 到达。短语分级留空').phrase = true;

  W('ghetto', 'noun', '/ˈɡetəʊ/', '', [], '贫民区', 'A poor part of a city.', [
    ['贫民区', 'A poor part of a city.', '城市的穷人区。', '可数。', 'He grew up in a ghetto.', '他在贫民区长大。', [], ['slum'], 'noun', 'countable', '社会'],
  ], 'ghettos', ['slum'], '意大利语 ghetto——无库内派生根；家族 slum 贫民窟');

  W('giddy', 'adjective', '/ˈɡɪdi/', '', [], '头晕的；轻浮的', 'Dizzy, or silly happy.', [
    ['头晕的；轻浮的', 'Dizzy, or silly happy.', '晕的，或傻乐的。', 'a giddy feeling 眩晕感。', 'The height made her giddy.', '高度让她头晕。', [], ['dizzy'], 'adjective', '定语/表语', '健康'],
  ], '', ['dizzy'], '古英语 gidig——无库内派生根；家族 dizzy 眩晕的');

  W('gild', 'verb', '/ɡɪld/', '', [], '镀金', 'To cover with gold.', [
    ['镀金', 'To cover with gold.', '用金覆盖。', '及物；过去式 gilded/gilt。', 'The dome is gilded.', '圆顶镀了金。', [], ['plate'], 'verb', '及物', '工业'],
  ], 'gilds~gilded~gilded~gilding', ['gold'], 'gold 金（gold 不可见于 gild，同 courteous 模式），故留空；近义 plate 镀');

  W('girlfriend', 'noun', '/ˈɡɜːlfrend/', 'A1', [], '女朋友', 'A female partner in love.', [
    ['女朋友', 'A female partner in love.', '恋爱中的女性伴侣。', '可数。', 'His girlfriend studies art.', '他女朋友学艺术。', [], ['girl', 'mistress'], 'noun', 'countable', '家庭'],
  ], 'girlfriends', ['girl', 'friend'], 'girl 女孩 + friend 朋友，取首成分级 A1；近义 girl 女孩、mistress 情妇');

  W('gist', 'noun', '/dʒɪst/', '', [], '要旨', 'The main point.', [
    ['要旨', 'The main point.', '主要的点。', 'get the gist 抓住要领。', 'I got the gist of it.', '我抓住了要领。', ['get the gist'], ['substance', 'thrust'], 'noun', 'countable', '通用'],
  ], '', [], '古法语 giste——无库内派生根；近义 substance 实质、thrust 要点（论点）');

  W('give back', 'verb', '/ˌɡɪv ˈbæk/', '', [], '归还', 'To return something.', [
    ['归还', 'To return something.', '把某物还回去。', '及物短语。', 'Give me back my book.', '把书还我。', [], ['return'], 'verb', '及物', '通用'],
  ], '', ['return'], 'give 给 + back 回；家族 return 归还（最常用）。短语分级留空').phrase = true;

  W('give birth to', 'verb', '/ˌɡɪv ˈbɜːθ tuː/', '', [], '生（孩子）', 'To produce a baby.', [
    ['生（孩子）', 'To produce a baby.', '生下婴儿。', '及物短语。', 'She gave birth to twins.', '她生了双胞胎。', [], ['bear'], 'verb', '及物', '家庭'],
  ], '', ['bear'], 'give 给 + birth 出生；近义 bear 生育（正式）。短语分级留空').phrase = true;

  W('give off', 'verb', '/ˌɡɪv ˈɒf/', '', [], '散发', 'To send out light or smell.', [
    ['散发', 'To send out light or smell.', '发出光或气味。', '及物短语。', 'The lamp gives off heat.', '灯散热。', [], ['emit', 'radiate'], 'verb', '及物', '科学'],
  ], '', ['emit'], 'give 给出 + off 出；家族 emit 发出（正式），近义 radiate 辐射。短语分级留空').phrase = true;

  W('give up', 'verb', '/ˌɡɪv ˈʌp/', '', [], '放弃', 'To stop trying or hoping.', [
    ['放弃', 'To stop trying or hoping.', '不再尝试或指望。', '及物或不及物短语。', 'Do not give up hope.', '别放弃希望。', [], ['abandon', 'despair', 'kick', 'quit', 'sacrifice', 'waive'], 'verb', '及物', '通用'],
  ], '', ['sacrifice', 'waive'], 'give 给 + up 出（交出）；家族 sacrifice 牺牲、waive 放弃（权利），近义 abandon 抛弃、despair 绝望、kick 戒掉（kick the habit 戒习惯）、quit 退出').phrase = true;

  W('give way', 'verb', '/ˌɡɪv ˈweɪ/', '', [], '让路；倒塌', 'To move aside, or break down.', [
    ['让路；倒塌', 'To move aside, or break down.', '让到一边，或塌掉。', '不及物短语。', 'Give way to buses.', '给公交让路。', [], ['yield'], 'verb', '不及物', '交通'],
  ], '', ['yield'], 'give 给 + way 路；近义 yield 让行。短语分级留空').phrase = true;

  W('given that', 'conjunction', '/ˈɡɪvn ðæt/', '', [], '考虑到', 'Because of the fact that.', [
    ['考虑到', 'Because of the fact that.', '因为…事实。', '连词短语，后接从句。', 'Given that it rained, we stayed.', '考虑到下雨，我们没出门。', [], ['whereas'], 'conjunction', 'null', '书面'],
  ], '', ['whereas'], 'given 鉴于 + that 从句；近义 whereas 鉴于（对比义）。短语分级留空').phrase = true;

  W('giving up', 'noun', '/ˌɡɪvɪŋ ˈʌp/', '', [], '放弃', 'The act of stopping.', [
    ['放弃', 'The act of stopping.', '停止的行为。', '动名词短语。', 'Giving up is no answer.', '放弃不是办法。', [], ['sacrifice'], 'noun', 'uncountable', '通用'],
  ], '', ['sacrifice'], 'giving 给予 + up 出；近义 sacrifice 牺牲。短语分级留空').phrase = true;

  W('gizmo', 'noun', '/ˈɡɪzməʊ/', '', [], '小玩意儿', 'A small clever device.', [
    ['小玩意儿', 'A small clever device.', '小巧机灵的装置。', '可数，口语。', 'This gizmo opens cans.', '这小玩意儿能开罐头。', [], ['gadget'], 'noun', 'countable', '家居'],
  ], 'gizmos', [], '美式俚语、来源不明——无库内派生根；近义 gadget 小器具。分级留空');

  W('gladden', 'verb', '/ˈɡlædn/', 'A1', [], '使高兴', 'To make glad.', [
    ['使高兴', 'To make glad.', '使高兴。', '及物，较文。', 'Good news gladdened us.', '好消息让我们高兴。', [], ['rejoice'], 'verb', '及物', '情感'],
  ], 'gladdens~gladdened~gladdened~gladdening', ['glad'], '←glad A1 + -den，A1 继承；近义 rejoice 欣喜');

  W('glade', 'noun', '/ɡleɪd/', '', [], '林中空地', 'An open space in a wood.', [
    ['林中空地', 'An open space in a wood.', '树林里的空地。', '可数。', 'Deer graze in the glade.', '鹿在空地上吃草。', [], ['clearing'], 'noun', 'countable', '自然'],
  ], 'glades', ['clearing'], 'glad 高兴 + e——假切分（与 glad 无关，晴空义），故留空；家族 clearing 空地');

  W('glasses', 'noun', '/ˈɡlɑːsɪz/', 'A1', [], '眼镜（复数）', 'Lenses to help seeing; plural of glass.', [
    ['眼镜（复数）', 'Lenses to help seeing; plural of glass.', '助视镜片；glass 的复数。', '复数：a pair of glasses。', 'She wears glasses.', '她戴眼镜。', ['a pair of glasses'], ['spectacle'], 'noun', 'countable', '健康'],
  ], '', ['glass', 'spectacle'], '←glass A1 + -es，A1 继承；家族 spectacle 眼镜（正式复数）');

  W('glasshouse', 'noun', '/ˈɡlɑːshaʊs/', 'A1', [], '温室', 'A glass building for plants.', [
    ['玻璃温室', 'A glass building for plants.', '种植物的玻璃房子。', '可数。', 'Tomatoes grow in glasshouses.', '番茄种在温室里。', [], ['greenhouse'], 'noun', 'countable', '自然'],
  ], 'glasshouses', ['greenhouse'], 'glass 玻璃 + house 房子，取首成分级 A1；家族 greenhouse 温室');

  W('glib', 'adjective', '/ɡlɪb/', '', [], '油嘴滑舌的', 'Talking smoothly but falsely.', [
    ['油嘴滑舌的', 'Talking smoothly but falsely.', '说得顺溜但不真诚。', 'a glib answer 油滑的回答。', 'His glib promises fooled us.', '他油滑的承诺骗了我们。', [], ['pat'], 'adjective', '定语', '性格'],
  ], '', [], '低地德语 glibberig——无库内派生根；近义 pat 现成的（pat answer 现成话）');

  W('glimmer', 'noun/verb', '/ˈɡlɪmə(r)/', '', [], '微光；闪现', 'A weak light, or a small sign.', [
    ['微光；闪现', 'A weak light, or a small sign.', '微弱的光，或小小迹象。', '可数或不及物动词：a glimmer of hope 一线希望。', 'There is a glimmer of hope.', '有一线希望。', ['a glimmer of hope'], ['ray', 'spark'], 'noun/verb', 'null', '通用'],
  ], 'glimmers~glimmered~glimmered~glimmering', ['ray'], '中古英语 glimeren——无库内派生根；家族 ray 光线，近义 spark 火花（希望火星）');

  W('global', 'adjective', '/ˈɡləʊbl/', 'B1', ['CET4'], '全球的', 'Of the whole world.', [
    ['全球的', 'Of the whole world.', '整个世界的。', 'global warming 全球变暖。', 'Climate is a global issue.', '气候是全球问题。', ['global warming'], ['international', 'worldwide'], 'adjective', '定语', '政治'],
  ], '', ['globe', 'international', 'worldwide'], '←globe B1 地球 + -al（e→al，同 official），B1 继承；家族 international 国际的、worldwide 世界范围的');

  W('globally', 'adverb', '/ˈɡləʊbəli/', 'B1', [], '全球地', 'Across the whole world.', [
    ['全球地', 'Across the whole world.', '遍及全世界。', '副词。', 'The firm operates globally.', '公司全球运营。', [], ['worldwide'], 'adverb', 'null', '商务'],
  ], '', ['global'], '←global（本批新词 B1）+ -ly，B1 继承；近义 worldwide 在世界范围');

  W('gloomy', 'adjective', '/ˈɡluːmi/', 'C1', ['CET4'], '阴暗的；沮丧的', 'Dark, or feeling sad.', [
    ['阴暗的；沮丧的', 'Dark, or feeling sad.', '黑暗的，或心情低落的。', 'a gloomy day 阴天。', 'The future looks gloomy.', '前景黯淡。', [], ['dark', 'dim', 'gray', 'heavy'], 'adjective', '定语/表语', '情感'],
  ], '', ['gloom', 'dark'], '←gloom C1 阴暗 + -y，C1 继承；家族 dark 黑暗的，近义 dim 昏暗的、gray 灰暗的、heavy 沉重的（心情）');

  W('glorify', 'verb', '/ˈɡlɔːrɪfaɪ/', 'B2', [], '赞美；美化', 'To praise highly.', [
    ['赞美；美化', 'To praise highly.', '高度赞扬。', '及物。', 'The film glorifies war.', '电影美化了战争。', [], ['praise'], 'verb', '及物', '文化'],
  ], 'glorifies~glorified~glorified~glorifying', ['glory'], '←glory B2 光荣 + -ify（y→ify，同 beautify），B2 继承；近义 praise 赞扬');

  W('glorious', 'adjective', '/ˈɡlɔːriəs/', 'B2', ['CET4'], '辉煌的', 'Full of glory.', [
    ['辉煌的', 'Full of glory.', '充满光荣的。', 'a glorious victory 辉煌胜利。', 'It was a glorious day.', '那是辉煌的一天。', [], ['magnificent'], 'adjective', '定语/表语', '文化'],
  ], '', ['glory'], '←glory B2 + -ous（y→ious，同 envious），B2 继承；近义 magnificent 壮丽的');

  W('gloss', 'noun/verb', '/ɡlɒs/', '', [], '光泽；注释', 'Shine on a surface, or a note.', [
    ['光泽；注释', 'Shine on a surface, or a note.', '表面的光，或注释。', '可数或及物动词：lip gloss 唇彩。', 'Her hair has a gloss.', '她头发有光泽。', ['lip gloss'], ['shine'], 'noun/verb', 'null', '外貌'],
  ], 'glosses~glossed~glossed~glossing', [], '斯堪的纳维亚语源（光泽）/希腊语 glossa（注释）——无库内派生根；近义 shine 光泽');

  W('glower', 'verb/noun', '/ˈɡlaʊə(r)/', 'B2', [], '怒视', 'To stare angrily.', [
    ['怒视', 'To stare angrily.', '生气地瞪。', '不及物或可数名词：glower at。', 'He glowered at the boy.', '他怒视那男孩。', ['glower at'], ['frown', 'glare'], 'verb/noun', 'null', '情感'],
  ], 'glowers~glowered~glowered~glowering', ['glow', 'glare'], '←glow B2 + -er，B2 继承；家族 glare 怒视，近义 frown 皱眉');

  W('glowing', 'adjective', '/ˈɡləʊɪŋ/', 'B2', [], '发光的；热情洋溢的', 'Shining, or full of praise.', [
    ['发光的；热情洋溢的', 'Shining, or full of praise.', '发光的，或满是赞美的。', '分词形容词。', 'She got glowing reviews.', '她获得一片好评。', [], ['luminous'], 'adjective', '定语', '文化'],
  ], '', ['glow', 'luminous'], '←glow B2 + -ing，B2 继承；家族 luminous 发光的');

  W('glut', 'noun/verb', '/ɡlʌt/', '', [], '供过于求；暴食', 'Too much supply, or to eat too much.', [
    ['供过于求；暴食', 'Too much supply, or to eat too much.', '供应太多，或吃太多。', '可数或及物动词：a glut of。', 'There is a glut of apples.', '苹果供过于求。', ['a glut of'], ['surplus'], 'noun/verb', 'null', '商务'],
  ], 'gluts~glutted~glutted~glutting', [], '古法语 glotir——无库内派生根；近义 surplus 过剩');

  W('glutton', 'noun', '/ˈɡlʌtn/', '', [], '贪吃者', 'Someone who eats too much.', [
    ['贪吃者', 'Someone who eats too much.', '吃太多的人。', '可数。', 'Do not be such a glutton.', '别这么贪吃。', [], ['pig'], 'noun', 'countable', '饮食'],
  ], 'gluttons', ['glut'], '←glut（本批新词、无等级）+ -ton，故仍留空；近义 pig 猪（贪吃鬼）');

})(typeof window !== 'undefined' ? window : globalThis);
