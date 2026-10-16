/* data/words/cet/author_d3.js · 手敲词条 D（三）：dab ~ dealings（含 3 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_d3.js 必须在 _cet_helper.js 之后加载');

  W('dab', 'noun/verb', '/dæb/', '', [], '少量；轻拍', 'A small amount of something, or to touch it lightly.', [
    ['少量；一小块', 'A small amount of something, especially cream or paint.', '少量某物，尤指奶油或颜料。', '可数：a dab of。', 'Add a dab of butter on top.', '上面放一小块黄油。', ['a dab of'], ['lick'], 'noun', 'countable', '饮食'],
    ['轻拍；轻敷', 'To touch or apply something lightly with quick strokes.', '轻快地碰触或涂抹。', '不及物或及物：dab at。', 'She dabbed at the stain with a cloth.', '她用布在污渍上轻轻擦拭。', ['dab at'], ['pat'], 'verb', '不及物', '通用'],
  ], 'dabs~dabbed~dabbed~dabbing', [], '象声轻触；近义 lick 一抹（少量涂抹）、pat 轻拍。分级留空');

  W('dais', 'noun', '/ˈdeɪɪs/', '', [], '讲台；主席台', 'A raised platform for speakers or officials.', [
    ['讲台；主席台', 'A raised platform for speakers or officials.', '发言人或官员站的高台。', '可数，复数 daises。', 'The winner climbed the dais.', '获奖者登上了主席台。', [], ['platform'], 'noun', 'countable', '教育'],
  ], 'daises', [], '古法语 dais（台座）；近义 platform 平台（通用站台）。分级留空');

  W('dale', 'noun', '/deɪl/', '', [], '（北英）溪谷；山谷', 'A valley, especially one in northern England.', [
    ['（北英）溪谷；山谷', 'A valley, especially one in northern England.', '山谷，尤指英格兰北部的。', '可数，诗歌与地名用语。', 'They walked up the dale.', '他们沿山谷走去。', [], ['valley'], 'noun', 'countable', '自然'],
  ], 'dales', ['valley'], '北英古语；家族 valley 山谷（通用词）。分级留空');

  W('dally', 'verb', '/ˈdæli/', '', [], '闲混；磨蹭', 'To waste time; to behave without seriousness.', [
    ['闲混；磨蹭', 'To waste time; to behave or play without seriousness.', '浪费时间；不认真地行事。', '不及物：dally with（耽于、玩弄）。', 'He dallied over the decision for weeks.', '他为这个决定磨蹭了几周。', ['dally with'], ['trifle'], 'verb', '不及物', '书面'],
  ], 'dallies~dallied~dallied~dallying', [], '与 dawdle 近义场；近义 trifle 玩弄（trifle with 轻慢对待）。分级留空');

  W('damaged', 'adjective', '/ˈdæmɪdʒd/', 'B1', [], '损坏的；受损的', 'Harmed so that something is no longer normal or useful.', [
    ['损坏的；受损的', 'Harmed so that something is no longer normal or useful.', '受到伤害、不再正常或可用的。', '分词形容词：damaged goods（受损货物）。', 'The wing was badly damaged.', '机翼受损严重。', ['damaged goods'], ['corrupt'], 'adjective', '定语/表语', '商务'],
  ], '', ['corrupt'], '←damage B1 + -ed，B1 继承；近义 corrupt 损坏的（数据、系统失效）');

  W('dame', 'noun', '/deɪm/', '', [], '夫人；贵妇', 'A woman, especially one who is older or of high social rank.', [
    ['夫人；贵妇', 'A woman, especially one who is older or of high social rank.', '女性，尤指年长或地位高的。', '可数，正式与戏称；英式 Dame 为女爵士封号。', 'The dame waved from the balcony.', '那位夫人在阳台上挥手。', ['a great dame'], ['lady'], 'noun', 'countable', '社会'],
  ], 'dames', [], '古法语 dame；近义 lady 女士（最常用）。分级留空');

  W('dampen', 'verb', '/ˈdæmpən/', 'B1', ['CET4'], '使潮湿；使减弱', 'To make something slightly wet, or to make a feeling weaker.', [
    ['使潮湿', 'To make something slightly wet.', '使某物略微变湿。', '及物：dampen the cloth。', 'Dampen the cloth before wiping.', '擦拭前把布弄湿。', [], ['wet'], 'verb', '及物', '家居'],
    ['使沮丧；减弱', 'To make a feeling or process weaker.', '使情绪或过程减弱。', '及物：dampen enthusiasm（挫伤热情）。', 'The news dampened their spirits.', '这消息让他们泄了气。', ['dampen enthusiasm'], [], 'verb', '及物', '通用'],
  ], 'dampens~dampened~dampened~dampening', ['damp'], '←damp B1 潮湿 + -en（使……），B1 继承；近义 wet 使湿（最常用）');

  W('damper', 'noun', '/ˈdæmpə(r)/', 'B1', [], '阻尼器；令人扫兴的事', 'A device that dampens movement or sound, or something that spoils an occasion.', [
    ['挡板；阻尼器', 'A device that dampens movement, air, or sound.', '减缓运动、气流或声音的装置。', '可数：a damper on the fire（炉挡）。', 'Close the damper to slow the fire.', '关上炉挡以减弱火势。', [], ['mute'], 'noun', 'countable', '工业'],
    ['令人扫兴的事', 'Something that spoils a good mood or occasion.', '破坏好心情或气氛的事。', '可数：put a damper on。', 'The rain put a damper on the party.', '雨给聚会泼了冷水。', ['put a damper on'], [], 'noun', 'countable', '通用'],
  ], 'dampers', ['damp'], '←damp B1 + -er，B1 继承；近义 mute 消音器（弱化声音的部件）');

  W('dangle', 'verb', '/ˈdæŋɡl/', '', [], '悬挂；吊着摇摆', 'To hang freely and swing slightly.', [
    ['悬挂；吊着摇摆', 'To hang freely and swing slightly.', '自由悬挂并轻微摆动。', '不及物或及物：dangle from。', 'Her keys dangled from the hook.', '她的钥匙挂在钩上晃荡。', ['dangle from'], ['hang', 'suspend'], 'verb', '不及物', '通用'],
  ], 'dangles~dangled~dangled~dangling', ['hang'], '家族 hang 挂（最常用）、近义 suspend 悬吊（正式：从高处吊起）');

  W('dark blue', 'noun/adjective', '/ˌdɑːk ˈbluː/', '', [], '深蓝色（的）；藏青（的）', 'A very dark shade of blue, like the colour navy.', [
    ['深蓝色（的）；藏青（的）', 'A very dark shade of blue, similar to navy colour.', '很深的蓝色，接近藏青色。', '颜色短语，作定语或表语。', 'He wore a dark blue jacket.', '他穿了件深蓝色外套。', ['dark blue sky'], ['navy'], 'adjective', '定语/表语', '外貌'],
  ], '', ['navy'], 'dark 深色 + blue 蓝；近义 navy 藏青（更深的标准色名）。短语分级留空').phrase = true;

  W('darken', 'verb', '/ˈdɑːkən/', 'A1', ['CET4'], '变暗；使变暗', 'To become dark, or to make something dark.', [
    ['（天色）变暗', 'To become dark.', '天色变暗。', '不及物：darken quickly。', 'The sky darkened before the storm.', '暴风雨前天色变暗。', [], ['gloom'], 'verb', '不及物', '自然'],
    ['使变暗；使沉重', 'To make something dark, or someone mood gloomy.', '使某物变暗，或使某人心情阴郁。', '及物：darken the room。', 'They darkened the room for the film.', '他们为放电影把房间弄暗。', ['darken the room'], [], 'verb', '及物', '通用'],
  ], 'darkens~darkened~darkened~darkening', ['dark'], '←dark A1 + -en，A1 继承；第一义近义 gloom 变昏暗（兼阴郁义）');

  W('darkness', 'noun', '/ˈdɑːknəs/', 'A1', ['CET4'], '黑暗；黑暗状态', 'The state of having no light or very little light.', [
    ['黑暗；黑暗状态', 'The state of having no light or very little light.', '没有光或光线很少的状态。', '不可数或可数：the darkness of。', 'The room was in complete darkness.', '屋里一片漆黑。', ['in the darkness'], ['dark', 'gloom'], 'noun', 'uncountable/countable', '自然'],
  ], '', ['gloom'], '←dark A1 + -ness，A1 继承；家族 gloom 昏暗（兼忧郁义），近义 dark 黑暗（the dark 常用）');

  W('dashboard', 'noun', '/ˈdæʃbɔːd/', 'B1', [], '仪表盘；控制面板', 'The panel with instruments and controls in a vehicle, or a screen of key data.', [
    ['仪表盘；控制面板', 'The panel with instruments and controls in a vehicle, or a screen showing key data.', '车辆上装仪表与控制件的面板，或关键数据界面。', '可数。', 'The warning light lit up on the dashboard.', '仪表盘上的警示灯亮了。', ['dashboard display'], ['panel'], 'noun', 'countable', '交通'],
  ], 'dashboards', ['dash', 'board'], 'dash 溅 + board 板，取首成分级（dash B1 在库）；近义 panel 控制面板');

  W('datagram', 'noun', '/ˈdeɪtəɡræm/', 'B1', [], '数据报', 'A unit of data sent as a packet over a network.', [
    ['数据报', 'A unit of data sent as a packet over a network.', '在网络中以分组形式发送的数据单元。', '可数，网络术语。', 'Each datagram is routed separately.', '每个数据报都单独路由。', [], ['packet'], 'noun', 'countable', '科技'],
  ], 'datagrams', ['data', 'gram'], 'data B1 数据 + gram 电报（消息单位），取首成分级 B1；近义 packet 数据包（TCP/IP 分组）');

  W('dated', 'adjective', '/ˈdeɪtɪd/', 'A1', [], '过时的；陈旧的', 'Old-fashioned; belonging to a past time.', [
    ['过时的；陈旧的', 'Old-fashioned; belonging to a past time.', '过时的、属于过去时代的。', '常含贬义：a dated style（老派样式）。', 'The design looks dated now.', '这个设计现在看着过时了。', ['a dated style'], ['old-fashioned'], 'adjective', '定语/表语', '通用'],
  ], '', ['old-fashioned'], '←date A1 + -ed（过时义分词），A1 继承；近义 old-fashioned 不时兴的（最常用）');

  W('daunt', 'verb', '/dɔːnt/', '', [], '使胆怯；难倒', 'To make someone feel afraid or less confident.', [
    ['使胆怯；难倒', 'To make someone feel afraid or less confident.', '使某人害怕或失去信心。', '及物，常被动 be daunted。', 'The size of the task did not daunt her.', '任务之艰巨没有吓倒她。', ['be daunted by'], ['intimidate'], 'verb', '及物', '通用'],
  ], 'daunts~daunted~daunted~daunting', [], '近义 intimidate 恐吓（施加威压）。分级留空');

  W('daunting', 'adjective', '/ˈdɔːntɪŋ/', '', [], '令人望而生畏的', 'Seeming difficult and frightening to do.', [
    ['令人望而生畏的', 'Seeming difficult and frightening to do.', '看起来难以做到、令人畏惧的。', '常见 a daunting task。', 'Learning Japanese was a daunting challenge.', '学日语是个吓人的挑战。', ['a daunting task'], ['formidable'], 'adjective', '定语', '教育'],
  ], '', ['formidable'], '←daunt（本词库无可靠分级）+ -ing，故留空；家族 formidable 令人敬畏的（更强、含威严）');

  W('day before', 'noun', '/ˌdeɪ bɪˈfɔː(r)/', '', [], '（特定日子的）前一天', 'The day immediately before a particular day.', [
    ['（特定日子的）前一天', 'The day immediately before a particular day.', '紧接某个日子的前一天。', '常与 the 连用：the day before。', 'We arrived the day before the meeting.', '我们在会议前一天到达。', ['the day before'], ['eve'], 'noun', 'countable', '通用'],
  ], '', ['eve'], 'day 天 + before 在前，指特定日的前一天；近义 eve 前夕（节日的前一天）。短语分级留空').phrase = true;

  W('daybook', 'noun', '/ˈdeɪbʊk/', 'A1', [], '流水账；日记账', 'A book in which daily business or accounts are written.', [
    ['流水账；日记账', 'A book in which daily business or accounts are written.', '逐日记录事务或账目的本子。', '可数，旧式与会计用语。', 'The trader entered sales in the daybook.', '商贩把销售记进了流水账。', [], ['journal'], 'noun', 'countable', '商务'],
  ], 'daybooks', ['day', 'book'], 'day A1 天 + book A1 书，取首成分级 A1；近义 journal 日志（日常记录本）');

  W('daybreak', 'noun', '/ˈdeɪbreɪk/', 'A1', [], '黎明；破晓', 'The first light of morning.', [
    ['黎明；破晓', 'The first light of morning.', '清晨最初的光亮。', '不可数：at daybreak。', 'They set off at daybreak.', '他们拂晓出发。', ['at daybreak'], ['dawn', 'morning', 'sunrise'], 'noun', 'uncountable', '自然'],
  ], '', ['dawn'], 'day A1 + break 破，取首成分级 A1；家族 dawn 黎明、sunrise 日出，近义 morning 早晨');

  W('daydream', 'noun/verb', '/ˈdeɪdriːm/', 'A1', [], '白日梦；做白日梦', 'A pleasant fantasy while awake, or to have one.', [
    ['白日梦；空想', 'A pleasant fantasy had while awake.', '清醒时想入非非的情景。', '可数：have a daydream。', 'She drifted into a daydream.', '她走神陷入了遐想。', ['lost in a daydream'], ['fantasy'], 'noun', 'countable', '通用'],
    ['做白日梦；走神', 'To think about pleasant things instead of working.', '光想美事而不专心做事。', '不及物：daydream about。', 'He daydreamed about travelling.', '他幻想着去旅行。', ['daydream about'], ['moon', 'wander'], 'verb', '不及物', '通用'],
  ], 'daydreams~daydreamed~daydreamed~daydreaming', ['fantasy'], 'day A1 + dream A1，取首成分级 A1；家族 fantasy 幻想，近义 moon 出神闲荡、wander 走神');

  W('daytime', 'noun', '/ˈdeɪtaɪm/', 'A1', [], '白天；白昼', 'The time when it is light outside.', [
    ['白天；白昼', 'The time when it is light outside.', '外面有光的时间段。', '不可数：during daytime。', 'The store opens during daytime only.', '商店只在白天营业。', ['during the daytime'], ['day'], 'noun', 'uncountable', '通用'],
  ], '', ['day'], 'day A1 天 + time A1 时间，取首成分级 A1；家族 day 天（更口语：the day）');

  W('daze', 'noun/verb', '/deɪz/', '', [], '使茫然；茫然状态', 'To make someone unable to think clearly, or a state of shock.', [
    ['使茫然；使眩晕', 'To make someone unable to think clearly because of shock.', '因震惊使某人无法清楚思考。', '及物，常被动 be dazed。', 'The blow dazed him for a moment.', '这一击让他懵了一会儿。', ['be dazed by'], ['fog', 'haze', 'stun'], 'verb', '及物', '健康'],
    ['茫然状态', 'A state of shock and confusion.', '震惊而恍惚的状态。', '可数或不可数：in a daze。', 'She wandered in a daze after the news.', '听到消息后她恍惚地走着。', ['in a daze'], [], 'noun', 'uncountable/countable', '通用'],
  ], 'dazes~dazed~dazed~dazing', ['stun'], '家族 stun 打晕（程度更强）、近义 fog 使迷糊、haze 使恍惚');

  W('dazed', 'adjective', '/deɪzd/', '', [], '（被打）发懵的', 'Unable to think clearly because of a shock or blow.', [
    ['（被打）发懵的', 'Unable to think clearly because of a shock or blow.', '因震惊或打击而头脑不清的。', '分词形容词：look dazed。', 'He gave a dazed smile.', '他露出了茫然的微笑。', ['look dazed'], ['numb'], 'adjective', '定语/表语', '健康'],
  ], '', ['numb'], '←daze（本词库无可靠分级）+ -ed，故留空；近义 numb 麻木的（失去感觉）');

  W('dazzling', 'adjective', '/ˈdæzlɪŋ/', 'B2', [], '耀眼的；令人惊叹的', 'Extremely bright, or impressive and surprising.', [
    ['耀眼的；令人惊叹的', 'Extremely bright, or impressive and surprising.', '极亮的，或精彩惊人的。', '常见 dazzling light/success（炫目之光、辉煌成功）。', 'Her performance was dazzling.', '她的表演光彩夺目。', ['dazzling sunlight'], ['dizzy'], 'adjective', '定语/表语', '艺术'],
  ], '', ['dizzy'], '←dazzle B2 + -ing，B2 继承；近义 dizzy 眼花的（被晃得发晕）');

  W('deactivate', 'verb', '/ˌdiˈæktɪveɪt/', 'C1', [], '使停用；使失效', 'To make a device or system stop being active.', [
    ['使停用；使失效', 'To make a device or system stop being active.', '让设备或系统停止运行。', '及物，技术用语。', 'You can deactivate the account anytime.', '你可以随时停用该账户。', ['deactivate the alarm'], ['disable'], 'verb', '及物', '科技'],
  ], 'deactivates~deactivated~deactivated~deactivating', ['disable'], '←activate C1 激活 + de-（反向），C1 继承；家族 disable 使失效（功能丧失）');

  W('deaden', 'verb', '/ˈdedn/', 'A2', [], '使麻木；使失去知觉', 'To make a part of the body or a feeling less able to be felt.', [
    ['使麻木；使失去知觉', 'To make a part of the body or a feeling less able to be felt.', '使身体部位或感觉变得迟钝。', '及物：deaden the pain（止痛）。', 'The cream deadened the pain.', '药膏止住了疼痛。', ['deaden the pain'], ['mute', 'numb'], 'verb', '及物', '健康'],
  ], 'deadens~deadened~deadened~deadening', ['numb'], '←dead A2 失去知觉的 + -en，A2 继承；家族 numb 麻木的、近义 mute 使失音（弱化声音）');

  W('deal with', 'verb', '/ˌdiːl ˈwɪð/', '', [], '处理；论述', 'To do something about a problem, or to be about a subject.', [
    ['处理；对付', 'To do something about a person or problem.', '对某人或问题采取行动。', '及物短语。', 'The manager deals with complaints.', '经理负责处理投诉。', ['deal with problems'], ['handle', 'tackle', 'treat', 'dispatch'], 'verb', '及物', '商务'],
    ['论述；涉及', 'To be about a subject; to discuss it.', '内容关于某主题；论述。', '及物短语：the chapter deals with。', 'The essay deals with modern art.', '这篇论文论述现代艺术。', [], ['contend'], 'verb', '及物', '教育'],
  ],'deals with~dealt with~dealing with', ['handle'], 'deal 应付 + with；家族 handle 处理，近义 tackle 着手解决、treat 对待、dispatch 迅速办结、contend 与……周旋。短语分级留空').phrase = true;

  W('dealer', 'noun', '/ˈdiːlə(r)/', 'A2', ['CET4'], '商人；经销商', 'A person or firm that buys and sells goods.', [
    ['商人；经销商', 'A person or firm that buys and sells goods.', '买卖货物的人或公司。', '可数：a car dealer（汽车经销商）。', 'She called the art dealer.', '她给那位艺术品经销商打了电话。', ['a car dealer'], ['merchant'], 'noun', 'countable', '商务'],
  ], 'dealers', ['merchant'], '←deal A2 交易 + -er（表人），A2 继承；家族 merchant 商人（较正式、批发）');

  W('dealings', 'noun', '/ˈdiːlɪŋz/', 'A2', [], '交往；业务往来', 'Business or social contact with someone.', [
    ['交往；业务往来', 'Business or social contact with someone.', '与他人的业务或社交接触。', '常用复数：have dealings with。', 'The firm has dealings with local suppliers.', '公司与本地供应商有业务往来。', ['have dealings with'], ['intercourse'], 'noun', 'uncountable/countable', '商务'],
  ], '', ['intercourse'], '←deal A2 + -ings（复数专义），A2 继承；近义 intercourse 交往（正式用语）');

  W('debase', 'verb', '/dɪˈbeɪs/', 'A2', [], '使贬值；使卑下', 'To make something worse in quality or value.', [
    ['使贬值；使卑下', 'To make something worse in quality or value.', '使质量或价值降低。', '及物，正式：debase oneself（自贬身份）。', 'Cheap advertising debased the brand.', '廉价广告拉低了这个品牌的档次。', ['debase oneself'], ['stoop'], 'verb', '及物', '商务'],
  ], 'debases~debased~debased~debasing', ['base'], '←base A2 基础 + de-（向下），A2 继承；近义 stoop 屈尊（自贬身份行事）');

  W('decant', 'verb', '/dɪˈkænt/', '', [], '倾倒；注入', 'To pour liquid from one container into another, gently.', [
    ['倾倒；注入', 'To pour liquid from one container into another, gently.', '把液体从一个容器轻缓倒入另一个。', '及物：decant the wine。', 'She decanted the wine into a carafe.', '她把酒倒进了醒酒瓶。', ['decant into'], ['pour'], 'verb', '及物', '饮食'],
  ], 'decants~decanted~decanted~decanting', [], '拉丁 de- + canthus（倾口）；近义 pour 倒（最常用、不限容器）。分级留空');

  W('deceased', 'adjective', '/dɪˈsiːst/', '', [], '已故的；逝去的', 'Already dead; used of someone who has died.', [
    ['已故的；逝去的', 'Already dead; used to describe someone who has died.', '已经去世的，用于描述死者。', '委婉正式语，常指最近去世者。', 'The will names the deceased relatives.', '遗嘱列出了逝去亲属的名字。', ['the deceased person'], ['dead', 'late'], 'adjective', '定语', '法律'],
  ], '', ['dead'], 'decease 去世（本词库未收），故留空；家族 dead 死的（最常用）、late 已故的（指前任或近故者）');

  W('decelerate', 'verb', '/ˌdiːˈseləreɪt/', '', [], '减速；使减速', 'To slow down, or to make something slow down.', [
    ['减速；使减速', 'To slow down, or to make a vehicle or process slow down.', '放慢速度，或使车辆、过程减速。', '不及物或及物，较正式。', 'The car decelerated before the turn.', '汽车在转弯前减速了。', ['decelerate slowly'], ['slow'], 'verb', '不及物', '交通'],
  ], 'decelerates~decelerated~decelerated~decelerating', ['slow'], 'de- 反向 + celerate（加速变体，accelerate 不在词形内），故留空；家族 slow 减慢（最常用）');

  W('decency', 'noun', '/ˈdiːsnsi/', 'B1', [], '得体；正派', 'Behaviour that follows accepted moral standards.', [
    ['得体；正派', 'Behaviour that follows accepted moral standards.', '符合公认道德标准的举止。', '不可数或可数 common decency（基本礼貌）。', 'They forced him out of common decency.', '出于基本的体面他们把他赶了出去。', ['common decency'], ['grace'], 'noun', 'uncountable/countable', '通用'],
  ], 'decencies', ['decent'], '←decent B1 正派的 + -ency（-t→-c 音变），B1 继承；近义 grace 优雅得体（仪态美）');

  W('deception', 'noun', '/dɪˈsepʃn/', 'B1', ['CET4'], '欺骗；骗局', 'The act of making someone believe something that is not true.', [
    ['欺骗；骗局', 'The act of making someone believe something that is not true.', '让某人相信不真实之事的行为。', '可数或不可数：practise deception（行骗）。', 'The contract was based on deception.', '这份合同建立在欺骗之上。', ['a web of deception'], ['fraud', 'trick'], 'noun', 'uncountable/countable', '法律'],
  ], 'deceptions', ['fraud'], '←deceive B1 欺骗 + -tion（v→t 音变），B1 继承；家族 fraud 欺诈（金融法律）、近义 trick 诡计');

  W('decision', 'noun', '/dɪˈsɪʒn/', 'A2', ['CET4'], '决定；决心', 'A choice that you make after thinking about the options.', [
    ['决定；抉择', 'A choice that you make after thinking about the options.', '权衡之后作出的选择。', '可数：make a decision。', 'It was a difficult decision to make.', '这是个难以作出的决定。', ['make a decision'], ['choice'], 'noun', 'countable', '通用'],
    ['决心；果断', 'The quality of being firm and sure in making choices.', '作选择时坚定果断的品质。', '不可数：a leader of decision（果断的领导者）。', 'She showed great decision in the crisis.', '危机中她表现得十分果断。', [], ['resolve'], 'noun', 'uncountable', '通用'],
  ], 'decisions', ['choice'], '←decide A2 + -sion（d→s 音变），A2 继承；家族 choice 选择、近义 resolve 决断（坚定不移）');

  W('decisive', 'adjective', '/dɪˈsaɪsɪv/', 'A2', ['CET4'], '决定性的；果断的', 'Settling an issue, or someone who decides quickly and firmly.', [
    ['决定性的', 'Settling an issue; having a clear effect on the result.', '确定问题的、对结果有明显影响的。', '常见 decisive factor/victory（决定性因素、胜利）。', 'Speed was the decisive factor.', '速度是决定性因素。', ['a decisive battle'], ['crucial'], 'adjective', '定语', '通用'],
    ['果断的', 'Someone who decides quickly and firmly.', '作决定快而坚定的。', '多形容人：a decisive leader。', 'The new manager is calm and decisive.', '新经理冷静而果断。', ['a decisive person'], ['final'], 'adjective', '定语/表语', '商务'],
  ], '', ['crucial'], '←decide A2 + -sive（d→s 音变），A2 继承；家族 crucial 关键的、final 最终的（两词均另在家族列）');

  W('declaim', 'verb', '/dɪˈkleɪm/', 'B1', [], '朗诵；慷慨陈词', 'To speak or recite loudly and dramatically.', [
    ['朗诵；慷慨陈词', 'To speak or recite something aloud in a dramatic way.', '以夸张激昂的方式大声说话或朗诵。', '不及物或及物：declaim against（痛斥）。', 'She declaimed the speech from memory.', '她背诵朗诵了那篇演说。', ['declaim against'], ['recite'], 'verb', '不及物', '艺术'],
  ], 'declaims~declaimed~declaimed~declaiming', ['claim'], '←de + claim B1（词形可见 claim），B1 继承；近义 recite 背诵（逐字复述）');

  W('declaration', 'noun', '/ˌdekləˈreɪʃn/', 'B1', ['CET4'], '声明；申报', 'A formal or official statement, or an official account of goods.', [
    ['声明；宣布', 'A formal or official statement.', '正式或官方的陈述。', '可数：a declaration of independence（独立宣言）。', 'They signed the declaration at noon.', '他们在中午签署了声明。', ['a joint declaration'], ['profession'], 'noun', 'countable', '政治'],
    ['申报（单）', 'An official statement about goods you are bringing into a country.', '入关时对所携货物的正式申报。', '可数：a customs declaration（报关单）。', 'Fill in the customs declaration.', '填写报关单。', ['customs declaration'], [], 'noun', 'countable', '商务'],
  ], 'declarations', ['declare'], '←declare B1 宣布 + -ation，B1 继承；第一义近义 profession 宣称（正式表态）');

  W('declining', 'adjective', '/dɪˈklaɪnɪŋ/', 'B1', [], '下降中的；衰退的', 'Becoming smaller, weaker, or less common.', [
    ['下降中的；衰退的', 'Becoming smaller, weaker, or less common.', '变小、变弱或变少的。', '常见 declining numbers/prices（数字、价格下滑）。', 'Membership has been declining for years.', '会员人数多年来一直下滑。', ['a declining market'], ['downward'], 'adjective', '定语', '商务'],
  ], '', ['downward'], '←decline B1 + -ing，B1 继承；家族 downward 向下的（方向描述）');

  W('decompose', 'verb', '/ˌdiːkəmˈpəʊz/', '', [], '腐烂；分解', 'To rot, or to break something down into simpler parts.', [
    ['腐烂；分解', 'To rot, or to break something down into simpler parts.', '腐坏，或把某物拆解为更简单的部分。', '不及物（腐）或及物（分解）。', 'The body had begun to decompose.', '尸体已开始腐烂。', ['decompose into'], ['decay'], 'verb', '不及物', '科学'],
  ], 'decomposes~decomposed~decomposed~decomposing', ['decomposition', 'decomposer'], 'decomposition 是分解过程，decomposer 是分解者；近义 decay 腐朽（有机物变坏）。');

  W('decoration', 'noun', '/ˌdekəˈreɪʃn/', 'B1', ['CET4'], '装饰；勋章', 'Something used to make a place look attractive, or a medal for bravery.', [
    ['装饰；装潢', 'Something used to make a place or person look more attractive.', '为美化地方或人而用的东西。', '可数或不可数：a room full of decorations（满是装饰的房间）。', 'The decoration took three days.', '装潢花了三天。', ['party decorations'], ['ornament'], 'noun', 'uncountable/countable', '家居'],
    ['勋章；奖章', 'A medal given for bravery or service.', '为英勇或服役授予的奖章。', '可数：a decoration for valour（英勇勋章）。', 'The soldier received a decoration.', '这名士兵获得了一枚勋章。', [], ['medal'], 'noun', 'countable', '军事'],
  ], 'decorations', ['ornament'], '←decorate B1 装饰 + -ion，B1 继承；家族 ornament 饰物、近义 medal 奖章（第二义）');

  W('deepness', 'noun', '/ˈdiːpnəs/', 'A2', [], '深；深度', 'The quality of being deep.', [
    ['深；深度', 'The quality of being deep.', '深这一性质。', '不可数：measure the deepness of。', 'The deepness of the pool varies.', '泳池各处深浅不一。', [], ['depth'], 'noun', 'uncountable', '通用'],
  ], '', ['depth'], '←deep A2 + -ness，A2 继承；家族 depth 深度（更常用、可数度量）');

  W('defeatism', 'noun', '/dɪˈfiːtɪzəm/', 'B1', [], '失败主义', 'The belief that defeat is unavoidable, so effort is pointless.', [
    ['失败主义', 'The belief that defeat is unavoidable, so effort is pointless.', '认定失败难免、努力无用的心态。', '不可数，贬义。', 'The general warned against defeatism.', '将军警告不要失败主义。', [], ['pessimism'], 'noun', 'uncountable', '政治'],
  ], '', ['pessimism'], '←defeat B1 失败 + -ism（主义），B1 继承；近义 pessimism 悲观（对一切都不看好）');

  W('defence', 'noun', '/dɪˈfens/', 'A2', [], '防御；辩护', 'Protection against attack, or an argument in support of something.', [
    ['防御；防卫', 'Protection against attack or danger.', '抵御攻击或危险的保护。', '不可数：in defence of（保卫）。', 'The city walls were its main defence.', '城墙是这座城市的主要防御。', ['in defence of'], ['plea'], 'noun', 'uncountable', '军事'],
    ['辩护；答辩', 'An argument in support of someone or something.', '支持某人某事的论据。', '可数：mount a defence（提出辩护）。', 'He mounted a strong defence in court.', '他在法庭上提出了有力的辩护。', ['a line of defence'], [], 'noun', 'countable', '法律'],
  ], 'defences', ['defend'], '←defend A2 保卫 + -ce（d→s 音变，defense 同源），A2 继承；第二义近义 plea 抗辩（法庭请求）');

  W('defenceless', 'adjective', '/dɪˈfensləs/', 'A2', [], '无防御的；无防备的', 'Unable to protect yourself against attack.', [
    ['无防御的；无防备的', 'Unable to protect yourself against attack.', '无力保护自己免受攻击的。', '亦拼 defenseless（美式）。', 'The village was left defenceless.', '村庄变得毫无防御。', ['a defenceless position'], ['vulnerable'], 'adjective', '定语/表语', '军事'],
  ], '', ['vulnerable'], '←defence A2 + -less（无……的），A2 继承；近义 vulnerable 易受伤害的（易被攻破）');

  W('defendant', 'noun', '/dɪˈfendənt/', 'A2', ['CET4'], '被告', 'A person or company accused of a crime in court.', [
    ['被告', 'A person or company accused of a crime in court.', '在法庭上被控犯罪的个人或公司。', '可数，法律用语。', 'The defendant pleaded not guilty.', '被告表示不认罪。', ['defendant in the case'], ['accused', 'suspect'], 'noun', 'countable', '法律'],
  ], 'defendants', ['defend'], '←defend A2 + -ant（表人：被辩护者），A2 继承；近义 accused 被控告者、suspect 嫌疑人（侦查阶段）');

  W('definitely', 'adverb', '/ˈdefɪnətli/', 'B1', ['CET4'], '肯定；确切地', 'Without any doubt; certainly.', [
    ['肯定；确切地', 'Without any doubt; certainly.', '毫无疑问地。', '作状语，表强调。', 'I will definitely attend the meeting.', '我肯定参加这个会议。', [], ['absolutely', 'undoubtedly'], 'adverb', 'null', '通用'],
    ['没错；的确（口语应答）', 'Yes; that is certainly true (informal reply).', '对；确实如此（非正式应答）。', '单独或句首使用。', 'Definitely, we can start now.', '没错，我们现在可以开始了。', [], ['means'], 'adverb', 'null', '口语'],
  ], '', ['undoubtedly'], '←definite B1 明确的 + -ly，B1 继承；家族 undoubtedly 无疑地、近义 absolutely 绝对地（口语强化）');

  W('deflated', 'adjective', '/dɪˈfleɪtɪd/', '', [], '泄了气的；沮丧的', 'Feeling less confident or cheerful than before.', [
    ['泄了气的；沮丧的', 'Feeling less confident or cheerful than before.', '比之前更没信心或更扫兴的。', '比喻义：情绪像瘪了的球。', 'He felt deflated by the criticism.', '批评让他泄了气。', ['feel deflated'], ['flat'], 'adjective', '定语/表语', '通用'],
  ], '', ['flat'], 'deflate 放气（本词库未收）+ -ed，故留空；近义 flat 平的（flat 俚：泄气的）。分级留空');

  W('deform', 'verb', '/dɪˈfɔːm/', 'A1', [], '使变形；使成畸形', 'To change the normal shape of something, usually for the worse.', [
    ['使变形；使成畸形', 'To change the normal shape of something, usually for the worse.', '改变某物正常形状，通常指变坏。', '及物，医学与工程用语。', 'Heat can deform the plastic.', '高温会使塑料变形。', ['deform the shape'], ['distort'], 'verb', '及物', '科学'],
  ], 'deforms~deformed~deformed~deforming', ['distort'], '←form A1 形状 + de-（去掉），A1 继承；家族 distort 扭曲（偏斜变形）');

  W('deft', 'adjective', '/deft/', '', [], '灵巧的；娴熟的', 'Quick and skilful with the hands.', [
    ['灵巧的；娴熟的', 'Quick and skilful with the hands.', '手上动作快而熟练的。', '多形容手部动作：a deft touch。', 'With a deft twist he opened the lid.', '他手巧地一拧就打开了盖子。', ['a deft hand'], ['handy'], 'adjective', '定语', '外貌'],
  ], '', ['handy'], '近义 handy 手巧的（日常、方便顺手）。分级留空');

  W('dehydrate', 'verb', '/ˌdiːhaɪˈdreɪt/', '', [], '脱水；使干燥', 'To remove water from something, or to lose too much water from the body.', [
    ['脱水；使干燥', 'To remove water from something, or to lose too much water from the body.', '除去某物中的水，或体内失水过多。', '及物或不及物，医学与食品用语。', 'The fruit was dehydrated for storage.', '水果被脱水以便储存。', ['dehydrated food'], ['dry'], 'verb', '及物', '健康'],
  ], 'dehydrates~dehydrated~dehydrated~dehydrating', [], 'de- 去掉 + hydrate 水合（hydrate 本词库未收），故留空；近义 dry 弄干（最常用）');

  W('deity', 'noun', '/ˈdiːəti/', '', [], '神；女神', 'A god or goddess in a religion.', [
    ['神；女神', 'A god or goddess in a religion.', '宗教中的神祇。', '可数，复数 deities，较正式。', 'The temple honoured a local deity.', '这座神庙供奉着一位地方神。', ['an ancient deity'], ['god'], 'noun', 'countable', '宗教'],
  ], 'deities', ['god'], '拉丁 deus（神）+ -ity；家族 god 神（最常用）。分级留空');

  W('delayed', 'adjective', '/dɪˈleɪd/', 'B1', [], '延误的；迟到的', 'Late; happening later than planned.', [
    ['延误的；迟到的', 'Late; happening later than planned.', '晚于计划发生的。', '常用于航班、答复：a delayed reply。', 'We got a delayed reply.', '我们收到了迟来的答复。', ['a delayed flight'], ['late', 'retarded'], 'adjective', '定语/表语', '交通'],
  ], '', ['late'], '←delay B1 + -ed，B1 继承；家族 late 迟的、近义 retarded 延缓的（旧式用语，今多避免）');

  W('delegation', 'noun', '/ˌdelɪˈɡeɪʃn/', 'B1', ['CET4'], '委派；代表团', 'The act of giving a task to someone, or a group of people sent to represent others.', [
    ['委派；授权', 'The act of giving power or a task to someone else.', '把权力或任务交给他人的行为。', '不可数：delegation of authority（授权）。', 'The delegation of duties sped the work up.', '职责的分派加快了工作进度。', ['delegation of power'], [], 'noun', 'uncountable', '商务'],
    ['代表团', 'A group of people sent to represent an organization or country.', '受派代表某组织或国家的一群人。', '可数：a trade delegation（贸易代表团）。', 'The delegation arrived from Geneva.', '代表团从日内瓦抵达。', ['lead a delegation'], ['contingent', 'mission'], 'noun', 'countable', '政治'],
  ], 'delegations', ['contingent'], '←delegate B1 + -ion，B1 继承；家族 contingent 代表团（随行团）、近义 mission 使团（公务团）');

  W('delicatessen', 'noun', '/ˌdelɪkəˈtesn/', '', [], '熟食店；熟食', 'A shop selling ready-to-eat foods, or the foods it sells.', [
    ['熟食店；熟食', 'A shop selling ready-to-eat foods, or the special foods it sells.', '出售即食食品的店，或其售卖的特色食品。', '可数，复数 delicatessens，美式常用 deli。', 'We bought cheese at the delicatessen.', '我们在熟食店买了奶酪。', [], ['delicacy'], 'noun', 'countable', '饮食'],
  ], 'delicatessens', [], '德语 delicatessen（美味佳肴）；近义 delicacy 精美食物（单件、正式）。分级留空');

  W('delimit', 'verb', '/ˌdiːˈlɪmɪt/', 'B1', [], '划定界限；限定', 'To mark or set the limits of something.', [
    ['划定界限；限定', 'To mark or set the limits of something.', '标示或设定某物的界限。', '及物，正式与学术用语。', 'The treaty delimits the border.', '条约划定了边界线。', ['delimit the area'], ['define'], 'verb', '及物', '书面'],
  ], 'delimits~delimited~delimited~delimiting', ['limit'], '←limit B1 界限 + de-（加强），B1 继承；近义 define 界定（说明含义或范围）');

  W('deliverance', 'noun', '/dɪˈlɪvərəns/', 'A2', [], '解救；解脱', 'The act of being rescued from a dangerous or unpleasant situation.', [
    ['解救；解脱', 'The act of being rescued from a dangerous or unpleasant situation.', '从危险或困境中被救出的行为。', '可数或不可数，较文，常带宗教义。', 'They prayed for deliverance.', '他们祈祷得到解救。', ['prayer for deliverance'], ['salvation'], 'noun', 'uncountable/countable', '宗教'],
  ], 'deliverances', ['deliver'], '←deliver A2 递送、解救 + -ance，A2 继承；近义 salvation 救赎（宗教义：灵魂得救）');

  W('delivery', 'noun', '/dɪˈlɪvəri/', 'A2', ['CET4'], '递送；分娩', 'The act of taking goods or messages to people, or the birth of a baby.', [
    ['递送；交付', 'The act of taking goods, letters, or food to people.', '把货物、信件或食物送到人手里。', '可数或不可数：home delivery（送货上门）。', 'Delivery is free over fifty yuan.', '满五十元免配送费。', ['next-day delivery'], ['dispatch'], 'noun', 'uncountable/countable', '商务'],
    ['分娩；生产', 'The birth of a baby.', '婴儿出生。', '可数或不可数：a natural delivery（顺产）。', 'The delivery went well.', '分娩顺利。', ['easy delivery'], ['labor'], 'noun', 'uncountable/countable', '健康'],
  ], 'deliveries', ['dispatch'], '←deliver A2 + -y，A2 继承；家族 dispatch 发送（快件发出）、近义 labor 分娩（美式拼写）');

})(typeof window !== 'undefined' ? window : globalThis);
