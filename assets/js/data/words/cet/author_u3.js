/* data/words/cet/author_u3.js — U 批次 3，缺口 uncomplicated ~ unexpected，共 31 条
 * （30 单词 + 1 短语；短语清单：under which）。
 * 来源：refs/fam/syn/tags 逐字照抄队列（%TEMP%\opencode\_task_u3.txt，widx 032-062，词头无残缺）。
 * CET 标签照抄队列：CET4 × 1（understanding），CET6 × 0，其余 30 条 []。
 * brief：%TEMP%\opencode\_u3_brief.txt 共 30 行，与本批 30 个单词一一对应（首行 uncomplicated、末行 unexpected），
 *   逐行核对 refs（= 队列 syn + fam 合并）与任务清单一致，未发现 brief 与任务清单不符。
 * brief 仅 2 行给出根提示（uncover B2、understand A1），其余 28 行显示 ←?，一律按 §5.2 纯文本自扫
 *   （fs.readFileSync + indexOf("W('word'") 取第 4 参，扫 assets/js/data/words/cet/author_*.js，
 *   跳过并行会话在写的 author_w3~w7，未 require 全库）。
 * 扫根结论（自扫第 4 参）：concern B1、confirm B1、control A2、convince B1、cook A1、damage B1/
 *   damaged B1、decide A2、clothes A1、garment C1、undergraduate B2、pass A2、rate B1、score A2、
 *   sea A1、shirt A1、side A1、understand A1、value A2、water A1、develop A2、dilute B2、document A2、
 *   educate A2、even A2、expect A1/expected A1（均 author_*.js 第 4 参）；
 *   brief 根提示复核通过：uncover B2（author_u1.js）、understand A1（author_u1.js）；
 *   complicate/complicated 第 4 参均为空；done 库内仅「完成的」义项。
 * · 继承（28 单词）：
 *   un- 类前缀（§5.3 取前缀后词根、否定方向语义直连，判断项）：unconcerned←concern B1、
 *   unconfirmed←confirm B1、uncontrolled←control A2、unconvinced←convince B1、uncooked←cook A1、
 *   undamaged←damaged B1、undecided←decide A2、undiluted←dilute B2、undocumented←document A2、
 *   uneducated←educate A2、uneven←even A2（取形容词「平坦的」义）、unexpected←expected A1、
 *   undervalue←value A2、undervaluation←value A2（valuation 未单列，value + -ation e→∅ 正字类）。
 *   under- 类前缀性成分（§5.3 取其后词根，判断项）：underclothes←clothes A1、undergarments←garment C1、
 *   underpass←pass A2（同 trespass←pass A2 先例）、underrate←rate B1、underscore←score A2（取「划痕、划线」义）、
 *   undersea←sea A1、undershirt←shirt A1、underside←side A1、underwater←water A1。
 *   其他：uncovered←uncover B2（brief 根提示 + 自扫复核，判断项）、
 *   undergrad←undergraduate B2（截短形兄弟派生 §5.6，判断项）、
 *   understandable←understand A1 + -able、understanding←understand A1 + -ing（§5.4 透明后缀，非判断项）。
 * · 留空（2 单词 + 1 短语）：uncomplicated（complicate/complicated 第 4 参为空，根词本身无 CEFR 可继，§5.7）、
 *   underdone（done 库内仅「完成的」义，与「食物煮得欠火候」不直连，§5.1 核对不通过，判断项）、
 *   under which（短语，按 §6 整体不取成分作根，分级留空）。
 * CEFR 分布（30 单词）：A1 × 9（uncooked、underclothes、undersea、undershirt、underside、
 *   understandable、understanding、underwater、unexpected）、
 *   A2 × 10（uncontrolled、undecided、underpass、underscore、undervaluation、undervalue、
 *   undeveloped、undocumented、uneducated、uneven）、
 *   B1 × 5（unconcerned、unconfirmed、unconvinced、undamaged、underrate）、
 *   B2 × 3（uncovered、undergrad、undiluted）、C1 × 1（undergarments）、留空 × 2（uncomplicated、underdone）；
 *   短语 1 条全留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_u3.js 必须在 _cet_helper.js 之后加载');

  W('uncomplicated', 'adjective', '/ˌʌnkəmˈplɪkətɪd/', '', [], '简单的；不复杂的', 'Free from complications; simple in form or process.', [
    ['不复杂的；容易处理的', 'Simple and not difficult to understand or to deal with.', '不难理解或不易出岔子的。', '定语表语两用，常形容问题、步骤、机器结构与人情世故。', 'The recipe is uncomplicated and takes only twenty minutes.', '这份菜谱很简单，只要二十分钟就能做好。', ['an uncomplicated design', 'keep it uncomplicated'], ['straightforward'], 'adjective', '定语/表语', '通用'],
  ], '', [], 'brief ←?，按 §5.2 自扫根：complicate（author_c4.js）与 complicated（author_c10.js）第 4 参均为空，根词本身无 CEFR 可继，属 §5.7 留空场景，留空；近义 straightforward 简单直接的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('unconcerned', 'adjective', '/ˌʌnkənˈsɜːnd/', 'B1', [], '不关心的；漠不关心的', 'Not interested in something and not troubled by it.', [
    ['对……漠不关心的', 'Not interested in or worried about something that other people care about.', '对别人在意的事情既不感兴趣也不担心的。', '定语表语两用，常与 about、with 连用，指对事情的态度。', 'She seemed unconcerned about the delay.', '她似乎对这次延误毫不在意。', ['unconcerned about the risk', 'remain unconcerned'], ['indifferent'], 'adjective', '定语/表语', '心理'],
    ['镇定的；若无其事的', 'Staying calm and showing no worry in a tense situation.', '在紧张情形下保持镇定、毫不慌乱的样子。', '定语表语两用，形容表情、语气、举止，略带书面色彩。', 'He gave an unconcerned shrug while they shouted at him.', '他们冲他大喊大叫，他只是无所谓地耸了耸肩。', ['an unconcerned look'], [], 'adjective', '定语/表语', '性格'],
  ], '', ['indifferent'], 'brief ←?，按 §5.3 un- 取前缀后词根 concern B1 关心、担忧（author_c4.js 第 4 参；concerned 未单列条目，取在库词根形），「不关心」为否定方向语义直连，B1 继承（判断项）；家族/近义 indifferent 漠不关心的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('unconfirmed', 'adjective', '/ˌʌnkənˈfɜːmd/', 'B1', [], '未经证实的；未确认的', 'Not yet proved to be true or finally agreed.', [
    ['未经证实的', 'Not yet shown to be true by evidence or by an official report.', '尚未被证据或正式报道证明为真实的。', '定语表语两用，常形容消息、细节、身份与数据。', 'The report contains several unconfirmed details.', '这份报道包含数个未经证实的细节。', ['unconfirmed reports', 'remain unconfirmed'], [], 'adjective', '定语/表语', '媒体'],
    ['未最终确定的；未获认可的', 'Not yet finally decided, approved or accepted.', '尚未最终敲定、批准或接受的。', '定语表语两用，常形容订单、预订、名额与安排。', 'We still have an unconfirmed booking for Friday.', '我们还有一个星期五的预订尚未确认。', ['an unconfirmed order'], ['tentative'], 'adjective', '定语/表语', '商务'],
  ], '',['confirm'], 'brief ←?，按 §5.3 un- 取前缀后词根 confirm B1 证实、确认（author_c4.js 第 4 参；confirmed 未单列条目，取在库词根形），否定方向语义直连，B1 继承（判断项）；近义 tentative 暂定的、未确定的（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []');

  W('uncontrolled', 'adjective', '/ˌʌnkənˈtrəʊld/', 'A2', [], '失控的；不受约束的', 'Not limited or managed, so it spreads or changes wildly.', [
    ['失控的；蔓延的', 'Not kept within limits, so it grows or spreads wildly.', '未被加以限制，因而任意向外生长或蔓延的。', '定语表语两用，常形容火势、疫情、增长与通货膨胀。', 'An uncontrolled fire can destroy a whole forest in hours.', '失控的火灾能在几小时内毁掉整片森林。', ['an uncontrolled fire', 'uncontrolled growth'], ['wild'], 'adjective', '定语/表语', '自然'],
    ['（情绪、言行）不加克制的', 'Showing no restraint over feelings, words or actions.', '对情绪、言语或行为不加克制的。', '定语表语两用，形容愤怒、笑声、反应，多含贬义。', 'His uncontrolled laughter annoyed the whole class.', '他毫无节制的笑声惹烦了全班同学。', ['an outburst of uncontrolled anger'], ['hysterical'], 'adjective', '定语/表语', '心理'],
  ], '',['control'], 'brief ←?，按 §5.3 un- 取前缀后词根 control A2 控制、管理（author_c5.js 第 4 参；controlled 未单列条目，取在库词根形），否定方向语义直连，A2 继承（判断项）；近义 wild 失控的、狂野的、hysterical 情绪失控的（队列原样，置首义项、义项 2 各恰好一次）；fam 队列为空故第 10 参 []');

  W('unconvinced', 'adjective', '/ˌʌnkənˈvɪnst/', 'B1', [], '未被说服的；仍有怀疑的', 'Not yet persuaded that something is true or will work.', [
    ['未被说服的', 'Not yet persuaded by an argument or an explanation that something is true.', '尚未被某个论点或解释说服、认可其为真的。', '定语表语两用，常与 by、of 连用，多用于被动语境。', 'The judges remained unconvinced by his explanation.', '评委们仍未被他的解释说服。', ['unconvinced by the evidence', 'remain unconvinced'], ['skeptical'], 'adjective', '定语/表语', '心理'],
    ['对……持怀疑态度的', 'Doubting whether something will happen or achieve what it promises.', '怀疑某事是否会发生或能否兑现承诺的。', '定语表语两用，常与 about、that 连用，指人对计划或效果的态度。', 'She stayed unconvinced that the new tool would save time.', '她仍不相信这个新工具会节省时间。', ['unconvinced about the plan'], [], 'adjective', '定语/表语', '性格'],
  ], '',['convince'], 'brief ←?，按 §5.3 un- 取前缀后词根 convince B1 使信服（author_c5.js 第 4 参；convinced 未单列条目，取在库词根形），否定方向语义直连，B1 继承（判断项）；近义 skeptical 怀疑的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('uncooked', 'adjective', '/ˌʌnˈkʊkt/', 'A1', [], '生的；未煮过的', 'Not heated or prepared with heat before being eaten.', [
    ['未烹煮过的', 'Not having been heated before it is eaten.', '食用之前没有经过加热处理的。', '定语表语两用，常形容谷物、豆类、蛋类与蔬菜。', 'Soak the uncooked beans in water overnight.', '把未煮过的豆子在水里泡上一夜。', ['uncooked rice', 'eat it uncooked'], ['raw'], 'adjective', '定语/表语', '饮食'],
    ['未熟透的；火候不足的', 'Heated for too short a time, so the inside is still soft and not ready to eat.', '加热时间过短，内部仍发软、不能入口的。', '定语表语两用，英式英语常与 well done 相对。', 'The potatoes were uncooked in the middle.', '土豆的中间还没熟透。', ['the uncooked centre of the meat'], [], 'adjective', '定语/表语', '饮食'],
  ], '', ['raw'], 'brief ←?，按 §5.3 un- 取前缀后词根 cook A1 烹饪、煮（author_c5.js 第 4 参；cooked 未单列条目，取在库词根形），否定方向语义直连，A1 继承（判断项）；家族/近义 raw 生的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('uncovered', 'adjective', '/ˌʌnˈkʌvəd/', 'B2', [], '无遮盖的；未被揭露的', 'Not covered over, or not brought to light.', [
    ['无遮盖的；裸露的', 'Having nothing on top of it or over it.', '上面或外面没有任何遮盖物的。', '定语表语两用，常形容容器、伤口、台面与头部。', 'The uncovered pan must be lifted from the heat.', '没有盖锅盖的锅要从火上端开。', ['an uncovered container', 'leave it uncovered'], ['naked'], 'adjective', '定语/表语', '家居'],
    ['未被发现的；未被揭露的', 'Not discovered or brought to light by anyone.', '尚未被任何人发现或揭出来的。', '定语表语两用，常形容错误、漏洞、风险。', 'His mistake stayed uncovered until the final check.', '他的错误直到最后检查才被发现。', ['remain uncovered for years'], [], 'adjective', '定语/表语', '书面'],
  ], '',['uncover'], 'brief 根提示 ←uncover B2 揭开、揭露（自扫 author_u1.js 第 4 参复核为 B2），uncovered 既为 uncover 的过去分词，也是 un- + covered 的否定式，「揭开盖子即无遮盖」语义同源直连，B2 继承（判断项）；近义 naked 裸露的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('undamaged', 'adjective', '/ˌʌnˈdæmɪdʒd/', 'B1', [], '未受损的；完好的', 'Still in perfect condition because nothing has harmed it.', [
    ['未受损坏的；完好的', 'Not harmed, broken or spoiled in any way.', '没有受到任何损坏、破裂或毁坏的。', '定语表语两用，常形容货物、建筑、数据与遗址。', 'The parcel arrived undamaged despite the rain.', '包裹虽经雨淋，送到时仍然完好无损。', ['undamaged goods', 'perfectly undamaged'], ['intact'], 'adjective', '定语/表语', '物流'],
    ['（人）未受伤的', 'Not physically hurt in an accident or an attack.', '在事故或袭击中身体没有受伤的。', '定语表语两用，事故语境中多作表语。', 'Both drivers walked away from the crash undamaged.', '两位司机都从撞车事故中走开，毫发无伤。', ['escape undamaged'], [], 'adjective', '定语/表语', '健康'],
  ], '', ['intact'], 'brief ←?，按 §5.3 un- 取前缀后词根 damaged B1 受损的（author_d3.js 第 4 参；词根形 damage B1 损害，author_d1.js 同级），否定方向语义直连，B1 继承（判断项）；家族/近义 intact 完好无损的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('undecided', 'adjective', '/ˌʌndɪˈsaɪdɪd/', 'A2', [], '未决定的；犹豫不决的', 'Not yet chosen, or unable to make up your mind.', [
    ['尚未决定的', 'Not yet chosen or settled after thinking it over.', '经过考虑仍未选定或定下的。', '定语表语两用，主语可以指人，也可以指事情。', 'We are still undecided about where to go.', '我们还没决定去哪儿。', ['undecided about the date', 'remain undecided'], ['open'], 'adjective', '定语/表语', '社交'],
    ['（选举）胜负未分的', 'Still not decided in an election, with the result not yet known.', '选举中结果尚未揭晓、胜负未定的。', '定语表语两用，多见于选举报道。', 'The seat stayed undecided until the last box was counted.', '这个席位直到最后一个票箱计完才见分晓。', ['an undecided race'], [], 'adjective', '定语/表语', '政治'],
  ], '',['decide'], 'brief ←?，按 §5.3 un- 取前缀后词根 decide A2 决定、抉择（author_d1.js 第 4 参；decided 未单列条目，取在库词根形），否定方向语义直连，A2 继承（判断项）；近义 open 待定的、未定的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('under which', 'preposition', '/ˌʌndə ˈwɪtʃ/', '', [], '在……之下；在……条件下（引导关系从句）', 'Used in a clause to point back to a place below something or to a set of conditions.', [
    ['在……之下（回指地点）', 'Used after a noun in a clause to refer back to a place that is below something.', '用于名词后的从句中，回指位于某物下方的地点。', '介词短语，介词前置与关系代词 which 构成书面语关系结构，后接从句。', 'The box under which he found the key stood in the hall.', '他在下面找到钥匙的那个箱子就放在门厅里。', ['the shelf under which', 'the spot under which'], [], 'preposition', 'null', '通用'],
    ['在……条件下；据此', 'Used after a noun in a clause to refer back to a situation or a set of conditions.', '用于名词后的从句中，回指某种情形或一组条件。', '介词短语，常与 terms、conditions、circumstances 搭配，商务与法律文书常见。', 'They signed a contract under which both sides share the cost.', '双方签订了一份合同，据此分担费用。', ['the terms under which', 'the conditions under which'], ['whereby'], 'preposition', 'null', '商务'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 whereby 凭借那个、借以（队列原样，置义项 2 恰好一次）；fam 队列为空故第 10 参 []').phrase = true;

  W('underclothes', 'noun', '/ˈʌndəkləʊðz/', 'A1', [], '贴身穿的内层衣物', 'Clothes worn next to the skin under other clothes.', [
    ['内衣；贴身衣物', 'Clothes worn next to the skin under outer garments.', '穿在外衣里面、直接贴着身体的衣物。', '常按复数形式使用，指一类衣物的总称，谓语多用复数。', 'Pack a change of underclothes for the trip.', '出门带上一套换洗的内衣。', ['a change of underclothes'], ['underwear'], 'noun', 'countable', '家居'],
  ], '', ['underwear'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 clothes A1 衣服（author_c3.js 第 4 参），「内衣即贴身穿的衣服」语义直连，A1 继承（判断项：取后词根，同 twilight←light 取根方式）；本身按复数形式使用、无常用单数，forms 留空；家族/近义 underwear 内衣（队列原样，fam 入第 10 参，syn 置唯一义项恰好一次）');

  W('underdone', 'adjective', '/ˌʌndəˈdʌn/', '', [], '（食物）煮得欠火候的；半生的', 'Cooked for too little time, so the inside is not fully ready.', [
    ['煮得欠火候的；未熟透的', 'Heated for too short a time, so the food is still soft inside.', '加热时间过短，食物内部仍然发软未熟的。', '定语表语两用，英式英语常用，与 well done 相对，多形容肉与烘焙食品。', 'The steak was underdone and had to go back to the kitchen.', '这份牛排火候不够，只好退回厨房重做。', ['underdone meat', 'slightly underdone'], ['rare'], 'adjective', '定语/表语', '饮食'],
  ], '', [], 'brief ←?，按 §5.3 un- 取前缀后词根 done，但库内 done（author_d7.js）第 4 参虽为 A1 级，义项仅「完成的、做完了的」，与 underdone「食物煮得欠火候」语义不直连，按 §5.1 核对不通过，留空（判断项）；-done 亦不在 §5.4 可继清单；近义 rare （肉类）半熟的（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('undergarments', 'noun', '/ˈʌndəɡɑːmənts/', 'C1', [], '内衣；贴身衣物（复数）', 'Underclothes, especially items such as shirts and underwear.', [
    ['内衣；贴身衣物', 'Clothes worn under outer clothing, such as underwear and vests.', '穿在外衣里面的衣物，如内裤、汗衫等。', 'undergarment 的复数形式单列词条，正式用语，谓语常用复数。', 'The undergarments were packed in a separate bag.', '内衣单独装在一个袋子里。', ['clean undergarments'], ['underwear'], 'noun', 'countable', '家居'],
  ], '',['garment'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 garment C1（正式）衣服（author_g1.js 第 4 参），「内衣」是「衣服」的下位概念，语义直连，C1 继承（判断项：取后词根，同 self-control←control 取根方式）；undergarments 为 undergarment 的复数形式单列词条，按 §4 forms 留空；近义 underwear 内衣（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('undergrad', 'noun', '/ˈʌndəɡræd/', 'B2', [], '（口语）大学本科生', 'A student working for a first degree at a university.', [
    ['大学本科生；本科生', 'A student who is working for a first degree at a university.', '正在大学攻读第一个学位的学生。', '可数，口语常用，是 undergraduate 的截短形式，常与 student、course 连用。', 'Undergrads can borrow twenty books at a time.', '本科生一次可以借二十本书。', ['undergrad students', 'an undergrad course'], ['undergraduate'], 'noun', 'countable', '教育'],
  ], 'undergrads',['undergraduate'], 'brief ←?，按 §5.2 自扫根：库内 undergrad 的直连形式为 undergraduate B2 大学本科生（author_u1.js 第 4 参），undergrad 是其截短形，词首全段共享 undergrad 且语义完全直连，按 §5.6 兄弟派生 B2 继承（判断项，供主 agent 裁定：under- 为前缀性成分，其后仅余 grad 非在库词形，无其他可继根）；近义 undergraduate 本科生（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('underpass', 'noun', '/ˈʌndəpɑːs/', 'A2', [], '地下通道；下穿式立交', 'A path or road that goes under another road or railway.', [
    ['地下通道；下穿通道', 'A passage for people that runs under a road or a railway.', '供行人从道路或铁路下方穿过的通道。', '可数，城市道路设施，常与 pedestrian 连用。', 'Use the underpass to cross the busy road.', '走地下通道穿过这条繁忙的马路。', ['a pedestrian underpass'], ['subway'], 'noun', 'countable', '交通'],
    ['下穿式立交；车行地道', 'A road structure that carries traffic under another road.', '让车辆从另一条道路下方通过的道路构造物。', '可数，交通工程用语，也可指较短的车行隧道。', 'The new underpass will ease traffic near the port.', '新建的下穿式立交将缓解港口附近的交通。', ['a road underpass'], ['tunnel'], 'noun', 'countable', '交通'],
  ], 'underpasses', ['subway'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 pass A2 通过、山口（通道）（author_p1.js 第 4 参），「从下方穿过的通道」与 pass 语义直连，A2 继承（判断项：前缀+词根裁定，同库内 tres+pass←pass A2 先例，author_t7.js）；家族/近义 subway 地下通道、tunnel 隧道（队列原样，fam 入第 10 参 subway，syn 置首义项、义项 2 各恰好一次）');

  W('underrate', 'verb', '/ˌʌndəˈreɪt/', 'B1', [], '低估；评价过低', 'To judge someone or something as less good or important than it really is.', [
    ['低估（能力、价值）', 'To give someone or something too low a rating or too little importance.', '给出的评价或给予的重要性低于实际水平。', '及物动词，宾语是被评价的人或事物，常用于被动式 be underrated。', 'The team underrated their opponents and paid for it.', '球队低估了对手，并为此付出了代价。', ['underrate an ability', 'commonly underrated'], ['underestimate'], 'verb', '及物', '体育'],
    ['（价格）估得过低', 'To set a price or a value below what something is really worth.', '把价格或价值定得低于其实际水平。', '及物动词，商务与金融语境，多用于主动式。', 'They underrate the true cost of shipping every time.', '他们每次都把运费的真实成本估低了。', ['underrate the cost'], [], 'verb', '及物', '商务'],
  ], 'underrates~underrated~underrated~underrating', ['underestimate'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 rate B1 评价、判断（author_r1.js 第 4 参），「评价过低」为否定方向语义直连，B1 继承（判断项：前缀+词根裁定，同 self-control←control 模式）；家族/近义 underestimate 低估（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('underscore', 'verb/noun', '/ˌʌndəˈskɔː/', 'A2', [], '强调；下划线', 'To make something clearly important, or a line drawn under words.', [
    ['强调；着重指出', 'To make it clear that something is important by drawing attention to it.', '通过引人注意来表明某事很重要。', '及物动词，常与 the need、the importance、the fact 连用，书面语常用。', 'The report underscores the need for better training.', '这份报告强调了加强培训的必要性。', ['underscore the need for'], ['underline'], 'verb', '及物', '书面'],
    ['下划线', 'A line drawn under a word or a phrase to give it emphasis.', '画在词或短语下面以示强调的一条线。', '可数，也指计算机输入中的下划线字符。', 'She put an underscore beneath the key term.', '她在关键词下面加了一条下划线。', ['an underscore under the word'], [], 'noun', 'countable', '工具'],
  ], 'underscores~underscored~underscored~underscoring', ['underline'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 score A2 划痕、划开（author_s1.js 第 4 参，义项「划痕；刻痕」），「在词下划一道线以示强调」与 score「划线、刻痕」语义直连，A2 继承（判断项：取 score 的划线义项核对，供主 agent 裁定）；家族/近义 underline 下划线、强调（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('undersea', 'adjective', '/ˌʌndəˈsiː/', 'A1', [], '海底的；水下的', 'Existing, happening or used below the surface of the sea.', [
    ['海底的；海面下的', 'Situated or happening below the surface of the sea.', '位于海面以下或发生在海面以下的。', '多作定语，常与 tunnel、cable、volcano、rocks 连用。', 'They laid an undersea cable between the two islands.', '他们在两座岛屿之间铺设了一条海底电缆。', ['an undersea tunnel', 'undersea rocks'], ['submarine'], 'adjective', '定语', '地理'],
    ['（作业）在水下进行的', 'Carried out under water by divers or by special vehicles.', '由潜水员或专用器械在水下完成的。', '多作定语，常与 survey、camera、exploration 连用。', 'The team made an undersea survey of the wreck.', '这支队伍对沉船进行了水下勘测。', ['an undersea survey'], [], 'adjective', '定语', '科学'],
  ], '', ['submarine'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 sea A1 海（author_s1.js 第 4 参），「海面之下的」与 sea 语义直连，A1 继承（判断项：取后词根，同 twilight←light 取根方式）；家族/近义 submarine 潜水艇、海底的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('undershirt', 'noun', '/ˈʌndəʃɜːt/', 'A1', [], '穿在里层的汗衫', 'A light shirt worn next to the skin under other clothes.', [
    ['汗衫；贴身内衣', 'A light shirt worn under a jacket, jumper or other shirt.', '穿在外套、毛衣或衬衫里面的轻薄内衣。', '可数，美式英语常用，英式英语多说 vest。', 'He wore a plain undershirt beneath the suit.', '他在西装里面穿了一件素色汗衫。', ['a plain undershirt', 'wear an undershirt'], ['vest'], 'noun', 'countable', '家居'],
  ], 'undershirts',['shirt'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 shirt A1 衬衫（author_s2.js 第 4 参），「穿在衬衫里的内衣」与 shirt 语义直连，A1 继承（判断项：取后词根，同 twilight←light 取根方式）；近义 vest 汗衫、内衣（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('underside', 'noun', '/ˈʌndəsaɪd/', 'A1', [], '物体朝下的一面', 'The surface or part of something that faces downwards.', [
    ['底面；下面', 'The lower surface of something, which is not usually visible.', '某物朝下的一面，通常是平时看不见的一面。', '可数，常与 of 连用，指器物、建筑或车辆的下部。', 'Turn the table over to see its underside.', '把桌子翻过来，看看它的底面。', ['the underside of the roof'], ['underneath'], 'noun', 'countable', '家居'],
    ['（动物、叶片的）腹面；下侧', 'The lower side of an animal body, a leaf or a small object.', '动物身体、叶子或小物件的下侧。', '可数，描述生物与自然物体时常用。', 'The beetle was pale on the underside.', '这只甲虫的腹面颜色发白。', ['the underside of a leaf'], [], 'noun', 'countable', '自然'],
  ], 'undersides',['side'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 side A1 面、边（author_s2.js 第 4 参），「朝下的那一面」与 side 语义直连，A1 继承（判断项：取后词根，同 twilight←light 取根方式）；近义 underneath 在下面、底面（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('understandable', 'adjective', '/ˌʌndəˈstændəbl/', 'A1', [], '可以理解的；明白易懂的', 'Easy to understand, or natural in the circumstances.', [
    ['可以理解的；合乎情理的', 'Easy to understand because of the situation.', '由于情况如此而容易被理解的。', '定语表语两用，常以 it 作形式主语，后接 that 从句。', 'His anger is perfectly understandable after the rejection.', '遭到拒绝后他生气，是完全可以理解的。', ['perfectly understandable', 'an understandable mistake'], ['accessible'], 'adjective', '定语/表语', '心理'],
    ['（文字、说明）明白易懂的', 'Written or explained in a way that is easy to follow.', '以容易理解的方式写成或说明的。', '定语表语两用，形容文本、说明、语言与表达。', 'The instructions are clear and understandable to a beginner.', '这些说明写得清楚，初学者也能看懂。', ['clear and understandable'], ['intelligible'], 'adjective', '定语/表语', '教育'],
  ], '', ['intelligible'], 'brief ←?，自扫根 understand A1 理解、明白（author_u1.js 第 4 参）+ -able（-able 在 §5.4 透明后缀清单），「能被理解的」与 understand 语义直连，A1 继承；家族/近义 accessible 易懂的、intelligible 能被理解的（队列原样，fam 入第 10 参 intelligible，syn 置首义项、义项 2 各恰好一次）');

  W('understanding', 'noun', '/ˌʌndəˈstændɪŋ/', 'A1', ['CET4'], '理解；领会；洞察', 'Knowledge of a subject or a situation, gained by learning or being told.', [
    ['理解；领会', 'The knowledge you get by learning about a subject or by being told about it.', '通过学习某个主题或由他人告知而获得的认识。', '不可数，常与 of 连用，也可作定语修饰名词。', 'She has a deep understanding of how the market works.', '她对市场的运作方式有深刻的理解。', ['a deep understanding of', 'beyond understanding'], ['grasp'], 'noun', 'uncountable', '教育'],
    ['深入的了解；洞察', 'A clear and deep knowledge of a person, a problem or a subject, including how it works.', '对某人、某个问题或学科清楚而深入的认识，包括对其运作方式的把握。', '不可数，常与 of、into 连用，也可指掌握的牢固程度。', 'Presenters need a firm grip of the subject and some insight into the audience.', '演讲者既要牢牢掌握主题，也要对听众有所洞察。', ['a good understanding of the data'], ['grip', 'insight'], 'noun', 'uncountable', '媒体'],
  ],'understandings', ['insight'], 'brief 根提示 ←understand A1 理解（自扫 author_u1.js 第 4 参复核为 A1）+ -ing（动名词转名词，-ing 在 §5.4 透明后缀清单），A1 继承；两义项均多作不可数，故 forms 留空；家族 insight 洞察（队列原样，入第 10 参），近义 grasp 掌握、grip 把握、insight 洞察（队列原样，置首义项、义项 2 各恰好一次）；CET4 标签照抄队列');

  W('undervaluation', 'noun', '/ˌʌnˌvæljuˈeɪʃn/', 'A2', [], '把价值估低的行为', 'Judging something to be worth less than it really is.', [
    ['低估；估价过低', 'The act of putting a value on something that is too low.', '把某物的价值估得过低的行为。', '可数，也可作不可数，金融与商务常用，常与 of 连用。', 'The undervaluation of the shares harmed small investors.', '股票被低估损害了小投资者的利益。', ['the undervaluation of assets'], ['underestimate'], 'noun', 'countable', '金融'],
  ], 'undervaluations',['value'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 value A2 价值、估价（author_v1.js 第 4 参）；valuation 未单列条目，按 value + -ation（e→∅+ation 正字类）仍指向同一在库根，「估价过低」为否定方向语义直连，A2 继承（判断项：前缀+词根裁定，供主 agent 裁定）；近义 underestimate 低估（队列原样，置唯一义项恰好一次）；fam 队列为空故第 10 参 []');

  W('undervalue', 'verb', '/ˌʌnˈvæljuː/', 'A2', [], '低估……的价值；看轻', 'To judge or treat something as worth less than it really is.', [
    ['低估（价值）；估价过低', 'To put too low a value on something.', '把某物的价值定得过低。', '及物动词，常用于被动式 be undervalued，宾语为财产、资产、股票。', 'Buyers tend to undervalue old furniture.', '买家往往会低估旧家具的价值。', ['undervalue a property'], ['underestimate'], 'verb', '及物', '金融'],
    ['看轻；低估（人或作用）', 'To fail to recognise how good or important someone or something is.', '没有认识到某人或某事物有多好、多重要。', '及物动词，宾语常为人才、工作、作用。', 'The company undervalues the work of its junior staff.', '这家公司看轻了基层员工的工作。', ['undervalue the role of'], [], 'verb', '及物', '商务'],
  ], 'undervalues~undervalued~undervalued~undervaluing',['value'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 value A2 价值、估价（author_v1.js 第 4 参），「估价过低、看轻价值」为否定方向语义直连，A2 继承（判断项：前缀+词根裁定，同 self-control←control 模式）；近义 underestimate 低估（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('underwater', 'adjective', '/ˌʌndəˈwɔːtə/', 'A1', [], '水下的；浸在水中的', 'Below the surface of water, or completely covered by water.', [
    ['水下的；水面下的', 'Situated or used below the surface of water.', '位于水面以下或在水面以下使用的。', '定语表语两用，常与 camera、cable、volcano、rocks 连用。', 'An underwater camera filmed the seal colony.', '一台水下摄像机拍下了那片海豹栖息地。', ['an underwater camera', 'underwater rocks'], ['submarine'], 'adjective', '定语/表语', '自然'],
    ['被水淹没的', 'Completely covered by water.', '完全被水盖住的。', '定语表语两用，多形容土地、道路与低洼地带。', 'The field stayed underwater for a week after the flood.', '洪水过后，这片地在水下泡了一周。', ['stay underwater'], [], 'adjective', '定语/表语', '环境'],
  ], '',['water'], 'brief ←?，按 §5.3 首成分 under- 为前缀性成分不作根，取其后词根 water A1 水（author_w1.js 第 4 参），「水面之下的」与 water 语义直连，A1 继承（判断项：取后词根，同 twilight←light 取根方式）；近义 submarine 潜水艇、海底的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('undeveloped', 'adjective', '/ˌʌndɪˈveləpt/', 'A2', [], '未开发的；不发达的', 'Not grown, built or improved to a full level.', [
    ['（土地、资源）未开发的', 'Not yet used or built on for industry, housing or trade.', '尚未用于工业、住房或商业开发的。', '定语表语两用，常形容土地、地区与自然资源。', 'The undeveloped plot lies beside the river.', '这块尚未开发的地块就在河边。', ['undeveloped land'], ['underdeveloped'], 'adjective', '定语/表语', '地理'],
    ['（能力、想法）未发展的；不成熟的', 'Not yet grown or brought to a full state.', '尚未成长或发展到完整状态的。', '定语表语两用，形容技能、器官、想法与市场。', 'His reading skills are still undeveloped.', '他的阅读能力仍未发展成熟。', ['undeveloped skills'], [], 'adjective', '定语/表语', '教育'],
  ], '', ['underdeveloped'], 'brief ←?，按 §5.3 un- 取前缀后词根 develop A2 发展、开发（author_d1.js 第 4 参；developed 未单列条目，取在库词根形），否定方向语义直连，A2 继承（判断项）；家族/近义 underdeveloped 欠发达的、未充分发展的（队列原样，fam 入第 10 参，syn 置首义项恰好一次）');

  W('undiluted', 'adjective', '/ˌʌndaɪˈluːtɪd/', 'B2', [], '未稀释的；十足的', 'Not mixed with anything else; complete and strong.', [
    ['未稀释的；纯的', 'Not mixed with water, alcohol or another liquid.', '没有掺水、酒精或其他液体的。', '定语表语两用，常形容饮料、试剂与油类，也可作表语后置。', 'Drink the juice undiluted if you can bear the taste.', '受得住这味道的话，就原液喝这果汁。', ['undiluted juice', 'drink it undiluted'], ['neat'], 'adjective', '定语/表语', '饮食'],
    ['（感情、性质）十足的；未冲淡的', 'Complete and not weakened by anything else.', '完全的、没有被任何东西削弱的。', '定语表语两用，形容恐惧、喜悦、怨恨等抽象事物。', 'The news met with undiluted scorn from the critics.', '这条消息遭到了评论家们十足的讥讽。', ['undiluted pleasure'], [], 'adjective', '定语/表语', '情感'],
  ], '',['dilute'], 'brief ←?，按 §5.3 un- 取前缀后词根 dilute B2 稀释、冲淡（author_d1.js 第 4 参），否定方向语义直连，B2 继承（判断项）；近义 neat （酒）不掺水的、纯的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('undocumented', 'adjective', '/ˌʌnˈdɒkjumentɪd/', 'A2', [], '无合法证件的；未记录的', 'Not supported by official papers or written down.', [
    ['（人）无合法证件的', 'Not having the official documents that the law requires.', '没有持有法律要求的官方证件的。', '定语表语两用，常指移民、居民与务工人员。', 'Undocumented workers cannot open a bank account.', '没有合法证件的工人无法开立银行账户。', ['undocumented workers'], ['illegal'], 'adjective', '定语/表语', '法律'],
    ['（信息）未记录的；无出处的', 'Not written down or supported by evidence and sources.', '没有写下来、也没有证据和出处支持的。', '定语表语两用，常形容事实、数据、要求与来源。', 'The claims in the article were undocumented.', '这篇文章里的说法没有文献依据。', ['undocumented claims'], [], 'adjective', '定语/表语', '书面'],
  ], '',['document'], 'brief ←?，按 §5.3 un- 取前缀后词根 document A2 文件、记录（author_d2.js 第 4 参；documented 未单列条目，取在库词根形），否定方向语义直连，A2 继承（判断项）；近义 illegal 非法的（队列原样，置首义项恰好一次）；fam 队列为空故第 10 参 []');

  W('uneducated', 'adjective', '/ˌʌnˈedʒukeɪtɪd/', 'A2', [], '未受过教育的；无知的', 'Having had little schooling, or lacking knowledge.', [
    ['未受正规教育的；没上过学的', 'Having had little or no formal schooling.', '几乎没有受过正规学校教育的。', '定语表语两用，可形容人及其出身与成长背景。', 'He came from an uneducated family in a remote village.', '他出身于一个偏远村庄里没有文化的家庭。', ['an uneducated background'], ['illiterate'], 'adjective', '定语/表语', '教育'],
    ['无知的；缺乏知识的', 'Not having enough knowledge about a particular subject.', '对某个主题掌握的知识不够的。', '定语表语两用，形容人的判断与看法，语气较直接。', 'The report was based on uneducated guesses about the data.', '这份报告建立在对数据的无知猜测之上。', ['an uneducated guess'], ['ignorant'], 'adjective', '定语/表语', '心理'],
  ], '', ['ignorant', 'illiterate'], 'brief ←?，按 §5.3 un- 取前缀后词根 educate A2 教育、培养（author_e1.js 第 4 参；educated 未单列条目，取在库词根形），否定方向语义直连，A2 继承（判断项）；家族/近义 ignorant 无知的、illiterate 不识字的（队列原样，fam 入第 10 参，syn 置义项 2、义项 1 各恰好一次）');

  W('uneven', 'adjective', '/ˌʌnˈiːvn/', 'A2', [], '不平的；不均匀的', 'Not level, smooth or regular in shape, quality or amount.', [
    ['不平的；凹凸不平的', 'Not flat or smooth, with parts that rise and fall.', '不平坦、有高低起伏的。', '定语表语两用，常形容路面、地面、边缘与表面。', 'The road surface is uneven after the cold weather.', '经过一段寒冷天气，路面变得坑洼不平。', ['an uneven surface'], ['rough'], 'adjective', '定语/表语', '环境'],
    ['不均匀的；不规则的', 'Not the same in quality, size or amount in different parts.', '不同部分在质量、大小或数量上并不一致的。', '定语表语两用，常形容分布、增长、表现与裁切。', 'The growth of the company has been uneven across regions.', '这家公司各地区的发展并不均衡。', ['uneven growth', 'an uneven cut'], ['irregular', 'odd'], 'adjective', '定语/表语', '商务'],
  ], '', ['irregular', 'rough'], 'brief ←?，按 §5.3 un- 取前缀后词根 even A2 平的、偶数的（author_e2.js 第 4 参，取其形容词义「平坦的」），「不平坦、不均匀」为否定方向语义直连，A2 继承（判断项：根词条目以副词义为主，取其形容词义核对）；家族/近义 irregular 不规则的、odd 不齐的、rough 粗糙不平的（队列原样，fam 入第 10 参 irregular、rough，syn 置义项 2 ×2、义项 1 各恰好一次）');

  W('unexpected', 'adjective', '/ˌʌnɪkˈspektɪd/', 'A1', [], '未曾料到的；毫无准备的', 'Not thought about or prepared for before it happens.', [
    ['意外的；想不到的', 'Happening when you are not ready for it and did not imagine it.', '在没有准备、也没有料到的时候发生的。', '定语表语两用，常以 it 作形式主语，后接 that 从句。', 'The news came as an unexpected blow to the team.', '这个消息对团队来说是个意外的打击。', ['an unexpected result', 'an unexpected visit'], ['sudden'], 'adjective', '定语/表语', '通用'],
    ['偶然的；随机的', 'Chosen or happening by chance rather than by any plan.', '出于偶然而非出于计划的。', '定语表语两用，常与 visit、change、check 搭配，强调无从预料。', 'Checks are made at random, so every inspection feels unexpected to the staff.', '检查是随机进行的，所以每次抽查都让员工感到意外。', ['an unexpected random check'], ['random'], 'adjective', '定语/表语', '社会'],
  ], '', ['sudden'], 'brief ←?，按 §5.3 un- 取前缀后词根 expect（词形 expected A1 形容词条，author_e5.js；词根 expect A1，author_e2.js 第 4 参），否定方向语义直连，A1 继承（判断项：根词与其分词形容词同级）；家族 sudden 突然的（队列原样，入第 10 参），近义 sudden 突然的、random 随机的（队列原样，置首义项、义项 2 各恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
