/* data/relations.js · 人工标注的词汇关系矩阵 + 易混词组
 * relationType 区分：形近 visual / 音近 phonetic / 同音异形 homophone /
 *                   近义 synonym / 反义 antonym / 易混 confusable / 同根 cognate
 * 同一对词可以同时具备多种关系（允许重叠，但不合并成一类）。
 */
(function (global) {
  'use strict';
  const RA = (global.RA = global.RA || {});

  /** 易混词组：保留原原型的 15 组，用于首页、专项练习与交叉跳转 */
  RA.groups = [
    { title: '适应 / 采用 / 擅长', words: ['adapt', 'adopt', 'adept'], note: '注意 adapt 与 adopt 的元音字母 a / o；adept 主要是形容词。' },
    { title: '影响 / 效果', words: ['affect', 'effect'], note: '最常见区别是 affect 作动词、effect 作名词；都存在较少见的其他用法。' },
    { title: '接受 / 除了', words: ['accept', 'except'], note: '接纳事物 vs 排除例外。' },
    { title: '安静 / 相当', words: ['quiet', 'quite'], note: '拼写和发音都不同，不能靠词形猜意思。' },
    { title: '校长 / 原则', words: ['principal', 'principle'], note: '这两个词通常同音，但词性和含义不同。' },
    { title: '经济 / 节约', words: ['economic', 'economical'], note: '经济领域与节约资源分开记。' },
    { title: '有效 / 高效', words: ['effective', 'efficient'], note: '是否达成目标 vs 是否节省投入。' },
    { title: '赞美 / 补充', words: ['compliment', 'complement'], note: '英语中常同音，分别对应称赞和补充。' },
    { title: '确保 / 投保', words: ['ensure', 'insure'], note: '有语义重叠的历史用法，学习时先掌握常见区别。' },
    { title: '迁出 / 迁入', words: ['emigrate', 'immigrate'], note: 'emigrate from；immigrate to。' },
    { title: '举起 / 升起', words: ['raise', 'rise'], note: '通常 raise 带宾语，rise 不带直接宾语。' },
    { title: '静止 / 文具', words: ['stationary', 'stationery'], note: '常见读法相同，拼写 a / e 不同。' },
    { title: '意识 / 良心', words: ['conscious', 'conscience'], note: '形容词 vs 名词。' },
    { title: '丢失 / 松的', words: ['lose', 'loose'], note: 'lose 的 s 发 /z/；loose 的 s 发 /s/。' },
    { title: '比较 / 时间', words: ['than', 'then'], note: 'than 表示比较；then 表示时间顺序。' },
  ];

  /** 成对标注：人工判断关系类型与语义 / 搭配差异（不靠编辑距离自动生成） */
  RA.pairSpec = [
    { a: 'adapt', b: 'adopt', types: ['visual', 'phonetic', 'confusable'], weight: 5, semanticDiff: 'adapt 是修改现有事物使之适合；adopt 是选择并采用某事物', collocationDiff: 'adapt to a new environment；adopt a policy / adopt a child' },
    { a: 'adapt', b: 'adept', types: ['visual', 'phonetic', 'confusable'], weight: 5, semanticDiff: 'adept 是形容词，描述技能娴熟；adapt 是动词，描述改变或适应', collocationDiff: 'be adept at doing something；adapt to something' },
    { a: 'adopt', b: 'adept', types: ['visual', 'phonetic', 'confusable'], weight: 4, semanticDiff: 'adopt 是动词「采用 / 收养」；adept 是形容词「擅长的」', collocationDiff: 'adopt a method；be adept at something' },
    { a: 'affect', b: 'effect', types: ['phonetic', 'confusable'], weight: 5, semanticDiff: 'affect 通常作动词「影响」；effect 通常作名词「结果、效果」', collocationDiff: 'affect the outcome；have an effect on the outcome' },
    { a: 'accept', b: 'except', types: ['phonetic', 'visual', 'confusable'], weight: 5, semanticDiff: 'accept 是动词「接受」；except 表示「除……之外」', collocationDiff: 'accept an offer；everyone except Tom' },
    { a: 'quiet', b: 'quite', types: ['phonetic', 'confusable'], weight: 4, semanticDiff: 'quiet 是形容词「安静的」；quite 是程度副词「相当」', collocationDiff: 'a quiet room；quite good' },
    { a: 'principal', b: 'principle', types: ['homophone', 'visual', 'confusable'], weight: 5, semanticDiff: 'principal 指校长或「主要的」；principle 指原则、原理', collocationDiff: 'principal aim；moral principle' },
    { a: 'economic', b: 'economical', types: ['cognate', 'visual', 'confusable'], weight: 5, semanticDiff: 'economic 描述经济领域；economical 描述节约、省钱', collocationDiff: 'economic growth；an economical car' },
    { a: 'effective', b: 'efficient', types: ['visual', 'confusable'], weight: 5, semanticDiff: 'effective 回答「有没有效果」；efficient 回答「省不省资源」', collocationDiff: 'an effective solution；an efficient process' },
    { a: 'compliment', b: 'complement', types: ['homophone', 'visual', 'confusable'], weight: 5, semanticDiff: 'compliment 是称赞；complement 是补充、相辅相成', collocationDiff: 'pay a compliment；complement each other' },
    { a: 'ensure', b: 'insure', types: ['phonetic', 'confusable'], weight: 4, semanticDiff: 'ensure 是确保；insure 是为某物投保', collocationDiff: 'ensure safety；insure the house against fire' },
    { a: 'emigrate', b: 'immigrate', types: ['cognate', 'confusable'], weight: 4, semanticDiff: 'emigrate 强调迁出原国；immigrate 强调迁入他国', collocationDiff: 'emigrate from Italy；immigrate to Canada' },
    { a: 'raise', b: 'rise', types: ['phonetic', 'visual', 'confusable'], weight: 5, semanticDiff: 'raise 是及物「使升高」；rise 是不及物「自身上升」', collocationDiff: 'raise prices；prices rise' },
    { a: 'stationary', b: 'stationery', types: ['homophone', 'visual', 'confusable'], weight: 4, semanticDiff: 'stationary 是形容词「静止的」；stationery 是名词「文具」', collocationDiff: 'remain stationary；office stationery' },
    { a: 'conscious', b: 'conscience', types: ['phonetic', 'cognate', 'confusable'], weight: 4, semanticDiff: 'conscious 是形容词「有意识的」；conscience 是名词「良心」', collocationDiff: 'be conscious of the risk；a clear conscience' },
    { a: 'lose', b: 'loose', types: ['phonetic', 'visual', 'confusable'], weight: 5, semanticDiff: 'lose 是动词「丢失、输掉」；loose 是形容词「松的」', collocationDiff: 'lose your keys；loose clothing' },
    { a: 'than', b: 'then', types: ['phonetic', 'visual', 'confusable'], weight: 4, semanticDiff: 'than 用于比较；then 表示时间顺序或「那时」', collocationDiff: 'taller than me；finish work, then rest' },
    { a: 'adapt', b: 'adjust', types: ['synonym', 'confusable'], weight: 3, semanticDiff: 'adapt 强调为新条件而改变；adjust 强调细节上的调整', collocationDiff: 'adapt to a new environment；adjust the settings' },
    { a: 'adapt', b: 'modify', types: ['synonym', 'confusable'], weight: 3, semanticDiff: 'adapt 带有「为了适配」的目的；modify 只表示改动', collocationDiff: 'adapt a product for children；modify a design' },
    { a: 'adapt', b: 'acclimatize', types: ['synonym', 'confusable'], weight: 2, semanticDiff: 'acclimatize 聚焦气候、海拔等自然环境；adapt 适用范围更广', collocationDiff: 'adapt to university life；acclimatize to the heat' },
    { a: 'adapt', b: 'accommodate', types: ['synonym', 'confusable'], weight: 2, semanticDiff: 'accommodate 强调安排去满足别人的需要；adapt 强调自身改变', collocationDiff: 'adapt to a situation；accommodate different needs' },
    { a: 'affect', b: 'effect', types: ['confusable'], weight: 5, semanticDiff: '拼写相近但词性分工不同（effect 也有正式动词用法）', collocationDiff: 'affect sales；have an effect on sales' },
  ];

  /** 全局易混词测试题库（保留原原型题目，并补充义项维度） */
  RA.globalQuiz = [
    { id: 'g1', errorType: 'confusable', type: '易混词辨析', prompt: 'The team decided to _____ a new strategy.', options: ['adapt', 'adopt', 'adept'], answer: 'adopt', explain: '选择并采用策略：adopt a strategy。adapt a strategy 则是修改已有策略。' },
    { id: 'g2', errorType: 'confusable', type: '易混词辨析', prompt: 'She is _____ at solving complex problems.', options: ['adapt', 'adopt', 'adept'], answer: 'adept', explain: 'be adept at doing = 擅长做某事。' },
    { id: 'g3', errorType: 'collocation', type: '介词搭配', prompt: 'You must _____ to a changing environment.', options: ['adapt', 'adopt', 'adept'], answer: 'adapt', explain: 'adapt to = 适应。' },
    { id: 'g4', errorType: 'confusable', type: '易混词辨析', prompt: 'Poor sleep can _____ your attention.', options: ['affect', 'effect'], answer: 'affect', explain: '此处要动词「影响」，使用 affect。' },
    { id: 'g5', errorType: 'collocation', type: '介词搭配', prompt: 'The new plan had a positive _____ on productivity.', options: ['affect', 'effect'], answer: 'effect', explain: 'have an effect on = 对……产生影响。' },
    { id: 'g6', errorType: 'confusable', type: '易混词辨析', prompt: 'She is taller _____ her brother.', options: ['then', 'than'], answer: 'than', explain: '比较级后接 than。' },
    { id: 'g7', errorType: 'meaning', type: '词义选择', prompt: 'Please stay _____ during the exam.', options: ['quiet', 'quite'], answer: 'quiet', explain: 'quiet 是形容词「安静的」。' },
    { id: 'g8', errorType: 'meaning', type: '词义选择', prompt: '_____ growth is an important topic in this report.', options: ['economic', 'economical'], answer: 'economic', explain: 'economic growth = 经济增长。' },
    { id: 'g9', errorType: 'meaning', type: '词义选择', prompt: 'He bought a new pencil at the _____ shop.', options: ['stationery', 'stationary'], answer: 'stationery', explain: 'stationery = 文具。' },
    { id: 'g10', errorType: 'grammar', type: '语法填空', prompt: 'Prices may _____ next month.', options: ['raise', 'rise'], answer: 'rise', explain: '主语 prices 自身上涨用不及物动词 rise。' },
    { id: 'g11', errorType: 'confusable', type: '易混词辨析', prompt: 'Please _____ that every file is backed up.', options: ['ensure', 'insure'], answer: 'ensure', explain: 'ensure = 确保。' },
    { id: 'g12', errorType: 'meaning', type: '词义选择', prompt: 'This solution works but wastes resources. It is effective but not _____.', options: ['efficient', 'effective'], answer: 'efficient', explain: 'efficient 强调节省资源、效率高。' },
    { id: 'g13', errorType: 'confusable', type: '易混词辨析', prompt: 'They decided to _____ from their home country.', options: ['emigrate', 'immigrate'], answer: 'emigrate', explain: 'emigrate from 表示从原籍国迁出。' },
    { id: 'g14', errorType: 'collocation', type: '介词搭配', prompt: 'The film was adapted _____ a novel.', options: ['from', 'into', 'at'], answer: 'from', explain: 'be adapted from 表示改编自某个来源。' },
  ];
})(typeof window !== 'undefined' ? window : globalThis);
