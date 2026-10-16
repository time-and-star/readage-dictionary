/* data/words/cet/author_r4.js — 常用词 R 批次 4，缺口 reactive ~ recording，共 31 条
 * （29 单词 + 2 短语：read out、real estate）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：reality、really、reasonable、rebellion、receipt、recently、receptive、
 * recognition、recording；CET6：reconciliation）。
 * 扫根结论：real A1、reason A2、recent A2、recognize B1、record A2（brief 根提示）；
 * react B1、appear A2、arrange B1、birth A2、rebel B2、receive A2、reception B1、
 * collect A2、reconcile C1、consider A2（本批扫描）——
 * · 透明后缀：reasonable←reason A2 + -able、reasoning←reason A2 + -ing、really←real A1 + -ly、
 *   reactive←react B1 + -ive、recognized←recognize B1 + -ed、recording←record A2 + -ing、
 *   recently←recent A2 + -ly、receipts←receipt 复数单列（随根 A2）。
 * · 同根继承：reality←real A1 + -ity、rebellion←rebel B2 + -ion（rebel 全段可见，l 双写）、
 *   recognition←recognize B1 + -ition（recogni 全段共享，-ize/-ition 同根交替）、
 *   reconciliation←reconcile C1 + -ation（reconcil 全段可见，e→∅+ation）。
 * · re- 前缀取其后词根（前缀不作成分）：reappear←appear A2、rearrange←arrange B1、
 *   rebirth←birth A2、reconsider←consider A2、recollect/recollect+ion←collect A2
 *   （collect 全段可见，「再收集→回忆」语义直连，判断项披露）。
 * · 兄弟派生：receipt←receive A2（recei 词首全段共享，v→pt 拉丁正字）、
 *   receptive←reception B1（recept 词首全段共享，-ive/-ion 同根交替）。
 * · 留空项（无库内可继根）：rebate、rebuke、rebut（re+but 为切词假象，but 非其语义基）、
 *   recap（cap 指拉丁 caput 头，非库内 cap 帽子）、recess、reciprocate、recline（与 lie
 *   无词形对应）、reclusive、recoil（coil 非语义基，切词假象）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r4.js 必须在 _cet_helper.js 之后加载');

  W('reactive', 'adjective', '/riˈæktɪv/', 'B1', [], '反应性的；易反应的', 'Showing a reaction, or responding quickly to stimulus.', [
    ['化学反应性的', 'Able to react chemically with other substances.', '能与其他物质发生化学反应的。', '多作定语。', 'Zinc is more reactive than copper.', '锌比铜更具反应性。', [], [], 'adjective', '定语', '科学'],
    ['易反应的；敏感的', 'Quick to respond to people or events.', '对人或事反应迅速的。', '多作表语，常与 to 连用。', 'Some children are reactive to noise.', '有些孩子对噪音反应敏感。', [], ['sensitive'], 'adjective', '表语', '心理'],
  ], '',['react'], '←react B1 + -ive（透明后缀），B1 继承（brief 显示 ←?，自行扫根 react）；近义 sensitive 敏感的、易反应的');

  W('read out', 'verb', '/riːd ˈaʊt/', '', [], '读出；宣读', 'To read something aloud to an audience.', [
    ['读出；宣读', 'To read something aloud to an audience.', '把某事朗读给听众听。', '及物短语，可分开。', 'The teacher read out the results.', '老师宣读了结果。', [], ['dictate'], 'verb', '及物', '通用'],
  ], '', [], 'read + out；近义 dictate 口述、宣读。短语分级留空').phrase = true;

  W('real estate', 'noun', '/ˈriːəl ɪˈsteɪt/', '', [], '房地产；不动产', 'Property in the form of land and buildings.', [
    ['房地产；不动产', 'Property in the form of land and buildings.', '以土地和建筑物形式存在的财产。', '不可数。', 'She works in real estate.', '她从事房地产行业。', [], ['property'], 'noun', 'uncountable', '金融'],
  ], '', [], 'real + estate；近义 property 财产、房产。短语分级留空').phrase = true;

  W('reality', 'noun', '/riˈæləti/', 'A1', ['CET4'], '现实；事实', 'The state of things as they actually exist.', [
    ['现实；事实', 'The state of things as they actually exist.', '事物实际存在的状态。', '不可数，偶尔可数。', 'The reality was far from the plan.', '现实与计划相去甚远。', [], ['fact', 'truth'], 'noun', 'countable', '通用'],
  ], 'realities',['fact', 'truth', 'real'], '←real A1 + -ity（透明后缀），A1 继承（brief 根提示）；家族 fact 事实、truth 真相，近义同');

  W('really', 'adverb', '/ˈriːəli/', 'A1', ['CET4'], '真正地；确实', 'In fact; truly.', [
    ['真正地；确实', 'In fact; truly.', '事实上；真实地。', '修饰动词或形容词。', 'The film was really good.', '这部电影真的很好。', [], ['indeed', 'real', 'very'], 'adverb', '不及物', '通用'],
  ], '',['indeed', 'real'], '←real A1 + -ly（透明后缀），A1 继承（brief 根提示）；家族 indeed 确实，近 indeed 的确、real 真的、very 非常');

  W('reappear', 'verb', '/ˌriːəˈpɪə/', 'A2', [], '再现；重新出现', 'To appear again.', [
    ['再现；重新出现', 'To appear again.', '再次出现。', '不及物。', 'The pain reappeared after a week.', '疼痛一周后又出现了。', [], ['recur'], 'verb', '不及物', '通用'],
  ], 'reappears~reappeared~reappeared~reappearing',['appear'], 're- 前缀不作成分，取其后词根 appear A2，A2 继承（brief 显示 ←?，自行扫根 appear）；近义 recur 再次发生、重现');

  W('rearrange', 'verb', '/ˌriːəˈreɪndʒ/', 'B1', [], '重新安排；重排', 'To change the position or order of something.', [
    ['重新安排；重排', 'To change the position or order of something.', '改变某物的位置或顺序。', '可及物。', 'They rearranged the furniture.', '他们重新摆放了家具。', [], ['reshuffle'], 'verb', '及物', '通用'],
  ], 'rearranges~rearranged~rearranged~rearranging',['arrange'], 're- 前缀不作成分，取其后词根 arrange B1，B1 继承（brief 显示 ←?，自行扫根 arrange）；近义 reshuffle 重组、改组');

  W('reasonable', 'adjective', '/ˈriːznəbl/', 'A2', ['CET4'], '合理的；公道的', 'Fair and sensible, or of a suitable amount.', [
    ['合理的；公道的', 'Fair and sensible, or of a suitable amount.', '公平而明智的；或数量合适的。', '多作定语或表语。', 'The price seems reasonable.', '这个价格似乎公道。', [], ['fair', 'legitimate', 'moderate', 'rational', 'valid'], 'adjective', '定语/表语', '通用'],
  ], '',['fair', 'legitimate', 'moderate', 'rational', 'reason'], '←reason A2 + -able（透明后缀），A2 继承（brief 显示 ←?，自行扫根 reason）；家族 fair 公平的、legitimate 合法的、moderate 适度的、rational 理性的，近义同 + valid 有效的');

  W('reasoning', 'noun', '/ˈriːzənɪŋ/', 'A2', [], '推理；论证', 'The process of thinking about something in a logical way.', [
    ['推理；论证', 'The process of thinking about something in a logical way.', '以逻辑方式思考某事的过程。', '不可数。', 'His reasoning was easy to follow.', '他的推理易于理解。', [], ['logic'], 'noun', 'uncountable', '通用'],
  ], '',['logic', 'reason'], '←reason A2 + -ing（-ing 名词化），A2 继承（brief 根提示）；家族/近义 logic 逻辑、推理');

  W('rebate', 'noun', '/ˈriːbeɪt/', '', [], '回扣；退款', 'An amount of money that is paid back to you.', [
    ['回扣；退款', 'An amount of money that is paid back to you.', '返还给你的一部分钱。', '可数。', 'Customers receive a ten percent rebate.', '顾客可获得百分之十的回扣。', [], ['refund'], 'noun', 'countable', '商务'],
  ], 'rebates', [], '无库内可见词根（re+beat、re+rate 均为切词假象），留空；近义 refund 退款、退还');

  W('rebellion', 'noun', '/rɪˈbeljən/', 'B2', ['CET4'], '反叛；叛乱', 'An organized attempt to reject a government or ruler.', [
    ['反叛；叛乱', 'An organized attempt to reject a government or ruler.', '有组织地反抗政府或统治者的行为。', '可数或不可数。', 'The rebellion was crushed within a month.', '叛乱一个月内被平定。', [], ['revolt', 'uprising'], 'noun', 'countable', '政治'],
  ], 'rebellions',['uprising', 'rebel'], '←rebel B2 + -ion（rebel 全段可见，l 双写），B2 继承（brief 显示 ←?，自行扫根 rebel）；家族 uprising 起义，近 revolt 叛变、uprising');

  W('rebirth', 'noun', '/ˌriːˈbɜːθ/', 'A2', [], '新生；复兴', 'A new period of growth after a quiet time.', [
    ['新生；复兴', 'A new period of growth or improvement after a quiet time.', '沉寂一段之后的新增长或改善期。', '不可数。', 'The district is experiencing an economic rebirth.', '该区正经历经济复兴。', [], ['renaissance'], 'noun', 'uncountable', '文化'],
  ], '', ['renaissance'], 're- 前缀不作成分，取其后词根 birth A2（「再生」语义直连），A2 继承（brief 显示 ←?，自行扫根 birth）；家族/近义 renaissance 文艺复兴、新生');

  W('rebuke', 'noun/verb', '/rɪˈbjuːk/', '', [], '斥责；指责', 'A sharp expression of disapproval, or to speak sharply.', [
    ['斥责；指责', 'A sharp expression of disapproval.', '强烈表示不赞成的说法。', '可数。', 'His proposal drew a sharp rebuke.', '他的提议遭到了严厉斥责。', [], ['accusation'], 'noun', 'countable', '通用'],
    ['斥责', 'To speak sharply to somebody who has done wrong.', '严厉斥责做错事的人。', '可及物。', 'She rebuked him for his laziness.', '她斥责他懒惰。', [], ['reproach', 'scold'], 'verb', '及物', '通用'],
  ], 'rebukes~rebuked~rebuked~rebuking', ['reproach', 'scold'], '无库内可见词根，留空；家族 reproach 责备、scold 骂，近 accusation 指责、reproach、scold');

  W('rebut', 'verb', '/rɪˈbʌt/', '', [], '反驳；驳回', 'To argue strongly against a statement.', [
    ['反驳；驳回', 'To argue strongly against a statement.', '强烈反驳某主张。', '可及物。', 'The lawyer rebutted the claim.', '律师反驳了该主张。', [], ['refute'], 'verb', '及物', '通用'],
  ], 'rebuts~rebutted~rebutted~rebutting', [], '拉丁 rebattere（撞回）——rebut 中的 but 非语义基（切词假象同 portend 先例），留空；近义 refute 驳斥、反驳');

  W('recap', 'noun/verb', '/ˈriːkæp/', '', [], '要点概述；概述', 'A short summary, or to give one.', [
    ['要点概述', 'A short summary of something.', '某事的简短概述。', '可数。', 'Let me recap the main points.', '让我概括一下要点。', [], ['sum'], 'noun', 'countable', '通用'],
    ['概述', 'To give a summary of something.', '给出某事的概要。', '可及物。', 'She recapped the week in five minutes.', '她用五分钟概述了本周。', [], [], 'verb', '及物', '通用'],
  ], 'recaps~recapped~recapped~recapping', [], 'recap 为 recapitulate 缩略——其中 cap 指拉丁 caput（头），非库内 cap（帽子），切词假象同 portend 先例，留空；近义 sum 汇总、要点');

  W('receipt', 'noun', '/rɪˈsiːt/', 'A2', ['CET4'], '收据；收条', 'A printed record that goods or services have been paid for.', [
    ['收据；收条', 'A printed record that goods or services have been paid for.', '证明货物或服务已付款的打印凭证。', '可数。', 'Keep the receipt for your warranty.', '留着收据作保修凭证。', [], ['acknowledgement', 'voucher'], 'noun', 'countable', '商务'],
  ], 'receipts',['voucher', 'receive'], '←receive A2（兄弟派生，recei 词首全段共享，v→pt 拉丁正字；收据为收款凭据、语义直连），A2 继承（brief 显示 ←?，自行扫根 receive）；家族 voucher 票据，近 acknowledgement 确认、voucher');

  W('receipts', 'noun', '/rɪˈsiːts/', 'A2', [], '进款；收入（复数）', 'Money received, especially over a period of time.', [
    ['进款；收入（复数）', 'Money received, especially over a period of time.', '收到的钱，尤指一段时间内的。', '用作复数。', 'Ticket receipts fell last month.', '上月票款收入下降。', [], ['revenue'], 'noun', 'uncountable', '金融'],
  ], '', ['revenue'], 'receipt 的复数形式单列词条（队列官方派生），CEFR 随根 receipt A2；家族/近义 revenue 收入、收益');

  W('recently', 'adverb', '/ˈriːsntli/', 'A2', ['CET4'], '最近；不久前', 'A short time ago.', [
    ['最近；不久前', 'A short time ago.', '不久之前。', '修饰动词，常与现在完成时连用。', 'I recently started a new job.', '我最近开始了一份新工作。', [], ['lately'], 'adverb', '不及物', '通用'],
  ], '',['lately', 'recent'], '←recent A2 + -ly（透明后缀），A2 继承（brief 根提示）；家族/近义 lately 最近、近来');

  W('receptive', 'adjective', '/rɪˈseptɪv/', 'B1', ['CET4'], '乐于接受的', 'Willing to consider new ideas.', [
    ['乐于接受的', 'Willing to consider new ideas.', '愿意考虑新想法的。', '多作表语，常与 to 连用。', 'She was receptive to the suggestion.', '她愿意接受这个建议。', [], ['passive', 'susceptible'], 'adjective', '表语', '心理'],
  ], '',['reception'], '←reception B1（兄弟派生，recept 词首全段共享，-ive/-ion 同根交替），B1 继承（brief 显示 ←?，自行扫根 reception；receive 同族 A2，取词干更全者 reception）；近义 passive 被动的、susceptible 易受影响的');

  W('recess', 'noun', '/ˈriːses/', '', [], '休会；课间休息', 'A period when work stops, or a short break between lessons.', [
    ['休会；休庭', 'A period when work in a parliament or court stops for a time.', '议会或法庭暂停工作的一段时期。', '可数。', 'Parliament returns from recess in October.', '议会十月复会。', [], ['vacation'], 'noun', 'countable', '政治'],
    ['课间休息', 'A short break between lessons.', '课间的一段短休息。', '可数。', 'The children played outside during recess.', '孩子们课间在外面玩。', [], [], 'noun', 'countable', '教育'],
  ], 'recesses', [], '拉丁 recessus（退处）——无库内可见词根，留空；近义 vacation 假期、休假（队列原样）');

  W('reciprocate', 'verb', '/rɪˈsɪprəkeɪt/', '', [], '互惠；回报', 'To give or do the same thing in return.', [
    ['互惠；回报', 'To give or do the same thing in return.', '以同样的东西回报。', '可及物或不及物。', 'She reciprocated his kindness.', '她回报了他的善意。', [], ['retaliate'], 'verb', '及物', '社交'],
  ], 'reciprocates~reciprocated~reciprocated~reciprocating', [], '拉丁 reciprocus（相互的）——无库内可见词根，留空；近义 retaliate 报复、反击（队列原样）');

  W('recline', 'verb', '/rɪˈklaɪn/', '', [], '斜倚；躺卧', 'To lean back in a relaxed position.', [
    ['斜倚；躺卧', 'To lean back in a relaxed position.', '放松地向后靠。', '不及物。', 'He reclined on the sofa.', '他斜倚在沙发上。', [], ['lie'], 'verb', '不及物', '通用'],
  ], 'reclines~reclined~reclined~reclining', ['lie'], '拉丁 reclinare（向后靠）——与 lie 无词形对应（家族 lie 平躺），留空；近义 lie 躺、平卧');

  W('reclusive', 'adjective', '/rɪˈkluːsɪv/', '', [], '隐居的；不合群的', 'Avoiding other people and living alone.', [
    ['隐居的；不合群的', 'Avoiding other people and living alone.', '避开他人、独居的。', '多作定语。', 'The reclusive author rarely gave interviews.', '那位隐居的作者很少接受采访。', [], ['solitary'], 'adjective', '定语', '性格'],
  ], '', [], '拉丁 reclusus（关闭）——无库内可见词根，留空；近义 solitary 独居的、孤僻的');

  W('recognition', 'noun', '/ˌrekəɡˈnɪʃən/', 'B1', ['CET4'], '认出；承认', 'The act of recognizing somebody or something.', [
    ['认出；承认', 'The act of recognizing somebody or something.', '认出或承认某人某物的行为。', '不可数。', 'The plan gained wide recognition.', '该计划获得了广泛认可。', [], ['acknowledgement'], 'noun', 'uncountable', '通用'],
  ], '',['recognize'], '←recognize B1（recogni 词首全段共享，-ize/-ition 同根交替），B1 继承（brief 显示 ←?，自行扫根 recognize）；近义 acknowledgement 承认、确认');

  W('recognized', 'adjective', '/ˈrekəɡnaɪzd/', 'B1', [], '公认的；被认可的', 'Accepted as being correct or important.', [
    ['公认的；被认可的', 'Accepted as being correct or important.', '被接受为正确或重要的。', '多作定语。', 'She is a recognized expert.', '她是公认的专家。', [], ['acknowledged'], 'adjective', '定语', '通用'],
  ], '',['recognize'], '←recognize B1 + -ed（分词形容词），B1 继承（brief 根提示）；近义 acknowledged 公认的、确认的');

  W('recoil', 'noun/verb', '/rɪˈkɔɪl/', '', [], '后坐力；畏缩', 'The backward movement of a gun, or to shrink back.', [
    ['后坐力', 'The backward movement of a gun when it is fired.', '枪射击时的向后运动。', '可数。', 'The rifle has a heavy recoil.', '这支步枪后坐力大。', [], [], 'noun', 'countable', '军事'],
    ['畏缩；退缩', 'To move back suddenly in fear or disgust.', '因恐惧或厌恶突然退缩。', '不及物。', 'She recoiled at the sight.', '她看到那一幕畏缩了。', [], ['shrink', 'shy'], 'verb', '不及物', '心理'],
  ], 'recoils~recoiled~recoiled~recoiling', ['shrink'], '拉丁 reculare（退后）——coil 非语义基（切词假象同 portend 先例），留空；家族 shrink 收缩、退缩，近 shy 畏缩');

  W('recollect', 'verb', '/ˌrekəˈlekt/', 'A2', [], '回忆起；想起', 'To remember something.', [
    ['回忆起；想起', 'To remember something.', '想起某事。', '可及物。', 'She tried to recollect his name.', '她努力回忆他的名字。', [], ['recall', 'remember'], 'verb', '及物', '心理'],
  ], 'recollects~recollected~recollected~recollecting', ['remember'], 're- 前缀不作成分，取其后词根 collect A2（collect 全段可见，「再收集（想法）→回忆」语义直连，判断项披露），A2 继承（brief 显示 ←?，自行扫根 collect）；家族 remember 记得，近 recall 回忆、remember');

  W('recollection', 'noun', '/ˌrekəˈlekʃn/', 'A2', [], '回忆；记忆', 'Something remembered, or the ability to remember.', [
    ['回忆；记忆', 'Something remembered, or the ability to remember.', '被想起的事；或记忆能力。', '可数或不可数。', 'Her recollection of the event differed from his.', '她对该事件的回忆与他不同。', [], ['memory', 'retrospect'], 'noun', 'countable', '心理'],
  ], 'recollections',['collect'], 're- 前缀不作成分，取其后词根 collect A2（collect 全段可见，同 recollect 判断项），A2 继承（brief 显示 ←?，自行扫根 collect）；近义 memory 记忆、retrospect 回顾');

  W('reconciliation', 'noun', '/ˌrekənsɪliˈeɪʃn/', 'C1', ['CET6'], '和解；调和', 'The process of making two sides friendly again.', [
    ['和解；调和', 'The process of making two sides friendly again after a disagreement.', '双方在分歧后恢复友好的过程。', '不可数或复数。', 'The treaty brought national reconciliation.', '条约带来了民族和解。', [], ['accommodation'], 'noun', 'uncountable', '政治'],
  ], '',['reconcile'], '←reconcile C1 + -ation（reconcil 全段可见，e→∅+ation 同 -ion 类），C1 继承（brief 显示 ←?，自行扫根 reconcile）；近义 accommodation 调解、和解（队列原样）');

  W('reconsider', 'verb', '/ˌriːkənˈsɪdə/', 'A2', [], '重新考虑', 'To think again about a decision or plan.', [
    ['重新考虑', 'To think again about a decision or plan.', '再次思考某决定或计划。', '可及物。', 'The board reconsidered its stance.', '董事会重新考虑了立场。', [], ['review'], 'verb', '及物', '通用'],
  ], 'reconsiders~reconsidered~reconsidered~reconsidering',['consider'], 're- 前缀不作成分，取其后词根 consider A2，A2 继承（brief 显示 ←?，自行扫根 consider）；近义 review 复审、重新审议');

  W('recording', 'noun', '/rɪˈkɔːdɪŋ/', 'A2', ['CET4'], '录制；录音录像', 'A piece of sound or video that has been recorded.', [
    ['录制；录音录像', 'A piece of sound or video that has been recorded.', '录制下来的声音或影像。', '可数。', 'The recording lasted three hours.', '录制持续了三小时。', [], ['tape', 'video'], 'noun', 'countable', '媒体'],
  ], 'recordings',['video', 'record'], '←record A2 + -ing（-ing 名词化），A2 继承（brief 根提示）；家族 video 视频，近 tape 录像带、video');
})(typeof window !== 'undefined' ? window : globalThis);
