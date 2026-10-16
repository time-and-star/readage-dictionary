/* data/words/cet/author_i8.js · 手敲词条 I（八·前段）：ingest ~ insolvent（无短语）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_i8.js 必须在 _cet_helper.js 之后加载');

  W('ingest', 'verb', '/ɪnˈdʒest/', '', [], '吞食', 'To take food into the body.', [
    ['吞食', 'To take food into the body.', '把食物吃进身体。', '及物，正式。', 'Cows ingest grass daily.', '牛每天吃草。', [], ['swallow'], 'verb', '及物', '健康'],
  ], 'ingests~ingested~ingested~ingesting', [], '拉丁 ingerere——gest（搬运）词根不可见，故留空；近义 swallow 吞');

  W('inhabitant', 'noun', '/ɪnˈhæbɪtənt/', 'B2', ['CET4'], '居民', 'One living in a place.', [
    ['居民', 'One living in a place.', '住在某地的人。', '可数。', 'The town has few inhabitants.', '镇上居民很少。', [], ['native'], 'noun', 'countable', '社会'],
  ], 'inhabitants', ['inhabit'], '←inhabit B2 + -ant，B2 继承；近义 native 本地人');

  W('inhabitants', 'noun', '/ɪnˈhæbɪtənts/', 'B2', [], '居民（复数）', 'People living somewhere; plural.', [
    ['居民（复数）', 'People living somewhere; plural.', '住某地的人们。', '复数。', 'The inhabitants voted no.', '居民投了反对票。', [], ['population'], 'noun', 'countable', '社会'],
  ], '', ['inhabitant', 'population'], '←inhabitant（本批新词 B2）+ -s，B2 继承；家族 population 人口');

  W('inhale', 'verb', '/ɪnˈheɪl/', '', [], '吸入', 'To breathe air in.', [
    ['吸入', 'To breathe air in.', '把空气吸进去。', '及物或不及物，与 exhale 呼气相对。', 'Inhale slowly through nose.', '用鼻子慢慢吸气。', [], ['breathe', 'inspire'], 'verb', '及物', '健康'],
  ], 'inhales~inhaled~inhaled~inhaling', ['breathe'], 'in- + hale——hale 不在库（同 exhale 模式），故留空；家族 breathe 呼吸，近义 inspire 吸入');

  W('inheritance', 'noun', '/ɪnˈherɪtəns/', 'B2', ['CET4'], '遗产', 'Money got from the dead.', [
    ['遗产', 'Money got from the dead.', '从死者处得的钱。', '可数或不可数。', 'She spent her inheritance.', '她花掉了遗产。', [], ['legacy'], 'noun', 'uncountable/countable', '家庭'],
  ], '', ['inherit', 'legacy'], '←inherit B2 + -ance，B2 继承；家族 legacy 遗产');

  W('inheritor', 'noun', '/ɪnˈherɪtə(r)/', 'B2', [], '继承人', 'One getting an inheritance.', [
    ['继承人', 'One getting an inheritance.', '拿到遗产的人。', '可数。', 'He is the sole inheritor.', '他是唯一继承人。', [], ['heir'], 'noun', 'countable', '家庭'],
  ], 'inheritors', ['inherit', 'heir'], '←inherit B2 + -or，B2 继承；家族 heir 继承人');

  W('initially', 'adverb', '/ɪˈnɪʃəli/', 'B1', ['CET4'], '起初', 'At the start.', [
    ['起初', 'At the start.', '在开始时。', '副词。', 'Initially, few agreed.', '起初没几个人同意。', [], ['first'], 'adverb', 'null', '通用'],
  ], '', ['initial'], '←initial B1 + -ly，B1 继承；近义 first 首先');

  W('initiative', 'noun', '/ɪˈnɪʃətɪv/', 'B2', ['CET4'], '主动性', 'Acting without orders.', [
    ['主动性', 'Acting without orders.', '不等命令就行动。', '不可数或可数：take the initiative。', 'Take the initiative more.', '多主动些。', ['take the initiative'], ['enterprise', 'resource'], 'noun', 'uncountable/countable', '职业'],
  ], '', ['initiate', 'enterprise'], '←initiate B2 + -ive（e→ive），B2 继承；家族 enterprise 进取心，近义 resource 机智（才智）');

  W('injection', 'noun', '/ɪnˈdʒekʃn/', 'B2', ['CET6'], '注射', 'Putting medicine in by needle.', [
    ['注射', 'Putting medicine in by needle.', '用针把药推进去。', '可数。', 'The nurse gave an injection.', '护士打了一针。', [], ['shot'], 'noun', 'countable', '健康'],
  ], 'injections', ['inject'], '←inject B2 + -ion，B2 继承；近义 shot 针剂（一针）');

  W('injury', 'noun', '/ˈɪndʒəri/', 'B1', ['CET4'], '受伤', 'Harm to the body.', [
    ['受伤', 'Harm to the body.', '身体受的伤害。', '可数或不可数。', 'He escaped injury.', '他没受伤。', [], ['bruise', 'harm', 'hurt', 'trauma', 'wound'], 'noun', 'uncountable/countable', '健康'],
  ], 'injuries', ['injure', 'bruise', 'harm', 'trauma', 'wound'], '←injure B1 + -y（e→y），B1 继承；家族 bruise 瘀伤、harm 伤害、trauma 创伤、wound 伤口，近义 hurt 疼痛');

  W('injustice', 'noun', '/ɪnˈdʒʌstɪs/', 'B2', [], '不公', 'Unfair treatment.', [
    ['不公', 'Unfair treatment.', '不公平对待。', '可数或不可数。', 'They protested injustice.', '他们抗议不公。', [], ['wrong'], 'noun', 'uncountable/countable', '社会'],
  ], '', ['justice', 'wrong'], '←justice B2 + in-（反向），B2 继承；家族 wrong 错误（冤屈）');

  W('inkling', 'noun', '/ˈɪŋklɪŋ/', 'B1', [], '暗示', 'A slight hint of truth.', [
    ['暗示', 'A slight hint of truth.', '一点真相的苗头。', '可数，常单数：have an inkling。', 'I had no inkling at all.', '我一点没察觉。', ['have an inkling'], ['glimpse'], 'noun', 'countable', '通用'],
  ], '', ['ink'], '←ink B1 + -ling（表小），B1 继承；近义 glimpse 端倪');

  W('inlet', 'noun', '/ˈɪnlet/', 'A2', [], '入口', 'A way or opening in.', [
    ['入口', 'A way or opening in.', '进去的路或口。', '可数。', 'Boats use the inlet.', '船走这个入口。', [], ['gulf', 'intake'], 'noun', 'countable', '交通'],
  ], 'inlets', ['let'], '←let A2 + in-（准入义），A2 继承；近义 gulf 海湾（入口义）、intake 摄入');

  W('innate', 'adjective', '/ˌɪˈneɪt/', '', [], '天生的', 'Born with, not learned.', [
    ['天生的', 'Born with, not learned.', '生来有、非学来。', 'innate talent 天赋。', 'Curiosity is innate in kids.', '好奇是孩子天性。', [], ['inborn', 'inherent', 'intrinsic'], 'adjective', '定语', '性格'],
  ], '', ['inborn', 'inherent', 'intrinsic'], '拉丁 innatus——nat（出生）词根不可见，故留空；家族 inborn 天生的、inherent 内在的、intrinsic 本质的');

  W('innkeeper', 'noun', '/ˈɪnkiːpə(r)/', 'B1', [], '客栈老板', 'One keeping a small hotel.', [
    ['客栈老板', 'One keeping a small hotel.', '开小旅馆的人。', '可数。', 'The innkeeper welcomed us.', '店主欢迎我们。', [], ['landlord'], 'noun', 'countable', '职业'],
  ], 'innkeepers', ['inn', 'keep'], '←inn B1 + keeper（首成分），B1 继承；近义 landlord 房东（店主）');

  W('innovator', 'noun', '/ˈɪnəveɪtə(r)/', 'B2', [], '创新者', 'One making new things.', [
    ['创新者', 'One making new things.', '造新东西的人。', '可数。', 'Innovators drive change.', '创新者推动变革。', [], ['pioneer'], 'noun', 'countable', '职业'],
  ], 'innovators', ['innovate', 'pioneer'], '←innovate B2 + -or（e→or），B2 继承；家族 pioneer 先驱');

  W('inoculation', 'noun', '/ɪˌnɒkjəˈleɪʃn/', '', [], '接种', 'Giving a vaccine shot.', [
    ['接种', 'Giving a vaccine shot.', '打疫苗针。', '可数或不可数。', 'Inoculation saves lives.', '接种救命。', [], ['vaccine'], 'noun', 'uncountable/countable', '健康'],
  ], 'inoculations', ['vaccine'], 'inoculate 接种（本词库未收）+ -ion——词根不可见，故留空；家族 vaccine 疫苗');

  W('inquiry', 'noun', '/ɪnˈkwaɪəri/', 'B2', [], '询问', 'Asking for facts.', [
    ['询问', 'Asking for facts.', '问清事实。', '可数或不可数。', 'Police made inquiries.', '警方做了调查。', [], ['query', 'question'], 'noun', 'uncountable/countable', '通用'],
  ], 'inquiries', ['inquire', 'probe', 'query'], '←inquire B2 + -y（e→y），B2 继承；家族 probe 探询、query 询问');

  W('inquisitive', 'adjective', '/ɪnˈkwɪzətɪv/', 'B2', ['CET4'], '好问的', 'Loving to ask.', [
    ['好问的', 'Loving to ask.', '爱问的。', 'an inquisitive mind 好奇心。', 'Kids are naturally inquisitive.', '孩子天生好问。', [], ['curious'], 'adjective', '定语/表语', '性格'],
  ], '', ['inquire', 'curious'], '←inquire B2 + -isitive（e→isitive，同 acquisitive），B2 继承；家族 curious 好奇的');

  W('inscribe', 'verb', '/ɪnˈskraɪb/', '', [], '铭刻', 'To carve words on stone.', [
    ['铭刻', 'To carve words on stone.', '把字刻石头上。', '及物。', 'Names inscribed the wall.', '墙上刻满名字。', [], ['dedicate', 'write'], 'verb', '及物', '文化'],
  ], 'inscribes~inscribed~inscribed~inscribing', ['scribe'], 'in- + scribe——scribe 不在库，故留空；近义 dedicate 题献、write 写');

  W('insecticide', 'noun', '/ɪnˈsektɪsaɪd/', 'A2', [], '杀虫剂', 'Chemicals killing bugs.', [
    ['杀虫剂', 'Chemicals killing bugs.', '杀虫的化学品。', '可数或不可数。', 'Spray insecticide outside.', '外面喷杀虫剂。', [], ['pesticide'], 'noun', 'uncountable/countable', '自然'],
  ], '', ['insect', 'pesticide'], '←insect A2 + -i- + -cide（杀），A2 继承；家族 pesticide 杀虫剂');

  W('insensitive', 'adjective', '/ɪnˈsensətɪv/', 'B2', [], '麻木的', 'Feeling or caring little.', [
    ['麻木的', 'Feeling or caring little.', '感觉少、不在乎。', 'insensitive to pain 对痛麻木。', 'He seems insensitive today.', '他今天很麻木。', ['insensitive to'], ['numb'], 'adjective', '定语/表语', '性格'],
  ], '', ['sensitive'], '←sensitive B2 + in-（反向），B2 继承；近义 numb 麻木的');

  W('insides', 'noun', '/ˌɪnˈsaɪdz/', 'A1', [], '内部（复数）', 'Inner parts; plural of inside.', [
    ['内部（复数）', 'Inner parts; plural of inside.', '里面部分；inside 的复数。', '复数。', 'Wash the insides well.', '里面洗干净。', [], ['gut'], 'noun', 'countable', '通用'],
  ], '', ['inside'], '←inside A1 + -s，A1 继承；近义 gut 内脏');

  W('insignificant', 'adjective', '/ˌɪnsɪɡˈnɪfɪkənt/', 'B1', [], '微不足道的', 'Too small to matter.', [
    ['微不足道的', 'Too small to matter.', '小到不值一提。', 'an insignificant sum 小数目。', 'The cost is insignificant.', '费用微不足道。', [], ['negligible'], 'adjective', '定语/表语', '通用'],
  ], '', ['significant', 'negligible'], '←significant B1 + in-（反向），B1 继承；家族 negligible 微不足道的');

  W('insincere', 'adjective', '/ˌɪnsɪnˈsɪə(r)/', 'B1', [], '虚伪的', 'Not honest in feeling.', [
    ['虚伪的', 'Not honest in feeling.', '感情不真。', 'an insincere smile 假笑。', 'His praise sounds insincere.', '他的夸奖听着假。', [], ['artificial', 'false'], 'adjective', '定语', '性格'],
  ], '', ['sincere'], '←sincere B1 + in-（反向），B1 继承；近义 artificial 虚假的、false 假的');

  W('insincerity', 'noun', '/ˌɪnsɪnˈserəti/', 'B1', [], '虚伪', 'Being insincere.', [
    ['虚伪', 'Being insincere.', '不真诚。', '不可数。', 'Voters hate insincerity.', '选民恨虚伪。', [], ['hypocrisy'], 'noun', 'uncountable', '性格'],
  ], '', ['insincere', 'hypocrisy'], '←insincere（本批新词 B1）+ -ity，B1 继承；家族 hypocrisy 虚伪');

  W('insinuate', 'verb', '/ɪnˈsɪnjueɪt/', '', [], '暗示', 'To hint something bad.', [
    ['暗示', 'To hint something bad.', '暗示不好的事。', '及物：insinuate that。', 'Are you insinuating theft?', '你暗示偷东西？', [], ['worm'], 'verb', '及物', '通用'],
  ], 'insinuates~insinuated~insinuated~insinuating', [], '拉丁 insinuare——sinu 词根不可见，故留空；近义 worm 钻营（worm into 钻入）');

  W('insistent', 'adjective', '/ɪnˈsɪstənt/', 'B1', ['CET4'], '坚持的', 'Demanding firmly.', [
    ['坚持的', 'Demanding firmly.', '坚决要求。', 'be insistent on 坚持。', 'She was insistent on going.', '她坚持要去。', ['insistent on'], ['urgent'], 'adjective', '定语/表语', '通用'],
  ], '', ['insist'], '←insist B1 + -ent，B1 继承；近义 urgent 紧迫的');

  W('insolvent', 'adjective', '/ɪnˈsɒlvənt/', '', [], '无力偿付的', 'Unable to pay debts.', [
    ['无力偿付的', 'Unable to pay debts.', '还不起债。', 'go insolvent 破产。', 'The firm went insolvent.', '公司破产了。', ['go insolvent'], ['bankrupt'], 'adjective', '表语', '商务'],
  ], '', ['bankrupt'], 'solvent 有偿付能力的（本词库未收）+ in-——词根不可见，故留空；家族 bankrupt 破产的');

  W('inspection', 'noun', '/ɪnˈspekʃn/', 'B1', ['CET4'], '检查', 'A close look or check.', [
    ['检查', 'A close look or check.', '仔细看或查。', '可数或不可数。', 'The house passed inspection.', '房子通过了检查。', [], ['audit', 'check', 'parade', 'scrutiny', 'survey'], 'noun', 'uncountable/countable', '通用'],
  ], 'inspections', ['inspect', 'scrutiny'], '←inspect B1 + -ion，B1 继承；家族 scrutiny 细查，近义 audit 审计、check 检查、parade 阅兵（检阅义）、survey 调查');

  W('inspector', 'noun', '/ɪnˈspektə(r)/', 'B1', ['CET4'], '检查员', 'One checking things officially.', [
    ['检查员', 'One checking things officially.', '官方检查的人。', '可数。', 'The inspector sealed the shop.', '检查员查封了店。', [], ['superintendent'], 'noun', 'countable', '职业'],
  ], 'inspectors', ['inspect'], '←inspect B1 + -or，B1 继承；近义 superintendent 督察');

  W('instead of', 'conjunction', '/ɪnˈsted ɒv/', '', [], '代替', 'In place of something.', [
    ['代替', 'In place of something.', '替代某物。', '连词短语。', 'Tea instead of coffee.', '喝茶不喝咖啡。', [], ['rather'], 'conjunction', 'null', '通用'],
  ], '', [], 'instead 代替 + of；近义 rather 宁可。短语分级留空').phrase = true;

  W('instinctive', 'adjective', '/ɪnˈstɪŋktɪv/', 'B2', ['CET4'], '本能的', 'Done without thinking.', [
    ['本能的', 'Done without thinking.', '不想就做。', 'an instinctive reaction 本能反应。', 'Her reply was instinctive.', '她脱口而出。', [], ['gut', 'inborn'], 'adjective', '定语', '性格'],
  ], '', ['instinct'], '←instinct B2 + -ive，B2 继承；近义 gut 直觉的、inborn 天生的');

  W('instruction', 'noun', '/ɪnˈstrʌkʃn/', 'B1', ['CET4'], '说明', 'Words telling how to do.', [
    ['说明', 'Words telling how to do.', '告诉做法的话。', '可数或不可数：follow instructions。', 'Read the instructions first.', '先看说明。', ['follow instructions'], ['order', 'tuition'], 'noun', 'uncountable/countable', '通用'],
  ], '', ['instruct'], '←instruct B1 + -ion，B1 继承；近义 order 命令、tuition 教学（指导义）');

  W('instructions', 'noun', '/ɪnˈstrʌkʃnz/', 'B1', [], '说明书（复数）', 'Steps telling how; plural.', [
    ['说明书（复数）', 'Steps telling how; plural.', '讲做法的步骤；复数。', '复数。', 'Lost instructions annoy all.', '说明书丢了真烦人。', [], ['recipe'], 'noun', 'countable', '家居'],
  ], '', ['instruction', 'recipe'], '←instruction（本批新词 B1）+ -s，B1 继承；家族 recipe 食谱（做法说明）');

  W('instructor', 'noun', '/ɪnˈstrʌktə(r)/', 'B1', ['CET4'], '教练', 'One teaching a skill.', [
    ['教练', 'One teaching a skill.', '教本领的人。', '可数。', 'Our driving instructor is kind.', '驾校教练人好。', [], ['professor'], 'noun', 'countable', '职业'],
  ], 'instructors', ['instruct'], '←instruct B1 + -or，B1 继承；近义 professor 教授');

  W('insufficient', 'adjective', '/ˌɪnsəˈfɪʃnt/', 'B1', [], '不足的', 'Not enough.', [
    ['不足的', 'Not enough.', '不够的。', 'insufficient funds 资金不足。', 'Time was insufficient.', '时间不够。', [], ['deficient', 'scarce'], 'adjective', '定语/表语', '通用'],
  ], '', ['sufficient', 'scarce'], '←sufficient B1 + in-（反向），B1 继承；家族 scarce 稀缺的，近义 deficient 不足的');

  W('insulated', 'adjective', '/ˈɪnsjuleɪtɪd/', 'C1', [], '隔绝的', 'Blocked from heat or sound.', [
    ['隔绝的', 'Blocked from heat or sound.', '隔热音。', '分词形容词。', 'Walls are well insulated.', '墙隔音很好。', [], ['thermal'], 'adjective', '定语/表语', '家居'],
  ], '', ['insulate'], '←insulate C1 + -d，C1 继承；近义 thermal 保温的');

  W('insulting', 'adjective', '/ɪnˈsʌltɪŋ/', 'B2', [], '侮辱的', 'Saying rude things.', [
    ['侮辱的', 'Saying rude things.', '说难听话。', 'an insulting remark 侮辱人的话。', 'His tone was insulting.', '他语气侮辱人。', [], ['abusive'], 'adjective', '定语', '社交'],
  ], '', ['insult'], '←insult B2 + -ing，B2 继承；近义 abusive 辱骂的');

  W('insurance', 'noun', '/ɪnˈʃʊərəns/', 'B2', ['CET4'], '保险', 'Money paid for safety.', [
    ['保险', 'Money paid for safety.', '为安全交的钱。', '不可数：buy insurance。', 'Buy travel insurance first.', '先买旅行保险。', ['buy insurance'], ['Medicare'], 'noun', 'uncountable', '商务'],
  ], '', ['Medicare', 'insure'], '←insure B2 + -ance，B2 继承；家族 Medicare 联邦医保、insure 投保');

  W('insurgent', 'noun/adjective', '/ɪnˈsɜːdʒənt/', '', [], '叛乱者', 'One fighting the rulers.', [
    ['叛乱者', 'One fighting the rulers.', '和统治者打的人。', '可数或形容词。', 'Insurgents seized the town.', '叛军占了镇子。', [], ['rebel'], 'noun/adjective', 'null', '政治'],
  ], 'insurgents', [], '拉丁 insurgere——surg 词根不可见，故留空；近义 rebel 反叛者');

  W('insurrection', 'noun', '/ˌɪnsəˈrekʃn/', '', [], '起义', 'Rising against rulers.', [
    ['起义', 'Rising against rulers.', '反抗统治者。', '可数。', 'The insurrection failed fast.', '起义很快失败了。', [], ['uprising'], 'noun', 'countable', '政治'],
  ], 'insurrections', [], '拉丁 insurrectio——词根不可见，故留空；近义 uprising 起义');

  W('integrated', 'adjective', '/ˈɪntɪɡreɪtɪd/', 'B2', [], '一体化的', 'Joined into one whole.', [
    ['一体化的', 'Joined into one whole.', '合成一体的。', 'an integrated system 一体化系统。', 'The schools are integrated.', '学校已一体化。', [], ['organic'], 'adjective', '定语', '通用'],
  ], '', ['integrate'], '←integrate B2 + -d，B2 继承；近义 organic 有机的（整体的）');

  W('intelligence', 'noun', '/ɪnˈtelɪdʒəns/', 'B1', ['CET4'], '智力', 'Quick learning power.', [
    ['智力', 'Quick learning power.', '学得快的能力。', '不可数。', 'The test measures intelligence.', '测试测智力。', [], ['brain', 'intellect', 'wit'], 'noun', 'uncountable', '教育'],
  ], '', ['intelligent', 'intellect', 'wit'], '←intelligent B1 + -ce（t→ce 音变），B1 继承；家族 intellect 才智、wit 机智，近义 brain 头脑');

  W('intended', 'adjective', '/ɪnˈtendɪd/', 'B1', [], '故意的', 'Planned on purpose.', [
    ['故意的', 'Planned on purpose.', '有意计划的。', 'an intended joke 有意的玩笑。', 'The effect was intended.', '效果是故意的。', [], ['for'], 'adjective', '定语', '通用'],
  ], '', ['intend'], '←intend B1 + -ed，B1 继承；近义 for 为了（for 义）');

  W('intensify', 'verb', '/ɪnˈtensɪfaɪ/', 'B2', ['CET4'], '加剧', 'To grow stronger.', [
    ['加剧', 'To grow stronger.', '变得更强。', '及物或不及物。', 'Rain intensified floods.', '大雨加剧了洪水。', [], ['escalate', 'fuel', 'hot'], 'verb', '及物', '通用'],
  ], 'intensifies~intensified~intensified~intensifying', ['intense', 'escalate', 'fuel'], '←intense B2 + -ify（e→ify），B2 继承；家族 escalate 加剧、fuel 助长，近义 hot 激烈的');

  W('intensity', 'noun', '/ɪnˈtensəti/', 'B2', ['CET4'], '强度', 'How strong a feeling is.', [
    ['强度', 'How strong a feeling is.', '感觉有多强。', '不可数。', 'Light of high intensity blinds.', '强光刺眼。', [], ['magnitude'], 'noun', 'uncountable', '科学'],
  ], '', ['intense'], '←intense B2 + -ity，B2 继承；近义 magnitude 量级');

  W('intent', 'noun/adjective', '/ɪnˈtent/', 'B1', ['CET4'], '意图', 'What is planned to do.', [
    ['意图', 'What is planned to do.', '打算做的事。', '可数或形容词：with intent 蓄意。', 'His intent was clear.', '他的意图很清楚。', ['with intent'], ['malice'], 'noun/adjective', 'null', '通用'],
  ], '', ['intend'], '←intend B1 + -t（d→t 音变，同 descent），B1 继承；近义 malice 恶意');

  W('intention', 'noun', '/ɪnˈtenʃn/', 'B1', ['CET4'], '打算', 'A plan to do something.', [
    ['打算', 'A plan to do something.', '做某事的计划。', '可数或不可数。', 'His intentions are good.', '他用意良好。', [], ['design', 'purpose'], 'noun', 'uncountable/countable', '通用'],
  ], 'intentions', ['intent'], '←intent（本批新词 B1）+ -ion，B1 继承；近义 design 设计（意图义）、purpose 目的');

  W('intentional', 'adjective', '/ɪnˈtenʃənl/', 'B1', ['CET4'], '故意的', 'Done on purpose.', [
    ['故意的', 'Done on purpose.', '有意做的。', 'an intentional foul 故意犯规。', 'It was hardly intentional.', '这绝非故意。', [], ['deliberate'], 'adjective', '定语/表语', '通用'],
  ], '', ['intention', 'deliberate'], '←intention（本批新词 B1）+ -al，B1 继承；家族 deliberate 故意的');

  W('intercept', 'verb/noun', '/ˌɪntəˈsept/', '', [], '拦截', 'To stop on the way.', [
    ['拦截', 'To stop on the way.', '半路拦下。', '及物或可数名词。', 'They intercepted the pass.', '他们断了传球。', [], ['tackle'], 'verb/noun', 'null', '体育'],
  ], 'intercepts~intercepted~intercepted~intercepting', [], '拉丁 intercipere——cept 词根不可见，故留空；近义 tackle 拦截');

  W('interchange', 'noun/verb', '/ˈɪntətʃeɪndʒ/', '', [], '互换', 'Swapping places or ideas.', [
    ['互换', 'Swapping places or ideas.', '交换位置或想法。', '可数或及物动词。', 'There is a busy interchange.', '这是繁忙的立交桥。', [], ['exchange', 'junction'], 'noun/verb', 'null', '交通'],
  ], 'interchanges~interchanged~interchanged~interchanging', ['change'], 'inter- 之间（不在库作词目）+ change——首成分缺失（hyper- 先例），故留空；近义 exchange 交换、junction 枢纽');

  W('interface', 'noun/verb', '/ˈɪntəfeɪs/', '', [], '界面', 'Shared surface of systems.', [
    ['界面', 'Shared surface of systems.', '系统共用的面。', '可数或不及物动词。', 'The interface looks clean.', '界面很清爽。', [], ['port'], 'noun/verb', 'null', '科学'],
  ], 'interfaces~interfaced~interfaced~interfacing', ['face'], 'inter- 之间（不在库作词目）+ face——首成分缺失，故留空；近义 port 端口');

  W('interfere with', 'verb', '/ˌɪntəˈfɪə wɪð/', '', [], '干涉', 'To get in the way.', [
    ['干涉', 'To get in the way.', '挡路管事。', '及物短语。', 'Do not interfere with us.', '别干涉我们。', [], ['disrupt'], 'verb', '及物', '通用'],
  ], '', ['disrupt'], 'interfere 干涉 + with；家族 disrupt 扰乱。短语分级留空').phrase = true;

  W('interference', 'noun', '/ˌɪntəˈfɪərəns/', 'B2', ['CET4'], '干扰', 'Unwanted noise or meddling.', [
    ['干扰', 'Unwanted noise or meddling.', '不想听的噪音或插手。', '可数或不可数。', 'Static interference is bad.', '静电干扰严重。', [], ['noise', 'nuisance', 'static'], 'noun', 'uncountable/countable', '科学'],
  ], '', ['interfere'], '←interfere B2 + -ence，B2 继承；近义 noise 噪音、nuisance 讨厌的东西、static 静电干扰');

  W('interlace', 'verb/noun', '/ˌɪntəˈleɪs/', '', [], '交织', 'To weave things together.', [
    ['交织', 'To weave things together.', '把东西编一起。', '及物或可数名词。', 'Vines interlace the fence.', '藤蔓缠满篱笆。', [], ['weave'], 'verb/noun', 'null', '通用'],
  ], 'interlaces~interlaced~interlaced~interlacing', ['weave'], 'inter- 之间（不在库作词目）+ lace——首成分缺失，故留空；家族 weave 编织');

  W('intermission', 'noun', '/ˌɪntəˈmɪʃn/', '', [], '中场休息', 'A short break in a show.', [
    ['中场休息', 'A short break in a show.', '演出中的短暂停。', '可数。', 'Buy drinks at intermission.', '中场休息买喝的。', [], ['interval'], 'noun', 'countable', '文化'],
  ], 'intermissions', ['mission'], 'inter- 之间（不在库作词目）+ mission——首成分缺失，故留空；近义 interval 间隔');

  W('internationally', 'adverb', '/ˌɪntəˈnæʃnəli/', 'A2', [], '国际上', 'Across many countries.', [
    ['国际上', 'Across many countries.', '横跨多国。', '副词。', 'She is known internationally.', '她享誉国际。', [], ['worldwide'], 'adverb', 'null', '政治'],
  ], '', ['international'], '←international A2 + -ly，A2 继承；近义 worldwide 在世界范围');

  W('internist', 'noun', '/ˈɪntɜːnɪst/', '', [], '内科医生', 'A doctor for inner organs.', [
    ['内科医生', 'A doctor for inner organs.', '看内脏病的医生。', '可数，美式常用。', 'See an internist first.', '先看内科。', [], ['physician'], 'noun', 'countable', '职业'],
  ], 'internists', [], 'intern 实习医生（本词库未收）+ -ist——词根不可见，故留空；近义 physician 内科医生');

  W('intersect', 'verb/noun', '/ˌɪntəˈsekt/', '', [], '相交', 'To cross each other.', [
    ['相交', 'To cross each other.', '互相穿过。', '不及物或可数名词。', 'The roads intersect here.', '路在此交会。', [], ['cross', 'overlap'], 'verb/noun', 'null', '科学'],
  ], 'intersects~intersected~intersected~intersecting', [], 'inter- 之间（不在库作词目）+ sect——首成分缺失，故留空；近义 cross 穿过、overlap 重叠');

})(typeof window !== 'undefined' ? window : globalThis);
