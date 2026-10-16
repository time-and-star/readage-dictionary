/* data/words/cet/author_r7.js — 常用词 R 批次 7，缺口 rental agreement ~ resin，共 31 条
 * （30 单词 + 1 短语：rental agreement）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：repayment、repeatedly、repetitive、replacement、representative、
 * requirement、researcher、residence、resident）。
 * 扫根结论：rent B1、repay B2、repeat A2、replace B1、report A2、require B1、research B1、
 * reside C1（brief 根提示）；
 * occupy B2、organize A2、play A1、pot A2、represent B1、process B2、run A1、resent C1、
 * set A1（本批扫描）——
 * · 透明后缀：renter←rent B1 + -er、reorganization←organize A2 + -ation（经 reorganize）、
 *   repayment←repay B2 + -ment、repeated←repeat A2 + -ed、repeatedly←repeat A2 + -ly、
 *   repetitive←repeat A2 + -ive、replacement←replace B1 + -ment、reported←report A2 + -ed、
 *   representative←represent B1 + -ative、required←require B1 + -ed、requirement←require B1 + -ment、
 *   researcher←research B1 + -er、resentful←resent C1 + -ful、residence←reside C1 + -ance、
 *   resident←reside C1 + -ent、residents←resident C1 复数单列（随根）。
 * · re- 前缀取其后词根（前缀不作成分）：reoccupy←occupy B2（「重新占领」直连）、
 *   reorganize←organize A2、replay←play A1（「重赛、重放」直连）、repot←pot A2（「重新栽盆」直连）、
 *   reprocess←process B2（「再加工」直连）、rerun←run A1（形变同 run 不规则 reran/rerun）、
 *   reset←set A1（形变同 set 不规则 reset/reset）。
 * · 留空项（无库内可继根）：repeal（re+peal 切词假象，peal 不在库）、
 *   replica（re+plica 切词假象，plica 非语义基，replicate 亦不在库）、
 *   repository（re+posit 切词假象，posit 不在库）、reprieve（re+rieve 切词假象）、
 *   reprimand（无库内可见词根）、reptile（re+ptile 切词假象）、resin（无库内可见词根）、
 *   rental agreement（短语分级留空）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r7.js 必须在 _cet_helper.js 之后加载');

  W('rental agreement', 'noun', '/ˈrentl əˌɡriːmənt/', '', [], '租约；租赁协议', 'A written agreement that allows somebody to use a house or thing for rent.', [
    ['租约；租赁协议', 'A written agreement that allows somebody to use a house, car, or machine for a fixed period in return for regular payments.', '在固定期限内支付租金、以使用房屋、汽车或机器的书面协议。', '可数，常见于租房、租车场景。', 'They signed a rental agreement for the new flat.', '他们签了新公寓的租约。', [], ['lease'], 'noun', 'countable', '法律'],
  ], '', [], 'rental + agreement；短语分级留空；近义 lease 租约、租用协议').phrase = true;

  W('renter', 'noun', '/ˈrentə/', 'B1', [], '承租人；租房者', 'Somebody who pays rent to use a house, room, or car.', [
    ['承租人；租房者', 'Somebody who pays rent to use a house, room, or car.', '付费租用房屋、房间或汽车的人。', '可数。', 'The renters asked the landlord to fix the heating.', '租客请房东修理暖气。', [], ['tenant'], 'noun', 'countable', '家居'],
  ], 'renters', ['tenant'], 'brief 根提示 ←rent B1 + -er（透明后缀，指人），B1 继承；家族/近义 tenant 租户、房客');

  W('reoccupy', 'verb', '/ˌriːˈɒkjupaɪ/', 'B2', [], '重新占领；重新进驻', 'To take control of a place again after having left it.', [
    ['重新占领；重新进驻', 'To take control of a place again after having left it.', '离开后再次控制某地。', '可及物。', 'The army reoccupied the town within two days.', '军队两天内重新占领了这座城镇。', [], ['resume'], 'verb', '及物', '军事'],
  ], 'reoccupies~reoccupied~reoccupied~reoccupying',['occupy'], 're- 前缀不作成分，取其后词根 occupy B2（「重新占领」语义直连），B2 继承（brief 显示 ←?，自行扫根 occupy）；近义 resume 恢复、重新开始');

  W('reorganization', 'noun', '/ˌriːˌɔːɡənaɪˈzeɪʃn/', 'A2', [], '重组；重新组织', 'The act of organizing something again in a different way.', [
    ['重组；重新组织', 'The act of organizing something again in a different way.', '以不同方式再次组织某事的行为。', '可数或不可数。', 'The reorganization of the company took six months.', '公司的重组花了六个月。', [['reorganization plan', '重组计划']], ['reshuffle'], 'noun', 'uncountable', '商务'],
  ], 'reorganizations',['organize'], '←reorganize（-ation 透明名词后缀）——reorganize 不在库，再取 re- 后词根 organize A2，A2 继承（brief 显示 ←?，自行扫根 organize）；近义 reshuffle（人事）改组、调整');

  W('reorganize', 'verb', '/ˌriːˈɔːɡənaɪz/', 'A2', [], '重组；重新安排', 'To arrange something again in a new or different way.', [
    ['重组；重新安排', 'To arrange something again in a new or different way.', '以新的或不同的方式重新安排某事。', '可及物。', 'We need to reorganize the files by date.', '我们需要按日期重新整理文件。', [], ['reform', 'reshuffle'], 'verb', '及物', '商务'],
  ], 'reorganizes~reorganized~reorganized~reorganizing', ['reshuffle'], 're- 前缀不作成分，取其后词根 organize A2（语义直连），A2 继承（brief 显示 ←?，自行扫根 organize）；家族/近义 reshuffle 改组、reform 改革');

  W('repayment', 'noun', '/riːˈpeɪmənt/', 'B2', ['CET4'], '偿还；偿还的钱', 'Money that is paid back, or the act of paying it back.', [
    ['偿还；偿还的钱', 'Money that is paid back, or the act of paying it back.', '付回去的钱；或付回钱的行为。', '可数或不可数。', 'The loan repayment is due on the first of the month.', '贷款还款在每月一号到期。', [['repayment plan', '还款计划']], ['refund'], 'noun', 'countable', '金融'],
  ], 'repayments', ['refund'], 'brief 根提示 ←repay B2 + -ment（透明名词后缀），B2 继承；家族/近义 refund 退款、退还');

  W('repeal', 'verb', '/rɪˈpiːl/', '', [], '废除；撤销', 'To officially cancel a law, rule, or decision.', [
    ['废除；撤销', 'To officially cancel a law, rule, or decision.', '正式取消一项法律、规定或决定。', '可及物，多指正式立法程序。', 'Parliament voted to repeal the old act.', '议会投票废除了那部旧法案。', [], ['abolish', 'abolition'], 'verb', '及物', '法律'],
  ], 'repeals~repealed~repealed~repealing', [], '拉丁 revocare（召回）——re+peal 切词假象（peal 不在库，非语义基），留空；近义 abolish 废除、abolition 废除（名词）');

  W('repeated', 'adjective', '/rɪˈpiːtɪd/', 'A2', [], '反复的；再三的', 'Happening or done again and again.', [
    ['反复的；再三的', 'Happening or done again and again.', '一次又一次发生的或做的。', '多作定语。', 'She made repeated attempts to contact him.', '她一再设法联系他。', [['repeated attempts', '一再尝试']], ['serial'], 'adjective', '定语', '通用'],
  ], '',['repeat'], 'brief 根提示 ←repeat A2 + -ed（分词形容词），A2 继承；近义 serial 连续的、一连串的');

  W('repeatedly', 'adverb', '/rɪˈpiːtɪdli/', 'A2', ['CET4'], '反复地；再三地', 'Again and again, many times.', [
    ['反复地；再三地', 'Again and again, many times.', '一次又一次，多次地。', '修饰动词。', 'She repeatedly asked the same question.', '她反复问同一个问题。', [], ['over'], 'adverb', '不及物', '通用'],
  ], '',['repeat'], 'brief 显示 ←?，自行扫根 repeat A2（-ly 透明副词后缀），与同根 repeated/repetitive 一致取 A2；近义 over（over and over 反复、再三，队列原样）');

  W('repetitive', 'adjective', '/rɪˈpetətɪv/', 'A2', ['CET4'], '重复单调的', 'Boring because the same thing is done again and again.', [
    ['重复单调的', 'Boring because the same thing is done again and again.', '因同一件事反复做而枯燥乏味。', '多作定语。', 'The job is repetitive but well paid.', '这份工作单调但报酬不错。', [['repetitive tasks', '重复性任务']], ['redundant'], 'adjective', '定语', '职业'],
  ], '',['repeat'], 'brief 显示 ←?，自行扫根 repeat A2（-ive 透明形容词后缀），与同根 repeated/repeatedly 一致取 A2；近义 redundant 冗余的、重复多余的');

  W('replacement', 'noun', '/rɪˈpleɪsmənt/', 'B1', ['CET4'], '替换；替换者', 'Somebody or something that takes the place of another.', [
    ['替换；替换者', 'Somebody or something that takes the place of another, or the act of replacing something.', '取代他人的人或物；或替换的行为。', '可数或不可数。', 'We need a replacement for the broken part.', '我们需要一个替换破损零件。', [['replacement part', '替换零件']], ['spare', 'substitute', 'turnover'], 'noun', 'countable', '商务'],
  ], 'replacements', ['substitute'], 'brief 根提示 ←replace B1 + -ment（透明名词后缀），B1 继承；家族 substitute 替代者，近义 spare 备用品、substitute 替代物、turnover 人员更替');

  W('replay', 'verb/noun', '/ˌriːˈpleɪ/', 'A1', [], '重放；重播', 'To play something again, or a game played again.', [
    ['重放；重播', 'To play a recording, match, or game again.', '再次播放录音录像，或再次比赛。', '可及物，亦作名词。', 'Let me replay that part for you.', '我把那段给你重放一遍。', [['instant replay', '即时回放']], ['repeat'], 'verb', '及物', '媒体'],
  ], 'replays~replayed~replayed~replaying',['play'], 're- 前缀不作成分，取其后词根 play A1（「重赛、重放」语义直连），A1 继承（brief 显示 ←?，自行扫根 play）；近义 repeat 重复、重播');

  W('replica', 'noun', '/rɪˈplɪkə/', '', [], '复制品；仿制品', 'An accurate copy of something made by a skilled person.', [
    ['复制品；仿制品', 'An accurate copy of something made by a skilled person.', '由技艺熟练者制作的精确复制品。', '可数。', 'The museum bought a replica of the statue.', '博物馆买了一尊雕像的复制品。', [['full-size replica', '全尺寸复制品']], ['clone', 'model'], 'noun', 'countable', '艺术'],
  ], 'replicas', ['clone'], '拉丁 replicare（折回）——re+plica 切词假象（plica 非语义基，replicate 亦不在库），留空；家族/近义 clone 克隆体、model 模型、样板');

  W('reported', 'adjective', '/rɪˈpɔːtɪd/', 'A2', [], '据报道的；传闻的', 'Known through a report rather than seen directly.', [
    ['据报道的；传闻的', 'Known through a report rather than seen directly.', '经由报道得知而非亲眼所见。', '多作定语。', 'The reported cost of the project is still unclear.', '据报的项目成本仍不清楚。', [], ['second-hand'], 'adjective', '定语', '媒体'],
  ], '',['report'], 'brief 根提示 ←report A2 + -ed（分词形容词），A2 继承；近义 second-hand 二手的、间接得来的（队列原样）');

  W('repository', 'noun', '/rɪˈpɒzɪtri/', '', [], '储藏处；资料库', 'A place or system where a large collection of things is kept.', [
    ['储藏处；资料库', 'A place or system where a large collection of things is kept.', '存放大量物品的地方或系统。', '可数，常与 of 连用。', 'The archive serves as a repository of old maps.', '这个档案馆是旧地图的储藏地。', [['data repository', '数据库']], ['library'], 'noun', 'countable', '书面'],
  ], 'repositories', [], '拉丁 reponere（存放）——re+pository 切词假象（posit 不在库，非语义基），留空；近义 library 图书馆、资料库');

  W('repot', 'verb', '/ˌriːˈpɒt/', 'A2', [], '给…换盆', 'To move a plant into a bigger pot with fresh soil.', [
    ['给…换盆', 'To move a plant into a bigger pot with fresh soil.', '把植物移入更大的盆并换上新土。', '可及物。', 'She repotted the seedlings in spring.', '她春天给幼苗换了盆。', [], ['pot'], 'verb', '及物', '农业'],
  ], 'repots~repotted~repotted~repotting',['pot'], 're- 前缀不作成分，取其后词根 pot A2（「重新栽入盆中」语义直连，pot 在库含「把植物栽入盆中」义），A2 继承（brief 显示 ←?，自行扫根 pot）；近义 pot 盆、罐（队列原样）；双写 t：repot→repotted');

  W('representative', 'noun/adjective', '/ˌreprɪˈzentətɪv/', 'B1', ['CET4'], '代表；典型的', 'Somebody who represents a group, or typical of a group.', [
    ['代表；代理人', 'Somebody chosen or employed to speak or act for a group or organization.', '被选出或受雇代表某群体或组织发言行事的人。', '可数，常与 of 连用。', 'She is a sales representative for the region.', '她是该地区的销售代表。', [['sales representative', '销售代表']], ['agent', 'delegate', 'exponent', 'member', 'spokesman'], 'noun', 'countable', '职业'],
    ['典型的；有代表性的', 'Typical of a group, or able to show what the group is like.', '某群体典型的；能代表该群体的。', '可作定语或表语。', 'This is a representative sample of the voters.', '这是选民的典型样本。', [['representative sample', '代表性样本']], ['typical'], 'adjective', '定语/表语', '科学'],
  ], 'representatives', ['delegate', 'exponent', 'typical'], 'brief 显示 ←?，自行扫根 represent B1（-ative 透明形容词/名词后缀），B1 继承；家族 delegate 代表、委派，exponent 阐述者、倡导者，typical 典型的；近义 agent 代理人、member 成员、spokesman 发言人（名词义项），typical 典型的（形容词义项），队列原样');

  W('reprieve', 'noun/verb', '/rɪˈpriːv/', '', [], '缓刑；暂缓处刑', 'An order to delay or cancel a punishment, or to give such an order.', [
    ['缓刑；暂缓处刑', 'An official order that delays or cancels a punishment.', '延后或取消惩罚的正式命令。', '可数或不可数，法律用语。', 'The prisoner was granted a reprieve.', '这名囚犯获得了缓刑。', [], ['pardon'], 'noun', 'countable', '法律'],
    ['暂缓处刑；缓期执行', 'To delay or cancel an official punishment.', '延后或取消正式的惩罚。', '可及物。', 'The governor reprieved the prisoner.', '州长暂缓处刑了这名囚犯。', [], [], 'verb', '及物', '法律'],
  ], 'reprieves~reprieved~reprieved~reprieving', [], '法语 repris（取回）——re+rieve 切词假象（rieve 非库内语义基），留空；近义 pardon 原谅、赦免（队列原样，名词义项）');

  W('reprimand', 'noun/verb', '/ˌreprɪˈmɑːnd/', '', [], '申斥；训斥', 'To tell somebody officially that they have done wrong, or such a remark.', [
    ['申斥；训斥', 'To tell somebody officially that they have done something wrong.', '正式告知某人其行为不当。', '可及物，亦可作名词。', 'The officer was reprimanded for being late.', '这名军官因迟到受到训斥。', [['public reprimand', '公开申斥']], ['lecture'], 'verb', '及物', '职业'],
    ['申斥的话；训斥', 'A formal statement of disapproval for something somebody has done.', '对某人所作所为的正式批评。', '可数或不可数。', 'He received a stern reprimand from the manager.', '他受到了经理严厉的训斥。', [], ['lecture'], 'noun', 'countable', '职业'],
  ], 'reprimands~reprimanded~reprimanded~reprimanding', [], '拉丁 reprimandere（压回）——re+primand 切词假象（primand 非库内语义基），留空；近义 lecture 训斥、责备（队列原样）');

  W('reprocess', 'verb', '/ˌriːˈprəʊses/', 'B2', [], '回收处理；再加工', 'To treat a used material again so it can be used a second time.', [
    ['回收处理；再加工', 'To treat a used material again so it can be used a second time.', '再次处理使用过的材料，使其能被再度利用。', '可及物。', 'The plant reprocesses waste paper into new cards.', '这家工厂把废纸再加工成新卡纸。', [['reprocess waste', '再处理废弃物']], ['recycle'], 'verb', '及物', '工业'],
  ], 'reprocesses~reprocessed~reprocessed~reprocessing', ['recycle'], 're- 前缀不作成分，取其后词根 process B2（「再加工」语义直连），B2 继承（brief 显示 ←?，自行扫根 process）；家族/近义 recycle 回收利用');

  W('reptile', 'noun', '/ˈreptaɪl/', '', [], '爬行动物', 'An animal such as a snake or crocodile with cold blood and scaly skin.', [
    ['爬行动物', 'An animal such as a snake or crocodile that has cold blood and skin covered in scales.', '蛇或鳄鱼等冷血、体表覆鳞的动物。', '可数。', 'Crocodiles are reptiles.', '鳄鱼是爬行动物。', [['cold-blooded reptile', '冷血爬行动物']], ['crocodile', 'dinosaur'], 'noun', 'countable', '自然'],
  ], 'reptiles', ['crocodile', 'dinosaur'], '拉丁 repere（爬行）——re+ptile 切词假象（ptile 非库内语义基），留空；家族/近义 crocodile 鳄鱼、dinosaur 恐龙（队列原样）');

  W('required', 'adjective', '/rɪˈkwaɪəd/', 'B1', [], '必需的；被要求的', 'Needed by a rule or by a particular situation.', [
    ['必需的；被要求的', 'Needed by a rule or by a particular situation.', '为规则或特定情形所必需。', '多作定语。', 'Applicants must have the required experience.', '申请者必须具备要求的经验。', [['required reading', '必读书目']], ['compulsory', 'prerequisite'], 'adjective', '定语', '教育'],
  ], '', ['compulsory'], 'brief 根提示 ←require B1 + -ed（分词形容词），B1 继承；家族 compulsory 必修的、义务的，近 compulsory、prerequisite 先决条件、必备条件');

  W('requirement', 'noun', '/rɪˈkwaɪəmənt/', 'B1', ['CET4'], '要求；必要条件', 'Something that you need or must have.', [
    ['要求；必要条件', 'Something that you need or must have.', '你需要或必须具备的东西。', '可数。', 'The job has strict entry requirements.', '这份工作有严格的入职要求。', [['entry requirements', '入门要求']], ['condition', 'necessity', 'need', 'prerequisite'], 'noun', 'countable', '教育'],
  ], 'requirements', ['prerequisite'], 'brief 根提示 ←require B1 + -ment（透明名词后缀），B1 继承；家族 prerequisite 先决条件，近 condition 条件、necessity 必需品、need 需要、prerequisite 必备条件');

  W('rerun', 'verb/noun', '/ˌriːˈrʌn/', 'A1', [], '重跑；重播', 'To run something again, or a repeat of a broadcast.', [
    ['重跑；重播', 'To run or operate something again, or a broadcast shown again.', '再次运行某事；或再次播出的节目。', '可及物，亦作名词。', 'They reran the test twice.', '他们把试验重做了两次。', [['rerun of the show', '节目的重播']], ['repeat'], 'verb', '及物', '媒体'],
  ], 'reruns~reran~rerun~rerunning',['run'], 're- 前缀不作成分，取其后词根 run A1（「重跑」语义直连），A1 继承（brief 显示 ←?，自行扫根 run）；形变同 run 不规则（reran/rerun）；近义 repeat 重复、重播');

  W('researcher', 'noun', '/rɪˈsɜːtʃə/', 'B1', ['CET4'], '研究人员', 'Somebody who studies a subject to discover new facts.', [
    ['研究人员', 'Somebody who studies a subject in order to discover new facts.', '为发现新事实而研究某课题的人。', '可数。', 'A team of researchers tested the theory.', '一组研究人员检验了这个理论。', [['senior researcher', '高级研究员']], ['student'], 'noun', 'countable', '教育'],
  ], 'researchers',['research'], 'brief 根提示 ←research B1 + -er（透明后缀，指人），B1 继承；近义 student 学生（队列原样，指学习研究者）');

  W('resentful', 'adjective', '/rɪˈzentfl/', 'C1', [], '愤恨的；感到愤慨的', 'Feeling angry because of unfair treatment.', [
    ['愤恨的；愤慨的', 'Feeling angry because of unfair treatment.', '因受到不公对待而愤怒。', '多作表语，常与 about、towards 连用。', 'She was resentful of his success.', '她对他的成功心怀愤恨。', [], ['bitter', 'indignant'], 'adjective', '表语', '情感'],
  ], '',['resent'], '←resent C1 + -ful（透明形容词后缀），C1 继承（brief 显示 ←?，自行扫根 resent）；近义 bitter 苦涩怨恨的、indignant 愤慨的');

  W('reset', 'verb/noun', '/ˌriːˈset/', 'A1', [], '重设；重新设置', 'To set something again to an original or new value.', [
    ['重设；重新设置', 'To set something again to an original or new value or position.', '把某物重新设为原值或新值、原位。', '可及物，亦作名词。', 'Reset the router and try again.', '把路由器重置后再试一次。', [['factory reset', '恢复出厂设置']], ['zero'], 'verb', '及物', '工具'],
  ], 'resets~reset~reset~resetting',['set'], 're- 前缀不作成分，取其后词根 set A1（「重新设置」语义直连），A1 继承（brief 显示 ←?，自行扫根 set）；形变同 set 不规则（reset/reset）；近义 zero 清零、归零（队列原样）');

  W('residence', 'noun', '/ˈrezɪdəns/', 'C1', ['CET4'], '住所；宅邸', 'A place where somebody lives, especially a large or grand house.', [
    ['住所；宅邸', 'A place where somebody lives, especially a large or grand house.', '某人居住的地方，尤指大宅或华宅。', '可数，较正式。', 'The ambassador moved into the official residence.', '大使搬进了官邸。', [['place of residence', '居住地']], ['home', 'mansion', 'palace'], 'noun', 'countable', '家居'],
  ], 'residences', ['home'], 'brief 根提示 ←reside C1 + -ance（透明名词后缀），C1 继承；家族 home 家，近 home 家、mansion 豪宅、palace 宫殿');

  W('resident', 'noun', '/ˈrezɪdənt/', 'C1', ['CET4'], '居民；住户', 'Somebody who lives in a particular place permanently or for a long time.', [
    ['居民；住户', 'Somebody who lives in a particular place for a long time.', '长期居住在某地的人。', '可数，常与 of 连用。', 'Local residents opposed the plan.', '当地居民反对这项计划。', [['resident of the city', '本市居民']], ['citizen', 'inmate', 'local', 'neighbor'], 'noun', 'countable', '社会'],
  ], 'residents', ['citizen', 'inmate', 'local', 'neighbor'], 'brief 显示 ←?，自行扫根 reside C1（-ent 透明后缀，指人），C1 继承；家族 citizen 公民、inmate 同住者、local 当地人、neighbor 邻居，近义同（队列原样）');

  W('residents', 'noun', '/ˈrezɪdənts/', 'C1', [], '居民们', 'The people who live in a particular place.', [
    ['居民们', 'All the people who live in a particular place or building.', '住在某地或某栋楼里的所有人。', '用作复数，指全体居民。', 'The residents of the street signed a petition.', '这条街的居民联名签了请愿书。', [], ['population'], 'noun', 'countable', '社会'],
  ], '',['resident'], 'resident 的复数形式单列词条（队列官方派生），CEFR 随根 resident C1（brief 显示 ←?，本批扫根 reside→resident 链）；近义 population 人口、居民总数（队列原样）');

  W('resin', 'noun', '/ˈrezɪn/', '', [], '树脂', 'A sticky solid substance produced by some trees, used in making plastics.', [
    ['树脂', 'A sticky solid substance that comes from some trees and is used to make plastics and varnish.', '某些树分泌的黏稠固体物质，用于制造塑料和清漆。', '可数或不可数。', 'The bowl was coated with clear resin.', '这只碗涂了一层透明树脂。', [], ['gum'], 'noun', 'uncountable', '工业'],
  ], 'resins', [], '拉丁 resina（树脂）——无库内可见词根，留空；近义 gum 树胶、树脂（队列原样）');
})(typeof window !== 'undefined' ? window : globalThis);
