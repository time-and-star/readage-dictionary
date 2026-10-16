/* data/words/cet/author_s21.js — 常用词 S 批次 21，缺口 statement ~ storage，共 31 条
 * （25 单词 + 6 短语：stem from、step down、step forward、step in、stick shift、stop working，
 *   6 条均带 .phrase = true，单词一律不带）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_s21.txt，widx 249-279；本批词头完整，无残缺或粘连词头）。
 * CET 标签照抄队列：CET4 × 5（statement、statistical、stiffen、stimulus、storage）、CET6 × 0，
 *   其余 26 条 []（已用 cet_wordlist.csv 反查：五词分别由 CET4 词头 state、statistic、stiff、stimulate、
 *   store 派生，核对一致）。
 * brief：%TEMP%\opencode\_s21_brief.txt 共 25 行，与本批 25 个单词一一对应（6 条短语无 brief 行）；
 *   7 行给根（state A2、statistic B1、steal A2、step A1、stick B1、stop A1），18 行显示 ←?。
 *   ←? 一律按规范 §5.2 纯文本自扫：fs.readFileSync + indexOf 定位 W( 词头行取第 4 参
 *   （扫 assets/js/data/words 全目录的纯文本，未 require 全库）；curated.js 37 条与 adapt.js 均无本批词根。
 * 扫根结论（自扫出处）：state A2（author_s8）、statistic B1（author_s8）、steal A2（author_s8）、
 *   step A1（author_s8）、stick B1（author_s8）、stop A1（author_s4，与 brief 同）、
 *   stiff B2（author_s8）、stock B1（author_s4）、stomach A2（author_s4）、stimulate B2（author_s8）、
 *   sting B2（author_s8）、stamp A2（author_s8）、store A2（author_s4）、steep B2（author_s8）、
 *   stanch / stoke / stink 自扫均不在库；末成分 list A1（author_l2）、ache A2（author_a1）。
 * 继承 12 条：statement←state A2 + -ment、statistical←statistic B1 + -al、
 *   statistics←statistic B1 + -s（复数单列，判断项）、stealer←steal A2 + -er、stealing←steal A2 + -ing、
 *   steps←step A1 + -s（复数单列，判断项）、sticker←stick B1 + -er、stiffen←stiff B2 + -en、
 *   stimulus←stimulate B2（兄弟派生，判断项）、stocklist←stock B1（复合词取首成分，判断项）、
 *   stomachache←stomach A2（复合词取首成分，判断项）、stopper←stop A1 + -er。
 * 留空 13 单词：staunch、stench、stenography、sterling、stew、stoker（库内无在库词根，
 *   -aunch/-ench/-graphy/-ling/-ew 无根可继）；steeple（-ple 不在清单，与 steep 形近语义不直连，判断项）；
 *   stingy（sting B2 词首全段可见但语义不直连，不满足 §5.4 条 4b，判断项）；stink、stinking（stink 不在库）；
 *   stocky（stock B1 词首全段可见但库内义与「矮壮」不直连，判断项）；stomp（与 stamp 词首非全段共享，判断项）；
 *   storage（store A2 在库但 -age 不在 §5.4 清单，§5.7 明示留空场景）；
 *   另 6 条短语一律留空（规范 §6：整体不取成分作根）。
 * CEFR 分布（25 单词）：A1 × 2（steps、stopper），A2 × 4（statement、stealer、stealing、stomachache），
 *   B1 × 4（statistical、statistics、sticker、stocklist），B2 × 2（stiffen、stimulus），留空 × 13；6 短语一律 ''。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s21.js 必须在 _cet_helper.js 之后加载');

  W('statement', 'noun', '/ˈsteɪtmənt/', 'A2', ['CET4'], '陈述；声明；说法', 'A written or spoken message that gives facts, information or an official view.', [
    ['陈述；证词', 'A written or spoken expression of a fact or an opinion, given formally.', '正式作出的事实或观点的书面或口头表达。', '可数；常与 of 连用，常与 make、give 搭配；法律语境指证人所作的陈述。', 'The witness made a clear statement about the night of the accident.', '证人就事故当晚作了清楚的陈述。', ['make a statement', 'a statement of fact'], ['testimony'], 'noun', 'countable', '法律'],
    ['声明；公告', 'An official written message released by a company, a government or an organization.', '公司、政府或组织发布的正式书面消息。', '可数；新闻语境常见 press statement（声明）。', 'The ministry issued a statement denying the report.', '部里发表声明否认该报道。', ['issue a statement', 'press statement'], [], 'noun', 'countable', '媒体'],
    ['对账单；结算单', 'A printed list showing the money owed and paid on an account.', '显示账户应收与已付款项的打印清单。', '可数；银行与信用卡账户每月寄送。', 'The bank sends a statement every month.', '银行每月寄送一份对账单。', ['bank statement', 'statement of account'], [], 'noun', 'countable', '金融'],
  ], 'statements',['state'], 'brief 根提示 ←state A2 陈述 + -ment（§5.4 透明后缀），A2 继承；近义 testimony 证词（队列原样，置义项 1 恰好一次）');

  W('statistical', 'adjective', '/stəˈtɪstɪkl/', 'B1', ['CET4'], '统计的；统计学的', 'Connected with the use of numbers to collect and study information.', [
    ['统计的；统计学的', 'Relating to the methods used for collecting, organizing and studying numbers about a group of people or things.', '与收集、整理和研究群体数字的方法有关的。', '常作定语，修饰 data、analysis、method 等名词；重音在第二音节。', 'The team produced a statistical analysis of the survey answers.', '团队对调查答案作了统计分析。', ['statistical analysis', 'statistical method'], ['demographic'], 'adjective', '定语', '教育'],
    ['基于统计数字的', 'Shown or measured by a set of figures rather than by looking at one single case.', '由一组数字显示或衡量，而不是只看单个个案。', '可作定语或表语，常修饰 chance、evidence、term。', 'There is a statistical chance of heavy rain tomorrow.', '明天有统计意义上的大雨概率。', ['statistical evidence', 'statistical chance'], [], 'adjective', '定语/表语', '科学'],
  ], '', ['demographic'], 'brief ←?，自扫根 statistic B1（author_s8.js 第 4 参）+ -al（§5.4 清单），B1 继承；fam/syn demographic 人口统计的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('statistics', 'noun', '/stəˈtɪstɪks/', 'B1', [], '统计数据；统计学', 'Numbers collected to show information, or the subject that studies them.', [
    ['统计数据；统计资料', 'Numbers that have been collected and arranged to show information about a group of people or things.', '为说明群体情况而收集并整理出来的数字。', '形式为复数，作主语时谓语用复数；单个数字可用 a statistic。', 'The statistics show that traffic has fallen in the city centre.', '统计数据显示市中心的车流量下降了。', ['statistics show', 'statistics on unemployment'], [], 'noun', 'countable', '商务'],
    ['统计学', 'The branch of mathematics that deals with collecting and studying numbers.', '处理数字收集与研究的数学分支。', '作学科名时不可数，句中首字母通常小写。', 'She took a course in statistics at university.', '她在大学修了一门统计学课程。', ['course in statistics', 'statistics course'], [], 'noun', 'uncountable', '教育'],
  ],'statistics', ['data'], 'brief 根提示 ←statistic B1 统计数字 + -s（复数形式单列词条，forms 记为空值），B1 继承（判断项：-s 不在 §5.4 明示清单，按库内 snacks←snack A2、sales←sale A2 先例）；fam data 数据（队列原样，入第 10 参，不入义项）');

  W('staunch', 'adjective', '/stɔːntʃ/', '', [], '坚定的；忠诚的', 'Firm and dependable in the support you give to someone or something.', [
    ['坚定的；忠诚的', 'Very firm and unchanging in the support or help you give to a person, a group or a belief.', '对某人、某团体或某种信念给予的支持非常坚定、不会动摇。', '常作定语，也作表语，多与 supporter、ally、friend 搭配。', 'She remained a staunch supporter of the club throughout the scandal.', '在整个丑闻期间她仍是该俱乐部坚定的支持者。', ['staunch supporter', 'staunch ally'], ['loyal'], 'adjective', '定语/表语', '性格'],
  ], '', [], 'brief ←?，自扫根：库内无 staunch 的在库词根（stanch 自扫亦不在库，-aunch 不在 §5.4 清单），留空（判断项：形近非语义基）；近义 loyal 忠诚的（队列原样，置唯一义项）');

  W('stealer', 'noun', '/ˈstiːlə/', 'A2', [], '偷窃者；偷东西的人', 'A person who takes something that belongs to another person.', [
    ['偷窃者', 'A person who takes something from a shop or another person without permission.', '未经允许从商店或他人处拿走东西的人。', '可数；常见于 shop stealer 一类的复合表达，日常英语多用别的说法。', 'The stealer of the phone was caught on camera in the lift.', '偷手机的人在电梯里被摄像头拍到。', ['shop stealer', 'art stealer'], ['thief'], 'noun', 'countable', '法律'],
  ], 'stealers',['steal'], 'brief 根提示 ←steal A2 偷 + -er（§5.4 清单，指人），A2 继承；近义 thief 小偷（队列原样，置唯一义项）');

  W('stealing', 'noun', '/ˈstiːlɪŋ/', 'A2', [], '偷窃行为；盗窃', 'The act of taking something that belongs to someone else without permission.', [
    ['偷窃行为', 'The act of taking something that does not belong to you while the owner is not watching.', '趁物主没有看见拿走不属于自己的东西的行为。', '不可数；由动词 steal 的动名词形式转为名词，常作定语或与 of 连用。', 'The shop put up signs to warn staff about stealing in the store.', '商店张贴标语提醒员工注意店内的偷窃行为。', ['petty stealing', 'signs of stealing'], ['theft'], 'noun', 'uncountable', '法律'],
  ], '', ['theft'], 'brief 根提示 ←steal A2 + -ing（动名词转名词，-ing 在 §5.4 清单），A2 继承；fam/syn theft 盗窃（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）；不可数，forms 记为空值');

  W('steeple', 'noun', '/ˈstiːpl/', '', [], '（教堂的）尖塔', 'A tall pointed structure on the roof of a church.', [
    ['（教堂的）尖塔', 'A tall pointed structure that stands on the roof of a church and is often built with a clock.', '建在教堂屋顶上的高而尖的结构，常装有钟。', '可数；教堂建筑专用词，也用于 steeplechase（障碍赛）。', 'The old steeple can be seen from every street in the village.', '村里的每条街道都能看到那座老尖塔。', ['church steeple', 'a clock in the steeple'], ['tower'], 'noun', 'countable', '宗教'],
  ], 'steeples', [], 'brief ←?，自扫根：库内无 steeple 的在库词根（-ple 不在 §5.4 清单；与 steep B2 形近但语义不直连，切词假象），留空（判断项）；近义 tower 塔（队列原样，置唯一义项）');

  W('stem from', 'verb', '/stem frɒm/', '', [], '源于；由…造成', 'To be caused by something or to develop from a particular source.', [
    ['起因于；源于', 'To be the result of a particular cause, or to have developed from a particular source.', '由某个原因造成，或由某个来源发展而来。', '短语动词，后接名词；主语通常是问题、习惯、传统一类事物。', 'The problem stems from a decision made many years ago.', '这个问题源于多年前作出的一项决定。', ['stem from a need', 'stem directly from'], ['arise'], 'verb', '不及物', '通用'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 arise 产生、出现（队列原样，置唯一义项，短语条目）').phrase = true;

  W('stench', 'noun', '/stentʃ/', '', [], '恶臭；臭气', 'A very strong and unpleasant smell that fills an area.', [
    ['恶臭；臭气', 'A very strong smell that is unpleasant to people and often hard to escape.', '让人不适且往往难以避开的浓烈气味。', '可数，常与 of 连用；正式用语，比 smell 语气强得多。', 'A stench of rubbish hung over the whole street.', '整条街上弥漫着垃圾的臭味。', ['a stench of rubbish', 'a stench in the air'], ['odor'], 'noun', 'countable', '环境'],
  ], 'stenches', [], 'brief ←?，自扫根：库内无 stench 的在库词根（stench、stanch 自扫均不在库，-ench 不在 §5.4 清单），留空；近义 odor 气味（队列原样，置唯一义项）');

  W('stenography', 'noun', '/stɪˈnɒɡrəfi/', '', [], '速记（法）；速记打字', 'The skill of writing or typing spoken words very quickly in short forms.', [
    ['速记法', 'The skill of writing down spoken words very quickly using short forms or special signs.', '用缩写或特殊符号快速记录口语的技能。', '不可数；过去是秘书的必备技能，如今多由录音与转写代替。', 'She studied stenography before taking a job in a law office.', '她在律师事务所任职前学习了速记。', ['course in stenography', 'stenography skills'], ['shorthand'], 'noun', 'uncountable', '职业'],
  ], '', ['shorthand'], 'brief ←?，自扫根：库内无 stenography 的在库词根（-graphy 不在 §5.4 清单；graph B1 为词尾成分，非词首不可取），留空；fam/syn shorthand 速记（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('step down', 'verb', '/step daʊn/', '', [], '辞职；下台；让位', 'To leave an important job or position of your own choice.', [
    ['辞职；下台', 'To leave an important job or position, usually before anyone forces you to leave.', '离开重要的工作或职位，通常并非被迫。', '短语动词，常与 from、as 连用；新闻语境常见，语气比 leave 正式。', 'The chairman stepped down after ten years in charge.', '主席在任职十年后辞职了。', ['step down as', 'step down from a post'], ['resign', 'retire'], 'verb', '不及物', '职业'],
  ], '', ['resign', 'retire'], '短语整体不取成分作根，分级留空（规范 §6）；fam/syn resign 辞职、retire 引退（队列原样，fam 入第 10 参，syn 置唯一义项各恰好一次，短语条目）').phrase = true;

  W('step forward', 'verb', '/step ˈfɔːwəd/', '', [], '主动站出来；挺身而出', 'To offer to help or to take on a task without being asked.', [
    ['主动站出来；挺身而出', 'To offer yourself to help with a task or to say that you are willing to take responsibility.', '主动提出帮忙，或表示愿意承担责任。', '短语动词，常与 to 连用；也可指在队列中向前跨出一步。', 'Several parents stepped forward to help with the school play.', '几位家长主动出来协助学校的话剧演出。', ['step forward to help', 'step forward and offer'], ['volunteer'], 'verb', '不及物', '社交'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 volunteer 自愿（队列原样，置唯一义项，短语条目）').phrase = true;

  W('step in', 'verb', '/step ɪn/', '', [], '插手；介入；干预', 'To become involved in a situation in order to help or to stop it getting worse.', [
    ['插手；介入', 'To become involved in a situation, especially in order to help or to stop an argument.', '介入某种情形，尤其为了提供帮助或制止争吵。', '短语动词，常与 to、with 连用；主语多为第三方、警方或管理者。', 'The police stepped in when the crowd began to push.', '当人群开始推挤时警方介入了。', ['step in to help', 'step in with a plan'], ['intervene'], 'verb', '不及物', '社会'],
  ], '', ['intervene'], '短语整体不取成分作根，分级留空（规范 §6）；fam/syn intervene 干预（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次，短语条目）').phrase = true;

  W('steps', 'noun', '/steps/', 'A1', [], '台阶；步骤；措施', 'Parts of a staircase you climb, or actions taken to reach a result.', [
    ['台阶；阶梯（复数）', 'A set of flat structures that people climb up or down to move between different levels.', '人们在不同高度之间上下行走用的一级级平面结构。', '形式为复数，作主语时谓语用复数；常见搭配 a flight of steps。', 'She climbed the steps to the front door and rang the bell.', '她走上台阶到前门按了门铃。', ['flight of steps', 'up the steps'], ['ladder'], 'noun', 'countable', '家居'],
    ['步骤；措施', 'An action or a series of actions that you take in order to achieve something.', '为达到某个目的而采取的一个或一系列行动。', '可数，常用复数形式 steps；常与 take 搭配。', 'The council has taken steps to reduce traffic in the centre.', '委员会已采取措施减少市中心的交通量。', ['take steps', 'the next steps'], [], 'noun', 'countable', '社会'],
  ],'steps', ['ladder'], 'brief 根提示 ←step A1 步、台阶 + -s（复数形式单列词条，forms 记为空值），A1 继承（判断项：-s 不在 §5.4 明示清单，按库内 snacks←snack A2、sales←sale A2 先例）；fam/syn ladder 梯子（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('sterling', 'noun/adjective', '/ˈstɜːlɪŋ/', '', [], '纯正的；优质的；英镑', 'Of very high quality, or the standard money system of the United Kingdom.', [
    ['纯正的；优质的', 'Of very high quality, or honest and reliable in character.', '质量非常高，或指品格诚实可靠。', '形容词，多作定语，常见搭配 sterling quality、sterling work。', 'Her work on the exhibition was sterling.', '她为这次展览做的工作非常出色。', ['sterling quality', 'sterling work'], [], 'adjective', '定语/表语', '性格'],
    ['英镑（货币标准）', 'The standard money system used in the United Kingdom.', '英国使用的标准货币体系。', '不可数名词，常用于标价与结算语境，货币代码 GBP。', 'All prices are shown in sterling.', '所有价格均以英镑标示。', ['payable in sterling', 'prices in sterling'], ['pound'], 'noun', 'uncountable', '金融'],
  ], '', ['pound'], 'brief ←?，自扫根：库内无 sterling 的在库词根（stir B1 形近非同源，-ling 不在 §5.4 清单），留空（判断项）；fam/syn pound 英镑（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('stew', 'noun/verb', '/stjuː/', '', [], '炖菜；炖煮', 'A dish of meat and vegetables cooked slowly in liquid, or to cook food this way.', [
    ['炖菜；焖菜', 'A dish of meat and vegetables cooked slowly in liquid in a covered pot.', '在加盖的锅中用液体慢慢煮熟的肉和蔬菜。', '可数；也常作不可数，指这种烹调方式本身。', 'She made a thick stew with beef and carrots.', '她用牛肉和胡萝卜做了一锅浓稠的炖菜。', ['beef stew', 'make a stew'], [], 'noun', 'countable', '饮食'],
    ['炖；焖煮', 'To cook food slowly in liquid in a covered container over a low heat.', '把食物放进加盖容器里，用小火在液体中慢慢煮熟。', '可及物也可不及物，常用 for hours 表示时间。', 'We stewed the pears in red wine for an hour.', '我们把梨在红酒里炖了一小时。', ['stew for an hour', 'stew in a pot'], [], 'verb', '及物', '饮食'],
  ], 'stews~stewed~stewed~stewing', ['soup'], 'brief ←?，自扫根：库内无 stew 的在库词根（-ew 不在 §5.4 清单），留空；fam soup 汤（队列原样，入第 10 参，不入义项）');

  W('stick shift', 'noun', '/ˈstɪk ʃɪft/', '', [], '手动挡；变速杆', 'A gear lever moved by hand, or a vehicle with this type of gearbox.', [
    ['手动挡；手动变速杆', 'A gear lever in a vehicle that the driver moves by hand, or a car fitted with this type of gearbox.', '由驾驶员用手操作的换挡杆，或装有这种变速装置的汽车。', '可数名词短语；美式英语常用，英式英语另有说法。', 'He learned to drive on a stick shift before buying a small car.', '他在买小汽车前先学会了开手动挡车。', ['drive a stick shift', 'stick shift car'], ['manual'], 'noun', 'countable', '交通'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 manual 手动的（队列原样，置唯一义项，短语条目）').phrase = true;

  W('sticker', 'noun', '/ˈstɪkə/', 'B1', [], '贴纸；标签', 'A small piece of paper or plastic with a sticky back used to mark or decorate things.', [
    ['贴纸；粘贴标签', 'A small piece of paper or plastic with glue on the back that you press onto a surface.', '背面有胶、可以粘在物体表面的小块纸或塑料片。', '可数；既指装饰用贴纸，也指标价签。', 'The child put a sticker on the front of the notebook.', '孩子在笔记本封面上贴了一张贴纸。', ['price sticker', 'stickers on the window'], ['label'], 'noun', 'countable', '家居'],
  ], 'stickers',['stick'], 'brief 根提示 ←stick B1 粘贴 + -er（§5.4 清单，指物），B1 继承；近义 label 标签（队列原样，置唯一义项）');

  W('stiffen', 'verb', '/ˈstɪfn/', 'B2', ['CET4'], '（使）变硬；（使）绷紧', 'To become hard or firm, or to make a part of the body tight and hard.', [
    ['变硬；硬化', 'To become firm and hard so that it is difficult to bend.', '变得坚硬而难以弯曲。', '不及物动词，常与 up 连用；主语多为材料、肌肉或表情。', 'The clay had stiffened before we could shape it.', '我们还没来得及塑形，黏土就已变硬了。', ['stiffen with cold', 'stiffen up'], [], 'verb', '不及物', '通用'],
    ['使绷紧；使紧张', 'To make a muscle or a part of the body tight, hard and difficult to move.', '使肌肉或身体的某一部位绷紧、僵硬而难以活动。', '及物动词，宾语常为 muscle、limb、face 一类名词。', 'Fear stiffened his legs as he crossed the bridge.', '过桥时恐惧让他双腿发僵。', ['stiffen a muscle', 'stiffen the neck'], ['tense'], 'verb', '及物', '健康'],
  ], 'stiffens~stiffened~stiffened~stiffening',['stiff'], 'brief ←?，自扫根 stiff B2（author_s8.js 第 4 参）+ -en（§5.4 清单），B2 继承；近义 tense 绷紧（队列原样，置义项 2 恰好一次）');

  W('stimulus', 'noun', '/ˈstɪmjələs/', 'B2', ['CET4'], '刺激物；促进因素；驱动力', 'Something that causes a person, a process or an economy to react, grow or act.', [
    ['刺激物（生理／心理）', 'A change or an event that causes a living organism, a cell or a sense to react.', '引起生物体、细胞或感觉产生反应的变化或事件。', '可数；复数为 stimuli，常与 to 连用，科学语境常用。', 'Light is the main stimulus that wakes the brain in the morning.', '光是早晨唤醒大脑的主要刺激。', ['physical stimulus', 'a stimulus for reaction'], ['trigger'], 'noun', 'countable', '科学'],
    ['促进因素；助推', 'Something that helps an activity, a process or an economy to develop more quickly.', '帮助某项活动、进程或经济发展得更快的事物。', '可数，常与 for、to 连用；经济政策语境常见 fiscal stimulus。', 'Lower interest rates provided a stimulus for house building.', '较低的利率为房屋建设提供了推动力。', ['fiscal stimulus', 'a stimulus for growth'], ['boost', 'spur'], 'noun', 'countable', '金融'],
    ['驱动力；诱因', 'Something that motivates a person to act or to make a decision.', '促使某人采取行动或作出决定的因素。', '可数，多用于心理与管理语境，常与 to 连用。', 'Curiosity is the strongest stimulus behind good research.', '好奇心是出色研究背后最强大的驱动力。', ['act as a stimulus', 'a stimulus to act'], ['impetus', 'impulse', 'incentive'], 'noun', 'countable', '心理'],
  ], 'stimuli', ['boost', 'impetus', 'impulse', 'incentive'], 'brief ←?，自扫根 stimulate B2（author_s8.js 第 4 参）：兄弟派生，词首 stimul 全段共享且语义直连（stimulus 为 stimulate 的名词，§5.6），B2 继承（判断项：-us 不在 §5.4 清单）；fam boost、impetus、impulse、incentive 入第 10 参，近义 boost/impetus/impulse/incentive/spur/trigger 各恰好一次（队列原样）');

  W('stingy', 'adjective', '/ˈstɪŋi/', '', [], '吝啬的；小气的', 'Unwilling to give or spend money or things for other people.', [
    ['吝啬的；小气的', 'Unwilling to give other people money or to spend money on the things they need.', '不愿给别人钱，也不愿为别人的需要花钱。', '常作表语，与 with、about 连用；非正式用语。', 'He is too stingy to buy his wife a present.', '他小气得不肯给妻子买礼物。', ['stingy with money', 'stingy about'], ['mean'], 'adjective', '表语', '性格'],
  ], '', [], 'brief ←?，自扫根 sting B2（author_s8.js 第 4 参）词首全段可见，但 sting「蜇、刺」与 stingy「吝啬」语义不直连，不满足 §5.4 条 4b，留空（判断项）；近义 mean 吝啬的（队列原样，置唯一义项）');

  W('stink', 'verb/noun', '/stɪŋk/', '', [], '发出恶臭；臭味；糟透', 'To give off a very bad smell, or the strong bad smell itself, and in informal use to be very bad.', [
    ['发出恶臭', 'To give off a very strong and unpleasant smell.', '散发出强烈而难闻的气味。', '不及物动词，常与 of、like 连用；主语多为物。', 'The drains stink whenever the weather is hot.', '天气一热下水道就发臭。', ['stink of smoke', 'stink out the room'], [], 'verb', '不及物', '家居'],
    ['臭味；难闻的气味', 'A very strong and unpleasant smell that fills a place.', '弥漫在某处的强烈难闻的气味。', '可数，常与 of 连用；口语中也可用 a stink 表示抱怨。', 'What is that stink coming from the kitchen?', '厨房里传来的那股臭味是什么？', ['a stink of', 'kick up a stink'], [], 'noun', 'countable', '家居'],
    ['（非正式）糟透；令人厌恶', 'To be very bad or unfair in a way that makes you angry.', '非常糟糕或不公平，让人气愤。', '不及物动词，口语用法，用于抱怨某件事。', 'It stinks that she got the job instead of you.', '这份工作落到了她头上而没给你，真让人窝火。', ['it stinks'], ['suck'], 'verb', '不及物', '口语'],
  ], 'stinks~stank~stunk~stinking', [], 'brief ←?，自扫根：库内无 stink 的在库词根（stink 自扫不在库，-ink 不在 §5.4 清单），留空；近义 suck 糟糕（口语，队列原样，置义项 3 恰好一次）');

  W('stinking', 'adjective', '/ˈstɪŋkɪŋ/', '', [], '臭气熏天的；极臭的', 'Having a very strong unpleasant smell, or extremely unpleasant in general.', [
    ['臭气熏天的', 'Giving off a very strong and unpleasant smell.', '散发出强烈而难闻的气味。', '常作定语修饰名词，也可用 very、absolutely 强调。', 'The stinking bin at the back of the flat attracted flies.', '公寓后面发臭的垃圾桶招来了苍蝇。', ['stinking rubbish', 'absolutely stinking'], ['foul'], 'adjective', '定语', '家居'],
    ['（非正式）极度的；糟糕的', 'Extremely bad or unpleasant, used to emphasize how awful a situation is.', '用来强调情形糟糕透顶、让人难以忍受。', '多作定语，常见搭配 stinking hot、stinking rich。', 'We waited two hours in the stinking heat.', '我们在酷热中等了两个小时。', ['stinking hot', 'stinking rich'], [], 'adjective', '定语', '口语'],
  ], '', [], 'brief ←?，自扫根：词根 stink 不在库（自扫），-ing 形容词无根可继，留空；近义 foul 恶臭的（队列原样，置义项 1 恰好一次）');

  W('stocklist', 'noun', '/ˈstɒklɪst/', 'B1', [], '存货清单；库存表', 'A printed list of the goods that a company has available.', [
    ['存货清单；库存表', 'A printed or online list of the goods and products that a shop or company has available.', '商店或公司现有货物与产品的印刷版或在线清单。', '可数；由 stock（存货）与 list（清单）构成的复合词。', 'The new stocklist will be sent to all customers on Monday.', '新的存货清单将于周一分发给所有客户。', ['current stocklist', 'printed stocklist'], ['inventory'], 'noun', 'countable', '商务'],
  ], 'stocklists',['stock'], 'brief ←?，自扫根：复合词 stock+list 取首成分（规范 §5.3，run-up←run 先例）stock B1（author_s4.js 第 4 参），语义直连（存货清单），B1 继承（判断项：末成分 list A1 亦在库）；近义 inventory 清单（队列原样，置唯一义项）');

  W('stocky', 'adjective', '/ˈstɒki/', '', [], '矮壮结实的', 'Having a short, thick and solid body.', [
    ['（身材）矮壮结实的', 'Describing a person who has a thick, solid body and is not very tall.', '形容人身体粗壮结实、个子不高。', '常作定语，也作表语，用于描述体型。', 'He was a stocky man with broad shoulders.', '他是个肩膀宽阔、身材矮壮的人。', ['stocky build', 'a stocky figure'], ['stout'], 'adjective', '定语/表语', '外貌'],
  ], '', ['stout'], 'brief ←?，自扫根 stock B1（author_s4.js 第 4 参）词首全段可见，但库内 stock 义为存货/股票/高汤/储备，与「矮壮」语义不直连，不满足 §5.4 条 4b，留空（判断项）；fam/syn stout 矮壮的（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('stoker', 'noun', '/ˈstəʊkə/', '', [], '司炉工；添火工人', 'A person whose job is to keep a fire burning in a furnace or engine.', [
    ['司炉工；添火工人', 'A person whose job is to add coal or wood to a furnace, a boiler or an engine fire.', '工作内容是给火炉、锅炉或机车火床加煤或木柴的人。', '可数；蒸汽机时代与锅炉房里的常见职业称谓。', 'The stoker kept the engine fire burning all night long.', '司炉工让机车的火整夜不熄。', ['engine stoker', 'work as a stoker'], ['fireman'], 'noun', 'countable', '职业'],
  ], 'stokers', [], 'brief ←?，自扫根：库内无 stoke 的在库词根（stoke、stoked 自扫均不在库），-er 无根可继，留空；近义 fireman 消防员、司炉（队列原样，置唯一义项）');

  W('stomachache', 'noun', '/ˈstʌməkeɪk/', 'A2', [], '胃痛；肚子痛', 'Pain felt in the front of the body between the chest and the waist.', [
    ['胃痛；腹痛', 'A pain in the stomach or belly, often caused by illness, stress or food.', '胃部或腹部的疼痛，常由疾病、压力或食物引起。', '可数；常与 have、suffer from 搭配，学生请假时最常用。', 'The student had a bad stomachache during the exam.', '那名学生考试时胃痛得厉害。', ['have a stomachache', 'a bad stomachache'], [], 'noun', 'countable', '健康'],
  ], 'stomachaches', ['ache'], 'brief ←?，自扫根：复合词 stomach+ache 取首成分（规范 §5.3）stomach A2（author_s4.js 第 4 参），语义直连（胃部疼痛），A2 继承（判断项：末成分 ache A2 亦在库）；fam ache 疼痛（队列原样，入第 10 参，义项内仅以整词 stomachache 出现）');

  W('stomp', 'noun/verb', '/stɒmp/', '', [], '重踩；跺脚（声）', 'To walk with heavy noisy steps, or one heavy step of this kind.', [
    ['重踩；跺脚行走', 'To walk with very heavy noisy steps, pressing your feet hard against the floor.', '脚用力踏在地板上，发出很响的脚步声地行走。', '不及物动词，常与 out、on 连用；也可作及物动词。', 'She stomped out of the room without saying another word.', '她一句话没再说，跺着脚走出了房间。', ['stomp out', 'stomp on'], ['stamp'], 'verb', '不及物', '通用'],
    ['跺脚声；重踏的一声', 'A single heavy step that makes a loud noise on the floor.', '在地板上发出响声的重重一脚。', '可数，常与 of 连用，多见于舞台与表演描写。', 'One loud stomp from the actor made the whole audience jump.', '演员重重的一跺脚让全体观众吓了一跳。', ['give a stomp'], [], 'noun', 'countable', '艺术'],
  ], 'stomps~stomped~stomped~stomping', ['stamp'], 'brief ←?，自扫根 stamp A2（author_s8.js 第 4 参）：stomp 与 stamp 词首非全段共享（stam／stomp 不同形），§5.6 兄弟派生不成立，留空（判断项：形近非同源）；fam/syn stamp 跺脚（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('stop working', 'verb', '/stɒp ˈwɜːkɪŋ/', '', [], '停止工作；停止运转', 'To finish doing your job, or to stop operating and no longer function.', [
    ['停止工作；离职', 'To stop doing a job permanently, usually because of your age.', '永久地停止一份工作，通常由于年纪原因。', '短语动词；口语中也常说 stop work。', 'He stopped working at the age of sixty-five.', '他在六十五岁时停止了工作。', ['stop working full time', 'stop working early'], ['retire'], 'verb', '不及物', '职业'],
    ['（机器）停止运转', 'To stop operating, especially because of a fault or a loss of power.', '停止运转，尤指因故障或断电。', '短语动词，主语为机器或设备。', 'The printer stopped working in the middle of the job.', '打印机在打印到一半时停止了运转。', ['stop working properly'], [], 'verb', '不及物', '工具'],
  ],'stops working~stopped working~stopping working', [], '短语整体不取成分作根，分级留空（规范 §6）；近义 retire 退休（队列原样，置义项 1 恰好一次，短语条目）').phrase = true;

  W('stopper', 'noun', '/ˈstɒpə/', 'A1', [], '塞子；瓶塞；堵塞物', 'A lid or a piece of material that closes the opening of a bottle, pipe or container.', [
    ['塞子；瓶塞', 'A piece of material or plastic that is pushed into the opening of a bottle to close it.', '塞进瓶口以封闭瓶子的材料或塑料制品。', '可数；玻璃瓶常用 glass stopper，酒瓶常用软木塞。', 'She pulled the stopper out and poured the oil into the pan.', '她拔出塞子，把油倒进锅里。', ['bottle stopper', 'glass stopper'], ['cork'], 'noun', 'countable', '家居'],
    ['堵塞物；管塞', 'Something that blocks a pipe or a hole so that liquid cannot pass through.', '堵住管道或孔洞、使液体无法通过的东西。', '可数；洗手盆与浴缸的下水口常说 sink stopper。', 'A hair stopper blocked the sink in the bathroom.', '一根头发堵住了浴室洗手盆的下水口。', ['sink stopper', 'drain stopper'], ['plug'], 'noun', 'countable', '家居'],
  ], 'stoppers', ['cork', 'plug'], 'brief 根提示 ←stop A1 堵住 + -er（§5.4 清单，指物），A1 继承；fam/syn cork 瓶塞、plug 塞子（队列原样，fam 入第 10 参，syn 置义项 1、2 各恰好一次）');

  W('storage', 'noun', '/ˈstɔːrɪdʒ/', '', ['CET4'], '存储；保管；仓储', 'The act of keeping goods or information somewhere, or the space used for it.', [
    ['存储；保管', 'The act of keeping goods, documents or information somewhere for later use.', '把货物、文件或信息存放在某处以便日后使用。', '不可数；常见 put into storage、in storage 等搭配。', 'The furniture was put into storage while the family was abroad.', '这家人出国期间家具被送进了仓库。', ['put into storage', 'in storage'], [], 'noun', 'uncountable', '物流'],
    ['仓储空间；存储场所', 'Space or a place in a building where things are kept safely.', '建筑物内可以安全存放物品的空间或场所。', '不可数；常与 for 连用，如 storage for furniture（家具寄存）。', 'The company rents storage near the port.', '公司在港口附近租用了仓储空间。', ['rent storage', 'storage costs'], [], 'noun', 'uncountable', '物流'],
    ['（计算机）存储', 'The part of a computer or a system that holds information while it is being used or saved.', '计算机或系统中用来保存信息的部分。', '不可数；侧重长期保存数据，常见搭配 data storage。', 'The program needs more storage to keep the pictures.', '这个程序需要更多存储空间来保存图片。', ['data storage', 'storage capacity'], ['memory'], 'noun', 'uncountable', '科学'],
  ],'storages', ['memory'], 'brief ←?，自扫根 store A2（author_s4.js 第 4 参）在库，但 -age 不在 §5.4 清单（规范 §5.7 明示留空场景），留空；fam/syn memory 记忆、存储器（队列原样，fam 入第 10 参，syn 置义项 3 恰好一次）');

})(typeof window !== 'undefined' ? window : globalThis);
