/* data/words/adapt.js · 完整词条模板（13 模块）
 * 内容来源：原 ReadAge 原型中的 adapt 完整学习词条，逐段迁移，未删减；
 * 新增：每个义项的 definitionZhTranslation（英英释义的中文翻译），满足「英英 + 中文一一对应」硬约束。
 * 教学释义与例句为本项目编写，非外部词典逐字复制；权威来源见 sources 字段。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});
  RA.rawWords = RA.rawWords || {};

  RA.rawWords.adapt = {
    id: 'adapt',
    lemma: 'adapt',
    language: 'en',
    tier: 'full',
    pos: ['verb'],
    level: 'B2',
    levelSource: 'Cambridge Dictionary 的 CEFR 标注（供参考，以来源页面现时内容为准）',
    syllables: 'a·dapt',
    stress: '第二音节',
    pronunciations: [
      { region: 'UK', ipa: '/əˈdæpt/', audio: null, source: 'Cambridge Dictionary（页面标注）' },
      { region: 'US', ipa: '/əˈdæpt/', audio: null, source: 'Cambridge Dictionary（页面标注）' },
    ],
    coreMeaning: {
      zh: '适应 · 调整 · 改编',
      en: 'To change or make changes to fit new conditions, needs, or purposes.',
      note: '核心语义：改变，使之适合。环境变了 → 人改变自己 → <b>适应</b>；需求变了 → 修改产品 → <b>调整</b>；媒介变了 → 小说变电影 → <b>改编</b>。',
    },

    senses: [
      {
        index: 1,
        titleZh: '适应；使自己适应',
        partOfSpeech: 'verb',
        transitivity: 'intransitive',
        isCore: true,
        domain: '学习与生活',
        register: '通用',
        definitionEn: 'To change your behaviour or way of thinking so that you can deal with a new situation.',
        definitionZhTranslation: '改变自己的行为方式或思维方式，使自己能够应对新的情况。',
        explanationZh:
          '当外部条件发生变化时，主动调整自己的行为、习惯或思维方式，以适应新的环境。主语通常是人（也可以是机构、系统），adapt 后面不直接接宾语，而是通过 to 引出所适应的对象。',
        grammar: ['adapt to + noun / -ing', '示例：adapt to living alone（适应独居）'],
        usageScenes: ['新学校、新工作、新城市', '社会与技术变化', '新的生活方式或作息'],
        examples: [
          {
            english: 'It took me several weeks to adapt to university life.',
            chinese: '我花了几个星期才适应大学生活。',
            label: '例句 · 学习与生活',
            sourceType: 'authored',
            structure: 'It took me several weeks / to adapt to / university life.',
            analysis:
              '<ul><li>It took me several weeks：我花了几个星期（it takes + 人 + 时间 + to do 句型）</li>' +
              '<li>adapt to：适应，to 是介词</li>' +
              '<li>university life：大学生活</li></ul>' +
              '<b>常见使用场景：</b>新学校、新工作、新环境、社会变化。',
          },
        ],
        collocations: [
          { phrase: 'adapt to change', meaningZh: '适应变化', exampleEn: 'Companies must adapt to change.', exampleZh: '企业必须适应变化。' },
          { phrase: 'adapt to a new environment', meaningZh: '适应新环境', exampleEn: 'Children adapt to a new environment quickly.', exampleZh: '儿童很快就能适应新环境。' },
          { phrase: 'adapt quickly', meaningZh: '迅速适应', exampleEn: 'She adapted quickly to the new job.', exampleZh: '她很快适应了新工作。' },
        ],
        synonyms: [
          { word: 'adjust', zh: '调整；适应', focus: '作出调整，常涉及较小或较具体的改变', collocation: 'adjust the settings / adjust to life', exampleEn: 'It was hard to adjust to the new routine.', exampleZh: '适应新作息并不容易。', interchangeable: 'contextual', reason: '表示「适应」时两者接近；但 adjust 更常带宾语表示调整某物（adjust a chair），adapt 更强调为新条件而改变。' },
          { word: 'acclimatize', zh: '（逐渐）适应新气候或环境', focus: '更具体，聚焦气候、海拔、自然环境', collocation: 'acclimatize to the heat', exampleEn: 'It takes time to acclimatize to the heat.', exampleZh: '适应炎热天气需要时间。', interchangeable: 'contextual', reason: '只在气候 / 自然环境语境下可替换；换成抽象的社会环境时不自然。' },
          { word: 'accommodate', zh: '满足需要；作出安排', focus: '主语常是安排、日程、空间，去满足别人的需要', collocation: 'accommodate different needs', exampleEn: 'The schedule can accommodate different needs.', exampleZh: '这个日程可以兼顾不同需求。', interchangeable: 'no', reason: 'accommodate 的重点在「容纳 / 满足需求」，不是「自身发生改变以适应」。' },
        ],
        antonyms: [
          { word: 'resist', zh: '抵制；抗拒', focus: '在「适应变化」的语境中构成语义对照', exampleEn: 'They resisted change.', exampleZh: '他们抵制变化。', note: '并非 adapt 在所有义项下的严格反义词，仅为特定语境的语义对照。' },
        ],
      },
      {
        index: 2,
        titleZh: '修改；调整；改造',
        partOfSpeech: 'verb',
        transitivity: 'transitive',
        isCore: true,
        domain: '商业与产品',
        register: '通用',
        definitionEn: 'To change something so that it is suitable for a new situation, use, or purpose.',
        definitionZhTranslation: '对某物加以改动，使它适合新的情况、用途或目的。',
        explanationZh:
          '对原有事物本身进行修改，使其符合新的条件、需求或用途。这里 adapt 直接带宾语：被修改的是宾语，修改的目的是适配新的用途。',
        grammar: ['adapt A for B：为 B 调整 A', 'adapt A to B：调整 A，使之适合 B', '示例：adapt the design for children（为儿童调整设计）'],
        usageScenes: ['产品本地化', '为特定人群改造方案', '把已有材料改作他用'],
        examples: [
          {
            english: 'We adapted the product to meet local needs.',
            chinese: '我们调整了产品，以满足当地需求。',
            label: '例句 · 商业与产品',
            sourceType: 'authored',
            structure: 'We + adapted + the product + to meet local needs.',
            analysis:
              '<b>句子结构：</b>主语 We + 谓语 adapted + 宾语 the product + 目的状语 to meet local needs。' +
              '<br><b>判断依据：</b>adapt 后直接接宾语 the product，说明这里取「调整 / 改造」义，而不是「适应」义。',
          },
        ],
        collocations: [
          { phrase: 'adapt a plan', meaningZh: '调整计划', exampleEn: 'We adapted the plan after the review.', exampleZh: '评审之后我们调整了计划。' },
          { phrase: 'adapt a product for children', meaningZh: '为儿童改造产品', exampleEn: 'The tool was adapted for children.', exampleZh: '这个工具被改造为儿童适用。' },
          { phrase: 'adapt A to B', meaningZh: '调整 A 使之适合 B', exampleEn: 'They adapted the engine to run on gas.', exampleZh: '他们改造了发动机，使其可以用燃气运转。' },
        ],
        synonyms: [
          { word: 'adjust', zh: '调整；调节', focus: '细节上的调整，幅度通常较小', collocation: 'adjust the settings', exampleEn: 'Please adjust the screen brightness.', exampleZh: '请调整屏幕亮度。', interchangeable: 'contextual', reason: '改动幅度小、只涉及参数时两者都可；为全新用途做结构改动时更常用 adapt。' },
          { word: 'modify', zh: '修改；更改', focus: '对事物的部分内容作改变', collocation: 'modify a design', exampleEn: 'We modified the design after testing.', exampleZh: '测试后我们修改了设计。', interchangeable: 'contextual', reason: 'modify 强调「改动」这个动作本身；adapt 额外带有「为了适配新条件而改」的目的。' },
        ],
      },
      {
        index: 3,
        titleZh: '改编；改写',
        partOfSpeech: 'verb',
        transitivity: 'transitive',
        domain: '文学 / 影视',
        register: '通用',
        definitionEn: 'To change a story, book, or play so that it can be presented in another form.',
        definitionZhTranslation: '把故事、书籍或戏剧加以改动，使其能够以另一种形式呈现。',
        explanationZh:
          '将小说、戏剧或其他作品改写成电影、电视剧、舞台剧等形式。判断这个义项的关键线索是宾语（novel / play / story）与搭配（for the screen / into a film / from a book）。',
        grammar: ['be adapted from：改编自', 'be adapted into：被改编成', 'be adapted for：为某种媒介或受众改编'],
        usageScenes: ['小说改编电影', '为舞台改编剧本', '为特定受众改写版本'],
        cautions: 'from 强调来源；into 强调改编后的形式；for 强调目标媒介或受众。',
        examples: [
          {
            english: 'The novel was adapted into a film.',
            chinese: '这部小说被改编成了一部电影。',
            label: '例句 · 影视',
            sourceType: 'authored',
            structure: 'The novel（原作） + was adapted into + a film（新形式）。',
            analysis:
              '被动结构：原作作主语时常用 be adapted into / for / from。改成主动语态即 They adapted the novel into a film.',
          },
        ],
        collocations: [
          { phrase: 'adapt a novel into a film', meaningZh: '将小说改编成电影', exampleEn: 'They adapted the novel into a film.', exampleZh: '他们把这部小说改编成了电影。' },
          { phrase: 'be adapted from a book', meaningZh: '改编自一本书', exampleEn: 'The film was adapted from a book.', exampleZh: '这部电影改编自一本书。' },
        ],
        synonyms: [
          { word: 'rewrite', zh: '重写；改写', focus: '侧重文字层面的重新写作', collocation: 'rewrite the ending', exampleEn: 'They rewrote the ending.', exampleZh: '他们重写了结局。', interchangeable: 'contextual', reason: '跨媒介（小说→电影）时用 adapt；同一媒介内改写文本时用 rewrite 更准确。' },
        ],
      },
      {
        index: 4,
        titleZh: '适应环境；发生适应性变化',
        partOfSpeech: 'verb',
        transitivity: 'intransitive',
        domain: '生物学',
        register: '学术',
        definitionEn: 'To change in ways that help an organism survive in its environment.',
        definitionZhTranslation: '发生有助于生物体在其生存环境中存活的变化。',
        explanationZh:
          '生物学中的适应，涉及生物与其生存环境之间的适合关系。这个义项描述的是生物特征与环境之间的匹配，既包括个体层面的生理调节，也可能涉及种群层面的长期演化。',
        cautions: '注意：生物学中的适应可能涉及跨代的演化变化，不能一概理解为个体主动改变习惯。',
        grammar: ['adapt to + 环境 / 条件'],
        usageScenes: ['生物教材与科普文章', '描述物种特征与环境的关系'],
        examples: [
          {
            english: 'Some plants have adapted to extremely dry conditions.',
            chinese: '一些植物已经适应了极端干旱的环境。',
            label: '例句 · 生物学',
            sourceType: 'authored',
            structure: 'Some plants + have adapted to + extremely dry conditions.',
            analysis:
              '现在完成时强调「到现在为止已经形成」的适应结果；adapt to 后接环境名词。',
          },
        ],
        collocations: [
          { phrase: 'be well adapted to', meaningZh: '很适应；很适合', exampleEn: 'These birds are well adapted to cold weather.', exampleZh: '这些鸟很适应寒冷天气。' },
        ],
      },
    ],

    forms: [
      { formType: 'base', form: 'adapt', label: '原形' },
      { formType: 'third', form: 'adapts', label: '第三人称单数' },
      { formType: 'past', form: 'adapted', label: '过去式' },
      { formType: 'pastParticiple', form: 'adapted', label: '过去分词' },
      { formType: 'presentParticiple', form: 'adapting', label: '现在分词' },
    ],
    formNote: '规则变化。拼写：adapt → adapting 直接加 -ing；adapt → adapted 直接加 -ed（以两个辅音字母结尾，不双写）。',

    family: [
      { word: 'adapt', pos: 'v.', zh: '适应；调整；改编', exampleEn: 'We must adapt to change.', exampleZh: '我们必须适应变化。' },
      { word: 'adaptation', pos: 'n.', zh: '适应；改编；改编作品', exampleEn: 'The adaptation was successful.', exampleZh: '这次改编很成功。' },
      { word: 'adaptable', pos: 'adj.', zh: '适应能力强的；可调整的', exampleEn: 'Children are often highly adaptable.', exampleZh: '儿童往往适应能力很强。' },
      { word: 'adaptability', pos: 'n.', zh: '适应能力', exampleEn: 'Adaptability is an important skill.', exampleZh: '适应能力是一项重要技能。' },
      { word: 'adaptive', pos: 'adj.', zh: '适应性的；能够随条件调整的', exampleEn: 'The system uses adaptive learning.', exampleZh: '该系统采用自适应学习。' },
      { word: 'adapted', pos: 'adj.', zh: '经过改造的；适合特定条件的', exampleEn: 'This is an adapted version of the book.', exampleZh: '这是这本书的改编版本。' },
    ],
    familyNote:
      '<b>注意两个形容词的区别：</b><br>• <b>adaptable</b>：强调具有适应、调整的能力。<br>• <b>adaptive</b>：强调具有适应性或能够根据条件调整，常用于系统、行为和生物学等语境。<br>例如，an adaptable employee 强调员工适应能力强；an adaptive system 强调系统能够随条件变化而调整。',

    etymology: {
      origin: '拉丁语 adaptare（调整，使合适）',
      prefix: { text: 'ad-', gloss: '朝向；去往' },
      root: { text: 'aptare', gloss: '使适合、使贴合（源自 aptus「合适的」）' },
      suffix: null,
      history: [
        { label: 'ad- + aptare', text: '拉丁语：朝向 + 使之适合' },
        { label: 'adaptare', text: '拉丁语：调整，使合适' },
        { label: 'adapt', text: '现代英语：适应；调整；改编' },
      ],
      formationLogic: '构词逻辑：把某物朝向某个目标调整，使它贴合该目标。',
      mnemonic: '记忆逻辑：一个东西原本不合适，所以对它进行调整，使其变得合适。这就是 adapt 各个义项之间的共同联系。',
      note: '词源参考 Etymonline。这里是历史词源分析，不代表现代英语使用者通常会把 adapt 拆成两个独立单词。',
      source: 'Etymonline — adapt',
    },

    relations: [
      {
        target: 'adopt',
        relationTypes: ['visual', 'phonetic', 'confusable'],
        ipa: 'UK /əˈdɒpt/ · US /əˈdɑːpt/',
        pos: 'verb',
        zh: '采用；采纳；收养',
        exampleEn: 'We decided to adopt a new plan.',
        exampleZh: '我们决定采用一个新计划。',
        spellingDiff: '第三个字母不同：adapt = a，adopt = o',
        phoneticDiff: '中间元音不同：/æ/ 与 /ɒ/（美 /ɑː/）',
        semanticDiff: 'adapt 是修改现有事物使之适合；adopt 是选择并采用某事物',
        collocationDiff: 'adapt to a new environment；adopt a policy / adopt a child',
      },
      {
        target: 'adept',
        relationTypes: ['visual', 'phonetic', 'confusable'],
        ipa: '/əˈdept/',
        pos: 'adjective',
        zh: '熟练的；擅长的',
        exampleEn: 'She is adept at solving problems.',
        exampleZh: '她擅长解决问题。',
        spellingDiff: '第三个字母不同：adapt = a，adept = e',
        phoneticDiff: '中间元音不同：/æ/ 与 /e/',
        semanticDiff: 'adept 是形容词，描述技能娴熟；adapt 是动词，描述改变或适应',
        collocationDiff: 'be adept at doing something；adapt to something',
      },
    ],
    relationNote: 'adapt 和 adopt 同为动词，adept 通常是形容词；它们并非同音词。',

    contexts: [
      {
        domain: '商业 · 科技',
        senseId: 'adapt.s2',
        en: 'Companies must adapt to changing consumer needs in order to remain competitive.',
        zh: '企业必须适应不断变化的消费者需求，才能保持竞争力。',
        structure: 'Companies / must adapt / to changing consumer needs / in order to remain competitive.',
        grammar: '主语 Companies；谓语 must adapt；介词短语 to changing consumer needs；目的状语 in order to remain competitive。',
        rationale: '因为消费者需求发生变化，企业需要随之调整自己的产品、服务或经营方式。',
        sourceType: 'authored',
      },
      {
        domain: '文学 · 影视',
        senseId: 'adapt.s3',
        en: 'The director adapted the novel for the screen while preserving its central themes.',
        zh: '导演将这部小说改编成电影，同时保留了它的核心主题。',
        structure: 'The director / adapted / the novel / for the screen / while preserving its central themes.',
        grammar: 'while + 现在分词作伴随状语，说明改编同时保留了主题。',
        rationale: '本句的 adapt 表示改编，而非适应。判断依据是宾语 novel 和搭配 for the screen。',
        sourceType: 'authored',
      },
      {
        domain: '教育 · 生活',
        senseId: 'adapt.s1',
        en: 'Students who are able to adapt to different learning environments may find it easier to deal with unexpected challenges.',
        zh: '能够适应不同学习环境的学生，可能更容易应对意料之外的挑战。',
        structure: 'Students / who are able to adapt to different learning environments / may find it easier / to deal with unexpected challenges.',
        grammar: 'who 引导的定语从句修饰 Students；find it + 形容词 + to do 结构中 it 是形式宾语。',
        rationale: 'adapt to 表示适应，后接 different learning environments 作为适应的对象。',
        sourceType: 'authored',
      },
    ],
    contextNote: '以上为教学自编例句，不冒充语料库原句。',

    mistakes: [
      {
        errorType: 'collocation',
        wrong: 'I adapted the new environment.',
        right: 'I adapted to the new environment.',
        reason: '表达自己适应某种环境时，通常使用 adapt to。',
        rule: 'adapt 表示「适应」时为不及物用法，需借助介词 to 引出适应对象。',
        special: '如果 adapt 后直接接宾语，通常表示修改、改造这个宾语（义项 2 / 3）。',
      },
      {
        errorType: 'grammar',
        wrong: 'I adapted to live alone.',
        right: 'I adapted to living alone.',
        reason: '如果想表达适应独居，to 后应使用 living。',
        rule: 'adapt to 中的 to 是介词，后接名词或动名词（-ing），不是不定式标记。',
        special: 'adapt 后接不定式（adapt something to do something）表示「改造某物以便做某事」，含义不同，不能与「适应」混为一谈。',
      },
      {
        errorType: 'collocation',
        wrong: 'The movie was adapted to a novel.',
        right: 'The movie was adapted from a novel.',
        reason: '要表达电影改编自小说，应使用 from 指出来源。',
        rule: 'be adapted from + 来源；be adapted into + 新形式；be adapted for + 媒介 / 受众。',
        special: '也可以说 A novel was adapted into a movie，突出改编后的形式。',
      },
    ],
    mistakeNote: '这里的「错误」指与目标中文含义不匹配的常见表达，而不代表这些词序在所有其他语境中都绝对不合法。',

    usage: {
      cefr: 'B2',
      frequency: '暂无可靠数据（本项目不做未经语料库统计的词频排名）',
      register: '常规用语，可用于日常、正式及学术语境',
      domains: ['日常生活', '商业', '教育', '影视', '生物学'],
      britishAmerican: '核心义项相通，音标相同',
      tone: '通常中性',
      examTags: '暂无可靠数据（不凭空标记考试出现次数）',
      commonConfusion: ['adopt', 'adept'],
    },

    quiz: [
      { id: 'adapt.q1', senseId: 'adapt.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'She found it difficult to _____ to her new school.', options: ['adapt', 'adopt', 'adept'], answer: 'adapt', explain: 'adapt to 表示适应新学校。' },
      { id: 'adapt.q2', senseId: 'adapt.s2', errorType: 'confusable', type: '易混词辨析', prompt: 'The company decided to _____ a new policy.', options: ['adapt', 'adopt', 'adept'], answer: 'adopt', explain: 'adopt a policy 表示采纳一项政策；adapt a policy 则是修改政策。' },
      { id: 'adapt.q3', senseId: 'adapt.s2', errorType: 'confusable', type: '易混词辨析', prompt: 'He is very _____ at solving technical problems.', options: ['adapt', 'adopt', 'adept'], answer: 'adept', explain: 'be adept at doing something 表示擅长做某事，adept 是形容词。' },
      { id: 'adapt.q4', senseId: 'adapt.s3', errorType: 'collocation', type: '介词搭配', prompt: 'This film was adapted _____ a novel.', options: ['from', 'to', 'at'], answer: 'from', explain: 'adapted from 表示改编自某个来源；into 表示改编后的形式。' },
      { id: 'adapt.q5', senseId: 'adapt.s1', errorType: 'grammar', type: '语法填空', prompt: 'I am gradually adapting to _____ abroad.', options: ['live', 'living', 'lived'], answer: 'living', explain: 'adapt to 中的 to 是介词，表达适应做某事时后接 -ing。' },
    ],

    sources: [
      { name: 'Cambridge Dictionary — adapt', url: 'https://dictionary.cambridge.org/dictionary/english/adapt', dataType: '基本词义、发音、语法与用例', updatedAt: '2026-09', license: '供核对用，以来源页面现时内容为准；本词条未逐字复制其释义' },
      { name: 'Cambridge Dictionary — adopt', url: 'https://dictionary.cambridge.org/dictionary/english/adopt', dataType: '易混词义项', updatedAt: '2026-09', license: '供核对用' },
      { name: 'Etymonline — adapt', url: 'https://www.etymonline.com/word/adapt', dataType: '词源信息', updatedAt: '2026-09', license: '供核对用' },
    ],
    sourceNote: '请以链接页面现时内容为准。词条中的教学释义和例句为本原型编写，并非对外部词典的逐字复制。',

    appendix: {
      title: '最后：这才是一个完整词条的数据结构',
      paragraphs: [
        '如果把上面的词条开发为 ReadAge 产品，底层至少应当保留以下关系：Word（词条唯一标识）→ 发音 / 词形、词义 / 语法、搭配 / 例句、词汇关系、词源 / 词族、学习记录 → Sense（具体义项，各义项独立关联例句、搭配、近义词与掌握情况）→ Learner（用户学习状态：错误记录 · 掌握程度 · 下次复习）。',
        '最关键的是，形近词关系应该连接词条，近义词关系应该尽可能连接具体义项，搭配和例句也应该指向对应义项。',
        '一个完整的词条不是一个单词加几十个字段，而是以这个单词为中心，组织起来的一套可以查阅、理解、比较、练习和记忆的知识体系。',
      ],
    },
  };
})(typeof window !== 'undefined' ? window : globalThis);
