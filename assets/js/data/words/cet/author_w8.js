/* data/words/cet/author_w8.js — W 批次 8，缺口 wager ~ waterfowl，共 31 条
 * （23 单词 + 8 短语；短语清单：wait for、waiting room、wake up、walk out、was able to、
 *   watch out、water cooler、water down；单词条目一律不标 .phrase）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_w8.txt，widx 139-169，词头无残缺；brief 首行 wager、末行 waterfowl）。
 * CET 标签照抄队列：CET4 × 6（waken、warmth、warning、washing、wasteful、watchful），CET6 × 0，
 *   其余 25 条 []（含 8 条短语）。
 * brief：%TEMP%\opencode\_w8_brief.txt 共 23 行，与本批 23 个单词一一对应（8 条短语不入 brief）；
 *   brief 的 refs 与任务清单 fam/syn 逐条比对一致（refs = fam 列 + syn 列），无错位，与清单相符无需强制自扫；
 *   8 行给出根提示（wage B1 ×2、walk A1 ×2、want A1、warm A1、warn A2、wash A1），15 行显示 ←?，
 *   一律按规范 §5.2 用纯文本自扫（fs.readFileSync + indexOf 取词头引号后的顶层参数，取第 4 参，
 *   扫 assets/js/data/words/cet/author_*.js，未 require 全库；部分旧文件用 W(裸词头 体例，扫描已兼容）。
 * 扫根结论（自扫，第 4 参；均 author_w1.js）：wake A1、walk A1、want A1、warm A1、warn A2、
 *   wash A1、waste A2、watch A1、waist A2、wage B1、water A1；
 *   仅备述家族/近义不作成根：heat A2（author_h2.js）、temperature A2（author_t1.js）、glow B2（author_g1.js）、
 *   pale A2（author_p1.js）、sing A1（author_s2.js）、howl C1（author_h4.js）、stray C1（author_s4.js）、
 *   bee A2、duck A2（author_d2.js）、laundry B1（author_l1.js）、pedestrian B2（author_p1.js）、
 *   desert B1（author_d1.js）、wilderness B2（author_w2.js）、vest B1（author_v1.js）；
 *   waif、wail、wan、warble、wasp、watchman、watchword、waterfowl 本词均不在库。
 * brief 根提示复核通过（自扫同级）：wage B1（noun/verb）、walk A1（verb/noun）、want A1（verb/noun）、
 *   warm A1（adjective/verb/noun）、warn A2（verb）、wash A1（verb/noun）。
 * brief 根提示未采用：wager ←wage B1 —— §5.1 语义直连核对不通过，详见下方 wager 条（判断项）。
 * · 继承（17 单词）：
 *   waken←wake A1 + -en（-en 在 §5.4 清单使役后缀，先例 author_s17.js soften←soft A1、
 *     author_s22.js strengthen←strong A2、author_s14.js shorten←short A1）；
 *   walker←walk A1 + -er、walking←walk A1 + -ing、warming←warm A1 + -ing、washing←wash A1 + -ing
 *     （-er/-ing 均在 §5.4 清单，先例 author_w7.js writer←write A1、writing←write A1）；
 *   wanted←want A1 + -ed（-ed 透明，过去分词转形容词；判断项：同 author_d7.js done←do A1、
 *     author_u4.js united←unite B1 先例）；
 *   warmth←warm A1 + -th（-th 在 §5.4 清单抽象名词后缀，warm 去 e 加 th，先例 author_w5.js width←wide A2、
 *     author_g4.js growth←grow A1）；
 *   warning←warn A2 + -ing（先例 author_t8.js tuning←tune A2、author_w7.js writing←write A1）；
 *   wasteful←waste A2 + -ful、watchful←watch A1 + -ful（-ful 在 §5.4 清单，先例 author_t8.js
 *     truthful←truth B1、author_s15.js silken←silk B1）；
 *   wages←wage B1（复数形式单列词条，判断项：同 author_t8.js troops←troop B2、author_w5.js wilds←wild A2）；
 *   复合取首成分（§5.3，全部为判断项）：waistcoat←waist A2、waistline←waist A2（-coat/-line 不在
 *     §5.4 清单，同 author_t8.js third-level←third A1、author_l5.js lookouts←look A1 先例）、
 *     wasteland←waste A2（-land 不在清单，同 author_l3.js landfills←land A2、author_m1.js homeland B2）、
 *     watchman←watch A1（-man 不在清单，同 author_n3.js noblemen←noble B2）、
 *     watchword←watch A1（-word 不在清单，同 author_p1.js password A2、author_p2.js playground A2）、
 *     waterfowl←water A1（-fowl 为独立名词不在清单，同 author_g1.js greenhouse B1、author_p2.js playground A2）。
 * · 留空（6 单词 + 8 短语）：
 *   wager（brief 根提示 ←wage B1，自扫复核为 B1，但 wager 与 wage 仅为词源同源，日耳曼语同根
 *     waga- 抵押、赌注；库内 wage 义为「工资、薪水」，与 wager「赌注、打赌」现代语义不直连，
 *     按 §5.1 核对不通过，留空；判断项，同 author_t8.js twine←twin B1 先例）、
 *   waif（库内无语源根；-aif 不在 §5.4 清单；stray C1 为同义词非词根，词首非全段共享，兄弟派生 §5.6 不成立）、
 *   wail（-ail 不在 §5.4 清单；howl C1 为同义词非词根，兄弟派生 §5.6 不成立）、
 *   wan（-an 不在 §5.4 清单；pale A2 为同义词非词根；wan 与 want A1 形近但非派生，切词假象 §5.7，判断项）、
 *   warble（-arble 不在 §5.4 清单；sing A1 为同义词非词根，兄弟派生 §5.6 不成立）、
 *   wasp（-asp 不在 §5.4 清单；bee A2 为同科昆虫的同义词非词根，兄弟派生 §5.6 不成立）；
 *   8 条短语一律 §6 分级留空。
 * CEFR 分布（23 单词）：A1 × 11（waken、walker、walking、wanted、warming、warmth、washing、watchful、
 *   watchman、watchword、waterfowl）、A2 × 5（waistcoat、waistline、warning、wasteful、wasteland）、
 *   B1 × 1（wages）、留空 × 6（wager、waif、wail、wan、warble、wasp）；短语 8 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_w8.js 必须在 _cet_helper.js 之后加载');

  W('wager', 'noun/verb', '/ˈweɪdʒə/', '', [], '赌注；打赌', 'An amount of money risked on an uncertain result, or the act of risking it.', [
    ['赌注；赌物', 'A sum of money or something of value that is risked on the result of an uncertain event.', '押在结果难料之事上的一笔钱或一件有价值的物品。', '可数，常与 on、against 连用。', 'They put a large wager on the final race.', '他们在最后一场比赛上押了大笔赌注。', ['place a wager on', 'a losing wager'], ['bet'], 'noun', 'countable', '口语'],
    ['打赌；赌博', 'To risk money on the result of an uncertain event.', '就结果难料之事押上一笔钱。', '及物动词，常与 on 连用，也可接 that 从句。', 'He wagered a month of wages on that horse.', '他把一个月的工资押在那匹马上。', ['wager on a horse', 'wager that a team will win'], ['gamble'], 'verb', '及物', '口语'],
  ], 'wagers', ['bet'], 'brief 根提示 ←wage B1 薪水、发动（自扫 author_w1.js 第 4 参复核为 B1），但 wager 与 wage 仅为词源同源，日耳曼语同根 waga- 抵押、赌注；库内 wage 义为「工资、薪水」，与 wager「赌注、打赌」现代语义不直连，按 §5.1 核对不通过，留空（判断项，同 author_t8.js twine←twin B1 先例）；-er 虽在 §5.4 清单但无直连在库根可继；家族 bet 赌注、打赌（队列原样，入第 10 参），近义 bet 赌注（置义项 1）、gamble 赌博（置义项 2），各恰好一次');

  W('wages', 'noun', '/ˈweɪdʒɪz/', 'B1', [], '工资；薪水（复数）', 'The regular pay that a worker receives for doing a job.', [
    ['工资；薪水（复数）', 'The regular money paid to a worker for a job, usually a weekly or monthly amount.', '定期付给劳动者的报酬，通常按周或按月结算。', 'wage 的复数形式单列词条；常用复数形式，谓语也用复数。', 'The workers asked for higher wages.', '工人们要求提高工资。', ['weekly wages', 'low wages', 'wages and salaries'], ['pay'], 'noun', 'countable', '商务'],
    ['报酬；应得的待遇', 'The payment or treatment that a person receives for work done.', '因劳动而得到的报酬或对待。', '复数形式，也可引申为应得的对待，如 the wages of sin。', 'They finally received the wages of their effort.', '他们终于得到了努力应得的回报。', ['the wages of sin'], ['payroll'], 'noun', 'countable', '通用'],
  ],'wages', ['pay', 'payroll'], 'brief 根提示 ←wage B1 薪水（自扫 author_w1.js 第 4 参复核为 B1），wages 为 wage 的复数形式单列词条，语义直连（工资的复数），B1 继承（判断项：复数单列，同 author_t8.js troops←troop B2、author_w5.js wilds←wild A2 先例），按 §4 forms 留空；家族 pay 支付、工资与 payroll 工资表（队列原样，入第 10 参），近义 pay 工资（置义项 1）、payroll 工资（置义项 2），各恰好一次');

  W('waif', 'noun', '/weɪf/', '', [], '流浪儿；弃儿', 'A thin, poor child with no home and no family to look after him or her.', [
    ['流浪儿；弃儿', 'A poor, thin child who has no home and nobody to look after him or her.', '没有家可归、无人照看的瘦弱贫困儿童。', '可数，多见于旧时与文学语境，带同情色彩。', 'The waif was found asleep under the bridge.', '那个流浪儿被发现睡在桥下。', ['a thin waif', 'help a waif'], ['stray'], 'noun', 'countable', '文学'],
  ], 'waifs', [], 'brief ←?，按 §5.2 自扫根：库内无 waif 的语义直连词根（wa- 非派生成分，-aif 不在 §5.4 清单；近义 stray C1 流浪的（author_s4.js）为同义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；近义 stray 走失的、流浪的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('wail', 'verb/noun', '/weɪl/', '', [], '哀哭；嚎啕', 'To cry loudly in pain or grief, or the sound of such a cry.', [
    ['哀哭；嚎啕大哭', 'To cry loudly because of grief, pain or despair.', '因悲伤、疼痛或绝望而放声哭喊。', '不及物动词，常与 with、for 连用表示原因。', 'The children wailed with grief after the accident.', '事故之后孩子们悲痛地嚎哭。', ['wail with grief', 'wail in pain'], ['groan'], 'verb', '不及物', '通用'],
    ['哀哭声；嚎叫', 'A long loud cry of pain or sadness.', '一声悠长而响亮的痛苦或悲伤的哭喊。', '可数，常用于 of pain 一类结构。', 'A wail of disappointment came from the crowd.', '人群中发出一声失望的哀叹。', ['a wail of pain', 'a wail of anguish'], ['howl'], 'noun', 'countable', '通用'],
  ], 'wails', ['howl'], 'brief ←?，按 §5.2 自扫根：库内无 wail 的语义直连词根（-ail 不在 §5.4 清单；家族/近义 howl C1 嚎叫（author_h4.js）为同义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；近义 groan 呻吟（置义项 1）、howl 嚎叫（置义项 2），队列原样、各恰好一次；fam howl 嚎叫（队列原样，入第 10 参）');

  W('waistcoat', 'noun', '/ˈweɪstkəʊt/', 'A2', [], '马甲；背心', 'A short sleeveless garment worn over a shirt.', [
    ['马甲；西式背心', 'A short sleeveless garment that buttons over the chest and is worn over a shirt.', '套在衬衫外面、扣在胸前的短无袖上衣。', '可数，英式英语最常用；美式英语里同一件衣服叫 vest。', 'He put on a grey waistcoat over his white shirt.', '他在白衬衫外面套了一件灰马甲。', ['a buttoned waistcoat', 'wear a waistcoat'], ['vest'], 'noun', 'countable', '家居'],
    ['（旧时）内衣汗衫', 'A thin undergarment worn next to the skin by men in former times.', '过去男子贴身穿的薄内衣。', '可数，旧时用法，今多用 undershirt。', 'His father still wore a winter waistcoat under his coat.', '他父亲那时仍在大衣里面穿一件冬季内衣。', ['a winter waistcoat'], [], 'noun', 'countable', '家居'],
  ], 'waistcoats', ['vest'], 'brief ←?，按 §5.2 自扫根 waist A2 腰、腰部（author_w1.js 第 4 参）——waistcoat = waist + coat，按 §5.3 复合词取首成分且语义直连（马甲即罩住腰部的短衣），A2 继承（判断项：-coat 不在 §5.4 清单，复合首成分裁定，同 author_t8.js third-level←third A1、author_l5.js lookouts←look A1 先例）；近义 vest 马甲（队列原样，置义项 1 恰好一次），fam vest 入第 10 参');

  W('waistline', 'noun', '/ˈweɪstlaɪn/', 'A2', [], '腰线；腰围', 'The line around the body at the waist, or the shape of the body there.', [
    ['腰围；腰部的尺寸', 'The measurement of the body around its narrowest part above the hips.', '身体在髋部以上最细处绕一圈的尺寸。', '可数，服装与健身行业常用。', 'She needs a dress with a smaller waistline.', '她需要一条腰围更小的裙子。', ['a slim waistline', 'measure the waistline'], ['waist'], 'noun', 'countable', '健康'],
    ['（衣物的）腰线', 'The seam or line of a garment that marks where the waist is.', '衣服上标出腰部的缝线或线条。', '可数，服装设计用语。', 'The dress has a high waistline and long sleeves.', '这条裙子腰线很高，袖子很长。', ['a high waistline', 'a low waistline'], [], 'noun', 'countable', '家居'],
  ], 'waistlines', ['waist'], 'brief ←?，按 §5.2 自扫根 waist A2 腰（author_w1.js 第 4 参）——waistline = waist + line，按 §5.3 复合词取首成分且语义直连（腰线即腰部的线条），A2 继承（判断项：-line 不在 §5.4 清单，复合首成分裁定，同 author_l5.js lookouts←look A1、author_p2.js playground A2 先例）；近义 waist 腰（队列原样，置义项 1 恰好一次），fam waist 入第 10 参');

  W('wait for', 'verb', '/weɪt fɔː/', '', [], '等待；等候', 'To stay in one place until someone or something arrives.', [
    ['等待；等候', 'To stay where you are until a person or thing comes.', '留在原地直到某人或某物到来。', '及物短语动词，宾语为等待对象；用于等待某一事件。', 'We waited for the bus in the rain.', '我们在雨中等公交车。', ['wait for the bus', 'wait for news'], ['await'], 'verb', '及物', '通用'],
    ['期待；等着发生', 'To expect something that has been promised or is likely to happen.', '期待已许诺或很可能发生的事。', '及物短语动词，也可接动名词作宾语。', 'They are waiting for the results of the test.', '他们在等考试结果。', ['wait for an answer', 'wait for a chance'], [], 'verb', '及物', '通用'],
  ],'waits for~waited for~waiting for', ['await'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；fam await 等待（队列原样，入第 10 参），近义 await 等待、等候（队列原样，置义项 1 恰好一次）').phrase = true;

  W('waiting room', 'noun', '/ˈweɪtɪŋ ruːm/', '', [], '等候室；候车室', 'A room where people wait before being seen or served.', [
    ['等候室；候车室', 'A room in a station, clinic or office where people sit until their turn.', '车站、诊所或办公室里供人坐着等候轮到的房间。', '可数名词短语，常见于车站、医院与办公楼。', 'Please wait in the waiting room until your number is called.', '请在等候室等候，直到叫到您的号。', ['sit in the waiting room', 'a crowded waiting room'], ['lounge'], 'noun', 'countable', '交通'],
  ], '', ['lounge'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；fam lounge 休息室（队列原样，入第 10 参），近义 lounge 休息室、休息区（队列原样，置唯一义项恰好一次）').phrase = true;

  W('wake up', 'verb', '/weɪk ʌp/', '', [], '醒来；叫醒', 'To stop sleeping, or to make someone stop sleeping.', [
    ['醒来；苏醒', 'To stop sleeping and become awake.', '从睡眠中醒来，恢复清醒。', '不及物短语动词，常与 at 连用表时刻，与 to 加时间连用表时间长度。', 'She woke up at six and made tea.', '她六点醒来，烧了茶。', ['wake up early', 'wake up to a noise'], ['awake'], 'verb', '不及物', '通用'],
    ['叫醒；唤醒', 'To make someone stop sleeping.', '使某人从睡眠中醒来。', '及物短语动词，宾语可置于 up 之后或两词之间。', 'Please wake me up if I am late.', '如果我睡过头了，请叫醒我。', ['wake someone up', 'wake a child up'], [], 'verb', '及物', '通用'],
  ],'wakes up~woke up~woken up~waking up', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 awake 醒来、醒悟（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('waken', 'verb', '/ˈweɪkən/', 'A1', ['CET4'], '唤醒；醒来', 'To cause someone to stop sleeping, or to become awake.', [
    ['唤醒；叫醒', 'To cause someone to stop sleeping.', '使某人从睡眠中醒来。', '及物动词，比 wake 更书面，语气较正式。', 'A loud knock wakened the whole house.', '一声巨响把全家都惊醒了。', ['waken someone from sleep', 'waken a child'], ['wake'], 'verb', '及物', '书面'],
    ['醒来；苏醒', 'To become awake after sleeping.', '睡后恢复清醒。', '不及物动词，文学与书面语用法。', 'They wakened early in order to see the sunrise.', '他们早早醒来，以便看日出。', ['waken at dawn'], [], 'verb', '不及物', '文学'],
  ], 'wakens~wakened~wakened~wakening',['wake'], 'brief ←?，按 §5.2 自扫根 wake A1 醒、睡觉（author_w1.js 第 4 参，verb/noun）+ -en（-en 在 §5.4 清单，透明使役后缀，先例 author_s17.js soften←soft A1、author_s22.js strengthen←strong A2、author_s14.js shorten←short A1），「使人醒来」与 wake 语义直连，A1 继承；fam 队列为空故第 10 参 []，近义 wake 醒来、唤醒（队列原样，置义项 1 恰好一次）；CET4 标签照抄队列');

  W('walk out', 'verb', '/wɔːk aʊt/', '', [], '走出；罢工', 'To leave a place on foot, or to stop work as a protest.', [
    ['走出；走开', 'To leave a building or an area by walking.', '用步行的方式离开建筑物或某个场所。', '不及物短语动词，作状语的成分置于 out 之后。', 'The audience walked out in disgust.', '观众们厌恶地退场了。', ['walk out of a room', 'walk out on someone'], [], 'verb', '不及物', '通用'],
    ['罢工；停止合作', 'To stop working as a protest, or to withdraw from an agreement.', '以抗议为目的停止工作，或退出协议。', '不及物短语动词，常与 in protest 一类状语连用。', 'The miners walked out after the pay freeze.', '工资冻结之后矿工们举行了罢工。', ['walk out in protest', 'walk out on a deal'], ['strike'], 'verb', '不及物', '社会'],
  ],'walks out~walked out~walking out', ['strike'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；fam strike 罢工（队列原样，入第 10 参），近义 strike 罢工（队列原样，置义项 2 恰好一次）').phrase = true;

  W('walker', 'noun', '/ˈwɔːkə/', 'A1', [], '步行者；散步的人', 'A person who walks, especially for exercise or for pleasure.', [
    ['步行的人；散步者', 'A person who goes from place to place on foot instead of using a vehicle.', '以步行代替开车或乘车从一个地方走到另一个地方的人。', '可数，日常与健康语境常用。', 'Early morning walkers filled the park.', '清晨的步行者挤满了公园。', ['a brisk walker', 'a keen walker'], ['pedestrian'], 'noun', 'countable', '健康'],
    ['竞走运动员', 'A person who competes in walking races.', '参加竞走比赛的运动员。', '可数，体育赛事用语。', 'The team sent three walkers to the event.', '队里派了三名竞走选手去参加这项比赛。', ['a race walker', 'a team of walkers'], [], 'noun', 'countable', '体育'],
  ], 'walkers', ['pedestrian'], 'brief 根提示 ←walk A1 走、步行（自扫 author_w1.js 第 4 参复核为 A1，verb/noun）+ -er（-er 在 §5.4 清单，施事者后缀，先例 author_w7.js writer←write A1），「走路的人」与 walk 语义直连，A1 继承；fam pedestrian 行人（队列原样，入第 10 参），近义 pedestrian 行人、步行者（队列原样，置义项 1 恰好一次）');

  W('walking', 'noun/adjective', '/ˈwɔːkɪŋ/', 'A1', [], '行走；步行；散步', 'The activity of moving on foot, or something that can be done on foot.', [
    ['行走；散步', 'The activity of moving along on foot instead of using a vehicle.', '用双脚而非交通工具进行移动的活动。', '不可数，常与 go、keep 连用；也作动名词。', 'They went walking in the hills after dinner.', '晚饭后他们到山里散步。', ['go walking', 'keep walking'], [], 'noun', 'uncountable', '通用'],
    ['步行的；走路的', 'Done on foot, or able to be done on foot.', '以步行为方式的，或可以步行完成的。', '定语表语两用，常见于 walking tour、walking distance 等搭配。', 'It is a ten minute walk from the station.', '从车站步行过来要十分钟。', ['a walking tour', 'within walking distance'], ['pedestrian'], 'adjective', '定语/表语', '通用'],
  ], '',['walk'], 'brief 根提示 ←walk A1 走、步行（自扫 author_w1.js 第 4 参复核为 A1，verb/noun）+ -ing（-ing 在 §5.4 清单，同 author_w7.js writing←write A1、author_t8.js tuning←tune A2 先例），语义直连，A1 继承；主作抽象不可数名词故 forms 留空；fam 队列为空故第 10 参 []，近义 pedestrian 步行的、行人（队列原样，置形容词义项恰好一次）');

  W('wan', 'adjective', '/wɒn/', '', [], '苍白的；憔悴的', 'Looking pale and thin because of illness, worry or tiredness.', [
    ['苍白的；憔悴的', 'Pale and weak in appearance, often because of illness, worry or lack of sleep.', '因疾病、忧虑或睡眠不足而脸色苍白、显得虚弱。', '定语表语两用，多为书面或文学用语。', 'She had a wan smile after such a long night.', '这样漫长的夜之后，她露出苍白的笑容。', ['a wan face', 'a wan smile'], ['pale'], 'adjective', '定语/表语', '文学'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：库内无 wan 的语义直连词根（-an 不在 §5.4 清单；近义 pale A2 苍白的（author_p1.js）为同义词而非词根；wan 与 want A1、wand 形近但非派生，属切词假象，规范 §5.7），留空（判断项）；近义 pale 苍白的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('wanted', 'adjective', '/ˈwɒntɪd/', 'A1', [], '需要的；受欢迎的；通缉的', 'Looking for, welcome, or being sought by the police.', [
    ['受欢迎的；受期待的', 'Desirable and welcome to the people concerned.', '为相关人士所欢迎、盼望得到的。', '定语表语两用，形容客人、嘉宾、表演者等。', 'The children are always wanted at the party.', '孩子们在聚会上总是受欢迎的。', ['a wanted guest', 'the wanted man'], ['welcome'], 'adjective', '定语/表语', '社交'],
    ['通缉的；被追捕的', 'Being sought by the police as a suspect or as an offender.', '被警方追捕的嫌疑犯或罪犯。', '定语，多用于通缉告示与新闻报道。', 'The picture of the wanted criminal was on every wall.', '那张通缉犯的照片贴满了每一面墙。', ['a wanted criminal', 'wanted by the police'], [], 'adjective', '定语', '法律'],
    ['需要的；求得的', 'Looking for, as in a help wanted notice.', '寻求中的、需要的，如招聘广告用语。', '定语，常见于 help wanted、wanted poster 等固定说法。', 'The board put up a help wanted notice in the hall.', '董事会在大厅里贴出了招工启事。', ['help wanted', 'wanted poster'], [], 'adjective', '定语', '商务'],
  ], '',['want'], 'brief 根提示 ←want A1 想要、需要（自扫 author_w1.js 第 4 参复核为 A1，verb/noun）+ -ed（-ed 在 §5.4 清单），wanted 为 want 的过去分词转形容词，语义直连，A1 继承（判断项：过去分词单列，同 author_d7.js done←do A1、author_u4.js united←unite B1 先例）；过去分词作形容词故 forms 留空；fam 队列为空故第 10 参 []，近义 welcome 受欢迎的（队列原样，置义项 1 恰好一次）');

  W('warble', 'verb/noun', '/ˈwɔːbl/', '', [], '啭鸣；颤音', 'To sing with a rapid trilling sound, or such a sound.', [
    ['啭鸣；颤唱', 'To sing with a high quivering sound, as small birds do.', '以高而颤抖的声音歌唱，如小鸟那样。', '不及物动词，主语常为鸟，也可指人颤抖的歌声。', 'The blackbird began to warble before dawn.', '天亮之前黑鸟就开始啭鸣。', ['warble in the branches', 'warble a tune'], ['sing'], 'verb', '不及物', '自然'],
    ['（声音的）颤动；颤音', 'A rapid fluttering movement of the voice, as in singing or speaking.', '歌唱或说话时声音快速起伏的颤动。', '可数，指一个颤音段时；泛指颤音时可作不可数。', 'The singer added a soft warble to the last note.', '歌手在最后一个音符上加了柔和的颤音。', ['a rich warble', 'a nasal warble'], [], 'noun', 'countable', '艺术'],
  ], 'warbles~warbled~warbled~warbling', [], 'brief ←?，按 §5.2 自扫根：库内无 warble 的语义直连词根（-arble 不在 §5.4 清单；近义 sing A1 唱、歌唱（author_s2.js）为同义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；近义 sing 唱、歌唱（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('warming', 'noun', '/ˈwɔːmɪŋ/', 'A1', [], '加热；变暖', 'The process of making something warmer or of becoming warmer.', [
    ['加热；暖化', 'The process of raising the temperature of a place or a thing.', '使某地或某物温度升高的过程。', '不可数，常与 gentle、slow 等词连用修饰。', 'Gentle warming of the room sent the baby to sleep.', '房间缓缓升温，宝宝就睡着了。', ['gentle warming', 'the warming of the soil'], [], 'noun', 'uncountable', '科学'],
    ['（全球）变暖', 'The long-term rise in the average temperature of the earth.', '地球平均气温的长期上升。', '不可数，环境与新闻常用；global warming 即全球变暖。', 'Carbon dioxide speeds up the warming of the planet.', '二氧化碳使全球变暖加速。', ['global warming', 'planetary warming'], ['greenhouse'], 'noun', 'uncountable', '环境'],
  ], '',['warm'], 'brief 根提示 ←warm A1 温暖的（自扫 author_w1.js 第 4 参复核为 A1，adjective/verb/noun）+ -ing（-ing 在 §5.4 清单，同 author_w7.js writing←write A1、author_t8.js tuning←tune A2 先例），语义直连，A1 继承；抽象不可数名词故 forms 留空；近义 greenhouse 温室（队列原样，指 global warming 温室效应，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('warmth', 'noun', '/wɔːmθ/', 'A1', ['CET4'], '温暖；热情', 'The heat given off by a fire or a body, or the affection shown to someone.', [
    ['温暖；热度', 'The heat felt near a fire or in a warm room, or the body heat of a person.', '靠近火堆或温暖房间时感到的热，或人体的热气。', '不可数，常与 the 连用。', 'She sat close to the fire to get some warmth.', '她靠近火堆坐着取暖。', ['a feeling of warmth', 'bodily warmth'], ['heat', 'temperature', 'warm'], 'noun', 'uncountable', '通用'],
    ['热情；温情', 'Kind and affectionate feelings that one person shows another.', '一个人对另一个人所怀的善意与深情。', '不可数，抽象用法，常见于 with warmth 一类结构。', 'He received the guests with great warmth.', '他非常热情地接待了客人。', ['warmth of manner', 'with warmth'], ['glow'], 'noun', 'uncountable', '情感'],
  ], '', ['heat'], 'brief ←?，按 §5.2 自扫根 warm A1 温暖的（author_w1.js 第 4 参，adjective/verb/noun）+ -th（-th 在 §5.4 清单抽象名词后缀，warm 去 e 加 th，先例 author_w5.js width←wide A2、author_g4.js growth←grow A1），「温暖的热度」与 warm 语义直连，A1 继承；抽象不可数故 forms 留空；fam heat 热（队列原样，入第 10 参），近义 heat 热、temperature 温度、warm 温暖（置义项 1）与 glow 热光、暖意（置义项 2），队列原样、各恰好一次；CET4 标签照抄队列');

  W('warning', 'noun', '/ˈwɔːnɪŋ/', 'A2', ['CET4'], '警告；告诫', 'Something said or done to warn of danger, or a sign of future trouble.', [
    ['警告；告诫', 'A statement that tells someone of possible danger or of what to avoid.', '告诉他人可能有危险或应当避开之事的话。', '可数，常与 give、issue、ignore 等动词连用。', 'The driver ignored several warnings from the police.', '司机无视了警方几次警告。', ['give a warning', 'a warning sign', 'without warning'], ['alert', 'caution'], 'noun', 'countable', '通用'],
    ['警告牌；警示标志', 'A sign or notice that marks a danger or a rule to be obeyed.', '标示危险或必须遵守的规则的牌子与告示。', '可数，常见于公共场所与产品包装。', 'A warning about the wet floor stood by the door.', '门边立着一块小心地滑的警示牌。', ['a health warning', 'a written warning'], ['notice'], 'noun', 'countable', '交通'],
    ['训诫；前车之鉴', 'A lesson or an example that shows what happens when something is done wrongly.', '以错误做法所招致的后果示人的教训或榜样。', '可数，抽象用法，与 of 连用时说明教训从何而来。', 'The crash was a warning to everyone working that night.', '那次坠机对当夜所有工作人员都是一次警示。', ['a warning against', 'serve as a warning'], ['example', 'lesson'], 'noun', 'countable', '通用'],
    ['威胁；不祥之兆', 'The fact that something bad seems likely to happen.', '不祥之兆、令人担心的事。', '可数，口语与书面语均可。', 'Dark clouds are a warning of a storm.', '乌云预示着暴风雨将至。', ['a warning sign of', 'a constant warning'], ['threat'], 'noun', 'countable', '通用'],
  ], 'warnings',['warn'], 'brief 根提示 ←warn A2 警告（自扫 author_w1.js 第 4 参复核为 A2，verb）+ -ing（-ing 在 §5.4 清单，同 author_t8.js tuning←tune A2、author_w7.js writing←write A1 先例），「警告」与 warn 语义直连，A2 继承；fam 队列为空故第 10 参 []，近义 alert 警报、caution 警告（置义项 1），notice 告示（置义项 2），example 例子、lesson 教训（置义项 3），threat 威胁（置义项 4），队列原样、各恰好一次；CET4 标签照抄队列');

  W('was able to', 'verb', '/wɒz ˈeɪbl tə/', '', [], '能够；可以', 'Used to say that someone had the ability or the chance to do something.', [
    ['能够；可以', 'Used to say that someone had the ability or the opportunity to do something.', '用来表示某人有能力或有机会做某事。', '短语动词，be 后用 able，后接 to 加动词原形。', 'He was able to finish the work on time.', '他按时把工作做完了。', ['was able to do', 'was finally able to see'], ['could'], 'verb', '及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 could 能够、会（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('washing', 'noun', '/ˈwɒʃɪŋ/', 'A1', ['CET4'], '洗涤；洗衣物', 'The activity of washing clothes, or the clothes that are being washed.', [
    ['洗涤；洗衣', 'The activity of cleaning things with water and soap or detergent.', '用水和皂或洗涤剂把东西清洗干净的活动。', '不可数，常与 do 连用。', 'The children were doing the washing after school.', '孩子们放学以后在洗衣服。', ['do the washing', 'a washing machine'], [], 'noun', 'uncountable', '家居'],
    ['要洗的衣物；洗涤物', 'Clothes and sheets that are waiting to be washed.', '等着洗的衣服和床单。', '不可数，作整体看待，谓语用单数。', 'He took the washing to the laundrette on Sunday.', '星期天他把要洗的衣物送到了自助洗衣店。', ['the washing basket', 'fold the washing'], ['laundry'], 'noun', 'uncountable', '家居'],
  ], '', ['laundry'], 'brief 根提示 ←wash A1 洗（自扫 author_w1.js 第 4 参复核为 A1，verb/noun）+ -ing（-ing 在 §5.4 清单，同 author_w7.js writing←write A1、author_t8.js tuning←tune A2 先例），语义直连，A1 继承；主作不可数形式故 forms 留空；fam laundry 待洗衣物（队列原样，入第 10 参），近义 laundry 待洗衣物（队列原样，置义项 2 恰好一次）；CET4 标签照抄队列');

  W('wasp', 'noun', '/wɒsp/', '', [], '黄蜂', 'A large insect with yellow and black stripes that can sting.', [
    ['黄蜂', 'A large insect often marked with yellow and black stripes and able to sting.', '有黄黑条纹并能蜇人的大型昆虫。', '可数，昆虫学上科名也用复数；蜂巢称 wasp nest。', 'A wasp flew into the room through the open window.', '一只黄蜂从开着的窗户飞进了房间。', ['a wasp sting', 'a wasp nest'], ['bee'], 'noun', 'countable', '自然'],
  ], 'wasps', [], 'brief ←?，按 §5.2 自扫根：库内无 wasp 的语义直连词根（-asp 不在 §5.4 清单；近义 bee A2 蜜蜂（author_d2.js）为同科昆虫的同义词而非词根，词首非全段共享，兄弟派生 §5.6 不成立），留空；近义 bee 蜜蜂（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('wasteful', 'adjective', '/ˈweɪstfl/', 'A2', ['CET4'], '浪费的；挥霍的', 'Using or causing waste, especially of money, time or energy.', [
    ['浪费的；挥霍的', 'Using more money, time or resources than is really needed.', '花费了超出需要的金钱、时间或资源。', '定语表语两用，常修饰消费、习惯与做法。', 'Their wasteful spending pushed the firm into debt.', '他们挥霍无度使公司陷入债务。', ['wasteful spending', 'wasteful habits'], ['extravagant'], 'adjective', '定语/表语', '商务'],
    ['徒劳的；无益的', 'Producing no useful result, so that the effort is wasted.', '不起作用、因而白费力气的。', '定语表语两用，常形容努力、做法与设计。', 'It is wasteful to rewrite the whole file.', '把整个文件重写一遍是白费力气。', ['a wasteful effort', 'a wasteful use of time'], [], 'adjective', '定语/表语', '通用'],
  ], '', ['extravagant'], 'brief ←?，按 §5.2 自扫根 waste A2 浪费、废料（自扫 author_w1.js 第 4 参复核为 A2，verb/noun/adjective）+ -ful（-ful 在 §5.4 清单，先例 author_t8.js truthful←truth B1、author_s15.js silken←silk B1），「浪费的」与 waste 语义直连，A2 继承；fam extravagant 挥霍的、奢华的（队列原样，入第 10 参），近义 extravagant 挥霍的、奢华的（队列原样，置义项 1 恰好一次）；CET4 标签照抄队列');

  W('wasteland', 'noun', '/ˈweɪstlænd/', 'A2', [], '荒地；荒原', 'Land that has been ruined, or a figurative place of emptiness and despair.', [
    ['荒地；荒原', 'An area of land that is barren, ruined or unfit to grow anything.', '贫瘠、荒芜或无法长出任何东西的土地。', '可数，也常用于 wasteland 一词作比喻前的铺垫。', 'Nothing grows in that wasteland beyond the old road.', '那条旧路以外，那片荒地上什么也长不出来。', ['a barren wasteland', 'a nuclear wasteland'], ['desert', 'wilderness'], 'noun', 'countable', '地理'],
    ['（精神的）荒漠', 'A place where creativity, hope or morality has disappeared.', '创造力、希望或道德已经消失之地。', '可数，比喻义，常见于文化与评论文字。', 'The long rule turned the culture into a wasteland.', '长久的统治把这片文化变成了一片荒漠。', ['a cultural wasteland', 'a moral wasteland'], [], 'noun', 'countable', '文化'],
  ], 'wastelands', ['desert', 'wilderness'], 'brief ←?，按 §5.2 自扫根 waste A2 浪费、荒废（自扫 author_w1.js 第 4 参复核为 A2，verb/noun/adjective）——wasteland = waste + land，按 §5.3 复合词取首成分且语义直连（荒地即被荒废的土地），A2 继承（判断项：-land 不在 §5.4 清单，复合首成分裁定，同 author_l3.js landfills←land A2、author_m1.js homeland B2 先例）；fam desert 荒漠、wilderness 荒野（队列原样，入第 10 参），近义 desert 荒漠、wilderness 荒野（队列原样，置义项 1 各恰好一次）');

  W('watch out', 'verb', '/wɒtʃ aʊt/', '', [], '小心；当心', 'To be careful about a possible danger or problem.', [
    ['小心；当心', 'To be careful because a danger or a problem may be present.', '因为可能有危险或问题而要小心。', '不及物短语动词，常接 for + 危险来源。', 'Watch out for falling ice when you enter the gorge.', '走进峡谷时当心落冰。', ['watch out for', 'watch out'], ['beware'], 'verb', '不及物', '口语'],
  ], '', ['beware'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；fam beware 提防、当心（队列原样，入第 10 参），近义 beware 提防、当心（队列原样，置唯一义项恰好一次）').phrase = true;

  W('watchful', 'adjective', '/ˈwɒtʃfl/', 'A1', ['CET4'], '警觉的；警惕的', 'Wide awake and alert to possible danger or change.', [
    ['警觉的；警惕的', 'Carefully noticing everything, because danger or a change may come.', '因为提防危险或变故而对一切留心观察的。', '定语表语两用，常与 eye、attention 等连用。', 'The keeper kept a watchful eye on the gate.', '看守人警觉地盯着大门。', ['keep a watchful eye', 'a watchful presence'], ['alert', 'wary'], 'adjective', '定语/表语', '性格'],
    ['密切注意的；提防的', 'Attending closely to what someone or something is doing.', '密切关注某人或某物一举一动的。', '定语表语两用，后常接 of、for、against。', 'Parents should stay watchful of strangers at the gate.', '家长应提防出现在门口的陌生人。', ['watchful of', 'watchful for signs'], [], 'adjective', '定语/表语', '社会'],
  ], '',['watch'], 'brief ←?，按 §5.2 自扫根 watch A1 观看、守望（自扫 author_w1.js 第 4 参复核为 A1，verb/noun）+ -ful（-ful 在 §5.4 清单，先例 author_t8.js truthful←truth B1、author_s15.js silken←silk B1），「留心守望」与 watch 语义直连，A1 继承；fam 队列为空故第 10 参 []，近义 alert 警觉的、wary 警惕的（队列原样，置义项 1 各恰好一次）；CET4 标签照抄队列');

  W('watchman', 'noun', '/ˈwɒtʃmən/', 'A1', [], '看守；巡夜人', 'A man whose job is to guard a building or its grounds.', [
    ['看守人；巡夜人', 'A person employed to guard a building or its grounds, usually at night.', '受雇看守楼房或场地的人，多在夜间值班。', '可数，复数为 watchmen；现代英语多说 security guard。', 'The watchman checked the gate every hour.', '看守每小时检查一次大门。', ['a night watchman', 'a factory watchman'], ['guard'], 'noun', 'countable', '职业'],
    ['看门人；守夜人', 'Anyone who stands watch and keeps other people from entering or leaving.', '负责守望、不许他人随意进出的人。', '可数，书面与旧时用语。', 'A watchman stood at the head of the stairs.', '一名看门人站在楼梯口。', ['set a watchman over the gate'], [], 'noun', 'countable', '文学'],
  ], 'watchmen',['watch'], 'brief ←?，按 §5.2 自扫根 watch A1 观看、守望（自扫 author_w1.js 第 4 参复核为 A1，verb/noun）——watchman = watch + man，按 §5.3 复合词取首成分且语义直连（守望之人），A1 继承（判断项：-man 不在 §5.4 清单，复合首成分裁定，同 author_n3.js noblemen←noble B2 先例）；近义 guard 警卫、守卫（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('watchword', 'noun', '/ˈwɒtʃwɜːd/', 'A1', [], '暗语；口令；口号', 'A word used by guards to identify a friend, or a motto used by a group.', [
    ['通行口令；暗语', 'A word or short phrase said by sentries to tell friends from strangers.', '哨兵用来分辨友敌的口头暗号。', '可数，军事与旧时用法；现代多说 password。', 'The sentry asked for the watchword before opening the gate.', '卫兵在大门开启前询问口令。', ['give the watchword', 'ask for the watchword'], ['password'], 'noun', 'countable', '军事'],
    ['口号；格言', 'A word or a phrase that expresses the aims of a group or a party.', '表达某个组织或党派宗旨的词语。', '可数，抽象用法，常见于政治与组织语境。', 'Honesty was the watchword of the whole campaign.', '诚实是整场竞选的口号。', ['the watchword of the party', 'a political watchword'], [], 'noun', 'countable', '政治'],
  ], 'watchwords', ['password'], 'brief ←?，按 §5.2 自扫根 watch A1 观看、守望（自扫 author_w1.js 第 4 参复核为 A1，verb/noun）——watchword = watch + word，按 §5.3 复合词取首成分且语义直连（守望者所用之词即口令），A1 继承（判断项：-word 不在 §5.4 清单，复合首成分裁定，同 author_p1.js password A2、author_p2.js playground A2 先例）；fam password 密码、口令（队列原样，入第 10 参），近义 password 口令（队列原样，置义项 1 恰好一次）');

  W('water cooler', 'noun', '/ˈwɔːtə ˈkuːlə/', '', [], '饮水机；凉水桶', 'A device or a container that keeps drinking water cool.', [
    ['饮水机；凉水桶', 'A machine or a container that holds drinking water and keeps it cool.', '盛装饮用水并使它保持低温的机器或容器。', '可数名词短语，办公室与公共场所常见。', 'A queue formed at the water cooler on that floor.', '那一层的饮水机前排起了队。', ['a drinking water cooler', 'fill the water cooler'], ['fountain'], 'noun', 'countable', '家居'],
    ['饮水处；饮水装置', 'A public place or fitting where drinking water is provided for anyone to use.', '向公众提供饮用水的场所或装置。', '可数，多指美式 drinking fountain 一类公共饮水设施。', 'The trail has a water cooler at the halfway point.', '这条步道在中途设有饮水处。', ['a public water cooler', 'a water cooler on the trail'], [], 'noun', 'countable', '交通'],
  ],'water coolers', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 fountain 饮水喷泉（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('water down', 'verb', '/ˈwɔːtə daʊn/', '', [], '掺水；使稀释', 'To add water so that a liquid becomes weaker, or to reduce the force of something.', [
    ['掺水；冲淡', 'To add water to a liquid so that it becomes weaker.', '往液体里加水使其浓度变低。', '及物短语动词，宾语为要冲淡的液体。', 'They watered the syrup down with a lot of water.', '他们往糖浆里加了很多水，把它冲淡了。', ['water down the paint', 'water down a drink'], ['dilute'], 'verb', '及物', '饮食'],
    ['削弱；降低', 'To reduce the strength, the value or the effect of something.', '降低某物的力量、价值或效力。', '及物短语动词，多用于引申义。', 'The committee watered the proposal down before the vote.', '委员会在表决前把提案削弱了。', ['water down a claim', 'water down a plan'], [], 'verb', '及物', '通用'],
  ],'waters down~watered down~watering down', ['dilute'], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；fam dilute 稀释、冲淡（队列原样，入第 10 参），近义 dilute 稀释、冲淡（队列原样，置义项 1 恰好一次）').phrase = true;

  W('waterfowl', 'noun', '/ˈwɔːtəfaʊl/', 'A1', [], '水禽；野鸭', 'Birds such as ducks and geese that live on or near water.', [
    ['水禽；水鸟', 'Wild birds that live on or near water, such as ducks, geese and swans.', '栖息在水上或水边的野生鸟类，如鸭、鹅、天鹅。', '单复数同形，作整体看待时谓语可用单数或复数。', 'Wild waterfowl gathered at the edge of the ice.', '野生水禽聚集在冰的边缘。', ['migrating waterfowl', 'a flock of waterfowl'], ['duck'], 'noun', 'countable', '自然'],
    ['（可猎的）野鸭水禽', 'Such birds counted as game, especially when they are hunted.', '作为猎物被清点的这类水鸟。', '可数，狩猎与法规文本中的用法。', 'The hunting season opens on waterfowl in autumn.', '秋季的水禽狩猎季开始了。', ['hunt waterfowl', 'waterfowl shooting'], [], 'noun', 'countable', '农业'],
  ],'waterfowl',['water'], 'brief ←?，按 §5.2 自扫根 water A1 水（自扫 author_w1.js 第 4 参复核为 A1，noun/verb）——waterfowl = water + fowl，按 §5.3 复合词取首成分且语义直连（水生的鸟即水禽），A1 继承（判断项：-fowl 为独立名词，不在 §5.4 清单，复合首成分裁定，同 author_g1.js greenhouse B1、author_p2.js playground A2 先例）；单复数同形故 forms 留空；近义 duck 鸭子（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');
})(typeof window !== 'undefined' ? window : globalThis);
