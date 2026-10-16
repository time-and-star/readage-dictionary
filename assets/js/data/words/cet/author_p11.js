/* data/words/cet/author_p11.js — 常用词 P 批次 11，缺口 prescription ~ pro-form，共 31 条
 * （27 单词 + 4 短语：pressure group、price list、prime integer、prime minister）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（11 条全部 CET4：
 * prescription、presence、presently、pressing、pressure、presumption、prevention、priceless、
 * primarily、printer、prisoner）。
 * 扫根结论：present A2、press B1、prevail C1、previous A2、primary B1、principle B2、
 * print A2、prison B1（brief 根提示）；prescribe B2、presume B2、pretend B1、term A2、
 * prevent B1、price A2、priest B1、prime B2（author_p3/t1）——
 * · 拉丁词干交替继承（同 describe→description 类）：prescription←prescribe B2（b→p）、
 *   presumption←presume B2（m→mpt）、pretence/pretense←pretend B1（d→∅+ence/+se 变体）、
 *   pretentious←pretend B1（pretens 全段共享 + -tious）。
 * · 透明后缀：presenter←present A2 + -er、presently←present A2 + -ly、pressing←press B1
 *   + -ing、prevailing←prevail C1 + -ing、previously←previous A2 + -ly、prevention←prevent
 *   B1 + -ion（prevent 全段可见）、previously 之外 primarily←primary B1 + -ly（-ary→-arily）、
 *   principled←principle B2 + -ed、principles/prisoner 复数、presumption/-prevention 同上。
 * · pressure←press B1 + -ure（-ure 按功能透明，判断项，同 pleasure 先例；经 pressing 根
 *   确认）；presence←present A2（词干 pres 全段共享 + -ence，经 presenter 根确认）；
 *   priceless←price A2 + -less；priesthood←priest B1 + -hood。
 * · pre- 前缀排除：preterm←term A2（term 取「孕期」义，minibus 模式）。
 * · 兄弟派生：primate←prime B2（词干 prim 全段共享，e→a 同 organize 类，-ate 透明）。
 * · 留空项：prickle（prick 不在库）、prick、preterite、prise（与 pry 同源拼写不可见）、
 *   pro-form（成分无级可继）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p11.js 必须在 _cet_helper.js 之后加载');

  W('prescription', 'noun', '/prɪˈskrɪpʃn/', 'B2', ['CET4'], '处方；开处方', 'A piece of paper from a doctor for medicine, or the act of prescribing.', [
    ['处方；开处方', 'A piece of paper from a doctor for medicine.', '医生开出的取药单。', '可数。', 'The doctor wrote a prescription.', '医生开了处方。', [], ['recipe'], 'noun', 'countable', '健康'],
  ], 'prescriptions',['prescribe'], '←prescribe B2 + -ion（prescrib→prescrip 的 b→p 词干变化，同 describe→description 类拉丁交替），B2 继承（brief 显示 ←?，自行扫根 prescribe）；近义 recipe 处方、配方');

  W('presence', 'noun', '/ˈprezəns/', 'A2', ['CET4'], '出席；存在', 'The fact of being in a place.', [
    ['出席；存在', 'The fact of being in a place.', '在某处存在的事实。', '不可数，常与 at/in 连用。', 'His presence calmed the room.', '他的出现让房间安静下来。', [], [], 'noun', 'uncountable', '通用'],
  ], '',['absence', 'present'], '←present A2 的同源名词（词干 pres 全段共享，-ence 透明），A2 继承（brief 显示 ←?，经 presenter/presently 的 present[A2] 根提示确认）；家族 absence 缺席；队列近义为空');

  W('presenter', 'noun', '/prɪˈzentə/', 'A2', [], '主持人；演讲者', 'A person who presents a television or radio show.', [
    ['主持人；演讲者', 'A person who presents a television or radio show.', '主持电视或广播节目的人。', '可数。', 'The presenter introduced the guest.', '主持人介绍了嘉宾。', [], ['host'], 'noun', 'countable', '媒体'],
  ], 'presenters',['present'], '←present A2 + -er（施事后缀），A2 继承（brief 根提示）；近义 host 主持人、东道主');

  W('presently', 'adverb', '/ˈprezntli/', 'A2', ['CET4'], '不久；目前', 'Soon, or at the present time.', [
    ['不久；目前', 'Soon, or at the present time.', '很快；或在当前时间。', '修饰整句，较正式。', 'The train will presently arrive.', '火车即将到达。', [], ['shortly', 'soon'], 'adverb', '不及物', '通用'],
  ], '',['present'], '←present A2 + -ly（透明后缀，「不久」义），A2 继承（brief 根提示）；近 shortly 不久、soon 很快');

  W('pressing', 'adjective', '/ˈpresɪŋ/', 'B1', ['CET4'], '紧迫的；迫切的', 'Needing to be dealt with very soon.', [
    ['紧迫的；迫切的', 'Needing to be dealt with very soon.', '需要很快处理的。', '多作定语。', 'A pressing need for water arose.', '出现了迫切的用水需求。', [], ['immediate', 'instant', 'urgent'], 'adjective', '定语', '通用'],
  ], '',['urgent', 'press'], '←press B1 + -ing（透明后缀，分词形容词「紧迫的」），B1 继承（brief 根提示）；家族 urgent 紧急的，近 immediate 立即的、instant 即时的、urgent');

  W('pressure', 'noun', '/ˈpreʃə/', 'B1', ['CET4'], '压力；施压', 'The force produced by pushing, or efforts to make somebody do something.', [
    ['压力；气压', 'The force produced by pushing or by the weight of air.', '由推挤或空气重量产生的力。', '不可数或可数。', 'The pressure inside the tank rose.', '罐内压力升高。', ['water pressure'], ['stress'], 'noun', 'uncountable', '通用'],
    ['压迫；施压', 'Efforts to make somebody do something.', '迫使某人做某事的努力。', '不可数，常与 put/bring 连用。', 'They put pressure on the council.', '他们向议会施压。', ['put pressure on'], ['siege'], 'noun', 'uncountable', '社会'],
  ], 'pressures',['siege', 'stress', 'press'], '←press B1 + -ure（-ure 按功能透明处理，判断项，同 pleasure 先例），B1 继承（brief 显示 ←?，经 pressing←press[B1] 根提示确认）；家族 siege 围困、stress 压力，近义同');

  W('pressure group', 'noun', '/ˈpreʃə ɡruːp/', '', [], '压力集团', 'A group that tries to influence government decisions.', [
    ['压力集团', 'A group that tries to influence government decisions.', '试图影响政府决策的团体。', '可数。', 'A pressure group challenged the bill.', '压力集团对该法案提出异议。', [], ['lobby'], 'noun', 'countable', '政治'],
  ], '', [], 'pressure + group；近义 lobby 说客集团、游说团体。短语分级留空').phrase = true;

  W('presumption', 'noun', '/prɪˈzʌmpʃn/', 'B2', ['CET4'], '推定；冒昧', 'Something assumed without proof, or rude overconfidence.', [
    ['推定；假设', 'A statement that something is assumed to be true without proof.', '未经证明即认为某事为真的说法。', '可数，较正式。', 'The law sets a presumption of innocence.', '法律确立了无罪推定。', [], [], 'noun', 'countable', '法律'],
    ['冒昧；放肆', 'Rude overconfidence.', '无礼的过度自信。', '可数，较 formal。', 'The reply showed a sheer presumption.', '回复显示出十足的冒昧。', [], ['liberty'], 'noun', 'countable', '社交'],
  ], 'presumptions',['presume'], '←presume B2 + -ion（presum→presumpt 的 m→pt 词干变化，同 describe→description 类拉丁交替），B2 继承（brief 显示 ←?，自行扫根 presume）；近义 liberty 放肆、冒昧');

  W('pretence', 'noun', '/prɪˈtens/', 'B1', [], '假装；做作', 'A behaviour that hides the truth, for example to seem better.', [
    ['假装；做作', 'A behaviour that hides the truth, for example to seem better.', '掩饰真相的行为，例如想显得更好。', '可数或不可数，英式。', 'He kept up a pretence of interest.', '他装出感兴趣的样子。', [], ['hypocrisy'], 'noun', 'countable', '社交'],
  ], 'pretences',['hypocrisy', 'pretend'], '←pretend B1（pretend→pretens 的 d→∅+ence 变化，同 defence←defend 类），B1 继承（brief 显示 ←?，自行扫根 pretend）；家族/近义 hypocrisy 虚伪、伪善');

  W('pretense', 'noun', '/prɪˈtens/', 'B1', [], '假装；借口', 'A behaviour that hides the truth.', [
    ['假装；借口', 'A behaviour that hides the truth.', '掩饰真相的行为。', '可数或不可数，美式。', 'Her calm was a pretense.', '她的镇定是装出来的。', [], ['pretext'], 'noun', 'countable', '社交'],
  ], 'pretenses',['pretend'], 'pretence 的美式拼写变体——←pretend B1 同源（d→∅+ense），B1 继承（brief 显示 ←?，自行扫根 pretend）；近义 pretext 借口、托词');

  W('pretentious', 'adjective', '/prɪˈtenʃəs/', 'B1', [], '做作的；自命不凡的', 'Trying to seem more important or clever than you are.', [
    ['做作的；自命不凡的', 'Trying to seem more important or clever than you are.', '试图显得比实际更重要或更聪明的。', '多作定语或表语。', 'The film felt pretentious at times.', '这部电影有时显得做作。', [], ['precious'], 'adjective', '定语/表语', '性格'],
  ], '',['pretend'], '←pretend B1（词干 pretens 全段可见于 pretentious，-tious 为 -ous 类透明后缀），B1 继承（brief 显示 ←?，自行扫根 pretend，兄弟派生）；近义 precious 做作的、矫饰的');

  W('preterite', 'noun', '/ˈpretərɪt/', '', [], '过去时', 'The form of a verb that shows past time.', [
    ['过去时', 'The form of a verb that shows past time.', '表示过去时间的动词形式。', '可数或不可数，语法术语。', 'The verb is in the preterite tense.', '这个动词用的是过去时。', [], ['past'], 'noun', 'uncountable', '语法'],
  ], 'preterites', [], '拉丁 praeteritum（过去时）——无库内可见词根，留空；近义 past 过去时、过去的');

  W('preterm', 'adjective', '/ˈpriːtɜːm/', 'A2', [], '早产的；产前的', 'Born or happening before the normal time of birth.', [
    ['早产的；产前的', 'Born or happening before the normal time of birth.', '在正常出生时间之前出生或发生的。', '多作定语。', 'She gave birth preterm.', '她早产了。', [], ['premature'], 'adjective', '定语', '健康'],
  ], '',['term'], 'pre-（前）为前缀（同 over-/para- 类排除），取其后 term A2（minibus 模式，term 取「孕期」义），A2 继承（brief 显示 ←?，自行扫根 term）；近义 premature 早产的、过早的');

  W('prevailing', 'adjective', '/prɪˈveɪlɪŋ/', 'C1', [], '流行的；主要的', 'Existing or accepted at the present time.', [
    ['流行的；主要的', 'Existing or accepted at the present time.', '当前存在或被接受的。', '多作定语，较正式。', 'The prevailing wind blows west.', '常年盛行风从西边吹来。', [], ['current'], 'adjective', '定语', '通用'],
  ], '',['prevail'], '←prevail C1 + -ing（透明后缀，分词形容词），C1 继承（brief 根提示）；近 current 当前的、流行的');

  W('prevention', 'noun', '/prɪˈvenʃn/', 'B1', ['CET4'], '预防；防止', 'The act of stopping something from happening.', [
    ['预防；防止', 'The act of stopping something from happening.', '阻止某事发生的行为。', '不可数。', 'Prevention beats treatment later.', '预防胜过日后的治疗。', [], ['precaution'], 'noun', 'uncountable', '通用'],
  ], '',['prevent'], '←prevent B1 + -ion（prevent 全段可见于 prevention），B1 继承（brief 显示 ←?，自行扫根 prevent）；近义 precaution 预防措施');

  W('previously', 'adverb', '/ˈpriːviəsli/', 'A2', [], '以前；先前', 'At some time in the past.', [
    ['以前；先前', 'At some time in the past.', '在过去某个时间。', '修饰整句。', 'They had met previously in Lisbon.', '他们此前在里斯本见过。', [], ['hitherto', 'once', 'yesterday'], 'adverb', '不及物', '通用'],
  ], '',['hitherto', 'previous'], '←previous A2 + -ly（透明后缀），A2 继承（brief 根提示）；家族 hitherto 迄今，近 once 曾经、yesterday 昨天');

  W('price list', 'noun', '/ˈpraɪs lɪst/', '', [], '价目表', 'A list showing the prices of goods.', [
    ['价目表', 'A list showing the prices of goods.', '列出商品价格的清单。', '可数。', 'The shop printed a new price list.', '商店印了新的价目表。', [], ['tariff'], 'noun', 'countable', '商务'],
  ], '', [], 'price + list；近义 tariff 价目表、关税表。短语分级留空').phrase = true;

  W('priceless', 'adjective', '/ˈpraɪsləs/', 'A2', ['CET4'], '无价的；极珍贵的', 'Too valuable to have a price.', [
    ['无价的；极珍贵的', 'Too valuable to have a price.', '珍贵得无法定价的。', '多作表语或定语。', 'The vase is priceless.', '这只花瓶无价。', [], ['invaluable', 'precious'], 'adjective', '定语/表语', '通用'],
  ], '',['invaluable', 'price'], '←price A2 + -less（透明后缀，「无价的」），A2 继承（brief 显示 ←?，自行扫根 price）；家族 invaluable 无价的，近 precious 珍贵的');

  W('prick', 'noun/verb', '/prɪk/', '', [], '扎；刺痛', 'A small sharp pain, or to make one.', [
    ['扎；刺痛', 'A small sharp pain, or to make one.', '小而尖锐的痛；或使之产生这种痛。', '可数或作动词及物。', 'The pin gave a sharp prick.', '别针狠狠扎了一下。', [], ['pierce', 'sting'], 'noun/verb', 'countable/及物', '健康'],
  ], 'pricks~pricked~pricked~pricking', ['sting'], '日耳曼语 pricke（刺）——无库内可见词根，留空；家族 sting 蜇、刺，近 pierce 刺穿、sting 蛰');

  W('prickle', 'noun/verb', '/ˈprɪkl/', '', [], '刺；感到刺痛', 'A sharp point on a plant, or a stinging feeling.', [
    ['刺；感到刺痛', 'A sharp point on a plant, or a stinging feeling.', '植物上的尖刺；或刺痛感。', '可数或作动词。', 'The prickle of thorns stopped them.', '荆棘的刺挡住了他们。', [], ['thorn'], 'noun/verb', 'countable', '自然'],
  ], 'prickles~prickled~prickled~prickling', ['thorn'], 'prick + -le（指小后缀）——prick 不在库，无成分级可继，留空（同 nonreader 先例）；家族/近义 thorn 荆棘、刺');

  W('priesthood', 'noun', '/ˈpriːsthʊd/', 'B1', [], '神职；神职人员（总称）', 'The work or position of a priest, or priests as a group.', [
    ['神职；神职人员（总称）', 'The work or position of a priest, or priests as a group.', '祭司的职位或工作；或祭司群体。', '不可数。', 'He entered the priesthood at twenty.', '他二十岁进入神职。', [], ['clergy'], 'noun', 'uncountable', '宗教'],
  ], '',['clergy', 'priest'], '←priest B1 + -hood（透明后缀），B1 继承（brief 显示 ←?，自行扫根 priest）；家族/近义 clergy 神职人员');

  W('primarily', 'adverb', '/praɪˈmerəli/', 'B1', ['CET4'], '主要地', 'Mainly, or for the most part.', [
    ['主要地', 'Mainly, or for the most part.', '主要是；大部分是。', '修饰整句。', 'The rule targets primarily schools.', '这条规定主要针对学校。', [], ['foremost'], 'adverb', '不及物', '通用'],
  ], '',['foremost', 'primary'], '←primary B1 + -ly（-ary→-arily 正字变化），B1 继承（brief 根提示）；家族/近义 foremost 最主要的');

  W('primate', 'noun', '/ˈpraɪmeɪt/', 'B2', [], '灵长目动物', 'An animal of the group that includes monkeys and humans.', [
    ['灵长目动物', 'An animal of the group that includes monkeys and humans.', '包括猴和人在内的动物类群成员。', '可数，动物学术语。', 'This primate uses tools.', '这种灵长类会使用工具。', [], ['monkey'], 'noun', 'countable', '自然'],
  ], 'primates',['prime'], '←prime B2（词干 prim 全段共享，-ate 透明且 e→a 同 organize→organization 类），B2 继承（brief 显示 ←?，自行扫根 prime，兄弟派生）；近义 monkey 猴子');

  W('prime integer', 'noun', '/praɪm ˈɪntɪdʒə/', '', [], '质数', 'A whole number greater than 1 that has no factors except 1 and itself.', [
    ['质数', 'A whole number greater than 1 that has no factors except 1 and itself.', '大于 1 且只有 1 和自身两个因数的整数。', '可数，数学术语。', 'Seven is a prime integer.', '七是质数。', [], ['prime'], 'noun', 'countable', '科学'],
  ], '', [], 'prime + integer；近义 prime 质数的。短语分级留空').phrase = true;

  W('prime minister', 'noun', '/praɪm ˈmɪnɪstə/', '', [], '总理；首相', 'The head of government in many countries.', [
    ['总理；首相', 'The head of government in many countries.', '许多国家的政府首脑。', '可数，常大写。', 'The prime minister met the president.', '总理会见了总统。', [], ['premier'], 'noun', 'countable', '政治'],
  ], '', ['premier'], 'prime + minister；家族/近义 premier 首相、总理。短语分级留空').phrase = true;

  W('principled', 'adjective', '/ˈprɪnsəpld/', 'B2', [], '有原则的；有道德准则的', 'Acting according to clear moral rules.', [
    ['有原则的；有道德准则的', 'Acting according to clear moral rules.', '按照明确道德准则行事的。', '多作定语，常构成复合词。', 'She is a principled negotiator.', '她是有原则的谈判者。', [], ['conscientious'], 'adjective', '定语', '性格'],
  ], '',['conscientious', 'principle'], '←principle B2 + -ed（-e→∅+ed，-ed 透明），B2 继承（brief 根提示）；家族/近义 conscientious 有原则的、认真的');

  W('principles', 'noun', '/ˈprɪnsəplz/', 'B2', [], '原则；准则（复数）', 'Moral rules that guide behaviour.', [
    ['原则；准则（复数）', 'Moral rules that guide behaviour.', '指导行为的道德规则。', 'principle 的复数形式。', 'The school holds to old principles.', '学校坚持老原则。', ['basic principles'], ['moral', 'value'], 'noun', 'countable', '社会'],
  ], '',['principle'], '←principle B2 的复数形式，B2 继承（brief 根提示）；近义 moral 道德准则、value 价值观');

  W('printer', 'noun', '/ˈprɪntə/', 'A2', ['CET4'], '打印机', 'A machine that puts text or images onto paper.', [
    ['打印机', 'A machine that puts text or images onto paper.', '把文字或图像印到纸上的机器。', '可数。', 'The printer needs new toner.', '打印机需要新碳粉。', [], ['press'], 'noun', 'countable', '工业'],
  ], 'printers',['print'], '←print A2 + -er（施事后缀），A2 继承（brief 根提示）；近义 press 印刷机、印刷业');

  W('prise', 'verb', '/praɪz/', '', [], '撬开', 'To force something open with a tool.', [
    ['撬开', 'To force something open with a tool.', '用工具把某物撬开。', '及物，英式，常与 open 连用。', 'He prised the lid open with a tool.', '他用工具撬开了盖子。', ['prised open'], ['lever'], 'verb', '及物', '工具'],
  ], 'prises~prised~prised~prising', [], '英式变体（与 pry 同源）——无库内可见词根，留空；近义 lever 杠杆、撬棒');

  W('prisoner', 'noun', '/ˈprɪznə/', 'B1', ['CET4'], '囚犯；俘虏', 'A person kept in prison or held by an enemy.', [
    ['囚犯；俘虏', 'A person kept in prison or held by an enemy.', '被关在监狱或被敌人扣押的人。', '可数。', 'The prisoner asked for a lawyer.', '囚犯要求请律师。', ['take prisoner'], ['captive', 'convict', 'hostage', 'inmate'], 'noun', 'countable', '法律'],
  ], 'prisoners',['captive', 'convict', 'hostage', 'inmate', 'prison'], '←prison B1 + -er（-on→oner 派生），B1 继承（brief 根提示）；家族 captive 俘虏、convict 囚犯、hostage 人质、inmate 囚徒，近义同');

  W('pro-form', 'noun', '/ˌprəʊ ˈfɔːm/', '', [], '（语法）替代形式', 'A word that stands in for another word or words.', [
    ['（语法）替代形式', 'A word that stands in for another word or words.', '替代其他词的词。', '可数，语言学术语。', 'The pronoun is a pro-form.', '代词是一种替代形式。', [], ['pronoun'], 'noun', 'countable', '语法'],
  ], 'pro-forms', [], 'pro-（代替）+ form——无库内成分级可继，留空；近义 pronoun 代词');
})(typeof window !== 'undefined' ? window : globalThis);
