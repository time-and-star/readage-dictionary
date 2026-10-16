/* data/words/cet/author_s17.js — 常用词 S 批次 17，缺口 smuggling ~ someplace，共 31 条
 * （26 单词 + 5 短语：so as to、so far、social science、soft drink、solo piece，5 条均带 .phrase = true）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_s17.txt，widx 125-155，词头残缺或无空格一律不改写）。
 * CET 标签照抄队列：CET4 × 6（snowy、sociable、soften、solemnity、solidify、solution）、
 *   CET6 × 2（smuggling、solicitor），其余 23 条 []。
 * brief：%TEMP%\opencode\_s17_brief.txt 共 26 行，与本批 26 个单词一一对应（5 条短语无 brief 行）；
 *   6 行给根（smuggle C1、snack A2、soak B2、soft A1、soldier A2、solemn C1），其余 20 行显示 ←?。
 *   ←? 一律按规范 §5.2 纯文本自扫：fs.readFileSync + indexOf 定位 W( 词头行取第 4 参
 *   （扫 assets/js/data/words/cet/author_*.js，未 require 全库）；curated.js、adapt.js 以 level 字段核对，
 *   social 自扫确认不在库。
 * 扫根结论（自扫出处）：smuggle C1（author_s6）、snack A2（author_s6）、snap C1（author_s7）、
 *   snow A1（author_s7）、soak B2（author_s7，与 brief 同）、soft A1（author_s7，与 brief 同）、
 *   soldier A2（author_s7，与 brief 同）、solemn C1（author_s7，与 brief 同）、solicit C1（author_s7）、
 *   solid B1（author_s7）、solve A2（author_s3）、some A1（author_s3）。
 * 继承 16 条：smuggling←smuggle C1 + -ing、snacks←snack A2 + -s（判断项）、
 *   snapshot←snap C1（复合词取首成分，判断项）、snowboard←snow A1、snowfall←snow A1、
 *   snowy←snow A1 + -y（§5.4 条 4b 裁定可继）、soaked←soak B2 + -ed、
 *   softcover←soft A1（复合词取首成分）、soften←soft A1 + -en、softly←soft A1 + -ly、
 *   soldiers←soldier A2 + -s（判断项）、solemnity←solemn C1 + -ity（判断项）、
 *   solicitor←solicit C1 + -or（判断项：语义引申）、solidify←solid B1 + -ify（判断项）、
 *   solution←solve A2 + e→∅+ion（§5.5 正字类）、someplace←some A1（复合词取首成分，判断项）。
 * 留空 15 条：snare、snarl、snip、snoop、snooze、snout、snub（库内无在库词根，-are/-ar/-ip/-oop/
 *   -out/-ub 均不在 §5.4 清单）；sociable、socialize（根词 social 自扫不在库，-able/-ize 无根可继）；
 *   softie（-ie 不在 §5.4 清单）；5 条短语（规范 §6：整体不取成分作根，CEFR 留空）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s17.js 必须在 _cet_helper.js 之后加载');

  W('smuggling', 'noun', '/ˈsmʌɡlɪŋ/', 'C1', ['CET6'], '非法走私；走私活动', 'Moving goods secretly across a border in order to avoid the law.', [
    ['走私（行为）', 'The illegal movement of goods into or out of a country without paying the tax that is owed.', '不缴应缴税款而把货物运进或运出一个国家的非法行为。', '不可数；smuggle 的动名词形式用作名词，常与 of 连用。', 'The smuggling of diamonds continued despite the new checks.', '尽管有了新的检查，钻石走私仍在继续。', ['drug smuggling', 'smuggling of goods'], ['traffic'], 'noun', 'uncountable', '法律'],
  ], '',['smuggle'], 'brief 根提示 ←smuggle C1 走私 + -ing（动名词转名词，-ing 在 §5.4 清单），C1 继承；近义 traffic 非法交易（队列原样，置唯一义项）');

  W('snacks', 'noun', '/snæks/', 'A2', [], '两餐之间吃的小食', 'Food eaten in small amounts between meals.', [
    ['小吃；点心（复数）', 'Small items of food such as crisps, nuts or biscuits that people eat between meals.', '人们在正餐之间成小份吃的食物，如薯片、坚果或饼干。', 'snack 的复数形式单列词条；作主语时谓语用复数。', 'We bought snacks and drinks for the journey.', '我们为这趟旅途买了小吃和饮料。', ['have a snack', 'snack food'], ['refreshment'], 'noun', 'countable', '饮食'],
  ], '', ['refreshment'], 'brief 根提示 ←snack A2 小吃 + -s（复数形式单列词条，forms 留空），A2 继承（判断项：-s 不在 §5.4 明示清单，按库内 sales←sale A2、slacks←slack C1 先例）；家族/近义 refreshment 茶点、饮料（队列原样，置唯一义项）');

  W('snapshot', 'noun', '/ˈsnæpʃɒt/', 'C1', [], '快照；情况速写', 'A quick picture or a brief view of how things stand.', [
    ['快照；抓拍照', 'A picture taken quickly with a camera, often of a person or a scene.', '用相机迅速拍下的影像，常拍人物或场景。', '可数；数码语境中也指屏幕截图。', 'She took a snapshot of the children on the beach.', '她给海滩上的孩子们拍了一张快照。', ['take a snapshot', 'a snapshot of'], ['photo'], 'noun', 'countable', '艺术'],
    ['（某一时点的）概况；写照', 'A short report or set of figures that shows what a situation is like at one moment.', '反映某一时点情况的简要报告或一组数据。', '可数，常与 of 连用，多见于新闻与商业语境。', 'The survey gives a snapshot of local spending.', '这份调查提供了当地消费状况的一个概况。', ['a snapshot of the economy'], [], 'noun', 'countable', '商务'],
  ], 'snapshots',['snap'], 'brief ←?，自扫根：复合词 snap+shot 取首成分（规范 §5.3，run-up←run 先例）snap C1（author_s7.js 第 4 参），语义直连（snap 拍快照），C1 继承（判断项：首成分级别偏高）；近义 photo 照片（队列原样，置首义项）');

  W('snare', 'noun/verb', '/sneə/', '', [], '陷阱；罗网；设套捕捉', 'A loop of wire or rope for catching animals, or to catch with it.', [
    ['陷阱；罗网', 'A loop of wire or rope used to catch animals such as rabbits.', '用来捕捉兔子等动物的金属丝或绳索圈套。', '可数；也比喻使人上当的圈套。', 'The rabbit was caught in a snare near the hedge.', '那只兔子在篱笆旁被套索捉住了。', ['set a snare', 'caught in a snare'], ['trap'], 'noun', 'countable', '自然'],
    ['设陷阱捕捉；使上圈套', 'To catch an animal with a loop of rope, or to trick someone into a bad situation.', '用绳套捕捉动物，或设计让某人落入困境。', '及物动词，宾语是猎物或人。', 'Poachers snared the deer close to the river.', '偷猎者在河边用套索捉住了那头鹿。', ['snare a rabbit'], [], 'verb', '及物', '自然'],
  ], 'snares~snared~snared~snaring', ['trap'], 'brief ←?，自扫根：库内无 snare 的在库词根（-are 不在 §5.4 清单），留空；家族 trap 陷阱、近义 trap 陷阱（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('snarl', 'noun/verb', '/snɑːl/', '', [], '咆哮；缠结的一团', 'An angry growl from an animal, or a twisted mass of things.', [
    ['（动物的）咆哮；龇牙低吼', 'A deep angry sound made by an animal with its mouth open and teeth shown.', '动物张口露齿发出的低沉而愤怒的声音。', '可数，常与 of 连用。', 'The dog gave a low snarl and moved back.', '那条狗低吼一声退了回去。', ['let out a snarl'], [], 'noun', 'countable', '自然'],
    ['缠结的一团；混乱', 'A twisted mass of hair, string or wires that is difficult to pull apart, or a state of great confusion.', '毛发、线或电线绞成的难以拉开的一团，也可指极度混乱的状态。', '可数；交通语境常说 traffic snarl。', 'The yarn formed a snarl around the spindle.', '纱线在纺锤上缠成了一团。', ['a snarl of traffic'], ['tangle'], 'noun', 'countable', '交通'],
    ['（使）缠结；（使）乱成一团', 'To become twisted into a tight mass, or to make threads, hair or wires do this.', '（线、毛发等）绞在一起，或使它们绞在一起。', '不及物动词，常与 up 连用。', 'The wet hair snarled around the brush.', '湿头发缠在了梳子上。', ['snarl up'], [], 'verb', '不及物', '外貌'],
  ], 'snarls~snarled~snarled~snarling', [], 'brief ←?，自扫根：库内无 snarl 的在库词根（-arl 不在 §5.4 清单），留空；近义 tangle 缠结（队列原样，置义项 2 恰好一次）');

  W('snip', 'noun/verb', '/snɪp/', '', [], '剪切；剪下的一小段', 'A quick cut with blades, or to cut something this way.', [
    ['一剪；剪下的一小段', 'A small piece that has been cut off, or a single quick cutting action.', '被剪下来的一小块，或一次短促的剪切动作。', '可数，常与 of 连用。', 'He cut the label off with one snip.', '他一刀剪掉了标签。', ['a snip of ribbon'], ['scissors'], 'noun', 'countable', '家居'],
    ['剪；剪断', 'To cut cloth, thread or paper with short quick closing movements of the blades.', '用刀刃短促闭合的动作剪开布、线或纸。', '及物动词，宾语是布料、线头、纸等。', 'Snip the ends of the pastry to seal it.', '把酥皮边缘剪齐以便封口。', ['snip off', 'snip the ends'], [], 'verb', '及物', '家居'],
  ], 'snips~snipped~snipped~snipping', [], 'brief ←?，自扫根：库内无 snip 的在库词根（-ip 不在 §5.4 清单），留空；近义 scissors 剪刀（队列原样，置首义项）');

  W('snoop', 'verb/noun', '/snuːp/', '', [], '窥探；爱打探的人', 'Secret looking into the private affairs of others, or a person who does it.', [
    ['窥探；打探', 'To try to find out private information about other people in a secret or annoying way.', '以隐秘或令人反感的方式打听别人的私事。', '不及物动词，常与 around、through、on 连用。', 'He was snooping through the drawers of the desk.', '他正在书桌的抽屉里乱翻。', ['snoop around', 'snoop on'], ['nose', 'spy'], 'verb', '不及物', '社交'],
    ['爱打探的人；探听者', 'A person who meddles in the private affairs of other people.', '爱管别人闲事的人。', '可数，含贬义。', 'The neighbours are such snoops about everything.', '邻居们对什么事都这么爱打听。', ['a nosy snooper'], [], 'noun', 'countable', '社交'],
  ], 'snoops~snooped~snooped~snooping', [], 'brief ←?，自扫根：库内无 snoop 的在库词根（源自荷兰语 snoepen），留空；近义 nose 多管闲事、spy 窥探（队列原样，置首义项各恰好一次）');

  W('snooze', 'verb/noun', '/suːnz/', '', [], '小睡；打盹', 'A brief sleep, or to take one during the day.', [
    ['小睡；打盹', 'A short sleep, usually taken while sitting in a chair during the day.', '白天通常坐在椅子上打的一会儿盹。', '可数，非正式用语。', 'He had a quick snooze after lunch.', '午饭后他小睡了一会儿。', ['have a snooze', 'a quick snooze'], ['doze', 'nap'], 'noun', 'countable', '通用'],
    ['打盹；小睡', 'To spend a short time sleeping, often in a chair in the afternoon.', '花一小段时间睡觉，常指下午坐着打盹。', '不及物动词，主语多为人或动物。', 'The cat was snoozing on the warm step.', '那只猫正在温暖的台阶上打盹。', ['snooze for an hour'], [], 'verb', '不及物', '通用'],
  ], 'snoozes~snoozed~snoozed~snoozing', ['doze', 'nap'], 'brief ←?，自扫根：库内无 snooze 的在库词根（-ooze 不在 §5.4 清单），留空；家族 doze 打盹、nap 小睡，近义 doze、nap（队列原样，fam 入第 10 参，syn 置首义项各恰好一次）');

  W('snout', 'noun', '/naʊt/', '', [], '（动物的）口鼻部', 'The front part of an animal head, with the mouth at the end.', [
    ['（猪、狗等的）口鼻部', 'The long front part of the face of an animal such as a pig or a dog, with the mouth at the end.', '猪、狗等动物脸部长长的前端，嘴巴在尽头处。', '可数；也可指机器等突出的前端。', 'The pig pushed the gate open with its snout.', '那头猪用嘴把门拱开了。', ['a pig snout'], ['nose'], 'noun', 'countable', '自然'],
  ], 'snouts', [], 'brief ←?，自扫根：库内无 snout 的在库词根（-out 不在 §5.4 清单），留空；近义 nose 鼻子（队列原样，置唯一义项）');

  W('snowboard', 'noun/verb', '/ˈsnəʊbɔːd/', 'A1', [], '单板；单板滑雪', 'A wide board ridden down snow slopes, or the sport of doing it.', [
    ['滑雪单板', 'A wide board used to slide down snow, with both feet fixed on it.', '双脚固定在其上、用来在雪面上滑行的宽板。', '可数；常与动词 ride、buy 连用。', 'She bought a new snowboard before the season.', '她在滑雪季开始前买了一块新单板。', ['ride a snowboard'], [], 'noun', 'countable', '体育'],
    ['滑单板滑雪', 'To travel down snow slopes standing on a single wide board.', '站在一块宽板上从雪坡上滑下来。', '不及物动词，常与介词 down、at 连用。', 'We went snowboarding in the Alps last winter.', '去年冬天我们去阿尔卑斯山滑了单板。', ['go snowboarding'], ['ski'], 'verb', '不及物', '体育'],
  ], 'snowboards~snowboarded~snowboarded~snowboarding', ['ski'], 'brief ←?，自扫根：复合词 snow+board 取首成分（规范 §5.3）snow A1（author_s7.js 第 4 参），A1 继承；家族/近义 ski 滑雪（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('snowfall', 'noun', '/ˈsnəʊfɔːl/', 'A1', [], '降雪；一场雪', 'Frozen flakes coming down from the sky, or how much comes down.', [
    ['降雪；一场雪', 'Frozen flakes falling from the sky, or the amount that falls during a period of time.', '天空中落下的冰晶，或一段时间内的降雪量。', '可数，常与 heavy、first 连用。', 'A heavy snowfall closed the mountain road.', '一场大雪封住了山路。', ['first snowfall', 'heavy snowfall'], ['snow'], 'noun', 'countable', '自然'],
  ], 'snowfalls',['snow'], 'brief ←?，自扫根：复合词 snow+fall 取首成分（规范 §5.3）snow A1（author_s7.js 第 4 参），A1 继承；家族/近义 snow 雪（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('snowy', 'adjective', '/ˈsnəʊi/', 'A1', ['CET4'], '下雪的；多雪的；雪白的', 'Full of snow, or very pale and bright like snow.', [
    ['下雪的；多雪的', 'Used of a place or a period of time when snow is falling or lying on the ground.', '形容正在下雪或地上积雪的地方与时段。', '定语表语两用，常见 snowy day、snowy weather。', 'A snowy January followed the mild December.', '温和的十二月之后是多雪的一月。', ['a snowy day', 'snowy weather'], [], 'adjective', '定语', '自然'],
    ['雪白的；洁白的', 'Extremely pale and bright in colour, like new snow.', '颜色极浅而明亮，像新下的雪一样。', '多作定语，带文学色彩。', 'Fresh linen looked snowy against the dark wood.', '崭新的亚麻布衬着深色木器显得雪白。', ['snowy feathers'], ['white'], 'adjective', '定语', '外貌'],
  ], '', ['white'], 'brief ←?，自扫根 snow A1（author_s7.js 第 4 参）——snow + -y（-y 按规范 §5.4 条 4b 裁定可继，先例 noisy←noise、rainy←rain、showery←shower），A1 继承；家族/近义 white 雪白的、白色的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('snub', 'verb/noun', '/snʌb/', '', [], '冷落；怠慢；被冷落的一次', 'To treat someone coldly on purpose, or such an act.', [
    ['冷落；故意怠慢', 'To treat someone with deliberate coldness as a sign of disapproval.', '出于不满而故意对某人冷淡。', '及物动词，宾语是人。', 'She snubbed him at the party by turning away at once.', '她在聚会上立刻转身走开，给他难堪。', ['feel snubbed', 'a public snub'], ['ignore', 'slight'], 'verb', '及物', '社交'],
    ['被冷落的一次；怠慢', 'An act of treating someone as if they are not important.', '把某人当作无足轻重的一次举动。', '可数，常与 to 连用。', 'His absence was seen as a snub to the hosts.', '他的缺席被看作是对主人的怠慢。', ['a deliberate snub'], [], 'noun', 'countable', '社交'],
  ], 'snubs~snubbed~snubbed~snubbing', [], 'brief ←?，自扫根：库内无 snub 的在库词根（-ub 不在 §5.4 清单），留空；近义 ignore 不理会、slight 怠慢（队列原样，置首义项各恰好一次）');

  W('so as to', 'conjunction', '/səʊ æz tuː/', '', [], '以便；为了', 'For the purpose of doing something.', [
    ['以便；为了', 'Used to say why someone does something, so that a particular result is achieved.', '说明做某事的原因，即为了得到某种结果。', '连词短语，后接动词原形，多见于书面语。', 'He saved the file so as to keep a copy for later.', '他把文件存了下来，以便日后留一份。', ['so as to avoid', 'so as to save time'], ['order'], 'conjunction', 'null', '语法'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 order 见于 in order to 结构（队列原样，置唯一义项，短语条目）').phrase = true;

  W('so far', 'adverb', '/səʊ fɑː/', '', [], '到目前为止；迄今', 'Up to this moment, with the situation still open to change.', [
    ['到目前为止；迄今', 'Used to say how things stand at the present time, before any change.', '说明目前的情况，之后仍可能改变。', '副词短语，修饰动词。常与现在完成时连用，可位于句首或句末。', 'We have had no reply so far.', '到目前为止我们还没有收到回复。', ['so far so good'], ['hitherto', 'yet'], 'adverb', '不及物', '通用'],
  ], '', ['hitherto'], '短语整体不取成分作根，分级留空（规范 §6）；家族 hitherto 迄今，近义 hitherto 迄今、yet 尚（队列原样，fam 入第 10 参，syn 置唯一义项各恰好一次，短语条目）').phrase = true;

  W('soaked', 'adjective', '/səʊkt/', 'B2', [], '湿透的；浸透的', 'Soaked through with liquid, and not dry any more.', [
    ['湿透的；浸透的', 'Covered with liquid or rain until nothing stays dry.', '被液体或雨水浇遍，没有一处还是干的。', '表语为主，常与 through 连用；soak 的过去分词作形容词。', 'We got soaked waiting for the bus.', '等公交车时我们被淋得湿透。', ['soaked to the skin', 'get soaked through'], ['wet'], 'adjective', '表语', '通用'],
  ], '',['soak'], 'brief 根提示 ←soak B2 浸湿 + -ed（分词作形容词，-ed 在 §5.4 清单），B2 继承；近义 wet 湿的（队列原样，置唯一义项）');

  W('sociable', 'adjective', '/ˈsəʊʃəbl/', '', ['CET4'], '好交际的；合群的', 'Enjoying company and being easy to talk to.', [
    ['好交际的；合群的', 'Friendly and happy to spend time with other people.', '友好且乐意与他人相处。', '定语表语两用，常与 be、a bit 连用。', 'She is sociable and makes friends quickly wherever she goes.', '她喜欢交际，走到哪里都能很快交到朋友。', ['a sociable person', 'sociable atmosphere'], ['outgoing'], 'adjective', '定语/表语', '性格'],
    ['（场所或活动）便于交际的', 'Making it easy for people to talk to each other and spend time together.', '让人们容易互相交谈、共处的。', '多作定语，形容房间、场合或气氛。', 'The kitchen is the most sociable room in the house.', '厨房是这所房子里最便于大家聚谈的房间。', ['a sociable gathering'], [], 'adjective', '定语', '社交'],
  ], '', ['outgoing'], 'brief ←?，自扫根：根词 social 经纯文本自扫确认不在库（cet 目录与 curated.js、adapt.js 均无该词），-able 虽在 §5.4 清单但无在库根可继，留空（判断项）；家族/近义 outgoing 好交际的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('social science', 'noun', '/ˈsəʊʃl ˈsaɪəns/', '', [], '社会科学', 'The study of human society and how people live together.', [
    ['社会科学（学科总称）', 'Academic subjects that examine society, human behaviour and institutions, such as economics and politics.', '研究社会、人类行为与各种制度的学科，如经济学和政治学。', '可数或不可数；短语作主语时谓语视用法而定。', 'She switched from physics to social science in her second year.', '她第二年从物理转到了社会科学专业。', ['study social science', 'a social science degree'], ['sociology'], 'noun', 'countable', '教育'],
  ], '', ['sociology'], '短语整体不取成分作根，分级留空（规范 §6）；家族 sociology 社会学，近义 sociology 社会学（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次，短语条目）').phrase = true;

  W('socialize', 'verb', '/ˈsəʊʃəlaɪz/', '', [], '交际；与人交往', 'Joining in the social life of a group, or meeting people in a friendly way.', [
    ['与人交际；来往', 'To spend time with other people in a relaxed and friendly way, for example at a party.', '以轻松友好的方式与他人相处，例如在聚会中。', '不及物动词，常与 with 连用。', 'Guests chatted in the garden before dinner began.', '客人们在晚宴开始前在花园里交谈。', ['socialize with others'], ['mingle'], 'verb', '不及物', '社交'],
    ['建立人脉；拓展交际', 'To meet and talk to people who may be useful for your career or business.', '结识并交谈那些可能对事业或生意有帮助的人。', '不及物动词，多用于职业语境。', 'He spoke to several people at the conference about future projects.', '他在会上与几位同行谈了未来的项目。', ['attend industry events'], ['network'], 'verb', '不及物', '职业'],
    ['与人熟悉；打成一片', 'To spend time with a group of people and take part in their activities.', '与一群人共处并参加他们的活动。', '不及物动词，也用于指让儿童学会与人相处。', 'The course helps new students get to know each other.', '这门课帮助新生互相认识。', ['socialize at work'], ['mix'], 'verb', '不及物', '教育'],
  ], 'socializes~socialized~socialized~socializing', ['social', 'socialization'], '由 social 加 -ize 构成；名词 socialization 已在库收录。近义 mingle 聚集交谈、mix 与人相处、network 建立人脉。');

  W('soft drink', 'noun', '/ˌsɒft ˈdrɪŋk/', '', [], '软饮料；无酒精饮料', 'A cold drink that contains no alcohol.', [
    ['软饮料；汽水', 'A cold sweet or fizzy drink that is served without alcohol in it.', '冰凉的含糖或带汽、端上来时不加酒精的饮料。', '可数，常用复数指多瓶饮料。', 'Order two soft drinks and a bottle of water.', '点两杯软饮料和一瓶水。', ['a can of soft drink'], ['soda'], 'noun', 'countable', '饮食'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 soda 汽水（队列原样，置唯一义项，短语条目）').phrase = true;

  W('softcover', 'noun/adjective', '/ˈsɒftkʌvə/', 'A1', [], '平装书；软封面的', 'A book with a flexible paper cover, or having such a cover.', [
    ['平装书；软封面书', 'A book whose cover is made of thin flexible card rather than stiff board.', '封面用薄而有弹性的硬纸板做成、而非厚纸板的书。', '可数；与精装书相对。', 'The novel was reissued in a softcover edition.', '这本小说以平装版重新发行。', ['a softcover edition'], ['paperback'], 'noun', 'countable', '出版'],
    ['平装的；软封面的', 'Having a cover made of thin flexible card, used of a book.', '（书）封面是薄而有弹性的软纸板的。', '多作定语。', 'I bought the softcover copy to save money.', '为了省钱我买了平装本。', ['a softcover copy'], [], 'adjective', '定语', '出版'],
  ], 'softcovers', ['paperback'], 'brief ←?，自扫根：复合词 soft+cover 取首成分（规范 §5.3，run-up←run 先例）soft A1（author_s7.js 第 4 参），A1 继承；家族/近义 paperback 平装书（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('soften', 'verb', '/ˈsɒftən/', 'A1', ['CET4'], '使变软；使缓和；使柔和', 'To make something softer, gentler or less strong.', [
    ['使变软；使柔软', 'To make something become softer and less hard to touch.', '让某物变得不那么硬、手感更软。', '及物动词，宾语是材料或物体。', 'Warm water will soften the dried paint.', '温水会把干掉的油漆泡软。', ['soften the butter'], [], 'verb', '及物', '家居'],
    ['缓和；减轻', 'To make something less harsh or less severe, so that its effect is smaller.', '让某事不那么严厉或严重，使影响变小。', '及物动词，宾语是冲击、光线、规则等。', 'Softening the light made the room calmer.', '把光线调柔和后，房间显得安静了许多。', ['soften the impact', 'soften the rules'], ['cushion', 'temper'], 'verb', '及物', '通用'],
    ['使语气变得柔和', 'To make a voice or a way of speaking gentler and quieter.', '让声音或说话方式更温和、更轻。', '及物动词，宾语是声音、态度。', 'She softened her manner when he began to cry.', '他哭起来时，她的态度放软了。', ['soften your voice'], ['tone'], 'verb', '及物', '情感'],
    ['变软；融化', 'To become soft or liquid because of warmth, or to lose firmness over time.', '因受热而变软成液体，或随着时间失去硬度。', '不及物动词，主语是黄油、蜡等。', 'The butter will soften if you leave it on the table.', '把黄油放在桌上就会变软。', ['soften in the heat'], ['melt'], 'verb', '不及物', '饮食'],
  ], 'softens~softened~softened~softening',['soft'], 'brief ←?，自扫根 soft A1（author_s7.js 第 4 参）——soft + -en（-en 在 §5.4 清单，使动后缀），A1 继承；近义 cushion 缓冲、temper 缓和、tone 放软语气、melt 融化（队列原样，置四个义项各恰好一次）');

  W('softie', 'noun', '/ˈsɒfti/', '', [], '心肠软的人', 'A person who cannot bear to be strict or harsh.', [
    ['心肠软的人；软弱的人', 'A person who feels sorry for others easily and finds it hard to say no.', '容易同情别人、很难开口拒绝的人。', '可数，非正式用语，常带亲昵或戏谑口气。', 'Do not be such a softie when the children ask for sweets.', '孩子们要糖果时你别这么心软。', ['a big softie'], ['lamb'], 'noun', 'countable', '性格'],
  ], 'softies', [], 'brief ←?，自扫根 soft A1（author_s7.js 第 4 参）在库，但 -ie 不在 §5.4 可继后缀清单，按 §5.7 留空（判断项）；近义 lamb 温顺心软的人（队列原样，置唯一义项）');

  W('softly', 'adverb', '/ˈsɒftli/', 'A1', [], '轻轻地；柔和地', 'With little noise or force, in a gentle manner.', [
    ['轻轻地；柔和地', 'In a quiet and gentle way, so that hardly any sound is made.', '以安静温柔的方式，几乎不发出声音。', '修饰动词，说明动作的轻重，也可修饰整个分句。', 'She closed the door softly so the baby stayed asleep.', '她轻轻关上门，好让宝宝继续睡。', ['speak softly', 'softly spoken'], [], 'adverb', '不及物', '通用'],
    ['（音乐）轻柔地', 'Played or sung at a low volume, as marked in a musical score.', '按乐谱上的标记，用低音量演奏或演唱。', '修饰动词，常见于乐谱与演奏说明。', 'The strings entered softly after the opening bars.', '前几个小节之后，弦乐轻柔地进入。', ['play softly'], ['piano'], 'adverb', '不及物', '艺术'],
  ], '',['soft'], 'brief 根提示 ←soft A1 柔和的 + -ly（-ly 在 §5.4 清单），A1 继承；近义 piano （音乐）轻柔地（队列原样，置义项 2 恰好一次）');

  W('soldiers', 'noun', '/ˈsəʊldʒəz/', 'A2', [], '士兵；军人（复数）', 'Members of an army who serve in the ranks.', [
    ['士兵；军人（复数）', 'People who serve in an army, below the rank of officer.', '在陆军中服役、军衔低于军官的人。', 'soldier 的复数形式单列词条；作主语时谓语用复数。', 'The soldiers returned to base before dark.', '士兵们天黑前回到了基地。', ['army soldiers', 'soldiers on duty'], ['troop'], 'noun', 'countable', '军事'],
  ], '', ['troop'], 'brief 根提示 ←soldier A2 士兵 + -s（复数形式单列词条，forms 留空），A2 继承（判断项：-s 不在 §5.4 明示清单，按库内 sales←sale A2、slacks←slack C1 先例）；家族/近义 troop 部队、一队士兵（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('solemnity', 'noun', '/səˈlemnəti/', 'C1', ['CET4'], '庄严；肃穆', 'Serious formal behaviour that makes people feel respect.', [
    ['庄严；肃穆', 'A serious and formal manner or atmosphere that shows deep respect.', '表现出深深敬意的严肃、正式的态度或气氛。', '不可数，常与 of 连用。', 'The solemnity of the ceremony impressed everyone present.', '仪式的庄严给在场的每个人留下了深刻印象。', ['the solemnity of the occasion'], ['gravity'], 'noun', 'uncountable', '文化'],
  ], '',['solemn'], 'brief 根提示 ←solemn C1 庄严的 + -ity（名词后缀，按库内 simplicity←simple A1 先例），C1 继承（判断项：-ity 不在 §5.4 明示清单）；抽象不可数故 forms 留空；近义 gravity 严肃、庄重（队列原样，置唯一义项）');

  W('solicitor', 'noun', '/səˈlɪsɪtə/', 'C1', ['CET6'], '事务律师；诉状律师', 'A legal practitioner who gives advice and prepares documents for clients.', [
    ['（英国的）事务律师；初级律师', 'A person whose job is to give legal advice and prepare legal papers for people and companies.', '为个人和公司提供法律意见、准备法律文书的人。', '可数；在英格兰与出庭律师分工不同。', 'She consulted a solicitor before signing the contract.', '她在签合同前咨询了一位事务律师。', ['see a solicitor', 'a firm of solicitors'], ['attorney', 'lawyer'], 'noun', 'countable', '职业'],
  ], 'solicitors', ['lawyer'], 'brief ←?，自扫根 solicit C1 招揽（author_s7.js 第 4 参）——solicit 招揽委托 + -or（-or 在 §5.4 清单，表人），语义由「招揽客户」引申为「（揽案的）事务律师」，C1 继承（判断项：语义为引申直连）；家族 lawyer 律师，近义 attorney 律师、lawyer 律师（队列原样，fam 入第 10 参，syn 置首义项各恰好一次）');

  W('solidify', 'verb', '/səˈlɪdɪfaɪ/', 'B1', ['CET4'], '凝固；巩固', 'To become hard or firm, or to make something stronger.', [
    ['（使）凝固；固化', 'To become hard and solid, especially after being heated and then cooled.', '（受热后再冷却）变硬成固体。', '不及物动词，主语是蜡、金属、血等。', 'The wax solidified into a hard block.', '蜡凝固成了一块硬块。', ['solidify into'], ['freeze'], 'verb', '不及物', '科学'],
    ['（使）巩固；加强', 'To make a plan, an idea or a position stronger and more definite.', '使计划、想法或立场更稳固、更明确。', '及物动词，宾语是计划、协议、关系等。', 'The meeting helped solidify their agreement.', '这次会谈有助于敲定他们的协议。', ['solidify a plan'], ['firm'], 'verb', '及物', '商务'],
  ], 'solidifies~solidified~solidified~solidifying', ['freeze'], 'brief ←?，自扫根 solid B1 固体的（author_s7.js 第 4 参）——solid + -ify（-ify 按库内 falsify←false A2、purify←pure B1 先例作透明后缀），B1 继承（判断项：-ify 不在 §5.4 明示清单）；家族 freeze 凝固，近义 freeze 凝固、firm 变牢（队列原样，fam 入第 10 参，syn 分置义项 1、2 各恰好一次）');

  W('solution', 'noun', '/səˈluːʃn/', 'A2', ['CET4'], '解决办法；答案；溶液', 'A way of solving a problem, a correct response, or a liquid mixture.', [
    ['解决办法；对策', 'A way of dealing with a problem so that it no longer causes trouble.', '处理问题、使其不再造成困扰的办法。', '可数，常与 to 连用。', 'They found a simple solution to the storage problem.', '他们找到了解决存放问题的简单办法。', ['find a solution', 'a lasting solution'], ['key', 'remedy'], 'noun', 'countable', '通用'],
    ['答案；解法', 'A correct response to a question, a puzzle or a test.', '对问题、谜题或测验的正确回应。', '可数，常与 to 连用。', 'She checked every solution before handing in the paper.', '交卷前她把每道题的解法都检查了一遍。', ['check the solutions'], ['answer'], 'noun', 'countable', '教育'],
    ['溶液', 'A liquid in which a solid substance has been dissolved, or the mixture formed this way.', '固体物质溶解在液体中形成的混合物。', '可数，化学用语，常与 of 连用。', 'Add the salt and stir until it forms a solution.', '加入食盐并搅拌，直到形成溶液。', ['a salt solution', 'in solution'], [], 'noun', 'countable', '科学'],
  ], 'solutions', ['solve'], 'brief ←?，自扫根 solve A2 解决（author_s3.js 第 4 参）——solve 去 e + -tion（规范 §5.5 e→∅+ion 正字类），A2 继承（判断项：词干 v→u 变化，按 §7 satisfy→satisfaction 类推）；家族 solve 解决（仅入第 10 参），近义 key 关键办法、remedy 补救办法、answer 答案（队列原样，分置义项 1、1、2 各恰好一次）');

  W('someplace', 'adverb', '/ˈsʌmpleɪs/', 'A1', [], '某处；某个地方', 'In, to or at a place that is not named.', [
    ['某处；某个地方', 'At a place that is neither known nor named.', '在一个既不知名也未说出的地方。', '修饰动词，多用于口语，语气较随便。', 'We need to find someplace quiet to talk.', '我们得找个安静的地方谈谈。', ['someplace else'], ['somewhere'], 'adverb', '不及物', '通用'],
  ], '', ['somewhere'], 'brief ←?，自扫根：复合词 some+place 取首成分（规范 §5.3）some A1（author_s3.js 第 4 参），A1 继承（判断项：首成分为限定词，语义直连「某处」）；家族/近义 somewhere 某处（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('solo piece', 'noun', '/ˌsəʊləʊ ˈpiːs/', '', [], '独奏曲；独唱曲', 'A piece of music performed by one player alone.', [
    ['独奏曲；独唱曲', 'A work of music performed or sung by a single performer without accompaniment.', '由一位演奏者或演唱者在无伴奏情况下演出的音乐作品。', '可数；常见于古典音乐与器乐考级语境。', 'She was chosen to perform a single work in the first half.', '她被选中在上半场表演一首独奏曲。', ['a short piece', 'for the violin'], ['solo'], 'noun', 'countable', '艺术'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 solo 独奏的、单独演出的（队列原样，置唯一义项，短语条目）').phrase = true;
})(typeof window !== 'undefined' ? window : globalThis);
