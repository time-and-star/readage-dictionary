/* data/words/cet/author_depth_c3.js
 * 手敲深度补丁（C 批三）：economic/economical、effective/efficient 两组高频易混。
 * 不改释义正文，只补词源、补充例句、语境长句、常见错误、即时检测。
 * 词源按公开词源史转写（Etymonline 供核对），历史分析与助记分开。
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('economic', {
    etymology: {
      origin: '希腊语 oikonomia「家政管理」，来自 oikos「房子、家」+ nemein「分配、管理」',
      prefix: null,
      root: { text: 'oikos + nemein', gloss: '房子 + 管理分配（同 economy、nomos 法则）' },
      suffix: null,
      history: [
        { label: 'oikos + nemein', text: '希腊语：打理家务、安排收支' },
        { label: 'oeconomia', text: '拉丁语：家政，后扩大为治理、经营' },
        { label: 'economic', text: '现代英语：经济的、经济学方面的（谈领域，不谈省不省）' },
      ],
      formationLogic: '管家的学问扩大为管国家的学问，所以 economic 只说「属于经济领域」。',
      mnemonic: 'economy（经济）、economics（经济学）、economic（经济的）同族。economical（节约的）是后起分工，不要混。',
      note: 'economic growth / economic policy 都是谈领域。表节约用 economical。',
      source: 'Etymonline — economic',
    },
    extraExamples: [
      { sense: 1, english: 'The report compares the economic conditions of three coastal cities.', chinese: '这份报告比较了三个沿海城市的经济状况。' },
    ],
    contexts: [
      { domain: '新闻 · 经济', senseId: 'economic.s1', en: 'Falling exports hurt economic growth, but the report says jobs held steady.', zh: '出口下滑拖累了经济增长，但报告说就业保持稳定。', structure: 'Falling exports / hurt economic growth / but jobs held steady.', grammar: 'economic 作定语修饰 growth。hurt + 名词表示损害。', rationale: '谈领域用 economic；若说省钱省油则是 an economical car。', sourceType: 'authored' },
      { domain: '学术', senseId: 'economic.s1', en: 'The class discussed the economic reasons behind the price change, not who saved more money.', zh: '课堂讨论的是价格变动背后的经济原因，而不是谁更省钱。', structure: 'The class / discussed / the economic reasons / not who saved money.', grammar: 'economic reasons 经济方面的原因。', rationale: 'economic 对应领域，economical 对应是否节约。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'He bought an economic car to save petrol.', right: 'He bought an economical car to save petrol.', reason: '省油省钱用 economical；economic car 会被理解成经济领域的车。', rule: 'economic + growth / policy / development；economical + car / use / way。', special: 'economic loss（经济损失）vs economical loss 几乎不用，后者听起来像节约的损失。' },
      { errorType: 'meaning', wrong: 'The economical situation is getting better.', right: 'The economic situation is getting better.', reason: '经济形势用 economic situation。', rule: '谈大环境、学科、政策一律 economic。', special: 'economical situation 很少见，除非特指某安排很省钱。' },
    ],
    quiz: [
      { id: 'economic.q1', senseId: 'economic.s1', errorType: 'confusable', type: '易混词辨析', prompt: '_____ development needs both roads and schools.', options: ['Economic', 'Economical', 'Economy'], answer: 'Economic', explain: '经济发展用 economic development。' },
      { id: 'economic.q2', senseId: 'economic.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'This small car is very _____ to run.', options: ['economical', 'economic', 'economy'], answer: 'economical', explain: '用车省钱用 economical。' },
      { id: 'economic.q3', senseId: 'economic.s1', errorType: 'meaning', type: '词义选择', prompt: 'She studies _____ at university.', options: ['economics', 'economicals', 'economies'], answer: 'economics', explain: '经济学学科用 economics。' },
      { id: 'economic.q4', senseId: 'economic.s1', errorType: 'meaning', type: '词源', prompt: 'economic 词族里 oikos 最初的意思是：', options: ['房子、家', '节约', '效果'], answer: '房子、家', explain: 'oikos 是房子，家政管理扩大为经济。' },
    ],
    usage: { domains: ['新闻', '经济', '学术'], tone: '中性', commonConfusion: ['economical', 'economy'] },
  });

  D('economical', {
    etymology: {
      origin: '英语内部派生：economic + -al，节约义在18世纪后固定',
      prefix: null,
      root: { text: 'economic', gloss: '经济的（同源 economy）' },
      suffix: { text: '-al', gloss: '形容词后缀；此处伴随词义收窄为「省的」' },
      history: [
        { label: 'economic', text: '早期：经济方面的（与 economic 同义）' },
        { label: 'economical', text: '18世纪后：专指省钱、省资源' },
        { label: 'economical', text: '现代英语：节约的、经济实惠的' },
      ],
      formationLogic: '同一个词根分出两个活：economic 留守领域，economical 去管省不省。',
      mnemonic: 'economical 比 economic 多两个字母 al，可记 a little（一点点）：花一点点就够，就是节约。',
      note: '反义可用 wasteful / uneconomical。economic 不能替换 economical 表节约。',
      source: 'Etymonline — economical',
    },
    extraExamples: [
      { sense: 1, english: 'Cooking at home is usually more economical than ordering takeaway.', chinese: '自己做饭通常比点外卖更省钱。' },
    ],
    contexts: [
      { domain: '生活', senseId: 'economical.s1', en: 'The new bus route is not only faster but also more economical for students.', zh: '新的公交线路不仅更快，对学生来说也更省钱。', structure: 'The new bus route / is faster / and more economical.', grammar: 'economical 作表语，more economical 比较级。', rationale: '谈省钱用 economical；谈经济增长用 economic growth。', sourceType: 'authored' },
      { domain: '商业', senseId: 'economical.s1', en: 'The firm switched to an economical packing method and cut waste by a third.', zh: '公司换了一种更省的包装方式，浪费减少了三分之一。', structure: 'The firm / switched to / an economical packing method.', grammar: 'economical 修饰 method。switch to + 新方式。', rationale: '强调节省投入，不是经济学科。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'We need an economic plan to save money.', right: 'We need an economical plan to save money.', reason: '为省钱制定的计划用 economical；economic plan 会被理解成经济领域的计划。', rule: '省钱、省时、省资源一律 economical。', special: 'economic reform（经济改革）不能换成 economical reform。' },
      { errorType: 'collocation', wrong: 'It is economic to take the bus.', right: 'It is economical to take the bus.', reason: '坐公交省钱用 economical。', rule: 'It is economical to do；an economical way。', special: 'economical with the truth 是委婉说法「没说全」，考试少见。' },
    ],
    quiz: [
      { id: 'economical.q1', senseId: 'economical.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'LED bulbs are more _____ than old ones.', options: ['economical', 'economic', 'economy'], answer: 'economical', explain: '省电省钱用 economical。' },
      { id: 'economical.q2', senseId: 'economical.s1', errorType: 'confusable', type: '易混词辨析', prompt: '_____ policy affects jobs and prices.', options: ['Economic', 'Economical', 'Economics'], answer: 'Economic', explain: '经济政策用 economic policy。' },
      { id: 'economical.q3', senseId: 'economical.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which is closest to economical?', options: ['thrifty', 'huge', 'hasty'], answer: 'thrifty', explain: 'economical 近义 thrifty（节约的）。' },
      { id: 'economical.q4', senseId: 'economical.s1', errorType: 'collocation', type: '介词搭配', prompt: 'It is economical _____ cook at home.', options: ['to', 'of', 'for cook'], answer: 'to', explain: 'It is economical to do。' },
    ],
    usage: { domains: ['生活', '商业'], tone: '褒义，表省钱', commonConfusion: ['economic'] },
  });

  D('efficient', {
    etymology: {
      origin: '拉丁语 efficiens，efficere「做出来」的现在分词，来自 ex- + facere',
      prefix: { text: 'ef- (ex-)', gloss: '向外、做出' },
      root: { text: 'facere', gloss: '做、造成（同 effect、sufficient）' },
      suffix: null,
      history: [
        { label: 'ex + facere', text: '拉丁语：做出来' },
        { label: 'efficere → efficiens', text: '拉丁语：正在起作用的' },
        { label: 'efficient', text: '现代英语：效率高的、不浪费的' },
      ],
      formationLogic: '同样做事，花料少的就是 efficient。',
      mnemonic: 'efficient 里有 -fic-（做）。effective 回答有没有用，efficient 回答省不省。',
      note: '名词是 efficiency。不要写成 effecient。',
      source: 'Etymonline — efficient',
    },
    extraExamples: [
      { sense: 1, english: 'A short checklist makes morning handover far more efficient.', chinese: '一张简短的清单能让早班交接高效得多。' },
    ],
    contexts: [
      { domain: '职场', senseId: 'efficient.s1', en: 'The team cut two meetings a week and became efficient without working longer hours.', zh: '团队每周砍掉两个会，工作时间没变长，效率反而高了。', structure: 'The team / cut two meetings / and became efficient.', grammar: 'become efficient 变得高效。without working ... 伴随状语。', rationale: '谈投入产出用 efficient；只谈有没有效果用 effective。', sourceType: 'authored' },
      { domain: '生活 · 技术', senseId: 'efficient.s1', en: 'The new heater warms the room in ten minutes, so it is efficient in winter.', zh: '新暖气十分钟就能让房间暖和，冬天用很省。', structure: 'The new heater / warms the room / so it is efficient.', grammar: 'efficient 作表语。so 引出结果。', rationale: '省时省电用 efficient；药有效用 effective。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'This pill is very efficient for headaches.', right: 'This pill is very effective for headaches. / This system is very efficient.', reason: '药有效用 effective；efficient 说的是省资源、效率高。', rule: 'effective + 治疗 / 方案；efficient + 流程 / 系统 / 方法。', special: 'A solution can be effective but not efficient：有效但费资源。' },
      { errorType: 'collocation', wrong: 'He is efficient in solving problems with good results.', right: 'He is efficient at solving problems. / His method is effective.', reason: 'efficient at doing 讲效率；effective 讲结果。', rule: 'efficient at / in + 领域；effective for / against + 问题。', special: 'efficient 後面不直接说 effective 的宾语 a headache。' },
    ],
    quiz: [
      { id: 'efficient.q1', senseId: 'efficient.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The new route is shorter and more _____.', options: ['efficient', 'effective', 'effort'], answer: 'efficient', explain: '更短更省用 efficient。' },
      { id: 'efficient.q2', senseId: 'efficient.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The vaccine is _____ against the virus.', options: ['effective', 'efficient', 'affective'], answer: 'effective', explain: '疫苗有效用 effective。' },
      { id: 'efficient.q3', senseId: 'efficient.s1', errorType: 'meaning', type: '词义选择', prompt: 'Which is closest to efficient?', options: ['productive without waste', 'expensive but famous', 'late but lucky'], answer: 'productive without waste', explain: 'efficient = 不浪费的高效。' },
      { id: 'efficient.q4', senseId: 'efficient.s1', errorType: 'collocation', type: '介词搭配', prompt: 'She is efficient _____ planning.', options: ['at', 'to plan', 'of plan'], answer: 'at', explain: 'be efficient at + -ing。' },
    ],
    usage: { domains: ['职场', '技术', '日常'], tone: '褒义', commonConfusion: ['effective'] },
  });

  D('effective', {
    etymology: {
      origin: '拉丁语 effectivus「能产生效果的」，来自 effectus（效果）',
      prefix: { text: 'ef- (ex-)', gloss: '向外、做出' },
      root: { text: 'facere', gloss: '做（同 effect、efficient）' },
      suffix: { text: '-ive', gloss: '形容词后缀，表示性质' },
      history: [
        { label: 'ex + facere', text: '拉丁语：做出来' },
        { label: 'effectus → effectivus', text: '拉丁语：能出效果的' },
        { label: 'effective', text: '现代英语：有效的、起作用的' },
      ],
      formationLogic: '能把结果做出来，就是有效。',
      mnemonic: 'effect（结果）+ -ive（的）= 有效的。efficient 多一个 -cient，可记 science：讲方法科学省料。',
      note: 'effective date（生效日期）、take effect（生效）都用 effect 家族。',
      source: 'Etymonline — effective',
    },
    extraExamples: [
      { sense: 1, english: 'Two short meetings proved more effective than one long lecture.', chinese: '两次短会比一次长讲座更有效。' },
    ],
    contexts: [
      { domain: '教育 · 职场', senseId: 'effective.s1', en: 'Short daily practice is more effective than one long session before the test.', zh: '每天短练比考前一次长练更有效。', structure: 'Short daily practice / is more effective / than one long session.', grammar: 'more effective than 比较结构。', rationale: '谈有没有用用 effective；谈省不省用 efficient。', sourceType: 'authored' },
      { domain: '健康', senseId: 'effective.s1', en: 'The doctor said the treatment is effective, but the recovery still takes weeks.', zh: '医生说治疗有效，但恢复仍需几周。', structure: 'The doctor said / the treatment is effective / but recovery takes weeks.', grammar: 'be effective 表有效。', rationale: '药、治疗、沟通、广告都用 effective。', sourceType: 'authored' },
    ],
    mistakes: [
      { errorType: 'confusable', wrong: 'This heater is very effective and saves power.', right: 'This heater is very efficient and saves power. / This heater is very effective at warming the room.', reason: '省电用 efficient；说暖房有效果才用 effective。', rule: 'effective 回答有没有用；efficient 回答省不省。', special: 'effective immediately（立即生效）是固定搭配。' },
      { errorType: 'collocation', wrong: 'The rule takes efficient next Monday.', right: 'The rule takes effect next Monday. / The rule comes into effect next Monday.', reason: '生效固定用 take / come into effect，effect 是名词。', rule: 'take effect；in effect（有效）。', special: 'efficient 不能作生效的名词。' },
    ],
    quiz: [
      { id: 'effective.q1', senseId: 'effective.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'Regular review is _____ for memory.', options: ['effective', 'efficient', 'affective'], answer: 'effective', explain: '对记忆有效果，用 effective。' },
      { id: 'effective.q2', senseId: 'effective.s1', errorType: 'confusable', type: '易混词辨析', prompt: 'The factory cut waste and became _____.', options: ['efficient', 'effective', 'affective'], answer: 'efficient', explain: '减废增效用 efficient。' },
      { id: 'effective.q3', senseId: 'effective.s1', errorType: 'collocation', type: '介词搭配', prompt: 'The new policy takes _____ tomorrow.', options: ['effect', 'affect', 'efficient'], answer: 'effect', explain: 'take effect 生效。' },
      { id: 'effective.q4', senseId: 'effective.s1', errorType: 'meaning', type: '词义选择', prompt: 'An _____ answer solves the problem.', options: ['effective', 'efficient', 'affective'], answer: 'effective', explain: '能解决问题的答案是 effective。' },
    ],
    usage: { domains: ['日常', '职场', '健康', '政策'], tone: '中性偏褒', commonConfusion: ['efficient', 'affective'] },
  });
})(typeof window !== 'undefined' ? window : globalThis);
