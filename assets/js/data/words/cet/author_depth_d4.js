/* data/words/cet/author_depth_d4.js
 * 手敲深度补丁：arrowhead–badge（200）.
 */
(function (global) {
  'use strict';
  const D = global.RA.D;

  D('arrowhead', {
    etymology: {
      origin: '英语派生：arrow「箭」加 head「头」',
      root: { text: 'arrow + head', gloss: '箭的尖端' },
      history: [
        { label: '分开写时只是描述', text: '分开写时只是描述' },
        { label: '连写后成为文物名，也可比喻最前端', text: '连写后成为文物名，也可比喻最前端' },
      ],
      mnemonic: '箭的头就是扎出去的尖',
      note: '复数 arrowheads',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The flint arrowhead was still stuck in the oak beam.', chinese: '那枚燧石箭镞仍嵌在橡木梁里。' }],
    contexts: [{
      domain: '历史',
      senseId: 'arrowhead.s1',
      en: 'The label said this bone arrowhead was made before metal tools.',
      zh: '说明牌写着这枚骨制箭镞早于金属工具。',
      structure: 'The label said this bone arrowhead was made before metal tools.',
      grammar: '教学例句，用来固定 arrowhead 的常见用法。',
      rationale: '作名词时连写成一个词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The arrow head was sharp.',
      right: 'The arrowhead was sharp.',
      reason: '作名词时连写成一个词',
      rule: '作名词时连写成一个词',
      special: '复数 arrowheads',
    }],
    quiz: [
      { id: 'arrowhead.q1', senseId: 'arrowhead.s1', errorType: 'meaning', type: '词义', prompt: 'Which word names the tip of an arrow?', options: ['arrowhead', 'forehead', 'headline'], answer: 'arrowhead', explain: '箭头' },
      { id: 'arrowhead.q2', senseId: 'arrowhead.s1', errorType: 'meaning', type: '词义', prompt: 'A force at the very front can be the _____ of an attack.', options: ['arrowhead', 'artwork', 'artillery'], answer: 'arrowhead', explain: '比喻先锋' },
      { id: 'arrowhead.q3', senseId: 'arrowhead.s1', errorType: 'meaning', type: '词义', prompt: 'The usual noun spelling is _____.', options: ['arrowhead', 'arrow-headed', 'arrowing'], answer: 'arrowhead', explain: '连写名词' },
      { id: 'arrowhead.q4', senseId: 'arrowhead.s1', errorType: 'meaning', type: '词义', prompt: 'head 在 arrowhead 里指什么？', options: ['物体的头、尖端', '人的头脑', '报纸标题'], answer: '物体的头、尖端', explain: '不是 headline' }
    ],
    usage: { domains: ['历史'], tone: '中性', commonConfusion: ['arrow'] },
  });

  D('art', {
    etymology: {
      origin: '拉丁语 ars「技艺」，后既指美术也指手艺',
      root: { text: 'ars', gloss: '技艺、艺术' },
      history: [
        { label: '早期覆盖各种需训练的本事', text: '早期覆盖各种需训练的本事' },
        { label: '现代英语里可指美术，也可指做事的技巧', text: '现代英语里可指美术，也可指做事的技巧' },
      ],
      mnemonic: 'the art of listening 是倾听这门技艺',
      note: '泛指学科时常不加 the：study art',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She studies art at night and still works at the clinic.', chinese: '她晚上学美术，白天仍在诊所工作。' }],
    contexts: [{
      domain: '教育',
      senseId: 'art.s1',
      en: 'The class treats clear mapping as an art that also needs numbers.',
      zh: '课堂把清晰绘图看成一门也需要数字的技艺。',
      structure: 'The class treats clear mapping as an art that also needs numbers.',
      grammar: '教学例句，用来固定 art 的常见用法。',
      rationale: '泛指艺术学科通常不加 the',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He is good at the art.',
      right: 'He is good at art.',
      reason: '泛指艺术学科通常不加 the',
      rule: '泛指艺术学科通常不加 the',
      special: '泛指学科时常不加 the：study art',
    }],
    quiz: [
      { id: 'art.q1', senseId: 'art.s1', errorType: 'meaning', type: '词义', prompt: 'She went to college to study _____.', options: ['art', 'ash', 'axe'], answer: 'art', explain: '美术学科' },
      { id: 'art.q2', senseId: 'art.s1', errorType: 'meaning', type: '词义', prompt: 'Cooking well is an _____ .', options: ['art', 'artist', 'artificial'], answer: 'art', explain: '一门技艺' },
      { id: 'art.q3', senseId: 'art.s1', errorType: 'meaning', type: '词义', prompt: 'A museum painting is a work of _____.', options: ['art', 'artery', 'article'], answer: 'art', explain: 'work of art' },
      { id: 'art.q4', senseId: 'art.s1', errorType: 'meaning', type: '词义', prompt: 'art 的早期意思更接近：', options: ['技艺', '箭镞', '审计'], answer: '技艺', explain: '后来才偏美术' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['artist'] },
  });

  D('artefact', {
    etymology: {
      origin: '拉丁语 arte factum「靠技艺做成的」；英式拼写',
      root: { text: 'arte + fact', gloss: '技艺做出的物件' },
      history: [
        { label: '指人手制品而非自然物', text: '指人手制品而非自然物' },
        { label: '考古语境里多指文物', text: '考古语境里多指文物' },
      ],
      mnemonic: '和美式 artifact 是同一词的两种拼写',
      note: '也可指图像里的假象 an imaging artefact',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The clay artefact was kept away from direct sunlight.', chinese: '那件陶器被避开阳光存放。' }],
    contexts: [{
      domain: '考古',
      senseId: 'artefact.s1',
      en: 'Students were told not to touch the artefact on the open shelf.',
      zh: '学生被告知不要碰开放架上的那件文物。',
      structure: 'Students were told not to touch the artefact on the open shelf.',
      grammar: '教学例句，用来固定 artefact 的常见用法。',
      rationale: 'artefact 指人为之物',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'This artefact grew in the river.',
      right: 'This artefact was made by people.',
      reason: 'artefact 指人为之物',
      rule: 'artefact 指人为之物',
      special: '也可指图像里的假象 an imaging artefact',
    }],
    quiz: [
      { id: 'artefact.q1', senseId: 'artefact.s1', errorType: 'meaning', type: '词义', prompt: 'A pot from a tomb is an _____.', options: ['artefact', 'artery', 'ascent'], answer: 'artefact', explain: '文物' },
      { id: 'artefact.q2', senseId: 'artefact.s1', errorType: 'meaning', type: '词义', prompt: '美式拼写常作 _____.', options: ['artifact', 'artifice', 'artisan'], answer: 'artifact', explain: 'artifact' },
      { id: 'artefact.q3', senseId: 'artefact.s1', errorType: 'meaning', type: '词义', prompt: 'An artefact is made by _____.', options: ['people', 'weather', 'tides only'], answer: 'people', explain: '人为' },
      { id: 'artefact.q4', senseId: 'artefact.s1', errorType: 'meaning', type: '词义', prompt: 'artefact 和 artifact 的关系是：', options: ['同一词的英美拼写', '反义词', '动词和名词'], answer: '同一词的英美拼写', explain: '拼写差异' }
    ],
    usage: { domains: ['考古'], tone: '中性', commonConfusion: ['artifact'] },
  });

  D('artery', {
    etymology: {
      origin: '希腊语 arteria，指从心脏把血送出的血管，也比喻干道',
      root: { text: 'arteria', gloss: '动脉；主干' },
      history: [
        { label: '医学词', text: '医学词' },
        { label: '城市报道里 a main artery 是交通干线', text: '城市报道里 a main artery 是交通干线' },
      ],
      mnemonic: '动脉离开心脏，静脉 vein 回到心脏',
      note: '复数 arteries',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The surgeon closed a torn artery before finishing the operation.', chinese: '外科医生在结束手术前缝合了破裂的动脉。' }],
    contexts: [{
      domain: '医学',
      senseId: 'artery.s1',
      en: 'Ambulances use the north artery when the ring road is shut.',
      zh: '环路关闭时救护车走北侧主干道。',
      structure: 'Ambulances use the north artery when the ring road is shut.',
      grammar: '教学例句，用来固定 artery 的常见用法。',
      rationale: '方向与 vein 相反',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Blood returns to the heart through an artery.',
      right: 'Blood leaves the heart through an artery.',
      reason: '方向与 vein 相反',
      rule: '方向与 vein 相反',
      special: '复数 arteries',
    }],
    quiz: [
      { id: 'artery.q1', senseId: 'artery.s1', errorType: 'meaning', type: '词义', prompt: 'The heart pumps blood into an _____.', options: ['artery', 'artist', 'article'], answer: 'artery', explain: '动脉' },
      { id: 'artery.q2', senseId: 'artery.s1', errorType: 'meaning', type: '词义', prompt: 'A main road can be called a traffic _____.', options: ['artery', 'arrowhead', 'ash'], answer: 'artery', explain: '干道' },
      { id: 'artery.q3', senseId: 'artery.s1', errorType: 'meaning', type: '词义', prompt: 'The plural of artery is _____.', options: ['arteries', 'arterys', 'arteryes'], answer: 'arteries', explain: 'y 变 ies' },
      { id: 'artery.q4', senseId: 'artery.s1', errorType: 'meaning', type: '词义', prompt: '不要把 artery 看成：', options: ['artillery', 'auction', 'aunt'], answer: 'artillery', explain: '炮兵是另一个词' }
    ],
    usage: { domains: ['医学'], tone: '中性', commonConfusion: ['artillery'] },
  });

  D('article', {
    etymology: {
      origin: '拉丁语 articulus「小条目、小关节」',
      root: { text: 'articulus', gloss: '分成的一小项' },
      history: [
        { label: '本义是可以单列的一项', text: '本义是可以单列的一项' },
        { label: '现按语境指文章、物品、冠词或条款', text: '现按语境指文章、物品、冠词或条款' },
      ],
      mnemonic: 'a/an/the 在语法里叫 articles',
      note: '报上的一篇用 an article in the newspaper',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She wrote a short article about night buses.', chinese: '她写了一篇关于夜间公交的短文。' }],
    contexts: [{
      domain: '新闻',
      senseId: 'article.s1',
      en: 'In the phrase the river, the word the is an article.',
      zh: '在 the river 里，the 是一个冠词。',
      structure: 'In the phrase the river, the word the is an article.',
      grammar: '教学例句，用来固定 article 的常见用法。',
      rationale: '用 in 不用 of',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I read an article of the newspaper.',
      right: 'I read an article in the newspaper.',
      reason: '用 in 不用 of',
      rule: '用 in 不用 of',
      special: '报上的一篇用 an article in the newspaper',
    }],
    quiz: [
      { id: 'article.q1', senseId: 'article.s1', errorType: 'meaning', type: '词义', prompt: 'She published an _____ on city parks.', options: ['article', 'artery', 'artist'], answer: 'article', explain: '文章' },
      { id: 'article.q2', senseId: 'article.s1', errorType: 'meaning', type: '词义', prompt: 'A, an and the are _____.', options: ['articles', 'ashes', 'axes'], answer: 'articles', explain: '冠词' },
      { id: 'article.q3', senseId: 'article.s1', errorType: 'meaning', type: '词义', prompt: 'A shirt is an article of _____.', options: ['clothing', 'weather', 'sleep'], answer: 'clothing', explain: '衣物' },
      { id: 'article.q4', senseId: 'article.s1', errorType: 'meaning', type: '词义', prompt: '合同中的一条常叫：', options: ['an article', 'an arrowhead', 'an attic'], answer: 'an article', explain: '条款' }
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['item'] },
  });

  D('articulate', {
    etymology: {
      origin: '与 article 同族，拉丁语「分成清楚的关节」，引申为表达清楚',
      root: { text: 'articulus', gloss: '分节清楚' },
      history: [
        { label: '本指关节分明', text: '本指关节分明' },
        { label: '现代多指口齿或思路清楚，动词是把意思说清楚', text: '现代多指口齿或思路清楚，动词是把意思说清楚' },
      ],
      mnemonic: '形容词 articulate 是能说清楚；动词 to articulate 是表述',
      note: '动词重音常在倒数第二音节，形容词多在第二音节，课堂先抓词性',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She is articulate even when the question is hostile.', chinese: '即使问题带有敌意，她仍表达清楚。' }],
    contexts: [{
      domain: '演讲',
      senseId: 'articulate.s1',
      en: 'The engineer articulated the risk in one plain sentence.',
      zh: '工程师用一句明白话把风险说清楚了。',
      structure: 'The engineer articulated the risk in one plain sentence.',
      grammar: '教学例句，用来固定 articulate 的常见用法。',
      rationale: '形容词后不再加 to speak 来凑结构',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He is articulate to speak.',
      right: 'He is articulate.',
      reason: '形容词后不再加 to speak 来凑结构',
      rule: '形容词后不再加 to speak 来凑结构',
      special: '动词重音常在倒数第二音节，形容词多在第二音节，课堂先抓词性',
    }],
    quiz: [
      { id: 'articulate.q1', senseId: 'articulate.s1', errorType: 'meaning', type: '词义', prompt: 'A speaker who explains ideas clearly is _____.', options: ['articulate', 'artificial', 'artillery'], answer: 'articulate', explain: '口齿清楚' },
      { id: 'articulate.q2', senseId: 'articulate.s1', errorType: 'meaning', type: '词义', prompt: 'To say an idea clearly is to _____ it.', options: ['articulate', 'artless', 'ashore'], answer: 'articulate', explain: '动词' },
      { id: 'articulate.q3', senseId: 'articulate.s1', errorType: 'meaning', type: '词义', prompt: 'articulate 不要理解成：', options: ['假的', '动脉', '箭'], answer: '假的', explain: '假的是 artificial' },
      { id: 'articulate.q4', senseId: 'articulate.s1', errorType: 'meaning', type: '词义', prompt: 'Which is a person?', options: ['an articulate witness', 'an arterial witness', 'an artless artery'], answer: 'an articulate witness', explain: '能说清的证人' }
    ],
    usage: { domains: ['演讲'], tone: '中性', commonConfusion: ['artificial'] },
  });

  D('articulation', {
    etymology: {
      origin: '英语派生：articulate 加名词后缀 -ion',
      root: { text: 'articulate + -ion', gloss: '表达；连接' },
      history: [
        { label: '由动词变成「表达这一动作」', text: '由动词变成「表达这一动作」' },
        { label: '也可指关节或零件怎样连上并能活动', text: '也可指关节或零件怎样连上并能活动' },
      ],
      mnemonic: '-ion 把动词收成名词',
      note: '两义靠语境：讲话或机械',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Her articulation of the plan satisfied the committee.', chinese: '她对计划的表述让委员会满意。' }],
    contexts: [{
      domain: '学术',
      senseId: 'articulation.s1',
      en: 'Poor articulation of the knee followed the fall.',
      zh: '跌倒之后膝关节活动不顺。',
      structure: 'Poor articulation of the knee followed the fall.',
      grammar: '教学例句，用来固定 articulation 的常见用法。',
      rationale: '名词不直接接动词原形',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'His articulation is speak well.',
      right: 'His articulation is clear.',
      reason: '名词不直接接动词原形',
      rule: '名词不直接接动词原形',
      special: '两义靠语境：讲话或机械',
    }],
    quiz: [
      { id: 'articulation.q1', senseId: 'articulation.s1', errorType: 'meaning', type: '词义', prompt: 'The noun of articulate is _____.', options: ['articulation', 'artillery', 'artery'], answer: 'articulation', explain: '名词' },
      { id: 'articulation.q2', senseId: 'articulation.s1', errorType: 'meaning', type: '词义', prompt: 'Clear _____ of a rule helps students.', options: ['articulation', 'arrowhead', 'ash'], answer: 'articulation', explain: '表述' },
      { id: 'articulation.q3', senseId: 'articulation.s1', errorType: 'meaning', type: '词义', prompt: 'A joint\'s movement can be called its _____.', options: ['articulation', 'auction', 'aunt'], answer: 'articulation', explain: '连接活动' },
      { id: 'articulation.q4', senseId: 'articulation.s1', errorType: 'meaning', type: '词义', prompt: '-ion 的作用是：', options: ['构成名词', '构成副词', '表示否定'], answer: '构成名词', explain: '后缀' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['articulate'] },
  });

  D('artifact', {
    etymology: {
      origin: 'artefact 的美式拼写，同指人工制品或假象',
      root: { text: 'artefact', gloss: '美式拼写' },
      history: [
        { label: '与 artefact 同词', text: '与 artefact 同词' },
        { label: '科技英语里也指不该出现的测量假象', text: '科技英语里也指不该出现的测量假象' },
      ],
      mnemonic: '看到 artifact 先判断是文物还是误差',
      note: '英式课堂拼写作 artefact 同样正确',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The scan showed an artifact, not a real tumour.', chinese: '扫描显示的是伪影，不是真的肿瘤。' }],
    contexts: [{
      domain: '科技',
      senseId: 'artifact.s1',
      en: 'The lab repeated the test because the spike was only an artifact.',
      zh: '实验室重做了测试，因为那个尖峰只是假象。',
      structure: 'The lab repeated the test because the spike was only an artifact.',
      grammar: '教学例句，用来固定 artifact 的常见用法。',
      rationale: '要么是人造物，要么是方法造成的假象',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The artifact was a natural mountain.',
      right: 'The artifact was made by a process, not by nature alone.',
      reason: '要么是人造物，要么是方法造成的假象',
      rule: '要么是人造物，要么是方法造成的假象',
      special: '英式课堂拼写作 artefact 同样正确',
    }],
    quiz: [
      { id: 'artifact.q1', senseId: 'artifact.s1', errorType: 'meaning', type: '词义', prompt: '美式拼写 artifact 等于英式 _____.', options: ['artefact', 'artist', 'ascent'], answer: 'artefact', explain: '同一词' },
      { id: 'artifact.q2', senseId: 'artifact.s1', errorType: 'meaning', type: '词义', prompt: 'A false mark on a scan is an _____.', options: ['artifact', 'asthma word', 'avenue'], answer: 'artifact', explain: '假象' },
      { id: 'artifact.q3', senseId: 'artifact.s1', errorType: 'meaning', type: '词义', prompt: 'An old handmade tool is an _____.', options: ['artifact', 'atom', 'axis'], answer: 'artifact', explain: '人工制品' },
      { id: 'artifact.q4', senseId: 'artifact.s1', errorType: 'meaning', type: '词义', prompt: '不要把它当成：', options: ['艺术家', '动脉', '秋天'], answer: '艺术家', explain: 'artist 才是人' }
    ],
    usage: { domains: ['科技'], tone: '中性', commonConfusion: ['artefact'] },
  });

  D('artificial', {
    etymology: {
      origin: '拉丁语 artificialis，由「技艺做出」而来，对自然或真诚',
      root: { text: 'artificium', gloss: '人为的' },
      history: [
        { label: '相对 natural', text: '相对 natural' },
        { label: '也可指笑容、客气并非发自内心', text: '也可指笑容、客气并非发自内心' },
      ],
      mnemonic: 'artificial 是假的或人造的；articulate 是说得清楚',
      note: '副词 artificially，名词 artificiality',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The lake is artificial, fed by a pump.', chinese: '这个湖是人工的，靠水泵补水。' }],
    contexts: [{
      domain: '日常',
      senseId: 'artificial.s1',
      en: 'An artificial smile did not hide her anger.',
      zh: '假笑没有掩住她的怒气。',
      structure: 'An artificial smile did not hide her anger.',
      grammar: '教学例句，用来固定 artificial 的常见用法。',
      rationale: '不必再加 from plastic，除非要说明材料',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The flower is artificial from plastic.',
      right: 'The flower is artificial.',
      reason: '不必再加 from plastic，除非要说明材料',
      rule: '不必再加 from plastic，除非要说明材料',
      special: '副词 artificially，名词 artificiality',
    }],
    quiz: [
      { id: 'artificial.q1', senseId: 'artificial.s1', errorType: 'meaning', type: '词义', prompt: 'A plastic flower is _____.', options: ['artificial', 'articulate', 'artless'], answer: 'artificial', explain: '人造' },
      { id: 'artificial.q2', senseId: 'artificial.s1', errorType: 'meaning', type: '词义', prompt: 'A smile that is not sincere is _____.', options: ['artificial', 'arterial', 'artistic'], answer: 'artificial', explain: '不真诚' },
      { id: 'artificial.q3', senseId: 'artificial.s1', errorType: 'meaning', type: '词义', prompt: '反义常是 _____.', options: ['natural', 'atomic', 'awful'], answer: 'natural', explain: '自然' },
      { id: 'artificial.q4', senseId: 'artificial.s1', errorType: 'meaning', type: '词义', prompt: 'artificial 不是：', options: ['口齿清楚', '箭镞', '姑母'], answer: '口齿清楚', explain: '那是 articulate' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['natural'] },
  });

  D('artificiality', {
    etymology: {
      origin: '英语派生：artificial 加 -ity，表示「人造、做作」这种性质',
      root: { text: 'artificial + -ity', gloss: '人为性；做作' },
      history: [
        { label: '-ity 构成抽象名词', text: '-ity 构成抽象名词' },
        { label: '用来批评不自然的举止或布景', text: '用来批评不自然的举止或布景' },
      ],
      mnemonic: '名词，不可数居多',
      note: '不要和 artificially 副词相混',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The artificiality of the set spoiled the play.', chinese: '布景的假气毁了这出戏。' }],
    contexts: [{
      domain: '评论',
      senseId: 'artificiality.s1',
      en: 'Critics complained about the artificiality of the happy ending.',
      zh: '评论者抱怨这个圆满结局太做作。',
      structure: 'Critics complained about the artificiality of the happy ending.',
      grammar: '教学例句，用来固定 artificiality 的常见用法。',
      rationale: '性质名词不直接当动词用',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'His artificiality smiled.',
      right: 'The artificiality of his smile was obvious.',
      reason: '性质名词不直接当动词用',
      rule: '性质名词不直接当动词用',
      special: '不要和 artificially 副词相混',
    }],
    quiz: [
      { id: 'artificiality.q1', senseId: 'artificiality.s1', errorType: 'meaning', type: '词义', prompt: 'The noun for being artificial is _____.', options: ['artificiality', 'artillery', 'astronomy'], answer: 'artificiality', explain: '名词' },
      { id: 'artificiality.q2', senseId: 'artificiality.s1', errorType: 'meaning', type: '词义', prompt: '-ity 把形容词变成：', options: ['名词', '副词', '介词'], answer: '名词', explain: '词性' },
      { id: 'artificiality.q3', senseId: 'artificiality.s1', errorType: 'meaning', type: '词义', prompt: 'A staged scene may show _____.', options: ['artificiality', 'ascent', 'ash'], answer: 'artificiality', explain: '做作' },
      { id: 'artificiality.q4', senseId: 'artificiality.s1', errorType: 'meaning', type: '词义', prompt: '副词形式是：', options: ['artificially', 'artificiality', 'artisan'], answer: 'artificially', explain: '-ly' }
    ],
    usage: { domains: ['评论'], tone: '中性', commonConfusion: ['artificial'] },
  });

  D('artificially', {
    etymology: {
      origin: '英语派生：artificial 加 -ly',
      root: { text: 'artificial + -ly', gloss: '人为地' },
      history: [
        { label: '副词修饰动词或形容词', text: '副词修饰动词或形容词' },
        { label: '强调不是自然发生', text: '强调不是自然发生' },
      ],
      mnemonic: '-ly 副词',
      note: '修饰价格、味道、繁殖方式等',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The price was kept artificially low.', chinese: '价格被人为维持在低位。' }],
    contexts: [{
      domain: '经济',
      senseId: 'artificially.s1',
      en: 'The fruit was artificially ripened before it reached the shop.',
      zh: '水果在到店前被人工催熟。',
      structure: 'The fruit was artificially ripened before it reached the shop.',
      grammar: '教学例句，用来固定 artificially 的常见用法。',
      rationale: '副词不能单独作表语代替形容词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The lake was artificially.',
      right: 'The lake was artificially made.',
      reason: '副词不能单独作表语代替形容词',
      rule: '副词不能单独作表语代替形容词',
      special: '修饰价格、味道、繁殖方式等',
    }],
    quiz: [
      { id: 'artificially.q1', senseId: 'artificially.s1', errorType: 'meaning', type: '词义', prompt: 'Prices were kept _____ low.', options: ['artificially', 'artificiality', 'artisan'], answer: 'artificially', explain: '副词' },
      { id: 'artificially.q2', senseId: 'artificially.s1', errorType: 'meaning', type: '词义', prompt: 'Fruit can be _____ ripened.', options: ['artificially', 'artless', 'ashore'], answer: 'artificially', explain: '人为地' },
      { id: 'artificially.q3', senseId: 'artificially.s1', errorType: 'meaning', type: '词义', prompt: '形容词是 _____.', options: ['artificial', 'artillery', 'axis'], answer: 'artificial', explain: '原词' },
      { id: 'artificially.q4', senseId: 'artificially.s1', errorType: 'meaning', type: '词义', prompt: 'artificially 的词性是：', options: ['副词', '名词', '冠词'], answer: '副词', explain: '-ly' }
    ],
    usage: { domains: ['经济'], tone: '中性', commonConfusion: ['artificial'] },
  });

  D('artillery', {
    etymology: {
      origin: '法语系统里指重炮及使用它们的兵种，不要拆成 art',
      root: { text: 'artillery', gloss: '火炮；炮兵' },
      history: [
        { label: '军语', text: '军语' },
        { label: '集合概念，常作不可数', text: '集合概念，常作不可数' },
      ],
      mnemonic: '和 artery「动脉」只是形近',
      note: 'the artillery 可指炮兵部队',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Artillery hit the bridge before dawn.', chinese: '炮火在黎明前击中了大桥。' }],
    contexts: [{
      domain: '军事',
      senseId: 'artillery.s1',
      en: 'The museum displays artillery from two wars.',
      zh: '博物馆展出两次战争中的火炮。',
      structure: 'The museum displays artillery from two wars.',
      grammar: '教学例句，用来固定 artillery 的常见用法。',
      rationale: '运血的是 artery',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'An artillery carries blood.',
      right: 'An artery carries blood.',
      reason: '运血的是 artery',
      rule: '运血的是 artery',
      special: 'the artillery 可指炮兵部队',
    }],
    quiz: [
      { id: 'artillery.q1', senseId: 'artillery.s1', errorType: 'meaning', type: '词义', prompt: 'Heavy guns are _____.', options: ['artillery', 'artery', 'article'], answer: 'artillery', explain: '火炮' },
      { id: 'artillery.q2', senseId: 'artillery.s1', errorType: 'meaning', type: '词义', prompt: 'The branch that fires those guns is the _____.', options: ['artillery', 'artist', 'ash'], answer: 'artillery', explain: '兵种' },
      { id: 'artillery.q3', senseId: 'artillery.s1', errorType: 'meaning', type: '词义', prompt: '不要和 artery 混淆，artery 是：', options: ['血管或干道', '图画', '姑母'], answer: '血管或干道', explain: '形近词' },
      { id: 'artillery.q4', senseId: 'artillery.s1', errorType: 'meaning', type: '词义', prompt: 'artillery 通常：', options: ['不可数或集合', '永远指一个人', '冠词'], answer: '不可数或集合', explain: '部队或炮' }
    ],
    usage: { domains: ['军事'], tone: '中性', commonConfusion: ['artery'] },
  });

  D('artisan', {
    etymology: {
      origin: '法语 artisan，指受过专门训练、用手制作的工匠',
      root: { text: 'artisan', gloss: '工匠' },
      history: [
        { label: '强调手艺而非工厂流水线', text: '强调手艺而非工厂流水线' },
        { label: '可作定语：artisan bread 手工面包', text: '可作定语：artisan bread 手工面包' },
      ],
      mnemonic: 'artisan 是人；artifact 是物件',
      note: '比 artist 更偏实用手艺',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The artisan repaired the chair without nails.', chinese: '工匠没用钉子就把椅子修好了。' }],
    contexts: [{
      domain: '职业',
      senseId: 'artisan.s1',
      en: 'An artisan bakery still shapes each loaf by hand.',
      zh: '一家手工面包店仍用手整形每条面包。',
      structure: 'An artisan bakery still shapes each loaf by hand.',
      grammar: '教学例句，用来固定 artisan 的常见用法。',
      rationale: '人，不是机器',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The artisan was a machine.',
      right: 'The artisan shaped the bowl by hand.',
      reason: '人，不是机器',
      rule: '人，不是机器',
      special: '比 artist 更偏实用手艺',
    }],
    quiz: [
      { id: 'artisan.q1', senseId: 'artisan.s1', errorType: 'meaning', type: '词义', prompt: 'A skilled hand-worker is an _____.', options: ['artisan', 'artifact', 'artery'], answer: 'artisan', explain: '工匠' },
      { id: 'artisan.q2', senseId: 'artisan.s1', errorType: 'meaning', type: '词义', prompt: 'artisan bread means bread made _____.', options: ['by hand in a traditional way', 'by artillery', 'by accident only'], answer: 'by hand in a traditional way', explain: '手工' },
      { id: 'artisan.q3', senseId: 'artisan.s1', errorType: 'meaning', type: '词义', prompt: 'artifact 是物，artisan 是：', options: ['人', '月份', '轴线'], answer: '人', explain: '人' },
      { id: 'artisan.q4', senseId: 'artisan.s1', errorType: 'meaning', type: '词义', prompt: '不要写成：', options: ['artist 的错误拼写就一定同义', 'artery', 'audit'], answer: 'artist 的错误拼写就一定同义', explain: 'artist 偏美术' }
    ],
    usage: { domains: ['职业'], tone: '中性', commonConfusion: ['artist'] },
  });

  D('artist', {
    etymology: {
      origin: '英语派生：art 加 -ist，指从事艺术的人',
      root: { text: 'art + -ist', gloss: '艺术家' },
      history: [
        { label: '-ist 表示从事者', text: '-ist 表示从事者' },
        { label: '尤其指绘画、雕塑等', text: '尤其指绘画、雕塑等' },
      ],
      mnemonic: 'artist 创作艺术；artisan 多指手工艺人',
      note: '复数 artists',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The artist mixed the colours on a glass plate.', chinese: '艺术家在玻璃板上调色。' }],
    contexts: [{
      domain: '艺术',
      senseId: 'artist.s1',
      en: 'Every artist in the show signed the wall beside the work.',
      zh: '参展的每位艺术家都在作品旁的墙上签了名。',
      structure: 'Every artist in the show signed the wall beside the work.',
      grammar: '教学例句，用来固定 artist 的常见用法。',
      rationale: '修实用器物更自然的是 artisan，虽有交叉',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The artist of the chair fixed the leg.',
      right: 'The artisan of the workshop fixed the leg.',
      reason: '修实用器物更自然的是 artisan，虽有交叉',
      rule: '修实用器物更自然的是 artisan，虽有交叉',
      special: '复数 artists',
    }],
    quiz: [
      { id: 'artist.q1', senseId: 'artist.s1', errorType: 'meaning', type: '词义', prompt: 'A person who paints for a living is an _____.', options: ['artist', 'artery', 'article'], answer: 'artist', explain: '画家等' },
      { id: 'artist.q2', senseId: 'artist.s1', errorType: 'meaning', type: '词义', prompt: '-ist 常表示：', options: ['从事某事的人', '否定', '地点'], answer: '从事某事的人', explain: '后缀' },
      { id: 'artist.q3', senseId: 'artist.s1', errorType: 'meaning', type: '词义', prompt: 'The object made is not the _____.', options: ['artist', 'axis', 'aunt'], answer: 'artist', explain: '人' },
      { id: 'artist.q4', senseId: 'artist.s1', errorType: 'meaning', type: '词义', prompt: 'artisan 更强调：', options: ['手艺制作', '动脉', '审计'], answer: '手艺制作', explain: '对比' }
    ],
    usage: { domains: ['艺术'], tone: '中性', commonConfusion: ['artisan'] },
  });

  D('artistic', {
    etymology: {
      origin: '英语派生：artist 或 art 加 -ic',
      root: { text: 'art + -ic', gloss: '艺术的；有美感的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '可指作品风格，也可指人有艺术眼光', text: '可指作品风格，也可指人有艺术眼光' },
      ],
      mnemonic: '-ic 形容词',
      note: '副词 artistically',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The poster has an artistic use of empty space.', chinese: '这张海报对留白的运用很有美感。' }],
    contexts: [{
      domain: '设计',
      senseId: 'artistic.s1',
      en: 'Her artistic sense showed in the way she set the table.',
      zh: '她的艺术感觉体现在摆台方式上。',
      structure: 'Her artistic sense showed in the way she set the table.',
      grammar: '教学例句，用来固定 artistic 的常见用法。',
      rationale: '不表示动脉',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He is artistic in blood.',
      right: 'He has an artistic eye.',
      reason: '不表示动脉',
      rule: '不表示动脉',
      special: '副词 artistically',
    }],
    quiz: [
      { id: 'artistic.q1', senseId: 'artistic.s1', errorType: 'meaning', type: '词义', prompt: 'The design is _____.', options: ['artistic', 'artillery', 'artificial only if fake'], answer: 'artistic', explain: '有艺术性' },
      { id: 'artistic.q2', senseId: 'artistic.s1', errorType: 'meaning', type: '词义', prompt: 'A person with a good eye for beauty may be _____.', options: ['artistic', 'ashamed', 'asleep'], answer: 'artistic', explain: '有美感' },
      { id: 'artistic.q3', senseId: 'artistic.s1', errorType: 'meaning', type: '词义', prompt: '假花是 artificial，美的构图是 _____.', options: ['artistic', 'atomic', 'awful'], answer: 'artistic', explain: '艺术的' },
      { id: 'artistic.q4', senseId: 'artistic.s1', errorType: 'meaning', type: '词义', prompt: '-ic 的词性是：', options: ['形容词', '名词复数', '介词'], answer: '形容词', explain: '后缀' }
    ],
    usage: { domains: ['设计'], tone: '中性', commonConfusion: ['artificial'] },
  });

  D('artless', {
    etymology: {
      origin: '英语派生：art 加否定后缀 -less，本指不耍手法',
      root: { text: 'art + -less', gloss: '朴实的；不矫饰的' },
      history: [
        { label: '-less 表没有', text: '-less 表没有' },
        { label: '褒义时是天真坦白，不是「没有艺术」', text: '褒义时是天真坦白，不是「没有艺术」' },
      ],
      mnemonic: '不要理解成「不艺术的」去骂作品差',
      note: '多用来形容人的坦白，不是评价作品差。',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The child\'s artless answer made the room quiet.', chinese: '孩子那句不加修饰的回答让房间安静下来。' }],
    contexts: [{
      domain: '人物',
      senseId: 'artless.s1',
      en: 'His artless honesty was more useful than a clever speech.',
      zh: '他那种不加掩饰的诚实比巧妙发言更有用。',
      structure: 'His artless honesty was more useful than a clever speech.',
      grammar: '教学例句，用来固定 artless 的常见用法。',
      rationale: 'artless 多形容人或态度',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The painting is artless so it is ugly.',
      right: 'The painting is plain, but artless describes a person who is not scheming.',
      reason: 'artless 多形容人或态度',
      rule: 'artless 多形容人或态度',
      special: '多用来形容人的坦白，不是评价作品差。',
    }],
    quiz: [
      { id: 'artless.q1', senseId: 'artless.s1', errorType: 'meaning', type: '词义', prompt: 'A person who does not scheme is _____.', options: ['artless', 'artificial', 'artillery'], answer: 'artless', explain: '不耍心机' },
      { id: 'artless.q2', senseId: 'artless.s1', errorType: 'meaning', type: '词义', prompt: '-less 表示：', options: ['没有', '很多', '再次'], answer: '没有', explain: '否定' },
      { id: 'artless.q3', senseId: 'artless.s1', errorType: 'meaning', type: '词义', prompt: '做作的反方向可以是：', options: ['artless', 'atomic', 'average only'], answer: 'artless', explain: '不矫饰' },
      { id: 'artless.q4', senseId: 'artless.s1', errorType: 'meaning', type: '词义', prompt: 'artless 不是：', options: ['没有动脉', '箭坏了', '审计失败'], answer: '没有动脉', explain: '与 artery 无关' }
    ],
    usage: { domains: ['人物'], tone: '中性', commonConfusion: ['artificial'] },
  });

  D('artwork', {
    etymology: {
      origin: '英语派生：art 加 work，指作品或版面图稿',
      root: { text: 'art + work', gloss: '艺术作品；图稿' },
      history: [
        { label: '复合名词', text: '复合名词' },
        { label: '印刷业里 artwork 也指付印的图文', text: '印刷业里 artwork 也指付印的图文' },
      ],
      mnemonic: '可数或不可数视语境',
      note: '一件作品也常说 a piece of artwork',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The artwork on the cover was drawn by a student.', chinese: '封面上的图是一名学生画的。' }],
    contexts: [{
      domain: '出版',
      senseId: 'artwork.s1',
      en: 'Please send the artwork as a single file before Friday.',
      zh: '请在周五前把图稿作为单个文件发来。',
      structure: 'Please send the artwork as a single file before Friday.',
      grammar: '教学例句，用来固定 artwork 的常见用法。',
      rationale: '修椅子的是工匠不是图稿',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The artwork fixed the chair.',
      right: 'The artisan fixed the chair.',
      reason: '修椅子的是工匠不是图稿',
      rule: '修椅子的是工匠不是图稿',
      special: '一件作品也常说 a piece of artwork',
    }],
    quiz: [
      { id: 'artwork.q1', senseId: 'artwork.s1', errorType: 'meaning', type: '词义', prompt: 'Pictures for a book are the _____.', options: ['artwork', 'artery', 'artillery'], answer: 'artwork', explain: '图稿' },
      { id: 'artwork.q2', senseId: 'artwork.s1', errorType: 'meaning', type: '词义', prompt: 'A painting can be called _____.', options: ['artwork', 'ash', 'axe'], answer: 'artwork', explain: '作品' },
      { id: 'artwork.q3', senseId: 'artwork.s1', errorType: 'meaning', type: '词义', prompt: 'artwork 是：', options: ['art 加 work', '动脉加头', '炮加工作'], answer: 'art 加 work', explain: '复合词' },
      { id: 'artwork.q4', senseId: 'artwork.s1', errorType: 'meaning', type: '词义', prompt: '不要和 artist 混淆，artist 是：', options: ['人', '文件', '月份'], answer: '人', explain: '人' }
    ],
    usage: { domains: ['出版'], tone: '中性', commonConfusion: ['artist'] },
  });

  D('as', {
    etymology: {
      origin: '古英语功能词，用来比较、表示身份或原因，课堂不拆假词根',
      root: { text: 'as', gloss: '如同；作为；因为' },
      history: [
        { label: '功能词', text: '功能词' },
        { label: '比较、角色、时间或原因都靠句型区分', text: '比较、角色、时间或原因都靠句型区分' },
      ],
      mnemonic: 'as 的意思由句型决定，不要单背一个中文',
      note: 'as...as 表同等比较',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She works as a nurse three nights a week.', chinese: '她每周有三个晚上做护士。' }],
    contexts: [{
      domain: '语法',
      senseId: 'as.s1',
      en: 'As the road was icy, the bus left late.',
      zh: '因为路滑，公交车晚点发车。',
      structure: 'As the road was icy, the bus left late.',
      grammar: '教学例句，用来固定 as 的常见用法。',
      rationale: '身份用 as，不是 like',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She works like a nurse in the hospital staff list.',
      right: 'She works as a nurse.',
      reason: '身份用 as，不是 like',
      rule: '身份用 as，不是 like',
      special: 'as...as 表同等比较',
    }],
    quiz: [
      { id: 'as.q1', senseId: 'as.s1', errorType: 'meaning', type: '词义', prompt: 'She works _____ a guide.', options: ['as', 'ash', 'axe'], answer: 'as', explain: '身份' },
      { id: 'as.q2', senseId: 'as.s1', errorType: 'meaning', type: '词义', prompt: '_____ it rained, we stayed in.', options: ['As', 'Aunt', 'Atom'], answer: 'As', explain: '因为' },
      { id: 'as.q3', senseId: 'as.s1', errorType: 'meaning', type: '词义', prompt: 'He is not _____ tall as his sister.', options: ['as', 'at', 'aye'], answer: 'as', explain: 'as...as' },
      { id: 'as.q4', senseId: 'as.s1', errorType: 'meaning', type: '词义', prompt: 'as 是：', options: ['功能词', '火炮', '细菌'], answer: '功能词', explain: '不拆词根' }
    ],
    usage: { domains: ['语法'], tone: '中性', commonConfusion: ['like'] },
  });

  D('as for', {
    etymology: {
      origin: '英语短语：as for，用来转入另一个话题',
      root: { text: 'as for', gloss: '至于' },
      history: [
        { label: '话语标记', text: '话语标记' },
        { label: '把话题换到新的人或事上', text: '把话题换到新的人或事上' },
      ],
      mnemonic: '后面接名词或动名词',
      note: '常带一点「至于那个」的转话题口气',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'As for the budget, we can talk tomorrow.', chinese: '至于预算，我们可以明天再谈。' }],
    contexts: [{
      domain: '口语',
      senseId: 'as for.s1',
      en: 'As for lunch, there is soup in the kitchen.',
      zh: '至于午饭，厨房里有汤。',
      structure: 'As for lunch, there is soup in the kitchen.',
      grammar: '教学例句，用来固定 as for 的常见用法。',
      rationale: '后面用人称代词宾格',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'As for she, she agreed.',
      right: 'As for her, she agreed.',
      reason: '后面用人称代词宾格',
      rule: '后面用人称代词宾格',
      special: '常带一点「至于那个」的转话题口气',
    }],
    quiz: [
      { id: 'as for.q1', senseId: 'as for.s1', errorType: 'meaning', type: '词义', prompt: '_____ the tickets, I have already bought them.', options: ['As for', 'As soon as', 'Aside'], answer: 'As for', explain: '至于' },
      { id: 'as for.q2', senseId: 'as for.s1', errorType: 'meaning', type: '词义', prompt: 'As for 后面接：', options: ['名词或动名词', '一个完整原因从句必须用 because 才对等', '只能接动词原形'], answer: '名词或动名词', explain: '短语' },
      { id: 'as for.q3', senseId: 'as for.s1', errorType: 'meaning', type: '词义', prompt: 'As for him 里 him 用宾格，不用：', options: ['he', 'him 的错误主格 he', 'axis'], answer: 'he', explain: '宾格' },
      { id: 'as for.q4', senseId: 'as for.s1', errorType: 'meaning', type: '词义', prompt: 'as for 的作用是：', options: ['转换话题', '表示一……就', '表示也'], answer: '转换话题', explain: '话语标记' }
    ],
    usage: { domains: ['口语'], tone: '中性', commonConfusion: ['as to'] },
  });

  D('as soon as', {
    etymology: {
      origin: '英语短语：as soon as，表示一件事紧接着另一件',
      root: { text: 'as soon as', gloss: '一……就' },
      history: [
        { label: '时间连词短语', text: '时间连词短语' },
        { label: '引导时间状语从句', text: '引导时间状语从句' },
      ],
      mnemonic: '从句里用现在时表将来',
      note: '主句将来，从句现在',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I will call you as soon as I land.', chinese: '我一落地就给你打电话。' }],
    contexts: [{
      domain: '语法',
      senseId: 'as soon as.s1',
      en: 'As soon as the bell rang, the students stood up.',
      zh: '铃一响，学生们就站了起来。',
      structure: 'As soon as the bell rang, the students stood up.',
      grammar: '教学例句，用来固定 as soon as 的常见用法。',
      rationale: '时间从句不用 will',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I will call you as soon as I will land.',
      right: 'I will call you as soon as I land.',
      reason: '时间从句不用 will',
      rule: '时间从句不用 will',
      special: '主句将来，从句现在',
    }],
    quiz: [
      { id: 'as soon as.q1', senseId: 'as soon as.s1', errorType: 'meaning', type: '词义', prompt: 'Call me _____ you arrive.', options: ['as soon as', 'as for', 'as well'], answer: 'as soon as', explain: '一……就' },
      { id: 'as soon as.q2', senseId: 'as soon as.s1', errorType: 'meaning', type: '词义', prompt: 'As soon as the rain _____, we left.', options: ['stopped', 'will stop', 'stopping'], answer: 'stopped', explain: '从句过去式' },
      { id: 'as soon as.q3', senseId: 'as soon as.s1', errorType: 'meaning', type: '词义', prompt: '将来意图：I will leave as soon as she _____.', options: ['comes', 'will come', 'came'], answer: 'comes', explain: '从句现在时' },
      { id: 'as soon as.q4', senseId: 'as soon as.s1', errorType: 'meaning', type: '词义', prompt: 'as soon as 表示：', options: ['紧接着', '至于', '也'], answer: '紧接着', explain: '时间' }
    ],
    usage: { domains: ['语法'], tone: '中性', commonConfusion: ['when'] },
  });

  D('as to', {
    etymology: {
      origin: '英语短语：as to，关于某一点，语气偏正式',
      root: { text: 'as to', gloss: '关于' },
      history: [
        { label: '正式', text: '正式' },
        { label: '常接名词或 wh- 从句', text: '常接名词或 wh- 从句' },
      ],
      mnemonic: 'as to 多接事情，as for 多换话题到人或事',
      note: '疑问从句用 whether、what 等',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She asked as to whether the gate was locked.', chinese: '她询问大门是否锁上了。' }],
    contexts: [{
      domain: '书面',
      senseId: 'as to.s1',
      en: 'There is some doubt as to what caused the delay.',
      zh: '对于延误的原因还有些疑问。',
      structure: 'There is some doubt as to what caused the delay.',
      grammar: '教学例句，用来固定 as to 的常见用法。',
      rationale: '后面不是直接接一个没有引导词的句子',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'As to he left is unclear.',
      right: 'As to why he left, nothing is clear.',
      reason: '后面不是直接接一个没有引导词的句子',
      rule: '后面不是直接接一个没有引导词的句子',
      special: '疑问从句用 whether、what 等',
    }],
    quiz: [
      { id: 'as to.q1', senseId: 'as to.s1', errorType: 'meaning', type: '词义', prompt: 'Doubt remains as _____ the cause.', options: ['to', 'soon as', 'well'], answer: 'to', explain: 'as to' },
      { id: 'as to.q2', senseId: 'as to.s1', errorType: 'meaning', type: '词义', prompt: 'as to 的语气偏：', options: ['正式', '婴儿用语', '炮兵口令'], answer: '正式', explain: '书面' },
      { id: 'as to.q3', senseId: 'as to.s1', errorType: 'meaning', type: '词义', prompt: 'As to whether we can pay, _____ is sure.', options: ['nothing', 'artery', 'atom'], answer: 'nothing', explain: '仍可不确定' },
      { id: 'as to.q4', senseId: 'as to.s1', errorType: 'meaning', type: '词义', prompt: 'as for 更常用来：', options: ['另起一个话题', '计算平均数', '切木头'], answer: '另起一个话题', explain: '对比' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['as for'] },
  });

  D('as well', {
    etymology: {
      origin: '英语短语：as well，也、同样，放在句末居多',
      root: { text: 'as well', gloss: '也' },
      history: [
        { label: '副词短语', text: '副词短语' },
        { label: '意思接近 too', text: '意思接近 too' },
      ],
      mnemonic: '不说 as well as 如果只是单说「也」',
      note: '句末最常见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I bought bread and milk as well.', chinese: '我买了面包，也买了牛奶。' }],
    contexts: [{
      domain: '日常',
      senseId: 'as well.s1',
      en: 'She speaks French and German as well.',
      zh: '她会说法语，也会说德语。',
      structure: 'She speaks French and German as well.',
      grammar: '教学例句，用来固定 as well 的常见用法。',
      rationale: 'as well 通常放在句末',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I as well bought milk.',
      right: 'I bought milk as well.',
      reason: 'as well 通常放在句末',
      rule: 'as well 通常放在句末',
      special: '句末最常见',
    }],
    quiz: [
      { id: 'as well.q1', senseId: 'as well.s1', errorType: 'meaning', type: '词义', prompt: 'Bring a pen and a pencil _____.', options: ['as well', 'as for', 'as soon as'], answer: 'as well', explain: '也' },
      { id: 'as well.q2', senseId: 'as well.s1', errorType: 'meaning', type: '词义', prompt: 'as well 最常放在：', options: ['句末', '句首必须', '名词中间当冠词'], answer: '句末', explain: '位置' },
      { id: 'as well.q3', senseId: 'as well.s1', errorType: 'meaning', type: '词义', prompt: '只说「也」不要多加 as，错误是：', options: ['as well as 后面却没有另一个并列项', 'axe', 'atom'], answer: 'as well as 后面却没有另一个并列项', explain: 'as well as 要接对象' },
      { id: 'as well.q4', senseId: 'as well.s1', errorType: 'meaning', type: '词义', prompt: '近义是：', options: ['too', 'artery', 'audit'], answer: 'too', explain: '也' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['too'] },
  });

  D('as well as', {
    etymology: {
      origin: '英语短语：as well as，除……之外还，连接并列项',
      root: { text: 'as well as', gloss: '以及；除……之外' },
      history: [
        { label: '介词或连词用法', text: '介词或连词用法' },
        { label: 'A as well as B 强调 A，同时带上 B', text: 'A as well as B 强调 A，同时带上 B' },
      ],
      mnemonic: '谓语常与前面的 A 一致',
      note: '不要理解成比较级 as good',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He speaks Japanese as well as Korean.', chinese: '他会说日语，也会说韩语。' }],
    contexts: [{
      domain: '语法',
      senseId: 'as well as.s1',
      en: 'The teacher as well as the students was early.',
      zh: '老师和学生们都早到了，动词随 teacher。',
      structure: 'The teacher as well as the students was early.',
      grammar: '教学例句，用来固定 as well as 的常见用法。',
      rationale: '动词与 as well as 前的主语一致',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He as well as they is here? 若主语是 they 仍按前项',
      right: 'The teacher as well as the students was early.',
      reason: '动词与 as well as 前的主语一致',
      rule: '动词与 as well as 前的主语一致',
      special: '不要理解成比较级 as good',
    }],
    quiz: [
      { id: 'as well as.q1', senseId: 'as well as.s1', errorType: 'meaning', type: '词义', prompt: 'She plays the violin _____ the piano.', options: ['as well as', 'as soon as', 'aside'], answer: 'as well as', explain: '以及' },
      { id: 'as well as.q2', senseId: 'as well as.s1', errorType: 'meaning', type: '词义', prompt: 'The coach as well as the players _____ on the bus.', options: ['is', 'are', 'be'], answer: 'is', explain: '动词跟前项' },
      { id: 'as well as.q3', senseId: 'as well as.s1', errorType: 'meaning', type: '词义', prompt: 'as well as 不是：', options: ['一……就', '箭', '细菌'], answer: '一……就', explain: '那是 as soon as' },
      { id: 'as well as.q4', senseId: 'as well as.s1', errorType: 'meaning', type: '词义', prompt: '句末单独的「也」用：', options: ['as well', 'as well as', 'as to'], answer: 'as well', explain: '对比' }
    ],
    usage: { domains: ['语法'], tone: '中性', commonConfusion: ['as well'] },
  });

  D('ascend', {
    etymology: {
      origin: '拉丁语 ad-「向」加 scandere「攀登」',
      root: { text: 'scandere', gloss: '向上走' },
      history: [
        { label: '身体或等级向上', text: '身体或等级向上' },
        { label: '正式动词，日常更常说 go up', text: '正式动词，日常更常说 go up' },
      ],
      mnemonic: '名词是 ascent，形容词 ascending',
      note: '不及物或接宾语：ascend the stairs',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The path ascends steeply after the bridge.', chinese: '过了桥，小路陡然上升。' }],
    contexts: [{
      domain: '地理',
      senseId: 'ascend.s1',
      en: 'She ascended the stairs with the heavy box.',
      zh: '她搬着沉重的箱子上楼。',
      structure: 'She ascended the stairs with the heavy box.',
      grammar: '教学例句，用来固定 ascend 的常见用法。',
      rationale: '向上，不是向下',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The path ascended the down.',
      right: 'The path ascends.',
      reason: '向上，不是向下',
      rule: '向上，不是向下',
      special: '不及物或接宾语：ascend the stairs',
    }],
    quiz: [
      { id: 'ascend.q1', senseId: 'ascend.s1', errorType: 'meaning', type: '词义', prompt: 'To go up is to _____.', options: ['ascend', 'ascribe', 'assess'], answer: 'ascend', explain: '上升' },
      { id: 'ascend.q2', senseId: 'ascend.s1', errorType: 'meaning', type: '词义', prompt: 'The noun of ascend is _____.', options: ['ascent', 'ash', 'axe'], answer: 'ascent', explain: '名词' },
      { id: 'ascend.q3', senseId: 'ascend.s1', errorType: 'meaning', type: '词义', prompt: 'ascend the mountain 的意思是：', options: ['登山', '放弃山', '审计山'], answer: '登山', explain: '向上' },
      { id: 'ascend.q4', senseId: 'ascend.s1', errorType: 'meaning', type: '词义', prompt: '日常口语更常说：', options: ['go up', 'artillery', 'atom'], answer: 'go up', explain: '正式词' }
    ],
    usage: { domains: ['地理'], tone: '中性', commonConfusion: ['ascent'] },
  });

  D('ascending', {
    etymology: {
      origin: '英语派生：ascend 的 -ing 形式，作形容词表示向上或递增',
      root: { text: 'ascend + -ing', gloss: '上升的；递增的' },
      history: [
        { label: '由动词来', text: '由动词来' },
        { label: '顺序从小到大 in ascending order', text: '顺序从小到大 in ascending order' },
      ],
      mnemonic: '和 descending 相反',
      note: '修饰数字、楼梯、音阶',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'List the scores in ascending order.', chinese: '把分数按递增顺序排列。' }],
    contexts: [{
      domain: '数学',
      senseId: 'ascending.s1',
      en: 'We took the ascending path, not the one into the valley.',
      zh: '我们走了向上的那条路，不是进山谷的那条。',
      structure: 'We took the ascending path, not the one into the valley.',
      grammar: '教学例句，用来固定 ascending 的常见用法。',
      rationale: '递增是由小到大',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'in ascending order means from large to small.',
      right: 'in ascending order means from small to large.',
      reason: '递增是由小到大',
      rule: '递增是由小到大',
      special: '修饰数字、楼梯、音阶',
    }],
    quiz: [
      { id: 'ascending.q1', senseId: 'ascending.s1', errorType: 'meaning', type: '词义', prompt: 'Numbers from small to large are in _____ order.', options: ['ascending', 'ashamed', 'asleep'], answer: 'ascending', explain: '递增' },
      { id: 'ascending.q2', senseId: 'ascending.s1', errorType: 'meaning', type: '词义', prompt: '反方向是 _____.', options: ['descending', 'artillery', 'August'], answer: 'descending', explain: '递减' },
      { id: 'ascending.q3', senseId: 'ascending.s1', errorType: 'meaning', type: '词义', prompt: 'ascending 与动词 _____ 同族。', options: ['ascend', 'audit', 'avoid'], answer: 'ascend', explain: '动词' },
      { id: 'ascending.q4', senseId: 'ascending.s1', errorType: 'meaning', type: '词义', prompt: '-ing 在这里是：', options: ['形容词', '冠词', '月份'], answer: '形容词', explain: '词性' }
    ],
    usage: { domains: ['数学'], tone: '中性', commonConfusion: ['descending'] },
  });

  D('ascent', {
    etymology: {
      origin: '英语派生：与 ascend 对应的名词',
      root: { text: 'ascend', gloss: '上升；攀登' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可指一次攀登，也可指上升过程', text: '可指一次攀登，也可指上升过程' },
      ],
      mnemonic: '不要写成 accent「口音」',
      note: '重音在第一音节',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The ascent took four hours in the snow.', chinese: '在雪里攀登花了四个小时。' }],
    contexts: [{
      domain: '户外',
      senseId: 'ascent.s1',
      en: 'A slow ascent in prices worried the shopkeepers.',
      zh: '价格缓缓上升让店主担心。',
      structure: 'A slow ascent in prices worried the shopkeepers.',
      grammar: '教学例句，用来固定 ascent 的常见用法。',
      rationale: '攀登是 ascent，口音是 accent',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'His accent of the hill was tiring.',
      right: 'His ascent of the hill was tiring.',
      reason: '攀登是 ascent，口音是 accent',
      rule: '攀登是 ascent，口音是 accent',
      special: '重音在第一音节',
    }],
    quiz: [
      { id: 'ascent.q1', senseId: 'ascent.s1', errorType: 'meaning', type: '词义', prompt: 'The climb is an _____.', options: ['ascent', 'accent', 'asset'], answer: 'ascent', explain: '攀登' },
      { id: 'ascent.q2', senseId: 'ascent.s1', errorType: 'meaning', type: '词义', prompt: 'A rise in temperature is an _____.', options: ['ascent', 'aunt', 'atom'], answer: 'ascent', explain: '上升' },
      { id: 'ascent.q3', senseId: 'ascent.s1', errorType: 'meaning', type: '词义', prompt: '口音的拼写是：', options: ['accent', 'ascent', 'assent only if agreement'], answer: 'accent', explain: '不要混' },
      { id: 'ascent.q4', senseId: 'ascent.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['ascend', 'assess', 'assign'], answer: 'ascend', explain: '对应动词' }
    ],
    usage: { domains: ['户外'], tone: '中性', commonConfusion: ['ascend'] },
  });

  D('ascertain', {
    etymology: {
      origin: '由 as- 加强加上 certain「确定」而来，意思是查实',
      root: { text: 'certain', gloss: '查清、弄确实' },
      history: [
        { label: '书面动词', text: '书面动词' },
        { label: '强调经过了解后确定', text: '强调经过了解后确定' },
      ],
      mnemonic: '后接 that 从句或 wh- 从句',
      note: '比 find out 正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'We must ascertain whether the door was locked.', chinese: '我们必须查清门是否锁着。' }],
    contexts: [{
      domain: '调查',
      senseId: 'ascertain.s1',
      en: 'The clerk ascertained the spelling of the name before printing it.',
      zh: '办事员在打印前核实了姓名拼写。',
      structure: 'The clerk ascertained the spelling of the name before printing it.',
      grammar: '教学例句，用来固定 ascertain 的常见用法。',
      rationale: '要查清的是事实，不是随手拿一个名词凑',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Please ascertain the window.',
      right: 'Please ascertain whether the window was open.',
      reason: '要查清的是事实，不是随手拿一个名词凑',
      rule: '要查清的是事实，不是随手拿一个名词凑',
      special: '比 find out 正式',
    }],
    quiz: [
      { id: 'ascertain.q1', senseId: 'ascertain.s1', errorType: 'meaning', type: '词义', prompt: 'To find out for sure is to _____.', options: ['ascertain', 'ascend', 'ascribe'], answer: 'ascertain', explain: '查实' },
      { id: 'ascertain.q2', senseId: 'ascertain.s1', errorType: 'meaning', type: '词义', prompt: 'ascertain 的语气：', options: ['正式', '婴儿口语', '炮兵命令'], answer: '正式', explain: '书面' },
      { id: 'ascertain.q3', senseId: 'ascertain.s1', errorType: 'meaning', type: '词义', prompt: 'Please ascertain _____ the train has left.', options: ['whether', 'ascent', 'axe'], answer: 'whether', explain: 'whether 从句' },
      { id: 'ascertain.q4', senseId: 'ascertain.s1', errorType: 'meaning', type: '词义', prompt: 'certain 是同族，意思接近：', options: ['确定', '箭头', '姑母'], answer: '确定', explain: '词族' }
    ],
    usage: { domains: ['调查'], tone: '中性', commonConfusion: ['certain'] },
  });

  D('ascribe', {
    etymology: {
      origin: '拉丁语 ascribere「写到……名下」',
      root: { text: 'scribere', gloss: '把……归于' },
      history: [
        { label: '书面', text: '书面' },
        { label: 'ascribe A to B', text: 'ascribe A to B' },
      ],
      mnemonic: '原因或作者归属',
      note: '介词固定用 to',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'They ascribed the delay to the storm.', chinese: '他们把延误归咎于暴风雨。' }],
    contexts: [{
      domain: '评论',
      senseId: 'ascribe.s1',
      en: 'The poem was ascribed to an unknown monk.',
      zh: '这首诗被归于一位不知名的修士。',
      structure: 'The poem was ascribed to an unknown monk.',
      grammar: '教学例句，用来固定 ascribe 的常见用法。',
      rationale: '用 to 不用 for',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They ascribed the error for him.',
      right: 'They ascribed the error to him.',
      reason: '用 to 不用 for',
      rule: '用 to 不用 for',
      special: '介词固定用 to',
    }],
    quiz: [
      { id: 'ascribe.q1', senseId: 'ascribe.s1', errorType: 'meaning', type: '词义', prompt: 'They _____ the success to hard work.', options: ['ascribed', 'ascended', 'assessed'], answer: 'ascribed', explain: '归因' },
      { id: 'ascribe.q2', senseId: 'ascribe.s1', errorType: 'meaning', type: '词义', prompt: '介词是 ascribe something _____ someone.', options: ['to', 'for', 'at'], answer: 'to', explain: 'to' },
      { id: 'ascribe.q3', senseId: 'ascribe.s1', errorType: 'meaning', type: '词义', prompt: '把作品说成某人所写也用：', options: ['ascribe', 'ascend', 'attack'], answer: 'ascribe', explain: '归属' },
      { id: 'ascribe.q4', senseId: 'ascribe.s1', errorType: 'meaning', type: '词义', prompt: '不要和 describe 混淆，describe 是：', options: ['描写', '上升', '攻击'], answer: '描写', explain: '形近' }
    ],
    usage: { domains: ['评论'], tone: '中性', commonConfusion: ['attribute'] },
  });

  D('ash', {
    etymology: {
      origin: '古英语灰烬一词，指燃烧后留下的粉末',
      root: { text: 'ash', gloss: '灰' },
      history: [
        { label: '物质名词', text: '物质名词' },
        { label: '常说 ashes 表示一堆灰', text: '常说 ashes 表示一堆灰' },
      ],
      mnemonic: '颜色 ashen 由此而来',
      note: '烟灰、火山灰都可用',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Grey ash covered the fireplace.', chinese: '灰色的灰盖住了壁炉。' }],
    contexts: [{
      domain: '日常',
      senseId: 'ash.s1',
      en: 'Volcanic ash closed the airport for a day.',
      zh: '火山灰使机场关闭了一天。',
      structure: 'Volcanic ash closed the airport for a day.',
      grammar: '教学例句，用来固定 ash 的常见用法。',
      rationale: '灰是燃烧残留',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The ash was a green tree.',
      right: 'Ash is what remains after burning.',
      reason: '灰是燃烧残留',
      rule: '灰是燃烧残留',
      special: '烟灰、火山灰都可用',
    }],
    quiz: [
      { id: 'ash.q1', senseId: 'ash.s1', errorType: 'meaning', type: '词义', prompt: 'Powder left by fire is _____.', options: ['ash', 'art', 'awe'], answer: 'ash', explain: '灰' },
      { id: 'ash.q2', senseId: 'ash.s1', errorType: 'meaning', type: '词义', prompt: 'A pale face like ash is _____.', options: ['ashen', 'atomic', 'awful only'], answer: 'ashen', explain: '苍白' },
      { id: 'ash.q3', senseId: 'ash.s1', errorType: 'meaning', type: '词义', prompt: '火山灰是 volcanic _____.', options: ['ash', 'axe', 'axis'], answer: 'ash', explain: 'ash' },
      { id: 'ash.q4', senseId: 'ash.s1', errorType: 'meaning', type: '词义', prompt: 'ash 不是：', options: ['艺术', '姑母', '轴线'], answer: '艺术', explain: 'art 形近' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['ashen'] },
  });

  D('ashamed', {
    etymology: {
      origin: '英语派生：a- 加 shame「羞耻」',
      root: { text: 'shame', gloss: '感到羞耻的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '人作主语，be ashamed of', text: '人作主语，be ashamed of' },
      ],
      mnemonic: '不是用来直接修饰「可耻的行为」本身，那是 shameful',
      note: 'ashamed 是人的感受',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She was ashamed of the lie.', chinese: '她为那个谎言感到羞耻。' }],
    contexts: [{
      domain: '情感',
      senseId: 'ashamed.s1',
      en: 'He felt ashamed after shouting at the child.',
      zh: '他对孩子吼过之后感到羞愧。',
      structure: 'He felt ashamed after shouting at the child.',
      grammar: '教学例句，用来固定 ashamed 的常见用法。',
      rationale: '固定 of',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He was ashamed for the lie.',
      right: 'He was ashamed of the lie.',
      reason: '固定 of',
      rule: '固定 of',
      special: 'ashamed 是人的感受',
    }],
    quiz: [
      { id: 'ashamed.q1', senseId: 'ashamed.s1', errorType: 'meaning', type: '词义', prompt: 'She was _____ of cheating.', options: ['ashamed', 'ashen', 'asleep'], answer: 'ashamed', explain: '羞耻' },
      { id: 'ashamed.q2', senseId: 'ashamed.s1', errorType: 'meaning', type: '词义', prompt: '可耻的行为用 _____ .', options: ['shameful', 'ashamed', 'ashore'], answer: 'shameful', explain: '行为本身' },
      { id: 'ashamed.q3', senseId: 'ashamed.s1', errorType: 'meaning', type: '词义', prompt: 'ashamed 的主语通常是：', options: ['人', '灰', '箭'], answer: '人', explain: '感受' },
      { id: 'ashamed.q4', senseId: 'ashamed.s1', errorType: 'meaning', type: '词义', prompt: '介词是：', options: ['of', 'at the ash', 'by axe'], answer: 'of', explain: 'of' }
    ],
    usage: { domains: ['情感'], tone: '中性', commonConfusion: ['shameful'] },
  });

  D('ashen', {
    etymology: {
      origin: '英语派生：ash 加 -en，像灰一样的颜色',
      root: { text: 'ash + -en', gloss: '灰白的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '常形容因恐惧或生病而苍白的脸', text: '常形容因恐惧或生病而苍白的脸' },
      ],
      mnemonic: '-en 表「像……的」',
      note: '不要写成 ashamed',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'His ashen face showed he was ill.', chinese: '他灰白的脸色说明他病了。' }],
    contexts: [{
      domain: '描写',
      senseId: 'ashen.s1',
      en: 'She turned ashen when she heard the news.',
      zh: '她听到消息后脸色变得苍白。',
      structure: 'She turned ashen when she heard the news.',
      grammar: '教学例句，用来固定 ashen 的常见用法。',
      rationale: '羞愧用 ashamed',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He was ashen of the mistake.',
      right: 'He was ashamed of the mistake.',
      reason: '羞愧用 ashamed',
      rule: '羞愧用 ashamed',
      special: '不要写成 ashamed',
    }],
    quiz: [
      { id: 'ashen.q1', senseId: 'ashen.s1', errorType: 'meaning', type: '词义', prompt: 'A face pale like ash is _____.', options: ['ashen', 'ashamed', 'asleep'], answer: 'ashen', explain: '苍白' },
      { id: 'ashen.q2', senseId: 'ashen.s1', errorType: 'meaning', type: '词义', prompt: '-en 在这里表示：', options: ['像灰一样', '感到羞耻', '正在睡'], answer: '像灰一样', explain: '颜色' },
      { id: 'ashen.q3', senseId: 'ashen.s1', errorType: 'meaning', type: '词义', prompt: 'ashen 修饰的多是：', options: ['脸色', '法律条款', '炮'], answer: '脸色', explain: '外貌' },
      { id: 'ashen.q4', senseId: 'ashen.s1', errorType: 'meaning', type: '词义', prompt: '羞愧的形容词是：', options: ['ashamed', 'ashen', 'ascending'], answer: 'ashamed', explain: '情绪' }
    ],
    usage: { domains: ['描写'], tone: '中性', commonConfusion: ['ashamed'] },
  });

  D('ashore', {
    etymology: {
      origin: '英语派生：a- 加 shore「岸」',
      root: { text: 'a- + shore', gloss: '向岸；在岸上' },
      history: [
        { label: '副词', text: '副词' },
        { label: '从水上到陆地', text: '从水上到陆地' },
      ],
      mnemonic: 'go ashore，come ashore',
      note: '不是形容词单独修饰名词时常改说 on shore',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The sailors went ashore for fresh water.', chinese: '水手们上岸去取淡水。' }],
    contexts: [{
      domain: '航海',
      senseId: 'ashore.s1',
      en: 'Two crates were washed ashore after the storm.',
      zh: '风暴过后两只板条箱被冲上岸。',
      structure: 'Two crates were washed ashore after the storm.',
      grammar: '教学例句，用来固定 ashore 的常见用法。',
      rationale: 'ashore 是副词，不能当动词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They ashore the boat.',
      right: 'They went ashore.',
      reason: 'ashore 是副词，不能当动词',
      rule: 'ashore 是副词，不能当动词',
      special: '不是形容词单独修饰名词时常改说 on shore',
    }],
    quiz: [
      { id: 'ashore.q1', senseId: 'ashore.s1', errorType: 'meaning', type: '词义', prompt: 'The crew went _____.', options: ['ashore', 'ashamed', 'ascent'], answer: 'ashore', explain: '上岸' },
      { id: 'ashore.q2', senseId: 'ashore.s1', errorType: 'meaning', type: '词义', prompt: 'Waves carried the box _____.', options: ['ashore', 'artillery', 'atom'], answer: 'ashore', explain: '冲上岸' },
      { id: 'ashore.q3', senseId: 'ashore.s1', errorType: 'meaning', type: '词义', prompt: 'shore 的意思是：', options: ['岸', '羞耻', '上升'], answer: '岸', explain: '词根' },
      { id: 'ashore.q4', senseId: 'ashore.s1', errorType: 'meaning', type: '词义', prompt: 'ashore 的词性是：', options: ['副词', '及物动词', '冠词'], answer: '副词', explain: '不直接带宾语' }
    ],
    usage: { domains: ['航海'], tone: '中性', commonConfusion: ['shore'] },
  });

  D('asia', {
    etymology: {
      origin: '地名 Asia，汉语「亚洲」是音译，不作古代词根拆解',
      root: { text: 'Asia', gloss: '亚洲' },
      history: [
        { label: '专名', text: '专名' },
        { label: '世界最大洲，在欧洲以东', text: '世界最大洲，在欧洲以东' },
      ],
      mnemonic: '专有名词通常大写 Asia',
      note: '本词条按词表小写键收录，书写时用 Asia',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She has never left Asia.', chinese: '她从未离开过亚洲。' }],
    contexts: [{
      domain: '地理',
      senseId: 'asia.s1',
      en: 'Winter in parts of Asia is dry and cold.',
      zh: '亚洲部分地区的冬天干燥寒冷。',
      structure: 'Winter in parts of Asia is dry and cold.',
      grammar: '教学例句，用来固定 asia 的常见用法。',
      rationale: '专名大写，不加 the 说洲名时常直接 Asia',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She lives in the asia.',
      right: 'She lives in Asia.',
      reason: '专名大写，不加 the 说洲名时常直接 Asia',
      rule: '专名大写，不加 the 说洲名时常直接 Asia',
      special: '本词条按词表小写键收录，书写时用 Asia',
    }],
    quiz: [
      { id: 'asia.q1', senseId: 'asia.s1', errorType: 'meaning', type: '词义', prompt: 'The largest continent east of Europe is _____.', options: ['Asia', 'Atlas', 'Attic'], answer: 'Asia', explain: '洲名' },
      { id: 'asia.q2', senseId: 'asia.s1', errorType: 'meaning', type: '词义', prompt: 'Asia 在句子里要：', options: ['大写', '当成动词', '当成灰'], answer: '大写', explain: '专名' },
      { id: 'asia.q3', senseId: 'asia.s1', errorType: 'meaning', type: '词义', prompt: '亚洲的音译来自地名，不是：', options: ['艺术 art', '动脉', '灰'], answer: '艺术 art', explain: '不要乱拆' },
      { id: 'asia.q4', senseId: 'asia.s1', errorType: 'meaning', type: '词义', prompt: '人若来自亚洲可说：', options: ['Asian', 'Ashen', 'Asleep'], answer: 'Asian', explain: '形容词' }
    ],
    usage: { domains: ['地理'], tone: '中性', commonConfusion: ['Asian'] },
  });

  D('aside', {
    etymology: {
      origin: '英语派生：a- 加 side「旁边」',
      root: { text: 'a- + side', gloss: '到一旁' },
      history: [
        { label: '副词', text: '副词' },
        { label: 'move aside，set aside', text: 'move aside，set aside' },
      ],
      mnemonic: 'set aside 是留出或搁置',
      note: 'aside from 近似 besides',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He stepped aside to let the stretcher pass.', chinese: '他侧到一旁让担架过去。' }],
    contexts: [{
      domain: '日常',
      senseId: 'aside.s1',
      en: 'She set aside an hour for reading.',
      zh: '她留出一个小时读书。',
      structure: 'She set aside an hour for reading.',
      grammar: '教学例句，用来固定 aside 的常见用法。',
      rationale: 'aside 是副词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He asided the box.',
      right: 'He set the box aside.',
      reason: 'aside 是副词',
      rule: 'aside 是副词',
      special: 'aside from 近似 besides',
    }],
    quiz: [
      { id: 'aside.q1', senseId: 'aside.s1', errorType: 'meaning', type: '词义', prompt: 'Please step _____.', options: ['aside', 'ashore', 'ascent'], answer: 'aside', explain: '让到旁边' },
      { id: 'aside.q2', senseId: 'aside.s1', errorType: 'meaning', type: '词义', prompt: 'set aside money 的意思是：', options: ['留出', '烧掉', '上升'], answer: '留出', explain: '短语' },
      { id: 'aside.q3', senseId: 'aside.s1', errorType: 'meaning', type: '词义', prompt: 'aside 不是：', options: ['岸上', '羞耻', '灰白'], answer: '岸上', explain: 'ashore' },
      { id: 'aside.q4', senseId: 'aside.s1', errorType: 'meaning', type: '词义', prompt: 'side 的意思是：', options: ['旁边', '艺术', '原子'], answer: '旁边', explain: '组成' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['side'] },
  });

  D('ask', {
    etymology: {
      origin: '古英语动词，表示提问、请求或邀请',
      root: { text: 'ask', gloss: '问；请求；邀请' },
      history: [
        { label: '基础动词', text: '基础动词' },
        { label: 'ask somebody something', text: 'ask somebody something' },
      ],
      mnemonic: 'ask for 才是索要某物',
      note: 'ask 后可接双宾语',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'May I ask a question?', chinese: '我可以问一个问题吗？' }],
    contexts: [{
      domain: '日常',
      senseId: 'ask.s1',
      en: 'They asked me to wait by the door.',
      zh: '他们请我在门边等。',
      structure: 'They asked me to wait by the door.',
      grammar: '教学例句，用来固定 ask 的常见用法。',
      rationale: '问问题是 ask a question，不是 ask for a question',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She asked for a question.',
      right: 'She asked a question.',
      reason: '问问题是 ask a question，不是 ask for a question',
      rule: '问问题是 ask a question，不是 ask for a question',
      special: 'ask 后可接双宾语',
    }],
    quiz: [
      { id: 'ask.q1', senseId: 'ask.s1', errorType: 'meaning', type: '词义', prompt: 'May I _____ your name?', options: ['ask', 'axe', 'awe'], answer: 'ask', explain: '询问' },
      { id: 'ask.q2', senseId: 'ask.s1', errorType: 'meaning', type: '词义', prompt: 'They asked me _____ wait.', options: ['to', 'for', 'of'], answer: 'to', explain: 'ask somebody to do' },
      { id: 'ask.q3', senseId: 'ask.s1', errorType: 'meaning', type: '词义', prompt: '索要某物用 ask _____.', options: ['for', 'ascent', 'atom'], answer: 'for', explain: 'ask for' },
      { id: 'ask.q4', senseId: 'ask.s1', errorType: 'meaning', type: '词义', prompt: 'ask 可以表示：', options: ['问、请求或邀请', '只有攻击', '只有审计'], answer: '问、请求或邀请', explain: '多义' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['ask for'] },
  });

  D('ask for', {
    etymology: {
      origin: '英语短语：ask for，表示向人要某物或自找',
      root: { text: 'ask for', gloss: '要求；请求' },
      history: [
        { label: '短语动词', text: '短语动词' },
        { label: 'ask for something', text: 'ask for something' },
      ],
      mnemonic: 'ask for trouble 是自找麻烦',
      note: '人作对象时常 ask somebody for something',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Please ask for a glass of water.', chinese: '他要了一杯水。' }],
    contexts: [{
      domain: '日常',
      senseId: 'ask for.s1',
      en: 'If you are stuck, ask for help early.',
      zh: '她向老师要求更多时间。',
      structure: 'If you are stuck, ask for help early.',
      grammar: '教学例句，用来固定 ask for 的常见用法。',
      rationale: '要东西需要 for',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He asked a glass of water.',
      right: 'He asked for a glass of water.',
      reason: '要东西需要 for',
      rule: '要东西需要 for',
      special: '人作对象时常 ask somebody for something',
    }],
    quiz: [
      { id: 'ask for.q1', senseId: 'ask for.s1', errorType: 'meaning', type: '词义', prompt: 'She asked _____ help.', options: ['for', 'to', 'aside'], answer: 'for', explain: '索要' },
      { id: 'ask for.q2', senseId: 'ask for.s1', errorType: 'meaning', type: '词义', prompt: 'ask for trouble 意思是：', options: ['自找麻烦', '请人吃饭', '上岸'], answer: '自找麻烦', explain: '习语' },
      { id: 'ask for.q3', senseId: 'ask for.s1', errorType: 'meaning', type: '词义', prompt: '问一个问题应说：', options: ['ask a question', 'ask for a question', 'ask aside a question'], answer: 'ask a question', explain: '对比 ask' },
      { id: 'ask for.q4', senseId: 'ask for.s1', errorType: 'meaning', type: '词义', prompt: '结构 ask somebody _____ something.', options: ['for', 'at', 'ash'], answer: 'for', explain: '双宾语加 for' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['ask'] },
  });

  D('ask oneself', {
    etymology: {
      origin: '英语短语：ask oneself，在心里自问',
      root: { text: 'ask oneself', gloss: '自问' },
      history: [
        { label: '短语', text: '短语' },
        { label: '后接 wh- 从句', text: '后接 wh- 从句' },
      ],
      mnemonic: '不是真的对另一个人开口',
      note: 'oneself 随主语变化：himself、herself',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The note says: ask oneself why you agreed.', chinese: '我问自己为什么答应了。' }],
    contexts: [{
      domain: '心理',
      senseId: 'ask oneself.s1',
      en: 'In a journal you can ask oneself whether the risk is worth it.',
      zh: '她自问这风险是否值得。',
      structure: 'In a journal you can ask oneself whether the risk is worth it.',
      grammar: '教学例句，用来固定 ask oneself 的常见用法。',
      rationale: '反身代词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I asked me why.',
      right: 'I asked myself why.',
      reason: '反身代词',
      rule: '反身代词',
      special: 'oneself 随主语变化：himself、herself',
    }],
    quiz: [
      { id: 'ask oneself.q1', senseId: 'ask oneself.s1', errorType: 'meaning', type: '词义', prompt: 'He _____ himself what to do next.', options: ['asked', 'ascribed', 'attacked'], answer: 'asked', explain: '自问' },
      { id: 'ask oneself.q2', senseId: 'ask oneself.s1', errorType: 'meaning', type: '词义', prompt: '反身形式随主语，她要用：', options: ['herself', 'himself', 'itself'], answer: 'herself', explain: '一致' },
      { id: 'ask oneself.q3', senseId: 'ask oneself.s1', errorType: 'meaning', type: '词义', prompt: 'ask oneself 后面通常是：', options: ['疑问从句', '一个名词灰', '炮兵'], answer: '疑问从句', explain: '想问题' },
      { id: 'ask oneself.q4', senseId: 'ask oneself.s1', errorType: 'meaning', type: '词义', prompt: '对别人提问不是：', options: ['ask oneself', 'ask', 'audit'], answer: 'ask oneself', explain: '对比' }
    ],
    usage: { domains: ['心理'], tone: '中性', commonConfusion: ['ask'] },
  });

  D('asleep', {
    etymology: {
      origin: '英语派生：a- 加 sleep',
      root: { text: 'a- + sleep', gloss: '睡着的' },
      history: [
        { label: '表语形容词', text: '表语形容词' },
        { label: 'fall asleep，be asleep', text: 'fall asleep，be asleep' },
      ],
      mnemonic: '一般不说 an asleep baby，说 a sleeping baby',
      note: 'asleep 不作前置定语',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The baby is asleep in the next room.', chinese: '婴儿在隔壁房间睡着了。' }],
    contexts: [{
      domain: '日常',
      senseId: 'asleep.s1',
      en: 'She fell asleep during the lecture.',
      zh: '她在讲座中睡着了。',
      structure: 'She fell asleep during the lecture.',
      grammar: '教学例句，用来固定 asleep 的常见用法。',
      rationale: 'asleep 通常放在 be 后面',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Look at the asleep baby.',
      right: 'Look at the sleeping baby.',
      reason: 'asleep 通常放在 be 后面',
      rule: 'asleep 通常放在 be 后面',
      special: 'asleep 不作前置定语',
    }],
    quiz: [
      { id: 'asleep.q1', senseId: 'asleep.s1', errorType: 'meaning', type: '词义', prompt: 'The child is _____.', options: ['asleep', 'ashamed', 'ashen'], answer: 'asleep', explain: '睡着' },
      { id: 'asleep.q2', senseId: 'asleep.s1', errorType: 'meaning', type: '词义', prompt: 'She fell _____ on the bus.', options: ['asleep', 'ashore', 'aside'], answer: 'asleep', explain: '睡着了' },
      { id: 'asleep.q3', senseId: 'asleep.s1', errorType: 'meaning', type: '词义', prompt: '前置定语要用：', options: ['sleeping', 'asleep', 'ascend'], answer: 'sleeping', explain: 'a sleeping baby' },
      { id: 'asleep.q4', senseId: 'asleep.s1', errorType: 'meaning', type: '词义', prompt: 'asleep 不是：', options: ['感到羞耻', '在岸上', '在旁边'], answer: '感到羞耻', explain: '形近' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['sleep'] },
  });

  D('aspect', {
    etymology: {
      origin: '拉丁语 aspectus「朝向、外观」，现多指事物的一个方面',
      root: { text: 'specere', gloss: '看；方面' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'one aspect of', text: 'one aspect of' },
      ],
      mnemonic: '语法里 aspect 也指动词的体，如进行体',
      note: '考试里最常见是「方面」',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Cost is only one aspect of the choice.', chinese: '费用只是这个选择的一个方面。' }],
    contexts: [{
      domain: '学术',
      senseId: 'aspect.s1',
      en: 'Another aspect of the plan is safety.',
      zh: '计划的另一方面是安全。',
      structure: 'Another aspect of the plan is safety.',
      grammar: '教学例句，用来固定 aspect 的常见用法。',
      rationale: '用 of',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Cost is an aspect in the choice only with of.',
      right: 'Cost is one aspect of the choice.',
      reason: '用 of',
      rule: '用 of',
      special: '考试里最常见是「方面」',
    }],
    quiz: [
      { id: 'aspect.q1', senseId: 'aspect.s1', errorType: 'meaning', type: '词义', prompt: 'One _____ of the problem is time.', options: ['aspect', 'ascent', 'asset'], answer: 'aspect', explain: '方面' },
      { id: 'aspect.q2', senseId: 'aspect.s1', errorType: 'meaning', type: '词义', prompt: 'aspect 在语法里可以指：', options: ['动词的体', '箭头', '姑母'], answer: '动词的体', explain: '术语' },
      { id: 'aspect.q3', senseId: 'aspect.s1', errorType: 'meaning', type: '词义', prompt: '介词 one aspect _____ the plan.', options: ['of', 'for', 'at'], answer: 'of', explain: 'of' },
      { id: 'aspect.q4', senseId: 'aspect.s1', errorType: 'meaning', type: '词义', prompt: '不要和 ascent 混淆，ascent 是：', options: ['攀登', '方面', '资产'], answer: '攀登', explain: '拼写' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['respect'] },
  });

  D('aspic', {
    etymology: {
      origin: '法语菜名，指用清汤做成的肉冻',
      root: { text: 'aspic', gloss: '肉冻' },
      history: [
        { label: '食物名词', text: '食物名词' },
        { label: '冷盘', text: '冷盘' },
      ],
      mnemonic: '不是 aspect 的另一种拼法',
      note: '不可数居多',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The ham was set in aspic.', chinese: '火腿被凝在肉冻里。' }],
    contexts: [{
      domain: '烹饪',
      senseId: 'aspic.s1',
      en: 'Cold vegetables in aspic were served at the reception.',
      zh: '招待会上端上了肉冻蔬菜。',
      structure: 'Cold vegetables in aspic were served at the reception.',
      grammar: '教学例句，用来固定 aspic 的常见用法。',
      rationale: '方面是 aspect',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'We discussed an aspic of the budget.',
      right: 'We discussed an aspect of the budget.',
      reason: '方面是 aspect',
      rule: '方面是 aspect',
      special: '不可数居多',
    }],
    quiz: [
      { id: 'aspic.q1', senseId: 'aspic.s1', errorType: 'meaning', type: '词义', prompt: 'Meat set in clear jelly may be in _____.', options: ['aspic', 'aspect', 'ascent'], answer: 'aspic', explain: '肉冻' },
      { id: 'aspic.q2', senseId: 'aspic.s1', errorType: 'meaning', type: '词义', prompt: 'aspic 属于：', options: ['食物', '语法术语', '军事'], answer: '食物', explain: '菜肴' },
      { id: 'aspic.q3', senseId: 'aspic.s1', errorType: 'meaning', type: '词义', prompt: '预算的一个方面是：', options: ['aspect', 'aspic', 'ash'], answer: 'aspect', explain: '不要混' },
      { id: 'aspic.q4', senseId: 'aspic.s1', errorType: 'meaning', type: '词义', prompt: 'aspic 不是：', options: ['攀登', '动脉', '艺术家'], answer: '攀登', explain: 'ascent 形近' }
    ],
    usage: { domains: ['烹饪'], tone: '中性', commonConfusion: ['aspect'] },
  });

  D('aspiration', {
    etymology: {
      origin: '与 aspire 同族，拉丁语「呼吸」引申为向往',
      root: { text: 'spirare', gloss: '志向；强烈愿望' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'an aspiration to do 或 for', text: 'an aspiration to do 或 for' },
      ],
      mnemonic: '比 wish 更正式、更长远',
      note: '复数 aspirations 常见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Her aspiration is to teach in a village school.', chinese: '她的志向是去乡村学校教书。' }],
    contexts: [{
      domain: '教育',
      senseId: 'aspiration.s1',
      en: 'The paper describes the aspirations of young workers.',
      zh: '文章描述了青年工人的抱负。',
      structure: 'The paper describes the aspirations of young workers.',
      grammar: '教学例句，用来固定 aspiration 的常见用法。',
      rationale: '后接 to do 或 for 名词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He has an aspiration of rich.',
      right: 'He has an aspiration to be useful.',
      reason: '后接 to do 或 for 名词',
      rule: '后接 to do 或 for 名词',
      special: '复数 aspirations 常见',
    }],
    quiz: [
      { id: 'aspiration.q1', senseId: 'aspiration.s1', errorType: 'meaning', type: '词义', prompt: 'A strong long-term hope is an _____.', options: ['aspiration', 'aspic', 'ascent'], answer: 'aspiration', explain: '志向' },
      { id: 'aspiration.q2', senseId: 'aspiration.s1', errorType: 'meaning', type: '词义', prompt: '动词形式是 _____.', options: ['aspire', 'ash', 'axe'], answer: 'aspire', explain: 'aspire' },
      { id: 'aspiration.q3', senseId: 'aspiration.s1', errorType: 'meaning', type: '词义', prompt: 'aspiration 与呼吸词根有教学联系，但现代意思是：', options: ['志向', '肉冻', '灰'], answer: '志向', explain: '不要讲成医学呼吸' },
      { id: 'aspiration.q4', senseId: 'aspiration.s1', errorType: 'meaning', type: '词义', prompt: '介词 a aspiration _____ peace 更自然说 an aspiration for peace 中的：', options: ['for', 'at', 'by ash'], answer: 'for', explain: 'for' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['aspire'] },
  });

  D('aspire', {
    etymology: {
      origin: '拉丁语 aspirare，现代意思是渴望达到',
      root: { text: 'spirare', gloss: '向往' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'aspire to something 或 to do', text: 'aspire to something 或 to do' },
      ],
      mnemonic: '不接 for 作为第一选择',
      note: '书面、积极',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Many students aspire to study abroad.', chinese: '许多学生渴望出国学习。' }],
    contexts: [{
      domain: '教育',
      senseId: 'aspire.s1',
      en: 'She aspires to a job that helps other people.',
      zh: '她向往一份能帮助别人的工作。',
      structure: 'She aspires to a job that helps other people.',
      grammar: '教学例句，用来固定 aspire 的常见用法。',
      rationale: 'aspire to',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They aspire for leave school.',
      right: 'They aspire to leave school.',
      reason: 'aspire to',
      rule: 'aspire to',
      special: '书面、积极',
    }],
    quiz: [
      { id: 'aspire.q1', senseId: 'aspire.s1', errorType: 'meaning', type: '词义', prompt: 'She _____ to become a pilot.', options: ['aspires', 'ascribes', 'assesses'], answer: 'aspires', explain: '向往' },
      { id: 'aspire.q2', senseId: 'aspire.s1', errorType: 'meaning', type: '词义', prompt: 'aspire _____ a better result.', options: ['to', 'for', 'at'], answer: 'to', explain: 'to' },
      { id: 'aspire.q3', senseId: 'aspire.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['aspiration', 'aspic', 'artillery'], answer: 'aspiration', explain: '名词' },
      { id: 'aspire.q4', senseId: 'aspire.s1', errorType: 'meaning', type: '词义', prompt: 'ascribe 是：', options: ['归因', '向往', '睡觉'], answer: '归因', explain: '易混' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['aspiration'] },
  });

  D('ass', {
    etymology: {
      origin: '古英语指驴；口语里也可骂人笨，语气粗鲁',
      root: { text: 'ass', gloss: '驴；蠢货' },
      history: [
        { label: '名词', text: '名词' },
        { label: '动物义中性', text: '动物义中性' },
      ],
      mnemonic: '骂人义冒犯，课堂点到即可',
      note: '美式口语 ass 还有粗俗义，考试避免',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The ass carried sacks up the hill.', chinese: '那头驴驮着袋子上山。' }],
    contexts: [{
      domain: '动物',
      senseId: 'ass.s1',
      en: 'Calling a classmate an ass is rude.',
      zh: '叫同学蠢货是粗鲁的。',
      structure: 'Calling a classmate an ass is rude.',
      grammar: '教学例句，用来固定 ass 的常见用法。',
      rationale: '不是夸奖',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He is an ass so we praise him.',
      right: 'Calling him an ass is an insult.',
      reason: '不是夸奖',
      rule: '不是夸奖',
      special: '美式口语 ass 还有粗俗义，考试避免',
    }],
    quiz: [
      { id: 'ass.q1', senseId: 'ass.s1', errorType: 'meaning', type: '词义', prompt: 'A donkey can be called an _____.', options: ['ass', 'ash', 'axe'], answer: 'ass', explain: '驴' },
      { id: 'ass.q2', senseId: 'ass.s1', errorType: 'meaning', type: '词义', prompt: '用 ass 骂人是：', options: ['粗鲁的', '礼貌的敬称', '科学术语'], answer: '粗鲁的', explain: '冒犯' },
      { id: 'ass.q3', senseId: 'ass.s1', errorType: 'meaning', type: '词义', prompt: '不要和 ash 混淆，ash 是：', options: ['灰', '驴', '轴线'], answer: '灰', explain: '形近' },
      { id: 'ass.q4', senseId: 'ass.s1', errorType: 'meaning', type: '词义', prompt: '复数一般是：', options: ['asses', 'asss', 'axis'], answer: 'asses', explain: '-es' }
    ],
    usage: { domains: ['动物'], tone: '中性', commonConfusion: ['donkey'] },
  });

  D('assassinate', {
    etymology: {
      origin: '经法语进入英语，指因政治原因杀害重要人物',
      root: { text: 'assassinate', gloss: '行刺' },
      history: [
        { label: '动词', text: '动词' },
        { label: '对象是政要等', text: '对象是政要等' },
      ],
      mnemonic: '名词 assassination，人是 assassin',
      note: '普通谋杀不一定用这个词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The plot was to assassinate the minister.', chinese: '阴谋是刺杀部长。' }],
    contexts: [{
      domain: '新闻',
      senseId: 'assassinate.s1',
      en: 'Guards stopped a man who tried to assassinate the envoy.',
      zh: '警卫制止了一名试图行刺使节的人。',
      structure: 'Guards stopped a man who tried to assassinate the envoy.',
      grammar: '教学例句，用来固定 assassinate 的常见用法。',
      rationale: '对象是重要人物',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They assassinated a chair.',
      right: 'They assassinated the president in the story.',
      reason: '对象是重要人物',
      rule: '对象是重要人物',
      special: '普通谋杀不一定用这个词',
    }],
    quiz: [
      { id: 'assassinate.q1', senseId: 'assassinate.s1', errorType: 'meaning', type: '词义', prompt: 'To kill an important person for political reasons is to _____.', options: ['assassinate', 'ascribe', 'assemble'], answer: 'assassinate', explain: '行刺' },
      { id: 'assassinate.q2', senseId: 'assassinate.s1', errorType: 'meaning', type: '词义', prompt: 'The killer in this sense is an _____.', options: ['assassin', 'artist', 'auditor'], answer: 'assassin', explain: '刺客' },
      { id: 'assassinate.q3', senseId: 'assassinate.s1', errorType: 'meaning', type: '词义', prompt: '普通打架伤人更常说：', options: ['attack', 'assassinate always', 'audit'], answer: 'attack', explain: '范围更窄' },
      { id: 'assassinate.q4', senseId: 'assassinate.s1', errorType: 'meaning', type: '词义', prompt: '名词行为是：', options: ['assassination', 'ascent', 'aspic'], answer: 'assassination', explain: '名词' }
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['kill'] },
  });

  D('assault', {
    etymology: {
      origin: '拉丁语 ad 加 saltus「扑、跳」，指突然的暴力攻击',
      root: { text: 'saltus', gloss: '袭击' },
      history: [
        { label: '名词或动词', text: '名词或动词' },
        { label: '物理袭击', text: '物理袭击' },
      ],
      mnemonic: '法律用语里也很常见',
      note: '比 attack 更强调突然和暴力',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The assault happened outside the station.', chinese: '袭击发生在车站外。' }],
    contexts: [{
      domain: '法律',
      senseId: 'assault.s1',
      en: 'He was charged with assault.',
      zh: '他被控侵犯他人身体。',
      structure: 'He was charged with assault.',
      grammar: '教学例句，用来固定 assault 的常见用法。',
      rationale: '主义是暴力攻击',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They assault the idea gently in a kind essay only as the main meaning.',
      right: 'The assault left him injured.',
      reason: '主义是暴力攻击',
      rule: '主义是暴力攻击',
      special: '比 attack 更强调突然和暴力',
    }],
    quiz: [
      { id: 'assault.q1', senseId: 'assault.s1', errorType: 'meaning', type: '词义', prompt: 'A sudden violent attack is an _____.', options: ['assault', 'ascent', 'asset'], answer: 'assault', explain: '袭击' },
      { id: 'assault.q2', senseId: 'assault.s1', errorType: 'meaning', type: '词义', prompt: '动词：They _____ the guard.', options: ['assaulted', 'ascended', 'assessed'], answer: 'assaulted', explain: '攻击' },
      { id: 'assault.q3', senseId: 'assault.s1', errorType: 'meaning', type: '词义', prompt: 'assault 不是：', options: ['攀登', '平均数', '姑母'], answer: '攀登', explain: 'ascent 形近' },
      { id: 'assault.q4', senseId: 'assault.s1', errorType: 'meaning', type: '词义', prompt: '法律指控常用 charged _____ assault.', options: ['with', 'for art', 'at ash'], answer: 'with', explain: 'with' }
    ],
    usage: { domains: ['法律'], tone: '中性', commonConfusion: ['attack'] },
  });

  D('assemble', {
    etymology: {
      origin: '拉丁语 ad 加 simul「一起」，集合或装配',
      root: { text: 'simul', gloss: '集合；组装' },
      history: [
        { label: '动词', text: '动词' },
        { label: '人聚到一起，或零件装成整体', text: '人聚到一起，或零件装成整体' },
      ],
      mnemonic: '名词 assembly',
      note: '两种意思都常见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The students assembled in the hall.', chinese: '学生们在大厅集合。' }],
    contexts: [{
      domain: '日常',
      senseId: 'assemble.s1',
      en: 'Workers assemble the chairs in ten minutes.',
      zh: '工人十分钟就能把椅子组装好。',
      structure: 'Workers assemble the chairs in ten minutes.',
      grammar: '教学例句，用来固定 assemble 的常见用法。',
      rationale: '是聚拢不是拆开',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Please assemble the people apart.',
      right: 'Please assemble the people in one room.',
      reason: '是聚拢不是拆开',
      rule: '是聚拢不是拆开',
      special: '两种意思都常见',
    }],
    quiz: [
      { id: 'assemble.q1', senseId: 'assemble.s1', errorType: 'meaning', type: '词义', prompt: 'To fit parts together is to _____.', options: ['assemble', 'assault', 'ascribe'], answer: 'assemble', explain: '组装' },
      { id: 'assemble.q2', senseId: 'assemble.s1', errorType: 'meaning', type: '词义', prompt: 'People _____ in the square.', options: ['assembled', 'assassinated', 'ascribed'], answer: 'assembled', explain: '集合' },
      { id: 'assemble.q3', senseId: 'assemble.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['assembly', 'aspic', 'axis'], answer: 'assembly', explain: '名词' },
      { id: 'assemble.q4', senseId: 'assemble.s1', errorType: 'meaning', type: '词义', prompt: 'assault 是：', options: ['袭击', '集合', '评估'], answer: '袭击', explain: '易混' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['assembly'] },
  });

  D('assembly', {
    etymology: {
      origin: '英语派生：assemble 的名词',
      root: { text: 'assemble + -y 类名词', gloss: '集会；装配' },
      history: [
        { label: '名词', text: '名词' },
        { label: '学校 assembly 是晨会', text: '学校 assembly 是晨会' },
      ],
      mnemonic: '也可指装配过程',
      note: '议会 the Assembly 大写视专名',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The school assembly starts at eight.', chinese: '学校晨会八点开始。' }],
    contexts: [{
      domain: '学校',
      senseId: 'assembly.s1',
      en: 'Final assembly of the bike takes place in this room.',
      zh: '自行车的最后组装在这个房间进行。',
      structure: 'Final assembly of the bike takes place in this room.',
      grammar: '教学例句，用来固定 assembly 的常见用法。',
      rationale: '集会不是 assault',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The assembly attacked him with a crime word.',
      right: 'The assembly gathered in the hall.',
      reason: '集会不是 assault',
      rule: '集会不是 assault',
      special: '议会 the Assembly 大写视专名',
    }],
    quiz: [
      { id: 'assembly.q1', senseId: 'assembly.s1', errorType: 'meaning', type: '词义', prompt: 'A school meeting is an _____.', options: ['assembly', 'assault', 'ascent'], answer: 'assembly', explain: '集会' },
      { id: 'assembly.q2', senseId: 'assembly.s1', errorType: 'meaning', type: '词义', prompt: 'Putting parts together is _____.', options: ['assembly', 'ash', 'awe'], answer: 'assembly', explain: '装配' },
      { id: 'assembly.q3', senseId: 'assembly.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['assemble', 'assassinate', 'assess'], answer: 'assemble', explain: '动词' },
      { id: 'assembly.q4', senseId: 'assembly.s1', errorType: 'meaning', type: '词义', prompt: 'assault 意为：', options: ['袭击', '集会', '灰'], answer: '袭击', explain: '对比' }
    ],
    usage: { domains: ['学校'], tone: '中性', commonConfusion: ['assemble'] },
  });

  D('assert', {
    etymology: {
      origin: '拉丁语 asserere「声称属于自己」，现指坚定地说',
      root: { text: 'serere', gloss: '断言' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'assert that', text: 'assert that' },
      ],
      mnemonic: 'assert oneself 是坚持自己的立场',
      note: '比 say 更强',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She asserted that the figures were correct.', chinese: '她断言这些数字是正确的。' }],
    contexts: [{
      domain: '书面',
      senseId: 'assert.s1',
      en: 'He asserted his right to see the file.',
      zh: '他坚持自己有权查看档案。',
      structure: 'He asserted his right to see the file.',
      grammar: '教学例句，用来固定 assert 的常见用法。',
      rationale: '用 that',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She asserted to the figures were correct.',
      right: 'She asserted that the figures were correct.',
      reason: '用 that',
      rule: '用 that',
      special: '比 say 更强',
    }],
    quiz: [
      { id: 'assert.q1', senseId: 'assert.s1', errorType: 'meaning', type: '词义', prompt: 'To state something firmly is to _____ it.', options: ['assert', 'assess', 'ascend'], answer: 'assert', explain: '断言' },
      { id: 'assert.q2', senseId: 'assert.s1', errorType: 'meaning', type: '词义', prompt: 'assert _____ you are right.', options: ['that', 'to', 'for'], answer: 'that', explain: 'that 从句' },
      { id: 'assert.q3', senseId: 'assert.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['assertion', 'ascent', 'asset'], answer: 'assertion', explain: '名词' },
      { id: 'assert.q4', senseId: 'assert.s1', errorType: 'meaning', type: '词义', prompt: 'assess 是：', options: ['评估', '断言', '上升'], answer: '评估', explain: '易混' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['assertion'] },
  });

  D('assertion', {
    etymology: {
      origin: '英语派生：assert 加 -ion',
      root: { text: 'assert + -ion', gloss: '断言；主张' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: '比 statement 更带「坚持如此」',
      note: 'an assertion that',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The assertion that the bridge is safe needs proof.', chinese: '「桥是安全的」这一断言需要证据。' }],
    contexts: [{
      domain: '学术',
      senseId: 'assertion.s1',
      en: 'His assertion was challenged by the data.',
      zh: '他的主张受到数据质疑。',
      structure: 'His assertion was challenged by the data.',
      grammar: '教学例句，用来固定 assertion 的常见用法。',
      rationale: '用 that 从句',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Her assertion to leave early as a noun meaning claim needs that.',
      right: 'Her assertion that she had paid was false.',
      reason: '用 that 从句',
      rule: '用 that 从句',
      special: 'an assertion that',
    }],
    quiz: [
      { id: 'assertion.q1', senseId: 'assertion.s1', errorType: 'meaning', type: '词义', prompt: 'A firm statement is an _____.', options: ['assertion', 'ascent', 'aspic'], answer: 'assertion', explain: '主张' },
      { id: 'assertion.q2', senseId: 'assertion.s1', errorType: 'meaning', type: '词义', prompt: '-ion 构成：', options: ['名词', '副词', '介词'], answer: '名词', explain: '后缀' },
      { id: 'assertion.q3', senseId: 'assertion.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['assert', 'assemble', 'assault'], answer: 'assert', explain: '动词' },
      { id: 'assertion.q4', senseId: 'assertion.s1', errorType: 'meaning', type: '词义', prompt: '不要写成：', options: ['assessment 如果只是断言', 'artery', 'atom'], answer: 'assessment 如果只是断言', explain: '评估是 assess' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['assert'] },
  });

  D('assess', {
    etymology: {
      origin: '拉丁语「坐在旁边估价」，现指评估价值或质量',
      root: { text: 'assess', gloss: '评估' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'assess something', text: 'assess something' },
      ],
      mnemonic: '名词 assessment',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Teachers assess the essays on Friday.', chinese: '教师周五评阅这些文章。' }],
    contexts: [{
      domain: '教育',
      senseId: 'assess.s1',
      en: 'We need to assess the risk before we travel.',
      zh: '出发前我们需要评估风险。',
      structure: 'We need to assess the risk before we travel.',
      grammar: '教学例句，用来固定 assess 的常见用法。',
      rationale: '直接接宾语',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Please assess to the risk.',
      right: 'Please assess the risk.',
      reason: '直接接宾语',
      rule: '直接接宾语',
      special: '正式',
    }],
    quiz: [
      { id: 'assess.q1', senseId: 'assess.s1', errorType: 'meaning', type: '词义', prompt: 'To judge the value of something is to _____ it.', options: ['assess', 'assert', 'ascend'], answer: 'assess', explain: '评估' },
      { id: 'assess.q2', senseId: 'assess.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['assessment', 'assertion only if claim', 'ascent'], answer: 'assessment', explain: '评估的名词' },
      { id: 'assess.q3', senseId: 'assess.s1', errorType: 'meaning', type: '词义', prompt: 'assert 是：', options: ['坚定声称', '评估', '组装'], answer: '坚定声称', explain: '易混' },
      { id: 'assess.q4', senseId: 'assess.s1', errorType: 'meaning', type: '词义', prompt: 'assess 不表示：', options: ['上升', '肉冻', '姑母'], answer: '上升', explain: 'ascend' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['assessment'] },
  });

  D('asset', {
    etymology: {
      origin: '与「有足够价值」一系的法语来源，指资产或有利条件',
      root: { text: 'asset', gloss: '资产；有利条件' },
      history: [
        { label: '名词', text: '名词' },
        { label: '复数 assets 常指财产', text: '复数 assets 常指财产' },
      ],
      mnemonic: 'a person can be an asset to a team',
      note: '不是 assess 的名词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Patience is an asset in this job.', chinese: '耐心是这份工作的有利条件。' }],
    contexts: [{
      domain: '商业',
      senseId: 'asset.s1',
      en: 'The company sold two assets to pay the debt.',
      zh: '公司卖掉两项资产来还债。',
      structure: 'The company sold two assets to pay the debt.',
      grammar: '教学例句，用来固定 asset 的常见用法。',
      rationale: '评估的动词是 assess',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Please asset the risk.',
      right: 'Please assess the risk.',
      reason: '评估的动词是 assess',
      rule: '评估的动词是 assess',
      special: '不是 assess 的名词',
    }],
    quiz: [
      { id: 'asset.q1', senseId: 'asset.s1', errorType: 'meaning', type: '词义', prompt: 'A useful quality can be an _____.', options: ['asset', 'ascent', 'aspic'], answer: 'asset', explain: '有利条件' },
      { id: 'asset.q2', senseId: 'asset.s1', errorType: 'meaning', type: '词义', prompt: '公司拥有的有价值之物常叫 _____.', options: ['assets', 'assemblies', 'assaults'], answer: 'assets', explain: '资产' },
      { id: 'asset.q3', senseId: 'asset.s1', errorType: 'meaning', type: '词义', prompt: '动词「评估」是：', options: ['assess', 'assert', 'assemble'], answer: 'assess', explain: '动词' },
      { id: 'asset.q4', senseId: 'asset.s1', errorType: 'meaning', type: '词义', prompt: 'ascent 是：', options: ['攀登', '资产', '断言'], answer: '攀登', explain: '拼写' }
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['assess'] },
  });

  D('assign', {
    etymology: {
      origin: '拉丁语 assignare「标到名下」，指分派或指定',
      root: { text: 'sign', gloss: '分配；指定' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'assign somebody something 或 assign something to somebody', text: 'assign somebody something 或 assign something to somebody' },
      ],
      mnemonic: '名词 assignment',
      note: '任务、时间、地点都可指定',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'They assigned me a seat by the window.', chinese: '他们给我指定了靠窗的座位。' }],
    contexts: [{
      domain: '学校',
      senseId: 'assign.s1',
      en: 'The teacher assigned the reading to the whole class.',
      zh: '老师把阅读布置给全班。',
      structure: 'The teacher assigned the reading to the whole class.',
      grammar: '教学例句，用来固定 assign 的常见用法。',
      rationale: '双宾语',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They assigned me to a seat by saying assigned a seat. 正确是直接',
      right: 'They assigned me a seat.',
      reason: '双宾语',
      rule: '双宾语',
      special: '任务、时间、地点都可指定',
    }],
    quiz: [
      { id: 'assign.q1', senseId: 'assign.s1', errorType: 'meaning', type: '词义', prompt: 'The teacher _____ homework.', options: ['assigned', 'assessed', 'asserted'], answer: 'assigned', explain: '布置' },
      { id: 'assign.q2', senseId: 'assign.s1', errorType: 'meaning', type: '词义', prompt: 'assign a task _____ the group.', options: ['to', 'for', 'at'], answer: 'to', explain: 'to' },
      { id: 'assign.q3', senseId: 'assign.s1', errorType: 'meaning', type: '词义', prompt: '名词作业是：', options: ['assignment', 'assessment', 'assertion'], answer: 'assignment', explain: '名词' },
      { id: 'assign.q4', senseId: 'assign.s1', errorType: 'meaning', type: '词义', prompt: 'assess 是：', options: ['评估', '分派', '断言'], answer: '评估', explain: '易混' }
    ],
    usage: { domains: ['学校'], tone: '中性', commonConfusion: ['assignment'] },
  });

  D('assignment', {
    etymology: {
      origin: '英语派生：assign 加 -ment',
      root: { text: 'assign + -ment', gloss: '任务；作业' },
      history: [
        { label: '名词', text: '名词' },
        { label: '学校作业最常见', text: '学校作业最常见' },
      ],
      mnemonic: '也可指分派这一行为',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The assignment is due on Monday.', chinese: '作业周一到期。' }],
    contexts: [{
      domain: '学校',
      senseId: 'assignment.s1',
      en: 'Her first assignment was to watch the door.',
      zh: '她的第一项任务是看门。',
      structure: 'Her first assignment was to watch the door.',
      grammar: '教学例句，用来固定 assignment 的常见用法。',
      rationale: '名词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The assignment assessed the door as the verb.',
      right: 'She finished the assignment.',
      reason: '名词',
      rule: '名词',
      special: '可数',
    }],
    quiz: [
      { id: 'assignment.q1', senseId: 'assignment.s1', errorType: 'meaning', type: '词义', prompt: 'Monday\'s _____ is a short essay.', options: ['assignment', 'assessment', 'assembly'], answer: 'assignment', explain: '作业' },
      { id: 'assignment.q2', senseId: 'assignment.s1', errorType: 'meaning', type: '词义', prompt: '-ment 构成：', options: ['名词', '副词', '否定'], answer: '名词', explain: '后缀' },
      { id: 'assignment.q3', senseId: 'assignment.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['assign', 'assess', 'assert'], answer: 'assign', explain: '动词' },
      { id: 'assignment.q4', senseId: 'assignment.s1', errorType: 'meaning', type: '词义', prompt: '评估结果名词更常是：', options: ['assessment', 'assignment', 'ascent'], answer: 'assessment', explain: '易混' }
    ],
    usage: { domains: ['学校'], tone: '中性', commonConfusion: ['assign'] },
  });

  D('assimilate', {
    etymology: {
      origin: '拉丁语 ad 加 similis「相似」，吸收或变得相同',
      root: { text: 'similis', gloss: '吸收；同化' },
      history: [
        { label: '动词', text: '动词' },
        { label: '知识：理解并吸收', text: '知识：理解并吸收' },
      ],
      mnemonic: '社会：融入群体',
      note: '介词 into 或 to',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'It takes time to assimilate so much information.', chinese: '吸收这么多信息需要时间。' }],
    contexts: [{
      domain: '学术',
      senseId: 'assimilate.s1',
      en: 'New members gradually assimilate into the team.',
      zh: '新成员逐渐融入团队。',
      structure: 'New members gradually assimilate into the team.',
      grammar: '教学例句，用来固定 assimilate 的常见用法。',
      rationale: '融入用 into',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They assimilate the team apart.',
      right: 'They assimilate into the team.',
      reason: '融入用 into',
      rule: '融入用 into',
      special: '介词 into 或 to',
    }],
    quiz: [
      { id: 'assimilate.q1', senseId: 'assimilate.s1', errorType: 'meaning', type: '词义', prompt: 'To take in ideas is to _____ them.', options: ['assimilate', 'assemble', 'assault'], answer: 'assimilate', explain: '吸收' },
      { id: 'assimilate.q2', senseId: 'assimilate.s1', errorType: 'meaning', type: '词义', prompt: 'assimilate _____ a group.', options: ['into', 'for ash', 'at axe'], answer: 'into', explain: 'into' },
      { id: 'assimilate.q3', senseId: 'assimilate.s1', errorType: 'meaning', type: '词义', prompt: 'similis 的意思接近：', options: ['相似', '攻击', '灰'], answer: '相似', explain: '同族 similar' },
      { id: 'assimilate.q4', senseId: 'assimilate.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['assimilation', 'assembly', 'assertion'], answer: 'assimilation', explain: '名词' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['assimilation'] },
  });

  D('assimilation', {
    etymology: {
      origin: '英语派生：assimilate 加 -ion',
      root: { text: 'assimilate + -ion', gloss: '同化；吸收' },
      history: [
        { label: '名词', text: '名词' },
        { label: '文化融入或知识吸收', text: '文化融入或知识吸收' },
      ],
      mnemonic: '正式',
      note: '不可数居多',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Language assimilation takes more than one year.', chinese: '语言上的融入不止一年。' }],
    contexts: [{
      domain: '社会',
      senseId: 'assimilation.s1',
      en: 'The assimilation of new facts is part of learning.',
      zh: '吸收新事实是学习的一部分。',
      structure: 'The assimilation of new facts is part of learning.',
      grammar: '教学例句，用来固定 assimilation 的常见用法。',
      rationale: '组装是 assemble',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Assimilation the parts with a tool.',
      right: 'Workers assemble the parts.',
      reason: '组装是 assemble',
      rule: '组装是 assemble',
      special: '不可数居多',
    }],
    quiz: [
      { id: 'assimilation.q1', senseId: 'assimilation.s1', errorType: 'meaning', type: '词义', prompt: 'Cultural _____ means becoming part of a culture.', options: ['assimilation', 'assembly', 'assault'], answer: 'assimilation', explain: '同化' },
      { id: 'assimilation.q2', senseId: 'assimilation.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['assimilate', 'assign', 'assert'], answer: 'assimilate', explain: '动词' },
      { id: 'assimilation.q3', senseId: 'assimilation.s1', errorType: 'meaning', type: '词义', prompt: '装配零件是：', options: ['assembly', 'assimilation', 'ascent'], answer: 'assembly', explain: '易混' },
      { id: 'assimilation.q4', senseId: 'assimilation.s1', errorType: 'meaning', type: '词义', prompt: '-ion 是：', options: ['名词后缀', '副词', '介词'], answer: '名词后缀', explain: '词性' }
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['assimilate'] },
  });

  D('assist', {
    etymology: {
      origin: '拉丁语 assistere「站在旁边」',
      root: { text: 'sistere', gloss: '帮助' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'assist somebody with something 或 in doing', text: 'assist somebody with something 或 in doing' },
      ],
      mnemonic: '比 help 正式',
      note: '名词 assistance，人 assistant',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She assisted the surgeon during the operation.', chinese: '她在手术中协助外科医生。' }],
    contexts: [{
      domain: '工作',
      senseId: 'assist.s1',
      en: 'He assisted me with the heavy door.',
      zh: '他帮我弄那扇重门。',
      structure: 'He assisted me with the heavy door.',
      grammar: '教学例句，用来固定 assist 的常见用法。',
      rationale: 'assist somebody with something',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She assisted me to the door with wrong pattern as assisted to do is possible but with is the collocation taught.',
      right: 'She assisted me with the door.',
      reason: 'assist somebody with something',
      rule: 'assist somebody with something',
      special: '名词 assistance，人 assistant',
    }],
    quiz: [
      { id: 'assist.q1', senseId: 'assist.s1', errorType: 'meaning', type: '词义', prompt: 'May I _____ you?', options: ['assist', 'assess', 'assert'], answer: 'assist', explain: '帮助' },
      { id: 'assist.q2', senseId: 'assist.s1', errorType: 'meaning', type: '词义', prompt: 'assist somebody _____ the form.', options: ['with', 'of', 'at ash'], answer: 'with', explain: 'with' },
      { id: 'assist.q3', senseId: 'assist.s1', errorType: 'meaning', type: '词义', prompt: '名词帮助是：', options: ['assistance', 'assertion', 'assembly'], answer: 'assistance', explain: '名词' },
      { id: 'assist.q4', senseId: 'assist.s1', errorType: 'meaning', type: '词义', prompt: '帮手是：', options: ['assistant', 'asset', 'ascent'], answer: 'assistant', explain: '人' }
    ],
    usage: { domains: ['工作'], tone: '中性', commonConfusion: ['assistance'] },
  });

  D('assistance', {
    etymology: {
      origin: '英语派生：assist 加 -ance',
      root: { text: 'assist + -ance', gloss: '帮助；援助' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数', text: '不可数' },
      ],
      mnemonic: 'come to somebody\'s assistance',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Thank you for your assistance.', chinese: '谢谢你的帮助。' }],
    contexts: [{
      domain: '书面',
      senseId: 'assistance.s1',
      en: 'The team came to our assistance after the flood.',
      zh: '洪水之后那支队伍来援助我们。',
      structure: 'The team came to our assistance after the flood.',
      grammar: '教学例句，用来固定 assistance 的常见用法。',
      rationale: '不可数，不加 an',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She gave an assistance.',
      right: 'She gave assistance.',
      reason: '不可数，不加 an',
      rule: '不可数，不加 an',
      special: '正式',
    }],
    quiz: [
      { id: 'assistance.q1', senseId: 'assistance.s1', errorType: 'meaning', type: '词义', prompt: 'They offered _____.', options: ['assistance', 'assistants as the mass help noun', 'ascent'], answer: 'assistance', explain: '帮助' },
      { id: 'assistance.q2', senseId: 'assistance.s1', errorType: 'meaning', type: '词义', prompt: 'come to our _____.', options: ['assistance', 'assembly', 'ash'], answer: 'assistance', explain: '短语' },
      { id: 'assistance.q3', senseId: 'assistance.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['assist', 'assess', 'assign'], answer: 'assist', explain: '动词' },
      { id: 'assistance.q4', senseId: 'assistance.s1', errorType: 'meaning', type: '词义', prompt: '人是：', options: ['assistant', 'assistance', 'asset'], answer: 'assistant', explain: '词性' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['assist'] },
  });

  D('assistant', {
    etymology: {
      origin: '英语派生：assist 加 -ant，指助手',
      root: { text: 'assist + -ant', gloss: '助手；助理的' },
      history: [
        { label: '名词或形容词', text: '名词或形容词' },
        { label: 'assistant manager 助理', text: 'assistant manager 助理' },
      ],
      mnemonic: '-ant 表示人',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The assistant showed us to our seats.', chinese: '助理把我们领到座位。' }],
    contexts: [{
      domain: '工作',
      senseId: 'assistant.s1',
      en: 'She works as a research assistant.',
      zh: '她做研究助理。',
      structure: 'She works as a research assistant.',
      grammar: '教学例句，用来固定 assistant 的常见用法。',
      rationale: '人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The assistant was the help itself with no person.',
      right: 'The assistant is a person who helps.',
      reason: '人',
      rule: '人',
      special: '可数',
    }],
    quiz: [
      { id: 'assistant.q1', senseId: 'assistant.s1', errorType: 'meaning', type: '词义', prompt: 'A person who helps a manager is an _____.', options: ['assistant', 'assistance', 'ascent'], answer: 'assistant', explain: '助手' },
      { id: 'assistant.q2', senseId: 'assistant.s1', errorType: 'meaning', type: '词义', prompt: '-ant 常表示：', options: ['人', '抽象帮助', '月份'], answer: '人', explain: '后缀' },
      { id: 'assistant.q3', senseId: 'assistant.s1', errorType: 'meaning', type: '词义', prompt: '抽象的帮助是：', options: ['assistance', 'assistant', 'assembly'], answer: 'assistance', explain: '名词' },
      { id: 'assistant.q4', senseId: 'assistant.s1', errorType: 'meaning', type: '词义', prompt: 'shop _____ .', options: ['assistant', 'artillery', 'atom'], answer: 'assistant', explain: '店员' }
    ],
    usage: { domains: ['工作'], tone: '中性', commonConfusion: ['assistance'] },
  });

  D('associate', {
    etymology: {
      origin: '拉丁语 socius「同伴」，联想或同事',
      root: { text: 'socius', gloss: '联想；同事' },
      history: [
        { label: '动词或名词', text: '动词或名词' },
        { label: 'associate A with B', text: 'associate A with B' },
      ],
      mnemonic: '名词同事',
      note: '动词重音常在第二音节，名词可在第一音节',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I associate that song with summer.', chinese: '我把那首歌和夏天联系在一起。' }],
    contexts: [{
      domain: '心理',
      senseId: 'associate.s1',
      en: 'She is a business associate of my uncle.',
      zh: '她是我叔叔的生意伙伴。',
      structure: 'She is a business associate of my uncle.',
      grammar: '教学例句，用来固定 associate 的常见用法。',
      rationale: '用 with',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I associate the song to summer.',
      right: 'I associate the song with summer.',
      reason: '用 with',
      rule: '用 with',
      special: '动词重音常在第二音节，名词可在第一音节',
    }],
    quiz: [
      { id: 'associate.q1', senseId: 'associate.s1', errorType: 'meaning', type: '词义', prompt: 'People _____ red with danger.', options: ['associate', 'assault', 'assess'], answer: 'associate', explain: '联想' },
      { id: 'associate.q2', senseId: 'associate.s1', errorType: 'meaning', type: '词义', prompt: 'associate A _____ B.', options: ['with', 'to', 'for'], answer: 'with', explain: 'with' },
      { id: 'associate.q3', senseId: 'associate.s1', errorType: 'meaning', type: '词义', prompt: '同事义是：', options: ['名词', '只能是炮', '只能是灰'], answer: '名词', explain: '人' },
      { id: 'associate.q4', senseId: 'associate.s1', errorType: 'meaning', type: '词义', prompt: 'assembly 是：', options: ['集会或装配', '联想', '资产'], answer: '集会或装配', explain: '易混' }
    ],
    usage: { domains: ['心理'], tone: '中性', commonConfusion: ['association'] },
  });

  D('associated', {
    etymology: {
      origin: '英语派生：associate 的过去分词作形容词',
      root: { text: 'associate', gloss: '有关联的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'associated with', text: 'associated with' },
      ],
      mnemonic: '说明相关而非完全相同',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Stress is associated with poor sleep.', chinese: '压力与睡眠差有关。' }],
    contexts: [{
      domain: '学术',
      senseId: 'associated.s1',
      en: 'The illness is associated with dirty water.',
      zh: '这种病与不洁饮水有关。',
      structure: 'The illness is associated with dirty water.',
      grammar: '教学例句，用来固定 associated 的常见用法。',
      rationale: '用 with',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Stress is associated to sleep.',
      right: 'Stress is associated with poor sleep.',
      reason: '用 with',
      rule: '用 with',
      special: '正式',
    }],
    quiz: [
      { id: 'associated.q1', senseId: 'associated.s1', errorType: 'meaning', type: '词义', prompt: 'Risk is _____ with speed.', options: ['associated', 'ashamed', 'asleep'], answer: 'associated', explain: '相关' },
      { id: 'associated.q2', senseId: 'associated.s1', errorType: 'meaning', type: '词义', prompt: '介词是：', options: ['with', 'to', 'at'], answer: 'with', explain: 'with' },
      { id: 'associated.q3', senseId: 'associated.s1', errorType: 'meaning', type: '词义', prompt: 'associated 的词性常是：', options: ['形容词', '冠词', '月份'], answer: '形容词', explain: '分词' },
      { id: 'associated.q4', senseId: 'associated.s1', errorType: 'meaning', type: '词义', prompt: '不要写成 ashamed，那是：', options: ['羞耻', '相关', '岸上'], answer: '羞耻', explain: '形近' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['associate'] },
  });

  D('association', {
    etymology: {
      origin: '英语派生：associate 加名词后缀，协会或联想',
      root: { text: 'associate', gloss: '协会；联想' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'an association of writers', text: 'an association of writers' },
      ],
      mnemonic: '也指心理联系',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She joined a sports association.', chinese: '她加入了一个体育协会。' }],
    contexts: [{
      domain: '社会',
      senseId: 'association.s1',
      en: 'The word has a strong association with childhood.',
      zh: '这个词和童年有很强的联想。',
      structure: 'The word has a strong association with childhood.',
      grammar: '教学例句，用来固定 association 的常见用法。',
      rationale: '用 with',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The association with childhood uses to.',
      right: 'The word has an association with childhood.',
      reason: '用 with',
      rule: '用 with',
      special: '可数',
    }],
    quiz: [
      { id: 'association.q1', senseId: 'association.s1', errorType: 'meaning', type: '词义', prompt: 'A club with a shared interest can be an _____.', options: ['association', 'assassination', 'ascent'], answer: 'association', explain: '协会' },
      { id: 'association.q2', senseId: 'association.s1', errorType: 'meaning', type: '词义', prompt: 'association _____ home.', options: ['with', 'for art', 'at axe'], answer: 'with', explain: '联想' },
      { id: 'association.q3', senseId: 'association.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['associate', 'assassinate', 'assess'], answer: 'associate', explain: '动词' },
      { id: 'association.q4', senseId: 'association.s1', errorType: 'meaning', type: '词义', prompt: '行刺名词是：', options: ['assassination', 'association', 'assembly'], answer: 'assassination', explain: '拼写更长' }
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['associate'] },
  });

  D('assorted', {
    etymology: {
      origin: '与 sort「种类」有关，混在一起的各种',
      root: { text: 'sort', gloss: '什锦的；各种各样的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'assorted chocolates', text: 'assorted chocolates' },
      ],
      mnemonic: '强调种类混杂',
      note: '常前置',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The tin holds assorted biscuits.', chinese: '罐子里装着什锦饼干。' }],
    contexts: [{
      domain: '日常',
      senseId: 'assorted.s1',
      en: 'We bought a box of assorted teas.',
      zh: '我们买了一盒混合茶叶。',
      structure: 'We bought a box of assorted teas.',
      grammar: '教学例句，用来固定 assorted 的常见用法。',
      rationale: '多种',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The biscuits were assorted with one kind only.',
      right: 'Assorted biscuits are of several kinds.',
      reason: '多种',
      rule: '多种',
      special: '常前置',
    }],
    quiz: [
      { id: 'assorted.q1', senseId: 'assorted.s1', errorType: 'meaning', type: '词义', prompt: 'A box of mixed types is _____.', options: ['assorted', 'ashamed', 'asleep'], answer: 'assorted', explain: '什锦' },
      { id: 'assorted.q2', senseId: 'assorted.s1', errorType: 'meaning', type: '词义', prompt: 'assorted 与 _____ 同族。', options: ['sort', 'ash', 'axe'], answer: 'sort', explain: '种类' },
      { id: 'assorted.q3', senseId: 'assorted.s1', errorType: 'meaning', type: '词义', prompt: '名词「混合物」是：', options: ['assortment', 'assassination', 'ascent'], answer: 'assortment', explain: '名词' },
      { id: 'assorted.q4', senseId: 'assorted.s1', errorType: 'meaning', type: '词义', prompt: 'assorted 不是：', options: ['感到羞耻', '睡着', '在岸上'], answer: '感到羞耻', explain: '形近' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['assortment'] },
  });

  D('assortment', {
    etymology: {
      origin: '英语派生：assort 加 -ment',
      root: { text: 'sort', gloss: '各式各样的一组' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'an assortment of', text: 'an assortment of' },
      ],
      mnemonic: '可数',
      note: '比 assorted 更名词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The shop offers an assortment of cheeses.', chinese: '店里有各式奶酪。' }],
    contexts: [{
      domain: '商业',
      senseId: 'assortment.s1',
      en: 'An assortment of tools hung on the wall.',
      zh: '墙上挂着各式工具。',
      structure: 'An assortment of tools hung on the wall.',
      grammar: '教学例句，用来固定 assortment 的常见用法。',
      rationale: '多种',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'An assortment of cheese means one single type.',
      right: 'An assortment of cheeses means several kinds.',
      reason: '多种',
      rule: '多种',
      special: '比 assorted 更名词',
    }],
    quiz: [
      { id: 'assortment.q1', senseId: 'assortment.s1', errorType: 'meaning', type: '词义', prompt: 'an assortment _____ hats.', options: ['of', 'for', 'at'], answer: 'of', explain: 'of' },
      { id: 'assortment.q2', senseId: 'assortment.s1', errorType: 'meaning', type: '词义', prompt: '-ment 是：', options: ['名词后缀', '副词', '否定'], answer: '名词后缀', explain: '词性' },
      { id: 'assortment.q3', senseId: 'assortment.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['assorted', 'ashamed', 'atomic'], answer: 'assorted', explain: '形容词' },
      { id: 'assortment.q4', senseId: 'assortment.s1', errorType: 'meaning', type: '词义', prompt: 'assassination 是：', options: ['行刺', '什锦', '攀登'], answer: '行刺', explain: '无关' }
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['assorted'] },
  });

  D('assume', {
    etymology: {
      origin: '拉丁语 assumere「拿起来」，假定、承担或呈现出',
      root: { text: 'sumere', gloss: '假定；承担' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'assume that', text: 'assume that' },
      ],
      mnemonic: 'assume responsibility',
      note: '也指呈现出某种样子',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I assume you have read the note.', chinese: '我假定你已经读过便条。' }],
    contexts: [{
      domain: '日常',
      senseId: 'assume.s1',
      en: 'She assumed responsibility for the error.',
      zh: '她承担了这个错误的责任。',
      structure: 'She assumed responsibility for the error.',
      grammar: '教学例句，用来固定 assume 的常见用法。',
      rationale: '用 that',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I assume you to have the note as the main pattern.',
      right: 'I assume that you have read the note.',
      reason: '用 that',
      rule: '用 that',
      special: '也指呈现出某种样子',
    }],
    quiz: [
      { id: 'assume.q1', senseId: 'assume.s1', errorType: 'meaning', type: '词义', prompt: 'I _____ the shop is open.', options: ['assume', 'assemble', 'assault'], answer: 'assume', explain: '假定' },
      { id: 'assume.q2', senseId: 'assume.s1', errorType: 'meaning', type: '词义', prompt: 'assume _____ for the mistake.', options: ['responsibility', 'ash', 'axe'], answer: 'responsibility', explain: '承担责任' },
      { id: 'assume.q3', senseId: 'assume.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['assumption', 'assembly', 'assertion'], answer: 'assumption', explain: '名词' },
      { id: 'assume.q4', senseId: 'assume.s1', errorType: 'meaning', type: '词义', prompt: 'assemble 是：', options: ['集合或组装', '假定', '袭击'], answer: '集合或组装', explain: '易混' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['assumption'] },
  });

  D('assumed', {
    etymology: {
      origin: '英语派生：assume 的过去分词',
      root: { text: 'assume', gloss: '假定的；假冒的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'an assumed name 假名', text: 'an assumed name 假名' },
      ],
      mnemonic: 'the assumed result 假定的结果',
      note: '与 assumption 名词对应',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He travelled under an assumed name.', chinese: '他用假名旅行。' }],
    contexts: [{
      domain: '新闻',
      senseId: 'assumed.s1',
      en: 'The assumed cost was lower than the real bill.',
      zh: '原先假定的费用低于实际账单。',
      structure: 'The assumed cost was lower than the real bill.',
      grammar: '教学例句，用来固定 assumed 的常见用法。',
      rationale: '假名',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He used an assumed name means the real name.',
      right: 'An assumed name is not the real one.',
      reason: '假名',
      rule: '假名',
      special: '与 assumption 名词对应',
    }],
    quiz: [
      { id: 'assumed.q1', senseId: 'assumed.s1', errorType: 'meaning', type: '词义', prompt: 'A name that is not real is an _____ name.', options: ['assumed', 'ashamed', 'asleep'], answer: 'assumed', explain: '假名' },
      { id: 'assumed.q2', senseId: 'assumed.s1', errorType: 'meaning', type: '词义', prompt: '过去分词来自动词：', options: ['assume', 'assemble', 'attack'], answer: 'assume', explain: '动词' },
      { id: 'assumed.q3', senseId: 'assumed.s1', errorType: 'meaning', type: '词义', prompt: 'assumed 不是：', options: ['羞耻的', '睡着的', '灰白的'], answer: '羞耻的', explain: '形近' },
      { id: 'assumed.q4', senseId: 'assumed.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['assumption', 'ascent', 'asset'], answer: 'assumption', explain: '名词' }
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['assume'] },
  });

  D('assumption', {
    etymology: {
      origin: '英语派生：assume 加 -tion',
      root: { text: 'assume + -tion', gloss: '假定；假设' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'on the assumption that', text: 'on the assumption that' },
      ],
      mnemonic: '可数',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The plan rests on a false assumption.', chinese: '计划建立在一个错误假定上。' }],
    contexts: [{
      domain: '学术',
      senseId: 'assumption.s1',
      en: 'We worked on the assumption that the train was late.',
      zh: '我们按火车晚点这一假定来安排。',
      structure: 'We worked on the assumption that the train was late.',
      grammar: '教学例句，用来固定 assumption 的常见用法。',
      rationale: 'that',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'on the assumption to he left.',
      right: 'on the assumption that he had left.',
      reason: 'that',
      rule: 'that',
      special: '正式',
    }],
    quiz: [
      { id: 'assumption.q1', senseId: 'assumption.s1', errorType: 'meaning', type: '词义', prompt: 'The idea you treat as true is an _____.', options: ['assumption', 'ascent', 'aspic'], answer: 'assumption', explain: '假设' },
      { id: 'assumption.q2', senseId: 'assumption.s1', errorType: 'meaning', type: '词义', prompt: 'on the assumption _____.', options: ['that', 'to', 'for'], answer: 'that', explain: 'that' },
      { id: 'assumption.q3', senseId: 'assumption.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['assume', 'assemble', 'assess'], answer: 'assume', explain: '动词' },
      { id: 'assumption.q4', senseId: 'assumption.s1', errorType: 'meaning', type: '词义', prompt: '不要写成：', options: ['assassination', 'atom', 'aunt'], answer: 'assassination', explain: '行刺' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['assume'] },
  });

  D('assurance', {
    etymology: {
      origin: '与 sure、assure 同族，保证或把握',
      root: { text: 'sure', gloss: '保证；把握' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'give an assurance that', text: 'give an assurance that' },
      ],
      mnemonic: '也可指自信',
      note: '不可数或可数视语境',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He gave an assurance that the work would be finished.', chinese: '他保证工作会完成。' }],
    contexts: [{
      domain: '书面',
      senseId: 'assurance.s1',
      en: 'She answered with quiet assurance.',
      zh: '她带着平静的把握回答。',
      structure: 'She answered with quiet assurance.',
      grammar: '教学例句，用来固定 assurance 的常见用法。',
      rationale: 'that',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He gave an assurance to the work is done.',
      right: 'He gave an assurance that the work was done.',
      reason: 'that',
      rule: 'that',
      special: '不可数或可数视语境',
    }],
    quiz: [
      { id: 'assurance.q1', senseId: 'assurance.s1', errorType: 'meaning', type: '词义', prompt: 'A firm promise can be an _____.', options: ['assurance', 'ascent', 'artillery'], answer: 'assurance', explain: '保证' },
      { id: 'assurance.q2', senseId: 'assurance.s1', errorType: 'meaning', type: '词义', prompt: '自信也可叫 _____.', options: ['assurance', 'ash', 'axe'], answer: 'assurance', explain: '把握' },
      { id: 'assurance.q3', senseId: 'assurance.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['assure', 'assume', 'assemble'], answer: 'assure', explain: '动词' },
      { id: 'assurance.q4', senseId: 'assurance.s1', errorType: 'meaning', type: '词义', prompt: 'insurance 是：', options: ['保险', '保证的动词', '集合'], answer: '保险', explain: '形近但不同' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['assure'] },
  });

  D('assure', {
    etymology: {
      origin: '与 sure 同族，使某人确信',
      root: { text: 'sure', gloss: '向……保证' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'assure somebody that', text: 'assure somebody that' },
      ],
      mnemonic: 'assure somebody of something',
      note: '对象是人',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I assure you that the door is locked.', chinese: '我向你保证门锁上了。' }],
    contexts: [{
      domain: '日常',
      senseId: 'assure.s1',
      en: 'She assured us of her support.',
      zh: '她向我们保证会支持。',
      structure: 'She assured us of her support.',
      grammar: '教学例句，用来固定 assure 的常见用法。',
      rationale: '必须有人作宾语',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I assure that the door is locked.',
      right: 'I assure you that the door is locked.',
      reason: '必须有人作宾语',
      rule: '必须有人作宾语',
      special: '对象是人',
    }],
    quiz: [
      { id: 'assure.q1', senseId: 'assure.s1', errorType: 'meaning', type: '词义', prompt: 'I _____ you the keys are here.', options: ['assure', 'assume', 'assess'], answer: 'assure', explain: '向你保证' },
      { id: 'assure.q2', senseId: 'assure.s1', errorType: 'meaning', type: '词义', prompt: 'assure us _____ their help.', options: ['of', 'for', 'at'], answer: 'of', explain: 'of' },
      { id: 'assure.q3', senseId: 'assure.s1', errorType: 'meaning', type: '词义', prompt: 'assume 是：', options: ['假定', '向人保证', '组装'], answer: '假定', explain: '易混' },
      { id: 'assure.q4', senseId: 'assure.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['assurance', 'assumption', 'assembly'], answer: 'assurance', explain: '名词' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['assurance'] },
  });

  D('astonish', {
    etymology: {
      origin: '与「雷击般震惊」一系相关，现代就是使人大吃一惊',
      root: { text: 'astonish', gloss: '使惊讶' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'astonish somebody', text: 'astonish somebody' },
      ],
      mnemonic: '形容词 astonishing，过去分词 astonished',
      note: '比 surprise 程度强',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The news astonished everyone in the room.', chinese: '这消息让房间里的每个人大吃一惊。' }],
    contexts: [{
      domain: '情感',
      senseId: 'astonish.s1',
      en: 'It astonishes me that he refused.',
      zh: '他拒绝了，这让我很惊讶。',
      structure: 'It astonishes me that he refused.',
      grammar: '教学例句，用来固定 astonish 的常见用法。',
      rationale: '直接接人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The news astonished to everyone.',
      right: 'The news astonished everyone.',
      reason: '直接接人',
      rule: '直接接人',
      special: '比 surprise 程度强',
    }],
    quiz: [
      { id: 'astonish.q1', senseId: 'astonish.s1', errorType: 'meaning', type: '词义', prompt: 'The result will _____ the class.', options: ['astonish', 'assemble', 'assess'], answer: 'astonish', explain: '使惊讶' },
      { id: 'astonish.q2', senseId: 'astonish.s1', errorType: 'meaning', type: '词义', prompt: '感到惊讶的人是 _____.', options: ['astonished', 'astonishing as the person', 'ascending'], answer: 'astonished', explain: '人' },
      { id: 'astonish.q3', senseId: 'astonish.s1', errorType: 'meaning', type: '词义', prompt: '令人惊讶的事是 _____.', options: ['astonishing', 'astonished for the thing', 'ashen'], answer: 'astonishing', explain: '事物' },
      { id: 'astonish.q4', senseId: 'astonish.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['astonishment', 'assessment', 'assignment'], answer: 'astonishment', explain: '名词' }
    ],
    usage: { domains: ['情感'], tone: '中性', commonConfusion: ['astonishment'] },
  });

  D('astonishment', {
    etymology: {
      origin: '英语派生：astonish 加 -ment',
      root: { text: 'astonish + -ment', gloss: '惊愕' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'in astonishment', text: 'in astonishment' },
      ],
      mnemonic: '不可数',
      note: 'to one\'s astonishment',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She stared in astonishment.', chinese: '她惊愕地盯着。' }],
    contexts: [{
      domain: '情感',
      senseId: 'astonishment.s1',
      en: 'To our astonishment, the door was open.',
      zh: '令我们惊讶的是，门开着。',
      structure: 'To our astonishment, the door was open.',
      grammar: '教学例句，用来固定 astonishment 的常见用法。',
      rationale: '名词不能当动词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She astonishment the class.',
      right: 'The result astonished the class.',
      reason: '名词不能当动词',
      rule: '名词不能当动词',
      special: 'to one\'s astonishment',
    }],
    quiz: [
      { id: 'astonishment.q1', senseId: 'astonishment.s1', errorType: 'meaning', type: '词义', prompt: 'They gasped in _____.', options: ['astonishment', 'assessment', 'assembly'], answer: 'astonishment', explain: '惊愕' },
      { id: 'astonishment.q2', senseId: 'astonishment.s1', errorType: 'meaning', type: '词义', prompt: 'To my _____, he won.', options: ['astonishment', 'ascent', 'asset'], answer: 'astonishment', explain: '令我惊讶' },
      { id: 'astonishment.q3', senseId: 'astonishment.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['astonish', 'assess', 'assign'], answer: 'astonish', explain: '动词' },
      { id: 'astonishment.q4', senseId: 'astonishment.s1', errorType: 'meaning', type: '词义', prompt: '-ment 构成：', options: ['名词', '副词', '介词'], answer: '名词', explain: '后缀' }
    ],
    usage: { domains: ['情感'], tone: '中性', commonConfusion: ['astonish'] },
  });

  D('astound', {
    etymology: {
      origin: '与 astonish 近义，语气更强，使震惊',
      root: { text: 'astound', gloss: '使震惊' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'astound somebody', text: 'astound somebody' },
      ],
      mnemonic: '形容词 astounding',
      note: '书面或强调',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The view from the ridge astounded us.', chinese: '山脊上的景色让我们震惊。' }],
    contexts: [{
      domain: '描写',
      senseId: 'astound.s1',
      en: 'It astounds me how fast the town has grown.',
      zh: '这座城长得这么快，令我震惊。',
      structure: 'It astounds me how fast the town has grown.',
      grammar: '教学例句，用来固定 astound 的常见用法。',
      rationale: '直接接人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The view astounded to us.',
      right: 'The view astounded us.',
      reason: '直接接人',
      rule: '直接接人',
      special: '书面或强调',
    }],
    quiz: [
      { id: 'astound.q1', senseId: 'astound.s1', errorType: 'meaning', type: '词义', prompt: 'A stronger word than surprise here is _____.', options: ['astound', 'assemble', 'audit'], answer: 'astound', explain: '震惊' },
      { id: 'astound.q2', senseId: 'astound.s1', errorType: 'meaning', type: '词义', prompt: 'astound 的对象是：', options: ['人', '一把斧头必须', '一条轴线必须'], answer: '人', explain: '人' },
      { id: 'astound.q3', senseId: 'astound.s1', errorType: 'meaning', type: '词义', prompt: '令人震惊的：', options: ['astounding', 'astounded for the cause', 'asleep'], answer: 'astounding', explain: '事物' },
      { id: 'astound.q4', senseId: 'astound.s1', errorType: 'meaning', type: '词义', prompt: '和 astonish 的关系是：', options: ['近义且往往更强', '反义', '拼写完全相同'], answer: '近义且往往更强', explain: '程度' }
    ],
    usage: { domains: ['描写'], tone: '中性', commonConfusion: ['astonish'] },
  });

  D('astray', {
    etymology: {
      origin: '英语派生：a- 加 stray「走散」',
      root: { text: 'stray', gloss: '偏离正路' },
      history: [
        { label: '副词', text: '副词' },
        { label: 'lead somebody astray', text: 'lead somebody astray' },
      ],
      mnemonic: 'go astray 丢失或误入',
      note: '副词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'One page of the report went astray.', chinese: '报告的一页不见了。' }],
    contexts: [{
      domain: '日常',
      senseId: 'astray.s1',
      en: 'Bad advice led him astray.',
      zh: '糟糕的建议把他引入歧途。',
      structure: 'Bad advice led him astray.',
      grammar: '教学例句，用来固定 astray 的常见用法。',
      rationale: '用 go astray',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The page astrayed.',
      right: 'The page went astray.',
      reason: '用 go astray',
      rule: '用 go astray',
      special: '副词',
    }],
    quiz: [
      { id: 'astray.q1', senseId: 'astray.s1', errorType: 'meaning', type: '词义', prompt: 'The letter went _____.', options: ['astray', 'ashore', 'aside'], answer: 'astray', explain: '遗失或走偏' },
      { id: 'astray.q2', senseId: 'astray.s1', errorType: 'meaning', type: '词义', prompt: 'lead somebody _____ .', options: ['astray', 'ascent', 'asset'], answer: 'astray', explain: '引入歧途' },
      { id: 'astray.q3', senseId: 'astray.s1', errorType: 'meaning', type: '词义', prompt: 'stray 的意思是：', options: ['走散', '岸', '上升'], answer: '走散', explain: '词族' },
      { id: 'astray.q4', senseId: 'astray.s1', errorType: 'meaning', type: '词义', prompt: 'ashore 是：', options: ['上岸', '走偏', '羞耻'], answer: '上岸', explain: '形近' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['stray'] },
  });

  D('astronaut', {
    etymology: {
      origin: '希腊语来源的构词：astro「星」加 naut「航行者」',
      root: { text: 'astro + naut', gloss: '宇航员' },
      history: [
        { label: '复合词', text: '复合词' },
        { label: '在太空中航行的人', text: '在太空中航行的人' },
      ],
      mnemonic: '-naut 与 nautical 同族',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The astronaut described the view of Earth.', chinese: '宇航员描述了从太空看地球的景象。' }],
    contexts: [{
      domain: '科学',
      senseId: 'astronaut.s1',
      en: 'Three astronauts boarded the craft at dawn.',
      zh: '三名宇航员在黎明登上飞船。',
      structure: 'Three astronauts boarded the craft at dawn.',
      grammar: '教学例句，用来固定 astronaut 的常见用法。',
      rationale: '太空人员',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The astronaut studies coins.',
      right: 'The astronaut travels in space.',
      reason: '太空人员',
      rule: '太空人员',
      special: '可数',
    }],
    quiz: [
      { id: 'astronaut.q1', senseId: 'astronaut.s1', errorType: 'meaning', type: '词义', prompt: 'A person who travels in space is an _____.', options: ['astronaut', 'astronomer as the traveller', 'auditor'], answer: 'astronaut', explain: '宇航员' },
      { id: 'astronaut.q2', senseId: 'astronaut.s1', errorType: 'meaning', type: '词义', prompt: 'astro 与 _____ 有关。', options: ['stars', 'ashes', 'axes'], answer: 'stars', explain: '星' },
      { id: 'astronaut.q3', senseId: 'astronaut.s1', errorType: 'meaning', type: '词义', prompt: '船上的 -naut 让人想到：', options: ['航行', '审计', '秋季'], answer: '航行', explain: '航海' },
      { id: 'astronaut.q4', senseId: 'astronaut.s1', errorType: 'meaning', type: '词义', prompt: '研究星星但不一定上天的人是：', options: ['astronomer', 'astronaut only', 'assassin'], answer: 'astronomer', explain: '职业不同' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['astronomer'] },
  });

  D('astronomer', {
    etymology: {
      origin: '英语派生：astronomy 加 -er',
      root: { text: 'astronomy + -er', gloss: '天文学家' },
      history: [
        { label: '名词', text: '名词' },
        { label: '研究天体的人', text: '研究天体的人' },
      ],
      mnemonic: '不一定进入太空',
      note: '-er 表人',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The astronomer worked through the night.', chinese: '天文学家工作了一整夜。' }],
    contexts: [{
      domain: '科学',
      senseId: 'astronomer.s1',
      en: 'An astronomer explained why the planet looked brighter.',
      zh: '一位天文学家解释了这颗行星为何看起来更亮。',
      structure: 'An astronomer explained why the planet looked brighter.',
      grammar: '教学例句，用来固定 astronomer 的常见用法。',
      rationale: '研究对象是天体',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The astronomer fixed teeth.',
      right: 'The astronomer studies space.',
      reason: '研究对象是天体',
      rule: '研究对象是天体',
      special: '-er 表人',
    }],
    quiz: [
      { id: 'astronomer.q1', senseId: 'astronomer.s1', errorType: 'meaning', type: '词义', prompt: 'A scientist who studies stars is an _____.', options: ['astronomer', 'astronaut only if they fly', 'artist'], answer: 'astronomer', explain: '天文学家' },
      { id: 'astronomer.q2', senseId: 'astronomer.s1', errorType: 'meaning', type: '词义', prompt: '-er 表示：', options: ['人', '否定', '地点'], answer: '人', explain: '后缀' },
      { id: 'astronomer.q3', senseId: 'astronomer.s1', errorType: 'meaning', type: '词义', prompt: '进入太空旅行的人是：', options: ['astronaut', 'astronomer always', 'auditor'], answer: 'astronaut', explain: '对比' },
      { id: 'astronomer.q4', senseId: 'astronomer.s1', errorType: 'meaning', type: '词义', prompt: 'astronomy 是：', options: ['学科', '人', '斧头'], answer: '学科', explain: '名词' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['astronomy'] },
  });

  D('astronomy', {
    etymology: {
      origin: 'astro「天体」加 nomos「规则、学科」',
      root: { text: 'astro + nomy', gloss: '天文学' },
      history: [
        { label: '学科名词', text: '学科名词' },
        { label: '不可数', text: '不可数' },
      ],
      mnemonic: '研究星体、行星和空间',
      note: '不要和 astrology 占星混淆',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She hopes to study astronomy.', chinese: '她希望学习天文学。' }],
    contexts: [{
      domain: '教育',
      senseId: 'astronomy.s1',
      en: 'Astronomy asks how stars are born.',
      zh: '天文学追问恒星如何诞生。',
      structure: 'Astronomy asks how stars are born.',
      grammar: '教学例句，用来固定 astronomy 的常见用法。',
      rationale: '占星不是这个学科',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Astronomy tells your lucky day.',
      right: 'Astronomy studies stars and planets.',
      reason: '占星不是这个学科',
      rule: '占星不是这个学科',
      special: '不要和 astrology 占星混淆',
    }],
    quiz: [
      { id: 'astronomy.q1', senseId: 'astronomy.s1', errorType: 'meaning', type: '词义', prompt: 'The science of stars is _____.', options: ['astronomy', 'astrology as science', 'audit'], answer: 'astronomy', explain: '天文学' },
      { id: 'astronomy.q2', senseId: 'astronomy.s1', errorType: 'meaning', type: '词义', prompt: '占星术是另一词：', options: ['astrology', 'astronomy', 'atom'], answer: 'astrology', explain: '易混' },
      { id: 'astronomy.q3', senseId: 'astronomy.s1', errorType: 'meaning', type: '词义', prompt: '从事者是：', options: ['astronomer', 'astronaut only', 'author'], answer: 'astronomer', explain: '人' },
      { id: 'astronomy.q4', senseId: 'astronomy.s1', errorType: 'meaning', type: '词义', prompt: 'astro 指：', options: ['天体', '灰', '岸'], answer: '天体', explain: '词根' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['astronaut'] },
  });

  D('astrophysics', {
    etymology: {
      origin: '英语派生：astro 加 physics',
      root: { text: 'astro + physics', gloss: '天体物理学' },
      history: [
        { label: '学科名词', text: '学科名词' },
        { label: '用物理研究天体', text: '用物理研究天体' },
      ],
      mnemonic: '不可数',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Astrophysics explains the light of stars.', chinese: '天体物理学解释恒星的光。' }],
    contexts: [{
      domain: '科学',
      senseId: 'astrophysics.s1',
      en: 'She wrote her thesis in astrophysics.',
      zh: '她的论文写的是天体物理学。',
      structure: 'She wrote her thesis in astrophysics.',
      grammar: '教学例句，用来固定 astrophysics 的常见用法。',
      rationale: '学科',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Astrophysics is a type of bread.',
      right: 'Astrophysics is a branch of science.',
      reason: '学科',
      rule: '学科',
      special: '正式',
    }],
    quiz: [
      { id: 'astrophysics.q1', senseId: 'astrophysics.s1', errorType: 'meaning', type: '词义', prompt: 'Physics of stars is _____.', options: ['astrophysics', 'aspic', 'artillery'], answer: 'astrophysics', explain: '天体物理' },
      { id: 'astrophysics.q2', senseId: 'astrophysics.s1', errorType: 'meaning', type: '词义', prompt: 'astro 表示与 _____ 有关。', options: ['space and stars', 'kitchens', 'rivers only'], answer: 'space and stars', explain: '天体' },
      { id: 'astrophysics.q3', senseId: 'astrophysics.s1', errorType: 'meaning', type: '词义', prompt: 'physics 是：', options: ['物理学', '火炮', '肉冻'], answer: '物理学', explain: '组成' },
      { id: 'astrophysics.q4', senseId: 'astrophysics.s1', errorType: 'meaning', type: '词义', prompt: '普通天文学不特别强调物理时可说：', options: ['astronomy', 'astrophysics always the same', 'audit'], answer: 'astronomy', explain: '更广' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['astronomy'] },
  });

  D('astute', {
    etymology: {
      origin: '拉丁语 astutus「精明」，指判断敏锐',
      root: { text: 'astutus', gloss: '精明的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '褒义居多', text: '褒义居多' },
      ],
      mnemonic: '看人、看局势',
      note: '副词 astutely',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'An astute question ended the argument.', chinese: '一个精明的问题结束了争论。' }],
    contexts: [{
      domain: '评论',
      senseId: 'astute.s1',
      en: 'She made an astute guess about the missing page.',
      zh: '她对缺失的那一页作了敏锐的猜测。',
      structure: 'She made an astute guess about the missing page.',
      grammar: '教学例句，用来固定 astute 的常见用法。',
      rationale: '形容词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'His astute was a noun in this sentence.',
      right: 'He is astute.',
      reason: '形容词',
      rule: '形容词',
      special: '副词 astutely',
    }],
    quiz: [
      { id: 'astute.q1', senseId: 'astute.s1', errorType: 'meaning', type: '词义', prompt: 'A sharp judge of people is _____.', options: ['astute', 'asleep', 'ashamed'], answer: 'astute', explain: '精明' },
      { id: 'astute.q2', senseId: 'astute.s1', errorType: 'meaning', type: '词义', prompt: 'astute 多是：', options: ['夸奖', '骂人驴', '医学动脉'], answer: '夸奖', explain: '褒义' },
      { id: 'astute.q3', senseId: 'astute.s1', errorType: 'meaning', type: '词义', prompt: '不要和 astronaut 混淆，那是：', options: ['宇航员', '精明', '肉冻'], answer: '宇航员', explain: '形近开头' },
      { id: 'astute.q4', senseId: 'astute.s1', errorType: 'meaning', type: '词义', prompt: '副词可用：', options: ['astutely', 'astute as adverb without -ly always', 'audit'], answer: 'astutely', explain: '-ly' }
    ],
    usage: { domains: ['评论'], tone: '中性', commonConfusion: ['sharp'] },
  });

  D('asylum', {
    etymology: {
      origin: '希腊语 asylon「不可夺走的避难处」',
      root: { text: 'asylon', gloss: '庇护；避难' },
      history: [
        { label: '名词', text: '名词' },
        { label: '政治庇护 political asylum', text: '政治庇护 political asylum' },
      ],
      mnemonic: '也可指昔日精神病院，现代用该义要谨慎',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She was granted asylum.', chinese: '她获得了庇护。' }],
    contexts: [{
      domain: '社会',
      senseId: 'asylum.s1',
      en: 'The family sought asylum after leaving their country.',
      zh: '这家人离开祖国后寻求庇护。',
      structure: 'The family sought asylum after leaving their country.',
      grammar: '教学例句，用来固定 asylum 的常见用法。',
      rationale: '名词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They asylum the visitors as a verb.',
      right: 'They were granted asylum.',
      reason: '名词',
      rule: '名词',
      special: '正式',
    }],
    quiz: [
      { id: 'asylum.q1', senseId: 'asylum.s1', errorType: 'meaning', type: '词义', prompt: 'Protection for someone who has fled is _____.', options: ['asylum', 'aspic', 'ascent'], answer: 'asylum', explain: '庇护' },
      { id: 'asylum.q2', senseId: 'asylum.s1', errorType: 'meaning', type: '词义', prompt: 'seek _____ .', options: ['asylum', 'assembly', 'asset'], answer: 'asylum', explain: '寻求庇护' },
      { id: 'asylum.q3', senseId: 'asylum.s1', errorType: 'meaning', type: '词义', prompt: 'asylum 不是：', options: ['肉冻', '攀登', '资产'], answer: '肉冻', explain: '形近少' },
      { id: 'asylum.q4', senseId: 'asylum.s1', errorType: 'meaning', type: '词义', prompt: '政治语境常说 political _____.', options: ['asylum', 'artillery', 'atom'], answer: 'asylum', explain: '搭配' }
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['refuge'] },
  });

  D('asymmetrical', {
    etymology: {
      origin: '英语派生：a-「不」加 symmetrical「对称的」',
      root: { text: 'a- + symmetrical', gloss: '不对称的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '两边不一样', text: '两边不一样' },
      ],
      mnemonic: '名词 asymmetry',
      note: '科学或设计',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The pattern is asymmetrical on purpose.', chinese: '这个图案故意做成不对称。' }],
    contexts: [{
      domain: '设计',
      senseId: 'asymmetrical.s1',
      en: 'An asymmetrical face is still a normal human face.',
      zh: '脸不完全对称仍是正常的人脸。',
      structure: 'An asymmetrical face is still a normal human face.',
      grammar: '教学例句，用来固定 asymmetrical 的常见用法。',
      rationale: '不对称',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The two halves were asymmetrical so they matched exactly.',
      right: 'Asymmetrical halves do not match.',
      reason: '不对称',
      rule: '不对称',
      special: '科学或设计',
    }],
    quiz: [
      { id: 'asymmetrical.q1', senseId: 'asymmetrical.s1', errorType: 'meaning', type: '词义', prompt: 'Shapes that do not match on both sides are _____.', options: ['asymmetrical', 'symmetrical', 'atomic'], answer: 'asymmetrical', explain: '不对称' },
      { id: 'asymmetrical.q2', senseId: 'asymmetrical.s1', errorType: 'meaning', type: '词义', prompt: 'a- 在这里表示：', options: ['不', '再次', '朝向岸'], answer: '不', explain: '否定' },
      { id: 'asymmetrical.q3', senseId: 'asymmetrical.s1', errorType: 'meaning', type: '词义', prompt: '对称的是：', options: ['symmetrical', 'ashamed', 'asleep'], answer: 'symmetrical', explain: '反义' },
      { id: 'asymmetrical.q4', senseId: 'asymmetrical.s1', errorType: 'meaning', type: '词义', prompt: '名词常是：', options: ['asymmetry', 'assassination', 'ascent'], answer: 'asymmetry', explain: '名词' }
    ],
    usage: { domains: ['设计'], tone: '中性', commonConfusion: ['symmetrical'] },
  });

  D('at', {
    etymology: {
      origin: '古英语功能词，标地点、时刻、方向或比率，不拆假词根',
      root: { text: 'at', gloss: '在；向；以' },
      history: [
        { label: '介词', text: '介词' },
        { label: 'at night，at the door，at 50 kilometres an hour', text: 'at night，at the door，at 50 kilometres an hour' },
      ],
      mnemonic: '比 in 更常用于点而非范围',
      note: '时刻用 at',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Meet me at the gate at six.', chinese: '六点在门口见我。' }],
    contexts: [{
      domain: '语法',
      senseId: 'at.s1',
      en: 'The car was moving at a steady speed.',
      zh: '汽车以稳定速度行驶。',
      structure: 'The car was moving at a steady speed.',
      grammar: '教学例句，用来固定 at 的常见用法。',
      rationale: '时刻用 at',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She is good in maths can be in, but a point of time is at noon not in noon.',
      right: 'Meet me at noon.',
      reason: '时刻用 at',
      rule: '时刻用 at',
      special: '时刻用 at',
    }],
    quiz: [
      { id: 'at.q1', senseId: 'at.s1', errorType: 'meaning', type: '词义', prompt: 'Wait _____ the corner.', options: ['at', 'ash', 'axe'], answer: 'at', explain: '地点' },
      { id: 'at.q2', senseId: 'at.s1', errorType: 'meaning', type: '词义', prompt: 'We met _____ noon.', options: ['at', 'in the noon as the fixed error', 'on noon'], answer: 'at', explain: '时刻' },
      { id: 'at.q3', senseId: 'at.s1', errorType: 'meaning', type: '词义', prompt: '速度：_____ 80 kilometres an hour.', options: ['at', 'to', 'of'], answer: 'at', explain: '比率' },
      { id: 'at.q4', senseId: 'at.s1', errorType: 'meaning', type: '词义', prompt: 'at 是：', options: ['介词', '火炮', '细菌'], answer: '介词', explain: '功能词' }
    ],
    usage: { domains: ['语法'], tone: '中性', commonConfusion: ['in'] },
  });

  D('at any time', {
    etymology: {
      origin: '英语短语：at any time，在任何时候',
      root: { text: 'at any time', gloss: '随时' },
      history: [
        { label: '副词短语', text: '副词短语' },
        { label: 'whenever', text: 'whenever' },
      ],
      mnemonic: '语气开放',
      note: '与 at no time 相反',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'You may call at any time.', chinese: '你可以随时打电话。' }],
    contexts: [{
      domain: '日常',
      senseId: 'at any time.s1',
      en: 'Visitors can leave at any time.',
      zh: '参观者可以随时离开。',
      structure: 'Visitors can leave at any time.',
      grammar: '教学例句，用来固定 at any time 的常见用法。',
      rationale: '随时不是「决不」',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'You may call at no time if you mean whenever.',
      right: 'You may call at any time.',
      reason: '随时不是「决不」',
      rule: '随时不是「决不」',
      special: '与 at no time 相反',
    }],
    quiz: [
      { id: 'at any time.q1', senseId: 'at any time.s1', errorType: 'meaning', type: '词义', prompt: 'Come _____.', options: ['at any time', 'at no time', 'astray'], answer: 'at any time', explain: '随时' },
      { id: 'at any time.q2', senseId: 'at any time.s1', errorType: 'meaning', type: '词义', prompt: '反义短语是：', options: ['at no time', 'at once only', 'aside'], answer: 'at no time', explain: '决不' },
      { id: 'at any time.q3', senseId: 'at any time.s1', errorType: 'meaning', type: '词义', prompt: 'at any time 的意思是：', options: ['无论何时', '立刻必须同时', '至于'], answer: '无论何时', explain: '开放' },
      { id: 'at any time.q4', senseId: 'at any time.s1', errorType: 'meaning', type: '词义', prompt: 'any 表示：', options: ['任一', '没有', '岸'], answer: '任一', explain: '词' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['at no time'] },
  });

  D('at no time', {
    etymology: {
      origin: '英语短语：at no time，决不；从不',
      root: { text: 'at no time', gloss: '决不' },
      history: [
        { label: '副词短语', text: '副词短语' },
        { label: '否定', text: '否定' },
      ],
      mnemonic: '放句首时句子倒装',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'At no time did she leave the room.', chinese: '她从未离开过房间。' }],
    contexts: [{
      domain: '语法',
      senseId: 'at no time.s1',
      en: 'At no time should you open that door.',
      zh: '你决不能开那扇门。',
      structure: 'At no time should you open that door.',
      grammar: '教学例句，用来固定 at no time 的常见用法。',
      rationale: '倒装',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'At no time she left.',
      right: 'At no time did she leave.',
      reason: '倒装',
      rule: '倒装',
      special: '正式',
    }],
    quiz: [
      { id: 'at no time.q1', senseId: 'at no time.s1', errorType: 'meaning', type: '词义', prompt: '_____ did he admit the error.', options: ['At no time', 'At any time', 'As well'], answer: 'At no time', explain: '决不' },
      { id: 'at no time.q2', senseId: 'at no time.s1', errorType: 'meaning', type: '词义', prompt: '句首 at no time 后面要：', options: ['倒装', '永远不倒装', '加冠词 the time'], answer: '倒装', explain: '语法' },
      { id: 'at no time.q3', senseId: 'at no time.s1', errorType: 'meaning', type: '词义', prompt: '随时离开是：', options: ['at any time', 'at no time', 'astray'], answer: 'at any time', explain: '反义' },
      { id: 'at no time.q4', senseId: 'at no time.s1', errorType: 'meaning', type: '词义', prompt: 'at no time 表示：', options: ['从来没有哪个时刻', '任何时刻都可以', '一……就'], answer: '从来没有哪个时刻', explain: '否定' }
    ],
    usage: { domains: ['语法'], tone: '中性', commonConfusion: ['at any time'] },
  });

  D('at once', {
    etymology: {
      origin: '英语短语：at once，立刻，或同时',
      root: { text: 'at once', gloss: '立刻；同时' },
      history: [
        { label: '副词短语', text: '副词短语' },
        { label: '两义靠语境', text: '两义靠语境' },
      ],
      mnemonic: 'all at once 常是突然或同时',
      note: '立刻最常见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Come here at once.', chinese: '立刻到这里来。' }],
    contexts: [{
      domain: '日常',
      senseId: 'at once.s1',
      en: 'She cannot watch the baby and cook at once.',
      zh: '她不能同时又看孩子又做饭。',
      structure: 'She cannot watch the baby and cook at once.',
      grammar: '教学例句，用来固定 at once 的常见用法。',
      rationale: '立刻',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Come here at one time only if you mean immediately as at once.',
      right: 'Come here at once.',
      reason: '立刻',
      rule: '立刻',
      special: '立刻最常见',
    }],
    quiz: [
      { id: 'at once.q1', senseId: 'at once.s1', errorType: 'meaning', type: '词义', prompt: 'Do it _____.', options: ['at once', 'at no time', 'as for'], answer: 'at once', explain: '立刻' },
      { id: 'at once.q2', senseId: 'at once.s1', errorType: 'meaning', type: '词义', prompt: '两件事一起发生也可以说 _____.', options: ['at once', 'ashore', 'aside'], answer: 'at once', explain: '同时' },
      { id: 'at once.q3', senseId: 'at once.s1', errorType: 'meaning', type: '词义', prompt: 'at no time 是：', options: ['决不', '立刻', '至于'], answer: '决不', explain: '反义不同' },
      { id: 'at once.q4', senseId: 'at once.s1', errorType: 'meaning', type: '词义', prompt: 'all at once 常有：', options: ['突然或同时', '审计', '原子'], answer: '突然或同时', explain: '短语' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['immediately'] },
  });

  D('at the same time', {
    etymology: {
      origin: '英语短语：at the same time，同时，或表示转折「然而」',
      root: { text: 'at the same time', gloss: '同时；然而' },
      history: [
        { label: '副词短语', text: '副词短语' },
        { label: '时间相同', text: '时间相同' },
      ],
      mnemonic: '也可缓和相反意见',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'They arrived at the same time.', chinese: '他们同时到达。' }],
    contexts: [{
      domain: '议论',
      senseId: 'at the same time.s1',
      en: 'The room is small, but at the same time it is bright.',
      zh: '房间虽小，不过也很亮。',
      structure: 'The room is small, but at the same time it is bright.',
      grammar: '教学例句，用来固定 at the same time 的常见用法。',
      rationale: 'same 前要 the',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They arrived at same time.',
      right: 'They arrived at the same time.',
      reason: 'same 前要 the',
      rule: 'same 前要 the',
      special: '两义',
    }],
    quiz: [
      { id: 'at the same time.q1', senseId: 'at the same time.s1', errorType: 'meaning', type: '词义', prompt: 'We spoke _____.', options: ['at the same time', 'at no time', 'as for'], answer: 'at the same time', explain: '同时' },
      { id: 'at the same time.q2', senseId: 'at the same time.s1', errorType: 'meaning', type: '词义', prompt: '表示「不过」也可用：', options: ['at the same time', 'artillery', 'atom'], answer: 'at the same time', explain: '转折' },
      { id: 'at the same time.q3', senseId: 'at the same time.s1', errorType: 'meaning', type: '词义', prompt: 'same 前面：', options: ['the', 'a', '零冠词一定对'], answer: 'the', explain: '冠词' },
      { id: 'at the same time.q4', senseId: 'at the same time.s1', errorType: 'meaning', type: '词义', prompt: 'at once 也可以表示：', options: ['同时或立刻', '至于', '上岸'], answer: '同时或立刻', explain: '近义之一' }
    ],
    usage: { domains: ['议论'], tone: '中性', commonConfusion: ['at once'] },
  });

  D('at times', {
    etymology: {
      origin: '英语短语：at times，有时',
      root: { text: 'at times', gloss: '有时' },
      history: [
        { label: '副词短语', text: '副词短语' },
        { label: '不是 at all times', text: '不是 at all times' },
      ],
      mnemonic: '频率低于 often',
      note: '等于 sometimes',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The old radio fails at times.', chinese: '那台旧收音机有时会出故障。' }],
    contexts: [{
      domain: '日常',
      senseId: 'at times.s1',
      en: 'At times she prefers to walk.',
      zh: '有时她更想走路。',
      structure: 'At times she prefers to walk.',
      grammar: '教学例句，用来固定 at times 的常见用法。',
      rationale: '复数 times',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The radio fails at time.',
      right: 'The radio fails at times.',
      reason: '复数 times',
      rule: '复数 times',
      special: '等于 sometimes',
    }],
    quiz: [
      { id: 'at times.q1', senseId: 'at times.s1', errorType: 'meaning', type: '词义', prompt: '_____ the bus is late.', options: ['At times', 'At time', 'Aside'], answer: 'At times', explain: '有时' },
      { id: 'at times.q2', senseId: 'at times.s1', errorType: 'meaning', type: '词义', prompt: 'at times 接近：', options: ['sometimes', 'always', 'never'], answer: 'sometimes', explain: '频率' },
      { id: 'at times.q3', senseId: 'at times.s1', errorType: 'meaning', type: '词义', prompt: '永远是：', options: ['at all times', 'at times', 'astray'], answer: 'at all times', explain: '对比' },
      { id: 'at times.q4', senseId: 'at times.s1', errorType: 'meaning', type: '词义', prompt: 'at no time 是：', options: ['决不', '有时', '立刻'], answer: '决不', explain: '否定' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['sometimes'] },
  });

  D('atelier', {
    etymology: {
      origin: '法语 atelier，艺术家的工作室',
      root: { text: 'atelier', gloss: '画室；工作室' },
      history: [
        { label: '名词', text: '名词' },
        { label: '来自法语', text: '来自法语' },
      ],
      mnemonic: '尤其绘画或设计',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The painter rented a small atelier.', chinese: '画家租了一间小画室。' }],
    contexts: [{
      domain: '艺术',
      senseId: 'atelier.s1',
      en: 'Sketches covered the walls of the atelier.',
      zh: '素描挂满了画室的墙。',
      structure: 'Sketches covered the walls of the atelier.',
      grammar: '教学例句，用来固定 atelier 的常见用法。',
      rationale: '工作室',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The atelier was a courtroom.',
      right: 'The atelier is a studio.',
      reason: '工作室',
      rule: '工作室',
      special: '可数',
    }],
    quiz: [
      { id: 'atelier.q1', senseId: 'atelier.s1', errorType: 'meaning', type: '词义', prompt: 'An artist\'s workshop is an _____.', options: ['atelier', 'attic', 'artery'], answer: 'atelier', explain: '画室' },
      { id: 'atelier.q2', senseId: 'atelier.s1', errorType: 'meaning', type: '词义', prompt: 'atelier 来自：', options: ['法语', '火炮术语', '细菌名'], answer: '法语', explain: '借词' },
      { id: 'atelier.q3', senseId: 'atelier.s1', errorType: 'meaning', type: '词义', prompt: '阁楼是另一词：', options: ['attic', 'atelier always', 'audit'], answer: 'attic', explain: '易混' },
      { id: 'atelier.q4', senseId: 'atelier.s1', errorType: 'meaning', type: '词义', prompt: 'atelier 里工作的人常是：', options: ['artist', 'auditor only', 'aviator only'], answer: 'artist', explain: '艺术家' }
    ],
    usage: { domains: ['艺术'], tone: '中性', commonConfusion: ['studio'] },
  });

  D('athlete', {
    etymology: {
      origin: '希腊语 athlon「奖赏」一系，指受过训练的运动员',
      root: { text: 'athlon', gloss: '运动员' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: '体育比赛中的人',
      note: '形容词 athletic',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The athlete trains before sunrise.', chinese: '这名运动员日出前训练。' }],
    contexts: [{
      domain: '体育',
      senseId: 'athlete.s1',
      en: 'Every athlete on the team passed the test.',
      zh: '队里每名运动员都通过了测试。',
      structure: 'Every athlete on the team passed the test.',
      grammar: '教学例句，用来固定 athlete 的常见用法。',
      rationale: '体育',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The athlete fixed the accounts.',
      right: 'The athlete trains for sport.',
      reason: '体育',
      rule: '体育',
      special: '形容词 athletic',
    }],
    quiz: [
      { id: 'athlete.q1', senseId: 'athlete.s1', errorType: 'meaning', type: '词义', prompt: 'A person trained for sport is an _____.', options: ['athlete', 'auditor', 'attorney'], answer: 'athlete', explain: '运动员' },
      { id: 'athlete.q2', senseId: 'athlete.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['athletic', 'atomic', 'awful'], answer: 'athletic', explain: '形容词' },
      { id: 'athlete.q3', senseId: 'athlete.s1', errorType: 'meaning', type: '词义', prompt: '田径项目总称常是：', options: ['athletics', 'atlas', 'aspic'], answer: 'athletics', explain: '名词' },
      { id: 'athlete.q4', senseId: 'athlete.s1', errorType: 'meaning', type: '词义', prompt: 'artist 是：', options: ['艺术家', '运动员', '审计员'], answer: '艺术家', explain: '职业不同' }
    ],
    usage: { domains: ['体育'], tone: '中性', commonConfusion: ['athletic'] },
  });

  D('athletic', {
    etymology: {
      origin: '英语派生：athlete 加 -ic',
      root: { text: 'athlete + -ic', gloss: '运动的；健壮的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '体格好，或与运动有关', text: '体格好，或与运动有关' },
      ],
      mnemonic: 'athletic ability',
      note: '不要和 aesthetic 混淆',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She has an athletic build.', chinese: '她体格健壮。' }],
    contexts: [{
      domain: '体育',
      senseId: 'athletic.s1',
      en: 'The school offers athletic training after class.',
      zh: '学校课后提供运动训练。',
      structure: 'The school offers athletic training after class.',
      grammar: '教学例句，用来固定 athletic 的常见用法。',
      rationale: '体育',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He is athletic at painting.',
      right: 'He is athletic on the track.',
      reason: '体育',
      rule: '体育',
      special: '不要和 aesthetic 混淆',
    }],
    quiz: [
      { id: 'athletic.q1', senseId: 'athletic.s1', errorType: 'meaning', type: '词义', prompt: 'A strong sporty body is _____.', options: ['athletic', 'artistic', 'artificial'], answer: 'athletic', explain: '健壮' },
      { id: 'athletic.q2', senseId: 'athletic.s1', errorType: 'meaning', type: '词义', prompt: '-ic 是：', options: ['形容词后缀', '名词', '介词'], answer: '形容词后缀', explain: '词性' },
      { id: 'athletic.q3', senseId: 'athletic.s1', errorType: 'meaning', type: '词义', prompt: '艺术感是：', options: ['artistic', 'athletic', 'atomic'], answer: 'artistic', explain: '易混' },
      { id: 'athletic.q4', senseId: 'athletic.s1', errorType: 'meaning', type: '词义', prompt: '名词运动员是：', options: ['athlete', 'atlas', 'atom'], answer: 'athlete', explain: '人' }
    ],
    usage: { domains: ['体育'], tone: '中性', commonConfusion: ['athlete'] },
  });

  D('athletics', {
    etymology: {
      origin: '英语派生：与 athlete 同族的运动总称，尤指田径',
      root: { text: 'athlete', gloss: '田径；体育运动' },
      history: [
        { label: '名词', text: '名词' },
        { label: '英式常作单数概念', text: '英式常作单数概念' },
      ],
      mnemonic: '跑步、跳跃、投掷',
      note: '动词用单数或视用法',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Athletics is popular in this school.', chinese: '田径在这所学校很受欢迎。' }],
    contexts: [{
      domain: '体育',
      senseId: 'athletics.s1',
      en: 'She won two events in athletics.',
      zh: '她在田径项目中赢了两项。',
      structure: 'She won two events in athletics.',
      grammar: '教学例句，用来固定 athletics 的常见用法。',
      rationale: '运动项目',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Athletics are a single person.',
      right: 'Athletics is a set of sports.',
      reason: '运动项目',
      rule: '运动项目',
      special: '动词用单数或视用法',
    }],
    quiz: [
      { id: 'athletics.q1', senseId: 'athletics.s1', errorType: 'meaning', type: '词义', prompt: 'Running and jumping events belong to _____.', options: ['athletics', 'athletics person', 'audit'], answer: 'athletics', explain: '田径' },
      { id: 'athletics.q2', senseId: 'athletics.s1', errorType: 'meaning', type: '词义', prompt: '一个运动员是：', options: ['athlete', 'athletics', 'attorney'], answer: 'athlete', explain: '人' },
      { id: 'athletics.q3', senseId: 'athletics.s1', errorType: 'meaning', type: '词义', prompt: 'athletics 不是：', options: ['审计', '画室', '肉冻'], answer: '审计', explain: 'audit 形近' },
      { id: 'athletics.q4', senseId: 'athletics.s1', errorType: 'meaning', type: '词义', prompt: '学校说这项运动常用：', options: ['athletics', 'artillery', 'aspic'], answer: 'athletics', explain: '体育' }
    ],
    usage: { domains: ['体育'], tone: '中性', commonConfusion: ['athlete'] },
  });

  D('atlas', {
    etymology: {
      origin: '地图册；书名传统上来自神话中托天的 Atlas，课堂只记「地图集」',
      root: { text: 'Atlas', gloss: '地图册' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'a book of maps', text: 'a book of maps' },
      ],
      mnemonic: '可数',
      note: '大写作专名时是那个人物',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'We bought an atlas of the region.', chinese: '我们买了一本该地区的地图册。' }],
    contexts: [{
      domain: '学习',
      senseId: 'atlas.s1',
      en: 'The atlas shows every small harbour.',
      zh: '这本地图册标出了每个小港。',
      structure: 'The atlas shows every small harbour.',
      grammar: '教学例句，用来固定 atlas 的常见用法。',
      rationale: '书',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'An atlas is a person who runs.',
      right: 'An atlas is a book of maps.',
      reason: '书',
      rule: '书',
      special: '大写作专名时是那个人物',
    }],
    quiz: [
      { id: 'atlas.q1', senseId: 'atlas.s1', errorType: 'meaning', type: '词义', prompt: 'A book of maps is an _____.', options: ['atlas', 'athlete', 'atom'], answer: 'atlas', explain: '地图册' },
      { id: 'atlas.q2', senseId: 'atlas.s1', errorType: 'meaning', type: '词义', prompt: 'atlas 不是：', options: ['运动员', '细菌', '斧头'], answer: '运动员', explain: 'athlete 形近' },
      { id: 'atlas.q3', senseId: 'atlas.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['atlases', 'atlasies', 'atlanten'], answer: 'atlases', explain: '-es' },
      { id: 'atlas.q4', senseId: 'atlas.s1', errorType: 'meaning', type: '词义', prompt: '打开 atlas 是为了看：', options: ['地图', '病菌', '徽章'], answer: '地图', explain: '用途' }
    ],
    usage: { domains: ['学习'], tone: '中性', commonConfusion: ['map'] },
  });

  D('atmosphere', {
    etymology: {
      origin: '希腊语 atmos「蒸汽」加 sphaira「球」',
      root: { text: 'atmos + sphere', gloss: '大气；气氛' },
      history: [
        { label: '名词', text: '名词' },
        { label: '地球大气', text: '地球大气' },
      ],
      mnemonic: '也指地方的情绪气氛',
      note: '两义都常用',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The atmosphere on Mars is thin.', chinese: '火星的大气很稀薄。' }],
    contexts: [{
      domain: '科学',
      senseId: 'atmosphere.s1',
      en: 'The cafe has a quiet atmosphere.',
      zh: '这家咖啡馆气氛安静。',
      structure: 'The cafe has a quiet atmosphere.',
      grammar: '教学例句，用来固定 atmosphere 的常见用法。',
      rationale: '不是原子本身',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The atmosphere was a single atom.',
      right: 'The atmosphere is the air around a planet, or a mood.',
      reason: '不是原子本身',
      rule: '不是原子本身',
      special: '两义都常用',
    }],
    quiz: [
      { id: 'atmosphere.q1', senseId: 'atmosphere.s1', errorType: 'meaning', type: '词义', prompt: 'The air around Earth is the _____.', options: ['atmosphere', 'atom', 'attic'], answer: 'atmosphere', explain: '大气' },
      { id: 'atmosphere.q2', senseId: 'atmosphere.s1', errorType: 'meaning', type: '词义', prompt: 'A pleasant mood is a pleasant _____.', options: ['atmosphere', 'axis', 'badge'], answer: 'atmosphere', explain: '气氛' },
      { id: 'atmosphere.q3', senseId: 'atmosphere.s1', errorType: 'meaning', type: '词义', prompt: 'atom 是：', options: ['原子', '大气整体', '阁楼'], answer: '原子', explain: '更小单位' },
      { id: 'atmosphere.q4', senseId: 'atmosphere.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['atmospheric', 'atomic', 'awful'], answer: 'atmospheric', explain: '形容词' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['atmospheric'] },
  });

  D('atmospheric', {
    etymology: {
      origin: '英语派生：atmosphere 加 -ic',
      root: { text: 'atmosphere + -ic', gloss: '大气的；有气氛的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '科学或文学', text: '科学或文学' },
      ],
      mnemonic: 'atmospheric pressure',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Atmospheric pressure dropped before the storm.', chinese: '风暴前气压下降。' }],
    contexts: [{
      domain: '科学',
      senseId: 'atmospheric.s1',
      en: 'The film is slow but atmospheric.',
      zh: '这部电影节奏慢，但很有气氛。',
      structure: 'The film is slow but atmospheric.',
      grammar: '教学例句，用来固定 atmospheric 的常见用法。',
      rationale: '有气氛',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The film was atmospheric so it had no mood.',
      right: 'An atmospheric film has a strong mood.',
      reason: '有气氛',
      rule: '有气氛',
      special: '两义',
    }],
    quiz: [
      { id: 'atmospheric.q1', senseId: 'atmospheric.s1', errorType: 'meaning', type: '词义', prompt: '_____ pressure affects the weather.', options: ['Atmospheric', 'Athletic', 'Artificial'], answer: 'Atmospheric', explain: '气压' },
      { id: 'atmospheric.q2', senseId: 'atmospheric.s1', errorType: 'meaning', type: '词义', prompt: 'A moody old street may look _____.', options: ['atmospheric', 'atomic', 'ashamed'], answer: 'atmospheric', explain: '有氛围' },
      { id: 'atmospheric.q3', senseId: 'atmospheric.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['atmosphere', 'atom', 'atlas'], answer: 'atmosphere', explain: '名词' },
      { id: 'atmospheric.q4', senseId: 'atmospheric.s1', errorType: 'meaning', type: '词义', prompt: 'atomic 与 _____ 有关。', options: ['atoms', 'mood only', 'maps only'], answer: 'atoms', explain: '易混' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['atmosphere'] },
  });

  D('atom', {
    etymology: {
      origin: '希腊语 atomos「不可再切」',
      root: { text: 'atomos', gloss: '原子' },
      history: [
        { label: '名词', text: '名词' },
        { label: '化学最小单位的旧教学说法是元素的基本单位', text: '化学最小单位的旧教学说法是元素的基本单位' },
      ],
      mnemonic: '现代科学仍用 atom',
      note: '复数 atoms',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Water contains hydrogen and oxygen atoms.', chinese: '水含有氢原子和氧原子。' }],
    contexts: [{
      domain: '科学',
      senseId: 'atom.s1',
      en: 'The model shows one atom and its nucleus.',
      zh: '模型展示了一个原子及其原子核。',
      structure: 'The model shows one atom and its nucleus.',
      grammar: '教学例句，用来固定 atom 的常见用法。',
      rationale: '微小单位',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'An atom is the air around Earth.',
      right: 'An atom is a tiny unit of an element.',
      reason: '微小单位',
      rule: '微小单位',
      special: '复数 atoms',
    }],
    quiz: [
      { id: 'atom.q1', senseId: 'atom.s1', errorType: 'meaning', type: '词义', prompt: 'The smallest unit in this lesson is an _____.', options: ['atom', 'atmosphere', 'atlas'], answer: 'atom', explain: '原子' },
      { id: 'atom.q2', senseId: 'atom.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['atoms', 'atomies', 'atomic'], answer: 'atoms', explain: '-s' },
      { id: 'atom.q3', senseId: 'atom.s1', errorType: 'meaning', type: '词义', prompt: '形容词：', options: ['atomic', 'atmospheric', 'athletic'], answer: 'atomic', explain: '原子的' },
      { id: 'atom.q4', senseId: 'atom.s1', errorType: 'meaning', type: '词义', prompt: '大气是：', options: ['atmosphere', 'atom', 'attic'], answer: 'atmosphere', explain: '更大范围' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['atomic'] },
  });

  D('atomic', {
    etymology: {
      origin: '英语派生：atom 加 -ic',
      root: { text: 'atom + -ic', gloss: '原子的；核能的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'atomic energy', text: 'atomic energy' },
      ],
      mnemonic: '与原子核相关时带「核」的意思',
      note: '科学',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Atomic energy can produce electricity.', chinese: '核能可以发电。' }],
    contexts: [{
      domain: '科学',
      senseId: 'atomic.s1',
      en: 'The book explains atomic structure simply.',
      zh: '这本书简单地解释了原子结构。',
      structure: 'The book explains atomic structure simply.',
      grammar: '教学例句，用来固定 atomic 的常见用法。',
      rationale: '核',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Atomic energy is a mood in a cafe.',
      right: 'Atomic energy comes from the nucleus.',
      reason: '核',
      rule: '核',
      special: '科学',
    }],
    quiz: [
      { id: 'atomic.q1', senseId: 'atomic.s1', errorType: 'meaning', type: '词义', prompt: '_____ structure', options: ['Atomic', 'Athletic', 'Artistic'], answer: 'Atomic', explain: '原子结构' },
      { id: 'atomic.q2', senseId: 'atomic.s1', errorType: 'meaning', type: '词义', prompt: '-ic 构成：', options: ['形容词', '副词', '名词复数'], answer: '形容词', explain: '后缀' },
      { id: 'atomic.q3', senseId: 'atomic.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['atom', 'atmosphere', 'atlas'], answer: 'atom', explain: '原子' },
      { id: 'atomic.q4', senseId: 'atomic.s1', errorType: 'meaning', type: '词义', prompt: '有气氛的是：', options: ['atmospheric', 'atomic', 'awful'], answer: 'atmospheric', explain: '易混' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['atom'] },
  });

  D('atop', {
    etymology: {
      origin: '英语派生：a- 加 top「顶部」',
      root: { text: 'a- + top', gloss: '在……顶上' },
      history: [
        { label: '介词', text: '介词' },
        { label: '正式或书面', text: '正式或书面' },
      ],
      mnemonic: 'atop the hill',
      note: '后面接名词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'A flag stood atop the tower.', chinese: '一面旗立在塔顶。' }],
    contexts: [{
      domain: '描写',
      senseId: 'atop.s1',
      en: 'Snow lay atop the wall.',
      zh: '雪积在墙头。',
      structure: 'Snow lay atop the wall.',
      grammar: '教学例句，用来固定 atop 的常见用法。',
      rationale: '介词要有宾语',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The flag atop.',
      right: 'The flag stood atop the tower.',
      reason: '介词要有宾语',
      rule: '介词要有宾语',
      special: '后面接名词',
    }],
    quiz: [
      { id: 'atop.q1', senseId: 'atop.s1', errorType: 'meaning', type: '词义', prompt: 'The nest sits _____ the pole.', options: ['atop', 'aside', 'astray'], answer: 'atop', explain: '在顶上' },
      { id: 'atop.q2', senseId: 'atop.s1', errorType: 'meaning', type: '词义', prompt: 'atop 的词性是：', options: ['介词', '副词一定不能带宾语', '冠词'], answer: '介词', explain: '书面' },
      { id: 'atop.q3', senseId: 'atop.s1', errorType: 'meaning', type: '词义', prompt: 'top 的意思是：', options: ['顶部', '岸', '旁边'], answer: '顶部', explain: '组成' },
      { id: 'atop.q4', senseId: 'atop.s1', errorType: 'meaning', type: '词义', prompt: 'ashore 是：', options: ['上岸', '在顶上', '走偏'], answer: '上岸', explain: '不同' }
    ],
    usage: { domains: ['描写'], tone: '中性', commonConfusion: ['top'] },
  });

  D('atrocious', {
    etymology: {
      origin: '拉丁语 atrox「凶残的」',
      root: { text: 'atrox', gloss: '凶残的；糟透的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '可指暴行', text: '可指暴行' },
      ],
      mnemonic: '口语也可说质量极差',
      note: '程度很强',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The crime was atrocious.', chinese: '这罪行极其凶残。' }],
    contexts: [{
      domain: '评论',
      senseId: 'atrocious.s1',
      en: 'The food was atrocious, so we left.',
      zh: '食物糟得要命，于是我们走了。',
      structure: 'The food was atrocious, so we left.',
      grammar: '教学例句，用来固定 atrocious 的常见用法。',
      rationale: '极差或极残',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The meal was atrocious so it was excellent.',
      right: 'Atrocious food is very bad.',
      reason: '极差或极残',
      rule: '极差或极残',
      special: '程度很强',
    }],
    quiz: [
      { id: 'atrocious.q1', senseId: 'atrocious.s1', errorType: 'meaning', type: '词义', prompt: 'An extremely cruel act is _____.', options: ['atrocious', 'athletic', 'artistic'], answer: 'atrocious', explain: '凶残' },
      { id: 'atrocious.q2', senseId: 'atrocious.s1', errorType: 'meaning', type: '词义', prompt: 'Very bad quality can also be called _____.', options: ['atrocious', 'atomic', 'average'], answer: 'atrocious', explain: '糟透' },
      { id: 'atrocious.q3', senseId: 'atrocious.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['atrocity', 'atlas', 'atom'], answer: 'atrocity', explain: '名词' },
      { id: 'atrocious.q4', senseId: 'atrocious.s1', errorType: 'meaning', type: '词义', prompt: '反义方向不是：', options: ['精美或善良', '动脉', '地图'], answer: '精美或善良', explain: '程度词' }
    ],
    usage: { domains: ['评论'], tone: '中性', commonConfusion: ['atrocity'] },
  });

  D('atrocity', {
    etymology: {
      origin: '英语派生：与 atrocious 对应的名词',
      root: { text: 'atrocious', gloss: '暴行' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: '战争或犯罪报道',
      note: '复数 atrocities',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The report described one atrocity in detail.', chinese: '报告列举了几起暴行。' }],
    contexts: [{
      domain: '新闻',
      senseId: 'atrocity.s1',
      en: 'No one should hide an atrocity.',
      zh: '没有人应当隐瞒暴行。',
      structure: 'No one should hide an atrocity.',
      grammar: '教学例句，用来固定 atrocity 的常见用法。',
      rationale: '暴行',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The atrocity was a kind joke.',
      right: 'An atrocity is extremely cruel.',
      reason: '暴行',
      rule: '暴行',
      special: '复数 atrocities',
    }],
    quiz: [
      { id: 'atrocity.q1', senseId: 'atrocity.s1', errorType: 'meaning', type: '词义', prompt: 'A terribly cruel act is an _____.', options: ['atrocity', 'atlas', 'athlete'], answer: 'atrocity', explain: '暴行' },
      { id: 'atrocity.q2', senseId: 'atrocity.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['atrocious', 'athletic', 'authentic'], answer: 'atrocious', explain: '形容词' },
      { id: 'atrocity.q3', senseId: 'atrocity.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['atrocities', 'atrocitys', 'atom'], answer: 'atrocities', explain: '-es 类' },
      { id: 'atrocity.q4', senseId: 'atrocity.s1', errorType: 'meaning', type: '词义', prompt: 'atmosphere 是：', options: ['气氛或大气', '暴行', '运动员'], answer: '气氛或大气', explain: '无关' }
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['atrocious'] },
  });

  D('attach', {
    etymology: {
      origin: '法语 attacher「系上」',
      root: { text: 'attach', gloss: '系上；使附属' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'attach A to B', text: 'attach A to B' },
      ],
      mnemonic: 'attach importance to 重视',
      note: '及物',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Please attach the label to the bag.', chinese: '请把标签系到袋子上。' }],
    contexts: [{
      domain: '日常',
      senseId: 'attach.s1',
      en: 'She attached a file to the email.',
      zh: '她在邮件上附了一个文件。',
      structure: 'She attached a file to the email.',
      grammar: '教学例句，用来固定 attach 的常见用法。',
      rationale: '用 to',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Attach the label with the bag.',
      right: 'Attach the label to the bag.',
      reason: '用 to',
      rule: '用 to',
      special: '及物',
    }],
    quiz: [
      { id: 'attach.q1', senseId: 'attach.s1', errorType: 'meaning', type: '词义', prompt: '_____ the photo to the form.', options: ['Attach', 'Attack', 'Attain'], answer: 'Attach', explain: '附上' },
      { id: 'attach.q2', senseId: 'attach.s1', errorType: 'meaning', type: '词义', prompt: 'attach importance _____ health.', options: ['to', 'for', 'at'], answer: 'to', explain: '重视' },
      { id: 'attach.q3', senseId: 'attach.s1', errorType: 'meaning', type: '词义', prompt: '攻击是另一个词：', options: ['attack', 'attach', 'attend'], answer: 'attack', explain: '拼写' },
      { id: 'attach.q4', senseId: 'attach.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['attachment', 'attack', 'attention'], answer: 'attachment', explain: '名词' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['attachment'] },
  });

  D('attached', {
    etymology: {
      origin: '英语派生：attach 的过去分词',
      root: { text: 'attach', gloss: '附带的；依恋的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'attached to', text: 'attached to' },
      ],
      mnemonic: '情感上舍不得，或物理上连着',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I am attached to this old pen.', chinese: '我对这支旧笔很有感情。' }],
    contexts: [{
      domain: '情感',
      senseId: 'attached.s1',
      en: 'A note is attached to the contract.',
      zh: '合同上附有一张说明。',
      structure: 'A note is attached to the contract.',
      grammar: '教学例句，用来固定 attached 的常见用法。',
      rationale: '用 to',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'I am attached with this town.',
      right: 'I am attached to this town.',
      reason: '用 to',
      rule: '用 to',
      special: '两义',
    }],
    quiz: [
      { id: 'attached.q1', senseId: 'attached.s1', errorType: 'meaning', type: '词义', prompt: 'She is _____ to the old house.', options: ['attached', 'ashamed', 'asleep'], answer: 'attached', explain: '依恋' },
      { id: 'attached.q2', senseId: 'attached.s1', errorType: 'meaning', type: '词义', prompt: 'A file _____ to an email.', options: ['attached', 'attacked', 'attained'], answer: 'attached', explain: '附件状态' },
      { id: 'attached.q3', senseId: 'attached.s1', errorType: 'meaning', type: '词义', prompt: 'attacked 是：', options: ['遭到攻击', '连着', '达到'], answer: '遭到攻击', explain: '易混' },
      { id: 'attached.q4', senseId: 'attached.s1', errorType: 'meaning', type: '词义', prompt: '介词：', options: ['to', 'with', 'for'], answer: 'to', explain: 'to' }
    ],
    usage: { domains: ['情感'], tone: '中性', commonConfusion: ['attach'] },
  });

  D('attachment', {
    etymology: {
      origin: '英语派生：attach 加 -ment',
      root: { text: 'attach + -ment', gloss: '附件；依恋；连接件' },
      history: [
        { label: '名词', text: '名词' },
        { label: '三义', text: '三义' },
      ],
      mnemonic: '电子邮件附件最常见于课堂',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I cannot open the attachment.', chinese: '我打不开这个附件。' }],
    contexts: [{
      domain: '办公',
      senseId: 'attachment.s1',
      en: 'His attachment to the village is obvious.',
      zh: '他对那个村子的依恋很明显。',
      structure: 'His attachment to the village is obvious.',
      grammar: '教学例句，用来固定 attachment 的常见用法。',
      rationale: '附件',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The attachment attacked the file.',
      right: 'The attachment came with the email.',
      reason: '附件',
      rule: '附件',
      special: '可数',
    }],
    quiz: [
      { id: 'attachment.q1', senseId: 'attachment.s1', errorType: 'meaning', type: '词义', prompt: 'An email file is an _____.', options: ['attachment', 'attack', 'attic'], answer: 'attachment', explain: '附件' },
      { id: 'attachment.q2', senseId: 'attachment.s1', errorType: 'meaning', type: '词义', prompt: '-ment 构成：', options: ['名词', '副词', '否定'], answer: '名词', explain: '后缀' },
      { id: 'attachment.q3', senseId: 'attachment.s1', errorType: 'meaning', type: '词义', prompt: '情感上的依恋也叫：', options: ['attachment', 'atrocity', 'atlas'], answer: 'attachment', explain: '名词' },
      { id: 'attachment.q4', senseId: 'attachment.s1', errorType: 'meaning', type: '词义', prompt: '攻击者是：', options: ['attacker', 'attachment', 'attorney'], answer: 'attacker', explain: '人' }
    ],
    usage: { domains: ['办公'], tone: '中性', commonConfusion: ['attach'] },
  });

  D('attack', {
    etymology: {
      origin: '与「扑上去」一系，暴力进攻，也可指疾病发作',
      root: { text: 'attack', gloss: '攻击；发作' },
      history: [
        { label: '动词或名词', text: '动词或名词' },
        { label: 'attack somebody', text: 'attack somebody' },
      ],
      mnemonic: 'a heart attack',
      note: '名词动词同形',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The dog attacked the fence.', chinese: '那只狗扑向篱笆。' }],
    contexts: [{
      domain: '新闻',
      senseId: 'attack.s1',
      en: 'He suffered an asthma attack at school.',
      zh: '他在学校哮喘发作了。',
      structure: 'He suffered an asthma attack at school.',
      grammar: '教学例句，用来固定 attack 的常见用法。',
      rationale: '进攻是 attack',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The army attached the town.',
      right: 'The army attacked the town.',
      reason: '进攻是 attack',
      rule: '进攻是 attack',
      special: '名词动词同形',
    }],
    quiz: [
      { id: 'attack.q1', senseId: 'attack.s1', errorType: 'meaning', type: '词义', prompt: 'The army will _____ at dawn.', options: ['attack', 'attach', 'attend'], answer: 'attack', explain: '进攻' },
      { id: 'attack.q2', senseId: 'attack.s1', errorType: 'meaning', type: '词义', prompt: 'A sudden illness can be an _____.', options: ['attack', 'attachment', 'attic'], answer: 'attack', explain: '发作' },
      { id: 'attack.q3', senseId: 'attack.s1', errorType: 'meaning', type: '词义', prompt: '把东西系上是：', options: ['attach', 'attack', 'attain'], answer: 'attach', explain: '易混' },
      { id: 'attack.q4', senseId: 'attack.s1', errorType: 'meaning', type: '词义', prompt: '发动攻击的人是：', options: ['attacker', 'attendant', 'attorney'], answer: 'attacker', explain: '人' }
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['attacker'] },
  });

  D('attacker', {
    etymology: {
      origin: '英语派生：attack 加 -er',
      root: { text: 'attack + -er', gloss: '攻击者' },
      history: [
        { label: '名词', text: '名词' },
        { label: '人或动物', text: '人或动物' },
      ],
      mnemonic: '体育里也可指进攻队员',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The attacker was stopped at the door.', chinese: '攻击者在门口被拦住。' }],
    contexts: [{
      domain: '新闻',
      senseId: 'attacker.s1',
      en: 'Police have not named the attacker.',
      zh: '警方尚未公布攻击者的姓名。',
      structure: 'Police have not named the attacker.',
      grammar: '教学例句，用来固定 attacker 的常见用法。',
      rationale: '人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The attacker was the email file.',
      right: 'The attacker is a person or animal that attacks.',
      reason: '人',
      rule: '人',
      special: '可数',
    }],
    quiz: [
      { id: 'attacker.q1', senseId: 'attacker.s1', errorType: 'meaning', type: '词义', prompt: 'A person who attacks is an _____.', options: ['attacker', 'attachment', 'attic'], answer: 'attacker', explain: '攻击者' },
      { id: 'attacker.q2', senseId: 'attacker.s1', errorType: 'meaning', type: '词义', prompt: '-er 表示：', options: ['人', '附件', '阁楼'], answer: '人', explain: '后缀' },
      { id: 'attacker.q3', senseId: 'attacker.s1', errorType: 'meaning', type: '词义', prompt: '邮件附件是：', options: ['attachment', 'attacker', 'atlas'], answer: 'attachment', explain: '物' },
      { id: 'attacker.q4', senseId: 'attacker.s1', errorType: 'meaning', type: '词义', prompt: 'attack 是：', options: ['动词或名词行为', '人', '律师'], answer: '动词或名词行为', explain: '词性' }
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['attack'] },
  });

  D('attain', {
    etymology: {
      origin: '拉丁语 attingere「触到」，努力后达到',
      root: { text: 'tangere', gloss: '达到；获得' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'attain a goal', text: 'attain a goal' },
      ],
      mnemonic: '比 reach 正式',
      note: '名词 attainment',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She attained her goal after three years.', chinese: '三年后她达到了目标。' }],
    contexts: [{
      domain: '教育',
      senseId: 'attain.s1',
      en: 'Few climbers attain the summit in winter.',
      zh: '很少有人在冬天登上那座峰。',
      structure: 'Few climbers attain the summit in winter.',
      grammar: '教学例句，用来固定 attain 的常见用法。',
      rationale: '可直接接目标',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She attained to the goal as the only pattern.',
      right: 'She attained her goal.',
      reason: '可直接接目标',
      rule: '可直接接目标',
      special: '名词 attainment',
    }],
    quiz: [
      { id: 'attain.q1', senseId: 'attain.s1', errorType: 'meaning', type: '词义', prompt: 'To succeed in reaching a goal is to _____ it.', options: ['attain', 'attach', 'attack'], answer: 'attain', explain: '达到' },
      { id: 'attain.q2', senseId: 'attain.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['attainment', 'attachment', 'attack'], answer: 'attainment', explain: '名词' },
      { id: 'attain.q3', senseId: 'attain.s1', errorType: 'meaning', type: '词义', prompt: '可能达到的是：', options: ['attainable', 'attached', 'ashamed'], answer: 'attainable', explain: '形容词' },
      { id: 'attain.q4', senseId: 'attain.s1', errorType: 'meaning', type: '词义', prompt: 'attack 是：', options: ['攻击', '达到', '系上'], answer: '攻击', explain: '易混' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['attainment'] },
  });

  D('attainable', {
    etymology: {
      origin: '英语派生：attain 加 -able',
      root: { text: 'attain + -able', gloss: '可达到的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'able 表可以', text: 'able 表可以' },
      ],
      mnemonic: '目标、标准',
      note: '反义 unattainable',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'A higher score is attainable if you practise.', chinese: '只要练习，更高的分数是可以达到的。' }],
    contexts: [{
      domain: '学习',
      senseId: 'attainable.s1',
      en: 'The target is ambitious but attainable.',
      zh: '目标很大，但能够达到。',
      structure: 'The target is ambitious but attainable.',
      grammar: '教学例句，用来固定 attainable 的常见用法。',
      rationale: '可以达到',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The goal is attainable to impossible.',
      right: 'The goal is attainable.',
      reason: '可以达到',
      rule: '可以达到',
      special: '反义 unattainable',
    }],
    quiz: [
      { id: 'attainable.q1', senseId: 'attainable.s1', errorType: 'meaning', type: '词义', prompt: 'A goal you can reach is _____.', options: ['attainable', 'attached', 'asleep'], answer: 'attainable', explain: '可达到' },
      { id: 'attainable.q2', senseId: 'attainable.s1', errorType: 'meaning', type: '词义', prompt: '-able 表示：', options: ['可以', '否定', '地点'], answer: '可以', explain: '后缀' },
      { id: 'attainable.q3', senseId: 'attainable.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['attain', 'attach', 'attack'], answer: 'attain', explain: '动词' },
      { id: 'attainable.q4', senseId: 'attainable.s1', errorType: 'meaning', type: '词义', prompt: '达不到是：', options: ['unattainable', 'attainable', 'atomic'], answer: 'unattainable', explain: '反义' }
    ],
    usage: { domains: ['学习'], tone: '中性', commonConfusion: ['attain'] },
  });

  D('attainment', {
    etymology: {
      origin: '英语派生：attain 加 -ment',
      root: { text: 'attain + -ment', gloss: '达到；成就' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可指成就本身', text: '可指成就本身' },
      ],
      mnemonic: '教育程度 educational attainment',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The attainment of the goal took years.', chinese: '达到这个目标花了数年。' }],
    contexts: [{
      domain: '教育',
      senseId: 'attainment.s1',
      en: 'The school measures attainment in reading.',
      zh: '学校衡量阅读方面的学业成就。',
      structure: 'The school measures attainment in reading.',
      grammar: '教学例句，用来固定 attainment 的常见用法。',
      rationale: '名词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Attainment the goal as a verb.',
      right: 'They attained the goal.',
      reason: '名词',
      rule: '名词',
      special: '正式',
    }],
    quiz: [
      { id: 'attainment.q1', senseId: 'attainment.s1', errorType: 'meaning', type: '词义', prompt: 'Something achieved is an _____.', options: ['attainment', 'attachment', 'attack'], answer: 'attainment', explain: '成就' },
      { id: 'attainment.q2', senseId: 'attainment.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['attain', 'attend', 'attempt'], answer: 'attain', explain: '动词' },
      { id: 'attainment.q3', senseId: 'attainment.s1', errorType: 'meaning', type: '词义', prompt: '-ment 是：', options: ['名词后缀', '副词', '介词'], answer: '名词后缀', explain: '词性' },
      { id: 'attainment.q4', senseId: 'attainment.s1', errorType: 'meaning', type: '词义', prompt: '附件是：', options: ['attachment', 'attainment', 'attention'], answer: 'attachment', explain: '易混' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['attain'] },
  });

  D('attempt', {
    etymology: {
      origin: '拉丁语 temptare「试」',
      root: { text: 'temptare', gloss: '试图' },
      history: [
        { label: '动词或名词', text: '动词或名词' },
        { label: 'attempt to do', text: 'attempt to do' },
      ],
      mnemonic: 'an attempt',
      note: '比 try 正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She attempted to open the window.', chinese: '她试图打开窗户。' }],
    contexts: [{
      domain: '日常',
      senseId: 'attempt.s1',
      en: 'The first attempt failed.',
      zh: '第一次尝试失败了。',
      structure: 'The first attempt failed.',
      grammar: '教学例句，用来固定 attempt 的常见用法。',
      rationale: 'attempt to do',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She attempted opening as the only taught pattern here.',
      right: 'She attempted to open the window.',
      reason: 'attempt to do',
      rule: 'attempt to do',
      special: '比 try 正式',
    }],
    quiz: [
      { id: 'attempt.q1', senseId: 'attempt.s1', errorType: 'meaning', type: '词义', prompt: 'They will _____ to finish today.', options: ['attempt', 'attend', 'attach'], answer: 'attempt', explain: '试图' },
      { id: 'attempt.q2', senseId: 'attempt.s1', errorType: 'meaning', type: '词义', prompt: '名词 an _____ .', options: ['attempt', 'attendance', 'attachment'], answer: 'attempt', explain: '一次尝试' },
      { id: 'attempt.q3', senseId: 'attempt.s1', errorType: 'meaning', type: '词义', prompt: '参加活动是：', options: ['attend', 'attempt', 'attack'], answer: 'attend', explain: '易混' },
      { id: 'attempt.q4', senseId: 'attempt.s1', errorType: 'meaning', type: '词义', prompt: 'attempt 后面课堂搭配是：', options: ['to do', 'doing 作为唯一标准', 'for do'], answer: 'to do', explain: '不定式' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['try'] },
  });

  D('attend', {
    etymology: {
      origin: '拉丁语 attendere「把心思伸向」',
      root: { text: 'tendere', gloss: '出席；照料' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'attend a meeting', text: 'attend a meeting' },
      ],
      mnemonic: 'attend to a task 是处理',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'All students must attend the talk.', chinese: '所有学生都必须参加这次谈话。' }],
    contexts: [{
      domain: '学校',
      senseId: 'attend.s1',
      en: 'A nurse attended to the wound.',
      zh: '护士处理了伤口。',
      structure: 'A nurse attended to the wound.',
      grammar: '教学例句，用来固定 attend 的常见用法。',
      rationale: '出席直接接活动',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She attended the meeting to it.',
      right: 'She attended the meeting.',
      reason: '出席直接接活动',
      rule: '出席直接接活动',
      special: '两义',
    }],
    quiz: [
      { id: 'attend.q1', senseId: 'attend.s1', errorType: 'meaning', type: '词义', prompt: 'Will you _____ the wedding?', options: ['attend', 'attempt', 'attack'], answer: 'attend', explain: '出席' },
      { id: 'attend.q2', senseId: 'attend.s1', errorType: 'meaning', type: '词义', prompt: 'attend _____ the customer.', options: ['to', 'for', 'at'], answer: 'to', explain: '照料' },
      { id: 'attend.q3', senseId: 'attend.s1', errorType: 'meaning', type: '词义', prompt: '名词出席是：', options: ['attendance', 'attempt', 'attachment'], answer: 'attendance', explain: '名词' },
      { id: 'attend.q4', senseId: 'attend.s1', errorType: 'meaning', type: '词义', prompt: 'attempt 是：', options: ['试图', '出席', '系上'], answer: '试图', explain: '易混' }
    ],
    usage: { domains: ['学校'], tone: '中性', commonConfusion: ['attendance'] },
  });

  D('attendance', {
    etymology: {
      origin: '英语派生：attend 加 -ance',
      root: { text: 'attend + -ance', gloss: '出席；出勤' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数居多', text: '不可数居多' },
      ],
      mnemonic: 'attendance at',
      note: '学校、工作',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Attendance at the lecture was high.', chinese: '讲座的出勤率很高。' }],
    contexts: [{
      domain: '学校',
      senseId: 'attendance.s1',
      en: 'Her attendance has improved this month.',
      zh: '她这个月的出勤有改善。',
      structure: 'Her attendance has improved this month.',
      grammar: '教学例句，用来固定 attendance 的常见用法。',
      rationale: '名词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Her attendance the class as a verb.',
      right: 'She attended the class.',
      reason: '名词',
      rule: '名词',
      special: '学校、工作',
    }],
    quiz: [
      { id: 'attendance.q1', senseId: 'attendance.s1', errorType: 'meaning', type: '词义', prompt: 'Good _____ means being present.', options: ['attendance', 'attention', 'attachment'], answer: 'attendance', explain: '出勤' },
      { id: 'attendance.q2', senseId: 'attendance.s1', errorType: 'meaning', type: '词义', prompt: 'attendance _____ school.', options: ['at', 'to', 'for'], answer: 'at', explain: 'at' },
      { id: 'attendance.q3', senseId: 'attendance.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['attend', 'attempt', 'attach'], answer: 'attend', explain: '动词' },
      { id: 'attendance.q4', senseId: 'attendance.s1', errorType: 'meaning', type: '词义', prompt: '注意是：', options: ['attention', 'attendance', 'atrocity'], answer: 'attention', explain: '易混' }
    ],
    usage: { domains: ['学校'], tone: '中性', commonConfusion: ['attend'] },
  });

  D('attendant', {
    etymology: {
      origin: '英语派生：attend 加 -ant',
      root: { text: 'attend + -ant', gloss: '服务员；伴随的' },
      history: [
        { label: '名词或形容词', text: '名词或形容词' },
        { label: '车站、加油站服务员', text: '车站、加油站服务员' },
      ],
      mnemonic: '形容词：伴随而来的',
      note: '人',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The attendant opened the gate.', chinese: '服务员打开了门。' }],
    contexts: [{
      domain: '服务',
      senseId: 'attendant.s1',
      en: 'An attendant risk is the cost.',
      zh: '随之而来的风险是费用。',
      structure: 'An attendant risk is the cost.',
      grammar: '教学例句，用来固定 attendant 的常见用法。',
      rationale: '人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The attendant was the act of being present only.',
      right: 'The attendant is a person who serves.',
      reason: '人',
      rule: '人',
      special: '人',
    }],
    quiz: [
      { id: 'attendant.q1', senseId: 'attendant.s1', errorType: 'meaning', type: '词义', prompt: 'A person who serves customers is an _____.', options: ['attendant', 'attendance', 'attacker'], answer: 'attendant', explain: '服务员' },
      { id: 'attendant.q2', senseId: 'attendant.s1', errorType: 'meaning', type: '词义', prompt: '-ant 表示：', options: ['人', '出勤这个抽象名词', '攻击'], answer: '人', explain: '后缀' },
      { id: 'attendant.q3', senseId: 'attendant.s1', errorType: 'meaning', type: '词义', prompt: '出勤率是：', options: ['attendance', 'attendant', 'attention'], answer: 'attendance', explain: '名词' },
      { id: 'attendant.q4', senseId: 'attendant.s1', errorType: 'meaning', type: '词义', prompt: '攻击者是：', options: ['attacker', 'attendant', 'attorney'], answer: 'attacker', explain: '易混' }
    ],
    usage: { domains: ['服务'], tone: '中性', commonConfusion: ['attend'] },
  });

  D('attending', {
    etymology: {
      origin: '英语派生：attend 的 -ing，出面的或主诊的',
      root: { text: 'attend + -ing', gloss: '出席的；主诊的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'the attending doctor 主诊医生', text: 'the attending doctor 主诊医生' },
      ],
      mnemonic: '也可指正在出席',
      note: '医学与一般英语都有',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The attending doctor signed the form.', chinese: '主诊医生在表格上签了字。' }],
    contexts: [{
      domain: '医学',
      senseId: 'attending.s1',
      en: 'Everyone attending the talk received a sheet.',
      zh: '每个来听谈话的人都拿到一张纸。',
      structure: 'Everyone attending the talk received a sheet.',
      grammar: '教学例句，用来固定 attending 的常见用法。',
      rationale: '在场',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The attending was asleep so he was absent.',
      right: 'The attending doctor was present.',
      reason: '在场',
      rule: '在场',
      special: '医学与一般英语都有',
    }],
    quiz: [
      { id: 'attending.q1', senseId: 'attending.s1', errorType: 'meaning', type: '词义', prompt: 'The doctor in charge is the _____ doctor.', options: ['attending', 'attacking', 'attaining'], answer: 'attending', explain: '主诊' },
      { id: 'attending.q2', senseId: 'attending.s1', errorType: 'meaning', type: '词义', prompt: 'attending the meeting 意思是：', options: ['在出席', '在攻击', '在达到山顶'], answer: '在出席', explain: '分词' },
      { id: 'attending.q3', senseId: 'attending.s1', errorType: 'meaning', type: '词义', prompt: 'attacking 是：', options: ['正在攻击', '正在出席', '正在系上'], answer: '正在攻击', explain: '易混' },
      { id: 'attending.q4', senseId: 'attending.s1', errorType: 'meaning', type: '词义', prompt: '动词原形是：', options: ['attend', 'attempt', 'attach'], answer: 'attend', explain: '动词' }
    ],
    usage: { domains: ['医学'], tone: '中性', commonConfusion: ['attend'] },
  });

  D('attention', {
    etymology: {
      origin: '与 attend 同族，把心思投向某处',
      root: { text: 'attend', gloss: '注意' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'pay attention to', text: 'pay attention to' },
      ],
      mnemonic: '不可数为主',
      note: 'attention 不是 attendance',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Pay attention to the last line.', chinese: '注意最后一行。' }],
    contexts: [{
      domain: '课堂',
      senseId: 'attention.s1',
      en: 'The accident drew public attention.',
      zh: '事故引起了公众注意。',
      structure: 'The accident drew public attention.',
      grammar: '教学例句，用来固定 attention 的常见用法。',
      rationale: '用 to',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Pay attention on the sign.',
      right: 'Pay attention to the sign.',
      reason: '用 to',
      rule: '用 to',
      special: 'attention 不是 attendance',
    }],
    quiz: [
      { id: 'attention.q1', senseId: 'attention.s1', errorType: 'meaning', type: '词义', prompt: 'Please pay _____ to the map.', options: ['attention', 'attendance', 'attachment'], answer: 'attention', explain: '注意' },
      { id: 'attention.q2', senseId: 'attention.s1', errorType: 'meaning', type: '词义', prompt: 'draw _____ .', options: ['attention', 'atrocity', 'atlas'], answer: 'attention', explain: '引起注意' },
      { id: 'attention.q3', senseId: 'attention.s1', errorType: 'meaning', type: '词义', prompt: '出勤是：', options: ['attendance', 'attention', 'attack'], answer: 'attendance', explain: '易混' },
      { id: 'attention.q4', senseId: 'attention.s1', errorType: 'meaning', type: '词义', prompt: '介词 pay attention _____.', options: ['to', 'on', 'at'], answer: 'to', explain: 'to' }
    ],
    usage: { domains: ['课堂'], tone: '中性', commonConfusion: ['attend'] },
  });

  D('attic', {
    etymology: {
      origin: '建筑词，指屋顶下的阁楼；与希腊地区 Attica 的名称有历史联系，课堂记「阁楼」即可',
      root: { text: 'attic', gloss: '阁楼' },
      history: [
        { label: '名词', text: '名词' },
        { label: '房子顶部空间', text: '房子顶部空间' },
      ],
      mnemonic: '可数',
      note: '不是 atelier',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Old letters were stored in the attic.', chinese: '旧信存放在阁楼里。' }],
    contexts: [{
      domain: '家居',
      senseId: 'attic.s1',
      en: 'The attic gets hot in summer.',
      zh: '阁楼夏天很热。',
      structure: 'The attic gets hot in summer.',
      grammar: '教学例句，用来固定 attic 的常见用法。',
      rationale: '阁楼',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The attic is a studio in French by spelling atelier.',
      right: 'We keep boxes in the attic.',
      reason: '阁楼',
      rule: '阁楼',
      special: '不是 atelier',
    }],
    quiz: [
      { id: 'attic.q1', senseId: 'attic.s1', errorType: 'meaning', type: '词义', prompt: 'The room under the roof is the _____.', options: ['attic', 'atelier', 'atom'], answer: 'attic', explain: '阁楼' },
      { id: 'attic.q2', senseId: 'attic.s1', errorType: 'meaning', type: '词义', prompt: '艺术家工作室更常叫：', options: ['atelier', 'attic always', 'audit'], answer: 'atelier', explain: '法语词' },
      { id: 'attic.q3', senseId: 'attic.s1', errorType: 'meaning', type: '词义', prompt: 'attic 不是：', options: ['原子', '地图册', '暴行'], answer: '原子', explain: 'atom 形近' },
      { id: 'attic.q4', senseId: 'attic.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['attics', 'attices', 'atoms'], answer: 'attics', explain: '-s' }
    ],
    usage: { domains: ['家居'], tone: '中性', commonConfusion: ['atelier'] },
  });

  D('attitude', {
    etymology: {
      origin: '经法语、意大利语，原指姿势，后指态度和看法',
      root: { text: 'attitude', gloss: '态度；看法' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'attitude to 或 toward', text: 'attitude to 或 toward' },
      ],
      mnemonic: '可数',
      note: '一个人的内心立场',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'His attitude to work is serious.', chinese: '他对工作的态度很认真。' }],
    contexts: [{
      domain: '日常',
      senseId: 'attitude.s1',
      en: 'She has a positive attitude.',
      zh: '她的态度积极。',
      structure: 'She has a positive attitude.',
      grammar: '教学例句，用来固定 attitude 的常见用法。',
      rationale: 'to 或 toward',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'His attitude of work is the only pattern.',
      right: 'His attitude to work is serious.',
      reason: 'to 或 toward',
      rule: 'to 或 toward',
      special: '一个人的内心立场',
    }],
    quiz: [
      { id: 'attitude.q1', senseId: 'attitude.s1', errorType: 'meaning', type: '词义', prompt: 'A positive _____ helps.', options: ['attitude', 'altitude only if height', 'atlas'], answer: 'attitude', explain: '态度' },
      { id: 'attitude.q2', senseId: 'attitude.s1', errorType: 'meaning', type: '词义', prompt: 'attitude _____ the plan.', options: ['to', 'for', 'at'], answer: 'to', explain: '对……的态度' },
      { id: 'attitude.q3', senseId: 'attitude.s1', errorType: 'meaning', type: '词义', prompt: '高度是另一词：', options: ['altitude', 'attitude', 'atom'], answer: 'altitude', explain: '易混' },
      { id: 'attitude.q4', senseId: 'attitude.s1', errorType: 'meaning', type: '词义', prompt: '姿势义已经：', options: ['较少作为现代主义', '永远是医学动脉', '永远是肉冻'], answer: '较少作为现代主义', explain: '词义转移' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['manner'] },
  });

  D('attorney', {
    etymology: {
      origin: '法语「被转请来办事的人」，现多指律师，美国也指检察官',
      root: { text: 'attorney', gloss: '律师' },
      history: [
        { label: '名词', text: '名词' },
        { label: '美式尤其常见', text: '美式尤其常见' },
      ],
      mnemonic: '可数',
      note: '英式日常更常说 solicitor 或 barrister，但 attorney 仍认识',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She hired an attorney.', chinese: '她请了一位律师。' }],
    contexts: [{
      domain: '法律',
      senseId: 'attorney.s1',
      en: 'The attorney asked for more time.',
      zh: '律师要求更多时间。',
      structure: 'The attorney asked for more time.',
      grammar: '教学例句，用来固定 attorney 的常见用法。',
      rationale: '律师',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The attorney was a roof space.',
      right: 'The attorney is a lawyer.',
      reason: '律师',
      rule: '律师',
      special: '英式日常更常说 solicitor 或 barrister，但 attorney 仍认识',
    }],
    quiz: [
      { id: 'attorney.q1', senseId: 'attorney.s1', errorType: 'meaning', type: '词义', prompt: 'A lawyer in American English is often an _____.', options: ['attorney', 'attic', 'athlete'], answer: 'attorney', explain: '律师' },
      { id: 'attorney.q2', senseId: 'attorney.s1', errorType: 'meaning', type: '词义', prompt: 'attorney 不是：', options: ['阁楼', '运动员', '原子'], answer: '阁楼', explain: 'attic 形近' },
      { id: 'attorney.q3', senseId: 'attorney.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['attorneys', 'attornies', 'atoms'], answer: 'attorneys', explain: '-s' },
      { id: 'attorney.q4', senseId: 'attorney.s1', errorType: 'meaning', type: '词义', prompt: '权力机构是另一词：', options: ['authority', 'attorney', 'autonomy'], answer: 'authority', explain: '易混' }
    ],
    usage: { domains: ['法律'], tone: '中性', commonConfusion: ['lawyer'] },
  });

  D('attract', {
    etymology: {
      origin: '拉丁语 attrahere「拉向」',
      root: { text: 'trahere', gloss: '吸引' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'attract somebody 或 attention', text: 'attract somebody 或 attention' },
      ],
      mnemonic: '名词 attraction',
      note: '物理和比喻都用',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Bright colours attract insects.', chinese: '鲜艳的颜色吸引昆虫。' }],
    contexts: [{
      domain: '日常',
      senseId: 'attract.s1',
      en: 'The museum attracts thousands of visitors.',
      zh: '博物馆吸引成千上万的游客。',
      structure: 'The museum attracts thousands of visitors.',
      grammar: '教学例句，用来固定 attract 的常见用法。',
      rationale: '直接接宾语',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The museum attracts to visitors.',
      right: 'The museum attracts visitors.',
      reason: '直接接宾语',
      rule: '直接接宾语',
      special: '物理和比喻都用',
    }],
    quiz: [
      { id: 'attract.q1', senseId: 'attract.s1', errorType: 'meaning', type: '词义', prompt: 'Flowers _____ bees.', options: ['attract', 'attack', 'attach'], answer: 'attract', explain: '吸引' },
      { id: 'attract.q2', senseId: 'attract.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['attraction', 'attention', 'attachment'], answer: 'attraction', explain: '名词' },
      { id: 'attract.q3', senseId: 'attract.s1', errorType: 'meaning', type: '词义', prompt: '有吸引力的：', options: ['attractive', 'atrocious', 'atomic'], answer: 'attractive', explain: '形容词' },
      { id: 'attract.q4', senseId: 'attract.s1', errorType: 'meaning', type: '词义', prompt: 'attack 是：', options: ['攻击', '吸引', '系上'], answer: '攻击', explain: '易混' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['attraction'] },
  });

  D('attraction', {
    etymology: {
      origin: '英语派生：attract 加 -ion',
      root: { text: 'attract + -ion', gloss: '吸引；景点' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数或不可数', text: '可数或不可数' },
      ],
      mnemonic: 'a tourist attraction',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The main attraction is the old bridge.', chinese: '主要景点是那座老桥。' }],
    contexts: [{
      domain: '旅游',
      senseId: 'attraction.s1',
      en: 'There is a strong attraction between the two ideas in the essay.',
      zh: '文章里这两个想法之间有很强的吸引力。',
      structure: 'There is a strong attraction between the two ideas in the essay.',
      grammar: '教学例句，用来固定 attraction 的常见用法。',
      rationale: '景点',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The attraction attacked the bridge.',
      right: 'The old bridge is a tourist attraction.',
      reason: '景点',
      rule: '景点',
      special: '两义',
    }],
    quiz: [
      { id: 'attraction.q1', senseId: 'attraction.s1', errorType: 'meaning', type: '词义', prompt: 'A place tourists visit is an _____.', options: ['attraction', 'atrocity', 'atlas'], answer: 'attraction', explain: '景点' },
      { id: 'attraction.q2', senseId: 'attraction.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['attract', 'attack', 'attend'], answer: 'attract', explain: '动词' },
      { id: 'attraction.q3', senseId: 'attraction.s1', errorType: 'meaning', type: '词义', prompt: '-ion 是：', options: ['名词后缀', '副词', '介词'], answer: '名词后缀', explain: '词性' },
      { id: 'attraction.q4', senseId: 'attraction.s1', errorType: 'meaning', type: '词义', prompt: '注意是：', options: ['attention', 'attraction', 'attendance'], answer: 'attention', explain: '易混' }
    ],
    usage: { domains: ['旅游'], tone: '中性', commonConfusion: ['attract'] },
  });

  D('attractive', {
    etymology: {
      origin: '英语派生：attract 加 -ive',
      root: { text: 'attract + -ive', gloss: '有吸引力的；好看的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '外貌或方案', text: '外貌或方案' },
      ],
      mnemonic: 'attractive offer',
      note: '褒义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The offer is attractive.', chinese: '这个提议很有吸引力。' }],
    contexts: [{
      domain: '商业',
      senseId: 'attractive.s1',
      en: 'She wore an attractive but simple dress.',
      zh: '她穿了一件好看但朴素的裙子。',
      structure: 'She wore an attractive but simple dress.',
      grammar: '教学例句，用来固定 attractive 的常见用法。',
      rationale: '吸引人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The offer is attractive to refuse everyone.',
      right: 'An attractive offer makes people interested.',
      reason: '吸引人',
      rule: '吸引人',
      special: '褒义',
    }],
    quiz: [
      { id: 'attractive.q1', senseId: 'attractive.s1', errorType: 'meaning', type: '词义', prompt: 'A pleasant design is _____.', options: ['attractive', 'atrocious', 'awful'], answer: 'attractive', explain: '好看' },
      { id: 'attractive.q2', senseId: 'attractive.s1', errorType: 'meaning', type: '词义', prompt: '-ive 构成：', options: ['形容词', '名词复数', '介词'], answer: '形容词', explain: '后缀' },
      { id: 'attractive.q3', senseId: 'attractive.s1', errorType: 'meaning', type: '词义', prompt: '极糟是：', options: ['atrocious', 'attractive', 'authentic'], answer: 'atrocious', explain: '反义方向' },
      { id: 'attractive.q4', senseId: 'attractive.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['attract', 'attack', 'attach'], answer: 'attract', explain: '动词' }
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['attract'] },
  });

  D('attribute', {
    etymology: {
      origin: '拉丁语 attribuere「分派给」，把原因归于，或作名词指属性',
      root: { text: 'tribuere', gloss: '归因于；属性' },
      history: [
        { label: '动词或名词', text: '动词或名词' },
        { label: 'attribute A to B', text: 'attribute A to B' },
      ],
      mnemonic: '名词重音常在第一音节',
      note: '动词是归咎或归属',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'They attribute the delay to the fog.', chinese: '他们把延误归因于大雾。' }],
    contexts: [{
      domain: '评论',
      senseId: 'attribute.s1',
      en: 'Patience is an important attribute.',
      zh: '耐心是一项重要品质。',
      structure: 'Patience is an important attribute.',
      grammar: '教学例句，用来固定 attribute 的常见用法。',
      rationale: '用 to',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They attribute the delay for the fog.',
      right: 'They attribute the delay to the fog.',
      reason: '用 to',
      rule: '用 to',
      special: '动词是归咎或归属',
    }],
    quiz: [
      { id: 'attribute.q1', senseId: 'attribute.s1', errorType: 'meaning', type: '词义', prompt: '_____ the mistake to carelessness.', options: ['Attribute', 'Attack', 'Attach'], answer: 'Attribute', explain: '归因' },
      { id: 'attribute.q2', senseId: 'attribute.s1', errorType: 'meaning', type: '词义', prompt: '名词「品质」也是 _____.', options: ['attribute', 'atrocity', 'attic'], answer: 'attribute', explain: '属性' },
      { id: 'attribute.q3', senseId: 'attribute.s1', errorType: 'meaning', type: '词义', prompt: 'ascribe 与它：', options: ['近义', '反义', '毫无关系'], answer: '近义', explain: '都是归于' },
      { id: 'attribute.q4', senseId: 'attribute.s1', errorType: 'meaning', type: '词义', prompt: '介词：', options: ['to', 'for', 'at'], answer: 'to', explain: 'to' }
    ],
    usage: { domains: ['评论'], tone: '中性', commonConfusion: ['ascribe'] },
  });

  D('aubergine', {
    etymology: {
      origin: '法语蔬菜名，英式英语指茄子；美式常用 eggplant',
      root: { text: 'aubergine', gloss: '茄子' },
      history: [
        { label: '名词', text: '名词' },
        { label: '英式', text: '英式' },
      ],
      mnemonic: '紫色蔬菜',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'We fried aubergine with garlic.', chinese: '我们用大蒜煎了茄子。' }],
    contexts: [{
      domain: '烹饪',
      senseId: 'aubergine.s1',
      en: 'Aubergine is called eggplant in American English.',
      zh: 'aubergine 在美式英语里叫 eggplant。',
      structure: 'Aubergine is called eggplant in American English.',
      grammar: '教学例句，用来固定 aubergine 的常见用法。',
      rationale: '蔬菜',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Aubergine is a kind of attorney.',
      right: 'Aubergine is a vegetable.',
      reason: '蔬菜',
      rule: '蔬菜',
      special: '可数',
    }],
    quiz: [
      { id: 'aubergine.q1', senseId: 'aubergine.s1', errorType: 'meaning', type: '词义', prompt: 'The British word for eggplant is _____.', options: ['aubergine', 'attorney', 'attic'], answer: 'aubergine', explain: '茄子' },
      { id: 'aubergine.q2', senseId: 'aubergine.s1', errorType: 'meaning', type: '词义', prompt: '美式常说：', options: ['eggplant', 'atlas', 'atom'], answer: 'eggplant', explain: '对照' },
      { id: 'aubergine.q3', senseId: 'aubergine.s1', errorType: 'meaning', type: '词义', prompt: 'aubergine 不是：', options: ['律师', '阁楼', '运动员'], answer: '律师', explain: '形近少' },
      { id: 'aubergine.q4', senseId: 'aubergine.s1', errorType: 'meaning', type: '词义', prompt: '它是：', options: ['蔬菜', '暴行', '地图'], answer: '蔬菜', explain: '食物' }
    ],
    usage: { domains: ['烹饪'], tone: '中性', commonConfusion: ['eggplant'] },
  });

  D('auction', {
    etymology: {
      origin: '拉丁语 auctio，与「增加」有关，因为出价不断加高',
      root: { text: 'augere', gloss: '拍卖' },
      history: [
        { label: '名词或动词', text: '名词或动词' },
        { label: 'sell something at auction', text: 'sell something at auction' },
      ],
      mnemonic: '拍卖给出价最高的人',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The painting was sold at auction.', chinese: '这幅画被拍卖了。' }],
    contexts: [{
      domain: '商业',
      senseId: 'auction.s1',
      en: 'They will auction the chairs on Friday.',
      zh: '他们周五拍卖这些椅子。',
      structure: 'They will auction the chairs on Friday.',
      grammar: '教学例句，用来固定 auction 的常见用法。',
      rationale: '拍卖不是试镜',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The painting was sold at audition.',
      right: 'The painting was sold at auction.',
      reason: '拍卖不是试镜',
      rule: '拍卖不是试镜',
      special: '可数',
    }],
    quiz: [
      { id: 'auction.q1', senseId: 'auction.s1', errorType: 'meaning', type: '词义', prompt: 'A sale to the highest bidder is an _____.', options: ['auction', 'audit', 'audience'], answer: 'auction', explain: '拍卖' },
      { id: 'auction.q2', senseId: 'auction.s1', errorType: 'meaning', type: '词义', prompt: '动词：_____ the house.', options: ['auction', 'audit', 'avoid'], answer: 'auction', explain: '拍卖' },
      { id: 'auction.q3', senseId: 'auction.s1', errorType: 'meaning', type: '词义', prompt: '查账是：', options: ['audit', 'auction', 'augment'], answer: 'audit', explain: '易混' },
      { id: 'auction.q4', senseId: 'auction.s1', errorType: 'meaning', type: '词义', prompt: '听的词族是：', options: ['audience', 'auction', 'autumn'], answer: 'audience', explain: '听' }
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['sell'] },
  });

  D('audacity', {
    etymology: {
      origin: '拉丁语 audax「大胆」',
      root: { text: 'audax', gloss: '大胆；放肆' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可褒可贬', text: '可褒可贬' },
      ],
      mnemonic: '褒：有胆量；贬：厚颜',
      note: '不可数为主',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She had the audacity to ask again.', chinese: '她竟厚着脸皮又问了一次。' }],
    contexts: [{
      domain: '评论',
      senseId: 'audacity.s1',
      en: 'Starting the company took audacity.',
      zh: '创办这家公司需要胆量。',
      structure: 'Starting the company took audacity.',
      grammar: '教学例句，用来固定 audacity 的常见用法。',
      rationale: '大胆',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Her audacity was a quiet refusal to try.',
      right: 'Audacity is boldness.',
      reason: '大胆',
      rule: '大胆',
      special: '不可数为主',
    }],
    quiz: [
      { id: 'audacity.q1', senseId: 'audacity.s1', errorType: 'meaning', type: '词义', prompt: 'Rude boldness can be called _____.', options: ['audacity', 'atrocity', 'audience'], answer: 'audacity', explain: '厚颜' },
      { id: 'audacity.q2', senseId: 'audacity.s1', errorType: 'meaning', type: '词义', prompt: '勇敢创业也可需要：', options: ['audacity', 'ash', 'axe'], answer: 'audacity', explain: '胆量' },
      { id: 'audacity.q3', senseId: 'audacity.s1', errorType: 'meaning', type: '词义', prompt: '听众是：', options: ['audience', 'audacity', 'audit'], answer: 'audience', explain: '易混' },
      { id: 'audacity.q4', senseId: 'audacity.s1', errorType: 'meaning', type: '词义', prompt: 'audacity 的词性是：', options: ['名词', '动词', '形容词'], answer: '名词', explain: '抽象' }
    ],
    usage: { domains: ['评论'], tone: '中性', commonConfusion: ['boldness'] },
  });

  D('audience', {
    etymology: {
      origin: '拉丁语 audire「听」',
      root: { text: 'audire', gloss: '听众；观众；读者' },
      history: [
        { label: '名词', text: '名词' },
        { label: '集合', text: '集合' },
      ],
      mnemonic: '也可指读某作者的人',
      note: '动词用单数或复数视意',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The audience clapped for a full minute.', chinese: '观众鼓了足足一分钟掌。' }],
    contexts: [{
      domain: '艺术',
      senseId: 'audience.s1',
      en: 'The book found a young audience.',
      zh: '这本书找到了年轻读者群。',
      structure: 'The book found a young audience.',
      grammar: '教学例句，用来固定 audience 的常见用法。',
      rationale: '观众',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The audience audited the accounts.',
      right: 'The audience watched the play.',
      reason: '观众',
      rule: '观众',
      special: '动词用单数或复数视意',
    }],
    quiz: [
      { id: 'audience.q1', senseId: 'audience.s1', errorType: 'meaning', type: '词义', prompt: 'People watching a play are the _____.', options: ['audience', 'audit', 'auction'], answer: 'audience', explain: '观众' },
      { id: 'audience.q2', senseId: 'audience.s1', errorType: 'meaning', type: '词义', prompt: 'audire 与 _____ 有关。', options: ['hearing', 'selling', 'flying'], answer: 'hearing', explain: '听' },
      { id: 'audience.q3', senseId: 'audience.s1', errorType: 'meaning', type: '词义', prompt: '查账是：', options: ['audit', 'audience', 'august'], answer: 'audit', explain: '易混' },
      { id: 'audience.q4', senseId: 'audience.s1', errorType: 'meaning', type: '词义', prompt: 'audience 不是：', options: ['拍卖', '八月', '姑母'], answer: '拍卖', explain: 'auction' }
    ],
    usage: { domains: ['艺术'], tone: '中性', commonConfusion: ['audio'] },
  });

  D('audio', {
    etymology: {
      origin: '拉丁语 audire「听」，指声音的、音频的',
      root: { text: 'audire', gloss: '声音的；音频' },
      history: [
        { label: '形容词或名词', text: '形容词或名词' },
        { label: 'audio file', text: 'audio file' },
      ],
      mnemonic: '与 video 相对',
      note: '现代技术词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Turn up the audio.', chinese: '把声音开大。' }],
    contexts: [{
      domain: '技术',
      senseId: 'audio.s1',
      en: 'The audio recording is clearer than the video.',
      zh: '这段音频比视频更清楚。',
      structure: 'The audio recording is clearer than the video.',
      grammar: '教学例句，用来固定 audio 的常见用法。',
      rationale: '声音',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The audio was a group of people only.',
      right: 'The audio is the sound.',
      reason: '声音',
      rule: '声音',
      special: '现代技术词',
    }],
    quiz: [
      { id: 'audio.q1', senseId: 'audio.s1', errorType: 'meaning', type: '词义', prompt: 'Sound on a recording is the _____.', options: ['audio', 'audience', 'audit'], answer: 'audio', explain: '音频' },
      { id: 'audio.q2', senseId: 'audio.s1', errorType: 'meaning', type: '词义', prompt: '视频相对的是：', options: ['video', 'atlas', 'atom'], answer: 'video', explain: '对照' },
      { id: 'audio.q3', senseId: 'audio.s1', errorType: 'meaning', type: '词义', prompt: '听众是：', options: ['audience', 'audio', 'autumn'], answer: 'audience', explain: '人' },
      { id: 'audio.q4', senseId: 'audio.s1', errorType: 'meaning', type: '词义', prompt: 'audit 是：', options: ['审计', '声音', '拍卖'], answer: '审计', explain: '易混' }
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['audience'] },
  });

  D('audit', {
    etymology: {
      origin: '拉丁语 audire，原意与听账有关，现指审计',
      root: { text: 'audire', gloss: '审计' },
      history: [
        { label: '名词或动词', text: '名词或动词' },
        { label: 'audit the accounts', text: 'audit the accounts' },
      ],
      mnemonic: '正式',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'An outside firm will audit the books.', chinese: '一家外部公司将审计账目。' }],
    contexts: [{
      domain: '商业',
      senseId: 'audit.s1',
      en: 'The audit found two errors.',
      zh: '审计发现了两处错误。',
      structure: 'The audit found two errors.',
      grammar: '教学例句，用来固定 audit 的常见用法。',
      rationale: '鼓掌的是观众',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The audit clapped.',
      right: 'The audience clapped.',
      reason: '鼓掌的是观众',
      rule: '鼓掌的是观众',
      special: '可数',
    }],
    quiz: [
      { id: 'audit.q1', senseId: 'audit.s1', errorType: 'meaning', type: '词义', prompt: 'To check accounts officially is to _____ them.', options: ['audit', 'auction', 'avoid'], answer: 'audit', explain: '审计' },
      { id: 'audit.q2', senseId: 'audit.s1', errorType: 'meaning', type: '词义', prompt: '名词 an _____ .', options: ['audit', 'audience', 'audio'], answer: 'audit', explain: '一次审计' },
      { id: 'audit.q3', senseId: 'audit.s1', errorType: 'meaning', type: '词义', prompt: '拍卖是：', options: ['auction', 'audit', 'augment'], answer: 'auction', explain: '易混' },
      { id: 'audit.q4', senseId: 'audit.s1', errorType: 'meaning', type: '词义', prompt: '听声音的词是：', options: ['audio', 'audit only', 'autumn'], answer: 'audio', explain: '词族' }
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['auditor'] },
  });

  D('auditor', {
    etymology: {
      origin: '英语派生：audit 加 -or，审计员；也可指旁听生',
      root: { text: 'audit + -or', gloss: '审计员；旁听生' },
      history: [
        { label: '名词', text: '名词' },
        { label: '两义', text: '两义' },
      ],
      mnemonic: '财务或课堂',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The auditor checked every receipt.', chinese: '审计员核对了每一张收据。' }],
    contexts: [{
      domain: '职业',
      senseId: 'auditor.s1',
      en: 'She sat as an auditor and did not take the exam.',
      zh: '她旁听，不参加考试。',
      structure: 'She sat as an auditor and did not take the exam.',
      grammar: '教学例句，用来固定 auditor 的常见用法。',
      rationale: '人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The auditor was the whole crowd.',
      right: 'The auditor checks accounts or sits in.',
      reason: '人',
      rule: '人',
      special: '可数',
    }],
    quiz: [
      { id: 'auditor.q1', senseId: 'auditor.s1', errorType: 'meaning', type: '词义', prompt: 'A person who checks accounts is an _____.', options: ['auditor', 'audience', 'audio'], answer: 'auditor', explain: '审计员' },
      { id: 'auditor.q2', senseId: 'auditor.s1', errorType: 'meaning', type: '词义', prompt: '-or 表示：', options: ['人', '声音本身', '拍卖行为'], answer: '人', explain: '后缀' },
      { id: 'auditor.q3', senseId: 'auditor.s1', errorType: 'meaning', type: '词义', prompt: '听众集体是：', options: ['audience', 'auditor', 'autumn'], answer: 'audience', explain: '集体' },
      { id: 'auditor.q4', senseId: 'auditor.s1', errorType: 'meaning', type: '词义', prompt: '旁听而不拿学分也可以叫：', options: ['auditor', 'aviator', 'author'], answer: 'auditor', explain: '学校义' }
    ],
    usage: { domains: ['职业'], tone: '中性', commonConfusion: ['audit'] },
  });

  D('auditorium', {
    etymology: {
      origin: '拉丁语「听的地方」',
      root: { text: 'audire', gloss: '礼堂' },
      history: [
        { label: '名词', text: '名词' },
        { label: '观众席或大厅', text: '观众席或大厅' },
      ],
      mnemonic: '复数 auditoriums 或 auditoria',
      note: '建筑',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The auditorium holds eight hundred people.', chinese: '礼堂能容纳八百人。' }],
    contexts: [{
      domain: '建筑',
      senseId: 'auditorium.s1',
      en: 'We waited in the auditorium until the doors opened.',
      zh: '我们在礼堂里等到开门。',
      structure: 'We waited in the auditorium until the doors opened.',
      grammar: '教学例句，用来固定 auditorium 的常见用法。',
      rationale: '查账的是人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The auditorium checked the receipts.',
      right: 'The auditor checked the receipts.',
      reason: '查账的是人',
      rule: '查账的是人',
      special: '建筑',
    }],
    quiz: [
      { id: 'auditorium.q1', senseId: 'auditorium.s1', errorType: 'meaning', type: '词义', prompt: 'A large hall for performances is an _____.', options: ['auditorium', 'auditor', 'audit'], answer: 'auditorium', explain: '礼堂' },
      { id: 'auditorium.q2', senseId: 'auditorium.s1', errorType: 'meaning', type: '词义', prompt: '听的词根同：', options: ['audience', 'auction', 'autumn'], answer: 'audience', explain: 'audire' },
      { id: 'auditorium.q3', senseId: 'auditorium.s1', errorType: 'meaning', type: '词义', prompt: '审计员是：', options: ['auditor', 'auditorium', 'aviator'], answer: 'auditor', explain: '人' },
      { id: 'auditorium.q4', senseId: 'auditorium.s1', errorType: 'meaning', type: '词义', prompt: 'auditorium 是：', options: ['地点', '人', '月份'], answer: '地点', explain: '建筑' }
    ],
    usage: { domains: ['建筑'], tone: '中性', commonConfusion: ['audience'] },
  });

  D('augment', {
    etymology: {
      origin: '拉丁语 augere「增大」',
      root: { text: 'augere', gloss: '增大；补充' },
      history: [
        { label: '动词', text: '动词' },
        { label: '书面', text: '书面' },
      ],
      mnemonic: 'augment something',
      note: '比 increase 正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'They augmented the team with two engineers.', chinese: '他们给团队增补了两名工程师。' }],
    contexts: [{
      domain: '书面',
      senseId: 'augment.s1',
      en: 'The grant will augment the research fund.',
      zh: '这笔拨款将充实研究经费。',
      structure: 'The grant will augment the research fund.',
      grammar: '教学例句，用来固定 augment 的常见用法。',
      rationale: '是增加',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They augmented the team down to zero.',
      right: 'They augmented the fund.',
      reason: '是增加',
      rule: '是增加',
      special: '比 increase 正式',
    }],
    quiz: [
      { id: 'augment.q1', senseId: 'augment.s1', errorType: 'meaning', type: '词义', prompt: 'To increase by adding is to _____.', options: ['augment', 'audit', 'auction'], answer: 'augment', explain: '增大' },
      { id: 'augment.q2', senseId: 'augment.s1', errorType: 'meaning', type: '词义', prompt: 'augment 的语气：', options: ['正式', '婴儿语', '军事炮击专用'], answer: '正式', explain: '书面' },
      { id: 'augment.q3', senseId: 'augment.s1', errorType: 'meaning', type: '词义', prompt: '拍卖是：', options: ['auction', 'augment', 'autumn'], answer: 'auction', explain: '易混' },
      { id: 'augment.q4', senseId: 'augment.s1', errorType: 'meaning', type: '词义', prompt: '八月是：', options: ['August', 'augment', 'aunt'], answer: 'August', explain: '专名' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['increase'] },
  });

  D('August', {
    etymology: {
      origin: '月份名，来自罗马皇帝 Augustus，不是普通形容词 august「威严的」',
      root: { text: 'Augustus', gloss: '八月' },
      history: [
        { label: '专名', text: '专名' },
        { label: '一年的第八个月', text: '一年的第八个月' },
      ],
      mnemonic: '书写大写',
      note: '与 augment 只是遥远的「增大、尊荣」文化联想，课堂分开记',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'School starts again in August.', chinese: '学校八月再次开学。' }],
    contexts: [{
      domain: '时间',
      senseId: 'August.s1',
      en: 'August is often hot here.',
      zh: '这里的八月常常很热。',
      structure: 'August is often hot here.',
      grammar: '教学例句，用来固定 August 的常见用法。',
      rationale: '月份大写',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'We travel in august without a capital.',
      right: 'We travel in August.',
      reason: '月份大写',
      rule: '月份大写',
      special: '与 augment 只是遥远的「增大、尊荣」文化联想，课堂分开记',
    }],
    quiz: [
      { id: 'August.q1', senseId: 'August.s1', errorType: 'meaning', type: '词义', prompt: 'The eighth month is _____.', options: ['August', 'autumn', 'audit'], answer: 'August', explain: '八月' },
      { id: 'August.q2', senseId: 'August.s1', errorType: 'meaning', type: '词义', prompt: '威严的形容词小写是另一词，月份必须：', options: ['大写 August', '永远小写', '当成动词'], answer: '大写 August', explain: '专名' },
      { id: 'August.q3', senseId: 'August.s1', errorType: 'meaning', type: '词义', prompt: '秋天是：', options: ['autumn', 'August', 'aunt'], answer: 'autumn', explain: '季节' },
      { id: 'August.q4', senseId: 'August.s1', errorType: 'meaning', type: '词义', prompt: '审计是：', options: ['audit', 'August', 'audio'], answer: 'audit', explain: '形近' }
    ],
    usage: { domains: ['时间'], tone: '中性', commonConfusion: ['month'] },
  });

  D('aunt', {
    etymology: {
      origin: '拉丁语 amita 经法语成为 aunt，指父母的姐妹或其配偶的对应称谓',
      root: { text: 'amita', gloss: '姑母；姨母；伯母；舅母；婶母' },
      history: [
        { label: '名词', text: '名词' },
        { label: '亲属', text: '亲属' },
      ],
      mnemonic: '可数',
      note: '对孩子常说 auntie，词条本词是 aunt',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'My aunt lives near the river.', chinese: '我的姨妈住在河附近。' }],
    contexts: [{
      domain: '家庭',
      senseId: 'aunt.s1',
      en: 'I wrote to my aunt last week.',
      zh: '我上周给姑妈写了信。',
      structure: 'I wrote to my aunt last week.',
      grammar: '教学例句，用来固定 aunt 的常见用法。',
      rationale: '亲属称谓',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'My aunt is my son.',
      right: 'My aunt is the sister of a parent, or an uncle\'s wife.',
      reason: '亲属称谓',
      rule: '亲属称谓',
      special: '对孩子常说 auntie，词条本词是 aunt',
    }],
    quiz: [
      { id: 'aunt.q1', senseId: 'aunt.s1', errorType: 'meaning', type: '词义', prompt: 'Your mother\'s sister is your _____.', options: ['aunt', 'uncle', 'cousin'], answer: 'aunt', explain: '姨或姑' },
      { id: 'aunt.q2', senseId: 'aunt.s1', errorType: 'meaning', type: '词义', prompt: 'aunt 不是：', options: ['八月', '审计', '音频'], answer: '八月', explain: 'August 形近' },
      { id: 'aunt.q3', senseId: 'aunt.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['aunts', 'aunties only for auntie', 'atoms'], answer: 'aunts', explain: '-s' },
      { id: 'aunt.q4', senseId: 'aunt.s1', errorType: 'meaning', type: '词义', prompt: '男性对应常是：', options: ['uncle', 'aunt', 'author'], answer: 'uncle', explain: '亲属' }
    ],
    usage: { domains: ['家庭'], tone: '中性', commonConfusion: ['uncle'] },
  });

  D('authentic', {
    etymology: {
      origin: '希腊语 authentikos「真正出手于本人的」',
      root: { text: 'authentikos', gloss: '真正的；可信的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '不是复制品', text: '不是复制品' },
      ],
      mnemonic: '也可指信息可靠',
      note: '副词 authentically',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The signature looks authentic.', chinese: '这个签名看起来是真的。' }],
    contexts: [{
      domain: '鉴定',
      senseId: 'authentic.s1',
      en: 'We need an authentic report, not a rumour.',
      zh: '我们需要可靠的报告，不是谣言。',
      structure: 'We need an authentic report, not a rumour.',
      grammar: '教学例句，用来固定 authentic 的常见用法。',
      rationale: '真的',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The copy is authentic if it is a fake.',
      right: 'An authentic document is genuine.',
      reason: '真的',
      rule: '真的',
      special: '副词 authentically',
    }],
    quiz: [
      { id: 'authentic.q1', senseId: 'authentic.s1', errorType: 'meaning', type: '词义', prompt: 'A genuine painting is _____.', options: ['authentic', 'artificial', 'atrocious'], answer: 'authentic', explain: '真正' },
      { id: 'authentic.q2', senseId: 'authentic.s1', errorType: 'meaning', type: '词义', prompt: '假的是：', options: ['artificial', 'authentic', 'atomic'], answer: 'artificial', explain: '反义方向' },
      { id: 'authentic.q3', senseId: 'authentic.s1', errorType: 'meaning', type: '词义', prompt: '名词性质是：', options: ['authenticity', 'atrocity', 'audience'], answer: 'authenticity', explain: '名词' },
      { id: 'authentic.q4', senseId: 'authentic.s1', errorType: 'meaning', type: '词义', prompt: 'author 是：', options: ['作者', '真品性质', '礼堂'], answer: '作者', explain: '相关但不同' }
    ],
    usage: { domains: ['鉴定'], tone: '中性', commonConfusion: ['authenticity'] },
  });

  D('authenticity', {
    etymology: {
      origin: '英语派生：authentic 加 -ity',
      root: { text: 'authentic + -ity', gloss: '真实性' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数', text: '不可数' },
      ],
      mnemonic: 'of the document',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Experts questioned the authenticity of the letter.', chinese: '专家质疑这封信的真实性。' }],
    contexts: [{
      domain: '学术',
      senseId: 'authenticity.s1',
      en: 'Authenticity matters in historical research.',
      zh: '真实性在历史研究中很重要。',
      structure: 'Authenticity matters in historical research.',
      grammar: '教学例句，用来固定 authenticity 的常见用法。',
      rationale: '不真',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The authenticity was a plastic flower.',
      right: 'A plastic flower lacks authenticity.',
      reason: '不真',
      rule: '不真',
      special: '正式',
    }],
    quiz: [
      { id: 'authenticity.q1', senseId: 'authenticity.s1', errorType: 'meaning', type: '词义', prompt: 'The quality of being genuine is _____.', options: ['authenticity', 'atrocity', 'audience'], answer: 'authenticity', explain: '真实性' },
      { id: 'authenticity.q2', senseId: 'authenticity.s1', errorType: 'meaning', type: '词义', prompt: '-ity 构成：', options: ['名词', '副词', '介词'], answer: '名词', explain: '后缀' },
      { id: 'authenticity.q3', senseId: 'authenticity.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['authentic', 'artificial', 'atomic'], answer: 'authentic', explain: '形容词' },
      { id: 'authenticity.q4', senseId: 'authenticity.s1', errorType: 'meaning', type: '词义', prompt: '假造性质是：', options: ['artificiality', 'authenticity', 'audacity'], answer: 'artificiality', explain: '反义方向' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['authentic'] },
  });

  D('author', {
    etymology: {
      origin: '拉丁语 auctor「使事物成立的人」，现指作者',
      root: { text: 'auctor', gloss: '作者' },
      history: [
        { label: '名词', text: '名词' },
        { label: '写书或文章的人', text: '写书或文章的人' },
      ],
      mnemonic: '可数',
      note: '动词 author 较少，考试认名词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The author signed my copy.', chinese: '作者在我的书上签了名。' }],
    contexts: [{
      domain: '出版',
      senseId: 'author.s1',
      en: 'She is the author of three novels.',
      zh: '她是三部小说的作者。',
      structure: 'She is the author of three novels.',
      grammar: '教学例句，用来固定 author 的常见用法。',
      rationale: '作者',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The author was the reader in the hall.',
      right: 'The author wrote the book.',
      reason: '作者',
      rule: '作者',
      special: '动词 author 较少，考试认名词',
    }],
    quiz: [
      { id: 'author.q1', senseId: 'author.s1', errorType: 'meaning', type: '词义', prompt: 'The person who writes a book is the _____.', options: ['author', 'audience', 'auditor'], answer: 'author', explain: '作者' },
      { id: 'author.q2', senseId: 'author.s1', errorType: 'meaning', type: '词义', prompt: '读者群是：', options: ['audience', 'author', 'autumn'], answer: 'audience', explain: '对比' },
      { id: 'author.q3', senseId: 'author.s1', errorType: 'meaning', type: '词义', prompt: '权威是：', options: ['authority', 'author', 'autonomy'], answer: 'authority', explain: '相关' },
      { id: 'author.q4', senseId: 'author.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['authors', 'authorities', 'atoms'], answer: 'authors', explain: '-s' }
    ],
    usage: { domains: ['出版'], tone: '中性', commonConfusion: ['authority'] },
  });

  D('authoritative', {
    etymology: {
      origin: '英语派生：authority 加 -ative',
      root: { text: 'authority', gloss: '权威的；命令式的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '来源可信', text: '来源可信' },
      ],
      mnemonic: '也可指口气不容商量',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The report is authoritative.', chinese: '这份报告有权威性。' }],
    contexts: [{
      domain: '学术',
      senseId: 'authoritative.s1',
      en: 'She spoke in an authoritative voice.',
      zh: '她用命令式的口气说话。',
      structure: 'She spoke in an authoritative voice.',
      grammar: '教学例句，用来固定 authoritative 的常见用法。',
      rationale: '可信',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The report is authoritative so nobody trusts it.',
      right: 'An authoritative report is trusted.',
      reason: '可信',
      rule: '可信',
      special: '两义',
    }],
    quiz: [
      { id: 'authoritative.q1', senseId: 'authoritative.s1', errorType: 'meaning', type: '词义', prompt: 'A trusted source is _____.', options: ['authoritative', 'artificial', 'atrocious'], answer: 'authoritative', explain: '权威' },
      { id: 'authoritative.q2', senseId: 'authoritative.s1', errorType: 'meaning', type: '词义', prompt: '命令式口气也可以是：', options: ['authoritative', 'asleep', 'ashamed'], answer: 'authoritative', explain: '形容词' },
      { id: 'authoritative.q3', senseId: 'authoritative.s1', errorType: 'meaning', type: '词义', prompt: '名词权力是：', options: ['authority', 'authenticity', 'audience'], answer: 'authority', explain: '名词' },
      { id: 'authoritative.q4', senseId: 'authoritative.s1', errorType: 'meaning', type: '词义', prompt: '作者是：', options: ['author', 'authoritative', 'auditor'], answer: 'author', explain: '人' }
    ],
    usage: { domains: ['学术'], tone: '中性', commonConfusion: ['authority'] },
  });

  D('authority', {
    etymology: {
      origin: '拉丁语 auctoritas，权力、当局或权威人士',
      root: { text: 'auctoritas', gloss: '权力；当局；权威' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'the authorities 当局', text: 'the authorities 当局' },
      ],
      mnemonic: 'an authority on 某方面的权威',
      note: '多义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The local authority closed the road.', chinese: '地方当局封闭了那条路。' }],
    contexts: [{
      domain: '社会',
      senseId: 'authority.s1',
      en: 'She is an authority on bees.',
      zh: '她是蜜蜂方面的权威。',
      structure: 'She is an authority on bees.',
      grammar: '教学例句，用来固定 authority 的常见用法。',
      rationale: '写书的人是 author',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The authority wrote the novel as the main sense.',
      right: 'The author wrote the novel.',
      reason: '写书的人是 author',
      rule: '写书的人是 author',
      special: '多义',
    }],
    quiz: [
      { id: 'authority.q1', senseId: 'authority.s1', errorType: 'meaning', type: '词义', prompt: '_____ closed the park.', options: ['The authorities', 'The authors only', 'The audiences'], answer: 'The authorities', explain: '当局' },
      { id: 'authority.q2', senseId: 'authority.s1', errorType: 'meaning', type: '词义', prompt: 'an authority _____ birds.', options: ['on', 'for', 'at'], answer: 'on', explain: 'on' },
      { id: 'authority.q3', senseId: 'authority.s1', errorType: 'meaning', type: '词义', prompt: '作者是：', options: ['author', 'authority', 'auditor'], answer: 'author', explain: '人' },
      { id: 'authority.q4', senseId: 'authority.s1', errorType: 'meaning', type: '词义', prompt: '授权动词是：', options: ['authorize', 'attain', 'attack'], answer: 'authorize', explain: '动词' }
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['author'] },
  });

  D('authorize', {
    etymology: {
      origin: '英语派生：authority 的动词形式，正式批准',
      root: { text: 'authority', gloss: '授权；批准' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'authorize somebody to do', text: 'authorize somebody to do' },
      ],
      mnemonic: '美式也拼作 authorise 英式',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The manager authorized the payment.', chinese: '经理批准了这笔付款。' }],
    contexts: [{
      domain: '办公',
      senseId: 'authorize.s1',
      en: 'I am not authorized to sign.',
      zh: '我无权签署。',
      structure: 'I am not authorized to sign.',
      grammar: '教学例句，用来固定 authorize 的常见用法。',
      rationale: '批准不是写作',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The manager authored the payment.',
      right: 'The manager authorized the payment.',
      reason: '批准不是写作',
      rule: '批准不是写作',
      special: '正式',
    }],
    quiz: [
      { id: 'authorize.q1', senseId: 'authorize.s1', errorType: 'meaning', type: '词义', prompt: 'Who can _____ the change?', options: ['authorize', 'author', 'audit'], answer: 'authorize', explain: '批准' },
      { id: 'authorize.q2', senseId: 'authorize.s1', errorType: 'meaning', type: '词义', prompt: 'authorize somebody _____ leave.', options: ['to', 'for', 'of'], answer: 'to', explain: 'to do' },
      { id: 'authorize.q3', senseId: 'authorize.s1', errorType: 'meaning', type: '词义', prompt: '英式拼写可以是：', options: ['authorise', 'authority', 'autumn'], answer: 'authorise', explain: '-ise' },
      { id: 'authorize.q4', senseId: 'authorize.s1', errorType: 'meaning', type: '词义', prompt: '作者名词是：', options: ['author', 'authorize', 'audience'], answer: 'author', explain: '人' }
    ],
    usage: { domains: ['办公'], tone: '中性', commonConfusion: ['authority'] },
  });

  D('authorized', {
    etymology: {
      origin: '英语派生：authorize 的过去分词',
      root: { text: 'authorize', gloss: '经授权的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'authorized personnel', text: 'authorized personnel' },
      ],
      mnemonic: '只限被允许的人',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Authorized personnel may enter.', chinese: '经授权人员可以进入。' }],
    contexts: [{
      domain: '告示',
      senseId: 'authorized.s1',
      en: 'The payment was authorized yesterday.',
      zh: '这笔付款昨天获得批准。',
      structure: 'The payment was authorized yesterday.',
      grammar: '教学例句，用来固定 authorized 的常见用法。',
      rationale: '有许可',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Authorized personnel means anyone at all.',
      right: 'Authorized personnel have permission.',
      reason: '有许可',
      rule: '有许可',
      special: '正式',
    }],
    quiz: [
      { id: 'authorized.q1', senseId: 'authorized.s1', errorType: 'meaning', type: '词义', prompt: 'Only _____ staff may enter.', options: ['authorized', 'authentic', 'automatic as a different word'], answer: 'authorized', explain: '经授权' },
      { id: 'authorized.q2', senseId: 'authorized.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['authorize', 'author', 'audit'], answer: 'authorize', explain: '动词' },
      { id: 'authorized.q3', senseId: 'authorized.s1', errorType: 'meaning', type: '词义', prompt: '真的文件是：', options: ['authentic', 'authorized as genuine by spelling only', 'atomic'], answer: 'authentic', explain: '易混' },
      { id: 'authorized.q4', senseId: 'authorized.s1', errorType: 'meaning', type: '词义', prompt: '未经授权：', options: ['unauthorized', 'authorized', 'asleep'], answer: 'unauthorized', explain: '反义' }
    ],
    usage: { domains: ['告示'], tone: '中性', commonConfusion: ['authorize'] },
  });

  D('auto', {
    etymology: {
      origin: 'automobile 的口语缩短，指汽车',
      root: { text: 'automobile', gloss: '汽车' },
      history: [
        { label: '名词', text: '名词' },
        { label: '口语', text: '口语' },
      ],
      mnemonic: '复数 autos',
      note: '美式更常见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'We rented an auto for the week.', chinese: '我们租了一辆车用一周。' }],
    contexts: [{
      domain: '日常',
      senseId: 'auto.s1',
      en: 'The auto would not start in the cold.',
      zh: '车子在寒冷中发动不了。',
      structure: 'The auto would not start in the cold.',
      grammar: '教学例句，用来固定 auto 的常见用法。',
      rationale: '汽车',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'An auto is a star.',
      right: 'An auto is a car.',
      reason: '汽车',
      rule: '汽车',
      special: '美式更常见',
    }],
    quiz: [
      { id: 'auto.q1', senseId: 'auto.s1', errorType: 'meaning', type: '词义', prompt: 'A car can informally be called an _____.', options: ['auto', 'atom', 'axis'], answer: 'auto', explain: '汽车' },
      { id: 'auto.q2', senseId: 'auto.s1', errorType: 'meaning', type: '词义', prompt: '完整词是：', options: ['automobile', 'astronomy', 'audit'], answer: 'automobile', explain: '原词' },
      { id: 'auto.q3', senseId: 'auto.s1', errorType: 'meaning', type: '词义', prompt: '自动的是另一词：', options: ['automatic', 'auto as car only', 'atomic'], answer: 'automatic', explain: '相关词族' },
      { id: 'auto.q4', senseId: 'auto.s1', errorType: 'meaning', type: '词义', prompt: 'auto 在 autobiography 里表示：', options: ['自己', '汽车必须', '八月'], answer: '自己', explain: '希腊语 autos' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['car'] },
  });

  D('autobiography', {
    etymology: {
      origin: '英语派生：auto「自己」加 biography「传记」',
      root: { text: 'auto + biography', gloss: '自传' },
      history: [
        { label: '名词', text: '名词' },
        { label: '自己写自己的一生', text: '自己写自己的一生' },
      ],
      mnemonic: '可数',
      note: '与 biography 相对',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Her autobiography came out in May.', chinese: '她的自传五月出版。' }],
    contexts: [{
      domain: '出版',
      senseId: 'autobiography.s1',
      en: 'The autobiography explains her childhood.',
      zh: '自传讲述了她的童年。',
      structure: 'The autobiography explains her childhood.',
      grammar: '教学例句，用来固定 autobiography 的常见用法。',
      rationale: '本人所写',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He wrote her autobiography about another person only.',
      right: 'An autobiography is written by the person it describes.',
      reason: '本人所写',
      rule: '本人所写',
      special: '与 biography 相对',
    }],
    quiz: [
      { id: 'autobiography.q1', senseId: 'autobiography.s1', errorType: 'meaning', type: '词义', prompt: 'A life story written by oneself is an _____.', options: ['autobiography', 'biography', 'autograph'], answer: 'autobiography', explain: '自传' },
      { id: 'autobiography.q2', senseId: 'autobiography.s1', errorType: 'meaning', type: '词义', prompt: '别人写的传记是：', options: ['biography', 'autobiography', 'audit'], answer: 'biography', explain: '对比' },
      { id: 'autobiography.q3', senseId: 'autobiography.s1', errorType: 'meaning', type: '词义', prompt: '亲笔签名是：', options: ['autograph', 'autobiography', 'autumn'], answer: 'autograph', explain: '签名' },
      { id: 'autobiography.q4', senseId: 'autobiography.s1', errorType: 'meaning', type: '词义', prompt: 'auto 表示：', options: ['自己', '汽车在这个词里不是主义', '听觉'], answer: '自己', explain: '构词' }
    ],
    usage: { domains: ['出版'], tone: '中性', commonConfusion: ['biography'] },
  });

  D('autograph', {
    etymology: {
      origin: 'auto「自己」加 graph「写」',
      root: { text: 'auto + graph', gloss: '亲笔签名' },
      history: [
        { label: '名词或动词', text: '名词或动词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: '请人签名 ask for an autograph',
      note: '与 autobiography 不同',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'I asked the poet for an autograph.', chinese: '我向诗人要了亲笔签名。' }],
    contexts: [{
      domain: '日常',
      senseId: 'autograph.s1',
      en: 'She autographed the programme.',
      zh: '她在节目单上签名。',
      structure: 'She autographed the programme.',
      grammar: '教学例句，用来固定 autograph 的常见用法。',
      rationale: '签名',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The autograph is a full life story.',
      right: 'The autograph is a signature.',
      reason: '签名',
      rule: '签名',
      special: '与 autobiography 不同',
    }],
    quiz: [
      { id: 'autograph.q1', senseId: 'autograph.s1', errorType: 'meaning', type: '词义', prompt: 'A star\'s signature is an _____.', options: ['autograph', 'autobiography', 'audit'], answer: 'autograph', explain: '签名' },
      { id: 'autograph.q2', senseId: 'autograph.s1', errorType: 'meaning', type: '词义', prompt: 'graph 与 _____ 有关。', options: ['writing', 'hearing', 'selling'], answer: 'writing', explain: '写' },
      { id: 'autograph.q3', senseId: 'autograph.s1', errorType: 'meaning', type: '词义', prompt: '整本自传是：', options: ['autobiography', 'autograph', 'authority'], answer: 'autobiography', explain: '书' },
      { id: 'autograph.q4', senseId: 'autograph.s1', errorType: 'meaning', type: '词义', prompt: '动词可以是：', options: ['autograph', 'audit', 'auction'], answer: 'autograph', explain: '签名' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['signature'] },
  });

  D('automate', {
    etymology: {
      origin: '英语派生：automatic 一系，使自动化',
      root: { text: 'automatos', gloss: '使自动化' },
      history: [
        { label: '动词', text: '动词' },
        { label: '用机器代替人工操作', text: '用机器代替人工操作' },
      ],
      mnemonic: '名词 automation',
      note: '技术',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The factory automated the packing line.', chinese: '工厂使包装线实现了自动化。' }],
    contexts: [{
      domain: '技术',
      senseId: 'automate.s1',
      en: 'They plan to automate the weekly report.',
      zh: '他们计划把周报自动化。',
      structure: 'They plan to automate the weekly report.',
      grammar: '教学例句，用来固定 automate 的常见用法。',
      rationale: '机器',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'They automated the line by hiring more people only.',
      right: 'Automate means machines do the work.',
      reason: '机器',
      rule: '机器',
      special: '技术',
    }],
    quiz: [
      { id: 'automate.q1', senseId: 'automate.s1', errorType: 'meaning', type: '词义', prompt: 'To make a process run by machines is to _____ it.', options: ['automate', 'audit', 'auction'], answer: 'automate', explain: '自动化' },
      { id: 'automate.q2', senseId: 'automate.s1', errorType: 'meaning', type: '词义', prompt: '名词过程是：', options: ['automation', 'audience', 'autumn'], answer: 'automation', explain: '名词' },
      { id: 'automate.q3', senseId: 'automate.s1', errorType: 'meaning', type: '词义', prompt: '已经自动化的：', options: ['automated', 'ashamed', 'asleep'], answer: 'automated', explain: '形容词' },
      { id: 'automate.q4', senseId: 'automate.s1', errorType: 'meaning', type: '词义', prompt: '手写签名是：', options: ['autograph', 'automate', 'axis'], answer: 'autograph', explain: '不同' }
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['automated'] },
  });

  D('automated', {
    etymology: {
      origin: '英语派生：automate 的过去分词',
      root: { text: 'automate', gloss: '自动化的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'automated system', text: 'automated system' },
      ],
      mnemonic: '无需人逐步操作',
      note: '技术',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The doors are automated.', chinese: '这些门是自动的。' }],
    contexts: [{
      domain: '技术',
      senseId: 'automated.s1',
      en: 'An automated reply answered the email.',
      zh: '一封自动回复回了那封邮件。',
      structure: 'An automated reply answered the email.',
      grammar: '教学例句，用来固定 automated 的常见用法。',
      rationale: '自动',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The doors are automated so a person must push every second.',
      right: 'Automated doors move by themselves.',
      reason: '自动',
      rule: '自动',
      special: '技术',
    }],
    quiz: [
      { id: 'automated.q1', senseId: 'automated.s1', errorType: 'meaning', type: '词义', prompt: 'An _____ email reply', options: ['automated', 'authentic', 'atrocious'], answer: 'automated', explain: '自动回复' },
      { id: 'automated.q2', senseId: 'automated.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['automate', 'author', 'audit'], answer: 'automate', explain: '动词' },
      { id: 'automated.q3', senseId: 'automated.s1', errorType: 'meaning', type: '词义', prompt: '手写的真迹更接近：', options: ['autograph', 'automated', 'attic'], answer: 'autograph', explain: '不同' },
      { id: 'automated.q4', senseId: 'automated.s1', errorType: 'meaning', type: '词义', prompt: '副词是：', options: ['automatically', 'automated', 'autumn'], answer: 'automatically', explain: '-ly' }
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['automate'] },
  });

  D('automatically', {
    etymology: {
      origin: '英语派生：automatic 加 -ly',
      root: { text: 'automatic + -ly', gloss: '自动地；必然地' },
      history: [
        { label: '副词', text: '副词' },
        { label: '机器自己做', text: '机器自己做' },
      ],
      mnemonic: '也可指结果必然发生',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The lights turn on automatically.', chinese: '灯会自动打开。' }],
    contexts: [{
      domain: '技术',
      senseId: 'automatically.s1',
      en: 'If you miss the bus, you automatically wait an hour.',
      zh: '如果错过这班车，你就必然要再等一小时。',
      structure: 'If you miss the bus, you automatically wait an hour.',
      grammar: '教学例句，用来固定 automatically 的常见用法。',
      rationale: '无需人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The lights turn on automatically by a person each time as the meaning.',
      right: 'The lights turn on automatically.',
      reason: '无需人',
      rule: '无需人',
      special: '两义',
    }],
    quiz: [
      { id: 'automatically.q1', senseId: 'automatically.s1', errorType: 'meaning', type: '词义', prompt: 'The gate closes _____.', options: ['automatically', 'authentic', 'atomic'], answer: 'automatically', explain: '自动地' },
      { id: 'automatically.q2', senseId: 'automatically.s1', errorType: 'meaning', type: '词义', prompt: '作为必然结果也可以说 _____.', options: ['automatically', 'ashore', 'aside'], answer: 'automatically', explain: '必然' },
      { id: 'automatically.q3', senseId: 'automatically.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['automatic', 'atomic', 'athletic'], answer: 'automatic', explain: '形容词' },
      { id: 'automatically.q4', senseId: 'automatically.s1', errorType: 'meaning', type: '词义', prompt: '人工地是另一词：', options: ['artificially', 'automatically', 'audibly only'], answer: 'artificially', explain: '对比' }
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['automatic'] },
  });

  D('automaton', {
    etymology: {
      origin: '希腊语 automatos「自己动的」',
      root: { text: 'automatos', gloss: '自动装置；机械般的人' },
      history: [
        { label: '名词', text: '名词' },
        { label: '机器像生物一样动', text: '机器像生物一样动' },
      ],
      mnemonic: '也可批评人不思考',
      note: '复数 automatons 或 automata',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The clockwork automaton raised its arm.', chinese: '那个发条自动装置举起了手臂。' }],
    contexts: [{
      domain: '描写',
      senseId: 'automaton.s1',
      en: 'He worked like an automaton.',
      zh: '他干活像台机器，不加思考。',
      structure: 'He worked like an automaton.',
      grammar: '教学例句，用来固定 automaton 的常见用法。',
      rationale: '缺乏自主',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'An automaton always thinks deeply.',
      right: 'Calling someone an automaton suggests no independent thought.',
      reason: '缺乏自主',
      rule: '缺乏自主',
      special: '复数 automatons 或 automata',
    }],
    quiz: [
      { id: 'automaton.q1', senseId: 'automaton.s1', errorType: 'meaning', type: '词义', prompt: 'A machine that moves by itself can be an _____.', options: ['automaton', 'atom', 'atlas'], answer: 'automaton', explain: '自动装置' },
      { id: 'automaton.q2', senseId: 'automaton.s1', errorType: 'meaning', type: '词义', prompt: '批评人行尸走肉也用：', options: ['automaton', 'aunt', 'axe'], answer: 'automaton', explain: '比喻' },
      { id: 'automaton.q3', senseId: 'automaton.s1', errorType: 'meaning', type: '词义', prompt: '复数之一是：', options: ['automata', 'atom', 'axes'], answer: 'automata', explain: '希腊式复数' },
      { id: 'automaton.q4', senseId: 'automaton.s1', errorType: 'meaning', type: '词义', prompt: '汽车行业的是：', options: ['automotive', 'automaton', 'autumn'], answer: 'automotive', explain: '形容词' }
    ],
    usage: { domains: ['描写'], tone: '中性', commonConfusion: ['automate'] },
  });

  D('automotive', {
    etymology: {
      origin: '英语派生：与 automobile 同族的形容词',
      root: { text: 'automobile', gloss: '汽车的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'automotive industry', text: 'automotive industry' },
      ],
      mnemonic: '不指自动门',
      note: '工业',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The automotive industry employs thousands.', chinese: '汽车工业雇用数千人。' }],
    contexts: [{
      domain: '经济',
      senseId: 'automotive.s1',
      en: 'She studied automotive design.',
      zh: '她学的是汽车设计。',
      structure: 'She studied automotive design.',
      grammar: '教学例句，用来固定 automotive 的常见用法。',
      rationale: '车辆',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Automotive design is about stars.',
      right: 'Automotive design is about motor vehicles.',
      reason: '车辆',
      rule: '车辆',
      special: '工业',
    }],
    quiz: [
      { id: 'automotive.q1', senseId: 'automotive.s1', errorType: 'meaning', type: '词义', prompt: 'The car industry is the _____ industry.', options: ['automotive', 'automatic', 'atomic'], answer: 'automotive', explain: '汽车业' },
      { id: 'automotive.q2', senseId: 'automotive.s1', errorType: 'meaning', type: '词义', prompt: 'automatic 更强调：', options: ['自己运转', '汽车产业', '原子'], answer: '自己运转', explain: '易混' },
      { id: 'automotive.q3', senseId: 'automotive.s1', errorType: 'meaning', type: '词义', prompt: '名词口语汽车是：', options: ['auto', 'atom', 'axis'], answer: 'auto', explain: '车' },
      { id: 'automotive.q4', senseId: 'automotive.s1', errorType: 'meaning', type: '词义', prompt: '航空是：', options: ['aviation', 'automotive', 'audit'], answer: 'aviation', explain: '不同行业' }
    ],
    usage: { domains: ['经济'], tone: '中性', commonConfusion: ['auto'] },
  });

  D('autonomous', {
    etymology: {
      origin: 'auto「自己」加 nomos「法则」',
      root: { text: 'auto + nomos', gloss: '自治的；自主的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '地区或个人', text: '地区或个人' },
      ],
      mnemonic: '不受外部控制',
      note: '名词 autonomy',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The region is autonomous.', chinese: '该地区是自治的。' }],
    contexts: [{
      domain: '政治',
      senseId: 'autonomous.s1',
      en: 'Autonomous learners plan their own work.',
      zh: '自主的学习者自己安排学习。',
      structure: 'Autonomous learners plan their own work.',
      grammar: '教学例句，用来固定 autonomous 的常见用法。',
      rationale: '自己管理',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The region is autonomous so another country decides every law.',
      right: 'An autonomous region governs itself.',
      reason: '自己管理',
      rule: '自己管理',
      special: '名词 autonomy',
    }],
    quiz: [
      { id: 'autonomous.q1', senseId: 'autonomous.s1', errorType: 'meaning', type: '词义', prompt: 'A self-governing region is _____.', options: ['autonomous', 'automatic', 'atomic'], answer: 'autonomous', explain: '自治' },
      { id: 'autonomous.q2', senseId: 'autonomous.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['autonomy', 'automation', 'audience'], answer: 'autonomy', explain: '名词' },
      { id: 'autonomous.q3', senseId: 'autonomous.s1', errorType: 'meaning', type: '词义', prompt: 'nomos 在这里与 _____ 有关。', options: ['rules or law', 'cars only', 'hearing'], answer: 'rules or law', explain: '法则' },
      { id: 'autonomous.q4', senseId: 'autonomous.s1', errorType: 'meaning', type: '词义', prompt: 'automatic 是：', options: ['自动的', '自治的', '真的'], answer: '自动的', explain: '易混' }
    ],
    usage: { domains: ['政治'], tone: '中性', commonConfusion: ['autonomy'] },
  });

  D('autonomy', {
    etymology: {
      origin: '英语派生：与 autonomous 对应的名词',
      root: { text: 'auto + nomos', gloss: '自治；自主权' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数为主', text: '不可数为主' },
      ],
      mnemonic: '政治或个人',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The island gained autonomy.', chinese: '该岛获得了自治。' }],
    contexts: [{
      domain: '政治',
      senseId: 'autonomy.s1',
      en: 'Patients want autonomy in medical choices.',
      zh: '病人希望在医疗选择上有自主权。',
      structure: 'Patients want autonomy in medical choices.',
      grammar: '教学例句，用来固定 autonomy 的常见用法。',
      rationale: '自主',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Autonomy means a machine door only.',
      right: 'Autonomy is the right to govern oneself.',
      reason: '自主',
      rule: '自主',
      special: '正式',
    }],
    quiz: [
      { id: 'autonomy.q1', senseId: 'autonomy.s1', errorType: 'meaning', type: '词义', prompt: 'The right to self-government is _____.', options: ['autonomy', 'automation', 'audience'], answer: 'autonomy', explain: '自治' },
      { id: 'autonomy.q2', senseId: 'autonomy.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['autonomous', 'automatic', 'authentic'], answer: 'autonomous', explain: '形容词' },
      { id: 'autonomy.q3', senseId: 'autonomy.s1', errorType: 'meaning', type: '词义', prompt: '自动化是：', options: ['automation', 'autonomy', 'auction'], answer: 'automation', explain: '易混' },
      { id: 'autonomy.q4', senseId: 'autonomy.s1', errorType: 'meaning', type: '词义', prompt: 'author 是：', options: ['作者', '自治', '礼堂'], answer: '作者', explain: '不同' }
    ],
    usage: { domains: ['政治'], tone: '中性', commonConfusion: ['autonomous'] },
  });

  D('autumn', {
    etymology: {
      origin: '拉丁语 autumnus，夏与冬之间的季节',
      root: { text: 'autumnus', gloss: '秋天' },
      history: [
        { label: '名词', text: '名词' },
        { label: '英式常用 autumn', text: '英式常用 autumn' },
      ],
      mnemonic: '美式常用 fall',
      note: '季节',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Leaves turn red in autumn.', chinese: '叶子在秋天变红。' }],
    contexts: [{
      domain: '季节',
      senseId: 'autumn.s1',
      en: 'Autumn follows summer.',
      zh: '秋天跟在夏天之后。',
      structure: 'Autumn follows summer.',
      grammar: '教学例句，用来固定 autumn 的常见用法。',
      rationale: '八月不是季节',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Autumn is the eighth month.',
      right: 'August is the eighth month.',
      reason: '八月不是季节',
      rule: '八月不是季节',
      special: '季节',
    }],
    quiz: [
      { id: 'autumn.q1', senseId: 'autumn.s1', errorType: 'meaning', type: '词义', prompt: 'The season after summer is _____.', options: ['autumn', 'August', 'audit'], answer: 'autumn', explain: '秋天' },
      { id: 'autumn.q2', senseId: 'autumn.s1', errorType: 'meaning', type: '词义', prompt: '美式常说：', options: ['fall', 'attic', 'atom'], answer: 'fall', explain: '对照' },
      { id: 'autumn.q3', senseId: 'autumn.s1', errorType: 'meaning', type: '词义', prompt: '八月是：', options: ['August', 'autumn', 'aunt'], answer: 'August', explain: '月份' },
      { id: 'autumn.q4', senseId: 'autumn.s1', errorType: 'meaning', type: '词义', prompt: '审计是：', options: ['audit', 'autumn', 'audio'], answer: 'audit', explain: '形近' }
    ],
    usage: { domains: ['季节'], tone: '中性', commonConfusion: ['fall'] },
  });

  D('auxiliary', {
    etymology: {
      origin: '拉丁语 auxilium「帮助」',
      root: { text: 'auxilium', gloss: '辅助的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '提供支援', text: '提供支援' },
      ],
      mnemonic: '语法里 auxiliary verb 助动词',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'An auxiliary engine started when the main one failed.', chinese: '主发动机失灵时，辅助发动机启动了。' }],
    contexts: [{
      domain: '技术',
      senseId: 'auxiliary.s1',
      en: 'Be is an auxiliary verb in she is leaving.',
      zh: '在 she is leaving 里，be 是助动词。',
      structure: 'Be is an auxiliary verb in she is leaving.',
      grammar: '教学例句，用来固定 auxiliary 的常见用法。',
      rationale: '辅助',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The auxiliary engine was the only main plan with no help sense.',
      right: 'An auxiliary engine is a backup.',
      reason: '辅助',
      rule: '辅助',
      special: '正式',
    }],
    quiz: [
      { id: 'auxiliary.q1', senseId: 'auxiliary.s1', errorType: 'meaning', type: '词义', prompt: 'A backup engine is _____.', options: ['auxiliary', 'atomic', 'awful'], answer: 'auxiliary', explain: '辅助' },
      { id: 'auxiliary.q2', senseId: 'auxiliary.s1', errorType: 'meaning', type: '词义', prompt: '助动词叫 _____ verb.', options: ['auxiliary', 'artillery', 'audio'], answer: 'auxiliary', explain: '语法' },
      { id: 'auxiliary.q3', senseId: 'auxiliary.s1', errorType: 'meaning', type: '词义', prompt: 'auxilium 接近：', options: ['帮助', '听觉', '秋季'], answer: '帮助', explain: '词源' },
      { id: 'auxiliary.q4', senseId: 'auxiliary.s1', errorType: 'meaning', type: '词义', prompt: '权威是：', options: ['authority', 'auxiliary', 'audience'], answer: 'authority', explain: '不同' }
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['help'] },
  });

  D('avail', {
    etymology: {
      origin: '拉丁语 valere「有价值、有效」，书面语中表示利用或效用',
      root: { text: 'valere', gloss: '利用；效用' },
      history: [
        { label: '动词或名词', text: '动词或名词' },
        { label: 'avail oneself of', text: 'avail oneself of' },
      ],
      mnemonic: 'of no avail 没有用',
      note: '书面',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He availed himself of the offer.', chinese: '他利用了这个提议。' }],
    contexts: [{
      domain: '书面',
      senseId: 'avail.s1',
      en: 'Shouting was of no avail.',
      zh: '叫喊无济于事。',
      structure: 'Shouting was of no avail.',
      grammar: '教学例句，用来固定 avail 的常见用法。',
      rationale: '反身加 of',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He availed the offer without himself.',
      right: 'He availed himself of the offer.',
      reason: '反身加 of',
      rule: '反身加 of',
      special: '书面',
    }],
    quiz: [
      { id: 'avail.q1', senseId: 'avail.s1', errorType: 'meaning', type: '词义', prompt: '_____ yourself of the library.', options: ['Avail', 'Avoid', 'Avenge'], answer: 'Avail', explain: '利用' },
      { id: 'avail.q2', senseId: 'avail.s1', errorType: 'meaning', type: '词义', prompt: 'of no _____ .', options: ['avail', 'aunt', 'axe'], answer: 'avail', explain: '没有用' },
      { id: 'avail.q3', senseId: 'avail.s1', errorType: 'meaning', type: '词义', prompt: '避免是：', options: ['avoid', 'avail', 'augment'], answer: 'avoid', explain: '易混' },
      { id: 'avail.q4', senseId: 'avail.s1', errorType: 'meaning', type: '词义', prompt: '有空、可得到是：', options: ['available', 'avail as adjective', 'atomic'], answer: 'available', explain: '形容词' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['available'] },
  });

  D('available', {
    etymology: {
      origin: '英语派生：avail 一系，可以获得或有空',
      root: { text: 'avail', gloss: '可获得的；有空的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'available for', text: 'available for' },
      ],
      mnemonic: '人有空或物可得到',
      note: '很常用',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The book is available online.', chinese: '这本书可以在网上获得。' }],
    contexts: [{
      domain: '日常',
      senseId: 'available.s1',
      en: 'Are you available on Friday?',
      zh: '你周五有空吗？',
      structure: 'Are you available on Friday?',
      grammar: '教学例句，用来固定 available 的常见用法。',
      rationale: '不必乱加 to',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The book is available to online.',
      right: 'The book is available online.',
      reason: '不必乱加 to',
      rule: '不必乱加 to',
      special: '很常用',
    }],
    quiz: [
      { id: 'available.q1', senseId: 'available.s1', errorType: 'meaning', type: '词义', prompt: 'Is the room _____?', options: ['available', 'average', 'awful'], answer: 'available', explain: '可得到' },
      { id: 'available.q2', senseId: 'available.s1', errorType: 'meaning', type: '词义', prompt: '人有空也说 _____.', options: ['available', 'asleep', 'ashamed'], answer: 'available', explain: '有空' },
      { id: 'available.q3', senseId: 'available.s1', errorType: 'meaning', type: '词义', prompt: '避免是动词：', options: ['avoid', 'available', 'avenge'], answer: 'avoid', explain: '易混' },
      { id: 'available.q4', senseId: 'available.s1', errorType: 'meaning', type: '词义', prompt: 'of no avail 是：', options: ['没有用', '有空', '平均'], answer: '没有用', explain: '名词 avail' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['avail'] },
  });

  D('avarice', {
    etymology: {
      origin: '拉丁语 avarus「贪婪的」',
      root: { text: 'avarus', gloss: '贪财' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数', text: '不可数' },
      ],
      mnemonic: '贬义',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Avarice destroyed the partnership.', chinese: '贪财毁了这段合作。' }],
    contexts: [{
      domain: '评论',
      senseId: 'avarice.s1',
      en: 'He was driven by avarice.',
      zh: '他被贪欲驱使。',
      structure: 'He was driven by avarice.',
      grammar: '教学例句，用来固定 avarice 的常见用法。',
      rationale: '贪',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Avarice is generous giving.',
      right: 'Avarice is extreme greed for money.',
      reason: '贪',
      rule: '贪',
      special: '正式',
    }],
    quiz: [
      { id: 'avarice.q1', senseId: 'avarice.s1', errorType: 'meaning', type: '词义', prompt: 'Extreme greed for money is _____.', options: ['avarice', 'average', 'aviation'], answer: 'avarice', explain: '贪财' },
      { id: 'avarice.q2', senseId: 'avarice.s1', errorType: 'meaning', type: '词义', prompt: 'avarice 的色彩是：', options: ['贬义', '夸奖运动员', '中性月份'], answer: '贬义', explain: '评价' },
      { id: 'avarice.q3', senseId: 'avarice.s1', errorType: 'meaning', type: '词义', prompt: '平均是：', options: ['average', 'avarice', 'autumn'], answer: 'average', explain: '形近' },
      { id: 'avarice.q4', senseId: 'avarice.s1', errorType: 'meaning', type: '词义', prompt: '避免是：', options: ['avoid', 'avarice', 'await'], answer: 'avoid', explain: '不同' }
    ],
    usage: { domains: ['评论'], tone: '中性', commonConfusion: ['greed'] },
  });

  D('avenge', {
    etymology: {
      origin: '法语 venger 一系，为受害而惩罚对方',
      root: { text: 'venger', gloss: '报仇' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'avenge somebody 或 something', text: 'avenge somebody 或 something' },
      ],
      mnemonic: '主语认为惩罚是正义的',
      note: '与 revenge 近义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She avenged her brother.', chinese: '她为哥哥报了仇。' }],
    contexts: [{
      domain: '叙事',
      senseId: 'avenge.s1',
      en: 'They avenged the insult in court, not in the street.',
      zh: '他们在法庭上而不是在街上为这侮辱讨回公道。',
      structure: 'They avenged the insult in court, not in the street.',
      grammar: '教学例句，用来固定 avenge 的常见用法。',
      rationale: '直接接人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She avenged to her brother.',
      right: 'She avenged her brother.',
      reason: '直接接人',
      rule: '直接接人',
      special: '与 revenge 近义',
    }],
    quiz: [
      { id: 'avenge.q1', senseId: 'avenge.s1', errorType: 'meaning', type: '词义', prompt: 'To punish harm done to your family is to _____ them.', options: ['avenge', 'avoid', 'await'], answer: 'avenge', explain: '报仇' },
      { id: 'avenge.q2', senseId: 'avenge.s1', errorType: 'meaning', type: '词义', prompt: 'avenge 不是：', options: ['避免', '等待', '平均'], answer: '避免', explain: 'avoid' },
      { id: 'avenge.q3', senseId: 'avenge.s1', errorType: 'meaning', type: '词义', prompt: '名词复仇者是：', options: ['avenger', 'aviator', 'author'], answer: 'avenger', explain: '-er' },
      { id: 'avenge.q4', senseId: 'avenge.s1', errorType: 'meaning', type: '词义', prompt: 'revenge 与 avenge：', options: ['近义', '反义', '同一拼写'], answer: '近义', explain: '都是报复' }
    ],
    usage: { domains: ['叙事'], tone: '中性', commonConfusion: ['revenge'] },
  });

  D('avenue', {
    etymology: {
      origin: '法语，与 venir「来」有关，宽街，也比喻途径',
      root: { text: 'venir', gloss: '大街；途径' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: 'an avenue to success 比喻',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'They live on a wide avenue.', chinese: '他们住在一条宽阔的大街上。' }],
    contexts: [{
      domain: '城市',
      senseId: 'avenue.s1',
      en: 'Education is one avenue out of poverty.',
      zh: '教育是摆脱贫困的一条途径。',
      structure: 'Education is one avenue out of poverty.',
      grammar: '教学例句，用来固定 avenue 的常见用法。',
      rationale: '街或途径',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The avenue was a bird.',
      right: 'An avenue can be a street or a way.',
      reason: '街或途径',
      rule: '街或途径',
      special: '两义',
    }],
    quiz: [
      { id: 'avenue.q1', senseId: 'avenue.s1', errorType: 'meaning', type: '词义', prompt: 'A wide street can be an _____.', options: ['avenue', 'aviation', 'aviator'], answer: 'avenue', explain: '大街' },
      { id: 'avenue.q2', senseId: 'avenue.s1', errorType: 'meaning', type: '词义', prompt: '比喻途径：an avenue _____ agreement.', options: ['to', 'for ash', 'at axe'], answer: 'to', explain: 'to' },
      { id: 'avenue.q3', senseId: 'avenue.s1', errorType: 'meaning', type: '词义', prompt: '航空是：', options: ['aviation', 'avenue', 'audit'], answer: 'aviation', explain: '易混' },
      { id: 'avenue.q4', senseId: 'avenue.s1', errorType: 'meaning', type: '词义', prompt: '飞行者是：', options: ['aviator', 'avenue', 'author'], answer: 'aviator', explain: '人' }
    ],
    usage: { domains: ['城市'], tone: '中性', commonConfusion: ['way'] },
  });

  D('average', {
    etymology: {
      origin: '与早期海损分摊有关，现代指平均数或普通水平',
      root: { text: 'average', gloss: '平均的；普通的' },
      history: [
        { label: '名词或形容词', text: '名词或形容词' },
        { label: 'on average', text: 'on average' },
      ],
      mnemonic: '既不特别高也不特别低',
      note: '常用',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The average age is twenty.', chinese: '平均年龄是二十岁。' }],
    contexts: [{
      domain: '数学',
      senseId: 'average.s1',
      en: 'On average, the bus is ten minutes late.',
      zh: '公交车平均晚十分钟。',
      structure: 'On average, the bus is ten minutes late.',
      grammar: '教学例句，用来固定 average 的常见用法。',
      rationale: '通常水平',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'On average means never.',
      right: 'On average describes a typical level.',
      reason: '通常水平',
      rule: '通常水平',
      special: '常用',
    }],
    quiz: [
      { id: 'average.q1', senseId: 'average.s1', errorType: 'meaning', type: '词义', prompt: 'The _____ score was 70.', options: ['average', 'avarice', 'awful'], answer: 'average', explain: '平均' },
      { id: 'average.q2', senseId: 'average.s1', errorType: 'meaning', type: '词义', prompt: 'on _____ .', options: ['average', 'avenue', 'autumn'], answer: 'average', explain: '短语' },
      { id: 'average.q3', senseId: 'average.s1', errorType: 'meaning', type: '词义', prompt: '贪财是：', options: ['avarice', 'average', 'aviation'], answer: 'avarice', explain: '形近' },
      { id: 'average.q4', senseId: 'average.s1', errorType: 'meaning', type: '词义', prompt: '很糟是：', options: ['awful', 'average', 'awesome'], answer: 'awful', explain: '程度不同' }
    ],
    usage: { domains: ['数学'], tone: '中性', commonConfusion: ['mean'] },
  });

  D('aversion', {
    etymology: {
      origin: '拉丁语 avertere「转开」，强烈的厌恶',
      root: { text: 'vertere', gloss: '厌恶' },
      history: [
        { label: '名词', text: '名词' },
        { label: 'an aversion to', text: 'an aversion to' },
      ],
      mnemonic: '比 dislike 强',
      note: '名词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She has an aversion to loud music.', chinese: '她非常讨厌喧闹的音乐。' }],
    contexts: [{
      domain: '心理',
      senseId: 'aversion.s1',
      en: 'His aversion to debt is well known.',
      zh: '他对负债的厌恶是出了名的。',
      structure: 'His aversion to debt is well known.',
      grammar: '教学例句，用来固定 aversion 的常见用法。',
      rationale: '用 to',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She has an aversion for loud music as the taught pattern.',
      right: 'She has an aversion to loud music.',
      reason: '用 to',
      rule: '用 to',
      special: '名词',
    }],
    quiz: [
      { id: 'aversion.q1', senseId: 'aversion.s1', errorType: 'meaning', type: '词义', prompt: 'A strong dislike is an _____.', options: ['aversion', 'average', 'aviation'], answer: 'aversion', explain: '厌恶' },
      { id: 'aversion.q2', senseId: 'aversion.s1', errorType: 'meaning', type: '词义', prompt: 'aversion _____ smoke.', options: ['to', 'for', 'at'], answer: 'to', explain: 'to' },
      { id: 'aversion.q3', senseId: 'aversion.s1', errorType: 'meaning', type: '词义', prompt: '转开目光的动词是：', options: ['avert', 'avenge', 'avoid'], answer: 'avert', explain: '动词' },
      { id: 'aversion.q4', senseId: 'aversion.s1', errorType: 'meaning', type: '词义', prompt: '平均是：', options: ['average', 'aversion', 'autumn'], answer: 'average', explain: '形近' }
    ],
    usage: { domains: ['心理'], tone: '中性', commonConfusion: ['avert'] },
  });

  D('avert', {
    etymology: {
      origin: '拉丁语 avertere「转开」',
      root: { text: 'vertere', gloss: '防止；转移目光' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'avert a crisis', text: 'avert a crisis' },
      ],
      mnemonic: 'avert one\'s eyes',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Quick action averted a fire.', chinese: '迅速行动避免了一场火灾。' }],
    contexts: [{
      domain: '新闻',
      senseId: 'avert.s1',
      en: 'She averted her eyes from the bright light.',
      zh: '她把目光从强光上移开。',
      structure: 'She averted her eyes from the bright light.',
      grammar: '教学例句，用来固定 avert 的常见用法。',
      rationale: '移开',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She averted her eyes to stare harder.',
      right: 'She averted her eyes means she looked away.',
      reason: '移开',
      rule: '移开',
      special: '两义',
    }],
    quiz: [
      { id: 'avert.q1', senseId: 'avert.s1', errorType: 'meaning', type: '词义', prompt: 'To prevent a disaster is to _____ it.', options: ['avert', 'avenge', 'await'], answer: 'avert', explain: '防止' },
      { id: 'avert.q2', senseId: 'avert.s1', errorType: 'meaning', type: '词义', prompt: 'avert one\'s _____.', options: ['eyes', 'avenue', 'axis'], answer: 'eyes', explain: '移开目光' },
      { id: 'avert.q3', senseId: 'avert.s1', errorType: 'meaning', type: '词义', prompt: '名词厌恶是：', options: ['aversion', 'average', 'award'], answer: 'aversion', explain: '名词' },
      { id: 'avert.q4', senseId: 'avert.s1', errorType: 'meaning', type: '词义', prompt: '报仇是：', options: ['avenge', 'avert', 'avoid'], answer: 'avenge', explain: '易混' }
    ],
    usage: { domains: ['新闻'], tone: '中性', commonConfusion: ['avoid'] },
  });

  D('aviation', {
    etymology: {
      origin: '拉丁语 avis「鸟」',
      root: { text: 'avis', gloss: '航空' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数', text: '不可数' },
      ],
      mnemonic: '飞行器相关行业',
      note: '正式',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Aviation changed long-distance travel.', chinese: '航空改变了长途旅行。' }],
    contexts: [{
      domain: '交通',
      senseId: 'aviation.s1',
      en: 'She works in civil aviation.',
      zh: '她在民用航空业工作。',
      structure: 'She works in civil aviation.',
      grammar: '教学例句，用来固定 aviation 的常见用法。',
      rationale: '飞行',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Aviation is a wide street.',
      right: 'Aviation is the activity of flying.',
      reason: '飞行',
      rule: '飞行',
      special: '正式',
    }],
    quiz: [
      { id: 'aviation.q1', senseId: 'aviation.s1', errorType: 'meaning', type: '词义', prompt: 'The industry of flight is _____.', options: ['aviation', 'avenue', 'avarice'], answer: 'aviation', explain: '航空' },
      { id: 'aviation.q2', senseId: 'aviation.s1', errorType: 'meaning', type: '词义', prompt: 'avis 与 _____ 有关。', options: ['birds', 'money', 'maps'], answer: 'birds', explain: '鸟' },
      { id: 'aviation.q3', senseId: 'aviation.s1', errorType: 'meaning', type: '词义', prompt: '飞行员旧称：', options: ['aviator', 'attorney', 'author'], answer: 'aviator', explain: '人' },
      { id: 'aviation.q4', senseId: 'aviation.s1', errorType: 'meaning', type: '词义', prompt: '大街是：', options: ['avenue', 'aviation', 'autumn'], answer: 'avenue', explain: '易混' }
    ],
    usage: { domains: ['交通'], tone: '中性', commonConfusion: ['aviator'] },
  });

  D('aviator', {
    etymology: {
      origin: '英语派生：aviation 加 -or',
      root: { text: 'aviation + -or', gloss: '飞行员' },
      history: [
        { label: '名词', text: '名词' },
        { label: '尤其指早期飞行员', text: '尤其指早期飞行员' },
      ],
      mnemonic: '可数',
      note: '现代也说 pilot',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The aviator landed in a field.', chinese: '飞行员降落在一块地里。' }],
    contexts: [{
      domain: '历史',
      senseId: 'aviator.s1',
      en: 'Early aviators flew in open cockpits.',
      zh: '早期飞行员在敞开的座舱里飞行。',
      structure: 'Early aviators flew in open cockpits.',
      grammar: '教学例句，用来固定 aviator 的常见用法。',
      rationale: '人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The aviator was a street.',
      right: 'The aviator flies aircraft.',
      reason: '人',
      rule: '人',
      special: '现代也说 pilot',
    }],
    quiz: [
      { id: 'aviator.q1', senseId: 'aviator.s1', errorType: 'meaning', type: '词义', prompt: 'A person who flies a plane is an _____.', options: ['aviator', 'avenue', 'auditor'], answer: 'aviator', explain: '飞行员' },
      { id: 'aviator.q2', senseId: 'aviator.s1', errorType: 'meaning', type: '词义', prompt: '-or 表示：', options: ['人', '行业抽象名词', '大街'], answer: '人', explain: '后缀' },
      { id: 'aviator.q3', senseId: 'aviator.s1', errorType: 'meaning', type: '词义', prompt: '行业名词是：', options: ['aviation', 'aviator', 'audit'], answer: 'aviation', explain: '名词' },
      { id: 'aviator.q4', senseId: 'aviator.s1', errorType: 'meaning', type: '词义', prompt: '审计员是：', options: ['auditor', 'aviator', 'author'], answer: 'auditor', explain: '易混' }
    ],
    usage: { domains: ['历史'], tone: '中性', commonConfusion: ['pilot'] },
  });

  D('avoid', {
    etymology: {
      origin: '与 void「空」有关，意思是躲开、使某事不发生',
      root: { text: 'void', gloss: '避免' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'avoid something 或 doing', text: 'avoid something 或 doing' },
      ],
      mnemonic: '不接 to do',
      note: '很常用',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'We avoided the busy road.', chinese: '我们躲开了那条拥挤的路。' }],
    contexts: [{
      domain: '日常',
      senseId: 'avoid.s1',
      en: 'She avoided answering the question.',
      zh: '她避免回答那个问题。',
      structure: 'She avoided answering the question.',
      grammar: '教学例句，用来固定 avoid 的常见用法。',
      rationale: 'avoid doing',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She avoided to answer.',
      right: 'She avoided answering.',
      reason: 'avoid doing',
      rule: 'avoid doing',
      special: '很常用',
    }],
    quiz: [
      { id: 'avoid.q1', senseId: 'avoid.s1', errorType: 'meaning', type: '词义', prompt: '_____ the broken glass.', options: ['Avoid', 'Avert one\'s eyes only', 'Avail'], answer: 'Avoid', explain: '躲开' },
      { id: 'avoid.q2', senseId: 'avoid.s1', errorType: 'meaning', type: '词义', prompt: 'avoid _____.', options: ['smoking', 'to smoke', 'smoke'], answer: 'smoking', explain: 'doing' },
      { id: 'avoid.q3', senseId: 'avoid.s1', errorType: 'meaning', type: '词义', prompt: '利用是：', options: ['avail', 'avoid', 'avenge'], answer: 'avail', explain: '易混' },
      { id: 'avoid.q4', senseId: 'avoid.s1', errorType: 'meaning', type: '词义', prompt: '防止灾难也可以说：', options: ['avert', 'avoid', 'await'], answer: 'avert', explain: '近义' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['avert'] },
  });

  D('avowal', {
    etymology: {
      origin: '与 avow「公开承认」同族，正式的声明',
      root: { text: 'avow', gloss: '公开声明' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: '正式、郑重',
      note: '比 statement 少见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'His avowal of guilt surprised the court.', chinese: '他公开认罪，令法庭惊讶。' }],
    contexts: [{
      domain: '书面',
      senseId: 'avowal.s1',
      en: 'She made an avowal of loyalty.',
      zh: '她郑重表明了忠诚。',
      structure: 'She made an avowal of loyalty.',
      grammar: '教学例句，用来固定 avowal 的常见用法。',
      rationale: '公开说出',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'His avowal was a secret denial.',
      right: 'An avowal is an open statement.',
      reason: '公开说出',
      rule: '公开说出',
      special: '比 statement 少见',
    }],
    quiz: [
      { id: 'avowal.q1', senseId: 'avowal.s1', errorType: 'meaning', type: '词义', prompt: 'A formal public admission is an _____.', options: ['avowal', 'avenue', 'audit'], answer: 'avowal', explain: '公开声明' },
      { id: 'avowal.q2', senseId: 'avowal.s1', errorType: 'meaning', type: '词义', prompt: '动词承认是：', options: ['avow', 'avoid', 'await'], answer: 'avow', explain: '动词' },
      { id: 'avowal.q3', senseId: 'avowal.s1', errorType: 'meaning', type: '词义', prompt: '避免是：', options: ['avoid', 'avowal', 'avenge'], answer: 'avoid', explain: '易混' },
      { id: 'avowal.q4', senseId: 'avowal.s1', errorType: 'meaning', type: '词义', prompt: '航空是：', options: ['aviation', 'avowal', 'autumn'], answer: 'aviation', explain: '无关' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['avow'] },
  });

  D('await', {
    etymology: {
      origin: '英语派生：a- 加 wait，书面语「等待」',
      root: { text: 'a- + wait', gloss: '等待' },
      history: [
        { label: '动词', text: '动词' },
        { label: 'await something', text: 'await something' },
      ],
      mnemonic: '主语也可以是「某事等待着某人」',
      note: '不说 await for',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'A surprise awaited us at home.', chinese: '家里有一个意外在等我们。' }],
    contexts: [{
      domain: '书面',
      senseId: 'await.s1',
      en: 'We await your reply.',
      zh: '我们等待你的回复。',
      structure: 'We await your reply.',
      grammar: '教学例句，用来固定 await 的常见用法。',
      rationale: '不加 for',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'We await for your reply.',
      right: 'We await your reply.',
      reason: '不加 for',
      rule: '不加 for',
      special: '不说 await for',
    }],
    quiz: [
      { id: 'await.q1', senseId: 'await.s1', errorType: 'meaning', type: '词义', prompt: 'We _____ the result.', options: ['await', 'avoid', 'avenge'], answer: 'await', explain: '等待' },
      { id: 'await.q2', senseId: 'await.s1', errorType: 'meaning', type: '词义', prompt: 'await 后面：', options: ['直接接宾语', '必须加 for', '必须加 to'], answer: '直接接宾语', explain: '及物' },
      { id: 'await.q3', senseId: 'await.s1', errorType: 'meaning', type: '词义', prompt: 'wait _____ the bus 才用 for。', options: ['for', 'atop', 'aside'], answer: 'for', explain: '对比 wait' },
      { id: 'await.q4', senseId: 'await.s1', errorType: 'meaning', type: '词义', prompt: '避免是：', options: ['avoid', 'await', 'augment'], answer: 'avoid', explain: '易混' }
    ],
    usage: { domains: ['书面'], tone: '中性', commonConfusion: ['wait'] },
  });

  D('awaiting', {
    etymology: {
      origin: '英语派生：await 的 -ing',
      root: { text: 'await + -ing', gloss: '等待中的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'awaiting repair', text: 'awaiting repair' },
      ],
      mnemonic: '事物即将被处理或人在等',
      note: '常作定语',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The engine is awaiting repair.', chinese: '发动机正在等待修理。' }],
    contexts: [{
      domain: '办公',
      senseId: 'awaiting.s1',
      en: 'Passengers awaiting the bus stood under the roof.',
      zh: '等公交的乘客站在棚下。',
      structure: 'Passengers awaiting the bus stood under the roof.',
      grammar: '教学例句，用来固定 awaiting 的常见用法。',
      rationale: '不加 for',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The engine is awaiting for repair.',
      right: 'The engine is awaiting repair.',
      reason: '不加 for',
      rule: '不加 for',
      special: '常作定语',
    }],
    quiz: [
      { id: 'awaiting.q1', senseId: 'awaiting.s1', errorType: 'meaning', type: '词义', prompt: 'Bags _____ collection', options: ['awaiting', 'avoiding', 'avenging'], answer: 'awaiting', explain: '待取' },
      { id: 'awaiting.q2', senseId: 'awaiting.s1', errorType: 'meaning', type: '词义', prompt: '-ing 这里是：', options: ['形容词或分词', '介词', '月份'], answer: '形容词或分词', explain: '词性' },
      { id: 'awaiting.q3', senseId: 'awaiting.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['await', 'avoid', 'avert'], answer: 'await', explain: '动词' },
      { id: 'awaiting.q4', senseId: 'awaiting.s1', errorType: 'meaning', type: '词义', prompt: '正在躲开是：', options: ['avoiding', 'awaiting', 'augmenting'], answer: 'avoiding', explain: '易混' }
    ],
    usage: { domains: ['办公'], tone: '中性', commonConfusion: ['await'] },
  });

  D('awake', {
    etymology: {
      origin: '英语派生：a- 加 wake',
      root: { text: 'a- + wake', gloss: '醒着的' },
      history: [
        { label: '形容词或动词', text: '形容词或动词' },
        { label: 'be awake', text: 'be awake' },
      ],
      mnemonic: '作形容词时多作表语',
      note: '动词过去式 awoke',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The baby is awake.', chinese: '婴儿醒着。' }],
    contexts: [{
      domain: '日常',
      senseId: 'awake.s1',
      en: 'I awake at six most days.',
      zh: '我大多日子六点醒来。',
      structure: 'I awake at six most days.',
      grammar: '教学例句，用来固定 awake 的常见用法。',
      rationale: '表语',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Look at the awake baby in front of the noun.',
      right: 'The baby is awake.',
      reason: '表语',
      rule: '表语',
      special: '动词过去式 awoke',
    }],
    quiz: [
      { id: 'awake.q1', senseId: 'awake.s1', errorType: 'meaning', type: '词义', prompt: 'Is the patient _____?', options: ['awake', 'asleep', 'ashamed'], answer: 'awake', explain: '醒着' },
      { id: 'awake.q2', senseId: 'awake.s1', errorType: 'meaning', type: '词义', prompt: '反义睡着是：', options: ['asleep', 'awake', 'ashore'], answer: 'asleep', explain: '反义' },
      { id: 'awake.q3', senseId: 'awake.s1', errorType: 'meaning', type: '词义', prompt: '前置定语常用：', options: ['waking', 'awake', 'atomic'], answer: 'waking', explain: 'a waking child' },
      { id: 'awake.q4', senseId: 'awake.s1', errorType: 'meaning', type: '词义', prompt: '动词「使醒来」也可用：', options: ['awaken', 'audit', 'avoid'], answer: 'awaken', explain: '近义' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['asleep'] },
  });

  D('awaken', {
    etymology: {
      origin: '英语派生：awake 加 -en，醒来或唤起',
      root: { text: 'awake + -en', gloss: '唤醒；唤起' },
      history: [
        { label: '动词', text: '动词' },
        { label: '身体醒来', text: '身体醒来' },
      ],
      mnemonic: '比喻唤起情感',
      note: '及物或不及物',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The noise awakened the neighbours.', chinese: '噪音惊醒了邻居。' }],
    contexts: [{
      domain: '日常',
      senseId: 'awaken.s1',
      en: 'The film awakened her interest in history.',
      zh: '这部电影唤起了她对历史的兴趣。',
      structure: 'The film awakened her interest in history.',
      grammar: '教学例句，用来固定 awaken 的常见用法。',
      rationale: '唤起',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The film awakened her interest to sleep.',
      right: 'The film awakened her interest.',
      reason: '唤起',
      rule: '唤起',
      special: '及物或不及物',
    }],
    quiz: [
      { id: 'awaken.q1', senseId: 'awaken.s1', errorType: 'meaning', type: '词义', prompt: 'Please _____ me at seven.', options: ['awaken', 'avoid', 'await'], answer: 'awaken', explain: '叫醒' },
      { id: 'awaken.q2', senseId: 'awaken.s1', errorType: 'meaning', type: '词义', prompt: '比喻唤起兴趣也用：', options: ['awaken', 'audit', 'auction'], answer: 'awaken', explain: '引申' },
      { id: 'awaken.q3', senseId: 'awaken.s1', errorType: 'meaning', type: '词义', prompt: '醒着的形容词是：', options: ['awake', 'awful', 'awesome'], answer: 'awake', explain: '形容词' },
      { id: 'awaken.q4', senseId: 'awaken.s1', errorType: 'meaning', type: '词义', prompt: '等待是：', options: ['await', 'awaken', 'avenge'], answer: 'await', explain: '不同' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['awake'] },
  });

  D('award', {
    etymology: {
      origin: '经法语进入英语，指正式授予的奖，也可作动词',
      root: { text: 'award', gloss: '奖；授予' },
      history: [
        { label: '名词或动词', text: '名词或动词' },
        { label: 'award a prize to somebody', text: 'award a prize to somebody' },
      ],
      mnemonic: '比 give 正式',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She won an award for the film.', chinese: '她因这部电影获奖。' }],
    contexts: [{
      domain: '表彰',
      senseId: 'award.s1',
      en: 'The school awarded him a scholarship.',
      zh: '学校授予他奖学金。',
      structure: 'The school awarded him a scholarship.',
      grammar: '教学例句，用来固定 award 的常见用法。',
      rationale: '双宾语',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The school awarded to him a scholarship with to before him.',
      right: 'The school awarded him a scholarship.',
      reason: '双宾语',
      rule: '双宾语',
      special: '可数',
    }],
    quiz: [
      { id: 'award.q1', senseId: 'award.s1', errorType: 'meaning', type: '词义', prompt: 'She received an _____ .', options: ['award', 'awe', 'axe'], answer: 'award', explain: '奖' },
      { id: 'award.q2', senseId: 'award.s1', errorType: 'meaning', type: '词义', prompt: 'award a prize _____ her.', options: ['to', 'for', 'at'], answer: 'to', explain: 'to' },
      { id: 'award.q3', senseId: 'award.s1', errorType: 'meaning', type: '词义', prompt: '令人敬畏是：', options: ['awe', 'award', 'awful'], answer: 'awe', explain: '易混' },
      { id: 'award.q4', senseId: 'award.s1', errorType: 'meaning', type: '词义', prompt: '斧头是：', options: ['axe 或 ax', 'award', 'axis'], answer: 'axe 或 ax', explain: '拼写' }
    ],
    usage: { domains: ['表彰'], tone: '中性', commonConfusion: ['prize'] },
  });

  D('award-winning', {
    etymology: {
      origin: '英语派生：award 加 winning，得过奖的',
      root: { text: 'award + winning', gloss: '获奖的' },
      history: [
        { label: '复合形容词', text: '复合形容词' },
        { label: '放在名词前', text: '放在名词前' },
      ],
      mnemonic: '连字符',
      note: '褒义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She wrote an award-winning novel.', chinese: '她写了一部获奖小说。' }],
    contexts: [{
      domain: '出版',
      senseId: 'award-winning.s1',
      en: 'The award-winning design uses less plastic.',
      zh: '这个获奖设计用塑料更少。',
      structure: 'The award-winning design uses less plastic.',
      grammar: '教学例句，用来固定 award-winning 的常见用法。',
      rationale: '得奖',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The award-winning novel won nothing.',
      right: 'An award-winning novel has won a prize.',
      reason: '得奖',
      rule: '得奖',
      special: '褒义',
    }],
    quiz: [
      { id: 'award-winning.q1', senseId: 'award-winning.s1', errorType: 'meaning', type: '词义', prompt: 'An _____ film', options: ['award-winning', 'awful', 'awkward'], answer: 'award-winning', explain: '获奖的' },
      { id: 'award-winning.q2', senseId: 'award-winning.s1', errorType: 'meaning', type: '词义', prompt: '复合词来自 award 和：', options: ['winning', 'waking', 'waiting'], answer: 'winning', explain: '构成' },
      { id: 'award-winning.q3', senseId: 'award-winning.s1', errorType: 'meaning', type: '词义', prompt: '很糟是：', options: ['awful', 'award-winning', 'awesome'], answer: 'awful', explain: '反义方向' },
      { id: 'award-winning.q4', senseId: 'award-winning.s1', errorType: 'meaning', type: '词义', prompt: '奖本身是：', options: ['award', 'axe', 'axis'], answer: 'award', explain: '名词' }
    ],
    usage: { domains: ['出版'], tone: '中性', commonConfusion: ['award'] },
  });

  D('aware', {
    etymology: {
      origin: '古英语 gewær「警觉的」',
      root: { text: 'ware', gloss: '意识到的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: 'aware of', text: 'aware of' },
      ],
      mnemonic: '人作主语',
      note: '表语形容词为主',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She is aware of the risk.', chinese: '她意识到了风险。' }],
    contexts: [{
      domain: '日常',
      senseId: 'aware.s1',
      en: 'I was not aware that the shop had closed.',
      zh: '我不知道商店已经关门。',
      structure: 'I was not aware that the shop had closed.',
      grammar: '教学例句，用来固定 aware 的常见用法。',
      rationale: 'of',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She is aware the risk without of.',
      right: 'She is aware of the risk.',
      reason: 'of',
      rule: 'of',
      special: '表语形容词为主',
    }],
    quiz: [
      { id: 'aware.q1', senseId: 'aware.s1', errorType: 'meaning', type: '词义', prompt: 'Are you _____ of the change?', options: ['aware', 'awake', 'awful'], answer: 'aware', explain: '知道' },
      { id: 'aware.q2', senseId: 'aware.s1', errorType: 'meaning', type: '词义', prompt: 'aware _____ the rule.', options: ['of', 'for', 'at'], answer: 'of', explain: 'of' },
      { id: 'aware.q3', senseId: 'aware.s1', errorType: 'meaning', type: '词义', prompt: '醒着是：', options: ['awake', 'aware', 'away'], answer: 'awake', explain: '身体状态' },
      { id: 'aware.q4', senseId: 'aware.s1', errorType: 'meaning', type: '词义', prompt: '名词是：', options: ['awareness', 'award', 'awe'], answer: 'awareness', explain: '名词' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['awareness'] },
  });

  D('aware of', {
    etymology: {
      origin: '英语短语：aware of，知道某事存在',
      root: { text: 'aware of', gloss: '意识到' },
      history: [
        { label: '形容词短语', text: '形容词短语' },
        { label: '后面接名词或动名词', text: '后面接名词或动名词' },
      ],
      mnemonic: 'that 从句则可省 of：aware that',
      note: '固定',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He is aware of the problem.', chinese: '他知道这个问题。' }],
    contexts: [{
      domain: '日常',
      senseId: 'aware of.s1',
      en: 'Are you aware of standing on the line?',
      zh: '你意识到自己站在线上了吗？',
      structure: 'Are you aware of standing on the line?',
      grammar: '教学例句，用来固定 aware of 的常见用法。',
      rationale: 'that 从句前不加 of',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He is aware of that the shop closed.',
      right: 'He is aware that the shop closed.',
      reason: 'that 从句前不加 of',
      rule: 'that 从句前不加 of',
      special: '固定',
    }],
    quiz: [
      { id: 'aware of.q1', senseId: 'aware of.s1', errorType: 'meaning', type: '词义', prompt: 'She is aware _____ the noise.', options: ['of', 'to', 'for'], answer: 'of', explain: 'of' },
      { id: 'aware of.q2', senseId: 'aware of.s1', errorType: 'meaning', type: '词义', prompt: 'aware that 前面：', options: ['不加 of', '必须加 of', '必须加 for'], answer: '不加 of', explain: '从句' },
      { id: 'aware of.q3', senseId: 'aware of.s1', errorType: 'meaning', type: '词义', prompt: '完全不知是：', options: ['unaware', 'aware of', 'away'], answer: 'unaware', explain: '反义' },
      { id: 'aware of.q4', senseId: 'aware of.s1', errorType: 'meaning', type: '词义', prompt: '身体醒着是：', options: ['awake', 'aware of', 'awful'], answer: 'awake', explain: '不同' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['aware'] },
  });

  D('awareness', {
    etymology: {
      origin: '英语派生：aware 加 -ness',
      root: { text: 'aware + -ness', gloss: '意识；认识' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数', text: '不可数' },
      ],
      mnemonic: 'public awareness',
      note: '抽象',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Public awareness of the issue is growing.', chinese: '公众对这个问题的意识在增强。' }],
    contexts: [{
      domain: '社会',
      senseId: 'awareness.s1',
      en: 'The campaign raises awareness.',
      zh: '这场活动在提高认识。',
      structure: 'The campaign raises awareness.',
      grammar: '教学例句，用来固定 awareness 的常见用法。',
      rationale: '名词不能当动词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She awareness the risk.',
      right: 'She is aware of the risk.',
      reason: '名词不能当动词',
      rule: '名词不能当动词',
      special: '抽象',
    }],
    quiz: [
      { id: 'awareness.q1', senseId: 'awareness.s1', errorType: 'meaning', type: '词义', prompt: 'The campaign raises _____.', options: ['awareness', 'award', 'awe'], answer: 'awareness', explain: '意识' },
      { id: 'awareness.q2', senseId: 'awareness.s1', errorType: 'meaning', type: '词义', prompt: '-ness 构成：', options: ['名词', '副词', '介词'], answer: '名词', explain: '后缀' },
      { id: 'awareness.q3', senseId: 'awareness.s1', errorType: 'meaning', type: '词义', prompt: '形容词是：', options: ['aware', 'awake', 'awful'], answer: 'aware', explain: '形容词' },
      { id: 'awareness.q4', senseId: 'awareness.s1', errorType: 'meaning', type: '词义', prompt: '奖是：', options: ['award', 'awareness', 'axe'], answer: 'award', explain: '不同' }
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['aware'] },
  });

  D('away', {
    etymology: {
      origin: '英语派生：a- 加 way，离开或在远处',
      root: { text: 'a- + way', gloss: '离开；在远处' },
      history: [
        { label: '副词', text: '副词' },
        { label: 'go away', text: 'go away' },
      ],
      mnemonic: '远隔',
      note: '副词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She walked away without a word.', chinese: '她一句话没说就走了。' }],
    contexts: [{
      domain: '日常',
      senseId: 'away.s1',
      en: 'The sea is two kilometres away.',
      zh: '海在两公里外。',
      structure: 'The sea is two kilometres away.',
      grammar: '教学例句，用来固定 away 的常见用法。',
      rationale: 'away 不是动词',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'She away the box.',
      right: 'She put the box away.',
      reason: 'away 不是动词',
      rule: 'away 不是动词',
      special: '副词',
    }],
    quiz: [
      { id: 'away.q1', senseId: 'away.s1', errorType: 'meaning', type: '词义', prompt: 'Please go _____.', options: ['away', 'awake', 'aware'], answer: 'away', explain: '离开' },
      { id: 'away.q2', senseId: 'away.s1', errorType: 'meaning', type: '词义', prompt: 'three kilometres _____ .', options: ['away', 'awe', 'axe'], answer: 'away', explain: '远处' },
      { id: 'away.q3', senseId: 'away.s1', errorType: 'meaning', type: '词义', prompt: '醒着是：', options: ['awake', 'away', 'awful'], answer: 'awake', explain: '形近' },
      { id: 'away.q4', senseId: 'away.s1', errorType: 'meaning', type: '词义', prompt: 'way 的意思是：', options: ['路、方向', '奖', '斧'], answer: '路、方向', explain: '组成' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['way'] },
  });

  D('away from', {
    etymology: {
      origin: '英语短语：away from，离开某处或某人',
      root: { text: 'away from', gloss: '远离' },
      history: [
        { label: '介词短语', text: '介词短语' },
        { label: '后面接名词', text: '后面接名词' },
      ],
      mnemonic: '表示距离或避开',
      note: '与 from 绑定',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Keep the knife away from the child.', chinese: '把刀放在孩子够不着的地方。' }],
    contexts: [{
      domain: '安全',
      senseId: 'away from.s1',
      en: 'She lives away from the main road.',
      zh: '她住得离大路较远。',
      structure: 'She lives away from the main road.',
      grammar: '教学例句，用来固定 away from 的常见用法。',
      rationale: '要有 from',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Keep it away the child.',
      right: 'Keep it away from the child.',
      reason: '要有 from',
      rule: '要有 from',
      special: '与 from 绑定',
    }],
    quiz: [
      { id: 'away from.q1', senseId: 'away from.s1', errorType: 'meaning', type: '词义', prompt: 'Stay _____ the fire.', options: ['away from', 'aware of', 'asleep'], answer: 'away from', explain: '远离' },
      { id: 'away from.q2', senseId: 'away from.s1', errorType: 'meaning', type: '词义', prompt: 'away from 后面接：', options: ['名词', '一个副词必须', '月份'], answer: '名词', explain: '介词短语' },
      { id: 'away from.q3', senseId: 'away from.s1', errorType: 'meaning', type: '词义', prompt: '知道某事是：', options: ['aware of', 'away from', 'awe'], answer: 'aware of', explain: '不同' },
      { id: 'away from.q4', senseId: 'away from.s1', errorType: 'meaning', type: '词义', prompt: '单纯「离开」副词是：', options: ['away', 'axe', 'axis'], answer: 'away', explain: '副词' }
    ],
    usage: { domains: ['安全'], tone: '中性', commonConfusion: ['away'] },
  });

  D('awe', {
    etymology: {
      origin: '古英语指恐惧与敬重交织的感觉',
      root: { text: 'awe', gloss: '敬畏' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数', text: '不可数' },
      ],
      mnemonic: 'in awe of',
      note: '比 fear 多一层崇敬',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The mountains filled me with awe.', chinese: '群山让我心生敬畏。' }],
    contexts: [{
      domain: '情感',
      senseId: 'awe.s1',
      en: 'Children stood in awe of the huge bell.',
      zh: '孩子们敬畏地看着那口大钟。',
      structure: 'Children stood in awe of the huge bell.',
      grammar: '教学例句，用来固定 awe 的常见用法。',
      rationale: '敬畏不是奖',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The mountains filled me with award.',
      right: 'The mountains filled me with awe.',
      reason: '敬畏不是奖',
      rule: '敬畏不是奖',
      special: '比 fear 多一层崇敬',
    }],
    quiz: [
      { id: 'awe.q1', senseId: 'awe.s1', errorType: 'meaning', type: '词义', prompt: 'A feeling of respect mixed with wonder is _____.', options: ['awe', 'award', 'axe'], answer: 'awe', explain: '敬畏' },
      { id: 'awe.q2', senseId: 'awe.s1', errorType: 'meaning', type: '词义', prompt: 'in _____ of', options: ['awe', 'autumn', 'audit'], answer: 'awe', explain: '短语' },
      { id: 'awe.q3', senseId: 'awe.s1', errorType: 'meaning', type: '词义', prompt: '奖是：', options: ['award', 'awe', 'aunt'], answer: 'award', explain: '形近' },
      { id: 'awe.q4', senseId: 'awe.s1', errorType: 'meaning', type: '词义', prompt: '令人产生这种感觉的是：', options: ['awe-inspiring', 'awful always', 'awkward'], answer: 'awe-inspiring', explain: '形容词' }
    ],
    usage: { domains: ['情感'], tone: '中性', commonConfusion: ['awesome'] },
  });

  D('awe-inspiring', {
    etymology: {
      origin: '英语派生：awe 加 inspiring，激起敬畏的',
      root: { text: 'awe + inspiring', gloss: '令人敬畏的' },
      history: [
        { label: '复合形容词', text: '复合形容词' },
        { label: '程度强', text: '程度强' },
      ],
      mnemonic: '褒义或庄重',
      note: '连字符',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The canyon is awe-inspiring.', chinese: '峡谷令人敬畏。' }],
    contexts: [{
      domain: '描写',
      senseId: 'awe-inspiring.s1',
      en: 'An awe-inspiring silence followed the speech.',
      zh: '讲话之后是一阵令人屏息的寂静。',
      structure: 'An awe-inspiring silence followed the speech.',
      grammar: '教学例句，用来固定 awe-inspiring 的常见用法。',
      rationale: '激起敬畏',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The canyon is awe-inspiring so nobody notices it.',
      right: 'An awe-inspiring place fills people with awe.',
      reason: '激起敬畏',
      rule: '激起敬畏',
      special: '连字符',
    }],
    quiz: [
      { id: 'awe-inspiring.q1', senseId: 'awe-inspiring.s1', errorType: 'meaning', type: '词义', prompt: 'A very impressive sight is _____.', options: ['awe-inspiring', 'awful', 'awkward'], answer: 'awe-inspiring', explain: '令人敬畏' },
      { id: 'awe-inspiring.q2', senseId: 'awe-inspiring.s1', errorType: 'meaning', type: '词义', prompt: '复合词含 awe 和：', options: ['inspiring', 'sleeping', 'waiting'], answer: 'inspiring', explain: '构成' },
      { id: 'awe-inspiring.q3', senseId: 'awe-inspiring.s1', errorType: 'meaning', type: '词义', prompt: '很糟是：', options: ['awful', 'awe-inspiring', 'average'], answer: 'awful', explain: '程度不同' },
      { id: 'awe-inspiring.q4', senseId: 'awe-inspiring.s1', errorType: 'meaning', type: '词义', prompt: '口语「极好」还可以说：', options: ['awesome', 'axe', 'axis'], answer: 'awesome', explain: '口语' }
    ],
    usage: { domains: ['描写'], tone: '中性', commonConfusion: ['awe'] },
  });

  D('awesome', {
    etymology: {
      origin: '英语派生：awe 加 -some',
      root: { text: 'awe + -some', gloss: '极好的；令人敬畏的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '口语多指极好', text: '口语多指极好' },
      ],
      mnemonic: '原义仍可指令人敬畏',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The view is awesome.', chinese: '景色好极了。' }],
    contexts: [{
      domain: '口语',
      senseId: 'awesome.s1',
      en: 'An awesome task lay before the small team.',
      zh: '一项令人敬畏的任务摆在这支小团队面前。',
      structure: 'An awesome task lay before the small team.',
      grammar: '教学例句，用来固定 awesome 的常见用法。',
      rationale: '口语褒义',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The view is awesome so it is boring.',
      right: 'In speech, awesome often means very good.',
      reason: '口语褒义',
      rule: '口语褒义',
      special: '两义',
    }],
    quiz: [
      { id: 'awesome.q1', senseId: 'awesome.s1', errorType: 'meaning', type: '词义', prompt: 'This song is _____!', options: ['awesome', 'awful', 'awkward'], answer: 'awesome', explain: '极好' },
      { id: 'awesome.q2', senseId: 'awesome.s1', errorType: 'meaning', type: '词义', prompt: '-some 构成：', options: ['形容词', '名词', '介词'], answer: '形容词', explain: '后缀' },
      { id: 'awesome.q3', senseId: 'awesome.s1', errorType: 'meaning', type: '词义', prompt: '很坏是：', options: ['awful', 'awesome', 'average'], answer: 'awful', explain: '易混' },
      { id: 'awesome.q4', senseId: 'awesome.s1', errorType: 'meaning', type: '词义', prompt: '敬畏名词是：', options: ['awe', 'award', 'axe'], answer: 'awe', explain: '名词' }
    ],
    usage: { domains: ['口语'], tone: '中性', commonConfusion: ['awful'] },
  });

  D('awful', {
    etymology: {
      origin: '与 awe 同族，现代几乎总是「极坏、可怕」',
      root: { text: 'awe', gloss: '极坏的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '口语很常见', text: '口语很常见' },
      ],
      mnemonic: '副词 awfully 也可加强程度',
      note: '贬义为主',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The weather is awful today.', chinese: '今天天气糟透了。' }],
    contexts: [{
      domain: '日常',
      senseId: 'awful.s1',
      en: 'I made an awful mistake.',
      zh: '我犯了个严重错误。',
      structure: 'I made an awful mistake.',
      grammar: '教学例句，用来固定 awful 的常见用法。',
      rationale: '很坏',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The weather is awful so it is perfect.',
      right: 'Awful weather is very bad.',
      reason: '很坏',
      rule: '很坏',
      special: '贬义为主',
    }],
    quiz: [
      { id: 'awful.q1', senseId: 'awful.s1', errorType: 'meaning', type: '词义', prompt: 'The film was _____.', options: ['awful', 'awesome', 'average'], answer: 'awful', explain: '糟透' },
      { id: 'awful.q2', senseId: 'awful.s1', errorType: 'meaning', type: '词义', prompt: '原与 _____ 同族。', options: ['awe', 'award', 'axis'], answer: 'awe', explain: '敬畏' },
      { id: 'awful.q3', senseId: 'awful.s1', errorType: 'meaning', type: '词义', prompt: '口语说极好用：', options: ['awesome', 'awful', 'awkward'], answer: 'awesome', explain: '易混' },
      { id: 'awful.q4', senseId: 'awful.s1', errorType: 'meaning', type: '词义', prompt: '尴尬是：', options: ['awkward', 'awful', 'aware'], answer: 'awkward', explain: '另一形容词' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['bad'] },
  });

  D('awkward', {
    etymology: {
      origin: '来自「方向别扭」一系，尴尬、难对付或笨拙',
      root: { text: 'awkward', gloss: '尴尬的；笨拙的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '场面或动作', text: '场面或动作' },
      ],
      mnemonic: 'an awkward silence',
      note: '三义相关',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'There was an awkward silence.', chinese: '出现了一阵尴尬的沉默。' }],
    contexts: [{
      domain: '日常',
      senseId: 'awkward.s1',
      en: 'The lock is awkward to open.',
      zh: '这把锁很难打开。',
      structure: 'The lock is awkward to open.',
      grammar: '教学例句，用来固定 awkward 的常见用法。',
      rationale: '不自在',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The silence was awkward so everyone felt easy.',
      right: 'An awkward silence is uncomfortable.',
      reason: '不自在',
      rule: '不自在',
      special: '三义相关',
    }],
    quiz: [
      { id: 'awkward.q1', senseId: 'awkward.s1', errorType: 'meaning', type: '词义', prompt: 'An uncomfortable silence is _____.', options: ['awkward', 'awesome', 'average'], answer: 'awkward', explain: '尴尬' },
      { id: 'awkward.q2', senseId: 'awkward.s1', errorType: 'meaning', type: '词义', prompt: '笨手笨脚也是 _____.', options: ['awkward', 'atomic', 'authentic'], answer: 'awkward', explain: '笨拙' },
      { id: 'awkward.q3', senseId: 'awkward.s1', errorType: 'meaning', type: '词义', prompt: '极好口语是：', options: ['awesome', 'awkward', 'awful'], answer: 'awesome', explain: '易混' },
      { id: 'awkward.q4', senseId: 'awkward.s1', errorType: 'meaning', type: '词义', prompt: '副词：', options: ['awkwardly', 'awkward', 'away'], answer: 'awkwardly', explain: '-ly' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['clumsy'] },
  });

  D('ax', {
    etymology: {
      origin: '斧头；美式拼写 ax，英式常作 axe',
      root: { text: 'ax', gloss: '斧子' },
      history: [
        { label: '名词', text: '名词' },
        { label: '砍木工具', text: '砍木工具' },
      ],
      mnemonic: '可数',
      note: '同一工具两种拼写',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He split the log with an ax.', chinese: '他用斧子劈开了木头。' }],
    contexts: [{
      domain: '工具',
      senseId: 'ax.s1',
      en: 'An ax hung by the shed door.',
      zh: '棚门边挂着一把斧子。',
      structure: 'An ax hung by the shed door.',
      grammar: '教学例句，用来固定 ax 的常见用法。',
      rationale: '砍伐工具',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'He wrote with an ax.',
      right: 'He chopped wood with an ax.',
      reason: '砍伐工具',
      rule: '砍伐工具',
      special: '同一工具两种拼写',
    }],
    quiz: [
      { id: 'ax.q1', senseId: 'ax.s1', errorType: 'meaning', type: '词义', prompt: 'A tool for chopping wood is an _____.', options: ['ax', 'axis', 'awe'], answer: 'ax', explain: '斧子' },
      { id: 'ax.q2', senseId: 'ax.s1', errorType: 'meaning', type: '词义', prompt: '英式拼写常为：', options: ['axe', 'axis', 'ace'], answer: 'axe', explain: '拼写' },
      { id: 'ax.q3', senseId: 'ax.s1', errorType: 'meaning', type: '词义', prompt: '轴线是：', options: ['axis', 'ax', 'award'], answer: 'axis', explain: '易混' },
      { id: 'ax.q4', senseId: 'ax.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['axes 也可作 axis 的复数所以语境要分清', 'awards', 'aunts'], answer: 'axes 也可作 axis 的复数所以语境要分清', explain: 'axes' }
    ],
    usage: { domains: ['工具'], tone: '中性', commonConfusion: ['axe'] },
  });

  D('axis', {
    etymology: {
      origin: '拉丁语 axis「轴」',
      root: { text: 'axis', gloss: '轴；轴线' },
      history: [
        { label: '名词', text: '名词' },
        { label: '旋转所围绕的线', text: '旋转所围绕的线' },
      ],
      mnemonic: '数学、地理、政治都用',
      note: '复数 axes',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The Earth turns on its axis.', chinese: '地球绕地轴旋转。' }],
    contexts: [{
      domain: '科学',
      senseId: 'axis.s1',
      en: 'The x-axis is the horizontal line.',
      zh: 'x 轴是那条水平线。',
      structure: 'The x-axis is the horizontal line.',
      grammar: '教学例句，用来固定 axis 的常见用法。',
      rationale: '轴不是斧头',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The Earth turns on its ax.',
      right: 'The Earth turns on its axis.',
      reason: '轴不是斧头',
      rule: '轴不是斧头',
      special: '复数 axes',
    }],
    quiz: [
      { id: 'axis.q1', senseId: 'axis.s1', errorType: 'meaning', type: '词义', prompt: 'The line the Earth spins around is its _____.', options: ['axis', 'ax', 'awe'], answer: 'axis', explain: '地轴' },
      { id: 'axis.q2', senseId: 'axis.s1', errorType: 'meaning', type: '词义', prompt: '复数：', options: ['axes', 'axises', 'awards'], answer: 'axes', explain: 'axes' },
      { id: 'axis.q3', senseId: 'axis.s1', errorType: 'meaning', type: '词义', prompt: '砍木头的工具是：', options: ['ax 或 axe', 'axis', 'award'], answer: 'ax 或 axe', explain: '工具' },
      { id: 'axis.q4', senseId: 'axis.s1', errorType: 'meaning', type: '词义', prompt: '政治里 the Axis 可能是：', options: ['专名同盟', '永远是斧头', '永远是奖'], answer: '专名同盟', explain: '历史专名另记' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['ax'] },
  });

  D('aye', {
    etymology: {
      origin: '旧词与表决用语，表示赞成或「是」',
      root: { text: 'aye', gloss: '赞成票；是' },
      history: [
        { label: '名词或感叹', text: '名词或感叹' },
        { label: 'the ayes have it', text: 'the ayes have it' },
      ],
      mnemonic: '会议用语',
      note: '也作旧式 yes',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The ayes have it.', chinese: '赞成方获得通过。' }],
    contexts: [{
      domain: '会议',
      senseId: 'aye.s1',
      en: 'He answered with a quiet aye.',
      zh: '他轻声答了一声「是」。',
      structure: 'He answered with a quiet aye.',
      grammar: '教学例句，用来固定 aye 的常见用法。',
      rationale: '赞成',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Aye means no.',
      right: 'Aye means yes.',
      reason: '赞成',
      rule: '赞成',
      special: '也作旧式 yes',
    }],
    quiz: [
      { id: 'aye.q1', senseId: 'aye.s1', errorType: 'meaning', type: '词义', prompt: 'A vote of yes can be an _____.', options: ['aye', 'ax', 'awe'], answer: 'aye', explain: '赞成票' },
      { id: 'aye.q2', senseId: 'aye.s1', errorType: 'meaning', type: '词义', prompt: 'the ayes have it 意思是：', options: ['赞成方通过', '斧头赢了', '奖被取消'], answer: '赞成方通过', explain: '会议' },
      { id: 'aye.q3', senseId: 'aye.s1', errorType: 'meaning', type: '词义', prompt: '反对票常叫：', options: ['no 或 nay', 'aye', 'axis'], answer: 'no 或 nay', explain: '反义' },
      { id: 'aye.q4', senseId: 'aye.s1', errorType: 'meaning', type: '词义', prompt: 'aye 不是：', options: ['斧头', '轴', '敬畏'], answer: '斧头', explain: '形近' }
    ],
    usage: { domains: ['会议'], tone: '中性', commonConfusion: ['yes'] },
  });

  D('baby', {
    etymology: {
      origin: '婴儿；也可作亲昵称呼',
      root: { text: 'baby', gloss: '婴儿' },
      history: [
        { label: '名词', text: '名词' },
        { label: '非常年幼的孩子', text: '非常年幼的孩子' },
      ],
      mnemonic: '可数',
      note: '动词可表示溺爱，本词条主义是名词',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The baby slept through the noise.', chinese: '婴儿在噪音中依然睡着。' }],
    contexts: [{
      domain: '家庭',
      senseId: 'baby.s1',
      en: 'She had a baby in March.',
      zh: '她三月生了孩子。',
      structure: 'She had a baby in March.',
      grammar: '教学例句，用来固定 baby 的常见用法。',
      rationale: '婴儿',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The baby is a university degree.',
      right: 'A baby is a very young child.',
      reason: '婴儿',
      rule: '婴儿',
      special: '动词可表示溺爱，本词条主义是名词',
    }],
    quiz: [
      { id: 'baby.q1', senseId: 'baby.s1', errorType: 'meaning', type: '词义', prompt: 'A very young child is a _____.', options: ['baby', 'bachelor', 'badge'], answer: 'baby', explain: '婴儿' },
      { id: 'baby.q2', senseId: 'baby.s1', errorType: 'meaning', type: '词义', prompt: '亲昵称呼也可以叫：', options: ['baby', 'bacon', 'bacteria'], answer: 'baby', explain: '口语' },
      { id: 'baby.q3', senseId: 'baby.s1', errorType: 'meaning', type: '词义', prompt: '单身汉是：', options: ['bachelor', 'baby', 'back'], answer: 'bachelor', explain: '不同' },
      { id: 'baby.q4', senseId: 'baby.s1', errorType: 'meaning', type: '词义', prompt: '照看婴儿的人是：', options: ['babysitter', 'bachelor', 'backer'], answer: 'babysitter', explain: '职业' }
    ],
    usage: { domains: ['家庭'], tone: '中性', commonConfusion: ['infant'] },
  });

  D('babyboom', {
    etymology: {
      origin: '英语派生：baby 加 boom「激增」',
      root: { text: 'baby + boom', gloss: '生育高峰' },
      history: [
        { label: '名词', text: '名词' },
        { label: '一段时期婴儿出生大增', text: '一段时期婴儿出生大增' },
      ],
      mnemonic: '常写作 baby boom 两词，词表作 babyboom',
      note: '历史、社会',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The babyboom changed school sizes.', chinese: '生育高峰改变了学校规模。' }],
    contexts: [{
      domain: '社会',
      senseId: 'babyboom.s1',
      en: 'Her parents were born during the babyboom.',
      zh: '她的父母出生在生育高峰期。',
      structure: 'Her parents were born during the babyboom.',
      grammar: '教学例句，用来固定 babyboom 的常见用法。',
      rationale: '时期',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The babyboom was a single infant.',
      right: 'A babyboom is a period of many births.',
      reason: '时期',
      rule: '时期',
      special: '历史、社会',
    }],
    quiz: [
      { id: 'babyboom.q1', senseId: 'babyboom.s1', errorType: 'meaning', type: '词义', prompt: 'A period of many births is a _____.', options: ['babyboom', 'babysitter', 'bachelor'], answer: 'babyboom', explain: '生育高峰' },
      { id: 'babyboom.q2', senseId: 'babyboom.s1', errorType: 'meaning', type: '词义', prompt: 'boom 在这里是：', options: ['激增', '婴儿本身', '徽章'], answer: '激增', explain: '组成' },
      { id: 'babyboom.q3', senseId: 'babyboom.s1', errorType: 'meaning', type: '词义', prompt: '照看孩子的人是：', options: ['babysitter', 'babyboom', 'backer'], answer: 'babysitter', explain: '人' },
      { id: 'babyboom.q4', senseId: 'babyboom.s1', errorType: 'meaning', type: '词义', prompt: '常分开写成：', options: ['baby boom', 'bacteria', 'bacon'], answer: 'baby boom', explain: '拼写' }
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['baby'] },
  });

  D('babysitter', {
    etymology: {
      origin: '英语派生：baby 加 sitter「坐着照看的人」',
      root: { text: 'baby + sitter', gloss: '临时保姆' },
      history: [
        { label: '名词', text: '名词' },
        { label: '父母外出时照看孩子', text: '父母外出时照看孩子' },
      ],
      mnemonic: '可数',
      note: '动词 babysit',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'We need a babysitter on Saturday.', chinese: '我们周六需要一位临时保姆。' }],
    contexts: [{
      domain: '家庭',
      senseId: 'babysitter.s1',
      en: 'The babysitter read two stories.',
      zh: '临时保姆读了两个故事。',
      structure: 'The babysitter read two stories.',
      grammar: '教学例句，用来固定 babysitter 的常见用法。',
      rationale: '人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The babysitter was a birth period.',
      right: 'A babysitter looks after children.',
      reason: '人',
      rule: '人',
      special: '动词 babysit',
    }],
    quiz: [
      { id: 'babysitter.q1', senseId: 'babysitter.s1', errorType: 'meaning', type: '词义', prompt: 'A person paid to watch children is a _____.', options: ['babysitter', 'babyboom', 'bachelor'], answer: 'babysitter', explain: '保姆' },
      { id: 'babysitter.q2', senseId: 'babysitter.s1', errorType: 'meaning', type: '词义', prompt: '动词是：', options: ['babysit', 'back up', 'avoid'], answer: 'babysit', explain: '动词' },
      { id: 'babysitter.q3', senseId: 'babysitter.s1', errorType: 'meaning', type: '词义', prompt: '生育高峰是：', options: ['babyboom', 'babysitter', 'bacon'], answer: 'babyboom', explain: '时期' },
      { id: 'babysitter.q4', senseId: 'babysitter.s1', errorType: 'meaning', type: '词义', prompt: '学士是：', options: ['bachelor', 'babysitter', 'badge'], answer: 'bachelor', explain: '不同' }
    ],
    usage: { domains: ['家庭'], tone: '中性', commonConfusion: ['baby'] },
  });

  D('bachelor', {
    etymology: {
      origin: '一词两义：未婚男子，或学士学位',
      root: { text: 'bachelor', gloss: '单身汉；学士' },
      history: [
        { label: '名词', text: '名词' },
        { label: '两义靠语境', text: '两义靠语境' },
      ],
      mnemonic: 'bachelor\'s degree',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He remained a bachelor.', chinese: '他一直是单身。' }],
    contexts: [{
      domain: '教育',
      senseId: 'bachelor.s1',
      en: 'She has a bachelor\'s degree in law.',
      zh: '她有法学学士学位。',
      structure: 'She has a bachelor\'s degree in law.',
      grammar: '教学例句，用来固定 bachelor 的常见用法。',
      rationale: '学位',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'A bachelor\'s degree is a married woman.',
      right: 'A bachelor\'s degree is a university qualification.',
      reason: '学位',
      rule: '学位',
      special: '可数',
    }],
    quiz: [
      { id: 'bachelor.q1', senseId: 'bachelor.s1', errorType: 'meaning', type: '词义', prompt: 'An unmarried man can be called a _____.', options: ['bachelor', 'baby', 'badge'], answer: 'bachelor', explain: '单身汉' },
      { id: 'bachelor.q2', senseId: 'bachelor.s1', errorType: 'meaning', type: '词义', prompt: 'a _____ degree.', options: ['bachelor\'s', 'baby\'s', 'bacon\'s'], answer: 'bachelor\'s', explain: '学士' },
      { id: 'bachelor.q3', senseId: 'bachelor.s1', errorType: 'meaning', type: '词义', prompt: '照看孩子的是：', options: ['babysitter', 'bachelor', 'backer'], answer: 'babysitter', explain: '人' },
      { id: 'bachelor.q4', senseId: 'bachelor.s1', errorType: 'meaning', type: '词义', prompt: '徽章是：', options: ['badge', 'bachelor', 'bacon'], answer: 'badge', explain: '不同' }
    ],
    usage: { domains: ['教育'], tone: '中性', commonConfusion: ['degree'] },
  });

  D('back', {
    etymology: {
      origin: '身体的背，物体的后面，也可作动词表示支持或返回',
      root: { text: 'back', gloss: '背；后面；支持' },
      history: [
        { label: '名词或动词', text: '名词或动词' },
        { label: '多义', text: '多义' },
      ],
      mnemonic: 'back of the house',
      note: '动词 back somebody 是支持',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'My back hurts after the move.', chinese: '搬家之后我的背疼。' }],
    contexts: [{
      domain: '身体',
      senseId: 'back.s1',
      en: 'She stepped to the back of the hall.',
      zh: '她走到大厅后面。',
      structure: 'She stepped to the back of the hall.',
      grammar: '教学例句，用来固定 back 的常见用法。',
      rationale: '后面',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The back of the chair is the front.',
      right: 'The back is the rear part.',
      reason: '后面',
      rule: '后面',
      special: '动词 back somebody 是支持',
    }],
    quiz: [
      { id: 'back.q1', senseId: 'back.s1', errorType: 'meaning', type: '词义', prompt: 'The rear of a room is the _____.', options: ['back', 'badge', 'bacon'], answer: 'back', explain: '后面' },
      { id: 'back.q2', senseId: 'back.s1', errorType: 'meaning', type: '词义', prompt: '支持某人也可以说 _____ somebody.', options: ['back', 'bake only', 'avoid'], answer: 'back', explain: '动词' },
      { id: 'back.q3', senseId: 'back.s1', errorType: 'meaning', type: '词义', prompt: '脊骨是：', options: ['backbone', 'backlog', 'backup'], answer: 'backbone', explain: '身体' },
      { id: 'back.q4', senseId: 'back.s1', errorType: 'meaning', type: '词义', prompt: '副词向后是：', options: ['backward', 'bacteria', 'bad'], answer: 'backward', explain: '方向' }
    ],
    usage: { domains: ['身体'], tone: '中性', commonConfusion: ['rear'] },
  });

  D('back up', {
    etymology: {
      origin: '英语短语：back up，支持、倒车或备份',
      root: { text: 'back up', gloss: '支持；后退；备份' },
      history: [
        { label: '短语动词', text: '短语动词' },
        { label: '三义', text: '三义' },
      ],
      mnemonic: '电脑义很常见，名词 backup 常连写。',
      note: '三义靠语境区分。',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Please back up your files.', chinese: '请备份你的文件。' }],
    contexts: [{
      domain: '技术',
      senseId: 'back up.s1',
      en: 'I will back up your proposal in the meeting.',
      zh: '我会在会上支持你。',
      structure: 'I will back up your proposal in the meeting.',
      grammar: '教学例句，用来固定 back up 的常见用法。',
      rationale: '备份',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Back up the files means delete them.',
      right: 'Back up the files means copy them.',
      reason: '备份',
      rule: '备份',
      special: '三义靠语境区分。',
    }],
    quiz: [
      { id: 'back up.q1', senseId: 'back up.s1', errorType: 'meaning', type: '词义', prompt: '_____ the car slowly.', options: ['Back up', 'Backlog', 'Badge'], answer: 'Back up', explain: '倒车' },
      { id: 'back up.q2', senseId: 'back up.s1', errorType: 'meaning', type: '词义', prompt: '支持朋友：back somebody _____.', options: ['up', 'down', 'ash'], answer: 'up', explain: '支持' },
      { id: 'back up.q3', senseId: 'back up.s1', errorType: 'meaning', type: '词义', prompt: '名词副本常写作：', options: ['backup', 'back up only as noun always', 'bacon'], answer: 'backup', explain: '连写' },
      { id: 'back up.q4', senseId: 'back up.s1', errorType: 'meaning', type: '词义', prompt: '积压工作是：', options: ['backlog', 'back up', 'bacteria'], answer: 'backlog', explain: '不同' }
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['backup'] },
  });

  D('backbone', {
    etymology: {
      origin: '英语派生：back 加 bone',
      root: { text: 'back + bone', gloss: '脊柱；支柱' },
      history: [
        { label: '名词', text: '名词' },
        { label: '身体', text: '身体' },
      ],
      mnemonic: '比喻 the backbone of',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The backbone protects the spinal cord.', chinese: '脊柱保护脊髓。' }],
    contexts: [{
      domain: '生物',
      senseId: 'backbone.s1',
      en: 'Small shops are the backbone of the street.',
      zh: '小店是这条街的支柱。',
      structure: 'Small shops are the backbone of the street.',
      grammar: '教学例句，用来固定 backbone 的常见用法。',
      rationale: '支柱',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The backbone is the front door only.',
      right: 'The backbone can mean the main support.',
      reason: '支柱',
      rule: '支柱',
      special: '两义',
    }],
    quiz: [
      { id: 'backbone.q1', senseId: 'backbone.s1', errorType: 'meaning', type: '词义', prompt: 'The bones down the back form the _____.', options: ['backbone', 'backlog', 'backup'], answer: 'backbone', explain: '脊柱' },
      { id: 'backbone.q2', senseId: 'backbone.s1', errorType: 'meaning', type: '词义', prompt: '比喻最重要的部分也叫：', options: ['backbone', 'bacon', 'badge'], answer: 'backbone', explain: '支柱' },
      { id: 'backbone.q3', senseId: 'backbone.s1', errorType: 'meaning', type: '词义', prompt: '积压是：', options: ['backlog', 'backbone', 'bacteria'], answer: 'backlog', explain: '不同' },
      { id: 'backbone.q4', senseId: 'backbone.s1', errorType: 'meaning', type: '词义', prompt: '备份是：', options: ['backup', 'backbone', 'backer'], answer: 'backup', explain: '电脑' }
    ],
    usage: { domains: ['生物'], tone: '中性', commonConfusion: ['spine'] },
  });

  D('backer', {
    etymology: {
      origin: '英语派生：back 加 -er，出钱或出力支持的人',
      root: { text: 'back + -er', gloss: '支持者；赞助人' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: 'back 的动词义',
      note: '财政或道义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The project\'s backer stayed anonymous.', chinese: '项目的资助者没有公开姓名。' }],
    contexts: [{
      domain: '商业',
      senseId: 'backer.s1',
      en: 'She is a loyal backer of the team.',
      zh: '她是这支队伍的忠实支持者。',
      structure: 'She is a loyal backer of the team.',
      grammar: '教学例句，用来固定 backer 的常见用法。',
      rationale: '人',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The backer was a computer copy.',
      right: 'A backer supports with money or help.',
      reason: '人',
      rule: '人',
      special: '财政或道义',
    }],
    quiz: [
      { id: 'backer.q1', senseId: 'backer.s1', errorType: 'meaning', type: '词义', prompt: 'A person who funds a project is a _____.', options: ['backer', 'backup', 'backlog'], answer: 'backer', explain: '赞助人' },
      { id: 'backer.q2', senseId: 'backer.s1', errorType: 'meaning', type: '词义', prompt: '-er 表示：', options: ['人', '副本', '积压'], answer: '人', explain: '后缀' },
      { id: 'backer.q3', senseId: 'backer.s1', errorType: 'meaning', type: '词义', prompt: '备份是：', options: ['backup', 'backer', 'bacon'], answer: 'backup', explain: '物' },
      { id: 'backer.q4', senseId: 'backer.s1', errorType: 'meaning', type: '词义', prompt: '后院是：', options: ['backyard', 'backer', 'badge'], answer: 'backyard', explain: '地点' }
    ],
    usage: { domains: ['商业'], tone: '中性', commonConfusion: ['support'] },
  });

  D('background', {
    etymology: {
      origin: '英语派生：back 加 ground',
      root: { text: 'back + ground', gloss: '背景；出身' },
      history: [
        { label: '名词', text: '名词' },
        { label: '画面的后部', text: '画面的后部' },
      ],
      mnemonic: '也指出身或事情的来龙去脉',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The mountains are in the background.', chinese: '山在背景里。' }],
    contexts: [{
      domain: '描写',
      senseId: 'background.s1',
      en: 'Tell me your background in music.',
      zh: '跟我说说你的音乐经历。',
      structure: 'Tell me your background in music.',
      grammar: '教学例句，用来固定 background 的常见用法。',
      rationale: '背景',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The mountains are in the backyard always if they are far in a photo.',
      right: 'Distant hills in a photo are in the background.',
      reason: '背景',
      rule: '背景',
      special: '两义',
    }],
    quiz: [
      { id: 'background.q1', senseId: 'background.s1', errorType: 'meaning', type: '词义', prompt: 'Far hills in a picture are the _____.', options: ['background', 'backyard', 'backlog'], answer: 'background', explain: '背景' },
      { id: 'background.q2', senseId: 'background.s1', errorType: 'meaning', type: '词义', prompt: '个人经历也叫：', options: ['background', 'bacon', 'bacteria'], answer: 'background', explain: '出身' },
      { id: 'background.q3', senseId: 'background.s1', errorType: 'meaning', type: '词义', prompt: '房子后面的院子是：', options: ['backyard', 'background', 'badge'], answer: 'backyard', explain: '地点' },
      { id: 'background.q4', senseId: 'background.s1', errorType: 'meaning', type: '词义', prompt: '支持者是：', options: ['backer', 'background', 'backup'], answer: 'backer', explain: '人' }
    ],
    usage: { domains: ['描写'], tone: '中性', commonConfusion: ['back'] },
  });

  D('backing', {
    etymology: {
      origin: '英语派生：back 的 -ing 名词，支持或背面材料',
      root: { text: 'back + -ing', gloss: '支持；背衬' },
      history: [
        { label: '名词', text: '名词' },
        { label: '抽象支持', text: '抽象支持' },
      ],
      mnemonic: '也可指物体背面的材料',
      note: '两义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The plan has government backing.', chinese: '计划有政府支持。' }],
    contexts: [{
      domain: '社会',
      senseId: 'backing.s1',
      en: 'The mirror needs new backing.',
      zh: '这面镜子需要新的背衬。',
      structure: 'The mirror needs new backing.',
      grammar: '教学例句，用来固定 backing 的常见用法。',
      rationale: '支持',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Government backing means opposition.',
      right: 'Backing can mean support.',
      reason: '支持',
      rule: '支持',
      special: '两义',
    }],
    quiz: [
      { id: 'backing.q1', senseId: 'backing.s1', errorType: 'meaning', type: '词义', prompt: 'Financial support can be called _____.', options: ['backing', 'backlog', 'bacon'], answer: 'backing', explain: '支持' },
      { id: 'backing.q2', senseId: 'backing.s1', errorType: 'meaning', type: '词义', prompt: '镜子背面的材料也是：', options: ['backing', 'bacteria', 'badge'], answer: 'backing', explain: '背衬' },
      { id: 'backing.q3', senseId: 'backing.s1', errorType: 'meaning', type: '词义', prompt: '积压的工作是：', options: ['backlog', 'backing', 'backup'], answer: 'backlog', explain: '不同' },
      { id: 'backing.q4', senseId: 'backing.s1', errorType: 'meaning', type: '词义', prompt: '向后的是：', options: ['backward', 'backing', 'bad'], answer: 'backward', explain: '形容词' }
    ],
    usage: { domains: ['社会'], tone: '中性', commonConfusion: ['support'] },
  });

  D('backlog', {
    etymology: {
      origin: '英语派生：back 加 log，积压下来的工作',
      root: { text: 'back + log', gloss: '积压' },
      history: [
        { label: '名词', text: '名词' },
        { label: '未处理的一堆事务', text: '未处理的一堆事务' },
      ],
      mnemonic: '可数',
      note: '办公',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'A backlog of emails waited after the holiday.', chinese: '假期之后有一堆邮件积压着。' }],
    contexts: [{
      domain: '办公',
      senseId: 'backlog.s1',
      en: 'The team cleared the backlog in a week.',
      zh: '团队一周内清完了积压。',
      structure: 'The team cleared the backlog in a week.',
      grammar: '教学例句，用来固定 backlog 的常见用法。',
      rationale: '未完成',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'A backlog is a finished empty list.',
      right: 'A backlog is work not yet done.',
      reason: '未完成',
      rule: '未完成',
      special: '办公',
    }],
    quiz: [
      { id: 'backlog.q1', senseId: 'backlog.s1', errorType: 'meaning', type: '词义', prompt: 'Unfinished work is a _____.', options: ['backlog', 'backup', 'backbone'], answer: 'backlog', explain: '积压' },
      { id: 'backlog.q2', senseId: 'backlog.s1', errorType: 'meaning', type: '词义', prompt: 'backlog of _____ .', options: ['orders', 'atoms only', 'aunts only'], answer: 'orders', explain: '订单等' },
      { id: 'backlog.q3', senseId: 'backlog.s1', errorType: 'meaning', type: '词义', prompt: '备份副本是：', options: ['backup', 'backlog', 'bacon'], answer: 'backup', explain: '电脑' },
      { id: 'backlog.q4', senseId: 'backlog.s1', errorType: 'meaning', type: '词义', prompt: '脊柱是：', options: ['backbone', 'backlog', 'badge'], answer: 'backbone', explain: '身体' }
    ],
    usage: { domains: ['办公'], tone: '中性', commonConfusion: ['work'] },
  });

  D('backside', {
    etymology: {
      origin: '英语派生：back 加 side，臀部或后部，口语',
      root: { text: 'back + side', gloss: '臀部；背面' },
      history: [
        { label: '名词', text: '名词' },
        { label: '口语指臀部时不正式', text: '口语指臀部时不正式' },
      ],
      mnemonic: '也可指物体背面',
      note: '注意场合',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He slipped and landed on his backside.', chinese: '他滑了一跤，一屁股坐在地上。' }],
    contexts: [{
      domain: '口语',
      senseId: 'backside.s1',
      en: 'The backside of the painting was stained.',
      zh: '画的背面有污渍。',
      structure: 'The backside of the painting was stained.',
      grammar: '教学例句，用来固定 backside 的常见用法。',
      rationale: '后面',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The backside is always the front door.',
      right: 'The backside is the rear.',
      reason: '后面',
      rule: '后面',
      special: '注意场合',
    }],
    quiz: [
      { id: 'backside.q1', senseId: 'backside.s1', errorType: 'meaning', type: '词义', prompt: 'The rear of an object can be called the _____.', options: ['backside', 'background', 'backlog'], answer: 'backside', explain: '背面' },
      { id: 'backside.q2', senseId: 'backside.s1', errorType: 'meaning', type: '词义', prompt: '口语指臀部时语气：', options: ['不正式', '科学拉丁', '法律专名'], answer: '不正式', explain: '语体' },
      { id: 'backside.q3', senseId: 'backside.s1', errorType: 'meaning', type: '词义', prompt: '背景经历是：', options: ['background', 'backside', 'bacon'], answer: 'background', explain: '不同' },
      { id: 'backside.q4', senseId: 'backside.s1', errorType: 'meaning', type: '词义', prompt: '徽章是：', options: ['badge', 'backside', 'bacteria'], answer: 'badge', explain: '不同' }
    ],
    usage: { domains: ['口语'], tone: '中性', commonConfusion: ['rear'] },
  });

  D('backtalk', {
    etymology: {
      origin: '英语派生：back 加 talk，顶嘴',
      root: { text: 'back + talk', gloss: '顶嘴' },
      history: [
        { label: '名词', text: '名词' },
        { label: '对权威回嘴', text: '对权威回嘴' },
      ],
      mnemonic: '不可数为主',
      note: '口语、贬义',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'No backtalk, please.', chinese: '请不要顶嘴。' }],
    contexts: [{
      domain: '家庭',
      senseId: 'backtalk.s1',
      en: 'His backtalk annoyed the coach.',
      zh: '他的顶嘴惹恼了教练。',
      structure: 'His backtalk annoyed the coach.',
      grammar: '教学例句，用来固定 backtalk 的常见用法。',
      rationale: '顶嘴',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Backtalk is polite agreement.',
      right: 'Backtalk is rude reply.',
      reason: '顶嘴',
      rule: '顶嘴',
      special: '口语、贬义',
    }],
    quiz: [
      { id: 'backtalk.q1', senseId: 'backtalk.s1', errorType: 'meaning', type: '词义', prompt: 'Rude replies to a teacher are _____.', options: ['backtalk', 'backing', 'backup'], answer: 'backtalk', explain: '顶嘴' },
      { id: 'backtalk.q2', senseId: 'backtalk.s1', errorType: 'meaning', type: '词义', prompt: 'backtalk 的色彩：', options: ['贬义', '夸奖', '科学中性必须'], answer: '贬义', explain: '评价' },
      { id: 'backtalk.q3', senseId: 'backtalk.s1', errorType: 'meaning', type: '词义', prompt: '支持是：', options: ['backing', 'backtalk', 'bacon'], answer: 'backing', explain: '不同' },
      { id: 'backtalk.q4', senseId: 'backtalk.s1', errorType: 'meaning', type: '词义', prompt: '备份是：', options: ['backup', 'backtalk', 'badge'], answer: 'backup', explain: '电脑' }
    ],
    usage: { domains: ['家庭'], tone: '中性', commonConfusion: ['reply'] },
  });

  D('backup', {
    etymology: {
      origin: '英语派生：back up 连写为名词',
      root: { text: 'back + up', gloss: '备份；后援' },
      history: [
        { label: '名词', text: '名词' },
        { label: '电脑副本', text: '电脑副本' },
      ],
      mnemonic: '也指后备人员',
      note: '可数',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Make a backup before you update.', chinese: '更新前先做备份。' }],
    contexts: [{
      domain: '技术',
      senseId: 'backup.s1',
      en: 'We need a backup if she is ill.',
      zh: '如果她病了，我们需要替补。',
      structure: 'We need a backup if she is ill.',
      grammar: '教学例句，用来固定 backup 的常见用法。',
      rationale: '备用',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'A backup is the original and only copy you delete.',
      right: 'A backup is a spare copy or extra support.',
      reason: '备用',
      rule: '备用',
      special: '可数',
    }],
    quiz: [
      { id: 'backup.q1', senseId: 'backup.s1', errorType: 'meaning', type: '词义', prompt: 'A spare copy of data is a _____.', options: ['backup', 'backlog', 'backtalk'], answer: 'backup', explain: '备份' },
      { id: 'backup.q2', senseId: 'backup.s1', errorType: 'meaning', type: '词义', prompt: '后备人员也叫：', options: ['backup', 'bacon', 'bacteria'], answer: 'backup', explain: '后援' },
      { id: 'backup.q3', senseId: 'backup.s1', errorType: 'meaning', type: '词义', prompt: '积压是：', options: ['backlog', 'backup', 'backbone'], answer: 'backlog', explain: '工作' },
      { id: 'backup.q4', senseId: 'backup.s1', errorType: 'meaning', type: '词义', prompt: '短语动词分开写：', options: ['back up', 'backup as the only verb spelling', 'badge'], answer: 'back up', explain: '动词' }
    ],
    usage: { domains: ['技术'], tone: '中性', commonConfusion: ['back up'] },
  });

  D('backward', {
    etymology: {
      origin: '英语派生：back 加 ward，向后',
      root: { text: 'back + ward', gloss: '向后的；落后的' },
      history: [
        { label: '形容词或副词', text: '形容词或副词' },
        { label: '方向', text: '方向' },
      ],
      mnemonic: '也可指发展滞后，说人时可能不礼貌',
      note: '方向义中性',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'He took a backward step.', chinese: '他向后退了一步。' }],
    contexts: [{
      domain: '动作',
      senseId: 'backward.s1',
      en: 'A backward glance showed the gate was shut.',
      zh: '他回头一看，门是关着的。',
      structure: 'A backward glance showed the gate was shut.',
      grammar: '教学例句，用来固定 backward 的常见用法。',
      rationale: '向后',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'A backward step means a step forward.',
      right: 'A backward step goes toward the rear.',
      reason: '向后',
      rule: '向后',
      special: '方向义中性',
    }],
    quiz: [
      { id: 'backward.q1', senseId: 'backward.s1', errorType: 'meaning', type: '词义', prompt: 'A step to the rear is _____.', options: ['backward', 'forward', 'awkward only'], answer: 'backward', explain: '向后' },
      { id: 'backward.q2', senseId: 'backward.s1', errorType: 'meaning', type: '词义', prompt: '-ward 表示：', options: ['方向', '否定', '人'], answer: '方向', explain: '后缀' },
      { id: 'backward.q3', senseId: 'backward.s1', errorType: 'meaning', type: '词义', prompt: '向前是：', options: ['forward', 'backward', 'award'], answer: 'forward', explain: '反义' },
      { id: 'backward.q4', senseId: 'backward.s1', errorType: 'meaning', type: '词义', prompt: '尴尬是：', options: ['awkward', 'backward', 'awful'], answer: 'awkward', explain: '不同' }
    ],
    usage: { domains: ['动作'], tone: '中性', commonConfusion: ['back'] },
  });

  D('backyard', {
    etymology: {
      origin: '英语派生：back 加 yard',
      root: { text: 'back + yard', gloss: '后院' },
      history: [
        { label: '名词', text: '名词' },
        { label: '房子后面的院子', text: '房子后面的院子' },
      ],
      mnemonic: '可数',
      note: '美式生活词很常见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The children played in the backyard.', chinese: '孩子们在后院玩。' }],
    contexts: [{
      domain: '家居',
      senseId: 'backyard.s1',
      en: 'We grew tomatoes in the backyard.',
      zh: '我们在后院种了番茄。',
      structure: 'We grew tomatoes in the backyard.',
      grammar: '教学例句，用来固定 backyard 的常见用法。',
      rationale: '院子',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The backyard is the far mountains in a painting always.',
      right: 'The backyard is the garden behind a house.',
      reason: '院子',
      rule: '院子',
      special: '美式生活词很常见',
    }],
    quiz: [
      { id: 'backyard.q1', senseId: 'backyard.s1', errorType: 'meaning', type: '词义', prompt: 'The garden behind a house is the _____.', options: ['backyard', 'background', 'backup'], answer: 'backyard', explain: '后院' },
      { id: 'backyard.q2', senseId: 'backyard.s1', errorType: 'meaning', type: '词义', prompt: '画中远处的山是：', options: ['background', 'backyard', 'backbone'], answer: 'background', explain: '背景' },
      { id: 'backyard.q3', senseId: 'backyard.s1', errorType: 'meaning', type: '词义', prompt: '备份是：', options: ['backup', 'backyard', 'bacon'], answer: 'backup', explain: '电脑' },
      { id: 'backyard.q4', senseId: 'backyard.s1', errorType: 'meaning', type: '词义', prompt: '徽章是：', options: ['badge', 'backyard', 'bacteria'], answer: 'badge', explain: '标记' }
    ],
    usage: { domains: ['家居'], tone: '中性', commonConfusion: ['yard'] },
  });

  D('bacon', {
    etymology: {
      origin: '猪肉经过盐渍或烟熏制成的食物',
      root: { text: 'bacon', gloss: '培根；熏肉' },
      history: [
        { label: '名词', text: '名词' },
        { label: '不可数为主', text: '不可数为主' },
      ],
      mnemonic: '早餐食物',
      note: '英式美式都常见',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She fried bacon and eggs.', chinese: '她煎了熏肉和鸡蛋。' }],
    contexts: [{
      domain: '食物',
      senseId: 'bacon.s1',
      en: 'The smell of bacon filled the kitchen.',
      zh: '熏肉的香味充满了厨房。',
      structure: 'The smell of bacon filled the kitchen.',
      grammar: '教学例句，用来固定 bacon 的常见用法。',
      rationale: '肉',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Bacon is a kind of bacteria.',
      right: 'Bacon is salted or smoked pork.',
      reason: '肉',
      rule: '肉',
      special: '英式美式都常见',
    }],
    quiz: [
      { id: 'bacon.q1', senseId: 'bacon.s1', errorType: 'meaning', type: '词义', prompt: 'Salted pork is _____.', options: ['bacon', 'badge', 'bacteria'], answer: 'bacon', explain: '熏肉' },
      { id: 'bacon.q2', senseId: 'bacon.s1', errorType: 'meaning', type: '词义', prompt: 'bacon 是：', options: ['食物', '细菌', '徽章'], answer: '食物', explain: '不可数' },
      { id: 'bacon.q3', senseId: 'bacon.s1', errorType: 'meaning', type: '词义', prompt: '细菌是：', options: ['bacteria', 'bacon', 'backup'], answer: 'bacteria', explain: '生物' },
      { id: 'bacon.q4', senseId: 'bacon.s1', errorType: 'meaning', type: '词义', prompt: '标记是：', options: ['badge', 'bacon', 'backlog'], answer: 'badge', explain: '物件' }
    ],
    usage: { domains: ['食物'], tone: '中性', commonConfusion: ['meat'] },
  });

  D('bacteria', {
    etymology: {
      origin: '希腊语 bakterion「小棍子」，细菌',
      root: { text: 'bakterion', gloss: '细菌' },
      history: [
        { label: '名词', text: '名词' },
        { label: '科学上 bacteria 是复数', text: '科学上 bacteria 是复数' },
      ],
      mnemonic: '单数 bacterium',
      note: '有的致病，有的无害',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Bacteria grow quickly in warm milk.', chinese: '细菌在温热的牛奶里繁殖得很快。' }],
    contexts: [{
      domain: '科学',
      senseId: 'bacteria.s1',
      en: 'Not all bacteria cause disease.',
      zh: '并非所有细菌都致病。',
      structure: 'Not all bacteria cause disease.',
      grammar: '教学例句，用来固定 bacteria 的常见用法。',
      rationale: '微生物',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Bacteria is always one single animal called a lion.',
      right: 'Bacteria are tiny organisms.',
      reason: '微生物',
      rule: '微生物',
      special: '有的致病，有的无害',
    }],
    quiz: [
      { id: 'bacteria.q1', senseId: 'bacteria.s1', errorType: 'meaning', type: '词义', prompt: 'Tiny organisms, some harmful, are _____.', options: ['bacteria', 'bacon', 'badge'], answer: 'bacteria', explain: '细菌' },
      { id: 'bacteria.q2', senseId: 'bacteria.s1', errorType: 'meaning', type: '词义', prompt: '单数形式是：', options: ['bacterium', 'bacteria always singular in science', 'backup'], answer: 'bacterium', explain: '语法' },
      { id: 'bacteria.q3', senseId: 'bacteria.s1', errorType: 'meaning', type: '词义', prompt: '熏肉是：', options: ['bacon', 'bacteria', 'backer'], answer: 'bacon', explain: '食物' },
      { id: 'bacteria.q4', senseId: 'bacteria.s1', errorType: 'meaning', type: '词义', prompt: '徽章是：', options: ['badge', 'bacteria', 'bachelor'], answer: 'badge', explain: '标记' }
    ],
    usage: { domains: ['科学'], tone: '中性', commonConfusion: ['bacterium'] },
  });

  D('bad', {
    etymology: {
      origin: '基础形容词，不好、严重或变质',
      root: { text: 'bad', gloss: '坏的；严重的' },
      history: [
        { label: '形容词', text: '形容词' },
        { label: '多义', text: '多义' },
      ],
      mnemonic: '比较级 worse，最高级 worst',
      note: '不规则',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'The milk smells bad.', chinese: '牛奶闻起来坏了。' }],
    contexts: [{
      domain: '日常',
      senseId: 'bad.s1',
      en: 'A bad storm kept the boats in harbour.',
      zh: '一场严重的风暴把船留在港里。',
      structure: 'A bad storm kept the boats in harbour.',
      grammar: '教学例句，用来固定 bad 的常见用法。',
      rationale: '变质',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'The milk smells bad so it is fresh.',
      right: 'Bad milk has gone off.',
      reason: '变质',
      rule: '变质',
      special: '不规则',
    }],
    quiz: [
      { id: 'bad.q1', senseId: 'bad.s1', errorType: 'meaning', type: '词义', prompt: 'The news is _____.', options: ['bad', 'badge', 'bacon'], answer: 'bad', explain: '坏' },
      { id: 'bad.q2', senseId: 'bad.s1', errorType: 'meaning', type: '词义', prompt: '比较级是：', options: ['worse', 'badder', 'more bad always'], answer: 'worse', explain: '不规则' },
      { id: 'bad.q3', senseId: 'bad.s1', errorType: 'meaning', type: '词义', prompt: '最高级是：', options: ['worst', 'baddest', 'most bad always'], answer: 'worst', explain: '不规则' },
      { id: 'bad.q4', senseId: 'bad.s1', errorType: 'meaning', type: '词义', prompt: '霉运是：', options: ['bad luck', 'badge', 'backup'], answer: 'bad luck', explain: '短语' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['worse'] },
  });

  D('bad luck', {
    etymology: {
      origin: '英语短语：bad luck，厄运或不走运',
      root: { text: 'bad luck', gloss: '厄运' },
      history: [
        { label: '名词短语', text: '名词短语' },
        { label: '对遭遇不幸的人也可说 Bad luck 表示同情', text: '对遭遇不幸的人也可说 Bad luck 表示同情' },
      ],
      mnemonic: '与 good luck 相反',
      note: '口语',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'Bad luck followed the delayed train.', chinese: '火车晚点之后倒霉事连连。' }],
    contexts: [{
      domain: '日常',
      senseId: 'bad luck.s1',
      en: 'Bad luck! The tickets are sold out.',
      zh: '真不走运！票卖完了。',
      structure: 'Bad luck! The tickets are sold out.',
      grammar: '教学例句，用来固定 bad luck 的常见用法。',
      rationale: '不幸',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'Bad luck means a certain win.',
      right: 'Bad luck means misfortune.',
      reason: '不幸',
      rule: '不幸',
      special: '口语',
    }],
    quiz: [
      { id: 'bad luck.q1', senseId: 'bad luck.s1', errorType: 'meaning', type: '词义', prompt: '_____! The bus left early.', options: ['Bad luck', 'Good luck if you missed it on purpose as praise', 'Bacon'], answer: 'Bad luck', explain: '不走运' },
      { id: 'bad luck.q2', senseId: 'bad luck.s1', errorType: 'meaning', type: '词义', prompt: '反义是：', options: ['good luck', 'bad luck', 'backup'], answer: 'good luck', explain: '好运' },
      { id: 'bad luck.q3', senseId: 'bad luck.s1', errorType: 'meaning', type: '词义', prompt: '形容词坏是：', options: ['bad', 'badge', 'backward'], answer: 'bad', explain: '形容词' },
      { id: 'bad luck.q4', senseId: 'bad luck.s1', errorType: 'meaning', type: '词义', prompt: '徽章是：', options: ['badge', 'bad luck', 'bacteria'], answer: 'badge', explain: '物件' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['luck'] },
  });

  D('badge', {
    etymology: {
      origin: '小标记，用来表明身份、职务或所属',
      root: { text: 'badge', gloss: '徽章；标记' },
      history: [
        { label: '名词', text: '名词' },
        { label: '可数', text: '可数' },
      ],
      mnemonic: '别在身上或印在物上',
      note: '学校、制服',
      source: '教学转写，供核对',
    },
    extraExamples: [{ sense: 1, english: 'She pinned the badge to her coat.', chinese: '她把徽章别在外套上。' }],
    contexts: [{
      domain: '日常',
      senseId: 'badge.s1',
      en: 'A name badge helps guests.',
      zh: '姓名牌对客人有帮助。',
      structure: 'A name badge helps guests.',
      grammar: '教学例句，用来固定 badge 的常见用法。',
      rationale: '标记',
      sourceType: 'authored',
    }],
    mistakes: [{
      errorType: 'grammar',
      wrong: 'A badge is a kind of harmful bacterium only.',
      right: 'A badge shows membership or a job.',
      reason: '标记',
      rule: '标记',
      special: '学校、制服',
    }],
    quiz: [
      { id: 'badge.q1', senseId: 'badge.s1', errorType: 'meaning', type: '词义', prompt: 'A small sign of membership is a _____.', options: ['badge', 'bacon', 'bacteria'], answer: 'badge', explain: '徽章' },
      { id: 'badge.q2', senseId: 'badge.s1', errorType: 'meaning', type: '词义', prompt: 'name _____ .', options: ['badge', 'backlog', 'backbone'], answer: 'badge', explain: '姓名牌' },
      { id: 'badge.q3', senseId: 'badge.s1', errorType: 'meaning', type: '词义', prompt: '熏肉是：', options: ['bacon', 'badge', 'backup'], answer: 'bacon', explain: '食物' },
      { id: 'badge.q4', senseId: 'badge.s1', errorType: 'meaning', type: '词义', prompt: '细菌是：', options: ['bacteria', 'badge', 'bachelor'], answer: 'bacteria', explain: '生物' }
    ],
    usage: { domains: ['日常'], tone: '中性', commonConfusion: ['sign'] },
  });

})(typeof window !== 'undefined' ? window : globalThis);
