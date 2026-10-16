/* data/words/cet/author_m8.js · 手敲词条 M（五·引用缺口批）：mischievous ~ moisture（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批 5 条考级标签）。
 * 短语 2 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；mis- 前缀不作成分按词根继承，词根不在库留空，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_m8.js 必须在 _cet_helper.js 之后加载');

  W('mischievous', 'adjective', '/ˈmɪstʃɪvəs/', '', [], '淘气的；恶作剧的', 'Enjoying causing trouble in a playful way.', [
    ['淘气的；恶作剧的', 'Enjoying causing trouble in a playful way.', '爱搞恶作剧的、淘气的。', '定语。', 'The mischievous cat knocked over the vase.', '淘气的猫碰倒了花瓶。', [], ['naughty', 'wicked'], 'adjective', '定语', '性格'],
  ], '', ['naughty'], 'mischief 不在库，无库内派生根，故留空；家族/近义 naughty 顽皮的、wicked 淘气的（贬）');

  W('misconception', 'noun', '/ˌmɪskənˈsepʃn/', '', [], '误解；错觉', 'A wrong idea about something.', [
    ['误解；错觉', 'A wrong idea about something.', '对某事的错误认识。', '可数：a misconception about。', 'There is a common misconception about the law.', '人们对这条法律有个常见的误解。', ['a misconception about'], ['illusion', 'myth'], 'noun', 'countable', '通用'],
  ], 'misconceptions', [], 'mis- 前缀不作成分，词根 conception 不在库，无级可继，故留空；近义 illusion 幻觉、myth 谬误');

  W('misconduct', 'noun', '/ˌmɪsˈkɒndʌkt/', 'B2', [], '不当行为；渎职', 'Wrong or improper behaviour at work.', [
    ['不当行为；渎职', 'Wrong or improper behaviour, especially at work.', '不当或不端的行为，尤指工作中的。', '不可数。', 'The inquiry looked into misconduct at the bank.', '调查组调查了该行的渎职行为。', [], ['malpractice'], 'noun', 'uncountable', '法律'],
  ], '', ['conduct', 'malpractice'], 'mis- 前缀不作成分，词根 conduct B2 在库，B2 继承；家族 malpractice 渎职、玩忽职守');

  W('misdirect', 'verb', '/ˌmɪsdaɪˈrekt/', 'A2', [], '指错方向；误导', 'To give someone wrong directions.', [
    ['指错方向；误导', 'To give someone the wrong directions or information.', '给人错误指引。', '及物。', 'The sign misdirected the drivers.', '路牌把司机们引错了方向。', [], ['mislead'], 'verb', '及物', '交通'],
  ], 'misdirects~misdirected~misdirected~misdirecting', ['direct'], 'mis- 前缀不作成分，词根 direct A2 在库，A2 继承；近义 mislead 误导');

  W('miserly', 'adjective', '/ˈmaɪzəli/', '', [], '吝啬的', 'Unwilling to spend money.', [
    ['吝啬的', 'Unwilling to spend money.', '不肯花钱的、小气的。', '定语或表语。', 'He was too miserly to turn on the heating.', '他吝啬得不肯开暖气。', [], ['mean'], 'adjective', '定语/表语', '性格'],
  ], '', [], 'miser 不在库，无库内派生根，故留空；近义 mean 吝啬的');

  W('misery', 'noun', '/ˈmɪzəri/', 'B1', ['CET4'], '痛苦；苦难', 'Very great unhappiness or suffering.', [
    ['痛苦；苦难', 'Very great unhappiness or suffering.', '极大的不快与痛苦。', '不可数。', 'She spent years in misery.', '她痛苦地过了好几年。', [], ['hell', 'plight'], 'noun', 'uncountable', '情感'],
  ], '', ['hell'], '←miserable B1 词干 miser + -y（-able 与 -y 互换，同根名词），B1 继承；家族 hell 地狱（喻受罪），近义 plight 困境');

  W('misinterpret', 'verb', '/ˌmɪsɪntɜːˈprɛt/', 'B1', [], '曲解；误解', 'To understand something wrongly.', [
    ['曲解；误解', 'To understand or explain something wrongly.', '把意思理解错、解释错。', '及物。', 'The press misinterpreted her silence.', '媒体曲解了她的沉默。', [], ['misunderstand'], 'verb', '及物', '媒体'],
  ], 'misinterprets~misinterpreted~misinterpreted~misinterpreting', ['interpret', 'misunderstand'], 'mis- 前缀不作成分，词根 interpret B1 在库，B1 继承；近义 misunderstand 误解');

  W('misjudge', 'verb', '/ˌmɪsˈdʒʌdʒ/', 'B1', [], '判断错误', 'To form a wrong judgment about something.', [
    ['判断错误', 'To form a wrong judgment about someone or something.', '对人或事作出错误判断。', '及物。', 'I misjudged the distance.', '我判断错了距离。', [], ['err', 'mistake', 'underestimate'], 'verb', '及物', '通用'],
  ], 'misjudges~misjudged~misjudged~misjudging', ['judge', 'err', 'underestimate'], 'mis- 前缀不作成分，词根 judge B1 在库，B1 继承；家族 err 犯错、underestimate 低估，近义 mistake 弄错');

  W('misread', 'verb', '/ˌmɪsˈriːd/', 'A1', [], '读错；误解', 'To understand something wrongly.', [
    ['读错；误解', 'To understand something you have read in the wrong way.', '把读到的内容理解错。', '及物。', 'She misread the instructions.', '她理解错了说明。', [], ['misunderstand'], 'verb', '及物', '通用'],
  ], 'misreads~misread~misread~misreading', ['read'], 'mis- 前缀不作成分，词根 read A1 在库，A1 继承；近义 misunderstand 误解');

  W('misrepresent', 'verb', '/ˌmɪsˌreprɪˈzent/', 'B1', [], '歪曲；不实表述', 'To give a wrong account of something.', [
    ['歪曲；不实表述', 'To give a wrong or dishonest account of something.', '对事实作不实描述。', '及物。', 'The article misrepresented his views.', '这篇文章歪曲了他的观点。', [], ['distort'], 'verb', '及物', '媒体'],
  ], 'misrepresents~misrepresented~misrepresented~misrepresenting', ['represent', 'distort'], 'mis- 前缀不作成分，词根 represent B1 在库，B1 继承；近义 distort 扭曲');

  W('misspend', 'verb', '/ˌmɪsˈspend/', 'A2', [], '滥花；虚度', 'To spend money or time badly.', [
    ['滥花；虚度', 'To spend money or time badly.', '把钱或时间用在不当处。', '及物，常组词：misspent youth。', 'He misspent his youth in casinos.', '他把青春浪费在了赌场。', [], ['waste'], 'verb', '及物', '金融'],
  ], 'misspends~misspent~misspent~misspending', ['spend'], 'mis- 前缀不作成分，词根 spend A2 在库，A2 继承；近义 waste 浪费');

  W('mistaken', 'adjective', '/mɪˈsteɪkn/', 'A2', ['CET4'], '错误的；被误解的', 'Wrong or based on a wrong idea.', [
    ['错误的；被误解的', 'Wrong or based on a wrong idea.', '错误的、基于错误判断的。', '定语或表语：be mistaken。', 'You are mistaken about the date.', '你把日期记错了。', [], ['wrong'], 'adjective', '定语/表语', '通用'],
  ], '', ['mistake'], '←mistake A2 + -en（分词形容词，同 broken），A2 继承；近义 wrong 错误的');

  W('mistreat', 'verb', '/ˌmɪsˈtriːt/', 'A2', [], '虐待；苛待', 'To treat someone badly or cruelly.', [
    ['虐待；苛待', 'To treat someone badly or cruelly.', '对人不好或残忍。', '及物。', 'The inquiry found that patients were mistreated.', '调查发现病人受到了虐待。', [], ['abuse', 'wrong'], 'verb', '及物', '健康'],
  ], 'mistreats~mistreated~mistreated~mistreating', ['treat'], 'mis- 前缀不作成分，词根 treat A2 在库，A2 继承；近义 abuse 虐待、wrong 冤枉');

  W('mistrust', 'noun/verb', '/ˌmɪsˈtrʌst/', 'B1', [], '不信任', 'Lack of trust in someone.', [
    ['不信任', 'Lack of trust in someone or something.', '对人或事缺乏信任。', '名词与动词两用。', 'A deep mistrust grew between them.', '他们之间滋生了深深的不信任。', [], ['suspicion'], 'noun/verb', 'null', '心理'],
  ], 'mistrusts~mistrusted~mistrusted~mistrusting', ['trust', 'suspicion'], 'mis- 前缀不作成分，词根 trust B1 在库，B1 继承；家族 suspicion 怀疑');

  W('misuse', 'noun/verb', '/ˌmɪsˈjuːs/', 'A1', [], '误用；滥用', 'To use something wrongly, or such use.', [
    ['误用；滥用', 'To use something wrongly, or such wrong use.', '错误使用；也指这种行为。', '名词与动词两用。', 'Misuse of the system can cause errors.', '误用系统会导致故障。', [], ['abuse'], 'noun/verb', 'null', '通用'],
  ], 'misuses~misused~misused~misusing', ['use'], 'mis- 前缀不作成分，词根 use A1 在库，A1 继承；近义 abuse 滥用');

  W('mite', 'noun', '/maɪt/', '', [], '螨；小虫', 'A very small creature, some of which bite.', [
    ['螨；小虫', 'A very small creature, some of which bite.', '极小的生物，有些会咬人。', '可数。', 'A mite bit her ankle.', '一只螨虫咬了她的脚踝。', [], ['tick'], 'noun', 'countable', '自然'],
  ], 'mites', [], '无库内派生根，故留空；近义 tick 蜱虫');

  W('mitten', 'noun', '/ˈmɪtn/', '', [], '连指手套', 'A glove with one section for all fingers.', [
    ['连指手套', 'A glove with one section for the fingers and one for the thumb.', '拇指单列、其余手指同列的手套。', '可数。', 'She lost one mitten in the snow.', '她在雪地里丢了一只连指手套。', [], ['glove'], 'noun', 'countable', '外貌'],
  ], 'mittens', [], '无库内派生根，故留空；近义 glove 手套');

  W('mix up', 'verb', '/ˌmɪks ˈʌp/', '', [], '混淆；拌匀', 'To confuse two things, or to stir together.', [
    ['混淆；拌匀', 'To confuse two things, or to stir them together.', '把两样东西弄混；也指搅拌在一起。', '及物短语。', 'I mixed up the two addresses.', '我把两个地址弄混了。', ['mix up A and B'], ['confuse', 'mistake'], 'verb', '及物', '通用'],
  ], '', ['mix', 'confuse'], 'mix + up；家族 confuse 混淆，近义 mistake 弄错。短语分级留空').phrase = true;

  W('mixed', 'adjective', '/mɪkst/', 'A2', [], '混合的；各种的', 'Made of different things together.', [
    ['混合的；各种的', 'Made of different things or people together.', '由不同事物或人组成的。', '定语：mixed feelings。', 'She had mixed feelings about the move.', '她对这次搬家心情复杂。', ['mixed feelings'], ['assorted', 'hybrid'], 'adjective', '定语', '情感'],
  ], '', ['mix'], '←mix A2 + -ed（透明后缀），A2 继承（brief 根提示）；近义 assorted 各色的、hybrid 混合体');

  W('mixture', 'noun', '/ˈmɪkstʃə/', 'A2', ['CET4'], '混合；混合物', 'Things mixed together.', [
    ['混合；混合物', 'Things mixed together, or the act of mixing.', '混在一起的东西；也指混合行为。', '可数或不可数。', 'The paint was a mixture of blue and white.', '这颜料是蓝白混合色。', ['a mixture of'], ['assortment', 'cocktail', 'composite', 'compound', 'hybrid', 'mix', 'paste', 'salad', 'soup'], 'noun', 'countable', '通用'],
  ], 'mixtures', ['cocktail', 'composite', 'compound', 'hybrid', 'mix'], '←mix A2 + -ture（名词后缀），A2 继承；家族 cocktail 鸡尾酒、composite 复合物、compound 化合物、hybrid 杂交体、mix 混合，近义 assortment 各式、paste 糊、salad 沙拉、soup 汤');

  W('mm', 'noun', '/ˌem ˈem/', 'B1', [], '毫米', 'A millimeter, one thousandth of a meter.', [
    ['毫米', 'A millimeter, one thousandth of a meter.', '毫米，千分之一米。', '不可数，单位缩写。', 'The plate is 5 mm thick.', '这块板厚 5 毫米。', [], ['millimeter'], 'noun', 'uncountable', '科学'],
  ], '', ['millimeter'], '←millimeter B1 的缩写形式，B1 继承；近义 millimeter 毫米');

  W('mob', 'noun', '/mɒb/', '', [], '暴民；乌合之众', 'An angry crowd of people.', [
    ['暴民；乌合之众', 'An angry crowd of people.', '愤怒的人群、暴徒。', '可数，含贬义。', 'A mob gathered outside the gate.', '一群暴民聚集在大门外。', [], ['gang', 'herd'], 'noun', 'countable', '社会'],
  ], 'mobs', ['gang'], '源自拉丁 mobile vulgus（流动人群）缩略，虽形含 mobile（A2）但现代语义已脱开，故留空；家族 gang 帮派、近义 herd 兽群（喻人群）');

  W('mobile phone', 'noun', '/ˌməʊbaɪl ˈfəʊn/', '', [], '手机', 'A phone that works without wires.', [
    ['手机', 'A phone that works without wires.', '可随身携带的无线电话。', '可数。', 'The mobile phone rang during the film.', '手机在电影放映时响了。', [], ['cell-phone'], 'noun', 'countable', '通用'],
  ], '', ['cell-phone'], 'mobile + phone；近义 cell-phone 手机（美式）。短语分级留空').phrase = true;

  W('mocker', 'noun', '/ˈmɒkə/', 'C1', [], '嘲笑者', 'A person who mocks other people.', [
    ['嘲笑者', 'A person who mocks other people.', '爱嘲笑别人的人。', '可数。', 'One mocker in the crowd kept laughing.', '人群里有个嘲笑者笑个不停。', [], ['tease'], 'noun', 'countable', '通用'],
  ], 'mockers', ['mock'], '←mock C1 + -er（施事后缀），C1 继承（brief 根提示）；近义 tease 戏弄者');

  W('mockery', 'noun', '/ˈmɒkəri/', 'C1', [], '嘲笑；笑柄', 'The act of mocking, or a joke of something.', [
    ['嘲笑；笑柄', 'The act of mocking, or something that makes a joke of something.', '嘲弄；也指使某事显得荒唐。', '不可数：make a mockery of。', 'The trial made a mockery of justice.', '这场审判成了司法的笑柄。', ['make a mockery of'], ['irony', 'ridicule', 'sarcasm', 'satire'], 'noun', 'uncountable', '法律'],
  ], '', ['mock', 'sarcasm'], '←mock C1 + -ery（名词后缀，语义直连：嘲笑行为），C1 继承；近义 irony 反讽、ridicule 嘲弄、satire 讽刺作品');

  W('moderately', 'adverb', '/ˈmɒdərətli/', 'B2', [], '中等地；适度地', 'To a medium degree; fairly.', [
    ['中等地；适度地', 'To a medium degree; fairly.', '达到中等程度、相当。', '副词。', 'The exam was moderately difficult.', '这场考试难度适中。', [], ['somewhat'], 'adverb', 'null', '通用'],
  ], '', ['moderate'], '←moderate B2 + -ly（透明后缀），B2 继承（brief 根提示）；近义 somewhat 稍微');

  W('modernize', 'verb', '/ˈmɒdənaɪz/', 'A2', [], '使现代化', 'To make something more modern.', [
    ['使现代化', 'To make something more modern or up to date.', '使某物更新、达到现代水平。', '及物。', 'The airline modernized its fleet.', '这家航空公司更新了机队。', [], ['innovate', 'update'], 'verb', '及物', '交通'],
  ], 'modernizes~modernized~modernized~modernizing', ['innovate'], '←modern A2 + -ize（透明后缀，同 legalize），A2 继承；家族 innovate 创新，近义 update 更新');

  W('modification', 'noun', '/ˌmɒdɪfɪˈkeɪʃn/', 'B2', ['CET4'], '修改；调整', 'A small change to something.', [
    ['修改；调整', 'A small change made to something.', '对某物的小改动。', '可数或不可数。', 'The design needed a small modification.', '这个设计需要一处小修改。', [], [], 'noun', 'countable', '通用'],
  ], 'modifications', ['modify'], '←modify B2 + -ation（y→i，名词化），B2 继承（核心库 modify B2）；家族 modify 修改');

  W('module', 'noun', '/ˈmɒdjuːl/', '', [], '单元；模块', 'One of several parts that form something.', [
    ['单元；模块', 'One of several parts that form something.', '构成整体的单元部分。', '可数。', 'Each module ends with a short test.', '每个单元以小测验结束。', [], ['unit'], 'noun', 'countable', '教育'],
  ], 'modules', [], '拉丁 modulus（小量）——无库内派生根，故留空；近义 unit 单元');

  W('moisten', 'verb', '/ˈmɔɪsn/', 'B1', [], '使湿润', 'To make something slightly wet.', [
    ['使湿润', 'To make something slightly wet.', '使某物稍微变湿。', '及物。', 'Moisten the soil before planting.', '种植前把土壤润湿。', [], ['wet'], 'verb', '及物', '农业'],
  ], 'moistens~moistened~moistened~moistening', ['wet'], '←moist B1 + -en（使动后缀），B1 继承；家族/近义 wet 弄湿');

  W('moisture', 'noun', '/ˈmɔɪstʃə/', 'B1', ['CET4'], '水分；湿气', 'Tiny drops of water in the air.', [
    ['水分；湿气', 'Tiny drops of water in the air or on a surface.', '空气或物体表面的微小水滴。', '不可数。', 'The moisture in the air made the paper curl.', '空气中的湿气让纸张卷了边。', [], ['damp', 'dew'], 'noun', 'uncountable', '自然'],
  ], '', ['dew'], '←moist B1 + -ure（名词后缀），B1 继承；家族 dew 露水，近义 damp 潮气');

})(typeof window !== 'undefined' ? window : globalThis);
