/* data/words/cet/author_l4.js · 手敲词条 L（四·引用缺口批）：let down ~ limits（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（leverage CET6，其余见条目）。
 * 短语 9 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_l4.js 必须在 _cet_helper.js 之后加载');

  W('let down', 'verb', '/let daʊn/', '', [], '使失望', 'To make someone disappointed.', [
    ['使失望', 'To make someone disappointed by failing them.', '因辜负而让人失望。', '及物短语：let sb down。', 'The team let the fans down.', '这支球队让球迷失望了。', ['let sb down'], ['disappoint', 'fail'], 'verb', '及物', '通用'],
  ], '', ['disappoint', 'fail'], 'let + down；近义 disappoint 使失望、fail 辜负。短语分级留空').phrase = true;

  W('let fall', 'verb', '/let fɔːl/', '', [], '让…落下', 'To allow something to drop.', [
    ['让…落下', 'To allow something to drop from your hand.', '松手让某物掉下。', '及物短语。', 'She let the basket fall.', '她让篮子掉了下去。', [], ['drop'], 'verb', '及物', '通用'],
  ], '', [], 'let + fall；近义 drop 使落下。短语分级留空').phrase = true;

  W('let loose', 'verb', '/let luːs/', '', [], '放开；放纵', 'To set free, or to express without restraint.', [
    ['放开；放纵', 'To set something free, or to express feelings without holding back.', '放开束缚；也指无拘束地宣泄。', '及物短语。', 'They let the dog loose in the yard.', '他们把狗放到院子里自由活动。', [], ['unleash'], 'verb', '及物', '通用'],
  ], '', ['unleash'], 'let + loose；近义 unleash 放出、释放。短语分级留空').phrase = true;

  W('let stay', 'verb', '/let steɪ/', '', [], '让…留下', 'To allow someone to remain.', [
    ['让…留下', 'To allow someone to stay in a place.', '允许某人留在原处。', '及物短语：let sb stay。', 'Will you let me stay tonight?', '你今晚会让我留下吗？', [], ['leave'], 'verb', '及物', '通用'],
  ], '', [], 'let + stay；近义 leave（让…留下、不带走）。短语分级留空').phrase = true;

  W('lethal', 'adjective', '/ˈliːθl/', '', [], '致命的', 'Able to cause death.', [
    ['致命的', 'Able to cause death.', '足以致死的。', '定语，常接 dose / injury。', 'The dose was lethal within minutes.', '这个剂量几分钟内就致命了。', ['a lethal dose'], ['deadly', 'fatal'], 'adjective', '定语', '健康'],
  ], '', ['deadly', 'fatal'], '拉丁 letum（死亡）——无库内派生根，故留空；近义 deadly 致命的、fatal 致死的');

  W('letters', 'noun', '/ˈletəz/', 'A1', [], '信件（复数）', 'Written messages sent by post.', [
    ['信件（复数）', 'Written messages sent by post.', '邮寄的信函，letter 的复数。', '复数；亦指文学（the letters）义，本条取信件义。', 'The letters arrived safely.', '信都安全送达了。', [], ['mail'], 'noun', 'countable', '通用'],
  ], '',['letter'], '←letter A1 + -s（复数），A1 继承（inflected 桶）；近义 mail 邮件');

  W('level off', 'verb', '/ˌlevl ˈɒf/', '', [], '趋于平稳', 'To stop rising or falling and stay flat.', [
    ['趋于平稳', 'To stop rising or falling and remain at the same level.', '升或降之后进入平台期。', '不及物短语。', 'Sales leveled off after June.', '六月后销量趋于平稳。', [], ['plateau'], 'verb', '不及物', '商务'],
  ], '', [], 'level + off；近义 plateau 进入平台期。短语分级留空').phrase = true;

  W('leverage', 'noun/verb', '/ˈliːvərɪdʒ/', '', ['CET6'], '杠杆作用；影响力', 'The use of a lever, or the power gained from it.', [
    ['杠杆作用；影响力', 'The use of a lever to move something, or the power to influence others.', '用杠杆撬动；也指可借以影响他人的力量。', '不可数；动词义为利用。', 'The company used its leverage to cut costs.', '公司利用影响力削减成本。', ['financial leverage'], ['lever'], 'noun/verb', 'null', '金融'],
  ], 'leverages~leveraged~leveraged~leveraging', ['lever'], 'lever + -age——先例 passage（B2）与 pass（B1）脱钩，-age 不走词根继承，自身级无把握，故留空；近义 lever 杠杆');

  W('lexicon', 'noun', '/ˈleksɪkən/', '', [], '词汇；专门词典', 'All the words of a field, or a dictionary of them.', [
    ['词汇；专门词典', 'All the words used in a particular field, or a dictionary listing them.', '某领域的全部用词；也指专门词典。', '可数。', 'Each field has its own lexicon.', '每个领域都有自己的词汇。', [], ['vocabulary'], 'noun', 'countable', '教育'],
  ], 'lexicons', ['vocabulary'], '希腊 lexis（词）——无库内派生根，故留空；近义 vocabulary 词汇表');

  W('liability', 'noun', '/ˌlaɪəˈbɪləti/', 'B2', ['CET4'], '责任；负债', 'The state of being responsible, or of owing money.', [
    ['责任；负债', 'The state of being responsible for something, or the money you owe.', '须承担的责任；也指债务负担。', '可数或不可数。', 'The company accepted liability for the damage.', '公司接受了对损害的赔偿责任。', ['accept liability'], ['debt'], 'noun', 'countable', '法律'],
  ], 'liabilities',['debt', 'liable'], '←liable B2 + -ity（透明后缀），B2 继承（同 ability / activity / intensity 模式）；近义 debt 债务');

  W('liar', 'noun', '/ˈlaɪə/', 'A2', ['CET4'], '说谎者', 'A person who does not tell the truth.', [
    ['说谎者', 'A person who habitually does not tell the truth.', '习惯性说假话的人。', '可数。', 'Nobody believed the liar.', '没有人相信这个说谎者。', ['a compulsive liar'], ['cheat'], 'noun', 'countable', '通用'],
  ], 'liars',['lie'], '←lie A2 + -ar（施事后缀，同 -er），A2 继承（csv 官方派生词）；近义 cheat 骗子');

  W('liberalise', 'verb', '/ˈlɪbərəlaɪz/', 'B2', [], '使自由化', 'To make rules or systems less strict.', [
    ['使自由化', 'To make laws, rules or systems less strict.', '放宽法规、制度的限制。', '及物，英式拼 liberalise；美式 liberalize。', 'The state liberalised the banking rules.', '国家放宽了银行业规定。', [], ['deregulate'], 'verb', '及物', '政治'],
  ], 'liberalises~liberalised~liberalised~liberalising',['deregulate', 'liberal'], '←liberal B2 + -ise（透明后缀），B2 继承；近义 deregulate 解除管制');

  W('lie in', 'verb', '/laɪ ɪn/', '', [], '在于', 'To be contained in something.', [
    ['在于', 'To be the thing that something consists of or depends on.', '核心藏于其中、取决于此。', '不及物短语：lie in doing。', 'The difficulty lies in the details.', '难点在于细节。', [], ['consist'], 'verb', '不及物', '通用'],
  ], '', [], 'lie + in；近义 consist 在于、由…组成。短语分级留空').phrase = true;

  W('lie low', 'verb', '/laɪ ləʊ/', '', [], '躲藏；蛰伏', 'To stay hidden to avoid attention.', [
    ['躲藏；蛰伏', 'To stay hidden for a while to avoid being found.', '为避风头而躲起来。', '不及物短语。', 'The thief lay low for a month.', '小偷躲藏了一个月。', [], ['hibernate'], 'verb', '不及物', '通用'],
  ], '', ['hibernate'], 'lie + low；家族 hibernate 冬眠（长期蛰伏）。短语分级留空').phrase = true;

  W('lie under', 'verb', '/laɪ ˈʌndə/', '', [], '构成…的基础', 'To be the basis of something.', [
    ['构成…的基础', 'To be the hidden basis that something rests on.', '处于下层、构成其基础。', '不及物短语；同 underlie 的祈使/原形搭配。', 'A simple rule lies under the whole system.', '一条简单规则构成整个系统的基础。', [], ['underlie'], 'verb', '不及物', '通用'],
  ], '', [], 'lie + under；近义 underlie 构成…的基础。短语分级留空').phrase = true;

  W('lifeless', 'adjective', '/ˈlaɪfləs/', 'A1', [], '无生命的；死气沉沉', 'Without life, or lacking energy.', [
    ['无生命的；死气沉沉', 'Without life, or without any energy or interest.', '没有生命；也指毫无生气。', '定语或表语。', 'The body lay lifeless on the ground.', '尸体横在地上，毫无生气。', [], ['dead'], 'adjective', '定语/表语', '通用'],
  ], '', ['dead'], 'life A1 + -less（透明后缀），A1 继承（同 jobless 模式）；近义 dead 死的');

  W('lifelike', 'adjective', '/ˈlaɪflaɪk/', 'A1', [], '逼真的', 'Very much like the real thing.', [
    ['逼真的', 'Very much like the real living thing.', '与实物几乎一模一样的。', '定语。', 'The model is a lifelike copy of the ship.', '这个模型是那条船的逼真复制品。', ['a lifelike model'], ['realistic'], 'adjective', '定语', '通用'],
  ], '', ['realistic'], 'life A1 + like A1——两成分均在库，A1 继承；近义 realistic 逼真的');

  W('lifeline', 'noun', '/ˈlaɪflaɪn/', 'A1', [], '救生索；生命线', 'A line or thing that saves someone.', [
    ['救生索；生命线', 'A rope or resource that keeps someone from danger.', '救命的绳索；也指维持希望的事物。', '可数。', 'The rope was their only lifeline.', '那根绳子是他们唯一的生命线。', [], ['salvation'], 'noun', 'countable', '通用'],
  ], 'lifelines',['life', 'line'], 'life A1 + line A1——首成分 life 可见，A1 继承；近义 salvation 救命之物');

  W('lifetime', 'noun', '/ˈlaɪftaɪm/', 'A1', [], '一生', 'The time a person is alive.', [
    ['一生', 'The time during which a person is alive.', '人活着的整段时间。', '可数。', 'It was the opportunity of a lifetime.', '那是一生一次的机会。', ['once in a lifetime'], ['life'], 'noun', 'countable', '通用'],
  ], 'lifetimes', ['life'], 'life A1 + time A1——首成分 life 可见，A1 继承；家族 life 生命、一生');

  W('liftoff', 'noun', '/ˈlɪftɒf/', 'A2', [], '起飞；发射', 'The moment a rocket leaves the ground.', [
    ['起飞；发射', 'The moment a rocket or spacecraft leaves the ground.', '火箭或航天器离地的瞬间。', '不可数。', 'Liftoff is scheduled for noon.', '发射定于中午进行。', [], ['takeoff'], 'noun', 'uncountable', '交通'],
  ], '',['lift', 'off'], 'lift A2 + off——首成分 lift 可见，A2 继承；近义 takeoff 起飞（飞机）');

  W('light up', 'verb', '/laɪt ʌp/', '', [], '点亮；照亮', 'To make something bright, or to switch on a light.', [
    ['点亮；照亮', 'To make something bright, or to switch on a light.', '开灯；也指照亮。', '及物短语，亦作不及物（脸亮起来）。', 'The lamps light up the street at night.', '夜里路灯照亮街道。', [], ['illuminate'], 'verb', '及物', '家居'],
  ], '', ['illuminate'], 'light + up；近义 illuminate 照亮。短语分级留空').phrase = true;

  W('light-headed', 'adjective', '/ˌlaɪt ˈhedɪd/', 'A1', [], '头晕的', 'Feeling slightly faint.', [
    ['头晕的', 'Feeling slightly faint, as if about to fall over.', '头轻目眩、发晕的。', '表语。', 'She felt light-headed after the flight.', '飞行之后她感到头晕。', [], ['dizzy'], 'adjective', '表语', '健康'],
  ], '', ['dizzy'], 'light A1 + headed——首成分 light 可见，A1 继承（同 clear-headed A1 模式）；近义 dizzy 头晕的');

  W('lighter', 'noun', '/ˈlaɪtə/', 'A1', [], '打火机', 'A small device for lighting cigarettes or fires.', [
    ['打火机', 'A small device for making a flame to light cigarettes, candles or fires.', '点烟、点火用的小器具。', '可数；亦为 light 的比较级，本条取名词义。', 'He bought a lighter for the candles.', '他买了个打火机来点蜡烛。', [], ['match'], 'noun', 'countable', '家居'],
  ], 'lighters',['light'], '←light A1 + -er（工具/施事后缀），A1 继承（亦属 light 的屈折形，inflected 桶）；近义 match 火柴');

  W('likely', 'adverb/adjective', '/ˈlaɪkli/', '', ['CET4'], '很可能的', 'Probably going to happen.', [
    ['很可能的', 'Probably going to happen or be true.', '大概率会发生。', '形容词与副词两用：be likely to。', 'It is likely to rain later.', '稍后很可能下雨。', ['most likely'], ['apt', 'liable', 'possible', 'potential', 'probable'], 'adverb/adjective', 'null', '通用'],
  ], '', ['liable', 'probable'], '←like A1 + -ly；like 在库义以"喜欢"为主，"很可能"与之现代语义不直连（§5.1；likely 实源 like"相似"古义，非在库 like 主义），-ly 虽透明但根义不直连，留空（判断项，主 agent 全库审计改判，原备注与留空参数矛盾已修正）；家族 liable 易…的、probable 很可能的');

  W('liken', 'verb', '/ˈlaɪkən/', 'A1', [], '比作', 'To describe something as similar to another.', [
    ['比作', 'To describe something as being similar to something else.', '把…说成与…相像。', '及物：liken A to B。', 'Critics likened the film to a nightmare.', '影评人把这部电影比作一场噩梦。', ['liken to'], ['compare'], 'verb', '及物', '通用'],
  ], 'likens~likened~likened~likening',['compare', 'like'], '←like A1 + -en（使役后缀，同 widen / frighten），A1 继承；近义 compare 比作');

  W('likeness', 'noun', '/ˈlaɪknəs/', 'A1', [], '相像；画像', 'The way someone looks, or a picture of them.', [
    ['相像；画像', 'The state of looking similar, or a picture that shows a person well.', '与…相像；也指逼真的画像。', '可数。', 'She painted a likeness of the child.', '她画了一幅这个孩子的肖像。', ['a good likeness'], ['image'], 'noun', 'countable', '艺术'],
  ], 'likenesses',['like'], '←like A1 + -ness（透明后缀），A1 继承；近义 image 画像');

  W('liking', 'noun', '/ˈlaɪkɪŋ/', 'A1', [], '喜好', 'A feeling of liking something.', [
    ['喜好', 'A feeling that you enjoy something or find it pleasant.', '对…的喜爱。', '可数：a liking for。', 'She has a liking for classical music.', '她喜欢古典音乐。', ['a liking for'], ['fancy', 'incline', 'love'], 'noun', 'countable', '情感'],
  ], 'likings',['like'], '←like A1 + -ing（透明后缀），A1 继承；近义 fancy 喜好、incline 偏好、love 爱好');

  W('limestone', 'noun', '/ˈlaɪmstəʊn/', 'B2', [], '石灰岩', 'A soft rock used to make cement.', [
    ['石灰岩', 'A pale soft rock used to make cement and buildings.', '浅色软岩，用于制水泥与建筑。', '不可数。', 'The cliff is made of limestone.', '这面峭壁由石灰岩构成。', [], ['lime'], 'noun', 'uncountable', '自然'],
  ], '', ['lime'], 'lime B2 石灰 + stone——首成分 lime 可见，B2 继承；近义 lime 石灰');

  W('limited', 'adjective', '/ˈlɪmɪtɪd/', 'B1', ['CET4'], '有限的', 'Not very great in amount or number.', [
    ['有限的', 'Not very great in amount, number or ability.', '数量或程度不大的。', '定语或表语：limited to。', 'Seats are limited, so book early.', '座位有限，请尽早预订。', ['limited to'], ['finite', 'narrow'], 'adjective', '定语/表语', '通用'],
  ], '',['finite', 'limit'], '←limit B1 + -ed（透明后缀），B1 继承；近义 finite 有限的、narrow 狭窄的');

  W('limitless', 'adjective', '/ˈlɪmɪtləs/', 'B1', [], '无限的', 'With no limits.', [
    ['无限的', 'With no limits or end.', '没有边界、没有尽头的。', '定语。', 'The universe seems limitless.', '宇宙似乎无穷无尽。', [], ['infinite'], 'adjective', '定语', '通用'],
  ], '', ['infinite'], 'limit B1 + -less（透明后缀），B1 继承；近义 infinite 无限的');

  W('limits', 'noun', '/ˈlɪmɪts/', 'B1', [], '界限（复数）', 'The furthest points something can reach.', [
    ['界限（复数）', 'The furthest points something is allowed to reach.', '允许达到的最远处；limit 的复数。', '复数。', 'Know your limits before you start.', '开始之前要清楚自己的界限。', ['within limits'], ['confine'], 'noun', 'countable', '通用'],
  ], '',['limit'], '←limit B1 + -s（复数），B1 继承（inflected 桶）；近义 confine 界限');

})(typeof window !== 'undefined' ? window : globalThis);
