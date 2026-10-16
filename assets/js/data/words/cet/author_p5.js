/* data/words/cet/author_p5.js — 常用词 P 批次 5，缺口 passing ~ perceptive，共 31 条
 * （24 单词 + 7 短语：pass away、pass laws、pass on、pass out、passive voice、pay back、pecking order）
 * 来源：family + 义项近反义缺口，refs 逐字照抄队列；考级标签照抄队列（6 条全部 CET4：
 * passionate、payment、peaceful、percentage、perception、perceptive）。
 * 扫根结论：passion B1、penalty B2、pendulum C1、pepper A1、perceive B2（均在 author_p1）——
 * passionate←passion B1 + -ate、payment←pay A1 + -ment、payable←pay A1 + -able、
 * peaceful←peace A2 + -ful、perception←perceive B2 + -tion、perceptive←perceive B2 + -ive；
 * patients←patient A2 复数、passing←pass A2 + -ing（brief 根提示）；
 * penalize 判定 ←penalty B2（词干 penal 共享、-y/-ize 名动互变，penal 非独立词条，同
 * optimal←optimum 兄弟派生先例）；pendant 判定 ←pendulum C1（词干 pend 共享、悬挂义直连）；
 * peppermint 取首成分 pepper A1（minibus 首成分模式）；
 * 留空项：pastor（形含 past 但语义无关，切词假象）、pathogen（同 path 假象）、
 * penmanship（-manship 属 -ship 类不继承，pen 虽在库同 orphanage 先例）、
 * percentage（-age 不继承，percent 虽在库同先例）、patio/patty/pavilion/pe/pebble/pee/peek/
 * pelt/pelvis（无库内可见词根）。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_p5.js 必须在 _cet_helper.js 之后加载');

  W('passing', 'adjective/noun', '/ˈpɑːsɪŋ/', 'A2', [], '短暂的；流逝', 'Lasting only a short time, or the passage of time.', [
    ['短暂的', 'Lasting for only a short time.', '只持续很短时间的。', '定语或表语。', 'Her interest was passing.', '她的兴趣只是一时的。', [], ['transient'], 'adjective', '定语/表语', '通用'],
    ['流逝；经过', 'The passage of a period of time or an event.', '一段时间或事件的过去。', '不可数，常与 of 连用。', 'The passing of the old mill marked the end of an era.', '老磨坊的拆除标志着一个时代的结束。', [], ['passage'], 'noun', 'uncountable', '通用'],
  ], '',['pass'], '←pass A2 + -ing（分词/动名词），A2 继承（brief 根提示）；近义 transient 短暂的、passage 流逝（同词族回指）');

  W('passionate', 'adjective', '/ˈpæʃənət/', 'B1', ['CET4'], '热情的；狂热的', 'Showing strong feelings about something.', [
    ['热情的；狂热的', 'Showing strong feelings about something.', '对某事表现出强烈感情的。', '定语或表语。', 'She gave a passionate speech about the river.', '她就这条河发表了充满激情的演讲。', ['passionate about'], ['ardent', 'fierce', 'intense'], 'adjective', '定语/表语', '情感'],
  ], '',['passion'], '←passion B1 + -ate（透明后缀），B1 继承（brief 显示 ←?，自行扫根 passion）；近义 ardent 热烈的、fierce 猛烈的、intense 强烈的');

  W('pastor', 'noun', '/ˈpɑːstə/', '', [], '牧师', 'A minister in a Christian church.', [
    ['牧师', 'A minister in a Christian church.', '基督教会的牧师。', '可数。', 'The pastor greeted everyone at the door.', '牧师在门口迎接每个人。', [], ['minister'], 'noun', 'countable', '宗教'],
  ], 'pastors', ['minister'], '拉丁 pastor（牧羊人）——形含 past（A2）但语义无关（切词假象，同 obliterate 先例），留空；家族/近义 minister 牧师、部长');

  W('pathogen', 'noun', '/ˈpæθədʒən/', '', [], '病原体', 'A germ that causes disease.', [
    ['病原体', 'A germ that causes disease.', '引起疾病的微生物。', '可数，医学术语。', 'The pathogen spreads through water.', '该病原体经水传播。', [], ['virus'], 'noun', 'countable', '科学'],
  ], 'pathogens', [], '希腊 patho-（病）+ -gen——形含 path（小径）但语义无关（切词假象），留空；近义 virus 病毒');

  W('patients', 'noun', '/ˈpeɪʃnts/', 'A2', [], '病人们', 'People receiving medical care.', [
    ['病人们', 'People receiving medical care.', '接受医疗护理的人们。', 'patient 的复数形式。', 'The patients waited in the corridor.', '病人们在走廊里等候。', [], ['sick'], 'noun', 'countable', '健康'],
  ], '',['patient'], '←patient A2 的复数形式，A2 继承（brief 根提示）；近义 sick 病人（the sick 集合用法）');

  W('patio', 'noun', '/ˈpætiəʊ/', '', [], '露台；庭院', 'A paved area next to a house, used to sit on.', [
    ['露台；庭院', 'A paved area next to a house, used to sit on.', '房屋旁铺砌的露天坐处。', '可数，英式亦指后院。', 'We ate on the patio in the evening.', '晚上我们在露台上吃饭。', [], ['courtyard', 'terrace'], 'noun', 'countable', '家居'],
  ], 'patios', ['courtyard', 'terrace'], '西班牙语 patio（庭院）——无库内可见词根，留空；家族 courtyard 庭院、terrace 露台，近义同');

  W('patty', 'noun', '/ˈpæti/', '', [], '肉饼；小圆饼', 'A small flat cake of minced meat or other food.', [
    ['肉饼；小圆饼', 'A small flat cake of minced meat or other food.', '用碎肉或其他食物压成的小扁饼。', '可数。', 'He fried a beef patty for dinner.', '他煎了一块牛肉饼当晚餐。', [], ['hamburger'], 'noun', 'countable', '饮食'],
  ], 'patties', ['hamburger'], 'patty 与 pat（轻拍）非同源，无库内可见词根，留空；家族/近义 hamburger 汉堡包');

  W('pavilion', 'noun', '/pəˈvɪliən/', '', [], '亭子；展馆', 'A light building used for shelter, shows, or sports.', [
    ['亭子；展馆', 'A light building used for shelter, shows, or sports.', '供休憩、展览或体育活动使用的轻便建筑。', '可数。', 'The band played in the riverside pavilion.', '乐队在河边的亭子里演出。', [], ['tent'], 'noun', 'countable', '文化'],
  ], 'pavilions', [], '法语 pavillon（帐篷、亭）——无库内可见词根，留空；近义 tent 帐篷');

  W('pay back', 'verb', '/ˌpeɪ ˈbæk/', '', [], '偿还；报复', 'To give back money, or to punish somebody.', [
    ['偿还', 'To give back money that was borrowed.', '把借来的钱还回去。', '及物，可分开。', 'I paid the loan back over two years.', '我用两年还清了贷款。', ['pay it back'], ['repay'], 'verb', '及物', '金融'],
    ['报复', 'To punish somebody for something bad they did.', '因某人的恶劣行为而报复。', '及物，可分开。', 'They paid him back for the trick.', '他们为那个恶作剧报复了他。', [], [], 'verb', '及物', '社交'],
  ],'pays back~paid back~paying back', ['repay'], 'pay + back；家族/近义 repay 偿还、报复。短语分级留空').phrase = true;

  W('payable', 'adjective', '/ˈpeɪəbl/', 'A1', [], '应付的；可支付的', 'That must be paid or can be paid.', [
    ['应付的', 'That must be paid at a stated time.', '须在规定时间支付的。', '多作表语，与 to 连用。', 'The rent is payable on the first of each month.', '租金每月一号支付。', ['payable to'], ['due'], 'adjective', '表语', '金融'],
  ], '',['pay'], '←pay A1 + -able（透明后缀），A1 继承（brief 显示 ←?，自行扫根 pay，经 payment 根提示确认）；近义 due 到期的');

  W('payment', 'noun', '/ˈpeɪmənt/', 'A1', ['CET4'], '支付；款项', 'The act of paying money, or a sum that is paid.', [
    ['支付（行为）', 'The act of paying for something.', '为某事付钱的行为。', '不可数。', 'We accept payment by card.', '我们接受刷卡支付。', [], ['deposit', 'fee', 'instalment'], 'noun', 'uncountable', '金融'],
    ['款；一笔钱', 'A sum of money that is paid.', '支付的一笔钱。', '可数。', 'The final payment is due in June.', '最后一笔款项六月到期。', [], ['reward', 'sum'], 'noun', 'countable', '金融'],
  ], 'payments',['deposit', 'fee', 'instalment', 'pay'], '←pay A1 + -ment（透明后缀），A1 继承（brief 根提示）；家族 deposit 定金、fee 费用、instalment 分期款，近义 reward 报酬、sum 款项');

  W('pass away', 'verb', '/ˌpæs əˈweɪ/', '', [], '去世', 'To die, said politely.', [
    ['去世', 'To die, said politely.', '死亡的委婉说法。', '不及物，正式或委婉语。', 'Her grandmother passed away last spring.', '去年春天她的祖母去世了。', [], ['die', 'expire'], 'verb', '不及物', '家庭'],
  ], '', [], 'pass + away；近义 die 死、expire 逝世（委婉）。短语分级留空').phrase = true;

  W('pass laws', 'verb', '/ˌpɑːs ˈlɔːz/', '', [], '通过法律', 'To approve laws so that they take effect.', [
    ['通过法律', 'To approve laws so that they take effect.', '批准法律使之生效。', '及物短语，宾语为法案。', 'Parliament passed new laws last year.', '议会去年通过了新法律。', [], ['legislate'], 'verb', '及物', '法律'],
  ], '', [], 'pass + laws；近义 legislate 立法。短语分级留空').phrase = true;

  W('pass on', 'verb', '/ˌpɑːs ˈɒn/', '', [], '转告；转交', 'To give a message or thing to somebody else.', [
    ['转告；转交', 'To give a message or thing to somebody else.', '把信息或物品转给别人。', '及物，可分开，常与 to 连用。', 'Please pass the message on to your team.', '请把消息转给你的团队。', [], ['forward', 'relay', 'transmit'], 'verb', '及物', '社交'],
    ['传给下一代', 'To hand something down to the next generation.', '把某物传给下一代。', '及物，可分开。', 'The craft was passed on within the family.', '这门手艺在家族内传了下来。', [], [], 'verb', '及物', '家庭'],
  ],'passes on~passed on~passing on', ['relay'], 'pass + on；家族 relay 转达，近义 forward 转发、transmit 传送。短语分级留空').phrase = true;

  W('pass out', 'verb', '/ˌpɑːs ˈaʊt/', '', [], '昏倒', 'To become unconscious.', [
    ['昏倒', 'To become unconscious.', '失去知觉。', '不及物。', 'He nearly passed out from the heat.', '他差点热昏过去。', [], ['faint'], 'verb', '不及物', '健康'],
  ], '', [], 'pass + out；近义 faint 昏倒。短语分级留空').phrase = true;

  W('passive voice', 'noun', '/ˌpæsɪv ˈvɔɪs/', '', [], '被动语态', 'The form of a verb where the subject receives the action.', [
    ['被动语态', 'The form of a verb where the subject receives the action.', '主语承受动作的动词形式。', '语法术语，可数或不可数。', 'The passive voice is common in reports.', '被动语态在报告中很常见。', [], ['passive'], 'noun', 'countable', '语法'],
  ], '', [], 'passive + voice；近义 passive 被动的。短语分级留空').phrase = true;

  W('pecking order', 'noun', '/ˈpekɪŋ ˌɔːdə/', '', [], '等级制度；长幼尊卑', 'The way people or animals are ranked by power.', [
    ['等级制度；长幼尊卑', 'The way people or animals are ranked by power.', '人或动物按权力排定的等级。', '可数，常单数。', 'In the pecking order the oldest leads.', '在等级制度中年长者领先。', [], ['hierarchy'], 'noun', 'countable', '社会'],
  ], '', [], 'pecking + order；近义 hierarchy 等级制度。短语分级留空').phrase = true;

  W('pe', 'noun', '/piː/', '', [], '体育课', 'Physical education as a school subject.', [
    ['体育课', 'Physical education as a school subject.', '学校里的体育课科目。', '不可数，首字母常大写为 PE。', 'The class has pe every morning.', '这门课每天早上有体育。', [], ['gym'], 'noun', 'uncountable', '体育'],
  ], '', ['gym'], 'PE（physical education 的缩略，字母词无派生根，留空）；家族/近义 gym 体育馆、体操');

  W('peaceful', 'adjective', '/ˈpiːsfl/', 'A2', ['CET4'], '和平的；安宁的', 'Free from war, or calm and quiet.', [
    ['和平的；安宁的', 'Free from war, or calm and quiet.', '没有战争的；或平静安宁的。', '定语或表语。', 'The protest stayed peaceful all day.', '抗议活动全天保持和平。', ['peaceful protest'], ['calm', 'tranquil'], 'adjective', '定语/表语', '社会'],
  ], '',['calm', 'tranquil', 'peace'], '←peace A2 + -ful（透明后缀），A2 继承（brief 显示 ←?，自行扫根 peace）；家族 calm 平静的、tranquil 宁静的，近义同');

  W('pebble', 'noun', '/ˈpebl/', '', [], '鹅卵石；小石子', 'A small smooth stone worn by water.', [
    ['鹅卵石；小石子', 'A small smooth stone worn by water.', '被水冲磨光滑的小石子。', '可数。', 'She skipped a pebble across the water.', '她让一颗石子在水面上弹跳。', [], ['stone'], 'noun', 'countable', '自然'],
  ], 'pebbles', [], '日耳曼语 pæbbel——无库内可见词根，留空；近义 stone 石头');

  W('pee', 'noun/verb', '/piː/', '', [], '尿；小便', 'Urine, or to pass urine from the body.', [
    ['尿；小便', 'Urine.', '尿液。', '可数或不可数，儿语或委婉。', 'He went to have a pee.', '他去小便了。', [], ['urine'], 'noun', 'uncountable', '健康'],
    ['小便', 'To pass urine from the body.', '排出尿液。', '不及物，儿语或委婉。', 'The dog peed on the rug.', '狗尿在了地毯上。', [], [], 'verb', '不及物', '健康'],
  ], 'pees~peed~peed~peeing', ['urine'], '委婉儿语 pee——无库内可见词根，留空；家族/近义 urine 尿');

  W('peek', 'verb', '/piːk/', '', [], '偷看；窥视', 'To look at something quickly and secretly.', [
    ['偷看；窥视', 'To look at something quickly and secretly.', '快速而秘密地看某物。', '不及物，常与 at 连用。', 'He peeked through the curtain.', '他透过窗帘偷看。', [], ['glance', 'glimpse', 'peep'], 'verb', '不及物', '通用'],
  ], 'peeks~peeked~peeked~peeking', ['glance', 'glimpse', 'peep'], '拟声来源 peek——无库内可见词根，留空；家族 glance 扫视、glimpse 一瞥、peep 偷看，近义同');

  W('pelt', 'noun/verb', '/pelt/', '', [], '皮毛；投掷；下大雨', 'An animal skin, to throw things at, or rain very heavily.', [
    ['皮毛', 'The skin of an animal with the fur still on.', '带毛的动物皮。', '可数。', 'The fox has a thick winter pelt.', '狐狸有厚厚的冬毛。', [], ['fur', 'hide'], 'noun', 'countable', '自然'],
    ['投掷', 'To throw things at somebody hard and repeatedly.', '用力而反复地向某人扔东西。', '及物。', 'They pelted the bus with stones.', '他们向巴士投掷石子。', [], ['stone'], 'verb', '及物', '通用'],
    ['（雨）下得很大', 'To fall very heavily, of rain.', '雨下得很大。', '不及物。', 'The rain pelted down on the roof.', '雨倾盆而下，打在屋顶上。', [], ['rain'], 'verb', '不及物', '自然'],
  ], 'pelts~pelted~pelted~pelting', ['fur'], '一词多义：皮毛（古英语）、投掷与大雨（拟声）——无库内可见词根，留空；家族 fur 毛皮，近 hide 兽皮、rain 雨、stone 石块');

  W('pelvis', 'noun', '/ˈpelvɪs/', '', [], '骨盆', 'The ring of bones at the base of the spine.', [
    ['骨盆', 'The ring of bones at the base of the spine.', '脊柱底部的一圈骨骼。', '可数，解剖学术语。', 'The scan showed a fracture in the pelvis.', '扫描显示骨盆处有骨折。', [], ['hip'], 'noun', 'countable', '健康'],
  ], 'pelvises', ['hip'], '拉丁 pelvis（盆）——无库内可见词根，留空；家族/近义 hip 臀部、髋');

  W('penalize', 'verb', '/ˈpiːnəlaɪz/', 'B2', [], '处罚；使处于不利地位', 'To punish somebody, or to put somebody at a disadvantage.', [
    ['处罚；使处于不利地位', 'To punish somebody, or to put somebody at a disadvantage.', '惩罚某人，或使某人处于不利地位。', '及物。', 'Firms that dump waste will be penalized.', '倾倒废物的公司会受处罚。', [], ['punish', 'sanction'], 'verb', '及物', '法律'],
  ], 'penalizes~penalized~penalized~penalizing',['punish', 'penalty'], '←penalty B2（词干 penal 共享、-y/-ize 名动互变，penal 本身非独立词条），B2 继承（brief 显示 ←?，同 optimal←optimum 兄弟派生先例）；家族 punish 惩罚，近义 sanction 制裁、处罚');

  W('pendant', 'noun', '/ˈpendənt/', 'C1', [], '垂饰；吊坠', 'A piece of jewellery that hangs from a chain around the neck.', [
    ['垂饰；吊坠', 'A piece of jewellery that hangs from a chain around the neck.', '挂在颈链上垂下的饰物。', '可数。', 'She wore a silver pendant on a chain.', '她戴着一条链子上的银吊坠。', [], ['necklace'], 'noun', 'countable', '外貌'],
  ], 'pendants',['necklace', 'pendulum'], '←pendulum C1（词干 pend 共享、悬挂义直连，pend-ant 对 pend-ulum），C1 继承（brief 显示 ←?，自行扫根 pendulum，同 optimal←optimum 兄弟派生先例）；家族/近义 necklace 项链');

  W('penmanship', 'noun', '/ˈpenmənʃɪp/', '', [], '书法；笔迹', 'The style or quality of somebody handwriting.', [
    ['书法；笔迹', 'The style or quality of somebody handwriting.', '某人书写的风格或水平。', '不可数。', 'Years of practice gave her fine penmanship.', '多年的练习让她写得一手好字。', [], ['handwriting'], 'noun', 'uncountable', '教育'],
  ], '', ['handwriting'], 'pen + -manship（-ship 类后缀不在可继承清单），pen 虽在库（A1）仍留空（同 orphanage 先例）；家族/近义 handwriting 笔迹、书法');

  W('peppermint', 'noun', '/ˈpepəmɪnt/', 'A1', [], '薄荷；薄荷糖', 'A plant with a strong fresh taste, or a sweet flavoured with it.', [
    ['薄荷；薄荷糖', 'A plant with a strong fresh taste, or a sweet flavoured with it.', '有强烈清凉味的植物；或薄荷味的糖。', '植物不可数，糖可数。', 'The tea has a sharp peppermint taste.', '这茶有浓烈的薄荷味。', [], ['mint'], 'noun', 'uncountable', '饮食'],
  ], 'peppermints',['pepper'], '首成分 pepper A1 在库（minibus 首成分模式），A1 继承（brief 显示 ←?，自行扫根 pepper）；近义 mint 薄荷');

  W('percentage', 'noun', '/pəˈsentɪdʒ/', '', ['CET4'], '百分比；百分率', 'An amount stated as a number out of one hundred.', [
    ['百分比；百分率', 'An amount stated as a number out of one hundred.', '以百分之几表示的数量。', '常不可数，与 a/the 连用。', 'A large percentage of voters stayed home.', '很大比例的选民没有投票。', [], ['percent', 'proportion', 'rate'], 'noun', 'uncountable', '通用'],
  ], '', ['percent'], 'percent + age；-age 后缀不在可继承清单（同 orphanage/marriage 先例），percent 虽在库仍留空；家族 percent 百分比，近义 proportion 比例、rate 比率');

  W('perception', 'noun', '/pəˈsepʃn/', 'B1', ['CET4'], '感知；看法', 'The way you notice things through the senses, or an opinion.', [
    ['感知；看法', 'The way you notice things through the senses, or an opinion.', '通过感官注意到事物的方式；或一种看法。', '可数或不可数。', 'Colour perception differs from person to person.', '色觉因人而异。', ['visual perception'], ['insight'], 'noun', 'uncountable', '心理'],
  ], 'perceptions',['insight', 'perceive'], '←perceive B2 + -tion（c→ption 名化），B2 继承（brief 显示 ←?，自行扫根 perceive）；家族 insight 洞察力');

  W('perceptive', 'adjective', '/pəˈseptɪv/', 'B1', ['CET4'], '敏锐的；有洞察力的', 'Good at noticing and understanding things.', [
    ['敏锐的；有洞察力的', 'Good at noticing and understanding things.', '善于察觉和理解事物的。', '定语或表语。', 'Her comments were perceptive.', '她的评论很有见地。', [], ['shrewd'], 'adjective', '定语/表语', '性格'],
  ], '',['perceive'], '←perceive B2 + -ive（透明后缀），B2 继承（brief 显示 ←?，自行扫根 perceive）；近义 shrewd 精明的、敏锐的');
})(typeof window !== 'undefined' ? window : globalThis);
