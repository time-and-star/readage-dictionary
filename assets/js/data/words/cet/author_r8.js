/* data/words/cet/author_r8.js — 常用词 R 批次 8，缺口 resistance ~ revere，共 31 条
 * （29 单词 + 2 短语：rest on、result in）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：resistance、resistant、resolute、resolution、respectable、response、
 * responsibility、responsive、resultant、retailer、revelation；CET6：retaliation）。
 * 扫根结论：resist B2、resource B1、retail B2、retire B1（brief 根提示）；
 * sit A1、resolve B2、sound A1、respect B1、respond B1、responsible B1、start A1、rest A2、
 * result A2、take A1、retaliate C1、use A1、reveal B2（本批扫描）——
 * · 透明后缀：resistance←resist B2 + -ance、resistant←resist B2 + -ant、
 *   respectable←respect B1 + -able、response←respond B1 + -se、
 *   responsibility←responsible B1 + -ity、responsive←respond B1 + -ive、
 *   resultant←result A2 + -ant、retaliation←retaliate C1 + -ation、
 *   revelation←reveal B2 + -ation（与同批 revel「纵情欢乐」无关，判断项披露）。
 * · 同根一致：resistance/resistant 同←resist B2；resolute/resolution 同←resolve B2（兄弟派生，
 *   resolve 全段可见，「resolute 中 solve 类切词须 resolve 在库」条件满足，判断项披露）；
 *   response/responsive/responsibility 同←respond/responsible B1；resources（复数单列）随 resource B1。
 * · re- 前缀取其后词根（前缀不作成分）：resit←sit A1（sit an exam 直连）、
 *   restart←start A1、retake←take A1（形变同 take 不规则 retook/retaken）、reuse←use A1（规则先例）、
 *   resound←sound A1（声音再次响起→回响，判断项披露）。
 * · 复合词取库内首成分：restroom←rest A2（原义 rest room「休息室」，今转指公共洗手间，
 *   语义迁移判断项披露；room 为第二成分不取）。
 * · 留空项（无库内可继根）：resonance、resonate（resonate 不在库，sound 仅词义相关非构词成分）、
 *   resuscitate（re+suscitate 无库内成分）、retch、retract（re+tract 切词假象：库内 tract 为
 *   「地带/管道/传单」义，非「拉回」语义基）、revamp（vamp 不在库）、revel、
 *   reverberation（reverberate 不在库）、revere；短语 rest on、result in 规则留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r8.js 必须在 _cet_helper.js 之后加载');

  W('resistance', 'noun', '/rɪˈzɪstəns/', 'B2', ['CET4'], '抵抗；阻力', 'The act of resisting, or a force that prevents movement or change.', [
    ['抵抗；抵制', 'The act of opposing something or refusing to accept it.', '反对某事或拒绝接受的行为。', '不可数，常与 to 连用。', 'The new tax met with strong resistance from voters.', '这项新税遭到了选民的强烈抵制。', ['resistance to change'], ['friction'], 'noun', 'uncountable', '政治'],
    ['阻力；抵抗力', 'A force or quality that slows something down or stops it working.', '使某物减速或停止起作用的力或特性。', '可数或不可数。', 'The wax reduces air resistance on the surface.', '这层蜡降低了表面的空气阻力。', ['build up a resistance'], [], 'noun', 'uncountable', '科学'],
  ], 'resistances', ['friction'], 'brief 根提示 ←resist B2 + -ance（透明名词后缀），B2 继承；家族/近义 friction 摩擦、摩擦力（队列原样）');

  W('resistant', 'adjective', '/rɪˈzɪstənt/', 'B2', ['CET4'], '抵抗的；有抵抗力的', 'Able to resist something, or inclined to resist.', [
    ['有抵抗力的；抗…的', 'Able to remain unaffected by something such as a chemical, a disease, or pressure.', '能不受化学物质、疾病或压力等影响的。', '常与 to 连用，多作定语或表语。', 'These plants are resistant to frost.', '这些植物耐霜冻。', ['resistant to change'], ['hardy', 'immune', 'proof'], 'adjective', '定语/表语', '健康'],
  ], '',['immune', 'proof', 'resist'], '←resist B2 + -ant（透明形容词后缀，「抵抗」语义直连），B2 继承（brief 显示 ←?，本批扫描 resist B2 在库，与同批 resistance 同根一致）；家族 immune 免疫的、proof 防…的，近 hardy 能耐受的、immune、proof（队列原样）');

  W('resit', 'verb/noun', '/ˌriːˈsɪt/', 'A1', [], '重考；补考', 'To take an exam again after failing it.', [
    ['重考；补考', 'To take an examination again, usually because you failed it the first time.', '（通常因首次未通过而）再次参加考试。', '英式英语，可及物。', 'She has to resit the maths exam in June.', '她得在六月重考数学。', ['resit an exam'], ['makeup'], 'verb', '及物', '教育'],
  ], 'resits~resat~resat~resitting',['sit'], 're- 前缀不作成分，取其后词根 sit A1（sit an exam→resit an exam 语义直连），A1 继承（brief 显示 ←?，本批扫描 sit A1 在库）；近义 makeup 补考（makeup exam，队列原样）');

  W('resolute', 'adjective', '/ˈrezəluːt/', 'B2', ['CET4'], '坚决的；果断的', 'Firm and determined, and not likely to give up.', [
    ['坚决的；果断的', 'Firm and determined in doing something, especially when facing difficulty.', '做某事坚定不移，尤指面对困难时。', '多作定语或表语。', 'She remained resolute in her decision to leave.', '她去意已决，毫不动摇。', ['a resolute refusal'], ['firm', 'grim', 'stout'], 'adjective', '定语/表语', '性格'],
  ], '',['firm', 'resolve'], '←resolve B2（兄弟派生：resolve 全段可见，resolute 为其分词形转入形容词，「下决心」→「坚决的」语义直连；re+solute 中 solve 非独立成分，须 resolve 在库方可用，本批扫描 resolve B2 在库，判断项披露），B2 继承（brief 显示 ←?）；家族 firm 坚定的，近 firm、grim 严酷而不屈的、stout 不屈不挠的（队列原样）');

  W('resolution', 'noun', '/ˌrezəˈluːʃn/', 'B2', ['CET4'], '决心；决议；分辨率', 'A firm decision to do something, an official decision, or the level of detail in an image.', [
    ['决心；坚定的决心', 'A firm decision to do or achieve something.', '做或达成某事的坚定决定。', '可数，常与 to do 连用。', 'She made a resolution to exercise every day.', '她下定决心每天锻炼。', ['make a resolution'], [], 'noun', 'countable', '心理'],
    ['决议；决议案', 'An official decision made by a group or a meeting.', '团体或会议作出的正式决定。', '可数。', 'The council passed a resolution on housing.', '议会通过了一项住房决议。', ['pass a resolution'], ['motion'], 'noun', 'countable', '政治'],
    ['分辨率', 'The level of detail in an image, measured by the number of pixels.', '图像细节的清晰程度，以像素数量衡量。', '不可数。', 'The photo has a high resolution.', '这张照片分辨率很高。', ['high resolution'], [], 'noun', 'uncountable', '媒体'],
  ], 'resolutions',['resolve'], '←resolve B2 + -ution（兄弟派生，resolve 全段可见，「作出决定」→「决心、决议」语义直连），B2 继承（brief 显示 ←?，本批扫描 resolve B2 在库，与同批 resolute 同根一致）；近义 motion 议会动议（「决议」义，队列原样）');

  W('resonance', 'noun', '/ˈrezənəns/', '', [], '共鸣；回响', 'A deep ringing sound, or a quality that evokes a strong response.', [
    ['共鸣；回响', 'A strong sound that seems to continue after the original sound has stopped, or a quality that touches people deeply.', '原声停止后似乎仍在持续的洪亮回响；或深深打动人心的特质。', '可数或不可数，常与 with 连用。', 'The hall is famous for its resonance.', '这个大厅以其共鸣回响效果闻名。', ['resonance with the audience'], ['echo'], 'noun', 'uncountable', '科学'],
  ], 'resonances', ['echo'], '拉丁 resonantia——resonate 不在库，无库内可继构词根（echo 为家族词而非词根），留空；家族/近义 echo 回声、回响（队列原样）');

  W('resonate', 'verb', '/ˈrezəneɪt/', '', [], '引起共鸣；回响', 'To produce a deep sound, or to make people feel a strong connection.', [
    ['引起共鸣', 'To make people feel that something is important or true.', '使人们觉得某事重要或真实。', '不及物，常与 with 连用。', 'Her speech resonated with the crowd.', '她的演讲引起了人群的共鸣。', ['resonate with readers'], [], 'verb', '不及物', '心理'],
    ['回响；震荡', 'To produce a sound that seems to continue after the original sound has stopped.', '发出似乎在原声停止后仍持续的声音。', '不及物，常与 with 连用。', 'The bells resonated across the valley.', '钟声在山谷间回荡。', ['resonate through the hall'], ['vibrate'], 'verb', '不及物', '科学'],
  ], 'resonates~resonated~resonated~resonating', [], '拉丁 resonare——无库内可继构词根（sound 仅词义相关而非构词成分，判断项披露），留空；近义 vibrate 震动、颤动（「回响」义，队列原样）');

  W('resound', 'verb', '/rɪˈzaʊnd/', 'A1', [], '回响；鸣响', 'To produce a loud, deep sound that carries far, or to be very well known.', [
    ['回响；鸣响', 'To make a loud, deep sound that seems to carry a long way.', '发出洪亮、低沉且传得很远的声音。', '不及物，常与 with 连用。', 'The church bells resounded over the town.', '教堂的钟声在小镇上空回响。', ['resound with laughter'], ['echo'], 'verb', '不及物', '通用'],
    ['广为传颂；名噪', 'To be known by many people because of a great success.', '因巨大成功而广为人知。', '不及物，常与 with 连用。', 'His name resounded through the arenas.', '他的名字在各大赛场传颂。', ['resound with success'], [], 'verb', '不及物', '通用'],
  ], 'resounds~resounded~resounded~resounding',['sound'], 're- 前缀不作成分，取其后词根 sound A1（声音再次响起→回响，语义直连，判断项披露），A1 继承（brief 显示 ←?，本批扫描 sound A1 在库）；近义 echo 回响、反响（队列原样）');

  W('resources', 'noun', '/rɪˈsɔːsɪz/', 'B1', [], '资源；财力', 'Things such as money, materials, and staff that a person or organization can use.', [
    ['资源；物力', 'Things such as money, materials, time, and people that can be used to achieve a goal.', '可用于实现目标的资金、材料、时间和人力等。', '复数形式单列词条。', 'The school lacks the resources to buy new computers.', '这所学校缺少购买新电脑的资源。', ['natural resources'], [], 'noun', 'countable', '商务'],
    ['财力；资金', 'The money and assets that a person or organization has available.', '个人或机构可动用的资金与资产。', '常用复数。', 'We need to use the company resources more carefully.', '我们需要更谨慎地动用公司财力。', ['financial resources'], ['finance', 'means'], 'noun', 'countable', '金融'],
  ],'resources',['resource'], 'brief 根提示 ←resource B1 noun（复数单列词条，随根 B1）；近义 finance 资金、means 资财手段（「财力」义，队列原样）');

  W('respectable', 'adjective', '/rɪˈspektəbl/', 'B1', ['CET4'], '体面的；相当不错的', 'Socially acceptable, and of a reasonably good standard.', [
    ['体面的；正派的', 'Behaving in a way that most people consider morally acceptable.', '行为举止为多数人认可合乎道德。', '多作定语或表语。', 'He comes from a respectable family.', '他出身于正派人家。', ['a respectable distance'], ['decent', 'worthy'], 'adjective', '定语/表语', '性格'],
    ['相当可观的；不错的', 'Fairly large, good, or acceptable in quality.', '数量较大、质量尚可的。', '多作定语。', 'She earns a respectable salary.', '她挣着一份相当可观的薪水。', ['a respectable score'], [], 'adjective', '定语', '商务'],
  ], '',['worthy', 'respect'], '←respect B1 + -able（透明形容词后缀，「值得尊敬的」语义直连），B1 继承（brief 显示 ←?，本批扫描 respect B1 在库）；家族 worthy 值得的、可敬的，近 decent 体面的、worthy（队列原样）');

  W('response', 'noun', '/rɪˈspɒns/', 'B1', ['CET4'], '反应；回复', 'A reaction to something, or an answer that you give.', [
    ['反应；响应', 'Something that happens as a reaction to something else.', '作为对另一事物的反应而发生的事。', '可数或不可数，常与 to 连用。', 'The medicine produced a good response.', '这种药物产生了良好的反应。', ['in response to'], ['feedback', 'reception'], 'noun', 'uncountable', '健康'],
    ['回复；答复', 'An answer that you give to someone, by letter, speech, or action.', '以信件、言语或行动给出的回答。', '可数或不可数。', 'I received no response to my email.', '我的电子邮件没有收到回复。', ['a prompt response'], ['reply'], 'noun', 'countable', '通用'],
  ], 'responses',['feedback', 'reception', 'respond'], '←respond B1（respond 去 d 加 se 的名词化变体，全段可见，「回应」语义直连），B1 继承（brief 显示 ←?，本批扫描 respond B1 在库）；家族 feedback 反馈、reception 接待，近 feedback、reception 反应、reply 答复（队列原样）');

  W('responsibility', 'noun', '/rɪˌspɒnsəˈbɪləti/', 'B1', ['CET4'], '责任；职责', 'A duty to deal with something, or blame for something that goes wrong.', [
    ['职责；义务', 'A duty or task that you are required to do.', '被要求履行的责任或任务。', '可数，常与 for doing 连用。', 'Her main responsibility is training new staff.', '她的主要职责是培训新员工。', ['take responsibility for'], ['duty', 'portfolio'], 'noun', 'countable', '职业'],
    ['责任；过失', 'Blame for something bad that happens.', '对发生的坏事应承担的责备。', '不可数，常与 for 连用。', 'The company accepted responsibility for the leak.', '公司接受了对这次泄漏的责任。', ['accept responsibility'], ['blame'], 'noun', 'uncountable', '法律'],
    ['问责；责任担当', 'The duty of a person or group to explain their actions and accept blame for them.', '个人或团体为自身行为作出解释并接受追究的义务。', '不可数。', 'Ministers must answer for their decisions.', '大臣们必须为自己的决定负责。', ['hold to account'], ['accountability'], 'noun', 'uncountable', '政治'],
  ], 'responsibilities',['responsible'], '←responsible B1 + -ity（透明名词后缀），B1 继承（brief 显示 ←?，本批扫描 responsible B1 在库；与同批 response、responsive 同族根一致）；近义 duty 职责、portfolio 职责范围（「职责」义），blame 过失责怪（「责任」义），accountability 问责（「问责」义），均照抄队列各出现一次');

  W('responsive', 'adjective', '/rɪˈspɒnsɪv/', 'B1', ['CET4'], '反应积极的；响应迅速的', 'Reacting quickly and positively to something.', [
    ['反应积极的；响应迅速的', 'Reacting quickly and in a positive way to someone or something.', '对某人或某事迅速作出积极反应。', '常与 to 连用。', 'The software is responsive even on slow devices.', '即使在慢速设备上这款软件反应也很灵敏。', ['responsive design'], [], 'adjective', '定语/表语', '媒体'],
    ['（治疗）有效的', 'Giving a good effect when a treatment is used.', '使用某种治疗后产生良好效果。', '常与 to 连用，多作表语。', 'The tumor was responsive to the new drug.', '肿瘤对新药有反应。', ['responsive to treatment'], [], 'adjective', '表语', '健康'],
  ], '',['sensitive', 'respond'], '←respond B1 + -ive（透明形容词后缀，「回应」语义直连），B1 继承（brief 显示 ←?，本批扫描 respond B1 在库；与同批 response 同族根一致）；家族 sensitive 敏感的；队列 syn 为空，近义数组写 []');

  W('rest on', 'verb', '/rest ɒn/', '', [], '取决于；靠在', 'To depend on something, or to be placed on something.', [
    ['取决于；依靠', 'To depend on something in order to be decided or be true.', '某事有待另一事才能确定或成立。', '及物短语，常与 on 连用。', 'The final decision rests on the committee.', '最终决定取决于委员会。', ['rest on its merits'], ['hinge'], 'verb', '及物', '通用'],
    ['靠在；置于…之上', 'To be placed on something so that it is supported.', '放置在某物之上并由其支撑。', '及物短语。', 'The old frame rests on the top shelf.', '旧画框搁在最上层的架子上。', ['rest on the table'], [], 'verb', '及物', '家居'],
  ],'rests on~rested on~resting on', [], 'rest + on；短语分级留空（brief 未给根，规则短语留空）；近义 hinge 取决于（hinge on 与 rest on 同义，队列原样，以短语形式出现）').phrase = true;

  W('restart', 'verb/noun', '/ˌriːˈstɑːt/', 'A1', [], '重新开始；重启', 'To start something again, or to begin again.', [
    ['重新开始', 'To begin doing something again after stopping.', '停止后再次开始做某事。', '可及物或不及物。', 'We will restart the talks on Monday.', '我们将于周一重启会谈。', ['restart the process'], ['resume'], 'verb', '及物', '通用'],
    ['重启；重新启动', 'To make a computer or machine start working again.', '使计算机或机器再次开始运行。', '可及物。', 'Try restarting the phone.', '试着重启手机。', ['restart the computer'], [], 'verb', '及物', '工具'],
  ], 'restarts~restarted~restarted~restarting', ['resume'], 're- 前缀不作成分，取其后词根 start A1（语义直连），A1 继承（brief 显示 ←?，本批扫描 start A1 在库）；家族/近义 resume 重新开始、继续（队列原样）');

  W('restroom', 'noun', '/ˈrestruːm/', 'A2', [], '公共洗手间；厕所', 'A room in a public place with a toilet and a washbasin.', [
    ['公共洗手间；厕所', 'A room in a shop, office, or other public place that has a toilet and a washbasin.', '商店、办公室等公共场所内设有马桶和洗手池的房间。', '可数，美式英语。', 'Where is the nearest restroom?', '最近的洗手间在哪里？', ['restroom sign'], ['bathroom', 'lady', 'lavatory', 'toilet'], 'noun', 'countable', '家居'],
  ], 'restrooms', ['lavatory'], '复合词取库内首成分 rest A2（restroom 源自 rest room「休息室」，今转指公共洗手间，语义迁移判断项披露；room 为第二成分不取），A2 继承（brief 显示 ←?，本批扫描 rest A2 在库）；家族 lavatory 厕所，近 bathroom、lady（ladies room 女洗手间的关联，队列原样）、lavatory、toilet');

  W('result in', 'verb', '/rɪˈzʌlt ɪn/', '', [], '导致；致使', 'To make something happen as a result.', [
    ['导致；致使', 'To cause something to happen.', '使某事发生。', '及物短语，后接名词。', 'The delay resulted in a longer commute.', '这次延误导致通勤时间变长。', ['result in injury'], ['culminate', 'lead'], 'verb', '及物', '通用'],
  ], '', ['culminate'], 'result + in；短语分级留空（brief 未给根，规则短语留空）；家族 culminate 达到顶点（队列 fam 照抄），近 culminate（culminate in 以…告终）、lead 导致（lead to），队列原样').phrase = true;

  W('resultant', 'adjective', '/rɪˈzʌltənt/', 'A2', ['CET4'], '由此产生的；结果的', 'Happening as a result of something else.', [
    ['由此产生的；结果的', 'Happening as the direct result of something else.', '作为另一事的直接结果而产生的。', '多作定语，常与 from 连用。', 'The resultant confusion delayed the project.', '由此产生的混乱延误了项目。', ['resultant force'], ['secondary'], 'adjective', '定语', '科学'],
  ], '',['result'], '←result A2 + -ant（透明形容词后缀，result 全段可见，「结果的」语义直连），A2 继承（brief 显示 ←?，本批扫描 result A2 在库）；近义 secondary 次生的、派生的（队列原样）');

  W('resuscitate', 'verb', '/rɪˈsʌsɪteɪt/', '', [], '使苏醒；抢救', 'To make someone conscious again, or to make something active again.', [
    ['使苏醒；救活', 'To make a person who has stopped breathing conscious again.', '使停止呼吸的人重新恢复意识。', '可及物，医学用语。', 'Doctors managed to resuscitate the swimmer.', '医生设法救活了这名游泳者。', ['resuscitate a patient'], ['revive'], 'verb', '及物', '健康'],
    ['使恢复；复兴', 'To make an activity, system, or idea active again.', '使活动、制度或想法重新活跃起来。', '可及物。', 'They tried to resuscitate the old tradition.', '他们试图复兴这一古老传统。', ['resuscitate the economy'], [], 'verb', '及物', '社会'],
  ], 'resuscitates~resuscitated~resuscitated~resuscitating', [], '拉丁 resuscitare——re+suscitate 无库内可继成分，留空（revive 为近义词而非构词根）；近义 revive 使复活、复苏（队列原样）');

  W('retailer', 'noun', '/ˈriːteɪlə/', 'B2', ['CET4'], '零售商', 'A person or business that sells goods directly to the public.', [
    ['零售商', 'A person or company that sells goods directly to the public.', '直接向公众销售商品的个人或公司。', '可数。', 'The product is sold through small retailers.', '该产品通过小型零售商销售。', ['online retailer'], ['grocer'], 'noun', 'countable', '商务'],
  ], 'retailers', ['grocer'], 'brief 根提示 ←retail B2 noun/verb + -er（透明施事后缀），B2 继承；-er 弱读 /ə/ 不带 r；家族/近义 grocer 食品杂货商（队列原样）');

  W('retake', 'verb/noun', '/ˌriːˈteɪk/', 'A1', [], '重考；夺回', 'To take something again, such as an exam or a place.', [
    ['重考；补考', 'To take an examination again.', '再次参加考试。', '可及物，英式英语。', 'He will retake the test next month.', '他下个月将重考。', ['retake an exam'], ['makeup'], 'verb', '及物', '教育'],
    ['夺回；收复', 'To take back a place or something that was lost.', '夺回失地或失去的东西。', '可及物。', 'The army retook the port town.', '军队夺回了这座港口城镇。', ['retake the city'], [], 'verb', '及物', '军事'],
  ], 'retakes~retook~retaken~retaking',['take'], 're- 前缀不作成分，取其后词根 take A1（take an exam、take a city→retake 语义直连），A1 继承（brief 显示 ←?，本批扫描 take A1 在库）；形变同 take 不规则（retook/retaken）；近义 makeup 补考（队列原样）');

  W('retaliation', 'noun', '/rɪˌtæliˈeɪʃn/', 'C1', ['CET6'], '报复；反击', 'The act of doing something harmful to someone because they harmed you.', [
    ['报复；反击', 'The act of doing something harmful to someone because they first harmed you.', '因对方先伤害自己而对其做出有害行为。', '不可数，常用 in retaliation for；亦见复数 retaliations。', 'The tariffs were imposed in retaliation for lost exports.', '这些关税是为报复出口受损而加征的。', ['in retaliation for'], ['revenge'], 'noun', 'uncountable', '政治'],
  ], 'retaliations',['retaliate'], '←retaliate C1 + -ation（透明名词后缀，「报复」语义直连），C1 继承（brief 显示 ←?，本批扫描 retaliate C1 在库，与 CET6 标签相称）；近义 revenge 复仇、报复（队列原样）');

  W('retch', 'verb', '/retʃ/', '', [], '干呕；恶心欲呕', 'To make the sounds of vomiting without bringing anything up.', [
    ['干呕；恶心欲呕', 'To make the movement and sound of vomiting without bringing anything up from the stomach.', '作出呕吐的动作和声音，但胃里没有东西吐出。', '不及物。', 'The smell made her retch.', '那股气味熏得她直恶心。', ['retch with nausea'], ['heave'], 'verb', '不及物', '健康'],
  ], 'retches~retched~retched~retching', [], '英语原生孤立词——无库内可继构词根（heave 为近义词而非构词根），留空；近义 heave 呕吐、猛举（队列原样）');

  W('retiring', 'adjective', '/rɪˈtaɪərɪŋ/', 'B1', [], '谦逊腼腆的；即将退休的', 'Shy and unwilling to talk about yourself, or leaving your job soon.', [
    ['谦逊腼腆的', 'Shy and unwilling to talk much about yourself.', '害羞而不愿多谈自己。', '多作定语。', 'She has a quiet and retiring manner.', '她举止安静而腼腆。', ['retiring manner'], [], 'adjective', '定语', '性格'],
    ['即将退休的；即将离任的', 'Leaving a job or position soon, usually because of age.', '即将离开工作或职位，通常因年龄。', '多作定语。', 'The retiring director gave a short speech.', '即将退休的董事作了简短发言。', ['retiring age'], ['outgoing'], 'adjective', '定语', '职业'],
  ], '', ['retire'], 'brief 根提示 ←retire B1 + -ing（分词形容词），B1 继承；家族 retire 退休；近义 outgoing 即将离任的（与「即将离任」义相称，队列原样，「谦逊」义本批无近义）');

  W('retract', 'verb', '/rɪˈtrækt/', '', [], '撤回；收回', 'To say that you take back something you said, or to pull something back.', [
    ['撤回；收回（言论）', 'To say officially that you take back something you said before.', '正式收回此前说过的话。', '可及物。', 'The company retracted its earlier statement.', '公司收回了早前的声明。', ['retract a statement'], ['withdraw'], 'verb', '及物', '法律'],
    ['收回；缩回', 'To pull something back into its original position.', '把某物拉回原来的位置。', '可及物或不及物。', 'The tortoise retracted its head into the shell.', '乌龟把头缩回壳里。', ['retract the landing gear'], [], 'verb', '及物', '交通'],
  ], 'retracts~retracted~retracted~retracting', ['withdraw'], 're+tract 切词假象——库内 tract 为「地带/管道/传单」义，与「拉回」不构成直连语义基，留空；家族/近义 withdraw 撤回、收回（队列原样）');

  W('reuse', 'verb/noun', '/ˌriːˈjuːz/', 'A1', [], '再次使用；重复利用', 'To use something again instead of throwing it away.', [
    ['再次使用；重复利用', 'To use something more than once, especially instead of buying a new one.', '多次使用某物，尤指不另行购买新的。', '可及物，重读第二音节。', 'We reuse jars as storage containers.', '我们把罐子重复用作储物容器。', ['reuse and recycle'], ['recycle'], 'verb', '及物', '环境'],
  ], 'reuses~reused~reused~reusing', ['recycle'], 're- 前缀不作成分，取其后词根 use A1（语义直连，规则先例 reuse←use），A1 继承（brief 显示 ←?，本批扫描 use A1 在库）；家族/近义 recycle 回收利用（队列原样）');

  W('revamp', 'verb', '/ˌriːˈvæmp/', '', [], '翻新；改造', 'To change or improve the appearance or structure of something.', [
    ['翻新；改造', 'To change the look, structure, or workings of something to make it better.', '改变某物的外观、结构或运作方式使其更好。', '可及物。', 'They plan to revamp the entire website.', '他们计划彻底改版整个网站。', ['revamp the office'], ['overhaul'], 'verb', '及物', '媒体'],
  ], 'revamps~revamped~revamped~revamping', [], 're+vamp——vamp 不在库，无库内可继构词根（overhaul 为近义词而非构词根），留空；近义 overhaul 全面检修、彻底改造（队列原样）');

  W('revel', 'verb', '/ˈrevl/', '', [], '纵情欢乐；陶醉', 'To enjoy yourself in a lively way, or to take great pleasure in something.', [
    ['纵情欢乐；狂欢', 'To enjoy yourself in a lively, noisy way with other people.', '与他人一起喧闹地尽情享乐。', '不及物，常与 in 连用；英式拼写 revelled。', 'They revelled in the festival all night.', '他们在节日里狂欢了一整夜。', ['revel in the moment'], ['party'], 'verb', '不及物', '娱乐'],
    ['陶醉；沉浸', 'To take great pleasure in something.', '从某事中获得极大乐趣。', '不及物，常与 in 连用。', 'He revels in solving difficult puzzles.', '他陶醉于解难题。', ['revel in the detail'], ['glory', 'indulge'], 'verb', '不及物', '心理'],
  ], 'revels~revelled~revelled~revelling', [], '中古法语 reveler——无库内可继构词根，留空；英式拼写 revelled/revelling；近 party 参加聚会（「狂欢」义）、glory 洋洋得意（glory in）、indulge 沉溺（「陶醉」义），队列原样');

  W('revelation', 'noun', '/ˌrevəˈleɪʃn/', 'B2', ['CET4'], '揭露；揭示的事物', 'The act of making hidden facts known, or a surprising fact that is made known.', [
    ['揭露；透露', 'The act of making something known that was secret or hidden.', '使秘密或隐藏之事为人所知的行为。', '可数或不可数。', 'The investigation led to a revelation of corruption.', '调查揭露出腐败问题。', ['a revelation of fraud'], ['outing'], 'noun', 'uncountable', '媒体'],
    ['令人惊讶的发现；启示', 'A surprising and important fact that people did not know before.', '此前无人知晓的惊人而重要的事实。', '可数。', 'The discovery was a revelation to the medical world.', '这一发现对医学界而言是个启示。', ['come as a revelation'], [], 'noun', 'countable', '科学'],
  ], 'revelations',['reveal'], '←reveal B2 + -ation（reveal 全段可见的名词化变体，「揭示」语义直连；与同批 revel「纵情欢乐」无关，判断项披露），B2 继承（brief 显示 ←?，本批扫描 reveal B2 在库）；近义 outing 亦含「公开身份、揭露隐私」义（队列原样）');

  W('reverberation', 'noun', '/rɪˌvɜːbəˈreɪʃn/', '', [], '回响；余音', 'A loud sound that seems to continue after the original sound has stopped.', [
    ['回响；余音', 'A sound that seems to continue and fade slowly after the original sound has stopped.', '原声停止后似乎持续并慢慢减弱的声音。', '可数或不可数。', 'The reverberation lasted for several seconds in the cave.', '洞穴里的回响持续了好几秒。', ['echo and reverberation'], ['echo'], 'noun', 'uncountable', '科学'],
  ], 'reverberations', ['echo'], '拉丁 reverberare——reverberate 不在库，无库内可继构词根（echo 为家族/近义而非构词根），留空；家族/近义 echo 回声、回响（队列原样）');

  W('revere', 'verb', '/rɪˈvɪə/', '', [], '崇敬；敬仰', 'To have a lot of respect and admiration for someone or something.', [
    ['崇敬；敬仰', 'To feel great respect and admiration for someone or something.', '对某人或某事怀有极大的尊敬与仰慕。', '可及物。', 'The tribe revere the ancient oak.', '部落崇敬这棵古老的橡树。', ['revered as a saint'], ['worship'], 'verb', '及物', '宗教'],
  ], 'reveres~revered~revered~revering', ['worship'], '中古法语 reverer——无库内可继构词根（worship 为家族/近义而非构词根），留空；家族/近义 worship 崇拜、敬奉（队列原样）');
})(typeof window !== 'undefined' ? window : globalThis);
