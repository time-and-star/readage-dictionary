/* data/words/cet/author_r6.js — 常用词 R 批次 6，缺口 regional ~ rental，共 31 条
 * （30 单词 + 1 短语 rely on）。来源：family + 义项近反义缺口，refs 逐字照抄队列；
 * 考级标签照抄队列（CET4 15 条：regional、regretful、regulation、rejection、relation、
 * relationship、reliable、relief、religious、remainder、remarkable、reminder、removal、
 * rendering、rental；CET6 1 条：renowned；其余 15 条无标签）。
 * 扫根结论：regular A2、relate B1、relative B1、relax A2、remain B1、remind A2、render C1、
 * renown C1（brief 根提示）；region B1、regret B1、regulate B2、reject B1、state A2、rely B1、
 * relieve B2、religion B1、load B1、locate B1、remark B1、remove A2、rent B1（本批扫描）——
 * · 透明后缀：regional←region B1 + -al、regretful←regret B1 + -ful、regularly←regular A2 + -ly、
 *   regulation←regulate B2 + -ion、rejection←reject B1 + -ion、relation←relate B1 + -ion、
 *   reliable←rely B1（y→i + -able）、relief←relieve B2（ve→f，同 grief/grieve 先例）、
 *   religious←religion B1 + -ous、removal←remove A2 + -al、rental←rent B1 + -al。
 * · re- 前缀取其后词根（语义直连）：reload←load B1、relocate←locate B1、
 *   reinstate←state A2（「使回到原先状态」语义直连，判断项披露）；
 *   remarkable←remark B1（remark 全段可见为派生基，同 recovery←recover 先例，判断项披露）。
 * · 随根单列：relatives←relative B1（复数专义，同 records 先例）、remaining/remains←remain B1、
 *   reminder←remind A2、rendering←render C1、renowned←renown C1（均 brief 根提示，
 *   related 与 relation 同指 relate B1 级别自洽）。
 * · 留空项（brief ←? 扫描后无库内可继根）：rehash（hash 不在库，组合词缺席同 overweight
 *   先例）、reimburse（-burse 与库内 purse 词形不对应，同 refurbish 先例）、
 *   relationship（-ship 不在可继承清单，同 ownership/orphanage 先例）、
 *   relinquish（linquere 不在库，无可见词根）、remiss（re+miss 切词假象，同 portend 类）、
 *   remorse（morse 不在库）、rely on（短语按规范第 4 参留空）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_r6.js 必须在 _cet_helper.js 之后加载');

  W('regional', 'adjective', '/rɪˈdʒiːənl/', 'B1', ['CET4'], '地区的；区域的', 'Of or relating to a particular region or area.', [
    ['地区的；区域的', 'Belonging to or connected with a particular region or area.', '属于某一地区或与之相关的。', '多作定语；反义全国性、全球性。', 'The regional government asked for more funding.', '地区政府要求更多拨款。', ['regional government', 'regional accent'], ['local'], 'adjective', '定语', '地理'],
  ], '',['local', 'region'], '←region B1 地区 + -al（透明形容词后缀），B1 继承（brief 显示 ←?，本批扫描 region）；家族/近义 local 当地的、本地的（队列原样）');

  W('regretful', 'adjective', '/rɪˈɡretfl/', 'B1', ['CET4'], '感到懊悔的', 'Feeling or showing that you are sorry about something you have done.', [
    ['懊悔的；后悔的', 'Feeling or showing that you are sorry about something you have done.', '对做过的事感到遗憾或后悔。', '多作表语，常与 about 连用。', 'She felt regretful about her sharp words.', '她对自己尖刻的话感到懊悔。', ['feel regretful', 'regretful about'], ['sorry'], 'adjective', '表语', '情感'],
  ], '',['sorry', 'regret'], '←regret B1 后悔 + -ful（透明形容词后缀），B1 继承（brief 显示 ←?，本批扫描 regret）；家族/近义 sorry 抱歉的、遗憾的（队列原样）');

  W('regularly', 'adverb', '/ˈreɡjələli/', 'A2', [], '经常；定期地', 'Often, or at even intervals in time.', [
    ['经常；定期地', 'Often, or at even intervals in time.', '频繁地；或按固定时间间隔地。', '修饰动词。也可修饰整个句子，表示动作有规律。', 'I regularly go to the library after class.', '我课后经常去图书馆。', ['check regularly', 'used regularly'], ['often'], 'adverb', '不及物', '通用'],
  ], '',['regular'], 'brief 根提示 ←regular A2 有规律的 + -ly（透明副词后缀），A2 继承；近义 often 经常、常常（队列原样）');

  W('regulation', 'noun', '/ˌreɡjuˈleɪʃn/', 'B2', ['CET4'], '规章；管理调控', 'An official rule, or the activity of controlling something.', [
    ['规章；条例', 'An official rule made by an authority such as a government.', '政府等权威机构制定的官方规定。', '可数；常用复数 regulations 指具体条文。', 'The new safety regulations take effect in July.', '新的安全条例七月生效。', ['safety regulations', 'break the regulations'], ['rule', 'statute'], 'noun', 'countable', '法律'],
    ['管理；调控', 'The activity of controlling something such as an industry or a price.', '对某行业或价格等进行控制管理的行为。', '不可数；常见于经济与公共政策语境。', 'Price regulation is handled by the commission.', '价格调控由委员会负责。', ['market regulation', 'regulation of'], [], 'noun', 'uncountable', '商务'],
  ], 'regulations',['rule', 'regulate'], '←regulate B2 管制 + -ion（透明名词后缀，regulate 全段可见），B2 继承（brief 显示 ←?，本批扫描 regulate）；家族 rule 规则、规定，近 rule 规则、statute 成文法（队列原样）');

  W('rehash', 'verb/noun', '/ˌriːˈhæʃ/', '', [], '旧调重弹；改头换面的旧材料', 'To present old ideas in a slightly different way, or such material itself.', [
    ['旧调重弹；改头换面', 'To use the same old ideas again but present them in a slightly different way.', '把旧想法稍加包装后再次拿出。', '可及物，常含贬义。', 'The article just rehashes the same old arguments.', '这篇文章不过是把陈词滥调换个说法。', ['rehash an idea'], ['recycle'], 'verb', '及物', '媒体'],
    ['改头换面的旧材料', 'Something presented as new but really based on old ideas.', '号称新颖实则源自旧想法的东西。', '可数。', 'The sequel is a rehash of the first film.', '这部续集是第一部电影的翻版。', ['a mere rehash'], [], 'noun', 'countable', '媒体'],
  ], 'rehashes~rehashed~rehashed~rehashing', [], 're- 前缀不作成分，其后 hash 不在库（组合词成分缺席，同 overweight 先例），留空；近义 recycle 循环利用、旧料翻新（队列原样）');

  W('reimburse', 'verb', '/ˌriːɪmˈbɜːs/', '', [], '报销；偿还', 'To pay back money that somebody has spent for you.', [
    ['报销；偿还', 'To pay back money that somebody has spent for you.', '把别人为你垫付的钱还给他。', '可及物，常与 for 连用；正式用语。', 'The company reimbursed her for the travel costs.', '公司报销了她的差旅费。', ['reimburse the cost', 'reimbursed in full'], ['compensate', 'refund'], 'verb', '及物', '商务'],
  ], 'reimburses~reimbursed~reimbursed~reimbursing', ['compensate'], '拉丁 embourser（放进钱包）——re-+im+burse 无库内可见词根（库内 purse 与 -burse 词形不对应，同 refurbish 先例），留空；家族/近 compensate 补偿、赔偿，refund 退款、偿还（队列原样）');

  W('reinstate', 'verb', '/ˌriːɪnˈsteɪt/', 'A2', [], '恢复；使重新掌权', 'To put somebody or something back into a position or state they were in before.', [
    ['恢复；使重新掌权', 'To put somebody or something back into a position or state they were in before.', '把某人或某物放回原先的职位或状态。', '可及物；正式用语，多用于官职与制度。', 'The board reinstated the manager after the appeal.', '上诉后董事会恢复了那位经理的职务。', ['reinstate somebody', 'reinstate a rule'], ['restore'], 'verb', '及物', '职业'],
  ], 'reinstates~reinstated~reinstated~reinstating',['state'], 're-、in- 前缀不作成分，取其后 state A2（状态、官职）——「使回到原先状态」语义直连，A2 继承（brief 显示 ←?，本批扫描 state，判断项披露）；近义 restore 恢复、修复（队列原样）');

  W('rejection', 'noun', '/rɪˈdʒekʃn/', 'B1', ['CET4'], '拒绝；否决', 'The act of refusing something, or refusing to allow it.', [
    ['拒绝；谢绝', 'The act of refusing to accept or consider something.', '不接受或不考虑某事物的行为。', '可数或不可数。', 'She was hurt by the rejection of her idea.', '她的想法被拒绝让她很难过。', ['a rejection letter', 'meet with rejection'], [], 'noun', 'uncountable', '社会'],
    ['否决；驳回', 'The act of refusing to allow or approve something.', '不允许或不批准某事的行为。', '可数，常见于法律与政治语境。', 'The committee voted for rejection of the proposal.', '委员会投票否决了这项提案。', ['vote for rejection'], ['veto'], 'noun', 'countable', '法律'],
  ], 'rejections',['reject'], '←reject B1 拒绝 + -ion（透明名词后缀），B1 继承（brief 显示 ←?，本批扫描 reject）；近义 veto 否决、否决权（队列原样）');

  W('related', 'adjective', '/rɪˈleɪtɪd/', 'B1', [], '有关联的；相关的', 'Connected with somebody or something in some way.', [
    ['有关联的；相关的', 'Connected with somebody or something in some way.', '与某人或某事有某种联系。', '常作定语或表语，常与 to 连用；分词形容词。', 'The two issues are closely related.', '这两个问题密切相关。', ['closely related', 'related to'], ['relative', 'relevant'], 'adjective', '定语/表语', '通用'],
  ], '', ['relevant'], 'brief 根提示 ←relate B1 联系 + -ed（分词形容词），B1 继承（与 relation 同根同级）；家族 relevant 相关的、切题的，近 relative 相对的、相关的、relevant 切题的（队列原样）');

  W('relation', 'noun', '/rɪˈleɪʃn/', 'B1', ['CET4'], '关系；亲戚', 'The way people or groups feel and behave towards each other, or a family member.', [
    ['关系；联系', 'The way two people or groups feel and behave towards each other.', '两人或两团体之间相处的方式。', '可数，常与 between、with 连用。', 'Relations between the two countries have improved.', '两国关系已经改善。', ['the relation between', 'trade relations'], [], 'noun', 'countable', '社交'],
    ['亲戚；亲属', 'Somebody who is a member of your family.', '家族中的成员。', '可数；较正式，日常口语多用 relative。', 'She invited all her relations to the wedding.', '她邀请了所有亲戚参加婚礼。', ['a distant relation'], ['relative'], 'noun', 'countable', '家庭'],
  ], 'relations',['relative', 'relate'], '←relate B1 联系 + -ion（透明名词后缀），B1 继承（brief 显示 ←?，本批扫描 relate；与 related 同根同级自洽）；家族/近义 relative 亲戚、相对的（队列原样）');

  W('relationship', 'noun', '/rɪˈleɪʃnʃɪp/', '', ['CET4'], '关系；恋爱关系', 'The way people or groups are connected, or a romantic connection between two people.', [
    ['关系；联系', 'The way two people or groups are connected and feel about each other.', '两人或两团体之间的关联及彼此的看法。', '可数；比 relation 更口语化。', 'They have a good working relationship.', '他们工作关系融洽。', ['a close relationship', 'relationship between'], [], 'noun', 'countable', '社交'],
    ['恋爱关系', 'A romantic or sexual connection between two people.', '两人之间恋爱或性方面的关系。', '可数；常见搭配 start a relationship。', 'They began a relationship last spring.', '去年春天他们开始交往。', ['start a relationship'], ['romance'], 'noun', 'countable', '情感'],
  ], 'relationships', [], 'relation + -ship；-ship 后缀不在可继承清单（同 ownership/orphanage 先例），relation 本批入库仍留空；近义 romance 爱情故事、恋爱关系（队列原样）');

  W('relatives', 'noun', '/ˈrelətɪvz/', 'B1', [], '亲戚；亲属', 'Members of your family other than your parents, children, husband, or wife.', [
    ['亲戚；亲属', 'Members of your family other than your parents, children, husband, or wife.', '父母、子女、配偶以外的家庭成员。', '用作复数；单数 relative 指单个亲戚。', 'Relatives came from all over the country for the funeral.', '亲戚们从全国各地赶来参加葬礼。', ['close relatives', 'relatives and friends'], ['family', 'folk', 'kin'], 'noun', 'countable', '家庭'],
  ], '',['relative'], 'relative 的复数专义单列词条（同 records 先例），brief 根提示 ←relative B1（形容词/名词），B1 继承；近 family 家人、folk 亲属或大伙、kin 亲属（队列原样）');

  W('relaxed', 'adjective', '/rɪˈlækst/', 'A2', [], '放松的；悠闲的', 'Calm and not worried, or easy and informal.', [
    ['放松的；自在的', 'Feeling calm and not worried or nervous.', '感到平静、不紧张。', '多作表语；分词形容词。', 'I felt relaxed after the long bath.', '泡完长澡后我觉得很放松。', ['feel relaxed', 'relaxed atmosphere'], ['easy'], 'adjective', '表语', '心理'],
    ['悠闲的；轻松随意的', 'Easy and informal, without pressure or hurry.', '轻松随意、不慌不忙的。', '多作定语，形容氛围与场合。', 'The office has a relaxed dress code.', '这家办公室有着轻松的着装要求。', ['relaxed mood', 'relaxed pace'], ['easy-going'], 'adjective', '定语', '性格'],
  ], '', ['easy-going'], 'brief 根提示 ←relax A2 放松 + -ed（分词形容词），A2 继承；家族 easy-going 随和的、不拘束的，近 easy 惬意的、容易的，easy-going 悠闲随和的（队列原样）');

  W('reliable', 'adjective', '/rɪˈlaɪəbl/', 'B1', ['CET4'], '可信赖的；稳固耐用的', 'Somebody or something that can be trusted, or that works steadily without breaking down.', [
    ['可信赖的；可靠的', 'Somebody or something that can be trusted to work or behave well.', '可以信任其表现的人或物。', '可修饰人或物，常作定语。', 'He is reliable and always meets deadlines.', '他很可靠，总能如期交稿。', ['a reliable source', 'reliable friend'], ['credible', 'responsible', 'sure'], 'adjective', '定语/表语', '性格'],
    ['稳固耐用的', 'Something that is safe and steady and does not often break down.', '安全稳定、不易出故障的。', '多作定语，形容设备与结构。', 'The old truck is still reliable after ten years.', '旧卡车用了十年依然稳当。', ['reliable performance', 'highly reliable'], ['safe', 'solid', 'steady'], 'adjective', '定语', '工业'],
  ], '',['credible', 'responsible', 'rely'], '←rely B1 信赖 + -able（能……的，y→i 正字），B1 继承（brief 显示 ←?，本批扫描 rely）；家族 credible 可信的、responsible 负责任的，近 credible 可信的、responsible 可靠尽责的、safe 安全的、sure 确定的、solid 稳固的、steady 稳定的（队列原样）');

  W('relief', 'noun', '/rɪˈliːf/', 'B2', ['CET4'], '缓解；宽慰；救济', 'A lessening of pain or worry, or help given to people in trouble.', [
    ['减轻；缓解', 'A lessening of pain, worry, difficulty, or a burden.', '痛苦、忧虑、困难或负担的减轻。', '不可数，常用 relief from。', 'The medicine brought relief from the pain.', '这药缓解了疼痛。', ['bring relief', 'relief from'], ['remedy'], 'noun', 'uncountable', '健康'],
    ['宽慰；令人宽慰的人或事', 'A feeling of happiness when a worry ends, or somebody who brings that feeling.', '担忧结束时的轻松感，或带来这种轻松的人。', '可数或不可数；常见 a sigh of relief。', 'She sighed with relief when the results came.', '结果出来时她松了口气。', ['a sigh of relief', 'a relief to'], ['refreshment'], 'noun', 'countable/uncountable', '情感'],
    ['救济；救援', 'Help given to people who are poor, sick, or in danger.', '对贫困、患病或遇险者的帮助。', '不可数，也可指救济物资。', 'Emergency relief reached the flooded villages.', '紧急救援物资已送到被淹的村庄。', ['emergency relief', 'relief effort'], ['rescue', 'mercy'], 'noun', 'uncountable', '社会'],
  ], 'reliefs',['relieve'], '←relieve B2 减轻 + f（ve→f 正字，同 grief/grieve 先例），B2 继承（brief 显示 ←?，本批扫描 relieve）；近 remedy 缓解、治疗、refreshment 轻松提神、rescue 救援、mercy 仁慈怜悯（救济多出于怜悯）（队列原样）');

  W('religious', 'adjective', '/rɪˈlɪdʒəs/', 'B1', ['CET4'], '宗教的；虔诚的', 'Connected with religion, or having a strong belief in God.', [
    ['宗教的；与宗教有关的', 'Connected with religion or with a particular faith.', '与宗教或某一特定信仰有关的。', '多作定语。', 'They observed religious festivals every year.', '他们每年庆祝宗教节日。', ['religious belief', 'religious festival'], ['sacred'], 'adjective', '定语', '宗教'],
    ['虔诚的；笃信宗教的', 'Having a strong belief in God and following its rules closely.', '笃信神明并严格遵守教规的。', '多作定语或表语，形容人。', 'She comes from a deeply religious family.', '她出身于一个非常虔诚的家庭。', ['deeply religious', 'religious person'], [], 'adjective', '定语/表语', '宗教'],
  ], '',['sacred', 'religion'], '←religion B1 宗教 + -ous（透明形容词后缀），B1 继承（brief 显示 ←?，本批扫描 religion）；家族/近义 sacred 神圣的、庄严的（队列原样）');

  W('relinquish', 'verb', '/rɪˈlɪŋkwɪʃ/', '', [], '正式放弃；交出', 'To formally give up something such as power, control, or a claim.', [
    ['正式放弃；交出', 'To formally give up something such as power, control, or a claim.', '正式交出权力、控制权或权利要求等。', '可及物；正式用语。', 'The chairman relinquished his seat last year.', '主席去年让出了席位。', ['relinquish control', 'relinquish a claim'], ['surrender', 'waive'], 'verb', '及物', '法律'],
  ], 'relinquishes~relinquished~relinquished~relinquishing', ['waive'], '拉丁 relinquere（re- + linquere 留下）——linquere/linquish 不在库，无库内可见词根，留空；家族 waive 放弃（权利）、不索要，近 surrender 投降、交出，waive 放弃（权利）（队列原样）');

  W('reload', 'verb', '/ˌriːˈləʊd/', 'B1', [], '重新装载；重新装填', 'To load something into a machine or weapon again.', [
    ['重新装载；重新装填', 'To load something into a machine or weapon again.', '把东西再次装入机器或武器。', '可及物，也可不及物。', 'The printer stopped so he could reload the paper.', '打印机停了，他好重新装纸。', ['reload the page', 'reload a weapon'], ['refresh'], 'verb', '及物', '工具'],
  ], 'reloads~reloaded~reloaded~reloading',['load'], 're- 前缀不作成分，取其后 load B1 装载（「再次装入」语义直连），B1 继承（brief 显示 ←?，本批扫描 load）；近义 refresh 刷新、使恢复（队列原样）');

  W('relocate', 'verb', '/ˌriːəʊˈleɪt/', 'B1', [], '迁移；搬迁', 'To move to a new place to live or work.', [
    ['迁移；搬迁', 'To move to a new place to live or work.', '搬到新的地方居住或工作。', '多作不及物，常与 to 连用；也可及物。', 'The company relocated to a cheaper site.', '公司迁到了更便宜的场地。', ['relocate to', 'relocate the office'], ['migrate', 'move'], 'verb', '不及物', '商务'],
  ], 'relocates~relocated~relocated~relocating',['locate'], 're- 前缀不作成分，取其后 locate B1 定位、设置于（「迁到别处安置」语义直连），B1 继承（brief 显示 ←?，本批扫描 locate）；近义 migrate 迁移、移居，move 搬动（队列原样）');

  W('rely on', 'verb', '/rɪˈlaɪ ɒn/', '', [], '依靠；信赖', 'To depend on somebody or something to do what you need or expect.', [
    ['依靠；信赖', 'To depend on somebody or something to do what you need or expect.', '指望某人或某物做你需要或期待的事。', '及物短语，宾语置于其后；on 也可换成 upon。', 'You can rely on her to finish the work on time.', '你可以指望她按时完成工作。', ['rely on somebody', 'rely heavily on'], ['trust'], 'verb', '及物', '通用'],
  ], '', ['trust'], 'rely + on；家族/近义 trust 信任、信赖（队列原样）。短语按规范第 4 参 CEFR 留空').phrase = true;

  W('remainder', 'noun', '/rɪˈmeɪndə/', 'B1', ['CET4'], '剩余部分；余数', 'The part left after the rest has gone, or the amount left after a calculation.', [
    ['剩余部分', 'The part of something that is left after the rest has been used or dealt with.', '其余部分用掉或处理后剩下的部分。', '可数，常与 the 连用。', 'We ate the pizza and the children finished the remainder.', '我们吃了披萨，孩子们吃完了剩下的。', ['the remainder of', 'the remainder of the year'], ['remnant', 'rest'], 'noun', 'countable', '通用'],
    ['余数', 'The amount that is left over after a division or subtraction.', '减法或除法后剩下的数。', '可数；数学用语。', 'The remainder is three when ten is divided by seven.', '十除以七余三。', ['leave a remainder'], [], 'noun', 'countable', '教育'],
  ], 'remainders', ['remnant', 'rest'], 'brief 根提示 ←remain B1 剩留 + -der（名词后缀），B1 继承；家族 remnant 残余物、rest 剩余部分，近 remnant 残余、rest 剩余（队列原样）');

  W('remaining', 'adjective', '/rɪˈmeɪnɪŋ/', 'B1', [], '剩下的；剩余的', 'Still left after part has been taken or dealt with.', [
    ['剩下的；剩余的', 'Still left after part has been taken or dealt with.', '其余的处理完后仍然留下的。', '常用作定语；分词形容词。', 'We finished the remaining tasks before lunch.', '午饭前我们完成了剩下的任务。', ['the remaining time', 'remaining balance'], ['left'], 'adjective', '定语', '通用'],
  ], '', ['left'], 'brief 根提示 ←remain B1 剩留 + -ing（透明后缀，分词形容词），B1 继承；家族/近义 left 剩下的、余下的（队列原样）');

  W('remains', 'noun', '/rɪˈmeɪnz/', 'B1', [], '遗迹；遗骸', 'The parts of an old building still standing, or what is left of a dead person or thing.', [
    ['遗迹；遗址', 'The parts of an old building or structure that still stand.', '古老建筑仍然矗立的部分。', '用作复数。', 'Tourists visited the remains of the old castle.', '游客参观了古城堡的遗迹。', ['ancient remains', 'the remains of'], ['ruin', 'wreck'], 'noun', 'countable', '历史'],
    ['遗骸；残余物', 'The dead body of a person or animal, or what is left of something.', '人或动物的尸体，或某物的残留部分。', '用作复数。', 'The remains were buried beside the church.', '遗骸葬在教堂旁边。', ['human remains', 'what remains'], ['fossil', 'remnant'], 'noun', 'countable', '通用'],
  ],'remains', ['fossil', 'remnant'], 'remain 的复数形式单列词条（队列官方派生），brief 根提示 ←remain B1，B1 继承；家族 fossil 化石、remnant 残余，近 fossil 化石、remnant 残余、ruin 废墟、wreck 残骸（队列原样）');

  W('remarkable', 'adjective', '/rɪˈmɑːkəbl/', 'B1', ['CET4'], '非凡的；显著的', 'Very good or unusual and deserving attention, or large enough to be noticed.', [
    ['非凡的；杰出的', 'Very good or unusual and deserving attention.', '非常出色或不寻常、值得注意。', '常作定语，褒义。', 'She has a remarkable talent for music.', '她有非凡的音乐天赋。', ['remarkable achievement', 'remarkable talent'], ['extraordinary', 'noteworthy', 'singular'], 'adjective', '定语', '通用'],
    ['显著的；值得注意的', 'Large or obvious enough to be noticed easily.', '大或明显到容易被察觉。', '中性，描述变化与差异。', 'The improvement has been remarkable this year.', '今年的进步十分显著。', ['a remarkable change'], ['signal'], 'adjective', '定语', '科学'],
  ], '', ['extraordinary', 'noteworthy', 'singular'], 'remark B1 评论、注意（全段可见为派生基，同 recovery←recover 先例）+ -able（透明后缀），B1 继承（brief 显示 ←?，本批扫描 remark；亦可按 re- 前缀取 mark A2，取派生基为判断项披露）；家族 extraordinary 非凡的、noteworthy 值得注意的、singular 非凡的，近 extraordinary 非凡的、noteworthy 值得注意的、signal 显著的、singular 卓越的（队列原样）');

  W('reminder', 'noun', '/rɪˈmaɪndə/', 'A2', ['CET4'], '提醒；引起回忆的东西', 'Something that makes you remember to do something or remember a person.', [
    ['提醒；提示', 'Something that makes you remember to do something.', '让你记得做某事的东西。', '可数，常用 a reminder to do。', 'She left a reminder about the meeting.', '她留了张关于开会的便条。', ['a reminder to', 'send a reminder'], ['prompt'], 'noun', 'countable', '通用'],
    ['引起回忆的东西', 'Something that makes you remember a person or event.', '使人想起某人或某事的事物。', '可数，常与 of 连用。', 'This old photo is a reminder of our school days.', '这张老照片让我们想起学生时代。', ['a reminder of'], ['souvenir'], 'noun', 'countable', '文化'],
  ], 'reminders',['remind'], 'brief 根提示 ←remind A2 提醒 + -er（表物后缀），A2 继承；近 prompt 提示、催促，souvenir 纪念品（队列原样）');

  W('remiss', 'adjective', '/rɪˈmɪs/', '', [], '疏忽的；失职的', 'Not doing your duty well enough or not being careful enough.', [
    ['疏忽的；失职的', 'Not doing your duty well enough or not being careful enough.', '未能尽到职责或不够小心。', '多作表语，常与 in 连用；正式用语。', 'He was remiss in checking the records.', '他疏忽了检查记录。', ['be remiss in', 'grossly remiss'], ['negligent'], 'adjective', '表语', '职业'],
  ], '', ['negligent'], '拉丁 remissus（re- + mittere 放松）——re+miss 切词假象（库内 miss 为「错过、想念」，非语义基，同 portend 类），留空；家族/近义 negligent 疏忽的、失职的（队列原样）');

  W('remorse', 'noun', '/rɪˈmɔːs/', '', [], '悔恨；内疚', 'A strong feeling of being sorry for something you have done wrong.', [
    ['悔恨；内疚', 'A strong feeling of being sorry for something you have done wrong.', '因做错事而产生的强烈歉意与自责。', '不可数，常与 for、over 连用。', 'He felt no remorse for the harm he had caused.', '他对造成的伤害毫无悔意。', ['feel remorse', 'show remorse'], ['guilt', 'regret'], 'noun', 'uncountable', '情感'],
  ], '', ['guilt', 'regret'], '拉丁 remordere（re- + mordere 再咬）——re+morse 中 morse 不在库，无库内可见词根，留空；不可数不写复数（同 recourse 先例）；家族 guilt 内疚、regret 后悔，近义同（队列原样）');

  W('removal', 'noun', '/rɪˈmuːvl/', 'A2', ['CET4'], '移除；搬迁', 'The act of taking something away, or the process of moving house.', [
    ['移除；清除', 'The act of taking something away from a place.', '把某物从某处拿走的行为。', '可数或不可数。', 'The removal of the old files took only an hour.', '清除旧文件只花了一小时。', ['the removal of', 'rubbish removal'], ['clearance'], 'noun', 'uncountable', '家居'],
    ['搬迁；搬家', 'The process of moving from one house to another.', '从一处住宅搬到另一处的过程。', '可数；英式英语常用 removal 指搬家。', 'The removals were arranged for the weekend.', '搬家安排在周末。', ['removal company', 'arrange a removal'], [], 'noun', 'countable', '物流'],
  ], 'removals',['clearance', 'remove'], '←remove A2 移除 + -al（透明名词后缀），A2 继承（brief 显示 ←?，本批扫描 remove）；家族/近义 clearance 清除、腾空（队列原样）');

  W('rendering', 'noun', '/ˈrendərɪŋ/', 'C1', ['CET4'], '演绎；译文', 'A particular way of performing a work, or a particular translation of a text.', [
    ['演绎；表现', 'A particular way of performing or presenting a work of art or music.', '艺术或音乐作品的一种特定表演或呈现方式。', '可数；艺术与音乐语境。', 'Her rendering of the sonata was praised by the critics.', '她对这首奏鸣曲的演绎受到评论家赞扬。', ['a live rendering', 'musical rendering'], [], 'noun', 'countable', '艺术'],
    ['译文；版本', 'A particular translation or version of a text.', '文本的一种特定翻译或版本。', '可数；书面语。', 'The rendering of the poem loses the rhyme.', '这首诗的译文失去了韵脚。', ['an official rendering'], ['version'], 'noun', 'countable', '书面'],
  ], 'renderings',['render'], 'brief 根提示 ←render C1 表现、渲染 + -ing（透明名词后缀），C1 继承；近义 version 版本、译本（队列原样）');

  W('renowned', 'adjective', '/rɪˈnaʊnd/', 'C1', ['CET6'], '著名的；闻名的', 'Known and talked about by very many people.', [
    ['著名的；闻名的', 'Known and talked about by very many people.', '广为人知、为人传颂的。', '常作定语，与 for 连用；比 famous 更文。', 'The city is renowned for its universities.', '这座城市因大学而闻名。', ['world renowned', 'renowned for'], ['eminent', 'notorious'], 'adjective', '定语', '文化'],
  ], '', ['eminent'], 'brief 根提示 ←renown C1 名望 + -ed（透明后缀，分词形容词），C1 继承；家族 eminent 杰出的、著名的，近 eminent 卓越的、notorious 臭名昭著的（同指广为人知，队列原样，notorious 为贬义）');

  W('rental', 'noun/adjective', '/ˈrentl/', 'B1', ['CET4'], '租赁；租金；出租用的', 'The act of renting or the money paid for it, or something available to rent.', [
    ['租赁；出租', 'The act of renting something out, or the activity of renting.', '出租或租入的活动。', '不可数或可数。', 'The rental of the equipment is charged weekly.', '设备按周计租。', ['car rental', 'rental agreement'], ['hire'], 'noun', 'uncountable', '商务'],
    ['租金', 'The money you pay to use something for a period of time.', '为在一定期限内使用某物所付的钱。', '可数或不可数。', 'The monthly rental includes the bills.', '月租金包含水电费。', ['monthly rental'], ['rent'], 'noun', 'countable', '商务'],
    ['出租用的', 'Used for renting something out.', '用于出租的。', '多作定语。', 'They offer rental cars at the airport.', '他们在机场提供出租用车。', ['rental car', 'rental property'], [], 'adjective', '定语', '交通'],
  ], 'rentals',['rent'], '←rent B1 租用 + -al（透明名词后缀），B1 继承（brief 显示 ←?，本批扫描 rent）；近 hire 租用（英式）、rent 租金、租用（队列原样）');
})(typeof window !== 'undefined' ? window : globalThis);
