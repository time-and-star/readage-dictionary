/* data/words/cet/author_l5.js · 手敲词条 L（五·引用缺口批）：logical ~ love affair（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批 logical/loosen/loss/loudly = CET4）。
 * 短语 11 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_l5.js 必须在 _cet_helper.js 之后加载');

  W('logical', 'adjective', '/ˈlɒdʒɪkl/', 'B1', ['CET4'], '合逻辑的；逻辑的', 'Clear and reasonable.', [
    ['合逻辑的；逻辑的', 'Following clear reasoning, or relating to the science of reasoning.', '合乎推理的；也指与逻辑学相关的。', '定语。', 'That is a logical conclusion.', '那是个合乎逻辑的结论。', ['logical thinking'], ['coherent', 'rational'], 'adjective', '定语', '通用'],
  ], '',['coherent', 'rational', 'logic'], '←logic B1 + -al（透明后缀），B1 继承；家族 coherent 连贯的、rational 理性的');

  W('login', 'noun', '/ˈlɒɡɪn/', 'B1', [], '登录；登录名', 'The act of signing in, or the name used for it.', [
    ['登录；登录名', 'The act of signing in to a system, or the name used for it.', '进入系统的动作；也指登录名。', '可数。', 'Each user has a separate login.', '每个用户各有独立的登录名。', [], ['access'], 'noun', 'countable', '工具'],
  ], 'logins',['log', 'in'], 'log B1 记录、登记 + in——首成分 log 在库，B1 继承；近义 access 进入权限');

  W('loiter', 'verb', '/ˈlɔɪtə/', '', [], '闲逛；逗留', 'To stand or wait somewhere with no reason.', [
    ['闲逛；逗留', 'To stand or wait in a public place with no reason.', '无故在某处停留。', '不及物，常含贬义（法律用语 loitering）。', 'A group of men loitered at the corner.', '一群男人在街角闲逛。', [], ['hang', 'hover', 'idle', 'linger'], 'verb', '不及物', '社会'],
  ], 'loiters~loitered~loitered~loitering', [], '无库内派生根，故留空；近义 hang 闲荡、hover 徘徊、idle 无所事事、linger 逗留');

  W('loll', 'verb', '/lɒl/', '', [], '懒洋洋地躺坐', 'To sit or lie in a relaxed lazy way.', [
    ['懒洋洋地躺坐', 'To sit or lie in a relaxed, lazy way.', '懒散地靠着或躺着。', '不及物。', 'He lolled in the armchair.', '他懒洋洋地瘫在扶手椅里。', [], ['lounge', 'sprawl'], 'verb', '不及物', '通用'],
  ], 'lolls~lolled~lolled~lolling', [], '无库内派生根，故留空；近义 lounge 闲躺、sprawl 四肢摊开');

  W('lone', 'adjective', '/ləʊn/', '', [], '孤独的；单独的', 'Alone, with no others.', [
    ['孤独的；单独的', 'Alone, with no other people around.', '独自的、无伴的。', '定语：a lone walker。', 'A lone rider crossed the bridge.', '一名独行的骑手过了桥。', ['a lone wolf'], ['solitary'], 'adjective', '定语', '通用'],
  ], '', [], '与 alone（A1）同源（alone = a + lone），词级方向相反、自身级无把握，故留空；近义 solitary 独自的');

  W('lonesome', 'adjective', '/ˈləʊnsəm/', '', [], '孤独的', 'Feeling sad when alone.', [
    ['孤独的', 'Feeling sad because you are alone.', '独处时感到孤单。', '多见于美式口语。', 'He felt lonesome far from home.', '远离家乡他感到孤单。', [], ['lonely'], 'adjective', '定语/表语', '情感'],
  ], '', ['lonely'], 'lone（本批，等级留空）+ -some——无级可继，故留空；家族/近义 lonely 孤独的');

  W('long for', 'verb', '/lɒŋ fɔː/', '', [], '渴望', 'To want something very much.', [
    ['渴望', 'To want something very much and wish you had it.', '非常想要、盼望得到。', '及物短语：long for sth。', 'She longed for home.', '她很想家。', ['long for peace'], ['crave', 'desire', 'die', 'miss'], 'verb', '及物', '情感'],
  ], '', ['crave'], 'long + for；近义 crave 渴望、desire 想要、die（for）极想要、miss 想念。短语分级留空').phrase = true;

  W('long life', 'noun', '/ˌlɒŋ ˈlaɪf/', '', [], '长寿', 'Living for many years.', [
    ['长寿', 'Living for many years.', '活得长久。', '不可数；祝寿用语。', 'The herb is said to bring long life.', '据说这种草药能延年益寿。', [], ['longevity'], 'noun', 'uncountable', '健康'],
  ], '', ['longevity'], 'long + life；家族 longevity 长寿。短语分级留空').phrase = true;

  W('long-distance', 'adjective', '/ˌlɒŋ ˈdɪstəns/', 'A1', [], '长途的；远距离的', 'Covering a long distance.', [
    ['长途的；远距离的', 'Covering a long distance, or traveling a long way.', '跨越长距离的；也指长途旅行的。', '定语。', 'She took a long-distance bus.', '她坐了长途汽车。', [], ['marathon'], 'adjective', '定语', '交通'],
  ], '',['long', 'distance'], 'long A1 + distance——首成分 long 在库，A1 继承；近义 marathon 马拉松式（长距离）');

  W('long-lasting', 'adjective', '/ˌlɒŋ ˈlɑːstɪŋ/', 'A1', [], '持久的', 'Lasting for a long time.', [
    ['持久的', 'Lasting for a long time.', '持续很久的。', '定语。', 'The war had long-lasting effects.', '那场战争留下了长久的影响。', [], ['durable'], 'adjective', '定语', '通用'],
  ], '',['long', 'lasting'], 'long A1 + lasting（本批 A1）——首成分 long 在库，A1 继承（同 ever-lasting 先例）；近义 durable 持久的');

  W('longing', 'noun', '/ˈlɒŋɪŋ/', 'A1', [], '渴望；向往', 'A strong wish for something.', [
    ['渴望；向往', 'A strong wish for something you do not have.', '对某物的强烈渴望。', '可数：a longing for。', 'He had a longing for home.', '他很想念家乡。', ['a longing for'], ['desire'], 'noun', 'countable', '情感'],
  ], '',['desire', 'long'], '←long A1（渴望）+ -ing（透明后缀），A1 继承（brief 根提示）；家族/近义 desire 渴望');

  W('loo', 'noun', '/luː/', '', [], '厕所', 'A toilet, especially in a house.', [
    ['厕所', 'A toilet in a house or building.', '（家用）厕所，英式口语。', '可数，英式口语。', 'Where is the loo?', '厕所在哪儿？', [], ['lavatory'], 'noun', 'countable', '家居'],
  ], 'loos', [], '英式口语（词源不透明），无库内派生根，故留空；近义 lavatory 厕所');

  W('look after', 'verb', '/ˌlʊk ˈɑːftə/', '', [], '照顾；照看', 'To take care of someone or something.', [
    ['照顾；照看', 'To take care of someone or something.', '负责照料某人或某物。', '及物短语。', 'Who will look after the children?', '谁来照顾孩子们？', [], ['attend', 'care'], 'verb', '及物', '家庭'],
  ], '', ['care'], 'look + after；近义 attend 照料、care 照顾。短语分级留空').phrase = true;

  W('look around', 'verb', '/ˌlʊk əˈraʊnd/', '', [], '环顾；四处看看', 'To look in different directions around a place.', [
    ['环顾；四处看看', 'To look in different directions around a place.', '环视四周、随便看看。', '不及物短语，宾语为地点时可省。', 'Feel free to look around.', '请随意看看。', [], ['browse'], 'verb', '不及物', '通用'],
  ], '', [], 'look + around；近义 browse 逛逛、浏览。短语分级留空').phrase = true;

  W('look for', 'verb', '/ˌlʊk fɔː/', '', [], '寻找', 'To try to find something or someone.', [
    ['寻找', 'To try to find something or someone.', '设法找到某人或某物。', '及物短语。', 'I am looking for my keys.', '我在找我的钥匙。', [], ['search', 'seek'], 'verb', '及物', '通用'],
  ], '', ['seek'], 'look + for；家族 seek 寻找，近义 search 搜寻。短语分级留空').phrase = true;

  W('look into', 'verb', '/ˌlʊk ˈɪntuː/', '', [], '调查；研究', 'To try to find out more about something.', [
    ['调查；研究', 'To try to find out more about something.', '为弄清情况而进行调查。', '及物短语。', 'The police will look into the case.', '警方会调查此案。', [], ['investigate'], 'verb', '及物', '法律'],
  ], '', [], 'look + into；近义 investigate 调查。短语分级留空').phrase = true;

  W('look like', 'verb', '/ˌlʊk ˈlaɪk/', '', [], '看起来像', 'To have a similar appearance.', [
    ['看起来像', 'To have a similar appearance to someone or something.', '外表与…相像。', '及物短语，后接名词或从句。', 'She looks like her mother.', '她长得像她母亲。', [], ['resemble'], 'verb', '及物', '通用'],
  ], '', ['resemble'], 'look + like；家族 resemble 相像。短语分级留空').phrase = true;

  W('look onto', 'verb', '/ˌlʊk ˈɒntuː/', '', [], '面向；俯瞰', 'To have a view of a place from a window.', [
    ['面向；俯瞰', 'To have a view of a place from a window or high point.', '（窗户等）朝向某处。', '不及物短语。', 'Our room looks onto the garden.', '我们的房间面向花园。', [], ['overlook'], 'verb', '不及物', '家居'],
  ], '', [], 'look + onto；近义 overlook 俯瞰（视角相关）。短语分级留空').phrase = true;

  W('look up', 'verb', '/ˌlʊk ʌp/', '', [], '查阅；查找', 'To search for information in a book or online.', [
    ['查阅；查找', 'To search for information about something in a book or online.', '在书或网上查信息。', '及物短语，宾语为所查内容。', 'Look up the word in your dictionary.', '在词典里查这个词。', ['look up a word'], ['refer', 'search'], 'verb', '及物', '教育'],
  ], '', [], 'look + up；近义 refer to 参考、search 搜索。短语分级留空').phrase = true;

  W('lookout', 'noun', '/ˈlʊkaʊt/', 'A1', [], '瞭望处；警戒', 'A place or person for watching out for danger.', [
    ['瞭望处；警戒', 'A place or person for watching out for danger.', '瞭望的地方或人；也指提防。', '可数：keep a lookout。', 'The lookout spotted a ship.', '瞭望员发现了一艘船。', ['keep a lookout'], ['observatory', 'scout', 'viewpoint'], 'noun', 'countable', '军事'],
  ], 'lookouts', ['scout'], 'look A1 + out——首成分 look 在库，A1 继承；家族 scout 侦察员，近义 observatory 观察台、viewpoint 观景点');

  W('looming', 'adjective', '/ˈluːmɪŋ/', 'C1', [], '逼近的；迫近的', 'Looking likely to happen very soon.', [
    ['逼近的；迫近的', 'Looking likely to happen very soon, often something bad.', '（坏事）即将发生、隐约逼近的。', '定语或表语：a looming crisis。', 'A crisis was looming.', '一场危机正在逼近。', ['a looming crisis'], ['imminent'], 'adjective', '定语/表语', '通用'],
  ], '',['loom'], '←loom C1（隐约逼近）+ -ing，C1 继承（brief 根提示）；近义 imminent 逼近的');

  W('loosen', 'verb', '/ˈluːzn/', 'B1', ['CET4'], '放松；解开', 'To make less tight, or to become less strict.', [
    ['放松；解开', 'To make something less tight, or to become less strict.', '使变松；也指放宽限制。', '可及物或不及物：loosen up。', 'Loosen the rope a little.', '把绳子放松一点。', [], ['relax', 'slack'], 'verb', '及物', '通用'],
  ], 'loosens~loosened~loosened~loosening',['relax', 'loose'], '←loose B1 + -en（使役后缀），B1 继承（同 liken 模式）；家族 relax 放松，近义 slack 松弛');

  W('looseness', 'noun', '/ˈluːznəs/', 'B1', [], '松散；不严密', 'The state of being loose or not tight.', [
    ['松散；不严密', 'The state of being loose or not tight.', '不紧、不严密的状态。', '不可数。', 'The looseness of the screws caused a rattle.', '螺丝松动引起了响动。', [], ['slack'], 'noun', 'uncountable', '通用'],
  ], '',['loose'], '←loose B1 + -ness（透明后缀），B1 继承（brief 根提示）；近义 slack 松弛');

  W('loss', 'noun', '/lɒs/', 'A2', ['CET4'], '损失；失败', 'The fact of losing something.', [
    ['损失；失败', 'The fact of losing something, or the amount lost.', '失去某物；也指失去的量。', '可数或不可数：suffer a loss。', 'The team suffered a big loss.', '球队遭受了重大损失。', ['suffer a loss'], ['defeat', 'red', 'sacrifice', 'waste'], 'noun', 'countable', '通用'],
  ], 'losses', ['defeat', 'lose'], '←lose A2（lose → loss，se→ss 音变），A2 继承；家族 defeat 击败、lose 失去，近义 red、sacrifice 牺牲、waste 浪费');

  W('lost', 'adjective', '/lɒst/', '', [], '迷路的；丢失的', 'Not able to be found, or not knowing where you are.', [
    ['迷路的；丢失的', 'Not able to be found, or not knowing where you are.', '找不到的；也指迷路的。', '定语或表语：get lost。', 'We got lost in the forest.', '我们在森林里迷路了。', ['get lost'], ['missing', 'stray'], 'adjective', '定语/表语', '通用'],
  ], '', ['missing', 'stray'], 'lose 的过去分词独立成形容词——同 known 先例（不按词根继承），自身级无把握，故留空；家族 missing 失踪的、stray 迷路的');

  W('lost pet', 'noun', '/ˌlɒst ˈpet/', '', [], '走失的宠物', 'A pet that has become lost.', [
    ['走失的宠物', 'A pet that has become lost and separated from its owner.', '走失、与主人失散的宠物。', '可数。', 'A lost pet was found near the station.', '车站附近发现了一只走失的宠物。', [], ['stray'], 'noun', 'countable', '通用'],
  ], '', [], 'lost + pet；近义 stray 走失的、迷路的。短语分级留空').phrase = true;

  W('lots', 'noun', '/lɒts/', 'A1', [], '许多；大量', 'A large number or amount.', [
    ['许多；大量', 'A large number or amount of things.', '很多；lots of 后接名词。', '复数；lots of = a lot of。', 'We had lots of food.', '我们有很多食物。', ['lots of'], ['gallon', 'load', 'many', 'plenty'], 'noun', 'countable', '通用'],
  ], '',['plenty', 'lot'], '←lot A1 + -s（复数），A1 继承（inflected 桶，brief 根提示）；家族 plenty 充足，近义 gallon 加仑（大量）、load 一大堆、many 许多');

  W('lotus', 'noun', '/ˈləʊtəs/', '', [], '莲花', 'A plant with large flowers that grows on water.', [
    ['莲花', 'A plant with large pink or white flowers that grows on water.', '开大朵粉白花的水生植物。', '可数。', 'Lotus flowers grow in the pond.', '莲花生长在池塘里。', [], ['lily'], 'noun', 'countable', '自然'],
  ], 'lotuses', [], '希腊 lotos——无库内派生根，故留空；近义 lily 百合（同水生花卉）');

  W('loudly', 'adverb', '/ˈlaʊdli/', 'A1', ['CET4'], '大声地；响亮地', 'With much noise.', [
    ['大声地；响亮地', 'With much noise; at a high volume.', '以很大的音量。', '副词。', 'He laughed loudly.', '他放声大笑。', [], ['aloud', 'loud'], 'adverb', 'null', '通用'],
  ], '', ['loud'], '←loud A1 + -ly（透明后缀），A1 继承（brief 根提示）；近义 aloud 出声地、loud 大声地');

  W('loudness', 'noun', '/ˈlaʊdnəs/', 'A1', [], '响度；大声', 'How loud a sound is.', [
    ['响度；大声', 'How loud a sound is.', '声音的强弱程度。', '不可数。', 'The loudness of the alarm woke everyone.', '警报声之大把所有人都吵醒了。', [], ['volume'], 'noun', 'uncountable', '通用'],
  ], '',['loud'], '←loud A1 + -ness（透明后缀），A1 继承（brief 根提示）；近义 volume 音量');

  W('love affair', 'noun', '/ˌlʌv əˈfeə/', '', [], '风流韵事；恋情', 'A romantic relationship.', [
    ['风流韵事；恋情', 'A romantic or sexual relationship outside marriage, or any intense romance.', '婚外恋情；也泛指热烈的恋情。', '可数。', 'The novel describes a secret love affair.', '这部小说讲述了一段秘密恋情。', [], ['romance'], 'noun', 'countable', '情感'],
  ], '', ['romance'], 'love + affair；家族 romance 恋情、风流韵事。短语分级留空').phrase = true;

})(typeof window !== 'undefined' ? window : globalThis);
