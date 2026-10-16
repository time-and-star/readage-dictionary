/* data/words/cet/author_t1.js — T 字母词条文件（含两个批次）
 * · 遗留批（2026-09-23 写入）：缺口 table ~ tilt，共 147 条单词，已在 index.html 注册；
 *   本批未改动其任何条目（只在文件头补注说明，并在文件末尾追加新批次）。
 * · 本批（T 批次 1，%TEMP%\opencode\_task_t1.txt）：缺口 tab ~ tamper，
 *   共 31 条 = 14 单词 + 17 短语（take action、take advantage of、take after、take apart、
 *   take away、take back、take in、take off、take on、take out、take over、take part、
 *   take place、take turns、take up、talk into、talk over），按队列顺序追加于文件末尾。
 * 【与任务书的差异 · 须主 agent 裁定】任务书写「新建 assets/js/data/words/cet/author_t1.js」，
 *   但该路径已被遗留批 147 条占用（index.html 第 262 行已加载）。直接覆盖会删除 table、take、
 *   talk、think、the 等 147 条在库词条，故改为同文件追加：不删改、不移动任何遗留条目，
 *   本批 31 条整段独立成块，若需独立 31 条文件可原样抽出另存（check_phrase 将报 178 条 =
 *   147 遗留 + 31 本批，phrase 标记 17 个与 [PH] 数一致）。
 * CET 标签照抄队列：CET4 × 1（talented）、CET6 × 1（tactful），其余 29 条 []。
 * brief：%TEMP%\opencode\_t1_brief.txt 共 14 行，对应本批 14 个单词（17 短语不入 brief）；
 *   5 行给根（tactic C1、tailor B2、talent B1、talk A1、tall A1），9 行显示 ←?。
 *   ←? 一律按规范 §5.2 纯文本自扫（fs.readFileSync + 按 W( 词头定位第 4 参，
 *   扫 assets/js/data/words/*.js，未 require 全库）：命中 tact C1、table A1（均本文件遗留批
 *   第 4 参）；root tactful/tactics/tailored/talent/talk/tall 六个 brief 根复核同级；
 *   tamp、talisman、talon、taint 等候选根自扫不在库。
 * 扫根结论：
 * · 继承 8 单词：
 *   tactful←tact C1 + -ful（-ful 在 §5.4 清单，语义直连）；
 *   tactics←tactic C1 + -s（复数形式单列词条，判断项：按库内 sales←sale A2、
 *     systems←system A2 先例）；
 *   tailored←tailor B2 + -ed（分词转形容词，同库内 supplied←supply B1 先例）；
 *   talented←talent B1 + -ed（-ed 在 §5.4 清单，同 supplied 先例）；
 *   talks←talk A1 + -s（复数形式单列词条，判断项：同 systems、sales 先例）；
 *   tallness←tall A1 + -ness（-ness 在 §5.4 清单）；
 *   tableland←table A1（复合词取首成分 §5.3，判断项：台地即顶面平坦如桌面的高地）；
 *   takeover←take A1（复合词取首成分 §5.3，判断项：take over 接管的名词化）；
 * · 留空 6 单词：tab（库内无语义直连根，-b 不在 §5.4 清单）、
 *   tabloid（首成分 tab 本批留空无级可继，-loid 不在清单）、
 *   taint（与 paint、stain 形近但词首不共享、语义不直连，切词假象 §5.7）、
 *   talisman（尾部 man 虽在库但义非「人」，切词假象 §5.7）、
 *   talon（库内无根，-lon/-on 不在清单）、
 *   tamper（根 tamp 自扫不在库，-er 无在库根可继）；
 * · 短语 17 条一律 ''（规范 §6，短语整体不取成分作根）。
 * CEFR 分布（14 单词）：A1 × 4（tableland、takeover、talks、tallness）、B1 × 1（talented）、
 *   B2 × 1（tailored）、C1 × 2（tactful、tactics）、留空 × 6；17 短语一律 ''。
 *   合计 8 条继承、6 条单词留空、17 条短语留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 * ===== 本批 31 条（tab ~ tamper）追加于文件末尾，见文末分隔注释 =====
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_t1.js 必须在 _cet_helper.js 之后加载');

  W('table', 'noun/verb', '/ˈteɪbl/', 'A1', ['CET4'], '桌子；表格；搁置', 'A flat-topped piece of furniture; a grid of facts; to set aside a proposal.', [
    ['桌子；台面', 'A piece of furniture with a flat top used for meals or work.', '用来吃饭或工作的、带平整顶面的家具。', '可加定语说明用途，如餐桌、书桌。', 'We eat at the kitchen table.', '我们在厨房的桌子上吃饭。', ['a kitchen table', 'set the table'], ['desk', 'counter'], 'noun', 'countable', '通用'],
    ['表格；一览表', 'Facts arranged in rows and columns.', '按行和列排好的资料。', '教材、报告里用来对照数据。', 'The table lists sales from last year.', '这张表列出了去年的销售额。', ['a data table', 'see the table'], ['chart', 'grid'], 'noun', 'countable', '通用'],
    ['搁置；提交讨论', 'To leave a proposal for later, or to put it forward for discussion.', '把一项提议先放下，或把它提交讨论。', '美式多指搁置，英式也可指提交会议讨论。', 'They tabled the plan until June.', '他们把这项计划搁置到六月。', ['table a motion', 'table a bill'], ['postpone', 'submit'], 'verb', '及物', '正式']
  ], 'tables~tabled~tabled~tabling', ['desk', 'chart'], 'on the table 既可指「摆到桌面上讨论」，也可指「被搁置」，要看美式还是英式语境'),

  W('tablet', 'noun', '/ˈtæblət/', 'A2', ['CET4'], '药片；平板电脑；碑；匾', 'A small solid piece of medicine, a flat computer, or a slab with writing.', [
    ['药片；片剂', 'A small hard piece of medicine that you swallow.', '吞服的一小块固体药物。', '常与 take 搭配。', 'Take one tablet after breakfast.', '早饭后服一片。', ['a sleeping tablet', 'take a tablet'], ['pill', 'capsule'], 'noun', 'countable', '医学'],
    ['平板电脑', 'A small flat computer that you control by touching the screen.', '靠触摸屏幕操作的小型平板计算机。', '比笔记本电脑更轻，适合阅读和看视频。', 'She reads news on a tablet.', '她在平板电脑上看新闻。', ['a tablet computer', 'a tablet screen'], ['pad', 'device'], 'noun', 'countable', '科技'],
    ['碑；匾；书写板', 'A flat piece of stone or clay with words cut or written on it.', '刻着或写着文字的扁平石片或泥板。', '历史和宗教语境里常见。', 'The names were cut on a stone tablet.', '这些名字刻在一块石碑上。', ['a stone tablet', 'a clay tablet'], ['slab', 'plaque'], 'noun', 'countable', '历史']
  ], 'tablets', ['pill', 'pad'], 'tablet 在日常口语里常指平板电脑；药品语境才是药片。不要和 table「桌子」混淆'),

  W('taboo', 'noun/adjective', '/təˈbuː/', 'C1', ['CET6'], '禁忌；忌讳的；禁止的', 'A custom that forbids something, or too offensive to mention or do.', [
    ['禁忌；忌讳', 'A strong social or religious rule against a word or an action.', '社会或宗教上强烈禁止某说法或某行为的规矩。', '打破禁忌常会引起反感。', 'Death is still a taboo in some families.', '在有些家庭里，死亡仍是禁忌。', ['a social taboo', 'break a taboo'], ['ban', 'prohibition'], 'noun', '可数/不可数', '社会'],
    ['忌讳的；禁止谈的', 'Forbidden by custom, or too shocking to discuss openly.', '因习俗而不能做，或不宜公开谈论。', '作定语修饰话题或词语。', 'The topic is taboo at work.', '这个话题在工作场合是忌讳的。', ['a taboo subject', 'taboo words'], ['forbidden', 'banned'], 'adjective', '定语/表语', '社会']
  ], 'taboos', ['ban', 'forbidden'], '复数 taboos。也可作动词表示「把……列为禁忌」，考试里以名词和形容词为主'),

  W('tack', 'noun/verb', '/tæk/', 'C1', ['CET6'], '平头钉；行动方针；粗缝；附加', 'A short nail; a course of action; to fasten with loose stitches or a nail.', [
    ['平头钉；大头钉', 'A short nail with a wide flat head.', '钉头宽而扁的短钉。', '用来把纸或布固定在面上。', 'He fixed the notice with a tack.', '他用一枚平头钉把通知固定好。', ['a carpet tack', 'a thumb tack'], ['nail', 'pin'], 'noun', 'countable', '生活'],
    ['方针；方法', 'The way you decide to deal with a problem.', '处理问题时所选定的做法。', 'change tack 表示改换做法。', 'We need a new tack on costs.', '我们需要换一种办法来控制成本。', ['change tack', 'try a different tack'], ['approach', 'course'], 'noun', 'countable', '通用'],
    ['用钉子固定；粗缝；附加', 'To fasten something with a tack or loose stitches, or to add it on.', '用钉子或疏缝固定，或把某物附加上去。', 'tack on 常指临时加上。', 'She tacked a note to the door.', '她把一张便条钉在门上。', ['tack sth on', 'tack a note'], ['attach'], 'verb', '及物', '通用']
  ], 'tacks~tacked~tacked~tacking', ['pin', 'approach'], '航海里 tack 还指抢风调向。thumb tack 是美式图钉，英式常说 drawing pin'),

  W('tackle', 'verb/noun', '/ˈtækl/', 'B2', ['CET4'], '处理；对付；阻截；用具', 'To deal with a hard problem, or to try to stop a player; the equipment used for a task.', [
    ['处理；应付（难题）', 'To make a serious effort to deal with a problem.', '认真着手处理一个难题。', '宾语常是问题、任务或工作。', 'The city must tackle air pollution.', '这座城市必须着手治理空气污染。', ['tackle a problem', 'tackle a task'], ['deal with', 'handle'], 'verb', '及物', '通用'],
    ['阻截；擒抱', 'To try to take the ball from a player by stopping that player.', '用拦截或抱住对方的方式抢球。', '足球、橄榄球用语。', 'He tackled the forward near the goal.', '他在球门附近铲倒了前锋。', ['tackle a player', 'a sliding tackle'], ['intercept', 'block'], 'verb', '及物', '体育'],
    ['用具；索具；阻截动作', 'The equipment for a job or sport, or an act of stopping a player.', '做某事或某项运动用的器具，或一次阻截。', 'fishing tackle 是钓鱼用具。', 'Fishing tackle filled the boat.', '船上堆满了钓鱼用具。', ['fishing tackle', 'a hard tackle'], ['gear', 'equipment'], 'noun', '可数/不可数', '通用']
  ], 'tackles~tackled~tackled~tackling', ['handle', 'gear'], 'tackle 作「处理」时比 deal with 更强调难题。不要和 tackle 的名词「用具」读音混淆，重音都在第一音节'),

  W('tact', 'noun', '/tækt/', 'C1', ['CET6'], '圆通；得体；老练', 'Skill in dealing with people so that you do not upset them.', [
    ['圆通；得体', 'The ability to say or do things without offending people.', '说话做事不得罪人的能力。', '不可数，强调社交分寸。', 'She handled the complaint with tact.', '她得体地处理了那起投诉。', ['with tact', 'show tact'], ['diplomacy', 'discretion'], 'noun', '不可数', '社交'],
    ['分寸感；体贴', 'Care for how another person feels in a difficult moment.', '在难相处的时刻顾及对方感受。', 'lack of tact 会让人觉得粗鲁。', 'A lack of tact made the meeting worse.', '缺乏分寸使会议更糟。', ['a lack of tact', 'tact and patience'], ['sensitivity', 'delicacy'], 'noun', '不可数', '社交']
  ], '', ['diplomacy', 'discretion'], '形容词 tactful 得体的，反义 tactless。tact 是技能，tactic 是具体策略，不要混用'),

  W('tactic', 'noun', '/ˈtæktɪk/', 'C1', ['CET6'], '战术；策略；手段', 'A planned method used to achieve a particular aim.', [
    ['战术；策略', 'A specific method chosen to reach an aim.', '为达到某一目的而选用的具体方法。', '复数 tactics 也可表示策略整体。', 'Delay was only a tactic.', '拖延只是一种策略。', ['a delaying tactic', 'campaign tactics'], ['strategy', 'move'], 'noun', 'countable', '通用'],
    ['手段；手法', 'A way of behaving chosen to get what you want from others.', '为从别人那里达到目的而采取的做法。', '可含贬义，指算计。', 'Tears can be a tactic with some people.', '对有些人来说，哭也可以是一种手段。', ['a pressure tactic', 'use a tactic'], ['ploy', 'manoeuvre'], 'noun', 'countable', '通用']
  ], 'tactics', ['strategy', 'move'], 'tactic 是单次手段，strategy 是总体战略。tactics 作学科或整体策略时动词可用单数或复数，考试里按复数名词处理更稳妥'),

  W('tag', 'noun/verb', '/tæɡ/', 'B1', ['CET4'], '标签；称呼；附加；捉人游戏', 'A small label; a name given to someone; to attach a label or follow along.', [
    ['标签；标牌', 'A small piece of paper, plastic, or metal fixed to something to give information.', '附在物品上、用来提供信息的小纸片、塑料片或金属片。', '价格和姓名常用标签标出。', 'The price is on the tag.', '价格在标签上。', ['a price tag', 'a name tag'], ['label', 'ticket'], 'noun', 'countable', '通用'],
    ['称呼；绰号', 'A word or phrase used to describe a person or group.', '用来描述某人或某群体的词。', '有时带刻板印象。', 'He hates the tag of expert.', '他讨厌「专家」这个称呼。', ['a name tag', 'the tag of'], ['nickname'], 'noun', 'countable', '通用'],
    ['贴标签；紧随；附加', 'To fasten a label to something, or to add a remark or go with someone.', '给某物贴上标签，或加上一句话、跟着某人走。', 'tag along 是口语「跟着去」。', 'They tagged each bag before shipping.', '发货前他们给每个袋子都贴了标签。', ['tag along', 'tag sth on'], ['attach'], 'verb', '及物/不及物', '通用']
  ], 'tags~tagged~tagged~tagging', ['label', 'attach'], '双写 g：tagged / tagging。网上 tag 还可指给内容加主题标记。question tag 是语法里的附加问句'),

  W('tail', 'noun/verb', '/teɪl/', 'A2', ['CET4'], '尾巴；尾部；跟踪；排在后面', 'The part that sticks out at the back of an animal; to follow someone secretly.', [
    ['尾巴', 'The long part at the rear of an animal.', '动物身体后方伸出的那一段。', '猫、狗、鸟等都可以有尾巴。', 'The dog wagged its tail.', '狗摇了摇尾巴。', ['wag a tail', 'a long tail'], ['rear', 'appendage'], 'noun', 'countable', '生物'],
    ['尾部；末尾', 'The back or last part of something long.', '细长物体的后部或末尾。', '可用于队伍、飞机或名单。', 'We stood at the tail of the queue.', '我们站在队伍的末尾。', ['the tail of a plane', 'the tail of a queue'], ['end'], 'noun', 'countable', '通用'],
    ['跟踪；盯梢', 'To follow a person secretly in order to watch them.', '偷偷跟着某人以便监视。', '多用于侦探或新闻语境。', 'Police tailed the car all night.', '警察整夜跟踪那辆车。', ['tail a suspect', 'be tailed by'], ['follow', 'shadow'], 'verb', '及物', '通用']
  ], 'tails~tailed~tailed~tailing', ['end', 'follow'], 'the tail end 末尾。with your tail between your legs 灰溜溜地。硬币的反面在口语里也可叫 tails'),

  W('tailor', 'noun/verb', '/ˈteɪlə(r)/', 'B2', ['CET4'], '裁缝；量身定做；使适合', 'A person who makes clothes to fit; to adapt something for a particular need.', [
    ['裁缝', 'A person whose job is to make or alter clothes so that they fit.', '以缝制或修改合身衣服为业的人。', '传统上多指做男装的裁缝。', 'He asked a tailor to shorten the coat.', '他请裁缝把外套改短。', ['a tailor shop', 'go to the tailor'], ['dressmaker', 'outfitter'], 'noun', 'countable', '职业'],
    ['专门制作；使适应', 'To make or change something so that it suits a person or purpose.', '把某物做成或改成适合某人或某目的的样子。', 'tailor to 后接需求或对象。', 'The course is tailored to beginners.', '这门课是为初学者设计的。', ['tailor sth to', 'a tailored suit'], ['adapt', 'customize'], 'verb', '及物', '通用']
  ], 'tailors~tailored~tailored~tailoring', ['adapt', 'dressmaker'], 'tailored 可形容衣服合身，也可形容方案有针对性。tailor-made 是「量身定做的」'),

  W('take', 'verb', '/teɪk/', 'A1', ['CET4'], '拿；带；接受；花费；乘坐；认为', 'To carry, accept, need, travel by, or understand something.', [
    ['拿；取；携带', 'To move something or someone to another place with you.', '把某物或某人带到另一个地方。', '方向用 to 或 home 等表示。', 'Take this bag to the office.', '把这个包拿到办公室去。', ['take sth to', 'take sb home'], ['bring', 'carry'], 'verb', '及物', '通用'],
    ['接受；收到', 'To accept something that is offered or available.', '接受别人提供的或现成的东西。', '可用于建议、工作或礼物。', 'She took the job in May.', '她五月接受了那份工作。', ['take an offer', 'take advice'], ['accept', 'receive'], 'verb', '及物', '通用'],
    ['花费（时间或精力）', 'To need a stated amount of time, money, or effort.', '需要一定的时间、金钱或力气。', '常用 it takes ... to 结构。', 'It takes an hour to get there.', '到那里要花一个小时。', ['it takes time', 'take effort'], ['need', 'require'], 'verb', '及物', '通用'],
    ['乘坐；选取（路线）', 'To travel by a vehicle or along a route.', '乘某种交通工具或走某条路。', '宾语是车、船或道路。', 'We took the bus to school.', '我们乘公共汽车去上学。', ['take a bus', 'take a train'], ['ride', 'catch'], 'verb', '及物', '交通'],
    ['认为；理解；看待', 'To understand words or a situation in a particular way.', '以某种方式理解话语或局面。', 'take sth as 表示把某事看成。', 'I take that remark as a joke.', '我把那句话当成玩笑。', ['take sth as', 'take it that'], ['understand', 'regard'], 'verb', '及物', '通用']
  ], 'takes~took~taken~taking', ['bring', 'accept'], '过去式 took，过去分词 taken。take 与 bring 方向相反：take 带走，bring 带来。have taken 表示已完成'),

  W('takeoff', 'noun', '/ˈteɪkɒf/', 'B1', ['CET4'], '起飞；起跳；突然开始；模仿', 'The moment a plane leaves the ground, or a sudden start.', [
    ['起飞', 'The act of a plane leaving the ground and starting to fly.', '飞机离开地面开始飞行的动作。', '与 landing 相对。', 'The takeoff was delayed by fog.', '起飞因雾而延误。', ['takeoff and landing', 'a smooth takeoff'], ['departure', 'liftoff'], 'noun', '可数/不可数', '航空'],
    ['突然起步；迅速走红', 'A sudden successful start of a product, career, or economy.', '产品、事业或经济突然顺利起步。', '动词短语是 take off。', 'Sales saw a rapid takeoff.', '销售额迅速攀升。', ['a rapid takeoff', 'economic takeoff'], ['start', 'boom'], 'noun', 'countable', '经济'],
    ['滑稽模仿', 'A humorous copy of the way someone speaks or behaves.', '滑稽地模仿某人的说话或举止。', '也写作 take-off，后常接 of 或 on。', 'The show is a takeoff of a famous film.', '这个节目是对一部名电影的滑稽模仿。', ['a takeoff of', 'a takeoff on'], ['parody', 'imitation'], 'noun', 'countable', '娱乐']
  ], 'takeoffs', ['departure', 'parody'], '名词常连写成 takeoff，也作 take-off。动词要分开写 take off。大纲词形是 takeoff'),

  W('tale', 'noun', '/teɪl/', 'B1', ['CET4'], '故事；传说；叙述；谎言', 'A story, especially one that is invented or hard to believe.', [
    ['故事；传说', 'A spoken or written story, often about imaginary events.', '口头或书面讲述的故事，常含想象成分。', 'fairy tale 是童话。', 'She told a tale about a lost city.', '她讲了一个失落之城的故事。', ['a fairy tale', 'tell a tale'], ['story', 'narrative'], 'noun', 'countable', '文学'],
    ['不实叙述；谎话', 'An account that is exaggerated or not true.', '夸张或不真实的说法。', 'tell tales 有打小报告的意思。', 'His tale of the accident does not match the facts.', '他对事故的说法与事实不符。', ['tell tales', 'a tall tale'], ['lie', 'account'], 'noun', 'countable', '通用']
  ], 'tales', ['story', 'narrative'], '与 tail「尾巴」同音，拼写不同。a tall tale 是夸张的故事，tall 在这里不是「高」'),

  W('talent', 'noun', '/ˈtælənt/', 'B1', ['CET4'], '天赋；才能；人才', 'A natural skill, or people who have such skill.', [
    ['天赋；才能', 'A natural ability to do something well.', '生来就能把某事做得好的能力。', '可数指某种才能，也可不可数。', 'She has a talent for music.', '她有音乐天赋。', ['a talent for', 'natural talent'], ['gift', 'aptitude'], 'noun', '可数/不可数', '通用'],
    ['人才；有才干的人', 'People who have a special ability, viewed as a group or as individuals.', '具有特殊才能的人，可指群体或个人。', '公司语境里常说人才。', 'The firm is looking for new talent.', '这家公司正在寻找新人才。', ['young talent', 'talent show'], ['genius', 'skill'], 'noun', '可数/不可数', '通用']
  ], 'talents', ['gift', 'skill'], 'talented 有天赋的。talent 强调天生能力，skill 更强调练出来的技术'),

  W('talk', 'verb/noun', '/tɔːk/', 'A1', ['CET4'], '说话；谈话；演讲；谈判', 'To say things to someone; a conversation or a speech.', [
    ['说话；交谈', 'To use words with someone in order to share ideas.', '用语言和别人交流想法。', 'talk to 或 talk with 都常见。', 'We talked for an hour.', '我们谈了一个小时。', ['talk to sb', 'talk about'], ['speak', 'chat'], 'verb', '不及物', '通用'],
    ['谈论；商谈', 'To discuss a subject, often in order to reach a decision.', '讨论某个话题，常为了做出决定。', 'talk over 表示仔细商量。', 'They need to talk business tomorrow.', '他们明天需要谈生意。', ['talk business', 'talk sth over'], ['discuss', 'negotiate'], 'verb', '及物/不及物', '通用'],
    ['谈话；演讲；谈判', 'A conversation, a speech to a group, or formal discussions.', '一次交谈、对一群人的讲话，或正式商谈。', 'give a talk 是做一次讲话。', 'She gave a talk on climate.', '她做了一场关于气候的演讲。', ['give a talk', 'peace talks'], ['speech', 'conversation'], 'noun', '可数/不可数', '通用']
  ], 'talks~talked~talked~talking', ['speak', 'speech'], 'talk 侧重互相交谈，speak 侧重开口说话或正式发言。talks 复数常指谈判'),

  W('tall', 'adjective', '/tɔːl/', 'A1', ['CET4'], '高的；夸张的', 'Of greater than average height; hard to believe.', [
    ['高的', 'Having a greater height than average.', '高度超过一般水平。', '用于人、树、楼等，反义 short。', 'He is tall for his age.', '就他的年龄来说，他个子高。', ['a tall building', 'tall and thin'], ['high', 'lofty'], 'adjective', '定语/表语', '通用'],
    ['夸张的；难以相信的', 'So unlikely that people do not believe it.', '离谱到让人难以相信。', '主要见于 a tall tale 或 a tall story。', 'That sounds like a tall story.', '那听起来像是编出来的故事。', ['a tall tale', 'a tall story'], ['unlikely', 'exaggerated'], 'adjective', '定语', '口语']
  ], '', ['high', 'lofty'], '人用 tall，不说 high person。山和楼既可 tall 也可 high，山更常用 high。how tall 问身高'),

  W('tame', 'adjective/verb', '/teɪm/', 'B2', ['CET4'], '驯服的；平淡的；驯化；抑制', 'Not wild or not exciting; to train a wild animal or make something milder.', [
    ['驯服的；温顺的', 'Not wild, and used to living with people.', '不再野性，习惯与人相处。', '与 wild 相对。', 'The bird is tame enough to sit on a hand.', '这只鸟已经驯服，可以停在手上。', ['a tame animal', 'tame and gentle'], ['domesticated', 'docile'], 'adjective', '定语/表语', '通用'],
    ['平淡的；无趣的', 'Not exciting or not very strong.', '不够刺激，或力度不够。', '可形容故事、比赛或批评。', 'The ending of the film felt tame.', '电影的结尾让人觉得平淡。', ['a tame ending', 'tame criticism'], ['dull', 'bland'], 'adjective', '定语/表语', '通用'],
    ['驯化；使易控制；减弱', 'To train a wild animal, or to make something less strong or dangerous.', '训练野生动物，或使某事物不那么强烈或危险。', '也可用于控制局面。', 'They tamed the river with a dam.', '他们用大坝制服了这条河。', ['tame an animal', 'tame inflation'], ['train', 'subdue'], 'verb', '及物', '通用']
  ], 'tames~tamed~tamed~taming', ['docile', 'train'], 'tame 形容人时有「没脾气、好摆布」的意味，不一定是夸奖。名词 tameness'),

  W('tan', 'noun/verb/adjective', '/tæn/', 'B2', ['CET6'], '棕褐色；晒黑；鞣革；棕黄的', 'A light brown colour from the sun; to become brown, or to treat animal skin.', [
    ['晒黑的肤色；棕褐色', 'A brown colour of skin after time in the sun, or that colour itself.', '晒过后的棕色皮肤，或这种棕褐色。', 'get a tan 表示晒黑。', 'She came back with a deep tan.', '她回来时皮肤晒得黝黑。', ['get a tan', 'a light tan'], ['bronze', 'brown'], 'noun', '可数/不可数', '生活'],
    ['晒黑；鞣（皮）', 'To become brown in the sun, or to turn animal skin into leather.', '在阳光下变棕，或把兽皮制成革。', '鞣革是工业义。', 'He tans easily in summer.', '他夏天很容易晒黑。', ['tan leather', 'tan in the sun'], [], 'verb', '及物/不及物', '通用'],
    ['棕黄色的', 'Of a light yellowish brown colour.', '呈浅黄棕色的。', '可形容鞋、外套等。', 'He wore tan shoes.', '他穿了一双棕黄色的鞋。', ['tan shoes', 'a tan coat'], ['beige'], 'adjective', '定语', '色彩']
  ], 'tans~tanned~tanned~tanning', ['brown', 'bronze'], '过去式双写 n：tanned。suntan 晒黑。tan 作「鞣皮」时是专业义，考试更常考晒黑'),

  W('tangible', 'adjective', '/ˈtændʒəbl/', 'C1', ['CET4'], '有形的；实际的；可触摸的', 'Able to be touched, or clear and real enough to notice.', [
    ['可触摸的；有形的', 'Able to be touched and seen as a physical thing.', '可以摸到、作为实物存在。', '与抽象概念相对。', 'A coin is tangible, but hope is not.', '硬币是有形的，希望则不是。', ['tangible assets', 'tangible property'], ['physical', 'concrete'], 'adjective', '定语/表语', '通用'],
    ['实际的；明确的', 'Clear and definite, so that people can see the result.', '清楚明确，让人看得见结果。', '常修饰进步、好处、证据。', 'We need tangible progress this month.', '这个月我们需要看得见的进展。', ['tangible benefits', 'tangible results'], ['real', 'definite'], 'adjective', '定语', '书面']
  ], '', ['concrete', 'real'], '反义 intangible。副词 tangibly。商业里 tangible assets 指有形资产，如设备和存货'),

  W('tangle', 'noun/verb', '/ˈtæŋɡl/', 'C1', ['CET6'], '缠结；纠纷；使缠住；使混乱', 'A twisted mass or a confused situation; to twist together or become confused.', [
    ['缠结；乱团', 'A mass of threads, hair, or lines twisted together.', '线、头发或绳子绞在一起的一团。', '难以理开。', 'There is a tangle in the cable.', '电缆缠成了一团。', ['a tangle of wires', 'hair tangles'], ['knot', 'snarl'], 'noun', 'countable', '通用'],
    ['纠纷；混乱局面', 'A confused situation that is hard to sort out.', '难以理清的混乱局面。', '可用于法律或人际关系。', 'The contract left them in a legal tangle.', '这份合同让他们陷入法律纠纷。', ['a legal tangle', 'in a tangle'], ['mess', 'muddle'], 'noun', 'countable', '通用'],
    ['使缠结；使卷入', 'To twist things together, or to involve someone in a difficult matter.', '把东西绞在一起，或把某人卷进麻烦。', 'tangle with 表示与某人发生争执。', 'Do not tangle with the new rules alone.', '不要独自去硬碰那些新规定。', ['tangle with', 'get tangled'], ['entangle'], 'verb', '及物/不及物', '通用']
  ], 'tangles~tangled~tangled~tangling', ['knot', 'mess'], 'tangled 缠结的、复杂的。entangle 更强调使人陷入而难以脱身'),

  W('tank', 'noun/verb', '/tæŋk/', 'B1', ['CET4'], '箱；罐；坦克；大跌', 'A large container for liquid, an armoured vehicle, or a sudden failure.', [
    ['箱；罐；槽', 'A large container for holding liquid or gas.', '用来装液体或气体的大容器。', '水、油、燃料都常用。', 'The water tank is almost empty.', '水箱快空了。', ['a water tank', 'a fuel tank'], ['container', 'cistern'], 'noun', 'countable', '通用'],
    ['坦克；战车', 'A heavy military vehicle with guns and tracks.', '带有火炮和履带的重型军用车辆。', 'think tank 则是智库，不是坦克。', 'Tanks crossed the bridge at dawn.', '坦克在黎明时越过了桥。', ['a battle tank', 'think tank'], ['armour', 'vehicle'], 'noun', 'countable', '军事'],
    ['惨败；大跌', 'To fail suddenly or to drop sharply in value.', '突然失败，或价值急剧下跌。', '口语，多用于表现或股价。', 'The shares tanked after the news.', '消息传出后股价大跌。', ['tank in value', 'shares tank'], ['plunge', 'collapse'], 'verb', '不及物', '口语']
  ], 'tanks~tanked~tanked~tanking', ['container', 'plunge'], 'think tank 智囊团。tank 作动词「大跌」是非正式用法，写作文若用应点明是口语'),

  W('tanker', 'noun', '/ˈtæŋkə(r)/', 'B2', ['CET6'], '油轮；罐车；运油飞机', 'A ship, truck, or plane made to carry large amounts of liquid or gas.', [
    ['油轮；液货船', 'A ship with tanks for carrying oil or other liquid.', '设有货舱、用来运输石油或其他液体的船。', '海上溢油新闻里常见。', 'An oil tanker entered the port.', '一艘油轮驶入了港口。', ['an oil tanker', 'a tanker ship'], ['ship', 'vessel'], 'noun', 'countable', '交通'],
    ['罐车；加油飞机', 'A truck or aircraft that carries liquid such as fuel.', '运送燃料等液体的卡车或飞机。', '公路上的油罐车也叫 tanker。', 'A tanker delivered fuel to the station.', '一辆罐车给加油站送了燃料。', ['a fuel tanker', 'a tanker truck'], ['truck', 'lorry'], 'noun', 'countable', '交通']
  ], 'tankers', ['ship', 'truck'], 'tanker 是运输工具，tank 是容器或坦克。油轮船员不叫 tanker，而说 crew'),

  W('tap', 'verb/noun', '/tæp/', 'B1', ['CET4'], '轻敲；水龙头；开发；窃听', 'To hit lightly; a device for water; to use a source; to listen secretly.', [
    ['轻敲；轻拍', 'To hit something gently and quickly.', '轻轻而快地击打。', '可敲门、敲桌子或轻拍肩膀。', 'She tapped on the window.', '她轻轻敲了敲窗户。', ['tap on the door', 'tap sb on the shoulder'], ['knock', 'pat'], 'verb', '及物/不及物', '通用'],
    ['水龙头；旋塞', 'A device that controls the flow of water or another liquid.', '控制水或其他液体流出的装置。', '英式常用 tap，美式多用 faucet。', 'Turn the tap off, please.', '请把水龙头关掉。', ['turn on the tap', 'a cold tap'], ['faucet', 'valve'], 'noun', 'countable', '生活'],
    ['开发；利用；窃听', 'To make use of a supply, or to fit a device that listens to calls.', '利用某种资源，或安装装置窃听通话。', 'tap into 表示挖掘、利用。', 'The film taps into a fear of cities.', '这部电影利用了人们对城市的恐惧。', ['tap into', 'tap a phone'], ['exploit', 'bug'], 'verb', '及物', '通用']
  ], 'taps~tapped~tapped~tapping', ['knock', 'faucet'], '双写 p：tapped / tapping。on tap 可指啤酒随时可取，也可比喻随时可用。美式 faucet 对应英式 tap'),

  W('tape', 'noun/verb', '/teɪp/', 'A2', ['CET4'], '带子；胶带；磁带；用带子粘；录音', 'A narrow strip or a magnetic recording; to fasten or record with tape.', [
    ['带子；胶带', 'A long narrow strip of cloth, paper, or sticky material.', '细长的布条、纸条或带粘性的材料。', 'sticky tape 是胶带。', 'Fix the poster with tape.', '用胶带把海报固定好。', ['sticky tape', 'a strip of tape'], ['band', 'strip'], 'noun', '可数/不可数', '生活'],
    ['磁带；录像带', 'A magnetic strip used to record sound or pictures.', '用来录制声音或图像的磁性带子。', '现已少用，但仍见于考试。', 'He played an old tape of the concert.', '他播放了一盘音乐会的旧磁带。', ['a cassette tape', 'on tape'], ['recording', 'cassette'], 'noun', 'countable', '传媒'],
    ['用胶带粘；录下来', 'To fasten something with tape, or to record sound or video on tape.', '用胶带固定，或把声音、影像录下来。', 'tape up 可指包扎。', 'The nurse taped up the cut.', '护士用带子把伤口包好了。', ['tape a show', 'tape up a box'], ['record', 'bind'], 'verb', '及物', '通用']
  ], 'tapes~taped~taped~taping', ['strip', 'record'], 'red tape 繁文缛节，不是红色胶带。tape measure 卷尺。动词现在分词 taping 只有一个 p'),

  W('target', 'noun/verb', '/ˈtɑːɡɪt/', 'B1', ['CET4'], '目标；对象；靶；把……作为目标', 'An aim or a person you try to reach; to aim at someone or something.', [
    ['目标；指标', 'A result that you try to achieve.', '努力想要达到的结果。', '商业和学习里都常用。', 'Our target is a hundred new users.', '我们的目标是一百名新用户。', ['meet a target', 'a sales target'], ['goal', 'aim'], 'noun', 'countable', '通用'],
    ['对象；靶子', 'A person, place, or object that is attacked or chosen.', '被攻击或被选定的人、地方或物体。', 'on target 表示命中或按计划进行。', 'The old bridge was an easy target.', '那座旧桥是容易攻击的目标。', ['an easy target', 'on target'], ['mark', 'victim'], 'noun', 'countable', '通用'],
    ['以……为目标；针对', 'To choose a person or group as the aim of an action.', '把某人或某群体选定为行动对象。', 'target at 或 target on 都可见，考试多记 be targeted at。', 'The ads are targeted at students.', '这些广告针对的是学生。', ['be targeted at', 'target a group'], ['direct'], 'verb', '及物', '通用']
  ], 'targets~targeted~targeted~targeting', ['goal', 'aim'], '英式也可拼 targetted，考试以 targeted 为准。target 比 goal 更强调可衡量的指标'),

  W('tariff', 'noun', '/ˈtærɪf/', 'C1', ['CET6'], '关税；价目表；收费标准', 'A tax on imported goods, or a list of prices and charges.', [
    ['关税', 'A tax that a government charges on goods coming into a country.', '政府对进口货物征收的税。', '贸易新闻里的核心词。', 'A new tariff raised the price of steel.', '新关税抬高了钢铁价格。', ['import tariff', 'tariff barriers'], ['duty', 'tax'], 'noun', 'countable', '经济'],
    ['价目表；收费表', 'A list of fixed prices, especially for hotels, power, or phone services.', '固定价格的清单，尤指酒店、电力或电话收费。', '英式较常见。', 'The hotel tariff includes breakfast.', '酒店价目含早餐。', ['a hotel tariff', 'electricity tariffs'], ['price list', 'rate'], 'noun', 'countable', '商业']
  ], 'tariffs', ['duty', 'tax'], 'tariff 是税种或价目，tax 是更广的税。tariff war 关税战。不要和 terrific 混淆'),

  W('task', 'noun/verb', '/tɑːsk/', 'A2', ['CET4'], '任务；工作；派给……任务', 'A piece of work that must be done; to give someone that work.', [
    ['任务；工作', 'A piece of work that someone has to do.', '某人必须完成的一项工作。', '可大可小，强调待办。', 'My first task is to check the data.', '我的第一项任务是核对数据。', ['a difficult task', 'carry out a task'], ['job', 'duty'], 'noun', 'countable', '通用'],
    ['派给；指派', 'To give a person a particular piece of work.', '把某项具体工作交给某人。', 'task sb with 是常用结构。', 'She was tasked with writing the report.', '派给她的任务是写这份报告。', ['task sb with', 'be tasked with'], ['assign', 'charge'], 'verb', '及物', '书面']
  ], 'tasks~tasked~tasked~tasking', ['job', 'assign'], 'take sb to task 责备某人。task 比 job 更具体，常指一项一项的工作'),

  W('taste', 'noun/verb', '/teɪst/', 'A2', ['CET4'], '味道；味觉；品味；品尝；有……味道', 'The flavour of food, the sense that notices it, or a personal liking; to try food.', [
    ['味道；滋味', 'The flavour of something in the mouth.', '食物在嘴里的味道。', '可甜、咸、苦、酸。', 'The soup has a salty taste.', '这汤有咸味。', ['a sweet taste', 'a bitter taste'], ['flavour', 'savour'], 'noun', '可数/不可数', '生活'],
    ['味觉；鉴赏力；喜好', 'The sense that notices flavour, or a person liking for style and manners.', '感受味道的感官，或一个人对风格和举止的喜好。', 'taste in 后接喜好的方面。', 'She has good taste in clothes.', '她对衣服很有品位。', ['a sense of taste', 'taste in music'], ['preference', 'judgement'], 'noun', '可数/不可数', '通用'],
    ['品尝；尝起来', 'To try a little food or drink, or to have a particular flavour.', '试着吃一点或喝一点，或具有某种味道。', 'taste of 表示有某种味道。', 'This tea tastes of smoke.', '这茶有一股烟味。', ['taste of', 'taste the soup'], ['try', 'sample'], 'verb', '及物/不及物', '生活']
  ], 'tastes~tasted~tasted~tasting', ['flavour', 'try'], 'taste 作连系动词时后接形容词：taste good，不说 taste well。in bad taste 不得体'),

  W('tax', 'noun/verb', '/tæks/', 'A2', ['CET4'], '税；征税；使负重担', 'Money paid to the government; to charge that money or to put a heavy demand on someone.', [
    ['税；税款', 'Money that people and companies must pay to the government.', '个人和公司必须交给政府的钱。', 'income tax 所得税。', 'Income tax is due in April.', '所得税在四月缴纳。', ['income tax', 'pay tax'], ['duty', 'levy'], 'noun', '可数/不可数', '经济'],
    ['对……征税', 'To make a person or company pay tax.', '要求个人或公司缴税。', 'be taxed on 表示就某项收入征税。', 'The city taxes cars that enter the centre.', '这座城市对进入中心区的汽车征税。', ['tax income', 'be taxed on'], ['charge'], 'verb', '及物', '经济'],
    ['使承受重负；耗费', 'To put a heavy demand on strength, patience, or a system.', '对体力、耐心或某个系统造成很大负担。', 'tax sb patience 考验耐心，写作时避免所有格缩写，用 the patience of。', 'Long delays tax the patience of passengers.', '长时间延误消磨乘客的耐心。', ['tax the patience of', 'tax a system'], ['strain', 'burden'], 'verb', '及物', '书面']
  ], 'taxes~taxed~taxed~taxing', ['duty', 'strain'], 'taxing 费力的。taxpayer 纳税人。tax 作名词常不可数，指不同税种时用复数 taxes'),

  W('taxi', 'noun/verb', '/ˈtæksi/', 'A1', ['CET4'], '出租车；乘出租车；（飞机）滑行', 'A car you pay to ride in; to travel in one; of a plane, to move slowly on the ground.', [
    ['出租车；计程车', 'A car with a driver that you pay to take you somewhere.', '付钱雇司机把你送到某地的汽车。', '也叫 cab。', 'We took a taxi to the station.', '我们乘出租车去车站。', ['take a taxi', 'a taxi driver'], ['cab', 'minicab'], 'noun', 'countable', '交通'],
    ['乘出租车', 'To travel somewhere in a taxi.', '坐出租车去某地。', '口语里 taxi to 后接地点。', 'They taxied to the hotel.', '他们乘出租车去了酒店。', ['taxi to', 'taxi home'], ['ride'], 'verb', '不及物', '交通'],
    ['（飞机）滑行', 'Of a plane, to move slowly along the ground before or after flying.', '飞机在起飞前或降落后沿地面缓慢移动。', '航空专业义。', 'The plane taxied to the runway.', '飞机滑行到跑道上。', ['taxi to the runway', 'taxi out'], ['roll', 'move'], 'verb', '不及物', '航空']
  ], 'taxis~taxied~taxied~taxiing', ['cab', 'ride'], '现在分词 taxiing 或 taxying。英式也说 taxi rank，美式 taxi stand。by taxi 乘出租车'),

  W('tea', 'noun', '/tiː/', 'A1', ['CET4'], '茶；茶叶；茶点', 'A drink made from dried leaves, or a small afternoon meal in Britain.', [
    ['茶；茶叶', 'A hot drink made by pouring water onto dried leaves, or those leaves.', '用开水冲泡干叶制成的热饮，或那些干叶。', 'a cup of tea 一杯茶。', 'Would you like a cup of tea?', '你想喝杯茶吗？', ['a cup of tea', 'green tea'], ['brew', 'infusion'], 'noun', '不可数', '生活'],
    ['下午茶；傍晚便餐', 'A light meal eaten in the afternoon or early evening, especially in Britain.', '下午或傍晚吃的一顿便餐，尤指英国。', '不是正餐 dinner。', 'They invited us to tea on Sunday.', '他们邀请我们星期日去吃茶点。', ['afternoon tea', 'tea and cake'], ['snack', 'supper'], 'noun', '可数/不可数', '生活']
  ], 'teas', ['brew', 'snack'], 'tea 指饮料时不可数。teas 可指不同种类的茶，或几份茶点。not my cup of tea 不是我喜欢的类型'),

  W('teach', 'verb', '/tiːtʃ/', 'A1', ['CET4'], '教；讲授；教导', 'To help someone learn, or to show what experience has proved.', [
    ['教；讲授', 'To give lessons so that someone learns a subject or skill.', '通过授课让某人学会一门学科或技能。', 'teach sb sth 或 teach sth to sb。', 'She teaches English to children.', '她教儿童英语。', ['teach sb sth', 'teach a class'], ['instruct', 'educate'], 'verb', '及物', '教育'],
    ['教导；使明白', 'To show someone how to behave, often through experience.', '通过经历让某人明白该如何行事。', 'teach sb a lesson 可指给个教训。', 'The mistake taught him to check twice.', '这次错误让他学会了核对两遍。', ['teach sb to', 'teach sb a lesson'], ['show', 'train'], 'verb', '及物', '通用']
  ], 'teaches~taught~taught~teaching', ['instruct', 'educate'], '过去式和过去分词都是 taught。teacher 教师。teach 后接 how to 表示教方法'),

  W('team', 'noun/verb', '/tiːm/', 'A1', ['CET4'], '队；小组；协作', 'A group that works or plays together; to join with others.', [
    ['队；组；班组', 'A group of people who play or work together.', '一起比赛或一起工作的一群人。', '集体名词，英式动词可用复数。', 'Our team won the match.', '我们队赢了比赛。', ['a football team', 'team member'], ['group', 'side'], 'noun', 'countable', '通用'],
    ['协作；结成一队', 'To join another person or group in order to work together.', '与另一个人或群体合作。', 'team up with 是固定搭配。', 'The two labs teamed up on the study.', '两个实验室合作开展这项研究。', ['team up with', 'team with'], ['join', 'cooperate'], 'verb', '不及物', '通用']
  ], 'teams~teamed~teamed~teaming', ['group', 'cooperate'], 'team spirit 团队精神。teammate 队友。team 作主语时，强调整体用单数动词，强调成员用复数，英式更灵活'),

  W('tear', 'verb/noun', '/teə(r)/', 'B1', ['CET4'], '撕裂；眼泪；破口；飞奔', 'To pull something apart; a drop from the eye; a hole made by ripping.', [
    ['撕裂；撕开', 'To pull paper, cloth, or flesh so that it splits.', '把纸、布或皮肉扯开。', '不规则变化 tore, torn。', 'She tore the letter in half.', '她把信撕成两半。', ['tear sth up', 'tear in half'], ['rip', 'split'], 'verb', '及物', '通用'],
    ['破口；裂缝', 'A hole or split made by pulling something apart.', '扯开后留下的洞或裂口。', '与动词同音 /teə/。', 'There is a tear in the curtain.', '窗帘上有一道裂口。', ['a tear in', 'wear and tear'], ['hole'], 'noun', 'countable', '通用'],
    ['眼泪；泪水', 'A drop of salty liquid that comes from the eye when you cry.', '哭泣时从眼睛里流出的一滴咸液体。', '这个名词读 /tɪə(r)/，与撕裂不同音。', 'A tear ran down his face.', '一滴眼泪从他脸上滑落。', ['burst into tears', 'in tears'], ['drop', 'weeping'], 'noun', 'countable', '情感'],
    ['飞奔；猛冲', 'To move somewhere very fast.', '非常快地奔向某处。', 'tear along 或 tear off 是口语。', 'The children tore out of the room.', '孩子们飞奔出房间。', ['tear along', 'tear off'], ['rush', 'dash'], 'verb', '不及物', '口语']
  ], 'tears~tore~torn~tearing', ['rip', 'drop'], '撕裂读 /teə/，过去式 tore，过去分词 torn。眼泪读 /tɪə/，复数 tears。wear and tear 正常损耗'),

  W('tease', 'verb/noun', '/tiːz/', 'B2', ['CET6'], '取笑；逗弄；挑逗；爱开玩笑的人', 'To make fun of someone in a playful or annoying way.', [
    ['取笑；逗弄', 'To laugh at someone and make jokes about them.', '开玩笑地嘲笑某人。', '可以是善意，也可以让人不舒服。', 'Do not tease him about his name.', '不要拿他的名字开玩笑。', ['tease sb about', 'tease sb'], ['mock', 'kid'], 'verb', '及物', '通用'],
    ['挑逗；逗引', 'To excite interest or desire without satisfying it.', '引起兴趣或欲望却不让其得到满足。', '可用于人或广告。', 'The trailer teases the next film.', '预告片吊着观众对下一部电影的胃口。', ['tease out', 'a teasing smile'], ['tantalize', 'provoke'], 'verb', '及物', '通用'],
    ['爱逗弄的人；取笑', 'A person who likes teasing, or an act of teasing.', '喜欢逗弄别人的人，或一次取笑。', '作名词时口语色彩较浓。', 'He is a tease, but he means no harm.', '他爱开玩笑，但并无恶意。', ['a bit of a tease', 'gentle tease'], ['joker', 'mocker'], 'noun', 'countable', '口语']
  ], 'teases~teased~teased~teasing', ['mock', 'kid'], 'tease 比 mock 轻，不一定是恶意。tease out 还可表示「梳理出、套出」信息'),

  W('technical', 'adjective', '/ˈteknɪkl/', 'B1', ['CET4'], '技术的；专业的；技巧上的', 'Connected with the practical skills of a subject, or hard to understand without special knowledge.', [
    ['技术的；工艺的', 'Connected with machines, science, or practical methods of a subject.', '与机器、科学或某学科的实用方法有关。', 'technical support 技术支持。', 'The engine failed for a technical reason.', '引擎因技术原因出了故障。', ['technical support', 'a technical problem'], ['technological', 'mechanical'], 'adjective', '定语', '科技'],
    ['专业的；难懂的', 'Using words that only specialists fully understand.', '使用只有专业人士才完全明白的词语。', '对普通读者可能不友好。', 'The report is too technical for me.', '这份报告对我来说太专业了。', ['technical language', 'a technical term'], ['specialized', 'complex'], 'adjective', '定语/表语', '通用'],
    ['技巧上的；规程上的', 'Connected with a small detail of rules or skill rather than the main point.', '与规则或技巧的细节有关，而非主要实质。', '体育里可指技术犯规。', 'The goal was cancelled for a technical fault.', '这个进球因技术犯规被取消。', ['a technical fault', 'technical skill'], ['procedural', 'formal'], 'adjective', '定语', '通用']
  ], '', ['technological', 'specialized'], 'technically 严格说来、在技术上。technical 强调方法与细节，technological 强调科技本身'),

  W('technique', 'noun', '/tekˈniːk/', 'B1', ['CET4'], '技巧；技术；手法', 'A particular way of doing something that needs skill.', [
    ['技巧；手法', 'A skilled way of carrying out a task, especially in art or sport.', '完成某项任务的熟练方法，尤指艺术或体育。', '可数，指具体方法。', 'Her painting technique is very fine.', '她的绘画技法非常精细。', ['a painting technique', 'improve your technique'], ['method', 'skill'], 'noun', '可数/不可数', '通用'],
    ['技术；工艺方法', 'A practical scientific or industrial method.', '科学或工业上的实用方法。', '与具体操作步骤相关。', 'Surgeons used a new technique.', '外科医生使用了一种新技术。', ['a new technique', 'surgical technique'], ['procedure'], 'noun', 'countable', '科技']
  ], 'techniques', ['method', 'skill'], 'technique 是具体做法，technology 是技术整体或科技设备。重音在第二音节 /tekˈniːk/'),

  W('technology', 'noun', '/tekˈnɒlədʒi/', 'A2', ['CET4'], '科技；技术；工艺', 'Scientific knowledge used in practical ways, and the tools that come from it.', [
    ['科技；技术应用', 'The use of scientific knowledge for practical purposes.', '把科学知识用于实际目的。', '常作不可数总称。', 'Technology has changed how we work.', '科技改变了我们的工作方式。', ['information technology', 'modern technology'], ['science', 'engineering'], 'noun', '不可数', '科技'],
    ['一项技术；工艺设备', 'A particular machine, method, or system based on science.', '基于科学的某种机器、方法或系统。', '复数 technologies 指多种技术。', 'This technology saves water.', '这项技术能节水。', ['a new technology', 'green technology'], ['technique', 'system'], 'noun', '可数/不可数', '科技']
  ], 'technologies', ['science', 'technique'], '大纲变体 tech，多指科技行业或数码产品。technological 技术的；technologist 技术专家'),

  W('tedious', 'adjective', '/ˈtiːdiəs/', 'B2', ['CET4'], '冗长乏味的；沉闷的', 'Lasting too long and not interesting.', [
    ['冗长乏味的', 'Too long, slow, or dull to hold interest.', '又长又慢又无趣，让人提不起兴趣。', '常修饰工作、会议、旅途。', 'Entering the data by hand is tedious.', '手工录入这些数据十分乏味。', ['a tedious job', 'tedious work'], ['boring', 'dull'], 'adjective', '定语/表语', '通用'],
    ['令人生厌的；磨人的', 'Annoying because the same thing continues without change.', '因一成不变而令人厌烦。', '语气比 boring 更强调拖得很长。', 'The speech became tedious after an hour.', '演讲一个小时后变得沉闷难耐。', ['a tedious speech', 'tedious detail'], ['tiresome', 'monotonous'], 'adjective', '定语/表语', '通用']
  ], '', ['boring', 'dull'], '副词 tediously，名词 tedium 乏味。不要和 previous 或 tenuous 拼混'),

  W('teen', 'noun/adjective', '/tiːn/', 'A2', ['CET4'], '青少年；十几岁的', 'A person between 13 and 19 years old, or connected with that age.', [
    ['青少年（十三至十九岁）', 'A person aged from thirteen to nineteen.', '年龄在十三岁到十九岁之间的人。', 'teen 是 teenager 的短称。', 'The film is popular with teens.', '这部电影在青少年中很受欢迎。', ['teens and adults', 'a teen magazine'], ['adolescent', 'youth'], 'noun', 'countable', '社会'],
    ['十几岁的；青少年的', 'Connected with people of that age.', '与这一年龄段的人有关。', '作定语。in your teens 表示十几岁时。', 'She started writing in her teens.', '她十几岁时开始写作。', ['teen years', 'in your teens'], ['teenage'], 'adjective', '定语', '社会']
  ], 'teens', ['adolescent', 'youth'], 'teens 既是复数「青少年」，也用于 in your teens。更完整的词是 teenager。thirteen 到 nineteen 都以 -teen 结尾'),

  W('teenager', 'noun', '/ˈtiːneɪdʒə(r)/', 'A2', ['CET4'], '青少年；十几岁的人', 'A person who is between 13 and 19 years old.', [
    ['青少年', 'A boy or girl aged from thirteen to nineteen.', '十三岁到十九岁的男孩或女孩。', '法律上的成年年龄各国不同，这个词只看年龄段。', 'Teenagers need more sleep than adults.', '青少年比成年人需要更多睡眠。', ['a teenage child', 'teenagers and parents'], ['adolescent', 'teen'], 'noun', 'countable', '社会'],
    ['十几岁的少男少女', 'A young person still growing from childhood toward adult life.', '正从童年走向成年的年轻人。', '强调成长阶段，不只是数字。', 'As a teenager he lived in Shanghai.', '他十几岁时住在上海。', ['as a teenager', 'a typical teenager'], ['youth', 'minor'], 'noun', 'countable', '社会']
  ], 'teenagers', ['adolescent', 'teen'], '形容词 teenage 或 teenaged。teenager 是可数名词，不能说 a teenage 来指人'),

  W('telecommunications', 'noun', '/ˌtelikəˌmjuːnɪˈkeɪʃnz/', 'B2', ['CET4'], '电信；远程通信', 'The sending of information over long distances by phone, radio, or cable.', [
    ['电信；电讯业', 'The business and systems that send messages by wire, radio, or light.', '通过电线、无线电或光传送信息的行业和系统。', '形式为复数，常作单数概念用。', 'She works in telecommunications.', '她在电信行业工作。', ['the telecommunications industry', 'telecommunications network'], ['telecoms', 'communications'], 'noun', '不可数', '科技'],
    ['远程通信技术', 'Technology for exchanging voice, text, and data across distance.', '远距离交换语音、文字和数据的技术。', '包括电话、互联网和卫星。', 'Telecommunications links the two offices.', '电信把两个办公室连在一起。', ['mobile telecommunications', 'telecommunications equipment'], ['networking', 'broadcasting'], 'noun', '不可数', '科技']
  ],'telecommunications', ['communications', 'telecoms'], '常缩写为 telecoms。词形以 s 结尾，前面一般不加 a。相关词 telephone、television 共享 tele-「远」'),

  W('telephone', 'noun/verb', '/ˈtelɪfəʊn/', 'A1', ['CET4'], '电话；打电话', 'A device or system for speaking to someone at a distance; to call someone that way.', [
    ['电话；电话机', 'A system or a machine used to speak to someone in another place.', '用来和另一地的人说话的系统或机器。', '正式用词，日常多说 phone。', 'The telephone rang twice.', '电话响了两声。', ['answer the telephone', 'a telephone number'], ['phone', 'handset'], 'noun', 'countable', '通信'],
    ['打电话', 'To speak to someone using a telephone.', '用电话和某人说话。', 'telephone sb 比 call 更正式。', 'He telephoned the hospital at noon.', '他中午给医院打了电话。', ['telephone sb', 'telephone for help'], ['call', 'ring'], 'verb', '及物', '通信']
  ], 'telephones~telephoned~telephoned~telephoning', ['phone', 'call'], '大纲变体 phone，口语几乎都用 phone。on the telephone 在通话。telephone box 英式电话亭'),

  W('telescope', 'noun', '/ˈtelɪskəʊp/', 'B1', ['CET4'], '望远镜', 'A tube-shaped instrument that makes far objects look nearer.', [
    ['望远镜', 'An instrument with lenses or mirrors that makes distant things look closer.', '用透镜或反射镜使远处物体看起来更近的仪器。', '天文和观鸟都用。', 'We looked at the moon through a telescope.', '我们用望远镜看月亮。', ['a radio telescope', 'look through a telescope'], ['spyglass', 'binoculars'], 'noun', 'countable', '科学'],
    ['天文望远镜', 'A large scientific instrument used to study stars and space.', '用来研究星体和太空的大型科学仪器。', '可建在地面或送入太空。', 'The new telescope can see very faint stars.', '这台新望远镜能看到非常暗的恒星。', ['a space telescope', 'an optical telescope'], ['instrument', 'observatory'], 'noun', 'countable', '天文']
  ], 'telescopes', ['binoculars', 'instrument'], 'microscope 是显微镜，看微小物体；telescope 看远处。动词 telescope 可比喻「叠套、压缩」，考试以名词为主'),

  W('television', 'noun', '/ˈtelɪvɪʒn/', 'A1', ['CET4'], '电视；电视机；电视业', 'A system or a set for showing moving pictures and sound.', [
    ['电视（系统或媒介）', 'A system for sending pictures and sound so people can watch programmes at home.', '传送图像和声音、供人在家观看节目的系统。', '不可数，指这种媒介。', 'She works in television.', '她在电视行业工作。', ['on television', 'watch television'], ['broadcasting', 'TV'], 'noun', '不可数', '传媒'],
    ['电视机', 'The box-shaped device on which you watch those pictures.', '用来收看那些图像的箱形设备。', '可数。也可说 a TV set。', 'They bought a new television.', '他们买了一台新电视机。', ['a television set', 'switch on the television'], ['screen'], 'noun', 'countable', '生活']
  ], 'televisions', ['TV', 'broadcasting'], '大纲变体 TV。watch television 通常不加冠词；a television 才是一台机器。英式节目用 programme，美式用 program'),

  W('tell', 'verb', '/tel/', 'A1', ['CET4'], '告诉；讲述；吩咐；辨别', 'To give information, order someone, or recognize a difference.', [
    ['告诉；讲述', 'To give someone facts or a story in words.', '用语言把事实或故事告诉某人。', 'tell sb sth，不要漏掉听话的人。', 'Tell me your name, please.', '请告诉我你的名字。', ['tell sb sth', 'tell a story'], ['inform', 'relate'], 'verb', '及物', '通用'],
    ['吩咐；命令', 'To order someone to do something.', '命令某人做某事。', '吩咐；命令。用法可见 tell sb to do sth。', 'The guard told us to wait.', '警卫叫我们等着。', ['tell sb to do', 'do as you are told'], ['order', 'instruct'], 'verb', '及物', '通用'],
    ['辨别；看出', 'To recognize a difference or know what is true.', '分辨差别，或知道真实情况。', 'tell A from B 区分两者。', 'I cannot tell the twins apart.', '我分不清这对双胞胎。', ['tell A from B', 'tell apart'], ['distinguish', 'see'], 'verb', '及物', '通用']
  ], 'tells~told~told~telling', ['inform', 'order'], '过去式和过去分词都是 told。say 侧重说出的话，tell 侧重告诉某个人。you never can tell 谁也说不准'),

  W('teller', 'noun', '/ˈtelə(r)/', 'B2', ['CET4'], '出纳员；讲述者；计票员', 'A bank clerk who pays out money, or a person who tells something.', [
    ['银行出纳', 'A person who receives and pays out money in a bank.', '在银行收付现金的职员。', '美式很常见，英式也说 cashier。', 'Ask the teller to change this note.', '请出纳把这张纸币换成零钱。', ['a bank teller', 'a teller window'], ['cashier', 'clerk'], 'noun', 'countable', '金融'],
    ['讲述者；计票人', 'A person who tells a story, or who counts votes.', '讲故事的人，或统计选票的人。', 'fortune teller 算命的人。', 'The vote tellers checked each ballot.', '计票员核对了每一张选票。', ['a fortune teller', 'a story teller'], ['narrator', 'counter'], 'noun', 'countable', '通用']
  ], 'tellers', ['cashier', 'narrator'], 'ATM 是 automatic teller machine。teller 不是 telephone。storyteller 常连写'),

  W('temper', 'noun/verb', '/ˈtempə(r)/', 'B2', ['CET4'], '脾气；怒气；性情；使缓和；回火', 'A tendency to become angry; to make something less extreme, or to harden metal.', [
    ['脾气；怒气', 'A state of anger, or the way a person usually reacts emotionally.', '发怒的状态，或一个人通常的情绪反应方式。', 'lose your temper 发脾气。', 'He lost his temper in the meeting.', '他在会上发了脾气。', ['lose your temper', 'a bad temper'], ['mood', 'anger'], 'noun', '可数/不可数', '情感'],
    ['使缓和；调节', 'To make something less severe by adding a balancing quality.', '加入平衡因素，使某事物不那么严厉。', '书面语，temper with。', 'She tempered criticism with praise.', '她在批评中夹了表扬，使语气缓和。', ['temper sth with', 'be tempered by'], ['moderate', 'soften'], 'verb', '及物', '书面'],
    ['回火；锻炼（金属或性格）', 'To heat and cool metal so that it becomes hard but not brittle.', '把金属加热再冷却，使其坚硬而不脆。', '也可比喻磨练性格。', 'The steel was tempered in the furnace.', '这批钢在炉中回火。', ['temper steel', 'a tempered blade'], ['harden', 'toughen'], 'verb', '及物', '工业']
  ], 'tempers~tempered~tempered~tempering', ['mood', 'moderate'], 'keep your temper 忍住不发火。good-tempered 脾气好的。temper 作「脾气」时与 temperature「温度」只差一个词尾'),

  W('temperament', 'noun', '/ˈtemprəmənt/', 'C1', ['CET6'], '气质；性情；性格', 'The usual emotional character of a person.', [
    ['气质；性情', 'The set of emotional qualities that a person shows most of the time.', '一个人大多数时候表现出来的情绪特质。', '比 mood 更稳定。', 'She has a calm temperament.', '她性情平静。', ['a calm temperament', 'by temperament'], ['disposition', 'nature'], 'noun', '可数/不可数', '心理'],
    ['易激动的性格；艺术气质', 'A nature that feels things strongly, especially in artists.', '情感反应强烈的本性，尤指艺术家。', '可含「神经质、不稳定」。', 'He has the temperament of a performer.', '他有表演者的那种气质。', ['an artistic temperament', 'a nervous temperament'], ['personality', 'character'], 'noun', '可数/不可数', '文艺']
  ], 'temperaments', ['disposition', 'nature'], '注意拼写中间是 tempera-，不是 temprament。temperamental 可指喜怒无常，也可指性能不稳定'),

  W('temperature', 'noun', '/ˈtemprətʃə(r)/', 'A2', ['CET4'], '温度；体温；发烧', 'How hot or cold something is, including the body.', [
    ['温度', 'A measure of how hot or cold a place or object is.', '衡量某地或某物冷热程度的数值。', '用摄氏或华氏表示。', 'The temperature fell below zero.', '气温降到了零度以下。', ['room temperature', 'a high temperature'], ['heat', 'warmth'], 'noun', '可数/不可数', '科学'],
    ['体温；发烧', 'The heat of the human body, especially when it is higher because of illness.', '人体的热度，尤指生病时升高的体温。', 'have a temperature 表示发烧。', 'The child has a temperature tonight.', '这孩子今晚发烧了。', ['have a temperature', 'take your temperature'], ['fever'], 'noun', '可数/不可数', '医学']
  ], 'temperatures', ['heat', 'fever'], 'have a temperature 是发烧，不是单纯「有体温」。take your temperature 量体温。零下说 below zero'),

  W('temple', 'noun', '/ˈtempl/', 'B1', ['CET4'], '庙；寺；神殿；太阳穴', 'A building used for worship, or the flat area on the side of the head.', [
    ['庙；寺；神殿', 'A building where people worship a god or gods.', '人们敬拜神灵的建筑物。', '可用于多种宗教，不只是一种。', 'They visited an old temple in the hills.', '他们参观了山里的一座古庙。', ['a Buddhist temple', 'go to the temple'], ['shrine', 'sanctuary'], 'noun', 'countable', '宗教'],
    ['太阳穴；鬓角', 'One of the two flat parts on each side of the forehead.', '前额两侧扁平的部位。', '与宗教义完全不同。', 'He rubbed his temples and sighed.', '他揉了揉太阳穴，叹了口气。', ['at the temples', 'pain in the temples'], ['forehead', 'brow'], 'noun', 'countable', '身体']
  ], 'temples', ['shrine', 'forehead'], '两个义项同形同音。太阳穴常用复数 temples。不要和 temporary 或 tempo 混淆'),

  W('tempo', 'noun', '/ˈtempəʊ/', 'C1', ['CET6'], '速度；节奏；发展速度', 'The speed of a piece of music, or the pace of an activity.', [
    ['（音乐）速度', 'The speed at which a piece of music is played.', '乐曲演奏的快慢。', '乐谱上用意大利语标记，如 allegro。', 'The tempo of the song is slow.', '这首歌的速度很慢。', ['a fast tempo', 'up-tempo'], ['pace', 'speed'], 'noun', 'countable', '音乐'],
    ['节奏；进展速度', 'The rate at which something happens or develops.', '事情发生或发展的速率。', '可用于生活、比赛或经济。', 'The tempo of city life is high.', '城市生活的节奏很快。', ['the tempo of life', 'keep up the tempo'], ['rhythm'], 'noun', 'countable', '通用']
  ], 'tempos', ['pace', 'speed'], '复数一般用 tempos，音乐专业也用 tempi。tempo 不是 temperature，也不是 temple'),

  W('temporal', 'adjective', '/ˈtempərəl/', 'C1', ['CET6'], '时间的；世间的；太阳穴的', 'Connected with time, with life on earth rather than religion, or with the temples of the head.', [
    ['时间的；时态的', 'Connected with time, or with the sequence of events.', '与时间或事件的先后有关。', '学术用语，与 spatial「空间的」相对。', 'The report looks at temporal change.', '这份报告考察的是随时间发生的变化。', ['temporal change', 'a temporal sequence'], ['chronological', 'time-based'], 'adjective', '定语', '学术'],
    ['世俗的；现世的', 'Connected with practical life rather than with spiritual matters.', '与实际生活有关，而非精神或宗教事务。', '书面、历史用语。', 'The king held temporal power.', '国王掌握世俗权力。', ['temporal power', 'temporal affairs'], ['secular', 'worldly'], 'adjective', '定语', '书面'],
    ['太阳穴的；颞部的', 'Connected with the temple area at the side of the head.', '与头部两侧太阳穴区域有关。', '解剖学用词。', 'He felt pain in the temporal region.', '他感到颞部疼痛。', ['the temporal bone', 'temporal region'], ['cranial', 'lateral'], 'adjective', '定语', '医学']
  ], '', ['secular', 'chronological'], '重音在第一音节。temporary 是「暂时的」，temporal 是「时间的」，只差一个字母，不要看混'),

  W('temporary', 'adjective', '/ˈtemprəri/', 'B1', ['CET4'], '暂时的；临时的；短期的', 'Lasting or intended to last for only a short time.', [
    ['暂时的；临时的', 'Continuing for only a limited time.', '只持续有限的一段时间。', '反义 permanent。', 'This office is temporary.', '这间办公室是临时的。', ['a temporary job', 'temporary housing'], ['short-term', 'provisional'], 'adjective', '定语/表语', '通用'],
    ['临时任用的；短期的', 'Employed or arranged only until a permanent solution exists.', '在长期办法出现之前暂时安排的。', '可修饰工人、措施、签证。', 'They hired temporary staff for the fair.', '他们为展会雇了临时员工。', ['temporary staff', 'on a temporary basis'], ['interim', 'casual'], 'adjective', '定语', '工作']
  ], '', ['short-term', 'provisional'], '副词 temporarily，注意重音常移到 tem-po- 的第二音节附近：/ˈtemprərəli/ 或 /ˌtemprəˈrerəli/。名词是 temporary 可指临时工'),

  W('tempt', 'verb', '/tempt/', 'B2', ['CET6'], '引诱；诱惑；吸引', 'To make someone want to do something, especially something unwise.', [
    ['引诱；诱惑', 'To try to persuade someone to do something wrong or unwise.', '试图说服某人做不对或不明智的事。', 'tempt sb into 或 tempt sb to do。', 'Nothing could tempt him to cheat.', '什么也引诱不了他去作弊。', ['tempt sb to', 'tempt sb into'], ['lure', 'entice'], 'verb', '及物', '通用'],
    ['吸引；使很想', 'To attract someone so that they want something pleasant.', '吸引某人，使其很想得到愉快的事物。', 'be tempted to 很想做。', 'I am tempted to buy the coat.', '我很想买那件外套。', ['be tempted to', 'tempt appetite'], ['attract', 'appeal'], 'verb', '及物', '通用']
  ], 'tempts~tempted~tempted~tempting', ['lure', 'attract'], 'tempting 诱人的。temptation 诱惑。tempt 不等于 attempt「试图」，只是形近'),

  W('ten', 'number', '/ten/', 'A1', ['CET4'], '十；十个', 'The number 10.', [
    ['十；十个', 'The number after nine and before eleven.', '九之后、十一之前的数。', '基数词。', 'There are ten students in the room.', '房间里有十个学生。', ['ten years', 'number ten'], ['decade'], 'number', '', '数词'],
    ['第十号；十点', 'Used in scores, times, and labels to mean this number.', '用于比分、时刻和编号，表示这个数。', 'ten o clock 的写法在正文里用 ten o clock，避免撇号。', 'The shop opens at ten.', '商店十点开门。', ['at ten', 'ten to one'], ['tenth'], 'number', '', '数词']
  ], 'tens', ['decade'], 'tens 几十、十位数。ten percent 百分之十。序数词是 tenth'),

  W('tenant', 'noun', '/ˈtenənt/', 'B2', ['CET6'], '房客；承租人；租户', 'A person who pays rent to use a room, flat, land, or building.', [
    ['房客；租户', 'A person who rents a flat, house, or room from the owner.', '向房主租用公寓、房屋或房间的人。', '与 landlord 相对。', 'The tenant pays rent on the first day.', '房客在一号付房租。', ['a sitting tenant', 'pay rent as a tenant'], ['renter', 'lodger'], 'noun', 'countable', '住房'],
    ['承租人；租地人', 'A person or company that has the right to use land or property for a period.', '在一段时间内有权使用土地或产业的人或公司。', '法律和商业用语。', 'The farm has a new tenant.', '这座农场有了新的承租人。', ['a commercial tenant', 'tenant farmer'], ['lessee', 'occupant'], 'noun', 'countable', '法律']
  ], 'tenants', ['renter', 'lessee'], 'landlord / landlady 房东。tenancy 租赁期。tenant 不是 tenet「信条」，拼写只差一个字母'),

  W('tend', 'verb', '/tend/', 'B1', ['CET4'], '往往会；照料；趋向', 'To usually do something; to care for someone; to move in a direction.', [
    ['往往会；倾向于', 'To be likely to happen or to do something in most cases.', '在多数情况下容易发生或容易这样做。', 'tend to do 是核心结构。', 'I tend to get up late.', '我往往起得晚。', ['tend to do', 'tend towards'], ['be inclined', 'be apt'], 'verb', '不及物', '通用'],
    ['照料；护理', 'To look after a person, animal, or plant.', '照顾人、动物或植物。', '比 look after 稍正式。', 'Nurses tend the patients at night.', '护士夜里照料病人。', ['tend the sick', 'tend a garden'], ['care for', 'nurse'], 'verb', '及物', '通用']
  ], 'tends~tended~tended~tending', ['incline', 'care for'], 'tendency 倾向。tend to 后面是动词原形，不是名词。照料义的名词是 attention，不是 tend'),

  W('tender', 'adjective/verb/noun', '/ˈtendə(r)/', 'B2', ['CET4'], '温柔的；嫩的；投标；提供；嫩肉', 'Gentle or soft; to offer formally; an offer to do work for a stated price.', [
    ['温柔的；体贴的', 'Showing kindness, love, and care.', '表现出善意、爱和关怀。', '可形容人、笑容或话语。', 'She gave the child a tender look.', '她温柔地看了孩子一眼。', ['a tender smile', 'tender care'], ['gentle', 'affectionate'], 'adjective', '定语/表语', '情感'],
    ['嫩的；易损的；敏感的', 'Soft and easy to cut or hurt.', '柔软、容易切开或容易受伤。', '食物和伤口都能用。', 'Cook the meat until it is tender.', '把肉煮到变嫩。', ['tender meat', 'a tender spot'], ['soft', 'delicate'], 'adjective', '定语/表语', '通用'],
    ['投标；正式提出', 'To make a formal offer to do work or to supply goods at a price.', '正式提出以某价格做工作或供货。', 'tender for 投标争取。', 'Three firms tendered for the bridge.', '三家公司投标承建这座桥。', ['tender for', 'tender a resignation'], ['bid', 'offer'], 'verb', '及物/不及物', '商业'],
    ['投标书；供应船', 'A formal offer to do a job, or a small boat that serves a larger one.', '承接工作的正式报价，或为大船服务的小船。', '法律上也可指提交的钱款。', 'The council accepted the lowest tender.', '市政会接受了最低报价。', ['submit a tender', 'a legal tender'], [], 'noun', '可数/不可数', '商业']
  ], 'tenders~tendered~tendered~tendering', ['gentle', 'bid'], 'legal tender 法定货币。at a tender age 在幼小的年龄。tender 作「投标」时英式比美式更常见，美式多用 bid'),

  W('tennis', 'noun', '/ˈtenɪs/', 'A1', ['CET4'], '网球', 'A game in which two or four players hit a ball over a net with rackets.', [
    ['网球运动', 'A sport played by hitting a ball across a net with a racket.', '用球拍把球打过网的运动。', '单打或双打。', 'They play tennis every Saturday.', '他们每个星期六打网球。', ['play tennis', 'a tennis court'], ['racket sport', 'game'], 'noun', '不可数', '体育'],
    ['网球比赛', 'A match or the professional world of this sport.', '一场这种运动的比赛，或这项运动的职业圈。', '前面通常不加冠词。', 'Tennis is on television tonight.', '今晚电视上有网球比赛。', ['a tennis match', 'table tennis'], ['match', 'tournament'], 'noun', '不可数', '体育']
  ],'tennis', ['racket sport', 'game'], 'tennis 不可数，不说 a tennis。乒乓球是 table tennis。网球拍 tennis racket（美式也作 racquet）'),

  W('tense', 'adjective/noun/verb', '/tens/', 'B1', ['CET4'], '紧张的；时态；拉紧', 'Nervous or tight; a verb form that shows time; to become tight.', [
    ['紧张的；拉紧的', 'Nervous, worried, or stretched tight.', '情绪紧张，或身体、绳子等绷紧。', '可形容人或局面。', 'The talks were tense.', '谈判气氛紧张。', ['a tense moment', 'feel tense'], ['nervous', 'tight'], 'adjective', '定语/表语', '通用'],
    ['时态', 'A form of a verb that shows when an action happens.', '表示动作发生时间的动词形式。', '语法术语。', 'The past tense of go is went.', 'go 的过去时是 went。', ['the past tense', 'verb tense'], ['aspect', 'form'], 'noun', 'countable', '语法'],
    ['使拉紧；变得紧张', 'To tighten muscles, or to become nervous.', '绷紧肌肉，或变得紧张。', 'tense up 突然紧张起来。', 'She tensed when the door opened.', '门开时她紧张起来。', ['tense up', 'tense your muscles'], ['tighten', 'stiffen'], 'verb', '及物/不及物', '通用']
  ], 'tenses~tensed~tensed~tensing', ['nervous', 'tighten'], '名词 tension 紧张、张力。tense 不是 tent「帐篷」。过去时、现在时是语法标签，不要和心情义混在同一个例句里不加说明'),

  W('tent', 'noun', '/tent/', 'A1', ['CET4'], '帐篷；帐棚', 'A movable shelter made of cloth held up by poles and ropes.', [
    ['帐篷', 'A shelter of cloth supported by poles, used for camping.', '用杆子撑起的布制遮蔽物，用于露营。', 'pitch a tent 搭帐篷。', 'We slept in a tent by the lake.', '我们睡在湖边的帐篷里。', ['pitch a tent', 'a camping tent'], ['shelter', 'canopy'], 'noun', 'countable', '生活'],
    ['帐幕；临时大棚', 'A large cloth structure used for an event or as a temporary cover.', '用于活动或临时遮盖的大型布结构。', '展览和婚礼都常见。', 'The wedding was held in a tent.', '婚礼在一座大帐里举行。', ['a circus tent', 'an oxygen tent'], ['marquee', 'pavilion'], 'noun', 'countable', '通用']
  ], 'tents', ['shelter', 'canopy'], 'oxygen tent 氧气帐，是医疗设备。tent 与 tense 形近。inside a tent 在帐篷里'),

  W('tentative', 'adjective', '/ˈtentətɪv/', 'C1', ['CET6'], '暂定的；试探的；犹豫的', 'Not certain or agreed yet; done in a careful, unsure way.', [
    ['暂定的；初步的', 'Not final, and likely to be changed.', '尚未最终确定，可能还会改。', '常修饰计划、协议、日期。', 'We made a tentative date for May.', '我们暂定了五月的一个日期。', ['a tentative plan', 'a tentative agreement'], ['provisional', 'unconfirmed'], 'adjective', '定语', '书面'],
    ['试探的；犹豫的', 'Done without confidence, as if testing the situation.', '缺乏把握，像是在试探情况。', '可形容微笑、步伐或建议。', 'He gave a tentative smile.', '他试探性地笑了笑。', ['a tentative smile', 'tentative steps'], ['hesitant', 'cautious'], 'adjective', '定语/表语', '通用']
  ], '', ['provisional', 'hesitant'], '副词 tentatively。与 tentative 相关的动词是 tempt 的远亲义「试」，但现代英语里不要把 tentative 当成 tempt 的形容词'),

  W('tenure', 'noun', '/ˈtenjə(r)/', 'C1', ['CET6'], '任期；占有期；终身职位', 'The period of holding a job or land, or a permanent university post.', [
    ['任期；任职期间', 'The period during which someone holds an important job.', '某人担任重要职务的一段时间。', '政治和机构用语。', 'His tenure as mayor lasted four years.', '他担任市长的任期是四年。', ['during a tenure', 'tenure as'], ['term', 'incumbency'], 'noun', '不可数', '政治'],
    ['终身教职；保有权', 'The right to keep a university job permanently, or the legal right to hold land.', '永久保留大学职位的权利，或持有土地的法律权利。', '学术圈的 tenure 很具体。', 'She was granted tenure last year.', '她去年获得了终身教职。', ['academic tenure', 'security of tenure'], ['permanence', 'freehold'], 'noun', '不可数', '教育']
  ],'tenures',['term', 'permanence', 'tenement'], '动词 tenure 少见。tenured 已获终身职的。tenure 不是 tender，也不是 tenant，但都与「持有」有关'),

  W('term', 'noun/verb', '/tɜːm/', 'A2', ['CET4'], '术语；学期；期限；条款；把……称为', 'A word, a period, or a condition; to give something a name.', [
    ['术语；词语', 'A word or phrase with a particular meaning in a subject.', '某一学科里有特定含义的词或短语。', 'in terms of 从某方面来说。', 'Define the term before you use it.', '使用这个术语之前先下定义。', ['a technical term', 'in terms of'], ['word', 'expression'], 'noun', 'countable', '语言'],
    ['学期；期限', 'One of the periods into which a school year or a fixed time is divided.', '学年或一段固定时间划分成的时段。', '英式学期常用 term，美式多用 semester。', 'The spring term starts in April.', '春季学期四月开始。', ['the spring term', 'a term of office'], ['semester', 'period'], 'noun', 'countable', '教育'],
    ['条款；条件', 'One of the rules in an agreement.', '协议中的一条规则。', '常用复数 terms。', 'Read the terms before you sign.', '签字前先读条款。', ['terms and conditions', 'on good terms'], ['condition', 'provision'], 'noun', 'countable', '法律'],
    ['把……称为', 'To call something by a particular name.', '用某个名称称呼某事物。', '较正式，term sb/sth as 或直接加补语。', 'The press termed the event a success.', '媒体把这次活动称为一次成功。', ['term sth sth', 'be termed as'], ['call', 'label'], 'verb', '及物', '书面']
  ], 'terms~termed~termed~terming', ['word', 'period'], 'in the long term 从长远看。come to terms with 接受不愉快的事实。on good terms 关系好。terms 复数才是条款'),

  W('terminal', 'noun/adjective', '/ˈtɜːmɪnl/', 'B2', ['CET4'], '航站楼；终端；末端的；晚期的', 'A building or a computer screen at the end of a route or system; at the end, or fatal.', [
    ['航站楼；终点站', 'A building at the end of a bus, rail, or air route where passengers arrive.', '公共汽车、铁路或航空线路尽头供乘客到达的建筑。', 'airport terminal 航站楼。', 'Meet me at terminal two.', '在二号航站楼见我。', ['an airport terminal', 'a bus terminal'], ['station', 'terminus'], 'noun', 'countable', '交通'],
    ['终端；接线端', 'A screen and keyboard linked to a computer, or a point where a wire ends.', '连接计算机的屏幕和键盘，或导线结束的接点。', '技术义。', 'Each student has a terminal.', '每个学生有一台终端。', ['a computer terminal', 'a terminal window'], ['console', 'workstation'], 'noun', 'countable', '科技'],
    ['末端的；晚期的；不治的', 'At the end of something, or of an illness that will cause death.', '位于某事物的尽头，或指将导致死亡的疾病。', 'terminal illness 要谨慎使用。', 'The line ends at the terminal station.', '这条线在终点站结束。', ['a terminal illness', 'terminal cancer'], ['final', 'fatal'], 'adjective', '定语', '通用']
  ], 'terminals', ['station', 'final'], '副词 terminally。terminus 更强调线路终点。terminal 作「不治的」时语气很重，不宜随便形容小病'),

  W('terminate', 'verb', '/ˈtɜːmɪneɪt/', 'C1', ['CET6'], '终止；结束；解雇', 'To end something, or to come to an end.', [
    ['终止；结束', 'To bring a contract, process, or meeting to an end.', '使合同、过程或会议结束。', '比 end 正式。', 'They terminated the contract in March.', '他们在三月终止了合同。', ['terminate a contract', 'terminate a pregnancy'], ['end', 'conclude'], 'verb', '及物', '正式'],
    ['到达终点；停止', 'To end at a particular place, or to stop existing.', '在某处到达尽头，或不再继续存在。', '不及物用法较书面。', 'The road terminates at the lake.', '这条路在湖边到头。', ['terminate at', 'terminate in'], ['finish', 'stop'], 'verb', '不及物', '书面']
  ], 'terminates~terminated~terminated~terminating', ['end', 'conclude'], 'termination 终止。terminate 比 cancel 更强调使某过程正式结束。解雇可说 terminate employment'),

  W('terrace', 'noun', '/ˈterəs/', 'C1', ['CET6'], '露台；梯田；排屋；看台', 'A flat area beside a building or cut into a slope; a row of joined houses.', [
    ['露台；平台', 'A flat paved area next to a building where people can sit.', '建筑物旁边供人坐的平整铺装区域。', '住宅和咖啡馆都常见。', 'We had lunch on the terrace.', '我们在露台上吃了午饭。', ['a roof terrace', 'on the terrace'], ['patio', 'balcony'], 'noun', 'countable', '建筑'],
    ['梯田；台地', 'One of a series of flat steps cut into a hillside for farming.', '在山坡上开出的一层层平地，用于耕种。', '农业地理词。', 'Rice grows on terraces above the river.', '水稻种在河上方的梯田里。', ['rice terraces', 'a hillside terrace'], ['step', 'ledge'], 'noun', 'countable', '地理'],
    ['排屋；看台', 'A row of houses joined together, or a raised standing area for spectators.', '连成一排的房屋，或供观众站立的高出台地。', '英式 terrace house 是排屋。', 'They live in a terrace near the park.', '他们住在公园附近的一栋排屋里。', ['a terrace house', 'the terraces'], ['row', 'stand'], 'noun', 'countable', '建筑']
  ], 'terraces', ['patio', 'balcony'], '动词 terrace 表示修成梯田。美式更常说 patio。足球场看台 the terraces 是英式说法'),

  W('terrain', 'noun', '/təˈreɪn/', 'C1', ['CET6'], '地形；地势；领域', 'The physical features of an area of land, or a field of knowledge.', [
    ['地形；地势', 'Land of a particular type, especially when it affects travel.', '某一类型的地面，尤指会影响行进的地势。', '可崎岖、平坦或沼泽。', 'The truck cannot cross this rocky terrain.', '这辆卡车过不了这种岩石地形。', ['rough terrain', 'mountainous terrain'], ['ground', 'landscape'], 'noun', '不可数', '地理'],
    ['领域；范围', 'An area of knowledge, activity, or experience.', '知识、活动或经验的某个范围。', '比喻用法，较书面。', 'This theory is familiar terrain for her.', '这一理论对她来说是熟悉的领域。', ['familiar terrain', 'new terrain'], ['field', 'territory'], 'noun', '不可数', '书面']
  ],'terrains', ['ground', 'landscape'], 'terrain 通常不可数。territory 强调管辖或所属的区域，terrain 强调地面本身的样子'),

  W('terrible', 'adjective', '/ˈterəbl/', 'A2', ['CET4'], '可怕的；极坏的；很糟的', 'Very bad, or causing great fear or shock.', [
    ['极坏的；很糟的', 'Of very poor quality, or very unpleasant.', '质量很差，或非常不愉快。', '口语里程度很强。', 'The weather was terrible.', '天气糟透了。', ['a terrible mistake', 'feel terrible'], ['awful', 'dreadful'], 'adjective', '定语/表语', '通用'],
    ['可怕的；严重的', 'Causing fear, shock, or serious harm.', '引起恐惧、震惊或严重伤害。', '比口语的「很糟」更严重。', 'A terrible storm hit the coast.', '一场可怕的风暴袭击了海岸。', ['a terrible accident', 'terrible pain'], ['horrible', 'frightening'], 'adjective', '定语', '通用']
  ], '', ['awful', 'horrible'], 'terribly 既可表「可怕地」，也可作程度副词「非常」。terrible 不是 terrific，后者在现代英语里多表示「极好」'),

  W('terrific', 'adjective', '/təˈrɪfɪk/', 'B1', ['CET4'], '极好的；巨大的；非常的', 'Extremely good, or very great in degree.', [
    ['极好的；了不起的', 'Extremely good and pleasing.', '非常好、令人高兴。', '现代口语的主要意思。', 'We had a terrific time.', '我们玩得特别开心。', ['a terrific idea', 'look terrific'], ['excellent', 'wonderful'], 'adjective', '定语/表语', '口语'],
    ['巨大的；异乎寻常的', 'Very large or powerful in size, force, or amount.', '在规模、力量或数量上非常大。', '此义较旧，仍见于书面。', 'The explosion made a terrific noise.', '爆炸发出了巨大的声响。', ['a terrific noise', 'terrific speed'], ['huge', 'tremendous'], 'adjective', '定语', '书面']
  ], '', ['excellent', 'huge'], 'terrific 现在多半是夸奖，不要按 terrible 去理解成「可怕」。副词 terrifically。重音在第二音节'),

  W('territory', 'noun', '/ˈterətri/', 'B2', ['CET4'], '领土；地盘；领域', 'Land under a government, an area an animal defends, or a field of knowledge.', [
    ['领土；属地', 'Land controlled by a particular country or ruler.', '由某一国家或统治者控制的土地。', '可包括非独立政区。', 'The island became a territory of the state.', '这座岛成了该国的属地。', ['national territory', 'occupied territory'], ['land', 'region'], 'noun', '可数/不可数', '政治'],
    ['地盘；活动范围', 'An area that an animal, a person, or a group treats as its own.', '动物、人或群体视为己有的区域。', '销售区域也叫 territory。', 'The cat defends its territory.', '这只猫保卫自己的地盘。', ['enemy territory', 'a sales territory'], ['domain', 'turf'], 'noun', '可数/不可数', '通用'],
    ['领域；范围', 'A subject or type of experience.', '某一学科或某类经验。', '比喻义。', 'Music is familiar territory for her.', '音乐对她来说是熟悉的领域。', ['familiar territory', 'uncharted territory'], ['field', 'area'], 'noun', '不可数', '通用']
  ], 'territories', ['region', 'domain'], '形容词 territorial 领土的、地盘意识强的。territory 比 terrain 更强调「归谁管」'),

  W('terror', 'noun', '/ˈterə(r)/', 'B2', ['CET4'], '恐怖；惊骇；可怕的人；恐怖活动', 'Very great fear, or violent action meant to cause that fear.', [
    ['恐怖；惊骇', 'A feeling of very great fear.', '非常强烈的恐惧感。', 'in terror 惊恐地。', 'They ran away in terror.', '他们惊恐地跑开了。', ['in terror', 'a feeling of terror'], ['fear', 'dread'], 'noun', '不可数', '情感'],
    ['恐怖活动；可怕的人或事', 'Violent acts intended to frighten people, or a person or thing that causes fear.', '旨在恐吓人们的暴力行为，或引起恐惧的人或事。', '口语里 a terror 也可指淘气得吓人的孩子。', 'The city lived under terror for months.', '这座城市在恐怖中度过了几个月。', ['an act of terror', 'a holy terror'], ['terrorism', 'horror'], 'noun', '可数/不可数', '社会']
  ], 'terrors', ['fear', 'horror'], 'terrorism 恐怖主义；terrorist 恐怖分子。这些词话题敏感，释义保持中性描述即可。be terrified of 非常害怕'),

  W('tertiary', 'adjective', '/ˈtɜːʃəri/', 'C1', ['CET6'], '第三的；高等教育的；第三期的', 'Third in order, rank, or stage.', [
    ['第三的；第三位的', 'Third in order or importance.', '在顺序或重要性上排第三。', 'primary、secondary、tertiary 依次为第一、第二、第三。', 'The tertiary aim is to cut waste.', '第三个目标是减少浪费。', ['a tertiary aim', 'tertiary level'], ['third', 'third-level'], 'adjective', '定语', '书面'],
    ['高等教育的；第三产的', 'Connected with education after secondary school, or with services rather than farming or manufacturing.', '与中学之后的教育有关，或与服务业而非农业、制造业有关。', '英式 tertiary education 即高等教育。', 'Tertiary education includes universities.', '高等教育包括大学。', ['tertiary education', 'the tertiary sector'], ['higher'], 'adjective', '定语', '教育']
  ], '', ['third', 'higher'], '美式高等教育更常说 higher education 或 college。地质和医学里 tertiary 还可指第三纪或第三期，属于专业义'),

  W('test', 'noun/verb', '/test/', 'A2', ['CET4'], '测试；试验；检验；考查', 'An exam or a trial meant to see quality, knowledge, or truth.', [
    ['测验；考试', 'A set of questions or tasks used to measure knowledge or skill.', '用来衡量知识或技能的一组题目或任务。', '学校里最常见的意思。', 'We have a maths test tomorrow.', '我们明天有数学测验。', ['take a test', 'pass a test'], ['exam', 'quiz'], 'noun', 'countable', '教育'],
    ['试验；化验；考验', 'A practical check of a machine, a substance, or a person strength.', '对机器、物质或人的承受力所做的实际检查。', '医学上是化验。', 'The blood test was negative.', '血液化验结果是阴性。', ['a blood test', 'a test of strength'], ['trial', 'check'], 'noun', 'countable', '通用'],
    ['测试；检验', 'To check something by using it or by examining it.', '通过使用或检查来验证某事物。', 'test for 检测是否含有。', 'They tested the water for lead.', '他们检测了水中是否含铅。', ['test for', 'test a theory'], ['examine'], 'verb', '及物', '通用']
  ], 'tests~tested~tested~testing', ['exam', 'check'], 'test 比 exam 规模小。put sth to the test 使经受检验。testing 也可作形容词「棘手的、考验人的」'),

  W('testify', 'verb', '/ˈtestɪfaɪ/', 'C1', ['CET6'], '作证；证明；表明', 'To make a formal statement in court, or to show that something is true.', [
    ['作证；出庭陈述', 'To say what you know in a court of law.', '在法庭上陈述自己所知道的情况。', 'testify against 或 testify for。', 'She testified against her former boss.', '她出庭指证了前上司。', ['testify against', 'testify in court'], ['witness', 'swear'], 'verb', '不及物', '法律'],
    ['证明；表明', 'To be a clear sign that something is true.', '清楚地表明某事为真。', 'testify to 证明、说明。', 'The ruins testify to a rich past.', '这些遗迹表明这里曾有过富足的过去。', ['testify to', 'testify that'], ['show', 'demonstrate'], 'verb', '及物/不及物', '书面']
  ], 'testifies~testified~testified~testifying', ['witness', 'show'], '名词 testimony 证词。testify 的 y 变 i：testifies / testified。不要和 justify 或 satisfy 的词形变化弄混'),

  W('testimony', 'noun', '/ˈtestɪməni/', 'C1', ['CET6'], '证词；证据；证明', 'A formal statement in court, or proof that something exists.', [
    ['证词；证言', 'A statement made by a witness in a court.', '证人在法庭上所作的陈述。', '可数或不可数。', 'His testimony changed the case.', '他的证词改变了案子的走向。', ['give testimony', 'sworn testimony'], ['evidence', 'statement'], 'noun', '可数/不可数', '法律'],
    ['证明；表明', 'Something that shows a fact or a quality very clearly.', '非常清楚地显示某一事实或品质的事物。', 'testimony to 是……的证明。', 'The prize is testimony to her hard work.', '这个奖证明了她的努力。', ['testimony to', 'bear testimony'], ['proof', 'tribute'], 'noun', '不可数', '书面']
  ], 'testimonies', ['evidence', 'proof'], 'testimonial 推荐书、证明书，与 testimony 不同。bear testimony to 与 testify to 意思接近'),

  W('text', 'noun/verb', '/tekst/', 'A1', ['CET4'], '文本；课文；短信；发短信', 'Written words; a school passage; a short phone message; to send one.', [
    ['文本；正文', 'The written words of a book, article, or document, not the pictures.', '书、文章或文件中的文字，而非图画。', '与图像、注释相对。', 'The text is printed in black.', '正文是用黑色印刷的。', ['the full text', 'a text file'], ['wording', 'script'], 'noun', '不可数', '语言'],
    ['课文；短信', 'A short piece of writing for study, or a message sent by phone.', '供学习的短文，或用手机发送的消息。', 'text message 短信。', 'I sent her a text.', '我给她发了一条短信。', ['a text message', 'a set text'], ['message', 'passage'], 'noun', 'countable', '通用'],
    ['发短信', 'To send someone a written message by phone.', '用手机给某人发送文字消息。', 'text sb 直接加人。', 'Text me when you arrive.', '你到了就给我发短信。', ['text sb', 'text back'], ['sms'], 'verb', '及物', '通信']
  ], 'texts~texted~texted~texting', ['message', 'wording'], 'text 作「正文」时常不可数。短信义是可数名词，也是动词。textbook 是课本，不要拆开理解成「正文之书」以外的意思'),

  W('textbook', 'noun/adjective', '/ˈtekstbʊk/', 'A2', ['CET4'], '课本；教科书；典型的', 'A book used for studying a subject; so typical that it could be an example in such a book.', [
    ['课本；教科书', 'A book that contains the standard facts of a subject for students.', '收录某学科标准知识、供学生学习的书。', '学校指定用书。', 'Open your textbook at page ten.', '把课本翻到第十页。', ['a history textbook', 'a school textbook'], ['coursebook', 'manual'], 'noun', 'countable', '教育'],
    ['典型的；教科书式的', 'Showing all the usual features, like an example in a textbook.', '具备全部常见特征，像课本里的范例。', '可含褒义或略带批评。', 'It was a textbook example of teamwork.', '这是团队协作的典型例子。', ['a textbook case', 'a textbook example'], ['classic', 'model'], 'adjective', '定语', '通用']
  ], 'textbooks', ['coursebook', 'classic'], '也写作 text-book，大纲词形 textbook。形容词只作定语，不说 the example is textbook 作为唯一写法，虽口语可见'),

  W('textile', 'noun/adjective', '/ˈtekstaɪl/', 'B2', ['CET4'], '纺织品；织物；纺织的', 'Cloth, or any material made by weaving; connected with that industry.', [
    ['纺织品；织物', 'Any cloth or goods produced by weaving or knitting.', '通过织或编生产的布料或制品。', '常用复数 textiles。', 'The region exports textiles.', '这个地区出口纺织品。', ['cotton textiles', 'the textile industry'], ['fabric', 'cloth'], 'noun', 'countable', '工业'],
    ['纺织的', 'Connected with making cloth.', '与制造布料有关。', '作定语。', 'She studied textile design.', '她学的是纺织品设计。', ['a textile mill', 'textile design'], ['woven'], 'adjective', '定语', '工业']
  ], 'textiles', ['fabric', 'cloth'], 'textile 比 cloth 更偏行业和材料总称。fabric 可以是一块布料，textile 常指产业中的产品'),

  W('texture', 'noun', '/ˈtekstʃə(r)/', 'B2', ['CET6'], '质地；口感；纹理；结构', 'The way a surface or a substance feels, or the pattern of its parts.', [
    ['质地；手感', 'The way a surface feels when you touch it.', '触摸表面时的感觉。', '可粗糙、光滑、柔软。', 'The silk has a smooth texture.', '这种丝绸手感光滑。', ['a smooth texture', 'rough texture'], ['feel', 'surface'], 'noun', '可数/不可数', '材料'],
    ['口感；结构；纹理', 'The way food feels in the mouth, or the arrangement of parts in art, music, or rock.', '食物在口中的感觉，或艺术、音乐、岩石中各部分的组织方式。', '不限于手摸。', 'The cake has a light texture.', '这蛋糕口感松软。', ['texture of the soil', 'a rich texture'], ['grain', 'consistency'], 'noun', '可数/不可数', '通用']
  ], 'textures', ['feel', 'grain'], '动词 texture 表示使具有某种质感，较少考。textured 有纹理的。不要和 textile 看成同一个词'),

  W('thank', 'verb/noun', '/θæŋk/', 'A1', ['CET4'], '感谢；谢谢；谢意', 'To tell someone you are grateful; a word of gratitude.', [
    ['感谢；向……道谢', 'To tell someone that you are pleased and grateful for what they did.', '告诉某人你为他们所做的事而高兴并感激。', '感谢；向……道谢。用法可见 thank sb for sth。', 'Thank you for your help.', '谢谢你的帮助。', ['thank sb for', 'thank you'], ['appreciate', 'acknowledge'], 'verb', '及物', '社交'],
    ['谢意；感谢的话', 'A word or act that shows gratitude.', '表示感激的话或行为。', '常用复数 thanks。', 'She sent thanks to the team.', '她向团队表示了感谢。', ['thanks to', 'many thanks'], ['gratitude', 'appreciation'], 'noun', 'countable', '社交']
  ], 'thanks~thanked~thanked~thanking', ['appreciate', 'gratitude'], 'thanks to 既可表示「多亏」，也可略带反讽表示「由于」。thankful 感激的。thank 后面要有人，不说 thank your help，要说 thank you for your help'),

  W('Thanksgiving', 'noun', '/ˌθæŋksˈɡɪvɪŋ/', 'B1', ['CET4'], '感恩节', 'A holiday for giving thanks, especially the one in the United States and Canada.', [
    ['感恩节', 'A public holiday on which people give thanks, often with a family meal.', '人们表示感恩的公共假日，通常有家庭聚餐。', '美国在十一月的第四个星期四，加拿大在十月。', 'We eat turkey at Thanksgiving.', '我们在感恩节吃火鸡。', ['Thanksgiving Day', 'at Thanksgiving'], ['holiday', 'festival'], 'noun', '不可数', '文化'],
    ['感恩礼拜；感谢', 'A religious service or an act of giving thanks.', '感恩的宗教仪式，或表示感谢的行为。', '小写 thanksgiving 可泛指感恩，专名要大写。', 'The village held a thanksgiving service.', '村里举行了感恩礼拜。', ['a thanksgiving service', 'a day of thanksgiving'], ['thanks', 'gratitude'], 'noun', '可数/不可数', '宗教']
  ], '', ['holiday', 'festival'], '专名 Thanksgiving 要大写。Thanksgiving dinner 感恩节晚餐。不要写成 Thanks Giving'),

  W('that', 'determiner/pronoun/conjunction/adverb', '/ðæt/', 'A1', ['CET4'], '那；那个；引导从句；那样', 'Used to point to a thing, to join a clause, or to mean so.', [
    ['那；那个（限定词或代词）', 'Used to point to a person or thing farther away, or already known.', '用来指较远或已经知道的人或事物。', '复数是 those。', 'That book is mine.', '那本书是我的。', ['that one', 'that day'], ['this', 'those'], 'determiner', '', '语法'],
    ['那件事；那个人（代词）', 'Used to refer to something just mentioned.', '用来指刚刚提到的事物。', '也可在关系从句中指物，较正式可用 which。', 'That is exactly what I meant.', '那正是我的意思。', ['that is', 'that which'], ['it'], 'pronoun', '', '语法'],
    ['引导名词从句或定语从句', 'Used to introduce a clause that completes a statement or describes a noun.', '用来引出补充说明或修饰名词的从句。', '在宾语从句里常可省略。', 'I know that she is right.', '我知道她是对的。', ['so that', 'that is why'], ['which'], 'conjunction', '', '语法'],
    ['那样；那么（程度）', 'Used to mean so, or to that degree.', '表示「这么、那么」的程度。', '多用于否定或疑问。', 'The box is not that heavy.', '这个箱子没有那么重。', ['not that', 'that much'], ['so', 'very'], 'adverb', '', '口语']
  ], '', ['this', 'which'], '指近处用 this，远处用 that。关系从句里 that 前通常不加逗号。连读时弱读 /ðət/'),

  W('the', 'article', '/ðə/', 'A1', ['CET4'], '这；那；这些（定冠词）', 'The definite article, used when the listener can identify which one.', [
    ['（定冠词）指特定的人或事物', 'Used before a noun when both speakers know which one is meant.', '双方都知道指哪一个时，放在名词前。', '元音前常读 /ði/。', 'The door is open.', '门开着。', ['the same', 'the first'], ['a', 'an'], 'article', '', '语法'],
    ['（定冠词）指整个类别', 'Used with a singular noun to talk about a whole class.', '与单数名词连用，谈论整类事物。', '科普句里常见。', 'The whale is a mammal.', '鲸是哺乳动物。', ['the rich', 'the piano'], [], 'article', '', '语法'],
    ['（定冠词）用于独一无二的事物或最高级', 'Used with unique things and with superlatives.', '用于世界上独一无二的事物以及最高级。', '江河、海洋、报纸名前也常用。', 'The sun rises in the east.', '太阳从东方升起。', ['the sun', 'the best'], [], 'article', '', '语法']
  ], '', ['a', 'an'], '辅音前读 /ðə/，元音前读 /ði/。第一次提到常有 a/an，双方已知后用 the。专有名词多数不加 the，但江河、山脉、国家全称常加'),

  W('theater', 'noun', '/ˈθɪətə(r)/', 'A2', ['CET4'], '剧院；戏剧；手术室；剧场', 'A building where plays are performed, or the art of drama.', [
    ['剧院；剧场；电影院', 'A building with a stage where plays or films are shown.', '有舞台、上演戏剧或放映电影的建筑。', '美式拼写 theater，英式 theatre。', 'We met outside the theater.', '我们在剧院外面碰面。', ['go to the theater', 'a movie theater'], ['playhouse', 'cinema'], 'noun', 'countable', '艺术'],
    ['戏剧；戏剧界', 'The writing and performing of plays as an art.', '作为艺术的剧本创作与演出。', '不可数。', 'She has worked in theater for years.', '她在戏剧界工作了多年。', ['modern theater', 'theater studies'], ['drama', 'stage'], 'noun', '不可数', '艺术'],
    ['手术室；活动场所', 'A room where doctors operate, or a place where an activity happens.', '医生做手术的房间，或某项活动发生的场所。', 'operating theater 是英式手术室拼写，美式也可见 theater。', 'The lecture theater was full.', '阶梯教室坐满了。', ['an operating theater', 'a lecture theater'], ['room', 'arena'], 'noun', 'countable', '通用']
  ], 'theaters', ['drama', 'cinema'], '大纲变体 theatre，是英式拼写。movie theater 美式电影院，英式常说 cinema。the theater 可指戏剧艺术整体'),

  W('theft', 'noun', '/θeft/', 'B2', ['CET4'], '偷窃；盗窃；盗窃罪', 'The crime of taking something that belongs to someone else without permission.', [
    ['偷窃；盗窃', 'The act of stealing something.', '偷走某物的行为。', '不可数指这类罪行，可数指一次盗窃。', 'Car theft is common in this area.', '这一带汽车盗窃很常见。', ['car theft', 'identity theft'], ['stealing', 'robbery'], 'noun', '可数/不可数', '法律'],
    ['失窃事件', 'An occasion when something is stolen.', '某物被偷的一次事件。', '可与具体案件连用。', 'The theft of the painting shocked the museum.', '这幅画被盗令博物馆震惊。', ['the theft of', 'report a theft'], ['larceny', 'burglary'], 'noun', 'countable', '法律']
  ], 'thefts', ['stealing', 'robbery'], 'thief 是小偷，theft 是盗窃行为。robbery 含暴力或威胁，burglary 是入室盗窃，theft 是总称'),

  W('their', 'determiner', '/ðeə(r)/', 'A1', ['CET4'], '他们的；她们的；它们的', 'Belonging to the people or things already mentioned.', [
    ['他们的；她们的；它们的', 'Belonging to or connected with people or things already mentioned.', '属于已经提到的人或事物。', 'they 的所有格限定词。', 'The students opened their books.', '学生们打开了他们的书。', ['their own', 'their home'], ['his', 'her'], 'determiner', '', '语法'],
    ['某人的（性别不明或泛指）', 'Belonging to a person whose sex is not stated.', '属于性别未说明的人。', '现代英语用 their 避免只说 his。', 'Everyone should bring their own pen.', '每个人都应带自己的笔。', ['their own', 'ask them their name'], [], 'determiner', '', '语法']
  ], '', ['his', 'her'], 'their 没有撇号。there 是「那里」，they are 的缩写才带撇号，三者读音接近，写作必须分开。their 后面直接加名词'),

  W('theirs', 'pronoun', '/ðeəz/', 'A1', ['CET4'], '他们的（东西）；她们的；它们的', 'Belonging to the people or things already mentioned, used without a following noun.', [
    ['他们的（东西）', 'The one or the things belonging to people already mentioned.', '属于已提到的那些人的那个或那些东西。', '后面不再加名词。', 'This room is theirs.', '这个房间是他们的。', ['of theirs', 'a friend of theirs'], ['his', 'hers'], 'pronoun', '', '语法'],
    ['他们的（责任、看法等）', 'Used to refer to something connected with those people, not only objects.', '指与那些人有关的事物，不限于实物。', '与 ours、yours 同类。', 'The choice was theirs.', '选择权在他们。', ['theirs alone', 'the fault is theirs'], ['ours', 'yours'], 'pronoun', '', '语法']
  ], '', ['ours', 'hers'], 'theirs 末尾不加撇号，也不加 s 以外的符号。不能说 theirs book。of theirs 表示「他们的……之一」'),

  W('them', 'pronoun', '/ðəm/', 'A1', ['CET4'], '他们；她们；它们（宾格）；某人', 'The object form of they.', [
    ['他们；她们；它们（宾语）', 'Used as the object when the subject is they.', '主语是 they 时，用作宾语。', '弱读 /ðəm/。', 'I saw them at the station.', '我在车站看见了他们。', ['see them', 'with them'], ['him', 'her'], 'pronoun', '', '语法'],
    ['某人（泛指，作宾语）', 'Used to refer to a person whose sex is not stated.', '指性别未说明的人，作宾语。', '与 they / their 配套。', 'If a guest arrives, ask them to wait.', '如果有客人来，请他们稍等。', ['ask them', 'tell them'], ['one'], 'pronoun', '', '语法']
  ], '', ['him', 'her'], 'them 是宾格，主格用 they，所有格用 their。I 与 me 的关系同 they 与 them'),

  W('theme', 'noun', '/θiːm/', 'B1', ['CET4'], '主题；主旨；主题曲；题目', 'The main subject or idea of a talk, book, or work of art.', [
    ['主题；主旨', 'The main idea that runs through a book, speech, or film.', '贯穿一本书、一篇讲话或一部电影的主要思想。', 'theme of 后接内容。', 'The theme of the novel is forgiveness.', '这部小说的主题是宽恕。', ['the theme of', 'a central theme'], ['subject', 'topic'], 'noun', 'countable', '文学'],
    ['主题曲；主题活动', 'A short tune linked with a programme, or an idea chosen for an event.', '与某节目相联系的短曲，或为活动选定的理念。', 'theme park 主题公园。', 'The party had a space theme.', '这次聚会的主题是太空。', ['a theme song', 'a theme park'], ['motif', 'tune'], 'noun', 'countable', '通用']
  ], 'themes', ['subject', 'topic'], 'theme 比 topic 更强调贯穿始终的思想。形容词 thematic。theme 与 thesis「论文、论点」不同'),

  W('themselves', 'pronoun', '/ðəmˈselvz/', 'A2', ['CET4'], '他们自己；她们自己；本身', 'The reflexive form of they, or a word used to emphasize them.', [
    ['他们自己（反身）', 'Used when the people who do an action are also the ones affected.', '动作的发出者和承受者是同一群人时使用。', 'by themselves 独自、靠自己。', 'They taught themselves to cook.', '他们自学了做饭。', ['by themselves', 'for themselves'], ['oneself', 'himself'], 'pronoun', '', '语法'],
    ['他们本人（强调）', 'Used to stress that you mean those people and not others.', '强调就是那些人，而不是别人。', '放在名词或 they 之后。', 'The students themselves chose the topic.', '是学生们自己选的题目。', ['they themselves', 'the team themselves'], ['personally'], 'pronoun', '', '语法']
  ], '', ['himself', 'herself'], 'themselves 对应 they，不要写成 themself，除非特意用来指单个性别不明的人，考试写作仍以 themselves 为稳妥形式。by themselves 可表示独自'),

  W('theory', 'noun', '/ˈθɪəri/', 'B1', ['CET4'], '理论；学说；看法', 'An idea or a set of ideas that explains something.', [
    ['理论；学说', 'A set of ideas intended to explain facts or events.', '用来解释事实或事件的一组想法。', '科学里需经检验。', 'The theory explains the results.', '这个理论解释了这些结果。', ['in theory', 'a scientific theory'], ['hypothesis', 'model'], 'noun', '可数/不可数', '学术'],
    ['看法；推测', 'An opinion or a guess that may not be proved.', '尚未证实的看法或猜测。', '口语里比科学理论随意。', 'My theory is that the door was left open.', '我的看法是门被留下没关。', ['my theory is', 'have a theory'], ['idea', 'view'], 'noun', 'countable', '通用']
  ], 'theories', ['hypothesis', 'idea'], 'in theory 理论上，与 in practice 相对。theoretical 理论上的。theory 的复数是 theories，不是 theorys'),

  W('therapy', 'noun', '/ˈθerəpi/', 'B2', ['CET4'], '治疗；疗法；心理治疗', 'Treatment to help a person who is ill in body or mind.', [
    ['治疗；疗法', 'Treatment of an illness over a period of time.', '在一段时间内对疾病进行的治疗。', 'physical therapy 物理治疗。', 'He is having therapy for the injury.', '他正在接受针对这处损伤的治疗。', ['physical therapy', 'drug therapy'], ['treatment', 'care'], 'noun', '不可数', '医学'],
    ['心理治疗', 'Treatment that helps a person deal with mental or emotional problems.', '帮助人处理心理或情绪问题的治疗。', '也说 psychotherapy。', 'She started therapy after the accident.', '事故之后她开始接受心理治疗。', ['in therapy', 'group therapy'], ['counselling'], 'noun', '不可数', '心理']
  ], 'therapies', ['treatment', 'counselling'], 'therapist 治疗师。therapy 作总称不可数，具体疗法可用复数 therapies。英式 counselling，美式 counseling'),

  W('there', 'adverb/pronoun', '/ðeə(r)/', 'A1', ['CET4'], '那里；在那边；有（存在）', 'In or to that place; used to say that something exists.', [
    ['在那里；到那里', 'In, at, or to that place.', '在那个地方，或到那个地方。', '与 here 相对。', 'Put the bags there.', '把包放在那里。', ['over there', 'here and there'], ['here', 'yonder'], 'adverb', '', '通用'],
    ['（there is / are）有；存在', 'Used to say that something exists or happens.', '用来表示某事物存在或发生。', 'there is 后接单数，there are 后接复数。', 'There is a bank on this street.', '这条街上有一家银行。', ['there is', 'there are'], ['exist'], 'pronoun', '', '语法'],
    ['（引起注意）瞧；好了', 'Used to attract attention or to comfort someone.', '用来引起注意或安慰某人。', 'there, there 是安慰用语。', 'There, the work is done.', '好了，工作做完了。', ['there you are', 'there there'], ['look'], 'adverb', '', '口语']
  ], '', ['here', 'exist'], 'there 表示地方，their 表示「他们的」，两者同音。there is 的真正主语在后面，动词与后面的名词一致'),

  W('thereby', 'adverb', '/ˌðeəˈbaɪ/', 'C1', ['CET4'], '由此；从而；借此', 'By means of that action, with that as a result.', [
    ['由此；从而', 'As a result of the action just mentioned.', '作为刚才所说行为的结果。', '书面语，连接结果。', 'He signed the form, thereby agreeing to the rules.', '他签了表格，从而同意了这些规则。', ['thereby doing', 'thereby making'], ['thus', 'so'], 'adverb', '', '书面'],
    ['借此；以此方式', 'By that means.', '用那种方式。', '语气正式，口语少用。', 'She refused and thereby avoided the risk.', '她拒绝了，借此避开了风险。', ['and thereby', 'thereby avoid'], ['hence', 'consequently'], 'adverb', '', '书面']
  ], '', ['thus', 'hence'], 'thereby 后常接现在分词表示结果。不要拆成 there by。比 so 正式，考试写作可用，口语不自然'),

  W('therefore', 'adverb', '/ˈðeəfɔː(r)/', 'B1', ['CET4'], '因此；所以；因而', 'For that reason; as a logical result.', [
    ['因此；所以', 'For the reason just given.', '由于刚才给出的原因。', '连接因果，位置较灵活。', 'It was raining; therefore we stayed in.', '当时在下雨，所以我们留在室内。', ['and therefore', 'therefore we'], ['so', 'thus'], 'adverb', '', '通用'],
    ['因而；由此得出', 'Used to introduce a conclusion from facts.', '用来引出由事实得到的结论。', '比 so 正式。', 'The roads are closed and therefore the trip is off.', '道路封闭，因而行程取消。', ['therefore it follows', 'is therefore'], ['hence', 'consequently'], 'adverb', '', '书面']
  ], '', ['so', 'thus'], 'therefore 是副词，不是连词，前面常用分号或 and，不要写成两句之间只加一个逗号就硬接，除非句子很短且口语。so 更口语'),

  W('thermal', 'adjective/noun', '/ˈθɜːml/', 'C1', ['CET6'], '热的；保暖的；热气流；保暖内衣', 'Connected with heat; a rising current of warm air, or warm underwear.', [
    ['热的；热量的', 'Connected with or caused by heat.', '与热有关或由热引起的。', '科学和工程用语。', 'Thermal energy can produce electricity.', '热能可以发电。', ['thermal energy', 'thermal power'], ['heat', 'caloric'], 'adjective', '定语', '科学'],
    ['保暖的', 'Designed to keep the body warm.', '为保暖而设计的。', '修饰衣服。', 'He wore a thermal jacket.', '他穿了一件保暖夹克。', ['thermal underwear', 'a thermal vest'], ['warm', 'insulated'], 'adjective', '定语', '生活'],
    ['上升热气流；保暖衣', 'A rising current of warm air, or a piece of warm clothing.', '上升的暖空气流，或一件保暖衣服。', '滑翔运动里 pilots 寻找 thermals。', 'The bird rose on a thermal.', '那只鸟乘着一股热气流上升。', ['ride a thermal', 'a pair of thermals'], ['updraft', 'underwear'], 'noun', 'countable', '通用']
  ], 'thermals', ['heat', 'warm'], 'thermometer 温度计，thermostat 恒温器，都含 therm-「热」。thermal 作名词「保暖内衣」常用复数 thermals'),

  W('thermometer', 'noun', '/θəˈmɒmɪtə(r)/', 'B1', ['CET4'], '温度计；体温计', 'An instrument that measures temperature.', [
    ['温度计', 'A device that measures how hot or cold something is.', '测量冷热程度的仪器。', '可用于气温、水温或体温。', 'The thermometer shows 20 degrees.', '温度计显示二十度。', ['a mercury thermometer', 'read a thermometer'], ['gauge', 'sensor'], 'noun', 'countable', '科学'],
    ['体温计', 'A small thermometer used to measure the heat of the body.', '用来测量体温的小型温度计。', '医学语境。', 'The nurse put a thermometer under his tongue.', '护士把体温计放在他的舌下。', ['a clinical thermometer', 'a digital thermometer'], ['instrument'], 'noun', 'countable', '医学']
  ], 'thermometers', ['gauge', 'instrument'], '不要漏写中间的 o：therm-o-meter。barometer 气压计，metronome 节拍器，都不是温度计'),

  W('these', 'determiner/pronoun', '/ðiːz/', 'A1', ['CET4'], '这些', 'The plural of this.', [
    ['这些（限定词）', 'Used before a plural noun to point to people or things near you.', '放在复数名词前，指近处的人或事物。', '与 those 相对。', 'These books are new.', '这些书是新的。', ['these days', 'these two'], ['those', 'this'], 'determiner', '', '语法'],
    ['这些（代词）', 'Used alone to refer to things or people near you or just mentioned.', '单独使用，指近处或刚提到的事物或人。', '后面不再加名词。', 'These are my keys.', '这些是我的钥匙。', ['these are', 'none of these'], ['they'], 'pronoun', '', '语法']
  ], '', ['those', 'this'], 'this 的复数是 these，that 的复数是 those。these days 如今。不要写成 this books'),

  W('thesis', 'noun', '/ˈθiːsɪs/', 'B2', ['CET4'], '论文；论点；毕业论文', 'A long essay for a degree, or a statement that you argue for.', [
    ['毕业论文；学位论文', 'A long piece of writing done for a university degree.', '为获得大学学位而写的长篇论文。', '英式 thesis 常指博士论文，美式也可指硕士论文。', 'She is writing her thesis on cities.', '她正在写关于城市的学位论文。', ['a doctoral thesis', 'write a thesis'], ['dissertation', 'paper'], 'noun', 'countable', '教育'],
    ['论点；论题', 'A statement or an idea that you discuss and try to prove.', '你提出并试图证明的陈述或观点。', '写作和辩论用语。', 'His thesis is that prices will fall.', '他的论点是价格将会下跌。', ['a central thesis', 'support a thesis'], ['argument', 'claim'], 'noun', 'countable', '学术']
  ], 'theses', ['dissertation', 'argument'], '复数 theses，读 /ˈθiːsiːz/。英式里 dissertation 常指硕士或本科长论文，与 thesis 的分工和美式不完全相同'),

  W('they', 'pronoun', '/ðeɪ/', 'A1', ['CET4'], '他们；她们；它们；有人', 'People, animals, or things already mentioned; or people in general.', [
    ['他们；她们；它们', 'Used as the subject to refer to people or things already mentioned.', '作主语，指已经提到的人或事物。', '宾格 them，所有格 their。', 'They are ready.', '他们准备好了。', ['they are', 'they have'], ['he', 'she'], 'pronoun', '', '语法'],
    ['人们；有人（泛指）', 'People in general, or a person whose sex is not stated.', '泛指人们，或性别未说明的一个人。', '可指单个人：If anyone calls, they can leave a message.', 'They say the road will close.', '人们说这条路要封闭。', ['they say', 'if anyone ... they'], ['people', 'one'], 'pronoun', '', '语法']
  ], '', ['he', 'she'], 'they 是主格。指一个人时，正式老派写法曾用 he，现在 they 已被广泛接受。不要和 there、their 写混'),

  W('thick', 'adjective', '/θɪk/', 'A2', ['CET4'], '厚的；粗的；浓的；密集的', 'Having a large distance between surfaces, or not flowing easily.', [
    ['厚的；粗的', 'Having a large distance between opposite surfaces, or a wide cross-section.', '两个相对表面之间距离大，或横截面宽。', '反义 thin。', 'The walls are very thick.', '墙很厚。', ['a thick book', 'thick hair'], ['wide', 'broad'], 'adjective', '定语/表语', '通用'],
    ['浓的；稠的；密的', 'Not flowing easily, or growing closely together.', '不容易流动，或长得很密。', '可形容汤、雾、烟雾或树林。', 'The fog was thick that morning.', '那天早晨雾很浓。', ['thick soup', 'thick fog'], ['dense', 'viscous'], 'adjective', '定语/表语', '通用'],
    ['（口语）愚钝的', 'Slow to understand.', '理解得很慢。', '冒犯用语，不宜对人使用。', 'Calling someone thick is rude.', '说某人笨是无礼的。', ['a bit thick', 'thick headed'], ['slow', 'stupid'], 'adjective', '表语', '口语']
  ], '', ['dense', 'wide'], '厚度用 thick，不用 fat。how thick 问厚度。through thick and thin 同甘共苦。副词 thickly'),

  W('thief', 'noun', '/θiːf/', 'A2', ['CET4'], '贼；小偷', 'A person who steals.', [
    ['贼；小偷', 'A person who steals things, usually secretly.', '偷东西的人，通常是偷偷地偷。', '复数 thieves。', 'A thief took the bicycle.', '一个小偷偷走了自行车。', ['a car thief', 'catch a thief'], ['robber', 'burglar'], 'noun', 'countable', '法律'],
    ['偷窃者（比喻）', 'A person or thing that takes something valuable, such as time.', '夺走宝贵东西（如时间）的人或事物。', '比喻用法。', 'Worry is a thief of sleep.', '忧虑会偷走睡眠。', ['a thief of time', 'like a thief'], ['stealer'], 'noun', 'countable', '书面']
  ], 'thieves', ['robber', 'burglar'], '复数 thieves，不是 thiefs。thief 是人，theft 是行为。robber 使用暴力，burglar 闯入屋内，pickpocket 扒手'),

  W('thigh', 'noun', '/θaɪ/', 'B2', ['CET6'], '股；大腿', 'The top part of the leg between the knee and the hip.', [
    ['大腿；股部', 'The part of the leg above the knee.', '膝盖以上的那段腿。', '人体部位词。', 'He felt a pain in his left thigh.', '他感到左大腿疼痛。', ['inner thigh', 'thigh muscle'], ['leg', 'ham'], 'noun', 'countable', '身体'],
    ['（禽类）大腿肉', 'This part of a bird, eaten as meat.', '鸟类的这一部位，作为肉食用。', '菜单上常见。', 'She ordered a chicken thigh.', '她点了一份鸡腿肉。', ['a chicken thigh', 'thigh meat'], ['drumstick'], 'noun', 'countable', '饮食']
  ], 'thighs', ['leg', 'ham'], 'thigh 是大腿，calf 是小腿肚，knee 是膝盖。不要和 high 或 they 听混'),

  W('thin', 'adjective/verb', '/θɪn/', 'A1', ['CET4'], '薄的；瘦的；稀的；变薄', 'Not thick, not fat, or not dense; to make something less dense.', [
    ['薄的；细的', 'Having a small distance between surfaces, or a narrow shape.', '表面之间距离小，或形状细。', '反义 thick。', 'The ice is too thin to walk on.', '冰太薄，不能在上面走。', ['a thin layer', 'thin paper'], ['slim', 'fine'], 'adjective', '定语/表语', '通用'],
    ['瘦的；稀少的；稀薄的', 'Having little fat, or not dense.', '脂肪少，或不浓密。', '说人瘦时 thin 中性，skinny 偏瘦削。', 'The soup is too thin.', '这汤太稀了。', ['thin hair', 'a thin crowd'], ['sparse'], 'adjective', '定语/表语', '通用'],
    ['使变薄；使变稀', 'To make a liquid or a group less thick or less dense.', '使液体或群体变得更稀、更疏。', 'thin out 变稀疏。', 'Thin the paint with water.', '用水把颜料调稀。', ['thin out', 'thin the sauce'], ['dilute', 'weaken'], 'verb', '及物/不及物', '通用']
  ], 'thins~thinned~thinned~thinning', ['slim', 'dilute'], '双写 n：thinned / thinning。wear thin 变得不耐烦或磨薄。through thick and thin 不离不弃'),

  W('thing', 'noun', '/θɪŋ/', 'A1', ['CET4'], '东西；事情；局面', 'An object, an action, or a situation.', [
    ['东西；物品', 'An object that you do not name or cannot name exactly.', '不说出名字或无法确切命名的物体。', '最普通的指物词。', 'What is that thing on the table?', '桌子上的那个东西是什么？', ['a thing of', 'something'], ['object', 'item'], 'noun', 'countable', '通用'],
    ['事情；行为', 'An action, event, or idea.', '一个行为、事件或想法。', 'the thing is 用来引出要点。', 'The best thing is to wait.', '最好的做法是等待。', ['the thing is', 'a strange thing'], ['matter', 'affair'], 'noun', 'countable', '通用'],
    ['局面；形势（复数）', 'The general situation.', '总体情况。', '只用复数 things。', 'Things are getting better.', '情况正在好转。', ['how are things', 'things are'], ['situation', 'matters'], 'noun', 'countable', '口语']
  ], 'things', ['object', 'matter'], 'something、anything、nothing 由 thing 构成。not a thing 什么也没有。your things 你的随身物品'),

  W('think', 'verb/noun', '/θɪŋk/', 'A1', ['CET4'], '想；认为；思考；想法', 'To use the mind, or to have an opinion.', [
    ['认为；觉得', 'To have an opinion about something.', '对某事持有某种看法。', 'think that 后接从句。', 'I think she is right.', '我认为她是对的。', ['I think', 'think that'], ['believe', 'reckon'], 'verb', '及物/不及物', '通用'],
    ['想；思考', 'To use the mind to consider or to form ideas.', '用头脑去考虑或形成想法。', 'think about 考虑。', 'Think carefully before you answer.', '回答之前仔细想想。', ['think about', 'think of'], ['consider', 'reflect'], 'verb', '不及物', '通用'],
    ['想法；思考', 'An act of thinking, or an opinion.', '一次思考，或一个看法。', 'have a think 是英式口语。', 'I will have a think and call you.', '我考虑一下再给你打电话。', ['have a think', 'a new think'], ['thought', 'idea'], 'noun', 'countable', '口语']
  ], 'thinks~thought~thought~thinking', ['believe', 'consider'], '过去式和过去分词都是 thought。think of 想起、认为，think about 思考。名词 thought 比 think 正式'),

  W('third', 'number/noun', '/θɜːd/', 'A1', ['CET4'], '第三；三分之一', 'Next after the second; one of three equal parts.', [
    ['第三', 'Coming after the second in order.', '顺序上排在第二之后。', '序数词，前常加 the。', 'She finished in third place.', '她获得了第三名。', ['the third', 'third place'], ['3rd'], 'number', '', '数词'],
    ['三分之一', 'One of three equal parts of something.', '把某物平均分成三份中的一份。', '三分之一。用法可见 a third of。', 'A third of the class was absent.', '班上三分之一的人缺席。', ['a third of', 'two thirds'], ['fraction'], 'noun', 'countable', '数词']
  ], 'thirds', ['3rd', 'fraction'], 'two thirds 三分之二，动词可用复数。the third 第三。日期里 3rd 读 third。齿轮的 third gear 三挡'),

  W('thirst', 'noun/verb', '/θɜːst/', 'B1', ['CET4'], '渴；口渴；渴望', 'The feeling of needing to drink; a strong desire.', [
    ['渴；口渴', 'The feeling that you need to drink.', '需要喝水的感觉。', '不可数。quench your thirst 解渴。', 'The long walk gave me a thirst.', '走了很长的路，我口渴了。', ['quench your thirst', 'die of thirst'], ['drought'], 'noun', '不可数', '身体'],
    ['渴望', 'A strong wish for something.', '对某事物的强烈愿望。', '渴望。用法可见 thirst for。', 'She has a thirst for knowledge.', '她有求知欲。', ['a thirst for', 'thirst for power'], ['hunger', 'craving'], 'noun', 'countable', '书面'],
    ['渴望；热望', 'To want something very strongly.', '非常强烈地想要某物。', '动词多为书面语，thirst for。', 'They thirsted for freedom.', '他们渴望自由。', ['thirst for', 'thirst after'], ['crave', 'long'], 'verb', '不及物', '书面']
  ], 'thirsts~thirsted~thirsted~thirsting', ['hunger', 'craving'], 'thirsty 口渴的、渴望的。hunger 对食物，thirst 对水，比喻时两者都可表示渴望'),

  W('thirteen', 'number', '/ˌθɜːˈtiːn/', 'A1', ['CET4'], '十三', 'The number 13.', [
    ['十三', 'The number after twelve.', '十二之后的数。', '基数词。', 'There are thirteen chairs.', '有十三把椅子。', ['thirteen years old', 'number thirteen'], ['thirteenth'], 'number', '', '数词'],
    ['十三岁；十三号', 'Used for age, dates, and labels of this number.', '用于年龄、日期和这个数字的编号。', '序数词是 thirteenth。', 'She is thirteen.', '她十三岁。', ['at thirteen', 'page thirteen'], [], 'number', '', '数词']
  ], 'thirteens', ['thirteenth'], 'thirteen 重音常在第二音节，三十 thirty 重音在第一音节，听音时要注意。十几岁的数都以 -teen 结尾'),

  W('thirty', 'number', '/ˈθɜːti/', 'A1', ['CET4'], '三十', 'The number 30.', [
    ['三十', 'The number equal to three times ten.', '等于三乘十的数。', '基数词。', 'Thirty people came.', '来了三十个人。', ['thirty years', 'about thirty'], ['thirtieth'], 'number', '', '数词'],
    ['三十年代；三十多岁', 'The numbers or years from 30 to 39.', '从三十到三十九的数字或年份。', 'in your thirties 三十多岁。', 'She is in her thirties.', '她三十多岁。', ['in the thirties', 'the early thirties'], ['30s'], 'number', '', '数词']
  ], 'thirties', ['thirtieth'], 'thirty 重音在第一音节，与 thirteen 不同。the thirties 可指三十年代。序数词 thirtieth'),

  W('this', 'determiner/pronoun/adverb', '/ðɪs/', 'A1', ['CET4'], '这；这个；这样', 'Used to point to someone or something near, or to a degree.', [
    ['这；这个（限定词或代词）', 'Used to point to a person or thing near you, or just mentioned.', '用来指近处或刚提到的人或事物。', '复数 these。', 'This seat is free.', '这个座位空着。', ['this one', 'this morning'], ['that', 'these'], 'determiner', '', '语法'],
    ['这事；以下内容（代词）', 'Used to talk about something you are going to say or have just said.', '用来谈论将要说或刚说过的内容。', 'this is 常用于自我介绍。', 'This is what we decided.', '这就是我们决定的事。', ['this is', 'like this'], ['it'], 'pronoun', '', '语法'],
    ['这么；这样（程度）', 'To this degree.', '到这个程度。', '口语。', 'I did not expect the bag to be this heavy.', '我没想到包会这么重。', ['this big', 'this much'], ['so'], 'adverb', '', '口语']
  ], '', ['that', 'these'], '近处 this，远处 that。电话里 This is Lee 表示「我是 Lee」。this morning 可以说已经过去的今天上午'),

  W('thorn', 'noun', '/θɔːn/', 'C1', ['CET6'], '刺；荆棘', 'A sharp point that grows on a plant such as a rose.', [
    ['刺；棘', 'A sharp pointed part on the stem of a plant.', '植物茎上尖锐的突出部分。', '玫瑰等植物常见。', 'A thorn stuck in his finger.', '一根刺扎进了他的手指。', ['a rose thorn', 'sharp thorns'], ['prickle', 'spine'], 'noun', 'countable', '植物'],
    ['苦恼的根源；刺儿头', 'A person or thing that keeps causing trouble.', '不断惹麻烦的人或事。', 'a thorn in your side 眼中钉。', 'The rule is a thorn in the side of small shops.', '这条规矩是小店的一块心病。', ['a thorn in the side', 'thorn bush'], ['nuisance', 'irritant'], 'noun', 'countable', '比喻']
  ], 'thorns', ['prickle', 'spine'], 'thorny 多刺的，也比喻棘手的：a thorny problem。thorn 不是 horn「角」，也不是 torn「撕裂的」'),

  W('thorough', 'adjective', '/ˈθʌrə/', 'B2', ['CET4'], '彻底的；细致的；完全的', 'Done carefully and completely, missing nothing.', [
    ['彻底的；细致的', 'Careful and complete, covering every part.', '仔细而完整，顾到每一个部分。', '可形容人或工作。', 'She did a thorough check.', '她做了一次彻底的检查。', ['a thorough search', 'thorough research'], ['complete', 'careful'], 'adjective', '定语/表语', '通用'],
    ['完全的；十足的', 'Complete, used to stress degree.', '完全的，用来强调程度。', '可含贬义。', 'The event was a thorough success.', '这次活动是一次彻底的成功。', ['a thorough mess', 'thorough knowledge'], ['utter', 'total'], 'adjective', '定语', '通用']
  ], '', ['complete', 'careful'], '拼写是 thorough，不是 through 加 o 随便加。副词 thoroughly。thorough 读 /ˈθʌrə/，中间没有 /θruː/ 的长音'),

  W('those', 'determiner/pronoun', '/ðəʊz/', 'A1', ['CET4'], '那些', 'The plural of that.', [
    ['那些（限定词）', 'Used before a plural noun to point to people or things farther away.', '放在复数名词前，指较远的人或事物。', '与 these 相对。', 'Those houses are old.', '那些房子很旧。', ['those days', 'those people'], ['these', 'that'], 'determiner', '', '语法'],
    ['那些（代词）', 'Used alone for people or things farther away or already mentioned.', '单独使用，指较远或已经提到的人或事物。', 'those who 那些……的人。', 'Those are my shoes.', '那些是我的鞋。', ['those who', 'those are'], ['they'], 'pronoun', '', '语法']
  ], '', ['these', 'that'], 'that 的复数是 those。those who 后接复数意义的动词。不要和 this 的复数 these 用反'),

  W('though', 'conjunction/adverb', '/ðəʊ/', 'B1', ['CET4'], '虽然；尽管；不过', 'In spite of something; however.', [
    ['虽然；尽管', 'Used to introduce a fact that makes the main statement surprising.', '引出一个使主要说法显得意外的事实。', '可放在句首或句中，比 although 稍随意。', 'Though it was late, she kept working.', '虽然很晚了，她仍继续工作。', ['even though', 'though it'], ['although', 'while'], 'conjunction', '', '语法'],
    ['不过；可是', 'Used at the end or in the middle to add a contrasting remark.', '放在句末或句中，补充一个转折。', '副词用法，口语常见。', 'The room is small. It is bright, though.', '房间很小。不过很亮。', ['though', 'even though'], ['however', 'nevertheless'], 'adverb', '', '口语']
  ], '', ['although', 'however'], 'though 与 although 作连词时相近，although 更正式且通常不放句末。even though 语气更强。as though 好像。不要和 thought「想法」或 through「通过」写混'),

  W('thought', 'noun/verb', '/θɔːt/', 'A2', ['CET4'], '想法；思考；关心；认为（think 的过去式）', 'An idea or the act of thinking; the past form of think.', [
    ['想法；念头', 'Something that you think, an idea in the mind.', '脑子里的一个主意或念头。', '可数。', 'That is an interesting thought.', '那是个有意思的想法。', ['a sudden thought', 'share a thought'], ['idea', 'notion'], 'noun', 'countable', '通用'],
    ['思考；考虑；关心', 'The process of thinking, or care about someone.', '思考的过程，或对某人的关心。', '不可数。give thought to 考虑。', 'He gave no thought to the cost.', '他完全没考虑费用。', ['deep in thought', 'give thought to'], ['thinking', 'consideration'], 'noun', '不可数', '通用'],
    ['think 的过去式和过去分词', 'The past form of the verb think.', '动词 think 的过去式和过去分词。', '不是另一个动词。', 'I thought you were at home.', '我原以为你在家。', ['I thought', 'was thought'], ['believed', 'supposed'], 'verb', '及物', '语法']
  ],'thoughts', ['idea', 'thinking'], 'thought 本身已是过去式，不再加 -ed。thoughtful 体贴的、深思的。on second thought 经再三考虑（美式 thought，英式也作 thoughts）'),

  W('thousand', 'number/noun', '/ˈθaʊznd/', 'A1', ['CET4'], '一千；数千', 'The number 1000.', [
    ['一千', 'The number equal to ten times one hundred.', '等于一百的十倍的数。', '前面有具体数字时不加 s。', 'The town has two thousand people.', '这个镇有两千人。', ['one thousand', 'two thousand'], ['thousandth'], 'number', '', '数词'],
    ['数千；许许多多', 'A very large number, not an exact count.', '很大的数目，并非精确计数。', 'thousands of 后接复数名词。', 'Thousands of birds filled the sky.', '成千上万的鸟布满了天空。', ['thousands of', 'a thousand times'], ['multitude'], 'noun', 'countable', '数词']
  ], 'thousands',['thousandth', 'thousandfold'], 'two thousand 不加 s；thousands of 才加 s。a thousand 可省略 a 的场合很少，一般要保留。hundred、million 的用法相同'),

  W('thread', 'noun/verb', '/θred/', 'B1', ['CET4'], '线；线索；帖子；穿线', 'A thin strand of cotton; a connecting idea; to pass something through a narrow place.', [
    ['线；细丝', 'A long thin strand of cotton, silk, or similar material.', '棉、丝或类似材料的细长一根。', '用来缝纫。', 'She sewed it with black thread.', '她用黑线把它缝上。', ['a needle and thread', 'cotton thread'], ['yarn', 'strand'], 'noun', '可数/不可数', '生活'],
    ['线索；思路；帖子', 'An idea that connects parts of a story, or a chain of messages online.', '把故事各部分连起来的想法，或网上的一串留言。', 'lose the thread 跟不上思路。', 'I lost the thread of the argument.', '我跟不上论证的思路了。', ['lose the thread', 'a discussion thread'], ['theme', 'line'], 'noun', 'countable', '通用'],
    ['穿（针、线）；穿过', 'To pass a thread through a needle, or to move carefully through a narrow space.', '把线穿过针，或小心地穿过狭窄空间。', 'thread your way 挤过。', 'He threaded his way through the crowd.', '他挤过人群。', ['thread a needle', 'thread your way'], ['string', 'weave'], 'verb', '及物', '通用']
  ], 'threads~threaded~threaded~threading', ['yarn', 'strand'], 'hang by a thread 危在旦夕。thread 与 threat「威胁」只差一个字母，读音也不同：thread /θred/，threat /θret/'),

  W('threat', 'noun', '/θret/', 'B2', ['CET4'], '威胁；恐吓；凶兆', 'A statement that you will harm someone, or a person or thing likely to cause harm.', [
    ['威胁；恐吓', 'A statement that you will hurt or punish someone if they do not obey.', '声称若对方不服从就要伤害或惩罚的话。', '威胁；恐吓。用法可见 make a threat。', 'He made a threat against the witness.', '他对证人发出了威胁。', ['make a threat', 'a death threat'], ['warning', 'menace'], 'noun', 'countable', '通用'],
    ['构成威胁的人或事物；凶兆', 'A person or thing likely to cause trouble or danger.', '可能带来麻烦或危险的人或事物。', '构成威胁的人或事物；凶兆。用法可见 a threat to。', 'Pollution is a threat to health.', '污染对健康构成威胁。', ['a threat to', 'pose a threat'], ['danger', 'risk'], 'noun', '可数/不可数', '通用']
  ], 'threats', ['danger', 'menace'], 'threaten 威胁。under threat 受到威胁。threat 不是 thread。empty threat 虚张声势的威胁'),

  W('three', 'number', '/θriː/', 'A1', ['CET4'], '三；三个', 'The number 3.', [
    ['三；三个', 'The number after two.', '二之后的数。', '基数词。', 'They have three children.', '他们有三个孩子。', ['three times', 'three of them'], ['third'], 'number', '', '数词'],
    ['三个人或三件东西', 'A group of three people or things.', '由三个人或三件东西组成的一组。', '可作名词。', 'The three arrived together.', '这三个人一起到了。', ['the three', 'in threes'], ['trio'], 'noun', 'countable', '数词']
  ], 'threes', ['third'], '序数词 third。three times 三次或三倍。at three 在三点。thirteen 是十三，thirty 是三十，不要看串'),

  W('threshold', 'noun', '/ˈθreʃhəʊld/', 'C1', ['CET6'], '门槛；开端；阈值', 'The floor at a doorway, the start of something, or a level at which something begins.', [
    ['门槛；门口', 'The piece of floor or stone at the bottom of a doorway.', '门口底部的地板或石条。', '跨过它就进入室内。', 'She paused on the threshold.', '她在门槛上停了一下。', ['on the threshold', 'the door threshold'], ['doorstep', 'entrance'], 'noun', 'countable', '建筑'],
    ['开端；起点', 'The point at which something starts.', '某事开始的时刻。', '开端；起点。用法可见 on the threshold of。', 'He is on the threshold of a new career.', '他正站在新事业的起点上。', ['on the threshold of', 'at the threshold'], ['brink', 'start'], 'noun', 'countable', '书面'],
    ['阈值；下限', 'The level at which a change or a rule starts to apply.', '某种变化或规则开始生效的水平。', '科学、经济和政策用语。', 'Income below this threshold is not taxed.', '低于这一阈值的收入不征税。', ['pain threshold', 'tax threshold'], ['limit', 'level'], 'noun', 'countable', '科学']
  ], 'thresholds', ['brink', 'limit'], '注意拼写：thresh-old，不是 threshhold。pain threshold 痛阈。on the threshold of 即将开始'),

  W('thrift', 'noun', '/θrɪft/', 'C1', ['CET6'], '节俭；节约', 'The habit of using money and goods carefully and not wasting them.', [
    ['节俭；节约', 'Careful use of money so that nothing is wasted.', '小心使用金钱、避免浪费。', '不可数，褒义。', 'Thrift helped the family through hard years.', '节俭帮助这家人度过了艰难岁月。', ['thrift and hard work', 'practise thrift'], ['economy', 'frugality'], 'noun', '不可数', '经济'],
    ['节俭商店（美式 thrift shop 的简称语境）', 'Saving as a way of life, including buying used goods.', '作为一种生活方式的节省，包括购买旧物。', 'thrift shop 或 thrift store 是二手慈善店。', 'She buys coats at a thrift shop.', '她在二手店买外套。', ['a thrift shop', 'a thrift store'], ['saving'], 'noun', '不可数', '生活']
  ], '', ['economy', 'frugality'], 'thrifty 节俭的。thrift 是美德意义上的节约，stingy 是吝啬，不要混成贬义。英式也说 charity shop'),

  W('thrill', 'noun/verb', '/θrɪl/', 'B2', ['CET6'], '激动；震颤；使兴奋', 'A sudden feeling of excitement; to make someone feel that way.', [
    ['激动；兴奋感', 'A sudden strong feeling of excitement and pleasure.', '突然强烈的兴奋和愉快。', '激动；兴奋感。用法可见 a thrill of。', 'The ride gave me a thrill.', '这次骑行让我很刺激。', ['a thrill of', 'the thrill of'], ['excitement', 'rush'], 'noun', 'countable', '情感'],
    ['使非常兴奋；使震颤', 'To make someone feel sudden excitement.', '使某人感到突然的兴奋。', 'be thrilled 非常高兴。', 'The news thrilled the whole team.', '这个消息让全队兴奋不已。', ['be thrilled', 'thrill to'], ['excite', 'delight'], 'verb', '及物', '通用']
  ], 'thrills~thrilled~thrilled~thrilling', ['excitement', 'excite'], 'thrilling 令人兴奋的；thrilled 感到兴奋的，后接人。thriller 惊险小说或电影。不要和 trill「颤音」混淆'),

  W('thrive', 'verb', '/θraɪv/', 'B2', ['CET4'], '兴旺；茁壮成长；蓬勃发展', 'To grow strong and successful.', [
    ['兴旺；繁荣', 'To become very successful and healthy as a business or a group.', '作为企业或群体变得非常成功、健康。', 'thrive on 靠……而旺盛。', 'Small shops thrive in this market.', '小店在这个市场里生意兴旺。', ['thrive on', 'thrive in'], ['flourish', 'prosper'], 'verb', '不及物', '经济'],
    ['茁壮成长', 'To grow well, of a plant, animal, or person.', '植物、动物或人生长良好。', '强调生机，不只是生存。', 'These plants thrive in wet soil.', '这些植物在湿土里长得很旺。', ['thrive in', 'children thrive'], ['grow', 'bloom'], 'verb', '不及物', '生物']
  ], 'thrives~thrived~thrived~thriving', ['flourish', 'prosper'], '较旧的过去式是 throve，过去分词 thriven，现代英语用 thrived。thrive 是不及物动词，不说 thrive a company'),

  W('throat', 'noun', '/θrəʊt/', 'A2', ['CET4'], '喉咙；咽喉；喉部', 'The passage in the neck that food and air pass through.', [
    ['喉咙；咽喉', 'The part inside the neck where food and air go.', '脖子内部食物和空气经过的部位。', 'sore throat 嗓子疼。', 'I have a sore throat.', '我嗓子疼。', ['a sore throat', 'clear your throat'], ['neck', 'pharynx'], 'noun', 'countable', '身体'],
    ['喉部；入口窄道', 'The front of the neck, or a narrow entrance.', '脖子的前部，或狭窄的入口。', '比喻可见 the throat of a valley。', 'He grabbed the man by the throat.', '他抓住了那人的喉咙。', ['by the throat', 'the throat of'], ['gullet'], 'noun', 'countable', '通用']
  ], 'throats', ['neck', 'gullet'], 'throat 是体内通道和脖子前部，neck 是整段脖子。jump down sb throat 是口语「突然严厉斥责」，写作时说明是习语'),

  W('throne', 'noun', '/θrəʊn/', 'C1', ['CET6'], '王座；王位；王权', 'The special chair of a king or queen, or the power of that position.', [
    ['王座；宝座', 'A special chair used by a king or queen.', '国王或女王使用的专用座椅。', '实物。', 'The throne stands in the great hall.', '王座设在大殿里。', ['sit on the throne', 'a golden throne'], ['seat', 'chair'], 'noun', 'countable', '历史'],
    ['王位；王权', 'The position and power of a king or queen.', '国王或女王的地位与权力。', 'come to the throne 即位。', 'She came to the throne in 1952.', '她于 1952 年即位。', ['come to the throne', 'the throne'], ['crown', 'monarchy'], 'noun', '不可数', '政治']
  ], 'thrones', ['crown', 'seat'], 'the throne 常代表王权而不只是椅子。throne 与 thrown（throw 的过去分词）同音，拼写不同'),

  W('through', 'preposition/adverb/adjective', '/θruː/', 'A1', ['CET4'], '穿过；通过；自始至终；接通的', 'From one side to the other; from start to finish; connected.', [
    ['穿过；通过', 'Going into one side and out of the other.', '从一边进去，从另一边出来。', '可用于空间。', 'We walked through the park.', '我们步行穿过公园。', ['through the door', 'go through'], ['across', 'via'], 'preposition', '', '通用'],
    ['自始至终；由于', 'From the beginning to the end, or because of.', '从开始到结束，或因为。', 'through 可表原因，较正式。', 'She stayed calm through the crisis.', '危机期间她一直保持冷静。', ['all through', 'through hard work'], ['throughout', 'during'], 'preposition', '', '通用'],
    ['通过；完成；接通', 'Used to say that a journey, a task, or a phone connection is finished or open.', '表示路程、任务已完成，或电话已接通。', '副词。be through with 做完或不再打交道。', 'Are you through with the paper?', '报纸你看完了吗？', ['be through', 'put sb through'], ['done', 'finished'], 'adverb', '', '通用'],
    ['直达的；贯穿的', 'Going from one end or place to another without a stop or a change.', '从一端到另一端，中途不停或不换。', '作定语，如直达车。', 'We took a through train.', '我们坐了直达火车。', ['a through train', 'a through road'], ['direct', 'non-stop'], 'adjective', '定语', '交通']
  ], '', ['across', 'via'], 'through 与 thorough「彻底的」拼写不同。英式也作 thru 的非正式缩写，考试不要用 thru。go through 还可指经历或仔细查看'),

  W('throughout', 'preposition/adverb', '/θruːˈaʊt/', 'B1', ['CET4'], '遍及；贯穿；自始至终', 'In every part of a place, or during the whole of a period.', [
    ['遍及；在各处', 'In every part of a place or a group.', '在一个地方或一个群体的每个部分。', '强调没有遗漏。', 'The news spread throughout the country.', '消息传遍了全国。', ['throughout the country', 'throughout the world'], ['across', 'all over'], 'preposition', '', '通用'],
    ['自始至终', 'During the whole of a period of time.', '在一整段时间里。', '也可单独作副词。', 'It rained throughout the night.', '雨下了一整夜。', ['throughout the year', 'throughout'], ['during', 'all through'], 'preposition', '', '通用']
  ], '', ['across', 'during'], 'throughout 比 through 更强调「全部、到处」。后面直接加名词，不加 of。副词用法：The house is painted white throughout.'),

  W('throw', 'verb/noun', '/θrəʊ/', 'A1', ['CET4'], '扔；投；抛；使陷入；投掷', 'To send something through the air with the hand; a throw of that kind.', [
    ['扔；投；抛', 'To send an object through the air by a sudden movement of the arm.', '用手臂突然一动，把物体送到空中。', '不规则：threw, thrown。', 'Throw the ball to me.', '把球扔给我。', ['throw away', 'throw sth to'], ['toss', 'hurl'], 'verb', '及物', '通用'],
    ['使陷入；猛地移动', 'To put someone suddenly into a state, or to move the body suddenly.', '突然使某人进入某种状态，或突然移动身体。', 'throw sb into 使陷入。', 'The news threw her into panic.', '这个消息使她陷入恐慌。', ['throw sb into', 'throw a party'], ['cast', 'put'], 'verb', '及物', '通用'],
    ['一投；投掷距离', 'An act of throwing, or the distance something is thrown.', '投一次的动作，或投出的距离。', '名词。', 'It is your throw.', '轮到你投了。', ['a stone throw', 'within a throw'], [], 'noun', 'countable', '通用']
  ], 'throws~threw~thrown~throwing', ['toss', 'hurl'], '过去式 threw，过去分词 thrown，与 throne 同音的是 thrown。throw away 扔掉。throw a party 举办聚会是固定搭配'),

  W('thrust', 'verb/noun', '/θrʌst/', 'C1', ['CET4'], '猛推；刺；插；推力；要点', 'To push suddenly and hard; a hard push, or the main point.', [
    ['猛推；刺；插入', 'To push something suddenly and with force.', '突然用力把某物推出去或插进去。', '过去式和过去分词仍是 thrust。', 'He thrust the door open.', '他猛地把门推开。', ['thrust sth into', 'thrust open'], ['push', 'shove'], 'verb', '及物', '通用'],
    ['推力；挺进', 'A strong push, or the force that drives a plane or rocket forward.', '有力的一推，或推动飞机、火箭前进的力。', '工程和军事都用。', 'The engine provides forward thrust.', '引擎提供向前的推力。', ['forward thrust', 'a thrust of'], ['drive'], 'noun', '可数/不可数', '物理'],
    ['要点；主旨', 'The main idea or purpose of what someone says.', '某人所说内容的主要意思或目的。', '要点；主旨。用法可见 the thrust of。', 'The thrust of the talk was simple.', '这次讲话的要点很简单。', ['the thrust of', 'main thrust'], ['gist', 'point'], 'noun', '不可数', '书面']
  ], 'thrusts~thrust~thrust~thrusting', ['push', 'shove'], 'thrust 的三种动词形式相同。不要加 -ed。thrust on 强加于人。与 trust「信任」只差一个字母'),

  W('thumb', 'noun/verb', '/θʌm/', 'B1', ['CET4'], '拇指；用拇指翻；示意搭车', 'The short thick finger; to turn pages with it, or to ask for a free ride.', [
    ['拇指', 'The short thick finger that stands apart from the other four.', '与其余四指分开的短而粗的手指。', '人体词，b 不发音。', 'She held the coin between thumb and finger.', '她用拇指和另一指捏着硬币。', ['thumb and finger', 'a sore thumb'], ['digit', 'finger'], 'noun', 'countable', '身体'],
    ['用拇指翻；翘拇指请求搭车', 'To turn pages with the thumb, or to signal for a free ride.', '用拇指翻页，或打手势请求免费搭车。', 'thumb a lift 或 thumb a ride。', 'They thumbed a lift to the next town.', '他们搭便车去了下一个镇。', ['thumb a lift', 'thumb through'], ['hitch', 'leaf'], 'verb', '及物/不及物', '口语']
  ], 'thumbs~thumbed~thumbed~thumbing', ['finger', 'hitch'], 'b 不发音。rule of thumb 经验法则。be all thumbs 笨手笨脚。thumbs up 表示赞成。under sb thumb 受某人控制'),

  W('thunder', 'noun/verb', '/ˈθʌndə(r)/', 'B1', ['CET4'], '雷；雷声；轰鸣；怒喝', 'The loud noise after lightning; to make that noise or to shout.', [
    ['雷；雷声', 'The loud noise that follows a flash of lightning.', '闪电之后的巨大声响。', '不可数。', 'Thunder rolled across the valley.', '雷声滚过山谷。', ['thunder and lightning', 'a clap of thunder'], ['rumble', 'storm'], 'noun', '不可数', '自然'],
    ['轰鸣；怒吼声', 'A loud deep noise like thunder.', '像雷一样低沉响亮的声音。', '可比喻掌声或车声。', 'The thunder of the falls filled the air.', '瀑布的轰鸣充满了空气。', ['the thunder of', 'thunderous applause'], ['roar', 'boom'], 'noun', '不可数', '通用'],
    ['打雷；轰鸣；大声斥责', 'To make a sound like thunder, or to shout angrily.', '发出雷鸣般的声音，或愤怒地大声说。', 'thunder against 强烈谴责。', 'Guns thundered in the distance.', '远处炮声隆隆。', ['thunder against', 'thunder past'], [], 'verb', '不及物', '通用']
  ], 'thunders~thundered~thundered~thundering', ['rumble', 'roar'], 'thunderstorm 雷暴。steal sb thunder 抢某人的风头。形容词 thunderous。雷声 thunder，闪电 lightning'),

  W('Thursday', 'noun', '/ˈθɜːzdeɪ/', 'A1', ['CET4'], '星期四', 'The day of the week after Wednesday and before Friday.', [
    ['星期四', 'The fourth day of the working week in many countries, after Wednesday.', '星期三之后、星期五之前的那一天。', '专名，要大写。', 'The meeting is on Thursday.', '会议在星期四。', ['on Thursday', 'Thursday morning'], ['weekday'], 'noun', 'countable', '时间'],
    ['每个星期四；某个星期四', 'A particular Thursday, or Thursdays in general.', '具体的某一个星期四，或泛指星期四。', '复数 Thursdays。', 'She visits on Thursdays.', '她每星期四来访。', ['on Thursdays', 'last Thursday'], [], 'noun', 'countable', '时间']
  ], 'Thursdays', ['weekday'], '大写 Thursday。on Thursday 在星期四，不加冠词。美式日期说法仍用 Thursday。Thanksgiving 在美国是某个星期四'),

  W('thus', 'adverb', '/ðʌs/', 'B2', ['CET4'], '因此；从而；如此', 'As a result; in this way.', [
    ['因此；从而', 'As a result of what has just been said.', '作为刚说过的内容的结果。', '书面语，相当于 therefore。', 'The road was blocked and thus we walked.', '路被堵住了，因此我们步行。', ['and thus', 'thus far'], ['therefore', 'hence'], 'adverb', '', '书面'],
    ['如此；这样', 'In this way.', '用这种方式。', 'thus 放在分词前很常见。', 'She described the plan, thus making it clear.', '她描述了计划，这样就说清楚了。', ['thus making', 'thus far'], ['so', 'thereby'], 'adverb', '', '书面']
  ], '', ['therefore', 'hence'], 'thus far 到目前为止。thus 比 so 正式。thus 不是 this。不要在口语对话里堆砌 thus'),

  W('tick', 'noun/verb', '/tɪk/', 'B1', ['CET4'], '滴答声；勾号；片刻；蜱；打勾', 'A short light sound, a check mark, a moment, or a small biting animal; to make that mark or sound.', [
    ['滴答声；打勾', 'A short repeated sound of a clock, or a mark showing that something is correct.', '钟表短而重复的声音，或表示正确的记号。', '英式 tick 等于美式 check mark。', 'Put a tick in the box.', '在方框里打个勾。', ['a tick in the box', 'the tick of a clock'], ['click', 'mark'], 'noun', 'countable', '通用'],
    ['片刻；蜱', 'A very short time, or a small animal that bites and sucks blood.', '极短的时间，或叮咬吸血的小动物。', 'in a tick 是英式口语「马上」。', 'I will be there in a tick.', '我马上就到。', ['in a tick', 'a tick bite'], ['moment', 'mite'], 'noun', 'countable', '通用'],
    ['发出滴答声；打勾；运作', 'To make short sounds, to mark with a tick, or to work steadily.', '发出短促的声音，打上勾，或稳定地运转。', 'what makes sb tick 是什么驱动某人。', 'Tick the answers that apply.', '在适用的答案上打勾。', ['tick a box', 'tick away'], ['check'], 'verb', '及物/不及物', '通用']
  ], 'ticks~ticked~ticked~ticking', ['check', 'click'], '英式 tick the box，美式 check the box。tick off 英式可指斥责，美式可指列出或使生气。蜱虫义在医学阅读中会出现'),

  W('ticket', 'noun/verb', '/ˈtɪkɪt/', 'A1', ['CET4'], '票；券；罚单；标签；开罚单', 'A piece of paper that allows travel or entry, or a notice of a fine.', [
    ['票；入场券；车票', 'A printed piece of paper that lets you travel or enter.', '允许你乘车或入场的印刷纸片。', '可数。', 'I bought a ticket for the concert.', '我买了一张音乐会的票。', ['a train ticket', 'book a ticket'], ['pass', 'voucher'], 'noun', 'countable', '交通'],
    ['罚单；标签；候选人名单', 'A notice of a fine, a label, or a list of candidates.', '罚款通知、标签，或候选人名单。', '美式 parking ticket 停车罚单。', 'He got a ticket for speeding.', '他因超速收到一张罚单。', ['a parking ticket', 'a price ticket'], ['fine', 'label'], 'noun', 'countable', '通用'],
    ['售票给；开罚单', 'To give someone a ticket for travel or for breaking a rule.', '发给某人车船票，或因违规开出罚单。', '动词。', 'Police ticketed twenty drivers.', '警察给二十名司机开了罚单。', ['be ticketed', 'ticket sb for'], ['book'], 'verb', '及物', '通用']
  ], 'tickets~ticketed~ticketed~ticketing', ['pass', 'fine'], 'ticket 是票本身，fare 是票价。return ticket 英式往返票，美式 round-trip ticket。just the ticket 正合适，是口语'),

  W('tickle', 'verb/noun', '/ˈtɪkl/', 'C1', ['CET6'], '挠痒；使发痒；使高兴；痒感', 'To touch skin lightly so that it causes laughter; that feeling.', [
    ['挠痒；使发痒', 'To touch a part of the body lightly so that it itches or causes laughter.', '轻轻触摸身体某部，使其发痒或发笑。', '挠痒；使发痒。用法可见 tickle sb。', 'She tickled the feet of the baby and he laughed.', '她挠了挠宝宝的脚，他笑了。', ['tickle sb', 'tickle the feet'], ['scratch', 'touch'], 'verb', '及物', '生活'],
    ['使高兴；投合', 'To amuse or please someone.', '使某人觉得有趣或高兴。', 'be tickled 很开心。', 'The joke tickled the audience.', '这个笑话把观众逗乐了。', ['be tickled', 'tickle sb fancy'], ['amuse', 'please'], 'verb', '及物', '口语'],
    ['痒感；挠痒', 'A slightly uncomfortable feeling on the skin, or an act of tickling.', '皮肤上轻微不舒服的感觉，或挠痒的动作。', '名词。', 'I have a tickle in my throat.', '我喉咙有点痒。', ['a tickle in the throat', 'give sb a tickle'], ['itch', 'tingle'], 'noun', 'countable', '身体']
  ], 'tickles~tickled~tickled~tickling', ['amuse', 'itch'], 'ticklish 怕痒的，也比喻棘手。tickle sb fancy 正合某人的心意。不要和 tackle 或 tick 混'),

  W('tide', 'noun', '/taɪd/', 'B2', ['CET4'], '潮汐；潮水；潮流；趋势', 'The regular rise and fall of the sea, or a trend of opinion.', [
    ['潮；潮汐', 'The regular rise and fall of the sea caused by the moon and the sun.', '由月球和太阳引起的海水有规律的涨落。', 'high tide 高潮，low tide 低潮。', 'We left the beach at high tide.', '我们在高潮时离开了海滩。', ['high tide', 'low tide'], ['current', 'ebb'], 'noun', '可数/不可数', '地理'],
    ['潮流；趋势；情绪浪潮', 'A general tendency in events or feelings.', '事件或情绪的总体趋向。', '潮流；趋势；情绪浪潮。用法可见 the tide of。', 'The tide of opinion has turned.', '舆论的潮流已经转变。', ['the tide of', 'turn the tide'], ['trend'], 'noun', 'countable', '比喻']
  ], 'tides', ['current', 'trend'], 'tidal 潮汐的。tide sb over 帮某人渡过难关。tide 不是 tied（tie 的过去式），也不是 tidy'),

  W('tidy', 'adjective/verb', '/ˈtaɪdi/', 'A2', ['CET4'], '整洁的；爱整齐的；整理；相当大的', 'Neat and in order; to make a place neat.', [
    ['整洁的；有条理的', 'Arranged neatly, with everything in its place.', '安排得整齐，每样东西都在应在的位置。', '可形容房间或人。', 'Her desk is always tidy.', '她的书桌总是很整齐。', ['a tidy room', 'neat and tidy'], ['neat', 'orderly'], 'adjective', '定语/表语', '生活'],
    ['整理；使整洁', 'To make a place or a group of things neat.', '使地方或一组东西变得整齐。', 'tidy up 收拾。', 'Please tidy your room.', '请把你的房间整理一下。', ['tidy up', 'tidy away'], ['neaten', 'clear'], 'verb', '及物', '生活'],
    ['相当大的（金额）', 'Fairly large, especially of a sum of money.', '相当大的，尤指一笔钱。', '英式口语 a tidy sum。', 'The repair cost a tidy sum.', '这次修理花了一大笔钱。', ['a tidy sum', 'a tidy profit'], ['considerable', 'sizeable'], 'adjective', '定语', '口语']
  ], 'tidies~tidied~tidied~tidying', ['neat', 'neaten'], '比较级 tidier，最高级 tidiest。tidy 作动词时 y 变 i：tidies / tidied。反义 untidy'),

  W('tie', 'verb/noun', '/taɪ/', 'A2', ['CET4'], '系；扎；领带；平局；纽带；束缚', 'To fasten with a string or rope; a necktie; an equal score; a connection.', [
    ['系；捆；扎', 'To fasten something with rope, string, or a lace.', '用绳子、线或鞋带把东西固定住。', '过去式 tied，现在分词 tying。', 'Tie your shoes before you run.', '跑步前把鞋带系好。', ['tie up', 'tie sth to'], ['bind', 'fasten'], 'verb', '及物', '通用'],
    ['打成平局', 'To finish with the same score as another person or team.', '与另一个人或队以相同比分结束。', '打成平局。用法可见 tie with。', 'The two teams tied.', '两队打成平局。', ['tie with', 'tie the score'], ['draw', 'equal'], 'verb', '及物/不及物', '体育'],
    ['领带；平局；纽带；束缚', 'A necktie, an equal result, a connection, or something that limits freedom.', '领带、相同的结果、联系，或限制自由的事物。', 'family ties 亲情纽带。', 'He wore a red tie.', '他打了一条红领带。', ['a silk tie', 'family ties'], ['necktie', 'bond'], 'noun', 'countable', '通用']
  ], 'ties~tied~tied~tying', ['bind', 'bond'], '现在分词是 tying，不是 tieing。tie up 捆住，也可指占用资金或时间。the game ended in a tie 比赛以平局结束'),

  W('tiger', 'noun', '/ˈtaɪɡə(r)/', 'A2', ['CET4'], '老虎；凶悍的人', 'A large wild cat with orange fur and black stripes.', [
    ['虎；老虎', 'A large strong wild cat with a yellow-orange coat and black stripes.', '毛色黄橙、带黑色条纹的大型猛兽。', '亚洲的大型猫科动物。', 'A tiger crossed the path.', '一只老虎穿过了小路。', ['a tiger cub', 'tiger stripes'], ['cat', 'predator'], 'noun', 'countable', '动物'],
    ['凶猛的人；劲敌', 'A person who is fierce or very strong in competition.', '凶猛的人，或竞争中非常强的人。', '比喻。paper tiger 纸老虎。', 'On the field he is a tiger.', '在场上他非常勇猛。', ['a paper tiger', 'a tiger economy'], ['fighter', 'lion'], 'noun', 'countable', '比喻']
  ], 'tigers', ['lion', 'cat'], '雌虎 tigress 现已较少强调，可以说 female tiger。tiger 与 tight 形近。paper tiger 指外强中干'),

  W('tight', 'adjective/adverb', '/taɪt/', 'B1', ['CET4'], '紧的；严格的；紧身的；紧紧地', 'Fixed firmly, with little space; strictly; in a firm way.', [
    ['紧的；牢固的；紧身的', 'Held or fitting very closely, with little room to move.', '固定得很牢或贴得很近，几乎没有活动余地。', '反义 loose。', 'These shoes are too tight.', '这双鞋太紧了。', ['a tight fit', 'tight clothes'], ['firm', 'close'], 'adjective', '定语/表语', '通用'],
    ['严格的；紧张的；手头紧的', 'Strict, with little time or money to spare, or tense.', '严格的，时间或金钱所剩无几的，或气氛紧张的。', 'a tight budget 预算很紧。', 'Money is tight this month.', '这个月手头很紧。', ['a tight schedule', 'a tight budget'], ['strict', 'scarce'], 'adjective', '定语/表语', '通用'],
    ['紧紧地；牢固地', 'Firmly and closely.', '又牢又紧地。', '副词，常与 hold、shut 连用。', 'Hold tight to the rail.', '抓紧栏杆。', ['hold tight', 'sit tight'], ['firmly', 'fast'], 'adverb', '', '通用']
  ], '', ['firm', 'strict'], '副词也可用 tightly，tight 作副词多在固定搭配里。tighten 使变紧。tight 不是 tide。in a tight spot 处境困难'),

  W('tile', 'noun/verb', '/taɪl/', 'B2', ['CET6'], '瓦；瓷砖；贴砖；铺瓦', 'A flat piece of baked clay used to cover roofs, floors, or walls.', [
    ['瓦；瓷砖；地砖', 'A flat, usually square piece of clay, stone, or other material used as a covering.', '用来覆盖表面的扁平、通常呈方形的陶、石或其他材料片。', '屋顶、地面、墙面都用。', 'One tile on the roof is broken.', '屋顶上有一块瓦破了。', ['floor tiles', 'a roof tile'], ['slab', 'brick'], 'noun', 'countable', '建筑'],
    ['贴砖；铺瓦', 'To cover a surface with tiles.', '用砖或瓦覆盖表面。', 'tiled 铺了砖的。', 'They tiled the bathroom wall.', '他们给浴室墙面贴了瓷砖。', ['tile a roof', 'tile the floor'], ['pave', 'cover'], 'verb', '及物', '建筑']
  ], 'tiles~tiled~tiled~tiling', ['brick', 'pave'], 'tiling 既是现在分词，也可作名词「瓷砖铺面」。tile 不是 tide，也不是 title「标题」。a tiled floor 瓷砖地面'),

  W('till', 'preposition/conjunction/verb/noun', '/tɪl/', 'A2', ['CET4'], '直到；耕种；收银抽屉', 'Up to a time; to prepare land for crops; a drawer for money in a shop.', [
    ['直到（某时）', 'Up to a particular time.', '一直到某个时刻。', '与 until 同义，till 更口语，不用于句首较稳妥。', 'Wait till six.', '等到六点。', ['wait till', 'till now'], ['until', 'up to'], 'preposition', '', '通用'],
    ['直到……为止（连词）', 'Up to the time when something happens.', '一直到某事发生的时候。', '后接从句。', 'Stay here till I come back.', '待在这里直到我回来。', ['till then', 'not till'], ['before'], 'conjunction', '', '通用'],
    ['耕；耕作', 'To prepare land for growing crops.', '整理土地以便种植作物。', '农业用词。', 'Farmers till the fields in spring.', '农民在春天耕地。', ['till the soil', 'till the land'], ['plough', 'cultivate'], 'verb', '及物', '农业'],
    ['收银盘；钱箱', 'A drawer where money is kept in a shop.', '商店里放钱的抽屉。', '英式。美式多用 cash register 指整台机器。', 'She put the coins in the till.', '她把硬币放进收银抽屉。', ['at the till', 'the shop till'], ['cash drawer', 'register'], 'noun', 'countable', '商业']
  ], 'tills~tilled~tilled~tilling', ['until', 'cultivate'], 'till 与 until 意思相同，正式写作和句首多用 until。till 不是 tile。耕作义的名词是 tillage，较少考'),

  W('tilt', 'verb/noun', '/tɪlt/', 'C1', ['CET6'], '倾斜；使倾斜；斜度；偏向', 'To move so that one side is higher; a slope or a bias.', [
    ['（使）倾斜', 'To move or make something move into a sloping position.', '移动或使某物移动到倾斜的位置。', 'tilt your head 歪头。', 'She tilted her head to one side.', '她把头歪向一边。', ['tilt your head', 'tilt back'], ['tip', 'lean'], 'verb', '及物/不及物', '通用'],
    ['倾斜度；偏向', 'A sloping position, or a preference that is not fully balanced.', '倾斜的姿势，或不完全中立的偏向。', 'at a tilt 倾斜着。', 'The poll showed a tilt toward change.', '民意调查显示出偏向变革的趋势。', ['at a tilt', 'a tilt toward'], ['slope', 'bias'], 'noun', '可数/不可数', '通用']
  ], 'tilts~tilted~tilted~tilting', ['tip', 'lean'], 'at full tilt 全速地。tilt at windmills 同假想的敌人作战，出自堂吉诃德。tilt 不是 title');
  /* ===== T 批次 1（缺口 tab ~ tamper）：31 条 = 14 单词 + 17 短语，按队列顺序 ===== */

  W('tab', 'noun', '/tæb/', '', [], '标签；垂片；赊账；选项卡', 'A small flap or label fixed to something, or a screen page opened beside the current one.', [
    ['（门、抽屉的）垂片；搭扣', 'A small piece of wood, metal or plastic that sticks out from a door or a drawer so that it can be opened.', '从门或抽屉上突出的、用来拉开它的一小块木片、金属片或塑料片。', '可数，本义指便于拉开的小片，钥匙牌 key tab 也由此而来。', 'Pull the tab to open the shallow drawer.', '拉动这片搭扣就能拉开那个浅抽屉。', ['a drawer tab'], ['flap'], 'noun', 'countable', '家居'],
    ['标签；价签', 'A small piece of paper or card fixed to an object to show what it is or what it costs.', '贴在物品上标明其名称或价格的小纸片或卡片。', '可数，口语与商业用语。', 'Every box on the shelf had a printed tab.', '货架上每个箱子都贴了印刷标签。', ['a price tab'], [], 'noun', 'countable', '商务'],
    ['赊账；账单', 'A bill for food or drinks that you ask to settle later.', '吃喝之后要求稍后结账的账单。', '可数，美式口语，常见 open a tab、pick up the tab。', 'He opened a tab at the bar that night.', '那天晚上他在酒吧开了一个赊账账户。', ['open a tab', 'pick up the tab'], [], 'noun', 'countable', '饮食'],
    ['（计算机）选项卡；制表键', 'A part of a screen that lets you move between pages, or the key that moves the cursor forward.', '屏幕上用来在页面之间切换的区域，或使光标向前移动的按键。', '可数，计算机与键盘用语，Tab 键由此得名。', 'Open a new tab to look for the map.', '新开一个选项卡来查找这张地图。', ['open a tab', 'press tab'], [], 'noun', 'countable', '工具'],
  ], 'tabs', [], 'brief ←?，自扫根：库内无 tab 的语义直连词根（-b 不在 §5.4 清单），留空；近义 flap 垂片、拍打（队列原样，置首义项恰好一次）');

  W('tableland', 'noun', '/ˈteɪblænd/', 'A1', [], '台地；平顶高地', 'A large area of high land with a flat top.', [
    ['台地；高原', 'A wide area of high ground whose surface is level from one edge to the other.', '顶面从一边到另一边都很平坦的一大片高地。', '可数，地理与地质用语，意思同 plateau，比它更形象。', 'The tableland rose above the wide river plain.', '这片台地耸立在宽阔的河谷平原之上。', ['a wide tableland'], ['plateau'], 'noun', 'countable', '地理'],
  ], 'tablelands', ['plateau'], 'brief ←?，自扫根：复合词 table + land，首成分 table A1 桌子（自扫 author_t1.js 第 4 参），语义直连（台地即顶面平坦如桌面的高地），A1 继承（判断项：规范 §5.3 复合词取首成分，备注披露）；家族/近义 plateau 高原（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('tabloid', 'noun', '/ˈtæblɔɪd/', '', [], '小报；通俗简本', 'A small newspaper full of pictures, or a short simple form of something.', [
    ['小报；通俗报纸', 'A small newspaper with short articles and many pictures, often about famous people.', '文章短、图片多、常报道名人消息的小开本报纸。', '可数，常含贬义，强调耸人听闻。', 'He bought a tabloid for the train journey.', '他买了一份小报在火车上看。', ['a tabloid newspaper', 'tabloid press'], ['rag'], 'noun', 'countable', '媒体'],
    ['简明版本；通俗化形式', 'A short and simple account of something that is easy to take in.', '对某事物简短而易懂的表述。', '可数，常见 a tabloid version of。', 'The report gives a tabloid version of the theory.', '这份报告给出了该理论的通俗版本。', ['a tabloid version'], [], 'noun', 'countable', '书面'],
  ], 'tabloids', [], 'brief ←?，自扫根：库内无 tabloid 的语义直连词根（首成分 tab 本批留空无级可继，-loid 不在 §5.4 清单），留空；近义 rag 劣质小报（队列原样，置首义项恰好一次）');

  W('tactful', 'adjective', '/ˈtæktfl/', 'C1', ['CET6'], '说话有分寸的；处事得体的', 'Careful in what you say and do so that nobody feels upset.', [
    ['得体的；圆通的', 'Showing skill in what you say or do so that you avoid offending anyone.', '说话做事有分寸，因而不得罪任何人。', '定语表语两用，常与 in、with 连用。', 'She gave a tactful reply to the awkward question.', '她对那个尴尬的问题作了得体的回答。', ['a tactful reply', 'be tactful in'], ['discreet'], 'adjective', '定语/表语', '社交'],
    ['顾及他人感受的；体谅的', 'Careful to think about how other people feel in a difficult situation.', '在难堪的场合里顾及他人的感受。', '多作表语，常与 about、towards 连用。', 'He was tactful about the delay in the schedule.', '他对进度延误的事说得很体谅。', ['tactful about'], ['sensitive'], 'adjective', '定语/表语', '情感'],
    ['有外交手腕的；老练的', 'Managing contact between people in a calm and clever way.', '以冷静巧妙的方式处理人际关系。', '多作定语，形容处事方式。', 'Her tactful handling kept both sides at the table.', '她老练的处理使双方都留在谈判桌前。', ['a tactful approach'], ['diplomat'], 'adjective', '定语', '社交'],
  ], '', ['discreet'], 'brief ←?，自扫根 tact C1 圆通、老练（自扫 author_t1.js 第 4 参）+ -ful（透明形容词后缀，§5.4 清单），C1 继承；家族 discreet 谨慎的（入第 10 参）；近义 discreet 谨慎的、sensitive 体谅的、diplomat 外交官式老练（队列原样，分置义项 1、2、3 各恰好一次）；CET6 标签照抄队列');

  W('tactics', 'noun', '/ˈtæktɪks/', 'C1', [], '战术；策略；手腕', 'The methods a person or a team uses in order to gain an advantage.', [
    ['战术；策略（复数）', 'The particular methods chosen to win a game, a battle or a contest.', '为赢得比赛、战役或竞争而选定的具体方法。', '形式为复数，作主语时谓语用复数；与 strategy「总体规划」相对。', 'The coach changed the tactics after half time.', '教练在半场后改变了战术。', ['change tactics', 'campaign tactics'], ['strategy'], 'noun', 'countable', '体育'],
    ['手腕；权术', 'Clever ways of dealing with people in order to get what you want.', '为达到目的而与人周旋的巧妙手法。', '常作复数，含贬义，可与 politics 连用。', 'Office tactics helped her win the promotion.', '办公室里的手腕帮她赢得了晋升。', ['office tactics'], ['politics'], 'noun', 'countable', '社交'],
  ],'tactics', ['strategy'], 'brief 根提示 ←tactic C1 战术（自扫 author_t1.js 第 4 参复核为 C1）+ -s（复数形式单列词条，forms 留空），C1 继承（判断项：-s 不在 §5.4 明示清单，按库内 sales←sale A2、systems←system A2 先例）；家族 strategy 战略（入第 10 参），近义 strategy 战略、politics 权术（队列原样，分置义项 1、2 各恰好一次）');

  W('tailored', 'adjective', '/ˈteɪləd/', 'B2', [], '按需要定制的；（衣着）合身的', 'Made to fit one person, one need or one purpose.', [
    ['量身定做的；定制的', 'Made specially for one person or one purpose rather than produced in large numbers.', '为某人或某目的专门制作，而不是大批量生产。', '定语表语两用，常与 to、for 连用。', 'The report was tailored to the needs of small firms.', '这份报告是按小公司的需要定制的。', ['tailored to the needs'], ['custom'], 'adjective', '定语/表语', '商务'],
    ['（衣服）剪裁合身的', 'Fitting the body well because it has been adjusted to the wearer.', '因为经过修改而十分贴合身材的衣服。', '多作定语，形容成衣效果。', 'He wore a tailored jacket to the interview.', '他穿了一件剪裁合身的外套去面试。', ['a tailored suit'], [], 'adjective', '定语', '外貌'],
  ], '',['tailor'], 'brief 根提示 ←tailor B2 裁缝、量身定做（自扫 author_t1.js 第 4 参复核为 B2）+ -ed（分词转形容词，同库内 supplied←supply B1 先例），B2 继承；近义 custom 定制的（队列原样，置首义项恰好一次）');

  W('taint', 'noun/verb', '/teɪnt/', '', [], '污点；污染；败坏', 'A sign of damage or dishonesty, or the act of spoiling something.', [
    ['污点；玷污', 'A mark left on a person or a thing after damage or dishonesty.', '某人或某物在受损或失格之后留下的痕迹。', '可数，常与 of 连用，书面语。', 'The scandal left a taint of doubt on the whole team.', '这桩丑闻给整个团队留下了疑点的污名。', ['a taint of'], [], 'noun', 'countable', '社会'],
    ['污染；使变质', 'To make food, air or another substance dirty or unsafe.', '使食物、空气或其他物质变得不洁或不安全。', '及物动词，宾语常是物质，主语常是污染物。', 'The spill tainted the water supply for weeks.', '这次泄漏污染了供水达数周之久。', ['tainted food'], ['contaminate', 'pollute'], 'verb', '及物', '环境'],
    ['败坏；玷污（名誉）', 'To damage the good quality or the reputation of a person or an idea.', '损害某人或某个想法的良好品质与名声。', '及物动词，宾语多为 reputation、name、record。', 'The accusations taint his reputation for honesty.', '这些指控玷污了他诚实的名声。', ['taint a reputation'], [], 'verb', '及物', '社会'],
  ], 'taints~tainted~tainted~tainting', ['contaminate'], 'brief ←?，自扫根：库内无 taint 的语义直连词根（-aint 不在 §5.4 清单；与 paint、stain 形近但词首不共享、语义不直连，属切词假象，规范 §5.7），留空；家族 contaminate 污染（入第 10 参），近义 contaminate 污染、pollute 污染（队列原样，置义项 2 各恰好一次）');

  W('take action', 'verb', '/teɪk ˈækʃn/', '', [], '采取行动', 'To do something about a problem instead of only talking about it.', [
    ['采取行动；付诸行动', 'To start doing something in order to deal with a problem or to reach a goal.', '开始做某事，以处理问题或达到目标。', '及物，宾语是 action；常见 take action against、take action on。', 'The council will take action against the noise.', '市政会将对噪音问题采取行动。', ['take action against', 'take immediate action'], ['act'], 'verb', '及物', '社会'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 act 行动（队列原样，置唯一义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take advantage of', 'verb', '/teɪk ədˈvɑːntɪdʒ ɒv/', '', [], '利用；占便宜', 'To use something for your own benefit, sometimes in an unfair way.', [
    ['利用（机会、资源）', 'To use a situation, a resource or an opportunity in order to get what you want.', '利用某种情形、资源或机会来得到想要的东西。', '及物，宾语是机会、资源、规则等。', 'The firm took advantage of the new rule.', '这家公司利用了新规定。', ['take advantage of the chance'], ['exploit'], 'verb', '及物', '商务'],
    ['占（某人）便宜；欺骗', 'To treat someone unfairly for your own benefit, especially someone who trusts you.', '为了自己的好处而不公平地对待某人，尤指信任你的人。', '及物，含贬义，宾语是人。', 'He took advantage of their trust and vanished.', '他利用了他们的信任然后消失了。', ['take advantage of sb'], [], 'verb', '及物', '社会'],
  ],'takes advantage of~took advantage of~taken advantage of~taking advantage of', [], '短语整体不取成分作根，分级留空；近义 exploit 利用、剥削（队列原样，置首义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take after', 'verb', '/teɪk ˈɑːftə/', '', [], '（外貌或性格）像（家中长辈）', 'To resemble an older member of your family in looks or behaviour.', [
    ['（外貌或性格）像（父母或亲属）', 'To have the same appearance or the same habits as one of your relatives.', '在外表或习惯上与某位亲属相同。', '及物，常用于否定句与疑问句，宾语是亲属。', 'She takes after her mother in the way she walks.', '她走路的样子像她母亲。', ['take after your father'], ['resemble'], 'verb', '及物', '家庭'],
  ], '', ['resemble'], '短语整体不取成分作根，分级留空；家族 resemble 相像（入第 10 参），近义 resemble 相像（队列原样，置唯一义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take apart', 'verb', '/teɪk əˈpɑːt/', '', [], '拆开；剖析批驳', 'To separate something into its parts, or to examine an argument piece by piece.', [
    ['拆开；拆卸', 'To take a machine or an object out into its separate parts.', '把机器或物品拆成一个个零件。', '及物可分：take the radio apart。', 'He took the clock apart to clean it.', '他把钟拆开来清洗。', ['take sth apart'], ['dismantle'], 'verb', '及物', '工具'],
    ['剖析；批驳', 'To examine every part of an argument or a plan in order to show that it is weak.', '逐部分检查论点或计划，以显示其薄弱之处。', '及物，比喻用法，常见于评论语体。', 'The article took the argument apart line by line.', '这篇文章逐条批驳了那个论点。', ['take an argument apart'], [], 'verb', '及物', '书面'],
  ],'takes apart~took apart~taken apart~taking apart', ['dismantle'], '短语整体不取成分作根，分级留空；家族 dismantle 拆卸（入第 10 参），近义 dismantle 拆卸（队列原样，置首义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take away', 'verb', '/teɪk əˈweɪ/', '', [], '拿走；减去', 'To remove or carry off something, or to reduce a number by subtraction.', [
    ['拿走；带走', 'To remove something from a place, or to take it with you when you leave.', '把某物从某处移走，或离开时把它带上。', '及物可分：take the plate away。', 'Please take the empty plates away.', '请把这些空盘子拿走。', ['take sth away'], ['remove'], 'verb', '及物', '家居'],
    ['减去；扣除', 'To subtract one number or amount from another.', '从一个数或数量中减去另一个。', '及物，数学用语，英式也说 take off。', 'Take away four from ten and you get six.', '十减四得六。', ['take away from'], ['subtract'], 'verb', '及物', '数学'],
  ],'takes away~took away~taken away~taking away', ['remove', 'subtract'], '短语整体不取成分作根，分级留空；家族 remove 移走、subtract 减去（入第 10 参），近义 remove 移走、subtract 减去（队列原样，分置义项 1、2 各恰好一次）；英式口语 take away 亦作名词「外卖」，本条按动词短语登记；（队列原样，短语条目）').phrase = true;

  W('take back', 'verb', '/teɪk ˈbæk/', '', [], '退回；收回；勾起回忆', 'To return something, to admit a remark was wrong, or to make someone remember the past.', [
    ['退回；归还', 'To return goods to a shop, or to give something back to its owner.', '把商品退回商店，或把东西还给它的主人。', '及物可分，购物与日常语境。', 'They took the faulty printer back to the store.', '他们把出故障的打印机退回了商店。', ['take goods back'], [], 'verb', '及物', '商务'],
    ['撤回；收回（说过的话）', 'To say again that something you stated earlier was not correct.', '再次表示先前说过的话并不正确。', '及物可分，正式语体。', 'He took back his accusation after checking the facts.', '核对事实之后他撤回了指控。', ['take back a claim'], ['withdraw'], 'verb', '及物', '书面'],
    ['使回忆起；使回到（过去）', 'To make someone remember a time that has already passed.', '使某人想起已经过去的时光。', '及物，主语常是音乐、照片、气味等。', 'That song takes me back to my school days.', '那首歌使我回想起学生时代。', ['take sb back to'], [], 'verb', '及物', '情感'],
  ],'takes back~took back~taken back~taking back', [], '短语整体不取成分作根，分级留空；近义 withdraw 撤回、收回（队列原样，置义项 2 恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take in', 'verb', '/teɪk ˈɪn/', '', [], '吸收；理解；欺骗；收留', 'To absorb something, to understand it, to trick someone, or to give shelter.', [
    ['吸收；摄入', 'To take water, air or another substance into something.', '把水、空气等物质纳入某物之中。', '及物可分，主语常是海绵、土壤、布料等。', 'The dry soil took in all the rain.', '干燥的土壤吸收了全部雨水。', ['take in moisture'], ['absorb'], 'verb', '及物', '科学'],
    ['理解；领会', 'To understand or notice something new.', '弄懂或注意到新的信息。', '及物，常用于否定句，主语是人。', 'I could not take in all the instructions at once.', '我无法一下子领会所有说明。', ['take in the details'], [], 'verb', '及物', '教育'],
    ['欺骗；蒙骗', 'To trick someone into believing something untrue.', '诱使某人相信不真实的事情。', '及物，含贬义，口语用法。', 'The cheap offer took in even careful buyers.', '便宜的报价连谨慎的买家都骗过了。', ['take sb in'], [], 'verb', '及物', '社会'],
    ['收留；接纳（住宿）', 'To provide a room in your home for someone.', '在自己家里为某人提供住处。', '及物，常见于租房与慈善语境。', 'The family took in a student for the term.', '这家人在这一学期收留了一名学生。', ['take in a lodger'], [], 'verb', '及物', '家庭'],
  ],'takes in~took in~taken in~taking in', [], '短语整体不取成分作根，分级留空；近义 absorb 吸收（队列原样，置首义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take off', 'verb', '/teɪk ˈɒf/', '', [], '脱下；起飞；迅速走红', 'To remove clothing, to leave the ground and fly, or to become successful quickly.', [
    ['脱下；摘下', 'To remove clothes, shoes or a hat from your body.', '把衣服、鞋或帽子从身上取下。', '及物可分：take off your coat。', 'Take off your shoes before you enter.', '进门前把鞋脱掉。', ['take off your coat'], ['remove'], 'verb', '及物', '家居'],
    ['（飞机）起飞', 'To leave the ground and begin to fly.', '离开地面开始飞行。', '不及物，主语是飞机。', 'The plane took off ten minutes late.', '飞机晚了十分钟起飞。', ['take off from the runway'], [], 'verb', '不及物', '交通'],
    ['（事业、销量）迅速腾飞', 'To start to be successful very quickly.', '很快取得成功。', '不及物，主语是产品、事业、店铺等。', 'Her online shop took off in the first month.', '她的网店第一个月就火了。', ['take off quickly'], [], 'verb', '不及物', '商务'],
    ['休假；休息（一天）', 'To decide not to go to work for a short period.', '决定短期不去上班。', '及物：take the day off；也可不及物单独用 take off。', 'He took a day off after the deadline.', '截止日期之后他休了一天。', ['take the day off'], [], 'verb', '及物', '职业'],
  ],'takes off~took off~taken off~taking off', [], '短语整体不取成分作根，分级留空；近义 remove 脱下、移除（队列原样，置首义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take on', 'verb', '/teɪk ˈɒn/', '', [], '承担；呈现；雇用；较量', 'To accept work, to show a quality, to employ someone, or to compete.', [
    ['承担；接手（工作、责任）', 'To accept a job, a duty or a promise to do something.', '接受某项工作、责任或承诺。', '及物可分，主语是人。', 'She took on the role of coordinator.', '她接下了协调员的职责。', ['take on responsibility'], ['undertake'], 'verb', '及物', '职业'],
    ['呈现（面貌、特征）', 'To begin to have a particular quality or appearance.', '开始具有某种特质或外观。', '及物，主语常是事物。', 'The town takes on a festive look in December.', '十二月里这座小镇呈现出节日气氛。', ['take on a new look'], ['assume'], 'verb', '及物', '通用'],
    ['雇用；录用', 'To employ someone to do a job.', '雇用某人来做一份工作。', '及物，商务与人事用语。', 'The factory took on fifty new workers.', '这家工厂录用了五十名新工人。', ['take on staff'], [], 'verb', '及物', '职业'],
    ['与……较量；对抗', 'To compete against someone or to deal with a strong opponent.', '与某人竞争，或对付强劲的对手。', '及物，口语，主语常是人或球队。', 'The small team took on the champions without fear.', '这支小队无畏地与冠军队较量。', ['take on the best'], [], 'verb', '及物', '体育'],
  ],'takes on~took on~taken on~taking on', ['undertake'], '短语整体不取成分作根，分级留空；家族 undertake 承担（入第 10 参），近义 undertake 承担、assume 呈现（队列原样，分置义项 1、2 各恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take out', 'verb', '/teɪk ˈaʊt/', '', [], '取出；带出；切除', 'To draw something out, to take someone to a place, or to cut out part of the body.', [
    ['取出；领出（钱）', 'To draw money out of an account, or to lift something out of its place.', '从账户里取出钱，或把某物从原处拿出来。', '及物可分；指钱时意思同 withdraw。', 'She took out some cash for the market.', '她取了些现金去市场。', ['take out money'], ['withdraw'], 'verb', '及物', '金融'],
    ['带（某人）外出', 'To take someone with you to a place such as a restaurant or the cinema.', '带某人一起去餐馆、电影院等地方。', '及物可分，宾语是人。', 'He took his sister out for dinner.', '他带姐姐出去吃晚饭。', ['take sb out'], [], 'verb', '及物', '社交'],
    ['除去；切除', 'To remove a part of the body, or to take a passage out of a text.', '切除身体的某一部分，或从文本中删去某段内容。', '及物可分，医学与编辑用语。', 'The surgeon took out the damaged tissue.', '外科医生切除了受损组织。', ['take out a tooth'], [], 'verb', '及物', '健康'],
  ],'takes out~took out~taken out~taking out', [], '短语整体不取成分作根，分级留空；近义 withdraw 取出、支取（队列原样，置首义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take over', 'verb', '/teɪk ˈəʊvə/', '', [], '接管；劫持；接替', 'To gain control of an organization, to seize a vehicle by force, or to carry on a job after someone else.', [
    ['接管；取得控制权', 'To gain control of a company, a place or a system from someone else.', '从别人手中取得某公司、某地或某系统的控制权。', '及物可分，也可不及物后接 from：take over from sb。', 'The group took over two hotels last year.', '该集团去年接管了两家酒店。', ['take over the company'], ['inherit'], 'verb', '及物', '商务'],
    ['控制；劫持（交通工具）', 'To use violence or force to get control of a vehicle.', '用暴力或强制手段取得对交通工具的控制。', '及物，新闻用语。', 'Two attackers tried to take over the plane.', '两名袭击者试图劫持这架飞机。', ['take over the aircraft'], ['hijack'], 'verb', '及物', '军事'],
    ['接替；接手（工作）', 'To begin doing a job that another person has been doing.', '开始做另一个人一直在做的那份工作。', '及物，常见于轮班与交接。', 'The night team took over the monitoring at six.', '夜班团队六点接替了监控工作。', ['take over the shift'], ['relieve'], 'verb', '及物', '职业'],
  ],'takes over~took over~taken over~taking over', ['inherit'], '短语整体不取成分作根，分级留空；家族 inherit 继承（入第 10 参），近义 inherit 接管、hijack 劫持、relieve 接替（队列原样，分置义项 1、2、3 各恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take part', 'verb', '/teɪk ˈpɑːt/', '', [], '参与；加入其中', 'To be part of an activity that other people are doing.', [
    ['参加；参与', 'To join in an event or an activity together with other people.', '与他人一起加入某项活动或事件。', '不及物，后与 in 连用：take part in。', 'All the students took part in the discussion.', '所有学生都参加了讨论。', ['take part in'], ['participate'], 'verb', '不及物', '教育'],
  ], '', ['participate'], '短语整体不取成分作根，分级留空；家族 participate 参加（入第 10 参），近义 participate 参加（队列原样，置唯一义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take place', 'verb', '/teɪk ˈpleɪs/', '', [], '发生；举行', 'To come about, or to be held at a particular time and place.', [
    ['（事件）发生', 'To happen, especially after a period of planning.', '（尤指经过一段时间安排之后）发生。', '不及物，无被动语态，主语是事件。', 'The incident took place before dawn.', '事件发生在黎明前。', ['take place at'], ['happen', 'occur'], 'verb', '不及物', '通用'],
    ['（活动）举行；举办', 'To be held at a stated time and place.', '在既定的时间与地点进行。', '不及物，主语是会议、比赛、展览等。', 'The talks will take place in Vienna.', '会谈将在维也纳举行。', ['take place in'], [], 'verb', '不及物', '社会'],
  ],'takes place~took place~taken place~taking place', ['happen'], '短语整体不取成分作根，分级留空；家族 happen 发生（入第 10 参），近义 happen 发生、occur 发生（队列原样，置首义项各恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take turns', 'verb', '/teɪk ˈtɜːnz/', '', [], '轮流；依次进行', 'To do something one after another so that everyone has a turn.', [
    ['轮流；依次（做事）', 'To share an activity by doing it in rotation with other people.', '与他人轮换着做同一件事。', '及物，宾语是 turns，后接 doing sth；常见 take turns at。', 'The students took turns reading aloud.', '学生们轮流朗读。', ['take turns doing'], ['rotate'], 'verb', '及物', '教育'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 rotate 轮流、转动（队列原样，置唯一义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('take up', 'verb', '/teɪk ˈʌp/', '', [], '占用；开始从事；接受；继续', 'To fill time or space, to start a hobby, to accept an offer, or to continue.', [
    ['占用（时间、空间）', 'To use a particular amount of time or space.', '用掉一定数量的时间或空间。', '及物，主语常是任务、会议、房间等。', 'The meeting took up the whole morning.', '会议占用了整个上午。', ['take up time'], ['occupy'], 'verb', '及物', '通用'],
    ['开始从事（新爱好、运动）', 'To begin doing a new hobby or activity.', '开始做一项新的爱好或活动。', '及物可分，常见 take up gardening。', 'He took up swimming last winter.', '去年冬天他开始游泳。', ['take up a hobby'], [], 'verb', '及物', '娱乐'],
    ['接受（提议、名额）', 'To accept an offer or a place that someone has made.', '接受别人提出的提议或名额。', '及物可分。', 'She took up the offer of a place at the university.', '她接受了这所大学的录取名额。', ['take up an offer'], [], 'verb', '及物', '教育'],
    ['继续（中断的话题、工作）', 'To continue something that was stopped earlier.', '接着先前中断的事情继续做下去。', '及物可分，常与 where 从句连用。', 'He took up the story where she had stopped.', '他从她停下的地方接着讲这个故事。', ['take up the point'], [], 'verb', '及物', '书面'],
  ],'takes up~took up~taken up~taking up', [], '短语整体不取成分作根，分级留空；近义 occupy 占用（队列原样，置首义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('takeover', 'noun', '/ˈteɪkəʊvə/', 'A1', [], '收购；接管', 'The taking over of a company, a job or a whole organization.', [
    ['收购；并购', 'The buying of a company by another company.', '一家公司买下另一家公司。', '可数，商务与财经用语，常见 make/launch a takeover。', 'The board rejected the takeover bid.', '董事会拒绝了这次收购要约。', ['a takeover bid'], ['acquisition'], 'noun', 'countable', '商务'],
    ['接管；接任', 'The act of gaining control of a place, a post or a system.', '取得某个地方、职位或系统的控制权。', '可数，常见 takeover of power。', 'The takeover of the club was completed in June.', '对这家俱乐部的接管于六月完成。', ['takeover of power'], [], 'noun', 'countable', '商务'],
  ], 'takeovers',['take'], 'brief ←?，自扫根：复合词 take + over，首成分 take A1 拿、接管（自扫 author_t1.js 第 4 参），语义直连（take over 接管的名词化），A1 继承（判断项：规范 §5.3 复合词取首成分，备注披露）；近义 acquisition 收购（队列原样，置首义项恰好一次）');

  W('talented', 'adjective', '/ˈtæləntɪd/', 'B1', ['CET4'], '有天赋的；才华横溢的', 'Having a natural skill that makes good work easy.', [
    ['有天赋的；才能出众的', 'Born with a special ability that shows in whatever a person does.', '生来就有某种特殊能力，并在所做的一切中表现出来。', '定语表语两用，常与 in、at 连用。', 'The school helps talented students reach university.', '这所学校帮助有天赋的学生升入大学。', ['a talented player'], ['brilliant'], 'adjective', '定语/表语', '教育'],
  ], '',['talent'], 'brief 根提示 ←talent B1 天赋（自扫 author_t1.js 第 4 参复核为 B1）+ -ed（透明形容词后缀，§5.4 清单，同库内 supplied←supply B1 先例），B1 继承；近义 brilliant 杰出的（队列原样，置唯一义项恰好一次）；CET4 标签照抄队列');

  W('talisman', 'noun', '/ˈtælɪzmən/', '', [], '护身符；带来好运的人或物', 'An object or a person believed to bring good luck.', [
    ['护身符；吉祥物', 'An object that people believe brings them good luck or keeps them safe.', '人们相信能带来好运或保他们平安的物件。', '可数，常与 of 连用；复数 talismans。', 'He carries a small talisman in his pocket.', '口袋里带着一枚小护身符。', ['carry a talisman'], ['charm'], 'noun', 'countable', '文化'],
    ['带来好运的人或物', 'A person or a thing that is thought to bring success to a group.', '被认为能给团体带来成功的人或事物。', '可数，比喻用法，常与 of 连用。', 'The captain became the talisman of the whole team.', '队长成了全队的主心骨。', ['the talisman of the side'], [], 'noun', 'countable', '体育'],
  ], 'talismans', [], 'brief ←?，自扫根：库内无 talisman 的语义直连词根（-man/-an 不在 §5.4 清单；man 虽在库 A1 但 talisman 并非「人」，语义不直连，属切词假象，规范 §5.7），留空；近义 charm 护符、魅力（队列原样，置首义项恰好一次）');

  W('talk into', 'verb', '/tɔːk ˈɪntuː/', '', [], '劝说；说服', 'To win someone over to an idea through conversation.', [
    ['说服（某人做某事）', 'To persuade someone to do something by talking to them.', '通过交谈说服某人去做某事。', '及物可分，结构 talk sb into doing sth。', 'She talked him into applying for the job.', '她说服他申请了这份工作。', ['talk sb into doing'], ['persuade'], 'verb', '及物', '社交'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 persuade 说服（队列原样，置唯一义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('talk over', 'verb', '/tɔːk ˈəʊvə/', '', [], '详细商谈；以声音盖过', 'To discuss something in detail, or to speak louder than someone else.', [
    ['详细讨论；商量透彻', 'To talk about something in detail with someone before deciding what to do.', '在决定怎么做之前，与某人把某事谈透。', '及物可分，常见 talk sth over with sb。', 'We talked the plan over with the team.', '我们和团队把计划详细讨论了一遍。', ['talk sth over'], ['discuss'], 'verb', '及物', '通用'],
    ['（说话声）压过；盖过', 'To speak louder than someone else so that they cannot be heard.', '比别人说得更大声，使对方听不见。', '及物，较少见的用法。', 'He talked over the music to give the instructions.', '他盖过音乐声下达指示。', ['talk over the noise'], [], 'verb', '及物', '口语'],
  ],'talks over~talked over~talking over', ['discuss'], '短语整体不取成分作根，分级留空；家族 discuss 讨论（入第 10 参），近义 discuss 讨论（队列原样，置首义项恰好一次）；（队列原样，短语条目）').phrase = true;

  W('talks', 'noun', '/tɔːks/', 'A1', [], '会谈；谈判；系列讲座', 'Serious discussions between groups, or a series of speeches.', [
    ['正式会谈；谈判', 'Serious discussions between governments, unions or companies about a shared problem.', '政府、工会或公司之间围绕共同问题进行的严肃讨论。', '形式为复数，作主语时谓语用复数；常见 peace talks、pay talks。', 'The two sides opened talks on Monday.', '双方周一开始了会谈。', ['open talks', 'peace talks'], ['summit'], 'noun', 'countable', '政治'],
    ['系列讲话；讲座', 'A set of speeches given to an audience on one or more occasions.', '面向听众在一次或多次场合发表的讲话。', '复数形式，指多次讲话；单数则是 a talk。', 'She gave talks at six schools that term.', '那个学期她在六所学校作了讲座。', ['give talks'], [], 'noun', 'countable', '教育'],
  ],'talks',['talk'], 'brief 根提示 ←talk A1 说话、谈话（自扫 author_t1.js 第 4 参复核为 A1）+ -s（复数形式单列词条，forms 留空），A1 继承（判断项：-s 不在 §5.4 明示清单，按库内 systems←system A2、sales←sale A2 先例）；近义 summit 峰会、最高级会谈（队列原样，置首义项恰好一次）');

  W('tallness', 'noun', '/ˈtɔːlnəs/', 'A1', [], '高；高大的身材', 'The state of being above average in height.', [
    ['高；身高；高度', 'How tall a person or a thing is, seen as a quality.', '把人或物的高矮看作一种性质。', '不可数，书面与描述性用语，反义 shortness。', 'His tallness made him easy to spot in the crowd.', '他的高个子使他在人群中很容易被认出。', ['impressive tallness'], ['height'], 'noun', 'uncountable', '外貌'],
  ], '',['tall'], 'brief 根提示 ←tall A1 高的（自扫 author_t1.js 第 4 参复核为 A1）+ -ness（透明名词后缀，§5.4 清单），A1 继承；抽象不可数故 forms 留空；近义 height 高度（队列原样，置唯一义项恰好一次）');

  W('talon', 'noun', '/ˈtælən/', '', [], '利爪；爪状物', 'A sharp curved claw of a bird of prey, or a claw-shaped part.', [
    ['（猛禽的）利爪', 'A long, sharp curved claw of a bird of prey.', '猛禽长而弯曲的尖爪。', '可数，常以复数 talons 出现。', 'The eagle closed its talons around the fish.', '老鹰用利爪抓住了那条鱼。', ['sharp talons'], ['claw', 'nail'], 'noun', 'countable', '自然'],
    ['爪状物；钩状部件', 'A part of a machine or a handle that is shaped like a claw.', '机器上或把手处形状像爪子的部件。', '可数，工程与工具用语。', 'The talon of the crane gripped the steel beam.', '起重机的钩爪夹住了钢梁。', ['a metal talon'], [], 'noun', 'countable', '工具'],
  ], 'talons', ['claw'], 'brief ←?，自扫根：库内无 talon 的语义直连词根（-lon/-on 不在 §5.4 清单；与 tall 形近但语义不直连，属切词假象，规范 §5.7），留空；家族 claw 爪（入第 10 参），近义 claw 爪、nail 指甲（队列原样，置首义项各恰好一次）');

  W('tamper', 'verb', '/ˈtæmpə/', '', [], '篡改；瞎摆弄；勾结', 'To interfere with something, often dishonestly or without permission.', [
    ['篡改；做手脚', 'To change something secretly or dishonestly so that it works in your favour.', '秘密或不诚实地改动某物，使其对自己有利。', '不及物，常与 with 连用，宾语是记录、数据等。', 'Someone tampered with the figures before the audit.', '审计前有人在数字上做了手脚。', ['tamper with the records'], [], 'verb', '不及物', '法律'],
    ['瞎摆弄；胡乱干预', 'To handle something carelessly and cause damage.', '漫不经心地摆弄某物并造成损坏。', '不及物，常与 with 连用，口语。', 'Do not tamper with the wiring in the flat.', '不要乱动公寓里的电线。', ['tamper with'], ['monkey'], 'verb', '不及物', '工具'],
    ['（用贿赂等）拉拢；勾结', 'To try to influence someone illegally, for example by offering money.', '试图以非法手段影响某人，例如给钱。', '不及物，法律语境，常见 tamper with a witness。', 'He was accused of tampering with the witness.', '他被指控勾结证人。', ['tamper with a witness'], [], 'verb', '不及物', '法律'],
  ], 'tampers~tampered~tampered~tampering', [], 'brief ←?，自扫根：根词 tamp 自扫不在库，-er 虽在 §5.4 清单但无在库根可继，留空；近义 monkey 瞎摆弄（队列原样，置义项 2 恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
