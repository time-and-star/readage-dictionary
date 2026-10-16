/* data/words/cet/author_r9.js — 常用词 R 批次 9，缺口 reverie ~ rogue，共 31 条
 * （29 单词 + 2 短语：rhythm and blues、rice field）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：revolutionary、rewarding、rider、ridiculous、ripen、robbery；
 * CET6：revival、rigorous）。
 * 扫根结论：revive C1、revolve B2、reward B1、rich A1、rid B2、rise B1、rob B2（brief 根提示）；
 * voice A2、write A1、revolution B2、ridicule C1、rigor C1、ring A2、ripe B2（本批扫描）——
 * · 透明后缀/同根继承：revival←revive C1 + -al、revolutionary←revolution B2 + -ary、
 *   rewarding←reward B1 + -ing、ridiculous←ridicule C1 + -ous、ridiculousness←ridicule C1 +
 *   -ous + -ness（与 ridiculous 同族同根）、rigorous←rigor C1 + -ous（rigor 全段可见）、
 *   ringlet←ring A2 + -let（-let 指小后缀透明，环状卷语义直连）、ripen←ripe B2 + -en、
 *   robber←rob B2 + -er、robbery←rob B2 + -ery、riches←rich A1（复数形式单列）、
 *   rider←rid B2 + -er、rising←rise B1 + -ing。
 * · re- 前缀不作成分，取其后词根：revoice←voice A2、rewrite←write A1（形变同 write 不规则
 *   rewrote/rewritten）。
 * · brief 根提示直接继承：revolver←revolve B2（-er 器物后缀，转轮语义直连）。
 * · 留空项（无库内可继根）：reverie（法语借词，与 revere 非同源且语义不直连）、
 *   revulsion（re+vulsion 无库内可见语素）、rhombus、rhyme（与库内 rhythm 形近但词源不同，
 *   切词假象）、rind、rinse、risqu（与 risk 形近但拼写与现代语义均不直连，切词假象；
 *   词头照抄队列未补 é）、rite（ritual←rite + -ual 方向相反，rite 未在 ritual 中全段可见，
 *   兄弟派生不成立）、rivet、roam、robe（与 rob 形近但语义不直连）、
 *   rodent（rod+ent 切词假象，杆 rod 非语义基）、rogue，及两个短语（整体不取成分作根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r9.js 必须在 _cet_helper.js 之后加载');

  W('reverie', 'noun', '/rɪˈveri/', '', [], '白日梦；遐想', 'A calm pleasant state of thinking about other things.', [
    ['白日梦；出神', 'A calm and pleasant state of thinking about other things.', '心不在焉而又愉快地沉思的状态。', '可数，常与 in 连用。', 'She fell into a reverie and forgot the time.', '她陷入了遐想，忘了时间。', ['in a reverie'], ['abstraction'], 'noun', 'countable', '心理'],
  ], 'reveries', [], '库内无可见词根——法语 rêverie（白日梦），与 revere「敬畏」非同源且语义不直连（切词假象类），留空；近义 abstraction 出神、抽象沉思（队列原样）');

  W('revival', 'noun', '/rɪˈvaɪvl/', 'C1', ['CET6'], '复兴；复苏', 'A return of something to popularity, health, or strength.', [
    ['复兴；重新流行', 'A return to popularity of a style, activity, or belief.', '某种风格、活动或信仰重新流行。', '可数，常与 of 连用。', 'There has been a revival of interest in folk music.', '人们对民间音乐的兴趣重新高涨。', ['a revival of interest'], ['renaissance'], 'noun', 'countable', '文化'],
    ['复苏；恢复精力', 'A return to life, health, or strength.', '恢复生命、健康或活力。', '可数或不可数。', 'After a short rest she felt a sudden revival of energy.', '短暂休息后，她突然感到精力恢复了。', ['a revival of energy'], ['refreshment'], 'noun', 'uncountable', '健康'],
  ], 'revivals', ['refreshment', 'renaissance'], 'brief 显示 ←?，自行扫根 revive C1（author_r2）——revival←revive + -al（-al 透明名词后缀），C1 继承；家族 refreshment 提神、茶点、renaissance 复兴（队列原样），近义分置两义项：renaissance（文化复兴）、refreshment（恢复精力）');

  W('revoice', 'verb', '/ˌriːˈvɔɪs/', 'A2', [], '重新配音；重新表述', 'To record new speech for a film, or to say something again in different words.', [
    ['重新配音；重新表述', 'To record new speech for a film or broadcast, or to say something again in different words.', '为影片或广播重新录制对白；或换一种说法再说一遍。', '可及物，影视制作与正式语体均用。', 'The whole scene had to be revoiced after the edit.', '剪辑之后整个场景都得重新配音。', [], ['dub'], 'verb', '及物', '媒体'],
  ], 'revoices~revoiced~revoiced~revoicing',['voice'], 're- 前缀不作成分，取其后词根 voice A2（「再次发声」语义直连），A2 继承（brief 显示 ←?，自行扫根 voice）；近义 dub 配音（队列原样）');

  W('revolutionary', 'adjective/noun', '/ˌrevəˈluːʃənəri/', 'B2', ['CET4'], '革命的；创新的；革命者', 'Completely new and different, or somebody who wants great change.', [
    ['革命的；创新的', 'Completely new and very different from what came before.', '全新的，与此前大不相同的。', '可作定语或表语，常修饰 change、idea 等。', 'The smart phone brought a revolutionary change to daily life.', '智能手机给日常生活带来了革命性的变化。', ['a revolutionary change'], ['radical'], 'adjective', '定语/表语', '社会'],
    ['革命者', 'Somebody who wants to bring about a great political change.', '想要推动重大政治变革的人。', '可数，复数 revolutionaries。', 'The revolutionaries planned the uprising for spring.', '革命者把起义定在春天。', ['a political revolutionary'], ['rebel'], 'noun', 'countable', '政治'],
  ], 'revolutionaries', ['rebel'], 'brief 显示 ←?，自行扫根 revolution B2（author_r2）——revolutionary←revolution + -ary（-ary 透明后缀），B2 继承；家族 rebel 反叛者，近义 radical 激进的（置形容词义项）、rebel 反叛者（置名词义项），均队列原样');

  W('revolver', 'noun', '/rɪˈvɒlvə/', 'B2', [], '左轮手枪', 'A small gun with a cylinder that turns to hold several bullets.', [
    ['左轮手枪', 'A small gun with a cylinder that turns to hold several bullets.', '弹仓可旋转、可装数发子弹的小型枪支。', '可数。', 'The robber kept a revolver in his coat pocket.', '劫匪大衣口袋里揣着一把左轮手枪。', ['pull a revolver'], ['pistol'], 'noun', 'countable', '军事'],
  ], 'revolvers', ['pistol'], 'brief 根提示 ←revolve B2 + -er（-er 器物后缀透明，「转轮」与 revolve 语义直连），B2 继承；家族/近义 pistol 手枪（队列原样，revolver 为转轮式）');

  W('revulsion', 'noun', '/rɪˈvʌlʃn/', '', [], '强烈的厌恶', 'A sudden strong feeling of disgust and hatred.', [
    ['强烈的厌恶', 'A sudden strong feeling of disgust and hatred.', '突然产生的强烈厌恶与反感。', '不可数，常与 at 或 from 连用。', 'The cruelty of the act filled her with revulsion.', '那一行为的残忍让她充满反感。', ['a feeling of revulsion'], ['disgust'], 'noun', 'uncountable', '心理'],
  ], '', ['disgust'], '拉丁 revellere（拉回）——re+vulsion 无库内可见语素，属切词假象类（同 portend 先例），留空；家族/近义 disgust 厌恶、反感（队列原样）');

  W('rewarding', 'adjective', '/rɪˈwɔːdɪŋ/', 'B1', ['CET4'], '值得做的；报酬优厚的', 'Giving satisfaction, or producing a good profit.', [
    ['值得做的；有回报的', 'Giving satisfaction because you feel you are doing something useful.', '因觉得自己在做有用的事而感到满足。', '可作定语或表语，常形容工作、活动或经历。', 'Volunteering at the hospital was a rewarding experience.', '在医院做志愿者是一次很有收获的经历。', ['a rewarding experience'], ['worthwhile'], 'adjective', '定语/表语', '职业'],
    ['报酬优厚的；有利可图的', 'Producing a good profit or a generous reward.', '带来可观利润或丰厚回报的。', '多作定语，常形容工作、合同或投资。', 'The contract proved surprisingly rewarding for the firm.', '这份合同最终给公司带来了可观的回报。', ['a rewarding investment'], ['lucrative'], 'adjective', '定语', '商务'],
  ], '', ['worthwhile'], 'brief 根提示 ←reward B1 + -ing（分词形容词），B1 继承；家族 worthwhile 值得的，近义 worthwhile（置首义项）、lucrative 有利可图的（置第二义项），均队列原样');

  W('rewrite', 'verb/noun', '/ˌriːˈraɪt/', 'A1', [], '改写；重写；改写稿', 'To write something again, or a new version of it.', [
    ['改写；重写', 'To write something again in order to improve it or make it shorter.', '为了改进或缩短而把某物重新写一遍。', '可及物，宾语可以是文章、句子或规则。', 'Can you rewrite this sentence for me?', '你能帮我重写这个句子吗？', ['rewrite a sentence'], ['adapt', 'retell'], 'verb', '及物', '出版'],
    ['改写稿；修订稿', 'A new version of a piece of writing that has been written again.', '重新写过的新版本文稿。', '可数。', 'The teacher asked for a rewrite of the paragraph.', '老师要求把这段重写一遍。', ['a full rewrite'], [], 'noun', 'countable', '出版'],
  ], 'rewrites~rewrote~rewritten~rewriting',['write'], 're- 前缀不作成分，取其后词根 write A1（「再写」语义直连），A1 继承（brief 显示 ←?，自行扫根 write）；形变同 write 不规则 rewrote/rewritten；近义 adapt 改编、retell 复述（队列原样，置动词义项）');

  W('rhombus', 'noun', '/ˈrɒmbəs/', '', [], '菱形', 'A flat shape with four equal sides and no right angles.', [
    ['菱形；菱形块', 'A flat shape with four equal sides but no right angles.', '四边相等而没有直角的平面图形。', '可数，复数 rhombuses。', 'The tile is decorated with a yellow rhombus.', '这块瓷砖上装饰着一个黄色菱形。', ['a yellow rhombus'], ['diamond'], 'noun', 'countable', '教育'],
  ], 'rhombuses', [], '希腊语 rhombos（旋转物）——库内无可见词根，留空；近义 diamond 菱形、菱钻（队列原样）');

  W('rhyme', 'noun/verb', '/raɪm/', '', [], '押韵；韵脚；与…押韵', 'Words that end with the same sound, or to end that way.', [
    ['押韵；韵脚', 'Words that end with the same sound, or the use of such words.', '结尾读音相同的词，或这种押韵用法。', '不可数，指具体押韵词时可数。', 'The last two lines of the poem do not form a rhyme.', '这首诗的最后两行不押韵。', ['a rhyme scheme'], ['verse'], 'noun', 'uncountable', '文学'],
    ['（与…）押韵', 'To end with the same sound as another word.', '与另一个词结尾读音相同。', '不及物，常与 with 连用。', 'Orange does not rhyme with anything.', 'orange 跟什么词都不押韵。', ['rhyme with'], ['rap'], 'verb', '不及物', '文学'],
  ], 'rhymes~rhymed~rhymed~rhyming', [], '库内无可见词根（古英语 rīm）——与库内 rhythm 形近但词源不同，语义不直连（切词假象类），留空；近义 verse 诗行、韵文（置名词义项）、rap 说唱（置动词义项），均队列原样');

  W('rhythm and blues', 'noun', '/ˌrɪðəm ən ˈbluːz/', '', [], '节奏布鲁斯', 'A style of popular music with a strong rhythm, developed from blues.', [
    ['节奏布鲁斯（R&B）', 'A style of popular music with a strong rhythm, developed from blues and gospel.', '一种节奏感强烈的流行音乐风格，由布鲁斯和福音音乐发展而来。', '不可数，常缩写为 R&B。', 'The club plays rhythm and blues every Friday night.', '这家俱乐部每周五晚上演奏节奏布鲁斯音乐。', ['a rhythm and blues singer'], ['soul'], 'noun', 'uncountable', '娱乐'],
  ], '', [], 'rhythm + and + blues 短语整体不取成分作根，分级留空；近义 soul 灵魂乐（队列原样，短语条目）').phrase = true;

  W('rice field', 'noun', '/raɪs fiːld/', '', [], '稻田', 'A field in which rice is grown.', [
    ['稻田', 'A field in which rice plants are grown.', '种植水稻的田地。', '可数。', 'The farmers work in the rice fields all summer.', '农民整个夏天都在稻田里劳作。', ['flooded rice field'], ['paddy'], 'noun', 'countable', '农业'],
  ], '', [], 'rice + field 短语整体不取成分作根，分级留空；近义 paddy 稻田（队列原样，短语条目）').phrase = true;

  W('riches', 'noun', '/ˈrɪtʃɪz/', 'A1', [], '巨额财富；钱财', 'A large amount of money and valuable property.', [
    ['巨额财富', 'A large amount of money and valuable property.', '大量的金钱和贵重财物。', '用作复数形式，谓语可单可复。', 'He dreamed of finding great riches.', '他梦想找到巨额财富。', ['great riches'], ['fortune', 'treasure', 'wealth'], 'noun', 'uncountable', '金融'],
  ], '', ['treasure', 'wealth'], 'brief 根提示 ←rich A1 + -es（复数形式单列词条，随根 A1 继承）；家族 treasure 财宝、wealth 财富，近义 fortune 财富、treasure、wealth（队列原样，全置唯一义项）');

  W('rider', 'noun', '/ˈraɪdə/', 'B2', ['CET4'], '骑手；乘客', 'Somebody who is riding a horse or bike, or travelling in a vehicle.', [
    ['骑手；骑自行车或摩托车的人', 'Somebody who is riding a horse, bicycle, or motorcycle.', '正在骑马、骑自行车或骑摩托车的人。', '可数。', 'A lone rider passed us on the hill.', '一名独自骑行的人在山上超过了我们。', ['a lone rider'], [], 'noun', 'countable', '交通'],
    ['（车上的）乘客', 'A person travelling in a vehicle without driving it.', '不驾驶车辆而乘车的人。', '可数，常见于车船等语境。', 'The rider sat beside the driver and said nothing.', '乘客坐在司机旁边，一言不发。', [], ['passenger'], 'noun', 'countable', '交通'],
  ], 'riders', ['passenger'], 'brief 根提示 ←rid B2 + -er（-er 施事者后缀透明），B2 继承；家族/近义 passenger 乘客（队列原样，置第二义项）');

  W('ridiculous', 'adjective', '/rɪˈdɪkjələs/', 'C1', ['CET4'], '荒谬的；可笑的', 'Silly or unreasonable, making you want to laugh.', [
    ['荒谬的；可笑的', 'Silly or unreasonable, making you want to laugh.', '愚蠢或不合理的，令人发笑。', '可作定语或表语，语气比 funny 强。', 'It is ridiculous to wait two hours for a bus.', '等一班公交车要两个小时，太荒唐了。', ['absolutely ridiculous'], ['absurd'], 'adjective', '定语/表语', '通用'],
  ], '',['ridicule'], 'brief 显示 ←?，自行扫根 ridicule C1（author_r2）——ridiculous←ridicule + -ous（-ous 透明形容词后缀），C1 继承；近义 absurd 荒谬的（队列原样）');

  W('ridiculousness', 'noun', '/rɪˈdɪkjələsnəs/', 'C1', [], '荒谬；可笑', 'The quality of being silly or unreasonable.', [
    ['荒谬；可笑', 'The quality of being silly or unreasonable.', '愚蠢或不合理的性质。', '不可数，常与 of 连用。', 'Nobody noticed the ridiculousness of the plan.', '没人注意到这个计划有多荒唐。', ['the ridiculousness of'], ['absurdity'], 'noun', 'uncountable', '通用'],
  ], '',['ridicule'], '与 ridiculous 同族同根：←ridicule C1 + -ous + -ness（-ness 透明名词后缀），C1 继承（brief 显示 ←?，与 ridiculous 保持同根，自行扫根 ridicule）；近义 absurdity 荒谬（队列原样）');

  W('rigorous', 'adjective', '/ˈrɪɡərəs/', 'C1', ['CET6'], '严格的；严密的', 'Very thorough and careful, with exact standards.', [
    ['严格的；严密的', 'Very thorough and careful, with exact standards.', '非常彻底而仔细，标准精确。', '多作定语，常形容方法、训练或分析。', 'The researchers followed a rigorous set of procedures.', '研究人员遵循了一套严格的程序。', ['a rigorous analysis', 'rigorous training'], ['intensive'], 'adjective', '定语', '科学'],
  ], '',['rigor'], 'brief 显示 ←?，自行扫根 rigor C1（author_r2）——rigorous←rigor + -ous（-ous 透明形容词后缀，rigor 全段可见），C1 继承（同库 rigid 亦 C1，取分段更直接的 rigor，判断项披露）；近义 intensive 密集的、强化的（队列原样）');

  W('rind', 'noun', '/raɪnd/', '', [], '外皮；硬皮', 'The hard outer skin of a fruit or cheese.', [
    ['（瓜果的）外皮；（奶酪的）硬皮', 'The hard outer skin of a fruit such as a melon, or the outer layer of a cheese.', '瓜类等水果的硬外皮，或奶酪的外层硬皮。', '可数，常与 of 连用，也可作不可数。', 'Cut the rind off the cheese before you serve it.', '上桌前把奶酪的硬皮切掉。', ['lemon rind', 'cheese rind'], ['crust', 'peel', 'skin'], 'noun', 'countable', '饮食'],
  ], 'rinds', ['crust', 'peel'], '库内无可见词根（古英语 rind，原义树皮），留空；家族 crust 外皮、peel 果皮，近义 crust、peel、skin 表皮（队列原样，全置唯一义项）');

  W('ringlet', 'noun', '/ˈrɪŋɡlət/', 'A2', [], '一绺卷发；长卷发', 'A small curl of hair, especially a long hanging one.', [
    ['（一绺）卷发', 'A small curl of hair, especially a long hanging one.', '一小绺卷曲的头发，尤指垂下的长卷。', '可数，常用于描写发型。', 'The child had golden ringlets down her back.', '这孩子背后垂着一绺绺金色卷发。', ['a ringlet of hair'], ['curl'], 'noun', 'countable', '外貌'],
  ], 'ringlets',['ring'], 'brief 显示 ←?，自行扫根 ring A2（author_r2）——ringlet←ring + -let（-let 指小后缀透明，ring 全段可见且为语义成分「环状卷」），A2 继承，判断项披露；近义 curl 卷曲（队列原样）');

  W('rinse', 'verb/noun', '/rɪns/', '', [], '冲洗；漂洗', 'To wash quickly with clean water only, or a quick wash like this.', [
    ['冲洗；漂洗', 'To wash something quickly with clean water only, without soap.', '只用清水快速清洗，不用肥皂。', '可及物，常与 out、off 连用。', 'Rinse the rice before you cook it.', '煮之前把米淘洗一下。', ['rinse out', 'rinse off'], ['wash'], 'verb', '及物', '家居'],
    ['冲洗；漂洗一遍', 'A quick wash with clean water only.', '只用清水快速冲洗一遍。', '可数，常与单数限定词连用。', 'Give the cup a final rinse.', '把杯子最后用清水冲一遍。', ['a final rinse'], ['flush'], 'noun', 'countable', '家居'],
  ], 'rinses~rinsed~rinsed~rinsing', ['flush', 'wash'], '库内无可见词根（古法语 rinser），留空；家族 flush 冲洗、wash 洗，近义 wash（置动词义项）、flush 冲刷（置名词义项），均队列原样');

  W('ripen', 'verb', '/ˈraɪpən/', 'B2', ['CET4'], '（使）成熟', 'To become ready to eat, or to make fruit ready.', [
    ['（果实）成熟', 'To become ready to be eaten.', '（果实）变得可以食用。', '不及物。', 'The grapes ripen in the late summer.', '葡萄在夏末成熟。', ['ripen quickly'], ['mature'], 'verb', '不及物', '农业'],
    ['使…成熟', 'To make fruit or crops ready to be eaten.', '使水果或庄稼变得可以食用。', '可及物。', 'The warm weather ripened the crops quickly.', '温暖的天气使庄稼很快成熟。', ['ripen the fruit'], [], 'verb', '及物', '农业'],
  ], 'ripens~ripened~ripened~ripening',['ripe'], 'brief 显示 ←?，自行扫根 ripe B2（author_r2）——ripen←ripe + -en（-en 使动后缀透明），B2 继承；形变规则 ripens~ripened~ripened~ripening；近义 mature 成熟（队列原样，置不及物义项）');

  W('rising', 'adjective/noun', '/ˈraɪzɪŋ/', 'B1', [], '上升的；升起', 'Going up, or the act of coming up.', [
    ['上升的；上涨的', 'Going up or increasing in amount or level.', '在数量或水平上上升的。', '多作定语，常修饰 price、income、level 等。', 'Rising prices worry every family.', '不断上涨的物价让每个家庭担忧。', ['rising prices'], ['upward'], 'adjective', '定语', '商务'],
    ['（日月等的）升起', 'The act of coming up, as of the sun or moon.', '太阳或月亮等升起。', '可数，多用于书面或诗歌。', 'We watched the rising of the moon over the hills.', '我们看着月亮从山丘上升起。', ['the rising of the sun'], [], 'noun', 'countable', '书面'],
  ],'risings', ['upward'], 'brief 根提示 ←rise B1 + -ing（-ing 分词形容词兼名词化），B1 继承；家族/近义 upward 向上的、向上地（队列原样，置形容词义项）；分词形容词故词形变化留空');

  W('risqu', 'adjective', '/rɪˈskeɪ/', '', [], '有伤风化的；出位的', 'Slightly sexual in a way that is amusing rather than shocking.', [
    ['有伤风化的；出位的', 'Slightly sexual in a way that is amusing rather than shocking.', '略带性意味而令人发噱，并不吓人。', '多作定语，借自法语，词头按队列写作 risqu。', 'The play has a few risqu jokes.', '这出戏里有几个出位的笑话。', ['a risqu joke'], ['naughty'], 'adjective', '定语', '娱乐'],
  ], '', [], '法语 risqué 借词——与库内 risk B1 形近但拼写不全段对应且现代语义不直连（切词假象类），留空；词头照抄队列 risqu（未补 é，勿「纠正」）；近义 naughty 顽皮的、不雅的（队列原样）');

  W('rite', 'noun', '/raɪt/', '', [], '仪式；典礼', 'A traditional religious or public ceremony.', [
    ['仪式；典礼', 'A traditional religious or public ceremony.', '传统的宗教仪式或公共典礼。', '可数，常见于宗教或文化语境。', 'The funeral rite lasted three days.', '葬礼仪式持续了三天。', ['a religious rite'], ['ritual'], 'noun', 'countable', '宗教'],
  ], 'rites', [], '库内 ritual C1（author_r2）为 rite + -ual 的派生方向，词形反向，rite 未在 ritual 中全段可见（兄弟派生「词首全段共享」不成立），库内无更短可见根，留空；近义 ritual 仪式（队列原样）');

  W('rivet', 'noun/verb', '/ˈrɪvɪt/', '', [], '铆钉；吸引', 'A metal pin for fastening, or to hold attention completely.', [
    ['铆钉', 'A short metal pin used to hold two pieces of metal together.', '把两块金属固定在一起的短金属钉。', '可数。', 'Each plate is held in place by four rivets.', '每块板都由四颗铆钉固定就位。', ['a steel rivet'], [], 'noun', 'countable', '工业'],
    ['吸引；牢牢抓住', 'To hold the attention of somebody completely.', '完全吸引某人的注意力。', '可及物，常用于比喻。', 'The final scene riveted the audience.', '最后一幕牢牢吸引了观众。', ['riveted to the spot'], ['grip'], 'verb', '及物', '通用'],
  ], 'rivets~riveted~riveted~riveting', [], '法语 rivet（源自 rive「岸边」）——库内无可见词根，留空；近义 grip 紧握、吸引住（队列原样，置动词义项）；重音在首音节故 riveted/riveting 不双写');

  W('roam', 'verb', '/rəʊm/', '', [], '漫游；闲逛', 'To move around a place without a fixed plan.', [
    ['漫游；闲逛', 'To move around a place without a fixed plan, especially for pleasure.', '没有固定目的地四处走动，尤指为了消遣。', '不及物，常与 around、through 连用。', 'We roamed the old town all afternoon.', '我们在老城区闲逛了一下午。', ['roam around'], ['wander'], 'verb', '不及物', '通用'],
    ['（动物）活动于；遍布', 'To move freely over a wide area of land.', '在大片土地上自由活动。', '可及物，主语常为动物。', 'Deer roam the hills above the village.', '鹿群在村子上方的山丘上活动。', ['roam the hills'], ['range'], 'verb', '及物', '自然'],
  ], 'roams~roamed~roamed~roaming', ['wander'], '库内无可见词根（中古荷兰语 ramelen），留空；家族 wander 漫步，近义 wander（置不及物义项）、range 活动于、分布（置及物义项），均队列原样');

  W('robber', 'noun', '/ˈrɒbə/', 'B2', [], '强盗；劫匪', 'Somebody who robs a bank, shop, or person.', [
    ['强盗；劫匪', 'Somebody who robs a bank, shop, or person.', '抢劫银行、商店或行人的匪徒。', '可数。', 'The robber escaped with a bag of notes.', '劫匪带着一袋钞票逃走了。', ['masked robber'], ['thief'], 'noun', 'countable', '法律'],
  ], 'robbers', ['thief'], 'brief 根提示 ←rob B2 + -er（-er 施事者后缀透明），B2 继承；家族/近义 thief 小偷（队列原样，robber 强调当面强抢）');

  W('robbery', 'noun', '/ˈrɒbəri/', 'B2', ['CET4'], '抢劫；抢劫案', 'The crime of taking things from a place or person using force.', [
    ['抢劫；抢劫案', 'The crime of taking things from a place or person using force.', '以暴力从某处或某人手中夺取财物的罪行。', '可数或不可数。', 'The bank was closed after the robbery.', '银行在抢劫案后停业了。', ['armed robbery'], ['theft'], 'noun', 'countable', '法律'],
  ], 'robberies', ['theft'], 'brief 显示 ←?，自行扫根 rob B2（author_r2）——robbery←rob + -ery（-ery 透明名词后缀），B2 继承（构词规则示例 robbery←rob）；家族/近义 theft 盗窃（队列原样）');

  W('robe', 'noun', '/rəʊb/', '', [], '长袍；睡袍', 'A long loose garment worn at home or on formal occasions.', [
    ['（长）袍；睡袍', 'A long loose garment worn in bed or for relaxing at home.', '在家休息或睡觉时穿的宽松长袍。', '可数。', 'She put on a silk robe after the bath.', '沐浴后她穿上一件丝质睡袍。', ['a silk robe'], ['gown'], 'noun', 'countable', '家居'],
    ['（宗教或礼仪场合的）长袍；法衣', 'A long loose garment worn by priests, judges, or other officials.', '神职人员、法官等在正式场合穿的长袍。', '可数，常用复数 robes。', 'The judges entered the court in their robes.', '法官们穿着法袍进入法庭。', ['judicial robes'], ['habit'], 'noun', 'countable', '宗教'],
  ], 'robes', ['gown'], '库内无可见词根（古法语 robe）——与库内 rob 形近但语义不直连（切词假象类），留空；家族 gown 礼服，近义 gown 礼袍（置首义项）、habit 会服（置第二义项），均队列原样');

  W('rodent', 'noun', '/ˈrəʊdənt/', '', [], '啮齿动物', 'A small animal with sharp front teeth, such as a rat or mouse.', [
    ['啮齿动物', 'A small animal with sharp front teeth, such as a rat, mouse, or squirrel.', '门牙锋利的小动物，如老鼠、田鼠或松鼠。', '可数。', 'Rodents chew through the wiring under the car.', '啮齿动物把车底的线路啃坏了。', ['a rodent infestation'], ['mouse', 'rat'], 'noun', 'countable', '自然'],
  ], 'rodents', [], '拉丁 rodere（啃咬）——rod+ent 与库内 rod B2（杆）形近但语义不直连，属切词假象（同 portend 先例），留空；近义 mouse 老鼠、rat 大老鼠（队列原样，全置唯一义项）');

  W('rogue', 'noun/adjective', '/rəʊɡ/', '', [], '流氓；无赖；离群的', 'A dishonest person, or an animal living apart from its group.', [
    ['流氓；无赖', 'Somebody who behaves in a dishonest or uncontrolled way.', '行为不诚实或放纵不羁的人。', '可数，语气可带戏谑。', 'The old rogue sold us a broken radio.', '那个老无赖卖给我们一台坏收音机。', ['a charming rogue'], ['cowboy', 'hound'], 'noun', 'countable', '口语'],
    ['（动物）离群的；不驯的', 'Living apart from the rest of its group and not under control.', '脱离群体生活、不受控制的（动物）。', '多作定语。', 'A rogue elephant damaged the village fields.', '一头离群野象毁坏了村里的田地。', ['a rogue elephant'], [], 'adjective', '定语', '自然'],
  ], 'rogues', ['cowboy'], '库内无可见词根（古法语 rogue，原义傲慢的），留空；家族 cowboy 牛仔（队列原样，口语亦指鲁莽不守规矩的人），近义 cowboy、hound 无赖、恶棍（队列原样，置首义项）');
})(typeof window !== 'undefined' ? window : globalThis);
