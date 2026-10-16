/* data/words/cet/author_u5.js — U 批次 5，缺口 unmask ~ unsure，共 31 条
 * （30 单词 + 1 短语；短语清单：unpaid worker；unrest 为普通名词条目，不标 .phrase）。
 * 来源：family + 义项近义缺口，tags/fam/syn 逐字照抄队列
 *   （%TEMP%\opencode\_task_u5.txt，widx 094-124，词头无残缺）。
 *   队列无独立 refs 列；brief 的 refs 字段 = syn 与 fam 的拼接串，其中 unpaid、unpleasant 两条
 *   brief 把 fam 排在最前（outstanding,outstanding,overdue / nasty,nasty,sour,ugly），其余各条为 syn 在前，
 *   与任务清单 fam/syn 两列内容完全一致，属队列拼接顺序差异，非内容不符；本文件按队列 fam、syn
 *   两列分列落位（fam → 第 10 参，syn → 义项第 8 参），逐字照抄，未作任何「纠正」。
 * CET 标签照抄队列：CET4 × 0、CET6 × 0，31 条第 5 参全为 []（队列 tags 列均为 -）。
 * brief：%TEMP%\opencode\_u5_brief.txt 共 30 行，与本批 30 个单词一一对应（首行 unmask、末行 unsure），
 *   30 行全部显示 ←?（无任何根提示），一律按规范 §5.2 用纯文本自扫
 *   （fs.readFileSync + indexOf("W('词头'") 定位后取第 4 参，扫 assets/js/data/words/cet/author_*.js
 *    与 curated.js 的 level 字段，未 require 全库；并行会话在写的 author_w*.js 一律跳过不读）。
 * 扫根结论（自扫，第 4 参）：mask B1（author_m1.js）、mix A2（author_m2.js）、name A1（author_n1.js）、
 *   necessary A2（author_n1.js）、nerve B2（author_n1.js，义含「勇气」）、notice A2（author_n1.js）、
 *   occupy B2（author_o1.js）、pay A1（author_p1.js）、plan A2（author_p2.js）、predict B1（author_p3.js）、
 *   process B2（author_p3.js）、pronounce B1（author_p3.js）、question A2（author_q1.js）、
 *   reason A2（author_r1.js）、refine C1（author_r1.js）、rehearse B2（author_r1.js）、relate B1（author_r1.js）、
 *   resolve B2（author_r2.js）、rest A2（author_r2.js）、restrict B2（author_r2.js）、ripe B2（author_r2.js）、
 *   pleasant A1（author_p8.js）、safe A2（author_s1.js）、sound A1（author_s3.js，形容词义「健全的、合理的」）、
 *   speak A1（author_s3.js）、settle B1（author_s5.js）、see A1（author_s5.js）、sure A2（author_s4.js）、
 *   stable B2（author_s8.js）；
 *   直接成分词复核（自扫同级，无冲突）：mixed A2、named A1、occupied B2、predictable B1、reasonable A2、
 *   refined C1、related B1、spoken A1；planned、paid、noticed、processed、pronounced、questioning、
 *   rehearsed、resolved、restricted、settled 未单列成词，一律取前缀后词根（§5.3）。
 * · 继承（30 单词全部继承；un- 为前缀性成分不作成分，一律取其后词根，malfunction 模式，
 *   语义直连核对（§5.1）逐词通过，否定方向直连即继承）：
 *   A1 × 6：unnamed、unpaid、unpleasant、unseen、unsound、unspoken；
 *   A2 × 9：unmixed、unnecessary、unnoticed、unplanned、unquestioning、unreasonable、
 *     unrest（判断项，见条目备注）、unsafe、unsure；
 *   B1 × 6：unmask、unpredictable、unpronounced、unrelated、unsettle、unsettled；
 *   B2 × 8：unnerve、unoccupied、unprocessed、unrehearsed、unresolved、unrestricted、unripe、unstable；
 *   C1 × 1：unrefined。
 * · 留空（0 单词 + 1 短语）：仅 unpaid worker（规范 §6，短语整体不取成分作根，分级留空）。
 * CET 分布（31 条）：CET4 × 0、CET6 × 0，其余全为 []。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_u5.js 必须在 _cet_helper.js 之后加载');

  W('unmask', 'verb', '/ʌnˈmɑːsk/', 'B1', [], '揭下伪装；揭露真相', 'To remove a mask, or to make hidden facts known.', [
    ['摘下面具；露出真面目', 'To take the mask off somebody, or to show the real face of somebody.', '摘下某人的面具，或让某人露出真实的面孔。', '及物动词，本义具体，宾语是人或面具，也可反身使用。', 'The villain unmasked himself in front of the crowd.', '那个反派在众人面前摘下了面具。', ['unmask an intruder'], [], 'verb', '及物', '通用'],
    ['揭露（真面目、内幕）', 'To show the true character of somebody, or to reveal something that was hidden.', '显出某人的真实面目，或把隐藏的事情揭出来。', '及物动词，宾语常为 truth、fraud、plot，新闻语体常见。', 'The report unmasked the fraud behind the project.', '这份报告揭露了该项目背后的骗局。', ['unmask the truth'], ['expose'], 'verb', '及物', '媒体'],
  ], 'unmasks~unmasked~unmasked~unmasking',['mask'], 'brief ←?，按 §5.2 自扫根 mask B1 面具、掩护（author_m1.js 第 4 参）；un- 前缀不作成分，取其后词根，「摘下面具、揭露真面目」与 mask 语义直连（否定方向直连可继承），B1 继承（malfunction 模式）；近义 expose 揭露、曝光（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unmixed', 'adjective', '/ˌʌnˈmɪkst/', 'A2', [], '未混合的；纯粹的', 'Not combined with anything else, so that a substance or a feeling stays pure.', [
    ['未混合的；分开的', 'Not combined with anything else, so the parts remain separate.', '没有和别的东西掺合，各部分仍然分开。', '定语表语两用，常形容液体、材料、配料。', 'Pour the unmixed juice into a clean glass.', '把未勾兑的果汁倒进干净的杯子里。', ['unmixed paint'], [], 'adjective', '定语/表语', '家居'],
    ['纯粹的；不夹杂的', 'Complete and not combined with any other feeling or quality.', '完全的，没有掺进别的感情或成分。', '多作定语，常与 pleasure、joy、delight 连用。', 'She felt unmixed joy at the good news.', '听到这个好消息她感到纯粹的喜悦。', ['unmixed pleasure'], ['pure'], 'adjective', '定语', '情感'],
  ], '',['mix'], 'brief ←?，按 §5.2 自扫根 mix A2 混合、掺和（author_m2.js 第 4 参）；un- 前缀不作成分，取其后词根，「未混合、纯粹」与 mix 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；直接成分词 mixed 亦在库且与词根同级（author_m8.js 自扫），无冲突；近义 pure 纯粹的、纯净的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unnamed', 'adjective', '/ˌʌnˈneɪmd/', 'A1', [], '没有名字的；不具名的', 'Not given a name, or not identified by a name.', [
    ['没有名字的；未取名的', 'Not having a name, because none was given or because it is not known.', '没有名字，因为还没有起名，或者名字无人知晓。', '定语表语两用，可形容人、地方与事物。', 'The little village was still unnamed when we mapped it.', '我们绘制地图时这个小村庄还没有名字。', ['an unnamed place'], [], 'adjective', '定语/表语', '通用'],
    ['不具名的；匿名的', 'Not identified by name, so that the person or the thing stays unknown.', '不写出姓名，使人或事物不被认出来。', '多作定语，新闻里常见 an unnamed source 一类说法。', 'An unnamed source gave the story to the press.', '一位不具名的消息人士把这件事告诉了媒体。', ['an unnamed official'], ['anonymous'], 'adjective', '定语', '媒体'],
  ], '',['name'], 'brief ←?，按 §5.2 自扫根 name A1 名字、名称（author_n1.js 第 4 参）；un- 前缀不作成分，取其后词根，「没有名字、不具名」与 name 语义直连（否定方向直连可继承），A1 继承（malfunction 模式）；直接成分词 named 亦在库且与词根同级（author_n2.js 自扫），无冲突；近义 anonymous 匿名的、无名的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unnecessary', 'adjective', '/ʌnˈnesəsəri/', 'A2', [], '没必要的；多余的', 'Not needed at all, or more than what is needed.', [
    ['没必要的；不需要的', 'Not needed for the purpose you have in mind.', '为了既定的目的并不需要。', '定语表语两用，可修饰行为、担心、手续、改动。', 'There is no need to make unnecessary changes.', '没有必要作出不必要的改动。', ['unnecessary delay'], [], 'adjective', '定语/表语', '通用'],
    ['多余的；累赘的', 'More than is needed, so that it can simply be left out.', '超出实际需要，可以整段省掉。', '多作定语，形容重复的内容、开支与环节。', 'The second paragraph is unnecessary here.', '第二段在这里是多余的。', ['unnecessary detail'], ['redundant'], 'adjective', '定语', '书面'],
  ], '', ['redundant'], 'brief ←?，按 §5.2 自扫根 necessary A2 必要的（author_n1.js 第 4 参）；un- 前缀不作成分，取其后词根，「没必要的、多余的」与 necessary 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；家族/近义 redundant 多余的、累赘的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('unnerve', 'verb', '/ʌnˈnɜːv/', 'B2', [], '使紧张；使丧失信心', 'To make somebody so nervous that they lose confidence.', [
    ['使失去勇气；使慌乱', 'To make somebody lose the confidence or courage needed to act.', '让某人失去行动所需的信心或勇气。', '及物动词，宾语是人，多用于比赛、面试、演讲一类场景。', 'The sudden silence unnerved the speaker.', '突然的沉默让演讲者慌了神。', ['completely unnerved'], ['rattle'], 'verb', '及物', '心理'],
    ['使不安；使心里发毛', 'To make somebody feel worried, uncomfortable or slightly frightened.', '使某人感到担忧、不自在或轻微的恐惧。', '及物动词，常以 -ed 形式作表语。', 'The empty house unnerved her after dark.', '天黑之后那栋空房子让她心里发毛。', ['feel unnerved'], [], 'verb', '及物', '情感'],
  ], 'unnerves~unnerved~unnerved~unnerving',['nerve'], 'brief ←?，按 §5.2 自扫根 nerve B2 神经、勇气（author_n1.js 第 4 参，词条含「勇气」义）；un- 前缀不作成分，取其后词根，「使丧失勇气、使紧张」与 nerve 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；近义 rattle 使慌乱、使紧张（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unnoticed', 'adjective', '/ʌnˈnəʊtɪst/', 'A2', [], '没被注意到的；无人察觉的', 'Not noticed by anybody, or ending without being noticed.', [
    ['未被注意到的；被忽视的', 'Not seen or realized by anybody.', '没有人看见，也没有人察觉到。', '定语表语两用，常与 go、pass、remain 连用。', 'The change in the rules went unnoticed.', '规则的这处变化没有被人注意到。', ['go unnoticed'], ['invisible'], 'adjective', '定语/表语', '通用'],
    ['无人察觉就过去的；悄悄流逝的', 'Happening or finishing without anybody paying attention.', '发生或结束的时候谁也没有留意。', '多作表语，常见 pass unnoticed 一类说法。', 'The hours passed unnoticed in the library.', '在图书馆里几个小时不知不觉地过去了。', ['slip away unnoticed'], [], 'adjective', '表语', '通用'],
  ], '',['notice'], 'brief ←?，按 §5.2 自扫根 notice A2 注意、察觉（author_n1.js 第 4 参）；un- 前缀不作成分，取其后词根，「没被察觉」与 notice 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；近义 invisible 看不见的、不被注意的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unoccupied', 'adjective', '/ˌʌnˈɒkjupaɪd/', 'B2', [], '空着的；无人占用的', 'Not used by anybody, or not busy doing anything.', [
    ['空着的；无人使用的', 'Not being used or lived in by anybody at the moment.', '此刻既没有被人使用，也没有被人居住。', '定语表语两用，形容座位、房间、房子、车位。', 'We found an unoccupied seat near the door.', '我们在门边找到一个空位。', ['an unoccupied building'], ['vacant'], 'adjective', '定语/表语', '家居'],
    ['有空的；无事可做的', 'Not busy, with no work or duty to do at that moment.', '不忙，当时没有工作或任务要做。', '多作表语，正式语体，指人及其时间。', 'The manager was unoccupied for the whole afternoon.', '经理整个下午都没有安排。', ['remain unoccupied'], ['free'], 'adjective', '表语', '职业'],
  ], '', ['vacant'], 'brief ←?，按 §5.2 自扫根 occupy B2 占用、占领（author_o1.js 第 4 参）；un- 前缀不作成分，取其后词根，「空着、无人占用」与 occupy 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；直接成分词 occupied 亦在库且与词根同级（author_o3.js 自扫），无冲突；家族/近义 vacant 空着的、空缺的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次），近义 free 有空的、不受拘束的（队列原样，置义项 2 恰好一次）');

  W('unpaid', 'adjective', '/ˌʌnˈpeɪd/', 'A1', [], '未付款的；无报酬的', 'Not yet paid, or done without receiving money.', [
    ['未支付的；拖欠的', 'Not yet paid, so the money is still owed.', '还没有付出去，钱仍然欠着。', '定语表语两用，常修饰 bill、salary、money、account。', 'The invoice is still unpaid after three months.', '这张账单三个月之后仍未付清。', ['leave a bill unpaid'], ['outstanding'], 'adjective', '定语/表语', '商务'],
    ['逾期未付的；到期未清的', 'Owing money that should have been paid before a stated date.', '欠着的钱已经超过了约定的日期。', '多作表语，常与 for 连用，语气比 late 重。', 'The rent is unpaid again this month.', '这个月的房租又逾期未交了。', ['unpaid for weeks'], ['overdue'], 'adjective', '定语/表语', '商务'],
    ['无报酬的；义务的', 'Done as work without receiving money for it.', '作为工作去做，却不因此拿到报酬。', '多作定语，形容工作、假期、实习、劳动。', 'She spent a year in unpaid volunteer work.', '她做了一年的无报酬志愿工作。', ['unpaid work', 'unpaid leave'], [], 'adjective', '定语', '职业'],
  ], '', ['outstanding'], 'brief ←?，按 §5.2 自扫根 pay A1 付钱、支付（author_p1.js 第 4 参）；un- 前缀不作成分，取其后词根，「未支付、无报酬」与 pay 语义直连（否定方向直连可继承），A1 继承（malfunction 模式）；家族/近义 outstanding 未支付的、未解决的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次），近义 overdue 逾期的、过期的（队列原样，置义项 2 恰好一次）');

  W('unpaid worker', 'noun', '/ˌʌnˈpeɪd ˈwɜːkə/', '', [], '无偿工作者；不拿报酬干活的人', 'A person who does work without being paid for it.', [
    ['无偿工作者；义务劳动者', 'A person who does a job without receiving money for it.', '做这份工作却不因此拿到报酬的人。', '可数短语名词，作主语时谓语视整体或成员用单复数。', 'The charity relies on every unpaid worker it has.', '这家慈善机构依靠着它的每一位无偿工作者。', ['recruit unpaid workers'], ['volunteer'], 'noun', 'countable', '职业'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 volunteer 志愿者、义务工作者（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('unplanned', 'adjective', '/ˌʌnˈplænd/', 'A2', [], '非计划中的；没有安排的', 'Not planned beforehand, or done without being arranged.', [
    ['非计划中的；意外的', 'Not intended or arranged before it happened.', '在发生之前既没有被打算，也没有被安排。', '定语表语两用，形容怀孕、旅行、开支、停工。', 'An unplanned stop cost us an hour.', '一次计划外的停车让我们损失了一个小时。', ['an unplanned pregnancy'], [], 'adjective', '定语/表语', '通用'],
    ['随兴的；没有事先安排的', 'Happening because of a sudden wish rather than because of a plan.', '因一时兴起而发生，而不是按计划进行。', '多作定语，形容聚会、访问、谈话。', 'They dropped in for an unplanned visit.', '他们未经安排就过来串门了。', ['an unplanned visit'], ['spontaneous'], 'adjective', '定语', '社交'],
  ], '',['plan'], 'brief ←?，按 §5.2 自扫根 plan A2 计划、安排（author_p2.js 第 4 参）；un- 前缀不作成分，取其后词根，「非计划中的、意外的」与 plan 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；近义 spontaneous 自发的、随兴的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unpleasant', 'adjective', '/ʌnˈpleznt/', 'A1', [], '令人不快的；讨人嫌的', 'Making you feel slightly upset, or offensive to the senses.', [
    ['令人不快的；讨厌的', 'Making somebody feel slightly angry, upset or uncomfortable.', '让某人感到有些生气、不快或不舒服。', '定语表语两用，可形容天气、消息、态度与人。', 'She had an unpleasant surprise waiting at home.', '等着她的是一件不愉快的意外。', ['an unpleasant experience'], ['nasty'], 'adjective', '定语/表语', '情感'],
    ['（气味、味道）难闻的；发臭的', 'Having a strong smell or taste that people find disgusting.', '带有让人反感的强烈气味或味道。', '多作表语，形容食物、房间、烟味。', 'The milk had an unpleasant smell.', '这牛奶有股难闻的味道。', ['an unpleasant odour'], ['sour'], 'adjective', '表语', '饮食'],
    ['（样子）难看的；刺目的', 'Not pleasant to look at because the appearance is harsh.', '因为外观生硬而不好看。', '多作定语，语气比 ugly 轻。', 'The room was lit by an unpleasant grey light.', '房间里照着一层刺目的灰光。', ['an unpleasant sight'], ['ugly'], 'adjective', '定语', '外貌'],
  ], '', ['nasty'], 'brief ←?，按 §5.2 自扫根 pleasant A1 令人愉快的（author_p8.js 第 4 参）；un- 前缀不作成分，取其后词根，「令人不快的、难闻的、难看的」与 pleasant 语义直连（否定方向直连可继承），A1 继承（malfunction 模式）；家族/近义 nasty 令人不快的、恶意的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次），近义 sour 酸的、酸腐的（置义项 2）、ugly 难看的、丑陋的（置义项 3），均队列原样、各恰好一次');

  W('unpredictable', 'adjective', '/ˌʌnprɪˈdɪktəbl/', 'B1', [], '难以预料的；说变就变的', 'Not able to be known in advance, or changing very suddenly.', [
    ['难以预料的；无法预测的', 'Not able to be known or worked out before it happens.', '在发生之前无法知道，也算不出来。', '定语表语两用，形容天气、行为、结果、价格。', 'The weather here is wildly unpredictable.', '这里的天气变化莫测。', ['an unpredictable outcome'], [], 'adjective', '定语/表语', '自然'],
    ['易变的；反复无常的', 'Changing quickly and often, so that people cannot rely on it.', '变化又快又频繁，让人无法依赖。', '多作定语，形容人、市场与局势。', 'An unpredictable temper made every meeting tense.', '反复无常的脾气让每次会议都很紧张。', ['an unpredictable partner'], ['volatile'], 'adjective', '定语', '性格'],
  ], '',['predict'], 'brief ←?，按 §5.2 自扫根 predict B1 预测、预言（author_p3.js 第 4 参）+ -able（-able 在 §5.4 清单，un- 前缀不作成分，取其后词根），「难以预测的」与 predict 语义直连（否定方向直连可继承），B1 继承（malfunction 模式）；直接成分词 predictable 亦在库且与词根同级（author_p10.js 自扫），无冲突；近义 volatile 易变的、易挥发的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unprocessed', 'adjective', '/ˌʌnˈprəʊsest/', 'B2', [], '未加工的；未处理的', 'Not yet treated, prepared or dealt with.', [
    ['未加工的；天然的', 'Not yet treated or prepared so that it can be used.', '还没有经过处理或制备，不能直接使用。', '定语表语两用，形容食物、材料、矿产。', 'The factory ships unprocessed ore overseas.', '这家工厂把原矿运往海外。', ['unprocessed materials'], ['raw'], 'adjective', '定语', '工业'],
    ['未处理的；待办的', 'Not yet dealt with by a computer or by an official process.', '还没有被计算机或正式程序处理。', '多作定语，形容数据、申请、订单。', 'Unprocessed claims slow the whole system.', '没有处理的申请拖慢了整个系统。', ['unprocessed data'], [], 'adjective', '定语', '科学'],
  ], '',['process'], 'brief ←?，按 §5.2 自扫根 process B2 加工、处理（author_p3.js 第 4 参）；un- 前缀不作成分，取其后词根，「未加工的、未处理的」与 process 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；近义 raw 天然的、未加工的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unpronounced', 'adjective', '/ˌʌnprəˈnaʊnst/', 'B1', [], '未说出口的；不发音的', 'Not spoken aloud, or left silent when a word is said.', [
    ['未说出的；未表达的', 'Not spoken or expressed although it is felt.', '虽然心里有感受，却没有说出来。', '多作定语，形容怒气、不满、愿望一类抽象事物。', 'His anger stayed unpronounced all evening.', '整个晚上他的怒气都没有说出口。', ['unpronounced feelings'], [], 'adjective', '定语', '心理'],
    ['（字母）不发音的', 'Not said when the word is read aloud, although it is written in it.', '单词读出来时不发这个音，虽然它写在拼写里。', '多作定语，用于语音与语法讲解，常说 unpronounced letter。', 'The final e in these words is unpronounced.', '这些词末尾的 e 都不发音。', ['an unpronounced letter'], ['silent'], 'adjective', '定语', '语法'],
  ], '',['pronounce'], 'brief ←?，按 §5.2 自扫根 pronounce B1 发音、读出（author_p3.js 第 4 参）；un- 前缀不作成分，取其后词根，「未说出口的、不发音的」与 pronounce 语义直连（否定方向直连可继承），B1 继承（malfunction 模式）；近义 silent 沉默的、不发音的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unquestioning', 'adjective', '/ʌnˈkweʃənɪŋ/', 'A2', [], '不加质疑的；不言而喻的', 'Accepting something completely, without asking whether it is right.', [
    ['不加怀疑的；全然接受的', 'Accepting something completely because you trust the person or the idea.', '因为信任某人或某个想法而完全接受。', '定语表语两用，常与 loyalty、support、obedience 连用。', 'He gave the plan his unquestioning support.', '他对这个计划给予了毫无保留的支持。', ['unquestioning loyalty'], [], 'adjective', '定语', '性格'],
    ['不言而喻的；默契给予的', 'Given or understood without ever being put into words.', '不用言明就给出，也能被领会。', '多作定语，形容信任、服从、信任一类抽象名词。', 'Their unquestioning faith carried them through.', '他们那份不言而喻的信念支撑他们走了过来。', ['unquestioning faith'], ['implicit'], 'adjective', '定语', '情感'],
  ], '',['question'], 'brief ←?，按 §5.2 自扫根 question A2 提问、疑问（author_q1.js 第 4 参）+ -ing（-ing 在 §5.4 清单，un- 前缀不作成分，取其后词根），「不加质疑的」与 question 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；近义 implicit 含蓄的、不言而喻的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unreasonable', 'adjective', '/ʌnˈriːzənəbl/', 'A2', [], '不合情理的；超出常理的', 'Not fair or sensible, or beyond what can be accepted.', [
    ['不合理的；不讲道理的', 'Not fair or sensible, especially in what somebody asks for.', '不公平或不合情理，尤指某人提出的要求。', '定语表语两用，形容人、要求、决定、价格。', 'The landlord made an unreasonable demand.', '房东提出了一个不合理的要求。', ['unreasonable behaviour'], [], 'adjective', '定语/表语', '性格'],
    ['不理智的；失去理性的', 'Not based on clear thinking or sound judgement.', '没有建立在清晰思考或可靠判断之上。', '定语表语两用，形容恐惧、怀疑、反应。', 'His fear of the dark was entirely unreasonable.', '他对黑暗的恐惧完全没有道理。', ['unreasonable fear'], ['irrational'], 'adjective', '定语/表语', '心理'],
    ['（要求、价格）过分的；难以接受的', 'Too extreme or too costly to be counted as fair.', '过于极端或代价过高，不能算作公平。', '多作表语，常与 for 连用。', 'The fee was unreasonable for a single lesson.', '单节课收这个费用实在过分。', ['it is unreasonable to do sth'], ['impossible'], 'adjective', '表语', '商务'],
  ], '', ['irrational'], 'brief ←?，按 §5.2 自扫根 reason A2 理由、理性（author_r1.js 第 4 参）+ -able（-able 在 §5.4 清单，un- 前缀不作成分，取其后词根），「不合理的、不理智的」与 reason 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；直接成分词 reasonable 亦在库且与词根同级（author_r4.js 自扫），无冲突；家族/近义 irrational 不理性的、不理智的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次），近义 impossible 难以接受的、过分的（队列原样，置义项 3 恰好一次）');

  W('unrefined', 'adjective', '/ˌʌnriˈfaɪd/', 'C1', [], '未精制的；粗俗的', 'Not cleaned or improved, either in material form or in behaviour.', [
    ['未精炼的；未提纯的', 'Not yet processed to remove the substances that are not wanted.', '还没有经过加工去掉不需要的成分。', '定语表语两用，形容油、糖、矿物、酒。', 'Unrefined sugar keeps more minerals.', '未精制的糖保留了更多矿物质。', ['unrefined oil'], ['virgin'], 'adjective', '定语', '工业'],
    ['（举止）粗俗的；不文雅的', 'Lacking good manners or taste in the way somebody behaves.', '在行为方式上缺少教养与品味。', '多作定语，形容言谈、趣味、外表。', 'His manners were rough and unrefined.', '他的举止粗鲁而不文雅。', ['unrefined behaviour'], [], 'adjective', '定语', '性格'],
  ], '',['refine'], 'brief ←?，按 §5.2 自扫根 refine C1 精炼、提纯（author_r1.js 第 4 参）；un- 前缀不作成分，取其后词根，「未精制的、粗俗的」与 refine 语义直连（否定方向直连可继承），C1 继承（malfunction 模式）；直接成分词 refined 亦在库且与词根同级（author_r5.js 自扫），无冲突；近义 virgin 原生的、未使用的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unrehearsed', 'adjective', '/ˌʌnriˈhɜːst/', 'B2', [], '未经排练的；即兴的', 'Not practised beforehand, or done without any preparation.', [
    ['未经排练的；没有准备的', 'Not practised or prepared before being performed or said.', '在表演或说出之前没有练习，也没有准备。', '定语表语两用，形容演讲、演出、回答。', 'The speech was unrehearsed but fluent.', '这场演讲未经排练，却很流畅。', ['an unrehearsed reply'], [], 'adjective', '定语/表语', '艺术'],
    ['即兴的；随兴而发的', 'Done or said immediately, without being planned in advance.', '当场做出或说出，事先没有任何安排。', '多作定语，常见于音乐与谈话语境。', 'The band started an unrehearsed jam session.', '乐队随即兴起了演奏。', ['an unrehearsed performance'], ['impromptu'], 'adjective', '定语', '文化'],
  ], '', ['impromptu'], 'brief ←?，按 §5.2 自扫根 rehearse B2 排练、预演（author_r1.js 第 4 参）；un- 前缀不作成分，取其后词根，「未经排练的、即兴的」与 rehearse 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；家族/近义 impromptu 即兴的、无准备的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('unrelated', 'adjective', '/ˌʌnriˈleɪtɪd/', 'B1', [], '互不相关的；没有关联的', 'Not connected with each other in any way.', [
    ['不相关的；没有关联的', 'Having no connection with each other.', '彼此之间没有任何联系。', '定语表语两用，常与 to 连用。', 'The two cases are completely unrelated.', '这两个案子毫无关联。', ['be unrelated to'], ['independent'], 'adjective', '定语/表语', '通用'],
    ['（话题）扯开的；不相干的', 'Not connected with the subject being discussed.', '和正在讨论的主题没有关系。', '多作表语，常见于会议与写作场合。', 'His comment was unrelated to the question.', '他的评论和这个问题不相干。', ['an unrelated remark'], [], 'adjective', '表语', '书面'],
  ], '',['relate'], 'brief ←?，按 §5.2 自扫根 relate B1 联系、关联（author_r1.js 第 4 参）；un- 前缀不作成分，取其后词根，「互不相关的」与 relate 语义直连（否定方向直连可继承），B1 继承（malfunction 模式）；直接成分词 related 亦在库且与词根同级（author_r6.js 自扫），无冲突；近义 independent 独立的、无关联的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unresolved', 'adjective', '/ˌʌnriˈzɒlvd/', 'B2', [], '未解决的；悬而未决的', 'Not yet settled, decided or answered.', [
    ['未解决的；未找到答案的', 'Not yet solved or answered after effort has been made.', '经过努力仍未被解决或回答。', '定语表语两用，形容问题、争端、案件、疑团。', 'The dispute remains unresolved after months of talk.', '经过数月谈判，这场争端仍未解决。', ['an unresolved problem'], ['outstanding'], 'adjective', '定语/表语', '社会'],
    ['未消除的；悬着未定的', 'Not yet cleared away, so people still feel unsure about it.', '还没有被消除，人们仍然拿不准。', '多作定语，形容分歧、疑虑、顾虑。', 'Her doubts about the move stayed unresolved.', '她对这次搬迁的疑虑一直没有消除。', ['remain unresolved'], ['pending'], 'adjective', '定语', '心理'],
  ], '', ['pending'], 'brief ←?，按 §5.2 自扫根 resolve B2 解决、决定（author_r2.js 第 4 参）；un- 前缀不作成分，取其后词根，「未解决的、悬而未决的」与 resolve 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；家族/近义 pending 待处理的、悬而未决的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次），近义 outstanding 未解决的、未结清的（队列原样，置义项 1 恰好一次）');

  W('unrest', 'noun', '/ʌnˈrest/', 'A2', [], '（社会、政治）动荡；内心的不安', 'A state of public anger and disagreement, or a deep feeling of dissatisfaction.', [
    ['社会动荡；动乱', 'A state of anger and protest among a group of people that leads to public trouble.', '一群人的愤怒与抗议，并由此引起公共骚乱的状态。', '多作不可数，常与 civil、social、political 连用；谈多起事件时也可作可数复数。', 'Rising prices led to widespread unrest in several cities.', '物价上涨使好几个城市出现了大范围动荡。', ['civil unrest', 'political unrest'], ['disorder', 'riot'], 'noun', 'uncountable', '政治'],
    ['内心的不安；骚动感', 'A deep feeling of worry and dissatisfaction that is hard to hide.', '难以掩饰的担忧与不满。', '书面用语，多作不可数，常与 sense of、inner 连用。', 'An inner unrest kept him awake at night.', '内心的不安让他夜里睡不着。', ['a sense of unrest'], [], 'noun', 'uncountable', '心理'],
  ], '', ['riot'], 'brief ←?，按 §5.2 自扫根 rest A2 休息、安息（author_r2.js 第 4 参）；un- 前缀不作成分，取其后词根，「不安宁、动荡」是 rest「安宁、静止」的否定方向，语义直连（否定方向直连可继承），A2 继承（malfunction 模式；判断项：库内 rest 词条以「休息、剩余」为主列，「安宁」义见于其「安息、静止」用法，供主 agent 裁定）；家族/近义 disorder 骚乱、混乱 与 riot 暴乱、骚乱（队列原样，fam riot 入第 10 参，syn 置义项 1 各恰好一次）；unrest 多作不可数，词形变化按 §4 写空值');

  W('unrestricted', 'adjective', '/ˌʌnrɪˈstrɪktɪd/', 'B2', [], '不受限制的；自由通行的', 'Not limited by rules, controls or anything that holds it back.', [
    ['不受限制的；无约束的', 'Not limited by rules, laws or controls.', '不受规则、法律或管控的限制。', '定语表语两用，形容 access、use、entry、rights。', 'Access to the files is unrestricted.', '这些档案不受限制地开放。', ['unrestricted access'], ['free'], 'adjective', '定语/表语', '法律'],
    ['（区域）自由通行的；开放的', 'Open to anybody, with no part kept closed.', '对所有人开放，没有区域被封锁。', '多作定语，形容区域、航道、场地。', 'The beach stays unrestricted all year.', '这片海滩全年开放。', ['an unrestricted zone'], [], 'adjective', '定语', '社会'],
  ], '',['restrict'], 'brief ←?，按 §5.2 自扫根 restrict B2 限制、约束（author_r2.js 第 4 参）；un- 前缀不作成分，取其后词根，「不受限制的」与 restrict 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；近义 free 自由的、不受约束的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unripe', 'adjective', '/ʌnˈraɪp/', 'B2', [], '未熟的；时机未到的', 'Not ready to be eaten, or not ready to happen.', [
    ['（果实）未熟的', 'Not ready to be eaten, still hard or sour.', '还不能吃，仍然发硬或发酸。', '定语表语两用，形容水果、蔬菜、种子。', 'The mangoes were still unripe when we bought them.', '我们买芒果时它们还没熟。', ['unripe fruit'], ['green'], 'adjective', '定语/表语', '饮食'],
    ['（事物）未成熟的；时机未到的', 'Not yet fully developed, so it is not ready to be used or dealt with.', '尚未充分发展，因此还不能使用或处理。', '多作定语，形容计划、争论、时机。', 'The idea was unripe and needed more work.', '这个想法还不成熟，需要更多打磨。', ['an unripe plan'], [], 'adjective', '定语', '书面'],
  ], '', ['green'], 'brief ←?，按 §5.2 自扫根 ripe B2 成熟的（author_r2.js 第 4 参）；un- 前缀不作成分，取其后词根，「未熟的、时机未到的」与 ripe 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；家族/近义 green 生的、未熟的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');

  W('unsafe', 'adjective', '/ʌnˈseɪf/', 'A2', [], '可能造成伤害的；缺乏安全保障的', 'Likely to cause harm, or in a situation where harm may happen.', [
    ['不安全的；有危险的', 'Likely to cause injury or damage to somebody.', '可能给某人造成伤害或损失。', '定语表语两用，形容建筑、行为、路段、设备。', 'The old bridge was declared unsafe.', '那座老桥被宣布不安全。', ['an unsafe building'], [], 'adjective', '定语/表语', '环境'],
    ['（因辐射）危害健康的；不安全的', 'Not safe because it exposes people to harmful radiation.', '因为让人受到有害的辐射而不安全。', '多作表语，常见于核事故与安全检查语境。', 'Officials said the zone was still unsafe.', '官方说这片区域仍然不安全。', ['declared unsafe'], ['radioactive'], 'adjective', '表语', '健康'],
  ], '',['safe'], 'brief ←?，按 §5.2 自扫根 safe A2 安全的（author_s1.js 第 4 参）；un- 前缀不作成分，取其后词根，「不安全的、有危险的」与 safe 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；近义 radioactive 有放射性的、辐射危险的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unseen', 'adjective', '/ˌʌnˈsiːn/', 'A1', [], '未被看见的；无形的', 'Not seen by anybody, or impossible to see.', [
    ['未被看见的；没被察觉的', 'Not seen or noticed by anybody.', '没有人看见，也没有人察觉到。', '定语表语两用，常与 go、remain 连用。', 'Their arrival went unseen by the press.', '他们的到来没有被媒体察觉。', ['go unseen'], [], 'adjective', '定语/表语', '通用'],
    ['无形的；隐伏的', 'Not able to be seen, or existing without being noticed.', '看不见的，或存在着却无人注意。', '多作定语，形容力量、危险、影响。', 'An unseen threat ran through the town.', '一股无形的威胁蔓延全镇。', ['an unseen danger'], ['invisible'], 'adjective', '定语', '社会'],
  ], '', ['invisible'], 'brief ←?，按 §5.2 自扫根 see A1 看见（author_s5.js 第 4 参）；un- 前缀不作成分，取其后词根，「未被看见的、无形的」与 see 语义直连（否定方向直连可继承），A1 继承（malfunction 模式）；家族/近义 invisible 看不见的、无形的（队列原样，fam 入第 10 参，syn 置义项 2 恰好一次）');

  W('unsettle', 'verb', '/ʌnˈsetl/', 'B1', [], '使不安；使动荡', 'To make somebody feel worried, or to make a situation become unstable.', [
    ['使心神不宁；使不安', 'To make somebody feel worried or unable to relax.', '使某人担忧起来，无法平静。', '及物动词，宾语是人，常以 -ed 形式作表语。', 'The strange noise unsettled the children.', '奇怪的响动让孩子们心里不踏实。', ['feel unsettled'], ['shake'], 'verb', '及物', '心理'],
    ['使（局势）动荡；打乱', 'To make a situation unsteady or less certain than it was.', '让局面变得不稳，或不如原来确定。', '及物动词，宾语常为 situation、market、plans。', 'The election result unsettled the market.', '选举结果扰乱了市场。', ['unsettle the market'], [], 'verb', '及物', '政治'],
  ], 'unsettles~unsettled~unsettled~unsettling',['settle'], 'brief ←?，按 §5.2 自扫根 settle B1 安定、解决（author_s5.js 第 4 参）；un- 前缀不作成分，取其后词根，「使不安、使动荡」与 settle 语义直连（否定方向直连可继承），B1 继承（malfunction 模式）；近义 shake 使震惊、使动摇（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unsettled', 'adjective', '/ʌnˈsetld/', 'B1', [], '未确定的；心神不宁的', 'Not yet decided, or worried and unable to calm down.', [
    ['未确定的；未解决的', 'Not yet decided or arranged, so that people cannot make plans.', '还没有决定或安排，人们无法据此计划。', '定语表语两用，形容日期、条款、账户、争端。', 'The date for the meeting is still unsettled.', '会议的日期尚未确定。', ['remain unsettled'], ['uncertain'], 'adjective', '定语/表语', '商务'],
    ['（心绪）不安的；浮动的', 'Worried or restless because of change or uncertainty.', '因为变化或不确定而担忧、坐立不安。', '多作表语，形容人的心情与状态。', 'After the move he felt unsettled for weeks.', '搬家之后他几个星期都心神不宁。', ['feel unsettled'], [], 'adjective', '表语', '心理'],
  ], '',['settle'], 'brief ←?，按 §5.2 自扫根 settle B1 安定、定居（author_s5.js 第 4 参）；un- 前缀不作成分，取其后词根，「未确定的、不安的」与 settle 语义直连（否定方向直连可继承），B1 继承（malfunction 模式）；近义 uncertain 不确定的、未定的（队列原样，置义项 1 恰好一次）；fam 队列为空故第 10 参 []');

  W('unsound', 'adjective', '/ʌnˈsaʊnd/', 'A1', [], '不牢固的；站不住脚的', 'Not strong or safe in structure, or not based on good judgement.', [
    ['不牢固的；不结实的', 'Not strong or safe, so that it may fail or collapse.', '不够坚固或安全，可能出问题、可能塌陷。', '定语表语两用，形容材料、地基、结构、地板。', 'The floorboards were old and unsound.', '这些地板已经老旧而不结实。', ['an unsound structure'], [], 'adjective', '定语/表语', '家居'],
    ['（判断、建议）不可靠的；站不住脚的', 'Based on bad judgement or on ideas that are not correct.', '建立在错误的判断或不正确的想法之上。', '多作定语，形容 argument、advice、decision。', 'The plan was built on unsound assumptions.', '这个计划建立在靠不住的假设上。', ['an unsound argument'], ['invalid'], 'adjective', '定语', '书面'],
  ], '',['sound'], 'brief ←?，按 §5.2 自扫根 sound A1 声音、听起来、健全的（author_s3.js 第 4 参，形容词义「健全的、合理的」）；un- 前缀不作成分，取其后词根，「不牢固的、站不住脚的」与 sound 形容词义语义直连（否定方向直连可继承），A1 继承（malfunction 模式）；近义 invalid 无效的、站不住脚的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unspoken', 'adjective', '/ʌnˈspəʊkən/', 'A1', [], '未说出口的；不言而喻的', 'Not said aloud, or understood without ever being said.', [
    ['未说出口的；藏在心里的', 'Not spoken aloud, although everybody knows it.', '没有说出声，尽管大家都明白。', '多作定语，形容规则、不满、协议、想法。', 'They shared an unspoken agreement to avoid the topic.', '他们心照不宣地避开了这个话题。', ['an unspoken rule'], [], 'adjective', '定语', '社交'],
    ['不言而喻的；默契给出的', 'Understood by everybody without needing to be stated.', '所有人都能领会，无需说明。', '定语表语两用，形容理解、支持、承诺、信号。', 'Her support was unspoken but certain.', '她的支持虽未言明，却是确定的。', ['unspoken understanding'], ['implicit'], 'adjective', '定语/表语', '情感'],
  ], '',['speak'], 'brief ←?，按 §5.2 自扫根 speak A1 说话、讲（author_s3.js 第 4 参）；un- 前缀不作成分，取其后词根，「未说出口的、不言而喻的」与 speak 语义直连（否定方向直连可继承），A1 继承（malfunction 模式）；直接成分词 spoken 亦在库且与词根同级（author_s19.js 自扫），无冲突；近义 implicit 含蓄的、不言而喻的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('unstable', 'adjective', '/ʌnˈsteɪbl/', 'B2', [], '不稳定的；易变的', 'Not firm or steady, and likely to change or fall.', [
    ['易变的；不稳定的', 'Changing often and quickly, so that it is hard to predict.', '变化频繁而迅速，难以预料。', '定语表语两用，形容局势、价格、情绪、关系。', 'The government faced an unstable coalition.', '这个政府面对着一个不稳定的联合政府。', ['an unstable situation'], ['fluid', 'volatile'], 'adjective', '定语/表语', '政治'],
    ['不稳固的；易出故障的', 'Not firmly fixed or balanced, so that it may fail.', '没有固定牢，也没有保持平衡，可能出问题。', '定语表语两用，形容结构、椅子、地基。', 'The ladder looked unstable on the soft ground.', '这架梯子放在松软的地面上看着不稳。', ['an unstable structure'], [], 'adjective', '定语/表语', '家居'],
    ['（局势）动荡的；混乱的', 'Full of sudden trouble and public disorder.', '充满突发的麻烦与社会混乱。', '多作定语，形容地区、边界、年代。', 'Unstable borders triggered new conflicts.', '动荡的边界引发了新的冲突。', ['an unstable region'], ['turbulent'], 'adjective', '定语', '社会'],
    ['（原子核、化合物）不稳定的；易分解的', 'Not stable in structure, so that it may break up and give off radiation.', '结构不稳定，可能分解并放出辐射。', '科学语境，多作定语，指同位素与化合物。', 'Unstable isotopes decay quickly.', '不稳定的同位素衰变得很快。', ['unstable isotopes'], ['radioactive'], 'adjective', '定语', '科学'],
  ], '', ['volatile'], 'brief ←?，按 §5.2 自扫根 stable B2 稳定的（author_s8.js 第 4 参）；un- 前缀不作成分，取其后词根，「不稳定的、易变的」与 stable 语义直连（否定方向直连可继承），B2 继承（malfunction 模式）；家族/近义 volatile 易变的、易挥发的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次），近义 fluid 易变的、流动的（置义项 1）、turbulent 动荡的、混乱的（置义项 3）、radioactive 放射性的（置义项 4），均队列原样、各恰好一次');

  W('unsure', 'adjective', '/ˌʌnˈʃʊə/', 'A2', [], '没把握的；没有信心的', 'Not sure about something, or not confident about what to do.', [
    ['不确定的；没把握的', 'Not knowing what is true or what will happen.', '不知道哪件是真的，也不知道会发生什么。', '定语表语两用，常与 about、of 连用，后接名词或 whether 从句。', 'She was unsure about the right answer.', '她对正确答案没有把握。', ['unsure of', 'unsure about'], ['uncertain'], 'adjective', '表语', '通用'],
    ['没有信心的；犹豫的', 'Not confident enough to act or to decide.', '信心不足，无法行动或作出决定。', '多作表语，常与 of oneself 连用。', 'He felt unsure of himself in the new team.', '在新团队里他觉得自己没有底气。', ['feel unsure'], [], 'adjective', '表语', '性格'],
  ], '', ['uncertain'], 'brief ←?，按 §5.2 自扫根 sure A2 确信的、有把握的（author_s4.js 第 4 参）；un- 前缀不作成分，取其后词根，「没把握的、没有信心的」与 sure 语义直连（否定方向直连可继承），A2 继承（malfunction 模式）；家族/近义 uncertain 不确定的、没把握的（队列原样，fam 入第 10 参，syn 置义项 1 恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
