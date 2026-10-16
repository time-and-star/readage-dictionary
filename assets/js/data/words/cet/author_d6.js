/* data/words/cet/author_d6.js · 手敲词条 D（六）：deluge ~ descent（含 1 短语 depend on）
 * 每条的英文释义、中文翻译、中文解释、例句、搭配均为逐个编写，非抓取、非批量生成。
 * 短语词条在 W(...) 返回后置 phrase = true；单词一律不标（check_phrase.js 自查）。
 * 短语无可靠 CEFR/考级来源统一留空；派生词按词根继承，复合词取首成分或家族词根级，无把握留空。
 * 义项 11 字段：[中文标题, 英文释义, 中文翻译, 中文详解, 例句, 例句中文, 搭配[], 近义[], 词性, 及物性, 领域]
 */
(function (global) {
  'use strict';
  const W = (global.RA || (global.RA = {})).W;
  if (typeof W !== 'function') throw new Error('author_d6.js 必须在 _cet_helper.js 之后加载');

  W('deluge', 'noun/verb', '/ˈdeljuːdʒ/', '', [], '洪水；大量涌来', 'A great flood of water, or a large amount arriving at once.', [
    ['洪水；泛滥', 'A great flood of water that covers an area.', '淹没一大片地区的洪水。', '可数：a deluge of rain（倾盆大雨）。', 'The deluge washed out the bridge.', '洪水冲毁了桥梁。', ['a deluge of'], ['flood'], 'noun', 'countable', '自然'],
    ['使应接不暇；大量涌来', 'To arrive or hit someone in a very large amount.', '大量涌来、使人应接不暇。', '及物，常被动 be deluged。', 'The office was deluged with calls.', '办公室的电话应接不暇。', ['be deluged with'], [], 'verb', '及物', '通用'],
  ], 'deluges~deluged~deluged~deluging', ['flood'], '拉丁 diluvium；家族 flood 洪水（最常用、通用词）。分级留空');

  W('delusion', 'noun', '/dɪˈluːʒn/', 'B2', ['CET6'], '错觉；妄想', 'A false belief that nothing can change.', [
    ['错觉；妄想', 'A false belief that nothing can change.', '无法被纠正的错误信念。', '可数：be under a delusion。', 'He lived in a delusion of power.', '他活在权力的妄想中。', ['under a delusion'], ['illusion'], 'noun', 'countable', '健康'],
  ], 'delusions', ['illusion'], '←delude B2 欺骗、使误信 + -ion，B2 继承；家族 illusion 幻觉（较中性、光影错觉）');

  W('deluxe', 'adjective', '/dɪˈlʌks/', '', [], '豪华的；高档的', 'Of a very high quality and expense.', [
    ['豪华的；高档的', 'Of a very high quality and expense.', '质量极高、价格昂贵的。', '常作定语，源自法语。', 'They stayed in a deluxe suite.', '他们住在一间豪华套房里。', ['deluxe edition'], ['luxury'], 'adjective', '定语', '外貌'],
  ], '', [], '法语 de luxe（奢华）；近义 luxury 奢华的（更常用）。分级留空');

  W('demanding', 'adjective', '/dɪˈmændɪŋ/', 'B1', ['CET4'], '费力的；要求高的', 'Needing a lot of skill, effort, or patience.', [
    ['费力的；要求高的', 'Needing a lot of skill, effort, or patience.', '需要大量技巧、精力或耐心的。', '常形容工作、客户。', 'The job is physically demanding.', '这份工作很费体力。', ['a demanding task'], ['heavy', 'intensive'], 'adjective', '定语', '职业'],
  ], '', ['demand'], '←demand B1 + -ing，B1 继承；近义 heavy 繁重的（heavy workload）、intensive 密集的（强度大）');

  W('demean', 'verb', '/dɪˈmiːn/', '', [], '贬低；降低身份', 'To behave or cause someone to behave in a way that lowers dignity.', [
    ['贬低；降低身份', 'To behave, or cause someone to behave, in a way that lowers dignity.', '使自己或他人表现得有失尊严。', '及物：demean oneself。', 'He demeaned himself with crude jokes.', '他用粗俗的玩笑自贬身份。', ['demean yourself'], ['degrade'], 'verb', '及物', '书面'],
  ], 'demeans~demeaned~demeaned~demeaning', [], '古法语 demener（管理）——与 mean 拼写交叠但非 de+mean 派生（假友），故留空；近义 degrade 降低身份。分级留空');

  W('demeanor', 'noun', '/dɪˈmiːnə(r)/', '', [], '举止；风度', 'The way a person behaves and looks towards others.', [
    ['举止；风度', 'The way a person behaves and looks towards others.', '一个人待人接物的外在表现。', '可数或不可数，正式用语。', 'Her calm demeanor eased the tension.', '她沉着的举止缓和了紧张气氛。', ['a confident demeanor'], ['manner'], 'noun', 'uncountable/countable', '外貌'],
], 'demeanors', ['demean'], 'demean 行为（古义）+ -or；近义 manner 举止（最常用）。分级留空');

  W('demilitarise', 'verb', '/ˌdiːˈmɪlɪtəraɪz/', '', [], '使非军事化', 'To remove military forces or weapons from an area.', [
    ['使非军事化', 'To remove military forces or weapons from an area.', '从某地区撤除军事力量或武器。', '及物，英式拼写；美式 demilitarize。', 'The zone was demilitarised after the war.', '战后该地区被非军事化了。', [], ['disarm'], 'verb', '及物', '军事'],
  ], 'demilitarises~demilitarised~demilitarised~demilitarising', ['disarm'], 'military B2 的两跳派生（militarise 不在库），故留空；家族 disarm 缴械（解除武装）');

  W('demise', 'noun', '/dɪˈmaɪz/', '', [], '终结；死亡', 'The end or death of something or someone.', [
    ['终结；死亡', 'The end or death of something or someone.', '某事或某人的终结、去世。', '不可数，委婉正式用语。', 'The project met an early demise.', '这个项目早早夭折了。', ['meet an early demise'], [], 'noun', 'uncountable', '书面'],
  ], '', ['death'], '拉丁 dimittere（遣散）；家族 death 死亡（最常用）。分级留空');

  W('demobilise', 'verb', '/ˌdiːˈməʊbɪlaɪz/', 'C1', [], '复员；遣散', 'To send soldiers home from service, or to reduce forces.', [
    ['复员；遣散', 'To send soldiers home from service, or to reduce armed forces.', '让士兵退役回家，或裁减军力。', '及物，英式拼写；美式 demobilize。', 'The army demobilised two divisions.', '军队复员了两个师。', [], ['disarm'], 'verb', '及物', '军事'],
  ], 'demobilises~demobilised~demobilised~demobilising', ['mobilize'], '←mobilize C1 动员 + de-（反向，-ise 为 -ize 变体），C1 继承；近义 disarm 裁军（解除武装）');

  W('demolish', 'verb', '/ˈdəməlɪʃ/', '', [], '拆毁；推翻', 'To pull down or destroy a building completely.', [
    ['拆毁；摧毁', 'To pull down or destroy a building completely.', '彻底拆掉或毁掉建筑物。', '及物：demolish the building。', 'They demolished the old theatre.', '他们拆掉了旧剧院。', ['demolish the wall'], ['destroy'], 'verb', '及物', '工业'],
    ['驳倒；吃完', 'To refute an argument, or to eat something very quickly.', '驳倒论点，或吃得极快。', '及物，非正式第二义。', 'She demolished his argument in minutes.', '几分钟她就驳倒了他的论点。', [], [], 'verb', '及物', '书面'],
  ], 'demolishes~demolished~demolished~demolishing', ['destroy'], '拉丁 demoliri；家族 destroy 摧毁（最常用）。分级留空');

  W('demon', 'noun', '/ˈdiːmən/', '', [], '恶魔；恶人', 'An evil spirit in religion, or a very cruel person.', [
    ['恶魔；恶人', 'An evil spirit in religion, or a very cruel person.', '宗教中的邪灵，或极其残忍的人。', '可数。', 'He drove the demons from the cave.', '他把恶魔赶出了山洞。', ['inner demons'], ['devil'], 'noun', 'countable', '宗教'],
  ], 'demons', ['devil'], '希腊 daimon（灵体）；家族 devil 魔鬼（基督教传统、最常用）。分级留空');

  W('demonstration', 'noun', '/ˌdemənˈstreɪʃn/', 'B1', [], '示范；游行示威', 'A practical showing of how something works, or a public protest.', [
    ['示范；证明', 'A practical showing of how something works, or evidence that shows something.', '演示某物如何运作，或表明某事的证据。', '可数：give a demonstration。', 'The cook gave a demonstration of knife skills.', '厨师示范了刀工。', ['a live demonstration'], ['proof'], 'noun', 'countable', '教育'],
    ['游行示威', 'A public meeting to protest about something.', '为抗议某事举行的公开集会。', '可数：stage a demonstration。', 'Thousands joined the demonstration.', '数千人参加了示威游行。', ['stage a demonstration'], ['protest', 'rally'], 'noun', 'countable', '社会'],
  ], 'demonstrations', ['protest'], '←demonstrate B1 + -ion，B1 继承；第一义近义 proof 证明，第二义近义 protest 抗议、rally 集会');

  W('demote', 'verb', '/dɪˈməʊt/', '', [], '降职；降级', 'To move someone to a lower rank or position.', [
    ['降职；降级', 'To move someone to a lower rank or position.', '把某人降到更低的级别或职位。', '及物，常被动 be demoted。', 'He was demoted to branch manager.', '他被降职为分行经理。', ['demote to'], ['downgrade'], 'verb', '及物', '商务'],
  ], 'demotes~demoted~demoted~demoting', ['downgrade'], 'de- 向下 + mote（拉丁 movere 移动——词根不可见），故留空；家族 downgrade 降级（职位或版本）。分级留空');

  W('den', 'noun', '/den/', '', [], '兽穴；书房', 'A small hidden shelter for animals, or a small private study.', [
    ['兽穴；窝', 'A small hidden place where a wild animal lives.', '野生动物居住的小隐蔽处。', '可数：a lion den（狮穴）。', 'The fox hid its food in the den.', '狐狸把食物藏在洞里。', [], ['nest'], 'noun', 'countable', '自然'],
    ['书房；私室', 'A small room where someone likes to work or read in private.', '供人独自工作或阅读的小房间。', '可数，非正式。', 'He retreated to his den with a book.', '他拿了本书躲进书房。', [], ['study'], 'noun', 'countable', '家居'],
  ], 'dens', ['nest'], '家族 nest 巢（鸟类的窝）、近义 study 书房（通用）。分级留空');

  W('denim', 'noun', '/ˈdenɪm/', '', [], '牛仔布；斜纹棉布', 'A strong cotton cloth used to make jeans.', [
    ['牛仔布；斜纹棉布', 'A strong cotton cloth used to make jeans.', '用来做牛仔裤的结实棉布。', '不可数。', 'The jacket is made of raw denim.', '这件外套是原色牛仔布做的。', ['denim jacket'], [], 'noun', 'uncountable', '外貌'],
  ], '', ['jeans'], '源自法语 de Nimes（尼姆产布）；家族 jeans 牛仔裤（成品）。分级留空');

  W('denims', 'noun', '/ˈdenɪmz/', '', [], '牛仔裤（复数）', 'Trousers made of denim, used as a plural.', [
    ['牛仔裤（复数）', 'Trousers made of denim, used mainly as a plural.', '牛仔布做的裤子，多用复数。', '复数形式，常与 a pair of 连用。', 'He wore a clean pair of denims.', '他穿了一条干净的牛仔裤。', ['a pair of denims'], ['jeans'], 'noun', 'countable', '外貌'],
], '', ['denim'], 'denim 牛仔布 + -s，指成品裤；近义 jeans 牛仔裤（最常用单数形式）。分级留空');

  W('denomination', 'noun', '/dɪˌnɒmɪˈneɪʃn/', '', [], '面额；教派', 'The value of a banknote or coin, or a religious group.', [
    ['面额；票面值', 'The value of a banknote, coin, or unit of money.', '钞票、硬币或货币单位的价值。', '可数：notes of small denomination（小面额钞票）。', 'Coins come in several denominations.', '硬币有几种面额。', [], [], 'noun', 'countable', '商务'],
    ['教派；宗派', 'A religious group with its own beliefs and name.', '有自身信仰与名称的宗教派别。', '可数。', 'The town has churches of every denomination.', '镇上各种教派的教堂都有。', [], ['church'], 'noun', 'countable', '宗教'],
], 'denominations', ['name'], '←de- + nomin（名字，name 变体）+ -ation；第二义近义 church 教会（宗派单位）。分级留空');

  W('departing', 'adjective', '/dɪˈpɑːtɪŋ/', 'B1', [], '离开的；出发的', 'Going away from a place; leaving.', [
    ['离开的；出发的', 'Going away from a place; leaving.', '正在离开某地的。', '常见 departing passengers/train（出港旅客、始发列车）。', 'The departing guests waved goodbye.', '离别的客人们挥手告别。', ['departing flight'], ['outgoing'], 'adjective', '定语', '交通'],
  ], '', ['outgoing'], '←depart B1 + -ing，B1 继承；家族 outgoing 外向的、即将离任的（outgoing flight 出港航班）');

  W('departure', 'noun', '/dɪˈpɑːtʃə(r)/', 'B1', ['CET4'], '离开；起飞', 'The act of leaving, especially on a journey.', [
    ['离开；出发', 'The act of leaving a place.', '离开某地的行为。', '不可数或可数：departure from。', 'The departure gate is upstairs.', '登机口在楼上。', ['departure time'], ['exit'], 'noun', 'uncountable/countable', '交通'],
    ['起飞', 'The moment a plane leaves the ground.', '飞机离开地面的时刻。', '可数：flight departures（航班起飞）。', 'Departures were delayed by fog.', '起飞因大雾推迟。', ['departures board'], ['takeoff'], 'noun', 'uncountable/countable', '交通'],
  ], 'departures', ['exit', 'takeoff'], '←depart B1 + -ure，B1 继承；家族 exit 出口、takeoff 起飞（B1）');

  W('depend on', 'verb', '/dɪˈpend ɒn/', '', [], '依靠；取决于', 'To need someone or something, or to be decided by it.', [
    ['依靠；依赖', 'To need someone or something in order to work or exist.', '需要某人某物才能运作或存在。', '及物短语。', 'The farm depends on the river.', '农场依靠这条河。', ['depend on'], [], 'verb', '及物', '通用'],
    ['取决于；由…而定', 'To be decided or affected by something.', '由某事物决定或影响。', '及物短语。', 'It depends on the weather.', '这取决于天气。', ['it all depends'], ['hinge'], 'verb', '不及物', '通用'],
  ],'depends on~depended on~depending on', ['hinge'], 'depend 依靠 + on；家族 hinge 关键在于（hinge on 取决于，C1）。短语分级留空').phrase = true;

  W('dependable', 'adjective', '/dɪˈpendəbl/', 'A2', ['CET4'], '可靠的；靠得住的', 'Someone or something that you can rely on.', [
    ['可靠的；靠得住的', 'Someone or something that you can rely on.', '可以信赖的人或物。', '多形容人。', 'She is a dependable colleague.', '她是个可靠的同事。', ['a dependable friend'], ['steady'], 'adjective', '定语/表语', '通用'],
  ], '', ['depend'], '←depend A2 + -able（可……的），A2 继承；近义 steady 稳健的（始终如一）');

  W('dependant', 'noun', '/dɪˈpendənt/', 'A2', [], '受抚养者；眷属', 'A person who depends on someone else for money or support.', [
    ['受抚养者；眷属', 'A person who depends on someone else for money or support.', '在经济或生活上依靠他人的人。', '可数，英式拼写；美式 dependent。', 'He claimed two dependants on the form.', '他在表上申报了两名受抚养人。', [], ['ward'], 'noun', 'countable', '法律'],
  ], 'dependants', ['depend'], '←depend A2 + -ant（表人），A2 继承；近义 ward 被监护人（法律用语）');

  W('dependency', 'noun', '/dɪˈpendənsi/', 'A2', [], '依赖；附属国', 'The state of needing someone, or a place controlled by another country.', [
    ['依赖状态', 'The state of needing someone or something, especially when it is harmful.', '需要他人他物的状态，尤指有害时。', '可数或不可数：a dependency on drugs（毒品依赖）。', 'Her dependency on praise grew.', '她对赞扬的依赖变强了。', ['a dependency on'], [], 'noun', 'uncountable/countable', '健康'],
    ['附属国；属地', 'A country or place controlled by another.', '受他国控制的国家或地区。', '可数：former dependencies（旧属地）。', 'The islands were once a dependency.', '这些岛屿曾是属地。', [], ['satellite'], 'noun', 'countable', '政治'],
  ], 'dependencies', ['depend'], '←depend A2 + -ency，A2 继承；第二义近义 satellite 卫星国（依附强国）');

  W('depose', 'verb', '/dɪˈpəʊz/', 'B2', [], '罢黜；罢免', 'To remove a ruler or leader from power officially.', [
    ['罢黜；罢免', 'To remove a ruler or leader from power officially.', '正式把统治者或领导人赶下台。', '及物：depose the king。', 'The generals deposed the president.', '将军们废黜了总统。', ['depose from power'], ['overthrow'], 'verb', '及物', '政治'],
  ], 'deposes~deposed~deposed~deposing', ['pose'], '←pose B2 置放 + de-（下），B2 继承；近义 overthrow 推翻（用武力打倒政权）');

  W('depressed', 'adjective', '/dɪˈprest/', 'B1', [], '沮丧的；萧条的', 'Unhappy and without hope, or in a low economic state.', [
    ['沮丧的；抑郁的', 'Unhappy and without hope, for a long time.', '长期不快乐、看不到希望的。', '分词形容词：feel depressed。', 'He felt depressed about the result.', '他对结果感到沮丧。', ['feel depressed'], ['down'], 'adjective', '定语/表语', '健康'],
    ['萧条的；不景气的', 'In a poor economic state; not active.', '经济状态差的、不活跃的。', '形容市场、地区。', 'The industry is still depressed.', '该行业仍不景气。', ['depressed area'], ['low'], 'adjective', '定语', '商务'],
  ], '', ['depress'], '←depress B1 + -ed，B1 继承；第一义近义 down 低落的、第二义 low 低迷的（价格、活动）');

  W('deranged', 'adjective', '/dɪˈreɪndʒd/', 'B1', [], '精神错乱的；疯癫的', 'Mad; unable to think or behave normally.', [
    ['精神错乱的；疯癫的', 'Mad; unable to think or behave normally.', '心智失常、无法正常思考或行为的。', '较旧式委婉语，今多用 mentally ill。', 'The deranged man shouted at passers-by.', '那个精神失常的男子对着路人叫喊。', [], ['insane'], 'adjective', '定语', '健康'],
  ], '', ['range'], '←range B1 范围 + de-（出格），B1 继承；近义 insane 精神失常的（医学旧称）。分级继承 B1');

  W('deride', 'verb', '/dɪˈraɪd/', '', [], '嘲笑；奚落', 'To mock someone or something in a cruel way.', [
    ['嘲笑；奚落', 'To mock someone or something in a cruel way.', '刻薄地讥笑某人某事。', '及物，较文。', 'Critics derided the new play.', '评论家们讥笑了这出新戏。', ['deride as'], ['ridicule'], 'verb', '及物', '书面'],
  ], 'derides~derided~derided~deriding', ['ridicule'], '拉丁 ridēre（笑）——与 ride 拼写交叠但非同根（假友），故留空；家族 ridicule 嘲笑（C1、最常用）');

  W('derivative', 'noun', '/dɪˈrɪvətɪv/', 'B1', ['CET4'], '派生物；衍生物', 'Something that is based on or copied from another thing.', [
    ['派生物；衍生物', 'Something formed from a similar substance or word, or copied work.', '由同类物质或词根衍生之物，或模仿之作。', '可数：chemical derivatives（化学衍生物）。', 'The drug is a natural derivative.', '这种药是天然衍生物。', [], ['petrochemical'], 'noun', 'countable', '科学'],
  ], 'derivatives', ['derive'], '←derive B1 源自 + -ative，B1 继承；近义 petrochemical 石油化工产品（衍生品类实例）');

  W('descendant', 'noun', '/dɪˈsendənt/', 'B1', ['CET4'], '后代；后裔', 'A person who comes from someone who lived a long time ago.', [
    ['后代；后裔', 'A person who comes from someone who lived a long time ago.', '源自久远祖先的人。', '可数。', 'They are descendants of the first settlers.', '他们是第一批定居者的后裔。', ['a direct descendant'], ['offspring'], 'noun', 'countable', '社会'],
    ['直系子孙', 'A person descended in a direct line from a parent.', '由亲代直接繁衍的后代。', '可数，较正式。', 'The estate passed to his descendants.', '地产传给了他的子孙。', [], ['offspring', 'son'], 'noun', 'countable', '社会'],
  ], 'descendants', ['ancestor', 'offspring'], '←descend B1 下来 + -ant（表人），B1 继承；家族 ancestor 祖先、offspring 后代，近义 son 子孙（直系）');

  W('descent', 'noun', '/dɪˈsent/', 'B1', ['CET4'], '下降；血统', 'The act of going down, or the family origins of a person.', [
    ['下降；下坡', 'The act of going down from a higher place.', '从高处往下的过程。', '可数或不可数：a steep descent。', 'The descent took two hours.', '下山花了两个小时。', ['a sharp descent'], [], 'noun', 'uncountable/countable', '交通'],
    ['血统；世系', 'The family origins of a person.', '一个人的家族出身。', '不可数：of African descent（非洲血统）。', 'She is of Irish descent.', '她是爱尔兰血统。', ['of descent'], ['blood'], 'noun', 'uncountable', '社会'],
  ], 'descents', ['descend'], '←descend B1 + -ent（动作名词），B1 继承；第二义近义 blood 血统（家族血脉）');

  W('description', 'noun', '/dɪˈskrɪpʃn/', 'A2', ['CET4'], '描述；说明', 'A piece of writing or speech that says what someone or something is like.', [
    ['描述；说明', 'A piece of writing or speech that says what someone or something is like.', '说明某人某物是什么样子的文字或话语。', '可数或不可数：give a description。', 'The police asked for a description of the man.', '警方要求描述那名男子的样子。', ['a detailed description'], ['account'], 'noun', 'uncountable/countable', '通用'],
  ], 'descriptions', ['describe'], '←describe A2 + -tion，A2 继承；近义 account 描述、叙述（书面）');
  W('desecrate', 'verb', '/ˈdesɪkreɪt/', '', [], '亵渎；玷污', 'To treat a holy place or thing with disrespect.', [
    ['亵渎；玷污', 'To treat a holy place or thing with disrespect.', '对神圣场所或事物不敬地对待。', '及物，较文。', 'The vandals desecrated the graves.', '破坏者亵渎了那些坟墓。', ['desecrate a shrine'], ['violate'], 'verb', '及物', '宗教'],
  ], 'desecrates~desecrated~desecrated~desecrating', [], 'de- + sacred（拼写上 sacred 不可见于词中，非直接可见派生），故留空；近义 violate 侵犯、违反（破坏规则或神圣）。分级留空');
  W('deserted', 'adjective', '/dɪˈzɜːtɪd/', 'B1', [], '被抛弃的；无人的', 'Left empty; with no people in it.', [
    ['被抛弃的；无人的', 'Left empty; with no people in it.', '被丢下、空无一人的。', '分词形容词。', 'The village was almost deserted in winter.', '冬天村里几乎空无一人。', ['a deserted street'], ['abandoned'], 'adjective', '定语', '通用'],
  ], '', ['desert'], '←desert B1 + -ed，B1 继承；近义 abandoned 被废弃的（不再使用）');
  W('deserving', 'adjective', '/dɪˈzɜːvɪŋ/', 'B1', [], '应得的；值得帮助的', 'Worthy of being helped, given something, or punished.', [
    ['应得的；值得帮助的', 'Worthy of being helped, given something, or punished.', '配得上帮助、奖赏或惩罚的。', '常见 be deserving of。', 'The cause is deserving of support.', '这项事业值得支持。', ['deserving of praise'], ['worthy'], 'adjective', '定语/表语', '通用'],
  ], '', ['worthy'], '←deserve B1 + -ing，B1 继承；家族 worthy 值得的（更正式、书面）');

  W('desiccant', 'noun', '/ˈdesɪkənt/', '', [], '干燥剂', 'A substance that takes up water and keeps things dry.', [
    ['干燥剂', 'A substance that takes up water and keeps things dry.', '吸收水分、使物品保持干燥的物质。', '可数或不可数，技术用语。', 'Silica gel is a common desiccant.', '硅胶是常见的干燥剂。', ['desiccant packet'], ['absorbent'], 'noun', 'uncountable/countable', '工业'],
  ], 'desiccants', [], '拉丁 desiccare（使全干）；近义 absorbent 吸收剂（能吸水的材料）。分级留空');

  W('desirable', 'adjective', '/dɪˈzaɪərəbl/', 'B1', ['CET4'], '令人向往的；合意的', 'Wanted; having qualities that people would like.', [
    ['令人向往的；合意的', 'Wanted; having qualities that people would like.', '被想要的、具有人们喜欢的特点的。', '较正式，可作表语。', 'The location is highly desirable.', '这个地段非常抢手。', ['a desirable feature'], ['envy'], 'adjective', '定语/表语', '通用'],
  ], '', ['desire'], '←desire B1 渴望 + -able，B1 继承；近义 envy 令人垂涎的（多修饰物品）');

  W('desperate', 'adjective', '/ˈdespərət/', '', ['CET4'], '绝望的；不顾一切的', 'Feeling or showing that you have no hope left.', [
    ['绝望的；不顾一切的', 'Feeling or showing that you have no hope left, ready to do anything.', '感到毫无希望、不惜一切的。', '常见 a desperate attempt（不顾一切的尝试）。', 'He made a desperate attempt to save her.', '他不顾一切地想救她。', ['a desperate attempt'], ['frantic'], 'adjective', '定语/表语', '通用'],
  ], '', ['desperation', 'desperately'], 'desperation 是绝望或不顾一切的状态，desperately 是副词；近义 frantic 狂乱的（急切失控）。');

  W('destine', 'verb', '/ˈdestɪn/', '', [], '注定；命定', 'To be bound to reach a place or end in a particular state.', [
    ['注定；命定', 'To be bound to reach a place or end in a particular state.', '注定要到达某地或落入某种状态。', '及物，常被动 be destined for/to。', 'She was destined for a career on the stage.', '她注定要走上舞台生涯。', ['destined for'], ['fate'], 'verb', '及物', '书面'],
  ], 'destines~destined~destined~destining', [], 'destiny B2 与 destination B1 均不完整含词形 destine（直接关联词不可见，同 courteous 模式），故留空；近义 fate 命运（注定的安排）');

  W('destruction', 'noun', '/dɪˈstrʌkʃn/', 'A2', ['CET4'], '毁灭；摧毁', 'The act of destroying something, or the state of being destroyed.', [
    ['毁灭；摧毁', 'The act of destroying something completely, or the state of being destroyed.', '彻底毁掉某物的行为，或被毁的状态。', '不可数或可数：the destruction of the forest。', 'The war brought destruction to the city.', '战争给城市带来了毁灭。', ['total destruction'], ['death', 'doom', 'havoc', 'ruin'], 'noun', 'uncountable/countable', '通用'],
  ], '', ['havoc'], '←destroy A2 + -tion，A2 继承；家族 havoc 大破坏（wreak havoc 摧毁），近义 death 死亡、doom 厄运、ruin 废墟');

  W('detailed', 'adjective', '/ˈdiːteɪld/', 'B1', ['CET4'], '详细的；详尽的', 'Having many details; worked out in full.', [
    ['详细的；详尽的', 'Having many details; worked out in full.', '包含很多细节、完整展开的。', '分词形容词：a detailed report。', 'She gave a detailed account of the trip.', '她对这次旅行作了详细的叙述。', ['a detailed plan'], ['elaborate', 'intimate', 'minute'], 'adjective', '定语', '通用'],
  ], '', ['elaborate'], '←detail B1 + -ed，B1 继承；家族 elaborate 精心详尽的，近义 intimate 精深的（intimate knowledge 熟知）、minute 仔细入微的（读 /maɪˈnjuːt/）');

  W('detective', 'noun', '/dɪˈtektɪv/', 'B1', ['CET4'], '侦探；警探', 'A person whose job is to find out who committed a crime.', [
    ['侦探；警探', 'A person whose job is to find out who committed a crime.', '以查出罪犯为职业的人。', '可数：a private detective（私家侦探）。', 'The detective found the missing ring.', '侦探找到了丢失的戒指。', ['a police detective'], ['mystery'], 'noun', 'countable', '法律'],
  ], 'detectives', ['detect'], '←detect B1 察觉 + -ive（表人），B1 继承；近义 mystery 谜案（侦探面对的疑案）');

  W('detector', 'noun', '/dɪˈtektə(r)/', 'B1', [], '探测器；检测器', 'A device that finds or measures something hard to notice.', [
    ['探测器；检测器', 'A device that finds or measures something that is hard to notice.', '用于发现或测量难以察觉之物的装置。', '可数：a smoke detector（烟雾报警器）。', 'The detector picked up a weak signal.', '探测器收到了微弱信号。', ['smoke detector'], ['radar'], 'noun', 'countable', '科学'],
  ], 'detectors', ['radar'], '←detect B1 + -or（表装置），B1 继承；家族 radar 雷达（无线电探测装置）');

  W('detention', 'noun', '/dɪˈtenʃn/', 'B2', ['CET6'], '拘留；留校处罚', 'The state of being kept in official custody, or a punishment for pupils.', [
    ['拘留；扣押', 'The state of being kept in official custody by the police or authorities.', '被警方或当局扣留的状态。', '不可数或可数：preventive detention。', 'He was held in detention for three days.', '他被拘留了三天。', ['in detention'], ['custody'], 'noun', 'uncountable/countable', '法律'],
    ['课后留校（处罚）', 'A punishment in which a pupil stays at school after hours.', '学生放学后留校的处罚。', '可数，英式常用。', 'The teacher gave him a detention.', '老师罚他放学留校。', ['get a detention'], [], 'noun', 'countable', '教育'],
  ], 'detentions', ['custody'], '←detain B2 拘留（tain↔tent 同源交替），B2 继承；家族 custody 监护、拘留（法律用语）');

  W('deterioration', 'noun', '/dɪˌtɪəriəˈreɪʃn/', 'B2', ['CET4'], '恶化；退化', 'The process of becoming worse.', [
    ['恶化；退化', 'The process of becoming worse.', '变得更坏的过程。', '不可数：the deterioration of relations（关系恶化）。', 'Her health showed a slow deterioration.', '她的健康在慢慢恶化。', ['moral deterioration'], ['worse'], 'noun', 'uncountable', '健康'],
  ], '', ['deteriorate'], '←deteriorate B2 + -ion，B2 继承；近义 worse 更坏（become worse 变坏，refs 镜像）');

  W('determination', 'noun', '/dɪˌtɜːmɪˈneɪʃn/', 'B1', ['CET4'], '决心；决断', 'The quality of being firm in doing what you have decided, or a decision reached.', [
    ['决心；决断', 'The quality of being firm and not giving up in doing what you have decided.', '认准目标坚持到底的品质。', '不可数或可数：show determination。', 'She showed great determination to finish.', '她表现出了完成的坚定决心。', ['show determination'], ['purpose', 'resolve', 'will', 'willpower'], 'noun', 'uncountable/countable', '通用'],
  ], '', ['will', 'willpower'], '←determine B1 + -ation，B1 继承；家族 will 意志、willpower 意志力，近义 purpose 目标、resolve 决心');

  W('determined', 'adjective', '/dɪˈtɜːmɪnd/', 'B1', ['CET4'], '坚决的；下定决心的', 'Having made a firm decision and not likely to change it.', [
    ['坚决的；下定决心的', 'Having made a firm decision and not likely to change it.', '已作坚定决定、不太会改变的。', '分词形容词：be determined to。', 'She is determined to win.', '她决心要赢。', ['determined look'], ['firm'], 'adjective', '定语/表语', '通用'],
  ], '', ['determine'], '←determine B1 + -ed，B1 继承；近义 firm 坚定的（态度果断）');

  W('detest', 'verb', '/dɪˈtest/', '', [], '厌恶；憎恶', 'To hate someone or something very much.', [
    ['厌恶；憎恶', 'To hate someone or something very much.', '非常讨厌某人或某事。', '及物，比 dislike 语气强。', 'He detests flattery.', '他厌恶谄媚。', ['detest lies'], ['hate'], 'verb', '及物', '通用'],
  ], 'detests~detested~detested~detesting', ['hate'], '拉丁 detestari——与 test 拼写交叠但非 de+test（假友），故留空；家族 hate 讨厌（A1、最常用）');

  W('detonator', 'noun', '/ˈdetəneɪtə(r)/', '', [], '雷管；起爆器', 'A device that sets off an explosion.', [
    ['雷管；起爆器', 'A device that sets off an explosion.', '引爆爆炸物的装置。', '可数。', 'The bomb was fitted with a faulty detonator.', '炸弹装了一个失灵的雷管。', ['electric detonator'], ['fuse'], 'noun', 'countable', '工业'],
], 'detonators', ['detonate'], 'detonate 起爆（本词库未收）+ -or，故留空；近义 fuse 引信（导火线，触发爆炸）。分级留空');

  W('devalue', 'verb', '/ˌdiːˈvæljuː/', 'A2', [], '贬值；降低价值', 'To reduce the value of money or of something.', [
    ['贬值；降低价值', 'To reduce the value of money, or reduce the worth of something.', '降低货币价值，或贬低某物价值。', '不及物（货币）或及物（事物）。', 'The country devalued its currency by ten percent.', '该国把货币贬值了百分之十。', ['devalue the currency'], ['depreciate'], 'verb', '及物', '商务'],
  ], 'devalues~devalued~devalued~devaluing', ['depreciate'], '←value A2 价值 + de-（降低），A2 继承；家族 depreciate 贬值（资产随时间贬值）');

  W('devastating', 'adjective', '/ˈdevəsteɪtɪŋ/', 'B2', ['CET6'], '毁灭性的；令人震惊的', 'Causing great damage or shock.', [
    ['毁灭性的；令人震惊的', 'Causing great damage, destruction, or shock.', '造成巨大破坏或强烈震动的。', '较正式：devastating news。', 'The storm left devastating damage.', '风暴造成了毁灭性的破坏。', ['a devastating attack'], ['fatal'], 'adjective', '定语', '通用'],
  ], '', ['devastate'], '←devastate B2 + -ing，B2 继承；近义 fatal 致命的（导致死亡或失败）');

  W('devastation', 'noun', '/ˌdevəˈsteɪʃn/', 'B2', ['CET6'], '破坏；蹂躏', 'Severe and widespread damage.', [
    ['破坏；蹂躏', 'Severe and widespread damage.', '严重且大范围的毁坏。', '不可数。', 'The war left devastation across the region.', '战争给整个地区留下一片废墟。', ['cause devastation'], ['havoc'], 'noun', 'uncountable', '通用'],
  ], '', ['devastate'], '←devastate B2 + -ion，B2 继承；近义 havoc 大破坏（wreak havoc 横扫破坏）');

  W('developing', 'adjective', '/dɪˈveləpɪŋ/', 'A2', [], '发展中的', 'Of a country that is becoming more economically advanced.', [
    ['发展中的', 'Of a country that is becoming more economically advanced.', '（国家）正在变得更发达的。', '常见 developing countries（发展中国家）。', 'Many developing nations joined the talks.', '许多发展中国家参加了会谈。', ['developing countries'], ['underdeveloped'], 'adjective', '定语', '政治'],
  ], '', ['underdeveloped'], '←develop A2 + -ing，A2 继承；家族 underdeveloped 欠发达的（发展不足）');

  W('development', 'noun', '/dɪˈveləpmənt/', 'A2', ['CET4'], '发展；开发', 'The process of growing, improving, or building.', [
    ['发展；进展', 'The process of growing, improving, or becoming more advanced.', '成长、改进或变得更先进的过程。', '不可数或可数：recent developments（最新进展）。', 'The development of the plan took months.', '制定这个计划花了几个月。', ['economic development'], [], 'noun', 'uncountable/countable', '通用'],
    ['开发区；房地产项目', 'An area or project where buildings are constructed.', '建造楼房的区域或项目。', '可数：a housing development（住宅小区）。', 'They moved to a new housing development.', '他们搬到了一个新的住宅小区。', ['property development'], ['estate'], 'noun', 'countable', '商务'],
  ], 'developments', ['estate'], '←develop A2 + -ment，A2 继承；第二义家族 estate 地产（房地产物业）');

  W('devoid', 'adjective', '/dɪˈvɔɪd/', 'C1', [], '没有…的；缺少的', 'Completely lacking in something.', [
    ['没有…的；缺少的', 'Completely lacking in something.', '完全不具有某物的。', '常 devoid of 作表语。', 'The room was devoid of colour.', '房间里毫无色彩。', ['devoid of'], ['void'], 'adjective', '表语', '书面'],
  ], '', ['void'], '←void C1 空的 + de-（无），C1 继承；近义 void 空的（法律上无效的、void of 无…）');

  W('devoted', 'adjective', '/dɪˈvəʊtɪd/', 'B1', [], '挚爱的；忠实的', 'Loving and loyal to someone very much.', [
    ['挚爱的；忠实的', 'Loving and loyal to someone very much.', '对某人非常关爱忠诚的。', '分词形容词：devoted to。', 'He is a devoted father.', '他是个慈爱的父亲。', ['devoted to'], ['loyal'], 'adjective', '定语/表语', '家庭'],
  ], '', ['loyal'], '←devote B1 献身 + -ed，B1 继承；家族 loyal 忠诚的（对组织、朋友）');

  W('devotion', 'noun', '/dɪˈvəʊʃn/', 'B1', ['CET4'], '热爱；虔诚', 'Very great love, loyalty, or religious faith.', [
    ['热爱；奉献', 'Very great love and loyalty to someone or something.', '对某人某事极大的热爱与忠诚。', '不可数：devotion to duty（尽职）。', 'Her devotion to the children impressed everyone.', '她对孩子们的关爱感动了所有人。', ['devotion to'], ['love'], 'noun', 'uncountable', '家庭'],
    ['虔诚；宗教崇拜', 'Deep religious faith and worship.', '深厚的宗教信仰与崇拜。', '不可数。', 'The monks lived in devotion.', '修士们虔心修行。', [], ['worship'], 'noun', 'uncountable', '宗教'],
  ], '', ['devote'], '←devote B1 + -ion，B1 继承；第一义近义 love 爱、第二义 worship 敬拜（宗教崇拜）');

  W('dice', 'noun', '/daɪs/', '', [], '骰子', 'A small object with six sides used in games, thrown for a random number.', [
    ['骰子', 'A small object with six sides used in games, thrown to give a random number.', '游戏用的六面小物件，掷出以得随机点数。', '单复同形亦用 dice：two dice（两个骰子）。', 'He rolled the dice and lost.', '他掷了骰子，输了。', ['roll the dice'], ['cube'], 'noun', 'countable', '体育'],
  ], '', ['cube'], 'die 的复数形但词形不可见（本词库 die 仅收死亡义、无骰子义），故留空；家族 cube 立方体（骰子形状）');

  W('die away', 'verb', '/ˌdaɪ əˈweɪ/', '', [], '（声音、光）渐弱消失', 'To fade gradually until it stops completely.', [
    ['（声音、光）渐弱消失', 'To fade gradually until it stops completely.', '逐渐减弱直至完全停止。', '不及物短语，多指声音、光线。', 'The music died away in the distance.', '音乐在远处渐渐消失了。', [], ['fade'], 'verb', '不及物', '通用'],
  ], '', ['fade'], 'die 停止 + away 消失，指渐弱至无；近义 fade 淡出（渐变消失）。短语分级留空').phrase = true;

  W('die out', 'verb', '/ˌdaɪ ˈaʊt/', '', [], '灭绝；消失', 'To stop existing completely.', [
    ['灭绝；消失', 'To stop existing completely.', '完全不再存在。', '不及物短语，多指物种、习俗。', 'The custom died out centuries ago.', '这个习俗几百年前就消失了。', [], ['disappear', 'perish', 'vanish'], 'verb', '不及物', '自然'],
  ], '', ['disappear'], 'die 灭 + out 光，指彻底不复存在；家族 disappear 消失、近义 perish 灭绝、vanish 突然消失。短语分级留空').phrase = true;

  W('dietetics', 'noun', '/ˌdaɪəˈtetɪks/', '', [], '饮食学；营养学', 'The scientific study of food and diet.', [
    ['饮食学；营养学', 'The scientific study of food and diet, and how it affects health.', '研究食物、饮食及其对健康影响的科学。', '形式为复数，作单数义。', 'She took a course in dietetics.', '她修了一门营养学课程。', ['clinical dietetics'], ['nutrition'], 'noun', 'uncountable', '健康'],
], '', ['diet'], 'diet 饮食 + -etics（学科后缀不在继承表内），故留空；近义 nutrition 营养学（最常用）。分级留空');

})(typeof window !== 'undefined' ? window : globalThis);
