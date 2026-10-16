/* data/words/cet/author_i6.js · 手敲词条 I（六·前段）：icecap ~ implicate（含 4 短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_i6.js 必须在 _cet_helper.js 之后加载');

  W('icecap', 'noun', '/ˈaɪskæp/', 'A1', [], '冰盖', 'Thick ice over land.', [
    ['冰盖', 'Thick ice over land.', '陆地上厚厚的冰。', '可数。', 'The icecap melts slowly.', '冰盖缓慢融化。', [], ['glacier'], 'noun', 'countable', '自然'],
  ], 'icecaps', ['ice', 'cap', 'glacier'], '←ice A1 + cap（首成分），A1 继承；家族 glacier 冰川');

  W('idealize', 'verb', '/aɪˈdiːəlaɪz/', 'A2', [], '美化', 'To picture as perfect.', [
    ['美化', 'To picture as perfect.', '想象成完美的。', '及物。', 'Poets idealized nature.', '诗人美化了自然。', [], ['romance'], 'verb', '及物', '文化'],
  ], 'idealizes~idealized~idealized~idealizing', ['ideal'], '←ideal A2 + -ize，A2 继承；近义 romance 美化（传奇化）');

  W('identical', 'adjective', '/aɪˈdentɪkl/', '', ['CET4'], '相同的', 'Exactly the same.', [
    ['相同的', 'Exactly the same.', '完全一样。', 'be identical to 与…相同。', 'The twins look identical.', '双胞胎长得一样。', ['identical to'], ['duplicate', 'equal', 'same'], 'adjective', '定语/表语', '通用'],
  ], '', ['duplicate', 'equal', 'same'], 'ident-（拉丁 idem 相同）+ -ical——与 identity 姐妹派生（同 dominion 模式），故留空；家族 duplicate 完全相同的、equal 相等的、same 相同的');

  W('identical thing', 'noun', '/aɪˈdentɪkl ˈθɪŋ/', '', [], '同样的东西', 'Exactly the same thing.', [
    ['同样的东西', 'Exactly the same thing.', '完全一样的东西。', '可数。', 'We bought the identical thing.', '我们买了同样的东西。', [], ['same'], 'noun', 'countable', '通用'],
  ], '', ['same'], 'identical 相同的 + thing 东西；近义 same 同样。短语分级留空').phrase = true;

  W('idler', 'noun', '/ˈaɪdlə(r)/', 'B2', [], '懒汉', 'One avoiding work.', [
    ['懒汉', 'One avoiding work.', '逃避干活的人。', '可数，贬义。', 'Do not be an idler.', '别当懒汉。', [], ['passenger'], 'noun', 'countable', '性格'],
  ], 'idlers', ['idle'], '←idle B2 + -er（表人），B2 继承；近义 passenger 搭便车者（吃白食义）');

  W('idolize', 'verb', '/ˈaɪdəlaɪz/', 'B2', [], '崇拜', 'To love too much.', [
    ['崇拜', 'To love too much.', '过分喜爱。', '及物。', 'Fans idolize the star.', '粉丝崇拜明星。', [], ['worship'], 'verb', '及物', '文化'],
  ], 'idolizes~idolized~idolized~idolizing', ['idol'], '←idol B2 + -ize，B2 继承；近义 worship 崇拜');

  W('if not', 'conjunction', '/ˌɪf ˈnɒt/', '', [], '要不；如果不', 'Or else.', [
    ['要不；如果不', 'Or else.', '否则。', '连词短语。', 'Hurry, if not we miss it.', '快点，要不赶不上了。', [], ['unless'], 'conjunction', 'null', '通用'],
  ], '', ['unless'], 'if 如果 + not 不；家族 unless 除非。短语分级留空').phrase = true;

  W('ill luck', 'noun', '/ˌɪl ˈlʌk/', '', [], '厄运', 'Bad fortune.', [
    ['厄运', 'Bad fortune.', '坏运气。', '不可数。', 'Ill luck followed him.', '厄运跟着他。', [], ['misfortune'], 'noun', 'uncountable', '通用'],
  ], '', [], 'ill 坏 + luck 运气；近义 misfortune 厄运。短语分级留空').phrase = true;

  W('ill will', 'noun', '/ˌɪl ˈwɪl/', '', [], '恶意', 'Bad feelings to others.', [
    ['恶意', 'Bad feelings to others.', '对别人的坏心。', '不可数：bear ill will 怀恨。', 'She bears no ill will.', '她毫无恶意。', ['bear ill will'], ['malice', 'spite'], 'noun', 'uncountable', '情感'],
  ], '', [], 'ill 坏 + will 意愿（恶意）；近义 malice 恶意、spite 怨恨。短语分级留空').phrase = true;

  W('illness', 'noun', '/ˈɪlnəs/', 'A2', ['CET4'], '疾病', 'Being ill; a disease.', [
    ['疾病', 'Being ill; a disease.', '生病，或具体的病。', '可数或不可数。', 'Rest cures minor illness.', '休息治小病。', [], ['disease', 'disorder', 'ill', 'trouble'], 'noun', 'uncountable/countable', '健康'],
  ], 'illnesses', ['ill', 'disease', 'disorder'], '←ill A2 + -ness，A2 继承；家族 disease 疾病、disorder 失调，近义 ill 病的、trouble 毛病');

  W('illogical', 'adjective', '/ɪˈlɒdʒɪkl/', '', [], '不合逻辑的', 'Against reason.', [
    ['不合逻辑的', 'Against reason.', '违反道理。', 'an illogical fear 无端恐惧。', 'His reply was illogical.', '他回答不合逻辑。', [], ['irrational'], 'adjective', '定语', '通用'],
  ], '', ['irrational'], 'logical（本词库未收）+ il-——词根不可见，故留空；家族 irrational 不合逻辑的');

  W('imaginary', 'adjective', '/ɪˈmædʒɪnəri/', 'A2', ['CET4'], '想象的', 'Not real, only in mind.', [
    ['想象的', 'Not real, only in mind.', '不真实、只在脑中。', 'an imaginary friend 想象中的朋友。', 'The story has imaginary lands.', '故事里有想象的国度。', [], ['pretend'], 'adjective', '定语', '文化'],
  ], '', ['imagine'], '←imagine A2 + -ary（e→ary），A2 继承；近义 pretend 假装的');

  W('imagination', 'noun', '/ɪˌmædʒɪˈneɪʃn/', 'A2', ['CET4'], '想象力', 'Making new ideas in mind.', [
    ['想象力', 'Making new ideas in mind.', '在脑中生出新想法。', '不可数或可数。', 'Kids have rich imagination.', '孩子想象力丰富。', [], ['fantasy'], 'noun', 'uncountable/countable', '文化'],
  ], '', ['imagine'], '←imagine A2 + -ation，A2 继承；近义 fantasy 幻想');

  W('imitation', 'noun', '/ˌɪmɪˈteɪʃn/', 'B2', ['CET4'], '仿制品', 'A copy of the real thing.', [
    ['仿制品', 'A copy of the real thing.', '真东西的复制品。', '可数或不可数。', 'The bag is an imitation.', '这包是仿品。', [], ['takeoff'], 'noun', 'uncountable/countable', '商务'],
  ], 'imitations', ['imitate'], '←imitate B2 + -ion（e→ion），B2 继承；近义 takeoff 模仿秀');

  W('immaterial', 'adjective', '/ˌɪməˈtɪəriəl/', 'A2', [], '非实体的', 'Not physical or important.', [
    ['非实体的', 'Not physical or important.', '非物质或不重要的。', '较文。', 'These details are immaterial.', '这些细节无关紧要。', [], ['intangible'], 'adjective', '定语/表语', '书面'],
  ], '', ['material', 'intangible'], '←material A2 + im-（反向），A2 继承；家族 intangible 无形的');

  W('immature', 'adjective', '/ˌɪməˈtʃʊə(r)/', 'B2', [], '不成熟的', 'Not fully grown.', [
    ['不成熟的', 'Not fully grown.', '没长成的。', 'an immature reply 幼稚的回答。', 'He is immature for his age.', '他跟年龄比显幼稚。', [], ['juvenile', 'underdeveloped'], 'adjective', '定语/表语', '性格'],
  ], '', ['mature'], '←mature B2 + im-（反向），B2 继承；近义 juvenile 幼稚的、underdeveloped 发育不全的');

  W('immediately', 'adverb', '/ɪˈmiːdiətli/', 'B1', ['CET4'], '立刻', 'At once.', [
    ['立刻', 'At once.', '马上。', '副词。', 'Come here immediately.', '立刻过来。', [], ['now', 'right', 'straight'], 'adverb', 'null', '通用'],
  ], '', ['immediate'], '←immediate B1 + -ly，B1 继承；近义 now 现在、right 立刻、straight 直接');

  W('immigration', 'noun', '/ˌɪmɪˈɡreɪʃn/', '', ['CET4'], '移民入境', 'Coming to live in a country.', [
    ['移民入境', 'Coming to live in a country.', '来一国居住。', '不可数。', 'Immigration keeps rising.', '移民不断增加。', [], [], 'noun', 'uncountable', '社会'],
  ], '', ['immigrate'], '←immigrate（curated 在库、无 CEFR 等级）+ -ion——无等级可继承，故留空；家族 immigrate 移居入境。考级 CET4');

  W('immoral', 'adjective', '/ɪˈmɒrəl/', 'B2', [], '不道德的', 'Against morals.', [
    ['不道德的', 'Against morals.', '违反道德。', 'an immoral act 缺德事。', 'Cheating is immoral.', '作弊缺德。', [], ['wrong'], 'adjective', '定语/表语', '社会'],
  ], '', ['moral'], '←moral B2 + im-（反向），B2 继承；近义 wrong 错误的');

  W('imp', 'noun', '/ɪmp/', '', [], '小鬼', 'A naughty small devil.', [
    ['小鬼', 'A naughty small devil.', '淘气的小魔鬼。', '可数。', 'The kid acts like an imp.', '孩子像个小淘气。', [], ['monkey'], 'noun', 'countable', '文化'],
  ], 'imps', [], '日耳曼/拉丁 impotus（苗）——无库内派生根；近义 monkey 顽童');

  W('impartial', 'adjective', '/ɪmˈpɑːʃl/', '', [], '公正的', 'Treating all the same.', [
    ['公正的', 'Treating all the same.', '一视同仁。', 'an impartial judge 公正的法官。', 'Be impartial in disputes.', '纠纷中要公正。', [], ['fair', 'independent', 'indifferent', 'neutral', 'objective'], 'adjective', '定语/表语', '社会'],
  ], '', ['neutral', 'objective'], 'partial（本词库未收）+ im-——词根不可见，故留空；家族 neutral 中立的、objective 客观的，近义 fair 公平的、independent 独立的、indifferent 不在乎的');

  W('impasse', 'noun', '/ˈæmpɑːs/', '', [], '僵局', 'No way forward.', [
    ['僵局', 'No way forward.', '走不下去。', '可数：reach an impasse。', 'Talks reached an impasse.', '会谈陷入僵局。', ['reach an impasse'], [], 'noun', 'countable', '政治'],
  ], 'impasses', ['deadlock'], '法语 impasse（无出路）——无库内派生根；家族 deadlock 僵局');

  W('impede', 'verb', '/ɪmˈpiːd/', '', [], '妨碍', 'To slow down progress.', [
    ['妨碍', 'To slow down progress.', '拖慢进展。', '及物。', 'Rain impeded rescue.', '雨阻碍了救援。', [], ['hamper', 'handicap', 'hinder', 'obstruct'], 'verb', '及物', '通用'],
  ], 'impedes~impeded~impeded~impeding', ['hamper', 'hinder'], '拉丁 impedire——pede（脚）词根不可见，故留空；家族 hamper 妨碍、hinder 阻碍，近义 handicap 障碍、obstruct 阻塞');

  W('impending', 'adjective', '/ɪmˈpendɪŋ/', '', [], '即将发生的', 'About to happen soon.', [
    ['即将发生的', 'About to happen soon.', '很快要发生的。', 'impending doom 大难临头。', 'They feared impending war.', '他们怕打仗。', [], ['imminent'], 'adjective', '定语', '通用'],
  ], '', ['imminent'], 'impend 迫近（本词库未收）+ -ing——词根不可见，故留空；家族 imminent 即将发生的');

  W('imperil', 'verb', '/ɪmˈperɪl/', 'C1', [], '危及', 'To put in danger.', [
    ['危及', 'To put in danger.', '置于危险。', '及物，正式。', 'Smoking imperils health.', '吸烟危及健康。', [], ['jeopardize'], 'verb', '及物', '健康'],
  ], 'imperils~imperiled~imperiled~imperiling', ['peril'], '←peril C1 + im-（使…），C1 继承；近义 jeopardize 危害');

  W('impermeable', 'adjective', '/ɪmˈpɜːmiəbl/', '', [], '不透水的', 'Blocking liquid or gas.', [
    ['不透水的', 'Blocking liquid or gas.', '挡住液体气体。', 'impermeable layers 不透水层。', 'The coat is impermeable.', '大衣不透水。', [], ['waterproof'], 'adjective', '定语', '工业'],
  ], '', ['permeable'], 'permeable 可渗透的（本词库未收）+ im-——词根不可见，故留空；近义 waterproof 防水的');

  W('impersonate', 'verb', '/ɪmˈpɜːsəneɪt/', 'A1', [], '假扮', 'To act as another person.', [
    ['假扮', 'To act as another person.', '扮成另一个人。', '及物。', 'He impersonated a guard.', '他假扮警卫。', [], ['pose'], 'verb', '及物', '文化'],
  ], 'impersonates~impersonated~impersonated~impersonating', ['person'], '←person A1 + im-…-ate（扮成…），A1 继承；近义 pose 冒充');

  W('implant', 'verb/noun', '/ɪmˈplɑːnt/', 'A2', [], '植入', 'To fix into body or mind.', [
    ['植入', 'To fix into body or mind.', '固定进身体或脑中。', '及物或可数名词。', 'Doctors implanted a tooth.', '医生种了颗牙。', [], ['embed'], 'verb/noun', 'null', '健康'],
  ], 'implants~implanted~implanted~implanting', ['plant', 'embed'], '←plant A2 + im-（打入…），A2 继承；家族 embed 嵌入');

  W('implausible', 'adjective', '/ɪmˈplɔːzəbl/', 'C1', [], '难信的', 'Hard to believe.', [
    ['难信的', 'Hard to believe.', '难以相信。', 'an implausible excuse 难信的借口。', 'His story sounds implausible.', '他说的难信。', [], ['incredible'], 'adjective', '定语', '通用'],
  ], '', ['plausible'], 'plausible 貌似可信的（本词库未收）+ im-——词根不可见（注：plausible 本身不在库），故留空；近义 incredible 难以置信的');

  W('implicate', 'verb', '/ˈɪmplɪkeɪt/', '', [], '牵连', 'To show a share in crime.', [
    ['牵连', 'To show a share in crime.', '表明与罪行有份。', '及物：implicate in。', 'He was implicated in fraud.', '他卷入了欺诈。', ['implicate in'], ['involve'], 'verb', '及物', '法律'],
  ], 'implicates~implicated~implicated~implicating', [], '拉丁 implicare（卷入）——plic 词根不可见，故留空；近义 involve 牵涉');

  W('implication', 'noun', '/ˌɪmplɪˈkeɪʃn/', '', ['CET4'], '含义', 'What is hinted but unsaid.', [
    ['含义', 'What is hinted but unsaid.', '暗示而未明说的。', '可数或不可数。', 'The implication is clear.', '言下之意很清楚。', [], ['connotation'], 'noun', 'uncountable/countable', '通用'],
  ], 'implications', ['implicate', 'connotation'], '←implicate（本批新词、无等级）+ -ion，故仍留空；家族 connotation 含义');

  W('implied', 'adjective', '/ɪmˈplaɪd/', 'B2', [], '含蓄的', 'Hinted but unsaid.', [
    ['含蓄的', 'Hinted but unsaid.', '暗示而未明说的。', 'an implied threat 隐含的威胁。', 'There was implied criticism.', '有含蓄的批评。', [], ['implicit'], 'adjective', '定语', '通用'],
  ], '', ['imply', 'implicit'], '←imply B2 + -ed，B2 继承；家族 implicit 含蓄的');

  W('implore', 'verb', '/ɪmˈplɔː(r)/', '', [], '恳求', 'To beg hard.', [
    ['恳求', 'To beg hard.', '苦苦哀求。', '及物。', 'She implored his pardon.', '她恳求他原谅。', [], ['plead'], 'verb', '及物', '情感'],
  ], 'implores~implored~implored~imploring', ['beg', 'plead'], '拉丁 implorare——plor 词根不可见，故留空；家族 beg 乞求、plead 恳求');

  W('impolite', 'adjective', '/ˌɪmpəˈlaɪt/', 'A2', [], '不礼貌的', 'Rude in manners.', [
    ['不礼貌的', 'Rude in manners.', '举止粗鲁。', 'it is impolite to 没礼貌。', 'It is impolite to stare.', '盯着看没礼貌。', [], ['ignorant', 'rude'], 'adjective', '定语/表语', '社交'],
  ], '', ['polite', 'rude'], '←polite A2 + im-（反向），A2 继承；家族 rude 粗鲁的，近义 ignorant 无知的（不懂礼的）');

  W('importance', 'noun', '/ɪmˈpɔːtns/', 'B1', ['CET4'], '重要性', 'Being worth notice.', [
    ['重要性', 'Being worth notice.', '值得注意。', '不可数：of great importance。', 'Safety is of great importance.', '安全极重要。', ['of great importance'], ['consequence', 'emphasis', 'import', 'magnitude', 'moment'], 'noun', 'uncountable', '通用'],
  ], '', ['import'], '←import B1 + -ance，B1 继承；近义 consequence 重要性、emphasis 强调、import 进口（要义）、magnitude 巨大、moment 要紧');

  W('importation', 'noun', '/ˌɪmpɔːˈteɪʃn/', 'B1', ['CET4'], '输入；进口', 'Bringing goods into a country.', [
    ['输入；进口', 'Bringing goods into a country.', '把货物运进一国。', '可数或不可数。', 'The importation rose fast.', '进口增长很快。', [], ['import'], 'noun', 'uncountable/countable', '商务'],
  ], 'importations', ['import'], '←import B1 + -ation，B1 继承；近义 import 进口（货物）');

  W('imposing', 'adjective', '/ɪmˈpəʊzɪŋ/', 'B2', ['CET4'], '壮观的', 'Grand and strong-looking.', [
    ['壮观的', 'Grand and strong-looking.', '宏大有气势。', 'an imposing building 宏伟建筑。', 'The castle looks imposing.', '城堡气势宏伟。', [], ['grand'], 'adjective', '定语', '建筑'],
  ], '', ['impose'], '←impose B2 + -ing，B2 继承；近义 grand 宏大的');

  W('impostor', 'noun', '/ɪmˈpɒstə(r)/', '', [], '冒充者', 'One faking another person.', [
    ['冒充者', 'One faking another person.', '假扮别人的人。', '可数。', 'The guard caught the impostor.', '警卫抓住了冒充者。', [], ['fraud'], 'noun', 'countable', '社会'],
  ], 'impostors', ['fraud'], 'im- + post——假切分（与 post 无关，拉丁 imponere 强加），故留空；家族 fraud 骗子');

  W('impoverished', 'adjective', '/ɪmˈpɒvərɪʃt/', '', [], '贫困的', 'Very poor.', [
    ['贫困的', 'Very poor.', '非常穷。', 'impoverished areas 贫困地区。', 'They help impoverished kids.', '他们帮贫困孩子。', [], ['poor'], 'adjective', '定语', '社会'],
  ], '', ['impoverish'], 'impoverish 使贫困（本词库未收）+ -ed——词根不可见，故留空；近义 poor 穷的');

  W('impractical', 'adjective', '/ɪmˈpræktɪkl/', 'B1', [], '不切实际的', 'Not useful in real life.', [
    ['不切实际的', 'Not useful in real life.', '现实中没用。', 'an impractical plan 空想计划。', 'The idea is impractical.', '想法不切实际。', [], ['academic'], 'adjective', '定语/表语', '通用'],
  ], '', ['practical'], '←practical B1 + im-（反向），B1 继承；近义 academic 纸上谈兵的');

  W('impression', 'noun', '/ɪmˈpreʃn/', 'B1', ['CET4'], '印象', 'What you feel about something.', [
    ['印象', 'What you feel about something.', '对某事的感受。', '可数或不可数：make an impression。', 'He made a good impression.', '他留下好印象。', ['make an impression'], ['idea', 'image'], 'noun', 'uncountable/countable', '通用'],
  ], 'impressions', ['impress'], '←impress B1 + -ion，B1 继承；近义 idea 想法、image 形象');

  W('impressionable', 'adjective', '/ɪmˈpreʃnəbl/', 'B1', [], '易受影响的', 'Easily shaped by others.', [
    ['易受影响的', 'Easily shaped by others.', '容易被别人左右。', 'impressionable minds 易受影响的心。', 'Teens are impressionable.', '少年易受影响。', [], ['susceptible'], 'adjective', '定语', '性格'],
  ], '', ['impression'], '←impression（本批新词 B1）+ -able，B1 继承；近义 susceptible 易受影响的');

  W('imprint', 'verb/noun', '/ɪmˈprɪnt/', 'A2', [], '印上', 'To press a mark on.', [
    ['印上', 'To press a mark on.', '把印记压上去。', '及物或可数名词。', 'Print the logo on bags.', '把标识印上包。', [], ['stamp'], 'verb/noun', 'null', '工业'],
  ], 'imprints~imprinted~imprinted~imprinting', ['print'], '←print A2 + im-（打入…），A2 继承；近义 stamp 盖章');

  W('imprisonment', 'noun', '/ɪmˈprɪznmənt/', 'C1', ['CET6'], '监禁', 'Being kept in prison.', [
    ['监禁', 'Being kept in prison.', '被关在监狱。', '不可数或可数。', 'He faces long imprisonment.', '他面临长期监禁。', [], [], 'noun', 'uncountable/countable', '法律'],
  ], '', ['imprison', 'prison'], '←imprison C1 + -ment，C1 继承；家族 prison 监狱');

  W('improper', 'adjective', '/ɪmˈprɒpə(r)/', 'B1', [], '不适当的', 'Not right or proper.', [
    ['不适当的', 'Not right or proper.', '不对或不得体。', 'improper waste 不当浪费。', 'It is improper to cheat.', '作弊不对。', [], ['irregular'], 'adjective', '定语/表语', '通用'],
  ], '', ['proper'], '←proper B1 + im-（反向），B1 继承；近义 irregular 不合规则的');

  W('improvement', 'noun', '/ɪmˈpruːvmənt/', 'A2', ['CET4'], '改进', 'Making better.', [
    ['改进', 'Making better.', '变得更好。', '可数或不可数。', 'Health shows improvement.', '健康好转了。', [], ['reform', 'upgrade'], 'noun', 'uncountable/countable', '通用'],
  ], 'improvements', ['improve'], '←improve A2 + -ment，A2 继承；近义 reform 改革、upgrade 升级');

  W('improvisation', 'noun', '/ˌɪmprəvaɪˈzeɪʃn/', '', [], '即兴', 'Making up on the spot.', [
    ['即兴', 'Making up on the spot.', '当场编出来。', '可数或不可数。', 'Jazz needs improvisation.', '爵士乐要即兴。', [], ['impromptu'], 'noun', 'uncountable/countable', '艺术'],
  ], 'improvisations', ['improvise'], '←improvise（本批新词、无等级）+ -ation，故仍留空；近义 impromptu 即兴的');

  W('improvise', 'verb', '/ˈɪmprəvaɪz/', '', [], '即兴发挥', 'To make up on the spot.', [
    ['即兴发挥', 'To make up on the spot.', '当场编出来。', '及物或不及物。', 'She improvised a speech.', '她即兴讲了话。', [], ['wing'], 'verb', '及物', '艺术'],
  ], 'improvises~improvised~improvised~improvising', ['wing'], '拉丁 improvisus——无库内派生根；家族 wing 即兴（wing it 临时发挥）');

  W('impudence', 'noun', '/ˈɪmpjədəns/', '', [], '厚颜', 'Bold rudeness.', [
    ['厚颜', 'Bold rudeness.', '大胆无礼。', '不可数。', 'His impudence shocked us.', '他的厚颜惊到我们。', [], ['sauce'], 'noun', 'uncountable', '性格'],
  ], '', ['impudent'], 'impudent 厚颜的（本词库未收）+ -ce——词根不可见，故留空；近义 sauce 无礼（口语）');

  W('impulsive', 'adjective', '/ɪmˈpʌlsɪv/', 'B2', ['CET4'], '冲动的', 'Acting without thought.', [
    ['冲动的', 'Acting without thought.', '不想就做。', 'an impulsive buyer 冲动买家。', 'Do not be impulsive.', '别冲动。', [], ['spontaneous'], 'adjective', '定语/表语', '性格'],
  ], '', ['impulse', 'spontaneous'], '←impulse B2 + -ive（e→ive），B2 继承；家族 spontaneous 自发的');

  W('in addition', 'adverb', '/ˌɪn əˈdɪʃn/', '', [], '此外', 'Also; as an extra.', [
    ['此外', 'Also; as an extra.', '也，作为补充。', '副词短语，句首常用。', 'In addition, it rained.', '此外，还下雨了。', [], ['furthermore'], 'adverb', 'null', '书面'],
  ], '', ['furthermore'], 'in 添加 + addition 加；近义 furthermore 此外。短语分级留空').phrase = true;

  W('in advance', 'adverb', '/ˌɪn ədˈvɑːns/', '', [], '提前', 'Before the time.', [
    ['提前', 'Before the time.', '在时间之前。', '副词短语：book in advance。', 'Book tickets in advance.', '提前订票。', ['book in advance'], ['ahead', 'beforehand'], 'adverb', 'null', '通用'],
  ], '', ['ahead', 'beforehand'], 'in 提前 + advance 前进；近义 ahead 提前、beforehand 预先。短语分级留空').phrase = true;

  W('in case', 'conjunction', '/ˌɪn ˈkeɪs/', '', [], '万一', 'If it happens that.', [
    ['万一', 'If it happens that.', '如果发生…。', '连词短语，后接从句。', 'Take a coat in case it rains.', '带件外套，万一下雨。', [], ['if', 'lest'], 'conjunction', 'null', '通用'],
  ], '', ['lest'], 'in 以防 + case 情况；家族 lest 以免，近义 if 如果。短语分级留空').phrase = true;

  W('in charge', 'adjective', '/ˌɪn ˈtʃɑːdʒ/', '', [], '负责的', 'Controlling things.', [
    ['负责的', 'Controlling things.', '管事的。', '表语形容词短语：in charge of。', 'She is in charge here.', '这里她负责。', ['in charge of'], ['responsible'], 'adjective', '表语', '职业'],
  ], '', [], 'in 负责 + charge 主管；近义 responsible 负责的。短语分级留空').phrase = true;

  W('in debt', 'adjective', '/ˌɪn ˈdet/', '', [], '负债的', 'Owing money.', [
    ['负债的', 'Owing money.', '欠着钱。', '表语形容词短语。', 'He is deeply in debt.', '他债台高筑。', [], ['indebted'], 'adjective', '表语', '商务'],
  ], '', [], 'in 欠 + debt 债；近义 indebted 负债的。短语分级留空').phrase = true;

  W('in exchange', 'adverb', '/ˌɪn ɪksˈtʃeɪndʒ/', '', [], '作为交换', 'Giving one for another.', [
    ['作为交换', 'Giving one for another.', '拿一样换另一样。', '副词短语：in exchange for。', 'He worked in exchange for meals.', '他以工换餐。', ['in exchange for'], ['instead'], 'adverb', 'null', '商务'],
  ], '', [], 'in 交换 + exchange 交换；近义 instead 代替。短语分级留空').phrase = true;

  W('in fact', 'adverb', '/ˌɪn ˈfækt/', '', [], '事实上', 'Really; truly.', [
    ['事实上', 'Really; truly.', '真正地。', '副词短语，常纠正前言。', 'It is, in fact, easy.', '其实，这很简单。', [], ['indeed'], 'adverb', 'null', '通用'],
  ], '', ['indeed'], 'in 事实上 + fact 事实；家族 indeed 确实。短语分级留空').phrase = true;

  W('in force', 'adjective', '/ˌɪn ˈfɔːs/', '', [], '生效中的', 'Active as law or rule.', [
    ['生效中的', 'Active as law or rule.', '作为法律规则有效。', '表语形容词短语。', 'The ban is still in force.', '禁令仍有效。', [], ['operative'], 'adjective', '表语', '法律'],
  ], '', [], 'in 生效中 + force 效力；近义 operative 生效的。短语分级留空').phrase = true;

  W('in order to', 'conjunction', '/ˌɪn ˈɔːdə tuː/', '', [], '为了', 'For the purpose of.', [
    ['为了', 'For the purpose of.', '目的是。', '连词短语，后接动词原形。', 'Run in order to catch it.', '跑起来好赶上。', [], ['to'], 'conjunction', 'null', '通用'],
  ], '', [], 'in order 为了 + to；近义 to（动词不定式 to）。短语分级留空').phrase = true;

  W('in part', 'adverb', '/ˌɪn ˈpɑːt/', '', [], '部分地', 'Not fully.', [
    ['部分地', 'Not fully.', '不完全。', '副词短语：in part because。', 'It is true in part.', '部分属实。', [], ['partly'], 'adverb', 'null', '通用'],
  ], '', [], 'in 部分 + part 部分；近义 partly 部分地。短语分级留空').phrase = true;

})(typeof window !== 'undefined' ? window : globalThis);
