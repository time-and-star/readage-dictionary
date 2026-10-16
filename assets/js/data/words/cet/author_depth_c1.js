/* data/words/cet/author_depth_c1.js
 * 手敲深度补丁（C 批一）：adapt 核心易混组 adopt / adept / affect / effect。
 * 不改释义正文，只补词源、补充例句、语境长句、常见错误、即时检测。
 * 词源按公开词源史转写（Etymonline 供核对），历史分析与助记分开，不逐字复制词典条目。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('adopt', {
    etymology: {
      origin: '拉丁语 adoptare，来自 ad-「朝向」+ optare「选择、希望」',
      prefix: { text: 'ad-', gloss: '朝向、为自己' },
      root: { text: 'optare', gloss: '选择、希望（同 option 选项）' },
      suffix: null,
      history: [
        { label: 'optare', text: '拉丁语：选择、希望得到' },
        { label: 'adoptare', text: '拉丁语：为自己选定、收为己有' },
        { label: 'adopt', text: '现代英语：采用、采纳；依法收养' },
      ],
      formationLogic: '从若干选项中挑一个拿到自己这边，所以是「采用」；把孩子接到自己家，就是「收养」。',
      mnemonic: '词干 opt- 联想 option（选项）。adopt 是从选项里选一个；adapt 是把东西改合适，不要换 a/o。',
      note: '名词是 adoption。过去式 adopted。不要把 adopt 写成 adapt。',
      source: 'Etymonline — adopt',
    },
    extraExamples: [
      { sense: 1, english: 'The school adopted a new timetable after parents asked for later starts.', chinese: '家长要求晚点上课后，学校采用了新的作息表。' },
      { sense: 2, english: 'They adopted a daughter in 2019 and she started school here last autumn.', chinese: '他们在 2019 年收养了一个女儿，她去年秋天开始在这里上学。' },
    ],
    contexts: [
      { domain: '商业 · 管理', senseId: 'adopt.s1', en: 'After the pilot failed in two cities, the firm refused to adopt the system nationwide.', zh: '在两个城市试点失败后，公司拒绝在全国推广这套系统。', structure: 'After the pilot failed / the firm / refused to adopt / the system nationwide.', grammar: 'adopt 直接接被采用的对象（system / policy / approach）。refuse to do 表示拒绝做。', rationale: '宾语是 system，表示选定并使用，不是修改它；若是修改它则是 adapt the system。', sourceType: 'authored' },
      { domain: '生活 · 法律', senseId: 'adopt.s2', en: 'The couple went through a long review before they were allowed to adopt a child.', zh: '这对夫妇经过长期审查，才获准收养孩子。', structure: 'The couple / went through a long review / before they were allowed to adopt a child.', grammar: 'be allowed to do 表示获准做某事。adopt a child 固定搭配。', rationale: '宾语是 a child，法律意义的收养，与 adapt（适应）无关。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We adapted a new policy at the meeting.', right: 'We adopted a new policy at the meeting.', reason: '会上是「采纳」一项政策，用 adopted；adapted 表示修改了政策内容。', rule: 'adopt a policy = 采纳；adapt a policy = 调整政策。', special: 'adopted / adapted 发音接近，写作时看首字母后第三个字母 a/o。' },
      { errorType: 'collocation', wrong: 'They adopted to a new environment quickly.', right: 'They adapted to a new environment quickly.', reason: '适应环境用 adapt to；adopt 后面直接接名词，不接 to + 环境。', rule: 'adapt to + 环境；adopt + 政策 / 孩子 / 方法。', special: 'adopted a child（收养），adapted to school life（适应校园生活）。' },
      { errorType: 'grammar', wrong: 'She is adept to solve problems.', right: 'She is adept at solving problems. / She adopted a new method to solve problems.', reason: 'adept 是形容词，用 be adept at；adopt 是动词，用 adopted + 方法。', rule: 'be adept at + 名词 / -ing；adopt + 名词。', special: '三词词性不同：adapt 动词改合适，adopt 动词选定收养，adept 形容词擅长。' },
    ],
    quiz: [
      { id: 'adopt.q1', senseId: 'adopt.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The board voted to _____ the proposal.', options: ['adopt', 'adapt', 'adept'], answer: 'adopt', explain: '投票采纳提议，用 adopt the proposal。' },
      { id: 'adopt.q2', senseId: 'adopt.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'We had to _____ the design for younger users.', options: ['adapt', 'adopt', 'adept'], answer: 'adapt', explain: '为小用户改造设计，用 adapt（修改以适合）。' },
      { id: 'adopt.q3', senseId: 'adopt.s2', errorType: 'meaning', type: '词义选择', prompt: 'They hope to _____ a child next year.', options: ['adopt', 'adapt', 'adept'], answer: 'adopt', explain: '收养孩子固定用 adopt a child。' },
      { id: 'adopt.q4', senseId: 'adopt.s1', errorType: 'collocation', type: '介词搭配', prompt: 'She quickly _____ to the new team culture.', options: ['adapted', 'adopted', 'adepted'], answer: 'adapted', explain: '适应新团队文化是 adapt to；adepted 不是单词。' },
      { id: 'adopt.q5', senseId: 'adopt.s1', errorType: 'grammar', type: '语法填空', prompt: 'He is _____ at fixing bikes.', options: ['adept', 'adopt', 'adapt'], answer: 'adept', explain: 'be adept at 表示擅长，adept 是形容词。' },
    ],
    usage: { domains: ['商业', '管理', '生活', '法律'], tone: '中性', commonConfusion: ['adapt', 'adept'] },
  });

  D('adept', {
    etymology: {
      origin: '拉丁语 adeptus，adipisci「获得、达到」的过去分词',
      prefix: { text: 'ad-', gloss: '朝向、达到' },
      root: { text: 'apisci', gloss: '抓住、获得（adipisci = 努力后得到）' },
      suffix: null,
      history: [
        { label: 'apisci', text: '拉丁语：抓住' },
        { label: 'adipisci → adeptus', text: '拉丁语：经过努力获得（的人）' },
        { label: 'adept', text: '现代英语：熟练的、擅长的（形容词为主）' },
      ],
      formationLogic: '已经「抓到手」的人，就是内行、熟手。',
      mnemonic: 'adept 与 adopt 只差中间元音 o/e。adept 是形容词，描述人；adopt 是动词，表示选定。搭配永远是 be adept at。',
      note: '作名词（内行）时较少见，考试以形容词为主。不要写 be adept to do。',
      source: 'Etymonline — adept',
    },
    extraExamples: [
      { sense: 1, english: 'The new assistant is adept at turning messy notes into clear tables.', chinese: '这位新助理擅长把杂乱的笔记整理成清晰的表格。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'adept.s1', en: 'A nurse who is adept at calming children can finish a check-up in half the time.', zh: '擅长安抚孩子的护士，完成一次检查只要一半时间。', structure: 'A nurse / who is adept at calming children / can finish a check-up.', grammar: 'be adept at + -ing。who 从句修饰 nurse。', rationale: '描述人的技能水平，不是采纳方法（adopt）或改合适（adapt）。', sourceType: 'authored' },
      { domain: '学习', senseId: 'adept.s1', en: 'She became adept in chess only after losing hundreds of games without quitting.', zh: '输了几百盘却没有放弃之后，她的象棋才变得熟练。', structure: 'She / became adept in chess / only after losing hundreds of games.', grammar: 'become adept in + 领域。after 引导时间状语。', rationale: 'adept 后接领域（at / in + 名词），不直接接政策或孩子。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'grammar', wrong: 'He is adept to use the software.', right: 'He is adept at using the software.', reason: 'adept 用 at，不用 to；at 后接名词或 -ing。', rule: 'be adept at / in + 名词 / -ing。', special: 'adopt a method（采用方法）是动词短语，不要混成 adept a method。' },
      { errorType: 'confusable', wrong: 'They adept a new rule yesterday.', right: 'They adopted a new rule yesterday. / They are adept at following rules.', reason: '采纳规则用动词 adopted；擅长遵守规则用形容词 adept at。adept 不能作动词。', rule: 'adopt 是动词，可作谓语；adept 是形容词，前面要有 be。', special: 'adapt a rule 则是修改规则，三词分工不同。' },
    ],
    quiz: [
      { id: 'adept.q1', senseId: 'adept.s1', errorType: 'collocation', type: '介词搭配', prompt: 'She is adept _____ repairing old radios.', options: ['at', 'to', 'for'], answer: 'at', explain: 'be adept at + -ing。' },
      { id: 'adept.q2', senseId: 'adept.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Our team decided to _____ a simpler workflow.', options: ['adopt', 'adept', 'adapt'], answer: 'adopt', explain: '决定采用流程，用动词 adopt。adept 不能作谓语。' },
      { id: 'adept.q3', senseId: 'adept.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'He had to _____ to night shifts.', options: ['adapt', 'adopt', 'adept'], answer: 'adapt', explain: '适应夜班用 adapt to。' },
      { id: 'adept.q4', senseId: 'adept.s1', errorType: 'meaning', type: '词义选择', prompt: 'An adept cook can fix a bland soup quickly. Adept here means _____.', options: ['skilled', 'adopted', 'adapted'], answer: 'skilled', explain: 'adept = 熟练的，近义 skilled。' },
      { id: 'adept.q5', senseId: 'adept.s1', errorType: 'grammar', type: '语法填空', prompt: 'They are adept _____ chess.', options: ['at', 'to adopt', 'adopting'], answer: 'at', explain: 'be adept at + 名词；不要把 adopt 塞进介词位。' },
    ],
    usage: { domains: ['职场', '学习'], tone: '褒义，表称赞', commonConfusion: ['adopt', 'adapt'] },
  });

  D('affect', {
    etymology: {
      origin: '拉丁语 afficere，来自 ad-「朝向」+ facere「做、造成」',
      prefix: { text: 'af- (ad-)', gloss: '朝向（在 f 前同化为 af-）' },
      root: { text: 'facere', gloss: '做、造成（同 effect、factory）' },
      suffix: null,
      history: [
        { label: 'ad + facere', text: '拉丁语：对……施加作用' },
        { label: 'afficere → affectus', text: '拉丁语：产生影响、触动感情' },
        { label: 'affect', text: '现代英语：影响；打动（动词为主）' },
      ],
      formationLogic: '对某人某事「做」了点什么，就是产生了影响；做到心里去，就是打动。',
      mnemonic: 'affect 与 effect 同根 facere（做）。affect 是动词「施加影响」；effect 作名词是「做出来的结果」。',
      note: '心理学名词 affect（情感）读法特殊，考试重点是动词用法。',
      source: 'Etymonline — affect',
    },
    extraExamples: [
      { sense: 1, english: 'The new metro line will affect house prices along the route.', chinese: '新的地铁线会影响沿线房价。' },
      { sense: 2, english: 'Her calm voice deeply affected the frightened passengers.', chinese: '她镇定的声音深深安抚了受惊的乘客。' },
    ],
    contexts: [
      { domain: '学术 · 考试', senseId: 'affect.s1', en: 'The study asked whether screen time before bed affects sleep quality in teenagers.', zh: '这项研究问的是：睡前看屏幕是否影响青少年的睡眠质量。', structure: 'The study / asked / whether screen time / affects / sleep quality.', grammar: 'affect 直接接被影响的对象（sleep quality）。whether 从句作 asked 的宾语。', rationale: '主语是 screen time，宾语是 sleep quality，「影响」义；若说结果则是 effect。', sourceType: 'authored' },
      { domain: '文学 · 情感', senseId: 'affect.s2', en: 'The letter from his mother affected him more than any prize ever had.', zh: '母亲的来信比任何奖项都更打动他。', structure: 'The letter / affected him / more than any prize ever had.', grammar: 'affect + 人，表示触动感情；more than 引出比较。', rationale: 'deeply / strongly 修饰时多为情感义，不是「感染疾病」。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'The policy had a positive affect on sales.', right: 'The policy had a positive effect on sales.', reason: 'have an + 名词时用 effect（结果）；affect 是动词，不能放在 an 后面。', rule: 'affect + 名词（动词）；have an effect on + 名词（名词短语）。', special: 'The policy affected sales.（动词句）= The policy had an effect on sales.（名词句）' },
      { errorType: 'grammar', wrong: 'Lack of sleep affects to our health.', right: 'Lack of sleep affects our health. / Lack of sleep has an effect on our health.', reason: 'affect 直接接宾语，不加 to；加 to 要换成名词结构 have an effect on。', rule: 'affect + somebody / something；have an effect on + somebody / something。', special: 'effect 作动词（促成）是正式用法，日常先掌握名词。' },
      { errorType: 'meaning', wrong: 'The news effected him deeply.', right: 'The news affected him deeply.', reason: '打动人用 affect；effect 作动词是「促成变化」，不接「人被感动」。', rule: 'affect someone = 影响 / 打动某人；effect change = 促成变革。', special: 'effect change（促成变革）宾语是 change，不是人。' },
    ],
    quiz: [
      { id: 'affect.q1', senseId: 'affect.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Cold weather can _____ our plans.', options: ['affect', 'effect', 'effort'], answer: 'affect', explain: '此处要动词「影响」，用 affect + plans。' },
      { id: 'affect.q2', senseId: 'affect.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The medicine had no side _____.', options: ['effect', 'affect', 'affects'], answer: 'effect', explain: 'side effect 副作用，名词用 effect。' },
      { id: 'affect.q3', senseId: 'affect.s2', errorType: 'meaning', type: '词义选择', prompt: 'The film _____ me deeply; I cried at the end.', options: ['affected', 'effected', 'afforded'], answer: 'affected', explain: '打动人用 affect。' },
      { id: 'affect.q4', senseId: 'affect.s1', errorType: 'collocation', type: '介词搭配', prompt: 'Rising costs will have an effect _____ small shops.', options: ['on', 'to affect', 'of affect'], answer: 'on', explain: 'have an effect on + 对象。' },
      { id: 'affect.q5', senseId: 'affect.s1', errorType: 'grammar', type: '语法填空', prompt: 'Smoking _____ your lungs.', options: ['affects', 'effects', 'is affect'], answer: 'affects', explain: '主语 smoking，谓语用三单 affects + 宾语。' },
    ],
    usage: { domains: ['日常', '学术', '新闻'], tone: '中性', commonConfusion: ['effect'] },
  });

  D('effect', {
    etymology: {
      origin: '拉丁语 effectus，efficere「做出来」的过去分词，来自 ex-「向外」+ facere「做」',
      prefix: { text: 'ef- (ex-)', gloss: '向外、做出' },
      root: { text: 'facere', gloss: '做、造成（同 affect、factory）' },
      suffix: null,
      history: [
        { label: 'ex + facere', text: '拉丁语：做出来' },
        { label: 'efficere → effectus', text: '拉丁语：造成的结果' },
        { label: 'effect', text: '现代英语：效果、结果；正式动词「促成」' },
      ],
      formationLogic: '「做」出来的东西，就是结果；能把结果做出来，就是促成。',
      mnemonic: 'affect 是动作（A = Action）；effect 是结果（E = End result）。先有 affect，再有 effect。',
      note: '名词是高频义；动词 effect change（促成变革）属正式语体，不要与 affect 混用。',
      source: 'Etymonline — effect',
    },
    extraExamples: [
      { sense: 1, english: 'Regular exercise has a lasting effect on mood.', chinese: '规律运动对情绪有持久的影响。' },
      { sense: 2, english: 'The new head hopes to effect a real change in working hours.', chinese: '新负责人希望真正促成工时上的变革。' },
    ],
    contexts: [
      { domain: '商业 · 政策', senseId: 'effect.s1', en: 'The tax cut had little effect on hiring, because firms were worried about demand.', zh: '减税对招聘几乎没有效果，因为企业担心需求不足。', structure: 'The tax cut / had little effect on hiring / because firms were worried.', grammar: 'have little effect on + 名词。because 从句说明原因。', rationale: 'effect 是名词「效果」，前面有 little 修饰；动词「影响」则是 affect hiring。', sourceType: 'authored' },
      { domain: '正式 · 商务', senseId: 'effect.s2', en: 'It took three years for the team to effect the planned reform.', zh: '团队花了三年才促成计划中的改革。', structure: 'It took three years / for the team / to effect the planned reform.', grammar: 'effect + change / reform（正式动词）。It takes + 时间 + to do。', rationale: '宾语是 reform（变革），表示促成；若说影响改革进程则是 affect the reform。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'collocation', wrong: 'The rain had a big affect on traffic.', right: 'The rain had a big effect on traffic.', reason: 'have a + 名词只能接 effect；affect 是动词。', rule: 'have an effect on；take effect（生效）；come into effect（实施）。', special: 'The rain affected traffic.（动词句）意思相同，结构不同。' },
      { errorType: 'meaning', wrong: 'The law will affect a change next month.', right: 'The law will effect a change next month. / The law will affect traffic next month.', reason: '促成变革用 effect a change；影响交通用 affect traffic。宾语不同，动词不同。', rule: 'effect + change / reform / settlement；affect + 人 / 事（被影响者）。', special: '日常先记名词 effect，需要正式「促成」时才用动词 effect。' },
      { errorType: 'grammar', wrong: 'The new rule will take affect in May.', right: 'The new rule will take effect in May.', reason: '生效固定用 take effect，effect 是名词。', rule: 'take effect / come into effect / in effect（有效）。', special: 'in person（亲自）与 in effect（有效）不要混。' },
    ],
    quiz: [
      { id: 'effect.q1', senseId: 'effect.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The new drug had an immediate _____.', options: ['effect', 'affect', 'effort'], answer: 'effect', explain: 'had an immediate + 名词，用 effect。' },
      { id: 'effect.q2', senseId: 'effect.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Divorce can _____ children deeply.', options: ['affect', 'effect', 'effort'], answer: 'affect', explain: '深深影响孩子，用动词 affect。' },
      { id: 'effect.q3', senseId: 'effect.s1', errorType: 'collocation', type: '介词搭配', prompt: 'The rules come into _____ on Friday.', options: ['effect', 'affect', 'affects'], answer: 'effect', explain: 'come into effect 生效。' },
      { id: 'effect.q4', senseId: 'effect.s2', errorType: 'meaning', type: '词义选择', prompt: 'The manager hopes to effect _____.', options: ['a reform', 'a person', 'to crying'], answer: 'a reform', explain: 'effect a reform 促成改革，宾语是变革。' },
      { id: 'effect.q5', senseId: 'effect.s1', errorType: 'grammar', type: '语法填空', prompt: 'Side _____ include headache and fever.', options: ['effects', 'affects', 'effecting'], answer: 'effects', explain: 'side effects 副作用，复数名词。' },
    ],
    usage: { domains: ['日常', '商业', '正式文书'], tone: '中性', commonConfusion: ['affect'] },
  });
})(typeof window !== 'undefined' ? window : globalThis);
