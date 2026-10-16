/* data/words/cet/author_s11.js — 常用词 S 批次 11，缺口 seam ~ sensible，共 31 条
 * （26 单词 + 5 短语：sell abroad、sell for、send for、send off、send on）。
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4：secrecy、security、seeming、seizure、selection、sensible；本批无 CET6）。
 * 扫根结论：season A2、secure B1、seem A2、sell A1（brief 根提示）；
 * sea A1、secret A2、see A1、seize B2、select B1、sense A2、control A2、destruction A2、
 * govern B2、rely B1、respect B1、sufficient B1（brief 显示 ←?，本批纯文本扫描 author_*.js 取第 4 参）——
 * · 透明后缀/同根继承：seasoned←season A2 + -ed、seasoning←season A2 + -ing、
 *   secrecy←secret A2 + -cy（diploma→diplomacy 先例；-cy 不在 §5.4 明列清单，判断项）、
 *   selection←select B1 + -ion（词形全段可见）、seizure←seize B2 + -ure（e→∅+ure，
 *   同 expose→exposure、fail→failure 先例）、senseless←sense A2 + -less、
 *   sensible←sense A2 + -ible（-able 类透明变体，判断项）、seller←sell A1 + -er、
 *   selling←sell A1 + -ing、seen←see A1 + -en 过去分词（同 believed/blamed 先例）。
 * · 复合词按 §5.3 定根（判断项披露）：seaport←sea A1（首成分）、see-through←see A1（首成分）、
 *   send-off←send A1（首成分）、self-control←control A2、self-destruction←destruction A2、
 *   self-governing←govern B2、self-reliant←rely B1（reliant←rely + -ant，y→i）、
 *   self-respect←respect B1、self-sufficient←sufficient B1（self- 为前缀性成分，取其后词根）。
 * · 留空项：seam（sew B1 语义相关但非全段可见构词，兄弟派生不成立）、
 *   sect（section B1/sector B2 形近但词源与语义均非直连，判断项）、
 *   sedate（拉丁 sedēre 坐，sedentary 不在库，库内无可见根）、
 *   seep（与 weep B2 形近但词形非全段共享，判断项）、
 *   seesaw（儿歌复沓来源，与 see、saw 字面组合义无关联，切词假象判断项），
 *   及 5 个短语（整体不取成分作根，分级留空）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s11.js 必须在 _cet_helper.js 之后加载');

  W('seam', 'noun', '/siːm/', '', [], '接缝；矿层', 'A joined line in cloth or rock, or a long thin layer of coal underground.', [
    ['接缝；缝合处', 'A line where two pieces of cloth or other material are joined by stitching.', '布料或其他材料缝合处形成的线状接缝。', '可数；衣缝、焊缝、石缝均用此词。', 'The seam along the sleeve began to come apart.', '袖子上的接缝开始绽开了。', ['a side seam', 'sew a seam'], ['stitch'], 'noun', 'countable', '家居'],
    ['（煤、矿石等的）层；矿脉', 'A long thin layer of coal, stone or ore lying underground.', '地下呈长条薄层分布的煤、岩石或矿石。', '可数；常见 a seam of coal。', 'The miners worked a thin seam deep in the hill.', '矿工们开采山体深处一层很薄的煤层。', ['a seam of coal'], ['vein'], 'noun', 'countable', '工业'],
  ], 'seams', [], '库内无可见词根——sew B1 缝纫与 seam「接缝」语义相关，但 sew 未在 seam 中全段可见，兄弟派生不成立，留空（判断项）；近义 stitch 缝合（置接缝义项）、vein 矿脉、纹理（置矿层义项），队列原样');

  W('seaport', 'noun', '/ˈsiːpɔːt/', 'A1', [], '海港；港口城市', 'A harbour town used by ships for trade and travel.', [
    ['海港；港口城市', 'A town or area on the coast where ships can load and unload goods and passengers.', '海岸上可供船舶装卸货物与上下旅客的城镇或地区。', '可数；sea 海 + port 港口构成的复合词。', 'The city grew into a busy seaport in the nineteenth century.', '这座城市在十九世纪发展成繁忙的海港。', ['a busy seaport', 'an international seaport'], ['port'], 'noun', 'countable', '交通'],
  ], 'seaports',['sea'], '复合词按 §5.3 取首成分 sea A1 海（port B1 港口为次成分），「海港」语义直连，A1 继承；近义 port 港口（队列原样）');

  W('seasoned', 'adjective', '/ˈsiːzənd/', 'A2', [], '调过味的；老练的', 'Made tasty with salt or herbs, or experienced through long practice.', [
    ['调过味的；加了佐料的', 'Food that has had salt, herbs or spices added to improve its taste.', '已加入盐、香草或香料以改善味道的食物。', '多作定语，作分词形容词。', 'The chef served seasoned rice with fresh herbs.', '厨师端上了拌有香料的米饭和新鲜香草。', ['lightly seasoned', 'seasoned to taste'], [], 'adjective', '定语', '饮食'],
    ['老练的；有经验的', 'Having a lot of experience of a particular job or activity.', '对某项工作或活动经验丰富。', '多作定语，常与 traveller、fighter 等搭配。', 'He is a seasoned negotiator with twenty years of practice.', '他是一名有二十年经验的老练谈判者。', ['a seasoned traveller', 'seasoned campaigner'], ['veteran'], 'adjective', '定语/表语', '职业'],
  ], '',['season'], 'brief 根提示 ←season A2 时令、调味 + -ed（透明分词形容词后缀），A2 继承；近义 veteran 老手（队列原样，置老练义项）');

  W('seasoning', 'noun', '/ˈsiːzənɪŋ/', 'A2', [], '调味品；调味', 'What you put into food to make it taste better, or the process of doing so.', [
    ['调味料；调料', 'Salt, herbs or spices that are added to food to give it more flavour.', '加入食物中以增添风味的盐、香草或香料。', '不可数；fam pepper、salt、spice 为具体调料。', 'A little seasoning brings out the sweetness of the tomatoes.', '一点调料就能带出番茄的甜味。', ['add seasoning', 'a mix of seasoning'], ['herb', 'pepper', 'salt', 'spice'], 'noun', 'uncountable', '饮食'],
    ['调味；调味过程', 'The process of adding salt, herbs or spices to food while it is being cooked.', '在烹调过程中加入盐、香草或香料的做法。', '不可数；强调烹调中的动作。', 'Careful seasoning makes a simple soup taste complete.', '细致的调味让一碗清汤味道完整。', ['during seasoning'], [], 'noun', 'uncountable', '饮食'],
  ],'seasonings', ['pepper', 'salt', 'spice'], 'brief 根提示 ←season A2 时令、调味 + -ing（动名词名词化），A2 继承；家族 pepper 胡椒、salt 盐、spice 香料，近义 herb 香草、pepper、salt、spice（队列原样，全置调味料义项）');

  W('secrecy', 'noun', '/ˈsiːkrəsi/', 'A2', ['CET4'], '保密；秘密状态', 'The habit of keeping things secret, or the state of being kept secret.', [
    ['保密；守密', 'The practice of hiding something from other people, or of refusing to tell them about it.', '对某事加以隐瞒、不让他人知晓的做法。', '不可数；常见 in secrecy、complete secrecy。', 'The negotiations were held in complete secrecy.', '谈判在完全保密的状态下进行。', ['in secrecy', 'a vow of secrecy'], ['mystery'], 'noun', 'uncountable', '社会'],
  ], '',['secret'], 'brief 显示 ←?，自行扫根 secret A2（author_s1）——secrecy←secret + -cy（名词后缀，同 diploma→diplomacy 先例），A2 继承（-cy 不在 §5.4 明列清单，判断项）；近义 mystery 谜团、神秘之事（队列原样）');

  W('sect', 'noun', '/sekt/', '', [], '宗派；教派', 'A separate faction that has broken away from a larger religious or political body.', [
    ['宗派；教派；派别', 'A small religious or political group whose members hold beliefs that differ from those of the wider group they left.', '从较大群体中分离出来、信奉不同宗教或政治主张的小团体。', '可数，常带贬义。', 'The small sect met every week in a rented hall.', '这个小教派每周在租来的礼堂里集会。', ['a religious sect', 'members of a sect'], ['cult'], 'noun', 'countable', '宗教'],
  ], 'sects', ['cult'], '库内无可见词根——sect 与 section B1、sector B2 形近且「分支」义可联，但 section/sector 源自拉丁 secare「切分」，sect 源自拉丁 secta「追随」，语义非直连构词，拿不准留空（判断项）；家族/近义 cult 教派、异端团体（队列原样）');

  W('security', 'noun', '/sɪˈkjʊərəti/', 'B1', ['CET4'], '安全；担保', 'Freedom from danger, or a pledge given to back a promise.', [
    ['安全；安全保障', 'The state of being protected from danger, harm or worry, or the means of providing such protection.', '免受危险、伤害或忧虑的状态，或为此提供的保护手段。', '不可数；常见 national security、airport security。', 'Extra funding was allocated to airport security.', '额外资金被划拨给了机场安保。', ['national security', 'airport security'], [], 'noun', 'uncountable', '政治'],
    ['担保；保证', 'Something given or held to make sure that a debt or a promise will be fulfilled, formerly even a person held as a pledge.', '为保证债务或承诺得到履行而交出或持有的东西，旧时甚至包括被扣作保证的人。', '不可数，常见 in security for、as security。', 'The loan was backed by property held as security.', '这笔贷款有作为担保被持有的房产作保。', ['in security for', 'as security'], ['bond', 'hostage', 'pledge'], 'noun', 'uncountable', '金融'],
  ],'securities', ['bond'], 'brief 根提示 ←secure B1 安全的 + -ity（名词化，词形全段可见），B1 继承；两义项均以不可数为主故 forms 留空；fam bond 债券，近义 bond 债券、hostage 人质、pledge 抵押物（队列原样，全置担保义项）');

  W('sedate', 'adjective/verb', '/sɪˈdeɪt/', '', [], '镇静的；用镇静药使平静', 'Slow and peaceful in manner, or the use of a calming drug.', [
    ['镇静的；不慌不忙的', 'Calm, slow and unhurried in the way you move, speak or behave.', '举止、言语或行为平静缓慢、从容不迫。', '可作定语或表语，常形容步态与生活方式。', 'The elderly couple took a sedate stroll after dinner.', '这对老夫妇晚饭后悠闲地散了散步。', ['a sedate pace', 'a sedate manner'], [], 'adjective', '定语/表语', '性格'],
    ['用镇静药使平静', 'To give somebody a drug that makes them calm, relaxed or unconscious.', '给某人使用使其平静、放松或失去知觉的药物。', '多用被动 be sedated。', 'The patient was sedated before the scan.', '扫描前病人被用了镇静药。', ['be sedated with'], ['drug'], 'verb', '及物', '健康'],
  ], 'sedates~sedated~sedated~sedating', [], '库内无可见词根——sedate 源自拉丁 sedēre「坐」，sedentary 不在库，库内无可见语素，留空；近义 drug 药物（队列原样，置镇静义项）');

  W('see-through', 'adjective', '/ˌsiː ˈθruː/', 'A1', [], '透明的；透视的', 'Thin or clear enough for objects behind it to show through.', [
    ['透明的；透视的', 'Made of a thin or clear material that light passes through, so what is behind it can be seen.', '由薄或透明材料制成、光线可穿过，可看见其后的物体。', '多作定语，常见 see-through fabric、see-through plastic。', 'She wore a see-through shirt over a dark top.', '她在深色上衣外面套了件透视衬衫。', ['see-through fabric', 'see-through plastic'], ['transparent'], 'adjective', '定语', '外貌'],
  ], '',['see'], '连字符复合词按 §5.3 定根：首成分 see A1 看（through A1 穿过为次成分），「看穿即透明」语义直连，A1 继承（判断项披露）；近义 transparent 透明的（队列原样）');

  W('seeming', 'adjective', '/ˈsiːmɪŋ/', 'A2', ['CET4'], '表面上的；看似如此的', 'Existing in appearance only, not necessarily in fact.', [
    ['表面上的；看似如此的', 'Appearing to be real or true, although it may not be so in fact.', '看起来真实或属实，实际上未必如此。', '多作定语，常见 seeming contradiction、seeming calm。', 'There was a seeming contradiction between the two accounts.', '两份陈述之间表面上存在矛盾。', ['a seeming contradiction', 'seeming indifference'], ['apparent'], 'adjective', '定语', '书面'],
  ], '',['seem'], 'brief 根提示 ←seem A2 好像、似乎 + -ing（分词形容词后缀），A2 继承；近义 apparent 表面上的（队列原样）');

  W('seen', 'adjective/verb', '/siːn/', 'A1', [], '被看见的；see 的过去分词', 'The past participle of see, or something that can be seen.', [
    ['（see 的过去分词）', 'The form used with has, have or had to say that seeing happened before now.', '与 has、have 或 had 连用、表示动作发生于现在的完成时形式。', '不规则变化：see - saw - seen。', 'She has seen that film twice.', '那部电影她已经看过两遍了。', ['has seen', 'had seen'], [], 'verb', '及物', '语法'],
    ['被看见的；可见的', 'Able to be seen, or already noticed by somebody.', '能够被看见，或已被某人注意到。', '作表语或定语，常见 clearly seen、widely seen。', 'The damage to the roof was clearly seen from the garden.', '屋顶的损坏从花园里看得清清楚楚。', ['clearly seen', 'widely seen'], ['visible'], 'adjective', '定语/表语', '通用'],
  ], '', ['visible'], 'seen 是 see 的过去分词单列词条（同 believed/blamed 体例，formsStr 留空）；brief 显示 ←?，自行扫根 see A1（author_s5）——←see A1 + -en（过去分词后缀），A1 继承；fam/syn visible 可见的（队列原样，置形容词义项）');

  W('seep', 'verb', '/siːp/', '', [], '渗出；渗透', 'To leak or spread little by little, of liquids, smells or information.', [
    ['（液体、气体）渗出；渗漏', 'Of a liquid, oil or gas: to pass slowly through a very small hole or crack.', '液体、油或气体通过极小的孔洞或裂缝慢慢漏出。', '多作不及物，常与 through、from、into 连用。', 'Water seeped through the crack in the wall.', '水从墙上的裂缝渗了进来。', ['seep through', 'seep from'], ['leak', 'weep'], 'verb', '不及物', '家居'],
    ['（消息、气味）慢慢透出；传开', 'Of news, a smell or a feeling: to spread slowly and quietly into a place.', '消息、气味或感觉悄悄地扩散到某处。', '多作不及物，常与 out、into 连用。', 'News of the sale seeped out before the official notice.', '出售的消息在正式通知之前就传开了。', ['seep out', 'seep into'], ['filter'], 'verb', '不及物', '媒体'],
  ], 'seeps~seeped~seeped~seeping', ['leak'], '库内无可见词根——seep 与 weep B2 渗出液体语义相近，但词形非全段共享（仅首字母之差），兄弟派生不成立，留空（判断项）；fam leak 渗漏，近义 leak 渗漏、weep 渗出液体（置渗出义项）、filter 滤过、慢慢透出（置传开义项），均队列原样');

  W('seesaw', 'noun/verb', '/ˈsiːsɔː/', '', [], '跷跷板；上下往复摆动', 'A playground plank that tips up and down, or repeated change between two states.', [
    ['跷跷板', 'A long narrow board balanced in the middle so that one end goes up when the other end goes down.', '中间支起的长条板，一端升起时另一端落下。', '可数；儿童游乐场器械。', 'The children took turns on the seesaw in the park.', '孩子们在公园里轮流玩跷跷板。', ['play on the seesaw'], ['swing'], 'noun', 'countable', '体育'],
    ['上下往复摆动；反复起伏', 'To move up and down in a regular pattern, or to keep changing between two opposite states.', '按规律上下移动，或在两种对立状态之间反复变化。', '多作不及物。', 'Share prices seesawed all morning after the announcement.', '公告发布后股价整个上午上下波动。', ['seesaw between'], [], 'verb', '不及物', '金融'],
  ], 'seesaws~seesawed~seesawed~seesawing', [], '库内无可靠可继根——seesaw 源自儿歌 see-saw 的复沓呼喊，与 see、saw 的字面组合义无直接关联，切词假象判定留空（判断项）；近义 swing 摆动（队列原样，置跷跷板义项）');

  W('seizure', 'noun', '/ˈsiːʒə/', 'B2', ['CET4'], '夺取；（医）发作', 'Taking something by force, or a sudden fit of illness.', [
    ['夺取；占领', 'A sudden taking of control of a place, person or property by force.', '以武力突然取得对某地、某人或某财产的控制。', '可数或不可数，常见 the seizure of。', 'The seizure of the airport took only a few hours.', '夺取机场只用了几个小时。', ['the seizure of power', 'a seizure of goods'], ['hijack'], 'noun', 'countable', '军事'],
    ['（医）发作', 'A sudden attack of illness in which somebody loses consciousness and the body shakes.', '疾病突然发作，患者失去知觉并伴随身体抽搐。', '可数，常见 an epileptic seizure；与 stroke 中风属不同病症，此处照队列作近义收录。', 'The patient had a seizure during the night.', '病人夜里发作了一次。', ['an epileptic seizure', 'have a seizure'], ['stroke'], 'noun', 'countable', '健康'],
  ], 'seizures',['seize'], 'brief 显示 ←?，自行扫根 seize B2（author_s5）——seizure←seize + -ure（e→∅+ure，同 expose→exposure、fail→failure 先例），B2 继承；近义 hijack 劫持（置夺取义项）、stroke 中风（置发作义项），队列原样');

  W('selection', 'noun', '/sɪˈlekʃn/', 'B1', ['CET4'], '选择；选集', 'The process of picking people or items from a wider set, or the set picked.', [
    ['选择；挑选', 'The act of choosing a person or thing from a number of possibilities.', '从若干可能对象中挑选人或物的行为。', '不可数，常见 selection process、by natural selection。', 'The selection of the right tool matters more than speed.', '挑对工具比速度更重要。', ['selection process', 'by natural selection'], ['pick'], 'noun', 'uncountable', '教育'],
    ['选集；精选集', 'A collection of examples chosen from a wider group, such as poems, music or goods in a shop.', '从更大范围内选出的例子汇集，如诗歌、音乐或商店里的商品。', '可数，常见 a selection of。', 'She read a selection of poems at the concert.', '她在音乐会上朗诵了一组选诗。', ['a selection of poems', 'a wide selection'], [], 'noun', 'countable', '文学'],
  ], 'selections',['select'], 'brief 显示 ←?，自行扫根 select B1（author_s5）——selection←select + -ion（词形全段可见，-ion 透明名词后缀），B1 继承；近义 pick 挑选（队列原样，置选择义项）');

  W('self-control', 'noun', '/ˌself kənˈtrəʊl/', 'A2', [], '自制力；自我克制', 'Keeping your own emotions and actions in check by an effort of will.', [
    ['自制力；自我克制', 'The ability to keep your feelings and behaviour under control, especially when you are angry or tempted.', '控制自己情绪与行为的能力，尤指在愤怒或诱惑面前。', '不可数，常与 exercise、lose 搭配。', 'It took great self-control not to answer back.', '克制住不回嘴需要很强的自制力。', ['exercise self-control', 'lose self-control'], ['willpower'], 'noun', 'uncountable', '心理'],
  ], '', ['willpower'], '连字符复合词按 §5.3：self- 为前缀性成分不作根，取其后词根 control A2 控制，「自我控制」语义直连，A2 继承（判断项披露）；fam/syn willpower 意志力（队列原样）');

  W('self-destruction', 'noun', '/ˌself dɪˈstrʌkʃn/', 'A2', [], '自我毁灭；自毁', 'Harming yourself, or undoing your own work and life.', [
    ['自我毁灭；自毁行为', 'The act of destroying yourself, or the process by which you ruin your own life, health or work.', '毁灭自己的行为，或逐步毁掉自己生活、健康或事业的过程。', '不可数，常与 lead to、path to 搭配。', 'His heavy drinking was a slow form of self-destruction.', '他酗酒是一种缓慢的自我毁灭。', ['lead to self-destruction', 'a path to self-destruction'], ['suicide'], 'noun', 'uncountable', '心理'],
  ], '', ['suicide'], '连字符复合词按 §5.3：self- 为前缀性成分不作根，取其后词根 destruction A2 毁灭（destroy A2 同源，-tion 透明名词后缀），A2 继承（判断项披露）；fam/syn suicide 自杀（队列原样）');

  W('self-governing', 'adjective', '/ˌself ˈɡʌvənɪŋ/', 'B2', [], '自治的；自我管理的', 'Ruling itself rather than being ruled from outside.', [
    ['自治的；自我管理的', 'Of a group, organization or region: having the right to make its own laws and decisions.', '团体、组织或地区有权自行制定法律与决定。', '多作定语。', 'The island became a self-governing territory after the vote.', '公投之后该岛成为自治领地。', ['a self-governing region', 'a self-governing body'], ['independent'], 'adjective', '定语', '政治'],
  ], '',['govern'], '连字符复合词按 §5.3：self- 为前缀性成分不作根，取其后词根 govern B2 统治（governing←govern + -ing 透明后缀），B2 继承（判断项披露）；近义 independent 独立的（队列原样）');

  W('self-reliant', 'adjective', '/ˌself rɪˈlaɪənt/', 'B1', [], '自立的；自力更生的', 'Depending on your own efforts rather than on outside help.', [
    ['自立的；自力更生的', 'Able to provide for yourself and deal with problems on your own rather than depending on others.', '能够自己养活自己、独立解决问题，而不依赖他人。', '可作定语或表语，常与 become 连用。', 'The course aims to make new graduates more self-reliant.', '这门课旨在让应届毕业生更加自立。', ['become self-reliant', 'a self-reliant community'], ['independent'], 'adjective', '定语/表语', '性格'],
  ], '', ['independent'], '连字符复合词按 §5.3：self- 为前缀性成分不作根，取其后词根 rely B1 依靠（reliant←rely + -ant，y→i 正字变化，-ant 透明形容词后缀），B1 继承（判断项披露）；fam/syn independent 独立的（队列原样）');

  W('self-respect', 'noun', '/ˌself rɪˈspekt/', 'B1', [], '自尊；自重', 'Regard for your own worth, which makes you demand fair treatment.', [
    ['自尊；自重', 'A feeling of pride and confidence in your own value that makes you expect to be treated with respect.', '对自己价值的自豪与信心，因而要求得到应有的尊重。', '不可数，常与 lose、restore 搭配。', 'The insult damaged his self-respect for years.', '那次羞辱多年损伤了他的自尊。', ['lose self-respect', 'restore self-respect'], ['pride'], 'noun', 'uncountable', '心理'],
  ], '',['respect'], '连字符复合词按 §5.3：self- 为前缀性成分不作根，取其后词根 respect B1 尊重，「自我尊重」语义直连，B1 继承（判断项披露）；近义 pride 自尊（队列原样）');

  W('self-sufficient', 'adjective', '/ˌself səˈfɪʃnt/', 'B1', [], '自给自足的；自足的', 'Needing nothing from other people or other countries.', [
    ['自给自足的', 'Able to produce or obtain all the food, goods or resources you need without help from other people or countries.', '能够自行生产或获得所需的全部食物、物资或资源，不依赖他人或他国。', '可作定语或表语，常与 in 连用。', 'The village aims to be self-sufficient in fruit and vegetables.', '这个村子力求在果蔬上自给自足。', ['become self-sufficient', 'self-sufficient in food'], ['independent'], 'adjective', '定语/表语', '农业'],
  ], '',['sufficient'], '连字符复合词按 §5.3：self- 为前缀性成分不作根，取其后词根 sufficient B1 足够的，「自行满足供应」语义直连，B1 继承（判断项披露）；近义 independent 独立的（队列原样）');

  W('sell abroad', 'verb', '/ˌsel əˈbrɔːd/', '', [], '在国外销售；出口', 'To do business with buyers in foreign countries.', [
    ['在国外销售；出口', 'To offer and sell goods or services in other countries rather than in your own country.', '把货物或服务销往其他国家而非本国。', '可及物，宾语常置于 sell 与 abroad 之间，也可不带宾语。', 'The factory sells most of its toys abroad.', '这家工厂把大部分玩具销往国外。', ['sell goods abroad', 'sell abroad at a profit'], ['export'], 'verb', '及物', '商务'],
  ], '', ['export'], '短语整体不取成分作根，分级留空；家族 export 出口，近义 export 出口（队列原样，短语条目）').phrase = true;

  W('sell for', 'verb', '/ˌsel fɔː/', '', [], '卖得；售价为', 'To reach a certain price when somebody buys it.', [
    ['卖得；售价为', 'To be sold for a particular amount of money.', '以某一价钱被卖出。', '不及物短语，主语通常是被售之物。', 'The painting sold for more than anyone expected.', '这幅画卖得比所有人预期的价钱都高。', ['sell for a good price', 'sell for a song'], ['fetch'], 'verb', '不及物', '商务'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 fetch 售得、卖得（队列原样，短语条目）').phrase = true;

  W('seller', 'noun', '/ˈselə/', 'A1', [], '卖方；销售者', 'One who offers goods for sale, or an item in strong demand.', [
    ['卖方；销售者', 'A person, company or shop that offers something for sale.', '出售某物的个人、公司或商店。', '可数，常见 private seller、the seller of。', 'The seller paid all the legal costs.', '卖方支付了全部法律费用。', ['a private seller', 'the seller of the house'], ['salesman', 'vendor'], 'noun', 'countable', '商务'],
    ['畅销品', 'Something that is sold in large numbers, especially a book or a product.', '销量很大的东西，尤指书籍或产品。', '可数，常见 fast seller、best seller。', 'The new model became a fast seller in its first month.', '新机型在头一个月就成了畅销货。', ['a fast seller'], [], 'noun', 'countable', '商务'],
  ], 'sellers', ['salesman', 'vendor'], 'brief 根提示 ←sell A1 卖 + -er（-er 表人透明名词后缀），A1 继承；家族/近义 salesman 推销员、vendor 小贩、供应商（队列原样，全置卖方义项）');

  W('selling', 'noun', '/ˈselɪŋ/', 'A1', [], '销售；出售活动', 'Getting money by offering goods or services to customers.', [
    ['销售；出售活动', 'The activity or business of offering goods or services to people in return for money.', '把货物或服务提供给他人以换取金钱的活动或行业。', '动名词名词化，不可数，常见 selling price、direct selling。', 'Direct selling is growing in smaller towns.', '直销正在小城镇发展。', ['selling price', 'direct selling'], ['retail', 'sale'], 'noun', 'uncountable', '商务'],
  ], '', ['sale'], 'brief 根提示 ←sell A1 卖 + -ing（动名词名词化），A1 继承；fam sale 出售，近义 retail 零售、sale 出售（队列原样，置销售义项）');

  W('send for', 'verb', '/ˌsend ˈfɔː/', '', [], '派人去请；函购', 'To make a request that brings a person or goods to you.', [
    ['派人去请；召唤', 'To ask or tell somebody to come to the place where you are, especially in an emergency.', '要求或通知某人来到你所在之处，尤指紧急情况。', '可及物，宾语为被召唤的人。', 'We sent for a doctor when the fever would not go down.', '高烧不退，我们便派人去请了医生。', ['send for a doctor', 'send for help'], ['summon'], 'verb', '及物', '健康'],
    ['函购；订购', 'To order goods to be sent to you by post or delivery.', '通过邮寄或配送方式订购货物。', '可及物，宾语为所订之物。', 'She sent for a free sample of the coffee.', '她索取了一份咖啡的免费样品。', ['send for a catalogue'], [], 'verb', '及物', '商务'],
  ],'sends for~sent for~sending for', [], '短语整体不取成分作根，分级留空；近义 summon 召唤、传唤（队列原样，置派人去请义项）').phrase = true;

  W('send off', 'verb', '/ˌsend ˈɒf/', '', [], '寄出；发出；罚下场', 'To dispatch something by post, or to dismiss a player from a game.', [
    ['寄出；发出', 'To send a letter, parcel or form to a person or organization, especially by post.', '把信件、包裹或表格寄给某人或某机构，尤指邮寄。', '可及物，宾语可置于 off 之前。', 'Please send off the form before Friday.', '请在周五之前把表格寄出。', ['send off an application', 'send it off'], ['launch'], 'verb', '及物', '书面'],
    ['（体育）罚下场', 'To order a player to leave the field during a game as a punishment.', '比赛中判罚球员离场。', '多用被动 be sent off。', 'The referee sent off two players in the first half.', '裁判在上半场罚下了两名球员。', ['send off a player'], [], 'verb', '及物', '体育'],
  ],'sends off~sent off~sending off', [], '短语整体不取成分作根，分级留空；近义 launch 发出、发起（队列原样，置寄出义项，语义较松）').phrase = true;

  W('send on', 'verb', '/ˌsend ˈɒn/', '', [], '转寄；转发', 'To pass a message or item along to the next person.', [
    ['转寄；转发', 'To send a letter, message or parcel to somebody else after you have received it yourself.', '收到信件、消息或包裹后再转交给他人。', '可及物，宾语可置于 on 之前。', 'Send the file on to the rest of the team.', '把文件转发给团队其余成员。', ['send it on', 'send on to a colleague'], ['forward'], 'verb', '及物', '书面'],
  ], '', [], '短语整体不取成分作根，分级留空；近义 forward 转发、转寄（队列原样，短语条目）').phrase = true;

  W('send-off', 'noun', '/ˈsendɒf/', 'A1', [], '欢送；送行', 'A farewell event for somebody who is going away.', [
    ['欢送会；送行', 'A party or gathering for somebody who is leaving a job, a place or a team, to wish them well.', '为即将离开工作、地方或团队的人举行的聚会，以表祝愿。', '可数；常见 give somebody a send-off。', 'The club held a send-off for its long-serving captain.', '俱乐部为效力多年的老队长举行了欢送会。', ['give a send-off', 'a farewell send-off'], ['farewell'], 'noun', 'countable', '社交'],
    ['（体育）罚下场', 'The act of sending a player off the field during a game as a punishment.', '比赛中判罚球员离场的行为。', '可数，英式体育报道常用。', 'A late red card gave the team an unwanted send-off.', '终场前的红牌给了该队一次不愿见到的罚下。', ['a red card send-off'], [], 'noun', 'countable', '体育'],
  ], 'send-offs', ['farewell'], '连字符复合词按 §5.3 取首成分 send A1 寄送（off A1 为次成分），「送别」语义直连，A1 继承（判断项披露）；fam/syn farewell 告别（队列原样，置欢送义项）');

  W('senseless', 'adjective', '/ˈsensləs/', 'A2', [], '无意义的；失去知觉的', 'Pointless and without reason, or knocked into unconsciousness.', [
    ['无意义的；毫无道理的', 'Having no meaning, purpose or good reason.', '没有含义、目的或合理理由。', '多作定语，常见 senseless killing、senseless violence。', 'The attack was a senseless act of violence.', '那次袭击是毫无道理的暴力行为。', ['a senseless killing', 'a senseless waste'], ['irrational'], 'adjective', '定语', '社会'],
    ['失去知觉的；不省人事的', 'Unconscious because of a blow to the head, a shock or a drug.', '因头部受击、休克或药物而失去知觉。', '可作表语或定语，常见 knocked senseless。', 'He lay senseless on the ground after the fall.', '他摔倒后躺在地上不省人事。', ['knocked senseless'], [], 'adjective', '定语/表语', '健康'],
  ], '',['sense'], 'brief 显示 ←?，自行扫根 sense A2 感觉、明智（author_s5）——senseless←sense + -less（-less 透明形容词后缀，同 count→innumerable 先例），A2 继承；近义 irrational 不理性的（队列原样，置无意义义项）');

  W('sensible', 'adjective', '/ˈsensəbl/', 'A2', ['CET4'], '明智的；合理的', 'Showing good judgement, or practical and likely to work.', [
    ['明智的；有判断力的', 'Able to judge what is best and to act in a calm, reasonable way.', '能判断何者最佳，并以冷静合理的方式行事。', '可作定语或表语，常见 sensible decision、perfectly sensible。', 'It would be sensible to book the tickets early.', '提前订票是明智的。', ['a sensible decision', 'perfectly sensible'], ['rational', 'wise'], 'adjective', '定语/表语', '性格'],
    ['合理的；切实可行的', 'Practical and likely to work, based on real facts rather than on wishes.', '基于事实而非愿望、切实可行的。', '常见 sensible approach、sensible investment。', 'The committee chose a sensible approach to the budget.', '委员会为预算选了一个切实可行的办法。', ['a sensible approach', 'a sensible investment'], ['realistic', 'sound'], 'adjective', '定语', '商务'],
    ['（衣着、鞋）朴素实用的', 'Plain and comfortable rather than fashionable, used especially of shoes and clothes.', '朴素舒适而不追求时髦，尤指鞋和衣物。', '多作定语，常见 sensible shoes。', 'She wore sensible shoes for the long walk.', '为了走长路她穿了双舒服的平底鞋。', ['sensible shoes', 'sensible clothes'], [], 'adjective', '定语', '外貌'],
  ], '', ['wise'], 'brief 显示 ←?，自行扫根 sense A2 感觉（author_s5）——sensible←sense + -ible（-able 类透明形容词变体；intelligible 先例仅因根无级而留空），A2 继承（-ible 不在 §5.4 明列清单，判断项）；fam wise 明智的，近义 rational 理性的、wise 明智的（置明智义项）、realistic 现实的、sound 可靠合理的（置合理义项），均队列原样');
})(typeof window !== 'undefined' ? window : globalThis);
