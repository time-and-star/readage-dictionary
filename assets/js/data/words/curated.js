/* data/words/curated.js · 精编词库（原原型 37 个词条升级为结构化数据）
 * 每条义项补齐三件套：definitionEn（英英释义）/ definitionZhTranslation（英英释义的中文翻译）/ explanationZh（中文详解）。
 * 教学释义与例句为本项目编写；权威来源统一记录在 data/sources.js。
 * 紧凑写法由文件末尾的 buildCurated() 展开为完整数据模型。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});

  // 紧凑词条规格：ipa / pos / level / core / senses / forms / family / confused / contrast / pitfall
  const S = {
    adopt: {
      ipa: [{ region: 'UK', ipa: '/əˈdɒpt/' }, { region: 'US', ipa: '/əˈdɑːpt/' }],
      pos: ['verb'], level: 'B2',
      core: { zh: '采用；采纳；收养', en: 'To choose to take or use something, or to legally take a child into your family.', note: '把某种方法、立场或人作为自己的选择接纳进来。' },
      senses: [
        {
          titleZh: '采用；采纳', pos: 'verb', tr: 'transitive', domain: '商业 / 管理',
          defEn: 'To choose to use a method, plan or idea.',
          defZh: '选择使用某种方法、计划或想法。',
          expl: '强调「从若干选项中选定并采用」，宾语通常是 policy / strategy / approach / method 一类的抽象名词。',
          ex: ['The company adopted a new strategy.', '公司采用了一项新战略。'],
          grammar: ['adopt + method / policy / strategy'], coll: ['adopt a policy', 'adopt a new approach'], syn: ['accept'],
        },
        {
          titleZh: '收养', pos: 'verb', tr: 'transitive', domain: '生活 / 法律',
          defEn: 'To legally take a child into your family and raise them as your own.',
          defZh: '依法把一名孩子带入自己的家庭，并视如己出地抚养。',
          expl: '法律意义上的收养，宾语通常是 a child。与「适应」无关，不能与 adapt 混用。',
          ex: ['They decided to adopt a child.', '他们决定收养一个孩子。'],
          grammar: ['adopt + a child'], coll: ['adopt a child'], syn: [],
        },
      ],
      forms: 'adopts · adopted · adopting', family: ['adoption', 'adoptive'], confused: ['adapt', 'adept'],
      contrast: 'adopt a plan = 采纳计划；adapt a plan = 调整计划。',
      pitfall: '收养（adopt）与适应（adapt）不能混用。',
    },

    adept: {
      ipa: [{ region: '通用', ipa: '/əˈdept/' }], pos: ['adjective'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '熟练的；擅长的', en: 'Very skilled or proficient at doing something.', note: '强调技能娴熟，而非采用或适应。' },
      senses: [
        {
          titleZh: '熟练的；擅长的', pos: 'adjective', domain: '通用',
          defEn: 'Very skilled or proficient at doing something.',
          defZh: '做某事非常熟练或精通。',
          expl: '形容词，描述人的技能水平，不描述动作。常见搭配为 be adept at / in + 名词或动名词。',
          ex: ['She is adept at solving difficult problems.', '她擅长解决难题。'],
          grammar: ['be adept at + noun / -ing'], coll: ['adept at using tools', 'adept at solving problems'], syn: ['skilled'],
        },
      ],
      family: [], confused: ['adapt', 'adopt'],
      contrast: 'adept 是形容词；adapt 和 adopt 是动词。',
      pitfall: '用 be adept at doing，不是 be adept to do。',
    },

    affect: {
      ipa: [{ region: '通用', ipa: '/əˈfekt/' }], pos: ['verb'], level: 'B2',
      core: { zh: '影响；使感动', en: 'To have an influence on someone or something.', note: '通常作动词：对某人或某事产生作用。' },
      senses: [
        {
          titleZh: '影响', pos: 'verb', tr: 'transitive', domain: '通用',
          defEn: 'To have an influence on someone or something.',
          defZh: '对某人或某事产生影响。',
          expl: '及物动词，宾语是被影响的对象。最常见的用法，覆盖日常与学术语境。',
          ex: ['Lack of sleep can affect your concentration.', '睡眠不足可能影响注意力。'],
          grammar: ['affect + somebody / something'], coll: ['affect performance', 'affect the outcome'], syn: ['influence'],
        },
        {
          titleZh: '使感动；使产生情绪', pos: 'verb', tr: 'transitive', domain: '文学 / 情感',
          defEn: 'To produce an emotional response in someone.',
          defZh: '在某人身上引发情绪反应。',
          expl: '强调情感层面的触动，常见 deeply / strongly affected 等修饰。被动式 be affected by 很常见。',
          ex: ['The story deeply affected her.', '这个故事深深打动了她。'],
          grammar: ['be affected by'], coll: ['deeply affected'], syn: [],
        },
      ],
      forms: 'affects · affected · affecting', family: ['affected'], confused: ['effect'],
      contrast: '常见用法：affect 是动词「影响」；effect 是名词「结果、效果」。注意 effect 也可作动词，affect 也有专门领域的名词用法。',
      pitfall: '常见：The change affects us. / The change has an effect on us.',
    },

    effect: {
      ipa: [{ region: '通用', ipa: '/ɪˈfekt/' }], pos: ['noun', 'verb'], level: 'B1',
      core: { zh: '效果；影响；使发生', en: 'A change or result caused by an action or event.', note: '常作名词，表示某事产生的结果。' },
      senses: [
        {
          titleZh: '效果；结果；影响', pos: 'noun', domain: '通用',
          defEn: 'A change or result caused by an action or event.',
          defZh: '由某个行为或事件引起的变化或结果。',
          expl: '名词用法是最高频的义项。说「对……的影响」时用 have an effect on + 名词。',
          ex: ['The new policy had a positive effect on sales.', '新政策对销售产生了积极影响。'],
          grammar: ['have an effect on + noun'], coll: ['side effect', 'positive effect', 'take effect'], syn: ['result'],
        },
        {
          titleZh: '使发生；促成', pos: 'verb', tr: 'transitive', domain: '正式 / 商务',
          defEn: 'To bring about a particular result or change.',
          defZh: '促成某种特定结果或变化的发生。',
          expl: '正式语域中的动词用法，宾语常是 change / reform / settlement 等。日常写作中更常改用 bring about 或 achieve。',
          ex: ['The team hopes to effect lasting change.', '团队希望促成持久的改变。'],
          grammar: ['effect + change'], coll: ['effect change'], syn: [],
        },
      ],
      forms: 'effects · effected · effecting', family: ['effective'], confused: ['affect'],
      contrast: 'affect performance = 影响表现；an effect on performance = 对表现的影响。',
      pitfall: 'effect 作动词时意为「促成」，不能概括为 affect 的拼写变体。',
    },

    accept: {
      ipa: [{ region: '通用', ipa: '/əkˈsept/' }], pos: ['verb'], level: 'B1',
      core: { zh: '接受；认可', en: 'To agree to receive something or to say yes to an offer.', note: '愿意接纳某物、事实或提议。' },
      senses: [
        {
          titleZh: '接受；同意', pos: 'verb', tr: 'transitive', domain: '通用',
          defEn: 'To agree to receive something or to say yes to an offer.',
          defZh: '同意接受某物，或对某项提议表示同意。',
          expl: '强调主观上的同意与接纳，和「客观收到」（receive）不同：收到不等于接受。',
          ex: ['She accepted the invitation.', '她接受了邀请。'],
          grammar: ['accept + object'], coll: ['accept an offer', 'accept responsibility'], syn: ['receive'],
        },
      ],
      forms: 'accepts · accepted · accepting', family: ['acceptable'], confused: ['except'],
      contrast: 'accept 是动词，表示接受；except 通常表示除了。',
      pitfall: 'I accept your offer. 不是 I except your offer。',
    },

    except: {
      ipa: [{ region: '通用', ipa: '/ɪkˈsept/' }], pos: ['preposition', 'conjunction'], level: 'B1',
      core: { zh: '除……之外', en: 'Not including someone or something.', note: '从一个整体中排除例外。' },
      senses: [
        {
          titleZh: '除……之外', pos: 'preposition', domain: '通用',
          defEn: 'Not including someone or something.',
          defZh: '不包括某人或某物。',
          expl: '用于把例外从整体中排除。except for 常用于先作整体陈述、再补一个例外。',
          ex: ['Everyone came except Tom.', '除了汤姆，大家都来了。'],
          grammar: ['except + noun', 'except for + noun'], coll: ['except for', 'everyone except'], syn: [],
        },
      ],
      family: ['exception'], confused: ['accept'],
      contrast: 'accept ＝接受；except ＝除了。',
      pitfall: 'except for 常用于说明例外；不要写成 accept for。',
    },

    quiet: {
      ipa: [{ region: '通用', ipa: '/ˈkwaɪət/' }], pos: ['adjective', 'noun'], level: 'A2',
      core: { zh: '安静的；安静', en: 'Making little or no noise.', note: '声音很小，没有喧闹。' },
      senses: [
        {
          titleZh: '安静的', pos: 'adjective', domain: '通用',
          defEn: 'Making little or no noise.',
          defZh: '发出很少声音或几乎没有声音。',
          expl: '形容词，描述环境或人的状态。quiet 有两个音节 /ˈkwaɪət/，与 quite /kwaɪt/ 的读音不同。',
          ex: ['Please be quiet in the library.', '请在图书馆保持安静。'],
          grammar: ['be + quiet'], coll: ['quiet room', 'keep quiet'], syn: ['silent'],
        },
      ],
      forms: '', family: ['quietly'], confused: ['quite'],
      contrast: 'quiet /ˈkwaɪət/ 有两个音节；quite /kwaɪt/ 通常一个音节。',
      pitfall: 'a quiet room = 安静的房间；quite good = 相当好。',
    },

    quite: {
      ipa: [{ region: '通用', ipa: '/kwaɪt/' }], pos: ['adverb'], level: 'A2',
      core: { zh: '相当；颇；完全（依语境）', en: 'To a noticeable degree; fairly or rather, depending on context.', note: '程度副词；具体程度受形容词和英美语境影响。' },
      senses: [
        {
          titleZh: '相当；颇', pos: 'adverb', domain: '通用',
          defEn: 'To a noticeable degree; fairly or rather, depending on context.',
          defZh: '达到明显的程度；视语境可理解为「相当」或「颇」。',
          expl: '程度副词，修饰形容词或副词。英式英语中 quite good 可能只表示「还算好」，美式英语里常接近「相当好」，具体强度要结合语境判断。',
          ex: ['The test was quite difficult.', '这场考试相当难。'],
          grammar: ['quite + adjective / adverb'], coll: ['quite good', 'quite different'], syn: [],
        },
      ],
      family: [], confused: ['quiet'],
      contrast: 'quite 是程度副词；quiet 常表示安静。',
      pitfall: '两词仅字母顺序相近，发音和词性都不同。',
    },

    principal: {
      ipa: [{ region: '通用', ipa: '/ˈprɪnsəpəl/' }], pos: ['noun', 'adjective'], level: 'B2',
      core: { zh: '校长；负责人；主要的', en: 'The head of a school; most important.', note: '强调在机构或序列中居首位。' },
      senses: [
        {
          titleZh: '校长；（机构）负责人', pos: 'noun', domain: '教育 / 职场',
          defEn: 'The person in charge of a school or organization.',
          defZh: '负责管理一所学校或机构的人。',
          expl: '名词用法指人。学校语境中最常见，也可指某些机构的负责人或（金融领域的）本金。',
          ex: ['The principal spoke to the students.', '校长对学生讲话。'],
          grammar: ['the principal of + 学校'], coll: ['school principal'], syn: [],
        },
        {
          titleZh: '主要的', pos: 'adjective', domain: '正式 / 学术',
          defEn: 'Most important or main.',
          defZh: '最重要的；主要的。',
          expl: '形容词用法，放在名词前，强调在重要性或次序上居首位。',
          ex: ['Our principal aim is to improve quality.', '我们的主要目标是提高质量。'],
          grammar: ['principal + noun'], coll: ['principal reason', 'principal aim'], syn: ['main'],
        },
      ],
      family: [], confused: ['principle'],
      contrast: 'principal 与 principle 常同音；principal 有校长、主要的之意。',
      pitfall: 'principal aim = 主要目标；moral principle = 道德原则。',
    },

    principle: {
      ipa: [{ region: '通用', ipa: '/ˈprɪnsəpəl/' }], pos: ['noun'], level: 'B2',
      core: { zh: '原则；原理', en: 'A basic rule or belief that guides behaviour.', note: '指导行为或解释规律的基本规则。' },
      senses: [
        {
          titleZh: '原则；准则', pos: 'noun', domain: '通用 / 学术',
          defEn: 'A basic rule or belief that guides behaviour.',
          defZh: '指导行为的基本规则或信念。',
          expl: '名词，指道德准则或行为准则；在科学语境中也可指基本原理（如 the principles of physics）。',
          ex: ['Honesty is an important principle.', '诚实是一项重要原则。'],
          grammar: ['a principle of + noun'], coll: ['basic principle', 'moral principle'], syn: [],
        },
      ],
      family: [], confused: ['principal'],
      contrast: 'principle = 原则；principal = 校长 / 主要的。',
      pitfall: '按「原则」选 principle，而不是 principal。',
    },

    economic: {
      ipa: [{ region: '通用', ipa: '/ˌiːkəˈnɒmɪk/' }], pos: ['adjective'], level: 'B2',
      core: { zh: '经济的；经济学的', en: 'Relating to an economy or the study of economics.', note: '与经济体系、生产、贸易或经济学有关。' },
      senses: [
        {
          titleZh: '经济的；经济学的', pos: 'adjective', domain: '经济 / 学术',
          defEn: 'Relating to an economy or the study of economics.',
          defZh: '与经济体或经济学研究有关的。',
          expl: '描述「领域」，不涉及是否省钱。常见搭配 economic growth / policy / development。',
          ex: ['Economic growth slowed last year.', '去年经济增长放缓。'],
          grammar: ['economic + noun'], coll: ['economic growth', 'economic policy'], syn: [],
        },
      ],
      family: ['economy'], confused: ['economical'],
      contrast: 'economic growth = 经济增长；economical car = 省钱、省油的汽车。',
      pitfall: '经济问题通常是 economic problems；节约用钱通常说 economical。',
    },

    economical: {
      ipa: [{ region: '通用', ipa: '/ˌiːkəˈnɒmɪkəl/' }], pos: ['adjective'], level: 'B2',
      core: { zh: '节约的；经济实惠的', en: 'Using money, time or resources carefully without waste.', note: '强调省钱、省资源或使用效率。' },
      senses: [
        {
          titleZh: '节约的；经济实惠的', pos: 'adjective', domain: '生活 / 商业',
          defEn: 'Using money, time or resources carefully without waste.',
          defZh: '谨慎地使用金钱、时间或资源，不造成浪费。',
          expl: '描述「是否省」，主语可以是车、方案、用法等。与 economic（经济领域的）不是一回事。',
          ex: ['This car is economical to run.', '这辆车使用起来很省钱。'],
          grammar: ['economical to + verb'], coll: ['economical car', 'economical use'], syn: [],
        },
      ],
      family: ['economy'], confused: ['economic'],
      contrast: 'economic 描述经济领域；economical 描述节约。',
      pitfall: '经济增长不是 economical growth。',
    },

    approach: {
      ipa: [{ region: 'UK', ipa: '/əˈprəʊtʃ/' }, { region: 'US', ipa: '/əˈproʊtʃ/' }], pos: ['noun', 'verb'], level: 'B2',
      core: { zh: '方法；靠近；处理', en: 'A way of dealing with something, or to move towards something.', note: '接近一个目标：空间上靠近，或采用某种方法应对问题。' },
      senses: [
        {
          titleZh: '方法；方式', pos: 'noun', domain: '通用 / 学术',
          defEn: 'A way of dealing with or thinking about something.',
          defZh: '处理或思考某事的方式。',
          expl: '名词用法的介词搭配是 approach to + 名词 / 动名词，这里的 to 是介词，不能接动词原形。',
          ex: ['We need a new approach to this problem.', '我们需要一种解决这个问题的新方法。'],
          grammar: ['an approach to + noun / -ing'], coll: ['a new approach', 'an approach to learning'], syn: ['method'],
        },
        {
          titleZh: '接近；靠近', pos: 'verb', tr: 'transitive', domain: '通用',
          defEn: 'To move towards someone or something.',
          defZh: '向某人或某物移动靠近。',
          expl: '空间或时间上的接近，可直接带宾语，不需要介词。',
          ex: ['The train is approaching the station.', '火车正在接近车站。'],
          grammar: ['approach + object'], coll: ['approach the station'], syn: [],
        },
        {
          titleZh: '着手处理', pos: 'verb', tr: 'transitive', domain: '职场 / 学术',
          defEn: 'To begin dealing with a task or problem.',
          defZh: '开始着手处理某项任务或问题。',
          expl: '抽象意义上的「靠近」——开始应对。同样直接带宾语。',
          ex: ['How should we approach this question?', '我们应该如何着手处理这个问题？'],
          grammar: ['approach + a problem'], coll: ['approach a task'], syn: [],
        },
      ],
      forms: 'approaches · approached · approaching', family: ['approachable', 'approachability'], confused: [],
      contrast: '名词 an approach to a problem；动词 approach a problem（无需 to）。',
      pitfall: '说 approach the problem，而非 approach to the problem；名词要说 an approach to the problem。',
    },

    issue: {
      ipa: [{ region: 'UK', ipa: '/ˈɪʃuː/' }, { region: 'US', ipa: '/ˈɪʃuː/' }], pos: ['noun', 'verb'], level: 'B1',
      core: { zh: '问题；议题；期号；发布', en: 'An important subject people discuss; one edition of a publication; to officially release something.', note: '既可以表示需要讨论的议题，也可以表示刊物的一期或正式发出某物。' },
      senses: [
        {
          titleZh: '问题；议题', pos: 'noun', domain: '通用 / 新闻',
          defEn: 'An important subject or problem that people discuss or need to deal with.',
          defZh: '人们讨论或需要处理的重要话题或问题。',
          expl: '比 problem 更中性，常用于公共、社会、技术讨论。搭配 address / raise / resolve an issue。',
          ex: ['We need to address this issue immediately.', '我们需要立即处理这个问题。'],
          grammar: ['address / raise an issue'], coll: ['social issue', 'key issue'], syn: ['matter'],
        },
        {
          titleZh: '（杂志等的）一期', pos: 'noun', domain: '出版 / 媒体',
          defEn: 'One particular edition of a newspaper or magazine.',
          defZh: '报纸或杂志的某一期。',
          expl: '出版物语境中的专门义项，判断线索是 the latest / current / next issue 等修饰语。',
          ex: ['The latest issue arrived today.', '最新一期今天到了。'],
          grammar: ['an issue of + publication'], coll: ['the latest issue'], syn: [],
        },
        {
          titleZh: '正式发布；签发', pos: 'verb', tr: 'transitive', domain: '正式 / 官方',
          defEn: 'To officially provide or release something.',
          defZh: '正式提供或发布某物。',
          expl: '官方机构发出警告、声明、文件等，宾语常为 warning / statement / permit。',
          ex: ['The agency issued a warning.', '该机构发布了一则警告。'],
          grammar: ['issue + a warning / statement'], coll: ['issue a warning', 'issue a statement'], syn: [],
        },
      ],
      forms: 'issues · issued · issuing', family: [], confused: [],
      contrast: 'issue 的不同义项需要分别记忆；problem 与 issue 也并非在所有语境中等价。',
      pitfall: 'issue a warning 是「发布警告」，不是「解决警告」。',
    },

    charge: {
      ipa: [{ region: 'UK', ipa: '/tʃɑːdʒ/' }, { region: 'US', ipa: '/tʃɑːrdʒ/' }], pos: ['noun', 'verb'], level: 'B1',
      core: { zh: '收费；充电；指控；负责', en: 'To ask for payment; to supply electricity; to accuse; responsibility for something.', note: '多个义项，不要把一个中文意思套进所有句子。' },
      senses: [
        {
          titleZh: '收费；要价', pos: 'verb', tr: 'transitive', domain: '商业 / 生活',
          defEn: 'To ask someone to pay a particular amount of money.',
          defZh: '要求某人支付特定数额的钱。',
          expl: '搭配 charge A for B（就 B 收取 A 金额 / 向 B 收取 A）。主语是收款方。',
          ex: ['They charge ten dollars for delivery.', '他们收取十美元配送费。'],
          grammar: ['charge A for B'], coll: ['charge a fee'], syn: [],
        },
        {
          titleZh: '充电', pos: 'verb', tr: 'transitive', domain: '科技 / 生活',
          defEn: 'To supply electrical energy to a device or battery.',
          defZh: '给设备或电池补充电能。',
          expl: '宾语是设备或电池。反义动作是 discharge（放电），日常更常说 the battery is dead。',
          ex: ['I need to charge my phone.', '我需要给手机充电。'],
          grammar: ['charge + device'], coll: ['charge a battery'], syn: [],
        },
        {
          titleZh: '控告；指控', pos: 'verb', tr: 'transitive', domain: '法律 / 新闻',
          defEn: 'To formally accuse someone of a crime.',
          defZh: '正式指控某人犯有某项罪行。',
          expl: '法律语境，几乎总以被动形式出现：be charged with + 罪名。',
          ex: ['He was charged with theft.', '他被指控盗窃。'],
          grammar: ['charge someone with + crime'], coll: ['charged with theft'], syn: [],
        },
        {
          titleZh: '负责', pos: 'noun', domain: '职场',
          defEn: 'Responsibility for managing or controlling something.',
          defZh: '管理或掌控某事的责任。',
          expl: '主要出现在固定短语 in charge of / take charge of 中，很少单独使用这个义项。',
          ex: ['She is in charge of the project.', '她负责这个项目。'],
          grammar: ['be in charge of'], coll: ['take charge', 'in charge of'], syn: [],
        },
      ],
      forms: 'charges · charged · charging', family: ['overcharge', 'recharge', 'undercharge'], confused: [],
      contrast: '收费、充电、指控、负责需要靠搭配识别。',
      pitfall: 'charge somebody with theft（指控）；charge somebody for delivery（收费）。',
    },

    adjust: {
      ipa: [{ region: '通用', ipa: '/əˈdʒʌst/' }], pos: ['verb'], level: 'B2',
      core: { zh: '调整；适应', en: 'To change something slightly to make it more suitable.', note: '改变细节使之更合适。' },
      senses: [
        {
          titleZh: '调整；调节', pos: 'verb', tr: 'transitive', domain: '通用',
          defEn: 'To change something slightly to make it more suitable or accurate.',
          defZh: '对某物作轻微改动，使之更合适或更准确。',
          expl: '带宾语，改动幅度通常较小，如亮度、座位、时间表。与 adapt 相比更偏「微调」。',
          ex: ['Please adjust the screen brightness.', '请调整屏幕亮度。'],
          grammar: ['adjust + object'], coll: ['adjust the settings', 'adjust a schedule'], syn: ['modify'],
        },
        {
          titleZh: '适应；习惯', pos: 'verb', tr: 'intransitive', domain: '生活',
          defEn: 'To become familiar with a new situation.',
          defZh: '逐渐熟悉并习惯新的情况。',
          expl: '不及物用法，搭配 adjust to + 名词。与 adapt to 接近，但 adjust 更强调细节上的磨合。',
          ex: ['It was hard to adjust to the new routine.', '适应新作息并不容易。'],
          grammar: ['adjust to + noun'], coll: ['adjust to life'], syn: ['adapt'],
        },
      ],
      forms: 'adjusts · adjusted · adjusting', family: ['adjustment'], confused: ['adapt'],
      contrast: 'adjust 常强调细节上的调整；adapt 常强调为新条件改变。',
      pitfall: 'adjust to a new situation 表示适应；adjust a setting 表示调整。',
    },

    modify: {
      ipa: [{ region: '通用', ipa: '/ˈmɒdɪfaɪ/' }], pos: ['verb'], level: 'B2',
      core: { zh: '修改；更改', en: 'To change something, usually in part, to improve or suit it.', note: '对事物的部分内容作改变。' },
      senses: [
        {
          titleZh: '修改；更改', pos: 'verb', tr: 'transitive', domain: '通用 / 技术',
          defEn: 'To change something, usually in part, to improve it or make it suitable.',
          defZh: '对某物的部分内容加以改变，以改进它或使之适用。',
          expl: '强调「改动」这一动作本身，不必然带有「适应新环境」的含义；语法中也可指「修饰」。',
          ex: ['We modified the design after testing.', '测试后我们修改了设计。'],
          grammar: ['modify + object'], coll: ['modify a design', 'modify a plan'], syn: ['adjust'],
        },
      ],
      forms: 'modifies · modified · modifying', family: ['modification'], confused: ['adapt'],
      contrast: 'modify 强调修改；adapt 更强调变化是为了适应环境或用途。',
      pitfall: 'modify 只表示改动，adapt 表示为了适配而改。',
    },

    efficient: {
      ipa: [{ region: '通用', ipa: '/ɪˈfɪʃənt/' }], pos: ['adjective'], level: 'B2',
      core: { zh: '高效的；效率高的', en: 'Working well without wasting time, money or energy.', note: '用较少时间、精力、资源完成任务。' },
      senses: [
        {
          titleZh: '高效的', pos: 'adjective', domain: '通用 / 职场',
          defEn: 'Working well without wasting time, money or energy.',
          defZh: '运作良好，不浪费时间、金钱或精力。',
          expl: '关注投入产出比：用更少资源完成同样的事。与 effective（是否达成目标）不同。',
          ex: ['We need a more efficient process.', '我们需要更高效的流程。'],
          grammar: ['efficient + noun'], coll: ['efficient system'], syn: [],
        },
      ],
      family: ['efficiency'], confused: ['effective'],
      contrast: 'efficient 关注投入产出、资源利用；effective 关注是否实现预期结果。',
      pitfall: 'A solution can be effective but not efficient. 一个方案可能有效，但效率不高。',
    },

    effective: {
      ipa: [{ region: '通用', ipa: '/ɪˈfektɪv/' }], pos: ['adjective'], level: 'B1',
      core: { zh: '有效的；起作用的', en: 'Producing the result that is wanted or intended.', note: '产生预期效果。' },
      senses: [
        {
          titleZh: '有效的', pos: 'adjective', domain: '通用',
          defEn: 'Producing the result that is wanted or intended.',
          defZh: '产生所期望或预期的结果。',
          expl: '只回答「有没有用」，不回答「省不省力」；后者是 efficient。',
          ex: ['This treatment is effective for many patients.', '这种治疗对许多患者有效。'],
          grammar: ['effective in / at / for（视搭配而定）'], coll: ['effective solution', 'effective communication'], syn: [],
        },
      ],
      family: ['effect', 'effectively', 'effectiveness', 'ineffective'], confused: ['efficient'],
      contrast: 'effective = 达成目标；efficient = 尽量减少浪费。',
      pitfall: '不要用 effective 表示「效率高」。',
    },

    compliment: {
      ipa: [{ region: '通用', ipa: '/ˈkɒmplɪmənt/' }], pos: ['noun', 'verb'], level: 'B2',
      core: { zh: '赞美；称赞', en: 'An expression of praise, or to praise someone.', note: '表达对人的好感或赞赏。' },
      senses: [
        {
          titleZh: '赞美；称赞', pos: 'noun', domain: '社交 / 生活',
          defEn: 'An expression of praise or admiration.',
          defZh: '表达赞扬或欣赏的话语。',
          expl: '拼写中含字母 i（可联想 I like it）。动词用法搭配 compliment someone on something。',
          ex: ['She gave him a compliment on his writing.', '她称赞了他的写作。'],
          grammar: ['pay somebody a compliment', 'compliment someone on something'], coll: ['a sincere compliment'], syn: ['praise'],
        },
      ],
      family: ['complimentary'], confused: ['complement'],
      contrast: 'compliment 带 i：称赞；complement 带 e：补充、相辅相成。',
      pitfall: '两词读音相同，拼写差别在中间是 i 还是 e。',
    },

    complement: {
      ipa: [{ region: '通用', ipa: '/ˈkɒmplɪmənt/' }], pos: ['noun', 'verb'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '补充；使相辅相成', en: 'To add to something in a way that improves or completes it.', note: '彼此搭配，形成更完整的整体。' },
      senses: [
        {
          titleZh: '补充；相辅相成', pos: 'verb', tr: 'transitive', domain: '通用 / 正式',
          defEn: 'To add to something in a way that improves or completes it.',
          defZh: '以增加的方式使某物更完善或更完整。',
          expl: '拼写中含字母 e（可联想 complete）。强调两者合在一起才完整，不是「夸奖」。',
          ex: ['The two skills complement each other.', '这两种技能相辅相成。'],
          grammar: ['complement + object'], coll: ['complement each other'], syn: ['complete'],
        },
      ],
      family: ['complementary'], confused: ['compliment'],
      contrast: '两词同音而异形：compliment 是称赞；complement 是补充。',
      pitfall: 'complement 与 compliment 读音相同，靠语境和拼写区分。',
    },

    ensure: {
      ipa: [{ region: '通用', ipa: '/ɪnˈʃʊə(r)/' }], pos: ['verb'], level: 'B2',
      core: { zh: '确保；保证', en: 'To make certain that something will happen.', note: '采取措施使某件事情发生或成为事实。' },
      senses: [
        {
          titleZh: '确保', pos: 'verb', tr: 'transitive', domain: '通用 / 正式',
          defEn: 'To make certain that something will happen or be the case.',
          defZh: '使某事必然发生或必然成立。',
          expl: '后可接名词或 that 从句。重点是「采取行动使结果确定」，不是购买保险。',
          ex: ['Please ensure that the door is locked.', '请确保门已经锁好。'],
          grammar: ['ensure (that) + clause', 'ensure + noun'], coll: ['ensure safety', 'ensure that'], syn: [],
        },
      ],
      forms: 'ensures · ensured · ensuring', family: [], confused: ['insure'],
      contrast: 'ensure = 确保；insure = 为……投保。',
      pitfall: '现代学习阶段建议优先掌握 ensure = 确保、insure = 投保。',
    },

    insure: {
      ipa: [{ region: '通用', ipa: '/ɪnˈʃʊə(r)/' }], pos: ['verb'], level: 'B2',
      core: { zh: '投保；给……买保险', en: 'To arrange insurance for someone or something.', note: '通过保险减少潜在财务损失。' },
      senses: [
        {
          titleZh: '为……投保', pos: 'verb', tr: 'transitive', domain: '金融 / 法律',
          defEn: 'To arrange insurance for someone or something.',
          defZh: '为某人或某物安排保险。',
          expl: '搭配 insure A against B（为 A 投保以防 B）。美式英语中 insure 也可承担 ensure 的部分用法，但学习阶段建议区分。',
          ex: ['They insured the house against fire.', '他们为房子投保了火灾险。'],
          grammar: ['insure A against B'], coll: ['insure a car', 'insure against loss'], syn: [],
        },
      ],
      forms: 'insures · insured · insuring', family: ['insurance'], confused: ['ensure'],
      contrast: 'ensure 和 insure 在某些语域有重叠，但现代学习时优先掌握 ensure = 确保、insure = 投保。',
      pitfall: '不要为「确保」义写 insure。',
    },

    emigrate: {
      ipa: [{ region: '通用', ipa: '/ˈemɪɡreɪt/' }], pos: ['verb'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '移居国外（离开原国）', en: 'To leave your country to live in another country.', note: '强调从原来国家离开。' },
      senses: [
        {
          titleZh: '移居国外', pos: 'verb', tr: 'intransitive', domain: '生活 / 社会',
          defEn: 'To leave your own country in order to live in another one.',
          defZh: '离开自己的国家，去另一个国家居住。',
          expl: '方向是「出去」，搭配 emigrate from + 原籍国。前缀 e-/ex- 表「向外」。',
          ex: ['He emigrated from Italy in 1990.', '他在 1990 年从意大利移居国外。'],
          grammar: ['emigrate from + country'], coll: ['emigrate from'], syn: [],
        },
      ],
      forms: 'emigrates · emigrated · emigrating', family: ['emigration'], confused: ['immigrate'],
      contrast: 'emigrate from A（从 A 国迁出）；immigrate to B（迁入 B 国）。',
      pitfall: '注意搭配介词：emigrate from，不是 emigrate to。',
    },

    immigrate: {
      ipa: [{ region: '通用', ipa: '/ˈɪmɪɡreɪt/' }], pos: ['verb'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '移居（迁入某国）', en: 'To come to live permanently in a country that is not your own.', note: '强调进入新的国家居住。' },
      senses: [
        {
          titleZh: '迁入某国定居', pos: 'verb', tr: 'intransitive', domain: '生活 / 社会',
          defEn: 'To come to a different country in order to live there permanently.',
          defZh: '来到另一个国家并长期居住。',
          expl: '方向是「进来」，搭配 immigrate to + 目的国。前缀 im-/in- 表「向内」。',
          ex: ['They immigrated to Canada.', '他们移居加拿大。'],
          grammar: ['immigrate to + country'], coll: ['immigrate to'], syn: [],
        },
      ],
      forms: 'immigrates · immigrated · immigrating', family: ['immigration'], confused: ['emigrate'],
      contrast: 'immigrate to 是迁入；emigrate from 是迁出。',
      pitfall: '描述同一件事时视角不同：迁出方用 emigrate，迁入方用 immigrate。',
    },

    raise: {
      ipa: [{ region: '通用', ipa: '/reɪz/' }], pos: ['verb'], level: 'B1',
      core: { zh: '举起；提高；筹集；养育', en: 'To move something to a higher position or level.', note: '通常是及物动词，某人使某物升高或增加。' },
      senses: [
        {
          titleZh: '举起；提高', pos: 'verb', tr: 'transitive', domain: '通用',
          defEn: 'To move something to a higher position, level or amount.',
          defZh: '把某物移到更高的位置、水平或数量。',
          expl: '必须带宾语：raise your hand / raise prices。主语是「使升高」的一方。与 rise（自身上升）相对。',
          ex: ['Please raise your hand.', '请举手。'],
          grammar: ['raise + object'], coll: ['raise prices', 'raise a question'], syn: ['lift'],
        },
      ],
      forms: 'raises · raised · raising', family: [], confused: ['rise'],
      contrast: 'raise 通常直接带宾语：raise prices；rise 通常不带宾语：prices rise。',
      pitfall: 'raise–raised–raised 是规则变化；不要与 rise–rose–risen 混用。',
    },

    rise: {
      ipa: [{ region: '通用', ipa: '/raɪz/' }], pos: ['verb', 'noun'], level: 'B1',
      core: { zh: '上升；增长', en: 'To move upwards or increase in amount.', note: '通常表示主语自身上升，不直接带宾语。' },
      senses: [
        {
          titleZh: '上升；增长', pos: 'verb', tr: 'intransitive', domain: '通用',
          defEn: 'To move upwards or increase in amount or level.',
          defZh: '向上移动，或在数量、水平上增加。',
          expl: '不及物，不带宾语：Prices rose. 不规则变化 rise–rose–risen，这是与 raise 最易混的地方。',
          ex: ['Prices rose sharply last month.', '上个月价格大幅上涨。'],
          grammar: ['rise（不接直接宾语）'], coll: ['prices rise', 'rise sharply'], syn: ['increase'],
        },
      ],
      forms: 'rises · rose · risen · rising', family: [], confused: ['raise'],
      contrast: 'rise–rose–risen 不规则变化；raise–raised–raised 规则变化。',
      pitfall: '说 Prices rise，不说 Prices raise。',
    },

    stationary: {
      ipa: [{ region: '通用', ipa: '/ˈsteɪʃənəri/' }], pos: ['adjective'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '静止的；不动的', en: 'Not moving or changing position.', note: '留在原位置，不运动。' },
      senses: [
        {
          titleZh: '静止的', pos: 'adjective', domain: '通用 / 物理',
          defEn: 'Not moving or not changing position.',
          defZh: '不移动或不改变位置。',
          expl: '拼写含字母 a（可联想 at a standstill）。常见搭配 remain / stay stationary。',
          ex: ['The car remained stationary.', '汽车保持静止。'],
          grammar: ['remain / stay stationary'], coll: ['stationary object'], syn: ['still'],
        },
      ],
      family: [], confused: ['stationery'],
      contrast: 'stationary（a）= 静止的；stationery（e）= 文具。',
      pitfall: '两词常见读音相同，靠 a / e 区分。',
    },

    stationery: {
      ipa: [{ region: '通用', ipa: '/ˈsteɪʃənəri/' }], pos: ['noun'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '文具', en: 'Materials used for writing, such as paper and envelopes.', note: '纸、笔等办公或书写用品。' },
      senses: [
        {
          titleZh: '文具', pos: 'noun', tr: 'uncountable', domain: '办公 / 生活',
          defEn: 'Materials used for writing, such as paper, pens and envelopes.',
          defZh: '用于书写的东西，例如纸、笔和信封。',
          expl: '不可数名词，拼写含字母 e（可联想 pen / envelope）。',
          ex: ['I bought some stationery for school.', '我买了一些上学用的文具。'],
          grammar: ['some stationery'], coll: ['office stationery'], syn: [],
        },
      ],
      family: [], confused: ['stationary'],
      contrast: '两个词在常见英式和美式读音中同音，意义不同。',
      pitfall: 'stationery 是名词文具；stationary 是形容词静止的。',
    },

    conscious: {
      ipa: [{ region: '通用', ipa: '/ˈkɒnʃəs/' }], pos: ['adjective'], level: 'B2',
      core: { zh: '有意识的；意识到的', en: 'Aware of yourself or something around you.', note: '清醒或察觉到某件事情。' },
      senses: [
        {
          titleZh: '意识到的', pos: 'adjective', domain: '通用 / 心理',
          defEn: 'Aware of yourself or of something around you.',
          defZh: '觉察到自己或周围的事物。',
          expl: '形容词，搭配 be conscious of + 名词。也可指医疗语境中的「清醒的」（the patient is conscious）。',
          ex: ['She was conscious of the risks.', '她意识到了这些风险。'],
          grammar: ['be conscious of'], coll: ['conscious of'], syn: ['aware'],
        },
      ],
      family: ['consciousness'], confused: ['conscience'],
      contrast: 'conscious 是形容词「有意识的」；conscience 是名词「良心」。',
      pitfall: '两词读音相近，拼写差在 -ous 与 -ence。',
    },

    conscience: {
      ipa: [{ region: '通用', ipa: '/ˈkɒnʃəns/' }], pos: ['noun'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '良心；道德感', en: 'The part of your mind that tells you whether your actions are right or wrong.', note: '内在的对错判断。' },
      senses: [
        {
          titleZh: '良心；道德感', pos: 'noun', domain: '通用 / 伦理',
          defEn: 'The part of your mind that tells you whether your actions are right or wrong.',
          defZh: '心里判断自己行为对错的那部分意识。',
          expl: '名词，常见搭配 a clear / guilty conscience。注意与形容词 conscious 区分。',
          ex: ['His conscience would not allow him to lie.', '他的良心不允许他撒谎。'],
          grammar: ['a clear conscience'], coll: ['clear conscience', 'guilty conscience'], syn: [],
        },
      ],
      family: [], confused: ['conscious'],
      contrast: 'conscience /ˈkɒnʃəns/ 是名词；conscious /ˈkɒnʃəs/ 是形容词。',
      pitfall: '「良心」用 conscience，不是 conscious。',
    },

    lose: {
      ipa: [{ region: '通用', ipa: '/luːz/' }], pos: ['verb'], level: 'A2',
      core: { zh: '丢失；输掉', en: 'To no longer have something, or to fail to win.', note: '失去东西或没有赢。' },
      senses: [
        {
          titleZh: '失去；输掉', pos: 'verb', tr: 'transitive', domain: '通用',
          defEn: 'To no longer have something, or to fail to win a game or competition.',
          defZh: '不再拥有某物，或在比赛、竞争中失败。',
          expl: '动词，末尾 s 发 /z/。不规则变化 lose–lost–lost。与形容词 loose /luːs/ 拼写只差一个 o。',
          ex: ['Do not lose your keys.', '别丢了你的钥匙。'],
          grammar: ['lose + object'], coll: ['lose weight', 'lose a game'], syn: [],
        },
      ],
      forms: 'loses · lost · lost · losing', family: ['loss'], confused: ['loose'],
      contrast: 'lose /luːz/ 动词；loose /luːs/ 形容词。',
      pitfall: 'lose 与 loose 不是同一个词：一个是动词，一个是形容词。',
    },

    loose: {
      ipa: [{ region: '通用', ipa: '/luːs/' }], pos: ['adjective'], level: 'B1',
      core: { zh: '松的；宽松的', en: 'Not firmly fixed or not tight.', note: '不紧、不牢固。' },
      senses: [
        {
          titleZh: '松的；宽松的', pos: 'adjective', domain: '通用',
          defEn: 'Not firmly fixed in place, or not tight.',
          defZh: '没有被牢固固定，或不够紧。',
          expl: '形容词，末尾 s 发 /s/。拼写有两个 o，可与动词 lose 对照记忆。',
          ex: ['These shoes are too loose.', '这双鞋太松了。'],
          grammar: ['be loose'], coll: ['loose clothing'], syn: [],
        },
      ],
      family: ['loosen', 'loosely', 'looseness'], confused: ['lose'],
      contrast: 'loose 有两个 o，发 /s/；lose 一个 o，发 /z/。',
      pitfall: '形容衣服宽松用 loose，不用 lose。',
    },

    than: {
      ipa: [{ region: '通用', ipa: '/ðæn/' }], pos: ['conjunction', 'preposition'], level: 'A1',
      core: { zh: '比；而不是', en: 'Used to introduce the second part of a comparison.', note: '常用于比较结构。' },
      senses: [
        {
          titleZh: '比', pos: 'conjunction', domain: '通用',
          defEn: 'Used to introduce the second element of a comparison.',
          defZh: '用于引出比较结构中的第二个对象。',
          expl: '出现在比较级之后（taller than / more than / rather than）。与时间副词 then 读音相近但不同。',
          ex: ['She is taller than me.', '她比我高。'],
          grammar: ['comparative + than'], coll: ['more than', 'rather than'], syn: [],
        },
      ],
      family: [], confused: ['then'],
      contrast: 'than = 比较；then = 然后或那时。',
      pitfall: '比较级后接 than，不接 then。',
    },

    then: {
      ipa: [{ region: '通用', ipa: '/ðen/' }], pos: ['adverb'], level: 'A1',
      core: { zh: '然后；那时', en: 'After that; next in time or order.', note: '指时间顺序或特定时刻。' },
      senses: [
        {
          titleZh: '然后；接着', pos: 'adverb', domain: '通用',
          defEn: 'After that; next in time or order; at that time.',
          defZh: '在那之后；按时间或顺序的下一个；在那个时候。',
          expl: '时间副词，可表示顺序（先做完，然后休息）或过去某时刻（since then / until then）。',
          ex: ['Finish your work, then take a break.', '先完成工作，然后休息。'],
          grammar: ['clause, then clause'], coll: ['since then', 'until then'], syn: [],
        },
      ],
      family: [], confused: ['than'],
      contrast: 'then 表示时间；than 用于比较。',
      pitfall: '比较结构用 than，时间顺序用 then。',
    },

    acclimatize: {
      ipa: [{ region: '通用', ipa: '/əˈklaɪmətaɪz/' }], pos: ['verb'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '（逐渐）适应新气候或环境', en: 'To become used to a new climate or environment.', note: '尤强调逐步习惯陌生气候、海拔或环境。' },
      senses: [
        {
          titleZh: '适应气候或环境', pos: 'verb', tr: 'intransitive', domain: '自然 / 旅行',
          defEn: 'To become used to a new climate, altitude or environment.',
          defZh: '逐渐习惯新的气候、海拔或环境。',
          expl: '比 adapt 更具体，聚焦自然环境因素，常与高原、炎热、时差等搭配。英式拼写也可作 acclimatise。',
          ex: ['It takes time to acclimatize to the heat.', '适应炎热天气需要时间。'],
          grammar: ['acclimatize to + noun'], coll: ['acclimatize to the heat'], syn: ['adapt'],
        },
      ],
      forms: 'acclimatizes · acclimatized · acclimatizing', family: ['acclimatization'], confused: ['adapt'],
      contrast: 'acclimatize 更具体，常聚焦气候和环境适应。',
      pitfall: '描述社会环境适应时通常不用 acclimatize。',
    },

    accommodate: {
      ipa: [{ region: '通用', ipa: '/əˈkɒmədeɪt/' }], pos: ['verb'], level: null, levelLabel: '进阶（本词库自定义标签，非 CEFR）',
      core: { zh: '容纳；为……提供便利；适应需求', en: 'To provide space for someone, or to make arrangements for someone’s needs.', note: '提供空间或改变安排以满足需求。' },
      senses: [
        {
          titleZh: '满足需要；作出安排', pos: 'verb', tr: 'transitive', domain: '职场 / 服务',
          defEn: 'To make arrangements that fit someone’s needs or requests.',
          defZh: '作出符合某人需求或要求的安排。',
          expl: '重点在「安排去配合别人」，主语常是日程、制度、服务方，而不是改变的个体。',
          ex: ['The schedule can accommodate different needs.', '这个日程可以兼顾不同需求。'],
          grammar: ['accommodate + object'], coll: ['accommodate requests', 'accommodate needs'], syn: [],
        },
        {
          titleZh: '容纳；为……提供住宿', pos: 'verb', tr: 'transitive', domain: '旅行 / 场地',
          defEn: 'To provide enough space or a place to stay for a number of people.',
          defZh: '为一定数量的人提供足够的空间或住宿。',
          expl: '宾语是人数或人群，常出现 can accommodate + 数字。',
          ex: ['The hall can accommodate 200 people.', '这座大厅可容纳 200 人。'],
          grammar: ['accommodate + 人数 / 人群'], coll: ['accommodate guests'], syn: [],
        },
      ],
      forms: 'accommodates · accommodated · accommodating', family: ['accommodation'], confused: [],
      contrast: 'accommodate needs = 满足需求，不等同于个人 adapt to a situation。',
      pitfall: 'accommodate 的宾语是「被容纳 / 被满足的一方」。',
    },
  };

  /** 把紧凑规格展开为完整数据模型 */
  function buildCurated() {
    const out = {};
    Object.keys(S).forEach((lemma) => {
      const spec = S[lemma];
      const senses = spec.senses.map((s, i) => ({
        index: i + 1,
        titleZh: s.titleZh,
        partOfSpeech: s.pos,
        transitivity: s.tr || null,
        domain: s.domain || '通用',
        register: '通用',
        isCore: i === 0,
        definitionEn: s.defEn,
        definitionZhTranslation: s.defZh,
        explanationZh: s.expl,
        grammar: s.grammar || [],
        collocations: (s.coll || []).map((c) => ({ phrase: c, meaningZh: '', exampleEn: '', exampleZh: '' })),
        synonyms: (s.syn || []).map((w) => ({ word: w })),
        examples: s.ex ? [{
          english: s.ex[0],
          chinese: s.ex[1],
          label: '例句 · ' + (s.domain || '通用'),
          sourceType: 'authored',
        }] : [],
      }));

      out[lemma] = {
        id: lemma,
        lemma: lemma,
        language: 'en',
        tier: 'curated',
        pos: spec.pos,
        level: spec.level || null,
        levelLabel: spec.levelLabel || '',
        pronunciations: spec.ipa || [],
        syllables: '',
        stress: '',
        coreMeaning: spec.core,
        senses: senses,
        forms: formsFrom(spec.forms, lemma),
        formNote: '',
        family: (spec.family || []).map((w) => ({ word: w })),
        confused: spec.confused || [],
        contrast: spec.contrast || '',
        pitfall: spec.pitfall || '',
        usage: {
          cefr: spec.level || '暂无可靠数据',
          frequency: '暂无可靠数据（本项目不做未经语料库统计的词频排名）',
          register: '常规用语',
          domains: [],
          britishAmerican: '暂无可靠数据',
          tone: '暂无可靠数据',
          examTags: '暂无可靠数据',
          commonConfusion: spec.confused || [],
        },
        sources: [],
      };
    });
    return out;
  }

  /** 'adapts · adapted · adapting' → 结构化词形；自动标记不规则变化 */
  function formsFrom(str, base) {
    if (!str) return [];
    const p = str.split('·').map((x) => x.trim()).filter(Boolean);
    const out = [{ formType: 'base', form: base, label: '原形' }];
    if (p.length >= 3) {
      out.push({ formType: 'third', form: p[0], label: '第三人称单数' });
      out.push({ formType: 'past', form: p[1], label: '过去式', irregular: p[1] !== base + 'ed' });
      out.push({ formType: 'pastParticiple', form: p.length >= 4 ? p[2] : p[1], label: '过去分词', irregular: (p.length >= 4 ? p[2] : p[1]) !== base + 'ed' });
      out.push({ formType: 'presentParticiple', form: p[p.length - 1], label: '现在分词' });
    }
    return out;
  }

  RA.curatedSpec = S;
  RA.buildCurated = buildCurated;
})(typeof window !== 'undefined' ? window : globalThis);
