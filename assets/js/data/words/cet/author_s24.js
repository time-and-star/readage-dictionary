/* data/words/cet/author_s24.js — 常用词 S 批次 24，缺口 sunken ~ swelling，共 31 条
 * （29 单词 + 2 短语：surely not、swear in，2 条短语均带 .phrase = true）。
 * 来源：family + 义项近义缺口，refs/fam/syn/tags 逐字照抄队列
 *   （%TEMP%\opencode\_task_s24.txt，widx 342-372；refs 字符串不改写，fam 只入第 10 参）。
 * CET 标签照抄队列：CET4 × 9（sunny、supervision、supervisor、supplier、supporter、
 *   supposition、surroundings、survival、suspicious）、CET6 × 1（suppression），其余 21 条 []。
 * brief：%TEMP%\opencode\_s24_brief.txt 共 29 行，首行 sunken，与本批 29 个单词逐行对应
 *   （2 条短语不入 brief）；7 行给根（supply B1、support A2 ×2、suppose B1、sure A2、
 *   sweep B1、swell B2），22 行显示 ←?。←? 一律按规范 §5.2 纯文本自扫
 *   （fs.readFileSync + indexOf 定位 W( 词头行取第 4 参，未 require 全库），命中根全在
 *   author_s4.js 第 4 参：sun A1、supervise B2、supply B1、support A2、suppose B1、
 *   surround B1、survive B1、suppress C1、sustain B2、sweep B1、suspicion B2、sweet A1、
 *   sure A2、swell B2（brief 根同级复核），另 sink A2 在 author_s2.js；
 *   curated.js 的 level 字段纯文本核对亦无相关词。
 * 扫根结论：
 * · 透明后缀/正字类继承（13）：sunny←sun A1（-y，规范 §5.4 条 4b 裁定可继，先例
 *   cloudy←cloud A1、rainy←rain A1）、supervision←supervise B2（e→∅+ion 正字类，§5.5）、
 *   supervisor←supervise B2（-or 表人）、supplied←supply B1（-ed 分词转形容词）、
 *   supplier←supply B1（-er）、supporter←support A2（-or，brief 根）、
 *   supporting←support A2（-ing，brief 根）、supposed←suppose B1（-ed，brief 根）、
 *   suppression←suppress C1（-ion）、surely←sure A2（-ly，brief 根）、
 *   survival←survive B1（e→∅+al，同 proposal←propose 先例）、sweeten←sweet A1（-en）、
 *   swelling←swell B2（-ing，brief 根）；
 * · 判断项继承（9，备注逐条披露「判断项」）：sunken←sink A2（不规则过去分词转形容词，
 *   同 spoken←speak A1、mistaken←mistake A2 先例）、
 *   surroundings←surround B1（复数形式单列词条，-s 按 sales←sale A2 先例）、
 *   suspicious←suspicion B2（-ous，词尾 -on→-ous，同 cautious←caution B2 先例）、
 *   sustenance←sustain B2（-ance，词干 tain→ten 拉丁交替，同 prescription←prescribe 先例）、
 *   supposition←suppose B1（-ition 视同 -ion 类，同 proposition←propose B1 先例）、
 *   sweeping←sweep B1（-ing，整体义由「一路扫过」引申）、
 *   sweet-smelling←sweet A1（连字符复合词取首成分，§5.3 run-up←run 先例）、
 *   sweetener←sweet A1（sweet + -en + -er 双层透明后缀，同 ridiculousness←ridicule 先例）、
 *   sweetheart←sweet A1（复合词取首成分，整体义引申）；
 * · 留空 7 单词（库内无语义直连的可见词根，逐条写入备注）：supersede（super 在库 A2 但
 *   与「取代」语义不直连，-sede 不在 §5.4 清单）、supplant（plant 在库 A2 但与「取代」
 *   语义不直连，切词假象）、surcharge（前缀 sur- 后的 charge 不在库）、
 *   surd（-urd 不在 §5.4 清单，拉丁 surdus 借词，非库内派生）、
 *   suture（与 sew B1 非词首全段共享，兄弟派生不成立）、swarm（arm 在库 A1 但语义不直连）、
 *   swathe（与 bathe 形近非同根，切词假象）；
 * · 留空 2 短语：surely not、swear in（规范 §6，短语整体不取成分作根）。
 * CEFR 分布（29 单词）：A1 × 5（sunny、sweet-smelling、sweeten、sweetener、sweetheart），
 *   A2 × 4（sunken、supporter、supporting、surely）、
 *   B1 × 7（supplied、supplier、supposed、supposition、surroundings、survival、sweeping）、
 *   B2 × 5（supervision、supervisor、suspicious、sustenance、swelling）、
 *   C1 × 1（suppression）、留空 × 7；另 2 短语一律 ''。共 22 条继承、9 条留空（7 单词 + 2 短语）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_s24.js 必须在 _cet_helper.js 之后加载');

  W('sunken', 'adjective', '/ˈsʌŋkən/', 'A2', [], '下陷的；沉没的', 'Sinking below the usual level, or lying deep under water.', [
    ['（面颊、眼窝）凹陷的', 'Looking hollow because the flesh underneath has gone down.', '因皮下组织下陷而显得凹进去的。', '多形容面颊、眼窝，常与 cheeks、eyes 连用，作定语或表语。', 'Her cheeks looked sunken after the long illness.', '长期患病后她的面颊显得凹陷了。', ['sunken cheeks', 'sunken eyes'], ['hollow'], 'adjective', '定语/表语', '外貌'],
    ['沉没的；沉入水下的', 'Lying below the surface of the water, usually after sinking.', '通常在下沉之后位于水面之下的。', '作定语，修饰船、宝藏等，常见于新闻与故事。', 'The divers found the sunken ship on the seabed.', '潜水员在海床上找到了那艘沉船。', ['a sunken ship', 'sunken treasure'], [], 'adjective', '定语', '交通'],
  ], '', ['hollow'], 'brief 显示 ←?，按 §5.2 自扫 sink A2（author_s2.js 第 4 参）——sunken 为 sink 的不规则过去分词转形容词（-en 分词形容词类，同库内 mistaken←mistake A2、spoken←speak A1、frozen←freeze B1 先例），「凹陷、沉没」与 sink 下沉语义直连，A2 继承（判断项：sink→sunk 元音交替，词形非全段重合）；形容词 forms 留空；家族/近义 hollow 凹陷的、中空的（队列原样，fam 入第 10 参并置首义项近义恰好一次）');

  W('sunny', 'adjective', '/ˈsʌni/', 'A1', ['CET4'], '晴朗的；阳光充足的', 'Full of sunshine, or cheerful and positive.', [
    ['（天气）晴朗的', 'Bright with sunlight, with few or no clouds in the sky.', '阳光明亮、天空中几乎没有云的。', '可作定语或表语，常与 day、weather、morning 连用。', 'We spent a sunny afternoon in the park.', '我们在公园里度过了一个晴朗的下午。', ['a sunny day', 'sunny weather'], ['fine'], 'adjective', '定语/表语', '自然'],
    ['开朗的；乐观的', 'Cheerful and friendly in the way you behave.', '举止上显得快乐而友好的。', '多形容性格、笑容，作定语。', 'She has a sunny personality that lifts the whole team.', '她性格开朗，能带动整个团队的情绪。', ['a sunny smile', 'a sunny disposition'], [], 'adjective', '定语', '性格'],
  ], '',['sun'], 'brief 显示 ←?，按 §5.2 自扫 sun A1（author_s4.js 第 4 参）——sun 阳光 + -y（规范 §5.4 条 4b 裁定可继，先例 cloudy←cloud A1、rainy←rain A1、cottony←cotton A2），根词全段可见且「阳光→晴朗」语义直连，A1 继承；近义 fine 晴朗的（队列原样，置首义项恰好一次）');

  W('supersede', 'verb', '/ˌsuːpəˈsiːd/', '', [], '取代；接替', 'To take the place of somebody or something in their position.', [
    ['取代；接替', 'To take the place of a person, a rule or a thing that existed before.', '取代此前存在的人、规则或事物而上位。', '及物动词，宾语是人、规则或方案，语气正式。', 'This model supersedes the earlier version in every way.', '这一型号在各方面都取代了早先的版本。', ['supersede an older rule', 'be superseded by'], ['override', 'replace'], 'verb', '及物', '通用'],
    ['使（文件、条款）失效', 'To replace a document, decision or agreement so that it no longer has force.', '替换文件、决定或协议，使其不再有效。', '及物动词，常见于法律与商务文书。', 'The new contract supersedes all previous arrangements.', '新合同取代了此前的一切安排。', ['supersede a contract'], [], 'verb', '及物', '法律'],
  ], 'supersedes~superseded~superseded~superseding', [], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根——首成分 super 在库 A2（author_s4.js）但义为「超级的」，与本词「取代」不构成同一语义链（切词假象判断项），其后 -sede 不在 §5.4 可继清单且不在库，留空；近义 override 凌驾、压倒与 replace 取代（队列原样，置首义项各恰好一次）');

  W('supervision', 'noun', '/ˌsuːpəˈvɪʒn/', 'B2', ['CET4'], '监督；监管', 'The activity of watching and directing the work or behaviour of other people.', [
    ['监督；监管', 'The act of watching a person, activity or place to make sure that rules are followed.', '注视某人、某活动或某场所，以确保规则得到遵守的行为。', '不可数，常与 under、close、direct 等词连用。', 'The building work was carried out under close supervision.', '这项建筑工程是在严密监督下进行的。', ['under close supervision', 'direct supervision'], ['oversight'], 'noun', 'uncountable', '通用'],
    ['（学生的）指导；辅导', 'The regular teaching and guidance a tutor gives to a student.', '导师对学生的定期教学与指点。', '不可数，高校语境常用，指论文、研究的指导。', 'Each student receives weekly supervision from a tutor.', '每名学生每周都会得到导师的指导。', ['academic supervision', 'supervision of research'], [], 'noun', 'uncountable', '教育'],
  ], '', ['oversight'], 'brief 显示 ←?，按 §5.2 自扫 supervise B2（author_s4.js 第 4 参）——supervise 监督去 e + -ion（e→∅+ion 正字类，规范 §5.5，同库内 solution←solve A2、speculation←speculate B2 先例），「监督」即 supervise 的名词化，语义直连，B2 继承；家族/近义 oversight 监督、监查（队列原样，fam 入第 10 参并置首义项近义恰好一次）');

  W('supervisor', 'noun', '/ˈsuːpəvaɪzə/', 'B2', ['CET4'], '监督者；主管', 'A person whose job is to watch and direct the work of others.', [
    ['主管；监督人', 'A person who manages other workers and checks that the work is done properly.', '管理其他员工并检查工作是否做到位的人。', '可数，常见于工作与生产场所。', 'The supervisor checked the report before it was sent.', '主管在报告发出前检查了一遍。', ['team supervisor', 'act as a supervisor'], ['monitor', 'superintendent'], 'noun', 'countable', '职业'],
    ['（学生的）指导教师', 'A tutor who guides a student through a project or a thesis.', '指导学生完成课题或论文的导师。', '可数，高校与研究机构用语。', 'Her supervisor suggested a wider reading list.', '她的导师建议了一份更宽的阅读书目。', ['research supervisor', 'course supervisor'], [], 'noun', 'countable', '教育'],
  ], 'supervisors', ['superintendent'], 'brief 显示 ←?，按 §5.2 自扫 supervise B2（author_s4.js 第 4 参）——supervise + -or（-or 在 §5.4 可继清单，表人，同库内 observers←observe B1、prosecutors←prosecute C1 先例），「监督者」与 supervise 语义直连，B2 继承；家族 superintendent 监工、主管（队列原样，入第 10 参），近义 monitor 监督员与 superintendent 监管人（队列原样，置首义项各恰好一次）');

  W('supplant', 'verb', '/səˈplɑːnt/', '', [], '取代；取而代之', 'To take the place of somebody or something and push them out.', [
    ['取代（某人的职位）', 'To take over the job, position or role that somebody else had.', '接管别人原有的工作、职位或角色。', '及物动词，语气正式，宾语是人或机构。', 'She was supplanted by a younger manager.', '她被一位更年轻的经理取代了。', ['supplant sb as', 'be supplanted by'], ['displace'], 'verb', '及物', '职业'],
    ['取代（旧事物）', 'To replace something that is older, weaker or less useful.', '替换掉更旧、更弱或更不管用的事物。', '及物动词，宾语是制度、技术、材料等。', 'Paper records have been supplanted by digital files.', '纸质档案已被电子文件取代。', ['supplant the old system'], [], 'verb', '及物', '通用'],
  ], 'supplants~supplanted~supplanted~supplanting', [], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根——plant 在库 A2（author_p2.js）但义为「植物、种植」，与本词「取代」不直连（切词假象判断项），-ant 亦不在 §5.4 可继清单，留空；近义 displace 取代、使失去位置（队列原样，置首义项恰好一次）');

  W('supplied', 'adjective', '/səˈplaɪd/', 'B1', [], '被供应的；备有……的', 'Given or provided with something that is needed.', [
    ['被供应的；配备有……的', 'Provided with something that you need, especially in a regular or planned way.', '（尤指按常规或计划）得到了所需要的东西。', '多作表语，常见结构 be supplied with、be supplied by。', 'The kitchen is supplied with fresh water from the well.', '厨房由水井供应清水。', ['be supplied with', 'supplied by'], ['provided'], 'adjective', '表语', '通用'],
  ], '',['supply'], 'brief 根提示 ←supply B1 供应——supplied 为 supply 的过去分词作形容词（-ed 分词转形容词，-ed 在 §5.4 可继清单，同库内 agreed←agree A1、closed←close A1 先例），「被供应的」与 supply 语义直连，B1 继承；形容词 forms 留空；近义 provided 被提供的（队列原样，置唯一义项恰好一次）');

  W('supplier', 'noun', '/səˈplaɪə/', 'B1', ['CET4'], '供应商；供货方', 'A person or company that provides goods or services to others.', [
    ['供应商；供货商', 'A person or company that sells goods or services to shops and other businesses.', '向商店或其他企业销售货物与服务的个人或公司。', '可数，常与 of 连用，商务与采购用语。', 'We asked three suppliers for a quote.', '我们向三家供应商询了价。', ['a supplier of goods', 'key supplier'], ['vendor'], 'noun', 'countable', '商务'],
    ['供应者；供给来源', 'A place, person or thing that provides something other people need.', '为他人提供所需之物的地方、人或事物。', '可数，常与 of 连用。', 'The reservoir is the main supplier of water for the city.', '这座水库是该市的主要供水来源。', ['main supplier of water'], [], 'noun', 'countable', '自然'],
  ], 'suppliers', ['vendor'], 'brief 显示 ←?，按 §5.2 自扫 supply B1（author_s4.js 第 4 参）——supply + -er（-er 在 §5.4 可继清单，表提供者，同库内 proposer←propose B1 先例），「供货方」与 supply 语义直连，B1 继承；家族/近义 vendor 供应商（队列原样，fam 入第 10 参并置首义项近义恰好一次）');

  W('supporter', 'noun', '/səˈpɔːtə/', 'A2', ['CET4'], '支持者；拥护者', 'A person who backs a person, a team, an idea or a cause.', [
    ['支持者；拥护者', 'A person who publicly backs a person, an idea or a cause.', '公开支持某人、某种主张或某项事业的人。', '可数，常与 of 连用，新闻与政治语境常见。', 'Thousands of supporters marched through the city.', '数千名支持者穿城游行。', ['a supporter of the plan', 'loyal supporter'], ['advocate', 'friend', 'partisan'], 'noun', 'countable', '社会'],
    ['（球队的）球迷；拥趸', 'A person who follows and cheers for a sports team.', '追随并为运动队加油的人。', '可数，英式英语常用 supporters 指球队球迷。', 'The supporters sang throughout the second half.', '球迷们整个下半场都在歌唱。', ['a club supporter', 'travelling supporters'], ['fan'], 'noun', 'countable', '体育'],
  ], 'supporters', ['fan', 'partisan'], 'brief 根提示 ←support A2 支持（自扫 author_s4.js 第 4 参复核为 A2）——support + -or（-or 在 §5.4 可继清单，表人），「支持者」与 support 语义直连，A2 继承；家族 fan 球迷、partisan 坚定拥护者（队列原样，入第 10 参），近义 advocate 倡导者、friend 友人、partisan 坚定拥护者（置首义项）与 fan 球迷（置义项 2），均队列原样、各恰好一次');

  W('supporting', 'adjective', '/səˈpɔːtɪŋ/', 'A2', [], '支持的；辅助的', 'Giving help, evidence or encouragement to somebody or something.', [
    ['支持的；作为支撑的', 'Providing help, backing or evidence for a person, an idea or a claim.', '为某人、某种主张或某个论断提供帮助、支持或证据。', '作定语，常见搭配 supporting evidence、supporting role。', 'The report gives supporting evidence for every claim.', '这份报告为每一条论断都提供了支持性证据。', ['supporting evidence', 'supporting role'], ['auxiliary'], 'adjective', '定语', '通用'],
    ['（戏剧、电影）配角的', 'Having a smaller part that helps the leading actor in a play or film.', '在戏剧或电影中饰演帮助主角的次要角色。', '作定语，也用于 supporting part。', 'Her supporting role earned her a prize.', '她的配角表演为她赢得了一个奖。', ['supporting part', 'supporting actress'], [], 'adjective', '定语', '艺术'],
  ], '',['support'], 'brief 根提示 ←support A2 支持（自扫 author_s4.js 第 4 参复核为 A2）——supporting 为 support 的现在分词转形容词（-ing 在 §5.4 可继清单，同库内 sporting←sport A1 先例），「支持的、辅助的」与 support 语义直连，A2 继承；形容词 forms 留空；近义 auxiliary 辅助的（队列原样，置首义项恰好一次）');

  W('supposed', 'adjective', '/səˈpəʊzd/', 'B1', [], '所谓的；被认为……的', 'Believed to be true although not proved, or expected in a situation.', [
    ['所谓的；据称的', 'Used to describe something that people say is true but that you doubt.', '用于描述人们声称属实、而你心存怀疑的事物。', '作定语，常与 supposed friend、supposed reason 连用。', 'The supposed miracle turned out to be a simple trick.', '所谓奇迹原来不过是个简单的把戏。', ['the supposed reason', 'supposed expert'], ['so-called'], 'adjective', '定语', '书面'],
    ['被认为……的；应该', 'Expected or believed to do something in a particular situation.', '在某种情况下被认为或被要求去做某事。', '多用于 be supposed to 结构，作表语。', 'You are supposed to hand the form in before Friday.', '你应该在周五之前交表。', ['be supposed to', 'was supposed to happen'], ['thought'], 'adjective', '表语', '通用'],
  ], '', ['so-called'], 'brief 根提示 ←suppose B1 认为（自扫 author_s4.js 第 4 参复核为 B1）——supposed 为 suppose 的过去分词作形容词（-ed 分词转形容词，同库内 agreed←agree A1、related←relate B1 先例），「所谓的、被认为的」与 suppose 语义直连，B1 继承；形容词 forms 留空；家族 so-called 所谓的（队列原样，入第 10 参），近义 so-called 所谓的（置首义项）与 thought 被认为的（置义项 2），均队列原样、各恰好一次');

  W('supposition', 'noun', '/ˌsʌpəˈvɪʃn/', 'B1', ['CET4'], '假定；推测', 'An idea assumed to be true without any proof.', [
    ['假定；推测', 'An assumption that something is true, made without having any proof.', '在没有任何证据的情况下作出的假设。', '可数，常与 that 从句连用，语气正式。', 'The whole plan rests on a false supposition.', '整个计划都建立在一个错误的假定之上。', ['a false supposition', 'on the supposition that'], ['guess'], 'noun', 'countable', '书面'],
    ['（论证的）前提', 'An idea taken as the starting point for an argument or a theory.', '被当作论证或理论出发点的观点。', '可数，学术与议论语境常用。', 'The argument begins from the supposition that demand will keep rising.', '这场论证以需求会持续上升为前提。', ['begin from the supposition'], [], 'noun', 'countable', '书面'],
  ], 'suppositions',['suppose'], 'brief 显示 ←?，按 §5.2 自扫 suppose B1（author_s4.js 第 4 参）——suppose 去 e + -ition（-ition 视同 -ion 类，propos 全段共享，同库内 proposition←propose B1、competition←compete A2 先例），「假定」即 suppose 的名词化，语义直连，B1 继承（判断项：-ition 变体不在 §5.4 明示清单）；近义 guess 猜测（队列原样，置首义项恰好一次）');

  W('suppression', 'noun', '/səˈpreʃn/', 'C1', ['CET6'], '压制；镇压', 'The act of stopping something by force, or of keeping it from being expressed.', [
    ['压制；镇压', 'The use of force to stop people from resisting or protesting.', '使用武力阻止人们反抗或抗议的行为。', '不可数，常与 of 连用，政治与新闻语境常见。', 'The suppression of the revolt lasted several months.', '对这次起义的镇压持续了好几个月。', ['suppression of the uprising', 'political suppression'], ['crackdown'], 'noun', 'uncountable', '政治'],
    ['抑制；压抑', 'The act of deliberately stopping a feeling, thought or natural process from showing or continuing.', '有意抑制某种情绪、想法或自然过程的表现与延续。', '不可数，心理与医学语境常用。', 'Suppressing emotion only made him feel worse.', '压抑情绪只会让他感觉更糟。', ['suppression of a cough'], [], 'noun', 'uncountable', '心理'],
  ], '', ['crackdown'], 'brief 显示 ←?，按 §5.2 自扫 suppress C1（author_s4.js 第 4 参）——suppress + -ion（-ion 在 §5.4 可继清单，同库内 impression←impress、expression←express 模式），「压制」即 suppress 的名词化，语义直连，C1 继承；家族/近义 crackdown 镇压、严厉打击（队列原样，fam 入第 10 参并置首义项近义恰好一次）');

  W('surcharge', 'noun/verb', '/ˈsɜːtʃɑːdʒ/', '', [], '附加费；加收', 'An extra amount charged on top of the usual price, or to add such a charge.', [
    ['附加费；加价', 'An extra amount of money that must be paid in addition to the usual price.', '在通常价格之外必须额外支付的一笔钱。', '可数，常见于交通、金融与零售。', 'A weekend surcharge applies to all tickets.', '所有票周末都要加收附加费。', ['fuel surcharge', 'pay a surcharge'], ['premium'], 'noun', 'countable', '金融'],
    ['加收；收取附加费', 'To charge somebody an extra amount of money on top of the normal price.', '在正常价格之外向某人额外收费。', '及物动词，宾语是费用或被收费的对象。', 'The hotel surcharges guests for late checkout.', '酒店对延迟退房的客人加收费用。', ['surcharge for late payment'], [], 'verb', '及物', '商务'],
  ], 'surcharges~surcharged~surcharged~surcharging', [], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根——首成分 sur- 为前缀性成分，其后的 charge 不在库（库内仅 charged B1 形容词条，非词根形），无根可继，-charge 也不在 §5.4 可继清单，留空；近义 premium 附加费、保险费（队列原样，置首义项恰好一次）');

  W('surd', 'noun', '/sɜːd/', '', [], '不尽根；无理数；无声辅音', 'A number that cannot be written as a simple fraction, or a voiceless consonant.', [
    ['（数学）不尽根；无理数', 'A number or a root that cannot be written as a simple fraction of whole numbers.', '不能写成整数之简单分数的数或根式。', '可数，常见于代数与算术运算。', 'The square root of three is an example of a surd.', '根号三就是一个不尽根的例子。', ['simplify the surd', 'leave in surd form'], ['irrational'], 'noun', 'countable', '数学'],
    ['（语音）无声辅音', 'A consonant sound that is produced without the vocal cords vibrating.', '发音时声带不振动的辅音。', '可数，语音学用语，如 p、t、k。', 'Sounds such as p and t are called surds in phonetics.', '语音学里 p、t 这类音叫无声辅音。', ['a voiceless surd'], [], 'noun', 'countable', '语法'],
  ], 'surds', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 surd 可继词根（-urd 不在 §5.4 可继清单，拉丁语 surdus 借词，非库内派生），留空；近义 irrational 无理的、无理数的（队列原样，置首义项恰好一次）');

  W('surely', 'adverb', '/ˈʃʊəli/', 'A2', [], '当然；必定；想必', 'With confidence that something is true or will certainly happen.', [
    ['当然；肯定', 'Used to emphasize that you are certain about something.', '用于强调自己对某事十分确定。', '修饰整个句子或动词，也可写在句末。', 'Surely nobody would agree to such a plan.', '想必没有人会同意这样的计划。', ['surely not', 'must surely'], ['undoubtedly'], 'adverb', '不及物', '通用'],
    ['想必；一定会', 'Used to say that something must happen or must be true.', '用于表示某事必然发生或必然是真的。', '修饰动词，常与 will、must 连用。', 'He will surely be rewarded for the effort he made.', '他付出的努力一定会得到回报。', ['will surely', 'surely be'], [], 'adverb', '不及物', '通用'],
  ], '',['sure'], 'brief 根提示 ←sure A2 确定的（自扫 author_s4.js 第 4 参复核为 A2）——sure + -ly（-ly 在 §5.4 可继清单，透明副词后缀），「必定」与 sure 语义直连，A2 继承；副词 forms 留空；近义 undoubtedly 毫无疑问（队列原样，置首义项恰好一次）');

  W('surely not', 'adverb', '/ˈʃʊəli nɒt/', '', [], '当然不；不会吧', 'Used to express strong doubt or surprise about something.', [
    ['当然不；不会吧', 'Used to say that you do not believe something or that you are very surprised by it.', '用于表示自己不相信某事，或对此非常惊讶。', '副词短语，修饰整句，多用于口语应答。', 'Surely not again. We just fixed that door.', '不会又坏了吧。那扇门我们刚修好。', ['say surely not'], ['never'], 'adverb', '不及物', '口语'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 never 从不、绝不（队列原样，置唯一义项恰好一次）').phrase = true;

  W('surroundings', 'noun', '/səˈraʊndɪŋz/', 'B1', ['CET4'], '环境；周围的事物', 'The place, conditions and objects that a person or thing is among.', [
    ['自然环境；四周景物', 'The natural objects, places and conditions around a person, an animal or a place.', '在某个人、动物或地方四周的自然景物、场所与状况。', '整体作复数，常与 natural、pleasant 等词连用。', 'The birds live in their natural surroundings.', '这些鸟生活在它们的自然环境中。', ['natural surroundings', 'pleasant surroundings'], ['environment'], 'noun', 'countable', '通用'],
    ['生活与工作的环境', 'The place where a person lives or works, together with the conditions that affect daily life.', '一个人生活或工作的场所，以及影响其日常的各种条件。', '整体作复数，作主语时谓语用复数。', 'The school offers calm and safe surroundings for study.', '这所学校为学习提供了安静安全的环境。', ['a calm set of surroundings', 'safe surroundings for study'], ['setting'], 'noun', 'countable', '教育'],
  ],'surroundings', ['setting'], 'brief 显示 ←?，按 §5.2 自扫 surround B1（author_s4.js 第 4 参）——surround 围绕 + -ings（-s 复数形式单列词条，forms 留空，同库内 sheets←sheet A2、snacks←snack A2 先例），「周围的事物」与 surround 语义直连，B1 继承（判断项：-s 复数化不在 §5.4 明示清单）；家族 setting 环境、场景（队列原样，入第 10 参），近义 environment 环境（置首义项）与 setting 场景、环境（置义项 2），均队列原样、各恰好一次');

  W('survival', 'noun', '/səˈvaɪvl/', 'B1', ['CET4'], '生存；幸存；残存', 'The act of continuing to live or exist in spite of danger.', [
    ['生存；幸存', 'The act or fact of continuing to live or existing after a dangerous or difficult event.', '在危险或困难事件之后仍然活着或继续存在的事实。', '不可数，常与 chances、rate 等连用。', 'The medicine improved her chances of survival.', '这种药提高了她存活的机会。', ['chances of survival', 'survival rate'], [], 'noun', 'uncountable', '通用'],
    ['赖以维生之物；糊口', 'The food, water and money a person needs in order to stay alive.', '一个人为了活下去所需要的食物、水与钱。', '不可数，常说 means of survival。', 'Fishing is their only means of survival.', '打鱼是他们唯一的生计。', ['means of survival', 'survival skills'], ['subsistence'], 'noun', 'uncountable', '社会'],
    ['残存之物；遗物', 'Something that has continued to exist from an earlier time.', '从更早时代一直留存下来的事物。', '可数，指旧习俗、旧制度的残留。', 'The old custom is a survival from farming times.', '这一旧习俗是从农耕时代留存下来的。', ['a survival of the past'], ['relic'], 'noun', 'countable', '社会'],
  ],'survivals', ['relic', 'subsistence'], 'brief 显示 ←?，按 §5.2 自扫 survive B1（author_s4.js 第 4 参）——survive 去 e + -al（e→∅+al，同库内 proposal←propose B1、arrival←arrive A1、revival←revive C1 先例），「幸存」即 survive 的名词化，语义直连，B1 继承；家族 relic 遗物与 subsistence 糊口（队列原样，入第 10 参），近义 subsistence 生存所需（置义项 2）与 relic 遗物（置义项 3），各恰好一次；主抽象义不可数故 forms 留空');

  W('suspicious', 'adjective', '/səˈspɪʃəs/', 'B2', ['CET4'], '可疑的；怀疑的', 'Making you feel that something is wrong, or feeling that something is wrong.', [
    ['可疑的；引起怀疑的', 'Suggesting that something wrong, illegal or dangerous may be happening.', '暗示可能有错误、违法或危险的事情正在发生。', '作定语或表语，常修饰 behaviour、package、activity。', 'The police stopped the suspicious car at the checkpoint.', '警察在检查点拦下了那辆可疑的车。', ['suspicious behaviour', 'a suspicious package'], ['dubious'], 'adjective', '定语/表语', '法律'],
    ['怀疑的；不信任的', 'Having a feeling that somebody may not be honest or that something bad is happening.', '感觉某人可能不老实，或有不好的事情正在发生。', '常与 about、of 连用，作表语居多。', 'She was suspicious about the whole offer.', '她对这整个提议心存疑虑。', ['be suspicious of', 'grow suspicious'], ['suspect'], 'adjective', '表语', '心理'],
  ], '', ['dubious'], 'brief 显示 ←?，按 §5.2 自扫 suspicion B2（author_s4.js 第 4 参）——suspicion + -ous（-ous 在 §5.4 可继清单，词尾 -on→-ous，同库内 cautious←caution B2、ambitious←ambition B1 先例），「引起怀疑的」与 suspicion 语义直连，B2 继承（判断项：词尾非整段重合）；家族 dubious 可疑的（队列原样，入第 10 参），近义 dubious 可疑的（置首义项）与 suspect 被怀疑的、怀疑（置义项 2），均队列原样、各恰好一次');

  W('sustenance', 'noun', '/ˈsʌstənəns/', 'B2', [], '食物；营养；滋养', 'Food and drink that keep people, animals or plants alive.', [
    ['食物；营养物', 'Food and drink that is needed to keep a person, an animal or a plant alive.', '维持人、动物或植物生命所需的食物与饮料。', '不可数，书面语体，常与 of、from 连用。', 'They drew sustenance from the river and the forest.', '他们从河流与森林中获取滋养。', ['provide sustenance', 'a source of sustenance'], ['subsistence'], 'noun', 'uncountable', '饮食'],
  ], '',['sustain'], 'brief 显示 ←?，按 §5.2 自扫 sustain B2（author_s4.js 第 4 参）——sustain + -ance（-ance 在 §5.4 可继清单，词干 tain→ten 拉丁交替，同库内 pregnancy←pregnant B1、prescription←prescribe B2 词干变化先例），「维持生命之物」与 sustain 维持语义直连，B2 继承（判断项：词干变化）；抽象不可数故 forms 留空；近义 subsistence 生存所需之物（队列原样，置唯一义项恰好一次）');

  W('suture', 'noun/verb', '/ˈsuːtʃə/', '', [], '缝合；缝线', 'A stitch used to close a wound, or to sew the edges of a wound together.', [
    ['（外科）缝线；缝合处', 'A stitch or row of stitches used to close a wound or a cut.', '用来闭合伤口的一针或一排缝线。', '可数，医疗语境常用，也作动词指缝合动作。', 'The surgeon closed the wound with a single suture.', '外科医生用一针缝线缝合了伤口。', ['a neat suture', 'remove the suture'], ['stitch'], 'noun', 'countable', '健康'],
    ['缝合；用线缝合', 'To join the edges of a wound, a cut or a piece of material with thread.', '用线把伤口、切口或材料的边缘连接起来。', '及物动词，宾语是伤口或切口，正式用语。', 'The doctor sutured the cut with great care.', '医生十分仔细地缝合了那道口子。', ['suture the wound'], [], 'verb', '及物', '健康'],
  ], 'sutures~sutured~sutured~suturing', ['stitch'], 'brief 显示 ←?，按 §5.2 自扫：库内无 suture 可继词根（-ure 不在 §5.4 可继清单，拉丁 sutura 借词）；与 sew B1 缝纫虽语义相关，但词首非全段共享（s-u-t 与 s-e-w），兄弟派生不成立，留空（判断项：曾考虑取 sew 作根）；家族/近义 stitch 一针、缝（队列原样，fam 入第 10 参并置首义项近义恰好一次）');

  W('swarm', 'noun/verb', '/swɔːm/', '', [], '一群；蜂拥而至', 'A large group of insects or people moving together, or to move in a big crowd.', [
    ['（蜂等的）群', 'A large group of bees, ants or other insects living or moving together.', '生活或一起移动的一大群蜜蜂、蚂蚁等昆虫。', '可数，常与 of 连用。', 'A swarm of bees settled on the apple tree.', '一群蜜蜂落在了那棵苹果树上。', ['a swarm of bees'], ['hive'], 'noun', 'countable', '自然'],
    ['一大群（人或动物）', 'A very large crowd of people or animals gathered or moving together.', '聚集或一起移动的一大群人或动物。', '可数，常与 of 连用，常带拥挤色彩。', 'A swarm of reporters waited outside the court.', '一大群记者等在法院外面。', ['a swarm of reporters'], [], 'noun', 'countable', '社会'],
    ['蜂拥；群集', 'To move somewhere in a very large, dense crowd.', '以密集的大群人的方式涌向某处。', '不及物动词，常与 into、round、through 连用。', 'Fans swarmed into the stadium when the gates opened.', '大门一开，球迷们便涌入体育场。', ['swarm into', 'swarm round'], ['flock', 'invade'], 'verb', '不及物', '通用'],
  ], 'swarms~swarmed~swarmed~swarming', ['flock'], 'brief 显示 ←?，按 §5.2 自扫：库内无语义直连的可见词根——arm 在库 A1（author_a4.js）但义为「手臂」，与本词「群」不直连（切词假象判断项），-arm 也不在 §5.4 可继清单，留空；家族 flock 兽群、鸟群（队列原样，入第 10 参），近义 hive 蜂群（置首义项）、flock 成群与 invade 涌入（置动词义项），均队列原样、各恰好一次');

  W('swathe', 'noun/verb', '/sweɪð/', '', [], '一条（地、草）；包裹', 'A strip of land or grass, or to wrap somebody or something in cloth.', [
    ['一条（土地、草地）', 'A long strip of land, grass or crops.', '一块狭长的土地、草地或庄稼带。', '可数，常与 of 连用，常见搭配 cut a swathe through。', 'They cut a wide swathe through the field.', '他们在田里割出了一大片条带。', ['a swathe of land'], [], 'noun', 'countable', '农业'],
    ['包裹；缠绕', 'To wrap somebody or something completely in cloth or bandages.', '用布或绷带把某人或某物完全包起来。', '及物动词，常见被动结构 be swathed in。', 'The nurse swathed the baby in a soft blanket.', '护士用柔软的毯子把婴儿裹了起来。', ['swathe in cloth', 'be swathed in bandages'], ['envelop', 'wrap'], 'verb', '及物', '通用'],
  ], 'swathes~swathed~swathed~swathing', [], 'brief 显示 ←?，按 §5.2 自扫：库内无 swathe 可继词根（-athe 不在 §5.4 可继清单；与 bathe 洗澡形近但词首非全段共享，切词假象判断项），留空；近义 envelop 包住、wrap 裹住（队列原样，置动词义项各恰好一次）');

  W('swear in', 'verb', '/ˌsweə(r) ɪn/', '', [], '使宣誓就职', 'To make somebody promise formally to do their job or tell the truth.', [
    ['使宣誓就职', 'To formally introduce somebody into a new official job by making them promise to do their duty.', '通过让某人郑重承诺履行职责，正式将其引入新的公职。', '动词短语，多用被动结构 be sworn in，常见于政治语境。', 'The chief justice will swear in the new president at noon.', '首席法官将在中午为新总统举行宣誓就职。', ['swear in a president', 'be sworn in'], ['inaugurate'], 'verb', '及物', '政治'],
  ], '', [], '短语整体不取成分作根，分级留空（规范 §6，队列原样，短语条目）；近义 inaugurate 使正式就职（队列原样，置唯一义项恰好一次）').phrase = true;

  W('sweeping', 'adjective/noun', '/ˈswiːpɪŋ/', 'B1', [], '全面的；彻底的；清扫', 'Affecting everything or everybody, or the act of cleaning with a broom.', [
    ['全面的；彻底的', 'Affecting all parts of a situation or all the people involved, without exception.', '影响某一情况的全部方面或涉及的全部人员，无一例外。', '作定语，常与 changes、reforms、victory 连用。', 'The government announced sweeping reforms to the tax system.', '政府宣布了税制方面的全面改革。', ['sweeping changes', 'sweeping reforms'], ['blanket', 'wholesale'], 'adjective', '定语', '社会'],
    ['清扫；扫拢之物', 'The act of cleaning a floor or an area with a broom, or the dust swept up.', '用扫帚打扫地面或场地的行为，或扫拢起来的灰尘碎屑。', '可数，多见于日常家务。', 'Give the floor a quick sweeping before the guests arrive.', '客人到之前把地快快扫一遍。', ['give the floor a sweeping'], [], 'noun', 'countable', '家居'],
  ], 'sweepings',['sweep'], 'brief 根提示 ←sweep B1 扫（自扫 author_s4.js 第 4 参复核为 B1）——sweep + -ing（-ing 在 §5.4 可继清单，分词转形容词、动名词转名词，同库内 sporting←sport A1 先例），「一路扫过→遍及各处」与 sweep 语义直连，B1 继承（判断项：整体义由本义引申）；混合 adjective/noun 故 forms 写名词复数 sweepings；近义 blanket 全面的与 wholesale 大规模的（队列原样，置首义项各恰好一次）');

  W('sweet-smelling', 'adjective', '/ˌswiːt ˈsmelɪŋ/', 'A1', [], '芳香的；气味好闻的', 'Having a pleasant, sweet smell.', [
    ['芳香的；气味好闻的', 'Having a pleasant smell that people enjoy.', '带有人喜欢闻的宜人气味。', '作定语，修饰花、香料、肥皂等。', 'The sweet-smelling flowers filled the whole room.', '芳香的花充满了整个房间。', ['sweet-smelling herbs', 'sweet-smelling soap'], ['fragrant'], 'adjective', '定语', '通用'],
  ], '',['sweet'], 'brief 显示 ←?，按 §5.2 自扫 sweet A1（author_s4.js 第 4 参）——sweet-smelling 连字符复合词取首成分（规范 §5.3，run-up←run、small-scale←small 先例），「气味甜香」与 sweet 甜语义直连，A1 继承（判断项：语义重心在后成分 smelling，仍按 §5.3 取首成分）；形容词 forms 留空；近义 fragrant 芬芳的（队列原样，置唯一义项恰好一次）');

  W('sweeten', 'verb', '/ˈswiːtn/', 'A1', [], '使变甜；使更悦人', 'To make food or drink taste sweeter, or to make something more pleasant.', [
    ['使变甜；加糖', 'To add sugar or honey to food or drink, or to become sweeter.', '往食物或饮料里加糖、蜜，或变得甜起来。', '及物动词，宾语是茶、菜等，也可不及物。', 'She sweetened the tea with a spoon of honey.', '她往茶里加了一勺蜂蜜调味。', ['sweeten the tea', 'sweeten to taste'], ['sugar'], 'verb', '及物', '饮食'],
    ['使更悦耳；使更好接受', 'To make something more pleasant, attractive or acceptable.', '使某事更动听、更有吸引力或更易被接受。', '及物动词，宾语是条件、提议等，常见搭配 sweeten the deal。', 'The company sweetened the offer with free delivery.', '公司以免费送货让这份报价更有吸引力。', ['sweeten the deal'], [], 'verb', '及物', '商务'],
  ], 'sweetens~sweetened~sweetened~sweetening', ['sugar'], 'brief 显示 ←?，按 §5.2 自扫 sweet A1（author_s4.js 第 4 参）——sweet + -en（-en 在 §5.4 可继清单，使动后缀，同库内 soften←soft A1、sadden←sad A1 先例），「使变甜」与 sweet 语义直连，A1 继承；家族 sugar 糖（队列原样，入第 10 参），近义 sugar 加糖（队列原样，置首义项恰好一次）');

  W('sweetener', 'noun', '/ˈswiːtnə/', 'A1', [], '甜味剂；诱人甜头', 'A substance that makes food taste sweeter, or something that makes an offer attractive.', [
    ['甜味剂；增甜剂', 'A substance added to food or drink to make it taste sweeter.', '加入食物或饮料中使其变甜的物质。', '可数，分天然与人工两类。', 'The recipe uses a natural sweetener instead of sugar.', '这个食谱用天然甜味剂代替了糖。', ['artificial sweetener', 'add sweetener'], ['sugar'], 'noun', 'countable', '饮食'],
    ['（促成交易的）甜头', 'Something extra offered to make an agreement or deal more attractive.', '为使协议或交易更有吸引力而额外提供的好处。', '可数，商务与谈判用语。', 'The discount was a sweetener that helped close the deal.', '这笔折扣是促成交易的甜头。', ['a sweetener for the deal'], [], 'noun', 'countable', '商务'],
  ], 'sweeteners', ['sugar'], 'brief 显示 ←?，按 §5.2 自扫 sweet A1（author_s4.js 第 4 参）——sweet + -en + -er（-en 与 -er 均在 §5.4 可继清单，双层透明后缀，同 author_r9.js ridiculousness←ridicule C1 + -ous + -ness 先例），「甜味剂」与 sweet 甜语义直连，A1 继承（判断项：双层派生）；家族/近义 sugar 糖（队列原样，fam 入第 10 参并置首义项近义恰好一次）');

  W('sweetheart', 'noun', '/ˈswiːthɑːt/', 'A1', [], '心爱的人；亲爱的', 'A person that you love, or a kind person used as a friendly address.', [
    ['心爱的人；情人', 'A person that somebody loves, especially over a long time.', '某人所爱的人，尤指交往已久的对象。', '可数，多用于温情或怀旧语境。', 'They have been sweethearts since their school days.', '他们从学生时代起就是一对恋人。', ['childhood sweetheart'], ['darling', 'honey'], 'noun', 'countable', '社交'],
    ['亲爱的（称呼）', 'A friendly way of addressing somebody you love or like.', '对所爱或所喜欢之人的一种亲切称呼。', '可数，作呼语，日常口语常见。', 'Never mind, sweetheart, we can try again tomorrow.', '没关系，亲爱的，我们明天可以再试一次。', ['call somebody sweetheart'], [], 'noun', 'countable', '口语'],
  ], 'sweethearts', ['darling'], 'brief 显示 ←?，按 §5.2 自扫 sweet A1（author_s4.js 第 4 参）——sweet + heart 复合词取首成分（规范 §5.3，run-up←run 先例；heart A1 亦在库作佐证），「心爱之人」与 sweet 亲昵、甜美的语义直连，A1 继承（判断项：整体义由成分引申）；家族 darling 亲爱的人（队列原样，入第 10 参），近义 darling 亲爱的与 honey 甜心（队列原样，置首义项各恰好一次）');

  W('swelling', 'noun/verb', '/ˈswelɪŋ/', 'B2', [], '肿胀；肿块', 'A part of the body that has become larger than normal, or the process of becoming swollen.', [
    ['肿；肿胀', 'The state of a part of the body becoming larger than normal because fluid has gathered in it.', '身体某部位因积液而变得比平常大的状态。', '不可数，常说 reduce the swelling，常见于健康语境。', 'The swelling in her ankle went down after two days.', '两天后她脚踝的肿胀消了。', ['reduce the swelling', 'swelling in the leg'], [], 'noun', 'uncountable', '健康'],
    ['肿块；隆起处', 'A rounded part that sticks out on the body or on a surface.', '身体或表面上鼓起来的圆形部分。', '可数，常与 on 连用。', 'There was a small swelling behind his ear.', '他耳朵后面有个小肿块。', ['a swelling on the skin'], ['lump'], 'noun', 'countable', '健康'],
    ['肿起来；涨大', 'To become larger than normal because of injury, illness or heat.', '因受伤、生病或受热而变得比平常大。', '不及物动词，常与 up 连用，也可及物。', 'My knee began to swell after the fall.', '摔倒之后我的膝盖开始肿了。', ['swell up', 'swell with pride'], [], 'verb', '不及物', '健康'],
  ], 'swells~swelled~swollen~swelling', ['lump'], 'brief 根提示 ←swell B2 肿胀（自扫 author_s4.js 第 4 参复核为 B2）——swell + -ing（-ing 在 §5.4 可继清单，动名词转名词、分词转形容词），「肿胀、肿块」与 swell 语义直连，B2 继承；混合 noun/verb 故 forms 写动词 4 形（不规则过去分词 swollen）；家族/近义 lump 肿块（队列原样，fam 入第 10 参并置义项 2 近义恰好一次）');
})(typeof window !== 'undefined' ? window : globalThis);
