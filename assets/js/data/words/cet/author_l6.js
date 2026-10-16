/* data/words/cet/author_l6.js · 手敲词条 L（六·引用缺口批）：lawful ~ lessor（31 条）
 * 队列来源：family + 义项近义缺口（refs 照抄队列）；标签无则留空（本批 10 条 CET4）。
 * 短语 8 条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR 统一留空；派生按词根继承、复合取首成分在库词级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_l6.js 必须在 _cet_helper.js 之后加载');

  W('lawful', 'adjective', '/ˈlɔːfl/', 'B1', ['CET4'], '合法的；法律认可的', 'Allowed by law.', [
    ['合法的；法律认可的', 'Allowed or recognized by law.', '法律所允许或认可的。', '定语或表语。', 'It is lawful to hunt in this area.', '在这一带打猎是合法的。', [], ['legal', 'legitimate'], 'adjective', '定语', '法律'],
  ], '',['legal', 'law'], '←law B1 + -ful（透明后缀），B1 继承；家族 legal 合法的，近义 legitimate 合法的');

  W('lawlessness', 'noun', '/ˈlɔːləsnəs/', 'B1', [], '无法无天；违法', 'A state of not obeying the law.', [
    ['无法无天；违法', 'A state where people do not obey the law.', '不守法、社会失控的状态。', '不可数。', 'The region sank into lawlessness.', '这个地区陷入了无法无天的状态。', [], ['crime'], 'noun', 'uncountable', '法律'],
  ], '',['law'], 'law B1 + -less + -ness——首成分 law 在库、后缀透明，B1 继承；近义 crime 犯罪');

  W('lay down', 'verb', '/ˌleɪ ˈdaʊn/', '', [], '放下；制定', 'To put down, or to fix a rule.', [
    ['放下；制定', 'To put something down, or to fix a rule for people to follow.', '搁下某物；也指制定规定。', '及物短语。', 'They laid down strict rules.', '他们制定了严格的规定。', [], ['prescribe'], 'verb', '及物', '通用'],
  ], '', [], 'lay + down；近义 prescribe 规定、制定。短语分级留空').phrase = true;

  W('lay out', 'verb', '/ˌleɪ ˈaʊt/', '', [], '布置；编排', 'To arrange something in a plan.', [
    ['布置；编排', 'To arrange something in a clear planned way.', '把内容摆放或编排成形。', '及物短语。', 'The designer laid out the page.', '设计师排好了这一页。', [], ['format'], 'verb', '及物', '出版'],
  ], '', [], 'lay + out；近义 format 编排格式。短语分级留空').phrase = true;

  W('lea', 'noun', '/liː/', '', [], '草地；牧场', 'Grassland for animals.', [
    ['草地；牧场', 'Grassland where animals feed.', '供牲畜吃草的草地。', '可数，古旧或诗歌用语。', 'The sheep grazed on the lea.', '羊群在草地上吃草。', [], ['meadow'], 'noun', 'countable', '自然'],
  ], 'leas', [], '古英语 lēa——无库内派生根，故留空；近义 meadow 草地');

  W('lead into', 'verb', '/ˌliːd ˈɪntuː/', '', [], '引出；通向', 'To go or move into something else.', [
    ['引出；通向', 'To go from one thing into the next, or to move into a place.', '由前一段引出后一段；也指通向某处。', '不及物短语。', 'The introduction leads into the main topic.', '引言引出了主题。', [], ['preface'], 'verb', '不及物', '通用'],
  ], '', [], 'lead + into；近义 preface 作为…的开场。短语分级留空').phrase = true;

  W('lead to', 'verb', '/ˌliːd tuː/', '', [], '导致；通向', 'To cause something to happen.', [
    ['导致；通向', 'To cause something to happen, or to go towards a place.', '引出某个结果；也指通往。', '及物短语。', 'The delay led to more errors.', '延误导致了更多错误。', ['lead to chaos'], ['cause', 'result'], 'verb', '及物', '通用'],
  ], '', ['cause', 'result'], 'lead + to；家族 cause 导致、result 结果。短语分级留空').phrase = true;

  W('leader', 'noun', '/ˈliːdə/', 'A2', ['CET4'], '领导者；领袖', 'A person who leads a group.', [
    ['领导者；领袖', 'A person who leads a group, country or organization.', '带领团体、国家或组织的人。', '可数。', 'She was chosen as leader of the team.', '她被选为团队的领导者。', ['a born leader'], ['captain', 'chief', 'first', 'guide', 'head', 'king', 'mayor', 'queen', 'statesman'], 'noun', 'countable', '通用'],
  ], 'leaders',['captain', 'chief', 'head', 'mayor', 'president', 'lead'], '←lead A2 + -er（施事后缀），A2 继承（brief 根提示）；家族 captain 队长、chief 首领、head 首脑、mayor 市长、president 总统，近义 guide 引导者、king 国王、queen 女王、statesman 政治家');

  W('leadership', 'noun', '/ˈliːdəʃɪp/', '', ['CET4'], '领导；领导层', 'The people who lead, or the ability to lead.', [
    ['领导；领导层', 'The group of people who lead an organization, or the ability to lead them.', '领导机构；也指领导才能。', '可数或不可数。', 'The company needs new leadership.', '这家公司需要新的领导层。', ['under new leadership'], ['hierarchy'], 'noun', 'countable', '商务'],
  ], '', ['hierarchy'], 'lead + -ship——先例 hardship（C1）与 hard（A1）脱钩、kingship 留空，-ship 不走词根继承，自身级无把握，故留空；家族/近义 hierarchy 等级制度');

  W('leading', 'adjective', '/ˈliːdɪŋ/', 'A2', ['CET4'], '领先的；主要的', 'Most important or first in rank.', [
    ['领先的；主要的', 'Most important, or in first position.', '排名或作用居前的。', '定语。', 'She played a leading role in the project.', '她在项目中担任主要角色。', ['leading role'], ['ahead', 'foremost', 'forward', 'premier', 'prominent'], 'adjective', '定语', '通用'],
  ], '',['foremost', 'premier', 'lead'], '←lead A2 + -ing（透明后缀），A2 继承（brief 根提示）；家族 foremost 最前的、premier 首要的，近义 ahead 领先的、forward 向前的、prominent 突出的');

  W('learner', 'noun', '/ˈlɜːnə/', 'A1', ['CET4'], '学习者', 'A person who is learning something.', [
    ['学习者', 'A person who is learning a skill or subject.', '正在学习技能或学科的人。', '可数。', 'She is a fast learner.', '她学得很快。', ['a slow learner'], ['intermediate', 'student'], 'noun', 'countable', '教育'],
  ], 'learners',['student', 'learn'], '←learn A1 + -er（施事后缀），A1 继承（brief 根提示）；家族 student 学生，近义 intermediate 中级的（学习者）');

  W('leave out', 'verb', '/ˌliːv ˈaʊt/', '', [], '省略；遗漏', 'To not include something.', [
    ['省略；遗漏', 'To not include something that should be there.', '该写的没写进去、被略去。', '及物短语。', 'The editor left out one paragraph.', '编辑漏掉了一段。', [], ['omit'], 'verb', '及物', '出版'],
  ], '', ['omit'], 'leave + out；家族 omit 省略、遗漏。短语分级留空').phrase = true;

  W('leaver', 'noun', '/ˈliːvə/', 'A1', [], '离开者；离校（离职）者', 'A person who leaves a place or job.', [
    ['离开者；离校（离职）者', 'A person who is leaving a school, job or place.', '正在离校、离职或离开某处的人。', '可数，常组词：school leaver。', 'School leavers found jobs.', '离校的学生找到了工作。', [], ['dropout'], 'noun', 'countable', '教育'],
  ], 'leavers',['dropout', 'leave'], '←leave A1 + -er（施事后缀），A1 继承（brief 根提示）；家族 dropout 辍学者、中途退出者');

  W('lecturer', 'noun', '/ˈlektʃərə/', 'B1', ['CET4'], '讲师', 'A person who teaches at a university.', [
    ['讲师', 'A person who gives lectures, especially at a university.', '讲课的人，尤指大学教师。', '可数，英式用语。', 'The lecturer explained the theory.', '讲师讲解了这个理论。', [], ['professor'], 'noun', 'countable', '教育'],
  ], 'lecturers',['lecture'], '←lecture B1 + -er（施事后缀），B1 继承（brief 根提示）；近义 professor 教授');

  W('ledge', 'noun', '/ledʒ/', '', [], '壁架；岩架', 'A narrow flat surface on a wall.', [
    ['壁架；岩架', 'A narrow flat surface along a wall or rock face.', '墙壁或岩面上的狭长平面。', '可数。', 'A pot sat on the window ledge.', '窗台上放着一盆花。', [], ['shelf', 'terrace'], 'noun', 'countable', '家居'],
  ], 'ledges', ['shelf'], '无库内派生根，故留空；家族 shelf 架子，近义 terrace 台地');

  W('leeway', 'noun', '/ˈliːweɪ/', '', [], '余地；余量', 'Freedom to act within limits.', [
    ['余地；余量', 'Freedom to act or change within limits.', '在限度内可自行调整的空间。', '不可数：leave leeway。', 'The rules leave some leeway.', '这些规定留有一些余地。', ['leave some leeway'], ['latitude', 'margin'], 'noun', 'uncountable', '通用'],
  ], '',['way'], 'lee + way——首成分 lee 不在库，无级可继，故留空；近义 latitude 余地、margin 余量');

  W('left wing', 'noun', '/ˌleft ˈwɪŋ/', '', [], '左翼', 'The left side of a political group.', [
    ['左翼', 'The political group that favors radical change.', '政党中主张变革的激进派别。', '可数，常与 the 连用。', 'She belongs to the left wing of the party.', '她属于该党的左翼。', [], ['left'], 'noun', 'countable', '政治'],
  ], '', [], 'left + wing；近义 left 左翼、左派。短语分级留空').phrase = true;

  W('left-hand side', 'noun', '/ˌleft hænd ˈsaɪd/', '', [], '左侧', 'The side that is on the left.', [
    ['左侧', 'The side of something that is on the left.', '某物的左手一边。', '可数：on the left-hand side。', 'The button is on the left-hand side.', '按钮在左侧。', ['on the left-hand side'], ['left'], 'noun', 'countable', '通用'],
  ], '', [], 'left + hand + side；近义 left 左侧。短语分级留空').phrase = true;

  W('leftovers', 'noun', '/ˈleftəʊvəz/', 'A1', [], '剩饭菜；剩余物', 'Food or things that are left.', [
    ['剩饭菜；剩余物', 'Food or things that are left after the rest has been used.', '用剩下来的食物或东西。', '复数。', 'We ate the leftovers for lunch.', '我们午饭吃了剩菜。', [], ['remain'], 'noun', 'countable', '饮食'],
  ], '',['left', 'over'], 'left A1 + over——首成分 left 在库，A1 继承；近义 remain 剩余物（动词原形 remain 剩下）');

  W('legalize', 'verb', '/ˈliːɡəlaɪz/', 'B1', [], '使合法化', 'To make something legal.', [
    ['使合法化', 'To make something legal that was not before.', '通过法律使某事由非法变为合法。', '及物，英式拼 legalize；美式 legalise。', 'The country legalized same-sex marriage.', '这个国家使同性婚姻合法化。', [], ['legitimate'], 'verb', '及物', '法律'],
  ], 'legalizes~legalized~legalized~legalizing',['legal'], '←legal B1 + -ize（透明后缀），B1 继承；近义 legitimate 使合法');

  W('legislation', 'noun', '/ˌleɡɪsˈleɪʃn/', 'C1', ['CET4'], '法律；立法', 'Laws considered as a whole.', [
    ['法律；立法', 'The laws made by a parliament, or the act of making them.', '成文法律整体；也指立法行为。', '不可数。', 'Parliament passed new legislation.', '议会通过了新法律。', ['introduce legislation'], ['law'], 'noun', 'uncountable', '法律'],
  ], '',['law', 'legislate'], '←legislate C1 + -ion（透明后缀，e→ion），C1 继承；家族/近义 law 法律、法规');

  W('legislature', 'noun', '/ˈleɡɪslətʃə/', 'C1', [], '立法机构', 'The group that makes laws.', [
    ['立法机构', 'The group of people who have the power to make laws.', '有权制定法律的机构。', '可数。', 'The legislature approved the budget.', '立法机构批准了预算。', [], ['parliament'], 'noun', 'countable', '政治'],
  ], 'legislatures',['parliament', 'legislate'], '←legislate C1 + -ure（透明后缀），C1 继承；家族/近义 parliament 议会');

  W('leisurely', 'adverb/adjective', '/ˈleʒəli/', 'B1', ['CET4'], '悠闲地；从容的', 'In a slow relaxed way.', [
    ['悠闲地；从容的', 'In a slow relaxed way, without hurry.', '不慌不忙、慢慢来的。', '副词与形容词两用。', 'They took a leisurely walk.', '他们悠闲地散了散步。', ['a leisurely pace'], ['lazy'], 'adverb/adjective', 'null', '通用'],
  ], '',['leisure'], '←leisure B1 + -ly（透明后缀），B1 继承（brief 根提示）；近义 lazy 慢悠悠的、懒散的');

  W('lending', 'noun', '/ˈlendɪŋ/', 'A2', [], '借出；放贷', 'The act of lending money or things.', [
    ['借出；放贷', 'The act of lending money, especially by a bank.', '借出；尤指银行放贷。', '不可数。', 'Lending to small firms fell.', '对小企业的放贷下降了。', [], ['loan'], 'noun', 'uncountable', '金融'],
  ], '',['lend'], '←lend A2 + -ing（透明后缀），A2 继承（brief 根提示）；近义 loan 贷款');

  W('length', 'noun', '/leŋθ/', '', ['CET4'], '长度', 'How long something is.', [
    ['长度', 'How long something is from end to end.', '物体两端之间的长短。', '可数或不可数：in length。', 'Measure the length of the rope.', '量一下这根绳子的长度。', ['in length'], ['duration', 'span'], 'noun', 'countable', '通用'],
  ], 'lengths', ['duration'], 'long + -th——先例 deep A2→depth B1、heal B2→health A2、young A1→youth B1 三例均脱钩，-th 不走词根继承，自身级无把握，故留空；家族/近义 duration 时长、span 幅度');

  W('lengthen', 'verb', '/ˈleŋθən/', '', [], '变长；加长', 'To make or become longer.', [
    ['变长；加长', 'To make something longer, or to become longer.', '使某物变长；也指自己变长。', '可及物或不及物。', 'They lengthened the dress.', '他们把连衣裙加长了。', [], ['extend', 'prolong', 'stretch'], 'verb', '及物', '通用'],
  ], 'lengthens~lengthened~lengthened~lengthening', ['prolong'], 'length + -en——首成分 length（本批，等级随 -th 留空），无级可继，故留空；家族 prolong 延长，近义 extend 扩展、stretch 拉伸');

  W('lengthy', 'adjective', '/ˈleŋθi/', '', ['CET4'], '冗长的；漫长的', 'Taking a long time.', [
    ['冗长的；漫长的', 'Taking a long time, often too long.', '耗时过久的（常含厌烦）。', '定语。', 'The lengthy process took months.', '这个漫长的过程花了几个月。', [], ['long', 'marathon'], 'adjective', '定语', '通用'],
  ], '', ['long'], 'length + -y——首成分 length（本批，等级随 -th 留空），无级可继，故留空；家族/近义 long 长的，近义 marathon 马拉松式的（超长）');

  W('less than', 'determiner', '/ˌles ˈðæn/', '', [], '少于；不到', 'Smaller in number or amount.', [
    ['少于；不到', 'Smaller in number or amount than something else.', '数量或程度低于某值。', '常接数词或量词。', 'It cost less than ten dollars.', '这东西花了不到十美元。', [], ['under'], 'determiner', 'null', '语法'],
  ], '', [], 'less + than；近义 under 在…之下。短语分级留空').phrase = true;

  W('lessee', 'noun', '/ˌlesiː/', 'B2', [], '承租人', 'A person who rents something.', [
    ['承租人', 'A person who rents property from an owner.', '从出租方租用财产的人。', '可数，法律用语。', 'The lessee signed the contract.', '承租人签了合同。', [], ['tenant'], 'noun', 'countable', '法律'],
  ], 'lessees',['tenant', 'lease'], '←lease B2（音变：ea→e、双写 s）+ -ee（承受者后缀），B2 继承；家族/近义 tenant 承租人');

  W('lesser', 'adjective', '/ˈlesə/', 'A2', [], '较小的；次要的', 'Smaller or less important.', [
    ['较小的；次要的', 'Smaller in degree or less important.', '程度更小、更次要的。', '定语，不用于比较级。', 'It was the lesser of two evils.', '这是两害相权取其轻。', ['the lesser evil'], ['secondary'], 'adjective', '定语', '通用'],
  ], '',['secondary', 'less'], '←less A2 + -er（比较级），A2 继承（brief 根提示）；家族/近义 secondary 次要的');

  W('lessor', 'noun', '/ˌlesɔː/', 'B2', [], '出租方', 'A person who lets property for rent.', [
    ['出租方', 'A person or company that lets property to someone else.', '把财产租给他人的一方。', '可数，法律用语。', 'The lessor agreed to repair the roof.', '出租方同意修理屋顶。', [], ['landlord'], 'noun', 'countable', '法律'],
  ], 'lessors',['landlord', 'lease'], '←lease B2（音变同 lessee）+ -or（施事后缀），B2 继承；家族/近义 landlord 房东、出租方');

})(typeof window !== 'undefined' ? window : globalThis);
